import{i as ue,a as qe}from"./inspect-9dd07694.js";import{c as Ie}from"./_commonjsHelpers-b3efd043.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $=function(e,n){return $=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])},$(e,n)};function H(e,n){$(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var S=function(){return S=Object.assign||function(n){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},S.apply(this,arguments)};function Pe(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t}function Me(e,n,t,r){function i(o){return o instanceof t?o:new t(function(u){u(o)})}return new(t||(t=Promise))(function(o,u){function a(d){try{s(r.next(d))}catch(w){u(w)}}function v(d){try{s(r.throw(d))}catch(w){u(w)}}function s(d){d.done?o(d.value):i(d.value).then(a,v)}s((r=r.apply(e,n||[])).next())})}function Re(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(s){return function(d){return v([s,d])}}function v(s){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(o=s[0]&2?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1],o=s;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(s);break}o[2]&&t.ops.pop(),t.trys.pop();continue}s=n.call(e,t)}catch(d){s=[6,d],i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function K(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),i=0,n=0;n<t;n++)for(var o=arguments[n],u=0,a=o.length;u<a;u++,i++)r[i]=o[u];return r}(function(e){typeof globalThis!="object"&&(this?n():(e.defineProperty(e.prototype,"_T_",{configurable:!0,get:n}),_T_));function n(){var t=this||self;t.globalThis=t,delete e.prototype._T_}})(Object);var ae=globalThis,ee=ae,fe=ee.console,ne="Invariant Violation",ce=Object.setPrototypeOf,Le=ce===void 0?function(e,n){return e.__proto__=n,e}:ce,T=function(e){H(n,e);function n(t){t===void 0&&(t=ne);var r=e.call(this,typeof t=="number"?ne+": "+t+" (see https://github.com/apollographql/invariant-packages)":t)||this;return r.framesToPop=1,r.name=ne,Le(r,n.prototype),r}return n}(Error);function x(e,n){if(!e)throw new T(n)}var W=["log","warn","error","silent"],te=W.indexOf("log");function re(e){return function(){if(W.indexOf(e)>=te)return fe[e].apply(fe,arguments)}}(function(e){e.log=re("log"),e.warn=re("warn"),e.error=re("error")})(x||(x={}));function Je(e){var n=W[te];return te=Math.max(0,W.indexOf(e)),n}var Be=ee.process||{env:{}};if(!ee.process)try{Object.defineProperty(ae,"process",{value:Be})}catch(e){}var ze={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},le=Object.freeze({});function A(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ze,r=void 0,i=Array.isArray(e),o=[e],u=-1,a=[],v=void 0,s=void 0,d=void 0,w=[],E=[],L=e;do{u++;var F=u===o.length,j=F&&a.length!==0;if(F){if(s=E.length===0?void 0:w[w.length-1],v=d,d=E.pop(),j){if(i)v=v.slice();else{for(var J={},N=0,G=Object.keys(v);N<G.length;N++){var B=G[N];J[B]=v[B]}v=J}for(var q=0,I=0;I<a.length;I++){var z=a[I][0],V=a[I][1];i&&(z-=q),i&&V===null?(v.splice(z,1),q++):v[z]=V}}u=r.index,o=r.keys,a=r.edits,i=r.inArray,r=r.prev}else{if(s=d?i?u:o[u]:void 0,v=d?d[s]:L,v==null)continue;d&&w.push(s)}var c=void 0;if(!Array.isArray(v)){if(!ue(v))throw new Error("Invalid AST Node: ".concat(qe(v),"."));var l=Qe(n,v.kind,F);if(l){if(c=l.call(n,v,s,d,w,E),c===le)break;if(c===!1){if(!F){w.pop();continue}}else if(c!==void 0&&(a.push([s,c]),!F))if(ue(c))v=c;else{w.pop();continue}}}if(c===void 0&&j&&a.push([s,v]),F)w.pop();else{var f;r={inArray:i,index:u,keys:o,edits:a,prev:r},i=Array.isArray(v),o=i?v:(f=t[v.kind])!==null&&f!==void 0?f:[],u=-1,a=[],d&&E.push(d),d=v}}while(r!==void 0);return a.length!==0&&(L=a[a.length-1][1]),L}function Qe(e,n,t){var r=e[n];if(r){if(!t&&typeof r=="function")return r;var i=t?r.leave:r.enter;if(typeof i=="function")return i}else{var o=t?e.leave:e.enter;if(o){if(typeof o=="function")return o;var u=o[n];if(typeof u=="function")return u}}}function Ue(e,n){var t=n,r=[];e.definitions.forEach(function(o){if(o.kind==="OperationDefinition")throw new T(42);o.kind==="FragmentDefinition"&&r.push(o)}),typeof t=="undefined"&&(x(r.length===1,43),t=r[0].name.value);var i=S(S({},e),{definitions:K([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:t}}]}}],e.definitions)});return i}function se(e){e===void 0&&(e=[]);var n={};return e.forEach(function(t){n[t.name.value]=t}),n}function ve(e,n){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{var t=n&&n[e.name.value];return x(t,44),t}default:return null}}var Ge=function(e,n){n||(n={}),typeof n=="function"&&(n={cmp:n});var t=typeof n.cycles=="boolean"?n.cycles:!1,r=n.cmp&&function(o){return function(u){return function(a,v){var s={key:a,value:u[a]},d={key:v,value:u[v]};return o(s,d)}}}(n.cmp),i=[];return function o(u){if(u&&u.toJSON&&typeof u.toJSON=="function"&&(u=u.toJSON()),u!==void 0){if(typeof u=="number")return isFinite(u)?""+u:"null";if(typeof u!="object")return JSON.stringify(u);var a,v;if(Array.isArray(u)){for(v="[",a=0;a<u.length;a++)a&&(v+=","),v+=o(u[a])||"null";return v+"]"}if(u===null)return"null";if(i.indexOf(u)!==-1){if(t)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var s=i.push(u)-1,d=Object.keys(u).sort(r&&r(u));for(v="",a=0;a<d.length;a++){var w=d[a],E=o(u[w]);!E||(v&&(v+=","),v+=JSON.stringify(w)+":"+E)}return i.splice(s,1),"{"+v+"}"}}(e)};function He(e){return{__ref:String(e)}}function We(e){return Boolean(e&&typeof e=="object"&&typeof e.__ref=="string")}function Ye(e){return e.kind==="StringValue"}function Xe(e){return e.kind==="BooleanValue"}function Ze(e){return e.kind==="IntValue"}function $e(e){return e.kind==="FloatValue"}function Ke(e){return e.kind==="Variable"}function en(e){return e.kind==="ObjectValue"}function nn(e){return e.kind==="ListValue"}function tn(e){return e.kind==="EnumValue"}function rn(e){return e.kind==="NullValue"}function P(e,n,t,r){if(Ze(t)||$e(t))e[n.value]=Number(t.value);else if(Xe(t)||Ye(t))e[n.value]=t.value;else if(en(t)){var i={};t.fields.map(function(u){return P(i,u.name,u.value,r)}),e[n.value]=i}else if(Ke(t)){var o=(r||{})[t.name.value];e[n.value]=o}else if(nn(t))e[n.value]=t.values.map(function(u){var a={};return P(a,n,u,r),a[n.value]});else if(tn(t))e[n.value]=t.value;else if(rn(t))e[n.value]=null;else throw new T(53)}function on(e,n){var t=null;e.directives&&(t={},e.directives.forEach(function(i){t[i.name.value]={},i.arguments&&i.arguments.forEach(function(o){var u=o.name,a=o.value;return P(t[i.name.value],u,a,n)})}));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(function(i){var o=i.name,u=i.value;return P(r,o,u,n)})),me(e.name.value,r,t)}var un=["connection","include","skip","client","rest","export"];function me(e,n,t){if(n&&t&&t.connection&&t.connection.key)if(t.connection.filter&&t.connection.filter.length>0){var r=t.connection.filter?t.connection.filter:[];r.sort();var i={};return r.forEach(function(a){i[a]=n[a]}),t.connection.key+"("+JSON.stringify(i)+")"}else return t.connection.key;var o=e;if(n){var u=Ge(n);o+="("+u+")"}return t&&Object.keys(t).forEach(function(a){un.indexOf(a)===-1&&(t[a]&&Object.keys(t[a]).length?o+="@"+a+"("+JSON.stringify(t[a])+")":o+="@"+a)}),o}function an(e,n){if(e.arguments&&e.arguments.length){var t={};return e.arguments.forEach(function(r){var i=r.name,o=r.value;return P(t,i,o,n)}),t}return null}function pe(e){return e.alias?e.alias.value:e.name.value}function he(e,n,t){if(typeof e.__typename=="string")return e.__typename;for(var r=0,i=n.selections;r<i.length;r++){var o=i[r];if(M(o)){if(o.name.value==="__typename")return e[pe(o)]}else{var u=he(e,ve(o,t).selectionSet,t);if(typeof u=="string")return u}}}function M(e){return e.kind==="Field"}function ye(e){return e.kind==="InlineFragment"}function Q(e){x(e&&e.kind==="Document",45);var n=e.definitions.filter(function(t){return t.kind!=="FragmentDefinition"}).map(function(t){if(t.kind!=="OperationDefinition")throw new T(46);return t});return x(n.length<=1,47),e}function ie(e){return Q(e),e.definitions.filter(function(n){return n.kind==="OperationDefinition"})[0]}function de(e){return e.definitions.filter(function(n){return n.kind==="OperationDefinition"&&n.name}).map(function(n){return n.name.value})[0]||null}function be(e){return e.definitions.filter(function(n){return n.kind==="FragmentDefinition"})}function fn(e){var n=ie(e);return x(n&&n.operation==="query",48),n}function cn(e){x(e.kind==="Document",49),x(e.definitions.length<=1,50);var n=e.definitions[0];return x(n.kind==="FragmentDefinition",51),n}function ge(e){Q(e);for(var n,t=0,r=e.definitions;t<r.length;t++){var i=r[t];if(i.kind==="OperationDefinition"){var o=i.operation;if(o==="query"||o==="mutation"||o==="subscription")return i}i.kind==="FragmentDefinition"&&!n&&(n=i)}if(n)return n;throw new T(52)}function ln(e){var n=Object.create(null),t=e&&e.variableDefinitions;return t&&t.length&&t.forEach(function(r){r.defaultValue&&P(n,r.variable.name,r.defaultValue)}),n}function we(e,n,t){var r=0;return e.forEach(function(i,o){n.call(this,i,o,e)&&(e[r++]=i)},t),e.length=r,e}var Oe={kind:"Field",name:{kind:"Name",value:"__typename"}};function Se(e,n){return e.selectionSet.selections.every(function(t){return t.kind==="FragmentSpread"&&Se(n[t.name.value],n)})}function oe(e){return Se(ie(e)||cn(e),se(be(e)))?null:e}function _e(e){return function(t){return e.some(function(r){return r.name&&r.name===t.name.value||r.test&&r.test(t)})}}function ke(e,n){var t=Object.create(null),r=[],i=Object.create(null),o=[],u=oe(A(n,{Variable:{enter:function(a,v,s){s.kind!=="VariableDefinition"&&(t[a.name.value]=!0)}},Field:{enter:function(a){if(e&&a.directives){var v=e.some(function(s){return s.remove});if(v&&a.directives&&a.directives.some(_e(e)))return a.arguments&&a.arguments.forEach(function(s){s.value.kind==="Variable"&&r.push({name:s.value.name.value})}),a.selectionSet&&Ee(a.selectionSet).forEach(function(s){o.push({name:s.name.value})}),null}}},FragmentSpread:{enter:function(a){i[a.name.value]=!0}},Directive:{enter:function(a){if(_e(e)(a))return null}}}));return u&&we(r,function(a){return!!a.name&&!t[a.name]}).length&&(u=pn(r,u)),u&&we(o,function(a){return!!a.name&&!i[a.name]}).length&&(u=hn(o,u)),u}function De(e){return A(Q(e),{SelectionSet:{enter:function(n,t,r){if(!(r&&r.kind==="OperationDefinition")){var i=n.selections;if(!!i){var o=i.some(function(a){return M(a)&&(a.name.value==="__typename"||a.name.value.lastIndexOf("__",0)===0)});if(!o){var u=r;if(!(M(u)&&u.directives&&u.directives.some(function(a){return a.name.value==="export"})))return S(S({},n),{selections:K(i,[Oe])})}}}}}})}De.added=function(e){return e===Oe};var sn={test:function(e){var n=e.name.value==="connection";return n&&(!e.arguments||!e.arguments.some(function(t){return t.name.value==="key"})),n}};function vn(e){return ke([sn],Q(e))}function mn(e){return function(t){return e.some(function(r){return t.value&&t.value.kind==="Variable"&&t.value.name&&(r.name===t.value.name.value||r.test&&r.test(t))})}}function pn(e,n){var t=mn(e);return oe(A(n,{OperationDefinition:{enter:function(r){return S(S({},r),{variableDefinitions:r.variableDefinitions?r.variableDefinitions.filter(function(i){return!e.some(function(o){return o.name===i.variable.name.value})}):[]})}},Field:{enter:function(r){var i=e.some(function(u){return u.remove});if(i){var o=0;if(r.arguments&&r.arguments.forEach(function(u){t(u)&&(o+=1)}),o===1)return null}}},Argument:{enter:function(r){if(t(r))return null}}}))}function hn(e,n){function t(r){if(e.some(function(i){return i.name===r.name.value}))return null}return oe(A(n,{FragmentSpread:{enter:t},FragmentDefinition:{enter:t}}))}function Ee(e){var n=[];return e.selections.forEach(function(t){(M(t)||ye(t))&&t.selectionSet?Ee(t.selectionSet).forEach(function(r){return n.push(r)}):t.kind==="FragmentSpread"&&n.push(t)}),n}function yn(e){var n=ge(e),t=n.operation;if(t==="query")return e;var r=A(e,{OperationDefinition:{enter:function(i){return S(S({},i),{operation:"query"})}}});return r}function dn(e){Q(e);var n=ke([{test:function(t){return t.name.value==="client"},remove:!0}],e);return n&&(n=A(n,{FragmentDefinition:{enter:function(t){if(t.selectionSet){var r=t.selectionSet.selections.every(function(i){return M(i)&&i.name.value==="__typename"});if(r)return null}}}})),n}var bn=Object.prototype.hasOwnProperty;function gn(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Fe(e)}function Fe(e){var n=e[0]||{},t=e.length;if(t>1)for(var r=new xe,i=1;i<t;++i)n=r.merge(n,e[i]);return n}function Y(e){return e!==null&&typeof e=="object"}var wn=function(e,n,t){return this.merge(e[t],n[t])},xe=function(){function e(n){n===void 0&&(n=wn),this.reconciler=n,this.isObject=Y,this.pastCopies=new Set}return e.prototype.merge=function(n,t){for(var r=this,i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];return Y(t)&&Y(n)?(Object.keys(t).forEach(function(u){if(bn.call(n,u)){var a=n[u];if(t[u]!==a){var v=r.reconciler.apply(r,K([n,t,u],i));v!==a&&(n=r.shallowCopyForMerge(n),n[u]=v)}}else n=r.shallowCopyForMerge(n),n[u]=t[u]}),n):t},e.prototype.shallowCopyForMerge=function(n){return Y(n)&&!this.pastCopies.has(n)&&(Array.isArray(n)?n=n.slice(0):n=S({__proto__:Object.getPrototypeOf(n)},n),this.pastCopies.add(n)),n},e}(),On=Ie(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Observable=void 0;function t(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function r(c,l){for(var f=0;f<l.length;f++){var p=l[f];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(c,p.key,p)}}function i(c,l,f){return l&&r(c.prototype,l),f&&r(c,f),c}var o=function(){return typeof Symbol=="function"},u=function(c){return o()&&Boolean(Symbol[c])},a=function(c){return u(c)?Symbol[c]:"@@"+c};o()&&!u("observable")&&(Symbol.observable=Symbol("observable"));var v=a("iterator"),s=a("observable"),d=a("species");function w(c,l){var f=c[l];if(f!=null){if(typeof f!="function")throw new TypeError(f+" is not a function");return f}}function E(c){var l=c.constructor;return l!==void 0&&(l=l[d],l===null&&(l=void 0)),l!==void 0?l:V}function L(c){return c instanceof V}function F(c){F.log?F.log(c):setTimeout(function(){throw c})}function j(c){Promise.resolve().then(function(){try{c()}catch(l){F(l)}})}function J(c){var l=c._cleanup;if(l!==void 0&&(c._cleanup=void 0,!!l))try{if(typeof l=="function")l();else{var f=w(l,"unsubscribe");f&&f.call(l)}}catch(p){F(p)}}function N(c){c._observer=void 0,c._queue=void 0,c._state="closed"}function G(c){var l=c._queue;if(!!l){c._queue=void 0,c._state="ready";for(var f=0;f<l.length&&(B(c,l[f].type,l[f].value),c._state!=="closed");++f);}}function B(c,l,f){c._state="running";var p=c._observer;try{var y=w(p,l);switch(l){case"next":y&&y.call(p,f);break;case"error":if(N(c),y)y.call(p,f);else throw f;break;case"complete":N(c),y&&y.call(p);break}}catch(h){F(h)}c._state==="closed"?J(c):c._state==="running"&&(c._state="ready")}function q(c,l,f){if(c._state!=="closed"){if(c._state==="buffering"){c._queue.push({type:l,value:f});return}if(c._state!=="ready"){c._state="buffering",c._queue=[{type:l,value:f}],j(function(){return G(c)});return}B(c,l,f)}}var I=function(){function c(l,f){t(this,c),this._cleanup=void 0,this._observer=l,this._queue=void 0,this._state="initializing";var p=new z(this);try{this._cleanup=f.call(void 0,p)}catch(y){p.error(y)}this._state==="initializing"&&(this._state="ready")}return i(c,[{key:"unsubscribe",value:function(){this._state!=="closed"&&(N(this),J(this))}},{key:"closed",get:function(){return this._state==="closed"}}]),c}(),z=function(){function c(l){t(this,c),this._subscription=l}return i(c,[{key:"next",value:function(f){q(this._subscription,"next",f)}},{key:"error",value:function(f){q(this._subscription,"error",f)}},{key:"complete",value:function(){q(this._subscription,"complete")}},{key:"closed",get:function(){return this._subscription._state==="closed"}}]),c}(),V=function(){function c(l){if(t(this,c),!(this instanceof c))throw new TypeError("Observable cannot be called as a function");if(typeof l!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=l}return i(c,[{key:"subscribe",value:function(f){return(typeof f!="object"||f===null)&&(f={next:f,error:arguments[1],complete:arguments[2]}),new I(f,this._subscriber)}},{key:"forEach",value:function(f){var p=this;return new Promise(function(y,h){if(typeof f!="function"){h(new TypeError(f+" is not a function"));return}function m(){b.unsubscribe(),y()}var b=p.subscribe({next:function(O){try{f(O,m)}catch(g){h(g),b.unsubscribe()}},error:h,complete:y})})}},{key:"map",value:function(f){var p=this;if(typeof f!="function")throw new TypeError(f+" is not a function");var y=E(this);return new y(function(h){return p.subscribe({next:function(m){try{m=f(m)}catch(b){return h.error(b)}h.next(m)},error:function(m){h.error(m)},complete:function(){h.complete()}})})}},{key:"filter",value:function(f){var p=this;if(typeof f!="function")throw new TypeError(f+" is not a function");var y=E(this);return new y(function(h){return p.subscribe({next:function(m){try{if(!f(m))return}catch(b){return h.error(b)}h.next(m)},error:function(m){h.error(m)},complete:function(){h.complete()}})})}},{key:"reduce",value:function(f){var p=this;if(typeof f!="function")throw new TypeError(f+" is not a function");var y=E(this),h=arguments.length>1,m=!1,b=arguments[1],O=b;return new y(function(g){return p.subscribe({next:function(D){var k=!m;if(m=!0,!k||h)try{O=f(O,D)}catch(C){return g.error(C)}else O=D},error:function(D){g.error(D)},complete:function(){if(!m&&!h)return g.error(new TypeError("Cannot reduce an empty sequence"));g.next(O),g.complete()}})})}},{key:"concat",value:function(){for(var f=this,p=arguments.length,y=new Array(p),h=0;h<p;h++)y[h]=arguments[h];var m=E(this);return new m(function(b){var O,g=0;function D(k){O=k.subscribe({next:function(C){b.next(C)},error:function(C){b.error(C)},complete:function(){g===y.length?(O=void 0,b.complete()):D(m.from(y[g++]))}})}return D(f),function(){O&&(O.unsubscribe(),O=void 0)}})}},{key:"flatMap",value:function(f){var p=this;if(typeof f!="function")throw new TypeError(f+" is not a function");var y=E(this);return new y(function(h){var m=[],b=p.subscribe({next:function(g){if(f)try{g=f(g)}catch(k){return h.error(k)}var D=y.from(g).subscribe({next:function(k){h.next(k)},error:function(k){h.error(k)},complete:function(){var k=m.indexOf(D);k>=0&&m.splice(k,1),O()}});m.push(D)},error:function(g){h.error(g)},complete:function(){O()}});function O(){b.closed&&m.length===0&&h.complete()}return function(){m.forEach(function(g){return g.unsubscribe()}),b.unsubscribe()}})}},{key:s,value:function(){return this}}],[{key:"from",value:function(f){var p=typeof this=="function"?this:c;if(f==null)throw new TypeError(f+" is not an object");var y=w(f,s);if(y){var h=y.call(f);if(Object(h)!==h)throw new TypeError(h+" is not an object");return L(h)&&h.constructor===p?h:new p(function(m){return h.subscribe(m)})}if(u("iterator")&&(y=w(f,v),y))return new p(function(m){j(function(){if(!m.closed){var b=!0,O=!1,g=void 0;try{for(var D=y.call(f)[Symbol.iterator](),k;!(b=(k=D.next()).done);b=!0){var C=k.value;if(m.next(C),m.closed)return}}catch(Ae){O=!0,g=Ae}finally{try{!b&&D.return!=null&&D.return()}finally{if(O)throw g}}m.complete()}})});if(Array.isArray(f))return new p(function(m){j(function(){if(!m.closed){for(var b=0;b<f.length;++b)if(m.next(f[b]),m.closed)return;m.complete()}})});throw new TypeError(f+" is not observable")}},{key:"of",value:function(){for(var f=arguments.length,p=new Array(f),y=0;y<f;y++)p[y]=arguments[y];var h=typeof this=="function"?this:c;return new h(function(m){j(function(){if(!m.closed){for(var b=0;b<p.length;++b)if(m.next(p[b]),m.closed)return;m.complete()}})})}},{key:d,get:function(){return this}}]),c}();n.Observable=V,o()&&Object.defineProperty(V,Symbol("extensions"),{value:{symbol:s,hostReportError:F},configurable:!0})}),_=On.Observable;function Sn(e){var n,t=e.Symbol;if(typeof t=="function")if(t.observable)n=t.observable;else{n=t.for("https://github.com/benlesh/symbol-observable");try{t.observable=n}catch(r){}}else n="@@observable";return n}var R;typeof self!="undefined"?R=self:typeof window!="undefined"?R=window:typeof global!="undefined"?R=global:typeof module!="undefined"?R=module:R=Function("return this")(),Sn(R),_.prototype["@@observable"]=function(){return this};function X(e,n,t){var r=[];e.forEach(function(i){return i[n]&&r.push(i)}),r.forEach(function(i){return i[n](t)})}function Te(e){function n(t){Object.defineProperty(e,t,{value:_})}return typeof Symbol=="function"&&Symbol.species&&n(Symbol.species),n("@@species"),e}function je(e){return e&&typeof e.then=="function"}var Ne=function(e){H(n,e);function n(t){var r=e.call(this,function(i){return r.addObserver(i),function(){return r.removeObserver(i)}})||this;return r.observers=new Set,r.addCount=0,r.promise=new Promise(function(i,o){r.resolve=i,r.reject=o}),r.handlers={next:function(i){r.sub!==null&&(r.latest=["next",i],X(r.observers,"next",i))},error:function(i){var o=r.sub;o!==null&&(o&&Promise.resolve().then(function(){return o.unsubscribe()}),r.sub=null,r.latest=["error",i],r.reject(i),X(r.observers,"error",i))},complete:function(){if(r.sub!==null){var i=r.sources.shift();i?je(i)?i.then(function(o){return r.sub=o.subscribe(r.handlers)}):r.sub=i.subscribe(r.handlers):(r.sub=null,r.latest&&r.latest[0]==="next"?r.resolve(r.latest[1]):r.resolve(),X(r.observers,"complete"))}}},r.cancel=function(i){r.reject(i),r.sources=[],r.handlers.complete()},r.promise.catch(function(i){}),typeof t=="function"&&(t=[new _(t)]),je(t)?t.then(function(i){return r.start(i)},r.handlers.error):r.start(t),r}return n.prototype.start=function(t){this.sub===void 0&&(this.sources=Array.from(t),this.handlers.complete())},n.prototype.deliverLastMessage=function(t){if(this.latest){var r=this.latest[0],i=t[r];i&&i.call(t,this.latest[1]),this.sub===null&&r==="next"&&t.complete&&t.complete()}},n.prototype.addObserver=function(t){this.observers.has(t)||(this.deliverLastMessage(t),this.observers.add(t),++this.addCount)},n.prototype.removeObserver=function(t,r){this.observers.delete(t)&&--this.addCount<1&&!r&&this.handlers.error(new Error("Observable cancelled prematurely"))},n.prototype.cleanup=function(t){var r=this,i=!1,o=function(){i||(i=!0,r.observers.delete(u),t())},u={next:o,error:o,complete:o},a=this.addCount;this.addObserver(u),this.addCount=a},n}(_);Te(Ne);function _n(e){for(var n=["query","operationName","variables","extensions","context"],t=0,r=Object.keys(e);t<r.length;t++){var i=r[t];if(n.indexOf(i)<0)throw new T(26)}return e}function kn(e,n){var t=S({},e),r=function(o){typeof o=="function"?t=S(S({},t),o(t)):t=S(S({},t),o)},i=function(){return S({},t)};return Object.defineProperty(n,"setContext",{enumerable:!1,value:r}),Object.defineProperty(n,"getContext",{enumerable:!1,value:i}),n}function Dn(e){var n={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return n.operationName||(n.operationName=typeof n.query!="string"?de(n.query)||void 0:""),n}function Ve(e,n){return n?n(e):_.of()}function U(e){return typeof e=="function"?new Ce(e):e}function Z(e){return e.request.length<=1}(function(e){H(n,e);function n(t,r){var i=e.call(this,t)||this;return i.link=r,i}return n})(Error);var Ce=function(){function e(n){n&&(this.request=n)}return e.empty=function(){return new e(function(){return _.of()})},e.from=function(n){return n.length===0?e.empty():n.map(U).reduce(function(t,r){return t.concat(r)})},e.split=function(n,t,r){var i=U(t),o=U(r||new e(Ve));return Z(i)&&Z(o)?new e(function(u){return n(u)?i.request(u)||_.of():o.request(u)||_.of()}):new e(function(u,a){return n(u)?i.request(u,a)||_.of():o.request(u,a)||_.of()})},e.execute=function(n,t){return n.request(kn(t.context,Dn(_n(t))))||_.of()},e.concat=function(n,t){var r=U(n);if(Z(r))return r;var i=U(t);return Z(i)?new e(function(o){return r.request(o,function(u){return i.request(u)||_.of()})||_.of()}):new e(function(o,u){return r.request(o,function(a){return i.request(a,u)||_.of()})||_.of()})},e.prototype.split=function(n,t,r){return this.concat(e.split(n,t,r||new e(Ve)))},e.prototype.concat=function(n){return e.concat(this,n)},e.prototype.request=function(n,t){throw new T(21)},e.prototype.onError=function(n,t){if(t&&t.error)return t.error(n),!1;throw n},e.prototype.setOnError=function(n){return this.onError=n,this},e}();export{Ce as A,Me as B,dn as C,xe as D,Re as E,le as F,yn as G,ye as H,T as I,de as J,vn as K,Ne as L,Je as M,H as _,S as a,Pe as b,X as c,Ue as d,We as e,Te as f,ie as g,M as h,x as i,ln as j,fn as k,ge as l,He as m,se as n,be as o,De as p,ve as q,pe as r,Fe as s,he as t,an as u,A as v,on as w,me as x,gn as y,_ as z};