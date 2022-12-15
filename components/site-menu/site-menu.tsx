import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './site-menu.module.css';

const menuItems = [
  {id: 0, name: 'Home', link: '/#'},
  {id: 1, name: 'About me', link: '/#about'},
  {id: 2, name: 'Portfolio', link: '/#portfolio'},
  {id: 3, name: 'Contacts', link: '/#contacts'},
];

export const SiteMenu: FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [menuState, setMenuState] = useState(false);

  const buttonClass = classNames(styles.menuToggler, { [styles.menuToggler__open]: menuState });

  return(
    <div className={styles.container}>
      <button
        onClick={() => setMenuState((prevState) => !prevState)}
        className={buttonClass}
      >
        <span className={styles.menuToggler__text}>Menu</span>
      </button>
      <ul className={styles.menu}>
        {
          menuItems.map((menuItem) => {
            return(
              <li
                key={menuItem.id}
                className={activeMenuItem !== menuItem.id ? styles.menuItem : styles.activeMenuItem}
                onClick={() => setActiveMenuItem(menuItem.id)}
              >
                <a href={menuItem.link}>{menuItem.name}</a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};
