import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Fixed header that persists across routes
 * - On home route with hero in view: transparent with ivory text
 * - On other routes or after scroll: solid background with foreground text
 * - Route-aware navigation using wouter
 */

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = location === '/';
  const shouldBeTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Location', href: '/location' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        shouldBeTransparent
          ? 'bg-transparent'
          : 'bg-background border-b border-border'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <a
          href="/"
          className={cn(
            'text-xl font-bold font-display transition-colors',
            shouldBeTransparent ? 'text-ivory-overlay' : 'text-foreground'
          )}
        >
          Little India
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                shouldBeTransparent
                  ? 'text-ivory-overlay hover:text-white'
                  : 'text-foreground'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant={shouldBeTransparent ? 'outline' : 'default'}
            className={cn(
              shouldBeTransparent && 'border-ivory-overlay text-ivory-overlay hover:bg-white/10'
            )}
          >
            <a href="/book">Book Now</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                'w-6 h-6',
                shouldBeTransparent ? 'text-ivory-overlay' : 'text-foreground'
              )}
            />
          ) : (
            <Menu
              className={cn(
                'w-6 h-6',
                shouldBeTransparent ? 'text-ivory-overlay' : 'text-foreground'
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="/book">Book Now</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
