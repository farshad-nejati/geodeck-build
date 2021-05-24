import o,{Suspense as Q,useState as W,useEffect as v}from"../../../_snowpack/pkg/react.js";import"../../../_snowpack/pkg/lodash.js";import{useGLTF as X}from"../../../_snowpack/pkg/@react-three/drei.js";import*as f from"../../../_snowpack/pkg/three.js";import{useThree as I}from"../../../_snowpack/pkg/@react-three/fiber.js";import{useReactiveVar as k}from"../../../_snowpack/pkg/@apollo/client.js";import{toolbarActiveIDVar as R}from"../../apollo/cache.js";import Z from"./loader.js";import{button as U,buttonGroup as ee,folder as te,useControls as M}from"../../../_snowpack/pkg/leva.js";import{GridIcon as ne,EyeOpenIcon as ae,RotateCounterClockwiseIcon as oe,TransparencyGridIcon as re,TextIcon as O,OpacityIcon as S,DimensionsIcon as se,Half2Icon as ie}from"../../../_snowpack/pkg/@radix-ui/react-icons.js";import{getRandomInt as le,traverseMaterials as ce}from"./helpers.js";import me from"./object-component.js";import{active3dVariableVar as pe,GeometricObjectsVar as p}from"../../apollo/cache.js";const ue=["#173f5f","#20639b","#3caea3","#f6d55c","#ed553b"],de=[{name:"visible",label:o.createElement(ae,null)},{name:"position",label:o.createElement(se,null)},{name:"rotation",label:o.createElement(oe,null)}],fe=[{name:"color",label:o.createElement(ie,null)},{name:"transparent",label:o.createElement(re,null)},{name:"opacity",label:o.createElement(S,null),min:0,max:1}],Ve=[],ge=({modelUrl:w,projectId:T,onSave:D,onDelete:P,getScreenShot:$,cameraVar:G,setCameraVar:V})=>{const s=k(p),be=I(),B=k(R),y=k(pe),{gl:i,camera:A,scene:L,setDefaultCamera:Ee}=I();i.toneMapping=f.ACESFilmicToneMapping,i.toneMappingExposure=.6,i.outputEncoding=f.sRGBEncoding,i.preserveDrawingBuffer=!0;const{nodes:he,materials:j,animations:ve,scene:c,parser:F,userData:H}=X(w),_=H.gltfExtensions.KHR_materials_variants;v(()=>(document.addEventListener("onscreenshot",z),()=>{}),[]);const ke=t=>{t&&(console.log("Inline"),V({position:t?.position,rotation:t?.rotation,fov:t?.fov,far:t?.far}))},z=()=>{const t=1920,e=1080;i.setSize(t,e),i.setPixelRatio(16/9),i.render(L,A),console.log(i.getSize()),i.domElement.toBlob(m=>$(m),"image/png",1)};v(()=>{K(c,F,_,y)},[y]);const K=(t,e,m,b)=>{const E=m.variants.findIndex(n=>n.name.includes(b));t.traverse(async n=>{if(!n.isMesh||!n.userData.gltfExtensions)return;const a=n.userData.gltfExtensions.KHR_materials_variants;if(!a)return;n.userData.originalMaterial||(n.userData.originalMaterial=n.material);const r=a.mappings.find(u=>u.variants.includes(E));r?(n.material=await e.getDependency("material",r.material),e.assignFinalMaterial(n)):n.material=n.userData.originalMaterial})},J=M("Main Model",{name:{value:"Model",label:o.createElement(O,null)},opacity:{value:1,label:o.createElement(S,null),min:0,max:1},wireframe:{value:!1,label:o.createElement(ne,null),onChange:t=>{ce(c,e=>{e.wireframe=t})}},save:U(()=>{console.log("objects3"),console.log(s),D(s)})},[s]);j[""].opacity=J.opacity,j[""].transparent=!0,c.position.set(0,0,0),c.background=new f.Color(20);const d=new f.Box3().setFromObject(c),x=d.max.y-d.min.y,C=d.max.x-d.min.x,[g,N]=W(0),Y=s.reduce((t,e,m)=>{const b=de.reduce((n,a)=>{const r={value:e.mesh.object[a.name],...a,onChange:u=>{const h=s.map(l=>(l.id===e.id&&(l.mesh.object[a.name]=u),l));p(h)}};return{...n,[`${a.name}${e.id}`]:r}},{}),E=fe.reduce((n,a)=>{const r={value:e.mesh.materials[0][a.name],...a,onChange:u=>{const h=s.map(l=>(l.id===e.id&&(l.mesh.materials[0][a.name]=u),l));p(h)}};return{...n,[`${a.name}${e.id}`]:r}},{});return{...t,[`${e.type} ${e.id}`]:te({[`name${e.id}`]:{value:`${e.name}`,label:o.createElement(O,null),onChange:n=>{const a=s.map(r=>(r.id===e.id&&(r.name=n),r));p(a)}},...b,...E,[`actions,${e.id}`]:ee({label:" ",opts:{delete:()=>{const n=s.filter(r=>r.id===e.id)[0];P(n);const a=s.filter(r=>r.id!==e.id);p(a)}}})},{collapsed:!0})}},{}),we=M(Y,[s]),q=()=>{let t,e;switch(B){case 3:{e="Point",t={type:"SphereGeometry",heightSegments:50,widthSegments:50,radius:.2};break}case 4:{e="Line",t={type:"CylinderGeometry",height:x,radialSegments:50,radiusBottom:.02,radiusTop:.02};break}case 5:{e="Plane",t={type:"PlaneGeometry",height:x,width:C,widthSegments:C,heightSegments:1};break}}if(e){const m={mesh:{object:{rotation:[0,0,0],visible:!0,position:[0,0,0]},geometries:[t],materials:[{type:"MeshBasicMaterial",opacity:.5,transparent:!0,color:ue[le(5)],side:2}]},id:g,name:`${e} ${g}`,type:e,projectId:T,temp:!0};p([...s,m]),N(g+1),R(1)}};return v(()=>{console.log("rerender when object move")},[s,w]),o.createElement("group",{onClick:q},o.createElement(Q,{fallback:o.createElement(Z,null)},o.createElement("primitive",{object:c})),s.map(t=>o.createElement(me,{key:t?.id,...t})))};export default ge;
