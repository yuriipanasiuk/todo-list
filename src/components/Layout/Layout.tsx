import React, { ReactNode } from 'react';

import css from './Layout.module.css';

interface IProps {
  children: ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
