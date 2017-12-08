import{EventDispatcher}from'../core/EventDispatcher.js';import{Texture}from'../textures/Texture.js';import{LinearFilter}from'../constants.js';import{Vector4}from'../math/Vector4.js';import{_Math}from'../math/Math.js';function WebGLRenderTarget(a,b,c){this.uuid=_Math.generateUUID(),this.width=a,this.height=b,this.scissor=new Vector4(0,0,a,b),this.scissorTest=!1,this.viewport=new Vector4(0,0,a,b),c=c||{},c.minFilter===void 0&&(c.minFilter=LinearFilter),this.texture=new Texture(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding),this.depthBuffer=!(c.depthBuffer!==void 0)||c.depthBuffer,this.stencilBuffer=!(c.stencilBuffer!==void 0)||c.stencilBuffer,this.depthTexture=c.depthTexture===void 0?null:c.depthTexture}Object.assign(WebGLRenderTarget.prototype,EventDispatcher.prototype,{isWebGLRenderTarget:!0,setSize:function(a,b){(this.width!==a||this.height!==b)&&(this.width=a,this.height=b,this.dispose()),this.viewport.set(0,0,a,b),this.scissor.set(0,0,a,b)},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.width=a.width,this.height=a.height,this.viewport.copy(a.viewport),this.texture=a.texture.clone(),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.depthTexture=a.depthTexture,this},dispose:function(){this.dispatchEvent({type:'dispose'})}});export{WebGLRenderTarget};