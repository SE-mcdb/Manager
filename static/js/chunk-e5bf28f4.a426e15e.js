(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5bf28f4"],{"1d75":function(t,e,a){"use strict";a("f10f")},"21bd":function(t,e,a){},b4a7:function(t,e,a){"use strict";a("21bd")},cf0f:function(t,e,a){"use strict";a.r(e);var d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{"data-source":t.data,columns:t.columns,showExpandColumn:!0},scopedSlots:t._u([{key:"expandedRowRender",fn:function(e,d){return[a("ChildForm",{attrs:{OrderColumns:t.OrderColumns,OrderData:t.OrderData[d]}})]}}])})],1)},n=[],r=a("1da1"),i=a("5530"),o=(a("96cf"),a("d81d"),a("a4d3"),a("e01a"),a("99af"),a("b775")),s=a("7424"),c=function(){var t="".concat(s["BASE_URL_IP"],"/api/need/getall");return Object(o["f"])(t,o["a"].GET)},l=function(t,e){var a="".concat(s["BASE_URL_IP"],"/api/order/byneed/").concat(t);return Object(o["f"])(a,e)},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{margin:"0","background-color":"lightgoldenrodyellow","font-size":"14px"}},[t._v("相关订单：")]),a("a-table",{staticStyle:{"background-color":"lightgoldenrodyellow"},attrs:{columns:t.OrderColumns,"data-source":t.OrderData,pagination:!1}})],1)},m=[],p={name:"ChildForm",props:{OrderColumns:{type:Array,default:""},OrderData:{type:Array,default:""},showExpandColumn:{type:Boolean,default:!0}}},h=p,f=(a("1d75"),a("2877")),_=Object(f["a"])(h,u,m,!1,null,"0f5a5568",null),w=_.exports,y=[{title:"需求ID",dataIndex:"need_id",scopedSlots:{customRender:"need_id"},width:80},{title:"发布用户",dataIndex:"enterprise_name",scopedSlots:{customRender:"enterprise_name"},width:150},{title:"需求名称",dataIndex:"title",scopedSlots:{customRender:"title"},width:230},{title:"开始时间",dataIndex:"start_time",scopedSlots:{customRender:"start_time"},width:150},{title:"结束时间",dataIndex:"end_time",scopedSlots:{customRender:"end_time"},width:150},{title:"关键词",dataIndex:"key_word",scopedSlots:{customRender:"key_word"},width:120},{title:"领域",dataIndex:"field",scopedSlots:{customRender:"field"},width:100},{title:"需求状态",dataIndex:"state",scopedSlots:{customRender:"state"},width:100},{title:"操作",dataIndex:"operation",width:80,scopedSlots:{customRender:"operation"}}],x=[],I=[{title:"订单ID",dataIndex:"order_id",key:"order_id",width:100,className:"ant-table-thead"},{title:"专家ID",dataIndex:"expert_id",key:"expert_id",width:100},{title:"专家姓名",dataIndex:"expert_name",key:"expert_name",width:100},{title:"专家电话",dataIndex:"phone",key:"phone",width:140},{title:"创建时间",dataIndex:"create_time",key:"create_time",width:200},{title:"结束时间",dataIndex:"end_time",key:"end_time",width:200},{title:"进行状态",dataIndex:"state",key:"state",width:100},{title:"操作",dataIndex:"operation",key:"operation",width:80}],b=[],g={name:"NeedForm",components:{ChildForm:w},data:function(){return this.cacheData=x.map((function(t){return Object(i["a"])({},t)})),{type:"",type1:0,data:x,columns:y,editingKey:"",OrderData:b,OrderColumns:I}},mounted:function(){this.init()},methods:{init:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loadNeed();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadNeed:function(){var t=this;this.loading=!0,x.length=0,b.length=0,c().then((function(e){for(var a=function(t){l(e.data.data[t].need_id,"get").then((function(a){x.push({need_id:e.data.data[t].need_id,enterprise_name:e.data.data[t].enterprise_name,title:e.data.data[t].title,description:e.data.data[t].description,start_time:e.data.data[t].start_time,money:e.data.data[t].money,key_word:e.data.data[t].key_word,end_time:e.data.data[t].end_time,field:e.data.data[t].field,state:e.data.data[t].state,emergency:e.data.data[t].emergency,predict:e.data.data[t].predict,real:e.data.data[t].real,order:a.data.data}),b.push(a.data.data)}))},d=0;d<e.data.data.length;d++)a(d);t.loading=!1})).catch((function(t){}))},handleChange:function(){this.loadNeed()},rowClassName:function(t,e){return"test"}}},k=g,O=(a("b4a7"),Object(f["a"])(k,d,n,!1,null,"a015378c",null));e["default"]=O.exports},f10f:function(t,e,a){}}]);