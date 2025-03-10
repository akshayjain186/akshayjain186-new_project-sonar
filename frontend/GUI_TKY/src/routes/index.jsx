import { Navigate } from 'react-router-dom';
import {
  Login,
  SignUp,
  Dashboard,
  AddnewPage,
  LicensesPage,
  OwnerPage,
} from '@/pages';
import SmallJobForm from '@/pages/Ragister/SmallJobForm';
import BigJobForm from '@/pages/Ragister/BigJobForm';

const authUser = JSON.parse(localStorage.getItem('authUser')) || null;
import Users from '@/pages/Users';
import UserView from '@/pages/Users/SuperAdminUser';
import AdminUserView from '@/pages/Users/AdminUser';
import CustomerUserProfile from '@/pages/Users/CustomerUser';
import AdminViewPlan from '@/pages/Users/AdminUser/AdminView/AdminViewPlan';
import Leads from '@/pages/Leades';

import BigJobRequest from '@/pages/Leades/Customers/BigJobRequest';
import SmallJobRequest from '@/pages/Leades/Customers/SmallJobRequest';

import ArtBuilding from '@/pages/Leades/Companies/ArtBuilding/ArtBuilding';
import UploadPhoto from '@/pages/Leades/Companies/UploadPhoto/UploadPhoto';
import SendInvitationSecond from '@/pages/Leades/Companies/SendInvitation';
import SendInvitationForm from '@/pages/Leades/Customers/SmallJobRequest/SendInvitation';
import SmallJobFormRequest from '@/pages/Leades/Customers/SmallJobRequest/SmallJobForm';

const authProtectedRoutes = [
  
];
const authControleAdminRoutes = [
  { path: '/', component: <LicensesPage />},
  { path: '/addnew', component: <AddnewPage /> },
  { path: '/licenses', component: <LicensesPage /> },
  { path: '/owner', component: <OwnerPage /> },
  { path: '/owner/:id', component: <OwnerPage /> },
];
const authCountryAdminRoutes = [
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/', exact: true, component: <Navigate to="/dashboard" /> },
  { path: '/users', component: <Users /> },
  { path: '/UserView', component: <UserView /> },
  { path: '/AdminUserView', component: <AdminUserView /> },
  { path: '/CustomerUserProfile', component: <CustomerUserProfile /> },
  { path: '/AdminViewPlan', component: <AdminViewPlan /> },
  { path: '/leads', component: <Leads /> },
  { path: '/BigJobRequest', component: <BigJobRequest /> },
  { path: '/SmallJobRequest', component: <SmallJobRequest /> },
  { path: '/SmallJobFormRequest', component: <SmallJobFormRequest /> },
  { path: '/SendInvitationForm', component: <SendInvitationForm /> },
   { path: '/ArtBuilding', component: <ArtBuilding /> },
   { path: '/UploadPhoto', component: <UploadPhoto /> },
   { path: '/SendInvitationSecond', component: <SendInvitationSecond /> },
   
];



const publicRoutes = [
  // { path: '/', component: <Login /> },
  {
    path: '/login',
    component: authUser ? <Navigate to={'/'} /> : <Login />,
  },
  // { path: '/signUp', component: <SignUp /> },
  { path: '/smalljob', component: <SmallJobForm /> },
  { path: '/bigjob', component: <BigJobForm /> },
];

export { authProtectedRoutes, authControleAdminRoutes, authCountryAdminRoutes, publicRoutes };
