import A from"../../_snowpack/pkg/lodash.js";import*as l from"./geo-object.js";import*as x from"./geo-variable.js";export const create=t=>{let e=!1;const r=t?.map((n,c)=>{const{id:a,name:p,updatedAt:u}=n;let o=!1;const s=l.getVariableObjects(n?.variables),v=x.getFirstObjects(s[0]),{points:i,lines:d}=l.getDevided(v),f=s?s[0]?.name:"",b=i?.length>0?i[0]?.id:null,g=d?.length>0?d[0]?.id:null;return e||(o=!!s.length,e=o),{id:a,name:p,updatedAt:u,variables:s,isActive:o,activeVariable:f,pointId:b,lineId:g,isPoint:!0,data:n}});return r?.length?getAsObject(r):{}},getAsArray=t=>Object.values(t)?.reverse(),getAsObject=t=>A.mapKeys(t,"id"),findActive=t=>{const r=getAsArray(t).find(n=>n.isActive===!0);return r||{}},findById=(t,e)=>t[e]?t[e]:{},findByIndex=(t,e)=>{const r=getAsArray(t);return r.length&&r[e]?r[e]:{}},findSelected=t=>getAsArray(t).filter(r=>r.isActive===!0),addActive=(t,e,r)=>({...t,[e]:{...t[e],isActive:!0,activeVariable:r}}),changeActive=(t,e,r)=>{const c=getAsArray(t)?.map(a=>a.id===e?{...a,isActive:!0,activeVariable:r}:{...a,isActive:!1,activeVariable:""});return getAsObject(c)},updateList=(t,e)=>({...t,[e.id]:e}),update=(t,e)=>({...t,...e});
