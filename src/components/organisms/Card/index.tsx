import { Box } from '@mui/material';
import { useDrag } from 'react-dnd';
import { IFinanceEntity } from '@/types';

export enum DraggableType {
  ACCOUNT = 'account',
  SPENDING_CATEGOY = 'spending-category',
  FINANCIAL_GOAL = 'financial-goal',
}

interface ICard {
  onDrag?: () => void;
  onDrop?: () => void;
  item: IFinanceEntity;
}

export default function Card({ item }: ICard) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: item.draggableType,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return <Box ref={drag}>{isDragging ? 'Dragging Card' : 'Card'}</Box>;
}
