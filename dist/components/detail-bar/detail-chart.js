var i=Object.defineProperty;var r=(t,e,s)=>(typeof e!="symbol"&&(e+=""),e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s);import a,{Component as p}from"https://cdn.skypack.dev/react";import o from"https://cdn.skypack.dev/lodash";import c from"https://cdn.skypack.dev/react-apexcharts";import l from"../2d-plots/chart-options.js";class d extends p{constructor(e){super(e);r(this,"createOptions",()=>({chart:{parentHeightOffset:0,redrawOnParentResize:!0,redrawOnWindowResize:!0,zoom:{enabled:!1},toolbar:{show:!1}},xaxis:{title:{text:"x"},tooltip:{enabled:!1}},yaxis:{labels:{show:!0},tooltip:{enabled:!1}},legend:{position:"top"},tooltip:{intersect:!0,shared:!1}}));this.state={series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]},{name:"series-2",data:[43,53,40,28,73,27,48,39]}]}}render(){const e=this.createOptions(),s=o.cloneDeep(l),n=o.merge({...s},e);return a.createElement("div",{className:"chart__wrapper"},a.createElement(c,{options:n,series:this.state.series,type:"line",height:"100%",width:"100%"}))}}export default d;