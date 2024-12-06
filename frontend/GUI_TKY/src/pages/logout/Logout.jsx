// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import withRouter from "../../components/Common/withRouter";
// import { logoutUser } from "../../store/actions";

// //redux
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const history = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {

//     dispatch(logoutUser(history, (response, error) => {
//       console.log("response", response)
//       if (response?.status === 200) {
//         localStorage.removeItem("authUser");
//         localStorage.removeItem("detailsUser");
//         localStorage.removeItem("customerInfo");
//         setTimeout(() => {
//           history("/login")
//         }, 1000)
//       } else {
//         console.log("some issue on logout")
//       }
//     }));
//   }, [dispatch, history]);

//   return <></>;
// };

// Logout.propTypes = {
//   history: PropTypes.object,
// };

// export default withRouter(Logout);