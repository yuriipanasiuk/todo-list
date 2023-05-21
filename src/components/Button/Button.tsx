import React, { ReactNode } from 'react';
import clsx from 'clsx';

import css from './Button.module.css';

interface IButton {
  selected?: boolean;
  type?: 'button' | 'submit';
  children: ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
  selected = false,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
