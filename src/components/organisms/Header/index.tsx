import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { AppBar } from './components';
import ROUTES from '@/config/routes';

export default function Header() {
  const theme = useTheme();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{ paddingLeft: 2 }}
          disableGutters
        >
          <Image
            src="assets/logo-icon-only.svg"
            alt="Logo"
            height={48}
            width={48}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <Box
          marginTop={8}
          height="100%"
          display="flex"
          alignItems="center"
        >
          <List>
            {ROUTES.map(route => {
              const Icon = route.icon;
              return (
                <ListItem
                  key={route.key}
                  disablePadding
                  sx={{ display: 'block' }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 'auto',
                        justifyContent: 'center',
                        color: theme.palette.primary.main,
                      }}
                    >
                      <Icon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
