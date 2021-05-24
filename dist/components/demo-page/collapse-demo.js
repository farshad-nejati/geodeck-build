import e from"../../../_snowpack/pkg/react.js";import{Collapse as t}from"../../../_snowpack/pkg/antd.js";import"../../../_snowpack/pkg/@ant-design/icons.js";const{Panel:a}=t,s=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,l=()=>e.createElement(t,{bordered:!1,defaultActiveKey:["1"],className:"site-collapse-custom-collapse",ghost:!0},e.createElement(a,{showArrow:!1,header:"This is panel header 1",key:"1",className:"selected"},e.createElement("p",null,s)),e.createElement(a,{showArrow:!1,header:"This is panel header 2",key:"2",className:"selected"},e.createElement("p",null,s)),e.createElement(a,{showArrow:!1,header:"This is panel header 3",key:"3",className:"selected"},e.createElement("p",null,s)));export default l;
