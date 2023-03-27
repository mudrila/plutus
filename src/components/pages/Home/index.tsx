import { Typography } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FinanceSection from '@/components/templates/FinanceSection';
import PageTemplate from '@/components/templates/Page';
import { useStore } from '@/store';

export default function HomePageLayout() {
  const {
    state: { accounts },
  } = useStore();

  return (
    <PageTemplate title="Plutus App | Home">
      <Typography variant="h2">Dashboard</Typography>
      <DndProvider backend={HTML5Backend}>
        <FinanceSection
          onCreate={() => null}
          items={accounts}
          title="Accounts"
        />
      </DndProvider>
    </PageTemplate>
  );
}
