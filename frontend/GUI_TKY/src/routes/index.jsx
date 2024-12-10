import { Navigate } from 'react-router-dom';
import {  Login, SignUp,Dashboard ,AddnewPage,LicensesPage,OwnerPage} from '@/pages';
import Users from '@/pages/Users';

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
  {path: '/users', component: <Users/>}


];

export { authProtectedRoutes, publicRoutes };
