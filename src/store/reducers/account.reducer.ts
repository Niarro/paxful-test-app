
import { BUYER_TYPE, SELLER_TYPE } from 'modules/ui/constants';
import { ChangeAccountType } from '../actions/account.actions';
import { CHANGE_ACCOUNT } from '../actionTypes';

const defaultState = BUYER_TYPE;

type Action = ChangeAccountType;
type Reducer = (state: number, action: Action) => number;

export const account: Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACCOUNT:
      const newAccount = state === BUYER_TYPE ? SELLER_TYPE : BUYER_TYPE;
      return newAccount;
    default:
      return state;
  }
}
