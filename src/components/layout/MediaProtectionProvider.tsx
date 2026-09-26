import { useMediaProtection } from '@/hooks/useMediaProtection';

interface MediaProtectionProviderProps {
	children: React.ReactNode;
}

/**
 * Wrap the app with this provider to enable global media protection
 */
export function MediaProtectionProvider({ children }: MediaProtectionProviderProps) {
	useMediaProtection();
	return <>{children}</>;
}
