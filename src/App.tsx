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

export default function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}
