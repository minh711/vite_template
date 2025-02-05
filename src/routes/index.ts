import { HOME_PATH, roles } from '../constants';
import DashboardLayout from '../layouts/DashboardLayout';
import HomePage from '../pages/HomePage';

export const routes = [
  {
    path: HOME_PATH,
    component: HomePage,
    roles: [roles.ADMIN],
    isProtected: false,
    layout: DashboardLayout,
  },
];
