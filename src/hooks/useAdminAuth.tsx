import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminAuthState {
  session: boolean;
  loading: boolean;
  isAdmin: boolean;
}

interface AdminAuthContextValue extends AdminAuthState {
  signIn: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signOut: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AdminAuthState>({ session: false, loading: true, isAdmin: false });

  useEffect(() => {
    if (!supabase) {
      setState({ session: false, loading: false, isAdmin: false });
      return;
    }

    let mounted = true;

    const resolve = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      let isAdmin = false;
      if (session) {
        const { data: row } = await supabase
          .from('admins')
          .select('id')
          .eq('id', session.user.id)
          .maybeSingle();
        isAdmin = !!row;
      }
      if (mounted) setState({ session: !!session, loading: false, isAdmin });
    };

    resolve();

    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        setState({ session: false, loading: false, isAdmin: false });
        return;
      }
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        (async () => {
          const { data: sessionData } = await supabase.auth.getSession();
          const session = sessionData.session;
          let isAdmin = false;
          if (session) {
            const { data: row } = await supabase
              .from('admins')
              .select('id')
              .eq('id', session.user.id)
              .maybeSingle();
            isAdmin = !!row;
          }
          if (mounted) setState({ session: !!session, loading: false, isAdmin });
        })();
      }
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { ok: false, error: 'Database is not connected' };
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { ok: false, error: error.message };
    const { data: row } = await supabase.from('admins').select('id').eq('id', data.user.id).maybeSingle();
    if (!row) {
      await supabase.auth.signOut();
      return { ok: false, error: 'This account does not have admin access' };
    }
    return { ok: true };
  };

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setState({ session: false, loading: false, isAdmin: false });
  };

  return <AdminAuthContext.Provider value={{ ...state, signIn, signOut }}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth(): AdminAuthContextValue {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
