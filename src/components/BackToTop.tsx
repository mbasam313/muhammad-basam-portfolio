import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-all duration-200 hover:bg-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 sm:bottom-5 sm:right-5"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
