(self.webpackChunklatamkink_io=self.webpackChunklatamkink_io||[]).push([[2965],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return A},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},A=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,h=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?o.createElement(h,r(r({ref:t},A),{},{components:n})):o.createElement(h,r({ref:t},A))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11851:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return A}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),r={id:"node-installation",title:"Installing LACChain EOSIO Nodes",sidebar_label:"How to Install a Node"},l={unversionedId:"guides/node-installation",id:"guides/node-installation",isDocsHomePage:!1,title:"Installing LACChain EOSIO Nodes",description:"Nodeos is the core software of an EOSIO blockchain. It is a deamon that performs all the functions of a blockchain node, such as synchronization with other nodes through the p2p protocol, provides an HTTP API for the client software and optionally signs blocks if configured with the account of a validator.",source:"@site/docs/guides/node-installation.md",sourceDirName:"guides",slug:"/guides/node-installation",permalink:"/docs/guides/node-installation",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/docs/guides/node-installation.md",version:"current",lastUpdatedAt:1621291672,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"How to Install a Node",frontMatter:{id:"node-installation",title:"Installing LACChain EOSIO Nodes",sidebar_label:"How to Install a Node"},sidebar:"docs",previous:{title:"Development environment",permalink:"/docs/guides/development-environment"},next:{title:"Infrastructure Considerations",permalink:"/docs/guides/eosio-nodes"}},s=[{value:"Testnet Information",id:"testnet-information",children:[]},{value:"1. Create an account",id:"1-create-an-account",children:[]},{value:"2. Authenticate on the Dashboard",id:"2-authenticate-on-the-dashboard",children:[]},{value:"3. Deploy a node",id:"3-deploy-a-node",children:[{value:"Configuration examples",id:"configuration-examples",children:[]}]},{value:"4. Delete a node",id:"4-delete-a-node",children:[]}],c={toc:s};function A(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Nodeos")," is the core software of an EOSIO blockchain. It is a deamon that performs all the functions of a blockchain node, such as synchronization with other nodes through the ",(0,i.kt)("inlineCode",{parentName:"p"},"p2p protocol"),", provides an",(0,i.kt)("inlineCode",{parentName:"p"}," HTTP API")," for the client software and optionally ",(0,i.kt)("inlineCode",{parentName:"p"},"signs blocks")," if configured with the account of a validator."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Nodeos")," is available in source code and binary packages in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/releases"},"GitHub repository"),". The supported platforms are Ubuntu 16.04 and 18.04, RHEL7 and MacOS."),(0,i.kt)("p",null,"When planning a server installation, you have several options to select from. Often times, the selection is determined by the existing habits and preferences of the system administrator."),(0,i.kt)("p",null,"Consult our guide on how to configure the ",(0,i.kt)("a",{parentName:"p",href:"./development-environment"},"development environment")," to be able to work on the LACChain EOSIO network. In cases where you need more information about the configuration of nodes in EOSIO networks in general, find out ",(0,i.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/tutoriales/instalacion-de-nodos/"},"here"),"."),(0,i.kt)("h2",{id:"testnet-information"},"Testnet Information"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"EOSIO version"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/lacchain/eosio-network",target:"_blank",rel:"noopener noreferrer"},(0,i.kt)("code",null,"LACChain EOSIO")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Chain ID"),(0,i.kt)("td",null,(0,i.kt)("code",null,"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Genesis file"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json",target:"_blank",rel:"noopener noreferrer"},(0,i.kt)("code",null,"genesis.json"))))),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lacchain/eosio-network"},"repository on GitHub")," for more information about nodes in LACChain EOSIO. If you want to install and configure nodes from the command line, consult the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lacchain/eosio-network/blob/master/README.md"},"README.md")," of our repository on GitHub, before then make sure you have installed the ",(0,i.kt)("a",{parentName:"p",href:"./development-environment"},"development environment")," for EOSIO."),(0,i.kt)("p",null,"Before starting, it is important that you know some ",(0,i.kt)("a",{parentName:"p",href:"./eosio-nodes"},"infrastructure considerations")," about the nodes in EOSIO that can be useful to expand your knowledge of the network operation."),(0,i.kt)("h2",{id:"1-create-an-account"},"1. Create an account"),(0,i.kt)("p",null,"In order to deploy nodes in the LACChain EOSIO network, it is important to have an account registered as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Partner")," or",(0,i.kt)("inlineCode",{parentName:"p"}," Non-Partner"),"."),(0,i.kt)("p",null,"See the guide to create an account according to your user role:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./create-entity-account"},"Non-partner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./create-entity-account"},"Partner"))),(0,i.kt)("h2",{id:"2-authenticate-on-the-dashboard"},"2. Authenticate on the Dashboard"),(0,i.kt)("p",null,"The LACChain EOSIO network has a ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.latamlink.io/"},"dashboard"),", which allows users to manage within the network, including the option to deploy various types of nodes."),(0,i.kt)("p",null,"Login with your ",(0,i.kt)("inlineCode",{parentName:"p"},"Partner")," or",(0,i.kt)("inlineCode",{parentName:"p"}," Non-Partner")," account. See our tutorial on how to manage your ",(0,i.kt)("a",{parentName:"p",href:"./private-keys#31-external-authenticators-wallets"},"private keys")),(0,i.kt)("h2",{id:"3-deploy-a-node"},"3. Deploy a node"),(0,i.kt)("p",null,"Once authenticated with our account, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"administration")," option within the dashboard tools. In this section you will be shown the types of nodes that you can deploy depending on your type of account."),(0,i.kt)("p",null,"In order to create the node, we simply fill in the requested data in the form and execute the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Administration section",src:n(9222).Z})),(0,i.kt)("h3",{id:"configuration-examples"},"Configuration examples"),(0,i.kt)("p",null,"The dashboard also has a section in which we can download an example of the configuration of the different types of node, we only have to access the option of ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.latamlink.io/node-config"},(0,i.kt)("inlineCode",{parentName:"a"},"node config"))," within the tools."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Node config",src:n(31227).Z})),(0,i.kt)("h2",{id:"4-delete-a-node"},"4. Delete a node"),(0,i.kt)("p",null,"Inside the dashboard, there is also an option to be able to delete the nodes, simply by typing the name of the node that we want to delete. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete a node",src:n(22005).Z})))}A.isMDXComponent=!0},31227:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard_01-e5b6eebc0bb5db5b3ee122b6d1b9061e.png"},9222:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard_02-338921cd9cd38b9138328ce10584fafe.png"},22005:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);