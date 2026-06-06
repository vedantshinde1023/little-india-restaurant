import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Footer Component
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Large, editorial footer present on every page
 * - Warm background with generous spacing
 * - Organized sitemap columns and contact information
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicePages = [
    { label: 'Butter Chicken', href: '/services/butter-chicken' },
    { label: 'Chicken Maratha', href: '/services/chicken-maratha' },
    { label: 'Murg Mussallam', href: '/services/murg-mussallam' },
    { label: 'Tandoori Chicken', href: '/services/tandoori-chicken' },
    { label: 'Paneer Tikka', href: '/services/paneer-tikka' },
    { label: 'Chicken Tikka Masala', href: '/services/chicken-tikka-masala' },
    { label: 'Chicken Biryani', href: '/services/chicken-biryani' },
  ];

  return (
    <footer className="bg-muted mt-24 lg:mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Little India</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Authentic Indian cuisine in the heart of Pune. Warm hospitality, bold flavors, unforgettable meals.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase letter-spacing mb-4 text-foreground">
              Signature Dishes
            </h4>
            <ul className="space-y-2">
              {servicePages.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase letter-spacing mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="/location"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="/book"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Book a Table
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase letter-spacing mb-4 text-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919503343500"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9503 343 500
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  SNO.10/1 2B Mohammad Wadi, Pune 411028
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@littleindia.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@littleindia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-border pt-12 mb-12">
          <h4 className="text-sm font-semibold uppercase letter-spacing mb-4 text-foreground">
            Hours
          </h4>
          <p className="text-sm text-muted-foreground">
            Daily: 11:30 AM – 11:30 PM
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Little India Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
