import { Add } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import Card from '../../organisms/Card';
import { IFinanceEntity } from '@/types';

interface IFinanceSection {
  onCreate: () => void;
  items: IFinanceEntity[];
  title: string;
}

export default function FinanceSection({ items, onCreate, title }: IFinanceSection) {
  return (
    <Box px={4}>
      <Typography variant="h3">{title}</Typography>
      {items.map(item => (
        <Card
          item={item}
          key={item.id}
        />
      ))}
      <Box
        onClick={onCreate}
        borderRadius={1}
        border="1px solid"
        borderColor="primary.main"
        width="80px"
        height="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton>
          <Add
            width="40px"
            height="40px"
          />
        </IconButton>
      </Box>
    </Box>
  );
}
