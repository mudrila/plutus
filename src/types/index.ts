import { DraggableType } from '@/components/organisms/Card';

export interface IFinanceEntity {
  draggableType: DraggableType;
  id: string;
}

export interface IUser {}

export interface IAccount extends IFinanceEntity {}

export interface ISpendingCategory extends IFinanceEntity {}

export interface IGoal extends IFinanceEntity {}

export interface ITransaction extends IFinanceEntity {}
