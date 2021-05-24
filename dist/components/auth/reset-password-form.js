import e from"https://cdn.skypack.dev/react";import{useHistory as u}from"https://cdn.skypack.dev/react-router-dom";import{Form as r,Input as l,Button as f}from"https://cdn.skypack.dev/antd";import{MailFilled as m}from"https://cdn.skypack.dev/@ant-design/icons";const h=o=>{console.log(o);const[c]=r.useForm(),w=u(),d=t=>{console.log("Success:",t),o.setResult(!0)},i=t=>{console.log("Failed:",t)},p={required:"${label} is required!",pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},s=(t,a)=>a?Promise.resolve():Promise.reject(`${t.field} is required`);return e.createElement(r,{form:c,layout:"vertical",name:"register-form",onFinish:d,onFinishFailed:i,validateMessages:p},e.createElement(r.Item,{label:"New Password"},e.createElement(r.Item,{name:"password",noStyle:!0,rules:[{validator:s}]},e.createElement(l.Password,{placeholder:"password",addonBefore:e.createElement(m,null)}))),e.createElement(r.Item,{label:"New Password Confirm"},e.createElement(r.Item,{name:"password-confirm",noStyle:!0,dependencies:["password"],rules:[{validator:s},({getFieldValue:t})=>({validator(a,n){return!n||t("password")===n?Promise.resolve():Promise.reject("The two passwords that you entered do not match!")}})]},e.createElement(l.Password,{placeholder:"password confirm",addonBefore:e.createElement(m,null)}))),e.createElement(r.Item,{className:"margin-0",style:{paddingTop:"1rem"}},e.createElement(f,{block:!0,type:"primary",htmlType:"submit"},"Reset")))};export default h;
