import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';

import { TradesBar } from 'modules/TradesBar/pages/TradesBar';
import { TradesInfo } from 'modules/TradeInfo/pages/TradeInfo';
import classes from './Header.module.css';

type Anchor = 'left' | 'right';

type Props = {
  tradeId: string;
}

const DrawerComponent = withStyles(() => ({
  paper: {
    maxWidth: '80%',
  }
}))(Drawer);

export const Header: React.FC<Props> = ({ tradeId }) => {
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={classes.headerWrapper}>
      <IconButton onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <IconButton onClick={toggleDrawer('right', true)}>
        <InfoIcon />
      </IconButton>
      <DrawerComponent anchor="left" open={state['left']} onClose={toggleDrawer('left', false)}>
        <TradesBar />
      </DrawerComponent>
      <DrawerComponent anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
        <TradesInfo tradeId={tradeId} />
      </DrawerComponent>
    </div>
  );
}
