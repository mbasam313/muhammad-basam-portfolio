/*
# Seed full CMS content from existing site (page content + service content)

1. Purpose
   - Imports page section content and service content JSONB from src/data/site.ts.
   - Idempotent: only seeds where content = '{}' to avoid overwriting admin edits.
   - Uses dollar-quoting for safe JSON embedding.

2. Data Seeded
   - pages.content for home, about, services, portfolio, pricing, contact
   - services.content for all 5 services (eyebrow, intro, description, items, benefits, process, faqs)
   - New pages: services overview + 5 service page entries
*/

-- ---------- PAGE CONTENT ----------

update public.pages set
  content = $j${
    "hero": {
      "headline": "I Build Modern Websites, Create Stunning Designs & Run Meta Ads That Get Results",
      "subtext": "Website Designer, Graphic Designer & Digital Marketing Professional with 4+ years of experience helping businesses look better and work better online.",
      "primaryCta": "View My Work",
      "primaryCtaHref": "/portfolio",
      "secondaryCta": "Let's Work Together",
      "secondaryCtaHref": "/contact"
    },
    "stats": [
      {"value": "10+", "label": "Websites Designed"},
      {"value": "100+", "label": "Graphic Design Projects"},
      {"value": "$50K+", "label": "Ad Spend Managed"},
      {"value": "15+", "label": "Happy Clients"}
    ],
    "features": [
      {"icon": "Globe", "text": "Websites that communicate clearly and work on every device"},
      {"icon": "Palette", "text": "Visual identity and graphics that fit the brand and the audience"},
      {"icon": "Megaphone", "text": "Meta and Google campaigns planned around real business goals"},
      {"icon": "ShoppingCart", "text": "WooCommerce stores with simple browsing and confident checkout"},
      {"icon": "Layout", "text": "Landing pages built around one message and one clear next step"},
      {"icon": "Search", "text": "Basic SEO and content structure that helps people find the site"}
    ],
    "featuresHeading": ["Everything your business needs", "to look better and work better online."],
    "featuresDescription": "One person covering the full digital journey — from the website itself to the visuals that fill it and the campaigns that bring people to it.",
    "process": [
      {"number": "01", "title": "Understand", "body": "What the business needs, who the users are and what the project has to achieve."},
      {"number": "02", "title": "Plan", "body": "Structure, pages, content priorities and how people will move through everything."},
      {"number": "03", "title": "Design", "body": "Layout, hierarchy, typography and visuals that stay consistent with the brand."},
      {"number": "04", "title": "Build", "body": "Implementation in WordPress or the right tool, responsive across every screen size."},
      {"number": "05", "title": "Review & launch", "body": "Checks, refinements and adjustments — then launch, with room to keep improving."}
    ],
    "finalCta": {
      "heading": "Have a Project in Mind?",
      "description": "Let's talk about what you're building. I'll help you figure out the best way forward — whether it's a website, a campaign, or a full brand presence.",
      "primaryCta": "Let's Work Together",
      "primaryCtaHref": "/contact",
      "secondaryCta": "View Pricing",
      "secondaryCtaHref": "/pricing"
    },
    "digitalMarketing": {
      "heading": "Digital Marketing Portfolio",
      "description": "A selection of digital marketing work including campaign planning, ad creative strategy, audience research and performance analysis.",
      "pdfUrl": "/pdfs/digital-marketing-portfolio.pdf",
      "features": [
        {"icon": "Target", "title": "Campaign Planning", "description": "Structured campaign plans built around clear business objectives and target audiences."},
        {"icon": "Megaphone", "title": "Ad Creative Strategy", "description": "Ad creatives designed and tested together with the targeting for better alignment."},
        {"icon": "Users", "title": "Audience Research", "description": "Audience research that informs who to reach and what message will resonate."},
        {"icon": "BarChart3", "title": "Performance Analysis", "description": "Performance tracking and reporting that explains what is working and what to adjust."}
      ]
    }
  }$j$::jsonb,
  page_type = 'home'
where slug = 'home' and content = '{}'::jsonb;

