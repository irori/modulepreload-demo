import{CylinderGeometry}from'./CylinderGeometry.js';import{CylinderBufferGeometry}from'./CylinderGeometry.js';function ConeGeometry(a,b,c,d,e,f,g){CylinderGeometry.call(this,0,a,b,c,d,e,f,g),this.type='ConeGeometry',this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}ConeGeometry.prototype=Object.create(CylinderGeometry.prototype),ConeGeometry.prototype.constructor=ConeGeometry;function ConeBufferGeometry(a,b,c,d,e,f,g){CylinderBufferGeometry.call(this,0,a,b,c,d,e,f,g),this.type='ConeBufferGeometry',this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}ConeBufferGeometry.prototype=Object.create(CylinderBufferGeometry.prototype),ConeBufferGeometry.prototype.constructor=ConeBufferGeometry;export{ConeGeometry,ConeBufferGeometry};