export interface NavLink {
	label: string;
	href: string;
}

export const NAV_LINKS: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Services', href: '/services' },
	{ label: 'Portfolio', href: '/portfolio' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'Contact', href: '/contact' },
];

export const PROFILE = {
	name: 'Muhammad Basam',
	tagline: 'Website Designer • Graphic Designer • Digital Marketer',
	role: 'Creative Head & Social Media Manager at Skyward Vision',
	location: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
	shortBio:
		'Website designer, graphic designer and digital marketing professional with 4+ years of practical experience across WordPress, WooCommerce, graphic design, Meta Ads and Google Ads.',
};

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  description: string;
  items: string[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: ServiceFaq[];
  href: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'website-design',
    title: 'WordPress Website Design',
    eyebrow: 'Web Design',
    summary: 'Responsive WordPress and business websites built around clear structure, usability and the goals behind the project.',
    intro: 'A website should make a business easier to understand, trust and choose. I design WordPress websites with a clear flow, strong hierarchy and a polished experience on every screen.',
    description: 'WordPress powers over 40% of the web because it is flexible, manageable and built for content. I design and build WordPress websites that are structured around the way real people browse — clear navigation, readable typography, responsive layouts and pages that load quickly. Every site I build is designed to be updated by the business owner after launch, without needing a developer for every small change. From business websites and portfolios to landing pages and full redesigns, the focus stays on clarity, usability and a visual system that stays consistent as the site grows.',
    items: ['WordPress websites', 'Business & portfolio sites', 'Website redesigns', 'Responsive layouts', 'Content management', 'Basic performance optimisation', 'Basic SEO structure', 'Cross-browser compatibility'],
    benefits: [
      { title: 'Easy to manage', description: 'Built in WordPress so you can update content, pages and images yourself after launch.' },
      { title: 'Responsive on every device', description: 'Designed mobile-first and tested across screen sizes from phones to desktops.' },
      { title: 'Clear structure', description: 'Pages, navigation and content organised around how people actually browse.' },
      { title: 'Fast and lightweight', description: 'Clean builds with basic performance optimisation so pages load quickly.' },
    ],
    process: [
      { title: 'Understand the business and audience', description: 'What the business needs, who the users are and what the project has to achieve.' },
      { title: 'Plan pages, content and user flow', description: 'Structure, navigation, content priorities and how people will move through everything.' },
      { title: 'Design a clear visual system', description: 'Layout, hierarchy, typography and visuals that stay consistent with the brand.' },
      { title: 'Build and refine across screen sizes', description: 'Implementation in WordPress, responsive checks, refinements and launch.' },
    ],
    faqs: [
      { question: 'Do you only build WordPress websites?', answer: 'WordPress is my primary platform for website design because it is flexible, widely supported and easy for clients to manage. For most business, portfolio and landing page projects, WordPress is the right fit.' },
      { question: 'Can I update the website myself after launch?', answer: 'Yes. I build sites in WordPress with a clear content structure, so you can update text, images and pages without needing a developer for every small change.' },
      { question: 'Do you redesign existing websites?', answer: 'Yes. Website redesigns are a big part of what I do. I can rebuild an existing site with a cleaner structure, updated visuals and better responsiveness.' },
      { question: 'Will my website work on mobile?', answer: 'Every site I build is designed mobile-first and tested across screen sizes. Responsive layout is a core part of the process, not an afterthought.' },
    ],
    href: '/services/website-design',
    metaTitle: 'WordPress Website Design Service | Muhammad Basam',
    metaDescription: 'Professional WordPress website design service. Responsive, easy-to-manage WordPress websites for businesses, portfolios and landing pages. Built by Muhammad Basam, website designer in Peshawar, Pakistan.',
    keywords: ['WordPress website design', 'responsive website design', 'business website', 'portfolio website', 'website redesign', 'WordPress developer Pakistan', 'custom WordPress design'],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    eyebrow: 'Visual Design',
    summary: 'Digital graphics for brands and campaigns — designed to communicate quickly, with readable typography and consistent branding.',
    intro: 'Good graphic design gives a business a recognisable voice. I create focused visual content that supports the message, fits the brand and works in the places people actually see it.',
    description: 'Graphic design is how a business communicates visually. I design digital graphics for social media, advertising, marketing and branding — each piece built around clear hierarchy, readable typography and a visual system that stays consistent across every touchpoint. From social media posts and Meta ad creatives to promotional graphics and full branding materials, the goal is always the same: make the message easy to understand and the brand easy to recognise. I work primarily in Adobe Photoshop and Illustrator, with Canva Pro for fast turnaround projects.',
    items: ['Social media posts', 'Meta ad creatives', 'Promotional graphics', 'Marketing materials', 'Digital reports', 'Branding materials', 'Logo design', 'Visual identity systems'],
    benefits: [
      { title: 'Consistent brand visuals', description: 'A visual system that stays recognisable across every post, ad and marketing material.' },
      { title: 'Readable and clear', description: 'Typography and hierarchy designed to communicate the message quickly.' },
      { title: 'Built for the platform', description: 'Graphics sized and optimised for social media, ads and digital use.' },
      { title: 'Fast turnaround', description: 'Efficient workflow using Photoshop, Illustrator and Canva Pro.' },
    ],
    process: [
      { title: 'Clarify the message and audience', description: 'What needs to be communicated and who needs to understand it.' },
      { title: 'Establish layout, type and visual direction', description: 'Typography, colour, composition and the visual system for the set.' },
      { title: 'Create a consistent set of visuals', description: 'Each graphic designed to work on its own and as part of a consistent set.' },
      { title: 'Review and prepare final assets', description: 'Checks, refinements and export in the right formats for each platform.' },
    ],
    faqs: [
      { question: 'What kind of graphics do you design?', answer: 'Social media posts, Meta ad creatives, promotional graphics, marketing materials, digital reports, branding materials and logo design. If it is a digital graphic, I can design it.' },
      { question: 'What tools do you use?', answer: 'Adobe Photoshop and Illustrator for production design, and Canva Pro for fast turnaround and client-editable templates.' },
      { question: 'Can you design a full brand identity?', answer: 'Yes. I can design a visual identity system including logo, colour, typography and a consistent set of graphics for social media and marketing.' },
      { question: 'Do you design print materials?', answer: 'My focus is digital graphics for social media, ads and online marketing. For print, I can prepare files but my main work is digital.' },
    ],
    href: '/services/graphic-design',
    metaTitle: 'Graphic Design Service | Social Media, Ads & Branding | Muhammad Basam',
    metaDescription: 'Graphic design for social media posts, Meta ad creatives, promotional graphics and branding materials. Clear, consistent visual design by Muhammad Basam, graphic designer in Peshawar, Pakistan.',
    keywords: ['graphic design', 'social media design', 'ad creative design', 'logo design', 'branding materials', 'promotional graphics', 'digital graphics', 'visual identity'],
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    eyebrow: 'Digital Marketing',
    summary: 'Paid social campaigns where the creative and the targeting are planned together, then monitored and adjusted against real performance.',
    intro: 'Advertising works better when the message, creative and audience are considered together. I help plan and manage Meta campaigns with practical creative direction and ongoing performance review.',
    description: 'Meta Ads — Facebook and Instagram advertising — are one of the most effective ways to reach a specific audience. But running ads without a plan wastes budget. I manage Meta Ads campaigns end to end: understanding the objective, researching the audience, planning the creative direction, building the campaign structure and monitoring performance against real data. Because I also design the ad creatives, the message and the targeting stay aligned. I also manage Google Ads for search campaigns, giving a combined paid strategy across social and search.',
    items: ['Facebook & Instagram Ads', 'Google Ads', 'Campaign planning', 'Ad creative strategy', 'Audience research', 'Performance analysis', 'Digital reporting', 'Budget optimisation'],
    benefits: [
      { title: 'Creative and targeting together', description: 'Because I design the creatives and manage the campaigns, the message and the audience stay aligned.' },
      { title: 'Data-driven decisions', description: 'Campaigns monitored against real performance data, not guesswork.' },
      { title: 'Full-funnel approach', description: 'From awareness to conversion, with campaigns structured for each stage.' },
      { title: 'Clear reporting', description: 'Regular performance reports that explain what is working and what is being adjusted.' },
    ],
    process: [
      { title: 'Set the campaign objective', description: 'What does the business need — awareness, leads, sales or traffic?' },
      { title: 'Research audiences and messages', description: 'Who to reach, what message will resonate and what creative will stop the scroll.' },
      { title: 'Prepare creative and campaign structure', description: 'Design ad creatives, build audiences and structure the campaign for testing.' },
      { title: 'Monitor, learn and optimise', description: 'Track performance, test variations, adjust budgets and refine the approach.' },
    ],
    faqs: [
      { question: 'Do you manage both Facebook and Instagram Ads?', answer: 'Yes. Meta Ads run across both Facebook and Instagram. I plan and manage campaigns across both platforms as part of a single strategy.' },
      { question: 'Do you also manage Google Ads?', answer: 'Yes, I manage Google Ads for search campaigns alongside Meta Ads, giving a combined paid strategy across social and search.' },
      { question: 'Do you design the ad creatives too?', answer: 'Yes. Because I am also a graphic designer, I create the ad creatives as part of the campaign, so the message and the targeting stay aligned.' },
      { question: 'How do you report on performance?', answer: 'I provide regular performance reports that show what is working, what is being adjusted and how the budget is being used.' },
    ],
    href: '/services/meta-ads',
    metaTitle: 'Meta Ads Management | Facebook & Instagram Ads | Muhammad Basam',
    metaDescription: 'Meta Ads management for Facebook and Instagram. Campaign planning, ad creative strategy, audience research and performance analysis by Muhammad Basam, digital marketing professional in Pakistan.',
    keywords: ['Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Google Ads', 'ad campaign management', 'paid social', 'ad creative strategy', 'digital marketing Pakistan'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & WooCommerce',
    eyebrow: 'Online Stores',
    summary: 'WooCommerce stores with clean product presentation, simple browsing and a shopping experience built around the customer.',
    intro: 'An online store needs to help people find the right product and feel confident completing a purchase. I design WooCommerce experiences that keep products, categories and next steps easy to understand.',
    description: 'WooCommerce is the most popular e-commerce platform on WordPress, and for good reason — it is flexible, manageable and built to grow. I design WooCommerce stores that make product browsing simple and checkout straightforward. From store structure and category organisation to product page design and responsive shopping flows, every decision is made with the customer journey in mind. Whether it is a new store, a product migration or a full store redesign, the focus is on helping people find what they need and complete their purchase with confidence.',
    items: ['WooCommerce stores', 'Product and category pages', 'Store structure', 'Responsive shopping flows', 'Product content management', 'Store redesigns', 'Checkout optimisation', 'Payment gateway setup'],
    benefits: [
      { title: 'Simple product browsing', description: 'Categories, filters and product pages designed to help customers find what they need fast.' },
      { title: 'Confident checkout', description: 'A checkout flow that reduces friction and makes the next step obvious.' },
      { title: 'Manageable inventory', description: 'WooCommerce built so you can manage products, categories and content yourself.' },
      { title: 'Mobile shopping', description: 'Responsive shopping flows tested from phone to desktop.' },
    ],
    process: [
      { title: 'Organise products and categories', description: 'Structure the catalogue so products are easy to find and browse.' },
      { title: 'Plan the shopping journey', description: 'How customers move from category to product to cart to checkout.' },
      { title: 'Design product-focused pages', description: 'Product images, descriptions and calls to action designed to support a purchase.' },
      { title: 'Build, test and refine the store', description: 'Implementation in WooCommerce, responsive testing and checkout refinement.' },
    ],
    faqs: [
      { question: 'Do you only build WooCommerce stores?', answer: 'WooCommerce is my primary e-commerce platform because it is flexible, manageable and built on WordPress. For most online store projects, WooCommerce is the right fit.' },
      { question: 'Can you redesign an existing WooCommerce store?', answer: 'Yes. Store redesigns are a big part of what I do — rebuilding the product browsing and checkout experience with a cleaner structure.' },
      { question: 'Can I manage products myself after launch?', answer: 'Yes. WooCommerce is built for store owners to manage products, categories and orders without needing a developer.' },
      { question: 'Do you set up payment gateways?', answer: 'Yes, I configure payment gateways as part of the store build so checkout works end to end.' },
    ],
    href: '/services/ecommerce',
    metaTitle: 'E-commerce & WooCommerce Store Design | Muhammad Basam',
    metaDescription: 'WooCommerce store design with clean product presentation, simple browsing and confident checkout. Online store design and redesign by Muhammad Basam, e-commerce website designer in Pakistan.',
    keywords: ['WooCommerce design', 'e-commerce website', 'online store design', 'WordPress e-commerce', 'product page design', 'store redesign', 'shopping website', 'WooCommerce developer Pakistan'],
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Design',
    eyebrow: 'Conversion Design',
    summary: 'Focused landing pages for campaigns, services and products — built around one clear message and one next step.',
    intro: 'A landing page has one job: make the next step obvious. I design campaign pages with clear messaging, purposeful sections and a visual path that supports the goal.',
    description: 'A landing page is different from a full website. It exists for one reason — to get a visitor to take a specific action. I design landing pages for lead generation, product launches, service campaigns and ad destinations. Each page is built around a single message, a clear visual path and a call to action that is impossible to miss. Whether the goal is form fills, sign-ups, purchases or clicks, the design is focused on removing distractions and guiding the visitor to the next step. Pages are designed mobile-first and optimised for the platforms sending traffic to them.',
    items: ['Lead generation pages', 'Product promotion pages', 'Service campaigns', 'Ad destination pages', 'Clear calls to action', 'Mobile-first layouts', 'Form design', 'Conversion-focused copy layout'],
    benefits: [
      { title: 'One clear message', description: 'Every section designed to support a single goal — no distractions.' },
      { title: 'Obvious next step', description: 'A call to action that is impossible to miss and easy to take.' },
      { title: 'Built for ad traffic', description: 'Pages designed to match the ad that sends traffic, for a consistent experience.' },
      { title: 'Mobile-first', description: 'Most landing page traffic is mobile — pages are designed for that reality.' },
    ],
    process: [
      { title: 'Define the page goal', description: 'What action should the visitor take? Form fill, sign-up, purchase or click?' },
      { title: 'Shape the message and offer', description: 'The headline, sub-headline and offer that will resonate with the audience.' },
      { title: 'Design the visual path', description: 'Sections, hierarchy and call to action placed to guide the eye.' },
      { title: 'Review the experience on every device', description: 'Mobile-first testing, refinement and launch.' },
    ],
    faqs: [
      { question: 'What is a landing page?', answer: 'A landing page is a single-page website built for one goal — getting a visitor to take a specific action like filling a form, signing up or buying a product. It is different from a full website because it removes distractions.' },
      { question: 'Do you design landing pages for ad campaigns?', answer: 'Yes. Ad destination pages are one of the most common types of landing pages I design. The page is designed to match the ad that sends traffic, for a consistent experience.' },
      { question: 'Can landing pages be built in WordPress?', answer: 'Yes. I build landing pages in WordPress so they are easy to manage and update, and they can be deployed quickly for campaigns.' },
      { question: 'How is a landing page different from a homepage?', answer: 'A homepage has many goals and links. A landing page has one goal and one call to action. Every section on a landing page exists to support that single action.' },
    ],
    href: '/services/landing-pages',
    metaTitle: 'Landing Page Design Service | Conversion-Focused Pages | Muhammad Basam',
    metaDescription: 'Landing page design for lead generation, product launches and ad campaigns. Conversion-focused pages with clear messaging and strong calls to action by Muhammad Basam, landing page designer in Pakistan.',
    keywords: ['landing page design', 'conversion page', 'lead generation page', 'ad destination page', 'campaign landing page', 'WordPress landing page', 'conversion design', 'mobile-first landing page'],
  },
];

