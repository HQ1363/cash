(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{z2ja:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("MVZn"));a("miYZ");var s=r(a("tsqr")),u=r(a("o0o1")),d=a("dCQc"),c={namespace:"adminUser",state:{data:{data:[],total:0},searchData:{}},effects:{get:u.default.mark(function e(t,a){var r,n,s,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,e.next=4,n(d.AdminUser,r);case 4:return c=e.sent,e.next=7,s({type:"setState",payload:{data:c}});case 7:case"end":return e.stop()}},e,this)}),update:u.default.mark(function e(t,a){var r,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.id,c=a.call,e.next=4,c(d.updateUser,r,n);case 4:s.default.success("\u66f4\u4fee\u6539\u6210\u529f");case 5:case"end":return e.stop()}},e,this)})},reducers:{setState(e,t){var a=t.payload;return(0,n.default)({},e,a)}}};t.default=c}}]);