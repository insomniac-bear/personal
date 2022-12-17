import { FC } from 'react';
import { AgileIcon } from './agile-icon';
import { ArrowIcon } from './arrow-icon';
import { BEMIcon } from './bem-icon';
import { GitIcon } from './git-icon';
import { MongoIcon } from './mongo-icon';
import { NestIcon } from './nest-icon';
import { NextIcon } from './next-icon';
import { PostgresIcon } from './postgres-icon';
import { ReactIcon } from './react-icon';
import { ReduxIcon } from './redux-icon';
import { TSIcon } from './ts-icon';
import { IIconProps } from './IIconProps';

export type TIcons = {
  AgileIcon: FC<IIconProps>;
  ArrowIcon: FC<IIconProps>;
  BEMIcon: FC<IIconProps>;
  GitIcon: FC<IIconProps>;
  MongoIcon: FC<IIconProps>;
  NestIcon: FC<IIconProps>;
  NextIcon: FC<IIconProps>;
  PostgresIcon: FC<IIconProps>;
  ReactIcon: FC<IIconProps>;
  ReduxIcon: FC<IIconProps>;
  TSIcon: FC<IIconProps>;
};

export {
  AgileIcon,
  ArrowIcon,
  BEMIcon,
  GitIcon,
  MongoIcon,
  NestIcon,
  NextIcon,
  PostgresIcon,
  ReactIcon,
  ReduxIcon,
  TSIcon,
};
