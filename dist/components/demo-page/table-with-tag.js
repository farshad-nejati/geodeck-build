import e from"https://cdn.skypack.dev/react";import{Table as r,Tag as d,Space as l}from"https://cdn.skypack.dev/antd";const o=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.createElement("a",null,t)},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:t=>e.createElement(e.Fragment,null,t.map(a=>{let n=a.length>5?"geekblue":"green";return a==="loser"&&(n="volcano"),e.createElement(d,{color:n,key:a},a.toUpperCase())}))},{title:"Action",key:"action",render:(t,a)=>e.createElement(l,{size:"middle"},e.createElement("a",null,"Invite ",a.name),e.createElement("a",null,"Delete"))}],s=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],c=()=>e.createElement(r,{bordered:!0,columns:o,dataSource:s});export default c;
