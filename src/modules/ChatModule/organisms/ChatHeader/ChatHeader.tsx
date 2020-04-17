import React from 'react';
import Divider from '@material-ui/core/Divider';

import { DeleteButton } from 'modules/ui/atoms/DeleteButton/DeleteButton';
import { Reputation } from 'modules/ui/atoms/Reputation/Reputation';
import { Trade } from 'entries/trade';
import classes from './ChatHeader.module.css';

type Props = {
  trade: Trade;
}

export const ChatHeader: React.FC<Props> = ({ trade }) => {
  return (
    <>
      <div className={classes.headerWrapper}>
        <div>
          <DeleteButton tradeId={trade.id} />
        </div>
        <div className={classes.headerInfoWrapper}>
          <p className={classes.title}>
            {trade.paymentMethod}
          </p>
          <div className={classes.description}>
            {trade.tradeName}
            <Reputation
              positive={trade.positiveReputation}
              negative={trade.negativeReputation}
            />
          </div>
        </div>
      </div>
      <Divider />
    </>
  )
}
