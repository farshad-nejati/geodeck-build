import{c}from"./_commonjsHelpers-b3efd043.js";var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i=s;function n(){}function p(){}p.resetWarningCache=n;var m=function(){function e(u,f,h,l,T,a){if(a!==i){var t=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw t.name="Invariant Violation",t}}e.isRequired=e;function r(){return e}var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:p,resetWarningCache:n};return o.PropTypes=o,o},y=c(function(e){e.exports=m()});export{y as p};