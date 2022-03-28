"use strict";(self.webpackChunkicodex_next=self.webpackChunkicodex_next||[]).push([[5745],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),v=l(r),b=o,d=v["".concat(c,".").concat(b)]||v[b]||p[b]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},96557:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return v}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],u={},c=void 0,l={unversionedId:"javascript/DOM/MutationObserver",id:"javascript/DOM/MutationObserver",title:"MutationObserver",description:"MutationObserver",source:"@site/docs/javascript/DOM/MutationObserver.md",sourceDirName:"javascript/DOM",slug:"/javascript/DOM/MutationObserver",permalink:"/docs/javascript/DOM/MutationObserver",editUrl:"https://github.com/wood3n/icodex-next/tree/master/docs/javascript/DOM/MutationObserver.md",tags:[],version:"current",frontMatter:{},sidebar:"javascript",next:{title:"dom api\u5f52\u7c7b",permalink:"/docs/javascript/DOM/dom api\u5f52\u7c7b"}},s=[{value:"MutationObserver",id:"mutationobserver",children:[],level:2}],p={toc:s};function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mutationobserver"},"MutationObserver"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"},"MutationObserver"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MutationObserver"),"\u662f\u7528\u6765\u76d1\u542c DOM \u8282\u70b9\u7684\u53d8\u5316\u7684\u63a5\u53e3\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"MutationObserver"),"\u89c2\u5bdf\u4e00\u4e2a DOM \u8282\u70b9\u7684\u65b9\u5f0f\u53ea\u9700\u8981\u4e09\u6b65\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u89c2\u5bdf\u7684\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u5199\u56de\u8c03\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"MutationObserver"),"\u5bf9\u8c61\u5e76\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"observe"),"\u65b9\u6cd5\u6ce8\u518c\u89c2\u5bdf\u4e8b\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u521b\u5efa\u4e00\u4e2aMutationObserver\u5bf9\u8c61\nfunction createMutationObserver(handler, targetNode, options) {\n  const observer = new MutationObserver(handler);\n  observer.observe(targetNode, options);\n  return observer;\n}\n\n// \u56de\u8c03\u51fd\u6570\nfunction domChangeCall() {\n  console.log('domchange:', arguments);\n}\nlet observer = createMutationObserver(\n  domChangeCall,\n  document.getElementById('some-id'),\n  {\n    childList: true, // \u89c2\u5bdf\u76ee\u6807\u5b50\u8282\u70b9\u7684\u53d8\u5316\uff0c\u662f\u5426\u6709\u6dfb\u52a0\u6216\u8005\u5220\u9664\n    attributes: true, // \u89c2\u5bdf\u5c5e\u6027\u53d8\u52a8\n    subtree: true, // \u89c2\u5bdf\u540e\u4ee3\u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a false\n  },\n);\n\n// \u53d6\u6d88\u76d1\u542c\nobserver.disconnect();\n")),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"MutationObserver"),"\u7684\u65f6\u5019\u4f1a\u6ce8\u518c\u56de\u8c03\u51fd\u6570\uff0c\u5728\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u8fdb\u7a0b\u76d1\u542c\u5230 DOM \u53d8\u5316\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u7684\u65f6\u5019\uff0c\u4f1a\u5c06 DOM \u53d8\u5316\u4fe1\u606f\u4f20\u9012\u7ed9\u56de\u8c03\u51fd\u6570\uff0c\u5e76\u4e14\u5c01\u88c5\u6210\u4e3a\u4e00\u4e2a\u5fae\u4efb\u52a1\u653e\u8fdb\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u4f1a\u7b49\u5f85\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u6267\u884c\u5b8c\u518d\u53bb\u6267\u884c\u3002"))}v.isMDXComponent=!0}}]);