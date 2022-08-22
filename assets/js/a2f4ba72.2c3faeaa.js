"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),h=o,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={},l="Validator Onboarding Guide: Hard Mode",i={unversionedId:"node-ops/validator/validator_onboarding_hard_mode",id:"node-ops/validator/validator_onboarding_hard_mode",title:"Validator Onboarding Guide: Hard Mode",description:"- Validator Setup",source:"@site/docs/node-ops/validator/validator_onboarding_hard_mode.md",sourceDirName:"node-ops/validator",slug:"/node-ops/validator/validator_onboarding_hard_mode",permalink:"/0L-documentation/docs/node-ops/validator/validator_onboarding_hard_mode",draft:!1,editUrl:"https://github.com/nControl88/0l-documentation-source/tree/main/docs/node-ops/validator/validator_onboarding_hard_mode.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validator Onboarding Guide: Easy Mode",permalink:"/0L-documentation/docs/node-ops/validator/validator_onboarding_easy_mode"},next:{title:"Validator node file",permalink:"/0L-documentation/docs/node-ops/validator/vfn_validator_fullnode_setup"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Firewall",id:"firewall",level:2},{value:"Validator",id:"validator",level:3},{value:"VFN",id:"vfn",level:3},{value:"High-level steps",id:"high-level-steps",level:2},{value:"TMUX basics",id:"tmux-basics",level:2},{value:"1. Set up a host",id:"1-set-up-a-host",level:2},{value:"Create Binaries",id:"create-binaries",level:3},{value:"2. Generate account keys",id:"2-generate-account-keys",level:2},{value:"3. Fast forward to the most recent state snapshot",id:"3-fast-forward-to-the-most-recent-state-snapshot",level:2},{value:"4. Start the validator in <code>fullnode</code> mode",id:"4-start-the-validator-in-fullnode-mode",level:2},{value:"5. Start producing delay proofs on validator (&quot;delay mining&quot;)",id:"5-start-producing-delay-proofs-on-validator-delay-mining",level:2},{value:"6. Create VFN config and deploy the VFN",id:"6-create-vfn-config-and-deploy-the-vfn",level:2},{value:"Return to validator machine",id:"return-to-validator-machine",level:3},{value:"Return to VFN",id:"return-to-vfn",level:3},{value:"7. Restart validator node in <code>validator</code> mode",id:"7-restart-validator-node-in-validator-mode",level:2},{value:"Log Rotation",id:"log-rotation",level:2},{value:"Optional Establish metric exporter for centralized monitoring",id:"optional-establish-metric-exporter-for-centralized-monitoring",level:2},{value:"Onboarder Troubleshooting",id:"onboarder-troubleshooting",level:2},{value:"Onboarder instructions",id:"onboarder-instructions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"cargo or rust are not installed",id:"cargo-or-rust-are-not-installed",level:3}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validator-onboarding-guide-hard-mode"},"Validator Onboarding Guide: Hard Mode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#validator-setup"},"Validator Setup"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#firewall"},"Firewall"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#validator"},"Validator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#vfn"},"VFN")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#high-level-steps"},"High-level steps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tmux-basics"},"TMUX basics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-set-up-a-host"},"1. Set up a host"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-binaries"},"Create Binaries")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-generate-account-keys"},"2. Generate account keys")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-fast-forward-to-the-most-recent-state-snapshot"},"3. Fast forward to the most recent state snapshot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-start-the-validator-in-fullnode-mode"},"4. Start the validator in ",(0,o.kt)("inlineCode",{parentName:"a"},"fullnode")," mode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#5-start-producing-delay-proofs-on-validator-delay-mining"},'5. Start producing delay proofs on validator ("delay mining")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#6-create-vfn-config-and-deploy-the-vfn"},"6. Create VFN config and deploy the VFN"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#return-to-validator-machine"},"Return to validator machine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#return-to-vfn"},"Return to VFN")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#7-restart-validator-node-in-validator-mode"},"7. Restart validator node in ",(0,o.kt)("inlineCode",{parentName:"a"},"validator")," mode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#log-rotation"},"Log Rotation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#optional-establish-metric-exporter-for-centralized-monitoring"},"[Optional] Establish metric exporter for centralized monitoring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onboarder-troubleshooting"},"Onboarder Troubleshooting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onboarder-instructions"},"Onboarder instructions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cargo-or-rust-are-not-installed"},"cargo or rust are not installed"))))))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'TWO unix hosts, one for Validator Node, and one for the Private Fullnode ("VFN").\n0L code targets Ubuntu 20.4'),(0,o.kt)("li",{parentName:"ul"},"Recommended specs:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Validator: 300GB SSD harddrive, 8 core CPU, 16G RAM"),(0,o.kt)("li",{parentName:"ul"},"VFN: 100G storage, 8 core CPU, 16G RAM"))),(0,o.kt)("li",{parentName:"ul"},"Separate static IP addresses for the machines, or appropriate DNS mapping.")),(0,o.kt)("h2",{id:"firewall"},"Firewall"),(0,o.kt)("h3",{id:"validator"},"Validator"),(0,o.kt)("p",null,"The following ports must be open: 6179, 6180, 3030"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"6180 should be open on all interfacess ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0"),", it's for consensus and uses noise encryption."),(0,o.kt)("li",{parentName:"ul"},'6179 is for the private validator fullnode network ("VFN"), the firewall should only allow the IP of the fullnode to access this port.'),(0,o.kt)("li",{parentName:"ul"},"3030 is for your ",(0,o.kt)("inlineCode",{parentName:"li"},"web-monitor")," dashboard, so could just be your home IP if it's fixed.")),(0,o.kt)("h3",{id:"vfn"},"VFN"),(0,o.kt)("p",null,"Note: this node does not serve transactions, and does not participate in consensus, it relays data out of the validator node, and transactions into the validator."),(0,o.kt)("p",null,"The following ports must be open: 6178, 6179"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"6178 is for the the PUBLIC fullnode network. This is how the public nodes that will be serving JSON-RPC on the network will receive data and submit transactions to the network."),(0,o.kt)("li",{parentName:"ul"},'6179 is for the private validator fullnode network ("VFN"), it should only allow traffic from the Validator node IP address above.')),(0,o.kt)("h2",{id:"high-level-steps"},"High-level steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up a host - Install binaries."),(0,o.kt)("li",{parentName:"ol"},"Generate a public mining/validator key and associated mneumonic.",(0,o.kt)("br",{parentName:"li"}),"2.1 Generate and share your ",(0,o.kt)("inlineCode",{parentName:"li"},"account.json")," file with someone who has gas and can execute the onboarding transaction for you."),(0,o.kt)("li",{parentName:"ol"},"Get the latest snapshot state of the network by running ",(0,o.kt)("inlineCode",{parentName:"li"},"ol restore"),"."),(0,o.kt)("li",{parentName:"ol"},"Start your node in ",(0,o.kt)("em",{parentName:"li"},"fullnode")," mode.",(0,o.kt)("br",{parentName:"li"}),"4.1. Allow your validator in the ",(0,o.kt)("em",{parentName:"li"},"fullnode")," mode to sync up with the network. Depending on how old the snapshot obtained from ",(0,o.kt)("inlineCode",{parentName:"li"},"ol restore")," is, this\nmay take a while (1 hr or more). To check the state of the sync run ",(0,o.kt)("inlineCode",{parentName:"li"},"db-backup one-shot query node-state"),"."),(0,o.kt)("li",{parentName:"ol"},"Start the tower app which will produce and submit VDF proofs to the chain.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("strong",{parentName:"li"},"note")," if your node is not fully synced and if you have not been onboarded yet, you will see errors from the tower app\nuntil your node has caught up to the current state and you have been onboarded."),(0,o.kt)("li",{parentName:"ol"},"Create VFN configs, and deploy the VFN.",(0,o.kt)("br",{parentName:"li"}),"6.1 Check and update your on-chain configuration"),(0,o.kt)("li",{parentName:"ol"},"Restart your node in ",(0,o.kt)("em",{parentName:"li"},"validator")," mode. You will join in the next epoch if you have been on boarded by an active validator."),(0,o.kt)("li",{parentName:"ol"},"View ",(0,o.kt)("a",{parentName:"li",href:"https://0lexplorer.io/"},"ol explorer")," to see the state of the network, you should see your validators public key in the list of validators.")),(0,o.kt)("h2",{id:"tmux-basics"},"TMUX basics"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"New session: ",(0,o.kt)("inlineCode",{parentName:"li"},"tmux new -s <SESSION_NAME>")),(0,o.kt)("li",{parentName:"ol"},"Detach from Session: press Ctrl-b and then d"),(0,o.kt)("li",{parentName:"ol"},"rejoin unnamed session, if only one session exists: ",(0,o.kt)("inlineCode",{parentName:"li"},"tmux a")),(0,o.kt)("li",{parentName:"ol"},"rejoin unnamed session by id: ",(0,o.kt)("inlineCode",{parentName:"li"},"tmux ls")," to get the ID and then ",(0,o.kt)("inlineCode",{parentName:"li"},"tmux a -t <SESSION_ID>")),(0,o.kt)("li",{parentName:"ol"},"rejoin named session: ",(0,o.kt)("inlineCode",{parentName:"li"},"tmux attach -t <SESSION_NAME>")),(0,o.kt)("li",{parentName:"ol"},"kill session: attach to the session --\x3e press Ctrl-b, then type ",(0,o.kt)("inlineCode",{parentName:"li"},":kill-session")," and press ENTER")),(0,o.kt)("h2",{id:"1-set-up-a-host"},"1. Set up a host"),(0,o.kt)("p",null,"These instructions target Ubuntu."),(0,o.kt)("p",null,"1.1. Set up an Ubuntu host with ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," access, e.g. in a cloud service provider."),(0,o.kt)("p",null,"1.2. Associate a static IP with your host, this will be tied to you account. This address will be shared on the chain, so that other nodes will be able to find you through the peer discovery mechanism."),(0,o.kt)("p",null,"1.3. 0L binaries should be run in a linux user that has very narrow permissions. Before you can create binaries you'll need some tools installed probably by ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," and likely in root.\nA helpful script to install dependencies exists here: github.com/OLSF/libra/main/ol/util/setup.sh"),(0,o.kt)("p",null,"You can run it with a curl bash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://raw.githubusercontent.com/OLSF/libra/main/ol/util/setup.sh | bash\n")),(0,o.kt)("p",null,"1.4. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"tmux")," to persist the terminal session for build, as well as for running the nodes and tower app. Also this setup requires ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),", which might be installed already on your host. If not, perform the following steps now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y git vim zip unzip jq build-essential cmake clang llvm libgmp-dev secure-delete pkg-config libssl-dev lld\n")),(0,o.kt)("p",null,"1.5. Create the linux user that will run the 0L services."),(0,o.kt)("p",null,"We will create a user called ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," which has no password (can only be accessed initially by sudo)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo useradd node -m -s /bin/bash\n")),(0,o.kt)("p",null,"You can then access that account via ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su node"),". Or setup ssh keys under ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/node/.ssh/authorized_keys"),"."),(0,o.kt)("p",null,"1.6. Install Rust on the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su node\n\n# you are now in the node user\ncurl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y\n\n# restart your bash instance to pickup the cargo paths\n. ~/.bashrc\n\n# install some command-line tools\ncargo install toml-cli\n")),(0,o.kt)("h3",{id:"create-binaries"},"Create Binaries"),(0,o.kt)("p",null,"It is recommended to perform the steps from 1.4 onwards inside tmux. Short tmux intruction:"),(0,o.kt)("p",null,"1.7 Start a new ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# start a new tmux session\ntmux new -s installation\n")),(0,o.kt)("p",null,"1.8. Clone this repo:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/OLSF/libra.git")),(0,o.kt)("p",null,"For more details: (../devs/OS_dependencies.md)"),(0,o.kt)("p",null,"1.9. Build the source and install binaries:\nThis takes a while, ensure your are still inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"tmux")," session to avoid your session gets disconnected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd </path/to/libra-source/>\nmake bins install\n")),(0,o.kt)("p",null,"1.10. Fetch the web server files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ol serve --update\n\n# alternatively\nmake web-files\n")),(0,o.kt)("p",null,"If your session can not resolve the ol binary source either reload the session\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," to the directory where the binaries were build (e.g. for node user ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/node/bin"),") and use ",(0,o.kt)("inlineCode",{parentName:"p"},"./ol")),(0,o.kt)("h2",{id:"2-generate-account-keys"},"2. Generate account keys"),(0,o.kt)("p",null,"Before you start: have the static IP address you wish to associate with your validator, and a fun personal statement\nto place in your first proof."),(0,o.kt)("p",null,"2.1. Generate new keys and account: ",(0,o.kt)("inlineCode",{parentName:"p"},"onboard keygen"),". Run as many times as you like, and choose a mnemonic.\n",(0,o.kt)("strong",{parentName:"p"},"Mnemonic and keys are not saved anywhere, write them down now"),"."),(0,o.kt)("p",null,"2.2. Run the validator onboarding wizard inside a ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session, and answer the questions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# start wizard with template\nonboard val -u http://<ip-address-of-the-one-who-onboards-you>:3030\n\n# note, this person needs to be already running a validator, ask in the discord for their ip address. If you navigate to <ip-address>:3030, you should be able to see their validator node's health.\n\nOR\n\n# start wizard without template, note: assumes an autopay_batch.json is in the project root.\nonboard val\n")),(0,o.kt)("p",null,"2.3. Send the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.0L/account.json")," to someone that has GAS (the one who wants to onboard you) and can execute the account creation transaction for you."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you are onboaring someone and receive the ",(0,o.kt)("inlineCode",{parentName:"strong"},"account.json")," see ",(0,o.kt)("a",{parentName:"strong",href:"#onboarder-instructions"},"onboarder instructions"))),(0,o.kt)("p",null,"2.4. Backup your files: ",(0,o.kt)("inlineCode",{parentName:"p"},"cp -r ~/.0L/* ~/.0L/init-backup/")),(0,o.kt)("h2",{id:"3-fast-forward-to-the-most-recent-state-snapshot"},"3. Fast forward to the most recent state snapshot"),(0,o.kt)("p",null,"Speed up the sync of your ledger by restoring a backup before starting a fullnode (next step).\nThe following command will fetch the latest epoch archive, usually from within the last 24h."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ol restore\n")),(0,o.kt)("h2",{id:"4-start-the-validator-in-fullnode-mode"},"4. Start the validator in ",(0,o.kt)("inlineCode",{parentName:"h2"},"fullnode")," mode"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"note"),": temporarily: as of v4.2.8 you'll need to increase your host's file descriptors. Fix is in the works. For now:\nrun this before starting your ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# increase file descriptors\nulimit -n 100000\n# check that they have been increased\nulimit -n\n100000\n")),(0,o.kt)("p",null,"or edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/security/limits.conf")," file to make this change persistent across sessions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/security/limits.conf`\n")),(0,o.kt)("p",null,"append to the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"limits.conf"),". replace ",(0,o.kt)("inlineCode",{parentName:"p"},"yourusername")," with the output from ",(0,o.kt)("inlineCode",{parentName:"p"},"whoami"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yourusername soft    nproc          100000\nyourusername soft    nproc          100000\nyourusername hard    nproc          100000\nyourusername soft    nofile         100000\n")),(0,o.kt)("p",null,"4.1 To enable the node to run after you detach from your terminal session, start within a\n",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tmux new -s fullnode\n\n# verify your file handlers have been increased\nulimit -n\n100000\n")),(0,o.kt)("p",null,"inside the ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session start the node in fullnode mode."),(0,o.kt)("p",null,"Consider using ",(0,o.kt)("a",{parentName:"p",href:"#log-rotation"},"log rotation")," to start the ",(0,o.kt)("inlineCode",{parentName:"p"},"diem-node"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# create log directory\nmkdir ~/.0L/logs\n\n# start node\ndiem-node --config ~/.0L/fullnode.node.yaml  >> ~/.0L/logs/node.log 2>&1\n")),(0,o.kt)("p",null,"4.2. Check your logs. ",(0,o.kt)("inlineCode",{parentName:"p"},"tail -f ~/.0L/logs/node.log")),(0,o.kt)("p",null,"When the sync is ongoing, you'd see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"======================================  round is 17897\n======================================  round is 17898\n======================================  round is 17899\n")),(0,o.kt)("p",null,"You might see some network errors due to drops, but should again see round numbers."),(0,o.kt)("p",null,"This command will tell you the sync state of a RUNNING local node: ",(0,o.kt)("inlineCode",{parentName:"p"},"db-backup one-shot query node-state"),".\nYou can compare the block height with the one on the ",(0,o.kt)("a",{parentName:"p",href:"https://0l.interblockcha.in/"},"block explorer"),"."),(0,o.kt)("p",null,"While waiting for the sync to complete, it is a good opportunity, to set up the web monitor (but you can also do it any time later). Please follow the instructions here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/0L-documentation/docs/node-ops/validator/web_monitor"},"Set up web monitor")),(0,o.kt)("h2",{id:"5-start-producing-delay-proofs-on-validator-delay-mining"},'5. Start producing delay proofs on validator ("delay mining")'),(0,o.kt)("p",null,"Before you start: You will need your mnemonic."),(0,o.kt)("p",null,"5.1. Run the tower app within its own ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tmux new -s tower\n")),(0,o.kt)("p",null,"5.2. From inside the ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session, start the tower app:"),(0,o.kt)("p",null,"(Consider using ",(0,o.kt)("a",{parentName:"p",href:"#log-rotation"},"log rotation")," to start the ",(0,o.kt)("inlineCode",{parentName:"p"},"tower")," app.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tower -o start >> ~/.0L/logs/tower.log 2>&1\n")),(0,o.kt)("p",null,"If you get an error like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Caused by:\n    Connection Failed: Connection refused (os error 111)\nERROR: could not create client connection, message: Cannot connect to any JSON RPC peers in the list of upstream_nodes in 0L.toml\n")),(0,o.kt)("p",null,"Change the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream_nodes")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.0L/0L.toml")," to ",(0,o.kt)("inlineCode",{parentName:"p"},'upstream_nodes = ["http://localhost:8080/"]')),(0,o.kt)("h2",{id:"6-create-vfn-config-and-deploy-the-vfn"},"6. Create VFN config and deploy the VFN"),(0,o.kt)("p",null,"6.1 Follow ",(0,o.kt)("a",{parentName:"p",href:"#1.-Set-up-a-host"},"step 1")," to set up a new host and install binaries"),(0,o.kt)("p",null,"6.2 Fast Forward to the latest snapshot by following ",(0,o.kt)("a",{parentName:"p",href:"#3.-Fast-forward-to-the-most-recent-state-snapshot"},"step 3")),(0,o.kt)("h3",{id:"return-to-validator-machine"},"Return to validator machine"),(0,o.kt)("p",null,"6.2 Update validator 0L.toml file"),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," include a ",(0,o.kt)("inlineCode",{parentName:"p"},"vfn_ip")," field, with the IP address. This will simplify and correctly display networking addresses for the info helpers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[profile]\naccount = "foo"\nauth_key = "bar"\nstatement = "baz"\nip = "127.0.0.1"\n# NEW FIELD HERE:\nvfn_ip = "x.y.z.0"\n')),(0,o.kt)("p",null,"6.3 Create your VFN configs on validator, and deploy on VFN."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# On your validator (or wherever your key_store.json lives)\n# create settings for the VFN, private fullnode\nol init --vfn\n\n# now copy the vfn.node.yaml file to your VFN machine\n")),(0,o.kt)("p",null,"6.4 Check and update your on-chain configuration on validator node"),(0,o.kt)("p",null,"More details here:\n",(0,o.kt)("a",{parentName:"p",href:"../documentation/node-ops/validators/changing_onchain_ip_address.md"},"Check and change your on-chain config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# what are your keys\nol whoami\n\n# do your keys match what your node is using\nol whoami --check-yaml <path/to/node.yaml>\n\n# what are your current on-chain configs\nol query --val-config\n\n# Update your configs based on what your mnemonic uses\n# Note the `-o` which means you are sending this from the \"operator\" account.\ntxs -o val-config --val-ip <IP> --vfn-ip <OTHER IP>\n\n\n# check if those changes persisted and if they are able to be read.\nol query --val-config\n4.1 To enable the node to run after you detach from your terminal session, start within a\n`tmux` session.\n\n**note**: temporarily: as of v4.2.8 you'll need to increase your host's file descriptors. Fix is in the works. For now:\nrun this before starting your `tmux` session.\n")),(0,o.kt)("h3",{id:"return-to-vfn"},"Return to VFN"),(0,o.kt)("p",null,"6.5 Configure and start VFN"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# increase file d\nescriptors\nulimit -n 100000\n#### check that they have been increased\nulimit -n\n100000\n")),(0,o.kt)("p",null,"or edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/security/limits.conf")," file to make this change persistent across sessions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/security/limits.conf`\n")),(0,o.kt)("p",null,"append to the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"limits.conf"),". replace ",(0,o.kt)("inlineCode",{parentName:"p"},"yourusername")," with the output from ",(0,o.kt)("inlineCode",{parentName:"p"},"whoami"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yourusername soft    nproc          100000\nyourusername soft    nproc          100000\nyourusername hard    nproc          100000\nyourusername soft    nofile         100000\n")),(0,o.kt)("p",null,"start your VFN in a ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tmux new -s vfn\n\n# verify your file handlers have been increased\nulimit -n\n100000\n")),(0,o.kt)("p",null,"inside the ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session start the VFN in VFN mode."),(0,o.kt)("p",null,"Consider using ",(0,o.kt)("a",{parentName:"p",href:"#log-rotation"},"log rotation")," to start the ",(0,o.kt)("inlineCode",{parentName:"p"},"diem-node"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# create log directory\nmkdir ~/.0L/logs\n\n# start node\ndiem-node --config ~/.0L/vfn.node.yaml  >> ~/.0L/logs/node.log 2>&1\n")),(0,o.kt)("p",null,"6.6 Check your logs. ",(0,o.kt)("inlineCode",{parentName:"p"},"tail -f ~/.0L/logs/node.log")),(0,o.kt)("p",null,"When the sync is ongoing, you'd see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"======================================  round is 17897\n======================================  round is 17898\n======================================  round is 17899\n")),(0,o.kt)("p",null,"You might see some network errors due to drops, but should again see round numbers."),(0,o.kt)("p",null,"This command will tell you the sync state of a RUNNING local node: ",(0,o.kt)("inlineCode",{parentName:"p"},"db-backup one-shot query node-state")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u203c\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"You must be onboarded by an existing validator to continue")),(0,o.kt)("p",{parentName:"blockquote"},"To become a validator a user must display an intention to contribute to the ecosystem.\nThis can be done by many different ways like building tools, helping out the ecosystem and more.\nIf you would like to contribute reach out the the Hustle Karma channel in ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/cfXd9Ngk"},"Discord"),". When a validator is ready to\nonboard you they can do it by the following command:"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"txs create-validator -u http://[your-ip-address]")),(0,o.kt)("p",{parentName:"blockquote"},"Currently you need 4 validators to vote for you (your onboading partner included), you can kindly ask in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/833074824447655976/925880684193677332"},"validator-onboarding discord channel"),".")),(0,o.kt)("h2",{id:"7-restart-validator-node-in-validator-mode"},"7. Restart validator node in ",(0,o.kt)("inlineCode",{parentName:"h2"},"validator")," mode"),(0,o.kt)("p",null,"Once the network is in sync, sufficient mining has been done (8 proofs per epoch/day) and you received the 4 vouches, you are eligible to enter the\nvalidator set."),(0,o.kt)("p",null,"Once in the validator set, the node can connect to other validators and sign blocks."),(0,o.kt)("p",null,"7.1. On the next epoch, start node in ",(0,o.kt)("inlineCode",{parentName:"p"},"validator")," mode."),(0,o.kt)("p",null,"Restarting your node in validator mode inside a ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session."),(0,o.kt)("p",null,"Again, there may be an issue with file descriptors, increase with ",(0,o.kt)("inlineCode",{parentName:"p"},"ulimit -n 100000")," before starting node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# stop diem node daemon\nmake stop\n# and just in case, stop all processes\nkillall diem-node\n")),(0,o.kt)("p",null,"start a ",(0,o.kt)("a",{parentName:"p",href:"#tmux-basics"},"tmux")," session"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tmux new -s validator\n")),(0,o.kt)("p",null,"optionally increase file descriptors limit, temporary fix for v4.2.8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ulimit -n 100000\n")),(0,o.kt)("p",null,"then restart node with (consider using ",(0,o.kt)("a",{parentName:"p",href:"#log-rotation"},"log rotation")," to start the ",(0,o.kt)("inlineCode",{parentName:"p"},"diem-node"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"diem-node --config  ~/.0L/validator.node.yaml >> ~/.0L/logs/validator.log 2>&1\n")),(0,o.kt)("p",null,"7.2 Restart the tower app after your validator is running, refer to ",(0,o.kt)("a",{parentName:"p",href:"#5-start-producing-delay-proofs-on-validator-%22delay-mining%22"},"Step 5")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," and restart it."),(0,o.kt)("p",null,"Once you have been on boarded you should see you public key in the list of validators. Run the web monitor to view:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ol serve -c\n")),(0,o.kt)("h2",{id:"log-rotation"},"Log Rotation"),(0,o.kt)("p",null,"The size of the log files from the ",(0,o.kt)("inlineCode",{parentName:"p"},"diem-node")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"tower")," app can increase very fast. Please consider using log rotation. You can establish\nthis for example with ",(0,o.kt)("a",{parentName:"p",href:"https://linux.die.net/man/8/logrotate"},"logrotate")," or ",(0,o.kt)("a",{parentName:"p",href:"https://manpages.debian.org/stretch/daemontools/multilog.8.en.html"},"multilog"),"."),(0,o.kt)("p",null,"Here is an example how you can establish log rotation with ",(0,o.kt)("a",{parentName:"p",href:"https://manpages.debian.org/stretch/daemontools/multilog.8.en.html"},"multilog"),"\nfor the ",(0,o.kt)("inlineCode",{parentName:"p"},"diem-node")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"tower")," app. Note: This only works on debian based systems, but ubuntu is recommended for this setup anyways."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install daemontools (multilog is a part of daemontools): ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get install daemontools"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Example on how to start the diem-node in fullnode mode with log rotation:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"diem-node --config ~/.0L/fullnode.node.yaml 2>&1 | multilog s104857600 n10 ~/.0L/logs/node\n")),(0,o.kt)("p",{parentName:"li"},"This means the logs will be written to a folder ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.0L/logs/node"),". Everytime the current log file reaches the max size of 100MB (",(0,o.kt)("inlineCode",{parentName:"p"},"s104857600")," => 104857600 Bytes)\nit will be rotated. After 10 rotations ",(0,o.kt)("inlineCode",{parentName:"p"},"n10")," it will be deleted. This means only the latest 1GB of log entries are constantly available on the server.\nOf course you can vary this settings to fit your specific needs.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Example on how to start the ",(0,o.kt)("inlineCode",{parentName:"p"},"tower")," app with log rotation:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tower -o start 2>&1 | multilog s104857600 n10 ~/.0L/logs/tower\n")))),(0,o.kt)("h2",{id:"optional-establish-metric-exporter-for-centralized-monitoring"},"[Optional]"," Establish metric exporter for centralized monitoring"),(0,o.kt)("p",null,"There is a centralized prometheus-grafana based monitoring stack you can connect with as a validator.\nTo set it up follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://hackmd.io/9dxv7ZwYS1yOmBVSjSV2wg"},"on this page"),"."),(0,o.kt)("p",null,"Note: For the monitoring the ports 9100, 9101 and 9102 should be open for the static IP address of the central prometheus\nnode. You can find this IP also in the ","[set up instructions]","(",(0,o.kt)("a",{parentName:"p",href:"https://hackmd.io/9dxv7ZwYS1yOmBVSjSV2wg"},"on this page"),")."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"onboarder-troubleshooting"},"Onboarder Troubleshooting"),(0,o.kt)("p",null,"If you are having troubles onboarding, please see whether they match any of the issues here:\n",(0,o.kt)("a",{parentName:"p",href:"../../node-ops/validators/troubleshoting_onboarding.md"},"troubleshooting onboarding")),(0,o.kt)("h2",{id:"onboarder-instructions"},"Onboarder instructions"),(0,o.kt)("p",null,"If you are onboarding someone and have received their ",(0,o.kt)("inlineCode",{parentName:"p"},"account.json")," file"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"account.json")," to your local node."),(0,o.kt)("li",{parentName:"ol"},"Submit a tx with ",(0,o.kt)("inlineCode",{parentName:"li"},"txs")," app:\n`txs create-validator --account-file <path/to/account.json>")),(0,o.kt)("p",null,"Troubleshooting: If there is an issue with sequence_number out of sync. Retry the transaction."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"cargo-or-rust-are-not-installed"},"cargo or rust are not installed"),(0,o.kt)("p",null,"After ",(0,o.kt)("inlineCode",{parentName:"p"},"rust")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," are installed you are prompted to set a ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable.\nFollow those instructions or reset your terminal."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rust config instructions",src:n(8511).Z,width:"483",height:"153"})),(0,o.kt)("p",null,"To configure your current shell, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source $HOME/.cargo/env\n")))}u.isMDXComponent=!0},8511:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rust-config-output-776a688f3cbab81a0b9caf6b7bdbe9a0.png"}}]);