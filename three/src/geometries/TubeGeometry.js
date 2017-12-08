import{Geometry}from'../core/Geometry.js';import{BufferGeometry}from'../core/BufferGeometry.js';import{Float32BufferAttribute}from'../core/BufferAttribute.js';import{Vector2}from'../math/Vector2.js';import{Vector3}from'../math/Vector3.js';function TubeGeometry(a,b,c,d,e,f){Geometry.call(this),this.type='TubeGeometry',this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e},f!==void 0&&console.warn('THREE.TubeGeometry: taper has been removed.');var g=new TubeBufferGeometry(a,b,c,d,e);this.tangents=g.tangents,this.normals=g.normals,this.binormals=g.binormals,this.fromBufferGeometry(g),this.mergeVertices()}TubeGeometry.prototype=Object.create(Geometry.prototype),TubeGeometry.prototype.constructor=TubeGeometry;function TubeBufferGeometry(a,e,b,f,c){function d(c){var d=a.getPointAt(c/e),g=k.normals[c],h=k.binormals[c];for(i=0;i<=f;i++){var l=2*(i/f*Math.PI),n=Math.sin(l),q=-Math.cos(l);m.x=q*g.x+n*h.x,m.y=q*g.y+n*h.y,m.z=q*g.z+n*h.z,m.normalize(),p.push(m.x,m.y,m.z),j.x=d.x+b*m.x,j.y=d.y+b*m.y,j.z=d.z+b*m.z,o.push(j.x,j.y,j.z)}}function g(){for(i=1;i<=e;i++)for(l=1;l<=f;l++){var g=(f+1)*(i-1)+(l-1),a=(f+1)*i+(l-1),b=(f+1)*i+l,c=(f+1)*(i-1)+l;r.push(g,a,c),r.push(a,b,c)}}function h(){for(l=0;l<=e;l++)for(i=0;i<=f;i++)n.x=l/e,n.y=i/f,q.push(n.x,n.y)}BufferGeometry.call(this),this.type='TubeBufferGeometry',this.parameters={path:a,tubularSegments:e,radius:b,radialSegments:f,closed:c},e=e||64,b=b||1,f=f||8,c=c||!1;var k=a.computeFrenetFrames(e,c);this.tangents=k.tangents,this.normals=k.normals,this.binormals=k.binormals;var l,i,j=new Vector3,m=new Vector3,n=new Vector2,o=[],p=[],q=[],r=[];(function(){for(l=0;l<e;l++)d(l);d(!1===c?e:0),h(),g()})(),this.setIndex(r),this.addAttribute('position',new Float32BufferAttribute(o,3)),this.addAttribute('normal',new Float32BufferAttribute(p,3)),this.addAttribute('uv',new Float32BufferAttribute(q,2))}TubeBufferGeometry.prototype=Object.create(BufferGeometry.prototype),TubeBufferGeometry.prototype.constructor=TubeBufferGeometry;export{TubeGeometry,TubeBufferGeometry};