(self.webpackChunklatamkink_io=self.webpackChunklatamkink_io||[]).push([[9514,1361,6869],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40767:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Te}});var a=n(67294),r=n(3905),o=n(52263),l=n(46291),i=n(12194),c=n(22122),s=n(19756),u=n(86010),m=n(86700),d=n(80944),p=n(31839),f=n(93783),h=n(77898),g=n(36742),y=n(13919),b=n(98030),v=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},E=n(84478),k=n(24973),N="sidebar_15mo",_="sidebarWithHideableNavbar_267A",C="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",x="menu_Bmed",O="menuLinkText_2aKo",T="menuWithAnnouncementBar_2WvA",S="collapseSidebarButton_1CGd",I="collapseSidebarButtonIcon_3E-R",j="sidebarMenuIcon_fgN0",L="sidebarMenuCloseIcon_1lpH",w="menuLinkExternal_1OhN";var P=function e(t,n){return"link"===t.type?(0,m.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},A=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,["items"]);return t.map((function(e,t){return a.createElement(B,(0,c.Z)({key:t,item:e},n))}))}));function B(e){switch(e.item.type){case"category":return a.createElement(R,e);case"link":default:return a.createElement(D,e)}}function R(e){var t,n,r,o=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),p=o.items,f=o.label,h=P(o,m),g=(n=h,r=(0,a.useRef)(n),(0,a.useEffect)((function(){r.current=n}),[n]),r.current),y=(0,a.useState)((function(){return!!i&&(!h&&o.collapsed)})),b=y[0],v=y[1],E=(0,a.useRef)(null),k=(0,a.useState)(void 0),N=k[0],_=k[1],C=function(e){var t;void 0===e&&(e=!0),_(e?(null==(t=E.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){h&&!g&&b&&v(!1)}),[h,g,b]);var Z=(0,a.useCallback)((function(e){e.preventDefault(),N||C(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[N]);return 0===p.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":b})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[O]=!i,t)),onClick:i?Z:void 0,href:i?"#!":void 0},d),f),a.createElement("ul",{className:"menu__list",ref:E,style:{height:N},onTransitionEnd:function(){b||C(!1)}},a.createElement(A,{items:p,tabIndex:b?"-1":"0",onItemClick:l,collapsible:i,activePath:m})))}function D(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,m=n.label,d=P(n,o);return a.createElement("li",{className:"menu__list-item",key:m},a.createElement(g.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":d},t[w]=!(0,y.Z)(i),t)),to:i},(0,y.Z)(i)&&{isNavLink:!0,exact:!0,onClick:r},l),m))}function M(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(v,{className:I}))}function H(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(j,L)},"\xd7"):a.createElement(E.Z,{className:j,height:24,width:24}))}var z=function(e){var t,n,r=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,c=e.onCollapse,s=e.isHidden,g=function(){var e=(0,d.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),y=(0,m.LU)(),v=y.navbar.hideOnScroll,E=y.hideableSidebar,k=(0,d.Z)().isAnnouncementBarClosed,O=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,p.Z)(t);var r=(0,f.Z)();return(0,a.useEffect)((function(){r===f.D.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),S=O.showResponsiveSidebar,I=O.closeResponsiveSidebar,j=O.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(N,(t={},t[_]=v,t[C]=s,t))},v&&a.createElement(b.Z,{tabIndex:-1,className:Z}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",x,(n={"menu--show":S},n[T]=!k&&g,n))},a.createElement(H,{responsiveSidebarOpened:S,onClick:j}),a.createElement("ul",{className:"menu__list"},a.createElement(A,{items:o,onItemClick:I,collapsible:i,activePath:r}))),E&&a.createElement(M,{onClick:c}))},W={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},U={Prism:n(87410).Z,theme:W};function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var $=/\r\n|\r|\n/,K=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},J=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Q=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=q({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=q({},n,{backgroundColor:null}),r};function V(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var Y=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),F(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Q(e.theme,e.language):void 0;return t.themeDict=n})),F(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=q({},V(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?q({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),F(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),F(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=q({},V(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?q({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),F(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=J(u,m.type),m.alias&&(u=J(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split($),p=d.length;i.push({types:u,content:d[0]});for(var f=1;f<p;f++)K(i),c.push(i=[]),i.push({types:u,content:d[f]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return K(i),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var G=n(87594),X=n.n(G),ee={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},te=n(85350),ne=function(){var e=(0,m.LU)().prism,t=(0,te.Z)().isDarkTheme,n=e.theme||ee,a=e.darkTheme||n;return t?a:n},ae="codeBlockContainer_K1bP",re="codeBlockContent_hGly",oe="codeBlockTitle_eoMF",le="codeBlock_23N8",ie="codeBlockWithTitle_2JqI",ce="copyButton_Ue-o",se="codeBlockLines_39YC",ue=/{([\d,-]+)}/,me=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function de(e){var t=e.children,n=e.className,r=e.metastring,o=e.title,l=(0,m.LU)().prism,i=(0,a.useState)(!1),s=i[0],d=i[1],p=(0,a.useState)(!1),f=p[0],h=p[1];(0,a.useEffect)((function(){h(!0)}),[]);var g=(0,m.bc)(r)||o,y=(0,a.useRef)(null),b=[],v=ne(),E=Array.isArray(t)?t.join(""):t;if(r&&ue.test(r)){var N=r.match(ue)[1];b=X()(N).filter((function(e){return e>0}))}var _=n&&n.replace(/language-/,"");!_&&l.defaultLanguage&&(_=l.defaultLanguage);var C=E.replace(/\n$/,"");if(0===b.length&&void 0!==_){for(var Z,x="",O=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return me(["js","jsBlock"]);case"jsx":case"tsx":return me(["js","jsBlock","jsx"]);case"html":return me(["js","jsBlock","html"]);case"python":case"py":return me(["python"]);default:return me()}}(_),T=E.replace(/\n$/,"").split("\n"),S=0;S<T.length;){var I=S+1,j=T[S].match(O);if(null!==j){switch(j.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":x+=I+",";break;case"highlight-start":Z=I;break;case"highlight-end":x+=Z+"-"+(I-1)+","}T.splice(S,1)}else S+=1}b=X()(x),C=T.join("\n")}var L=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(C),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.createElement(Y,(0,c.Z)({},U,{key:String(f),theme:v,code:C,language:_}),(function(e){var t,n=e.className,r=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return a.createElement("div",{className:ae},g&&a.createElement("div",{style:r,className:oe},g),a.createElement("div",{className:(0,u.Z)(re,_)},a.createElement("div",{tabIndex:0,className:(0,u.Z)(n,le,"thin-scrollbar",(t={},t[ie]=g,t))},a.createElement("div",{className:se,style:r},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.createElement("div",(0,c.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))})))})))),a.createElement("button",{ref:y,type:"button","aria-label":(0,k.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(ce),onClick:L},s?a.createElement(k.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(k.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var pe="enhancedAnchor_2LWZ",fe=function(e){return function(t){var n,r=t.id,o=(0,s.Z)(t,["id"]),l=(0,m.LU)().navbar.hideOnScroll;return r?a.createElement(e,o,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[pe]=!l,n)),id:r}),o.children,a.createElement("a",{className:"hash-link",href:"#"+r,title:(0,k.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(e,o)}},he={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(de,e):a.createElement("code",e)},a:function(e){return a.createElement(g.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(de,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:fe("h1"),h2:fe("h2"),h3:fe("h3"),h4:fe("h4"),h5:fe("h5"),h6:fe("h6")},ge=n(84204),ye=n(5977),be="docPage_31aa",ve="docMainContainer_3ufF",Ee="docMainContainerEnhanced_3NYZ",ke="docSidebarContainer_3Kbt",Ne="docSidebarContainerHidden_3pA8",_e="collapsedDocSidebar_2JMH",Ce="expandSidebarButtonIcon_1naQ",Ze="docItemWrapperEnhanced_2vyJ",xe="docItemWrapper_3FMP";function Oe(e){var t,n,l,c,s,d=e.currentDocRoute,p=e.versionMetadata,f=e.children,h=(0,o.default)(),g=h.siteConfig,y=h.isClient,b=p.pluginId,E=p.permalinkToSidebar,N=p.docsSidebars,_=p.version,C=E[d.path],Z=N[C],x=(0,a.useState)(!1),O=x[0],T=x[1],S=(0,a.useState)(!1),I=S[0],j=S[1],L=(0,a.useCallback)((function(){I&&j(!1),T(!O)}),[I]);return a.createElement(i.Z,{key:y,wrapperClassName:m.kM.wrapper.docPages,pageClassName:m.kM.page.docPage,searchMetadatas:{version:_,tag:(0,m.os)(b,_)}},a.createElement("div",{className:be},Z&&a.createElement("div",{className:(0,u.Z)(ke,(t={},t[Ne]=O,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ke)&&O&&j(!0)},role:"complementary"},a.createElement(z,{key:C,sidebar:Z,path:d.path,sidebarCollapsible:null==(n=null==(l=g.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:L,isHidden:I}),I&&a.createElement("div",{className:_e,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:L,onClick:L},a.createElement(v,{className:Ce}))),a.createElement("main",{className:(0,u.Z)(ve,(c={},c[Ee]=O||!Z,c))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",xe,(s={},s[Ze]=O,s))},a.createElement(r.Zo,{components:he},f)))))}var Te=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,ye.LX)(r.pathname,e)}));return o?a.createElement(Oe,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t)):a.createElement(ge.default,e)}},546:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(36742),c=n(52263),s=n(44996),u="footerLogoLink_qW4Z";function m(e){var t=e.to,n=e.href,l=e.label,c=e.prependBaseUrlToHref,u=(0,r.Z)(e,["to","href","label","prependBaseUrlToHref"]),m=(0,s.Z)(t),d=(0,s.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:c?d:n}:{to:m},u),l)}var d=function(e){var t=e.url,n=e.alt;return o.createElement("img",{className:"footer__logo",alt:n,src:t})};var p=function(){var e=(0,c.default)().siteConfig,t=(void 0===e?{}:e).themeConfig,n=(void 0===t?{}:t).footer,a=n||{},r=a.copyright,i=a.links,p=void 0===i?[]:i,f=a.logo,h=void 0===f?{}:f,g=(0,s.Z)(h.src);return n?o.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===n.style})},o.createElement("div",{className:"container"},p&&p.length>0&&o.createElement("div",{className:"row footer__links"},p.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(m,e))}))):null)}))),(h||r)&&o.createElement("div",{className:"text--center"},h&&h.src&&o.createElement("div",{className:"margin-bottom--sm"},h.href?o.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:u},o.createElement(d,{alt:h.alt,url:g})):o.createElement(d,{alt:h.alt,url:g})),o.createElement("div",{dangerouslySetInnerHTML:{__html:r}})),o.createElement("section",{className:"copyright"},o.createElement("div",{className:"icon-container"},o.createElement("h2",{id:"poweredby"},"Led by"),o.createElement("a",{href:"/",className:"nav-home"},o.createElement("img",{className:"footer-logo",src:"/images/latamlink_logo-h-full-color-overwhite.png",alt:"LACChain EOSIO Testnet"})),o.createElement("a",{href:"https://eoscostarica.io/es/",target:"_blank",className:"nav-home"},o.createElement("img",{className:"footer-logo",src:"/images/EOSCr-logo.png",alt:"LACChain EOSIO Testnet"})),o.createElement("a",{href:"https://www.eosargentina.io/",target:"_blank",className:"nav-home"},o.createElement("img",{className:"footer-logo",src:"/images/eosar_logo.png",alt:"LACChain EOSIO Testnet"})),o.createElement("a",{href:"https://eosvenezuela.io/",target:"_blank",className:"nav-home"},o.createElement("img",{className:"footer-logo",src:"/images/eosvenezuelalogo-122x122.png",alt:"LACChain EOSIO Testnet"}))),o.createElement("br",null)))):null}},84204:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(1852),o=n(12194),l=n(87748);t.default=function(){var e=(0,r.useMediaQuery)({query:"(max-width: 1100px)"}),t=(0,r.useMediaQuery)({query:"(min-width: 1100px)"});return a.createElement(o.Z,null,t&&a.createElement(l.Z,{className:"mainContainer"},a.createElement(l.Z,{className:"containerSec"},a.createElement(l.Z,{className:"sectionHero"},a.createElement(l.Z,{className:"titleBox"},a.createElement("h1",{className:"centerText"},"Oops! We couldn't find this page."),a.createElement("h1",{className:"centerText"},"Please, go back to the ",a.createElement("a",{style:{color:"#1dc961"},href:"/"},"homepage")," and try again.")),a.createElement("p",{className:"centerText"},"If you have any questions about LACChain EOSIO, please visit ",a.createElement("a",{href:"/docs/testnet/eosio"},"our documentation"),"!")))),e&&a.createElement(l.Z,{className:"mainContainer"},a.createElement(l.Z,{className:"containerSec"},a.createElement(l.Z,{className:"sectionHeroMobile"},a.createElement(l.Z,{className:"section"},a.createElement(l.Z,{className:"titleBox"},a.createElement("h1",{style:{paddingLeft:"25px",paddingRight:"25px",fontSize:"30px"},className:"centerText"},"Oops! We couldn't find this page."),a.createElement("h2",{style:{paddingLeft:"25px",paddingRight:"25px",fontSize:"20px"},className:"centerText"},"Please, go back to the ",a.createElement("a",{style:{color:"#1dc961"},href:"/"},"homepage")," and try again.")),a.createElement("p",{style:{paddingLeft:"25px",paddingRight:"25px",fontSize:"14px"},className:"centerText"},"If you have any questions about LACChain EOSIO, please visit ",a.createElement("a",{href:"/docs/testnet/eosio"},"our documentation"),"!"))))))}},87594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);