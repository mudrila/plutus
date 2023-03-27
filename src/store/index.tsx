import { createContext, PropsWithChildren, useContext, useReducer, useMemo, Dispatch } from 'react';
import { AccountActions } from './actions/accounts';
import accountsReducer from './reducers/accounts';
import type { IUser, IAccount, ISpendingCategory, IGoal, ITransaction } from '@/types';

interface IStore {
  state: {
    user: IUser;
    accounts: IAccount[];
    spendingCategories: ISpendingCategory[];
    goals: IGoal[];
    transactions: ITransaction[];
  };
  dispatches: {
    accountsDispatch: Dispatch<AccountActions>;
  };
}

export const INITIAL_STORE_STATE: IStore = {
  state: {
    user: {},
    accounts: [],
    spendingCategories: [],
    goals: [],
    transactions: [],
  },
  dispatches: {
    accountsDispatch: () => null,
  },
};

export const StoreContext = createContext<IStore>(INITIAL_STORE_STATE);

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }: PropsWithChildren<{}>) {
  const [accounts, accountsDispatch] = useReducer(accountsReducer, []);

  const value = useMemo(
    () => ({
      state: {
        user: {},
        accounts,
        spendingCategories: [],
        goals: [],
        transactions: [],
      },
      dispatches: {
        accountsDispatch,
      },
    }),
    [accounts]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
