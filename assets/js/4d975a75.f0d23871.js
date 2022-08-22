"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[323],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2577:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const i={},a="How to Configure Web Monitor",l={unversionedId:"node-ops/validator/guides/web_monitor",id:"node-ops/validator/guides/web_monitor",title:"How to Configure Web Monitor",description:"Why",source:"@site/docs/node-ops/validator/guides/web_monitor.md",sourceDirName:"node-ops/validator/guides",slug:"/node-ops/validator/guides/web_monitor",permalink:"/0L-documentation/docs/node-ops/validator/guides/web_monitor",draft:!1,editUrl:"https://github.com/nControl88/0l-documentation-source/tree/main/docs/node-ops/validator/guides/web_monitor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validator node file",permalink:"/0L-documentation/docs/node-ops/validator/guides/vfn_validator_fullnode_setup"},next:{title:"How to Configure Web Monitor Account Dictionary",permalink:"/0L-documentation/docs/node-ops/validator/guides/web_monitor_account_dictionary"}},s={},u=[{value:"Why",id:"why",level:2},{value:"How to set up",id:"how-to-set-up",level:2},{value:"How to start it",id:"how-to-start-it",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How to access it",id:"how-to-access-it",level:2}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-configure-web-monitor"},"How to Configure Web Monitor"),(0,n.kt)("h2",{id:"why"},"Why"),(0,n.kt)("p",null,"When you operate a full node or validator node you might be interested in a monitoring tool which shows the current node status accessible by your web browser."),(0,n.kt)("h2",{id:"how-to-set-up"},"How to set up"),(0,n.kt)("p",null,"After your node is set up and you already have a $HOME/.0L directory, you have to install the static web files there:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd $HOME/libra  # the directory where you checked out the source\nmake web-files\n")),(0,n.kt)("p",null,"You might verify that a new directory has been created $HOME/.0L/web-monitor"),(0,n.kt)("h2",{id:"how-to-start-it"},"How to start it"),(0,n.kt)("p",null,"It is strongly recommended to let the web-monitor run in a tmux session, as also done for the diem-node and tower app:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"tmux new -t monitor\n")),(0,n.kt)("p",null,"Start the web monitor in this tmux session by the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ol serve -c\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"You may get an issue with ",(0,n.kt)("inlineCode",{parentName:"p"},"Connection Failed: Connection refused (os error 111)"),", when trying to start the monitor. If you do, check out troubleshooting steps here"),(0,n.kt)("h2",{id:"how-to-access-it"},"How to access it"),(0,n.kt)("p",null,"Once the web monitor is running, you can access it in your browser at the following URL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"http://<your-ip-address>:3030\n")))}d.isMDXComponent=!0}}]);