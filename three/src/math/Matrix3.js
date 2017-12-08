import{Vector3}from'./Vector3.js';function Matrix3(){this.elements=[1,0,0,0,1,0,0,0,1],0<arguments.length&&console.error('THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.')}Object.assign(Matrix3.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,i){var j=this.elements;return j[0]=a,j[1]=d,j[2]=g,j[3]=b,j[4]=e,j[5]=h,j[6]=c,j[7]=f,j[8]=i,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(a){var b=this.elements,c=a.elements;return b[0]=c[0],b[1]=c[1],b[2]=c[2],b[3]=c[3],b[4]=c[4],b[5]=c[5],b[6]=c[6],b[7]=c[7],b[8]=c[8],this},setFromMatrix4:function(a){var b=a.elements;return this.set(b[0],b[4],b[8],b[1],b[5],b[9],b[2],b[6],b[10]),this},applyToBufferAttribute:function(){var a=new Vector3;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(c,a){var b=c.elements,d=a.elements,e=this.elements,f=b[0],g=b[3],h=b[6],i=b[1],j=b[4],k=b[7],l=b[2],m=b[5],n=b[8],o=d[0],p=d[3],q=d[6],r=d[1],s=d[4],t=d[7],u=d[2],v=d[5],w=d[8];return e[0]=f*o+g*r+h*u,e[3]=f*p+g*s+h*v,e[6]=f*q+g*t+h*w,e[1]=i*o+j*r+k*u,e[4]=i*p+j*s+k*v,e[7]=i*q+j*t+k*w,e[2]=l*o+m*r+n*u,e[5]=l*p+m*s+n*v,e[8]=l*q+m*t+n*w,this},multiplyScalar:function(a){var b=this.elements;return b[0]*=a,b[3]*=a,b[6]*=a,b[1]*=a,b[4]*=a,b[7]*=a,b[2]*=a,b[5]*=a,b[8]*=a,this},determinant:function(){var j=this.elements,k=j[0],a=j[1],b=j[2],c=j[3],d=j[4],e=j[5],f=j[6],g=j[7],h=j[8];return k*d*h-k*e*g-a*c*h+a*e*f+b*c*g-b*d*f},getInverse:function(a,b){a&&a.isMatrix4&&console.error('THREE.Matrix3.getInverse no longer takes a Matrix4 argument.');var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],i=c[4],j=c[5],k=c[6],l=c[7],m=c[8],n=m*i-j*l,o=j*k-m*h,p=l*h-i*k,q=e*n+f*o+g*p;if(0==q){var r='THREE.Matrix3.getInverse(): can\'t invert matrix, determinant is 0';if(!0===b)throw new Error(r);else console.warn(r);return this.identity()}var s=1/q;return d[0]=n*s,d[1]=(g*l-m*f)*s,d[2]=(j*f-g*i)*s,d[3]=o*s,d[4]=(m*e-g*k)*s,d[5]=(g*h-j*e)*s,d[6]=p*s,d[7]=(f*k-l*e)*s,d[8]=(i*e-f*h)*s,this},transpose:function(){var a,b=this.elements;return a=b[1],b[1]=b[3],b[3]=a,a=b[2],b[2]=b[6],b[6]=a,a=b[5],b[5]=b[7],b[7]=a,this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;return a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8],this},equals:function(a){for(var b=this.elements,c=a.elements,d=0;9>d;d++)if(b[d]!==c[d])return!1;return!0},fromArray:function(a,b){b===void 0&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]),void 0===b&&(b=0);var c=this.elements;return a[b]=c[0],a[b+1]=c[1],a[b+2]=c[2],a[b+3]=c[3],a[b+4]=c[4],a[b+5]=c[5],a[b+6]=c[6],a[b+7]=c[7],a[b+8]=c[8],a}});export{Matrix3};