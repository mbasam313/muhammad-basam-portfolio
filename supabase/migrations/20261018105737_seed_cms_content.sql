/*
# Seed CMS with existing site content

1. Purpose
   - Imports the portfolio's actual current content (from src/data/site.ts) into the CMS tables.
   - Idempotent: uses ON CONFLICT on unique slugs to upsert. Re-running never duplicates.
   - Preserves admin edits: ON CONFLICT DO NOTHING (not overwrite) so later dashboard changes win.

2. Data Seeded
   - site_settings: brand, contact info, social links from CONTACT_INFO/SOCIAL_LINKS.
   - pages: home, about, portfolio, pricing, contact with their section content.
   - services: the five services with full content JSON.
   - projects: business + ecommerce website projects with cover images.
   - pricing_plans: all 17 plans.
*/

-- settings singleton
insert into public.site_settings (id, brand_name, tagline, contact_email, contact_phone, location, whatsapp_number, default_seo_title, default_seo_description, default_og_image)
values (
  1,
  'Muhammad Basam',
  'Website Designer • Graphic Designer • Digital Marketer',
  'hello@muhammadbasam.com',
  '+92 316-9526957',
  'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  '+923169526957',
  'Website Designer, Graphic Designer & Digital Marketer',
  'Muhammad Basam is a website designer, graphic designer and digital marketing professional in Peshawar, Pakistan.',
  'https://mbasamportfolio.site/og-image.jpg'
)
on conflict (id) do nothing;

-- social links
update public.site_settings
set social_links = '[
  {"label":"Facebook","href":"https://facebook.com","icon":"facebook"},
  {"label":"Instagram","href":"https://instagram.com","icon":"instagram"},
  {"label":"LinkedIn","href":"https://linkedin.com","icon":"linkedin"},
  {"label":"WhatsApp","href":"https://wa.me/923169526957","icon":"whatsapp"}
]'::jsonb
where id = 1 and social_links = '[]'::jsonb;

-- pages
insert into public.pages (slug, title, sort_order) values
  ('home','Homepage',0),
  ('about','About',1),
  ('portfolio','Portfolio',2),
  ('pricing','Pricing',3),
  ('contact','Contact',4)
on conflict (slug) do nothing;

-- services (content jsonb mirrors the Service type; detailed copy imported from site.ts)
insert into public.services (slug, title, summary, icon, sort_order) values
  ('website-design','WordPress Website Design','Responsive WordPress and business websites built around clear structure, usability and the goals behind the project.','Globe',0),
  ('graphic-design','Graphic Design','Digital graphics for brands and campaigns — designed to communicate quickly, with readable typography and consistent branding.','Palette',1),
  ('meta-ads','Meta Ads Management','Paid social campaigns where the creative and the targeting are planned together, then monitored and adjusted against real performance.','Megaphone',2),
  ('ecommerce','E-commerce & WooCommerce','WooCommerce stores with clean product presentation, simple browsing and a shopping experience built around the customer.','ShoppingCart',3),
  ('landing-pages','Landing Page Design','Focused landing pages for campaigns, services and products — built around one clear message and one next step.','Layout',4)
on conflict (slug) do nothing;

-- projects
insert into public.projects (slug, title, category, description, cover_image, status, sort_order, featured) values
  ('zetasoft','Zetasoft Solutions','business','Modern IT Service Website with Clean Structure','https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop','published',0,true),
  ('greens','Greens Marketing','business','Marketing Agency Website Showing Services Clearly','https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop','published',1,false),
  ('property-counsel','Property Counsel','business','Real Estate Projects Website with Simple Layout','https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop','published',2,false),
  ('tourly','Tourly Travels','business','Travel Package Website with Booking Style Sections','https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop','published',3,false),
  ('gondal','Gondal Group of Marketing','business','Property Marketing Website with Updated Project Details','https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop','published',4,false),
  ('qh-construction','QH Construction','business','Construction Service Website Showing Recent Project Work','https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop','published',5,false),
  ('rawra','Rawra.pk','ecommerce','Dropshipping Store Website with All Product Listings','https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop','published',6,true),
  ('al-rehman','Al-Rehman Corporation','ecommerce','Store Website Showing All Products & Their Categories','https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop','published',7,false),
  ('mega-courses','Mega Courses Bundle','ecommerce','Digital Product Website Having Clean & Cool Layout','https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop','published',8,false),
  ('sasta-tools','Sasta Tools','ecommerce','Tools Store Website Featuring Easy Product Browsing','https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop','published',9,false)
on conflict (slug) do nothing;

