import { Add } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Card from '../../organisms/Card';
import { IFinanceEntity } from '@/types';

interface IFinanceSection<EntityType extends IFinanceEntity> {
  onCreate: (entity: EntityType) => { success?: boolean, error?: string};
  items: EntityType[];
  title: string;
}

export default function FinanceSection<EntityType extends IFinanceEntity>({
  items,
  onCreate,
  title,
}: IFinanceSection<EntityType>) {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleSubmitCreateForm = () => {};

  const handleCloseCreateForm = () => {
    setCreateModalOpen(false);
  };

  return (
    <Box px={4}>
      <Typography variant="h3">{title}</Typography>
      {items.map(item => (
        <Card<EntityType>
          item={item}
          key={item.id}
        />
      ))}
      <Box
        borderRadius={1}
        border="1px solid"
        borderColor="primary.main"
        width="80px"
        height="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton onClick={() => setCreateModalOpen(true)}>
          <Add fontSize='large' />
        </IconButton>
      </Box>
      <Dialog
        open={createModalOpen}
        onClose={handleCloseCreateForm}
      >
        <DialogTitle>Create {title}</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseCreateForm}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmitCreateForm} variant="outlined">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
