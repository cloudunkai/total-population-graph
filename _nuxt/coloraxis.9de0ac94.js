function W(I,d){for(var L=0;L<d.length;L++){const y=d[L];if(typeof y!="string"&&!Array.isArray(y)){for(const f in y)if(f!=="default"&&!(f in I)){const g=Object.getOwnPropertyDescriptor(y,f);g&&Object.defineProperty(I,f,g.get?g:{enumerable:!0,get:()=>y[f]})}}}return Object.freeze(Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}))}var M={},H={get exports(){return M},set exports(I){M=I}};(function(I){(function(d){I.exports?(d.default=d,I.exports=d):d(typeof Highcharts<"u"?Highcharts:void 0)})(function(d){function L(y,f,g,C){y.hasOwnProperty(f)||(y[f]=C.apply(null,g),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:f,module:y[f]}})))}d=d?d._modules:{},L(d,"Core/Axis/Color/ColorAxisComposition.js",[d["Core/Color/Color.js"],d["Core/Utilities.js"]],function(y,f){var g=y.parse,C=f.addEvent,S=f.extend,z=f.merge,T=f.pick,O=f.splat,P;return function(w){function j(){var s=this,r=this.options;this.colorAxis=[],r.colorAxis&&(r.colorAxis=O(r.colorAxis),r.colorAxis.forEach(function(a,h){a.index=h,new c(s,a)}))}function V(s){var r=this,a=function(x){x=s.allItems.indexOf(x),x!==-1&&(r.destroyItem(s.allItems[x]),s.allItems.splice(x,1))},h=[],p,u;for((this.chart.colorAxis||[]).forEach(function(x){(p=x.options)&&p.showInLegend&&(p.dataClasses&&p.visible?h=h.concat(x.getDataClassLegendSymbols()):p.visible&&h.push(x),x.series.forEach(function(A){(!A.options.showInLegend||p.dataClasses)&&(A.options.legendType==="point"?A.points.forEach(function(b){a(b)}):a(A))}))}),u=h.length;u--;)s.allItems.unshift(h[u])}function _(s){s.visible&&s.item.legendColor&&s.item.legendItem.symbol.attr({fill:s.item.legendColor})}function D(){var s=this.chart.colorAxis;s&&s.forEach(function(r,a,h){r.update({},h)})}function v(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function m(){var s=this.axisTypes;s?s.indexOf("colorAxis")===-1&&s.push("colorAxis"):this.axisTypes=["colorAxis"]}function l(s){var r=this,a=s?"show":"hide";r.visible=r.options.visible=!!s,["graphic","dataLabel"].forEach(function(h){r[h]&&r[h][a]()}),this.series.buildKDTree()}function e(){var s=this,r=this.options.nullColor,a=this.colorAxis,h=this.colorKey;(this.data.length?this.data:this.points).forEach(function(p){var u=p.getNestedProperty(h);(u=p.options.color||(p.isNull||p.value===null?r:a&&typeof u<"u"?a.toColor(u,p):p.color||s.color))&&p.color!==u&&(p.color=u,s.options.legendType==="point"&&p.legendItem&&p.legendItem.label&&s.chart.legend.colorizeItem(p,p.visible))})}function t(s){var r=s.prototype.createAxis;s.prototype.createAxis=function(a,h){if(a!=="colorAxis")return r.apply(this,arguments);var p=new c(this,z(h.axis,{index:this[a].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach(function(u){u.series=[]}),this.series.forEach(function(u){u.bindAxes(),u.isDirtyData=!0}),T(h.redraw,!0)&&this.redraw(h.animation),p}}function i(){this.elem.attr("fill",g(this.start).tweenTo(g(this.end),this.pos),void 0,!0)}function o(){this.elem.attr("stroke",g(this.start).tweenTo(g(this.end),this.pos),void 0,!0)}var n=[],c;w.compose=function(s,r,a,h,p){c||(c=s),n.indexOf(r)===-1&&(n.push(r),s=r.prototype,s.collectionsWithUpdate.push("colorAxis"),s.collectionsWithInit.colorAxis=[s.addColorAxis],C(r,"afterGetAxes",j),t(r)),n.indexOf(a)===-1&&(n.push(a),r=a.prototype,r.fillSetter=i,r.strokeSetter=o),n.indexOf(h)===-1&&(n.push(h),C(h,"afterGetAllItems",V),C(h,"afterColorizeItem",_),C(h,"afterUpdate",D)),n.indexOf(p)===-1&&(n.push(p),S(p.prototype,{optionalAxis:"colorAxis",translateColors:e}),S(p.prototype.pointClass.prototype,{setVisible:l}),C(p,"afterTranslate",v,{order:1}),C(p,"bindAxes",m))},w.pointSetVisible=l}(P||(P={})),P}),L(d,"Core/Axis/Color/ColorAxisDefaults.js",[],function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}}),L(d,"Core/Axis/Color/ColorAxis.js",[d["Core/Axis/Axis.js"],d["Core/Color/Color.js"],d["Core/Axis/Color/ColorAxisComposition.js"],d["Core/Axis/Color/ColorAxisDefaults.js"],d["Core/Globals.js"],d["Core/Legend/LegendSymbol.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(y,f,g,C,S,z,T,O){var P=this&&this.__extends||function(){var m=function(l,e){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o])},m(l,e)};return function(l,e){function t(){this.constructor=l}m(l,e),l.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),w=f.parse,j=T.series,V=O.extend,_=O.isNumber,D=O.merge,v=O.pick;return f=function(m){function l(e,t){var i=m.call(this,e,t)||this;return i.beforePadding=!1,i.chart=void 0,i.coll="colorAxis",i.dataClasses=void 0,i.name="",i.options=void 0,i.stops=void 0,i.visible=!0,i.init(e,t),i}return P(l,m),l.compose=function(e,t,i,o){g.compose(l,e,t,i,o)},l.prototype.init=function(e,t){var i=e.options.legend||{},o=t.layout?t.layout!=="vertical":i.layout!=="vertical",n=t.visible;i=D(l.defaultColorAxisOptions,t,{showEmpty:!1,title:null,visible:i.enabled&&n!==!1}),this.coll="colorAxis",this.side=t.side||o?2:1,this.reversed=t.reversed||!o,this.opposite=!o,m.prototype.init.call(this,e,i),this.userOptions.visible=n,t.dataClasses&&this.initDataClasses(t),this.initStops(),this.horiz=o,this.zoomEnabled=!1},l.prototype.initDataClasses=function(e){var t=this.chart,i=this.legendItem=this.legendItem||{},o=e.dataClasses.length,n=this.options,c,s=0,r=t.options.chart.colorCount;this.dataClasses=c=[],i.labels=[],(e.dataClasses||[]).forEach(function(a,h){a=D(a),c.push(a),(t.styledMode||!a.color)&&(n.dataClassColor==="category"?(t.styledMode||(h=t.options.colors,r=h.length,a.color=h[s]),a.colorIndex=s,s++,s===r&&(s=0)):a.color=w(n.minColor).tweenTo(w(n.maxColor),2>o?.5:h/(o-1)))})},l.prototype.hasData=function(){return!!(this.tickPositions||[]).length},l.prototype.setTickPositions=function(){if(!this.dataClasses)return m.prototype.setTickPositions.call(this)},l.prototype.initStops=function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]],this.stops.forEach(function(e){e.color=w(e[1])})},l.prototype.setOptions=function(e){m.prototype.setOptions.call(this,e),this.options.crosshair=this.options.marker},l.prototype.setAxisSize=function(){var e=this.legendItem&&this.legendItem.symbol,t=this.chart,i=t.options.legend||{},o,n;e?(this.left=i=e.attr("x"),this.top=o=e.attr("y"),this.width=n=e.attr("width"),this.height=e=e.attr("height"),this.right=t.chartWidth-i-n,this.bottom=t.chartHeight-o-e,this.len=this.horiz?n:e,this.pos=this.horiz?i:o):this.len=(this.horiz?i.symbolWidth:i.symbolHeight)||l.defaultLegendLength},l.prototype.normalizedValue=function(e){return this.logarithmic&&(e=this.logarithmic.log2lin(e)),1-(this.max-e)/(this.max-this.min||1)},l.prototype.toColor=function(e,t){var i=this.dataClasses,o=this.stops,n;if(i)for(n=i.length;n--;){var c=i[n],s=c.from;if(o=c.to,(typeof s>"u"||e>=s)&&(typeof o>"u"||e<=o)){var r=c.color;t&&(t.dataClass=n,t.colorIndex=c.colorIndex);break}}else{for(e=this.normalizedValue(e),n=o.length;n--&&!(e>o[n][0]););s=o[n]||o[n+1],o=o[n+1]||s,e=1-(o[0]-e)/(o[0]-s[0]||1),r=s.color.tweenTo(o.color,e)}return r},l.prototype.getOffset=function(){var e=this.legendItem&&this.legendItem.group,t=this.chart.axisOffset[this.side];if(e){this.axisParent=e,m.prototype.getOffset.call(this);var i=this.chart.legend;i.allItems.forEach(function(o){o instanceof l&&o.drawLegendSymbol(i,o)}),i.render(),this.chart.getMargins(!0),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=t}},l.prototype.setLegendColor=function(){var e=this.reversed,t=e?1:0;e=e?0:1,t=this.horiz?[t,0,e,0]:[0,e,0,t],this.legendColor={linearGradient:{x1:t[0],y1:t[1],x2:t[2],y2:t[3]},stops:this.stops}},l.prototype.drawLegendSymbol=function(e,t){t=t.legendItem||{};var i=e.padding,o=e.options,n=v(o.itemDistance,10),c=this.horiz,s=v(o.symbolWidth,c?l.defaultLegendLength:12),r=v(o.symbolHeight,c?12:l.defaultLegendLength);o=v(o.labelPadding,c?16:30),this.setLegendColor(),t.symbol||(t.symbol=this.chart.renderer.rect(0,e.baseline-11,s,r).attr({zIndex:1}).add(t.group)),t.labelWidth=s+i+(c?n:this.options.labels.x+this.maxLabelLength),t.labelHeight=r+i+(c?o:0)},l.prototype.setState=function(e){this.series.forEach(function(t){t.setState(e)})},l.prototype.setVisible=function(){},l.prototype.getSeriesExtremes=function(){var e=this.series,t=e.length,i;for(this.dataMin=1/0,this.dataMax=-1/0;t--;){var o=e[t],n=o.colorKey=v(o.options.colorKey,o.colorKey,o.pointValKey,o.zoneAxis,"y"),c=o.pointArrayMap,s=o[n+"Min"]&&o[n+"Max"];if(o[n+"Data"])var r=o[n+"Data"];else if(c){r=[],c=c.indexOf(n);var a=o.yData;if(0<=c&&a)for(i=0;i<a.length;i++)r.push(v(a[i][c],a[i]))}else r=o.yData;s?(o.minColorValue=o[n+"Min"],o.maxColorValue=o[n+"Max"]):(r=j.prototype.getExtremes.call(o,r),o.minColorValue=r.dataMin,o.maxColorValue=r.dataMax),typeof o.minColorValue<"u"&&(this.dataMin=Math.min(this.dataMin,o.minColorValue),this.dataMax=Math.max(this.dataMax,o.maxColorValue)),s||j.prototype.applyExtremes.call(o)}},l.prototype.drawCrosshair=function(e,t){var i=this.legendItem||{},o=t&&t.plotX,n=t&&t.plotY,c=this.pos,s=this.len;if(t){var r=this.toPixels(t.getNestedProperty(t.series.colorKey));r<c?r=c-2:r>c+s&&(r=c+s+2),t.plotX=r,t.plotY=this.len-r,m.prototype.drawCrosshair.call(this,e,t),t.plotX=o,t.plotY=n,this.cross&&!this.cross.addedToColorAxis&&i.group&&(this.cross.addClass("highcharts-coloraxis-marker").add(i.group),this.cross.addedToColorAxis=!0,this.chart.styledMode||typeof this.crosshair!="object"||this.cross.attr({fill:this.crosshair.color}))}},l.prototype.getPlotLinePath=function(e){var t=this.left,i=e.translatedValue,o=this.top;return _(i)?this.horiz?[["M",i-4,o-6],["L",i+4,o-6],["L",i,o],["Z"]]:[["M",t,i],["L",t-6,i+6],["L",t-6,i-6],["Z"]]:m.prototype.getPlotLinePath.call(this,e)},l.prototype.update=function(e,t){var i=this.chart.legend;this.series.forEach(function(o){o.isDirtyData=!0}),(e.dataClasses&&i.allItems||this.dataClasses)&&this.destroyItems(),m.prototype.update.call(this,e,t),this.legendItem&&this.legendItem.label&&(this.setLegendColor(),i.colorizeItem(this,!0))},l.prototype.destroyItems=function(){var e=this.chart,t=this.legendItem||{};if(t.label)e.legend.destroyItem(this);else if(t.labels){var i=0;for(t=t.labels;i<t.length;i++)e.legend.destroyItem(t[i])}e.isDirtyLegend=!0},l.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),m.prototype.destroy.apply(this,[].slice.call(arguments))},l.prototype.remove=function(e){this.destroyItems(),m.prototype.remove.call(this,e)},l.prototype.getDataClassLegendSymbols=function(){var e=this,t=e.chart,i=e.legendItem&&e.legendItem.labels||[],o=t.options.legend,n=v(o.valueDecimals,-1),c=v(o.valueSuffix,""),s=function(a){return e.series.reduce(function(h,p){return h.push.apply(h,p.points.filter(function(u){return u.dataClass===a})),h},[])},r;return i.length||e.dataClasses.forEach(function(a,h){var p=a.from,u=a.to,x=t.numberFormatter,A=!0;r="",typeof p>"u"?r="< ":typeof u>"u"&&(r="> "),typeof p<"u"&&(r+=x(p,n)+c),typeof p<"u"&&typeof u<"u"&&(r+=" - "),typeof u<"u"&&(r+=x(u,n)+c),i.push(V({chart:t,name:r,options:{},drawLegendSymbol:z.drawRectangle,visible:!0,isDataClass:!0,setState:function(b){for(var E=0,k=s(h);E<k.length;E++)k[E].setState(b)},setVisible:function(){this.visible=A=e.visible=!A;for(var b=0,E=s(h);b<E.length;b++)E[b].setVisible(A);t.legend.colorizeItem(this,A)}},a))}),i},l.defaultColorAxisOptions=C,l.defaultLegendLength=200,l.keepProps=["legendItem"],l}(y),Array.prototype.push.apply(y.keepProps,f.keepProps),f}),L(d,"masters/modules/coloraxis.src.js",[d["Core/Globals.js"],d["Core/Axis/Color/ColorAxis.js"]],function(y,f){y.ColorAxis=f,f.compose(y.Chart,y.Fx,y.Legend,y.Series)})})})(H);const K=M,G=W({__proto__:null,default:K},[M]);export{G as c};