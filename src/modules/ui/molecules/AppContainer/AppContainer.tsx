import React from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";

import { Header } from 'modules/ui/molecules/Header/Header';
import { ChatModule } from 'modules/ChatModule/pages/ChatModule';
import { TradesInfo } from 'modules/TradeInfo/pages/TradeInfo';
import { TradesBar } from 'modules/TradesBar/pages/TradesBar';
import { lgBreakpoint } from 'modules/ui/constants';
import { useWindowResizeListener } from 'modules/ui/hooks/useWindowResizeListener';
import classes from "./AppContainer.module.css";

export const AppContainer: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/1" />
      </Route>
      <Route path={`/:tradeId`}>
        <Layout />
      </Route>
    </Switch>
  );
};

export const Layout: React.FC = () => {
  const { windowWidth } = useWindowResizeListener();
  const { tradeId } = useParams();
  const regNumber = /^\d+$/;
  if (!tradeId?.match(regNumber)) {
    return <Redirect to="/1" />
  }
  return (
    <>
      {windowWidth < lgBreakpoint && <Header tradeId={tradeId} />}
      <main className={classes.app}>
        {windowWidth > lgBreakpoint && <TradesBar />}
        <ChatModule tradeId={tradeId} />
        {windowWidth > lgBreakpoint && <TradesInfo tradeId={tradeId} />}
      </main>
    </>
  )
};
