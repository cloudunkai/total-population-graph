function C(h,n){for(var f=0;f<n.length;f++){const p=n[f];if(typeof p!="string"&&!Array.isArray(p)){for(const r in p)if(r!=="default"&&!(r in h)){const o=Object.getOwnPropertyDescriptor(p,r);o&&Object.defineProperty(h,r,o.get?o:{enumerable:!0,get:()=>p[r]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var g={},k={get exports(){return g},set exports(h){g=h}};(function(h){(function(n){h.exports?(n.default=n,h.exports=n):n(typeof Highcharts<"u"?Highcharts:void 0)})(function(n){function f(p,r,o,c){p.hasOwnProperty(r)||(p[r]=c.apply(null,o),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:r,module:p[r]}})))}n=n?n._modules:{},f(n,"Series/HollowCandlestick/HollowCandlestickPoint.js",[n["Core/Series/SeriesRegistry.js"]],function(p){var r=this&&this.__extends||function(){var o=function(c,l){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var y in d)d.hasOwnProperty(y)&&(u[y]=d[y])},o(c,l)};return function(c,l){function u(){this.constructor=c}o(c,l),c.prototype=l===null?Object.create(l):(u.prototype=l.prototype,new u)}}();return function(o){function c(){var l=o!==null&&o.apply(this,arguments)||this;return l.series=void 0,l}return r(c,o),c.prototype.getClassName=function(){var l=o.prototype.getClassName.apply(this),u=this.series.hollowCandlestickData[this.index];return u.isBullish||u.trendDirection!=="up"||(l+="-bearish-up"),l},c}(p.seriesTypes.candlestick.prototype.pointClass)}),f(n,"Series/HollowCandlestick/HollowCandlestickSeries.js",[n["Series/HollowCandlestick/HollowCandlestickPoint.js"],n["Core/Series/SeriesRegistry.js"],n["Core/Utilities.js"],n["Core/Axis/Axis.js"]],function(p,r,o,c){var l=this&&this.__extends||function(){var a=function(s,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,e){i.__proto__=e}||function(i,e){for(var w in e)e.hasOwnProperty(w)&&(i[w]=e[w])},a(s,t)};return function(s,t){function i(){this.constructor=s}a(s,t),s.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),u=r.seriesTypes.candlestick,d=o.addEvent,y=o.merge;return o=function(a){function s(){var t=a!==null&&a.apply(this,arguments)||this;return t.data=void 0,t.hollowCandlestickData=[],t.options=void 0,t.points=void 0,t}return l(s,a),s.prototype.getPriceMovement=function(){var t=this.allGroupedData||this.yData,i=this.hollowCandlestickData;if(!i.length&&t&&t.length){i.push({isBullish:!0,trendDirection:"up"});for(var e=1;e<t.length;e++)i.push(this.isBullish(t[e],t[e-1]))}},s.prototype.getLineColor=function(t){return t==="up"?this.options.upColor||"#06b535":this.options.color||"#f21313"},s.prototype.getPointFill=function(t){return t.isBullish?"transparent":t.trendDirection==="up"?this.options.upColor||"#06b535":this.options.color||"#f21313"},s.prototype.init=function(){a.prototype.init.apply(this,arguments),this.hollowCandlestickData=[]},s.prototype.isBullish=function(t,i){return{isBullish:t[0]<=t[3],trendDirection:t[3]<i[3]?"down":"up"}},s.prototype.pointAttribs=function(t,i){var e=a.prototype.pointAttribs.call(this,t,i);return t=this.hollowCandlestickData[t.index],e.fill=this.getPointFill(t)||e.fill,e.stroke=this.getLineColor(t.trendDirection)||e.stroke,i&&(i=this.options.states[i],e.fill=i.color||e.fill,e.stroke=i.lineColor||e.stroke,e["stroke-width"]=i.lineWidth||e["stroke-width"]),e},s.defaultOptions=y(u.defaultOptions,{color:"#f21313",dataGrouping:{groupAll:!0,groupPixelWidth:10},lineColor:"#f21313",upColor:"#06b535",upLineColor:"#06b535"}),s}(u),d(o,"updatedData",function(){this.hollowCandlestickData.length&&(this.hollowCandlestickData.length=0)}),d(c,"postProcessData",function(){this.series.forEach(function(a){a.is("hollowcandlestick")&&a.getPriceMovement()})}),o.prototype.pointClass=p,r.registerSeriesType("hollowcandlestick",o),o}),f(n,"masters/modules/hollowcandlestick.src.js",[],function(){})})})(k);const v=g,_=C({__proto__:null,default:v},[g]);export{_ as h};
