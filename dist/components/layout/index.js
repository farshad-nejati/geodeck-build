import e from"https://cdn.skypack.dev/react";import{Layout as t,Typography as a}from"https://cdn.skypack.dev/antd";import o from"./navigation.js";import r from"../higher-order-components/with-auth.js";import c from"../banner/index.js";const{Header:m,Content:l,Footer:s}=t,{Text:i}=a,p=({children:n})=>e.createElement(t,null,e.createElement(m,{className:"navigation__main"},e.createElement(o,null)),e.createElement(l,{className:"content"},e.createElement(c,null),n),e.createElement(s,{className:"footer text__xs"},e.createElement(i,null,"\xA9 2021 - Powered by"," ",e.createElement("span",{className:"footer__powered-by"},"Petrolern LLC"))));export default r(p);