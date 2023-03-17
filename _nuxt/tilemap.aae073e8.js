function O(_,s){for(var j=0;j<s.length;j++){const d=s[j];if(typeof d!="string"&&!Array.isArray(d)){for(const l in d)if(l!=="default"&&!(l in _)){const h=Object.getOwnPropertyDescriptor(d,l);h&&Object.defineProperty(_,l,h.get?h:{enumerable:!0,get:()=>d[l]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var w={},E={get exports(){return w},set exports(_){w=_}};(function(_){(function(s){_.exports?(s.default=s,_.exports=s):s(typeof Highcharts<"u"?Highcharts:void 0)})(function(s){function j(d,l,h,S){d.hasOwnProperty(l)||(d[l]=S.apply(null,h),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:l,module:d[l]}})))}s=s?s._modules:{},j(s,"Series/Tilemap/TilemapPoint.js",[s["Core/Axis/Color/ColorAxisComposition.js"],s["Core/Series/SeriesRegistry.js"],s["Core/Utilities.js"]],function(d,l,h){var S=this&&this.__extends||function(){var c=function(i,y){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},c(i,y)};return function(i,y){function e(){this.constructor=i}c(i,y),i.prototype=y===null?Object.create(y):(e.prototype=y.prototype,new e)}}(),M=l.series.prototype.pointClass;return h=h.extend,l=function(c){function i(){var y=c!==null&&c.apply(this,arguments)||this;return y.options=void 0,y.radius=void 0,y.series=void 0,y.tileEdges=void 0,y}return S(i,c),i.prototype.haloPath=function(){return this.series.tileShape.haloPath.apply(this,arguments)},i}(l.seriesTypes.heatmap.prototype.pointClass),h(l.prototype,{setState:M.prototype.setState,setVisible:d.pointSetVisible}),l}),j(s,"Series/Tilemap/TilemapShapes.js",[s["Core/Globals.js"],s["Core/Series/SeriesRegistry.js"],s["Core/Utilities.js"]],function(d,l,h){function S(e,t,r){return e=e.options,{xPad:(e.colsize||1)/-t,yPad:(e.rowsize||1)/-r}}l=l.seriesTypes;var M=l.heatmap,c=l.scatter,i=h.clamp,y=h.pick;return{hexagon:{alignDataLabel:c.prototype.alignDataLabel,getSeriesPadding:function(e){return S(e,3,2)},haloPath:function(e){if(!e)return[];var t=this.tileEdges;return[["M",t.x2-e,t.y1+e],["L",t.x3+e,t.y1+e],["L",t.x4+1.5*e,t.y2],["L",t.x3+e,t.y3-e],["L",t.x2-e,t.y3-e],["L",t.x1-1.5*e,t.y2],["Z"]]},translate:function(){var e=this.options,t=this.xAxis,r=this.yAxis,L=e.pointPadding||0,p=(e.colsize||1)/3,o=(e.rowsize||1)/2,a;this.generatePoints(),this.points.forEach(function(n){var f=i(Math.floor(t.len-t.translate(n.x-2*p,0,1,0,1)),-t.len,2*t.len),x=i(Math.floor(t.len-t.translate(n.x-p,0,1,0,1)),-t.len,2*t.len),A=i(Math.floor(t.len-t.translate(n.x+p,0,1,0,1)),-t.len,2*t.len),u=i(Math.floor(t.len-t.translate(n.x+2*p,0,1,0,1)),-t.len,2*t.len),m=i(Math.floor(r.translate(n.y-o,0,1,0,1)),-r.len,2*r.len),g=i(Math.floor(r.translate(n.y,0,1,0,1)),-r.len,2*r.len),v=i(Math.floor(r.translate(n.y+o,0,1,0,1)),-r.len,2*r.len),P=y(n.pointPadding,L),C=P*Math.abs(x-f)/Math.abs(v-g);C=t.reversed?-C:C;var T=t.reversed?-P:P;P=r.reversed?-P:P,n.x%2&&(a=a||Math.round(Math.abs(v-m)/2)*(r.reversed?-1:1),m+=a,g+=a,v+=a),n.plotX=n.clientX=(x+A)/2,n.plotY=g,f+=C+T,x+=T,A-=T,u-=C+T,m-=P,v+=P,n.tileEdges={x1:f,x2:x,x3:A,x4:u,y1:m,y2:g,y3:v},n.shapeType="path",n.shapeArgs={d:[["M",x,m],["L",A,m],["L",u,g],["L",A,v],["L",x,v],["L",f,g],["Z"]]}}),this.translateColors()}},diamond:{alignDataLabel:c.prototype.alignDataLabel,getSeriesPadding:function(e){return S(e,2,2)},haloPath:function(e){if(!e)return[];var t=this.tileEdges;return[["M",t.x2,t.y1+e],["L",t.x3+e,t.y2],["L",t.x2,t.y3-e],["L",t.x1-e,t.y2],["Z"]]},translate:function(){var e=this.options,t=this.xAxis,r=this.yAxis,L=e.pointPadding||0,p=e.colsize||1,o=(e.rowsize||1)/2,a;this.generatePoints(),this.points.forEach(function(n){var f=i(Math.round(t.len-t.translate(n.x-p,0,1,0,0)),-t.len,2*t.len),x=i(Math.round(t.len-t.translate(n.x,0,1,0,0)),-t.len,2*t.len),A=i(Math.round(t.len-t.translate(n.x+p,0,1,0,0)),-t.len,2*t.len),u=i(Math.round(r.translate(n.y-o,0,1,0,0)),-r.len,2*r.len),m=i(Math.round(r.translate(n.y,0,1,0,0)),-r.len,2*r.len),g=i(Math.round(r.translate(n.y+o,0,1,0,0)),-r.len,2*r.len),v=y(n.pointPadding,L),P=v*Math.abs(x-f)/Math.abs(g-m);P=t.reversed?-P:P,v=r.reversed?-v:v,n.x%2&&(a=Math.abs(g-u)/2*(r.reversed?-1:1),u+=a,m+=a,g+=a),n.plotX=n.clientX=x,n.plotY=m,f+=P,A-=P,u-=v,g+=v,n.tileEdges={x1:f,x2:x,x3:A,y1:u,y2:m,y3:g},n.shapeType="path",n.shapeArgs={d:[["M",x,u],["L",A,m],["L",x,g],["L",f,m],["Z"]]}}),this.translateColors()}},circle:{alignDataLabel:c.prototype.alignDataLabel,getSeriesPadding:function(e){return S(e,2,2)},haloPath:function(e){return c.prototype.pointClass.prototype.haloPath.call(this,e+(e&&this.radius))},translate:function(){var e=this.options,t=this.xAxis,r=this.yAxis,L=e.pointPadding||0,p=(e.rowsize||1)/2,o=e.colsize||1,a,n,f,x,A=!1;this.generatePoints(),this.points.forEach(function(u){var m=i(Math.round(t.len-t.translate(u.x,0,1,0,0)),-t.len,2*t.len),g=i(Math.round(r.translate(u.y,0,1,0,0)),-r.len,2*r.len),v=L,P=!1;typeof u.pointPadding<"u"&&(v=u.pointPadding,A=P=!0),(!x||A)&&(a=Math.abs(i(Math.floor(t.len-t.translate(u.x+o,0,1,0,0)),-t.len,2*t.len)-m),n=Math.abs(i(Math.floor(r.translate(u.y+p,0,1,0,0)),-r.len,2*r.len)-g),f=Math.floor(Math.sqrt(a*a+n*n)/2),x=Math.min(a,f,n)-v,A&&!P&&(A=!1)),u.x%2&&(g+=n*(r.reversed?-1:1)),u.plotX=u.clientX=m,u.plotY=g,u.radius=x,u.shapeType="circle",u.shapeArgs={x:m,y:g,r:x}}),this.translateColors()}},square:{alignDataLabel:M.prototype.alignDataLabel,translate:M.prototype.translate,getSeriesPadding:d.noop,haloPath:M.prototype.pointClass.prototype.haloPath}}}),j(s,"Series/Tilemap/TilemapComposition.js",[s["Core/Axis/Axis.js"],s["Core/Utilities.js"]],function(d,l){l=l.addEvent,l(d,"afterSetAxisTranslation",function(){if(!this.recomputingForTilemap&&this.coll!=="colorAxis"){var h=this,S=h.series.map(function(c){return c.getSeriesPixelPadding&&c.getSeriesPixelPadding(h)}).reduce(function(c,i){return(c&&c.padding)>(i&&i.padding)?c:i},void 0)||{padding:0,axisLengthFactor:1},M=Math.round(S.padding*S.axisLengthFactor);S.padding&&(h.len-=M,h.recomputingForTilemap=!0,h.setAxisTranslation(),delete h.recomputingForTilemap,h.minPixelPadding+=S.padding,h.len+=M)}})}),j(s,"Series/Tilemap/TilemapSeries.js",[s["Core/Globals.js"],s["Core/Series/SeriesRegistry.js"],s["Series/Tilemap/TilemapPoint.js"],s["Series/Tilemap/TilemapShapes.js"],s["Core/Utilities.js"]],function(d,l,h,S,M){var c=this&&this.__extends||function(){var L=function(p,o){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var f in n)n.hasOwnProperty(f)&&(a[f]=n[f])},L(p,o)};return function(p,o){function a(){this.constructor=p}L(p,o),p.prototype=o===null?Object.create(o):(a.prototype=o.prototype,new a)}}();d=d.noop;var i=l.seriesTypes,y=i.column,e=i.heatmap;i=i.scatter;var t=M.extend,r=M.merge;return M=function(L){function p(){var o=L!==null&&L.apply(this,arguments)||this;return o.data=void 0,o.options=void 0,o.points=void 0,o.tileShape=void 0,o}return c(p,L),p.prototype.alignDataLabel=function(){return this.tileShape.alignDataLabel.apply(this,Array.prototype.slice.call(arguments))},p.prototype.drawPoints=function(){var o=this;y.prototype.drawPoints.call(this),this.points.forEach(function(a){a.graphic&&a.graphic[o.chart.styledMode?"css":"animate"](o.colorAttribs(a))})},p.prototype.getSeriesPixelPadding=function(o){var a=o.isXAxis,n=this.tileShape.getSeriesPadding(this);if(!n)return{padding:0,axisLengthFactor:1};var f=Math.round(o.translate(a?2*n.xPad:n.yPad,0,1,0,1));return o=Math.round(o.translate(a?n.xPad:0,0,1,0,1)),{padding:Math.abs(f-o)||0,axisLengthFactor:a?2:1.1}},p.prototype.setOptions=function(){var o=L.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));return this.tileShape=S[o.tileShape],o},p.prototype.translate=function(){return this.tileShape.translate.apply(this,Array.prototype.slice.call(arguments))},p.defaultOptions=r(e.defaultOptions,{marker:null,states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"}),p}(e),t(M.prototype,{getSymbol:d,markerAttribs:i.prototype.markerAttribs,pointAttribs:y.prototype.pointAttribs,pointClass:h}),l.registerSeriesType("tilemap",M),M}),j(s,"masters/modules/tilemap.src.js",[],function(){})})})(E);const z=w,D=O({__proto__:null,default:z},[w]);export{D as t};