// --- Portfolio Projects ---

export interface WebProject {
	id: string;
	title: string;
	description: string;
	image: string;
}

export const BUSINESS_WEBSITES: WebProject[] = [
	{
		id: 'zetasoft',
		title: 'Zetasoft Solutions',
		description: 'Modern IT Service Website with Clean Structure',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
	},
	{
		id: 'greens',
		title: 'Greens Marketing',
		description: 'Marketing Agency Website Showing Services Clearly',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
	},
	{
		id: 'property-counsel',
		title: 'Property Counsel',
		description: 'Real Estate Projects Website with Simple Layout',
		image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
	},
	{
		id: 'tourly',
		title: 'Tourly Travels',
		description: 'Travel Package Website with Booking Style Sections',
		image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
	},
	{
		id: 'gondal',
		title: 'Gondal Group of Marketing',
		description: 'Property Marketing Website with Updated Project Details',
		image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
	},
	{
		id: 'qh-construction',
		title: 'QH Construction',
		description: 'Construction Service Website Showing Recent Project Work',
		image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
	},
];

export const ECOMMERCE_WEBSITES: WebProject[] = [
	{
		id: 'rawra',
		title: 'Rawra.pk',
		description: 'Dropshipping Store Website with All Product Listings',
		image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
	},
	{
		id: 'al-rehman',
		title: 'Al-Rehman Corporation',
		description: 'Store Website Showing All Products & Their Categories',
		image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
	},
	{
		id: 'mega-courses',
		title: 'Mega Courses Bundle',
		description: 'Digital Product Website Having Clean & Cool Layout',
		image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
	},
	{
		id: 'sasta-tools',
		title: 'Sasta Tools',
		description: 'Tools Store Website Featuring Easy Product Browsing',
		image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop',
	},
];

