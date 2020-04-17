import React from 'react';
import { useDispatch } from 'react-redux';

import { Trade, Message } from 'entries/trade';
import { changeMessageStatusOnRead } from 'store/actions/trades.actions';
import { MessageBuyer } from '../../molecules/MessageBuyer/MessageBuyer';
import { MessageSeller } from '../../molecules/MessageSeller/MessageSeller';
import classes from './ChatMessages.module.css';

type Props = {
  trade: Trade;
  currentAccount: number;
}

export const ChatMessages: React.FC<Props> = ({ trade, currentAccount }) => {
  const { messages, id, newMessages } = trade;
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (newMessages[currentAccount]) {
      dispatch(changeMessageStatusOnRead({ tradeId: id, account: currentAccount }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, currentAccount])
  return (
    <div className={classes.messagesWrapper}>
      {messages.map((message: Message) => {
        return (
          +message.type === currentAccount
            ? <MessageBuyer key={message.id} message={message} />
            : <MessageSeller key={message.id} message={message} />
        )
      })}
    </div>
  )
}
