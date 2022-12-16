import { FC } from 'react';
import { ITitle } from './title.props';
import styles from './title.module.css';

export const Title: FC<ITitle> = ({ children, className='', ...props }) => {
  const titleClasses = className ? `${styles.title} ${className}` : `${styles.title}`;
  return(
    <h2 className={titleClasses} {...props}>{ children }</h2>
  );
};
