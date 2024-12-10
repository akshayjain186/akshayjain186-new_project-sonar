import { Navigate } from 'react-router-dom';
import {
  Login,
  SignUp,
  Dashboard,
  AddnewPage,
  LicensesPage,
  OwnerPage,
} from '@/pages';
import Users from '@/pages/Users';
import UserView from '@/pages/Users/SuperAdminUser';
import AdminUserView from '@/pages/Users/AdminUser';
import CustomerUserProfile from '@/pages/Users/CustomerUser';
import AdminViewPlan from '@/pages/Users/AdminUser/AdminView/AdminViewPlan';

const authProtectedRoutes = [
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/', exact: true, component: <Navigate to="/dashboard" /> },
];
const publicRoutes = [
  { path: '/login', component: <Login /> },
  { path: '/signUp', component: <SignUp /> },
  { path: '/addnew', component: <AddnewPage /> },
  { path: '/licenses', component: <LicensesPage /> },
  { path: '/owner', component: <OwnerPage /> },
  { path: '/users', component: <Users /> },
  { path: '/UserView', component: <UserView /> },
  { path: '/AdminUserView', component: <AdminUserView /> },
  { path: '/CustomerUserProfile', component: <CustomerUserProfile /> },
  { path: '/AdminViewPlan', component: <AdminViewPlan /> },
];

export { authProtectedRoutes, publicRoutes };
