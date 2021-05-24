import e from"https://cdn.skypack.dev/react";import{Link as m,useHistory as p}from"https://cdn.skypack.dev/react-router-dom";import{Form as t,Input as a,Button as s,Checkbox as E,Divider as g}from"https://cdn.skypack.dev/antd";import{UserOutlined as b,LockFilled as h}from"https://cdn.skypack.dev/@ant-design/icons";const f=o=>{console.log(o);const c=p(),i=r=>{console.log("Success:",r),c.push("/project")},d=r=>{console.log("Failed:",r)},u={required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},l=(r,n)=>n==="demo"?Promise.resolve():n?Promise.reject(`The ${r.field} is incorrect`):Promise.reject(`${r.field} is required`);return e.createElement(t,{layout:"vertical",name:"login-form",initialValues:{remember:!0},onFinish:i,onFinishFailed:d,validateMessages:u},e.createElement(t.Item,{label:"Username"},e.createElement(t.Item,{name:"username",noStyle:!0,rules:[{validator:l}]},e.createElement(a,{placeholder:"Username",addonBefore:e.createElement(b,null)}))),e.createElement(t.Item,{label:"Password",className:"margin-0"},e.createElement(t.Item,{name:"password",rules:[{validator:l}]},e.createElement(a.Password,{placeholder:"Password",addonBefore:e.createElement(h,null)}))),e.createElement(t.Item,null,e.createElement(a.Group,{className:"grid__two"},e.createElement(t.Item,{name:"remember",className:"margin-0",valuePropName:"checked"},e.createElement(E,null,"Remember me")),e.createElement("div",{style:{textAlign:"end"}},e.createElement(m,{to:"/reset-password",className:"selected text__small"},"Forget Password")))),e.createElement(t.Item,null,e.createElement(a.Group,{className:"grid__two"},e.createElement(t.Item,{className:"margin-0"},e.createElement(s,{block:!0,type:"primary",htmlType:"submit"},"Sign In")),e.createElement(t.Item,{className:"margin-0"},e.createElement(s,{block:!0,type:"default"},e.createElement(m,{to:"/register"},"Create ccount"))))),e.createElement(t.Item,null,e.createElement(g,{plain:!0,className:"margin-0"},"Product of")),e.createElement(t.Item,{className:"margin-0"},e.createElement("img",{className:"image",src:"https://www.petrolern.com/wp-content/uploads/2018/09/PETROLERN-logo-PNG-HQ-1.png"})))};export default f;
