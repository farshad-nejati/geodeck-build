import{C as s}from"../../../../common/three.module-c0caa797.js";import{P as r}from"../../../../common/Pass-3cd995bc.js";class h extends r{constructor(e,o,l,t,a){super();this.scene=e,this.camera=o,this.overrideMaterial=l,this.clearColor=t,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new s}render(e,o,l){const t=e.autoClear;e.autoClear=!1;let a,i;this.overrideMaterial!==void 0&&(i=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:l),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=i),e.autoClear=t}}export{h as RenderPass};
