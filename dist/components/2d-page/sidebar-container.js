import r from"https://cdn.skypack.dev/react";import{Collapse as m}from"https://cdn.skypack.dev/antd";import"https://cdn.skypack.dev/lodash";import{containersVar as k}from"../../apollo/cache.js";import*as l from"../../helpers/container.js";const{Panel:u}=m,y=p=>{const{containers:s,activeContainer:d}=p,h=l.getAsArray(s),f=(t,a)=>{let e=s;t===d.activeVariable?e=l.addActive(s,a,t):e=l.changeActive(s,a,t);const n=l.findById(e,a);k({containers:e,active:n})};return r.createElement("div",{className:"studio-2d__containers"},r.createElement(m,{bordered:!1,defaultActiveKey:[d.id],collapsible:!0,className:"studio-2d__collapse",ghost:!0},h?.map(({id:t,name:a,variables:e,isActive:n})=>{let c=e.length?"":"disabled";return c=n?`selected ${c}`:c,r.createElement(u,{showArrow:!1,header:a,key:t,collapsible:e.length?"":"disabled",className:c},e?.map(o=>{let i=d.activeVariable===o.name?"shadow-selected":"";return n&&i&&(i="selected"),r.createElement("p",{onClick:()=>f(o.name,t),key:o.id,className:`text ${i}`},o.name)}))})))};export default y;