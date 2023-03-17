function b(z,c){for(var F=0;F<c.length;F++){const x=c[F];if(typeof x!="string"&&!Array.isArray(x)){for(const y in x)if(y!=="default"&&!(y in z)){const O=Object.getOwnPropertyDescriptor(x,y);O&&Object.defineProperty(z,y,O.get?O:{enumerable:!0,get:()=>x[y]})}}}return Object.freeze(Object.defineProperty(z,Symbol.toStringTag,{value:"Module"}))}var H={},tt={get exports(){return H},set exports(z){H=z}};(function(z){(function(c){z.exports?(c.default=c,z.exports=c):c(typeof Highcharts<"u"?Highcharts:void 0)})(function(c){function F(x,y,O,w){x.hasOwnProperty(y)||(x[y]=w.apply(null,O),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:y,module:x[y]}})))}c=c?c._modules:{},F(c,"Series/NodesComposition.js",[c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"]],function(x,y){x=x.series;var O=x.prototype,w=x.prototype.pointClass.prototype,_=y.defined,L=y.extend,u=y.find,r=y.merge,s=y.pick,e;return function(l){function m(){return this.data=[].concat(this.points||[],this.nodes),O.destroy.apply(this,arguments)}function g(){this.nodes&&(this.nodes.forEach(function(p){p.destroy()}),this.nodes.length=0),O.setData.apply(this,arguments)}function N(p){var f=arguments,d=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];p!=="select"&&d.forEach(function(o){o&&o.series&&(w.setState.apply(o,f),o.isNode||(o.fromNode.graphic&&w.setState.apply(o.fromNode,f),o.toNode&&o.toNode.graphic&&w.setState.apply(o.toNode,f)))}),w.setState.apply(this,f)}function S(p,f,d,o){var t=this,i=this.series.options.nodes,n=this.series.options.data,a=n&&n.length||0,v=n&&n[this.index];w.update.call(this,p,this.isNode?!1:f,d,o),this.isNode&&(p=(i||[]).reduce(function(P,h,T){return t.id===h.id?T:P},-1),o=r(i&&i[p]||{},n&&n[this.index]||{}),n&&(v?n[this.index]=v:n.length=a),i?0<=p?i[p]=o:i.push(o):this.series.options.nodes=[o],s(f,!0)&&this.series.chart.redraw(d))}var C=[];l.compose=function(p,f){return C.indexOf(p)===-1&&(C.push(p),p=p.prototype,p.setNodeState=N,p.setState=N,p.update=S),C.indexOf(f)===-1&&(C.push(f),p=f.prototype,p.destroy=m,p.setData=g),f},l.createNode=function(p){var f=this.pointClass,d=function(i,n){return u(i,function(a){return a.id===n})},o=d(this.nodes,p);if(!o){d=this.options.nodes&&d(this.options.nodes,p);var t=new f().init(this,L({className:"highcharts-node",isNode:!0,id:p,y:1},d));t.linksTo=[],t.linksFrom=[],t.getSum=function(){var i=0,n=0;return t.linksTo.forEach(function(a){i+=a.weight||0}),t.linksFrom.forEach(function(a){n+=a.weight||0}),Math.max(i,n)},t.offset=function(i,n){for(var a=0,v=0;v<t[n].length;v++){if(t[n][v]===i)return a;a+=t[n][v].weight}},t.hasShape=function(){var i=0;return t.linksTo.forEach(function(n){n.outgoing&&i++}),!t.linksTo.length||i!==t.linksTo.length},t.index=this.nodes.push(t)-1,o=t}return o.formatPrefix="node",o.name=o.name||o.options.id||"",o.mass=s(o.options.mass,o.options.marker&&o.options.marker.radius,this.options.marker&&this.options.marker.radius,4),o},l.destroy=m,l.generatePoints=function(){var p=this,f=this.chart,d={};O.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach(function(o){o.linksFrom.length=0,o.linksTo.length=0,o.level=o.options.level}),this.points.forEach(function(o){_(o.from)&&(d[o.from]||(d[o.from]=p.createNode(o.from)),d[o.from].linksFrom.push(o),o.fromNode=d[o.from],f.styledMode?o.colorIndex=s(o.options.colorIndex,d[o.from].colorIndex):o.color=o.options.color||d[o.from].color),_(o.to)&&(d[o.to]||(d[o.to]=p.createNode(o.to)),d[o.to].linksTo.push(o),o.toNode=d[o.to]),o.name=o.name||o.id},this),this.nodeLookup=d},l.setNodeState=N,l.updateNode=S}(e||(e={})),e}),F(c,"Series/Sankey/SankeyPoint.js",[c["Core/Series/Point.js"],c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"]],function(x,y,O){var w=this&&this.__extends||function(){var L=function(u,r){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,e){s.__proto__=e}||function(s,e){for(var l in e)e.hasOwnProperty(l)&&(s[l]=e[l])},L(u,r)};return function(u,r){function s(){this.constructor=u}L(u,r),u.prototype=r===null?Object.create(r):(s.prototype=r.prototype,new s)}}(),_=O.defined;return function(L){function u(){var r=L!==null&&L.apply(this,arguments)||this;return r.className=void 0,r.fromNode=void 0,r.level=void 0,r.linkBase=void 0,r.linksFrom=void 0,r.linksTo=void 0,r.mass=void 0,r.nodeX=void 0,r.nodeY=void 0,r.options=void 0,r.series=void 0,r.toNode=void 0,r}return w(u,L),u.prototype.applyOptions=function(r,s){return x.prototype.applyOptions.call(this,r,s),_(this.options.level)&&(this.options.column=this.column=this.options.level),this},u.prototype.getClassName=function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+x.prototype.getClassName.call(this)},u.prototype.getFromNode=function(){for(var r=-1,s,e=0;e<this.linksTo.length;e++){var l=this.linksTo[e];l.fromNode.column>r&&l.fromNode!==this&&(s=l.fromNode,r=s.column)}return{fromNode:s,fromColumn:r}},u.prototype.setNodeColumn=function(){_(this.options.column)||(this.column=this.linksTo.length===0?0:this.getFromNode().fromColumn+1)},u.prototype.isValid=function(){return this.isNode||typeof this.weight=="number"},u}(y.seriesTypes.column.prototype.pointClass)}),F(c,"Series/Sankey/SankeySeriesDefaults.js",[],function(){return{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,opacity:1,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1,opacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 10px">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}}),F(c,"Series/Sankey/SankeyColumnComposition.js",[c["Core/Utilities.js"]],function(x){var y=x.defined,O=x.relativeLength,w;return function(_){_.compose=function(u,r){return u.sankeyColumn=new L(u,r),u};var L=function(){function u(r,s){this.points=r,this.series=s}return u.prototype.getTranslationFactor=function(r){for(var s=this.points,e=s.slice(),l=r.options.minLinkWidth||0,m=0,g,N=(r.chart.plotSizeY||0)-(r.options.borderWidth||0)-(s.length-1)*r.nodePadding;s.length;){for(m=N/s.sankeyColumn.sum(),r=!1,g=s.length;g--;)s[g].getSum()*m<l&&(s.splice(g,1),N-=l,r=!0);if(!r)break}return s.length=0,e.forEach(function(S){s.push(S)}),m},u.prototype.top=function(r){var s=this.series,e=s.nodePadding,l=this.points.reduce(function(m,g){return 0<m&&(m+=e),g=Math.max(g.getSum()*r,s.options.minLinkWidth||0),m+g},0);return((s.chart.plotSizeY||0)-l)/2},u.prototype.left=function(r){var s=this.series,e=s.chart,l=s.options.equalNodes,m=e.inverted?e.plotHeight:e.plotWidth,g=s.nodePadding,N=this.points.reduce(function(S,C){return 0<S&&(S+=g),C=l?m/C.series.nodes.length-g:Math.max(C.getSum()*r,s.options.minLinkWidth||0),S+C},0);return((e.plotSizeX||0)-Math.round(N))/2},u.prototype.sum=function(){return this.points.reduce(function(r,s){return r+s.getSum()},0)},u.prototype.offset=function(r,s){var e=this.points,l=this.series,m=l.nodePadding,g=0;if(l.is("organization")&&r.hangsFrom)return{absoluteTop:r.hangsFrom.nodeY};for(var N=0;N<e.length;N++){var S=e[N].getSum(),C=Math.max(S*s,l.options.minLinkWidth||0),p=r.options[l.chart.inverted?"offsetHorizontal":"offsetVertical"],f=r.options.offset||0;if(S=S?C+m:0,e[N]===r)return{relativeTop:g+(y(p)?O(p,C):O(f,S))};g+=S}},u}();_.SankeyColumnAdditions=L}(w||(w={})),w}),F(c,"Series/TreeUtilities.js",[c["Core/Color/Color.js"],c["Core/Utilities.js"]],function(x,y){function O(e,l){var m=l.before,g=l.idRoot,N=l.mapIdToNode[g],S=l.points[e.i],C=S&&S.options||{},p=[],f=0;return e.levelDynamic=e.level-(l.levelIsConstant!==!1?0:N.level),e.name=s(S&&S.name,""),e.visible=g===e.id||l.visible===!0,typeof m=="function"&&(e=m(e,l)),e.children.forEach(function(d,o){var t=w({},l);w(t,{index:o,siblings:e.children.length,visible:e.visible}),d=O(d,t),p.push(d),d.visible&&(f+=d.val)}),m=s(C.value,f),e.visible=0<=m&&(0<f||e.visible),e.children=p,e.childrenTotal=f,e.isLeaf=e.visible&&!f,e.val=m,e}var w=y.extend,_=y.isArray,L=y.isNumber,u=y.isObject,r=y.merge,s=y.pick;return{getColor:function(e,l){var m=l.index,g=l.mapOptionsToLevel,N=l.parentColor,S=l.parentColorIndex,C=l.series,p=l.colors,f=l.siblings,d=C.points,o=C.chart.options.chart,t;if(e){if(d=d[e.i],e=g[e.level]||{},g=d&&e.colorByPoint)var i=d.index%(p?p.length:o.colorCount),n=p&&p[i];C.chart.styledMode||(p=d&&d.options.color,o=e&&e.color,(t=N)&&(t=(t=e&&e.colorVariation)&&t.key==="brightness"&&m&&f?x.parse(N).brighten(m/f*t.to).get():N),t=s(p,o,n,t,C.color));var a=s(d&&d.options.colorIndex,e&&e.colorIndex,i,S,l.colorIndex)}return{color:t,colorIndex:a}},getLevelOptions:function(e){var l={};if(u(e)){var m=L(e.from)?e.from:1,g=e.levels,N={},S=u(e.defaults)?e.defaults:{};for(_(g)&&(N=g.reduce(function(C,p){if(u(p)&&L(p.level)){var f=r({},p),d=s(f.levelIsConstant,S.levelIsConstant);delete f.levelIsConstant,delete f.level,p=p.level+(d?0:m-1),u(C[p])?r(!0,C[p],f):C[p]=f}return C},{})),g=L(e.to)?e.to:1,e=0;e<=g;e++)l[e]=r({},S,u(N[e])?N[e]:{})}return l},setTreeValues:O,updateRootId:function(e){if(u(e)){var l=u(e.options)?e.options:{};l=s(e.rootNode,l.rootId,""),u(e.userOptions)&&(e.userOptions.rootId=l),e.rootNode=l}return l}}}),F(c,"Series/Sankey/SankeySeries.js",[c["Core/Color/Color.js"],c["Core/Globals.js"],c["Series/NodesComposition.js"],c["Series/Sankey/SankeyPoint.js"],c["Series/Sankey/SankeySeriesDefaults.js"],c["Core/Series/SeriesRegistry.js"],c["Series/Sankey/SankeyColumnComposition.js"],c["Series/TreeUtilities.js"],c["Core/Utilities.js"]],function(x,y,O,w,_,L,u,r,s){var e=this&&this.__extends||function(){var d=function(o,t){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)n.hasOwnProperty(a)&&(i[a]=n[a])},d(o,t)};return function(o,t){function i(){this.constructor=o}d(o,t),o.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),l=L.series,m=L.seriesTypes.column,g=r.getLevelOptions;r=s.extend;var N=s.isObject,S=s.merge,C=s.pick,p=s.relativeLength,f=s.stableSort;return s=function(d){function o(){var t=d!==null&&d.apply(this,arguments)||this;return t.colDistance=void 0,t.data=void 0,t.group=void 0,t.nodeLookup=void 0,t.nodePadding=void 0,t.nodes=void 0,t.nodeWidth=void 0,t.options=void 0,t.points=void 0,t.translationFactor=void 0,t}return e(o,d),o.getDLOptions=function(t){var i=N(t.optionsPoint)?t.optionsPoint.dataLabels:{};return t=N(t.level)?t.level.dataLabels:{},S({style:{}},t,i)},o.prototype.createNodeColumns=function(){var t=[];this.nodes.forEach(function(n){n.setNodeColumn(),t[n.column]||(t[n.column]=u.compose([],this)),t[n.column].push(n)},this);for(var i=0;i<t.length;i++)typeof t[i]>"u"&&(t[i]=u.compose([],this));return t},o.prototype.order=function(t,i){var n=this;typeof t.level>"u"&&(t.level=i,t.linksFrom.forEach(function(a){a.toNode&&n.order(a.toNode,i+1)}))},o.prototype.generatePoints=function(){O.generatePoints.apply(this,arguments);var t=this;this.orderNodes&&(this.nodes.filter(function(i){return i.linksTo.length===0}).forEach(function(i){t.order(i,0)}),f(this.nodes,function(i,n){return i.level-n.level}))},o.prototype.getNodePadding=function(){var t=this.options.nodePadding||0;if(this.nodeColumns){var i=this.nodeColumns.reduce(function(n,a){return Math.max(n,a.length)},0);i*t>this.chart.plotSizeY&&(t=this.chart.plotSizeY/i)}return t},o.prototype.hasData=function(){return!!this.processedXData.length},o.prototype.pointAttribs=function(t,i){if(!t)return{};var n=this,a=n.mapOptionsToLevel[(t.isNode?t.level:t.fromNode.level)||0]||{},v=t.options,P=a.states&&a.states[i||""]||{};i=["colorByPoint","borderColor","borderWidth","linkOpacity","opacity"].reduce(function(T,k){return T[k]=C(P[k],v[k],a[k],n.options[k]),T},{});var h=C(P.color,v.color,i.colorByPoint?t.color:a.color);return t.isNode?{fill:h,stroke:i.borderColor,"stroke-width":i.borderWidth,opacity:i.opacity}:{fill:x.parse(h).setOpacity(i.linkOpacity).get()}},o.prototype.drawTracker=function(){m.prototype.drawTracker.call(this,this.points),m.prototype.drawTracker.call(this,this.nodes)},o.prototype.drawPoints=function(){m.prototype.drawPoints.call(this,this.points),m.prototype.drawPoints.call(this,this.nodes)},o.prototype.drawDataLabels=function(){m.prototype.drawDataLabels.call(this,this.points),m.prototype.drawDataLabels.call(this,this.nodes)},o.prototype.translate=function(){this.processedXData||this.processData(),this.generatePoints(),this.nodeColumns=this.createNodeColumns(),this.nodeWidth=p(this.options.nodeWidth,this.chart.plotSizeX);var t=this,i=this.chart,n=this.options,a=this.nodeWidth,v=this.nodeColumns;this.nodePadding=this.getNodePadding(),this.translationFactor=v.reduce(function(P,h){return Math.min(P,h.sankeyColumn.getTranslationFactor(t))},1/0),this.colDistance=(i.plotSizeX-a-n.borderWidth)/Math.max(1,v.length-1),t.mapOptionsToLevel=g({from:1,levels:n.levels,to:v.length-1,defaults:{borderColor:n.borderColor,borderRadius:n.borderRadius,borderWidth:n.borderWidth,color:t.color,colorByPoint:n.colorByPoint,levelIsConstant:!0,linkColor:n.linkColor,linkLineWidth:n.linkLineWidth,linkOpacity:n.linkOpacity,states:n.states}}),v.forEach(function(P){P.forEach(function(h){t.translateNode(h,P)})},this),this.nodes.forEach(function(P){P.linksFrom.forEach(function(h){(h.weight||h.isNull)&&h.to&&(t.translateLink(h),h.allowShadow=!1)})})},o.prototype.translateLink=function(t){var i=function(B,Z){return Z=B.offset(t,Z)*P,Math.min(B.nodeY+Z,B.nodeY+(B.shapeArgs&&B.shapeArgs.height||0)-h)},n=t.fromNode,a=t.toNode,v=this.chart,P=this.translationFactor,h=Math.max(t.weight*P,this.options.minLinkWidth),T=(v.inverted?-this.colDistance:this.colDistance)*this.options.curveFactor,k=i(n,"linksFrom");i=i(a,"linksTo");var j=n.nodeX,W=this.nodeWidth;a=a.nodeX;var D=t.outgoing,M=a>j+W;if(v.inverted&&(k=v.plotSizeY-k,i=(v.plotSizeY||0)-i,W=-W,h=-h,M=j>a),t.shapeType="path",t.linkBase=[k,k+h,i,i+h],M&&typeof i=="number")t.shapeArgs={d:[["M",j+W,k],["C",j+W+T,k,a-T,i,a,i],["L",a+(D?W:0),i+h/2],["L",a,i+h],["C",a-T,i+h,j+W+T,k+h,j+W,k+h],["Z"]]};else if(typeof i=="number"){T=a-20-h,D=a-20,M=j+W;var I=M+20,R=I+h,$=k,Y=k+h,q=Y+20,A=q+(v.plotHeight-k-h),E=A+20,U=E+h,V=i,X=V+h,G=X+20,J=E+.7*h,K=a-.7*h,Q=M+.7*h;t.shapeArgs={d:[["M",M,$],["C",Q,$,R,Y-.7*h,R,q],["L",R,A],["C",R,J,Q,U,M,U],["L",a,U],["C",K,U,T,J,T,A],["L",T,G],["C",T,X-.7*h,K,V,a,V],["L",a,X],["C",D,X,D,X,D,G],["L",D,A],["C",D,E,D,E,a,E],["L",M,E],["C",I,E,I,E,I,A],["L",I,q],["C",I,Y,I,Y,M,Y],["Z"]]}}t.dlBox={x:j+(a-j+W)/2,y:k+(i-k)/2,height:h,width:0},t.tooltipPos=v.inverted?[v.plotSizeY-t.dlBox.y-h/2,v.plotSizeX-t.dlBox.x]:[t.dlBox.x,t.dlBox.y+h/2],t.y=t.plotY=1,t.x=t.plotX=1,t.color||(t.color=n.color)},o.prototype.translateNode=function(t,i){var n=this.translationFactor,a=this.chart,v=this.options,P=t.getSum(),h=Math.max(Math.round(P*n),this.options.minLinkWidth),T=Math.round(this.nodeWidth),k=Math.round(v.borderWidth)%2/2,j=i.sankeyColumn.offset(t,n);if(i=Math.floor(C(j.absoluteTop,i.sankeyColumn.top(n)+j.relativeTop))+k,k=Math.floor(this.colDistance*t.column+v.borderWidth/2)+p(t.options.offsetHorizontal||0,T)+k,k=a.inverted?a.plotSizeX-k:k,t.sum=P){t.shapeType="rect",t.nodeX=k,t.nodeY=i,P=k,n=i,j=t.options.width||v.width||T;var W=t.options.height||v.height||h;a.inverted&&(P=k-T,n=a.plotSizeY-i-h,j=t.options.height||v.height||T,W=t.options.width||v.width||h),t.dlOptions=o.getDLOptions({level:this.mapOptionsToLevel[t.level],optionsPoint:t.options}),t.plotX=1,t.plotY=1,t.tooltipPos=a.inverted?[a.plotSizeY-n-W/2,a.plotSizeX-P-j/2]:[P+j/2,n+W/2],t.shapeArgs={x:P,y:n,width:j,height:W,display:t.hasShape()?"":"none"}}else t.dlOptions={enabled:!1}},o.defaultOptions=S(m.defaultOptions,_),o}(m),O.compose(w,s),r(s.prototype,{animate:l.prototype.animate,createNode:O.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,pointArrayMap:["from","to","weight"],pointClass:w,searchPoint:y.noop}),L.registerSeriesType("sankey",s),s}),F(c,"masters/modules/sankey.src.js",[],function(){})})})(tt);const ot=H,et=b({__proto__:null,default:ot},[H]);export{et as s};