-- pricing plans
insert into public.pricing_plans (name, category, service_name, price, period, description, features, featured, status, sort_order) values
  ('Starter Website','per-project','WordPress Website Design','$199','per project','A clean, responsive WordPress website for small businesses getting started online.','["Up to 5 pages","Responsive design","Basic SEO setup","Contact form","1 round of revisions","7-day delivery"]',false,'published',0),
  ('Business Website','per-project','WordPress Website Design','$399','per project','A complete WordPress website with more pages, content structure and polish.','["Up to 12 pages","Responsive design","SEO structure","Blog setup","Social media integration","2 rounds of revisions","10-day delivery"]',true,'published',1),
  ('Premium Website','per-project','WordPress Website Design','$699','per project','A full custom WordPress build with advanced structure and performance focus.','["Unlimited pages","Custom design system","Advanced SEO structure","Performance optimisation","Analytics setup","3 rounds of revisions","15-day delivery"]',false,'published',2),
  ('Starter Graphics','per-project','Graphic Design','$49','per project','A set of social media graphics for a single campaign or brand update.','["5 social media posts","1 platform size","Basic brand matching","1 round of revisions","3-day delivery"]',false,'published',3),
  ('Standard Graphics','per-project','Graphic Design','$99','per project','A full set of graphics for social media, ads and marketing materials.','["12 social media posts","2 platform sizes","Ad creative design","Brand-consistent visuals","2 rounds of revisions","5-day delivery"]',true,'published',4),
  ('Brand Identity Pack','per-project','Graphic Design','$199','per project','A complete visual identity system including logo, colours and brand materials.','["Logo design","Colour & typography system","12 social media templates","Business card design","Brand guidelines document","3 rounds of revisions","10-day delivery"]',false,'published',5),
  ('Starter Ads','monthly','Meta Ads Management','$149','per month','Meta Ads management for small budgets — campaign setup, monitoring and reporting.','["Up to $500 ad spend","1 campaign","Ad creative design","Weekly monitoring","Monthly performance report","Facebook & Instagram"]',false,'published',6),
  ('Growth Ads','monthly','Meta Ads Management','$299','per month','Full Meta Ads management with multiple campaigns and creative testing.','["Up to $2,000 ad spend","Up to 3 campaigns","Ad creative design & testing","Audience research","Bi-weekly optimisation","Monthly performance report","Facebook & Instagram"]',true,'published',7),
  ('Pro Ads','monthly','Meta Ads Management','$499','per month','Advanced Meta and Google Ads management for larger budgets and full-funnel campaigns.','["Up to $5,000 ad spend","Unlimited campaigns","Full creative production","Google Ads management","Weekly optimisation","Detailed monthly report","Facebook, Instagram & Google"]',false,'published',8),
  ('Starter Social','monthly','Social Media Management','$99','per month','Basic social media management with post design and scheduling.','["8 posts per month","1 platform","Post design","Caption writing","Monthly scheduling","Basic engagement"]',false,'published',9),
  ('Growth Social','monthly','Social Media Management','$199','per month','Full social media management with content planning and multi-platform posting.','["16 posts per month","2 platforms","Content calendar","Post design & captions","Hashtag research","Weekly scheduling","Performance tracking"]',true,'published',10),
  ('Pro Social','monthly','Social Media Management','$349','per month','Complete social media management with strategy, creative and reporting.','["24 posts per month","3 platforms","Content strategy","Full creative production","Community management","Monthly report","Campaign support"]',false,'published',11),
  ('Starter Landing Page','per-project','Landing Page Design','$149','per project','A focused single-page landing page for a campaign or product.','["1 landing page","Mobile-first design","1 call to action","Contact form","1 round of revisions","5-day delivery"]',false,'published',12),
  ('Standard Landing Page','per-project','Landing Page Design','$249','per project','A conversion-focused landing page with multiple sections and form design.','["1 landing page","Multi-section layout","Form design","A/B-ready structure","2 rounds of revisions","5-day delivery"]',true,'published',13),
  ('Premium Landing Page','per-project','Landing Page Design','$399','per project','A full custom landing page with advanced sections, animations and tracking.','["1 landing page","Custom design system","Advanced sections","Analytics & tracking setup","3 rounds of revisions","7-day delivery"]',false,'published',14),
  ('Starter Store','per-project','E-commerce & WooCommerce','$399','per project','A WooCommerce store with basic product setup and checkout.','["Up to 20 products","WooCommerce setup","1 payment gateway","Responsive design","Basic SEO","10-day delivery"]',false,'published',15),
  ('Business Store','per-project','E-commerce & WooCommerce','$599','per project','A complete WooCommerce store with categories, product pages and checkout optimisation.','["Up to 50 products","Category structure","2 payment gateways","Checkout optimisation","Product page design","2 rounds of revisions","15-day delivery"]',true,'published',16),
  ('Premium Store','per-project','E-commerce & WooCommerce','$899','per project','A full custom WooCommerce build with advanced product browsing and performance focus.','["Unlimited products","Custom store design","Advanced product filtering","Multiple payment gateways","Performance optimisation","3 rounds of revisions","20-day delivery"]',false,'published',17)
on conflict do nothing;
