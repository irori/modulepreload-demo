import{Color}from'../math/Color.js';function Fog(a,b,c){this.name='',this.color=new Color(a),this.near=b===void 0?1:b,this.far=c===void 0?1e3:c}Fog.prototype.isFog=!0,Fog.prototype.clone=function(){return new Fog(this.color.getHex(),this.near,this.far)},Fog.prototype.toJSON=function(){return{type:'Fog',color:this.color.getHex(),near:this.near,far:this.far}};export{Fog};