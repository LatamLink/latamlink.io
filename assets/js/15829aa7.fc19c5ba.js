(self.webpackChunklatamkink_io=self.webpackChunklatamkink_io||[]).push([[696],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33300:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var o=n(22122),i=n(19756),r=(n(67294),n(3905)),a={id:"accounts-permissions",title:"Accounts and Authorizations",sidebar_label:"Accounts and Authorization"},s={unversionedId:"accounts-permissions",id:"accounts-permissions",isDocsHomePage:!1,title:"Accounts and Authorizations",description:"Accounts",source:"@site/docs/accounts-permissions.md",sourceDirName:".",slug:"/accounts-permissions",permalink:"/docs/accounts-permissions",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/docs/accounts-permissions.md",version:"current",lastUpdatedAt:1621291672,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"Accounts and Authorization",frontMatter:{id:"accounts-permissions",title:"Accounts and Authorizations",sidebar_label:"Accounts and Authorization"},sidebar:"docs",previous:{title:"Consensus Mechanism",permalink:"/docs/consensus-mechanism"},next:{title:"Permissions and Traceability",permalink:"/docs/traceability"}},c=[{value:"Accounts",id:"accounts",children:[]},{value:"Account Permissions",id:"account-permissions",children:[]},{value:"Authorizations",id:"authorizations",children:[]}],l={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"account")," on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain."),(0,r.kt)("p",null,"The account name must comply with certain requirements: characters from ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," in lower case, numbers from ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," and have 12 characters length. E. g. ",(0,r.kt)("inlineCode",{parentName:"p"},"lacchaineos1"),"."),(0,r.kt)("p",null,"Read more on ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions/#2-accounts"},"EOSIO accounts")),(0,r.kt)("h2",{id:"account-permissions"},"Account Permissions"),(0,r.kt)("p",null,"EOSIO allows to create custom hierarchical permissions that stem from the owner permission. A custom permission is basically a key that can only perform the actions you allow it to perform. "),(0,r.kt)("p",null,"Each account has two base permissions ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," and",(0,r.kt)("inlineCode",{parentName:"p"}," active"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," is a recovery key that is kept ideally in cold storage and used only in case of wanting to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," key. Apart from these two initial permissions, additional custom permissions can be configured."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"For example:")," Any account can create a custom permission with its unique key pair to solely interact with a single contract. ")),(0,r.kt)("p",null,"In this way EOSIO offers state of the art permissioning capabilities with huge flexibility to configure simple or complex built in to the base protocol. "),(0,r.kt)("p",null,"Account permissions also strengthen security in case someone who is unauthorized gets a hold of a private key, all they can ever do is the actions that key has been limited to execute."),(0,r.kt)("h2",{id:"authorizations"},"Authorizations"),(0,r.kt)("p",null,"Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract. This allows finer control over action authorizations which makes it very easy for accounts belonging to actors with different roles within an organization reflect the organizational structure on the blockchain.  "),(0,r.kt)("p",null,"In other words each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied"),(0,r.kt)("p",null,"To get more information about these concepts, see ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions"},"accounts and permissions documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EOSIO Permisions",src:n(6879).Z})))}u.isMDXComponent=!0},6879:function(e,t,n){"use strict";t.Z=n.p+"assets/images/eosio-permissions-08fb6ceffe6da27a6690e27fda0629a0.png"}}]);