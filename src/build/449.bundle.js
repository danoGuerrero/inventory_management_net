/*! For license information please see 449.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkinventory_management_net=self.webpackChunkinventory_management_net||[]).push([[449],{8449:(t,e,n)=>{n.r(e),n.d(e,{default:()=>z});var r=n(7294),a=n(2318),o=n(3838),i=n(7645),c=n(7750),l=n(6408),u=n(8979),s=n(6914),f=n(6867),m=n(594),p=n(7109),d=n(2658),h=n(4962),v=n(5265),y=n(3797),g=n(5503),E=n(7957),b=n(1733),w=n(6818),x=n(4510),Z=n(3981),C=n(2738),k=n(7666),S=n(854),N=n(2861);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function j(){return j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},j.apply(this,arguments)}function P(){P=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),c=new k(a||[]);return r(i,"_invoke",{value:w(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function m(){}function p(){}function d(){}var h={};l(h,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==e&&n.call(y,o)&&(h=y);var g=d.prototype=m.prototype=Object.create(h);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function a(r,o,i,c){var l=s(t[r],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==L(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,c)}))}c(l.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,r(g,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(b.prototype),l(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),l(g,c,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function O(t,e,n,r,a,o,i){try{var c=t[o](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,a)}function D(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){O(o,r,a,i,c,"next",t)}function c(t){O(o,r,a,i,c,"throw",t)}i(void 0)}))}}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){u=!0,a=t}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M=(0,h.Z)({drawer:{"& .MuiDrawer-paper":{width:600},"& .MuiDialogTitle-root":{alignItems:"center",display:"flex",justifyContent:"space-between"},"& .MuiMenu-list":{backgroundColor:"red",padding:0,width:120}},actions:{backgroundColor:"#e0e0e0",alignItems:"center",display:"flex",height:40,"& .MuiButtonBase-root":{backgroundColor:"#212121",padding:0,width:120}},actionsContainer:{alignItems:"center",display:"flex",justifyContent:"flex-end",margin:"0px 23px 0px 23px",width:"100%"},actionsItems:{"& .MuiPaper-root":{top:"105px !important",left:"auto !important",right:"23px !important",width:120},"& .MuiMenuItem-root":{width:"100%",display:"flex",gap:10}},avatar:{width:80,height:80},mainDetailContainer:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},mainDetailInfo:{margin:5},inputNumber:{width:70},description:{marginTop:10,textAlign:"justify"},extraDetailContainer:{alignItems:"flex-start",display:"flex",flexDirection:"column",marginTop:10,gap:8}});const z=function(t){var e=t.id,n=t.openDrawer,h=t.closeProductDetails,L=t.getDataProductsList,O=I((0,r.useState)({}),2),_=O[0],z=O[1],A=I((0,r.useState)({}),2),T=A[0],G=A[1],F=I((0,r.useState)(null),2),V=F[0],X=F[1],q=I((0,r.useState)(!1),2),B=q[0],R=q[1],Y=I((0,r.useState)(!1),2),W=Y[0],$=Y[1],H=I((0,r.useState)(!1),2),U=H[0],J=H[1],K=I((0,r.useState)(!1),2),Q=K[0],tt=K[1],et=I((0,r.useState)(null),2),nt=et[0],rt=et[1],at=I((0,r.useState)(null),2),ot=at[0],it=at[1],ct=(0,r.useCallback)(D(P().mark((function t(){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N.Z.get("https://inventory-management-q6zw.onrender.com/getProduct/".concat(e)).then((function(t){z(t.data)}));case 1:case"end":return t.stop()}}),t)}))),[e]),lt=function(){var t=D(P().mark((function t(){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N.Z.get("https://inventory-management-q6zw.onrender.com/getCategories").then((function(t){rt(t.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,r.useEffect)((function(){ct(),lt()}),[ct]);var ut=M(),st=function(){var t=D(P().mark((function t(){var n;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(T),n=_,N.Z.put("https://inventory-management-q6zw.onrender.com/product/".concat(e,"/update"),n).then((function(t){X("Your changes have been saved."),pt(),ct(),R(!B),tt(!1),L()}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ft=function(){$(!W)},mt=function(){var t=D(P().mark((function t(){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N.Z.delete("https://inventory-management-q6zw.onrender.com/product/delete/".concat(e)).then((function(t){X("Product deleted."),ht(),ft(),pt(),L()}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),pt=function(){J(!U)},dt=function(t){var e=t.target.value;for(var n in it(e),T)"category"===n&&(T[n]=e)},ht=function(){h(),it(null),tt(!1),z({})};function vt(t){return r.createElement(v.Z,j({anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},t))}var yt=null==nt?void 0:nt.map((function(t){return r.createElement(y.Z,{value:t.name},t.name)})),gt=function(t){var e=t.target.id,n=t.target.value;for(var r in T)r===e&&(T[r]=n)};function Et(){return r.createElement(r.StrictMode,{key:_.id},r.createElement("div",{className:ut.mainDetailContainer},r.createElement(p.Z,{alt:_.title,className:ut.avatar,src:_.thumbnail,variant:"rounded"}),r.createElement("div",{className:ut.mainDetailInfo},r.createElement(d.Z,{variant:"overline"},"ID: ",_.id),r.createElement(d.Z,{variant:"subtitle1"},"Brand: ",_.brand),r.createElement(d.Z,{variant:"subtitle1"},"Stock: ",_.stock))),r.createElement("div",{className:ut.description},r.createElement(d.Z,{variant:"body2"},_.description)),r.createElement("div",{className:ut.extraDetailContainer},r.createElement(d.Z,{variant:"body2"},"Category: ",_.category),r.createElement(d.Z,{variant:"body2"},"Discount: ",_.discountPercentage,"%"),r.createElement(d.Z,{variant:"body2"},"Price: $",_.price),r.createElement(d.Z,{variant:"body2"},"Rating: ",_.rating)))}function bt(){return r.createElement(r.StrictMode,{key:T.id},r.createElement("div",{key:T.id,className:ut.mainDetailContainer},r.createElement(p.Z,{alt:T.title,className:ut.avatar,src:T.thumbnail,variant:"rounded"}),r.createElement("div",{className:ut.mainDetailInfo},r.createElement(d.Z,{variant:"overline"},"ID: ",T.id),r.createElement(d.Z,{variant:"subtitle1"},"Brand:",r.createElement(Z.Z,{id:"brand",defaultValue:T.brand,onChange:gt,sx:{marginX:"10px"}})),r.createElement(d.Z,{variant:"subtitle1"},"Stock:",r.createElement(Z.Z,{id:"stock",className:ut.inputNumber,defaultValue:T.stock,inputProps:{type:"number",pattern:"[0-9]*"},onChange:gt,sx:{marginX:"10px"}})))),r.createElement("div",{className:ut.description},r.createElement(d.Z,{variant:"body2"},r.createElement(Z.Z,{id:"description",defaultValue:T.description,multiline:!0,fullWidth:!0,onChange:gt}))),r.createElement("div",{className:ut.extraDetailContainer},r.createElement(k.Z,{id:"category"},"Category"),r.createElement(C.Z,{id:"category",labelId:"category",autoWidth:!0,value:ot||T.category,onChange:dt},yt),r.createElement(d.Z,{variant:"body2"},"Discount:",r.createElement(Z.Z,{id:"discountPercentage",className:ut.inputNumber,defaultValue:T.discountPercentage,inputProps:{type:"number",pattern:"[0-9]*"},onChange:gt,sx:{marginX:"10px"}}),"%"),r.createElement(d.Z,{variant:"body2"},"Price: $",r.createElement(Z.Z,{id:"price",className:ut.inputNumber,defaultValue:T.price,inputProps:{type:"number",pattern:"[0-9]*"},onChange:gt,sx:{marginX:"10px"}})),r.createElement(d.Z,{variant:"body2"},"Rating:",r.createElement(Z.Z,{id:"rating",className:ut.inputNumber,defaultValue:T.rating,inputProps:{type:"number",pattern:"[0-9]*"},onChange:gt,sx:{marginX:"10px"}}))))}return r.createElement(r.Fragment,null,r.createElement(a.ZP,{anchor:"right",className:ut.drawer,onClose:ht,open:n},r.createElement(i.Z,null,_.title,r.createElement(f.Z,{onClick:ht},r.createElement(m.Z,null))),r.createElement("div",{className:ut.actions},r.createElement("div",{className:ut.actionsContainer},r.createElement(s.Z,{"aria-controls":B?"CustomMenu":null,"aria-haspopup":"true","aria-expanded":B?"true":null,disableElevation:!0,endIcon:r.createElement(g.Z,null),onClick:function(){R(!0)},size:"small",variant:"contained"},"Actions"),r.createElement(vt,{id:"CustomMenu",onClick:function(){R(!B)},open:B,className:ut.actionsItems},r.createElement("div",null,r.createElement(y.Z,{disableRipple:!0,onClick:Q?st:function(){G(_),R(!B),tt(!0)}},Q?r.createElement(w.Z,{fontSize:"small"}):r.createElement(E.Z,{fontSize:"small"}),Q?"Save":"Edit"),r.createElement(y.Z,{disableRipple:!0,onClick:Q?function(){ct(),R(!B),tt(!1)}:function(){R(!B),$(!W)}},Q?r.createElement(x.Z,{fontSize:"small"}):r.createElement(b.Z,{fontSize:"small"}),Q?"Cancel":"Delete"))))),r.createElement(c.Z,{dividers:!0},Q?r.createElement(bt,null):r.createElement(Et,null))),r.createElement(o.Z,{open:W,onClose:ft},r.createElement(i.Z,null,"Delete"),r.createElement(c.Z,null,r.createElement(l.Z,null,"Are you sure you want to delete this product?")),r.createElement(u.Z,null,r.createElement(s.Z,{onClick:ft,variant:"contained"},"No"),r.createElement(s.Z,{onClick:mt,variant:"contained",color:"error"},"Yes"))),r.createElement(S.Z,{autoHideDuration:3e3,open:U,onClose:function(){J(!U)},message:V}))}}}]);