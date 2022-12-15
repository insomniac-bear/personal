import { FC } from 'react';
import classNames from 'classnames';
import { IButton } from './button.props';
import styles from './button.module.css';

export const Button: FC<IButton> = ({ text, extraClass, onClick, disabled }) => {
  const buttonClasses = extraClass ? `${styles.button} ${extraClass}` : `${styles.button}`
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
