var l=Object.defineProperty;var a=(n,e,r)=>(typeof e!="symbol"&&(e+=""),e in n?l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r);import t from"../../../_snowpack/pkg/react.js";import{Slider as m,InputNumber as s,Row as p,Col as o}from"../../../_snowpack/pkg/antd.js";class i extends t.Component{constructor(){super(...arguments);a(this,"state",{inputValue:1});a(this,"onChange",e=>{this.setState({inputValue:e})})}render(){const{inputValue:e}=this.state;return t.createElement(p,null,t.createElement(o,{span:12},t.createElement(m,{min:1,max:20,onChange:this.onChange,value:typeof e=="number"?e:0})),t.createElement(o,{span:4},t.createElement(s,{min:1,max:20,style:{margin:"0 16px"},value:e,onChange:this.onChange})))}}export default i;
