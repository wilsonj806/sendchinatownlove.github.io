(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[10,15],{109:function(e,t,n){"use strict";n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"i",(function(){return _})),n.d(t,"h",(function(){return h})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return w})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return E}));var r=n(106),a=n.n(r),u=n(107),c=n(117),o=n.n(c),i=(n(118),"https://api.sendchinatownlove.com/"),s=i+"sellers/",l=i+"charges",f=i+"gift_cards/",d=i+"participating_sellers/",m=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(s,{params:{locale:y(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(s+t,{params:{locale:y(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,c,i,s){var f,d,m,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=c.email,d=c.name,m=c.idempotency_key,p=c.is_subscribed,e.next=5,o.a.post(l,{is_square:!0,nonce:t,line_items:r,email:f,name:d,seller_id:n,idempotency_key:m,is_subscribed:p,is_distribution:i,campaign_id:s},{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw e}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a,u,c){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get(f+t).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.put(f+t,{amount:n}).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get(s+t+"/gift_cards/"+n).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function y(e){switch(e){case"cn":return"zh-CN";case"en":default:return"en"}}var g=function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://api.sendchinatownlove.com/campaigns/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://api.sendchinatownlove.com/distributors/"+t).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get(d+t).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get(d+t+"/tickets/"+n).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},120:function(e,t,n){e.exports=n.p+"static/media/404-error-image.f72ee016.png"},132:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(4),a=n(0),u=n.n(a),c=n(5),o=n(120),i=n.n(o);function s(){var e=Object(r.a)(["\n  font-weight: 450;\n  font-size: 1rem;\n  a {\n    color: #a7182d;\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n  font-weight: 400;\n  margin: 0.2rem auto;\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)(["\n  font-weight: 600;\n"]);return f=function(){return e},e}function d(){var e=Object(r.a)(["\n  margin: 0 auto;\n  width: 80%;\n  text-align: center;\n  display: ",";\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"]);return d=function(){return e},e}function m(){var e=Object(r.a)(["\n  width: 80%;\n  max-width: 480px;\n  margin: 0 auto;\n"]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  font-family: futura;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return p=function(){return e},e}var _=function(e){return u.a.createElement(h,null,u.a.createElement(v,{menuOpen:e.menuOpen},u.a.createElement(b,{src:i.a,alt:"error"}),u.a.createElement(y,null," Sorry Your Dumpling Was Not Found! "),u.a.createElement(g,null," ","The page you are trying does not exist or has been moved."),u.a.createElement(g,null,"Please try going back to the homepage."),u.a.createElement(w,null,u.a.createElement("a",{href:"https://sendchinatownlove.com/"},"GO TO HOMEPAGE"))))},h=c.a.main(p()),b=c.a.img(m()),v=c.a.div(d(),(function(e){return e.menuOpen?"none":"flex"})),y=c.a.div(f()),g=c.a.div(l()),w=c.a.div(s())},234:function(e,t,n){e.exports={"button--filled":"styles_button--filled__3g-mZ","button--red-filled":"styles_button--red-filled__2hfQJ","button--outlined":"styles_button--outlined__1u9dK","button--redfilled":"styles_button--redfilled__1v7Uq","modalButton--back":"styles_modalButton--back__3fUEz","modalButton--outlined":"styles_modalButton--outlined__32v29","modalButton--filled":"styles_modalButton--filled__UrmGO","modalButton--nonfunctional":"styles_modalButton--nonfunctional__22Qm-","modalButton--selected":"styles_modalButton--selected__1JgjQ","modalButton--outline":"styles_modalButton--outline__2dPxe","closeButton--close":"styles_closeButton--close__2HmZM","modalForm--form":"styles_modalForm--form__3yk9T","modalInput--input":"styles_modalInput--input__3ZDiJ","filterable-table-container":"styles_filterable-table-container__3Djf-","header-row":"styles_header-row__1GHCT","filter-container":"styles_filter-container__1DUSK","filter-input":"styles_filter-input__ir8Rf","clear-filter":"styles_clear-filter__2EGMJ","record-count":"styles_record-count__1zy20",fa:"styles_fa__upKlt",active:"styles_active__2qlTg",disabled:"styles_disabled__2Bs57",header:"styles_header__QrHY9",metadataHeader:"styles_metadataHeader__3_rTB",metadataBlock:"styles_metadataBlock__mvj0_",noBreak:"styles_noBreak__1Tp9O"}},262:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(106),a=n.n(r),u=n(107),c=n(12),o=n(0),i=n.n(o),s=n(3),l=n(109),f=n(33),d=n(234),m=n.n(d),p=n(132),_=n(235),h=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],d=Object(o.useState)(!0),h=Object(c.a)(d,2),b=h[0],v=h[1],y=Object(o.useState)(),g=Object(c.a)(y,2),w=g[0],O=g[1],E=Object(o.useState)(),j=Object(c.a)(E,2),k=j[0],x=j[1],B=Object(s.g)().location.pathname.match(/\/[^/]+/g).map((function(e){return e.replace("/","")})),N={sellerId:B[0],secretId:B[2]},S=function(){var e=Object(u.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.c)(N.sellerId,N.secretId);case 3:return t=e.sent.data,e.next=6,Object(l.f)(N.sellerId);case 6:n=e.sent.data,O(t),x(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r(!0);case 14:v(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){S()}),[]);var F=function(e){return Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumSignificantDigits:4}).format(e.value/100)},D=function(e){return new Date(e.value).toISOString().substring(0,10)},I=[{name:"seller_gift_card_id",displayName:"Voucher Code \n \u793c\u54c1\u5238\u53f7\u7801",inputFilterable:!0,sortable:!0},{name:"email",displayName:"Email \n \u7535\u5b50\u90ae\u4ef6",inputFilterable:!0,sortable:!0},{name:"value",displayName:"Original Amount \n \u8d2d\u4e70\u91d1\u989d",inputFilterable:!0,sortable:!0,render:F},{name:"created_at",displayName:"Date Purchased \n \u8d2d\u4e70\u65e5\u671f",inputFilterable:!0,sortable:!0,render:D}];return i.a.createElement(i.a.Fragment,null,b?i.a.createElement(f.b,{isPage:!0}):n?i.a.createElement(p.default,{menuOpen:!1}):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:m.a.header},i.a.createElement("h1",null,"Voucher Tracker ",i.a.createElement("span",{className:m.a.noBreak},"\u793c\u54c1\u5238\u8bb0\u5f55")),i.a.createElement("h2",null,k.name)),i.a.createElement("div",{className:m.a.metadataHeader},i.a.createElement("div",{className:m.a.metadataBlock},i.a.createElement("h1",null,"Last Updated"," ",i.a.createElement("span",{className:m.a.noBreak},"\u4e0a\u6b21\u66f4\u65b0\u65f6\u95f4")),i.a.createElement("h2",null,D({value:new Date}))),i.a.createElement("div",{className:m.a.metadataBlock},i.a.createElement("h1",null,"Active Vouchers"," ",i.a.createElement("span",{className:m.a.noBreak},"\u53ef\u4f7f\u7528\u7684\u793c\u54c1\u5238\u6570\u91cf")),i.a.createElement("h2",null,w&&w.length)),i.a.createElement("div",{className:m.a.metadataBlock},i.a.createElement("h1",null,"Total Balance ",i.a.createElement("span",{className:m.a.noBreak},"\u603b\u7ed3\u4f59")),i.a.createElement("h2",null,F({value:w.reduce((function(e,t){return e+t.value}),0)})))),i.a.createElement(_,{namespace:"Vouchers",initialSort:"seller_gift_card_id",data:w,fields:I,noRecordsMessage:"No vouchers in our system yet!",noFilteredRecordsMessage:"No vouchers found for filter",topPagerVisible:!1,pageSize:20,pageSizes:null,recordCountName:"Voucher",recordCountNamePlural:"Vouchers"})))}}}]);
//# sourceMappingURL=10.fd476166.chunk.js.map