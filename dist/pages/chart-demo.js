import e from"https://cdn.skypack.dev/react";import{Divider as t}from"https://cdn.skypack.dev/antd";import r from"../components/demo-page/header-demo.js";import a from"../components/demo-page/chart-demo/bar-demo.js";import l from"../components/demo-page/chart-demo/line-demo.js";import i from"../components/demo-page/chart-demo/donut-demo.js";import n from"../components/demo-page/chart-demo/scatter-demo.js";import s from"../components/demo-page/chart-demo/line-scatter-demo.js";import m from"../components/demo-page/chart-demo/PieDemo.js";import d from"../components/demo-page/chart-demo/area-demo.js";import c from"../components/demo-page/chart-demo/radar-demo.js";import f from"../components/demo-page/chart-demo/polar-demo.js";import h from"../components/demo-page/chart-demo/mixed-updatable-demo.js";import p from"../components/demo-page/chart-demo/bar-stacked-demo.js";const Y={colors:["#80D0FF","#B0EC9B","#F69186","#FFD780","#2E93fA","#66DA26","#546E7A","#E91E63","#FF9800"],fill:{colors:void 0,opacity:1,type:"gradient",gradient:{shade:"dark",type:"diagonal1",shadeIntensity:.6,gradientToColors:[],inverseColors:!1,stops:[0,80,100],colorStops:[],opacityFrom:.7,opacityTo:1},image:{src:["img/project/project1.png"],width:100,height:100},pattern:{style:"slantedLines",width:2,height:2,strokeWidth:1}},noData:{text:"No Data",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#929292",fontSize:"14px",fontFamily:void 0}},markers:{size:4,colors:void 0,strokeColors:"#92929240",strokeWidth:0,strokeOpacity:0,strokeDashArray:0,fillOpacity:1,discrete:[],shape:"circle",radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},xaxis:{type:"category",categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999],labels:{trim:!0,style:{fontFamily:"inherit",cssClass:"apexcharts-xaxis-label"},format:void 0,formatter:void 0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm"}},axisBorder:{color:"#929292"},axisTicks:{color:"#929292"},range:void 0,position:"bottom",title:{text:"Timestamp",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontFamily:"inherit",fontWeight:500,cssClass:"apexcharts-xaxis-title"}},tooltip:{enabled:!0,formatter:void 0,offsetY:10,style:{fontSize:"12px",fontFamily:"inherit"}}},yaxis:{floating:!1,labels:{show:!0,style:{fontFamily:"inherit",cssClass:"apexcharts-yaxis-label"},offsetX:-5,offsetY:0,formatter:o=>o},axisBorder:{show:!0,color:"#929292",offsetX:2},title:{text:"Tempreture (-)",style:{fontSize:"12px",fontFamily:"inherit",fontWeight:500,cssClass:"apexcharts-yaxis-title"}}},legend:{show:!0,showForSingleSeries:!0,showForNullSeries:!0,showForZeroSeries:!0,position:"top",horizontalAlign:"center",floating:!1,fontSize:"10px",fontFamily:"inherit",fontWeight:400,formatter:o=>`${o}`,inverseOrder:!1,width:void 0,height:void 0,tooltipHoverFormatter:void 0,offsetX:0,offsetY:0,labels:{useSeriesColors:!1},markers:{width:24,height:12,strokeWidth:0,strokeColor:"#92929240",fillColors:void 0,radius:12,customHTML:void 0,offsetX:0,offsetY:0},itemMargin:{horizontal:5,vertical:0},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},tooltip:{enabled:!0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,fillSeriesColor:!1,theme:"dark",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0},y:{formatter:void 0,title:{formatter:o=>o}},items:{display:"flex"}},chart:{id:"chartId",type:"chart-type",fontFamily:"inherit",background:"transparent",foreColor:"#929292",offsetX:0,offsetY:0,parentHeightOffset:14,zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"yellow",opacity:.4},stroke:{color:"red",opacity:.4,width:1}}},toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0|'<img src="/static/icons/reset.png" width="20">',customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter(o){return new Date(o).toDateString()}},svg:{filename:void 0},png:{filename:void 0}},autoSelected:"zoom"},events:{click:o=>{console.log(o)}}},title:{text:"Plot 1",align:"left",margin:10,offsetX:10,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:"600",fontFamily:void 0,color:"#929292"}},grid:{borderColor:"#92929240",strokeDashArray:0,padding:{top:0,right:10,bottom:0,left:10},xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}}},u=o=>e.createElement(e.Fragment,null,e.createElement(r,null),e.createElement("div",{className:"grid__three",style:{marginTop:"50px",alignItems:"baseline",background:"#292929",gridTemplateColumns:"repeat(auto-fit, minmax(30rem, 1fr))"}},e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Bar Chart Demo"),e.createElement("div",null,e.createElement(a,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Bar Stacked Chart Demo - height: 350px"),e.createElement("div",{style:{height:"350px"}},e.createElement(p,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Line Chart Demo"),e.createElement("div",null,e.createElement(l,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Scatter Chart Demo"),e.createElement("div",null,e.createElement(n,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Line-Scatter Chart Demo"),e.createElement("div",null,e.createElement(s,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Donut Chart Demo"),e.createElement("div",null,e.createElement(i,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Radar Chart Demo"),e.createElement("div",null,e.createElement(c,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Pie Chart Demo"),e.createElement("div",null,e.createElement(m,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Polar Chart Demo"),e.createElement("div",null,e.createElement(f,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Area Chart Demo"),e.createElement("div",null,e.createElement(d,null))),e.createElement("div",{style:{width:"100%"}},e.createElement(t,null,"Mixed Updatable Chart Demo"),e.createElement("div",null,e.createElement(h,null)))));export default u;
