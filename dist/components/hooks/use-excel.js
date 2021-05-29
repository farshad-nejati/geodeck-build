import{useState as c}from"../../../_snowpack/pkg/react.js";export const useExcel=e=>{const[t,s]=c([]);return useEffect(()=>(XLSXHelper.readExcel(e).then(r=>{s(r)}),()=>{})),t};
