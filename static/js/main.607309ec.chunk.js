(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[3],{18:function(e,n,t){"use strict";t.d(n,"e",(function(){return a})),t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return l})),t.d(n,"f",(function(){return c})),t.d(n,"g",(function(){return u}));var a="SET_MODAL_VIEW",r="SET_AMOUNT",o="CLOSE_MODAL",i="CLEAR_FORMS",c="SET_SELLER_DATA",u="UPDATE_SELLER_DATA",l=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/},21:function(e,n,t){"use strict";t.r(n),t.d(n,"SET_VIEW",(function(){return a})),t.d(n,"SET_AMOUNT",(function(){return r})),t.d(n,"SET_VOUCHER_INFO",(function(){return o}));var a="SET_VIEW",r="SET_AMOUNT",o="SET_VOUCHER_INFO"},38:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(3),r=t(0),o=t(90),i=t(4);function c(){var e=Object(a.a)(["\n  width: 100%;\n  height: 74vh;\n"]);return c=function(){return e},e}function u(){var e=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  div {\n    color: #ab192e;\n    ",";\n  }\n"]);return u=function(){return e},e}n.b=function(e){var n=e.isPage,t=e.size;return r.createElement(l,{isPage:n,size:t},r.createElement(o.a,null))};var l=i.a.div(u(),(function(e){return e.isPage?"100vh":"100%"}),(function(e){return e.size&&"\n      width: ".concat(e.size,"!important;\n      height: ").concat(e.size,"!important;\n    ")})),s=i.a.div(c())},47:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"d",(function(){return m})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return r}));var a=t(14),r=t(21),o=t(0),i=t.n(o);var c=t(13),u=function(e,n){var t=i.a.createContext(n),r=i.a.createContext((function(){return null}));return[function(o){var c=o.children,u=i.a.useReducer(e,n),l=Object(a.a)(u,2),s=l[0],m=l[1];return i.a.createElement(r.Provider,{value:m},i.a.createElement(t.Provider,{value:s},c))},function(){var e=i.a.useContext(t);if(void 0===e)throw new Error("useVoucherState must be used within a CountProvider");return e},function(){var e=i.a.useContext(r);if(void 0===e)throw new Error("useVoucherDispatch must be used within a CountProvider");return e}]}((function(e,n){var t=n.type,a=n.payload;switch(t){case r.SET_VIEW:return Object(c.a)({},e,{view:a});case r.SET_AMOUNT:return Object(c.a)({},e,{amount:a});case r.SET_VOUCHER_INFO:return Object(c.a)({},e,{voucher:a});default:return e}}),{amount:0,view:0,voucher:{amount:0,created_at:"",expiration:"",gift_card_id:"",id:-1,item_id:-1,receipt_id:"",recipient_id:-1,seller_gift_card_id:"",updated_at:"",storeImage:"",storeName:"",sellerID:"",single_use:!1,location:{line1:"",line2:""}}}),l=Object(a.a)(u,3),s=l[0],m=l[1],d=l[2]},48:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return h}));var a=t(14),r=t(0),o=t.n(r),i={amount:"5",customInput:!1,modalView:-1,sellerData:{id:0,seller_id:"",cuisine_name:"",name:"",target_amount:0,amount_raised:0,num_contributions:0,num_donations:0,num_gift_cards:0,donation_amount:0,gift_card_amount:0,progress_bar_color:"",summary:"",story:"",accept_donations:!0,sell_gift_cards:!0,owner_name:"",owner_image_url:"",hero_image_url:"",business_type:"",num_employees:0,founded_year:0,website_url:"",menu_url:"",cost_per_meal:0,gallery_image_urls:[],non_profit_location_id:"",logo_image_url:""}},c=t(13),u=t(18),l=function(e,n){var t=n.type,a=n.payload;switch(t){case u.e:return Object(c.a)({},e,{modalView:a});case u.d:return Object(c.a)({},e,{amount:a});case u.f:return Object(c.a)({},e,{sellerData:a});case u.g:return Object(c.a)({},e,{sellerData:Object(c.a)({},e.sellerData,{amount_raised:a})});case u.b:return Object(c.a)({},e,{modalView:-1,customInput:!1,amount:i.amount});case u.a:return i;default:return e}},s=o.a.createContext(i),m=o.a.createContext((function(){return null})),d=function(e){var n=o.a.useReducer(l,i),t=Object(a.a)(n,2),r=t[0],c=t[1];return o.a.createElement(s.Provider,{value:r},o.a.createElement(m.Provider,{value:c},e.children))};function h(){var e=o.a.useContext(s);if(void 0===e)throw new Error("useModalPaymentState must be used within a CountProvider");return e}function f(){var e=o.a.useContext(m);if(void 0===e)throw new Error("useModalPaymentDispatch must be used within a CountProvider");return e}},49:function(e,n,t){"use strict";var a=t(38);t.d(n,"b",(function(){return a.b})),t.d(n,"a",(function(){return a.a}))},53:function(e,n,t){},54:function(e,n,t){e.exports=t.p+"static/media/logo.909f1479.svg"},57:function(e){e.exports=JSON.parse('{"paymentProcessing":{"amount":{"header":"Please select an amount or enter a custom amount","label1":"Select an amount","label2":"Or enter any amount","minimum":"Minimum","maximum":"Maximum","amount":"amount","submit":"Next"}},"navBar":{"header":{"home":"HOME","merchants":"DONATE"},"languages":{"english":"ENG","chinese":"\u4e2d\u6587"}},"buyMeal":{"header":"Gift a meal for ","subheader":"Send Chinatown Love will connect merchants with local organizations that will distribute your gifted meals to a community in need.","prompt":"Please enter how many meals to gift","explanationFirst":"By gifting a meal, your donation will still go directly to the merchant.","explanationSecond":"Our partners will then distribute vouchers with those who can benefit the most from a free meal.","totalLabel":"Total: ","endsIn":"Ends in","ended":"Ended","days":"days","lastContributionMade":"Last contribution made","ago":"ago","toTarget":"to target","outOf":"out of","meals":"meals"},"purchase":{"donation":"Donation for ","voucher":"Voucher for "},"errorPage":{"body":{"header":"Sorry Your Dumpling Was Not Found","subHeader1":"The page you are trying does not exist or has been moved.","subHeader2":"Please try going back to the homepage.","link":"GO TO HOMEPAGE"}},"merchantsPage":{"platformInfoHeader":"Our Chinatown","platformInfoDescription":"We are providing an online platform to low-tech, cash-only, Asian-owned small businesses that have been disproportionately impacted by COVID-19.","platformInfoAction":"Support local merchants by making a donation or purchasing a voucher from them.","flyerAsk":"Know of any business owners that fit our target merchant?","flyerDownload":"Download our flyer to share with them."},"merchantNavBar":{"all":"All","brooklyn":"Brooklyn","manhattan":"Manhattan","queens":"Queens"},"donationPool":{"header":"Checked out our merchants but not sure who to donate to first?","description1":"You can support by donating to our donation pool!","description2":"All donations will be distributed evenly to our merchants.","button":"SUPPORT CHINATOWN!"},"contributionBar":{"header":"Total Raised","vouchers":"VOUCHERS","donations":"DONATIONS","footer":"100% of all proceeds go to the businesses, and we cover the credit card processing fees."},"descriptionBox":{"header":"Meet our Target Merchant","bullet1":"Asian immigrant-owned small businesses","bullet2":"Not fluent in English, run cash-only establishments, and not tech-savvy","bullet3":"Currently struggling to pay rent, utility bills and employee wages","bullet4":"Do not have websites, online delivery services, or vouchers available","bullet5":"Located in NYC Manhattan Chinatown, Flushing, or Bensonhurst"},"storeDetails":{"storyHeader":"Story"},"ownerPanel":{"donation":"Donation","voucher":"Voucher","extraInfo":{"Type":"Type","Employees":"Employees","Founded":"Founded","Website":"Website","Menu":"Menu"}},"donationBox":{"header":"Not sure who to donate to?","description":"To support every merchant on this page, contribute to our donation pool. We distribute funds evenly across all businesses.","button":"DONATE"},"gamBox":{"header":"Learn about Gift-a-Meal","description":"Double the impact of your donation by gifting meals from our merchants to local organizations that will distribute your gifted meals to our community in need.","button":"GIFT MEAL"}}')},58:function(e){e.exports=JSON.parse('{"paymentProcessing":{"amount":{"header":"Please select an amount or enter a custom amount","label1":"Select an amount","label2":"Or enter any amount","minimum":"Minimum","maximum":"Maximum","amount":"amount","submit":"Next"}},"navBar":{"header":{"home":"HOME","merchants":"DONATE"},"languages":{"english":"ENG","chinese":"\u4e2d\u6587"}},"buyMeal":{"header":"Gift a meal for ","subheader":"Send Chinatown Love will connect merchants with local organizations that will distribute your gifted meals to our community in need.","prompt":"Please enter how many meals to gift","explanationFirst":"By gifting a meal, your donation will still go directly to the merchant.","explanationSecond":"Our partners will then distribute vouchers with those who can benefit the most from a free meal.","totalLabel":"Total: ","endsIn":"Ends in","ended":"Ended","days":"days","lastContributionMade":"Last contribution made","ago":"ago","toTarget":"to target","outOf":"out of","meals":"meals"},"purchase":{"donation":"Donation for ","voucher":"Voucher for "},"errorPage":{"body":{"header":"Sorry Your Dumpling Was Not Found","subHeader1":"The page you are trying does not exist or has been moved.","subHeader2":"Please try going back to the homepage.","link":"GO TO HOMEPAGE"}},"merchantsPage":{"platformInfoHeader":"\u6211\u4eec\u7684\u4e2d\u56fd\u57ce","platformInfoDescription":"\u6211\u4eec\u4f1a\u63d0\u4f9b\u7f51\u4e0a\u5e73\u53f0\u53bb\u5e2e\u52a9\u4e00\u4e9b\u53d7\u5230\u75ab\u60c5\u5f71\u54cd\u7684\u4f20\u7edf\u7684\uff0c\u4e0d\u4f1a\u4f7f\u7528\u79d1\u6280\u7684\uff0c\u53ea\u6536\u73b0\u91d1\u7684\u4e9a\u6d32\u534e\u4eba\u5546\u5bb6\u3002","platformInfoAction":"\u6211\u4eec\u5c06\u4f1a\u901a\u8fc7\u52df\u96c6\u63a5\u53d7\u6350\u6b3e\u6216\u793c\u54c1\u5238\u53bb\u5e2e\u52a9\u4ed6\u4eec","flyerAsk":"Know of any business owners that fit our target merchant?","flyerDownload":"Download our flyer to share with them."},"merchantNavBar":{"all":"\u6240\u6709\u7684\u5e97\u94fa","brooklyn":"\u5e03\u9c81\u514b\u6797\u533a","manhattan":"\u66fc\u54c8\u987f","queens":"\u7687\u540e\u533a"},"donationPool":{"header":"\u5982\u679c\u4f60\u4e0d\u592a\u786e\u5b9a\u6350\u6b3e\u7ed9\u54ea\u4e2a\u5546\u5bb6\uff1f","description1":"\u6211\u4eec\u4f1a\u628a\u4f60\u7684\u6350\u6b3e\u5e73\u5747\u5206\u914d\u7ed9\u5546\u5bb6","description2":"","button":"\u8bf7\u652f\u6301\u4e2d\u56fd\u57ce!"},"contributionBar":{"header":"\u7b79\u6b3e\u603b\u989d","vouchers":"\u4ee3\u91d1\u5238","donations":"\u6350\u6b3e","footer":"\u6240\u6709\u7684\u6536\u76ca\u5c06\u4f1a\u5230\u6240\u9700\u7684\u5546\u5bb6\u624b\u91cc\uff0c\u514d\u4fe1\u7528\u5361\u624b\u7eed\u8d39"},"descriptionBox":{"header":"\u6211\u4eec\u76ee\u6807\u5546\u4eba\u6709","bullet1":"\u4e9a\u6d32\u79fb\u6c11\u521b\u529e\u7684\u5c0f\u751f\u610f","bullet2":"\u82f1\u8bed\u4e0a\u4e0d\u6d41\u7545\uff0c\u4ee5\u73b0\u91d1\u6536\u5165\u4e3a\u4e3b\uff0c\u6216\u8005\u4e0d\u592a\u61c2\u7f51\u4e0a\u65b0\u79d1\u6280\u7684\u5546\u4eba","bullet3":"\u73b0\u5728\u8d22\u52a1\u53d7\u56f0\uff0c\u5f71\u54cd\u5230\u4ed8\u623f\u79df\uff0c\u4ed8\u6c34\u7535\u8d39\uff0c\u53ca\u53d1\u5de5\u8d44\u7ed9\u5458\u5de5\u7684\u80fd\u529b","bullet4":"\u6c92\u6709\u7f51\u5740\uff0c\u7f51\u4e0a\u5916\u5356\uff0c\u6216\u63a5\u53d7\u793c\u54c1\u5238\u7684\u670d\u52a1","bullet5":"\u5728\u7ebd\u7ea6\u4e2d\u56fd\u57ce\uff0c\u6cd5\u62c9\u76db\uff0c\u53ca\u516b\u5927\u9053\u7b49"},"storeDetails":{"storyHeader":"\u80cc\u666f\u7b80\u4ecb"},"ownerPanel":{"donation":"\u6350\u8d60","voucher":"\u8d2d\u4e70\u793c\u54c1\u5361","extraInfo":{"Type":"\u5546\u4e1a\u7c7b\u578b","Employees":"\u5458\u5de5\u4eba\u6570","Founded":"\u521b\u529e\u4e8e","Website":"Website","Menu":"Menu"}},"donationBox":{"header":"Not sure who to donate to?","description":"To support every merchant on this page, contribute to our donation pool. We distribute funds evenly across all businesses.","button":"DONATE"},"gamBox":{"header":"Learn about Gift-a-Meal","description":"Double the impact of your donation by gifting meals from our merchants to local organizations that will distribute your gifted meals to our community in need.","button":"GIFT MEAL"}}')},73:function(e,n,t){e.exports=t(89)},78:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(45),i=t.n(o),c=(t(78),t(43)),u=t(24),l=t(57),s=t(58);c.a.use(u.f).init({initImmediate:!1,preload:["en","cn"],fallbackLng:"en",lng:"en",ns:["translation"],defaultNS:"translation",interpolation:{escapeValue:!1},resources:{en:{translation:l},cn:{translation:s}}});c.a;var m=t(14),d=t(6),h=t(15),f=t(37),p=t(49),b=t(3),w=t(4),g=t(31),v=t(66),E=t.n(v),O=t(67),y=t.n(O);t(53);function x(){var e=Object(b.a)(["\n  width: 150px;\n  height: 70px;\n\n  @media (max-width: 599px) {\n    width: 112px;\n    height: 50px;\n  }\n"]);return x=function(){return e},e}var S=function(e){e.theme;return r.a.createElement(_,{src:t(54),alt:"send chinatown love"})},_=w.a.img(x()),T=t(103);function j(){var e=Object(b.a)(["\n  cursor: pointer;\n"]);return j=function(){return e},e}function P(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n  transition: 0.1s;\n  margin: 0 20px;\n  ","\n  "," :link {\n    color: black;\n  }\n  :hover {\n    color: #9e9e9e;\n  }\n"]);return P=function(){return e},e}function C(){var e=Object(b.a)(["\n  margin: 0;\n  transition: 0.1s;\n  color: #9e9e9e;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 200;\n  :hover {\n    color: #a7182d;\n  }\n  width: 35px;\n"]);return C=function(){return e},e}function M(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  width: 78px;\n  margin-left: 20px;\n  ","\n"]);return M=function(){return e},e}function k(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n  transition: 0.1s;\n  margin: 0 20px;\n  "," :link {\n    color: black;\n  }\n  :hover {\n    color: #9e9e9e;\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 125px;\n  justify-content: space-between;\n"]);return N=function(){return e},e}function D(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: ",";\n  width: 100%;\n  ","\n"]);return D=function(){return e},e}function R(){var e=Object(b.a)(["\n  background-color: transparent;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 90%;\n  max-width: 1280px;\n  margin: 15px auto;\n  align-items: center;\n  font-size: 14px;\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);return R=function(){return e},e}var A=function(e){var n=Object(T.a)(),t=n.t,o=n.i18n,i=Object(a.useState)(!1),c=Object(m.a)(i,2),u=c[0],l=c[1],s=function(e,n){e.preventDefault(),o.changeLanguage(n)},d=function(){window.innerWidth<1025&&!e.menuOpen?l(!0):(l(!1),e.setMenuOpen(!1))},f=!!Object(h.f)(window.location.pathname,"/merchants");Object(a.useEffect)((function(){return window.innerWidth<1025?l(!0):l(!1),window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[]);return r.a.createElement(I,null,r.a.createElement(S,null),u?e.menuOpen?r.a.createElement(z,{compact:u.toString()},r.a.createElement(I,null,r.a.createElement(S,null),r.a.createElement(F,{onClick:function(n){return e.setMenuOpen(!1)}})),r.a.createElement(H,{compact:u.toString(),href:"https://sendchinatownlove.com/",i18nText:"navBar.header.home",altText:"HOME"}),r.a.createElement(W,{to:"/merchants",compact:u.toString(),onClick:function(n){return e.setMenuOpen(!1)}},t("navBar.header.merchants")),r.a.createElement(H,{compact:u.toString(),href:"https://www.sendchinatownlove.com/about.html",i18nText:"OUR STORY",altText:"OUR STORY"}),r.a.createElement(H,{compact:u.toString(),href:"https://www.sendchinatownlove.com/resource-center.html",i18nText:"RESOURCES",altText:"RESOURCES"}),r.a.createElement(H,{compact:u.toString(),href:"https://www.sendchinatownlove.com/press",i18nText:"PRESS",altText:"PRESS"})):r.a.createElement(L,null,r.a.createElement(U,{compact:u.toString()},r.a.createElement(V,{onClick:function(e){return s(e,"en")}},"ENG"),r.a.createElement("span",null,"|\xa0"),r.a.createElement(V,{onClick:function(e){return s(e,"cn")}},"\u4e2d\u6587")),r.a.createElement(E.a,{onClick:function(n){return e.setMenuOpen(!0)}})):r.a.createElement(z,{compact:u.toString()},r.a.createElement(H,{compact:u.toString(),href:"https://sendchinatownlove.com/",i18nText:"navBar.header.home",altText:"HOME"}),r.a.createElement(W,{to:"/merchants",compact:u.toString(),active:f.toString()},t("navBar.header.merchants")),r.a.createElement(H,{compact:u.toString(),href:"https://www.sendchinatownlove.com/about.html",i18nText:"OUR STORY",altText:"OUR STORY"}),r.a.createElement(H,{compact:u.toString(),href:"https://www.sendchinatownlove.com/resource-center.html",i18nText:"RESOURCES",altText:"RESOURCES"}),r.a.createElement(H,{compact:u.toString(),href:"https://www.sendchinatownlove.com/press",i18nText:"PRESS",altText:"PRESS"}),r.a.createElement(U,{compact:u.toString()},r.a.createElement(V,{onClick:function(e){return s(e,"en")}},"ENG"),r.a.createElement("span",null,"|\xa0"),r.a.createElement(V,{onClick:function(e){return s(e,"cn")}},"\u4e2d\u6587"))))},I=w.a.header(R()),z=w.a.div(D(),(function(e){return"true"===e.compact?"column":"row"}),(function(e){return"true"===e.compact?"\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right:0;\n    background-color: white;\n    z-index: 10;\n  ":"\n    max-width: 620px;\n    justify-content: flex-end;\n  "})),L=w.a.div(N()),B=w.a.a(k(),(function(e){return"true"===e.compact&&"\n    width: 100%;\n    margin: 16px auto;\n    text-align: center;\n  "})),H=function(e){var n=Object(T.a)().t,t=e.i18nText&&!n(e.i18nText).includes("navBar")?n(e.i18nText):e.altText;return r.a.createElement(B,Object.assign({},e,{compact:e.compact}),t)},U=w.a.div(M(),(function(e){return"true"===e.compact&&"margin-right: 20px;"})),V=w.a.div(C()),W=Object(w.a)(g.a)(P(),(function(e){return"true"===e.compact&&"\n    width: 100%;\n    margin: 16px auto;\n    text-align: center;\n  "}),(function(e){return"true"===e.active&&"\n    border-bottom: 1.5px #9e9e9e solid;\n  "})),F=Object(w.a)(y.a)(j());function G(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n"]);return G=function(){return e},e}function Y(){var e=Object(b.a)(["\n  padding: 0;\n  display: flex;\n"]);return Y=function(){return e},e}function J(){var e=Object(b.a)(["\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  @media (min-width: 600px) {\n    order: 2;\n  }\n  @media (max-width: 599px) {\n    flex-direction: row;\n  }\n"]);return J=function(){return e},e}function q(){var e=Object(b.a)(["\n  width: 90%;\n  max-width: 1280px;\n  margin: 0 auto;\n  display: ",";\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: ",";\n\n  span {\n    margin-left: 24px;\n    color: #a8192e;\n  }\n  @media (min-width: 600px) {\n    justify-content: space-between;\n    height: 120px;\n  }\n  @media (max-width: 599px) {\n    padding: 0 16px 0 16px;\n    height: 80px;\n  }\n"]);return q=function(){return e},e}var K=function(e){var n=e.theme,t=void 0===n?"none":n;return r.a.createElement($,{menuOpen:e.menuOpen,theme:t},r.a.createElement("a",{href:"https://sendchinatownlove.com/"},r.a.createElement(S,{theme:t})),r.a.createElement(Q,null,r.a.createElement(X,null,r.a.createElement(Z,{href:"https://www.facebook.com/Send-Chinatown-Love-100872288240891/"},r.a.createElement("span",{className:"fa fa-facebook"}))),r.a.createElement(X,null,r.a.createElement(Z,{href:"https://instagram.com/sendchinatownlove"},r.a.createElement("span",{className:"fa fa-instagram"}))),r.a.createElement(X,null,r.a.createElement(Z,{href:"mailto:hello@sendchinatownlove.com"},r.a.createElement("span",{className:"fa fa-envelope"})))))},$=w.a.footer(q(),(function(e){return e.menuOpen?"none":"flex"}),(function(e){return"dark"===e.theme?"#f7f7f7":"#ffffff"})),Q=w.a.div(J()),X=w.a.div(Y()),Z=w.a.a(G());function ee(){var e=Object(h.h)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var ne=t(48),te=t(46),ae=t.n(te),re=t(47);f.a.initialize("https://api.sendchinatownlove.com/");var oe=Object(d.a)();oe.listen((function(e){f.a.set({page:e.pathname}),f.a.pageview(e.pathname)}));var ie=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(6),t.e(2),t.e(7)]).then(t.bind(null,236))})),ce=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(10)]).then(t.bind(null,235))})),ue=Object(a.lazy)((function(){return t.e(11).then(t.bind(null,116))})),le=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,237))})),se=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(8)]).then(t.bind(null,240))}));ae.a.init("2757464141030019",void 0,{autoConfig:!0,debug:!0});var me=function(){var e=Object(a.useState)(!1),n=Object(m.a)(e,2),t=n[0],o=n[1],i=function(e){var n;switch(e){case"all":n=r.a.createElement(ce,{menuOpen:t});break;case"merchants":n=r.a.createElement(h.a,{to:"/all"});break;case"seller":n=r.a.createElement(ie,{menuOpen:t});break;default:n=r.a.createElement(ue,{menuOpen:t})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,null,r.a.createElement(ee,null),r.a.createElement(A,{menuOpen:t,setMenuOpen:o}),n,r.a.createElement(K,{menuOpen:t})))};return r.a.createElement(h.c,{history:oe},r.a.createElement(a.Suspense,{fallback:r.a.createElement(p.b,{isPage:!0})},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/all"},i("all")),r.a.createElement(h.b,{path:"/voucher/:id"},r.a.createElement(re.b,null,r.a.createElement(le,null))),r.a.createElement(h.b,{path:"/:seller_id/dashboard/:secret_id"},r.a.createElement(se,null)),r.a.createElement(h.b,{path:"/gift-a-meal",component:function(){return window.location.href="https://www.gofundme.com/f/gift-a-meal",null}}),r.a.createElement(h.b,{path:"/merchants"},i("merchants")),r.a.createElement(h.b,{path:"/:id"},i("seller")),r.a.createElement(h.b,{path:"/:id#story"},i("seller")),r.a.createElement(h.b,null,i("error")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,4,5]]]);
//# sourceMappingURL=main.607309ec.chunk.js.map