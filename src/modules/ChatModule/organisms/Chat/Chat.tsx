import React from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import { ChatHeader } from '../ChatHeader/ChatHeader';
import { ChatMessages } from '../ChatMessages/ChatMessages';
import { Store } from 'entries/store';
import { Trade } from 'entries/trade';

type Props = {
  chatId: string;
}

export const Chat: React.FC<Props> = ({ chatId }) => {
  const account = useSelector((state: Store) => state.account);
  const trades = useSelector((state: Store) => state.trades);
  const trade = trades.find((trade: Trade) => +trade.id === +chatId);

  if (!trade) {
    const idOfFirstTrade = trades[0].id;
    return <Redirect to={`/${idOfFirstTrade}`} />
  }

  return (
    <>
      <ChatHeader trade={trade} />
      <ChatMessages trade={trade} currentAccount={account} />
    </>
  )
}
