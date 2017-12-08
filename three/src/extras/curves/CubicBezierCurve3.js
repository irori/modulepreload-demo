import{Curve}from'../core/Curve.js';import{CubicBezier}from'../core/Interpolations.js';import{Vector3}from'../../math/Vector3.js';function CubicBezierCurve3(a,b,c,d){Curve.call(this),this.v0=a,this.v1=b,this.v2=c,this.v3=d}CubicBezierCurve3.prototype=Object.create(Curve.prototype),CubicBezierCurve3.prototype.constructor=CubicBezierCurve3,CubicBezierCurve3.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new Vector3(CubicBezier(a,b.x,c.x,d.x,e.x),CubicBezier(a,b.y,c.y,d.y,e.y),CubicBezier(a,b.z,c.z,d.z,e.z))};export{CubicBezierCurve3};