/*
# Seed service content JSONB and portfolio items

1. Purpose
   - Seeds services.content for all 5 services with full structured content.
   - Seeds portfolio_items: 12 logos, 12 ad creatives, 24 SM posts.
   - Seeds branding projects as projects with collection='branding'.
   - Seeds digital marketing portfolio entry in portfolio_items.
   - Links pricing_plans.service_id to services.slug.

2. Idempotent: only seeds services where content = '{}'. Portfolio items use ON CONFLICT DO NOTHING.
*/

-- ---------- SERVICE CONTENT ----------
update public.services set content = $j${
  "eyebrow": "Web Design",
  "intro": "A website should make a business easier to understand, trust and choose. I design WordPress websites with a clear flow, strong hierarchy and a polished experience on every screen.",
  "description": "WordPress powers over 40% of the web because it is flexible, manageable and built for content. I design and build WordPress websites that are structured around the way real people browse — clear navigation, readable typography, responsive layouts and pages that load quickly. Every site I build is designed to be updated by the business owner after launch, without needing a developer for every small change. From business websites and portfolios to landing pages and full redesigns, the focus stays on clarity, usability and a visual system that stays consistent as the site grows.",
  "items": ["WordPress websites","Business & portfolio sites","Website redesigns","Responsive layouts","Content management","Basic performance optimisation","Basic SEO structure","Cross-browser compatibility"],
  "benefits": [
    {"title": "Easy to manage", "description": "Built in WordPress so you can update content, pages and images yourself after launch."},
    {"title": "Responsive on every device", "description": "Designed mobile-first and tested across screen sizes from phones to desktops."},
    {"title": "Clear structure", "description": "Pages, navigation and content organised around how people actually browse."},
    {"title": "Fast and lightweight", "description": "Clean builds with basic performance optimisation so pages load quickly."}
  ],
  "process": [
    {"title": "Understand the business and audience", "description": "What the business needs, who the users are and what the project has to achieve."},
    {"title": "Plan pages, content and user flow", "description": "Structure, navigation, content priorities and how people will move through everything."},
    {"title": "Design a clear visual system", "description": "Layout, hierarchy, typography and visuals that stay consistent with the brand."},
    {"title": "Build and refine across screen sizes", "description": "Implementation in WordPress, responsive checks, refinements and launch."}
  ],
  "faqs": [
    {"question": "Do you only build WordPress websites?", "answer": "WordPress is my primary platform for website design because it is flexible, widely supported and easy for clients to manage. For most business, portfolio and landing page projects, WordPress is the right fit."},
    {"question": "Can I update the website myself after launch?", "answer": "Yes. I build sites in WordPress with a clear content structure, so you can update text, images and pages without needing a developer for every small change."},
    {"question": "Do you redesign existing websites?", "answer": "Yes. Website redesigns are a big part of what I do. I can rebuild an existing site with a cleaner structure, updated visuals and better responsiveness."},
    {"question": "Will my website work on mobile?", "answer": "Every site I build is designed mobile-first and tested across screen sizes. Responsive layout is a core part of the process, not an afterthought."}
  ]
}$j$::jsonb
where slug = 'website-design' and content = '{}'::jsonb;

