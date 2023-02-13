import axios from "axios";

// let user:any;

// if(localStorage.hasOwnProperty('user')) {
//     let x = localStorage.getItem("user");
//     user = JSON.parse(x ? x : '')
// }

const user: any = JSON.parse(localStorage.getItem('user'))

// const value = localStorage.getItem('user');

// if (typeof value === 'string') {
//   const parse = JSON.parse(value) // ok

// }

// export const refresh = async () => {
//    return await axios({
//                 method: 'get', //you can set what request you want to be
//                 url: 'http://localhost:3006/auth/refresh',
//                 headers: {
//                   Authorization: 'Bearer ' + user.tokens.refreshToken,
//                 }
//               })
//               .then (res => {
//                 localStorage.setItem("user", JSON.stringify(res?.data));
//               })   
// }

const config = {
  baseURL: "http://localhost:3006/",
  headers: { Authorization: 'Bearer ' + user.tokens.accessToken},
};

const axiosHeader = axios.create(config);

export default axiosHeader;
