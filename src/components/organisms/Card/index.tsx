import { Box } from '@mui/material';
import { useDrag } from 'react-dnd';
import { IFinanceEntity } from '@/types';

export enum DraggableType {
  ACCOUNT = 'account',
  SPENDING_CATEGOY = 'spending-category',
  FINANCIAL_GOAL = 'financial-goal',
}

interface ICard<EntityType extends IFinanceEntity> {
  onDrag?: () => void;
  onDrop?: () => void;
  item: EntityType;
}

export default function Card<EntityType extends IFinanceEntity>({ item }: ICard<EntityType>) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: item.draggableType,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return <Box ref={drag}>{isDragging ? 'Dragging Card' : 'Card'}</Box>;
}
