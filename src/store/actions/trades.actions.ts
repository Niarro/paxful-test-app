import { ADD_MESSAGE, ONREAD_MESSAGE, DELETE_TRADE } from '../actionTypes';

type Args = {
  tradeId: string | number;
  message?: {
    id: string,
    message: string,
    type: string,
    date: string,
  },
  to?: number,
  account?: number
}

export type Results = {
  type: string;
  payload: Args;
}

export type AddMessage = ({ tradeId, message, to }: Args) => Results;
export type ChangeMessageStatus = ({ tradeId, account }: Args) => Results;
export type DeleteTrade = ({ tradeId }: Args) => Results;

export const addMessage: AddMessage = ({ tradeId, message, to }) => {
  return {
    type: ADD_MESSAGE,
    payload: { tradeId, message, to }
  }
}

export const changeMessageStatusOnRead: ChangeMessageStatus = ({ tradeId, account }) => {
  return {
    type: ONREAD_MESSAGE,
    payload: { tradeId, account }
  }
}

export const deleteTrade: DeleteTrade = ({ tradeId }) => {
  return {
    type: DELETE_TRADE,
    payload: { tradeId }
  }
}
