(self.webpackChunklatamkink_io=self.webpackChunklatamkink_io||[]).push([[996],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return a?n.createElement(m,c(c({ref:t},p),{},{components:a})):n.createElement(m,c({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13015:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),c={id:"deploy-smart-contract",title:"How to Deploy a Smart Contract",sidebar_label:"How to Deploy a Contract"},i={unversionedId:"guides/deploy-smart-contract",id:"guides/deploy-smart-contract",isDocsHomePage:!1,title:"How to Deploy a Smart Contract",description:"Below we explain with examples how to create, compile and deploy a \u201cHello World\u201d contract to upload it to the LACChain EOSIO network. For this example, we are relying on resources posted by Block.one to share with the community.",source:"@site/docs/guides/deploy-smart-contract.md",sourceDirName:"guides",slug:"/guides/deploy-smart-contract",permalink:"/docs/guides/deploy-smart-contract",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/docs/guides/deploy-smart-contract.md",version:"current",lastUpdatedAt:1621291672,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"How to Deploy a Contract",frontMatter:{id:"deploy-smart-contract",title:"How to Deploy a Smart Contract",sidebar_label:"How to Deploy a Contract"},sidebar:"docs",previous:{title:"How to obtain network resources",permalink:"/docs/guides/get-resources"},next:{title:"Development environment",permalink:"/docs/guides/development-environment"}},l=[{value:"1. Get your LACChain EOSIO account",id:"1-get-your-lacchain-eosio-account",children:[]},{value:"2. Acquire RAM",id:"2-acquire-ram",children:[]},{value:"3. Create a Contract",id:"3-create-a-contract",children:[]},{value:"4. Compile the contract",id:"4-compile-the-contract",children:[]},{value:"5. Publish the contract",id:"5-publish-the-contract",children:[{value:"5.1 Shell File",id:"51-shell-file",children:[]}]},{value:"6. Contract Verification",id:"6-contract-verification",children:[]},{value:"Video-Tutorial",id:"video-tutorial",children:[]}],s={toc:l};function p(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Below we explain with examples how to create, compile and deploy a \u201cHello World\u201d contract to upload it to the LACChain EOSIO network. For this example, we are relying on resources posted by ",(0,r.kt)("a",{parentName:"p",href:"http://developers.eos.io/"},"Block.one to share with the community"),"."),(0,r.kt)("h2",{id:"1-get-your-lacchain-eosio-account"},"1. Get your LACChain EOSIO account"),(0,r.kt)("p",null,"In the LACChain EOSIO network, there are several types of accounts. See the guide to create an account according to your user role:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./create-user-account"},"End User")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./create-contract-account"},"App or contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./create-entity-account"},"Non-partner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./create-entity-account"},"Partner"))),(0,r.kt)("h2",{id:"2-acquire-ram"},"2. Acquire RAM"),(0,r.kt)("p",null,"Once the account is had in the LACChain EOSIO Testnet, for the contract, we will need to have resources to deploy the contract in this case RAM. For this consult about the ",(0,r.kt)("a",{parentName:"p",href:"../resource-usage"},"management of resources in the network"),"."),(0,r.kt)("p",null,'To extract the account information and verify how many kilobytes of RAM the account has available, it can perform by executing the following command which can point to the "end-point" of any of the network partners, you can see the list of partners ',(0,r.kt)("a",{parentName:"p",href:"./partners"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos -u http://lacchain.eosio.cr get account {nombrecuenta}\n")),(0,r.kt)("h2",{id:"3-create-a-contract"},"3. Create a Contract"),(0,r.kt)("p",null,"To continue, we are going to create a simple contract within a new directory, which we call ",(0,r.kt)("inlineCode",{parentName:"p"},"hellocontract"),". As EOS requires resources, these must be associated with the tokens of an account, so the same name of the previously created contract must be entered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="holacontrato.cpp"',title:'"holacontrato.cpp"'},'# include <eosio/eosio.hpp>\nusing namespace eosio;\nclass [[eosio::contract]] holacontrato : public contract {\n    public:\n        using contract::contract;\n        [[eosio::action]]\n        void hola( name user ){\n            print( "Hola, ", user );\n        }\n};\n')),(0,r.kt)("p",null,"To edit the contract, a text editor can be used. Sublime Text was used for this example."),(0,r.kt)("p",null,"The first line includes a library that can be accessed through the Contract Development Toolkit (CDT), a tool that allows access to resources to create contracts, ",(0,r.kt)("a",{parentName:"p",href:"./development-environment"},"information about their installation"),"."),(0,r.kt)("p",null,"In the class line, we must expose our contract ",(0,r.kt)("inlineCode",{parentName:"p"},"hellocontract")," that has a defined action, which in this case we call",(0,r.kt)("inlineCode",{parentName:"p"}," hello")," and its argument is a user type name. When you save the contract, a C ++ file remains in the directory."),(0,r.kt)("h2",{id:"4-compile-the-contract"},"4. Compile the contract"),(0,r.kt)("p",null,"The C ++ file has to be compiled using the CDT tool, which receives the C ++ file as input and as output originates a web assembly (wasm) file that is an executable file by the contract. In addition to the wasm file, an abi file is also generated that is used for mapping the contract functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eosio-cpp -abigen -contract holacontrato -o holacontrato.wasm src/holacontrato.cpp\n")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"-abigen"),": Flag to generate the file ABI (Application Binary Interface)."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"-contract"),": Specify the name of the contract."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"-o"),": Specifies the name of the compiled file."))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Since we do not specify a Ricardian clause, the system gives us a message that it does not exist. See more information about ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/contratos-ricardianos"},"Ricardian clauses"),"."),(0,r.kt)("h2",{id:"5-publish-the-contract"},"5. Publish the contract"),(0,r.kt)("p",null,"When the contract has been compiled and the .wasm file and .abi file have been generated, the contract is uploaded to LACChain and for this case, it is required to create a .sh file that allows the execution of commands to automate this to a certain extent. process."),(0,r.kt)("p",null,"In the terminal, we execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch holacontrato.sh\nchmod 755 holacontrato.sh\n")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"touch"),": creating a file"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"chmod"),": change mode (assign or remove privileges)"))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"51-shell-file"},"5.1 Shell File"),(0,r.kt)("p",null,"Inside the file that we just created, the following function must be inserted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="hellocontract.sh"',title:'"hellocontract.sh"'},"deploy_hellocontract_contracts_to_lacchain() {   \n    echo 'Deploy hellocontract'\n    mkdir -p ./stdout/hellocontract\n    TEMP_DIR=./stdout/hellocontract\n    echo '1. set hellocontract smart contract code'\n    cleos -u $EOS_API_URL set contract hellocontract -j -d -s ../hellocontract/ >$TEMP_DIR/tx2.json\n    echo '2. writer auth'\n    cleos -u $EOS_API_URL push action -j -d -s writer run '{}' -p costarica@writer >$TEMP_DIR/tx1.json\n    echo '3. merge actions'\n    jq -s '[.[].actions[]]' $TEMP_DIR/tx1.json $TEMP_DIR/tx2.json >$TEMP_DIR/tx3.json\n    echo '4. merge transaction'\n    jq '.actions = input' $TEMP_DIR/tx1.json $TEMP_DIR/tx3.json >$TEMP_DIR/tx4.json\n    echo '5. sign transaction'\n    cleos -u $EOS_API_URL push transaction $TEMP_DIR/tx4.json -p costarica@writer -p hellocontract@active\n}\n\ndeploy_hellocontract_contracts_to_lacchain\n")),(0,r.kt)("p",null,"By this point in the execution, we already have our smart contract deployed in LACChain."),(0,r.kt)("h2",{id:"6-contract-verification"},"6. Contract Verification"),(0,r.kt)("p",null,"For this we go to the (",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.latamlink.io/accounts"},"LACChain EOSIO Dashboard"),"), we can verify that the account is the owner of a contract that exposes the action ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," and that it contains the information ABI in which the actions within the contract and associated components are specified in a JSON structure."),(0,r.kt)("p",null,"Once the contract is ready, we can execute an action on the contract, it will receive as input the phrase ",(0,r.kt)("strong",{parentName:"p"},"LACChain EOSIO")," and it will be obtained as output ",(0,r.kt)("strong",{parentName:"p"},"hello LACChain EOSIO"),". For this we must execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos -u http://lacchain.eosio.cr push action holacontrato hola '[\"LACChain EOSIO\"]' -p holacontrato@active\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is necessary to wait a few seconds to complete the irreversibility of the block, since the block producers must validate the data block for this."))),(0,r.kt)("h2",{id:"video-tutorial"},"Video-Tutorial"),(0,r.kt)("iframe",{width:"100%",height:"350px",src:"https://www.youtube.com/embed/nMivNMvS09Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,mark:"crwd-mark"}))}p.isMDXComponent=!0}}]);