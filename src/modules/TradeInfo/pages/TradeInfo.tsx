import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

import { Store } from 'entries/store';
import { PaidStatus } from 'modules/ui/atoms/PaidStatus/PaidStatus';
import { TradeInfoHeader } from '../molecules/TradeInfoHeader/TradeInfoHeader';
import { TradeInfoBlock } from '../molecules/TradeInfoBlock/TradeInfoBlock';
import { AvatarComponent } from 'modules/ui/atoms/Avatar/Avatar';
import { Reputation } from 'modules/ui/atoms/Reputation/Reputation';
import { changeAccount } from 'store/actions/account.actions';
import { BUYER_TYPE } from 'modules/ui/constants';
import { Trade } from 'entries/trade';
import { FromServer } from '../organisms/FromServer/FromServer';
import classes from './TradeInfo.module.css';

type Props = {
  tradeId: string;
}

export const TradesInfo: React.FC<Props> = ({ tradeId }) => {
  const account = useSelector((state: Store) => state.account);
  const trades = useSelector((state: Store) => state.trades);
  const trade = trades.find((trade: Trade) => +trade.id === +tradeId);
  const dispatch = useDispatch();

  const changeAccountHandler = () => {
    dispatch(changeAccount());
  }

  return (
    <div className={classes.wrapper}>
      {trade ?
        <div>
          <div className={classes.infoHeaderWrapper}>
            <TradeInfoHeader name={trade.tradeName} />
          </div>
          <div className={classes.infoBlockWrapper}>
            <div className={clsx(classes.infoBlock, classes.borderRight)}>
              <div className={classes.avatarWrapper}>
                <AvatarComponent />
              </div>
              <Reputation
                positive={trade.positiveReputation}
                negative={trade.negativeReputation}
              />
            </div>
            <TradeInfoBlock title="# of trades" value={trade.tradeAmount} />
          </div>
          <div className={classes.infoBlockWrapper}>
            <TradeInfoBlock
              title="trade status"
              value={trade.tradeStatus}
              wrapperClass={classes.borderRight}
            >
              <PaidStatus status={trade.tradeStatus} />
            </TradeInfoBlock>
            <TradeInfoBlock
              title="trade hash"
              value={trade.tradeHash}
              valueClass={classes.tradeHash}
            />
          </div>
          <div className={classes.infoBlockWrapper}>
            <TradeInfoBlock
              title="amount usd"
              value={trade.amountUsd}
              wrapperClass={classes.borderRight}
            />
            <TradeInfoBlock
              title="amount btc"
              value={trade.amountBtc}
              valueClass={classes.tradeHash}
            />
          </div>
          <FromServer />
        </div>
        : <div>Sorry, trade not found</div>
      }
      <div>
        <Button onClick={changeAccountHandler} variant="contained" color="primary">
          Change account to {account === BUYER_TYPE ? 'Seller' : 'Buyer'}
        </Button>
      </div>
    </div>
  )
}
