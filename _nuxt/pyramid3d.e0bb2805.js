function g(i,t){for(var u=0;u<t.length;u++){const r=t[u];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in i)){const s=Object.getOwnPropertyDescriptor(r,e);s&&Object.defineProperty(i,e,s.get?s:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var c={},h={get exports(){return c},set exports(i){c=i}};(function(i){(function(t){i.exports?(t.default=t,i.exports=t):t(typeof Highcharts<"u"?Highcharts:void 0)})(function(t){function u(r,e,s,a){r.hasOwnProperty(e)||(r[e]=a.apply(null,s),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:r[e]}})))}t=t?t._modules:{},u(t,"Series/Pyramid3D/Pyramid3DSeries.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(r,e){var s=this&&this.__extends||function(){var p=function(o,n){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var l in f)f.hasOwnProperty(l)&&(d[l]=f[l])},p(o,n)};return function(o,n){function d(){this.constructor=o}p(o,n),o.prototype=n===null?Object.create(n):(d.prototype=n.prototype,new d)}}(),a=r.seriesTypes.funnel3d,y=e.merge;return e=function(p){function o(){var n=p!==null&&p.apply(this,arguments)||this;return n.data=void 0,n.options=void 0,n.points=void 0,n}return s(o,p),o.defaultOptions=y(a.defaultOptions,{reversed:!0,neckHeight:0,neckWidth:0,dataLabels:{verticalAlign:"top"}}),o}(a),r.registerSeriesType("pyramid3d",e),e}),u(t,"masters/modules/pyramid3d.src.js",[],function(){})})})(h);const m=c,v=g({__proto__:null,default:m},[c]);export{v as p};