update public.services set content = $j${
  "eyebrow": "Visual Design",
  "intro": "Good graphic design gives a business a recognisable voice. I create focused visual content that supports the message, fits the brand and works in the places people actually see it.",
  "description": "Graphic design is how a business communicates visually. I design digital graphics for social media, advertising, marketing and branding — each piece built around clear hierarchy, readable typography and a visual system that stays consistent across every touchpoint. From social media posts and Meta ad creatives to promotional graphics and full branding materials, the goal is always the same: make the message easy to understand and the brand easy to recognise. I work primarily in Adobe Photoshop and Illustrator, with Canva Pro for fast turnaround projects.",
  "items": ["Social media posts","Meta ad creatives","Promotional graphics","Marketing materials","Digital reports","Branding materials","Logo design","Visual identity systems"],
  "benefits": [
    {"title": "Consistent brand visuals", "description": "A visual system that stays recognisable across every post, ad and marketing material."},
    {"title": "Readable and clear", "description": "Typography and hierarchy designed to communicate the message quickly."},
    {"title": "Built for the platform", "description": "Graphics sized and optimised for social media, ads and digital use."},
    {"title": "Fast turnaround", "description": "Efficient workflow using Photoshop, Illustrator and Canva Pro."}
  ],
  "process": [
    {"title": "Clarify the message and audience", "description": "What needs to be communicated and who needs to understand it."},
    {"title": "Establish layout, type and visual direction", "description": "Typography, colour, composition and the visual system for the set."},
    {"title": "Create a consistent set of visuals", "description": "Each graphic designed to work on its own and as part of a consistent set."},
    {"title": "Review and prepare final assets", "description": "Checks, refinements and export in the right formats for each platform."}
  ],
  "faqs": [
    {"question": "What kind of graphics do you design?", "answer": "Social media posts, Meta ad creatives, promotional graphics, marketing materials, digital reports, branding materials and logo design. If it is a digital graphic, I can design it."},
    {"question": "What tools do you use?", "answer": "Adobe Photoshop and Illustrator for production design, and Canva Pro for fast turnaround and client-editable templates."},
    {"question": "Can you design a full brand identity?", "answer": "Yes. I can design a visual identity system including logo, colour, typography and a consistent set of graphics for social media and marketing."},
    {"question": "Do you design print materials?", "answer": "My focus is digital graphics for social media, ads and online marketing. For print, I can prepare files but my main work is digital."}
  ]
}$j$::jsonb
where slug = 'graphic-design' and content = '{}'::jsonb;

update public.services set content = $j${
  "eyebrow": "Digital Marketing",
  "intro": "Advertising works better when the message, creative and audience are considered together. I help plan and manage Meta campaigns with practical creative direction and ongoing performance review.",
  "description": "Meta Ads — Facebook and Instagram advertising — are one of the most effective ways to reach a specific audience. But running ads without a plan wastes budget. I manage Meta Ads campaigns end to end: understanding the objective, researching the audience, planning the creative direction, building the campaign structure and monitoring performance against real data. Because I also design the ad creatives, the message and the targeting stay aligned. I also manage Google Ads for search campaigns, giving a combined paid strategy across social and search.",
  "items": ["Facebook & Instagram Ads","Google Ads","Campaign planning","Ad creative strategy","Audience research","Performance analysis","Digital reporting","Budget optimisation"],
  "benefits": [
    {"title": "Creative and targeting together", "description": "Because I design the creatives and manage the campaigns, the message and the audience stay aligned."},
    {"title": "Data-driven decisions", "description": "Campaigns monitored against real performance data, not guesswork."},
    {"title": "Full-funnel approach", "description": "From awareness to conversion, with campaigns structured for each stage."},
    {"title": "Clear reporting", "description": "Regular performance reports that explain what is working and what is being adjusted."}
  ],
  "process": [
    {"title": "Set the campaign objective", "description": "What does the business need — awareness, leads, sales or traffic?"},
    {"title": "Research audiences and messages", "description": "Who to reach, what message will resonate and what creative will stop the scroll."},
    {"title": "Prepare creative and campaign structure", "description": "Design ad creatives, build audiences and structure the campaign for testing."},
    {"title": "Monitor, learn and optimise", "description": "Track performance, test variations, adjust budgets and refine the approach."}
  ],
  "faqs": [
    {"question": "Do you manage both Facebook and Instagram Ads?", "answer": "Yes. Meta Ads run across both Facebook and Instagram. I plan and manage campaigns across both platforms as part of a single strategy."},
    {"question": "Do you also manage Google Ads?", "answer": "Yes, I manage Google Ads for search campaigns alongside Meta Ads, giving a combined paid strategy across social and search."},
    {"question": "Do you design the ad creatives too?", "answer": "Yes. Because I am also a graphic designer, I create the ad creatives as part of the campaign, so the message and the targeting stay aligned."},
    {"question": "How do you report on performance?", "answer": "I provide regular performance reports that show what is working, what is being adjusted and how the budget is being used."}
  ]
}$j$::jsonb
where slug = 'meta-ads' and content = '{}'::jsonb;

