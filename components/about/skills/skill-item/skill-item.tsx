import { FC, useMemo, useEffect } from 'react';
import * as Icons from '../../../icons';
import styles from './skill-item.module.css';

interface ISkillsItem {
  icon: keyof Icons.TIcons,
  text: string,
};

export const SkillItem: FC<ISkillsItem> = ({ icon, text }) => {
  const iconToRender = useMemo(() => {
    const Icon = icon && Icons[icon];
    return Icon ? (
      <Icon
        extraClass={styles.icon}
        fill='#00C4F0'
        size={{height: 90, width: 90}}
      />
    ) : null;
  }, [icon]);

  return(
    <li className={styles.skills_item}>
      { iconToRender }
      <p className={styles.skills_title}>{text}</p> 
    </li>
  );
};
