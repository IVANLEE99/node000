(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2395:function(e,t,r){},"2f1d":function(e,t,r){"use strict";var n=r("8e1d"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],s=(r("7c55"),r("2877")),i={},l=Object(s["a"])(i,a,o,!1,null,null,null),u=l.exports,c=r("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},m=d,b=(r("e212"),Object(s["a"])(m,h,v,!1,null,"df6a9e02",null)),g=b.exports,_={name:"Home",components:{HelloWorld:g}},k=_,U=Object(s["a"])(k,p,f,!1,null,null,null),y=(U.exports,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" 用户列表 "),r("Button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary"},on:{click:e.addUser}},[e._v("添加用户")]),r("Button",{attrs:{type:"primary"},on:{click:e.getUserLists}},[e._v("刷新")])],1),r("Table",{attrs:{columns:e.column,data:e.UserList},scopedSlots:e._u([{key:"option",fn:function(t){var n=t.row;t.index;return[r("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.modify(n)}}},[e._v("修改")]),r("Button",{attrs:{type:"error",size:"small"},on:{click:function(t){return e.remove(n)}}},[e._v("Delete")])]}},{key:"hobbies",fn:function(t){var n=t.row;t.index;return e._l(n.hobbies,(function(t,n){return r("label",{key:n},[e._v(e._s(0!=n?"--"+t:t))])}))}}])})],1)}),x=[],w=(r("96cf"),r("1da1")),j=r("bc3a"),S=r.n(j),E={name:"UserList",data:function(){return{UserList:[],column:[{title:"_id",key:"_id"},{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"兴趣爱好",slot:"hobbies"},{title:"邮箱",key:"email"},{title:"操作",slot:"option"}]}},methods:{getUserLists:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.$Spin.show(),t.next=4,S.a.get("/listUsers");case 4:r=t.sent,r.status,n=r.data,console.log(n),e.UserList=n||[],t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.$Spin.hide();case 14:setTimeout((function(){e.$Spin.hide()}),300);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},modify:function(e){this.$router.push({name:"UserUpdate",params:{user:e}})},remove:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e||!e._id){r.next=12;break}return r.prev=1,r.next=4,S.a.post("/removeUser",e);case 4:r.sent,t.$Message.info("删除成功~"),t.getUserLists(),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),t.$Message.error("删除失败~");case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},addUser:function(){this.$router.push({name:"UserAdd"})}},mounted:function(){this.getUserLists()},watch:{$route:{deep:!0,immediate:!0,handler:function(e,t){this.getUserLists()}}}},$=E,R=(r("2f1d"),Object(s["a"])($,y,x,!1,null,"1b86db99",null)),O=R.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.user&&e.user._id?r("h1",[e._v("修改用户")]):r("h1",[e._v("新增用户")]),r("Form",{attrs:{model:e.USER,"label-width":80}},[r("FormItem",{attrs:{label:"姓名"}},[r("Input",{attrs:{placeholder:"输入姓名"},model:{value:e.USER.name,callback:function(t){e.$set(e.USER,"name",t)},expression:"USER.name"}})],1),r("FormItem",{attrs:{label:"年龄"}},[r("InputNumber",{staticStyle:{width:"100%"},attrs:{max:200,min:1},model:{value:e.USER.age,callback:function(t){e.$set(e.USER,"age",t)},expression:"USER.age"}})],1),r("FormItem",{attrs:{label:"兴趣爱好"}},[r("CheckboxGroup",{model:{value:e.USER.hobbies,callback:function(t){e.$set(e.USER,"hobbies",t)},expression:"USER.hobbies"}},[r("Checkbox",{attrs:{label:"Eat"}}),r("Checkbox",{attrs:{label:"Sleep"}}),r("Checkbox",{attrs:{label:"Run"}}),r("Checkbox",{attrs:{label:"Movie"}})],1)],1),r("FormItem",{attrs:{label:"邮件地址:"}},[r("Input",{attrs:{placeholder:"输入邮件地址"},model:{value:e.USER.email,callback:function(t){e.$set(e.USER,"email",t)},expression:"USER.email"}})],1),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")]),r("Button",{staticStyle:{"margin-left":"8px"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},C=[],M=(r("b0c0"),{name:"UserDetail",props:{user:{type:Object,default:function(){return{}}}},data:function(){return{UserDetail:"",loading:!1,USER:{hobbies:[],name:"",age:"",email:""}}},watch:{user:{deep:!0,immediate:!0,handler:function(e,t){var r=e.hobbies,n=void 0===r?[]:r,a=e.name,o=e._id,s=void 0===o?"":o,i=e.age,l=void 0===i?"":i,u=e.email,c=void 0===u?"":u;this.USER=s?{hobbies:n,name:a,_id:s,age:l,email:c}:{hobbies:n,name:a,age:l,email:c}}}},methods:{submit:function(){this.user._id?this.update():this.add()},update:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,S.a.post("/modifyUser",e.USER);case 4:e.$Message.info("更新成功!"),e.$router.push({path:"/"}),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0),e.$Message.error("更新失败!");case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},add:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,S.a.post("/addUser",e.USER);case 4:e.$Message.info("新增成功!"),e.$router.push({path:"/"}),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0),e.$Message.error("新增失败!");case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},cancel:function(){this.$router.push({path:"/"})}}}),I=M,F=(r("b55a"),Object(s["a"])(I,L,C,!1,null,"8bacf170",null)),P=F.exports;n["default"].use(c["a"]);var B=[{path:"/UserList",name:"UserList",component:O},{path:"/UserAdd",name:"UserAdd",component:P},{path:"/UserUpdate",name:"UserUpdate",component:P,props:!0},{path:"*",redirect:"/UserList"}],T=new c["a"]({routes:B}),A=T,D=r("f825"),H=r.n(D);r("f8ce");S.a.defaults.baseURL="/",n["default"].use(H.a),n["default"].config.productionTip=!1,new n["default"]({router:A,render:function(e){return e(u)}}).$mount("#app")},"5a39":function(e,t,r){},"7c55":function(e,t,r){"use strict";var n=r("2395"),a=r.n(n);a.a},"8e1d":function(e,t,r){},b55a:function(e,t,r){"use strict";var n=r("c692"),a=r.n(n);a.a},c692:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},e212:function(e,t,r){"use strict";var n=r("5a39"),a=r.n(n);a.a}});
//# sourceMappingURL=app.2a57685d.js.map