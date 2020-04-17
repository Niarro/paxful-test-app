import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { Store } from 'entries/store';
import { BUYER_TYPE, SELLER_TYPE } from 'modules/ui/constants';
import { formatAMPM } from 'utils/formatAMPM';
import { addMessage } from 'store/actions/trades.actions';

type Props = {
  chatId: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '95%'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    [`@media(max-width: 1200px)`]: {
      root: {
        width: '85%'
      }
    },
  }),
);

export const ChatInput: React.FC<Props> = ({ chatId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const account = useSelector((state: Store) => state.account);
  const [message, setMessage] = React.useState<string>("");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  const sendMessage = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (message) {
      const date = new Date();

      const messageValue = {
        message: message,
        type: `${account}`,
        id: Math.random().toString(),
        date: formatAMPM(date),
      }

      const args = {
        tradeId: chatId,
        message: messageValue,
        to: account === BUYER_TYPE ? SELLER_TYPE : BUYER_TYPE
      }

      setMessage('');
      dispatch(addMessage(args));
    }
  }

  return (
    <Paper component="form" onSubmit={sendMessage} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Type your message"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleMessageChange}
        value={message}
      />
      <IconButton type="submit" className={classes.iconButton}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
