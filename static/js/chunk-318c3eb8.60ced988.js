(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-318c3eb8"],{4127:function(t,e,n){},"47ef":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-layout",{attrs:{avatar:t.currUser.avatar}},[n("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.welcome.timeFix[t.lang])+"，"+t._s(t.currUser.name)+"，"+t._s(t.welcome.message[t.lang])+" ")]),n("div",[t._v(t._s(t.currUser.position[t.lang]))])]),n("template",{slot:"extra"},[n("head-info",{staticClass:"split-right",attrs:{title:"用户数量",content:t.user}}),n("head-info",{staticClass:"split-right",attrs:{title:"解读数量",content:t.paper}}),n("head-info",{staticClass:"split-right",attrs:{title:"解读访问量",content:t.visit}})],1),n("div",{class:["analysis",t.layout,t.pageWidth]},[n("a-card",{staticStyle:{"margin-top":"24px"},attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"24px"}}},[n("div",{staticClass:"salesCard"},[n("a-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[n("div",{staticClass:"extra-wrap",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"}),n("a-tab-pane",{key:"1",attrs:{tab:t.$t("visits")}},[n("a-row",[n("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[n("bar",{attrs:{title:t.$ta("visits|trend","p")}})],1),n("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[n("ranking-list",{attrs:{title:t.$ta("stores|visits|ranking","p"),list:t.rankList}})],1)],1)],1)],1)],1)]),n("a-row",{staticStyle:{margin:"0 -12px"}},[n("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[n("a-card",{staticStyle:{"margin-top":"24px"},attrs:{loading:t.loading,bordered:!1,title:t.$t("search")}},[n("hot-search")],1)],1),n("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[n("a-card",{staticStyle:{"margin-top":"24px"},attrs:{loading:t.loading,bordered:!1,title:t.$t("proportion")}},[n("sales-data")],1)],1)],1)],1)],2)},r=[],i=n("5530"),s=n("45eb"),o=n("779e"),c=n("5880"),u=n("edd9"),l=n("6653"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot-search"},[n("a-table",{attrs:{dataSource:t.searchData,columns:t.tableColumns,pagination:{style:{marginBottom:0}},size:"small",rowKey:"index"},scopedSlots:t._u([{key:"keyword",fn:function(e){return n("a",{attrs:{href:"javascript:0"}},[t._v(t._s(e))])}},{key:"rang",fn:function(e){return n("span",{},[t._v(t._s(e)+" %"),n("a-icon",{attrs:{type:"caret-up"}})],1)}}])})],1)},f=[],p=n("1da1"),h=(n("b0c0"),n("d81d"),n("96cf"),n("ac8f")),g=[],m=[{dataIndex:"index",key:"rank"},{dataIndex:"keyword",key:"keyword",scopedSlots:{customRender:"keyword"}},{dataIndex:"count",key:"count"}],v={name:"HotSearch",i18n:n("6a72"),data:function(){return{searchData:g,columns:m}},created:function(){this.init()},methods:{init:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loadData();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadData:function(){this.loading=!0,g.length=0,Object(h["n"])().then((function(t){for(var e=0;e<8;e++)g.push({index:e+1,keyword:t.data[e].name,count:t.data[e].count,status:Math.floor(10*Math.random()%2)})})).catch((function(t){}))}},computed:{tableColumns:function(){var t=this,e=this.columns;return e.map((function(e){return e.title=t.$t(e.key),e}))}}},b=v,y=(n("d0d3"),n("2877")),_=Object(y["a"])(b,d,f,!1,null,"a4d6ffbe",null),x=_.exports,j=n("b775"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.data,scale:t.scale}},[n("v-tooltip",{attrs:{showTitle:!1,dataKey:"item*percent"}}),n("v-axis"),n("v-legend",{attrs:{dataKey:"item",position:"right",offsetX:-80}}),n("v-pie",{attrs:{position:"percent",color:"item",vStyle:t.pieStyle,label:t.labelConfig}}),n("v-coord",{attrs:{type:"theta",radius:.75,innerRadius:.6}})],1)],1)},k=[],S=n("40ba"),O=[],C=[{dataKey:"percent",min:0,formatter:".0%"}],E=(new S.View).source(O);E.transform({type:"percent",field:"count",dimension:"item",as:"percent"});var R=E.rows,I={name:"SalesData",data:function(){return{data:R,scale:C,height:375,pieStyle:{stroke:"#fff",lineWidth:1},labelConfig:["percent",{formatter:function(t,e){return e.point.item+": "+t}}]}},created:function(){var t=this;Object(h["o"])().then((function(e){for(var n=0;n<8;n++)O.push({item:e.data[n].name,count:e.data[n].count});var a=(new S.View).source(O);a.transform({type:"percent",field:"count",dimension:"item",as:"percent"}),t.data=a.rows}))},methods:{init:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.gettags();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},A=I,U=Object(y["a"])(A,w,k,!1,null,"1d7ddccc",null),B=U.exports,L=[],P={name:"Analysis",i18n:n("6aa0"),data:function(){return{user:"597",visit:"300",paper:"20",rankList:L,loading:!0,projects:[],activities:[],teams:[],welcome:{timeFix:"",message:""}}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["mapState"])("setting",["layout","pageWidth"])),Object(c["mapState"])("account",{currUser:"user"})),Object(c["mapState"])("setting",["lang"])),created:function(){var t=this;setTimeout((function(){return t.loading=!t.loading}),1e3),Object(j["f"])("/user/welcome",j["a"].GET).then((function(e){return t.welcome=e.data})),Object(j["f"])("/work/activity",j["a"].GET).then((function(e){return t.activities=e.data})),Object(j["f"])("/work/team",j["a"].GET).then((function(e){return t.teams=e.data})),Object(j["f"])("/project",j["a"].GET).then((function(e){t.projects=e.data})),Object(h["q"])().then((function(t){for(var e=0;e<8;e++)L.push({name:t.data[e].title,total:t.data[e].viscount})})),Object(h["p"])().then((function(e){t.visit=e.data.totcount+163})),Object(h["j"])().then((function(e){t.paper=e.data.length})),Object(h["l"])().then((function(e){t.user=e.data.count}))},components:{SalesData:B,HotSearch:x,RankingList:l["a"],Bar:u["a"],PageLayout:s["a"],HeadInfo:o["a"]}},D=P,$=(n("5cc2"),Object(y["a"])(D,a,r,!1,null,"6aff6b33",null)),H=$.exports;e["default"]=H},4994:function(t,e,n){},"4d2a":function(t,e,n){},"5cc2":function(t,e,n){"use strict";n("4127")},6627:function(t,e,n){"use strict";n("cee4")},6653:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rank"},[n("h4",{staticClass:"title"},[t._v(t._s(t.title))]),n("ul",{staticClass:"list"},t._l(t.list,(function(e,a){return n("li",{key:a},[n("span",{class:a<3?"active":null},[t._v(t._s(a+1))]),n("span",[t._v(t._s(e.name))]),n("span",[t._v(t._s(e.total))])])})),0)])},r=[],i={name:"RankingList",props:["title","list"]},s=i,o=(n("f9e7"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,"327c33df",null);e["a"]=c.exports},"6a72":function(t,e){t.exports={messages:{CN:{search:"搜索用户数",capita:"人均搜索次数",rank:"排名",keyword:"搜索关键词",count:"搜索数",range:"周涨幅",introduce:"指标说明"},HK:{search:"搜索用戶數",capita:"人均搜索次數",rank:"排名",keyword:"搜索關鍵詞",count:"用戶數",range:"周漲幅",introduce:"指標說明"},US:{search:"Search Users",capita:"Per Capita Search",rank:"Rank",keyword:"Keyword",users:"Users",range:"Weekly Range",introduce:"Introduce"}}}},"6aa0":function(t,e){t.exports={messages:{CN:{introduce:"指标说明",totalSales:"总销售额",visits:"访问量",payments:"支付笔数",operating:"运营活动效果",wow:"同周比",dod:"日环比",sales:"销售额",daily:"日均",day:"今日",week:"本周",month:"本月",year:"本年",search:"热门搜索",proportion:"解读占比",conversion:"转化率",trend:"趋势",ranking:"排行榜",all:"全渠道",online:"线上",stores:"解读"},HK:{introduce:"指標說明",totalSales:"總銷售額",visits:"訪問量",payments:"支付筆數",operating:"運營活動效果",wow:"通周比",dod:"日環比",sales:"銷售額",daily:"日均",day:"今日",week:"本週",month:"本月",year:"本年",search:"熱門搜索",proportion:"銷售額佔比",conversion:"轉化率",trend:"趨勢",ranking:"排行榜",all:"全渠道",online:"線上",stores:"門店"},US:{introduce:"Introduce",totalSales:"Total Sales",visits:"Visits",payments:"Payments",operating:"Operational Effect",wow:"WoW Change",dod:"DoD Change",sales:"Sales",daily:"Daily",day:"All Day",week:"All Week",month:"All Month",year:"All Year",search:"Hot Search",proportion:"The Proportion Of Sales",conversion:"Conversion Rate",trend:"Trend",ranking:"Ranking",all:"All",online:"Online",stores:"Stores"}}}},7536:function(t,e,n){"use strict";n("4994")},"779e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-info"},[n("span",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.content))])])},r=[],i={name:"HeadInfo",props:["title","content","bordered"]},s=i,o=(n("6627"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,"46a43dda",null);e["a"]=c.exports},"9ec5":function(t,e,n){},ac8f:function(t,e,n){"use strict";n.d(e,"n",(function(){return i})),n.d(e,"q",(function(){return s})),n.d(e,"p",(function(){return o})),n.d(e,"o",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"m",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"j",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"f",(function(){return g})),n.d(e,"e",(function(){return m})),n.d(e,"g",(function(){return v})),n.d(e,"l",(function(){return b})),n.d(e,"k",(function(){return y})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return x}));n("1da1"),n("96cf"),n("99af");var a=n("7424"),r=n("b775");var i=function(t){var e="Interpretation",n=a["BASE_URL_IP"]+"/api/".concat(e,"/getkeywords");return Object(r["f"])(n,"get",t)},s=function(t){var e=a["BASE_URL_IP"]+"/api/recommend";return Object(r["f"])(e,"get",t)},o=function(t){var e="Interpretation",n=a["BASE_URL_IP"]+"/api/".concat(e,"/getvis");return Object(r["f"])(n,"get",t)},c=function(t){var e="Interpretation",n=a["BASE_URL_IP"]+"/api/".concat(e,"/gettags");return Object(r["f"])(n,"get",t)},u=function(t,e){var n=a["BASE_URL_IP"]+"/api/comment";return Object(r["f"])(n,t,e)},l=function(t){var e=a["BASE_URL_IP"]+"/api/user/profile";return t?Object(r["f"])(e,"get",{user_id:t}):Object(r["f"])(e,"get")},d=function(t,e,n,i){var s=1===e?"Interpretation":"Note",o=a["BASE_URL_IP"]+"/api/".concat(s,"/").concat(t);return Object(r["f"])(o,n,i)},f=function(t){if(null===t||void 0===t)return"无";var e=new Date(t),n=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),a=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),r=e.getHours()<10?"0"+e.getHours():e.getHours();return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(r,":").concat(a,":").concat(n)},p=function(t){return t?Object(r["f"])(a["PaperAll"],"get",{user_id:t}):Object(r["f"])(a["PaperAll"],"get")},h=function(t,e){var n=a["BASE_URL_IP"]+"/api/comment/create";return Object(r["f"])(n,t,e)},g=function(t,e){var n=a["BASE_URL_IP"]+"/api/comment/delete";return Object(r["f"])(n,t,e)},m=function(t){var e=a["BASE_URL_IP"]+"/api/discussion/create";return Object(r["f"])(e,"post",t)},v=function(t,e){var n=a["BASE_URL_IP"]+"/api/discussion/delete";return Object(r["f"])(n,t,e)},b=function(t){return t?Object(r["f"])(a["UserAll"],"get",{user_id:t}):Object(r["f"])(a["UserAll"],"get")},y=function(t,e){var n=a["BASE_URL_IP"]+"/api/user/".concat(t,"/all/").concat(e);return Object(r["f"])(n,"get")},_=function(t){var e=a["BASE_URL_IP"]+"/api/user/delete";return Object(r["f"])(e,"post",t)},x=function(t){var e=a["BASE_URL_IP"]+"/api/user/changeinfo";return Object(r["f"])(e,"post",t)}},cee4:function(t,e,n){},d0d3:function(t,e,n){"use strict";n("4d2a")},edd9:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar"},[n("h4",[t._v(t._s(t.title))]),n("div",{staticClass:"chart"},[n("v-chart",{attrs:{"force-fit":!0,height:"312",data:t.data,padding:[24,0,0,0]}},[n("v-tooltip"),n("v-axis"),n("v-bar",{attrs:{position:"x*y"}})],1)],1)])},r=[],i=n("ac8f"),s=[];s.push({x:"1月",y:30}),s.push({x:"2月",y:71}),s.push({x:"3月",y:45}),s.push({x:"4月",y:17}),s.push({x:"5月",y:910});var o=["x*y",function(t,e){return{name:t,value:e}}],c=[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:22}],u={name:"Bar",props:["title"],data:function(){return{data:s,scale:c,tooltip:o}},created:function(){Object(i["p"])().then((function(t){s.push({x:"6月",y:t.data.totcount-910})}))}},l=u,d=(n("7536"),n("2877")),f=Object(d["a"])(l,a,r,!1,null,"335a910f",null);e["a"]=f.exports},f9e7:function(t,e,n){"use strict";n("9ec5")}}]);