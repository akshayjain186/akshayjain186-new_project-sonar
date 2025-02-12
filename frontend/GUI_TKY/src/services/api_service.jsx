import axios from 'axios';
const token = '';

// Apply base URL for axios
const API_URL = "http://localhost:7001"   //import.meta.env.VITE_API_BASE_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});




// if (localStorage.getItem("authUser")) {
//   const authUser = JSON.parse(localStorage.getItem("authUser"));
//   axiosApi.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer ${authUser.token}`;
// } else {
//   axiosApi.defaults.headers.common["Authorization"] = "";
// }
// Setting default headers
// axiosApi.defaults.headers.common.Authorization = token;

// axiosApi.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// );
// Request interceptor for adding Authorization and dynamic Content-Type
axiosApi.interceptors.request.use(
  (config) => {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
     
      const { token } = JSON.parse(authUser);
      console.log('authUserauthUserauthUserauthUser',token);
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.log('No authUser found in localStorage');
    }

    // Dynamically set Content-Type based on the data type
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (you can add error handling or logging here if needed)
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

/**
 * Sends a GET request to the specified URL.
 *
 * @param {string} url - The endpoint to send the GET request to.
 * @param {Object} [config={}] - Optional configuration for the request.
 * @returns {Promise<Object>} - The response data from the GET request.
 */
export function get(url, config = {}) {
  console.log('llllllllllllllllllllllllllllllllllllllll');
  return axiosApi.get(url, { ...config }).then((response) => response);
}

/**
 * Sends a POST request to the specified URL with the provided data.
 *
 * @param {string} url - The endpoint to send the POST request to.
 * @param {Object} data - The data to include in the request body.
 * @param {Object} [config={}] - Optional configuration for the request.
 * @returns {Promise<Object>} - The response data from the POST request.
 */
export function post(url, data, config = {}) {
  console.log(data, 'post');
  return axiosApi.post(url, { ...data }, { ...config }).then((response) => {
    console.log('response', response);
    return response;
  });
}

/**
 * Sends a PUT request to the specified URL with the provided data.
 *
 * @param {string} url - The endpoint to send the PUT request to.
 * @param {Object} data - The data to include in the request body.
 * @param {Object} [config={}] - Optional configuration for the request.
 * @returns {Promise<Object>} - The response data from the PUT request.
 */
export function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

/**
 * Sends a DELETE request to the specified URL.
 *
 * @param {string} url - The endpoint to send the DELETE request to.
 * @param {Object} [config={}] - Optional configuration for the request.
 * @returns {Promise<Object>} - The response data from the DELETE request.
 */
export function del(url, config = {}) {
  return axiosApi.delete(url, { ...config }).then((response) => response.data);
}
