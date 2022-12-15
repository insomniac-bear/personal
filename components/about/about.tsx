import { FC } from 'react';
import styles from './about.module.css';
import { Presentation } from './presentation/presentation';
import { Skills } from './skills/skills';

export const About: FC = () => {
  return(
    <section className={styles.section}>
      <Skills />
      <Presentation />
    </section>
  );
};
