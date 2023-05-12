import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: Props) {
  const classes = className || '';
  return (
    <div
      className={`absolute z-10 top-1/3 justify-center w-3/4 h-full rounded-lg shadow-md bg-gray-50 ${classes}`}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: '',
};
