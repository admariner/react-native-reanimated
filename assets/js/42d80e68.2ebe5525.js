(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(302)),o={id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},c={unversionedId:"migration",id:"version-2.0.0-rc.2/migration",isDocsHomePage:!1,title:"Migrating from Reanimated 1.x",description:"Before you consider migrating, note that Reanimated 2 is an alpha release, and that we cannot guarantee the new API will remain unchanged before the stable release of version 2.",source:"@site/versioned_docs/version-2.0.0-rc.2/migration.md",slug:"/migration",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/migration",version:"2.0.0-rc.2",sidebar_label:"Migration from v1",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"Reanimated 2.x architecture",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/architecture"},next:{title:"Web Support",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/web-support"}},l=[{value:"Renamed methods:",id:"renamed-methods",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Before you consider migrating, note that Reanimated 2 is an alpha release, and that we cannot guarantee the new API will remain unchanged before the stable release of version 2.")),Object(i.b)("p",null,"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.\nWhen installing Reanimated 2, you will be able to use the old API as well as the new one.\nWe made the latest stable Reanimated 1 available from the same package with a few exceptions, as we needed to address some naming collisions.\nWhenever there was a naming collision with Reanimated 1, we'd rename the Reanimated 1 version of such method in order to keep the naming in Reanimated 2 cleaner.\nThis strategy made the most sense to us, as we are planning to slowly phase out the old API (we will keep making fixes to Reanimated 1 core but most likely stop new feature development).\nUnfortunately, it means that Reanimated 2 introduces some breaking changes to the API, where some methods pulled from Reanimated 1 changed there name.\nThankfully the list of the renamed methods is relatively short, and the renamed methods weren't too frequently used anyways."),Object(i.b)("h3",{id:"renamed-methods"},"Renamed methods:"),Object(i.b)("h4",{id:"1-interpolate-renamed-to-interpolatenode"},"1. ",Object(i.b)("inlineCode",{parentName:"h4"},"interpolate")," renamed to ",Object(i.b)("inlineCode",{parentName:"h4"},"interpolateNode")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"interpolate")," imported directly from ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",Object(i.b)("inlineCode",{parentName:"p"},"interpolateNode")," instead.\nIf you were using a class member method ",Object(i.b)("inlineCode",{parentName:"p"},"AnimatedValue.interpolate"),", no change is necessary."),Object(i.b)("h4",{id:"2-easing-renamed-to-easingnode"},"2. ",Object(i.b)("inlineCode",{parentName:"h4"},"Easing")," renamed to ",Object(i.b)("inlineCode",{parentName:"h4"},"EasingNode")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"Easing")," imported from ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",Object(i.b)("inlineCode",{parentName:"p"},"EasingNode")," instead."))}d.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,b=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);