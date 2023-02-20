import { Home } from '@mui/icons-material';
import { ReactNode } from 'react';

export type RouteMeta = {
  path: string;
  title: string;
  icon: ReactNode;
  key: string
};

const ROUTES = [
  {
    path: '/',
    title: 'Home',
    key: "home",
    icon: Home,
  },
];

export default ROUTES;
