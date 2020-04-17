import { CHANGE_ACCOUNT } from '../actionTypes';

export type ChangeAccountType = {
  type: string
}

export const changeAccount = () => {
  return {
    type: CHANGE_ACCOUNT
  }
}
