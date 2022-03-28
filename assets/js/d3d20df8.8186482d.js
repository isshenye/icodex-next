"use strict";(self.webpackChunkicodex_next=self.webpackChunkicodex_next||[]).push([[1445],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63692:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"ReactDOM-render\u6e32\u67d3\u8fc7\u7a0b",slug:"/reactdom-render"},p=void 0,c={unversionedId:"react/react\u6e90\u7801\u5b66\u4e60/reactdom-render",id:"react/react\u6e90\u7801\u5b66\u4e60/reactdom-render",title:"ReactDOM-render\u6e32\u67d3\u8fc7\u7a0b",description:"ReactDOM.render API\u7528\u6cd5",source:"@site/docs/react/react\u6e90\u7801\u5b66\u4e60/reactdom-render.md",sourceDirName:"react/react\u6e90\u7801\u5b66\u4e60",slug:"/reactdom-render",permalink:"/docs/reactdom-render",editUrl:"https://github.com/wood3n/icodex-next/tree/master/docs/react/react\u6e90\u7801\u5b66\u4e60/reactdom-render.md",tags:[],version:"current",frontMatter:{title:"ReactDOM-render\u6e32\u67d3\u8fc7\u7a0b",slug:"/reactdom-render"},sidebar:"react",previous:{title:"fiber reconciler",permalink:"/docs/react/react\u6e90\u7801\u5b66\u4e60/fiber reconciler"},next:{title:"stack reconciler",permalink:"/docs/react/react\u6e90\u7801\u5b66\u4e60/stack reconciler"}},d=[{value:"ReactDOM.render API\u7528\u6cd5",id:"reactdomrender-api\u7528\u6cd5",children:[],level:2},{value:"JSX \u548c createElement",id:"jsx-\u548c-createelement",children:[],level:2},{value:"\u4f7f\u7528 createElement \u521b\u5efa React \u5143\u7d20",id:"\u4f7f\u7528-createelement-\u521b\u5efa-react-\u5143\u7d20",children:[{value:"\u6821\u9a8c\u7ec4\u4ef6\u7c7b\u578b",id:"\u6821\u9a8c\u7ec4\u4ef6\u7c7b\u578b",children:[],level:3},{value:"\u6821\u9a8cprops\u7c7b\u578b",id:"\u6821\u9a8cprops\u7c7b\u578b",children:[],level:3}],level:2},{value:"ReactDOM.render(element, container)",id:"reactdomrenderelement-container",children:[{value:"\u521b\u5efa fiberRoot \u8282\u70b9",id:"\u521b\u5efa-fiberroot-\u8282\u70b9",children:[],level:3}],level:2}],s={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reactdomrender-api\u7528\u6cd5"},"ReactDOM.render API\u7528\u6cd5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render(element, container[, callback])"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"API\uff0c\u5728\u6307\u5b9a DOM \u5143\u7d20 ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," \u91cc\u6e32\u67d3\u4e00\u4e2a React \u5143\u7d20\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"class"),"\u7ec4\u4ef6\u4f1a\u8fd4\u56de\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u51fd\u6570\u7ec4\u4ef6\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,a.kt)("p",null,"\u9996\u6b21\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"\u65f6\uff0c\u4f1a\u6e05\u7a7a DOM \u5143\u7d20\uff0c\u5c06 React \u7ec4\u4ef6\u6e32\u67d3\u8fdb\u53bb\uff1b\u540e\u7eed\u8c03\u7528\u5219\u4f1a\u4f7f\u7528 DOM diffing \u7b97\u6cd5\u8fdb\u884c\u66f4\u65b0\u3002"),(0,a.kt)("h2",{id:"jsx-\u548c-createelement"},"JSX \u548c createElement"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JSX"),"\u672c\u8d28\u4e0a\u662f\u7f16\u5199\u4ee3\u7801\u65f6\u7684\u8bed\u6cd5\u7cd6\uff0c\u7ecf\u8fc7 babel \u7b49\u7f16\u8bd1\u5de5\u5177\u6700\u7ec8\u8f6c\u6362\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"React.createElement(component, props, ...children)"),"\u7684\u51fd\u6570\u8c03\u7528\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<MyButton color="blue" shadowSize={2}>\n  Click Me\n</MyButton>\n')),(0,a.kt)("p",null,"\u7f16\u8bd1\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"React.createElement(\n  MyButton,\n  { color: 'blue', shadowSize: 2 },\n  'Click Me'\n)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u4f1a\u751f\u6210\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"React"),"\u5143\u7d20\uff0c\u4e0b\u9762\u6765\u770b\u770b\u5176\u5185\u90e8\u903b\u8f91\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-createelement-\u521b\u5efa-react-\u5143\u7d20"},"\u4f7f\u7528 createElement \u521b\u5efa React \u5143\u7d20"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"React"),"\u5143\u7d20\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u51e0\u6b65"),(0,a.kt)("h3",{id:"\u6821\u9a8c\u7ec4\u4ef6\u7c7b\u578b"},"\u6821\u9a8c\u7ec4\u4ef6\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createElement")," \u5728",(0,a.kt)("inlineCode",{parentName:"p"},"React"),"\u5185\u90e8\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"createElementWithValidation(type, props, children)"),"\u65b9\u6cd5\uff0c\u9996\u5148\u4f1a\u6821\u9a8c\u7ec4\u4ef6\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"type"),"\uff0c\u5bf9\u4e8e\u51fd\u6570\u7ec4\u4ef6\u6765\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"type = function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * React.createElement\n */\nfunction createElementWithValidation(type, props, children) {\n  // \u6821\u9a8c\u7ec4\u4ef6\n  var validType = isValidElementType(type);\n  \n  // \u521b\u5efa React \u5143\u7d20\n  var element = createElement.apply(this, arguments);\n  \n  // \u6821\u9a8c\u5b50\u7ec4\u4ef6 key \u503c\n  if (validType) {\n    for (var i = 2; i < arguments.length; i++) {\n      validateChildKeys(arguments[i], type);\n    }\n  }\n\n  // \u6839\u636e propTypes \u6821\u9a8c\u7ec4\u4ef6 props\n  if (type === REACT_FRAGMENT_TYPE) {\n    validateFragmentProps(element);\n  } else {\n    validatePropTypes(element);\n  }\n  \n  return element;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isValidElementType"),"\u4e3b\u8981\u901a\u8fc7\u7ec4\u4ef6\u672c\u8eab\u7684\u7c7b\u578b\uff0c\u6216\u8005\u7ec4\u4ef6\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"$$typeof"),"\u5c5e\u6027\u6765\u5224\u65ad\u5176\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var hasSymbol = typeof Symbol === "function" && Symbol.for;\n\n// \u4ee5\u4e0b React \u7ec4\u4ef6\u7c7b\u578b\u4f7f\u7528 16 \u8fdb\u5236\u6807\u8bb0\nvar REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 0xeacb;\nvar REACT_CONCURRENT_MODE_TYPE = hasSymbol\n? Symbol.for("react.concurrent_mode")\n: 0xeacf;\nvar REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 0xead2;\nvar REACT_STRICT_MODE_TYPE = hasSymbol\n? Symbol.for("react.strict_mode")\n: 0xeacc;\nvar REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = hasSymbol\n? Symbol.for("react.suspense_list")\n: 0xead8;\nvar REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;\nvar REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;\nvar REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 0xeacd;\nvar REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace;\nvar REACT_FORWARD_REF_TYPE = hasSymbol\n? Symbol.for("react.forward_ref")\n: 0xead0;\nvar REACT_FUNDAMENTAL_TYPE = hasSymbol\n? Symbol.for("react.fundamental")\n: 0xead5;\n\nfunction isValidElementType(type) {\n  return (\n    typeof type === "string" ||\n    typeof type === "function" ||\n    type === REACT_FRAGMENT_TYPE ||\n    type === REACT_CONCURRENT_MODE_TYPE ||\n    type === REACT_PROFILER_TYPE ||\n    type === REACT_STRICT_MODE_TYPE ||\n    type === REACT_SUSPENSE_TYPE ||\n    type === REACT_SUSPENSE_LIST_TYPE ||\n    (typeof type === "object" &&\n     type !== null &&\n     (type.$$typeof === REACT_LAZY_TYPE ||\n      type.$$typeof === REACT_MEMO_TYPE ||\n      type.$$typeof === REACT_PROVIDER_TYPE ||\n      type.$$typeof === REACT_CONTEXT_TYPE ||\n      type.$$typeof === REACT_FORWARD_REF_TYPE ||\n      type.$$typeof === REACT_FUNDAMENTAL_TYPE ||\n      type.$$typeof === REACT_RESPONDER_TYPE ||\n      type.$$typeof === REACT_SCOPE_TYPE))\n  );\n}\n')),(0,a.kt)("p",null,"###\u5de5\u5382\u65b9\u6cd5\u521b\u5efaReact\u5143\u7d20\u5bf9\u8c61"),(0,a.kt)("p",null,"\u7136\u540e\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"createElement"),"\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"React.Element"),"\u5143\u7d20\uff0c\u8fd9\u91cc\u4f1a\u904d\u5386\u7ec4\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\u6240\u6709\u53ef\u679a\u4e3e\u5c5e\u6027, \u5e76\u4e14\u8fc7\u6ee4\u6389 ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ref "),"\u7b49",(0,a.kt)("inlineCode",{parentName:"p"},"React"),"\u7981\u6b62\u8bbf\u95ee\u7684\u5c5e\u6027\uff0c\u5e76\u4e14\u628a\u6240\u6709\u5b50\u7ec4\u4ef6\u4e5f\u6302\u8f7d\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"props.children"),"\u5c5e\u6027\u4e0a\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u8fd8\u4f1a\u6839\u636e",(0,a.kt)("inlineCode",{parentName:"p"},"defaultProps"),"\u5904\u7406",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\u9ed8\u8ba4\u503c\u7684\u60c5\u51b5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * React \u5185\u90e8\u4fdd\u7559\u7684 props \u5c5e\u6027,\u5916\u754c\u65e0\u6cd5\u8bbf\u95ee\n */\nvar RESERVED_PROPS = {\n  key: true,\n  ref: true,\n  __self: true,\n  __source: true,\n};\n\nfunction createElement(type, config, children) {\n  // \u7ec4\u4ef6\u7684 props\n  var props = {};\n  // props \u7684 key\n  var key = null;\n  // ref\n  var ref = null;\n  var self = null;\n  var source = null;\n\n  if (config != null) {\n    // \u904d\u5386\u5bf9\u8c61\u6240\u6709\u53ef\u679a\u4e3e\u5c5e\u6027, \u9664 Symbol \u5916, \u8fc7\u6ee4\u6389 key, ref \u7b49\u7ec4\u4ef6\u5185\u90e8\u4fdd\u7559\u7684 props \u5c5e\u6027\n    for (propName in config) {\n      if (\n        Object.prototype.hasOwnProperty.call(config, propName) &&\n        !RESERVED_PROPS.hasOwnProperty(propName)\n      ) {\n        props[propName] = config[propName];\n      }\n    }\n  }\n\n  // \u5c06\u6240\u6709\u5b50\u5143\u7d20\u6302\u8f7d\u5230 props \u5bf9\u8c61\u5185\u90e8\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u4fee\u6539\u5b50\u5143\u7d20\u6570\u7ec4\n  var childrenLength = arguments.length - 2;\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n\n    {\n      if (Object.freeze) {\n        Object.freeze(childArray);\n      }\n    }\n\n    props.children = childArray;\n  }\n\n  // \u6839\u636e defaultProps \u5904\u7406 props \u5185\u90e8\u5c5e\u6027\u7684\u9ed8\u8ba4\u503c\n  if (type && type.defaultProps) {\n    var defaultProps = type.defaultProps;\n\n    for (propName in defaultProps) {\n      if (props[propName] === undefined) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  }\n\n  // \u4f7f\u7528\u5de5\u5382\u51fd\u6570\u521b\u5efa React \u5143\u7d20\n  return ReactElement(\n    type,\n    key,\n    ref,\n    self,\n    source,\n    // \u5f53\u524d\u5143\u7d20\u5f52\u5c5e\u7684\u4e0a\u5c42\u7236\u5143\u7d20\uff0c\u5bf9\u4e8e\u6839\u5143\u7d20\u6765\u8bf4\uff0c\u8fd9\u4e2a\u503c\u4e3a null\n    ReactCurrentOwner.current,\n    props\n  );\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7528\u4e86\u4e00\u4e2a\u5de5\u5382\u51fd\u6570\u6765\u5305\u88c5\u5143\u7d20\u5bf9\u8c61\uff0c\u4e0d\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\u6765\u8c03\u7528\uff0c\u751f\u6210\u7684\u5143\u7d20\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"$$typeof"),"\u5c5e\u6027\uff0c\u7528\u6765\u5224\u65ad\u7ec4\u4ef6\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// react \u5143\u7d20\u7c7b\u578b\nvar REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;\n\nvar ReactElement = function (type, key, ref, self, source, owner, props) {\n  var element = {\n    // \u7528\u6765\u5224\u65ad\u4e00\u4e2a\u7ec4\u4ef6\u662f\u5426\u662f React Element\n    $$typeof: REACT_ELEMENT_TYPE,\n    // \u5143\u7d20\u672c\u8eab\uff0c\u51fd\u6570\u7ec4\u4ef6\u5c31\u662f\u8be5\u51fd\u6570\n    type: type,\n    key: key,\n    ref: ref,\n    props: props,\n    // Record the component responsible for creating this element.\n    _owner: owner,\n  };\n\n  // \u7981\u6b62\u4fee\u6539\u5143\u7d20\u672c\u8eab\u4ee5\u53ca\u5b83\u7684 props\n  if (Object.freeze) {\n    Object.freeze(element.props);\n    Object.freeze(element);\n  }\n  \n  return element;\n}\n')),(0,a.kt)("p",null,"###\u6821\u9a8c\u5217\u8868\u5b50\u5143\u7d20 key \u503c"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u76f8\u540c\u5217\u8868\u7684\u5b50\u5143\u7d20\uff0c\u9700\u8981\u6821\u9a8c",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u662f\u5426\u4f20\u9012"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function validateExplicitKey(element, parentType) {\n  if (!element._store || element._store.validated || element.key != null) {\n    return;\n  }\n\n  warning$1(\n    false,\n    \'Each child in a list should have a unique "key" prop.\' +\n    "%s%s See https://fb.me/react-warning-keys for more information.",\n    currentComponentErrorInfo,\n    childOwner\n  );\n}\n')),(0,a.kt)("h3",{id:"\u6821\u9a8cprops\u7c7b\u578b"},"\u6821\u9a8cprops\u7c7b\u578b"),(0,a.kt)("p",null,"\u5927\u81f4\u8fc7\u7a0b\u5c31\u662f\u904d\u5386",(0,a.kt)("inlineCode",{parentName:"p"},"propTypes"),"\u5b9a\u4e49\u7684\u7c7b\u578b\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\u5bf9\u5e94\u5c5e\u6027\u503c\u6bd4\u8f83\uff1b\u5bf9\u4e8e TS \u6765\u8bf4\uff0c\u8fd9\u6b65\u6ca1\u5565\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function validatePropTypes(element) { \n  var propTypes;\n  if (typeof type === "function") {\n    propTypes = type.propTypes;\n  } else if (\n    typeof type === "object" &&\n    (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.\n     // Inner props are checked in the reconciler.\n     type.$$typeof === REACT_MEMO_TYPE)\n  ) {\n    propTypes = type.propTypes;\n  } else {\n    return;\n  }\n\n  if (propTypes) {\n    checkPropTypes(\n      propTypes,\n      element.props,\n    )\n  }\n}\n\nfunction checkPropTypes(typeSpecs, values) {\n  for (var typeSpecName in typeSpecs) {\n    if (typeSpecs.hasOwnProperty(typeSpecName)) {\n      //...\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"reactdomrenderelement-container"},"ReactDOM.render(element, container)"),(0,a.kt)("h3",{id:"\u521b\u5efa-fiberroot-\u8282\u70b9"},"\u521b\u5efa fiberRoot \u8282\u70b9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"\u4f7f\u7528\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"legacy"),"\u6a21\u5f0f\u6e32\u67d3\u7ec4\u4ef6\u6811\uff0c\u5176\u5185\u90e8\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"legacy"),"\u5f00\u5934\u7684\u65b9\u6cd5\u8c03\u7528\u6808\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"legacyRenderSubtreeIntoContainer")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"legacyCreateRootFromDOMContainer")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"createLegacyRoot"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createLegacyRoot"),"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"legacy"),"\u6a21\u5f0f\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOMBlockingRoot"),"\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5177\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"_internalRoot"),"\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u5b9e\u9645\u6307\u5411",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber"),"\u6811\u7684\u6839\u8282\u70b9\u5bf9\u8c61",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRootNode"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * ReactDOM.render\n * \u5f53\u9996\u6b21\u8c03\u7528\u65f6\uff0c\u5bb9\u5668\u8282\u70b9\u91cc\u7684\u6240\u6709 DOM \u5143\u7d20\u90fd\u4f1a\u88ab\u66ff\u6362\uff0c\u540e\u7eed\u7684\u8c03\u7528\u5219\u4f1a\u4f7f\u7528 React \u7684 DOM diff \u8fdb\u884c\u66f4\u65b0\n * @param {*} element \u7ec4\u4ef6\u5143\u7d20\n * @param {*} container DOM \u5bb9\u5668\n * @param {*} callback \u6e32\u67d3\u5b8c\u7ec4\u4ef6\u6216\u8005\u540e\u7eed\u66f4\u65b0\u5b8c\u7ec4\u4ef6\u4e4b\u540e\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\n * @returns \u6e32\u67d3\u6e32\u67d3\u5b8c\u7684\u7ec4\u4ef6\n */\nfunction render(element, container, callback) {\n  return legacyRenderSubtreeIntoContainer(\n    null,\n    element,\n    container,\n    false,\n    callback\n  );\n}\n\nfunction legacyRenderSubtreeIntoContainer() {\n  var root = container._reactRootContainer;\n  var fiberRoot;\n  \n  if (!root) {\n    // \u5c06 DOM \u7684 _reactRootContainer \u5c5e\u6027\u5173\u8054\u8d77\u6765\n    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(\n      container,\n      forceHydrate\n    );\n    \n    // \u521b\u5efa fiberRoot\uff0c\u6307\u5411\u4e00\u4e2a FiberRootNode \u7c7b\u578b\u7684\u5bf9\u8c61\n    fiberRoot = root._internalRoot;\n  }\n}\n\nfunction legacyCreateRootFromDOMContainer(container, forceHydrate) {\n  return createLegacyRoot(\n    container,\n    shouldHydrate\n    ? {\n      hydrate: true,\n    }\n    : undefined\n  );\n}\n\nvar LegacyRoot = 0;\nvar BlockingRoot = 1;\nvar ConcurrentRoot = 2;\n\n/**\n * \u8fd9\u91cc\u4f20\u5165\u6807\u8bb0 LegacyRoot \u8868\u793a\u4f7f\u7528 legacy \u6e32\u67d3\u6a21\u5f0f\n */\nfunction createLegacyRoot(container, options) {\n  return new ReactDOMBlockingRoot(container, LegacyRoot, options);\n}\n\nfunction ReactDOMBlockingRoot(container, tag, options) {\n  this._internalRoot = createRootImpl(container, tag, options);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createRootImpl"),"\u7ecf\u8fc7\u4ee5\u4e0b\u51fd\u6570\u8c03\u7528\u6808\u6765\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRootNode"),"\u5bf9\u8c61"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"createRootImpl")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"createContainer")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"createFiberRoot")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"new FiberRootNode"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks) {\n  // \u521b\u5efa FiberRootNode\n  var root = new FiberRootNode(containerInfo, tag, hydrate);\n  //...\n}\n\n/**\n * \u521b\u5efa Fiber \u6839\u8282\u70b9\n * @param {*} containerInfo \u5bb9\u5668 DOM \u5143\u7d20\n * @param {*} tag \u5bf9\u5e94\u4e0d\u540c\u7684\u6e32\u67d3\u6a21\u5f0f LegacyRoot = 0; BlockingRoot = 1; ConcurrentRoot = 2;\n * @param {*} hydrate \u662f\u5426 SSR\n */\nfunction FiberRootNode(containerInfo, tag, hydrate) {\n  // \u6e32\u67d3\u6a21\u5f0f\n  this.tag = tag;\n  this.current = null;\n  // \u5bb9\u5668\u5143\u7d20 DOM\n  this.containerInfo = containerInfo;\n  this.pendingChildren = null;\n  this.pingCache = null;\n  this.finishedExpirationTime = NoWork; // var NoWork = 0;\n  this.finishedWork = null;\n  this.timeoutHandle = noTimeout;               // var noTimeout = -1\n  this.context = null;\n  this.pendingContext = null;\n  this.hydrate = hydrate;\n  this.callbackNode = null;\n  this.callbackPriority = NoPriority;       // var NoPriority = 90;\n  this.firstPendingTime = NoWork;\n  this.firstSuspendedTime = NoWork;\n  this.lastSuspendedTime = NoWork;\n  this.nextKnownPendingLevel = NoWork;\n  this.lastPingedTime = NoWork;\n  this.lastExpiredTime = NoWork;\n\n  // true\n  if (enableSchedulerTracing) {\n    // \u4ece 1 \u5f00\u59cb\u53e0\u52a0\n    this.interactionThreadID = unstable_getThreadID();\n    this.memoizedInteractions = new Set();\n    this.pendingInteractionMap = new Map();\n  }\n\n  // false\n  if (enableSuspenseCallback) {\n    this.hydrationCallbacks = null;\n  }\n}\n\nvar threadIDCounter = 0;\nfunction unstable_getThreadID() {\n  // \u5148\u52a0 1 \u518d\u8fd4\u56de\n  return ++threadIDCounter;\n}\n")),(0,a.kt)("p",null,"\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRootNode"),"\u5bf9\u8c61\u4ee5\u540e\uff0c\u9700\u8981\u518d\u901a\u8fc7\u4ee5\u4e0b\u8c03\u7528\u6808\u521d\u59cb\u5316\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"HostRoot"),"\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"FiberNode"),"\u7684\u5bf9\u8c61\u3002\u8fd9\u91cc\u4f1a\u5224\u65ad\u4e0d\u540c\u7684",(0,a.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#migration-step-blocking-mode"},"\u6e32\u67d3\u6a21\u5f0f"),"\uff0c\u4e0d\u540c\u7684\u6e32\u67d3\u6a21\u5f0f\u5f97\u5230\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"FiberNode"),"\u8282\u70b9\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"tag"),"\u5c5e\u6027\u4e0d\u540c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"createHostRootFiber")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"createFiber")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"new FiberNode"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var LegacyRoot = 0;\nvar BlockingRoot = 1;\nvar ConcurrentRoot = 2;\nvar HostRoot = 3;\n\nvar NoMode = 0;\nvar StrictMode = 1; \nvar BlockingMode = 2;\nvar ConcurrentMode = 4;\n\nfunction createHostRootFiber(tag) {\n  var mode;\n    \n  // \u5224\u65ad\u6e32\u67d3\u6a21\u5f0f\uff1ahttps://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#migration-step-blocking-mode\n  // \u4f7f\u7528 ReactDOM.render \u65f6 tag = LegacyRoot\uff0c\u6240\u4ee5 mode = NoMode = 0\n  if (tag === ConcurrentRoot) {\n    mode = ConcurrentMode | BlockingMode | StrictMode;\n  } else if (tag === BlockingRoot) {\n    mode = BlockingMode | StrictMode;\n  } else {\n    mode = NoMode;\n  }\n\n  // false\n  if (enableProfilerTimer && isDevToolsPresent) {\n    mode |= ProfileMode;\n  }\n    \n  // \u8fd9\u91cc\u4f20\u5165 HostRoot \u6765\u521b\u5efa HostRootFiber \u5bf9\u8c61\n  return createFiber(HostRoot, null, null, mode);\n}\n\n// tag = 3, mode = 0\nvar createFiber = function (tag, pendingProps, key, mode) {\n  return new FiberNode(tag, pendingProps, key, mode);\n};\n")),(0,a.kt)("p",null,"\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"FiberNode"),"\u7c7b\u578b\u7684\u5bf9\u8c61\u5177\u6709\u4ee5\u4e0b\u5c5e\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function FiberNode(tag, pendingProps, key, mode) {\n  // Fiber \u8282\u70b9\u7c7b\u578b\uff0c\u5bf9\u4e8e\u4e0a\u9762\u7684 HostRootFiber\uff0c\u8fd9\u91cc\u5c31\u662f HostRoot = 3\n  this.tag = tag;\n  this.key = key;\n  this.elementType = null;\n  this.type = null;\n  // \u6307\u5411 FiberRootNode\n  this.stateNode = null; // Fiber\n    \n  // \u6307\u5411\u7236\u8282\u70b9\n  this.return = null;\n  // \u5b50\u8282\u70b9\n  this.child = null;\n  // \u5144\u5f1f\u8282\u70b9\n  this.sibling = null;\n  this.index = 0;\n  this.ref = null;\n  this.pendingProps = pendingProps;\n  this.memoizedProps = null;\n  this.updateQueue = null;\n  this.memoizedState = null;\n  this.dependencies = null;\n  this.mode = mode; // Effects\n\n  // \u526f\u4f5c\u7528\u6807\u8bb0\u503c\uff0creact \u628a\u4e0d\u80fd\u5728 render \u671f\u95f4\u5b8c\u6210\u7684\u4efb\u52a1\u6807\u8bb0\u4e3a\u6709\u526f\u4f5c\u7528\uff0c\u89c1\u4e0b\u9762\u6807\u8bb0\u7c7b\u578b\n  this.effectTag = NoEffect;                    //   var NoEffect = 0\n  this.nextEffect = null;\n  this.firstEffect = null;\n  this.lastEffect = null;\n  this.expirationTime = NoWork;\n  this.childExpirationTime = NoWork;    // var NoWork = 0;\n  this.alternate = null;\n}\n\n// \u526f\u4f5c\u7528 effectTag\uff0c\u4f7f\u7528\u4e8c\u8fdb\u5236\u6570\u8fdb\u884c\u6807\u8bb0\nvar NoEffect = 0;\nvar PerformedWork = 1; // You can change the rest (and add more).\n\nvar Placement = 2;\nvar Update = 4;\nvar PlacementAndUpdate = 6;\nvar Deletion = 8;\nvar ContentReset = 16;\nvar Callback = 32;\nvar DidCapture = 64;\nvar Ref = 128;\nvar Snapshot = 256;\nvar Passive = 512;\nvar Hydrating = 1024;\nvar HydratingAndUpdate = 1028; // Passive & Update & Callback & Ref & Snapshot\n\nvar LifecycleEffectMask = 932; // Union of all host effects\n\nvar HostEffectMask = 2047;\nvar Incomplete = 2048;\nvar ShouldCapture = 4096;\n")),(0,a.kt)("p",null,"\u521b\u5efa\u5b8c",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRootNode"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"HostRoot"),"\u4ee5\u540e\uff0c\u4ed6\u4eec\u4e4b\u95f4\u901a\u8fc7\u5404\u81ea\u7684\u5c5e\u6027\u5173\u8054\u8d77\u6765\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRootNode"),"\u5177\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"current"),"\u5c5e\u6027\uff0c\u6307\u5411",(0,a.kt)("inlineCode",{parentName:"p"},"HostRoot"),"\u8282\u70b9\u5bf9\u8c61\uff1b\u540c\u65f6",(0,a.kt)("inlineCode",{parentName:"p"},"HostRoot"),"\u5bf9\u8c61\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"stateNode"),"\u5c5e\u6027\uff0c\u6307\u5411",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRootNode"),"\u7c7b\u578b\u8282\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u521b\u5efa FiberRootNode\nvar root = new FiberRootNode(containerInfo, tag, hydrate);\n// \u521b\u5efa HostRoot \u7c7b\u578b\u7684 FiberNode\nvar uninitializedFiber = createHostRootFiber(tag);\n// \u901a\u8fc7 current \u548c stateNode \u5c5e\u6027\u76f8\u4e92\u5173\u8054\nroot.current = uninitializedFiber;\nuninitializedFiber.stateNode = root;\n")))}m.isMDXComponent=!0}}]);