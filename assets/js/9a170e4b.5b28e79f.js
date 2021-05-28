(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(302)),o={id:"useAnimatedStyle",title:"useAnimatedStyle",sidebar_label:"useAnimatedStyle"},s={unversionedId:"api/useAnimatedStyle",id:"version-2.0.0-rc.2/api/useAnimatedStyle",isDocsHomePage:!1,title:"useAnimatedStyle",description:"This hook is one of the main elements of the new Reanimated v2 API.",source:"@site/versioned_docs/version-2.0.0-rc.2/api/useAnimatedStyle.md",slug:"/api/useAnimatedStyle",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/useAnimatedStyle",version:"2.0.0-rc.2",sidebar_label:"useAnimatedStyle",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/useSharedValue"},next:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/useDerivedValue"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This hook is one of the main elements of the new Reanimated v2 API.\nIt allows for creating an association between shared values and View properties."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"updater-function"},Object(i.b)("inlineCode",{parentName:"h4"},"updater")," ","[Function]"),Object(i.b)("p",null,"Single worklet which is responsible for returning an object with view style properties."),Object(i.b)("h4",{id:"dependencies-array"},Object(i.b)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),Object(i.b)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"{9}","{9}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(state);\n\n  const style = useAnimatedStyle(() => {\n    return {\n      width: sv.value,\n    };\n  }, dependencies);\n  //...\n  return <></>\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in it's body or any values from it's closure(variables from outer scope used in worklet),"),Object(i.b)("li",{parentName:"ul"},"empty array(",Object(i.b)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if it's body changes,"),Object(i.b)("li",{parentName:"ul"},"array of values(",Object(i.b)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in it's body or any values from the given array.")),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"Animated style - in order to connect the animated style hook result, you need to pass it as one of the ",Object(i.b)("inlineCode",{parentName:"p"},"style")," properties to the ",Object(i.b)("inlineCode",{parentName:"p"},"Animated")," version of the component (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.View"),").\nIn React Native, View's ",Object(i.b)("inlineCode",{parentName:"p"},"style")," property can take an array of styles, which gives you a way to mix static and dynamic styles.\nWe recommend that you defined static styles using React Native's ",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/stylesheet"},Object(i.b)("inlineCode",{parentName:"a"},"StyleSheet")," API")," and pass them along the animated styles object returned by this hook.\nIt is more efficient to only keep styles that are actually changed as a result of animation in the animated style hook, and the rest of the styles should be either provided as inline objects or using StyleSheets."),Object(i.b)("p",null,"If the style worklet uses any shared values, it will be executed upon these values updates and the connected view will be updated."),Object(i.b)("p",null,"For the list of available properties you can refer to the React Native core documentation on ",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/view-style-props"},"View Style Props"),". You may also want to check React Native's ",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/style"},"guide on styling views"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"{11-15}","{11-15}":!0},"import { StyleSheet } from 'react-native';\nimport {\n  Animated,\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      width: width.value,\n    };\n  });\n\n  // attach animated style to a View using style property\n  return <Animated.View style={[styles.box, animatedStyle]} />;\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 50,\n    backgroundColor: 'blue',\n  },\n});\n")),Object(i.b)("p",null,"In the above example, the used shared value is not changing, hence there is no real benefit of using an animated style there.\nCheck out the documentation of ",Object(i.b)("a",{parentName:"p",href:"useSharedValue"},Object(i.b)("inlineCode",{parentName:"a"},"useSharedValue"))," to learn how shared values can be updated."))}u.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);