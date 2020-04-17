import {
    sampleTrade,
    sampleTradeSecond,
    sampleTradeThird,
    sampleTradeFourth,
} from 'modules/ui/constants';
import { Trade } from 'entries/trade';
import { Results } from '../actions/trades.actions';
import { ADD_MESSAGE, ONREAD_MESSAGE, DELETE_TRADE } from '../actionTypes';

const defaultState = [
  sampleTrade,
  sampleTradeSecond,
  sampleTradeThird,
  sampleTradeFourth,
  {...sampleTradeSecond, id: 5},
  {...sampleTradeThird, id: 6},
  {...sampleTrade, id: 7},
  {...sampleTradeFourth, id: 8},
  {...sampleTrade, id: 9},
  {...sampleTradeSecond, id: 10},
];

type Action = Results;
type Reducer = (state: any, action: Action) => Array<Trade>;

const getTrade = (state: any, action: Action) => {
  return state.find((trade: Trade) => +trade.id === +action.payload.tradeId);
}

const getTradeIndex = (state: any, action: Action) => {
  return state.findIndex((trade: Trade) => +trade.id === +action.payload.tradeId);
}

export const trades: Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newState = [...state];
      const trade = getTrade(newState, action);
      const tradeIndex = getTradeIndex(newState, action);
      const newTrade = {
        ...trade,
        newMessages: {
          ...trade.newMessages,
          [action.payload.to as number]: true
        },
        messages: [
          ...trade.messages,
          action.payload.message
        ]
      };
      newState.splice(tradeIndex, 1, newTrade);
      return newState;
    case ONREAD_MESSAGE:
      const newStateAfterUpdateMessage = [...state];
      const tradeOnRead = getTrade(newStateAfterUpdateMessage, action);;
      const tradeOnReadIndex = getTradeIndex(newStateAfterUpdateMessage, action);
      const newTradeAfterOnRead = {
        ...tradeOnRead,
        newMessages: {
          ...tradeOnRead.newMessages,
          [action.payload.account as number]: false,
        }
      };
      newStateAfterUpdateMessage.splice(tradeOnReadIndex, 1, newTradeAfterOnRead);
      return newStateAfterUpdateMessage;
    case DELETE_TRADE:
      const newStateAfterDelete = [...state];
      const deletedTradeIndex = getTradeIndex(newStateAfterDelete, action);
      newStateAfterDelete.splice(deletedTradeIndex, 1);
      return newStateAfterDelete;
    default:
      return state;
  }
}
