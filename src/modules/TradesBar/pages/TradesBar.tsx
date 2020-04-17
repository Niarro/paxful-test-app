import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Trade } from 'modules/TradesBar/organisms/Trade/Trade';
import { Store } from 'entries/store';
import classes from './TradesBar.module.css';

export const TradesBar = () => {
  const trades = useSelector((state: Store) => state.trades);
  const account = useSelector((state: Store) => state.account);
  return (
    <div className={classes.wrapper}>
      {trades.map(trade => (
        <Link key={trade.id} to={`/${trade.id}`}>
          <Trade
            key={trade.id}
            trade={trade}
            account={account}
          />
        </Link>
      ))}
    </div>
  )
}
