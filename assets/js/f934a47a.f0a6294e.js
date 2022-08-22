"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[219],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=n,_=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return o?r.createElement(_,a(a({ref:t},u),{},{components:o})):r.createElement(_,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6838:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const i={},a="Node Statistics",s={unversionedId:"node-ops/validator/guides/node_statistics",id:"node-ops/validator/guides/node_statistics",title:"Node Statistics",description:"TL;DR",source:"@site/docs/node-ops/validator/guides/node_statistics.md",sourceDirName:"node-ops/validator/guides",slug:"/node-ops/validator/guides/node_statistics",permalink:"/0L-documentation/docs/node-ops/validator/guides/node_statistics",draft:!1,editUrl:"https://github.com/nControl88/0l-documentation-source/tree/main/docs/node-ops/validator/guides/node_statistics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Recover a Validator If It Stops Mining and Falls Out of the Set",permalink:"/0L-documentation/docs/node-ops/validator/guides/node_falls_out_of_validator_set"},next:{title:"Recreate all configs",permalink:"/0L-documentation/docs/node-ops/validator/guides/resetting_val_configs"}},c={},l=[{value:"TL;DR",id:"tldr",level:2},{value:"Metrics APIs",id:"metrics-apis",level:2},{value:"9101/metrics",id:"9101metrics",level:3},{value:"Port 9102/metrics",id:"port-9102metrics",level:2},{value:"Port 6191/metrics",id:"port-6191metrics",level:2},{value:"Port 6191/events",id:"port-6191events",level:2}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"node-statistics"},"Node Statistics"),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"From within node: ",(0,n.kt)("inlineCode",{parentName:"p"},"curl http://localhost:9101/metrics"),"\nFilter with grep: ",(0,n.kt)("inlineCode",{parentName:"p"},"curl http://localhost:9101/metrics | grep epoch")),(0,n.kt)("p",null,"Or, enable port 9102 in your firewall if you want these to be public."),(0,n.kt)("h2",{id:"metrics-apis"},"Metrics APIs"),(0,n.kt)("p",null,"There are three URLs on your node which can be used to gather metrics."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Port 9101 - intended to be public facing. Access with http://%3Cyour-ip%3E:9101/metrics"),(0,n.kt)("li",{parentName:"ul"},"Port 9102 - intended to be private to operator. Access with http://%3Cyour-ip%3E:9102/metrics"),(0,n.kt)("li",{parentName:"ul"},"Port 6191 - intended to be private(?) related to admission control. Access with http://%3Cyour-ip%3E:6191/metrics or /events")),(0,n.kt)("h3",{id:"9101metrics"},"9101/metrics"),(0,n.kt)("p",null,"Produces a flat file, about 1000 lines very detailed metrics, including epoch and quorum information:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'executor_duration_bucket{op="block_execute_time_s",le="0.005"} 0\nexecutor_duration_bucket{op="block_execute_time_s",le="0.01"} 0\nexecutor_duration_bucket{op="block_execute_time_s",le="0.025"} 3379\nexecutor_duration_bucket{op="block_execute_time_s",le="0.05"} 3385\nexecutor_duration_bucket{op="block_execute_time_s",le="0.1"} 3385\nexecutor_duration_bucket{op="block_execute_time_s",le="0.25"} 3385\nexecutor_duration_bucket{op="block_execute_time_s",le="0.5"} 3385\nexecutor_duration_bucket{op="block_execute_time_s",le="1"} 3385\nexecutor_duration_bucket{op="block_execute_time_s",le="2.5"} 3385\nexecutor_duration_bucket{op="block_execute_time_s",le="5"} 3385\nexecutor_duration_bucket{op="block_execute_time_s",le="10"} 3385\nexecutor_duration_bucket{op="block_execute_time_s",le="+Inf"} 3385\n\n')),(0,n.kt)("h2",{id:"port-9102metrics"},"Port 9102/metrics"),(0,n.kt)("p",null,"Produces only one line about how many peers are connected to that node:\n",(0,n.kt)("inlineCode",{parentName:"p"},'libra_network_peers{role_type="validator",state="connected"} 7')),(0,n.kt)("h2",{id:"port-6191metrics"},"Port 6191/metrics"),(0,n.kt)("p",null,"Produces what appears to be a subset of the 9101 metrics, but structured as JSON."),(0,n.kt)("h2",{id:"port-6191events"},"Port 6191/events"),(0,n.kt)("p",null,"Produces about thousands lines of event logs related to admission control. e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[{"name":"trace_event","timestamp":1597419122207,"json":{"duration":"523\xb5s","node":"block::d8a98492","path":"executor","stage":"executor::process_vm_outputs::done"}},{"name":"trace_event","timestamp":1597419122207,"json":{"duration":"18ms","node":"block::d8a98492","path":"consensus::block_storage::block_store","stage":"block_store::execute_block::done"}},{"name":"trace_event","timestamp":1597419122207,"json":{"duration":null,"node":"block::d8a98492","path":"consensus::persistent_liveness_storage","stage":"consensusdb::save_tree"}},{"name":"trace_event","timestamp":1597419122212,"json":{"duration":"4ms","node":"block::d8a98492","path":"consensus::persistent_liveness_storage","stage":"consensusdb::save_tree::done"}},{"name":"trace_event","timestamp":1597419122215,"json":{"duration":"26ms","node":"block::d8a98492","path":"consensus::round_manager","stage":"round_manager::execute_and_vote::done"}},\n')),(0,n.kt)("h1",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"In node.configs.toml the metrics ports are specified, as in this line:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[debug_interface]\nadmission_control_node_debug_port = 6191\nmetrics_server_port = 9101\npublic_metrics_server_port = 9102\naddress = "0.0.0.0"\n')),(0,n.kt)("h1",{id:"query"},"Query"),(0,n.kt)("p",null,"There is a module NodeDebugClient in common/debug-interface/src/lib.rs, which allows for programmatically consuming node data. This is a thin wrapper making http requests to the above API."))}d.isMDXComponent=!0}}]);