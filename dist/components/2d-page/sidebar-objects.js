import e,{useState as y}from"../../../_snowpack/pkg/react.js";import _ from"../../../_snowpack/pkg/lodash.js";import{Tabs as o}from"../../../_snowpack/pkg/antd.js";import k from"./ObjectPoint.js";import g from"./ObjectLine.js";import*as v from"../../helpers/geo-variable.js";import*as s from"../../helpers/geo-object.js";const O=[{key:0,label:"Points"},{key:1,label:"Lines"},{key:2,label:"Planes"}],{TabPane:P}=o,T=({activeContainer:t})=>{const[r,c]=y(0),{variables:i,activeVariable:l}=t,{pointId:b,lineId:m}=t,p=v.findByName(i,l),n=s.getVariableObjects(p?.variableObjects),d=s.filterByType(n,"Point"),j=s.filterByType(n,"Line"),u=()=>{switch(r){case 0:return e.createElement(k,{container:t,points:d,activePointId:b});case 1:return e.createElement(g,{container:t,lines:j,activeLineId:m});default:return null}};return e.createElement("div",{className:"studio-2d__meta"},e.createElement("div",{className:"studio-2d__meta__buttons"},e.createElement(o,{defaultActiveKey:0,tabBarGutter:0,type:"line",onChange:a=>c(_.toInteger(a))},O.map(({key:a,label:f})=>e.createElement(P,{tab:f,key:a}))),u()))};export default T;
