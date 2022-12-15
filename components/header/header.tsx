import { FC } from 'react';
import { IHeader } from './header.props';
import styles from './header.module.css';
import { Logo } from '../logo/logo';
import { SiteMenu } from '../site-menu/site-menu';

export const Header: FC<IHeader> = ({children}) => {
  return (
    <header className={styles.header}>
      <Logo />
      <SiteMenu />
      {children}
    </header>
  );
};
