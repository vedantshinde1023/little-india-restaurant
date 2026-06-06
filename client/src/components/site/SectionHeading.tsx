import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';

/**
 * SectionHeading Component
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Display font (Cormorant Garamond) for editorial feel
 * - Optional eyebrow for context
 * - Generous spacing and hierarchy
 */

interface SectionHeadingProps {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({
  children,
  eyebrow,
  className,
  as: Component = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-8', className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <Component className="text-foreground">
        {children}
      </Component>
    </div>
  );
}
