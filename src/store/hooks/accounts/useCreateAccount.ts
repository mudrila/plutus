import { DraggableType } from '@/components/organisms/Card';
import { useStore } from '@/store';
import { AccountAction } from '@/store/actions/accounts';
import { IAccount } from '@/types';

export default function useCreateAccount() {
  const {
    dispatches: { accountsDispatch },
  } = useStore();

  const createAccount = (accountData: IAccount) => {
    try {
        const newAccount: IAccount = {
            id: '@TODO',
            draggableType: DraggableType.ACCOUNT,
          };
          accountsDispatch({ type: AccountAction.CREATE_ACCOUNT, payload: newAccount });
          return {
            success: true
          }
    } catch (e) {
        console.error("Error while creating account", e);
        return { success: false, errorMessage: "Unknown error while creating account"}
    }
  };

  return createAccount;
}
