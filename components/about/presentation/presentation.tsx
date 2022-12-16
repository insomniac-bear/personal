import { FC } from 'react';
import { Title } from '../../title/title';
import presentationData from '../../../util/data/about-data.json';
import styles from './presentation.module.css';

export const Presentation: FC = () => {
  return(
      <div className={styles.container}>
        <ul className={styles.presentation}>
          <li className={styles.item_1}>
            <img src='/about_1.jpg' className={styles.photo_1} />
          </li>
          <li className={styles.item_2}>
            <img src='/about_2.jpg' className={styles.photo_2} />
          </li>
          <li className={styles.item_3}>
            <Title className={styles.title}>About me</Title>
          </li>
          <li className={styles.item_4}>
            {
              presentationData.map((item) => {
                return(
                  <p className={styles.text} key={item.id}>
                    {item.paragraph}
                  </p>
                );
              })
            }
          </li>
          <li className={styles.item_5}>
            <img src='/about_3.jpg' className={styles.photo_3} />
          </li>
        </ul>
      </div>

  );
};