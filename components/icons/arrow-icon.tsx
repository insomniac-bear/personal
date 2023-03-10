import { FC } from "react";
import { IIconProps } from "./IIconProps";

export const ArrowIcon: FC<IIconProps> = ({ fill, extraClass, size }) => {
  return(
    <svg className={extraClass} height={size ? size.height : 36} width={size ? size.width : 36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 7.5L6 18L16.5 28.5" stroke={fill ? fill : "#E4E4E4"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 18H30" stroke={fill ? fill : "#E4E4E4"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
