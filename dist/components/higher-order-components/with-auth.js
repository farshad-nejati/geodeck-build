import"https://cdn.skypack.dev/@apollo/client";import t from"https://cdn.skypack.dev/react";import{useHistory as n}from"https://cdn.skypack.dev/react-router-dom";import{accessToken as a}from"../../apollo/cache.js";const s=e=>o=>{const r=a(),c=n();return r?t.createElement(e,{...o}):(c.push("/login"),t.createElement(t.Fragment,null))};export default s;