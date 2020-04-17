import React from 'react';

import { Chat } from '../organisms/Chat/Chat';
import { ChatInput } from '../organisms/ChatInput/ChatInput';
import classes from './ChatModule.module.css';

type Props = {
  tradeId: string;
}

export const ChatModule: React.FC<Props> = ({ tradeId }) => {
  return (
    <div className={classes.wrapper}>
      <Chat chatId={tradeId} />
      <div className={classes.inputWrapper}>
        <ChatInput chatId={tradeId} />
      </div>
    </div>
  )
}
