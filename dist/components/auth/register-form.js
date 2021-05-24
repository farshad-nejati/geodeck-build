import e from"https://cdn.skypack.dev/react";import{Link as i,useHistory as d}from"https://cdn.skypack.dev/react-router-dom";import{Form as t,Input as a,Button as p}from"https://cdn.skypack.dev/antd";import{UserOutlined as u,LockFilled as E,MailFilled as y}from"https://cdn.skypack.dev/@ant-design/icons";const g=n=>{console.log(n);const o=d(),m=r=>{console.log("Success:",r),o.push("/project")},s=r=>{console.log("Failed:",r)},l=(r,c)=>c?Promise.resolve():Promise.reject(`${r.field} is required`);return e.createElement(t,{layout:"vertical",name:"register-form",onFinish:m,onFinishFailed:s},e.createElement(t.Item,{label:"Username"},e.createElement(t.Item,{name:"username",noStyle:!0,rules:[{validator:l}]},e.createElement(a,{placeholder:"Username",addonBefore:e.createElement(u,null)}))),e.createElement(t.Item,{label:"E-mail"},e.createElement(t.Item,{name:"email",noStyle:!0,rules:[{type:"email",message:"email format is incorrect!"},{validator:l}]},e.createElement(a,{placeholder:"example@mail.com",addonBefore:e.createElement(y,null)}))),e.createElement(t.Item,{label:"Password"},e.createElement(t.Item,{noStyle:!0,name:"password",rules:[{validator:l}]},e.createElement(a.Password,{placeholder:"Password",addonBefore:e.createElement(E,null)}))),e.createElement(t.Item,{className:"margin-0",style:{paddingTop:"1rem"}},e.createElement(p,{block:!0,type:"primary",htmlType:"submit"},"Sign Up")),e.createElement(t.Item,{style:{textAlign:"center"}},"Already have an account?"," ",e.createElement(i,{to:"/login",className:"selected"},"Login")))};export default g;