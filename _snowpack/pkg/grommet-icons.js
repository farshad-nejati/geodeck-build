import{r as l}from"./common/index-5286cf50.js";import{A as d,q as x}from"./common/styled-components.browser.esm-5c3e0f72.js";import"./common/_commonjsHelpers-b3efd043.js";import"./common/process-2545f00a.js";import"./common/index-a01d78b1.js";import"./common/hoist-non-react-statics.cjs-57c43670.js";var y={global:{colors:{icon:"#666666"}},icon:{size:{small:"12px",medium:"24px",large:"48px",xlarge:"96px"}}},L={theme:y},b=function t(e,r){var n=r.global.colors[e]||e,o=n;return r.dark&&n.dark?o=n.dark:!r.dark&&n.light&&(o=n.light),o&&r.global.colors[o]&&r.global.colors[o]!==o&&(o=t(o,r)),o},v=function(e,r,n,o){return d(["",":",";"],e,b(r,n))};function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}function j(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}var w=d([""," ",' g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill="none"]{stroke-width:0;}}*[stroke*="#"],*[STROKE*="#"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*="#"],*[FILL*="#"]{fill:inherit;stroke:none;}'],function(t){return v("fill",t.color||t.theme.global.colors.icon,t.theme)},function(t){return v("stroke",t.color||t.theme.global.colors.icon,t.theme)}),g=function(e){var r=e.a11yTitle;e.color,e.size,e.theme;var n=j(e,["a11yTitle","color","size","theme"]);return l.createElement("svg",f({"aria-label":r},n))};g.displayName="Icon";var O=function(e){return parseFloat(e.match(/\d+(\.\d+)?/),10)},s=x(g).withConfig({displayName:"StyledIcon",componentId:"ofa7kd-0"})(["display:inline-block;flex:0 0 auto;"," "," ",""],function(t){var e=t.size,r=e===void 0?"medium":e,n=t.theme,o=t.viewBox,i=(o||"0 0 24 24").split(" "),c=i[2],m=i[3],h=c/m,a=O(n.icon.size[r]||r);return c<m?`
      width: `+a+`px;
      height: `+a/h+`px;
    `:m<c?`
      width: `+a*h+`px;
      height: `+a+`px;
    `:`
      width: `+a+`px;
      height: `+a+`px;
    `},function(t){var e=t.color;return e!=="plain"&&w},function(t){var e=t.theme;return e&&e.icon.extend});s.defaultProps={},Object.setPrototypeOf(s.defaultProps,L);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},u.apply(this,arguments)}var k=function(e){return l.createElement(s,u({viewBox:"0 0 24 24",a11yTitle:"Gallery"},e),l.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97061363 L18.9998921,5.97061363 M6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16"}))};function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p.apply(this,arguments)}var C=function(e){return l.createElement(s,p({viewBox:"0 0 24 24",a11yTitle:"Notification"},e),l.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M4,19 L4,9 C4,4.582 7.582,1 12,1 C16.418,1 20,4.582 20,9 L20,19 M1,19 L23,19 M15,19 L15,20 C15,21.657 13.657,23 12,23 C10.343,23 9,21.657 9,20 L9,19"}))};export{k as Gallery,C as Notification};