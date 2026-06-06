import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Eyebrow Component
 * 
 * Design Philosophy: "Spice & Warmth"
 * - Small uppercase label with generous letter-spacing
 * - Used above section headings for editorial hierarchy
 * - Warm muted color for subtle visual interest
 */

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        'eyebrow text-muted-foreground',
        className
      )}
    >
      {children}
    </div>
  );
}