update public.pages set
  content = $j${
    "hero": {
      "eyebrow": "About Me",
      "title": "Designer, developer, and marketer — all in one.",
      "name": "Muhammad Basam",
      "role": "Creative Head & Social Media Manager at Skyward Vision",
      "location": "Peshawar, Khyber Pakhtunkhwa, Pakistan",
      "shortBio": "Website designer, graphic designer and digital marketing professional with 4+ years of practical experience across WordPress, WooCommerce, graphic design, Meta Ads and Google Ads."
    },
    "bio": [
      "I work across website design, visual design, social media, advertising, and digital marketing. My main tools are WordPress, WooCommerce, Canva Pro, Meta Ads, and Google Ads — but the tool is never the point. The point is building something clear, useful, and consistent with the brand behind it.",
      "I've worked with companies, agencies, and clients on business websites, e-commerce stores, landing pages, social media creatives, ad campaigns, reports, and branding materials. I'm comfortable handling both the creative and the technical side of a project — from planning and design to implementation, content, advertising, and optimisation.",
      "My approach is practical and result-focused. I don't just make things look good — I think about usability, structure, user experience, performance, and the purpose behind every design decision."
    ],
    "specializations": [
      {"icon": "Globe", "title": "Website Design", "description": "Modern, responsive websites built around clear structure, usability, and business goals.", "items": ["WordPress websites","WooCommerce stores","Business & portfolio sites","Landing pages","Website redesigns","Performance optimisation"]},
      {"icon": "Palette", "title": "Graphic Design", "description": "Digital graphics for brands and campaigns — designed to communicate quickly and clearly.", "items": ["Social media posts","Meta ad creatives","Promotional graphics","Marketing materials","Digital reports","Branding materials"]},
      {"icon": "Megaphone", "title": "Digital Marketing", "description": "Paid social and search campaigns where creative and targeting are planned together.", "items": ["Facebook & Instagram Ads","Google Ads","Campaign planning","Ad creative strategy","Audience research","Performance analysis"]},
      {"icon": "Share2", "title": "Social Media Management", "description": "Content planning, creative development, and consistent brand communication across channels.", "items": ["Content planning","Post design","Caption coordination","Social media scheduling","Campaign support","Performance tracking"]}
    ],
    "experiences": [
      {"company": "Skyward Vision", "role": "Creative Head & Social Media Manager", "period": "Current", "description": "Leads creative design work, social media activities, and digital projects. Recently designed an employee ID card system with an AI-assisted QR verification and profile system.", "highlights": ["Creative design & visual communication","Social media management","AI-assisted employee verification system"]},
      {"company": "Zetasoft Solutions", "role": "WordPress Designer → WordPress Lead", "period": "1.5+ years", "description": "Started as a WordPress Designer and was promoted to WordPress Lead after six months. Managed website structure, page design, responsive layouts, and client requirements.", "highlights": ["Promoted to WordPress Lead","Website structure & page design","Client project management"]},
      {"company": "Greens Marketing", "role": "Digital Marketing Expert & Graphic Designer", "period": "", "description": "Worked on digital marketing and graphic design projects, combining visual design with advertising and marketing goals.", "highlights": ["Meta Ads & social media advertising","Ad creative design","Marketing reports & digital content"]},
      {"company": "WAPS Agency", "role": "Remote WordPress Designer", "period": "", "description": "Worked remotely on website design, WordPress-related tasks, page creation, updates, and design improvements.", "highlights": ["Remote website design","Independent task management","Design improvements & updates"]},
      {"company": "Gondal Group of Marketing", "role": "Graphic Designer / Senior Graphic Designer", "period": "", "description": "Created promotional graphics, marketing creatives, social media designs, and branded visual content for real estate marketing.", "highlights": ["Promotional graphics & creatives","Real estate marketing exposure","Professional brand communication"]}
    ],
    "philosophy": {
      "heading": "Clean, modern, and built to communicate.",
      "description": "I believe good design should not only look attractive — it should be easy to understand and serve a clear purpose. I prefer clean, modern interfaces over designs overloaded with unnecessary effects.",
      "points": ["Clear hierarchy","Strong spacing","Good typography","Consistent visual systems","Simple layouts","Strong contrast","User-friendly structure","Brand consistency","Purpose-driven visuals"]
    },
    "skills": [
      {"label": "Website & Web", "skills": ["WordPress","WooCommerce","Responsive Design","Landing Page Design","E-commerce Website Design","Basic SEO"]},
      {"label": "Design", "skills": ["Graphic Design","Social Media Design","Ad Creative Design","Canva Pro","Layout Design","Visual Hierarchy"]},
      {"label": "Advertising & Marketing", "skills": ["Meta Ads","Facebook Ads","Instagram Ads","Google Ads","Campaign Planning","Performance Analysis"]}
    ],
    "products": [
      {"name": "VisualWinner", "description": "A platform for live A/B design voting. Upload two designs, share a voting campaign, and let the audience decide which performs better.", "url": "https://visualwinner.vercel.app/", "features": ["YouTube thumbnails","Ad creatives","Logos","Podcast covers","Social media designs"]},
      {"name": "Prompt Enhancer", "description": "A web app that turns rough AI prompts into detailed, structured prompts for tools like ChatGPT, Claude, and Grok.", "url": "https://www.promptsenhancer.site/", "features": ["Prompt enhancement","Documentation","Blog system","Admin system"]},
      {"name": "Savvy Downloader", "description": "A simple, focused downloader experience designed to make saving online content quick and straightforward.", "url": "https://savvy-downloader.vercel.app/", "features": ["Simple workflow","Fast downloads","Clean interface","Easy to use"]}
    ]
  }$j$::jsonb,
  page_type = 'about'
