import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

import { Store } from 'entries/store';
import { deleteTrade } from 'store/actions/trades.actions';

type Props = {
  tradeId: number;
}

const Button = withStyles(() => ({
  root: {
    backgroundColor: '#f5f6f9',
    transition: 'all 0.5s ease',
    '&:hover': {
      backgroundColor: '#edeef1',
    },
  },
}))(IconButton);

export const DeleteButton: React.FC<Props> = ({ tradeId }) => {
  const trades = useSelector((state: Store) => state.trades);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTrade({ tradeId }))
  }

  return (
    <Button
      onClick={handleDelete}
      aria-label="delete"
      disabled={trades.length < 2}
    >
      <DeleteIcon fontSize="large" />
    </Button>
  )
}
