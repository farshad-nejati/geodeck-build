import e from"https://cdn.skypack.dev/react";import{Collapse as s}from"https://cdn.skypack.dev/antd";import"https://cdn.skypack.dev/@ant-design/icons";const{Panel:a}=s,t=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,l=()=>e.createElement(s,{bordered:!1,defaultActiveKey:["1"],className:"site-collapse-custom-collapse",ghost:!0},e.createElement(a,{showArrow:!1,header:"This is panel header 1",key:"1",className:"selected"},e.createElement("p",null,t)),e.createElement(a,{showArrow:!1,header:"This is panel header 2",key:"2",className:"selected"},e.createElement("p",null,t)),e.createElement(a,{showArrow:!1,header:"This is panel header 3",key:"3",className:"selected"},e.createElement("p",null,t)));export default l;
