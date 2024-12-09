import { Navigate } from 'react-router-dom';
import {
  Login,
  SignUp,
  Dashboard,
  AddnewPage,
  LicensesPage,
  OwnerPage,
} from '@/pages';

const authUser = JSON.parse(localStorage.getItem('authUser')) || null;

const authProtectedRoutes = [
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/', exact: true, component: <Navigate to="/dashboard" /> },
];
const authControleAdminRoutes = [
  { path: '/addnew', component: <AddnewPage /> },
  { path: '/licenses', component: <LicensesPage /> },
  { path: '/owner/:id', component: <OwnerPage /> },
];
const publicRoutes = [
  // { path: '/login', component: <Login /> },
  {
    path: '/login',
    component: authUser ? <Navigate to={'/'} /> : <Login />,
  },
  { path: '/signUp', component: <SignUp /> },
];

export { authProtectedRoutes,authControleAdminRoutes, publicRoutes };
