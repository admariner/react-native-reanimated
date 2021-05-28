(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{290:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),o=(t(0),t(302)),i={id:"web-support",title:"Web Support",sidebar_label:"Web Support"},p={unversionedId:"web-support",id:"version-2.0.0/web-support",isDocsHomePage:!1,title:"Web Support",description:"Since",source:"@site/versioned_docs/version-2.0.0/web-support.md",slug:"/web-support",permalink:"/react-native-reanimated/docs/2.0.0/web-support",version:"2.0.0",sidebar_label:"Web Support",sidebar:"version-2.0.0/docs",previous:{title:"Migrating from Reanimated 1.x",permalink:"/react-native-reanimated/docs/2.0.0/migration"},next:{title:"Troubleshooting common problems",permalink:"/react-native-reanimated/docs/2.0.0/troubleshooting"}},c=[{value:"Webpack support",id:"webpack-support",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Since\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/releases/tag/2.0.0-alpha.7"},"2.0.0-alpha.7"),"\nrelease it's possible to launch reanimated 2 in a web browser. For that case all of the functionalities are implemented purely in javascript, hence the efficiency of the animations might drop."),Object(o.b)("p",null,"If you use\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"playground"),"\nand want to start the app in the browser, just type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn web\n")),Object(o.b)("p",null,"If you want to start example applications from the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"reanimated repository"),"\nyou need to run a following command inside the ",Object(o.b)("inlineCode",{parentName:"p"},"Example")," directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn start-web\n")),Object(o.b)("h2",{id:"webpack-support"},"Webpack support"),Object(o.b)("p",null,"If you want to use Reanimated in ",Object(o.b)("inlineCode",{parentName:"p"},"webpack")," app you should add extra configuration to your ",Object(o.b)("inlineCode",{parentName:"p"},"webpack")," config."),Object(o.b)("p",null,"Example webpack config file with Reanimated support:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{6,14,34}","{6,14,34}":!0},"const HtmlWebpackPlugin = require('html-webpack-plugin');\nconst webpack = require('webpack');\n\nmodule.exports = {\n  entry: [\n    'babel-polyfill', \n    './index.js'\n  ],\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: 'index.html',\n      template: './index.html',\n    }),\n    new webpack.DefinePlugin({ process: { env: {} } })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.(js|jsx)$/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: [\n              '@babel/preset-react',\n              { plugins: ['@babel/plugin-proposal-class-properties'] }\n            ],\n          },\n        },\n      },\n    ],\n  },\n  resolve: {\n    alias: { 'react-native$': 'react-native-web', },\n    extensions: ['.web.js', '.js'],\n  },\n};\n")))}s.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,p(p({ref:n},l),{},{components:t})):a.a.createElement(d,p({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);