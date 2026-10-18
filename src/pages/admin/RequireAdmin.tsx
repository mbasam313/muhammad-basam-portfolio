import { type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAdminAuth } from '@/hooks/useAdminAuth';

export function RequireAdmin({ children }: { children: ReactNode }) {
  const { session, loading, isAdmin } = useAdminAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f7]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#d2d2d7] border-t-[#0071e3]" />
      </div>
    );
  }

  if (!session || !isAdmin) {
    return <Navigate to="/admin-dash/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
