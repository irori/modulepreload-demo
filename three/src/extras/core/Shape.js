import{PathPrototype}from'./PathPrototype.js';import{Path}from'./Path.js';function Shape(){Path.apply(this,arguments),this.holes=[]}Shape.prototype=Object.assign(Object.create(PathPrototype),{constructor:Shape,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractAllPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},extractPoints:function(a){return this.extractAllPoints(a)}});export{Shape};