import React from 'react';
import { Quote } from 'lucide-react';

interface QuoteBannerProps {
  quote: string;
}

export const QuoteBanner: React.FC<QuoteBannerProps> = ({ quote }) => {
  return (
    <div className="my-5 p-4 rounded-xl bg-gradient-to-r from-hospital-100/90 to-hospital-50 border border-hospital-200/70 shadow-sm flex items-start gap-3 text-hospital-800">
      <Quote className="w-5 h-5 text-hospital-500 shrink-0 mt-0.5" />
      <p className="text-sm md:text-base italic font-medium leading-relaxed">
        {quote}
      </p>
    </div>
  );
};

