import React from 'react';

type props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  className,
  onClick,
  disabled,
}: props) {
  const classes = className || '';
  const buttonClasses = `${classes}${disabled ? ' opacity-50' : ''}`;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  onClick: undefined,
  disabled: false,
};
