import React from 'react';
import { useParams } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

import { PaidStatus } from 'modules/ui/atoms/PaidStatus/PaidStatus';
import { AvatarComponent } from 'modules/ui/atoms/Avatar/Avatar';
import { BUYER_TYPE } from 'modules/ui/constants';
import { Trade as TrdateType } from 'entries/trade';
import classes from './Trade.module.css';

type Props = {
  trade: TrdateType,
  account: number,
}

export const Trade: React.FC<Props> = ({ trade, account }) => {
  const { tradeId } = useParams();
  const {
    id,
    tradeName,
    tradeStatus,
    paymentMethod,
    amountUsd,
    amountBtc,
  } = trade;
  const isBuyer = account === BUYER_TYPE;
  return (
    <>
      <div className={clsx(
        classes.trade,
        tradeId && +tradeId === id && classes.tradeActive
      )}>
        <div className={classes.statusWrapper}>
          <div className={trade.newMessages[account] ? classes.activeStatus : classes.notActiveStatus}></div>
        </div>
        <div className={classes.tradeInfoWrapper}>
          <div className={classes.tradeInfo}>
            <p className={classes.status}>{tradeName}</p>
            <p className={classes.title}>{paymentMethod}</p>
            <p className={classes.value}>{`${amountUsd} USD (${amountBtc} BTC)`}</p>
          </div>
          <div className={classes.avatarWrapper}>
            <div className={classes.avatarIconWrapper}>
              <AvatarComponent buyer={!isBuyer} />
            </div>
            <PaidStatus status={tradeStatus} />
          </div>
        </div>
      </div>
      <Divider />
    </>
  )
}
