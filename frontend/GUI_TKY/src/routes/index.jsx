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

// import SmallJobForm from '@/pages/Leades/SmallJobRequest/SmallJobForm';
import SendInvitationForm from '@/pages/Leades/SmallJobRequest/SendInvitation';
import BigJobRequest from '@/pages/Leades/Customers/BigJobRequest';
import SmallJobRequest from '@/pages/Leades/Customers/SmallJobRequest';
import SmallJobForm from '@/pages/Leades/Customers/SmallJobRequest/SmallJobForm';
import ArtBuilding from '@/pages/Leades/Companies/ArtBuilding/ArtBuilding';
import UploadPhoto from '@/pages/Leades/Companies/UploadPhoto/UploadPhoto';
import SendInvitation from '@/pages/Leades/Companies/SendInvitation';

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
  { path: '/owner', component: <OwnerPage /> },
  { path: '/smalljob', component: <SmallJobForm /> },

  { path: '/bigjob', component: <BigJobForm/> },

  { path: '/users', component: <Users /> },
  { path: '/UserView', component: <UserView /> },
  { path: '/AdminUserView', component: <AdminUserView /> },
  { path: '/CustomerUserProfile', component: <CustomerUserProfile /> },
  { path: '/AdminViewPlan', component: <AdminViewPlan /> },
  { path: '/leads', component: <Leads /> },
  { path: '/BigJobRequest', component: <BigJobRequest /> },
  { path: '/SmallJobRequest', component: <SmallJobRequest /> },
  { path: '/SmallJobForm', component: <SmallJobForm /> },
  // { path: '/SendInvitationForm', component: <SendInvitationForm /> },
  { path: '/ArtBuilding', component: <ArtBuilding /> },
  { path: '/UploadPhoto', component: <UploadPhoto /> },
  { path: '/SendInvitation', component: <SendInvitation /> },
];

export { authProtectedRoutes, authControleAdminRoutes, publicRoutes };
