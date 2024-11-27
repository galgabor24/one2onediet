import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className,
  align = 'center' 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'max-w-3xl mx-auto mb-12',
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}