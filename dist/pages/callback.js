var p=Object.defineProperty;var a=(o,e,t)=>(typeof e!="symbol"&&(e+=""),e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t);import n,{Component as l}from"../../_snowpack/pkg/react.js";import{withRouter as m}from"../../_snowpack/pkg/react-router-dom.js";import{withAuth0 as h}from"../../_snowpack/pkg/@auth0/auth0-react.js";import{AUTH0_AUDIENCE as u}from"../constant.js";import{accessToken as g}from"../apollo/cache.js";import"../../_snowpack/pkg/graphql.js";class k extends l{constructor(){super(...arguments);a(this,"saveUserInfo",e=>{const{sub:t,email_verified:s,name:c,nickname:r,picture:i}=e;localStorage.setItem("sub",t),localStorage.setItem("email_verified",s),localStorage.setItem("name",r||parseName(c)),localStorage.setItem("image",i)});a(this,"parseName",e=>e.split("@"))}async componentDidUpdate(e){if(console.log(e),console.log(this.props),e.auth0.isAuthenticated!==this.props.auth0.isAuthenticated){console.log(this.props.auth0);const{user:t}=this.props.auth0;t&&this.saveUserInfo(t);const s=await this.props.auth0.getAccessTokenSilently({audience:u});localStorage.setItem("token",s),g(s),this.props.history.replace("/project")}}render(){return console.log(this.props),n.createElement("div",null,"loading...")}}export default h(m(k));
