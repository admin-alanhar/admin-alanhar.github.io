(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-602d66db"],{"159b":function(t,e,a){var i=a("da84"),s=a("fdbc"),n=a("17c2"),r=a("9112");for(var c in s){var o=i[c],l=o&&o.prototype;if(l&&l.forEach!==n)try{r(l,"forEach",n)}catch(d){l.forEach=n}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,s=a("a640"),n=a("ae40"),r=s("forEach"),c=n("forEach");t.exports=r&&c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},2469:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"h3 mb-4 text-gray-800"},[t._v("Pengumuman "),a("router-link",{staticClass:"btn btn-secondary float-right",attrs:{to:"/info/add"}},[t._v("Tambah Pengumuman")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card shadow mb-4"},[t._m(0),a("div",{staticClass:"card-body"},[t.news<=0?a("p",[t._v("Data masih kosong")]):t._e(),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"row"},t._l(t.news,(function(e){return a("div",{key:e.key,staticClass:"col-lg-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("span",[t._v(t._s(e.title))])]),a("div",{staticClass:"card-body",domProps:{innerHTML:t._s(e.desc)}}),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"btn-group float-right"},[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return t.deleteInfo(e.key)}}},[t._v("Hapus")])])])])])})),0)])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header py-3"},[a("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("List Pengumuman")])])}],n=(a("4160"),a("159b"),a("8aa5")),r=a.n(n),c={name:"Info",data:function(){return{news:[],firestore:r.a.firestore().collection("news")}},created:function(){var t=this;this.firestore.onSnapshot((function(e){t.news=[],e.forEach((function(e){t.news.push({key:e.id,title:e.data().title,desc:e.data().desc})}))}))},methods:{deleteInfo:function(t){var e=this;this.$confirm("Apakah kamu ingin menghapus data ini?").then((function(){r.a.firestore().collection("news").doc(t).delete().then((function(){e.$fire({title:"Berhasil",text:"Data berhasil dihapus",type:"success",timer:3e3})})).catch((function(t){alert("Error while removing.. ".concat(t))}))}))}}},o=c,l=a("2877"),d=Object(l["a"])(o,i,s,!1,null,null,null);e["default"]=d.exports},4160:function(t,e,a){"use strict";var i=a("23e7"),s=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-602d66db.93872603.js.map