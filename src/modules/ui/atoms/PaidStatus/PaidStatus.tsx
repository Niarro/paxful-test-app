import React from 'react';
import clsx from 'clsx';

import classes from './PaidStatus.module.css';

type Props = {
  status: string;
}

export const PaidStatus: React.FC<Props> = ({ status }) => {
  return (
    <p className={clsx(
      classes.paidStatus,
      status === 'PAID' && classes.paydSuccessStatus
    )}>
      {status}
    </p>
  )
}
