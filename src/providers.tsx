import { type ReactNode } from 'react';
import { MediaProtectionProvider } from '@/components/layout/MediaProtectionProvider';
import { AdminAuthProvider } from '@/hooks/useAdminAuth';

/**
 * ⚠️ App-wide providers. Add new providers here — they'll be available in all routes.
 * Providers MUST wrap <BrowserRouter> to be accessible everywhere.
 */
export function AppProviders({ children }: { children: ReactNode }) {
	return (
		<AdminAuthProvider>
			<MediaProtectionProvider>{children}</MediaProtectionProvider>
		</AdminAuthProvider>
	);
}
