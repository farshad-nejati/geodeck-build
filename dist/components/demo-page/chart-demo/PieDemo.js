import e from"https://cdn.skypack.dev/react";import s from"https://cdn.skypack.dev/react-apexcharts";class o extends e.Component{constructor(t){super(t);this.state={series:[44,55,13,43,22],options:{chart:{width:380,type:"pie"},labels:["Team A","Team B","Team C","Team D","Team E"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}}render(){return e.createElement("div",{id:"chart"},e.createElement(s,{options:this.state.options,series:this.state.series,type:"pie",width:380}))}}export default o;