update public.services set content = $j${
  "eyebrow": "Online Stores",
  "intro": "An online store needs to help people find the right product and feel confident completing a purchase. I design WooCommerce experiences that keep products, categories and next steps easy to understand.",
  "description": "WooCommerce is the most popular e-commerce platform on WordPress, and for good reason — it is flexible, manageable and built to grow. I design WooCommerce stores that make product browsing simple and checkout straightforward. From store structure and category organisation to product page design and responsive shopping flows, every decision is made with the customer journey in mind. Whether it is a new store, a product migration or a full store redesign, the focus is on helping people find what they need and complete their purchase with confidence.",
  "items": ["WooCommerce stores","Product and category pages","Store structure","Responsive shopping flows","Product content management","Store redesigns","Checkout optimisation","Payment gateway setup"],
  "benefits": [
    {"title": "Simple product browsing", "description": "Categories, filters and product pages designed to help customers find what they need fast."},
    {"title": "Confident checkout", "description": "A checkout flow that reduces friction and makes the next step obvious."},
    {"title": "Manageable inventory", "description": "WooCommerce built so you can manage products, categories and content yourself."},
    {"title": "Mobile shopping", "description": "Responsive shopping flows tested from phone to desktop."}
  ],
  "process": [
    {"title": "Organise products and categories", "description": "Structure the catalogue so products are easy to find and browse."},
    {"title": "Plan the shopping journey", "description": "How customers move from category to product to cart to checkout."},
    {"title": "Design product-focused pages", "description": "Product images, descriptions and calls to action designed to support a purchase."},
    {"title": "Build, test and refine the store", "description": "Implementation in WooCommerce, responsive testing and checkout refinement."}
  ],
  "faqs": [
    {"question": "Do you only build WooCommerce stores?", "answer": "WooCommerce is my primary e-commerce platform because it is flexible, manageable and built on WordPress. For most online store projects, WooCommerce is the right fit."},
    {"question": "Can you redesign an existing WooCommerce store?", "answer": "Yes. Store redesigns are a big part of what I do — rebuilding the product browsing and checkout experience with a cleaner structure."},
    {"question": "Can I manage products myself after launch?", "answer": "Yes. WooCommerce is built for store owners to manage products, categories and orders without needing a developer."},
    {"question": "Do you set up payment gateways?", "answer": "Yes, I configure payment gateways as part of the store build so checkout works end to end."}
  ]
}$j$::jsonb
where slug = 'ecommerce' and content = '{}'::jsonb;

