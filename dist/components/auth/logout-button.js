import e from"https://cdn.skypack.dev/react";import{useAuth0 as a}from"https://cdn.skypack.dev/@auth0/auth0-react";import{Button as n}from"https://cdn.skypack.dev/antd";import{useReactiveVar as r}from"https://cdn.skypack.dev/@apollo/client";import{accessToken as s}from"../../apollo/cache.js";const p=()=>{const{logout:t}=a(),o=r(s),c=()=>{localStorage.clear(),t({returnTo:window.location.origin})};return o&&e.createElement(n,{onClick:c},"Log Out")};export default p;
