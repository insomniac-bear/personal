import { FC } from 'react';
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
            <h2 className={styles.title}>About me</h2>
          </li>
          <li className={styles.item_4}>
            <p className={styles.text}>
              Hello again everyone! So, you already know that my name is Kir, but let me tell you a little bit more about myself. I’m 37 y.o., currently living in Singapore. I’m a web developer and a  snowboarder in my free time. I love to create stuff from scratch and bring peoples most ambitious projects to life.
            </p>
            <p className={styles.text}>
              Why programming? Everything is simple - I love it, as cheesy as it sounds. I do think that it’s a profession of the future, thanks to which I can provide myself and fulfill my dreams - like travelling to all the mountains there is(ambitious, huh? Yes, but not impossible)
            </p>
            <p className={styles.text}>
              At the moment I specialize in front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
            </p>
            <p className={styles.text}>
              By trusting me, you will get the maximum return for your project, save your nerves and time.
            </p>
            <p className={styles.text}>
              If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
            </p>
          </li>
          <li className={styles.item_5}>
            <img src='/about_3.jpg' className={styles.photo_3} />
          </li>
        </ul>
      </div>

  );
};