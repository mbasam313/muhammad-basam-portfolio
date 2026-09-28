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

export interface Service {
	id: string;
	title: string;
	eyebrow: string;
	summary: string;
	intro: string;
	items: string[];
	process: string[];
	href: string;
}

export const SERVICES: Service[] = [
	{
		id: 'website-design',
		title: 'WordPress Website Design',
		eyebrow: 'Web Design',
		summary: 'Responsive WordPress and business websites built around clear structure, usability and the goals behind the project.',
		intro: 'A website should make a business easier to understand, trust and choose. I design WordPress websites with a clear flow, strong hierarchy and a polished experience on every screen.',
		items: ['WordPress websites', 'Business & portfolio sites', 'Website redesigns', 'Responsive layouts', 'Content management', 'Basic performance optimisation'],
		process: ['Understand the business and audience', 'Plan pages, content and user flow', 'Design a clear visual system', 'Build and refine across screen sizes'],
		href: '/services/website-design',
	},
	{
		id: 'graphic-design',
		title: 'Graphic Design',
		eyebrow: 'Visual Design',
		summary: 'Digital graphics for brands and campaigns — designed to communicate quickly, with readable typography and consistent branding.',
		intro: 'Good graphic design gives a business a recognisable voice. I create focused visual content that supports the message, fits the brand and works in the places people actually see it.',
		items: ['Social media posts', 'Meta ad creatives', 'Promotional graphics', 'Marketing materials', 'Digital reports', 'Branding materials'],
		process: ['Clarify the message and audience', 'Establish layout, type and visual direction', 'Create a consistent set of visuals', 'Review and prepare final assets'],
		href: '/services/graphic-design',
	},
	{
		id: 'meta-ads',
		title: 'Meta Ads Management',
		eyebrow: 'Digital Marketing',
		summary: 'Paid social campaigns where the creative and the targeting are planned together, then monitored and adjusted against real performance.',
		intro: 'Advertising works better when the message, creative and audience are considered together. I help plan and manage Meta campaigns with practical creative direction and ongoing performance review.',
		items: ['Facebook & Instagram Ads', 'Campaign planning', 'Ad creative strategy', 'Audience research', 'Performance analysis', 'Digital reporting'],
		process: ['Set the campaign objective', 'Research audiences and messages', 'Prepare creative and campaign structure', 'Monitor, learn and optimise'],
		href: '/services/meta-ads',
	},
	{
		id: 'ecommerce',
		title: 'E-commerce & WooCommerce',
		eyebrow: 'Online Stores',
		summary: 'WooCommerce stores with clean product presentation, simple browsing and a shopping experience built around the customer.',
		intro: 'An online store needs to help people find the right product and feel confident completing a purchase. I design WooCommerce experiences that keep products, categories and next steps easy to understand.',
		items: ['WooCommerce stores', 'Product and category pages', 'Store structure', 'Responsive shopping flows', 'Product content management', 'Store redesigns'],
		process: ['Organise products and categories', 'Plan the shopping journey', 'Design product-focused pages', 'Build, test and refine the store'],
		href: '/services/ecommerce',
	},
	{
		id: 'landing-pages',
		title: 'Landing Page Design',
		eyebrow: 'Conversion Design',
		summary: 'Focused landing pages for campaigns, services and products — built around one clear message and one next step.',
		intro: 'A landing page has one job: make the next step obvious. I design campaign pages with clear messaging, purposeful sections and a visual path that supports the goal.',
		items: ['Lead generation pages', 'Product promotion pages', 'Service campaigns', 'Ad destination pages', 'Clear calls to action', 'Mobile-first layouts'],
		process: ['Define the page goal', 'Shape the message and offer', 'Design the visual path', 'Review the experience on every device'],
		href: '/services/landing-pages',
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
