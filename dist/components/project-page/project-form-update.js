import e from"../../../_snowpack/pkg/react.js";import b from"../../../_snowpack/pkg/lodash.js";import{Form as t,Input as l,Button as m}from"../../../_snowpack/pkg/antd.js";import{useMutation as g}from"../../../_snowpack/pkg/@apollo/client.js";import{UPDATE_PROJECT as _}from"../../apollo/mutations/index.js";import{GET_PROJECTS as k}from"../../apollo/queries/index.js";const y=a=>{const i=localStorage.getItem("sub"),[p]=t.useForm(),o=a?.project,[u,{loading:c}]=g(_,{refetchQueries:[{query:k,variables:{userID:i}}],onCompleted:r=>{a.onCompleted(r?.updateProject)}}),d={title:o?.title,url:o?.url,description:o?.description},E=r=>{const s=o?.id,I=b.pick(r,["title","description"]);u({variables:{projectId:s,object:I}})},f=r=>{console.log("Failed:",r)},n=(r,s)=>s?Promise.resolve():Promise.reject(`${r.field} is required`),j={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};return e.createElement(t,{...j,name:"project-form",form:p,onFinish:E,onFinishFailed:f,initialValues:d},e.createElement(t.Item,{label:"Project Title"},e.createElement(t.Item,{name:"title",noStyle:!0,rules:[{validator:n}]},e.createElement(l,{placeholder:"Title"}))),e.createElement(t.Item,{label:"Data Endpoint URL"},e.createElement(t.Item,{name:"url",noStyle:!0,rules:[{type:"url",message:"please enter a url!"},{validator:n}]},e.createElement(l,{placeholder:"https://example.com",type:"url"}))),e.createElement(t.Item,{label:"Description"},e.createElement(t.Item,{name:"description",noStyle:!0,rules:[{validator:n}]},e.createElement(l,{placeholder:"Type description here"}))),e.createElement(t.Item,{className:"margin-0 project__form__buttons"},e.createElement(l.Group,{className:"grid__two"},e.createElement(t.Item,{className:"margin-0"},e.createElement(m,{block:!0,type:"default",onClick:a.onCancel},"Cancel")),e.createElement(t.Item,{className:"margin-0"},e.createElement(m,{block:!0,type:"primary",loading:c,disabled:c,htmlType:"submit"},"Update")))))};export default y;
