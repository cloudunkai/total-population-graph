function oe(P,y){for(var G=0;G<y.length;G++){const T=y[G];if(typeof T!="string"&&!Array.isArray(T)){for(const x in T)if(x!=="default"&&!(x in P)){const j=Object.getOwnPropertyDescriptor(T,x);j&&Object.defineProperty(P,x,j.get?j:{enumerable:!0,get:()=>T[x]})}}}return Object.freeze(Object.defineProperty(P,Symbol.toStringTag,{value:"Module"}))}var X={},se={get exports(){return X},set exports(P){X=P}};(function(P){(function(y){P.exports?(y.default=y,P.exports=y):y(typeof Highcharts<"u"?Highcharts:void 0)})(function(y){function G(T,x,j,k){T.hasOwnProperty(x)||(T[x]=k.apply(null,j),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:x,module:T[x]}})))}y=y?y._modules:{},G(y,"Core/HttpUtilities.js",[y["Core/Globals.js"],y["Core/Utilities.js"]],function(T,x){var j=T.doc,k=x.createElement,Z=x.discardElement,z=x.merge,U=x.objectEach,B={ajax:function(c){var $={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},N=new XMLHttpRequest;if(!c.url)return!1;N.open((c.type||"get").toUpperCase(),c.url,!0),c.headers&&c.headers["Content-Type"]||N.setRequestHeader("Content-Type",$[c.dataType||"json"]||$.text),U(c.headers,function(w,F){N.setRequestHeader(F,w)}),c.responseType&&(N.responseType=c.responseType),N.onreadystatechange=function(){if(N.readyState===4){if(N.status===200){if(c.responseType!=="blob"){var w=N.responseText;if(c.dataType==="json")try{w=JSON.parse(w)}catch(F){if(F instanceof Error){c.error&&c.error(N,F);return}}}return c.success&&c.success(w,N)}c.error&&c.error(N,N.responseText)}},c.data&&typeof c.data!="string"&&(c.data=JSON.stringify(c.data)),N.send(c.data)},getJSON:function(c,$){B.ajax({url:c,success:$,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(c,$,N){var w=k("form",z({method:"post",action:c,enctype:"multipart/form-data"},N),{display:"none"},j.body);U($,function(F,Q){k("input",{type:"hidden",name:Q,value:F},void 0,w)}),w.submit(),Z(w)}};return B}),G(y,"Extensions/Data.js",[y["Core/Chart/Chart.js"],y["Core/Defaults.js"],y["Core/Globals.js"],y["Core/HttpUtilities.js"],y["Core/Series/Point.js"],y["Core/Series/SeriesRegistry.js"],y["Core/Utilities.js"]],function(T,x,j,k,Z,z,U){function B(p){return!(!p||!(p.rowsURL||p.csvURL||p.columnsURL))}var c=x.getOptions,$=j.doc,N=k.ajax,w=z.seriesTypes;x=U.addEvent;var F=U.defined,Q=U.extend,te=U.fireEvent,q=U.isNumber,V=U.merge,re=U.objectEach,W=U.pick,ne=U.splat,b=function(){function p(e,r,o){r===void 0&&(r={}),this.rowsToColumns=p.rowsToColumns,this.dateFormats={"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,parser:function(n){return n?Date.UTC(+n[1],n[2]-1,+n[3]):NaN}},"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(n){return n?Date.UTC(+n[3],n[2]-1,+n[1]):NaN},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(n){return n?Date.UTC(+n[3],n[1]-1,+n[2]):NaN}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(n){if(!n)return NaN;var t=+n[3];return t=t>new Date().getFullYear()-2e3?t+1900:t+2e3,Date.UTC(t,n[2]-1,+n[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(n){return n?Date.UTC(+n[3]+2e3,n[1]-1,+n[2]):NaN}}},this.chart=o,this.chartOptions=r,this.options=e,this.rawColumns=[],this.init(e,r,o)}return p.data=function(e,r,o){return r===void 0&&(r={}),new p(e,r,o)},p.rowsToColumns=function(e){var r,o;if(e){var n=[],t=e.length;for(r=0;r<t;r++){var s=e[r].length;for(o=0;o<s;o++)n[o]||(n[o]=[]),n[o][r]=e[r][o]}}return n},p.prototype.init=function(e,r,o){var n=e.decimalPoint;if(r&&(this.chartOptions=r),o&&(this.chart=o),n!=="."&&n!==","&&(n=void 0),this.options=e,this.columns=e.columns||this.rowsToColumns(e.rows)||[],this.firstRowAsNames=W(e.firstRowAsNames,this.firstRowAsNames,!0),this.decimalRegex=n&&new RegExp("^(-?[0-9]+)"+n+"([0-9]+)$"),this.liveDataTimeout!==void 0&&clearTimeout(this.liveDataTimeout),this.rawColumns=[],this.columns.length){this.dataFound();var t=!B(e)}t||(t=this.fetchLiveData()),t||(t=!!this.parseCSV().length),t||(t=!!this.parseTable().length),t||(t=this.parseGoogleSpreadsheet()),!t&&e.afterComplete&&e.afterComplete()},p.prototype.getColumnDistribution=function(){var e=this.chartOptions,r=this.options,o=[],n=function(i){return(w[i||"line"].prototype.pointArrayMap||[0]).length},t=e&&e.chart&&e.chart.type,s=[],l=[];r=r&&r.seriesMapping||e&&e.series&&e.series.map(function(){return{x:0}})||[];var f=0,d;(e&&e.series||[]).forEach(function(i){s.push(n(i.type||t))}),r.forEach(function(i){o.push(i.x||0)}),o.length===0&&o.push(0),r.forEach(function(i){var a=new ee,v=s[f]||n(t),D=(e&&e.series||[])[f]||{},R=w[D.type||t||"line"].prototype.pointArrayMap,Y=R||["y"];for((F(i.x)||D.isCartesian||!R)&&a.addColumnReader(i.x,"x"),re(i,function(L,m){m!=="x"&&a.addColumnReader(L,m)}),d=0;d<v;d++)a.hasReader(Y[d])||a.addColumnReader(void 0,Y[d]);l.push(a),f++}),r=w[t||"line"].prototype.pointArrayMap,typeof r>"u"&&(r=["y"]),this.valueCount={global:n(t),xColumns:o,individual:s,seriesBuilders:l,globalPointArrayMap:r}},p.prototype.dataFound=function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns)),this.getColumnDistribution(),this.parseTypes(),this.parsed()!==!1&&this.complete()},p.prototype.parseCSV=function(e){function r(m,S,O,E){function g(_){h=m[_],I=m[_-1],J=m[_+1]}function C(_){i.length<H+1&&i.push([_]),i[H][i[H].length-1]!==_&&i[H].push(_)}function M(){f>K||K>d?(++K,A=""):(!isNaN(parseFloat(A))&&isFinite(A)?(A=parseFloat(A),C("number")):isNaN(Date.parse(A))?C("string"):(A=A.replace(/\//g,"-"),C("date")),s.length<H+1&&s.push([]),O||(s[H][S]=A),A="",++H,++K)}var u=0,h="",I="",J="",A="",K=0,H=0;if(m.trim().length&&m.trim()[0]!=="#"){for(;u<m.length;u++)if(g(u),h==='"')for(g(++u);u<m.length&&(h!=='"'||I==='"'||J==='"');)(h!=='"'||h==='"'&&I!=='"')&&(A+=h),g(++u);else E&&E[h]?E[h](h,A)&&M():h===Y?M():A+=h;M()}}function o(m){var S=0,O=0,E=!1;return m.some(function(g,C){var M=!1,u="";if(13<C)return!0;for(var h=0;h<g.length;h++){C=g[h];var I=g[h+1],J=g[h-1];if(C==="#")break;if(C==='"')if(M){if(J!=='"'&&I!=='"'){for(;I===" "&&h<g.length;)I=g[++h];typeof a[I]<"u"&&a[I]++,M=!1}}else M=!0;else typeof a[C]<"u"?(u=u.trim(),isNaN(Date.parse(u))&&!isNaN(u)&&isFinite(u)||a[C]++,u=""):u+=C;C===","&&O++,C==="."&&S++}}),E=a[";"]>a[","]?";":",",l.decimalPoint||(l.decimalPoint=S>O?".":",",t.decimalRegex=new RegExp("^(-?[0-9]+)"+l.decimalPoint+"([0-9]+)$")),E}function n(m,S){var O=[],E=[],g=[],C=0,M=!1,u;for((!S||S>m.length)&&(S=m.length);C<S;C++)if(typeof m[C]<"u"&&m[C]&&m[C].length){var h=m[C].trim().replace(/\//g," ").replace(/\-/g," ").replace(/\./g," ").split(" ");for(g=["","",""],u=0;u<h.length;u++)u<g.length&&(h[u]=parseInt(h[u],10),h[u]&&(E[u]=!E[u]||E[u]<h[u]?h[u]:E[u],typeof O[u]<"u"?O[u]!==h[u]&&(O[u]=!1):O[u]=h[u],31<h[u]?g[u]=100>h[u]?"YY":"YYYY":12<h[u]&&31>=h[u]?(g[u]="dd",M=!0):g[u].length||(g[u]="mm")))}if(M){for(u=0;u<O.length;u++)O[u]!==!1?12<E[u]&&g[u]!=="YY"&&g[u]!=="YYYY"&&(g[u]="YY"):12<E[u]&&g[u]==="mm"&&(g[u]="dd");return g.length===3&&g[1]==="dd"&&g[2]==="dd"&&(g[2]="YY"),m=g.join("/"),(l.dateFormats||t.dateFormats)[m]?m:(te("deduceDateFailed"),"YYYY/mm/dd")}return"YYYY/mm/dd"}var t=this,s=this.columns=[],l=e||this.options,f=typeof l.startColumn<"u"&&l.startColumn?l.startColumn:0,d=l.endColumn||Number.MAX_VALUE,i=[],a={",":0,";":0,"	":0},v=l.csv;e=typeof l.startRow<"u"&&l.startRow?l.startRow:0;var D=l.endRow||Number.MAX_VALUE,R=0;if(v&&l.beforeParse&&(v=l.beforeParse.call(this,v)),v){if(v=v.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(l.lineDelimiter||`
`),(!e||0>e)&&(e=0),(!D||D>=v.length)&&(D=v.length-1),l.itemDelimiter)var Y=l.itemDelimiter;else Y=null,Y=o(v);var L=0;for(R=e;R<=D;R++)v[R][0]==="#"?L++:r(v[R],R-e-L);l.columnTypes&&l.columnTypes.length!==0||!i.length||!i[0].length||i[0][1]!=="date"||l.dateFormat||(l.dateFormat=n(s[0])),this.dataFound()}return s},p.prototype.parseTable=function(){var e=this.options,r=this.columns||[],o=e.startRow||0,n=e.endRow||Number.MAX_VALUE,t=e.startColumn||0,s=e.endColumn||Number.MAX_VALUE;return e.table&&(e=e.table,typeof e=="string"&&(e=$.getElementById(e)),[].forEach.call(e.getElementsByTagName("tr"),function(l,f){f>=o&&f<=n&&[].forEach.call(l.children,function(d,i){var a=r[i-t],v=1;if((d.tagName==="TD"||d.tagName==="TH")&&i>=t&&i<=s)for(r[i-t]||(r[i-t]=[]),r[i-t][f-o]=d.innerHTML;f-o>=v&&a[f-o-v]===void 0;)a[f-o-v]=null,v++})}),this.dataFound()),r},p.prototype.fetchLiveData=function(){function e(d){function i(a,v,D){function R(){t&&o.liveDataURL===a&&(r.liveDataTimeout=setTimeout(e,f))}return!a||!/^(http|\/|\.\/|\.\.\/)/.test(a)?(a&&n.error&&n.error("Invalid URL"),!1):(d&&(clearTimeout(r.liveDataTimeout),o.liveDataURL=a),N({url:a,dataType:D||"json",success:function(Y){o&&o.series&&v(Y),R()},error:function(Y,L){return 3>++l&&R(),n.error&&n.error(L,Y)}}),!0)}i(s.csvURL,function(a){o.update({data:{csv:a}})},"text")||i(s.rowsURL,function(a){o.update({data:{rows:a}})})||i(s.columnsURL,function(a){o.update({data:{columns:a}})})}var r=this,o=this.chart,n=this.options,t=n.enablePolling,s=V(n),l=0,f=1e3*(n.dataRefreshRate||2);return B(n)?(1e3>f&&(f=1e3),delete n.csvURL,delete n.rowsURL,delete n.columnsURL,e(!0),B(n)):!1},p.prototype.parseGoogleSpreadsheet=function(){function e(f){var d=["https://sheets.googleapis.com/v4/spreadsheets",n,"values",l(),"?alt=json&majorDimension=COLUMNS&valueRenderOption=UNFORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&key="+o.googleAPIKey].join("/");N({url:d,dataType:"json",success:function(i){f(i),o.enablePolling&&(r.liveDataTimeout=setTimeout(function(){e(f)},s))},error:function(i,a){return o.error&&o.error(a,i)}})}var r=this,o=this.options,n=o.googleSpreadsheetKey,t=this.chart,s=Math.max(1e3*(o.dataRefreshRate||2),4e3),l=function(){if(o.googleSpreadsheetRange)return o.googleSpreadsheetRange;var f=("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(o.startColumn||0)||"A")+((o.startRow||0)+1),d="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(W(o.endColumn,-1))||"ZZ";return F(o.endRow)&&(d+=o.endRow+1),""+f+":".concat(d)};return n&&(delete o.googleSpreadsheetKey,e(function(f){if(f=f.values,!f||f.length===0)return!1;var d=f.reduce(function(i,a){return Math.max(i,a.length)},0);f.forEach(function(i){for(var a=0;a<d;a++)typeof i[a]>"u"&&(i[a]=null)}),t&&t.series?t.update({data:{columns:f}}):(r.columns=f,r.dataFound())})),!1},p.prototype.trim=function(e,r){return typeof e=="string"&&(e=e.replace(/^\s+|\s+$/g,""),r&&/^[0-9\s]+$/.test(e)&&(e=e.replace(/\s/g,"")),this.decimalRegex&&(e=e.replace(this.decimalRegex,"$1.$2"))),e},p.prototype.parseTypes=function(){for(var e=this.columns||[],r=e.length;r--;)this.parseColumn(e[r],r)},p.prototype.parseColumn=function(e,r){var o=this.rawColumns,n=this.columns,t=this.firstRowAsNames,s=this.valueCount.xColumns.indexOf(r)!==-1,l=[],f=this.chartOptions,d=(this.options.columnTypes||[])[r];f=s&&(f&&f.xAxis&&ne(f.xAxis)[0].type==="category"||d==="string");var i=F(e.name),a=e.length,v,D;for(o[r]||(o[r]=[]);a--;){var R=l[a]||e[a],Y=this.trim(R),L=this.trim(R,!0),m=parseFloat(L);typeof o[r][a]>"u"&&(o[r][a]=Y),f||a===0&&t&&!i?e[a]=""+Y:+L===m?(e[a]=m,31536e6<m&&d!=="float"?e.isDatetime=!0:e.isNumeric=!0,typeof e[a+1]<"u"&&(D=m>e[a+1])):(Y&&Y.length&&(v=this.parseDate(R)),s&&q(v)&&d!=="float"?(l[a]=R,e[a]=v,e.isDatetime=!0,typeof e[a+1]<"u"&&(R=v>e[a+1],R!==D&&typeof D<"u"&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,a=e.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):e.unsorted=!0),D=R)):(e[a]=Y===""?null:Y,a!==0&&(e.isDatetime||e.isNumeric)&&(e.mixed=!0)))}if(s&&e.mixed&&(n[r]=o[r]),s&&D&&this.options.sort)for(r=0;r<n.length;r++)n[r].reverse(),t&&n[r].unshift(n[r].pop())},p.prototype.parseDate=function(e){var r=this.options.parseDate,o,n=this.options.dateFormat||this.dateFormat,t;if(r)var s=r(e);else if(typeof e=="string"){if(n)(r=this.dateFormats[n])||(r=this.dateFormats["YYYY/mm/dd"]),(t=e.match(r.regex))&&(s=r.parser(t));else for(o in this.dateFormats)if(r=this.dateFormats[o],t=e.match(r.regex)){this.dateFormat=o,this.alternativeFormat=r.alternative,s=r.parser(t);break}t||(e.match(/:.+(GMT|UTC|[Z+-])/)&&(e=e.replace(/\s*(?:GMT|UTC)?([+-])(\d\d)(\d\d)$/,"$1$2:$3").replace(/(?:\s+|GMT|UTC)([+-])/,"$1").replace(/(\d)\s*(?:GMT|UTC|Z)$/,"$1+00:00")),t=Date.parse(e),typeof t=="object"&&t!==null&&t.getTime?s=t.getTime()-6e4*t.getTimezoneOffset():q(t)&&(s=t-6e4*new Date(t).getTimezoneOffset()))}return s},p.prototype.getData=function(){if(this.columns)return this.rowsToColumns(this.columns).slice(1)},p.prototype.parsed=function(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)},p.prototype.complete=function(){var e=this.columns,r=this.options,o=[],n,t,s;if(r.complete||r.afterComplete){if(this.firstRowAsNames)for(t=0;t<e.length;t++){var l=e[t];F(l.name)||(l.name=W(l.shift(),"").toString())}l=[];var f=e.length,d=this.valueCount.seriesBuilders;t=[];var i=[];for(s=0;s<f;s+=1)t.push(!0);for(f=0;f<d.length;f+=1){var a=d[f].getReferencedColumnIndexes();for(s=0;s<a.length;s+=1)t[a[s]]=!1}for(s=0;s<t.length;s+=1)t[s]&&i.push(s);for(t=0;t<this.valueCount.seriesBuilders.length;t++)d=this.valueCount.seriesBuilders[t],d.populateColumns(i)&&o.push(d);for(;0<i.length;){for(d=new ee,d.addColumnReader(0,"x"),t=i.indexOf(0),t!==-1&&i.splice(t,1),t=0;t<this.valueCount.global;t++)d.addColumnReader(void 0,this.valueCount.globalPointArrayMap[t]);d.populateColumns(i)&&o.push(d)}if(0<o.length&&0<o[0].readers.length&&(i=e[o[0].readers[0].columnIndex],typeof i<"u"&&(i.isDatetime?n="datetime":i.isNumeric||(n="category"))),n==="category")for(t=0;t<o.length;t++)for(d=o[t],i=0;i<d.readers.length;i++)d.readers[i].configName==="x"&&(d.readers[i].configName="name");for(t=0;t<o.length;t++){for(d=o[t],i=[],s=0;s<e[0].length;s++)i[s]=d.read(e,s);l[t]={data:i},d.name&&(l[t].name=d.name),n==="category"&&(l[t].turboThreshold=0)}e={series:l},n&&(e.xAxis={type:n},n==="category"&&(e.xAxis.uniqueNames=!1)),r.complete&&r.complete(e),r.afterComplete&&r.afterComplete(e)}},p.prototype.update=function(e,r){var o=this.chart,n=o.options;e&&(e.afterComplete=function(t){t&&(t.xAxis&&o.xAxis[0]&&t.xAxis.type===o.xAxis[0].options.type&&delete t.xAxis,o.update(t,r,!0))},V(!0,n.data,e),n.data&&n.data.googleSpreadsheetKey&&!e.columns&&delete n.data.columns,this.init(n.data))},p}();x(T,"init",function(p){var e=this,r=p.args[1],o=c().data,n=p.args[0]||{};(o||n&&n.data)&&!e.hasDataDef&&(e.hasDataDef=!0,o=V(o,n.data),e.data=new b(Q(o,{afterComplete:function(t){var s;if(Object.hasOwnProperty.call(n,"series"))if(typeof n.series=="object")for(s=Math.max(n.series.length,t&&t.series?t.series.length:0);s--;){var l=n.series[s]||{};n.series[s]=V(l,t&&t.series?t.series[s]:{})}else delete n.series;n=V(t,n),e.init(n,r)}}),n,e),p.preventDefault())});var ee=function(){function p(){this.readers=[],this.pointIsArray=!0}return p.prototype.populateColumns=function(e){var r=!0;return this.readers.forEach(function(o){typeof o.columnIndex>"u"&&(o.columnIndex=e.shift())}),this.readers.forEach(function(o){typeof o.columnIndex>"u"&&(r=!1)}),r},p.prototype.read=function(e,r){var o=this.pointIsArray,n=o?[]:{};if(this.readers.forEach(function(s){var l=e[s.columnIndex][r];o?n.push(l):0<s.configName.indexOf(".")?Z.prototype.setNestedProperty(n,l,s.configName):n[s.configName]=l}),typeof this.name>"u"&&2<=this.readers.length){var t=this.getReferencedColumnIndexes();2<=t.length&&(t.shift(),t.sort(function(s,l){return s-l}),this.name=e[t.shift()].name)}return n},p.prototype.addColumnReader=function(e,r){this.readers.push({columnIndex:e,configName:r}),r!=="x"&&r!=="y"&&typeof r<"u"&&(this.pointIsArray=!1)},p.prototype.getReferencedColumnIndexes=function(){var e=[],r;for(r=0;r<this.readers.length;r+=1){var o=this.readers[r];typeof o.columnIndex<"u"&&e.push(o.columnIndex)}return e},p.prototype.hasReader=function(e){var r;for(r=0;r<this.readers.length;r+=1){var o=this.readers[r];if(o.configName===e)return!0}},p}();return b}),G(y,"masters/modules/data.src.js",[y["Core/Globals.js"],y["Core/HttpUtilities.js"],y["Extensions/Data.js"]],function(T,x,j){T.ajax=x.ajax,T.data=j.data,T.getJSON=x.getJSON,T.post=x.post,T.Data=j,T.HttpUtilities=x})})})(se);const ie=X,ae=oe({__proto__:null,default:ie},[X]);export{ae as d};