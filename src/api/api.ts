// import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig } from 'axios';

// const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;

// if (!apiBaseUrl) {
//   throw new Error('API base URL is not defined in .env file');
// }

// const setMultipartHeaders = (): AxiosHeaders => {
//   return new AxiosHeaders({
//     'Content-Type': 'multipart/form-data',
//   });
// };

// let isRefreshing = false;
// let failedQueue: Array<{
//   resolve: (value?: unknown) => void;
//   reject: (reason?: any) => void;
// }> = [];

// const processQueue = (error: any, token: string | null = null) => {
//   // console.log('Processing failed queue...');
//   failedQueue.forEach((promise) => {
//     if (token) {
//       // console.log('Resolving queued request with token.');
//       promise.resolve(token);
//     } else {
//       // console.log('Rejecting queued request due to failure.');
//       promise.reject(error);
//     }
//   });
//   failedQueue = [];
// };

// const createApi = (): AxiosInstance => {
//   const apiInstance = axios.create({
//     baseURL: apiBaseUrl,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   apiInstance.interceptors.request.use(
//     (config) => {
//       const token = sessionStorage.getItem('token');
//       if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//         // console.log('Using token from sessionStorage in request:', token);
//       }
//       if (config?.headers?.['Content-Type'] === 'multipart/form-data') {
//         config.headers = new AxiosHeaders({
//           ...config.headers?.toJSON(),
//           ...setMultipartHeaders().toJSON(),
//         });
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   apiInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       // console.log('Response interceptor triggered with error:', error);

//       const originalRequest = error.config as AxiosRequestConfig & {
//         _retry?: boolean;
//       };

//       if (error.response?.status === 401 && !originalRequest._retry) {
//         // console.log('401 error encountered. Initiating token refresh.');
//         if (isRefreshing) {
//           // console.log('Token refresh already in progress, queuing request.');
//           return new Promise((resolve, reject) => {
//             failedQueue.push({ resolve, reject });
//           })
//             .then((token) => {
//               // console.log('Retrying original request with token from queue.');
//               if (!originalRequest.headers) {
//                 originalRequest.headers = {};
//               }
//               originalRequest.headers['Authorization'] = `Bearer ${token}`;
//               return apiInstance(originalRequest);
//             })
//             .catch((err) => Promise.reject(err));
//         }

//         originalRequest._retry = true;
//         isRefreshing = true;
//         // console.log('Starting token refresh.');

//         try {
//           const userId = getCookieValue('userId');
//           const refreshToken = getCookieValue('refreshToken');

//           if (!userId || !refreshToken) {
//             throw new Error('Missing required cookies: userId or refreshToken');
//           }

//           // console.log('Token request payload:', { userId, refreshToken });

//           const tokenRequest = { userId, refreshToken };

//           const { data } = await axios.post(
//             `${apiBaseUrl}authentication/generate-web-token`,
//             tokenRequest
//           );

//           // console.log('Token response received:', data);

//           const { token: newAccessToken, refreshToken: newRefreshToken } = data;

//           sessionStorage.setItem('token', newAccessToken);
//           // console.log('New token stored in sessionStorage:', newAccessToken);

//           const expirationDate = new Date();
//           expirationDate.setDate(expirationDate.getDate() + 14);
//           document.cookie = `refreshToken=${newRefreshToken}; path=/; SameSite=Strict; Secure; expires=${expirationDate.toUTCString()};`;
//           // console.log('New refresh token set in cookies.');

//           isRefreshing = false;
//           processQueue(null, newAccessToken);

//           // console.log('Retrying original request with refreshed token.');
//           if (!originalRequest.headers) {
//             originalRequest.headers = {};
//           }
//           originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//           return apiInstance(originalRequest);
//         } catch (err) {
//           console.error('Token refresh failed:', err);
//           processQueue(err, null);
//           isRefreshing = false;
//           return Promise.reject(err);
//         }
//       }

//       return Promise.reject(error);
//     }
//   );

//   return apiInstance;
// };

// const apiInstance: AxiosInstance = createApi();

// const getCookieValue = (cookieName: string): string | null => {
//   const cookies = document.cookie.split(';');
//   for (const cookie of cookies) {
//     const [name, value] = cookie.trim().split('=');
//     if (name === cookieName) {
//       // console.log(
//       //   `Found cookie '${cookieName}' with value: ${decodeURIComponent(value)}`
//       // );
//       return decodeURIComponent(value);
//     }
//   }
//   // console.log(`Cookie '${cookieName}' not found.`);
//   return null;
// };

// export { apiInstance };
