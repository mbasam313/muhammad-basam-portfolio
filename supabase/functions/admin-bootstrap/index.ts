// Admin bootstrap — creates the initial administrator account.
// Reads credentials from Supabase secrets (ADMIN_USERNAME, ADMIN_PASSWORD), never from source.
// After first successful run it locks itself: further calls require an existing admin session.

import { createClient } from "npm:@supabase/supabase-js@2.47.10";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const url = Deno.env.get("SUPABASE_URL") ?? "";
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

    const username = Deno.env.get("ADMIN_USERNAME") ?? "";
    const password = Deno.env.get("ADMIN_PASSWORD") ?? "";

    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: "ADMIN_USERNAME and ADMIN_PASSWORD secrets are not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const admin = createClient(url, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });

    // Check whether any admin already exists
    const { count, error: countErr } = await admin
      .from("admins")
      .select("id", { count: "exact", head: true });

    if (countErr) {
      return new Response(JSON.stringify({ error: countErr.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const email = username.includes("@") ? username : `${username}@mbasamportfolio.site`;

    if ((count ?? 0) > 0) {
      // Bootstrap already done — only allow re-run when the caller is an existing admin
      const authHeader = req.headers.get("Authorization") ?? "";
      const scoped = createClient(url, anonKey, {
        global: { headers: { Authorization: authHeader } },
        auth: { autoRefreshToken: false, persistSession: false },
      });
      const { data: userData } = await scoped.auth.getUser();
      const uid = userData?.user?.id;
      if (!uid) {
        return new Response(JSON.stringify({ error: "Admin already provisioned" }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const { data: isAdmin } = await admin.from("admins").select("id").eq("id", uid).maybeSingle();
      if (!isAdmin) {
        return new Response(JSON.stringify({ error: "Admin already provisioned" }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Create (or reuse) the auth user
    const { data: listData, error: listErr } = await admin.auth.admin.listUsers();
    if (listErr) {
      return new Response(JSON.stringify({ error: listErr.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const existing = listData.users.find((u) => u.email === email);
    let userId = existing?.id;

    if (!userId) {
      const { data: created, error: createErr } = await admin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });
      if (createErr || !created.user) {
        return new Response(JSON.stringify({ error: createErr?.message ?? "Create user failed" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      userId = created.user.id;
    } else {
      const { error: updErr } = await admin.auth.admin.updateUserById(userId, { password });
      if (updErr) {
        return new Response(JSON.stringify({ error: updErr.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const { error: insErr } = await admin
      .from("admins")
      .upsert({ id: userId, email }, { onConflict: "id" });

    if (insErr) {
      return new Response(JSON.stringify({ error: insErr.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Bootstrap failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
