import{c as q,e as d,m as z,A as k,N as O}from"../common/index-ed3c0702.js";export{b as ApolloClient,H as HttpLink,I as InMemoryCache,d as concat,f as from,g as gql,a as makeVar}from"../common/index-ed3c0702.js";import{i as y,_ as x,a as l}from"../common/ApolloLink-60d64c57.js";export{A as ApolloLink}from"../common/ApolloLink-60d64c57.js";import{r as f}from"../common/index-57a74e37.js";import"../common/parser-1649b75f.js";import"../common/inspect-9dd07694.js";import"../common/_commonjsHelpers-8c19dec8.js";var w=new(q?WeakMap:Map);function M(){var s=w.get(f.createContext);return s||(s=f.createContext({}),s.displayName="ApolloContext",w.set(f.createContext,s)),s}var N=function(s){var e=s.client,t=s.children,n=M();return f.createElement(n.Consumer,null,function(o){return o===void 0&&(o={}),e&&o.client!==e&&(o=Object.assign({},o,{client:e})),y(o.client,28),f.createElement(n.Provider,{value:o},t)})},b;(function(s){s[s.Query=0]="Query",s[s.Mutation=1]="Mutation",s[s.Subscription=2]="Subscription"})(b||(b={}));var C=new Map;function E(s){var e;switch(s){case b.Query:e="Query";break;case b.Mutation:e="Mutation";break;case b.Subscription:e="Subscription";break}return e}function j(s){var e=C.get(s);if(e)return e;var t,n,o;y(!!s&&!!s.kind,34);var c=s.definitions.filter(function(h){return h.kind==="FragmentDefinition"}),r=s.definitions.filter(function(h){return h.kind==="OperationDefinition"&&h.operation==="query"}),i=s.definitions.filter(function(h){return h.kind==="OperationDefinition"&&h.operation==="mutation"}),u=s.definitions.filter(function(h){return h.kind==="OperationDefinition"&&h.operation==="subscription"});y(!c.length||r.length||i.length||u.length,35),y(r.length+i.length+u.length<=1,36),n=r.length?b.Query:b.Mutation,!r.length&&!i.length&&(n=b.Subscription);var a=r.length?r:i.length?i:u;y(a.length===1,37);var p=a[0];t=p.variableDefinitions||[],p.name&&p.name.kind==="Name"?o=p.name.value:o="data";var v={name:o,type:n,variables:t};return C.set(s,v),v}var Q=function(){function s(e,t){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=e||{},this.context=t||{}}return s.prototype.getOptions=function(){return this.options},s.prototype.setOptions=function(e,t){t===void 0&&(t=!1),t&&!d(this.options,e)&&(this.previousOptions=this.options),this.options=e},s.prototype.unmount=function(){this.isMounted=!1},s.prototype.refreshClient=function(){var e=this.options&&this.options.client||this.context&&this.context.client;y(!!e,29);var t=!1;return e!==this.client&&(t=!0,this.client=e,this.cleanup()),{client:this.client,isNew:t}},s.prototype.verifyDocumentType=function(e,t){var n=j(e);E(t),E(n.type),y(n.type===t,30)},s}();(function(s){x(e,s);function e(t){var n=t.options,o=t.context,c=t.setResult,r=s.call(this,n,o)||this;return r.currentObservable={},r.setResult=c,r.initialize(n),r}return e.prototype.execute=function(t){if(this.getOptions().skip===!0)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var n=t;this.refreshClient().isNew&&(n=this.getLoadingResult());var o=this.getOptions().shouldResubscribe;return typeof o=="function"&&(o=!!o(this.getOptions())),o!==!1&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!d(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),n=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),l(l({},n),{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||this.getOptions().skip===!0||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var n=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),n&&n({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e})(Q);var I=function(s){x(e,s);function e(t){var n=t.options,o=t.context,c=t.result,r=t.setResult,i=s.call(this,n,o)||this;return i.runMutation=function(u){u===void 0&&(u={}),i.onMutationStart();var a=i.generateNewMutationId();return i.mutate(u).then(function(p){return i.onMutationCompleted(p,a),p}).catch(function(p){if(i.onMutationError(p,a),!i.getOptions().onError)throw p})},i.verifyDocumentType(n.mutation,b.Mutation),i.result=c,i.setResult=r,i.mostRecentMutationId=0,i}return e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,b.Mutation),[this.runMutation,l(l({},t),{client:this.refreshClient().client})]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){return this.refreshClient().client.mutate(z(this.getOptions(),t))},e.prototype.onMutationStart=function(){!this.result.loading&&!this.getOptions().ignoreResults&&this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,n){var o=this.getOptions(),c=o.onCompleted,r=o.ignoreResults,i=t.data,u=t.errors,a=u&&u.length>0?new k({graphQLErrors:u}):void 0,p=function(){return c?c(i):null};this.isMostRecentMutation(n)&&!r&&this.updateResult({called:!0,loading:!1,data:i,error:a}),p()},e.prototype.onMutationError=function(t,n){var o=this.getOptions().onError;this.isMostRecentMutation(n)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),o&&o(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){this.isMounted&&(!this.previousResult||!d(this.previousResult,t))&&(this.setResult(t),this.previousResult=t)},e}(Q),A=function(s){x(e,s);function e(t){var n=t.options,o=t.context,c=t.onNewData,r=s.call(this,n,o)||this;return r.runLazy=!1,r.previous=Object.create(null),r.runLazyQuery=function(i){r.cleanup(),r.runLazy=!0,r.lazyOptions=i,r.onNewData()},r.getQueryResult=function(){var i=r.observableQueryFields(),u=r.getOptions();if(u.skip)i=l(l({},i),{data:void 0,error:void 0,loading:!1,networkStatus:O.ready,called:!0});else if(r.currentObservable){var a=r.currentObservable.getCurrentResult(),p=a.data,v=a.loading,h=a.partial,m=a.networkStatus,R=a.errors,S=a.error;if(R&&R.length>0&&(S=new k({graphQLErrors:R})),i=l(l({},i),{data:p,loading:v,networkStatus:m,error:S,called:!0}),!v)if(S)Object.assign(i,{data:(r.currentObservable.getLastResult()||{}).data});else{var L=r.currentObservable.options.fetchPolicy,P=u.partialRefetch;if(P&&h&&(!p||Object.keys(p).length===0)&&L!=="cache-only")return Object.assign(i,{loading:!0,networkStatus:O.loading}),i.refetch(),i}}i.client=r.client,r.setOptions(u,!0);var g=r.previous.result;return r.previous.loading=g&&g.loading||!1,i.previousData=g&&(g.data||g.previousData),r.previous.result=i,r.currentObservable&&r.currentObservable.resetQueryStoreErrors(),i},r.obsRefetch=function(i){var u;return(u=r.currentObservable)===null||u===void 0?void 0:u.refetch(i)},r.obsFetchMore=function(i){return r.currentObservable.fetchMore(i)},r.obsUpdateQuery=function(i){return r.currentObservable.updateQuery(i)},r.obsStartPolling=function(i){var u;(u=r.currentObservable)===null||u===void 0||u.startPolling(i)},r.obsStopPolling=function(){var i;(i=r.currentObservable)===null||i===void 0||i.stopPolling()},r.obsSubscribeToMore=function(i){return r.currentObservable.subscribeToMore(i)},r.onNewData=c,r}return e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),n=t.skip,o=t.query;return(n||o!==this.previous.query)&&(this.removeQuerySubscription(),this.removeObservable(!n),this.previous.query=o),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:O.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this,n=this.getOptions();return n.skip||n.ssr===!1?!1:new Promise(function(o){return t.startQuerySubscription(o)})},e.prototype.afterExecute=function(t){var n=(t===void 0?{}:t).lazy,o=n===void 0?!1:n;return this.isMounted=!0,(!o||this.runLazy)&&this.handleErrorOrCompleted(),this.previousOptions=this.getOptions(),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),this.removeObservable(!0),delete this.previous.result},e.prototype.getOptions=function(){var t=s.prototype.getOptions.call(this);return this.lazyOptions&&(t.variables=l(l({},t.variables),this.lazyOptions.variables),t.context=l(l({},t.context),this.lazyOptions.context)),this.runLazy&&delete t.skip,t},e.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},e.prototype.getExecuteResult=function(){var t=this.getQueryResult();return this.startQuerySubscription(),t},e.prototype.getExecuteSsrResult=function(){var t=this.getOptions(),n=t.ssr,o=t.skip,c=n===!1,r=this.refreshClient().client.disableNetworkFetches,i=l({loading:!0,networkStatus:O.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields());if(c&&(this.ssrInitiated()||r))return this.previous.result=i,i;var u;return this.ssrInitiated()&&(o?u=this.getQueryResult():u=this.context.renderPromises.addQueryPromise(this,this.getQueryResult)||i),u},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,b.Query);var n=t.displayName||"Query";return this.ssrInitiated()&&(t.fetchPolicy==="network-only"||t.fetchPolicy==="cache-and-network")&&(t.fetchPolicy="cache-first"),l(l({},t),{displayName:n,context:t.context})},e.prototype.initializeObservableQuery=function(){if(this.ssrInitiated()&&(this.currentObservable=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable){var t=this.prepareObservableQueryOptions();this.previous.observableQueryOptions=l(l({},t),{children:null}),this.currentObservable=this.refreshClient().client.watchQuery(l({},t)),this.ssrInitiated()&&this.context.renderPromises.registerSSRObservable(this.currentObservable,t)}},e.prototype.updateObservableQuery=function(){if(!this.currentObservable){this.initializeObservableQuery();return}if(!this.getOptions().skip){var t=l(l({},this.prepareObservableQueryOptions()),{children:null});d(t,this.previous.observableQueryOptions)||(this.previous.observableQueryOptions=t,this.currentObservable.setOptions(t).catch(function(){}))}},e.prototype.startQuerySubscription=function(t){var n=this;t===void 0&&(t=this.onNewData),!(this.currentSubscription||this.getOptions().skip)&&(this.currentSubscription=this.currentObservable.subscribe({next:function(o){var c=o.loading,r=o.networkStatus,i=o.data,u=n.previous.result;u&&u.loading===c&&u.networkStatus===r&&d(u.data,i)||t()},error:function(o){if(n.resubscribeToQuery(),!o.hasOwnProperty("graphQLErrors"))throw o;var c=n.previous.result;(c&&c.loading||!d(o,n.previous.error))&&(n.previous.error=o,t())}}))},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable;if(t){var n=t.getLastError(),o=t.getLastResult();t.resetLastResults(),this.startQuerySubscription(),Object.assign(t,{lastError:n,lastResult:o})}},e.prototype.handleErrorOrCompleted=function(){if(!(!this.currentObservable||!this.previous.result)){var t=this.previous.result,n=t.data,o=t.loading,c=t.error;if(!o){var r=this.getOptions(),i=r.query,u=r.variables,a=r.onCompleted,p=r.onError,v=r.skip;if(this.previousOptions&&!this.previous.loading&&d(this.previousOptions.query,i)&&d(this.previousOptions.variables,u))return;a&&!c&&!v?a(n):p&&c&&p(c)}}},e.prototype.removeQuerySubscription=function(){this.currentSubscription&&(this.currentSubscription.unsubscribe(),delete this.currentSubscription)},e.prototype.removeObservable=function(t){this.currentObservable&&(this.currentObservable.tearDownQuery(),t&&delete this.currentObservable)},e.prototype.observableQueryFields=function(){var t;return{variables:(t=this.currentObservable)===null||t===void 0?void 0:t.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(Q);function T(s,e){var t=f.useRef();return(!t.current||!d(e,t.current.key))&&(t.current={key:e,value:s()}),t.current.value}function D(s,e,t){t===void 0&&(t=!1);var n=f.useContext(M()),o=f.useReducer(function(m){return m+1},0),c=o[0],r=o[1],i=e?l(l({},e),{query:s}):{query:s},u=f.useRef(),a=u.current||(u.current=new A({options:i,context:n,onNewData:function(){a.ssrInitiated()?r():Promise.resolve().then(function(){return u.current&&r()})}}));a.setOptions(i),a.context=n;var p={options:l(l({},i),{onError:void 0,onCompleted:void 0}),context:n,tick:c},v=T(function(){return t?a.executeLazy():a.execute()},p),h=t?v[1]:v;return f.useEffect(function(){return function(){return a.cleanup()}},[]),f.useEffect(function(){return a.afterExecute({lazy:t})},[h.loading,h.networkStatus,h.error,h.data]),v}function F(s,e){return D(s,e,!0)}function U(s,e){var t=f.useContext(M()),n=f.useState({called:!1,loading:!1}),o=n[0],c=n[1],r=e?l(l({},e),{mutation:s}):{mutation:s},i=f.useRef();function u(){return i.current||(i.current=new I({options:r,context:t,result:o,setResult:c})),i.current}var a=u();return a.setOptions(r),a.context=t,f.useEffect(function(){return a.afterExecute()}),a.execute(o)}function _(s,e){return D(s,e,!1)}function H(s){var e=s(),t=f.useState(e),n=t[1];return f.useEffect(function(){return s.onNextChange(n)},[e]),f.useEffect(function(){n(s())},[]),e}export{N as ApolloProvider,F as useLazyQuery,U as useMutation,_ as useQuery,H as useReactiveVar};
