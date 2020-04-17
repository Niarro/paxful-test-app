import React from 'react';
import clsx from 'clsx';

import classes from './TradeInfoBlock.module.css';

type Props = {
  title: string;
  value: string;
  wrapperClass?: string;
  valueClass?: string;
}

export const TradeInfoBlock: React.FC<Props> = ({
  title,
  value,
  wrapperClass,
  valueClass,
  children
}) => {
  return (
    <div className={clsx(classes.infoBlock, wrapperClass)}>
      <p className={classes.infoBlockTitle}>{title}</p>
      {children || <p className={clsx(classes.infoBlockValue, valueClass)}>{value}</p>}
    </div>
  )
}
