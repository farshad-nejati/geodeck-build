import e from"../../../_snowpack/pkg/react.js";import{Table as r}from"../../../_snowpack/pkg/antd.js";import l from"./table-editable.js";import n from"./table-with-tag.js";import o from"./table-with-sort.js";import i from"./table-with-selection.js";const d=[{title:"Name",dataIndex:"name",width:150},{title:"Age",dataIndex:"age",width:150},{title:"Address",dataIndex:"address"}],a=[];for(let t=0;t<100;t++)a.push({key:t,name:`Edward King ${t}`,age:32,address:`London, Park Lane no. ${t}`});const m=()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(45vw, 1fr))",gridGap:"2rem"}},e.createElement(r,{columns:d,bordered:!0,dataSource:a,pagination:{pageSize:50},scroll:{y:240}}),e.createElement(l,null),e.createElement(n,null),e.createElement(o,null),e.createElement(i,null));export default m;