export interface LogoProject {
	id: string;
	title: string;
	image: string;
}

// 12 Logo Projects (6 per row, 2 rows)
export const LOGO_PROJECTS: LogoProject[] = [
	{ id: 'mik', title: 'MIK Builders', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&h=200&fit=crop' },
	{ id: 'trodat', title: 'TRODAT', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop' },
	{ id: 'cog21', title: 'COG21', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop' },
	{ id: 'tourly-logo', title: 'Tourly', image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&h=200&fit=crop' },
	{ id: 'cheapmyle', title: 'CheapMyle', image: 'https://images.unsplash.com/photo-1636955840493-f43a02bfa064?w=200&h=200&fit=crop' },
	{ id: 'fivora', title: 'Fivora', image: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=200&h=200&fit=crop' },
	{ id: 'hrs', title: 'HRS Herbals', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop' },
	{ id: 'sultan', title: 'Sultan', image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=200&h=200&fit=crop' },
	{ id: 'crownstar', title: 'CrownStar', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=200&h=200&fit=crop' },
	{ id: 'orbis-max', title: 'Orbis Max', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200&h=200&fit=crop' },
	{ id: 'exec-builders', title: 'Executive Builders', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=200&h=200&fit=crop' },
	{ id: 'serve-gwinnett', title: 'Serve Gwinnett', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=200&fit=crop' },
];

export interface BrandingProject {
	id: string;
	title: string;
	subtitle: string;
	pdfUrl: string;
}

export const BRANDING_PROJECTS: BrandingProject[] = [
	{
		id: 'crownstar',
		title: 'CrownStar - Pizza & Cafe',
		subtitle: 'Brand Guidelines',
		pdfUrl: '/pdfs/crownstar-brand-guidelines.pdf',
	},
	{
		id: 'hrs-branding',
		title: 'HRS Herbals',
		subtitle: 'Brand Guidelines',
		pdfUrl: '/pdfs/hrs-herbals-brand-guidelines.pdf',
	},
	{
		id: 'executive',
		title: 'Executive Builders',
		subtitle: 'Brand Guidelines',
		pdfUrl: '/pdfs/executive-builders-brand-guidelines.pdf',
	},
	{
		id: 'serve-gwinnett',
		title: 'Serve Gwinnett',
		subtitle: 'Brand Guidelines',
		pdfUrl: '/pdfs/serve-gwinnett-brand-guidelines.pdf',
	},
];

export interface AdCreative {
	id: string;
	image: string;
}

// 12 Ad Creatives (6 per row, 2 rows)
export const AD_CREATIVES: AdCreative[] = [
	{ id: 'ad1', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop' },
	{ id: 'ad2', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=300&h=300&fit=crop' },
	{ id: 'ad3', image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=300&h=300&fit=crop' },
	{ id: 'ad4', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=300&fit=crop' },
	{ id: 'ad5', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=300&fit=crop' },
	{ id: 'ad6', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop' },
	{ id: 'ad7', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop' },
	{ id: 'ad8', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop' },
	{ id: 'ad9', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop' },
	{ id: 'ad10', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop' },
	{ id: 'ad11', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=300&fit=crop' },
	{ id: 'ad12', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop' },
];

// 24 SM Posts (6 per row, 4 rows)
export const SM_POSTS: AdCreative[] = [
	{ id: 'sm1', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=300&fit=crop' },
	{ id: 'sm2', image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=300&h=300&fit=crop' },
	{ id: 'sm3', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=300&h=300&fit=crop' },
	{ id: 'sm4', image: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?w=300&h=300&fit=crop' },
	{ id: 'sm5', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=300&fit=crop' },
	{ id: 'sm6', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=300&fit=crop' },
	{ id: 'sm7', image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=300&h=300&fit=crop' },
	{ id: 'sm8', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=300&fit=crop' },
	{ id: 'sm9', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop' },
	{ id: 'sm10', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=300&fit=crop' },
	{ id: 'sm11', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=300&fit=crop' },
	{ id: 'sm12', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop' },
	{ id: 'sm13', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop' },
	{ id: 'sm14', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop' },
	{ id: 'sm15', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop' },
	{ id: 'sm16', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=300&h=300&fit=crop' },
	{ id: 'sm17', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop' },
	{ id: 'sm18', image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=300&h=300&fit=crop' },
	{ id: 'sm19', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=300&h=300&fit=crop' },
	{ id: 'sm20', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
	{ id: 'sm21', image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=300&h=300&fit=crop' },
	{ id: 'sm22', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=300&fit=crop' },
	{ id: 'sm23', image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=300&fit=crop' },
	{ id: 'sm24', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop' },
];

// --- Process Steps ---

export interface ProcessStep {
	number: string;
	title: string;
	body: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
	{
		number: '01',
		title: 'Understand',
		body: 'What the business needs, who the users are and what the project has to achieve.',
	},
	{
		number: '02',
		title: 'Plan',
		body: 'Structure, pages, content priorities and how people will move through everything.',
	},
	{
		number: '03',
		title: 'Design',
		body: 'Layout, hierarchy, typography and visuals that stay consistent with the brand.',
	},
	{
		number: '04',
		title: 'Build',
		body: 'Implementation in WordPress or the right tool, responsive across every screen size.',
	},
	{
		number: '05',
		title: 'Review & launch',
		body: 'Checks, refinements and adjustments — then launch, with room to keep improving.',
	},
];

// --- Stats ---

export interface Stat {
	value: string;
	label: string;
}

export const STATS: Stat[] = [
	{ value: '10+', label: 'Websites Designed' },
	{ value: '100+', label: 'Graphic Design Projects' },
	{ value: '$50K+', label: 'Ad Spend Managed' },
	{ value: '15+', label: 'Happy Clients' },
];

// --- Homepage Feature Section ---

export interface FeatureItem {
	icon: string;
	text: string;
}

export const HOMEPAGE_FEATURES: FeatureItem[] = [
	{ icon: 'Globe', text: 'Websites that communicate clearly and work on every device' },
	{ icon: 'Palette', text: 'Visual identity and graphics that fit the brand and the audience' },
	{ icon: 'Megaphone', text: 'Meta and Google campaigns planned around real business goals' },
	{ icon: 'ShoppingCart', text: 'WooCommerce stores with simple browsing and confident checkout' },
	{ icon: 'Layout', text: 'Landing pages built around one message and one clear next step' },
	{ icon: 'Search', text: 'Basic SEO and content structure that helps people find the site' },
];

// --- Pricing ---

export interface PricingPlan {
  id: string;
  name: string;
  category: 'per-project' | 'monthly';
  serviceName: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  // Website Design — Per Project
  {
    id: 'web-starter',
    name: 'Starter Website',
    category: 'per-project',
    serviceName: 'WordPress Website Design',
    price: '$199',
    period: 'per project',
    description: 'A clean, responsive WordPress website for small businesses getting started online.',
    features: ['Up to 5 pages', 'Responsive design', 'Basic SEO setup', 'Contact form', '1 round of revisions', '7-day delivery'],
  },
  {
    id: 'web-business',
    name: 'Business Website',
    category: 'per-project',
    serviceName: 'WordPress Website Design',
    price: '$399',
    period: 'per project',
    description: 'A complete WordPress website with more pages, content structure and polish.',
    features: ['Up to 12 pages', 'Responsive design', 'SEO structure', 'Blog setup', 'Social media integration', '2 rounds of revisions', '10-day delivery'],
    popular: true,
  },
  {
    id: 'web-premium',
    name: 'Premium Website',
    category: 'per-project',
    serviceName: 'WordPress Website Design',
    price: '$699',
    period: 'per project',
    description: 'A full custom WordPress build with advanced structure and performance focus.',
    features: ['Unlimited pages', 'Custom design system', 'Advanced SEO structure', 'Performance optimisation', 'Analytics setup', '3 rounds of revisions', '15-day delivery'],
  },

  // Graphic Design — Per Project
  {
    id: 'design-starter',
    name: 'Starter Graphics',
    category: 'per-project',
    serviceName: 'Graphic Design',
    price: '$49',
    period: 'per project',
    description: 'A set of social media graphics for a single campaign or brand update.',
    features: ['5 social media posts', '1 platform size', 'Basic brand matching', '1 round of revisions', '3-day delivery'],
  },
  {
    id: 'design-standard',
    name: 'Standard Graphics',
    category: 'per-project',
    serviceName: 'Graphic Design',
    price: '$99',
    period: 'per project',
    description: 'A full set of graphics for social media, ads and marketing materials.',
    features: ['12 social media posts', '2 platform sizes', 'Ad creative design', 'Brand-consistent visuals', '2 rounds of revisions', '5-day delivery'],
    popular: true,
  },
  {
    id: 'design-brand',
    name: 'Brand Identity Pack',
    category: 'per-project',
    serviceName: 'Graphic Design',
    price: '$199',
    period: 'per project',
    description: 'A complete visual identity system including logo, colours and brand materials.',
    features: ['Logo design', 'Colour & typography system', '12 social media templates', 'Business card design', 'Brand guidelines document', '3 rounds of revisions', '10-day delivery'],
  },

  // Meta Ads — Monthly
  {
    id: 'ads-starter',
    name: 'Starter Ads',
    category: 'monthly',
    serviceName: 'Meta Ads Management',
    price: '$149',
    period: 'per month',
    description: 'Meta Ads management for small budgets — campaign setup, monitoring and reporting.',
    features: ['Up to $500 ad spend', '1 campaign', 'Ad creative design', 'Weekly monitoring', 'Monthly performance report', 'Facebook & Instagram'],
  },
  {
    id: 'ads-growth',
    name: 'Growth Ads',
    category: 'monthly',
    serviceName: 'Meta Ads Management',
    price: '$299',
    period: 'per month',
    description: 'Full Meta Ads management with multiple campaigns and creative testing.',
    features: ['Up to $2,000 ad spend', 'Up to 3 campaigns', 'Ad creative design & testing', 'Audience research', 'Bi-weekly optimisation', 'Monthly performance report', 'Facebook & Instagram'],
    popular: true,
  },
  {
    id: 'ads-pro',
    name: 'Pro Ads',
    category: 'monthly',
    serviceName: 'Meta Ads Management',
    price: '$499',
    period: 'per month',
    description: 'Advanced Meta and Google Ads management for larger budgets and full-funnel campaigns.',
    features: ['Up to $5,000 ad spend', 'Unlimited campaigns', 'Full creative production', 'Google Ads management', 'Weekly optimisation', 'Detailed monthly report', 'Facebook, Instagram & Google'],
  },

  // Social Media Management — Monthly
  {
    id: 'smm-starter',
    name: 'Starter Social',
    category: 'monthly',
    serviceName: 'Social Media Management',
    price: '$99',
    period: 'per month',
    description: 'Basic social media management with post design and scheduling.',
    features: ['8 posts per month', '1 platform', 'Post design', 'Caption writing', 'Monthly scheduling', 'Basic engagement'],
  },
  {
    id: 'smm-growth',
    name: 'Growth Social',
    category: 'monthly',
    serviceName: 'Social Media Management',
    price: '$199',
    period: 'per month',
    description: 'Full social media management with content planning and multi-platform posting.',
    features: ['16 posts per month', '2 platforms', 'Content calendar', 'Post design & captions', 'Hashtag research', 'Weekly scheduling', 'Performance tracking'],
    popular: true,
  },
  {
    id: 'smm-pro',
    name: 'Pro Social',
    category: 'monthly',
    serviceName: 'Social Media Management',
    price: '$349',
    period: 'per month',
    description: 'Complete social media management with strategy, creative and reporting.',
    features: ['24 posts per month', '3 platforms', 'Content strategy', 'Full creative production', 'Community management', 'Monthly report', 'Campaign support'],
  },

  // Landing Page — Per Project
  {
    id: 'lp-starter',
    name: 'Starter Landing Page',
    category: 'per-project',
    serviceName: 'Landing Page Design',
    price: '$149',
    period: 'per project',
    description: 'A focused single-page landing page for a campaign or product.',
    features: ['1 landing page', 'Mobile-first design', '1 call to action', 'Contact form', '1 round of revisions', '5-day delivery'],
  },
  {
    id: 'lp-standard',
    name: 'Standard Landing Page',
    category: 'per-project',
    serviceName: 'Landing Page Design',
    price: '$249',
    period: 'per project',
    description: 'A conversion-focused landing page with multiple sections and form design.',
    features: ['1 landing page', 'Multi-section layout', 'Form design', 'A/B-ready structure', '2 rounds of revisions', '5-day delivery'],
    popular: true,
  },
  {
    id: 'lp-premium',
    name: 'Premium Landing Page',
    category: 'per-project',
    serviceName: 'Landing Page Design',
    price: '$399',
    period: 'per project',
    description: 'A full custom landing page with advanced sections, animations and tracking.',
    features: ['1 landing page', 'Custom design system', 'Advanced sections', 'Analytics & tracking setup', '3 rounds of revisions', '7-day delivery'],
  },

  // WooCommerce — Per Project
  {
    id: 'woo-starter',
    name: 'Starter Store',
    category: 'per-project',
    serviceName: 'E-commerce & WooCommerce',
    price: '$399',
    period: 'per project',
    description: 'A WooCommerce store with basic product setup and checkout.',
    features: ['Up to 20 products', 'WooCommerce setup', '1 payment gateway', 'Responsive design', 'Basic SEO', '10-day delivery'],
  },
  {
    id: 'woo-business',
    name: 'Business Store',
    category: 'per-project',
    serviceName: 'E-commerce & WooCommerce',
    price: '$599',
    period: 'per project',
    description: 'A complete WooCommerce store with categories, product pages and checkout optimisation.',
    features: ['Up to 50 products', 'Category structure', '2 payment gateways', 'Checkout optimisation', 'Product page design', '2 rounds of revisions', '15-day delivery'],
    popular: true,
  },
  {
    id: 'woo-premium',
    name: 'Premium Store',
    category: 'per-project',
    serviceName: 'E-commerce & WooCommerce',
    price: '$899',
    period: 'per project',
    description: 'A full custom WooCommerce build with advanced product browsing and performance focus.',
    features: ['Unlimited products', 'Custom store design', 'Advanced product filtering', 'Multiple payment gateways', 'Performance optimisation', '3 rounds of revisions', '20-day delivery'],
  },
];

// --- Contact Info ---

export const CONTACT_INFO = {
  whatsapp: '+923169526957',
  whatsappDisplay: '+92 316-9526957',
  email: 'hello@muhammadbasam.com',
  location: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
};

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'WhatsApp', href: 'https://wa.me/923169526957', icon: 'whatsapp' },
];

// --- Footer ---

export const FOOTER_SERVICES: NavLink[] = [
	{ label: 'WordPress Website Design', href: '/services/website-design' },
	{ label: 'Graphic Design', href: '/services/graphic-design' },
	{ label: 'Meta Ads Management', href: '/services/meta-ads' },
	{ label: 'E-commerce & WooCommerce', href: '/services/ecommerce' },
	{ label: 'Landing Page Design', href: '/services/landing-pages' },
];

export const FOOTER_PRODUCTS: NavLink[] = [
	{ label: 'VisualWinner', href: 'https://visualwinner.com' },
	{ label: 'Prompt Enhancer', href: 'https://promptenhancer.com' },
	{ label: 'Workora', href: 'https://workora.com' },
];

export const FOOTER_LEGAL: NavLink[] = [
	{ label: 'Disclaimer', href: '/disclaimer' },
	{ label: 'Privacy Policy', href: '/privacy-policy' },
	{ label: 'Terms and Conditions', href: '/terms-and-conditions' },
];
