import { type ReactNode } from 'react';
import { MediaProtectionProvider } from '@/components/layout/MediaProtectionProvider';

/**
 * ⚠️ App-wide providers. Add new providers here — they'll be available in all routes.
 * Providers MUST wrap <BrowserRouter> to be accessible everywhere.
 */
export function AppProviders({ children }: { children: ReactNode }) {
	return <MediaProtectionProvider>{children}</MediaProtectionProvider>;
}
