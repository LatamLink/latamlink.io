(self.webpackChunklatamkink_io=self.webpackChunklatamkink_io||[]).push([[6407],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4104:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),r={id:"consensus-mechanism",title:"Consensus Mechanism",sidebar_label:"Consensus Mechanism"},s={unversionedId:"consensus-mechanism",id:"consensus-mechanism",isDocsHomePage:!1,title:"Consensus Mechanism",description:"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network.",source:"@site/docs/consensus-mechanism.md",sourceDirName:".",slug:"/consensus-mechanism",permalink:"/docs/consensus-mechanism",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/docs/consensus-mechanism.md",version:"current",lastUpdatedAt:1621291672,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"Consensus Mechanism",frontMatter:{id:"consensus-mechanism",title:"Consensus Mechanism",sidebar_label:"Consensus Mechanism"},sidebar:"docs",previous:{title:"LACChain EOSIO Testnet",permalink:"/docs/eosio"},next:{title:"Accounts and Authorizations",permalink:"/docs/accounts-permissions"}},l=[{value:"LACChain Permisioning Committee",id:"lacchain-permisioning-committee",children:[{value:"Consensus Group",id:"consensus-group",children:[]}]},{value:"Active Validator Nodes",id:"active-validator-nodes",children:[]},{value:"Block production schedule",id:"block-production-schedule",children:[{value:"Byzantine Fault Tolerance",id:"byzantine-fault-tolerance",children:[]},{value:"Node Fault Tolerance",id:"node-fault-tolerance",children:[]}]},{value:"Stand-By validator nodes",id:"stand-by-validator-nodes",children:[{value:"Validator Node Rotation",id:"validator-node-rotation",children:[]},{value:"Replacement of an active Validator Node",id:"replacement-of-an-active-validator-node",children:[]}]},{value:"Custom EOSIO system contracts",id:"custom-eosio-system-contracts",children:[{value:"Disabled dPOS functions :",id:"disabled-dpos-functions-",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network."),(0,i.kt)("p",null,"LACChain EOSIO will delegate the authority for validating and writing new blocks to a group of nodes that we call ",(0,i.kt)("strong",{parentName:"p"},"validator nodes"),"."),(0,i.kt)("h2",{id:"lacchain-permisioning-committee"},"LACChain Permisioning Committee"),(0,i.kt)("p",null,"LACChain is a public / permissioned blockchain which aims to become a legally supervised network. This objective requires a central authority to govern the activity of the network."),(0,i.kt)("p",null,"LACChain is designed under the principle that the permisioning committee is transparent and has as little intervention as possible."),(0,i.kt)("p",null,"The authority of the permisioning committee can be derived from a set of actors through multi-signature ",(0,i.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-propose-a-multisig-transaction/#gatsby-focus-wrapper"},(0,i.kt)("inlineCode",{parentName:"a"},"multisig"))," approvals so that the group's consensus is required by way of a simple majority, that is, the votes gathered sum 1/2 +1 of the actors."),(0,i.kt)("p",null,"One of the main functions of the permisioning committee is to evaluate the entities that want to register as validator nodes."),(0,i.kt)("h3",{id:"consensus-group"},"Consensus Group"),(0,i.kt)("p",null,"The group of validator nodes have the authority to write to the blockchain because this privilege was granted by a higher authority, the ",(0,i.kt)("strong",{parentName:"p"},"permisioning committee"),", who will be the maximum authority and who determines which nodes will be the block producing nodes."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Any entity that meets a minimum of technical and legal requirements can apply to be a validator node on LACChain EOSIO. See our section on the ",(0,i.kt)("a",{parentName:"p",href:"./guides/create-entity-account"},"permissioning process")," for more information.")),(0,i.kt)("p",null,"Eventually there will be a legal vehicle, who verifies identity and signs contracts with validator nodes."),(0,i.kt)("h2",{id:"active-validator-nodes"},"Active Validator Nodes"),(0,i.kt)("p",null,"The accounts authorized as active validator nodes belong to a group that shares the responsibility of validating and writing all the transactions in the network."),(0,i.kt)("p",null,"They are able to recognize the signatures of other nodes and verify that the transactions have been transmitted to the network by authorized nodes through white lists in smart contracts."),(0,i.kt)("p",null,"An EOSIO network is configured by default to use 21 active producers and a series of reserve producers for stable operation."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"EOSIO allows up to 125 active validator nodes, specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"max_producers")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"},"config.hpp"))),(0,i.kt)("h2",{id:"block-production-schedule"},"Block production schedule"),(0,i.kt)("p",null,"In EOSIO networks, active validator nodes are listed on a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"schedule"))," list."),(0,i.kt)("p",null,"The schedule is arranged alphabetically and thus defines the sequence in which validator nodes must sign blocks."),(0,i.kt)("p",null,"Each validator receives a 12 block window to sign before the next producer starts their window. New blocks are produced by the first node in the list for a period of 6 seconds (12 blocks) and then the next node continues to produce the next 12 blocks and so on."),(0,i.kt)("p",null,"If a validator node is not ready or unavailable, there is no one to produce the 12 blocks, so all speculative transactions are delayed until the next producer starts signing."),(0,i.kt)("h3",{id:"byzantine-fault-tolerance"},"Byzantine Fault Tolerance"),(0,i.kt)("p",null,"New blocks are considered reversible until they have been validated by 2/3 +1 of the active producers. This way if a producer node inserts an invalid block, the following nodes will reject it and the block will not be included unless 2/3 +1 of the producers group approve it."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Example:")," A network of 21 active validators requires signatures of 15 nodes (2/3 +1), which takes on average 90 seconds to obtain irreversibility of a new block.")),(0,i.kt)("h3",{id:"node-fault-tolerance"},"Node Fault Tolerance"),(0,i.kt)("p",null,"Once a block is signed, other producers on the schedule validate it and it goes into an irreversible state after 2/3 + 1 producers have signed. So if 1/3 or more of all producers are offline, the last irreversible block number, known as ",(0,i.kt)("strong",{parentName:"p"},"Last Irreversible Block")," or ",(0,i.kt)("strong",{parentName:"p"},"LIB"),", would not increase and the blockchain will stop."),(0,i.kt)("p",null,"Servers sometimes fail, and sometimes must be decommissioned for software updates and system maintenance, which is important to consider on small EOSIO networks."),(0,i.kt)("p",null,"With only 5 producers, the network will tolerate 1 producer going offline. If more than one is offline, the number of the Last Irreversible Block will stop increasing and the network will stop. With 4 nodes, a single failed a node will stall the network. With 9 producers, two nodes can be disconnected without breaking the network."),(0,i.kt)("p",null,"It is also important that private keys used by production nodes are properly backed up. If block producer keys are lost due to a system disaster, there is a chance that the network will stop working forever."),(0,i.kt)("h2",{id:"stand-by-validator-nodes"},"Stand-By validator nodes"),(0,i.kt)("p",null,"EOSIO networks keep a list of registered validators that run nodes that can successfully produce blocks just by being added to the schedule of active producers by the permisioning committee."),(0,i.kt)("h3",{id:"validator-node-rotation"},"Validator Node Rotation"),(0,i.kt)("p",null,"The periodic rotation of active validator producing nodes in the schedule favors decentralization. For this reason, the permisioning committee will have a ",(0,i.kt)("a",{parentName:"p",href:"./tools/network-governance"},"network management tool")," that allows selecting the validator nodes that it wants to include or exclude in the schedule."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"For example:")," You can define a weekly active node rotation policy.")),(0,i.kt)("p",null,"Later on, periodic and automatic rotation based on smart contracts will be enabled. In such a way that it is impossible to predict who are the producers of selected active blocks. (external entropy)"),(0,i.kt)("h3",{id:"replacement-of-an-active-validator-node"},"Replacement of an active Validator Node"),(0,i.kt)("p",null,"If a node on the schedule stops responding. The permisioning committee may manually replace validator nodes with performance or security issues."),(0,i.kt)("p",null,"Eventually, a smart contract may be implemented to replace a block producer's account in the schedule automatically based on objective performance metrics."),(0,i.kt)("h2",{id:"custom-eosio-system-contracts"},"Custom EOSIO system contracts"),(0,i.kt)("p",null,"LACChain will use tailored system contracts. Building over the native EOSIO system contracts, where the main changes lie replacing native ",(0,i.kt)("strong",{parentName:"p"},"Delegated Proof of Stake (dPOS)")," mechanism with the standard defined by ",(0,i.kt)("strong",{parentName:"p"},"LACChain"),"."),(0,i.kt)("p",null,"This change involves disabling the use of tokens and voting features of the DPOS protocol. It will also no longer be necessary to issue a system token."),(0,i.kt)("h3",{id:"disabled-dpos-functions-"},"Disabled dPOS functions :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"System Token"),(0,i.kt)("li",{parentName:"ul"},"Block Producer Voting"),(0,i.kt)("li",{parentName:"ul"},"Block Producer Payment"),(0,i.kt)("li",{parentName:"ul"},"Staking for resources"),(0,i.kt)("li",{parentName:"ul"},"Delegation of Resources"),(0,i.kt)("li",{parentName:"ul"},"Namebiding"),(0,i.kt)("li",{parentName:"ul"},"Resource Exchange (REX)")),(0,i.kt)("p",null,"This functionality will not necessarily be removed, but an \u201cassert false\u201d function will be used to disable the functions since these functions are not required."),(0,i.kt)("p",null,"In essence, the LACChain system contracts define a mechanism to register the validator nodes as well as allocate ",(0,i.kt)("strong",{parentName:"p"},"system resources")," required by the network user accounts to execute their smart contracts."))}d.isMDXComponent=!0}}]);