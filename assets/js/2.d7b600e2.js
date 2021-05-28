/*! For license information please see 2.d7b600e2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{322:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c),l=n(304),i=n(309),s=n(310),u=n(23),d=n(303);function f(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),b=Object(s.a)(c),v=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(a.a)({},l?{href:m?p:l}:Object.assign({isNavLink:!0,activeClassName:f,to:b},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(v)}}:null),h),u)}function m(e){var t,n=e.items,i=e.position,s=e.className,u=Object(r.a)(e,["items","position","className"]),d=Object(c.useRef)(null),m=Object(c.useRef)(null),h=Object(c.useState)(!1),b=h[0],v=h[1];Object(c.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]);var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.a.createElement("div",{ref:d,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":b})},o.a.createElement(f,Object(a.a)({className:p(s)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!b))}}),null!==(t=u.children)&&void 0!==t?t:u.label),o.a.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:t},o.a.createElement(f,Object(a.a)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var a=d.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},l)))})))):o.a.createElement(f,Object(a.a)({className:p(s)},u))}function h(e){var t,n,i,s=e.items,m=e.className,h=(e.position,Object(r.a)(e,["items","className","position"])),b=Object(c.useRef)(null),v=Object(u.useLocation)().pathname,p=Object(c.useState)((function(){var e;return null===(e=!(null!=s&&s.some((function(e){return Object(d.isSamePath)(e.to,v)}))))||void 0===e||e})),g=p[0],O=p[1],j=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(f,Object(a.a)({className:j(m)},h)));var E=null!==(t=b.current)&&void 0!==t&&t.scrollHeight?(null===(n=b.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":g})},o.a.createElement(f,Object(a.a)({role:"button",className:j(m,!0)},h,{onClick:function(e){e.preventDefault(),O((function(e){return!e}))}}),null!==(i=h.children)&&void 0!==i?i:h.label),o.a.createElement("ul",{className:"menu__list",ref:b,style:{height:g?void 0:E}},s.map((function(e,t){var n=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(f,Object(a.a)({activeClassName:"menu__link--active",className:j(n)},c,{onClick:h.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),c=n?h:m;return o.a.createElement(c,a)}},323:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c),l=n(304),i=n(16),s=n(331),u=n(63),d=n.n(u);t.a=function(e){var t=Object(i.default)().isClient,n=Object(s.a)().isDarkTheme,c=e.sources,u=e.className,f=e.alt,m=void 0===f?"":f,h=Object(r.a)(e,["sources","className","alt"]),b=t?n?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,b.map((function(e){return o.a.createElement("img",Object(a.a)({key:e,src:c[e],alt:m,className:Object(l.a)(d.a.themedImage,d.a["themedImage--"+e],u)},h))})))}},324:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(304),o=n(308),l=n(23),i=n(59),s=n.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){var e=Object(a.useRef)(null),t=Object(l.useLocation)();return Object(a.useEffect)((function(){t.hash||u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},f=n(303),m=n(339),h=n(60),b=n.n(h);var v=function(){var e,t=Object(m.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,l=Object(f.useThemeConfig)().announcementBar;if(!l)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,d=l.isCloseable;return!i||d&&n?null:r.a.createElement("div",{className:b.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},r.a.createElement("div",{className:Object(c.a)(b.a.announcementBarContent,(e={},e[b.a.announcementBarCloseable]=d,e)),dangerouslySetInnerHTML:{__html:i}}),d?r.a.createElement("button",{type:"button",className:b.a.announcementBarClose,onClick:a,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=n(3),g=n(8),O=n(26),j=n(16),E=n(310),k=n(309),y=n(24),C=n(341);function w(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var N=n(342);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function T(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var I="Ctrl";var D=r.a.forwardRef((function(e,t){var n=e.translations,c=void 0===n?{}:n,o=T(e,["translations"]),l=c.buttonText,i=void 0===l?"Search":l,s=c.buttonAriaLabel,u=void 0===s?"Search":s,d=_(Object(a.useState)(null),2),f=d[0],m=d[1];return Object(a.useEffect)((function(){"undefined"!=typeof navigator&&m(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":I)}),[]),r.a.createElement("button",S({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},o,{ref:t}),r.a.createElement("span",{className:"DocSearch-Button-Container"},r.a.createElement(N.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},i)),null!==f&&r.a.createElement("span",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},f===I?r.a.createElement(w,null):f),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),P=n(313);function A(){var e=function(){var e=Object(j.default)().i18n,t=Object(P.useAllDocsData)(),n=Object(P.useActivePluginAndVersion)(),a=Object(f.useDocsPreferredVersionByPluginId)(),r=[f.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==n||null===(r=n.activePlugin)||void 0===r?void 0:r.pluginId)===e?n.activeVersion:void 0,l=a[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!==(c=null!=o?o:l)&&void 0!==c?c:i;return Object(f.docVersionSearchTag)(e,s.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var B=null;function x(e){var t=e.hit,n=e.children;return r.a.createElement(k.a,{to:t.url},n)}function M(e){var t=e.state,n=e.onClose,a=Object(C.a)().generateSearchPageLink;return r.a.createElement(k.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function R(e){var t,c,i=e.contextualSearch,s=Object(g.a)(e,["contextualSearch"]),u=Object(j.default)().siteMetadata,d=A(),f=null!==(t=null===(c=s.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],m=i?[].concat(d,f):f,h=Object.assign({},s.searchParameters,{facetFilters:m}),b=Object(E.b)().withBaseUrl,v=Object(l.useHistory)(),k=Object(a.useRef)(null),C=Object(a.useRef)(null),w=Object(a.useState)(!1),N=w[0],S=w[1],_=Object(a.useState)(null),L=_[0],T=_[1],I=Object(a.useCallback)((function(){return B?Promise.resolve():Promise.all([n.e(231).then(n.bind(null,396)),Promise.all([n.e(0),n.e(232)]).then(n.bind(null,395)),n.e(0).then(n.t.bind(null,301,7))]).then((function(e){var t=e[0].DocSearchModal;B=t}))}),[]),P=Object(a.useCallback)((function(){I().then((function(){k.current=document.createElement("div"),document.body.insertBefore(k.current,document.body.firstChild),S(!0)}))}),[I,S]),R=Object(a.useCallback)((function(){S(!1),k.current.remove()}),[S]),V=Object(a.useCallback)((function(e){I().then((function(){S(!0),T(e.key)}))}),[I,S,T]),U=Object(a.useRef)({navigate:function(e){var t=e.itemUrl;v.push(t)}}).current,F=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:b(""+t.pathname+t.hash)})}))})).current,X=Object(a.useMemo)((function(){return function(e){return r.a.createElement(M,Object(p.a)({},e,{onClose:R}))}}),[R]),H=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",u.docusaurusVersion),e}),[u.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,c,o])}({isOpen:N,onOpen:P,onClose:R,onInput:V,searchButtonRef:C});var K=Object(o.b)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+s.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(D,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:P,ref:C,translations:{buttonText:K,buttonAriaLabel:K}}),N&&Object(O.createPortal)(r.a.createElement(B,Object(p.a)({onClose:R,initialScrollY:window.scrollY,initialQuery:L,navigator:U,transformItems:F,hitComponent:x,resultsFooterComponent:X,transformSearchClient:H},s,{searchParameters:h})),k.current))}var V=function(){var e=Object(j.default)().siteConfig;return r.a.createElement(R,e.themeConfig.algolia)},U=n(370),F=n.n(U),X=n(61),H=n.n(X),K=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(H.a.toggle,H.a.dark),style:n},t)},z=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(H.a.toggle,H.a.light),style:n},t)},q=function(e){var t=Object(f.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(j.default)().isClient;return r.a.createElement(F.a,Object(p.a)({disabled:!l,icons:{checked:r.a.createElement(K,{icon:n,style:a}),unchecked:r.a.createElement(z,{icon:c,style:o})}},e))},G=n(331),Y=n(345),W=function(e){var t=Object(l.useLocation)(),n=Object(a.useState)(e),r=n[0],c=n[1],o=Object(a.useRef)(!1),i=Object(a.useState)(0),s=i[0],u=i[1],d=Object(a.useState)(0),f=d[0],m=d[1],h=Object(a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(Y.a)((function(t){var n=t.scrollY;if(e)if(n<f)c(!0);else{if(o.current)return o.current=!1,c(!1),void u(n);s&&0===n&&c(!0);var a=document.documentElement.scrollHeight-f,r=window.innerHeight;s&&n>=s?c(!1):n+r<a&&c(!0),u(n)}}),[s,f,o]),Object(a.useEffect)((function(){e&&s&&c(!0)}),[t.pathname]),Object(a.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:h,isNavbarVisible:r}},Q=n(346),J=n(347),Z=n(322),$=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,c=void 0===a?20:a,o=Object(g.a)(e,["width","height"]);return r.a.createElement("svg",Object(p.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function ee(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,c=Object(g.a)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=Object(j.default)().i18n,l=o.currentLocale,i=o.locales,s=o.localeConfigs,u=Object(f.useAlternatePageUtils)();function d(e){return s[e].label}var m=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":""}})),h=[].concat(n,m,a),b=t?"Languages":d(l);return r.a.createElement(Z.a,Object(p.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement($,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,b)),items:h}))}var te=n(62),ne=n.n(te);function ae(e){return e.mobile?null:r.a.createElement("div",{className:ne.a.searchWrapper},r.a.createElement(V,null))}var re={default:function(){return Z.a},localeDropdown:function(){return ee},search:function(){return ae},docsVersion:function(){return n(374).default},docsVersionDropdown:function(){return n(375).default},doc:function(){return n(376).default}};function ce(e){var t=e.type,n=Object(g.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=re[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var oe=n(348),le=n(349),ie=n(64),se=n.n(ie),ue="right";var de=function(){var e,t=Object(f.useThemeConfig)(),n=t.navbar,o=n.items,l=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=Object(a.useState)(!1),d=u[0],m=u[1],h=Object(G.a)(),b=h.isDarkTheme,v=h.setLightTheme,g=h.setDarkTheme,O=W(l),j=O.navbarRef,E=O.isNavbarVisible;Object(Q.a)(d);var k=Object(a.useCallback)((function(){m(!0)}),[m]),y=Object(a.useCallback)((function(){m(!1)}),[m]),C=Object(a.useCallback)((function(e){return e.target.checked?g():v()}),[v,g]),w=Object(J.a)();Object(a.useEffect)((function(){w===J.b.desktop&&m(!1)}),[w]);var N=o.some((function(e){return"search"===e.type})),S=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ue)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ue)}))}}(o),_=S.leftItems,L=S.rightItems;return r.a.createElement("nav",{ref:j,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":d},e[se.a.navbarHideable]=l,e[se.a.navbarHidden]=l&&!E,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:k,onKeyDown:k},r.a.createElement(le.a,null)),r.a.createElement(oe.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),_.map((function(e,t){return r.a.createElement(ce,Object(p.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},L.map((function(e,t){return r.a.createElement(ce,Object(p.a)({},e,{key:t}))})),!s&&r.a.createElement(q,{className:se.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:b,onChange:C}),!N&&r.a.createElement(V,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(oe.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!s&&d&&r.a.createElement(q,{"aria-label":"Dark mode toggle in sidebar",checked:b,onChange:C})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement(ce,Object(p.a)({mobile:!0},e,{onClick:y,key:t}))})))))))},fe=n(326),me=n(7),he="light",be="dark",ve=function(e){return e===be?be:he},pe=function(e){try{localStorage.setItem("theme",ve(e))}catch(t){console.error(t)}},ge=function(){var e=Object(f.useThemeConfig)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,c=Object(a.useState)(function(e){return me.a.canUseDOM?ve(document.documentElement.getAttribute("data-theme")):ve(e)}(t)),o=c[0],l=c[1],i=Object(a.useCallback)((function(){l(he),pe(he)}),[]),s=Object(a.useCallback)((function(){l(be),pe(be)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",ve(o))}),[o]),Object(a.useEffect)((function(){if(!n)try{var e=localStorage.getItem("theme");null!==e&&l(ve(e))}catch(t){console.error(t)}}),[l]),Object(a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?be:he)}))}),[]),{isDarkTheme:o===be,setLightTheme:i,setDarkTheme:s}},Oe=n(344);var je=function(e){var t=ge(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(Oe.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},Ee="docusaurus.tab.",ke=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(Ee))e[a.substring(Ee.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},ye="docusaurus.announcement.dismiss",Ce="docusaurus.announcement.id",we=function(){var e=Object(f.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){localStorage.setItem(ye,"true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(Ce);"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem(Ce,t),a&&localStorage.setItem(ye,"false"),(a||"false"===localStorage.getItem(ye))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},Ne=n(340);var Se=function(e){var t=ke(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=we(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(Ne.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function _e(e){var t=e.children;return r.a.createElement(je,null,r.a.createElement(Se,null,r.a.createElement(f.DocsPreferredVersionContextProvider,null,t)))}function Le(e){var t=e.locale,n=e.version,a=e.tag,c=t;return r.a.createElement(y.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),n&&r.a.createElement("meta",{name:"docsearch:version",content:n}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var Te=n(350);function Ie(){var e=Object(j.default)().i18n,t=e.defaultLocale,n=e.locales,a=Object(f.useAlternatePageUtils)();return r.a.createElement(y.a,null,n.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function De(e){var t=e.permalink,n=Object(j.default)().siteConfig.url,a=function(){var e=Object(j.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(E.a)(t)}(),c=t?""+n+t:a;return r.a.createElement(y.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Pe(e){var t=Object(j.default)(),n=t.siteConfig,a=t.i18n,c=a.currentLocale,o=a.localeConfigs,l=n.favicon,i=n.themeConfig,s=i.image,u=i.metadatas,d=e.title,m=e.description,h=e.image,b=e.keywords,v=e.searchMetadatas,g=Object(E.a)(l),O=c,k=o[c].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("html",{lang:O,dir:k}),l&&r.a.createElement("link",{rel:"shortcut icon",href:g})),r.a.createElement(Te.a,{title:d,description:m,keywords:b,image:h||s}),r.a.createElement(De,null),r.a.createElement(Ie,null),r.a.createElement(Le,Object(p.a)({tag:f.DEFAULT_SEARCH_TAG,locale:c},v)),r.a.createElement(y.a,null,u.map((function(e,t){return r.a.createElement("meta",Object(p.a)({key:"metadata_"+t},e))}))))}n(65);var Ae=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(66);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName;return Ae(),r.a.createElement(_e,null,r.a.createElement(Pe,e),r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(de,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",a)},t),!n&&r.a.createElement(fe.a,null))}},331:function(e,t,n){"use strict";var a=n(0),r=n(344);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},339:function(e,t,n){"use strict";var a=n(0),r=n(340);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},340:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},341:function(e,t,n){"use strict";var a=n(23),r=n(7),c=n(16);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.default)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},343:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},344:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},345:function(e,t,n){"use strict";var a=n(0),r=n(7),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],l=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},346:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},347:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(0),r=n(7),c={desktop:"desktop",mobile:"mobile"};t.a=function(){var e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}var n=Object(a.useState)(t),o=n[0],l=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){l(t())}}),[]),o}},348:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c),l=n(309),i=n(323),s=n(310),u=n(16),d=n(303);t.a=function(e){var t=Object(u.default)().isClient,n=Object(d.useThemeConfig)().navbar,c=n.title,f=n.logo,m=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,v=Object(r.a)(e,["imageClassName","titleClassName"]),p=Object(s.a)(m.href||"/"),g={light:Object(s.a)(m.src),dark:Object(s.a)(m.srcDark||m.src)};return o.a.createElement(l.a,Object(a.a)({to:p},v,m.target&&{target:m.target}),m.src&&o.a.createElement(i.a,{key:t,className:h,sources:g,alt:m.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:b},c))}},349:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c);t.a=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(a.a)({"aria-label":"Menu",className:i,width:n,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),l=f(n(343)),i=f(n(1)),s=f(n(371)),u=f(n(372)),d=n(373);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},372:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},374:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),c=n(0),o=n.n(c),l=n(322),i=n(313),s=n(303);function u(e){var t,n=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),f=Object(i.useActiveVersion)(u),m=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(i.useLatestVersion)(u),b=null!==(t=null!=f?f:m)&&void 0!==t?t:h,v=null!=n?n:b.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.a.createElement(l.a,Object(a.a)({},d,{label:v,to:p}))}},375:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),c=n(0),o=n.n(c),l=n(322),i=n(313),s=n(303),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,c=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,h=e.dropdownItemsAfter,b=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),v=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),O=Object(s.useDocsPreferredVersion)(d),j=O.preferredVersion,E=O.savePreferredVersionName;var k=null!==(t=null!==(n=v.activeVersion)&&void 0!==n?n:j)&&void 0!==t?t:g,y=c?"Versions":k.label,C=c?void 0:u(k).path;return o.a.createElement(l.a,Object(a.a)({},b,{mobile:c,label:y,to:C,items:function(){var e=p.map((function(e){var t=(null==v?void 0:v.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==v?void 0:v.activeVersion)},onClick:function(){E(e.name)}}})),t=[].concat(m,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},376:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),c=n(0),o=n.n(c),l=n(322),i=n(313),s=n(304),u=n(303);function d(e){var t,n,c=e.docId,d=e.activeSidebarClassName,f=e.label,m=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),b=Object(i.useActiveDocContext)(m),v=b.activeVersion,p=b.activeDoc,g=Object(u.useDocsPreferredVersion)(m).preferredVersion,O=Object(i.useLatestVersion)(m),j=null!==(t=null!=v?v:g)&&void 0!==t?t:O,E=j.docs.find((function(e){return e.id===c}));if(!E)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+j.name+".\nAvailable docIds=\n- "+j.docs.join("\n- "));return o.a.createElement(l.a,Object(a.a)({exact:!0},h,{className:Object(s.a)(h.className,(n={},n[d]=p&&p.sidebar===E.sidebar,n)),label:null!=f?f:E.id,to:E.path}))}}}]);