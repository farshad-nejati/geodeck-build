import o from"https://cdn.skypack.dev/react";import r from"https://cdn.skypack.dev/react-dom/server";import{BarsOutlined as a,PlusCircleOutlined as i,MonitorOutlined as n,AimOutlined as c,MinusCircleOutlined as d,HomeOutlined as f}from"https://cdn.skypack.dev/@ant-design/icons";const e="#d5d5d5",l="#929292",m="#92929280",w="#f2ab1f",z="#292929",t="sans-serif",p={chart:{id:"chartId",type:"chart-type",fontFamily:t,background:"transparent",foreColor:e,parentHeightOffset:14,toolbar:{tools:{download:r.renderToString(o.createElement(a,{style:{fontSize:"22px",transform:"rotate(180deg)"}})),selection:!0,zoom:r.renderToString(o.createElement(n,{style:{fontSize:"20px"}})),zoomin:r.renderToString(o.createElement(i,{style:{fontSize:"20px"}})),zoomout:r.renderToString(o.createElement(d,{style:{fontSize:"20px"}})),pan:r.renderToString(o.createElement(c,{style:{fontSize:"22px"}})),reset:r.renderToString(o.createElement(f,{style:{fontSize:"18px"}})),customIcons:[]}},zoom:{type:"x",zoomedArea:{fill:{color:e,opacity:.2},stroke:{color:e,opacity:.2,width:1}}}},colors:["#80D0FF","#B0EC9B","#F69186","#FFD780","#2E93fA","#66DA26","#546E7A","#E91E63","#FF9800"],fill:{opacity:1},grid:{borderColor:m,strokeDashArray:1,padding:{right:10,left:10},xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},legend:{showForSingleSeries:!0,position:"top",fontSize:"12px",fontFamily:t,formatter:s=>`${s}`,markers:{strokeColor:l}},markers:{size:3,strokeColors:l,strokeWidth:0,strokeOpacity:0,offsetX:0,offsetY:0,hover:{size:6}},dataLabels:{enabled:!1},noData:{align:"center",verticalAlign:"middle",style:{color:e}},stroke:{lineCap:"round",width:1},theme:{mode:"dark"},title:{margin:10,offsetX:10,style:{fontWeight:"600",color:e}},tooltip:{x:{show:!1},followCursor:!0,theme:"dark",onDatasetHover:{highlightDataSeries:!1}},xaxis:{labels:{trim:!0,showDuplicates:!1,style:{fontFamily:t}},tickAmount:10,axisBorder:{color:e},axisTicks:{color:e,height:6,offsetY:-6},crosshairs:{show:!1},title:{style:{fontFamily:t,fontWeight:500}},tooltip:{offsetY:10,style:{fontFamily:t}}},yaxis:{labels:{style:{fontFamily:t}},crosshairs:{show:!1},axisTicks:{show:!0,color:e,width:6,offsetX:9},axisBorder:{show:!0,color:e,offsetX:-2},title:{style:{fontFamily:t,fontWeight:500}}}},b={chart:{id:"id-of-chart",type:"chart-type",toolbar:{tools:{customIcons:[]},export:{csv:{filename:"chartname",columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter(s){return new Date(s).toDateString()}},svg:{filename:"chartname"},png:{filename:"chartname"}}},zoom:{type:"xy"}},labels:["label1","label2","label3"],legend:{formatter:s=>`${s}`},plotOptions:{area:{fillTo:"origin"}},title:{text:"Plot-title"},xaxis:{title:{text:"Timestamp"}},yaxis:{title:{text:"Tempreture (-)"}}};export default p;
