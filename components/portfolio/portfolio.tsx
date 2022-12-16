import { FC } from 'react';
import { Title } from '../title/title';
import styles from './portfolio.module.css';

export const Portfolio: FC = () => {
  return(
    <section className={styles.container}>
      <Title className={styles.title} >Portfolio</Title>
    </section>
  );
};
