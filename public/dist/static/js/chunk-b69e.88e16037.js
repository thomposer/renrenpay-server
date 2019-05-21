(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b69e"],{"3NST":function(t,e,a){"use strict";var i=a("HKbb");a.n(i).a},C5dt:function(t,e,a){"use strict";var i=a("QbLZ"),r=a.n(i),s=a("0FX9"),n=a.n(s),l=a("L2JU"),o={props:{qrcode:String,payway:String,amount:Number},ws:null,computed:r()({},Object(l.c)(["user"])),mounted:function(){var t=this;this.ws=new WebSocket("wss://ws2.renrenpay.info?user=_"+this.user.info.id,"echo-protocol"),this.ws.onopen=function(e){n.a.toCanvas(t.$el.querySelector(".qrcode-canvas"),t.qrcode,{width:300})},this.ws.onmessage=function(e){try{var a=JSON.parse(e.data);1==a.paySuccess?t.$emit("success",a):t.$emit("fail")}catch(t){alert(t)}}},methods:{close:function(){this.ws.close()}}},c=(a("3NST"),a("KHd+")),u=Object(c.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pay-comp",class:{wepay:2==t.payway,alipay:1==t.payway}},[1==t.payway?a("div",{staticClass:"deposit-title"},[a("svg-icon",{attrs:{"icon-class":"zhifubao"}}),t._v(" 支付宝\n    ")],1):t._e(),t._v(" "),2==t.payway?a("div",{staticClass:"deposit-title"},[a("svg-icon",{attrs:{"icon-class":"wepay"}}),t._v(" 微信支付\n    ")],1):t._e(),t._v(" "),a("div",{staticClass:"deposit-num"},[a("span",{staticClass:"num-widget"},[t._v("￥")]),t._v("\n        "+t._s(t.amount/100)+"\n    ")]),t._v(" "),a("canvas",{staticClass:"qrcode-canvas"})])},[],!1,null,"549a193a",null);u.options.__file="Pay.vue";e.a=u.exports},GXXr:function(t,e,a){},HKbb:function(t,e,a){},WabG:function(t,e,a){"use strict";var i=a("GXXr");a.n(i).a},fy5U:function(t,e,a){"use strict";a.r(e);var i=a("14Xm"),r=a.n(i),s=a("D3Ub"),n=a.n(s),l=a("t3Un"),o=function(t){var e=t.name,a=void 0===e?"":e,i=t.callback_url,r=void 0===i?"":i,s=t.whitelist,n=t.pay_userid;return Object(l.a)({url:"/api/apps/create",method:"post",data:{name:a,callback_url:r,whitelist:s,pay_userid:n}})},c=function(t){var e=t.page,a=void 0===e?1:e,i=t.page_size,r=void 0===i?10:i;return Object(l.a)({url:"/api/apps/list",method:"get",params:{page:a,page_size:r}})},u=function(t){var e=t.name,a=t.callback_url,i=t.whitelist,r=t.id,s=t.pay_userid;return Object(l.a)({url:"/api/apps/update_appinfo",method:"post",data:{name:e,callback_url:a,whitelist:i,id:r,pay_userid:s}})},p=function(t){var e=t.id;return Object(l.a)({url:"/api/delete_app",method:"post",data:{id:e}})},d=function(t){var e=t.appid,a=t.payway,i=t.amount;return Object(l.a)({url:"/api/apps/test",method:"post",data:{appid:e,payway:a,amount:i}})},m=a("QqA1"),b=a.n(m),v={data:function(){return{loading:!1,total:0,visible:!1,editVisible:!1,list:[],createBtnLoading:!1,editBtnLoading:!1,form:{page:1,page_size:10},createForm:{name:"",callback_url:"",whitelist:"",pay_userid:""},editForm:{},createRules:{name:[{required:!0,message:"请输入应用名称",trigger:"blur"}],callback_url:[{required:!0,message:"请输入回调地址",trigger:"blur"}],whitelist:[{required:!0,message:"请输入IP白名单",trigger:"blur"}],pay_userid:[{required:!0,message:"请输入支付宝的user_id",trigger:"blur"}]},testVisible:!1,testLoading:!1,testStep:1,testQrcode:"",testForm:{appid:"",payway:"2",amount:"0.01"}}},components:{Pay:a("C5dt").a},watch:{testVisible:function(t){t&&(this.testStep=1)}},created:function(){this.fetch()},methods:{fetch:function(){var t=this;return n()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,c(t.form);case 3:if(a=e.sent,t.loading=!1,null!==a){e.next=7;break}return e.abrupt("return");case 7:t.list=a.rows,t.total=a.count;case 9:case"end":return e.stop()}},e,t)}))()},createApp:function(){var t=this;return n()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.createComp.validate(function(){var e=n()(r.a.mark(function e(a){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return t.createBtnLoading=!0,e.next=5,o(t.createForm);case 5:if(i=e.sent,t.createBtnLoading=!1,null!==i){e.next=9;break}return e.abrupt("return");case 9:t.visible=!1,t.$message({type:"success",message:"创建app成功"}),t.list.unshift(i),t.$refs.createComp.resetFields();case 13:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,t)}))()},edit:function(t){this.editForm=t,this.editVisible=!0},editSubmit:function(){var t=this;return n()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.editComp.validate(function(){var e=n()(r.a.mark(function e(a){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return t.editBtnLoading=!0,e.next=5,u(t.editForm);case 5:if(i=e.sent,t.editBtnLoading=!1,null!==i){e.next=9;break}return e.abrupt("return");case 9:t.$message({type:"success",message:"编辑成功"}),t.editVisible=!1;case 11:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,t)}))()},deleteItem:function(t,e){var a=this,i=t.id,s=t.name;this.$confirm('确定要删除 <b style="color:#F56C6C">'+s+"</b> ?","删除",{confirmButtonText:"确定",cancelButtomText:"取消",dangerouslyUseHTMLString:!0}).then(n()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p({id:i});case 2:if(null!==t.sent){t.next=5;break}return t.abrupt("return");case 5:a.$message({type:"success",message:"删除成功"}),a.list.splice(e,1);case 7:case"end":return t.stop()}},t,a)}))).catch(function(){})},test:function(t){b()(this.testForm,t),this.testVisible=!0},testSubmit:function(){var t=this;return n()(r.a.mark(function e(){var a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.testLoading=!0,(a=b()({},t.testForm)).amount*=100,e.next=5,d(a);case 5:if(i=e.sent,t.testLoading=!1,null!==i){e.next=9;break}return e.abrupt("return");case 9:t.testQrcode=i.qrcode,t.testStep=2;case 11:case"end":return e.stop()}},e,t)}))()},testSuccess:function(t){var e=2==t.payway?"微信":"支付宝";this.$message({type:"success",message:"测试成功，"+e+"已收到"+t.amount/100+"元"}),this.testVisible=!1}}},f=(a("WabG"),a("KHd+")),_=Object(f.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-index-page"},[a("div",{staticClass:"cell"},[a("div",{staticClass:"cell-hd primary"}),t._v(" "),a("div",{staticClass:"cell-ft"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.visible=!0}}},[t._v("创建应用")])],1)]),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.list,loading:t.loading,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"callback_url",label:"回调地址","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"whitelist",label:"IP白名单","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"appid",label:"AppID","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"appsecret",label:"AppSecret","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"创建时间","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("审核通过")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.edit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){t.test(e.row)}}},[t._v("测试")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.deleteItem(e.row,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"text-align":"right","margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.form.page},on:{"update:currentPage":function(e){t.$set(t.form,"page",e)}}}),t._v(" "),a("el-dialog",{attrs:{title:"创建应用",visible:t.visible,width:"40%"},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"createComp",attrs:{model:t.createForm,rules:t.createRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"应用名称",prop:"name"}},[a("el-input",{model:{value:t.createForm.name,callback:function(e){t.$set(t.createForm,"name",e)},expression:"createForm.name"}}),t._v(" "),a("div",{staticClass:"input-hint"},[t._v("警告：内容禁止包含色情、枪支、毒品、赌博等非法内容")])],1),t._v(" "),a("el-form-item",{attrs:{label:"回调地址",prop:"callback_url"}},[a("el-input",{model:{value:t.createForm.callback_url,callback:function(e){t.$set(t.createForm,"callback_url",e)},expression:"createForm.callback_url"}}),t._v(" "),a("div",{staticClass:"input-hint"},[t._v("注意区分http和https，用户支付成功后将调用此地址")])],1),t._v(" "),a("el-form-item",{attrs:{label:"IP白名单",prop:"whitelist"}},[a("el-input",{model:{value:t.createForm.whitelist,callback:function(e){t.$set(t.createForm,"whitelist",e)},expression:"createForm.whitelist"}}),t._v(" "),a("div",{staticClass:"input-hint"},[t._v('当前域名对应的服务器IP(解析域名时对应的IP),如：192.168.10.24(多个IP时，请用半角逗号","隔开，例：192.168.10.24,192.168.10.25)')])],1),t._v(" "),a("el-form-item",{attrs:{label:"支付宝id",prop:"pay_userid"}},[a("el-input",{model:{value:t.createForm.pay_userid,callback:function(e){t.$set(t.createForm,"pay_userid",e)},expression:"createForm.pay_userid"}}),t._v(" "),a("div",{staticClass:"input-hint"},[t._v("\n                    用于支付宝支付回调，\n                    "),a("a",{attrs:{href:"https://jingyan.baidu.com/article/3065b3b6e8c6dabecff8a42d.html",target:"_blank"}},[t._v("如何和获取支付宝id?")])])],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.createBtnLoading},on:{click:t.createApp}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑应用",visible:t.editVisible,width:"40%"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{ref:"editComp",attrs:{model:t.editForm,rules:t.createRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"应用名称",prop:"name"}},[a("el-input",{model:{value:t.editForm.name,callback:function(e){t.$set(t.editForm,"name",e)},expression:"editForm.name"}}),t._v(" "),a("div",{staticClass:"input-hint"},[t._v("警告：网站内容禁止包含色情、枪支、毒品、赌博等非法内容")])],1),t._v(" "),a("el-form-item",{attrs:{label:"回调地址",prop:"callback_url"}},[a("el-input",{model:{value:t.editForm.callback_url,callback:function(e){t.$set(t.editForm,"callback_url",e)},expression:"editForm.callback_url"}}),t._v(" "),a("div",{staticClass:"input-hint"},[t._v("注意区分http和https")])],1),t._v(" "),a("el-form-item",{attrs:{label:"IP白名单",prop:"whitelist"}},[a("el-input",{model:{value:t.editForm.whitelist,callback:function(e){t.$set(t.editForm,"whitelist",e)},expression:"editForm.whitelist"}}),t._v(" "),a("div",{staticClass:"input-hint"},[t._v('当前域名对应的服务器IP(解析域名时对应的IP),如：192.168.10.24(多个IP时，请用半角逗号","隔开，例：192.168.10.24,192.168.10.25)')])],1),t._v(" "),a("el-form-item",{attrs:{label:"支付宝id",prop:"pay_userid"}},[a("el-input",{model:{value:t.editForm.pay_userid,callback:function(e){t.$set(t.editForm,"pay_userid",e)},expression:"editForm.pay_userid"}}),t._v(" "),a("div",{staticClass:"input-hint"},[a("a",{attrs:{href:"https://jingyan.baidu.com/article/3065b3b6e8c6dabecff8a42d.html",target:"_blank"}},[t._v("如何和获取支付宝id?")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"AppID"}},[a("el-input",{attrs:{disabled:""},model:{value:t.editForm.appid,callback:function(e){t.$set(t.editForm,"appid",e)},expression:"editForm.appid"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"AppSecret"}},[a("el-input",{attrs:{disabled:""},model:{value:t.editForm.appsecret,callback:function(e){t.$set(t.editForm,"appsecret",e)},expression:"editForm.appsecret"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editBtnLoading},on:{click:t.editSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"测试应用",visible:t.testVisible,width:"40%"},on:{"update:visible":function(e){t.testVisible=e}}},[1==t.testStep?[a("el-form",{ref:"testComp",attrs:{model:t.testForm,rules:t.createRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"AppID"}},[a("el-input",{attrs:{disabled:""},model:{value:t.testForm.appid,callback:function(e){t.$set(t.testForm,"appid",e)},expression:"testForm.appid"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"AppSecret"}},[a("el-input",{attrs:{disabled:""},model:{value:t.testForm.appsecret,callback:function(e){t.$set(t.testForm,"appsecret",e)},expression:"testForm.appsecret"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"金额",prop:"amount"}},[a("el-input",{model:{value:t.testForm.amount,callback:function(e){t.$set(t.testForm,"amount",e)},expression:"testForm.amount"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"支付类型",prop:"payway"}},[a("el-radio",{attrs:{label:"2"},model:{value:t.testForm.payway,callback:function(e){t.$set(t.testForm,"payway",e)},expression:"testForm.payway"}},[t._v("微信")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.testForm.payway,callback:function(e){t.$set(t.testForm,"payway",e)},expression:"testForm.payway"}},[t._v("支付宝")])],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.testVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.testLoading},on:{click:t.testSubmit}},[t._v("开始测试")])],1)]:t._e(),t._v(" "),2==t.testStep?a("pay",{attrs:{amount:100*t.testForm.amount,payway:t.testForm.payway,qrcode:t.testQrcode},on:{success:t.testSuccess}}):t._e()],2)],1)},[],!1,null,"00346527",null);_.options.__file="index.vue";e.default=_.exports}}]);