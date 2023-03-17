function L(o,r){for(var n=0;n<r.length;n++){const i=r[n];if(typeof i!="string"&&!Array.isArray(i)){for(const t in i)if(t!=="default"&&!(t in o)){const c=Object.getOwnPropertyDescriptor(i,t);c&&Object.defineProperty(o,t,c.get?c:{enumerable:!0,get:()=>i[t]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var l={},w={get exports(){return l},set exports(o){l=o}};(function(o){(function(r){o.exports?(r.default=r,o.exports=r):r(typeof Highcharts<"u"?Highcharts:void 0)})(function(r){function n(i,t,c,h){i.hasOwnProperty(t)||(i[t]=h.apply(null,c),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:i[t]}})))}r=r?r._modules:{},n(r,"Extensions/PriceIndication.js",[r["Core/Series/Series.js"],r["Core/Utilities.js"]],function(i,t){var c=t.addEvent,h=t.isArray,x=t.merge;c(i,"afterRender",function(){var e=this.options,p=e.pointRange,d=e.lastVisiblePrice,a=e.lastPrice;if((d||a)&&e.id!=="highcharts-navigator-series"){var g=this.xAxis,s=this.yAxis,v=s.crosshair,m=s.cross,j=s.crossLabel,u=this.points,f=u.length,y=this.xData[this.xData.length-1],P=this.yData[this.yData.length-1];a&&a.enabled&&(s.crosshair=s.options.crosshair=e.lastPrice,!this.chart.styledMode&&s.crosshair&&s.options.crosshair&&e.lastPrice&&(s.crosshair.color=s.options.crosshair.color=e.lastPrice.color||this.color),s.cross=this.lastPrice,a=h(P)?P[3]:P,s.drawCrosshair(null,{x:y,y:a,plotX:g.toPixels(y,!0),plotY:s.toPixels(a,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=a)),d&&d.enabled&&0<f&&(p=u[f-1].x===y||p===null?1:2,s.crosshair=s.options.crosshair=x({color:"transparent"},e.lastVisiblePrice),s.cross=this.lastVisiblePrice,e=u[f-p],this.crossLabel&&this.crossLabel.destroy(),delete s.crossLabel,s.drawCrosshair(null,e),s.cross&&(this.lastVisiblePrice=s.cross,typeof e.y=="number"&&(this.lastVisiblePrice.y=e.y)),this.crossLabel=s.crossLabel),s.crosshair=s.options.crosshair=v,s.cross=m,s.crossLabel=j}})}),n(r,"masters/modules/price-indicator.src.js",[],function(){})})})(w);const A=l,C=L({__proto__:null,default:A},[l]);export{C as p};