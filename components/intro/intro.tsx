import { FC } from 'react';
import { Button } from '../button/button';
import { NestIcon, NextIcon, ReactIcon, TSIcon } from '../icons';
import styles from './intro.module.css';

export const Intro: FC = () => {
  return(
    <section className={styles.section} aria-label='JS Developer'>
      <div className={styles.container}>
        <p className={styles.subTitle}>Hello</p>
        <h2 className={styles.title}>I&apos;m Kir Cherepanov</h2>
        <p className={styles.text}>I&apos;ve been doing web applications, front-end and back-end development for 2 years now. Do you need a website, JavaScript development, or maybe a turnkey website? Then contact me</p>
        <Button
          extraClass={styles.button}
          text='Contact me'
          onClick={() => {}}
        />
      </div>
      <ul className={styles.animation}>
        <li className={styles.animation__item_nest}>
          <NestIcon
            extraClass={styles.animation__icon}
          />
        </li>
        <li className={styles.animation__item_next}>
          <NextIcon
            extraClass={styles.animation__icon}
          />
        </li>
        <li className={styles.animation__item_react}>
          <ReactIcon
            extraClass={styles.animation__icon}
          />
        </li>
        <li className={styles.animation__item_ts}>
          <TSIcon
            extraClass={styles.animation__icon}
          />
        </li>
        <li className={styles.animation__decor}></li>
      </ul>
    </section>
  );
};
