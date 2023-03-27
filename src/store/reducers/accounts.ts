import { AccountAction, AccountActions } from '../actions/accounts';
import { IAccount } from '@/types';

export default function accountsReducer(state: IAccount[], { type, payload }: AccountActions) {
  switch (type) {
    case AccountAction.CREATE_ACCOUNT:
      return [...state, payload];
    default:
      return state;
  }
}