where slug = 'about' and content = '{}'::jsonb;

update public.pages set
  content = $j${
    "hero": {
      "eyebrow": "Portfolio",
      "title": "Selected work across web, design and marketing.",
      "description": "Explore a selection of websites, e-commerce projects, brand materials, ad creatives and social media designs created for businesses and campaigns."
    }
  }$j$::jsonb,
  page_type = 'portfolio'
where slug = 'portfolio' and content = '{}'::jsonb;

update public.pages set
  content = $j${
    "hero": {
      "eyebrow": "Pricing",
      "title": "Clear pricing for every service.",
      "description": "Per-project pricing for websites, graphic design, landing pages and WooCommerce stores. Monthly plans for Meta Ads and social media management. Select any plan to discuss on WhatsApp."
    }
  }$j$::jsonb,
  page_type = 'pricing'
where slug = 'pricing' and content = '{}'::jsonb;

update public.pages set
  content = $j${
    "hero": {
      "eyebrow": "Contact",
      "title": "Let's work together.",
      "description": "Have a project in mind? Fill out the form below and you'll be redirected to WhatsApp with your message ready to send. Or reach out directly using the contact details."
    }
  }$j$::jsonb,
  page_type = 'contact'
where slug = 'contact' and content = '{}'::jsonb;

-- Services overview page
insert into public.pages (slug, title, sort_order, page_type) values
  ('services', 'Services', 5, 'services')
on conflict (slug) do nothing;

update public.pages set
  content = $j${
    "hero": {
      "eyebrow": "Services",
      "title": "Everything you need to look better and work better online.",
      "description": "Five focused services that cover the full digital journey — from the website itself to the visuals that fill it and the campaigns that bring people to it."
    },
    "process": [
      {"step": "01", "title": "Understand", "body": "What the business needs, who the users are and what the project has to achieve."},
      {"step": "02", "title": "Plan", "body": "Structure, content priorities and how people will move through everything."},
      {"step": "03", "title": "Design", "body": "Layout, hierarchy, typography and visuals consistent with the brand."},
      {"step": "04", "title": "Build & Refine", "body": "Implementation, responsive checks, refinements and launch."}
    ]
  }$j$::jsonb
where slug = 'services' and content = '{}'::jsonb;

-- Add service pages to pages table
insert into public.pages (slug, title, sort_order, page_type) values
  ('website-design', 'WordPress Website Design', 6, 'service'),
  ('graphic-design', 'Graphic Design', 7, 'service'),
  ('meta-ads', 'Meta Ads Management', 8, 'service'),
  ('ecommerce', 'E-commerce & WooCommerce', 9, 'service'),
  ('landing-pages', 'Landing Page Design', 10, 'service')
on conflict (slug) do nothing;
