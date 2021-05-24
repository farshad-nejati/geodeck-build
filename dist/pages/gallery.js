import t,{useEffect as f,useState as v}from"https://cdn.skypack.dev/react";import C from"https://cdn.skypack.dev/lodash";import{useLazyQuery as D,useMutation as O,useReactiveVar as u}from"https://cdn.skypack.dev/@apollo/client";import{useHistory as V}from"https://cdn.skypack.dev/react-router";import{Empty as N,Image as R}from"https://cdn.skypack.dev/antd";import x from"../components/gallery-page/gallery-card.js";import T from"../components/gallery-page/gallery-sidebar.js";import{filesOfGalleryVar as n,activeProjectVar as q}from"../apollo/cache.js";import{GET_FILES_OF_GALLERY as E}from"../apollo/queries/index.js";import{DELETE_FILE_OF_GALLERY as H}from"../apollo/mutations/index.js";import Q from"../components/spinner/index.js";import Y from"../components/gallery-page/gallery-preview.js";import{galleryPreviewImageVar as c}from"../apollo/cache.js";import z from"../components/gallery-page/gallery-sort.js";const m=[{key:"all",filter:"image",title:"All"},{key:"image",filter:"image",title:"Images"},{key:"video",filter:"video",title:"Videos"}],d=[{key:"id",label:"Default",value:"id",order:"DESC"},{key:"title",label:"Title",value:"title",order:"ASC"},{key:"updatedAt",label:"Date",value:"updatedAt",order:"DESC"}],B=M=>{const J=V(),i=q(),l=u(n),[a,k]=v(d[0]),[s,_]=v(m[0]),p=u(c),h=i?.gallery?.id,[I]=O(H,{refetchQueries:[{query:E,variables:{galleryId:i?.gallery?.id,fieldSort:a.value,order:a.order}}]}),[y,{loading:S,error:G}]=D(E,{fetchPolicy:"no-cache",onCompleted:e=>{n(e?.filesOfGallery)}});if(f(()=>{y({variables:{galleryId:i?.gallery?.id,fieldSort:a.value,order:a.order}})},[]),f(()=>{y({variables:{galleryId:i?.gallery?.id,fieldSort:a.value,order:a.order,type:s.filter}})},[a,s]),G)return t.createElement("p",null,"Error :(");const F=e=>{const r=d.find(o=>o.value===e);k(r)},j=e=>{const r=m.find(o=>o.key===e);_(r)},b=e=>{const r=l?.items.filter(g=>g.id!==e),o={...l,items:r,total:l.total-1};I({variables:{galleryId:h,fileId:e}}),n(o)},A=l?.items?.map(e=>C.pick(e,["title","url","varying"])),L=e=>{const o=l?.items?.find((g,w)=>w===e);c({index:e,...o})},P=()=>t.createElement(t.Fragment,null,t.createElement(T,{filters:m,activeFilter:s,onFilter:j}),t.createElement("div",{className:"gallery__contents__container"},t.createElement(z,{sorts:d,activeSort:a,onSort:F}),S?t.createElement(Q,null):l?.total===0?t.createElement(N,null):t.createElement("div",{className:"gallery__cards grid__gallery"},t.createElement(R.PreviewGroup,null,l?.items?.map((e,r)=>t.createElement(x,{onClickImage:()=>c({index:r,...e}),key:r,...e,items:A}))))));return t.createElement("div",{className:"gallery"},t.createElement("div",{className:"gallery__contents"},p?t.createElement(Y,{itemslength:l?.items?.length,item:p,onDelete:b,onChangeImage:L}):P()))};export default t.memo(B);