import React from 'react';

export default function FeatureCard({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className={`absolute w-1/4 h-1/3 text-center ${className}`}>
      <div className="w-full h-full rounded-2xl bg-gradient-to-b from-bg-gray-900 to bg-black shadow-[0_0_30px_theme('colors.purple.400')]">
        jafin
      </div>
    </div>
  );
}

FeatureCard.defaultProps = {
  className: String,
};
