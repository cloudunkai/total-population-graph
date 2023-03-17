function p(i,t){for(var c=0;c<t.length;c++){const r=t[c];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in i)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(i,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var u={},h={get exports(){return u},set exports(i){u=i}};(function(i){(function(t){i.exports?(t.default=t,i.exports=t):t(typeof Highcharts<"u"?Highcharts:void 0)})(function(t){function c(r,e,n,l){r.hasOwnProperty(e)||(r[e]=l.apply(null,n),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:r[e]}})))}t=t?t._modules:{},c(t,"Extensions/CurrentDateIndication.js",[t["Core/Axis/Axis.js"],t["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],t["Core/Utilities.js"]],function(r,e,n){var l=n.addEvent,f=n.merge;n=n.wrap;var d={color:"#ccd6eb",width:2,label:{format:"%a, %b %d %Y, %H:%M",formatter:function(s,o){return this.axis.chart.time.dateFormat(o||"",s)},rotation:0,style:{fontSize:"10px"}}};l(r,"afterSetOptions",function(){var s=this.options,o=s.currentDateIndicator;o&&(o=typeof o=="object"?f(d,o):f(d),o.value=Date.now(),o.className="highcharts-current-date-indicator",s.plotLines||(s.plotLines=[]),s.plotLines.push(o))}),l(e,"render",function(){this.label&&this.label.attr({text:this.getLabelText(this.options.label)})}),n(e.prototype,"getLabelText",function(s,o){var a=this.options;return a&&a.className&&a.className.indexOf("highcharts-current-date-indicator")!==-1&&a.label&&typeof a.label.formatter=="function"?(a.value=Date.now(),a.label.formatter.call(this,a.value,a.label.format)):s.call(this,o)})}),c(t,"masters/modules/current-date-indicator.src.js",[],function(){})})})(h);const b=u,m=p({__proto__:null,default:b},[u]);export{m as c};
