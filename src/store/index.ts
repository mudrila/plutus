import { createContext, useContext } from 'react';
import type { IUser, IAccount, ISpendingCategory, IGoal, ITransaction } from '@/types';

interface IStore {
  state: {
    user: IUser;
    accounts: IAccount[];
    spendingCategories: ISpendingCategory[];
    goals: IGoal[];
    transactions: ITransaction[];
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
}

export const StoreContext = createContext<IStore>(INITIAL_STORE_STATE);

export function useStore() {
    return useContext(StoreContext)
}
