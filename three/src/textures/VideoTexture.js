import{Texture}from'./Texture.js';function VideoTexture(a,b,c,d,e,f,g,h,i){function j(){requestAnimationFrame(j),a.readyState>=a.HAVE_CURRENT_DATA&&(k.needsUpdate=!0)}Texture.call(this,a,b,c,d,e,f,g,h,i),this.generateMipmaps=!1;var k=this;j()}VideoTexture.prototype=Object.create(Texture.prototype),VideoTexture.prototype.constructor=VideoTexture;export{VideoTexture};