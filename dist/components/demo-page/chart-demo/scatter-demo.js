import t from"https://cdn.skypack.dev/react";import r from"https://cdn.skypack.dev/react-apexcharts";class i extends t.Component{constructor(o){super(o);this.state={series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[36.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}],options:{colors:["#80D0FF","#B0EC9B","#F69186","#FFD780","#2E93fA","#66DA26","#546E7A","#E91E63","#FF9800"],markers:{size:4,colors:void 0,strokeColors:"#92929240",strokeWidth:0,strokeOpacity:0,strokeDashArray:0,fillOpacity:1,discrete:[],shape:"circle",radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},legend:{show:!0,showForSingleSeries:!0,showForNullSeries:!0,showForZeroSeries:!0,position:"bottom",horizontalAlign:"center",floating:!1,fontSize:"10px",fontFamily:"inherit",fontWeight:400,formatter:e=>`${e} Active`,inverseOrder:!1,width:void 0,height:void 0,tooltipHoverFormatter:void 0,offsetX:0,offsetY:0,labels:{useSeriesColors:!1},markers:{width:24,height:12,strokeWidth:0,strokeColor:"#92929240",fillColors:void 0,radius:12,customHTML:void 0,offsetX:30,offsetY:50},itemMargin:{horizontal:15,vertical:0},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},chart:{height:"100%",id:"scatter-demo",fontFamily:"inherit",redrawOnParentResize:!0,foreColor:"#929292",background:"transparent",type:"scatter",zoom:{type:"xy",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#929292",opacity:.2},stroke:{color:"#929292",opacity:.2,width:1}}}},noData:{text:"No Data",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:"#929292",fontSize:"14px",fontFamily:void 0}},theme:{mode:"dark"},grid:{show:!0,borderColor:"#92929240",strokeDashArray:0,position:"back",xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}},row:{colors:["#929292","#92929280"],opacity:.1},column:{colors:["#929292","#92929280"],opacity:.1},padding:{top:0,right:30,bottom:20,left:30}},xaxis:{tickAmount:10,labels:{formatter:function(e){return parseFloat(e).toFixed(1)}}},yaxis:{tickAmount:7}}}}render(){return t.createElement("div",{className:"chart__wrapper"},t.createElement(r,{options:this.state.options,series:this.state.series,type:"scatter",width:"100%"}))}}export default i;