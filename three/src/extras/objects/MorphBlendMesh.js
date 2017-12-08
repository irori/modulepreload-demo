import{Mesh}from'../../objects/Mesh.js';import{_Math}from'../../math/Math.js';function MorphBlendMesh(a,b){Mesh.call(this,a,b),this.animationsMap={},this.animationsList=[];var c=this.geometry.morphTargets.length,d='__default';this.createAnimation(d,0,c-1,c/1),this.setAnimationWeight(d,1)}MorphBlendMesh.prototype=Object.create(Mesh.prototype),MorphBlendMesh.prototype.constructor=MorphBlendMesh,MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){var e={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=e,this.animationsList.push(e)},MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b,c=/([a-z]+)_?(\d+)/i,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f],i=h.name.match(c);if(i&&1<i.length){var j=i[1];d[j]||(d[j]={start:Infinity,end:-Infinity});var k=d[j];f<k.start&&(k.start=f),f>k.end&&(k.end=f),b||(b=j)}}for(var j in d){var k=d[j];this.createAnimation(j,k.start,k.end,a)}this.firstAnimation=b},MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){var b=this.animationsMap[a];b&&(b.direction=1,b.directionBackwards=!1)},MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){var b=this.animationsMap[a];b&&(b.direction=-1,b.directionBackwards=!0)},MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)},MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)},MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)},MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)},MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0,c=this.animationsMap[a];return c&&(b=c.time),b},MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1,c=this.animationsMap[a];return c&&(b=c.duration),b},MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn('THREE.MorphBlendMesh: animation['+a+'] undefined in .playAnimation()')},MorphBlendMesh.prototype.stopAnimation=function(a){var b=this.animationsMap[a];b&&(b.active=!1)},MorphBlendMesh.prototype.update=function(a){for(var b,c=0,d=this.animationsList.length;c<d;c++)if(b=this.animationsList[c],b.active){var e=b.duration/b.length;b.time+=b.direction*a,b.mirroredLoop?(b.time>b.duration||0>b.time)&&(b.direction*=-1,b.time>b.duration&&(b.time=b.duration,b.directionBackwards=!0),0>b.time&&(b.time=0,b.directionBackwards=!1)):(b.time%=b.duration,0>b.time&&(b.time+=b.duration));var f=b.start+_Math.clamp(Math.floor(b.time/e),0,b.length-1),g=b.weight;f!==b.currentFrame&&(this.morphTargetInfluences[b.lastFrame]=0,this.morphTargetInfluences[b.currentFrame]=1*g,this.morphTargetInfluences[f]=0,b.lastFrame=b.currentFrame,b.currentFrame=f);var h=b.time%e/e;b.directionBackwards&&(h=1-h),b.currentFrame===b.lastFrame?this.morphTargetInfluences[b.currentFrame]=g:(this.morphTargetInfluences[b.currentFrame]=h*g,this.morphTargetInfluences[b.lastFrame]=(1-h)*g)}};export{MorphBlendMesh};