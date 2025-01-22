(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1538:function(e,t,s){Promise.resolve().then(s.bind(s,9293))},9293:function(e,t,s){"use strict";let r;s.r(t),s.d(t,{default:function(){return U}});var a=s(7437),n=s(1556),l=s(3566),i=s(9397),o=s(2351),c=s(4743),d=s(2265),m=s(4930),u=s(1994),f=s(3335);function x(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,f.m6)((0,u.W)(t))}let h=d.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(m.fC,{ref:t,className:x("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",s),...r})});h.displayName=m.fC.displayName;let g=d.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(m.Ee,{ref:t,className:x("aspect-square h-full w-full",s),...r})});g.displayName=m.Ee.displayName;let p=d.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(m.NY,{ref:t,className:x("flex h-full w-full items-center justify-center rounded-full bg-muted",s),...r})});p.displayName=m.NY.displayName;var b=s(7053);let v=(0,s(535).j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),N=d.forwardRef((e,t)=>{let{className:s,variant:r,size:n,asChild:l=!1,...i}=e,o=l?b.g7:"button";return(0,a.jsx)(o,{className:x(v({variant:r,size:n,className:s})),ref:t,...i})});N.displayName="Button";let j=d.forwardRef((e,t)=>{let{className:s,type:r,...n}=e;return(0,a.jsx)("input",{type:r,className:x("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...n})});j.displayName="Input";var y=s(8842);let w=d.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(y.fC,{ref:t,className:x("relative overflow-hidden",s),...n,children:[(0,a.jsx)(y.l_,{className:"h-full w-full rounded-[inherit]",children:r}),(0,a.jsx)(F,{}),(0,a.jsx)(y.Ns,{})]})});w.displayName=y.fC.displayName;let F=d.forwardRef((e,t)=>{let{className:s,orientation:r="vertical",...n}=e;return(0,a.jsx)(y.gb,{ref:t,orientation:r,className:x("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",s),...n,children:(0,a.jsx)(y.q4,{className:"relative flex-1 rounded-full bg-border"})})});F.displayName=y.gb.displayName;var S=s(3837);let A=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New Chat";return{id:(0,S.Z)(),title:e,messages:[],timestamp:new Date().toISOString()}},E=(e,t,s)=>({...e,messages:[...e.messages,{id:(0,S.Z)(),content:t,role:s,timestamp:new Date().toISOString()}],lastMessage:"system"!==s?t:e.lastMessage,timestamp:new Date().toISOString()}),k=0,T=new Map,I=e=>{if(T.has(e))return;let t=setTimeout(()=>{T.delete(e),_({type:"REMOVE_TOAST",toastId:e})},1e6);T.set(e,t)},O=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?I(s):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},z=[],D={toasts:[]};function _(e){D=O(D,e),z.forEach(e=>{e(D)})}var C=s(4436),R=s(5561),P=s(2158);s(7792);var M=s(3145),B=s(3749);let Z=()=>(r||(r=B.ZP.client({scheme:"https",host:"https://darkvnmpqhgzdqw2v5ycoa.c0.europe-west3.gcp.weaviate.cloud",apiKey:new B.Sl("TGbDpB7DeUU7wgR3EoOHqO3xCombh5hE4spI")})),r),q=async e=>{let t=Z(),s=await t.graphql.get().withClassName("Document").withFields("content title filePath").withNearText({concepts:[e]}).withLimit(1).do();if(s.data.Get.Document&&s.data.Get.Document.length>0){let e=s.data.Get.Document[0];return{content:e.content||"",title:e.title||"",filePath:e.filePath||""}}return{content:"",title:"",filePath:""}};function G(){let[e,t]=function(e,t){let[s,r]=(0,d.useState)(()=>{try{let s=window.localStorage.getItem(e);return s?JSON.parse(s):t}catch(e){return console.log(e),t}});return[s,t=>{try{let a=t instanceof Function?t(s):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(e){console.log(e)}}]}("conversations",[]),[s,r]=(0,d.useState)(null),{messages:m,input:u,handleInputChange:f,isLoading:x,setMessages:b}=(0,n.RJ)({initialMessages:(null==s?void 0:s.messages)||[]});(0,d.useEffect)(()=>{if(0===e.length){let e=A();t([e]),r(e)}else s||r(e[0])},[e]),(0,d.useEffect)(()=>{s&&b(s.messages)},[s,b]);let v=async a=>{if(a.preventDefault(),!u.trim()||!s)return;let n=u.trim(),l=E(s,n,"user"),i=e.map(e=>e.id===l.id?l:e);t(i),r(l),f({target:{value:""}});try{var o;let s="",a="";try{let e=await q(n);s=e.content,a=e.source}catch(e){console.error("Error querying Weaviate:",e)}let i=s?"Context: ".concat(s,"\n\nUser: ").concat(n,"\n\nAssistant: "):"User: ".concat(n,"\n\nAssistant: "),c=await fetch("https://sheer-walliw-lumolabs-6b447c84.koyeb.app/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"lumolabs/Lumo-8B-Instruct:latest",prompt:i,stream:!0})});if(!c.ok)throw Error("HTTP error! status: ".concat(c.status));let d=E(l,"","assistant");r(d);let m="",u=null===(o=c.body)||void 0===o?void 0:o.getReader(),f=new TextDecoder;if(!u)throw Error("No response body");for(;;){let{done:e,value:t}=await u.read();if(e)break;let s=f.decode(t);try{for(let e of s.split("\n").filter(e=>""!==e.trim())){let t=JSON.parse(e);if(t.response){m+=t.response;let e=E(l,m,"assistant");r(e)}}}catch(e){console.error("Error parsing streaming response:",e)}}let x=E(l,m,"assistant"),h=e.map(e=>e.id===x.id?x:e);if(t(h),r(x),s){let n="Retrieved context: ".concat(s,"\nSource: ").concat(a),l=E(x,n,"system"),i=e.map(e=>e.id===l.id?l:e);t(i),r(l)}}catch(s){console.error("Error details:",s),t(i),r(l);let e="Failed to get response from AI. Please try again.";s instanceof Error&&(e+=" Error: ".concat(s.message)),function(e){let{...t}=e,s=(k=(k+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>_({type:"DISMISS_TOAST",toastId:s});_({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}})}({title:"Error",description:e,variant:"destructive"})}},y=e=>new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return(0,a.jsx)("div",{className:"flex h-screen bg-black",children:(0,a.jsxs)("div",{className:"bg-zinc-900 rounded-3xl shadow-xl shadow-[#00FF00]/10 w-full max-w-6xl mx-auto overflow-hidden flex border border-[#00FF00]/20",children:[(0,a.jsxs)("div",{className:"w-80 bg-zinc-900 border-r border-[#00FF00]/20",children:[(0,a.jsxs)("div",{className:"p-4 flex items-center gap-3 border-b border-[#00FF00]/20",children:[(0,a.jsx)("div",{className:"h-10 w-10 relative",children:(0,a.jsx)(M.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-j50DMyaSBNyaoxDCB4Nx7W9kOW6nWG.png",alt:"Logo",fill:!0,className:"object-contain"})}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h3",{className:"font-semibold text-[#00FF00]",children:"Project Aries"}),(0,a.jsx)("p",{className:"text-sm text-[#00FF00]/60",children:"Lumo-8B-Instruct"})]}),(0,a.jsx)(N,{variant:"ghost",size:"icon",className:"text-[#00FF00] hover:text-[#00FF00]/80 hover:bg-[#00FF00]/10",children:(0,a.jsx)(l.Z,{className:"h-5 w-5"})})]}),(0,a.jsx)("div",{className:"p-4",children:(0,a.jsxs)(N,{className:"w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black gap-2 font-semibold",size:"lg",onClick:()=>{let s=A();t([s,...e]),r(s)},children:[(0,a.jsx)(i.Z,{className:"h-5 w-5"}),"New conversation"]})}),(0,a.jsx)(w,{className:"h-[calc(100vh-8rem)]",children:(0,a.jsx)("div",{className:"p-2 space-y-2",children:e.map(e=>(0,a.jsxs)("button",{className:"flex items-center gap-3 w-full p-2 rounded-lg transition-colors\n                    ".concat((null==s?void 0:s.id)===e.id?"bg-[#00FF00]/10 text-[#00FF00]":"text-gray-400 hover:bg-zinc-800"),onClick:()=>r(e),children:[(0,a.jsxs)(h,{className:"h-10 w-10 border border-[#00FF00]/20",children:[(0,a.jsx)(g,{src:"/placeholder.svg?height=40&width=40"}),(0,a.jsx)(p,{className:"bg-zinc-800 text-[#00FF00]",children:"AI"})]}),(0,a.jsxs)("div",{className:"flex-1 text-left",children:[(0,a.jsx)("p",{className:"font-medium ".concat((null==s?void 0:s.id)===e.id?"text-[#00FF00]":"text-gray-300"),children:e.title}),(0,a.jsx)("p",{className:"text-sm text-gray-500 truncate",children:e.lastMessage||"New conversation"})]}),(0,a.jsx)("span",{className:"text-xs text-gray-500",children:y(e.timestamp)})]},e.id))})})]}),(0,a.jsx)("div",{className:"flex-1 flex flex-col bg-zinc-900",children:s?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"p-4 border-b border-[#00FF00]/20 bg-zinc-900 flex items-center justify-between",children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsxs)(h,{className:"h-10 w-10 border border-[#00FF00]/20",children:[(0,a.jsx)(g,{src:"/placeholder.svg?height=40&width=40"}),(0,a.jsx)(p,{className:"bg-zinc-800 text-[#00FF00]",children:"AI"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-[#00FF00]",children:"Aries AI"}),(0,a.jsx)("p",{className:"text-sm text-[#00FF00]/60 max-w-[300px]",children:"Project Aries is an agentic RAG framework wrapper over Lumo-8B-Instruct, making it Solana's best AI coding assistant"}),(0,a.jsxs)("a",{href:"https://x.com/CodeByAries",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-[#00FF00]/60 hover:text-[#00FF00] transition-colors",children:[(0,a.jsx)(o.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"text-sm",children:"@CodeByAries"})]})]})]})}),(0,a.jsx)(w,{className:"flex-1 p-4",children:(0,a.jsx)("div",{className:"space-y-4",children:s.messages.map(e=>(0,a.jsxs)("div",{className:"flex items-start gap-3 ".concat("user"===e.role?"flex-row-reverse":"system"===e.role?"justify-center":""),children:["system"!==e.role&&(0,a.jsx)(h,{className:"h-8 w-8 mt-1 border border-[#00FF00]/20",children:"user"===e.role?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{src:"/placeholder.svg?height=32&width=32"}),(0,a.jsx)(p,{className:"bg-zinc-800 text-[#00FF00]",children:"U"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{src:"/placeholder.svg?height=32&width=32"}),(0,a.jsx)(p,{className:"bg-zinc-800 text-[#00FF00]",children:"AI"})]})}),(0,a.jsxs)("div",{className:"rounded-2xl px-4 py-2 max-w-[80%] ".concat("user"===e.role?"bg-[#00FF00]/20 text-[#00FF00]":"system"===e.role?"bg-zinc-700/50 text-gray-300 text-xs italic":"bg-zinc-800/50 text-gray-100 border border-[#00FF00]/20"),children:[(0,a.jsx)(C.U,{className:"text-sm prose ".concat((e.role,"prose-invert")," max-w-none"),remarkPlugins:[R.Z],rehypePlugins:[P.Z],children:e.content}),"system"===e.role&&e.content.includes("Source:")&&(0,a.jsx)("div",{className:"mt-2 text-xs text-gray-400",children:e.content.split("Source:")[1].trim()})]})]},e.id))})}),(0,a.jsx)("div",{className:"p-4 bg-zinc-900 border-t border-[#00FF00]/20",children:(0,a.jsxs)("form",{onSubmit:v,className:"flex items-center gap-2",children:[(0,a.jsx)(j,{value:u,onChange:f,placeholder:"Type a message...",className:"flex-1 rounded-full bg-zinc-800 border-[#00FF00]/20 text-gray-100 focus-visible:ring-[#00FF00]/50 placeholder:text-gray-500"}),(0,a.jsx)(N,{type:"submit",size:"icon",className:"rounded-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black",disabled:x,children:(0,a.jsx)(c.Z,{className:"h-5 w-5"})})]})})]}):(0,a.jsx)("div",{className:"flex-1 flex items-center justify-center",children:(0,a.jsx)("p",{className:"text-gray-500",children:"Select a conversation to start chatting"})})})]})})}function U(){return(0,a.jsx)(G,{})}}},function(e){e.O(0,[851,424,971,117,744],function(){return e(e.s=1538)}),_N_E=e.O()}]);