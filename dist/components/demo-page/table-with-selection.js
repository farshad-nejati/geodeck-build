var r=Object.defineProperty;var s=(e,t,a)=>(typeof t!="symbol"&&(t+=""),t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a);import n from"https://cdn.skypack.dev/react";import{Table as c,Button as i}from"https://cdn.skypack.dev/antd";const m=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],o=[];for(let e=0;e<4;e++)o.push({key:e,name:`Edward King ${e}`,age:32,address:`London, Park Lane no. ${e}`});class g extends n.Component{constructor(){super(...arguments);s(this,"state",{selectedRowKeys:[],loading:!1});s(this,"start",()=>{this.setState({loading:!0}),setTimeout(()=>{this.setState({selectedRowKeys:[],loading:!1})},1e3)});s(this,"onSelectChange",t=>{console.log("selectedRowKeys changed: ",t),this.setState({selectedRowKeys:t})})}render(){const{loading:t,selectedRowKeys:a}=this.state,l={selectedRowKeys:a,onChange:this.onSelectChange},d=a.length>0;return n.createElement("div",{style:{gridColumn:"1/-1"}},n.createElement("div",{style:{marginBottom:16}},n.createElement(i,{type:"primary",onClick:this.start,disabled:!d,loading:t},"Reload"),n.createElement("span",{style:{marginLeft:8}},d?`Selected ${a.length} items`:"")),n.createElement(c,{rowSelection:l,bordered:!0,columns:m,dataSource:o}))}}export default g;
