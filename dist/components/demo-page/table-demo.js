import e from"https://cdn.skypack.dev/react";import{Table as r}from"https://cdn.skypack.dev/antd";import l from"./table-editable.js";import d from"./table-with-tag.js";import n from"./table-with-sort.js";import i from"./table-with-selection.js";const o=[{title:"Name",dataIndex:"name",width:150},{title:"Age",dataIndex:"age",width:150},{title:"Address",dataIndex:"address"}],a=[];for(let t=0;t<100;t++)a.push({key:t,name:`Edward King ${t}`,age:32,address:`London, Park Lane no. ${t}`});const m=()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(45vw, 1fr))",gridGap:"2rem"}},e.createElement(r,{columns:o,bordered:!0,dataSource:a,pagination:{pageSize:50},scroll:{y:240}}),e.createElement(l,null),e.createElement(d,null),e.createElement(n,null),e.createElement(i,null));export default m;
