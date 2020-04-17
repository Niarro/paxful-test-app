import React from 'react';

import { Message } from 'entries/trade';
import { BUYER_TYPE } from 'modules/ui/constants';
import { AvatarComponent } from 'modules/ui/atoms/Avatar/Avatar';
import classes from './MessageBuyer.module.css';

type Props = {
  message: Message;
}

export const MessageBuyer: React.FC<Props> = ({ message }) => {
  const { message: messageValue, date } = message;
  return (
    <div className={classes.messageWrapper}>
      <div className={classes.avatarWrapper}>
        <AvatarComponent buyer={BUYER_TYPE === +message.type} />
      </div>
      <div className={classes.messageBlock}>
        <div className={classes.message}>{messageValue}</div>
        <p className={classes.date}>{date}</p>
      </div>
    </div>
  )
}
