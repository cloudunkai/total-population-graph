function tt(k,l){for(var y=0;y<l.length;y++){const u=l[y];if(typeof u!="string"&&!Array.isArray(u)){for(const p in u)if(p!=="default"&&!(p in k)){const v=Object.getOwnPropertyDescriptor(u,p);v&&Object.defineProperty(k,p,v.get?v:{enumerable:!0,get:()=>u[p]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var M={},it={get exports(){return M},set exports(k){M=k}};(function(k){(function(l){k.exports?(l.default=l,k.exports=l):l(typeof Highcharts<"u"?Highcharts:void 0)})(function(l){function y(u,p,v,f){u.hasOwnProperty(p)||(u[p]=f.apply(null,v),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:p,module:u[p]}})))}l=l?l._modules:{},y(l,"Core/Axis/GridAxis.js",[l["Core/Axis/Axis.js"],l["Core/Axis/AxisDefaults.js"],l["Core/Globals.js"],l["Core/Utilities.js"]],function(u,p,v,f){function T(t,i){var e={width:0,height:0};return i.forEach(function(s){if(s=t[s],f.isObject(s,!0)){var r=f.isObject(s.label,!0)?s.label:{};s=r.getBBox?r.getBBox().height:0,r.textStr&&!w(r.textPxLength)&&(r.textPxLength=r.getBBox().width);var n=w(r.textPxLength)?Math.round(r.textPxLength):0;r.textStr&&(n=Math.round(r.getBBox().width)),e.height=Math.max(s,e.height),e.width=Math.max(n,e.width)}}),this.options.type==="treegrid"&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode&&(e.width+=this.options.labels.indentation*((this.treeGrid.mapOfPosToGridNode[-1].height||0)-1)),e}function z(){var t=this.grid;(t&&t.columns||[]).forEach(function(i){i.getOffset()})}function W(t){if((this.options.grid||{}).enabled===!0){var i=this.axisTitle,e=this.height,s=this.horiz,r=this.left,n=this.offset,o=this.opposite,h=this.options,a=this.top,d=this.width,c=this.tickSize(),m=i&&i.getBBox().width,x=h.title.x,P=h.title.y,C=A(h.title.margin,s?5:10);i=this.chart.renderer.fontMetrics(h.title.style.fontSize,i).f,c=(s?a+e:r)+(s?1:-1)*(o?-1:1)*(c?c[0]/2:0)+(this.side===O.bottom?i:0),t.titlePosition.x=s?r-(m||0)/2-C+x:c+(o?d:0)+n+x,t.titlePosition.y=s?c-(o?e:0)+(o?i:-i)/2+n+P:a-C+P}}function D(){var t=this.chart,i=this.options.grid;i=i===void 0?{}:i;var e=this.userOptions;if(i.enabled){var s=this.options;s.labels.align=A(s.labels.align,"center"),this.categories||(s.showLastLabel=!1),this.labelRotation=0,s.labels.rotation=0}if(i.columns){s=this.grid.columns=[];for(var r=this.grid.columnIndex=0;++r<i.columns.length;){var n=L(e,i.columns[i.columns.length-r-1],{linkedTo:0,type:"category",scrollbar:{enabled:!1}});delete n.grid.columns,n=new u(this.chart,n),n.grid.isColumn=!0,n.grid.columnIndex=r,E(t.axes,n),E(t[this.coll],n),s.push(n)}}}function j(){var t=this.grid,i=this.options;if((i.grid||{}).enabled===!0){var e=this.min||0,s=this.max||0;if(this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions),this.rightWall&&this.rightWall.destroy(),this.grid&&this.grid.isOuterAxis()&&this.axisLine){var r=i.lineWidth;if(r){r=this.getLinePath(r);var n=r[0],o=r[1],h=((this.tickSize("tick")||[1])[0]-1)*(this.side===O.top||this.side===O.left?-1:1);n[0]==="M"&&o[0]==="L"&&(this.horiz?(n[2]+=h,o[2]+=h):(n[1]+=h,o[1]+=h)),!this.horiz&&this.chart.marginRight&&(n=[n,["L",this.left,n[2]||0]],h=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(s+this.tickmarkOffset)],o=[["M",o[1]||0,this.toPixels(s+this.tickmarkOffset)],h],this.grid.upperBorder||e%1===0||(this.grid.upperBorder=this.grid.renderBorder(n)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:i.lineColor,"stroke-width":i.lineWidth}),this.grid.upperBorder.animate({d:n})),this.grid.lowerBorder||s%1===0||(this.grid.lowerBorder=this.grid.renderBorder(o)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:i.lineColor,"stroke-width":i.lineWidth}),this.grid.lowerBorder.animate({d:o}))),this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:i.lineColor,"stroke-width":i.lineWidth}),this.grid.axisLineExtra.animate({d:r})):this.grid.axisLineExtra=this.grid.renderBorder(r),this.axisLine[this.showAxis?"show":"hide"]()}}if((t&&t.columns||[]).forEach(function(a){return a.render()}),!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)){for(t=this.tickmarkOffset,i=this.tickPositions[this.tickPositions.length-1],r=this.tickPositions[0],n=o=void 0;(o=this.hiddenLabels.pop())&&o.element;)o.show();for(;(n=this.hiddenMarks.pop())&&n.element;)n.show();(o=this.ticks[r].label)&&(e-r>t?this.hiddenLabels.push(o.hide()):o.show()),(o=this.ticks[i].label)&&(i-s>t?this.hiddenLabels.push(o.hide()):o.show()),(e=this.ticks[i].mark)&&i-s<t&&0<i-s&&this.ticks[i].isLast&&this.hiddenMarks.push(e.hide())}}}function I(){var t=this.tickPositions&&this.tickPositions.info,i=this.options,e=this.userOptions.labels||{};(i.grid||{}).enabled&&(this.horiz?(this.series.forEach(function(s){s.options.pointRange=0}),t&&i.dateTimeLabelFormats&&i.labels&&!b(e.align)&&(i.dateTimeLabelFormats[t.unitName].range===!1||1<t.count)&&(i.labels.align="left",b(e.x)||(i.labels.x=3))):this.options.type!=="treegrid"&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function G(t){var i=this.options;t=t.userOptions;var e=i&&f.isObject(i.grid,!0)?i.grid:{};if(e.enabled===!0){var s=L(!0,{className:"highcharts-grid-axis "+(t.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"13px"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},t);this.coll==="xAxis"&&(b(t.linkedTo)&&!b(t.tickPixelInterval)&&(s.tickPixelInterval=350),b(t.tickPixelInterval)||!b(t.linkedTo)||b(t.tickPositioner)||b(t.tickInterval)||(s.tickPositioner=function(r,n){var o=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(o){for(var h=s.units||[],a=void 0,d=1,c="year",m=0;m<h.length;m++){var x=h[m];if(x&&x[0]===o.unitName){a=m;break}}return(h=w(a)&&h[a+1])?(c=h[0]||"year",d=(d=h[1])&&d[0]||1):o.unitName==="year"&&(d=10*o.count),o=Y[c],this.tickInterval=o*d,this.chart.time.getTimeTicks({unitRange:o,count:d,unitName:c},r,n,this.options.startOfWeek)}})),L(!0,this.options,s),this.horiz&&(i.minPadding=A(t.minPadding,0),i.maxPadding=A(t.maxPadding,0)),w(i.grid.borderWidth)&&(i.tickWidth=i.lineWidth=e.borderWidth)}}function N(t){t=(t=t.userOptions)&&t.grid||{};var i=t.columns;t.enabled&&i&&L(!0,this.options,i[i.length-1])}function H(){(this.grid.columns||[]).forEach(function(t){return t.setScale()})}function F(t){var i=p.defaultLeftAxisOptions,e=this.horiz,s=this.maxLabelDimensions,r=this.options.grid;r=r===void 0?{}:r,r.enabled&&s&&(i=2*Math.abs(i.labels.x),e=e?r.cellHeight||i+s.height:i+s.width,X(t.tickSize)?t.tickSize[0]=e:t.tickSize=[e,0])}function R(){this.axes.forEach(function(t){(t.grid&&t.grid.columns||[]).forEach(function(i){i.setAxisSize(),i.setAxisTranslation()})})}function _(t){var i=this.grid;(i.columns||[]).forEach(function(e){return e.destroy(t.keepEvents)}),i.columns=void 0}function U(t){t=t.userOptions||{};var i=t.grid||{};i.enabled&&b(i.borderColor)&&(t.tickColor=t.lineColor=i.borderColor),this.grid||(this.grid=new q(this)),this.hiddenLabels=[],this.hiddenMarks=[]}function $(t){var i=this.label,e=this.axis,s=e.reversed,r=e.chart,n=e.options.grid||{},o=e.options.labels,h=o.align,a=O[e.side],d=t.tickmarkOffset,c=e.tickPositions,m=this.pos-d;c=w(c[t.index+1])?c[t.index+1]-d:(e.max||0)+d;var x=e.tickSize("tick");if(d=x?x[0]:0,x=x?x[1]/2:0,n.enabled===!0){if(a==="top"){n=e.top+e.offset;var P=n-d}else a==="bottom"?(P=r.chartHeight-e.bottom+e.offset,n=P+d):(n=e.top+e.len-(e.translate(s?c:m)||0),P=e.top+e.len-(e.translate(s?m:c)||0));a==="right"?(a=r.chartWidth-e.right+e.offset,s=a+d):a==="left"?(s=e.left+e.offset,a=s-d):(a=Math.round(e.left+(e.translate(s?c:m)||0))-x,s=Math.min(Math.round(e.left+(e.translate(s?m:c)||0))-x,e.left+e.len)),this.slotWidth=s-a,t.pos.x=h==="left"?a:h==="right"?s:a+(s-a)/2,t.pos.y=P+(n-P)/2,r=r.renderer.fontMetrics(o.style.fontSize,i&&i.element),i=i?i.getBBox().height:0,o.useHTML?t.pos.y+=r.b+-(i/2):(i=Math.round(i/r.h),t.pos.y+=(r.b-(r.h-r.f))/2+-((i-1)*r.h/2)),t.pos.x+=e.horiz&&o.x||0}}function J(t){var i=t.axis,e=t.value;if(i.options.grid&&i.options.grid.enabled){var s=i.tickPositions,r=(i.linkedParent||i).series[0],n=e===s[0];s=e===s[s.length-1];var o=r&&V(r.options.data,function(a){return a[i.isXAxis?"x":"y"]===e}),h=void 0;o&&r.is("gantt")&&(h=L(o),v.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(h)),t.isFirst=n,t.isLast=s,t.point=h}}function K(){var t=this.options,i=this.categories,e=this.tickPositions,s=e[0],r=e[e.length-1],n=this.linkedParent&&this.linkedParent.min||this.min,o=this.linkedParent&&this.linkedParent.max||this.max,h=this.tickInterval;(t.grid||{}).enabled!==!0||i||!this.horiz&&!this.isLinked||(s<n&&s+h>n&&!t.startOnTick&&(e[0]=n),r>o&&r-h<o&&!t.endOnTick&&(e[e.length-1]=o))}function Q(t){var i=this.options.grid;return(i===void 0?{}:i).enabled===!0&&this.categories?this.tickInterval:t.apply(this,Array.prototype.slice.call(arguments,1))}var S=v.dateFormats,g=f.addEvent,b=f.defined,E=f.erase,V=f.find,X=f.isArray,w=f.isNumber,L=f.merge,A=f.pick,Y=f.timeUnits,Z=f.wrap,O;(function(t){t[t.top=0]="top",t[t.right=1]="right",t[t.bottom=2]="bottom",t[t.left=3]="left"})(O||(O={}));var B=[],q=function(){function t(i){this.axis=i}return t.prototype.isOuterAxis=function(){var i=this.axis,e=i.grid.columnIndex,s=i.linkedParent&&i.linkedParent.grid.columns||i.grid.columns,r=e?i.linkedParent:i,n=-1,o=0;return(i.chart[i.coll]||[]).forEach(function(h,a){h.side!==i.side||h.options.isInternal||(o=a,h===r&&(n=a))}),o===n&&(w(e)?s.length===e:!0)},t.prototype.renderBorder=function(i){var e=this.axis,s=e.chart.renderer,r=e.options;return i=s.path(i).addClass("highcharts-axis-line").add(e.axisBorder),s.styledMode||i.attr({stroke:r.lineColor,"stroke-width":r.lineWidth,zIndex:7}),i},t}();return S.E=function(t){return this.dateFormat("%a",t,!0).charAt(0)},S.W=function(t){var i=this,e=new this.Date(t);["Hours","Milliseconds","Minutes","Seconds"].forEach(function(r){i.set(r,e,0)});var s=(this.get("Day",e)+6)%7;return t=new this.Date(e.valueOf()),this.set("Date",t,this.get("Date",e)-s+3),s=new this.Date(this.get("FullYear",t),0,1),this.get("Day",s)!==4&&(this.set("Month",e,0),this.set("Date",e,1+(11-this.get("Day",s))%7)),(1+Math.floor((t.valueOf()-s.valueOf())/6048e5)).toString()},{compose:function(t,i,e){return B.indexOf(t)===-1&&(B.push(t),t.keepProps.push("grid"),t.prototype.getMaxLabelDimensions=T,Z(t.prototype,"unsquish",Q),g(t,"init",U),g(t,"afterGetOffset",z),g(t,"afterGetTitlePosition",W),g(t,"afterInit",D),g(t,"afterRender",j),g(t,"afterSetAxisTranslation",I),g(t,"afterSetOptions",G),g(t,"afterSetOptions",N),g(t,"afterSetScale",H),g(t,"afterTickSize",F),g(t,"trimTicks",K),g(t,"destroy",_)),B.indexOf(i)===-1&&g(i,"afterSetChartSize",R),B.indexOf(e)===-1&&(g(e,"afterGetLabelPosition",$),g(e,"labelFormat",J)),t}}}),y(l,"masters/modules/grid-axis.src.js",[l["Core/Globals.js"],l["Core/Axis/GridAxis.js"]],function(u,p){p.compose(u.Axis,u.Chart,u.Tick)})})})(it);const et=M,st=tt({__proto__:null,default:et},[M]);export{st as g};
