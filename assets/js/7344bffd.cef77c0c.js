"use strict";(self.webpackChunkicodex_next=self.webpackChunkicodex_next||[]).push([[1532],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=l,k=s["".concat(d,".").concat(m)]||s[m]||c[m]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(87462),l=t(67294),r=t(72389),i=t(79443);var o=function(){var e=(0,l.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=t(63616),p=t(86010),u="tabItem_vU9c";function c(e){var n,t,r,i=e.lazy,c=e.block,s=e.defaultValue,m=e.values,k=e.groupId,v=e.className,N=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:N.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,d.lx)(f,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===s?s:null!=(n=null!=s?s:null==(t=N.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=N[0])?void 0:r.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=o(),g=C.tabGroupChoices,E=C.setTabGroupChoices,y=(0,l.useState)(h),O=y[0],w=y[1],j=[],D=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var L=g[k];null!=L&&L!==O&&f.some((function(e){return e.value===L}))&&w(L)}var x=function(e){var n=e.currentTarget,t=j.indexOf(n),a=f[t].value;a!==O&&(D(n),w(a),null!=k&&E(k,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var l=j.indexOf(e.currentTarget)-1;t=j[l]||j[j.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},v)},f.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:x,onClick:x},r,{className:(0,p.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(N.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},N.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function s(e){var n=(0,r.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},58712:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return k}});var a=t(87462),l=t(63366),r=t(67294),i=t(3905),o=t(26396),d=t(58215),p=function(){return(0,r.useEffect)((function(){var e,n,t,a;null==(e=document.getElementById("div1"))||e.addEventListener("click",(function(){alert("\u5728\u7236\u5143\u7d20div\u4e0a\u89e6\u53d1")})),null==(n=document.getElementById("btn1"))||n.addEventListener("click",(function(){alert("\u5728\u5b50\u5143\u7d20button\u4e0a\u89e6\u53d1")})),null==(t=document.getElementById("div2"))||t.addEventListener("click",(function(){alert("\u5728\u7236\u5143\u7d20div\u4e0a\u89e6\u53d1")}),!0),null==(a=document.getElementById("btn2"))||a.addEventListener("click",(function(){alert("\u5728\u5b50\u5143\u7d20button\u4e0a\u89e6\u53d1")}),!0)}),[]),r.createElement(o.Z,null,r.createElement(d.Z,{value:"1",label:"useCapture: false"},r.createElement("div",{id:"div1"},r.createElement("button",{id:"btn1"},"\u6d4b\u8bd51"))),r.createElement(d.Z,{value:"2",label:"useCapture: true"},r.createElement("div",{id:"div2"},r.createElement("button",{id:"btn2"},"\u6d4b\u8bd52"))))},u=["components"],c={},s=void 0,m={unversionedId:"javascript/DOM/dom\u4e8b\u4ef6\u7684\u673a\u5236",id:"javascript/DOM/dom\u4e8b\u4ef6\u7684\u673a\u5236",title:"dom\u4e8b\u4ef6\u7684\u673a\u5236",description:"DOM \u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1\u673a\u5236",source:"@site/docs/javascript/DOM/dom\u4e8b\u4ef6\u7684\u673a\u5236.md",sourceDirName:"javascript/DOM",slug:"/javascript/DOM/dom\u4e8b\u4ef6\u7684\u673a\u5236",permalink:"/docs/javascript/DOM/dom\u4e8b\u4ef6\u7684\u673a\u5236",editUrl:"https://github.com/wood3n/icodex-next/tree/master/docs/javascript/DOM/dom\u4e8b\u4ef6\u7684\u673a\u5236.md",tags:[],version:"current",frontMatter:{},sidebar:"javascript",previous:{title:"dom api\u5f52\u7c7b",permalink:"/docs/javascript/DOM/dom api\u5f52\u7c7b"},next:{title:"Date\u7c7b\u578b",permalink:"/docs/javascript/Date/Date\u7c7b\u578b"}},k=[{value:"DOM \u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1\u673a\u5236",id:"dom-\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1\u673a\u5236",children:[{value:"\u6355\u83b7\u9636\u6bb5\uff08capture\uff09",id:"\u6355\u83b7\u9636\u6bb5capture",children:[],level:3},{value:"\u89e6\u53d1\u9636\u6bb5",id:"\u89e6\u53d1\u9636\u6bb5",children:[],level:3},{value:"\u5192\u6ce1\u9636\u6bb5\uff08bubble\uff09",id:"\u5192\u6ce1\u9636\u6bb5bubble",children:[],level:3}],level:2},{value:"\u4e8b\u4ef6\u6ce8\u518c",id:"\u4e8b\u4ef6\u6ce8\u518c",children:[{value:"\u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u5c5e\u6027",id:"\u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u5c5e\u6027",children:[],level:3},{value:"addEventListener",id:"addeventlistener",children:[],level:3},{value:"addEventListener vs onclick",id:"addeventlistener-vs-onclick",children:[{value:"this \u6307\u5411\u95ee\u9898",id:"this-\u6307\u5411\u95ee\u9898",children:[],level:4},{value:"\u5185\u5b58\u95ee\u9898",id:"\u5185\u5b58\u95ee\u9898",children:[],level:4}],level:3}],level:2},{value:"\u4e8b\u4ef6\u59d4\u6258",id:"\u4e8b\u4ef6\u59d4\u6258",children:[],level:2}],v={toc:k};function N(e){var n=e.components,r=(0,l.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},v,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dom-\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1\u673a\u5236"},"DOM \u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1\u673a\u5236"),(0,i.kt)("p",null,"\u56fe\u6e90 - ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html"},"w3 - events")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:t(85525).Z})),(0,i.kt)("h3",{id:"\u6355\u83b7\u9636\u6bb5capture"},"\u6355\u83b7\u9636\u6bb5\uff08capture\uff09"),(0,i.kt)("p",null,"\u6839\u636e w3 \u89c4\u8303\u4e2d\u7684\u63cf\u8ff0\uff0cDOM \u4e8b\u4ef6\u5728\u89e6\u53d1\u8fc7\u7a0b\u662f\u4ece\u6839\u5143\u7d20\u5f00\u59cb\u8c03\u5ea6\uff0c\u76f4\u5230\u5230\u8fbe\u76ee\u6807\u4e8b\u4ef6\u5143\u7d20\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4f1a\u53d1\u751f\u6355\u83b7\uff0c\u89e6\u53d1\uff0c\u5192\u6ce1\u4e09\u4e2a\u9636\u6bb5\u3002\n\u6355\u83b7\u9636\u6bb5\u4e2d\uff0cDOM \u4e8b\u4ef6\u4f1a\u4ece\u6839\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"p"},"html"),"\u5f00\u59cb\uff0c\u68c0\u6d4b\u5176\u662f\u5426\u5177\u6709\u76f8\u540c\u7684\u4e8b\u4ef6\u76d1\u542c\u673a\u5236\uff0c\u4f8b\u5982\u5728\u5185\u90e8",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"\u4e0a\u8bbe\u7f6e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"onClick"),"\u4e8b\u4ef6\uff0c\u5982\u679c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"html"),"\u4e0a\u4e5f\u8bbe\u7f6e\u4e86\uff0c\u90a3\u4e48\u540c\u6837\u4f1a\u6d89\u53ca\u8c03\u5ea6\u3002\n\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"html"),"\u5f00\u59cb\u9010\u5c42\u5411\u76ee\u6807\u4e8b\u4ef6\u5143\u7d20\u7684\u7956\u5148\u5143\u7d20\u8c03\u5ea6\uff0c\u76f4\u5230\u5230\u8fbe\u76ee\u6807\u4e8b\u4ef6\u5143\u7d20\u3002"),(0,i.kt)("h3",{id:"\u89e6\u53d1\u9636\u6bb5"},"\u89e6\u53d1\u9636\u6bb5"),(0,i.kt)("p",null,"\u5728\u5230\u8fbe\u76ee\u6807\u5143\u7d20\u4ee5\u540e\uff0c\u4f1a\u89e6\u53d1\u76ee\u6807\u5143\u7d20\u7684\u76d1\u542c\u51fd\u6570\u8c03\u7528\u3002"),(0,i.kt)("h3",{id:"\u5192\u6ce1\u9636\u6bb5bubble"},"\u5192\u6ce1\u9636\u6bb5\uff08bubble\uff09"),(0,i.kt)("p",null,"\u5192\u6ce1\u9636\u6bb5\u5219\u662f\u4ece\u76ee\u6807\u4e8b\u4ef6\u5143\u7d20\u5f00\u59cb\uff0c\u6309\u7167 DOM \u6811\u7684\u7ed3\u6784\uff0c\u4ece\u91cc\u5411\u5916\u8c03\u5ea6\u7684\u8fc7\u7a0b\uff0c\u76f4\u5230\u56de\u5230\u6839\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"p"},"html"),"\u4e0a\u3002\n\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e2d\uff0c\u6240\u6709\u4e8b\u4ef6\u7684\u6ce8\u518c\u90fd\u9ed8\u8ba4\u4f1a\u6267\u884c\u5192\u6ce1\u8fc7\u7a0b\u3002\u5f53\u7136\u4e86\uff0c\u5982\u679c\u5728\u4e8b\u4ef6\u6ce8\u518c\u65f6\u8bbe\u7f6e\u7981\u6b62\u5192\u6ce1\u7684\u9009\u9879\uff0c\u8fd9\u4e2a\u5192\u6ce1\u8fc7\u7a0b\u5c31\u4e0d\u4f1a\u53d1\u751f\u3002\n\u53ef\u4ee5\u901a\u8fc7\u4e8b\u4ef6\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5c5e\u6027",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles"},"Event.bubbles"),"\u6765\u5224\u65ad\u4e8b\u4ef6\u662f\u5426\u5904\u4e8e\u5192\u6ce1\u9636\u6bb5\u3002"),(0,i.kt)("h2",{id:"\u4e8b\u4ef6\u6ce8\u518c"},"\u4e8b\u4ef6\u6ce8\u518c"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u76d1\u542c\u7684\u6ce8\u518c\u65b9\u5f0f\u5177\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("h3",{id:"\u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u5c5e\u6027"},"\u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u5c5e\u6027"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const btn = document.querySelector('button');\n\nbtn.onclick = function() {\n  const rndCol =\n    'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';\n  document.body.style.backgroundColor = rndCol;\n};\n")),(0,i.kt)("h3",{id:"addeventlistener"},"addEventListener"),(0,i.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"document"),"\u4e0a\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener"),"\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u5728\u5177\u4f53 DOM \u5143\u7d20\u4e0a\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener"),"\u5177\u6709\u4e24\u79cd\u7c7b\u578b API\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u65b9\u6cd5\u4f20\u9012\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"target.addEventListener(type, listener, options);")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),"\uff1a\u6307\u5b9a",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/Events"},"\u4e8b\u4ef6\u7c7b\u578b"),"\u7684\u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"listener"),"\uff1a\u8bbe\u7f6e\u76d1\u542c\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),"\uff1a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u5c5e\u6027")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"capture"),"\uff1a\u9ed8\u8ba4",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u8868\u793a listener \u662f\u5426\u4f1a\u5728\u8be5\u7c7b\u578b\u7684\u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5\u4f20\u64ad\u5230\u8be5 EventTarget \u65f6\u89e6\u53d1\uff1b"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"once"),"\uff1a\u9ed8\u8ba4",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u8868\u793a listener \u5728\u6dfb\u52a0\u4e4b\u540e\u662f\u5426\u6700\u591a\u53ea\u8c03\u7528\u4e00\u6b21\uff1b\u5982\u679c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c listener \u4f1a\u5728\u5176\u88ab\u8c03\u7528\u4e4b\u540e\u81ea\u52a8\u79fb\u9664\uff1b"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"passive"),"\uff1a\u9ed8\u8ba4",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u8868\u793a listener \u662f\u5426\u6c38\u8fdc\u4e0d\u4f1a\u8c03\u7528 preventDefault()\u3002\u5f53\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\u65f6\uff0c\u5982\u679c listener \u4ecd\u7136\u8c03\u7528\u4e86\u8fd9\u4e2a\u51fd\u6570\uff0c\u5ba2\u6237\u7aef\u5c06\u4f1a\u5ffd\u7565\u5b83\u5e76\u629b\u51fa\u4e00\u4e2a\u63a7\u5236\u53f0\u8b66\u544a\u3002")),(0,i.kt)("p",null,"\u6839\u636e\u89c4\u8303\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"passive")," \u9009\u9879\u7684\u9ed8\u8ba4\u503c\u59cb\u7ec8\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u4f46\u662f\uff0c\u8fd9\u5f15\u5165\u4e86\u79fb\u52a8\u7aef\u5728\u5904\u7406\u67d0\u4e9b\u89e6\u6478\u4e8b\u4ef6\uff08\u4ee5\u53ca\u5176\u4ed6\uff09\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u5728\u5c1d\u8bd5\u5904\u7406\u6eda\u52a8\u65f6\u963b\u6b62\u6d4f\u89c8\u5668\u7684\u4e3b\u7ebf\u7a0b\u7684\u53ef\u80fd\u6027\uff0c\u4ece\u800c\u5bfc\u81f4\u6eda\u52a8\u5904\u7406\u671f\u95f4\u6027\u80fd\u53ef\u80fd\u5927\u5927\u964d\u4f4e\u3002\n\u4e3a\u9632\u6b62\u51fa\u73b0\u6b64\u95ee\u9898\uff0c\u67d0\u4e9b\u6d4f\u89c8\u5668\uff08\u7279\u522b\u662f Chrome \u548c Firefox\uff09\u5df2\u5c06\u6587\u6863\u7ea7\u8282\u70b9",(0,i.kt)("inlineCode",{parentName:"p"},"Window"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Document"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"Document.body"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"touchstart"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"touchmove"),"\u4e8b\u4ef6\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"passive"),"\u9009\u9879\u7684\u9ed8\u8ba4\u503c\u66f4\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\n\u8fd9\u53ef\u4ee5\u9632\u6b62\u8c03\u7528\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u56e0\u6b64\u5728\u7528\u6237\u6eda\u52a8\u65f6\u65e0\u6cd5\u963b\u6b62\u9875\u9762\u5448\u73b0\uff0c\u63d0\u5347\u79fb\u52a8\u7aef\u7684\u6027\u80fd\u3002\u89c1 - ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2016/06/passive-event-listeners"},"https://developers.google.com/web/updates/2016/06/passive-event-listeners")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"signal"),"\uff1a\u4e00\u4e2a",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal"},(0,i.kt)("inlineCode",{parentName:"a"},"AbortSignal")),"\u5bf9\u8c61\uff0c\u5982\u679c\u8be5\u5bf9\u8c61\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"abort()"),"\u65b9\u6cd5\u88ab\u8c03\u7528\uff0c\u5219\u5f53\u524d\u76d1\u542c\u5668\u4e5f\u4f1a\u88ab\u79fb\u9664\u3002\n",(0,i.kt)("inlineCode",{parentName:"li"},"AbortSignal"),"\u53ef\u4ee5\u4e2d\u65ad\u4e8b\u4ef6\u76d1\u542c\u5668\u7684\u54cd\u5e94\uff0c\u540c\u65f6\u66f4\u6709\u7528\u7684\u4e00\u4e2a\u5730\u65b9\u662f\u5728\u4e2d\u65ad\u5f02\u6b65\u8bf7\u6c42\u4e0a\uff0c\u4f8b\u5982\u4e0b\u65b9\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"fetch"),"\u8bf7\u6c42\u5185\u90e8\u4f20\u9012",(0,i.kt)("inlineCode",{parentName:"li"},"signal"),"\u5bf9\u8c61\uff0c\u5f53",(0,i.kt)("inlineCode",{parentName:"li"},"abort()"),"\u88ab\u8c03\u7528\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"fetch"),"\u4f1a\u76f4\u63a5",(0,i.kt)("inlineCode",{parentName:"li"},"reject"),"\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"AbortError"),"\u7684\u5f02\u5e38\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var controller = new AbortController();\nvar signal = controller.signal;\n\nvar downloadBtn = document.querySelector('.download');\nvar abortBtn = document.querySelector('.abort');\n\ndownloadBtn.addEventListener('click', fetchVideo);\n\nabortBtn.addEventListener('click', function() {\n  controller.abort();\n  console.log('Download aborted');\n});\n\nfunction fetchVideo() {\n  ...\n  fetch(url, {signal}).then(function(response) {\n    ...\n  }).catch(function(e) {\n    reports.textContent = 'Download error: ' + e.message;\n  })\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"target.addEventListener(type, listener, useCapture);")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),"\uff1a\u6307\u5b9a",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/Events"},"\u4e8b\u4ef6\u7c7b\u578b"),"\u7684\u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"listener"),"\uff1a\u8bbe\u7f6e\u76d1\u542c\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useCapture"),"\uff1a\u9ed8\u8ba4",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\u3002\u5f53\u4e00\u4e2a\u5143\u7d20\u5d4c\u5957\u4e86\u53e6\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u4e14\u4e24\u4e2a\u5143\u7d20\u90fd\u5bf9\u540c\u4e00\u4e8b\u4ef6\u6ce8\u518c\u4e86\u4e00\u4e2a\u5904\u7406\u51fd\u6570\u65f6\uff0c\u6240\u53d1\u751f\u7684\u4e8b\u4ef6\u5192\u6ce1\u548c\u4e8b\u4ef6\u6355\u83b7\u662f\u4e24\u79cd\u4e0d\u540c\u7684\u4e8b\u4ef6\u4f20\u64ad\u65b9\u5f0f\u3002\u4e8b\u4ef6\u4f20\u64ad\u6a21\u5f0f\u51b3\u5b9a\u4e86\u5143\u7d20\u4ee5\u54ea\u4e2a\u987a\u5e8f\u63a5\u6536\u4e8b\u4ef6\u3002\u5bf9\u4e8e\u4e8b\u4ef6\u76ee\u6807\u4e0a\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u6765\u8bf4\uff0c\u4e8b\u4ef6\u4f1a\u5904\u4e8e",(0,i.kt)("strong",{parentName:"li"},"\u76ee\u6807\u9636\u6bb5"),"\uff0c\u800c\u4e0d\u662f\u5192\u6ce1\u9636\u6bb5\u6216\u8005\u6355\u83b7\u9636\u6bb5\uff0c\u6240\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"useCapture"),"\u65e0\u5f71\u54cd\u3002\u800c\u5f53\u7236\u5143\u7d20\u8bbe\u7f6e\u4e86",(0,i.kt)("inlineCode",{parentName:"li"},"useCapture=true"),"\u7684\u65f6\u5019\uff0c\u4ec5\u5728\u6355\u83b7\u9636\u6bb5\u89e6\u53d1\u4e8b\u4ef6\uff0c\u89c1\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a")),(0,i.kt)(p,{mdxType:"Demo"}),(0,i.kt)("h3",{id:"addeventlistener-vs-onclick"},"addEventListener vs onclick"),(0,i.kt)("p",null,"\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u5e94\u8be5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener"),"\u6765\u6ce8\u518c\u4e8b\u4ef6\uff0c\u8fd9\u6837\u505a\u6709\u4ee5\u4e0b\u4f18\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addEventListener"),"\u65b9\u6cd5\u63d0\u4f9b\u7684\u4e8b\u4ef6\u5904\u7406\u9009\u9879\u66f4\u52a0\u9f50\u5168\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"addEventListener"),"\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"li"},"useCapture"),"\u652f\u6301\u5904\u7406\u6355\u83b7\u548c\u5192\u6ce1\u671f\u95f4\u7684\u4e8b\u4ef6\u89e6\u53d1\u673a\u5236\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u65b9\u4fbf\u7684\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"removeEventListener"),"\u79fb\u9664\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addEventListener"),"\u9488\u5bf9\u76f8\u540c\u5143\u7d20\u6ce8\u518c\u591a\u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u4e8b\u4ef6\uff0c\u4e0d\u4f1a\u5b58\u5728\u8986\u76d6\uff0c\u800c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"onclick"),"\u7b49\u7684\u5f62\u5f0f\uff0c\u540e\u7eed\u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570\u4f1a\u8986\u76d6\u524d\u9762\u7684\u65b9\u6cd5\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"  var a = document.getElementById('a');\n  a.onclick = doThing_1;        // \u4e0d\u4f1a\u8c03\u7528\n  a.onclick = doThing_2;\n\n  a.addEventListener('click', doThing_3);\n  a.addEventListener('click', doThing_4);\n")),(0,i.kt)("p",null,"\u4f46\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener"),"\u672c\u8eab\u4f7f\u7528\u4e0d\u5f53\u4e5f\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,i.kt)("h4",{id:"this-\u6307\u5411\u95ee\u9898"},"this \u6307\u5411\u95ee\u9898"),(0,i.kt)("p",null,"ES6 \u4ee5\u540e\u5f15\u5165\u7684\u7bad\u5934\u51fd\u6570\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"class"),"\u8bed\u6cd5\uff1b\u56e0\u6b64\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener"),"\u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570\u9700\u8981\u5206\u4e3a\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u666e\u901a\u51fd\u6570\uff0c\u5219\u5176\u5185\u90e8",(0,i.kt)("inlineCode",{parentName:"li"},"this"),"\u5c06\u59cb\u7ec8\u6307\u5411 DOM \u4e8b\u4ef6\u89e6\u53d1\u7684\u76ee\u6807\u5143\u7d20\uff1b\u5373\u4f7f\u666e\u901a\u51fd\u6570\u662f\u4f5c\u4e3a\u5bf9\u8c61\u7684\u65b9\u6cd5\u6216\u8005\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"class"),"\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\u88ab\u8c03\u7528\uff1b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {\n  b: '\u6d4b\u8bd5',\n  a() {\n    console.log(this);\n  },\n};\n\ndocument.getElementById('btn')?.addEventListener('click', obj.a);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u7bad\u5934\u51fd\u6570\uff0c\u5219\u6307\u5411\u7bad\u5934\u51fd\u6570\u5b9a\u4e49\u65f6\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u6839\u636e\u6700\u65b0\u7684 ES \u89c4\u8303\u7684\u5b9a\u4e49\uff0c",(0,i.kt)("a",{parentName:"li",href:"https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-execution-contexts"},"\u6267\u884c\u4e0a\u4e0b\u6587"),"\u53ef\u4ee5\u5206\u4e3a\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u3001\u6a21\u5757\u6267\u884c\u4e0a\u4e0b\u6587\uff08ES Module\uff09\u548c\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u90a3\u4e48\u7bad\u5934\u51fd\u6570\u5185\u90e8",(0,i.kt)("inlineCode",{parentName:"li"},"this"),"\u4e5f\u5c31\u662f\u8fd9\u4e24\u79cd\u60c5\u51b5\u3002")),(0,i.kt)("p",null,"\u4e0b\u9762\u7684 DOM \u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u5b9a\u4e49\u5728\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e2d\uff0c\u4f46\u662f\u5bf9\u8c61\u662f\u5728\u5168\u5c40\u73af\u5883\u4e2d\u5b9a\u4e49\u7684\uff0c\u6240\u4ee5\u5176\u5185\u90e8",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"window"),"\uff0c\u4e25\u683c\u6a21\u5f0f\u4e0b\u5c31\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5728\u5168\u5c40\u73af\u5883\u4e2d\u5b9a\u4e49\nconst obj = {\n  b: '\u6d4b\u8bd5',\n  a: () => {\n    console.log(this); // undefined\n  },\n};\n\ndocument.getElementById('btn')?.addEventListener('click', obj.a);\n")),(0,i.kt)("p",null,"\u4e0b\u9762\u7684 DOM \u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u5728\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e2d\u5b9a\u4e49\uff0c\u90a3\u4e48\u5176\u5185\u90e8",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u5c31\u662f\u5b9a\u4e49\u65f6\u7684\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u4e5f\u5c31\u662f\u6307\u5411\u5bf9\u8c61",(0,i.kt)("inlineCode",{parentName:"p"},"obj"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5728\u51fd\u6570\u4e2d\u5b9a\u4e49\nconst obj = {\n  b: '\u6d4b\u8bd5',\n  a() {\n    return () => {\n      console.log(this); // obj\n    };\n  },\n};\n\ndocument.getElementById('btn')?.addEventListener('click', obj.a());\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"class"),"\u5185\u90e8\u5b9a\u4e49\u7684 DOM \u56de\u8c03\u51fd\u6570\uff0c\u662f\u4f7f\u7528 React class \u7ec4\u4ef6\u5f00\u53d1\u4e2d\u5fc5\u987b\u4e86\u89e3\u7684\u95ee\u9898\u3002\u9996\u5148\u6765\u8bf4\u666e\u901a\u51fd\u6570\uff1b")),(0,i.kt)("p",null,"\u5982\u679c\u76f4\u63a5\u770b",(0,i.kt)("inlineCode",{parentName:"p"},"class"),"\u5185\u90e8\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u6839\u636e\u9762\u5411\u5bf9\u8c61\u7684\u8bed\u6cd5\u7279\u70b9\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u5c06\u6307\u5411\u5b9e\u4f8b\u5bf9\u8c61\uff1b"),(0,i.kt)("p",null,"\u4f46\u662f\u666e\u901a\u51fd\u6570\u5185\u90e8\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u662f\u59cb\u7ec8\u6307\u5411 DOM \u4e8b\u4ef6\u89e6\u53d1\u7684\u76ee\u6807\u5143\u7d20\u7684\uff0c\u6240\u4ee5\u5728\u666e\u901a\u51fd\u6570\u5185\u90e8\u8981\u60f3\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u8bbf\u95ee",(0,i.kt)("inlineCode",{parentName:"p"},"class"),"\u5185\u90e8\u7684\u5176\u4ed6\u6210\u5458\uff0c\u8fd9\u65f6\u5019\u5c31\u5fc5\u987b\u6539\u53d8\u666e\u901a\u51fd\u6570\u5185\u90e8\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411\uff0c\u6700\u5e38\u7528\u7684\u65b9\u6cd5\u5c31\u662f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"bind"),"\u6765\u5b9e\u73b0\uff0c\u5c06\u666e\u901a\u51fd\u6570\u5185\u90e8",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u59cb\u7ec8\u7ed1\u5b9a\u5230\u5b9e\u4f8b\u5bf9\u8c61\u4e0a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class P {\n  a() {\n    console.log(this); // DOM - btn\n  }\n}\n\nconst p = new P();\n\ndocument.getElementById('btn')?.addEventListener('click', p.a);\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7bad\u5934\u51fd\u6570\uff0c\u90a3\u4e48\u5c06\u59cb\u7ec8\u6307\u5411\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u4e0d\u5b58\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u4e22\u5931\u7684\u95ee\u9898"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class P {\n  a = () => {\n    console.log(this); // \u5bf9\u8c61 p\n  };\n}\n\nconst p = new P();\n\ndocument.getElementById('btn')?.addEventListener('click', p.a);\n")),(0,i.kt)("h4",{id:"\u5185\u5b58\u95ee\u9898"},"\u5185\u5b58\u95ee\u9898"),(0,i.kt)("p",null,"\u5982\u679c\u662f\u5355\u4e00\u7684\u4e8b\u4ef6\u6ce8\u518c\uff0c\u4e00\u822c\u53ef\u4ee5\u76f4\u63a5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener"),"\u4e2d\u521b\u5efa\u56de\u8c03\u51fd\u6570\uff0c\u4f46\u662f\u5bf9\u4e8e\u5927\u91cf\u5143\u7d20\u6ce8\u518c\u76f8\u540c\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u5c31\u5e94\u8be5\u5355\u72ec\u521b\u5efa\u56de\u8c03\u51fd\u6570\uff0c\u5c06\u5f15\u7528\u5730\u5740\u4f20\u9012\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener"),"\u3002"),(0,i.kt)("h2",{id:"\u4e8b\u4ef6\u59d4\u6258"},"\u4e8b\u4ef6\u59d4\u6258"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u59d4\u6258\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u5c06\u76ee\u6807\u4e8b\u4ef6\u5143\u7d20\u7684\u76d1\u542c\u5668\u8bbe\u7f6e\u5230\u5176\u4ed6\u5143\u7d20\u4e0a\u6765\u8fbe\u5230\u4e8b\u4ef6\u76d1\u542c\u7684\u76ee\u7684\u3002"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u59d4\u6258\u6bd4\u8f83\u5e38\u89c1\u7684\u60c5\u666f\u5c31\u662f\u5927\u91cf\u5217\u8868\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"p"},"li"),"\u6ce8\u518c\u4e8b\u4ef6\u65f6\u59d4\u6258\u5728\u5176\u7236\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"p"},"ul"),"\u4e0a\u53bb\u6ce8\u518c\uff0c\u8fd9\u6837\u91cc\u7528\u4e8b\u4ef6\u5192\u6ce1\u9636\u6bb5\u7684\u5904\u7406\u53bb\u89e6\u53d1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ul id="parent-list">\n  <li id="post-1">Item 1</li>\n  <li id="post-2">Item 2</li>\n  <li id="post-3">Item 3</li>\n  <li id="post-4">Item 4</li>\n  <li id="post-5">Item 5</li>\n  <li id="post-6">Item 6</li>\n</ul>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"document.getElementById('parent-list').addEventListener('click', function(e) {\n  // \u5224\u65ad\u4e8b\u4ef6\u89e6\u53d1\u7684\u76ee\u6807\u5143\u7d20\u7c7b\u578b\n  if (e.target && e.target.nodeName == 'LI') {\n    console.log(\n      'List item ',\n      e.target.id.replace('post-', ''),\n      ' was clicked!',\n    );\n  }\n});\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u4e8b\u4ef6\u59d4\u6258\u7684\u597d\u5904\u5728\u4e8e\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5316\u4e8b\u4ef6\u6ce8\u518c\u5e76\u8282\u7701\u5185\u5b58\uff1a\u65e0\u9700\u4e3a\u5927\u91cf\u91cd\u590d\u7684 DOM \u5143\u7d20\u6dfb\u52a0\u76f8\u540c\u7684\u5904\u7406\u51fd\u6570\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u5c11\u7684\u4ee3\u7801\uff1a\u6dfb\u52a0\u6216\u79fb\u9664\u5143\u7d20\u65f6\uff0c\u65e0\u9700\u6dfb\u52a0/\u79fb\u9664\u5904\u7406\u7a0b\u5e8f\u3002")))}N.isMDXComponent=!0},85525:function(e,n,t){n.Z=t.p+"assets/images/129870638-e1cfaf60-c41e-4243-8cb7-d71a88958134-4685fb283ac94acbfc83da37649ad30c.png"}}]);