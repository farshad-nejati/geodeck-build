import{accessToken as o}from"../apollo/cache.js";const c=()=>{const t=localStorage.getItem("token"),e=localStorage.getItem("sub");t&&e&&o(t)};export default c;
