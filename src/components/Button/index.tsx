import React from 'react';

type props = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  type = 'button',
  children,
  className,
  onClick,
  disabled,
}: props) {
  const classes = className || '';
  const buttonClasses = `${classes}${disabled ? ' opacity-50' : ''}`;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: undefined,
  disabled: false,
};
