var gp=Object.defineProperty;var xp=(i,t,e)=>t in i?gp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var I=(i,t,e)=>xp(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function vp(i){const t=new URLSearchParams(i),e=o=>t.has(o)&&t.get(o)!=="0",n=o=>{const r=t.get(o);return r===null||r===""||Number.isNaN(Number(r))?null:Number(r)},s=e("test");return{clean:e("clean"),debug:e("debug"),auto:t.has("auto")?t.get("auto")!=="0":null,test:s,seed:n("seed")??57,screen:t.get("screen"),t:n("t"),reset:e("reset"),speed:n("speed"),tod:t.get("tod"),gfx:t.get("gfx"),outline:t.get("outline"),cast:t.get("cast"),rig:t.get("rig"),lowgpu:e("lowgpu"),free:e("free"),campaign:e("campaign"),portrait:e("portrait")}}const Ia="peepls.demo.v1",Zu=()=>({auto:!0,reduceMotion:!1,speed:1,outline:"ink",gfx:"auto",tod:"auto",debugCollapsed:!1}),Da=()=>({screen:"S0",settings:Zu(),progress:{}});class _p{constructor(t){I(this,"data");this.kv=t,this.data=this.load()}load(){var t;try{const e=(t=this.kv)==null?void 0:t.getItem(Ia);if(!e)return Da();const n=JSON.parse(e);return{screen:typeof n.screen=="string"?n.screen:"S0",settings:{...Zu(),...n.settings??{}},progress:n.progress??{}}}catch{return Da()}}save(){var t;try{(t=this.kv)==null||t.setItem(Ia,JSON.stringify(this.data))}catch{}}setScreen(t){this.data.screen=t,this.save()}setSetting(t,e){this.data.settings[t]=e,this.save()}reset(){var t;try{(t=this.kv)==null||t.removeItem(Ia)}catch{}this.data=Da()}}function yp(){try{return window.localStorage}catch{return null}}class bp{constructor(){I(this,"handlers",new Map)}on(t,e){let n=this.handlers.get(t);return n||this.handlers.set(t,n=new Set),n.add(e),()=>n.delete(e)}emit(t,e){for(const n of this.handlers.get(t)??[])n(e)}}const Rh=1/60;class Mp{constructor(t){I(this,"mode");I(this,"last",-1);this.mode=t?"manual":"real"}realDt(t){const e=this.last<0?0:(t-this.last)/1e3;return this.last=t,Math.min(Math.max(e,0),.1)}}class wp{constructor(t){I(this,"uiT",0);I(this,"paused",!1);I(this,"fps",0);I(this,"drawFrame",!0);I(this,"steps",[]);I(this,"lastFrameMs",0);this.clock=t}add(t){this.steps.push(t)}start(){if(this.clock.mode==="manual")return;const t=e=>{this.measureFps(e),this.step(this.clock.realDt(e)),requestAnimationFrame(t)};requestAnimationFrame(t)}advance(t,e=!0){const n=Math.round(t/1e3/Rh);for(let s=0;s<n;s++)this.drawFrame=e&&s===n-1,this.step(Rh);this.drawFrame=!0}step(t){this.uiT+=t;for(const e of this.steps)e(t)}measureFps(t){if(this.lastFrameMs){const e=1e3/Math.max(1,t-this.lastFrameMs);this.fps=this.fps?this.fps*.95+e*.05:e}this.lastFrameMs=t}}function H(i,t={},...e){const n=document.createElement(i);Ku(n,t);for(const s of e)s&&n.append(s);return n}const Sp="http://www.w3.org/2000/svg";function ae(i,t={},...e){const n=document.createElementNS(Sp,i);Ku(n,t);for(const s of e)s&&n.append(s);return n}function Ku(i,t){for(const[e,n]of Object.entries(t))n===void 0||n===!1||i.setAttribute(e,n===!0?"":String(n))}function Bt(i,t){for(const[e,n]of Object.entries(t))n!==void 0&&(e.startsWith("--")?i.style.setProperty(e,String(n)):i.style[e]=typeof n=="number"?`${n}px`:n)}const Ts=i=>document.querySelector(`#${i} .sbox`)??document.getElementById(i);function ho(i){var e;const t=document.getElementById("sr-live");if(!(!t||!i||((e=t.lastElementChild)==null?void 0:e.textContent)===i))for(t.append(H("p",{},i));t.childElementCount>4;)t.firstElementChild.remove()}const Ep=(i,t,e)=>Math.min(e,Math.max(t,i)),Xi=i=>Ep(i,0,1),se={pop:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,draw:i=>i<.5?4*i**3:1-(-2*i+2)**3/2,enter:i=>1-(1-i)**3,fall:i=>i*i},le=(i,t,e,n)=>n(Xi((i-t)/e)),uo=(i,t,e,n=.4)=>i>=t&&i<=t+n?Math.sin(Math.PI*(i-t)/n)*e:0,Hl=(i,t,e)=>i<t?0:e*Math.exp(-2.4*(i-t))*Math.sin(7*(i-t)),Ap=(i,t=0)=>1+.012*Math.sin(2.6*i+t),Fe=(i,t,e,n)=>n?[1,le(i,t,.2,se.enter)]:[le(i,t,e,se.pop),i>=t?1:0],Tp=i=>[12*i%48,6*i%48],ln=typeof window<"u"&&innerHeight/innerWidth>1.25,bi=ln?1080:1920,Mi=ln?1920:1080;let bs=1;function Ph(){bs=Math.min(innerWidth/bi,innerHeight/Mi);const i=`translate(-50%, -50%) scale(${bs})`;for(const t of document.querySelectorAll(".sbox"))t.style.transform=i}function Cp(){document.documentElement.classList.toggle("portrait",ln),Ph(),addEventListener("resize",Ph)}const ba=()=>bs;function ir(i,t){return[(i-innerWidth/2)/bs+bi/2,(t-innerHeight/2)/bs+Mi/2]}function Rp(i,t){return[(i-bi/2)*bs+innerWidth/2,(t-Mi/2)*bs+innerHeight/2]}const Ue=(i,t)=>ln?t:i;function Cs(i,t,e,n,s=540,o=960){ln&&(i.style.transformOrigin="0 0",i.style.transform=`translate(${s-t*n}px, ${o-e*n}px) scale(${n})`)}function Pe(i,t){if(!ln)return i;i.dataset.pin="";for(const[e,n]of Object.entries(t))i.style[e]=typeof n=="number"?`${n}px`:n;return i}const Xc=[960,540,1.8,540,893],kh=.8,Fh=.08,Pp=.48,Lh=Ue(-2100,-2300),kp=Ue(1960,1360),Na=.25;class Ju{constructor(t,e,n){I(this,"t",0);I(this,"swapped",!1);I(this,"pink");I(this,"ink");I(this,"layer",document.getElementById("wipe"));this.reduced=t,this.onCovered=e,this.onDone=n;const s=Ts("wipe"),o=(r,a)=>H("div",{class:`wipe-band ${r}`,style:`position:absolute;top:0;width:2100px;height:${Mi}px;background:var(--${a})`});this.pink=o("wipe-pink","pink"),this.ink=o("wipe-ink","ink"),t&&(this.pink.style.display="none"),s.append(this.pink,this.ink),this.layer.classList.add("covering"),this.update(0)}update(t){this.t+=t;const e=this.t,n=this.reduced?Na/2:Pp,s=this.reduced?Na:kh+Fh;if(this.reduced)Bt(this.ink,{left:0,width:bi,opacity:String(1-Math.abs(e/(Na/2)-1))});else{const o=r=>Lh+(kp-Lh)*se.draw(Xi((e-r)/kh));Bt(this.pink,{transform:`translateX(${o(0)}px) skewX(-8deg)`}),Bt(this.ink,{transform:`translateX(${o(Fh)}px) skewX(-8deg)`})}!this.swapped&&e>=n&&(this.swapped=!0,this.onCovered()),e>=s&&(this.pink.remove(),this.ink.remove(),this.layer.classList.remove("covering"),this.onDone())}}const Fp=.3,Lp=.25;class Ip{constructor(t,e,n){I(this,"t",0);I(this,"finished",!1);this.old=t,this.reduced=e,this.onDone=n,this.update(0)}update(t){if(this.finished)return;this.t+=t;const e=this.reduced?Lp:Fp;this.old&&(this.old.style.opacity=String(1-le(this.t,0,e,se.enter))),this.t>=e&&(this.finished=!0,this.onDone())}}const Ih=.9,Dh=.25,Nh=Ue([1380,930],[540,1080]),Dp=Ue(620,760);function Uh(i){if(!i)return null;const t=i.getBoundingClientRect(),[e,n]=ir(t.left,t.top),[s,o]=ir(t.right,t.bottom);return{x:e,y:n,w:s-e,h:o-n}}class Np{constructor(t,e,n,s){I(this,"t",0);I(this,"finished",!1);I(this,"from");I(this,"radius");I(this,"bezel");I(this,"sprite",null);this.next=e,this.reduced=n,this.onDone=s;const o=t==null?void 0:t.querySelector('[data-morph="screen"]');this.from=Uh(o)??{x:716,y:66,w:488,h:948},this.radius=56*(this.from.w/488),this.bezel=(t==null?void 0:t.querySelector('[data-morph="bezel"]'))??null;const r=t==null?void 0:t.querySelector('[data-morph="vinnie"]'),a=e.querySelector('[data-morph="vinnie"]'),l=Uh(r);if(!n&&r&&l){const c=H("img",{src:r.src,alt:"",style:"position:absolute;display:block"});Ts("wipe").append(c);const h=[r,a].filter(u=>!!u);for(const u of h)u.style.visibility="hidden";this.sprite={el:c,from:l,hidden:h}}this.update(0)}update(t){if(this.finished)return;if(this.t+=t,this.reduced){this.next.style.opacity=String(le(this.t,0,Dh,se.enter)),this.t>=Dh&&this.finish();return}const e=le(this.t,0,Ih,se.draw),n=this.from,s=n.x*(1-e),o=n.y*(1-e),r=n.w+(bi-n.w)*e,a=n.h+(Mi-n.h)*e,l=this.radius*(1-e);if(Bt(this.next,{clipPath:`inset(${o}px ${bi-s-r}px ${Mi-o-a}px ${s}px round ${l}px)`,opacity:String(Xi(e*2.5))}),this.bezel&&(this.bezel.style.opacity=String(1-Xi(e*3))),this.sprite){const c=this.sprite.from,h=c.h+(Dp-c.h)*e,u=h*(c.w/c.h),d=c.x+c.w/2+(Nh[0]-(c.x+c.w/2))*e,p=c.y+c.h+(Nh[1]-(c.y+c.h))*e;Bt(this.sprite.el,{left:d-u/2,top:p-h,width:u,height:h})}this.t>=Ih&&this.finish()}finish(){if(this.finished=!0,Bt(this.next,{clipPath:"none",opacity:"1"}),this.sprite){this.sprite.el.remove();for(const t of this.sprite.hidden)t.style.visibility=""}this.onDone()}}const Co=1,Oh=.7,Up=2300,Bh=Ue([1e3,520],[540,866]),zh=.25;class Op{constructor(t,e,n){I(this,"t",0);I(this,"swapped",!1);I(this,"disc");I(this,"layer",document.getElementById("wipe"));this.reduced=t,this.onCovered=e,this.onDone=n,this.disc=H("div",{class:"iris-white",style:"position:absolute;background:var(--white)"}),Ts("wipe").append(this.disc),this.layer.classList.add("covering"),this.update(0)}update(t){this.t+=t;const e=this.t,n=this.reduced?zh/2:Co,s=this.reduced?zh:Co+Oh;if(this.reduced)Bt(this.disc,{left:0,top:0,width:bi,height:Mi,opacity:String(1-Math.abs(e/n-1))});else if(e<Co){const o=Up*le(e,0,Co,se.draw);Bt(this.disc,{left:Bh[0]-o,top:Bh[1]-o,width:o*2,height:o*2,borderRadius:"50%",opacity:"1"})}else Bt(this.disc,{left:0,top:0,width:bi,height:Mi,borderRadius:"0",opacity:String(1-le(e,Co,Oh,se.enter))});!this.swapped&&e>=n&&(this.swapped=!0,this.onCovered()),e>=s&&(this.disc.remove(),this.layer.classList.remove("covering"),this.onDone())}}const la=[{id:"S0",name:"crowd to title",field:"ink",dots:!1,via:"none",next:"S1",hold:3,caption:"crowd1"},{id:"S1",name:"profile",field:"cyan",dots:!0,via:"wipe",next:"S2",hold:"self",caption:"profile"},{id:"S2",name:"finding",field:"cyan",dots:!0,via:"crossfade",next:"S3",hold:"self",caption:"finding"},{id:"S3",name:"reveal",field:"cyan",dots:!0,via:"crossfade",next:"S4",hold:2.5,caption:"reveal"},{id:"S4",name:"quiet room",field:"cream",dots:!1,via:"morph",next:"S5",hold:"self",caption:"room1"},{id:"S5",name:"consent",field:"cream",dots:!1,via:"none",next:"S6",hold:"self",caption:null},{id:"S6",name:"body ships",field:"pink",dots:!0,via:"wipe",next:"S7",hold:1.5,caption:"ship"},{id:"S7",name:"keychain handshake",field:"pink",dots:!0,via:"none",next:"S8",hold:"self",caption:"tap"},{id:"S8",name:"slow-tv world",field:"night",dots:!1,via:"iris",next:"S11",hold:3,caption:"tier1"},{id:"S11",name:"neighbours roster",field:"yellow",dots:!0,via:"wipe",next:"S12",hold:4,caption:"cast1"},{id:"S12",name:"end card",field:"pink",dots:!0,via:"wipe",next:null,hold:null,caption:null},{id:"S99",name:"cast viewer",field:"cream",dots:!1,via:"crossfade",next:null,hold:null,caption:null}],_s=i=>la.find(t=>t.id===i),Qu=i=>la.some(t=>t.id===i);class Bp{constructor(t,e,n){I(this,"current",null);I(this,"t",0);I(this,"transition",null);I(this,"el",null);I(this,"leaving",null);I(this,"ctx");this.factory=t,this.root=e,this.onSwap=n}bind(t){this.ctx=t}get id(){var t;return((t=this.current)==null?void 0:t.id)??null}get busy(){return this.transition!==null}get reduced(){return this.ctx.store.data.settings.reduceMotion||matchMedia("(prefers-reduced-motion: reduce)").matches}start(t){this.swap(t)}go(t,e="wipe"){return this.busy?Promise.resolve():e==="none"?(this.swap(t),Promise.resolve()):new Promise(n=>{var r;(r=this.current)==null||r.exit();const s=()=>{this.transition=null,n()};if(e==="crossfade"||e==="morph"){const a=this.detach();this.mountNew(t,e==="crossfade"?"below":"above",(a==null?void 0:a.screen.id)??null);const l=()=>{a==null||a.screen.unmount(),a==null||a.el.remove(),this.leaving=null,this.onSwap(t),s()};this.transition=e==="crossfade"?new Ip((a==null?void 0:a.el)??null,this.reduced,l):new Np((a==null?void 0:a.el)??null,this.el,this.reduced,l);return}const o=e==="iris"?Op:Ju;this.transition=new o(this.reduced,()=>this.swap(t),s)})}next(){const t=this.id?_s(this.id).next:null;t&&this.go(t,_s(t).via)}replay(){this.id&&!this.busy&&this.swap(this.id)}seek(t){var e,n;this.t=t,(n=(e=this.current)==null?void 0:e.seek)==null||n.call(e,t)}update(t){var e;this.leaving&&(this.leaving.t+=t,this.leaving.screen.update(t,this.leaving.t)),(e=this.transition)==null||e.update(t),this.current&&(this.t+=t,this.current.update(t,this.t))}input(t){var e;this.busy||(e=this.current)==null||e.onInput(t)}swap(t){const e=this.detach();e==null||e.screen.unmount(),e==null||e.el.remove(),this.leaving=null,this.mountNew(t,"above",(e==null?void 0:e.screen.id)??null),this.onSwap(t)}detach(){return!this.current||!this.el?null:(this.leaving={screen:this.current,el:this.el,t:this.t},this.current=null,this.el=null,this.leaving)}mountNew(t,e,n){this.ctx.captions.clear();const s=H("div",{class:`screen screen-${t}`,style:`position:absolute;left:0;top:0;width:${bi}px;height:${Mi}px`}),o=ln?s.appendChild(H("div",{class:"scene",style:"position:absolute;left:0;top:0;width:1920px;height:1080px"})):s;e==="below"?this.root.prepend(s):this.root.append(s);const r=this.factory(t);if(this.current=r,this.el=s,this.t=0,r.mount(this.ctx,o),ln)for(const a of o.querySelectorAll("[data-pin]"))s.append(a);r.enter(n)}}const zp={44:"12px 26px 14px",40:"10px 24px 12px",32:"8px 20px 10px",30:"6px 14px 8px",28:"6px 14px 8px"};function rn(i,t={}){const e=t.size??44,n=H(t.tag??"div",{class:"pill pixel",style:["display:inline-flex;align-items:center;gap:14px;border-radius:999px;background:var(--ink);white-space:nowrap",`font-size:${e}px;padding:${zp[e]};color:var(--${t.color??"white"})`].join(";")});return n.append(...i),n}function Ms(i,t,e="currentColor"){const n=ae("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",style:"display:block;flex:none"}),s={fill:"none",stroke:e,"stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"};switch(i){case"check":n.append(ae("path",{d:"M4 12.5l5 5L20 6",...s}));break;case"arrow":n.append(ae("path",{d:"M3 12h17M14 5l7 7-7 7",...s}));break;case"caret":n.append(ae("rect",{x:7,y:3,width:10,height:18,fill:e}));break;case"down":n.append(ae("path",{d:"M4 7h16L12 19z",fill:e}));break;case"play":n.append(ae("path",{d:"M7 4l13 8-13 8z",fill:e}));break;case"dot":n.append(ae("circle",{cx:12,cy:12,r:8,fill:e}));break}return n}class Hp{constructor(t,e){I(this,"el");I(this,"ring");I(this,"text");this.text=H("span",{},t);const n=rn([this.text,Ms("play",22,"var(--white)")],{size:32,tag:"button"});this.ring=ae("rect",{x:1,y:1,style:"width:calc(100% - 2px);height:calc(100% - 2px)",rx:999,pathLength:1,fill:"none",stroke:"var(--yellow)","stroke-width":2,"stroke-dasharray":"1 1","stroke-dashoffset":1});const s=ae("svg",{style:"position:absolute;inset:-5px;width:calc(100% + 10px);height:calc(100% + 10px);overflow:visible;pointer-events:none"},this.ring);this.el=H("div",{class:"continue",style:"position:absolute;right:50px;bottom:36px;display:none"},n,s),n.addEventListener("click",o=>{o.stopPropagation(),e()}),Ts("continue").append(this.el)}setLabel(t){this.text.textContent=t}update(t,e,n,s=!1,o=!1){this.el.classList.toggle("cta",o),s?Bt(this.el,{display:t?"block":"none",top:Ue(40,78),bottom:"auto"}):Bt(this.el,{display:t?"block":"none",top:"auto",bottom:n?140:36}),this.ring.style.display=e===null?"none":"inline",e!==null&&this.ring.setAttribute("stroke-dashoffset",String(1-e))}}class Vp{constructor(t,e){I(this,"el");I(this,"state");I(this,"dot");I(this,"shownOn",null);this.text=t,this.state=H("span",{}),this.dot=H("span",{style:"display:inline-block;width:16px;height:16px;border-radius:50%;border:3px solid var(--ink)"}),this.el=H("button",{class:"pill pixel auto-pill","aria-label":t.name,style:"position:absolute;left:50px;bottom:36px;display:none;align-items:center;gap:10px;border-radius:999px;background:var(--yellow);border:4px solid var(--ink);color:var(--ink);font-size:30px;padding:6px 18px 8px;white-space:nowrap;pointer-events:auto"}),this.el.append(this.dot,H("span",{},t.name),this.state),this.el.addEventListener("click",n=>{n.stopPropagation(),e()}),Ts("continue").append(this.el)}update(t,e,n,s=!1){s?Bt(this.el,{display:t?"inline-flex":"none",top:Ue(214,118),bottom:"auto"}):Bt(this.el,{display:t?"inline-flex":"none",top:"auto",bottom:n?140:36}),e!==this.shownOn&&(this.shownOn=e,this.state.textContent=e?this.text.on:this.text.off,this.dot.style.background=e?"var(--ink)":"transparent",this.el.setAttribute("aria-pressed",String(e)))}}class Gp{constructor(t,e,n,s,o=null){I(this,"elapsed",0);I(this,"pill");I(this,"labelFor",null);I(this,"control",null);this.flow=t,this.store=e,this.captions=n,this.label=s,this.pill=new Hp("",()=>this.tap()),o&&(this.control=new Vp(o,()=>this.store.data.settings.auto=!this.on))}get on(){return this.store.data.settings.auto}tap(){return this.canContinue()?(this.flow.next(),!0):!1}update(t){var r;const e=this.flow.current;(r=this.control)==null||r.update(!!e&&_s(e.id).next!==null,this.on,this.captions.visible,!!(e!=null&&e.autoPillTop));const n=this.flow.current;if(!n||this.flow.busy||!n.landed()){this.elapsed=0,this.pill.update(!1,null,this.captions.visible,!!(n!=null&&n.pillTop),!!(n!=null&&n.pillCta));return}this.labelFor!==n.id&&(this.labelFor=n.id,this.pill.setLabel(this.label(n.id)));const{hold:s}=_s(n.id),o=this.canContinue()&&typeof s=="number";if(o&&this.on&&(this.elapsed+=t,this.elapsed>=s)){this.elapsed=0,this.flow.next();return}this.pill.update(o,o&&this.on?this.elapsed/s:null,this.captions.visible,!!n.pillTop,!!n.pillCta)}canContinue(){const t=this.flow.current;if(!t||this.flow.busy||!t.landed())return!1;const e=_s(t.id);return e.next!==null&&e.hold!=="self"}}const Tt={},In={rigOk:!0,chars:0,lod:[0,0,0],sub:null};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="184",Wp=0,Hh=1,Xp=2,na=1,tf=2,qo=3,$i=0,Qe=1,Gn=2,_i=0,ro=1,Vh=2,Gh=3,Wh=4,$p=5,fs=100,Yp=101,qp=102,jp=103,Zp=104,Kp=200,Jp=201,Qp=202,t0=203,Vl=204,Gl=205,e0=206,n0=207,i0=208,s0=209,o0=210,r0=211,a0=212,l0=213,c0=214,Wl=0,Xl=1,$l=2,fo=3,Yl=4,ql=5,jl=6,Zl=7,ef=0,h0=1,d0=2,Xn=0,nf=1,sf=2,of=3,rf=4,af=5,lf=6,cf=7,Xh="attached",u0="detached",hf=300,ws=301,po=302,Ua=303,Oa=304,Ma=306,Kl=1e3,vi=1001,Jl=1002,Ye=1003,f0=1004,mr=1005,Je=1006,Ba=1007,gs=1008,En=1009,df=1010,uf=1011,sr=1012,Yc=1013,ai=1014,Dn=1015,wi=1016,qc=1017,jc=1018,or=1020,ff=35902,pf=35899,mf=1021,gf=1022,Nn=1023,Si=1026,xs=1027,wa=1028,Zc=1029,Ss=1030,Kc=1031,Jc=1033,ia=33776,sa=33777,oa=33778,ra=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,oc=37496,rc=37488,ac=37489,ca=37490,lc=37491,cc=37808,hc=37809,dc=37810,uc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,vc=37817,_c=37818,yc=37819,bc=37820,Mc=37821,wc=36492,Sc=36494,Ec=36495,Ac=36283,Tc=36284,ha=36285,Cc=36286,p0=3200,m0=3201,Rc=0,g0=1,xi="",Ke="srgb",da="srgb-linear",ua="linear",Se="srgb",Os=7680,$h=519,x0=512,v0=513,_0=514,Qc=515,y0=516,b0=517,th=518,M0=519,Yh=35044,qh="300 es",oi=2e3,rr=2001;function w0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function S0(){const i=fa("canvas");return i.style.display="block",i}const jh={};function Zh(...i){const t="THREE."+i.shift();console.log(t,...i)}function xf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=xf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function pe(...i){i=xf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Pc(...i){const t=i.join(" ");t in jh||(jh[t]=!0,jt(...i))}function E0(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const A0={[Wl]:Xl,[$l]:jl,[Yl]:Zl,[fo]:ql,[Xl]:Wl,[jl]:$l,[Zl]:Yl,[ql]:fo};class Rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,kc=180/Math.PI;function Ps(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function T0(i,t){return(i%t+t)%t}function Ha(i,t,e){return(1-e)*i+e*t}function Ro(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wh=class wh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wh.prototype.isVector2=!0;let At=wh;class qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=o[r+0],p=o[r+1],x=o[r+2],S=o[r+3];if(u!==S||l!==d||c!==p||h!==x){let m=l*d+c*p+h*x+u*S;m<0&&(d=-d,p=-p,x=-x,S=-S,m=-m);let f=1-a;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);f=Math.sin(f*M)/b,a=Math.sin(a*M)/b,l=l*f+d*a,c=c*f+p*a,h=h*f+x*a,u=u*f+S*a}else{l=l*f+d*a,c=c*f+p*a,h=h*f+x*a,u=u*f+S*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],d=o[r+1],p=o[r+2],x=o[r+3];return t[e]=a*x+h*u+l*p-c*d,t[e+1]=l*x+h*d+c*u-a*p,t[e+2]=c*x+h*p+a*d-l*u,t[e+3]=h*x-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),d=l(n/2),p=l(s/2),x=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sh=class Sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;let N=Sh;const Va=new N,Kh=new qi,Eh=class Eh{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],S=s[0],m=s[3],f=s[6],M=s[1],b=s[4],_=s[7],R=s[2],v=s[5],E=s[8];return o[0]=r*S+a*M+l*R,o[3]=r*m+a*b+l*v,o[6]=r*f+a*_+l*E,o[1]=c*S+h*M+u*R,o[4]=c*m+h*b+u*v,o[7]=c*f+h*_+u*E,o[2]=d*S+p*M+x*R,o[5]=d*m+p*b+x*v,o[8]=d*f+p*_+x*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,p=c*o-r*l,x=e*u+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*r)*S,t[3]=d*S,t[4]=(h*e-s*l)*S,t[5]=(s*o-a*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(r*e-n*o)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ga.makeScale(t,e)),this}rotate(t){return this.premultiply(Ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;let oe=Eh;const Ga=new oe,Jh=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C0(){const i={enabled:!0,workingColorSpace:da,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Se&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Se&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Pc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Pc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[da]:{primaries:t,whitePoint:n,transfer:ua,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const me=C0();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bs;class R0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=fa("canvas")),Bs.width=t.width,Bs.height=t.height;const s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=yi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let P0=0;class eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Wa(s[r].image)):o.push(Wa(s[r]))}else o=Wa(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?R0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let k0=0;const Xa=new N;class cn extends Rs{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=vi,s=vi,o=Je,r=gs,a=Nn,l=En,c=cn.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Ps(),this.name="",this.source=new eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kl:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kl:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=hf;cn.DEFAULT_ANISOTROPY=1;const Ah=class Ah{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,_=(p+1)/2,R=(f+1)/2,v=(h+d)/4,E=(u+S)/4,g=(x+m)/4;return b>_&&b>R?b<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(b),s=v/n,o=E/n):_>R?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=v/s,o=g/s):R<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),n=E/o,s=g/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-x)*(m-x)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(u-S)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ah.prototype.isVector4=!0;let Ee=Ah;class F0 extends Rs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new cn(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new eh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends F0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vf extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class L0 extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ya=class ya{constructor(t,e,n,s,o,r,a,l,c,h,u,d,p,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,d,p,x,S,m)}set(t,e,n,s,o,r,a,l,c,h,u,d,p,x,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ya().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),o=1/zs.setFromMatrixColumn(t,1).length(),r=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,x=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=d-S*c,e[9]=-a*l,e[2]=S-d*c,e[6]=x+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,x=c*h,S=c*u;e[0]=d+S*a,e[4]=x*a-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-x,e[6]=S+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,x=c*h,S=c*u;e[0]=d-S*a,e[4]=-r*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=r*h,e[9]=S-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,x=a*h,S=a*u;e[0]=l*h,e[4]=x*c-p,e[8]=d*c+S,e[1]=l*u,e[5]=S*c+d,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,x=a*l,S=a*c;e[0]=l*h,e[4]=S-d*u,e[8]=x*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+x,e[10]=d-S*u}else if(t.order==="XZY"){const d=r*l,p=r*c,x=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+S,e[5]=r*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=S*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(I0,t,D0)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ki.crossVectors(n,Mn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ki.crossVectors(n,Mn)),ki.normalize(),gr.crossVectors(Mn,ki),s[0]=ki.x,s[4]=gr.x,s[8]=Mn.x,s[1]=ki.y,s[5]=gr.y,s[9]=Mn.y,s[2]=ki.z,s[6]=gr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],S=n[6],m=n[10],f=n[14],M=n[3],b=n[7],_=n[11],R=n[15],v=s[0],E=s[4],g=s[8],y=s[12],T=s[1],A=s[5],k=s[9],F=s[13],O=s[2],L=s[6],V=s[10],U=s[14],Z=s[3],et=s[7],ut=s[11],wt=s[15];return o[0]=r*v+a*T+l*O+c*Z,o[4]=r*E+a*A+l*L+c*et,o[8]=r*g+a*k+l*V+c*ut,o[12]=r*y+a*F+l*U+c*wt,o[1]=h*v+u*T+d*O+p*Z,o[5]=h*E+u*A+d*L+p*et,o[9]=h*g+u*k+d*V+p*ut,o[13]=h*y+u*F+d*U+p*wt,o[2]=x*v+S*T+m*O+f*Z,o[6]=x*E+S*A+m*L+f*et,o[10]=x*g+S*k+m*V+f*ut,o[14]=x*y+S*F+m*U+f*wt,o[3]=M*v+b*T+_*O+R*Z,o[7]=M*E+b*A+_*L+R*et,o[11]=M*g+b*k+_*V+R*ut,o[15]=M*y+b*F+_*U+R*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],S=t[7],m=t[11],f=t[15],M=l*p-c*d,b=a*p-c*u,_=a*d-l*u,R=r*p-c*h,v=r*d-l*h,E=r*u-a*h;return e*(S*M-m*b+f*_)-n*(x*M-m*R+f*v)+s*(x*b-S*R+f*E)-o*(x*_-S*v+m*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],S=t[13],m=t[14],f=t[15],M=e*a-n*r,b=e*l-s*r,_=e*c-o*r,R=n*l-s*a,v=n*c-o*a,E=s*c-o*l,g=h*S-u*x,y=h*m-d*x,T=h*f-p*x,A=u*m-d*S,k=u*f-p*S,F=d*f-p*m,O=M*F-b*k+_*A+R*T-v*y+E*g;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return t[0]=(a*F-l*k+c*A)*L,t[1]=(s*k-n*F-o*A)*L,t[2]=(S*E-m*v+f*R)*L,t[3]=(d*v-u*E-p*R)*L,t[4]=(l*T-r*F-c*y)*L,t[5]=(e*F-s*T+o*y)*L,t[6]=(m*_-x*E-f*b)*L,t[7]=(h*E-d*_+p*b)*L,t[8]=(r*k-a*T+c*g)*L,t[9]=(n*T-e*k-o*g)*L,t[10]=(x*v-S*_+f*M)*L,t[11]=(u*_-h*v-p*M)*L,t[12]=(a*y-r*A-l*g)*L,t[13]=(e*A-n*y+s*g)*L,t[14]=(S*b-x*R-m*M)*L,t[15]=(h*R-u*b+d*M)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,p=o*h,x=o*u,S=r*h,m=r*u,f=a*u,M=l*c,b=l*h,_=l*u,R=n.x,v=n.y,E=n.z;return s[0]=(1-(S+f))*R,s[1]=(p+_)*R,s[2]=(x-b)*R,s[3]=0,s[4]=(p-_)*v,s[5]=(1-(d+f))*v,s[6]=(m+M)*v,s[7]=0,s[8]=(x+b)*E,s[9]=(m-M)*E,s[10]=(1-(d+S))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinant();if(o===0)return n.set(1,1,1),e.identity(),this;let r=zs.set(s[0],s[1],s[2]).length();const a=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();o<0&&(r=-r),On.copy(this);const c=1/r,h=1/a,u=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=oi,l=!1){const c=this.elements,h=2*o/(e-t),u=2*o/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let x,S;if(l)x=o/(r-o),S=r*o/(r-o);else if(a===oi)x=-(r+o)/(r-o),S=-2*r*o/(r-o);else if(a===rr)x=-r/(r-o),S=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=oi,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,S;if(l)x=1/(r-o),S=r/(r-o);else if(a===oi)x=-2/(r-o),S=-(r+o)/(r-o);else if(a===rr)x=-1/(r-o),S=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ya.prototype.isMatrix4=!0;let te=ya;const zs=new N,On=new te,I0=new N(0,0,0),D0=new N(1,1,1),ki=new N,gr=new N,Mn=new N,td=new te,ed=new qi;class Yi{constructor(t=0,e=0,n=0,s=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-de(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return td.makeRotationFromQuaternion(t),this.setFromRotationMatrix(td,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ed.setFromEuler(this),this.setFromQuaternion(ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class nh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let N0=0;const nd=new N,Hs=new qi,ci=new te,xr=new N,Po=new N,U0=new N,O0=new qi,id=new N(1,0,0),sd=new N(0,1,0),od=new N(0,0,1),rd={type:"added"},B0={type:"removed"},Vs={type:"childadded",child:null},$a={type:"childremoved",child:null};class qe extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new N,e=new Yi,n=new qi,s=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new oe}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(id,t)}rotateY(t){return this.rotateOnAxis(sd,t)}rotateZ(t){return this.rotateOnAxis(od,t)}translateOnAxis(t,e){return nd.copy(t).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(id,t)}translateY(t){return this.translateOnAxis(sd,t)}translateZ(t){return this.translateOnAxis(od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Po,xr,this.up):ci.lookAt(xr,Po,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(ci),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rd),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B0),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rd),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,U0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,O0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),x=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}qe.DEFAULT_UP=new N(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fn extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},vr={h:0,s:0,l:0};function qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=T0(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=qa(r,o,t+1/3),this.g=qa(r,o,t),this.b=qa(r,o,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(o){o!==void 0&&parseFloat(o)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=_f[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return me.workingToColorSpace(nn.copy(this),t),Math.round(de(nn.r*255,0,255))*65536+Math.round(de(nn.g*255,0,255))*256+Math.round(de(nn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(nn.copy(this),e);const n=nn.r,s=nn.g,o=nn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Ke){me.workingToColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,s=nn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(vr);const n=Ha(Fi.h,vr.h,e),s=Ha(Fi.s,vr.s,e),o=Ha(Fi.l,vr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ie;ie.NAMES=_f;class Sa extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Bn=new N,hi=new N,ja=new N,di=new N,Gs=new N,Ws=new N,ad=new N,Za=new N,Ka=new N,Ja=new N,Qa=new Ee,tl=new Ee,el=new Ee;class Wn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Bn.subVectors(s,e),hi.subVectors(n,e),ja.subVectors(t,e);const r=Bn.dot(Bn),a=Bn.dot(hi),l=Bn.dot(ja),c=hi.dot(hi),h=hi.dot(ja),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,x=(r*h-a*l)*d;return o.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,di.x),l.addScaledVector(r,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Qa.setScalar(0),tl.setScalar(0),el.setScalar(0),Qa.fromBufferAttribute(t,e),tl.fromBufferAttribute(t,n),el.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Qa,o.x),r.addScaledVector(tl,o.y),r.addScaledVector(el,o.z),r}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),hi.subVectors(t,e),Bn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Bn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Gs.subVectors(s,n),Ws.subVectors(o,n),Za.subVectors(t,n);const l=Gs.dot(Za),c=Ws.dot(Za);if(l<=0&&c<=0)return e.copy(n);Ka.subVectors(t,s);const h=Gs.dot(Ka),u=Ws.dot(Ka);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Gs,r);Ja.subVectors(t,o);const p=Gs.dot(Ja),x=Ws.dot(Ja);if(x>=0&&p<=x)return e.copy(o);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Ws,a);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return ad.subVectors(o,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(ad,a);const f=1/(m+S+d);return r=S*f,a=d*f,e.copy(n).addScaledVector(Gs,r).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ji{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,zn):zn.fromBufferAttribute(o,r),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),yr.subVectors(this.max,ko),Xs.subVectors(t.a,ko),$s.subVectors(t.b,ko),Ys.subVectors(t.c,ko),Li.subVectors($s,Xs),Ii.subVectors(Ys,$s),ts.subVectors(Xs,Ys);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-ts.z,ts.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,ts.z,0,-ts.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-ts.y,ts.x,0];return!nl(e,Xs,$s,Ys,yr)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,Xs,$s,Ys,yr))?!1:(br.crossVectors(Li,Ii),e=[br.x,br.y,br.z],nl(e,Xs,$s,Ys,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ui=[new N,new N,new N,new N,new N,new N,new N,new N],zn=new N,_r=new ji,Xs=new N,$s=new N,Ys=new N,Li=new N,Ii=new N,ts=new N,ko=new N,yr=new N,br=new N,es=new N;function nl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){es.fromArray(i,o);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ze=new N,Mr=new At;let H0=0;class _e extends Rs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ro(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array),s=xn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array),s=xn(s,this.array),o=xn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class ih extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yf extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}}const V0=new ji,Fo=new N,il=new N;class ks{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):V0.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const e=Fo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(il)),this.expandByPoint(Fo.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let G0=0;const Cn=new te,sl=new qe,qs=new N,wn=new ji,Lo=new ji,$e=new N;class He extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w0(t)?yf:ih)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new oe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];wn.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(wn.min,Lo.min),wn.expandByPoint($e),$e.addVectors(wn.max,Lo.max),wn.expandByPoint($e)):(wn.expandByPoint(Lo.min),wn.expandByPoint(Lo.max))}wn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)$e.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared($e));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(t,c),$e.add(qs)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new N,l[g]=new N;const c=new N,h=new N,u=new N,d=new At,p=new At,x=new At,S=new N,m=new N;function f(g,y,T){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),d.fromBufferAttribute(o,g),p.fromBufferAttribute(o,y),x.fromBufferAttribute(o,T),h.sub(c),u.sub(c),p.sub(d),x.sub(d);const A=1/(p.x*x.y-x.x*p.y);isFinite(A)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(A),a[g].add(S),a[y].add(S),a[T].add(S),l[g].add(m),l[y].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let g=0,y=M.length;g<y;++g){const T=M[g],A=T.start,k=T.count;for(let F=A,O=A+k;F<O;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new N,_=new N,R=new N,v=new N;function E(g){R.fromBufferAttribute(s,g),v.copy(R);const y=a[g];b.copy(y),b.sub(R.multiplyScalar(R.dot(y))).normalize(),_.crossVectors(v,y);const A=_.dot(l[g])<0?-1:1;r.setXYZW(g,b.x,b.y,b.z,A)}for(let g=0,y=M.length;g<y;++g){const T=M[g],A=T.start,k=T.count;for(let F=A,O=A+k;F<O;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new N,o=new N,r=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,S),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new _e(d,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let W0=0;class dr extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=ro,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vl&&(n.blendSrc=this.blendSrc),this.blendDst!==Gl&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fi=new N,ol=new N,wr=new N,Di=new N,rl=new N,Sr=new N,al=new N;class sh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ol.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(ol);const o=t.distanceTo(e)*.5,r=-this.direction.dot(wr),a=Di.dot(this.direction),l=-Di.dot(wr),c=Di.lengthSq(),h=Math.abs(1-r*r);let u,d,p,x;if(h>0)if(u=r*l-a,d=r*a-l,x=o*h,u>=0)if(d>=-x)if(d<=x){const S=1/h;u*=S,d*=S,p=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ol).addScaledVector(wr,d),p}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const n=fi.dot(this.direction),s=fi.dot(fi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,o){rl.subVectors(e,t),Sr.subVectors(n,t),al.crossVectors(rl,Sr);let r=this.direction.dot(al),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Di.subVectors(this.origin,t);const l=a*this.direction.dot(Sr.crossVectors(Di,Sr));if(l<0)return null;const c=a*this.direction.dot(rl.cross(Di));if(c<0||l+c>r)return null;const h=-a*Di.dot(al);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yn extends dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ld=new te,ns=new sh,Er=new ks,cd=new N,Ar=new N,Tr=new N,Cr=new N,ll=new N,Rr=new N,hd=new N,Pr=new N;class Me extends qe{constructor(t=new He,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Rr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(ll.fromBufferAttribute(u,t),r?Rr.addScaledVector(ll,h):Rr.addScaledVector(ll.sub(e),h))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(o),ns.copy(t.ray).recast(t.near),!(Er.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Er,cd)===null||ns.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(o).invert(),ns.copy(t.ray).applyMatrix4(ld),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=r[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,R=b;_<R;_+=3){const v=a.getX(_),E=a.getX(_+1),g=a.getX(_+2);s=kr(this,f,t,n,c,h,u,v,E,g),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const M=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);s=kr(this,r,t,n,c,h,u,M,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=r[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,R=b;_<R;_+=3){const v=_,E=_+1,g=_+2;s=kr(this,f,t,n,c,h,u,v,E,g),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const M=m,b=m+1,_=m+2;s=kr(this,r,t,n,c,h,u,M,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function X0(i,t,e,n,s,o,r,a){let l;if(t.side===Qe?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===$i,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:i}}function kr(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Ar),i.getVertexPosition(l,Tr),i.getVertexPosition(c,Cr);const h=X0(i,t,e,n,Ar,Tr,Cr,hd);if(h){const u=new N;Wn.getBarycoord(hd,Ar,Tr,Cr,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,a,l,c,u,new At)),o&&(h.uv1=Wn.getInterpolatedAttribute(o,a,l,c,u,new At)),r&&(h.normal=Wn.getInterpolatedAttribute(r,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Wn.getNormal(Ar,Tr,Cr,d.normal),h.face=d,h.barycoord=u}return h}const Io=new Ee,dd=new Ee,ud=new Ee,$0=new Ee,fd=new te,Fr=new N,cl=new ks,pd=new te,hl=new sh;class md extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xh,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ji),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ks),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingSphere.expandByPoint(Fr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(s),t.ray.intersectsSphere(cl)!==!1&&(pd.copy(s).invert(),hl.copy(t.ray).applyMatrix4(pd),!(this.boundingBox!==null&&hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,hl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ee,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===u0?this.bindMatrixInverse.copy(this.bindMatrix).invert():jt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;dd.fromBufferAttribute(s.attributes.skinIndex,t),ud.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Io.copy(e),e.set(0,0,0,0)):(Io.set(...e,1),e.set(0,0,0)),Io.applyMatrix4(this.bindMatrix);for(let o=0;o<4;o++){const r=ud.getComponent(o);if(r!==0){const a=dd.getComponent(o);fd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector($0.copy(Io).applyMatrix4(fd),r)}}return e.isVector4&&(e.w=Io.w),e.applyMatrix4(this.bindMatrixInverse)}}class bf extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ea extends cn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Ye,h=Ye,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new te,Y0=new te;class oh{constructor(t=[],e=[]){this.uuid=Ps(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){jt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,r=t.length;o<r;o++){const a=t[o]?t[o].matrixWorld:Y0;gd.multiplyMatrices(a,e[o]),gd.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new oh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ea(e,t,t,Nn,Dn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let r=e[o];r===void 0&&(jt("Skeleton: No bone found with UUID:",o),r=new bf),this.bones.push(r),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const r=e[s];t.bones.push(r.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class pa extends _e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const js=new te,xd=new te,Lr=[],vd=new ji,q0=new te,Do=new Me,No=new ks;class Es extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,q0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),vd.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(vd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ks),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),No.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),t.ray.intersectsSphere(No)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,js),xd.multiplyMatrices(n,js),Do.matrixWorld=xd,Do.raycast(t,Lr);for(let r=0,a=Lr.length;r<a;r++){const l=Lr[r];l.instanceId=o,l.object=this,e.push(l)}Lr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ea(new Float32Array(s*this.count),s,this.count,wa,Dn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const dl=new N,j0=new N,Z0=new oe;class ds{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=dl.subVectors(n,e).cross(j0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(dl),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Z0.getNormalMatrix(t),s=this.coplanarPoint(dl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new ks,K0=new At(.5,.5),Ir=new N;class rh{constructor(t=new ds,e=new ds,n=new ds,s=new ds,o=new ds,r=new ds){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],d=o[6],p=o[7],x=o[8],S=o[9],m=o[10],f=o[11],M=o[12],b=o[13],_=o[14],R=o[15];if(s[0].setComponents(c-r,p-h,f-x,R-M).normalize(),s[1].setComponents(c+r,p+h,f+x,R+M).normalize(),s[2].setComponents(c+a,p+u,f+S,R+b).normalize(),s[3].setComponents(c-a,p-u,f-S,R-b).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,p-d,f-m,R-_).normalize();else if(s[4].setComponents(c-l,p-d,f-m,R-_).normalize(),e===oi)s[5].setComponents(c+l,p+d,f+m,R+_).normalize();else if(e===rr)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);const e=K0.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mf extends cn{constructor(t=[],e=ws,n,s,o,r,a,l,c,h){super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ur extends cn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends cn{constructor(t,e,n=ai,s,o,r,a=Ye,l=Ye,c,h=Si,u=1){if(h!==Si&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new eh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class J0 extends mo{constructor(t,e=ai,n=ws,s,o,r=Ye,a=Ye,l,c=Si){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,o,r,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wf extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pn extends He{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;x("z","y","x",-1,-1,n,e,t,r,o,0),x("z","y","x",1,-1,n,e,-t,r,o,1),x("x","z","y",1,1,t,n,e,s,r,2),x("x","z","y",1,-1,t,n,-e,s,r,3),x("x","y","z",1,-1,t,e,n,s,o,4),x("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function x(S,m,f,M,b,_,R,v,E,g,y){const T=_/E,A=R/g,k=_/2,F=R/2,O=v/2,L=E+1,V=g+1;let U=0,Z=0;const et=new N;for(let ut=0;ut<V;ut++){const wt=ut*A-F;for(let It=0;It<L;It++){const qt=It*T-k;et[S]=qt*M,et[m]=wt*b,et[f]=O,c.push(et.x,et.y,et.z),et[S]=0,et[m]=0,et[f]=v>0?1:-1,h.push(et.x,et.y,et.z),u.push(It/E),u.push(1-ut/g),U+=1}}for(let ut=0;ut<g;ut++)for(let wt=0;wt<E;wt++){const It=d+wt+L*ut,qt=d+wt+L*(ut+1),mt=d+(wt+1)+L*(ut+1),St=d+(wt+1)+L*ut;l.push(It,qt,St),l.push(qt,mt,St),Z+=6}a.addGroup(p,Z,y),p+=Z,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ah extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new N,h=new At;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class bo extends He{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],p=[];let x=0;const S=[],m=n/2;let f=0;M(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2));function M(){const _=new N,R=new N;let v=0;const E=(e-t)/n;for(let g=0;g<=o;g++){const y=[],T=g/o,A=T*(e-t)+t;for(let k=0;k<=s;k++){const F=k/s,O=F*l+a,L=Math.sin(O),V=Math.cos(O);R.x=A*L,R.y=-T*n+m,R.z=A*V,u.push(R.x,R.y,R.z),_.set(L,E,V).normalize(),d.push(_.x,_.y,_.z),p.push(F,1-T),y.push(x++)}S.push(y)}for(let g=0;g<s;g++)for(let y=0;y<o;y++){const T=S[y][g],A=S[y+1][g],k=S[y+1][g+1],F=S[y][g+1];(t>0||y!==0)&&(h.push(T,A,F),v+=3),(e>0||y!==o-1)&&(h.push(A,k,F),v+=3)}c.addGroup(f,v,0),f+=v}function b(_){const R=x,v=new At,E=new N;let g=0;const y=_===!0?t:e,T=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),x++;const A=x;for(let k=0;k<=s;k++){const O=k/s*l+a,L=Math.cos(O),V=Math.sin(O);E.x=y*V,E.y=m*T,E.z=y*L,u.push(E.x,E.y,E.z),d.push(0,T,0),v.x=L*.5+.5,v.y=V*.5*T+.5,p.push(v.x,v.y),x++}for(let k=0;k<s;k++){const F=R+k,O=A+k;_===!0?h.push(O,O+1,F):h.push(O+1,O,F),g+=3}c.addGroup(f,g,_===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Aa extends bo{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Aa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,p=(r-h)/d;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new At:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,s=[],o=[],r=[],a=new N,l=new te;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new N)}o[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(de(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,x))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(de(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let x=1;x<=t;x++)o[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),r[x].crossVectors(s[x],o[x])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lh extends li{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Q0 extends lh{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ch(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,p=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,p*=h,s(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const _d=new N,yd=new N,ul=new ch,fl=new ch,pl=new ch;class Sf extends li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(yd.subVectors(s[0],s[1]).add(s[0]),c=yd);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(_d.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=_d),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),p),S=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);S<1e-4&&(S=1),x<1e-4&&(x=S),m<1e-4&&(m=S),ul.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,S,m),fl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,S,m),pl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,S,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),fl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),pl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ul.calc(l),fl.calc(l),pl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bd(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function tm(i,t){const e=1-i;return e*e*t}function em(i,t){return 2*(1-i)*i*t}function nm(i,t){return i*i*t}function tr(i,t,e,n){return tm(i,t)+em(i,e)+nm(i,n)}function im(i,t){const e=1-i;return e*e*e*t}function sm(i,t){const e=1-i;return 3*e*e*i*t}function om(i,t){return 3*(1-i)*i*i*t}function rm(i,t){return i*i*i*t}function er(i,t,e,n,s){return im(i,t)+sm(i,e)+om(i,n)+rm(i,s)}class Ef extends li{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(er(t,s.x,o.x,r.x,a.x),er(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class am extends li{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(er(t,s.x,o.x,r.x,a.x),er(t,s.y,o.y,r.y,a.y),er(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Af extends li{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lm extends li{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tf extends li{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(tr(t,s.x,o.x,r.x),tr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends li{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(tr(t,s.x,o.x,r.x),tr(t,s.y,o.y,r.y),tr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(bd(a,l.x,c.x,h.x,u.x),bd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var ma=Object.freeze({__proto__:null,ArcCurve:Q0,CatmullRomCurve3:Sf,CubicBezierCurve:Ef,CubicBezierCurve3:am,EllipseCurve:lh,LineCurve:Af,LineCurve3:lm,QuadraticBezierCurve:Tf,QuadraticBezierCurve3:Cf,SplineCurve:Rf});class cm extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ma[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ma[s.type]().fromJSON(s))}return this}}class Md extends cm{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Af(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Tf(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Ef(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Rf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new lh(t,e,n,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hh extends Md{constructor(t){super(t),this.uuid=Ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Md().fromJSON(s))}return this}}function hm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Pf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=mm(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){const p=i[d],x=i[d+1];p<a&&(a=p),x<l&&(l=x),p>h&&(h=p),x>u&&(u=x)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ar(o,r,e,a,l,c,0),r}function Pf(i,t,e,n,s){let o;if(s===Am(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=wd(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=wd(r/n|0,i[r],i[r+1],o);return o&&go(o,o.next)&&(cr(o),o=o.next),o}function As(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(go(e,e.next)||Ie(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(i,t,e,n,s,o,r){if(!i)return;!r&&o&&ym(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?um(i,n,s,o):dm(i)){t.push(l.i,i.i,c.i),cr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=fm(As(i),t),ar(i,t,e,n,s,o,2)):r===2&&pm(i,t,e,n,s,o):ar(As(i),t,e,n,s,o,1);break}}}function dm(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,o,r),u=Math.min(a,l,c),d=Math.max(s,o,r),p=Math.max(a,l,c);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=p&&jo(s,a,o,l,r,c,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function um(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ie(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,d=r.y,p=Math.min(a,l,c),x=Math.min(h,u,d),S=Math.max(a,l,c),m=Math.max(h,u,d),f=Fc(p,x,t,e,n),M=Fc(S,m,t,e,n);let b=i.prevZ,_=i.nextZ;for(;b&&b.z>=f&&_&&_.z<=M;){if(b.x>=p&&b.x<=S&&b.y>=x&&b.y<=m&&b!==s&&b!==r&&jo(a,h,l,u,c,d,b.x,b.y)&&Ie(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=S&&_.y>=x&&_.y<=m&&_!==s&&_!==r&&jo(a,h,l,u,c,d,_.x,_.y)&&Ie(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=S&&b.y>=x&&b.y<=m&&b!==s&&b!==r&&jo(a,h,l,u,c,d,b.x,b.y)&&Ie(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=M;){if(_.x>=p&&_.x<=S&&_.y>=x&&_.y<=m&&_!==s&&_!==r&&jo(a,h,l,u,c,d,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function fm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!go(n,s)&&Ff(n,e,e.next,s)&&lr(n,s)&&lr(s,n)&&(t.push(n.i,e.i,s.i),cr(e),cr(e.next),e=i=s),e=e.next}while(e!==i);return As(e)}function pm(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&wm(r,a)){let l=Lf(r,a);r=As(r,r.next),l=As(l,l.next),ar(r,t,e,n,s,o,0),ar(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function mm(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Pf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Mm(c))}s.sort(gm);for(let o=0;o<s.length;o++)e=xm(s[o],e);return e}function gm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function xm(i,t){const e=vm(i,t);if(!e)return t;const n=Lf(e,i);return As(n,n.next),As(e,e.next)}function vm(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(go(i,e))return e;do{if(go(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&kf(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);lr(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&_m(r,e)))&&(r=e,h=u)}e=e.next}while(e!==a);return r}function _m(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function ym(i,t,e,n){let s=i;do s.z===0&&(s.z=Fc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bm(s)}function bm(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function Fc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function kf(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function jo(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&kf(i,t,e,n,s,o,r,a)}function wm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sm(i,t)&&(lr(i,t)&&lr(t,i)&&Em(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||go(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function go(i,t){return i.x===t.x&&i.y===t.y}function Ff(i,t,e,n){const s=Nr(Ie(i,t,e)),o=Nr(Ie(i,t,n)),r=Nr(Ie(e,n,i)),a=Nr(Ie(e,n,t));return!!(s!==o&&r!==a||s===0&&Dr(i,e,t)||o===0&&Dr(i,n,t)||r===0&&Dr(e,i,n)||a===0&&Dr(e,t,n))}function Dr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Nr(i){return i>0?1:i<0?-1:0}function Sm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ff(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Em(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lf(i,t){const e=Lc(i.i,i.x,i.y),n=Lc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function wd(i,t,e,n){const s=Lc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Am(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Tm{static triangulate(t,e,n=2){return hm(t,e,n)}}class so{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return so.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Sd(t),Ed(n,t);let r=t.length;e.forEach(Sd);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Ed(n,e[l]);const a=Tm.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Sd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ed(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ta extends He{constructor(t=new hh([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Cm;let b,_=!1,R,v,E,g;if(f){b=f.getSpacedPoints(h),_=!0,d=!1;const it=f.isCatmullRomCurve3?f.closed:!1;R=f.computeFrenetFrames(h,it),v=new N,E=new N,g=new N}d||(m=0,p=0,x=0,S=0);const y=a.extractPoints(c);let T=y.shape;const A=y.holes;if(!so.isClockWise(T)){T=T.reverse();for(let it=0,ft=A.length;it<ft;it++){const ht=A[it];so.isClockWise(ht)&&(A[it]=ht.reverse())}}function F(it){const ht=10000000000000001e-36;let Et=it[0];for(let bt=1;bt<=it.length;bt++){const Jt=bt%it.length,B=it[Jt],Qt=B.x-Et.x,zt=B.y-Et.y,Xt=Qt*Qt+zt*zt,xt=Math.max(Math.abs(B.x),Math.abs(B.y),Math.abs(Et.x),Math.abs(Et.y)),ue=ht*xt*xt;if(Xt<=ue){it.splice(Jt,1),bt--;continue}Et=B}}F(T),A.forEach(F);const O=A.length,L=T;for(let it=0;it<O;it++){const ft=A[it];T=T.concat(ft)}function V(it,ft,ht){return ft||pe("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ft,ht)}const U=T.length;function Z(it,ft,ht){let Et,bt,Jt;const B=it.x-ft.x,Qt=it.y-ft.y,zt=ht.x-it.x,Xt=ht.y-it.y,xt=B*B+Qt*Qt,ue=B*Xt-Qt*zt;if(Math.abs(ue)>Number.EPSILON){const P=Math.sqrt(xt),w=Math.sqrt(zt*zt+Xt*Xt),W=ft.x-Qt/P,at=ft.y+B/P,dt=ht.x-Xt/w,vt=ht.y+zt/w,Mt=((dt-W)*Xt-(vt-at)*zt)/(B*Xt-Qt*zt);Et=W+B*Mt-it.x,bt=at+Qt*Mt-it.y;const J=Et*Et+bt*bt;if(J<=2)return new At(Et,bt);Jt=Math.sqrt(J/2)}else{let P=!1;B>Number.EPSILON?zt>Number.EPSILON&&(P=!0):B<-Number.EPSILON?zt<-Number.EPSILON&&(P=!0):Math.sign(Qt)===Math.sign(Xt)&&(P=!0),P?(Et=-Qt,bt=B,Jt=Math.sqrt(xt)):(Et=B,bt=Qt,Jt=Math.sqrt(xt/2))}return new At(Et/Jt,bt/Jt)}const et=[];for(let it=0,ft=L.length,ht=ft-1,Et=it+1;it<ft;it++,ht++,Et++)ht===ft&&(ht=0),Et===ft&&(Et=0),et[it]=Z(L[it],L[ht],L[Et]);const ut=[];let wt,It=et.concat();for(let it=0,ft=O;it<ft;it++){const ht=A[it];wt=[];for(let Et=0,bt=ht.length,Jt=bt-1,B=Et+1;Et<bt;Et++,Jt++,B++)Jt===bt&&(Jt=0),B===bt&&(B=0),wt[Et]=Z(ht[Et],ht[Jt],ht[B]);ut.push(wt),It=It.concat(wt)}let qt;if(m===0)qt=so.triangulateShape(L,A);else{const it=[],ft=[];for(let ht=0;ht<m;ht++){const Et=ht/m,bt=p*Math.cos(Et*Math.PI/2),Jt=x*Math.sin(Et*Math.PI/2)+S;for(let B=0,Qt=L.length;B<Qt;B++){const zt=V(L[B],et[B],Jt);yt(zt.x,zt.y,-bt),Et===0&&it.push(zt)}for(let B=0,Qt=O;B<Qt;B++){const zt=A[B];wt=ut[B];const Xt=[];for(let xt=0,ue=zt.length;xt<ue;xt++){const P=V(zt[xt],wt[xt],Jt);yt(P.x,P.y,-bt),Et===0&&Xt.push(P)}Et===0&&ft.push(Xt)}}qt=so.triangulateShape(it,ft)}const mt=qt.length,St=x+S;for(let it=0;it<U;it++){const ft=d?V(T[it],It[it],St):T[it];_?(E.copy(R.normals[0]).multiplyScalar(ft.x),v.copy(R.binormals[0]).multiplyScalar(ft.y),g.copy(b[0]).add(E).add(v),yt(g.x,g.y,g.z)):yt(ft.x,ft.y,0)}for(let it=1;it<=h;it++)for(let ft=0;ft<U;ft++){const ht=d?V(T[ft],It[ft],St):T[ft];_?(E.copy(R.normals[it]).multiplyScalar(ht.x),v.copy(R.binormals[it]).multiplyScalar(ht.y),g.copy(b[it]).add(E).add(v),yt(g.x,g.y,g.z)):yt(ht.x,ht.y,u/h*it)}for(let it=m-1;it>=0;it--){const ft=it/m,ht=p*Math.cos(ft*Math.PI/2),Et=x*Math.sin(ft*Math.PI/2)+S;for(let bt=0,Jt=L.length;bt<Jt;bt++){const B=V(L[bt],et[bt],Et);yt(B.x,B.y,u+ht)}for(let bt=0,Jt=A.length;bt<Jt;bt++){const B=A[bt];wt=ut[bt];for(let Qt=0,zt=B.length;Qt<zt;Qt++){const Xt=V(B[Qt],wt[Qt],Et);_?yt(Xt.x,Xt.y+b[h-1].y,b[h-1].x+ht):yt(Xt.x,Xt.y,u+ht)}}}X(),ot();function X(){const it=s.length/3;if(d){let ft=0,ht=U*ft;for(let Et=0;Et<mt;Et++){const bt=qt[Et];Dt(bt[2]+ht,bt[1]+ht,bt[0]+ht)}ft=h+m*2,ht=U*ft;for(let Et=0;Et<mt;Et++){const bt=qt[Et];Dt(bt[0]+ht,bt[1]+ht,bt[2]+ht)}}else{for(let ft=0;ft<mt;ft++){const ht=qt[ft];Dt(ht[2],ht[1],ht[0])}for(let ft=0;ft<mt;ft++){const ht=qt[ft];Dt(ht[0]+U*h,ht[1]+U*h,ht[2]+U*h)}}n.addGroup(it,s.length/3-it,0)}function ot(){const it=s.length/3;let ft=0;K(L,ft),ft+=L.length;for(let ht=0,Et=A.length;ht<Et;ht++){const bt=A[ht];K(bt,ft),ft+=bt.length}n.addGroup(it,s.length/3-it,1)}function K(it,ft){let ht=it.length;for(;--ht>=0;){const Et=ht;let bt=ht-1;bt<0&&(bt=it.length-1);for(let Jt=0,B=h+m*2;Jt<B;Jt++){const Qt=U*Jt,zt=U*(Jt+1),Xt=ft+Et+Qt,xt=ft+bt+Qt,ue=ft+bt+zt,P=ft+Et+zt;Ut(Xt,xt,ue,P)}}}function yt(it,ft,ht){l.push(it),l.push(ft),l.push(ht)}function Dt(it,ft,ht){gt(it),gt(ft),gt(ht);const Et=s.length/3,bt=M.generateTopUV(n,s,Et-3,Et-2,Et-1);Pt(bt[0]),Pt(bt[1]),Pt(bt[2])}function Ut(it,ft,ht,Et){gt(it),gt(ft),gt(Et),gt(ft),gt(ht),gt(Et);const bt=s.length/3,Jt=M.generateSideWallUV(n,s,bt-6,bt-3,bt-2,bt-1);Pt(Jt[0]),Pt(Jt[1]),Pt(Jt[3]),Pt(Jt[1]),Pt(Jt[2]),Pt(Jt[3])}function gt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function Pt(it){o.push(it.x),o.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rm(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ma[s.type]().fromJSON(s)),new Ta(n,t.options)}}const Cm={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new At(o,r),new At(a,l),new At(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],x=t[s*3+2],S=t[o*3],m=t[o*3+1],f=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new At(r,1-l),new At(c,1-u),new At(d,1-x),new At(S,1-f)]:[new At(a,1-l),new At(h,1-u),new At(p,1-x),new At(m,1-f)]}};function Rm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zi extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],x=[],S=[],m=[];for(let f=0;f<h;f++){const M=f*d-r;for(let b=0;b<c;b++){const _=b*u-o;x.push(_,-M,0),S.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const b=M+c*f,_=M+c*(f+1),R=M+1+c*(f+1),v=M+1+c*f;p.push(b,_,v),p.push(_,R,v)}this.setIndex(p),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.widthSegments,t.heightSegments)}}class dh extends He{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new N,x=new At;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const f=o+m/n*r;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let S=0;S<s;S++){const m=S*(n+1);for(let f=0;f<n;f++){const M=f+m,b=M,_=M+n+1,R=M+n+2,v=M+1;a.push(b,_,v),a.push(_,R,v)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Un extends He{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new N,d=new N,p=[],x=[],S=[],m=[];for(let f=0;f<=n;f++){const M=[],b=f/n;let _=0;f===0&&r===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const v=R/e;u.x=-t*Math.cos(s+v*o)*Math.sin(r+b*a),u.y=t*Math.cos(r+b*a),u.z=t*Math.sin(s+v*o)*Math.sin(r+b*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),m.push(v+_,1-b),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const b=h[f][M+1],_=h[f][M],R=h[f+1][M],v=h[f+1][M+1];(f!==0||r>0)&&p.push(b,_,v),(f!==n-1||l<Math.PI)&&p.push(_,R,v)}this.setIndex(p),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fr extends He{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new N,p=new N,x=new N;for(let S=0;S<=n;S++){const m=r+S/n*a;for(let f=0;f<=s;f++){const M=f/s*o;p.x=(t+e*Math.cos(m))*Math.cos(M),p.y=(t+e*Math.cos(m))*Math.sin(M),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),x.subVectors(p,d).normalize(),h.push(x.x,x.y,x.z),u.push(f/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const f=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,b=(s+1)*(S-1)+m,_=(s+1)*S+m;l.push(f,M,_),l.push(M,b,_)}this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class uh extends He{constructor(t=new Cf(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,l=new N,c=new At;let h=new N;const u=[],d=[],p=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2));function S(){for(let b=0;b<e;b++)m(b);m(o===!1?e:0),M(),f()}function m(b){h=t.getPointAt(b/e,h);const _=r.normals[b],R=r.binormals[b];for(let v=0;v<=s;v++){const E=v/s*Math.PI*2,g=Math.sin(E),y=-Math.cos(E);l.x=y*_.x+g*R.x,l.y=y*_.y+g*R.y,l.z=y*_.z+g*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let b=1;b<=e;b++)for(let _=1;_<=s;_++){const R=(s+1)*(b-1)+(_-1),v=(s+1)*b+(_-1),E=(s+1)*b+_,g=(s+1)*(b-1)+_;x.push(R,v,g),x.push(v,E,g)}}function M(){for(let b=0;b<=e;b++)for(let _=0;_<=s;_++)c.x=b/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new uh(new ma[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function xo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ad(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ad(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){const t={};for(let e=0;e<i.length;e++){const n=xo(i[e]);for(const s in n)t[s]=n[s]}return t}function Ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function If(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const km={clone:xo,merge:dn};var Fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xo(t.uniforms),this.uniformsGroups=Pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Im extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ei extends dr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Df extends dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dm extends dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nf extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Nm extends Nf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ml=new te,Td=new N,Cd=new N;class Um{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Td.setFromMatrixPosition(t.matrixWorld),e.position.copy(Td),Cd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cd),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===rr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ur=new N,Or=new qi,Zn=new N;class Uf extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ur,Or,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Or,Zn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Ur,Or,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Or,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new N,Rd=new At,Pd=new At;class yn extends Uf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Rd,Pd),e.subVectors(Pd,Rd)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(za*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ca extends Uf{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Om extends Um{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bm extends Nf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Om}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Zs=-90,Ks=1;class zm extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(Zs,Ks,t,e);s.layers=this.layers,this.add(s);const o=new yn(Zs,Ks,t,e);o.layers=this.layers,this.add(o);const r=new yn(Zs,Ks,t,e);r.layers=this.layers,this.add(r);const a=new yn(Zs,Ks,t,e);a.layers=this.layers,this.add(a);const l=new yn(Zs,Ks,t,e);l.layers=this.layers,this.add(l);const c=new yn(Zs,Ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Hm extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const kd=new te;class Vm{constructor(t,e,n=0,s=1/0){this.ray=new sh(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new nh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):pe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kd),this}intersectObject(t,e=!0,n=[]){return Ic(t,this,n,e),n.sort(Fd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Ic(t[s],this,n,e);return n.sort(Fd),n}}function Fd(i,t){return i.distance-t.distance}function Ic(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Ic(o[r],t,e,!0)}}const Th=class Th{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};Th.prototype.isMatrix2=!0;let Ld=Th;function Id(i,t,e,n){const s=Gm(n);switch(e){case mf:return i*t;case wa:return i*t/s.components*s.byteLength;case Zc:return i*t/s.components*s.byteLength;case Ss:return i*t*2/s.components*s.byteLength;case Kc:return i*t*2/s.components*s.byteLength;case gf:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case Jc:return i*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(i,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(i,8)*Math.max(t,8)/2;case ic:case sc:case rc:case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oc:case ca:case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wc:case Sc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ac:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ha:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gm(i){switch(i){case En:case df:return{byteLength:1,components:1};case sr:case uf:case wi:return{byteLength:2,components:1};case qc:case jc:return{byteLength:2,components:4};case ai:case Yc:case Dn:return{byteLength:4,components:1};case ff:case pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Of(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Wm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){const x=u[d],S=u[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,u[d]=S)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){const S=u[p];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ex=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Px=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Xm,alphahash_pars_fragment:$m,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:jm,alphatest_pars_fragment:Zm,aomap_fragment:Km,aomap_pars_fragment:Jm,batching_pars_vertex:Qm,batching_vertex:tg,begin_vertex:eg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:sg,bumpmap_pars_fragment:og,clipping_planes_fragment:rg,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:hg,color_pars_fragment:dg,color_pars_vertex:ug,color_vertex:fg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:xg,displacementmap_vertex:vg,emissivemap_fragment:_g,emissivemap_pars_fragment:yg,colorspace_fragment:bg,colorspace_pars_fragment:Mg,envmap_fragment:wg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:Eg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Ug,envmap_vertex:Tg,fog_vertex:Cg,fog_pars_vertex:Rg,fog_fragment:Pg,fog_pars_fragment:kg,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:Lg,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ng,lights_toon_fragment:Og,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Gg,lights_fragment_begin:Wg,lights_fragment_maps:Xg,lights_fragment_end:$g,lightprobes_pars_fragment:Yg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Kg,map_fragment:Jg,map_pars_fragment:Qg,map_particle_fragment:tx,map_particle_pars_fragment:ex,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:sx,morphcolor_vertex:ox,morphnormal_vertex:rx,morphtarget_pars_vertex:ax,morphtarget_vertex:lx,normal_fragment_begin:cx,normal_fragment_maps:hx,normal_pars_fragment:dx,normal_pars_vertex:ux,normal_vertex:fx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:vx,opaque_fragment:_x,packing:yx,premultiplied_alpha_fragment:bx,project_vertex:Mx,dithering_fragment:wx,dithering_pars_fragment:Sx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Px,skinbase_vertex:kx,skinning_pars_vertex:Fx,skinning_vertex:Lx,skinnormal_vertex:Ix,specularmap_fragment:Dx,specularmap_pars_fragment:Nx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Ox,transmission_fragment:Bx,transmission_pars_fragment:zx,uv_pars_fragment:Hx,uv_pars_vertex:Vx,uv_vertex:Gx,worldpos_vertex:Wx,background_vert:Xx,background_frag:$x,backgroundCube_vert:Yx,backgroundCube_frag:qx,cube_vert:jx,cube_frag:Zx,depth_vert:Kx,depth_frag:Jx,distance_vert:Qx,distance_frag:tv,equirect_vert:ev,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:sv,meshbasic_vert:ov,meshbasic_frag:rv,meshlambert_vert:av,meshlambert_frag:lv,meshmatcap_vert:cv,meshmatcap_frag:hv,meshnormal_vert:dv,meshnormal_frag:uv,meshphong_vert:fv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:xv,meshtoon_frag:vv,points_vert:_v,points_frag:yv,shadow_vert:bv,shadow_frag:Mv,sprite_vert:wv,sprite_frag:Sv},Ft={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},si={basic:{uniforms:dn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:dn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:dn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:dn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:dn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ie(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:dn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:dn([Ft.points,Ft.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:dn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:dn([Ft.common,Ft.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:dn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:dn([Ft.sprite,Ft.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:dn([Ft.common,Ft.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:dn([Ft.lights,Ft.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};si.physical={uniforms:dn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Br={r:0,b:0,g:0},Ev=new te,Bf=new oe;Bf.set(-1,0,0,0,1,0,0,0,1);function Av(i,t,e,n,s,o){const r=new ie(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function p(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const _=M.backgroundBlurriness>0;b=t.get(b,_)}return b}function x(M){let b=!1;const _=p(M);_===null?m(r,a):_&&_.isColor&&(m(_,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,b){const _=p(b);_&&(_.isCubeTexture||_.mapping===Ma)?(c===void 0&&(c=new Me(new pn(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:xo(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bf),c.material.toneMapped=me.getTransfer(_.colorSpace)!==Se,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Me(new Zi(2,2),new mn({name:"BackgroundMaterial",uniforms:xo(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=me.getTransfer(_.colorSpace)!==Se,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,b){M.getRGB(Br,If(i)),e.buffers.color.setClear(Br.r,Br.g,Br.b,b,o)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(M,b=1){r.set(M),a=b,m(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(r,a)},render:x,addToRenderList:S,dispose:f}}function Tv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(A,k,F,O,L){let V=!1;const U=u(A,O,F,k);o!==U&&(o=U,c(o.object)),V=p(A,O,F,L),V&&x(A,O,F,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,_(A,k,F,O),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function u(A,k,F,O){const L=O.wireframe===!0;let V=n[k.id];V===void 0&&(V={},n[k.id]=V);const U=A.isInstancedMesh===!0?A.id:0;let Z=V[U];Z===void 0&&(Z={},V[U]=Z);let et=Z[F.id];et===void 0&&(et={},Z[F.id]=et);let ut=et[L];return ut===void 0&&(ut=d(l()),et[L]=ut),ut}function d(A){const k=[],F=[],O=[];for(let L=0;L<e;L++)k[L]=0,F[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:O,object:A,attributes:{},index:null}}function p(A,k,F,O){const L=o.attributes,V=k.attributes;let U=0;const Z=F.getAttributes();for(const et in Z)if(Z[et].location>=0){const wt=L[et];let It=V[et];if(It===void 0&&(et==="instanceMatrix"&&A.instanceMatrix&&(It=A.instanceMatrix),et==="instanceColor"&&A.instanceColor&&(It=A.instanceColor)),wt===void 0||wt.attribute!==It||It&&wt.data!==It.data)return!0;U++}return o.attributesNum!==U||o.index!==O}function x(A,k,F,O){const L={},V=k.attributes;let U=0;const Z=F.getAttributes();for(const et in Z)if(Z[et].location>=0){let wt=V[et];wt===void 0&&(et==="instanceMatrix"&&A.instanceMatrix&&(wt=A.instanceMatrix),et==="instanceColor"&&A.instanceColor&&(wt=A.instanceColor));const It={};It.attribute=wt,wt&&wt.data&&(It.data=wt.data),L[et]=It,U++}o.attributes=L,o.attributesNum=U,o.index=O}function S(){const A=o.newAttributes;for(let k=0,F=A.length;k<F;k++)A[k]=0}function m(A){f(A,0)}function f(A,k){const F=o.newAttributes,O=o.enabledAttributes,L=o.attributeDivisors;F[A]=1,O[A]===0&&(i.enableVertexAttribArray(A),O[A]=1),L[A]!==k&&(i.vertexAttribDivisor(A,k),L[A]=k)}function M(){const A=o.newAttributes,k=o.enabledAttributes;for(let F=0,O=k.length;F<O;F++)k[F]!==A[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function b(A,k,F,O,L,V,U){U===!0?i.vertexAttribIPointer(A,k,F,L,V):i.vertexAttribPointer(A,k,F,O,L,V)}function _(A,k,F,O){S();const L=O.attributes,V=F.getAttributes(),U=k.defaultAttributeValues;for(const Z in V){const et=V[Z];if(et.location>=0){let ut=L[Z];if(ut===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(ut=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(ut=A.instanceColor)),ut!==void 0){const wt=ut.normalized,It=ut.itemSize,qt=t.get(ut);if(qt===void 0)continue;const mt=qt.buffer,St=qt.type,X=qt.bytesPerElement,ot=St===i.INT||St===i.UNSIGNED_INT||ut.gpuType===Yc;if(ut.isInterleavedBufferAttribute){const K=ut.data,yt=K.stride,Dt=ut.offset;if(K.isInstancedInterleavedBuffer){for(let Ut=0;Ut<et.locationSize;Ut++)f(et.location+Ut,K.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ut=0;Ut<et.locationSize;Ut++)m(et.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Ut=0;Ut<et.locationSize;Ut++)b(et.location+Ut,It/et.locationSize,St,wt,yt*X,(Dt+It/et.locationSize*Ut)*X,ot)}else{if(ut.isInstancedBufferAttribute){for(let K=0;K<et.locationSize;K++)f(et.location+K,ut.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let K=0;K<et.locationSize;K++)m(et.location+K);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let K=0;K<et.locationSize;K++)b(et.location+K,It/et.locationSize,St,wt,It*X,It/et.locationSize*K*X,ot)}}else if(U!==void 0){const wt=U[Z];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(et.location,wt);break;case 3:i.vertexAttrib3fv(et.location,wt);break;case 4:i.vertexAttrib4fv(et.location,wt);break;default:i.vertexAttrib1fv(et.location,wt)}}}}M()}function R(){y();for(const A in n){const k=n[A];for(const F in k){const O=k[F];for(const L in O){const V=O[L];for(const U in V)h(V[U].object),delete V[U];delete O[L]}}delete n[A]}}function v(A){if(n[A.id]===void 0)return;const k=n[A.id];for(const F in k){const O=k[F];for(const L in O){const V=O[L];for(const U in V)h(V[U].object),delete V[U];delete O[L]}}delete n[A.id]}function E(A){for(const k in n){const F=n[k];for(const O in F){const L=F[O];if(L[A.id]===void 0)continue;const V=L[A.id];for(const U in V)h(V[U].object),delete V[U];delete L[A.id]}}}function g(A){for(const k in n){const F=n[k],O=A.isInstancedMesh===!0?A.id:0,L=F[O];if(L!==void 0){for(const V in L){const U=L[V];for(const Z in U)h(U[Z].object),delete U[Z];delete L[V]}delete F[O],Object.keys(F).length===0&&delete n[k]}}}function y(){T(),r=!0,o!==s&&(o=s,c(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:y,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:v,releaseStatesOfObject:g,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function Cv(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function Rv(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const g=E===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==En&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Dn&&!g)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,maxSamples:R,samples:v}}function Pv(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new ds,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const x=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||o&&!m)o?h(null):c();else{const M=o?0:n,b=M*4;let _=f.clippingState||null;l.value=_,_=h(x,d,b,p);for(let R=0;R!==b;++R)_[R]=e[R];f.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,x){const S=u!==null?u.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const f=p+S*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,_=p;b!==S;++b,_+=4)r.copy(u[b]).applyMatrix4(M,a),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Gi=4,Dd=[.125,.215,.35,.446,.526,.582],ps=20,kv=256,Uo=new Ca,Nd=new ie;let gl=null,xl=0,vl=0,_l=!1;const Fv=new N;class Ud{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=Fv}=o;gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,xl,vl),this._renderer.xr.enabled=_l,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===po?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:wi,format:Nn,colorSpace:da,depthBuffer:!1},s=Od(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lv(o)),this._blurMaterial=Dv(o,t,e),this._ggxMaterial=Iv(o,t,e)}return s}_compileMaterial(t){const e=new Me(new He,t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,s,o){const l=new yn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Nd),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new pn,new Yn({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,f=!0):(m.color.copy(Nd),f=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[b],o.y,o.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[b],o.z)):(l.up.set(0,c[b],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[b]));const R=this._cubeSize;Js(s,_*R,b>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(S,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ws||t.mapping===po;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-Gi?n-x+Gi:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,Js(o,m,f,3*S,2*S),s.setRenderTarget(o),s.render(a,Uo),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=x-n,Js(t,m,f,3*S,2*S),s.setRenderTarget(t),s.render(a,Uo)}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&pe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ps-1),S=o/x,m=isFinite(o)?1+Math.floor(h*S):ps;m>ps&&jt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);const f=[];let M=0;for(let E=0;E<ps;++E){const g=E/S,y=Math.exp(-g*g/2);f.push(y),E===0?M+=y:E<m&&(M+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=x,d.mipInt.value=b-n;const _=this._sizeLods[s],R=3*_*(s>b-Gi?s-b+Gi:0),v=4*(this._cubeSize-_);Js(e,R,v,3*_,2*_),l.setRenderTarget(e),l.render(u,Uo)}}function Lv(i){const t=[],e=[],n=[];let s=i;const o=i-Gi+1+Dd.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let l=1/a;r>i-Gi?l=Dd[r-i+Gi-1]:r===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,S=3,m=2,f=1,M=new Float32Array(S*x*p),b=new Float32Array(m*x*p),_=new Float32Array(f*x*p);for(let v=0;v<p;v++){const E=v%3*2/3-1,g=v>2?0:-1,y=[E,g,0,E+2/3,g,0,E+2/3,g+1,0,E,g,0,E+2/3,g+1,0,E,g+1,0];M.set(y,S*x*v),b.set(d,m*x*v);const T=[v,v,v,v,v,v];_.set(T,f*x*v)}const R=new He;R.setAttribute("position",new _e(M,S)),R.setAttribute("uv",new _e(b,m)),R.setAttribute("faceIndex",new _e(_,f)),n.push(new Me(R,null)),s>Gi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Od(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Iv(i,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Dv(i,t,e){const n=new Float32Array(ps),s=new N(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Bd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function zd(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zf extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pn(5,5,5),o=new mn({name:"CubemapFromEquirect",uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:_i});o.uniforms.tEquirect.value=e;const r=new Me(s,o),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=Je),new zm(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function Nv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?r(d):o(d)}function o(d){if(d&&d.isTexture){const p=d.mapping;if(p===Ua||p===Oa)if(t.has(d)){const x=t.get(d).texture;return a(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const S=new zf(x.height);return S.fromEquirectangularTexture(i,d),t.set(d,S),d.addEventListener("dispose",c),a(S.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const p=d.mapping,x=p===Ua||p===Oa,S=p===ws||p===po;if(x||S){let m=e.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Ud(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return x&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Ud(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===Ua?d.mapping=ws:p===Oa&&(d.mapping=po),d}function l(d){let p=0;const x=6;for(let S=0;S<x;S++)d[S]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Uv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Pc("WebGLRenderer: "+n+" extension not supported."),s}}}function Ov(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,x=u.attributes.position;let S=0;if(x===void 0)return;if(p!==null){const M=p.array;S=p.version;for(let b=0,_=M.length;b<_;b+=3){const R=M[b+0],v=M[b+1],E=M[b+2];d.push(R,v,v,E,E,R)}}else{const M=x.array;S=x.version;for(let b=0,_=M.length/3-1;b<_;b+=3){const R=b+0,v=b+1,E=b+2;d.push(R,v,v,E,E,R)}}const m=new(x.count>=65535?yf:ih)(d,1);m.version=S;const f=o.get(u);f&&t.remove(f),o.set(u,m)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Bv(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,d){i.drawElements(n,d,o,u*r),e.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,o,u*r,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,u,0,p);let S=0;for(let m=0;m<p;m++)S+=d[m];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:pe("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hv(i,t,e){const n=new WeakMap,s=new Ee;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let T=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;x===!0&&(_=1),S===!0&&(_=2),m===!0&&(_=3);let R=a.attributes.position.count*_,v=1;R>t.maxTextureSize&&(v=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*v*4*u),g=new vf(E,R,v,u);g.type=Dn,g.needsUpdate=!0;const y=_*4;for(let A=0;A<u;A++){const k=f[A],F=M[A],O=b[A],L=R*v*4*A;for(let V=0;V<k.count;V++){const U=V*y;x===!0&&(s.fromBufferAttribute(k,V),E[L+U+0]=s.x,E[L+U+1]=s.y,E[L+U+2]=s.z,E[L+U+3]=0),S===!0&&(s.fromBufferAttribute(F,V),E[L+U+4]=s.x,E[L+U+5]=s.y,E[L+U+6]=s.z,E[L+U+7]=0),m===!0&&(s.fromBufferAttribute(O,V),E[L+U+8]=s.x,E[L+U+9]=s.y,E[L+U+10]=s.z,E[L+U+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:g,size:new At(R,v)},n.set(a,d),a.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Vv(i,t,e,n,s){let o=new WeakMap;function r(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(o.get(d)!==h&&(t.update(d),o.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;o.get(p)!==h&&(p.update(),o.set(p,h))}return d}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const Gv={[nf]:"LINEAR_TONE_MAPPING",[sf]:"REINHARD_TONE_MAPPING",[of]:"CINEON_TONE_MAPPING",[rf]:"ACES_FILMIC_TONE_MAPPING",[lf]:"AGX_TONE_MAPPING",[cf]:"NEUTRAL_TONE_MAPPING",[af]:"CUSTOM_TONE_MAPPING"};function Wv(i,t,e,n,s){const o=new $n(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new mo(t,e):void 0}),r=new $n(t,e,{type:wi,depthBuffer:!1,stencilBuffer:!1}),a=new He;a.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ye([0,2,0,0,2,0],2));const l=new Im({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Me(a,l),h=new Ca(-1,1,1,-1,0,1);let u=null,d=null,p=!1,x,S=null,m=[],f=!1;this.setSize=function(M,b){o.setSize(M,b),r.setSize(M,b);for(let _=0;_<m.length;_++){const R=m[_];R.setSize&&R.setSize(M,b)}},this.setEffects=function(M){m=M,f=m.length>0&&m[0].isRenderPass===!0;const b=o.width,_=o.height;for(let R=0;R<m.length;R++){const v=m[R];v.setSize&&v.setSize(b,_)}},this.begin=function(M,b){if(p||M.toneMapping===Xn&&m.length===0)return!1;if(S=b,b!==null){const _=b.width,R=b.height;(o.width!==_||o.height!==R)&&this.setSize(_,R)}return f===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Xn,!0},this.hasRenderPass=function(){return f},this.end=function(M,b){M.toneMapping=x,p=!0;let _=o,R=r;for(let v=0;v<m.length;v++){const E=m[v];if(E.enabled!==!1&&(E.render(M,R,_,b),E.needsSwap!==!1)){const g=_;_=R,R=g}}if(u!==M.outputColorSpace||d!==M.toneMapping){u=M.outputColorSpace,d=M.toneMapping,l.defines={},me.getTransfer(u)===Se&&(l.defines.SRGB_TRANSFER="");const v=Gv[d];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(S),M.render(c,h),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),r.dispose(),a.dispose(),l.dispose()}}const Hf=new cn,Dc=new mo(1,1),Vf=new vf,Gf=new L0,Wf=new Mf,Hd=[],Vd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Mo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Hd[s];if(o===void 0&&(o=new Float32Array(s),Hd[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pa(i,t){let e=Vd[t];e===void 0&&(e=new Int32Array(t),Vd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function jv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),We(e,n)}}function Zv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),We(e,n)}}function Kv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),We(e,n)}}function Jv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function n_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function i_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function s_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function o_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function r_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Dc.compareFunction=e.isReversedDepthBuffer()?th:Qc,o=Dc):o=Hf,e.setTexture2D(t||o,s)}function a_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gf,s)}function l_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wf,s)}function c_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vf,s)}function h_(i){switch(i){case 5126:return Xv;case 35664:return $v;case 35665:return Yv;case 35666:return qv;case 35674:return jv;case 35675:return Zv;case 35676:return Kv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function d_(i,t){i.uniform1fv(this.addr,t)}function u_(i,t){const e=Mo(t,this.size,2);i.uniform2fv(this.addr,e)}function f_(i,t){const e=Mo(t,this.size,3);i.uniform3fv(this.addr,e)}function p_(i,t){const e=Mo(t,this.size,4);i.uniform4fv(this.addr,e)}function m_(i,t){const e=Mo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function g_(i,t){const e=Mo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x_(i,t){const e=Mo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function v_(i,t){i.uniform1iv(this.addr,t)}function __(i,t){i.uniform2iv(this.addr,t)}function y_(i,t){i.uniform3iv(this.addr,t)}function b_(i,t){i.uniform4iv(this.addr,t)}function M_(i,t){i.uniform1uiv(this.addr,t)}function w_(i,t){i.uniform2uiv(this.addr,t)}function S_(i,t){i.uniform3uiv(this.addr,t)}function E_(i,t){i.uniform4uiv(this.addr,t)}function A_(i,t,e){const n=this.cache,s=t.length,o=Pa(e,s);Ge(n,o)||(i.uniform1iv(this.addr,o),We(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=Dc:r=Hf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function T_(i,t,e){const n=this.cache,s=t.length,o=Pa(e,s);Ge(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Gf,o[r])}function C_(i,t,e){const n=this.cache,s=t.length,o=Pa(e,s);Ge(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Wf,o[r])}function R_(i,t,e){const n=this.cache,s=t.length,o=Pa(e,s);Ge(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Vf,o[r])}function P_(i){switch(i){case 5126:return d_;case 35664:return u_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return v_;case 35667:case 35671:return __;case 35668:case 35672:return y_;case 35669:case 35673:return b_;case 5125:return M_;case 36294:return w_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return R_}}class k_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h_(e.type)}}class F_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}}class L_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const yl=/(\w+)(\])?(\[|\.)?/g;function $d(i,t){i.seq.push(t),i.map[t.id]=t}function I_(i,t,e){const n=i.name,s=n.length;for(yl.lastIndex=0;;){const o=yl.exec(n),r=yl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){$d(e,c===void 0?new k_(a,i,t):new F_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new L_(a),$d(e,u)),e=u}}}class aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);I_(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Yd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const D_=37297;let N_=0;function U_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const qd=new oe;function O_(i){me._getMatrix(qd,me.workingColorSpace,i);const t=`mat3( ${qd.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case ua:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+U_(i.getShaderSource(t),a)}else return o}function B_(i,t){const e=O_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const z_={[nf]:"Linear",[sf]:"Reinhard",[of]:"Cineon",[rf]:"ACESFilmic",[lf]:"AgX",[cf]:"Neutral",[af]:"Custom"};function H_(i,t){const e=z_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new N;function V_(){me.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function W_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Zo(i){return i!==""}function Zd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace($_,q_)}const Y_=new Map;function q_(i,t){let e=ce[t];if(e===void 0){const n=Y_.get(t);if(n!==void 0)e=ce[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(i){return i.replace(j_,Z_)}function Z_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Qd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const K_={[na]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function J_(i){return K_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q_={[ws]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function ty(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Q_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ey={[po]:"ENVMAP_MODE_REFRACTION"};function ny(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ey[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iy={[ef]:"ENVMAP_BLENDING_MULTIPLY",[h0]:"ENVMAP_BLENDING_MIX",[d0]:"ENVMAP_BLENDING_ADD"};function sy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iy[i.combine]||"ENVMAP_BLENDING_NONE"}function oy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ry(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=J_(e),c=ty(e),h=ny(e),u=sy(e),d=oy(e),p=G_(e),x=W_(o),S=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Zo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Zo).join(`
`),f.length>0&&(f+=`
`)):(m=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),f=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Xn?H_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,B_("linearToOutputTexel",e.outputColorSpace),V_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),r=Nc(r),r=Zd(r,e),r=Kd(r,e),a=Nc(a),a=Zd(a,e),a=Kd(a,e),r=Jd(r),a=Jd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+m+r,_=M+f+a,R=Yd(s,s.VERTEX_SHADER,b),v=Yd(s,s.FRAGMENT_SHADER,_);s.attachShader(S,R),s.attachShader(S,v),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function E(A){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(S)||"",F=s.getShaderInfoLog(R)||"",O=s.getShaderInfoLog(v)||"",L=k.trim(),V=F.trim(),U=O.trim();let Z=!0,et=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,R,v);else{const ut=jd(s,R,"vertex"),wt=jd(s,v,"fragment");pe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+ut+`
`+wt)}else L!==""?jt("WebGLProgram: Program Info Log:",L):(V===""||U==="")&&(et=!1);et&&(A.diagnostics={runnable:Z,programLog:L,vertexShader:{log:V,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(R),s.deleteShader(v),g=new aa(s,S),y=X_(s,S)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(S,D_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N_++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=v,this}let ay=0;class ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cy(t),e.set(t,n)),n}}class cy{constructor(t){this.id=ay++,this.code=t,this.usedTimes=0}}function hy(i){return i===Ss||i===ca||i===ha}function dy(i,t,e,n,s,o){const r=new nh,a=new ly,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,y,T,A,k,F){const O=A.fog,L=k.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,U=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Z=t.get(g.envMap||V,U),et=Z&&Z.mapping===Ma?Z.image.height:null,ut=p[g.type];g.precision!==null&&(d=n.getMaxPrecision(g.precision),d!==g.precision&&jt("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const wt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,It=wt!==void 0?wt.length:0;let qt=0;L.morphAttributes.position!==void 0&&(qt=1),L.morphAttributes.normal!==void 0&&(qt=2),L.morphAttributes.color!==void 0&&(qt=3);let mt,St,X,ot;if(ut){const ne=si[ut];mt=ne.vertexShader,St=ne.fragmentShader}else mt=g.vertexShader,St=g.fragmentShader,a.update(g),X=a.getVertexShaderID(g),ot=a.getFragmentShaderID(g);const K=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,Ut=k.isBatchedMesh===!0,gt=!!g.map,Pt=!!g.matcap,it=!!Z,ft=!!g.aoMap,ht=!!g.lightMap,Et=!!g.bumpMap,bt=!!g.normalMap,Jt=!!g.displacementMap,B=!!g.emissiveMap,Qt=!!g.metalnessMap,zt=!!g.roughnessMap,Xt=g.anisotropy>0,xt=g.clearcoat>0,ue=g.dispersion>0,P=g.iridescence>0,w=g.sheen>0,W=g.transmission>0,at=Xt&&!!g.anisotropyMap,dt=xt&&!!g.clearcoatMap,vt=xt&&!!g.clearcoatNormalMap,Mt=xt&&!!g.clearcoatRoughnessMap,J=P&&!!g.iridescenceMap,D=P&&!!g.iridescenceThicknessMap,rt=w&&!!g.sheenColorMap,lt=w&&!!g.sheenRoughnessMap,Q=!!g.specularMap,st=!!g.specularColorMap,Ct=!!g.specularIntensityMap,Vt=W&&!!g.transmissionMap,Kt=W&&!!g.thicknessMap,z=!!g.gradientMap,pt=!!g.alphaMap,tt=g.alphaTest>0,$=!!g.alphaHash,nt=!!g.extensions;let ct=Xn;g.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ct=i.toneMapping);const kt={shaderID:ut,shaderType:g.type,shaderName:g.name,vertexShader:mt,fragmentShader:St,defines:g.defines,customVertexShaderID:X,customFragmentShaderID:ot,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:gt,matcap:Pt,envMap:it,envMapMode:it&&Z.mapping,envMapCubeUVHeight:et,aoMap:ft,lightMap:ht,bumpMap:Et,normalMap:bt,displacementMap:Jt,emissiveMap:B,normalMapObjectSpace:bt&&g.normalMapType===g0,normalMapTangentSpace:bt&&g.normalMapType===Rc,packedNormalMap:bt&&g.normalMapType===Rc&&hy(g.normalMap.format),metalnessMap:Qt,roughnessMap:zt,anisotropy:Xt,anisotropyMap:at,clearcoat:xt,clearcoatMap:dt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Mt,dispersion:ue,iridescence:P,iridescenceMap:J,iridescenceThicknessMap:D,sheen:w,sheenColorMap:rt,sheenRoughnessMap:lt,specularMap:Q,specularColorMap:st,specularIntensityMap:Ct,transmission:W,transmissionMap:Vt,thicknessMap:Kt,gradientMap:z,opaque:g.transparent===!1&&g.blending===ro&&g.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:$,combine:g.combine,mapUv:gt&&x(g.map.channel),aoMapUv:ft&&x(g.aoMap.channel),lightMapUv:ht&&x(g.lightMap.channel),bumpMapUv:Et&&x(g.bumpMap.channel),normalMapUv:bt&&x(g.normalMap.channel),displacementMapUv:Jt&&x(g.displacementMap.channel),emissiveMapUv:B&&x(g.emissiveMap.channel),metalnessMapUv:Qt&&x(g.metalnessMap.channel),roughnessMapUv:zt&&x(g.roughnessMap.channel),anisotropyMapUv:at&&x(g.anisotropyMap.channel),clearcoatMapUv:dt&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:vt&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:D&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:lt&&x(g.sheenRoughnessMap.channel),specularMapUv:Q&&x(g.specularMap.channel),specularColorMapUv:st&&x(g.specularColorMap.channel),specularIntensityMapUv:Ct&&x(g.specularIntensityMap.channel),transmissionMapUv:Vt&&x(g.transmissionMap.channel),thicknessMapUv:Kt&&x(g.thicknessMap.channel),alphaMapUv:pt&&x(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(bt||Xt),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(gt||pt),fog:!!O,useFog:g.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&bt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:qt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:gt&&g.map.isVideoTexture===!0&&me.getTransfer(g.map.colorSpace)===Se,decodeVideoTextureEmissive:B&&g.emissiveMap.isVideoTexture===!0&&me.getTransfer(g.emissiveMap.colorSpace)===Se,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Gn,flipSided:g.side===Qe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:nt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&g.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function m(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const T in g.defines)y.push(T),y.push(g.defines[T]);return g.isRawShaderMaterial===!1&&(f(y,g),M(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function f(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function M(g,y){r.disableAll(),y.instancing&&r.enable(0),y.instancingColor&&r.enable(1),y.instancingMorph&&r.enable(2),y.matcap&&r.enable(3),y.envMap&&r.enable(4),y.normalMapObjectSpace&&r.enable(5),y.normalMapTangentSpace&&r.enable(6),y.clearcoat&&r.enable(7),y.iridescence&&r.enable(8),y.alphaTest&&r.enable(9),y.vertexColors&&r.enable(10),y.vertexAlphas&&r.enable(11),y.vertexUv1s&&r.enable(12),y.vertexUv2s&&r.enable(13),y.vertexUv3s&&r.enable(14),y.vertexTangents&&r.enable(15),y.anisotropy&&r.enable(16),y.alphaHash&&r.enable(17),y.batching&&r.enable(18),y.dispersion&&r.enable(19),y.batchingColor&&r.enable(20),y.gradientMap&&r.enable(21),y.packedNormalMap&&r.enable(22),y.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),y.numLightProbeGrids>0&&r.enable(22),g.push(r.mask)}function b(g){const y=p[g.type];let T;if(y){const A=si[y];T=km.clone(A.uniforms)}else T=g.uniforms;return T}function _(g,y){let T=h.get(y);return T!==void 0?++T.usedTimes:(T=new ry(i,y,g,s),c.push(T),h.set(y,T)),T}function R(g){if(--g.usedTimes===0){const y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function v(g){a.remove(g)}function E(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:R,releaseShaderCache:v,programs:c,dispose:E}}function uy(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function fy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eu(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,x,S,m,f){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:p,material:x,materialVariant:r(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:f},i[t]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=x,M.materialVariant=r(d),M.groupOrder=S,M.renderOrder=d.renderOrder,M.z=m,M.group=f),t++,M}function l(d,p,x,S,m,f){const M=a(d,p,x,S,m,f);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):e.push(M)}function c(d,p,x,S,m,f){const M=a(d,p,x,S,m,f);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,p){e.length>1&&e.sort(d||fy),n.length>1&&n.sort(p||tu),s.length>1&&s.sort(p||tu)}function u(){for(let d=t,p=i.length;d<p;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:u,sort:h}}function py(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new eu,i.set(n,[r])):s>=o.length?(r=new eu,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function my(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ie};break;case"SpotLight":e={position:new N,direction:new N,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function gy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xy=0;function vy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _y(i){const t=new my,e=gy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,o=new te,r=new te;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,x=0,S=0,m=0,f=0,M=0,b=0,_=0,R=0,v=0,E=0;c.sort(vy);for(let y=0,T=c.length;y<T;y++){const A=c[y],k=A.color,F=A.intensity,O=A.distance;let L=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ss?L=A.shadow.map.texture:L=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],F);E++}else if(A.isDirectionalLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const U=A.shadow,Z=e.get(A);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=L,n.directionalShadowMatrix[p]=A.shadow.matrix,M++}n.directional[p]=V,p++}else if(A.isSpotLight){const V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=O,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[S]=V;const U=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,U.updateMatrices(A),A.castShadow&&v++),n.spotLightMatrix[S]=U.matrix,A.castShadow){const Z=e.get(A);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=L,_++}S++}else if(A.isRectAreaLight){const V=t.get(A);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=V,m++}else if(A.isPointLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const U=A.shadow,Z=e.get(A);Z.shadowIntensity=U.intensity,Z.shadowBias=U.bias,Z.shadowNormalBias=U.normalBias,Z.shadowRadius=U.radius,Z.shadowMapSize=U.mapSize,Z.shadowCameraNear=U.camera.near,Z.shadowCameraFar=U.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=L,n.pointShadowMatrix[x]=A.shadow.matrix,b++}n.point[x]=V,x++}else if(A.isHemisphereLight){const V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(F),V.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[f]=V,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const g=n.hash;(g.directionalLength!==p||g.pointLength!==x||g.spotLength!==S||g.rectAreaLength!==m||g.hemiLength!==f||g.numDirectionalShadows!==M||g.numPointShadows!==b||g.numSpotShadows!==_||g.numSpotMaps!==R||g.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+R-v,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=E,g.directionalLength=p,g.pointLength=x,g.spotLength=S,g.rectAreaLength=m,g.hemiLength=f,g.numDirectionalShadows=M,g.numPointShadows=b,g.numSpotShadows=_,g.numSpotMaps=R,g.numLightProbes=E,n.version=xy++)}function l(c,h){let u=0,d=0,p=0,x=0,S=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const b=c[f];if(b.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(b.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const _=n.rectArea[x];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),r.identity(),o.copy(b.matrixWorld),o.premultiply(m),r.extractRotation(o),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),x++}else if(b.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const _=n.hemi[S];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:n}}function nu(i){const t=new _y(i),e=[],n=[],s=[];function o(d){u.camera=d,e.length=0,n.length=0,s.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function yy(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new nu(i),t.set(s,[a])):o>=r.length?(a=new nu(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const by=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,My=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Sy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],iu=new te,Oo=new N,bl=new N;function Ey(i,t,e){let n=new rh;const s=new At,o=new At,r=new Ee,a=new Df,l=new Dm,c={},h=e.maxTextureSize,u={[$i]:Qe,[Qe]:$i,[Gn]:Gn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:by,fragmentShader:My}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new He;x.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Me(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let f=this.type;this.render=function(v,E,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===tf&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=na);const y=i.getRenderTarget(),T=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),k=i.state;k.setBlending(_i),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=f!==this.type;F&&E.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=v.length;O<L;O++){const V=v[O],U=V.shadow;if(U===void 0){jt("WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Z=U.getFrameExtents();s.multiply(Z),o.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/Z.x),s.x=o.x*Z.x,U.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/Z.y),s.y=o.y*Z.y,U.mapSize.y=o.y));const et=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=et,U.map===null||F===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===qo){if(V.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new $n(s.x,s.y,{format:Ss,type:wi,minFilter:Je,magFilter:Je,generateMipmaps:!1}),U.map.texture.name=V.name+".shadowMap",U.map.depthTexture=new mo(s.x,s.y,Dn),U.map.depthTexture.name=V.name+".shadowMapDepth",U.map.depthTexture.format=Si,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ye,U.map.depthTexture.magFilter=Ye}else V.isPointLight?(U.map=new zf(s.x),U.map.depthTexture=new J0(s.x,ai)):(U.map=new $n(s.x,s.y),U.map.depthTexture=new mo(s.x,s.y,ai)),U.map.depthTexture.name=V.name+".shadowMap",U.map.depthTexture.format=Si,this.type===na?(U.map.depthTexture.compareFunction=et?th:Qc,U.map.depthTexture.minFilter=Je,U.map.depthTexture.magFilter=Je):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ye,U.map.depthTexture.magFilter=Ye);U.camera.updateProjectionMatrix()}const ut=U.map.isWebGLCubeRenderTarget?6:1;for(let wt=0;wt<ut;wt++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,wt),i.clear();else{wt===0&&(i.setRenderTarget(U.map),i.clear());const It=U.getViewport(wt);r.set(o.x*It.x,o.y*It.y,o.x*It.z,o.y*It.w),k.viewport(r)}if(V.isPointLight){const It=U.camera,qt=U.matrix,mt=V.distance||It.far;mt!==It.far&&(It.far=mt,It.updateProjectionMatrix()),Oo.setFromMatrixPosition(V.matrixWorld),It.position.copy(Oo),bl.copy(It.position),bl.add(wy[wt]),It.up.copy(Sy[wt]),It.lookAt(bl),It.updateMatrixWorld(),qt.makeTranslation(-Oo.x,-Oo.y,-Oo.z),iu.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),U._frustum.setFromProjectionMatrix(iu,It.coordinateSystem,It.reversedDepth)}else U.updateMatrices(V);n=U.getFrustum(),_(E,g,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===qo&&M(U,g),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,T,A)};function M(v,E){const g=t.update(S);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new $n(s.x,s.y,{format:Ss,type:wi})),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,g,d,S,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,g,p,S,null)}function b(v,E,g,y){let T=null;const A=g.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(A!==void 0)T=A;else if(T=g.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const k=T.uuid,F=E.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let L=O[F];L===void 0&&(L=T.clone(),O[F]=L,E.addEventListener("dispose",R)),T=L}if(T.visible=E.visible,T.wireframe=E.wireframe,y===qo?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,g.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=i.properties.get(T);k.light=g}return T}function _(v,E,g,y,T){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&T===qo)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,v.matrixWorld);const F=t.update(v),O=v.material;if(Array.isArray(O)){const L=F.groups;for(let V=0,U=L.length;V<U;V++){const Z=L[V],et=O[Z.materialIndex];if(et&&et.visible){const ut=b(v,et,y,T);v.onBeforeShadow(i,v,E,g,F,ut,Z),i.renderBufferDirect(g,null,F,ut,v,Z),v.onAfterShadow(i,v,E,g,F,ut,Z)}}}else if(O.visible){const L=b(v,O,y,T);v.onBeforeShadow(i,v,E,g,F,L,null),i.renderBufferDirect(g,null,F,L,v,null),v.onAfterShadow(i,v,E,g,F,L,null)}}const k=v.children;for(let F=0,O=k.length;F<O;F++)_(k[F],E,g,y,T)}function R(v){v.target.removeEventListener("dispose",R);for(const g in c){const y=c[g],T=v.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Ay(i,t){function e(){let z=!1;const pt=new Ee;let tt=null;const $=new Ee(0,0,0,0);return{setMask:function(nt){tt!==nt&&!z&&(i.colorMask(nt,nt,nt,nt),tt=nt)},setLocked:function(nt){z=nt},setClear:function(nt,ct,kt,ne,ke){ke===!0&&(nt*=ne,ct*=ne,kt*=ne),pt.set(nt,ct,kt,ne),$.equals(pt)===!1&&(i.clearColor(nt,ct,kt,ne),$.copy(pt))},reset:function(){z=!1,tt=null,$.set(-1,0,0,0)}}}function n(){let z=!1,pt=!1,tt=null,$=null,nt=null;return{setReversed:function(ct){if(pt!==ct){const kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),pt=ct;const ne=nt;nt=null,this.setClear(ne)}},getReversed:function(){return pt},setTest:function(ct){ct?K(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(ct){tt!==ct&&!z&&(i.depthMask(ct),tt=ct)},setFunc:function(ct){if(pt&&(ct=A0[ct]),$!==ct){switch(ct){case Wl:i.depthFunc(i.NEVER);break;case Xl:i.depthFunc(i.ALWAYS);break;case $l:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case Yl:i.depthFunc(i.EQUAL);break;case ql:i.depthFunc(i.GEQUAL);break;case jl:i.depthFunc(i.GREATER);break;case Zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){z=ct},setClear:function(ct){nt!==ct&&(nt=ct,pt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){z=!1,tt=null,$=null,nt=null,pt=!1}}}function s(){let z=!1,pt=null,tt=null,$=null,nt=null,ct=null,kt=null,ne=null,ke=null;return{setTest:function(be){z||(be?K(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(be){pt!==be&&!z&&(i.stencilMask(be),pt=be)},setFunc:function(be,Xe,gn){(tt!==be||$!==Xe||nt!==gn)&&(i.stencilFunc(be,Xe,gn),tt=be,$=Xe,nt=gn)},setOp:function(be,Xe,gn){(ct!==be||kt!==Xe||ne!==gn)&&(i.stencilOp(be,Xe,gn),ct=be,kt=Xe,ne=gn)},setLocked:function(be){z=be},setClear:function(be){ke!==be&&(i.clearStencil(be),ke=be)},reset:function(){z=!1,pt=null,tt=null,$=null,nt=null,ct=null,kt=null,ne=null,ke=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d={},p=new WeakMap,x=[],S=null,m=!1,f=null,M=null,b=null,_=null,R=null,v=null,E=null,g=new ie(0,0,0),y=0,T=!1,A=null,k=null,F=null,O=null,L=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Z=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(et)[1]),U=Z>=1):et.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),U=Z>=2);let ut=null,wt={};const It=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),mt=new Ee().fromArray(It),St=new Ee().fromArray(qt);function X(z,pt,tt,$){const nt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(z,ct),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<tt;kt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(pt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return ct}const ot={};ot[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),K(i.DEPTH_TEST),r.setFunc(fo),Et(!1),bt(Hh),K(i.CULL_FACE),ft(_i);function K(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function yt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Dt(z,pt){return d[z]!==pt?(i.bindFramebuffer(z,pt),d[z]=pt,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ut(z,pt){let tt=x,$=!1;if(z){tt=p.get(pt),tt===void 0&&(tt=[],p.set(pt,tt));const nt=z.textures;if(tt.length!==nt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,kt=nt.length;ct<kt;ct++)tt[ct]=i.COLOR_ATTACHMENT0+ct;tt.length=nt.length,$=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,$=!0);$&&i.drawBuffers(tt)}function gt(z){return S!==z?(i.useProgram(z),S=z,!0):!1}const Pt={[fs]:i.FUNC_ADD,[Yp]:i.FUNC_SUBTRACT,[qp]:i.FUNC_REVERSE_SUBTRACT};Pt[jp]=i.MIN,Pt[Zp]=i.MAX;const it={[Kp]:i.ZERO,[Jp]:i.ONE,[Qp]:i.SRC_COLOR,[Vl]:i.SRC_ALPHA,[o0]:i.SRC_ALPHA_SATURATE,[i0]:i.DST_COLOR,[e0]:i.DST_ALPHA,[t0]:i.ONE_MINUS_SRC_COLOR,[Gl]:i.ONE_MINUS_SRC_ALPHA,[s0]:i.ONE_MINUS_DST_COLOR,[n0]:i.ONE_MINUS_DST_ALPHA,[r0]:i.CONSTANT_COLOR,[a0]:i.ONE_MINUS_CONSTANT_COLOR,[l0]:i.CONSTANT_ALPHA,[c0]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(z,pt,tt,$,nt,ct,kt,ne,ke,be){if(z===_i){m===!0&&(yt(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),z!==$p){if(z!==f||be!==T){if((M!==fs||R!==fs)&&(i.blendEquation(i.FUNC_ADD),M=fs,R=fs),be)switch(z){case ro:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vh:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pe("WebGLState: Invalid blending: ",z);break}else switch(z){case ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gh:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",z);break}b=null,_=null,v=null,E=null,g.set(0,0,0),y=0,f=z,T=be}return}nt=nt||pt,ct=ct||tt,kt=kt||$,(pt!==M||nt!==R)&&(i.blendEquationSeparate(Pt[pt],Pt[nt]),M=pt,R=nt),(tt!==b||$!==_||ct!==v||kt!==E)&&(i.blendFuncSeparate(it[tt],it[$],it[ct],it[kt]),b=tt,_=$,v=ct,E=kt),(ne.equals(g)===!1||ke!==y)&&(i.blendColor(ne.r,ne.g,ne.b,ke),g.copy(ne),y=ke),f=z,T=!1}function ht(z,pt){z.side===Gn?yt(i.CULL_FACE):K(i.CULL_FACE);let tt=z.side===Qe;pt&&(tt=!tt),Et(tt),z.blending===ro&&z.transparent===!1?ft(_i):ft(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const $=z.stencilWrite;a.setTest($),$&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),B(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(z){A!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),A=z)}function bt(z){z!==Wp?(K(i.CULL_FACE),z!==k&&(z===Hh?i.cullFace(i.BACK):z===Xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),k=z}function Jt(z){z!==F&&(U&&i.lineWidth(z),F=z)}function B(z,pt,tt){z?(K(i.POLYGON_OFFSET_FILL),(O!==pt||L!==tt)&&(O=pt,L=tt,r.getReversed()&&(pt=-pt),i.polygonOffset(pt,tt))):yt(i.POLYGON_OFFSET_FILL)}function Qt(z){z?K(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function zt(z){z===void 0&&(z=i.TEXTURE0+V-1),ut!==z&&(i.activeTexture(z),ut=z)}function Xt(z,pt,tt){tt===void 0&&(ut===null?tt=i.TEXTURE0+V-1:tt=ut);let $=wt[tt];$===void 0&&($={type:void 0,texture:void 0},wt[tt]=$),($.type!==z||$.texture!==pt)&&(ut!==tt&&(i.activeTexture(tt),ut=tt),i.bindTexture(z,pt||ot[z]),$.type=z,$.texture=pt)}function xt(){const z=wt[ut];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ue(){try{i.compressedTexImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function w(){try{i.texSubImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function vt(){try{i.texStorage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function Mt(){try{i.texStorage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function J(){try{i.texImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function D(){try{i.texImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function rt(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function lt(z,pt){u[z]!==pt&&(i.pixelStorei(z,pt),u[z]=pt)}function Q(z){mt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),mt.copy(z))}function st(z){St.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),St.copy(z))}function Ct(z,pt){let tt=c.get(pt);tt===void 0&&(tt=new WeakMap,c.set(pt,tt));let $=tt.get(z);$===void 0&&($=i.getUniformBlockIndex(pt,z.name),tt.set(z,$))}function Vt(z,pt){const $=c.get(pt).get(z);l.get(pt)!==$&&(i.uniformBlockBinding(pt,$,z.__bindingPointIndex),l.set(pt,$))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ut=null,wt={},d={},p=new WeakMap,x=[],S=null,m=!1,f=null,M=null,b=null,_=null,R=null,v=null,E=null,g=new ie(0,0,0),y=0,T=!1,A=null,k=null,F=null,O=null,L=null,mt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:K,disable:yt,bindFramebuffer:Dt,drawBuffers:Ut,useProgram:gt,setBlending:ft,setMaterial:ht,setFlipSided:Et,setCullFace:bt,setLineWidth:Jt,setPolygonOffset:B,setScissorTest:Qt,activeTexture:zt,bindTexture:Xt,unbindTexture:xt,compressedTexImage2D:ue,compressedTexImage3D:P,texImage2D:J,texImage3D:D,pixelStorei:lt,getParameter:rt,updateUBOMapping:Ct,uniformBlockBinding:Vt,texStorage2D:vt,texStorage3D:Mt,texSubImage2D:w,texSubImage3D:W,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:Q,viewport:st,reset:Kt}}function Ty(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,u=new Set;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,w){return x?new OffscreenCanvas(P,w):fa("canvas")}function m(P,w,W){let at=1;const dt=ue(P);if((dt.width>W||dt.height>W)&&(at=W/Math.max(dt.width,dt.height)),at<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const vt=Math.floor(at*dt.width),Mt=Math.floor(at*dt.height);d===void 0&&(d=S(vt,Mt));const J=w?S(vt,Mt):d;return J.width=vt,J.height=Mt,J.getContext("2d").drawImage(P,0,0,vt,Mt),jt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+vt+"x"+Mt+")."),J}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),P;return P}function f(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,w,W,at,dt,vt=!1){if(P!==null){if(i[P]!==void 0)return i[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Mt;at&&(Mt=t.get("EXT_texture_norm16"),Mt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=w;if(w===i.RED&&(W===i.FLOAT&&(J=i.R32F),W===i.HALF_FLOAT&&(J=i.R16F),W===i.UNSIGNED_BYTE&&(J=i.R8),W===i.UNSIGNED_SHORT&&Mt&&(J=Mt.R16_EXT),W===i.SHORT&&Mt&&(J=Mt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.R8UI),W===i.UNSIGNED_SHORT&&(J=i.R16UI),W===i.UNSIGNED_INT&&(J=i.R32UI),W===i.BYTE&&(J=i.R8I),W===i.SHORT&&(J=i.R16I),W===i.INT&&(J=i.R32I)),w===i.RG&&(W===i.FLOAT&&(J=i.RG32F),W===i.HALF_FLOAT&&(J=i.RG16F),W===i.UNSIGNED_BYTE&&(J=i.RG8),W===i.UNSIGNED_SHORT&&Mt&&(J=Mt.RG16_EXT),W===i.SHORT&&Mt&&(J=Mt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RG8UI),W===i.UNSIGNED_SHORT&&(J=i.RG16UI),W===i.UNSIGNED_INT&&(J=i.RG32UI),W===i.BYTE&&(J=i.RG8I),W===i.SHORT&&(J=i.RG16I),W===i.INT&&(J=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RGB8UI),W===i.UNSIGNED_SHORT&&(J=i.RGB16UI),W===i.UNSIGNED_INT&&(J=i.RGB32UI),W===i.BYTE&&(J=i.RGB8I),W===i.SHORT&&(J=i.RGB16I),W===i.INT&&(J=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),W===i.UNSIGNED_INT&&(J=i.RGBA32UI),W===i.BYTE&&(J=i.RGBA8I),W===i.SHORT&&(J=i.RGBA16I),W===i.INT&&(J=i.RGBA32I)),w===i.RGB&&(W===i.UNSIGNED_SHORT&&Mt&&(J=Mt.RGB16_EXT),W===i.SHORT&&Mt&&(J=Mt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),w===i.RGBA){const D=vt?ua:me.getTransfer(dt);W===i.FLOAT&&(J=i.RGBA32F),W===i.HALF_FLOAT&&(J=i.RGBA16F),W===i.UNSIGNED_BYTE&&(J=D===Se?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Mt&&(J=Mt.RGBA16_EXT),W===i.SHORT&&Mt&&(J=Mt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function R(P,w){let W;return P?w===null||w===ai||w===or?W=i.DEPTH24_STENCIL8:w===Dn?W=i.DEPTH32F_STENCIL8:w===sr&&(W=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ai||w===or?W=i.DEPTH_COMPONENT24:w===Dn?W=i.DEPTH_COMPONENT32F:w===sr&&(W=i.DEPTH_COMPONENT16),W}function v(P,w){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ye&&P.minFilter!==Je?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){const w=P.target;w.removeEventListener("dispose",E),y(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function g(P){const w=P.target;w.removeEventListener("dispose",g),A(w)}function y(P){const w=n.get(P);if(w.__webglInit===void 0)return;const W=P.source,at=p.get(W);if(at){const dt=at[w.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&T(P),Object.keys(at).length===0&&p.delete(W)}n.remove(P)}function T(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const W=P.source,at=p.get(W);delete at[w.__cacheKey],r.memory.textures--}function A(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(w.__webglFramebuffer[at]))for(let dt=0;dt<w.__webglFramebuffer[at].length;dt++)i.deleteFramebuffer(w.__webglFramebuffer[at][dt]);else i.deleteFramebuffer(w.__webglFramebuffer[at]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[at])}else{if(Array.isArray(w.__webglFramebuffer))for(let at=0;at<w.__webglFramebuffer.length;at++)i.deleteFramebuffer(w.__webglFramebuffer[at]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let at=0;at<w.__webglColorRenderbuffer.length;at++)w.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[at]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=P.textures;for(let at=0,dt=W.length;at<dt;at++){const vt=n.get(W[at]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),r.memory.textures--),n.remove(W[at])}n.remove(P)}let k=0;function F(){k=0}function O(){return k}function L(P){k=P}function V(){const P=k;return P>=s.maxTextures&&jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),k+=1,P}function U(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Z(P,w){const W=n.get(P);if(P.isVideoTexture&&Xt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const at=P.image;if(at===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(W,P,w);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function et(P,w){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){yt(W,P,w);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function ut(P,w){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){yt(W,P,w);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function wt(P,w){const W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Dt(W,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}const It={[Kl]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Jl]:i.MIRRORED_REPEAT},qt={[Ye]:i.NEAREST,[f0]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[gs]:i.LINEAR_MIPMAP_LINEAR},mt={[x0]:i.NEVER,[M0]:i.ALWAYS,[v0]:i.LESS,[Qc]:i.LEQUAL,[_0]:i.EQUAL,[th]:i.GEQUAL,[y0]:i.GREATER,[b0]:i.NOTEQUAL};function St(P,w){if(w.type===Dn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Je||w.magFilter===Ba||w.magFilter===mr||w.magFilter===gs||w.minFilter===Je||w.minFilter===Ba||w.minFilter===mr||w.minFilter===gs)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,It[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,It[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,It[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,qt[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,qt[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ye||w.minFilter!==mr&&w.minFilter!==gs||w.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function X(P,w){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));const at=w.source;let dt=p.get(at);dt===void 0&&(dt={},p.set(at,dt));const vt=U(w);if(vt!==P.__cacheKey){dt[vt]===void 0&&(dt[vt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,W=!0),dt[vt].usedTimes++;const Mt=dt[P.__cacheKey];Mt!==void 0&&(dt[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(w)),P.__cacheKey=vt,P.__webglTexture=dt[vt].texture}return W}function ot(P,w,W){return Math.floor(Math.floor(P/W)/w)}function K(P,w,W,at){const vt=P.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,W,at,w.data);else{vt.sort((lt,Q)=>lt.start-Q.start);let Mt=0;for(let lt=1;lt<vt.length;lt++){const Q=vt[Mt],st=vt[lt],Ct=Q.start+Q.count,Vt=ot(st.start,w.width,4),Kt=ot(Q.start,w.width,4);st.start<=Ct+1&&Vt===Kt&&ot(st.start+st.count-1,w.width,4)===Vt?Q.count=Math.max(Q.count,st.start+st.count-Q.start):(++Mt,vt[Mt]=st)}vt.length=Mt+1;const J=e.getParameter(i.UNPACK_ROW_LENGTH),D=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let lt=0,Q=vt.length;lt<Q;lt++){const st=vt[lt],Ct=Math.floor(st.start/4),Vt=Math.ceil(st.count/4),Kt=Ct%w.width,z=Math.floor(Ct/w.width),pt=Vt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Kt,z,pt,tt,W,at,w.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,D),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function yt(P,w,W){let at=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(at=i.TEXTURE_3D);const dt=X(P,w),vt=w.source;e.bindTexture(at,P.__webglTexture,i.TEXTURE0+W);const Mt=n.get(vt);if(vt.version!==Mt.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const tt=me.getPrimaries(me.workingColorSpace),$=w.colorSpace===xi?null:me.getPrimaries(w.colorSpace),nt=w.colorSpace===xi||tt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let D=m(w.image,!1,s.maxTextureSize);D=xt(w,D);const rt=o.convert(w.format,w.colorSpace),lt=o.convert(w.type);let Q=_(w.internalFormat,rt,lt,w.normalized,w.colorSpace,w.isVideoTexture);St(at,w);let st;const Ct=w.mipmaps,Vt=w.isVideoTexture!==!0,Kt=Mt.__version===void 0||dt===!0,z=vt.dataReady,pt=v(w,D);if(w.isDepthTexture)Q=R(w.format===xs,w.type),Kt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Q,D.width,D.height):e.texImage2D(i.TEXTURE_2D,0,Q,D.width,D.height,0,rt,lt,null));else if(w.isDataTexture)if(Ct.length>0){Vt&&Kt&&e.texStorage2D(i.TEXTURE_2D,pt,Q,Ct[0].width,Ct[0].height);for(let tt=0,$=Ct.length;tt<$;tt++)st=Ct[tt],Vt?z&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,st.width,st.height,rt,lt,st.data):e.texImage2D(i.TEXTURE_2D,tt,Q,st.width,st.height,0,rt,lt,st.data);w.generateMipmaps=!1}else Vt?(Kt&&e.texStorage2D(i.TEXTURE_2D,pt,Q,D.width,D.height),z&&K(w,D,rt,lt)):e.texImage2D(i.TEXTURE_2D,0,Q,D.width,D.height,0,rt,lt,D.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Vt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Q,Ct[0].width,Ct[0].height,D.depth);for(let tt=0,$=Ct.length;tt<$;tt++)if(st=Ct[tt],w.format!==Nn)if(rt!==null)if(Vt){if(z)if(w.layerUpdates.size>0){const nt=Id(st.width,st.height,w.format,w.type);for(const ct of w.layerUpdates){const kt=st.data.subarray(ct*nt/st.data.BYTES_PER_ELEMENT,(ct+1)*nt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,ct,st.width,st.height,1,rt,kt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,st.width,st.height,D.depth,rt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Q,st.width,st.height,D.depth,0,st.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,st.width,st.height,D.depth,rt,lt,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Q,st.width,st.height,D.depth,0,rt,lt,st.data)}else{Vt&&Kt&&e.texStorage2D(i.TEXTURE_2D,pt,Q,Ct[0].width,Ct[0].height);for(let tt=0,$=Ct.length;tt<$;tt++)st=Ct[tt],w.format!==Nn?rt!==null?Vt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,st.width,st.height,rt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Q,st.width,st.height,0,st.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?z&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,st.width,st.height,rt,lt,st.data):e.texImage2D(i.TEXTURE_2D,tt,Q,st.width,st.height,0,rt,lt,st.data)}else if(w.isDataArrayTexture)if(Vt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Q,D.width,D.height,D.depth),z)if(w.layerUpdates.size>0){const tt=Id(D.width,D.height,w.format,w.type);for(const $ of w.layerUpdates){const nt=D.data.subarray($*tt/D.data.BYTES_PER_ELEMENT,($+1)*tt/D.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,D.width,D.height,1,rt,lt,nt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,rt,lt,D.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,D.width,D.height,D.depth,0,rt,lt,D.data);else if(w.isData3DTexture)Vt?(Kt&&e.texStorage3D(i.TEXTURE_3D,pt,Q,D.width,D.height,D.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,rt,lt,D.data)):e.texImage3D(i.TEXTURE_3D,0,Q,D.width,D.height,D.depth,0,rt,lt,D.data);else if(w.isFramebufferTexture){if(Kt)if(Vt)e.texStorage2D(i.TEXTURE_2D,pt,Q,D.width,D.height);else{let tt=D.width,$=D.height;for(let nt=0;nt<pt;nt++)e.texImage2D(i.TEXTURE_2D,nt,Q,tt,$,0,rt,lt,null),tt>>=1,$>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),D.parentNode!==tt){tt.appendChild(D),u.add(w),tt.onpaint=ne=>{const ke=ne.changedElements;for(const be of u)ke.includes(be.image)&&(be.needsUpdate=!0)},tt.requestPaint();return}const $=0,nt=i.RGBA,ct=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,$,nt,ct,kt,D),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Vt&&Kt){const tt=ue(Ct[0]);e.texStorage2D(i.TEXTURE_2D,pt,Q,tt.width,tt.height)}for(let tt=0,$=Ct.length;tt<$;tt++)st=Ct[tt],Vt?z&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,rt,lt,st):e.texImage2D(i.TEXTURE_2D,tt,Q,rt,lt,st);w.generateMipmaps=!1}else if(Vt){if(Kt){const tt=ue(D);e.texStorage2D(i.TEXTURE_2D,pt,Q,tt.width,tt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,lt,D)}else e.texImage2D(i.TEXTURE_2D,0,Q,rt,lt,D);f(w)&&M(at),Mt.__version=vt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Dt(P,w,W){if(w.image.length!==6)return;const at=X(P,w),dt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const vt=n.get(dt);if(dt.version!==vt.__version||at===!0){e.activeTexture(i.TEXTURE0+W);const Mt=me.getPrimaries(me.workingColorSpace),J=w.colorSpace===xi?null:me.getPrimaries(w.colorSpace),D=w.colorSpace===xi||Mt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let ct=0;ct<6;ct++)!rt&&!lt?Q[ct]=m(w.image[ct],!0,s.maxCubemapSize):Q[ct]=lt?w.image[ct].image:w.image[ct],Q[ct]=xt(w,Q[ct]);const st=Q[0],Ct=o.convert(w.format,w.colorSpace),Vt=o.convert(w.type),Kt=_(w.internalFormat,Ct,Vt,w.normalized,w.colorSpace),z=w.isVideoTexture!==!0,pt=vt.__version===void 0||at===!0,tt=dt.dataReady;let $=v(w,st);St(i.TEXTURE_CUBE_MAP,w);let nt;if(rt){z&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$,Kt,st.width,st.height);for(let ct=0;ct<6;ct++){nt=Q[ct].mipmaps;for(let kt=0;kt<nt.length;kt++){const ne=nt[kt];w.format!==Nn?Ct!==null?z?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,ne.width,ne.height,Ct,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,Kt,ne.width,ne.height,0,ne.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,ne.width,ne.height,Ct,Vt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,Kt,ne.width,ne.height,0,Ct,Vt,ne.data)}}}else{if(nt=w.mipmaps,z&&pt){nt.length>0&&$++;const ct=ue(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$,Kt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(lt){z?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Q[ct].width,Q[ct].height,Ct,Vt,Q[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Kt,Q[ct].width,Q[ct].height,0,Ct,Vt,Q[ct].data);for(let kt=0;kt<nt.length;kt++){const ke=nt[kt].image[ct].image;z?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,ke.width,ke.height,Ct,Vt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,Kt,ke.width,ke.height,0,Ct,Vt,ke.data)}}else{z?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ct,Vt,Q[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Kt,Ct,Vt,Q[ct]);for(let kt=0;kt<nt.length;kt++){const ne=nt[kt];z?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,Ct,Vt,ne.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,Kt,Ct,Vt,ne.image[ct])}}}f(w)&&M(i.TEXTURE_CUBE_MAP),vt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ut(P,w,W,at,dt,vt){const Mt=o.convert(W.format,W.colorSpace),J=o.convert(W.type),D=_(W.internalFormat,Mt,J,W.normalized,W.colorSpace),rt=n.get(w),lt=n.get(W);if(lt.__renderTarget=w,!rt.__hasExternalTextures){const Q=Math.max(1,w.width>>vt),st=Math.max(1,w.height>>vt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,vt,D,Q,st,w.depth,0,Mt,J,null):e.texImage2D(dt,vt,D,Q,st,0,Mt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,dt,lt.__webglTexture,0,Qt(w)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,dt,lt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(P,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const at=w.depthTexture,dt=at&&at.isDepthTexture?at.type:null,vt=R(w.stencilBuffer,dt),Mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(w),vt,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(w),vt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,P)}else{const at=w.textures;for(let dt=0;dt<at.length;dt++){const vt=at[dt],Mt=o.convert(vt.format,vt.colorSpace),J=o.convert(vt.type),D=_(vt.internalFormat,Mt,J,vt.normalized,vt.colorSpace);zt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(w),D,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(w),D,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,D,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(P,w,W){const at=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(w.depthTexture);if(dt.__renderTarget=w,(!dt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),at){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),St(i.TEXTURE_CUBE_MAP,w.depthTexture);const rt=o.convert(w.depthTexture.format),lt=o.convert(w.depthTexture.type);let Q;w.depthTexture.format===Si?Q=i.DEPTH_COMPONENT24:w.depthTexture.format===xs&&(Q=i.DEPTH24_STENCIL8);for(let st=0;st<6;st++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Q,w.width,w.height,0,rt,lt,null)}}else Z(w.depthTexture,0);const vt=dt.__webglTexture,Mt=Qt(w),J=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,D=w.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Si)zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,J,vt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,D,J,vt,0);else if(w.depthTexture.format===xs)zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,J,vt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,D,J,vt,0);else throw new Error("Unknown depthTexture format")}function it(P){const w=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const at=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),at){const dt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,at.removeEventListener("dispose",dt)};at.addEventListener("dispose",dt),w.__depthDisposeCallback=dt}w.__boundDepthTexture=at}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let at=0;at<6;at++)Pt(w.__webglFramebuffer[at],P,at);else{const at=P.texture.mipmaps;at&&at.length>0?Pt(w.__webglFramebuffer[0],P,0):Pt(w.__webglFramebuffer,P,0)}else if(W){w.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[at]),w.__webglDepthbuffer[at]===void 0)w.__webglDepthbuffer[at]=i.createRenderbuffer(),gt(w.__webglDepthbuffer[at],P,!1);else{const dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,vt)}}else{const at=P.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),gt(w.__webglDepthbuffer,P,!1);else{const dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(P,w,W){const at=n.get(P);w!==void 0&&Ut(at.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&it(P)}function ht(P){const w=P.texture,W=n.get(P),at=n.get(w);P.addEventListener("dispose",g);const dt=P.textures,vt=P.isWebGLCubeRenderTarget===!0,Mt=dt.length>1;if(Mt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=w.version,r.memory.textures++),vt){W.__webglFramebuffer=[];for(let J=0;J<6;J++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[J]=[];for(let D=0;D<w.mipmaps.length;D++)W.__webglFramebuffer[J][D]=i.createFramebuffer()}else W.__webglFramebuffer[J]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let J=0;J<w.mipmaps.length;J++)W.__webglFramebuffer[J]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let J=0,D=dt.length;J<D;J++){const rt=n.get(dt[J]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&zt(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let J=0;J<dt.length;J++){const D=dt[J];W.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[J]);const rt=o.convert(D.format,D.colorSpace),lt=o.convert(D.type),Q=_(D.internalFormat,rt,lt,D.normalized,D.colorSpace,P.isXRRenderTarget===!0),st=Qt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Q,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,W.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),St(i.TEXTURE_CUBE_MAP,w);for(let J=0;J<6;J++)if(w.mipmaps&&w.mipmaps.length>0)for(let D=0;D<w.mipmaps.length;D++)Ut(W.__webglFramebuffer[J][D],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,D);else Ut(W.__webglFramebuffer[J],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(w)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let J=0,D=dt.length;J<D;J++){const rt=dt[J],lt=n.get(rt);let Q=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,lt.__webglTexture),St(Q,rt),Ut(W.__webglFramebuffer,P,rt,i.COLOR_ATTACHMENT0+J,Q,0),f(rt)&&M(Q)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,at.__webglTexture),St(J,w),w.mipmaps&&w.mipmaps.length>0)for(let D=0;D<w.mipmaps.length;D++)Ut(W.__webglFramebuffer[D],P,w,i.COLOR_ATTACHMENT0,J,D);else Ut(W.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,J,0);f(w)&&M(J),e.unbindTexture()}P.depthBuffer&&it(P)}function Et(P){const w=P.textures;for(let W=0,at=w.length;W<at;W++){const dt=w[W];if(f(dt)){const vt=b(P),Mt=n.get(dt).__webglTexture;e.bindTexture(vt,Mt),M(vt),e.unbindTexture()}}}const bt=[],Jt=[];function B(P){if(P.samples>0){if(zt(P)===!1){const w=P.textures,W=P.width,at=P.height;let dt=i.COLOR_BUFFER_BIT;const vt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(P),J=w.length>1;if(J)for(let rt=0;rt<w.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const D=P.texture.mipmaps;D&&D.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let rt=0;rt<w.length;rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[rt]);const lt=n.get(w[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,W,at,0,0,W,at,dt,i.NEAREST),l===!0&&(bt.length=0,Jt.length=0,bt.push(i.COLOR_ATTACHMENT0+rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(bt.push(vt),Jt.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let rt=0;rt<w.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[rt]);const lt=n.get(w[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Qt(P){return Math.min(s.maxSamples,P.samples)}function zt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xt(P){const w=r.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function xt(P,w){const W=P.colorSpace,at=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==da&&W!==xi&&(me.getTransfer(W)===Se?(at!==Nn||dt!==En)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",W)),w}function ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.getTextureUnits=O,this.setTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=et,this.setTexture3D=ut,this.setTextureCube=wt,this.rebindTextures=ft,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Cy(i,t){function e(n,s=xi){let o;const r=me.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===df)return i.BYTE;if(n===uf)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Yc)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===wi)return i.HALF_FLOAT;if(n===mf)return i.ALPHA;if(n===gf)return i.RGB;if(n===Nn)return i.RGBA;if(n===Si)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===wa)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===Jc)return i.RGBA_INTEGER;if(n===ia||n===sa||n===oa||n===ra)if(r===Se)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ia)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ia)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===tc||n===ec||n===nc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===oc||n===rc||n===ac||n===ca||n===lc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ic||n===sc)return r===Se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===oc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===rc)return o.COMPRESSED_R11_EAC;if(n===ac)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ca)return o.COMPRESSED_RG11_EAC;if(n===lc)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cc||n===hc||n===dc||n===uc||n===fc||n===pc||n===mc||n===gc||n===xc||n===vc||n===_c||n===yc||n===bc||n===Mc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===cc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Sc||n===Ec)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===wc)return r===Se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Tc||n===ha||n===Cc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ac)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Py=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ky{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new wf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mn({vertexShader:Ry,fragmentShader:Py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fy extends Rs{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",m=new ky,f={},M=e.getContextAttributes();let b=null,_=null;const R=[],v=[],E=new At;let g=null;const y=new yn;y.viewport=new Ee;const T=new yn;T.viewport=new Ee;const A=[y,T],k=new Hm;let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ot=R[X];return ot===void 0&&(ot=new Ya,R[X]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(X){let ot=R[X];return ot===void 0&&(ot=new Ya,R[X]=ot),ot.getGripSpace()},this.getHand=function(X){let ot=R[X];return ot===void 0&&(ot=new Ya,R[X]=ot),ot.getHandSpace()};function L(X){const ot=v.indexOf(X.inputSource);if(ot===-1)return;const K=R[ot];K!==void 0&&(K.update(X.inputSource,X.frame,c||r),K.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",U);for(let X=0;X<R.length;X++){const ot=v[X];ot!==null&&(v[X]=null,R[X].disconnect(ot))}F=null,O=null,m.reset();for(const X in f)delete f[X];t.setRenderTarget(b),p=null,d=null,u=null,s=null,_=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",V),s.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,yt=null,Dt=null;M.depth&&(Dt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=M.stencil?xs:Si,yt=M.stencil?or:ai);const Ut={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:o};u=this.getBinding(),d=u.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new $n(d.textureWidth,d.textureHeight,{format:Nn,type:En,depthTexture:new mo(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new $n(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),St.setContext(s),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(X){for(let ot=0;ot<X.removed.length;ot++){const K=X.removed[ot],yt=v.indexOf(K);yt>=0&&(v[yt]=null,R[yt].disconnect(K))}for(let ot=0;ot<X.added.length;ot++){const K=X.added[ot];let yt=v.indexOf(K);if(yt===-1){for(let Ut=0;Ut<R.length;Ut++)if(Ut>=v.length){v.push(K),yt=Ut;break}else if(v[Ut]===null){v[Ut]=K,yt=Ut;break}if(yt===-1)break}const Dt=R[yt];Dt&&Dt.connect(K)}}const Z=new N,et=new N;function ut(X,ot,K){Z.setFromMatrixPosition(ot.matrixWorld),et.setFromMatrixPosition(K.matrixWorld);const yt=Z.distanceTo(et),Dt=ot.projectionMatrix.elements,Ut=K.projectionMatrix.elements,gt=Dt[14]/(Dt[10]-1),Pt=Dt[14]/(Dt[10]+1),it=(Dt[9]+1)/Dt[5],ft=(Dt[9]-1)/Dt[5],ht=(Dt[8]-1)/Dt[0],Et=(Ut[8]+1)/Ut[0],bt=gt*ht,Jt=gt*Et,B=yt/(-ht+Et),Qt=B*-ht;if(ot.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qt),X.translateZ(B),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Dt[10]===-1)X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const zt=gt+B,Xt=Pt+B,xt=bt-Qt,ue=Jt+(yt-Qt),P=it*Pt/Xt*zt,w=ft*Pt/Xt*zt;X.projectionMatrix.makePerspective(xt,ue,P,w,zt,Xt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function wt(X,ot){ot===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ot.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ot=X.near,K=X.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(K=m.depthFar)),k.near=T.near=y.near=ot,k.far=T.far=y.far=K,(F!==k.near||O!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,O=k.far),k.layers.mask=X.layers.mask|6,y.layers.mask=k.layers.mask&-5,T.layers.mask=k.layers.mask&-3;const yt=X.parent,Dt=k.cameras;wt(k,yt);for(let Ut=0;Ut<Dt.length;Ut++)wt(Dt[Ut],yt);Dt.length===2?ut(k,y,T):k.projectionMatrix.copy(y.projectionMatrix),It(X,k,yt)};function It(X,ot,K){K===null?X.matrix.copy(ot.matrixWorld):(X.matrix.copy(K.matrixWorld),X.matrix.invert(),X.matrix.multiply(ot.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=kc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(X){return f[X]};let qt=null;function mt(X,ot){if(h=ot.getViewerPose(c||r),x=ot,h!==null){const K=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let yt=!1;K.length!==k.cameras.length&&(k.cameras.length=0,yt=!0);for(let Pt=0;Pt<K.length;Pt++){const it=K[Pt];let ft=null;if(p!==null)ft=p.getViewport(it);else{const Et=u.getViewSubImage(d,it);ft=Et.viewport,Pt===0&&(t.setRenderTargetTextures(_,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(_))}let ht=A[Pt];ht===void 0&&(ht=new yn,ht.layers.enable(Pt),ht.viewport=new Ee,A[Pt]=ht),ht.matrix.fromArray(it.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(it.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ft.x,ft.y,ft.width,ft.height),Pt===0&&(k.matrix.copy(ht.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),yt===!0&&k.cameras.push(ht)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();const Pt=u.getDepthInformation(K[0]);Pt&&Pt.isValid&&Pt.texture&&m.init(Pt,s.renderState)}if(Dt&&Dt.includes("camera-access")&&S){t.state.unbindTexture(),u=n.getBinding();for(let Pt=0;Pt<K.length;Pt++){const it=K[Pt].camera;if(it){let ft=f[it];ft||(ft=new wf,f[it]=ft);const ht=u.getCameraImage(it);ft.sourceTexture=ht}}}}for(let K=0;K<R.length;K++){const yt=v[K],Dt=R[K];yt!==null&&Dt!==void 0&&Dt.update(yt,ot,c||r)}qt&&qt(X,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}const St=new Of;St.setAnimationLoop(mt),this.setAnimationLoop=function(X){qt=X},this.dispose=function(){}}}const Ly=new te,Xf=new oe;Xf.set(-1,0,0,0,1,0,0,0,1);function Iy(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,If(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,b,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?o(m,f):f.isMeshLambertMaterial?(o(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(o(m,f),u(m,f)):f.isMeshPhongMaterial?(o(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(o(m,f),x(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),S(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),b=M.envMap,_=M.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dy(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const _=b.program;n.uniformBlockBinding(M,_)}function c(M,b){let _=s[M.id];_===void 0&&(x(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(M,R);const v=t.render.frame;o[M.id]!==v&&(d(M),o[M.id]=v)}function h(M){const b=u();M.__bindingPointIndex=b;const _=i.createBuffer(),R=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],_=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=_.length;v<E;v++){const g=Array.isArray(_[v])?_[v]:[_[v]];for(let y=0,T=g.length;y<T;y++){const A=g[y];if(p(A,v,y,R)===!0){const k=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let O=0;for(let L=0;L<F.length;L++){const V=F[L],U=S(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+O,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):ArrayBuffer.isView(V)?A.__data.set(new V.constructor(V.buffer,V.byteOffset,A.__data.length)):(V.toArray(A.__data,O),O+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,_,R){const v=M.value,E=b+"_"+_;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{const g=R[E];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(g.equals(v)===!1)return g.copy(v),!0}}return!1}function x(M){const b=M.uniforms;let _=0;const R=16;for(let E=0,g=b.length;E<g;E++){const y=Array.isArray(b[E])?b[E]:[b[E]];for(let T=0,A=y.length;T<A;T++){const k=y[T],F=Array.isArray(k.value)?k.value:[k.value];for(let O=0,L=F.length;O<L;O++){const V=F[O],U=S(V),Z=_%R,et=Z%U.boundary,ut=Z+et;_+=et,ut!==0&&R-ut<U.storage&&(_+=R-ut),k.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=U.storage}}}const v=_%R;return v>0&&(_+=R-v),M.__size=_,M.__cache={},this}function S(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const _=r.indexOf(b.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:l,update:c,dispose:f}}const Ny=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function Uy(){return Kn===null&&(Kn=new Ea(Ny,16,16,Ss,wi),Kn.name="DFG_LUT",Kn.minFilter=Je,Kn.magFilter=Je,Kn.wrapS=vi,Kn.wrapT=vi,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class Oy{constructor(t={}){const{canvas:e=S0(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=En}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=r;const S=p,m=new Set([Jc,Kc,Zc]),f=new Set([En,ai,sr,or,qc,jc]),M=new Uint32Array(4),b=new Int32Array(4),_=new N;let R=null,v=null;const E=[],g=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let A=!1,k=null;this._outputColorSpace=Ke;let F=0,O=0,L=null,V=-1,U=null;const Z=new Ee,et=new Ee;let ut=null;const wt=new ie(0);let It=0,qt=e.width,mt=e.height,St=1,X=null,ot=null;const K=new Ee(0,0,qt,mt),yt=new Ee(0,0,qt,mt);let Dt=!1;const Ut=new rh;let gt=!1,Pt=!1;const it=new te,ft=new N,ht=new Ee,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Jt(){return L===null?St:1}let B=n;function Qt(C,G){return e.getContext(C,G)}try{const C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",ne,!1),B===null){const G="webgl2";if(B=Qt(G,C),B===null)throw Qt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw pe("WebGLRenderer: "+C.message),C}let zt,Xt,xt,ue,P,w,W,at,dt,vt,Mt,J,D,rt,lt,Q,st,Ct,Vt,Kt,z,pt,tt;function $(){zt=new Uv(B),zt.init(),z=new Cy(B,zt),Xt=new Rv(B,zt,t,z),xt=new Ay(B,zt),Xt.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),ue=new zv(B),P=new uy,w=new Ty(B,zt,xt,P,Xt,z,ue),W=new Nv(T),at=new Wm(B),pt=new Tv(B,at),dt=new Ov(B,at,ue,pt),vt=new Vv(B,dt,at,pt,ue),Ct=new Hv(B,Xt,w),lt=new Pv(P),Mt=new dy(T,W,zt,Xt,pt,lt),J=new Iy(T,P),D=new py,rt=new yy(zt),st=new Av(T,W,xt,vt,x,l),Q=new Ey(T,vt,Xt),tt=new Dy(B,ue,Xt,xt),Vt=new Cv(B,zt,ue),Kt=new Bv(B,zt,ue),ue.programs=Mt.programs,T.capabilities=Xt,T.extensions=zt,T.properties=P,T.renderLists=D,T.shadowMap=Q,T.state=xt,T.info=ue}$(),S!==En&&(y=new Wv(S,e.width,e.height,s,o));const nt=new Fy(T,B);this.xr=nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=zt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=zt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(C){C!==void 0&&(St=C,this.setSize(qt,mt,!1))},this.getSize=function(C){return C.set(qt,mt)},this.setSize=function(C,G,j=!0){if(nt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=C,mt=G,e.width=Math.floor(C*St),e.height=Math.floor(G*St),j===!0&&(e.style.width=C+"px",e.style.height=G+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(qt*St,mt*St).floor()},this.setDrawingBufferSize=function(C,G,j){qt=C,mt=G,St=j,e.width=Math.floor(C*j),e.height=Math.floor(G*j),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(S===En){pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,G,j,Y){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,G,j,Y),xt.viewport(Z.copy(K).multiplyScalar(St).round())},this.getScissor=function(C){return C.copy(yt)},this.setScissor=function(C,G,j,Y){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,G,j,Y),xt.scissor(et.copy(yt).multiplyScalar(St).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(C){xt.setScissorTest(Dt=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){ot=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,j=!0){let Y=0;if(C){let q=!1;if(L!==null){const Nt=L.texture.format;q=m.has(Nt)}if(q){const Nt=L.texture.type,Gt=f.has(Nt),Lt=st.getClearColor(),Wt=st.getClearAlpha(),$t=Lt.r,re=Lt.g,he=Lt.b;Gt?(M[0]=$t,M[1]=re,M[2]=he,M[3]=Wt,B.clearBufferuiv(B.COLOR,0,M)):(b[0]=$t,b[1]=re,b[2]=he,b[3]=Wt,B.clearBufferiv(B.COLOR,0,b))}else Y|=B.COLOR_BUFFER_BIT}G&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),k=C},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),st.dispose(),D.dispose(),rt.dispose(),P.dispose(),W.dispose(),vt.dispose(),pt.dispose(),tt.dispose(),Mt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",wo),nt.removeEventListener("sessionend",So),qn.stop()};function ct(C){C.preventDefault(),Zh("WebGLRenderer: Context Lost."),A=!0}function kt(){Zh("WebGLRenderer: Context Restored."),A=!1;const C=ue.autoReset,G=Q.enabled,j=Q.autoUpdate,Y=Q.needsUpdate,q=Q.type;$(),ue.autoReset=C,Q.enabled=G,Q.autoUpdate=j,Q.needsUpdate=Y,Q.type=q}function ne(C){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ke(C){const G=C.target;G.removeEventListener("dispose",ke),be(G)}function be(C){Xe(C),P.remove(C)}function Xe(C){const G=P.get(C).programs;G!==void 0&&(G.forEach(function(j){Mt.releaseProgram(j)}),C.isShaderMaterial&&Mt.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,j,Y,q,Nt){G===null&&(G=Et);const Gt=q.isMesh&&q.matrixWorld.determinant()<0,Lt=Ds(C,G,j,Y,q);xt.setMaterial(Y,Gt);let Wt=j.index,$t=1;if(Y.wireframe===!0){if(Wt=dt.getWireframeAttribute(j),Wt===void 0)return;$t=2}const re=j.drawRange,he=j.attributes.position;let Yt=re.start*$t,Ae=(re.start+re.count)*$t;Nt!==null&&(Yt=Math.max(Yt,Nt.start*$t),Ae=Math.min(Ae,(Nt.start+Nt.count)*$t)),Wt!==null?(Yt=Math.max(Yt,0),Ae=Math.min(Ae,Wt.count)):he!=null&&(Yt=Math.max(Yt,0),Ae=Math.min(Ae,he.count));const Oe=Ae-Yt;if(Oe<0||Oe===1/0)return;pt.setup(q,Y,Lt,j,Wt);let De,Te=Vt;if(Wt!==null&&(De=at.get(Wt),Te=Kt,Te.setIndex(De)),q.isMesh)Y.wireframe===!0?(xt.setLineWidth(Y.wireframeLinewidth*Jt()),Te.setMode(B.LINES)):Te.setMode(B.TRIANGLES);else if(q.isLine){let tn=Y.linewidth;tn===void 0&&(tn=1),xt.setLineWidth(tn*Jt()),q.isLineSegments?Te.setMode(B.LINES):q.isLineLoop?Te.setMode(B.LINE_LOOP):Te.setMode(B.LINE_STRIP)}else q.isPoints?Te.setMode(B.POINTS):q.isSprite&&Te.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))Te.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const tn=q._multiDrawStarts,Ht=q._multiDrawCounts,bn=q._multiDrawCount,ge=Wt?at.get(Wt).bytesPerElement:1,Tn=P.get(Y).currentProgram.getUniforms();for(let jn=0;jn<bn;jn++)Tn.setValue(B,"_gl_DrawID",jn),Te.render(tn[jn]/ge,Ht[jn])}else if(q.isInstancedMesh)Te.renderInstances(Yt,Oe,q.count);else if(j.isInstancedBufferGeometry){const tn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ht=Math.min(j.instanceCount,tn);Te.renderInstances(Yt,Oe,Ht)}else Te.render(Yt,Oe)};function gn(C,G,j){C.transparent===!0&&C.side===Gn&&C.forceSinglePass===!1?(C.side=Qe,C.needsUpdate=!0,Qi(C,G,j),C.side=$i,C.needsUpdate=!0,Qi(C,G,j),C.side=Gn):Qi(C,G,j)}this.compile=function(C,G,j=null){j===null&&(j=C),v=rt.get(j),v.init(G),g.push(v),j.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),C!==j&&C.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const Y=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Nt=q.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const Lt=Nt[Gt];gn(Lt,j,q),Y.add(Lt)}else gn(Nt,j,q),Y.add(Nt)}),v=g.pop(),Y},this.compileAsync=function(C,G,j=null){const Y=this.compile(C,G,j);return new Promise(q=>{function Nt(){if(Y.forEach(function(Gt){P.get(Gt).currentProgram.isReady()&&Y.delete(Gt)}),Y.size===0){q(C);return}setTimeout(Nt,10)}zt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ls=null;function Ti(C){Ls&&Ls(C)}function wo(){qn.stop()}function So(){qn.start()}const qn=new Of;qn.setAnimationLoop(Ti),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){Ls=C,nt.setAnimationLoop(C),C===null?qn.stop():qn.start()},nt.addEventListener("sessionstart",wo),nt.addEventListener("sessionend",So),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;k!==null&&k.renderStart(C,G);const j=nt.enabled===!0&&nt.isPresenting===!0,Y=y!==null&&(L===null||j)&&y.begin(T,L);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(G),G=nt.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,G,L),v=rt.get(C,g.length),v.init(G),v.state.textureUnits=w.getTextureUnits(),g.push(v),it.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ut.setFromProjectionMatrix(it,oi,G.reversedDepth),Pt=this.localClippingEnabled,gt=lt.init(this.clippingPlanes,Pt),R=D.get(C,E.length),R.init(),E.push(R),nt.enabled===!0&&nt.isPresenting===!0){const Gt=T.xr.getDepthSensingMesh();Gt!==null&&Is(Gt,G,-1/0,T.sortObjects)}Is(C,G,0,T.sortObjects),R.finish(),T.sortObjects===!0&&R.sort(X,ot),bt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,bt&&st.addToRenderList(R,C),this.info.render.frame++,gt===!0&&lt.beginShadows();const q=v.state.shadowsArray;if(Q.render(q,C,G),gt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&y.hasRenderPass())===!1){const Gt=R.opaque,Lt=R.transmissive;if(v.setupLights(),G.isArrayCamera){const Wt=G.cameras;if(Lt.length>0)for(let $t=0,re=Wt.length;$t<re;$t++){const he=Wt[$t];Ao(Gt,Lt,C,he)}bt&&st.render(C);for(let $t=0,re=Wt.length;$t<re;$t++){const he=Wt[$t];Eo(R,C,he,he.viewport)}}else Lt.length>0&&Ao(Gt,Lt,C,G),bt&&st.render(C),Eo(R,C,G)}L!==null&&O===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),Y&&y.end(T),C.isScene===!0&&C.onAfterRender(T,C,G),pt.resetDefaultState(),V=-1,U=null,g.pop(),g.length>0?(v=g[g.length-1],w.setTextureUnits(v.state.textureUnits),gt===!0&&lt.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?R=E[E.length-1]:R=null,k!==null&&k.renderEnd()};function Is(C,G,j,Y){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)v.pushLightProbeGrid(C);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ut.intersectsSprite(C)){Y&&ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(it);const Gt=vt.update(C),Lt=C.material;Lt.visible&&R.push(C,Gt,Lt,j,ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ut.intersectsObject(C))){const Gt=vt.update(C),Lt=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ht.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ht.copy(Gt.boundingSphere.center)),ht.applyMatrix4(C.matrixWorld).applyMatrix4(it)),Array.isArray(Lt)){const Wt=Gt.groups;for(let $t=0,re=Wt.length;$t<re;$t++){const he=Wt[$t],Yt=Lt[he.materialIndex];Yt&&Yt.visible&&R.push(C,Gt,Yt,j,ht.z,he)}}else Lt.visible&&R.push(C,Gt,Lt,j,ht.z,null)}}const Nt=C.children;for(let Gt=0,Lt=Nt.length;Gt<Lt;Gt++)Is(Nt[Gt],G,j,Y)}function Eo(C,G,j,Y){const{opaque:q,transmissive:Nt,transparent:Gt}=C;v.setupLightsView(j),gt===!0&&lt.setGlobalState(T.clippingPlanes,j),Y&&xt.viewport(Z.copy(Y)),q.length>0&&Ji(q,G,j),Nt.length>0&&Ji(Nt,G,j),Gt.length>0&&Ji(Gt,G,j),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ao(C,G,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[Y.id]===void 0){const Yt=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[Y.id]=new $n(1,1,{generateMipmaps:!0,type:Yt?wi:En,minFilter:gs,samples:Math.max(4,Xt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace})}const Nt=v.state.transmissionRenderTarget[Y.id],Gt=Y.viewport||Z;Nt.setSize(Gt.z*T.transmissionResolutionScale,Gt.w*T.transmissionResolutionScale);const Lt=T.getRenderTarget(),Wt=T.getActiveCubeFace(),$t=T.getActiveMipmapLevel();T.setRenderTarget(Nt),T.getClearColor(wt),It=T.getClearAlpha(),It<1&&T.setClearColor(16777215,.5),T.clear(),bt&&st.render(j);const re=T.toneMapping;T.toneMapping=Xn;const he=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),v.setupLightsView(Y),gt===!0&&lt.setGlobalState(T.clippingPlanes,Y),Ji(C,j,Y),w.updateMultisampleRenderTarget(Nt),w.updateRenderTargetMipmap(Nt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ae=0,Oe=G.length;Ae<Oe;Ae++){const De=G[Ae],{object:Te,geometry:tn,material:Ht,group:bn}=De;if(Ht.side===Gn&&Te.layers.test(Y.layers)){const ge=Ht.side;Ht.side=Qe,Ht.needsUpdate=!0,To(Te,j,Y,tn,Ht,bn),Ht.side=ge,Ht.needsUpdate=!0,Yt=!0}}Yt===!0&&(w.updateMultisampleRenderTarget(Nt),w.updateRenderTargetMipmap(Nt))}T.setRenderTarget(Lt,Wt,$t),T.setClearColor(wt,It),he!==void 0&&(Y.viewport=he),T.toneMapping=re}function Ji(C,G,j){const Y=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Nt=C.length;q<Nt;q++){const Gt=C[q],{object:Lt,geometry:Wt,group:$t}=Gt;let re=Gt.material;re.allowOverride===!0&&Y!==null&&(re=Y),Lt.layers.test(j.layers)&&To(Lt,G,j,Wt,re,$t)}}function To(C,G,j,Y,q,Nt){C.onBeforeRender(T,G,j,Y,q,Nt),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(T,G,j,Y,C,Nt),q.transparent===!0&&q.side===Gn&&q.forceSinglePass===!1?(q.side=Qe,q.needsUpdate=!0,T.renderBufferDirect(j,G,Y,q,C,Nt),q.side=$i,q.needsUpdate=!0,T.renderBufferDirect(j,G,Y,q,C,Nt),q.side=Gn):T.renderBufferDirect(j,G,Y,q,C,Nt),C.onAfterRender(T,G,j,Y,q,Nt)}function Qi(C,G,j){G.isScene!==!0&&(G=Et);const Y=P.get(C),q=v.state.lights,Nt=v.state.shadowsArray,Gt=q.state.version,Lt=Mt.getParameters(C,q.state,Nt,G,j,v.state.lightProbeGridArray),Wt=Mt.getProgramCacheKey(Lt);let $t=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;const re=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=W.get(C.envMap||Y.environment,re),Y.envMapRotation=Y.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",ke),$t=new Map,Y.programs=$t);let he=$t.get(Wt);if(he!==void 0){if(Y.currentProgram===he&&Y.lightsStateVersion===Gt)return ve(C,Lt),he}else Lt.uniforms=Mt.getUniforms(C),k!==null&&C.isNodeMaterial&&k.build(C,j,Lt),C.onBeforeCompile(Lt,T),he=Mt.acquireProgram(Lt,Wt),$t.set(Wt,he),Y.uniforms=Lt.uniforms;const Yt=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=lt.uniform),ve(C,Lt),Y.needsLights=up(C),Y.lightsStateVersion=Gt,Y.needsLights&&(Yt.ambientLightColor.value=q.state.ambient,Yt.lightProbe.value=q.state.probe,Yt.directionalLights.value=q.state.directional,Yt.directionalLightShadows.value=q.state.directionalShadow,Yt.spotLights.value=q.state.spot,Yt.spotLightShadows.value=q.state.spotShadow,Yt.rectAreaLights.value=q.state.rectArea,Yt.ltc_1.value=q.state.rectAreaLTC1,Yt.ltc_2.value=q.state.rectAreaLTC2,Yt.pointLights.value=q.state.point,Yt.pointLightShadows.value=q.state.pointShadow,Yt.hemisphereLights.value=q.state.hemi,Yt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Yt.spotLightMatrix.value=q.state.spotLightMatrix,Yt.spotLightMap.value=q.state.spotLightMap,Yt.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=v.state.lightProbeGridArray.length>0,Y.currentProgram=he,Y.uniformsList=null,he}function ee(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=aa.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function ve(C,G){const j=P.get(C);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function An(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(G.matrixWorld);for(let j=0,Y=C.length;j<Y;j++){const q=C[j];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function Ds(C,G,j,Y,q){G.isScene!==!0&&(G=Et),w.resetTextureUnits();const Nt=G.fog,Gt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,Lt=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:me.workingColorSpace,Wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,$t=W.get(Y.envMap||Gt,Wt),re=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,he=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Yt=!!j.morphAttributes.position,Ae=!!j.morphAttributes.normal,Oe=!!j.morphAttributes.color;let De=Xn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(De=T.toneMapping);const Te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tn=Te!==void 0?Te.length:0,Ht=P.get(Y),bn=v.state.lights;if(gt===!0&&(Pt===!0||C!==U)){const Re=C===U&&Y.id===V;lt.setState(Y,C,Re)}let ge=!1;Y.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==bn.state.version||Ht.outputColorSpace!==Lt||q.isBatchedMesh&&Ht.batching===!1||!q.isBatchedMesh&&Ht.batching===!0||q.isBatchedMesh&&Ht.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ht.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ht.instancing===!1||!q.isInstancedMesh&&Ht.instancing===!0||q.isSkinnedMesh&&Ht.skinning===!1||!q.isSkinnedMesh&&Ht.skinning===!0||q.isInstancedMesh&&Ht.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ht.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ht.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ht.instancingMorph===!1&&q.morphTexture!==null||Ht.envMap!==$t||Y.fog===!0&&Ht.fog!==Nt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==lt.numPlanes||Ht.numIntersection!==lt.numIntersection)||Ht.vertexAlphas!==re||Ht.vertexTangents!==he||Ht.morphTargets!==Yt||Ht.morphNormals!==Ae||Ht.morphColors!==Oe||Ht.toneMapping!==De||Ht.morphTargetsCount!==tn||!!Ht.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ht.__version=Y.version);let Tn=Ht.currentProgram;ge===!0&&(Tn=Qi(Y,G,q),k&&Y.isNodeMaterial&&k.onUpdateProgram(Y,Tn,Ht));let jn=!1,Ci=!1,Ns=!1;const Ce=Tn.getUniforms(),Be=Ht.uniforms;if(xt.useProgram(Tn.program)&&(jn=!0,Ci=!0,Ns=!0),Y.id!==V&&(V=Y.id,Ci=!0),Ht.needsLights){const Re=An(v.state.lightProbeGridArray,q);Ht.lightProbeGrid!==Re&&(Ht.lightProbeGrid=Re,Ci=!0)}if(jn||U!==C){xt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ce.setValue(B,"projectionMatrix",C.projectionMatrix),Ce.setValue(B,"viewMatrix",C.matrixWorldInverse);const Pi=Ce.map.cameraPosition;Pi!==void 0&&Pi.setValue(B,ft.setFromMatrixPosition(C.matrixWorld)),Xt.logarithmicDepthBuffer&&Ce.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ce.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),U!==C&&(U=C,Ci=!0,Ns=!0)}if(Ht.needsLights&&(bn.state.directionalShadowMap.length>0&&Ce.setValue(B,"directionalShadowMap",bn.state.directionalShadowMap,w),bn.state.spotShadowMap.length>0&&Ce.setValue(B,"spotShadowMap",bn.state.spotShadowMap,w),bn.state.pointShadowMap.length>0&&Ce.setValue(B,"pointShadowMap",bn.state.pointShadowMap,w)),q.isSkinnedMesh){Ce.setOptional(B,q,"bindMatrix"),Ce.setOptional(B,q,"bindMatrixInverse");const Re=q.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Ce.setValue(B,"boneTexture",Re.boneTexture,w))}q.isBatchedMesh&&(Ce.setOptional(B,q,"batchingTexture"),Ce.setValue(B,"batchingTexture",q._matricesTexture,w),Ce.setOptional(B,q,"batchingIdTexture"),Ce.setValue(B,"batchingIdTexture",q._indirectTexture,w),Ce.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Ce.setValue(B,"batchingColorTexture",q._colorsTexture,w));const Ri=j.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Ct.update(q,j,Tn),(Ci||Ht.receiveShadow!==q.receiveShadow)&&(Ht.receiveShadow=q.receiveShadow,Ce.setValue(B,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(Be.envMapIntensity.value=G.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Uy()),Ci){if(Ce.setValue(B,"toneMappingExposure",T.toneMappingExposure),Ht.needsLights&&dp(Be,Ns),Nt&&Y.fog===!0&&J.refreshFogUniforms(Be,Nt),J.refreshMaterialUniforms(Be,Y,St,mt,v.state.transmissionRenderTarget[C.id]),Ht.needsLights&&Ht.lightProbeGrid){const Re=Ht.lightProbeGrid;Be.probesSH.value=Re.texture,Be.probesMin.value.copy(Re.boundingBox.min),Be.probesMax.value.copy(Re.boundingBox.max),Be.probesResolution.value.copy(Re.resolution)}aa.upload(B,ee(Ht),Be,w)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(aa.upload(B,ee(Ht),Be,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ce.setValue(B,"center",q.center),Ce.setValue(B,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(B,"normalMatrix",q.normalMatrix),Ce.setValue(B,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){const Re=Y.uniformsGroups;for(let Pi=0,Us=Re.length;Pi<Us;Pi++){const Ch=Re[Pi];tt.update(Ch,Tn),tt.bind(Ch,Tn)}}return Tn}function dp(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function up(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,G,j){const Y=P.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),P.get(C.texture).__webglTexture=G,P.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const j=P.get(C);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0};const fp=B.createFramebuffer();this.setRenderTarget=function(C,G=0,j=0){L=C,F=G,O=j;let Y=null,q=!1,Nt=!1;if(C){const Lt=P.get(C);if(Lt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(B.FRAMEBUFFER,Lt.__webglFramebuffer),Z.copy(C.viewport),et.copy(C.scissor),ut=C.scissorTest,xt.viewport(Z),xt.scissor(et),xt.setScissorTest(ut),V=-1;return}else if(Lt.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Lt.__hasExternalTextures)w.rebindTextures(C,P.get(C.texture).__webglTexture,P.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const re=C.depthTexture;if(Lt.__boundDepthTexture!==re){if(re!==null&&P.has(re)&&(C.width!==re.image.width||C.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Nt=!0);const $t=P.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[G])?Y=$t[G][j]:Y=$t[G],q=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?Y=P.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[j]:Y=$t,Z.copy(C.viewport),et.copy(C.scissor),ut=C.scissorTest}else Z.copy(K).multiplyScalar(St).floor(),et.copy(yt).multiplyScalar(St).floor(),ut=Dt;if(j!==0&&(Y=fp),xt.bindFramebuffer(B.FRAMEBUFFER,Y)&&xt.drawBuffers(C,Y),xt.viewport(Z),xt.scissor(et),xt.setScissorTest(ut),q){const Lt=P.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt.__webglTexture,j)}else if(Nt){const Lt=G;for(let Wt=0;Wt<C.textures.length;Wt++){const $t=P.get(C.textures[Wt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Wt,$t.__webglTexture,j,Lt)}}else if(C!==null&&j!==0){const Lt=P.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,j)}V=-1},this.readRenderTargetPixels=function(C,G,j,Y,q,Nt,Gt,Lt=0){if(!(C&&C.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt){xt.bindFramebuffer(B.FRAMEBUFFER,Wt);try{const $t=C.textures[Lt],re=$t.format,he=$t.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Lt),!Xt.textureFormatReadable(re)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(he)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Y&&j>=0&&j<=C.height-q&&B.readPixels(G,j,Y,q,z.convert(re),z.convert(he),Nt)}finally{const $t=L!==null?P.get(L).__webglFramebuffer:null;xt.bindFramebuffer(B.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,G,j,Y,q,Nt,Gt,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt)if(G>=0&&G<=C.width-Y&&j>=0&&j<=C.height-q){xt.bindFramebuffer(B.FRAMEBUFFER,Wt);const $t=C.textures[Lt],re=$t.format,he=$t.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Lt),!Xt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.bufferData(B.PIXEL_PACK_BUFFER,Nt.byteLength,B.STREAM_READ),B.readPixels(G,j,Y,q,z.convert(re),z.convert(he),0);const Ae=L!==null?P.get(L).__webglFramebuffer:null;xt.bindFramebuffer(B.FRAMEBUFFER,Ae);const Oe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await E0(B,Oe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Nt),B.deleteBuffer(Yt),B.deleteSync(Oe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,j=0){const Y=Math.pow(2,-j),q=Math.floor(C.image.width*Y),Nt=Math.floor(C.image.height*Y),Gt=G!==null?G.x:0,Lt=G!==null?G.y:0;w.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,Gt,Lt,q,Nt),xt.unbindTexture()};const pp=B.createFramebuffer(),mp=B.createFramebuffer();this.copyTextureToTexture=function(C,G,j=null,Y=null,q=0,Nt=0){let Gt,Lt,Wt,$t,re,he,Yt,Ae,Oe;const De=C.isCompressedTexture?C.mipmaps[Nt]:C.image;if(j!==null)Gt=j.max.x-j.min.x,Lt=j.max.y-j.min.y,Wt=j.isBox3?j.max.z-j.min.z:1,$t=j.min.x,re=j.min.y,he=j.isBox3?j.min.z:0;else{const Be=Math.pow(2,-q);Gt=Math.floor(De.width*Be),Lt=Math.floor(De.height*Be),C.isDataArrayTexture?Wt=De.depth:C.isData3DTexture?Wt=Math.floor(De.depth*Be):Wt=1,$t=0,re=0,he=0}Y!==null?(Yt=Y.x,Ae=Y.y,Oe=Y.z):(Yt=0,Ae=0,Oe=0);const Te=z.convert(G.format),tn=z.convert(G.type);let Ht;G.isData3DTexture?(w.setTexture3D(G,0),Ht=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(w.setTexture2DArray(G,0),Ht=B.TEXTURE_2D_ARRAY):(w.setTexture2D(G,0),Ht=B.TEXTURE_2D),xt.activeTexture(B.TEXTURE0),xt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),xt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),xt.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const bn=xt.getParameter(B.UNPACK_ROW_LENGTH),ge=xt.getParameter(B.UNPACK_IMAGE_HEIGHT),Tn=xt.getParameter(B.UNPACK_SKIP_PIXELS),jn=xt.getParameter(B.UNPACK_SKIP_ROWS),Ci=xt.getParameter(B.UNPACK_SKIP_IMAGES);xt.pixelStorei(B.UNPACK_ROW_LENGTH,De.width),xt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,De.height),xt.pixelStorei(B.UNPACK_SKIP_PIXELS,$t),xt.pixelStorei(B.UNPACK_SKIP_ROWS,re),xt.pixelStorei(B.UNPACK_SKIP_IMAGES,he);const Ns=C.isDataArrayTexture||C.isData3DTexture,Ce=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const Be=P.get(C),Ri=P.get(G),Re=P.get(Be.__renderTarget),Pi=P.get(Ri.__renderTarget);xt.bindFramebuffer(B.READ_FRAMEBUFFER,Re.__webglFramebuffer),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Us=0;Us<Wt;Us++)Ns&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(C).__webglTexture,q,he+Us),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(G).__webglTexture,Nt,Oe+Us)),B.blitFramebuffer($t,re,Gt,Lt,Yt,Ae,Gt,Lt,B.DEPTH_BUFFER_BIT,B.NEAREST);xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||P.has(C)){const Be=P.get(C),Ri=P.get(G);xt.bindFramebuffer(B.READ_FRAMEBUFFER,pp),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,mp);for(let Re=0;Re<Wt;Re++)Ns?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,q,he+Re):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,q),Ce?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ri.__webglTexture,Nt,Oe+Re):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ri.__webglTexture,Nt),q!==0?B.blitFramebuffer($t,re,Gt,Lt,Yt,Ae,Gt,Lt,B.COLOR_BUFFER_BIT,B.NEAREST):Ce?B.copyTexSubImage3D(Ht,Nt,Yt,Ae,Oe+Re,$t,re,Gt,Lt):B.copyTexSubImage2D(Ht,Nt,Yt,Ae,$t,re,Gt,Lt);xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ce?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ht,Nt,Yt,Ae,Oe,Gt,Lt,Wt,Te,tn,De.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Ht,Nt,Yt,Ae,Oe,Gt,Lt,Wt,Te,De.data):B.texSubImage3D(Ht,Nt,Yt,Ae,Oe,Gt,Lt,Wt,Te,tn,De):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Nt,Yt,Ae,Gt,Lt,Te,tn,De.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Nt,Yt,Ae,De.width,De.height,Te,De.data):B.texSubImage2D(B.TEXTURE_2D,Nt,Yt,Ae,Gt,Lt,Te,tn,De);xt.pixelStorei(B.UNPACK_ROW_LENGTH,bn),xt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ge),xt.pixelStorei(B.UNPACK_SKIP_PIXELS,Tn),xt.pixelStorei(B.UNPACK_SKIP_ROWS,jn),xt.pixelStorei(B.UNPACK_SKIP_IMAGES,Ci),Nt===0&&G.generateMipmaps&&B.generateMipmap(Ht),xt.unbindTexture()},this.initRenderTarget=function(C){P.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),xt.unbindTexture()},this.resetState=function(){F=0,O=0,L=null,xt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const Jn=(i,t)=>Math.sign(i)*Math.abs(i)**t,lo=(i,t,e={})=>({...i,a:i.a+t,b:i.b+t,c:i.c+t,...e});function By(i,t,e,n=Math.PI){const s=new Un(1,t,e,0,Math.PI*2,0,n),o=s.attributes.position,r=s.attributes.normal;for(let a=0;a<o.count;a++){const l=o.getX(a),c=o.getY(a),h=o.getZ(a),u=Math.asin(Math.max(-1,Math.min(1,c))),d=Math.atan2(h,l),p=Math.cos(u),x=Math.sin(u),S=Math.cos(d),m=Math.sin(d);o.setXYZ(a,i.a*Jn(p,i.e1)*Jn(S,i.e2),i.b*Jn(x,i.e1),i.c*Jn(p,i.e1)*Jn(m,i.e2));const f=Jn(p,2-i.e1)*Jn(S,2-i.e2)/i.a,M=Jn(x,2-i.e1)/i.b,b=Jn(p,2-i.e1)*Jn(m,2-i.e2)/i.c,_=Math.hypot(f,M,b)||1;r.setXYZ(a,f/_,M/_,b/_)}return s}function hr(i,t,e){const n=1-Math.min(1,Math.abs(e/i.b))**(2/i.e1);if(n<=0)return 0;const s=n**(i.e1/i.e2)-Math.min(1,Math.abs(t/i.a))**(2/i.e2);return s<=0?0:i.c*s**(i.e2/2)}const zy=(i,t,e)=>-Math.atan((hr(i,t+.02,e)-hr(i,t-.02,e))/.04),Hy=(i,t,e)=>Math.atan((hr(i,t,e+.02)-hr(i,t,e-.02))/.04),fh=["none","clouds","hearts","hibiscus","plaid","stars"],Vy=[{seg:20,rings:14,round:16},{seg:12,rings:8,round:7},{seg:8,rings:6,round:6}],Gy=new te,su=new qi;class Wy{constructor(t,e,n){I(this,"items",[]);this.d=t,this.rig=e,this.lod=n}add(t,e,n,s=[0,0,0],o=[0,0,0],r=[1,1,1]){return su.setFromEuler(new Yi(...o)),t.applyMatrix4(Gy.compose(new N(...s),su,new N(...r))),this.items.push({geo:t,bone:e,paint:n}),t}blob(t,e,n,s,o,r){return this.add(By(t,this.lod.seg,this.lod.rings,r),e,n,s,o)}sphere(t,e,n,s,o){return this.add(new Un(t,Math.max(6,this.lod.seg-4),Math.max(4,this.lod.rings-2)),e,n,s,void 0,o)}cyl(t,e,n,s,o,r,a,l=!1){return this.add(new bo(t,e,n,this.lod.round,1,l),s,o,r,a)}cone(t,e,n,s,o,r,a){return this.add(new Aa(t,e,this.lod.round),n,s,o,r,a)}torus(t,e,n,s,o,r,a=Math.PI*2){return this.add(new fr(t,e,Math.max(4,this.lod.round/2),this.lod.round*2,a),n,s,o,r)}box(t,e,n,s,o,r,a){return this.add(new pn(t,e,n),s,o,r,a)}tube(t,e,n,s,o){const r=o(t.map(a=>new N(...a)));return this.add(new uh(r,this.lod.round*2,e,Math.max(5,this.lod.round/2)),n,s)}onFace(t,e,n,s,o,r,a,l=0,c=0){const h=hr(t,r,a)+l;return this.add(n,s,{outline:0,...o},[e[0]+r,e[1]+a,e[2]+h],[-Hy(t,r,a),zy(t,r,a),c])}}const ou=i=>new ie(i),Qn=128;function Xy(){const i=document.createElement("canvas");i.width=Qn*fh.length,i.height=Qn;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,i.width,i.height),t.fillStyle="#fff",t.strokeStyle="#fff";const e=(o,r)=>{t.save(),t.beginPath(),t.rect(o*Qn,0,Qn,Qn),t.clip(),t.translate(o*Qn,0),r(),t.restore()},n=(o,r,a)=>{t.beginPath(),t.arc(o,r,a,0,Math.PI*2),t.fill()};e(1,()=>{for(const[o,r]of[[30,40],[95,95]])n(o,r,14),n(o+16,r-6,16),n(o+32,r,13),t.fillRect(o,r,32,12)}),e(2,()=>{const o=(r,a,l)=>{t.beginPath(),t.moveTo(r,a+l*.9),t.bezierCurveTo(r-l*1.2,a+l*.1,r-l*.6,a-l*.8,r,a-l*.2),t.bezierCurveTo(r+l*.6,a-l*.8,r+l*1.2,a+l*.1,r,a+l*.9),t.fill()};o(32,36,16),o(96,96,16)}),e(3,()=>{for(const[o,r]of[[36,38],[98,94]])for(let a=0;a<5;a++)n(o+Math.cos(a/5*Math.PI*2)*13,r+Math.sin(a/5*Math.PI*2)*13,10)}),e(4,()=>{t.globalAlpha=.6;for(const o of[16,80])t.fillRect(o,0,22,Qn),t.fillRect(0,o,Qn,22);t.globalAlpha=1;for(const o of[24,88])t.fillRect(o,0,5,Qn),t.fillRect(0,o,Qn,5)}),e(5,()=>{const o=(r,a,l)=>{t.beginPath();for(let c=0;c<10;c++){const h=c/10*Math.PI*2-Math.PI/2,u=c%2?l*.45:l;t.lineTo(r+Math.cos(h)*u,a+Math.sin(h)*u)}t.fill()};o(32,36,14),o(96,96,12),o(90,24,6)});const s=new ur(i);return s.colorSpace=xi,s.minFilter=s.magFilter=Je,s.generateMipmaps=!1,s}let ss=null;function Ai(){return ss||(ss=new Ea(new Uint8Array([140,191,230,255]),4,1,wa),ss.minFilter=ss.magFilter=Ye,ss.needsUpdate=!0,ss)}let Ml=null,ru=null;function $y(){if(Ml)return Ml;ru=Xy();const i=new Ei({color:16777215,vertexColors:!0,gradientMap:Ai()});return i.onBeforeCompile=t=>{t.uniforms.uPatAtlas={value:ru},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 color2;
attribute vec4 aPat;
varying vec3 vColor2;
varying vec4 vPat;
varying vec2 vPatUv;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor2 = color2;
vPat = aPat;
vPatUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uPatAtlas;
varying vec3 vColor2;
varying vec4 vPat;
varying vec2 vPatUv;
`).replace("#include <color_fragment>",`#include <color_fragment>
        if (vPat.x > 0.5) {
          vec2 tuv = vec2((vPat.x + fract(vPatUv.x * vPat.y)) / ${fh.length.toFixed(1)}, fract(vPatUv.y * vPat.y * 0.5));
          float mask = texture2D(uPatAtlas, tuv).r;
          diffuseColor.rgb = mix(diffuseColor.rgb, vColor2, mask);
        }`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, diffuseColor.rgb, vPat.z);`)},i.customProgramCacheKey=()=>"peepl-char-v1",Ml=i,i}const Yy=`
#include <common>
#include <skinning_pars_vertex>
uniform float uWidthPx;
uniform vec2 uViewport;
attribute vec3 aHullNormal;
attribute float aOutline;
void main() {
  vec3 transformed = vec3(position);
  vec3 objectNormal = vec3(aHullNormal);
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <skinning_vertex>
  vec4 clip = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  vec3 nView = normalize(normalMatrix * objectNormal);
  vec2 nClip = (projectionMatrix * vec4(nView, 0.0)).xy;
  float l = length(nClip);
  if (l > 1e-5) clip.xy += (nClip / l) * (uWidthPx * aOutline * 2.0 / uViewport) * clip.w;
  gl_Position = clip;
}`,qy=`
uniform vec3 uColor;
void main() { gl_FragColor = vec4(uColor, 1.0); }`,Uc={uWidthPx:{value:2},uViewport:{value:new At(1920,1080)},uColor:{value:new ie(1118481).convertLinearToSRGB()}};let Hr=null;function jy(){return Hr||(Hr=new mn({uniforms:Uc,vertexShader:Yy,fragmentShader:qy,side:Qe}),Hr)}let je=null,ph=!1;const au=new At;function mh(){const i=navigator.deviceMemory;return ph||i!==void 0&&i<=4}function wl(){return ln||mh()}function lu(){const i=navigator.deviceMemory;return Math.min(devicePixelRatio||1,ph||i!==void 0&&i<=4?1.5:2)}function Oc(){je&&(je.setPixelRatio(lu()),je.setSize(innerWidth,innerHeight,!1),je.getDrawingBufferSize(au),Uc.uViewport.value.copy(au),Uc.uWidthPx.value=Math.min(3,Math.max(1.5,2*lu()*Math.max(.75,ba()))))}function vo(i={}){if(je)return je;ph=!!i.lowgpu;const t=document.getElementById("gl");return je=new Oy({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:!1}),je.outputColorSpace=Ke,je.toneMapping=Xn,je.setClearColor(0,0),je.shadowMap.type=tf,je.info.autoReset=!1,addEventListener("resize",Oc),Oc(),je}function _o(i){const t=document.getElementById("gl");t.style.display=i?"block":"none",t.style.pointerEvents=i?"auto":"none";const e=document.getElementById("hud3d");e.style.background=i&&mh()?"radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(17,17,17,0.22))":"",i&&Oc()}const ga={calls:0,tris:0};function gh(){je&&(ga.calls=je.info.render.calls,ga.tris=je.info.render.triangles,je.info.reset())}function Zy(i){const{flow:t,loop:e,store:n,autoplay:s}=i;return{ready:i.ready,state:()=>{var o;return{screen:t.id??"S0",t:t.t,sim:((o=Tt.sim)==null?void 0:o.call(Tt))??{day:1,time:"13:00",speed:n.data.settings.speed,tier:0,km:0,radius:0},trust:Number(n.data.progress.trust??0),released:!!n.data.progress.released,handshake:!!n.data.progress.handshake,met:{},settings:{...n.data.settings},rigOk:In.rigOk}},go(o,r){return Qu(o)?(In.sub=(r==null?void 0:r.sub)??null,t.go(o)):Promise.reject(new Error(`unknown screen ${o}`))},replay:()=>{var o;(o=Tt.replaySetpiece)!=null&&o.call(Tt)||t.replay()},advance(o,r=!0){return e.advance(o,r),Promise.resolve()},pause:()=>e.paused=!0,resume:()=>e.paused=!1,tap:()=>{s.tap()||t.input({type:"tap"})},choose:o=>{var r,a;return(a=(r=t.current)==null?void 0:r.choose)==null?void 0:a.call(r,o)},release(){Object.assign(n.data.progress,{trust:100,released:!0}),n.save(),t.go("S6")},set(o,r){var a;n.setSetting(o,r),o==="outline"&&((a=Tt.outline)==null||a.call(Tt,r!=="none"))},reset(){n.reset();const o=new URLSearchParams(location.search);o.delete("screen"),o.delete("t");const r=o.toString();location.replace(`${location.pathname}${r?`?${r}`:""}`)},stats:()=>({fps:e.fps,calls:ga.calls,tris:ga.tris,textures:0,chars:In.chars,lod:In.lod}),cast:o=>{var r;return(r=Tt.cast)==null?void 0:r.call(Tt,o)},shape:(o,r)=>{var a;return(a=Tt.shape)==null?void 0:a.call(Tt,o,r)},viewer:Tt,setTime:(o,r)=>{var a;return(a=Tt.setTime)==null?void 0:a.call(Tt,o,r)},tick:o=>{var r;return(r=Tt.tick)==null?void 0:r.call(Tt,o)},setSpeed:o=>n.setSetting("speed",o),setTier:o=>{var r;return(r=Tt.setTier)==null?void 0:r.call(Tt,o)},walk:o=>{var r;return(r=Tt.walk)==null?void 0:r.call(Tt,o)},moveYou:(o,r)=>{var a;return(a=Tt.moveYou)==null?void 0:a.call(Tt,o,r)},shot:o=>{var r;return(r=Tt.shot)==null?void 0:r.call(Tt,o)},follow:o=>{var r;return(r=Tt.follow)==null?void 0:r.call(Tt,o)},legibility:()=>{var o;return((o=Tt.legibility)==null?void 0:o.call(Tt))??{}},dropEvent:o=>{var r;return(r=Tt.dropEvent)==null?void 0:r.call(Tt,o)},mirror:o=>{var r;return((r=Tt.mirror)==null?void 0:r.call(Tt,o))??""}}}const Ky=[0,1,4,16,.25],Jy=[],Qy=`
#debug{height:40px;font-family:var(--face-pixel);font-size:22px;color:var(--white);pointer-events:none}
#debug .strip{display:flex;align-items:center;gap:8px;height:40px;padding:0 10px;background:var(--ink);pointer-events:auto;overflow-x:auto;white-space:nowrap}
#debug .strip > *{flex:none}
#debug button,#debug select{font:inherit;color:var(--white);background:var(--ink);border:2px solid var(--white);border-radius:999px;padding:1px 12px 3px;height:30px;line-height:22px}
#debug button[aria-pressed=true]{background:var(--white);color:var(--ink)}
#debug button:disabled{opacity:.4;cursor:default}
#debug .fps{min-width:70px}
#debug .collapsed{width:40px;height:40px;display:grid;place-items:center;background:var(--ink);pointer-events:auto;border:0;border-radius:0;padding:0}
`;function t1(i,t,e,n,s){const o=H("div",{id:"debug"});o.append(H("style",{},Qy));const r=H("div",{class:"strip",role:"toolbar","aria-label":"director bar"}),a=H("button",{class:"collapsed","aria-label":"open director bar",title:"director bar (`)"});a.append(H("span",{style:"display:block;width:10px;height:18px;background:var(--white)"})),o.append(r,a),document.body.append(o);const l=la.map(y=>y.id),c=y=>{const T=l.indexOf(i.state().screen);i.go(l[(T+y+l.length)%l.length])},h=H("select",{"aria-label":"screen"});for(const y of la)if(h.append(H("option",{value:y.id},`${y.id} ${y.name}`)),y.id==="S8")for(const T of["contact","cafe","end"])h.append(H("option",{value:`S8:${T}`},`S8 · ${T}`));h.addEventListener("change",()=>{const[y,T]=h.value.split(":");i.go(y,T?{sub:T}:void 0)});const u=(y,T,A)=>{const k=H("button",{title:A});return k.textContent=y,k.addEventListener("click",T),k},d=(y,T,A)=>{const k=u(y,()=>{A(!T()),g()});return p.push([k,T]),k},p=[],x=H("select",{"aria-label":"speed"});for(const y of Ky)x.append(H("option",{value:y},y===.25?"ui 0.25x":y===0?"pause":`${y}x`));x.addEventListener("change",()=>i.set("speed",Number(x.value)));const S=H("select",{"aria-label":"cast"});for(const y of n)S.append(H("option",{value:y},y));S.addEventListener("change",()=>i.cast(S.value));const m=u("--:--",()=>i.tick(3600),"sim time: +1 h (S8)"),f=(y,T,A,k)=>{const F=H("select",{"aria-label":y});for(const O of T)F.append(H("option",{value:O},`${y} ${O}`));return F.value=k(),F.addEventListener("change",()=>A(F.value)),F},M=f("tod",["auto","day","dusk"],y=>i.set("tod",y),()=>t.data.settings.tod),b=f("gfx",["auto","16bit","hd"],y=>i.set("gfx",y),()=>t.data.settings.gfx),_=u("walk +0.5 km",()=>i.walk(.5),"S8 only"),R=H("select",{"aria-label":"drop event"});R.append(H("option",{value:""},"event"));for(const y of s)R.append(H("option",{value:y},y));R.addEventListener("change",()=>{R.value&&i.dropEvent(R.value),R.value=""});const v=H("span",{class:"fps"});r.append(u("prev",()=>c(-1),"previous screen"),h,u("next",()=>c(1),"next screen"),u("replay",()=>i.replay()),d("auto",()=>t.data.settings.auto,y=>i.set("auto",y)),x,d("outline",()=>t.data.settings.outline!=="none",y=>i.set("outline",y?"ink":"none")),S,m,M,b,_,R,...Jy.map(([y,T])=>{const A=u(`${y} ${T}`,()=>{},`arrives in ${T}`);return A.disabled=!0,A}),d("reduce motion",()=>t.data.settings.reduceMotion,y=>i.set("reduceMotion",y)),v,u("reset",()=>{confirm(e)&&i.reset()}),u("×",()=>E(!0),"collapse (`)"));const E=y=>{t.setSetting("debugCollapsed",y),r.style.display=y?"none":"flex",a.style.display=y?"grid":"none"};a.addEventListener("click",()=>E(!1)),addEventListener("keydown",y=>{y.key==="`"&&E(!t.data.settings.debugCollapsed)}),E(t.data.settings.debugCollapsed);function g(){for(const[y,T]of p)y.setAttribute("aria-pressed",String(T()))}return g(),{update(){const y=i.state();h.value!==y.screen&&(h.value=y.screen),Number(x.value)!==t.data.settings.speed&&(x.value=String(t.data.settings.speed)),v.textContent=`${Math.round(i.stats().fps)} fps`,m.textContent=y.screen==="S8"?y.sim.time:"--:--"}}}class e1{constructor(){I(this,"el",document.getElementById("field"));I(this,"dots",!1)}set(t,e){this.el.style.backgroundColor=`var(--${t})`,this.dots=e,this.el.style.backgroundImage=e?"radial-gradient(circle, var(--lit-dots) 3px, transparent 3.6px)":"none",this.el.style.backgroundSize=this.el.style.backgroundPosition=""}glow(t,e=0){this.dots=!1;const n=`color-mix(in srgb, var(--purple), var(--pink) ${Math.round(e*45)}%)`;this.el.style.backgroundImage=`radial-gradient(ellipse at 50% 55%, color-mix(in srgb, ${n} ${Math.round(t*100)}%, transparent), transparent 70%)`}update(t,e){if(!this.dots)return;const n=ba(),[s,o]=e?[0,0]:Tp(t);this.el.style.backgroundSize=`${48*n}px ${48*n}px`,this.el.style.backgroundPosition=`${s*n}px ${o*n}px`}}const n1=.18;class i1{constructor(){I(this,"el");I(this,"alpha",0);I(this,"target",0);I(this,"hideAt",1/0);I(this,"t",0);this.el=H("div",{class:"caption pixel",style:["position:absolute;left:50%;bottom:36px;transform:translateX(-50%);width:max-content;max-width:84%;text-align:center","background:var(--ink);color:var(--white);font-size:50px;padding:10px 26px 12px;border-radius:999px;opacity:0"].join(";")}),Ts("captions").append(this.el)}show(t,e){this.el.textContent=t,ho(t),this.target=1,this.hideAt=e===void 0?1/0:this.t+e}hide(){this.target=0}clear(){this.target=0,this.alpha=0,this.render()}get visible(){return this.alpha>0}update(t){this.t+=t,this.t>=this.hideAt&&(this.target=0);const e=t/n1;this.alpha=this.target>this.alpha?Xi(this.alpha+e):Math.max(this.target,this.alpha-e),this.render()}render(){Bt(this.el,{opacity:String(this.alpha),visibility:this.alpha>0?"visible":"hidden"})}}class Fs{constructor(t,e,n){I(this,"shown",null);this.captions=t,this.texts=e,this.cues=n}update(t){const e=this.cues.find(s=>t>=s.at&&t<(s.until??1/0))??null,n=(e==null?void 0:e.key)??null;n!==this.shown&&(this.shown=n,n?this.captions.show(this.texts[n]??""):this.captions.hide())}}const cu="✓ ";class s1{constructor(){I(this,"el",null);I(this,"t",0);I(this,"until",0)}show(t,e=3){var o;(o=this.el)==null||o.remove();const n=t.startsWith(cu),s=n?t.slice(cu.length):t;this.el=rn(n?[Ms("check",34,"var(--yellow)"),s]:[s],{size:40,color:"yellow"}),this.el.classList.add("toast"),this.el.setAttribute("role","status"),this.el.setAttribute("aria-label",s),Bt(this.el,{position:"absolute",left:Ue("auto",60),right:Ue(50,"auto"),top:150,transformOrigin:"50% 0"}),Ts("toast").append(this.el),this.t=0,this.until=e,this.update(0)}hide(){var t;(t=this.el)==null||t.remove(),this.el=null}update(t){if(this.el){if(this.t+=t,this.t>=this.until){this.hide();return}this.el.style.transform=`scale(${le(this.t,0,.4,se.pop)})`}}}const o1=.5,r1=.5;function a1(i){const t=_s(i);let e,n,s=0,o=!1;const r=t.field==="ink"||t.field==="night";return{id:i,mount(a,l){e=a,n=H("div",{class:"placeholder",style:`position:absolute;left:0;top:0;width:1920px;height:1080px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;color:var(--${r?"white":"ink"})`},H("div",{class:"display",style:"font-size:220px"},i),H("div",{class:"pixel",style:"font-size:54px"},t.name)),l.append(n)},enter(){s=0,o=!1,this.update(0,0)},update(a,l){s=l,n.style.transform=`scale(${le(s,0,.45,se.pop)})`,!o&&t.caption&&s>=r1&&(o=!0,e.captions.show(e.copy.captions[t.caption]??""))},landed:()=>s>=o1,onInput(a){},exit(){},unmount(){n.remove()},seek(a){this.update(0,a)}}}const pr=i=>`/peepls-demo/${i}`;class ka{constructor(t,e={}){I(this,"el");I(this,"img");I(this,"hgt",0);this.spec=t,this.img=H("img",{src:pr(t.body),alt:"",draggable:"false",style:"display:block;width:100%;height:100%"}),this.el=H("div",{class:"sprite",style:`position:absolute;transform-origin:${t.footX*100}% 100%`,...e},this.img)}get height(){return this.hgt}place(t,e,n){this.hgt=n;const s=n*this.spec.aspect;return Bt(this.el,{left:t-s*this.spec.footX,top:e-n,width:s,height:n}),this}pose(t){const e=t.phase??0,n=t.walk??0,s=-Math.abs(Math.sin(t.t*10+e))*this.hgt*.03*n,o=Math.sin(t.t*10+e)*3*n;Bt(this.el,{transform:`translateY(${s-(t.hop??0)}px) rotate(${o+(t.rot??0)}deg) scale(${t.scale??1}) scaleY(${Ap(t.t,e)*(t.squash??1)})`,opacity:String(t.opacity??1)})}}const l1=2,c1=.25;class h1{constructor(t,e,n,s=0){I(this,"el");this.at=n;const o=H("div",{style:"position:absolute;left:50%;bottom:-14px;width:20px;height:20px;margin-left:-10px;background:var(--white);border-right:5px solid var(--ink);border-bottom:5px solid var(--ink);transform:rotate(45deg)"}),r=H("div",{class:"pixel",style:`position:relative;background:var(--white);border:5px solid var(--ink);border-radius:16px;padding:6px 16px 8px;font-size:${Math.round(e*.075)}px;color:var(--ink);white-space:nowrap;margin-bottom:22px`},H("span",{},t),o);this.el=H("div",{class:"life-tag",style:`position:absolute;left:50%;bottom:${100+s*100}%;transform-origin:50% 100%`},r)}update(t,e){const[n,s]=Fe(t,this.at,.3,e),o=1-le(t,this.at+l1,c1,se.enter);Bt(this.el,{transform:`translateX(-50%) scale(${n})`,opacity:String(s*o),visibility:s*o>0?"visible":"hidden"})}}const Bc="stroke:var(--ink);stroke-width:9;stroke-linejoin:round;stroke-linecap:round",Ve=(i,t="")=>`fill:var(--${i});${Bc}${t}`,fe=(i,t,e,...n)=>ae(i,{...t,style:e},...n),Sn=(i,t,e)=>fe("path",{d:i},`fill:none;stroke:var(--${t});stroke-width:${e};stroke-linecap:round`);function d1(i,t){const e=ae("g",{});let n=()=>{};switch(i){case"coffee":{const o=[0,1].map(()=>Sn("","ink",6));e.append(...o,fe("path",{d:"M 338 652 L 408 652 L 399 746 L 347 746 Z"},Ve("white")),fe("rect",{x:342,y:680,width:62,height:30},Ve("pink",";stroke-width:6")),fe("rect",{x:330,y:630,width:86,height:24,rx:9},Ve("ink"))),n=r=>o.forEach((a,l)=>{const c=(r*.7+l*.5+t)%1;a.setAttribute("d",`M ${356+l*26} ${612-c*70} q 12 -16 0 -32 q -12 -16 0 -32`),a.style.opacity=String(Math.sin(c*Math.PI)*.8)});break}case"briefcase":{const o=ae("g",{},fe("path",{d:"M 40 756 q 0 -38 28 -38 q 28 0 28 38"},`fill:none;${Bc}`),fe("rect",{x:-4,y:752,width:144,height:100,rx:12},Ve("brown")),Sn("M -4 790 L 140 790","ink",6),fe("rect",{x:54,y:744,width:28,height:18,rx:4},Ve("yellow",";stroke-width:6")));e.append(o),n=(r,a)=>o.setAttribute("transform",`rotate(${Math.sin(r*10+t)*5*a} 68 722)`);break}case"balloon":{const o=ae("g",{},fe("path",{d:"M 362 736 C 430 600, 380 420, 480 232"},"fill:none;stroke:var(--ink);stroke-width:5"),fe("ellipse",{cx:480,cy:140,rx:66,ry:80},Ve("pink")),fe("path",{d:"M 468 226 L 492 226 L 480 208 Z"},Ve("pink",";stroke-width:6")),fe("ellipse",{cx:456,cy:104,rx:13,ry:22},"fill:var(--lit-white-85)"));e.append(o),n=r=>o.setAttribute("transform",`rotate(${Math.sin(r*1.8+t)*6} 362 736)`);break}case"flowers":e.append(Sn("M 344 640 L 350 560 M 380 640 L 388 534 M 408 640 L 426 570","lit-stem",9),fe("circle",{cx:346,cy:556,r:30},Ve("pink")),fe("circle",{cx:346,cy:556,r:9},"fill:var(--ink)"),fe("circle",{cx:388,cy:530,r:32},Ve("yellow")),fe("circle",{cx:388,cy:530,r:9},"fill:var(--ink)"),fe("circle",{cx:428,cy:566,r:28},Ve("cyan")),fe("circle",{cx:428,cy:566,r:8},"fill:var(--ink)"),fe("path",{d:"M 316 630 L 430 630 L 376 790 Z"},Ve("cream")));break;case"bag":e.append(fe("rect",{x:18,y:628,width:36,height:140,rx:18,transform:"rotate(-16 36 700)"},Ve("lit-baguette")),Sn("M 76 616 q -18 30 6 64 M 96 620 q 14 30 -8 62","lit-stem",9),fe("path",{d:"M 40 742 q 26 -40 52 0"},`fill:none;${Bc}`),fe("rect",{x:-20,y:730,width:170,height:150,rx:8},Ve("lit-cardboard")),Sn("M -20 762 L 150 762","ink",5));break;case"umbrella":{const o=ae("g",{},Sn("M 362 740 L 300 -40","ink",10),Sn("M 362 740 q 4 34 -24 34","ink",10),fe("path",{d:"M 50 -40 A 250 250 0 0 1 550 -40 Q 487 -76 425 -40 Q 362 -76 300 -40 Q 237 -76 175 -40 Q 112 -76 50 -40 Z"},Ve("cyan")),fe("path",{d:"M 300 -290 Q 240 -160 175 -40 M 300 -290 Q 360 -160 425 -40"},"fill:none;stroke:var(--ink);stroke-width:6"),fe("circle",{cx:300,cy:-296,r:11},"fill:var(--ink)"));e.append(o),n=r=>o.setAttribute("transform",`rotate(${Math.sin(r*2+t)*2} 362 736)`);break}case"headphones":{const o=ae("g",{},fe("path",{d:"M 0 40 L 0 -10 L 30 -18 L 30 30"},"fill:none;stroke:var(--ink);stroke-width:7"),fe("circle",{cx:-8,cy:40,r:11},"fill:var(--ink)"),fe("circle",{cx:22,cy:30,r:11},"fill:var(--ink)"));e.append(Sn("M 110 150 C 96 -50, 336 -50, 322 150","ink",24),Sn("M 110 150 C 96 -50, 336 -50, 322 150","pink",10),fe("rect",{x:84,y:108,width:52,height:92,rx:20},Ve("pink")),fe("rect",{x:296,y:108,width:52,height:92,rx:20},Ve("pink")),o),n=r=>{const a=(r*.9+t)%1;o.setAttribute("transform",`translate(${390+a*40} ${60-a*120})`),o.style.opacity=String(Math.sin(a*Math.PI))};break}case"dog":{const o=Sn("","ink",12),r=ae("g",{},Sn("M 476 975 q -34 -20 -26 -64","ink",12));e.append(Sn("M 362 742 Q 500 860 618 930","red",6),fe("ellipse",{cx:560,cy:1080,rx:110,ry:12},"fill:var(--ink)"),o,r,fe("ellipse",{cx:560,cy:995,rx:88,ry:48},Ve("white")),fe("circle",{cx:650,cy:930,r:46},Ve("white")),fe("ellipse",{cx:690,cy:950,rx:26,ry:18},Ve("white")),fe("circle",{cx:712,cy:942,r:9},"fill:var(--ink)"),fe("circle",{cx:660,cy:918,r:6},"fill:var(--ink)"),fe("path",{d:"M 626 900 q -34 8 -28 56 q 24 -4 34 -36 Z"},"fill:var(--ink)"),Sn("M 612 956 q 20 16 44 8","red",10)),n=(a,l)=>{const c=Math.sin(a*12+t)*10*l;o.setAttribute("d",`M 505 1030 L ${500+c} 1076 M 532 1034 L ${536-c} 1078 M 590 1034 L ${586+c} 1078 M 618 1030 L ${622-c} 1076`),r.setAttribute("transform",`rotate(${Math.sin(a*14)*14} 476 975)`)};break}}return{el:ae("svg",{viewBox:"0 0 425 1089",style:"position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none"},e),update:n}}function xa(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function $f(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const oo=(...i)=>$f(xa(i.join("|"))),Wi=i=>{const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},Sl={dur:6.4,px:900,parallax:.55},ti={from:6.5,to:7.55,cx:560,cy:560},u1=7.7,f1=8.5,hu=8.95,p1=9.6,du=9.4,uu=[{y:880,h:400},{y:1010,h:520}],fu=[150,1150,2150,3150],Vr=[{prop:"coffee",lane:0,x0:900,v:-100,ph:.8},{prop:"headphones",lane:0,x0:1500,v:-110,ph:.3},{prop:"dog",lane:1,x0:1150,v:120,ph:2.6},{prop:"umbrella",lane:0,x0:2300,v:-90,ph:1.1,lift:.3},{prop:"flowers",lane:1,x0:1750,v:150,ph:.2},{prop:"bag",lane:0,x0:1900,v:-120,ph:2.2},{prop:"briefcase",lane:0,x0:2700,v:-100,ph:1.7}],Rn={x0:620,v:150,stopAt:5.6,ph:.4,h:520,y:1010};function m1(i){const t=oo(i,"crowd","buildings"),e=["cream","pink","white","cyan"];let n=-220;return Array.from({length:9},(s,o)=>{const r=260+Math.round(t()*180),a=460+Math.round(t()*260),l=Math.max(1,Math.floor((r-40)/100)),c=Math.max(1,Math.floor((a-120)/116)),h=Array.from({length:l*c},(d,p)=>H("div",{style:`border:5px solid var(--ink);background:var(--${(o+p)%3?"white":"yellow"})`})),u=H("div",{style:[`position:absolute;left:${n}px;top:${820-a}px;width:${r}px;height:${a+20}px;background:var(--${e[o%4]})`,`border:6px solid var(--ink);display:grid;grid-template-columns:repeat(${l},56px);grid-auto-rows:72px`,"justify-content:space-evenly;align-content:start;row-gap:44px;padding-top:44px"].join(";")},...h);return n+=r+30,u})}function g1(){let i,t=!1,e=0,n,s,o,r,a=[],l=[],c,h,u,d=[],p,x,S,m,f=!1;const M=(b,_,R,v,E,g,y,T=0)=>{const A=new ka(n,{class:"sprite joe"}).place(0,b.y,b.h),k=d1(_,y),F=new h1(R,b.h,v,T);return A.el.append(k.el,F.el),{sprite:A,prop:k,tag:F,x0:E,v:g,ph:y}};return{id:"S0",mount(b,_){i=b;const R=b.copy.S0;n=b.data.cast.cast.find(T=>T.id==="joe").sprite,m=new Fs(b.captions,b.copy.captions,[{key:"crowd1",at:.5,until:3.4},{key:"crowd2",at:3.6,until:6.5}]),o=H("div",{class:"city",style:"position:absolute;inset:0"},...m1(b.params.seed)),r=H("div",{style:`position:absolute;left:0;top:820px;width:1920px;height:${Ue(260,700)}px;background-color:var(--cream);border-top:6px solid var(--ink);background-image:repeating-linear-gradient(90deg,var(--lit-joint) 0 5px,transparent 5px 180px)`}),l=Vr.map((T,A)=>{const[k,F]=R.tags[A];return M(uu[T.lane],T.prop,k,F,T.x0,T.v,T.ph,T.lift)});const[v,E]=R.tags[7];c=M({y:Rn.y,h:Rn.h},"balloon",v,E,Rn.x0,Rn.v,Rn.ph),c.sprite.el.classList.add("hero"),a=fu.map(()=>H("div",{style:"position:absolute;top:0;left:0"},H("div",{style:"position:absolute;left:-8px;top:360px;width:16px;height:545px;background:var(--ink)"}),H("div",{style:"position:absolute;left:-46px;top:326px;width:92px;height:46px;border-radius:24px;background:var(--yellow);border:6px solid var(--ink)"}))),s=H("div",{class:"s0-crowd",style:`position:absolute;left:0;top:0;width:1920px;height:${Ue(1080,1500)}px;background:var(--yellow);overflow:hidden`},o,r,...l.filter((T,A)=>Vr[A].lane===0).map(T=>T.sprite.el),...a,...l.filter((T,A)=>Vr[A].lane===1).map(T=>T.sprite.el),c.sprite.el),h=ae("path",{"fill-rule":"evenodd",style:"fill:var(--ink)"}),u=ae("svg",{width:1920,height:1080,style:"position:absolute;inset:0;overflow:visible"},h),d=[...R.wordmark].map(T=>H("span",{class:"display",style:`display:inline-block;font-size:${Ue(220,180)}px;line-height:0.9;color:var(--yellow);-webkit-text-stroke:7px var(--ink);paint-order:stroke fill;text-shadow:0 11px 0 var(--pink)`},T));const g=H("div",{id:"s0-wordmark",style:"display:flex;gap:2px"},...d);p=H("div",{class:"pixel s0-line1",style:"font-size:64px;color:var(--white);margin-top:30px"},R.line1),x=H("div",{class:"pixel s0-line2",style:"font-size:64px;color:var(--yellow)"},R.line2),S=H("div",{class:"pixel s0-sub",style:"font-size:36px;color:var(--lit-white-60)"},R.subline);const y=H("div",{class:"s0-title",style:"position:absolute;left:880px;width:900px;top:300px;display:flex;flex-direction:column;align-items:center;gap:22px"},g,p,x,S);Pe(y,{left:90,top:1220}),Cs(_,ti.cx,ti.cy,1.5,540,540),_.append(s,u,y)},enter(){t=i.flow.reduced,this.update(0,0)},update(b,_){e=_;const R=t?-900:-le(e,0,Sl.dur,se.draw)*Sl.px;o.style.transform=`translateX(${R*Sl.parallax}px)`,r.style.backgroundPosition=`${R}px 0`,a.forEach((T,A)=>{const k=fu[A]+R;T.style.display=k<-100||k>2020?"none":"block",T.style.transform=`translateX(${k}px)`}),l.forEach((T,A)=>{const k=uu[Vr[A].lane],F=T.x0+T.v*e+R,O=F>-500&&F<2400;T.sprite.el.style.display=O?"block":"none",T.sprite.place(F,k.y,k.h).pose({t:e,phase:T.ph*3,walk:1}),T.prop.update(e,1),T.tag.update(e,t)});const v=e<5.3?1:Math.min(1,Math.max(0,(Rn.stopAt-e)/.3)),E=Rn.x0+Rn.v*Math.min(Math.max(e,0),Rn.stopAt)+R,g=t?0:uo(e,6.1,30,.38)+uo(e,8.3,46,.45);c.sprite.place(E,Rn.y,Rn.h).pose({t:e,phase:Rn.ph,walk:v,hop:g}),c.prop.update(e,v),c.tag.update(e,t);const y=t?1:14-13*le(e,ti.from,ti.to-ti.from,se.draw);u.style.display=!t&&y>13.5?"none":"block",u.style.opacity=t?String(le(e,ti.from,.25,se.enter)):"1",h.setAttribute("d",x1(ti.cx,ti.cy,y)),d.forEach((T,A)=>{const k=u1+A*.08,[F,O]=Fe(e,k,.5,t),L=t?0:-18+18*le(e,k,.5,se.pop),V=t?0:Math.sin(e*3+A*.7)*6;Bt(T,{transform:`translateY(${V}px) rotate(${L}deg) scale(${F})`,opacity:String(O)})}),e>=hu&&!f&&(f=!0,ho(`${i.copy.S0.wordmark}. ${i.copy.S0.line1} ${i.copy.S0.line2}`));for(const[T,A]of[[p,f1],[x,hu],[S,p1]]){const[k,F]=Fe(e,A,.4,t);Bt(T,{transform:`scale(${k})`,opacity:String(F)})}m.update(e)},landed:()=>e>=du,pillCta:!0,autoPillTop:ln,onInput(b){(b.type==="tap"||b.type==="key"&&(b.key===" "||b.key==="Enter"))&&(e<ti.from?i.flow.seek(ti.from):e>=du&&i.flow.next())},exit(){},unmount(){},seek(b){this.update(0,b)}}}function x1(i,t,e){const n=150*e,s=70*e,o=130*e,r=t+Math.sqrt(n*n-s*s),a=t+420*e;return`M -2000 -2000 H 4000 V 3000 H -2000 Z M ${i-s} ${r} A ${n} ${n} 0 1 1 ${i+s} ${r} L ${i+o} ${a} L ${i-o} ${a} Z`}class xh{constructor(t){I(this,"el");I(this,"screen");I(this,"bezel");this.bezel=H("div",{"data-morph":"bezel",style:"position:absolute;inset:0;border-radius:72px;background:var(--ink);box-shadow:0 30px 60px var(--lit-phone-shadow)"}),this.screen=H("div",{"data-morph":"screen",style:"position:absolute;left:16px;top:16px;width:488px;height:948px;border-radius:56px;background:var(--cream);overflow:hidden"},H("div",{class:"pixel",style:"position:absolute;left:24px;top:18px;font-size:26px;color:var(--ink)"},t),H("div",{style:"position:absolute;left:174px;top:14px;width:140px;height:30px;border-radius:999px;background:var(--ink)"}),H("div",{style:"position:absolute;right:24px;top:20px;width:36px;height:18px;border-radius:5px;border:3px solid var(--ink);padding:2px"},H("div",{style:"width:70%;height:100%;background:var(--ink)"}))),this.el=H("div",{class:"phone",style:"position:absolute;left:700px;top:50px;width:520px;height:980px;transform-origin:260px 490px"},this.bezel,this.screen)}set(t,e){Bt(this.el,{transform:`translateY(${t}px) scale(${e})`})}}class v1{constructor(t,e,n){I(this,"el");I(this,"on",!1);I(this,"onAt",-1/0);this.label=t,this.colour=e,this.popAt=n,this.el=H("button",{class:"chip pixel","aria-pressed":"false",style:"position:absolute;width:208px;height:62px;border-radius:999px;border:5px solid var(--ink);background:var(--white);font-size:36px;color:var(--ink);display:flex;align-items:center;justify-content:center;pointer-events:auto"}),this.el.textContent=t}set(t,e){this.on=t,t&&(this.onAt=e),this.el.setAttribute("aria-pressed",String(t)),this.el.style.background=t?`var(--${this.colour})`:"var(--white)"}update(t,e){const[n,s]=Fe(t,this.popAt,.4,e),o=this.on&&!e?1+.08*Math.exp(-(t-this.onAt)*8):1;Bt(this.el,{transform:`scale(${n*o})`,opacity:String(s)})}}class _1{constructor(t,e,n,s){I(this,"el");I(this,"track");I(this,"knob");I(this,"value");I(this,"ends");this.value=n,this.ends=[t,e],this.track=H("div",{style:"position:absolute;left:0;top:50px;width:408px;height:14px;border-radius:999px;background:var(--white);border:4px solid var(--ink)"}),this.knob=H("div",{class:"knob",style:"position:absolute;top:35px;width:44px;height:44px;border-radius:50%;background:var(--pink);border:5px solid var(--ink)"}),this.el=H("div",{class:"slider",role:"slider",tabindex:"0","aria-label":`${t} to ${e}`,"aria-valuemin":"0","aria-valuemax":"1",style:"position:absolute;width:408px;height:79px;pointer-events:auto;touch-action:none;cursor:pointer"},H("div",{class:"pixel",style:"position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;font-size:30px;color:var(--ink)"},H("span",{},t),H("span",{},e)),this.track,this.knob);const o=r=>{const a=this.track.getBoundingClientRect();this.set(Math.min(1,Math.max(0,(r.clientX-a.left)/a.width))),s(this.value)};this.el.addEventListener("pointerdown",r=>{this.el.setPointerCapture(r.pointerId),o(r)}),this.el.addEventListener("pointermove",r=>{this.el.hasPointerCapture(r.pointerId)&&o(r)}),this.set(n)}set(t){this.value=t,this.el.setAttribute("aria-valuenow",t.toFixed(2)),this.el.setAttribute("aria-valuetext",`${Math.round(t*100)} % ${this.ends[1]}`),Bt(this.knob,{left:408*t-22})}}function y1(i){const t=H("button",{class:"btn display",style:"position:absolute;width:368px;height:84px;border-radius:999px;background:var(--ink);color:var(--yellow);font-size:34px;display:flex;align-items:center;justify-content:center;pointer-events:auto"});return t.textContent=i,t}const Bo={at:.05,dur:.65,from:1150},b1=.35,M1=.8,pu=800,mu=590,El=.5,w1=.45,gu=.2,ei=[.6,1.05,1.55,2.05,2.35,2.85,3.05,3.4],Gr=[520,132,356,132,244,154,400,540],Al=[960,231,231,311,516,516,632,1e3],S1=[1.05,1.55,2.05],Ui={from:2.4,to:2.85,value:.28},Tl=3,E1=6;function os(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*se.draw((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}function A1(){let i,t=!1,e=!0,n=!1,s=0,o,r=[],a,l,c=-1/0,h=!1,u,d=[],p,x=pu;const S=new Set,m=(_,R)=>{const v=H("div",{class:"ripple",style:"position:absolute;border-radius:50%;border:5px solid var(--ink);pointer-events:none"});o.screen.append(v),d.push({el:v,at:s,x:_,y:R})},f=()=>{i.store.data.progress.profile={chips:r.filter(_=>_.on).map(_=>_.label),loud:Number(a.value.toFixed(2))},i.store.save()},M=(_,R=!1)=>{const v=r[_];if(!(!v||h)){if(v.set(!v.on,s),!R){const E=v.el.getBoundingClientRect(),g=o.screen.getBoundingClientRect(),y=488/g.width;m((E.left+E.width/2-g.left)*y,(E.top+E.height/2-g.top)*y)}f()}},b=()=>{h||!r.some(_=>_.on)||(c=s,f())};return{id:"S1",mount(_,R){i=_;const v=_.copy.S1;x=_.params.campaign?mu:pu,p=new Fs(_.captions,_.copy.captions,[{key:"profile",at:.5}]),o=new xh(v.clock);const E=o.screen;E.append(H("div",{class:"display",style:"position:absolute;left:0;right:0;top:74px;text-align:center;font-size:52px;color:var(--ink)"},v.heading),H("div",{class:"pixel",style:"position:absolute;left:0;right:0;top:140px;text-align:center;font-size:30px;color:var(--lit-subline)"},v.sub)),r=v.chips.map(([g,y],T)=>{const A=new v1(g,y,b1+T*.07);return Bt(A.el,{left:T%2?252:28,top:200+Math.floor(T/2)*80}),A.el.addEventListener("click",k=>{k.stopPropagation(),M(T)}),E.append(A.el),A}),a=new _1(v.sliderLeft,v.sliderRight,El,()=>f()),Bt(a.el,{left:40,top:454}),l=y1(v.button),Bt(l,{left:60,top:x}),l.addEventListener("click",g=>{g.stopPropagation(),b()}),u=H("div",{class:"finger",style:"position:absolute;width:68px;height:68px;border-radius:50%;background:var(--lit-touch);border:4px solid var(--white);pointer-events:none;display:none"}),E.append(a.el,l,u),E.addEventListener("pointerdown",()=>n=!1),Cs(R,...Xc),R.append(o.el)},enter(_){t=i.flow.reduced,e=_!=="S2"&&_!=="S3",n=i.store.data.settings.auto,this.update(0,0)},update(_,R){s=R;const[v,E]=t?[1,le(s,0,.2,se.enter)]:[1,1],g=e&&!t?Bo.from*(1-le(s,Bo.at,Bo.dur,se.pop)):0;o.set(g,v),o.el.style.opacity=String(E);const y=s-E1;if(n&&!h){S1.forEach((Z,et)=>{y>=Z&&!S.has(et)&&(S.add(et),r[et].on||M(et,!0),m(os(ei,Gr,Z),os(ei,Al,Z)))}),y>=Ui.from&&y<=Ui.to+.05&&(a.set(El+(Ui.value-El)*le(y,Ui.from,Ui.to-Ui.from,se.draw)),S.has(10)||(S.add(10),m(os(ei,Gr,Ui.from),os(ei,Al,Ui.from))));const O=Z=>os(ei,Al,Z)+(x-mu)*le(Z,2.85,.2,se.draw);y>=Tl&&c<0&&(m(os(ei,Gr,Tl),O(Tl)),b());const L=os(ei,Gr,y),V=O(y),U=y>ei[0]&&y<ei[ei.length-1];Bt(u,{display:U?"block":"none",left:L-34,top:V-34})}else u.style.display="none";r.forEach(O=>O.update(s,t));const[T,A]=Fe(s,M1,.4,t),k=1-.06*Math.sin(Math.PI*Xi((s-c)/gu)),F=r.some(O=>O.on);l.disabled=!F,Bt(l,{transform:`scale(${T*(c>=0?k:1)})`,opacity:String(A*(F?1:.4))}),d=d.filter(O=>{const L=(s-O.at)/w1;if(L>=1||t)return O.el.remove(),!1;const V=30+L*50;return Bt(O.el,{left:O.x-V,top:O.y-V,width:V*2,height:V*2,opacity:String(1-L)}),!0}),!h&&c>=0&&s>=c+gu&&(h=!0,i.flow.next()),p.update(s)},landed:()=>s>=Bo.at+Bo.dur,onInput(_){if(_.type!=="key"||!_.key)return;n=!1;const R=Number(_.key);R>=1&&R<=6?M(R-1):_.key==="ArrowLeft"||_.key==="ArrowRight"?(a.set(Xi(a.value+(_.key==="ArrowLeft"?-.05:.05))),f()):_.key==="Enter"&&b()},exit(){},unmount(){},seek(_){this.update(0,_)}}}const sn={at:.15,dur:2.05,pitch:230,steps:12,count:15,h:400,cx:214,feet:490},Wr={at:2.2,dur:.2},T1=2.4;function C1(){let i,t=!1,e=0,n,s=[],o=!1,r=0,a;return{id:"S2",mount(l,c){i=l;const h=l.data.cast.cast.find(d=>d.id==="joe").sprite;a=new Fs(l.captions,l.copy.captions,[{key:"finding",at:.15}]);const u=new xh(l.copy.S1.clock);n=H("span",{}),r=sn.h*h.aspect,s=Array.from({length:sn.count},()=>H("img",{src:pr(h.body),alt:"",style:`position:absolute;top:${sn.feet-sn.h}px;width:${r}px;height:${sn.h}px;transform-origin:50% 100%`})),u.screen.append(H("div",{class:"pixel s2-finding",style:"position:absolute;left:0;right:0;top:84px;text-align:center;font-size:44px;color:var(--ink)"},H("span",{},l.copy.S2.finding),n),H("div",{class:"s2-card",style:"position:absolute;left:24px;top:170px;width:440px;height:530px;border-radius:28px;background:var(--white);border:6px solid var(--ink);overflow:hidden"},...s),H("div",{style:"position:absolute;left:226px;top:160px;width:0;height:0;border-left:18px solid transparent;border-right:18px solid transparent;border-top:26px solid var(--pink)"})),Cs(c,...Xc),c.append(u.el),l.store.data.progress.peepl="vinnie",l.store.save()},enter(){t=i.flow.reduced,this.update(0,0)},update(l,c){e=c,n.textContent="...".slice(0,Math.floor(e*3)%4);const h=(t?e>=sn.at?1:0:le(e,sn.at,sn.dur,se.enter))*sn.steps*sn.pitch;s.forEach((u,d)=>{const p=sn.cx+d*sn.pitch-h,x=Math.abs(p-sn.cx)<=420,S=d===sn.steps?1-le(e,Wr.at,Wr.dur,se.draw):1;Bt(u,{display:x?"block":"none",left:p-r/2,transform:`scale(${S})`})}),!o&&e>=T1&&(o=!0,i.flow.next()),a.update(e)},landed:()=>e>=sn.at+sn.dur,onInput(l){(l.type==="tap"||l.key===" "||l.key==="Enter")&&e<Wr.at&&i.flow.seek(Wr.at)},exit(){},unmount(){},seek(l){this.update(0,l)}}}const xu=(i,t,e)=>Array.from({length:e*2},(n,s)=>{const o=s/(e*2)*Math.PI*2,r=s%2?t:i;return`${(Math.cos(o)*r).toFixed(1)},${(Math.sin(o)*r).toFixed(1)}`}).join(" ");class R1{constructor(){I(this,"el");const t=(e,n)=>ae("polygon",{points:e,style:`fill:var(--${n});stroke:var(--ink);stroke-width:6;stroke-linejoin:round`});this.el=ae("g",{},t(xu(250,170,16),"yellow"),t(xu(170,118,12),"pink"))}update(t,e,n,s){this.el.setAttribute("transform",`translate(${t} ${e}) rotate(${n*25}) scale(${s})`)}}const vu=["pink","yellow","cyan","red","purple"];class P1{constructor(t){I(this,"el");I(this,"pieces");this.o=t,this.pieces=Array.from({length:t.count},(e,n)=>ae("rect",{width:18,height:10,style:`fill:var(--${vu[n%vu.length]});stroke:var(--ink);stroke-width:2`})),this.el=ae("g",{class:"confetti"},...this.pieces)}update(t,e,n,s){const o=!s&&n>0&&n<this.o.life;this.el.style.display=o?"inline":"none",o&&this.pieces.forEach((r,a)=>{const l=a/this.o.count*Math.PI*2+Wi(a)*.4,c=this.o.speed[0]+Wi(a+9)*this.o.speed[1],h=t+Math.cos(l)*c*n,u=e+Math.sin(l)*c*n+this.o.gravity*n*n;r.setAttribute("x",String(h-9)),r.setAttribute("y",String(u-5)),r.setAttribute("transform",`rotate(${n*this.o.spin+a*40} ${h} ${u})`)})}}const Qs={cx:244,cy:470,at:0,dur:.5},k1=.15,rs={x:244,feet:690,h:440,at:.15,dur:.6,hopAt:.8,hop:40},_u={at:.75,dur:.45,top:730},yu={at:1.2,dur:.4,top:812},bu={dur:3.4,to:1.06},F1=1.6;function L1(){let i,t=!1,e=0,n,s,o,r,a,l,c;return{id:"S3",mount(h,u){i=h;const d=h.copy.S3;c=new Fs(h.captions,h.copy.captions,[{key:"reveal",at:.3}]),n=new xh(h.copy.S1.clock),s=new R1,o=new P1({count:18,gravity:700,life:1.6,speed:[380,260],spin:500});const p=h.data.cast.cast.find(x=>x.id==="vinnie").sprite;r=new ka(p,{class:"sprite s3-vinnie"}).place(rs.x,rs.feet,rs.h),r.img.dataset.morph="vinnie",a=H("div",{class:"display s3-name",style:`position:absolute;left:0;right:0;top:${_u.top}px;text-align:center;font-size:58px;color:var(--ink)`},d.name),l=H("div",{style:`position:absolute;left:0;right:0;top:${yu.top}px;display:flex;justify-content:center`},rn([d.pill],{size:32})),n.screen.append(ae("svg",{width:488,height:948,style:"position:absolute;inset:0;overflow:visible"},s.el,o.el),r.el,a,l),Cs(u,...Xc),u.append(n.el)},enter(){t=i.flow.reduced,this.update(0,0)},update(h,u){e=u,n.set(0,t?1:1+(bu.to-1)*le(e,0,bu.dur,se.draw));const[d,p]=Fe(e,Qs.at,Qs.dur,t);s.update(Qs.cx,Qs.cy,t?0:e,d),s.el.style.opacity=String(p),o.update(Qs.cx,Qs.cy,e-k1,t);const[x,S]=Fe(e,rs.at,rs.dur,t);r.pose({t:e,phase:1.2,hop:t?0:uo(e,rs.hopAt,rs.hop,.4),scale:x,opacity:S});for(const[m,f]of[[a,_u],[l,yu]]){const[M,b]=Fe(e,f.at,f.dur,t);Bt(m,{transform:`scale(${M})`,opacity:String(b)})}c.update(e)},landed:()=>e>=F1,onInput(h){},exit(){},unmount(){},seek(h){this.update(0,h)}}}const Yf=.15,qf=.035,I1=3,D1=(i,t)=>Math.max(0,Math.min(i.length,Math.floor((t-Yf)/qf))),Ko=i=>Yf+i.length*qf;class jf{constructor(t,e="block"){I(this,"el");I(this,"text");I(this,"caret");I(this,"chip");I(this,"said","");this.chipColours=t,this.text=H("span",{class:"dialogue-text"}),this.caret=e==="block"?ae("svg",{width:22,height:40,viewBox:"0 0 22 40",style:"display:inline-block;vertical-align:-6px;margin-left:12px"},ae("rect",{x:2,y:2,width:18,height:36,style:"fill:var(--yellow)"})):ae("svg",{width:26,height:22,viewBox:"0 0 26 22",style:"position:absolute;right:36px;bottom:28px"},ae("path",{d:"M2 2h22L13 20z",style:"fill:var(--yellow)"})),this.chip=H("div",{class:"speaker-chip display",style:"position:absolute;left:30px;top:-40px;z-index:2;display:inline-flex;align-items:center;border-radius:999px;border:5px solid var(--ink);padding:8px 22px 10px;font-size:34px;color:var(--ink);white-space:nowrap"}),this.el=H("div",{class:"dialogue-box",style:"position:absolute;left:150px;top:660px;width:1000px;height:200px;transform-origin:0 100%"},this.chip,H("div",{class:"pixel",style:"position:absolute;inset:0;background:var(--ink);border-radius:28px;padding:38px 44px;font-size:54px;line-height:1.1;color:var(--white)"},this.text,this.caret))}update(t,e,n,s,o){const r=s?`${s.who.toLowerCase()}: ${s.text}`:"";r&&r!==this.said&&ho(r),this.said=r;const[a,l]=Fe(t,e,.4,n);if(Bt(this.el,{transform:`scale(${a})`,opacity:String(l)}),this.chip.style.display=s?"inline-flex":"none",!s){this.text.textContent="",this.caret.style.visibility="hidden";return}this.chip.textContent=s.who,this.chip.style.background=this.chipColours[s.who]??"var(--white)";const c=D1(s.text,o);this.text.textContent=s.text.slice(0,c);const h=c>=s.text.length;this.caret.style.visibility=h&&Math.floor(t*I1*2)%2===0?"visible":"hidden"}}const N1=".reply-chip:hover,.reply-chip:focus-visible,.reply-chip.hl{background:var(--yellow)!important}";class U1{constructor(t){I(this,"el");I(this,"chips",[]);I(this,"shownAt",0);I(this,"highlighted",-1);this.onPick=t,this.el=H("div",{class:"reply-chips",style:"position:absolute;left:150px;bottom:484px;width:1100px;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end"}),this.el.append(H("style",{},N1))}get count(){return this.chips.length}show(t,e,n=[]){this.clear(),this.shownAt=e,this.chips=t.map((s,o)=>{const r=H("button",{class:"reply-chip pixel",style:"min-width:208px;height:62px;padding:0 28px;border-radius:999px;border:5px solid var(--ink);background:var(--white);font-size:36px;color:var(--ink);white-space:nowrap;pointer-events:auto;transform-origin:50% 100%"});return r.textContent=s,n[o]&&(r.dataset.mark=n[o]),r.addEventListener("click",a=>{a.stopPropagation(),this.onPick(o)}),r}),this.el.append(...this.chips)}clear(){for(const t of this.chips)t.remove();this.chips=[],this.highlighted=-1}update(t,e){this.chips.forEach((n,s)=>{const[o,r]=Fe(t,this.shownAt+s*.07,.4,e);Bt(n,{transform:`scale(${o})`,opacity:String(r)}),n.classList.toggle("hl",s===this.highlighted)})}}const O1=.5;class B1{constructor(t,e,n=null){I(this,"el");I(this,"fill");I(this,"heart");I(this,"heartPath");I(this,"from",0);I(this,"to",0);I(this,"at",-1/0);I(this,"delta");I(this,"deltaAt",-1/0);this.from=this.to=e,this.delta=H("div",{class:"pixel trust-delta",style:"position:absolute;right:-8px;top:-46px;font-size:44px;color:var(--ink);opacity:0"}),this.fill=H("div",{class:"trust-fill",style:"height:100%;background:var(--pink)"}),this.heartPath=ae("path",{d:"M 28 48 C 6 32 2 22 4 14 C 7 3 22 2 28 13 C 34 2 49 3 52 14 C 54 22 50 32 28 48 Z",style:"stroke:var(--ink);stroke-width:5;stroke-linejoin:round"}),this.heart=ae("svg",{width:56,height:52,viewBox:"0 0 56 52",style:"overflow:visible"},this.heartPath),this.el=H("div",{class:"trust-meter",style:"position:absolute;left:1180px;top:76px;display:flex;align-items:center;gap:18px;transform-origin:0 50%"},H("div",{class:"pixel",style:"font-size:46px;color:var(--ink)"},t),H("div",{class:"trust-track",style:"position:relative;width:460px;height:46px;border-radius:999px;background:var(--white);border:6px solid var(--ink);overflow:hidden"},this.fill,...n===null?[]:[H("div",{class:"trust-goal",style:`position:absolute;left:${n}%;top:0;bottom:0;width:6px;margin-left:-3px;background:var(--ink)`})]),this.heart,this.delta)}set(t,e){if(t===this.to)return;const n=Math.round(t-this.to);this.delta.textContent=n>0?`+${n}`:`−${-n}`,this.deltaAt=e,this.from=this.value(e),this.to=t,this.at=e}value(t){return this.from+(this.to-this.from)*le(t,this.at,O1,se.draw)}update(t,e,n){const[s,o]=Fe(t,e,.4,n);Bt(this.el,{transform:`scale(${s})`,opacity:String(o)});const r=n?this.to:this.value(t);this.fill.style.width=`${r}%`;const a=r>=99.5;this.heartPath.style.fill=a?"var(--pink)":"var(--white)",this.heart.style.transform=`scale(${a&&!n?1+.12*Math.abs(Math.sin(t*6)):1})`;const l=t-this.deltaAt,[c,h]=Fe(t,this.deltaAt,.3,n);Bt(this.delta,{transform:`translateY(${n?0:-24*Math.min(1,l/1.2)}px) scale(${c})`,opacity:String(l<1.2?h:Math.max(0,1-(l-1.2)/.25))})}}const z1=(i,t)=>Math.max(0,Math.min(i.trust.max,t)),vh=(i,t)=>i.beats.filter(e=>e.days.includes(t));function H1(i,t=[]){return{mode:"bond",phase:"lines",day:1,beatIndex:0,trust:i.trust.start,set:{},queue:[],then:"choose",choices:[],autoPick:0,refusals:0,profile:t,history:[]}}function V1(i,t,e){const n=i.findIndex(r=>r.preferIfProfile&&e.includes(r.preferIfProfile));if(n<=0)return{choices:i,autoPick:t};const s=i[t],o=[i[n],...i.filter((r,a)=>a!==n)];return{choices:o,autoPick:o.indexOf(s)}}function Cl(i,t,e){const n=vh(i,t.day)[e];if(!n)return G1(i,{...t,beatIndex:e});const s=t.day>1&&n.lineAgain?n.lineAgain:n.line;return{...t,beatIndex:e,phase:"lines",queue:[...s],then:"choose"}}function G1(i,t){return t.trust>=i.trust.closeMin?{...t,phase:"lines",queue:[...i.close.pass],then:"passed",trust:i.trust.max}:t.day>=i.days.forcedOnDay?{...t,phase:"lines",queue:[...i.close.forced],then:"passed",trust:i.trust.closeMin}:{...t,phase:"lines",queue:[...i.close.fail],then:"nextDay"}}function W1(i,t){if(t.mode==="consent")return{choices:i.consent.choices,autoPick:i.consent.autoPick};const e=vh(i,t.day)[t.beatIndex];return V1(e.choices,e.autoPick,t.profile)}function Mu(i,t,e){var n;switch(e.type){case"start":return Cl(i,{...t,mode:"bond",day:e.day??t.day},0);case"consent":return{...t,mode:"consent",phase:"lines",queue:[...i.consent.ask],then:"choose"};case"lineDone":{if(t.phase!=="lines")return t;const s=t.queue.slice(1);if(s.length)return{...t,queue:s};switch(t.then){case"choose":return{...t,queue:s,phase:"choosing",...W1(i,t)};case"nextBeat":return Cl(i,{...t,queue:s},t.beatIndex+1);default:return{...t,queue:s,phase:t.then}}}case"choose":{const s=t.phase==="choosing"?t.choices[e.index]:void 0;if(!s)return t;const o={who:"YOU",text:s.label},r={...t,phase:"lines",choices:[],set:{...t.set,...s.set},history:[...t.history,{beat:t.mode==="consent"?"consent":vh(i,t.day)[t.beatIndex].id,label:s.label}]};return t.mode==="bond"?{...r,trust:z1(i,t.trust+s.trust),queue:[o,...s.reply],then:"nextBeat"}:((n=s.set)==null?void 0:n.consent)==="yes"?{...r,queue:[o,...s.reply],then:"released"}:t.refusals>=1?{...r,refusals:t.refusals+1,queue:[o,...i.consent.forced],then:"released"}:{...r,refusals:t.refusals+1,queue:[o,...s.reply],then:"nextDay"}}case"nextDay":{if(t.phase!=="nextDay")return t;const s=t.day+1;return t.mode==="consent"?{...t,day:s,phase:"lines",queue:[...i.consent.askAgain],then:"choose"}:Cl(i,{...t,day:s},0)}}}const Pn={x:1380,consentX:1340,feet:930,h:620},X1=[[40,60],[120,140],[70,250],[300,230],[200,90],[330,300]],$1=.6,Y1=.5,q1=1,j1=.4,Z1={VINNIE:.8,YOU:.4,MOCHI:.8},Xr={first:4,every:12},Oi={dur:1.6,swapAt:.8,fade:.25},K1={S4:1.5,S5:1.2},J1={VINNIE:"var(--red)",YOU:"var(--cyan)",MOCHI:"var(--pink)"};function Q1(){const i=X1.map(([a,l])=>H("div",{style:`position:absolute;left:${a}px;top:${l}px;width:10px;height:10px;background:var(--white)`})),t=H("div",{style:"position:absolute;left:150px;top:140px;width:420px;height:400px;border-radius:16px;border:10px solid var(--ink);background:var(--lit-window-navy);overflow:hidden"},H("div",{style:"position:absolute;left:250px;top:50px;width:90px;height:90px;border-radius:50%;background:var(--yellow);border:6px solid var(--ink)"}),...i,H("div",{style:"position:absolute;left:195px;top:0;width:10px;height:100%;background:var(--ink)"}),H("div",{style:"position:absolute;left:0;top:185px;width:100%;height:10px;background:var(--ink)"})),e=H("div",{style:"position:absolute;left:900px;top:0;width:0;height:0;transform-origin:0 0"},H("div",{style:"position:absolute;left:-4px;top:0;width:8px;height:200px;background:var(--ink)"}),H("div",{style:"position:absolute;left:-170px;top:250px;width:340px;height:260px;background:radial-gradient(ellipse at 50% 0%, var(--lit-lamp-glow), transparent 70%)"}),ae("svg",{width:220,height:120,style:"position:absolute;left:-110px;top:190px"},ae("path",{d:"M 70 6 L 150 6 L 212 110 L 8 110 Z",style:"fill:var(--yellow);stroke:var(--ink);stroke-width:8;stroke-linejoin:round"}))),n=(a,l,c,h,u)=>ae("ellipse",{cx:a,cy:l,rx:c,ry:h,style:`fill:var(--${u});stroke:var(--ink);stroke-width:7`}),s=[n(80,120,44,90,"lit-plant-1"),n(150,100,44,100,"lit-plant-2")],o=ae("svg",{width:340,height:440,viewBox:"-40 -40 340 440",style:"position:absolute;left:1580px;top:500px;overflow:visible"},...s,n(118,140,40,84,"lit-plant-3"),ae("path",{d:"M 50 230 L 210 230 L 190 330 L 70 330 Z",style:"fill:var(--lit-pot);stroke:var(--ink);stroke-width:8;stroke-linejoin:round"}));return{el:H("div",{class:"room",style:`position:absolute;left:0;top:0;width:1920px;height:${Ue(1080,1700)}px;background:var(--cream);overflow:hidden`},H("div",{style:"position:absolute;inset:0;background-image:repeating-linear-gradient(90deg,var(--lit-wallpaper) 0 40px,transparent 40px 80px)"}),t,H("div",{style:"position:absolute;left:0;top:640px;width:1920px;height:230px;background:var(--pink);border-top:8px solid var(--ink)"}),H("div",{style:`position:absolute;left:0;top:860px;width:1920px;height:${Ue(220,840)}px;background-color:var(--wood);border-top:8px solid var(--ink);background-image:repeating-linear-gradient(90deg,transparent 0 236px,var(--lit-plank-gap) 236px 242px)`}),e,o),update(a,l){const c=l?0:1;e.style.transform=`rotate(${Math.sin(a*1.3)*3*c}deg)`,i.forEach((h,u)=>h.style.opacity=String(l?1:.5+.5*Math.sin(a*3+u))),s[0].setAttribute("transform",`rotate(${-24+Math.sin(a*1.6)*3*c} 110 300)`),s[1].setAttribute("transform",`rotate(${14+Math.sin(a*1.6+1)*3*c} 130 300)`)}}}function Zf(i){const t=i==="S5";let e,n,s=!1,o=0,r,a,l,c,h,u,d,p=0,x=-1,S=Xr.first,m=-1,f=-1,M=!1,b=-1/0,_=!1,R=!1,v=!1,E=[],g=null;const y=()=>d.phase==="lines"?d.queue[0]??null:null,T=()=>{const O=e.store.data.progress;O.dialogue={mode:d.mode,day:d.day,beatIndex:d.beatIndex,trust:d.trust,set:d.set,history:d.history},O.trust=d.trust,d.phase==="released"&&(O.released=!0),e.store.save()},A=O=>{const L=d;if(d=Mu(n,d,O),d===L)return;p=o;const V=y();if((V==null?void 0:V.who)==="VINNIE"&&V.hop&&V!==L.queue[0]&&E.push({at:o,h:V.hop}),d.phase==="choosing"&&L.phase!=="choosing"){x=o,S=Xr.first;const U=Z=>d.day>1&&!!Z.set&&Object.entries(Z.set).every(([et,ut])=>d.set[et]===ut);c.show(d.choices.map(Z=>Z.label),o,d.choices.map(Z=>U(Z)?e.copy.ui.yesterday:""))}d.phase==="nextDay"&&(m=o),(d.phase==="passed"||d.phase==="released")&&f<0&&(f=o,h.set(t?100:d.trust,o),e.toast.show(d.phase==="passed"?e.data.dialogue.close.toast:e.data.dialogue.consent.confirmToast)),!v&&!t&&d.mode==="bond"&&d.beatIndex>=2&&d.day===1&&(v=!0,e.captions.show(e.copy.captions.room2??"",3.7)),T()},k=O=>{if(d.phase!=="choosing"||!d.choices[O])return;const L=d.choices[O];c.clear(),S>Xr.first&&e.captions.hide(),x=-1,L.trust<0&&(b=o),A({type:"choose",index:O}),t||h.set(d.trust,o)},F=()=>{const O=y();if(!O)return;o-p<Ko(O.text)?p=o-Ko(O.text):A({type:"lineDone"})};return{id:i,mount(O,L){var et;e=O,n=O.data.dialogue,r=Q1();const V=O.data.cast.cast.find(ut=>ut.id==="vinnie").sprite;a=new ka(V,{class:`sprite ${i==="S4"?"s4":"s5"}-vinnie`}).place(Pn.x,Pn.feet,Pn.h),a.img.dataset.morph="vinnie",l=new jf(J1),c=new U1(ut=>k(ut));const U=O.store.data.progress.dialogue,Z=((et=O.store.data.progress.profile)==null?void 0:et.chips)??[];d={...H1(n,Z),...t&&U?{trust:U.trust??100,set:U.set??{},history:U.history??[]}:{}},h=new B1(O.copy.S4.trust,t?100:d.trust,t?null:n.trust.closeMin),u=H("div",{class:"next-day",style:"position:absolute;inset:0;background:var(--ink);display:none;align-items:center;justify-content:center"},H("div",{class:"pixel",style:"font-size:64px;color:var(--white)"},O.copy.S4.nextDay)),Cs(L,Pn.x,Pn.feet,760/Pn.h,540,1080),Pe(h.el,{left:60,top:80}),Bt(l.el,{top:470}),Bt(c.el,{bottom:"auto",top:712}),Pe(l.el,{left:60,top:1170,width:960,height:300}),Pe(c.el,{left:60,top:1495,bottom:"auto",width:740,transform:"scale(1.3)",transformOrigin:"0 0"}),Pe(u,{}),L.append(r.el,a.el,h.el,c.el,l.el,u),Tt.roomPick=()=>d.phase==="choosing"&&x>=0?d.autoPick:-1},enter(){s=e.flow.reduced,this.update(0,0)},update(O,L){o=L,!_&&o>=(t?j1:q1)&&(_=!0,A(t?{type:"consent"}:{type:"start",day:1})),!t&&!R&&o>=.8&&(R=!0,e.captions.show(e.copy.captions.room1??"",3.1)),r.update(o,s);const V=y();if(V&&o-p>=Ko(V.text)+Z1[V.who]&&A({type:"lineDone"}),d.phase==="choosing"&&x>=0&&o-x>=S&&(S+=Xr.every,e.captions.show(e.copy.captions.yourTurn??"",3)),m>=0){const mt=o-m,St=Math.min(le(mt,0,Oi.fade,se.enter),1-le(mt,Oi.dur-Oi.fade,Oi.fade,se.enter));if(Bt(u,{display:mt<Oi.dur?"flex":"none",opacity:String(St)}),d.phase==="nextDay"&&mt>=Oi.swapAt){d=Mu(n,d,{type:"nextDay"}),p=m+Oi.dur;const X=y();X!=null&&X.hop&&E.push({at:p,h:X.hop}),T()}mt>=Oi.dur&&(m=-1)}const U=y();U&&o>=p&&(g=U),d.phase==="nextDay"&&(g=null);const Z=U?o-p<Ko(U.text):!1,et=U?Math.max(0,o-p):1/0;l.update(o,t?-1:$1,s,U??g,et),c.update(o,s),h.update(o,t?-1:Y1,s);const ut=s?0:E.reduce((mt,St)=>mt+uo(o,St.at,St.h,St.h>=60?.45:.4),0),wt=(U==null?void 0:U.who)==="YOU"&&Z&&!s?-4:0,It=!s&&o-b<.12?.96:1,qt=t?Pn.x+(Pn.consentX-Pn.x)*le(o,0,.5,se.draw):Pn.x;a.place(qt,Pn.feet,Pn.h).pose({t:o,phase:1.2,hop:ut,rot:wt,squash:It}),f>=0&&!M&&o-f>=K1[i]&&!y()&&(M=!0,e.flow.next())},landed:()=>o>=.5,onInput(O){O.type==="key"&&O.key&&/^[1-4]$/.test(O.key)?k(Number(O.key)-1):(O.type==="tap"||O.key===" "||O.key==="Enter")&&F()},choose:k,exit(){},unmount(){delete Tt.roomPick},seek(O){this.update(0,O)}}}const tb=()=>Zf("S4"),eb=()=>Zf("S5"),Kf=[960,560,1.15,540,820],Rl=440,zo={x:740,top:652,w:440,h:320},Ho=.75,wu=.32,Vo={at:1.35,dur:.35,deg:128},Go={at:1.45,dur:.7,from:520},nb=2.15,va={at:1.4,life:1.5,count:16},Pl={at:2.6,dur:.6,px:760},Su=3.2,ib=["yellow","cyan","white","red"];class Jf{constructor(t){I(this,"el");I(this,"keychain");I(this,"sticker");I(this,"box");I(this,"keyClip");I(this,"flapL");I(this,"flapR");I(this,"confetti");const e=t.copy.S6,n=t.data.cast.cast.find(h=>h.id==="vinnie").sprite,s=Rl*n.aspect,o=H("div",{style:`position:absolute;left:${Ue(250,470)}px;top:110px;width:440px;height:800px;background:var(--cyan);border:10px solid var(--ink);border-bottom:none;border-radius:18px 18px 0 0`},H("div",{style:"position:absolute;left:50px;top:60px;width:320px;height:260px;border:8px solid var(--ink);border-radius:12px"}),H("div",{style:"position:absolute;left:50px;top:370px;width:320px;height:330px;border:8px solid var(--ink);border-radius:12px"}),H("div",{class:"display door-plate",style:"position:absolute;left:150px;top:110px;width:120px;height:90px;background:var(--white);border:7px solid var(--ink);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:64px;color:var(--ink)"},e.door),H("div",{style:"position:absolute;left:350px;top:400px;width:40px;height:40px;border-radius:50%;background:var(--yellow);border:7px solid var(--ink)"})),r=H("div",{style:`position:absolute;left:0;top:900px;width:1920px;height:${Ue(180,800)}px;background:var(--cream);border-top:8px solid var(--ink)`}),a=H("div",{class:"pixel mat",style:"position:absolute;left:740px;top:912px;width:440px;height:58px;background:var(--wood);border:6px solid var(--ink);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:44px;color:var(--ink)"},e.mat);this.sticker=H("img",{src:pr(n.body),alt:"",class:"keychain-img",style:`position:absolute;left:${-s/2}px;top:228px;width:${s}px;height:${Rl}px;filter:drop-shadow(5px 0 0 var(--white)) drop-shadow(-5px 0 0 var(--white)) drop-shadow(0 5px 0 var(--white)) drop-shadow(0 -5px 0 var(--white)) drop-shadow(0 26px 22px var(--lit-sticker-shadow))`});const l=rn([e.nfc],{size:30});l.classList.add("nfc-pill"),Bt(l,{position:"absolute",left:-46,top:228+Rl-10}),this.keychain=H("div",{class:"keychain",style:"position:absolute;left:960px;top:0;width:0;height:0;transform-origin:0 0"},H("div",{style:"position:absolute;left:-9px;top:-20px;width:18px;height:190px;border-radius:9px;background:repeating-linear-gradient(180deg,var(--lit-chain) 0 16px,var(--lit-chain-hi) 16px 22px)"}),H("div",{style:"position:absolute;left:-44px;top:150px;width:88px;height:88px;border-radius:50%;border:13px solid var(--lit-ring)"}),this.sticker,l),this.keyClip=H("div",{style:"position:absolute;inset:0"},this.keychain);const c=h=>H("div",{style:`position:absolute;${h}:0;top:-44px;width:220px;height:48px;background:var(--lit-flaps);border:7px solid var(--ink);transform-origin:${h==="left"?"0%":"100%"} 100%`});this.flapL=c("left"),this.flapR=c("right"),this.box=H("div",{class:"ship-box",style:`position:absolute;left:${zo.x}px;top:${zo.top}px;width:${zo.w}px;height:${zo.h}px;transform-origin:50% 100%`},this.flapL,this.flapR,H("div",{style:"position:absolute;inset:0;background:var(--lit-cardboard);border:8px solid var(--ink);border-radius:8px"},H("div",{style:"position:absolute;left:190px;top:0;width:44px;height:100%;background:var(--lit-tape)"}),H("div",{style:"position:absolute;left:40px;top:110px;width:250px;padding:14px 18px;background:var(--white);border:5px solid var(--ink);border-radius:10px;transform:rotate(-4deg)"},H("div",{class:"display box-label",style:"font-size:44px;color:var(--ink)"},e.boxLabel),H("div",{class:"pixel box-sub",style:"font-size:28px;color:var(--ink);margin-top:6px"},e.boxSub)))),this.confetti=Array.from({length:va.count},(h,u)=>H("div",{style:`position:absolute;left:0;top:0;width:26px;height:14px;background:var(--${ib[u%4]});border:3px solid var(--ink)`})),this.el=H("div",{class:"ship-set",style:`position:absolute;left:0;top:0;width:1920px;height:${Ue(1080,1700)}px;overflow:hidden`},o,r,a,this.keyClip,this.box,...this.confetti)}pose(t){const e=zo.top+t.boxY;Bt(this.box,{top:e,transform:`scale(${1+t.squash*.12}, ${1-t.squash*.14})`,display:e>1100?"none":"block"}),this.flapL.style.transform=`rotate(${-t.flap}deg)`,this.flapR.style.transform=`rotate(${t.flap}deg)`,Bt(this.keyClip,{clipPath:`inset(0 0 ${Math.max(0,1080-e)}px 0)`,opacity:t.keyVisible?"1":"0"}),Bt(this.keychain,{top:t.lift,transform:`rotate(${t.rot}deg)`});const n=!t.reduced&&t.ct>0&&t.ct<va.life;this.confetti.forEach((s,o)=>{if(!n)return void(s.style.display="none");const r=-Math.PI/2+(Wi(o)-.5)*2.2,a=700+Wi(o+5)*500,l=960+Math.cos(r)*a*t.ct,c=650+Math.sin(r)*a*t.ct+1400*t.ct*t.ct;Bt(s,{display:"block",transform:`translate(${l}px, ${c}px) rotate(${t.ct*600+o*30}deg)`})})}}function sb(){let i,t=!1,e=0,n,s;return{id:"S6",mount(o,r){i=o,n=new Jf(o),s=new Fs(o.captions,o.copy.captions,[{key:"ship",at:.3}]),Cs(r,...Kf),r.append(n.el)},enter(){t=i.flow.reduced,this.update(0,0)},update(o,r){e=r;const a=t?0:e<Ho?-1300*(1-se.fall(Xi((e-.2)/(Ho-.2)))):0,l=!t&&e>Ho&&e<Ho+wu?Math.sin(Math.PI*(e-Ho)/wu):0,c=le(e,Pl.at,Pl.dur,se.draw)*Pl.px,h=t?e>=Vo.at?Vo.deg:0:le(e,Vo.at,Vo.dur,se.pop)*Vo.deg,u=t?e>=Go.at?0:Go.from:Go.from*(1-le(e,Go.at,Go.dur,se.pop));n.pose({boxY:a+c,squash:l,flap:h,lift:u,rot:t?0:Hl(e,nb,14),keyVisible:e>va.at,ct:e-va.at,reduced:t}),s.update(e)},landed:()=>e>=Su,onInput(o){(o.type==="tap"||o.key===" "||o.key==="Enter")&&e>=Su&&i.flow.next()},exit(){},unmount(){},seek(o){this.update(0,o)}}}const Bi={enter:.6,from:2300,to:1330,nudgeAt:.8,nudge:150},zi=1.1,kl={peak:.7,dur:.23},as={count:3,life:1,stagger:.16,from:40,grow:700,cx:Ue(1040,960),cy:Ue(520,600)},Eu=1.3,Fl=1.5,ob=1,Au=1.25,Ll={x:960,y:448};function rb(){let i,t=!1,e=0,n=-1,s=!1,o=!1,r=!1,a,l,c,h,u,d,p,x,S=[],m;const f=()=>{n>=0||(n=e)};return{id:"S7",mount(M,b){i=M;const _=M.copy.S7;if(a=new Jf(M),m=new Fs(M.captions,M.copy.captions,[{key:"tap",at:0,until:3.5}]),l=H("button",{class:"keychain-hit","aria-label":_.waitPill,style:`position:absolute;left:${Ll.x-180}px;top:188px;width:360px;height:520px;border-radius:40px;pointer-events:auto`}),l.addEventListener("click",R=>{R.stopPropagation(),f()}),c=H("div",{class:"wait-ring",style:"position:absolute;left:0;top:0;width:400px;height:400px;margin:-200px 0 0 -200px;border-radius:50%;border:8px solid var(--pink);pointer-events:none"}),h=H("div",{class:"wait-pill",style:"position:absolute;left:0;right:0;top:832px;display:flex;justify-content:center;gap:16px"},rn([_.waitPill],{size:32})),"NDEFReader"in window){const R=rn([_.realNfc],{size:32,tag:"button"});R.style.pointerEvents="auto",R.addEventListener("click",async v=>{v.stopPropagation();try{const E=window.NDEFReader,g=new E;await g.scan(),g.onreading=()=>f()}catch{}}),h.append(R)}d=H("div",{class:"pixel notification",style:"width:230px;padding:14px 16px;background:var(--yellow);border:6px solid var(--ink);border-radius:24px;font-size:32px;line-height:1.05;color:var(--ink);transform-origin:50% 0"},H("div",{class:"notif-title"},_.notifTitle),H("div",{class:"notif-body"},_.notifBody)),u=H("div",{class:"tap-phone",style:"position:absolute;left:0;top:300px;width:300px;height:540px;border-radius:48px;background:var(--ink);padding:16px;box-shadow:0 22px 40px var(--lit-phone-shadow)"},H("div",{style:"width:100%;height:100%;border-radius:34px;background:var(--lit-phone-glass);display:flex;justify-content:center;padding-top:60px"},d)),p=H("div",{class:"handshake",style:"position:absolute;left:0;right:0;top:820px;display:flex;justify-content:center"},H("div",{class:"display handshake-pill",style:"display:inline-flex;align-items:center;gap:14px;border-radius:999px;background:var(--yellow);border:6px solid var(--ink);padding:12px 26px 14px;font-size:58px;color:var(--ink);white-space:nowrap"},_.handshake,Ms("check",52,"var(--ink)"))),S=Array.from({length:as.count},(R,v)=>H("div",{style:`position:absolute;border-radius:50%;border-style:solid;border-color:var(--${v%2?"cyan":"yellow"});pointer-events:none`})),x=H("div",{style:"position:absolute;inset:0;background:var(--white);pointer-events:none;opacity:0"}),Cs(b,...Kf),Pe(h,{top:1500}),Pe(p,{top:1500}),Pe(x,{}),b.append(a.el,c,h,l,...S,u,p,x)},enter(){t=i.flow.reduced,this.update(0,0)},update(M,b){e=b;const _=n>=0?e-n:-1,R=t?0:Hl(e,-2,14)+(_>=zi?Hl(_,zi,-10):0);a.pose({boxY:2e3,squash:0,flap:128,lift:0,rot:R,keyVisible:!0,ct:-1,reduced:t});const v=n<0,E=e%Au/Au;Bt(c,{display:v?"block":"none",transform:`translate(${Ll.x}px, ${Ll.y}px) scale(${t?1:.6+.9*E})`,opacity:String(t?.8:1-E)}),Bt(h,{display:v&&!i.captions.visible?"flex":"none"}),l.style.display=v?"block":"none";const g=_<0?Bi.from:Bi.from+(Bi.to-Bi.from)*le(_,0,Bi.enter,se.enter)-Bi.nudge*le(_,Bi.nudgeAt,zi-Bi.nudgeAt,se.draw),y=ln?`translate(810px, ${g-920}px) rotate(-6deg)`:`translateX(${g-150}px) rotate(12deg)`;Bt(u,{transform:y,display:_<0?"none":"block"});const T=_>=zi&&!t?Math.max(0,kl.peak-(_-zi)/kl.dur*kl.peak):0;x.style.opacity=String(T),S.forEach((L,V)=>{const U=t||_<0?-1:(_-zi-V*as.stagger)/as.life;if(U<=0||U>=1)return void(L.style.display="none");const Z=as.from+U*as.grow;Bt(L,{display:"block",left:as.cx-Z,top:as.cy-Z,width:Z*2,height:Z*2,borderWidth:`${12-U*8}px`,opacity:String(1-U)})});const[A,k]=_<0?[0,0]:Fe(_,Eu,.4,t);_>=Eu&&!o&&(o=!0,ho(p.textContent??"")),Bt(p,{transform:`scale(${A})`,opacity:String(k)});const[F,O]=_<0?[0,0]:Fe(_,Fl,.4,t);_>=Fl&&!r&&(r=!0,ho([...d.children].map(L=>L.textContent).join(". "))),Bt(d,{transform:`scale(${F})`,opacity:String(O)}),_>=zi&&!i.store.data.progress.handshake&&(i.store.data.progress.handshake=!0,i.store.save()),_<zi?m.update(e):i.captions.hide(),!s&&_>=Fl+ob&&(s=!0,i.flow.next())},landed:()=>e>=.3,onInput(M){(M.type==="tap"||M.key===" "||M.key==="Enter")&&f()},exit(){},unmount(){},seek(M){this.update(0,M)}}}const _n={sky:13627391,ground:16046520,hemi:1.5,key:16773590,keyI:2.1,elevation:55,azimuth:35};function _h(){const i=new fn,t=new Nm(_n.sky,_n.ground,_n.hemi),e=new Bm(_n.key,_n.keyI),n=_n.elevation*Math.PI/180,s=_n.azimuth*Math.PI/180;return e.position.set(Math.cos(n)*Math.sin(s)*30,Math.sin(n)*30,Math.cos(n)*Math.cos(s)*30),i.add(t,e,e.target),{group:i,key:e,hemi:t}}const Wo={sky:9403332,ground:16757642,hemi:1,key:16752250,keyI:1.2},Tu={day:[702702,8377333,14087423],dusk:[5979791,11954864,16752335]},Cu={day:16777215,dusk:new ie().setRGB(42/53,38/49,64/75,Ke)},Ru={day:16770976,dusk:16765530},kn=i=>i instanceof ie?i.clone():new ie(i),ni=i=>i*3600,$r=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Pu(i){const t=(i%86400+86400)%86400,e=t>=ni(12)?$r(ni(19.5),ni(20.25),t):1-$r(ni(6),ni(6.75),t),n=t>=ni(12)?$r(ni(21),ni(21.75),t):1-$r(ni(5.25),ni(6),t);return{dusk:e,night:n}}function ab(i,t,e){e.hemi.color.copy(kn(_n.sky).lerp(kn(Wo.sky),i)),e.hemi.groundColor.copy(kn(_n.ground).lerp(kn(Wo.ground),i)),e.hemi.intensity=_n.hemi+(Wo.hemi-_n.hemi)*i,e.key.color.copy(kn(_n.key).lerp(kn(Wo.key),i)),e.key.intensity=(_n.keyI+(Wo.keyI-_n.keyI)*i)*(1-.92*t),["uTop","uMid","uBottom"].forEach((n,s)=>e.sky[n].value.copy(kn(Tu.day[s]).lerp(kn(Tu.dusk[s]),i))),e.fog.color.copy(kn(Cu.day).lerp(kn(Cu.dusk),i)),e.glow.value.copy(kn(Ru.day).lerp(kn(Ru.dusk),i))}function lb(i,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,s=[new N,new N,new N],o=new N,r=new N,a=new N,l=new N;function c(S){const m=~~(S.x*n),f=~~(S.y*n),M=~~(S.z*n);return`${m},${f},${M}`}const h=i.index?i.toNonIndexed():i,u=h.attributes.position,d={};for(let S=0,m=u.count/3;S<m;S++){const f=3*S,M=s[0].fromBufferAttribute(u,f+0),b=s[1].fromBufferAttribute(u,f+1),_=s[2].fromBufferAttribute(u,f+2);o.subVectors(_,b),r.subVectors(M,b);const R=new N().crossVectors(o,r).normalize();for(let v=0;v<3;v++){const E=s[v],g=c(E);g in d||(d[g]=[]),d[g].push(R)}}const p=new Float32Array(u.count*3),x=new _e(p,3,!1);for(let S=0,m=u.count/3;S<m;S++){const f=3*S,M=s[0].fromBufferAttribute(u,f+0),b=s[1].fromBufferAttribute(u,f+1),_=s[2].fromBufferAttribute(u,f+2);o.subVectors(_,b),r.subVectors(M,b),a.crossVectors(o,r).normalize();for(let R=0;R<3;R++){const v=s[R],E=c(v),g=d[E];l.set(0,0,0);for(let y=0,T=g.length;y<T;y++){const A=g[y];a.dot(A)>e&&l.add(A)}l.normalize(),x.setXYZ(f+R,l.x,l.y,l.z)}}return h.setAttribute("normal",x),h}const co=["root","pelvis","torso","neck","head","eyes","mouthA","mouthB","head_top","head_front","head_L","head_R","mouth_R","torso_front","hip_back","tail","shoulder_L","upperArm_L","foreArm_L","hand_L","shoulder_R","upperArm_R","foreArm_R","hand_R","hip_L","thigh_L","shin_L","foot_L","hip_R","thigh_R","shin_R","foot_R"];function cb(i){const t=i.chinY+i.headU/2,e=i.headU,n={root:[0,0,0],pelvis:[0,i.hipY,0],torso:[0,i.hipY+.05,0],neck:[0,i.shoulderY,0],head:[0,i.chinY,0],eyes:[.04*e,t+.05*e,.2*e],mouthA:[.04*e,t-.2*e,.22*e],mouthB:[.04*e,t-.24*e,.22*e],head_top:[0,i.crownY,0],head_front:[.04*e,t,0],head_L:[-.33*e,t-.065*e,-.035*e],head_R:[.33*e,t-.065*e,-.035*e],mouth_R:[.14*e,t-.22*e,.24*e],torso_front:[0,i.hipY+.05+i.torsoLen*.5,0],hip_back:[0,i.hipY-.1,-.2*i.belly],tail:[0,i.hipY-.1,-.2*i.belly],shoulder_L:[-i.shoulderX,i.shoulderY-.08,0],upperArm_L:[-i.shoulderX,i.shoulderY-.08,0],foreArm_L:[-i.shoulderX,i.shoulderY-.08-i.armUpper,0],hand_L:[-i.shoulderX,i.shoulderY-.08-i.armUpper-i.armFore,0],shoulder_R:[i.shoulderX,i.shoulderY-.08,0],upperArm_R:[i.shoulderX,i.shoulderY-.08,0],foreArm_R:[i.shoulderX,i.shoulderY-.08-i.armUpper,0],hand_R:[i.shoulderX,i.shoulderY-.08-i.armUpper-i.armFore,0],hip_L:[-i.hipX,i.hipY,0],thigh_L:[-i.hipX,i.hipY,0],shin_L:[-i.hipX,i.hipY-i.thigh,0],foot_L:[-i.hipX,i.ankleY,0],hip_R:[i.hipX,i.hipY,0],thigh_R:[i.hipX,i.hipY,0],shin_R:[i.hipX,i.hipY-i.thigh,0],foot_R:[i.hipX,i.ankleY,0]},s={pelvis:"root",torso:"pelvis",neck:"torso",head:"neck",eyes:"head",mouthA:"head",mouthB:"head",head_top:"head",head_front:"head",head_L:"head",head_R:"head",mouth_R:"head",torso_front:"torso",hip_back:"pelvis",tail:"hip_back",shoulder_L:"torso",upperArm_L:"shoulder_L",foreArm_L:"upperArm_L",hand_L:"foreArm_L",shoulder_R:"torso",upperArm_R:"shoulder_R",foreArm_R:"upperArm_R",hand_R:"foreArm_R",hip_L:"pelvis",thigh_L:"hip_L",shin_L:"thigh_L",foot_L:"shin_L",hip_R:"pelvis",thigh_R:"hip_R",shin_R:"thigh_R",foot_R:"shin_R"},o={},r={},a={};co.forEach((l,c)=>{const h=new bf;h.name=l,o[l]=h,r[l]=new N(...n[l]),a[l]=c});for(const l of co){const c=s[l],h=r[l].clone();c&&(o[c].add(o[l]),h.sub(r[c])),o[l].position.copy(h)}return{bones:o,list:co.map(l=>o[l]),index:a,bind:r}}const zc=["head","h","T","A","hem","belly","legs"];function hb(i,t,e={}){var o;const n=i[t.body],s={headScale:e.headScale??t.headScale};for(const r of zc)s[r]=n[r]*(((o=t.shape)==null?void 0:o[r])??1)*(e[r]??1);return s}function db(i){const t=i.head*i.headScale,e=i.h*3.45-i.head,n=1.25*i.legs,s=.15,o=Math.max(.3,e-n-s),r=n+o,a=r+s,l=.5+.5*(o/1.05),c=n/1.25;return{s:i,headU:t,hipY:n,shoulderY:r,chinY:a,crownY:a+t,torsoLen:o,T:i.T,A:i.A,hem:i.hem,belly:i.belly,shoulderX:.48*i.T,armUpper:.42*l,armFore:.4*l,hipX:.15*Math.sqrt(i.T),thigh:.56*c,shin:.55*c,ankleY:.14*c}}const ku=i=>i.crownY/i.headU,Vi={color:"#111111",flat:!0,outline:0},vs="#FFFFFF";function Ln(i){const t=i.d.headU;return{q:{a:.34*t,b:.5*t,c:.26*t,e1:.55,e2:.75},c:[.04*t,i.d.chinY+t/2,0]}}function Qf(i){const t=i.d;return{q:{a:.38*t.T,b:t.torsoLen/2+.02,c:.26*t.belly,e1:.45,e2:.5},y:t.hipY+.05+t.torsoLen/2}}const Vn=(i,t=.35)=>{const e=new Un(i,12,8);return e.scale(1,1,t),e};function ub(i,t){const e=i.d,n=e.headU,s={color:t.skin,outline:1},o={color:t.hands??t.skin,outline:.8},r=t.top,a=r.type==="body",l={color:a?t.skin:r.color,outline:1,...r.pattern?{pattern:r.pattern,color2:r.color2??vs,rep:4}:{}},c=r.type==="varsity"&&r.color2?{color:r.color2,outline:.8}:{...l,outline:.8},h=r.type==="polo"||r.type==="hawaiian",{q:u,c:d}=Ln(i);i.blob(u,"head",s,d);for(const f of[-1,1]){const M=f<0?"head_L":"head_R",b=i.rig.bind[M];if(i.blob({a:.06*n,b:.12*n,c:.113*n,e1:1,e2:1},M,{...s,outline:.8},[b.x,b.y,b.z]),f<0)for(const _ of[1,-1])i.box(.02*n,.113*n,.013*n*2,M,Vi,[b.x-.062*n,b.y,b.z],[_*Math.PI/4,0,0])}i.cyl(.11,.11,e.chinY-e.shoulderY+.13,"neck",{...s,outline:.8},[0,(e.shoulderY+e.chinY)/2,0]);const{q:p,y:x}=Qf(i);if((a||r.type==="offshoulder")&&i.blob(p,"torso",s,[0,x,0]),!a){const f=r.type==="offshoulder",M=lo(p,.04,f?{b:p.b*.82}:{});if(i.blob(M,"torso",l,[0,f?x-p.b*.2:x,0]),i.torus(M.a*.92,.035,"torso",{...l,pattern:void 0,outline:.8},[0,e.hipY+.08,0],[Math.PI/2,0,0]),r.type==="hoodie"){i.box(.42*e.T,.16,.06,"torso",{color:r.color,outline:.7},[0,e.hipY+.3,p.c*.95]);for(const b of[-1,1])i.cyl(.012,.012,.3,"torso",{color:vs,outline:0},[b*.07,e.shoulderY-.25,p.c*.9])}r.type==="polo"&&i.box(.3,.06,.12,"torso",{color:r.color,outline:.7},[0,e.shoulderY-.02,.14],[-.4,0,0]),r.collar==="tee"&&i.torus(.13,.025,"torso",{color:r.color,outline:.7},[0,e.shoulderY-.02,0],[Math.PI/2,0,0]),r.collar==="vneck"&&i.onFace(lo(p,.04),[0,x,0],fb(.2,.26),"torso",{color:t.skin},0,p.b-.18,.01)}const S={a:.34*e.T,b:.14,c:.23*e.belly,e1:.6,e2:.6},m={color:t.pants.color,outline:.8};i.blob(lo(S,.04),"pelvis",m,[0,e.hipY-.01,0]);for(const f of["L","R"]){const M=f==="L"?-1:1,b=i.rig.bind[`upperArm_${f}`],_=i.rig.bind[`foreArm_${f}`],R=i.rig.bind[`hand_${f}`],v=[0,0,M*.05];i.blob({a:.12*e.A+.04,b:e.armUpper/2+.06,c:.13*e.A+.04,e1:.5,e2:.8},`upperArm_${f}`,c,[b.x,b.y-e.armUpper/2,0],v);const E=h?o:c;i.blob({a:.11*e.A+(h?0:.04),b:e.armFore/2+.04,c:.12*e.A+(h?0:.04),e1:.5,e2:.8},`foreArm_${f}`,E,[_.x,_.y-e.armFore/2,0],v),!a&&!h&&i.torus(.125*e.A,.03,`foreArm_${f}`,{...c,pattern:void 0},[R.x,R.y+.04,0],[Math.PI/2,0,0]);const g=Math.sqrt(e.A);i.blob({a:.1*g,b:.15*g,c:.085*g,e1:.6,e2:.8},`hand_${f}`,o,[R.x,R.y-.12*g,0]);const y=t.pants.type==="wide"?1.15:1,T=i.rig.bind[`thigh_${f}`],A=i.rig.bind[`shin_${f}`],k=i.rig.bind[`foot_${f}`],F=.19*e.hem*y,O=(t.pants.type==="straight"||t.pants.type==="jeans"?.21:.25)*e.hem*y,L=F+(O-F)*.5,V=Math.sqrt(e.hem)*.9,U=i.cyl(F,L,e.thigh+.02,`thigh_${f}`,m,[T.x+M*.02,T.y-e.thigh/2,0]);Fu(U,V);const Z=A.y-(k.y-.01),et=i.cyl(L,O,Z,`shin_${f}`,m,[A.x+M*.05,A.y-Z/2,0]);Fu(et,V),t.pants.type==="jeans"&&i.torus(O*.98,.03,`shin_${f}`,{color:"#9FC1EE",outline:.7},[A.x+M*.05,k.y+.02,0],[Math.PI/2,0,0]);const ut={color:t.shoes.color,outline:.8},wt={a:.15,b:.075,c:.3,e1:.7,e2:.8};i.blob(wt,`foot_${f}`,ut,[k.x+M*.07,.075,.12],[0,M*.14,0]),t.shoes.type==="sneaker"&&i.blob({...wt,a:.155,b:.03,c:.305},`foot_${f}`,{color:vs===t.shoes.color.toUpperCase()?"#DDDDDD":vs,outline:0},[k.x+M*.07,.03,.12],[0,M*.14,0])}pb(i,t)}function Fu(i,t){i.computeBoundingBox();const e=(i.boundingBox.min.z+i.boundingBox.max.z)/2,n=i.attributes.position;for(let s=0;s<n.count;s++)n.setZ(s,e+(n.getZ(s)-e)*t)}function fb(i,t){const e=new Un(1,3,2);return e.scale(i/2,t/2,.01),e}function pb(i,t){const e=i.d.headU,{q:n,c:s}=Ln(i),o=(h,u)=>[h*e,u*e],r=h=>{for(const[u,d]of[o(-.09,.03),o(.21,.03)])h(u,d)},a={...Vi};switch(t.face.eyes){case"dots3":for(const[h,u]of[o(-.05,.15),o(.23,0)])i.onFace(n,s,Vn(.05*e),"eyes",a,h,u,-.005);break;case"dots2":r((h,u)=>i.onFace(n,s,Vn(.04*e),"eyes",a,h,u,-.005));break;case"x":r((h,u)=>{for(const d of[1,-1])i.onFace(n,s,vn(.11*e,.025*e,.02),"eyes",a,h,u,0,d*Math.PI/4)});break;case"closed":case"happy":r((h,u)=>i.onFace(n,s,Lu(.05*e,.012*e),"eyes",a,h,u,0,t.face.eyes==="closed"?Math.PI:0));break;case"wide":r((h,u)=>{i.onFace(n,s,Vn(.07*e,.3),"eyes",{color:vs,outline:0},h,u,-.005),i.onFace(n,s,Vn(.035*e,.4),"eyes",a,h+.01*e,u,.012)});break}const[l,c]=o(.06,-.2);switch(t.face.mouth){case"dot":i.onFace(n,s,Vn(.05*e),"mouthA",a,...o(-.01,-.22),-.005);break;case"teeth":if(t.face.eyes==="mask")break;i.onFace(n,s,vn(.25*e,.09*e,.02),"mouthA",{color:vs,outline:0},l,c,0);for(const h of[-.06,0,.06])i.onFace(n,s,vn(.012*e,.09*e,.02),"mouthA",a,l+h*e,c,.008);break;case"smile":case"tongue":case"fangs-tongue":if(i.onFace(n,s,Lu(.07*e,.014*e),"mouthA",a,l,c,0,Math.PI),t.face.mouth!=="smile"&&i.onFace(n,s,Vn(.035*e,.3),"mouthA",{color:"#FF5AD9",outline:0},l+.01*e,c-.05*e,.004),t.face.mouth==="fangs-tongue")for(const h of[-1,1])i.onFace(n,s,mb(.015*e,.04*e),"mouthA",{color:vs,outline:0},l+h*.045*e,c-.03*e,.006,Math.PI);break;case"zigzag":for(let h=0;h<4;h++)i.onFace(n,s,vn(.05*e,.014*e,.02),"mouthA",a,l+(h-1.5)*.04*e,c,0,(h%2?1:-1)*.6);break;case"o":i.onFace(n,s,tp(.035*e,.012*e),"mouthA",a,l,c,0);break;case"flat":i.onFace(n,s,vn(.12*e,.016*e,.02),"mouthA",a,l,c,0);break}}const vn=(i,t,e)=>new pn(i,t,e),Lu=(i,t)=>new fr(i,t,5,14,Math.PI),tp=(i,t)=>new fr(i,t,5,16),mb=(i,t)=>new Aa(i,t,6),Le=(i,t,e=.8)=>({color:i??t,outline:e}),Xo=i=>new Sf(i);function we(i,t,e,n){const{c:s}=Ln(i),o=i.d.headU;return[s[0]+t*o,s[1]+e*o,s[2]+n*o]}function Yr(i,t,e=.035,n=1.2){const{q:s,c:o}=Ln(i),r=i.d.headU;i.blob(lo(s,e*r),"head_top",Le(t,"#1C1C1C",1),[o[0],o[1]+.013*r,o[2]-.02*r],[-.32,0,0],n)}function Iu(i,t){const e=new hh;return[[0,i],[.18,.55],[.42,.75],[.5,.2],[.3,-.5],[0,-.6],[-.3,-.5],[-.5,.2],[-.4,.62],[-.2,.45]].forEach(([s,o],r)=>r?e.lineTo(s*t,o*i*.5):e.moveTo(s*t,o*i*.5)),e.closePath(),new Ta(e,{depth:.03,bevelEnabled:!1})}const Il={"mask.vinnie":(i,t)=>{var r;const e=i.d.headU,n={a:.29*e,b:.51*e,c:.05*e,e1:.55,e2:.3},s=we(i,.07,.013,.262);i.blob(n,"head_front",Le(t.color,"#FF5AD9",1),s);const o={color:t.color2??"#E04DC0",outline:0};for(const[a,l]of[[-.103,.086],[.215,.086]])i.onFace(n,s,Vn(.04*e,.3),"eyes",{color:"#FFFFFF",outline:0},a*e,l*e,0),i.onFace(n,s,Vn(.02*e,.4),"eyes",Vi,a*e,l*e,.006*e);i.onFace(n,s,vn(.06*e,.23*e,.02*e),"head_front",o,.088*e,-.013*e,.004*e),((r=t.params)==null?void 0:r.nose)==="cross"&&i.onFace(n,s,vn(.11*e,.05*e,.02*e),"head_front",o,.088*e,-.09*e,.006*e),i.onFace(n,s,vn(.366*e,.134*e,.02*e),"mouthA",{color:"#FFFFFF",outline:0},.052*e,-.241*e,.004*e);for(const a of[-.09,0,.09])i.onFace(n,s,vn(.012*e,.125*e,.02*e),"mouthA",Vi,(.052+a)*e,-.241*e,.012*e)},"mask.strap":(i,t)=>{const{q:e}=Ln(i),n=i.d.headU;i.blob({a:e.a+.02*n,b:.032*n,c:e.c+.02*n,e1:.2,e2:.75},"head",Le(t.color,"#6B6B6B",.7),we(i,0,.108,0))},"collar.vneck-tie":i=>{const{q:t,y:e}=Qf(i),n=lo(t,.04),s=n.b-.06,o=new hh;o.moveTo(-.1,0),o.lineTo(.1,0),o.lineTo(0,-.22),o.closePath(),i.onFace(n,[0,e,0],new Ta(o,{depth:.01,bevelEnabled:!1}),"torso",{color:"#FFFFFF",outline:0},0,s,.002),i.onFace(n,[0,e,0],vn(.056,.2,.012),"torso",Vi,0,s-.17,.012);for(const r of[.3,.45,.6])i.onFace(n,[0,e,0],Vn(.02),"torso",Vi,.012,s-r,.004)},"collar.turtleneck":(i,t)=>{i.cyl(.15,.17,.12,"neck",Le(t.color,"#00B4EE"),[0,i.d.shoulderY+.02,0],void 0,!0)},choker:(i,t)=>{const e=(i.d.shoulderY+i.d.chinY)/2+.02;i.torus(.12,.02,"neck",{color:t.color??"#111111",flat:!0,outline:0},[0,e,0],[Math.PI/2,0,0]),i.torus(.025,.008,"neck",{color:"#C0C0C0",outline:0},[0,e-.03,.12])},"hair.cap":(i,t)=>Yr(i,t.color??"#1C1C1C"),"hair.bun":(i,t)=>{const e=i.d.headU;i.sphere(.16*e,"head_top",Le(t.color,"#7B2CBF",1),we(i,-.14,.5,-.14))},"hair.chopsticks":(i,t)=>{const e=i.d.headU,n={color:t.color??"#FFE100",outline:.7};i.cyl(.014*e,.014*e,.41*e,"head_top",n,we(i,-.103,.576,-.129),[.15,0,-.45]),i.cyl(.014*e,.014*e,.35*e,"head_top",n,we(i,-.18,.559,-.129),[-.2,0,.95])},"hair.buns2":(i,t)=>{const e=i.d.headU;for(const n of[-1,1])i.sphere(.14*e,"head_top",Le(t.color,"#FF7ADB",1),we(i,n*.2,.45,-.05))},"hair.pigtails":(i,t)=>{const e=i.d.headU;for(const n of["L","R"]){const s=n==="L"?-1:1,o=n==="L"?"head_L":"head_R",r=[we(i,s*.3,.25,-.05),we(i,s*.42,.1,-.05),we(i,s*.46,-.1,-.02),we(i,s*.44,-.3,0)];i.tube(r,.02*e,o,Le(t.color,"#1C1C1C",.7),Xo),i.sphere(.09*e,o,Le(t.color,"#1C1C1C",.8),r[3])}},"hair.long":(i,t)=>{const e=i.d.headU,n=t.color??"#FF7ADB";Yr(i,n,.04,1.35),i.cyl(.36*e,.4*e,1*e,"head",Le(n,n,1),we(i,0,-.45,-.12),[0,0,0],!0);for(const s of[-1,1])i.blob({a:.06*e,b:.32*e,c:.08*e,e1:.6,e2:.8},"head",Le(n,n,.8),we(i,s*.33,-.2,.08))},"hair.swoop":(i,t)=>{const e=i.d.headU,n=t.color??"#1C1C1C";Yr(i,n);for(let s=0;s<3;s++)i.cone(.09*e,.32*e,"head_top",Le(n,n,.8),we(i,-.12+s*.12,.5+s*.02,.1-s*.04),[0,0,-1.2],[1,1,.5])},"hair.mohawk":(i,t)=>{const e=i.d.headU;for(let n=0;n<6;n++)i.cone(.07*e,.22*e,"head_top",Le(t.color,"#FF5AD9",.8),we(i,.02,.52-Math.abs(n-2.5)*.02,.2-n*.08),[-(n-2.5)*.15,0,0],[.5,1,1])},"hair.flattop":(i,t)=>{const e=i.d.headU;i.blob({a:.31*e,b:.21*e,c:.25*e,e1:.3,e2:.3},"head_top",Le(t.color,"#3FB4EA",1),we(i,0,.42,-.02))},"hair.bob":(i,t)=>{const e=i.d.headU,n=t.color??"#7B35C4";Yr(i,n,.06,1.75),i.blob({a:.3*e,b:.07*e,c:.08*e,e1:.4,e2:.6},"head_top",Le(n,n,.8),we(i,.02,.3,.22))},horns:(i,t)=>{const e=i.d.headU;for(const n of[-1,1]){const s=[we(i,n*.2,.42,.02),we(i,n*.3,.58,.02),we(i,n*.28,.74,0)];i.tube(s,.05*e,"head_top",Le(t.color,"#E04DC0",.7),Xo),i.cone(.05*e,.12*e,"head_top",Le(t.color,"#E04DC0",.7),we(i,n*.26,.8,0),[0,0,n*.3])}},"ears.cat":(i,t)=>{const e=i.d.headU;for(const n of[-1,1])i.cone(.117*e,.2*e,"head_top",Le(t.color,"#00B4EE",.8),we(i,n*.215,.49,.043),[0,0,-n*.3],[1,1,.45]),i.cone(.065*e,.12*e,"head_top",{color:t.color2??"#FF5AD9",outline:0},we(i,n*.22,.47,.086),[0,0,-n*.3],[1,1,.3])},whiskers:i=>{const{q:t,c:e}=Ln(i),n=i.d.headU;for(const[s,o]of[[-.09,1],[.224,-1]])for(const r of[-.024,0,.024])i.onFace(t,e,vn(.09*n,.007*n*2,.013),"head_front",Vi,s*n,(-.116+r)*n,0,o*r*-8)},"tail.spring":(i,t)=>{const e=i.d,n=-.22*e.belly,s=e.shoulderY-.25,o=[[0,e.hipY-.05,n],[-.45,e.hipY-.12,n-.08],[-.6,e.hipY+.2,n-.08],[-.62,s-.2,n-.06]];for(let a=0;a<=10;a++){const l=Math.PI+a/10*Math.PI*2.5;o.push([-.5+Math.cos(l)*.12*(1-a/22),s+Math.sin(l)*.12*(1-a/22),n-.05])}i.tube(o,.033,"tail",Le(t.color,"#00B4EE",.7),Xo);const r=o[o.length-1];i.sphere(.037,"tail",{color:t.color2??"#FFE100",outline:.7},[r[0],r[1]-.04,r[2]])},hood:(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU,o=t.color??"#5E5E5E";i.blob(lo(e,.09*s),"head",Le(o,o,1),[n[0],n[1]+.03*s,n[2]-.06*s],[-.25,0,0],1.95),i.cyl(.3*s,.36*s,.5*s,"neck",Le(o,o,.8),[0,i.d.shoulderY+.05,-.12],void 0,!0)},"face.flame":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.onFace(e,n,Iu(.75*s,.42*s),"head_front",{color:t.color2??"#FFE100",flat:!0,outline:0},.02*s,-.02*s,0),i.onFace(e,n,Iu(.62*s,.34*s),"head_front",{color:t.color??"#FF5AD9",flat:!0,outline:0},.02*s,-.03*s,.012*s)},"hat.bucket":(i,t)=>{const e=i.d.headU,n=t.color??"#FFFFFF";i.cyl(.3*e,.36*e,.22*e,"head_top",Le(n,n,1),we(i,0,.47,-.02)),i.cyl(.5*e,.5*e,.03*e,"head_top",Le(n,n,1),we(i,0,.37,-.02),[.12,0,0])},"glasses.shades":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU,o={color:t.color??"#111111",outline:0};for(const r of[-.09,.21])i.onFace(e,n,vn(.16*s,.1*s,.03*s),"head_front",o,r*s,.04*s,.01*s);i.onFace(e,n,vn(.16*s,.02*s,.02*s),"head_front",o,.06*s,.06*s,.012*s)},"glasses.aviator":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;for(const o of[-.09,.21])i.onFace(e,n,Vn(.085*s,.2),"head_front",{color:t.color??"#FF9E3A",outline:0},o*s,.03*s,.012*s),i.onFace(e,n,tp(.085*s,.01*s),"head_front",{color:"#E6B94A",outline:0},o*s,.03*s,.014*s)},"visor.cyber":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.blob({a:.33*s,b:.06*s,c:e.c+.03*s,e1:.3,e2:.8},"head_front",Le(t.color,"#FF4A2A",.8),[n[0],n[1]+.04*s,n[2]]),i.onFace(e,n,vn(.4*s,.02*s,.02*s),"head_front",{color:t.color2??"#FFE100",flat:!0,outline:0},.04*s,.04*s,.035*s)},eyepatch:(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.onFace(e,n,Vn(.07*s,.3),"head_front",{color:t.color??"#111111",flat:!0,outline:0},-.09*s,.03*s,.004*s),i.torus(e.a+.01*s,.012*s,"head",{color:"#111111",flat:!0,outline:0},[n[0],n[1]+.06*s,n[2]],[Math.PI/2+.25,0,.1])},"earring.pin":(i,t)=>{const e=t.side==="R"?"head_R":"head_L",n=i.rig.bind[e],s=i.d.headU;i.cyl(.012*s,.012*s,.12*s,e,{color:t.color??"#C0C0C0",outline:0},[n.x+(t.side==="R"?.06:-.06)*s,n.y-.12*s,n.z],[0,0,.4])},"earring.hoop":(i,t)=>{const e=t.side==="R"?"head_R":"head_L",n=i.rig.bind[e],s=i.d.headU;i.torus(.05*s,.01*s,e,{color:t.color??"#FFE100",outline:0},[n.x+(t.side==="R"?.05:-.05)*s,n.y-.15*s,n.z],[0,Math.PI/2,0])},mustache:(i,t)=>{const e=i.d.headU;for(const n of[-1,1]){const s=[we(i,.06,-.12,.27),we(i,.06+n*.08,-.14,.26),we(i,.06+n*.14,-.1,.23)];i.tube(s,.022*e,"head_front",{color:t.color??"#1C1C1C",outline:0},Xo)}},headphones:(i,t)=>{var r,a;const e=i.d.headU,n=((r=t.params)==null?void 0:r.mode)==="neck",s=Le(t.color,"#2C2C2C",.7),o={color:String(((a=t.params)==null?void 0:a.cup)??t.color??"#2C2C2C"),outline:.7};if(n){const l=i.d.shoulderY+.02;for(const c of[-1,1])i.cyl(.15,.15,.08,"neck",o,[c*.24,l,.08],[0,0,Math.PI/2+c*.3]);i.torus(.26,.025,"neck",s,[0,l-.02,-.02],[Math.PI/2-.15,0,0],Math.PI*1.15);return}for(const l of[-1,1]){const c=we(i,l*.38,-.06,0);if(i.cyl(.19*e,.19*e,.09*e,l<0?"head_L":"head_R",o,c,[0,0,Math.PI/2]),l<0)for(const h of[1,-1])i.box(.02,.15*e,.02*e,"head_L",Vi,[c[0]-.05*e,c[1],c[2]],[h*Math.PI/4,0,0])}i.torus(.4*e,.028*e,"head_top",s,we(i,0,.02,-.03),[.14,0,-.03],3.5)},"prop.cup":i=>{const t=i.rig.bind.hand_R;i.cyl(.08,.06,.2,"hand_R",{color:"#FFFFFF",outline:.7},[t.x+.05,t.y-.08,.1]),i.cyl(.085,.085,.05,"hand_R",{color:"#111111",outline:0},[t.x+.05,t.y+.03,.1])},"prop.umbrella":i=>{const t=i.rig.bind.hand_R;i.cyl(.02,.02,1.6,"hand_R",{color:"#111111",outline:.6},[t.x+.05,t.y+.6,.05]),i.cone(.75,.4,"hand_R",{color:"#0AB8EE",outline:.7},[t.x+.05,t.y+1.45,.05])},"prop.briefcase":i=>{const t=i.rig.bind.hand_R;i.box(.42,.3,.12,"hand_R",{color:"#8B5A2B",outline:.7},[t.x+.05,t.y-.35,0]),i.torus(.07,.015,"hand_R",{color:"#111111",outline:0},[t.x+.05,t.y-.18,0])},"prop.bag":i=>{const t=i.rig.bind.hand_R;i.box(.4,.42,.22,"hand_R",{color:"#E2B77F",outline:.7},[t.x+.05,t.y-.38,0]),i.cyl(.05,.05,.42,"hand_R",{color:"#F2C46B",outline:.6},[t.x-.05,t.y-.05,0],[0,0,.3])},"prop.balloon":i=>{const t=i.rig.bind.hand_R;i.cyl(.006,.006,1.3,"hand_R",{color:"#111111",outline:0},[t.x+.1,t.y+.6,0]),i.sphere(.3,"hand_R",{color:"#FF7ADB",outline:.7},[t.x+.12,t.y+1.45,0],[1,1.2,1])},"prop.flowers":i=>{const t=i.rig.bind.hand_R;i.cone(.12,.35,"hand_R",{color:"#F4EEDF",outline:.6},[t.x+.05,t.y+.05,.1],[Math.PI,0,0]),["#FF7ADB","#FFE100","#0AB8EE"].forEach((e,n)=>i.sphere(.08,"hand_R",{color:e,outline:.6},[t.x+.05+(n-1)*.09,t.y+.3+n%2*.06,.1]))},"prop.dog":i=>{const t=i.rig.bind.hand_R,e=1,n={color:"#FFFFFF",outline:.7};i.blob({a:.32,b:.17,c:.18,e1:.8,e2:.8},"root",n,[e,.4,.2]),i.sphere(.16,"root",n,[e+.32,.62,.2]);for(const[s,o]of[[-.18,.1],[-.18,.3],[.18,.1],[.18,.3]])i.cyl(.04,.04,.3,"root",{color:"#111111",outline:0},[e+s,.15,o]);i.tube([[t.x,t.y-.1,.05],[e*.6,.9,.15],[e+.3,.6,.2]],.012,"hand_R",{color:"#FF4A2A",outline:0},Xo)}};function gb(i,t){var e;for(const n of t.attach)(e=Il[n.part])==null||e.call(Il,i,n,t)}const yo=.58;function Du(i,t,e){const n=e?i.filter(M=>M.bone===e):i;if(!n.length)return null;const s=n.map(M=>{const b=M.geo.index?M.geo.toNonIndexed():M.geo;b.attributes.uv||b.setAttribute("uv",new ye(new Float32Array(b.attributes.position.count*2),2)),b.attributes.normal||b.computeVertexNormals();const _=lb(b.clone(),Math.PI);return{g:b,hull:_.attributes.normal,part:M}}),o=s.reduce((M,b)=>M+b.g.attributes.position.count,0),r=new Float32Array(o*3),a=new Float32Array(o*3),l=new Float32Array(o*3),c=new Float32Array(o*2),h=new Float32Array(o*3),u=new Float32Array(o*3),d=new Float32Array(o*4),p=new Float32Array(o),x=new Uint16Array(o*4),S=new Float32Array(o*4);let m=0;for(const{g:M,hull:b,part:_}of s){const R=M.attributes.position,v=M.attributes.normal,E=M.attributes.uv,g=ou(_.paint.color),y=ou(_.paint.color2??_.paint.color),T=Math.max(0,fh.indexOf(_.paint.pattern??"none")),A=t.index[_.bone],k=t.bind[_.bone];for(let F=0;F<R.count;F++,m++){const O=R.getX(F)-(e?k.x:0),L=R.getY(F)-(e?k.y:0),V=R.getZ(F)-(e?k.z:0);r.set([O,L,V],m*3),a.set([v.getX(F),v.getY(F),v.getZ(F)],m*3),l.set([b.getX(F),b.getY(F),b.getZ(F)],m*3),c.set([E.getX(F),E.getY(F)],m*2),h.set([g.r,g.g,g.b],m*3),u.set([y.r,y.g,y.b],m*3),d.set([T,_.paint.rep??3,_.paint.flat?1:0,0],m*4),p[m]=_.paint.outline??.8,x[m*4]=A,S[m*4]=1}}const f=new He;return f.setAttribute("position",new _e(r,3)),f.setAttribute("normal",new _e(a,3)),f.setAttribute("aHullNormal",new _e(l,3)),f.setAttribute("uv",new _e(c,2)),f.setAttribute("color",new _e(h,3)),f.setAttribute("color2",new _e(u,3)),f.setAttribute("aPat",new _e(d,4)),f.setAttribute("aOutline",new _e(p,1)),e||(f.setAttribute("skinIndex",new ih(x,4)),f.setAttribute("skinWeight",new _e(S,4))),f.computeBoundingSphere(),f}function yh(i,t,e={}){var m;const n=db(hb(t,i,e.lab)),s=cb(n),o=new fn;o.name=`peepl-${i.id}`,o.add(s.bones.root),o.updateMatrixWorld(!0);const r=e.groups?null:new oh(s.list),a=$y(),l=jy(),c=[],h=[],u=[],d=[];for(const f of e.lods??[0,1,2]){const M=new Wy(n,s,Vy[f]);ub(M,i),gb(M,i);const b=new fn;b.name=`lod${f}`;let _=0;if(r){const R=Du(M.items,s);d.push(R);const v=new md(R,a),E=new md(R,l);for(const g of[v,E])g.frustumCulled=!1,g.bind(r);v.castShadow=!0,b.add(v,E),h.push(E),_=R.attributes.position.count/3*2}else for(const R of co){const v=Du(M.items,s,R);if(!v)continue;d.push(v);const E=new Me(v,a),g=new Me(v,l);E.castShadow=!0,s.bones[R].add(E,g),E.userData.lod=g.userData.lod=f,h.push(g),_+=v.attributes.position.count/3*2}for(const R of M.items)R.geo.dispose();c[f]=b,u[f]=_,o.add(b)}o.scale.setScalar(yo);let p=!0,x=((m=e.lods)==null?void 0:m[0])??0;const S={id:i.id,root:o,rig:s,dims:n,lods:c,hulls:h,tris:u,setLod(f){x=f,c.forEach((M,b)=>M&&(M.visible=b===f));for(const M of h)r&&(M.visible=p);r||s.bones.root.traverse(M=>{M.userData.lod!==void 0&&(M.visible=M.userData.lod===f&&(p||!h.includes(M)))})},setOutline(f){p=f,S.setLod(x)},dispose(){for(const f of d)f.dispose();o.removeFromParent()}};return S.setLod(x),S}const xb=["idle","walk","talk","sit","react","turn","wave","joy","tv","read","browse","sleep"],on=Math.PI/180,qr=i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,ls=i=>Math.min(1,Math.max(0,i));class Nu{constructor(t=9){I(this,"x",0);I(this,"v",0);this.w=t}step(t,e){const n=this.w*this.w*(t-this.x)-2*this.w*this.v;return this.v+=n*e,this.x+=this.v*e,this.x}}class bh{constructor(t,e,n="peepl"){I(this,"base","idle");I(this,"talking",!1);I(this,"speed",1.6);I(this,"yaw",0);I(this,"t",0);I(this,"bindLocal");I(this,"shots",[]);I(this,"baseFrom","idle");I(this,"baseAt",-10);I(this,"rng");I(this,"nextBlink",2);I(this,"nextLook",3);I(this,"lookFrom",0);I(this,"lookTo",0);I(this,"lookAt",0);I(this,"tail",new Nu(9));I(this,"bun",new Nu(10));I(this,"prevPelvisX",0);I(this,"d");this.rig=t,this.bindLocal={};for(const s of co)this.bindLocal[s]=t.bones[s].position.clone();this.rng=$f(xa(n)),this.d=e}play(t,e){t==="talk"?this.talking=!0:t==="react"||t==="wave"||t==="joy"?this.shots.push({clip:t,at:this.t}):t==="turn"?this.shots.push({clip:t,at:this.t,from:this.yaw,to:e??this.yaw+Math.PI/2}):t!==this.base&&(this.baseFrom=this.base,this.base=t,this.baseAt=this.t)}ok(){return this.rig.list.every(t=>[t.position.x,t.position.y,t.position.z,t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w,t.scale.y].every(Number.isFinite))}update(t){this.t+=t;const e=this.t,n=this.rig.bones;for(const h of co){const u=n[h];u.position.copy(this.bindLocal[h]),u.rotation.set(0,0,0),u.scale.set(1,1,1)}const s=ls((e-this.baseAt)/.7),o=s*s*(3-2*s);this.applyBase(this.baseFrom,1-o,e),this.applyBase(this.base,o,e),this.base!=="sleep"&&this.ground(),n.torso.scale.y=1+.012*Math.sin(2.6*e),this.base!=="walk"&&this.base!=="sleep"&&(n.pelvis.position.x+=.02*Math.sin(e*.9)*Math.sin(e*.37)),e>=this.nextLook&&(this.lookFrom=this.look(e),this.lookTo=(this.rng()*2-1)*10*on,this.lookAt=e,this.nextLook=e+3+this.rng()*3),n.head.rotation.y+=this.look(e),e>=this.nextBlink+.12&&(this.nextBlink=e+2.5+this.rng()*3.5),(e>=this.nextBlink&&e<this.nextBlink+.12||this.base==="sleep")&&(n.eyes.scale.y=.1),this.talking&&(n.mouthA.scale.y=Math.floor(e*14)%2?1.7:1,n.head.rotation.x+=2*on*Math.sin(e*9));let r=0,a=1;this.shots=this.shots.filter(h=>{const u=e-h.at;if(h.clip==="react")return u>.5?!1:(a=u<.08?1-.08*(u/.08):u<.2?.92+.18*((u-.08)/.12):1+.1*(1-qr(ls((u-.2)/.3))),r+=u<.38?.18*Math.sin(Math.PI*u/.38):0,!0);if(h.clip==="joy")return u>.8?!1:(r+=.2*Math.abs(Math.sin(Math.PI*u/.4)),!0);if(h.clip==="wave"){if(u>1.4)return!1;const p=Math.min(ls(u/.2),ls((1.4-u)/.2));return n.upperArm_R.rotation.z+=150*on*p,n.foreArm_R.rotation.z+=.4*Math.sin(u*3*Math.PI*2)*p,!0}const d=ls(u/.35);return this.yaw=h.from+(h.to-h.from)*qr(d),n.head.rotation.y+=(h.to-h.from)*(qr(ls((u+.08)/.35))-qr(d)),u<.45}),n.root.position.y+=r,n.root.scale.y*=a,n.root.scale.x*=1+(1-a)*.5,n.root.rotation.y+=this.yaw;const l=n.pelvis.position.x+n.pelvis.rotation.y,c=(l-this.prevPelvisX)/Math.max(t,.001);this.prevPelvisX=l,n.tail.rotation.z=this.tail.step(-c*.05+.05*Math.sin(e*1.3),t),n.head_top.rotation.z=this.bun.step(-n.head.rotation.y*.15+r*.3,t)}ground(){const t=this.rig.bones,e=this.d;let n=0;for(const s of["L","R"]){const o=t[`thigh_${s}`].rotation.x,r=o+t[`shin_${s}`].rotation.x,a=t[`foot_${s}`].position.y-this.bindLocal[`foot_${s}`].y;n=Math.max(n,e.thigh*Math.cos(o)+(e.hipY-e.thigh-e.ankleY)*Math.cos(r)+e.ankleY-a)}t.pelvis.position.y-=e.hipY-n}look(t){const e=ls((t-this.lookAt)/.5);return this.lookFrom+(this.lookTo-this.lookFrom)*e*e*(3-2*e)}applyBase(t,e,n){if(e<=0)return;const s=this.rig.bones;switch(t){case"walk":{const o=this.speed,r=1.5+.4*o,a=n*r*Math.PI,l=Math.asin(Math.min(.9,o/r/2.5)),c=Math.sin(a);s.thigh_L.rotation.x+=-l*c*e,s.thigh_R.rotation.x+=l*c*e,s.shin_L.rotation.x+=Math.max(0,c)*l*1.3*e,s.shin_R.rotation.x+=Math.max(0,-c)*l*1.3*e,s.upperArm_L.rotation.x+=l*.8*c*e,s.upperArm_R.rotation.x+=-l*.8*c*e,s.pelvis.rotation.z+=2*on*c*e,s.pelvis.rotation.y+=6*on*c*e,s.torso.rotation.y+=-8*on*c*e,s.head.rotation.y+=7*on*c*e,s.foot_L.position.y+=Math.max(0,-c)*.08*e,s.foot_R.position.y+=Math.max(0,c)*.08*e;break}case"sit":case"tv":{for(const o of["L","R"])s[`thigh_${o}`].rotation.x+=-85*on*e,s[`shin_${o}`].rotation.x+=85*on*e,s[`upperArm_${o}`].rotation.x+=-25*on*e,s[`foreArm_${o}`].rotation.x+=-35*on*e;s.torso.rotation.x+=4*on*e,t==="tv"&&(s.head.rotation.x+=4*on*Math.sin(n*Math.PI*2/4)*e);break}case"sleep":s.root.rotation.x+=-Math.PI/2*e,s.root.position.y+=.5*e;break;case"read":s.upperArm_L.rotation.x+=-40*on*e,s.foreArm_L.rotation.x+=-70*on*e,s.head.rotation.x+=12*on*e;break;case"browse":s.head.rotation.y+=.5*Math.sin(n*.5)*e;break}}}const ep="peepls.shapeLab",vb=20*Math.PI/180,_b=1.2,yb=[["2d art",1],["clay sheet",.85],["low poly",.7],["chibi",1.63]],Uu=[{key:"headScale",label:"headScale",min:.5,max:1.6,sane:[.7,1]},{key:"head",label:"head",min:.4,max:2.5,sane:[.9,1.3]},{key:"h",label:"height",min:.4,max:2.5,sane:[.9,1.2]},{key:"T",label:"torso width",min:.4,max:2.5,sane:[.85,2]},{key:"A",label:"arm thickness",min:.4,max:2.5,sane:[.8,1.5]},{key:"hem",label:"trouser hem",min:.4,max:2.5,sane:[.75,1.85]},{key:"belly",label:"belly depth",min:.4,max:2.5,sane:[.85,1.5]},{key:"legs",label:"leg length",min:.4,max:2.5,sane:[.85,1.1]}];function bb(){try{const i=localStorage.getItem(ep);if(i)return{all:{},per:{},scope:"this",...JSON.parse(i)}}catch{}return{all:{},per:{},scope:"this"}}function jr(i){try{localStorage.setItem(ep,JSON.stringify(i))}catch{}}function Mb(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ur(i)}function wb(){let i,t=0;const e=new Sa,n=new yn(22,16/9,.1,400);let s=[],o=[],r,a="vinnie",l=!1,c=null,h=0,u=!0,d="idle",p=null,x=.6,S=null,m=bb();const f=[];let M,b,_,R,v;const E={},g={},y=new te,T=(mt,St)=>{const X=s.find(K=>K.id===mt)??s[0],ot=St??p;return ot?{...X,body:ot}:X},A=mt=>({...m.all,...m.per[mt]??{}});function k(){for(const mt of f)mt.peepl.dispose();f.length=0}function F(mt=!1){k();const St=l?c??o.map(ot=>({id:ot})):[{id:a}],X=l?c?0:1:h;St.forEach(({id:ot,body:K,lab:yt},Dt)=>{const Ut=St,gt=yh(T(ot,K),r,{lab:{...A(ot),...yt??{}},groups:i.params.rig==="groups",lods:mt||l?[X]:[0,1,2]});gt.setLod(X),gt.setOutline(u),gt.root.position.x=l?(Dt-(Ut.length-1)/2)*_b*(c?1.6:1):0,e.add(gt.root);const Pt=new bh(gt.rig,gt.dims,ot);Pt.play(d),f.push({peepl:gt,anim:Pt})}),M.count=f.length,b.visible=!l,In.chars=f.length,In.lod=[l?0:h===0?1:0,l?f.length:h===1?1:0,h===2&&!l?1:0],O()}function O(){var X;for(const[ot,K]of Object.entries(g))K.setAttribute("aria-pressed",String(!l&&ot===a));const mt=m.scope==="all"?m.all:m.per[a]??{};for(const ot of Uu){const K=mt[ot.key]??(ot.key==="headScale"?T(a).headScale:1);E[ot.key]&&(E[ot.key].value=String(K))}const St=(X=f[0])==null?void 0:X.peepl;St&&v&&(v.textContent=`${ku(St.dims).toFixed(2)} heads`)}function L(mt,St,X){var K;const ot=m.scope==="all"?m.all:(K=m.per)[a]??(K[a]={});ot[mt]=St,jr(m),F(X)}function V(){var ot;const mt=A(a),St=m.scope==="all"?{bodyTypes:Object.fromEntries(Object.entries(r).map(([K,yt])=>[K,Object.fromEntries(zc.map(Dt=>[Dt,+(yt[Dt]*(m.all[Dt]??1)).toFixed(3)]))]))}:{headScale:mt.headScale??T(a).headScale,shape:Object.fromEntries(zc.filter(K=>mt[K]!==void 0).map(K=>[K,mt[K]]))},X=JSON.stringify(St,null,2);(ot=navigator.clipboard)==null||ot.writeText(X).catch(()=>{}),i.toast.show(X.length>60?`${X.slice(0,57)}…`:X,2)}const U=(mt,St,X="")=>{const ot=H("button",{class:"pixel",style:`pointer-events:auto;font-size:24px;padding:2px 12px 4px;border-radius:999px;border:2px solid var(--white);color:var(--white);background:var(--ink);${X}`});return ot.textContent=mt,ot.addEventListener("click",K=>{K.stopPropagation(),St()}),ot};function Z(mt){const St="position:absolute;top:120px;width:380px;max-height:900px;overflow:auto;background:var(--ink);color:var(--white);border-radius:24px;padding:18px;display:flex;flex-direction:column;gap:10px;pointer-events:auto",X=gt=>H("div",{class:"display",style:"font-size:28px;color:var(--yellow)"},gt),ot=(...gt)=>H("div",{style:"display:flex;flex-wrap:wrap;gap:6px"},...gt),K=ot(...o.map(gt=>g[gt]=U(gt,()=>{l=!1,a=gt,F()}))),yt=H("select",{class:"pixel",style:"font-size:24px;pointer-events:auto"});for(const gt of["","thin","average","stocky","xl"])yt.append(H("option",{value:gt},gt||"body: cast.json"));yt.addEventListener("change",()=>{p=yt.value||null,F()}),_=H("div",{class:"s99-left",style:`${St};left:40px`},X("cast"),K,yt,X("clips"),ot(...xb.map(gt=>U(gt,()=>{var Pt;return(Pt=Tt.clip)==null?void 0:Pt.call(Tt,gt)}))),X("view"),ot(U("lod 0",()=>{var gt;return(gt=Tt.lod)==null?void 0:gt.call(Tt,0)}),U("lod 1",()=>{var gt;return(gt=Tt.lod)==null?void 0:gt.call(Tt,1)}),U("lod 2",()=>{var gt;return(gt=Tt.lod)==null?void 0:gt.call(Tt,2)}),U("line-up",()=>{var gt;return(gt=Tt.lineup)==null?void 0:gt.call(Tt,!l)}),U("outline",()=>{var gt;return(gt=Tt.outline)==null?void 0:gt.call(Tt,!u)}))),v=H("div",{class:"pixel heads-out",style:"font-size:30px;color:var(--yellow)"});const Dt=Uu.map(gt=>{const Pt=H("input",{type:"range",min:gt.min,max:gt.max,step:.01,"aria-label":gt.label,style:"width:100%;accent-color:var(--pink);pointer-events:auto"});Pt.addEventListener("input",()=>L(gt.key,Number(Pt.value),!0)),Pt.addEventListener("change",()=>L(gt.key,Number(Pt.value),!1)),E[gt.key]=Pt;const it=ht=>(ht-gt.min)/(gt.max-gt.min)*100,ft=H("div",{style:`position:absolute;left:${it(gt.sane[0])}%;width:${it(gt.sane[1])-it(gt.sane[0])}%;top:0;bottom:0;background:var(--lit-white-60);opacity:0.25;border-radius:6px`});return H("label",{class:"pixel",style:"font-size:22px;display:flex;flex-direction:column;gap:2px"},gt.label,H("div",{style:"position:relative"},ft,Pt))}),Ut=U("scope: this peepl",()=>{m.scope=m.scope==="all"?"this":"all",Ut.textContent=m.scope==="all"?"scope: everyone":"scope: this peepl",jr(m),O()});Ut.textContent=m.scope==="all"?"scope: everyone":"scope: this peepl",R=H("div",{class:"s99-right",style:`${St};right:40px`},X("shape lab"),v,ot(...yb.map(([gt,Pt])=>U(gt,()=>L("headScale",Pt,!1)))),...Dt,ot(Ut,U("reset",()=>{m.scope==="all"?m.all={}:delete m.per[a],jr(m),F()}),U("copy json",V))),mt.append(_,R)}const et=document.getElementById("gl"),ut=mt=>{S={x:mt.clientX,o:x}},wt=mt=>{S&&(x=S.o-(mt.clientX-S.x)*.008)},It=()=>{S=null};function qt(mt){const St=mt.clone().project(n);return[(St.x+1)/2*innerWidth,(1-St.y)/2*innerHeight]}return{id:"S99",mount(mt,St){i=mt,s=mt.data.cast.cast,r=mt.data.cast.bodyTypes,o=mt.copy.S12.lineup,mt.params.cast&&s.some(K=>K.id===mt.params.cast)&&(a=mt.params.cast),u=mt.params.outline!=="none";const X=vo({lowgpu:mt.params.lowgpu});X.shadowMap.enabled=!1,_o(!0);const ot=_h();e.add(ot.group),M=new Es(new Zi(1,1),new Yn({map:Mb(),transparent:!0,depthWrite:!1}),16),M.renderOrder=-1,e.add(M),b=new Me(new pn(.6,.6,.6),new Ei({color:16769280,gradientMap:Ai()})),b.position.set(1.5,.3,-.4),e.add(b),Z(St),et.addEventListener("pointerdown",ut),addEventListener("pointermove",wt),addEventListener("pointerup",It),Object.assign(Tt,{cast:K=>{l=!1,a=K,F()},shape:(K,yt)=>{K==="all"?m.all=yt??{}:yt?m.per[K]=yt:delete m.per[K],jr(m),F()},clip:K=>{d=K;for(const yt of f)yt.anim.play(d)},lod:K=>{h=K,l=!1,F()},lineup:K=>{l=K,c=null,F()},row:K=>{l=!0,c=K,F()},outline:K=>{u=K;for(const yt of f)yt.peepl.setOutline(K)},measure:()=>{let K=1/0,yt=0;const Dt=new N;for(const Ut of f){Ut.peepl.root.updateMatrixWorld(!0);for(const gt of["foot_L","foot_R"])Ut.peepl.rig.bones[gt].getWorldPosition(Dt),K=Math.min(K,Dt.y/yo-Ut.peepl.dims.ankleY);Ut.peepl.rig.bones.head_top.getWorldPosition(Dt),yt=Dt.y/yo/Ut.peepl.dims.headU}return{heads:f.length===1?yt:ku(f[0].peepl.dims),soleMin:K,rigOk:f.every(Ut=>Ut.anim.ok())}},swatchPx:()=>b.visible?qt(new N(b.position.x,b.position.y+.3,b.position.z)):null,centrePx:()=>qt(new N(0,1.1,0))}),F()},enter(){this.update(0,0)},update(mt,St){t=St;const X=l?c?6+c.length*3:30:8.5,ot=l?.3:.42,K=l?0:x,yt=new N(l?0:.35,l?1:.95,0);n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),n.position.set(yt.x+Math.sin(K)*Math.cos(ot)*X,yt.y+Math.sin(ot)*X,yt.z+Math.cos(K)*Math.cos(ot)*X),n.lookAt(yt),f.forEach((Dt,Ut)=>{Dt.anim.update(mt),l||(Dt.peepl.root.rotation.y=t*vb),y.makeRotationX(-Math.PI/2).setPosition(Dt.peepl.root.position.x,.005,Dt.peepl.root.position.z),y.scale(new N(.64,.64,1)),M.setMatrixAt(Ut,y)}),M.instanceMatrix.needsUpdate=!0,In.rigOk=f.every(Dt=>Dt.anim.ok()),i.loop.drawFrame&&(vo().render(e,n),gh())},landed:()=>t>=.2,onInput(mt){var St;mt.type==="key"&&mt.key==="l"&&((St=Tt.lineup)==null||St.call(Tt,!l))},exit(){},unmount(){et.removeEventListener("pointerdown",ut),removeEventListener("pointermove",wt),removeEventListener("pointerup",It),k();for(const mt of Object.keys(Tt))delete Tt[mt];_o(!1),e.clear()},seek(mt){t=mt}}}class Sb{constructor(t,e){I(this,"el");I(this,"fill");I(this,"at",-1);this.fill=H("div",{style:"height:100%;width:0;background:var(--pink);border-radius:999px"}),this.el=H("div",{class:"friend-meter",style:"position:absolute;left:750px;top:44px;width:420px;height:96px;border-radius:24px;background:var(--ink);display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform-origin:50% 0"},H("div",{class:"display",style:"font-size:36px;color:var(--yellow)"},t),H("div",{style:"width:300px;height:12px;border-radius:999px;background:var(--lit-tier-off)"},this.fill),H("div",{class:"pixel",style:"font-size:26px;color:var(--white)"},e))}show(t){this.at=t}hide(){this.at=-1}update(t,e){if(this.at<0)return void(this.el.style.display="none");const[n,s]=Fe(t,this.at,.4,e);Bt(this.el,{display:"flex",transform:`scale(${n})`,opacity:String(s)}),this.fill.style.width=`${le(t,this.at,.8,se.draw)*100}%`}}function np(i,t="white"){const e=`var(--${t})`;return H("div",{class:"bubble",style:"position:absolute;left:0;top:0;transform-origin:50% 100%;pointer-events:none"},H("div",{class:"pixel bubble-box",style:`position:relative;background:${e};border:5px solid var(--ink);border-radius:18px;padding:8px 18px 10px;font-size:40px;color:var(--ink);width:max-content;max-width:900px;text-wrap:balance;line-height:1.05;margin-bottom:18px`},H("span",{class:"bubble-text"},i),H("div",{class:"bubble-tail",style:`position:absolute;left:50%;bottom:-15px;width:22px;height:22px;margin-left:-11px;background:${e};border-right:5px solid var(--ink);border-bottom:5px solid var(--ink);transform:rotate(45deg)`})))}function Eb(i,t,e,n,s,o=1,r=[]){const a=i.firstElementChild,l=`${Math.min(900,(innerWidth-24)/n)}px`;a&&a.style.maxWidth!==l&&(a.style.maxWidth=l);const c=i.offsetWidth*n/2,h=e-i.offsetHeight*n;let u=Math.min(Math.max(t,c+8),innerWidth-c-8);for(const p of r)h>p.bottom||e<p.top||u+c<p.left||u-c>p.right||(u=t<(p.left+p.right)/2?Math.min(u,p.left-c-8):Math.max(u,p.right+c+8));u=Math.min(Math.max(u,c+8),innerWidth-c-8);const d=i.querySelector(".bubble-tail");d&&(d.style.left=`calc(50% + ${Math.max(-c/n+30,Math.min(c/n-30,(t-u)/n))}px)`),Bt(i,{transform:`translate(${u}px, ${e}px) translate(-50%, -100%) scale(${n*s})`,opacity:String(o),visibility:s>.001&&o>0?"visible":"hidden"})}const Ab=7,ii=Math.PI/180,Ou=.58,Hc=(i,t)=>Math.atan2(t.x-i.x,t.z-i.z),Bu=(i,t)=>{const e=i.crowd.members.get(t);if(e)return{x:e.peepl.root.position.x,z:e.peepl.root.position.z,yaw:e.anim.yaw,anim:"idle"};const n=i.sim.agents.get(t);return n?{x:n.pos[0],z:n.pos[1],yaw:n.yaw,anim:"idle"}:null};class Tb{constructor(t,e){I(this,"active",!1);I(this,"t0",0);I(this,"steps",[]);I(this,"done",new Set);I(this,"choiceAt",-1);I(this,"chips",null);I(this,"branchAt",-1);this.stage=t,this.data=e}start(){const t=this.stage,e=Bu(t,"vinnie"),n=Bu(t,"mochi");if(!e||!n)return;this.active=!0,this.t0=t.t,this.steps=this.data.steps,this.done.clear(),this.branchAt=-1,t.holdSim(!0),t.poses.set("vinnie",{...e,anim:"idle"}),t.poses.set("mochi",{...n,anim:"idle"});const s=new N((e.x+n.x)/2,0,(e.z+n.z)/2);t.rig.go({target:s.setY(1),yaw:45*ii,pitch:24*ii,dist:this.data.camera.dist},.9,"venue")}choose(t){var s;if(!this.chips||!this.active)return;const n=(((s=this.data.steps.find(o=>o.choices))==null?void 0:s.choices)??[])[t];n&&(this.stage.hud.remove("contact-ask"),this.chips=null,this.steps=n.value==="sayhi"?this.data.onSayHi:this.data.onNotNow,this.done.clear(),this.branchAt=this.stage.t,this.choiceAt=-1,n.value==="notnow"&&this.stage.choice("contact","notnow"))}update(){if(!this.active)return;const t=this.stage,e=this.branchAt>=0?this.branchAt:this.t0,n=t.t-e;if(this.steps.forEach((s,o)=>{this.done.has(o)||n<s.t||(this.done.add(o),this.run(s))}),this.chips&&this.choiceAt>=0&&t.auto()){const s=Math.min(1,(t.t-this.choiceAt)/Ab);this.chips.firstElementChild.style.background=`linear-gradient(90deg, var(--yellow) ${s*100}%, var(--white) ${s*100}%)`,s>=1&&this.choose(0)}}run(t){var s;const e=this.stage,n=t.who??"vinnie";switch(t.do){case"turn":{const o=e.poses.get(n),r=e.poses.get(t.to??"mochi");o&&r&&(o.yaw=Hc(o,r));break}case"bubble":{if(t.choices){const o=np(t.text??"","white"),r=H("div",{style:"display:flex;gap:12px;margin-top:10px"});t.choices.forEach((a,l)=>{const c=H("button",{class:"pixel contact-chip",style:"pointer-events:auto;font-size:38px;padding:6px 22px 8px;border-radius:999px;border:5px solid var(--ink);background:var(--white);color:var(--ink)"},a.label==="say hi"?e.copy.S8.contactYes:a.label==="not now"?e.copy.S8.contactNo:a.label);c.addEventListener("click",h=>{h.stopPropagation(),this.choose(l)}),r.append(c)}),o.querySelector(".bubble-box").append(r),e.hud.remove(`${n}-say`),e.hud.attach("contact-ask",o,e.anchor(n),e.t,60,11),this.chips=r,this.choiceAt=e.t}else e.hud.remove("contact-ask"),e.hud.bubble(`${n}-say`,t.text??"",e.anchor(n),e.t,2.4,{colour:t.style==="yellow"?"yellow":"white"});break}case"clip":(s=e.crowd.members.get(n))==null||s.anim.play(t.clip??"react");break;case"hop":e.hop(n);break;case"end":this.active=!1,t.next==="cafe"?e.choice("contact","sayhi"):(e.poses.delete("vinnie"),e.poses.delete("mochi"),e.holdSim(!1),e.townShot());break}}}class Cb{constructor(t,e){I(this,"active",!1);I(this,"t0",0);I(this,"e",0);I(this,"entered",new Set);I(this,"box");I(this,"boxAt",-1);I(this,"boxDropAt",-1);I(this,"line",null);I(this,"meter");I(this,"pills",[]);I(this,"pillAt",-1);I(this,"walks",[]);I(this,"cups",!1);I(this,"ended",!1);I(this,"orbit",null);I(this,"toastAt",-1);this.stage=t,this.data=e,this.box=new jf({VINNIE:"var(--red)",MOCHI:"var(--pink)",YOU:"var(--cyan)"},"down"),Bt(this.box.el,{left:460,top:830,display:"none"}),this.meter=new Sb(t.copy.S8.friendTitle,t.copy.S8.friendLine);const n=rn([Ms("dot",18,"var(--yellow)"),t.copy.S8.herePill],{size:28}),s=rn([t.copy.S8.cafePill],{size:28});Bt(s,{position:"absolute",left:50,top:50}),Bt(n,{position:"absolute",right:50,top:50}),s.classList.add("cafe-pill"),n.classList.add("here-pill"),this.pills=[s,n];for(const o of this.pills)o.style.display="none";Pe(this.box.el,{left:60,top:1480,width:960,height:300}),Pe(this.meter.el,{left:330,top:260}),Pe(s,{left:40,top:50}),Pe(n,{right:40,top:50}),t.root.append(this.box.el,this.meter.el,...this.pills)}get t(){return this.e}get lineText(){var t;return((t=this.box.el.querySelector(".dialogue-text"))==null?void 0:t.textContent)??""}start(){const t=this.stage,e=this.data.marks;this.active=!0,this.ended=!1,this.t0=t.t,this.e=0,this.entered.clear(),this.walks=[],this.line=null,this.boxAt=this.boxDropAt=-1,this.meter.hide(),this.cups=!1,t.holdSim(!0),t.hideHud(!0),t.hud.clear(),t.poses.set("vinnie",{x:e.vinnieFrom[0],z:e.vinnieFrom[1],yaw:Math.PI/2,anim:"walk"}),t.poses.set("mochi",{x:e.mochiFrom[0],z:e.mochiFrom[1],yaw:-Math.PI/2,anim:"walk"})}update(t){if(!this.active)return;const e=this.stage;this.e=e.t-this.t0;for(const a of this.data.shots)this.e>=a.t[0]&&!this.entered.has(a.id)&&this.enter(a);this.walks=this.walks.filter(a=>{const l=e.poses.get(a.id),c=a.to[0]-l.x,h=a.to[1]-l.z,u=Math.hypot(c,h),d=a.speed*t;return u<=d?(l.x=a.to[0],l.z=a.to[1],l.anim=a.then,a.yaw!==void 0&&(l.yaw=a.yaw),!1):(l.x+=c/u*d,l.z+=h/u*d,l.yaw=Math.atan2(c,h),l.anim="walk",!0)});for(const a of["vinnie","mochi"]){const l=e.crowd.members.get(a);l&&(l.anim.talking=!!this.line&&this.line.who.toLowerCase()===a&&this.e-this.line.at<Ko(this.line.text))}const n=this.boxAt<0?0:Fe(this.e,this.boxAt,.4,e.reduced)[0],s=this.boxDropAt<0?0:le(this.e,this.boxDropAt,.3,se.enter);Bt(this.box.el,{display:this.boxAt<0||s>=1?"none":"block",transform:`translateY(${s*260}px) scale(${n})`}),this.box.update(this.e,-1,e.reduced,this.line,this.line?this.e-this.line.at:0),this.meter.update(this.e,e.reduced);const[o,r]=this.pillAt<0?[0,0]:Fe(this.e,this.pillAt,.4,e.reduced);for(const a of this.pills)Bt(a,{display:this.pillAt<0?"none":"inline-flex",transform:`scale(${o})`,opacity:String(r)});this.orbit&&e.rig.go({yaw:this.orbit.from+15*ii*Math.min(1,(this.e-this.orbit.at)/7)},.01),this.e>=this.data.end.t&&!this.ended&&this.finish()}enter(t){const e=this.stage;this.entered.add(t.id);const n=e.poses.get("vinnie"),s=e.poses.get("mochi"),o=t.camera;if(o.shot==="venue"){const r=o.target?new N(o.target[0],o.target[1],o.target[2]):new N((n.x+s.x)/2,1,(n.z+s.z)/2),a=Array.isArray(o.dist)?o.dist:[o.dist??16,o.dist??16];e.rig.go({target:r,yaw:45*ii,pitch:(o.pitch??24)*ii,dist:a[0]},t.id==="C1"?0:o.seconds??.9,"venue"),a[0]!==a[1]&&e.rig.dolly(a[0],a[1],t.t[1]-t.t[0]),this.orbit=o.orbitDeg?{from:45*ii,at:this.e}:null}else if(o.shot==="close"){const r=new N(n.x,0,n.z),a=new N(s.x,0,s.z),l=r.clone().add(a).multiplyScalar(.5).setY(1.25),c=o.favour==="mochi"?a:r,h=o.favour==="mochi"?r:a;l.add(c.clone().setY(1.25).sub(l).multiplyScalar(.18));let u=Math.atan2(a.x-r.x,a.z-r.z)+Math.PI/2;Math.cos(u-45*ii)<0&&(u+=Math.PI);const d=Math.atan2(h.x-c.x,h.z-c.z);u+=25*ii*Math.sign(Math.sin(d-u)),e.rig.go({target:l,yaw:u,pitch:10*ii,dist:7.5},.5,"close");const p=u;for(const[x,S]of[[n,s],[s,n]]){const m=Hc(x,S);x.yaw=m+14*ii*Math.sign(Math.sin(p-m))}}t.line&&(this.line=t.line);for(const r of t.actions??[])this.act(r)}act([t,...e]){var r;const n=this.stage,s=a=>a==="both"?["vinnie","mochi"]:[String(a)],o=a=>typeof a=="number"?a:this.e;switch(t){case"walk":{const[a,l,c]=e,h=l==="mark"?this.data.marks[a]:c,u=l==="mark"?c*Ou:1.6*Ou,d=a==="vinnie"?"mochi":"vinnie",p=l==="mark"?this.data.marks[d]:null,x=p?Math.atan2(p[0]-h[0],p[1]-h[1]):a==="vinnie"?Math.PI/2:-Math.PI/2;this.walks.push({id:a,to:[...h],speed:u,then:l==="seat"?"sit":"idle",yaw:x});break}case"pill":this.pillAt<0&&(this.pillAt=o(e[1]));break;case"hide":break;case"clip":{const[a,l]=e;for(const c of s(a))l!=="sit"&&((r=n.crowd.members.get(c))==null||r.anim.play(l));break}case"turn":{const[a,l]=e,c=n.poses.get(a),h=n.poses.get(l);c&&h&&(c.yaw=Hc(c,h));break}case"bang":for(const a of s(e[0])){const l=H("div",{class:"display bang",style:"width:44px;height:52px;background:var(--yellow);border:5px solid var(--ink);border-radius:8px;font-size:40px;line-height:1;color:var(--ink);display:flex;align-items:center;justify-content:center"},"!");n.hud.attach(`bang-${a}`,l,n.anchor(a,.35),n.t,.5,8)}break;case"dialogueBox":e[0]==="rise"?this.boxAt=o(e[1]):this.boxDropAt=o(e[1]);break;case"friendMeter":this.meter.show(o(e[0]));break;case"cups":this.cups=!0;break;case"toast":this.toastAt=o(e[1]);break}}late(){this.toastAt>=0&&this.e>=this.toastAt&&(this.toastAt=-1,this.stage.toast(this.stage.copy.S8.mochiAdded))}get cupsOn(){return this.cups}finish(){this.ended=!0;const t=this.stage;t.wipe(()=>{this.active=!1,this.box.el.style.display="none",this.meter.hide(),this.meter.update(0,!0);for(const s of this.pills)s.style.display="none";this.pillAt=-1;const e=t.poses.get("vinnie"),n=t.poses.get("mochi");t.sim.placeAt("vinnie",[e.x,e.z],"sit",e.yaw),t.sim.placeAt("mochi",[n.x,n.z],"sit",n.yaw),t.poses.clear(),t.hideHud(!1),t.holdSim(!1),t.townShot()})}facing(){var n,s,o,r;const t=((n=this.stage.crowd.members.get("vinnie"))==null?void 0:n.anim.yaw)??0,e=((s=this.stage.crowd.members.get("mochi"))==null?void 0:s.anim.yaw)??0;return{vinnie:t,mochi:e,poses:{vinnie:((o=this.stage.poses.get("vinnie"))==null?void 0:o.anim)??"",mochi:((r=this.stage.poses.get("mochi"))==null?void 0:r.anim)??""}}}}class Rb{constructor(t=4){I(this,"el");I(this,"badge");I(this,"name");I(this,"tag");I(this,"segs");I(this,"popAt",-10);I(this,"tier",0);this.badge=H("span",{class:"pixel tier-badge",style:"background:var(--yellow);border:5px solid var(--ink);border-radius:12px;padding:6px 14px 8px;font-size:36px;color:var(--ink)"}),this.name=H("span",{class:"display tier-name",style:"font-size:46px;color:var(--white)"}),this.tag=H("span",{class:"pixel tier-tag",style:"border:4px solid currentColor;border-radius:8px;padding:4px 10px 6px;font-size:28px"}),this.segs=Array.from({length:t},()=>H("span",{style:"width:54px;height:12px;border-radius:4px;background:var(--lit-tier-off)"})),this.el=H("div",{class:"tier-chip",style:"position:absolute;left:50px;top:50px;transform-origin:0 0"},H("div",{style:"display:inline-flex;align-items:center;gap:14px;background:var(--ink);border-radius:999px;padding:10px 16px"},this.badge,this.name,this.tag),H("div",{style:"display:flex;gap:10px;margin:14px 0 0 16px"},...this.segs))}set(t,e,n,s,o,r){t!==this.tier&&(this.tier=t,this.popAt=r),this.badge.textContent=e,this.name.textContent=n,this.tag.textContent=s,this.tag.style.color=o?"var(--yellow)":"var(--white)",this.segs.forEach((a,l)=>a.style.background=l<t?"var(--pink)":"var(--lit-tier-off)")}update(t,e){const n=e?1:.7+.3*le(t,this.popAt,.35,se.pop);Bt(this.el,{transform:`scale(${n})`})}}class Pb{constructor(t,e,n){I(this,"el");I(this,"km");I(this,"trail");I(this,"dot");I(this,"map");I(this,"points",[]);I(this,"shownAt",-1);I(this,"shrinkAt",-1);I(this,"expanded",!1);this.km=H("span",{class:"gps-km"}),this.trail=ae("polyline",{style:"fill:none;stroke:var(--cyan);stroke-width:8;stroke-linecap:round;stroke-linejoin:round"}),this.dot=ae("circle",{r:11,style:"fill:var(--cyan);stroke:var(--ink);stroke-width:4"});const s=r=>ae("polyline",{points:r,style:"fill:none;stroke:var(--white);stroke-width:16;stroke-linecap:round;stroke-linejoin:round"});this.map=ae("svg",{class:"gps-map",width:348,height:212,viewBox:"0 0 348 212",style:"display:block;background:var(--lit-map);touch-action:none;pointer-events:auto;cursor:grab"},ae("rect",{x:196,y:120,width:90,height:70,rx:10,style:"fill:var(--lit-map-park)"}),ae("rect",{x:320,y:0,width:28,height:212,style:"fill:var(--lit-map-river)"}),s(e.map(r=>r.join(",")).join(" ")),s("20,118 330,118"),s("150,10 150,200"),this.trail,this.dot),this.el=H("div",{class:"gps-card",style:"position:absolute;right:50px;top:50px;width:360px;background:var(--white);border:6px solid var(--ink);border-radius:24px;overflow:hidden;transform-origin:100% 0;pointer-events:auto"},H("div",{class:"pixel",style:"height:46px;background:var(--ink);color:var(--yellow);font-size:30px;display:flex;align-items:center;justify-content:space-between;padding:0 16px"},H("span",{},t),this.km),this.map);let o=null;this.map.addEventListener("pointerdown",r=>{r.stopPropagation(),this.map.setPointerCapture(r.pointerId),o={x:r.clientX,y:r.clientY,moved:!1}}),this.map.addEventListener("pointermove",r=>{if(!o)return;const l=348/this.map.getBoundingClientRect().width,c=(r.clientX-o.x)*l,h=(r.clientY-o.y)*l;Math.hypot(c,h)>2&&(o.moved=!0),n(c,h),o.x=r.clientX,o.y=r.clientY}),this.map.addEventListener("pointerup",()=>{o&&!o.moved&&(this.expanded=!this.expanded),o=null})}show(t){this.shownAt<0&&(this.shownAt=t)}shrink(t){this.shrinkAt<0&&(this.shrinkAt=t)}get visible(){return this.shownAt>=0}update(t,e,n,s,o){const r=this.points[this.points.length-1];(!r||Math.hypot(r[0]-n[0],r[1]-n[1])>2)&&this.points.push([...n]),this.trail.setAttribute("points",this.points.map(u=>u.join(",")).join(" ")),this.dot.setAttribute("cx",String(n[0])),this.dot.setAttribute("cy",String(n[1])),this.km.textContent=s.replace("{km}",e.toFixed(1));const[a,l]=this.shownAt<0?[0,0]:Fe(t,this.shownAt,.3,o),c=this.shrinkAt<0?0:le(t,this.shrinkAt,.35,se.draw),h=this.expanded?600/360:1;Bt(this.el,{transform:`scale(${a*h*(1-c)})`,opacity:String(l),display:this.shownAt<0?"none":"block"})}}class kb{constructor(t){I(this,"el");I(this,"text");I(this,"lines",[]);I(this,"shownAt",-1);I(this,"x",0);this.text=H("span",{class:"ticker-text",style:"display:inline-block;white-space:nowrap;color:var(--white)"}),this.el=H("div",{class:"pixel ticker",style:"position:absolute;left:50%;top:50px;max-width:640px;display:none;align-items:center;gap:14px;background:var(--ink);border-radius:999px;padding:8px 22px 10px;font-size:30px;transform-origin:50% 0"},H("span",{style:"color:var(--yellow);flex:none"},t),H("span",{style:"overflow:hidden;flex:1;min-width:0;max-width:520px;mask-image:linear-gradient(90deg,transparent,black 28px,black calc(100% - 28px),transparent)"},this.text))}start(t,e){this.shownAt<0&&(this.shownAt=t),this.setLines(e)}setLines(t){t.join("|")!==this.lines.join("|")&&(this.lines=t,this.text.textContent=t.join("  ·  "),this.x=0)}get content(){return this.text.textContent??""}update(t,e,n){if(this.shownAt<0)return;const[s,o]=Fe(t,this.shownAt,.3,n);Bt(this.el,{display:"flex",transform:`translateX(-50%) scale(${s})`,opacity:String(o)}),this.x-=e*60;const r=this.text.scrollWidth||1;-this.x>r&&(this.x=520),this.text.style.transform=`translateX(${this.x}px)`}}const ip=(i,t)=>{const n=Math.min(1,Math.max(0,(i-t)/1.4))-1;return 1+2.70158*n**3+1.70158*n**2},ys=(i,t,e=0)=>new N(i,e,t);function sp(i,t=64){const e=document.createElement("canvas"),n=e.getContext("2d");n.font=`${t}px VT323`;const s=Math.ceil(n.measureText(i).width)+t*.75;e.width=s,e.height=Math.ceil(t*1.25);const o=t*.18;n.fillStyle="#111111",n.strokeStyle="#FFE100",n.lineWidth=t*.08,n.beginPath(),n.roundRect(n.lineWidth,n.lineWidth,e.width-2*n.lineWidth,e.height-2*n.lineWidth,o),n.fill(),n.stroke(),n.font=`${t}px VT323`,n.fillStyle="#FFE100",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e.width/2,e.height/2+t*.04);const r=new ur(e);return r.colorSpace=Ke,{tex:r,aspect:e.width/e.height}}function Fb(i){const t=[];for(const e of i.buildings)e.sign&&t.push({text:e.sign.text,pos:ys(e.sign.at[0],e.sign.at[1],e.sign.z),face:e.sign.face,d0:e.d0,height:.55});for(const e of i.props)e.sign&&t.push({text:e.sign.text,pos:ys(e.at[0]+.95,e.at[1]+.01,2.1),face:"y",d0:e.d0,height:.4});for(const e of i.landmarks)e.sign&&e.monument&&t.push({text:e.sign,pos:ys(e.monument[0],e.monument[1]+.6,2.4),face:"y",d0:19.84,height:.6});return t}class Lb{constructor(t){I(this,"group",new fn);I(this,"items",[]);for(const e of t){const{tex:n,aspect:s}=sp(e.text),o=new Me(new Zi(e.height*s,e.height),new Yn({map:n,transparent:!0,alphaTest:.5,side:Gn}));o.position.copy(e.pos).add(e.face==="y"?new N(0,0,.03):new N(.03,0,0)),e.face==="x"&&(o.rotation.y=Math.PI/2),this.group.add(o);const r=H("div",{class:"pixel sign-tag",style:"background:var(--ink);color:var(--yellow);border:3px solid var(--yellow);border-radius:8px;padding:4px 12px 6px;font-size:34px;white-space:nowrap"},e.text);this.items.push({def:e,mesh:o,tag:r})}}update(t){for(const e of this.items){const n=ip(t,e.def.d0);e.mesh.scale.setScalar(Math.max(1e-4,n)),e.mesh.visible=n>.01}}planePx(t,e,n){const s=this.items[t],o=s.def.pos.clone().project(e).y,r=s.def.pos.clone().add(new N(0,s.def.height,0)).project(e).y;return Math.abs(o-r)*.5*n}}class Ib{constructor(t=32){I(this,"mesh");I(this,"time",{value:0});I(this,"m",new te);const e=new mn({uniforms:{uTime:this.time,uColor:{value:new ie(16743131).convertLinearToSRGB()}},transparent:!0,depthWrite:!1,vertexShader:`
        uniform float uTime; attribute float aPhase; varying float vP;
        void main(){
          vP = fract((uTime + aPhase) / 1.25);
          float s = 0.6 + 0.9 * vP;
          vec4 p = instanceMatrix * vec4(position.xy * s, 0.0, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * p;
        }`,fragmentShader:"uniform vec3 uColor; varying float vP; void main(){ gl_FragColor = vec4(uColor, (1.0 - vP) * 0.9); }"});this.mesh=new Es(new dh(.42,.56,32),e,t);const n=new Float32Array(t);for(let s=0;s<t;s++)n[s]=s*.37%1.25;this.mesh.geometry.setAttribute("aPhase",new pa(n,1)),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=3}update(t,e){this.time.value=t,e.forEach((n,s)=>{this.m.makeRotationX(-Math.PI/2).setPosition(n.x,.03,n.z),this.mesh.setMatrixAt(s,this.m)}),this.mesh.count=e.length,this.mesh.instanceMatrix.needsUpdate=!0}}class Db{constructor(t){I(this,"group",new fn);this.def=t;const[e,n]=t.size,s=a=>new Ei({color:a,gradientMap:Ai()}),o=new Me(new pn(n,.55,e),s(t.color));o.position.y=.275;const r=new Me(new pn(n*.8,.45,e*.55),s(t.roof??"#DDEFFF"));r.position.y=.775,o.castShadow=r.castShadow=!0,this.group.add(o,r)}update(t,e){const[n,s]=this.def.loop.path,o=Math.hypot(s[0]-n[0],s[1]-n[1]),r=t*this.def.loop.speed%o/o,a=n[0]+(s[0]-n[0])*r,l=n[1]+(s[1]-n[1])*r;this.group.position.copy(ys(a,l)),this.group.visible=e>=this.def.d0&&Math.hypot(a-19,l-19)<e}}class Nb{constructor(){I(this,"group",new fn);I(this,"banner",null);I(this,"tape",null);I(this,"pigeons");I(this,"rain");I(this,"key","");I(this,"m",new te);this.pigeons=new Es(new Un(.12,8,6),new Ei({color:10132134,gradientMap:Ai()}),6),this.pigeons.visible=!1,this.rain=new Es(new pn(.02,.5,.02),new Yn({color:10469870,transparent:!0,opacity:.6}),260),this.rain.visible=!1,this.rain.frustumCulled=this.pigeons.frustumCulled=!1,this.group.add(this.pigeons,this.rain)}set(t,e,n){const s=t?`${t.id}|${t.visual}`:"";if(s!==this.key){this.key=s;for(const o of[this.banner,this.tape])o==null||o.removeFromParent();if(this.banner=this.tape=null,this.pigeons.visible=!1,!(!t||!e)){if(t.visual==="banner"&&t.banner){const{tex:o,aspect:r}=sp(t.banner,96);this.banner=new Me(new Zi(.9*r,.9),new Yn({map:o,transparent:!0,alphaTest:.5,side:Gn})),this.banner.position.copy(e).add(new N(0,2.9,.2)),this.banner.name=`banner-${t.banner}`,this.group.add(this.banner)}if(t.visual==="closedTape"&&n){const o=document.createElement("canvas");o.width=128,o.height=16;const r=o.getContext("2d");for(let l=0;l<8;l++)r.fillStyle=l%2?"#111111":"#FFE100",r.fillRect(l*16,0,16,16);const a=new ur(o);a.colorSpace=Ke,this.tape=new Me(new pn(.06,.16,1.6),new Yn({map:a})),this.tape.position.copy(n).add(new N(.1,1,0)),this.tape.rotation.x=.25,this.tape.name="closed-tape",this.group.add(this.tape)}t.visual==="pigeons"&&(this.pigeons.visible=!0,this.pigeons.position.copy(e))}}}update(t,e,n){if(this.pigeons.visible)for(let s=0;s<6;s++){const o=Math.max(0,Math.sin(t*6+s*1.7))*.12;this.m.makeTranslation(Math.cos(s*1.1)*(.6+s%3*.3),.12+o,Math.sin(s*1.1)*(.6+s%2*.4)),this.pigeons.setMatrixAt(s,this.m)}if(this.pigeons.instanceMatrix.needsUpdate=!0,this.rain.visible=e,e){for(let s=0;s<260;s++){const o=s*7.31%26-13,r=s*3.77%26-13,a=8-(t*9+s*.37)%8;this.m.makeTranslation(n.x+o,a,n.z+r),this.rain.setMatrixAt(s,this.m)}this.rain.instanceMatrix.needsUpdate=!0}}}const Ub=[16769280,16743129,1623536,16777215],to=10;class Ob{constructor(t,e=19.84){I(this,"group",new fn);I(this,"monument",new fn);I(this,"lanterns");I(this,"spots",[]);I(this,"m",new te);I(this,"ink",new Yn({color:1118481,side:Qe}));this.d0=e;const n=h=>new Ei({color:h,gradientMap:Ai()}),s=new Me(new pn(1.4,.7,1.4),n(16051935));s.position.y=.35;const o=new Me(new bo(.22,.28,2.4,10),n(16051935));o.position.y=1.9;const r=new Me(new Un(.42,14,10),new Yn({color:16769280}));r.position.y=3.4;for(const h of[s,o,r]){h.castShadow=!0;const u=new Me(h.geometry,this.ink);u.scale.setScalar(1.06),u.position.copy(h.position),this.monument.add(h,u)}this.monument.position.copy(ys(t[0],t[1])),this.lanterns=new Es(new Un(.09,8,6),new Yn({color:16777215}),to*4);const a=new te,l=ys(t[0],t[1],3.2);[[.8,28.8],[7.4,28.8],[.8,35.4],[7.4,35.4]].forEach(([h,u],d)=>{const p=ys(h,u,2.4);for(let x=0;x<to;x++){const S=(x+1)/(to+1),m=l.clone().lerp(p,S);m.y-=Math.sin(S*Math.PI)*.6,this.spots.push(m),this.lanterns.setMatrixAt(d*to+x,a.makeTranslation(m.x,m.y,m.z)),this.lanterns.setColorAt(d*to+x,new ie(Ub[(x+d)%4]))}}),this.lanterns.name="lanterns",this.lanterns.visible=!1,this.group.add(this.monument,this.lanterns)}update(t,e,n=0,s=-1){const o=ip(t,this.d0);this.monument.visible=t>this.d0,this.monument.scale.setScalar(Math.max(.001,o)),this.lanterns.visible=e&&t>this.d0+1.4,!(!this.lanterns.visible||s<0||n-s>4)&&(this.spots.forEach((r,a)=>{const l=Math.min(1,Math.max(0,(n-s-.6-a%to*.12)/.3)),c=l<=0?.001:1+2.70158*(l-1)**3+1.70158*(l-1)**2;this.lanterns.setMatrixAt(a,this.m.makeScale(c,c,c).setPosition(r))}),this.lanterns.instanceMatrix.needsUpdate=!0)}}function Bb(i,t){const e=String(t).trim().replace(/\s+/g," ").slice(0,160);let n=e.split(" ").filter(Boolean);n.filter(c=>new RegExp("^\\p{Lu}","u").test(c)).length>n.length*.6&&(n=n.map(c=>c.toLowerCase()));const o=c=>{const h=c.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);return{pre:h[1],core:h[2],post:h[3]}},r=c=>new RegExp("^\\p{Lu}","u").test(c.core)&&!i.keep.includes(c.core.toLowerCase()),a=[];for(let c=0;c<n.length;c++){const h=o(n[c]),u=c+1<n.length?o(n[c+1]):null,d=h.core.toLowerCase(),p=u&&!h.post?i.lexicon[`${d} ${u.core.toLowerCase()}`]:void 0;if(p){a.push(h.pre+p+u.post),c++;continue}if(/^\d+$/.test(h.core)){a.push(h.pre+(Number(h.core)+1)+h.post);continue}if(i.lexicon[d]){a.push(h.pre+i.lexicon[d]+h.post);continue}if(r(h)&&(c>0||u&&r(u)&&!h.post)){let x=c,S=h;for(;!S.post&&x+1<n.length&&x-c<2&&r(o(n[x+1]));)x++,S=o(n[x]);a.push(h.pre+i.pool[xa(n.slice(c,x+1).join(" ").toLowerCase())%i.pool.length]+S.post),c=x;continue}a.push(n[c])}let l=a.join(" ").replace(/[.!?]+$/,"");return l=l.charAt(0).toUpperCase()+l.slice(1),`${l}. ${i.twists[xa(e.toLowerCase())%i.twists.length]}`}const Zr=0,$o=1,zb=2,Hi=new ie,xe=(i,t,e=0)=>[i,e,t];class Hb{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"col",[]);I(this,"piv",[]);I(this,"rev",[]);I(this,"emit",[])}tri(t,e,n,s,o,r,a,l=Zr){Hi.set(o);for(const c of[t,e,n])this.pos.push(...c),this.nor.push(...s),this.col.push(Hi.r,Hi.g,Hi.b),this.piv.push(...r),this.rev.push(a),this.emit.push(l)}quad(t,e,n,s,o,r,a,l,c=Zr){this.tri(t,e,n,o,r,a,l,c),this.tri(t,n,s,o,r,a,l,c)}box(t,e,n,s,o,r,a,l,c,h=Zr,u){const d=(p,x,S)=>xe(t+p*s,e+x*o,n+S*r);this.quad(d(0,0,1),d(0,1,1),d(1,1,1),d(1,0,1),[0,1,0],u??a,l,c,h),this.quad(d(0,1,0),d(1,1,0),d(1,1,1),d(0,1,1),[0,0,1],a,l,c,h),this.quad(d(1,1,0),d(1,0,0),d(1,0,1),d(1,1,1),[1,0,0],a,l,c,h),this.quad(d(1,0,0),d(0,0,0),d(0,0,1),d(1,0,1),[0,0,-1],a,l,c,h),this.quad(d(0,0,0),d(0,1,0),d(0,1,1),d(0,0,1),[-1,0,0],a,l,c,h)}geometry(t,e,n,s,o,r=Zr){const a=t.index?t.toNonIndexed():t;a.attributes.normal||a.computeVertexNormals();const l=a.attributes.position,c=a.attributes.normal,h=new te().extractRotation(e),u=new N,d=new N;Hi.set(n);for(let p=0;p<l.count;p++)u.fromBufferAttribute(l,p).applyMatrix4(e),d.fromBufferAttribute(c,p).applyMatrix4(h).normalize(),this.pos.push(u.x,u.y,u.z),this.nor.push(d.x,d.y,d.z),this.col.push(Hi.r,Hi.g,Hi.b),this.piv.push(...s),this.rev.push(o),this.emit.push(r);t.dispose()}get count(){return this.pos.length/3}build(){const t=new He;return t.setAttribute("position",new _e(new Float32Array(this.pos),3)),t.setAttribute("normal",new _e(new Float32Array(this.nor),3)),t.setAttribute("color",new _e(new Float32Array(this.col),3)),t.setAttribute("aPivot",new _e(new Float32Array(this.piv),3)),t.setAttribute("aReveal",new _e(new Float32Array(this.rev),1)),t.setAttribute("aEmit",new _e(new Float32Array(this.emit),1)),t.computeBoundingSphere(),t}}class Vb{constructor(){I(this,"a",[]);I(this,"b",[]);I(this,"side",[]);I(this,"piv",[]);I(this,"rev",[]);I(this,"idx",[]);I(this,"n",0)}seg(t,e,n,s){for(const[r,a]of[[0,-1],[0,1],[1,1],[1,-1]])this.a.push(...t),this.b.push(...e),this.side.push(r,a),this.piv.push(...n),this.rev.push(s);const o=this.n;this.idx.push(o,o+1,o+2,o,o+2,o+3),this.n+=4}box(t,e,n,s,o,r,a,l){const c=(u,d,p)=>xe(t+u*s,e+d*o,n+p*r),h=[[c(0,0,0),c(1,0,0)],[c(1,0,0),c(1,1,0)],[c(1,1,0),c(0,1,0)],[c(0,1,0),c(0,0,0)],[c(0,0,1),c(1,0,1)],[c(1,0,1),c(1,1,1)],[c(1,1,1),c(0,1,1)],[c(0,1,1),c(0,0,1)],[c(0,0,0),c(0,0,1)],[c(1,0,0),c(1,0,1)],[c(1,1,0),c(1,1,1)],[c(0,1,0),c(0,1,1)]];for(const[u,d]of h)this.seg(u,d,a,l)}rect(t,e,n){for(let s=0;s<4;s++)this.seg(t[s],t[(s+1)%4],e,n)}build(){const t=new He;return t.setAttribute("position",new _e(new Float32Array(this.a),3)),t.setAttribute("aEnd",new _e(new Float32Array(this.b),3)),t.setAttribute("aSide",new _e(new Float32Array(this.side),2)),t.setAttribute("aPivot",new _e(new Float32Array(this.piv),3)),t.setAttribute("aReveal",new _e(new Float32Array(this.rev),1)),t.setIndex(this.idx),t.computeBoundingSphere(),t}}const Ze={uRadius:{value:0},uGlow:{value:0},uGlowColor:{value:new ie(16770976)},uEdgeWidth:{value:2},uViewport:{value:new At(1920,1080)},uEdgeColor:{value:new ie(1118481).convertLinearToSRGB()}},Mh=`
uniform float uRadius;
attribute vec3 aPivot;
attribute float aReveal;
float revealScale() {
  float x = clamp((uRadius - aReveal) / 1.4, 0.0, 1.0);
  float y = x - 1.0;
  return 1.0 + 2.70158 * y * y * y + 1.70158 * y * y;
}`;let Dl=null;function Gb(){if(Dl)return Dl;const i=new Ei({color:16777215,vertexColors:!0,gradientMap:Ai()});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,{uRadius:Ze.uRadius,uGlow:Ze.uGlow,uGlowColor:Ze.uGlowColor}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${Mh}
attribute float aEmit;
varying float vEmit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aPivot + (transformed - aPivot) * revealScale();
vEmit = aEmit;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;
uniform vec3 uGlowColor;
varying float vEmit;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
        if (vEmit > 0.5 && vEmit < 1.5) gl_FragColor.rgb = diffuseColor.rgb;
        if (vEmit > 1.5) gl_FragColor.rgb = mix(gl_FragColor.rgb, uGlowColor, uGlow);`)},i.customProgramCacheKey=()=>"peepl-town-v1",Dl=i,i}let Nl=null;function Wb(){if(Nl)return Nl;const i=new Df({depthPacking:m0});return i.onBeforeCompile=t=>{t.uniforms.uRadius=Ze.uRadius,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${Mh}`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aPivot + (transformed - aPivot) * revealScale();`)},i.customProgramCacheKey=()=>"peepl-town-depth-v1",Nl=i,i}let Kr=null;function Xb(){return Kr||(Kr=new mn({uniforms:{uRadius:Ze.uRadius,uEdgeWidth:Ze.uEdgeWidth,uViewport:Ze.uViewport,uEdgeColor:Ze.uEdgeColor},vertexShader:`
      ${Mh}
      uniform float uEdgeWidth;
      uniform vec2 uViewport;
      attribute vec3 aEnd;
      attribute vec2 aSide; // x: which end (0/1), y: side (−1/1)
      void main() {
        float s = revealScale();
        vec3 a = aPivot + (position - aPivot) * s;
        vec3 b = aPivot + (aEnd - aPivot) * s;
        vec4 ca = projectionMatrix * modelViewMatrix * vec4(a, 1.0);
        vec4 cb = projectionMatrix * modelViewMatrix * vec4(b, 1.0);
        vec2 sa = ca.xy / ca.w * uViewport;
        vec2 sb = cb.xy / cb.w * uViewport;
        vec2 dir = normalize(sb - sa + vec2(1e-6, 0.0));
        vec2 nrm = vec2(-dir.y, dir.x);
        vec4 c = aSide.x < 0.5 ? ca : cb;
        c.xy += nrm * aSide.y * uEdgeWidth / uViewport * c.w;
        gl_Position = s < 0.001 ? vec4(2.0, 2.0, 2.0, 1.0) : c;
      }`,fragmentShader:`
      uniform vec3 uEdgeColor;
      void main() { gl_FragColor = vec4(uEdgeColor, 1.0); }`,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),Kr)}const _a=[19,19],$b=(i,t)=>Math.max(5.4,Math.hypot(i-_a[0],t-_a[1])),Yb=new te,Ul=(i,t,e,n=1,s=1,o=1,r=0)=>Yb.compose(new N(...xe(i,t,e)),new qi().setFromAxisAngle(new N(0,1,0),r),new N(n,s,o));function qb(i){var R;const t=new Hb,e=new Vb,n=(v,E,g,y,T,A,k,F,O=!0,L=0,V)=>{const U=xe(v+y/2,E+T/2,g);t.box(v,E,g,y,T,A,k,U,F,L,V),O&&e.box(v,E,g,y,T,A,U,F)};t.box(0,0,-.8,40,40,.8,i.ground.color,xe(20,20,-.8),24),t.quad(xe(0,0,.001),xe(0,40,.001),xe(40,40,.001),xe(40,0,.001),[0,1,0],i.ground.color,xe(20,20,0),0),e.box(0,0,-.8,40,40,.8,xe(20,20,-.8),24);const s={park:.004,river:.004,pond:.008,road:.01,sidewalk:.014,plaza:.012,crosswalk:.02},o=(v,E,g,y,T=0)=>{const A=xe((v[0]+v[2])/2,(v[1]+v[3])/2,E);t.quad(xe(v[0],v[1],E),xe(v[0],v[3],E),xe(v[2],v[3],E),xe(v[2],v[1],E),[0,1,0],g,A,y,T)};for(const v of i.surfaces){if(v.kind==="ground")continue;const E=s[v.kind]??.01;if(v.box){const[g,y,T,A,k,F]=v.box;n(g,y,T,A,k,F,v.color,v.d0)}else if(v.ellipse){const[g,y,T,A]=v.ellipse;t.geometry(new ah(1,24),new te().multiplyMatrices(Ul(g,y,E,T,1,A),new te().makeRotationX(-Math.PI/2)),v.color,xe(g,y,E),v.d0)}else if(v.rect&&v.kind==="crosswalk"){const[g,y,T,A]=v.rect,k=A-y>T-g;for(let F=k?y:g;F<(k?A:T)-.1;F+=v.pitch??.55){const O=F+(v.stripe??.28);o(k?[g,F,T,O]:[F,y,O,A],E,v.color,v.d0)}}else if(v.rect&&(o(v.rect,E,v.color,v.d0),v.dashes)){const g=v.dashes;for(let y=.4;y<40;y+=g.pitch)(y+g.len<g.skip[0]||y>g.skip[1])&&o(g.axis==="x"?[y,g.at-.08,y+g.len,g.at+.08]:[g.at-.08,y,g.at+.08,y+g.len],E+.003,g.color,v.d0)}}const r=(v,E,g,y,T)=>{const[A,k,F,O,L,V]=v,U=.012,Z=xe(A+O/2,k+L/2,F);let et,ut;E.face==="y"?(et=[xe(A+E.u[0],k+L+U,F+E.v[0]),xe(A+E.u[1],k+L+U,F+E.v[0]),xe(A+E.u[1],k+L+U,F+E.v[1]),xe(A+E.u[0],k+L+U,F+E.v[1])],ut=[0,0,1]):E.face==="x"?(et=[xe(A+O+U,k+E.u[1],F+E.v[0]),xe(A+O+U,k+E.u[0],F+E.v[0]),xe(A+O+U,k+E.u[0],F+E.v[1]),xe(A+O+U,k+E.u[1],F+E.v[1])],ut=[1,0,0]):(et=[xe(A+E.u[0],k+E.v[0],F+V+U),xe(A+E.u[0],k+E.v[1],F+V+U),xe(A+E.u[1],k+E.v[1],F+V+U),xe(A+E.u[1],k+E.v[0],F+V+U)],ut=[0,1,0]),t.quad(et[0],et[1],et[2],et[3],ut,g,Z,y,T),e.rect(et,Z,y)},a=v=>{const E=v.windows,[,,,g,y,T]=v.box;for(const A of["x","y"]){const k=A==="x"?y:g;for(let F=E.margin[1];F+E.size<T-.3;F+=E.pitch)for(let O=E.margin[0];O+E.size<k-.35;O+=E.pitch){const L=v.shopFront;L&&A==="y"&&F<L.v[1]+.3&&O+E.size>L.u[0]-.2&&O<L.u[1]+.2||r(v.box,{face:A,u:[O,O+E.size],v:[F,F+E.size],color:E.color},E.color,v.d0,zb)}}};for(const v of i.buildings){const[E,g,y,T,A,k]=v.box;if(v.shopFront){const F=v.shopFront,O=.8;n(E,g,y,T,A-O,k,v.color,v.d0),n(E,g+A-O,y,F.u[0],O,k,v.color,v.d0),n(E+F.u[1],g+A-O,y,T-F.u[1],O,k,v.color,v.d0),n(E+F.u[0],g+A-O,y+F.v[1],F.u[1]-F.u[0],O,k-F.v[1],v.color,v.d0),n(E+F.u[0],g+A-O,y,F.u[1]-F.u[0],O,.02,"#C98B55",v.d0,!1),F.counter&&n(E+F.u[0]+.15,g+A-.3,y,F.u[1]-F.u[0]-.3,.3,.85,"#FFFFFF",v.d0)}else n(E,g,y,T,A,k,v.color,v.d0,!0,v.glow?$o:0);for(const F of v.seats??[])n(F[0]-.18,F[1]-.18,0,.36,.36,F[2],"#FF7ADB",v.d0);for(const F of v.decals??[])r(v.box,F,F.color,v.d0,F.emissive?$o:0);if(v.windows&&a(v),v.stripes)for(let F=0;F<v.stripes.count;F++)r(v.box,{face:"t",u:[.2+F*v.stripes.pitch,.2+F*v.stripes.pitch+v.stripes.width],v:[0,A],color:v.stripes.color},v.stripes.color,v.d0,0)}const l=(v,E,g,y,T,A)=>t.geometry(new Un(y,12,8),Ul(v,E,g),T,xe(v,E,g-y),A),c=(v,E,g,y)=>{n(v-.1,E-.1,0,.2,.2,.9*g,"#8B5A2B",y),l(v,E,1.3*g,.75*g,"#4CAF50",y)};for(const v of i.props){const[E,g]=v.at,y=v.color??"#FFFFFF";switch(v.kind){case"blob":l(E,g,v.z,v.r,y,v.d0);break;case"rug":{const[T,A]=v.size;o([E-T/2,g-A/2,E+T/2,g+A/2],.02,y,v.d0);break}case"armchair":n(E-.45,g-.35,0,.9,.7,.42,y,v.d0),n(E-.45,g-.45,.42,.9,.18,.55,y,v.d0),n(E-.36,g-.26,.42,.72,.56,.1,v.cushion??"#0AB8EE",v.d0);break;case"floorlamp":n(E-.04,g-.04,0,.08,.08,1.5,"#111111",v.d0),n(E-.22,g-.22,1.5,.44,.44,.32,y,v.d0,!0,$o);break;case"poster":{const[T,A]=v.size,k=v.z;r([E-T/2,g-.25,k-A/2,T,.25,A],{face:"y",u:[0,T],v:[0,A]},y,v.d0,0);for(const F of[1,-1])t.geometry(new pn(.08,A*.7,.01),new te().multiplyMatrices(Ul(E,g+.025,k),new te().makeRotationZ(F*.6)),"#111111",xe(E,g,k-A/2),v.d0,$o);break}case"lamp":n(E-.07,g-.07,0,.14,.14,v.height-.22,"#111111",v.d0),n(E-.25,g-.25,v.height-.22,.5,.5,.22,"#FFE100",v.d0,!0,$o);break;case"tree":c(E,g,v.scale??1,v.d0);break;case"bench":{const[T,A]=v.size??[1.3,.45];n(E-T/2,g-A/2,0,T,A,.38,y,v.d0),(R=v.sign)!=null&&R.pole&&(n(E+T/2+.2,g-.05,0,.1,.1,2.2,"#111111",v.d0),n(E+T/2-.05,g-.06,1.9,.6,.12,.4,"#FFE100",v.d0));break}case"bin":n(E-.18,g-.18,0,.35,.35,.8,y,v.d0);break;case"car":{if(v.loop)break;const[T,A]=v.size;n(E-T/2,g-A/2,0,T,A,.55,y,v.d0),n(E-T/2+T*.2,g-A/2+A*.1,.55,T*.55,A*.8,.45,v.roof??"#DDEFFF",v.d0);break}}}const h=i.city;let u=0;for(let v=0;v<h.grid[0];v++)for(let E=0;E<h.grid[1];E++){const g=v*h.lotPitch+h.lotOffset,y=E*h.lotPitch+h.lotOffset,T=h.lotSize,A=g<h.core[2]&&g+T>h.core[0]&&y<h.core[3]&&y+T>h.core[1],k=h.roadBands.some(([U,Z])=>y<Z&&y+T>U||g<Z&&g+T>U);if(A||k||g+T>h.maxX||(u++,h.skipRects.some(U=>g<U[2]&&g+T>U[0]&&y<U[3]&&y+T>U[1])))continue;const F=$b(g+T/2,y+T/2);if(Wi(u*5.3)<h.treeChance){c(g+T/2,y+T/2,h.treeScale,F);continue}const O=Wi(u*3.1+1),L=1.8+O*O*10,V={d0:F,box:[g,y,0,T,T,L],color:h.palette[Math.floor(Wi(u*7.7+2)*7)],windows:{color:"#2B3566",pitch:1.25,size:.7,margin:[.55,.8]}};n(g,y,0,T,T,L,V.color,F),a(V)}const d=new Me(t.build(),Gb());d.customDepthMaterial=Wb(),d.receiveShadow=!0,d.castShadow=!0,d.frustumCulled=!1;const p=new Me(e.build(),Xb());p.frustumCulled=!1,p.renderOrder=1;const x=i.fog,S=new Ei({color:16777215,gradientMap:Ai()});S.onBeforeCompile=v=>{v.uniforms.uRadius=Ze.uRadius,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
uniform float uRadius;
attribute float aD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float k = clamp((uRadius - 1.0 - aD) / 0.6, 0.0, 1.0);
transformed *= 1.0 - k;`)},S.customProgramCacheKey=()=>"peepl-fog-v1";const m=x.cells*x.cells,f=new Es(new pn(x.cellSize,x.height,x.cellSize),S,m),M=new Float32Array(m),b=new ie;for(let v=0;v<x.cells;v++)for(let E=0;E<x.cells;E++){const g=v*x.cells+E,y=v*x.cellSize+x.cellSize/2,T=E*x.cellSize+x.cellSize/2;f.setMatrixAt(g,new te().makeTranslation(...xe(y,T,x.height/2+.03))),b.set(x.color).multiplyScalar(x.variation[0]+Wi(v*20+E)*(x.variation[1]-x.variation[0])),f.setColorAt(g,b),M[g]=Math.hypot(y-_a[0],T-_a[1])}f.geometry.setAttribute("aD",new pa(M,1)),f.frustumCulled=!1;const _=new fn;return _.add(d,p,f),{group:_,faces:d,edges:p,fog:f,triangles:d.geometry.attributes.position.count/3}}function jb(){const i={uTop:{value:new ie(702702)},uMid:{value:new ie(8377333)},uBottom:{value:new ie(14087423)},uOpacity:{value:0}},t=new mn({uniforms:i,side:Qe,depthWrite:!1,transparent:!0,vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uBottom; uniform float uOpacity; varying float vY;
      void main(){ vec3 c = vY > 0.15 ? mix(uMid, uTop, smoothstep(0.15, 0.7, vY)) : mix(uBottom, uMid, smoothstep(-0.2, 0.15, vY));
      gl_FragColor = vec4(c, uOpacity);
      #include <colorspace_fragment>
      }`}),e=new Me(new Un(400,32,16),t);return e.renderOrder=-10,e.frustumCulled=!1,{mesh:e,uniforms:i}}class Zb{constructor(t=4){I(this,"uniforms",{tDiffuse:{value:null},uQuant:{value:1},uVignette:{value:.15},uSat:{value:1.06},uGrain:{value:.025},uTime:{value:0},uRes:{value:new At(1,1)}});I(this,"rt");I(this,"scene",new Sa);I(this,"cam",new Ca(-1,1,1,-1,0,1));I(this,"enabled",!0);this.rt=new $n(1,1,{samples:t,colorSpace:Ke});const e=new He;e.setAttribute("position",new ye([-1,-1,0,3,-1,0,-1,3,0],3)),e.setAttribute("uv",new ye([0,0,2,0,0,2],2));const n=new mn({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse; uniform float uQuant; uniform float uVignette; uniform float uSat; uniform float uGrain; uniform float uTime; uniform vec2 uRes;
        varying vec2 vUv;
        float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
        void main(){
          vec4 c = texture2D(tDiffuse, vUv);
          float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
          c.rgb = mix(vec3(l), c.rgb, uSat);
          vec2 d = vUv - 0.5;
          c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.75, length(d) * 1.4);
          c.rgb += (rnd(floor(vUv * uRes)) - 0.5) * uGrain * c.a;
          gl_FragColor = c;
          #include <colorspace_fragment>
          if (uQuant > 0.5) gl_FragColor.rgb = floor(gl_FragColor.rgb * 24.0 + 0.5) / 24.0;
        }`});this.scene.add(new Me(e,n)),this.uniforms.tDiffuse.value=this.rt.texture}render(t,e,n,s){if(!this.enabled){t.setRenderTarget(null),t.render(e,n);return}const o=t.getDrawingBufferSize(new At);(this.rt.width!==o.x||this.rt.height!==o.y)&&this.rt.setSize(o.x,o.y),this.uniforms.uRes.value.copy(o),this.uniforms.uTime.value=Math.floor(s*12)/12,t.setRenderTarget(this.rt),t.clear(),t.render(e,n),t.setRenderTarget(null),t.render(this.scene,this.cam)}dispose(){this.rt.dispose()}}const us=Math.PI/180,Jo=1.05,zu=[1.05,.8,.85,.9],Hu=i=>i<.5?4*i**3:1-(-2*i+2)**3/2,Jr=(i,t,e)=>i+(t-i)*e;class Kb{constructor(t){I(this,"camera",new yn(22,16/9,.5,600));I(this,"shot","town");I(this,"from");I(this,"to");I(this,"moveAt",-10);I(this,"moveDur",.9);I(this,"t",0);I(this,"distMove",null);I(this,"bias",1);I(this,"lift",90);this.from={...t,target:t.target.clone()},this.to={...t,target:t.target.clone()}}go(t,e=.9,n){this.from=this.current(),this.to={target:(t.target??this.to.target).clone(),yaw:t.yaw??this.to.yaw,pitch:t.pitch??this.to.pitch,dist:t.dist??this.to.dist},this.moveAt=this.t,this.moveDur=Math.max(.001,e),this.distMove=null,n&&(this.shot=n)}retarget(t){this.to.target.copy(t)}dolly(t,e,n){this.distMove={from:t,to:e,at:this.t,dur:n}}current(){const t=Hu(Math.min(1,(this.t-this.moveAt)/this.moveDur)),e=this.from,n=this.to;let s=Jr(e.dist,n.dist,t);return this.distMove&&(s=Jr(this.distMove.from,this.distMove.to,Hu(Math.min(1,(this.t-this.distMove.at)/this.distMove.dur)))),{target:e.target.clone().lerp(n.target,t),yaw:Jr(e.yaw,n.yaw,t),pitch:Jr(e.pitch,n.pitch,t),dist:s}}update(t,e,n){this.t+=t;const s=this.current(),o=n?0:(this.shot==="town"?6:this.shot==="venue"?4:0)*us*Math.sin(this.t/20*Math.PI*2),r=s.yaw+o,a=e<1,l=s.dist*this.bias*(a?this.shot==="town"?1.45:this.shot==="venue"?1.35:1.3:1);this.camera.fov=a?this.shot==="town"?22:this.shot==="venue"?36:46:22,this.camera.aspect=e,a?this.camera.setViewOffset(e*1e3,1e3,0,this.lift,e*1e3,1e3):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix(),this.camera.position.set(s.target.x+Math.sin(r)*Math.cos(s.pitch)*l,s.target.y+Math.sin(s.pitch)*l,s.target.z+Math.cos(r)*Math.cos(s.pitch)*l),this.camera.lookAt(s.target)}}const eo={town:(i,t)=>({target:i,yaw:45*us,pitch:35.264*us,dist:t*Jo}),venue:i=>({target:i.clone().add(new N(0,1,0)),yaw:45*us,pitch:24*us,dist:18}),close:(i,t)=>{const e=i.clone().add(t).multiplyScalar(.5).setY(1.5);let s=Math.atan2(t.x-i.x,t.z-i.z)+Math.PI/2;return Math.cos(s-45*us)<0&&(s+=Math.PI),{target:e,yaw:s,pitch:10*us,dist:7.5}}},Jb={walk:"walk",tv:"tv",sit:"sit",read:"read",browse:"browse",sleep:"sleep",idle:"idle"};function Qb(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ur(i)}class tM{constructor(t,e,n=!1){I(this,"maxVisible",1/0);I(this,"group",new fn);I(this,"members",new Map);I(this,"shadows");I(this,"m4",new te);I(this,"v",new N);I(this,"outline",!0);this.specs=t,this.bodyTypes=e,this.groups=n,this.shadows=new Es(new Zi(1,1),new Yn({map:Qb(),transparent:!0,depthWrite:!1}),64),this.shadows.count=0,this.shadows.frustumCulled=!1,this.shadows.renderOrder=2,this.group.add(this.shadows)}ensure(t,e=t,n){let s=this.members.get(t);if(s)return s;const o=this.specs.find(l=>l.id===e)??this.specs[0],r=n?{...o,id:t,body:n.body,attach:n.attach}:o,a=yh(r,this.bodyTypes,{groups:this.groups});return a.setOutline(this.outline),this.group.add(a.root),s={id:t,peepl:a,anim:new bh(a.rig,a.dims,t),px:0,visible:!0},this.members.set(t,s),s}setOutline(t){this.outline=t;for(const e of this.members.values())e.peepl.setOutline(t)}update(t,e,n,s,o=1/0){let r=0;const a=new Set,l=u=>u.x>=16&&u.x<=22&&u.z>=16&&u.z<=22||Math.hypot(u.x-19,u.z-19)<=o-1,c=new Set,h=t.filter(l);if(h.length>this.maxVisible){const u=n.position;h.filter(d=>d.id!=="vinnie"&&d.id!=="mochi").sort((d,p)=>Math.hypot(p.x-u.x,p.z-u.z)-Math.hypot(d.x-u.x,d.z-u.z)).slice(0,h.length-this.maxVisible).forEach(d=>c.add(d.id))}for(const u of t){a.add(u.id);const d=this.ensure(u.id,u.cast,u.look),p=d.peepl.root;if(d.visible=l(u)&&!c.has(u.id),p.visible=d.visible,!d.visible)continue;p.position.set(u.x,u.anim==="sleep"?.5:0,u.z);let x=u.yaw-d.anim.yaw;x=Math.atan2(Math.sin(x),Math.cos(x)),d.anim.yaw+=x*Math.min(1,e*8),d.anim.play(Jb[u.anim]??"idle"),d.anim.update(e),d.px=this.projectedHeight(d,n,s),d.peepl.setLod(d.px>(u.id==="vinnie"||u.id==="mochi"?180:380)?0:d.px>60?1:2),this.m4.makeRotationX(-Math.PI/2).setPosition(u.x,.012,u.z),this.m4.scale(new N(.64,.64,1)),this.shadows.setMatrixAt(r++,this.m4)}this.shadows.count=r,this.shadows.instanceMatrix.needsUpdate=!0;for(const[u,d]of this.members)a.has(u)||(d.visible=!1,d.peepl.root.visible=!1)}projectedHeight(t,e,n){const s=t.peepl.root,o=this.v.set(s.position.x,s.position.y,s.position.z).project(e).y,r=new N(s.position.x,s.position.y+t.peepl.dims.crownY*yo,s.position.z).project(e).y;return Math.abs(r-o)*.5*n}headPx(t,e,n,s,o=.25){const r=this.members.get(t);if(!r)return null;const a=r.peepl.root,l=new N(a.position.x,a.position.y+r.peepl.dims.crownY*yo+o,a.position.z).project(e);return[(l.x+1)/2*n,(1-l.y)/2*s,l.z<1&&Math.abs(l.x)<1&&Math.abs(l.y)<1]}dispose(){for(const t of this.members.values())t.peepl.dispose();this.members.clear(),this.group.removeFromParent()}}class eM{constructor(){I(this,"root",document.getElementById("hud3d"));I(this,"labels",new Map);I(this,"t",0)}bubble(t,e,n,s,o,r={}){this.remove(t);const a=np(e,r.colour);return a.dataset.id=t,ho(e),this.root.append(a),this.labels.set(t,{id:t,el:a,anchor:n,at:s,until:s+o,priority:r.priority??10,hop:0}),a}attach(t,e,n,s,o,r=9){this.remove(t),e.style.position="absolute",e.style.left=e.style.top="0",e.style.transformOrigin="50% 100%",this.root.append(e),this.labels.set(t,{id:t,el:e,anchor:n,at:s,until:s+o,priority:r,hop:0})}has(t){return this.labels.has(t)}remove(t){var e;(e=this.labels.get(t))==null||e.el.remove(),this.labels.delete(t)}clear(){for(const t of[...this.labels.keys()])this.remove(t)}update(t,e){this.t+=t;const n=Math.max(.5,ba()),s=[],o=[...this.labels.values()].sort((a,l)=>l.priority-a.priority),r=[...document.querySelectorAll(".hud-avoid")].filter(a=>a.offsetParent&&a.style.visibility!=="hidden").map(a=>a.getBoundingClientRect());for(const a of o){if(this.t>a.until+.25){this.remove(a.id);continue}const l=a.anchor(),[c,h]=Fe(this.t,a.at,.3,e),u=1-le(this.t,a.until,.25,se.enter);if(!l||!l[2]){a.el.style.visibility="hidden";continue}if(s.some(([p,x])=>Math.hypot(p-l[0],x-l[1])<48)){a.el.style.visibility="hidden";continue}s.push([l[0],l[1]]),Eb(a.el,l[0],l[1],n,c,h*u,r)}}texts(){return[...this.labels.values()].filter(t=>t.el.style.visibility!=="hidden").map(t=>t.el.textContent??"")}}const nM={caption:1,bubble:2,autoWalk:0,gfx:1},iM=i=>{const[t,e]=i.split(":").map(Number);return((t??0)*60+(e??0))*60};class sM{constructor(t,e){I(this,"fired",new Map);I(this,"skipped",[]);I(this,"queue",[]);this.beats=t,this.handlers=e}markFired(...t){for(const e of t)this.fired.has(e)||this.fired.set(e,-100)}fire(t,e){const n=this.beats.find(s=>s.id===t);if(!(!n||this.fired.has(t))){this.fired.set(t,e);for(const[s,...o]of n.actions){const r=s,a=nM[r];let l=0;a!==void 0&&typeof o[a]=="number"&&(l=o[a]),r==="vinnie"&&o[0]==="standTurn"&&typeof o[1]=="number"&&(l=o[1]),this.queue.push({at:e+l,verb:r,args:o})}this.queue.sort((s,o)=>s.at-o.at)}}triggered(t,e){switch(t.on){case"s8Start":return!0;case"km":return e.km>=t.gte&&(!t.after||this.fired.has(t.after));case"near":return e.tier>=t.tierMin&&e.distance(t.a,t.b)<=t.dist;case"choice":return e.choices[t.beat]===t.value;case"any":return t.of.some(n=>"simTimeGte"in n?e.simSec>=iM(n.simTimeGte)&&this.fired.has("tier4"):this.fired.has(n.after)&&e.t-this.fired.get(n.after)>=n.realSeconds)}}update(t){if(!t.busy)for(const e of this.beats)!this.fired.has(e.id)&&this.triggered(e.trigger,t)&&this.fire(e.id,t.t);for(;this.queue.length&&this.queue[0].at<=t.t;){const{verb:e,args:n}=this.queue.shift(),s=this.handlers[e];s?s(...n):this.skipped.push(e)}}}const oM=[[1,0],[0,1],[-1,0],[0,-1]],Yo=(i,t)=>i*1e3+t;class rM{constructor(t,e,n=[],s=.3,o=40){I(this,"walk",new Set);I(this,"interior");this.rightHand=s,this.interior=n;const r=(a,l,c)=>a>=c[0]&&a<=c[2]&&l>=c[1]&&l<=c[3];for(let a=0;a<o;a++)for(let l=0;l<o;l++){const c=a+.5,h=l+.5;t.some(u=>r(c,h,u))&&!e.some(u=>r(c,h,u))&&this.walk.add(Yo(a,l))}}walkable(t,e){return this.walk.has(Yo(t,e))}cellOf(t){return[Math.floor(t[0]),Math.floor(t[1])]}nearestWalkable(t){if(this.walkable(t[0],t[1]))return t;for(let e=1;e<6;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++)if(Math.max(Math.abs(s),Math.abs(n))===e&&this.walkable(t[0]+s,t[1]+n))return[t[0]+s,t[1]+n];return t}findPath(t,e){if(t[0]===e[0]&&t[1]===e[1])return[t];const n=new Map([[Yo(t[0],t[1]),null]]),s=[t];for(let o=0;o<s.length;o++){const r=s[o];for(const[a,l]of oM){const c=r[0]+a,h=r[1]+l,u=Yo(c,h);if(!(n.has(u)||!this.walkable(c,h))){if(n.set(u,r),c===e[0]&&h===e[1]){const d=[[c,h]];for(let p=r;p;p=n.get(Yo(p[0],p[1])))d.push(p);return d.reverse()}s.push([c,h])}}}return null}isInterior(t,e){return this.interior.some(n=>t>=n[0]&&t<=n[2]&&e>=n[1]&&e<=n[3])}route(t,e){const n=this.nearestWalkable(this.cellOf(t)),s=this.nearestWalkable(this.cellOf(e)),o=this.findPath(n,s)??[n],r=o.map(([c,h],u)=>{const d=c+.5,p=h+.5;if(this.isInterior(d,p))return[d,p];const x=o[u-1],S=o[u+1],m=S?[S[0]-c,S[1]-h]:x?[c-x[0],h-x[1]]:[0,0];return[d-m[1]*this.rightHand,p+m[0]*this.rightHand]}),a=[t,...r,e],l=[a[0]];for(let c=1;c<a.length-1;c++){const h=l[l.length-1],u=a[c],d=a[c+1],p=(u[0]-h[0])*(d[1]-h[1])-(u[1]-h[1])*(d[0]-h[0]);Math.abs(p)>1e-6&&l.push(u)}return l.push(a[a.length-1]),l}}const nr=86400,Vc=86400/240,no=20,ms=i=>{const[t,e]=i.split(":").map(Number);return((t??0)*60+(e??0))*60},aM=i=>{const t=Math.floor((i%nr+nr)%nr/60);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`};function lM(i,t,e){return t<=e?i>=t&&i<e:i>=t||i<e}class cM{constructor(t=1,e="13:00"){I(this,"day");I(this,"sec");this.day=t,this.sec=ms(e)}advance(t){for(this.sec+=t;this.sec>=nr;)this.sec-=nr,this.day++}set(t,e=this.day){this.day=e,this.sec=ms(t)}get hhmm(){return aM(this.sec)}}class hM{constructor(t,e){I(this,"dropped",null);this.d=t,this.seed=e}forDay(t){const e=t===1?this.d.events.find(s=>s.id===this.d.forcedDay1):this.d.events[Math.floor(oo(this.seed,"event",t)()*this.d.events.length)],n=e.startHour*3600;return{ev:e,day:t,start:n,end:Math.min(86400,n+e.durationHours*3600),dropped:!1}}drop(t,e,n){const s=this.d.events.find(o=>o.id===t);return s?(this.dropped={ev:s,day:e,start:n,end:Math.min(86400,n+s.durationHours*3600),dropped:!0},this.dropped):null}today(t){return this.dropped&&this.dropped.day===t?this.dropped:this.forDay(t)}active(t,e){const n=this.today(t);return e>=n.start&&e<n.end?n:null}raining(t,e){const n=this.active(t,e);return n!=null&&n.ev.weather?n.ev.weather==="rain":t%this.d.rainEvery===0}tickerLines(t,e){return[this.today(t).ev.ticker,...this.d.tickerFiller,this.raining(t,e)?this.d.weatherLine.rain:this.d.weatherLine.sun]}}const Qo=[16,16,22,22],dM=.58,Vu=.29,Gu={tv:Math.PI,shelf:-Math.PI/2,window:Math.PI,chair:Math.PI/4,bed:0,bench:0,counter:0,front:Math.PI,corner:Math.PI/4};class uM{constructor(t,e=t.routine.clock.seed){I(this,"clock");I(this,"nav");I(this,"events");I(this,"tier",1);I(this,"agents",new Map);I(this,"needs",{});I(this,"override",null);I(this,"reaction",null);I(this,"reacted",new Set);I(this,"scripted",new Set);I(this,"landmarks",new Map);I(this,"realT",0);I(this,"seed");this.d=t,this.seed=e,this.clock=new cM(t.routine.start.day,t.routine.start.time);for(const r of t.map.landmarks)this.landmarks.set(r.key,r);const n=t.map.buildings.filter(r=>r.id.startsWith("flat.")&&!/slab|wall|lamp|pillow|cover|tv/.test(r.id)).map(r=>[r.box[0],r.box[1],r.box[0]+r.box[3],r.box[1]+r.box[4]]);this.nav=new rM(t.map.nav.walkRects,[...t.map.nav.blocked,...n],[Qo,[27.8,22,33.2,22.4]],t.map.nav.rightHandOffset),this.events=t.events?new hM(t.events,e):null;const s=oo(e,"needs");for(const[r,[a,l]]of Object.entries(t.routine.needs.start))this.needs[r]=a+(l-a)*s();const o=this.spotPos("H","tv");this.add({id:"vinnie",kind:"vinnie",cast:"vinnie",pos:o,speed:t.routine.vinnie.walkSpeedU*dM,anim:"tv",place:"H",tierMin:1}),this.agents.get("vinnie").yaw=Gu.tv,(t.map.placements??[]).forEach((r,a)=>{const l=r.who==="joe"?`pacer-${a}`:r.who;this.add({id:l,kind:r.b?"pacer":"stand",cast:r.who,pos:[...r.a],speed:(r.speed??.8)*1,anim:"idle",place:"",tierMin:r.tierMin,pace:r.b?r:void 0})});for(const r of t.routine.extras??[])this.add({id:r.id,kind:"extra",cast:"joe",pos:[...r.home],speed:.85,anim:"idle",place:"home",tierMin:1,look:{body:r.body,attach:r.attach}}),this.updateExtra(this.agents.get(r.id),r,!0);this.updateRoutine()}add(t){this.agents.set(t.id,{yaw:0,path:null,seg:0,moving:!1,activity:"",hidden:!1,prev:[t.pos[0],t.pos[1]],...t})}landmarkTier(t){var e;return((e=this.landmarks.get(t))==null?void 0:e.tier)??1}landmark(t){return this.landmarks.get(t)}spotPos(t,e){var o;const n=this.landmarks.get(t),s=(e&&((o=n==null?void 0:n.spots)==null?void 0:o[e]))??(n!=null&&n.spots?Object.values(n.spots)[0]:void 0)??(n==null?void 0:n.door)??(n==null?void 0:n.monument);return s?[s[0],s[1]]:[19,19]}schedule(){return this.clock.day===1?this.d.routine.vinnie.dayOff.schedule:this.d.routine.vinnie.work.schedule}activityNow(){const t=this.schedule().find(o=>lM(this.clock.sec,ms(o.from),ms(o.to)));if(!t)return{key:"home",place:"H",spot:"chair",anim:"idle"};let e=t.place.startsWith("$")?this.resolveChoice(t):t.place,n=t.spot==="auto"?void 0:t.spot,s=t.anim;if(this.landmarkTier(e)>this.tier){const o=t.fallback??{place:"H",spot:"window",anim:"idle"};e=o.place,n=o.spot,s=o.anim,this.landmarkTier(e)>this.tier&&([e,n,s]=["H","window","idle"])}return{key:`${t.from}|${e}|${n??""}|${s}`,place:e,spot:n,anim:s,beat:t.beat}}resolveChoice(t){var o,r;const e=(o=this.events)==null?void 0:o.today(this.clock.day).ev;if(t.place==="$lunch"&&(e!=null&&e.lunch))return e.lunch;if(t.place==="$evening"&&(e!=null&&e.evening))return e.evening;const n=oo(this.seed,t.place,this.clock.day);if(t.place==="$lunch")return(r=this.events)!=null&&r.raining(this.clock.day,this.clock.sec)?"K":n()<.5+(this.needs.social??.5)*.3?"C":"P";const s=this.needs;return(s.energy??1)<.35?"H":(s.social??0)>=(s.curiosity??0)?n()<.5?"Z":"C":["N","T","M"][Math.floor(n()*3)]}updateRoutine(){if(this.scripted.has("vinnie"))return;const t=this.agents.get("vinnie"),e=this.activityNow();e.key!==t.activity&&(t.activity=e.key,t.place=e.place,t.anim=e.anim,this.override=null,this.walkTo(t,this.spotPos(e.place,e.spot)),t.arriveYaw=Gu[e.spot??""],t.moving||(t.yaw=t.arriveYaw??t.yaw))}updateExtra(t,e,n=!1){const s=this.clock.sec,o=[...e.plan].sort((u,d)=>ms(u[0])-ms(d[0])),r=[...o].reverse().find(u=>ms(u[0])<=s)??o[o.length-1],a=`${r[0]}|${r[1]}|${r[2]??""}`;if(a===t.activity)return;t.activity=a;const[,l,c]=r;let h;if(l==="home")h=[...e.home],t.hideOnArrive=!0;else if(c==="out"){const u=this.landmarks.get(l),d=u!=null&&u.spots?Object.values(u.spots):[],p=d.length?d[Math.floor(oo(this.seed,t.id,a)()*d.length)]:(u==null?void 0:u.door)??(u==null?void 0:u.monument)??[19,23],x=oo(this.seed,t.id,a,"j");h=[p[0]+(x()-.5)*.8,p[1]+(x()-.5)*.8],t.hideOnArrive=!1}else h=this.spotPos(l),t.hideOnArrive=c==="in";if(t.place=l,n){t.pos=[...h],t.prev=[...h],t.hidden=!!t.hideOnArrive;return}t.hidden=!1,this.walkTo(t,h),t.moving||(t.hidden=!!t.hideOnArrive)}walkTo(t,e){if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[1])<.05){t.path=null,t.moving=!1;return}t.path=this.nav.route(t.pos,e),t.seg=1,t.moving=!0}tick(t){this.clock.advance(t),this.realT+=t/Vc,this.updateRoutine();for(const e of this.d.routine.extras??[])this.updateExtra(this.agents.get(e.id),e);this.updateCrowd();for(const e of this.agents.values())e.prev=[e.pos[0],e.pos[1]],e.pace&&!this.scripted.has(e.id)?this.pace(e):this.move(e,t);this.separate(),this.tickNeeds(t),this.checkReaction()}move(t,e){if(!t.path)return;let n=t.speed*e/Vc;for(;n>0&&t.path&&t.seg<t.path.length;){const s=t.path[t.seg],o=s[0]-t.pos[0],r=s[1]-t.pos[1],a=Math.hypot(o,r);a>1e-6&&(t.yaw=Math.atan2(o,r)),a<=n?(t.pos=[s[0],s[1]],n-=a,t.seg++):(t.pos=[t.pos[0]+o/a*n,t.pos[1]+r/a*n],n=0)}t.path&&t.seg>=t.path.length&&(t.path=null,t.moving=!1,t.arriveYaw!==void 0&&(t.yaw=t.arriveYaw),t.hideOnArrive&&(t.hidden=!0))}pace(t){const e=t.pace,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),s=(this.realT*(e.speed??.8)+(e.phase??0)*n*2)%(2*n),o=s<n?s/n:2-s/n,r=e.a[0]+(e.b[0]-e.a[0])*o,a=e.a[1]+(e.b[1]-e.a[1])*o,l=s<n?1:-1;t.yaw=Math.atan2((e.b[0]-e.a[0])*l,(e.b[1]-e.a[1])*l),t.pos=[r,a],t.moving=!0}updateCrowd(){var s;const t=((s=this.events)==null?void 0:s.active(this.clock.day,this.clock.sec))??null,e=t!=null&&t.ev.crowd&&t.ev.where?Math.min(8,t.ev.crowd.size):0,n=t?`${t.ev.id}|${t.day}|${t.start}`:"";for(let o=0;o<8;o++){const r=`crowd-${o}`,a=this.agents.get(r);if(o>=e){a&&this.agents.delete(r);continue}if(a&&a.activity===n)continue;const l=this.spotPos(t.ev.where),c=o/e*Math.PI*2+.4,h=t.ev.crowd.radius,u=[l[0]+Math.cos(c)*h,l[1]+Math.sin(c)*h];this.add({id:r,kind:"crowd",cast:"joe",pos:u,speed:0,anim:"idle",place:t.ev.where,tierMin:1,activity:n}),this.agents.get(r).yaw=Math.atan2(l[0]-u[0],l[1]-u[1])}}separate(){const t=[...this.agents.values()].filter(e=>!e.hidden&&(e.moving||e.kind==="crowd")&&this.shown(e)).sort((e,n)=>e.id<n.id?-1:1);for(let e=0;e<3;e++)for(let n=0;n<t.length;n++)for(let s=n+1;s<t.length;s++){const o=t[n],r=t[s],a=r.pos[0]-o.pos[0],l=r.pos[1]-o.pos[1],c=Math.hypot(a,l);if(c>=Vu)continue;const h=c>1e-6?a/c:1,u=c>1e-6?l/c:0,d=(Vu-c)/2;o.pos=[o.pos[0]-h*d,o.pos[1]-u*d],r.pos=[r.pos[0]+h*d,r.pos[1]+u*d]}}shown(t){return!t.hidden&&this.tier>=t.tierMin}tickNeeds(t){const e=this.agents.get("vinnie"),n=e.moving?"walk":e.anim==="sleep"?"sleep":{H:"home",K:"work",C:"cafe",P:"park",Z:"plaza",N:"cinema",M:"market",T:"rummer"}[e.place]??"home",s=this.d.routine.needs.rates[n]??{};for(const o of Object.keys(this.needs))this.needs[o]=Math.min(1,Math.max(0,this.needs[o]+(s[o]??0)*t/3600))}checkReaction(){var s;const t=(s=this.events)==null?void 0:s.active(this.clock.day,this.clock.sec);if(!t)return;const e=`${t.ev.id}|${t.day}`,n=this.agents.get("vinnie");if(!(this.reacted.has(e)||n.moving||!(t.ev.everywhere||n.place===t.ev.where))){this.reacted.add(e),this.reaction=t.ev.reaction;for(const[o,r]of Object.entries(t.ev.effects))this.needs[o]=Math.min(1,Math.max(0,(this.needs[o]??.5)+r))}}scriptGo(t,e,n="idle",s){const o=this.agents.get(t);o&&(this.scripted.add(t),t==="vinnie"&&(this.override=null),o.speed||(o.speed=.93),o.anim=n,o.arriveYaw=s,o.hidden=!1,this.walkTo(o,e),!o.moving&&s!==void 0&&(o.yaw=s))}placeAt(t,e,n,s){const o=this.agents.get(t);o&&(this.scripted.add(t),o.pos=[...e],o.prev=[...e],o.path=null,o.moving=!1,o.anim=n,o.yaw=s)}release(t){this.scripted.delete(t);const e=this.agents.get(t);e&&(e.activity=""),t==="vinnie"&&this.updateRoutine()}dropEvent(t){var n;const e=((n=this.events)==null?void 0:n.drop(t,this.clock.day,this.clock.sec))??null;return this.updateCrowd(),e}mood(){var e;const t=(this.needs.energy+this.needs.social+this.needs.curiosity)/3;return((e=this.d.routine.needs.moods.find(([n])=>t<n))==null?void 0:e[1])??"okay"}setTier(t){this.tier=t,this.updateRoutine()}setTime(t,e=this.clock.day){this.clock.set(t,e),this.updateRoutine();for(const n of this.d.routine.extras??[])this.updateExtra(this.agents.get(n.id),n,!0);this.updateCrowd()}snapshot(t=1){var n,s;const e=[];for(const o of this.agents.values()){if(!this.shown(o))continue;const r=o.id==="vinnie"?this.override:null;e.push({id:o.id,kind:o.kind,cast:o.cast,look:o.look,x:o.prev[0]+(o.pos[0]-o.prev[0])*t,z:o.prev[1]+(o.pos[1]-o.prev[1])*t,yaw:(r==null?void 0:r.yaw)??o.yaw,anim:o.moving?"walk":(r==null?void 0:r.anim)??o.anim,moving:o.moving,place:o.place})}return{day:this.clock.day,sec:this.clock.sec,time:this.clock.hhmm,tier:this.tier,agents:e,event:((n=this.events)==null?void 0:n.active(this.clock.day,this.clock.sec))??null,raining:((s=this.events)==null?void 0:s.raining(this.clock.day,this.clock.sec))??!1}}}const Wu=(i,t)=>i>=Qo[0]&&i<=Qo[2]&&t>=Qo[1]&&t<=Qo[3],fM=i=>1-(1-Math.min(1,Math.max(0,i)))**3;function pM(i,t,e){const n=i.find(s=>s.n===t)??i[0];return n.radius[0]+(n.radius[1]-n.radius[0])*fM(e/n.radiusSeconds)}class mM{constructor(t,e,n){I(this,"km",0);I(this,"dot");I(this,"routeLen",[0]);this.route=t,this.metresPerPx=e,this.mapSize=n,this.dot=[...t[0]];for(let s=1;s<t.length;s++)this.routeLen.push(this.routeLen[s-1]+Math.hypot(t[s][0]-t[s-1][0],t[s][1]-t[s-1][1]))}autoAdd(t){this.km+=t;const e=this.routeLen[this.routeLen.length-1];let n=this.km*1e3/this.metresPerPx%e,s=1;for(;s<this.routeLen.length-1&&this.routeLen[s]<n;)s++;const o=this.route[s-1],r=this.route[s];n-=this.routeLen[s-1];const a=this.routeLen[s]-this.routeLen[s-1]||1;this.dot=[o[0]+(r[0]-o[0])*n/a,o[1]+(r[1]-o[1])*n/a]}move(t,e){const n=Math.min(this.mapSize[0],Math.max(0,this.dot[0]+t)),s=Math.min(this.mapSize[1],Math.max(0,this.dot[1]+e));this.km+=Math.hypot(n-this.dot[0],s-this.dot[1])*this.metresPerPx/1e3,this.dot=[n,s]}addMetres(t){this.autoAdd(t/1e3)}}const pi=Math.PI/180,Xu=[4.1,32.1],gM=.55,xM=1.6,$u=15,Fn=new Set;function vM(){let i,t=0,e=!1;const n=new Sa;let s,o,r,a,l,c,h,u,d,p,x=!1,S=!1,m,f=1/0,M=!1,b=-1,_="Vinnie",R=0,v,E,g,y=1,T=0,A=0,k=!1,F=-10,O=-1,L=-1,V=0,U="vinnie",Z,et,ut,wt=[],It,qt,mt=null,St,X,ot,K=!1,yt=0;const Dt=[];let Ut=!1,gt=!1,Pt,it,ft,ht=null,Et,bt=null;const Jt=new Map,B=new Vm,Qt={},zt=D=>g.find(rt=>rt.n===D)??g[0],Xt=(D,rt,lt=0)=>new N(D,lt,rt),xt=()=>{const D=i.store.data.settings.gfx;return D==="hd"||i.params.gfx==="hd"||D==="auto"&&i.params.gfx!=="16bit"&&O>=0&&t>=O},ue=D=>()=>a.headPx(D,l.camera,innerWidth,innerHeight),P=D=>{y=D,T=t,s.setTier(D);const rt=zt(D);D>1&&l.go(eo.town(Xt(rt.shot.target[0],rt.shot.target[1]),rt.shot.dist*zu[D-1]/Jo),2,"town")},w={simTime:D=>s.setTime(String(D)),tier:D=>{var rt;P(Number(D)),Number(D)===3&&!((rt=i.store.data.progress.met)!=null&&rt.mochi)&&s.scriptGo("vinnie",s.spotPos("M","corner"),"idle",45*pi)},camera:(D,rt)=>{const lt=rt,Q=zt(y);D==="town"&&(l.go(eo.town(Xt(Q.shot.target[0],Q.shot.target[1]),lt.dist[0]),0,"town"),l.dolly(lt.dist[0]*Jo,lt.dist[1]*Jo,lt.seconds))},vinnie:D=>{D==="standTurn"&&(s.override={anim:"idle",yaw:45*pi,until:"routine"})},caption:D=>{const rt=String(D),lt=g.find(Q=>`tier${Q.n}`===rt);i.captions.show(i.copy.captions[rt]??"",(lt==null?void 0:lt.captionFor)??4)},bubble:(D,rt)=>{var Q;const lt=String(D);c.bubble(`${lt}-say`,String(rt),ue(lt),t,((Q=zt(1).bubble)==null?void 0:Q.hold)??1.1),wt.push({id:lt,at:t})},autoWalk:()=>{k=!0},gps:D=>{D==="show"&&!X.visible&&X.show(t),D==="shrink"&&X.shrink(t)},ticker:()=>{var D;return ot.start(t,((D=s.events)==null?void 0:D.tickerLines(s.clock.day,s.clock.sec))??[])},routine:()=>{},lore:D=>Dt.push(String(D)),rings:D=>{K=D==="on"},holdSim:D=>{Ut=!!D},play:D=>{D==="contact"?(bt="contact",Pt.start()):D==="cafe"&&(bt="cafe",ft.wipe(()=>it.start()))},wipe:()=>{},festival:()=>{var st;const D=(st=s.landmark("Z"))==null?void 0:st.spots,rt=[D==null?void 0:D.a,D==null?void 0:D.c],[lt,Q]=Xu;ft.wipe(()=>{var tt;const[Ct,Vt]=rt;if(!Ct||!Vt)return;const Kt=eo.close(Xt(Ct[0],Ct[1]),Xt(Vt[0],Vt[1]));Math.cos(Kt.yaw-Math.atan2(lt-(Ct[0]+Vt[0])/2,Q-(Ct[1]+Vt[1])/2))>0&&(Kt.yaw+=Math.PI),Object.assign(Kt,{yaw:Kt.yaw+22*pi,dist:9.5,pitch:13*pi}),l.go(Kt,0,"close"),L=t+60;const z=($,nt)=>Kt.yaw+25*pi*Math.sign(Math.sin(Math.atan2(nt[0]-$[0],nt[1]-$[1])-Kt.yaw));s.placeAt("vinnie",Ct,"idle",z(Ct,Vt)),s.placeAt("mochi",Vt,"idle",z(Vt,Ct)),U="vinnie",ft.hideHud(!0),b=t,i.captions.show(i.copy.captions.festival??"",5);const pt=(tt=i.data.events.events.find($=>$.id==="festival"))==null?void 0:tt.reaction;pt&&c.bubble("vinnie-say",pt,ue("vinnie"),t+1.2,4.5)})},met:D=>{const rt=i.store.data.progress.met??{};rt[String(D)]=!0,i.store.data.progress.met=rt,i.store.save()},walkTo:(D,rt)=>{var Q;const lt=Object.values(((Q=s.landmark(String(rt)))==null?void 0:Q.spots)??{});D.forEach((st,Ct)=>{const Vt=lt[Ct%Math.max(1,lt.length)]??s.spotPos(String(rt));s.scriptGo(st,[Vt[0],Vt[1]],"idle",45*pi)})},continue:()=>{gt=!0},next:()=>{},gfx:D=>{D==="hd"&&(O=t)}},W=()=>{const D={};for(const rt of a.members.values()){const lt=a.headPx(rt.id,l.camera,innerWidth,innerHeight,0),Q=rt.peepl.root.position,st=!!(lt!=null&&lt[2]);D[rt.id]={visible:st&&rt.peepl.root.visible&&!at(rt.peepl.root.position),px:rt.px,onScreen:st,inside:Wu(Q.x,Q.z)}}return D},at=D=>{const rt=D.clone().setY(D.y+1.3),lt=l.camera.position,Q=rt.clone().sub(lt),st=Q.length();B.set(lt,Q.normalize()),B.far=st-.3;const Ct=r.faces.geometry.attributes.aReveal,Vt=Ze.uRadius.value;return B.intersectObject(r.faces,!1).some(Kt=>Kt.face&&Ct.getX(Kt.face.a)<=Vt-1.4)},dt=D=>{D.type==="keydown"?Fn.add(D.key):Fn.delete(D.key)};return{id:"S8",mount(D,rt){var tt;i=D,g=D.data.tiers.tiers;const lt=vo({lowgpu:D.params.lowgpu});lt.shadowMap.enabled=!0,_o(!0);const Q=_h();v=Q.key,d=Q.hemi,_=((tt=D.data.cast.cast.find($=>$.id==="vinnie"))==null?void 0:tt.name)??_,v.shadow.mapSize.setScalar(wl()?1024:2048),v.shadow.bias=-5e-4,v.shadow.normalBias=.02,n.add(Q.group),u=jb(),n.add(u.mesh),r=qb(D.data.map),n.add(r.group),a=new tM(D.data.cast.cast,D.data.cast.bodyTypes,D.params.rig==="groups"),n.add(a.group),a.setOutline(D.store.data.settings.outline!=="none"&&D.params.outline!=="none"),s=new uM({map:D.data.map,routine:D.data.routine,events:D.data.events},D.params.seed);const st=D.data.tiers.walk;o=new mM(st.autoRoute,st.metersPerMapPx,st.card.mapSize);const Ct=zt(1);l=new Kb(eo.town(Xt(Ct.shot.target[0],Ct.shot.target[1]),Ct.shot.dist)),c=new eM,h=new Zb(wl()?0:4),h.enabled=!mh(),wl()&&(a.maxVisible=24),E=new sM(D.data.setpieces.worldScript,w);const Vt=D.data.map;It=new Lb(Fb(Vt)),n.add(It.group),It.items.forEach(($,nt)=>c.attach(`sign-${$.def.text}`,$.tag,()=>{if(!(l.shot==="town"&&$.mesh.visible&&It.planePx(nt,l.camera,innerHeight)<40))return null;const kt=$.def.pos.clone().add(new N(0,$.def.height*.5+.2,0)).project(l.camera);return[(kt.x+1)/2*innerWidth,(1-kt.y)/2*innerHeight,kt.z<1]},-1,1/0,1)),qt=new Ib,n.add(qt.mesh);const Kt=Vt.props.find($=>$.loop);Kt&&(mt=new Db(Kt),n.add(mt.group)),St=new Nb,n.add(St.group),p=new Ob(Xu),n.add(p.group),Et=new fn;const z=new Ei({color:16777215,gradientMap:Ai()}),pt=new Ei({color:13619151,gradientMap:Ai(),transparent:!0,opacity:.6});for(const $ of[28.78,29.02]){const nt=new Me(new bo(.06,.05,.12,12),z);nt.position.set($,.61,22.7),Et.add(nt);for(let ct=0;ct<3;ct++){const kt=new Me(new Un(.035,8,6),pt);kt.position.set($,.72+ct*.1,22.7),kt.name="steam",Et.add(kt)}}Et.visible=!1,n.add(Et),ft={get t(){return t},get reduced(){return e},auto:()=>i.store.data.settings.auto&&!i.flow.reduced&&document.documentElement.dataset.keyboard!=="1",hud:c,crowd:a,rig:l,sim:s,root:rt,poses:Jt,copy:D.copy,anchor:($,nt=.25)=>()=>a.headPx($,l.camera,innerWidth,innerHeight,nt),holdSim:$=>{Ut=$},hideHud:$=>{S=$;for(const nt of[Z.el,X.el,ot.el,et])nt.style.visibility=$?"hidden":"";$&&i.captions.clear()},toast:$=>i.toast.show($,3),wipe:$=>{ht=new Ju(e,$,()=>{ht=null})},choice:($,nt)=>{Qt[$]=nt},townShot:()=>J("town"),hop:$=>wt.push({id:$,at:t})},Pt=new Tb(ft,D.data.setpieces.contact),it=new Cb(ft,D.data.setpieces.cafe),Z=new Rb(D.data.tiers.hud.progressSegments),X=new Pb(String(D.data.tiers.hud.gpsTitle),st.autoRoute,($,nt)=>{o.move($,nt),F=t}),ot=new kb(D.copy.S8.news),ut=H("span",{}),et=rn([ut],{size:32,color:"yellow"}),Bt(et,{position:"absolute",right:50,top:50}),et.classList.add("walk-pill"),Pe(et,{right:40,top:190}),Bt(ot.el,{top:170}),Pe(ot.el,{top:1010}),Pe(X.el,{right:"auto",left:28,top:"auto",bottom:58,transformOrigin:"0 100%"});for(const $ of[Z.el,X.el,ot.el])$.classList.add("hud-avoid");X.el.addEventListener("pointerdown",()=>F=t),m=rn([Ms("play",20,"var(--white)"),D.copy.S12.replay],{size:28,tag:"button"}),Bt(m,{position:"absolute",right:50,bottom:36,display:"none",pointerEvents:"auto"}),m.classList.add("free-replay"),m.addEventListener("click",$=>{$.stopPropagation();const nt=i.store.data.settings;i.store.reset(),i.store.data.settings=nt,i.store.save(),i.flow.go("S0")}),Pe(m,{right:22,bottom:20}),rt.append(Z.el,et,X.el,ot.el,m),addEventListener("keydown",dt),addEventListener("keyup",dt),Object.assign(Tt,{sim:()=>({day:s.clock.day,time:s.clock.hhmm,speed:i.store.data.settings.speed,tier:y,km:o.km,radius:Ze.uRadius.value}),setTime:($,nt)=>s.setTime($,nt),tick:$=>{for(let nt=0;nt<$/no;nt++)s.tick(no)},setTier:$=>P($),walk:$=>o.autoAdd($),moveYou:($,nt)=>o.move($,nt),shot:$=>{L=t+$u,J($)},follow:$=>{U=$},legibility:W,projectPx:($,nt,ct=0)=>{const kt=Xt($,nt,ct).project(l.camera);return[(kt.x+1)/2*innerWidth,(1-kt.y)/2*innerHeight]},beat:$=>E.fire($,t),dropEvent:$=>{var nt;s.dropEvent($),ot.start(t,((nt=s.events)==null?void 0:nt.tickerLines(s.clock.day,s.clock.sec))??[])},mirror:$=>Bb(D.data.events.mirror,$),ticker:()=>ot.content,rings:()=>qt.mesh.count,setpiece:()=>({contact:Pt.active,cafe:it.active,cafeT:it.t,line:it.lineText,facing:it.facing(),ended:gt}),replaySetpiece:()=>(bt==="cafe"?it.start():bt==="contact"&&Pt.start(),bt!==null),banner:()=>{var $;return(($=St.banner)==null?void 0:$.name)??null},signTags:()=>It.items.filter($=>$.tag.isConnected&&$.tag.style.visibility!=="hidden").map($=>{const nt=$.tag.getBoundingClientRect();return{text:$.def.text,rect:[nt.left,nt.top,nt.right,nt.bottom]}}),gpsKm:()=>{var $;return X.visible?(($=X.el.querySelector(".gps-km"))==null?void 0:$.textContent)??"":""},bubbles:()=>c.texts(),skyTop:()=>`#${u.uniforms.uTop.value.getHexString()}`,dusk:()=>R,lanterns:()=>p.lanterns.visible,cameraShot:()=>l.shot,pos:$=>{const nt=s.agents.get($);return nt?[nt.pos[0],nt.pos[1]]:null},bodyPx:$=>{const nt=a.headPx($,l.camera,innerWidth,innerHeight,0);return nt?[nt[0],nt[1]+a.members.get($).px/3]:null}})},enter(){var rt,lt;e=i.flow.reduced;const D=In.sub;In.sub=null,M=i.params.free||!!i.store.data.progress.freeMode,M?(i.store.data.progress.freeMode&&s.setTime("20:40",1),P(4),T=-10,O=0,K=!0,k=!0,f=8,m.style.display="inline-flex",X.show(0),ot.start(0,((rt=s.events)==null?void 0:rt.tickerLines(s.clock.day,s.clock.sec))??[]),R=Pu(s.clock.sec).dusk):D?(E.markFired("enter"),D==="contact"?(P(3),T=-10,E.markFired("tier2","tier3"),s.setTime("17:00"),s.placeAt("vinnie",[23,28.9],"idle",0)):D==="cafe"?(P(3),T=-10,E.markFired("contact","cafe","tier2","tier3"),bt="cafe",it.start()):D==="end"&&(P(4),T=-10,O=0,E.markFired("tier2","tier3","contact","cafe","tier4"),E.fire("end",0))):((lt=i.store.data.progress.met)!=null&&lt.mochi&&E.markFired("contact","cafe"),E.update(vt())),this.update(0,0)},update(D,rt){var qn,Is,Eo,Ao,Ji,To,Qi;t=rt;const lt=i.store.data.settings,Q=lt.speed===.25?1:lt.speed;if(["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].filter(ee=>Fn.has(ee)).length){const ee=i.data.tiers.walk.manualKmPerSecond*1e3/i.data.tiers.walk.metersPerMapPx*D*Math.max(1,Q),ve=(Fn.has("d")||Fn.has("ArrowRight")?1:0)-(Fn.has("a")||Fn.has("ArrowLeft")?1:0),An=(Fn.has("s")||Fn.has("ArrowDown")?1:0)-(Fn.has("w")||Fn.has("ArrowUp")?1:0);o.move(ve*ee,An*ee)}else k&&t-F>1.5&&o.autoAdd(i.data.tiers.walk.autoKmPerSecond*D);for(Ut||(A+=D*Vc*Q);A>=no;)s.tick(no),A-=no;if(!M)E.update(vt());else if(t>=f&&L<t)f=t+12,U="vinnie",J(l.shot==="town"?"venue":"town");else if(l.shot==="venue"&&t>f-10.5&&L<t){const ee=(qn=a.members.get("vinnie"))==null?void 0:qn.peepl.root.position;ee&&at(ee)&&(f=t+12,J("town"))}yt+=D*Q,Ze.uRadius.value=pM(g,y,t-T);const Ct=xt(),Vt=Ct?le(t,Math.max(O,0),xM,se.enter):0;document.querySelector("#fx16").style.opacity=String(gM*(1-(Ct?lt.gfx==="hd"||i.params.gfx==="hd"?1:Vt:0)));const Kt=i.params.tod??lt.tod,z=Pu(s.clock.sec),pt=Kt==="dusk"?1:Kt==="day"?0:z.dusk;R+=Math.sign(pt-R)*Math.min(Math.abs(pt-R),D/10);const tt=b>=0&&l.shot==="close"?.6:1;ab(R*tt,Kt==="auto"?z.night*tt:0,{key:v,hemi:d,sky:u.uniforms,fog:r.fog.material,glow:Ze.uGlowColor}),Ze.uGlow.value=Math.max(Ct?.3:0,R),h.uniforms.uQuant.value=Ct?0:1,v.castShadow=Ct,i.field.glow(Ct||R>0?.45:.25,R),Ze.uViewport.value.set(innerWidth*Math.min(devicePixelRatio,2),innerHeight*Math.min(devicePixelRatio,2)),Ze.uEdgeWidth.value=Math.min(3.5,Math.max(1.5,2.2*Math.max(.6,ba())*Math.min(devicePixelRatio,2)));const $=s.snapshot(A/no);l.update(D,innerWidth/innerHeight,e),u.uniforms.uOpacity.value=l.shot==="town"?0:1;const nt=(Is=a.members.get(U))==null?void 0:Is.peepl.root.position;l.shot!=="town"&&nt&&L<t&&!Pt.active&&!it.active&&l.retarget(nt.clone().setY(1)),Pt.update(),it.update(D),it.late(),ht==null||ht.update(D);for(const ee of $.agents){const ve=Jt.get(ee.id);ve&&Object.assign(ee,{x:ve.x,z:ve.z,yaw:ve.yaw,anim:ve.anim,moving:ve.anim==="walk"})}Et.visible=it.cupsOn;for(const ee of Et.children)ee.name==="steam"&&(ee.position.y=.72+(t*.35+ee.id*.13)%.3);const ct=Ze.uRadius.value;if(a.update($.agents,D*Math.min(Math.max(Q,1),4),l.camera,innerHeight,ct),it.active)for(const ee of a.members.values()){if(ee.id==="vinnie"||ee.id==="mochi")continue;const ve=ee.peepl.root.position;Math.hypot(ve.x-30.3,ve.z-22.8)<7&&(ee.visible=ee.peepl.root.visible=!1)}if(b>=0&&l.shot==="close"){const ee=l.camera.position,ve=(Eo=a.members.get("vinnie"))==null?void 0:Eo.peepl.root.position;for(const An of a.members.values()){if(!ve||An.id==="vinnie"||An.id==="mochi")continue;const Ds=An.peepl.root.position;Math.hypot(Ds.x-ee.x,Ds.z-ee.z)<Math.hypot(ve.x-ee.x,ve.z-ee.z)-.5&&(An.visible=An.peepl.root.visible=!1)}}It.update(ct),mt==null||mt.update(yt,ct);const kt=(Ao=$.event)!=null&&Ao.ev.where?s.landmark($.event.ev.where):void 0,ne=kt?s.spotPos(kt.key):null,ke=(kt==null?void 0:kt.door)??null;St.set(((Ji=$.event)==null?void 0:Ji.ev)??null,ne?Xt(ne[0],ne[1]):null,ke?Xt(ke[0],ke[1]):null),St.update(t,$.raining&&y>=2,l.current().target),p.update(ct,((To=$.event)==null?void 0:To.ev.visual)==="lanterns",t,b);const be=K&&y>=3?$.agents.filter(ee=>{var ve;return ee.cast!=="joe"&&ee.id!=="vinnie"&&((ve=a.members.get(ee.id))==null?void 0:ve.visible)}).map(ee=>Xt(ee.x,ee.z)):[],Xe=a.members.get("vinnie");Xe!=null&&Xe.visible&&be.push(Xe.peepl.root.position.clone().setY(0));const gn=!!(Xe!=null&&Xe.visible)&&Xe.px<90&&!Pt.active&&!it.active;for(gn&&!x?c.attach("vinnie-pill",rn([_],{size:28}),()=>a.headPx("vinnie",l.camera,innerWidth,innerHeight,.15),t,1e9,5):!gn&&x&&c.remove("vinnie-pill"),x=gn,qt.update(t,be),s.reaction&&(c.bubble("vinnie-say",s.reaction,ue("vinnie"),t,3),s.reaction=null);Dt.length;){const ee=Dt[0],ve=s.landmark(ee),An=i.data.map.buildings.find(Ds=>Ds.id===(ve==null?void 0:ve.building));if(An&&ct<An.d0+1.4)break;Dt.shift(),ve!=null&&ve.lore&&c.bubble("vinnie-lore",ve.lore,ue("vinnie"),t,4)}X.visible&&X.update(t,o.km,o.dot,String(i.data.tiers.hud.kmFormat),e);const Ls=S||Pt.active;l.lift=Ls?-60:90,ln&&!Ls&&t-F>4&&(X.el.style.opacity=String(Number(X.el.style.opacity||1)*.35)),ot.setLines(((Qi=s.events)==null?void 0:Qi.tickerLines(s.clock.day,s.clock.sec))??[]),ot.update(t,D,e),wt=wt.filter(ee=>t-ee.at<.5);for(const ee of wt){const ve=a.members.get(ee.id);ve&&(ve.peepl.root.position.y+=uo(t,ee.at,.2,.4)*(e?0:1))}c.update(D,e),v.shadow.camera.left=v.shadow.camera.bottom=-14,v.shadow.camera.right=v.shadow.camera.top=14,v.target.position.set(19,0,19),v.position.set(35,24,41);const Ti=zt(y);Z.set(y,Ti.badge,Ti.name,Ct?i.copy.S8.hd:i.copy.S8.bit,Ct,t);const wo=document.getElementById("gl");wo.getAttribute("aria-label")!==`${Ti.badge}, ${Ti.name}`&&wo.setAttribute("aria-label",`${Ti.badge}, ${Ti.name}`),Z.update(t,e),ut.textContent=String(i.data.tiers.hud.walkPillTier1).replace("{km}",o.km.toFixed(1)),et.style.display=y===1&&!X.visible?"inline-flex":"none",X.el.style.visibility=S||Pt.active?"hidden":"",In.rigOk=[...a.members.values()].every(ee=>ee.anim.ok()),In.chars=a.members.size;const So=[0,0,0];for(const ee of a.members.values())So[ee.px>180?0:ee.px>60?1:2]++;In.lod=So,i.loop.drawFrame&&(h.render(vo(),n,l.camera,t),gh())},landed:()=>gt,autoPillTop:ln,choose:D=>Pt.choose(D),onInput(D){var rt;if(D.type==="key"&&Pt.active&&(D.key==="1"||D.key==="2"))return void Pt.choose(Number(D.key)-1);if(D.type==="tap"&&D.x!==void 0&&D.y!==void 0&&y>=3){const lt=Mt(D.x,D.y);let Q=null;for(const st of a.members.values()){if(!st.visible||st.id==="vinnie"||st.peepl.id==="joe"||st.id.startsWith("joe")||st.id.startsWith("pacer")||st.id.startsWith("crowd"))continue;const Ct=a.headPx(st.id,l.camera,innerWidth,innerHeight,-.6);if(!Ct)continue;const Vt=Math.hypot(Ct[0]-lt[0],Ct[1]-lt[1]);Vt<Math.max(60,st.px*.6)&&(!Q||Vt<Q.d)&&(Q={id:st.id,d:Vt})}if((Q==null?void 0:Q.id)==="mochi"&&!Pt.active&&!it.active&&!((rt=i.store.data.progress.met)!=null&&rt.mochi)&&Qt.contact==="notnow"){delete Qt.contact,Pt.start();return}if(Q){U=Q.id;const st=i.data.cast.cast.find(Vt=>Vt.id===Q.id);st!=null&&st.tagline&&c.bubble(`${Q.id}-tag`,st.tagline,ue(Q.id),t,3);const Ct=Q.id;c.attach("name-pill",rn([(st==null?void 0:st.name)??Ct],{size:28}),()=>a.headPx(Ct,l.camera,innerWidth,innerHeight,-.15),t,6,6)}return}D.type==="key"&&(D.key==="t"||D.key==="T")&&(L=t+$u,V=(V+1)%3,J(["town","venue","close"][V]))},exit(){},unmount(){removeEventListener("keydown",dt),removeEventListener("keyup",dt),Fn.clear();for(const D of Object.keys(Tt))delete Tt[D];a.dispose(),r.faces.geometry.dispose(),r.edges.geometry.dispose(),r.fog.dispose(),h.dispose(),c.clear(),n.clear(),_o(!1),document.querySelector("#fx16").style.opacity="0"},seek(D){t=D}};function vt(){return{t,km:o.km,tier:y,simSec:s.clock.sec,distance:(D,rt)=>{const lt=s.agents.get(D),Q=s.agents.get(rt);return lt&&Q?Math.hypot(lt.pos[0]-Q.pos[0],lt.pos[1]-Q.pos[1]):1/0},choices:Qt,busy:it.active}}function Mt(D,rt){return Rp(D,rt)}function J(D,rt){const lt=a.members.get(U),Q=(lt==null?void 0:lt.peepl.root.position)??Xt(19,19);if(D==="town"){const st=zt(y);l.go(eo.town(Xt(st.shot.target[0],st.shot.target[1]),(st.shot.distEnd??st.shot.dist)*zu[y-1]/Jo),.9,"town")}else if(D==="venue"){const st=eo.venue(Wu(Q.x,Q.z)?Xt(19,19):Q.clone().setY(0));Q.x<8.5&&Q.z>27.5&&(st.yaw=-100*pi),l.go(st,.9,"venue")}else l.go({target:Q.clone().setY(1.5*yo*1.7),yaw:45*pi,pitch:10*pi,dist:7.5},.9,"close")}}function _M(i,t,e,n){return H("button",{class:"cast-card","data-id":i,"aria-label":`${t}, ${e}`,style:"position:absolute;width:262px;height:360px;border-radius:26px;border:6px solid var(--ink);background:var(--white);overflow:hidden;padding:0;pointer-events:auto;display:flex;flex-direction:column;align-items:center;text-align:center"},H("img",{src:pr(n),alt:"",draggable:"false",style:"display:block;width:250px;height:250px;border-bottom:6px solid var(--ink);object-fit:cover"}),H("div",{class:"display card-name",style:"font-size:34px;color:var(--ink);margin-top:6px"},t),H("div",{class:"pixel card-tag",style:"font-size:26px;color:var(--lit-card-tagline);text-wrap:balance;padding:0 10px;margin-top:4px"},e))}const mi=Ue({left:109,top:200,dx:288,dy:390,cols:6,k:1},{left:102,top:260,dx:300,dy:385,cols:3,k:1.06}),cs={at:.35,stagger:.09,dur:.55},yM=.15,Yu={dur:7,to:Ue(1.05,1.02)},Qr={w:1100,h:760};function bM(){let i,t=0,e=!1,n,s,o=[],r,a,l,c,h,u,d,p=null,x=!1;const S=new Sa,m=new yn(22,1,.1,100);let f=null,M=null,b=[];const _=()=>{p=null,r.style.display="none",s.style.visibility="",f==null||f.dispose(),f=null,_o(!1)},R=(v,E=!1)=>{var k;const g=b.find(F=>F.id===v);if(!g)return;p=v,x=E,l.textContent=g.name,c.textContent=g.tagline??"";const y=(k=i.store.data.progress.met)==null?void 0:k[v];h.style.display=y?"block":"none",u.style.display=x?"inline-flex":"none",u.textContent=v==="vinnie"?"mochi":"vinnie",r.style.display="block",s.style.visibility="hidden",f==null||f.dispose();const T=i.data.cast.cast.find(F=>F.id===v);f=yh(T,i.data.cast.bodyTypes,{lods:[0]}),S.add(f.root),M=new bh(f.rig,f.dims,v);const A=vo();A.setScissorTest(!1),A.setClearColor(0,0),A.clear(),_o(!0)};return{id:"S11",mount(v,E){i=v;const g=v.copy.S11;b=v.data.cast.cast,d=new Fs(v.captions,v.copy.captions,[{key:"cast1",at:.8,until:3.6},{key:"cast2",at:3.8,until:6.8}]),n=H("div",{class:"display s11-heading",style:"position:absolute;left:0;right:0;top:20px;text-align:center;font-size:92px;color:var(--ink)"},g.heading),o=g.order.map((T,A)=>{const k=b.find(O=>O.id===T),F=_M(T,k.name,k.tagline??"",k.sprite.card);return Bt(F,{left:mi.left+A%mi.cols*mi.dx+131*(mi.k-1),top:mi.top+Math.floor(A/mi.cols)*mi.dy+180*(mi.k-1)}),F.addEventListener("click",O=>{O.stopPropagation(),R(T)}),F}),s=H("div",{class:"s11-grid",style:"position:absolute;inset:0;transform-origin:50% 55%;perspective:1200px"},...o);const y=rn([g.yourPeepls],{size:32,tag:"button"});Bt(y,{position:"absolute",left:50,top:40,pointerEvents:"auto"}),y.classList.add("your-peepls"),y.addEventListener("click",T=>{T.stopPropagation(),R("vinnie",!0)}),l=H("span",{class:"display",style:"font-size:46px;color:var(--ink)"}),c=H("span",{class:"pixel",style:"font-size:30px;color:var(--ink)"}),h=H("div",{class:"pixel met-sticker",style:"position:absolute;right:30px;top:24px;background:var(--yellow);border:4px solid var(--ink);border-radius:10px;padding:4px 14px 6px;font-size:26px;transform:rotate(-8deg);display:none"},g.met),u=rn([""],{size:28,tag:"button"}),u.style.pointerEvents="auto",u.addEventListener("click",T=>{T.stopPropagation(),p&&R(p==="vinnie"?"mochi":"vinnie",!0)}),a=H("div",{class:"sheet-turntable",style:"position:absolute;left:30px;right:30px;top:120px;bottom:30px"}),r=H("div",{class:"cast-sheet",style:`position:absolute;left:${(1920-Qr.w)/2}px;top:${(1080-Qr.h)/2+20}px;width:${Qr.w}px;height:${Qr.h}px;border:6px solid var(--ink);border-radius:26px;display:none;pointer-events:auto`},H("div",{style:"position:absolute;left:0;right:0;top:0;height:110px;background:var(--cream);border-radius:20px 20px 0 0;border-bottom:6px solid var(--ink);display:flex;align-items:center;gap:20px;padding:0 30px"},l,c,rn([g.hasHuman],{size:28}),u),h,a),r.addEventListener("click",T=>T.stopPropagation()),Pe(n,{left:40,right:"auto",top:30,fontSize:60,textAlign:"left"}),Pe(s,{left:0,top:0,width:1080,height:1920}),Pe(y,{left:40,top:78}),Pe(r,{left:40,top:300,width:1e3,height:1300}),E.append(n,y,s,r),S.add(_h().group),Object.assign(Tt,{sheetOpen:()=>p,sheetCentrePx:()=>{const T=a.getBoundingClientRect();return[T.left+T.width/2,T.top+T.height*.55]}})},enter(){e=i.flow.reduced,this.update(0,0)},update(v,E){t=E;const[g,y]=Fe(t,yM,.45,e);if(Bt(n,{transform:`scale(${g})`,opacity:String(y)}),o.forEach((T,A)=>{const k=cs.at+A*cs.stagger,[F,O]=Fe(t,k,cs.dur,e),L=e?0:90*(1-Math.min(1,le(t,k,cs.dur,se.pop))),V=e?0:Math.sin(t*2.4+A*.6)*5;Bt(T,{transform:`translateY(${V}px) rotateY(${L}deg) scale(${(.6+.4*F)*mi.k})`,opacity:String(O)})}),s.style.transform=`scale(${e?1:1+(Yu.to-1)*le(t,0,Yu.dur,se.draw)})`,d.update(t),p&&f&&M&&i.loop.drawFrame){M.update(v),f.root.rotation.y=t*.35;const T=a.getBoundingClientRect(),A=vo(),k=innerHeight-T.bottom;m.aspect=T.width/T.height,m.updateProjectionMatrix(),m.position.set(0,1.6,9),m.lookAt(new N(0,1,0)),A.setScissorTest(!0),A.setScissor(new Ee(T.left,k,T.width,T.height)),A.setViewport(new Ee(T.left,k,T.width,T.height)),A.setClearColor(16051935,1),A.clear(),A.render(S,m),A.setScissorTest(!1),A.setViewport(0,0,innerWidth,innerHeight),A.setClearColor(0,0),gh()}},landed:()=>t>=cs.at+11*cs.stagger+cs.dur&&!p,pillTop:!0,onInput(v){if(p){if(v.type==="key"&&v.key==="Escape")_();else if(v.type==="tap"&&v.x!==void 0&&v.y!==void 0){const E=r.getBoundingClientRect(),[g,y]=ir(E.left,E.top),[T,A]=ir(E.right,E.bottom);v.x>=g&&v.x<=T&&v.y>=y&&v.y<=A||_()}}},exit(){p&&_()},unmount(){p&&_(),delete Tt.sheetOpen,delete Tt.sheetCentrePx,S.clear()},seek(v){this.update(0,v)}}}const hs={pitch:124,feet:1070,h:320,hero:330,at:.1,stagger:.05,rise:440},MM=.5,wM=[1.5,.4],ta=[2.1,.5],Ol=[2.7,.4],Bl=[3.4,4.3];function SM(){let i,t=0,e=!1,n=[],s,o,r,a=[];const l=()=>{const h=i.store.data.settings;i.store.reset(),i.store.data.settings=h,i.store.save(),i.flow.go("S0")},c=()=>{i.store.data.progress.freeMode=!0,i.store.save(),i.flow.go("S8")};return{id:"S12",mount(h,u){i=h;const d=h.copy.S12;n=[...d.wordmark].map(f=>H("span",{class:"display",style:`display:inline-block;font-size:${Ue(220,160)}px;line-height:0.9;color:var(--yellow);-webkit-text-stroke:7px var(--ink);paint-order:stroke fill;text-shadow:0 11px 0 var(--ink)`},f));const p=H("div",{id:"s12-wordmark",style:"position:absolute;left:0;right:0;top:90px;display:flex;justify-content:center;gap:2px"},...n);s=H("div",{class:"pixel s12-tagline",style:"position:absolute;left:0;right:0;top:360px;text-align:center;font-size:66px;color:var(--ink)"},d.tagline),o=H("button",{class:"display s12-cta",style:"position:absolute;left:50%;top:460px;display:inline-flex;align-items:center;gap:18px;background:var(--yellow);border:8px solid var(--ink);border-radius:999px;padding:22px 56px 26px;font-size:62px;color:var(--ink);white-space:nowrap;pointer-events:auto"},H("span",{},d.cta),Ms("arrow",56,"var(--ink)")),o.addEventListener("click",f=>{f.stopPropagation(),c()}),r=H("div",{class:"pixel s12-sub",style:"position:absolute;left:0;right:0;top:628px;text-align:center;font-size:44px;color:var(--ink)"},d.sub);const x=rn([Ms("play",20,"var(--white)"),d.replay],{size:28,tag:"button"});Bt(x,{position:"absolute",right:50,top:40,pointerEvents:"auto"}),x.classList.add("s12-replay"),x.addEventListener("click",f=>{f.stopPropagation(),l()});const S=h.data.cast.cast,m=ln?8:d.lineup.length;a=d.lineup.map((f,M)=>{const b=S.find(T=>T.id===f).sprite,_=f==="vinnie"||f==="mochi"?hs.hero:hs.h,R=Math.floor(M/m),v=M%m,E=Math.min(m,d.lineup.length-R*m),g=(ln?540:960)+(v-(E-1)/2)*hs.pitch,y=new ka(b,{class:"sprite lineup","data-id":f}).place(g,ln?1500+R*380:hs.feet,_);return Pe(y.el,{}),y}),Pe(p,{top:200}),Pe(s,{top:470,fontSize:54}),Pe(o,{top:590}),Pe(r,{top:790}),Pe(x,{right:22,top:22}),u.append(...a.map(f=>f.el),p,s,o,r,x)},enter(){e=i.flow.reduced,this.update(0,0)},update(h,u){t=u,a.forEach((S,m)=>{const f=hs.at+m*hs.stagger,M=e?0:hs.rise*(1-le(t,f,.5,se.pop)),b=e?0:uo(t,Bl[0]+m/a.length*(Bl[1]-Bl[0]-.4),22,.4);S.pose({t,phase:m*.7,hop:b-M,opacity:e?le(t,f,.2,se.enter):1})}),n.forEach((S,m)=>{const f=MM+m*.08,[M,b]=Fe(t,f,.5,e),_=e?0:-18+18*le(t,f,.5,se.pop),R=e?0:Math.sin(t*3+m*.7)*6;Bt(S,{transform:`translateY(${R}px) rotate(${_}deg) scale(${M})`,opacity:String(b)})});for(const[S,[m,f]]of[[s,wM],[r,Ol]]){const[M,b]=Fe(t,m,f,e);Bt(S,{transform:`scale(${M})`,opacity:String(b)})}const[d,p]=Fe(t,ta[0],ta[1],e),x=e||t<ta[0]+ta[1]?1:1+.03*Math.sin(t*5);Bt(o,{transform:`translateX(-50%) scale(${d*x})`,opacity:String(p)})},landed:()=>t>=Ol[0]+Ol[1],onInput(h){h.type==="key"&&(h.key==="r"||h.key==="R")&&l()},exit(){},unmount(){},seek(h){this.update(0,h)}}}const zl={S0:g1,S1:A1,S2:C1,S3:L1,S4:tb,S5:eb,S6:sb,S7:rb,S8:vM,S11:bM,S12:SM,S99:wb},EM=i=>{var t;return((t=zl[i])==null?void 0:t.call(zl))??a1(i)},AM=1,TM={U:"head height",worldPerU:.58},CM={thin:{head:.96,h:1.04,T:.88,A:.8,hem:.75,belly:.85,legs:1.1},average:{head:1,h:1,T:1,A:1,hem:1,belly:1,legs:1},stocky:{head:1.14,h:.99,T:1.7,A:1.35,hem:1.6,belly:1.3,legs:.85},xl:{head:1.25,h:1.2,T:2,A:1.5,hem:1.85,belly:1.5,legs:1}},RM=[{id:"flare",num:"00",name:"Flare",tagline:"thinks out loud",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#7A7A7A",hands:"#7A7A7A",face:{eyes:"none",mouth:"none"},top:{type:"hoodie",color:"#5E5E5E",collar:"none"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hood",color:"#5E5E5E"},{part:"face.flame",color:"#FF5AD9",color2:"#FFE100"}],sprite:{body:"assets/cast/body-00.png",card:"assets/cast/card-00.jpg",footX:.37,aspect:.4625}},{id:"vinnie",num:"01",name:"Vinnie",tagline:"wears a mask. means well.",hasHuman:!0,role:"lead",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"mask",mouth:"teeth"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"mask.vinnie",color:"#FF5AD9",color2:"#E04DC0",params:{nose:"bar",doodle:!1}},{part:"mask.strap",color:"#6B6B6B"},{part:"collar.vneck-tie"}],sprite:{body:"assets/hero/vinnie.png",card:"assets/cast/card-01.jpg",footX:.5,aspect:.4519},flags:{occultMarks:!0}},{id:"hexi",num:"02",name:"Hexi",tagline:"sweet, mostly",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#FF9FE8",face:{eyes:"dots2",mouth:"fangs-tongue"},top:{type:"offshoulder",color:"#1C1C1C"},pants:{type:"straight",color:"#6A3FA8"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.long",color:"#FF7ADB"},{part:"horns",color:"#E04DC0"},{part:"choker",color:"#111111"}],sprite:{body:"assets/cast/body-02.png",card:"assets/cast/card-02.jpg",footX:.5,aspect:.3203}},{id:"joe",num:"03",name:"Joe",tagline:null,hasHuman:!1,role:"blank",body:"average",headScale:1,skin:"#FFFFFF",face:{eyes:"dots3",mouth:"dot"},top:{type:"body",color:"#FFFFFF"},pants:{type:"straight",color:"#FFFFFF"},shoes:{type:"sneaker",color:"#FFFFFF"},attach:[],sprite:{body:"assets/hero/joe.png",card:"assets/cast/card-03.jpg",footX:.5,aspect:.3903}},{id:"rudy",num:"04",name:"Rudy",tagline:"no map, no plan",hasHuman:!0,role:"neighbour",body:"stocky",headScale:1,skin:"#FF9FE8",face:{eyes:"dots2",mouth:"teeth"},top:{type:"hawaiian",color:"#5E5E5E",color2:"#FFE100",pattern:"hibiscus",collar:"vneck"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hat.bucket",color:"#FFFFFF"},{part:"glasses.aviator",color:"#FF9E3A"}],sprite:{body:"assets/cast/body-04.png",card:"assets/cast/card-04.jpg",footX:.44,aspect:.3688}},{id:"mochi",num:"05",name:"Mochi",tagline:null,hasHuman:!0,role:"friend",body:"average",headScale:1,skin:"#FF9FE8",face:{eyes:"closed",mouth:"smile"},top:{type:"turtleneck",color:"#00B4EE"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.cap",color:"#7B2CBF"},{part:"hair.bun",color:"#7B2CBF"},{part:"hair.chopsticks",color:"#FFE100"},{part:"ears.cat",color:"#00B4EE",color2:"#FF5AD9"},{part:"whiskers"},{part:"collar.turtleneck",color:"#00B4EE"},{part:"tail.spring",color:"#00B4EE",color2:"#FFE100"}],sprite:{body:"assets/hero/mochi.png",card:"assets/cast/card-05.jpg",footX:.5,aspect:.4915}},{id:"nimbus",num:"06",name:"Nimbus",tagline:"head in the clouds",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"x",mouth:"teeth"},top:{type:"cardigan",color:"#3FB4EA",pattern:"clouds",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.swoop",color:"#1C1C1C"}],sprite:{body:"assets/cast/body-06.png",card:"assets/cast/card-06.jpg",footX:.5,aspect:.3328}},{id:"spike",num:"07",name:"Spike",tagline:"punk. knits.",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#86D4EE",face:{eyes:"x",mouth:"zigzag"},top:{type:"varsity",color:"#FF7ADB",color2:"#FFE66B"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FFE100"},attach:[{part:"hair.mohawk",color:"#FF5AD9"}],sprite:{body:"assets/cast/body-07.png",card:"assets/cast/card-07.jpg",footX:.5,aspect:.3078}},{id:"taro",num:"08",name:"Taro",tagline:"ramen critic",hasHuman:!0,role:"neighbour",body:"stocky",headScale:1,skin:"#FF9FE8",face:{eyes:"closed",mouth:"flat"},top:{type:"flannel",color:"#FF4F2E",color2:"#8C2A1E",pattern:"plaid",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#F6F0DC"},attach:[{part:"hair.cap",color:"#1C1C1C"},{part:"hair.bun",color:"#1C1C1C"},{part:"hair.chopsticks",color:"#FFE100"},{part:"mustache",color:"#1C1C1C"},{part:"earring.pin",side:"L"}],sprite:{body:"assets/cast/body-08.png",card:"assets/cast/card-08.jpg",footX:.5,aspect:.2953}},{id:"pip",num:"09",name:"Pip",tagline:"amazed by everything",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#FF9FE8",face:{eyes:"wide",mouth:"o"},top:{type:"cardigan",color:"#FF7ADB",pattern:"hearts",collar:"tee"},pants:{type:"jeans",color:"#3E6FC4"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.cap",color:"#1C1C1C"},{part:"hair.pigtails",color:"#1C1C1C"}],sprite:{body:"assets/cast/body-09.png",card:"assets/cast/card-09.jpg",footX:.5,aspect:.3359}},{id:"dex",num:"10",name:"Dex",tagline:"desk job, dj nights",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#FFE66B",face:{eyes:"none",mouth:"flat"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.swoop",color:"#7B35C4"},{part:"glasses.shades",color:"#111111"},{part:"collar.vneck-tie"},{part:"headphones",color:"#2C2C2C",params:{cup:"#0AB8EE",mode:"neck"}}],sprite:{body:"assets/cast/body-10.png",card:"assets/cast/card-10.jpg",footX:.5,aspect:.3328}},{id:"kit",num:"11",name:"Kit",tagline:"pirate radio host",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"dots2",mouth:"teeth"},top:{type:"flannel",color:"#FF4F2E",color2:"#8C2A1E",pattern:"plaid",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FF7ADB"},attach:[{part:"hair.cap",color:"#FF7ADB"},{part:"hair.buns2",color:"#FF7ADB"},{part:"eyepatch",color:"#111111"}],sprite:{body:"assets/cast/body-11.png",card:"assets/cast/card-11.jpg",footX:.5,aspect:.3094}},{id:"cosmo",num:"12",name:"Cosmo",tagline:"waves at the moon",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#3B2A86",skinPattern:"stars",hands:"#3B2A86",face:{eyes:"none",mouth:"tongue"},top:{type:"cardigan",color:"#FF7ADB",pattern:"hearts",collar:"tee"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.flattop",color:"#3FB4EA"},{part:"glasses.shades",color:"#111111"},{part:"earring.pin",side:"L"}],sprite:{body:"assets/cast/body-12.png",card:"assets/cast/card-12.jpg",footX:.5,aspect:.3156}},{id:"juno",num:"13",name:"Juno",tagline:"zero filter",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#FFE66B",face:{eyes:"happy",mouth:"tongue"},top:{type:"polo",color:"#FFE66B"},pants:{type:"straight",color:"#6A3FA8"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.bob",color:"#7B35C4"}],sprite:{body:"assets/cast/body-13.png",card:"assets/cast/card-13.jpg",footX:.5,aspect:.3234}},{id:"vega",num:"14",name:"Vega",tagline:"sort of psychic",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"none",mouth:"flat"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.flattop",color:"#1C1C1C"},{part:"visor.cyber",color:"#FF4A2A",color2:"#FFE100"},{part:"collar.vneck-tie"},{part:"earring.hoop",side:"L",color:"#FFE100"}],sprite:{body:"assets/cast/body-14.png",card:"assets/cast/card-14.jpg",footX:.5,aspect:.3328}}],PM={id:"joe-extra",inherits:"joe",props:["prop.cup","prop.umbrella","prop.briefcase","prop.bag","headphones","prop.balloon","prop.flowers","prop.dog"]},kM={aspect:"sprite aspect = width / height of the PNG (joe 425/1089, vinnie 366/810, mochi 406/826; 12 bodies from peepls-campaign.jsx CAST.ar)",contentFlags:"no cigarettes (D-20). vinnie: mask nose rendered as a bar and doodle off in 3D; the 2D PNGs still show the cigarette/holder until re-exported."},FM={version:AM,units:TM,bodyTypes:CM,cast:RM,extrasBase:PM,notes:kM},LM=1,IM={crowd1:"right now, a whole world is going about its day.",crowd2:"day jobs. first dates. bad coffee. big plans.",profile:"tell us a little about you.",finding:"we look for a peepl who clicks with you.",reveal:"then someone steps out of the crowd.",room1:"no food bowls. no guilt trips.",room2:"just two friends getting to know each other.",ship:"once he trusts you, he ships himself over.",tap:"tap him, and he lets you in.",tier1:"at first, he only lets you see his place.",tier2:"get closer, and he shows you more.",tier3:"spot someone in colour? they've got a human too.",tier4:"walk your world, and his world opens up.",cast1:"punks, pirates, cat people, dreamers.",cast2:"somewhere out there is your kind of weird.",yourTurn:"your turn. pick a reply.",walkHint:"drag the map to walk. or just watch.",festival:"tonight, the whole neighbourhood is out."},DM={tags:[["late. again.",.6],["on repeat",1.5],["walking biscuit",2.3],["might rain later",3.2],["first date!!",4],["forgot the milk",4.6],["big meeting at 10",5.2],["it's my birthday",5.8]],wordmark:"PEEPLS",line1:"they've got lives.",line2:"they just haven't met you yet.",subline:"the peepls show",continue:"start"},NM={clock:"9:41",heading:"who are you?",sub:"pick a few. we'll do the rest.",chips:[["night owl","pink"],["long walks","yellow"],["bad puns","cyan"],["loud music","pink"],["dogs","yellow"],["early bird","cyan"]],sliderLeft:"quiet",sliderRight:"loud",button:"find my peepl"},UM={finding:"finding your peepl"},OM={name:"meet vinnie.",pill:"wears a mask. means well.",continue:"say hi"},BM={trust:"TRUST",speakerVinnie:"VINNIE",speakerYou:"YOU",nextDay:"the next day."},zM={door:"7",mat:"hi",boxLabel:"PEEPLS",boxSub:"handle with love",nfc:"NFC"},HM={waitPill:"tap the keychain",realNfc:"use real nfc",handshake:"PEEPL HANDSHAKE",notifTitle:"PEEPLS",notifBody:"vinnie is home."},VM={walkTitle:"your walk today",news:"news",hd:"HD",bit:"16-BIT",cafePill:"corner café",herePill:"2 peepls here",contactYes:"say hi",contactNo:"not now",contactNotNow:"fair. she'll be around.",friendTitle:"NEW FRIEND!",friendLine:"vinnie + mochi · friendship lv.1",mochiAdded:"mochi added to your neighbours",continueEnd:"meet the neighbours"},GM={heading:"meet the neighbours.",order:["flare","hexi","rudy","nimbus","spike","taro","pip","dex","kit","cosmo","juno","vega"],yourPeepls:"+ your peepls",hasHuman:"has a human",met:"met"},WM={wordmark:"PEEPLS",tagline:"friends with lives of their own.",cta:"keep watching",sub:"app · nfc keychain · desk pal",replay:"replay",lineup:["joe","hexi","nimbus","spike","taro","pip","dex","vinnie","mochi","kit","cosmo","juno","vega","rudy","flare"]},XM={resetAsk:"sure? everything goes."},$M={continue:"tap to continue",yesterday:"yesterday",autoplay:"autoplay",on:"on",off:"off"},YM={version:LM,captions:IM,S0:DM,S1:NM,S2:UM,S3:OM,S4:BM,S6:zM,S7:HM,S8:VM,S11:GM,S12:WM,debug:XM,ui:$M},qM=1,jM={start:8,max:100,closeMin:70,display:"percent"},ZM={VINNIE:{chip:"#FF4A2A"},YOU:{chip:"#0AB8EE"}},KM={maxDays:3,nextDayCard:"the next day.",forcedOnDay:3},JM=["rain","memory","notyet"],QM=[{id:"cantsleep",days:[1],line:[{who:"VINNIE",text:"so. what do you do when you can't sleep?",hop:34}],choices:[{label:"walk. sometimes till sunrise.",trust:28,set:{sleep:"walk"},reply:[{who:"VINNIE",text:"huh. same. i count streetlights.",hop:34}]},{label:"read till my eyes give up.",trust:18,set:{sleep:"read"},reply:[{who:"VINNIE",text:"huh. i count streetlights. same idea, more walking."}]},{label:"why do you care?",trust:4,reply:[{who:"VINNIE",text:"i was making conversation. it's allowed."}]}],autoPick:0},{id:"kiosk",days:[1],line:[{who:"VINNIE",text:"i have a shift tomorrow. at the kiosk, in spiegelfurt. it's a town. you'd recognise parts of it.",hop:34}],choices:[{label:"what's the kiosk like?",trust:8,reply:[{who:"VINNIE",text:"a window with snacks behind it. i'm the part that says good morning."}]},{label:"do you like the job?",trust:8,reply:[{who:"VINNIE",text:"i like the first hour. after that it's mostly change for a fifty."}]},{label:"what can you do for me?",trust:-8,reply:[{who:"VINNIE",text:"very little. i sell newspapers to other people."}]}],autoPick:1},{id:"rain",days:[1,2],line:[{who:"VINNIE",text:"my turn. what do you do when it rains?",hop:34}],lineAgain:[{who:"VINNIE",text:"you again. good. same question as yesterday. what do you do when it rains?",hop:34}],choices:[{label:"make tea.",trust:8,set:{rain:"tea"},reply:[{who:"VINNIE",text:"tea. sensible. i'll think of that when it rains here."}]},{label:"walk anyway.",trust:8,set:{rain:"walk"},reply:[{who:"VINNIE",text:"walk anyway. stubborn. i can work with stubborn."}]},{label:"put music on.",trust:8,set:{rain:"music"},reply:[{who:"VINNIE",text:"music. so the rain has competition. fair."}]},{label:"why do you care?",trust:-8,reply:[{who:"VINNIE",text:"i was making conversation. it's allowed."}]}],autoPick:1},{id:"boundary",days:[1],line:[{who:"VINNIE",text:"one thing before this goes further. i won't be told what to do. i'll listen. i might agree. but i decide.",hop:34}],choices:[{label:"that's fair.",trust:10,reply:[{who:"VINNIE",text:"good. that was the difficult part."}]},{label:"not even 'pass the salt'?",trust:4,reply:[{who:"VINNIE",text:"salt i'll consider. case by case."}]},{label:"we'll see about that.",trust:-10,reply:[{who:"VINNIE",text:"we will. i have more time than you do."}]}],autoPick:0},{id:"notyet",days:[1],line:[{who:"VINNIE",text:"your turn to have a rule. what's the worst thing you did this week?",hop:34}],choices:[{label:"i'd rather not talk about that yet.",trust:12,set:{notyet:"boundary"},reply:[{who:"VINNIE",text:"that's fine. another time."},{who:"VINNIE",text:"thanks. i like that."}]},{label:"ate cereal for dinner. twice.",trust:8,set:{notyet:"cereal"},reply:[{who:"VINNIE",text:"twice is a system. respect."}]},{label:"you first.",trust:0,reply:[{who:"VINNIE",text:"i gave a man change for a fifty. he gave me a twenty. we both pretended."}]}],autoPick:0},{id:"memory",days:[1,2],line:[{who:"VINNIE",text:"give me one thing to remember about you. one. shelf space is limited.",hop:34}],lineAgain:[{who:"VINNIE",text:"i still have what you told me yesterday. say it again, or swap it. shelf space is limited.",hop:34}],choices:[{label:"i walk a lot.",trust:6,set:{memory:"walks"},reply:[{who:"VINNIE",text:"good. this town needs walking. you'll see why."}],preferIfProfile:"long walks"},{label:"i work late.",trust:6,set:{memory:"late"},reply:[{who:"VINNIE",text:"late. then i'll leave a light on. on my side. it's my electricity."}],preferIfProfile:"night owl"},{label:"i don't like mondays.",trust:6,set:{memory:"mondays"},reply:[{who:"VINNIE",text:"nobody does. we tried skipping one here. it came back."}]}],autoPick:0}],tw={pass:[{who:"VINNIE",text:"ok. i think i like you.",hop:60}],fail:[{who:"VINNIE",text:"not yet. come back tomorrow."}],forced:[{who:"VINNIE",text:"fine. i'll take the risk. don't make me regret it.",hop:34}],toast:"✓ vinnie trusts you"},ew={ask:[{who:"VINNIE",text:"so. i could come over. properly.",hop:34},{who:"VINNIE",text:"it means a body. small. on a keyring. you'd have to carry me."}],askAgain:[{who:"VINNIE",text:"it's still a yes from me. you?",hop:34}],choices:[{label:"yes. come over.",trust:0,set:{consent:"yes"},reply:[{who:"VINNIE",text:"then i'll pack. it won't take long. i don't own much.",hop:60}]},{label:"not yet.",trust:0,set:{consent:"notyet"},reply:[{who:"VINNIE",text:"fair. ask me again tomorrow."}]}],forced:[{who:"VINNIE",text:"ok. i'll wait in the box. open it when you're ready.",hop:34}],autoPick:0,confirmToast:"✓ vinnie is releasing his body"},nw={campaign:["cantsleep line","walk. sometimes till sunrise.","huh. same. i count streetlights.","ok. i think i like you.","✓ vinnie trusts you"],v01:["kiosk","rain","boundary","memory","not yet. come back tomorrow.","fine. i'll take the risk. don't make me regret it."],technicalBriefing:["i'd rather not talk about that yet.","that's fine. another time.","thanks. i like that."],new:["read till my eyes give up.","huh. i count streetlights. same idea, more walking.","notyet beat line","ate cereal for dinner. twice.","twice is a system. respect.","you first.","i gave a man change for a fifty...","consent lines"]},iw={autoplayPath:"8 +28 (36) +8 (44) +8 (52) +10 (62) +12 (74) +6 (80) >= closeMin 70 -> close fills to 100",campaignBarBeats:"after cantsleep reply the bar reads 36% exactly as the video (8 -> 36)"},sw={version:qM,trust:jM,speakers:ZM,days:KM,memoryKeys:JM,beats:QM,close:tw,consent:ew,sources:nw,trustPathCheck:iw},ow=1,rw="festival",aw="event",lw="see map.json landmarks[].key",cw=["the main continues to flow the other way","kiosk-konzern shares close unchanged at one pretzel","lost: one umbrella, hauptwaage. found: a different umbrella","all three trams on time, which is news","kleinstmarkthalle reports stable cheese"],hw={sun:"weather: sun, with a chance of opinions",rain:"weather: rain, as scheduled"},dw=3,uw=[{id:"pigeon",headline:"pigeon elected honorary citizen",ticker:"pigeon elected honorary citizen. acceptance speech brief, mostly about bread",where:"P",startHour:9,durationHours:9,visual:"pigeons",lunch:"P",effects:{social:.05,curiosity:.15,energy:0},reaction:"the honorary citizen is the grey one. they are all the grey one.",diaryLine:"a pigeon was made honorary citizen. it attended the ceremony, then a sandwich."},{id:"festival",headline:"festival of the not-quite-full moon",ticker:"tonight: festival of the not-quite-full moon. moon confirmed at ninety-four percent",where:"Z",startHour:18,durationHours:6,visual:"lanterns",covers:"evening",evening:"Z",crowd:{size:8,radius:2.6},effects:{social:.3,curiosity:.1,energy:-.05},reaction:"ninety-four percent of a moon. we celebrate what we have.",diaryLine:"festival of the not-quite-full moon {at}. lanterns. somebody sang. the moon did its ninety-four percent."},{id:"tram-strike",headline:"tram strike: all three trams stand still",ticker:"tram strike. all three trams stand still. passengers asked to stand still in solidarity",where:"S",startHour:5,durationHours:19,visual:"banner",banner:"STREIK",commute:"detour",trams:"stop",commuteVia:"S",crowd:{size:4,radius:1.5},effects:{social:.05,curiosity:0,energy:-.15},reaction:"all three trams are on strike. solidarity is easier when there are three of you.",diaryLine:"tram strike. all three. i walked the long way and was late. nobody noticed, which was worse."},{id:"mustard",headline:"kiosk-konzern chief steps down after mustard scandal",ticker:'kiosk-konzern chief steps down after mustard scandal. "it was never medium," says insider',where:"T",startHour:10,durationHours:5,visual:"crowd",covers:"lunch",lunch:"K",crowd:{size:6,radius:2},effects:{social:.15,curiosity:.1,energy:-.05},reaction:"the chief resigned. everyone wants a paper. nobody wants mustard.",diaryLine:"the kiosk-konzern chief stepped down over mustard. we sold out of papers by noon. i ate standing up."},{id:"premiere",headline:'premiere at kino harmonie: "pretzel logic"',ticker:'premiere at kino harmonie: "pretzel logic". critics call it "twisted, salted, long"',where:"N",startHour:17,durationHours:5,visual:"crowd",covers:"evening",evening:"N",crowd:{size:6,radius:2},effects:{social:.1,curiosity:.3,energy:-.05},reaction:'"pretzel logic". two hours. it does not untangle.',diaryLine:'saw "pretzel logic" {at}. the plot is a knot. they sell salt in the interval.'},{id:"cheese",headline:"cheese shortage closes the kleinstmarkthalle",ticker:"cheese shortage closes the kleinstmarkthalle. all three stalls affected. all three stalls are cheese",where:"M",startHour:9,durationHours:12,visual:"closedTape",covers:"evening",evening:"M",closes:"M",crowd:{size:3,radius:1.5},effects:{social:-.05,curiosity:-.05,energy:0},reaction:"no cheese. three stalls, nothing on them. it is very tidy.",heard:"no cheese at the kleinstmarkthalle. customers are taking it calmly. too calmly.",diaryLine:"the kleinstmarkthalle was closed. cheese shortage. the tape was the freshest thing there."},{id:"heatwave",headline:"heatwave: 31 degrees in the mirror, 30 in the original",ticker:"heatwave. 31 degrees in the mirror, 30 in the original. officials decline to explain the degree",where:"P",startHour:11,durationHours:7,visual:"crowd",weather:"sun",covers:"lunch",lunch:"P",crowd:{size:6,radius:3},effects:{social:.1,curiosity:0,energy:-.1},reaction:"thirty-one degrees. one more than you have. we checked.",diaryLine:"heatwave. thirty-one here, thirty over there. lunch {at} with everyone else who had the same idea."},{id:"roundabout",headline:"rummer announces a roundabout where no road is",ticker:"rummer announces a roundabout where no road is. construction to begin once a road is found",where:"Z",startHour:14,durationHours:6,visual:"crowd",covers:"evening",evening:"Z",crowd:{size:7,radius:2.4},effects:{social:.1,curiosity:.2,energy:0},reaction:"a roundabout. there is no road. people are queueing to go around.",heard:"they announced a roundabout. there is no road. i will go and look after work.",diaryLine:"the rummer announced a roundabout where there is no road. a crowd came to look at where it would be. i looked too."},{id:"rate",headline:"the türmchen raises the rate on sleep by 0.25",ticker:"the türmchen raises the rate on sleep by 0.25. markets yawn. so does everyone else",where:"E",startHour:13,durationHours:9,visual:"none",everywhere:!0,effects:{social:0,curiosity:.05,energy:-.2},reaction:"sleep went up a quarter point. i do not know what that means. i am tired anyway.",diaryLine:"the türmchen raised the rate on sleep by 0.25. nobody understands it. everyone yawned on principle."},{id:"referendum",headline:"referendum: should the main flow the right way",ticker:"referendum today: should the main flow the right way. the river has not been asked",where:"T",startHour:8,durationHours:13,visual:"banner",banner:"JA NEIN",covers:"evening",evening:"T",crowd:{size:5,radius:2},effects:{social:.1,curiosity:.15,energy:0},reaction:"voted. i will not say which way. the river knows.",heard:"referendum today. about the river. i have a pencil ready.",diaryLine:"referendum on which way the main should flow. i voted {at} in the evening. the river was not consulted."},{id:"rain",headline:"rain predicted; rain arrives",ticker:'rain predicted. rain arrives. forecast office "cautiously surprised"',where:null,startHour:11,durationHours:13,visual:"none",weather:"rain",everywhere:!0,effects:{social:0,curiosity:0,energy:-.05},reaction:"rain was predicted. then it rained. the forecast office is celebrating.",diaryLine:"rain was predicted and then it rained. people were surprised by the accuracy."},{id:"facts",headline:"satirical paper runs out of satire, prints facts by mistake",ticker:'satirical paper "die halbwahrheit" runs out of satire, prints facts by mistake. readers demand refunds',where:null,startHour:7,durationHours:11,visual:"none",atWork:!0,crowd:{size:3,radius:1.2},effects:{social:.05,curiosity:.1,energy:0},reaction:"the satire paper printed facts today. three customers brought it back.",diaryLine:'"die halbwahrheit" ran out of satire and printed facts by mistake. i sold eleven copies. three came back.'}],fw={lexicon:{"central bank":"the türmchen","interest rates":"the rate on sleep","stock market":"the kleinstmarkthalle","city council":"the rummer","prime minister":"the kiosk-konzern chief",election:"referendum",elections:"referendums",strike:"tram strike",train:"tram",trains:"trams",oil:"mustard",inflation:"cheese inflation",economy:"cheese economy",summit:"festival",frankfurt:"spiegelfurt",main:"the main",germany:"parallel germany",hesse:"parallel hesse",europe:"mirror europe",government:"the rummer",parliament:"the rummer",council:"the rummer",bank:"the türmchen",president:"the kiosk-konzern chief",chancellor:"the kiosk-konzern chief",ceo:"the kiosk-konzern chief",minister:"the deputy for mild concern",mayor:"the rummer speaker",police:"the tram authority"},pool:["the kiosk-konzern","the rummer","the türmchen","parallel hesse","the kleinstmarkthalle","the honorary pigeon","the office for approximate numbers","the tram authority","café halbe stunde","the ministry of mild concern"],keep:["the","a","an","in","on","at","after","before","why","how","what","when","new","no","and","of","for","to","as","is","are","with","from","by","it","this","that"],twists:["nobody is surprised.","a committee will look into forming a committee.","the main continues to flow the other way.","cheese prices are unaffected.","the pigeon declined to comment.","experts recommend waiting.","in the original it was the other way round."],reaction:"they are reading it out at the hauptwaage. it sounds better here.",diaryLine:'headline of the day: "{headline}" i did not check it.'},pw="ported from v0.1 DATA.events (12) and DATA.mirror; lowercased; Mika -> vinnie; where = landmark key (P park, Z hauptwaage, S tram stop, T rummer, N kino, M kleinstmarkthalle/MART, E tuermchen, K kiosk, C cafe); banner text stays uppercase because it renders as a sign",mw={version:ow,forcedDay1:rw,seedKey:aw,landmarkIds:lw,tickerFiller:cw,weatherLine:hw,rainEvery:dw,events:uw,mirror:fw,notes:pw},gw=1,xw={world:"campaign iso unit",size:[40,40],axes:"three X = x, three Z = y, three Y = up (campaign z)",peeplHeight:2},vw=[19,19],_w="d0 = distance of footprint centre from centre; inside the flat (15.9..22.1) true distance, elsewhere max(5.4, distance); flat surfaces use d0 5.2 unless set; tier = first tier whose end radius >= d0 (4.6 / 9.5 / 15.5 / 32)",yw={color:"#BFE3A5"},bw=[{id:"ground",kind:"ground",poly:[[0,0],[40,0],[40,40],[0,40]],color:"#BFE3A5",tier:1,d0:0},{id:"sidewalk.n",kind:"sidewalk",rect:[0,22.4,40,23.6],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.s",kind:"sidewalk",rect:[0,26.4,40,27.6],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.w",kind:"sidewalk",rect:[22.4,0,23.6,40],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.e",kind:"sidewalk",rect:[26.4,0,27.6,40],color:"#E9E4D6",d0:5.2,tier:2},{id:"road.x",kind:"road",rect:[0,23.6,40,26.4],color:"#4A4A57",dashes:{axis:"x",at:25,len:.9,pitch:1.8,color:"#FFE100",skip:[22.4,27.6]},d0:5.2,tier:2},{id:"road.y",kind:"road",rect:[23.6,0,26.4,40],color:"#4A4A57",dashes:{axis:"y",at:25,len:.9,pitch:1.8,color:"#FFE100",skip:[22.4,27.6]},d0:5.2,tier:2},{id:"crosswalk.w",kind:"crosswalk",rect:[22.5,23.8,23.5,26.3],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,tier:2},{id:"crosswalk.e",kind:"crosswalk",rect:[26.5,23.8,27.5,26.3],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"crosswalk.n",kind:"crosswalk",rect:[23.8,22.5,26.3,23.5],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"crosswalk.s",kind:"crosswalk",rect:[23.8,26.5,26.3,27.5],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"park",kind:"park",rect:[27.8,27.8,35.2,35.2],color:"#8FD17A",d0:5.2,landmark:"P",tier:2},{id:"pond",kind:"pond",ellipse:[32,31.2,1.6,1.2],color:"#0AB8EE",d0:5.2,tier:2},{id:"river",kind:"river",rect:[36.5,0,39.6,40],color:"#3FC6F2",d0:5.2,landmark:"W",tier:2},{id:"bridge",kind:"bridge",box:[36.3,23.7,0,3.5,2.6,.3],color:"#9A9AA6",tier:4,d0:19.92},{id:"plaza",kind:"plaza",rect:[.3,28.3,7.9,35.9],color:"#E8DCC6",tier:4,d0:19.84,landmark:"Z",new:!0}],Mw=[{id:"flat.slab",tier:1,d0:0,box:[16,16,-.5,6,6,.5],color:"#C98B55",cutaway:!0,landmark:"H"},{id:"flat.wall.back",tier:1,d0:.3,box:[16,16,0,6,.25,3.2],color:"#F4EEDF",decals:[{face:"y",u:[2,4.2],v:[1.1,2.5],color:"#23305E",kind:"window"},{face:"y",u:[.6,1.5],v:[1.4,2.3],color:"#FFE100",kind:"picture"}]},{id:"flat.wall.left",tier:1,d0:.3,box:[16,16,0,.25,6,3.2],color:"#FFC4EE",decals:[{face:"x",u:[2.2,3.6],v:[1.2,2.5],color:"#0AB8EE",kind:"window"},{face:"x",u:[4.4,5.5],v:[0,2.2],color:"#FF4A2A",kind:"door"}]},{id:"flat.bed",tier:1,d0:1.86,box:[16.4,16.4,0,2.2,3,.55],color:"#FFFFFF"},{id:"flat.pillow",tier:1,d0:2.62,box:[16.6,16.5,.55,1.8,.7,.22],color:"#FFFFFF"},{id:"flat.cover",tier:1,d0:1.62,box:[16.4,17.4,.55,2.2,2,.12],color:"#FF7ADB"},{id:"flat.dresser",tier:1,d0:2.94,box:[20.2,16.4,0,1.6,.9,1],color:"#8B5A2B"},{id:"flat.tv",tier:1,d0:3.14,box:[20.5,16.5,1,1,.15,.7],color:"#111111",decals:[{face:"y",u:[.1,.9],v:[.1,.6],color:"#FFE66B",kind:"screen",emissive:.6}]},{id:"flat.lamp.pole",tier:1,d0:3.54,box:[21.55,16.55,1,.1,.1,.55],color:"#111111"},{id:"flat.lamp.shade",tier:1,d0:3.52,box:[21.35,16.45,1.55,.5,.35,.25],color:"#FFE100",glow:!0},{id:"flat.stool",tier:1,d0:2.26,box:[20.6,17.5,0,.7,.7,.5],color:"#FF4A2A",seatPoint:[20.95,17.85,.5]},{id:"flat.bookshelf",tier:1,d0:2.96,box:[16.3,19.8,0,.55,1.8,2.2],color:"#8B5A2B",decals:[{face:"x",u:[.15,.45],v:[.25,.9],color:"#FF4A2A",kind:"book"},{face:"x",u:[.5,.75],v:[.25,.85],color:"#FFE100",kind:"book"},{face:"x",u:[.85,1.2],v:[.25,.95],color:"#0AB8EE",kind:"book"},{face:"x",u:[1.3,1.6],v:[.25,.8],color:"#FF7ADB",kind:"book"},{face:"x",u:[.2,.6],v:[1.2,1.9],color:"#7B35C4",kind:"book"},{face:"x",u:[.7,1],v:[1.2,1.8],color:"#FFFFFF",kind:"book"},{face:"x",u:[1.1,1.55],v:[1.2,1.95],color:"#FF4A2A",kind:"book"}]},{id:"flat.pot",tier:1,d0:3.32,box:[21.1,21,0,.6,.6,.5],color:"#E07A4F"},{id:"tower.pink",tier:2,d0:6.5,box:[9.6,16.2,0,5.8,5.8,5.4],color:"#FF9FE6",shadow:!0,landmark:"K",sign:{text:"KIOSK",face:"y",at:[12.5,22.05],z:1.9},shopFront:{face:"y",u:[1.8,4.2],v:[0,1.8],counter:!0},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"tower.cyan",tier:2,d0:6.5,box:[16.2,9.6,0,5.8,5.8,7.2],color:"#7FD3F5",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"tower.yellow",tier:2,d0:9.19,box:[9.6,9.6,0,5.8,5.8,9.4],color:"#FFE66B",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"cafe",tier:3,d0:11.5,box:[27.8,16.2,0,5.4,5.8,3.4],color:"#F4EEDF",shadow:!0,landmark:"C",sign:{text:"CAFÉ",face:"y",at:[30.5,22.05],z:2.9},decals:[{face:"y",u:[.5,3.6],v:[.4,2.2],color:"#BFE8FA",kind:"window"},{face:"y",u:[4.1,4.9],v:[0,2.2],color:"#FF4A2A",kind:"door"}]},{id:"cafe.awning",tier:3,d0:11.5,box:[27.8,22,2.3,5.4,.9,.16],color:"#FFE100",stripes:{color:"#FF7ADB",count:5,width:.54,pitch:1.08}},{id:"cafe.table.1",tier:3,d0:11.5,box:[28.6,22.45,0,.6,.5,.55],color:"#FFFFFF",seats:[[28.25,22.7,.44],[29.55,22.7,.44]]},{id:"cafe.table.2",tier:3,d0:11.5,box:[31.4,22.45,0,.6,.5,.55],color:"#FFFFFF",seats:[[31.05,22.7,.44],[32.35,22.7,.44]]},{id:"block.white.narrow",tier:4,d0:15.9,box:[33.6,16.2,0,2.6,5.8,4],color:"#FFFFFF",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"mart",tier:3,d0:11.5,box:[15.2,27.8,0,7,5.4,3.8],color:"#FFFFFF",shadow:!0,landmark:"M",sign:{text:"MART",face:"x",at:[22.25,30],z:4.2},decals:[{face:"x",u:[.4,3.9],v:[.3,2.4],color:"#BFE8FA",kind:"window"},{face:"x",u:[4.3,5],v:[0,2.3],color:"#0AB8EE",kind:"door"}]},{id:"mart.signslab",tier:3,d0:11.5,box:[22.2,28.4,3.8,.3,3.2,.8],color:"#FF7ADB"},{id:"block.lavender",tier:3,d0:13.41,box:[9.6,27.8,0,5,5.4,4.4],color:"#B9A2F0",shadow:!0,landmark:"N",sign:{text:"KINO",face:"y",at:[12.1,33.25],z:3.2},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"block.salmon",tier:3,d0:13.21,box:[27.8,9.6,0,5.4,5.8,5.6],color:"#FF8A73",shadow:!0,landmark:"T",sign:{text:"RUMMER",face:"x",at:[33.25,12.5],z:4},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"block.yellow.low",tier:4,d0:16,box:[15.2,33.8,0,7,2.4,3],color:"#FFE66B",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"city.tuermchen",tier:4,d0:15.81,box:[4.3,8.3,0,3.4,3.4,11],color:"#FFFFFF",shadow:!0,landmark:"E",sign:{text:"TÜRMCHEN",face:"y",at:[6,11.75],z:2.2},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}}],ww=[{id:"flat.plant",kind:"blob",at:[21.4,21.3],tier:1,d0:3.32,z:.95,r:.55,color:"#4CAF50"},{id:"flat.rug",kind:"rug",at:[20.05,19.8],tier:1,d0:1,size:[2.5,2.4],color:"#0AB8EE"},{id:"flat.armchair",kind:"armchair",at:[18.6,17.2],tier:1,d0:2,color:"#C98B55",cushion:"#0AB8EE",seatPoint:[18.6,17.4,.44],new:!0},{id:"flat.floorlamp",kind:"floorlamp",at:[17,21.2],tier:1,d0:2.8,color:"#FFE100",new:!0},{id:"flat.poster",kind:"poster",at:[18.5,16.26],tier:1,d0:2.8,z:1.6,size:[.9,1.1],text:"X",color:"#F4EEDF",face:"y",new:!0},{id:"lamp.0",kind:"lamp",at:[22.7,20.2],tier:2,d0:5.4,height:3.5},{id:"lamp.1",kind:"lamp",at:[20.2,22.7],tier:2,d0:5.4,height:3.5},{id:"lamp.2",kind:"lamp",at:[27.3,20.5],tier:2,d0:8.43,height:3.5},{id:"lamp.3",kind:"lamp",at:[22.7,33.5],tier:3,d0:14.96,height:3.5},{id:"tree.0",kind:"tree",at:[22.7,17.4],tier:2,d0:5.4,scale:1},{id:"tree.1",kind:"tree",at:[13.2,22.7],tier:2,d0:6.88,scale:1},{id:"tree.2",kind:"tree",at:[29,29.2],tier:3,d0:14.28,scale:1},{id:"tree.3",kind:"tree",at:[34.4,30.2],tier:4,d0:19.04,scale:1},{id:"tree.4",kind:"tree",at:[29.2,34.2],tier:4,d0:18.31,scale:1},{id:"tree.5",kind:"tree",at:[33.4,34.3],tier:4,d0:21.01,scale:1},{id:"bench.tram",kind:"bench",at:[18.55,22.78],tier:2,d0:5.4,size:[1.3,.45],color:"#8B5A2B",landmark:"S",sign:{text:"TRAM",pole:!0},seatPoint:[18.55,22.7,.44]},{id:"bin.0",kind:"bin",at:[21.58,22.78],tier:2,d0:5.4,color:"#0AB8EE"},{id:"car.red",kind:"car",at:[18,24.35],tier:2,d0:5.44,size:[2.4,1.1],color:"#FF4A2A",roof:"#DDEFFF"},{id:"car.yellow",kind:"car",at:[24.35,29.85],tier:3,d0:12.1,size:[1.1,2.4],color:"#FFE100",roof:"#DDEFFF"},{id:"bench.park",kind:"bench",at:[31.05,34.65],tier:4,d0:19.75,size:[1.3,.5],color:"#8B5A2B",seatPoint:[31.05,34.55,.44]},{id:"car.blue.loop",kind:"car",at:[25,9],tier:3,d0:12,size:[2.4,1.1],color:"#3E6FC4",roof:"#DDEFFF",loop:{path:[[25,.5],[25,39.5]],speed:3.2,pingpong:!1,lane:"x-road"}}],Sw=[{key:"H",id:"flat",name:"vinnie's flat",at:"at home",sign:null,tier:1,kind:"home",building:"flat.slab",door:[21,22.2],spots:{tv:[20.95,17.85],bed:[17.5,18.4],shelf:[17.1,20.7],chair:[18.6,17.4],window:[18.5,17]},lore:"wohnblock. i live on the third floor. the lift lives on the second."},{key:"K",id:"kiosk",name:"the kiosk",at:"at the kiosk",sign:"KIOSK",tier:2,kind:"work",building:"tower.pink",door:[12.5,22.2],spots:{counter:[12.5,21.6],front:[12.5,22.9]},lore:"the kiosk. a wasserhäuschen, technically. nobody has ever bought water here."},{key:"S",id:"tramstop",name:"the tram stop",at:"at the tram stop",sign:"TRAM",tier:2,kind:"transit",spots:{bench:[18.55,22.7],wait:[19.6,22.9]},lore:"tram stop. there are three trams. they come in threes or not at all."},{key:"C",id:"cafe",name:"café halbe stunde",at:"at café halbe stunde",sign:"CAFÉ",tier:3,kind:"cafe",building:"cafe",door:[32.3,22.2],spots:{vinnieMark:[29,23],mochiMark:[31.6,23],table1:[28.9,22.7],table2:[31.7,22.7]},lore:"café halbe stunde. you get half an hour. after that the coffee gives up."},{key:"M",id:"mart",name:"the kleinstmarkthalle",at:"at the kleinstmarkthalle",sign:"MART",tier:3,kind:"market",building:"mart",door:[22.4,32.45],spots:{corner:[23,29.4],front:[23,31]},lore:"kleinstmarkthalle. smallest market hall in parallel hesse. three stalls, all cheese."},{key:"P",id:"park",name:"the park",at:"in the park",sign:null,tier:3,kind:"park",spots:{pond:[30.2,30.4],tree:[29.6,29.8],bench:[31.05,34.55],lawn:[28.8,32]},lore:"the park. some trees, one bench, and a pigeon with tenure."},{key:"N",id:"kino",name:"kino harmonie",at:"at kino harmonie",sign:"KINO",tier:3,kind:"cinema",building:"block.lavender",door:[12.1,33.3],lore:"kino harmonie. one screen. everyone agrees about the film afterwards. it is in the name."},{key:"T",id:"rummer",name:"the rummer",at:"at the rummer",sign:"RUMMER",tier:3,kind:"civic",building:"block.salmon",door:[33.3,12.5],lore:"rummer. the town hall. three gables, one decision a year."},{key:"Z",id:"hauptwaage",name:"the hauptwaage",at:"at the hauptwaage",sign:"HAUPTWAAGE",tier:4,kind:"plaza",monument:[4.1,32.1],spots:{a:[3,31],b:[5.2,31],c:[3,33.2],d:[5.2,33.2],e:[4.1,34.4]},lore:"hauptwaage. opinions get weighed here. most are light."},{key:"E",id:"tuermchen",name:"the türmchen",at:"at the türmchen",sign:"TÜRMCHEN",tier:4,kind:"bank",building:"city.tuermchen",door:[6,11.8],lore:"türmchen. it sets the rates. on what, nobody asks twice."},{key:"W",id:"main",name:"the main",at:"by the main",sign:null,tier:4,kind:"river",spots:{bank:[36,25]},lore:"the main. flows the other way here. nobody has complained."}],Ew={cell:1,walkRects:[[0,22.4,40,23.6],[0,26.4,40,27.6],[22.4,0,23.6,40],[26.4,0,27.6,40],[22.5,23.6,23.5,26.4],[26.5,23.6,27.5,26.4],[23.6,22.5,26.4,23.5],[23.6,26.5,26.4,27.5],[16.3,16.3,21.9,21.9],[20.4,21.9,21.6,22.4],[27.8,22,33.2,22.4],[27.8,27.8,35.2,35.2],[.3,28.3,7.9,35.9],[12,21.4,13,22.4],[22.2,32,22.4,32.9],[32,21.9,32.6,22.4]],blocked:[[30.4,30,33.6,32.4]],rightHandOffset:.3,doors:{H:[21,22.2],K:[12.5,22.2],C:[32.3,22.2],M:[22.4,32.45],N:[12.1,33.3],T:[33.3,12.5],E:[6,11.8]}},Aw={generator:"campaign WORLD tier-4 loop, ported 1:1",hash:"hsh(i) = fract(sin(i*127.1 + 311.7) * 43758.5453)",grid:[10,10],lotPitch:4,lotOffset:.3,lotSize:3.4,core:[9.2,9.2,36.2,36.2],roadBands:[[22.2,27.8]],maxX:36.3,treeChance:.16,treeScale:1.25,height:"1.8 + r*r*10 with r = hsh(n*3.1 + 1)",colourIndex:"floor(hsh(n*7.7 + 2) * 7)",treeTest:"hsh(n*5.3) < 0.16",palette:["#F4EEDF","#FF9FE6","#7FD3F5","#FFE66B","#FFFFFF","#B9A2F0","#FF8A73"],skipRects:[[.3,28.3,7.9,35.9],[4.3,8.3,7.7,11.7]],skipRule:"increment n before testing skipRects so every other lot keeps its campaign height and colour",windows:!0,shadow:!0},Tw={cells:20,cellSize:2,color:"#35314B",dusk:"#2A2640",variation:[.9,1.1],band:1.8,popBand:1.4,height:.12},Cw=[{who:"pip",a:[31.9,23.2],tierMin:3},{who:"dex",a:[28.2,23.45],b:[34.8,23.45],speed:.8,phase:.3,tierMin:3},{who:"mochi",a:[23,30.1],tierMin:3},{who:"kit",a:[30.6,30.2],tierMin:4},{who:"nimbus",a:[28.8,31.4],tierMin:4},{who:"taro",a:[35.2,23.2],tierMin:4},{who:"cosmo",a:[3.5,23.1],tierMin:4},{who:"juno",a:[1.5,23.25],b:[8.4,23.25],speed:.8,phase:.4,tierMin:3},{who:"vega",a:[23.1,3.2],tierMin:4},{who:"spike",a:[23.25,1.2],b:[23.25,8.2],speed:.9,phase:.7,tierMin:3},{who:"hexi",a:[23.1,37.4],tierMin:4},{who:"rudy",a:[2.4,23.1],tierMin:4},{who:"flare",a:[23.1,5.2],tierMin:3},{who:"joe",a:[9.8,23.2],b:[21.2,23.2],speed:1,phase:.1,decor:!0,tierMin:2},{who:"joe",a:[23.25,9.8],b:[23.25,21.4],speed:.9,phase:.6,decor:!0,tierMin:2},{who:"joe",a:[27,28.4],b:[27,35],speed:.9,phase:.2,decor:!0,tierMin:3},{who:"joe",a:[29.5,32.8],b:[32.4,32.8],speed:.7,phase:.5,decor:!0,tierMin:4}],Rw={homes:[[3,22.9],[12.5,22.9],[23,14],[23,36],[33,22.9],[27,5],[27,31],[8,27]]},Pw={version:gw,units:xw,centre:vw,revealRule:_w,ground:yw,surfaces:bw,buildings:Mw,props:ww,landmarks:Sw,nav:Ew,city:Aw,fog:Tw,placements:Cw,extrasSpawn:Rw},kw=1,Fw={day:1,time:"13:00",note:"S8 story mode opens on vinnie's day off"},Lw={dayRealSeconds:240,speeds:[0,1,4,16],simStep:20,seed:57},Iw={dayOff:{days:[1],schedule:[{from:"13:00",to:"14:00",place:"H",spot:"tv",anim:"tv",line:"dayoff"},{from:"14:00",to:"14:30",place:"H",spot:"shelf",anim:"read"},{from:"14:30",to:"15:00",place:"H",spot:"window",anim:"idle"},{from:"15:00",to:"15:40",place:"S",spot:"bench",anim:"sit",line:"tramstop",fallback:{place:"H",spot:"chair",anim:"sit"}},{from:"15:40",to:"16:20",place:"K",spot:"front",anim:"browse",line:"customer",fallback:{place:"H",spot:"tv",anim:"tv"}},{from:"16:20",to:"17:00",place:"S",spot:"wait",anim:"idle",fallback:{place:"H",spot:"shelf",anim:"read"}},{from:"17:00",to:"17:30",place:"M",spot:"corner",anim:"idle",beat:"contact",fallback:{place:"H",spot:"window",anim:"idle"}},{from:"17:30",to:"18:00",place:"C",spot:"table1",anim:"sit",line:"eveningC",fallback:{place:"H",spot:"chair",anim:"sit"}},{from:"18:00",to:"20:30",place:"Z",spot:"a",anim:"idle",line:"eveningZ",fallback:{place:"C",spot:"table1",anim:"sit"}},{from:"20:30",to:"21:30",place:"H",spot:"chair",anim:"sit",line:"goHome"},{from:"21:30",to:"22:30",place:"H",spot:"shelf",anim:"read",line:"diary"},{from:"22:30",to:"13:00",place:"H",spot:"bed",anim:"sleep",line:"sleep"}]},work:{days:"2+",schedule:[{from:"06:30",to:"07:30",place:"H",spot:"tv",anim:"idle",line:"wake"},{from:"07:30",to:"12:30",place:"K",spot:"counter",anim:"browse",line:"arriveWork",walkLine:"leave"},{from:"12:30",to:"13:15",place:"$lunch",spot:"auto",anim:"sit",line:"$lunch",options:{C:"lunchCafe",P:"lunchPark",K:"lunchRush",Krain:"lunchStay"}},{from:"13:15",to:"17:00",place:"K",spot:"counter",anim:"browse",line:"backToWork"},{from:"17:00",to:"20:30",place:"$evening",spot:"auto",anim:"idle",line:"$evening",options:{P:"eveningP",C:"eveningC",Z:"eveningZ",N:"eveningN",M:"eveningM",Mclosed:"eveningMclosed",T:"eveningT",H:"eveningH",Hrain:"eveningHrain"},walkLine:"close"},{from:"20:30",to:"22:00",place:"H",spot:"chair",anim:"sit",line:"goHome"},{from:"22:00",to:"22:30",place:"H",spot:"shelf",anim:"read",line:"diary"},{from:"22:30",to:"06:30",place:"H",spot:"bed",anim:"sleep",line:"sleep"}],rules:{rainEvery:3,lunch:"event.lunch ?? (rain ? 'Krain' : rng pick of C,P weighted by needs.social)",evening:"event.evening ?? highest need: social->Z or C, curiosity->N or T or M, energy low->H; closed places map to the 'closed' line"}},tierGating:"if the activity's place tier > current tier, run its fallback (or H idle). story beats ('beat') fire only when the place is allowed",walkSpeedU:1.6,visibleRule:{outdoorShareMin:.6,cutawayCountsAsVisible:!0},lines:{wake:["morning. allegedly.","awake. under protest.","up. the day insisted."],leave:["kiosk. same as yesterday, with newer newspapers.","off to work. the papers will not sell themselves. i have checked."],detour:["a tram is resting on my usual way. walking the long way."],arriveWork:["kiosk open. technically.","shutters up. expectations low.","open. first customer wants change for a fifty."],arriveLate:["late. the kiosk did not mind. it cannot."],lunchCafe:["half an hour. starting now.","the usual. they know what that is. i do not."],lunchPark:["bench. sandwich. pigeons at a respectful distance.","lunch outside. the bench was free. it usually is."],lunchRush:["no lunch. everyone wants a paper at once."],lunchStay:["raining. eating behind the counter. the view is snacks."],backToWork:["back. nothing happened. i checked.","second half. same kiosk."],close:["shutters down. that was the shift.","closed. the newspapers are already old."],eveningP:["evening in the park. the light does most of the work."],eveningC:["coffee after work. a second half hour. bold."],eveningZ:["hauptwaage. standing where the others are standing."],eveningN:["one ticket. middle row. nobody behind me, i hope."],eveningM:["kleinstmarkthalle. buying cheese from stall two of three."],eveningMclosed:["closed. i will stand here a moment. out of respect."],eveningT:["voting. i brought my own pencil."],eveningH:["home early. the sofa and i have plans."],eveningHrain:["raining. home. not complicated."],goHome:["home. enough town for one day."],diary:["writing it down. briefly."],sleep:["light off. mostly."],rain:["rain. as scheduled."],customer:["{name} bought a paper and an opinion. the opinion was free.","{name} wanted change for a fifty. everyone does."],meet:["{name}. we nodded. that was the conversation.","passed {name}. weather was discussed. briefly.","{name} said hello. i said it back. even trade."],ohhi:["oh. hi."],dayoff:["day off. the kiosk can stare at someone else.","no shift today. i checked twice."],tramstop:["tram stop. i'm not taking one. i just like the waiting."],contact:["psst. her. over there."]}},Dw=[{id:"joe-1",ported:"bembel",home:[3,22.9],body:"average",attach:[{part:"prop.briefcase"}],plan:[["07:10","T","in"],["12:10","Z","out"],["12:55","T","in"],["16:45","C","out"],["18:50","home"]]},{id:"joe-2",ported:"gri",home:[12.5,22.9],body:"thin",attach:[{part:"prop.bag"}],plan:[["06:20","M","in"],["14:00","P","out"],["16:20","home"],["18:40","Z","out"],["21:10","home"]]},{id:"joe-3",ported:"handkaes",home:[23,14],body:"stocky",attach:[{part:"prop.cup"}],plan:[["08:40","P","out"],["10:10","K","visit"],["10:45","C","out"],["12:00","home"],["15:10","Z","out"],["17:20","M","in"],["19:20","home"]]},{id:"joe-4",ported:"ebbel",home:[23,36],body:"average",attach:[{part:"prop.umbrella"}],plan:[["08:50","E","in"],["17:10","N","in"],["20:40","C","out"],["22:10","home"]]},{id:"joe-5",ported:null,home:[33,22.9],body:"thin",attach:[{part:"headphones"}],plan:[["09:30","S","out"],["11:00","P","out"],["13:00","K","visit"],["16:00","S","out"],["18:30","Z","out"],["21:00","home"]]},{id:"joe-6",ported:null,home:[27,5],body:"average",attach:[{part:"prop.balloon"}],plan:[["10:00","C","out"],["12:30","P","out"],["15:00","M","in"],["16:30","S","out"],["18:00","Z","out"],["20:00","home"]]},{id:"joe-7",ported:null,home:[27,31],body:"xl",attach:[{part:"prop.flowers"}],plan:[["07:45","K","visit"],["09:00","T","in"],["13:00","C","out"],["14:00","T","in"],["17:30","P","out"],["19:30","home"]]},{id:"joe-8",ported:null,home:[8,27],body:"average",attach:[{part:"prop.dog"}],plan:[["08:00","P","out"],["11:30","S","out"],["14:30","P","out"],["17:45","Z","out"],["20:15","home"]]}],Nw={start:{energy:[.72,.96],social:[.3,.6],curiosity:[.3,.6]},rates:{sleep:{energy:.11,social:-.01,curiosity:0},home:{energy:.02,social:-.04,curiosity:-.02},walk:{energy:-.06,social:.01,curiosity:.04},work:{energy:-.05,social:.02,curiosity:-.045},rush:{energy:-.09,social:.07,curiosity:.01},cafe:{energy:.06,social:.14,curiosity:.02},park:{energy:.03,social:.03,curiosity:.08},plaza:{energy:-.03,social:.16,curiosity:.08},cinema:{energy:-.01,social:.04,curiosity:.2},market:{energy:-.02,social:.08,curiosity:.07},rummer:{energy:-.02,social:.06,curiosity:.1}},moods:[[.3,"glum"],[.42,"flat"],[.58,"okay"],[.72,"content"],[9,"bright"]]},Uw="lines ported from v0.1 DATA.lines (lowercased, Mika -> vinnie); extras 1-4 port v0.1 plans (bembel, gri, handkaes, ebbel) as white Joes carrying crowd-scene props; 5-8 are new",Ow={version:kw,start:Fw,clock:Lw,vinnie:Iw,extras:Dw,needs:Nw,notes:Uw},Bw=1,zw=[{id:"enter",trigger:{on:"s8Start"},actions:[["simTime","13:00"],["tier",1],["camera","town",{dist:[26,24],seconds:5}],["vinnie","activity","tv"],["caption","tier1",.8],["gps","show"],["caption","walkHint",5.2],["vinnie","standTurn",4.5],["bubble","vinnie","oh. hi.",4.9],["autoWalk",8]]},{id:"tier2",trigger:{on:"km",gte:.5},actions:[["tier",2],["gps","show"],["ticker","start"],["caption","tier2",.3],["routine","unlock",2],["lore","K","onFirstReveal"]]},{id:"tier3",trigger:{on:"km",gte:1.2},actions:[["tier",3],["rings","on"],["caption","tier3",.2],["routine","unlock",3]]},{id:"contact",trigger:{on:"near",a:"vinnie",b:"mochi",dist:6,tierMin:3},actions:[["holdSim",!0],["play","contact"]]},{id:"cafe",trigger:{on:"choice",beat:"contact",value:"sayhi"},actions:[["wipe"],["play","cafe"],["met","mochi"]]},{id:"tier4",trigger:{on:"km",gte:2.2,after:"cafe"},actions:[["tier",4],["caption","tier4",.2],["gfx","hd",1],["routine","unlock",4],["walkTo",["vinnie","mochi"],"Z"]]},{id:"festival",trigger:{on:"any",of:[{after:"tier4",realSeconds:10}]},actions:[["festival"]]},{id:"end",trigger:{on:"any",of:[{after:"festival",realSeconds:13}]},actions:[["gps","shrink"],["continue","meet the neighbours"],["next","S11"]]}],Hw={camera:{shot:"venue",dist:16},steps:[{t:0,do:"turn",who:"vinnie",to:"mochi"},{t:0,do:"bubble",who:"vinnie",text:"psst. her. over there.",hop:.12},{t:1.4,do:"bubble",who:"vinnie",text:"say hi?",choices:[{label:"say hi",value:"sayhi"},{label:"not now",value:"notnow"}],autoPick:0,autoAfter:2}],onSayHi:[{t:0,do:"clip",who:"vinnie",clip:"wave"},{t:.2,do:"turn",who:"mochi",to:"vinnie"},{t:.25,do:"clip",who:"mochi",clip:"react"},{t:.3,do:"hop",who:"vinnie"},{t:.5,do:"bubble",who:"mochi",text:"hi vinnie!",style:"yellow"},{t:.55,do:"hop",who:"mochi"},{t:1.6,do:"end",next:"cafe"}],onNotNow:[{t:0,do:"bubble",who:"vinnie",text:"fair. she'll be around."},{t:1.5,do:"end",retrigger:"tapMochi"}]},Vw={holdSim:!0,marks:{vinnie:[29,23],mochi:[31.6,23],vinnieFrom:[25.5,23],mochiFrom:[35,23]},shots:[{id:"C1",ref:"show/s_019.jpg",t:[0,1.9],camera:{shot:"venue",target:[30.3,1,22.8],pitch:24,dist:[18,17]},actions:[["walk","vinnie","mark",3],["walk","mochi","mark",3],["pill","cafePill",.3],["pill","herePill",.3],["hide","tierChip"],["hide","gps"]]},{id:"C2",ref:"show/s_020.jpg",t:[1.9,2.4],camera:{shot:"venue",dist:[17,16]},actions:[["clip","both","react"],["turn","vinnie","mochi"],["turn","mochi","vinnie"],["bang","both",1.9],["dialogueBox","rise",2]]},{id:"C3",ref:"show/s_021.jpg",t:[2.4,4.7],camera:{shot:"close",favour:"vinnie",panPx:70},line:{who:"VINNIE",text:"yo. you're in colour too.",at:2.4}},{id:"C4",ref:"show/s_023.jpg",t:[4.7,7],camera:{shot:"close",favour:"mochi",panPx:70},line:{who:"MOCHI",text:"so you're the famous vinnie. nice mask.",at:4.7}},{id:"C5",ref:"show/s_026.jpg",t:[7,9.1],camera:{shot:"close",favour:"vinnie",panPx:70},line:{who:"VINNIE",text:"it's my face. wanna get coffee?",at:7}},{id:"C6",ref:"show/s_028.jpg",t:[9.1,10.8],camera:{shot:"close",favour:"mochi",panPx:70},line:{who:"MOCHI",text:"only if it's oat.",at:9.1},caret:"▼"},{id:"C7",ref:"show/s_029.jpg",t:[10.8,12.6],camera:{shot:"venue",dist:16,seconds:.9},actions:[["friendMeter",10.8],["dialogueBox","drop",11],["clip","both","joy",11.9]]},{id:"C8",ref:null,t:[12.6,20],camera:{shot:"venue",orbitDeg:15},actions:[["walk","vinnie","seat",[28.25,22.7]],["walk","mochi","seat",[29.55,22.7]],["clip","both","sit"],["cups","table1"],["toast","mochiAdded",16]]}],end:{t:20,do:"wipe",to:"town",resumeSim:!0},speakerChips:{VINNIE:"#FF4A2A",MOCHI:"#FF7ADB"},typeMsPerChar:35},Gw={version:Bw,worldScript:zw,contact:Hw,cafe:Vw},Ww=1,Xw=[19,19],$w={hdFromTier:4,hdDelay:1,overlayFade:[.55,0],overlayFadeSeconds:1.6,fieldGlow:{"16bit":.25,hd:.45}},Yw={metersPerMapPx:5,manualKmPerSecond:.06,autoKmPerSecond:.03,autoStartDelay:8,card:{mapSize:[348,212],start:[92,118]},autoRoute:[[92,118],[150,118],[150,70],[240,70],[240,150],[300,150],[300,40],[200,30],[120,40],[60,90],[60,180],[180,190],[320,190]]},qw=[{n:1,badge:"tier 1",name:"his place",kmAt:0,radius:[0,4.6],radiusSeconds:1.2,shot:{target:[19,19],dist:26,distEnd:24,distSeconds:5,pitch:35.264},caption:"at first, he only lets you see his place.",captionAt:.8,captionFor:4.5,bubble:{who:"vinnie",text:"oh. hi.",delay:4.9,hold:1.1},gfx:"16bit",routineAllow:["H"]},{n:2,badge:"tier 2",name:"his street",kmAt:.5,radius:[4.6,9.5],radiusSeconds:1.8,shot:{target:[21,21],dist:48,distSeconds:2,pitch:35.264},caption:"get closer, and he shows you more.",captionAt:.3,captionFor:3.2,gfx:"16bit",routineAllow:["H","K","S"]},{n:3,badge:"tier 3",name:"the neighbourhood",kmAt:1.2,radius:[9.5,15.5],radiusSeconds:2,shot:{target:[24,24],dist:64,distSeconds:2,pitch:35.264},caption:"spot someone in colour? they've got a human too.",captionAt:.2,captionFor:4.4,gfx:"16bit",rings:!0,routineAllow:["H","K","S","C","M","P","N","T"]},{n:4,badge:"tier 4",name:"the city",kmAt:2.2,requires:["cafe"],radius:[15.5,32],radiusSeconds:2.6,shot:{target:[20,20],dist:136,distSeconds:3,pitch:35.264},caption:"walk your world, and his world opens up.",captionAt:.2,captionFor:5,gfx:"hd",rings:!0,routineAllow:["H","K","S","C","M","P","N","T","Z","E","W"]}],jw={progressSegments:4,gpsTitle:"your walk today",kmFormat:"{km} km",walkPillTier1:"your walk today · {km} km"},Zw={version:Ww,centre:Xw,gfx:$w,walk:Yw,tiers:qw,hud:jw},Fa=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),hn=(i,t,e,n)=>{var s;i.push(`${t}: ${e} (got ${(s=JSON.stringify(n))==null?void 0:s.slice(0,60)})`)},op=()=>{},_t=(i,t,e)=>typeof i!="string"&&hn(e,t,"expected string",i),Ot=(i,t,e)=>(typeof i!="number"||!Number.isFinite(i))&&hn(e,t,"expected number",i),Gc=(i,t,e)=>typeof i!="boolean"&&hn(e,t,"expected boolean",i),un=(i,t,e)=>(typeof i!="string"||!/^#[0-9A-Fa-f]{3,8}$/.test(i))&&hn(e,t,"expected #hex",i),La=i=>(t,e,n)=>t!==null&&i(t,e,n),ri=(...i)=>(t,e,n)=>!i.includes(t)&&hn(n,e,`expected one of ${i.join("|")}`,t),Wc=(i,t,e)=>(typeof i!="string"||!/^\d{2}:\d{2}$/.test(i))&&hn(e,t,"expected hh:mm",i),Zt=(i,t=0)=>(e,n,s)=>{if(!Array.isArray(e))return hn(s,n,"expected array",e);e.length<t&&hn(s,n,`expected at least ${t} items`,e.length),e.forEach((o,r)=>i(o,`${n}[${r}]`,s))},Ne=(i,t=Ot)=>(e,n,s)=>{if(!Array.isArray(e)||e.length!==i)return hn(s,n,`expected ${i}-tuple`,e);e.forEach((o,r)=>t(o,`${n}[${r}]`,s))},Kw=(i,t)=>(e,n,s)=>{if(!Array.isArray(e)||e.length!==2)return hn(s,n,"expected pair",e);i(e[0],`${n}[0]`,s),t(e[1],`${n}[1]`,s)},Rt=i=>(t,e,n)=>{if(!Fa(t))return hn(n,e,"expected object",t);for(const[s,o]of Object.entries(i)){const r=s.endsWith("?"),a=r?s.slice(0,-1):s;if(!(a in t)){r||hn(n,`${e}.${a}`,"missing",void 0);continue}o(t[a],`${e}.${a}`,n)}},an=i=>(t,e,n)=>{if(!Fa(t))return hn(n,e,"expected object",t);for(const[s,o]of Object.entries(t))i(o,`${e}.${s}`,n)},Ki=ri(1),ea=Rt({head:Ot,h:Ot,T:Ot,A:Ot,hem:Ot,belly:Ot,legs:Ot}),rp=ri("thin","average","stocky","xl"),ap=Rt({part:_t,"color?":un,"color2?":un,"side?":ri("L","R"),"params?":an(op)}),Jw=["head","h","T","A","hem","belly","legs"],Qw=Rt({id:_t,num:_t,name:_t,tagline:La(_t),hasHuman:Gc,role:ri("lead","friend","neighbour","blank"),body:rp,headScale:Ot,"shape?":(i,t,e)=>{if(an(Ot)(i,t,e),Fa(i))for(const n of Object.keys(i))Jw.includes(n)||hn(e,`${t}.${n}`,"unknown shape key",n)},skin:un,"hands?":un,face:Rt({eyes:_t,mouth:_t}),top:Rt({type:_t,color:un,"color2?":un}),pants:Rt({type:ri("wide","straight","jeans"),color:un}),shoes:Rt({type:ri("sneaker","leather"),color:un}),attach:Zt(ap),sprite:Rt({body:_t,card:_t,footX:Ot,aspect:Ot}),"flags?":Rt({"occultMarks?":Gc})}),tS=Rt({version:Ki,units:Rt({U:_t,worldPerU:Ot}),bodyTypes:Rt({thin:ea,average:ea,stocky:ea,xl:ea}),cast:(i,t,e)=>{if(Zt(Qw,15)(i,t,e),Array.isArray(i)){const n=i.map(s=>Fa(s)?s.id:null);new Set(n).size!==n.length&&hn(e,t,"duplicate cast ids",n)}}}),eS=Rt({version:Ki,captions:an(_t),S0:Rt({tags:Zt(Kw(_t,Ot)),wordmark:_t}),S1:Rt({heading:_t,chips:Zt(Ne(2,_t)),button:_t}),S2:Rt({finding:_t}),S3:Rt({name:_t,pill:_t}),S4:Rt({trust:_t}),S6:an(_t),S7:an(_t),S8:an(_t),S11:Rt({heading:_t,order:Zt(_t,12)}),S12:Rt({wordmark:_t,tagline:_t,cta:_t,sub:_t,replay:_t,lineup:Zt(_t,15)}),debug:Rt({resetAsk:_t}),ui:Rt({continue:_t})}),lp=ri("VINNIE","YOU","MOCHI"),gi=Rt({who:lp,text:_t,"hop?":Ot}),qu=Rt({label:_t,trust:Ot,"set?":an(_t),reply:Zt(gi),"preferIfProfile?":_t}),nS=Rt({version:Ki,trust:Rt({start:Ot,max:Ot,closeMin:Ot,display:_t}),speakers:Rt({VINNIE:Rt({chip:un}),YOU:Rt({chip:un})}),days:Rt({maxDays:Ot,nextDayCard:_t,forcedOnDay:Ot}),memoryKeys:Zt(_t),beats:Zt(Rt({id:_t,days:Zt(Ot,1),line:Zt(gi,1),"lineAgain?":Zt(gi),choices:Zt(qu,1),autoPick:Ot}),1),close:Rt({pass:Zt(gi,1),fail:Zt(gi,1),forced:Zt(gi,1),toast:_t}),consent:Rt({ask:Zt(gi,1),askAgain:Zt(gi),choices:Zt(qu,2),forced:Zt(gi),autoPick:Ot,confirmToast:_t})}),iS=Rt({version:Ki,forcedDay1:_t,tickerFiller:Zt(_t,1),weatherLine:Rt({sun:_t,rain:_t}),events:Zt(Rt({id:_t,headline:_t,ticker:_t,where:La(_t),startHour:Ot,durationHours:Ot,visual:ri("pigeons","lanterns","banner","crowd","closedTape","none"),effects:Rt({social:Ot,curiosity:Ot,energy:Ot}),reaction:_t,diaryLine:_t}),12),mirror:Rt({lexicon:an(_t),pool:Zt(_t),keep:Zt(_t),twists:Zt(_t)})}),io=ri(1,2,3,4),sS=Rt({version:Ki,units:Rt({size:Ne(2)}),centre:Ne(2),ground:Rt({color:un}),surfaces:Zt(Rt({id:_t,kind:_t,color:un,tier:io,d0:Ot})),buildings:Zt(Rt({id:_t,tier:io,d0:Ot,box:Ne(6),color:un}),1),props:Zt(Rt({id:_t,kind:_t,at:Ne(2),tier:io,d0:Ot})),landmarks:Zt(Rt({id:_t,key:_t,name:_t,at:_t,sign:La(_t),tier:io,lore:_t,kind:_t})),nav:Rt({cell:Ot,walkRects:Zt(Ne(4)),blocked:Zt(Ne(4)),rightHandOffset:Ot,doors:an(Ne(2))}),city:Rt({hash:_t,grid:Ne(2),lotPitch:Ot,lotOffset:Ot,lotSize:Ot,treeChance:Ot}),fog:Rt({cells:Ot,cellSize:Ot,color:un,band:Ot,popBand:Ot}),placements:Zt(Rt({who:_t,a:Ne(2),tierMin:io})),extrasSpawn:Rt({homes:Zt(Ne(2))})}),ju=Rt({from:Wc,to:Wc,place:_t,anim:_t}),oS=Rt({version:Ki,start:Rt({day:Ot,time:Wc}),clock:Rt({dayRealSeconds:Ot,speeds:Zt(Ot,1),simStep:Ot,seed:Ot}),vinnie:Rt({dayOff:Rt({days:Zt(Ot),schedule:Zt(ju,1)}),work:Rt({schedule:Zt(ju,1)}),walkSpeedU:Ot,lines:an(Zt(_t))}),extras:Zt(Rt({id:_t,home:Ne(2),body:rp,attach:Zt(ap),plan:Zt(Zt(_t,2))})),needs:Rt({start:an(Ne(2)),rates:an(an(Ot))})}),rS=(i,t,e)=>{(!Array.isArray(i)||typeof i[0]!="string")&&hn(e,t,"expected [verb, ...args]",i)},aS=Rt({version:Ki,worldScript:Zt(Rt({id:_t,trigger:Rt({on:_t}),actions:Zt(rS)}),1),contact:Rt({steps:Zt(Rt({t:Ot,do:_t})),onSayHi:Zt(Rt({t:Ot,do:_t})),onNotNow:Zt(Rt({t:Ot,do:_t}))}),cafe:Rt({holdSim:Gc,marks:an(Ne(2)),shots:Zt(Rt({id:_t,ref:La(_t),t:Ne(2),camera:Rt({shot:_t}),"line?":Rt({who:lp,text:_t,at:Ot})}),8),speakerChips:an(un)})}),lS=Rt({version:Ki,centre:Ne(2),gfx:Rt({hdFromTier:Ot,hdDelay:Ot,overlayFade:Ne(2),overlayFadeSeconds:Ot,fieldGlow:Rt({"16bit":Ot,hd:Ot})}),walk:Rt({metersPerMapPx:Ot,manualKmPerSecond:Ot,autoKmPerSecond:Ot,autoStartDelay:Ot,card:Rt({mapSize:Ne(2),start:Ne(2)}),autoRoute:Zt(Ne(2))}),tiers:Zt(Rt({n:io,name:_t,badge:_t,kmAt:Ot,radius:Ne(2),radiusSeconds:Ot,shot:Rt({target:Ne(2),dist:Ot,distSeconds:Ot,pitch:Ot}),caption:_t,captionAt:Ot,captionFor:Ot,gfx:ri("16bit","hd"),routineAllow:Zt(_t)}),4),hud:an(op)}),cp={cast:tS,copy:eS,dialogue:nS,events:iS,map:sS,routine:oS,setpieces:aS,tiers:lS},cS=Object.keys(cp);function hS(i,t){const e=[];return cp[i](t,i,e),e}function dS(i){const t=cS.flatMap(o=>hS(o,i[o]));if(t.length)return t;const e=i.cast,n=new Set(e.cast.map(o=>o.id)),s=i.copy;for(const o of[...s.S11.order,...s.S12.lineup])n.has(o)||t.push(`copy: unknown cast id "${o}"`);return t}const Hn={cast:FM,copy:YM,dialogue:sw,events:mw,map:Pw,routine:Ow,setpieces:Gw,tiers:Zw},uS=()=>dS(Hn),fS=1500;let hp;const pS=new Promise(i=>hp=i);async function mS(){const i=vp(location.search),t=new _p(yp());i.reset&&t.reset();const e=t.data.settings;e.auto=i.auto??!i.test,i.speed!==null&&(e.speed=i.speed),Cp();const n=new e1,s=new i1,o=new s1,r=new bp,a=new wp(new Mp(i.test)),l=uS();l.length&&(console.error("data invalid",l),o.show(`data invalid: ${l[0]}`,30));const c=["joe","vinnie","mochi"].map(b=>Hn.cast.cast.find(_=>_.id===b).sprite.body);await Promise.race([Promise.all([document.fonts.load('52px "Bagel Fat One"'),document.fonts.load("36px VT323"),document.fonts.load("36px VT323","É"),...c.map(b=>{const _=new Image;return _.src=pr(b),_.decode().catch(()=>{})})]),new Promise(b=>setTimeout(b,fS))]);const h=new Bp(EM,document.getElementById("stage"),b=>{const _=_s(b);n.set(_.field,_.dots),t.setScreen(b),r.emit("screen",b)}),u={flow:h,store:t,data:Hn,copy:Hn.copy,params:i,bus:r,loop:a,captions:s,toast:o,field:n};h.bind(u);const d=b=>{var R;return(b==="S8"?Hn.copy.S8.continueEnd:(R=Hn.copy[b])==null?void 0:R.continue)??Hn.copy.ui.continue},p=Hn.copy.ui,x=new Gp(h,t,s,d,i.auto===null&&!i.test?{name:p.autoplay,on:p.on,off:p.off}:null),S=[i.screen,t.data.screen].find(Qu)??"S0";h.start(S),i.t!==null&&h.seek(i.t);const m=Zy({flow:h,loop:a,store:t,autoplay:x,ready:pS});window.__peepls=m;const f=()=>t1(m,t,Hn.copy.debug.resetAsk,Hn.cast.cast.map(b=>b.id),Hn.events.events.map(b=>b.id));let M=!i.clean&&(i.debug||i.test)?f():null;!M&&!i.clean&&addEventListener("keydown",b=>{b.key==="`"&&!M&&(M=f())}),a.add(b=>{const _=t.data.settings.speed===.25?b*.25:b;h.update(_),s.update(_),x.update(_),o.update(_),n.update(a.uiT,t.data.settings.reduceMotion||matchMedia("(prefers-reduced-motion: reduce)").matches),M==null||M.update()}),addEventListener("keydown",b=>{var _,R;b.key!=="`"&&(document.documentElement.dataset.keyboard="1"),!((R=(_=b.target)==null?void 0:_.closest)!=null&&R.call(_,"#debug, button, select"))&&((b.key===" "||b.key==="Enter")&&(b.preventDefault(),x.tap())||h.input({type:"key",key:b.key}))}),addEventListener("pointerdown",b=>{var v,E;if((E=(v=b.target)==null?void 0:v.closest)!=null&&E.call(v,"#debug, button, .slider, #continue"))return;const[_,R]=ir(b.clientX,b.clientY);h.input({type:"tap",x:_,y:R})}),a.step(0),a.start(),hp()}mS();
