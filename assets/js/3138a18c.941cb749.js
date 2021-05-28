(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),i=(t(0),t(302)),o={id:"useAnimatedRef",title:"useAnimatedRef",sidebar_label:"useAnimatedRef"},c={unversionedId:"api/useAnimatedRef",id:"version-2.0.0-rc.2/api/useAnimatedRef",isDocsHomePage:!1,title:"useAnimatedRef",description:"This hook provides extended functionality of a standard ref. You can assign it to some component like ` and then access the target component via animatedRef.current. Besides, on the UI thread animated reference also contains the view tag of the target. It can be accessed like this: const viewTag = animatedRef(). This comes handy when using native methods like scrollTo and measure`.",source:"@site/versioned_docs/version-2.0.0-rc.2/api/useAnimatedRef.md",slug:"/api/useAnimatedRef",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/useAnimatedRef",version:"2.0.0-rc.2",sidebar_label:"useAnimatedRef",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/useAnimatedGestureHandler"},next:{title:"useAnimatedReaction",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/useAnimatedReaction"}},s=[{value:"Example",id:"example",children:[]}],d={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This hook provides extended functionality of a standard ref. You can assign it to some component like ",Object(i.b)("inlineCode",{parentName:"p"},"<View ref={ animatedRef } />")," and then access the target component via ",Object(i.b)("inlineCode",{parentName:"p"},"animatedRef.current"),". Besides, on the UI thread animated reference also contains the view tag of the target. It can be accessed like this: ",Object(i.b)("inlineCode",{parentName:"p"},"const viewTag = animatedRef()"),". This comes handy when using native methods like ",Object(i.b)("inlineCode",{parentName:"p"},"scrollTo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"measure"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef()\n\n  useDerivedValue(() => {\n    const viewTag = aref();\n    // ...\n  })\n\n  const componentRef = aref.current\n  // ...\n\n  return <View ref={aref} />;\n}\n")))}u.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),u=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(o,".").concat(m)]||p[m]||l[m]||i;return t?a.a.createElement(f,c(c({ref:n},d),{},{components:t})):a.a.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);