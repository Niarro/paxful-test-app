import { combineReducers } from 'redux';

import { trades } from './reducers/trades.reducer';
import { account } from './reducers/account.reducer';

export const rootReducer = combineReducers({
  trades,
  account
});
