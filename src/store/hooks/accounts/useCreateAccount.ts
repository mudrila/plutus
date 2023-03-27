import { DraggableType } from '@/components/organisms/Card';
import { useStore } from '@/store';
import { AccountAction } from '@/store/actions/accounts';
import { IAccount } from '@/types';

export default function useCreateAccount() {
  const {
    dispatches: { accountsDispatch },
  } = useStore();

  const createAccount = () => {
    const newAccount: IAccount = {
      id: '@TODO',
      draggableType: DraggableType.ACCOUNT,
    };
    accountsDispatch({ type: AccountAction.CREATE_ACCOUNT, payload: newAccount });
  };

  return createAccount;
}
