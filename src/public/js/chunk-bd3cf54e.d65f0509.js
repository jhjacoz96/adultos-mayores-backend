(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd3cf54e"],{"1f4f":function(t,e,s){"use strict";s("a9e3");var a=s("5530"),o=(s("8b37"),s("80d2")),r=s("7560"),i=s("58df");e["a"]=Object(i["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},8801:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-section",{attrs:{id:"pro-features"}},[a("v-img",{staticClass:"mx-auto mb-8",attrs:{src:s("9b19"),"max-width":"128"}}),a("base-section-heading",{attrs:{title:"Feature Comparison"}},[t._v(" Get the PRO version of "),a("strong",[t._v("Zero")]),t._v(" and level up your theme"),a("br"),t._v("with additional components, pages, and Free updates. ")]),a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"7"}},[a("v-simple-table",[a("thead",[a("tr",[a("th"),a("th",{staticClass:"body-1 font-weight-bold text-center"},[t._v(" What's in the Demo? ")]),a("th",{staticClass:"body-1 font-weight-bold text-center"},[t._v(" What's in the PRO version? ")])])]),a("tbody",{staticClass:"body-1"},t._l(t.features,(function(e,s){var o=e[0],r=e[1],i=e[2];return a("tr",{key:s},[a("td",{domProps:{textContent:t._s(o)}}),a("td",{staticClass:"text-center font-weight-bold"},["boolean"===typeof r?[a("v-icon",{attrs:{color:r?"success":"error"}},[t._v(" mdi-"+t._s(r?"check":"close")+" ")])]:[t._v(" "+t._s(r)+" ")]],2),a("td",{staticClass:"text-center font-weight-bold"},["boolean"===typeof i?[a("v-icon",{attrs:{color:i?"success":"error"}},[t._v(" mdi-"+t._s(i?"check":"close")+" ")])]:[t._v(" "+t._s(i)+" ")]],2)])})),0)])],1),a("v-col",{attrs:{cols:"12",md:"5"}},[a("v-card",{staticClass:"mb-12",attrs:{elevation:"16"}},[a("base-img",{attrs:{"max-width":"100%",src:"https://cdn.vuetifyjs.com/store/themes/zero/pro.png"}})],1),a("div",{staticClass:"text-center"},[a("base-btn",{attrs:{tile:!1,color:"primary",href:"https://store.vuetifyjs.com/product/zero-theme-pro/?ref=vtyd-pro-page-features",rounded:""}},[t._v(" Buy Pro Now "),a("v-icon",{attrs:{right:""}},[t._v(" mdi-rocket ")])],1)],1)],1)],1)],1)],1)},o=[],r={name:"SectionProChart",data:function(){return{features:[["Components",23,"40+"],["Example Pages",3,10],["Bugfixes and Issues",!0,!0],["Vue CLI Support",!0,!0],["News, Project, and Pricing Pages",!1,!0],["6 Months Free Updates",!1,!0],["Price","Free","$60"]]}}},i=r,n=s("2877"),c=s("6544"),d=s.n(c),l=s("b0af"),h=s("62ad"),p=s("a523"),u=s("132d"),b=s("adda"),v=s("0fd9"),f=s("1f4f"),m=Object(n["a"])(i,a,o,!1,null,null,null);e["default"]=m.exports;d()(m,{VCard:l["a"],VCol:h["a"],VContainer:p["a"],VIcon:u["a"],VImg:b["a"],VRow:v["a"],VSimpleTable:f["a"]})},"8b37":function(t,e,s){},"9b19":function(t,e,s){t.exports=s.p+"img/logo.376fe171.svg"}}]);
//# sourceMappingURL=chunk-bd3cf54e.d65f0509.js.map