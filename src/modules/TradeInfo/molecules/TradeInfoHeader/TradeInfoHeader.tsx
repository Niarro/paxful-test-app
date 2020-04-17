import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import classes from './TradeInfoHeader.module.css';

const ColorButton = withStyles(() => ({
  root: {
    color: '#F8F8F8',
    backgroundColor: "#77D093",
    textTransform: 'none',
    padding: '5px 25px',
    borderRadius: '15px',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: "#77D093",
    },
  },
}))(Button);

type Props = {
  name?: string;
}

export const TradeInfoHeader: React.FC<Props> = ({ name }) => {
  return (
    <div className={classes.header}>
      <p className={classes.title}>You are trading with <span>{name}</span></p>
      <p className={classes.time}>Started 23 minutes ago</p>
      <div>
      <ColorButton variant="contained">
        Release bitcoins
      </ColorButton>
      </div>
    </div>
  )
}
