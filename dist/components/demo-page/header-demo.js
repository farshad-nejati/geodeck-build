import t from"../../../_snowpack/pkg/react.js";import"../../../_snowpack/pkg/antd.js";import{Link as n}from"../../../_snowpack/pkg/react-router-dom.js";import"../../../_snowpack/pkg/@ant-design/icons.js";import{BASE_URL as o}from"../../constant.js";import"../../../_snowpack/pkg/@auth0/auth0-react.js";import{Layout as a}from"../../../_snowpack/pkg/antd.js";import r from"../auth/login-button.js";import m from"../auth/logout-button.js";const{Header:i}=a,s=()=>{const e=()=>t.createElement(t.Fragment,null,t.createElement(r,null),t.createElement(m,null));return t.createElement(i,{className:"navigation__main"},t.createElement("div",{className:"navigation__main__menu"},t.createElement("div",{className:"navigation__main__logo"},t.createElement(n,{to:"/"},t.createElement("img",{src:`${o}/logo/logo.png`,className:"image"})))),t.createElement("div",{className:"navigation__main__right"},t.createElement("div",null,e())))};export default s;