update public.services set content = $j${
  "eyebrow": "Conversion Design",
  "intro": "A landing page has one job: make the next step obvious. I design campaign pages with clear messaging, purposeful sections and a visual path that supports the goal.",
  "description": "A landing page is different from a full website. It exists for one reason — to get a visitor to take a specific action. I design landing pages for lead generation, product launches, service campaigns and ad destinations. Each page is built around a single message, a clear visual path and a call to action that is impossible to miss. Whether the goal is form fills, sign-ups, purchases or clicks, the design is focused on removing distractions and guiding the visitor to the next step. Pages are designed mobile-first and optimised for the platforms sending traffic to them.",
  "items": ["Lead generation pages","Product promotion pages","Service campaigns","Ad destination pages","Clear calls to action","Mobile-first layouts","Form design","Conversion-focused copy layout"],
  "benefits": [
    {"title": "One clear message", "description": "Every section designed to support a single goal — no distractions."},
    {"title": "Obvious next step", "description": "A call to action that is impossible to miss and easy to take."},
    {"title": "Built for ad traffic", "description": "Pages designed to match the ad that sends traffic, for a consistent experience."},
    {"title": "Mobile-first", "description": "Most landing page traffic is mobile — pages are designed for that reality."}
  ],
  "process": [
    {"title": "Define the page goal", "description": "What action should the visitor take? Form fill, sign-up, purchase or click?"},
    {"title": "Shape the message and offer", "description": "The headline, sub-headline and offer that will resonate with the audience."},
    {"title": "Design the visual path", "description": "Sections, hierarchy and call to action placed to guide the eye."},
    {"title": "Review the experience on every device", "description": "Mobile-first testing, refinement and launch."}
  ],
  "faqs": [
    {"question": "What is a landing page?", "answer": "A landing page is a single-page website built for one goal — getting a visitor to take a specific action like filling a form, signing up or buying a product. It is different from a full website because it removes distractions."},
    {"question": "Do you design landing pages for ad campaigns?", "answer": "Yes. Ad destination pages are one of the most common types of landing pages I design. The page is designed to match the ad that sends traffic, for a consistent experience."},
    {"question": "Can landing pages be built in WordPress?", "answer": "Yes. I build landing pages in WordPress so they are easy to manage and update, and they can be deployed quickly for campaigns."},
    {"question": "How is a landing page different from a homepage?", "answer": "A homepage has many goals and links. A landing page has one goal and one call to action. Every section on a landing page exists to support that single action."}
  ]
}$j$::jsonb
where slug = 'landing-pages' and content = '{}'::jsonb;

