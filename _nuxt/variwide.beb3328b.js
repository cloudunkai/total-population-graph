function S(m,a){for(var A=0;A<a.length;A++){const p=a[A];if(typeof p!="string"&&!Array.isArray(p)){for(const c in p)if(c!=="default"&&!(c in m)){const g=Object.getOwnPropertyDescriptor(p,c);g&&Object.defineProperty(m,c,g.get?g:{enumerable:!0,get:()=>p[c]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var O={},k={get exports(){return O},set exports(m){O=m}};(function(m){(function(a){m.exports?(a.default=a,m.exports=a):a(typeof Highcharts<"u"?Highcharts:void 0)})(function(a){function A(p,c,g,d){p.hasOwnProperty(c)||(p[c]=d.apply(null,g),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:p[c]}})))}a=a?a._modules:{},A(a,"Series/Variwide/VariwideComposition.js",[a["Core/Utilities.js"]],function(p){function c(i){this.variwide&&this.cross&&this.cross.attr("stroke-width",i.point&&i.point.crosshairWidth)}function g(){var i=this;!this.horiz&&this.variwide&&this.chart.labelCollectors.push(function(){return i.tickPositions.filter(function(s){return i.ticks[s].label}).map(function(s,t){return s=i.ticks[s].label,s.labelrank=i.zData[t],s})})}function d(i){var s=this.axis,t=s.horiz?"x":"y";s.variwide&&(this[t+"Orig"]=i.pos[t],this.postTranslate(i.pos,t,this.pos))}function x(i,s,t){var n=this.axis,o=i[s]-n.pos;n.horiz||(o=n.len-o),o=n.series[0].postTranslate(t,o),n.horiz||(o=n.len-o),i[s]=n.pos+o}function f(i,s,t,n,o,e,r,l){var h=Array.prototype.slice.call(arguments,1),v=o?"x":"y";return this.axis.variwide&&typeof this[v+"Orig"]=="number"&&(h[o?0:1]=this[v+"Orig"]),h=i.apply(this,h),this.axis.variwide&&this.axis.categories&&this.postTranslate(h,v,this.pos),h}var u=p.addEvent,w=p.wrap,y=[];return{compose:function(i,s){y.indexOf(i)===-1&&(y.push(i),u(i,"afterDrawCrosshair",c),u(i,"afterRender",g)),y.indexOf(s)===-1&&(y.push(s),u(s,"afterGetPosition",d),i=s.prototype,i.postTranslate=x,w(i,"getLabelPosition",f))}}}),A(a,"Series/Variwide/VariwidePoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(p,c){var g=this&&this.__extends||function(){var x=function(f,u){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,y){w.__proto__=y}||function(w,y){for(var i in y)y.hasOwnProperty(i)&&(w[i]=y[i])},x(f,u)};return function(f,u){function w(){this.constructor=f}x(f,u),f.prototype=u===null?Object.create(u):(w.prototype=u.prototype,new w)}}(),d=c.isNumber;return function(x){function f(){var u=x!==null&&x.apply(this,arguments)||this;return u.crosshairWidth=void 0,u.options=void 0,u.series=void 0,u}return g(f,x),f.prototype.isValid=function(){return d(this.y)&&d(this.z)},f}(p.seriesTypes.column.prototype.pointClass)}),A(a,"Series/Variwide/VariwideSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Variwide/VariwideComposition.js"],a["Series/Variwide/VariwidePoint.js"],a["Core/Utilities.js"]],function(p,c,g,d){var x=this&&this.__extends||function(){var i=function(s,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var e in o)o.hasOwnProperty(e)&&(n[e]=o[e])},i(s,t)};return function(s,t){function n(){this.constructor=s}i(s,t),s.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),f=p.seriesTypes.column,u=d.extend,w=d.merge,y=d.pick;return d=function(i){function s(){var t=i!==null&&i.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t.relZ=void 0,t.totalZ=void 0,t.zData=void 0,t}return x(s,i),s.prototype.processData=function(t){this.totalZ=0,this.relZ=[],p.seriesTypes.column.prototype.processData.call(this,t),(this.xAxis.reversed?this.zData.slice().reverse():this.zData).forEach(function(n,o){this.relZ[o]=this.totalZ,this.totalZ+=n},this),this.xAxis.categories&&(this.xAxis.variwide=!0,this.xAxis.zData=this.zData)},s.prototype.postTranslate=function(t,n,o){var e=this.xAxis,r=this.relZ;t=e.reversed?r.length-t:t;var l=e.reversed?-1:1,h=e.toPixels(e.reversed?(e.dataMax||0)+e.pointRange:e.dataMin||0),v=e.toPixels(e.reversed?e.dataMin||0:(e.dataMax||0)+e.pointRange),_=Math.abs(v-h),P=this.totalZ;e=this.chart.inverted?v-(this.chart.plotTop-l*e.minPixelPadding):h-this.chart.plotLeft-l*e.minPixelPadding,h=t/r.length*_,v=(t+l)/r.length*_;var j=y(r[t],P)/P*_;return r=y(r[t+l],P)/P*_,o&&(o.crosshairWidth=r-j),e+j+(n-(e+h))*(r-j)/(v-h)},s.prototype.translate=function(){var t=this.options.crisp,n=this.xAxis;this.options.crisp=!1,p.seriesTypes.column.prototype.translate.call(this),this.options.crisp=t;var o=this.chart.inverted,e=this.borderWidth%2/2;this.points.forEach(function(r,l){if(n.variwide){var h=this.postTranslate(l,r.shapeArgs.x,r);l=this.postTranslate(l,r.shapeArgs.x+r.shapeArgs.width)}else h=r.plotX,l=n.translate(r.x+r.z,0,0,0,1);this.options.crisp&&(h=Math.round(h)-e,l=Math.round(l)-e),r.shapeArgs.x=h,r.shapeArgs.width=Math.max(l-h,1),r.plotX=(h+l)/2,o?r.tooltipPos[1]=n.len-r.shapeArgs.x-r.shapeArgs.width/2:r.tooltipPos[0]=r.shapeArgs.x+r.shapeArgs.width/2},this),this.options.stacking&&this.correctStackLabels()},s.prototype.correctStackLabels=function(){for(var t=this.options,n=this.yAxis,o,e,r,l=0,h=this.points;l<h.length;l++){var v=h[l];r=v.x,e=v.shapeArgs.width,(o=n.stacking.stacks[(this.negStacks&&v.y<(t.startFromThreshold?0:t.threshold)?"-":"")+this.stackKey])&&(o=o[r])&&!v.isNull&&o.setOffset(this.chart.plotLeft-(e/2||0),e||0,void 0,void 0,v.plotX,this.xAxis)}},s.compose=c.compose,s.defaultOptions=w(f.defaultOptions,{pointPadding:0,groupPadding:0}),s}(f),u(d.prototype,{irregularWidths:!0,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],pointClass:g}),p.registerSeriesType("variwide",d),d}),A(a,"masters/modules/variwide.src.js",[a["Core/Globals.js"],a["Series/Variwide/VariwideSeries.js"]],function(p,c){c.compose(p.Axis,p.Tick)})})})(k);const T=O,z=S({__proto__:null,default:T},[O]);export{z as v};
