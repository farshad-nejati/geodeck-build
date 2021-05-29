import{b as o,ar as _,aB as w,O as x,u as R,c4 as c,k as l,e0 as b}from"../../../../common/three.module-c0caa797.js";import{C as d}from"../../../../common/CopyShader-c9157536.js";import{S as u}from"../../../../common/ShaderPass-f0edac47.js";import{P as p}from"../../../../common/Pass-3cd995bc.js";class g extends p{constructor(e,s){super();this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,r){const i=e.getContext(),t=e.state;t.buffers.color.setMask(!1),t.buffers.depth.setMask(!1),t.buffers.color.setLocked(!0),t.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),t.buffers.stencil.setTest(!0),t.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),t.buffers.stencil.setFunc(i.ALWAYS,f,4294967295),t.buffers.stencil.setClear(h),t.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),t.buffers.color.setLocked(!1),t.buffers.depth.setLocked(!1),t.buffers.stencil.setLocked(!1),t.buffers.stencil.setFunc(i.EQUAL,1,4294967295),t.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),t.buffers.stencil.setLocked(!0)}}class E extends p{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class P{constructor(e,s){if(this.renderer=e,s===void 0){const r={minFilter:l,magFilter:l,format:b},i=e.getSize(new o);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,s=new _(this._width*this._pixelRatio,this._height*this._pixelRatio,r),s.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],d===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),u===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new u(d),this.clock=new w}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let r=!1;for(let i=0,t=this.passes.length;i<t;i++){const f=this.passes[i];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),f.needsSwap){if(r){const h=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}g!==void 0&&(f instanceof g?r=!0:f instanceof E&&(r=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new o);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let t=0;t<this.passes.length;t++)this.passes[t].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new x(-1,1,1,-1,0,1);const m=new R;m.setAttribute("position",new c([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new c([0,2,0,0,2,0],2));export{P as EffectComposer};