-- ---------- LOGOS (12 items) ----------
insert into public.portfolio_items (collection, title, image_url, sort_order, status) values
  ('logos', 'MIK Builders', 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&h=200&fit=crop', 0, 'published'),
  ('logos', 'TRODAT', 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop', 1, 'published'),
  ('logos', 'COG21', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop', 2, 'published'),
  ('logos', 'Tourly', 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&h=200&fit=crop', 3, 'published'),
  ('logos', 'CheapMyle', 'https://images.unsplash.com/photo-1636955840493-f43a02bfa064?w=200&h=200&fit=crop', 4, 'published'),
  ('logos', 'Fivora', 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=200&h=200&fit=crop', 5, 'published'),
  ('logos', 'HRS Herbals', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop', 6, 'published'),
  ('logos', 'Sultan', 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=200&h=200&fit=crop', 7, 'published'),
  ('logos', 'CrownStar', 'https://images.unsplash.com/photo-1557683316-973673baf926?w=200&h=200&fit=crop', 8, 'published'),
  ('logos', 'Orbis Max', 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200&h=200&fit=crop', 9, 'published'),
  ('logos', 'Executive Builders', 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=200&h=200&fit=crop', 10, 'published'),
  ('logos', 'Serve Gwinnett', 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=200&h=200&fit=crop', 11, 'published')
on conflict do nothing;

-- ---------- AD CREATIVES (12 items) ----------
insert into public.portfolio_items (collection, image_url, sort_order, status) values
  ('ad_creatives', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop', 0, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=300&h=300&fit=crop', 1, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=300&h=300&fit=crop', 2, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=300&fit=crop', 3, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=300&fit=crop', 4, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop', 5, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop', 6, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop', 7, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop', 8, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop', 9, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=300&fit=crop', 10, 'published'),
  ('ad_creatives', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop', 11, 'published')
on conflict do nothing;

-- ---------- SM POSTS (24 items) ----------
insert into public.portfolio_items (collection, image_url, sort_order, status) values
  ('sm_posts', 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=300&fit=crop', 0, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=300&h=300&fit=crop', 1, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=300&h=300&fit=crop', 2, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?w=300&h=300&fit=crop', 3, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=300&fit=crop', 4, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=300&fit=crop', 5, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=300&h=300&fit=crop', 6, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=300&fit=crop', 7, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop', 8, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=300&fit=crop', 9, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=300&fit=crop', 10, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop', 11, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop', 12, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop', 13, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop', 14, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1552581234-26160f608093?w=300&h=300&fit=crop', 15, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop', 16, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=300&h=300&fit=crop', 17, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=300&h=300&fit=crop', 18, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', 19, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=300&h=300&fit=crop', 20, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=300&fit=crop', 21, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=300&fit=crop', 22, 'published'),
  ('sm_posts', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop', 23, 'published')
on conflict do nothing;

-- ---------- BRANDING PROJECTS ----------
insert into public.projects (slug, title, category, description, cover_image, status, sort_order, featured, collection, gallery)
values
  ('crownstar-brand', 'CrownStar - Pizza & Cafe', 'branding', 'Brand Guidelines', null, 'published', 0, false, 'branding', $g$[{"pdfUrl":"/pdfs/crownstar-brand-guidelines.pdf"}]$g$::jsonb),
  ('hrs-branding', 'HRS Herbals', 'branding', 'Brand Guidelines', null, 'published', 1, false, 'branding', $g$[{"pdfUrl":"/pdfs/hrs-herbals-brand-guidelines.pdf"}]$g$::jsonb),
  ('executive-brand', 'Executive Builders', 'branding', 'Brand Guidelines', null, 'published', 2, false, 'branding', $g$[{"pdfUrl":"/pdfs/executive-builders-brand-guidelines.pdf"}]$g$::jsonb),
  ('serve-gwinnett-brand', 'Serve Gwinnett', 'branding', 'Brand Guidelines', null, 'published', 3, false, 'branding', $g$[{"pdfUrl":"/pdfs/serve-gwinnett-brand-guidelines.pdf"}]$g$::jsonb)
on conflict (slug) do nothing;

-- ---------- DIGITAL MARKETING ENTRY ----------
insert into public.portfolio_items (collection, title, description, pdf_url, sort_order, status, content) values
  ('digital_marketing',
   'Digital Marketing Portfolio',
   'A comprehensive overview of digital marketing work including campaign planning, ad creative strategy, audience research and performance analysis across Facebook, Instagram and Google Ads.',
   '/pdfs/digital-marketing-portfolio.pdf',
   0, 'published',
   $j${
     "features": [
       {"icon": "Target", "title": "Campaign Planning", "description": "Structured campaign plans built around clear business objectives and target audiences."},
       {"icon": "Megaphone", "title": "Ad Creative Strategy", "description": "Ad creatives designed and tested together with the targeting for better alignment."},
       {"icon": "Users", "title": "Audience Research", "description": "Audience research that informs who to reach and what message will resonate."},
       {"icon": "BarChart3", "title": "Performance Analysis", "description": "Performance tracking and reporting that explains what is working and what to adjust."}
     ],
     "bulletPoints": [
       "Campaign planning for Facebook & Instagram Ads",
       "Google Ads search campaign management",
       "Ad creative design and A/B testing",
       "Audience research and targeting strategy",
       "Performance tracking and monthly reporting",
       "Budget optimisation across platforms"
     ]
   }$j$::jsonb)
on conflict do nothing;

-- ---------- LINK PRICING PLANS TO SERVICES ----------
update public.pricing_plans set service_id = 'website-design' where service_name = 'WordPress Website Design' and service_id is null;
update public.pricing_plans set service_id = 'graphic-design' where service_name = 'Graphic Design' and service_id is null;
update public.pricing_plans set service_id = 'meta-ads' where service_name = 'Meta Ads Management' and service_id is null;
update public.pricing_plans set service_id = 'landing-pages' where service_name = 'Landing Page Design' and service_id is null;
update public.pricing_plans set service_id = 'ecommerce' where service_name = 'E-commerce & WooCommerce' and service_id is null;
