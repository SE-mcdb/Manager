(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d41fa5"],{"4b11":function(t,e,n){"use strict";n("76c1")},"76c1":function(t,e,n){},"88eb":function(t,e){t.exports={messages:{CN:{add:"添加",delete:"删除",save:"保存",cancel:"取消",edit:"编辑",deleteConfirm:"是否要删除此行？",newMember:"新增成员",table:{name:"成员姓名",number:"工号",department:"所属部门",operation:"操作"}},HK:{add:"添加",delete:"刪除",save:"保存",cancel:"取消",edit:"編輯",deleteConfirm:"是否要刪除此行？",newMember:"新增成員",table:{name:"成員姓名",number:"工號",department:"所屬部門",operation:"操作"}},US:{add:"add",delete:"delete",save:"save",cancel:"cancel",edit:"edit",deleteConfirm:"Confirm to delete this row?",newMember:"new member",table:{name:"Member Name",number:"Job Number",department:"Department",operation:"Operation"}}}}},"97e9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{attrs:{bordered:!1}},[n("h2",[t._v("选择用户类型")]),n("a-space",[n("a-select",{ref:"select",staticStyle:{width:"120px"},attrs:{disabled:!t.changeable},on:{change:t.selectChange},model:{value:t.selectedType,callback:function(e){t.selectedType=e},expression:"selectedType"}},[n("a-select-option",{attrs:{value:"0"}},[t._v("普通用户")]),n("a-select-option",{attrs:{value:"1"}},[t._v("专家认证中")]),n("a-select-option",{attrs:{value:"2"}},[t._v("企业认证中")]),n("a-select-option",{attrs:{value:"3"}},[t._v("封禁中")]),n("a-select-option",{attrs:{value:"4"}},[t._v("认证专家")]),n("a-select-option",{attrs:{value:"5"}},[t._v("认证企业")]),n("a-select-option",{attrs:{value:"6"}},[t._v("全部")])],1)],1),n("br"),n("br"),n("a-table",{key:t.itemKey,attrs:{"data-source":t.data,columns:t.columns,pagination:t.pagination},scopedSlots:t._u([t._l(["name","ins","email","type"],(function(e){return{key:e,fn:function(a,i){return[n("div",{key:e},[i.editable?n("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:a},on:{change:function(n){return t.handleChange(n.target.value,i.key,e)}}}):[t._v(" "+t._s(a)+" ")]],2)]}}})),{key:"operation",fn:function(e,a){return[n("div",{staticClass:"editable-row-operations"},[a.editable?n("span",[n("a-space",[n("a",{on:{click:function(){return t.save(a.key)}}},[t._v("Save")]),n("a-popconfirm",{attrs:{title:"Sure to cancel?"},on:{confirm:function(){return t.cancel(a.key)}}},[n("a",[t._v("Cancel")])])],1)],1):n("span",[n("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(a.key)}}},[t._v("Edit")])])]),t.data.length?n("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return t.onDelete(a.key)}}},[n("a",{attrs:{href:"javascript:0;"}},[t._v("Delete")])]):t._e()]}}],null,!0)})],1)},i=[],r=n("2909"),c=n("1da1"),o=n("5530"),u=(n("96cf"),n("d81d"),n("4de4"),n("b0c0"),n("d3b7"),n("ac8f")),d=[{title:"用户名",dataIndex:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"所属机构",dataIndex:"ins",width:"25%",scopedSlots:{customRender:"ins"}},{title:"邮箱",dataIndex:"email",width:"20%",scopedSlots:{customRender:"email"}},{title:"用户类型",dataIndex:"type",width:"15%",scopedSlots:{customRender:"type"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],s=[],l={name:"UserForm",inject:["reload"],i18n:n("88eb"),data:function(){var t=this;return this.cacheData=s.map((function(t){return Object(o["a"])({},t)})),{type:"",type1:0,data:s,columns:d,editingKey:"",changeable:!0,selectedType:"全部",pagination:{current:1,onChange:function(e){t.changeable?(t.$forceUpdate(),Object(u["k"])("全部"===t.selectedType?6:t.selectedType,e).then((function(n){var a=n.data;s.length=0;for(var i=0;i<a.data.length;i++)0==a.data[i].type?t.type="普通用户":1==a.data[i].type?t.type="专家认证中":2==a.data[i].type?t.type="企业认证中":3==a.data[i].type?t.type="封禁中":4==a.data[i].type?t.type="认证专家":5==a.data[i].type&&(t.type="认证企业"),s.push({key:a.data[i].id,name:a.data[i].username,ins:a.data[i].institution,type:t.type,email:a.data[i].email,editable:!1});t.totalCnt=a.data.total_count,t.loading=!1,t.pagination.current=e})).catch((function(t){}))):alert("请完成修改后再切换页面！")},total:10},itemKey:""}},watch:{editingKey:function(t){this.changeable=""===t}},mounted:function(){this.init()},methods:{init:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loadUser();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadUser:function(){var t=this;this.loading=!0,s.length=0,this.pagination.current=1,Object(u["k"])(6,1).then((function(e){for(var n=0;n<s.length;n++)s[n].target=!1;var a=e.data;s.length=0;for(var i=0;i<a.data.length;i++)0==a.data[i].type?t.type="普通用户":1==a.data[i].type?t.type="专家认证中":2==a.data[i].type?t.type="企业认证中":3==a.data[i].type?t.type="封禁中":4==a.data[i].type?t.type="认证专家":5==a.data[i].type&&(t.type="认证企业"),s.push({key:a.data[i].id,name:a.data[i].username,ins:a.data[i].institution,type:t.type,email:a.data[i].email});t.totalCnt=a.data.total_count,t.loading=!1,t.pagination.total=a.page_num})).catch((function(t){}))},onDelete:function(t){var e=this,n=Object(r["a"])(this.data);this.data=n.filter((function(e){return e.key!==t}));var a=n.filter((function(e){return t===e.key}))[0];"个人"==a.type?this.type1=0:"学校"==a.type?this.type1=1:this.type1=2;var i={id:a.key,name:a.name,usertype:this.type1,institution:a.ins,mail:a.email},c=this;Object(u["b"])(i).then((function(t){e.$message.info("成功删除")})).then((function(t){c.reload()})).catch((function(t){}))},handleChange:function(){this.loadUser()},edit:function(t){for(var e=Object(r["a"])(this.data),n=0;n<e.length;n++);var a=e.filter((function(e){return t===e.key}))[0];this.editingKey=t,a&&(a.editable=!0,this.data=e)},save:function(t){var e=this,n=Object(r["a"])(this.data),a=Object(r["a"])(this.cacheData),i=n.filter((function(e){return t===e.key}))[0],c=a.filter((function(e){return t===e.key}))[0];i&&c&&(delete i.editable,this.data=n,Object.assign(c,i),this.cacheData=a),this.editingKey="","个人"==i.type?this.type1=0:"学校"==i.type?this.type1=1:this.type1=2;var o={id:i.key,name:i.name,institution:i.ins,mail:i.email},d=this;Object(u["c"])(o).then((function(t){e.$message.info("成功修改")})).then((function(t){d.reload()})).catch((function(t){e.$message.error("无法修改")})),i&&(Object.assign(i,this.cacheData.filter((function(e){return t===e.key}))[0]),delete i.editable,this.data=n),this.reload()},cancel:function(t){var e=this,n=new Promise((function(n,a){var i=Object(r["a"])(e.data),c=i.filter((function(e){return t===e.key}))[0];e.editingKey="",c&&(Object.assign(c,e.cacheData.filter((function(e){return t===e.key}))[0]),delete c.editable,e.data=i),n()}));n.then(e.reload())},selectChange:function(t){var e=this;this.changeable?(this.pagination.current=1,Object(u["k"])(this.selectedType,1).then((function(t){var n=t.data;s.length=0;for(var a=0;a<n.data.length;a++)0==n.data[a].type?e.type="普通用户":1==n.data[a].type?e.type="专家认证中":2==n.data[a].type?e.type="企业认证中":3==n.data[a].type?e.type="封禁中":4==n.data[a].type?e.type="认证专家":5==n.data[a].type&&(e.type="认证企业"),s.push({key:n.data[a].id,name:n.data[a].username,ins:n.data[a].institution,type:e.type,email:n.data[a].email,editable:!1});e.totalCnt=n.data.total_count,e.loading=!1,e.pagination.total=n.page_num,e.itemKey=Math.random()})).catch((function(t){}))):alert("请先完成编辑！")}}},p=l,f=(n("4b11"),n("2877")),h=Object(f["a"])(p,a,i,!1,null,"91099fde",null);e["default"]=h.exports},ac8f:function(t,e,n){"use strict";n.d(e,"n",(function(){return r})),n.d(e,"q",(function(){return c})),n.d(e,"p",(function(){return o})),n.d(e,"o",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"m",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"f",(function(){return y})),n.d(e,"e",(function(){return m})),n.d(e,"g",(function(){return g})),n.d(e,"l",(function(){return b})),n.d(e,"k",(function(){return v})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return j}));n("1da1"),n("96cf"),n("99af");var a=n("7424"),i=n("b775");var r=function(t){var e="Interpretation",n=a["BASE_URL_IP"]+"/api/".concat(e,"/getkeywords");return Object(i["f"])(n,"get",t)},c=function(t){var e=a["BASE_URL_IP"]+"/api/recommend";return Object(i["f"])(e,"get",t)},o=function(t){var e="Interpretation",n=a["BASE_URL_IP"]+"/api/".concat(e,"/getvis");return Object(i["f"])(n,"get",t)},u=function(t){var e="Interpretation",n=a["BASE_URL_IP"]+"/api/".concat(e,"/gettags");return Object(i["f"])(n,"get",t)},d=function(t,e){var n=a["BASE_URL_IP"]+"/api/comment";return Object(i["f"])(n,t,e)},s=function(t){var e=a["BASE_URL_IP"]+"/api/user/profile";return t?Object(i["f"])(e,"get",{user_id:t}):Object(i["f"])(e,"get")},l=function(t,e,n,r){var c=1===e?"Interpretation":"Note",o=a["BASE_URL_IP"]+"/api/".concat(c,"/").concat(t);return Object(i["f"])(o,n,r)},p=function(t){if(null===t||void 0===t)return"无";var e=new Date(t),n=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),a=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getHours()<10?"0"+e.getHours():e.getHours();return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(i,":").concat(a,":").concat(n)},f=function(t){return t?Object(i["f"])(a["PaperAll"],"get",{user_id:t}):Object(i["f"])(a["PaperAll"],"get")},h=function(t,e){var n=a["BASE_URL_IP"]+"/api/comment/create";return Object(i["f"])(n,t,e)},y=function(t,e){var n=a["BASE_URL_IP"]+"/api/comment/delete";return Object(i["f"])(n,t,e)},m=function(t){var e=a["BASE_URL_IP"]+"/api/discussion/create";return Object(i["f"])(e,"post",t)},g=function(t,e){var n=a["BASE_URL_IP"]+"/api/discussion/delete";return Object(i["f"])(n,t,e)},b=function(t){return t?Object(i["f"])(a["UserAll"],"get",{user_id:t}):Object(i["f"])(a["UserAll"],"get")},v=function(t,e){var n=a["BASE_URL_IP"]+"/api/user/".concat(t,"/all/").concat(e);return Object(i["f"])(n,"get")},_=function(t){var e=a["BASE_URL_IP"]+"/api/user/delete";return Object(i["f"])(e,"post",t)},j=function(t){var e=a["BASE_URL_IP"]+"/api/user/changeinfo";return Object(i["f"])(e,"post",t)}}}]);