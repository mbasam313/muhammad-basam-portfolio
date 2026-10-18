/**
 * ⚠️ ROUTING RULES:
 * - Router is in main.tsx. Do NOT add another <BrowserRouter> here or anywhere.
 * - Use <Routes> + <Route> components ONLY. Do NOT use useRoutes().
 * - STATIC IMPORTS ONLY — no React.lazy() or dynamic import().
 * - Import from 'react-router' — NOT 'react-router-dom' (does not exist).
 */
import { Routes, Route } from 'react-router';
import { ScrollToTop } from '@/components/ScrollToTop';
import { BackToTop } from '@/components/BackToTop';
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
import Portfolio from '@/pages/Portfolio';
import NotFound from '@/pages/NotFound';
import AdminLogin from '@/pages/admin/AdminLogin';
import { RequireAdmin } from '@/pages/admin/RequireAdmin';
import { AdminShell } from '@/pages/admin/AdminShell';
import AdminOverview from '@/pages/admin/AdminOverview';
import AdminContent from '@/pages/admin/AdminContent';
import AdminServices from '@/pages/admin/AdminServices';
import AdminPortfolio from '@/pages/admin/AdminPortfolio';
import AdminMedia from '@/pages/admin/AdminMedia';
import AdminPricing from '@/pages/admin/AdminPricing';
import AdminInbox from '@/pages/admin/AdminInbox';
import AdminSeo from '@/pages/admin/AdminSeo';
import AdminSettings from '@/pages/admin/AdminSettings';

function admin(module: React.ReactNode) {
	return (
		<RequireAdmin>
			<AdminShell>{module}</AdminShell>
		</RequireAdmin>
	);
}

export default function App() {
	return (
		<>
			<ScrollToTop />
				<BackToTop />
			<Routes>
				<Route path="/admin-dash/login" element={<AdminLogin />} />
				<Route path="/" element={<Index />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/services" element={<Services />} />
				<Route path="/services/website-design" element={<WebsiteDesign />} />
				<Route path="/services/graphic-design" element={<GraphicDesign />} />
				<Route path="/services/meta-ads" element={<MetaAds />} />
				<Route path="/services/ecommerce" element={<Ecommerce />} />
				<Route path="/services/landing-pages" element={<LandingPages />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/admin-dash" element={admin(<AdminOverview />)} />
				<Route path="/admin-dash/content" element={admin(<AdminContent />)} />
				<Route path="/admin-dash/services" element={admin(<AdminServices />)} />
				<Route path="/admin-dash/portfolio" element={admin(<AdminPortfolio />)} />
				<Route path="/admin-dash/media" element={admin(<AdminMedia />)} />
				<Route path="/admin-dash/pricing" element={admin(<AdminPricing />)} />
				<Route path="/admin-dash/inbox" element={admin(<AdminInbox />)} />
				<Route path="/admin-dash/seo" element={admin(<AdminSeo />)} />
				<Route path="/admin-dash/settings" element={admin(<AdminSettings />)} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}
