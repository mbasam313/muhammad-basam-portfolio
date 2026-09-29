/**
 * ⚠️ ROUTING RULES:
 * - Router is in main.tsx. Do NOT add another <BrowserRouter> here or anywhere.
 * - Use <Routes> + <Route> components ONLY. Do NOT use useRoutes().
 * - STATIC IMPORTS ONLY — no React.lazy() or dynamic import().
 * - Import from 'react-router' — NOT 'react-router-dom' (does not exist).
 */
import { Routes, Route } from 'react-router';
import { ScrollToTop } from '@/components/ScrollToTop';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Services from '@/pages/Services';
import WebsiteDesign from '@/pages/services/WebsiteDesign';
import GraphicDesign from '@/pages/services/GraphicDesign';
import MetaAds from '@/pages/services/MetaAds';
import Ecommerce from '@/pages/services/Ecommerce';
import LandingPages from '@/pages/services/LandingPages';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';

export default function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/services/website-design" element={<WebsiteDesign />} />
				<Route path="/services/graphic-design" element={<GraphicDesign />} />
				<Route path="/services/meta-ads" element={<MetaAds />} />
				<Route path="/services/ecommerce" element={<Ecommerce />} />
				<Route path="/services/landing-pages" element={<LandingPages />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}
