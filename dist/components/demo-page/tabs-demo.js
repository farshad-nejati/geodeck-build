import t from"../../../_snowpack/pkg/react.js";import{Tabs as a}from"https://cdn.skypack.dev/antd";const{TabPane:o}=a;function c(e){console.log(e)}const l=()=>t.createElement("div",{style:{maxWidth:"32vw"}},t.createElement(a,{defaultActiveKey:"1",onChange:c},[...Array.from({length:15},(e,n)=>n)].map(e=>t.createElement(o,{tab:`Tab-${e}`,key:e,disabled:e===3||e===12},"Content of tab ",e+1))));export default l;