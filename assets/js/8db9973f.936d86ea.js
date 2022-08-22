"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={},a="How to Configure Web Monitor Account Dictionary",c={unversionedId:"node-ops/validator/web_monitor_account_dictionary",id:"node-ops/validator/web_monitor_account_dictionary",title:"How to Configure Web Monitor Account Dictionary",description:"Why",source:"@site/docs/node-ops/validator/web_monitor_account_dictionary.md",sourceDirName:"node-ops/validator",slug:"/node-ops/validator/web_monitor_account_dictionary",permalink:"/0L-documentation/docs/node-ops/validator/web_monitor_account_dictionary",draft:!1,editUrl:"https://github.com/nControl88/0l-documentation-source/tree/main/docs/node-ops/validator/web_monitor_account_dictionary.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Configure Web Monitor",permalink:"/0L-documentation/docs/node-ops/validator/web_monitor"}},l={},u=[{value:"Why",id:"why",level:2},{value:"How",id:"how",level:2},{value:"Where",id:"where",level:2}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-configure-web-monitor-account-dictionary"},"How to Configure Web Monitor Account Dictionary"),(0,r.kt)("h2",{id:"why"},"Why"),(0,r.kt)("p",null,"You may be interested to identify account addresses displayed in the web monitor."),(0,r.kt)("p",null,"Web monitor supports a dictionary file to associate a note to every account address of your interest.\nE.g.:",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10797037/127385501-f6ec4b4a-e4bc-430c-b8c2-6be2d96293ae.png",alt:"web monitor address note"})),(0,r.kt)("h2",{id:"how"},"How"),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts-dictionary.json")," with the following structure example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "accounts": [\n       { "note": "build a chain", "address": "88E74DFED34420F2AD8032148280A84B" },\n       { "note": "save the world", "address": "4C613C2F4B1E67CA8D98A542EE3F59F5" }\n    ]\n}\n')),(0,r.kt)("h2",{id:"where"},"Where"),(0,r.kt)("p",null,"The dictionary file must be placed in the validator /.0L folder. E.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.0L/accounts-dictionary.json")),(0,r.kt)("p",null,"Once the file is deployed, the server will send the notes to the client.\ns"))}s.isMDXComponent=!0}}]);