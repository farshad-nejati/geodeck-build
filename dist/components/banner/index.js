import t from"https://cdn.skypack.dev/react";import"https://cdn.skypack.dev/antd";import n from"./banner-email.js";const r=()=>{const e=localStorage.getItem("email_verified")==="true",a=e;return t.createElement("div",{className:`banner ${a?"disable":""}`},!e&&t.createElement(n,null))};export default r;
