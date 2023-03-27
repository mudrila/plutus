import { Action } from './';
import { IAccount } from '@/types';

export enum AccountAction {
  CREATE_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
}

export type AccountActions = Action<AccountAction.CREATE_ACCOUNT, IAccount>;
