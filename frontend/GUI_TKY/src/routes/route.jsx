import React from "react";
import { Navigate,useLocation } from "react-router-dom";
// import { authControleAdminRoutes } from ".";

const controleAdminRoutes = [
  "/",
  "/addnew",
  "/licenses",
  "/owner",
  "/owner/:id"
];

const authCountryAdminRoutes = [
  "/dashboard",
  "/users",
  "/UserView",
  "/AdminUserView",
  "/CustomerUserProfile",
  "/AdminViewPlan",
  "/leads",
  "/BigJobRequest",
  "/SmallJobRequest",
  "/SmallJobFormRequest",
  "/SendInvitationForm",
  "/ArtBuilding",
  "/UploadPhoto",
  "/SendInvitationSecond"
];

const Authmiddleware = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  if (!localStorage.getItem("authUser")) {
   // console.log('gggggggggggggggggggggggg')
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  


  const userDetails = JSON.parse(localStorage.getItem("authUser")) || {};
  
   if(userDetails){
      if(userDetails?.userData?.role?.machineName == "control_admin"){
        console.log('control admin', )
          // Check if the current path is in the defined routes
          const isValidRoute = controleAdminRoutes.some((path) =>
            new RegExp(`^${path.replace(/:\w+/g, "[^/]+")}$`).test(currentPath)
          );
          if (!isValidRoute) {
            return <Navigate to="/licenses" />;
          }
      }
      if(userDetails?.userData?.role?.machineName == "country_admin"){
        console.log('country admin', )
        const isValidRouteCountry = authCountryAdminRoutes.some((path) =>
          new RegExp(`^${path.replace(/:\w+/g, "[^/]+")}$`).test(currentPath)
        );
        if (!isValidRouteCountry) {
          return <Navigate to="/dashboard" />;
        }
      }
   }
 





  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Authmiddleware;