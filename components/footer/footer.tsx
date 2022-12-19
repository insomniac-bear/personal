import { FC } from 'react';
import { Logo } from '../logo/logo';
import styles from './footer.module.css';

export const Footer: FC = () => {
  return(
    <footer>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <h3>Contact:</h3>
          <ul>
            <li>
              <a>Email: tcherepanov.kir@gmail.com</a>
            </li>
            <li>
              <a>Telegram: @snowkir</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <Logo />
          <p>Copyright © 2021, Kir</p>
        </div>
      </div>
    </footer>
  );
};
