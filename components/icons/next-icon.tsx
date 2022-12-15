import { FC } from 'react';
import { IIconProps } from './IIconProps';

export const NextIcon: FC<IIconProps> = ({ fill, extraClass, size }) => {
  return(
    <svg className={extraClass} width={size ? size.width : 60} height={size ? size.height : 60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.2811 4.16109C25.4367 -7.50712 0.220843 6.74413 0.00143754 29.7518C-0.212813 52.2186 23.5635 66.7298 43.3632 56.8412L21.7454 25.0355L21.7454 44.7226C21.7454 46.904 17.5712 46.904 17.5712 44.7226V18.3306C17.5712 16.599 20.7877 16.4569 21.6992 17.9621L46.3394 55.1452C64.8493 43.2229 64.5992 15.5199 45.2811 4.16109ZM42.4972 41.4195L38.3099 35.0238V17.5146C38.3099 15.8819 42.4972 15.8819 42.4972 17.5146V41.4195Z" fill={fill ? fill : "#00C4F0"}/>
    </svg>
  );
};