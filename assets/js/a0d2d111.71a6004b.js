"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const a={},r="Running 0L validator as a system service",l={unversionedId:"node-ops/validator/guides/validator_daemon_configs",id:"node-ops/validator/guides/validator_daemon_configs",title:"Running 0L validator as a system service",description:"This guide will create a daemon service which runs diem-node and restarts on failure and on reboot.",source:"@site/docs/node-ops/validator/guides/validator_daemon_configs.md",sourceDirName:"node-ops/validator/guides",slug:"/node-ops/validator/guides/validator_daemon_configs",permalink:"/0L-documentation/docs/node-ops/validator/guides/validator_daemon_configs",draft:!1,editUrl:"https://github.com/nControl88/0l-documentation-source/tree/main/docs/node-ops/validator/guides/validator_daemon_configs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update Validator to Operator mapping",permalink:"/0L-documentation/docs/node-ops/validator/guides/update_validator_to_operator_mapping"},next:{title:"Validator node file",permalink:"/0L-documentation/docs/node-ops/validator/guides/vfn_validator_fullnode_setup"}},s={},d=[{value:"Build binaries and copy to appropriate path",id:"build-binaries-and-copy-to-appropriate-path",level:2},{value:"Create the service configurations for Systemd",id:"create-the-service-configurations-for-systemd",level:2},{value:"NOTE: When you update any <code>*service</code> file, you must reload <code>ststemctl</code>",id:"note-when-you-update-any-service-file-you-must-reload-ststemctl",level:3},{value:"Watch diem-node logs",id:"watch-diem-node-logs",level:3},{value:"Start the new service",id:"start-the-new-service",level:3},{value:"Stop the new service",id:"stop-the-new-service",level:3},{value:"Enable the new service to start on boot",id:"enable-the-new-service-to-start-on-boot",level:3},{value:"Check status of the new service",id:"check-status-of-the-new-service",level:3},{value:"Set up proper logging",id:"set-up-proper-logging",level:3},{value:"Validator Wizard",id:"validator-wizard",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-0l-validator-as-a-system-service"},"Running 0L validator as a system service"),(0,i.kt)("p",null,"This guide will create a daemon service which runs ",(0,i.kt)("inlineCode",{parentName:"p"},"diem-node")," and restarts on failure and on reboot."),(0,i.kt)("p",null,"Note that this guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"targets Ubuntu 20.4."),(0,i.kt)("li",{parentName:"ul"},"assumes you have set up your environment correctly (see util/setup.sh)."),(0,i.kt)("li",{parentName:"ul"},"does not provision the ",(0,i.kt)("inlineCode",{parentName:"li"},"tower")," service which is a separate concern from ",(0,i.kt)("inlineCode",{parentName:"li"},"diem-node"),".")),(0,i.kt)("h1",{id:"background"},"Background"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemd"),", is a linux utility for managing long-running services on linux. The validation service (",(0,i.kt)("inlineCode",{parentName:"p"},"diem-node"),") is one such long running service. The ",(0,i.kt)("inlineCode",{parentName:"p"},"tower")," is another, but that is out of scope for this doc."),(0,i.kt)("p",null,"There are a few file paths you will be working from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.0L/")," will contain the node configurations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/<project root>/diem-node"),": contains the source code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/<project root>/target/release"),": will contain binaries produced by cargo")),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"This will use a ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," recipe to start the node daemon and install the daemon configs."),(0,i.kt)("p",null,"A template ",(0,i.kt)("inlineCode",{parentName:"p"},"ol/util/diem-node.service")," will be copied into your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/systemd/user/")," path to setup the service. This is non-root template file which uses the home directory of the managing user of the service."),(0,i.kt)("p",null,"BEFORE PROCEEDING: Check that you have ",(0,i.kt)("inlineCode",{parentName:"p"},"ol/util/diem-node.service")," in place."),(0,i.kt)("p",null,"Now the Makefile can do a number of things including coping that file to the usual place, and then (re)starting the service."),(0,i.kt)("p",null,"From the project root:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"make daemon")),(0,i.kt)("h1",{id:"configure-manually"},"Configure manually"),(0,i.kt)("h2",{id:"build-binaries-and-copy-to-appropriate-path"},"Build binaries and copy to appropriate path"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"make bins install")," or alternatively:"),(0,i.kt)("h2",{id:"create-the-service-configurations-for-systemd"},"Create the service configurations for Systemd"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/systemd/user/")," you should create a file like this. (Note: again, ",(0,i.kt)("inlineCode",{parentName:"p"},"make daemon")," does this for you)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# this assumes that the managing user of the service is `node`, hence the `/home/node` home path prefix\n[Unit]\nDescription=0L Node Service\n\n[Service]\nLimitNOFILE=20000\nWorkingDirectory=/home/node/.0L\nExecStart=/home/node/bin/diem-node --config /home/node/.0L/validator.node.yaml\n\nRestart=always\nRestartSec=10s\n\n# Make sure you CREATE the directory and file for your node.log\nStandardOutput=file:/home/node/logs/node.log\nStandardError=file:/home/node/logs/node.log\n\n[Install]\nWantedBy=multi-user.target\nAlias=diem-node.service\n")),(0,i.kt)("h3",{id:"note-when-you-update-any-service-file-you-must-reload-ststemctl"},"NOTE: When you update any ",(0,i.kt)("inlineCode",{parentName:"h3"},"*service")," file, you must reload ",(0,i.kt)("inlineCode",{parentName:"h3"},"ststemctl")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload")),(0,i.kt)("h1",{id:"shortcuts"},"Shortcuts"),(0,i.kt)("h3",{id:"watch-diem-node-logs"},"Watch diem-node logs"),(0,i.kt)("p",null,"You can follow the logs by simply tailing the logs file."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tail -f ~/logs/node.log")),(0,i.kt)("h3",{id:"start-the-new-service"},"Start the new service"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"make daemon")," or manually:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl start diem-node.service")),(0,i.kt)("h3",{id:"stop-the-new-service"},"Stop the new service"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"make stop")," or manually:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl stop diem-node.service")),(0,i.kt)("h3",{id:"enable-the-new-service-to-start-on-boot"},"Enable the new service to start on boot"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl enable diem-node.service")),(0,i.kt)("h3",{id:"check-status-of-the-new-service"},"Check status of the new service"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"systemctl status diem-node.service")),(0,i.kt)("p",null,"if you have been successful when you run you will see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u25cf diem-node.service - OL Node Service\n   Loaded: loaded (/lib/systemd/system/diem-node.service; enabled; vendor preset: enabled)\n   Active: active (running) since Tue 2020-06-23 16:06:38 UTC; 10min ago\n Main PID: 15499 (diem-node)\n    Tasks: 1 (limit: 4915)\n   CGroup: /system.slice/diem-node.service\n           \u2514\u250015499 /usr/local/bin/diem-node --config /root/.0L/node.yaml\n")),(0,i.kt)("h3",{id:"set-up-proper-logging"},"Set up proper logging"),(0,i.kt)("p",null,"Logs are being written to a flat file. This is not ideal. You may want to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"journalctl"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs"},"https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs")),(0,i.kt)("h1",{id:"trouble-shooting"},"Trouble shooting"),(0,i.kt)("h2",{id:"validator-wizard"},"Validator Wizard"),(0,i.kt)("p",null,"If your config files have not been created you'll need to do onboarding. Check if you have a ~/.0L/0L.toml file. This is a sign that you are not yet onboarded."))}c.isMDXComponent=!0}}]);