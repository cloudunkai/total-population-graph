function E(b,a){for(var w=0;w<a.length;w++){const u=a[w];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in b)){const y=Object.getOwnPropertyDescriptor(u,c);y&&Object.defineProperty(b,c,y.get?y:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var T={},W={get exports(){return T},set exports(b){T=b}};(function(b){(function(a){b.exports?(a.default=a,b.exports=a):a(typeof Highcharts<"u"?Highcharts:void 0)})(function(a){function w(u,c,y,P){u.hasOwnProperty(c)||(u[c]=P.apply(null,y),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:u[c]}})))}a=a?a._modules:{},w(a,"Series/Timeline/TimelinePoint.js",[a["Core/Series/Point.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(u,c,y){var P=this&&this.__extends||function(){var d=function(h,i){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,p){l.__proto__=p}||function(l,p){for(var g in p)p.hasOwnProperty(g)&&(l[g]=p[g])},d(h,i)};return function(h,i){function l(){this.constructor=h}d(h,i),h.prototype=i===null?Object.create(i):(l.prototype=i.prototype,new l)}}(),C=c.seriesTypes.pie.prototype.pointClass,f=y.defined,j=y.isNumber,O=y.merge,S=y.objectEach,_=y.pick;return function(d){function h(){var i=d!==null&&d.apply(this,arguments)||this;return i.options=void 0,i.series=void 0,i}return P(h,d),h.prototype.alignConnector=function(){var i=this.series,l=this.connector,p=this.dataLabel,g=this.dataLabel.options=O(i.options.dataLabels,this.options.dataLabels),r=this.series.chart,s=l.getBBox(),t=s.x+p.translateX;s=s.y+p.translateY,r.inverted?s-=p.options.connectorWidth/2:t+=p.options.connectorWidth/2,r=r.isInsidePlot(t,s),l[r?"animate":"attr"]({d:this.getConnectorPath()}),i.chart.styledMode||l.attr({stroke:g.connectorColor||this.color,"stroke-width":g.connectorWidth,opacity:p[f(p.newOpacity)?"newOpacity":"opacity"]})},h.prototype.drawConnector=function(){var i=this.series;this.connector||(this.connector=i.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel)),this.series.chart.isInsidePlot(this.dataLabel.x,this.dataLabel.y)&&this.alignConnector()},h.prototype.getConnectorPath=function(){var i=this.series.chart,l=this.series.xAxis.len,p=i.inverted,g=p?"x2":"y2",r=this.dataLabel,s=r.targetPosition,t={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:j(s.y)?s.y:r.y},e=(r.alignAttr||r)[g[0]]<this.series.yAxis.len/2;return p&&(t={x1:this.plotY,y1:l-this.plotX,x2:s.x||r.x,y2:l-this.plotX}),e&&(t[g]+=r[p?"width":"height"]),S(t,function(n,o){t[o]-=(r.alignAttr||r)[o[0]]}),i.renderer.crispLine([["M",t.x1,t.y1],["L",t.x2,t.y2]],r.options.connectorWidth)},h.prototype.init=function(){var i=d.prototype.init.apply(this,arguments);return i.name=_(i.name,"Event"),i.y=1,i},h.prototype.isValid=function(){return this.options.y!==null},h.prototype.setState=function(){var i=d.prototype.setState;this.isNull||i.apply(this,arguments)},h.prototype.setVisible=function(i,l){var p=this.series;l=_(l,p.options.ignoreHiddenPoint),C.prototype.setVisible.call(this,i,!1),p.processData(),l&&p.chart.redraw()},h.prototype.applyOptions=function(i,l){return i=u.prototype.optionsToObject.call(this,i),this.userDLOptions=O(this.userDLOptions,i.dataLabels),d.prototype.applyOptions.call(this,i,l)},h}(c.series.prototype.pointClass)}),w(a,"Series/Timeline/TimelineSeriesDefaults.js",[],function(){return{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,alternate:!0,backgroundColor:"#ffffff",borderWidth:1,borderColor:"#999999",borderRadius:3,color:"#333333",connectorWidth:1,distance:100,formatter:function(){var u=this.series.chart.styledMode?"<span>● </span>":'<span style="color:'+this.point.color+'">● </span>';return u+='<span class="highcharts-strong">'+(this.key||"")+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1,colorKey:"x"}}),w(a,"Series/Timeline/TimelineSeries.js",[a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Series/Timeline/TimelinePoint.js"],a["Series/Timeline/TimelineSeriesDefaults.js"],a["Core/Utilities.js"]],function(u,c,y,P,C,f){var j=this&&this.__extends||function(){var r=function(s,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},r(s,t)};return function(s,t){function e(){this.constructor=s}r(s,t),s.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),O=c.seriesTypes,S=O.column,_=O.line,d=f.addEvent,h=f.arrayMax,i=f.arrayMin,l=f.defined;O=f.extend;var p=f.merge,g=f.pick;return f=function(r){function s(){var t=r!==null&&r.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t.userOptions=void 0,t.visibilityMap=void 0,t}return j(s,r),s.prototype.alignDataLabel=function(t,e,n,o){var v=this.chart.inverted,m=this.visibilityMap.filter(function(k){return k}),L=this.visiblePointsCount,x=m.indexOf(t);m=this.options.dataLabels;var A=t.userDLOptions||{};x=m.alternate?x&&x!==L-1?2:1.5:1,L=Math.floor(this.xAxis.len/L);var D=e.padding;if(t.visible){var M=Math.abs(A.x||t.options.dataLabels.x);v?(v=2*(M-D)-t.itemHeight/2,v={width:v+"px",textOverflow:e.width/v*e.height/2>L*x?"ellipsis":"none"}):v={width:(A.width||m.width||L*x-2*D)+"px"},e.css(v),this.chart.styledMode||e.shadow(m.shadow)}r.prototype.alignDataLabel.apply(this,arguments)},s.prototype.bindAxes=function(){var t=this;r.prototype.bindAxes.call(t),["xAxis","yAxis"].forEach(function(e){e!=="xAxis"||t[e].userOptions.type||(t[e].categories=t[e].hasNames=!0)})},s.prototype.distributeDL=function(){var t=this,e=t.options.dataLabels,n=1;if(e){var o=e.distance||0;t.points.forEach(function(v){var m;v.options.dataLabels=p((m={},m[t.chart.inverted?"x":"y"]=e.alternate&&n%2?-o:o,m),v.userDLOptions),n++})}},s.prototype.generatePoints=function(){var t=this;r.prototype.generatePoints.apply(t),t.points.forEach(function(e,n){e.applyOptions({x:t.xData[n]},t.xData[n])})},s.prototype.getVisibilityMap=function(){return(this.data.length?this.data:this.userOptions.data).map(function(t){return t&&t.visible!==!1&&!t.isNull?t:!1})},s.prototype.getXExtremes=function(t){var e=this;return t=t.filter(function(n,o){return e.points[o].isValid()&&e.points[o].visible}),{min:i(t),max:h(t)}},s.prototype.init=function(){var t=this;r.prototype.init.apply(t,arguments),t.eventsToUnbind.push(d(t,"afterTranslate",function(){var e,n=Number.MAX_VALUE;t.points.forEach(function(o){o.isInside=o.isInside&&o.visible,o.visible&&!o.isNull&&(l(e)&&(n=Math.min(n,Math.abs(o.plotX-e))),e=o.plotX)}),t.closestPointRangePx=n})),t.eventsToUnbind.push(d(t,"drawDataLabels",function(){t.distributeDL()})),t.eventsToUnbind.push(d(t,"afterDrawDataLabels",function(){var e;t.points.forEach(function(n){if(e=n.dataLabel)return e.animate=function(o){return this.targetPosition&&(this.targetPosition=o),y.prototype.animate.apply(this,arguments)},e.targetPosition||(e.targetPosition={}),n.drawConnector()})})),t.eventsToUnbind.push(d(t.chart,"afterHideOverlappingLabel",function(){t.points.forEach(function(e){e.connector&&e.dataLabel&&e.dataLabel.oldOpacity!==e.dataLabel.newOpacity&&e.alignConnector()})}))},s.prototype.markerAttribs=function(t,e){var n=this.options.marker,o=t.marker||{},v=o.symbol||n.symbol,m=g(o.width,n.width,this.closestPointRangePx),L=g(o.height,n.height),x=0;return this.xAxis.dateTime?r.prototype.markerAttribs.call(this,t,e):(e&&(n=n.states[e]||{},e=o.states&&o.states[e]||{},x=g(e.radius,n.radius,x+(n.radiusPlus||0))),t.hasImage=v&&v.indexOf("url")===0,t={x:Math.floor(t.plotX)-m/2-x/2,y:t.plotY-L/2-x/2,width:m+x,height:L+x},this.chart.inverted?{y:t.x&&t.width&&this.xAxis.len-t.x-t.width,x:t.y&&t.y,width:t.height,height:t.width}:t)},s.prototype.processData=function(){var t=0,e;for(this.visibilityMap=this.getVisibilityMap(),this.visibilityMap.forEach(function(n){n&&t++}),this.visiblePointsCount=t,e=0;e<this.xData.length;e++)this.yData[e]=1;r.prototype.processData.call(this,arguments)},s.defaultOptions=p(_.defaultOptions,C),s}(_),O(f.prototype,{drawLegendSymbol:u.drawRectangle,drawTracker:S.prototype.drawTracker,pointClass:P,trackerGroups:["markerGroup","dataLabelsGroup"]}),c.registerSeriesType("timeline",f),f}),w(a,"masters/modules/timeline.src.js",[],function(){})})})(W);const X=T,V=E({__proto__:null,default:X},[T]);export{V as t};
