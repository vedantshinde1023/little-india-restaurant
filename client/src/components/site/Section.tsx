import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Section Component
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Generous vertical rhythm with py-24 lg:py-32 between major sections
 * - Max content width max-w-7xl with px-6 lg:px-10
 * - Supports asymmetric layouts and full-bleed imagery
 */

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullBleed?: boolean;
  bgColor?: 'default' | 'muted' | 'primary';
}

export function Section({
  children,
  className,
  fullBleed = false,
  bgColor = 'default',
}: SectionProps) {
  const bgColorClass = {
    default: 'bg-background',
    muted: 'bg-muted',
    primary: 'bg-primary/5',
  }[bgColor];

  if (fullBleed) {
    return (
      <section className={cn(bgColorClass, className)}>
        {children}
      </section>
    );
  }

  return (
    <section className={cn(bgColorClass, 'py-12 sm:py-16 md:py-24 lg:py-32', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}
