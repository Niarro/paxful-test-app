import React from 'react';

import classes from './Reputation.module.css';

type Props = {
  positive: string;
  negative: string;
}

export const Reputation: React.FC<Props> = ({ positive, negative }) => {
  return (
    <div>
      <span className={classes.positiveValue}>{positive}</span>/
      <span className={classes.negativeValue}>{negative}</span>
    </div>
  )
}
