import { FC } from 'react';
import { ArrowIcon } from '../icons';
import { Title } from '../title/title';
import styles from './portfolio.module.css';

export const Portfolio: FC = () => {
  return(
    <section className={styles.container}>
      <Title className={styles.title} >Portfolio</Title>
      <div className={styles.slider}>
        <button className={styles.slider__control}><ArrowIcon /></button>
        <ul className={styles.slider__list}>
          <li className={styles.slider__item}>
            <h3 className={styles.slider__title}>Landing Mesto</h3>
            <p className={styles.slider__description}>
              This project demonstrate my HTML, CSS skills. In project was use native java script, BEM methodology, adaptive and responsive technics, based on grid and flex.
            </p>
            <a className={styles.slider__link} href='#'>
              More&nbsp;
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5H13M13 5L10.0286 9M13 5L10.0286 1" stroke="#E2A100"/>
              </svg>
            </a>
            <img className={styles.slider__img} src='./mesto-img.png'/>
          </li>
        </ul>
        <button className={styles.slider__control}><ArrowIcon/></button>
      </div>
    </section>
  );
};
