var mp=Object.defineProperty;var gp=(i,t,e)=>t in i?mp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var D=(i,t,e)=>gp(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function xp(i){const t=new URLSearchParams(i),e=r=>t.has(r)&&t.get(r)!=="0",n=r=>{const o=t.get(r);return o===null||o===""||Number.isNaN(Number(o))?null:Number(o)},s=e("test");return{clean:e("clean"),debug:e("debug"),auto:t.has("auto")?t.get("auto")!=="0":null,test:s,seed:n("seed")??57,screen:t.get("screen"),t:n("t"),reset:e("reset"),speed:n("speed"),tod:t.get("tod"),gfx:t.get("gfx"),outline:t.get("outline"),cast:t.get("cast"),rig:t.get("rig"),lowgpu:e("lowgpu"),free:e("free"),campaign:e("campaign"),portrait:e("portrait")}}const Ra="peepls.demo.v1",Yu=()=>({auto:!0,reduceMotion:!1,speed:1,outline:"ink",gfx:"auto",tod:"auto",debugCollapsed:!1}),Pa=()=>({screen:"S0",settings:Yu(),progress:{}});class vp{constructor(t){D(this,"data");this.kv=t,this.data=this.load()}load(){var t;try{const e=(t=this.kv)==null?void 0:t.getItem(Ra);if(!e)return Pa();const n=JSON.parse(e);return{screen:typeof n.screen=="string"?n.screen:"S0",settings:{...Yu(),...n.settings??{}},progress:n.progress??{}}}catch{return Pa()}}save(){var t;try{(t=this.kv)==null||t.setItem(Ra,JSON.stringify(this.data))}catch{}}setScreen(t){this.data.screen=t,this.save()}setSetting(t,e){this.data.settings[t]=e,this.save()}reset(){var t;try{(t=this.kv)==null||t.removeItem(Ra)}catch{}this.data=Pa()}}function _p(){try{return window.localStorage}catch{return null}}class yp{constructor(){D(this,"handlers",new Map)}on(t,e){let n=this.handlers.get(t);return n||this.handlers.set(t,n=new Set),n.add(e),()=>n.delete(e)}emit(t,e){for(const n of this.handlers.get(t)??[])n(e)}}const Ah=1/60;class bp{constructor(t){D(this,"mode");D(this,"last",-1);this.mode=t?"manual":"real"}realDt(t){const e=this.last<0?0:(t-this.last)/1e3;return this.last=t,Math.min(Math.max(e,0),.1)}}class Mp{constructor(t){D(this,"uiT",0);D(this,"paused",!1);D(this,"fps",0);D(this,"drawFrame",!0);D(this,"steps",[]);D(this,"lastFrameMs",0);this.clock=t}add(t){this.steps.push(t)}start(){if(this.clock.mode==="manual")return;const t=e=>{this.measureFps(e),this.step(this.clock.realDt(e)),requestAnimationFrame(t)};requestAnimationFrame(t)}advance(t,e=!0){const n=Math.round(t/1e3/Ah);for(let s=0;s<n;s++)this.drawFrame=e&&s===n-1,this.step(Ah);this.drawFrame=!0}step(t){this.uiT+=t;for(const e of this.steps)e(t)}measureFps(t){if(this.lastFrameMs){const e=1e3/Math.max(1,t-this.lastFrameMs);this.fps=this.fps?this.fps*.95+e*.05:e}this.lastFrameMs=t}}function V(i,t={},...e){const n=document.createElement(i);qu(n,t);for(const s of e)s&&n.append(s);return n}const wp="http://www.w3.org/2000/svg";function ae(i,t={},...e){const n=document.createElementNS(wp,i);qu(n,t);for(const s of e)s&&n.append(s);return n}function qu(i,t){for(const[e,n]of Object.entries(t))n===void 0||n===!1||i.setAttribute(e,n===!0?"":String(n))}function Nt(i,t){for(const[e,n]of Object.entries(t))n!==void 0&&(e.startsWith("--")?i.style.setProperty(e,String(n)):i.style[e]=typeof n=="number"?`${n}px`:n)}const Ss=i=>document.querySelector(`#${i} .sbox`)??document.getElementById(i);function no(i){var e;const t=document.getElementById("sr-live");if(!(!t||!i||((e=t.lastElementChild)==null?void 0:e.textContent)===i))for(t.append(V("p",{},i));t.childElementCount>4;)t.firstElementChild.remove()}const Sp=(i,t,e)=>Math.min(e,Math.max(t,i)),Wi=i=>Sp(i,0,1),se={pop:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,draw:i=>i<.5?4*i**3:1-(-2*i+2)**3/2,enter:i=>1-(1-i)**3,fall:i=>i*i},le=(i,t,e,n)=>n(Wi((i-t)/e)),rr=(i,t,e,n=.4)=>i>=t&&i<=t+n?Math.sin(Math.PI*(i-t)/n)*e:0,Dl=(i,t,e)=>i<t?0:e*Math.exp(-2.4*(i-t))*Math.sin(7*(i-t)),Ep=(i,t=0)=>1+.012*Math.sin(2.6*i+t),Fe=(i,t,e,n)=>n?[1,le(i,t,.2,se.enter)]:[le(i,t,e,se.pop),i>=t?1:0],Ap=i=>[12*i%48,6*i%48],vn=typeof window<"u"&&innerHeight/innerWidth>1.25,bi=vn?1080:1920,Mi=vn?1920:1080;let _s=1;function Th(){_s=Math.min(innerWidth/bi,innerHeight/Mi);const i=`translate(-50%, -50%) scale(${_s})`;for(const t of document.querySelectorAll(".sbox"))t.style.transform=i}function Tp(){document.documentElement.classList.toggle("portrait",vn),Th(),addEventListener("resize",Th)}const ga=()=>_s;function qr(i,t){return[(i-innerWidth/2)/_s+bi/2,(t-innerHeight/2)/_s+Mi/2]}function Cp(i,t){return[(i-bi/2)*_s+innerWidth/2,(t-Mi/2)*_s+innerHeight/2]}const Be=(i,t)=>vn?t:i;function Es(i,t,e,n,s=540,r=960){vn&&(i.style.transformOrigin="0 0",i.style.transform=`translate(${s-t*n}px, ${r-e*n}px) scale(${n})`)}function ke(i,t){if(!vn)return i;i.dataset.pin="";for(const[e,n]of Object.entries(t))i.style[e]=typeof n=="number"?`${n}px`:n;return i}const Bc=[960,540,1.8,540,893],Ch=.8,Rh=.08,Rp=.48,Ph=Be(-2100,-2300),Pp=Be(1960,1360),ka=.25;class ju{constructor(t,e,n){D(this,"t",0);D(this,"swapped",!1);D(this,"pink");D(this,"ink");D(this,"layer",document.getElementById("wipe"));this.reduced=t,this.onCovered=e,this.onDone=n;const s=Ss("wipe"),r=(o,a)=>V("div",{class:`wipe-band ${o}`,style:`position:absolute;top:0;width:2100px;height:${Mi}px;background:var(--${a})`});this.pink=r("wipe-pink","pink"),this.ink=r("wipe-ink","ink"),t&&(this.pink.style.display="none"),s.append(this.pink,this.ink),this.layer.classList.add("covering"),this.update(0)}update(t){this.t+=t;const e=this.t,n=this.reduced?ka/2:Rp,s=this.reduced?ka:Ch+Rh;if(this.reduced)Nt(this.ink,{left:0,width:bi,opacity:String(1-Math.abs(e/(ka/2)-1))});else{const r=o=>Ph+(Pp-Ph)*se.draw(Wi((e-o)/Ch));Nt(this.pink,{transform:`translateX(${r(0)}px) skewX(-8deg)`}),Nt(this.ink,{transform:`translateX(${r(Rh)}px) skewX(-8deg)`})}!this.swapped&&e>=n&&(this.swapped=!0,this.onCovered()),e>=s&&(this.pink.remove(),this.ink.remove(),this.layer.classList.remove("covering"),this.onDone())}}const kp=.3,Fp=.25;class Lp{constructor(t,e,n){D(this,"t",0);D(this,"finished",!1);this.old=t,this.reduced=e,this.onDone=n,this.update(0)}update(t){if(this.finished)return;this.t+=t;const e=this.reduced?Fp:kp;this.old&&(this.old.style.opacity=String(1-le(this.t,0,e,se.enter))),this.t>=e&&(this.finished=!0,this.onDone())}}const kh=.9,Fh=.25,Lh=Be([1380,930],[540,1080]),Ip=Be(620,760);function Ih(i){if(!i)return null;const t=i.getBoundingClientRect(),[e,n]=qr(t.left,t.top),[s,r]=qr(t.right,t.bottom);return{x:e,y:n,w:s-e,h:r-n}}class Dp{constructor(t,e,n,s){D(this,"t",0);D(this,"finished",!1);D(this,"from");D(this,"radius");D(this,"bezel");D(this,"sprite",null);this.next=e,this.reduced=n,this.onDone=s;const r=t==null?void 0:t.querySelector('[data-morph="screen"]');this.from=Ih(r)??{x:716,y:66,w:488,h:948},this.radius=56*(this.from.w/488),this.bezel=(t==null?void 0:t.querySelector('[data-morph="bezel"]'))??null;const o=t==null?void 0:t.querySelector('[data-morph="vinnie"]'),a=e.querySelector('[data-morph="vinnie"]'),l=Ih(o);if(!n&&o&&l){const c=V("img",{src:o.src,alt:"",style:"position:absolute;display:block"});Ss("wipe").append(c);const h=[o,a].filter(u=>!!u);for(const u of h)u.style.visibility="hidden";this.sprite={el:c,from:l,hidden:h}}this.update(0)}update(t){if(this.finished)return;if(this.t+=t,this.reduced){this.next.style.opacity=String(le(this.t,0,Fh,se.enter)),this.t>=Fh&&this.finish();return}const e=le(this.t,0,kh,se.draw),n=this.from,s=n.x*(1-e),r=n.y*(1-e),o=n.w+(bi-n.w)*e,a=n.h+(Mi-n.h)*e,l=this.radius*(1-e);if(Nt(this.next,{clipPath:`inset(${r}px ${bi-s-o}px ${Mi-r-a}px ${s}px round ${l}px)`,opacity:String(Wi(e*2.5))}),this.bezel&&(this.bezel.style.opacity=String(1-Wi(e*3))),this.sprite){const c=this.sprite.from,h=c.h+(Ip-c.h)*e,u=h*(c.w/c.h),d=c.x+c.w/2+(Lh[0]-(c.x+c.w/2))*e,p=c.y+c.h+(Lh[1]-(c.y+c.h))*e;Nt(this.sprite.el,{left:d-u/2,top:p-h,width:u,height:h})}this.t>=kh&&this.finish()}finish(){if(this.finished=!0,Nt(this.next,{clipPath:"none",opacity:"1"}),this.sprite){this.sprite.el.remove();for(const t of this.sprite.hidden)t.style.visibility=""}this.onDone()}}const _r=1,Dh=.7,Np=2300,Nh=Be([1e3,520],[540,866]),Uh=.25;class Up{constructor(t,e,n){D(this,"t",0);D(this,"swapped",!1);D(this,"disc");D(this,"layer",document.getElementById("wipe"));this.reduced=t,this.onCovered=e,this.onDone=n,this.disc=V("div",{class:"iris-white",style:"position:absolute;background:var(--white)"}),Ss("wipe").append(this.disc),this.layer.classList.add("covering"),this.update(0)}update(t){this.t+=t;const e=this.t,n=this.reduced?Uh/2:_r,s=this.reduced?Uh:_r+Dh;if(this.reduced)Nt(this.disc,{left:0,top:0,width:bi,height:Mi,opacity:String(1-Math.abs(e/n-1))});else if(e<_r){const r=Np*le(e,0,_r,se.draw);Nt(this.disc,{left:Nh[0]-r,top:Nh[1]-r,width:r*2,height:r*2,borderRadius:"50%",opacity:"1"})}else Nt(this.disc,{left:0,top:0,width:bi,height:Mi,borderRadius:"0",opacity:String(1-le(e,_r,Dh,se.enter))});!this.swapped&&e>=n&&(this.swapped=!0,this.onCovered()),e>=s&&(this.disc.remove(),this.layer.classList.remove("covering"),this.onDone())}}const ia=[{id:"S0",name:"crowd to title",field:"ink",dots:!1,via:"none",next:"S1",hold:3,caption:"crowd1"},{id:"S1",name:"profile",field:"cyan",dots:!0,via:"wipe",next:"S2",hold:"self",caption:"profile"},{id:"S2",name:"finding",field:"cyan",dots:!0,via:"crossfade",next:"S3",hold:"self",caption:"finding"},{id:"S3",name:"reveal",field:"cyan",dots:!0,via:"crossfade",next:"S4",hold:2.5,caption:"reveal"},{id:"S4",name:"quiet room",field:"cream",dots:!1,via:"morph",next:"S5",hold:"self",caption:"room1"},{id:"S5",name:"consent",field:"cream",dots:!1,via:"none",next:"S6",hold:"self",caption:null},{id:"S6",name:"body ships",field:"pink",dots:!0,via:"wipe",next:"S7",hold:1.5,caption:"ship"},{id:"S7",name:"keychain handshake",field:"pink",dots:!0,via:"none",next:"S8",hold:"self",caption:"tap"},{id:"S8",name:"slow-tv world",field:"night",dots:!1,via:"iris",next:"S11",hold:3,caption:"tier1"},{id:"S11",name:"neighbours roster",field:"yellow",dots:!0,via:"wipe",next:"S12",hold:4,caption:"cast1"},{id:"S12",name:"end card",field:"pink",dots:!0,via:"wipe",next:null,hold:null,caption:null},{id:"S99",name:"cast viewer",field:"cream",dots:!1,via:"crossfade",next:null,hold:null,caption:null}],xs=i=>ia.find(t=>t.id===i),Zu=i=>ia.some(t=>t.id===i);class Op{constructor(t,e,n){D(this,"current",null);D(this,"t",0);D(this,"transition",null);D(this,"el",null);D(this,"leaving",null);D(this,"ctx");this.factory=t,this.root=e,this.onSwap=n}bind(t){this.ctx=t}get id(){var t;return((t=this.current)==null?void 0:t.id)??null}get busy(){return this.transition!==null}get reduced(){return this.ctx.store.data.settings.reduceMotion||matchMedia("(prefers-reduced-motion: reduce)").matches}start(t){this.swap(t)}go(t,e="wipe"){return this.busy?Promise.resolve():e==="none"?(this.swap(t),Promise.resolve()):new Promise(n=>{var o;(o=this.current)==null||o.exit();const s=()=>{this.transition=null,n()};if(e==="crossfade"||e==="morph"){const a=this.detach();this.mountNew(t,e==="crossfade"?"below":"above",(a==null?void 0:a.screen.id)??null);const l=()=>{a==null||a.screen.unmount(),a==null||a.el.remove(),this.leaving=null,this.onSwap(t),s()};this.transition=e==="crossfade"?new Lp((a==null?void 0:a.el)??null,this.reduced,l):new Dp((a==null?void 0:a.el)??null,this.el,this.reduced,l);return}const r=e==="iris"?Up:ju;this.transition=new r(this.reduced,()=>this.swap(t),s)})}next(){const t=this.id?xs(this.id).next:null;t&&this.go(t,xs(t).via)}replay(){this.id&&!this.busy&&this.swap(this.id)}seek(t){var e,n;this.t=t,(n=(e=this.current)==null?void 0:e.seek)==null||n.call(e,t)}update(t){var e;this.leaving&&(this.leaving.t+=t,this.leaving.screen.update(t,this.leaving.t)),(e=this.transition)==null||e.update(t),this.current&&(this.t+=t,this.current.update(t,this.t))}input(t){var e;this.busy||(e=this.current)==null||e.onInput(t)}swap(t){const e=this.detach();e==null||e.screen.unmount(),e==null||e.el.remove(),this.leaving=null,this.mountNew(t,"above",(e==null?void 0:e.screen.id)??null),this.onSwap(t)}detach(){return!this.current||!this.el?null:(this.leaving={screen:this.current,el:this.el,t:this.t},this.current=null,this.el=null,this.leaving)}mountNew(t,e,n){this.ctx.captions.clear();const s=V("div",{class:`screen screen-${t}`,style:`position:absolute;left:0;top:0;width:${bi}px;height:${Mi}px`}),r=vn?s.appendChild(V("div",{class:"scene",style:"position:absolute;left:0;top:0;width:1920px;height:1080px"})):s;e==="below"?this.root.prepend(s):this.root.append(s);const o=this.factory(t);if(this.current=o,this.el=s,this.t=0,o.mount(this.ctx,r),vn)for(const a of r.querySelectorAll("[data-pin]"))s.append(a);o.enter(n)}}const Bp={44:"12px 26px 14px",40:"10px 24px 12px",32:"8px 20px 10px",30:"6px 14px 8px",28:"6px 14px 8px"};function dn(i,t={}){const e=t.size??44,n=V(t.tag??"div",{class:"pill pixel",style:["display:inline-flex;align-items:center;gap:14px;border-radius:999px;background:var(--ink);white-space:nowrap",`font-size:${e}px;padding:${Bp[e]};color:var(--${t.color??"white"})`].join(";")});return n.append(...i),n}function or(i,t,e="currentColor"){const n=ae("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",style:"display:block;flex:none"}),s={fill:"none",stroke:e,"stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"};switch(i){case"check":n.append(ae("path",{d:"M4 12.5l5 5L20 6",...s}));break;case"arrow":n.append(ae("path",{d:"M3 12h17M14 5l7 7-7 7",...s}));break;case"caret":n.append(ae("rect",{x:7,y:3,width:10,height:18,fill:e}));break;case"down":n.append(ae("path",{d:"M4 7h16L12 19z",fill:e}));break;case"play":n.append(ae("path",{d:"M7 4l13 8-13 8z",fill:e}));break;case"dot":n.append(ae("circle",{cx:12,cy:12,r:8,fill:e}));break}return n}class zp{constructor(t,e){D(this,"el");D(this,"ring");D(this,"text");this.text=V("span",{},t);const n=dn([this.text,or("play",22,"var(--white)")],{size:32,tag:"button"});this.ring=ae("rect",{x:1,y:1,style:"width:calc(100% - 2px);height:calc(100% - 2px)",rx:999,pathLength:1,fill:"none",stroke:"var(--yellow)","stroke-width":2,"stroke-dasharray":"1 1","stroke-dashoffset":1});const s=ae("svg",{style:"position:absolute;inset:-5px;width:calc(100% + 10px);height:calc(100% + 10px);overflow:visible;pointer-events:none"},this.ring);this.el=V("div",{class:"continue",style:"position:absolute;right:50px;bottom:36px;display:none"},n,s),n.addEventListener("click",r=>{r.stopPropagation(),e()}),Ss("continue").append(this.el)}setLabel(t){this.text.textContent=t}update(t,e,n,s=!1,r=!1){this.el.classList.toggle("cta",r),s?Nt(this.el,{display:t?"block":"none",top:Be(40,78),bottom:"auto"}):Nt(this.el,{display:t?"block":"none",top:"auto",bottom:n?140:36}),this.ring.style.display=e===null?"none":"inline",e!==null&&this.ring.setAttribute("stroke-dashoffset",String(1-e))}}class Hp{constructor(t,e){D(this,"el");D(this,"state");D(this,"dot");D(this,"shownOn",null);this.text=t,this.state=V("span",{}),this.dot=V("span",{style:"display:inline-block;width:16px;height:16px;border-radius:50%;border:3px solid var(--ink)"}),this.el=V("button",{class:"pill pixel auto-pill","aria-label":t.name,style:"position:absolute;left:50px;bottom:36px;display:none;align-items:center;gap:10px;border-radius:999px;background:var(--yellow);border:4px solid var(--ink);color:var(--ink);font-size:30px;padding:6px 18px 8px;white-space:nowrap;pointer-events:auto"}),this.el.append(this.dot,V("span",{},t.name),this.state),this.el.addEventListener("click",n=>{n.stopPropagation(),e()}),Ss("continue").append(this.el)}update(t,e,n,s=!1){s?Nt(this.el,{display:t?"inline-flex":"none",top:Be(214,118),bottom:"auto"}):Nt(this.el,{display:t?"inline-flex":"none",top:"auto",bottom:n?140:36}),e!==this.shownOn&&(this.shownOn=e,this.state.textContent=e?this.text.on:this.text.off,this.dot.style.background=e?"var(--ink)":"transparent",this.el.setAttribute("aria-pressed",String(e)))}}class Vp{constructor(t,e,n,s,r=null){D(this,"elapsed",0);D(this,"pill");D(this,"labelFor",null);D(this,"control",null);this.flow=t,this.store=e,this.captions=n,this.label=s,this.pill=new zp("",()=>this.tap()),r&&(this.control=new Hp(r,()=>this.store.data.settings.auto=!this.on))}get on(){return this.store.data.settings.auto}tap(){return this.canContinue()?(this.flow.next(),!0):!1}update(t){var o;const e=this.flow.current;(o=this.control)==null||o.update(!!e&&xs(e.id).next!==null,this.on,this.captions.visible,!!(e!=null&&e.autoPillTop));const n=this.flow.current;if(!n||this.flow.busy||!n.landed()){this.elapsed=0,this.pill.update(!1,null,this.captions.visible,!!(n!=null&&n.pillTop),!!(n!=null&&n.pillCta));return}this.labelFor!==n.id&&(this.labelFor=n.id,this.pill.setLabel(this.label(n.id)));const{hold:s}=xs(n.id),r=this.canContinue()&&typeof s=="number";if(r&&this.on&&(this.elapsed+=t,this.elapsed>=s)){this.elapsed=0,this.flow.next();return}this.pill.update(r,r&&this.on?this.elapsed/s:null,this.captions.visible,!!n.pillTop,!!n.pillCta)}canContinue(){const t=this.flow.current;if(!t||this.flow.busy||!t.landed())return!1;const e=xs(t.id);return e.next!==null&&e.hold!=="self"}}const Ct={},In={rigOk:!0,chars:0,lod:[0,0,0],sub:null};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="184",Gp=0,Oh=1,Wp=2,Ko=1,Ku=2,Br=3,Xi=0,Je=1,Gn=2,_i=0,er=1,Bh=2,zh=3,Hh=4,Xp=5,ds=100,$p=101,Yp=102,qp=103,jp=104,Zp=200,Kp=201,Jp=202,Qp=203,Nl=204,Ul=205,t0=206,e0=207,n0=208,i0=209,s0=210,r0=211,o0=212,a0=213,l0=214,Ol=0,Bl=1,zl=2,ar=3,Hl=4,Vl=5,Gl=6,Wl=7,Ju=0,c0=1,h0=2,Xn=0,Qu=1,tf=2,ef=3,nf=4,sf=5,rf=6,of=7,Vh="attached",d0="detached",af=300,ys=301,lr=302,Fa=303,La=304,xa=306,Xl=1e3,vi=1001,$l=1002,$e=1003,u0=1004,co=1005,Ke=1006,Ia=1007,ps=1008,En=1009,lf=1010,cf=1011,jr=1012,Hc=1013,ai=1014,Dn=1015,wi=1016,Vc=1017,Gc=1018,Zr=1020,hf=35902,df=35899,uf=1021,ff=1022,Nn=1023,Si=1026,ms=1027,va=1028,Wc=1029,bs=1030,Xc=1031,$c=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,Yl=35840,ql=35841,jl=35842,Zl=35843,Kl=36196,Jl=37492,Ql=37496,tc=37488,ec=37489,sa=37490,nc=37491,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,dc=37816,uc=37817,fc=37818,pc=37819,mc=37820,gc=37821,xc=36492,vc=36494,_c=36495,yc=36283,bc=36284,ra=36285,Mc=36286,f0=3200,p0=3201,wc=0,m0=1,xi="",Ze="srgb",oa="srgb-linear",aa="linear",Se="srgb",Ls=7680,Gh=519,g0=512,x0=513,v0=514,Yc=515,_0=516,y0=517,qc=518,b0=519,Wh=35044,Xh="300 es",ri=2e3,Kr=2001;function M0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function w0(){const i=la("canvas");return i.style.display="block",i}const $h={};function Yh(...i){const t="THREE."+i.shift();console.log(t,...i)}function pf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=pf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function fe(...i){i=pf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Sc(...i){const t=i.join(" ");t in $h||($h[t]=!0,jt(...i))}function S0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const E0={[Ol]:Bl,[zl]:Gl,[Hl]:Wl,[ar]:Vl,[Bl]:Ol,[Gl]:zl,[Wl]:Hl,[Vl]:ar};class As{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Da=Math.PI/180,Ec=180/Math.PI;function Ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function A0(i,t){return(i%t+t)%t}function Na(i,t,e){return(1-e)*i+e*t}function yr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xh=class xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;let Tt=xh;class Yi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3];if(u!==S||l!==d||c!==p||h!==x){let m=l*d+c*p+h*x+u*S;m<0&&(d=-d,p=-p,x=-x,S=-S,m=-m);let f=1-a;if(m<.9995){const M=Math.acos(m),_=Math.sin(M);f=Math.sin(f*M)/_,a=Math.sin(a*M)/_,l=l*f+d*a,c=c*f+p*a,h=h*f+x*a,u=u*f+S*a}else{l=l*f+d*a,c=c*f+p*a,h=h*f+x*a,u=u*f+S*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*p-c*d,t[e+1]=l*x+h*d+c*u-a*p,t[e+2]=c*x+h*p+a*d-l*u,t[e+3]=h*x-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vh=class vh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;let U=vh;const Ua=new U,qh=new Yi,_h=class _h{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],S=s[0],m=s[3],f=s[6],M=s[1],_=s[4],y=s[7],R=s[2],v=s[5],E=s[8];return r[0]=o*S+a*M+l*R,r[3]=o*m+a*_+l*v,r[6]=o*f+a*y+l*E,r[1]=c*S+h*M+u*R,r[4]=c*m+h*_+u*v,r[7]=c*f+h*y+u*E,r[2]=d*S+p*M+x*R,r[5]=d*m+p*_+x*v,r[8]=d*f+p*y+x*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,x=e*u+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=d*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_h.prototype.isMatrix3=!0;let re=_h;const Oa=new re,jh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){const i={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Sc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Sc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oa]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:jh,fromXYZ:Zh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:jh,fromXYZ:Zh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}const pe=T0();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Is;class C0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Is===void 0&&(Is=la("canvas")),Is.width=t.width,Is.height=t.height;const s=Is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=la("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R0=0;class jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?C0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let P0=0;const za=new U;class on extends As{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=vi,s=vi,r=Ke,o=ps,a=Nn,l=En,c=on.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Ts(),this.name="",this.source=new jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xl:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xl:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=af;on.DEFAULT_ANISOTROPY=1;const yh=class yh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(p+1)/2,R=(f+1)/2,v=(h+d)/4,E=(u+S)/4,g=(x+m)/4;return _>y&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=v/n,r=E/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=v/s,r=g/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=g/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-x)*(m-x)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(u-S)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;let Ee=yh;class k0 extends As{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new on(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new jc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends k0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mf extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class F0 extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ma=class ma{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ma().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),o=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,x=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=d-S*c,e[9]=-a*l,e[2]=S-d*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,x=c*h,S=c*u;e[0]=d+S*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=S+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,x=c*h,S=c*u;e[0]=d-S*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=S-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,x=a*h,S=a*u;e[0]=l*h,e[4]=x*c-p,e[8]=d*c+S,e[1]=l*u,e[5]=S*c+d,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*h,e[4]=S-d*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+x,e[10]=d-S*u}else if(t.order==="XZY"){const d=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+S,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=S*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,I0)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Pi.crossVectors(n,Mn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Pi.crossVectors(n,Mn)),Pi.normalize(),ho.crossVectors(Mn,Pi),s[0]=Pi.x,s[4]=ho.x,s[8]=Mn.x,s[1]=Pi.y,s[5]=ho.y,s[9]=Mn.y,s[2]=Pi.z,s[6]=ho.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],S=n[6],m=n[10],f=n[14],M=n[3],_=n[7],y=n[11],R=n[15],v=s[0],E=s[4],g=s[8],b=s[12],T=s[1],A=s[5],F=s[9],L=s[13],O=s[2],I=s[6],H=s[10],B=s[14],et=s[3],nt=s[7],ft=s[11],bt=s[15];return r[0]=o*v+a*T+l*O+c*et,r[4]=o*E+a*A+l*I+c*nt,r[8]=o*g+a*F+l*H+c*ft,r[12]=o*b+a*L+l*B+c*bt,r[1]=h*v+u*T+d*O+p*et,r[5]=h*E+u*A+d*I+p*nt,r[9]=h*g+u*F+d*H+p*ft,r[13]=h*b+u*L+d*B+p*bt,r[2]=x*v+S*T+m*O+f*et,r[6]=x*E+S*A+m*I+f*nt,r[10]=x*g+S*F+m*H+f*ft,r[14]=x*b+S*L+m*B+f*bt,r[3]=M*v+_*T+y*O+R*et,r[7]=M*E+_*A+y*I+R*nt,r[11]=M*g+_*F+y*H+R*ft,r[15]=M*b+_*L+y*B+R*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],S=t[7],m=t[11],f=t[15],M=l*p-c*d,_=a*p-c*u,y=a*d-l*u,R=o*p-c*h,v=o*d-l*h,E=o*u-a*h;return e*(S*M-m*_+f*y)-n*(x*M-m*R+f*v)+s*(x*_-S*R+f*E)-r*(x*y-S*v+m*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],S=t[13],m=t[14],f=t[15],M=e*a-n*o,_=e*l-s*o,y=e*c-r*o,R=n*l-s*a,v=n*c-r*a,E=s*c-r*l,g=h*S-u*x,b=h*m-d*x,T=h*f-p*x,A=u*m-d*S,F=u*f-p*S,L=d*f-p*m,O=M*L-_*F+y*A+R*T-v*b+E*g;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return t[0]=(a*L-l*F+c*A)*I,t[1]=(s*F-n*L-r*A)*I,t[2]=(S*E-m*v+f*R)*I,t[3]=(d*v-u*E-p*R)*I,t[4]=(l*T-o*L-c*b)*I,t[5]=(e*L-s*T+r*b)*I,t[6]=(m*y-x*E-f*_)*I,t[7]=(h*E-d*y+p*_)*I,t[8]=(o*F-a*T+c*g)*I,t[9]=(n*T-e*F-r*g)*I,t[10]=(x*v-S*y+f*M)*I,t[11]=(u*y-h*v-p*M)*I,t[12]=(a*b-o*A-l*g)*I,t[13]=(e*A-n*b+s*g)*I,t[14]=(S*_-x*R-m*M)*I,t[15]=(h*R-u*_+d*M)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,x=r*u,S=o*h,m=o*u,f=a*u,M=l*c,_=l*h,y=l*u,R=n.x,v=n.y,E=n.z;return s[0]=(1-(S+f))*R,s[1]=(p+y)*R,s[2]=(x-_)*R,s[3]=0,s[4]=(p-y)*v,s[5]=(1-(d+f))*v,s[6]=(m+M)*v,s[7]=0,s[8]=(x+_)*E,s[9]=(m-M)*E,s[10]=(1-(d+S))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ds.set(s[0],s[1],s[2]).length();const a=Ds.set(s[4],s[5],s[6]).length(),l=Ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);const c=1/o,h=1/a,u=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ri,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let x,S;if(l)x=r/(o-r),S=o*r/(o-r);else if(a===ri)x=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Kr)x=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ri,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,S;if(l)x=1/(o-r),S=o/(o-r);else if(a===ri)x=-2/(o-r),S=-(o+r)/(o-r);else if(a===Kr)x=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ma.prototype.isMatrix4=!0;let Jt=ma;const Ds=new U,On=new Jt,L0=new U(0,0,0),I0=new U(1,1,1),Pi=new U,ho=new U,Mn=new U,Kh=new Jt,Jh=new Yi;class $i{constructor(t=0,e=0,n=0,s=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let D0=0;const Qh=new U,Ns=new Yi,hi=new Jt,uo=new U,br=new U,N0=new U,U0=new Yi,td=new U(1,0,0),ed=new U(0,1,0),nd=new U(0,0,1),id={type:"added"},O0={type:"removed"},Us={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Ye extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new U,e=new $i,n=new Yi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new re}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(br,uo,this.up):hi.lookAt(uo,br,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(hi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),Us.child=t,this.dispatchEvent(Us),Us.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(O0),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,N0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,U0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ye.DEFAULT_UP=new U(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B0={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=A0(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ga(o,r,t+1/3),this.g=Ga(o,r,t),this.b=Ga(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return pe.workingToColorSpace(en.copy(this),t),Math.round(de(en.r*255,0,255))*65536+Math.round(de(en.g*255,0,255))*256+Math.round(de(en.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(en.copy(this),e);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ze){pe.workingToColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(fo);const n=Na(ki.h,fo.h,e),s=Na(ki.s,fo.s,e),r=Na(ki.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ne;ne.NAMES=gf;class _a extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Bn=new U,di=new U,Wa=new U,ui=new U,Os=new U,Bs=new U,sd=new U,Xa=new U,$a=new U,Ya=new U,qa=new Ee,ja=new Ee,Za=new Ee;class Wn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),di.subVectors(n,e),Wa.subVectors(t,e);const o=Bn.dot(Bn),a=Bn.dot(di),l=Bn.dot(Wa),c=di.dot(di),h=di.dot(Wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return qa.setScalar(0),ja.setScalar(0),Za.setScalar(0),qa.fromBufferAttribute(t,e),ja.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qa,r.x),o.addScaledVector(ja,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),di.subVectors(t,e),Bn.cross(di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Bn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,n),Bs.subVectors(r,n),Xa.subVectors(t,n);const l=Os.dot(Xa),c=Bs.dot(Xa);if(l<=0&&c<=0)return e.copy(n);$a.subVectors(t,s);const h=Os.dot($a),u=Bs.dot($a);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Os,o);Ya.subVectors(t,r);const p=Os.dot(Ya),x=Bs.dot(Ya);if(x>=0&&p<=x)return e.copy(r);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Bs,a);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return sd.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(sd,a);const f=1/(m+S+d);return o=S*f,a=d*f,e.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class qi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),mo.subVectors(this.max,Mr),zs.subVectors(t.a,Mr),Hs.subVectors(t.b,Mr),Vs.subVectors(t.c,Mr),Fi.subVectors(Hs,zs),Li.subVectors(Vs,Hs),Ki.subVectors(zs,Vs);let e=[0,-Fi.z,Fi.y,0,-Li.z,Li.y,0,-Ki.z,Ki.y,Fi.z,0,-Fi.x,Li.z,0,-Li.x,Ki.z,0,-Ki.x,-Fi.y,Fi.x,0,-Li.y,Li.x,0,-Ki.y,Ki.x,0];return!Ka(e,zs,Hs,Vs,mo)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,zs,Hs,Vs,mo))?!1:(go.crossVectors(Fi,Li),e=[go.x,go.y,go.z],Ka(e,zs,Hs,Vs,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fi=[new U,new U,new U,new U,new U,new U,new U,new U],zn=new U,po=new qi,zs=new U,Hs=new U,Vs=new U,Fi=new U,Li=new U,Ki=new U,Mr=new U,mo=new U,go=new U,Ji=new U;function Ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ze=new U,xo=new Tt;let z0=0;class _e extends As{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Kc extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xf extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}}const H0=new qi,wr=new U,Ja=new U;class Cs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):H0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Ja)),this.expandByPoint(wr.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let V0=0;const Cn=new Jt,Qa=new Ye,Gs=new U,wn=new qi,Sr=new qi,Xe=new U;class He extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M0(t)?xf:Kc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(wn.min,Sr.min),wn.expandByPoint(Xe),Xe.addVectors(wn.max,Sr.max),wn.expandByPoint(Xe)):(wn.expandByPoint(Sr.min),wn.expandByPoint(Sr.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xe.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),Xe.add(Gs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new U,l[g]=new U;const c=new U,h=new U,u=new U,d=new Tt,p=new Tt,x=new Tt,S=new U,m=new U;function f(g,b,T){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,T),d.fromBufferAttribute(r,g),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,T),h.sub(c),u.sub(c),p.sub(d),x.sub(d);const A=1/(p.x*x.y-x.x*p.y);isFinite(A)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(A),a[g].add(S),a[b].add(S),a[T].add(S),l[g].add(m),l[b].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let g=0,b=M.length;g<b;++g){const T=M[g],A=T.start,F=T.count;for(let L=A,O=A+F;L<O;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const _=new U,y=new U,R=new U,v=new U;function E(g){R.fromBufferAttribute(s,g),v.copy(R);const b=a[g];_.copy(b),_.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(v,b);const A=y.dot(l[g])<0?-1:1;o.setXYZW(g,_.x,_.y,_.z,A)}for(let g=0,b=M.length;g<b;++g){const T=M[g],A=T.start,F=T.count;for(let L=A,O=A+F;L<O;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new _e(d,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let G0=0;class io extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=er,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const pi=new U,tl=new U,vo=new U,Ii=new U,el=new U,_o=new U,nl=new U;class Jc{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tl.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(tl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vo),a=Ii.dot(this.direction),l=-Ii.dot(vo),c=Ii.lengthSq(),h=Math.abs(1-o*o);let u,d,p,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){const S=1/h;u*=S,d*=S,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tl).addScaledVector(vo,d),p}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){el.subVectors(e,t),_o.subVectors(n,t),nl.crossVectors(el,_o);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);const l=a*this.direction.dot(_o.crossVectors(Ii,_o));if(l<0)return null;const c=a*this.direction.dot(el.cross(Ii));if(c<0||l+c>o)return null;const h=-a*Ii.dot(nl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yn extends io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rd=new Jt,Qi=new Jc,yo=new Cs,od=new U,bo=new U,Mo=new U,wo=new U,il=new U,So=new U,ad=new U,Eo=new U;class Me extends Ye{constructor(t=new He,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(il.fromBufferAttribute(u,t),o?So.addScaledVector(il,h):So.addScaledVector(il.sub(e),h))}e.add(So)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(yo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(yo,od)===null||Qi.origin.distanceToSquared(od)>(t.far-t.near)**2))&&(rd.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(rd),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,R=_;y<R;y+=3){const v=a.getX(y),E=a.getX(y+1),g=a.getX(y+2);s=Ao(this,f,t,n,c,h,u,v,E,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const M=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=Ao(this,o,t,n,c,h,u,M,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,R=_;y<R;y+=3){const v=y,E=y+1,g=y+2;s=Ao(this,f,t,n,c,h,u,v,E,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const M=m,_=m+1,y=m+2;s=Ao(this,o,t,n,c,h,u,M,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function W0(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Xi,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Eo);return c<e.near||c>e.far?null:{distance:c,point:Eo.clone(),object:i}}function Ao(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,bo),i.getVertexPosition(l,Mo),i.getVertexPosition(c,wo);const h=W0(i,t,e,n,bo,Mo,wo,ad);if(h){const u=new U;Wn.getBarycoord(ad,bo,Mo,wo,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,a,l,c,u,new Tt)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,l,c,u,new Tt)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Wn.getNormal(bo,Mo,wo,d.normal),h.face=d,h.barycoord=u}return h}const Er=new Ee,ld=new Ee,cd=new Ee,X0=new Ee,hd=new Jt,To=new U,sl=new Cs,dd=new Jt,rl=new Jc;class ud extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vh,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,To),this.boundingSphere.expandByPoint(To)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(s),t.ray.intersectsSphere(sl)!==!1&&(dd.copy(s).invert(),rl.copy(t.ray).applyMatrix4(dd),!(this.boundingBox!==null&&rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,rl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ee,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Vh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===d0?this.bindMatrixInverse.copy(this.bindMatrix).invert():jt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ld.fromBufferAttribute(s.attributes.skinIndex,t),cd.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Er.copy(e),e.set(0,0,0,0)):(Er.set(...e,1),e.set(0,0,0)),Er.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=cd.getComponent(r);if(o!==0){const a=ld.getComponent(r);hd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(X0.copy(Er).applyMatrix4(hd),o)}}return e.isVector4&&(e.w=Er.w),e.applyMatrix4(this.bindMatrixInverse)}}class vf extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ya extends on{constructor(t=null,e=1,n=1,s,r,o,a,l,c=$e,h=$e,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fd=new Jt,$0=new Jt;class Qc{constructor(t=[],e=[]){this.uuid=Ts(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){jt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:$0;fd.multiplyMatrices(a,e[r]),fd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ya(e,t,t,Nn,Dn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(jt("Skeleton: No bone found with UUID:",r),o=new vf),this.bones.push(o),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class ca extends _e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ws=new Jt,pd=new Jt,Co=[],md=new qi,Y0=new Jt,Ar=new Me,Tr=new Cs;class Ms extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ca(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Y0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),md.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(md)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Tr.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),t.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),pd.multiplyMatrices(n,Ws),Ar.matrixWorld=pd,Ar.raycast(t,Co);for(let o=0,a=Co.length;o<a;o++){const l=Co[o];l.instanceId=r,l.object=this,e.push(l)}Co.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ya(new Float32Array(s*this.count),s,this.count,va,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ol=new U,q0=new U,j0=new re;class cs{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ol.subVectors(n,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ol),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||j0.getNormalMatrix(t),s=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Cs,Z0=new Tt(.5,.5),Ro=new U;class th{constructor(t=new cs,e=new cs,n=new cs,s=new cs,r=new cs,o=new cs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],x=r[8],S=r[9],m=r[10],f=r[11],M=r[12],_=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,p-h,f-x,R-M).normalize(),s[1].setComponents(c+o,p+h,f+x,R+M).normalize(),s[2].setComponents(c+a,p+u,f+S,R+_).normalize(),s[3].setComponents(c-a,p-u,f-S,R-_).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,f-m,R-y).normalize();else if(s[4].setComponents(c-l,p-d,f-m,R-y).normalize(),e===ri)s[5].setComponents(c+l,p+d,f+m,R+y).normalize();else if(e===Kr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);const e=Z0.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _f extends on{constructor(t=[],e=ys,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class so extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends on{constructor(t,e,n=ai,s,r,o,a=$e,l=$e,c,h=Si,u=1){if(h!==Si&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class K0 extends cr{constructor(t,e=ai,n=ys,s,r,o=$e,a=$e,l,c=Si){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yf extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class un extends He{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function x(S,m,f,M,_,y,R,v,E,g,b){const T=y/E,A=R/g,F=y/2,L=R/2,O=v/2,I=E+1,H=g+1;let B=0,et=0;const nt=new U;for(let ft=0;ft<H;ft++){const bt=ft*A-L;for(let It=0;It<I;It++){const Vt=It*T-F;nt[S]=Vt*M,nt[m]=bt*_,nt[f]=O,c.push(nt.x,nt.y,nt.z),nt[S]=0,nt[m]=0,nt[f]=v>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(It/E),u.push(1-ft/g),B+=1}}for(let ft=0;ft<g;ft++)for(let bt=0;bt<E;bt++){const It=d+bt+I*ft,Vt=d+bt+I*(ft+1),pt=d+(bt+1)+I*(ft+1),Et=d+(bt+1)+I*ft;l.push(It,Vt,Et),l.push(Vt,pt,Et),et+=6}a.addGroup(p,et,b),p+=et,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class eh extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new U,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mr extends He{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let x=0;const S=[],m=n/2;let f=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2));function M(){const y=new U,R=new U;let v=0;const E=(e-t)/n;for(let g=0;g<=r;g++){const b=[],T=g/r,A=T*(e-t)+t;for(let F=0;F<=s;F++){const L=F/s,O=L*l+a,I=Math.sin(O),H=Math.cos(O);R.x=A*I,R.y=-T*n+m,R.z=A*H,u.push(R.x,R.y,R.z),y.set(I,E,H).normalize(),d.push(y.x,y.y,y.z),p.push(L,1-T),b.push(x++)}S.push(b)}for(let g=0;g<s;g++)for(let b=0;b<r;b++){const T=S[b][g],A=S[b+1][g],F=S[b+1][g+1],L=S[b][g+1];(t>0||b!==0)&&(h.push(T,A,L),v+=3),(e>0||b!==r-1)&&(h.push(A,F,L),v+=3)}c.addGroup(f,v,0),f+=v}function _(y){const R=x,v=new Tt,E=new U;let g=0;const b=y===!0?t:e,T=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),x++;const A=x;for(let F=0;F<=s;F++){const O=F/s*l+a,I=Math.cos(O),H=Math.sin(O);E.x=b*H,E.y=m*T,E.z=b*I,u.push(E.x,E.y,E.z),d.push(0,T,0),v.x=I*.5+.5,v.y=H*.5*T+.5,p.push(v.x,v.y),x++}for(let F=0;F<s;F++){const L=R+F,O=A+F;y===!0?h.push(O,O+1,L):h.push(O+1,O,L),g+=3}c.addGroup(f,g,y===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends mr{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ba(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Tt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],o=[],a=new U,l=new Jt;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(de(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(de(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nh extends li{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class J0 extends nh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const gd=new U,xd=new U,al=new ih,ll=new ih,cl=new ih;class bf extends li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xd.subVectors(s[0],s[1]).add(s[0]),c=xd);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(gd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gd),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),p),S=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);S<1e-4&&(S=1),x<1e-4&&(x=S),m<1e-4&&(m=S),al.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,S,m),ll.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,S,m),cl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,S,m)}else this.curveType==="catmullrom"&&(al.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ll.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(al.calc(l),ll.calc(l),cl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Q0(i,t){const e=1-i;return e*e*t}function tm(i,t){return 2*(1-i)*i*t}function em(i,t){return i*i*t}function Xr(i,t,e,n){return Q0(i,t)+tm(i,e)+em(i,n)}function nm(i,t){const e=1-i;return e*e*e*t}function im(i,t){const e=1-i;return 3*e*e*i*t}function sm(i,t){return 3*(1-i)*i*i*t}function rm(i,t){return i*i*i*t}function $r(i,t,e,n,s){return nm(i,t)+im(i,e)+sm(i,n)+rm(i,s)}class Mf extends li{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class om extends li{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y),$r(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wf extends li{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class am extends li{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sf extends li{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ef extends li{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y),Xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vd(a,l.x,c.x,h.x,u.x),vd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var ha=Object.freeze({__proto__:null,ArcCurve:J0,CatmullRomCurve3:bf,CubicBezierCurve:Mf,CubicBezierCurve3:om,EllipseCurve:nh,LineCurve:wf,LineCurve3:am,QuadraticBezierCurve:Sf,QuadraticBezierCurve3:Ef,SplineCurve:Af});class lm extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ha[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ha[s.type]().fromJSON(s))}return this}}class _d extends lm{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wf(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Sf(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Mf(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Af(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new nh(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sh extends _d{constructor(t){super(t),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new _d().fromJSON(s))}return this}}function cm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Tf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=pm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){const p=i[d],x=i[d+1];p<a&&(a=p),x<l&&(l=x),p>h&&(h=p),x>u&&(u=x)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Jr(r,o,e,a,l,c,0),o}function Tf(i,t,e,n,s){let r;if(s===Em(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=yd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=yd(o/n|0,i[o],i[o+1],r);return r&&hr(r,r.next)&&(to(r),r=r.next),r}function ws(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hr(e,e.next)||Ie(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_m(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?dm(i,n,s,r):hm(i)){t.push(l.i,i.i,c.i),to(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=um(ws(i),t),Jr(i,t,e,n,s,r,2)):o===2&&fm(i,t,e,n,s,r):Jr(ws(i),t,e,n,s,r,1);break}}}function hm(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=p&&zr(s,a,r,l,o,c,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function dm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,l,c),x=Math.min(h,u,d),S=Math.max(a,l,c),m=Math.max(h,u,d),f=Ac(p,x,t,e,n),M=Ac(S,m,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=f&&y&&y.z<=M;){if(_.x>=p&&_.x<=S&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&zr(a,h,l,u,c,d,_.x,_.y)&&Ie(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=S&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&zr(a,h,l,u,c,d,y.x,y.y)&&Ie(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=S&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&zr(a,h,l,u,c,d,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=S&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&zr(a,h,l,u,c,d,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function um(i,t){let e=i;do{const n=e.prev,s=e.next.next;!hr(n,s)&&Rf(n,e,e.next,s)&&Qr(n,s)&&Qr(s,n)&&(t.push(n.i,e.i,s.i),to(e),to(e.next),e=i=s),e=e.next}while(e!==i);return ws(e)}function fm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mm(o,a)){let l=Pf(o,a);o=ws(o,o.next),l=ws(l,l.next),Jr(o,t,e,n,s,r,0),Jr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pm(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Tf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bm(c))}s.sort(mm);for(let r=0;r<s.length;r++)e=gm(s[r],e);return e}function mm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function gm(i,t){const e=xm(i,t);if(!e)return t;const n=Pf(e,i);return ws(n,n.next),ws(e,e.next)}function xm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(hr(i,e))return e;do{if(hr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Cf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Qr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&vm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function vm(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function _m(i,t,e,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ym(s)}function ym(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function zr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Cf(i,t,e,n,s,r,o,a)}function Mm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wm(i,t)&&(Qr(i,t)&&Qr(t,i)&&Sm(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||hr(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hr(i,t){return i.x===t.x&&i.y===t.y}function Rf(i,t,e,n){const s=ko(Ie(i,t,e)),r=ko(Ie(i,t,n)),o=ko(Ie(e,n,i)),a=ko(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Po(i,e,t)||r===0&&Po(i,n,t)||o===0&&Po(e,i,n)||a===0&&Po(e,t,n))}function Po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ko(i){return i>0?1:i<0?-1:0}function wm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Sm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pf(i,t){const e=Tc(i.i,i.x,i.y),n=Tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yd(i,t,e,n){const s=Tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Em(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Am{static triangulate(t,e,n=2){return cm(t,e,n)}}class Qs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Qs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];bd(t),Md(n,t);let o=t.length;e.forEach(bd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Md(n,e[l]);const a=Am.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function bd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Md(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ma extends He{constructor(t=new sh([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Tm;let _,y=!1,R,v,E,g;if(f){_=f.getSpacedPoints(h),y=!0,d=!1;const st=f.isCatmullRomCurve3?f.closed:!1;R=f.computeFrenetFrames(h,st),v=new U,E=new U,g=new U}d||(m=0,p=0,x=0,S=0);const b=a.extractPoints(c);let T=b.shape;const A=b.holes;if(!Qs.isClockWise(T)){T=T.reverse();for(let st=0,ut=A.length;st<ut;st++){const at=A[st];Qs.isClockWise(at)&&(A[st]=at.reverse())}}function L(st){const at=10000000000000001e-36;let Rt=st[0];for(let Mt=1;Mt<=st.length;Mt++){const $t=Mt%st.length,N=st[$t],te=N.x-Rt.x,zt=N.y-Rt.y,Yt=te*te+zt*zt,xt=Math.max(Math.abs(N.x),Math.abs(N.y),Math.abs(Rt.x),Math.abs(Rt.y)),xe=at*xt*xt;if(Yt<=xe){st.splice($t,1),Mt--;continue}Rt=N}}L(T),A.forEach(L);const O=A.length,I=T;for(let st=0;st<O;st++){const ut=A[st];T=T.concat(ut)}function H(st,ut,at){return ut||fe("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ut,at)}const B=T.length;function et(st,ut,at){let Rt,Mt,$t;const N=st.x-ut.x,te=st.y-ut.y,zt=at.x-st.x,Yt=at.y-st.y,xt=N*N+te*te,xe=N*Yt-te*zt;if(Math.abs(xe)>Number.EPSILON){const P=Math.sqrt(xt),w=Math.sqrt(zt*zt+Yt*Yt),X=ut.x-te/P,it=ut.y+N/P,ct=at.x-Yt/w,z=at.y+zt/w,J=((ct-X)*Yt-(z-it)*zt)/(N*Yt-te*zt);Rt=X+N*J-st.x,Mt=it+te*J-st.y;const W=Rt*Rt+Mt*Mt;if(W<=2)return new Tt(Rt,Mt);$t=Math.sqrt(W/2)}else{let P=!1;N>Number.EPSILON?zt>Number.EPSILON&&(P=!0):N<-Number.EPSILON?zt<-Number.EPSILON&&(P=!0):Math.sign(te)===Math.sign(Yt)&&(P=!0),P?(Rt=-te,Mt=N,$t=Math.sqrt(xt)):(Rt=N,Mt=te,$t=Math.sqrt(xt/2))}return new Tt(Rt/$t,Mt/$t)}const nt=[];for(let st=0,ut=I.length,at=ut-1,Rt=st+1;st<ut;st++,at++,Rt++)at===ut&&(at=0),Rt===ut&&(Rt=0),nt[st]=et(I[st],I[at],I[Rt]);const ft=[];let bt,It=nt.concat();for(let st=0,ut=O;st<ut;st++){const at=A[st];bt=[];for(let Rt=0,Mt=at.length,$t=Mt-1,N=Rt+1;Rt<Mt;Rt++,$t++,N++)$t===Mt&&($t=0),N===Mt&&(N=0),bt[Rt]=et(at[Rt],at[$t],at[N]);ft.push(bt),It=It.concat(bt)}let Vt;if(m===0)Vt=Qs.triangulateShape(I,A);else{const st=[],ut=[];for(let at=0;at<m;at++){const Rt=at/m,Mt=p*Math.cos(Rt*Math.PI/2),$t=x*Math.sin(Rt*Math.PI/2)+S;for(let N=0,te=I.length;N<te;N++){const zt=H(I[N],nt[N],$t);_t(zt.x,zt.y,-Mt),Rt===0&&st.push(zt)}for(let N=0,te=O;N<te;N++){const zt=A[N];bt=ft[N];const Yt=[];for(let xt=0,xe=zt.length;xt<xe;xt++){const P=H(zt[xt],bt[xt],$t);_t(P.x,P.y,-Mt),Rt===0&&Yt.push(P)}Rt===0&&ut.push(Yt)}}Vt=Qs.triangulateShape(st,ut)}const pt=Vt.length,Et=x+S;for(let st=0;st<B;st++){const ut=d?H(T[st],It[st],Et):T[st];y?(E.copy(R.normals[0]).multiplyScalar(ut.x),v.copy(R.binormals[0]).multiplyScalar(ut.y),g.copy(_[0]).add(E).add(v),_t(g.x,g.y,g.z)):_t(ut.x,ut.y,0)}for(let st=1;st<=h;st++)for(let ut=0;ut<B;ut++){const at=d?H(T[ut],It[ut],Et):T[ut];y?(E.copy(R.normals[st]).multiplyScalar(at.x),v.copy(R.binormals[st]).multiplyScalar(at.y),g.copy(_[st]).add(E).add(v),_t(g.x,g.y,g.z)):_t(at.x,at.y,u/h*st)}for(let st=m-1;st>=0;st--){const ut=st/m,at=p*Math.cos(ut*Math.PI/2),Rt=x*Math.sin(ut*Math.PI/2)+S;for(let Mt=0,$t=I.length;Mt<$t;Mt++){const N=H(I[Mt],nt[Mt],Rt);_t(N.x,N.y,u+at)}for(let Mt=0,$t=A.length;Mt<$t;Mt++){const N=A[Mt];bt=ft[Mt];for(let te=0,zt=N.length;te<zt;te++){const Yt=H(N[te],bt[te],Rt);y?_t(Yt.x,Yt.y+_[h-1].y,_[h-1].x+at):_t(Yt.x,Yt.y,u+at)}}}j(),rt();function j(){const st=s.length/3;if(d){let ut=0,at=B*ut;for(let Rt=0;Rt<pt;Rt++){const Mt=Vt[Rt];At(Mt[2]+at,Mt[1]+at,Mt[0]+at)}ut=h+m*2,at=B*ut;for(let Rt=0;Rt<pt;Rt++){const Mt=Vt[Rt];At(Mt[0]+at,Mt[1]+at,Mt[2]+at)}}else{for(let ut=0;ut<pt;ut++){const at=Vt[ut];At(at[2],at[1],at[0])}for(let ut=0;ut<pt;ut++){const at=Vt[ut];At(at[0]+B*h,at[1]+B*h,at[2]+B*h)}}n.addGroup(st,s.length/3-st,0)}function rt(){const st=s.length/3;let ut=0;K(I,ut),ut+=I.length;for(let at=0,Rt=A.length;at<Rt;at++){const Mt=A[at];K(Mt,ut),ut+=Mt.length}n.addGroup(st,s.length/3-st,1)}function K(st,ut){let at=st.length;for(;--at>=0;){const Rt=at;let Mt=at-1;Mt<0&&(Mt=st.length-1);for(let $t=0,N=h+m*2;$t<N;$t++){const te=B*$t,zt=B*($t+1),Yt=ut+Rt+te,xt=ut+Mt+te,xe=ut+Mt+zt,P=ut+Rt+zt;St(Yt,xt,xe,P)}}}function _t(st,ut,at){l.push(st),l.push(ut),l.push(at)}function At(st,ut,at){gt(st),gt(ut),gt(at);const Rt=s.length/3,Mt=M.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);Ut(Mt[0]),Ut(Mt[1]),Ut(Mt[2])}function St(st,ut,at,Rt){gt(st),gt(ut),gt(Rt),gt(ut),gt(at),gt(Rt);const Mt=s.length/3,$t=M.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);Ut($t[0]),Ut($t[1]),Ut($t[3]),Ut($t[1]),Ut($t[2]),Ut($t[3])}function gt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Ut(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ha[s.type]().fromJSON(s)),new Ma(n,t.options)}}const Tm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Tt(r,o),new Tt(a,l),new Tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],x=t[s*3+2],S=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Tt(o,1-l),new Tt(c,1-u),new Tt(d,1-x),new Tt(S,1-f)]:[new Tt(a,1-l),new Tt(h,1-u),new Tt(p,1-x),new Tt(m,1-f)]}};function Cm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ji extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],x=[],S=[],m=[];for(let f=0;f<h;f++){const M=f*d-o;for(let _=0;_<c;_++){const y=_*u-r;x.push(y,-M,0),S.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const _=M+c*f,y=M+c*(f+1),R=M+1+c*(f+1),v=M+1+c*f;p.push(_,y,v),p.push(y,R,v)}this.setIndex(p),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.widthSegments,t.heightSegments)}}class rh extends He{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new U,x=new Tt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let S=0;S<s;S++){const m=S*(n+1);for(let f=0;f<n;f++){const M=f+m,_=M,y=M+n+1,R=M+n+2,v=M+1;a.push(_,y,v),a.push(y,R,v)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Un extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],x=[],S=[],m=[];for(let f=0;f<=n;f++){const M=[],_=f/n;let y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const v=R/e;u.x=-t*Math.cos(s+v*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+v*r)*Math.sin(o+_*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),m.push(v+y,1-_),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const _=h[f][M+1],y=h[f][M],R=h[f+1][M],v=h[f+1][M+1];(f!==0||o>0)&&p.push(_,y,v),(f!==n-1||l<Math.PI)&&p.push(y,R,v)}this.setIndex(p),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ro extends He{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new U,p=new U,x=new U;for(let S=0;S<=n;S++){const m=o+S/n*a;for(let f=0;f<=s;f++){const M=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(M),p.y=(t+e*Math.cos(m))*Math.sin(M),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),x.subVectors(p,d).normalize(),h.push(x.x,x.y,x.z),u.push(f/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const f=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,_=(s+1)*(S-1)+m,y=(s+1)*S+m;l.push(f,M,y),l.push(M,_,y)}this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class oh extends He{constructor(t=new Ef(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,c=new Tt;let h=new U;const u=[],d=[],p=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2));function S(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),M(),f()}function m(_){h=t.getPointAt(_/e,h);const y=o.normals[_],R=o.binormals[_];for(let v=0;v<=s;v++){const E=v/s*Math.PI*2,g=Math.sin(E),b=-Math.cos(E);l.x=b*y.x+g*R.x,l.y=b*y.y+g*R.y,l.z=b*y.z+g*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){const R=(s+1)*(_-1)+(y-1),v=(s+1)*_+(y-1),E=(s+1)*_+y,g=(s+1)*(_-1)+y;x.push(R,v,g),x.push(v,E,g)}}function M(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)c.x=_/e,c.y=y/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new oh(new ha[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function dr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(wd(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(wd(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=dr(i[e]);for(const s in n)t[s]=n[s]}return t}function wd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Pm={clone:dr,merge:ln};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=Rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lm extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ei extends io{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ff extends io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Im extends io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lf extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Dm extends Lf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const hl=new Jt,Sd=new U,Ed=new U;class Nm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sd),Ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ed),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Kr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fo=new U,Lo=new Yi,Zn=new U;class If extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fo,Lo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Lo,Zn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Fo,Lo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Lo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new U,Ad=new Tt,Td=new Tt;class xn extends If{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ec*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Ad,Td),e.subVectors(Td,Ad)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Da*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class wa extends If{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Um extends Nm{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Om extends Lf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Um}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Xs=-90,$s=1;class Bm extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Xs,$s,t,e);s.layers=this.layers,this.add(s);const r=new xn(Xs,$s,t,e);r.layers=this.layers,this.add(r);const o=new xn(Xs,$s,t,e);o.layers=this.layers,this.add(o);const a=new xn(Xs,$s,t,e);a.layers=this.layers,this.add(a);const l=new xn(Xs,$s,t,e);l.layers=this.layers,this.add(l);const c=new xn(Xs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class zm extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Cd=new Jt;class Hm{constructor(t,e,n=0,s=1/0){this.ray=new Jc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):fe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cd),this}intersectObject(t,e=!0,n=[]){return Cc(t,this,n,e),n.sort(Rd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Cc(t[s],this,n,e);return n.sort(Rd),n}}function Rd(i,t){return i.distance-t.distance}function Cc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Cc(r[o],t,e,!0)}}const bh=class bh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};bh.prototype.isMatrix2=!0;let Pd=bh;function kd(i,t,e,n){const s=Vm(n);switch(e){case uf:return i*t;case va:return i*t/s.components*s.byteLength;case Wc:return i*t/s.components*s.byteLength;case bs:return i*t*2/s.components*s.byteLength;case Xc:return i*t*2/s.components*s.byteLength;case ff:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case $c:return i*t*4/s.components*s.byteLength;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:case Zl:return Math.max(i,16)*Math.max(t,8)/4;case Yl:case jl:return Math.max(i,8)*Math.max(t,8)/2;case Kl:case Jl:case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ql:case sa:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xc:case vc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yc:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vm(i){switch(i){case En:case lf:return{byteLength:1,components:1};case jr:case cf:case wi:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case ai:case Hc:case Dn:return{byteLength:4,components:1};case hf:case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Df(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){const x=u[d],S=u[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,u[d]=S)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){const S=u[p];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fg=`#define PI 3.141592653589793
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
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mg=`vec3 transformedNormal = objectNormal;
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
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kg=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
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
#endif`,Vg=`uniform sampler2D dfgLUT;
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
}`,Gg=`
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tx=`#if defined( USE_POINTS_UV )
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
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
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
#endif`,ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
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
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Kx=`#if DEPTH_PACKING == 3200
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
}`,Jx=`#define DISTANCE
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
}`,Qx=`#define DISTANCE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,ov=`#define LAMBERT
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
}`,av=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,uv=`#define PHONG
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
}`,fv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,gv=`#define TOON
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
}`,xv=`#define TOON
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
}`,vv=`uniform float size;
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
}`,_v=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,bv=`uniform vec3 color;
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
}`,Mv=`uniform float rotation;
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
}`,wv=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:$m,alphamap_pars_fragment:Ym,alphatest_fragment:qm,alphatest_pars_fragment:jm,aomap_fragment:Zm,aomap_pars_fragment:Km,batching_pars_vertex:Jm,batching_vertex:Qm,begin_vertex:tg,beginnormal_vertex:eg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:ag,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:hg,color_pars_vertex:dg,color_vertex:ug,common:fg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:xg,emissivemap_fragment:vg,emissivemap_pars_fragment:_g,colorspace_fragment:yg,colorspace_pars_fragment:bg,envmap_fragment:Mg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Sg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Ng,envmap_vertex:Ag,fog_vertex:Tg,fog_pars_vertex:Cg,fog_fragment:Rg,fog_pars_fragment:Pg,gradientmap_pars_fragment:kg,lightmap_pars_fragment:Fg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Ig,lights_pars_begin:Dg,lights_toon_fragment:Ug,lights_toon_pars_fragment:Og,lights_phong_fragment:Bg,lights_phong_pars_fragment:zg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,lightprobes_pars_fragment:$g,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:Zg,map_fragment:Kg,map_pars_fragment:Jg,map_particle_fragment:Qg,map_particle_pars_fragment:tx,metalnessmap_fragment:ex,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:sx,morphnormal_vertex:rx,morphtarget_pars_vertex:ox,morphtarget_vertex:ax,normal_fragment_begin:lx,normal_fragment_maps:cx,normal_pars_fragment:hx,normal_pars_vertex:dx,normal_vertex:ux,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:xx,opaque_fragment:vx,packing:_x,premultiplied_alpha_fragment:yx,project_vertex:bx,dithering_fragment:Mx,dithering_pars_fragment:wx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:Tx,shadowmap_vertex:Cx,shadowmask_pars_fragment:Rx,skinbase_vertex:Px,skinning_pars_vertex:kx,skinning_vertex:Fx,skinnormal_vertex:Lx,specularmap_fragment:Ix,specularmap_pars_fragment:Dx,tonemapping_fragment:Nx,tonemapping_pars_fragment:Ux,transmission_fragment:Ox,transmission_pars_fragment:Bx,uv_pars_fragment:zx,uv_pars_vertex:Hx,uv_vertex:Vx,worldpos_vertex:Gx,background_vert:Wx,background_frag:Xx,backgroundCube_vert:$x,backgroundCube_frag:Yx,cube_vert:qx,cube_frag:jx,depth_vert:Zx,depth_frag:Kx,distance_vert:Jx,distance_frag:Qx,equirect_vert:tv,equirect_frag:ev,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:sv,meshbasic_frag:rv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:hv,meshnormal_frag:dv,meshphong_vert:uv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:xv,points_vert:vv,points_frag:_v,shadow_vert:yv,shadow_frag:bv,sprite_vert:Mv,sprite_frag:wv},kt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},si={basic:{uniforms:ln([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:ln([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:ln([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:ln([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:ln([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:ln([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:ln([kt.points,kt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:ln([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:ln([kt.common,kt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:ln([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:ln([kt.sprite,kt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:ln([kt.common,kt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:ln([kt.lights,kt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};si.physical={uniforms:ln([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Io={r:0,b:0,g:0},Sv=new Jt,Nf=new re;Nf.set(-1,0,0,0,1,0,0,0,1);function Ev(i,t,e,n,s,r){const o=new ne(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function p(M){let _=M.isScene===!0?M.background:null;if(_&&_.isTexture){const y=M.backgroundBlurriness>0;_=t.get(_,y)}return _}function x(M){let _=!1;const y=p(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),_=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,_){const y=p(_);y&&(y.isCubeTexture||y.mapping===xa)?(c===void 0&&(c=new Me(new un(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:dr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nf),c.material.toneMapped=pe.getTransfer(y.colorSpace)!==Se,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Me(new ji(2,2),new fn({name:"BackgroundMaterial",uniforms:dr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=pe.getTransfer(y.colorSpace)!==Se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,_){M.getRGB(Io,kf(i)),e.buffers.color.setClear(Io.r,Io.g,Io.b,_,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:x,addToRenderList:S,dispose:f}}function Av(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(A,F,L,O,I){let H=!1;const B=u(A,O,L,F);r!==B&&(r=B,c(r.object)),H=p(A,O,L,I),H&&x(A,O,L,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(A,F,L,O),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function u(A,F,L,O){const I=O.wireframe===!0;let H=n[F.id];H===void 0&&(H={},n[F.id]=H);const B=A.isInstancedMesh===!0?A.id:0;let et=H[B];et===void 0&&(et={},H[B]=et);let nt=et[L.id];nt===void 0&&(nt={},et[L.id]=nt);let ft=nt[I];return ft===void 0&&(ft=d(l()),nt[I]=ft),ft}function d(A){const F=[],L=[],O=[];for(let I=0;I<e;I++)F[I]=0,L[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:L,attributeDivisors:O,object:A,attributes:{},index:null}}function p(A,F,L,O){const I=r.attributes,H=F.attributes;let B=0;const et=L.getAttributes();for(const nt in et)if(et[nt].location>=0){const bt=I[nt];let It=H[nt];if(It===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(It=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(It=A.instanceColor)),bt===void 0||bt.attribute!==It||It&&bt.data!==It.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function x(A,F,L,O){const I={},H=F.attributes;let B=0;const et=L.getAttributes();for(const nt in et)if(et[nt].location>=0){let bt=H[nt];bt===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(bt=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(bt=A.instanceColor));const It={};It.attribute=bt,bt&&bt.data&&(It.data=bt.data),I[nt]=It,B++}r.attributes=I,r.attributesNum=B,r.index=O}function S(){const A=r.newAttributes;for(let F=0,L=A.length;F<L;F++)A[F]=0}function m(A){f(A,0)}function f(A,F){const L=r.newAttributes,O=r.enabledAttributes,I=r.attributeDivisors;L[A]=1,O[A]===0&&(i.enableVertexAttribArray(A),O[A]=1),I[A]!==F&&(i.vertexAttribDivisor(A,F),I[A]=F)}function M(){const A=r.newAttributes,F=r.enabledAttributes;for(let L=0,O=F.length;L<O;L++)F[L]!==A[L]&&(i.disableVertexAttribArray(L),F[L]=0)}function _(A,F,L,O,I,H,B){B===!0?i.vertexAttribIPointer(A,F,L,I,H):i.vertexAttribPointer(A,F,L,O,I,H)}function y(A,F,L,O){S();const I=O.attributes,H=L.getAttributes(),B=F.defaultAttributeValues;for(const et in H){const nt=H[et];if(nt.location>=0){let ft=I[et];if(ft===void 0&&(et==="instanceMatrix"&&A.instanceMatrix&&(ft=A.instanceMatrix),et==="instanceColor"&&A.instanceColor&&(ft=A.instanceColor)),ft!==void 0){const bt=ft.normalized,It=ft.itemSize,Vt=t.get(ft);if(Vt===void 0)continue;const pt=Vt.buffer,Et=Vt.type,j=Vt.bytesPerElement,rt=Et===i.INT||Et===i.UNSIGNED_INT||ft.gpuType===Hc;if(ft.isInterleavedBufferAttribute){const K=ft.data,_t=K.stride,At=ft.offset;if(K.isInstancedInterleavedBuffer){for(let St=0;St<nt.locationSize;St++)f(nt.location+St,K.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let St=0;St<nt.locationSize;St++)m(nt.location+St);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let St=0;St<nt.locationSize;St++)_(nt.location+St,It/nt.locationSize,Et,bt,_t*j,(At+It/nt.locationSize*St)*j,rt)}else{if(ft.isInstancedBufferAttribute){for(let K=0;K<nt.locationSize;K++)f(nt.location+K,ft.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let K=0;K<nt.locationSize;K++)m(nt.location+K);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let K=0;K<nt.locationSize;K++)_(nt.location+K,It/nt.locationSize,Et,bt,It*j,It/nt.locationSize*K*j,rt)}}else if(B!==void 0){const bt=B[et];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(nt.location,bt);break;case 3:i.vertexAttrib3fv(nt.location,bt);break;case 4:i.vertexAttrib4fv(nt.location,bt);break;default:i.vertexAttrib1fv(nt.location,bt)}}}}M()}function R(){b();for(const A in n){const F=n[A];for(const L in F){const O=F[L];for(const I in O){const H=O[I];for(const B in H)h(H[B].object),delete H[B];delete O[I]}}delete n[A]}}function v(A){if(n[A.id]===void 0)return;const F=n[A.id];for(const L in F){const O=F[L];for(const I in O){const H=O[I];for(const B in H)h(H[B].object),delete H[B];delete O[I]}}delete n[A.id]}function E(A){for(const F in n){const L=n[F];for(const O in L){const I=L[O];if(I[A.id]===void 0)continue;const H=I[A.id];for(const B in H)h(H[B].object),delete H[B];delete I[A.id]}}}function g(A){for(const F in n){const L=n[F],O=A.isInstancedMesh===!0?A.id:0,I=L[O];if(I!==void 0){for(const H in I){const B=I[H];for(const et in B)h(B[et].object),delete B[et];delete I[H]}delete L[O],Object.keys(L).length===0&&delete n[F]}}}function b(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:v,releaseStatesOfObject:g,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function Tv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const g=E===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==En&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Dn&&!g)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,maxSamples:R,samples:v}}function Rv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new cs,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const x=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,_=M*4;let y=f.clippingState||null;l.value=y,y=h(x,d,_,p);for(let R=0;R!==_;++R)y[R]=e[R];f.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,x){const S=u!==null?u.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const f=p+S*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==S;++_,y+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Vi=4,Fd=[.125,.215,.35,.446,.526,.582],us=20,Pv=256,Cr=new wa,Ld=new ne;let dl=null,ul=0,fl=0,pl=!1;const kv=new U;class Id{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=kv}=r;dl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dl,ul,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:wi,format:Nn,colorSpace:oa,depthBuffer:!1},s=Dd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dd(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fv(r)),this._blurMaterial=Iv(r,t,e),this._ggxMaterial=Lv(r,t,e)}return s}_compileMaterial(t){const e=new Me(new He,t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,s,r){const l=new xn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ld),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new un,new Yn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,f=!0):(m.color.copy(Ld),f=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const R=this._cubeSize;Ys(s,y*R,_>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(S,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ys||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-Vi?n-x+Vi:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,Ys(r,m,f,3*S,2*S),s.setRenderTarget(r),s.render(a,Cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Ys(t,m,f,3*S,2*S),s.setRenderTarget(t),s.render(a,Cr)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&fe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),S=r/x,m=isFinite(r)?1+Math.floor(h*S):us;m>us&&jt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const f=[];let M=0;for(let E=0;E<us;++E){const g=E/S,b=Math.exp(-g*g/2);f.push(b),E===0?M+=b:E<m&&(M+=2*b)}for(let E=0;E<f.length;E++)f[E]=f[E]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-n;const y=this._sizeLods[s],R=3*y*(s>_-Vi?s-_+Vi:0),v=4*(this._cubeSize-y);Ys(e,R,v,3*y,2*y),l.setRenderTarget(e),l.render(u,Cr)}}function Fv(i){const t=[],e=[],n=[];let s=i;const r=i-Vi+1+Fd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Vi?l=Fd[o-i+Vi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,S=3,m=2,f=1,M=new Float32Array(S*x*p),_=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let v=0;v<p;v++){const E=v%3*2/3-1,g=v>2?0:-1,b=[E,g,0,E+2/3,g,0,E+2/3,g+1,0,E,g,0,E+2/3,g+1,0,E,g+1,0];M.set(b,S*x*v),_.set(d,m*x*v);const T=[v,v,v,v,v,v];y.set(T,f*x*v)}const R=new He;R.setAttribute("position",new _e(M,S)),R.setAttribute("uv",new _e(_,m)),R.setAttribute("faceIndex",new _e(y,f)),n.push(new Me(R,null)),s>Vi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Dd(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lv(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Iv(i,t,e){const n=new Float32Array(us),s=new U(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Nd(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ud(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}class Uf extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _f(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:_i});r.uniforms.tEquirect.value=e;const o=new Me(s,r),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=Ke),new Bm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Dv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Fa||p===La)if(t.has(d)){const x=t.get(d).texture;return a(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const S=new Uf(x.height);return S.fromEquirectangularTexture(i,d),t.set(d,S),d.addEventListener("dispose",c),a(S.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,x=p===Fa||p===La,S=p===ys||p===lr;if(x||S){let m=e.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Id(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return x&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Id(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===Fa?d.mapping=ys:p===La&&(d.mapping=lr),d}function l(d){let p=0;const x=6;for(let S=0;S<x;S++)d[S]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Nv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Sc("WebGLRenderer: "+n+" extension not supported."),s}}}function Uv(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,x=u.attributes.position;let S=0;if(x===void 0)return;if(p!==null){const M=p.array;S=p.version;for(let _=0,y=M.length;_<y;_+=3){const R=M[_+0],v=M[_+1],E=M[_+2];d.push(R,v,v,E,E,R)}}else{const M=x.array;S=x.version;for(let _=0,y=M.length/3-1;_<y;_+=3){const R=_+0,v=_+1,E=_+2;d.push(R,v,v,E,E,R)}}const m=new(x.count>=65535?xf:Kc)(d,1);m.version=S;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ov(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*o,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let S=0;for(let m=0;m<p;m++)S+=d[m];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:fe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zv(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let T=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,v=1;R>t.maxTextureSize&&(v=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*v*4*u),g=new mf(E,R,v,u);g.type=Dn,g.needsUpdate=!0;const b=y*4;for(let A=0;A<u;A++){const F=f[A],L=M[A],O=_[A],I=R*v*4*A;for(let H=0;H<F.count;H++){const B=H*b;x===!0&&(s.fromBufferAttribute(F,H),E[I+B+0]=s.x,E[I+B+1]=s.y,E[I+B+2]=s.z,E[I+B+3]=0),S===!0&&(s.fromBufferAttribute(L,H),E[I+B+4]=s.x,E[I+B+5]=s.y,E[I+B+6]=s.z,E[I+B+7]=0),m===!0&&(s.fromBufferAttribute(O,H),E[I+B+8]=s.x,E[I+B+9]=s.y,E[I+B+10]=s.z,E[I+B+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:g,size:new Tt(R,v)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hv(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Vv={[Qu]:"LINEAR_TONE_MAPPING",[tf]:"REINHARD_TONE_MAPPING",[ef]:"CINEON_TONE_MAPPING",[nf]:"ACES_FILMIC_TONE_MAPPING",[rf]:"AGX_TONE_MAPPING",[of]:"NEUTRAL_TONE_MAPPING",[sf]:"CUSTOM_TONE_MAPPING"};function Gv(i,t,e,n,s){const r=new $n(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new cr(t,e):void 0}),o=new $n(t,e,{type:wi,depthBuffer:!1,stencilBuffer:!1}),a=new He;a.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ye([0,2,0,0,2,0],2));const l=new Lm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Me(a,l),h=new wa(-1,1,1,-1,0,1);let u=null,d=null,p=!1,x,S=null,m=[],f=!1;this.setSize=function(M,_){r.setSize(M,_),o.setSize(M,_);for(let y=0;y<m.length;y++){const R=m[y];R.setSize&&R.setSize(M,_)}},this.setEffects=function(M){m=M,f=m.length>0&&m[0].isRenderPass===!0;const _=r.width,y=r.height;for(let R=0;R<m.length;R++){const v=m[R];v.setSize&&v.setSize(_,y)}},this.begin=function(M,_){if(p||M.toneMapping===Xn&&m.length===0)return!1;if(S=_,_!==null){const y=_.width,R=_.height;(r.width!==y||r.height!==R)&&this.setSize(y,R)}return f===!1&&M.setRenderTarget(r),x=M.toneMapping,M.toneMapping=Xn,!0},this.hasRenderPass=function(){return f},this.end=function(M,_){M.toneMapping=x,p=!0;let y=r,R=o;for(let v=0;v<m.length;v++){const E=m[v];if(E.enabled!==!1&&(E.render(M,R,y,_),E.needsSwap!==!1)){const g=y;y=R,R=g}}if(u!==M.outputColorSpace||d!==M.toneMapping){u=M.outputColorSpace,d=M.toneMapping,l.defines={},pe.getTransfer(u)===Se&&(l.defines.SRGB_TRANSFER="");const v=Vv[d];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(S),M.render(c,h),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Of=new on,Rc=new cr(1,1),Bf=new mf,zf=new F0,Hf=new _f,Od=[],Bd=[],zd=new Float32Array(16),Hd=new Float32Array(9),Vd=new Float32Array(4);function gr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Od[s];if(r===void 0&&(r=new Float32Array(s),Od[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ea(i,t){let e=Bd[t];e===void 0&&(e=new Int32Array(t),Bd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function qv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Vd.set(n),i.uniformMatrix2fv(this.addr,!1,Vd),We(e,n)}}function jv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),We(e,n)}}function Zv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;zd.set(n),i.uniformMatrix4fv(this.addr,!1,zd),We(e,n)}}function Kv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function Qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function e_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function i_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function s_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function r_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rc.compareFunction=e.isReversedDepthBuffer()?qc:Yc,r=Rc):r=Of,e.setTexture2D(t||r,s)}function o_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zf,s)}function a_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hf,s)}function l_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bf,s)}function c_(i){switch(i){case 5126:return Wv;case 35664:return Xv;case 35665:return $v;case 35666:return Yv;case 35674:return qv;case 35675:return jv;case 35676:return Zv;case 5124:case 35670:return Kv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return t_;case 5125:return e_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return l_}}function h_(i,t){i.uniform1fv(this.addr,t)}function d_(i,t){const e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function u_(i,t){const e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function f_(i,t){const e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function p_(i,t){const e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m_(i,t){const e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function g_(i,t){const e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function x_(i,t){i.uniform1iv(this.addr,t)}function v_(i,t){i.uniform2iv(this.addr,t)}function __(i,t){i.uniform3iv(this.addr,t)}function y_(i,t){i.uniform4iv(this.addr,t)}function b_(i,t){i.uniform1uiv(this.addr,t)}function M_(i,t){i.uniform2uiv(this.addr,t)}function w_(i,t){i.uniform3uiv(this.addr,t)}function S_(i,t){i.uniform4uiv(this.addr,t)}function E_(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Rc:o=Of;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function A_(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zf,r[o])}function T_(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hf,r[o])}function C_(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bf,r[o])}function R_(i){switch(i){case 5126:return h_;case 35664:return d_;case 35665:return u_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return b_;case 36294:return M_;case 36295:return w_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return C_}}class P_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c_(e.type)}}class k_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R_(e.type)}}class F_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Gd(i,t){i.seq.push(t),i.map[t.id]=t}function L_(i,t,e){const n=i.name,s=n.length;for(ml.lastIndex=0;;){const r=ml.exec(n),o=ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gd(e,c===void 0?new P_(a,i,t):new k_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new F_(a),Gd(e,u)),e=u}}}class na{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);L_(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Wd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const I_=37297;let D_=0;function N_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Xd=new re;function U_(i){pe._getMatrix(Xd,pe.workingColorSpace,i);const t=`mat3( ${Xd.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $d(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+N_(i.getShaderSource(t),a)}else return r}function O_(i,t){const e=U_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const B_={[Qu]:"Linear",[tf]:"Reinhard",[ef]:"Cineon",[nf]:"ACESFilmic",[rf]:"AgX",[of]:"Neutral",[sf]:"Custom"};function z_(i,t){const e=B_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Do=new U;function H_(){pe.getLuminanceCoefficients(Do);const i=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function G_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hr(i){return i!==""}function Yd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(X_,Y_)}const $_=new Map;function Y_(i,t){let e=ce[t];if(e===void 0){const n=$_.get(t);if(n!==void 0)e=ce[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(q_,j_)}function j_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Z_={[Ko]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function K_(i){return Z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J_={[ys]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE_UV"};function Q_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ty={[lr]:"ENVMAP_MODE_REFRACTION"};function ey(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ty[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ny={[Ju]:"ENVMAP_BLENDING_MULTIPLY",[c0]:"ENVMAP_BLENDING_MIX",[h0]:"ENVMAP_BLENDING_ADD"};function iy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ny[i.combine]||"ENVMAP_BLENDING_NONE"}function sy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ry(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=K_(e),c=Q_(e),h=ey(e),u=iy(e),d=sy(e),p=V_(e),x=G_(r),S=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Hr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Hr).join(`
`),f.length>0&&(f+=`
`)):(m=[Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),f=[Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Xn?z_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,O_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Pc(o),o=Yd(o,e),o=qd(o,e),a=Pc(a),a=Yd(a,e),a=qd(a,e),o=jd(o),a=jd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=M+m+o,y=M+f+a,R=Wd(s,s.VERTEX_SHADER,_),v=Wd(s,s.FRAGMENT_SHADER,y);s.attachShader(S,R),s.attachShader(S,v),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function E(A){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(S)||"",L=s.getShaderInfoLog(R)||"",O=s.getShaderInfoLog(v)||"",I=F.trim(),H=L.trim(),B=O.trim();let et=!0,nt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,R,v);else{const ft=$d(s,R,"vertex"),bt=$d(s,v,"fragment");fe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+ft+`
`+bt)}else I!==""?jt("WebGLProgram: Program Info Log:",I):(H===""||B==="")&&(nt=!1);nt&&(A.diagnostics={runnable:et,programLog:I,vertexShader:{log:H,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(R),s.deleteShader(v),g=new na(s,S),b=W_(s,S)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(S,I_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D_++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=v,this}let oy=0;class ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ly(t),e.set(t,n)),n}}class ly{constructor(t){this.id=oy++,this.code=t,this.usedTimes=0}}function cy(i){return i===bs||i===sa||i===ra}function hy(i,t,e,n,s,r){const o=new Zc,a=new ay,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,b,T,A,F,L){const O=A.fog,I=F.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,et=t.get(g.envMap||H,B),nt=et&&et.mapping===xa?et.image.height:null,ft=p[g.type];g.precision!==null&&(d=n.getMaxPrecision(g.precision),d!==g.precision&&jt("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const bt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,It=bt!==void 0?bt.length:0;let Vt=0;I.morphAttributes.position!==void 0&&(Vt=1),I.morphAttributes.normal!==void 0&&(Vt=2),I.morphAttributes.color!==void 0&&(Vt=3);let pt,Et,j,rt;if(ft){const ee=si[ft];pt=ee.vertexShader,Et=ee.fragmentShader}else pt=g.vertexShader,Et=g.fragmentShader,a.update(g),j=a.getVertexShaderID(g),rt=a.getFragmentShaderID(g);const K=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,gt=!!g.map,Ut=!!g.matcap,st=!!et,ut=!!g.aoMap,at=!!g.lightMap,Rt=!!g.bumpMap,Mt=!!g.normalMap,$t=!!g.displacementMap,N=!!g.emissiveMap,te=!!g.metalnessMap,zt=!!g.roughnessMap,Yt=g.anisotropy>0,xt=g.clearcoat>0,xe=g.dispersion>0,P=g.iridescence>0,w=g.sheen>0,X=g.transmission>0,it=Yt&&!!g.anisotropyMap,ct=xt&&!!g.clearcoatMap,z=xt&&!!g.clearcoatNormalMap,J=xt&&!!g.clearcoatRoughnessMap,W=P&&!!g.iridescenceMap,$=P&&!!g.iridescenceThicknessMap,ot=w&&!!g.sheenColorMap,mt=w&&!!g.sheenRoughnessMap,lt=!!g.specularMap,dt=!!g.specularColorMap,qt=!!g.specularIntensityMap,Kt=X&&!!g.transmissionMap,Qt=X&&!!g.thicknessMap,k=!!g.gradientMap,tt=!!g.alphaMap,Q=g.alphaTest>0,wt=!!g.alphaHash,yt=!!g.extensions;let ht=Xn;g.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ht=i.toneMapping);const Ot={shaderID:ft,shaderType:g.type,shaderName:g.name,vertexShader:pt,fragmentShader:Et,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:rt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:gt,matcap:Ut,envMap:st,envMapMode:st&&et.mapping,envMapCubeUVHeight:nt,aoMap:ut,lightMap:at,bumpMap:Rt,normalMap:Mt,displacementMap:$t,emissiveMap:N,normalMapObjectSpace:Mt&&g.normalMapType===m0,normalMapTangentSpace:Mt&&g.normalMapType===wc,packedNormalMap:Mt&&g.normalMapType===wc&&cy(g.normalMap.format),metalnessMap:te,roughnessMap:zt,anisotropy:Yt,anisotropyMap:it,clearcoat:xt,clearcoatMap:ct,clearcoatNormalMap:z,clearcoatRoughnessMap:J,dispersion:xe,iridescence:P,iridescenceMap:W,iridescenceThicknessMap:$,sheen:w,sheenColorMap:ot,sheenRoughnessMap:mt,specularMap:lt,specularColorMap:dt,specularIntensityMap:qt,transmission:X,transmissionMap:Kt,thicknessMap:Qt,gradientMap:k,opaque:g.transparent===!1&&g.blending===er&&g.alphaToCoverage===!1,alphaMap:tt,alphaTest:Q,alphaHash:wt,combine:g.combine,mapUv:gt&&x(g.map.channel),aoMapUv:ut&&x(g.aoMap.channel),lightMapUv:at&&x(g.lightMap.channel),bumpMapUv:Rt&&x(g.bumpMap.channel),normalMapUv:Mt&&x(g.normalMap.channel),displacementMapUv:$t&&x(g.displacementMap.channel),emissiveMapUv:N&&x(g.emissiveMap.channel),metalnessMapUv:te&&x(g.metalnessMap.channel),roughnessMapUv:zt&&x(g.roughnessMap.channel),anisotropyMapUv:it&&x(g.anisotropyMap.channel),clearcoatMapUv:ct&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:z&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(g.sheenRoughnessMap.channel),specularMapUv:lt&&x(g.specularMap.channel),specularColorMapUv:dt&&x(g.specularColorMap.channel),specularIntensityMapUv:qt&&x(g.specularIntensityMap.channel),transmissionMapUv:Kt&&x(g.transmissionMap.channel),thicknessMapUv:Qt&&x(g.thicknessMap.channel),alphaMapUv:tt&&x(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Mt||Yt),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(gt||tt),fog:!!O,useFog:g.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&Mt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Vt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:gt&&g.map.isVideoTexture===!0&&pe.getTransfer(g.map.colorSpace)===Se,decodeVideoTextureEmissive:N&&g.emissiveMap.isVideoTexture===!0&&pe.getTransfer(g.emissiveMap.colorSpace)===Se,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Gn,flipSided:g.side===Je,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:yt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&g.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function m(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const T in g.defines)b.push(T),b.push(g.defines[T]);return g.isRawShaderMaterial===!1&&(f(b,g),M(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function f(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function M(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),g.push(o.mask)}function _(g){const b=p[g.type];let T;if(b){const A=si[b];T=Pm.clone(A.uniforms)}else T=g.uniforms;return T}function y(g,b){let T=h.get(b);return T!==void 0?++T.usedTimes:(T=new ry(i,b,g,s),c.push(T),h.set(b,T)),T}function R(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function v(g){a.remove(g)}function E(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:_,acquireProgram:y,releaseProgram:R,releaseShaderCache:v,programs:c,dispose:E}}function dy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function uy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Kd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,x,S,m,f){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:p,material:x,materialVariant:o(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:f},i[t]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=x,M.materialVariant=o(d),M.groupOrder=S,M.renderOrder=d.renderOrder,M.z=m,M.group=f),t++,M}function l(d,p,x,S,m,f){const M=a(d,p,x,S,m,f);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):e.push(M)}function c(d,p,x,S,m,f){const M=a(d,p,x,S,m,f);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,p){e.length>1&&e.sort(d||uy),n.length>1&&n.sort(p||Kd),s.length>1&&s.sort(p||Kd)}function u(){for(let d=t,p=i.length;d<p;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function fy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Jd,i.set(n,[o])):s>=r.length?(o=new Jd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function py(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new ne};break;case"SpotLight":e={position:new U,direction:new U,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function my(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gy=0;function xy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vy(i){const t=new py,e=my(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new Jt,o=new Jt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,x=0,S=0,m=0,f=0,M=0,_=0,y=0,R=0,v=0,E=0;c.sort(xy);for(let b=0,T=c.length;b<T;b++){const A=c[b],F=A.color,L=A.intensity,O=A.distance;let I=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===bs?I=A.shadow.map.texture:I=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=F.r*L,u+=F.g*L,d+=F.b*L;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],L);E++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const B=A.shadow,et=e.get(A);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=I,n.directionalShadowMatrix[p]=A.shadow.matrix,M++}n.directional[p]=H,p++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(F).multiplyScalar(L),H.distance=O,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[S]=H;const B=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,B.updateMatrices(A),A.castShadow&&v++),n.spotLightMatrix[S]=B.matrix,A.castShadow){const et=e.get(A);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,n.spotShadow[S]=et,n.spotShadowMap[S]=I,y++}S++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(F).multiplyScalar(L),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=H,m++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const B=A.shadow,et=e.get(A);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,et.shadowCameraNear=B.camera.near,et.shadowCameraFar=B.camera.far,n.pointShadow[x]=et,n.pointShadowMap[x]=I,n.pointShadowMatrix[x]=A.shadow.matrix,_++}n.point[x]=H,x++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(L),H.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const g=n.hash;(g.directionalLength!==p||g.pointLength!==x||g.spotLength!==S||g.rectAreaLength!==m||g.hemiLength!==f||g.numDirectionalShadows!==M||g.numPointShadows!==_||g.numSpotShadows!==y||g.numSpotMaps!==R||g.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+R-v,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=E,g.directionalLength=p,g.pointLength=x,g.spotLength=S,g.rectAreaLength=m,g.hemiLength=f,g.numDirectionalShadows=M,g.numPointShadows=_,g.numSpotShadows=y,g.numSpotMaps=R,g.numLightProbes=E,n.version=gy++)}function l(c,h){let u=0,d=0,p=0,x=0,S=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const _=c[f];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=n.hemi[S];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:n}}function Qd(i){const t=new vy(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _y(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qd(i),t.set(s,[a])):r>=o.length?(a=new Qd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
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
}`,My=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],wy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],tu=new Jt,Rr=new U,gl=new U;function Sy(i,t,e){let n=new th;const s=new Tt,r=new Tt,o=new Ee,a=new Ff,l=new Im,c={},h=e.maxTextureSize,u={[Xi]:Je,[Je]:Xi,[Gn]:Gn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:yy,fragmentShader:by}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new He;x.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Me(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let f=this.type;this.render=function(v,E,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Ku&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ko);const b=i.getRenderTarget(),T=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=f!==this.type;L&&E.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(I=>I.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,I=v.length;O<I;O++){const H=v[O],B=H.shadow;if(B===void 0){jt("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const et=B.getFrameExtents();s.multiply(et),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,B.mapSize.y=r.y));const nt=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=nt,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Br){if(H.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new $n(s.x,s.y,{format:bs,type:wi,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new cr(s.x,s.y,Dn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=Si,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=$e,B.map.depthTexture.magFilter=$e}else H.isPointLight?(B.map=new Uf(s.x),B.map.depthTexture=new K0(s.x,ai)):(B.map=new $n(s.x,s.y),B.map.depthTexture=new cr(s.x,s.y,ai)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=Si,this.type===Ko?(B.map.depthTexture.compareFunction=nt?qc:Yc,B.map.depthTexture.minFilter=Ke,B.map.depthTexture.magFilter=Ke):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=$e,B.map.depthTexture.magFilter=$e);B.camera.updateProjectionMatrix()}const ft=B.map.isWebGLCubeRenderTarget?6:1;for(let bt=0;bt<ft;bt++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(B.map),i.clear());const It=B.getViewport(bt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),F.viewport(o)}if(H.isPointLight){const It=B.camera,Vt=B.matrix,pt=H.distance||It.far;pt!==It.far&&(It.far=pt,It.updateProjectionMatrix()),Rr.setFromMatrixPosition(H.matrixWorld),It.position.copy(Rr),gl.copy(It.position),gl.add(My[bt]),It.up.copy(wy[bt]),It.lookAt(gl),It.updateMatrixWorld(),Vt.makeTranslation(-Rr.x,-Rr.y,-Rr.z),tu.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),B._frustum.setFromProjectionMatrix(tu,It.coordinateSystem,It.reversedDepth)}else B.updateMatrices(H);n=B.getFrustum(),y(E,g,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===Br&&M(B,g),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,T,A)};function M(v,E){const g=t.update(S);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new $n(s.x,s.y,{format:bs,type:wi})),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,g,d,S,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,g,p,S,null)}function _(v,E,g,b){let T=null;const A=g.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(A!==void 0)T=A;else if(T=g.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const F=T.uuid,L=E.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let I=O[L];I===void 0&&(I=T.clone(),O[L]=I,E.addEventListener("dispose",R)),T=I}if(T.visible=E.visible,T.wireframe=E.wireframe,b===Br?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,g.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=i.properties.get(T);F.light=g}return T}function y(v,E,g,b,T){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&T===Br)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,v.matrixWorld);const L=t.update(v),O=v.material;if(Array.isArray(O)){const I=L.groups;for(let H=0,B=I.length;H<B;H++){const et=I[H],nt=O[et.materialIndex];if(nt&&nt.visible){const ft=_(v,nt,b,T);v.onBeforeShadow(i,v,E,g,L,ft,et),i.renderBufferDirect(g,null,L,ft,v,et),v.onAfterShadow(i,v,E,g,L,ft,et)}}}else if(O.visible){const I=_(v,O,b,T);v.onBeforeShadow(i,v,E,g,L,I,null),i.renderBufferDirect(g,null,L,I,v,null),v.onAfterShadow(i,v,E,g,L,I,null)}}const F=v.children;for(let L=0,O=F.length;L<O;L++)y(F[L],E,g,b,T)}function R(v){v.target.removeEventListener("dispose",R);for(const g in c){const b=c[g],T=v.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function Ey(i,t){function e(){let k=!1;const tt=new Ee;let Q=null;const wt=new Ee(0,0,0,0);return{setMask:function(yt){Q!==yt&&!k&&(i.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){k=yt},setClear:function(yt,ht,Ot,ee,Ae){Ae===!0&&(yt*=ee,ht*=ee,Ot*=ee),tt.set(yt,ht,Ot,ee),wt.equals(tt)===!1&&(i.clearColor(yt,ht,Ot,ee),wt.copy(tt))},reset:function(){k=!1,Q=null,wt.set(-1,0,0,0)}}}function n(){let k=!1,tt=!1,Q=null,wt=null,yt=null;return{setReversed:function(ht){if(tt!==ht){const Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),tt=ht;const ee=yt;yt=null,this.setClear(ee)}},getReversed:function(){return tt},setTest:function(ht){ht?K(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(ht){Q!==ht&&!k&&(i.depthMask(ht),Q=ht)},setFunc:function(ht){if(tt&&(ht=E0[ht]),wt!==ht){switch(ht){case Ol:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case zl:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case Hl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Gl:i.depthFunc(i.GREATER);break;case Wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=ht}},setLocked:function(ht){k=ht},setClear:function(ht){yt!==ht&&(yt=ht,tt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){k=!1,Q=null,wt=null,yt=null,tt=!1}}}function s(){let k=!1,tt=null,Q=null,wt=null,yt=null,ht=null,Ot=null,ee=null,Ae=null;return{setTest:function(be){k||(be?K(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(be){tt!==be&&!k&&(i.stencilMask(be),tt=be)},setFunc:function(be,An,_n){(Q!==be||wt!==An||yt!==_n)&&(i.stencilFunc(be,An,_n),Q=be,wt=An,yt=_n)},setOp:function(be,An,_n){(ht!==be||Ot!==An||ee!==_n)&&(i.stencilOp(be,An,_n),ht=be,Ot=An,ee=_n)},setLocked:function(be){k=be},setClear:function(be){Ae!==be&&(i.clearStencil(be),Ae=be)},reset:function(){k=!1,tt=null,Q=null,wt=null,yt=null,ht=null,Ot=null,ee=null,Ae=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d={},p=new WeakMap,x=[],S=null,m=!1,f=null,M=null,_=null,y=null,R=null,v=null,E=null,g=new ne(0,0,0),b=0,T=!1,A=null,F=null,L=null,O=null,I=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,et=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(nt)[1]),B=et>=1):nt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),B=et>=2);let ft=null,bt={};const It=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),pt=new Ee().fromArray(It),Et=new Ee().fromArray(Vt);function j(k,tt,Q,wt){const yt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(k,ht),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Q;Ot++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(tt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return ht}const rt={};rt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(ar),Rt(!1),Mt(Oh),K(i.CULL_FACE),ut(_i);function K(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function _t(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function At(k,tt){return d[k]!==tt?(i.bindFramebuffer(k,tt),d[k]=tt,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function St(k,tt){let Q=x,wt=!1;if(k){Q=p.get(tt),Q===void 0&&(Q=[],p.set(tt,Q));const yt=k.textures;if(Q.length!==yt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ot=yt.length;ht<Ot;ht++)Q[ht]=i.COLOR_ATTACHMENT0+ht;Q.length=yt.length,wt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,wt=!0);wt&&i.drawBuffers(Q)}function gt(k){return S!==k?(i.useProgram(k),S=k,!0):!1}const Ut={[ds]:i.FUNC_ADD,[$p]:i.FUNC_SUBTRACT,[Yp]:i.FUNC_REVERSE_SUBTRACT};Ut[qp]=i.MIN,Ut[jp]=i.MAX;const st={[Zp]:i.ZERO,[Kp]:i.ONE,[Jp]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[s0]:i.SRC_ALPHA_SATURATE,[n0]:i.DST_COLOR,[t0]:i.DST_ALPHA,[Qp]:i.ONE_MINUS_SRC_COLOR,[Ul]:i.ONE_MINUS_SRC_ALPHA,[i0]:i.ONE_MINUS_DST_COLOR,[e0]:i.ONE_MINUS_DST_ALPHA,[r0]:i.CONSTANT_COLOR,[o0]:i.ONE_MINUS_CONSTANT_COLOR,[a0]:i.CONSTANT_ALPHA,[l0]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(k,tt,Q,wt,yt,ht,Ot,ee,Ae,be){if(k===_i){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),k!==Xp){if(k!==f||be!==T){if((M!==ds||R!==ds)&&(i.blendEquation(i.FUNC_ADD),M=ds,R=ds),be)switch(k){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bh:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",k);break}else switch(k){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zh:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",k);break}_=null,y=null,v=null,E=null,g.set(0,0,0),b=0,f=k,T=be}return}yt=yt||tt,ht=ht||Q,Ot=Ot||wt,(tt!==M||yt!==R)&&(i.blendEquationSeparate(Ut[tt],Ut[yt]),M=tt,R=yt),(Q!==_||wt!==y||ht!==v||Ot!==E)&&(i.blendFuncSeparate(st[Q],st[wt],st[ht],st[Ot]),_=Q,y=wt,v=ht,E=Ot),(ee.equals(g)===!1||Ae!==b)&&(i.blendColor(ee.r,ee.g,ee.b,Ae),g.copy(ee),b=Ae),f=k,T=!1}function at(k,tt){k.side===Gn?_t(i.CULL_FACE):K(i.CULL_FACE);let Q=k.side===Je;tt&&(Q=!Q),Rt(Q),k.blending===er&&k.transparent===!1?ut(_i):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const wt=k.stencilWrite;a.setTest(wt),wt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),N(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(k){A!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),A=k)}function Mt(k){k!==Gp?(K(i.CULL_FACE),k!==F&&(k===Oh?i.cullFace(i.BACK):k===Wp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),F=k}function $t(k){k!==L&&(B&&i.lineWidth(k),L=k)}function N(k,tt,Q){k?(K(i.POLYGON_OFFSET_FILL),(O!==tt||I!==Q)&&(O=tt,I=Q,o.getReversed()&&(tt=-tt),i.polygonOffset(tt,Q))):_t(i.POLYGON_OFFSET_FILL)}function te(k){k?K(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function zt(k){k===void 0&&(k=i.TEXTURE0+H-1),ft!==k&&(i.activeTexture(k),ft=k)}function Yt(k,tt,Q){Q===void 0&&(ft===null?Q=i.TEXTURE0+H-1:Q=ft);let wt=bt[Q];wt===void 0&&(wt={type:void 0,texture:void 0},bt[Q]=wt),(wt.type!==k||wt.texture!==tt)&&(ft!==Q&&(i.activeTexture(Q),ft=Q),i.bindTexture(k,tt||rt[k]),wt.type=k,wt.texture=tt)}function xt(){const k=bt[ft];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function xe(){try{i.compressedTexImage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function w(){try{i.texSubImage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function X(){try{i.texSubImage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function z(){try{i.texStorage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function J(){try{i.texStorage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function W(){try{i.texImage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function $(){try{i.texImage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function ot(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function mt(k,tt){u[k]!==tt&&(i.pixelStorei(k,tt),u[k]=tt)}function lt(k){pt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),pt.copy(k))}function dt(k){Et.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Et.copy(k))}function qt(k,tt){let Q=c.get(tt);Q===void 0&&(Q=new WeakMap,c.set(tt,Q));let wt=Q.get(k);wt===void 0&&(wt=i.getUniformBlockIndex(tt,k.name),Q.set(k,wt))}function Kt(k,tt){const wt=c.get(tt).get(k);l.get(tt)!==wt&&(i.uniformBlockBinding(tt,wt,k.__bindingPointIndex),l.set(tt,wt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ft=null,bt={},d={},p=new WeakMap,x=[],S=null,m=!1,f=null,M=null,_=null,y=null,R=null,v=null,E=null,g=new ne(0,0,0),b=0,T=!1,A=null,F=null,L=null,O=null,I=null,pt.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:_t,bindFramebuffer:At,drawBuffers:St,useProgram:gt,setBlending:ut,setMaterial:at,setFlipSided:Rt,setCullFace:Mt,setLineWidth:$t,setPolygonOffset:N,setScissorTest:te,activeTexture:zt,bindTexture:Yt,unbindTexture:xt,compressedTexImage2D:xe,compressedTexImage3D:P,texImage2D:W,texImage3D:$,pixelStorei:mt,getParameter:ot,updateUBOMapping:qt,uniformBlockBinding:Kt,texStorage2D:z,texStorage3D:J,texSubImage2D:w,texSubImage3D:X,compressedTexSubImage2D:it,compressedTexSubImage3D:ct,scissor:lt,viewport:dt,reset:Qt}}function Ay(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,u=new Set;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,w){return x?new OffscreenCanvas(P,w):la("canvas")}function m(P,w,X){let it=1;const ct=xe(P);if((ct.width>X||ct.height>X)&&(it=X/Math.max(ct.width,ct.height)),it<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const z=Math.floor(it*ct.width),J=Math.floor(it*ct.height);d===void 0&&(d=S(z,J));const W=w?S(z,J):d;return W.width=z,W.height=J,W.getContext("2d").drawImage(P,0,0,z,J),jt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+z+"x"+J+")."),W}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),P;return P}function f(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,w,X,it,ct,z=!1){if(P!==null){if(i[P]!==void 0)return i[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J;it&&(J=t.get("EXT_texture_norm16"),J||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=w;if(w===i.RED&&(X===i.FLOAT&&(W=i.R32F),X===i.HALF_FLOAT&&(W=i.R16F),X===i.UNSIGNED_BYTE&&(W=i.R8),X===i.UNSIGNED_SHORT&&J&&(W=J.R16_EXT),X===i.SHORT&&J&&(W=J.R16_SNORM_EXT)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(W=i.R8UI),X===i.UNSIGNED_SHORT&&(W=i.R16UI),X===i.UNSIGNED_INT&&(W=i.R32UI),X===i.BYTE&&(W=i.R8I),X===i.SHORT&&(W=i.R16I),X===i.INT&&(W=i.R32I)),w===i.RG&&(X===i.FLOAT&&(W=i.RG32F),X===i.HALF_FLOAT&&(W=i.RG16F),X===i.UNSIGNED_BYTE&&(W=i.RG8),X===i.UNSIGNED_SHORT&&J&&(W=J.RG16_EXT),X===i.SHORT&&J&&(W=J.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(W=i.RG8UI),X===i.UNSIGNED_SHORT&&(W=i.RG16UI),X===i.UNSIGNED_INT&&(W=i.RG32UI),X===i.BYTE&&(W=i.RG8I),X===i.SHORT&&(W=i.RG16I),X===i.INT&&(W=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(W=i.RGB8UI),X===i.UNSIGNED_SHORT&&(W=i.RGB16UI),X===i.UNSIGNED_INT&&(W=i.RGB32UI),X===i.BYTE&&(W=i.RGB8I),X===i.SHORT&&(W=i.RGB16I),X===i.INT&&(W=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),X===i.UNSIGNED_INT&&(W=i.RGBA32UI),X===i.BYTE&&(W=i.RGBA8I),X===i.SHORT&&(W=i.RGBA16I),X===i.INT&&(W=i.RGBA32I)),w===i.RGB&&(X===i.UNSIGNED_SHORT&&J&&(W=J.RGB16_EXT),X===i.SHORT&&J&&(W=J.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),w===i.RGBA){const $=z?aa:pe.getTransfer(ct);X===i.FLOAT&&(W=i.RGBA32F),X===i.HALF_FLOAT&&(W=i.RGBA16F),X===i.UNSIGNED_BYTE&&(W=$===Se?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&J&&(W=J.RGBA16_EXT),X===i.SHORT&&J&&(W=J.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function R(P,w){let X;return P?w===null||w===ai||w===Zr?X=i.DEPTH24_STENCIL8:w===Dn?X=i.DEPTH32F_STENCIL8:w===jr&&(X=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ai||w===Zr?X=i.DEPTH_COMPONENT24:w===Dn?X=i.DEPTH_COMPONENT32F:w===jr&&(X=i.DEPTH_COMPONENT16),X}function v(P,w){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==$e&&P.minFilter!==Ke?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){const w=P.target;w.removeEventListener("dispose",E),b(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function g(P){const w=P.target;w.removeEventListener("dispose",g),A(w)}function b(P){const w=n.get(P);if(w.__webglInit===void 0)return;const X=P.source,it=p.get(X);if(it){const ct=it[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&T(P),Object.keys(it).length===0&&p.delete(X)}n.remove(P)}function T(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const X=P.source,it=p.get(X);delete it[w.__cacheKey],o.memory.textures--}function A(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(w.__webglFramebuffer[it]))for(let ct=0;ct<w.__webglFramebuffer[it].length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[it][ct]);else i.deleteFramebuffer(w.__webglFramebuffer[it]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[it])}else{if(Array.isArray(w.__webglFramebuffer))for(let it=0;it<w.__webglFramebuffer.length;it++)i.deleteFramebuffer(w.__webglFramebuffer[it]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let it=0;it<w.__webglColorRenderbuffer.length;it++)w.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[it]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=P.textures;for(let it=0,ct=X.length;it<ct;it++){const z=n.get(X[it]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(X[it])}n.remove(P)}let F=0;function L(){F=0}function O(){return F}function I(P){F=P}function H(){const P=F;return P>=s.maxTextures&&jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function B(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function et(P,w){const X=n.get(P);if(P.isVideoTexture&&Yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const it=P.image;if(it===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(X,P,w);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function nt(P,w){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){_t(X,P,w);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function ft(P,w){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){_t(X,P,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function bt(P,w){const X=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&X.__version!==P.version){At(X,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const It={[Xl]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[$l]:i.MIRRORED_REPEAT},Vt={[$e]:i.NEAREST,[u0]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},pt={[g0]:i.NEVER,[b0]:i.ALWAYS,[x0]:i.LESS,[Yc]:i.LEQUAL,[v0]:i.EQUAL,[qc]:i.GEQUAL,[_0]:i.GREATER,[y0]:i.NOTEQUAL};function Et(P,w){if(w.type===Dn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ke||w.magFilter===Ia||w.magFilter===co||w.magFilter===ps||w.minFilter===Ke||w.minFilter===Ia||w.minFilter===co||w.minFilter===ps)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,It[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,It[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,It[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Vt[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Vt[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$e||w.minFilter!==co&&w.minFilter!==ps||w.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function j(P,w){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));const it=w.source;let ct=p.get(it);ct===void 0&&(ct={},p.set(it,ct));const z=B(w);if(z!==P.__cacheKey){ct[z]===void 0&&(ct[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ct[z].usedTimes++;const J=ct[P.__cacheKey];J!==void 0&&(ct[P.__cacheKey].usedTimes--,J.usedTimes===0&&T(w)),P.__cacheKey=z,P.__webglTexture=ct[z].texture}return X}function rt(P,w,X){return Math.floor(Math.floor(P/X)/w)}function K(P,w,X,it){const z=P.updateRanges;if(z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,X,it,w.data);else{z.sort((mt,lt)=>mt.start-lt.start);let J=0;for(let mt=1;mt<z.length;mt++){const lt=z[J],dt=z[mt],qt=lt.start+lt.count,Kt=rt(dt.start,w.width,4),Qt=rt(lt.start,w.width,4);dt.start<=qt+1&&Kt===Qt&&rt(dt.start+dt.count-1,w.width,4)===Kt?lt.count=Math.max(lt.count,dt.start+dt.count-lt.start):(++J,z[J]=dt)}z.length=J+1;const W=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let mt=0,lt=z.length;mt<lt;mt++){const dt=z[mt],qt=Math.floor(dt.start/4),Kt=Math.ceil(dt.count/4),Qt=qt%w.width,k=Math.floor(qt/w.width),tt=Kt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Qt,k,tt,Q,X,it,w.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,W),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function _t(P,w,X){let it=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=i.TEXTURE_3D);const ct=j(P,w),z=w.source;e.bindTexture(it,P.__webglTexture,i.TEXTURE0+X);const J=n.get(z);if(z.version!==J.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Q=pe.getPrimaries(pe.workingColorSpace),wt=w.colorSpace===xi?null:pe.getPrimaries(w.colorSpace),yt=w.colorSpace===xi||Q===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let $=m(w.image,!1,s.maxTextureSize);$=xt(w,$);const ot=r.convert(w.format,w.colorSpace),mt=r.convert(w.type);let lt=y(w.internalFormat,ot,mt,w.normalized,w.colorSpace,w.isVideoTexture);Et(it,w);let dt;const qt=w.mipmaps,Kt=w.isVideoTexture!==!0,Qt=J.__version===void 0||ct===!0,k=z.dataReady,tt=v(w,$);if(w.isDepthTexture)lt=R(w.format===ms,w.type),Qt&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,lt,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,lt,$.width,$.height,0,ot,mt,null));else if(w.isDataTexture)if(qt.length>0){Kt&&Qt&&e.texStorage2D(i.TEXTURE_2D,tt,lt,qt[0].width,qt[0].height);for(let Q=0,wt=qt.length;Q<wt;Q++)dt=qt[Q],Kt?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,ot,mt,dt.data):e.texImage2D(i.TEXTURE_2D,Q,lt,dt.width,dt.height,0,ot,mt,dt.data);w.generateMipmaps=!1}else Kt?(Qt&&e.texStorage2D(i.TEXTURE_2D,tt,lt,$.width,$.height),k&&K(w,$,ot,mt)):e.texImage2D(i.TEXTURE_2D,0,lt,$.width,$.height,0,ot,mt,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Kt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,lt,qt[0].width,qt[0].height,$.depth);for(let Q=0,wt=qt.length;Q<wt;Q++)if(dt=qt[Q],w.format!==Nn)if(ot!==null)if(Kt){if(k)if(w.layerUpdates.size>0){const yt=kd(dt.width,dt.height,w.format,w.type);for(const ht of w.layerUpdates){const Ot=dt.data.subarray(ht*yt/dt.data.BYTES_PER_ELEMENT,(ht+1)*yt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ht,dt.width,dt.height,1,ot,Ot)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,$.depth,ot,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,lt,dt.width,dt.height,$.depth,0,dt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,$.depth,ot,mt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,lt,dt.width,dt.height,$.depth,0,ot,mt,dt.data)}else{Kt&&Qt&&e.texStorage2D(i.TEXTURE_2D,tt,lt,qt[0].width,qt[0].height);for(let Q=0,wt=qt.length;Q<wt;Q++)dt=qt[Q],w.format!==Nn?ot!==null?Kt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,ot,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,lt,dt.width,dt.height,0,dt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,ot,mt,dt.data):e.texImage2D(i.TEXTURE_2D,Q,lt,dt.width,dt.height,0,ot,mt,dt.data)}else if(w.isDataArrayTexture)if(Kt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,lt,$.width,$.height,$.depth),k)if(w.layerUpdates.size>0){const Q=kd($.width,$.height,w.format,w.type);for(const wt of w.layerUpdates){const yt=$.data.subarray(wt*Q/$.data.BYTES_PER_ELEMENT,(wt+1)*Q/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,$.width,$.height,1,ot,mt,yt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ot,mt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,$.width,$.height,$.depth,0,ot,mt,$.data);else if(w.isData3DTexture)Kt?(Qt&&e.texStorage3D(i.TEXTURE_3D,tt,lt,$.width,$.height,$.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ot,mt,$.data)):e.texImage3D(i.TEXTURE_3D,0,lt,$.width,$.height,$.depth,0,ot,mt,$.data);else if(w.isFramebufferTexture){if(Qt)if(Kt)e.texStorage2D(i.TEXTURE_2D,tt,lt,$.width,$.height);else{let Q=$.width,wt=$.height;for(let yt=0;yt<tt;yt++)e.texImage2D(i.TEXTURE_2D,yt,lt,Q,wt,0,ot,mt,null),Q>>=1,wt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),u.add(w),Q.onpaint=ee=>{const Ae=ee.changedElements;for(const be of u)Ae.includes(be.image)&&(be.needsUpdate=!0)},Q.requestPaint();return}const wt=0,yt=i.RGBA,ht=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,wt,yt,ht,Ot,$),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Kt&&Qt){const Q=xe(qt[0]);e.texStorage2D(i.TEXTURE_2D,tt,lt,Q.width,Q.height)}for(let Q=0,wt=qt.length;Q<wt;Q++)dt=qt[Q],Kt?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot,mt,dt):e.texImage2D(i.TEXTURE_2D,Q,lt,ot,mt,dt);w.generateMipmaps=!1}else if(Kt){if(Qt){const Q=xe($);e.texStorage2D(i.TEXTURE_2D,tt,lt,Q.width,Q.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,mt,$)}else e.texImage2D(i.TEXTURE_2D,0,lt,ot,mt,$);f(w)&&M(it),J.__version=z.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function At(P,w,X){if(w.image.length!==6)return;const it=j(P,w),ct=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const z=n.get(ct);if(ct.version!==z.__version||it===!0){e.activeTexture(i.TEXTURE0+X);const J=pe.getPrimaries(pe.workingColorSpace),W=w.colorSpace===xi?null:pe.getPrimaries(w.colorSpace),$=w.colorSpace===xi||J===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ot=w.isCompressedTexture||w.image[0].isCompressedTexture,mt=w.image[0]&&w.image[0].isDataTexture,lt=[];for(let ht=0;ht<6;ht++)!ot&&!mt?lt[ht]=m(w.image[ht],!0,s.maxCubemapSize):lt[ht]=mt?w.image[ht].image:w.image[ht],lt[ht]=xt(w,lt[ht]);const dt=lt[0],qt=r.convert(w.format,w.colorSpace),Kt=r.convert(w.type),Qt=y(w.internalFormat,qt,Kt,w.normalized,w.colorSpace),k=w.isVideoTexture!==!0,tt=z.__version===void 0||it===!0,Q=ct.dataReady;let wt=v(w,dt);Et(i.TEXTURE_CUBE_MAP,w);let yt;if(ot){k&&tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Qt,dt.width,dt.height);for(let ht=0;ht<6;ht++){yt=lt[ht].mipmaps;for(let Ot=0;Ot<yt.length;Ot++){const ee=yt[Ot];w.format!==Nn?qt!==null?k?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot,0,0,ee.width,ee.height,qt,ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot,Qt,ee.width,ee.height,0,ee.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot,0,0,ee.width,ee.height,qt,Kt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot,Qt,ee.width,ee.height,0,qt,Kt,ee.data)}}}else{if(yt=w.mipmaps,k&&tt){yt.length>0&&wt++;const ht=xe(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Qt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(mt){k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,lt[ht].width,lt[ht].height,qt,Kt,lt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,lt[ht].width,lt[ht].height,0,qt,Kt,lt[ht].data);for(let Ot=0;Ot<yt.length;Ot++){const Ae=yt[Ot].image[ht].image;k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot+1,0,0,Ae.width,Ae.height,qt,Kt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot+1,Qt,Ae.width,Ae.height,0,qt,Kt,Ae.data)}}else{k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,qt,Kt,lt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,qt,Kt,lt[ht]);for(let Ot=0;Ot<yt.length;Ot++){const ee=yt[Ot];k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot+1,0,0,qt,Kt,ee.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot+1,Qt,qt,Kt,ee.image[ht])}}}f(w)&&M(i.TEXTURE_CUBE_MAP),z.__version=ct.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function St(P,w,X,it,ct,z){const J=r.convert(X.format,X.colorSpace),W=r.convert(X.type),$=y(X.internalFormat,J,W,X.normalized,X.colorSpace),ot=n.get(w),mt=n.get(X);if(mt.__renderTarget=w,!ot.__hasExternalTextures){const lt=Math.max(1,w.width>>z),dt=Math.max(1,w.height>>z);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,z,$,lt,dt,w.depth,0,J,W,null):e.texImage2D(ct,z,$,lt,dt,0,J,W,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ct,mt.__webglTexture,0,te(w)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ct,mt.__webglTexture,z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(P,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const it=w.depthTexture,ct=it&&it.isDepthTexture?it.type:null,z=R(w.stencilBuffer,ct),J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(w),z,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(w),z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,P)}else{const it=w.textures;for(let ct=0;ct<it.length;ct++){const z=it[ct],J=r.convert(z.format,z.colorSpace),W=r.convert(z.type),$=y(z.internalFormat,J,W,z.normalized,z.colorSpace);zt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(w),$,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(w),$,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,$,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(P,w,X){const it=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(w.depthTexture);if(ct.__renderTarget=w,(!ct.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),it){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Et(i.TEXTURE_CUBE_MAP,w.depthTexture);const ot=r.convert(w.depthTexture.format),mt=r.convert(w.depthTexture.type);let lt;w.depthTexture.format===Si?lt=i.DEPTH_COMPONENT24:w.depthTexture.format===ms&&(lt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,lt,w.width,w.height,0,ot,mt,null)}}else et(w.depthTexture,0);const z=ct.__webglTexture,J=te(w),W=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,$=w.depthTexture.format===ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Si)zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,W,z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,$,W,z,0);else if(w.depthTexture.format===ms)zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,W,z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,$,W,z,0);else throw new Error("Unknown depthTexture format")}function st(P){const w=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const it=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),it){const ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,it.removeEventListener("dispose",ct)};it.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=it}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let it=0;it<6;it++)Ut(w.__webglFramebuffer[it],P,it);else{const it=P.texture.mipmaps;it&&it.length>0?Ut(w.__webglFramebuffer[0],P,0):Ut(w.__webglFramebuffer,P,0)}else if(X){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]===void 0)w.__webglDepthbuffer[it]=i.createRenderbuffer(),gt(w.__webglDepthbuffer[it],P,!1);else{const ct=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=w.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,z)}}else{const it=P.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),gt(w.__webglDepthbuffer,P,!1);else{const ct=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,w,X){const it=n.get(P);w!==void 0&&St(it.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&st(P)}function at(P){const w=P.texture,X=n.get(P),it=n.get(w);P.addEventListener("dispose",g);const ct=P.textures,z=P.isWebGLCubeRenderTarget===!0,J=ct.length>1;if(J||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=w.version,o.memory.textures++),z){X.__webglFramebuffer=[];for(let W=0;W<6;W++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[W]=[];for(let $=0;$<w.mipmaps.length;$++)X.__webglFramebuffer[W][$]=i.createFramebuffer()}else X.__webglFramebuffer[W]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let W=0;W<w.mipmaps.length;W++)X.__webglFramebuffer[W]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(J)for(let W=0,$=ct.length;W<$;W++){const ot=n.get(ct[W]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&zt(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let W=0;W<ct.length;W++){const $=ct[W];X.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[W]);const ot=r.convert($.format,$.colorSpace),mt=r.convert($.type),lt=y($.internalFormat,ot,mt,$.normalized,$.colorSpace,P.isXRRenderTarget===!0),dt=te(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,lt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,X.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Et(i.TEXTURE_CUBE_MAP,w);for(let W=0;W<6;W++)if(w.mipmaps&&w.mipmaps.length>0)for(let $=0;$<w.mipmaps.length;$++)St(X.__webglFramebuffer[W][$],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,$);else St(X.__webglFramebuffer[W],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(w)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){for(let W=0,$=ct.length;W<$;W++){const ot=ct[W],mt=n.get(ot);let lt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,mt.__webglTexture),Et(lt,ot),St(X.__webglFramebuffer,P,ot,i.COLOR_ATTACHMENT0+W,lt,0),f(ot)&&M(lt)}e.unbindTexture()}else{let W=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(W=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,it.__webglTexture),Et(W,w),w.mipmaps&&w.mipmaps.length>0)for(let $=0;$<w.mipmaps.length;$++)St(X.__webglFramebuffer[$],P,w,i.COLOR_ATTACHMENT0,W,$);else St(X.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,W,0);f(w)&&M(W),e.unbindTexture()}P.depthBuffer&&st(P)}function Rt(P){const w=P.textures;for(let X=0,it=w.length;X<it;X++){const ct=w[X];if(f(ct)){const z=_(P),J=n.get(ct).__webglTexture;e.bindTexture(z,J),M(z),e.unbindTexture()}}}const Mt=[],$t=[];function N(P){if(P.samples>0){if(zt(P)===!1){const w=P.textures,X=P.width,it=P.height;let ct=i.COLOR_BUFFER_BIT;const z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=n.get(P),W=w.length>1;if(W)for(let ot=0;ot<w.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer);const $=P.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ot=0;ot<w.length;ot++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,J.__webglColorRenderbuffer[ot]);const mt=n.get(w[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,X,it,0,0,X,it,ct,i.NEAREST),l===!0&&(Mt.length=0,$t.length=0,Mt.push(i.COLOR_ATTACHMENT0+ot),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Mt.push(z),$t.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let ot=0;ot<w.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,J.__webglColorRenderbuffer[ot]);const mt=n.get(w[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function te(P){return Math.min(s.maxSamples,P.samples)}function zt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Yt(P){const w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function xt(P,w){const X=P.colorSpace,it=P.format,ct=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==oa&&X!==xi&&(pe.getTransfer(X)===Se?(it!==Nn||ct!==En)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",X)),w}function xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.getTextureUnits=O,this.setTextureUnits=I,this.setTexture2D=et,this.setTexture2DArray=nt,this.setTexture3D=ft,this.setTextureCube=bt,this.rebindTextures=ut,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=St,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ty(i,t){function e(n,s=xi){let r;const o=pe.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===df)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lf)return i.BYTE;if(n===cf)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===wi)return i.HALF_FLOAT;if(n===uf)return i.ALPHA;if(n===ff)return i.RGB;if(n===Nn)return i.RGBA;if(n===Si)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===va)return i.RED;if(n===Wc)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===Jo||n===Qo||n===ta||n===ea)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===ql||n===jl||n===Zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Jl||n===Ql||n===tc||n===ec||n===sa||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===Jl)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return r.COMPRESSED_R11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===dc||n===uc||n===fc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===vc||n===_c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xc)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===bc||n===ra||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ry=`
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

}`;class Py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new yf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:Cy,fragmentShader:Ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ky extends As{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",m=new Py,f={},M=e.getContextAttributes();let _=null,y=null;const R=[],v=[],E=new Tt;let g=null;const b=new xn;b.viewport=new Ee;const T=new xn;T.viewport=new Ee;const A=[b,T],F=new zm;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=R[j];return rt===void 0&&(rt=new Va,R[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=R[j];return rt===void 0&&(rt=new Va,R[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=R[j];return rt===void 0&&(rt=new Va,R[j]=rt),rt.getHandSpace()};function I(j){const rt=v.indexOf(j.inputSource);if(rt===-1)return;const K=R[rt];K!==void 0&&(K.update(j.inputSource,j.frame,c||o),K.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",B);for(let j=0;j<R.length;j++){const rt=v[j];rt!==null&&(v[j]=null,R[j].disconnect(rt))}L=null,O=null,m.reset();for(const j in f)delete f[j];t.setRenderTarget(_),p=null,d=null,u=null,s=null,y=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",H),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,_t=null,At=null;M.depth&&(At=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=M.stencil?ms:Si,_t=M.stencil?Zr:ai);const St={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new $n(d.textureWidth,d.textureHeight,{format:Nn,type:En,depthTexture:new cr(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new $n(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(j){for(let rt=0;rt<j.removed.length;rt++){const K=j.removed[rt],_t=v.indexOf(K);_t>=0&&(v[_t]=null,R[_t].disconnect(K))}for(let rt=0;rt<j.added.length;rt++){const K=j.added[rt];let _t=v.indexOf(K);if(_t===-1){for(let St=0;St<R.length;St++)if(St>=v.length){v.push(K),_t=St;break}else if(v[St]===null){v[St]=K,_t=St;break}if(_t===-1)break}const At=R[_t];At&&At.connect(K)}}const et=new U,nt=new U;function ft(j,rt,K){et.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(K.matrixWorld);const _t=et.distanceTo(nt),At=rt.projectionMatrix.elements,St=K.projectionMatrix.elements,gt=At[14]/(At[10]-1),Ut=At[14]/(At[10]+1),st=(At[9]+1)/At[5],ut=(At[9]-1)/At[5],at=(At[8]-1)/At[0],Rt=(St[8]+1)/St[0],Mt=gt*at,$t=gt*Rt,N=_t/(-at+Rt),te=N*-at;if(rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(te),j.translateZ(N),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const zt=gt+N,Yt=Ut+N,xt=Mt-te,xe=$t+(_t-te),P=st*Ut/Yt*zt,w=ut*Ut/Yt*zt;j.projectionMatrix.makePerspective(xt,xe,P,w,zt,Yt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function bt(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let rt=j.near,K=j.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(K=m.depthFar)),F.near=T.near=b.near=rt,F.far=T.far=b.far=K,(L!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,O=F.far),F.layers.mask=j.layers.mask|6,b.layers.mask=F.layers.mask&-5,T.layers.mask=F.layers.mask&-3;const _t=j.parent,At=F.cameras;bt(F,_t);for(let St=0;St<At.length;St++)bt(At[St],_t);At.length===2?ft(F,b,T):F.projectionMatrix.copy(b.projectionMatrix),It(j,F,_t)};function It(j,rt,K){K===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(K.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ec*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return f[j]};let Vt=null;function pt(j,rt){if(h=rt.getViewerPose(c||o),x=rt,h!==null){const K=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let _t=!1;K.length!==F.cameras.length&&(F.cameras.length=0,_t=!0);for(let Ut=0;Ut<K.length;Ut++){const st=K[Ut];let ut=null;if(p!==null)ut=p.getViewport(st);else{const Rt=u.getViewSubImage(d,st);ut=Rt.viewport,Ut===0&&(t.setRenderTargetTextures(y,Rt.colorTexture,Rt.depthStencilTexture),t.setRenderTarget(y))}let at=A[Ut];at===void 0&&(at=new xn,at.layers.enable(Ut),at.viewport=new Ee,A[Ut]=at),at.matrix.fromArray(st.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(st.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ut.x,ut.y,ut.width,ut.height),Ut===0&&(F.matrix.copy(at.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),_t===!0&&F.cameras.push(at)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();const Ut=u.getDepthInformation(K[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,s.renderState)}if(At&&At.includes("camera-access")&&S){t.state.unbindTexture(),u=n.getBinding();for(let Ut=0;Ut<K.length;Ut++){const st=K[Ut].camera;if(st){let ut=f[st];ut||(ut=new yf,f[st]=ut);const at=u.getCameraImage(st);ut.sourceTexture=at}}}}for(let K=0;K<R.length;K++){const _t=v[K],At=R[K];_t!==null&&At!==void 0&&At.update(_t,rt,c||o)}Vt&&Vt(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),x=null}const Et=new Df;Et.setAnimationLoop(pt),this.setAnimationLoop=function(j){Vt=j},this.dispose=function(){}}}const Fy=new Jt,Vf=new re;Vf.set(-1,0,0,0,1,0,0,0,1);function Ly(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,kf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,_,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),_=M.envMap,y=M.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Iy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const y=_.program;n.uniformBlockBinding(M,y)}function c(M,_){let y=s[M.id];y===void 0&&(x(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(M,R);const v=t.render.frame;r[M.id]!==v&&(d(M),r[M.id]=v)}function h(M){const _=u();M.__bindingPointIndex=_;const y=i.createBuffer(),R=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let v=0,E=y.length;v<E;v++){const g=Array.isArray(y[v])?y[v]:[y[v]];for(let b=0,T=g.length;b<T;b++){const A=g[b];if(p(A,v,b,R)===!0){const F=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let O=0;for(let I=0;I<L.length;I++){const H=L[I],B=S(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+O,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):ArrayBuffer.isView(H)?A.__data.set(new H.constructor(H.buffer,H.byteOffset,A.__data.length)):(H.toArray(A.__data,O),O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,_,y,R){const v=M.value,E=_+"_"+y;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{const g=R[E];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(g.equals(v)===!1)return g.copy(v),!0}}return!1}function x(M){const _=M.uniforms;let y=0;const R=16;for(let E=0,g=_.length;E<g;E++){const b=Array.isArray(_[E])?_[E]:[_[E]];for(let T=0,A=b.length;T<A;T++){const F=b[T],L=Array.isArray(F.value)?F.value:[F.value];for(let O=0,I=L.length;O<I;O++){const H=L[O],B=S(H),et=y%R,nt=et%B.boundary,ft=et+nt;y+=nt,ft!==0&&R-ft<B.storage&&(y+=R-ft),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=B.storage}}}const v=y%R;return v>0&&(y+=R-v),M.__size=y,M.__cache={},this}function S(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}const Dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function Ny(){return Kn===null&&(Kn=new ya(Dy,16,16,bs,wi),Kn.name="DFG_LUT",Kn.minFilter=Ke,Kn.magFilter=Ke,Kn.wrapS=vi,Kn.wrapT=vi,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class Uy{constructor(t={}){const{canvas:e=w0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=En}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const S=p,m=new Set([$c,Xc,Wc]),f=new Set([En,ai,jr,Zr,Vc,Gc]),M=new Uint32Array(4),_=new Int32Array(4),y=new U;let R=null,v=null;const E=[],g=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let A=!1,F=null;this._outputColorSpace=Ze;let L=0,O=0,I=null,H=-1,B=null;const et=new Ee,nt=new Ee;let ft=null;const bt=new ne(0);let It=0,Vt=e.width,pt=e.height,Et=1,j=null,rt=null;const K=new Ee(0,0,Vt,pt),_t=new Ee(0,0,Vt,pt);let At=!1;const St=new th;let gt=!1,Ut=!1;const st=new Jt,ut=new U,at=new Ee,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function $t(){return I===null?Et:1}let N=n;function te(C,G){return e.getContext(C,G)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",ee,!1),N===null){const G="webgl2";if(N=te(G,C),N===null)throw te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw fe("WebGLRenderer: "+C.message),C}let zt,Yt,xt,xe,P,w,X,it,ct,z,J,W,$,ot,mt,lt,dt,qt,Kt,Qt,k,tt,Q;function wt(){zt=new Nv(N),zt.init(),k=new Ty(N,zt),Yt=new Cv(N,zt,t,k),xt=new Ey(N,zt),Yt.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),xe=new Bv(N),P=new dy,w=new Ay(N,zt,xt,P,Yt,k,xe),X=new Dv(T),it=new Gm(N),tt=new Av(N,it),ct=new Uv(N,it,xe,tt),z=new Hv(N,ct,it,tt,xe),qt=new zv(N,Yt,w),mt=new Rv(P),J=new hy(T,X,zt,Yt,tt,mt),W=new Ly(T,P),$=new fy,ot=new _y(zt),dt=new Ev(T,X,xt,z,x,l),lt=new Sy(T,z,Yt),Q=new Iy(N,xe,Yt,xt),Kt=new Tv(N,zt,xe),Qt=new Ov(N,zt,xe),xe.programs=J.programs,T.capabilities=Yt,T.extensions=zt,T.properties=P,T.renderLists=$,T.shadowMap=lt,T.state=xt,T.info=xe}wt(),S!==En&&(b=new Gv(S,e.width,e.height,s,r));const yt=new ky(T,N);this.xr=yt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=zt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=zt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(C){C!==void 0&&(Et=C,this.setSize(Vt,pt,!1))},this.getSize=function(C){return C.set(Vt,pt)},this.setSize=function(C,G,Z=!0){if(yt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=C,pt=G,e.width=Math.floor(C*Et),e.height=Math.floor(G*Et),Z===!0&&(e.style.width=C+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(Vt*Et,pt*Et).floor()},this.setDrawingBufferSize=function(C,G,Z){Vt=C,pt=G,Et=Z,e.width=Math.floor(C*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(S===En){fe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(et)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,G,Z,Y){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,G,Z,Y),xt.viewport(et.copy(K).multiplyScalar(Et).round())},this.getScissor=function(C){return C.copy(_t)},this.setScissor=function(C,G,Z,Y){C.isVector4?_t.set(C.x,C.y,C.z,C.w):_t.set(C,G,Z,Y),xt.scissor(nt.copy(_t).multiplyScalar(Et).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(C){xt.setScissorTest(At=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,Z=!0){let Y=0;if(C){let q=!1;if(I!==null){const Lt=I.texture.format;q=m.has(Lt)}if(q){const Lt=I.texture.type,Ht=f.has(Lt),Ft=dt.getClearColor(),Gt=dt.getClearAlpha(),Wt=Ft.r,oe=Ft.g,he=Ft.b;Ht?(M[0]=Wt,M[1]=oe,M[2]=he,M[3]=Gt,N.clearBufferuiv(N.COLOR,0,M)):(_[0]=Wt,_[1]=oe,_[2]=he,_[3]=Gt,N.clearBufferiv(N.COLOR,0,_))}else Y|=N.COLOR_BUFFER_BIT}G&&(Y|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),F=C},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),dt.dispose(),$.dispose(),ot.dispose(),P.dispose(),X.dispose(),z.dispose(),tt.dispose(),Q.dispose(),J.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",xr),yt.removeEventListener("sessionend",vr),qn.stop()};function ht(C){C.preventDefault(),Yh("WebGLRenderer: Context Lost."),A=!0}function Ot(){Yh("WebGLRenderer: Context Restored."),A=!1;const C=xe.autoReset,G=lt.enabled,Z=lt.autoUpdate,Y=lt.needsUpdate,q=lt.type;wt(),xe.autoReset=C,lt.enabled=G,lt.autoUpdate=Z,lt.needsUpdate=Y,lt.type=q}function ee(C){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ae(C){const G=C.target;G.removeEventListener("dispose",Ae),be(G)}function be(C){An(C),P.remove(C)}function An(C){const G=P.get(C).programs;G!==void 0&&(G.forEach(function(Z){J.releaseProgram(Z)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Z,Y,q,Lt){G===null&&(G=Rt);const Ht=q.isMesh&&q.matrixWorld.determinant()<0,Ft=cp(C,G,Z,Y,q);xt.setMaterial(Y,Ht);let Gt=Z.index,Wt=1;if(Y.wireframe===!0){if(Gt=ct.getWireframeAttribute(Z),Gt===void 0)return;Wt=2}const oe=Z.drawRange,he=Z.attributes.position;let Xt=oe.start*Wt,Te=(oe.start+oe.count)*Wt;Lt!==null&&(Xt=Math.max(Xt,Lt.start*Wt),Te=Math.min(Te,(Lt.start+Lt.count)*Wt)),Gt!==null?(Xt=Math.max(Xt,0),Te=Math.min(Te,Gt.count)):he!=null&&(Xt=Math.max(Xt,0),Te=Math.min(Te,he.count));const Ue=Te-Xt;if(Ue<0||Ue===1/0)return;tt.setup(q,Y,Ft,Z,Gt);let De,Ce=Kt;if(Gt!==null&&(De=it.get(Gt),Ce=Qt,Ce.setIndex(De)),q.isMesh)Y.wireframe===!0?(xt.setLineWidth(Y.wireframeLinewidth*$t()),Ce.setMode(N.LINES)):Ce.setMode(N.TRIANGLES);else if(q.isLine){let Qe=Y.linewidth;Qe===void 0&&(Qe=1),xt.setLineWidth(Qe*$t()),q.isLineSegments?Ce.setMode(N.LINES):q.isLineLoop?Ce.setMode(N.LINE_LOOP):Ce.setMode(N.LINE_STRIP)}else q.isPoints?Ce.setMode(N.POINTS):q.isSprite&&Ce.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qe=q._multiDrawStarts,Bt=q._multiDrawCounts,bn=q._multiDrawCount,me=Gt?it.get(Gt).bytesPerElement:1,Tn=P.get(Y).currentProgram.getUniforms();for(let jn=0;jn<bn;jn++)Tn.setValue(N,"_gl_DrawID",jn),Ce.render(Qe[jn]/me,Bt[jn])}else if(q.isInstancedMesh)Ce.renderInstances(Xt,Ue,q.count);else if(Z.isInstancedBufferGeometry){const Qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bt=Math.min(Z.instanceCount,Qe);Ce.renderInstances(Xt,Ue,Bt)}else Ce.render(Xt,Ue)};function _n(C,G,Z){C.transparent===!0&&C.side===Gn&&C.forceSinglePass===!1?(C.side=Je,C.needsUpdate=!0,lo(C,G,Z),C.side=Xi,C.needsUpdate=!0,lo(C,G,Z),C.side=Gn):lo(C,G,Z)}this.compile=function(C,G,Z=null){Z===null&&(Z=C),v=ot.get(Z),v.init(G),g.push(v),Z.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),C!==Z&&C.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const Y=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Lt=q.material;if(Lt)if(Array.isArray(Lt))for(let Ht=0;Ht<Lt.length;Ht++){const Ft=Lt[Ht];_n(Ft,Z,q),Y.add(Ft)}else _n(Lt,Z,q),Y.add(Lt)}),v=g.pop(),Y},this.compileAsync=function(C,G,Z=null){const Y=this.compile(C,G,Z);return new Promise(q=>{function Lt(){if(Y.forEach(function(Ht){P.get(Ht).currentProgram.isReady()&&Y.delete(Ht)}),Y.size===0){q(C);return}setTimeout(Lt,10)}zt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ps=null;function ao(C){Ps&&Ps(C)}function xr(){qn.stop()}function vr(){qn.start()}const qn=new Df;qn.setAnimationLoop(ao),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){Ps=C,yt.setAnimationLoop(C),C===null?qn.stop():qn.start()},yt.addEventListener("sessionstart",xr),yt.addEventListener("sessionend",vr),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;F!==null&&F.renderStart(C,G);const Z=yt.enabled===!0&&yt.isPresenting===!0,Y=b!==null&&(I===null||Z)&&b.begin(T,I);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(G),G=yt.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,G,I),v=ot.get(C,g.length),v.init(G),v.state.textureUnits=w.getTextureUnits(),g.push(v),st.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),St.setFromProjectionMatrix(st,ri,G.reversedDepth),Ut=this.localClippingEnabled,gt=mt.init(this.clippingPlanes,Ut),R=$.get(C,E.length),R.init(),E.push(R),yt.enabled===!0&&yt.isPresenting===!0){const Ht=T.xr.getDepthSensingMesh();Ht!==null&&ie(Ht,G,-1/0,T.sortObjects)}ie(C,G,0,T.sortObjects),R.finish(),T.sortObjects===!0&&R.sort(j,rt),Mt=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Mt&&dt.addToRenderList(R,C),this.info.render.frame++,gt===!0&&mt.beginShadows();const q=v.state.shadowsArray;if(lt.render(q,C,G),gt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&b.hasRenderPass())===!1){const Ht=R.opaque,Ft=R.transmissive;if(v.setupLights(),G.isArrayCamera){const Gt=G.cameras;if(Ft.length>0)for(let Wt=0,oe=Gt.length;Wt<oe;Wt++){const he=Gt[Wt];yn(Ht,Ft,C,he)}Mt&&dt.render(C);for(let Wt=0,oe=Gt.length;Wt<oe;Wt++){const he=Gt[Wt];ve(R,C,he,he.viewport)}}else Ft.length>0&&yn(Ht,Ft,C,G),Mt&&dt.render(C),ve(R,C,G)}I!==null&&O===0&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),Y&&b.end(T),C.isScene===!0&&C.onAfterRender(T,C,G),tt.resetDefaultState(),H=-1,B=null,g.pop(),g.length>0?(v=g[g.length-1],w.setTextureUnits(v.state.textureUnits),gt===!0&&mt.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?R=E[E.length-1]:R=null,F!==null&&F.renderEnd()};function ie(C,G,Z,Y){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)v.pushLightProbeGrid(C);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||St.intersectsSprite(C)){Y&&at.setFromMatrixPosition(C.matrixWorld).applyMatrix4(st);const Ht=z.update(C),Ft=C.material;Ft.visible&&R.push(C,Ht,Ft,Z,at.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||St.intersectsObject(C))){const Ht=z.update(C),Ft=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),at.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),at.copy(Ht.boundingSphere.center)),at.applyMatrix4(C.matrixWorld).applyMatrix4(st)),Array.isArray(Ft)){const Gt=Ht.groups;for(let Wt=0,oe=Gt.length;Wt<oe;Wt++){const he=Gt[Wt],Xt=Ft[he.materialIndex];Xt&&Xt.visible&&R.push(C,Ht,Xt,Z,at.z,he)}}else Ft.visible&&R.push(C,Ht,Ft,Z,at.z,null)}}const Lt=C.children;for(let Ht=0,Ft=Lt.length;Ht<Ft;Ht++)ie(Lt[Ht],G,Z,Y)}function ve(C,G,Z,Y){const{opaque:q,transmissive:Lt,transparent:Ht}=C;v.setupLightsView(Z),gt===!0&&mt.setGlobalState(T.clippingPlanes,Z),Y&&xt.viewport(et.copy(Y)),q.length>0&&ci(q,G,Z),Lt.length>0&&ci(Lt,G,Z),Ht.length>0&&ci(Ht,G,Z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function yn(C,G,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[Y.id]===void 0){const Xt=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[Y.id]=new $n(1,1,{generateMipmaps:!0,type:Xt?wi:En,minFilter:ps,samples:Math.max(4,Yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace})}const Lt=v.state.transmissionRenderTarget[Y.id],Ht=Y.viewport||et;Lt.setSize(Ht.z*T.transmissionResolutionScale,Ht.w*T.transmissionResolutionScale);const Ft=T.getRenderTarget(),Gt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(Lt),T.getClearColor(bt),It=T.getClearAlpha(),It<1&&T.setClearColor(16777215,.5),T.clear(),Mt&&dt.render(Z);const oe=T.toneMapping;T.toneMapping=Xn;const he=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),v.setupLightsView(Y),gt===!0&&mt.setGlobalState(T.clippingPlanes,Y),ci(C,Z,Y),w.updateMultisampleRenderTarget(Lt),w.updateRenderTargetMipmap(Lt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Te=0,Ue=G.length;Te<Ue;Te++){const De=G[Te],{object:Ce,geometry:Qe,material:Bt,group:bn}=De;if(Bt.side===Gn&&Ce.layers.test(Y.layers)){const me=Bt.side;Bt.side=Je,Bt.needsUpdate=!0,Mh(Ce,Z,Y,Qe,Bt,bn),Bt.side=me,Bt.needsUpdate=!0,Xt=!0}}Xt===!0&&(w.updateMultisampleRenderTarget(Lt),w.updateRenderTargetMipmap(Lt))}T.setRenderTarget(Ft,Gt,Wt),T.setClearColor(bt,It),he!==void 0&&(Y.viewport=he),T.toneMapping=oe}function ci(C,G,Z){const Y=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Lt=C.length;q<Lt;q++){const Ht=C[q],{object:Ft,geometry:Gt,group:Wt}=Ht;let oe=Ht.material;oe.allowOverride===!0&&Y!==null&&(oe=Y),Ft.layers.test(Z.layers)&&Mh(Ft,G,Z,Gt,oe,Wt)}}function Mh(C,G,Z,Y,q,Lt){C.onBeforeRender(T,G,Z,Y,q,Lt),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(T,G,Z,Y,C,Lt),q.transparent===!0&&q.side===Gn&&q.forceSinglePass===!1?(q.side=Je,q.needsUpdate=!0,T.renderBufferDirect(Z,G,Y,q,C,Lt),q.side=Xi,q.needsUpdate=!0,T.renderBufferDirect(Z,G,Y,q,C,Lt),q.side=Gn):T.renderBufferDirect(Z,G,Y,q,C,Lt),C.onAfterRender(T,G,Z,Y,q,Lt)}function lo(C,G,Z){G.isScene!==!0&&(G=Rt);const Y=P.get(C),q=v.state.lights,Lt=v.state.shadowsArray,Ht=q.state.version,Ft=J.getParameters(C,q.state,Lt,G,Z,v.state.lightProbeGridArray),Gt=J.getProgramCacheKey(Ft);let Wt=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;const oe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=X.get(C.envMap||Y.environment,oe),Y.envMapRotation=Y.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",Ae),Wt=new Map,Y.programs=Wt);let he=Wt.get(Gt);if(he!==void 0){if(Y.currentProgram===he&&Y.lightsStateVersion===Ht)return Sh(C,Ft),he}else Ft.uniforms=J.getUniforms(C),F!==null&&C.isNodeMaterial&&F.build(C,Z,Ft),C.onBeforeCompile(Ft,T),he=J.acquireProgram(Ft,Gt),Wt.set(Gt,he),Y.uniforms=Ft.uniforms;const Xt=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xt.clippingPlanes=mt.uniform),Sh(C,Ft),Y.needsLights=dp(C),Y.lightsStateVersion=Ht,Y.needsLights&&(Xt.ambientLightColor.value=q.state.ambient,Xt.lightProbe.value=q.state.probe,Xt.directionalLights.value=q.state.directional,Xt.directionalLightShadows.value=q.state.directionalShadow,Xt.spotLights.value=q.state.spot,Xt.spotLightShadows.value=q.state.spotShadow,Xt.rectAreaLights.value=q.state.rectArea,Xt.ltc_1.value=q.state.rectAreaLTC1,Xt.ltc_2.value=q.state.rectAreaLTC2,Xt.pointLights.value=q.state.point,Xt.pointLightShadows.value=q.state.pointShadow,Xt.hemisphereLights.value=q.state.hemi,Xt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xt.spotLightMatrix.value=q.state.spotLightMatrix,Xt.spotLightMap.value=q.state.spotLightMap,Xt.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=v.state.lightProbeGridArray.length>0,Y.currentProgram=he,Y.uniformsList=null,he}function wh(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=na.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Sh(C,G){const Z=P.get(C);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function lp(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(G.matrixWorld);for(let Z=0,Y=C.length;Z<Y;Z++){const q=C[Z];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function cp(C,G,Z,Y,q){G.isScene!==!0&&(G=Rt),w.resetTextureUnits();const Lt=G.fog,Ht=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,Ft=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:pe.workingColorSpace,Gt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=X.get(Y.envMap||Ht,Gt),oe=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,he=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Xt=!!Z.morphAttributes.position,Te=!!Z.morphAttributes.normal,Ue=!!Z.morphAttributes.color;let De=Xn;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(De=T.toneMapping);const Ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qe=Ce!==void 0?Ce.length:0,Bt=P.get(Y),bn=v.state.lights;if(gt===!0&&(Ut===!0||C!==B)){const Pe=C===B&&Y.id===H;mt.setState(Y,C,Pe)}let me=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==bn.state.version||Bt.outputColorSpace!==Ft||q.isBatchedMesh&&Bt.batching===!1||!q.isBatchedMesh&&Bt.batching===!0||q.isBatchedMesh&&Bt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Bt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Bt.instancing===!1||!q.isInstancedMesh&&Bt.instancing===!0||q.isSkinnedMesh&&Bt.skinning===!1||!q.isSkinnedMesh&&Bt.skinning===!0||q.isInstancedMesh&&Bt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Bt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Bt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Bt.instancingMorph===!1&&q.morphTexture!==null||Bt.envMap!==Wt||Y.fog===!0&&Bt.fog!==Lt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==mt.numPlanes||Bt.numIntersection!==mt.numIntersection)||Bt.vertexAlphas!==oe||Bt.vertexTangents!==he||Bt.morphTargets!==Xt||Bt.morphNormals!==Te||Bt.morphColors!==Ue||Bt.toneMapping!==De||Bt.morphTargetsCount!==Qe||!!Bt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Bt.__version=Y.version);let Tn=Bt.currentProgram;me===!0&&(Tn=lo(Y,G,q),F&&Y.isNodeMaterial&&F.onUpdateProgram(Y,Tn,Bt));let jn=!1,Ti=!1,ks=!1;const Re=Tn.getUniforms(),Oe=Bt.uniforms;if(xt.useProgram(Tn.program)&&(jn=!0,Ti=!0,ks=!0),Y.id!==H&&(H=Y.id,Ti=!0),Bt.needsLights){const Pe=lp(v.state.lightProbeGridArray,q);Bt.lightProbeGrid!==Pe&&(Bt.lightProbeGrid=Pe,Ti=!0)}if(jn||B!==C){xt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Re.setValue(N,"projectionMatrix",C.projectionMatrix),Re.setValue(N,"viewMatrix",C.matrixWorldInverse);const Ri=Re.map.cameraPosition;Ri!==void 0&&Ri.setValue(N,ut.setFromMatrixPosition(C.matrixWorld)),Yt.logarithmicDepthBuffer&&Re.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Re.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,Ti=!0,ks=!0)}if(Bt.needsLights&&(bn.state.directionalShadowMap.length>0&&Re.setValue(N,"directionalShadowMap",bn.state.directionalShadowMap,w),bn.state.spotShadowMap.length>0&&Re.setValue(N,"spotShadowMap",bn.state.spotShadowMap,w),bn.state.pointShadowMap.length>0&&Re.setValue(N,"pointShadowMap",bn.state.pointShadowMap,w)),q.isSkinnedMesh){Re.setOptional(N,q,"bindMatrix"),Re.setOptional(N,q,"bindMatrixInverse");const Pe=q.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Re.setValue(N,"boneTexture",Pe.boneTexture,w))}q.isBatchedMesh&&(Re.setOptional(N,q,"batchingTexture"),Re.setValue(N,"batchingTexture",q._matricesTexture,w),Re.setOptional(N,q,"batchingIdTexture"),Re.setValue(N,"batchingIdTexture",q._indirectTexture,w),Re.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&Re.setValue(N,"batchingColorTexture",q._colorsTexture,w));const Ci=Z.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&qt.update(q,Z,Tn),(Ti||Bt.receiveShadow!==q.receiveShadow)&&(Bt.receiveShadow=q.receiveShadow,Re.setValue(N,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(Oe.envMapIntensity.value=G.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Ny()),Ti){if(Re.setValue(N,"toneMappingExposure",T.toneMappingExposure),Bt.needsLights&&hp(Oe,ks),Lt&&Y.fog===!0&&W.refreshFogUniforms(Oe,Lt),W.refreshMaterialUniforms(Oe,Y,Et,pt,v.state.transmissionRenderTarget[C.id]),Bt.needsLights&&Bt.lightProbeGrid){const Pe=Bt.lightProbeGrid;Oe.probesSH.value=Pe.texture,Oe.probesMin.value.copy(Pe.boundingBox.min),Oe.probesMax.value.copy(Pe.boundingBox.max),Oe.probesResolution.value.copy(Pe.resolution)}na.upload(N,wh(Bt),Oe,w)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(na.upload(N,wh(Bt),Oe,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Re.setValue(N,"center",q.center),Re.setValue(N,"modelViewMatrix",q.modelViewMatrix),Re.setValue(N,"normalMatrix",q.normalMatrix),Re.setValue(N,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){const Pe=Y.uniformsGroups;for(let Ri=0,Fs=Pe.length;Ri<Fs;Ri++){const Eh=Pe[Ri];Q.update(Eh,Tn),Q.bind(Eh,Tn)}}return Tn}function hp(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function dp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,G,Z){const Y=P.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),P.get(C.texture).__webglTexture=G,P.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const Z=P.get(C);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const up=N.createFramebuffer();this.setRenderTarget=function(C,G=0,Z=0){I=C,L=G,O=Z;let Y=null,q=!1,Lt=!1;if(C){const Ft=P.get(C);if(Ft.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(N.FRAMEBUFFER,Ft.__webglFramebuffer),et.copy(C.viewport),nt.copy(C.scissor),ft=C.scissorTest,xt.viewport(et),xt.scissor(nt),xt.setScissorTest(ft),H=-1;return}else if(Ft.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Ft.__hasExternalTextures)w.rebindTextures(C,P.get(C.texture).__webglTexture,P.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const oe=C.depthTexture;if(Ft.__boundDepthTexture!==oe){if(oe!==null&&P.has(oe)&&(C.width!==oe.image.width||C.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Lt=!0);const Wt=P.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[G])?Y=Wt[G][Z]:Y=Wt[G],q=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?Y=P.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[Z]:Y=Wt,et.copy(C.viewport),nt.copy(C.scissor),ft=C.scissorTest}else et.copy(K).multiplyScalar(Et).floor(),nt.copy(_t).multiplyScalar(Et).floor(),ft=At;if(Z!==0&&(Y=up),xt.bindFramebuffer(N.FRAMEBUFFER,Y)&&xt.drawBuffers(C,Y),xt.viewport(et),xt.scissor(nt),xt.setScissorTest(ft),q){const Ft=P.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ft.__webglTexture,Z)}else if(Lt){const Ft=G;for(let Gt=0;Gt<C.textures.length;Gt++){const Wt=P.get(C.textures[Gt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,Z,Ft)}}else if(C!==null&&Z!==0){const Ft=P.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ft.__webglTexture,Z)}H=-1},this.readRenderTargetPixels=function(C,G,Z,Y,q,Lt,Ht,Ft=0){if(!(C&&C.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Gt=Gt[Ht]),Gt){xt.bindFramebuffer(N.FRAMEBUFFER,Gt);try{const Wt=C.textures[Ft],oe=Wt.format,he=Wt.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ft),!Yt.textureFormatReadable(oe)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(he)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Y&&Z>=0&&Z<=C.height-q&&N.readPixels(G,Z,Y,q,k.convert(oe),k.convert(he),Lt)}finally{const Wt=I!==null?P.get(I).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,G,Z,Y,q,Lt,Ht,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Gt=Gt[Ht]),Gt)if(G>=0&&G<=C.width-Y&&Z>=0&&Z<=C.height-q){xt.bindFramebuffer(N.FRAMEBUFFER,Gt);const Wt=C.textures[Ft],oe=Wt.format,he=Wt.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ft),!Yt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xt),N.bufferData(N.PIXEL_PACK_BUFFER,Lt.byteLength,N.STREAM_READ),N.readPixels(G,Z,Y,q,k.convert(oe),k.convert(he),0);const Te=I!==null?P.get(I).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,Te);const Ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await S0(N,Ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Lt),N.deleteBuffer(Xt),N.deleteSync(Ue),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,Z=0){const Y=Math.pow(2,-Z),q=Math.floor(C.image.width*Y),Lt=Math.floor(C.image.height*Y),Ht=G!==null?G.x:0,Ft=G!==null?G.y:0;w.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Ht,Ft,q,Lt),xt.unbindTexture()};const fp=N.createFramebuffer(),pp=N.createFramebuffer();this.copyTextureToTexture=function(C,G,Z=null,Y=null,q=0,Lt=0){let Ht,Ft,Gt,Wt,oe,he,Xt,Te,Ue;const De=C.isCompressedTexture?C.mipmaps[Lt]:C.image;if(Z!==null)Ht=Z.max.x-Z.min.x,Ft=Z.max.y-Z.min.y,Gt=Z.isBox3?Z.max.z-Z.min.z:1,Wt=Z.min.x,oe=Z.min.y,he=Z.isBox3?Z.min.z:0;else{const Oe=Math.pow(2,-q);Ht=Math.floor(De.width*Oe),Ft=Math.floor(De.height*Oe),C.isDataArrayTexture?Gt=De.depth:C.isData3DTexture?Gt=Math.floor(De.depth*Oe):Gt=1,Wt=0,oe=0,he=0}Y!==null?(Xt=Y.x,Te=Y.y,Ue=Y.z):(Xt=0,Te=0,Ue=0);const Ce=k.convert(G.format),Qe=k.convert(G.type);let Bt;G.isData3DTexture?(w.setTexture3D(G,0),Bt=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(w.setTexture2DArray(G,0),Bt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(G,0),Bt=N.TEXTURE_2D),xt.activeTexture(N.TEXTURE0),xt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),xt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),xt.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const bn=xt.getParameter(N.UNPACK_ROW_LENGTH),me=xt.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=xt.getParameter(N.UNPACK_SKIP_PIXELS),jn=xt.getParameter(N.UNPACK_SKIP_ROWS),Ti=xt.getParameter(N.UNPACK_SKIP_IMAGES);xt.pixelStorei(N.UNPACK_ROW_LENGTH,De.width),xt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,De.height),xt.pixelStorei(N.UNPACK_SKIP_PIXELS,Wt),xt.pixelStorei(N.UNPACK_SKIP_ROWS,oe),xt.pixelStorei(N.UNPACK_SKIP_IMAGES,he);const ks=C.isDataArrayTexture||C.isData3DTexture,Re=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const Oe=P.get(C),Ci=P.get(G),Pe=P.get(Oe.__renderTarget),Ri=P.get(Ci.__renderTarget);xt.bindFramebuffer(N.READ_FRAMEBUFFER,Pe.__webglFramebuffer),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Fs=0;Fs<Gt;Fs++)ks&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(C).__webglTexture,q,he+Fs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(G).__webglTexture,Lt,Ue+Fs)),N.blitFramebuffer(Wt,oe,Ht,Ft,Xt,Te,Ht,Ft,N.DEPTH_BUFFER_BIT,N.NEAREST);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||P.has(C)){const Oe=P.get(C),Ci=P.get(G);xt.bindFramebuffer(N.READ_FRAMEBUFFER,fp),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,pp);for(let Pe=0;Pe<Gt;Pe++)ks?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.__webglTexture,q,he+Pe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oe.__webglTexture,q),Re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ci.__webglTexture,Lt,Ue+Pe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ci.__webglTexture,Lt),q!==0?N.blitFramebuffer(Wt,oe,Ht,Ft,Xt,Te,Ht,Ft,N.COLOR_BUFFER_BIT,N.NEAREST):Re?N.copyTexSubImage3D(Bt,Lt,Xt,Te,Ue+Pe,Wt,oe,Ht,Ft):N.copyTexSubImage2D(Bt,Lt,Xt,Te,Wt,oe,Ht,Ft);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Re?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Bt,Lt,Xt,Te,Ue,Ht,Ft,Gt,Ce,Qe,De.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Bt,Lt,Xt,Te,Ue,Ht,Ft,Gt,Ce,De.data):N.texSubImage3D(Bt,Lt,Xt,Te,Ue,Ht,Ft,Gt,Ce,Qe,De):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Lt,Xt,Te,Ht,Ft,Ce,Qe,De.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Lt,Xt,Te,De.width,De.height,Ce,De.data):N.texSubImage2D(N.TEXTURE_2D,Lt,Xt,Te,Ht,Ft,Ce,Qe,De);xt.pixelStorei(N.UNPACK_ROW_LENGTH,bn),xt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me),xt.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),xt.pixelStorei(N.UNPACK_SKIP_ROWS,jn),xt.pixelStorei(N.UNPACK_SKIP_IMAGES,Ti),Lt===0&&G.generateMipmaps&&N.generateMipmap(Bt),xt.unbindTexture()},this.initRenderTarget=function(C){P.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),xt.unbindTexture()},this.resetState=function(){L=0,O=0,I=null,xt.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const Jn=(i,t)=>Math.sign(i)*Math.abs(i)**t,ir=(i,t,e={})=>({...i,a:i.a+t,b:i.b+t,c:i.c+t,...e});function Oy(i,t,e,n=Math.PI){const s=new Un(1,t,e,0,Math.PI*2,0,n),r=s.attributes.position,o=s.attributes.normal;for(let a=0;a<r.count;a++){const l=r.getX(a),c=r.getY(a),h=r.getZ(a),u=Math.asin(Math.max(-1,Math.min(1,c))),d=Math.atan2(h,l),p=Math.cos(u),x=Math.sin(u),S=Math.cos(d),m=Math.sin(d);r.setXYZ(a,i.a*Jn(p,i.e1)*Jn(S,i.e2),i.b*Jn(x,i.e1),i.c*Jn(p,i.e1)*Jn(m,i.e2));const f=Jn(p,2-i.e1)*Jn(S,2-i.e2)/i.a,M=Jn(x,2-i.e1)/i.b,_=Jn(p,2-i.e1)*Jn(m,2-i.e2)/i.c,y=Math.hypot(f,M,_)||1;o.setXYZ(a,f/y,M/y,_/y)}return s}function eo(i,t,e){const n=1-Math.min(1,Math.abs(e/i.b))**(2/i.e1);if(n<=0)return 0;const s=n**(i.e1/i.e2)-Math.min(1,Math.abs(t/i.a))**(2/i.e2);return s<=0?0:i.c*s**(i.e2/2)}const By=(i,t,e)=>-Math.atan((eo(i,t+.02,e)-eo(i,t-.02,e))/.04),zy=(i,t,e)=>Math.atan((eo(i,t,e+.02)-eo(i,t,e-.02))/.04),ah=["none","clouds","hearts","hibiscus","plaid","stars"],Hy=[{seg:20,rings:14,round:16},{seg:12,rings:8,round:7},{seg:8,rings:6,round:6}],Vy=new Jt,eu=new Yi;class Gy{constructor(t,e,n){D(this,"items",[]);this.d=t,this.rig=e,this.lod=n}add(t,e,n,s=[0,0,0],r=[0,0,0],o=[1,1,1]){return eu.setFromEuler(new $i(...r)),t.applyMatrix4(Vy.compose(new U(...s),eu,new U(...o))),this.items.push({geo:t,bone:e,paint:n}),t}blob(t,e,n,s,r,o){return this.add(Oy(t,this.lod.seg,this.lod.rings,o),e,n,s,r)}sphere(t,e,n,s,r){return this.add(new Un(t,Math.max(6,this.lod.seg-4),Math.max(4,this.lod.rings-2)),e,n,s,void 0,r)}cyl(t,e,n,s,r,o,a,l=!1){return this.add(new mr(t,e,n,this.lod.round,1,l),s,r,o,a)}cone(t,e,n,s,r,o,a){return this.add(new ba(t,e,this.lod.round),n,s,r,o,a)}torus(t,e,n,s,r,o,a=Math.PI*2){return this.add(new ro(t,e,Math.max(4,this.lod.round/2),this.lod.round*2,a),n,s,r,o)}box(t,e,n,s,r,o,a){return this.add(new un(t,e,n),s,r,o,a)}tube(t,e,n,s,r){const o=r(t.map(a=>new U(...a)));return this.add(new oh(o,this.lod.round*2,e,Math.max(5,this.lod.round/2)),n,s)}onFace(t,e,n,s,r,o,a,l=0,c=0){const h=eo(t,o,a)+l;return this.add(n,s,{outline:0,...r},[e[0]+o,e[1]+a,e[2]+h],[-zy(t,o,a),By(t,o,a),c])}}const nu=i=>new ne(i),Qn=128;function Wy(){const i=document.createElement("canvas");i.width=Qn*ah.length,i.height=Qn;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,i.width,i.height),t.fillStyle="#fff",t.strokeStyle="#fff";const e=(r,o)=>{t.save(),t.beginPath(),t.rect(r*Qn,0,Qn,Qn),t.clip(),t.translate(r*Qn,0),o(),t.restore()},n=(r,o,a)=>{t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill()};e(1,()=>{for(const[r,o]of[[30,40],[95,95]])n(r,o,14),n(r+16,o-6,16),n(r+32,o,13),t.fillRect(r,o,32,12)}),e(2,()=>{const r=(o,a,l)=>{t.beginPath(),t.moveTo(o,a+l*.9),t.bezierCurveTo(o-l*1.2,a+l*.1,o-l*.6,a-l*.8,o,a-l*.2),t.bezierCurveTo(o+l*.6,a-l*.8,o+l*1.2,a+l*.1,o,a+l*.9),t.fill()};r(32,36,16),r(96,96,16)}),e(3,()=>{for(const[r,o]of[[36,38],[98,94]])for(let a=0;a<5;a++)n(r+Math.cos(a/5*Math.PI*2)*13,o+Math.sin(a/5*Math.PI*2)*13,10)}),e(4,()=>{t.globalAlpha=.6;for(const r of[16,80])t.fillRect(r,0,22,Qn),t.fillRect(0,r,Qn,22);t.globalAlpha=1;for(const r of[24,88])t.fillRect(r,0,5,Qn),t.fillRect(0,r,Qn,5)}),e(5,()=>{const r=(o,a,l)=>{t.beginPath();for(let c=0;c<10;c++){const h=c/10*Math.PI*2-Math.PI/2,u=c%2?l*.45:l;t.lineTo(o+Math.cos(h)*u,a+Math.sin(h)*u)}t.fill()};r(32,36,14),r(96,96,12),r(90,24,6)});const s=new so(i);return s.colorSpace=xi,s.minFilter=s.magFilter=Ke,s.generateMipmaps=!1,s}let es=null;function Ai(){return es||(es=new ya(new Uint8Array([140,191,230,255]),4,1,va),es.minFilter=es.magFilter=$e,es.needsUpdate=!0,es)}let xl=null,iu=null;function Xy(){if(xl)return xl;iu=Wy();const i=new Ei({color:16777215,vertexColors:!0,gradientMap:Ai()});return i.onBeforeCompile=t=>{t.uniforms.uPatAtlas={value:iu},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
          vec2 tuv = vec2((vPat.x + fract(vPatUv.x * vPat.y)) / ${ah.length.toFixed(1)}, fract(vPatUv.y * vPat.y * 0.5));
          float mask = texture2D(uPatAtlas, tuv).r;
          diffuseColor.rgb = mix(diffuseColor.rgb, vColor2, mask);
        }`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, diffuseColor.rgb, vPat.z);`)},i.customProgramCacheKey=()=>"peepl-char-v1",xl=i,i}const $y=`
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
}`,Yy=`
uniform vec3 uColor;
void main() { gl_FragColor = vec4(uColor, 1.0); }`,kc={uWidthPx:{value:2},uViewport:{value:new Tt(1920,1080)},uColor:{value:new ne(1118481).convertLinearToSRGB()}};let No=null;function qy(){return No||(No=new fn({uniforms:kc,vertexShader:$y,fragmentShader:Yy,side:Je}),No)}let qe=null,lh=!1;const su=new Tt;function ch(){const i=navigator.deviceMemory;return lh||i!==void 0&&i<=4}function vl(){return vn||ch()}function ru(){const i=navigator.deviceMemory;return Math.min(devicePixelRatio||1,lh||i!==void 0&&i<=4?1.5:2)}function Fc(){qe&&(qe.setPixelRatio(ru()),qe.setSize(innerWidth,innerHeight,!1),qe.getDrawingBufferSize(su),kc.uViewport.value.copy(su),kc.uWidthPx.value=Math.min(3,Math.max(1.5,2*ru()*Math.max(.75,ga()))))}function ur(i={}){if(qe)return qe;lh=!!i.lowgpu;const t=document.getElementById("gl");return qe=new Uy({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:!1}),qe.outputColorSpace=Ze,qe.toneMapping=Xn,qe.setClearColor(0,0),qe.shadowMap.type=Ku,qe.info.autoReset=!1,addEventListener("resize",Fc),Fc(),qe}function fr(i){const t=document.getElementById("gl");t.style.display=i?"block":"none",t.style.pointerEvents=i?"auto":"none";const e=document.getElementById("hud3d");e.style.background=i&&ch()?"radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(17,17,17,0.22))":"",i&&Fc()}const da={calls:0,tris:0};function hh(){qe&&(da.calls=qe.info.render.calls,da.tris=qe.info.render.triangles,qe.info.reset())}function jy(i){const{flow:t,loop:e,store:n,autoplay:s}=i;return{ready:i.ready,state:()=>{var r;return{screen:t.id??"S0",t:t.t,sim:((r=Ct.sim)==null?void 0:r.call(Ct))??{day:1,time:"13:00",speed:n.data.settings.speed,tier:0,km:0,radius:0},trust:Number(n.data.progress.trust??0),released:!!n.data.progress.released,handshake:!!n.data.progress.handshake,met:{},settings:{...n.data.settings},rigOk:In.rigOk}},go(r,o){return Zu(r)?(In.sub=(o==null?void 0:o.sub)??null,t.go(r)):Promise.reject(new Error(`unknown screen ${r}`))},replay:()=>{var r;(r=Ct.replaySetpiece)!=null&&r.call(Ct)||t.replay()},advance(r,o=!0){return e.advance(r,o),Promise.resolve()},pause:()=>e.paused=!0,resume:()=>e.paused=!1,tap:()=>{s.tap()||t.input({type:"tap"})},choose:r=>{var o,a;return(a=(o=t.current)==null?void 0:o.choose)==null?void 0:a.call(o,r)},release(){Object.assign(n.data.progress,{trust:100,released:!0}),n.save(),t.go("S6")},set(r,o){var a;n.setSetting(r,o),r==="outline"&&((a=Ct.outline)==null||a.call(Ct,o!=="none"))},reset(){n.reset();const r=new URLSearchParams(location.search);r.delete("screen"),r.delete("t");const o=r.toString();location.replace(`${location.pathname}${o?`?${o}`:""}`)},stats:()=>({fps:e.fps,calls:da.calls,tris:da.tris,textures:0,chars:In.chars,lod:In.lod}),cast:r=>{var o;return(o=Ct.cast)==null?void 0:o.call(Ct,r)},shape:(r,o)=>{var a;return(a=Ct.shape)==null?void 0:a.call(Ct,r,o)},viewer:Ct,setTime:(r,o)=>{var a;return(a=Ct.setTime)==null?void 0:a.call(Ct,r,o)},tick:r=>{var o;return(o=Ct.tick)==null?void 0:o.call(Ct,r)},setSpeed:r=>n.setSetting("speed",r),setTier:r=>{var o;return(o=Ct.setTier)==null?void 0:o.call(Ct,r)},walk:r=>{var o;return(o=Ct.walk)==null?void 0:o.call(Ct,r)},moveYou:(r,o)=>{var a;return(a=Ct.moveYou)==null?void 0:a.call(Ct,r,o)},shot:r=>{var o;return(o=Ct.shot)==null?void 0:o.call(Ct,r)},follow:r=>{var o;return(o=Ct.follow)==null?void 0:o.call(Ct,r)},legibility:()=>{var r;return((r=Ct.legibility)==null?void 0:r.call(Ct))??{}},dropEvent:r=>{var o;return(o=Ct.dropEvent)==null?void 0:o.call(Ct,r)},mirror:r=>{var o;return((o=Ct.mirror)==null?void 0:o.call(Ct,r))??""}}}const Zy=[0,1,4,16,.25],Ky=[],Jy=`
#debug{height:40px;font-family:var(--face-pixel);font-size:22px;color:var(--white);pointer-events:none}
#debug .strip{display:flex;align-items:center;gap:8px;height:40px;padding:0 10px;background:var(--ink);pointer-events:auto;overflow-x:auto;white-space:nowrap}
#debug .strip > *{flex:none}
#debug button,#debug select{font:inherit;color:var(--white);background:var(--ink);border:2px solid var(--white);border-radius:999px;padding:1px 12px 3px;height:30px;line-height:22px}
#debug button[aria-pressed=true]{background:var(--white);color:var(--ink)}
#debug button:disabled{opacity:.4;cursor:default}
#debug .fps{min-width:70px}
#debug .collapsed{width:40px;height:40px;display:grid;place-items:center;background:var(--ink);pointer-events:auto;border:0;border-radius:0;padding:0}
`;function Qy(i,t,e,n,s){const r=V("div",{id:"debug"});r.append(V("style",{},Jy));const o=V("div",{class:"strip",role:"toolbar","aria-label":"director bar"}),a=V("button",{class:"collapsed","aria-label":"open director bar",title:"director bar (`)"});a.append(V("span",{style:"display:block;width:10px;height:18px;background:var(--white)"})),r.append(o,a),document.body.append(r);const l=ia.map(b=>b.id),c=b=>{const T=l.indexOf(i.state().screen);i.go(l[(T+b+l.length)%l.length])},h=V("select",{"aria-label":"screen"});for(const b of ia)if(h.append(V("option",{value:b.id},`${b.id} ${b.name}`)),b.id==="S8")for(const T of["contact","cafe","end"])h.append(V("option",{value:`S8:${T}`},`S8 · ${T}`));h.addEventListener("change",()=>{const[b,T]=h.value.split(":");i.go(b,T?{sub:T}:void 0)});const u=(b,T,A)=>{const F=V("button",{title:A});return F.textContent=b,F.addEventListener("click",T),F},d=(b,T,A)=>{const F=u(b,()=>{A(!T()),g()});return p.push([F,T]),F},p=[],x=V("select",{"aria-label":"speed"});for(const b of Zy)x.append(V("option",{value:b},b===.25?"ui 0.25x":b===0?"pause":`${b}x`));x.addEventListener("change",()=>i.set("speed",Number(x.value)));const S=V("select",{"aria-label":"cast"});for(const b of n)S.append(V("option",{value:b},b));S.addEventListener("change",()=>i.cast(S.value));const m=u("--:--",()=>i.tick(3600),"sim time: +1 h (S8)"),f=(b,T,A,F)=>{const L=V("select",{"aria-label":b});for(const O of T)L.append(V("option",{value:O},`${b} ${O}`));return L.value=F(),L.addEventListener("change",()=>A(L.value)),L},M=f("tod",["auto","day","dusk"],b=>i.set("tod",b),()=>t.data.settings.tod),_=f("gfx",["auto","16bit","hd"],b=>i.set("gfx",b),()=>t.data.settings.gfx),y=u("walk +0.5 km",()=>i.walk(.5),"S8 only"),R=V("select",{"aria-label":"drop event"});R.append(V("option",{value:""},"event"));for(const b of s)R.append(V("option",{value:b},b));R.addEventListener("change",()=>{R.value&&i.dropEvent(R.value),R.value=""});const v=V("span",{class:"fps"});o.append(u("prev",()=>c(-1),"previous screen"),h,u("next",()=>c(1),"next screen"),u("replay",()=>i.replay()),d("auto",()=>t.data.settings.auto,b=>i.set("auto",b)),x,d("outline",()=>t.data.settings.outline!=="none",b=>i.set("outline",b?"ink":"none")),S,m,M,_,y,R,...Ky.map(([b,T])=>{const A=u(`${b} ${T}`,()=>{},`arrives in ${T}`);return A.disabled=!0,A}),d("reduce motion",()=>t.data.settings.reduceMotion,b=>i.set("reduceMotion",b)),v,u("reset",()=>{confirm(e)&&i.reset()}),u("×",()=>E(!0),"collapse (`)"));const E=b=>{t.setSetting("debugCollapsed",b),o.style.display=b?"none":"flex",a.style.display=b?"grid":"none"};a.addEventListener("click",()=>E(!1)),addEventListener("keydown",b=>{b.key==="`"&&E(!t.data.settings.debugCollapsed)}),E(t.data.settings.debugCollapsed);function g(){for(const[b,T]of p)b.setAttribute("aria-pressed",String(T()))}return g(),{update(){const b=i.state();h.value!==b.screen&&(h.value=b.screen),Number(x.value)!==t.data.settings.speed&&(x.value=String(t.data.settings.speed)),v.textContent=`${Math.round(i.stats().fps)} fps`,m.textContent=b.screen==="S8"?b.sim.time:"--:--"}}}class t1{constructor(){D(this,"el",document.getElementById("field"));D(this,"dots",!1)}set(t,e){this.el.style.backgroundColor=`var(--${t})`,this.dots=e,this.el.style.backgroundImage=e?"radial-gradient(circle, var(--lit-dots) 3px, transparent 3.6px)":"none",this.el.style.backgroundSize=this.el.style.backgroundPosition=""}glow(t,e=0){this.dots=!1;const n=`color-mix(in srgb, var(--purple), var(--pink) ${Math.round(e*45)}%)`;this.el.style.backgroundImage=`radial-gradient(ellipse at 50% 55%, color-mix(in srgb, ${n} ${Math.round(t*100)}%, transparent), transparent 70%)`}update(t,e){if(!this.dots)return;const n=ga(),[s,r]=e?[0,0]:Ap(t);this.el.style.backgroundSize=`${48*n}px ${48*n}px`,this.el.style.backgroundPosition=`${s*n}px ${r*n}px`}}const e1=.18;class n1{constructor(){D(this,"el");D(this,"alpha",0);D(this,"target",0);D(this,"hideAt",1/0);D(this,"t",0);this.el=V("div",{class:"caption pixel",style:["position:absolute;left:50%;bottom:36px;transform:translateX(-50%);width:max-content;max-width:84%;text-align:center","background:var(--ink);color:var(--white);font-size:50px;padding:10px 26px 12px;border-radius:999px;opacity:0"].join(";")}),Ss("captions").append(this.el)}show(t,e){this.el.textContent=t,no(t),this.target=1,this.hideAt=e===void 0?1/0:this.t+e}hide(){this.target=0}clear(){this.target=0,this.alpha=0,this.render()}get visible(){return this.alpha>0}update(t){this.t+=t,this.t>=this.hideAt&&(this.target=0);const e=t/e1;this.alpha=this.target>this.alpha?Wi(this.alpha+e):Math.max(this.target,this.alpha-e),this.render()}render(){Nt(this.el,{opacity:String(this.alpha),visibility:this.alpha>0?"visible":"hidden"})}}class Rs{constructor(t,e,n){D(this,"shown",null);this.captions=t,this.texts=e,this.cues=n}update(t){const e=this.cues.find(s=>t>=s.at&&t<(s.until??1/0))??null,n=(e==null?void 0:e.key)??null;n!==this.shown&&(this.shown=n,n?this.captions.show(this.texts[n]??""):this.captions.hide())}}const ou="✓ ";class i1{constructor(){D(this,"el",null);D(this,"t",0);D(this,"until",0)}show(t,e=3){var r;(r=this.el)==null||r.remove();const n=t.startsWith(ou),s=n?t.slice(ou.length):t;this.el=dn(n?[or("check",34,"var(--yellow)"),s]:[s],{size:40,color:"yellow"}),this.el.classList.add("toast"),this.el.setAttribute("role","status"),this.el.setAttribute("aria-label",s),Nt(this.el,{position:"absolute",left:Be(1380,60),top:150,transformOrigin:"50% 0"}),Ss("toast").append(this.el),this.t=0,this.until=e,this.update(0)}hide(){var t;(t=this.el)==null||t.remove(),this.el=null}update(t){if(this.el){if(this.t+=t,this.t>=this.until){this.hide();return}this.el.style.transform=`scale(${le(this.t,0,.4,se.pop)})`}}}const s1=.5,r1=.5;function o1(i){const t=xs(i);let e,n,s=0,r=!1;const o=t.field==="ink"||t.field==="night";return{id:i,mount(a,l){e=a,n=V("div",{class:"placeholder",style:`position:absolute;left:0;top:0;width:1920px;height:1080px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;color:var(--${o?"white":"ink"})`},V("div",{class:"display",style:"font-size:220px"},i),V("div",{class:"pixel",style:"font-size:54px"},t.name)),l.append(n)},enter(){s=0,r=!1,this.update(0,0)},update(a,l){s=l,n.style.transform=`scale(${le(s,0,.45,se.pop)})`,!r&&t.caption&&s>=r1&&(r=!0,e.captions.show(e.copy.captions[t.caption]??""))},landed:()=>s>=s1,onInput(a){},exit(){},unmount(){n.remove()},seek(a){this.update(0,a)}}}const oo=i=>`/peepls-demo/${i}`;class Aa{constructor(t,e={}){D(this,"el");D(this,"img");D(this,"hgt",0);this.spec=t,this.img=V("img",{src:oo(t.body),alt:"",draggable:"false",style:"display:block;width:100%;height:100%"}),this.el=V("div",{class:"sprite",style:`position:absolute;transform-origin:${t.footX*100}% 100%`,...e},this.img)}get height(){return this.hgt}place(t,e,n){this.hgt=n;const s=n*this.spec.aspect;return Nt(this.el,{left:t-s*this.spec.footX,top:e-n,width:s,height:n}),this}pose(t){const e=t.phase??0,n=t.walk??0,s=-Math.abs(Math.sin(t.t*10+e))*this.hgt*.03*n,r=Math.sin(t.t*10+e)*3*n;Nt(this.el,{transform:`translateY(${s-(t.hop??0)}px) rotate(${r+(t.rot??0)}deg) scale(${t.scale??1}) scaleY(${Ep(t.t,e)*(t.squash??1)})`,opacity:String(t.opacity??1)})}}const a1=2,l1=.25;class c1{constructor(t,e,n,s=0){D(this,"el");this.at=n;const r=V("div",{style:"position:absolute;left:50%;bottom:-14px;width:20px;height:20px;margin-left:-10px;background:var(--white);border-right:5px solid var(--ink);border-bottom:5px solid var(--ink);transform:rotate(45deg)"}),o=V("div",{class:"pixel",style:`position:relative;background:var(--white);border:5px solid var(--ink);border-radius:16px;padding:6px 16px 8px;font-size:${Math.round(e*.075)}px;color:var(--ink);white-space:nowrap;margin-bottom:22px`},V("span",{},t),r);this.el=V("div",{class:"life-tag",style:`position:absolute;left:50%;bottom:${100+s*100}%;transform-origin:50% 100%`},o)}update(t,e){const[n,s]=Fe(t,this.at,.3,e),r=1-le(t,this.at+a1,l1,se.enter);Nt(this.el,{transform:`translateX(-50%) scale(${n})`,opacity:String(s*r),visibility:s*r>0?"visible":"hidden"})}}const Lc="stroke:var(--ink);stroke-width:9;stroke-linejoin:round;stroke-linecap:round",Ve=(i,t="")=>`fill:var(--${i});${Lc}${t}`,ue=(i,t,e,...n)=>ae(i,{...t,style:e},...n),Sn=(i,t,e)=>ue("path",{d:i},`fill:none;stroke:var(--${t});stroke-width:${e};stroke-linecap:round`);function h1(i,t){const e=ae("g",{});let n=()=>{};switch(i){case"coffee":{const r=[0,1].map(()=>Sn("","ink",6));e.append(...r,ue("path",{d:"M 338 652 L 408 652 L 399 746 L 347 746 Z"},Ve("white")),ue("rect",{x:342,y:680,width:62,height:30},Ve("pink",";stroke-width:6")),ue("rect",{x:330,y:630,width:86,height:24,rx:9},Ve("ink"))),n=o=>r.forEach((a,l)=>{const c=(o*.7+l*.5+t)%1;a.setAttribute("d",`M ${356+l*26} ${612-c*70} q 12 -16 0 -32 q -12 -16 0 -32`),a.style.opacity=String(Math.sin(c*Math.PI)*.8)});break}case"briefcase":{const r=ae("g",{},ue("path",{d:"M 40 756 q 0 -38 28 -38 q 28 0 28 38"},`fill:none;${Lc}`),ue("rect",{x:-4,y:752,width:144,height:100,rx:12},Ve("brown")),Sn("M -4 790 L 140 790","ink",6),ue("rect",{x:54,y:744,width:28,height:18,rx:4},Ve("yellow",";stroke-width:6")));e.append(r),n=(o,a)=>r.setAttribute("transform",`rotate(${Math.sin(o*10+t)*5*a} 68 722)`);break}case"balloon":{const r=ae("g",{},ue("path",{d:"M 362 736 C 430 600, 380 420, 480 232"},"fill:none;stroke:var(--ink);stroke-width:5"),ue("ellipse",{cx:480,cy:140,rx:66,ry:80},Ve("pink")),ue("path",{d:"M 468 226 L 492 226 L 480 208 Z"},Ve("pink",";stroke-width:6")),ue("ellipse",{cx:456,cy:104,rx:13,ry:22},"fill:var(--lit-white-85)"));e.append(r),n=o=>r.setAttribute("transform",`rotate(${Math.sin(o*1.8+t)*6} 362 736)`);break}case"flowers":e.append(Sn("M 344 640 L 350 560 M 380 640 L 388 534 M 408 640 L 426 570","lit-stem",9),ue("circle",{cx:346,cy:556,r:30},Ve("pink")),ue("circle",{cx:346,cy:556,r:9},"fill:var(--ink)"),ue("circle",{cx:388,cy:530,r:32},Ve("yellow")),ue("circle",{cx:388,cy:530,r:9},"fill:var(--ink)"),ue("circle",{cx:428,cy:566,r:28},Ve("cyan")),ue("circle",{cx:428,cy:566,r:8},"fill:var(--ink)"),ue("path",{d:"M 316 630 L 430 630 L 376 790 Z"},Ve("cream")));break;case"bag":e.append(ue("rect",{x:18,y:628,width:36,height:140,rx:18,transform:"rotate(-16 36 700)"},Ve("lit-baguette")),Sn("M 76 616 q -18 30 6 64 M 96 620 q 14 30 -8 62","lit-stem",9),ue("path",{d:"M 40 742 q 26 -40 52 0"},`fill:none;${Lc}`),ue("rect",{x:-20,y:730,width:170,height:150,rx:8},Ve("lit-cardboard")),Sn("M -20 762 L 150 762","ink",5));break;case"umbrella":{const r=ae("g",{},Sn("M 362 740 L 300 -40","ink",10),Sn("M 362 740 q 4 34 -24 34","ink",10),ue("path",{d:"M 50 -40 A 250 250 0 0 1 550 -40 Q 487 -76 425 -40 Q 362 -76 300 -40 Q 237 -76 175 -40 Q 112 -76 50 -40 Z"},Ve("cyan")),ue("path",{d:"M 300 -290 Q 240 -160 175 -40 M 300 -290 Q 360 -160 425 -40"},"fill:none;stroke:var(--ink);stroke-width:6"),ue("circle",{cx:300,cy:-296,r:11},"fill:var(--ink)"));e.append(r),n=o=>r.setAttribute("transform",`rotate(${Math.sin(o*2+t)*2} 362 736)`);break}case"headphones":{const r=ae("g",{},ue("path",{d:"M 0 40 L 0 -10 L 30 -18 L 30 30"},"fill:none;stroke:var(--ink);stroke-width:7"),ue("circle",{cx:-8,cy:40,r:11},"fill:var(--ink)"),ue("circle",{cx:22,cy:30,r:11},"fill:var(--ink)"));e.append(Sn("M 110 150 C 96 -50, 336 -50, 322 150","ink",24),Sn("M 110 150 C 96 -50, 336 -50, 322 150","pink",10),ue("rect",{x:84,y:108,width:52,height:92,rx:20},Ve("pink")),ue("rect",{x:296,y:108,width:52,height:92,rx:20},Ve("pink")),r),n=o=>{const a=(o*.9+t)%1;r.setAttribute("transform",`translate(${390+a*40} ${60-a*120})`),r.style.opacity=String(Math.sin(a*Math.PI))};break}case"dog":{const r=Sn("","ink",12),o=ae("g",{},Sn("M 476 975 q -34 -20 -26 -64","ink",12));e.append(Sn("M 362 742 Q 500 860 618 930","red",6),ue("ellipse",{cx:560,cy:1080,rx:110,ry:12},"fill:var(--ink)"),r,o,ue("ellipse",{cx:560,cy:995,rx:88,ry:48},Ve("white")),ue("circle",{cx:650,cy:930,r:46},Ve("white")),ue("ellipse",{cx:690,cy:950,rx:26,ry:18},Ve("white")),ue("circle",{cx:712,cy:942,r:9},"fill:var(--ink)"),ue("circle",{cx:660,cy:918,r:6},"fill:var(--ink)"),ue("path",{d:"M 626 900 q -34 8 -28 56 q 24 -4 34 -36 Z"},"fill:var(--ink)"),Sn("M 612 956 q 20 16 44 8","red",10)),n=(a,l)=>{const c=Math.sin(a*12+t)*10*l;r.setAttribute("d",`M 505 1030 L ${500+c} 1076 M 532 1034 L ${536-c} 1078 M 590 1034 L ${586+c} 1078 M 618 1030 L ${622-c} 1076`),o.setAttribute("transform",`rotate(${Math.sin(a*14)*14} 476 975)`)};break}}return{el:ae("svg",{viewBox:"0 0 425 1089",style:"position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none"},e),update:n}}function ua(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Gf(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const tr=(...i)=>Gf(ua(i.join("|"))),Gi=i=>{const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},_l={dur:6.4,px:900,parallax:.55},ti={from:6.5,to:7.55,cx:560,cy:560},d1=7.7,u1=8.5,au=8.95,f1=9.6,lu=9.4,cu=[{y:880,h:400},{y:1010,h:520}],hu=[150,1150,2150,3150],Uo=[{prop:"coffee",lane:0,x0:900,v:-100,ph:.8},{prop:"headphones",lane:0,x0:1500,v:-110,ph:.3},{prop:"dog",lane:1,x0:1150,v:120,ph:2.6},{prop:"umbrella",lane:0,x0:2300,v:-90,ph:1.1,lift:.3},{prop:"flowers",lane:1,x0:1750,v:150,ph:.2},{prop:"bag",lane:0,x0:1900,v:-120,ph:2.2},{prop:"briefcase",lane:0,x0:2700,v:-100,ph:1.7}],Rn={x0:620,v:150,stopAt:5.6,ph:.4,h:520,y:1010};function p1(i){const t=tr(i,"crowd","buildings"),e=["cream","pink","white","cyan"];let n=-220;return Array.from({length:9},(s,r)=>{const o=260+Math.round(t()*180),a=460+Math.round(t()*260),l=Math.max(1,Math.floor((o-40)/100)),c=Math.max(1,Math.floor((a-120)/116)),h=Array.from({length:l*c},(d,p)=>V("div",{style:`border:5px solid var(--ink);background:var(--${(r+p)%3?"white":"yellow"})`})),u=V("div",{style:[`position:absolute;left:${n}px;top:${820-a}px;width:${o}px;height:${a+20}px;background:var(--${e[r%4]})`,`border:6px solid var(--ink);display:grid;grid-template-columns:repeat(${l},56px);grid-auto-rows:72px`,"justify-content:space-evenly;align-content:start;row-gap:44px;padding-top:44px"].join(";")},...h);return n+=o+30,u})}function m1(){let i,t=!1,e=0,n,s,r,o,a=[],l=[],c,h,u,d=[],p,x,S,m,f=!1;const M=(_,y,R,v,E,g,b,T=0)=>{const A=new Aa(n,{class:"sprite joe"}).place(0,_.y,_.h),F=h1(y,b),L=new c1(R,_.h,v,T);return A.el.append(F.el,L.el),{sprite:A,prop:F,tag:L,x0:E,v:g,ph:b}};return{id:"S0",mount(_,y){i=_;const R=_.copy.S0;n=_.data.cast.cast.find(T=>T.id==="joe").sprite,m=new Rs(_.captions,_.copy.captions,[{key:"crowd1",at:.5,until:3.4},{key:"crowd2",at:3.6,until:6.5}]),r=V("div",{class:"city",style:"position:absolute;inset:0"},...p1(_.params.seed)),o=V("div",{style:`position:absolute;left:0;top:820px;width:1920px;height:${Be(260,700)}px;background-color:var(--cream);border-top:6px solid var(--ink);background-image:repeating-linear-gradient(90deg,var(--lit-joint) 0 5px,transparent 5px 180px)`}),l=Uo.map((T,A)=>{const[F,L]=R.tags[A];return M(cu[T.lane],T.prop,F,L,T.x0,T.v,T.ph,T.lift)});const[v,E]=R.tags[7];c=M({y:Rn.y,h:Rn.h},"balloon",v,E,Rn.x0,Rn.v,Rn.ph),c.sprite.el.classList.add("hero"),a=hu.map(()=>V("div",{style:"position:absolute;top:0;left:0"},V("div",{style:"position:absolute;left:-8px;top:360px;width:16px;height:545px;background:var(--ink)"}),V("div",{style:"position:absolute;left:-46px;top:326px;width:92px;height:46px;border-radius:24px;background:var(--yellow);border:6px solid var(--ink)"}))),s=V("div",{class:"s0-crowd",style:`position:absolute;left:0;top:0;width:1920px;height:${Be(1080,1500)}px;background:var(--yellow);overflow:hidden`},r,o,...l.filter((T,A)=>Uo[A].lane===0).map(T=>T.sprite.el),...a,...l.filter((T,A)=>Uo[A].lane===1).map(T=>T.sprite.el),c.sprite.el),h=ae("path",{"fill-rule":"evenodd",style:"fill:var(--ink)"}),u=ae("svg",{width:1920,height:1080,style:"position:absolute;inset:0;overflow:visible"},h),d=[...R.wordmark].map(T=>V("span",{class:"display",style:`display:inline-block;font-size:${Be(220,180)}px;line-height:0.9;color:var(--yellow);-webkit-text-stroke:7px var(--ink);paint-order:stroke fill;text-shadow:0 11px 0 var(--pink)`},T));const g=V("div",{id:"s0-wordmark",style:"display:flex;gap:2px"},...d);p=V("div",{class:"pixel s0-line1",style:"font-size:64px;color:var(--white);margin-top:30px"},R.line1),x=V("div",{class:"pixel s0-line2",style:"font-size:64px;color:var(--yellow)"},R.line2),S=V("div",{class:"pixel s0-sub",style:"font-size:36px;color:var(--lit-white-60)"},R.subline);const b=V("div",{class:"s0-title",style:"position:absolute;left:880px;width:900px;top:300px;display:flex;flex-direction:column;align-items:center;gap:22px"},g,p,x,S);ke(b,{left:90,top:1220}),Es(y,ti.cx,ti.cy,1.5,540,540),y.append(s,u,b)},enter(){t=i.flow.reduced,this.update(0,0)},update(_,y){e=y;const R=t?-900:-le(e,0,_l.dur,se.draw)*_l.px;r.style.transform=`translateX(${R*_l.parallax}px)`,o.style.backgroundPosition=`${R}px 0`,a.forEach((T,A)=>{const F=hu[A]+R;T.style.display=F<-100||F>2020?"none":"block",T.style.transform=`translateX(${F}px)`}),l.forEach((T,A)=>{const F=cu[Uo[A].lane],L=T.x0+T.v*e+R,O=L>-500&&L<2400;T.sprite.el.style.display=O?"block":"none",T.sprite.place(L,F.y,F.h).pose({t:e,phase:T.ph*3,walk:1}),T.prop.update(e,1),T.tag.update(e,t)});const v=e<5.3?1:Math.min(1,Math.max(0,(Rn.stopAt-e)/.3)),E=Rn.x0+Rn.v*Math.min(Math.max(e,0),Rn.stopAt)+R,g=t?0:rr(e,6.1,30,.38)+rr(e,8.3,46,.45);c.sprite.place(E,Rn.y,Rn.h).pose({t:e,phase:Rn.ph,walk:v,hop:g}),c.prop.update(e,v),c.tag.update(e,t);const b=t?1:14-13*le(e,ti.from,ti.to-ti.from,se.draw);u.style.display=!t&&b>13.5?"none":"block",u.style.opacity=t?String(le(e,ti.from,.25,se.enter)):"1",h.setAttribute("d",g1(ti.cx,ti.cy,b)),d.forEach((T,A)=>{const F=d1+A*.08,[L,O]=Fe(e,F,.5,t),I=t?0:-18+18*le(e,F,.5,se.pop),H=t?0:Math.sin(e*3+A*.7)*6;Nt(T,{transform:`translateY(${H}px) rotate(${I}deg) scale(${L})`,opacity:String(O)})}),e>=au&&!f&&(f=!0,no(`${i.copy.S0.wordmark}. ${i.copy.S0.line1} ${i.copy.S0.line2}`));for(const[T,A]of[[p,u1],[x,au],[S,f1]]){const[F,L]=Fe(e,A,.4,t);Nt(T,{transform:`scale(${F})`,opacity:String(L)})}m.update(e)},landed:()=>e>=lu,pillCta:!0,onInput(_){(_.type==="tap"||_.type==="key"&&(_.key===" "||_.key==="Enter"))&&(e<ti.from?i.flow.seek(ti.from):e>=lu&&i.flow.next())},exit(){},unmount(){},seek(_){this.update(0,_)}}}function g1(i,t,e){const n=150*e,s=70*e,r=130*e,o=t+Math.sqrt(n*n-s*s),a=t+420*e;return`M -2000 -2000 H 4000 V 3000 H -2000 Z M ${i-s} ${o} A ${n} ${n} 0 1 1 ${i+s} ${o} L ${i+r} ${a} L ${i-r} ${a} Z`}class dh{constructor(t){D(this,"el");D(this,"screen");D(this,"bezel");this.bezel=V("div",{"data-morph":"bezel",style:"position:absolute;inset:0;border-radius:72px;background:var(--ink);box-shadow:0 30px 60px var(--lit-phone-shadow)"}),this.screen=V("div",{"data-morph":"screen",style:"position:absolute;left:16px;top:16px;width:488px;height:948px;border-radius:56px;background:var(--cream);overflow:hidden"},V("div",{class:"pixel",style:"position:absolute;left:24px;top:18px;font-size:26px;color:var(--ink)"},t),V("div",{style:"position:absolute;left:174px;top:14px;width:140px;height:30px;border-radius:999px;background:var(--ink)"}),V("div",{style:"position:absolute;right:24px;top:20px;width:36px;height:18px;border-radius:5px;border:3px solid var(--ink);padding:2px"},V("div",{style:"width:70%;height:100%;background:var(--ink)"}))),this.el=V("div",{class:"phone",style:"position:absolute;left:700px;top:50px;width:520px;height:980px;transform-origin:260px 490px"},this.bezel,this.screen)}set(t,e){Nt(this.el,{transform:`translateY(${t}px) scale(${e})`})}}class x1{constructor(t,e,n){D(this,"el");D(this,"on",!1);D(this,"onAt",-1/0);this.label=t,this.colour=e,this.popAt=n,this.el=V("button",{class:"chip pixel","aria-pressed":"false",style:"position:absolute;width:208px;height:62px;border-radius:999px;border:5px solid var(--ink);background:var(--white);font-size:36px;color:var(--ink);display:flex;align-items:center;justify-content:center;pointer-events:auto"}),this.el.textContent=t}set(t,e){this.on=t,t&&(this.onAt=e),this.el.setAttribute("aria-pressed",String(t)),this.el.style.background=t?`var(--${this.colour})`:"var(--white)"}update(t,e){const[n,s]=Fe(t,this.popAt,.4,e),r=this.on&&!e?1+.08*Math.exp(-(t-this.onAt)*8):1;Nt(this.el,{transform:`scale(${n*r})`,opacity:String(s)})}}class v1{constructor(t,e,n,s){D(this,"el");D(this,"track");D(this,"knob");D(this,"value");D(this,"ends");this.value=n,this.ends=[t,e],this.track=V("div",{style:"position:absolute;left:0;top:50px;width:408px;height:14px;border-radius:999px;background:var(--white);border:4px solid var(--ink)"}),this.knob=V("div",{class:"knob",style:"position:absolute;top:35px;width:44px;height:44px;border-radius:50%;background:var(--pink);border:5px solid var(--ink)"}),this.el=V("div",{class:"slider",role:"slider",tabindex:"0","aria-label":`${t} to ${e}`,"aria-valuemin":"0","aria-valuemax":"1",style:"position:absolute;width:408px;height:79px;pointer-events:auto;touch-action:none;cursor:pointer"},V("div",{class:"pixel",style:"position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;font-size:30px;color:var(--ink)"},V("span",{},t),V("span",{},e)),this.track,this.knob);const r=o=>{const a=this.track.getBoundingClientRect();this.set(Math.min(1,Math.max(0,(o.clientX-a.left)/a.width))),s(this.value)};this.el.addEventListener("pointerdown",o=>{this.el.setPointerCapture(o.pointerId),r(o)}),this.el.addEventListener("pointermove",o=>{this.el.hasPointerCapture(o.pointerId)&&r(o)}),this.set(n)}set(t){this.value=t,this.el.setAttribute("aria-valuenow",t.toFixed(2)),this.el.setAttribute("aria-valuetext",`${Math.round(t*100)} % ${this.ends[1]}`),Nt(this.knob,{left:408*t-22})}}function _1(i){const t=V("button",{class:"btn display",style:"position:absolute;width:368px;height:84px;border-radius:999px;background:var(--ink);color:var(--yellow);font-size:34px;display:flex;align-items:center;justify-content:center;pointer-events:auto"});return t.textContent=i,t}const Pr={at:.05,dur:.65,from:1150},y1=.35,b1=.8,du=800,uu=590,yl=.5,M1=.45,fu=.2,ei=[.6,1.05,1.55,2.05,2.35,2.85,3.05,3.4],Oo=[520,132,356,132,244,154,400,540],bl=[960,231,231,311,516,516,632,1e3],w1=[1.05,1.55,2.05],Ni={from:2.4,to:2.85,value:.28},Ml=3,S1=6;function ns(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*se.draw((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}function E1(){let i,t=!1,e=!0,n=!1,s=0,r,o=[],a,l,c=-1/0,h=!1,u,d=[],p,x=du;const S=new Set,m=(y,R)=>{const v=V("div",{class:"ripple",style:"position:absolute;border-radius:50%;border:5px solid var(--ink);pointer-events:none"});r.screen.append(v),d.push({el:v,at:s,x:y,y:R})},f=()=>{i.store.data.progress.profile={chips:o.filter(y=>y.on).map(y=>y.label),loud:Number(a.value.toFixed(2))},i.store.save()},M=(y,R=!1)=>{const v=o[y];if(!(!v||h)){if(v.set(!v.on,s),!R){const E=v.el.getBoundingClientRect(),g=r.screen.getBoundingClientRect(),b=488/g.width;m((E.left+E.width/2-g.left)*b,(E.top+E.height/2-g.top)*b)}f()}},_=()=>{h||!o.some(y=>y.on)||(c=s,f())};return{id:"S1",mount(y,R){i=y;const v=y.copy.S1;x=y.params.campaign?uu:du,p=new Rs(y.captions,y.copy.captions,[{key:"profile",at:.5}]),r=new dh(v.clock);const E=r.screen;E.append(V("div",{class:"display",style:"position:absolute;left:0;right:0;top:74px;text-align:center;font-size:52px;color:var(--ink)"},v.heading),V("div",{class:"pixel",style:"position:absolute;left:0;right:0;top:140px;text-align:center;font-size:30px;color:var(--lit-subline)"},v.sub)),o=v.chips.map(([g,b],T)=>{const A=new x1(g,b,y1+T*.07);return Nt(A.el,{left:T%2?252:28,top:200+Math.floor(T/2)*80}),A.el.addEventListener("click",F=>{F.stopPropagation(),M(T)}),E.append(A.el),A}),a=new v1(v.sliderLeft,v.sliderRight,yl,()=>f()),Nt(a.el,{left:40,top:454}),l=_1(v.button),Nt(l,{left:60,top:x}),l.addEventListener("click",g=>{g.stopPropagation(),_()}),u=V("div",{class:"finger",style:"position:absolute;width:68px;height:68px;border-radius:50%;background:var(--lit-touch);border:4px solid var(--white);pointer-events:none;display:none"}),E.append(a.el,l,u),E.addEventListener("pointerdown",()=>n=!1),Es(R,...Bc),R.append(r.el)},enter(y){t=i.flow.reduced,e=y!=="S2"&&y!=="S3",n=i.store.data.settings.auto,this.update(0,0)},update(y,R){s=R;const[v,E]=t?[1,le(s,0,.2,se.enter)]:[1,1],g=e&&!t?Pr.from*(1-le(s,Pr.at,Pr.dur,se.pop)):0;r.set(g,v),r.el.style.opacity=String(E);const b=s-S1;if(n&&!h){w1.forEach((et,nt)=>{b>=et&&!S.has(nt)&&(S.add(nt),o[nt].on||M(nt,!0),m(ns(ei,Oo,et),ns(ei,bl,et)))}),b>=Ni.from&&b<=Ni.to+.05&&(a.set(yl+(Ni.value-yl)*le(b,Ni.from,Ni.to-Ni.from,se.draw)),S.has(10)||(S.add(10),m(ns(ei,Oo,Ni.from),ns(ei,bl,Ni.from))));const O=et=>ns(ei,bl,et)+(x-uu)*le(et,2.85,.2,se.draw);b>=Ml&&c<0&&(m(ns(ei,Oo,Ml),O(Ml)),_());const I=ns(ei,Oo,b),H=O(b),B=b>ei[0]&&b<ei[ei.length-1];Nt(u,{display:B?"block":"none",left:I-34,top:H-34})}else u.style.display="none";o.forEach(O=>O.update(s,t));const[T,A]=Fe(s,b1,.4,t),F=1-.06*Math.sin(Math.PI*Wi((s-c)/fu)),L=o.some(O=>O.on);l.disabled=!L,Nt(l,{transform:`scale(${T*(c>=0?F:1)})`,opacity:String(A*(L?1:.4))}),d=d.filter(O=>{const I=(s-O.at)/M1;if(I>=1||t)return O.el.remove(),!1;const H=30+I*50;return Nt(O.el,{left:O.x-H,top:O.y-H,width:H*2,height:H*2,opacity:String(1-I)}),!0}),!h&&c>=0&&s>=c+fu&&(h=!0,i.flow.next()),p.update(s)},landed:()=>s>=Pr.at+Pr.dur,onInput(y){if(y.type!=="key"||!y.key)return;n=!1;const R=Number(y.key);R>=1&&R<=6?M(R-1):y.key==="ArrowLeft"||y.key==="ArrowRight"?(a.set(Wi(a.value+(y.key==="ArrowLeft"?-.05:.05))),f()):y.key==="Enter"&&_()},exit(){},unmount(){},seek(y){this.update(0,y)}}}const nn={at:.15,dur:2.05,pitch:230,steps:12,count:15,h:400,cx:214,feet:490},Bo={at:2.2,dur:.2},A1=2.4;function T1(){let i,t=!1,e=0,n,s=[],r=!1,o=0,a;return{id:"S2",mount(l,c){i=l;const h=l.data.cast.cast.find(d=>d.id==="joe").sprite;a=new Rs(l.captions,l.copy.captions,[{key:"finding",at:.15}]);const u=new dh(l.copy.S1.clock);n=V("span",{}),o=nn.h*h.aspect,s=Array.from({length:nn.count},()=>V("img",{src:oo(h.body),alt:"",style:`position:absolute;top:${nn.feet-nn.h}px;width:${o}px;height:${nn.h}px;transform-origin:50% 100%`})),u.screen.append(V("div",{class:"pixel s2-finding",style:"position:absolute;left:0;right:0;top:84px;text-align:center;font-size:44px;color:var(--ink)"},V("span",{},l.copy.S2.finding),n),V("div",{class:"s2-card",style:"position:absolute;left:24px;top:170px;width:440px;height:530px;border-radius:28px;background:var(--white);border:6px solid var(--ink);overflow:hidden"},...s),V("div",{style:"position:absolute;left:226px;top:160px;width:0;height:0;border-left:18px solid transparent;border-right:18px solid transparent;border-top:26px solid var(--pink)"})),Es(c,...Bc),c.append(u.el),l.store.data.progress.peepl="vinnie",l.store.save()},enter(){t=i.flow.reduced,this.update(0,0)},update(l,c){e=c,n.textContent="...".slice(0,Math.floor(e*3)%4);const h=(t?e>=nn.at?1:0:le(e,nn.at,nn.dur,se.enter))*nn.steps*nn.pitch;s.forEach((u,d)=>{const p=nn.cx+d*nn.pitch-h,x=Math.abs(p-nn.cx)<=420,S=d===nn.steps?1-le(e,Bo.at,Bo.dur,se.draw):1;Nt(u,{display:x?"block":"none",left:p-o/2,transform:`scale(${S})`})}),!r&&e>=A1&&(r=!0,i.flow.next()),a.update(e)},landed:()=>e>=nn.at+nn.dur,onInput(l){(l.type==="tap"||l.key===" "||l.key==="Enter")&&e<Bo.at&&i.flow.seek(Bo.at)},exit(){},unmount(){},seek(l){this.update(0,l)}}}const pu=(i,t,e)=>Array.from({length:e*2},(n,s)=>{const r=s/(e*2)*Math.PI*2,o=s%2?t:i;return`${(Math.cos(r)*o).toFixed(1)},${(Math.sin(r)*o).toFixed(1)}`}).join(" ");class C1{constructor(){D(this,"el");const t=(e,n)=>ae("polygon",{points:e,style:`fill:var(--${n});stroke:var(--ink);stroke-width:6;stroke-linejoin:round`});this.el=ae("g",{},t(pu(250,170,16),"yellow"),t(pu(170,118,12),"pink"))}update(t,e,n,s){this.el.setAttribute("transform",`translate(${t} ${e}) rotate(${n*25}) scale(${s})`)}}const mu=["pink","yellow","cyan","red","purple"];class R1{constructor(t){D(this,"el");D(this,"pieces");this.o=t,this.pieces=Array.from({length:t.count},(e,n)=>ae("rect",{width:18,height:10,style:`fill:var(--${mu[n%mu.length]});stroke:var(--ink);stroke-width:2`})),this.el=ae("g",{class:"confetti"},...this.pieces)}update(t,e,n,s){const r=!s&&n>0&&n<this.o.life;this.el.style.display=r?"inline":"none",r&&this.pieces.forEach((o,a)=>{const l=a/this.o.count*Math.PI*2+Gi(a)*.4,c=this.o.speed[0]+Gi(a+9)*this.o.speed[1],h=t+Math.cos(l)*c*n,u=e+Math.sin(l)*c*n+this.o.gravity*n*n;o.setAttribute("x",String(h-9)),o.setAttribute("y",String(u-5)),o.setAttribute("transform",`rotate(${n*this.o.spin+a*40} ${h} ${u})`)})}}const qs={cx:244,cy:470,at:0,dur:.5},P1=.15,is={x:244,feet:690,h:440,at:.15,dur:.6,hopAt:.8,hop:40},gu={at:.75,dur:.45,top:730},xu={at:1.2,dur:.4,top:812},vu={dur:3.4,to:1.06},k1=1.6;function F1(){let i,t=!1,e=0,n,s,r,o,a,l,c;return{id:"S3",mount(h,u){i=h;const d=h.copy.S3;c=new Rs(h.captions,h.copy.captions,[{key:"reveal",at:.3}]),n=new dh(h.copy.S1.clock),s=new C1,r=new R1({count:18,gravity:700,life:1.6,speed:[380,260],spin:500});const p=h.data.cast.cast.find(x=>x.id==="vinnie").sprite;o=new Aa(p,{class:"sprite s3-vinnie"}).place(is.x,is.feet,is.h),o.img.dataset.morph="vinnie",a=V("div",{class:"display s3-name",style:`position:absolute;left:0;right:0;top:${gu.top}px;text-align:center;font-size:58px;color:var(--ink)`},d.name),l=V("div",{style:`position:absolute;left:0;right:0;top:${xu.top}px;display:flex;justify-content:center`},dn([d.pill],{size:32})),n.screen.append(ae("svg",{width:488,height:948,style:"position:absolute;inset:0;overflow:visible"},s.el,r.el),o.el,a,l),Es(u,...Bc),u.append(n.el)},enter(){t=i.flow.reduced,this.update(0,0)},update(h,u){e=u,n.set(0,t?1:1+(vu.to-1)*le(e,0,vu.dur,se.draw));const[d,p]=Fe(e,qs.at,qs.dur,t);s.update(qs.cx,qs.cy,t?0:e,d),s.el.style.opacity=String(p),r.update(qs.cx,qs.cy,e-P1,t);const[x,S]=Fe(e,is.at,is.dur,t);o.pose({t:e,phase:1.2,hop:t?0:rr(e,is.hopAt,is.hop,.4),scale:x,opacity:S});for(const[m,f]of[[a,gu],[l,xu]]){const[M,_]=Fe(e,f.at,f.dur,t);Nt(m,{transform:`scale(${M})`,opacity:String(_)})}c.update(e)},landed:()=>e>=k1,onInput(h){},exit(){},unmount(){},seek(h){this.update(0,h)}}}const Wf=.15,Xf=.035,L1=3,I1=(i,t)=>Math.max(0,Math.min(i.length,Math.floor((t-Wf)/Xf))),Vr=i=>Wf+i.length*Xf;class $f{constructor(t,e="block"){D(this,"el");D(this,"text");D(this,"caret");D(this,"chip");D(this,"said","");this.chipColours=t,this.text=V("span",{class:"dialogue-text"}),this.caret=e==="block"?ae("svg",{width:22,height:40,viewBox:"0 0 22 40",style:"display:inline-block;vertical-align:-6px;margin-left:12px"},ae("rect",{x:2,y:2,width:18,height:36,style:"fill:var(--yellow)"})):ae("svg",{width:26,height:22,viewBox:"0 0 26 22",style:"position:absolute;right:36px;bottom:28px"},ae("path",{d:"M2 2h22L13 20z",style:"fill:var(--yellow)"})),this.chip=V("div",{class:"speaker-chip display",style:"position:absolute;left:30px;top:-40px;z-index:2;display:inline-flex;align-items:center;border-radius:999px;border:5px solid var(--ink);padding:8px 22px 10px;font-size:34px;color:var(--ink);white-space:nowrap"}),this.el=V("div",{class:"dialogue-box",style:"position:absolute;left:150px;top:660px;width:1000px;height:200px;transform-origin:0 100%"},this.chip,V("div",{class:"pixel",style:"position:absolute;inset:0;background:var(--ink);border-radius:28px;padding:38px 44px;font-size:54px;line-height:1.1;color:var(--white)"},this.text,this.caret))}update(t,e,n,s,r){const o=s?`${s.who.toLowerCase()}: ${s.text}`:"";o&&o!==this.said&&no(o),this.said=o;const[a,l]=Fe(t,e,.4,n);if(Nt(this.el,{transform:`scale(${a})`,opacity:String(l)}),this.chip.style.display=s?"inline-flex":"none",!s){this.text.textContent="",this.caret.style.visibility="hidden";return}this.chip.textContent=s.who,this.chip.style.background=this.chipColours[s.who]??"var(--white)";const c=I1(s.text,r);this.text.textContent=s.text.slice(0,c);const h=c>=s.text.length;this.caret.style.visibility=h&&Math.floor(t*L1*2)%2===0?"visible":"hidden"}}const D1=".reply-chip:hover,.reply-chip:focus-visible,.reply-chip.hl{background:var(--yellow)!important}";class N1{constructor(t){D(this,"el");D(this,"chips",[]);D(this,"shownAt",0);D(this,"highlighted",-1);this.onPick=t,this.el=V("div",{class:"reply-chips",style:"position:absolute;left:150px;bottom:484px;width:1100px;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end"}),this.el.append(V("style",{},D1))}get count(){return this.chips.length}show(t,e){this.clear(),this.shownAt=e,this.chips=t.map((n,s)=>{const r=V("button",{class:"reply-chip pixel",style:"min-width:208px;height:62px;padding:0 28px;border-radius:999px;border:5px solid var(--ink);background:var(--white);font-size:36px;color:var(--ink);white-space:nowrap;pointer-events:auto;transform-origin:50% 100%"});return r.textContent=n,r.addEventListener("click",o=>{o.stopPropagation(),this.onPick(s)}),r}),this.el.append(...this.chips)}clear(){for(const t of this.chips)t.remove();this.chips=[],this.highlighted=-1}update(t,e){this.chips.forEach((n,s)=>{const[r,o]=Fe(t,this.shownAt+s*.07,.4,e);Nt(n,{transform:`scale(${r})`,opacity:String(o)}),n.classList.toggle("hl",s===this.highlighted)})}}const U1=.5;class O1{constructor(t,e,n=null){D(this,"el");D(this,"fill");D(this,"heart");D(this,"heartPath");D(this,"from",0);D(this,"to",0);D(this,"at",-1/0);D(this,"delta");D(this,"deltaAt",-1/0);this.from=this.to=e,this.delta=V("div",{class:"pixel trust-delta",style:"position:absolute;right:-8px;top:-46px;font-size:44px;color:var(--ink);opacity:0"}),this.fill=V("div",{class:"trust-fill",style:"height:100%;background:var(--pink)"}),this.heartPath=ae("path",{d:"M 28 48 C 6 32 2 22 4 14 C 7 3 22 2 28 13 C 34 2 49 3 52 14 C 54 22 50 32 28 48 Z",style:"stroke:var(--ink);stroke-width:5;stroke-linejoin:round"}),this.heart=ae("svg",{width:56,height:52,viewBox:"0 0 56 52",style:"overflow:visible"},this.heartPath),this.el=V("div",{class:"trust-meter",style:"position:absolute;left:1180px;top:76px;display:flex;align-items:center;gap:18px;transform-origin:0 50%"},V("div",{class:"pixel",style:"font-size:46px;color:var(--ink)"},t),V("div",{class:"trust-track",style:"position:relative;width:460px;height:46px;border-radius:999px;background:var(--white);border:6px solid var(--ink);overflow:hidden"},this.fill,...n===null?[]:[V("div",{class:"trust-goal",style:`position:absolute;left:${n}%;top:0;bottom:0;width:6px;margin-left:-3px;background:var(--ink)`})]),this.heart,this.delta)}set(t,e){if(t===this.to)return;const n=Math.round(t-this.to);this.delta.textContent=n>0?`+${n}`:`−${-n}`,this.deltaAt=e,this.from=this.value(e),this.to=t,this.at=e}value(t){return this.from+(this.to-this.from)*le(t,this.at,U1,se.draw)}update(t,e,n){const[s,r]=Fe(t,e,.4,n);Nt(this.el,{transform:`scale(${s})`,opacity:String(r)});const o=n?this.to:this.value(t);this.fill.style.width=`${o}%`;const a=o>=99.5;this.heartPath.style.fill=a?"var(--pink)":"var(--white)",this.heart.style.transform=`scale(${a&&!n?1+.12*Math.abs(Math.sin(t*6)):1})`;const l=t-this.deltaAt,[c,h]=Fe(t,this.deltaAt,.3,n);Nt(this.delta,{transform:`translateY(${n?0:-24*Math.min(1,l/1.2)}px) scale(${c})`,opacity:String(l<1.2?h:Math.max(0,1-(l-1.2)/.25))})}}const B1=(i,t)=>Math.max(0,Math.min(i.trust.max,t)),uh=(i,t)=>i.beats.filter(e=>e.days.includes(t));function z1(i,t=[]){return{mode:"bond",phase:"lines",day:1,beatIndex:0,trust:i.trust.start,set:{},queue:[],then:"choose",choices:[],autoPick:0,refusals:0,profile:t,history:[]}}function H1(i,t,e){const n=i.findIndex(o=>o.preferIfProfile&&e.includes(o.preferIfProfile));if(n<=0)return{choices:i,autoPick:t};const s=i[t],r=[i[n],...i.filter((o,a)=>a!==n)];return{choices:r,autoPick:r.indexOf(s)}}function wl(i,t,e){const n=uh(i,t.day)[e];if(!n)return V1(i,{...t,beatIndex:e});const s=t.day>1&&n.lineAgain?n.lineAgain:n.line;return{...t,beatIndex:e,phase:"lines",queue:[...s],then:"choose"}}function V1(i,t){return t.trust>=i.trust.closeMin?{...t,phase:"lines",queue:[...i.close.pass],then:"passed",trust:i.trust.max}:t.day>=i.days.forcedOnDay?{...t,phase:"lines",queue:[...i.close.forced],then:"passed",trust:i.trust.max}:{...t,phase:"lines",queue:[...i.close.fail],then:"nextDay"}}function G1(i,t){if(t.mode==="consent")return{choices:i.consent.choices,autoPick:i.consent.autoPick};const e=uh(i,t.day)[t.beatIndex];return H1(e.choices,e.autoPick,t.profile)}function _u(i,t,e){var n;switch(e.type){case"start":return wl(i,{...t,mode:"bond",day:e.day??t.day},0);case"consent":return{...t,mode:"consent",phase:"lines",queue:[...i.consent.ask],then:"choose"};case"lineDone":{if(t.phase!=="lines")return t;const s=t.queue.slice(1);if(s.length)return{...t,queue:s};switch(t.then){case"choose":return{...t,queue:s,phase:"choosing",...G1(i,t)};case"nextBeat":return wl(i,{...t,queue:s},t.beatIndex+1);default:return{...t,queue:s,phase:t.then}}}case"choose":{const s=t.phase==="choosing"?t.choices[e.index]:void 0;if(!s)return t;const r={who:"YOU",text:s.label},o={...t,phase:"lines",choices:[],set:{...t.set,...s.set},history:[...t.history,{beat:t.mode==="consent"?"consent":uh(i,t.day)[t.beatIndex].id,label:s.label}]};return t.mode==="bond"?{...o,trust:B1(i,t.trust+s.trust),queue:[r,...s.reply],then:"nextBeat"}:((n=s.set)==null?void 0:n.consent)==="yes"?{...o,queue:[r,...s.reply],then:"released"}:t.refusals>=1?{...o,refusals:t.refusals+1,queue:[r,...i.consent.forced],then:"released"}:{...o,refusals:t.refusals+1,queue:[r,...s.reply],then:"nextDay"}}case"nextDay":{if(t.phase!=="nextDay")return t;const s=t.day+1;return t.mode==="consent"?{...t,day:s,phase:"lines",queue:[...i.consent.askAgain],then:"choose"}:wl(i,{...t,day:s},0)}}}const Pn={x:1380,consentX:1340,feet:930,h:620},W1=[[40,60],[120,140],[70,250],[300,230],[200,90],[330,300]],X1=.6,$1=.5,Y1=1,q1=.4,j1={VINNIE:.8,YOU:.4,MOCHI:.8},zo={first:4,every:12},Ui={dur:1.6,swapAt:.8,fade:.25},Z1={S4:1.5,S5:1.2},K1={VINNIE:"var(--red)",YOU:"var(--cyan)",MOCHI:"var(--pink)"};function J1(){const i=W1.map(([a,l])=>V("div",{style:`position:absolute;left:${a}px;top:${l}px;width:10px;height:10px;background:var(--white)`})),t=V("div",{style:"position:absolute;left:150px;top:140px;width:420px;height:400px;border-radius:16px;border:10px solid var(--ink);background:var(--lit-window-navy);overflow:hidden"},V("div",{style:"position:absolute;left:250px;top:50px;width:90px;height:90px;border-radius:50%;background:var(--yellow);border:6px solid var(--ink)"}),...i,V("div",{style:"position:absolute;left:195px;top:0;width:10px;height:100%;background:var(--ink)"}),V("div",{style:"position:absolute;left:0;top:185px;width:100%;height:10px;background:var(--ink)"})),e=V("div",{style:"position:absolute;left:900px;top:0;width:0;height:0;transform-origin:0 0"},V("div",{style:"position:absolute;left:-4px;top:0;width:8px;height:200px;background:var(--ink)"}),V("div",{style:"position:absolute;left:-170px;top:250px;width:340px;height:260px;background:radial-gradient(ellipse at 50% 0%, var(--lit-lamp-glow), transparent 70%)"}),ae("svg",{width:220,height:120,style:"position:absolute;left:-110px;top:190px"},ae("path",{d:"M 70 6 L 150 6 L 212 110 L 8 110 Z",style:"fill:var(--yellow);stroke:var(--ink);stroke-width:8;stroke-linejoin:round"}))),n=(a,l,c,h,u)=>ae("ellipse",{cx:a,cy:l,rx:c,ry:h,style:`fill:var(--${u});stroke:var(--ink);stroke-width:7`}),s=[n(80,120,44,90,"lit-plant-1"),n(150,100,44,100,"lit-plant-2")],r=ae("svg",{width:340,height:440,viewBox:"-40 -40 340 440",style:"position:absolute;left:1580px;top:500px;overflow:visible"},...s,n(118,140,40,84,"lit-plant-3"),ae("path",{d:"M 50 230 L 210 230 L 190 330 L 70 330 Z",style:"fill:var(--lit-pot);stroke:var(--ink);stroke-width:8;stroke-linejoin:round"}));return{el:V("div",{class:"room",style:`position:absolute;left:0;top:0;width:1920px;height:${Be(1080,1700)}px;background:var(--cream);overflow:hidden`},V("div",{style:"position:absolute;inset:0;background-image:repeating-linear-gradient(90deg,var(--lit-wallpaper) 0 40px,transparent 40px 80px)"}),t,V("div",{style:"position:absolute;left:0;top:640px;width:1920px;height:230px;background:var(--pink);border-top:8px solid var(--ink)"}),V("div",{style:`position:absolute;left:0;top:860px;width:1920px;height:${Be(220,840)}px;background-color:var(--wood);border-top:8px solid var(--ink);background-image:repeating-linear-gradient(90deg,transparent 0 236px,var(--lit-plank-gap) 236px 242px)`}),e,r),update(a,l){const c=l?0:1;e.style.transform=`rotate(${Math.sin(a*1.3)*3*c}deg)`,i.forEach((h,u)=>h.style.opacity=String(l?1:.5+.5*Math.sin(a*3+u))),s[0].setAttribute("transform",`rotate(${-24+Math.sin(a*1.6)*3*c} 110 300)`),s[1].setAttribute("transform",`rotate(${14+Math.sin(a*1.6+1)*3*c} 130 300)`)}}}function Yf(i){const t=i==="S5";let e,n,s=!1,r=0,o,a,l,c,h,u,d,p=0,x=-1,S=zo.first,m=-1,f=-1,M=!1,_=-1/0,y=!1,R=!1,v=!1,E=[],g=null;const b=()=>d.phase==="lines"?d.queue[0]??null:null,T=()=>{const O=e.store.data.progress;O.dialogue={mode:d.mode,day:d.day,beatIndex:d.beatIndex,trust:d.trust,set:d.set,history:d.history},O.trust=d.trust,d.phase==="released"&&(O.released=!0),e.store.save()},A=O=>{const I=d;if(d=_u(n,d,O),d===I)return;p=r;const H=b();(H==null?void 0:H.who)==="VINNIE"&&H.hop&&H!==I.queue[0]&&E.push({at:r,h:H.hop}),d.phase==="choosing"&&I.phase!=="choosing"&&(x=r,S=zo.first,c.show(d.choices.map(B=>B.label),r)),d.phase==="nextDay"&&(m=r),(d.phase==="passed"||d.phase==="released")&&f<0&&(f=r,h.set(100,r),e.toast.show(d.phase==="passed"?e.data.dialogue.close.toast:e.data.dialogue.consent.confirmToast)),!v&&!t&&d.mode==="bond"&&d.beatIndex>=2&&d.day===1&&(v=!0,e.captions.show(e.copy.captions.room2??"",3.7)),T()},F=O=>{if(d.phase!=="choosing"||!d.choices[O])return;const I=d.choices[O];c.clear(),S>zo.first&&e.captions.hide(),x=-1,I.trust<0&&(_=r),A({type:"choose",index:O}),t||h.set(d.trust,r)},L=()=>{const O=b();if(!O)return;r-p<Vr(O.text)?p=r-Vr(O.text):A({type:"lineDone"})};return{id:i,mount(O,I){var nt;e=O,n=O.data.dialogue,o=J1();const H=O.data.cast.cast.find(ft=>ft.id==="vinnie").sprite;a=new Aa(H,{class:`sprite ${i==="S4"?"s4":"s5"}-vinnie`}).place(Pn.x,Pn.feet,Pn.h),a.img.dataset.morph="vinnie",l=new $f(K1),c=new N1(ft=>F(ft));const B=O.store.data.progress.dialogue,et=((nt=O.store.data.progress.profile)==null?void 0:nt.chips)??[];d={...z1(n,et),...t&&B?{trust:B.trust??100,set:B.set??{},history:B.history??[]}:{}},h=new O1(O.copy.S4.trust,t?100:d.trust,t?null:n.trust.closeMin),u=V("div",{class:"next-day",style:"position:absolute;inset:0;background:var(--ink);display:none;align-items:center;justify-content:center"},V("div",{class:"pixel",style:"font-size:64px;color:var(--white)"},O.copy.S4.nextDay)),Es(I,Pn.x,Pn.feet,760/Pn.h,540,1080),ke(h.el,{left:60,top:80}),Nt(l.el,{top:470}),Nt(c.el,{bottom:"auto",top:712}),ke(l.el,{left:60,top:1250,width:960,height:300}),ke(c.el,{left:60,top:1580,bottom:"auto",width:680,transform:"scale(1.45)",transformOrigin:"0 0"}),ke(u,{}),I.append(o.el,a.el,h.el,c.el,l.el,u),Ct.roomPick=()=>d.phase==="choosing"&&x>=0?d.autoPick:-1},enter(){s=e.flow.reduced,this.update(0,0)},update(O,I){r=I,!y&&r>=(t?q1:Y1)&&(y=!0,A(t?{type:"consent"}:{type:"start",day:1})),!t&&!R&&r>=.8&&(R=!0,e.captions.show(e.copy.captions.room1??"",3.1)),o.update(r,s);const H=b();if(H&&r-p>=Vr(H.text)+j1[H.who]&&A({type:"lineDone"}),d.phase==="choosing"&&x>=0&&r-x>=S&&(S+=zo.every,e.captions.show(e.copy.captions.yourTurn??"",3)),m>=0){const pt=r-m,Et=Math.min(le(pt,0,Ui.fade,se.enter),1-le(pt,Ui.dur-Ui.fade,Ui.fade,se.enter));if(Nt(u,{display:pt<Ui.dur?"flex":"none",opacity:String(Et)}),d.phase==="nextDay"&&pt>=Ui.swapAt){d=_u(n,d,{type:"nextDay"}),p=m+Ui.dur;const j=b();j!=null&&j.hop&&E.push({at:p,h:j.hop}),T()}pt>=Ui.dur&&(m=-1)}const B=b();B&&r>=p&&(g=B),d.phase==="nextDay"&&(g=null);const et=B?r-p<Vr(B.text):!1,nt=B?Math.max(0,r-p):1/0;l.update(r,t?-1:X1,s,B??g,nt),c.update(r,s),h.update(r,t?-1:$1,s);const ft=s?0:E.reduce((pt,Et)=>pt+rr(r,Et.at,Et.h,Et.h>=60?.45:.4),0),bt=(B==null?void 0:B.who)==="YOU"&&et&&!s?-4:0,It=!s&&r-_<.12?.96:1,Vt=t?Pn.x+(Pn.consentX-Pn.x)*le(r,0,.5,se.draw):Pn.x;a.place(Vt,Pn.feet,Pn.h).pose({t:r,phase:1.2,hop:ft,rot:bt,squash:It}),f>=0&&!M&&r-f>=Z1[i]&&!b()&&(M=!0,e.flow.next())},landed:()=>r>=.5,onInput(O){O.type==="key"&&O.key&&/^[1-4]$/.test(O.key)?F(Number(O.key)-1):(O.type==="tap"||O.key===" "||O.key==="Enter")&&L()},choose:F,exit(){},unmount(){delete Ct.roomPick},seek(O){this.update(0,O)}}}const Q1=()=>Yf("S4"),tb=()=>Yf("S5"),qf=[960,560,1.15,540,820],Sl=440,kr={x:740,top:652,w:440,h:320},Fr=.75,yu=.32,Lr={at:1.35,dur:.35,deg:128},Ir={at:1.45,dur:.7,from:520},eb=2.15,fa={at:1.4,life:1.5,count:16},El={at:2.6,dur:.6,px:760},bu=3.2,nb=["yellow","cyan","white","red"];class jf{constructor(t){D(this,"el");D(this,"keychain");D(this,"sticker");D(this,"box");D(this,"keyClip");D(this,"flapL");D(this,"flapR");D(this,"confetti");const e=t.copy.S6,n=t.data.cast.cast.find(h=>h.id==="vinnie").sprite,s=Sl*n.aspect,r=V("div",{style:`position:absolute;left:${Be(250,470)}px;top:110px;width:440px;height:800px;background:var(--cyan);border:10px solid var(--ink);border-bottom:none;border-radius:18px 18px 0 0`},V("div",{style:"position:absolute;left:50px;top:60px;width:320px;height:260px;border:8px solid var(--ink);border-radius:12px"}),V("div",{style:"position:absolute;left:50px;top:370px;width:320px;height:330px;border:8px solid var(--ink);border-radius:12px"}),V("div",{class:"display door-plate",style:"position:absolute;left:150px;top:110px;width:120px;height:90px;background:var(--white);border:7px solid var(--ink);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:64px;color:var(--ink)"},e.door),V("div",{style:"position:absolute;left:350px;top:400px;width:40px;height:40px;border-radius:50%;background:var(--yellow);border:7px solid var(--ink)"})),o=V("div",{style:`position:absolute;left:0;top:900px;width:1920px;height:${Be(180,800)}px;background:var(--cream);border-top:8px solid var(--ink)`}),a=V("div",{class:"pixel mat",style:"position:absolute;left:740px;top:912px;width:440px;height:58px;background:var(--wood);border:6px solid var(--ink);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:44px;color:var(--ink)"},e.mat);this.sticker=V("img",{src:oo(n.body),alt:"",class:"keychain-img",style:`position:absolute;left:${-s/2}px;top:228px;width:${s}px;height:${Sl}px;filter:drop-shadow(5px 0 0 var(--white)) drop-shadow(-5px 0 0 var(--white)) drop-shadow(0 5px 0 var(--white)) drop-shadow(0 -5px 0 var(--white)) drop-shadow(0 26px 22px var(--lit-sticker-shadow))`});const l=dn([e.nfc],{size:30});l.classList.add("nfc-pill"),Nt(l,{position:"absolute",left:-46,top:228+Sl-10}),this.keychain=V("div",{class:"keychain",style:"position:absolute;left:960px;top:0;width:0;height:0;transform-origin:0 0"},V("div",{style:"position:absolute;left:-9px;top:-20px;width:18px;height:190px;border-radius:9px;background:repeating-linear-gradient(180deg,var(--lit-chain) 0 16px,var(--lit-chain-hi) 16px 22px)"}),V("div",{style:"position:absolute;left:-44px;top:150px;width:88px;height:88px;border-radius:50%;border:13px solid var(--lit-ring)"}),this.sticker,l),this.keyClip=V("div",{style:"position:absolute;inset:0"},this.keychain);const c=h=>V("div",{style:`position:absolute;${h}:0;top:-44px;width:220px;height:48px;background:var(--lit-flaps);border:7px solid var(--ink);transform-origin:${h==="left"?"0%":"100%"} 100%`});this.flapL=c("left"),this.flapR=c("right"),this.box=V("div",{class:"ship-box",style:`position:absolute;left:${kr.x}px;top:${kr.top}px;width:${kr.w}px;height:${kr.h}px;transform-origin:50% 100%`},this.flapL,this.flapR,V("div",{style:"position:absolute;inset:0;background:var(--lit-cardboard);border:8px solid var(--ink);border-radius:8px"},V("div",{style:"position:absolute;left:190px;top:0;width:44px;height:100%;background:var(--lit-tape)"}),V("div",{style:"position:absolute;left:40px;top:110px;width:250px;padding:14px 18px;background:var(--white);border:5px solid var(--ink);border-radius:10px;transform:rotate(-4deg)"},V("div",{class:"display box-label",style:"font-size:44px;color:var(--ink)"},e.boxLabel),V("div",{class:"pixel box-sub",style:"font-size:28px;color:var(--ink);margin-top:6px"},e.boxSub)))),this.confetti=Array.from({length:fa.count},(h,u)=>V("div",{style:`position:absolute;left:0;top:0;width:26px;height:14px;background:var(--${nb[u%4]});border:3px solid var(--ink)`})),this.el=V("div",{class:"ship-set",style:`position:absolute;left:0;top:0;width:1920px;height:${Be(1080,1700)}px;overflow:hidden`},r,o,a,this.keyClip,this.box,...this.confetti)}pose(t){const e=kr.top+t.boxY;Nt(this.box,{top:e,transform:`scale(${1+t.squash*.12}, ${1-t.squash*.14})`,display:e>1100?"none":"block"}),this.flapL.style.transform=`rotate(${-t.flap}deg)`,this.flapR.style.transform=`rotate(${t.flap}deg)`,Nt(this.keyClip,{clipPath:`inset(0 0 ${Math.max(0,1080-e)}px 0)`,opacity:t.keyVisible?"1":"0"}),Nt(this.keychain,{top:t.lift,transform:`rotate(${t.rot}deg)`});const n=!t.reduced&&t.ct>0&&t.ct<fa.life;this.confetti.forEach((s,r)=>{if(!n)return void(s.style.display="none");const o=-Math.PI/2+(Gi(r)-.5)*2.2,a=700+Gi(r+5)*500,l=960+Math.cos(o)*a*t.ct,c=650+Math.sin(o)*a*t.ct+1400*t.ct*t.ct;Nt(s,{display:"block",transform:`translate(${l}px, ${c}px) rotate(${t.ct*600+r*30}deg)`})})}}function ib(){let i,t=!1,e=0,n,s;return{id:"S6",mount(r,o){i=r,n=new jf(r),s=new Rs(r.captions,r.copy.captions,[{key:"ship",at:.3}]),Es(o,...qf),o.append(n.el)},enter(){t=i.flow.reduced,this.update(0,0)},update(r,o){e=o;const a=t?0:e<Fr?-1300*(1-se.fall(Wi((e-.2)/(Fr-.2)))):0,l=!t&&e>Fr&&e<Fr+yu?Math.sin(Math.PI*(e-Fr)/yu):0,c=le(e,El.at,El.dur,se.draw)*El.px,h=t?e>=Lr.at?Lr.deg:0:le(e,Lr.at,Lr.dur,se.pop)*Lr.deg,u=t?e>=Ir.at?0:Ir.from:Ir.from*(1-le(e,Ir.at,Ir.dur,se.pop));n.pose({boxY:a+c,squash:l,flap:h,lift:u,rot:t?0:Dl(e,eb,14),keyVisible:e>fa.at,ct:e-fa.at,reduced:t}),s.update(e)},landed:()=>e>=bu,onInput(r){(r.type==="tap"||r.key===" "||r.key==="Enter")&&e>=bu&&i.flow.next()},exit(){},unmount(){},seek(r){this.update(0,r)}}}const Oi={enter:.6,from:2300,to:1330,nudgeAt:.8,nudge:150},Bi=1.1,Al={peak:.7,dur:.23},ss={count:3,life:1,stagger:.16,from:40,grow:700,cx:Be(1040,960),cy:Be(520,600)},Mu=1.3,wu=1.5,sb=1,Su=1.25,Tl={x:960,y:448};function rb(){let i,t=!1,e=0,n=-1,s=!1,r=!1,o,a,l,c,h,u,d,p,x=[],S;const m=()=>{n>=0||(n=e)};return{id:"S7",mount(f,M){i=f;const _=f.copy.S7;if(o=new jf(f),S=new Rs(f.captions,f.copy.captions,[{key:"tap",at:0,until:3.5}]),a=V("button",{class:"keychain-hit","aria-label":_.waitPill,style:`position:absolute;left:${Tl.x-180}px;top:188px;width:360px;height:520px;border-radius:40px;pointer-events:auto`}),a.addEventListener("click",y=>{y.stopPropagation(),m()}),l=V("div",{class:"wait-ring",style:"position:absolute;left:0;top:0;width:400px;height:400px;margin:-200px 0 0 -200px;border-radius:50%;border:8px solid var(--pink);pointer-events:none"}),c=V("div",{class:"wait-pill",style:"position:absolute;left:0;right:0;top:832px;display:flex;justify-content:center;gap:16px"},dn([_.waitPill],{size:32})),"NDEFReader"in window){const y=dn([_.realNfc],{size:32,tag:"button"});y.style.pointerEvents="auto",y.addEventListener("click",async R=>{R.stopPropagation();try{const v=window.NDEFReader,E=new v;await E.scan(),E.onreading=()=>m()}catch{}}),c.append(y)}u=V("div",{class:"pixel notification",style:"width:230px;padding:14px 16px;background:var(--yellow);border:6px solid var(--ink);border-radius:24px;font-size:32px;line-height:1.05;color:var(--ink);transform-origin:50% 0"},V("div",{class:"notif-title"},_.notifTitle),V("div",{class:"notif-body"},_.notifBody)),h=V("div",{class:"tap-phone",style:"position:absolute;left:0;top:300px;width:300px;height:540px;border-radius:48px;background:var(--ink);padding:16px;box-shadow:0 22px 40px var(--lit-phone-shadow)"},V("div",{style:"width:100%;height:100%;border-radius:34px;background:var(--lit-phone-glass);display:flex;justify-content:center;padding-top:60px"},u)),d=V("div",{class:"handshake",style:"position:absolute;left:0;right:0;top:820px;display:flex;justify-content:center"},V("div",{class:"display handshake-pill",style:"display:inline-flex;align-items:center;gap:14px;border-radius:999px;background:var(--yellow);border:6px solid var(--ink);padding:12px 26px 14px;font-size:58px;color:var(--ink);white-space:nowrap"},_.handshake,or("check",52,"var(--ink)"))),x=Array.from({length:ss.count},(y,R)=>V("div",{style:`position:absolute;border-radius:50%;border-style:solid;border-color:var(--${R%2?"cyan":"yellow"});pointer-events:none`})),p=V("div",{style:"position:absolute;inset:0;background:var(--white);pointer-events:none;opacity:0"}),Es(M,...qf),ke(c,{top:1500}),ke(d,{top:1500}),ke(p,{}),M.append(o.el,l,c,a,...x,h,d,p)},enter(){t=i.flow.reduced,this.update(0,0)},update(f,M){e=M;const _=n>=0?e-n:-1,y=t?0:Dl(e,-2,14)+(_>=Bi?Dl(_,Bi,-10):0);o.pose({boxY:2e3,squash:0,flap:128,lift:0,rot:y,keyVisible:!0,ct:-1,reduced:t});const R=n<0,v=e%Su/Su;Nt(l,{display:R?"block":"none",transform:`translate(${Tl.x}px, ${Tl.y}px) scale(${t?1:.6+.9*v})`,opacity:String(t?.8:1-v)}),Nt(c,{display:R&&!i.captions.visible?"flex":"none"}),a.style.display=R?"block":"none";const E=_<0?Oi.from:Oi.from+(Oi.to-Oi.from)*le(_,0,Oi.enter,se.enter)-Oi.nudge*le(_,Oi.nudgeAt,Bi-Oi.nudgeAt,se.draw),g=vn?`translate(810px, ${E-920}px) rotate(-6deg)`:`translateX(${E-150}px) rotate(12deg)`;Nt(h,{transform:g,display:_<0?"none":"block"});const b=_>=Bi&&!t?Math.max(0,Al.peak-(_-Bi)/Al.dur*Al.peak):0;p.style.opacity=String(b),x.forEach((O,I)=>{const H=t||_<0?-1:(_-Bi-I*ss.stagger)/ss.life;if(H<=0||H>=1)return void(O.style.display="none");const B=ss.from+H*ss.grow;Nt(O,{display:"block",left:ss.cx-B,top:ss.cy-B,width:B*2,height:B*2,borderWidth:`${12-H*8}px`,opacity:String(1-H)})});const[T,A]=_<0?[0,0]:Fe(_,Mu,.4,t);_>=Mu&&!r&&(r=!0,no(d.textContent??"")),Nt(d,{transform:`scale(${T})`,opacity:String(A)});const[F,L]=_<0?[0,0]:Fe(_,wu,.4,t);Nt(u,{transform:`scale(${F})`,opacity:String(L)}),_>=Bi&&!i.store.data.progress.handshake&&(i.store.data.progress.handshake=!0,i.store.save()),_<Bi?S.update(e):i.captions.hide(),!s&&_>=wu+sb&&(s=!0,i.flow.next())},landed:()=>e>=.3,onInput(f){(f.type==="tap"||f.key===" "||f.key==="Enter")&&m()},exit(){},unmount(){},seek(f){this.update(0,f)}}}const gn={sky:13627391,ground:16046520,hemi:1.5,key:16773590,keyI:2.1,elevation:55,azimuth:35};function fh(){const i=new hn,t=new Dm(gn.sky,gn.ground,gn.hemi),e=new Om(gn.key,gn.keyI),n=gn.elevation*Math.PI/180,s=gn.azimuth*Math.PI/180;return e.position.set(Math.cos(n)*Math.sin(s)*30,Math.sin(n)*30,Math.cos(n)*Math.cos(s)*30),i.add(t,e,e.target),{group:i,key:e,hemi:t}}const Dr={sky:9403332,ground:16757642,hemi:1,key:16752250,keyI:1.2},Eu={day:[702702,8377333,14087423],dusk:[5979791,11954864,16752335]},Au={day:16777215,dusk:new ne().setRGB(42/53,38/49,64/75,Ze)},Tu={day:16770976,dusk:16765530},kn=i=>i instanceof ne?i.clone():new ne(i),ni=i=>i*3600,Ho=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function ob(i){const t=(i%86400+86400)%86400,e=t>=ni(12)?Ho(ni(19.5),ni(20.25),t):1-Ho(ni(6),ni(6.75),t),n=t>=ni(12)?Ho(ni(21),ni(21.75),t):1-Ho(ni(5.25),ni(6),t);return{dusk:e,night:n}}function ab(i,t,e){e.hemi.color.copy(kn(gn.sky).lerp(kn(Dr.sky),i)),e.hemi.groundColor.copy(kn(gn.ground).lerp(kn(Dr.ground),i)),e.hemi.intensity=gn.hemi+(Dr.hemi-gn.hemi)*i,e.key.color.copy(kn(gn.key).lerp(kn(Dr.key),i)),e.key.intensity=(gn.keyI+(Dr.keyI-gn.keyI)*i)*(1-.92*t),["uTop","uMid","uBottom"].forEach((n,s)=>e.sky[n].value.copy(kn(Eu.day[s]).lerp(kn(Eu.dusk[s]),i))),e.fog.color.copy(kn(Au.day).lerp(kn(Au.dusk),i)),e.glow.value.copy(kn(Tu.day).lerp(kn(Tu.dusk),i))}function lb(i,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,s=[new U,new U,new U],r=new U,o=new U,a=new U,l=new U;function c(S){const m=~~(S.x*n),f=~~(S.y*n),M=~~(S.z*n);return`${m},${f},${M}`}const h=i.index?i.toNonIndexed():i,u=h.attributes.position,d={};for(let S=0,m=u.count/3;S<m;S++){const f=3*S,M=s[0].fromBufferAttribute(u,f+0),_=s[1].fromBufferAttribute(u,f+1),y=s[2].fromBufferAttribute(u,f+2);r.subVectors(y,_),o.subVectors(M,_);const R=new U().crossVectors(r,o).normalize();for(let v=0;v<3;v++){const E=s[v],g=c(E);g in d||(d[g]=[]),d[g].push(R)}}const p=new Float32Array(u.count*3),x=new _e(p,3,!1);for(let S=0,m=u.count/3;S<m;S++){const f=3*S,M=s[0].fromBufferAttribute(u,f+0),_=s[1].fromBufferAttribute(u,f+1),y=s[2].fromBufferAttribute(u,f+2);r.subVectors(y,_),o.subVectors(M,_),a.crossVectors(r,o).normalize();for(let R=0;R<3;R++){const v=s[R],E=c(v),g=d[E];l.set(0,0,0);for(let b=0,T=g.length;b<T;b++){const A=g[b];a.dot(A)>e&&l.add(A)}l.normalize(),x.setXYZ(f+R,l.x,l.y,l.z)}}return h.setAttribute("normal",x),h}const sr=["root","pelvis","torso","neck","head","eyes","mouthA","mouthB","head_top","head_front","head_L","head_R","mouth_R","torso_front","hip_back","tail","shoulder_L","upperArm_L","foreArm_L","hand_L","shoulder_R","upperArm_R","foreArm_R","hand_R","hip_L","thigh_L","shin_L","foot_L","hip_R","thigh_R","shin_R","foot_R"];function cb(i){const t=i.chinY+i.headU/2,e=i.headU,n={root:[0,0,0],pelvis:[0,i.hipY,0],torso:[0,i.hipY+.05,0],neck:[0,i.shoulderY,0],head:[0,i.chinY,0],eyes:[.04*e,t+.05*e,.2*e],mouthA:[.04*e,t-.2*e,.22*e],mouthB:[.04*e,t-.24*e,.22*e],head_top:[0,i.crownY,0],head_front:[.04*e,t,0],head_L:[-.33*e,t-.065*e,-.035*e],head_R:[.33*e,t-.065*e,-.035*e],mouth_R:[.14*e,t-.22*e,.24*e],torso_front:[0,i.hipY+.05+i.torsoLen*.5,0],hip_back:[0,i.hipY-.1,-.2*i.belly],tail:[0,i.hipY-.1,-.2*i.belly],shoulder_L:[-i.shoulderX,i.shoulderY-.08,0],upperArm_L:[-i.shoulderX,i.shoulderY-.08,0],foreArm_L:[-i.shoulderX,i.shoulderY-.08-i.armUpper,0],hand_L:[-i.shoulderX,i.shoulderY-.08-i.armUpper-i.armFore,0],shoulder_R:[i.shoulderX,i.shoulderY-.08,0],upperArm_R:[i.shoulderX,i.shoulderY-.08,0],foreArm_R:[i.shoulderX,i.shoulderY-.08-i.armUpper,0],hand_R:[i.shoulderX,i.shoulderY-.08-i.armUpper-i.armFore,0],hip_L:[-i.hipX,i.hipY,0],thigh_L:[-i.hipX,i.hipY,0],shin_L:[-i.hipX,i.hipY-i.thigh,0],foot_L:[-i.hipX,i.ankleY,0],hip_R:[i.hipX,i.hipY,0],thigh_R:[i.hipX,i.hipY,0],shin_R:[i.hipX,i.hipY-i.thigh,0],foot_R:[i.hipX,i.ankleY,0]},s={pelvis:"root",torso:"pelvis",neck:"torso",head:"neck",eyes:"head",mouthA:"head",mouthB:"head",head_top:"head",head_front:"head",head_L:"head",head_R:"head",mouth_R:"head",torso_front:"torso",hip_back:"pelvis",tail:"hip_back",shoulder_L:"torso",upperArm_L:"shoulder_L",foreArm_L:"upperArm_L",hand_L:"foreArm_L",shoulder_R:"torso",upperArm_R:"shoulder_R",foreArm_R:"upperArm_R",hand_R:"foreArm_R",hip_L:"pelvis",thigh_L:"hip_L",shin_L:"thigh_L",foot_L:"shin_L",hip_R:"pelvis",thigh_R:"hip_R",shin_R:"thigh_R",foot_R:"shin_R"},r={},o={},a={};sr.forEach((l,c)=>{const h=new vf;h.name=l,r[l]=h,o[l]=new U(...n[l]),a[l]=c});for(const l of sr){const c=s[l],h=o[l].clone();c&&(r[c].add(r[l]),h.sub(o[c])),r[l].position.copy(h)}return{bones:r,list:sr.map(l=>r[l]),index:a,bind:o}}const Ic=["head","h","T","A","hem","belly","legs"];function hb(i,t,e={}){var r;const n=i[t.body],s={headScale:e.headScale??t.headScale};for(const o of Ic)s[o]=n[o]*(((r=t.shape)==null?void 0:r[o])??1)*(e[o]??1);return s}function db(i){const t=i.head*i.headScale,e=i.h*3.45-i.head,n=1.25*i.legs,s=.15,r=Math.max(.3,e-n-s),o=n+r,a=o+s,l=.5+.5*(r/1.05),c=n/1.25;return{s:i,headU:t,hipY:n,shoulderY:o,chinY:a,crownY:a+t,torsoLen:r,T:i.T,A:i.A,hem:i.hem,belly:i.belly,shoulderX:.48*i.T,armUpper:.42*l,armFore:.4*l,hipX:.15*Math.sqrt(i.T),thigh:.56*c,shin:.55*c,ankleY:.14*c}}const Cu=i=>i.crownY/i.headU,Hi={color:"#111111",flat:!0,outline:0},gs="#FFFFFF";function Ln(i){const t=i.d.headU;return{q:{a:.34*t,b:.5*t,c:.26*t,e1:.55,e2:.75},c:[.04*t,i.d.chinY+t/2,0]}}function Zf(i){const t=i.d;return{q:{a:.38*t.T,b:t.torsoLen/2+.02,c:.26*t.belly,e1:.45,e2:.5},y:t.hipY+.05+t.torsoLen/2}}const Vn=(i,t=.35)=>{const e=new Un(i,12,8);return e.scale(1,1,t),e};function ub(i,t){const e=i.d,n=e.headU,s={color:t.skin,outline:1},r={color:t.hands??t.skin,outline:.8},o=t.top,a=o.type==="body",l={color:a?t.skin:o.color,outline:1,...o.pattern?{pattern:o.pattern,color2:o.color2??gs,rep:4}:{}},c=o.type==="varsity"&&o.color2?{color:o.color2,outline:.8}:{...l,outline:.8},h=o.type==="polo"||o.type==="hawaiian",{q:u,c:d}=Ln(i);i.blob(u,"head",s,d);for(const f of[-1,1]){const M=f<0?"head_L":"head_R",_=i.rig.bind[M];if(i.blob({a:.06*n,b:.12*n,c:.113*n,e1:1,e2:1},M,{...s,outline:.8},[_.x,_.y,_.z]),f<0)for(const y of[1,-1])i.box(.02*n,.113*n,.013*n*2,M,Hi,[_.x-.062*n,_.y,_.z],[y*Math.PI/4,0,0])}i.cyl(.11,.11,e.chinY-e.shoulderY+.13,"neck",{...s,outline:.8},[0,(e.shoulderY+e.chinY)/2,0]);const{q:p,y:x}=Zf(i);if((a||o.type==="offshoulder")&&i.blob(p,"torso",s,[0,x,0]),!a){const f=o.type==="offshoulder",M=ir(p,.04,f?{b:p.b*.82}:{});if(i.blob(M,"torso",l,[0,f?x-p.b*.2:x,0]),i.torus(M.a*.92,.035,"torso",{...l,pattern:void 0,outline:.8},[0,e.hipY+.08,0],[Math.PI/2,0,0]),o.type==="hoodie"){i.box(.42*e.T,.16,.06,"torso",{color:o.color,outline:.7},[0,e.hipY+.3,p.c*.95]);for(const _ of[-1,1])i.cyl(.012,.012,.3,"torso",{color:gs,outline:0},[_*.07,e.shoulderY-.25,p.c*.9])}o.type==="polo"&&i.box(.3,.06,.12,"torso",{color:o.color,outline:.7},[0,e.shoulderY-.02,.14],[-.4,0,0]),o.collar==="tee"&&i.torus(.13,.025,"torso",{color:o.color,outline:.7},[0,e.shoulderY-.02,0],[Math.PI/2,0,0]),o.collar==="vneck"&&i.onFace(ir(p,.04),[0,x,0],fb(.2,.26),"torso",{color:t.skin},0,p.b-.18,.01)}const S={a:.34*e.T,b:.14,c:.23*e.belly,e1:.6,e2:.6},m={color:t.pants.color,outline:.8};i.blob(ir(S,.04),"pelvis",m,[0,e.hipY-.01,0]);for(const f of["L","R"]){const M=f==="L"?-1:1,_=i.rig.bind[`upperArm_${f}`],y=i.rig.bind[`foreArm_${f}`],R=i.rig.bind[`hand_${f}`],v=[0,0,M*.05];i.blob({a:.12*e.A+.04,b:e.armUpper/2+.06,c:.13*e.A+.04,e1:.5,e2:.8},`upperArm_${f}`,c,[_.x,_.y-e.armUpper/2,0],v);const E=h?r:c;i.blob({a:.11*e.A+(h?0:.04),b:e.armFore/2+.04,c:.12*e.A+(h?0:.04),e1:.5,e2:.8},`foreArm_${f}`,E,[y.x,y.y-e.armFore/2,0],v),!a&&!h&&i.torus(.125*e.A,.03,`foreArm_${f}`,{...c,pattern:void 0},[R.x,R.y+.04,0],[Math.PI/2,0,0]);const g=Math.sqrt(e.A);i.blob({a:.1*g,b:.15*g,c:.085*g,e1:.6,e2:.8},`hand_${f}`,r,[R.x,R.y-.12*g,0]);const b=t.pants.type==="wide"?1.15:1,T=i.rig.bind[`thigh_${f}`],A=i.rig.bind[`shin_${f}`],F=i.rig.bind[`foot_${f}`],L=.19*e.hem*b,O=(t.pants.type==="straight"||t.pants.type==="jeans"?.21:.25)*e.hem*b,I=L+(O-L)*.5,H=Math.sqrt(e.hem)*.9,B=i.cyl(L,I,e.thigh+.02,`thigh_${f}`,m,[T.x+M*.02,T.y-e.thigh/2,0]);Ru(B,H);const et=A.y-(F.y-.01),nt=i.cyl(I,O,et,`shin_${f}`,m,[A.x+M*.05,A.y-et/2,0]);Ru(nt,H),t.pants.type==="jeans"&&i.torus(O*.98,.03,`shin_${f}`,{color:"#9FC1EE",outline:.7},[A.x+M*.05,F.y+.02,0],[Math.PI/2,0,0]);const ft={color:t.shoes.color,outline:.8},bt={a:.15,b:.075,c:.3,e1:.7,e2:.8};i.blob(bt,`foot_${f}`,ft,[F.x+M*.07,.075,.12],[0,M*.14,0]),t.shoes.type==="sneaker"&&i.blob({...bt,a:.155,b:.03,c:.305},`foot_${f}`,{color:gs===t.shoes.color.toUpperCase()?"#DDDDDD":gs,outline:0},[F.x+M*.07,.03,.12],[0,M*.14,0])}pb(i,t)}function Ru(i,t){i.computeBoundingBox();const e=(i.boundingBox.min.z+i.boundingBox.max.z)/2,n=i.attributes.position;for(let s=0;s<n.count;s++)n.setZ(s,e+(n.getZ(s)-e)*t)}function fb(i,t){const e=new Un(1,3,2);return e.scale(i/2,t/2,.01),e}function pb(i,t){const e=i.d.headU,{q:n,c:s}=Ln(i),r=(h,u)=>[h*e,u*e],o=h=>{for(const[u,d]of[r(-.09,.03),r(.21,.03)])h(u,d)},a={...Hi};switch(t.face.eyes){case"dots3":for(const[h,u]of[r(-.05,.15),r(.23,0)])i.onFace(n,s,Vn(.05*e),"eyes",a,h,u,-.005);break;case"dots2":o((h,u)=>i.onFace(n,s,Vn(.04*e),"eyes",a,h,u,-.005));break;case"x":o((h,u)=>{for(const d of[1,-1])i.onFace(n,s,mn(.11*e,.025*e,.02),"eyes",a,h,u,0,d*Math.PI/4)});break;case"closed":case"happy":o((h,u)=>i.onFace(n,s,Pu(.05*e,.012*e),"eyes",a,h,u,0,t.face.eyes==="closed"?Math.PI:0));break;case"wide":o((h,u)=>{i.onFace(n,s,Vn(.07*e,.3),"eyes",{color:gs,outline:0},h,u,-.005),i.onFace(n,s,Vn(.035*e,.4),"eyes",a,h+.01*e,u,.012)});break}const[l,c]=r(.06,-.2);switch(t.face.mouth){case"dot":i.onFace(n,s,Vn(.05*e),"mouthA",a,...r(-.01,-.22),-.005);break;case"teeth":if(t.face.eyes==="mask")break;i.onFace(n,s,mn(.25*e,.09*e,.02),"mouthA",{color:gs,outline:0},l,c,0);for(const h of[-.06,0,.06])i.onFace(n,s,mn(.012*e,.09*e,.02),"mouthA",a,l+h*e,c,.008);break;case"smile":case"tongue":case"fangs-tongue":if(i.onFace(n,s,Pu(.07*e,.014*e),"mouthA",a,l,c,0,Math.PI),t.face.mouth!=="smile"&&i.onFace(n,s,Vn(.035*e,.3),"mouthA",{color:"#FF5AD9",outline:0},l+.01*e,c-.05*e,.004),t.face.mouth==="fangs-tongue")for(const h of[-1,1])i.onFace(n,s,mb(.015*e,.04*e),"mouthA",{color:gs,outline:0},l+h*.045*e,c-.03*e,.006,Math.PI);break;case"zigzag":for(let h=0;h<4;h++)i.onFace(n,s,mn(.05*e,.014*e,.02),"mouthA",a,l+(h-1.5)*.04*e,c,0,(h%2?1:-1)*.6);break;case"o":i.onFace(n,s,Kf(.035*e,.012*e),"mouthA",a,l,c,0);break;case"flat":i.onFace(n,s,mn(.12*e,.016*e,.02),"mouthA",a,l,c,0);break}}const mn=(i,t,e)=>new un(i,t,e),Pu=(i,t)=>new ro(i,t,5,14,Math.PI),Kf=(i,t)=>new ro(i,t,5,16),mb=(i,t)=>new ba(i,t,6),Le=(i,t,e=.8)=>({color:i??t,outline:e}),Nr=i=>new bf(i);function we(i,t,e,n){const{c:s}=Ln(i),r=i.d.headU;return[s[0]+t*r,s[1]+e*r,s[2]+n*r]}function Vo(i,t,e=.035,n=1.2){const{q:s,c:r}=Ln(i),o=i.d.headU;i.blob(ir(s,e*o),"head_top",Le(t,"#1C1C1C",1),[r[0],r[1]+.013*o,r[2]-.02*o],[-.32,0,0],n)}function ku(i,t){const e=new sh;return[[0,i],[.18,.55],[.42,.75],[.5,.2],[.3,-.5],[0,-.6],[-.3,-.5],[-.5,.2],[-.4,.62],[-.2,.45]].forEach(([s,r],o)=>o?e.lineTo(s*t,r*i*.5):e.moveTo(s*t,r*i*.5)),e.closePath(),new Ma(e,{depth:.03,bevelEnabled:!1})}const Cl={"mask.vinnie":(i,t)=>{var o;const e=i.d.headU,n={a:.29*e,b:.51*e,c:.05*e,e1:.55,e2:.3},s=we(i,.07,.013,.262);i.blob(n,"head_front",Le(t.color,"#FF5AD9",1),s);const r={color:t.color2??"#E04DC0",outline:0};for(const[a,l]of[[-.103,.086],[.215,.086]])i.onFace(n,s,Vn(.04*e,.3),"eyes",{color:"#FFFFFF",outline:0},a*e,l*e,0),i.onFace(n,s,Vn(.02*e,.4),"eyes",Hi,a*e,l*e,.006*e);i.onFace(n,s,mn(.06*e,.23*e,.02*e),"head_front",r,.088*e,-.013*e,.004*e),((o=t.params)==null?void 0:o.nose)==="cross"&&i.onFace(n,s,mn(.11*e,.05*e,.02*e),"head_front",r,.088*e,-.09*e,.006*e),i.onFace(n,s,mn(.366*e,.134*e,.02*e),"mouthA",{color:"#FFFFFF",outline:0},.052*e,-.241*e,.004*e);for(const a of[-.09,0,.09])i.onFace(n,s,mn(.012*e,.125*e,.02*e),"mouthA",Hi,(.052+a)*e,-.241*e,.012*e)},"mask.strap":(i,t)=>{const{q:e}=Ln(i),n=i.d.headU;i.blob({a:e.a+.02*n,b:.032*n,c:e.c+.02*n,e1:.2,e2:.75},"head",Le(t.color,"#6B6B6B",.7),we(i,0,.108,0))},"collar.vneck-tie":i=>{const{q:t,y:e}=Zf(i),n=ir(t,.04),s=n.b-.06,r=new sh;r.moveTo(-.1,0),r.lineTo(.1,0),r.lineTo(0,-.22),r.closePath(),i.onFace(n,[0,e,0],new Ma(r,{depth:.01,bevelEnabled:!1}),"torso",{color:"#FFFFFF",outline:0},0,s,.002),i.onFace(n,[0,e,0],mn(.056,.2,.012),"torso",Hi,0,s-.17,.012);for(const o of[.3,.45,.6])i.onFace(n,[0,e,0],Vn(.02),"torso",Hi,.012,s-o,.004)},"collar.turtleneck":(i,t)=>{i.cyl(.15,.17,.12,"neck",Le(t.color,"#00B4EE"),[0,i.d.shoulderY+.02,0],void 0,!0)},choker:(i,t)=>{const e=(i.d.shoulderY+i.d.chinY)/2+.02;i.torus(.12,.02,"neck",{color:t.color??"#111111",flat:!0,outline:0},[0,e,0],[Math.PI/2,0,0]),i.torus(.025,.008,"neck",{color:"#C0C0C0",outline:0},[0,e-.03,.12])},"hair.cap":(i,t)=>Vo(i,t.color??"#1C1C1C"),"hair.bun":(i,t)=>{const e=i.d.headU;i.sphere(.16*e,"head_top",Le(t.color,"#7B2CBF",1),we(i,-.14,.5,-.14))},"hair.chopsticks":(i,t)=>{const e=i.d.headU,n={color:t.color??"#FFE100",outline:.7};i.cyl(.014*e,.014*e,.41*e,"head_top",n,we(i,-.103,.576,-.129),[.15,0,-.45]),i.cyl(.014*e,.014*e,.35*e,"head_top",n,we(i,-.18,.559,-.129),[-.2,0,.95])},"hair.buns2":(i,t)=>{const e=i.d.headU;for(const n of[-1,1])i.sphere(.14*e,"head_top",Le(t.color,"#FF7ADB",1),we(i,n*.2,.45,-.05))},"hair.pigtails":(i,t)=>{const e=i.d.headU;for(const n of["L","R"]){const s=n==="L"?-1:1,r=n==="L"?"head_L":"head_R",o=[we(i,s*.3,.25,-.05),we(i,s*.42,.1,-.05),we(i,s*.46,-.1,-.02),we(i,s*.44,-.3,0)];i.tube(o,.02*e,r,Le(t.color,"#1C1C1C",.7),Nr),i.sphere(.09*e,r,Le(t.color,"#1C1C1C",.8),o[3])}},"hair.long":(i,t)=>{const e=i.d.headU,n=t.color??"#FF7ADB";Vo(i,n,.04,1.35),i.cyl(.36*e,.4*e,1*e,"head",Le(n,n,1),we(i,0,-.45,-.12),[0,0,0],!0);for(const s of[-1,1])i.blob({a:.06*e,b:.32*e,c:.08*e,e1:.6,e2:.8},"head",Le(n,n,.8),we(i,s*.33,-.2,.08))},"hair.swoop":(i,t)=>{const e=i.d.headU,n=t.color??"#1C1C1C";Vo(i,n);for(let s=0;s<3;s++)i.cone(.09*e,.32*e,"head_top",Le(n,n,.8),we(i,-.12+s*.12,.5+s*.02,.1-s*.04),[0,0,-1.2],[1,1,.5])},"hair.mohawk":(i,t)=>{const e=i.d.headU;for(let n=0;n<6;n++)i.cone(.07*e,.22*e,"head_top",Le(t.color,"#FF5AD9",.8),we(i,.02,.52-Math.abs(n-2.5)*.02,.2-n*.08),[-(n-2.5)*.15,0,0],[.5,1,1])},"hair.flattop":(i,t)=>{const e=i.d.headU;i.blob({a:.31*e,b:.21*e,c:.25*e,e1:.3,e2:.3},"head_top",Le(t.color,"#3FB4EA",1),we(i,0,.42,-.02))},"hair.bob":(i,t)=>{const e=i.d.headU,n=t.color??"#7B35C4";Vo(i,n,.06,1.75),i.blob({a:.3*e,b:.07*e,c:.08*e,e1:.4,e2:.6},"head_top",Le(n,n,.8),we(i,.02,.3,.22))},horns:(i,t)=>{const e=i.d.headU;for(const n of[-1,1]){const s=[we(i,n*.2,.42,.02),we(i,n*.3,.58,.02),we(i,n*.28,.74,0)];i.tube(s,.05*e,"head_top",Le(t.color,"#E04DC0",.7),Nr),i.cone(.05*e,.12*e,"head_top",Le(t.color,"#E04DC0",.7),we(i,n*.26,.8,0),[0,0,n*.3])}},"ears.cat":(i,t)=>{const e=i.d.headU;for(const n of[-1,1])i.cone(.117*e,.2*e,"head_top",Le(t.color,"#00B4EE",.8),we(i,n*.215,.49,.043),[0,0,-n*.3],[1,1,.45]),i.cone(.065*e,.12*e,"head_top",{color:t.color2??"#FF5AD9",outline:0},we(i,n*.22,.47,.086),[0,0,-n*.3],[1,1,.3])},whiskers:i=>{const{q:t,c:e}=Ln(i),n=i.d.headU;for(const[s,r]of[[-.09,1],[.224,-1]])for(const o of[-.024,0,.024])i.onFace(t,e,mn(.09*n,.007*n*2,.013),"head_front",Hi,s*n,(-.116+o)*n,0,r*o*-8)},"tail.spring":(i,t)=>{const e=i.d,n=-.22*e.belly,s=e.shoulderY-.25,r=[[0,e.hipY-.05,n],[-.45,e.hipY-.12,n-.08],[-.6,e.hipY+.2,n-.08],[-.62,s-.2,n-.06]];for(let a=0;a<=10;a++){const l=Math.PI+a/10*Math.PI*2.5;r.push([-.5+Math.cos(l)*.12*(1-a/22),s+Math.sin(l)*.12*(1-a/22),n-.05])}i.tube(r,.033,"tail",Le(t.color,"#00B4EE",.7),Nr);const o=r[r.length-1];i.sphere(.037,"tail",{color:t.color2??"#FFE100",outline:.7},[o[0],o[1]-.04,o[2]])},hood:(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU,r=t.color??"#5E5E5E";i.blob(ir(e,.09*s),"head",Le(r,r,1),[n[0],n[1]+.03*s,n[2]-.06*s],[-.25,0,0],1.95),i.cyl(.3*s,.36*s,.5*s,"neck",Le(r,r,.8),[0,i.d.shoulderY+.05,-.12],void 0,!0)},"face.flame":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.onFace(e,n,ku(.75*s,.42*s),"head_front",{color:t.color2??"#FFE100",flat:!0,outline:0},.02*s,-.02*s,0),i.onFace(e,n,ku(.62*s,.34*s),"head_front",{color:t.color??"#FF5AD9",flat:!0,outline:0},.02*s,-.03*s,.012*s)},"hat.bucket":(i,t)=>{const e=i.d.headU,n=t.color??"#FFFFFF";i.cyl(.3*e,.36*e,.22*e,"head_top",Le(n,n,1),we(i,0,.47,-.02)),i.cyl(.5*e,.5*e,.03*e,"head_top",Le(n,n,1),we(i,0,.37,-.02),[.12,0,0])},"glasses.shades":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU,r={color:t.color??"#111111",outline:0};for(const o of[-.09,.21])i.onFace(e,n,mn(.16*s,.1*s,.03*s),"head_front",r,o*s,.04*s,.01*s);i.onFace(e,n,mn(.16*s,.02*s,.02*s),"head_front",r,.06*s,.06*s,.012*s)},"glasses.aviator":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;for(const r of[-.09,.21])i.onFace(e,n,Vn(.085*s,.2),"head_front",{color:t.color??"#FF9E3A",outline:0},r*s,.03*s,.012*s),i.onFace(e,n,Kf(.085*s,.01*s),"head_front",{color:"#E6B94A",outline:0},r*s,.03*s,.014*s)},"visor.cyber":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.blob({a:.33*s,b:.06*s,c:e.c+.03*s,e1:.3,e2:.8},"head_front",Le(t.color,"#FF4A2A",.8),[n[0],n[1]+.04*s,n[2]]),i.onFace(e,n,mn(.4*s,.02*s,.02*s),"head_front",{color:t.color2??"#FFE100",flat:!0,outline:0},.04*s,.04*s,.035*s)},eyepatch:(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.onFace(e,n,Vn(.07*s,.3),"head_front",{color:t.color??"#111111",flat:!0,outline:0},-.09*s,.03*s,.004*s),i.torus(e.a+.01*s,.012*s,"head",{color:"#111111",flat:!0,outline:0},[n[0],n[1]+.06*s,n[2]],[Math.PI/2+.25,0,.1])},"earring.pin":(i,t)=>{const e=t.side==="R"?"head_R":"head_L",n=i.rig.bind[e],s=i.d.headU;i.cyl(.012*s,.012*s,.12*s,e,{color:t.color??"#C0C0C0",outline:0},[n.x+(t.side==="R"?.06:-.06)*s,n.y-.12*s,n.z],[0,0,.4])},"earring.hoop":(i,t)=>{const e=t.side==="R"?"head_R":"head_L",n=i.rig.bind[e],s=i.d.headU;i.torus(.05*s,.01*s,e,{color:t.color??"#FFE100",outline:0},[n.x+(t.side==="R"?.05:-.05)*s,n.y-.15*s,n.z],[0,Math.PI/2,0])},mustache:(i,t)=>{const e=i.d.headU;for(const n of[-1,1]){const s=[we(i,.06,-.12,.27),we(i,.06+n*.08,-.14,.26),we(i,.06+n*.14,-.1,.23)];i.tube(s,.022*e,"head_front",{color:t.color??"#1C1C1C",outline:0},Nr)}},headphones:(i,t)=>{var o,a;const e=i.d.headU,n=((o=t.params)==null?void 0:o.mode)==="neck",s=Le(t.color,"#2C2C2C",.7),r={color:String(((a=t.params)==null?void 0:a.cup)??t.color??"#2C2C2C"),outline:.7};if(n){const l=i.d.shoulderY+.02;for(const c of[-1,1])i.cyl(.15,.15,.08,"neck",r,[c*.24,l,.08],[0,0,Math.PI/2+c*.3]);i.torus(.26,.025,"neck",s,[0,l-.02,-.02],[Math.PI/2-.15,0,0],Math.PI*1.15);return}for(const l of[-1,1]){const c=we(i,l*.38,-.06,0);if(i.cyl(.19*e,.19*e,.09*e,l<0?"head_L":"head_R",r,c,[0,0,Math.PI/2]),l<0)for(const h of[1,-1])i.box(.02,.15*e,.02*e,"head_L",Hi,[c[0]-.05*e,c[1],c[2]],[h*Math.PI/4,0,0])}i.torus(.4*e,.028*e,"head_top",s,we(i,0,.02,-.03),[.14,0,-.03],3.5)},"prop.cup":i=>{const t=i.rig.bind.hand_R;i.cyl(.08,.06,.2,"hand_R",{color:"#FFFFFF",outline:.7},[t.x+.05,t.y-.08,.1]),i.cyl(.085,.085,.05,"hand_R",{color:"#111111",outline:0},[t.x+.05,t.y+.03,.1])},"prop.umbrella":i=>{const t=i.rig.bind.hand_R;i.cyl(.02,.02,1.6,"hand_R",{color:"#111111",outline:.6},[t.x+.05,t.y+.6,.05]),i.cone(.75,.4,"hand_R",{color:"#0AB8EE",outline:.7},[t.x+.05,t.y+1.45,.05])},"prop.briefcase":i=>{const t=i.rig.bind.hand_R;i.box(.42,.3,.12,"hand_R",{color:"#8B5A2B",outline:.7},[t.x+.05,t.y-.35,0]),i.torus(.07,.015,"hand_R",{color:"#111111",outline:0},[t.x+.05,t.y-.18,0])},"prop.bag":i=>{const t=i.rig.bind.hand_R;i.box(.4,.42,.22,"hand_R",{color:"#E2B77F",outline:.7},[t.x+.05,t.y-.38,0]),i.cyl(.05,.05,.42,"hand_R",{color:"#F2C46B",outline:.6},[t.x-.05,t.y-.05,0],[0,0,.3])},"prop.balloon":i=>{const t=i.rig.bind.hand_R;i.cyl(.006,.006,1.3,"hand_R",{color:"#111111",outline:0},[t.x+.1,t.y+.6,0]),i.sphere(.3,"hand_R",{color:"#FF7ADB",outline:.7},[t.x+.12,t.y+1.45,0],[1,1.2,1])},"prop.flowers":i=>{const t=i.rig.bind.hand_R;i.cone(.12,.35,"hand_R",{color:"#F4EEDF",outline:.6},[t.x+.05,t.y+.05,.1],[Math.PI,0,0]),["#FF7ADB","#FFE100","#0AB8EE"].forEach((e,n)=>i.sphere(.08,"hand_R",{color:e,outline:.6},[t.x+.05+(n-1)*.09,t.y+.3+n%2*.06,.1]))},"prop.dog":i=>{const t=i.rig.bind.hand_R,e=1,n={color:"#FFFFFF",outline:.7};i.blob({a:.32,b:.17,c:.18,e1:.8,e2:.8},"root",n,[e,.4,.2]),i.sphere(.16,"root",n,[e+.32,.62,.2]);for(const[s,r]of[[-.18,.1],[-.18,.3],[.18,.1],[.18,.3]])i.cyl(.04,.04,.3,"root",{color:"#111111",outline:0},[e+s,.15,r]);i.tube([[t.x,t.y-.1,.05],[e*.6,.9,.15],[e+.3,.6,.2]],.012,"hand_R",{color:"#FF4A2A",outline:0},Nr)}};function gb(i,t){var e;for(const n of t.attach)(e=Cl[n.part])==null||e.call(Cl,i,n,t)}const pr=.58;function Fu(i,t,e){const n=e?i.filter(M=>M.bone===e):i;if(!n.length)return null;const s=n.map(M=>{const _=M.geo.index?M.geo.toNonIndexed():M.geo;_.attributes.uv||_.setAttribute("uv",new ye(new Float32Array(_.attributes.position.count*2),2)),_.attributes.normal||_.computeVertexNormals();const y=lb(_.clone(),Math.PI);return{g:_,hull:y.attributes.normal,part:M}}),r=s.reduce((M,_)=>M+_.g.attributes.position.count,0),o=new Float32Array(r*3),a=new Float32Array(r*3),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*3),u=new Float32Array(r*3),d=new Float32Array(r*4),p=new Float32Array(r),x=new Uint16Array(r*4),S=new Float32Array(r*4);let m=0;for(const{g:M,hull:_,part:y}of s){const R=M.attributes.position,v=M.attributes.normal,E=M.attributes.uv,g=nu(y.paint.color),b=nu(y.paint.color2??y.paint.color),T=Math.max(0,ah.indexOf(y.paint.pattern??"none")),A=t.index[y.bone],F=t.bind[y.bone];for(let L=0;L<R.count;L++,m++){const O=R.getX(L)-(e?F.x:0),I=R.getY(L)-(e?F.y:0),H=R.getZ(L)-(e?F.z:0);o.set([O,I,H],m*3),a.set([v.getX(L),v.getY(L),v.getZ(L)],m*3),l.set([_.getX(L),_.getY(L),_.getZ(L)],m*3),c.set([E.getX(L),E.getY(L)],m*2),h.set([g.r,g.g,g.b],m*3),u.set([b.r,b.g,b.b],m*3),d.set([T,y.paint.rep??3,y.paint.flat?1:0,0],m*4),p[m]=y.paint.outline??.8,x[m*4]=A,S[m*4]=1}}const f=new He;return f.setAttribute("position",new _e(o,3)),f.setAttribute("normal",new _e(a,3)),f.setAttribute("aHullNormal",new _e(l,3)),f.setAttribute("uv",new _e(c,2)),f.setAttribute("color",new _e(h,3)),f.setAttribute("color2",new _e(u,3)),f.setAttribute("aPat",new _e(d,4)),f.setAttribute("aOutline",new _e(p,1)),e||(f.setAttribute("skinIndex",new Kc(x,4)),f.setAttribute("skinWeight",new _e(S,4))),f.computeBoundingSphere(),f}function ph(i,t,e={}){var m;const n=db(hb(t,i,e.lab)),s=cb(n),r=new hn;r.name=`peepl-${i.id}`,r.add(s.bones.root),r.updateMatrixWorld(!0);const o=e.groups?null:new Qc(s.list),a=Xy(),l=qy(),c=[],h=[],u=[],d=[];for(const f of e.lods??[0,1,2]){const M=new Gy(n,s,Hy[f]);ub(M,i),gb(M,i);const _=new hn;_.name=`lod${f}`;let y=0;if(o){const R=Fu(M.items,s);d.push(R);const v=new ud(R,a),E=new ud(R,l);for(const g of[v,E])g.frustumCulled=!1,g.bind(o);v.castShadow=!0,_.add(v,E),h.push(E),y=R.attributes.position.count/3*2}else for(const R of sr){const v=Fu(M.items,s,R);if(!v)continue;d.push(v);const E=new Me(v,a),g=new Me(v,l);E.castShadow=!0,s.bones[R].add(E,g),E.userData.lod=g.userData.lod=f,h.push(g),y+=v.attributes.position.count/3*2}for(const R of M.items)R.geo.dispose();c[f]=_,u[f]=y,r.add(_)}r.scale.setScalar(pr);let p=!0,x=((m=e.lods)==null?void 0:m[0])??0;const S={id:i.id,root:r,rig:s,dims:n,lods:c,hulls:h,tris:u,setLod(f){x=f,c.forEach((M,_)=>M&&(M.visible=_===f));for(const M of h)o&&(M.visible=p);o||s.bones.root.traverse(M=>{M.userData.lod!==void 0&&(M.visible=M.userData.lod===f&&(p||!h.includes(M)))})},setOutline(f){p=f,S.setLod(x)},dispose(){for(const f of d)f.dispose();r.removeFromParent()}};return S.setLod(x),S}const xb=["idle","walk","talk","sit","react","turn","wave","joy","tv","read","browse","sleep"],sn=Math.PI/180,Go=i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,rs=i=>Math.min(1,Math.max(0,i));class Lu{constructor(t=9){D(this,"x",0);D(this,"v",0);this.w=t}step(t,e){const n=this.w*this.w*(t-this.x)-2*this.w*this.v;return this.v+=n*e,this.x+=this.v*e,this.x}}class mh{constructor(t,e,n="peepl"){D(this,"base","idle");D(this,"talking",!1);D(this,"speed",1.6);D(this,"yaw",0);D(this,"t",0);D(this,"bindLocal");D(this,"shots",[]);D(this,"baseFrom","idle");D(this,"baseAt",-10);D(this,"rng");D(this,"nextBlink",2);D(this,"nextLook",3);D(this,"lookFrom",0);D(this,"lookTo",0);D(this,"lookAt",0);D(this,"tail",new Lu(9));D(this,"bun",new Lu(10));D(this,"prevPelvisX",0);D(this,"d");this.rig=t,this.bindLocal={};for(const s of sr)this.bindLocal[s]=t.bones[s].position.clone();this.rng=Gf(ua(n)),this.d=e}play(t,e){t==="talk"?this.talking=!0:t==="react"||t==="wave"||t==="joy"?this.shots.push({clip:t,at:this.t}):t==="turn"?this.shots.push({clip:t,at:this.t,from:this.yaw,to:e??this.yaw+Math.PI/2}):t!==this.base&&(this.baseFrom=this.base,this.base=t,this.baseAt=this.t)}ok(){return this.rig.list.every(t=>[t.position.x,t.position.y,t.position.z,t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w,t.scale.y].every(Number.isFinite))}update(t){this.t+=t;const e=this.t,n=this.rig.bones;for(const h of sr){const u=n[h];u.position.copy(this.bindLocal[h]),u.rotation.set(0,0,0),u.scale.set(1,1,1)}const s=rs((e-this.baseAt)/.7),r=s*s*(3-2*s);this.applyBase(this.baseFrom,1-r,e),this.applyBase(this.base,r,e),this.base!=="sleep"&&this.ground(),n.torso.scale.y=1+.012*Math.sin(2.6*e),this.base!=="walk"&&this.base!=="sleep"&&(n.pelvis.position.x+=.02*Math.sin(e*.9)*Math.sin(e*.37)),e>=this.nextLook&&(this.lookFrom=this.look(e),this.lookTo=(this.rng()*2-1)*10*sn,this.lookAt=e,this.nextLook=e+3+this.rng()*3),n.head.rotation.y+=this.look(e),e>=this.nextBlink+.12&&(this.nextBlink=e+2.5+this.rng()*3.5),(e>=this.nextBlink&&e<this.nextBlink+.12||this.base==="sleep")&&(n.eyes.scale.y=.1),this.talking&&(n.mouthA.scale.y=Math.floor(e*14)%2?1.7:1,n.head.rotation.x+=2*sn*Math.sin(e*9));let o=0,a=1;this.shots=this.shots.filter(h=>{const u=e-h.at;if(h.clip==="react")return u>.5?!1:(a=u<.08?1-.08*(u/.08):u<.2?.92+.18*((u-.08)/.12):1+.1*(1-Go(rs((u-.2)/.3))),o+=u<.38?.18*Math.sin(Math.PI*u/.38):0,!0);if(h.clip==="joy")return u>.8?!1:(o+=.2*Math.abs(Math.sin(Math.PI*u/.4)),!0);if(h.clip==="wave"){if(u>1.4)return!1;const p=Math.min(rs(u/.2),rs((1.4-u)/.2));return n.upperArm_R.rotation.z+=150*sn*p,n.foreArm_R.rotation.z+=.4*Math.sin(u*3*Math.PI*2)*p,!0}const d=rs(u/.35);return this.yaw=h.from+(h.to-h.from)*Go(d),n.head.rotation.y+=(h.to-h.from)*(Go(rs((u+.08)/.35))-Go(d)),u<.45}),n.root.position.y+=o,n.root.scale.y*=a,n.root.scale.x*=1+(1-a)*.5,n.root.rotation.y+=this.yaw;const l=n.pelvis.position.x+n.pelvis.rotation.y,c=(l-this.prevPelvisX)/Math.max(t,.001);this.prevPelvisX=l,n.tail.rotation.z=this.tail.step(-c*.05+.05*Math.sin(e*1.3),t),n.head_top.rotation.z=this.bun.step(-n.head.rotation.y*.15+o*.3,t)}ground(){const t=this.rig.bones,e=this.d;let n=0;for(const s of["L","R"]){const r=t[`thigh_${s}`].rotation.x,o=r+t[`shin_${s}`].rotation.x,a=t[`foot_${s}`].position.y-this.bindLocal[`foot_${s}`].y;n=Math.max(n,e.thigh*Math.cos(r)+(e.hipY-e.thigh-e.ankleY)*Math.cos(o)+e.ankleY-a)}t.pelvis.position.y-=e.hipY-n}look(t){const e=rs((t-this.lookAt)/.5);return this.lookFrom+(this.lookTo-this.lookFrom)*e*e*(3-2*e)}applyBase(t,e,n){if(e<=0)return;const s=this.rig.bones;switch(t){case"walk":{const r=this.speed,o=1.5+.4*r,a=n*o*Math.PI,l=Math.asin(Math.min(.9,r/o/2.5)),c=Math.sin(a);s.thigh_L.rotation.x+=-l*c*e,s.thigh_R.rotation.x+=l*c*e,s.shin_L.rotation.x+=Math.max(0,c)*l*1.3*e,s.shin_R.rotation.x+=Math.max(0,-c)*l*1.3*e,s.upperArm_L.rotation.x+=l*.8*c*e,s.upperArm_R.rotation.x+=-l*.8*c*e,s.pelvis.rotation.z+=2*sn*c*e,s.pelvis.rotation.y+=6*sn*c*e,s.torso.rotation.y+=-8*sn*c*e,s.head.rotation.y+=7*sn*c*e,s.foot_L.position.y+=Math.max(0,-c)*.08*e,s.foot_R.position.y+=Math.max(0,c)*.08*e;break}case"sit":case"tv":{for(const r of["L","R"])s[`thigh_${r}`].rotation.x+=-85*sn*e,s[`shin_${r}`].rotation.x+=85*sn*e,s[`upperArm_${r}`].rotation.x+=-25*sn*e,s[`foreArm_${r}`].rotation.x+=-35*sn*e;s.torso.rotation.x+=4*sn*e,t==="tv"&&(s.head.rotation.x+=4*sn*Math.sin(n*Math.PI*2/4)*e);break}case"sleep":s.root.rotation.x+=-Math.PI/2*e,s.root.position.y+=.5*e;break;case"read":s.upperArm_L.rotation.x+=-40*sn*e,s.foreArm_L.rotation.x+=-70*sn*e,s.head.rotation.x+=12*sn*e;break;case"browse":s.head.rotation.y+=.5*Math.sin(n*.5)*e;break}}}const Jf="peepls.shapeLab",vb=20*Math.PI/180,_b=1.2,yb=[["2d art",1],["clay sheet",.85],["low poly",.7],["chibi",1.63]],Iu=[{key:"headScale",label:"headScale",min:.5,max:1.6,sane:[.7,1]},{key:"head",label:"head",min:.4,max:2.5,sane:[.9,1.3]},{key:"h",label:"height",min:.4,max:2.5,sane:[.9,1.2]},{key:"T",label:"torso width",min:.4,max:2.5,sane:[.85,2]},{key:"A",label:"arm thickness",min:.4,max:2.5,sane:[.8,1.5]},{key:"hem",label:"trouser hem",min:.4,max:2.5,sane:[.75,1.85]},{key:"belly",label:"belly depth",min:.4,max:2.5,sane:[.85,1.5]},{key:"legs",label:"leg length",min:.4,max:2.5,sane:[.85,1.1]}];function bb(){try{const i=localStorage.getItem(Jf);if(i)return{all:{},per:{},scope:"this",...JSON.parse(i)}}catch{}return{all:{},per:{},scope:"this"}}function Wo(i){try{localStorage.setItem(Jf,JSON.stringify(i))}catch{}}function Mb(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new so(i)}function wb(){let i,t=0;const e=new _a,n=new xn(22,16/9,.1,400);let s=[],r=[],o,a="vinnie",l=!1,c=null,h=0,u=!0,d="idle",p=null,x=.6,S=null,m=bb();const f=[];let M,_,y,R,v;const E={},g={},b=new Jt,T=(pt,Et)=>{const j=s.find(K=>K.id===pt)??s[0],rt=Et??p;return rt?{...j,body:rt}:j},A=pt=>({...m.all,...m.per[pt]??{}});function F(){for(const pt of f)pt.peepl.dispose();f.length=0}function L(pt=!1){F();const Et=l?c??r.map(rt=>({id:rt})):[{id:a}],j=l?c?0:1:h;Et.forEach(({id:rt,body:K,lab:_t},At)=>{const St=Et,gt=ph(T(rt,K),o,{lab:{...A(rt),..._t??{}},groups:i.params.rig==="groups",lods:pt||l?[j]:[0,1,2]});gt.setLod(j),gt.setOutline(u),gt.root.position.x=l?(At-(St.length-1)/2)*_b*(c?1.6:1):0,e.add(gt.root);const Ut=new mh(gt.rig,gt.dims,rt);Ut.play(d),f.push({peepl:gt,anim:Ut})}),M.count=f.length,_.visible=!l,In.chars=f.length,In.lod=[l?0:h===0?1:0,l?f.length:h===1?1:0,h===2&&!l?1:0],O()}function O(){var j;for(const[rt,K]of Object.entries(g))K.setAttribute("aria-pressed",String(!l&&rt===a));const pt=m.scope==="all"?m.all:m.per[a]??{};for(const rt of Iu){const K=pt[rt.key]??(rt.key==="headScale"?T(a).headScale:1);E[rt.key]&&(E[rt.key].value=String(K))}const Et=(j=f[0])==null?void 0:j.peepl;Et&&v&&(v.textContent=`${Cu(Et.dims).toFixed(2)} heads`)}function I(pt,Et,j){var K;const rt=m.scope==="all"?m.all:(K=m.per)[a]??(K[a]={});rt[pt]=Et,Wo(m),L(j)}function H(){var rt;const pt=A(a),Et=m.scope==="all"?{bodyTypes:Object.fromEntries(Object.entries(o).map(([K,_t])=>[K,Object.fromEntries(Ic.map(At=>[At,+(_t[At]*(m.all[At]??1)).toFixed(3)]))]))}:{headScale:pt.headScale??T(a).headScale,shape:Object.fromEntries(Ic.filter(K=>pt[K]!==void 0).map(K=>[K,pt[K]]))},j=JSON.stringify(Et,null,2);(rt=navigator.clipboard)==null||rt.writeText(j).catch(()=>{}),i.toast.show(j.length>60?`${j.slice(0,57)}…`:j,2)}const B=(pt,Et,j="")=>{const rt=V("button",{class:"pixel",style:`pointer-events:auto;font-size:24px;padding:2px 12px 4px;border-radius:999px;border:2px solid var(--white);color:var(--white);background:var(--ink);${j}`});return rt.textContent=pt,rt.addEventListener("click",K=>{K.stopPropagation(),Et()}),rt};function et(pt){const Et="position:absolute;top:120px;width:380px;max-height:900px;overflow:auto;background:var(--ink);color:var(--white);border-radius:24px;padding:18px;display:flex;flex-direction:column;gap:10px;pointer-events:auto",j=gt=>V("div",{class:"display",style:"font-size:28px;color:var(--yellow)"},gt),rt=(...gt)=>V("div",{style:"display:flex;flex-wrap:wrap;gap:6px"},...gt),K=rt(...r.map(gt=>g[gt]=B(gt,()=>{l=!1,a=gt,L()}))),_t=V("select",{class:"pixel",style:"font-size:24px;pointer-events:auto"});for(const gt of["","thin","average","stocky","xl"])_t.append(V("option",{value:gt},gt||"body: cast.json"));_t.addEventListener("change",()=>{p=_t.value||null,L()}),y=V("div",{class:"s99-left",style:`${Et};left:40px`},j("cast"),K,_t,j("clips"),rt(...xb.map(gt=>B(gt,()=>{var Ut;return(Ut=Ct.clip)==null?void 0:Ut.call(Ct,gt)}))),j("view"),rt(B("lod 0",()=>{var gt;return(gt=Ct.lod)==null?void 0:gt.call(Ct,0)}),B("lod 1",()=>{var gt;return(gt=Ct.lod)==null?void 0:gt.call(Ct,1)}),B("lod 2",()=>{var gt;return(gt=Ct.lod)==null?void 0:gt.call(Ct,2)}),B("line-up",()=>{var gt;return(gt=Ct.lineup)==null?void 0:gt.call(Ct,!l)}),B("outline",()=>{var gt;return(gt=Ct.outline)==null?void 0:gt.call(Ct,!u)}))),v=V("div",{class:"pixel heads-out",style:"font-size:30px;color:var(--yellow)"});const At=Iu.map(gt=>{const Ut=V("input",{type:"range",min:gt.min,max:gt.max,step:.01,"aria-label":gt.label,style:"width:100%;accent-color:var(--pink);pointer-events:auto"});Ut.addEventListener("input",()=>I(gt.key,Number(Ut.value),!0)),Ut.addEventListener("change",()=>I(gt.key,Number(Ut.value),!1)),E[gt.key]=Ut;const st=at=>(at-gt.min)/(gt.max-gt.min)*100,ut=V("div",{style:`position:absolute;left:${st(gt.sane[0])}%;width:${st(gt.sane[1])-st(gt.sane[0])}%;top:0;bottom:0;background:var(--lit-white-60);opacity:0.25;border-radius:6px`});return V("label",{class:"pixel",style:"font-size:22px;display:flex;flex-direction:column;gap:2px"},gt.label,V("div",{style:"position:relative"},ut,Ut))}),St=B("scope: this peepl",()=>{m.scope=m.scope==="all"?"this":"all",St.textContent=m.scope==="all"?"scope: everyone":"scope: this peepl",Wo(m),O()});St.textContent=m.scope==="all"?"scope: everyone":"scope: this peepl",R=V("div",{class:"s99-right",style:`${Et};right:40px`},j("shape lab"),v,rt(...yb.map(([gt,Ut])=>B(gt,()=>I("headScale",Ut,!1)))),...At,rt(St,B("reset",()=>{m.scope==="all"?m.all={}:delete m.per[a],Wo(m),L()}),B("copy json",H))),pt.append(y,R)}const nt=document.getElementById("gl"),ft=pt=>{S={x:pt.clientX,o:x}},bt=pt=>{S&&(x=S.o-(pt.clientX-S.x)*.008)},It=()=>{S=null};function Vt(pt){const Et=pt.clone().project(n);return[(Et.x+1)/2*innerWidth,(1-Et.y)/2*innerHeight]}return{id:"S99",mount(pt,Et){i=pt,s=pt.data.cast.cast,o=pt.data.cast.bodyTypes,r=pt.copy.S12.lineup,pt.params.cast&&s.some(K=>K.id===pt.params.cast)&&(a=pt.params.cast),u=pt.params.outline!=="none";const j=ur({lowgpu:pt.params.lowgpu});j.shadowMap.enabled=!1,fr(!0);const rt=fh();e.add(rt.group),M=new Ms(new ji(1,1),new Yn({map:Mb(),transparent:!0,depthWrite:!1}),16),M.renderOrder=-1,e.add(M),_=new Me(new un(.6,.6,.6),new Ei({color:16769280,gradientMap:Ai()})),_.position.set(1.5,.3,-.4),e.add(_),et(Et),nt.addEventListener("pointerdown",ft),addEventListener("pointermove",bt),addEventListener("pointerup",It),Object.assign(Ct,{cast:K=>{l=!1,a=K,L()},shape:(K,_t)=>{K==="all"?m.all=_t??{}:_t?m.per[K]=_t:delete m.per[K],Wo(m),L()},clip:K=>{d=K;for(const _t of f)_t.anim.play(d)},lod:K=>{h=K,l=!1,L()},lineup:K=>{l=K,c=null,L()},row:K=>{l=!0,c=K,L()},outline:K=>{u=K;for(const _t of f)_t.peepl.setOutline(K)},measure:()=>{let K=1/0,_t=0;const At=new U;for(const St of f){St.peepl.root.updateMatrixWorld(!0);for(const gt of["foot_L","foot_R"])St.peepl.rig.bones[gt].getWorldPosition(At),K=Math.min(K,At.y/pr-St.peepl.dims.ankleY);St.peepl.rig.bones.head_top.getWorldPosition(At),_t=At.y/pr/St.peepl.dims.headU}return{heads:f.length===1?_t:Cu(f[0].peepl.dims),soleMin:K,rigOk:f.every(St=>St.anim.ok())}},swatchPx:()=>_.visible?Vt(new U(_.position.x,_.position.y+.3,_.position.z)):null,centrePx:()=>Vt(new U(0,1.1,0))}),L()},enter(){this.update(0,0)},update(pt,Et){t=Et;const j=l?c?6+c.length*3:30:8.5,rt=l?.3:.42,K=l?0:x,_t=new U(l?0:.35,l?1:.95,0);n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),n.position.set(_t.x+Math.sin(K)*Math.cos(rt)*j,_t.y+Math.sin(rt)*j,_t.z+Math.cos(K)*Math.cos(rt)*j),n.lookAt(_t),f.forEach((At,St)=>{At.anim.update(pt),l||(At.peepl.root.rotation.y=t*vb),b.makeRotationX(-Math.PI/2).setPosition(At.peepl.root.position.x,.005,At.peepl.root.position.z),b.scale(new U(.64,.64,1)),M.setMatrixAt(St,b)}),M.instanceMatrix.needsUpdate=!0,In.rigOk=f.every(At=>At.anim.ok()),i.loop.drawFrame&&(ur().render(e,n),hh())},landed:()=>t>=.2,onInput(pt){var Et;pt.type==="key"&&pt.key==="l"&&((Et=Ct.lineup)==null||Et.call(Ct,!l))},exit(){},unmount(){nt.removeEventListener("pointerdown",ft),removeEventListener("pointermove",bt),removeEventListener("pointerup",It),F();for(const pt of Object.keys(Ct))delete Ct[pt];fr(!1),e.clear()},seek(pt){t=pt}}}class Sb{constructor(t,e){D(this,"el");D(this,"fill");D(this,"at",-1);this.fill=V("div",{style:"height:100%;width:0;background:var(--pink);border-radius:999px"}),this.el=V("div",{class:"friend-meter",style:"position:absolute;left:750px;top:44px;width:420px;height:96px;border-radius:24px;background:var(--ink);display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform-origin:50% 0"},V("div",{class:"display",style:"font-size:36px;color:var(--yellow)"},t),V("div",{style:"width:300px;height:12px;border-radius:999px;background:var(--lit-tier-off)"},this.fill),V("div",{class:"pixel",style:"font-size:26px;color:var(--white)"},e))}show(t){this.at=t}hide(){this.at=-1}update(t,e){if(this.at<0)return void(this.el.style.display="none");const[n,s]=Fe(t,this.at,.4,e);Nt(this.el,{display:"flex",transform:`scale(${n})`,opacity:String(s)}),this.fill.style.width=`${le(t,this.at,.8,se.draw)*100}%`}}function Qf(i,t="white"){const e=`var(--${t})`;return V("div",{class:"bubble",style:"position:absolute;left:0;top:0;transform-origin:50% 100%;pointer-events:none"},V("div",{class:"pixel bubble-box",style:`position:relative;background:${e};border:5px solid var(--ink);border-radius:18px;padding:8px 18px 10px;font-size:40px;color:var(--ink);width:max-content;max-width:900px;text-wrap:balance;line-height:1.05;margin-bottom:18px`},V("span",{class:"bubble-text"},i),V("div",{class:"bubble-tail",style:`position:absolute;left:50%;bottom:-15px;width:22px;height:22px;margin-left:-11px;background:${e};border-right:5px solid var(--ink);border-bottom:5px solid var(--ink);transform:rotate(45deg)`})))}function Eb(i,t,e,n,s,r=1,o=[]){const a=i.firstElementChild,l=`${Math.min(900,(innerWidth-24)/n)}px`;a&&a.style.maxWidth!==l&&(a.style.maxWidth=l);const c=i.offsetWidth*n/2,h=e-i.offsetHeight*n;let u=Math.min(Math.max(t,c+8),innerWidth-c-8);for(const p of o)h>p.bottom||e<p.top||u+c<p.left||u-c>p.right||(u=t<(p.left+p.right)/2?Math.min(u,p.left-c-8):Math.max(u,p.right+c+8));u=Math.min(Math.max(u,c+8),innerWidth-c-8);const d=i.querySelector(".bubble-tail");d&&(d.style.left=`calc(50% + ${Math.max(-c/n+30,Math.min(c/n-30,(t-u)/n))}px)`),Nt(i,{transform:`translate(${u}px, ${e}px) translate(-50%, -100%) scale(${n*s})`,opacity:String(r),visibility:s>.001&&r>0?"visible":"hidden"})}const Ab=7,ii=Math.PI/180,Du=.58,Dc=(i,t)=>Math.atan2(t.x-i.x,t.z-i.z),Nu=(i,t)=>{const e=i.crowd.members.get(t);if(e)return{x:e.peepl.root.position.x,z:e.peepl.root.position.z,yaw:e.anim.yaw,anim:"idle"};const n=i.sim.agents.get(t);return n?{x:n.pos[0],z:n.pos[1],yaw:n.yaw,anim:"idle"}:null};class Tb{constructor(t,e){D(this,"active",!1);D(this,"t0",0);D(this,"steps",[]);D(this,"done",new Set);D(this,"choiceAt",-1);D(this,"chips",null);D(this,"branchAt",-1);this.stage=t,this.data=e}start(){const t=this.stage,e=Nu(t,"vinnie"),n=Nu(t,"mochi");if(!e||!n)return;this.active=!0,this.t0=t.t,this.steps=this.data.steps,this.done.clear(),this.branchAt=-1,t.holdSim(!0),t.poses.set("vinnie",{...e,anim:"idle"}),t.poses.set("mochi",{...n,anim:"idle"});const s=new U((e.x+n.x)/2,0,(e.z+n.z)/2);t.rig.go({target:s.setY(1),yaw:45*ii,pitch:24*ii,dist:this.data.camera.dist},.9,"venue")}choose(t){var s;if(!this.chips||!this.active)return;const n=(((s=this.data.steps.find(r=>r.choices))==null?void 0:s.choices)??[])[t];n&&(this.stage.hud.remove("contact-ask"),this.chips=null,this.steps=n.value==="sayhi"?this.data.onSayHi:this.data.onNotNow,this.done.clear(),this.branchAt=this.stage.t,this.choiceAt=-1,n.value==="notnow"&&this.stage.choice("contact","notnow"))}update(){if(!this.active)return;const t=this.stage,e=this.branchAt>=0?this.branchAt:this.t0,n=t.t-e;if(this.steps.forEach((s,r)=>{this.done.has(r)||n<s.t||(this.done.add(r),this.run(s))}),this.chips&&this.choiceAt>=0&&t.auto()){const s=Math.min(1,(t.t-this.choiceAt)/Ab);this.chips.firstElementChild.style.background=`linear-gradient(90deg, var(--yellow) ${s*100}%, var(--white) ${s*100}%)`,s>=1&&this.choose(0)}}run(t){var s;const e=this.stage,n=t.who??"vinnie";switch(t.do){case"turn":{const r=e.poses.get(n),o=e.poses.get(t.to??"mochi");r&&o&&(r.yaw=Dc(r,o));break}case"bubble":{if(t.choices){const r=Qf(t.text??"","white"),o=V("div",{style:"display:flex;gap:12px;margin-top:10px"});t.choices.forEach((a,l)=>{const c=V("button",{class:"pixel contact-chip",style:"pointer-events:auto;font-size:38px;padding:6px 22px 8px;border-radius:999px;border:5px solid var(--ink);background:var(--white);color:var(--ink)"},a.label==="say hi"?e.copy.S8.contactYes:a.label==="not now"?e.copy.S8.contactNo:a.label);c.addEventListener("click",h=>{h.stopPropagation(),this.choose(l)}),o.append(c)}),r.querySelector(".bubble-box").append(o),e.hud.remove(`${n}-say`),e.hud.attach("contact-ask",r,e.anchor(n),e.t,60,11),this.chips=o,this.choiceAt=e.t}else e.hud.remove("contact-ask"),e.hud.bubble(`${n}-say`,t.text??"",e.anchor(n),e.t,2.4,{colour:t.style==="yellow"?"yellow":"white"});break}case"clip":(s=e.crowd.members.get(n))==null||s.anim.play(t.clip??"react");break;case"hop":e.hop(n);break;case"end":this.active=!1,t.next==="cafe"?e.choice("contact","sayhi"):(e.poses.delete("vinnie"),e.poses.delete("mochi"),e.holdSim(!1),e.townShot());break}}}class Cb{constructor(t,e){D(this,"active",!1);D(this,"t0",0);D(this,"e",0);D(this,"entered",new Set);D(this,"box");D(this,"boxAt",-1);D(this,"boxDropAt",-1);D(this,"line",null);D(this,"meter");D(this,"pills",[]);D(this,"pillAt",-1);D(this,"walks",[]);D(this,"cups",!1);D(this,"ended",!1);D(this,"orbit",null);D(this,"toastAt",-1);this.stage=t,this.data=e,this.box=new $f({VINNIE:"var(--red)",MOCHI:"var(--pink)",YOU:"var(--cyan)"},"down"),Nt(this.box.el,{left:460,top:830,display:"none"}),this.meter=new Sb(t.copy.S8.friendTitle,t.copy.S8.friendLine);const n=dn([or("dot",18,"var(--yellow)"),t.copy.S8.herePill],{size:28}),s=dn([t.copy.S8.cafePill],{size:28});Nt(s,{position:"absolute",left:50,top:50}),Nt(n,{position:"absolute",right:50,top:50}),s.classList.add("cafe-pill"),n.classList.add("here-pill"),this.pills=[s,n];for(const r of this.pills)r.style.display="none";ke(this.box.el,{left:60,top:1480,width:960,height:300}),ke(this.meter.el,{left:330,top:260}),ke(s,{left:40,top:50}),ke(n,{right:40,top:50}),t.root.append(this.box.el,this.meter.el,...this.pills)}get t(){return this.e}get lineText(){var t;return((t=this.box.el.querySelector(".dialogue-text"))==null?void 0:t.textContent)??""}start(){const t=this.stage,e=this.data.marks;this.active=!0,this.ended=!1,this.t0=t.t,this.e=0,this.entered.clear(),this.walks=[],this.line=null,this.boxAt=this.boxDropAt=-1,this.meter.hide(),this.cups=!1,t.holdSim(!0),t.hideHud(!0),t.hud.clear(),t.poses.set("vinnie",{x:e.vinnieFrom[0],z:e.vinnieFrom[1],yaw:Math.PI/2,anim:"walk"}),t.poses.set("mochi",{x:e.mochiFrom[0],z:e.mochiFrom[1],yaw:-Math.PI/2,anim:"walk"})}update(t){if(!this.active)return;const e=this.stage;this.e=e.t-this.t0;for(const a of this.data.shots)this.e>=a.t[0]&&!this.entered.has(a.id)&&this.enter(a);this.walks=this.walks.filter(a=>{const l=e.poses.get(a.id),c=a.to[0]-l.x,h=a.to[1]-l.z,u=Math.hypot(c,h),d=a.speed*t;return u<=d?(l.x=a.to[0],l.z=a.to[1],l.anim=a.then,a.yaw!==void 0&&(l.yaw=a.yaw),!1):(l.x+=c/u*d,l.z+=h/u*d,l.yaw=Math.atan2(c,h),l.anim="walk",!0)});for(const a of["vinnie","mochi"]){const l=e.crowd.members.get(a);l&&(l.anim.talking=!!this.line&&this.line.who.toLowerCase()===a&&this.e-this.line.at<Vr(this.line.text))}const n=this.boxAt<0?0:Fe(this.e,this.boxAt,.4,e.reduced)[0],s=this.boxDropAt<0?0:le(this.e,this.boxDropAt,.3,se.enter);Nt(this.box.el,{display:this.boxAt<0||s>=1?"none":"block",transform:`translateY(${s*260}px) scale(${n})`}),this.box.update(this.e,-1,e.reduced,this.line,this.line?this.e-this.line.at:0),this.meter.update(this.e,e.reduced);const[r,o]=this.pillAt<0?[0,0]:Fe(this.e,this.pillAt,.4,e.reduced);for(const a of this.pills)Nt(a,{display:this.pillAt<0?"none":"inline-flex",transform:`scale(${r})`,opacity:String(o)});this.orbit&&e.rig.go({yaw:this.orbit.from+15*ii*Math.min(1,(this.e-this.orbit.at)/7)},.01),this.e>=this.data.end.t&&!this.ended&&this.finish()}enter(t){const e=this.stage;this.entered.add(t.id);const n=e.poses.get("vinnie"),s=e.poses.get("mochi"),r=t.camera;if(r.shot==="venue"){const o=r.target?new U(r.target[0],r.target[1],r.target[2]):new U((n.x+s.x)/2,1,(n.z+s.z)/2),a=Array.isArray(r.dist)?r.dist:[r.dist??16,r.dist??16];e.rig.go({target:o,yaw:45*ii,pitch:(r.pitch??24)*ii,dist:a[0]},t.id==="C1"?0:r.seconds??.9,"venue"),a[0]!==a[1]&&e.rig.dolly(a[0],a[1],t.t[1]-t.t[0]),this.orbit=r.orbitDeg?{from:45*ii,at:this.e}:null}else if(r.shot==="close"){const o=new U(n.x,0,n.z),a=new U(s.x,0,s.z),l=o.clone().add(a).multiplyScalar(.5).setY(1.25),c=r.favour==="mochi"?a:o,h=r.favour==="mochi"?o:a;l.add(c.clone().setY(1.25).sub(l).multiplyScalar(.18));let u=Math.atan2(a.x-o.x,a.z-o.z)+Math.PI/2;Math.cos(u-45*ii)<0&&(u+=Math.PI);const d=Math.atan2(h.x-c.x,h.z-c.z);u+=25*ii*Math.sign(Math.sin(d-u)),e.rig.go({target:l,yaw:u,pitch:10*ii,dist:7.5},.5,"close");const p=u;for(const[x,S]of[[n,s],[s,n]]){const m=Dc(x,S);x.yaw=m+14*ii*Math.sign(Math.sin(p-m))}}t.line&&(this.line=t.line);for(const o of t.actions??[])this.act(o)}act([t,...e]){var o;const n=this.stage,s=a=>a==="both"?["vinnie","mochi"]:[String(a)],r=a=>typeof a=="number"?a:this.e;switch(t){case"walk":{const[a,l,c]=e,h=l==="mark"?this.data.marks[a]:c,u=l==="mark"?c*Du:1.6*Du,d=a==="vinnie"?"mochi":"vinnie",p=l==="mark"?this.data.marks[d]:null,x=p?Math.atan2(p[0]-h[0],p[1]-h[1]):a==="vinnie"?Math.PI/2:-Math.PI/2;this.walks.push({id:a,to:[...h],speed:u,then:l==="seat"?"sit":"idle",yaw:x});break}case"pill":this.pillAt<0&&(this.pillAt=r(e[1]));break;case"hide":break;case"clip":{const[a,l]=e;for(const c of s(a))l!=="sit"&&((o=n.crowd.members.get(c))==null||o.anim.play(l));break}case"turn":{const[a,l]=e,c=n.poses.get(a),h=n.poses.get(l);c&&h&&(c.yaw=Dc(c,h));break}case"bang":for(const a of s(e[0])){const l=V("div",{class:"display bang",style:"width:44px;height:52px;background:var(--yellow);border:5px solid var(--ink);border-radius:8px;font-size:40px;line-height:1;color:var(--ink);display:flex;align-items:center;justify-content:center"},"!");n.hud.attach(`bang-${a}`,l,n.anchor(a,.35),n.t,.5,8)}break;case"dialogueBox":e[0]==="rise"?this.boxAt=r(e[1]):this.boxDropAt=r(e[1]);break;case"friendMeter":this.meter.show(r(e[0]));break;case"cups":this.cups=!0;break;case"toast":this.toastAt=r(e[1]);break}}late(){this.toastAt>=0&&this.e>=this.toastAt&&(this.toastAt=-1,this.stage.toast(this.stage.copy.S8.mochiAdded))}get cupsOn(){return this.cups}finish(){this.ended=!0;const t=this.stage;t.wipe(()=>{this.active=!1,this.box.el.style.display="none",this.meter.hide(),this.meter.update(0,!0);for(const s of this.pills)s.style.display="none";this.pillAt=-1;const e=t.poses.get("vinnie"),n=t.poses.get("mochi");t.sim.placeAt("vinnie",[e.x,e.z],"sit",e.yaw),t.sim.placeAt("mochi",[n.x,n.z],"sit",n.yaw),t.poses.clear(),t.hideHud(!1),t.holdSim(!1),t.townShot()})}facing(){var n,s,r,o;const t=((n=this.stage.crowd.members.get("vinnie"))==null?void 0:n.anim.yaw)??0,e=((s=this.stage.crowd.members.get("mochi"))==null?void 0:s.anim.yaw)??0;return{vinnie:t,mochi:e,poses:{vinnie:((r=this.stage.poses.get("vinnie"))==null?void 0:r.anim)??"",mochi:((o=this.stage.poses.get("mochi"))==null?void 0:o.anim)??""}}}}class Rb{constructor(t=4){D(this,"el");D(this,"badge");D(this,"name");D(this,"tag");D(this,"segs");D(this,"popAt",-10);D(this,"tier",0);this.badge=V("span",{class:"pixel tier-badge",style:"background:var(--yellow);border:5px solid var(--ink);border-radius:12px;padding:6px 14px 8px;font-size:36px;color:var(--ink)"}),this.name=V("span",{class:"display tier-name",style:"font-size:46px;color:var(--white)"}),this.tag=V("span",{class:"pixel tier-tag",style:"border:4px solid currentColor;border-radius:8px;padding:4px 10px 6px;font-size:28px"}),this.segs=Array.from({length:t},()=>V("span",{style:"width:54px;height:12px;border-radius:4px;background:var(--lit-tier-off)"})),this.el=V("div",{class:"tier-chip",style:"position:absolute;left:50px;top:50px;transform-origin:0 0"},V("div",{style:"display:inline-flex;align-items:center;gap:14px;background:var(--ink);border-radius:999px;padding:10px 16px"},this.badge,this.name,this.tag),V("div",{style:"display:flex;gap:10px;margin:14px 0 0 16px"},...this.segs))}set(t,e,n,s,r,o){t!==this.tier&&(this.tier=t,this.popAt=o),this.badge.textContent=e,this.name.textContent=n,this.tag.textContent=s,this.tag.style.color=r?"var(--yellow)":"var(--white)",this.segs.forEach((a,l)=>a.style.background=l<t?"var(--pink)":"var(--lit-tier-off)")}update(t,e){const n=e?1:.7+.3*le(t,this.popAt,.35,se.pop);Nt(this.el,{transform:`scale(${n})`})}}class Pb{constructor(t,e,n){D(this,"el");D(this,"km");D(this,"trail");D(this,"dot");D(this,"map");D(this,"points",[]);D(this,"shownAt",-1);D(this,"shrinkAt",-1);D(this,"expanded",!1);this.km=V("span",{class:"gps-km"}),this.trail=ae("polyline",{style:"fill:none;stroke:var(--cyan);stroke-width:8;stroke-linecap:round;stroke-linejoin:round"}),this.dot=ae("circle",{r:11,style:"fill:var(--cyan);stroke:var(--ink);stroke-width:4"});const s=o=>ae("polyline",{points:o,style:"fill:none;stroke:var(--white);stroke-width:16;stroke-linecap:round;stroke-linejoin:round"});this.map=ae("svg",{class:"gps-map",width:348,height:212,viewBox:"0 0 348 212",style:"display:block;background:var(--lit-map);touch-action:none;pointer-events:auto;cursor:grab"},ae("rect",{x:196,y:120,width:90,height:70,rx:10,style:"fill:var(--lit-map-park)"}),ae("rect",{x:320,y:0,width:28,height:212,style:"fill:var(--lit-map-river)"}),s(e.map(o=>o.join(",")).join(" ")),s("20,118 330,118"),s("150,10 150,200"),this.trail,this.dot),this.el=V("div",{class:"gps-card",style:"position:absolute;right:50px;top:50px;width:360px;background:var(--white);border:6px solid var(--ink);border-radius:24px;overflow:hidden;transform-origin:100% 0;pointer-events:auto"},V("div",{class:"pixel",style:"height:46px;background:var(--ink);color:var(--yellow);font-size:30px;display:flex;align-items:center;justify-content:space-between;padding:0 16px"},V("span",{},t),this.km),this.map);let r=null;this.map.addEventListener("pointerdown",o=>{o.stopPropagation(),this.map.setPointerCapture(o.pointerId),r={x:o.clientX,y:o.clientY,moved:!1}}),this.map.addEventListener("pointermove",o=>{if(!r)return;const l=348/this.map.getBoundingClientRect().width,c=(o.clientX-r.x)*l,h=(o.clientY-r.y)*l;Math.hypot(c,h)>2&&(r.moved=!0),n(c,h),r.x=o.clientX,r.y=o.clientY}),this.map.addEventListener("pointerup",()=>{r&&!r.moved&&(this.expanded=!this.expanded),r=null})}show(t){this.shownAt<0&&(this.shownAt=t)}shrink(t){this.shrinkAt<0&&(this.shrinkAt=t)}get visible(){return this.shownAt>=0}update(t,e,n,s,r){const o=this.points[this.points.length-1];(!o||Math.hypot(o[0]-n[0],o[1]-n[1])>2)&&this.points.push([...n]),this.trail.setAttribute("points",this.points.map(u=>u.join(",")).join(" ")),this.dot.setAttribute("cx",String(n[0])),this.dot.setAttribute("cy",String(n[1])),this.km.textContent=s.replace("{km}",e.toFixed(1));const[a,l]=this.shownAt<0?[0,0]:Fe(t,this.shownAt,.3,r),c=this.shrinkAt<0?0:le(t,this.shrinkAt,.35,se.draw),h=this.expanded?600/360:1;Nt(this.el,{transform:`scale(${a*h*(1-c)})`,opacity:String(l),display:this.shownAt<0?"none":"block"})}}class kb{constructor(t){D(this,"el");D(this,"text");D(this,"lines",[]);D(this,"shownAt",-1);D(this,"x",0);this.text=V("span",{class:"ticker-text",style:"display:inline-block;white-space:nowrap;color:var(--white)"}),this.el=V("div",{class:"pixel ticker",style:"position:absolute;left:50%;top:50px;max-width:640px;display:none;align-items:center;gap:14px;background:var(--ink);border-radius:999px;padding:8px 22px 10px;font-size:30px;transform-origin:50% 0"},V("span",{style:"color:var(--yellow);flex:none"},t),V("span",{style:"overflow:hidden;flex:1;min-width:0;max-width:520px;mask-image:linear-gradient(90deg,transparent,black 28px,black calc(100% - 28px),transparent)"},this.text))}start(t,e){this.shownAt<0&&(this.shownAt=t),this.setLines(e)}setLines(t){t.join("|")!==this.lines.join("|")&&(this.lines=t,this.text.textContent=t.join("  ·  "),this.x=0)}get content(){return this.text.textContent??""}update(t,e,n){if(this.shownAt<0)return;const[s,r]=Fe(t,this.shownAt,.3,n);Nt(this.el,{display:"flex",transform:`translateX(-50%) scale(${s})`,opacity:String(r)}),this.x-=e*60;const o=this.text.scrollWidth||1;-this.x>o&&(this.x=520),this.text.style.transform=`translateX(${this.x}px)`}}const tp=(i,t)=>{const n=Math.min(1,Math.max(0,(i-t)/1.4))-1;return 1+2.70158*n**3+1.70158*n**2},vs=(i,t,e=0)=>new U(i,e,t);function ep(i,t=64){const e=document.createElement("canvas"),n=e.getContext("2d");n.font=`${t}px VT323`;const s=Math.ceil(n.measureText(i).width)+t*.75;e.width=s,e.height=Math.ceil(t*1.25);const r=t*.18;n.fillStyle="#111111",n.strokeStyle="#FFE100",n.lineWidth=t*.08,n.beginPath(),n.roundRect(n.lineWidth,n.lineWidth,e.width-2*n.lineWidth,e.height-2*n.lineWidth,r),n.fill(),n.stroke(),n.font=`${t}px VT323`,n.fillStyle="#FFE100",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e.width/2,e.height/2+t*.04);const o=new so(e);return o.colorSpace=Ze,{tex:o,aspect:e.width/e.height}}function Fb(i){const t=[];for(const e of i.buildings)e.sign&&t.push({text:e.sign.text,pos:vs(e.sign.at[0],e.sign.at[1],e.sign.z),face:e.sign.face,d0:e.d0,height:.55});for(const e of i.props)e.sign&&t.push({text:e.sign.text,pos:vs(e.at[0]+.95,e.at[1]+.01,2.1),face:"y",d0:e.d0,height:.4});for(const e of i.landmarks)e.sign&&e.monument&&t.push({text:e.sign,pos:vs(e.monument[0],e.monument[1]+.6,2.4),face:"y",d0:19.84,height:.6});return t}class Lb{constructor(t){D(this,"group",new hn);D(this,"items",[]);for(const e of t){const{tex:n,aspect:s}=ep(e.text),r=new Me(new ji(e.height*s,e.height),new Yn({map:n,transparent:!0,alphaTest:.5,side:Gn}));r.position.copy(e.pos).add(e.face==="y"?new U(0,0,.03):new U(.03,0,0)),e.face==="x"&&(r.rotation.y=Math.PI/2),this.group.add(r);const o=V("div",{class:"pixel sign-tag",style:"background:var(--ink);color:var(--yellow);border:3px solid var(--yellow);border-radius:8px;padding:4px 12px 6px;font-size:34px;white-space:nowrap"},e.text);this.items.push({def:e,mesh:r,tag:o})}}update(t){for(const e of this.items){const n=tp(t,e.def.d0);e.mesh.scale.setScalar(Math.max(1e-4,n)),e.mesh.visible=n>.01}}planePx(t,e,n){const s=this.items[t],r=s.def.pos.clone().project(e).y,o=s.def.pos.clone().add(new U(0,s.def.height,0)).project(e).y;return Math.abs(r-o)*.5*n}}class Ib{constructor(t=32){D(this,"mesh");D(this,"time",{value:0});D(this,"m",new Jt);const e=new fn({uniforms:{uTime:this.time,uColor:{value:new ne(16743131).convertLinearToSRGB()}},transparent:!0,depthWrite:!1,vertexShader:`
        uniform float uTime; attribute float aPhase; varying float vP;
        void main(){
          vP = fract((uTime + aPhase) / 1.25);
          float s = 0.6 + 0.9 * vP;
          vec4 p = instanceMatrix * vec4(position.xy * s, 0.0, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * p;
        }`,fragmentShader:"uniform vec3 uColor; varying float vP; void main(){ gl_FragColor = vec4(uColor, (1.0 - vP) * 0.9); }"});this.mesh=new Ms(new rh(.42,.56,32),e,t);const n=new Float32Array(t);for(let s=0;s<t;s++)n[s]=s*.37%1.25;this.mesh.geometry.setAttribute("aPhase",new ca(n,1)),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=3}update(t,e){this.time.value=t,e.forEach((n,s)=>{this.m.makeRotationX(-Math.PI/2).setPosition(n.x,.03,n.z),this.mesh.setMatrixAt(s,this.m)}),this.mesh.count=e.length,this.mesh.instanceMatrix.needsUpdate=!0}}class Db{constructor(t){D(this,"group",new hn);this.def=t;const[e,n]=t.size,s=a=>new Ei({color:a,gradientMap:Ai()}),r=new Me(new un(n,.55,e),s(t.color));r.position.y=.275;const o=new Me(new un(n*.8,.45,e*.55),s(t.roof??"#DDEFFF"));o.position.y=.775,r.castShadow=o.castShadow=!0,this.group.add(r,o)}update(t,e){const[n,s]=this.def.loop.path,r=Math.hypot(s[0]-n[0],s[1]-n[1]),o=t*this.def.loop.speed%r/r,a=n[0]+(s[0]-n[0])*o,l=n[1]+(s[1]-n[1])*o;this.group.position.copy(vs(a,l)),this.group.visible=e>=this.def.d0&&Math.hypot(a-19,l-19)<e}}class Nb{constructor(){D(this,"group",new hn);D(this,"banner",null);D(this,"tape",null);D(this,"pigeons");D(this,"rain");D(this,"key","");D(this,"m",new Jt);this.pigeons=new Ms(new Un(.12,8,6),new Ei({color:10132134,gradientMap:Ai()}),6),this.pigeons.visible=!1,this.rain=new Ms(new un(.02,.5,.02),new Yn({color:10469870,transparent:!0,opacity:.6}),260),this.rain.visible=!1,this.rain.frustumCulled=this.pigeons.frustumCulled=!1,this.group.add(this.pigeons,this.rain)}set(t,e,n){const s=t?`${t.id}|${t.visual}`:"";if(s!==this.key){this.key=s;for(const r of[this.banner,this.tape])r==null||r.removeFromParent();if(this.banner=this.tape=null,this.pigeons.visible=!1,!(!t||!e)){if(t.visual==="banner"&&t.banner){const{tex:r,aspect:o}=ep(t.banner,96);this.banner=new Me(new ji(.9*o,.9),new Yn({map:r,transparent:!0,alphaTest:.5,side:Gn})),this.banner.position.copy(e).add(new U(0,2.9,.2)),this.banner.name=`banner-${t.banner}`,this.group.add(this.banner)}if(t.visual==="closedTape"&&n){const r=document.createElement("canvas");r.width=128,r.height=16;const o=r.getContext("2d");for(let l=0;l<8;l++)o.fillStyle=l%2?"#111111":"#FFE100",o.fillRect(l*16,0,16,16);const a=new so(r);a.colorSpace=Ze,this.tape=new Me(new un(.06,.16,1.6),new Yn({map:a})),this.tape.position.copy(n).add(new U(.1,1,0)),this.tape.rotation.x=.25,this.tape.name="closed-tape",this.group.add(this.tape)}t.visual==="pigeons"&&(this.pigeons.visible=!0,this.pigeons.position.copy(e))}}}update(t,e,n){if(this.pigeons.visible)for(let s=0;s<6;s++){const r=Math.max(0,Math.sin(t*6+s*1.7))*.12;this.m.makeTranslation(Math.cos(s*1.1)*(.6+s%3*.3),.12+r,Math.sin(s*1.1)*(.6+s%2*.4)),this.pigeons.setMatrixAt(s,this.m)}if(this.pigeons.instanceMatrix.needsUpdate=!0,this.rain.visible=e,e){for(let s=0;s<260;s++){const r=s*7.31%26-13,o=s*3.77%26-13,a=8-(t*9+s*.37)%8;this.m.makeTranslation(n.x+r,a,n.z+o),this.rain.setMatrixAt(s,this.m)}this.rain.instanceMatrix.needsUpdate=!0}}}const Ub=[16769280,16743129,1623536,16777215],js=10;class Ob{constructor(t,e=19.84){D(this,"group",new hn);D(this,"monument",new hn);D(this,"lanterns");D(this,"spots",[]);D(this,"m",new Jt);D(this,"ink",new Yn({color:1118481,side:Je}));this.d0=e;const n=h=>new Ei({color:h,gradientMap:Ai()}),s=new Me(new un(1.4,.7,1.4),n(16051935));s.position.y=.35;const r=new Me(new mr(.22,.28,2.4,10),n(16051935));r.position.y=1.9;const o=new Me(new Un(.42,14,10),new Yn({color:16769280}));o.position.y=3.4;for(const h of[s,r,o]){h.castShadow=!0;const u=new Me(h.geometry,this.ink);u.scale.setScalar(1.06),u.position.copy(h.position),this.monument.add(h,u)}this.monument.position.copy(vs(t[0],t[1])),this.lanterns=new Ms(new Un(.09,8,6),new Yn({color:16777215}),js*4);const a=new Jt,l=vs(t[0],t[1],3.2);[[.8,28.8],[7.4,28.8],[.8,35.4],[7.4,35.4]].forEach(([h,u],d)=>{const p=vs(h,u,2.4);for(let x=0;x<js;x++){const S=(x+1)/(js+1),m=l.clone().lerp(p,S);m.y-=Math.sin(S*Math.PI)*.6,this.spots.push(m),this.lanterns.setMatrixAt(d*js+x,a.makeTranslation(m.x,m.y,m.z)),this.lanterns.setColorAt(d*js+x,new ne(Ub[(x+d)%4]))}}),this.lanterns.name="lanterns",this.lanterns.visible=!1,this.group.add(this.monument,this.lanterns)}update(t,e,n=0,s=-1){const r=tp(t,this.d0);this.monument.visible=t>this.d0,this.monument.scale.setScalar(Math.max(.001,r)),this.lanterns.visible=e&&t>this.d0+1.4,!(!this.lanterns.visible||s<0||n-s>4)&&(this.spots.forEach((o,a)=>{const l=Math.min(1,Math.max(0,(n-s-.6-a%js*.12)/.3)),c=l<=0?.001:1+2.70158*(l-1)**3+1.70158*(l-1)**2;this.lanterns.setMatrixAt(a,this.m.makeScale(c,c,c).setPosition(o))}),this.lanterns.instanceMatrix.needsUpdate=!0)}}function Bb(i,t){const e=String(t).trim().replace(/\s+/g," ").slice(0,160);let n=e.split(" ").filter(Boolean);n.filter(c=>new RegExp("^\\p{Lu}","u").test(c)).length>n.length*.6&&(n=n.map(c=>c.toLowerCase()));const r=c=>{const h=c.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);return{pre:h[1],core:h[2],post:h[3]}},o=c=>new RegExp("^\\p{Lu}","u").test(c.core)&&!i.keep.includes(c.core.toLowerCase()),a=[];for(let c=0;c<n.length;c++){const h=r(n[c]),u=c+1<n.length?r(n[c+1]):null,d=h.core.toLowerCase(),p=u&&!h.post?i.lexicon[`${d} ${u.core.toLowerCase()}`]:void 0;if(p){a.push(h.pre+p+u.post),c++;continue}if(/^\d+$/.test(h.core)){a.push(h.pre+(Number(h.core)+1)+h.post);continue}if(i.lexicon[d]){a.push(h.pre+i.lexicon[d]+h.post);continue}if(o(h)&&(c>0||u&&o(u)&&!h.post)){let x=c,S=h;for(;!S.post&&x+1<n.length&&x-c<2&&o(r(n[x+1]));)x++,S=r(n[x]);a.push(h.pre+i.pool[ua(n.slice(c,x+1).join(" ").toLowerCase())%i.pool.length]+S.post),c=x;continue}a.push(n[c])}let l=a.join(" ").replace(/[.!?]+$/,"");return l=l.charAt(0).toUpperCase()+l.slice(1),`${l}. ${i.twists[ua(e.toLowerCase())%i.twists.length]}`}const Xo=0,Ur=1,zb=2,zi=new ne,ge=(i,t,e=0)=>[i,e,t];class Hb{constructor(){D(this,"pos",[]);D(this,"nor",[]);D(this,"col",[]);D(this,"piv",[]);D(this,"rev",[]);D(this,"emit",[])}tri(t,e,n,s,r,o,a,l=Xo){zi.set(r);for(const c of[t,e,n])this.pos.push(...c),this.nor.push(...s),this.col.push(zi.r,zi.g,zi.b),this.piv.push(...o),this.rev.push(a),this.emit.push(l)}quad(t,e,n,s,r,o,a,l,c=Xo){this.tri(t,e,n,r,o,a,l,c),this.tri(t,n,s,r,o,a,l,c)}box(t,e,n,s,r,o,a,l,c,h=Xo,u){const d=(p,x,S)=>ge(t+p*s,e+x*r,n+S*o);this.quad(d(0,0,1),d(0,1,1),d(1,1,1),d(1,0,1),[0,1,0],u??a,l,c,h),this.quad(d(0,1,0),d(1,1,0),d(1,1,1),d(0,1,1),[0,0,1],a,l,c,h),this.quad(d(1,1,0),d(1,0,0),d(1,0,1),d(1,1,1),[1,0,0],a,l,c,h),this.quad(d(1,0,0),d(0,0,0),d(0,0,1),d(1,0,1),[0,0,-1],a,l,c,h),this.quad(d(0,0,0),d(0,1,0),d(0,1,1),d(0,0,1),[-1,0,0],a,l,c,h)}geometry(t,e,n,s,r,o=Xo){const a=t.index?t.toNonIndexed():t;a.attributes.normal||a.computeVertexNormals();const l=a.attributes.position,c=a.attributes.normal,h=new Jt().extractRotation(e),u=new U,d=new U;zi.set(n);for(let p=0;p<l.count;p++)u.fromBufferAttribute(l,p).applyMatrix4(e),d.fromBufferAttribute(c,p).applyMatrix4(h).normalize(),this.pos.push(u.x,u.y,u.z),this.nor.push(d.x,d.y,d.z),this.col.push(zi.r,zi.g,zi.b),this.piv.push(...s),this.rev.push(r),this.emit.push(o);t.dispose()}get count(){return this.pos.length/3}build(){const t=new He;return t.setAttribute("position",new _e(new Float32Array(this.pos),3)),t.setAttribute("normal",new _e(new Float32Array(this.nor),3)),t.setAttribute("color",new _e(new Float32Array(this.col),3)),t.setAttribute("aPivot",new _e(new Float32Array(this.piv),3)),t.setAttribute("aReveal",new _e(new Float32Array(this.rev),1)),t.setAttribute("aEmit",new _e(new Float32Array(this.emit),1)),t.computeBoundingSphere(),t}}class Vb{constructor(){D(this,"a",[]);D(this,"b",[]);D(this,"side",[]);D(this,"piv",[]);D(this,"rev",[]);D(this,"idx",[]);D(this,"n",0)}seg(t,e,n,s){for(const[o,a]of[[0,-1],[0,1],[1,1],[1,-1]])this.a.push(...t),this.b.push(...e),this.side.push(o,a),this.piv.push(...n),this.rev.push(s);const r=this.n;this.idx.push(r,r+1,r+2,r,r+2,r+3),this.n+=4}box(t,e,n,s,r,o,a,l){const c=(u,d,p)=>ge(t+u*s,e+d*r,n+p*o),h=[[c(0,0,0),c(1,0,0)],[c(1,0,0),c(1,1,0)],[c(1,1,0),c(0,1,0)],[c(0,1,0),c(0,0,0)],[c(0,0,1),c(1,0,1)],[c(1,0,1),c(1,1,1)],[c(1,1,1),c(0,1,1)],[c(0,1,1),c(0,0,1)],[c(0,0,0),c(0,0,1)],[c(1,0,0),c(1,0,1)],[c(1,1,0),c(1,1,1)],[c(0,1,0),c(0,1,1)]];for(const[u,d]of h)this.seg(u,d,a,l)}rect(t,e,n){for(let s=0;s<4;s++)this.seg(t[s],t[(s+1)%4],e,n)}build(){const t=new He;return t.setAttribute("position",new _e(new Float32Array(this.a),3)),t.setAttribute("aEnd",new _e(new Float32Array(this.b),3)),t.setAttribute("aSide",new _e(new Float32Array(this.side),2)),t.setAttribute("aPivot",new _e(new Float32Array(this.piv),3)),t.setAttribute("aReveal",new _e(new Float32Array(this.rev),1)),t.setIndex(this.idx),t.computeBoundingSphere(),t}}const je={uRadius:{value:0},uGlow:{value:0},uGlowColor:{value:new ne(16770976)},uEdgeWidth:{value:2},uViewport:{value:new Tt(1920,1080)},uEdgeColor:{value:new ne(1118481).convertLinearToSRGB()}},gh=`
uniform float uRadius;
attribute vec3 aPivot;
attribute float aReveal;
float revealScale() {
  float x = clamp((uRadius - aReveal) / 1.4, 0.0, 1.0);
  float y = x - 1.0;
  return 1.0 + 2.70158 * y * y * y + 1.70158 * y * y;
}`;let Rl=null;function Gb(){if(Rl)return Rl;const i=new Ei({color:16777215,vertexColors:!0,gradientMap:Ai()});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,{uRadius:je.uRadius,uGlow:je.uGlow,uGlowColor:je.uGlowColor}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${gh}
attribute float aEmit;
varying float vEmit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aPivot + (transformed - aPivot) * revealScale();
vEmit = aEmit;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;
uniform vec3 uGlowColor;
varying float vEmit;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
        if (vEmit > 0.5 && vEmit < 1.5) gl_FragColor.rgb = diffuseColor.rgb;
        if (vEmit > 1.5) gl_FragColor.rgb = mix(gl_FragColor.rgb, uGlowColor, uGlow);`)},i.customProgramCacheKey=()=>"peepl-town-v1",Rl=i,i}let Pl=null;function Wb(){if(Pl)return Pl;const i=new Ff({depthPacking:p0});return i.onBeforeCompile=t=>{t.uniforms.uRadius=je.uRadius,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${gh}`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aPivot + (transformed - aPivot) * revealScale();`)},i.customProgramCacheKey=()=>"peepl-town-depth-v1",Pl=i,i}let $o=null;function Xb(){return $o||($o=new fn({uniforms:{uRadius:je.uRadius,uEdgeWidth:je.uEdgeWidth,uViewport:je.uViewport,uEdgeColor:je.uEdgeColor},vertexShader:`
      ${gh}
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
      void main() { gl_FragColor = vec4(uEdgeColor, 1.0); }`,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),$o)}const pa=[19,19],$b=(i,t)=>Math.max(5.4,Math.hypot(i-pa[0],t-pa[1])),Yb=new Jt,kl=(i,t,e,n=1,s=1,r=1,o=0)=>Yb.compose(new U(...ge(i,t,e)),new Yi().setFromAxisAngle(new U(0,1,0),o),new U(n,s,r));function qb(i){var R;const t=new Hb,e=new Vb,n=(v,E,g,b,T,A,F,L,O=!0,I=0,H)=>{const B=ge(v+b/2,E+T/2,g);t.box(v,E,g,b,T,A,F,B,L,I,H),O&&e.box(v,E,g,b,T,A,B,L)};t.box(0,0,-.8,40,40,.8,i.ground.color,ge(20,20,-.8),24),t.quad(ge(0,0,.001),ge(0,40,.001),ge(40,40,.001),ge(40,0,.001),[0,1,0],i.ground.color,ge(20,20,0),0),e.box(0,0,-.8,40,40,.8,ge(20,20,-.8),24);const s={park:.004,river:.004,pond:.008,road:.01,sidewalk:.014,plaza:.012,crosswalk:.02},r=(v,E,g,b,T=0)=>{const A=ge((v[0]+v[2])/2,(v[1]+v[3])/2,E);t.quad(ge(v[0],v[1],E),ge(v[0],v[3],E),ge(v[2],v[3],E),ge(v[2],v[1],E),[0,1,0],g,A,b,T)};for(const v of i.surfaces){if(v.kind==="ground")continue;const E=s[v.kind]??.01;if(v.box){const[g,b,T,A,F,L]=v.box;n(g,b,T,A,F,L,v.color,v.d0)}else if(v.ellipse){const[g,b,T,A]=v.ellipse;t.geometry(new eh(1,24),new Jt().multiplyMatrices(kl(g,b,E,T,1,A),new Jt().makeRotationX(-Math.PI/2)),v.color,ge(g,b,E),v.d0)}else if(v.rect&&v.kind==="crosswalk"){const[g,b,T,A]=v.rect,F=A-b>T-g;for(let L=F?b:g;L<(F?A:T)-.1;L+=v.pitch??.55){const O=L+(v.stripe??.28);r(F?[g,L,T,O]:[L,b,O,A],E,v.color,v.d0)}}else if(v.rect&&(r(v.rect,E,v.color,v.d0),v.dashes)){const g=v.dashes;for(let b=.4;b<40;b+=g.pitch)(b+g.len<g.skip[0]||b>g.skip[1])&&r(g.axis==="x"?[b,g.at-.08,b+g.len,g.at+.08]:[g.at-.08,b,g.at+.08,b+g.len],E+.003,g.color,v.d0)}}const o=(v,E,g,b,T)=>{const[A,F,L,O,I,H]=v,B=.012,et=ge(A+O/2,F+I/2,L);let nt,ft;E.face==="y"?(nt=[ge(A+E.u[0],F+I+B,L+E.v[0]),ge(A+E.u[1],F+I+B,L+E.v[0]),ge(A+E.u[1],F+I+B,L+E.v[1]),ge(A+E.u[0],F+I+B,L+E.v[1])],ft=[0,0,1]):E.face==="x"?(nt=[ge(A+O+B,F+E.u[1],L+E.v[0]),ge(A+O+B,F+E.u[0],L+E.v[0]),ge(A+O+B,F+E.u[0],L+E.v[1]),ge(A+O+B,F+E.u[1],L+E.v[1])],ft=[1,0,0]):(nt=[ge(A+E.u[0],F+E.v[0],L+H+B),ge(A+E.u[0],F+E.v[1],L+H+B),ge(A+E.u[1],F+E.v[1],L+H+B),ge(A+E.u[1],F+E.v[0],L+H+B)],ft=[0,1,0]),t.quad(nt[0],nt[1],nt[2],nt[3],ft,g,et,b,T),e.rect(nt,et,b)},a=v=>{const E=v.windows,[,,,g,b,T]=v.box;for(const A of["x","y"]){const F=A==="x"?b:g;for(let L=E.margin[1];L+E.size<T-.3;L+=E.pitch)for(let O=E.margin[0];O+E.size<F-.35;O+=E.pitch){const I=v.shopFront;I&&A==="y"&&L<I.v[1]+.3&&O+E.size>I.u[0]-.2&&O<I.u[1]+.2||o(v.box,{face:A,u:[O,O+E.size],v:[L,L+E.size],color:E.color},E.color,v.d0,zb)}}};for(const v of i.buildings){const[E,g,b,T,A,F]=v.box;if(v.shopFront){const L=v.shopFront,O=.8;n(E,g,b,T,A-O,F,v.color,v.d0),n(E,g+A-O,b,L.u[0],O,F,v.color,v.d0),n(E+L.u[1],g+A-O,b,T-L.u[1],O,F,v.color,v.d0),n(E+L.u[0],g+A-O,b+L.v[1],L.u[1]-L.u[0],O,F-L.v[1],v.color,v.d0),n(E+L.u[0],g+A-O,b,L.u[1]-L.u[0],O,.02,"#C98B55",v.d0,!1),L.counter&&n(E+L.u[0]+.15,g+A-.3,b,L.u[1]-L.u[0]-.3,.3,.85,"#FFFFFF",v.d0)}else n(E,g,b,T,A,F,v.color,v.d0,!0,v.glow?Ur:0);for(const L of v.seats??[])n(L[0]-.18,L[1]-.18,0,.36,.36,L[2],"#FF7ADB",v.d0);for(const L of v.decals??[])o(v.box,L,L.color,v.d0,L.emissive?Ur:0);if(v.windows&&a(v),v.stripes)for(let L=0;L<v.stripes.count;L++)o(v.box,{face:"t",u:[.2+L*v.stripes.pitch,.2+L*v.stripes.pitch+v.stripes.width],v:[0,A],color:v.stripes.color},v.stripes.color,v.d0,0)}const l=(v,E,g,b,T,A)=>t.geometry(new Un(b,12,8),kl(v,E,g),T,ge(v,E,g-b),A),c=(v,E,g,b)=>{n(v-.1,E-.1,0,.2,.2,.9*g,"#8B5A2B",b),l(v,E,1.3*g,.75*g,"#4CAF50",b)};for(const v of i.props){const[E,g]=v.at,b=v.color??"#FFFFFF";switch(v.kind){case"blob":l(E,g,v.z,v.r,b,v.d0);break;case"rug":{const[T,A]=v.size;r([E-T/2,g-A/2,E+T/2,g+A/2],.02,b,v.d0);break}case"armchair":n(E-.45,g-.35,0,.9,.7,.42,b,v.d0),n(E-.45,g-.45,.42,.9,.18,.55,b,v.d0),n(E-.36,g-.26,.42,.72,.56,.1,v.cushion??"#0AB8EE",v.d0);break;case"floorlamp":n(E-.04,g-.04,0,.08,.08,1.5,"#111111",v.d0),n(E-.22,g-.22,1.5,.44,.44,.32,b,v.d0,!0,Ur);break;case"poster":{const[T,A]=v.size,F=v.z;o([E-T/2,g-.25,F-A/2,T,.25,A],{face:"y",u:[0,T],v:[0,A]},b,v.d0,0);for(const L of[1,-1])t.geometry(new un(.08,A*.7,.01),new Jt().multiplyMatrices(kl(E,g+.025,F),new Jt().makeRotationZ(L*.6)),"#111111",ge(E,g,F-A/2),v.d0,Ur);break}case"lamp":n(E-.07,g-.07,0,.14,.14,v.height-.22,"#111111",v.d0),n(E-.25,g-.25,v.height-.22,.5,.5,.22,"#FFE100",v.d0,!0,Ur);break;case"tree":c(E,g,v.scale??1,v.d0);break;case"bench":{const[T,A]=v.size??[1.3,.45];n(E-T/2,g-A/2,0,T,A,.38,b,v.d0),(R=v.sign)!=null&&R.pole&&(n(E+T/2+.2,g-.05,0,.1,.1,2.2,"#111111",v.d0),n(E+T/2-.05,g-.06,1.9,.6,.12,.4,"#FFE100",v.d0));break}case"bin":n(E-.18,g-.18,0,.35,.35,.8,b,v.d0);break;case"car":{if(v.loop)break;const[T,A]=v.size;n(E-T/2,g-A/2,0,T,A,.55,b,v.d0),n(E-T/2+T*.2,g-A/2+A*.1,.55,T*.55,A*.8,.45,v.roof??"#DDEFFF",v.d0);break}}}const h=i.city;let u=0;for(let v=0;v<h.grid[0];v++)for(let E=0;E<h.grid[1];E++){const g=v*h.lotPitch+h.lotOffset,b=E*h.lotPitch+h.lotOffset,T=h.lotSize,A=g<h.core[2]&&g+T>h.core[0]&&b<h.core[3]&&b+T>h.core[1],F=h.roadBands.some(([B,et])=>b<et&&b+T>B||g<et&&g+T>B);if(A||F||g+T>h.maxX||(u++,h.skipRects.some(B=>g<B[2]&&g+T>B[0]&&b<B[3]&&b+T>B[1])))continue;const L=$b(g+T/2,b+T/2);if(Gi(u*5.3)<h.treeChance){c(g+T/2,b+T/2,h.treeScale,L);continue}const O=Gi(u*3.1+1),I=1.8+O*O*10,H={d0:L,box:[g,b,0,T,T,I],color:h.palette[Math.floor(Gi(u*7.7+2)*7)],windows:{color:"#2B3566",pitch:1.25,size:.7,margin:[.55,.8]}};n(g,b,0,T,T,I,H.color,L),a(H)}const d=new Me(t.build(),Gb());d.customDepthMaterial=Wb(),d.receiveShadow=!0,d.castShadow=!0,d.frustumCulled=!1;const p=new Me(e.build(),Xb());p.frustumCulled=!1,p.renderOrder=1;const x=i.fog,S=new Ei({color:16777215,gradientMap:Ai()});S.onBeforeCompile=v=>{v.uniforms.uRadius=je.uRadius,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
uniform float uRadius;
attribute float aD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float k = clamp((uRadius - 1.0 - aD) / 0.6, 0.0, 1.0);
transformed *= 1.0 - k;`)},S.customProgramCacheKey=()=>"peepl-fog-v1";const m=x.cells*x.cells,f=new Ms(new un(x.cellSize,x.height,x.cellSize),S,m),M=new Float32Array(m),_=new ne;for(let v=0;v<x.cells;v++)for(let E=0;E<x.cells;E++){const g=v*x.cells+E,b=v*x.cellSize+x.cellSize/2,T=E*x.cellSize+x.cellSize/2;f.setMatrixAt(g,new Jt().makeTranslation(...ge(b,T,x.height/2+.03))),_.set(x.color).multiplyScalar(x.variation[0]+Gi(v*20+E)*(x.variation[1]-x.variation[0])),f.setColorAt(g,_),M[g]=Math.hypot(b-pa[0],T-pa[1])}f.geometry.setAttribute("aD",new ca(M,1)),f.frustumCulled=!1;const y=new hn;return y.add(d,p,f),{group:y,faces:d,edges:p,fog:f,triangles:d.geometry.attributes.position.count/3}}function jb(){const i={uTop:{value:new ne(702702)},uMid:{value:new ne(8377333)},uBottom:{value:new ne(14087423)},uOpacity:{value:0}},t=new fn({uniforms:i,side:Je,depthWrite:!1,transparent:!0,vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uBottom; uniform float uOpacity; varying float vY;
      void main(){ vec3 c = vY > 0.15 ? mix(uMid, uTop, smoothstep(0.15, 0.7, vY)) : mix(uBottom, uMid, smoothstep(-0.2, 0.15, vY));
      gl_FragColor = vec4(c, uOpacity);
      #include <colorspace_fragment>
      }`}),e=new Me(new Un(400,32,16),t);return e.renderOrder=-10,e.frustumCulled=!1,{mesh:e,uniforms:i}}class Zb{constructor(t=4){D(this,"uniforms",{tDiffuse:{value:null},uQuant:{value:1},uVignette:{value:.15},uSat:{value:1.06},uGrain:{value:.025},uTime:{value:0},uRes:{value:new Tt(1,1)}});D(this,"rt");D(this,"scene",new _a);D(this,"cam",new wa(-1,1,1,-1,0,1));D(this,"enabled",!0);this.rt=new $n(1,1,{samples:t,colorSpace:Ze});const e=new He;e.setAttribute("position",new ye([-1,-1,0,3,-1,0,-1,3,0],3)),e.setAttribute("uv",new ye([0,0,2,0,0,2],2));const n=new fn({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
        }`});this.scene.add(new Me(e,n)),this.uniforms.tDiffuse.value=this.rt.texture}render(t,e,n,s){if(!this.enabled){t.setRenderTarget(null),t.render(e,n);return}const r=t.getDrawingBufferSize(new Tt);(this.rt.width!==r.x||this.rt.height!==r.y)&&this.rt.setSize(r.x,r.y),this.uniforms.uRes.value.copy(r),this.uniforms.uTime.value=Math.floor(s*12)/12,t.setRenderTarget(this.rt),t.clear(),t.render(e,n),t.setRenderTarget(null),t.render(this.scene,this.cam)}dispose(){this.rt.dispose()}}const hs=Math.PI/180,Gr=1.05,Uu=[1.05,.8,.85,.9],Ou=i=>i<.5?4*i**3:1-(-2*i+2)**3/2,Yo=(i,t,e)=>i+(t-i)*e;class Kb{constructor(t){D(this,"camera",new xn(22,16/9,.5,600));D(this,"shot","town");D(this,"from");D(this,"to");D(this,"moveAt",-10);D(this,"moveDur",.9);D(this,"t",0);D(this,"distMove",null);D(this,"bias",1);this.from={...t,target:t.target.clone()},this.to={...t,target:t.target.clone()}}go(t,e=.9,n){this.from=this.current(),this.to={target:(t.target??this.to.target).clone(),yaw:t.yaw??this.to.yaw,pitch:t.pitch??this.to.pitch,dist:t.dist??this.to.dist},this.moveAt=this.t,this.moveDur=Math.max(.001,e),this.distMove=null,n&&(this.shot=n)}retarget(t){this.to.target.copy(t)}dolly(t,e,n){this.distMove={from:t,to:e,at:this.t,dur:n}}current(){const t=Ou(Math.min(1,(this.t-this.moveAt)/this.moveDur)),e=this.from,n=this.to;let s=Yo(e.dist,n.dist,t);return this.distMove&&(s=Yo(this.distMove.from,this.distMove.to,Ou(Math.min(1,(this.t-this.distMove.at)/this.distMove.dur)))),{target:e.target.clone().lerp(n.target,t),yaw:Yo(e.yaw,n.yaw,t),pitch:Yo(e.pitch,n.pitch,t),dist:s}}update(t,e,n){this.t+=t;const s=this.current(),r=n?0:(this.shot==="town"?6:this.shot==="venue"?4:0)*hs*Math.sin(this.t/20*Math.PI*2),o=s.yaw+r,a=e<1,l=s.dist*this.bias*(a?this.shot==="town"?1.45:this.shot==="venue"?1.35:1.3:1);this.camera.fov=a?this.shot==="town"?22:this.shot==="venue"?36:46:22,this.camera.aspect=e,a?this.camera.setViewOffset(e*1e3,1e3,0,90,e*1e3,1e3):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix(),this.camera.position.set(s.target.x+Math.sin(o)*Math.cos(s.pitch)*l,s.target.y+Math.sin(s.pitch)*l,s.target.z+Math.cos(o)*Math.cos(s.pitch)*l),this.camera.lookAt(s.target)}}const Zs={town:(i,t)=>({target:i,yaw:45*hs,pitch:35.264*hs,dist:t*Gr}),venue:i=>({target:i.clone().add(new U(0,1,0)),yaw:45*hs,pitch:24*hs,dist:18}),close:(i,t)=>{const e=i.clone().add(t).multiplyScalar(.5).setY(1.5);let s=Math.atan2(t.x-i.x,t.z-i.z)+Math.PI/2;return Math.cos(s-45*hs)<0&&(s+=Math.PI),{target:e,yaw:s,pitch:10*hs,dist:7.5}}},Jb={walk:"walk",tv:"tv",sit:"sit",read:"read",browse:"browse",sleep:"sleep",idle:"idle"};function Qb(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new so(i)}class tM{constructor(t,e,n=!1){D(this,"maxVisible",1/0);D(this,"group",new hn);D(this,"members",new Map);D(this,"shadows");D(this,"m4",new Jt);D(this,"v",new U);D(this,"outline",!0);this.specs=t,this.bodyTypes=e,this.groups=n,this.shadows=new Ms(new ji(1,1),new Yn({map:Qb(),transparent:!0,depthWrite:!1}),64),this.shadows.count=0,this.shadows.frustumCulled=!1,this.shadows.renderOrder=2,this.group.add(this.shadows)}ensure(t,e=t,n){let s=this.members.get(t);if(s)return s;const r=this.specs.find(l=>l.id===e)??this.specs[0],o=n?{...r,id:t,body:n.body,attach:n.attach}:r,a=ph(o,this.bodyTypes,{groups:this.groups});return a.setOutline(this.outline),this.group.add(a.root),s={id:t,peepl:a,anim:new mh(a.rig,a.dims,t),px:0,visible:!0},this.members.set(t,s),s}setOutline(t){this.outline=t;for(const e of this.members.values())e.peepl.setOutline(t)}update(t,e,n,s,r=1/0){let o=0;const a=new Set,l=u=>u.x>=16&&u.x<=22&&u.z>=16&&u.z<=22||Math.hypot(u.x-19,u.z-19)<=r-1,c=new Set,h=t.filter(l);if(h.length>this.maxVisible){const u=n.position;h.filter(d=>d.id!=="vinnie"&&d.id!=="mochi").sort((d,p)=>Math.hypot(p.x-u.x,p.z-u.z)-Math.hypot(d.x-u.x,d.z-u.z)).slice(0,h.length-this.maxVisible).forEach(d=>c.add(d.id))}for(const u of t){a.add(u.id);const d=this.ensure(u.id,u.cast,u.look),p=d.peepl.root;if(d.visible=l(u)&&!c.has(u.id),p.visible=d.visible,!d.visible)continue;p.position.set(u.x,u.anim==="sleep"?.5:0,u.z);let x=u.yaw-d.anim.yaw;x=Math.atan2(Math.sin(x),Math.cos(x)),d.anim.yaw+=x*Math.min(1,e*8),d.anim.play(Jb[u.anim]??"idle"),d.anim.update(e),d.px=this.projectedHeight(d,n,s),d.peepl.setLod(d.px>180?0:d.px>60?1:2),this.m4.makeRotationX(-Math.PI/2).setPosition(u.x,.012,u.z),this.m4.scale(new U(.64,.64,1)),this.shadows.setMatrixAt(o++,this.m4)}this.shadows.count=o,this.shadows.instanceMatrix.needsUpdate=!0;for(const[u,d]of this.members)a.has(u)||(d.visible=!1,d.peepl.root.visible=!1)}projectedHeight(t,e,n){const s=t.peepl.root,r=this.v.set(s.position.x,s.position.y,s.position.z).project(e).y,o=new U(s.position.x,s.position.y+t.peepl.dims.crownY*pr,s.position.z).project(e).y;return Math.abs(o-r)*.5*n}headPx(t,e,n,s,r=.25){const o=this.members.get(t);if(!o)return null;const a=o.peepl.root,l=new U(a.position.x,a.position.y+o.peepl.dims.crownY*pr+r,a.position.z).project(e);return[(l.x+1)/2*n,(1-l.y)/2*s,l.z<1&&Math.abs(l.x)<1&&Math.abs(l.y)<1]}dispose(){for(const t of this.members.values())t.peepl.dispose();this.members.clear(),this.group.removeFromParent()}}class eM{constructor(){D(this,"root",document.getElementById("hud3d"));D(this,"labels",new Map);D(this,"t",0)}bubble(t,e,n,s,r,o={}){this.remove(t);const a=Qf(e,o.colour);return a.dataset.id=t,no(e),this.root.append(a),this.labels.set(t,{id:t,el:a,anchor:n,at:s,until:s+r,priority:o.priority??10,hop:0}),a}attach(t,e,n,s,r,o=9){this.remove(t),e.style.position="absolute",e.style.left=e.style.top="0",e.style.transformOrigin="50% 100%",this.root.append(e),this.labels.set(t,{id:t,el:e,anchor:n,at:s,until:s+r,priority:o,hop:0})}has(t){return this.labels.has(t)}remove(t){var e;(e=this.labels.get(t))==null||e.el.remove(),this.labels.delete(t)}clear(){for(const t of[...this.labels.keys()])this.remove(t)}update(t,e){this.t+=t;const n=Math.max(.5,ga()),s=[],r=[...this.labels.values()].sort((a,l)=>l.priority-a.priority),o=[...document.querySelectorAll(".hud-avoid")].filter(a=>a.offsetParent&&a.style.visibility!=="hidden").map(a=>a.getBoundingClientRect());for(const a of r){if(this.t>a.until+.25){this.remove(a.id);continue}const l=a.anchor(),[c,h]=Fe(this.t,a.at,.3,e),u=1-le(this.t,a.until,.25,se.enter);if(!l||!l[2]){a.el.style.visibility="hidden";continue}if(s.some(([p,x])=>Math.hypot(p-l[0],x-l[1])<48)){a.el.style.visibility="hidden";continue}s.push([l[0],l[1]]),Eb(a.el,l[0],l[1],n,c,h*u,o)}}texts(){return[...this.labels.values()].filter(t=>t.el.style.visibility!=="hidden").map(t=>t.el.textContent??"")}}const nM={caption:1,bubble:2,autoWalk:0,gfx:1},iM=i=>{const[t,e]=i.split(":").map(Number);return((t??0)*60+(e??0))*60};class sM{constructor(t,e){D(this,"fired",new Map);D(this,"skipped",[]);D(this,"queue",[]);this.beats=t,this.handlers=e}markFired(...t){for(const e of t)this.fired.has(e)||this.fired.set(e,-100)}fire(t,e){const n=this.beats.find(s=>s.id===t);if(!(!n||this.fired.has(t))){this.fired.set(t,e);for(const[s,...r]of n.actions){const o=s,a=nM[o];let l=0;a!==void 0&&typeof r[a]=="number"&&(l=r[a]),o==="vinnie"&&r[0]==="standTurn"&&typeof r[1]=="number"&&(l=r[1]),this.queue.push({at:e+l,verb:o,args:r})}this.queue.sort((s,r)=>s.at-r.at)}}triggered(t,e){switch(t.on){case"s8Start":return!0;case"km":return e.km>=t.gte&&(!t.after||this.fired.has(t.after));case"near":return e.tier>=t.tierMin&&e.distance(t.a,t.b)<=t.dist;case"choice":return e.choices[t.beat]===t.value;case"any":return t.of.some(n=>"simTimeGte"in n?e.simSec>=iM(n.simTimeGte)&&this.fired.has("tier4"):this.fired.has(n.after)&&e.t-this.fired.get(n.after)>=n.realSeconds)}}update(t){if(!t.busy)for(const e of this.beats)!this.fired.has(e.id)&&this.triggered(e.trigger,t)&&this.fire(e.id,t.t);for(;this.queue.length&&this.queue[0].at<=t.t;){const{verb:e,args:n}=this.queue.shift(),s=this.handlers[e];s?s(...n):this.skipped.push(e)}}}const rM=[[1,0],[0,1],[-1,0],[0,-1]],Or=(i,t)=>i*1e3+t;class oM{constructor(t,e,n=[],s=.3,r=40){D(this,"walk",new Set);D(this,"interior");this.rightHand=s,this.interior=n;const o=(a,l,c)=>a>=c[0]&&a<=c[2]&&l>=c[1]&&l<=c[3];for(let a=0;a<r;a++)for(let l=0;l<r;l++){const c=a+.5,h=l+.5;t.some(u=>o(c,h,u))&&!e.some(u=>o(c,h,u))&&this.walk.add(Or(a,l))}}walkable(t,e){return this.walk.has(Or(t,e))}cellOf(t){return[Math.floor(t[0]),Math.floor(t[1])]}nearestWalkable(t){if(this.walkable(t[0],t[1]))return t;for(let e=1;e<6;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++)if(Math.max(Math.abs(s),Math.abs(n))===e&&this.walkable(t[0]+s,t[1]+n))return[t[0]+s,t[1]+n];return t}findPath(t,e){if(t[0]===e[0]&&t[1]===e[1])return[t];const n=new Map([[Or(t[0],t[1]),null]]),s=[t];for(let r=0;r<s.length;r++){const o=s[r];for(const[a,l]of rM){const c=o[0]+a,h=o[1]+l,u=Or(c,h);if(!(n.has(u)||!this.walkable(c,h))){if(n.set(u,o),c===e[0]&&h===e[1]){const d=[[c,h]];for(let p=o;p;p=n.get(Or(p[0],p[1])))d.push(p);return d.reverse()}s.push([c,h])}}}return null}isInterior(t,e){return this.interior.some(n=>t>=n[0]&&t<=n[2]&&e>=n[1]&&e<=n[3])}route(t,e){const n=this.nearestWalkable(this.cellOf(t)),s=this.nearestWalkable(this.cellOf(e)),r=this.findPath(n,s)??[n],o=r.map(([c,h],u)=>{const d=c+.5,p=h+.5;if(this.isInterior(d,p))return[d,p];const x=r[u-1],S=r[u+1],m=S?[S[0]-c,S[1]-h]:x?[c-x[0],h-x[1]]:[0,0];return[d-m[1]*this.rightHand,p+m[0]*this.rightHand]}),a=[t,...o,e],l=[a[0]];for(let c=1;c<a.length-1;c++){const h=l[l.length-1],u=a[c],d=a[c+1],p=(u[0]-h[0])*(d[1]-h[1])-(u[1]-h[1])*(d[0]-h[0]);Math.abs(p)>1e-6&&l.push(u)}return l.push(a[a.length-1]),l}}const Yr=86400,Nc=86400/240,Ks=20,fs=i=>{const[t,e]=i.split(":").map(Number);return((t??0)*60+(e??0))*60},aM=i=>{const t=Math.floor((i%Yr+Yr)%Yr/60);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`};function lM(i,t,e){return t<=e?i>=t&&i<e:i>=t||i<e}class cM{constructor(t=1,e="13:00"){D(this,"day");D(this,"sec");this.day=t,this.sec=fs(e)}advance(t){for(this.sec+=t;this.sec>=Yr;)this.sec-=Yr,this.day++}set(t,e=this.day){this.day=e,this.sec=fs(t)}get hhmm(){return aM(this.sec)}}class hM{constructor(t,e){D(this,"dropped",null);this.d=t,this.seed=e}forDay(t){const e=t===1?this.d.events.find(s=>s.id===this.d.forcedDay1):this.d.events[Math.floor(tr(this.seed,"event",t)()*this.d.events.length)],n=e.startHour*3600;return{ev:e,day:t,start:n,end:Math.min(86400,n+e.durationHours*3600),dropped:!1}}drop(t,e,n){const s=this.d.events.find(r=>r.id===t);return s?(this.dropped={ev:s,day:e,start:n,end:Math.min(86400,n+s.durationHours*3600),dropped:!0},this.dropped):null}today(t){return this.dropped&&this.dropped.day===t?this.dropped:this.forDay(t)}active(t,e){const n=this.today(t);return e>=n.start&&e<n.end?n:null}raining(t,e){const n=this.active(t,e);return n!=null&&n.ev.weather?n.ev.weather==="rain":t%this.d.rainEvery===0}tickerLines(t,e){return[this.today(t).ev.ticker,...this.d.tickerFiller,this.raining(t,e)?this.d.weatherLine.rain:this.d.weatherLine.sun]}}const Wr=[16,16,22,22],dM=.58,Bu=.29,zu={tv:Math.PI,shelf:-Math.PI/2,window:Math.PI,chair:Math.PI/4,bed:0,bench:0,counter:0,front:Math.PI,corner:Math.PI/4};class uM{constructor(t,e=t.routine.clock.seed){D(this,"clock");D(this,"nav");D(this,"events");D(this,"tier",1);D(this,"agents",new Map);D(this,"needs",{});D(this,"override",null);D(this,"reaction",null);D(this,"reacted",new Set);D(this,"scripted",new Set);D(this,"landmarks",new Map);D(this,"realT",0);D(this,"seed");this.d=t,this.seed=e,this.clock=new cM(t.routine.start.day,t.routine.start.time);for(const o of t.map.landmarks)this.landmarks.set(o.key,o);const n=t.map.buildings.filter(o=>o.id.startsWith("flat.")&&!/slab|wall|lamp|pillow|cover|tv/.test(o.id)).map(o=>[o.box[0],o.box[1],o.box[0]+o.box[3],o.box[1]+o.box[4]]);this.nav=new oM(t.map.nav.walkRects,[...t.map.nav.blocked,...n],[Wr,[27.8,22,33.2,22.4]],t.map.nav.rightHandOffset),this.events=t.events?new hM(t.events,e):null;const s=tr(e,"needs");for(const[o,[a,l]]of Object.entries(t.routine.needs.start))this.needs[o]=a+(l-a)*s();const r=this.spotPos("H","tv");this.add({id:"vinnie",kind:"vinnie",cast:"vinnie",pos:r,speed:t.routine.vinnie.walkSpeedU*dM,anim:"tv",place:"H",tierMin:1}),this.agents.get("vinnie").yaw=zu.tv,(t.map.placements??[]).forEach((o,a)=>{const l=o.who==="joe"?`pacer-${a}`:o.who;this.add({id:l,kind:o.b?"pacer":"stand",cast:o.who,pos:[...o.a],speed:(o.speed??.8)*1,anim:"idle",place:"",tierMin:o.tierMin,pace:o.b?o:void 0})});for(const o of t.routine.extras??[])this.add({id:o.id,kind:"extra",cast:"joe",pos:[...o.home],speed:.85,anim:"idle",place:"home",tierMin:1,look:{body:o.body,attach:o.attach}}),this.updateExtra(this.agents.get(o.id),o,!0);this.updateRoutine()}add(t){this.agents.set(t.id,{yaw:0,path:null,seg:0,moving:!1,activity:"",hidden:!1,prev:[t.pos[0],t.pos[1]],...t})}landmarkTier(t){var e;return((e=this.landmarks.get(t))==null?void 0:e.tier)??1}landmark(t){return this.landmarks.get(t)}spotPos(t,e){var r;const n=this.landmarks.get(t),s=(e&&((r=n==null?void 0:n.spots)==null?void 0:r[e]))??(n!=null&&n.spots?Object.values(n.spots)[0]:void 0)??(n==null?void 0:n.door)??(n==null?void 0:n.monument);return s?[s[0],s[1]]:[19,19]}schedule(){return this.clock.day===1?this.d.routine.vinnie.dayOff.schedule:this.d.routine.vinnie.work.schedule}activityNow(){const t=this.schedule().find(r=>lM(this.clock.sec,fs(r.from),fs(r.to)));if(!t)return{key:"home",place:"H",spot:"chair",anim:"idle"};let e=t.place.startsWith("$")?this.resolveChoice(t):t.place,n=t.spot==="auto"?void 0:t.spot,s=t.anim;if(this.landmarkTier(e)>this.tier){const r=t.fallback??{place:"H",spot:"window",anim:"idle"};e=r.place,n=r.spot,s=r.anim,this.landmarkTier(e)>this.tier&&([e,n,s]=["H","window","idle"])}return{key:`${t.from}|${e}|${n??""}|${s}`,place:e,spot:n,anim:s,beat:t.beat}}resolveChoice(t){var r,o;const e=(r=this.events)==null?void 0:r.today(this.clock.day).ev;if(t.place==="$lunch"&&(e!=null&&e.lunch))return e.lunch;if(t.place==="$evening"&&(e!=null&&e.evening))return e.evening;const n=tr(this.seed,t.place,this.clock.day);if(t.place==="$lunch")return(o=this.events)!=null&&o.raining(this.clock.day,this.clock.sec)?"K":n()<.5+(this.needs.social??.5)*.3?"C":"P";const s=this.needs;return(s.energy??1)<.35?"H":(s.social??0)>=(s.curiosity??0)?n()<.5?"Z":"C":["N","T","M"][Math.floor(n()*3)]}updateRoutine(){if(this.scripted.has("vinnie"))return;const t=this.agents.get("vinnie"),e=this.activityNow();e.key!==t.activity&&(t.activity=e.key,t.place=e.place,t.anim=e.anim,this.override=null,this.walkTo(t,this.spotPos(e.place,e.spot)),t.arriveYaw=zu[e.spot??""],t.moving||(t.yaw=t.arriveYaw??t.yaw))}updateExtra(t,e,n=!1){const s=this.clock.sec,r=[...e.plan].sort((u,d)=>fs(u[0])-fs(d[0])),o=[...r].reverse().find(u=>fs(u[0])<=s)??r[r.length-1],a=`${o[0]}|${o[1]}|${o[2]??""}`;if(a===t.activity)return;t.activity=a;const[,l,c]=o;let h;if(l==="home")h=[...e.home],t.hideOnArrive=!0;else if(c==="out"){const u=this.landmarks.get(l),d=u!=null&&u.spots?Object.values(u.spots):[],p=d.length?d[Math.floor(tr(this.seed,t.id,a)()*d.length)]:(u==null?void 0:u.door)??(u==null?void 0:u.monument)??[19,23],x=tr(this.seed,t.id,a,"j");h=[p[0]+(x()-.5)*.8,p[1]+(x()-.5)*.8],t.hideOnArrive=!1}else h=this.spotPos(l),t.hideOnArrive=c==="in";if(t.place=l,n){t.pos=[...h],t.prev=[...h],t.hidden=!!t.hideOnArrive;return}t.hidden=!1,this.walkTo(t,h),t.moving||(t.hidden=!!t.hideOnArrive)}walkTo(t,e){if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[1])<.05){t.path=null,t.moving=!1;return}t.path=this.nav.route(t.pos,e),t.seg=1,t.moving=!0}tick(t){this.clock.advance(t),this.realT+=t/Nc,this.updateRoutine();for(const e of this.d.routine.extras??[])this.updateExtra(this.agents.get(e.id),e);this.updateCrowd();for(const e of this.agents.values())e.prev=[e.pos[0],e.pos[1]],e.pace&&!this.scripted.has(e.id)?this.pace(e):this.move(e,t);this.separate(),this.tickNeeds(t),this.checkReaction()}move(t,e){if(!t.path)return;let n=t.speed*e/Nc;for(;n>0&&t.path&&t.seg<t.path.length;){const s=t.path[t.seg],r=s[0]-t.pos[0],o=s[1]-t.pos[1],a=Math.hypot(r,o);a>1e-6&&(t.yaw=Math.atan2(r,o)),a<=n?(t.pos=[s[0],s[1]],n-=a,t.seg++):(t.pos=[t.pos[0]+r/a*n,t.pos[1]+o/a*n],n=0)}t.path&&t.seg>=t.path.length&&(t.path=null,t.moving=!1,t.arriveYaw!==void 0&&(t.yaw=t.arriveYaw),t.hideOnArrive&&(t.hidden=!0))}pace(t){const e=t.pace,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),s=(this.realT*(e.speed??.8)+(e.phase??0)*n*2)%(2*n),r=s<n?s/n:2-s/n,o=e.a[0]+(e.b[0]-e.a[0])*r,a=e.a[1]+(e.b[1]-e.a[1])*r,l=s<n?1:-1;t.yaw=Math.atan2((e.b[0]-e.a[0])*l,(e.b[1]-e.a[1])*l),t.pos=[o,a],t.moving=!0}updateCrowd(){var s;const t=((s=this.events)==null?void 0:s.active(this.clock.day,this.clock.sec))??null,e=t!=null&&t.ev.crowd&&t.ev.where?Math.min(8,t.ev.crowd.size):0,n=t?`${t.ev.id}|${t.day}|${t.start}`:"";for(let r=0;r<8;r++){const o=`crowd-${r}`,a=this.agents.get(o);if(r>=e){a&&this.agents.delete(o);continue}if(a&&a.activity===n)continue;const l=this.spotPos(t.ev.where),c=r/e*Math.PI*2+.4,h=t.ev.crowd.radius,u=[l[0]+Math.cos(c)*h,l[1]+Math.sin(c)*h];this.add({id:o,kind:"crowd",cast:"joe",pos:u,speed:0,anim:"idle",place:t.ev.where,tierMin:1,activity:n}),this.agents.get(o).yaw=Math.atan2(l[0]-u[0],l[1]-u[1])}}separate(){const t=[...this.agents.values()].filter(e=>!e.hidden&&(e.moving||e.kind==="crowd")&&this.shown(e)).sort((e,n)=>e.id<n.id?-1:1);for(let e=0;e<3;e++)for(let n=0;n<t.length;n++)for(let s=n+1;s<t.length;s++){const r=t[n],o=t[s],a=o.pos[0]-r.pos[0],l=o.pos[1]-r.pos[1],c=Math.hypot(a,l);if(c>=Bu)continue;const h=c>1e-6?a/c:1,u=c>1e-6?l/c:0,d=(Bu-c)/2;r.pos=[r.pos[0]-h*d,r.pos[1]-u*d],o.pos=[o.pos[0]+h*d,o.pos[1]+u*d]}}shown(t){return!t.hidden&&this.tier>=t.tierMin}tickNeeds(t){const e=this.agents.get("vinnie"),n=e.moving?"walk":e.anim==="sleep"?"sleep":{H:"home",K:"work",C:"cafe",P:"park",Z:"plaza",N:"cinema",M:"market",T:"rummer"}[e.place]??"home",s=this.d.routine.needs.rates[n]??{};for(const r of Object.keys(this.needs))this.needs[r]=Math.min(1,Math.max(0,this.needs[r]+(s[r]??0)*t/3600))}checkReaction(){var s;const t=(s=this.events)==null?void 0:s.active(this.clock.day,this.clock.sec);if(!t)return;const e=`${t.ev.id}|${t.day}`,n=this.agents.get("vinnie");if(!(this.reacted.has(e)||n.moving||!(t.ev.everywhere||n.place===t.ev.where))){this.reacted.add(e),this.reaction=t.ev.reaction;for(const[r,o]of Object.entries(t.ev.effects))this.needs[r]=Math.min(1,Math.max(0,(this.needs[r]??.5)+o))}}scriptGo(t,e,n="idle",s){const r=this.agents.get(t);r&&(this.scripted.add(t),t==="vinnie"&&(this.override=null),r.speed||(r.speed=.93),r.anim=n,r.arriveYaw=s,r.hidden=!1,this.walkTo(r,e),!r.moving&&s!==void 0&&(r.yaw=s))}placeAt(t,e,n,s){const r=this.agents.get(t);r&&(this.scripted.add(t),r.pos=[...e],r.prev=[...e],r.path=null,r.moving=!1,r.anim=n,r.yaw=s)}release(t){this.scripted.delete(t);const e=this.agents.get(t);e&&(e.activity=""),t==="vinnie"&&this.updateRoutine()}dropEvent(t){var n;const e=((n=this.events)==null?void 0:n.drop(t,this.clock.day,this.clock.sec))??null;return this.updateCrowd(),e}mood(){var e;const t=(this.needs.energy+this.needs.social+this.needs.curiosity)/3;return((e=this.d.routine.needs.moods.find(([n])=>t<n))==null?void 0:e[1])??"okay"}setTier(t){this.tier=t,this.updateRoutine()}setTime(t,e=this.clock.day){this.clock.set(t,e),this.updateRoutine();for(const n of this.d.routine.extras??[])this.updateExtra(this.agents.get(n.id),n,!0);this.updateCrowd()}snapshot(t=1){var n,s;const e=[];for(const r of this.agents.values()){if(!this.shown(r))continue;const o=r.id==="vinnie"?this.override:null;e.push({id:r.id,kind:r.kind,cast:r.cast,look:r.look,x:r.prev[0]+(r.pos[0]-r.prev[0])*t,z:r.prev[1]+(r.pos[1]-r.prev[1])*t,yaw:(o==null?void 0:o.yaw)??r.yaw,anim:r.moving?"walk":(o==null?void 0:o.anim)??r.anim,moving:r.moving,place:r.place})}return{day:this.clock.day,sec:this.clock.sec,time:this.clock.hhmm,tier:this.tier,agents:e,event:((n=this.events)==null?void 0:n.active(this.clock.day,this.clock.sec))??null,raining:((s=this.events)==null?void 0:s.raining(this.clock.day,this.clock.sec))??!1}}}const Hu=(i,t)=>i>=Wr[0]&&i<=Wr[2]&&t>=Wr[1]&&t<=Wr[3],fM=i=>1-(1-Math.min(1,Math.max(0,i)))**3;function pM(i,t,e){const n=i.find(s=>s.n===t)??i[0];return n.radius[0]+(n.radius[1]-n.radius[0])*fM(e/n.radiusSeconds)}class mM{constructor(t,e,n){D(this,"km",0);D(this,"dot");D(this,"routeLen",[0]);this.route=t,this.metresPerPx=e,this.mapSize=n,this.dot=[...t[0]];for(let s=1;s<t.length;s++)this.routeLen.push(this.routeLen[s-1]+Math.hypot(t[s][0]-t[s-1][0],t[s][1]-t[s-1][1]))}autoAdd(t){this.km+=t;const e=this.routeLen[this.routeLen.length-1];let n=this.km*1e3/this.metresPerPx%e,s=1;for(;s<this.routeLen.length-1&&this.routeLen[s]<n;)s++;const r=this.route[s-1],o=this.route[s];n-=this.routeLen[s-1];const a=this.routeLen[s]-this.routeLen[s-1]||1;this.dot=[r[0]+(o[0]-r[0])*n/a,r[1]+(o[1]-r[1])*n/a]}move(t,e){const n=Math.min(this.mapSize[0],Math.max(0,this.dot[0]+t)),s=Math.min(this.mapSize[1],Math.max(0,this.dot[1]+e));this.km+=Math.hypot(n-this.dot[0],s-this.dot[1])*this.metresPerPx/1e3,this.dot=[n,s]}addMetres(t){this.autoAdd(t/1e3)}}const os=Math.PI/180,Vu=[4.1,32.1],gM=.55,xM=1.6,Gu=15,Fn=new Set;function vM(){let i,t=0,e=!1;const n=new _a;let s,r,o,a,l,c,h,u,d,p,x=!1,S=!1,m=-1,f="Vinnie",M=0,_,y,R,v=1,E=0,g=0,b=!1,T=-10,A=-1,F=-1,L=0,O="vinnie",I,H,B,et=[],nt,ft,bt=null,It,Vt,pt,Et=!1,j=0;const rt=[];let K=!1,_t=!1,At,St,gt,Ut=null,st,ut=null;const at=new Map,Rt=new Hm,Mt={},$t=z=>R.find(J=>J.n===z)??R[0],N=(z,J,W=0)=>new U(z,W,J),te=()=>{const z=i.store.data.settings.gfx;return z==="hd"||i.params.gfx==="hd"||z==="auto"&&i.params.gfx!=="16bit"&&A>=0&&t>=A},zt=z=>()=>a.headPx(z,l.camera,innerWidth,innerHeight),Yt=z=>{v=z,E=t,s.setTier(z);const J=$t(z);z>1&&l.go(Zs.town(N(J.shot.target[0],J.shot.target[1]),J.shot.dist*Uu[z-1]/Gr),2,"town")},xt={simTime:z=>s.setTime(String(z)),tier:z=>{var J;Yt(Number(z)),Number(z)===3&&!((J=i.store.data.progress.met)!=null&&J.mochi)&&s.scriptGo("vinnie",s.spotPos("M","corner"),"idle",45*os)},camera:(z,J)=>{const W=J,$=$t(v);z==="town"&&(l.go(Zs.town(N($.shot.target[0],$.shot.target[1]),W.dist[0]),0,"town"),l.dolly(W.dist[0]*Gr,W.dist[1]*Gr,W.seconds))},vinnie:z=>{z==="standTurn"&&(s.override={anim:"idle",yaw:45*os,until:"routine"})},caption:z=>{const J=String(z),W=R.find($=>`tier${$.n}`===J);i.captions.show(i.copy.captions[J]??"",(W==null?void 0:W.captionFor)??4)},bubble:(z,J)=>{var $;const W=String(z);c.bubble(`${W}-say`,String(J),zt(W),t,(($=$t(1).bubble)==null?void 0:$.hold)??1.1),et.push({id:W,at:t})},autoWalk:()=>{b=!0},gps:z=>{z==="show"&&!Vt.visible&&Vt.show(t),z==="shrink"&&Vt.shrink(t)},ticker:()=>{var z;return pt.start(t,((z=s.events)==null?void 0:z.tickerLines(s.clock.day,s.clock.sec))??[])},routine:()=>{},lore:z=>rt.push(String(z)),rings:z=>{Et=z==="on"},holdSim:z=>{K=!!z},play:z=>{z==="contact"?(ut="contact",At.start()):z==="cafe"&&(ut="cafe",gt.wipe(()=>St.start()))},wipe:()=>{},festival:()=>{var ot;const z=(ot=s.landmark("Z"))==null?void 0:ot.spots,J=[z==null?void 0:z.a,z==null?void 0:z.c],[W,$]=Vu;gt.wipe(()=>{var Qt;const[mt,lt]=J;if(!mt||!lt)return;const dt=Zs.close(N(mt[0],mt[1]),N(lt[0],lt[1]));Math.cos(dt.yaw-Math.atan2(W-(mt[0]+lt[0])/2,$-(mt[1]+lt[1])/2))>0&&(dt.yaw+=Math.PI),l.go(dt,0,"close"),F=t+60;const qt=(k,tt)=>dt.yaw+25*os*Math.sign(Math.sin(Math.atan2(tt[0]-k[0],tt[1]-k[1])-dt.yaw));s.placeAt("vinnie",mt,"idle",qt(mt,lt)),s.placeAt("mochi",lt,"idle",qt(lt,mt)),O="vinnie",gt.hideHud(!0),m=t,i.captions.show(i.copy.captions.festival??"",5);const Kt=(Qt=i.data.events.events.find(k=>k.id==="festival"))==null?void 0:Qt.reaction;Kt&&c.bubble("vinnie-say",Kt,zt("vinnie"),t+1.2,4.5)})},met:z=>{const J=i.store.data.progress.met??{};J[String(z)]=!0,i.store.data.progress.met=J,i.store.save()},walkTo:(z,J)=>{var $;const W=Object.values((($=s.landmark(String(J)))==null?void 0:$.spots)??{});z.forEach((ot,mt)=>{const lt=W[mt%Math.max(1,W.length)]??s.spotPos(String(J));s.scriptGo(ot,[lt[0],lt[1]],"idle",45*os)})},continue:()=>{_t=!0},next:()=>{},gfx:z=>{z==="hd"&&(A=t)}},xe=()=>{const z={};for(const J of a.members.values()){const W=a.headPx(J.id,l.camera,innerWidth,innerHeight,0),$=J.peepl.root.position,ot=!!(W!=null&&W[2]);z[J.id]={visible:ot&&J.peepl.root.visible&&!P(J.peepl.root.position),px:J.px,onScreen:ot,inside:Hu($.x,$.z)}}return z},P=z=>{const J=z.clone().setY(z.y+1.3),W=l.camera.position,$=J.clone().sub(W),ot=$.length();Rt.set(W,$.normalize()),Rt.far=ot-.3;const mt=o.faces.geometry.attributes.aReveal,lt=je.uRadius.value;return Rt.intersectObject(o.faces,!1).some(dt=>dt.face&&mt.getX(dt.face.a)<=lt-1.4)},w=z=>{z.type==="keydown"?Fn.add(z.key):Fn.delete(z.key)};return{id:"S8",mount(z,J){var Qt;i=z,R=z.data.tiers.tiers;const W=ur({lowgpu:z.params.lowgpu});W.shadowMap.enabled=!0,fr(!0);const $=fh();_=$.key,d=$.hemi,f=((Qt=z.data.cast.cast.find(k=>k.id==="vinnie"))==null?void 0:Qt.name)??f,_.shadow.mapSize.setScalar(vl()?1024:2048),_.shadow.bias=-5e-4,_.shadow.normalBias=.02,n.add($.group),u=jb(),n.add(u.mesh),o=qb(z.data.map),n.add(o.group),a=new tM(z.data.cast.cast,z.data.cast.bodyTypes,z.params.rig==="groups"),n.add(a.group),a.setOutline(z.store.data.settings.outline!=="none"&&z.params.outline!=="none"),s=new uM({map:z.data.map,routine:z.data.routine,events:z.data.events},z.params.seed);const ot=z.data.tiers.walk;r=new mM(ot.autoRoute,ot.metersPerMapPx,ot.card.mapSize);const mt=$t(1);l=new Kb(Zs.town(N(mt.shot.target[0],mt.shot.target[1]),mt.shot.dist)),c=new eM,h=new Zb(vl()?0:4),h.enabled=!ch(),vl()&&(a.maxVisible=24),y=new sM(z.data.setpieces.worldScript,xt);const lt=z.data.map;nt=new Lb(Fb(lt)),n.add(nt.group),nt.items.forEach((k,tt)=>c.attach(`sign-${k.def.text}`,k.tag,()=>{if(!(l.shot==="town"&&k.mesh.visible&&nt.planePx(tt,l.camera,innerHeight)<40))return null;const wt=k.def.pos.clone().add(new U(0,k.def.height*.5+.2,0)).project(l.camera);return[(wt.x+1)/2*innerWidth,(1-wt.y)/2*innerHeight,wt.z<1]},-1,1/0,1)),ft=new Ib,n.add(ft.mesh);const dt=lt.props.find(k=>k.loop);dt&&(bt=new Db(dt),n.add(bt.group)),It=new Nb,n.add(It.group),p=new Ob(Vu),n.add(p.group),st=new hn;const qt=new Ei({color:16777215,gradientMap:Ai()}),Kt=new Ei({color:13619151,gradientMap:Ai(),transparent:!0,opacity:.6});for(const k of[28.78,29.02]){const tt=new Me(new mr(.06,.05,.12,12),qt);tt.position.set(k,.61,22.7),st.add(tt);for(let Q=0;Q<3;Q++){const wt=new Me(new Un(.035,8,6),Kt);wt.position.set(k,.72+Q*.1,22.7),wt.name="steam",st.add(wt)}}st.visible=!1,n.add(st),gt={get t(){return t},get reduced(){return e},auto:()=>i.store.data.settings.auto&&!i.flow.reduced&&document.documentElement.dataset.keyboard!=="1",hud:c,crowd:a,rig:l,sim:s,root:J,poses:at,copy:z.copy,anchor:(k,tt=.25)=>()=>a.headPx(k,l.camera,innerWidth,innerHeight,tt),holdSim:k=>{K=k},hideHud:k=>{for(const tt of[I.el,Vt.el,pt.el,H])tt.style.visibility=k?"hidden":"";k&&i.captions.clear()},toast:k=>i.toast.show(k,3),wipe:k=>{Ut=new ju(e,k,()=>{Ut=null})},choice:(k,tt)=>{Mt[k]=tt},townShot:()=>ct("town"),hop:k=>et.push({id:k,at:t})},At=new Tb(gt,z.data.setpieces.contact),St=new Cb(gt,z.data.setpieces.cafe),I=new Rb(z.data.tiers.hud.progressSegments),Vt=new Pb(String(z.data.tiers.hud.gpsTitle),ot.autoRoute,(k,tt)=>{r.move(k,tt),T=t}),pt=new kb(z.copy.S8.news),B=V("span",{}),H=dn([B],{size:32,color:"yellow"}),Nt(H,{position:"absolute",right:50,top:50}),H.classList.add("walk-pill"),ke(H,{right:40,top:190}),Nt(pt.el,{top:170}),ke(pt.el,{top:1010}),ke(Vt.el,{right:"auto",left:28,top:"auto",bottom:58,transformOrigin:"0 100%"});for(const k of[I.el,Vt.el,pt.el])k.classList.add("hud-avoid");J.append(I.el,H,Vt.el,pt.el),addEventListener("keydown",w),addEventListener("keyup",w),Object.assign(Ct,{sim:()=>({day:s.clock.day,time:s.clock.hhmm,speed:i.store.data.settings.speed,tier:v,km:r.km,radius:je.uRadius.value}),setTime:(k,tt)=>s.setTime(k,tt),tick:k=>{for(let tt=0;tt<k/Ks;tt++)s.tick(Ks)},setTier:k=>Yt(k),walk:k=>r.autoAdd(k),moveYou:(k,tt)=>r.move(k,tt),shot:k=>{F=t+Gu,ct(k)},follow:k=>{O=k},legibility:xe,projectPx:(k,tt,Q=0)=>{const wt=N(k,tt,Q).project(l.camera);return[(wt.x+1)/2*innerWidth,(1-wt.y)/2*innerHeight]},beat:k=>y.fire(k,t),dropEvent:k=>{var tt;s.dropEvent(k),pt.start(t,((tt=s.events)==null?void 0:tt.tickerLines(s.clock.day,s.clock.sec))??[])},mirror:k=>Bb(z.data.events.mirror,k),ticker:()=>pt.content,rings:()=>ft.mesh.count,setpiece:()=>({contact:At.active,cafe:St.active,cafeT:St.t,line:St.lineText,facing:St.facing(),ended:_t}),replaySetpiece:()=>(ut==="cafe"?St.start():ut==="contact"&&At.start(),ut!==null),banner:()=>{var k;return((k=It.banner)==null?void 0:k.name)??null},signTags:()=>nt.items.filter(k=>k.tag.isConnected&&k.tag.style.visibility!=="hidden").map(k=>{const tt=k.tag.getBoundingClientRect();return{text:k.def.text,rect:[tt.left,tt.top,tt.right,tt.bottom]}}),gpsKm:()=>{var k;return Vt.visible?((k=Vt.el.querySelector(".gps-km"))==null?void 0:k.textContent)??"":""},bubbles:()=>c.texts(),skyTop:()=>`#${u.uniforms.uTop.value.getHexString()}`,dusk:()=>M,lanterns:()=>p.lanterns.visible,cameraShot:()=>l.shot,pos:k=>{const tt=s.agents.get(k);return tt?[tt.pos[0],tt.pos[1]]:null},bodyPx:k=>{const tt=a.headPx(k,l.camera,innerWidth,innerHeight,0);return tt?[tt[0],tt[1]+a.members.get(k).px/3]:null}})},enter(){var J,W;e=i.flow.reduced;const z=In.sub;In.sub=null,S=i.params.free||!!i.store.data.progress.freeMode,S?(Yt(4),E=-10,A=0,Et=!0,Vt.show(-1),pt.start(-1,((J=s.events)==null?void 0:J.tickerLines(s.clock.day,s.clock.sec))??[])):z?(y.markFired("enter"),z==="contact"?(Yt(3),E=-10,y.markFired("tier2","tier3"),s.setTime("17:00"),s.placeAt("vinnie",[23,28.9],"idle",0)):z==="cafe"?(Yt(3),E=-10,y.markFired("contact","cafe","tier2","tier3"),ut="cafe",St.start()):z==="end"&&(Yt(4),E=-10,A=0,y.markFired("tier2","tier3","contact","cafe","tier4"),y.fire("end",0))):((W=i.store.data.progress.met)!=null&&W.mochi&&y.markFired("contact","cafe"),y.update(X())),this.update(0,0)},update(z,J){var _n,Ps,ao,xr,vr,qn;t=J;const W=i.store.data.settings,$=W.speed===.25?1:W.speed;if(["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].filter(ie=>Fn.has(ie)).length){const ie=i.data.tiers.walk.manualKmPerSecond*1e3/i.data.tiers.walk.metersPerMapPx*z*Math.max(1,$),ve=(Fn.has("d")||Fn.has("ArrowRight")?1:0)-(Fn.has("a")||Fn.has("ArrowLeft")?1:0),yn=(Fn.has("s")||Fn.has("ArrowDown")?1:0)-(Fn.has("w")||Fn.has("ArrowUp")?1:0);r.move(ve*ie,yn*ie)}else b&&t-T>1.5&&r.autoAdd(i.data.tiers.walk.autoKmPerSecond*z);for(K||(g+=z*Nc*$);g>=Ks;)s.tick(Ks),g-=Ks;S||y.update(X()),j+=z*$,je.uRadius.value=pM(R,v,t-E);const mt=te(),lt=mt?le(t,Math.max(A,0),xM,se.enter):0;document.querySelector("#fx16").style.opacity=String(gM*(1-(mt?W.gfx==="hd"||i.params.gfx==="hd"?1:lt:0)));const dt=i.params.tod??W.tod,qt=ob(s.clock.sec),Kt=dt==="dusk"?1:dt==="day"?0:qt.dusk;M+=Math.sign(Kt-M)*Math.min(Math.abs(Kt-M),z/10),ab(M,dt==="auto"?qt.night:0,{key:_,hemi:d,sky:u.uniforms,fog:o.fog.material,glow:je.uGlowColor}),je.uGlow.value=Math.max(mt?.3:0,M),h.uniforms.uQuant.value=mt?0:1,_.castShadow=mt,i.field.glow(mt||M>0?.45:.25,M),je.uViewport.value.set(innerWidth*Math.min(devicePixelRatio,2),innerHeight*Math.min(devicePixelRatio,2)),je.uEdgeWidth.value=Math.min(3.5,Math.max(1.5,2.2*Math.max(.6,ga())*Math.min(devicePixelRatio,2)));const Qt=s.snapshot(g/Ks);l.update(z,innerWidth/innerHeight,e),u.uniforms.uOpacity.value=l.shot==="town"?0:1;const k=(_n=a.members.get(O))==null?void 0:_n.peepl.root.position;l.shot!=="town"&&k&&F<t&&!At.active&&!St.active&&l.retarget(k.clone().setY(1)),At.update(),St.update(z),St.late(),Ut==null||Ut.update(z);for(const ie of Qt.agents){const ve=at.get(ie.id);ve&&Object.assign(ie,{x:ve.x,z:ve.z,yaw:ve.yaw,anim:ve.anim,moving:ve.anim==="walk"})}st.visible=St.cupsOn;for(const ie of st.children)ie.name==="steam"&&(ie.position.y=.72+(t*.35+ie.id*.13)%.3);const tt=je.uRadius.value;if(a.update(Qt.agents,z*Math.min(Math.max($,1),4),l.camera,innerHeight,tt),St.active)for(const ie of a.members.values()){if(ie.id==="vinnie"||ie.id==="mochi")continue;const ve=ie.peepl.root.position;Math.hypot(ve.x-30.3,ve.z-22.8)<7&&(ie.visible=ie.peepl.root.visible=!1)}if(m>=0&&l.shot==="close"){const ie=l.camera.position,ve=(Ps=a.members.get("vinnie"))==null?void 0:Ps.peepl.root.position;for(const yn of a.members.values()){if(!ve||yn.id==="vinnie"||yn.id==="mochi")continue;const ci=yn.peepl.root.position;Math.hypot(ci.x-ie.x,ci.z-ie.z)<Math.hypot(ve.x-ie.x,ve.z-ie.z)-.5&&(yn.visible=yn.peepl.root.visible=!1)}}nt.update(tt),bt==null||bt.update(j,tt);const Q=(ao=Qt.event)!=null&&ao.ev.where?s.landmark(Qt.event.ev.where):void 0,wt=Q?s.spotPos(Q.key):null,yt=(Q==null?void 0:Q.door)??null;It.set(((xr=Qt.event)==null?void 0:xr.ev)??null,wt?N(wt[0],wt[1]):null,yt?N(yt[0],yt[1]):null),It.update(t,Qt.raining&&v>=2,l.current().target),p.update(tt,((vr=Qt.event)==null?void 0:vr.ev.visual)==="lanterns",t,m);const ht=Et&&v>=3?Qt.agents.filter(ie=>{var ve;return ie.cast!=="joe"&&ie.id!=="vinnie"&&((ve=a.members.get(ie.id))==null?void 0:ve.visible)}).map(ie=>N(ie.x,ie.z)):[],Ot=a.members.get("vinnie");Ot!=null&&Ot.visible&&ht.push(Ot.peepl.root.position.clone().setY(0));const ee=!!(Ot!=null&&Ot.visible)&&Ot.px<90&&!At.active&&!St.active;for(ee&&!x?c.attach("vinnie-pill",dn([f],{size:28}),()=>a.headPx("vinnie",l.camera,innerWidth,innerHeight,.15),t,1e9,5):!ee&&x&&c.remove("vinnie-pill"),x=ee,ft.update(t,ht),s.reaction&&(c.bubble("vinnie-say",s.reaction,zt("vinnie"),t,3),s.reaction=null);rt.length;){const ie=rt[0],ve=s.landmark(ie),yn=i.data.map.buildings.find(ci=>ci.id===(ve==null?void 0:ve.building));if(yn&&tt<yn.d0+1.4)break;rt.shift(),ve!=null&&ve.lore&&c.bubble("vinnie-lore",ve.lore,zt("vinnie"),t,4)}Vt.visible&&Vt.update(t,r.km,r.dot,String(i.data.tiers.hud.kmFormat),e),pt.setLines(((qn=s.events)==null?void 0:qn.tickerLines(s.clock.day,s.clock.sec))??[]),pt.update(t,z,e),et=et.filter(ie=>t-ie.at<.5);for(const ie of et){const ve=a.members.get(ie.id);ve&&(ve.peepl.root.position.y+=rr(t,ie.at,.2,.4)*(e?0:1))}c.update(z,e),_.shadow.camera.left=_.shadow.camera.bottom=-14,_.shadow.camera.right=_.shadow.camera.top=14,_.target.position.set(19,0,19),_.position.set(35,24,41);const Ae=$t(v);I.set(v,Ae.badge,Ae.name,mt?i.copy.S8.hd:i.copy.S8.bit,mt,t);const be=document.getElementById("gl");be.getAttribute("aria-label")!==`${Ae.badge}, ${Ae.name}`&&be.setAttribute("aria-label",`${Ae.badge}, ${Ae.name}`),I.update(t,e),B.textContent=String(i.data.tiers.hud.walkPillTier1).replace("{km}",r.km.toFixed(1)),H.style.display=v===1&&!Vt.visible?"inline-flex":"none",In.rigOk=[...a.members.values()].every(ie=>ie.anim.ok()),In.chars=a.members.size;const An=[0,0,0];for(const ie of a.members.values())An[ie.px>180?0:ie.px>60?1:2]++;In.lod=An,i.loop.drawFrame&&(h.render(ur(),n,l.camera,t),hh())},landed:()=>_t,autoPillTop:vn,choose:z=>At.choose(z),onInput(z){var J;if(z.type==="key"&&At.active&&(z.key==="1"||z.key==="2"))return void At.choose(Number(z.key)-1);if(z.type==="tap"&&z.x!==void 0&&z.y!==void 0&&v>=3){const W=it(z.x,z.y);let $=null;for(const ot of a.members.values()){if(!ot.visible||ot.id==="vinnie"||ot.peepl.id==="joe"||ot.id.startsWith("joe")||ot.id.startsWith("pacer")||ot.id.startsWith("crowd"))continue;const mt=a.headPx(ot.id,l.camera,innerWidth,innerHeight,-.6);if(!mt)continue;const lt=Math.hypot(mt[0]-W[0],mt[1]-W[1]);lt<Math.max(60,ot.px*.6)&&(!$||lt<$.d)&&($={id:ot.id,d:lt})}if(($==null?void 0:$.id)==="mochi"&&!At.active&&!St.active&&!((J=i.store.data.progress.met)!=null&&J.mochi)&&Mt.contact==="notnow"){delete Mt.contact,At.start();return}if($){O=$.id;const ot=i.data.cast.cast.find(lt=>lt.id===$.id);ot!=null&&ot.tagline&&c.bubble(`${$.id}-tag`,ot.tagline,zt($.id),t,3);const mt=$.id;c.attach("name-pill",dn([(ot==null?void 0:ot.name)??mt],{size:28}),()=>a.headPx(mt,l.camera,innerWidth,innerHeight,-.15),t,6,6)}return}z.type==="key"&&(z.key==="t"||z.key==="T")&&(F=t+Gu,L=(L+1)%3,ct(["town","venue","close"][L]))},exit(){},unmount(){removeEventListener("keydown",w),removeEventListener("keyup",w),Fn.clear();for(const z of Object.keys(Ct))delete Ct[z];a.dispose(),o.faces.geometry.dispose(),o.edges.geometry.dispose(),o.fog.dispose(),h.dispose(),c.clear(),n.clear(),fr(!1),document.querySelector("#fx16").style.opacity="0"},seek(z){t=z}};function X(){return{t,km:r.km,tier:v,simSec:s.clock.sec,distance:(z,J)=>{const W=s.agents.get(z),$=s.agents.get(J);return W&&$?Math.hypot(W.pos[0]-$.pos[0],W.pos[1]-$.pos[1]):1/0},choices:Mt,busy:St.active}}function it(z,J){return Cp(z,J)}function ct(z,J){const W=a.members.get(O),$=(W==null?void 0:W.peepl.root.position)??N(19,19);if(z==="town"){const ot=$t(v);l.go(Zs.town(N(ot.shot.target[0],ot.shot.target[1]),(ot.shot.distEnd??ot.shot.dist)*Uu[v-1]/Gr),.9,"town")}else if(z==="venue"){const ot=Zs.venue(Hu($.x,$.z)?N(19,19):$.clone().setY(0));$.x<8.5&&$.z>27.5&&(ot.yaw=-100*os),l.go(ot,.9,"venue")}else l.go({target:$.clone().setY(1.5*pr*1.7),yaw:45*os,pitch:10*os,dist:7.5},.9,"close")}}function _M(i,t,e,n){return V("button",{class:"cast-card","data-id":i,style:"position:absolute;width:262px;height:360px;border-radius:26px;border:6px solid var(--ink);background:var(--white);overflow:hidden;padding:0;pointer-events:auto;display:flex;flex-direction:column;align-items:center;text-align:center"},V("img",{src:oo(n),alt:"",draggable:"false",style:"display:block;width:250px;height:250px;border-bottom:6px solid var(--ink);object-fit:cover"}),V("div",{class:"display card-name",style:"font-size:34px;color:var(--ink);margin-top:6px"},t),V("div",{class:"pixel card-tag",style:"font-size:26px;color:var(--lit-card-tagline);text-wrap:balance;padding:0 10px;margin-top:4px"},e))}const mi=Be({left:109,top:200,dx:288,dy:390,cols:6,k:1},{left:102,top:260,dx:300,dy:385,cols:3,k:1.06}),as={at:.35,stagger:.09,dur:.55},yM=.15,Wu={dur:7,to:Be(1.05,1.02)},qo={w:1100,h:760};function bM(){let i,t=0,e=!1,n,s,r=[],o,a,l,c,h,u,d,p=null,x=!1;const S=new _a,m=new xn(22,1,.1,100);let f=null,M=null,_=[];const y=()=>{p=null,o.style.display="none",s.style.visibility="",f==null||f.dispose(),f=null,fr(!1)},R=(v,E=!1)=>{var A;const g=_.find(F=>F.id===v);if(!g)return;p=v,x=E,l.textContent=g.name,c.textContent=g.tagline??"";const b=(A=i.store.data.progress.met)==null?void 0:A[v];h.style.display=b?"block":"none",u.style.display=x?"inline-flex":"none",u.textContent=v==="vinnie"?"mochi":"vinnie",o.style.display="block",s.style.visibility="hidden",f==null||f.dispose();const T=i.data.cast.cast.find(F=>F.id===v);f=ph(T,i.data.cast.bodyTypes,{lods:[0]}),S.add(f.root),M=new mh(f.rig,f.dims,v),ur(),fr(!0)};return{id:"S11",mount(v,E){i=v;const g=v.copy.S11;_=v.data.cast.cast,d=new Rs(v.captions,v.copy.captions,[{key:"cast1",at:.8,until:3.6},{key:"cast2",at:3.8,until:6.8}]),n=V("div",{class:"display s11-heading",style:"position:absolute;left:0;right:0;top:20px;text-align:center;font-size:92px;color:var(--ink)"},g.heading),r=g.order.map((T,A)=>{const F=_.find(O=>O.id===T),L=_M(T,F.name,F.tagline??"",F.sprite.card);return Nt(L,{left:mi.left+A%mi.cols*mi.dx+131*(mi.k-1),top:mi.top+Math.floor(A/mi.cols)*mi.dy+180*(mi.k-1)}),L.addEventListener("click",O=>{O.stopPropagation(),R(T)}),L}),s=V("div",{class:"s11-grid",style:"position:absolute;inset:0;transform-origin:50% 55%;perspective:1200px"},...r);const b=dn([g.yourPeepls],{size:32,tag:"button"});Nt(b,{position:"absolute",left:50,top:40,pointerEvents:"auto"}),b.classList.add("your-peepls"),b.addEventListener("click",T=>{T.stopPropagation(),R("vinnie",!0)}),l=V("span",{class:"display",style:"font-size:46px;color:var(--ink)"}),c=V("span",{class:"pixel",style:"font-size:30px;color:var(--ink)"}),h=V("div",{class:"pixel met-sticker",style:"position:absolute;right:30px;top:24px;background:var(--yellow);border:4px solid var(--ink);border-radius:10px;padding:4px 14px 6px;font-size:26px;transform:rotate(-8deg);display:none"},g.met),u=dn([""],{size:28,tag:"button"}),u.style.pointerEvents="auto",u.addEventListener("click",T=>{T.stopPropagation(),p&&R(p==="vinnie"?"mochi":"vinnie",!0)}),a=V("div",{class:"sheet-turntable",style:"position:absolute;left:30px;right:30px;top:120px;bottom:30px"}),o=V("div",{class:"cast-sheet",style:`position:absolute;left:${(1920-qo.w)/2}px;top:${(1080-qo.h)/2+20}px;width:${qo.w}px;height:${qo.h}px;border:6px solid var(--ink);border-radius:26px;display:none;pointer-events:auto`},V("div",{style:"position:absolute;left:0;right:0;top:0;height:110px;background:var(--cream);border-radius:20px 20px 0 0;border-bottom:6px solid var(--ink);display:flex;align-items:center;gap:20px;padding:0 30px"},l,c,dn([g.hasHuman],{size:28}),u),h,a),o.addEventListener("click",T=>T.stopPropagation()),ke(n,{left:40,right:"auto",top:30,fontSize:60,textAlign:"left"}),ke(s,{left:0,top:0,width:1080,height:1920}),ke(b,{left:40,top:78}),ke(o,{left:40,top:300,width:1e3,height:1300}),E.append(n,b,s,o),S.add(fh().group),Object.assign(Ct,{sheetOpen:()=>p,sheetCentrePx:()=>{const T=a.getBoundingClientRect();return[T.left+T.width/2,T.top+T.height*.55]}})},enter(){e=i.flow.reduced,this.update(0,0)},update(v,E){t=E;const[g,b]=Fe(t,yM,.45,e);if(Nt(n,{transform:`scale(${g})`,opacity:String(b)}),r.forEach((T,A)=>{const F=as.at+A*as.stagger,[L,O]=Fe(t,F,as.dur,e),I=e?0:90*(1-Math.min(1,le(t,F,as.dur,se.pop))),H=e?0:Math.sin(t*2.4+A*.6)*5;Nt(T,{transform:`translateY(${H}px) rotateY(${I}deg) scale(${(.6+.4*L)*mi.k})`,opacity:String(O)})}),s.style.transform=`scale(${e?1:1+(Wu.to-1)*le(t,0,Wu.dur,se.draw)})`,d.update(t),p&&f&&M&&i.loop.drawFrame){M.update(v),f.root.rotation.y=t*.35;const T=a.getBoundingClientRect(),A=ur(),F=innerHeight-T.bottom;m.aspect=T.width/T.height,m.updateProjectionMatrix(),m.position.set(0,1.6,9),m.lookAt(new U(0,1,0)),A.setScissorTest(!0),A.setScissor(new Ee(T.left,F,T.width,T.height)),A.setViewport(new Ee(T.left,F,T.width,T.height)),A.setClearColor(16051935,1),A.clear(),A.render(S,m),A.setScissorTest(!1),A.setViewport(0,0,innerWidth,innerHeight),A.setClearColor(0,0),hh()}},landed:()=>t>=as.at+11*as.stagger+as.dur,pillTop:!0,onInput(v){if(p){if(v.type==="key"&&v.key==="Escape")y();else if(v.type==="tap"&&v.x!==void 0&&v.y!==void 0){const E=o.getBoundingClientRect(),[g,b]=qr(E.left,E.top),[T,A]=qr(E.right,E.bottom);v.x>=g&&v.x<=T&&v.y>=b&&v.y<=A||y()}}},exit(){p&&y()},unmount(){p&&y(),delete Ct.sheetOpen,delete Ct.sheetCentrePx,S.clear()},seek(v){this.update(0,v)}}}const ls={pitch:124,feet:1070,h:320,hero:330,at:.1,stagger:.05,rise:440},MM=.5,wM=[1.5,.4],jo=[2.1,.5],Fl=[2.7,.4],Ll=[3.4,4.3];function SM(){let i,t=0,e=!1,n=[],s,r,o,a=[];const l=()=>{const h=i.store.data.settings;i.store.reset(),i.store.data.settings=h,i.store.save(),i.flow.go("S0")},c=()=>{i.store.data.progress.freeMode=!0,i.store.save(),i.flow.go("S8")};return{id:"S12",mount(h,u){i=h;const d=h.copy.S12;n=[...d.wordmark].map(f=>V("span",{class:"display",style:`display:inline-block;font-size:${Be(220,160)}px;line-height:0.9;color:var(--yellow);-webkit-text-stroke:7px var(--ink);paint-order:stroke fill;text-shadow:0 11px 0 var(--ink)`},f));const p=V("div",{id:"s12-wordmark",style:"position:absolute;left:0;right:0;top:90px;display:flex;justify-content:center;gap:2px"},...n);s=V("div",{class:"pixel s12-tagline",style:"position:absolute;left:0;right:0;top:360px;text-align:center;font-size:66px;color:var(--ink)"},d.tagline),r=V("button",{class:"display s12-cta",style:"position:absolute;left:50%;top:460px;display:inline-flex;align-items:center;gap:18px;background:var(--yellow);border:8px solid var(--ink);border-radius:999px;padding:22px 56px 26px;font-size:62px;color:var(--ink);white-space:nowrap;pointer-events:auto"},V("span",{},d.cta),or("arrow",56,"var(--ink)")),r.addEventListener("click",f=>{f.stopPropagation(),c()}),o=V("div",{class:"pixel s12-sub",style:"position:absolute;left:0;right:0;top:628px;text-align:center;font-size:44px;color:var(--ink)"},d.sub);const x=dn([or("play",20,"var(--white)"),d.replay],{size:28,tag:"button"});Nt(x,{position:"absolute",right:50,top:40,pointerEvents:"auto"}),x.classList.add("s12-replay"),x.addEventListener("click",f=>{f.stopPropagation(),l()});const S=h.data.cast.cast,m=vn?8:d.lineup.length;a=d.lineup.map((f,M)=>{const _=S.find(T=>T.id===f).sprite,y=f==="vinnie"||f==="mochi"?ls.hero:ls.h,R=Math.floor(M/m),v=M%m,E=Math.min(m,d.lineup.length-R*m),g=(vn?540:960)+(v-(E-1)/2)*ls.pitch,b=new Aa(_,{class:"sprite lineup","data-id":f}).place(g,vn?1500+R*380:ls.feet,y);return ke(b.el,{}),b}),ke(p,{top:200}),ke(s,{top:470,fontSize:54}),ke(r,{top:590}),ke(o,{top:790}),ke(x,{right:22,top:22}),u.append(...a.map(f=>f.el),p,s,r,o,x)},enter(){e=i.flow.reduced,this.update(0,0)},update(h,u){t=u,a.forEach((S,m)=>{const f=ls.at+m*ls.stagger,M=e?0:ls.rise*(1-le(t,f,.5,se.pop)),_=e?0:rr(t,Ll[0]+m/a.length*(Ll[1]-Ll[0]-.4),22,.4);S.pose({t,phase:m*.7,hop:_-M,opacity:e?le(t,f,.2,se.enter):1})}),n.forEach((S,m)=>{const f=MM+m*.08,[M,_]=Fe(t,f,.5,e),y=e?0:-18+18*le(t,f,.5,se.pop),R=e?0:Math.sin(t*3+m*.7)*6;Nt(S,{transform:`translateY(${R}px) rotate(${y}deg) scale(${M})`,opacity:String(_)})});for(const[S,[m,f]]of[[s,wM],[o,Fl]]){const[M,_]=Fe(t,m,f,e);Nt(S,{transform:`scale(${M})`,opacity:String(_)})}const[d,p]=Fe(t,jo[0],jo[1],e),x=e||t<jo[0]+jo[1]?1:1+.03*Math.sin(t*5);Nt(r,{transform:`translateX(-50%) scale(${d*x})`,opacity:String(p)})},landed:()=>t>=Fl[0]+Fl[1],onInput(h){h.type==="key"&&(h.key==="r"||h.key==="R")&&l()},exit(){},unmount(){},seek(h){this.update(0,h)}}}const Il={S0:m1,S1:E1,S2:T1,S3:F1,S4:Q1,S5:tb,S6:ib,S7:rb,S8:vM,S11:bM,S12:SM,S99:wb},EM=i=>{var t;return((t=Il[i])==null?void 0:t.call(Il))??o1(i)},AM=1,TM={U:"head height",worldPerU:.58},CM={thin:{head:.96,h:1.04,T:.88,A:.8,hem:.75,belly:.85,legs:1.1},average:{head:1,h:1,T:1,A:1,hem:1,belly:1,legs:1},stocky:{head:1.14,h:.99,T:1.7,A:1.35,hem:1.6,belly:1.3,legs:.85},xl:{head:1.25,h:1.2,T:2,A:1.5,hem:1.85,belly:1.5,legs:1}},RM=[{id:"flare",num:"00",name:"Flare",tagline:"thinks out loud",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#7A7A7A",hands:"#7A7A7A",face:{eyes:"none",mouth:"none"},top:{type:"hoodie",color:"#5E5E5E",collar:"none"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hood",color:"#5E5E5E"},{part:"face.flame",color:"#FF5AD9",color2:"#FFE100"}],sprite:{body:"assets/cast/body-00.png",card:"assets/cast/card-00.jpg",footX:.37,aspect:.4625}},{id:"vinnie",num:"01",name:"Vinnie",tagline:"wears a mask. means well.",hasHuman:!0,role:"lead",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"mask",mouth:"teeth"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"mask.vinnie",color:"#FF5AD9",color2:"#E04DC0",params:{nose:"bar",doodle:!1}},{part:"mask.strap",color:"#6B6B6B"},{part:"collar.vneck-tie"}],sprite:{body:"assets/hero/vinnie.png",card:"assets/cast/card-01.jpg",footX:.5,aspect:.4519},flags:{occultMarks:!0}},{id:"hexi",num:"02",name:"Hexi",tagline:"sweet, mostly",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#FF9FE8",face:{eyes:"dots2",mouth:"fangs-tongue"},top:{type:"offshoulder",color:"#1C1C1C"},pants:{type:"straight",color:"#6A3FA8"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.long",color:"#FF7ADB"},{part:"horns",color:"#E04DC0"},{part:"choker",color:"#111111"}],sprite:{body:"assets/cast/body-02.png",card:"assets/cast/card-02.jpg",footX:.5,aspect:.3203}},{id:"joe",num:"03",name:"Joe",tagline:null,hasHuman:!1,role:"blank",body:"average",headScale:1,skin:"#FFFFFF",face:{eyes:"dots3",mouth:"dot"},top:{type:"body",color:"#FFFFFF"},pants:{type:"straight",color:"#FFFFFF"},shoes:{type:"sneaker",color:"#FFFFFF"},attach:[],sprite:{body:"assets/hero/joe.png",card:"assets/cast/card-03.jpg",footX:.5,aspect:.3903}},{id:"rudy",num:"04",name:"Rudy",tagline:"no map, no plan",hasHuman:!0,role:"neighbour",body:"stocky",headScale:1,skin:"#FF9FE8",face:{eyes:"dots2",mouth:"teeth"},top:{type:"hawaiian",color:"#5E5E5E",color2:"#FFE100",pattern:"hibiscus",collar:"vneck"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hat.bucket",color:"#FFFFFF"},{part:"glasses.aviator",color:"#FF9E3A"}],sprite:{body:"assets/cast/body-04.png",card:"assets/cast/card-04.jpg",footX:.44,aspect:.3688}},{id:"mochi",num:"05",name:"Mochi",tagline:null,hasHuman:!0,role:"friend",body:"average",headScale:1,skin:"#FF9FE8",face:{eyes:"closed",mouth:"smile"},top:{type:"turtleneck",color:"#00B4EE"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.cap",color:"#7B2CBF"},{part:"hair.bun",color:"#7B2CBF"},{part:"hair.chopsticks",color:"#FFE100"},{part:"ears.cat",color:"#00B4EE",color2:"#FF5AD9"},{part:"whiskers"},{part:"collar.turtleneck",color:"#00B4EE"},{part:"tail.spring",color:"#00B4EE",color2:"#FFE100"}],sprite:{body:"assets/hero/mochi.png",card:"assets/cast/card-05.jpg",footX:.5,aspect:.4915}},{id:"nimbus",num:"06",name:"Nimbus",tagline:"head in the clouds",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"x",mouth:"teeth"},top:{type:"cardigan",color:"#3FB4EA",pattern:"clouds",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.swoop",color:"#1C1C1C"}],sprite:{body:"assets/cast/body-06.png",card:"assets/cast/card-06.jpg",footX:.5,aspect:.3328}},{id:"spike",num:"07",name:"Spike",tagline:"punk. knits.",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#86D4EE",face:{eyes:"x",mouth:"zigzag"},top:{type:"varsity",color:"#FF7ADB",color2:"#FFE66B"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FFE100"},attach:[{part:"hair.mohawk",color:"#FF5AD9"}],sprite:{body:"assets/cast/body-07.png",card:"assets/cast/card-07.jpg",footX:.5,aspect:.3078}},{id:"taro",num:"08",name:"Taro",tagline:"ramen critic",hasHuman:!0,role:"neighbour",body:"stocky",headScale:1,skin:"#FF9FE8",face:{eyes:"closed",mouth:"flat"},top:{type:"flannel",color:"#FF4F2E",color2:"#8C2A1E",pattern:"plaid",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#F6F0DC"},attach:[{part:"hair.cap",color:"#1C1C1C"},{part:"hair.bun",color:"#1C1C1C"},{part:"hair.chopsticks",color:"#FFE100"},{part:"mustache",color:"#1C1C1C"},{part:"earring.pin",side:"L"}],sprite:{body:"assets/cast/body-08.png",card:"assets/cast/card-08.jpg",footX:.5,aspect:.2953}},{id:"pip",num:"09",name:"Pip",tagline:"amazed by everything",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#FF9FE8",face:{eyes:"wide",mouth:"o"},top:{type:"cardigan",color:"#FF7ADB",pattern:"hearts",collar:"tee"},pants:{type:"jeans",color:"#3E6FC4"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.cap",color:"#1C1C1C"},{part:"hair.pigtails",color:"#1C1C1C"}],sprite:{body:"assets/cast/body-09.png",card:"assets/cast/card-09.jpg",footX:.5,aspect:.3359}},{id:"dex",num:"10",name:"Dex",tagline:"desk job, dj nights",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#FFE66B",face:{eyes:"none",mouth:"flat"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.swoop",color:"#7B35C4"},{part:"glasses.shades",color:"#111111"},{part:"collar.vneck-tie"},{part:"headphones",color:"#2C2C2C",params:{cup:"#0AB8EE",mode:"neck"}}],sprite:{body:"assets/cast/body-10.png",card:"assets/cast/card-10.jpg",footX:.5,aspect:.3328}},{id:"kit",num:"11",name:"Kit",tagline:"pirate radio host",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"dots2",mouth:"teeth"},top:{type:"flannel",color:"#FF4F2E",color2:"#8C2A1E",pattern:"plaid",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FF7ADB"},attach:[{part:"hair.cap",color:"#FF7ADB"},{part:"hair.buns2",color:"#FF7ADB"},{part:"eyepatch",color:"#111111"}],sprite:{body:"assets/cast/body-11.png",card:"assets/cast/card-11.jpg",footX:.5,aspect:.3094}},{id:"cosmo",num:"12",name:"Cosmo",tagline:"waves at the moon",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#3B2A86",skinPattern:"stars",hands:"#3B2A86",face:{eyes:"none",mouth:"tongue"},top:{type:"cardigan",color:"#FF7ADB",pattern:"hearts",collar:"tee"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.flattop",color:"#3FB4EA"},{part:"glasses.shades",color:"#111111"},{part:"earring.pin",side:"L"}],sprite:{body:"assets/cast/body-12.png",card:"assets/cast/card-12.jpg",footX:.5,aspect:.3156}},{id:"juno",num:"13",name:"Juno",tagline:"zero filter",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#FFE66B",face:{eyes:"happy",mouth:"tongue"},top:{type:"polo",color:"#FFE66B"},pants:{type:"straight",color:"#6A3FA8"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.bob",color:"#7B35C4"}],sprite:{body:"assets/cast/body-13.png",card:"assets/cast/card-13.jpg",footX:.5,aspect:.3234}},{id:"vega",num:"14",name:"Vega",tagline:"sort of psychic",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"none",mouth:"flat"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.flattop",color:"#1C1C1C"},{part:"visor.cyber",color:"#FF4A2A",color2:"#FFE100"},{part:"collar.vneck-tie"},{part:"earring.hoop",side:"L",color:"#FFE100"}],sprite:{body:"assets/cast/body-14.png",card:"assets/cast/card-14.jpg",footX:.5,aspect:.3328}}],PM={id:"joe-extra",inherits:"joe",props:["prop.cup","prop.umbrella","prop.briefcase","prop.bag","headphones","prop.balloon","prop.flowers","prop.dog"]},kM={aspect:"sprite aspect = width / height of the PNG (joe 425/1089, vinnie 366/810, mochi 406/826; 12 bodies from peepls-campaign.jsx CAST.ar)",contentFlags:"no cigarettes (D-20). vinnie: mask nose rendered as a bar and doodle off in 3D; the 2D PNGs still show the cigarette/holder until re-exported."},FM={version:AM,units:TM,bodyTypes:CM,cast:RM,extrasBase:PM,notes:kM},LM=1,IM={crowd1:"right now, a whole world is going about its day.",crowd2:"day jobs. first dates. bad coffee. big plans.",profile:"tell us a little about you.",finding:"we look for a peepl who clicks with you.",reveal:"then someone steps out of the crowd.",room1:"no food bowls. no guilt trips.",room2:"just two friends getting to know each other.",ship:"once he trusts you, he ships himself over.",tap:"tap him, and he lets you in.",tier1:"at first, he only lets you see his place.",tier2:"get closer, and he shows you more.",tier3:"spot someone in colour? they've got a human too.",tier4:"walk your world, and his world opens up.",cast1:"punks, pirates, cat people, dreamers.",cast2:"somewhere out there is your kind of weird.",yourTurn:"your turn. pick a reply.",walkHint:"drag the map to walk. or just watch.",festival:"tonight, the whole neighbourhood is out."},DM={tags:[["late. again.",.6],["on repeat",1.5],["walking biscuit",2.3],["might rain later",3.2],["first date!!",4],["forgot the milk",4.6],["big meeting at 10",5.2],["it's my birthday",5.8]],wordmark:"PEEPLS",line1:"they've got lives.",line2:"they just haven't met you yet.",subline:"the peepls show",continue:"start"},NM={clock:"9:41",heading:"who are you?",sub:"pick a few. we'll do the rest.",chips:[["night owl","pink"],["long walks","yellow"],["bad puns","cyan"],["loud music","pink"],["dogs","yellow"],["early bird","cyan"]],sliderLeft:"quiet",sliderRight:"loud",button:"find my peepl"},UM={finding:"finding your peepl"},OM={name:"meet vinnie.",pill:"wears a mask. means well.",continue:"say hi"},BM={trust:"TRUST",speakerVinnie:"VINNIE",speakerYou:"YOU",nextDay:"the next day."},zM={door:"7",mat:"hi",boxLabel:"PEEPLS",boxSub:"handle with love",nfc:"NFC"},HM={waitPill:"tap the keychain",realNfc:"use real nfc",handshake:"PEEPL HANDSHAKE",notifTitle:"PEEPLS",notifBody:"vinnie is home."},VM={walkTitle:"your walk today",news:"news",hd:"HD",bit:"16-BIT",cafePill:"corner café",herePill:"2 peepls here",contactYes:"say hi",contactNo:"not now",contactNotNow:"fair. she'll be around.",friendTitle:"NEW FRIEND!",friendLine:"vinnie + mochi · friendship lv.1",mochiAdded:"mochi added to your neighbours",continueEnd:"meet the neighbours"},GM={heading:"meet the neighbours.",order:["flare","hexi","rudy","nimbus","spike","taro","pip","dex","kit","cosmo","juno","vega"],yourPeepls:"+ your peepls",hasHuman:"has a human",met:"met"},WM={wordmark:"PEEPLS",tagline:"friends with lives of their own.",cta:"keep watching",sub:"app · nfc keychain · desk pal",replay:"replay",lineup:["joe","hexi","nimbus","spike","taro","pip","dex","vinnie","mochi","kit","cosmo","juno","vega","rudy","flare"]},XM={resetAsk:"sure? everything goes."},$M={continue:"tap to continue",autoplay:"autoplay",on:"on",off:"off"},YM={version:LM,captions:IM,S0:DM,S1:NM,S2:UM,S3:OM,S4:BM,S6:zM,S7:HM,S8:VM,S11:GM,S12:WM,debug:XM,ui:$M},qM=1,jM={start:8,max:100,closeMin:70,display:"percent"},ZM={VINNIE:{chip:"#FF4A2A"},YOU:{chip:"#0AB8EE"}},KM={maxDays:3,nextDayCard:"the next day.",forcedOnDay:3},JM=["rain","memory","notyet"],QM=[{id:"cantsleep",days:[1],line:[{who:"VINNIE",text:"so. what do you do when you can't sleep?",hop:34}],choices:[{label:"walk. sometimes till sunrise.",trust:28,set:{sleep:"walk"},reply:[{who:"VINNIE",text:"huh. same. i count streetlights.",hop:34}]},{label:"read till my eyes give up.",trust:18,set:{sleep:"read"},reply:[{who:"VINNIE",text:"huh. i count streetlights. same idea, more walking."}]},{label:"why do you care?",trust:-6,reply:[{who:"VINNIE",text:"i was making conversation. it's allowed."}]}],autoPick:0},{id:"kiosk",days:[1],line:[{who:"VINNIE",text:"i have a shift tomorrow. at the kiosk, in spiegelfurt. it's a town. you'd recognise parts of it.",hop:34}],choices:[{label:"what's the kiosk like?",trust:8,reply:[{who:"VINNIE",text:"a window with snacks behind it. i'm the part that says good morning."}]},{label:"do you like the job?",trust:8,reply:[{who:"VINNIE",text:"i like the first hour. after that it's mostly change for a fifty."}]},{label:"what can you do for me?",trust:-8,reply:[{who:"VINNIE",text:"very little. i sell newspapers to other people."}]}],autoPick:1},{id:"rain",days:[1,2],line:[{who:"VINNIE",text:"my turn. what do you do when it rains?",hop:34}],lineAgain:[{who:"VINNIE",text:"you again. good. same question as yesterday. what do you do when it rains?",hop:34}],choices:[{label:"make tea.",trust:8,set:{rain:"tea"},reply:[{who:"VINNIE",text:"tea. sensible. i'll think of that when it rains here."}]},{label:"walk anyway.",trust:8,set:{rain:"walk"},reply:[{who:"VINNIE",text:"walk anyway. stubborn. i can work with stubborn."}]},{label:"put music on.",trust:8,set:{rain:"music"},reply:[{who:"VINNIE",text:"music. so the rain has competition. fair."}]},{label:"why do you care?",trust:-8,reply:[{who:"VINNIE",text:"i was making conversation. it's allowed."}]}],autoPick:1},{id:"boundary",days:[1],line:[{who:"VINNIE",text:"one thing before this goes further. i won't be told what to do. i'll listen. i might agree. but i decide.",hop:34}],choices:[{label:"that's fair.",trust:10,reply:[{who:"VINNIE",text:"good. that was the difficult part."}]},{label:"not even 'pass the salt'?",trust:4,reply:[{who:"VINNIE",text:"salt i'll consider. case by case."}]},{label:"we'll see about that.",trust:-10,reply:[{who:"VINNIE",text:"we will. i have more time than you do."}]}],autoPick:0},{id:"notyet",days:[1],line:[{who:"VINNIE",text:"your turn to have a rule. what's the worst thing you did this week?",hop:34}],choices:[{label:"i'd rather not talk about that yet.",trust:12,set:{notyet:"boundary"},reply:[{who:"VINNIE",text:"that's fine. another time."},{who:"VINNIE",text:"thanks. i like that."}]},{label:"ate cereal for dinner. twice.",trust:8,set:{notyet:"cereal"},reply:[{who:"VINNIE",text:"twice is a system. respect."}]},{label:"you first.",trust:0,reply:[{who:"VINNIE",text:"i gave a man change for a fifty. he gave me a twenty. we both pretended."}]}],autoPick:0},{id:"memory",days:[1,2],line:[{who:"VINNIE",text:"give me one thing to remember about you. one. shelf space is limited.",hop:34}],lineAgain:[{who:"VINNIE",text:"i still have what you told me yesterday. say it again, or swap it. shelf space is limited.",hop:34}],choices:[{label:"i walk a lot.",trust:6,set:{memory:"walks"},reply:[{who:"VINNIE",text:"good. this town needs walking. you'll see why."}],preferIfProfile:"long walks"},{label:"i work late.",trust:6,set:{memory:"late"},reply:[{who:"VINNIE",text:"late. then i'll leave a light on. on my side. it's my electricity."}],preferIfProfile:"night owl"},{label:"i don't like mondays.",trust:6,set:{memory:"mondays"},reply:[{who:"VINNIE",text:"nobody does. we tried skipping one here. it came back."}]}],autoPick:0}],tw={pass:[{who:"VINNIE",text:"ok. i think i like you.",hop:60}],fail:[{who:"VINNIE",text:"not yet. come back tomorrow."}],forced:[{who:"VINNIE",text:"fine. i'll take the risk. don't make me regret it.",hop:34}],toast:"✓ vinnie trusts you"},ew={ask:[{who:"VINNIE",text:"so. i could come over. properly.",hop:34},{who:"VINNIE",text:"it means a body. small. on a keyring. you'd have to carry me."}],askAgain:[{who:"VINNIE",text:"it's still a yes from me. you?",hop:34}],choices:[{label:"yes. come over.",trust:0,set:{consent:"yes"},reply:[{who:"VINNIE",text:"then i'll pack. it won't take long. i don't own much.",hop:60}]},{label:"not yet.",trust:0,set:{consent:"notyet"},reply:[{who:"VINNIE",text:"fair. ask me again tomorrow."}]}],forced:[{who:"VINNIE",text:"fine. i'll take the risk. don't make me regret it.",hop:34}],autoPick:0,confirmToast:"✓ vinnie is releasing his body"},nw={campaign:["cantsleep line","walk. sometimes till sunrise.","huh. same. i count streetlights.","ok. i think i like you.","✓ vinnie trusts you"],v01:["kiosk","rain","boundary","memory","not yet. come back tomorrow.","fine. i'll take the risk. don't make me regret it."],technicalBriefing:["i'd rather not talk about that yet.","that's fine. another time.","thanks. i like that."],new:["read till my eyes give up.","huh. i count streetlights. same idea, more walking.","notyet beat line","ate cereal for dinner. twice.","twice is a system. respect.","you first.","i gave a man change for a fifty...","consent lines"]},iw={autoplayPath:"8 +28 (36) +8 (44) +8 (52) +10 (62) +12 (74) +6 (80) >= closeMin 70 -> close fills to 100",campaignBarBeats:"after cantsleep reply the bar reads 36% exactly as the video (8 -> 36)"},sw={version:qM,trust:jM,speakers:ZM,days:KM,memoryKeys:JM,beats:QM,close:tw,consent:ew,sources:nw,trustPathCheck:iw},rw=1,ow="festival",aw="event",lw="see map.json landmarks[].key",cw=["the main continues to flow the other way","kiosk-konzern shares close unchanged at one pretzel","lost: one umbrella, hauptwaage. found: a different umbrella","all three trams on time, which is news","kleinstmarkthalle reports stable cheese"],hw={sun:"weather: sun, with a chance of opinions",rain:"weather: rain, as scheduled"},dw=3,uw=[{id:"pigeon",headline:"pigeon elected honorary citizen",ticker:"pigeon elected honorary citizen. acceptance speech brief, mostly about bread",where:"P",startHour:9,durationHours:9,visual:"pigeons",lunch:"P",effects:{social:.05,curiosity:.15,energy:0},reaction:"the honorary citizen is the grey one. they are all the grey one.",diaryLine:"a pigeon was made honorary citizen. it attended the ceremony, then a sandwich."},{id:"festival",headline:"festival of the not-quite-full moon",ticker:"tonight: festival of the not-quite-full moon. moon confirmed at ninety-four percent",where:"Z",startHour:18,durationHours:6,visual:"lanterns",covers:"evening",evening:"Z",crowd:{size:8,radius:2.6},effects:{social:.3,curiosity:.1,energy:-.05},reaction:"ninety-four percent of a moon. we celebrate what we have.",diaryLine:"festival of the not-quite-full moon {at}. lanterns. somebody sang. the moon did its ninety-four percent."},{id:"tram-strike",headline:"tram strike: all three trams stand still",ticker:"tram strike. all three trams stand still. passengers asked to stand still in solidarity",where:"S",startHour:5,durationHours:19,visual:"banner",banner:"STREIK",commute:"detour",trams:"stop",commuteVia:"S",crowd:{size:4,radius:1.5},effects:{social:.05,curiosity:0,energy:-.15},reaction:"all three trams are on strike. solidarity is easier when there are three of you.",diaryLine:"tram strike. all three. i walked the long way and was late. nobody noticed, which was worse."},{id:"mustard",headline:"kiosk-konzern chief steps down after mustard scandal",ticker:'kiosk-konzern chief steps down after mustard scandal. "it was never medium," says insider',where:"T",startHour:10,durationHours:5,visual:"crowd",covers:"lunch",lunch:"K",crowd:{size:6,radius:2},effects:{social:.15,curiosity:.1,energy:-.05},reaction:"the chief resigned. everyone wants a paper. nobody wants mustard.",diaryLine:"the kiosk-konzern chief stepped down over mustard. we sold out of papers by noon. i ate standing up."},{id:"premiere",headline:'premiere at kino harmonie: "pretzel logic"',ticker:'premiere at kino harmonie: "pretzel logic". critics call it "twisted, salted, long"',where:"N",startHour:17,durationHours:5,visual:"crowd",covers:"evening",evening:"N",crowd:{size:6,radius:2},effects:{social:.1,curiosity:.3,energy:-.05},reaction:'"pretzel logic". two hours. it does not untangle.',diaryLine:'saw "pretzel logic" {at}. the plot is a knot. they sell salt in the interval.'},{id:"cheese",headline:"cheese shortage closes the kleinstmarkthalle",ticker:"cheese shortage closes the kleinstmarkthalle. all three stalls affected. all three stalls are cheese",where:"M",startHour:9,durationHours:12,visual:"closedTape",covers:"evening",evening:"M",closes:"M",crowd:{size:3,radius:1.5},effects:{social:-.05,curiosity:-.05,energy:0},reaction:"no cheese. three stalls, nothing on them. it is very tidy.",heard:"no cheese at the kleinstmarkthalle. customers are taking it calmly. too calmly.",diaryLine:"the kleinstmarkthalle was closed. cheese shortage. the tape was the freshest thing there."},{id:"heatwave",headline:"heatwave: 31 degrees in the mirror, 30 in the original",ticker:"heatwave. 31 degrees in the mirror, 30 in the original. officials decline to explain the degree",where:"P",startHour:11,durationHours:7,visual:"crowd",weather:"sun",covers:"lunch",lunch:"P",crowd:{size:6,radius:3},effects:{social:.1,curiosity:0,energy:-.1},reaction:"thirty-one degrees. one more than you have. we checked.",diaryLine:"heatwave. thirty-one here, thirty over there. lunch {at} with everyone else who had the same idea."},{id:"roundabout",headline:"rummer announces a roundabout where no road is",ticker:"rummer announces a roundabout where no road is. construction to begin once a road is found",where:"Z",startHour:14,durationHours:6,visual:"crowd",covers:"evening",evening:"Z",crowd:{size:7,radius:2.4},effects:{social:.1,curiosity:.2,energy:0},reaction:"a roundabout. there is no road. people are queueing to go around.",heard:"they announced a roundabout. there is no road. i will go and look after work.",diaryLine:"the rummer announced a roundabout where there is no road. a crowd came to look at where it would be. i looked too."},{id:"rate",headline:"the türmchen raises the rate on sleep by 0.25",ticker:"the türmchen raises the rate on sleep by 0.25. markets yawn. so does everyone else",where:"E",startHour:13,durationHours:9,visual:"none",everywhere:!0,effects:{social:0,curiosity:.05,energy:-.2},reaction:"sleep went up a quarter point. i do not know what that means. i am tired anyway.",diaryLine:"the türmchen raised the rate on sleep by 0.25. nobody understands it. everyone yawned on principle."},{id:"referendum",headline:"referendum: should the main flow the right way",ticker:"referendum today: should the main flow the right way. the river has not been asked",where:"T",startHour:8,durationHours:13,visual:"banner",banner:"JA NEIN",covers:"evening",evening:"T",crowd:{size:5,radius:2},effects:{social:.1,curiosity:.15,energy:0},reaction:"voted. i will not say which way. the river knows.",heard:"referendum today. about the river. i have a pencil ready.",diaryLine:"referendum on which way the main should flow. i voted {at} in the evening. the river was not consulted."},{id:"rain",headline:"rain predicted; rain arrives",ticker:'rain predicted. rain arrives. forecast office "cautiously surprised"',where:null,startHour:11,durationHours:13,visual:"none",weather:"rain",everywhere:!0,effects:{social:0,curiosity:0,energy:-.05},reaction:"rain was predicted. then it rained. the forecast office is celebrating.",diaryLine:"rain was predicted and then it rained. people were surprised by the accuracy."},{id:"facts",headline:"satirical paper runs out of satire, prints facts by mistake",ticker:'satirical paper "die halbwahrheit" runs out of satire, prints facts by mistake. readers demand refunds',where:null,startHour:7,durationHours:11,visual:"none",atWork:!0,crowd:{size:3,radius:1.2},effects:{social:.05,curiosity:.1,energy:0},reaction:"the satire paper printed facts today. three customers brought it back.",diaryLine:'"die halbwahrheit" ran out of satire and printed facts by mistake. i sold eleven copies. three came back.'}],fw={lexicon:{"central bank":"the türmchen","interest rates":"the rate on sleep","stock market":"the kleinstmarkthalle","city council":"the rummer","prime minister":"the kiosk-konzern chief",election:"referendum",elections:"referendums",strike:"tram strike",train:"tram",trains:"trams",oil:"mustard",inflation:"cheese inflation",economy:"cheese economy",summit:"festival",frankfurt:"spiegelfurt",main:"the main",germany:"parallel germany",hesse:"parallel hesse",europe:"mirror europe",government:"the rummer",parliament:"the rummer",council:"the rummer",bank:"the türmchen",president:"the kiosk-konzern chief",chancellor:"the kiosk-konzern chief",ceo:"the kiosk-konzern chief",minister:"the deputy for mild concern",mayor:"the rummer speaker",police:"the tram authority"},pool:["the kiosk-konzern","the rummer","the türmchen","parallel hesse","the kleinstmarkthalle","the honorary pigeon","the office for approximate numbers","the tram authority","café halbe stunde","the ministry of mild concern"],keep:["the","a","an","in","on","at","after","before","why","how","what","when","new","no","and","of","for","to","as","is","are","with","from","by","it","this","that"],twists:["nobody is surprised.","a committee will look into forming a committee.","the main continues to flow the other way.","cheese prices are unaffected.","the pigeon declined to comment.","experts recommend waiting.","in the original it was the other way round."],reaction:"they are reading it out at the hauptwaage. it sounds better here.",diaryLine:'headline of the day: "{headline}" i did not check it.'},pw="ported from v0.1 DATA.events (12) and DATA.mirror; lowercased; Mika -> vinnie; where = landmark key (P park, Z hauptwaage, S tram stop, T rummer, N kino, M kleinstmarkthalle/MART, E tuermchen, K kiosk, C cafe); banner text stays uppercase because it renders as a sign",mw={version:rw,forcedDay1:ow,seedKey:aw,landmarkIds:lw,tickerFiller:cw,weatherLine:hw,rainEvery:dw,events:uw,mirror:fw,notes:pw},gw=1,xw={world:"campaign iso unit",size:[40,40],axes:"three X = x, three Z = y, three Y = up (campaign z)",peeplHeight:2},vw=[19,19],_w="d0 = distance of footprint centre from centre; inside the flat (15.9..22.1) true distance, elsewhere max(5.4, distance); flat surfaces use d0 5.2 unless set; tier = first tier whose end radius >= d0 (4.6 / 9.5 / 15.5 / 32)",yw={color:"#BFE3A5"},bw=[{id:"ground",kind:"ground",poly:[[0,0],[40,0],[40,40],[0,40]],color:"#BFE3A5",tier:1,d0:0},{id:"sidewalk.n",kind:"sidewalk",rect:[0,22.4,40,23.6],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.s",kind:"sidewalk",rect:[0,26.4,40,27.6],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.w",kind:"sidewalk",rect:[22.4,0,23.6,40],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.e",kind:"sidewalk",rect:[26.4,0,27.6,40],color:"#E9E4D6",d0:5.2,tier:2},{id:"road.x",kind:"road",rect:[0,23.6,40,26.4],color:"#4A4A57",dashes:{axis:"x",at:25,len:.9,pitch:1.8,color:"#FFE100",skip:[22.4,27.6]},d0:5.2,tier:2},{id:"road.y",kind:"road",rect:[23.6,0,26.4,40],color:"#4A4A57",dashes:{axis:"y",at:25,len:.9,pitch:1.8,color:"#FFE100",skip:[22.4,27.6]},d0:5.2,tier:2},{id:"crosswalk.w",kind:"crosswalk",rect:[22.5,23.8,23.5,26.3],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,tier:2},{id:"crosswalk.e",kind:"crosswalk",rect:[26.5,23.8,27.5,26.3],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"crosswalk.n",kind:"crosswalk",rect:[23.8,22.5,26.3,23.5],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"crosswalk.s",kind:"crosswalk",rect:[23.8,26.5,26.3,27.5],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"park",kind:"park",rect:[27.8,27.8,35.2,35.2],color:"#8FD17A",d0:5.2,landmark:"P",tier:2},{id:"pond",kind:"pond",ellipse:[32,31.2,1.6,1.2],color:"#0AB8EE",d0:5.2,tier:2},{id:"river",kind:"river",rect:[36.5,0,39.6,40],color:"#3FC6F2",d0:5.2,landmark:"W",tier:2},{id:"bridge",kind:"bridge",box:[36.3,23.7,0,3.5,2.6,.3],color:"#9A9AA6",tier:4,d0:19.92},{id:"plaza",kind:"plaza",rect:[.3,28.3,7.9,35.9],color:"#E8DCC6",tier:4,d0:19.84,landmark:"Z",new:!0}],Mw=[{id:"flat.slab",tier:1,d0:0,box:[16,16,-.5,6,6,.5],color:"#C98B55",cutaway:!0,landmark:"H"},{id:"flat.wall.back",tier:1,d0:.3,box:[16,16,0,6,.25,3.2],color:"#F4EEDF",decals:[{face:"y",u:[2,4.2],v:[1.1,2.5],color:"#23305E",kind:"window"},{face:"y",u:[.6,1.5],v:[1.4,2.3],color:"#FFE100",kind:"picture"}]},{id:"flat.wall.left",tier:1,d0:.3,box:[16,16,0,.25,6,3.2],color:"#FFC4EE",decals:[{face:"x",u:[2.2,3.6],v:[1.2,2.5],color:"#0AB8EE",kind:"window"},{face:"x",u:[4.4,5.5],v:[0,2.2],color:"#FF4A2A",kind:"door"}]},{id:"flat.bed",tier:1,d0:1.86,box:[16.4,16.4,0,2.2,3,.55],color:"#FFFFFF"},{id:"flat.pillow",tier:1,d0:2.62,box:[16.6,16.5,.55,1.8,.7,.22],color:"#FFFFFF"},{id:"flat.cover",tier:1,d0:1.62,box:[16.4,17.4,.55,2.2,2,.12],color:"#FF7ADB"},{id:"flat.dresser",tier:1,d0:2.94,box:[20.2,16.4,0,1.6,.9,1],color:"#8B5A2B"},{id:"flat.tv",tier:1,d0:3.14,box:[20.5,16.5,1,1,.15,.7],color:"#111111",decals:[{face:"y",u:[.1,.9],v:[.1,.6],color:"#FFE66B",kind:"screen",emissive:.6}]},{id:"flat.lamp.pole",tier:1,d0:3.54,box:[21.55,16.55,1,.1,.1,.55],color:"#111111"},{id:"flat.lamp.shade",tier:1,d0:3.52,box:[21.35,16.45,1.55,.5,.35,.25],color:"#FFE100",glow:!0},{id:"flat.stool",tier:1,d0:2.26,box:[20.6,17.5,0,.7,.7,.5],color:"#FF4A2A",seatPoint:[20.95,17.85,.5]},{id:"flat.bookshelf",tier:1,d0:2.96,box:[16.3,19.8,0,.55,1.8,2.2],color:"#8B5A2B",decals:[{face:"x",u:[.15,.45],v:[.25,.9],color:"#FF4A2A",kind:"book"},{face:"x",u:[.5,.75],v:[.25,.85],color:"#FFE100",kind:"book"},{face:"x",u:[.85,1.2],v:[.25,.95],color:"#0AB8EE",kind:"book"},{face:"x",u:[1.3,1.6],v:[.25,.8],color:"#FF7ADB",kind:"book"},{face:"x",u:[.2,.6],v:[1.2,1.9],color:"#7B35C4",kind:"book"},{face:"x",u:[.7,1],v:[1.2,1.8],color:"#FFFFFF",kind:"book"},{face:"x",u:[1.1,1.55],v:[1.2,1.95],color:"#FF4A2A",kind:"book"}]},{id:"flat.pot",tier:1,d0:3.32,box:[21.1,21,0,.6,.6,.5],color:"#E07A4F"},{id:"tower.pink",tier:2,d0:6.5,box:[9.6,16.2,0,5.8,5.8,5.4],color:"#FF9FE6",shadow:!0,landmark:"K",sign:{text:"KIOSK",face:"y",at:[12.5,22.05],z:1.9},shopFront:{face:"y",u:[1.8,4.2],v:[0,1.8],counter:!0},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"tower.cyan",tier:2,d0:6.5,box:[16.2,9.6,0,5.8,5.8,7.2],color:"#7FD3F5",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"tower.yellow",tier:2,d0:9.19,box:[9.6,9.6,0,5.8,5.8,9.4],color:"#FFE66B",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"cafe",tier:3,d0:11.5,box:[27.8,16.2,0,5.4,5.8,3.4],color:"#F4EEDF",shadow:!0,landmark:"C",sign:{text:"CAFÉ",face:"y",at:[30.5,22.05],z:2.9},decals:[{face:"y",u:[.5,3.6],v:[.4,2.2],color:"#BFE8FA",kind:"window"},{face:"y",u:[4.1,4.9],v:[0,2.2],color:"#FF4A2A",kind:"door"}]},{id:"cafe.awning",tier:3,d0:11.5,box:[27.8,22,2.3,5.4,.9,.16],color:"#FFE100",stripes:{color:"#FF7ADB",count:5,width:.54,pitch:1.08}},{id:"cafe.table.1",tier:3,d0:11.5,box:[28.6,22.45,0,.6,.5,.55],color:"#FFFFFF",seats:[[28.25,22.7,.44],[29.55,22.7,.44]]},{id:"cafe.table.2",tier:3,d0:11.5,box:[31.4,22.45,0,.6,.5,.55],color:"#FFFFFF",seats:[[31.05,22.7,.44],[32.35,22.7,.44]]},{id:"block.white.narrow",tier:4,d0:15.9,box:[33.6,16.2,0,2.6,5.8,4],color:"#FFFFFF",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"mart",tier:3,d0:11.5,box:[15.2,27.8,0,7,5.4,3.8],color:"#FFFFFF",shadow:!0,landmark:"M",sign:{text:"MART",face:"x",at:[22.25,30],z:4.2},decals:[{face:"x",u:[.4,3.9],v:[.3,2.4],color:"#BFE8FA",kind:"window"},{face:"x",u:[4.3,5],v:[0,2.3],color:"#0AB8EE",kind:"door"}]},{id:"mart.signslab",tier:3,d0:11.5,box:[22.2,28.4,3.8,.3,3.2,.8],color:"#FF7ADB"},{id:"block.lavender",tier:3,d0:13.41,box:[9.6,27.8,0,5,5.4,4.4],color:"#B9A2F0",shadow:!0,landmark:"N",sign:{text:"KINO",face:"y",at:[12.1,33.25],z:3.2},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"block.salmon",tier:3,d0:13.21,box:[27.8,9.6,0,5.4,5.8,5.6],color:"#FF8A73",shadow:!0,landmark:"T",sign:{text:"RUMMER",face:"x",at:[33.25,12.5],z:4},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"block.yellow.low",tier:4,d0:16,box:[15.2,33.8,0,7,2.4,3],color:"#FFE66B",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"city.tuermchen",tier:4,d0:15.81,box:[4.3,8.3,0,3.4,3.4,11],color:"#FFFFFF",shadow:!0,landmark:"E",sign:{text:"TÜRMCHEN",face:"y",at:[6,11.75],z:2.2},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}}],ww=[{id:"flat.plant",kind:"blob",at:[21.4,21.3],tier:1,d0:3.32,z:.95,r:.55,color:"#4CAF50"},{id:"flat.rug",kind:"rug",at:[20.05,19.8],tier:1,d0:1,size:[2.5,2.4],color:"#0AB8EE"},{id:"flat.armchair",kind:"armchair",at:[18.6,17.2],tier:1,d0:2,color:"#C98B55",cushion:"#0AB8EE",seatPoint:[18.6,17.4,.44],new:!0},{id:"flat.floorlamp",kind:"floorlamp",at:[17,21.2],tier:1,d0:2.8,color:"#FFE100",new:!0},{id:"flat.poster",kind:"poster",at:[18.5,16.26],tier:1,d0:2.8,z:1.6,size:[.9,1.1],text:"X",color:"#F4EEDF",face:"y",new:!0},{id:"lamp.0",kind:"lamp",at:[22.7,20.2],tier:2,d0:5.4,height:3.5},{id:"lamp.1",kind:"lamp",at:[20.2,22.7],tier:2,d0:5.4,height:3.5},{id:"lamp.2",kind:"lamp",at:[27.3,20.5],tier:2,d0:8.43,height:3.5},{id:"lamp.3",kind:"lamp",at:[22.7,33.5],tier:3,d0:14.96,height:3.5},{id:"tree.0",kind:"tree",at:[22.7,17.4],tier:2,d0:5.4,scale:1},{id:"tree.1",kind:"tree",at:[13.2,22.7],tier:2,d0:6.88,scale:1},{id:"tree.2",kind:"tree",at:[29,29.2],tier:3,d0:14.28,scale:1},{id:"tree.3",kind:"tree",at:[34.4,30.2],tier:4,d0:19.04,scale:1},{id:"tree.4",kind:"tree",at:[29.2,34.2],tier:4,d0:18.31,scale:1},{id:"tree.5",kind:"tree",at:[33.4,34.3],tier:4,d0:21.01,scale:1},{id:"bench.tram",kind:"bench",at:[18.55,22.78],tier:2,d0:5.4,size:[1.3,.45],color:"#8B5A2B",landmark:"S",sign:{text:"TRAM",pole:!0},seatPoint:[18.55,22.7,.44]},{id:"bin.0",kind:"bin",at:[21.58,22.78],tier:2,d0:5.4,color:"#0AB8EE"},{id:"car.red",kind:"car",at:[18,24.35],tier:2,d0:5.44,size:[2.4,1.1],color:"#FF4A2A",roof:"#DDEFFF"},{id:"car.yellow",kind:"car",at:[24.35,29.85],tier:3,d0:12.1,size:[1.1,2.4],color:"#FFE100",roof:"#DDEFFF"},{id:"bench.park",kind:"bench",at:[31.05,34.65],tier:4,d0:19.75,size:[1.3,.5],color:"#8B5A2B",seatPoint:[31.05,34.55,.44]},{id:"car.blue.loop",kind:"car",at:[25,9],tier:3,d0:12,size:[2.4,1.1],color:"#3E6FC4",roof:"#DDEFFF",loop:{path:[[25,.5],[25,39.5]],speed:3.2,pingpong:!1,lane:"x-road"}}],Sw=[{key:"H",id:"flat",name:"vinnie's flat",at:"at home",sign:null,tier:1,kind:"home",building:"flat.slab",door:[21,22.2],spots:{tv:[20.95,17.85],bed:[17.5,18.4],shelf:[17.1,20.7],chair:[18.6,17.4],window:[18.5,17]},lore:"wohnblock. i live on the third floor. the lift lives on the second."},{key:"K",id:"kiosk",name:"the kiosk",at:"at the kiosk",sign:"KIOSK",tier:2,kind:"work",building:"tower.pink",door:[12.5,22.2],spots:{counter:[12.5,21.6],front:[12.5,22.9]},lore:"the kiosk. a wasserhäuschen, technically. nobody has ever bought water here."},{key:"S",id:"tramstop",name:"the tram stop",at:"at the tram stop",sign:"TRAM",tier:2,kind:"transit",spots:{bench:[18.55,22.7],wait:[19.6,22.9]},lore:"tram stop. there are three trams. they come in threes or not at all."},{key:"C",id:"cafe",name:"café halbe stunde",at:"at café halbe stunde",sign:"CAFÉ",tier:3,kind:"cafe",building:"cafe",door:[32.3,22.2],spots:{vinnieMark:[29,23],mochiMark:[31.6,23],table1:[28.9,22.7],table2:[31.7,22.7]},lore:"café halbe stunde. you get half an hour. after that the coffee gives up."},{key:"M",id:"mart",name:"the kleinstmarkthalle",at:"at the kleinstmarkthalle",sign:"MART",tier:3,kind:"market",building:"mart",door:[22.4,32.45],spots:{corner:[23,29.4],front:[23,31]},lore:"kleinstmarkthalle. smallest market hall in parallel hesse. three stalls, all cheese."},{key:"P",id:"park",name:"the park",at:"in the park",sign:null,tier:3,kind:"park",spots:{pond:[30.2,30.4],tree:[29.6,29.8],bench:[31.05,34.55],lawn:[28.8,32]},lore:"the park. some trees, one bench, and a pigeon with tenure."},{key:"N",id:"kino",name:"kino harmonie",at:"at kino harmonie",sign:"KINO",tier:3,kind:"cinema",building:"block.lavender",door:[12.1,33.3],lore:"kino harmonie. one screen. everyone agrees about the film afterwards. it is in the name."},{key:"T",id:"rummer",name:"the rummer",at:"at the rummer",sign:"RUMMER",tier:3,kind:"civic",building:"block.salmon",door:[33.3,12.5],lore:"rummer. the town hall. three gables, one decision a year."},{key:"Z",id:"hauptwaage",name:"the hauptwaage",at:"at the hauptwaage",sign:"HAUPTWAAGE",tier:4,kind:"plaza",monument:[4.1,32.1],spots:{a:[3,31],b:[5.2,31],c:[3,33.2],d:[5.2,33.2],e:[4.1,34.4]},lore:"hauptwaage. opinions get weighed here. most are light."},{key:"E",id:"tuermchen",name:"the türmchen",at:"at the türmchen",sign:"TÜRMCHEN",tier:4,kind:"bank",building:"city.tuermchen",door:[6,11.8],lore:"türmchen. it sets the rates. on what, nobody asks twice."},{key:"W",id:"main",name:"the main",at:"by the main",sign:null,tier:4,kind:"river",spots:{bank:[36,25]},lore:"the main. flows the other way here. nobody has complained."}],Ew={cell:1,walkRects:[[0,22.4,40,23.6],[0,26.4,40,27.6],[22.4,0,23.6,40],[26.4,0,27.6,40],[22.5,23.6,23.5,26.4],[26.5,23.6,27.5,26.4],[23.6,22.5,26.4,23.5],[23.6,26.5,26.4,27.5],[16.3,16.3,21.9,21.9],[20.4,21.9,21.6,22.4],[27.8,22,33.2,22.4],[27.8,27.8,35.2,35.2],[.3,28.3,7.9,35.9],[12,21.4,13,22.4],[22.2,32,22.4,32.9],[32,21.9,32.6,22.4]],blocked:[[30.4,30,33.6,32.4]],rightHandOffset:.3,doors:{H:[21,22.2],K:[12.5,22.2],C:[32.3,22.2],M:[22.4,32.45],N:[12.1,33.3],T:[33.3,12.5],E:[6,11.8]}},Aw={generator:"campaign WORLD tier-4 loop, ported 1:1",hash:"hsh(i) = fract(sin(i*127.1 + 311.7) * 43758.5453)",grid:[10,10],lotPitch:4,lotOffset:.3,lotSize:3.4,core:[9.2,9.2,36.2,36.2],roadBands:[[22.2,27.8]],maxX:36.3,treeChance:.16,treeScale:1.25,height:"1.8 + r*r*10 with r = hsh(n*3.1 + 1)",colourIndex:"floor(hsh(n*7.7 + 2) * 7)",treeTest:"hsh(n*5.3) < 0.16",palette:["#F4EEDF","#FF9FE6","#7FD3F5","#FFE66B","#FFFFFF","#B9A2F0","#FF8A73"],skipRects:[[.3,28.3,7.9,35.9],[4.3,8.3,7.7,11.7]],skipRule:"increment n before testing skipRects so every other lot keeps its campaign height and colour",windows:!0,shadow:!0},Tw={cells:20,cellSize:2,color:"#35314B",dusk:"#2A2640",variation:[.9,1.1],band:1.8,popBand:1.4,height:.12},Cw=[{who:"pip",a:[31.9,23.2],tierMin:3},{who:"dex",a:[28.2,23.45],b:[34.8,23.45],speed:.8,phase:.3,tierMin:3},{who:"mochi",a:[23,30.1],tierMin:3},{who:"kit",a:[30.6,30.2],tierMin:4},{who:"nimbus",a:[28.8,31.4],tierMin:4},{who:"taro",a:[35.2,23.2],tierMin:4},{who:"cosmo",a:[3.5,23.1],tierMin:4},{who:"juno",a:[1.5,23.25],b:[8.4,23.25],speed:.8,phase:.4,tierMin:3},{who:"vega",a:[23.1,3.2],tierMin:4},{who:"spike",a:[23.25,1.2],b:[23.25,8.2],speed:.9,phase:.7,tierMin:3},{who:"hexi",a:[23.1,37.4],tierMin:4},{who:"rudy",a:[2.4,23.1],tierMin:4},{who:"flare",a:[23.1,5.2],tierMin:3},{who:"joe",a:[9.8,23.2],b:[21.2,23.2],speed:1,phase:.1,decor:!0,tierMin:2},{who:"joe",a:[23.25,9.8],b:[23.25,21.4],speed:.9,phase:.6,decor:!0,tierMin:2},{who:"joe",a:[27,28.4],b:[27,35],speed:.9,phase:.2,decor:!0,tierMin:3},{who:"joe",a:[29.5,32.8],b:[32.4,32.8],speed:.7,phase:.5,decor:!0,tierMin:4}],Rw={homes:[[3,22.9],[12.5,22.9],[23,14],[23,36],[33,22.9],[27,5],[27,31],[8,27]]},Pw={version:gw,units:xw,centre:vw,revealRule:_w,ground:yw,surfaces:bw,buildings:Mw,props:ww,landmarks:Sw,nav:Ew,city:Aw,fog:Tw,placements:Cw,extrasSpawn:Rw},kw=1,Fw={day:1,time:"13:00",note:"S8 story mode opens on vinnie's day off"},Lw={dayRealSeconds:240,speeds:[0,1,4,16],simStep:20,seed:57},Iw={dayOff:{days:[1],schedule:[{from:"13:00",to:"14:00",place:"H",spot:"tv",anim:"tv",line:"dayoff"},{from:"14:00",to:"14:30",place:"H",spot:"shelf",anim:"read"},{from:"14:30",to:"15:00",place:"H",spot:"window",anim:"idle"},{from:"15:00",to:"15:40",place:"S",spot:"bench",anim:"sit",line:"tramstop",fallback:{place:"H",spot:"chair",anim:"sit"}},{from:"15:40",to:"16:20",place:"K",spot:"front",anim:"browse",line:"customer",fallback:{place:"H",spot:"tv",anim:"tv"}},{from:"16:20",to:"17:00",place:"S",spot:"wait",anim:"idle",fallback:{place:"H",spot:"shelf",anim:"read"}},{from:"17:00",to:"17:30",place:"M",spot:"corner",anim:"idle",beat:"contact",fallback:{place:"H",spot:"window",anim:"idle"}},{from:"17:30",to:"18:00",place:"C",spot:"table1",anim:"sit",line:"eveningC",fallback:{place:"H",spot:"chair",anim:"sit"}},{from:"18:00",to:"20:30",place:"Z",spot:"a",anim:"idle",line:"eveningZ",fallback:{place:"C",spot:"table1",anim:"sit"}},{from:"20:30",to:"21:30",place:"H",spot:"chair",anim:"sit",line:"goHome"},{from:"21:30",to:"22:30",place:"H",spot:"shelf",anim:"read",line:"diary"},{from:"22:30",to:"13:00",place:"H",spot:"bed",anim:"sleep",line:"sleep"}]},work:{days:"2+",schedule:[{from:"06:30",to:"07:30",place:"H",spot:"tv",anim:"idle",line:"wake"},{from:"07:30",to:"12:30",place:"K",spot:"counter",anim:"browse",line:"arriveWork",walkLine:"leave"},{from:"12:30",to:"13:15",place:"$lunch",spot:"auto",anim:"sit",line:"$lunch",options:{C:"lunchCafe",P:"lunchPark",K:"lunchRush",Krain:"lunchStay"}},{from:"13:15",to:"17:00",place:"K",spot:"counter",anim:"browse",line:"backToWork"},{from:"17:00",to:"20:30",place:"$evening",spot:"auto",anim:"idle",line:"$evening",options:{P:"eveningP",C:"eveningC",Z:"eveningZ",N:"eveningN",M:"eveningM",Mclosed:"eveningMclosed",T:"eveningT",H:"eveningH",Hrain:"eveningHrain"},walkLine:"close"},{from:"20:30",to:"22:00",place:"H",spot:"chair",anim:"sit",line:"goHome"},{from:"22:00",to:"22:30",place:"H",spot:"shelf",anim:"read",line:"diary"},{from:"22:30",to:"06:30",place:"H",spot:"bed",anim:"sleep",line:"sleep"}],rules:{rainEvery:3,lunch:"event.lunch ?? (rain ? 'Krain' : rng pick of C,P weighted by needs.social)",evening:"event.evening ?? highest need: social->Z or C, curiosity->N or T or M, energy low->H; closed places map to the 'closed' line"}},tierGating:"if the activity's place tier > current tier, run its fallback (or H idle). story beats ('beat') fire only when the place is allowed",walkSpeedU:1.6,visibleRule:{outdoorShareMin:.6,cutawayCountsAsVisible:!0},lines:{wake:["morning. allegedly.","awake. under protest.","up. the day insisted."],leave:["kiosk. same as yesterday, with newer newspapers.","off to work. the papers will not sell themselves. i have checked."],detour:["a tram is resting on my usual way. walking the long way."],arriveWork:["kiosk open. technically.","shutters up. expectations low.","open. first customer wants change for a fifty."],arriveLate:["late. the kiosk did not mind. it cannot."],lunchCafe:["half an hour. starting now.","the usual. they know what that is. i do not."],lunchPark:["bench. sandwich. pigeons at a respectful distance.","lunch outside. the bench was free. it usually is."],lunchRush:["no lunch. everyone wants a paper at once."],lunchStay:["raining. eating behind the counter. the view is snacks."],backToWork:["back. nothing happened. i checked.","second half. same kiosk."],close:["shutters down. that was the shift.","closed. the newspapers are already old."],eveningP:["evening in the park. the light does most of the work."],eveningC:["coffee after work. a second half hour. bold."],eveningZ:["hauptwaage. standing where the others are standing."],eveningN:["one ticket. middle row. nobody behind me, i hope."],eveningM:["kleinstmarkthalle. buying cheese from stall two of three."],eveningMclosed:["closed. i will stand here a moment. out of respect."],eveningT:["voting. i brought my own pencil."],eveningH:["home early. the sofa and i have plans."],eveningHrain:["raining. home. not complicated."],goHome:["home. enough town for one day."],diary:["writing it down. briefly."],sleep:["light off. mostly."],rain:["rain. as scheduled."],customer:["{name} bought a paper and an opinion. the opinion was free.","{name} wanted change for a fifty. everyone does."],meet:["{name}. we nodded. that was the conversation.","passed {name}. weather was discussed. briefly.","{name} said hello. i said it back. even trade."],ohhi:["oh. hi."],dayoff:["day off. the kiosk can stare at someone else.","no shift today. i checked twice."],tramstop:["tram stop. i'm not taking one. i just like the waiting."],contact:["psst. her. over there."]}},Dw=[{id:"joe-1",ported:"bembel",home:[3,22.9],body:"average",attach:[{part:"prop.briefcase"}],plan:[["07:10","T","in"],["12:10","Z","out"],["12:55","T","in"],["16:45","C","out"],["18:50","home"]]},{id:"joe-2",ported:"gri",home:[12.5,22.9],body:"thin",attach:[{part:"prop.bag"}],plan:[["06:20","M","in"],["14:00","P","out"],["16:20","home"],["18:40","Z","out"],["21:10","home"]]},{id:"joe-3",ported:"handkaes",home:[23,14],body:"stocky",attach:[{part:"prop.cup"}],plan:[["08:40","P","out"],["10:10","K","visit"],["10:45","C","out"],["12:00","home"],["15:10","Z","out"],["17:20","M","in"],["19:20","home"]]},{id:"joe-4",ported:"ebbel",home:[23,36],body:"average",attach:[{part:"prop.umbrella"}],plan:[["08:50","E","in"],["17:10","N","in"],["20:40","C","out"],["22:10","home"]]},{id:"joe-5",ported:null,home:[33,22.9],body:"thin",attach:[{part:"headphones"}],plan:[["09:30","S","out"],["11:00","P","out"],["13:00","K","visit"],["16:00","S","out"],["18:30","Z","out"],["21:00","home"]]},{id:"joe-6",ported:null,home:[27,5],body:"average",attach:[{part:"prop.balloon"}],plan:[["10:00","C","out"],["12:30","P","out"],["15:00","M","in"],["16:30","S","out"],["18:00","Z","out"],["20:00","home"]]},{id:"joe-7",ported:null,home:[27,31],body:"xl",attach:[{part:"prop.flowers"}],plan:[["07:45","K","visit"],["09:00","T","in"],["13:00","C","out"],["14:00","T","in"],["17:30","P","out"],["19:30","home"]]},{id:"joe-8",ported:null,home:[8,27],body:"average",attach:[{part:"prop.dog"}],plan:[["08:00","P","out"],["11:30","S","out"],["14:30","P","out"],["17:45","Z","out"],["20:15","home"]]}],Nw={start:{energy:[.72,.96],social:[.3,.6],curiosity:[.3,.6]},rates:{sleep:{energy:.11,social:-.01,curiosity:0},home:{energy:.02,social:-.04,curiosity:-.02},walk:{energy:-.06,social:.01,curiosity:.04},work:{energy:-.05,social:.02,curiosity:-.045},rush:{energy:-.09,social:.07,curiosity:.01},cafe:{energy:.06,social:.14,curiosity:.02},park:{energy:.03,social:.03,curiosity:.08},plaza:{energy:-.03,social:.16,curiosity:.08},cinema:{energy:-.01,social:.04,curiosity:.2},market:{energy:-.02,social:.08,curiosity:.07},rummer:{energy:-.02,social:.06,curiosity:.1}},moods:[[.3,"glum"],[.42,"flat"],[.58,"okay"],[.72,"content"],[9,"bright"]]},Uw="lines ported from v0.1 DATA.lines (lowercased, Mika -> vinnie); extras 1-4 port v0.1 plans (bembel, gri, handkaes, ebbel) as white Joes carrying crowd-scene props; 5-8 are new",Ow={version:kw,start:Fw,clock:Lw,vinnie:Iw,extras:Dw,needs:Nw,notes:Uw},Bw=1,zw=[{id:"enter",trigger:{on:"s8Start"},actions:[["simTime","13:00"],["tier",1],["camera","town",{dist:[26,24],seconds:5}],["vinnie","activity","tv"],["caption","tier1",.8],["gps","show"],["caption","walkHint",5.2],["vinnie","standTurn",4.5],["bubble","vinnie","oh. hi.",4.9],["autoWalk",8]]},{id:"tier2",trigger:{on:"km",gte:.5},actions:[["tier",2],["gps","show"],["ticker","start"],["caption","tier2",.3],["routine","unlock",2],["lore","K","onFirstReveal"]]},{id:"tier3",trigger:{on:"km",gte:1.2},actions:[["tier",3],["rings","on"],["caption","tier3",.2],["routine","unlock",3]]},{id:"contact",trigger:{on:"near",a:"vinnie",b:"mochi",dist:6,tierMin:3},actions:[["holdSim",!0],["play","contact"]]},{id:"cafe",trigger:{on:"choice",beat:"contact",value:"sayhi"},actions:[["wipe"],["play","cafe"],["met","mochi"]]},{id:"tier4",trigger:{on:"km",gte:2.2,after:"cafe"},actions:[["tier",4],["caption","tier4",.2],["gfx","hd",1],["routine","unlock",4],["walkTo",["vinnie","mochi"],"Z"]]},{id:"festival",trigger:{on:"any",of:[{after:"tier4",realSeconds:10}]},actions:[["festival"]]},{id:"end",trigger:{on:"any",of:[{after:"festival",realSeconds:13}]},actions:[["gps","shrink"],["continue","meet the neighbours"],["next","S11"]]}],Hw={camera:{shot:"venue",dist:16},steps:[{t:0,do:"turn",who:"vinnie",to:"mochi"},{t:0,do:"bubble",who:"vinnie",text:"psst. her. over there.",hop:.12},{t:1.4,do:"bubble",who:"vinnie",text:"say hi?",choices:[{label:"say hi",value:"sayhi"},{label:"not now",value:"notnow"}],autoPick:0,autoAfter:2}],onSayHi:[{t:0,do:"clip",who:"vinnie",clip:"wave"},{t:.2,do:"turn",who:"mochi",to:"vinnie"},{t:.25,do:"clip",who:"mochi",clip:"react"},{t:.3,do:"hop",who:"vinnie"},{t:.5,do:"bubble",who:"mochi",text:"hi vinnie!",style:"yellow"},{t:.55,do:"hop",who:"mochi"},{t:1.6,do:"end",next:"cafe"}],onNotNow:[{t:0,do:"bubble",who:"vinnie",text:"fair. she'll be around."},{t:1.5,do:"end",retrigger:"tapMochi"}]},Vw={holdSim:!0,marks:{vinnie:[29,23],mochi:[31.6,23],vinnieFrom:[25.5,23],mochiFrom:[35,23]},shots:[{id:"C1",ref:"show/s_019.jpg",t:[0,1.9],camera:{shot:"venue",target:[30.3,1,22.8],pitch:24,dist:[18,17]},actions:[["walk","vinnie","mark",3],["walk","mochi","mark",3],["pill","cafePill",.3],["pill","herePill",.3],["hide","tierChip"],["hide","gps"]]},{id:"C2",ref:"show/s_020.jpg",t:[1.9,2.4],camera:{shot:"venue",dist:[17,16]},actions:[["clip","both","react"],["turn","vinnie","mochi"],["turn","mochi","vinnie"],["bang","both",1.9],["dialogueBox","rise",2]]},{id:"C3",ref:"show/s_021.jpg",t:[2.4,4.7],camera:{shot:"close",favour:"vinnie",panPx:70},line:{who:"VINNIE",text:"yo. you're in colour too.",at:2.4}},{id:"C4",ref:"show/s_023.jpg",t:[4.7,7],camera:{shot:"close",favour:"mochi",panPx:70},line:{who:"MOCHI",text:"so you're the famous vinnie. nice mask.",at:4.7}},{id:"C5",ref:"show/s_026.jpg",t:[7,9.1],camera:{shot:"close",favour:"vinnie",panPx:70},line:{who:"VINNIE",text:"it's my face. wanna get coffee?",at:7}},{id:"C6",ref:"show/s_028.jpg",t:[9.1,10.8],camera:{shot:"close",favour:"mochi",panPx:70},line:{who:"MOCHI",text:"only if it's oat.",at:9.1},caret:"▼"},{id:"C7",ref:"show/s_029.jpg",t:[10.8,12.6],camera:{shot:"venue",dist:16,seconds:.9},actions:[["friendMeter",10.8],["dialogueBox","drop",11],["clip","both","joy",11.9]]},{id:"C8",ref:null,t:[12.6,20],camera:{shot:"venue",orbitDeg:15},actions:[["walk","vinnie","seat",[28.25,22.7]],["walk","mochi","seat",[29.55,22.7]],["clip","both","sit"],["cups","table1"],["toast","mochiAdded",16]]}],end:{t:20,do:"wipe",to:"town",resumeSim:!0},speakerChips:{VINNIE:"#FF4A2A",MOCHI:"#FF7ADB"},typeMsPerChar:35},Gw={version:Bw,worldScript:zw,contact:Hw,cafe:Vw},Ww=1,Xw=[19,19],$w={hdFromTier:4,hdDelay:1,overlayFade:[.55,0],overlayFadeSeconds:1.6,fieldGlow:{"16bit":.25,hd:.45}},Yw={metersPerMapPx:5,manualKmPerSecond:.06,autoKmPerSecond:.03,autoStartDelay:8,card:{mapSize:[348,212],start:[92,118]},autoRoute:[[92,118],[150,118],[150,70],[240,70],[240,150],[300,150],[300,40],[200,30],[120,40],[60,90],[60,180],[180,190],[320,190]]},qw=[{n:1,badge:"tier 1",name:"his place",kmAt:0,radius:[0,4.6],radiusSeconds:1.2,shot:{target:[19,19],dist:26,distEnd:24,distSeconds:5,pitch:35.264},caption:"at first, he only lets you see his place.",captionAt:.8,captionFor:4.5,bubble:{who:"vinnie",text:"oh. hi.",delay:4.9,hold:1.1},gfx:"16bit",routineAllow:["H"]},{n:2,badge:"tier 2",name:"his street",kmAt:.5,radius:[4.6,9.5],radiusSeconds:1.8,shot:{target:[21,21],dist:48,distSeconds:2,pitch:35.264},caption:"get closer, and he shows you more.",captionAt:.3,captionFor:3.2,gfx:"16bit",routineAllow:["H","K","S"]},{n:3,badge:"tier 3",name:"the neighbourhood",kmAt:1.2,radius:[9.5,15.5],radiusSeconds:2,shot:{target:[24,24],dist:64,distSeconds:2,pitch:35.264},caption:"spot someone in colour? they've got a human too.",captionAt:.2,captionFor:4.4,gfx:"16bit",rings:!0,routineAllow:["H","K","S","C","M","P","N","T"]},{n:4,badge:"tier 4",name:"the city",kmAt:2.2,requires:["cafe"],radius:[15.5,32],radiusSeconds:2.6,shot:{target:[20,20],dist:136,distSeconds:3,pitch:35.264},caption:"walk your world, and his world opens up.",captionAt:.2,captionFor:5,gfx:"hd",rings:!0,routineAllow:["H","K","S","C","M","P","N","T","Z","E","W"]}],jw={progressSegments:4,gpsTitle:"your walk today",kmFormat:"{km} km",walkPillTier1:"your walk today · {km} km"},Zw={version:Ww,centre:Xw,gfx:$w,walk:Yw,tiers:qw,hud:jw},Ta=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),an=(i,t,e,n)=>{var s;i.push(`${t}: ${e} (got ${(s=JSON.stringify(n))==null?void 0:s.slice(0,60)})`)},np=()=>{},vt=(i,t,e)=>typeof i!="string"&&an(e,t,"expected string",i),Dt=(i,t,e)=>(typeof i!="number"||!Number.isFinite(i))&&an(e,t,"expected number",i),Uc=(i,t,e)=>typeof i!="boolean"&&an(e,t,"expected boolean",i),cn=(i,t,e)=>(typeof i!="string"||!/^#[0-9A-Fa-f]{3,8}$/.test(i))&&an(e,t,"expected #hex",i),Ca=i=>(t,e,n)=>t!==null&&i(t,e,n),oi=(...i)=>(t,e,n)=>!i.includes(t)&&an(n,e,`expected one of ${i.join("|")}`,t),Oc=(i,t,e)=>(typeof i!="string"||!/^\d{2}:\d{2}$/.test(i))&&an(e,t,"expected hh:mm",i),Zt=(i,t=0)=>(e,n,s)=>{if(!Array.isArray(e))return an(s,n,"expected array",e);e.length<t&&an(s,n,`expected at least ${t} items`,e.length),e.forEach((r,o)=>i(r,`${n}[${o}]`,s))},Ne=(i,t=Dt)=>(e,n,s)=>{if(!Array.isArray(e)||e.length!==i)return an(s,n,`expected ${i}-tuple`,e);e.forEach((r,o)=>t(r,`${n}[${o}]`,s))},Kw=(i,t)=>(e,n,s)=>{if(!Array.isArray(e)||e.length!==2)return an(s,n,"expected pair",e);i(e[0],`${n}[0]`,s),t(e[1],`${n}[1]`,s)},Pt=i=>(t,e,n)=>{if(!Ta(t))return an(n,e,"expected object",t);for(const[s,r]of Object.entries(i)){const o=s.endsWith("?"),a=o?s.slice(0,-1):s;if(!(a in t)){o||an(n,`${e}.${a}`,"missing",void 0);continue}r(t[a],`${e}.${a}`,n)}},rn=i=>(t,e,n)=>{if(!Ta(t))return an(n,e,"expected object",t);for(const[s,r]of Object.entries(t))i(r,`${e}.${s}`,n)},Zi=oi(1),Zo=Pt({head:Dt,h:Dt,T:Dt,A:Dt,hem:Dt,belly:Dt,legs:Dt}),ip=oi("thin","average","stocky","xl"),sp=Pt({part:vt,"color?":cn,"color2?":cn,"side?":oi("L","R"),"params?":rn(np)}),Jw=["head","h","T","A","hem","belly","legs"],Qw=Pt({id:vt,num:vt,name:vt,tagline:Ca(vt),hasHuman:Uc,role:oi("lead","friend","neighbour","blank"),body:ip,headScale:Dt,"shape?":(i,t,e)=>{if(rn(Dt)(i,t,e),Ta(i))for(const n of Object.keys(i))Jw.includes(n)||an(e,`${t}.${n}`,"unknown shape key",n)},skin:cn,"hands?":cn,face:Pt({eyes:vt,mouth:vt}),top:Pt({type:vt,color:cn,"color2?":cn}),pants:Pt({type:oi("wide","straight","jeans"),color:cn}),shoes:Pt({type:oi("sneaker","leather"),color:cn}),attach:Zt(sp),sprite:Pt({body:vt,card:vt,footX:Dt,aspect:Dt}),"flags?":Pt({"occultMarks?":Uc})}),tS=Pt({version:Zi,units:Pt({U:vt,worldPerU:Dt}),bodyTypes:Pt({thin:Zo,average:Zo,stocky:Zo,xl:Zo}),cast:(i,t,e)=>{if(Zt(Qw,15)(i,t,e),Array.isArray(i)){const n=i.map(s=>Ta(s)?s.id:null);new Set(n).size!==n.length&&an(e,t,"duplicate cast ids",n)}}}),eS=Pt({version:Zi,captions:rn(vt),S0:Pt({tags:Zt(Kw(vt,Dt)),wordmark:vt}),S1:Pt({heading:vt,chips:Zt(Ne(2,vt)),button:vt}),S2:Pt({finding:vt}),S3:Pt({name:vt,pill:vt}),S4:Pt({trust:vt}),S6:rn(vt),S7:rn(vt),S8:rn(vt),S11:Pt({heading:vt,order:Zt(vt,12)}),S12:Pt({wordmark:vt,tagline:vt,cta:vt,sub:vt,replay:vt,lineup:Zt(vt,15)}),debug:Pt({resetAsk:vt}),ui:Pt({continue:vt})}),rp=oi("VINNIE","YOU","MOCHI"),gi=Pt({who:rp,text:vt,"hop?":Dt}),Xu=Pt({label:vt,trust:Dt,"set?":rn(vt),reply:Zt(gi),"preferIfProfile?":vt}),nS=Pt({version:Zi,trust:Pt({start:Dt,max:Dt,closeMin:Dt,display:vt}),speakers:Pt({VINNIE:Pt({chip:cn}),YOU:Pt({chip:cn})}),days:Pt({maxDays:Dt,nextDayCard:vt,forcedOnDay:Dt}),memoryKeys:Zt(vt),beats:Zt(Pt({id:vt,days:Zt(Dt,1),line:Zt(gi,1),"lineAgain?":Zt(gi),choices:Zt(Xu,1),autoPick:Dt}),1),close:Pt({pass:Zt(gi,1),fail:Zt(gi,1),forced:Zt(gi,1),toast:vt}),consent:Pt({ask:Zt(gi,1),askAgain:Zt(gi),choices:Zt(Xu,2),forced:Zt(gi),autoPick:Dt,confirmToast:vt})}),iS=Pt({version:Zi,forcedDay1:vt,tickerFiller:Zt(vt,1),weatherLine:Pt({sun:vt,rain:vt}),events:Zt(Pt({id:vt,headline:vt,ticker:vt,where:Ca(vt),startHour:Dt,durationHours:Dt,visual:oi("pigeons","lanterns","banner","crowd","closedTape","none"),effects:Pt({social:Dt,curiosity:Dt,energy:Dt}),reaction:vt,diaryLine:vt}),12),mirror:Pt({lexicon:rn(vt),pool:Zt(vt),keep:Zt(vt),twists:Zt(vt)})}),Js=oi(1,2,3,4),sS=Pt({version:Zi,units:Pt({size:Ne(2)}),centre:Ne(2),ground:Pt({color:cn}),surfaces:Zt(Pt({id:vt,kind:vt,color:cn,tier:Js,d0:Dt})),buildings:Zt(Pt({id:vt,tier:Js,d0:Dt,box:Ne(6),color:cn}),1),props:Zt(Pt({id:vt,kind:vt,at:Ne(2),tier:Js,d0:Dt})),landmarks:Zt(Pt({id:vt,key:vt,name:vt,at:vt,sign:Ca(vt),tier:Js,lore:vt,kind:vt})),nav:Pt({cell:Dt,walkRects:Zt(Ne(4)),blocked:Zt(Ne(4)),rightHandOffset:Dt,doors:rn(Ne(2))}),city:Pt({hash:vt,grid:Ne(2),lotPitch:Dt,lotOffset:Dt,lotSize:Dt,treeChance:Dt}),fog:Pt({cells:Dt,cellSize:Dt,color:cn,band:Dt,popBand:Dt}),placements:Zt(Pt({who:vt,a:Ne(2),tierMin:Js})),extrasSpawn:Pt({homes:Zt(Ne(2))})}),$u=Pt({from:Oc,to:Oc,place:vt,anim:vt}),rS=Pt({version:Zi,start:Pt({day:Dt,time:Oc}),clock:Pt({dayRealSeconds:Dt,speeds:Zt(Dt,1),simStep:Dt,seed:Dt}),vinnie:Pt({dayOff:Pt({days:Zt(Dt),schedule:Zt($u,1)}),work:Pt({schedule:Zt($u,1)}),walkSpeedU:Dt,lines:rn(Zt(vt))}),extras:Zt(Pt({id:vt,home:Ne(2),body:ip,attach:Zt(sp),plan:Zt(Zt(vt,2))})),needs:Pt({start:rn(Ne(2)),rates:rn(rn(Dt))})}),oS=(i,t,e)=>{(!Array.isArray(i)||typeof i[0]!="string")&&an(e,t,"expected [verb, ...args]",i)},aS=Pt({version:Zi,worldScript:Zt(Pt({id:vt,trigger:Pt({on:vt}),actions:Zt(oS)}),1),contact:Pt({steps:Zt(Pt({t:Dt,do:vt})),onSayHi:Zt(Pt({t:Dt,do:vt})),onNotNow:Zt(Pt({t:Dt,do:vt}))}),cafe:Pt({holdSim:Uc,marks:rn(Ne(2)),shots:Zt(Pt({id:vt,ref:Ca(vt),t:Ne(2),camera:Pt({shot:vt}),"line?":Pt({who:rp,text:vt,at:Dt})}),8),speakerChips:rn(cn)})}),lS=Pt({version:Zi,centre:Ne(2),gfx:Pt({hdFromTier:Dt,hdDelay:Dt,overlayFade:Ne(2),overlayFadeSeconds:Dt,fieldGlow:Pt({"16bit":Dt,hd:Dt})}),walk:Pt({metersPerMapPx:Dt,manualKmPerSecond:Dt,autoKmPerSecond:Dt,autoStartDelay:Dt,card:Pt({mapSize:Ne(2),start:Ne(2)}),autoRoute:Zt(Ne(2))}),tiers:Zt(Pt({n:Js,name:vt,badge:vt,kmAt:Dt,radius:Ne(2),radiusSeconds:Dt,shot:Pt({target:Ne(2),dist:Dt,distSeconds:Dt,pitch:Dt}),caption:vt,captionAt:Dt,captionFor:Dt,gfx:oi("16bit","hd"),routineAllow:Zt(vt)}),4),hud:rn(np)}),op={cast:tS,copy:eS,dialogue:nS,events:iS,map:sS,routine:rS,setpieces:aS,tiers:lS},cS=Object.keys(op);function hS(i,t){const e=[];return op[i](t,i,e),e}function dS(i){const t=cS.flatMap(r=>hS(r,i[r]));if(t.length)return t;const e=i.cast,n=new Set(e.cast.map(r=>r.id)),s=i.copy;for(const r of[...s.S11.order,...s.S12.lineup])n.has(r)||t.push(`copy: unknown cast id "${r}"`);return t}const Hn={cast:FM,copy:YM,dialogue:sw,events:mw,map:Pw,routine:Ow,setpieces:Gw,tiers:Zw},uS=()=>dS(Hn),fS=1500;let ap;const pS=new Promise(i=>ap=i);async function mS(){const i=xp(location.search),t=new vp(_p());i.reset&&t.reset();const e=t.data.settings;e.auto=i.auto??!i.test,i.speed!==null&&(e.speed=i.speed),Tp();const n=new t1,s=new n1,r=new i1,o=new yp,a=new Mp(new bp(i.test)),l=uS();l.length&&(console.error("data invalid",l),r.show(`data invalid: ${l[0]}`,30));const c=["joe","vinnie","mochi"].map(_=>Hn.cast.cast.find(y=>y.id===_).sprite.body);await Promise.race([Promise.all([document.fonts.load('52px "Bagel Fat One"'),document.fonts.load("36px VT323"),document.fonts.load("36px VT323","É"),...c.map(_=>{const y=new Image;return y.src=oo(_),y.decode().catch(()=>{})})]),new Promise(_=>setTimeout(_,fS))]);const h=new Op(EM,document.getElementById("stage"),_=>{const y=xs(_);n.set(y.field,y.dots),t.setScreen(_),o.emit("screen",_)}),u={flow:h,store:t,data:Hn,copy:Hn.copy,params:i,bus:o,loop:a,captions:s,toast:r,field:n};h.bind(u);const d=_=>{var R;return(_==="S8"?Hn.copy.S8.continueEnd:(R=Hn.copy[_])==null?void 0:R.continue)??Hn.copy.ui.continue},p=Hn.copy.ui,x=new Vp(h,t,s,d,i.auto===null&&!i.test?{name:p.autoplay,on:p.on,off:p.off}:null),S=[i.screen,t.data.screen].find(Zu)??"S0";h.start(S),i.t!==null&&h.seek(i.t);const m=jy({flow:h,loop:a,store:t,autoplay:x,ready:pS});window.__peepls=m;const f=()=>Qy(m,t,Hn.copy.debug.resetAsk,Hn.cast.cast.map(_=>_.id),Hn.events.events.map(_=>_.id));let M=!i.clean&&(i.debug||i.test)?f():null;!M&&!i.clean&&addEventListener("keydown",_=>{_.key==="`"&&!M&&(M=f())}),a.add(_=>{const y=t.data.settings.speed===.25?_*.25:_;h.update(y),s.update(y),x.update(y),r.update(y),n.update(a.uiT,t.data.settings.reduceMotion||matchMedia("(prefers-reduced-motion: reduce)").matches),M==null||M.update()}),addEventListener("keydown",_=>{var y,R;_.key!=="`"&&(document.documentElement.dataset.keyboard="1"),!((R=(y=_.target)==null?void 0:y.closest)!=null&&R.call(y,"#debug, button, select"))&&((_.key===" "||_.key==="Enter")&&(_.preventDefault(),x.tap())||h.input({type:"key",key:_.key}))}),addEventListener("pointerdown",_=>{var v,E;if((E=(v=_.target)==null?void 0:v.closest)!=null&&E.call(v,"#debug, button, .slider, #continue"))return;const[y,R]=qr(_.clientX,_.clientY);h.input({type:"tap",x:y,y:R})}),a.step(0),a.start(),ap()}mS();
