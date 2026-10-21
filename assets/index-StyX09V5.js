var cp=Object.defineProperty;var hp=(i,t,e)=>t in i?cp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var I=(i,t,e)=>hp(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function dp(i){const t=new URLSearchParams(i),e=r=>t.has(r)&&t.get(r)!=="0",n=r=>{const o=t.get(r);return o===null||o===""||Number.isNaN(Number(o))?null:Number(o)},s=e("test");return{clean:e("clean"),auto:t.has("auto")?t.get("auto")!=="0":null,test:s,seed:n("seed")??57,screen:t.get("screen"),t:n("t"),reset:e("reset"),speed:n("speed"),tod:t.get("tod"),gfx:t.get("gfx"),outline:t.get("outline"),cast:t.get("cast"),rig:t.get("rig"),lowgpu:e("lowgpu"),free:e("free"),campaign:e("campaign"),portrait:e("portrait")}}const wa="peepls.demo.v1",zu=()=>({auto:!0,reduceMotion:!1,speed:1,outline:"ink",gfx:"auto",tod:"auto",debugCollapsed:!1}),Sa=()=>({screen:"S0",settings:zu(),progress:{}});class up{constructor(t){I(this,"data");this.kv=t,this.data=this.load()}load(){var t;try{const e=(t=this.kv)==null?void 0:t.getItem(wa);if(!e)return Sa();const n=JSON.parse(e);return{screen:typeof n.screen=="string"?n.screen:"S0",settings:{...zu(),...n.settings??{}},progress:n.progress??{}}}catch{return Sa()}}save(){var t;try{(t=this.kv)==null||t.setItem(wa,JSON.stringify(this.data))}catch{}}setScreen(t){this.data.screen=t,this.save()}setSetting(t,e){this.data.settings[t]=e,this.save()}reset(){var t;try{(t=this.kv)==null||t.removeItem(wa)}catch{}this.data=Sa()}}function fp(){try{return window.localStorage}catch{return null}}class pp{constructor(){I(this,"handlers",new Map)}on(t,e){let n=this.handlers.get(t);return n||this.handlers.set(t,n=new Set),n.add(e),()=>n.delete(e)}emit(t,e){for(const n of this.handlers.get(t)??[])n(e)}}const Mh=1/60;class mp{constructor(t){I(this,"mode");I(this,"last",-1);this.mode=t?"manual":"real"}realDt(t){const e=this.last<0?0:(t-this.last)/1e3;return this.last=t,Math.min(Math.max(e,0),.1)}}class gp{constructor(t){I(this,"uiT",0);I(this,"paused",!1);I(this,"fps",0);I(this,"drawFrame",!0);I(this,"steps",[]);I(this,"lastFrameMs",0);this.clock=t}add(t){this.steps.push(t)}start(){if(this.clock.mode==="manual")return;const t=e=>{this.measureFps(e),this.step(this.clock.realDt(e)),requestAnimationFrame(t)};requestAnimationFrame(t)}advance(t,e=!0){const n=Math.round(t/1e3/Mh);for(let s=0;s<n;s++)this.drawFrame=e&&s===n-1,this.step(Mh);this.drawFrame=!0}step(t){this.uiT+=t;for(const e of this.steps)e(t)}measureFps(t){if(this.lastFrameMs){const e=1e3/Math.max(1,t-this.lastFrameMs);this.fps=this.fps?this.fps*.95+e*.05:e}this.lastFrameMs=t}}function V(i,t={},...e){const n=document.createElement(i);Hu(n,t);for(const s of e)s&&n.append(s);return n}const xp="http://www.w3.org/2000/svg";function ae(i,t={},...e){const n=document.createElementNS(xp,i);Hu(n,t);for(const s of e)s&&n.append(s);return n}function Hu(i,t){for(const[e,n]of Object.entries(t))n===void 0||n===!1||i.setAttribute(e,n===!0?"":String(n))}function zt(i,t){for(const[e,n]of Object.entries(t))n!==void 0&&(e.startsWith("--")?i.style.setProperty(e,String(n)):i.style[e]=typeof n=="number"?`${n}px`:n)}const ar=i=>document.querySelector(`#${i} .sbox`)??document.getElementById(i),vp=(i,t,e)=>Math.min(e,Math.max(t,i)),Bi=i=>vp(i,0,1),se={pop:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,draw:i=>i<.5?4*i**3:1-(-2*i+2)**3/2,enter:i=>1-(1-i)**3,fall:i=>i*i},le=(i,t,e,n)=>n(Bi((i-t)/e)),Ks=(i,t,e,n=.4)=>i>=t&&i<=t+n?Math.sin(Math.PI*(i-t)/n)*e:0,Cl=(i,t,e)=>i<t?0:e*Math.exp(-2.4*(i-t))*Math.sin(7*(i-t)),_p=(i,t=0)=>1+.012*Math.sin(2.6*i+t),ke=(i,t,e,n)=>n?[1,le(i,t,.2,se.enter)]:[le(i,t,e,se.pop),i>=t?1:0],yp=i=>[12*i%48,6*i%48],Mn=typeof window<"u"&&innerHeight/innerWidth>1.25,gi=Mn?1080:1920,xi=Mn?1920:1080;let fs=1;function wh(){fs=Math.min(innerWidth/gi,innerHeight/xi);const i=`translate(-50%, -50%) scale(${fs})`;for(const t of document.querySelectorAll(".sbox"))t.style.transform=i}function bp(){document.documentElement.classList.toggle("portrait",Mn),wh(),addEventListener("resize",wh)}const la=()=>fs;function Hr(i,t){return[(i-innerWidth/2)/fs+gi/2,(t-innerHeight/2)/fs+xi/2]}function Mp(i,t){return[(i-gi/2)*fs+innerWidth/2,(t-xi/2)*fs+innerHeight/2]}const We=(i,t)=>Mn?t:i;function vs(i,t,e,n,s=540,r=960){Mn&&(i.style.transformOrigin="0 0",i.style.transform=`translate(${s-t*n}px, ${r-e*n}px) scale(${n})`)}function Re(i,t){if(!Mn)return i;i.dataset.pin="";for(const[e,n]of Object.entries(t))i.style[e]=typeof n=="number"?`${n}px`:n;return i}const Fc=[960,540,1.8,540,893],Sh=.8,Eh=.08,wp=.48,Ah=We(-2100,-2300),Sp=We(1960,1360),Ea=.25;class Vu{constructor(t,e,n){I(this,"t",0);I(this,"swapped",!1);I(this,"pink");I(this,"ink");I(this,"layer",document.getElementById("wipe"));this.reduced=t,this.onCovered=e,this.onDone=n;const s=ar("wipe"),r=(o,a)=>V("div",{class:`wipe-band ${o}`,style:`position:absolute;top:0;width:2100px;height:${xi}px;background:var(--${a})`});this.pink=r("wipe-pink","pink"),this.ink=r("wipe-ink","ink"),t&&(this.pink.style.display="none"),s.append(this.pink,this.ink),this.layer.classList.add("covering"),this.update(0)}update(t){this.t+=t;const e=this.t,n=this.reduced?Ea/2:wp,s=this.reduced?Ea:Sh+Eh;if(this.reduced)zt(this.ink,{left:0,width:gi,opacity:String(1-Math.abs(e/(Ea/2)-1))});else{const r=o=>Ah+(Sp-Ah)*se.draw(Bi((e-o)/Sh));zt(this.pink,{transform:`translateX(${r(0)}px) skewX(-8deg)`}),zt(this.ink,{transform:`translateX(${r(Eh)}px) skewX(-8deg)`})}!this.swapped&&e>=n&&(this.swapped=!0,this.onCovered()),e>=s&&(this.pink.remove(),this.ink.remove(),this.layer.classList.remove("covering"),this.onDone())}}const Ep=.3,Ap=.25;class Tp{constructor(t,e,n){I(this,"t",0);I(this,"finished",!1);this.old=t,this.reduced=e,this.onDone=n,this.update(0)}update(t){if(this.finished)return;this.t+=t;const e=this.reduced?Ap:Ep;this.old&&(this.old.style.opacity=String(1-le(this.t,0,e,se.enter))),this.t>=e&&(this.finished=!0,this.onDone())}}const Th=.9,Ch=.25,Rh=We([1380,930],[540,1080]),Cp=We(620,760);function Ph(i){if(!i)return null;const t=i.getBoundingClientRect(),[e,n]=Hr(t.left,t.top),[s,r]=Hr(t.right,t.bottom);return{x:e,y:n,w:s-e,h:r-n}}class Rp{constructor(t,e,n,s){I(this,"t",0);I(this,"finished",!1);I(this,"from");I(this,"radius");I(this,"bezel");I(this,"sprite",null);this.next=e,this.reduced=n,this.onDone=s;const r=t==null?void 0:t.querySelector('[data-morph="screen"]');this.from=Ph(r)??{x:716,y:66,w:488,h:948},this.radius=56*(this.from.w/488),this.bezel=(t==null?void 0:t.querySelector('[data-morph="bezel"]'))??null;const o=t==null?void 0:t.querySelector('[data-morph="vinnie"]'),a=e.querySelector('[data-morph="vinnie"]'),l=Ph(o);if(!n&&o&&l){const c=V("img",{src:o.src,alt:"",style:"position:absolute;display:block"});ar("wipe").append(c);const h=[o,a].filter(u=>!!u);for(const u of h)u.style.visibility="hidden";this.sprite={el:c,from:l,hidden:h}}this.update(0)}update(t){if(this.finished)return;if(this.t+=t,this.reduced){this.next.style.opacity=String(le(this.t,0,Ch,se.enter)),this.t>=Ch&&this.finish();return}const e=le(this.t,0,Th,se.draw),n=this.from,s=n.x*(1-e),r=n.y*(1-e),o=n.w+(gi-n.w)*e,a=n.h+(xi-n.h)*e,l=this.radius*(1-e);if(zt(this.next,{clipPath:`inset(${r}px ${gi-s-o}px ${xi-r-a}px ${s}px round ${l}px)`,opacity:String(Bi(e*2.5))}),this.bezel&&(this.bezel.style.opacity=String(1-Bi(e*3))),this.sprite){const c=this.sprite.from,h=c.h+(Cp-c.h)*e,u=h*(c.w/c.h),d=c.x+c.w/2+(Rh[0]-(c.x+c.w/2))*e,p=c.y+c.h+(Rh[1]-(c.y+c.h))*e;zt(this.sprite.el,{left:d-u/2,top:p-h,width:u,height:h})}this.t>=Th&&this.finish()}finish(){if(this.finished=!0,zt(this.next,{clipPath:"none",opacity:"1"}),this.sprite){this.sprite.el.remove();for(const t of this.sprite.hidden)t.style.visibility=""}this.onDone()}}const hr=1,kh=.7,Pp=2300,Fh=We([1e3,520],[540,866]),Lh=.25;class kp{constructor(t,e,n){I(this,"t",0);I(this,"swapped",!1);I(this,"disc");I(this,"layer",document.getElementById("wipe"));this.reduced=t,this.onCovered=e,this.onDone=n,this.disc=V("div",{class:"iris-white",style:"position:absolute;background:var(--white)"}),ar("wipe").append(this.disc),this.layer.classList.add("covering"),this.update(0)}update(t){this.t+=t;const e=this.t,n=this.reduced?Lh/2:hr,s=this.reduced?Lh:hr+kh;if(this.reduced)zt(this.disc,{left:0,top:0,width:gi,height:xi,opacity:String(1-Math.abs(e/n-1))});else if(e<hr){const r=Pp*le(e,0,hr,se.draw);zt(this.disc,{left:Fh[0]-r,top:Fh[1]-r,width:r*2,height:r*2,borderRadius:"50%",opacity:"1"})}else zt(this.disc,{left:0,top:0,width:gi,height:xi,borderRadius:"0",opacity:String(1-le(e,hr,kh,se.enter))});!this.swapped&&e>=n&&(this.swapped=!0,this.onCovered()),e>=s&&(this.disc.remove(),this.layer.classList.remove("covering"),this.onDone())}}const jo=[{id:"S0",name:"crowd to title",field:"ink",dots:!1,via:"none",next:"S1",hold:3,caption:"crowd1"},{id:"S1",name:"profile",field:"cyan",dots:!0,via:"wipe",next:"S2",hold:"self",caption:"profile"},{id:"S2",name:"finding",field:"cyan",dots:!0,via:"crossfade",next:"S3",hold:"self",caption:"finding"},{id:"S3",name:"reveal",field:"cyan",dots:!0,via:"crossfade",next:"S4",hold:2.5,caption:"reveal"},{id:"S4",name:"quiet room",field:"cream",dots:!1,via:"morph",next:"S5",hold:"self",caption:"room1"},{id:"S5",name:"consent",field:"cream",dots:!1,via:"none",next:"S6",hold:"self",caption:null},{id:"S6",name:"body ships",field:"pink",dots:!0,via:"wipe",next:"S7",hold:1.5,caption:"ship"},{id:"S7",name:"keychain handshake",field:"pink",dots:!0,via:"none",next:"S8",hold:"self",caption:"tap"},{id:"S8",name:"slow-tv world",field:"night",dots:!1,via:"iris",next:"S11",hold:3,caption:"tier1"},{id:"S11",name:"neighbours roster",field:"yellow",dots:!0,via:"wipe",next:"S12",hold:4,caption:"cast1"},{id:"S12",name:"end card",field:"pink",dots:!0,via:"wipe",next:null,hold:null,caption:null},{id:"S99",name:"cast viewer",field:"cream",dots:!1,via:"crossfade",next:null,hold:null,caption:null}],Zs=i=>jo.find(t=>t.id===i),Gu=i=>jo.some(t=>t.id===i);class Fp{constructor(t,e,n){I(this,"current",null);I(this,"t",0);I(this,"transition",null);I(this,"el",null);I(this,"leaving",null);I(this,"ctx");this.factory=t,this.root=e,this.onSwap=n}bind(t){this.ctx=t}get id(){var t;return((t=this.current)==null?void 0:t.id)??null}get busy(){return this.transition!==null}get reduced(){return this.ctx.store.data.settings.reduceMotion||matchMedia("(prefers-reduced-motion: reduce)").matches}start(t){this.swap(t)}go(t,e="wipe"){return this.busy?Promise.resolve():e==="none"?(this.swap(t),Promise.resolve()):new Promise(n=>{var o;(o=this.current)==null||o.exit();const s=()=>{this.transition=null,n()};if(e==="crossfade"||e==="morph"){const a=this.detach();this.mountNew(t,e==="crossfade"?"below":"above",(a==null?void 0:a.screen.id)??null);const l=()=>{a==null||a.screen.unmount(),a==null||a.el.remove(),this.leaving=null,this.onSwap(t),s()};this.transition=e==="crossfade"?new Tp((a==null?void 0:a.el)??null,this.reduced,l):new Rp((a==null?void 0:a.el)??null,this.el,this.reduced,l);return}const r=e==="iris"?kp:Vu;this.transition=new r(this.reduced,()=>this.swap(t),s)})}next(){const t=this.id?Zs(this.id).next:null;t&&this.go(t,Zs(t).via)}replay(){this.id&&!this.busy&&this.swap(this.id)}seek(t){var e,n;this.t=t,(n=(e=this.current)==null?void 0:e.seek)==null||n.call(e,t)}update(t){var e;this.leaving&&(this.leaving.t+=t,this.leaving.screen.update(t,this.leaving.t)),(e=this.transition)==null||e.update(t),this.current&&(this.t+=t,this.current.update(t,this.t))}input(t){var e;this.busy||(e=this.current)==null||e.onInput(t)}swap(t){const e=this.detach();e==null||e.screen.unmount(),e==null||e.el.remove(),this.leaving=null,this.mountNew(t,"above",(e==null?void 0:e.screen.id)??null),this.onSwap(t)}detach(){return!this.current||!this.el?null:(this.leaving={screen:this.current,el:this.el,t:this.t},this.current=null,this.el=null,this.leaving)}mountNew(t,e,n){this.ctx.captions.clear();const s=V("div",{class:`screen screen-${t}`,style:`position:absolute;left:0;top:0;width:${gi}px;height:${xi}px`}),r=Mn?s.appendChild(V("div",{class:"scene",style:"position:absolute;left:0;top:0;width:1920px;height:1080px"})):s;e==="below"?this.root.prepend(s):this.root.append(s);const o=this.factory(t);if(this.current=o,this.el=s,this.t=0,o.mount(this.ctx,r),Mn)for(const a of r.querySelectorAll("[data-pin]"))s.append(a);o.enter(n)}}const Lp={44:"12px 26px 14px",40:"10px 24px 12px",32:"8px 20px 10px",30:"6px 14px 8px",28:"6px 14px 8px"};function gn(i,t={}){const e=t.size??44,n=V(t.tag??"div",{class:"pill pixel",style:["display:inline-flex;align-items:center;gap:14px;border-radius:999px;background:var(--ink);white-space:nowrap",`font-size:${e}px;padding:${Lp[e]};color:var(--${t.color??"white"})`].join(";")});return n.append(...i),n}function Js(i,t,e="currentColor"){const n=ae("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",style:"display:block;flex:none"}),s={fill:"none",stroke:e,"stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"};switch(i){case"check":n.append(ae("path",{d:"M4 12.5l5 5L20 6",...s}));break;case"arrow":n.append(ae("path",{d:"M3 12h17M14 5l7 7-7 7",...s}));break;case"caret":n.append(ae("rect",{x:7,y:3,width:10,height:18,fill:e}));break;case"down":n.append(ae("path",{d:"M4 7h16L12 19z",fill:e}));break;case"play":n.append(ae("path",{d:"M7 4l13 8-13 8z",fill:e}));break;case"dot":n.append(ae("circle",{cx:12,cy:12,r:8,fill:e}));break}return n}class Ip{constructor(t,e){I(this,"el");I(this,"ring");I(this,"text");this.text=V("span",{},t);const n=gn([this.text,Js("play",22,"var(--white)")],{size:32,tag:"button"});this.ring=ae("rect",{x:1,y:1,style:"width:calc(100% - 2px);height:calc(100% - 2px)",rx:999,pathLength:1,fill:"none",stroke:"var(--yellow)","stroke-width":2,"stroke-dasharray":"1 1","stroke-dashoffset":1});const s=ae("svg",{style:"position:absolute;inset:-5px;width:calc(100% + 10px);height:calc(100% + 10px);overflow:visible;pointer-events:none"},this.ring);this.el=V("div",{class:"continue",style:"position:absolute;right:50px;bottom:36px;display:none"},n,s),n.addEventListener("click",r=>{r.stopPropagation(),e()}),ar("continue").append(this.el)}setLabel(t){this.text.textContent=t}update(t,e,n){zt(this.el,{display:t?"block":"none",bottom:n?140:36}),this.ring.style.display=e===null?"none":"inline",e!==null&&this.ring.setAttribute("stroke-dashoffset",String(1-e))}}class Dp{constructor(t,e,n,s){I(this,"elapsed",0);I(this,"pill");I(this,"labelFor",null);this.flow=t,this.store=e,this.captions=n,this.label=s,this.pill=new Ip("",()=>this.tap())}get on(){return this.store.data.settings.auto}tap(){return this.canContinue()?(this.flow.next(),!0):!1}update(t){const e=this.flow.current;if(!e||this.flow.busy||!e.landed()){this.elapsed=0,this.pill.update(!1,null,this.captions.visible);return}this.labelFor!==e.id&&(this.labelFor=e.id,this.pill.setLabel(this.label(e.id)));const{hold:n}=Zs(e.id),s=this.canContinue()&&typeof n=="number";if(s&&this.on&&(this.elapsed+=t,this.elapsed>=n)){this.elapsed=0,this.flow.next();return}this.pill.update(s,s&&this.on?this.elapsed/n:null,this.captions.visible)}canContinue(){const t=this.flow.current;if(!t||this.flow.busy||!t.landed())return!1;const e=Zs(t.id);return e.next!==null&&e.hold!=="self"}}const Tt={},kn={rigOk:!0,chars:0,lod:[0,0,0],sub:null};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="184",Np=0,Ih=1,Up=2,Vo=1,Wu=2,Fr=3,zi=0,Ke=1,Bn=2,pi=0,$s=1,Dh=2,Nh=3,Uh=4,Op=5,os=100,Bp=101,zp=102,Hp=103,Vp=104,Gp=200,Wp=201,Xp=202,$p=203,Rl=204,Pl=205,Yp=206,qp=207,jp=208,Kp=209,Zp=210,Jp=211,Qp=212,t0=213,e0=214,kl=0,Fl=1,Ll=2,Qs=3,Il=4,Dl=5,Nl=6,Ul=7,Xu=0,n0=1,i0=2,Hn=0,$u=1,Yu=2,qu=3,ju=4,Ku=5,Zu=6,Ju=7,Oh="attached",s0="detached",Qu=300,ps=301,tr=302,Aa=303,Ta=304,ca=306,Ol=1e3,fi=1001,Bl=1002,Ge=1003,r0=1004,eo=1005,je=1006,Ca=1007,cs=1008,bn=1009,tf=1010,ef=1011,Vr=1012,Ic=1013,ii=1014,Fn=1015,vi=1016,Dc=1017,Nc=1018,Gr=1020,nf=35902,sf=35899,rf=1021,of=1022,Ln=1023,_i=1026,hs=1027,ha=1028,Uc=1029,ms=1030,Oc=1031,Bc=1033,Go=33776,Wo=33777,Xo=33778,$o=33779,zl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,$l=37496,Yl=37488,ql=37489,Ko=37490,jl=37491,Kl=37808,Zl=37809,Jl=37810,Ql=37811,tc=37812,ec=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,lc=37820,cc=37821,hc=36492,dc=36494,uc=36495,fc=36283,pc=36284,Zo=36285,mc=36286,o0=3200,a0=3201,gc=0,l0=1,ui="",qe="srgb",Jo="srgb-linear",Qo="linear",we="srgb",Es=7680,Bh=519,c0=512,h0=513,d0=514,zc=515,u0=516,f0=517,Hc=518,p0=519,zh=35044,Hh="300 es",ti=2e3,Wr=2001;function m0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function g0(){const i=ta("canvas");return i.style.display="block",i}const Vh={};function Gh(...i){const t="THREE."+i.shift();console.log(t,...i)}function af(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=af(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function pe(...i){i=af(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xc(...i){const t=i.join(" ");t in Vh||(Vh[t]=!0,jt(...i))}function x0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const v0={[kl]:Fl,[Ll]:Nl,[Il]:Ul,[Qs]:Dl,[Fl]:kl,[Nl]:Ll,[Ul]:Il,[Dl]:Qs};class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,vc=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function _0(i,t){return(i%t+t)%t}function Pa(i,t,e){return(1-e)*i+e*t}function dr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ch=class ch{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ch.prototype.isVector2=!0;let wt=ch;class Vi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3];if(u!==S||l!==d||c!==p||h!==x){let m=l*d+c*p+h*x+u*S;m<0&&(d=-d,p=-p,x=-x,S=-S,m=-m);let f=1-a;if(m<.9995){const _=Math.acos(m),E=Math.sin(_);f=Math.sin(f*_)/E,a=Math.sin(a*_)/E,l=l*f+d*a,c=c*f+p*a,h=h*f+x*a,u=u*f+S*a}else{l=l*f+d*a,c=c*f+p*a,h=h*f+x*a,u=u*f+S*a;const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*p-c*d,t[e+1]=l*x+h*d+c*u-a*p,t[e+2]=c*x+h*p+a*d-l*u,t[e+3]=h*x-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hh=class hh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hh.prototype.isVector3=!0;let D=hh;const ka=new D,Wh=new Vi,dh=class dh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],S=s[0],m=s[3],f=s[6],_=s[1],E=s[4],w=s[7],k=s[2],v=s[5],A=s[8];return r[0]=o*S+a*_+l*k,r[3]=o*m+a*E+l*v,r[6]=o*f+a*w+l*A,r[1]=c*S+h*_+u*k,r[4]=c*m+h*E+u*v,r[7]=c*f+h*w+u*A,r[2]=d*S+p*_+x*k,r[5]=d*m+p*E+x*v,r[8]=d*f+p*w+x*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,x=e*u+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=d*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;let re=dh;const Fa=new re,Xh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){const i={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?Qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jo]:{primaries:t,whitePoint:n,transfer:Qo,toXYZ:Xh,fromXYZ:$h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Xh,fromXYZ:$h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}const me=y0();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let As;class b0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=ta("canvas")),As.width=t.width,As.height=t.height;const s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ta("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let M0=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?b0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let w0=0;const Ia=new D;class sn extends _s{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=fi,s=fi,r=je,o=cs,a=Ln,l=bn,c=sn.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=ys(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ia).x}get height(){return this.source.getSize(Ia).y}get depth(){return this.source.getSize(Ia).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ol:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ol:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Qu;sn.DEFAULT_ANISOTROPY=1;const uh=class uh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,w=(p+1)/2,k=(f+1)/2,v=(h+d)/4,A=(u+S)/4,g=(x+m)/4;return E>w&&E>k?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=v/n,r=A/n):w>k?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=v/s,r=g/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=A/r,s=g/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-x)*(m-x)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(u-S)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;let Se=uh;class S0 extends _s{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends S0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lf extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class E0 extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const aa=class aa{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,x=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=d-S*c,e[9]=-a*l,e[2]=S-d*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,x=c*h,S=c*u;e[0]=d+S*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=S+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,x=c*h,S=c*u;e[0]=d-S*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=S-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,x=a*h,S=a*u;e[0]=l*h,e[4]=x*c-p,e[8]=d*c+S,e[1]=l*u,e[5]=S*c+d,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*h,e[4]=S-d*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+x,e[10]=d-S*u}else if(t.order==="XZY"){const d=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+S,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=S*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(A0,t,T0)}lookAt(t,e,n){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ei.crossVectors(n,vn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ei.crossVectors(n,vn)),Ei.normalize(),no.crossVectors(vn,Ei),s[0]=Ei.x,s[4]=no.x,s[8]=vn.x,s[1]=Ei.y,s[5]=no.y,s[9]=vn.y,s[2]=Ei.z,s[6]=no.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],S=n[6],m=n[10],f=n[14],_=n[3],E=n[7],w=n[11],k=n[15],v=s[0],A=s[4],g=s[8],b=s[12],C=s[1],T=s[5],F=s[9],P=s[13],B=s[2],L=s[6],H=s[10],U=s[14],J=s[3],tt=s[7],ut=s[11],Mt=s[15];return r[0]=o*v+a*C+l*B+c*J,r[4]=o*A+a*T+l*L+c*tt,r[8]=o*g+a*F+l*H+c*ut,r[12]=o*b+a*P+l*U+c*Mt,r[1]=h*v+u*C+d*B+p*J,r[5]=h*A+u*T+d*L+p*tt,r[9]=h*g+u*F+d*H+p*ut,r[13]=h*b+u*P+d*U+p*Mt,r[2]=x*v+S*C+m*B+f*J,r[6]=x*A+S*T+m*L+f*tt,r[10]=x*g+S*F+m*H+f*ut,r[14]=x*b+S*P+m*U+f*Mt,r[3]=_*v+E*C+w*B+k*J,r[7]=_*A+E*T+w*L+k*tt,r[11]=_*g+E*F+w*H+k*ut,r[15]=_*b+E*P+w*U+k*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],S=t[7],m=t[11],f=t[15],_=l*p-c*d,E=a*p-c*u,w=a*d-l*u,k=o*p-c*h,v=o*d-l*h,A=o*u-a*h;return e*(S*_-m*E+f*w)-n*(x*_-m*k+f*v)+s*(x*E-S*k+f*A)-r*(x*w-S*v+m*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],S=t[13],m=t[14],f=t[15],_=e*a-n*o,E=e*l-s*o,w=e*c-r*o,k=n*l-s*a,v=n*c-r*a,A=s*c-r*l,g=h*S-u*x,b=h*m-d*x,C=h*f-p*x,T=u*m-d*S,F=u*f-p*S,P=d*f-p*m,B=_*P-E*F+w*T+k*C-v*b+A*g;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return t[0]=(a*P-l*F+c*T)*L,t[1]=(s*F-n*P-r*T)*L,t[2]=(S*A-m*v+f*k)*L,t[3]=(d*v-u*A-p*k)*L,t[4]=(l*C-o*P-c*b)*L,t[5]=(e*P-s*C+r*b)*L,t[6]=(m*w-x*A-f*E)*L,t[7]=(h*A-d*w+p*E)*L,t[8]=(o*F-a*C+c*g)*L,t[9]=(n*C-e*F-r*g)*L,t[10]=(x*v-S*w+f*_)*L,t[11]=(u*w-h*v-p*_)*L,t[12]=(a*b-o*T-l*g)*L,t[13]=(e*T-n*b+s*g)*L,t[14]=(S*E-x*k-m*_)*L,t[15]=(h*k-u*E+d*_)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,x=r*u,S=o*h,m=o*u,f=a*u,_=l*c,E=l*h,w=l*u,k=n.x,v=n.y,A=n.z;return s[0]=(1-(S+f))*k,s[1]=(p+w)*k,s[2]=(x-E)*k,s[3]=0,s[4]=(p-w)*v,s[5]=(1-(d+f))*v,s[6]=(m+_)*v,s[7]=0,s[8]=(x+E)*A,s[9]=(m-_)*A,s[10]=(1-(d+S))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ts.set(s[0],s[1],s[2]).length();const a=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);const c=1/o,h=1/a,u=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ti,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let x,S;if(l)x=r/(o-r),S=o*r/(o-r);else if(a===ti)x=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Wr)x=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,S;if(l)x=1/(o-r),S=o/(o-r);else if(a===ti)x=-2/(o-r),S=-(o+r)/(o-r);else if(a===Wr)x=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};aa.prototype.isMatrix4=!0;let Qt=aa;const Ts=new D,Dn=new Qt,A0=new D(0,0,0),T0=new D(1,1,1),Ei=new D,no=new D,vn=new D,Yh=new Qt,qh=new Vi;class Hi{constructor(t=0,e=0,n=0,s=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let C0=0;const jh=new D,Cs=new Vi,ri=new Qt,io=new D,ur=new D,R0=new D,P0=new Vi,Kh=new D(1,0,0),Zh=new D(0,1,0),Jh=new D(0,0,1),Qh={type:"added"},k0={type:"removed"},Rs={type:"childadded",child:null},Da={type:"childremoved",child:null};class Xe extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new D,e=new Hi,n=new Vi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new re}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(Jh,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(Jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?io.copy(t):io.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ur,io,this.up):ri.lookAt(io,ur,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ri),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k0),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qh),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,R0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,P0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new D(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ln extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},so={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=_0(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ua(o,r,t+1/3),this.g=Ua(o,r,t),this.b=Ua(o,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=cf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return me.workingToColorSpace(Qe.copy(this),t),Math.round(de(Qe.r*255,0,255))*65536+Math.round(de(Qe.g*255,0,255))*256+Math.round(de(Qe.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=qe){me.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(so);const n=Pa(Ai.h,so.h,e),s=Pa(Ai.s,so.s,e),r=Pa(Ai.l,so.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new ee;ee.NAMES=cf;class da extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Nn=new D,oi=new D,Oa=new D,ai=new D,Ps=new D,ks=new D,td=new D,Ba=new D,za=new D,Ha=new D,Va=new Se,Ga=new Se,Wa=new Se;class zn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),oi.subVectors(n,e),Oa.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(oi),l=Nn.dot(Oa),c=oi.dot(oi),h=oi.dot(Oa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Va.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Va.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Va,r.x),o.addScaledVector(Ga,r.y),o.addScaledVector(Wa,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),oi.subVectors(t,e),Nn.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return zn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,n),ks.subVectors(r,n),Ba.subVectors(t,n);const l=Ps.dot(Ba),c=ks.dot(Ba);if(l<=0&&c<=0)return e.copy(n);za.subVectors(t,s);const h=Ps.dot(za),u=ks.dot(za);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ps,o);Ha.subVectors(t,r);const p=Ps.dot(Ha),x=ks.dot(Ha);if(x>=0&&p<=x)return e.copy(r);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(ks,a);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return td.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(td,a);const f=1/(m+S+d);return o=S*f,a=d*f,e.copy(n).addScaledVector(Ps,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Gi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),oo.subVectors(this.max,fr),Fs.subVectors(t.a,fr),Ls.subVectors(t.b,fr),Is.subVectors(t.c,fr),Ti.subVectors(Ls,Fs),Ci.subVectors(Is,Ls),Yi.subVectors(Fs,Is);let e=[0,-Ti.z,Ti.y,0,-Ci.z,Ci.y,0,-Yi.z,Yi.y,Ti.z,0,-Ti.x,Ci.z,0,-Ci.x,Yi.z,0,-Yi.x,-Ti.y,Ti.x,0,-Ci.y,Ci.x,0,-Yi.y,Yi.x,0];return!Xa(e,Fs,Ls,Is,oo)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,Fs,Ls,Is,oo))?!1:(ao.crossVectors(Ti,Ci),e=[ao.x,ao.y,ao.z],Xa(e,Fs,Ls,Is,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const li=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,ro=new Gi,Fs=new D,Ls=new D,Is=new D,Ti=new D,Ci=new D,Yi=new D,fr=new D,oo=new D,ao=new D,qi=new D;function Xa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);const a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ue=new D,lo=new wt;let L0=0;class _e extends _s{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Wc extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hf extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}}const I0=new Gi,pr=new D,$a=new D;class bs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):I0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add($a)),this.expandByPoint(pr.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let D0=0;const En=new Qt,Ya=new Xe,Ds=new D,_n=new Gi,mr=new Gi,Ve=new D;class Oe extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(m0(t)?hf:Wc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(_n.min,mr.min),_n.expandByPoint(Ve),Ve.addVectors(_n.max,mr.max),_n.expandByPoint(Ve)):(_n.expandByPoint(mr.min),_n.expandByPoint(mr.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),Ve.add(Ds)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new D,l[g]=new D;const c=new D,h=new D,u=new D,d=new wt,p=new wt,x=new wt,S=new D,m=new D;function f(g,b,C){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,g),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,C),h.sub(c),u.sub(c),p.sub(d),x.sub(d);const T=1/(p.x*x.y-x.x*p.y);isFinite(T)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(T),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(T),a[g].add(S),a[b].add(S),a[C].add(S),l[g].add(m),l[b].add(m),l[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let g=0,b=_.length;g<b;++g){const C=_[g],T=C.start,F=C.count;for(let P=T,B=T+F;P<B;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const E=new D,w=new D,k=new D,v=new D;function A(g){k.fromBufferAttribute(s,g),v.copy(k);const b=a[g];E.copy(b),E.sub(k.multiplyScalar(k.dot(b))).normalize(),w.crossVectors(v,b);const T=w.dot(l[g])<0?-1:1;o.setXYZW(g,E.x,E.y,E.z,T)}for(let g=0,b=_.length;g<b;++g){const C=_[g],T=C.start,F=C.count;for(let P=T,B=T+F;P<B;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new _e(d,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let N0=0;class jr extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=$s,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Pl&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ci=new D,qa=new D,co=new D,Ri=new D,ja=new D,ho=new D,Ka=new D;class Xc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(qa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(co),a=Ri.dot(this.direction),l=-Ri.dot(co),c=Ri.lengthSq(),h=Math.abs(1-o*o);let u,d,p,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){const S=1/h;u*=S,d*=S,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(co,d),p}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){ja.subVectors(e,t),ho.subVectors(n,t),Ka.crossVectors(ja,ho);let o=this.direction.dot(Ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(ho.crossVectors(Ri,ho));if(l<0)return null;const c=a*this.direction.dot(ja.cross(Ri));if(c<0||l+c>o)return null;const h=-a*Ri.dot(Ka);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ei extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ed=new Qt,ji=new Xc,uo=new bs,nd=new D,fo=new D,po=new D,mo=new D,Za=new D,go=new D,id=new D,xo=new D;class be extends Xe{constructor(t=new Oe,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Za.fromBufferAttribute(u,t),o?go.addScaledVector(Za,h):go.addScaledVector(Za.sub(e),h))}e.add(go)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(uo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(uo,nd)===null||ji.origin.distanceToSquared(nd)>(t.far-t.near)**2))&&(ed.copy(r).invert(),ji.copy(t.ray).applyMatrix4(ed),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=_,k=E;w<k;w+=3){const v=a.getX(w),A=a.getX(w+1),g=a.getX(w+2);s=vo(this,f,t,n,c,h,u,v,A,g),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const _=a.getX(m),E=a.getX(m+1),w=a.getX(m+2);s=vo(this,o,t,n,c,h,u,_,E,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=_,k=E;w<k;w+=3){const v=w,A=w+1,g=w+2;s=vo(this,f,t,n,c,h,u,v,A,g),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const _=m,E=m+1,w=m+2;s=vo(this,o,t,n,c,h,u,_,E,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function U0(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zi,a),l===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xo);return c<e.near||c>e.far?null:{distance:c,point:xo.clone(),object:i}}function vo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fo),i.getVertexPosition(l,po),i.getVertexPosition(c,mo);const h=U0(i,t,e,n,fo,po,mo,id);if(h){const u=new D;zn.getBarycoord(id,fo,po,mo,u),s&&(h.uv=zn.getInterpolatedAttribute(s,a,l,c,u,new wt)),r&&(h.uv1=zn.getInterpolatedAttribute(r,a,l,c,u,new wt)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};zn.getNormal(fo,po,mo,d.normal),h.face=d,h.barycoord=u}return h}const gr=new Se,sd=new Se,rd=new Se,O0=new Se,od=new Qt,_o=new D,Ja=new bs,ad=new Qt,Qa=new Xc;class ld extends be{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oh,this.bindMatrix=new Qt,this.bindMatrixInverse=new Qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(s),t.ray.intersectsSphere(Ja)!==!1&&(ad.copy(s).invert(),Qa.copy(t.ray).applyMatrix4(ad),!(this.boundingBox!==null&&Qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Qa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s0?this.bindMatrixInverse.copy(this.bindMatrix).invert():jt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;sd.fromBufferAttribute(s.attributes.skinIndex,t),rd.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(gr.copy(e),e.set(0,0,0,0)):(gr.set(...e,1),e.set(0,0,0)),gr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=rd.getComponent(r);if(o!==0){const a=sd.getComponent(r);od.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(O0.copy(gr).applyMatrix4(od),o)}}return e.isVector4&&(e.w=gr.w),e.applyMatrix4(this.bindMatrixInverse)}}class df extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ua extends sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cd=new Qt,B0=new Qt;class $c{constructor(t=[],e=[]){this.uuid=ys(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){jt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:B0;cd.multiplyMatrices(a,e[r]),cd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $c(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ua(e,t,t,Ln,Fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(jt("Skeleton: No bone found with UUID:",r),o=new df),this.bones.push(o),this.boneInverses.push(new Qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class ea extends _e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ns=new Qt,hd=new Qt,yo=[],dd=new Gi,z0=new Qt,xr=new be,vr=new bs;class gs extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ea(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,z0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),dd.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(dd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),vr.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),t.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),hd.multiplyMatrices(n,Ns),xr.matrixWorld=hd,xr.raycast(t,yo);for(let o=0,a=yo.length;o<a;o++){const l=yo[o];l.instanceId=r,l.object=this,e.push(l)}yo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ea(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ua(new Float32Array(s*this.count),s,this.count,ha,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tl=new D,H0=new D,V0=new re;class ss{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=tl.subVectors(n,e).cross(H0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||V0.getNormalMatrix(t),s=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new bs,G0=new wt(.5,.5),bo=new D;class Yc{constructor(t=new ss,e=new ss,n=new ss,s=new ss,r=new ss,o=new ss){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],x=r[8],S=r[9],m=r[10],f=r[11],_=r[12],E=r[13],w=r[14],k=r[15];if(s[0].setComponents(c-o,p-h,f-x,k-_).normalize(),s[1].setComponents(c+o,p+h,f+x,k+_).normalize(),s[2].setComponents(c+a,p+u,f+S,k+E).normalize(),s[3].setComponents(c-a,p-u,f-S,k-E).normalize(),n)s[4].setComponents(l,d,m,w).normalize(),s[5].setComponents(c-l,p-d,f-m,k-w).normalize();else if(s[4].setComponents(c-l,p-d,f-m,k-w).normalize(),e===ti)s[5].setComponents(c+l,p+d,f+m,k+w).normalize();else if(e===Wr)s[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);const e=G0.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uf extends sn{constructor(t=[],e=ps,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kr extends sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class er extends sn{constructor(t,e,n=ii,s,r,o,a=Ge,l=Ge,c,h=_i,u=1){if(h!==_i&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class W0 extends er{constructor(t,e=ii,n=ps,s,r,o=Ge,a=Ge,l,c=_i){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ff extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cn extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function x(S,m,f,_,E,w,k,v,A,g,b){const C=w/A,T=k/g,F=w/2,P=k/2,B=v/2,L=A+1,H=g+1;let U=0,J=0;const tt=new D;for(let ut=0;ut<H;ut++){const Mt=ut*T-P;for(let Lt=0;Lt<L;Lt++){const $t=Lt*C-F;tt[S]=$t*_,tt[m]=Mt*E,tt[f]=B,c.push(tt.x,tt.y,tt.z),tt[S]=0,tt[m]=0,tt[f]=v>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Lt/A),u.push(1-ut/g),U+=1}}for(let ut=0;ut<g;ut++)for(let Mt=0;Mt<A;Mt++){const Lt=d+Mt+L*ut,$t=d+Mt+L*(ut+1),xt=d+(Mt+1)+L*(ut+1),vt=d+(Mt+1)+L*ut;l.push(Lt,$t,vt),l.push($t,xt,vt),J+=6}a.addGroup(p,J,b),p+=J,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qc extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new wt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class lr extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let x=0;const S=[],m=n/2;let f=0;_(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2));function _(){const w=new D,k=new D;let v=0;const A=(e-t)/n;for(let g=0;g<=r;g++){const b=[],C=g/r,T=C*(e-t)+t;for(let F=0;F<=s;F++){const P=F/s,B=P*l+a,L=Math.sin(B),H=Math.cos(B);k.x=T*L,k.y=-C*n+m,k.z=T*H,u.push(k.x,k.y,k.z),w.set(L,A,H).normalize(),d.push(w.x,w.y,w.z),p.push(P,1-C),b.push(x++)}S.push(b)}for(let g=0;g<s;g++)for(let b=0;b<r;b++){const C=S[b][g],T=S[b+1][g],F=S[b+1][g+1],P=S[b][g+1];(t>0||b!==0)&&(h.push(C,T,P),v+=3),(e>0||b!==r-1)&&(h.push(T,F,P),v+=3)}c.addGroup(f,v,0),f+=v}function E(w){const k=x,v=new wt,A=new D;let g=0;const b=w===!0?t:e,C=w===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*C,0),d.push(0,C,0),p.push(.5,.5),x++;const T=x;for(let F=0;F<=s;F++){const B=F/s*l+a,L=Math.cos(B),H=Math.sin(B);A.x=b*H,A.y=m*C,A.z=b*L,u.push(A.x,A.y,A.z),d.push(0,C,0),v.x=L*.5+.5,v.y=H*.5*C+.5,p.push(v.x,v.y),x++}for(let F=0;F<s;F++){const P=k+F,B=T+F;w===!0?h.push(B,B+1,P):h.push(B+1,B,P),g+=3}c.addGroup(f,g,w===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fa extends lr{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new fa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new wt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],o=[],a=new D,l=new Qt;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(de(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(de(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class jc extends si{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class X0 extends jc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Kc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ud=new D,fd=new D,el=new Kc,nl=new Kc,il=new Kc;class pf extends si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(fd.subVectors(s[0],s[1]).add(s[0]),c=fd);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ud.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ud),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),p),S=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);S<1e-4&&(S=1),x<1e-4&&(x=S),m<1e-4&&(m=S),el.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,S,m),nl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,S,m),il.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,S,m)}else this.curveType==="catmullrom"&&(el.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),il.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(el.calc(l),nl.calc(l),il.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function $0(i,t){const e=1-i;return e*e*t}function Y0(i,t){return 2*(1-i)*i*t}function q0(i,t){return i*i*t}function Or(i,t,e,n){return $0(i,t)+Y0(i,e)+q0(i,n)}function j0(i,t){const e=1-i;return e*e*e*t}function K0(i,t){const e=1-i;return 3*e*e*i*t}function Z0(i,t){return 3*(1-i)*i*i*t}function J0(i,t){return i*i*i*t}function Br(i,t,e,n,s){return j0(i,t)+K0(i,e)+Z0(i,n)+J0(i,s)}class mf extends si{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(t,s.x,r.x,o.x,a.x),Br(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q0 extends si{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(t,s.x,r.x,o.x,a.x),Br(t,s.y,r.y,o.y,a.y),Br(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gf extends si{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tm extends si{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xf extends si{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Or(t,s.x,r.x,o.x),Or(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends si{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Or(t,s.x,r.x,o.x),Or(t,s.y,r.y,o.y),Or(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(pd(a,l.x,c.x,h.x,u.x),pd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new wt().fromArray(s))}return this}}var na=Object.freeze({__proto__:null,ArcCurve:X0,CatmullRomCurve3:pf,CubicBezierCurve:mf,CubicBezierCurve3:Q0,EllipseCurve:jc,LineCurve:gf,LineCurve3:tm,QuadraticBezierCurve:xf,QuadraticBezierCurve3:vf,SplineCurve:_f});class em extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new na[s.type]().fromJSON(s))}return this}}class md extends em{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gf(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new xf(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new mf(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _f(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new jc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Zc extends md{constructor(t){super(t),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new md().fromJSON(s))}return this}}function nm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=yf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=am(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){const p=i[d],x=i[d+1];p<a&&(a=p),x<l&&(l=x),p>h&&(h=p),x>u&&(u=x)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Xr(r,o,e,a,l,c,0),o}function yf(i,t,e,n,s){let r;if(s===vm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=gd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=gd(o/n|0,i[o],i[o+1],r);return r&&nr(r,r.next)&&(Yr(r),r=r.next),r}function xs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(nr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&um(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?sm(i,n,s,r):im(i)){t.push(l.i,i.i,c.i),Yr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=rm(xs(i),t),Xr(i,t,e,n,s,r,2)):o===2&&om(i,t,e,n,s,r):Xr(xs(i),t,e,n,s,r,1);break}}}function im(i){const t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=p&&Lr(s,a,r,l,o,c,x.x,x.y)&&Fe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function sm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,l,c),x=Math.min(h,u,d),S=Math.max(a,l,c),m=Math.max(h,u,d),f=_c(p,x,t,e,n),_=_c(S,m,t,e,n);let E=i.prevZ,w=i.nextZ;for(;E&&E.z>=f&&w&&w.z<=_;){if(E.x>=p&&E.x<=S&&E.y>=x&&E.y<=m&&E!==s&&E!==o&&Lr(a,h,l,u,c,d,E.x,E.y)&&Fe(E.prev,E,E.next)>=0||(E=E.prevZ,w.x>=p&&w.x<=S&&w.y>=x&&w.y<=m&&w!==s&&w!==o&&Lr(a,h,l,u,c,d,w.x,w.y)&&Fe(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=S&&E.y>=x&&E.y<=m&&E!==s&&E!==o&&Lr(a,h,l,u,c,d,E.x,E.y)&&Fe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;w&&w.z<=_;){if(w.x>=p&&w.x<=S&&w.y>=x&&w.y<=m&&w!==s&&w!==o&&Lr(a,h,l,u,c,d,w.x,w.y)&&Fe(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function rm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!nr(n,s)&&Mf(n,e,e.next,s)&&$r(n,s)&&$r(s,n)&&(t.push(n.i,e.i,s.i),Yr(e),Yr(e.next),e=i=s),e=e.next}while(e!==i);return xs(e)}function om(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mm(o,a)){let l=wf(o,a);o=xs(o,o.next),l=xs(l,l.next),Xr(o,t,e,n,s,r,0),Xr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function am(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=yf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pm(c))}s.sort(lm);for(let r=0;r<s.length;r++)e=cm(s[r],e);return e}function lm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cm(i,t){const e=hm(i,t);if(!e)return t;const n=wf(e,i);return xs(n,n.next),xs(e,e.next)}function hm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(nr(i,e))return e;do{if(nr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&bf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);$r(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&dm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function dm(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function um(i,t,e,n){let s=i;do s.z===0&&(s.z=_c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fm(s)}function fm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function _c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Lr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&bf(i,t,e,n,s,r,o,a)}function mm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gm(i,t)&&($r(i,t)&&$r(t,i)&&xm(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||nr(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function nr(i,t){return i.x===t.x&&i.y===t.y}function Mf(i,t,e,n){const s=wo(Fe(i,t,e)),r=wo(Fe(i,t,n)),o=wo(Fe(e,n,i)),a=wo(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&Mo(i,e,t)||r===0&&Mo(i,n,t)||o===0&&Mo(e,i,n)||a===0&&Mo(e,t,n))}function Mo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wo(i){return i>0?1:i<0?-1:0}function gm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $r(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function xm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wf(i,t){const e=yc(i.i,i.x,i.y),n=yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gd(i,t,e,n){const s=yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class _m{static triangulate(t,e,n=2){return nm(t,e,n)}}class Ws{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ws.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xd(t),vd(n,t);let o=t.length;e.forEach(xd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,vd(n,e[l]);const a=_m.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function xd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class pa extends Oe{constructor(t=new Zc([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:ym;let E,w=!1,k,v,A,g;if(f){E=f.getSpacedPoints(h),w=!0,d=!1;const st=f.isCatmullRomCurve3?f.closed:!1;k=f.computeFrenetFrames(h,st),v=new D,A=new D,g=new D}d||(m=0,p=0,x=0,S=0);const b=a.extractPoints(c);let C=b.shape;const T=b.holes;if(!Ws.isClockWise(C)){C=C.reverse();for(let st=0,lt=T.length;st<lt;st++){const at=T[st];Ws.isClockWise(at)&&(T[st]=at.reverse())}}function P(st){const at=10000000000000001e-36;let St=st[0];for(let yt=1;yt<=st.length;yt++){const Jt=yt%st.length,N=st[Jt],te=N.x-St.x,Bt=N.y-St.y,Zt=te*te+Bt*Bt,mt=Math.max(Math.abs(N.x),Math.abs(N.y),Math.abs(St.x),Math.abs(St.y)),ge=at*mt*mt;if(Zt<=ge){st.splice(Jt,1),yt--;continue}St=N}}P(C),T.forEach(P);const B=T.length,L=C;for(let st=0;st<B;st++){const lt=T[st];C=C.concat(lt)}function H(st,lt,at){return lt||pe("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(lt,at)}const U=C.length;function J(st,lt,at){let St,yt,Jt;const N=st.x-lt.x,te=st.y-lt.y,Bt=at.x-st.x,Zt=at.y-st.y,mt=N*N+te*te,ge=N*Zt-te*Bt;if(Math.abs(ge)>Number.EPSILON){const M=Math.sqrt(mt),y=Math.sqrt(Bt*Bt+Zt*Zt),O=lt.x-te/M,W=lt.y+N/M,Q=at.x-Zt/y,ot=at.y+Bt/y,ht=((Q-O)*Zt-(ot-W)*Bt)/(N*Zt-te*Bt);St=O+N*ht-st.x,yt=W+te*ht-st.y;const K=St*St+yt*yt;if(K<=2)return new wt(St,yt);Jt=Math.sqrt(K/2)}else{let M=!1;N>Number.EPSILON?Bt>Number.EPSILON&&(M=!0):N<-Number.EPSILON?Bt<-Number.EPSILON&&(M=!0):Math.sign(te)===Math.sign(Zt)&&(M=!0),M?(St=-te,yt=N,Jt=Math.sqrt(mt)):(St=N,yt=te,Jt=Math.sqrt(mt/2))}return new wt(St/Jt,yt/Jt)}const tt=[];for(let st=0,lt=L.length,at=lt-1,St=st+1;st<lt;st++,at++,St++)at===lt&&(at=0),St===lt&&(St=0),tt[st]=J(L[st],L[at],L[St]);const ut=[];let Mt,Lt=tt.concat();for(let st=0,lt=B;st<lt;st++){const at=T[st];Mt=[];for(let St=0,yt=at.length,Jt=yt-1,N=St+1;St<yt;St++,Jt++,N++)Jt===yt&&(Jt=0),N===yt&&(N=0),Mt[St]=J(at[St],at[Jt],at[N]);ut.push(Mt),Lt=Lt.concat(Mt)}let $t;if(m===0)$t=Ws.triangulateShape(L,T);else{const st=[],lt=[];for(let at=0;at<m;at++){const St=at/m,yt=p*Math.cos(St*Math.PI/2),Jt=x*Math.sin(St*Math.PI/2)+S;for(let N=0,te=L.length;N<te;N++){const Bt=H(L[N],tt[N],Jt);ft(Bt.x,Bt.y,-yt),St===0&&st.push(Bt)}for(let N=0,te=B;N<te;N++){const Bt=T[N];Mt=ut[N];const Zt=[];for(let mt=0,ge=Bt.length;mt<ge;mt++){const M=H(Bt[mt],Mt[mt],Jt);ft(M.x,M.y,-yt),St===0&&Zt.push(M)}St===0&&lt.push(Zt)}}$t=Ws.triangulateShape(st,lt)}const xt=$t.length,vt=x+S;for(let st=0;st<U;st++){const lt=d?H(C[st],Lt[st],vt):C[st];w?(A.copy(k.normals[0]).multiplyScalar(lt.x),v.copy(k.binormals[0]).multiplyScalar(lt.y),g.copy(E[0]).add(A).add(v),ft(g.x,g.y,g.z)):ft(lt.x,lt.y,0)}for(let st=1;st<=h;st++)for(let lt=0;lt<U;lt++){const at=d?H(C[lt],Lt[lt],vt):C[lt];w?(A.copy(k.normals[st]).multiplyScalar(at.x),v.copy(k.binormals[st]).multiplyScalar(at.y),g.copy(E[st]).add(A).add(v),ft(g.x,g.y,g.z)):ft(at.x,at.y,u/h*st)}for(let st=m-1;st>=0;st--){const lt=st/m,at=p*Math.cos(lt*Math.PI/2),St=x*Math.sin(lt*Math.PI/2)+S;for(let yt=0,Jt=L.length;yt<Jt;yt++){const N=H(L[yt],tt[yt],St);ft(N.x,N.y,u+at)}for(let yt=0,Jt=T.length;yt<Jt;yt++){const N=T[yt];Mt=ut[yt];for(let te=0,Bt=N.length;te<Bt;te++){const Zt=H(N[te],Mt[te],St);w?ft(Zt.x,Zt.y+E[h-1].y,E[h-1].x+at):ft(Zt.x,Zt.y,u+at)}}}X(),rt();function X(){const st=s.length/3;if(d){let lt=0,at=U*lt;for(let St=0;St<xt;St++){const yt=$t[St];Ct(yt[2]+at,yt[1]+at,yt[0]+at)}lt=h+m*2,at=U*lt;for(let St=0;St<xt;St++){const yt=$t[St];Ct(yt[0]+at,yt[1]+at,yt[2]+at)}}else{for(let lt=0;lt<xt;lt++){const at=$t[lt];Ct(at[2],at[1],at[0])}for(let lt=0;lt<xt;lt++){const at=$t[lt];Ct(at[0]+U*h,at[1]+U*h,at[2]+U*h)}}n.addGroup(st,s.length/3-st,0)}function rt(){const st=s.length/3;let lt=0;Z(L,lt),lt+=L.length;for(let at=0,St=T.length;at<St;at++){const yt=T[at];Z(yt,lt),lt+=yt.length}n.addGroup(st,s.length/3-st,1)}function Z(st,lt){let at=st.length;for(;--at>=0;){const St=at;let yt=at-1;yt<0&&(yt=st.length-1);for(let Jt=0,N=h+m*2;Jt<N;Jt++){const te=U*Jt,Bt=U*(Jt+1),Zt=lt+St+te,mt=lt+yt+te,ge=lt+yt+Bt,M=lt+St+Bt;Dt(Zt,mt,ge,M)}}}function ft(st,lt,at){l.push(st),l.push(lt),l.push(at)}function Ct(st,lt,at){pt(st),pt(lt),pt(at);const St=s.length/3,yt=_.generateTopUV(n,s,St-3,St-2,St-1);Ut(yt[0]),Ut(yt[1]),Ut(yt[2])}function Dt(st,lt,at,St){pt(st),pt(lt),pt(St),pt(lt),pt(at),pt(St);const yt=s.length/3,Jt=_.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);Ut(Jt[0]),Ut(Jt[1]),Ut(Jt[3]),Ut(Jt[1]),Ut(Jt[2]),Ut(Jt[3])}function pt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Ut(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new na[s.type]().fromJSON(s)),new pa(n,t.options)}}const ym={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new wt(r,o),new wt(a,l),new wt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],x=t[s*3+2],S=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new wt(o,1-l),new wt(c,1-u),new wt(d,1-x),new wt(S,1-f)]:[new wt(a,1-l),new wt(h,1-u),new wt(p,1-x),new wt(m,1-f)]}};function bm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wi extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],x=[],S=[],m=[];for(let f=0;f<h;f++){const _=f*d-o;for(let E=0;E<c;E++){const w=E*u-r;x.push(w,-_,0),S.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const E=_+c*f,w=_+c*(f+1),k=_+1+c*(f+1),v=_+1+c*f;p.push(E,w,v),p.push(w,k,v)}this.setIndex(p),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jc extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new D,x=new wt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let S=0;S<s;S++){const m=S*(n+1);for(let f=0;f<n;f++){const _=f+m,E=_,w=_+n+1,k=_+n+2,v=_+1;a.push(E,w,v),a.push(w,k,v)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class In extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],x=[],S=[],m=[];for(let f=0;f<=n;f++){const _=[],E=f/n;let w=0;f===0&&o===0?w=.5/e:f===n&&l===Math.PI&&(w=-.5/e);for(let k=0;k<=e;k++){const v=k/e;u.x=-t*Math.cos(s+v*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+v*r)*Math.sin(o+E*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),m.push(v+w,1-E),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const E=h[f][_+1],w=h[f][_],k=h[f+1][_],v=h[f+1][_+1];(f!==0||o>0)&&p.push(E,w,v),(f!==n-1||l<Math.PI)&&p.push(w,k,v)}this.setIndex(p),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zr extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new D,p=new D,x=new D;for(let S=0;S<=n;S++){const m=o+S/n*a;for(let f=0;f<=s;f++){const _=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(_),p.y=(t+e*Math.cos(m))*Math.sin(_),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),x.subVectors(p,d).normalize(),h.push(x.x,x.y,x.z),u.push(f/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const f=(s+1)*S+m-1,_=(s+1)*(S-1)+m-1,E=(s+1)*(S-1)+m,w=(s+1)*S+m;l.push(f,_,w),l.push(_,E,w)}this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qc extends Oe{constructor(t=new vf(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new wt;let h=new D;const u=[],d=[],p=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(p,2));function S(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),_(),f()}function m(E){h=t.getPointAt(E/e,h);const w=o.normals[E],k=o.binormals[E];for(let v=0;v<=s;v++){const A=v/s*Math.PI*2,g=Math.sin(A),b=-Math.cos(A);l.x=b*w.x+g*k.x,l.y=b*w.y+g*k.y,l.z=b*w.z+g*k.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let E=1;E<=e;E++)for(let w=1;w<=s;w++){const k=(s+1)*(E-1)+(w-1),v=(s+1)*E+(w-1),A=(s+1)*E+w,g=(s+1)*(E-1)+w;x.push(k,v,g),x.push(v,A,g)}}function _(){for(let E=0;E<=e;E++)for(let w=0;w<=s;w++)c.x=E/e,c.y=w/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qc(new na[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(_d(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_d(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function on(i){const t={};for(let e=0;e<i.length;e++){const n=ir(i[e]);for(const s in n)t[s]=n[s]}return t}function _d(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const wm={clone:ir,merge:on};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Am extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yi extends jr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ef extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Af extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Cm extends Af{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const sl=new Qt,yd=new D,bd=new D;class Rm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(yd),bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bd),e.updateMatrixWorld(),sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Wr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const So=new D,Eo=new Vi,Wn=new D;class Tf extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(So,Eo,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,Wn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(So,Eo,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new D,Md=new wt,wd=new wt;class mn extends Tf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Md,wd),e.subVectors(wd,Md)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ma extends Tf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pm extends Rm{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends Af{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Pm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Us=-90,Os=1;class Fm extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Us,Os,t,e);s.layers=this.layers,this.add(s);const r=new mn(Us,Os,t,e);r.layers=this.layers,this.add(r);const o=new mn(Us,Os,t,e);o.layers=this.layers,this.add(o);const a=new mn(Us,Os,t,e);a.layers=this.layers,this.add(a);const l=new mn(Us,Os,t,e);l.layers=this.layers,this.add(l);const c=new mn(Us,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Lm extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Sd=new Qt;class Im{constructor(t,e,n=0,s=1/0){this.ray=new Xc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):pe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sd),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(Ed),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,n,e);return n.sort(Ed),n}}function Ed(i,t){return i.distance-t.distance}function bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)bc(r[o],t,e,!0)}}const fh=class fh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};fh.prototype.isMatrix2=!0;let Ad=fh;function Td(i,t,e,n){const s=Dm(n);switch(e){case rf:return i*t;case ha:return i*t/s.components*s.byteLength;case Uc:return i*t/s.components*s.byteLength;case ms:return i*t*2/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case of:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case Bc:return i*t*4/s.components*s.byteLength;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(t,8)/4;case zl:case Vl:return Math.max(i,8)*Math.max(t,8)/2;case Wl:case Xl:case Yl:case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $l:case Ko:case jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hc:case dc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zo:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dm(i){switch(i){case bn:case tf:return{byteLength:1,components:1};case Vr:case ef:case vi:return{byteLength:2,components:1};case Dc:case Nc:return{byteLength:2,components:4};case ii:case Ic:case Fn:return{byteLength:4,components:1};case nf:case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){const x=u[d],S=u[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,u[d]=S)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){const S=u[p];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,Zm=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,og=`#define PI 3.141592653589793
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
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
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
}`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
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
#endif`,Dg=`uniform sampler2D dfgLUT;
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
}`,Ng=`
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
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
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mx=`float getShadowMask() {
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
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,Ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,Xx=`#define DISTANCE
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
}`,$x=`#define DISTANCE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,tv=`#define LAMBERT
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
}`,ev=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,ov=`#define PHONG
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
}`,av=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,cv=`#define TOON
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
}`,hv=`#define TOON
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
}`,dv=`uniform float size;
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
}`,uv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Um,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:Hm,alphatest_pars_fragment:Vm,aomap_fragment:Gm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:$m,begin_vertex:Ym,beginnormal_vertex:qm,bsdfs:jm,iridescence_fragment:Km,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:tg,clipping_planes_vertex:eg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:og,cube_uv_reflection_fragment:ag,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:hg,emissivemap_fragment:dg,emissivemap_pars_fragment:ug,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:xg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Rg,envmap_vertex:_g,fog_vertex:yg,fog_pars_vertex:bg,fog_fragment:Mg,fog_pars_fragment:wg,gradientmap_pars_fragment:Sg,lightmap_pars_fragment:Eg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Tg,lights_pars_begin:Cg,lights_toon_fragment:Pg,lights_toon_pars_fragment:kg,lights_phong_fragment:Fg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Dg,lights_fragment_begin:Ng,lights_fragment_maps:Ug,lights_fragment_end:Og,lightprobes_pars_fragment:Bg,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Vg,logdepthbuf_vertex:Gg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:$g,map_particle_pars_fragment:Yg,metalnessmap_fragment:qg,metalnessmap_pars_fragment:jg,morphinstance_vertex:Kg,morphcolor_vertex:Zg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:tx,normal_fragment_begin:ex,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:hx,opaque_fragment:dx,packing:ux,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:yx,shadowmap_vertex:bx,shadowmask_pars_fragment:Mx,skinbase_vertex:wx,skinning_pars_vertex:Sx,skinning_vertex:Ex,skinnormal_vertex:Ax,specularmap_fragment:Tx,specularmap_pars_fragment:Cx,tonemapping_fragment:Rx,tonemapping_pars_fragment:Px,transmission_fragment:kx,transmission_pars_fragment:Fx,uv_pars_fragment:Lx,uv_pars_vertex:Ix,uv_vertex:Dx,worldpos_vertex:Nx,background_vert:Ux,background_frag:Ox,backgroundCube_vert:Bx,backgroundCube_frag:zx,cube_vert:Hx,cube_frag:Vx,depth_vert:Gx,depth_frag:Wx,distance_vert:Xx,distance_frag:$x,equirect_vert:Yx,equirect_frag:qx,linedashed_vert:jx,linedashed_frag:Kx,meshbasic_vert:Zx,meshbasic_frag:Jx,meshlambert_vert:Qx,meshlambert_frag:tv,meshmatcap_vert:ev,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:ov,meshphysical_vert:av,meshphysical_frag:lv,meshtoon_vert:cv,meshtoon_frag:hv,points_vert:dv,points_frag:uv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},Rt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Qn={basic:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:on([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:on([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:on([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:on([Rt.points,Rt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:on([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:on([Rt.common,Rt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:on([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:on([Rt.sprite,Rt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:on([Rt.common,Rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:on([Rt.lights,Rt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Qn.physical={uniforms:on([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ao={r:0,b:0,g:0},xv=new Qt,Rf=new re;Rf.set(-1,0,0,0,1,0,0,0,1);function vv(i,t,e,n,s,r){const o=new ee(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function p(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){const w=_.backgroundBlurriness>0;E=t.get(E,w)}return E}function x(_){let E=!1;const w=p(_);w===null?m(o,a):w&&w.isColor&&(m(w,1),E=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?e.buffers.color.setClear(0,0,0,1,r):k==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(_,E){const w=p(E);w&&(w.isCubeTexture||w.mapping===ca)?(c===void 0&&(c=new be(new cn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ir(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(k,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(E.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rf),c.material.toneMapped=me.getTransfer(w.colorSpace)!==we,(h!==w||u!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new be(new Wi(2,2),new hn({name:"BackgroundMaterial",uniforms:ir(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=me.getTransfer(w.colorSpace)!==we,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,E){_.getRGB(Ao,Sf(i)),e.buffers.color.setClear(Ao.r,Ao.g,Ao.b,E,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:x,addToRenderList:S,dispose:f}}function _v(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(T,F,P,B,L){let H=!1;const U=u(T,B,P,F);r!==U&&(r=U,c(r.object)),H=p(T,B,P,L),H&&x(T,B,P,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,w(T,F,P,B),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,F,P,B){const L=B.wireframe===!0;let H=n[F.id];H===void 0&&(H={},n[F.id]=H);const U=T.isInstancedMesh===!0?T.id:0;let J=H[U];J===void 0&&(J={},H[U]=J);let tt=J[P.id];tt===void 0&&(tt={},J[P.id]=tt);let ut=tt[L];return ut===void 0&&(ut=d(l()),tt[L]=ut),ut}function d(T){const F=[],P=[],B=[];for(let L=0;L<e;L++)F[L]=0,P[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:P,attributeDivisors:B,object:T,attributes:{},index:null}}function p(T,F,P,B){const L=r.attributes,H=F.attributes;let U=0;const J=P.getAttributes();for(const tt in J)if(J[tt].location>=0){const Mt=L[tt];let Lt=H[tt];if(Lt===void 0&&(tt==="instanceMatrix"&&T.instanceMatrix&&(Lt=T.instanceMatrix),tt==="instanceColor"&&T.instanceColor&&(Lt=T.instanceColor)),Mt===void 0||Mt.attribute!==Lt||Lt&&Mt.data!==Lt.data)return!0;U++}return r.attributesNum!==U||r.index!==B}function x(T,F,P,B){const L={},H=F.attributes;let U=0;const J=P.getAttributes();for(const tt in J)if(J[tt].location>=0){let Mt=H[tt];Mt===void 0&&(tt==="instanceMatrix"&&T.instanceMatrix&&(Mt=T.instanceMatrix),tt==="instanceColor"&&T.instanceColor&&(Mt=T.instanceColor));const Lt={};Lt.attribute=Mt,Mt&&Mt.data&&(Lt.data=Mt.data),L[tt]=Lt,U++}r.attributes=L,r.attributesNum=U,r.index=B}function S(){const T=r.newAttributes;for(let F=0,P=T.length;F<P;F++)T[F]=0}function m(T){f(T,0)}function f(T,F){const P=r.newAttributes,B=r.enabledAttributes,L=r.attributeDivisors;P[T]=1,B[T]===0&&(i.enableVertexAttribArray(T),B[T]=1),L[T]!==F&&(i.vertexAttribDivisor(T,F),L[T]=F)}function _(){const T=r.newAttributes,F=r.enabledAttributes;for(let P=0,B=F.length;P<B;P++)F[P]!==T[P]&&(i.disableVertexAttribArray(P),F[P]=0)}function E(T,F,P,B,L,H,U){U===!0?i.vertexAttribIPointer(T,F,P,L,H):i.vertexAttribPointer(T,F,P,B,L,H)}function w(T,F,P,B){S();const L=B.attributes,H=P.getAttributes(),U=F.defaultAttributeValues;for(const J in H){const tt=H[J];if(tt.location>=0){let ut=L[J];if(ut===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(ut=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(ut=T.instanceColor)),ut!==void 0){const Mt=ut.normalized,Lt=ut.itemSize,$t=t.get(ut);if($t===void 0)continue;const xt=$t.buffer,vt=$t.type,X=$t.bytesPerElement,rt=vt===i.INT||vt===i.UNSIGNED_INT||ut.gpuType===Ic;if(ut.isInterleavedBufferAttribute){const Z=ut.data,ft=Z.stride,Ct=ut.offset;if(Z.isInstancedInterleavedBuffer){for(let Dt=0;Dt<tt.locationSize;Dt++)f(tt.location+Dt,Z.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Dt=0;Dt<tt.locationSize;Dt++)m(tt.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Dt=0;Dt<tt.locationSize;Dt++)E(tt.location+Dt,Lt/tt.locationSize,vt,Mt,ft*X,(Ct+Lt/tt.locationSize*Dt)*X,rt)}else{if(ut.isInstancedBufferAttribute){for(let Z=0;Z<tt.locationSize;Z++)f(tt.location+Z,ut.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Z=0;Z<tt.locationSize;Z++)m(tt.location+Z);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Z=0;Z<tt.locationSize;Z++)E(tt.location+Z,Lt/tt.locationSize,vt,Mt,Lt*X,Lt/tt.locationSize*Z*X,rt)}}else if(U!==void 0){const Mt=U[J];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(tt.location,Mt);break;case 3:i.vertexAttrib3fv(tt.location,Mt);break;case 4:i.vertexAttrib4fv(tt.location,Mt);break;default:i.vertexAttrib1fv(tt.location,Mt)}}}}_()}function k(){b();for(const T in n){const F=n[T];for(const P in F){const B=F[P];for(const L in B){const H=B[L];for(const U in H)h(H[U].object),delete H[U];delete B[L]}}delete n[T]}}function v(T){if(n[T.id]===void 0)return;const F=n[T.id];for(const P in F){const B=F[P];for(const L in B){const H=B[L];for(const U in H)h(H[U].object),delete H[U];delete B[L]}}delete n[T.id]}function A(T){for(const F in n){const P=n[F];for(const B in P){const L=P[B];if(L[T.id]===void 0)continue;const H=L[T.id];for(const U in H)h(H[U].object),delete H[U];delete L[T.id]}}}function g(T){for(const F in n){const P=n[F],B=T.isInstancedMesh===!0?T.id:0,L=P[B];if(L!==void 0){for(const H in L){const U=L[H];for(const J in U)h(U[J].object),delete U[J];delete L[H]}delete P[B],Object.keys(P).length===0&&delete n[F]}}}function b(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:v,releaseStatesOfObject:g,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function yv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function bv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const g=A===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!g)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:w,maxSamples:k,samples:v}}function Mv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ss,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const x=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,E=_*4;let w=f.clippingState||null;l.value=w,w=h(x,d,E,p);for(let k=0;k!==E;++k)w[k]=e[k];f.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,x){const S=u!==null?u.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const f=p+S*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,w=p;E!==S;++E,w+=4)o.copy(u[E]).applyMatrix4(_,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Ui=4,Cd=[.125,.215,.35,.446,.526,.582],as=20,wv=256,_r=new ma,Rd=new ee;let rl=null,ol=0,al=0,ll=!1;const Sv=new D;class Pd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Sv}=r;rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rl,ol,al),this._renderer.xr.enabled=ll,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:vi,format:Ln,colorSpace:Jo,depthBuffer:!1},s=kd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ev(r)),this._blurMaterial=Tv(r,t,e),this._ggxMaterial=Av(r,t,e)}return s}_compileMaterial(t){const e=new be(new Oe,t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,n,s,r){const l=new mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Rd),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new cn,new ei({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,f=!0):(m.color.copy(Rd),f=!0);for(let E=0;E<6;E++){const w=E%3;w===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):w===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const k=this._cubeSize;Bs(s,w*k,E>2?k:0,k,k),u.setRenderTarget(s),f&&u.render(S,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ps||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-Ui?n-x+Ui:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,Bs(r,m,f,3*S,2*S),s.setRenderTarget(r),s.render(a,_r),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Bs(t,m,f,3*S,2*S),s.setRenderTarget(t),s.render(a,_r)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&pe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*as-1),S=r/x,m=isFinite(r)?1+Math.floor(h*S):as;m>as&&jt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const f=[];let _=0;for(let A=0;A<as;++A){const g=A/S,b=Math.exp(-g*g/2);f.push(b),A===0?_+=b:A<m&&(_+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-n;const w=this._sizeLods[s],k=3*w*(s>E-Ui?s-E+Ui:0),v=4*(this._cubeSize-w);Bs(e,k,v,3*w,2*w),l.setRenderTarget(e),l.render(u,_r)}}function Ev(i){const t=[],e=[],n=[];let s=i;const r=i-Ui+1+Cd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ui?l=Cd[o-i+Ui-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,S=3,m=2,f=1,_=new Float32Array(S*x*p),E=new Float32Array(m*x*p),w=new Float32Array(f*x*p);for(let v=0;v<p;v++){const A=v%3*2/3-1,g=v>2?0:-1,b=[A,g,0,A+2/3,g,0,A+2/3,g+1,0,A,g,0,A+2/3,g+1,0,A,g+1,0];_.set(b,S*x*v),E.set(d,m*x*v);const C=[v,v,v,v,v,v];w.set(C,f*x*v)}const k=new Oe;k.setAttribute("position",new _e(_,S)),k.setAttribute("uv",new _e(E,m)),k.setAttribute("faceIndex",new _e(w,f)),n.push(new be(k,null)),s>Ui&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function kd(i,t,e){const n=new Vn(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Av(i,t,e){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Tv(i,t,e){const n=new Float32Array(as),s=new D(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Fd(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ld(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}class Pf extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:pi});r.uniforms.tEquirect.value=e;const o=new be(s,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=je),new Fm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Cv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Aa||p===Ta)if(t.has(d)){const x=t.get(d).texture;return a(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const S=new Pf(x.height);return S.fromEquirectangularTexture(i,d),t.set(d,S),d.addEventListener("dispose",c),a(S.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,x=p===Aa||p===Ta,S=p===ps||p===tr;if(x||S){let m=e.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Pd(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return x&&_&&_.height>0||S&&_&&l(_)?(n===null&&(n=new Pd(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===Aa?d.mapping=ps:p===Ta&&(d.mapping=tr),d}function l(d){let p=0;const x=6;for(let S=0;S<x;S++)d[S]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Rv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xc("WebGLRenderer: "+n+" extension not supported."),s}}}function Pv(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,x=u.attributes.position;let S=0;if(x===void 0)return;if(p!==null){const _=p.array;S=p.version;for(let E=0,w=_.length;E<w;E+=3){const k=_[E+0],v=_[E+1],A=_[E+2];d.push(k,v,v,A,A,k)}}else{const _=x.array;S=x.version;for(let E=0,w=_.length/3-1;E<w;E+=3){const k=E+0,v=E+1,A=E+2;d.push(k,v,v,A,A,k)}}const m=new(x.count>=65535?hf:Wc)(d,1);m.version=S;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kv(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*o,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let S=0;for(let m=0;m<p;m++)S+=d[m];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Fv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:pe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lv(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var p=C;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let w=0;x===!0&&(w=1),S===!0&&(w=2),m===!0&&(w=3);let k=a.attributes.position.count*w,v=1;k>t.maxTextureSize&&(v=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const A=new Float32Array(k*v*4*u),g=new lf(A,k,v,u);g.type=Fn,g.needsUpdate=!0;const b=w*4;for(let T=0;T<u;T++){const F=f[T],P=_[T],B=E[T],L=k*v*4*T;for(let H=0;H<F.count;H++){const U=H*b;x===!0&&(s.fromBufferAttribute(F,H),A[L+U+0]=s.x,A[L+U+1]=s.y,A[L+U+2]=s.z,A[L+U+3]=0),S===!0&&(s.fromBufferAttribute(P,H),A[L+U+4]=s.x,A[L+U+5]=s.y,A[L+U+6]=s.z,A[L+U+7]=0),m===!0&&(s.fromBufferAttribute(B,H),A[L+U+8]=s.x,A[L+U+9]=s.y,A[L+U+10]=s.z,A[L+U+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:g,size:new wt(k,v)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Iv(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Dv={[$u]:"LINEAR_TONE_MAPPING",[Yu]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[ju]:"ACES_FILMIC_TONE_MAPPING",[Zu]:"AGX_TONE_MAPPING",[Ju]:"NEUTRAL_TONE_MAPPING",[Ku]:"CUSTOM_TONE_MAPPING"};function Nv(i,t,e,n,s){const r=new Vn(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new er(t,e):void 0}),o=new Vn(t,e,{type:vi,depthBuffer:!1,stencilBuffer:!1}),a=new Oe;a.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ye([0,2,0,0,2,0],2));const l=new Am({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new be(a,l),h=new ma(-1,1,1,-1,0,1);let u=null,d=null,p=!1,x,S=null,m=[],f=!1;this.setSize=function(_,E){r.setSize(_,E),o.setSize(_,E);for(let w=0;w<m.length;w++){const k=m[w];k.setSize&&k.setSize(_,E)}},this.setEffects=function(_){m=_,f=m.length>0&&m[0].isRenderPass===!0;const E=r.width,w=r.height;for(let k=0;k<m.length;k++){const v=m[k];v.setSize&&v.setSize(E,w)}},this.begin=function(_,E){if(p||_.toneMapping===Hn&&m.length===0)return!1;if(S=E,E!==null){const w=E.width,k=E.height;(r.width!==w||r.height!==k)&&this.setSize(w,k)}return f===!1&&_.setRenderTarget(r),x=_.toneMapping,_.toneMapping=Hn,!0},this.hasRenderPass=function(){return f},this.end=function(_,E){_.toneMapping=x,p=!0;let w=r,k=o;for(let v=0;v<m.length;v++){const A=m[v];if(A.enabled!==!1&&(A.render(_,k,w,E),A.needsSwap!==!1)){const g=w;w=k,k=g}}if(u!==_.outputColorSpace||d!==_.toneMapping){u=_.outputColorSpace,d=_.toneMapping,l.defines={},me.getTransfer(u)===we&&(l.defines.SRGB_TRANSFER="");const v=Dv[d];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(S),_.render(c,h),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const kf=new sn,Mc=new er(1,1),Ff=new lf,Lf=new E0,If=new uf,Id=[],Dd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Od=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xa(i,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Uv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function Bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Hv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Od.set(n),i.uniformMatrix2fv(this.addr,!1,Od),He(e,n)}}function Vv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),He(e,n)}}function Gv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Nd.set(n),i.uniformMatrix4fv(this.addr,!1,Nd),He(e,n)}}function Wv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function qv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function Zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function Jv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=e.isReversedDepthBuffer()?Hc:zc,r=Mc):r=kf,e.setTexture2D(t||r,s)}function Qv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lf,s)}function t_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||If,s)}function e_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ff,s)}function n_(i){switch(i){case 5126:return Uv;case 35664:return Ov;case 35665:return Bv;case 35666:return zv;case 35674:return Hv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return $v;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return jv;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}function i_(i,t){i.uniform1fv(this.addr,t)}function s_(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function r_(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function o_(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function a_(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l_(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function c_(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h_(i,t){i.uniform1iv(this.addr,t)}function d_(i,t){i.uniform2iv(this.addr,t)}function u_(i,t){i.uniform3iv(this.addr,t)}function f_(i,t){i.uniform4iv(this.addr,t)}function p_(i,t){i.uniform1uiv(this.addr,t)}function m_(i,t){i.uniform2uiv(this.addr,t)}function g_(i,t){i.uniform3uiv(this.addr,t)}function x_(i,t){i.uniform4uiv(this.addr,t)}function v_(i,t,e){const n=this.cache,s=t.length,r=xa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Mc:o=kf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function __(i,t,e){const n=this.cache,s=t.length,r=xa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lf,r[o])}function y_(i,t,e){const n=this.cache,s=t.length,r=xa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||If,r[o])}function b_(i,t,e){const n=this.cache,s=t.length,r=xa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ff,r[o])}function M_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return d_;case 35668:case 35672:return u_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return b_}}class w_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n_(e.type)}}class S_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M_(e.type)}}class E_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Bd(i,t){i.seq.push(t),i.map[t.id]=t}function A_(i,t,e){const n=i.name,s=n.length;for(cl.lastIndex=0;;){const r=cl.exec(n),o=cl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bd(e,c===void 0?new w_(a,i,t):new S_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new E_(a),Bd(e,u)),e=u}}}class Yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);A_(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function zd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const T_=37297;let C_=0;function R_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Hd=new re;function P_(i){me._getMatrix(Hd,me.workingColorSpace,i);const t=`mat3( ${Hd.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Qo:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+R_(i.getShaderSource(t),a)}else return r}function k_(i,t){const e=P_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const F_={[$u]:"Linear",[Yu]:"Reinhard",[qu]:"Cineon",[ju]:"ACESFilmic",[Zu]:"AgX",[Ju]:"Neutral",[Ku]:"Custom"};function L_(i,t){const e=F_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const To=new D;function I_(){me.getLuminanceCoefficients(To);const i=To.x.toFixed(4),t=To.y.toFixed(4),e=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function N_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ir(i){return i!==""}function Gd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(O_,z_)}const B_=new Map;function z_(i,t){let e=ce[t];if(e===void 0){const n=B_.get(t);if(n!==void 0)e=ce[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(i){return i.replace(H_,V_)}function V_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $d(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const G_={[Vo]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function W_(i){return G_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const X_={[ps]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function $_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":X_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Y_={[tr]:"ENVMAP_MODE_REFRACTION"};function q_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Y_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j_={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[n0]:"ENVMAP_BLENDING_MIX",[i0]:"ENVMAP_BLENDING_ADD"};function K_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":j_[i.combine]||"ENVMAP_BLENDING_NONE"}function Z_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function J_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=W_(e),c=$_(e),h=q_(e),u=K_(e),d=Z_(e),p=D_(e),x=N_(r),S=s.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ir).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ir).join(`
`),f.length>0&&(f+=`
`)):(m=[$d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),f=[$d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Hn?L_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,k_("linearToOutputTexel",e.outputColorSpace),I_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=wc(o),o=Gd(o,e),o=Wd(o,e),a=wc(a),a=Gd(a,e),a=Wd(a,e),o=Xd(o),a=Xd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=_+m+o,w=_+f+a,k=zd(s,s.VERTEX_SHADER,E),v=zd(s,s.FRAGMENT_SHADER,w);s.attachShader(S,k),s.attachShader(S,v),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function A(T){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(S)||"",P=s.getShaderInfoLog(k)||"",B=s.getShaderInfoLog(v)||"",L=F.trim(),H=P.trim(),U=B.trim();let J=!0,tt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,k,v);else{const ut=Vd(s,k,"vertex"),Mt=Vd(s,v,"fragment");pe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+ut+`
`+Mt)}else L!==""?jt("WebGLProgram: Program Info Log:",L):(H===""||U==="")&&(tt=!1);tt&&(T.diagnostics={runnable:J,programLog:L,vertexShader:{log:H,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(k),s.deleteShader(v),g=new Yo(s,S),b=U_(s,S)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(S,T_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C_++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=k,this.fragmentShader=v,this}let Q_=0;class ty{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ey(t),e.set(t,n)),n}}class ey{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}}function ny(i){return i===ms||i===Ko||i===Zo}function iy(i,t,e,n,s,r){const o=new Gc,a=new ty,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,b,C,T,F,P){const B=T.fog,L=F.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?T.environment:null,U=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,J=t.get(g.envMap||H,U),tt=J&&J.mapping===ca?J.image.height:null,ut=p[g.type];g.precision!==null&&(d=n.getMaxPrecision(g.precision),d!==g.precision&&jt("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const Mt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Lt=Mt!==void 0?Mt.length:0;let $t=0;L.morphAttributes.position!==void 0&&($t=1),L.morphAttributes.normal!==void 0&&($t=2),L.morphAttributes.color!==void 0&&($t=3);let xt,vt,X,rt;if(ut){const ie=Qn[ut];xt=ie.vertexShader,vt=ie.fragmentShader}else xt=g.vertexShader,vt=g.fragmentShader,a.update(g),X=a.getVertexShaderID(g),rt=a.getFragmentShaderID(g);const Z=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Ct=F.isInstancedMesh===!0,Dt=F.isBatchedMesh===!0,pt=!!g.map,Ut=!!g.matcap,st=!!J,lt=!!g.aoMap,at=!!g.lightMap,St=!!g.bumpMap,yt=!!g.normalMap,Jt=!!g.displacementMap,N=!!g.emissiveMap,te=!!g.metalnessMap,Bt=!!g.roughnessMap,Zt=g.anisotropy>0,mt=g.clearcoat>0,ge=g.dispersion>0,M=g.iridescence>0,y=g.sheen>0,O=g.transmission>0,W=Zt&&!!g.anisotropyMap,Q=mt&&!!g.clearcoatMap,ot=mt&&!!g.clearcoatNormalMap,ht=mt&&!!g.clearcoatRoughnessMap,K=M&&!!g.iridescenceMap,it=M&&!!g.iridescenceThicknessMap,Et=y&&!!g.sheenColorMap,j=y&&!!g.sheenRoughnessMap,et=!!g.specularMap,dt=!!g.specularColorMap,Ht=!!g.specularIntensityMap,ne=O&&!!g.transmissionMap,ue=O&&!!g.thicknessMap,z=!!g.gradientMap,_t=!!g.alphaMap,nt=g.alphaTest>0,Ft=!!g.alphaHash,bt=!!g.extensions;let ct=Hn;g.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ct=i.toneMapping);const Vt={shaderID:ut,shaderType:g.type,shaderName:g.name,vertexShader:xt,fragmentShader:vt,defines:g.defines,customVertexShaderID:X,customFragmentShaderID:rt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:Dt,batchingColor:Dt&&F._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&F.instanceColor!==null,instancingMorph:Ct&&F.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:pt,matcap:Ut,envMap:st,envMapMode:st&&J.mapping,envMapCubeUVHeight:tt,aoMap:lt,lightMap:at,bumpMap:St,normalMap:yt,displacementMap:Jt,emissiveMap:N,normalMapObjectSpace:yt&&g.normalMapType===l0,normalMapTangentSpace:yt&&g.normalMapType===gc,packedNormalMap:yt&&g.normalMapType===gc&&ny(g.normalMap.format),metalnessMap:te,roughnessMap:Bt,anisotropy:Zt,anisotropyMap:W,clearcoat:mt,clearcoatMap:Q,clearcoatNormalMap:ot,clearcoatRoughnessMap:ht,dispersion:ge,iridescence:M,iridescenceMap:K,iridescenceThicknessMap:it,sheen:y,sheenColorMap:Et,sheenRoughnessMap:j,specularMap:et,specularColorMap:dt,specularIntensityMap:Ht,transmission:O,transmissionMap:ne,thicknessMap:ue,gradientMap:z,opaque:g.transparent===!1&&g.blending===$s&&g.alphaToCoverage===!1,alphaMap:_t,alphaTest:nt,alphaHash:Ft,combine:g.combine,mapUv:pt&&x(g.map.channel),aoMapUv:lt&&x(g.aoMap.channel),lightMapUv:at&&x(g.lightMap.channel),bumpMapUv:St&&x(g.bumpMap.channel),normalMapUv:yt&&x(g.normalMap.channel),displacementMapUv:Jt&&x(g.displacementMap.channel),emissiveMapUv:N&&x(g.emissiveMap.channel),metalnessMapUv:te&&x(g.metalnessMap.channel),roughnessMapUv:Bt&&x(g.roughnessMap.channel),anisotropyMapUv:W&&x(g.anisotropyMap.channel),clearcoatMapUv:Q&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:j&&x(g.sheenRoughnessMap.channel),specularMapUv:et&&x(g.specularMap.channel),specularColorMapUv:dt&&x(g.specularColorMap.channel),specularIntensityMapUv:Ht&&x(g.specularIntensityMap.channel),transmissionMapUv:ne&&x(g.transmissionMap.channel),thicknessMapUv:ue&&x(g.thicknessMap.channel),alphaMapUv:_t&&x(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(yt||Zt),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(pt||_t),fog:!!B,useFog:g.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&yt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ft,skinning:F.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:$t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:pt&&g.map.isVideoTexture===!0&&me.getTransfer(g.map.colorSpace)===we,decodeVideoTextureEmissive:N&&g.emissiveMap.isVideoTexture===!0&&me.getTransfer(g.emissiveMap.colorSpace)===we,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Bn,flipSided:g.side===Ke,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:bt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&g.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function m(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const C in g.defines)b.push(C),b.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(f(b,g),_(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function f(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function _(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),g.push(o.mask)}function E(g){const b=p[g.type];let C;if(b){const T=Qn[b];C=wm.clone(T.uniforms)}else C=g.uniforms;return C}function w(g,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new J_(i,b,g,s),c.push(C),h.set(b,C)),C}function k(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function v(g){a.remove(g)}function A(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:w,releaseProgram:k,releaseShaderCache:v,programs:c,dispose:A}}function sy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ry(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Yd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,x,S,m,f){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:p,material:x,materialVariant:o(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:f},i[t]=_):(_.id=d.id,_.object=d,_.geometry=p,_.material=x,_.materialVariant=o(d),_.groupOrder=S,_.renderOrder=d.renderOrder,_.z=m,_.group=f),t++,_}function l(d,p,x,S,m,f){const _=a(d,p,x,S,m,f);x.transmission>0?n.push(_):x.transparent===!0?s.push(_):e.push(_)}function c(d,p,x,S,m,f){const _=a(d,p,x,S,m,f);x.transmission>0?n.unshift(_):x.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,p){e.length>1&&e.sort(d||ry),n.length>1&&n.sort(p||Yd),s.length>1&&s.sort(p||Yd)}function u(){for(let d=t,p=i.length;d<p;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function oy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new qd,i.set(n,[o])):s>=r.length?(o=new qd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ay(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ee};break;case"SpotLight":e={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function ly(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cy=0;function hy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dy(i){const t=new ay,e=ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new Qt,o=new Qt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,x=0,S=0,m=0,f=0,_=0,E=0,w=0,k=0,v=0,A=0;c.sort(hy);for(let b=0,C=c.length;b<C;b++){const T=c[b],F=T.color,P=T.intensity,B=T.distance;let L=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ms?L=T.shadow.map.texture:L=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=F.r*P,u+=F.g*P,d+=F.b*P;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],P);A++}else if(T.isDirectionalLight){const H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const U=T.shadow,J=e.get(T);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=L,n.directionalShadowMatrix[p]=T.shadow.matrix,_++}n.directional[p]=H,p++}else if(T.isSpotLight){const H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(F).multiplyScalar(P),H.distance=B,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[S]=H;const U=T.shadow;if(T.map&&(n.spotLightMap[k]=T.map,k++,U.updateMatrices(T),T.castShadow&&v++),n.spotLightMatrix[S]=U.matrix,T.castShadow){const J=e.get(T);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,n.spotShadow[S]=J,n.spotShadowMap[S]=L,w++}S++}else if(T.isRectAreaLight){const H=t.get(T);H.color.copy(F).multiplyScalar(P),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=H,m++}else if(T.isPointLight){const H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const U=T.shadow,J=e.get(T);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,J.shadowCameraNear=U.camera.near,J.shadowCameraFar=U.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=L,n.pointShadowMatrix[x]=T.shadow.matrix,E++}n.point[x]=H,x++}else if(T.isHemisphereLight){const H=t.get(T);H.skyColor.copy(T.color).multiplyScalar(P),H.groundColor.copy(T.groundColor).multiplyScalar(P),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const g=n.hash;(g.directionalLength!==p||g.pointLength!==x||g.spotLength!==S||g.rectAreaLength!==m||g.hemiLength!==f||g.numDirectionalShadows!==_||g.numPointShadows!==E||g.numSpotShadows!==w||g.numSpotMaps!==k||g.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=w+k-v,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=A,g.directionalLength=p,g.pointLength=x,g.spotLength=S,g.rectAreaLength=m,g.hemiLength=f,g.numDirectionalShadows=_,g.numPointShadows=E,g.numSpotShadows=w,g.numSpotMaps=k,g.numLightProbes=A,n.version=cy++)}function l(c,h){let u=0,d=0,p=0,x=0,S=0;const m=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const E=c[f];if(E.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(E.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const w=n.hemi[S];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:n}}function jd(i){const t=new dy(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function uy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new jd(i),t.set(s,[a])):r>=o.length?(a=new jd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
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
}`,my=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],gy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Kd=new Qt,yr=new D,hl=new D;function xy(i,t,e){let n=new Yc;const s=new wt,r=new wt,o=new Se,a=new Ef,l=new Tm,c={},h=e.maxTextureSize,u={[zi]:Ke,[Ke]:zi,[Bn]:Bn},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:fy,fragmentShader:py}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Oe;x.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new be(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let f=this.type;this.render=function(v,A,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Wu&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vo);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),F=i.state;F.setBlending(pi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const P=f!==this.type;P&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(L=>L.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,L=v.length;B<L;B++){const H=v[B],U=H.shadow;if(U===void 0){jt("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const J=U.getFrameExtents();s.multiply(J),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,U.mapSize.y=r.y));const tt=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=tt,U.map===null||P===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Fr){if(H.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Vn(s.x,s.y,{format:ms,type:vi,minFilter:je,magFilter:je,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new er(s.x,s.y,Fn),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=_i,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ge,U.map.depthTexture.magFilter=Ge}else H.isPointLight?(U.map=new Pf(s.x),U.map.depthTexture=new W0(s.x,ii)):(U.map=new Vn(s.x,s.y),U.map.depthTexture=new er(s.x,s.y,ii)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=_i,this.type===Vo?(U.map.depthTexture.compareFunction=tt?Hc:zc,U.map.depthTexture.minFilter=je,U.map.depthTexture.magFilter=je):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ge,U.map.depthTexture.magFilter=Ge);U.camera.updateProjectionMatrix()}const ut=U.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<ut;Mt++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(U.map),i.clear());const Lt=U.getViewport(Mt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),F.viewport(o)}if(H.isPointLight){const Lt=U.camera,$t=U.matrix,xt=H.distance||Lt.far;xt!==Lt.far&&(Lt.far=xt,Lt.updateProjectionMatrix()),yr.setFromMatrixPosition(H.matrixWorld),Lt.position.copy(yr),hl.copy(Lt.position),hl.add(my[Mt]),Lt.up.copy(gy[Mt]),Lt.lookAt(hl),Lt.updateMatrixWorld(),$t.makeTranslation(-yr.x,-yr.y,-yr.z),Kd.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Kd,Lt.coordinateSystem,Lt.reversedDepth)}else U.updateMatrices(H);n=U.getFrustum(),w(A,g,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Fr&&_(U,g),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,C,T)};function _(v,A){const g=t.update(S);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Vn(s.x,s.y,{format:ms,type:vi})),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(A,null,g,d,S,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(A,null,g,p,S,null)}function E(v,A,g,b){let C=null;const T=g.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(T!==void 0)C=T;else if(C=g.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=C.uuid,P=A.uuid;let B=c[F];B===void 0&&(B={},c[F]=B);let L=B[P];L===void 0&&(L=C.clone(),B[P]=L,A.addEventListener("dispose",k)),C=L}if(C.visible=A.visible,C.wireframe=A.wireframe,b===Fr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=g}return C}function w(v,A,g,b,C){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===Fr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,v.matrixWorld);const P=t.update(v),B=v.material;if(Array.isArray(B)){const L=P.groups;for(let H=0,U=L.length;H<U;H++){const J=L[H],tt=B[J.materialIndex];if(tt&&tt.visible){const ut=E(v,tt,b,C);v.onBeforeShadow(i,v,A,g,P,ut,J),i.renderBufferDirect(g,null,P,ut,v,J),v.onAfterShadow(i,v,A,g,P,ut,J)}}}else if(B.visible){const L=E(v,B,b,C);v.onBeforeShadow(i,v,A,g,P,L,null),i.renderBufferDirect(g,null,P,L,v,null),v.onAfterShadow(i,v,A,g,P,L,null)}}const F=v.children;for(let P=0,B=F.length;P<B;P++)w(F[P],A,g,b,C)}function k(v){v.target.removeEventListener("dispose",k);for(const g in c){const b=c[g],C=v.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function vy(i,t){function e(){let z=!1;const _t=new Se;let nt=null;const Ft=new Se(0,0,0,0);return{setMask:function(bt){nt!==bt&&!z&&(i.colorMask(bt,bt,bt,bt),nt=bt)},setLocked:function(bt){z=bt},setClear:function(bt,ct,Vt,ie,Wt){Wt===!0&&(bt*=ie,ct*=ie,Vt*=ie),_t.set(bt,ct,Vt,ie),Ft.equals(_t)===!1&&(i.clearColor(bt,ct,Vt,ie),Ft.copy(_t))},reset:function(){z=!1,nt=null,Ft.set(-1,0,0,0)}}}function n(){let z=!1,_t=!1,nt=null,Ft=null,bt=null;return{setReversed:function(ct){if(_t!==ct){const Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),_t=ct;const ie=bt;bt=null,this.setClear(ie)}},getReversed:function(){return _t},setTest:function(ct){ct?Z(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(ct){nt!==ct&&!z&&(i.depthMask(ct),nt=ct)},setFunc:function(ct){if(_t&&(ct=v0[ct]),Ft!==ct){switch(ct){case kl:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case Il:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=ct}},setLocked:function(ct){z=ct},setClear:function(ct){bt!==ct&&(bt=ct,_t&&(ct=1-ct),i.clearDepth(ct))},reset:function(){z=!1,nt=null,Ft=null,bt=null,_t=!1}}}function s(){let z=!1,_t=null,nt=null,Ft=null,bt=null,ct=null,Vt=null,ie=null,Wt=null;return{setTest:function(qt){z||(qt?Z(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(qt){_t!==qt&&!z&&(i.stencilMask(qt),_t=qt)},setFunc:function(qt,dn,wn){(nt!==qt||Ft!==dn||bt!==wn)&&(i.stencilFunc(qt,dn,wn),nt=qt,Ft=dn,bt=wn)},setOp:function(qt,dn,wn){(ct!==qt||Vt!==dn||ie!==wn)&&(i.stencilOp(qt,dn,wn),ct=qt,Vt=dn,ie=wn)},setLocked:function(qt){z=qt},setClear:function(qt){Wt!==qt&&(i.clearStencil(qt),Wt=qt)},reset:function(){z=!1,_t=null,nt=null,Ft=null,bt=null,ct=null,Vt=null,ie=null,Wt=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d={},p=new WeakMap,x=[],S=null,m=!1,f=null,_=null,E=null,w=null,k=null,v=null,A=null,g=new ee(0,0,0),b=0,C=!1,T=null,F=null,P=null,B=null,L=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,J=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(tt)[1]),U=J>=1):tt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),U=J>=2);let ut=null,Mt={};const Lt=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),xt=new Se().fromArray(Lt),vt=new Se().fromArray($t);function X(z,_t,nt,Ft){const bt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(z,ct),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<nt;Vt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(_t+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return ct}const rt={};rt[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Qs),St(!1),yt(Ih),Z(i.CULL_FACE),lt(pi);function Z(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ft(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ct(z,_t){return d[z]!==_t?(i.bindFramebuffer(z,_t),d[z]=_t,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=_t),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Dt(z,_t){let nt=x,Ft=!1;if(z){nt=p.get(_t),nt===void 0&&(nt=[],p.set(_t,nt));const bt=z.textures;if(nt.length!==bt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Vt=bt.length;ct<Vt;ct++)nt[ct]=i.COLOR_ATTACHMENT0+ct;nt.length=bt.length,Ft=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(nt)}function pt(z){return S!==z?(i.useProgram(z),S=z,!0):!1}const Ut={[os]:i.FUNC_ADD,[Bp]:i.FUNC_SUBTRACT,[zp]:i.FUNC_REVERSE_SUBTRACT};Ut[Hp]=i.MIN,Ut[Vp]=i.MAX;const st={[Gp]:i.ZERO,[Wp]:i.ONE,[Xp]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[Zp]:i.SRC_ALPHA_SATURATE,[jp]:i.DST_COLOR,[Yp]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[Pl]:i.ONE_MINUS_SRC_ALPHA,[Kp]:i.ONE_MINUS_DST_COLOR,[qp]:i.ONE_MINUS_DST_ALPHA,[Jp]:i.CONSTANT_COLOR,[Qp]:i.ONE_MINUS_CONSTANT_COLOR,[t0]:i.CONSTANT_ALPHA,[e0]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(z,_t,nt,Ft,bt,ct,Vt,ie,Wt,qt){if(z===pi){m===!0&&(ft(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),z!==Op){if(z!==f||qt!==C){if((_!==os||k!==os)&&(i.blendEquation(i.FUNC_ADD),_=os,k=os),qt)switch(z){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dh:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pe("WebGLState: Invalid blending: ",z);break}else switch(z){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nh:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",z);break}E=null,w=null,v=null,A=null,g.set(0,0,0),b=0,f=z,C=qt}return}bt=bt||_t,ct=ct||nt,Vt=Vt||Ft,(_t!==_||bt!==k)&&(i.blendEquationSeparate(Ut[_t],Ut[bt]),_=_t,k=bt),(nt!==E||Ft!==w||ct!==v||Vt!==A)&&(i.blendFuncSeparate(st[nt],st[Ft],st[ct],st[Vt]),E=nt,w=Ft,v=ct,A=Vt),(ie.equals(g)===!1||Wt!==b)&&(i.blendColor(ie.r,ie.g,ie.b,Wt),g.copy(ie),b=Wt),f=z,C=!1}function at(z,_t){z.side===Bn?ft(i.CULL_FACE):Z(i.CULL_FACE);let nt=z.side===Ke;_t&&(nt=!nt),St(nt),z.blending===$s&&z.transparent===!1?lt(pi):lt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ft=z.stencilWrite;a.setTest(Ft),Ft&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),N(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(z){T!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),T=z)}function yt(z){z!==Np?(Z(i.CULL_FACE),z!==F&&(z===Ih?i.cullFace(i.BACK):z===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),F=z}function Jt(z){z!==P&&(U&&i.lineWidth(z),P=z)}function N(z,_t,nt){z?(Z(i.POLYGON_OFFSET_FILL),(B!==_t||L!==nt)&&(B=_t,L=nt,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,nt))):ft(i.POLYGON_OFFSET_FILL)}function te(z){z?Z(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function Bt(z){z===void 0&&(z=i.TEXTURE0+H-1),ut!==z&&(i.activeTexture(z),ut=z)}function Zt(z,_t,nt){nt===void 0&&(ut===null?nt=i.TEXTURE0+H-1:nt=ut);let Ft=Mt[nt];Ft===void 0&&(Ft={type:void 0,texture:void 0},Mt[nt]=Ft),(Ft.type!==z||Ft.texture!==_t)&&(ut!==nt&&(i.activeTexture(nt),ut=nt),i.bindTexture(z,_t||rt[z]),Ft.type=z,Ft.texture=_t)}function mt(){const z=Mt[ut];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function y(){try{i.texSubImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function O(){try{i.texSubImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function ot(){try{i.texStorage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function ht(){try{i.texStorage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function K(){try{i.texImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function it(){try{i.texImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function Et(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function j(z,_t){u[z]!==_t&&(i.pixelStorei(z,_t),u[z]=_t)}function et(z){xt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),xt.copy(z))}function dt(z){vt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),vt.copy(z))}function Ht(z,_t){let nt=c.get(_t);nt===void 0&&(nt=new WeakMap,c.set(_t,nt));let Ft=nt.get(z);Ft===void 0&&(Ft=i.getUniformBlockIndex(_t,z.name),nt.set(z,Ft))}function ne(z,_t){const Ft=c.get(_t).get(z);l.get(_t)!==Ft&&(i.uniformBlockBinding(_t,Ft,z.__bindingPointIndex),l.set(_t,Ft))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ut=null,Mt={},d={},p=new WeakMap,x=[],S=null,m=!1,f=null,_=null,E=null,w=null,k=null,v=null,A=null,g=new ee(0,0,0),b=0,C=!1,T=null,F=null,P=null,B=null,L=null,xt.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ft,bindFramebuffer:Ct,drawBuffers:Dt,useProgram:pt,setBlending:lt,setMaterial:at,setFlipSided:St,setCullFace:yt,setLineWidth:Jt,setPolygonOffset:N,setScissorTest:te,activeTexture:Bt,bindTexture:Zt,unbindTexture:mt,compressedTexImage2D:ge,compressedTexImage3D:M,texImage2D:K,texImage3D:it,pixelStorei:j,getParameter:Et,updateUBOMapping:Ht,uniformBlockBinding:ne,texStorage2D:ot,texStorage3D:ht,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:Q,scissor:et,viewport:dt,reset:ue}}function _y(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,u=new Set;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,y){return x?new OffscreenCanvas(M,y):ta("canvas")}function m(M,y,O){let W=1;const Q=ge(M);if((Q.width>O||Q.height>O)&&(W=O/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ot=Math.floor(W*Q.width),ht=Math.floor(W*Q.height);d===void 0&&(d=S(ot,ht));const K=y?S(ot,ht):d;return K.width=ot,K.height=ht,K.getContext("2d").drawImage(M,0,0,ot,ht),jt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ot+"x"+ht+")."),K}else return"data"in M&&jt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function f(M){return M.generateMipmaps}function _(M){i.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(M,y,O,W,Q,ot=!1){if(M!==null){if(i[M]!==void 0)return i[M];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ht;W&&(ht=t.get("EXT_texture_norm16"),ht||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8),O===i.UNSIGNED_SHORT&&ht&&(K=ht.R16_EXT),O===i.SHORT&&ht&&(K=ht.R16_SNORM_EXT)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),y===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8),O===i.UNSIGNED_SHORT&&ht&&(K=ht.RG16_EXT),O===i.SHORT&&ht&&(K=ht.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(O===i.UNSIGNED_SHORT&&ht&&(K=ht.RGB16_EXT),O===i.SHORT&&ht&&(K=ht.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){const it=ot?Qo:me.getTransfer(Q);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=it===we?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ht&&(K=ht.RGBA16_EXT),O===i.SHORT&&ht&&(K=ht.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function k(M,y){let O;return M?y===null||y===ii||y===Gr?O=i.DEPTH24_STENCIL8:y===Fn?O=i.DEPTH32F_STENCIL8:y===Vr&&(O=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ii||y===Gr?O=i.DEPTH_COMPONENT24:y===Fn?O=i.DEPTH_COMPONENT32F:y===Vr&&(O=i.DEPTH_COMPONENT16),O}function v(M,y){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ge&&M.minFilter!==je?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function A(M){const y=M.target;y.removeEventListener("dispose",A),b(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function g(M){const y=M.target;y.removeEventListener("dispose",g),T(y)}function b(M){const y=n.get(M);if(y.__webglInit===void 0)return;const O=M.source,W=p.get(O);if(W){const Q=W[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(M),Object.keys(W).length===0&&p.delete(O)}n.remove(M)}function C(M){const y=n.get(M);i.deleteTexture(y.__webglTexture);const O=M.source,W=p.get(O);delete W[y.__cacheKey],o.memory.textures--}function T(M){const y=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let Q=0;Q<y.__webglFramebuffer[W].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[W][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)i.deleteFramebuffer(y.__webglFramebuffer[W]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=M.textures;for(let W=0,Q=O.length;W<Q;W++){const ot=n.get(O[W]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(O[W])}n.remove(M)}let F=0;function P(){F=0}function B(){return F}function L(M){F=M}function H(){const M=F;return M>=s.maxTextures&&jt("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),F+=1,M}function U(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function J(M,y){const O=n.get(M);if(M.isVideoTexture&&Zt(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&O.__version!==M.version){const W=M.image;if(W===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(O,M,y);return}}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function tt(M,y){const O=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){ft(O,M,y);return}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function ut(M,y){const O=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){ft(O,M,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function Mt(M,y){const O=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&O.__version!==M.version){Ct(O,M,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const Lt={[Ol]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},$t={[Ge]:i.NEAREST,[r0]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},xt={[c0]:i.NEVER,[p0]:i.ALWAYS,[h0]:i.LESS,[zc]:i.LEQUAL,[d0]:i.EQUAL,[Hc]:i.GEQUAL,[u0]:i.GREATER,[f0]:i.NOTEQUAL};function vt(M,y){if(y.type===Fn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===je||y.magFilter===Ca||y.magFilter===eo||y.magFilter===cs||y.minFilter===je||y.minFilter===Ca||y.minFilter===eo||y.minFilter===cs)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,Lt[y.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,Lt[y.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,Lt[y.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,$t[y.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,$t[y.minFilter]),y.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==eo&&y.minFilter!==cs||y.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function X(M,y){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",A));const W=y.source;let Q=p.get(W);Q===void 0&&(Q={},p.set(W,Q));const ot=U(y);if(ot!==M.__cacheKey){Q[ot]===void 0&&(Q[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[ot].usedTimes++;const ht=Q[M.__cacheKey];ht!==void 0&&(Q[M.__cacheKey].usedTimes--,ht.usedTimes===0&&C(y)),M.__cacheKey=ot,M.__webglTexture=Q[ot].texture}return O}function rt(M,y,O){return Math.floor(Math.floor(M/O)/y)}function Z(M,y,O,W){const ot=M.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,O,W,y.data);else{ot.sort((j,et)=>j.start-et.start);let ht=0;for(let j=1;j<ot.length;j++){const et=ot[ht],dt=ot[j],Ht=et.start+et.count,ne=rt(dt.start,y.width,4),ue=rt(et.start,y.width,4);dt.start<=Ht+1&&ne===ue&&rt(dt.start+dt.count-1,y.width,4)===ne?et.count=Math.max(et.count,dt.start+dt.count-et.start):(++ht,ot[ht]=dt)}ot.length=ht+1;const K=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let j=0,et=ot.length;j<et;j++){const dt=ot[j],Ht=Math.floor(dt.start/4),ne=Math.ceil(dt.count/4),ue=Ht%y.width,z=Math.floor(Ht/y.width),_t=ne,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,ue,z,_t,nt,O,W,y.data)}M.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function ft(M,y,O){let W=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=i.TEXTURE_3D);const Q=X(M,y),ot=y.source;e.bindTexture(W,M.__webglTexture,i.TEXTURE0+O);const ht=n.get(ot);if(ot.version!==ht.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const nt=me.getPrimaries(me.workingColorSpace),Ft=y.colorSpace===ui?null:me.getPrimaries(y.colorSpace),bt=y.colorSpace===ui||nt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let it=m(y.image,!1,s.maxTextureSize);it=mt(y,it);const Et=r.convert(y.format,y.colorSpace),j=r.convert(y.type);let et=w(y.internalFormat,Et,j,y.normalized,y.colorSpace,y.isVideoTexture);vt(W,y);let dt;const Ht=y.mipmaps,ne=y.isVideoTexture!==!0,ue=ht.__version===void 0||Q===!0,z=ot.dataReady,_t=v(y,it);if(y.isDepthTexture)et=k(y.format===hs,y.type),ue&&(ne?e.texStorage2D(i.TEXTURE_2D,1,et,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,et,it.width,it.height,0,Et,j,null));else if(y.isDataTexture)if(Ht.length>0){ne&&ue&&e.texStorage2D(i.TEXTURE_2D,_t,et,Ht[0].width,Ht[0].height);for(let nt=0,Ft=Ht.length;nt<Ft;nt++)dt=Ht[nt],ne?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Et,j,dt.data):e.texImage2D(i.TEXTURE_2D,nt,et,dt.width,dt.height,0,Et,j,dt.data);y.generateMipmaps=!1}else ne?(ue&&e.texStorage2D(i.TEXTURE_2D,_t,et,it.width,it.height),z&&Z(y,it,Et,j)):e.texImage2D(i.TEXTURE_2D,0,et,it.width,it.height,0,Et,j,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,et,Ht[0].width,Ht[0].height,it.depth);for(let nt=0,Ft=Ht.length;nt<Ft;nt++)if(dt=Ht[nt],y.format!==Ln)if(Et!==null)if(ne){if(z)if(y.layerUpdates.size>0){const bt=Td(dt.width,dt.height,y.format,y.type);for(const ct of y.layerUpdates){const Vt=dt.data.subarray(ct*bt/dt.data.BYTES_PER_ELEMENT,(ct+1)*bt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,ct,dt.width,dt.height,1,Et,Vt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,it.depth,Et,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,et,dt.width,dt.height,it.depth,0,dt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,it.depth,Et,j,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,et,dt.width,dt.height,it.depth,0,Et,j,dt.data)}else{ne&&ue&&e.texStorage2D(i.TEXTURE_2D,_t,et,Ht[0].width,Ht[0].height);for(let nt=0,Ft=Ht.length;nt<Ft;nt++)dt=Ht[nt],y.format!==Ln?Et!==null?ne?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Et,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,et,dt.width,dt.height,0,dt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Et,j,dt.data):e.texImage2D(i.TEXTURE_2D,nt,et,dt.width,dt.height,0,Et,j,dt.data)}else if(y.isDataArrayTexture)if(ne){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,et,it.width,it.height,it.depth),z)if(y.layerUpdates.size>0){const nt=Td(it.width,it.height,y.format,y.type);for(const Ft of y.layerUpdates){const bt=it.data.subarray(Ft*nt/it.data.BYTES_PER_ELEMENT,(Ft+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,it.width,it.height,1,Et,j,bt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Et,j,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,it.width,it.height,it.depth,0,Et,j,it.data);else if(y.isData3DTexture)ne?(ue&&e.texStorage3D(i.TEXTURE_3D,_t,et,it.width,it.height,it.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Et,j,it.data)):e.texImage3D(i.TEXTURE_3D,0,et,it.width,it.height,it.depth,0,Et,j,it.data);else if(y.isFramebufferTexture){if(ue)if(ne)e.texStorage2D(i.TEXTURE_2D,_t,et,it.width,it.height);else{let nt=it.width,Ft=it.height;for(let bt=0;bt<_t;bt++)e.texImage2D(i.TEXTURE_2D,bt,et,nt,Ft,0,Et,j,null),nt>>=1,Ft>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),u.add(y),nt.onpaint=ie=>{const Wt=ie.changedElements;for(const qt of u)Wt.includes(qt.image)&&(qt.needsUpdate=!0)},nt.requestPaint();return}const Ft=0,bt=i.RGBA,ct=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ft,bt,ct,Vt,it),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(ne&&ue){const nt=ge(Ht[0]);e.texStorage2D(i.TEXTURE_2D,_t,et,nt.width,nt.height)}for(let nt=0,Ft=Ht.length;nt<Ft;nt++)dt=Ht[nt],ne?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Et,j,dt):e.texImage2D(i.TEXTURE_2D,nt,et,Et,j,dt);y.generateMipmaps=!1}else if(ne){if(ue){const nt=ge(it);e.texStorage2D(i.TEXTURE_2D,_t,et,nt.width,nt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,j,it)}else e.texImage2D(i.TEXTURE_2D,0,et,Et,j,it);f(y)&&_(W),ht.__version=ot.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function Ct(M,y,O){if(y.image.length!==6)return;const W=X(M,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+O);const ot=n.get(Q);if(Q.version!==ot.__version||W===!0){e.activeTexture(i.TEXTURE0+O);const ht=me.getPrimaries(me.workingColorSpace),K=y.colorSpace===ui?null:me.getPrimaries(y.colorSpace),it=y.colorSpace===ui||ht===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const Et=y.isCompressedTexture||y.image[0].isCompressedTexture,j=y.image[0]&&y.image[0].isDataTexture,et=[];for(let ct=0;ct<6;ct++)!Et&&!j?et[ct]=m(y.image[ct],!0,s.maxCubemapSize):et[ct]=j?y.image[ct].image:y.image[ct],et[ct]=mt(y,et[ct]);const dt=et[0],Ht=r.convert(y.format,y.colorSpace),ne=r.convert(y.type),ue=w(y.internalFormat,Ht,ne,y.normalized,y.colorSpace),z=y.isVideoTexture!==!0,_t=ot.__version===void 0||W===!0,nt=Q.dataReady;let Ft=v(y,dt);vt(i.TEXTURE_CUBE_MAP,y);let bt;if(Et){z&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ue,dt.width,dt.height);for(let ct=0;ct<6;ct++){bt=et[ct].mipmaps;for(let Vt=0;Vt<bt.length;Vt++){const ie=bt[Vt];y.format!==Ln?Ht!==null?z?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,ie.width,ie.height,Ht,ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,ue,ie.width,ie.height,0,ie.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,ie.width,ie.height,Ht,ne,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,ue,ie.width,ie.height,0,Ht,ne,ie.data)}}}else{if(bt=y.mipmaps,z&&_t){bt.length>0&&Ft++;const ct=ge(et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ue,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(j){z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,et[ct].width,et[ct].height,Ht,ne,et[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,et[ct].width,et[ct].height,0,Ht,ne,et[ct].data);for(let Vt=0;Vt<bt.length;Vt++){const Wt=bt[Vt].image[ct].image;z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Wt.width,Wt.height,Ht,ne,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,ue,Wt.width,Wt.height,0,Ht,ne,Wt.data)}}else{z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ht,ne,et[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,Ht,ne,et[ct]);for(let Vt=0;Vt<bt.length;Vt++){const ie=bt[Vt];z?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Ht,ne,ie.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,ue,Ht,ne,ie.image[ct])}}}f(y)&&_(i.TEXTURE_CUBE_MAP),ot.__version=Q.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function Dt(M,y,O,W,Q,ot){const ht=r.convert(O.format,O.colorSpace),K=r.convert(O.type),it=w(O.internalFormat,ht,K,O.normalized,O.colorSpace),Et=n.get(y),j=n.get(O);if(j.__renderTarget=y,!Et.__hasExternalTextures){const et=Math.max(1,y.width>>ot),dt=Math.max(1,y.height>>ot);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,ot,it,et,dt,y.depth,0,ht,K,null):e.texImage2D(Q,ot,it,et,dt,0,ht,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Q,j.__webglTexture,0,te(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Q,j.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(M,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,M),y.depthBuffer){const W=y.depthTexture,Q=W&&W.isDepthTexture?W.type:null,ot=k(y.stencilBuffer,Q),ht=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(y),ot,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(y),ot,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ot,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,M)}else{const W=y.textures;for(let Q=0;Q<W.length;Q++){const ot=W[Q],ht=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),it=w(ot.internalFormat,ht,K,ot.normalized,ot.colorSpace);Bt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(y),it,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(y),it,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,it,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(M,y,O){const W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),vt(i.TEXTURE_CUBE_MAP,y.depthTexture);const Et=r.convert(y.depthTexture.format),j=r.convert(y.depthTexture.type);let et;y.depthTexture.format===_i?et=i.DEPTH_COMPONENT24:y.depthTexture.format===hs&&(et=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,et,y.width,y.height,0,Et,j,null)}}else J(y.depthTexture,0);const ot=Q.__webglTexture,ht=te(y),K=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,it=y.depthTexture.format===hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===_i)Bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,K,ot,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,it,K,ot,0);else if(y.depthTexture.format===hs)Bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,K,ot,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,it,K,ot,0);else throw new Error("Unknown depthTexture format")}function st(M){const y=n.get(M),O=M.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==M.depthTexture){const W=M.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=W}if(M.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)Ut(y.__webglFramebuffer[W],M,W);else{const W=M.texture.mipmaps;W&&W.length>0?Ut(y.__webglFramebuffer[0],M,0):Ut(y.__webglFramebuffer,M,0)}else if(O){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=i.createRenderbuffer(),pt(y.__webglDepthbuffer[W],M,!1);else{const Q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=y.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ot)}}else{const W=M.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pt(y.__webglDepthbuffer,M,!1);else{const Q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(M,y,O){const W=n.get(M);y!==void 0&&Dt(W.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&st(M)}function at(M){const y=M.texture,O=n.get(M),W=n.get(y);M.addEventListener("dispose",g);const Q=M.textures,ot=M.isWebGLCubeRenderTarget===!0,ht=Q.length>1;if(ht||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=y.version,o.memory.textures++),ot){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let it=0;it<y.mipmaps.length;it++)O.__webglFramebuffer[K][it]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ht)for(let K=0,it=Q.length;K<it;K++){const Et=n.get(Q[K]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&Bt(M)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){const it=Q[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const Et=r.convert(it.format,it.colorSpace),j=r.convert(it.type),et=w(it.internalFormat,Et,j,it.normalized,it.colorSpace,M.isXRRenderTarget===!0),dt=te(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,et,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),vt(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)Dt(O.__webglFramebuffer[K][it],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it);else Dt(O.__webglFramebuffer[K],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(y)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let K=0,it=Q.length;K<it;K++){const Et=Q[K],j=n.get(Et);let et=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(et=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,j.__webglTexture),vt(et,Et),Dt(O.__webglFramebuffer,M,Et,i.COLOR_ATTACHMENT0+K,et,0),f(Et)&&_(et)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(K=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),vt(K,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)Dt(O.__webglFramebuffer[it],M,y,i.COLOR_ATTACHMENT0,K,it);else Dt(O.__webglFramebuffer,M,y,i.COLOR_ATTACHMENT0,K,0);f(y)&&_(K),e.unbindTexture()}M.depthBuffer&&st(M)}function St(M){const y=M.textures;for(let O=0,W=y.length;O<W;O++){const Q=y[O];if(f(Q)){const ot=E(M),ht=n.get(Q).__webglTexture;e.bindTexture(ot,ht),_(ot),e.unbindTexture()}}}const yt=[],Jt=[];function N(M){if(M.samples>0){if(Bt(M)===!1){const y=M.textures,O=M.width,W=M.height;let Q=i.COLOR_BUFFER_BIT;const ot=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(M),K=y.length>1;if(K)for(let Et=0;Et<y.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const it=M.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Et]);const j=n.get(y[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,Q,i.NEAREST),l===!0&&(yt.length=0,Jt.length=0,yt.push(i.COLOR_ATTACHMENT0+Et),M.depthBuffer&&M.resolveDepthBuffer===!1&&(yt.push(ot),Jt.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let Et=0;Et<y.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Et]);const j=n.get(y[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function te(M){return Math.min(s.maxSamples,M.samples)}function Bt(M){const y=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Zt(M){const y=o.render.frame;h.get(M)!==y&&(h.set(M,y),M.update())}function mt(M,y){const O=M.colorSpace,W=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==Jo&&O!==ui&&(me.getTransfer(O)===we?(W!==Ln||Q!==bn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",O)),y}function ge(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.getTextureUnits=B,this.setTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=tt,this.setTexture3D=ut,this.setTextureCube=Mt,this.rebindTextures=lt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yy(i,t){function e(n,s=ui){let r;const o=me.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tf)return i.BYTE;if(n===ef)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===Ic)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===vi)return i.HALF_FLOAT;if(n===rf)return i.ALPHA;if(n===of)return i.RGB;if(n===Ln)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===ha)return i.RED;if(n===Uc)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Go||n===Wo||n===Xo||n===$o)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Hl||n===Vl||n===Gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===$l||n===Yl||n===ql||n===Ko||n===jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return r.COMPRESSED_R11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ko)return r.COMPRESSED_RG11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===Zl||n===Jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===dc||n===uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hc)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===pc||n===Zo||n===mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const by=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`;class wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ff(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hn({vertexShader:by,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sy extends _s{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",m=new wy,f={},_=e.getContextAttributes();let E=null,w=null;const k=[],v=[],A=new wt;let g=null;const b=new mn;b.viewport=new Se;const C=new mn;C.viewport=new Se;const T=[b,C],F=new Lm;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=k[X];return rt===void 0&&(rt=new Na,k[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=k[X];return rt===void 0&&(rt=new Na,k[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=k[X];return rt===void 0&&(rt=new Na,k[X]=rt),rt.getHandSpace()};function L(X){const rt=v.indexOf(X.inputSource);if(rt===-1)return;const Z=k[rt];Z!==void 0&&(Z.update(X.inputSource,X.frame,c||o),Z.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",U);for(let X=0;X<k.length;X++){const rt=v[X];rt!==null&&(v[X]=null,k[X].disconnect(rt))}P=null,B=null,m.reset();for(const X in f)delete f[X];t.setRenderTarget(E),p=null,d=null,u=null,s=null,w=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",H),s.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ft=null,Ct=null;_.depth&&(Ct=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?hs:_i,ft=_.stencil?Gr:ii);const Dt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Vn(d.textureWidth,d.textureHeight,{format:Ln,type:bn,depthTexture:new er(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Vn(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(X){for(let rt=0;rt<X.removed.length;rt++){const Z=X.removed[rt],ft=v.indexOf(Z);ft>=0&&(v[ft]=null,k[ft].disconnect(Z))}for(let rt=0;rt<X.added.length;rt++){const Z=X.added[rt];let ft=v.indexOf(Z);if(ft===-1){for(let Dt=0;Dt<k.length;Dt++)if(Dt>=v.length){v.push(Z),ft=Dt;break}else if(v[Dt]===null){v[Dt]=Z,ft=Dt;break}if(ft===-1)break}const Ct=k[ft];Ct&&Ct.connect(Z)}}const J=new D,tt=new D;function ut(X,rt,Z){J.setFromMatrixPosition(rt.matrixWorld),tt.setFromMatrixPosition(Z.matrixWorld);const ft=J.distanceTo(tt),Ct=rt.projectionMatrix.elements,Dt=Z.projectionMatrix.elements,pt=Ct[14]/(Ct[10]-1),Ut=Ct[14]/(Ct[10]+1),st=(Ct[9]+1)/Ct[5],lt=(Ct[9]-1)/Ct[5],at=(Ct[8]-1)/Ct[0],St=(Dt[8]+1)/Dt[0],yt=pt*at,Jt=pt*St,N=ft/(-at+St),te=N*-at;if(rt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(te),X.translateZ(N),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ct[10]===-1)X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Bt=pt+N,Zt=Ut+N,mt=yt-te,ge=Jt+(ft-te),M=st*Ut/Zt*Bt,y=lt*Ut/Zt*Bt;X.projectionMatrix.makePerspective(mt,ge,M,y,Bt,Zt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Mt(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let rt=X.near,Z=X.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),F.near=C.near=b.near=rt,F.far=C.far=b.far=Z,(P!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,B=F.far),F.layers.mask=X.layers.mask|6,b.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;const ft=X.parent,Ct=F.cameras;Mt(F,ft);for(let Dt=0;Dt<Ct.length;Dt++)Mt(Ct[Dt],ft);Ct.length===2?ut(F,b,C):F.projectionMatrix.copy(b.projectionMatrix),Lt(X,F,ft)};function Lt(X,rt,Z){Z===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(Z.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=vc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(X){return f[X]};let $t=null;function xt(X,rt){if(h=rt.getViewerPose(c||o),x=rt,h!==null){const Z=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ft=!1;Z.length!==F.cameras.length&&(F.cameras.length=0,ft=!0);for(let Ut=0;Ut<Z.length;Ut++){const st=Z[Ut];let lt=null;if(p!==null)lt=p.getViewport(st);else{const St=u.getViewSubImage(d,st);lt=St.viewport,Ut===0&&(t.setRenderTargetTextures(w,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(w))}let at=T[Ut];at===void 0&&(at=new mn,at.layers.enable(Ut),at.viewport=new Se,T[Ut]=at),at.matrix.fromArray(st.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(st.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(lt.x,lt.y,lt.width,lt.height),Ut===0&&(F.matrix.copy(at.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ft===!0&&F.cameras.push(at)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();const Ut=u.getDepthInformation(Z[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,s.renderState)}if(Ct&&Ct.includes("camera-access")&&S){t.state.unbindTexture(),u=n.getBinding();for(let Ut=0;Ut<Z.length;Ut++){const st=Z[Ut].camera;if(st){let lt=f[st];lt||(lt=new ff,f[st]=lt);const at=u.getCameraImage(st);lt.sourceTexture=at}}}}for(let Z=0;Z<k.length;Z++){const ft=v[Z],Ct=k[Z];ft!==null&&Ct!==void 0&&Ct.update(ft,rt,c||o)}$t&&$t(X,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),x=null}const vt=new Cf;vt.setAnimationLoop(xt),this.setAnimationLoop=function(X){$t=X},this.dispose=function(){}}}const Ey=new Qt,Df=new re;Df.set(-1,0,0,0,1,0,0,0,1);function Ay(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Sf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,E,w){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f),E=_.envMap,w=_.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(w)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Df),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ty(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){const w=E.program;n.uniformBlockBinding(_,w)}function c(_,E){let w=s[_.id];w===void 0&&(x(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",m));const k=E.program;n.updateUBOMapping(_,k);const v=t.render.frame;r[_.id]!==v&&(d(_),r[_.id]=v)}function h(_){const E=u();_.__bindingPointIndex=E;const w=i.createBuffer(),k=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,k,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const E=s[_.id],w=_.uniforms,k=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,A=w.length;v<A;v++){const g=Array.isArray(w[v])?w[v]:[w[v]];for(let b=0,C=g.length;b<C;b++){const T=g[b];if(p(T,v,b,k)===!0){const F=T.__offset,P=Array.isArray(T.value)?T.value:[T.value];let B=0;for(let L=0;L<P.length;L++){const H=P[L],U=S(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+B,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):ArrayBuffer.isView(H)?T.__data.set(new H.constructor(H.buffer,H.byteOffset,T.__data.length)):(H.toArray(T.__data,B),B+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,E,w,k){const v=_.value,A=E+"_"+w;if(k[A]===void 0)return typeof v=="number"||typeof v=="boolean"?k[A]=v:ArrayBuffer.isView(v)?k[A]=v.slice():k[A]=v.clone(),!0;{const g=k[A];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return k[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(g.equals(v)===!1)return g.copy(v),!0}}return!1}function x(_){const E=_.uniforms;let w=0;const k=16;for(let A=0,g=E.length;A<g;A++){const b=Array.isArray(E[A])?E[A]:[E[A]];for(let C=0,T=b.length;C<T;C++){const F=b[C],P=Array.isArray(F.value)?F.value:[F.value];for(let B=0,L=P.length;B<L;B++){const H=P[B],U=S(H),J=w%k,tt=J%U.boundary,ut=J+tt;w+=tt,ut!==0&&k-ut<U.storage&&(w+=k-ut),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=U.storage}}}const v=w%k;return v>0&&(w+=k-v),_.__size=w,_.__cache={},this}function S(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",_),E}function m(_){const E=_.target;E.removeEventListener("dispose",m);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}const Cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function Ry(){return Xn===null&&(Xn=new ua(Cy,16,16,ms,vi),Xn.name="DFG_LUT",Xn.minFilter=je,Xn.magFilter=je,Xn.wrapS=fi,Xn.wrapT=fi,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class Py{constructor(t={}){const{canvas:e=g0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=bn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const S=p,m=new Set([Bc,Oc,Uc]),f=new Set([bn,ii,Vr,Gr,Dc,Nc]),_=new Uint32Array(4),E=new Int32Array(4),w=new D;let k=null,v=null;const A=[],g=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let T=!1,F=null;this._outputColorSpace=qe;let P=0,B=0,L=null,H=-1,U=null;const J=new Se,tt=new Se;let ut=null;const Mt=new ee(0);let Lt=0,$t=e.width,xt=e.height,vt=1,X=null,rt=null;const Z=new Se(0,0,$t,xt),ft=new Se(0,0,$t,xt);let Ct=!1;const Dt=new Yc;let pt=!1,Ut=!1;const st=new Qt,lt=new D,at=new Se,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Jt(){return L===null?vt:1}let N=n;function te(R,G){return e.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",ie,!1),N===null){const G="webgl2";if(N=te(G,R),N===null)throw te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw pe("WebGLRenderer: "+R.message),R}let Bt,Zt,mt,ge,M,y,O,W,Q,ot,ht,K,it,Et,j,et,dt,Ht,ne,ue,z,_t,nt;function Ft(){Bt=new Rv(N),Bt.init(),z=new yy(N,Bt),Zt=new bv(N,Bt,t,z),mt=new vy(N,Bt),Zt.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),ge=new Fv(N),M=new sy,y=new _y(N,Bt,mt,M,Zt,z,ge),O=new Cv(C),W=new Nm(N),_t=new _v(N,W),Q=new Pv(N,W,ge,_t),ot=new Iv(N,Q,W,_t,ge),Ht=new Lv(N,Zt,y),j=new Mv(M),ht=new iy(C,O,Bt,Zt,_t,j),K=new Ay(C,M),it=new oy,Et=new uy(Bt),dt=new vv(C,O,mt,ot,x,l),et=new xy(C,ot,Zt),nt=new Ty(N,ge,Zt,mt),ne=new yv(N,Bt,ge),ue=new kv(N,Bt,ge),ge.programs=ht.programs,C.capabilities=Zt,C.extensions=Bt,C.properties=M,C.renderLists=it,C.shadowMap=et,C.state=mt,C.info=ge}Ft(),S!==bn&&(b=new Nv(S,e.width,e.height,s,r));const bt=new Sy(C,N);this.xr=bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize($t,xt,!1))},this.getSize=function(R){return R.set($t,xt)},this.setSize=function(R,G,q=!0){if(bt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=R,xt=G,e.width=Math.floor(R*vt),e.height=Math.floor(G*vt),q===!0&&(e.style.width=R+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set($t*vt,xt*vt).floor()},this.setDrawingBufferSize=function(R,G,q){$t=R,xt=G,vt=q,e.width=Math.floor(R*q),e.height=Math.floor(G*q),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(S===bn){pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(J)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,G,q,$){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,G,q,$),mt.viewport(J.copy(Z).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(ft)},this.setScissor=function(R,G,q,$){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,G,q,$),mt.scissor(tt.copy(ft).multiplyScalar(vt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){mt.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,q=!0){let $=0;if(R){let Y=!1;if(L!==null){const kt=L.texture.format;Y=m.has(kt)}if(Y){const kt=L.texture.type,Ot=f.has(kt),Pt=dt.getClearColor(),Gt=dt.getClearAlpha(),Xt=Pt.r,oe=Pt.g,he=Pt.b;Ot?(_[0]=Xt,_[1]=oe,_[2]=he,_[3]=Gt,N.clearBufferuiv(N.COLOR,0,_)):(E[0]=Xt,E[1]=oe,E[2]=he,E[3]=Gt,N.clearBufferiv(N.COLOR,0,E))}else $|=N.COLOR_BUFFER_BIT}G&&($|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),F=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),dt.dispose(),it.dispose(),Et.dispose(),M.dispose(),O.dispose(),ot.dispose(),_t.dispose(),nt.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ph),bt.removeEventListener("sessionend",mh),$i.stop()};function ct(R){R.preventDefault(),Gh("WebGLRenderer: Context Lost."),T=!0}function Vt(){Gh("WebGLRenderer: Context Restored."),T=!1;const R=ge.autoReset,G=et.enabled,q=et.autoUpdate,$=et.needsUpdate,Y=et.type;Ft(),ge.autoReset=R,et.enabled=G,et.autoUpdate=q,et.needsUpdate=$,et.type=Y}function ie(R){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Wt(R){const G=R.target;G.removeEventListener("dispose",Wt),qt(G)}function qt(R){dn(R),M.remove(R)}function dn(R){const G=M.get(R).programs;G!==void 0&&(G.forEach(function(q){ht.releaseProgram(q)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,q,$,Y,kt){G===null&&(G=St);const Ot=Y.isMesh&&Y.matrixWorld.determinant()<0,Pt=ip(R,G,q,$,Y);mt.setMaterial($,Ot);let Gt=q.index,Xt=1;if($.wireframe===!0){if(Gt=Q.getWireframeAttribute(q),Gt===void 0)return;Xt=2}const oe=q.drawRange,he=q.attributes.position;let Yt=oe.start*Xt,Ee=(oe.start+oe.count)*Xt;kt!==null&&(Yt=Math.max(Yt,kt.start*Xt),Ee=Math.min(Ee,(kt.start+kt.count)*Xt)),Gt!==null?(Yt=Math.max(Yt,0),Ee=Math.min(Ee,Gt.count)):he!=null&&(Yt=Math.max(Yt,0),Ee=Math.min(Ee,he.count));const De=Ee-Yt;if(De<0||De===1/0)return;_t.setup(Y,$,Pt,q,Gt);let Le,Ae=ne;if(Gt!==null&&(Le=W.get(Gt),Ae=ue,Ae.setIndex(Le)),Y.isMesh)$.wireframe===!0?(mt.setLineWidth($.wireframeLinewidth*Jt()),Ae.setMode(N.LINES)):Ae.setMode(N.TRIANGLES);else if(Y.isLine){let Ze=$.linewidth;Ze===void 0&&(Ze=1),mt.setLineWidth(Ze*Jt()),Y.isLineSegments?Ae.setMode(N.LINES):Y.isLineLoop?Ae.setMode(N.LINE_LOOP):Ae.setMode(N.LINE_STRIP)}else Y.isPoints?Ae.setMode(N.POINTS):Y.isSprite&&Ae.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Bt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ze=Y._multiDrawStarts,Nt=Y._multiDrawCounts,xn=Y._multiDrawCount,xe=Gt?W.get(Gt).bytesPerElement:1,Sn=M.get($).currentProgram.getUniforms();for(let Gn=0;Gn<xn;Gn++)Sn.setValue(N,"_gl_DrawID",Gn),Ae.render(Ze[Gn]/xe,Nt[Gn])}else if(Y.isInstancedMesh)Ae.renderInstances(Yt,De,Y.count);else if(q.isInstancedBufferGeometry){const Ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nt=Math.min(q.instanceCount,Ze);Ae.renderInstances(Yt,De,Nt)}else Ae.render(Yt,De)};function wn(R,G,q){R.transparent===!0&&R.side===Bn&&R.forceSinglePass===!1?(R.side=Ke,R.needsUpdate=!0,to(R,G,q),R.side=zi,R.needsUpdate=!0,to(R,G,q),R.side=Bn):to(R,G,q)}this.compile=function(R,G,q=null){q===null&&(q=R),v=Et.get(q),v.init(G),g.push(v),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),R!==q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const $=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const kt=Y.material;if(kt)if(Array.isArray(kt))for(let Ot=0;Ot<kt.length;Ot++){const Pt=kt[Ot];wn(Pt,q,Y),$.add(Pt)}else wn(kt,q,Y),$.add(kt)}),v=g.pop(),$},this.compileAsync=function(R,G,q=null){const $=this.compile(R,G,q);return new Promise(Y=>{function kt(){if($.forEach(function(Ot){M.get(Ot).currentProgram.isReady()&&$.delete(Ot)}),$.size===0){Y(R);return}setTimeout(kt,10)}Bt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let ba=null;function ep(R){ba&&ba(R)}function ph(){$i.stop()}function mh(){$i.start()}const $i=new Cf;$i.setAnimationLoop(ep),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(R){ba=R,bt.setAnimationLoop(R),R===null?$i.stop():$i.start()},bt.addEventListener("sessionstart",ph),bt.addEventListener("sessionend",mh),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;F!==null&&F.renderStart(R,G);const q=bt.enabled===!0&&bt.isPresenting===!0,$=b!==null&&(L===null||q)&&b.begin(C,L);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(G),G=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,G,L),v=Et.get(R,g.length),v.init(G),v.state.textureUnits=y.getTextureUnits(),g.push(v),st.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Dt.setFromProjectionMatrix(st,ti,G.reversedDepth),Ut=this.localClippingEnabled,pt=j.init(this.clippingPlanes,Ut),k=it.get(R,A.length),k.init(),A.push(k),bt.enabled===!0&&bt.isPresenting===!0){const Ot=C.xr.getDepthSensingMesh();Ot!==null&&Ma(Ot,G,-1/0,C.sortObjects)}Ma(R,G,0,C.sortObjects),k.finish(),C.sortObjects===!0&&k.sort(X,rt),yt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,yt&&dt.addToRenderList(k,R),this.info.render.frame++,pt===!0&&j.beginShadows();const Y=v.state.shadowsArray;if(et.render(Y,R,G),pt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&b.hasRenderPass())===!1){const Ot=k.opaque,Pt=k.transmissive;if(v.setupLights(),G.isArrayCamera){const Gt=G.cameras;if(Pt.length>0)for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){const he=Gt[Xt];xh(Ot,Pt,R,he)}yt&&dt.render(R);for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){const he=Gt[Xt];gh(k,R,he,he.viewport)}}else Pt.length>0&&xh(Ot,Pt,R,G),yt&&dt.render(R),gh(k,R,G)}L!==null&&B===0&&(y.updateMultisampleRenderTarget(L),y.updateRenderTargetMipmap(L)),$&&b.end(C),R.isScene===!0&&R.onAfterRender(C,R,G),_t.resetDefaultState(),H=-1,U=null,g.pop(),g.length>0?(v=g[g.length-1],y.setTextureUnits(v.state.textureUnits),pt===!0&&j.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?k=A[A.length-1]:k=null,F!==null&&F.renderEnd()};function Ma(R,G,q,$){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)v.pushLightProbeGrid(R);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Dt.intersectsSprite(R)){$&&at.setFromMatrixPosition(R.matrixWorld).applyMatrix4(st);const Ot=ot.update(R),Pt=R.material;Pt.visible&&k.push(R,Ot,Pt,q,at.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Dt.intersectsObject(R))){const Ot=ot.update(R),Pt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),at.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),at.copy(Ot.boundingSphere.center)),at.applyMatrix4(R.matrixWorld).applyMatrix4(st)),Array.isArray(Pt)){const Gt=Ot.groups;for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){const he=Gt[Xt],Yt=Pt[he.materialIndex];Yt&&Yt.visible&&k.push(R,Ot,Yt,q,at.z,he)}}else Pt.visible&&k.push(R,Ot,Pt,q,at.z,null)}}const kt=R.children;for(let Ot=0,Pt=kt.length;Ot<Pt;Ot++)Ma(kt[Ot],G,q,$)}function gh(R,G,q,$){const{opaque:Y,transmissive:kt,transparent:Ot}=R;v.setupLightsView(q),pt===!0&&j.setGlobalState(C.clippingPlanes,q),$&&mt.viewport(J.copy($)),Y.length>0&&Qr(Y,G,q),kt.length>0&&Qr(kt,G,q),Ot.length>0&&Qr(Ot,G,q),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function xh(R,G,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[$.id]===void 0){const Yt=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[$.id]=new Vn(1,1,{generateMipmaps:!0,type:Yt?vi:bn,minFilter:cs,samples:Math.max(4,Zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace})}const kt=v.state.transmissionRenderTarget[$.id],Ot=$.viewport||J;kt.setSize(Ot.z*C.transmissionResolutionScale,Ot.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget(),Gt=C.getActiveCubeFace(),Xt=C.getActiveMipmapLevel();C.setRenderTarget(kt),C.getClearColor(Mt),Lt=C.getClearAlpha(),Lt<1&&C.setClearColor(16777215,.5),C.clear(),yt&&dt.render(q);const oe=C.toneMapping;C.toneMapping=Hn;const he=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),v.setupLightsView($),pt===!0&&j.setGlobalState(C.clippingPlanes,$),Qr(R,q,$),y.updateMultisampleRenderTarget(kt),y.updateRenderTargetMipmap(kt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ee=0,De=G.length;Ee<De;Ee++){const Le=G[Ee],{object:Ae,geometry:Ze,material:Nt,group:xn}=Le;if(Nt.side===Bn&&Ae.layers.test($.layers)){const xe=Nt.side;Nt.side=Ke,Nt.needsUpdate=!0,vh(Ae,q,$,Ze,Nt,xn),Nt.side=xe,Nt.needsUpdate=!0,Yt=!0}}Yt===!0&&(y.updateMultisampleRenderTarget(kt),y.updateRenderTargetMipmap(kt))}C.setRenderTarget(Pt,Gt,Xt),C.setClearColor(Mt,Lt),he!==void 0&&($.viewport=he),C.toneMapping=oe}function Qr(R,G,q){const $=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,kt=R.length;Y<kt;Y++){const Ot=R[Y],{object:Pt,geometry:Gt,group:Xt}=Ot;let oe=Ot.material;oe.allowOverride===!0&&$!==null&&(oe=$),Pt.layers.test(q.layers)&&vh(Pt,G,q,Gt,oe,Xt)}}function vh(R,G,q,$,Y,kt){R.onBeforeRender(C,G,q,$,Y,kt),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(C,G,q,$,R,kt),Y.transparent===!0&&Y.side===Bn&&Y.forceSinglePass===!1?(Y.side=Ke,Y.needsUpdate=!0,C.renderBufferDirect(q,G,$,Y,R,kt),Y.side=zi,Y.needsUpdate=!0,C.renderBufferDirect(q,G,$,Y,R,kt),Y.side=Bn):C.renderBufferDirect(q,G,$,Y,R,kt),R.onAfterRender(C,G,q,$,Y,kt)}function to(R,G,q){G.isScene!==!0&&(G=St);const $=M.get(R),Y=v.state.lights,kt=v.state.shadowsArray,Ot=Y.state.version,Pt=ht.getParameters(R,Y.state,kt,G,q,v.state.lightProbeGridArray),Gt=ht.getProgramCacheKey(Pt);let Xt=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;const oe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=O.get(R.envMap||$.environment,oe),$.envMapRotation=$.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Wt),Xt=new Map,$.programs=Xt);let he=Xt.get(Gt);if(he!==void 0){if($.currentProgram===he&&$.lightsStateVersion===Ot)return yh(R,Pt),he}else Pt.uniforms=ht.getUniforms(R),F!==null&&R.isNodeMaterial&&F.build(R,q,Pt),R.onBeforeCompile(Pt,C),he=ht.acquireProgram(Pt,Gt),Xt.set(Gt,he),$.uniforms=Pt.uniforms;const Yt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=j.uniform),yh(R,Pt),$.needsLights=rp(R),$.lightsStateVersion=Ot,$.needsLights&&(Yt.ambientLightColor.value=Y.state.ambient,Yt.lightProbe.value=Y.state.probe,Yt.directionalLights.value=Y.state.directional,Yt.directionalLightShadows.value=Y.state.directionalShadow,Yt.spotLights.value=Y.state.spot,Yt.spotLightShadows.value=Y.state.spotShadow,Yt.rectAreaLights.value=Y.state.rectArea,Yt.ltc_1.value=Y.state.rectAreaLTC1,Yt.ltc_2.value=Y.state.rectAreaLTC2,Yt.pointLights.value=Y.state.point,Yt.pointLightShadows.value=Y.state.pointShadow,Yt.hemisphereLights.value=Y.state.hemi,Yt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Yt.spotLightMatrix.value=Y.state.spotLightMatrix,Yt.spotLightMap.value=Y.state.spotLightMap,Yt.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=v.state.lightProbeGridArray.length>0,$.currentProgram=he,$.uniformsList=null,he}function _h(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Yo.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function yh(R,G){const q=M.get(R);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function np(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(G.matrixWorld);for(let q=0,$=R.length;q<$;q++){const Y=R[q];if(Y.texture!==null&&Y.boundingBox.containsPoint(w))return Y}return null}function ip(R,G,q,$,Y){G.isScene!==!0&&(G=St),y.resetTextureUnits();const kt=G.fog,Ot=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,Pt=L===null?C.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:me.workingColorSpace,Gt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Xt=O.get($.envMap||Ot,Gt),oe=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,he=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Yt=!!q.morphAttributes.position,Ee=!!q.morphAttributes.normal,De=!!q.morphAttributes.color;let Le=Hn;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Le=C.toneMapping);const Ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ze=Ae!==void 0?Ae.length:0,Nt=M.get($),xn=v.state.lights;if(pt===!0&&(Ut===!0||R!==U)){const Ce=R===U&&$.id===H;j.setState($,R,Ce)}let xe=!1;$.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==xn.state.version||Nt.outputColorSpace!==Pt||Y.isBatchedMesh&&Nt.batching===!1||!Y.isBatchedMesh&&Nt.batching===!0||Y.isBatchedMesh&&Nt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Nt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Nt.instancing===!1||!Y.isInstancedMesh&&Nt.instancing===!0||Y.isSkinnedMesh&&Nt.skinning===!1||!Y.isSkinnedMesh&&Nt.skinning===!0||Y.isInstancedMesh&&Nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Nt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Nt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Nt.instancingMorph===!1&&Y.morphTexture!==null||Nt.envMap!==Xt||$.fog===!0&&Nt.fog!==kt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==j.numPlanes||Nt.numIntersection!==j.numIntersection)||Nt.vertexAlphas!==oe||Nt.vertexTangents!==he||Nt.morphTargets!==Yt||Nt.morphNormals!==Ee||Nt.morphColors!==De||Nt.toneMapping!==Le||Nt.morphTargetsCount!==Ze||!!Nt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Nt.__version=$.version);let Sn=Nt.currentProgram;xe===!0&&(Sn=to($,G,Y),F&&$.isNodeMaterial&&F.onUpdateProgram($,Sn,Nt));let Gn=!1,Mi=!1,ws=!1;const Te=Sn.getUniforms(),Ne=Nt.uniforms;if(mt.useProgram(Sn.program)&&(Gn=!0,Mi=!0,ws=!0),$.id!==H&&(H=$.id,Mi=!0),Nt.needsLights){const Ce=np(v.state.lightProbeGridArray,Y);Nt.lightProbeGrid!==Ce&&(Nt.lightProbeGrid=Ce,Mi=!0)}if(Gn||U!==R){mt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Te.setValue(N,"projectionMatrix",R.projectionMatrix),Te.setValue(N,"viewMatrix",R.matrixWorldInverse);const Si=Te.map.cameraPosition;Si!==void 0&&Si.setValue(N,lt.setFromMatrixPosition(R.matrixWorld)),Zt.logarithmicDepthBuffer&&Te.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Te.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,Mi=!0,ws=!0)}if(Nt.needsLights&&(xn.state.directionalShadowMap.length>0&&Te.setValue(N,"directionalShadowMap",xn.state.directionalShadowMap,y),xn.state.spotShadowMap.length>0&&Te.setValue(N,"spotShadowMap",xn.state.spotShadowMap,y),xn.state.pointShadowMap.length>0&&Te.setValue(N,"pointShadowMap",xn.state.pointShadowMap,y)),Y.isSkinnedMesh){Te.setOptional(N,Y,"bindMatrix"),Te.setOptional(N,Y,"bindMatrixInverse");const Ce=Y.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Te.setValue(N,"boneTexture",Ce.boneTexture,y))}Y.isBatchedMesh&&(Te.setOptional(N,Y,"batchingTexture"),Te.setValue(N,"batchingTexture",Y._matricesTexture,y),Te.setOptional(N,Y,"batchingIdTexture"),Te.setValue(N,"batchingIdTexture",Y._indirectTexture,y),Te.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Te.setValue(N,"batchingColorTexture",Y._colorsTexture,y));const wi=q.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Ht.update(Y,q,Sn),(Mi||Nt.receiveShadow!==Y.receiveShadow)&&(Nt.receiveShadow=Y.receiveShadow,Te.setValue(N,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Ne.envMapIntensity.value=G.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=Ry()),Mi){if(Te.setValue(N,"toneMappingExposure",C.toneMappingExposure),Nt.needsLights&&sp(Ne,ws),kt&&$.fog===!0&&K.refreshFogUniforms(Ne,kt),K.refreshMaterialUniforms(Ne,$,vt,xt,v.state.transmissionRenderTarget[R.id]),Nt.needsLights&&Nt.lightProbeGrid){const Ce=Nt.lightProbeGrid;Ne.probesSH.value=Ce.texture,Ne.probesMin.value.copy(Ce.boundingBox.min),Ne.probesMax.value.copy(Ce.boundingBox.max),Ne.probesResolution.value.copy(Ce.resolution)}Yo.upload(N,_h(Nt),Ne,y)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yo.upload(N,_h(Nt),Ne,y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Te.setValue(N,"center",Y.center),Te.setValue(N,"modelViewMatrix",Y.modelViewMatrix),Te.setValue(N,"normalMatrix",Y.normalMatrix),Te.setValue(N,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){const Ce=$.uniformsGroups;for(let Si=0,Ss=Ce.length;Si<Ss;Si++){const bh=Ce[Si];nt.update(bh,Sn),nt.bind(bh,Sn)}}return Sn}function sp(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function rp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,G,q){const $=M.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=G,M.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const q=M.get(R);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const op=N.createFramebuffer();this.setRenderTarget=function(R,G=0,q=0){L=R,P=G,B=q;let $=null,Y=!1,kt=!1;if(R){const Pt=M.get(R);if(Pt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(N.FRAMEBUFFER,Pt.__webglFramebuffer),J.copy(R.viewport),tt.copy(R.scissor),ut=R.scissorTest,mt.viewport(J),mt.scissor(tt),mt.setScissorTest(ut),H=-1;return}else if(Pt.__webglFramebuffer===void 0)y.setupRenderTarget(R);else if(Pt.__hasExternalTextures)y.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const oe=R.depthTexture;if(Pt.__boundDepthTexture!==oe){if(oe!==null&&M.has(oe)&&(R.width!==oe.image.width||R.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(R)}}const Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(kt=!0);const Xt=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[G])?$=Xt[G][q]:$=Xt[G],Y=!0):R.samples>0&&y.useMultisampledRTT(R)===!1?$=M.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?$=Xt[q]:$=Xt,J.copy(R.viewport),tt.copy(R.scissor),ut=R.scissorTest}else J.copy(Z).multiplyScalar(vt).floor(),tt.copy(ft).multiplyScalar(vt).floor(),ut=Ct;if(q!==0&&($=op),mt.bindFramebuffer(N.FRAMEBUFFER,$)&&mt.drawBuffers(R,$),mt.viewport(J),mt.scissor(tt),mt.setScissorTest(ut),Y){const Pt=M.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pt.__webglTexture,q)}else if(kt){const Pt=G;for(let Gt=0;Gt<R.textures.length;Gt++){const Xt=M.get(R.textures[Gt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Gt,Xt.__webglTexture,q,Pt)}}else if(R!==null&&q!==0){const Pt=M.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,q)}H=-1},this.readRenderTargetPixels=function(R,G,q,$,Y,kt,Ot,Pt=0){if(!(R&&R.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt){mt.bindFramebuffer(N.FRAMEBUFFER,Gt);try{const Xt=R.textures[Pt],oe=Xt.format,he=Xt.type;if(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pt),!Zt.textureFormatReadable(oe)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(he)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-$&&q>=0&&q<=R.height-Y&&N.readPixels(G,q,$,Y,z.convert(oe),z.convert(he),kt)}finally{const Xt=L!==null?M.get(L).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,G,q,$,Y,kt,Ot,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt)if(G>=0&&G<=R.width-$&&q>=0&&q<=R.height-Y){mt.bindFramebuffer(N.FRAMEBUFFER,Gt);const Xt=R.textures[Pt],oe=Xt.format,he=Xt.type;if(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pt),!Zt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Yt),N.bufferData(N.PIXEL_PACK_BUFFER,kt.byteLength,N.STREAM_READ),N.readPixels(G,q,$,Y,z.convert(oe),z.convert(he),0);const Ee=L!==null?M.get(L).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,Ee);const De=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await x0(N,De,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,kt),N.deleteBuffer(Yt),N.deleteSync(De),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,q=0){const $=Math.pow(2,-q),Y=Math.floor(R.image.width*$),kt=Math.floor(R.image.height*$),Ot=G!==null?G.x:0,Pt=G!==null?G.y:0;y.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Ot,Pt,Y,kt),mt.unbindTexture()};const ap=N.createFramebuffer(),lp=N.createFramebuffer();this.copyTextureToTexture=function(R,G,q=null,$=null,Y=0,kt=0){let Ot,Pt,Gt,Xt,oe,he,Yt,Ee,De;const Le=R.isCompressedTexture?R.mipmaps[kt]:R.image;if(q!==null)Ot=q.max.x-q.min.x,Pt=q.max.y-q.min.y,Gt=q.isBox3?q.max.z-q.min.z:1,Xt=q.min.x,oe=q.min.y,he=q.isBox3?q.min.z:0;else{const Ne=Math.pow(2,-Y);Ot=Math.floor(Le.width*Ne),Pt=Math.floor(Le.height*Ne),R.isDataArrayTexture?Gt=Le.depth:R.isData3DTexture?Gt=Math.floor(Le.depth*Ne):Gt=1,Xt=0,oe=0,he=0}$!==null?(Yt=$.x,Ee=$.y,De=$.z):(Yt=0,Ee=0,De=0);const Ae=z.convert(G.format),Ze=z.convert(G.type);let Nt;G.isData3DTexture?(y.setTexture3D(G,0),Nt=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(y.setTexture2DArray(G,0),Nt=N.TEXTURE_2D_ARRAY):(y.setTexture2D(G,0),Nt=N.TEXTURE_2D),mt.activeTexture(N.TEXTURE0),mt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),mt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),mt.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const xn=mt.getParameter(N.UNPACK_ROW_LENGTH),xe=mt.getParameter(N.UNPACK_IMAGE_HEIGHT),Sn=mt.getParameter(N.UNPACK_SKIP_PIXELS),Gn=mt.getParameter(N.UNPACK_SKIP_ROWS),Mi=mt.getParameter(N.UNPACK_SKIP_IMAGES);mt.pixelStorei(N.UNPACK_ROW_LENGTH,Le.width),mt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Le.height),mt.pixelStorei(N.UNPACK_SKIP_PIXELS,Xt),mt.pixelStorei(N.UNPACK_SKIP_ROWS,oe),mt.pixelStorei(N.UNPACK_SKIP_IMAGES,he);const ws=R.isDataArrayTexture||R.isData3DTexture,Te=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const Ne=M.get(R),wi=M.get(G),Ce=M.get(Ne.__renderTarget),Si=M.get(wi.__renderTarget);mt.bindFramebuffer(N.READ_FRAMEBUFFER,Ce.__webglFramebuffer),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Ss=0;Ss<Gt;Ss++)ws&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,M.get(R).__webglTexture,Y,he+Ss),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,M.get(G).__webglTexture,kt,De+Ss)),N.blitFramebuffer(Xt,oe,Ot,Pt,Yt,Ee,Ot,Pt,N.DEPTH_BUFFER_BIT,N.NEAREST);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||M.has(R)){const Ne=M.get(R),wi=M.get(G);mt.bindFramebuffer(N.READ_FRAMEBUFFER,ap),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,lp);for(let Ce=0;Ce<Gt;Ce++)ws?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.__webglTexture,Y,he+Ce):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,Y),Te?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wi.__webglTexture,kt,De+Ce):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wi.__webglTexture,kt),Y!==0?N.blitFramebuffer(Xt,oe,Ot,Pt,Yt,Ee,Ot,Pt,N.COLOR_BUFFER_BIT,N.NEAREST):Te?N.copyTexSubImage3D(Nt,kt,Yt,Ee,De+Ce,Xt,oe,Ot,Pt):N.copyTexSubImage2D(Nt,kt,Yt,Ee,Xt,oe,Ot,Pt);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Te?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Nt,kt,Yt,Ee,De,Ot,Pt,Gt,Ae,Ze,Le.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Nt,kt,Yt,Ee,De,Ot,Pt,Gt,Ae,Le.data):N.texSubImage3D(Nt,kt,Yt,Ee,De,Ot,Pt,Gt,Ae,Ze,Le):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,kt,Yt,Ee,Ot,Pt,Ae,Ze,Le.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,kt,Yt,Ee,Le.width,Le.height,Ae,Le.data):N.texSubImage2D(N.TEXTURE_2D,kt,Yt,Ee,Ot,Pt,Ae,Ze,Le);mt.pixelStorei(N.UNPACK_ROW_LENGTH,xn),mt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe),mt.pixelStorei(N.UNPACK_SKIP_PIXELS,Sn),mt.pixelStorei(N.UNPACK_SKIP_ROWS,Gn),mt.pixelStorei(N.UNPACK_SKIP_IMAGES,Mi),kt===0&&G.generateMipmaps&&N.generateMipmap(Nt),mt.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?y.setTextureCube(R,0):R.isData3DTexture?y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?y.setTexture2DArray(R,0):y.setTexture2D(R,0),mt.unbindTexture()},this.resetState=function(){P=0,B=0,L=null,mt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const $n=(i,t)=>Math.sign(i)*Math.abs(i)**t,qs=(i,t,e={})=>({...i,a:i.a+t,b:i.b+t,c:i.c+t,...e});function ky(i,t,e,n=Math.PI){const s=new In(1,t,e,0,Math.PI*2,0,n),r=s.attributes.position,o=s.attributes.normal;for(let a=0;a<r.count;a++){const l=r.getX(a),c=r.getY(a),h=r.getZ(a),u=Math.asin(Math.max(-1,Math.min(1,c))),d=Math.atan2(h,l),p=Math.cos(u),x=Math.sin(u),S=Math.cos(d),m=Math.sin(d);r.setXYZ(a,i.a*$n(p,i.e1)*$n(S,i.e2),i.b*$n(x,i.e1),i.c*$n(p,i.e1)*$n(m,i.e2));const f=$n(p,2-i.e1)*$n(S,2-i.e2)/i.a,_=$n(x,2-i.e1)/i.b,E=$n(p,2-i.e1)*$n(m,2-i.e2)/i.c,w=Math.hypot(f,_,E)||1;o.setXYZ(a,f/w,_/w,E/w)}return s}function qr(i,t,e){const n=1-Math.min(1,Math.abs(e/i.b))**(2/i.e1);if(n<=0)return 0;const s=n**(i.e1/i.e2)-Math.min(1,Math.abs(t/i.a))**(2/i.e2);return s<=0?0:i.c*s**(i.e2/2)}const Fy=(i,t,e)=>-Math.atan((qr(i,t+.02,e)-qr(i,t-.02,e))/.04),Ly=(i,t,e)=>Math.atan((qr(i,t,e+.02)-qr(i,t,e-.02))/.04),th=["none","clouds","hearts","hibiscus","plaid","stars"],Iy=[{seg:20,rings:14,round:16},{seg:12,rings:8,round:7},{seg:8,rings:6,round:6}],Dy=new Qt,Zd=new Vi;class Ny{constructor(t,e,n){I(this,"items",[]);this.d=t,this.rig=e,this.lod=n}add(t,e,n,s=[0,0,0],r=[0,0,0],o=[1,1,1]){return Zd.setFromEuler(new Hi(...r)),t.applyMatrix4(Dy.compose(new D(...s),Zd,new D(...o))),this.items.push({geo:t,bone:e,paint:n}),t}blob(t,e,n,s,r,o){return this.add(ky(t,this.lod.seg,this.lod.rings,o),e,n,s,r)}sphere(t,e,n,s,r){return this.add(new In(t,Math.max(6,this.lod.seg-4),Math.max(4,this.lod.rings-2)),e,n,s,void 0,r)}cyl(t,e,n,s,r,o,a,l=!1){return this.add(new lr(t,e,n,this.lod.round,1,l),s,r,o,a)}cone(t,e,n,s,r,o,a){return this.add(new fa(t,e,this.lod.round),n,s,r,o,a)}torus(t,e,n,s,r,o,a=Math.PI*2){return this.add(new Zr(t,e,Math.max(4,this.lod.round/2),this.lod.round*2,a),n,s,r,o)}box(t,e,n,s,r,o,a){return this.add(new cn(t,e,n),s,r,o,a)}tube(t,e,n,s,r){const o=r(t.map(a=>new D(...a)));return this.add(new Qc(o,this.lod.round*2,e,Math.max(5,this.lod.round/2)),n,s)}onFace(t,e,n,s,r,o,a,l=0,c=0){const h=qr(t,o,a)+l;return this.add(n,s,{outline:0,...r},[e[0]+o,e[1]+a,e[2]+h],[-Ly(t,o,a),Fy(t,o,a),c])}}const Jd=i=>new ee(i),Yn=128;function Uy(){const i=document.createElement("canvas");i.width=Yn*th.length,i.height=Yn;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,i.width,i.height),t.fillStyle="#fff",t.strokeStyle="#fff";const e=(r,o)=>{t.save(),t.beginPath(),t.rect(r*Yn,0,Yn,Yn),t.clip(),t.translate(r*Yn,0),o(),t.restore()},n=(r,o,a)=>{t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill()};e(1,()=>{for(const[r,o]of[[30,40],[95,95]])n(r,o,14),n(r+16,o-6,16),n(r+32,o,13),t.fillRect(r,o,32,12)}),e(2,()=>{const r=(o,a,l)=>{t.beginPath(),t.moveTo(o,a+l*.9),t.bezierCurveTo(o-l*1.2,a+l*.1,o-l*.6,a-l*.8,o,a-l*.2),t.bezierCurveTo(o+l*.6,a-l*.8,o+l*1.2,a+l*.1,o,a+l*.9),t.fill()};r(32,36,16),r(96,96,16)}),e(3,()=>{for(const[r,o]of[[36,38],[98,94]])for(let a=0;a<5;a++)n(r+Math.cos(a/5*Math.PI*2)*13,o+Math.sin(a/5*Math.PI*2)*13,10)}),e(4,()=>{t.globalAlpha=.6;for(const r of[16,80])t.fillRect(r,0,22,Yn),t.fillRect(0,r,Yn,22);t.globalAlpha=1;for(const r of[24,88])t.fillRect(r,0,5,Yn),t.fillRect(0,r,Yn,5)}),e(5,()=>{const r=(o,a,l)=>{t.beginPath();for(let c=0;c<10;c++){const h=c/10*Math.PI*2-Math.PI/2,u=c%2?l*.45:l;t.lineTo(o+Math.cos(h)*u,a+Math.sin(h)*u)}t.fill()};r(32,36,14),r(96,96,12),r(90,24,6)});const s=new Kr(i);return s.colorSpace=ui,s.minFilter=s.magFilter=je,s.generateMipmaps=!1,s}let Zi=null;function bi(){return Zi||(Zi=new ua(new Uint8Array([140,191,230,255]),4,1,ha),Zi.minFilter=Zi.magFilter=Ge,Zi.needsUpdate=!0,Zi)}let dl=null,Qd=null;function Oy(){if(dl)return dl;Qd=Uy();const i=new yi({color:16777215,vertexColors:!0,gradientMap:bi()});return i.onBeforeCompile=t=>{t.uniforms.uPatAtlas={value:Qd},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
          vec2 tuv = vec2((vPat.x + fract(vPatUv.x * vPat.y)) / ${th.length.toFixed(1)}, fract(vPatUv.y * vPat.y * 0.5));
          float mask = texture2D(uPatAtlas, tuv).r;
          diffuseColor.rgb = mix(diffuseColor.rgb, vColor2, mask);
        }`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, diffuseColor.rgb, vPat.z);`)},i.customProgramCacheKey=()=>"peepl-char-v1",dl=i,i}const By=`
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
}`,zy=`
uniform vec3 uColor;
void main() { gl_FragColor = vec4(uColor, 1.0); }`,Sc={uWidthPx:{value:2},uViewport:{value:new wt(1920,1080)},uColor:{value:new ee(1118481).convertLinearToSRGB()}};let Co=null;function Hy(){return Co||(Co=new hn({uniforms:Sc,vertexShader:By,fragmentShader:zy,side:Ke}),Co)}let $e=null,eh=!1;const tu=new wt;function qo(){const i=navigator.deviceMemory;return Mn||eh||i!==void 0&&i<=4}function eu(){const i=navigator.deviceMemory;return Math.min(devicePixelRatio||1,eh||i!==void 0&&i<=4?1.5:2)}function Ec(){$e&&($e.setPixelRatio(eu()),$e.setSize(innerWidth,innerHeight,!1),$e.getDrawingBufferSize(tu),Sc.uViewport.value.copy(tu),Sc.uWidthPx.value=Math.min(3,Math.max(1.5,2*eu()*Math.max(.75,la()))))}function sr(i={}){if($e)return $e;eh=!!i.lowgpu;const t=document.getElementById("gl");return $e=new Py({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:!1}),$e.outputColorSpace=qe,$e.toneMapping=Hn,$e.setClearColor(0,0),$e.shadowMap.type=Wu,$e.info.autoReset=!1,addEventListener("resize",Ec),Ec(),$e}function rr(i){const t=document.getElementById("gl");t.style.display=i?"block":"none",t.style.pointerEvents=i?"auto":"none";const e=document.getElementById("hud3d");e.style.background=i&&qo()?"radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(17,17,17,0.22))":"",i&&Ec()}const ia={calls:0,tris:0};function nh(){$e&&(ia.calls=$e.info.render.calls,ia.tris=$e.info.render.triangles,$e.info.reset())}function Vy(i){const{flow:t,loop:e,store:n,autoplay:s}=i;return{ready:i.ready,state:()=>{var r;return{screen:t.id??"S0",t:t.t,sim:((r=Tt.sim)==null?void 0:r.call(Tt))??{day:1,time:"13:00",speed:n.data.settings.speed,tier:0,km:0,radius:0},trust:Number(n.data.progress.trust??0),released:!!n.data.progress.released,handshake:!!n.data.progress.handshake,met:{},settings:{...n.data.settings},rigOk:kn.rigOk}},go(r,o){return Gu(r)?(kn.sub=(o==null?void 0:o.sub)??null,t.go(r)):Promise.reject(new Error(`unknown screen ${r}`))},replay:()=>{var r;(r=Tt.replaySetpiece)!=null&&r.call(Tt)||t.replay()},advance(r,o=!0){return e.advance(r,o),Promise.resolve()},pause:()=>e.paused=!0,resume:()=>e.paused=!1,tap:()=>{s.tap()||t.input({type:"tap"})},choose:r=>{var o,a;return(a=(o=t.current)==null?void 0:o.choose)==null?void 0:a.call(o,r)},release(){Object.assign(n.data.progress,{trust:100,released:!0}),n.save(),t.go("S6")},set(r,o){var a;n.setSetting(r,o),r==="outline"&&((a=Tt.outline)==null||a.call(Tt,o!=="none"))},reset(){n.reset();const r=new URLSearchParams(location.search);r.delete("screen"),r.delete("t");const o=r.toString();location.replace(`${location.pathname}${o?`?${o}`:""}`)},stats:()=>({fps:e.fps,calls:ia.calls,tris:ia.tris,textures:0,chars:kn.chars,lod:kn.lod}),cast:r=>{var o;return(o=Tt.cast)==null?void 0:o.call(Tt,r)},shape:(r,o)=>{var a;return(a=Tt.shape)==null?void 0:a.call(Tt,r,o)},viewer:Tt,setTime:(r,o)=>{var a;return(a=Tt.setTime)==null?void 0:a.call(Tt,r,o)},tick:r=>{var o;return(o=Tt.tick)==null?void 0:o.call(Tt,r)},setSpeed:r=>n.setSetting("speed",r),setTier:r=>{var o;return(o=Tt.setTier)==null?void 0:o.call(Tt,r)},walk:r=>{var o;return(o=Tt.walk)==null?void 0:o.call(Tt,r)},moveYou:(r,o)=>{var a;return(a=Tt.moveYou)==null?void 0:a.call(Tt,r,o)},shot:r=>{var o;return(o=Tt.shot)==null?void 0:o.call(Tt,r)},follow:r=>{var o;return(o=Tt.follow)==null?void 0:o.call(Tt,r)},legibility:()=>{var r;return((r=Tt.legibility)==null?void 0:r.call(Tt))??{}},dropEvent:r=>{var o;return(o=Tt.dropEvent)==null?void 0:o.call(Tt,r)},mirror:r=>{var o;return((o=Tt.mirror)==null?void 0:o.call(Tt,r))??""}}}const Gy=[0,1,4,16,.25],Wy=[],Xy=`
#debug{height:40px;font-family:var(--face-pixel);font-size:22px;color:var(--white);pointer-events:none}
#debug .strip{display:flex;align-items:center;gap:8px;height:40px;padding:0 10px;background:var(--ink);pointer-events:auto;overflow-x:auto;white-space:nowrap}
#debug .strip > *{flex:none}
#debug button,#debug select{font:inherit;color:var(--white);background:var(--ink);border:2px solid var(--white);border-radius:999px;padding:1px 12px 3px;height:30px;line-height:22px}
#debug button[aria-pressed=true]{background:var(--white);color:var(--ink)}
#debug button:disabled{opacity:.4;cursor:default}
#debug .fps{min-width:70px}
#debug .collapsed{width:40px;height:40px;display:grid;place-items:center;background:var(--ink);pointer-events:auto;border:0;border-radius:0;padding:0}
`;function $y(i,t,e,n,s){const r=V("div",{id:"debug"});r.append(V("style",{},Xy));const o=V("div",{class:"strip",role:"toolbar","aria-label":"director bar"}),a=V("button",{class:"collapsed","aria-label":"open director bar",title:"director bar (`)"});a.append(V("span",{style:"display:block;width:10px;height:18px;background:var(--white)"})),r.append(o,a),document.body.append(r);const l=jo.map(b=>b.id),c=b=>{const C=l.indexOf(i.state().screen);i.go(l[(C+b+l.length)%l.length])},h=V("select",{"aria-label":"screen"});for(const b of jo)if(h.append(V("option",{value:b.id},`${b.id} ${b.name}`)),b.id==="S8")for(const C of["contact","cafe","end"])h.append(V("option",{value:`S8:${C}`},`S8 · ${C}`));h.addEventListener("change",()=>{const[b,C]=h.value.split(":");i.go(b,C?{sub:C}:void 0)});const u=(b,C,T)=>{const F=V("button",{title:T});return F.textContent=b,F.addEventListener("click",C),F},d=(b,C,T)=>{const F=u(b,()=>{T(!C()),g()});return p.push([F,C]),F},p=[],x=V("select",{"aria-label":"speed"});for(const b of Gy)x.append(V("option",{value:b},b===.25?"ui 0.25x":b===0?"pause":`${b}x`));x.addEventListener("change",()=>i.set("speed",Number(x.value)));const S=V("select",{"aria-label":"cast"});for(const b of n)S.append(V("option",{value:b},b));S.addEventListener("change",()=>i.cast(S.value));const m=u("--:--",()=>i.tick(3600),"sim time: +1 h (S8)"),f=(b,C,T,F)=>{const P=V("select",{"aria-label":b});for(const B of C)P.append(V("option",{value:B},`${b} ${B}`));return P.value=F(),P.addEventListener("change",()=>T(P.value)),P},_=f("tod",["auto","day","dusk"],b=>i.set("tod",b),()=>t.data.settings.tod),E=f("gfx",["auto","16bit","hd"],b=>i.set("gfx",b),()=>t.data.settings.gfx),w=u("walk +0.5 km",()=>i.walk(.5),"S8 only"),k=V("select",{"aria-label":"drop event"});k.append(V("option",{value:""},"event"));for(const b of s)k.append(V("option",{value:b},b));k.addEventListener("change",()=>{k.value&&i.dropEvent(k.value),k.value=""});const v=V("span",{class:"fps"});o.append(u("prev",()=>c(-1),"previous screen"),h,u("next",()=>c(1),"next screen"),u("replay",()=>i.replay()),d("auto",()=>t.data.settings.auto,b=>i.set("auto",b)),x,d("outline",()=>t.data.settings.outline!=="none",b=>i.set("outline",b?"ink":"none")),S,m,_,E,w,k,...Wy.map(([b,C])=>{const T=u(`${b} ${C}`,()=>{},`arrives in ${C}`);return T.disabled=!0,T}),d("reduce motion",()=>t.data.settings.reduceMotion,b=>i.set("reduceMotion",b)),v,u("reset",()=>{confirm(e)&&i.reset()}),u("×",()=>A(!0),"collapse (`)"));const A=b=>{t.setSetting("debugCollapsed",b),o.style.display=b?"none":"flex",a.style.display=b?"grid":"none"};a.addEventListener("click",()=>A(!1)),addEventListener("keydown",b=>{b.key==="`"&&A(!t.data.settings.debugCollapsed)}),A(t.data.settings.debugCollapsed);function g(){for(const[b,C]of p)b.setAttribute("aria-pressed",String(C()))}return g(),{update(){const b=i.state();h.value!==b.screen&&(h.value=b.screen),Number(x.value)!==t.data.settings.speed&&(x.value=String(t.data.settings.speed)),v.textContent=`${Math.round(i.stats().fps)} fps`,m.textContent=b.screen==="S8"?b.sim.time:"--:--"}}}class Yy{constructor(){I(this,"el",document.getElementById("field"));I(this,"dots",!1)}set(t,e){this.el.style.backgroundColor=`var(--${t})`,this.dots=e,this.el.style.backgroundImage=e?"radial-gradient(circle, var(--lit-dots) 3px, transparent 3.6px)":"none",this.el.style.backgroundSize=this.el.style.backgroundPosition=""}glow(t,e=0){this.dots=!1;const n=`color-mix(in srgb, var(--purple), var(--pink) ${Math.round(e*45)}%)`;this.el.style.backgroundImage=`radial-gradient(ellipse at 50% 55%, color-mix(in srgb, ${n} ${Math.round(t*100)}%, transparent), transparent 70%)`}update(t,e){if(!this.dots)return;const n=la(),[s,r]=e?[0,0]:yp(t);this.el.style.backgroundSize=`${48*n}px ${48*n}px`,this.el.style.backgroundPosition=`${s*n}px ${r*n}px`}}const qy=.18;class jy{constructor(){I(this,"el");I(this,"alpha",0);I(this,"target",0);I(this,"hideAt",1/0);I(this,"t",0);this.el=V("div",{class:"caption pixel",style:["position:absolute;left:50%;bottom:36px;transform:translateX(-50%);width:max-content;max-width:84%;text-align:center","background:var(--ink);color:var(--white);font-size:50px;padding:10px 26px 12px;border-radius:999px;opacity:0"].join(";")}),ar("captions").append(this.el)}show(t,e){this.el.textContent=t,this.target=1,this.hideAt=e===void 0?1/0:this.t+e}hide(){this.target=0}clear(){this.target=0,this.alpha=0,this.render()}get visible(){return this.alpha>0}update(t){this.t+=t,this.t>=this.hideAt&&(this.target=0);const e=t/qy;this.alpha=this.target>this.alpha?Bi(this.alpha+e):Math.max(this.target,this.alpha-e),this.render()}render(){zt(this.el,{opacity:String(this.alpha),visibility:this.alpha>0?"visible":"hidden"})}}class Ms{constructor(t,e,n){I(this,"shown",null);this.captions=t,this.texts=e,this.cues=n}update(t){const e=this.cues.find(s=>t>=s.at&&t<(s.until??1/0))??null,n=(e==null?void 0:e.key)??null;n!==this.shown&&(this.shown=n,n?this.captions.show(this.texts[n]??""):this.captions.hide())}}const nu="✓ ";class Ky{constructor(){I(this,"el",null);I(this,"t",0);I(this,"until",0)}show(t,e=3){var r;(r=this.el)==null||r.remove();const n=t.startsWith(nu),s=n?t.slice(nu.length):t;this.el=gn(n?[Js("check",34,"var(--yellow)"),s]:[s],{size:40,color:"yellow"}),this.el.classList.add("toast"),this.el.setAttribute("role","status"),this.el.setAttribute("aria-label",s),zt(this.el,{position:"absolute",left:We(1380,60),top:150,transformOrigin:"50% 0"}),ar("toast").append(this.el),this.t=0,this.until=e,this.update(0)}hide(){var t;(t=this.el)==null||t.remove(),this.el=null}update(t){if(this.el){if(this.t+=t,this.t>=this.until){this.hide();return}this.el.style.transform=`scale(${le(this.t,0,.4,se.pop)})`}}}const Zy=.5,Jy=.5;function Qy(i){const t=Zs(i);let e,n,s=0,r=!1;const o=t.field==="ink"||t.field==="night";return{id:i,mount(a,l){e=a,n=V("div",{class:"placeholder",style:`position:absolute;left:0;top:0;width:1920px;height:1080px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;color:var(--${o?"white":"ink"})`},V("div",{class:"display",style:"font-size:220px"},i),V("div",{class:"pixel",style:"font-size:54px"},t.name)),l.append(n)},enter(){s=0,r=!1,this.update(0,0)},update(a,l){s=l,n.style.transform=`scale(${le(s,0,.45,se.pop)})`,!r&&t.caption&&s>=Jy&&(r=!0,e.captions.show(e.copy.captions[t.caption]??""))},landed:()=>s>=Zy,onInput(a){},exit(){},unmount(){n.remove()},seek(a){this.update(0,a)}}}const Jr=i=>`/peepls-demo/${i}`;class va{constructor(t,e={}){I(this,"el");I(this,"img");I(this,"hgt",0);this.spec=t,this.img=V("img",{src:Jr(t.body),alt:"",draggable:"false",style:"display:block;width:100%;height:100%"}),this.el=V("div",{class:"sprite",style:`position:absolute;transform-origin:${t.footX*100}% 100%`,...e},this.img)}get height(){return this.hgt}place(t,e,n){this.hgt=n;const s=n*this.spec.aspect;return zt(this.el,{left:t-s*this.spec.footX,top:e-n,width:s,height:n}),this}pose(t){const e=t.phase??0,n=t.walk??0,s=-Math.abs(Math.sin(t.t*10+e))*this.hgt*.03*n,r=Math.sin(t.t*10+e)*3*n;zt(this.el,{transform:`translateY(${s-(t.hop??0)}px) rotate(${r+(t.rot??0)}deg) scale(${t.scale??1}) scaleY(${_p(t.t,e)*(t.squash??1)})`,opacity:String(t.opacity??1)})}}const t1=2,e1=.25;class n1{constructor(t,e,n,s=0){I(this,"el");this.at=n;const r=V("div",{style:"position:absolute;left:50%;bottom:-14px;width:20px;height:20px;margin-left:-10px;background:var(--white);border-right:5px solid var(--ink);border-bottom:5px solid var(--ink);transform:rotate(45deg)"}),o=V("div",{class:"pixel",style:`position:relative;background:var(--white);border:5px solid var(--ink);border-radius:16px;padding:6px 16px 8px;font-size:${Math.round(e*.075)}px;color:var(--ink);white-space:nowrap;margin-bottom:22px`},V("span",{},t),r);this.el=V("div",{class:"life-tag",style:`position:absolute;left:50%;bottom:${100+s*100}%;transform-origin:50% 100%`},o)}update(t,e){const[n,s]=ke(t,this.at,.3,e),r=1-le(t,this.at+t1,e1,se.enter);zt(this.el,{transform:`translateX(-50%) scale(${n})`,opacity:String(s*r),visibility:s*r>0?"visible":"hidden"})}}const Ac="stroke:var(--ink);stroke-width:9;stroke-linejoin:round;stroke-linecap:round",Be=(i,t="")=>`fill:var(--${i});${Ac}${t}`,fe=(i,t,e,...n)=>ae(i,{...t,style:e},...n),yn=(i,t,e)=>fe("path",{d:i},`fill:none;stroke:var(--${t});stroke-width:${e};stroke-linecap:round`);function i1(i,t){const e=ae("g",{});let n=()=>{};switch(i){case"coffee":{const r=[0,1].map(()=>yn("","ink",6));e.append(...r,fe("path",{d:"M 338 652 L 408 652 L 399 746 L 347 746 Z"},Be("white")),fe("rect",{x:342,y:680,width:62,height:30},Be("pink",";stroke-width:6")),fe("rect",{x:330,y:630,width:86,height:24,rx:9},Be("ink"))),n=o=>r.forEach((a,l)=>{const c=(o*.7+l*.5+t)%1;a.setAttribute("d",`M ${356+l*26} ${612-c*70} q 12 -16 0 -32 q -12 -16 0 -32`),a.style.opacity=String(Math.sin(c*Math.PI)*.8)});break}case"briefcase":{const r=ae("g",{},fe("path",{d:"M 40 756 q 0 -38 28 -38 q 28 0 28 38"},`fill:none;${Ac}`),fe("rect",{x:-4,y:752,width:144,height:100,rx:12},Be("brown")),yn("M -4 790 L 140 790","ink",6),fe("rect",{x:54,y:744,width:28,height:18,rx:4},Be("yellow",";stroke-width:6")));e.append(r),n=(o,a)=>r.setAttribute("transform",`rotate(${Math.sin(o*10+t)*5*a} 68 722)`);break}case"balloon":{const r=ae("g",{},fe("path",{d:"M 362 736 C 430 600, 380 420, 480 232"},"fill:none;stroke:var(--ink);stroke-width:5"),fe("ellipse",{cx:480,cy:140,rx:66,ry:80},Be("pink")),fe("path",{d:"M 468 226 L 492 226 L 480 208 Z"},Be("pink",";stroke-width:6")),fe("ellipse",{cx:456,cy:104,rx:13,ry:22},"fill:var(--lit-white-85)"));e.append(r),n=o=>r.setAttribute("transform",`rotate(${Math.sin(o*1.8+t)*6} 362 736)`);break}case"flowers":e.append(yn("M 344 640 L 350 560 M 380 640 L 388 534 M 408 640 L 426 570","lit-stem",9),fe("circle",{cx:346,cy:556,r:30},Be("pink")),fe("circle",{cx:346,cy:556,r:9},"fill:var(--ink)"),fe("circle",{cx:388,cy:530,r:32},Be("yellow")),fe("circle",{cx:388,cy:530,r:9},"fill:var(--ink)"),fe("circle",{cx:428,cy:566,r:28},Be("cyan")),fe("circle",{cx:428,cy:566,r:8},"fill:var(--ink)"),fe("path",{d:"M 316 630 L 430 630 L 376 790 Z"},Be("cream")));break;case"bag":e.append(fe("rect",{x:18,y:628,width:36,height:140,rx:18,transform:"rotate(-16 36 700)"},Be("lit-baguette")),yn("M 76 616 q -18 30 6 64 M 96 620 q 14 30 -8 62","lit-stem",9),fe("path",{d:"M 40 742 q 26 -40 52 0"},`fill:none;${Ac}`),fe("rect",{x:-20,y:730,width:170,height:150,rx:8},Be("lit-cardboard")),yn("M -20 762 L 150 762","ink",5));break;case"umbrella":{const r=ae("g",{},yn("M 362 740 L 300 -40","ink",10),yn("M 362 740 q 4 34 -24 34","ink",10),fe("path",{d:"M 50 -40 A 250 250 0 0 1 550 -40 Q 487 -76 425 -40 Q 362 -76 300 -40 Q 237 -76 175 -40 Q 112 -76 50 -40 Z"},Be("cyan")),fe("path",{d:"M 300 -290 Q 240 -160 175 -40 M 300 -290 Q 360 -160 425 -40"},"fill:none;stroke:var(--ink);stroke-width:6"),fe("circle",{cx:300,cy:-296,r:11},"fill:var(--ink)"));e.append(r),n=o=>r.setAttribute("transform",`rotate(${Math.sin(o*2+t)*2} 362 736)`);break}case"headphones":{const r=ae("g",{},fe("path",{d:"M 0 40 L 0 -10 L 30 -18 L 30 30"},"fill:none;stroke:var(--ink);stroke-width:7"),fe("circle",{cx:-8,cy:40,r:11},"fill:var(--ink)"),fe("circle",{cx:22,cy:30,r:11},"fill:var(--ink)"));e.append(yn("M 110 150 C 96 -50, 336 -50, 322 150","ink",24),yn("M 110 150 C 96 -50, 336 -50, 322 150","pink",10),fe("rect",{x:84,y:108,width:52,height:92,rx:20},Be("pink")),fe("rect",{x:296,y:108,width:52,height:92,rx:20},Be("pink")),r),n=o=>{const a=(o*.9+t)%1;r.setAttribute("transform",`translate(${390+a*40} ${60-a*120})`),r.style.opacity=String(Math.sin(a*Math.PI))};break}case"dog":{const r=yn("","ink",12),o=ae("g",{},yn("M 476 975 q -34 -20 -26 -64","ink",12));e.append(yn("M 362 742 Q 500 860 618 930","red",6),fe("ellipse",{cx:560,cy:1080,rx:110,ry:12},"fill:var(--ink)"),r,o,fe("ellipse",{cx:560,cy:995,rx:88,ry:48},Be("white")),fe("circle",{cx:650,cy:930,r:46},Be("white")),fe("ellipse",{cx:690,cy:950,rx:26,ry:18},Be("white")),fe("circle",{cx:712,cy:942,r:9},"fill:var(--ink)"),fe("circle",{cx:660,cy:918,r:6},"fill:var(--ink)"),fe("path",{d:"M 626 900 q -34 8 -28 56 q 24 -4 34 -36 Z"},"fill:var(--ink)"),yn("M 612 956 q 20 16 44 8","red",10)),n=(a,l)=>{const c=Math.sin(a*12+t)*10*l;r.setAttribute("d",`M 505 1030 L ${500+c} 1076 M 532 1034 L ${536-c} 1078 M 590 1034 L ${586+c} 1078 M 618 1030 L ${622-c} 1076`),o.setAttribute("transform",`rotate(${Math.sin(a*14)*14} 476 975)`)};break}}return{el:ae("svg",{viewBox:"0 0 425 1089",style:"position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none"},e),update:n}}function sa(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Nf(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Xs=(...i)=>Nf(sa(i.join("|"))),Oi=i=>{const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},ul={dur:6.4,px:900,parallax:.55},qn={from:6.5,to:7.55,cx:560,cy:560},s1=7.7,r1=8.5,o1=8.95,a1=9.6,iu=9.4,su=[{y:880,h:400},{y:1010,h:520}],ru=[150,1150,2150,3150],Ro=[{prop:"coffee",lane:0,x0:900,v:-100,ph:.8},{prop:"headphones",lane:0,x0:1500,v:-110,ph:.3},{prop:"dog",lane:1,x0:1150,v:120,ph:2.6},{prop:"umbrella",lane:0,x0:2300,v:-90,ph:1.1,lift:.3},{prop:"flowers",lane:1,x0:1750,v:150,ph:.2},{prop:"bag",lane:0,x0:1900,v:-120,ph:2.2},{prop:"briefcase",lane:0,x0:2700,v:-100,ph:1.7}],An={x0:620,v:150,stopAt:5.6,ph:.4,h:520,y:1010};function l1(i){const t=Xs(i,"crowd","buildings"),e=["cream","pink","white","cyan"];let n=-220;return Array.from({length:9},(s,r)=>{const o=260+Math.round(t()*180),a=460+Math.round(t()*260),l=Math.max(1,Math.floor((o-40)/100)),c=Math.max(1,Math.floor((a-120)/116)),h=Array.from({length:l*c},(d,p)=>V("div",{style:`border:5px solid var(--ink);background:var(--${(r+p)%3?"white":"yellow"})`})),u=V("div",{style:[`position:absolute;left:${n}px;top:${820-a}px;width:${o}px;height:${a+20}px;background:var(--${e[r%4]})`,`border:6px solid var(--ink);display:grid;grid-template-columns:repeat(${l},56px);grid-auto-rows:72px`,"justify-content:space-evenly;align-content:start;row-gap:44px;padding-top:44px"].join(";")},...h);return n+=o+30,u})}function c1(){let i,t=!1,e=0,n,s,r,o,a=[],l=[],c,h,u,d=[],p,x,S,m;const f=(_,E,w,k,v,A,g,b=0)=>{const C=new va(n,{class:"sprite joe"}).place(0,_.y,_.h),T=i1(E,g),F=new n1(w,_.h,k,b);return C.el.append(T.el,F.el),{sprite:C,prop:T,tag:F,x0:v,v:A,ph:g}};return{id:"S0",mount(_,E){i=_;const w=_.copy.S0;n=_.data.cast.cast.find(b=>b.id==="joe").sprite,m=new Ms(_.captions,_.copy.captions,[{key:"crowd1",at:.5,until:3.4},{key:"crowd2",at:3.6,until:6.5}]),r=V("div",{class:"city",style:"position:absolute;inset:0"},...l1(_.params.seed)),o=V("div",{style:`position:absolute;left:0;top:820px;width:1920px;height:${We(260,700)}px;background-color:var(--cream);border-top:6px solid var(--ink);background-image:repeating-linear-gradient(90deg,var(--lit-joint) 0 5px,transparent 5px 180px)`}),l=Ro.map((b,C)=>{const[T,F]=w.tags[C];return f(su[b.lane],b.prop,T,F,b.x0,b.v,b.ph,b.lift)});const[k,v]=w.tags[7];c=f({y:An.y,h:An.h},"balloon",k,v,An.x0,An.v,An.ph),c.sprite.el.classList.add("hero"),a=ru.map(()=>V("div",{style:"position:absolute;top:0;left:0"},V("div",{style:"position:absolute;left:-8px;top:360px;width:16px;height:545px;background:var(--ink)"}),V("div",{style:"position:absolute;left:-46px;top:326px;width:92px;height:46px;border-radius:24px;background:var(--yellow);border:6px solid var(--ink)"}))),s=V("div",{class:"s0-crowd",style:`position:absolute;left:0;top:0;width:1920px;height:${We(1080,1500)}px;background:var(--yellow);overflow:hidden`},r,o,...l.filter((b,C)=>Ro[C].lane===0).map(b=>b.sprite.el),...a,...l.filter((b,C)=>Ro[C].lane===1).map(b=>b.sprite.el),c.sprite.el),h=ae("path",{"fill-rule":"evenodd",style:"fill:var(--ink)"}),u=ae("svg",{width:1920,height:1080,style:"position:absolute;inset:0;overflow:visible"},h),d=[...w.wordmark].map(b=>V("span",{class:"display",style:`display:inline-block;font-size:${We(220,180)}px;line-height:0.9;color:var(--yellow);-webkit-text-stroke:7px var(--ink);paint-order:stroke fill;text-shadow:0 11px 0 var(--pink)`},b));const A=V("div",{id:"s0-wordmark",style:"display:flex;gap:2px"},...d);p=V("div",{class:"pixel s0-line1",style:"font-size:64px;color:var(--white);margin-top:30px"},w.line1),x=V("div",{class:"pixel s0-line2",style:"font-size:64px;color:var(--yellow)"},w.line2),S=V("div",{class:"pixel s0-sub",style:"font-size:36px;color:var(--lit-white-60)"},w.subline);const g=V("div",{class:"s0-title",style:"position:absolute;left:880px;width:900px;top:300px;display:flex;flex-direction:column;align-items:center;gap:22px"},A,p,x,S);Re(g,{left:90,top:1220}),vs(E,qn.cx,qn.cy,1.5,540,540),E.append(s,u,g)},enter(){t=i.flow.reduced,this.update(0,0)},update(_,E){e=E;const w=t?-900:-le(e,0,ul.dur,se.draw)*ul.px;r.style.transform=`translateX(${w*ul.parallax}px)`,o.style.backgroundPosition=`${w}px 0`,a.forEach((b,C)=>{const T=ru[C]+w;b.style.display=T<-100||T>2020?"none":"block",b.style.transform=`translateX(${T}px)`}),l.forEach((b,C)=>{const T=su[Ro[C].lane],F=b.x0+b.v*e+w,P=F>-500&&F<2400;b.sprite.el.style.display=P?"block":"none",b.sprite.place(F,T.y,T.h).pose({t:e,phase:b.ph*3,walk:1}),b.prop.update(e,1),b.tag.update(e,t)});const k=e<5.3?1:Math.min(1,Math.max(0,(An.stopAt-e)/.3)),v=An.x0+An.v*Math.min(Math.max(e,0),An.stopAt)+w,A=t?0:Ks(e,6.1,30,.38)+Ks(e,8.3,46,.45);c.sprite.place(v,An.y,An.h).pose({t:e,phase:An.ph,walk:k,hop:A}),c.prop.update(e,k),c.tag.update(e,t);const g=t?1:14-13*le(e,qn.from,qn.to-qn.from,se.draw);u.style.display=!t&&g>13.5?"none":"block",u.style.opacity=t?String(le(e,qn.from,.25,se.enter)):"1",h.setAttribute("d",h1(qn.cx,qn.cy,g)),d.forEach((b,C)=>{const T=s1+C*.08,[F,P]=ke(e,T,.5,t),B=t?0:-18+18*le(e,T,.5,se.pop),L=t?0:Math.sin(e*3+C*.7)*6;zt(b,{transform:`translateY(${L}px) rotate(${B}deg) scale(${F})`,opacity:String(P)})});for(const[b,C]of[[p,r1],[x,o1],[S,a1]]){const[T,F]=ke(e,C,.4,t);zt(b,{transform:`scale(${T})`,opacity:String(F)})}m.update(e)},landed:()=>e>=iu,onInput(_){(_.type==="tap"||_.type==="key"&&(_.key===" "||_.key==="Enter"))&&(e<qn.from?i.flow.seek(qn.from):e>=iu&&i.flow.next())},exit(){},unmount(){},seek(_){this.update(0,_)}}}function h1(i,t,e){const n=150*e,s=70*e,r=130*e,o=t+Math.sqrt(n*n-s*s),a=t+420*e;return`M -2000 -2000 H 4000 V 3000 H -2000 Z M ${i-s} ${o} A ${n} ${n} 0 1 1 ${i+s} ${o} L ${i+r} ${a} L ${i-r} ${a} Z`}class ih{constructor(t){I(this,"el");I(this,"screen");I(this,"bezel");this.bezel=V("div",{"data-morph":"bezel",style:"position:absolute;inset:0;border-radius:72px;background:var(--ink);box-shadow:0 30px 60px var(--lit-phone-shadow)"}),this.screen=V("div",{"data-morph":"screen",style:"position:absolute;left:16px;top:16px;width:488px;height:948px;border-radius:56px;background:var(--cream);overflow:hidden"},V("div",{class:"pixel",style:"position:absolute;left:24px;top:18px;font-size:26px;color:var(--ink)"},t),V("div",{style:"position:absolute;left:174px;top:14px;width:140px;height:30px;border-radius:999px;background:var(--ink)"}),V("div",{style:"position:absolute;right:24px;top:20px;width:36px;height:18px;border-radius:5px;border:3px solid var(--ink);padding:2px"},V("div",{style:"width:70%;height:100%;background:var(--ink)"}))),this.el=V("div",{class:"phone",style:"position:absolute;left:700px;top:50px;width:520px;height:980px;transform-origin:260px 490px"},this.bezel,this.screen)}set(t,e){zt(this.el,{transform:`translateY(${t}px) scale(${e})`})}}class d1{constructor(t,e,n){I(this,"el");I(this,"on",!1);I(this,"onAt",-1/0);this.label=t,this.colour=e,this.popAt=n,this.el=V("button",{class:"chip pixel","aria-pressed":"false",style:"position:absolute;width:208px;height:62px;border-radius:999px;border:5px solid var(--ink);background:var(--white);font-size:36px;color:var(--ink);display:flex;align-items:center;justify-content:center;pointer-events:auto"}),this.el.textContent=t}set(t,e){this.on=t,t&&(this.onAt=e),this.el.setAttribute("aria-pressed",String(t)),this.el.style.background=t?`var(--${this.colour})`:"var(--white)"}update(t,e){const[n,s]=ke(t,this.popAt,.4,e),r=this.on&&!e?1+.08*Math.exp(-(t-this.onAt)*8):1;zt(this.el,{transform:`scale(${n*r})`,opacity:String(s)})}}class u1{constructor(t,e,n,s){I(this,"el");I(this,"track");I(this,"knob");I(this,"value");this.value=n,this.track=V("div",{style:"position:absolute;left:0;top:50px;width:408px;height:14px;border-radius:999px;background:var(--white);border:4px solid var(--ink)"}),this.knob=V("div",{class:"knob",style:"position:absolute;top:35px;width:44px;height:44px;border-radius:50%;background:var(--pink);border:5px solid var(--ink)"}),this.el=V("div",{class:"slider",role:"slider","aria-valuemin":"0","aria-valuemax":"1",style:"position:absolute;width:408px;height:79px;pointer-events:auto;touch-action:none;cursor:pointer"},V("div",{class:"pixel",style:"position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;font-size:30px;color:var(--ink)"},V("span",{},t),V("span",{},e)),this.track,this.knob);const r=o=>{const a=this.track.getBoundingClientRect();this.set(Math.min(1,Math.max(0,(o.clientX-a.left)/a.width))),s(this.value)};this.el.addEventListener("pointerdown",o=>{this.el.setPointerCapture(o.pointerId),r(o)}),this.el.addEventListener("pointermove",o=>{this.el.hasPointerCapture(o.pointerId)&&r(o)}),this.set(n)}set(t){this.value=t,this.el.setAttribute("aria-valuenow",t.toFixed(2)),zt(this.knob,{left:408*t-22})}}function f1(i){const t=V("button",{class:"btn display",style:"position:absolute;width:368px;height:84px;border-radius:999px;background:var(--ink);color:var(--yellow);font-size:34px;display:flex;align-items:center;justify-content:center;pointer-events:auto"});return t.textContent=i,t}const br={at:.05,dur:.65,from:1150},p1=.35,m1=.8,ou=800,au=590,fl=.5,g1=.45,lu=.2,jn=[.6,1.05,1.55,2.05,2.35,2.85,3.05,3.4],Po=[520,132,356,132,244,154,244,540],pl=[960,231,231,311,516,516,632,1e3],x1=[1.05,1.55,2.05],ki={from:2.4,to:2.85,value:.28},ml=3;function Ji(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*se.draw((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}function v1(){let i,t=!1,e=!0,n=!1,s=0,r,o=[],a,l,c=-1/0,h=!1,u,d=[],p,x=ou;const S=new Set,m=(w,k)=>{const v=V("div",{class:"ripple",style:"position:absolute;border-radius:50%;border:5px solid var(--ink);pointer-events:none"});r.screen.append(v),d.push({el:v,at:s,x:w,y:k})},f=()=>{i.store.data.progress.profile={chips:o.filter(w=>w.on).map(w=>w.label),loud:Number(a.value.toFixed(2))},i.store.save()},_=(w,k=!1)=>{const v=o[w];if(!(!v||h)){if(v.set(!v.on,s),!k){const A=v.el.getBoundingClientRect(),g=r.screen.getBoundingClientRect(),b=488/g.width;m((A.left+A.width/2-g.left)*b,(A.top+A.height/2-g.top)*b)}f()}},E=()=>{h||!o.some(w=>w.on)||(c=s,f())};return{id:"S1",mount(w,k){i=w;const v=w.copy.S1;x=w.params.campaign?au:ou,p=new Ms(w.captions,w.copy.captions,[{key:"profile",at:.5}]),r=new ih(v.clock);const A=r.screen;A.append(V("div",{class:"display",style:"position:absolute;left:0;right:0;top:74px;text-align:center;font-size:52px;color:var(--ink)"},v.heading),V("div",{class:"pixel",style:"position:absolute;left:0;right:0;top:140px;text-align:center;font-size:30px;color:var(--lit-subline)"},v.sub)),o=v.chips.map(([g,b],C)=>{const T=new d1(g,b,p1+C*.07);return zt(T.el,{left:C%2?252:28,top:200+Math.floor(C/2)*80}),T.el.addEventListener("click",F=>{F.stopPropagation(),_(C)}),A.append(T.el),T}),a=new u1(v.sliderLeft,v.sliderRight,fl,()=>f()),zt(a.el,{left:40,top:454}),l=f1(v.button),zt(l,{left:60,top:x}),l.addEventListener("click",g=>{g.stopPropagation(),E()}),u=V("div",{class:"finger",style:"position:absolute;width:68px;height:68px;border-radius:50%;background:var(--lit-touch);border:4px solid var(--white);pointer-events:none;display:none"}),A.append(a.el,l,u),vs(k,...Fc),k.append(r.el)},enter(w){t=i.flow.reduced,e=w!=="S2"&&w!=="S3",n=i.store.data.settings.auto,this.update(0,0)},update(w,k){s=k;const[v,A]=t?[1,le(s,0,.2,se.enter)]:[1,1],g=e&&!t?br.from*(1-le(s,br.at,br.dur,se.pop)):0;if(r.set(g,v),r.el.style.opacity=String(A),n&&!h){x1.forEach((U,J)=>{s>=U&&!S.has(J)&&(S.add(J),o[J].on||_(J,!0),m(Ji(jn,Po,U),Ji(jn,pl,U)))}),s>=ki.from&&s<=ki.to+.05&&(a.set(fl+(ki.value-fl)*le(s,ki.from,ki.to-ki.from,se.draw)),S.has(10)||(S.add(10),m(Ji(jn,Po,ki.from),Ji(jn,pl,ki.from))));const P=U=>Ji(jn,pl,U)+(x-au)*le(U,2.85,.2,se.draw);s>=ml&&c<0&&(m(Ji(jn,Po,ml),P(ml)),E());const B=Ji(jn,Po,s),L=P(s),H=s>jn[0]&&s<jn[jn.length-1];zt(u,{display:H?"block":"none",left:B-34,top:L-34})}else u.style.display="none";o.forEach(P=>P.update(s,t));const[b,C]=ke(s,m1,.4,t),T=1-.06*Math.sin(Math.PI*Bi((s-c)/lu)),F=o.some(P=>P.on);l.disabled=!F,zt(l,{transform:`scale(${b*(c>=0?T:1)})`,opacity:String(C*(F?1:.4))}),d=d.filter(P=>{const B=(s-P.at)/g1;if(B>=1||t)return P.el.remove(),!1;const L=30+B*50;return zt(P.el,{left:P.x-L,top:P.y-L,width:L*2,height:L*2,opacity:String(1-B)}),!0}),!h&&c>=0&&s>=c+lu&&(h=!0,i.flow.next()),p.update(s)},landed:()=>s>=br.at+br.dur,onInput(w){if(w.type!=="key"||!w.key)return;const k=Number(w.key);k>=1&&k<=6?_(k-1):w.key==="ArrowLeft"||w.key==="ArrowRight"?(a.set(Bi(a.value+(w.key==="ArrowLeft"?-.05:.05))),f()):w.key==="Enter"&&E()},exit(){},unmount(){},seek(w){this.update(0,w)}}}const tn={at:.15,dur:2.05,pitch:230,steps:12,count:15,h:400,cx:214,feet:490},ko={at:2.2,dur:.2},_1=2.4;function y1(){let i,t=!1,e=0,n,s=[],r=!1,o=0,a;return{id:"S2",mount(l,c){i=l;const h=l.data.cast.cast.find(d=>d.id==="joe").sprite;a=new Ms(l.captions,l.copy.captions,[{key:"finding",at:.15}]);const u=new ih(l.copy.S1.clock);n=V("span",{}),o=tn.h*h.aspect,s=Array.from({length:tn.count},()=>V("img",{src:Jr(h.body),alt:"",style:`position:absolute;top:${tn.feet-tn.h}px;width:${o}px;height:${tn.h}px;transform-origin:50% 100%`})),u.screen.append(V("div",{class:"pixel s2-finding",style:"position:absolute;left:0;right:0;top:84px;text-align:center;font-size:44px;color:var(--ink)"},V("span",{},l.copy.S2.finding),n),V("div",{class:"s2-card",style:"position:absolute;left:24px;top:170px;width:440px;height:530px;border-radius:28px;background:var(--white);border:6px solid var(--ink);overflow:hidden"},...s),V("div",{style:"position:absolute;left:226px;top:160px;width:0;height:0;border-left:18px solid transparent;border-right:18px solid transparent;border-top:26px solid var(--pink)"})),vs(c,...Fc),c.append(u.el),l.store.data.progress.peepl="vinnie",l.store.save()},enter(){t=i.flow.reduced,this.update(0,0)},update(l,c){e=c,n.textContent="...".slice(0,Math.floor(e*3)%4);const h=(t?e>=tn.at?1:0:le(e,tn.at,tn.dur,se.enter))*tn.steps*tn.pitch;s.forEach((u,d)=>{const p=tn.cx+d*tn.pitch-h,x=Math.abs(p-tn.cx)<=420,S=d===tn.steps?1-le(e,ko.at,ko.dur,se.draw):1;zt(u,{display:x?"block":"none",left:p-o/2,transform:`scale(${S})`})}),!r&&e>=_1&&(r=!0,i.flow.next()),a.update(e)},landed:()=>e>=tn.at+tn.dur,onInput(l){(l.type==="tap"||l.key===" "||l.key==="Enter")&&e<ko.at&&i.flow.seek(ko.at)},exit(){},unmount(){},seek(l){this.update(0,l)}}}const cu=(i,t,e)=>Array.from({length:e*2},(n,s)=>{const r=s/(e*2)*Math.PI*2,o=s%2?t:i;return`${(Math.cos(r)*o).toFixed(1)},${(Math.sin(r)*o).toFixed(1)}`}).join(" ");class b1{constructor(){I(this,"el");const t=(e,n)=>ae("polygon",{points:e,style:`fill:var(--${n});stroke:var(--ink);stroke-width:6;stroke-linejoin:round`});this.el=ae("g",{},t(cu(250,170,16),"yellow"),t(cu(170,118,12),"pink"))}update(t,e,n,s){this.el.setAttribute("transform",`translate(${t} ${e}) rotate(${n*25}) scale(${s})`)}}const hu=["pink","yellow","cyan","red","purple"];class M1{constructor(t){I(this,"el");I(this,"pieces");this.o=t,this.pieces=Array.from({length:t.count},(e,n)=>ae("rect",{width:18,height:10,style:`fill:var(--${hu[n%hu.length]});stroke:var(--ink);stroke-width:2`})),this.el=ae("g",{class:"confetti"},...this.pieces)}update(t,e,n,s){const r=!s&&n>0&&n<this.o.life;this.el.style.display=r?"inline":"none",r&&this.pieces.forEach((o,a)=>{const l=a/this.o.count*Math.PI*2+Oi(a)*.4,c=this.o.speed[0]+Oi(a+9)*this.o.speed[1],h=t+Math.cos(l)*c*n,u=e+Math.sin(l)*c*n+this.o.gravity*n*n;o.setAttribute("x",String(h-9)),o.setAttribute("y",String(u-5)),o.setAttribute("transform",`rotate(${n*this.o.spin+a*40} ${h} ${u})`)})}}const zs={cx:244,cy:470,at:0,dur:.5},w1=.15,Qi={x:244,feet:690,h:440,at:.15,dur:.6,hopAt:.8,hop:40},du={at:.75,dur:.45,top:730},uu={at:1.2,dur:.4,top:812},fu={dur:3.4,to:1.06},S1=1.6;function E1(){let i,t=!1,e=0,n,s,r,o,a,l,c;return{id:"S3",mount(h,u){i=h;const d=h.copy.S3;c=new Ms(h.captions,h.copy.captions,[{key:"reveal",at:.3}]),n=new ih(h.copy.S1.clock),s=new b1,r=new M1({count:18,gravity:700,life:1.6,speed:[380,260],spin:500});const p=h.data.cast.cast.find(x=>x.id==="vinnie").sprite;o=new va(p,{class:"sprite s3-vinnie"}).place(Qi.x,Qi.feet,Qi.h),o.img.dataset.morph="vinnie",a=V("div",{class:"display s3-name",style:`position:absolute;left:0;right:0;top:${du.top}px;text-align:center;font-size:58px;color:var(--ink)`},d.name),l=V("div",{style:`position:absolute;left:0;right:0;top:${uu.top}px;display:flex;justify-content:center`},gn([d.pill],{size:32})),n.screen.append(ae("svg",{width:488,height:948,style:"position:absolute;inset:0;overflow:visible"},s.el,r.el),o.el,a,l),vs(u,...Fc),u.append(n.el)},enter(){t=i.flow.reduced,this.update(0,0)},update(h,u){e=u,n.set(0,t?1:1+(fu.to-1)*le(e,0,fu.dur,se.draw));const[d,p]=ke(e,zs.at,zs.dur,t);s.update(zs.cx,zs.cy,t?0:e,d),s.el.style.opacity=String(p),r.update(zs.cx,zs.cy,e-w1,t);const[x,S]=ke(e,Qi.at,Qi.dur,t);o.pose({t:e,phase:1.2,hop:t?0:Ks(e,Qi.hopAt,Qi.hop,.4),scale:x,opacity:S});for(const[m,f]of[[a,du],[l,uu]]){const[_,E]=ke(e,f.at,f.dur,t);zt(m,{transform:`scale(${_})`,opacity:String(E)})}c.update(e)},landed:()=>e>=S1,onInput(h){},exit(){},unmount(){},seek(h){this.update(0,h)}}}const Uf=.15,Of=.035,A1=3,T1=(i,t)=>Math.max(0,Math.min(i.length,Math.floor((t-Uf)/Of))),Dr=i=>Uf+i.length*Of;class Bf{constructor(t,e="block"){I(this,"el");I(this,"text");I(this,"caret");I(this,"chip");this.chipColours=t,this.text=V("span",{class:"dialogue-text"}),this.caret=e==="block"?ae("svg",{width:22,height:40,viewBox:"0 0 22 40",style:"display:inline-block;vertical-align:-6px;margin-left:12px"},ae("rect",{x:2,y:2,width:18,height:36,style:"fill:var(--yellow)"})):ae("svg",{width:26,height:22,viewBox:"0 0 26 22",style:"position:absolute;right:36px;bottom:28px"},ae("path",{d:"M2 2h22L13 20z",style:"fill:var(--yellow)"})),this.chip=V("div",{class:"speaker-chip display",style:"position:absolute;left:30px;top:-40px;z-index:2;display:inline-flex;align-items:center;border-radius:999px;border:5px solid var(--ink);padding:8px 22px 10px;font-size:34px;color:var(--ink);white-space:nowrap"}),this.el=V("div",{class:"dialogue-box",style:"position:absolute;left:150px;top:660px;width:1000px;height:200px;transform-origin:0 100%"},this.chip,V("div",{class:"pixel",style:"position:absolute;inset:0;background:var(--ink);border-radius:28px;padding:38px 44px;font-size:54px;line-height:1.1;color:var(--white)"},this.text,this.caret))}update(t,e,n,s,r){const[o,a]=ke(t,e,.4,n);if(zt(this.el,{transform:`scale(${o})`,opacity:String(a)}),this.chip.style.display=s?"inline-flex":"none",!s){this.text.textContent="",this.caret.style.visibility="hidden";return}this.chip.textContent=s.who,this.chip.style.background=this.chipColours[s.who]??"var(--white)";const l=T1(s.text,r);this.text.textContent=s.text.slice(0,l);const c=l>=s.text.length;this.caret.style.visibility=c&&Math.floor(t*A1*2)%2===0?"visible":"hidden"}}const C1=".reply-chip:hover,.reply-chip:focus-visible,.reply-chip.hl{background:var(--yellow)!important}";class R1{constructor(t){I(this,"el");I(this,"chips",[]);I(this,"shownAt",0);I(this,"highlighted",-1);this.onPick=t,this.el=V("div",{class:"reply-chips",style:"position:absolute;left:150px;bottom:484px;width:1100px;display:flex;flex-wrap:wrap-reverse;gap:16px;align-items:flex-end"}),this.el.append(V("style",{},C1))}get count(){return this.chips.length}show(t,e){this.clear(),this.shownAt=e,this.chips=t.map((n,s)=>{const r=V("button",{class:"reply-chip pixel",style:"min-width:208px;height:62px;padding:0 28px;border-radius:999px;border:5px solid var(--ink);background:var(--white);font-size:36px;color:var(--ink);white-space:nowrap;pointer-events:auto;transform-origin:50% 100%"});return r.textContent=n,r.addEventListener("click",o=>{o.stopPropagation(),this.onPick(s)}),r}),this.el.append(...this.chips)}clear(){for(const t of this.chips)t.remove();this.chips=[],this.highlighted=-1}update(t,e){this.chips.forEach((n,s)=>{const[r,o]=ke(t,this.shownAt+s*.07,.4,e);zt(n,{transform:`scale(${r})`,opacity:String(o)}),n.classList.toggle("hl",s===this.highlighted)})}}const P1=.5;class k1{constructor(t,e){I(this,"el");I(this,"fill");I(this,"heart");I(this,"heartPath");I(this,"from",0);I(this,"to",0);I(this,"at",-1/0);this.from=this.to=e,this.fill=V("div",{class:"trust-fill",style:"height:100%;background:var(--pink)"}),this.heartPath=ae("path",{d:"M 28 48 C 6 32 2 22 4 14 C 7 3 22 2 28 13 C 34 2 49 3 52 14 C 54 22 50 32 28 48 Z",style:"stroke:var(--ink);stroke-width:5;stroke-linejoin:round"}),this.heart=ae("svg",{width:56,height:52,viewBox:"0 0 56 52",style:"overflow:visible"},this.heartPath),this.el=V("div",{class:"trust-meter",style:"position:absolute;left:1180px;top:76px;display:flex;align-items:center;gap:18px;transform-origin:0 50%"},V("div",{class:"pixel",style:"font-size:46px;color:var(--ink)"},t),V("div",{class:"trust-track",style:"width:460px;height:46px;border-radius:999px;background:var(--white);border:6px solid var(--ink);overflow:hidden"},this.fill),this.heart)}set(t,e){t!==this.to&&(this.from=this.value(e),this.to=t,this.at=e)}value(t){return this.from+(this.to-this.from)*le(t,this.at,P1,se.draw)}update(t,e,n){const[s,r]=ke(t,e,.4,n);zt(this.el,{transform:`scale(${s})`,opacity:String(r)});const o=n?this.to:this.value(t);this.fill.style.width=`${o}%`;const a=o>=99.5;this.heartPath.style.fill=a?"var(--pink)":"var(--white)",this.heart.style.transform=`scale(${a&&!n?1+.12*Math.abs(Math.sin(t*6)):1})`}}const F1=(i,t)=>Math.max(0,Math.min(i.trust.max,t)),sh=(i,t)=>i.beats.filter(e=>e.days.includes(t));function L1(i,t=[]){return{mode:"bond",phase:"lines",day:1,beatIndex:0,trust:i.trust.start,set:{},queue:[],then:"choose",choices:[],autoPick:0,refusals:0,profile:t,history:[]}}function I1(i,t,e){const n=i.findIndex(o=>o.preferIfProfile&&e.includes(o.preferIfProfile));if(n<=0)return{choices:i,autoPick:t};const s=i[t],r=[i[n],...i.filter((o,a)=>a!==n)];return{choices:r,autoPick:r.indexOf(s)}}function gl(i,t,e){const n=sh(i,t.day)[e];if(!n)return D1(i,{...t,beatIndex:e});const s=t.day>1&&n.lineAgain?n.lineAgain:n.line;return{...t,beatIndex:e,phase:"lines",queue:[...s],then:"choose"}}function D1(i,t){return t.trust>=i.trust.closeMin?{...t,phase:"lines",queue:[...i.close.pass],then:"passed",trust:i.trust.max}:t.day>=i.days.forcedOnDay?{...t,phase:"lines",queue:[...i.close.forced],then:"passed",trust:i.trust.max}:{...t,phase:"lines",queue:[...i.close.fail],then:"nextDay"}}function N1(i,t){if(t.mode==="consent")return{choices:i.consent.choices,autoPick:i.consent.autoPick};const e=sh(i,t.day)[t.beatIndex];return I1(e.choices,e.autoPick,t.profile)}function pu(i,t,e){var n;switch(e.type){case"start":return gl(i,{...t,mode:"bond",day:e.day??t.day},0);case"consent":return{...t,mode:"consent",phase:"lines",queue:[...i.consent.ask],then:"choose"};case"lineDone":{if(t.phase!=="lines")return t;const s=t.queue.slice(1);if(s.length)return{...t,queue:s};switch(t.then){case"choose":return{...t,queue:s,phase:"choosing",...N1(i,t)};case"nextBeat":return gl(i,{...t,queue:s},t.beatIndex+1);default:return{...t,queue:s,phase:t.then}}}case"choose":{const s=t.phase==="choosing"?t.choices[e.index]:void 0;if(!s)return t;const r={who:"YOU",text:s.label},o={...t,phase:"lines",choices:[],set:{...t.set,...s.set},history:[...t.history,{beat:t.mode==="consent"?"consent":sh(i,t.day)[t.beatIndex].id,label:s.label}]};return t.mode==="bond"?{...o,trust:F1(i,t.trust+s.trust),queue:[r,...s.reply],then:"nextBeat"}:((n=s.set)==null?void 0:n.consent)==="yes"?{...o,queue:[r,...s.reply],then:"released"}:t.refusals>=1?{...o,refusals:t.refusals+1,queue:[r,...i.consent.forced],then:"released"}:{...o,refusals:t.refusals+1,queue:[r,...s.reply],then:"nextDay"}}case"nextDay":{if(t.phase!=="nextDay")return t;const s=t.day+1;return t.mode==="consent"?{...t,day:s,phase:"lines",queue:[...i.consent.askAgain],then:"choose"}:gl(i,{...t,day:s},0)}}}const Tn={x:1380,consentX:1340,feet:930,h:620},U1=[[40,60],[120,140],[70,250],[300,230],[200,90],[330,300]],O1=.6,B1=.5,z1=1,H1=.4,V1={VINNIE:.8,YOU:.4,MOCHI:.8},G1=1.8,W1=2.2,Fi={dur:1.6,swapAt:.8,fade:.25},X1={S4:1.5,S5:1.2},$1={VINNIE:"var(--red)",YOU:"var(--cyan)",MOCHI:"var(--pink)"};function Y1(){const i=U1.map(([a,l])=>V("div",{style:`position:absolute;left:${a}px;top:${l}px;width:10px;height:10px;background:var(--white)`})),t=V("div",{style:"position:absolute;left:150px;top:140px;width:420px;height:400px;border-radius:16px;border:10px solid var(--ink);background:var(--lit-window-navy);overflow:hidden"},V("div",{style:"position:absolute;left:250px;top:50px;width:90px;height:90px;border-radius:50%;background:var(--yellow);border:6px solid var(--ink)"}),...i,V("div",{style:"position:absolute;left:195px;top:0;width:10px;height:100%;background:var(--ink)"}),V("div",{style:"position:absolute;left:0;top:185px;width:100%;height:10px;background:var(--ink)"})),e=V("div",{style:"position:absolute;left:900px;top:0;width:0;height:0;transform-origin:0 0"},V("div",{style:"position:absolute;left:-4px;top:0;width:8px;height:200px;background:var(--ink)"}),V("div",{style:"position:absolute;left:-170px;top:250px;width:340px;height:260px;background:radial-gradient(ellipse at 50% 0%, var(--lit-lamp-glow), transparent 70%)"}),ae("svg",{width:220,height:120,style:"position:absolute;left:-110px;top:190px"},ae("path",{d:"M 70 6 L 150 6 L 212 110 L 8 110 Z",style:"fill:var(--yellow);stroke:var(--ink);stroke-width:8;stroke-linejoin:round"}))),n=(a,l,c,h,u)=>ae("ellipse",{cx:a,cy:l,rx:c,ry:h,style:`fill:var(--${u});stroke:var(--ink);stroke-width:7`}),s=[n(80,120,44,90,"lit-plant-1"),n(150,100,44,100,"lit-plant-2")],r=ae("svg",{width:340,height:440,viewBox:"-40 -40 340 440",style:"position:absolute;left:1580px;top:500px;overflow:visible"},...s,n(118,140,40,84,"lit-plant-3"),ae("path",{d:"M 50 230 L 210 230 L 190 330 L 70 330 Z",style:"fill:var(--lit-pot);stroke:var(--ink);stroke-width:8;stroke-linejoin:round"}));return{el:V("div",{class:"room",style:`position:absolute;left:0;top:0;width:1920px;height:${We(1080,1700)}px;background:var(--cream);overflow:hidden`},V("div",{style:"position:absolute;inset:0;background-image:repeating-linear-gradient(90deg,var(--lit-wallpaper) 0 40px,transparent 40px 80px)"}),t,V("div",{style:"position:absolute;left:0;top:640px;width:1920px;height:230px;background:var(--pink);border-top:8px solid var(--ink)"}),V("div",{style:`position:absolute;left:0;top:860px;width:1920px;height:${We(220,840)}px;background-color:var(--wood);border-top:8px solid var(--ink);background-image:repeating-linear-gradient(90deg,transparent 0 236px,var(--lit-plank-gap) 236px 242px)`}),e,r),update(a,l){const c=l?0:1;e.style.transform=`rotate(${Math.sin(a*1.3)*3*c}deg)`,i.forEach((h,u)=>h.style.opacity=String(l?1:.5+.5*Math.sin(a*3+u))),s[0].setAttribute("transform",`rotate(${-24+Math.sin(a*1.6)*3*c} 110 300)`),s[1].setAttribute("transform",`rotate(${14+Math.sin(a*1.6+1)*3*c} 130 300)`)}}}function zf(i){const t=i==="S5";let e,n,s=!1,r=0,o,a,l,c,h,u,d,p=0,x=-1,S=-1,m=-1,f=!1,_=-1/0,E=!1,w=!1,k=!1,v=[],A=null;const g=()=>d.phase==="lines"?d.queue[0]??null:null,b=()=>{const P=e.store.data.progress;P.dialogue={mode:d.mode,day:d.day,beatIndex:d.beatIndex,trust:d.trust,set:d.set,history:d.history},P.trust=d.trust,d.phase==="released"&&(P.released=!0),e.store.save()},C=P=>{const B=d;if(d=pu(n,d,P),d===B)return;p=r;const L=g();(L==null?void 0:L.who)==="VINNIE"&&L.hop&&L!==B.queue[0]&&v.push({at:r,h:L.hop}),d.phase==="choosing"&&B.phase!=="choosing"&&(x=r,c.show(d.choices.map(H=>H.label),r)),d.phase==="nextDay"&&(S=r),(d.phase==="passed"||d.phase==="released")&&m<0&&(m=r,h.set(100,r),e.toast.show(d.phase==="passed"?e.data.dialogue.close.toast:e.data.dialogue.consent.confirmToast)),!k&&!t&&d.mode==="bond"&&d.beatIndex>=2&&d.day===1&&(k=!0,e.captions.show(e.copy.captions.room2??"",3.7)),b()},T=P=>{if(d.phase!=="choosing"||!d.choices[P])return;const B=d.choices[P];c.clear(),x=-1,B.trust<0&&(_=r),C({type:"choose",index:P}),t||h.set(d.trust,r)},F=()=>{const P=g();if(!P)return;r-p<Dr(P.text)?p=r-Dr(P.text):C({type:"lineDone"})};return{id:i,mount(P,B){var J;e=P,n=P.data.dialogue,o=Y1();const L=P.data.cast.cast.find(tt=>tt.id==="vinnie").sprite;a=new va(L,{class:`sprite ${i==="S4"?"s4":"s5"}-vinnie`}).place(Tn.x,Tn.feet,Tn.h),a.img.dataset.morph="vinnie",l=new Bf($1),c=new R1(tt=>T(tt));const H=P.store.data.progress.dialogue,U=((J=P.store.data.progress.profile)==null?void 0:J.chips)??[];d={...L1(n,U),...t&&H?{trust:H.trust??100,set:H.set??{},history:H.history??[]}:{}},h=new k1(P.copy.S4.trust,t?100:d.trust),u=V("div",{class:"next-day",style:"position:absolute;inset:0;background:var(--ink);display:none;align-items:center;justify-content:center"},V("div",{class:"pixel",style:"font-size:64px;color:var(--white)"},P.copy.S4.nextDay)),vs(B,Tn.x,Tn.feet,760/Tn.h,540,1080),Re(h.el,{left:60,top:80}),Re(l.el,{left:60,top:1300,width:960,height:300}),Re(c.el,{left:60,bottom:684,width:740,flexDirection:"column-reverse",alignItems:"flex-start",transform:"scale(1.3)",transformOrigin:"0 100%"}),Re(u,{}),B.append(o.el,a.el,h.el,c.el,l.el,u)},enter(){s=e.flow.reduced,this.update(0,0)},update(P,B){r=B,!E&&r>=(t?H1:z1)&&(E=!0,C(t?{type:"consent"}:{type:"start",day:1})),!t&&!w&&r>=.8&&(w=!0,e.captions.show(e.copy.captions.room1??"",3.1)),o.update(r,s);const L=g();if(L&&r-p>=Dr(L.text)+V1[L.who]&&C({type:"lineDone"}),d.phase==="choosing"&&e.store.data.settings.auto&&x>=0&&(r-x>=G1&&(c.highlighted=d.autoPick),r-x>=W1&&T(d.autoPick)),S>=0){const $t=r-S,xt=Math.min(le($t,0,Fi.fade,se.enter),1-le($t,Fi.dur-Fi.fade,Fi.fade,se.enter));if(zt(u,{display:$t<Fi.dur?"flex":"none",opacity:String(xt)}),d.phase==="nextDay"&&$t>=Fi.swapAt){d=pu(n,d,{type:"nextDay"}),p=S+Fi.dur;const vt=g();vt!=null&&vt.hop&&v.push({at:p,h:vt.hop}),b()}$t>=Fi.dur&&(S=-1)}const H=g();H&&r>=p&&(A=H),d.phase==="nextDay"&&(A=null);const U=H?r-p<Dr(H.text):!1,J=H?Math.max(0,r-p):1/0;l.update(r,t?-1:O1,s,H??A,J),c.update(r,s),h.update(r,t?-1:B1,s);const tt=s?0:v.reduce(($t,xt)=>$t+Ks(r,xt.at,xt.h,xt.h>=60?.45:.4),0),ut=(H==null?void 0:H.who)==="YOU"&&U&&!s?-4:0,Mt=!s&&r-_<.12?.96:1,Lt=t?Tn.x+(Tn.consentX-Tn.x)*le(r,0,.5,se.draw):Tn.x;a.place(Lt,Tn.feet,Tn.h).pose({t:r,phase:1.2,hop:tt,rot:ut,squash:Mt}),m>=0&&!f&&r-m>=X1[i]&&!g()&&(f=!0,e.flow.next())},landed:()=>r>=.5,onInput(P){P.type==="key"&&P.key&&/^[1-4]$/.test(P.key)?T(Number(P.key)-1):(P.type==="tap"||P.key===" "||P.key==="Enter")&&F()},choose:T,exit(){},unmount(){},seek(P){this.update(0,P)}}}const q1=()=>zf("S4"),j1=()=>zf("S5"),Hf=[960,560,1.15,540,820],xl=440,Mr={x:740,top:652,w:440,h:320},wr=.75,mu=.32,Sr={at:1.35,dur:.35,deg:128},Er={at:1.45,dur:.7,from:520},K1=2.15,ra={at:1.4,life:1.5,count:16},vl={at:2.6,dur:.6,px:760},gu=3.2,Z1=["yellow","cyan","white","red"];class Vf{constructor(t){I(this,"el");I(this,"keychain");I(this,"sticker");I(this,"box");I(this,"keyClip");I(this,"flapL");I(this,"flapR");I(this,"confetti");const e=t.copy.S6,n=t.data.cast.cast.find(h=>h.id==="vinnie").sprite,s=xl*n.aspect,r=V("div",{style:`position:absolute;left:${We(250,470)}px;top:110px;width:440px;height:800px;background:var(--cyan);border:10px solid var(--ink);border-bottom:none;border-radius:18px 18px 0 0`},V("div",{style:"position:absolute;left:50px;top:60px;width:320px;height:260px;border:8px solid var(--ink);border-radius:12px"}),V("div",{style:"position:absolute;left:50px;top:370px;width:320px;height:330px;border:8px solid var(--ink);border-radius:12px"}),V("div",{class:"display door-plate",style:"position:absolute;left:150px;top:110px;width:120px;height:90px;background:var(--white);border:7px solid var(--ink);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:64px;color:var(--ink)"},e.door),V("div",{style:"position:absolute;left:350px;top:400px;width:40px;height:40px;border-radius:50%;background:var(--yellow);border:7px solid var(--ink)"})),o=V("div",{style:`position:absolute;left:0;top:900px;width:1920px;height:${We(180,800)}px;background:var(--cream);border-top:8px solid var(--ink)`}),a=V("div",{class:"pixel mat",style:"position:absolute;left:740px;top:950px;width:440px;height:64px;background:var(--wood);border:6px solid var(--ink);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:44px;color:var(--ink)"},e.mat);this.sticker=V("img",{src:Jr(n.body),alt:"",class:"keychain-img",style:`position:absolute;left:${-s/2}px;top:228px;width:${s}px;height:${xl}px;filter:drop-shadow(5px 0 0 var(--white)) drop-shadow(-5px 0 0 var(--white)) drop-shadow(0 5px 0 var(--white)) drop-shadow(0 -5px 0 var(--white)) drop-shadow(0 26px 22px var(--lit-sticker-shadow))`});const l=gn([e.nfc],{size:30});zt(l,{position:"absolute",left:-46,top:228+xl-10}),this.keychain=V("div",{class:"keychain",style:"position:absolute;left:960px;top:0;width:0;height:0;transform-origin:0 0"},V("div",{style:"position:absolute;left:-9px;top:-20px;width:18px;height:190px;border-radius:9px;background:repeating-linear-gradient(180deg,var(--lit-chain) 0 16px,var(--lit-chain-hi) 16px 22px)"}),V("div",{style:"position:absolute;left:-44px;top:150px;width:88px;height:88px;border-radius:50%;border:13px solid var(--lit-ring)"}),this.sticker,l),this.keyClip=V("div",{style:"position:absolute;inset:0"},this.keychain);const c=h=>V("div",{style:`position:absolute;${h}:0;top:-44px;width:220px;height:48px;background:var(--lit-flaps);border:7px solid var(--ink);transform-origin:${h==="left"?"0%":"100%"} 100%`});this.flapL=c("left"),this.flapR=c("right"),this.box=V("div",{class:"ship-box",style:`position:absolute;left:${Mr.x}px;top:${Mr.top}px;width:${Mr.w}px;height:${Mr.h}px;transform-origin:50% 100%`},this.flapL,this.flapR,V("div",{style:"position:absolute;inset:0;background:var(--lit-cardboard);border:8px solid var(--ink);border-radius:8px"},V("div",{style:"position:absolute;left:190px;top:0;width:44px;height:100%;background:var(--lit-tape)"}),V("div",{style:"position:absolute;left:40px;top:110px;width:250px;padding:14px 18px;background:var(--white);border:5px solid var(--ink);border-radius:10px;transform:rotate(-4deg)"},V("div",{class:"display box-label",style:"font-size:44px;color:var(--ink)"},e.boxLabel),V("div",{class:"pixel box-sub",style:"font-size:28px;color:var(--ink);margin-top:6px"},e.boxSub)))),this.confetti=Array.from({length:ra.count},(h,u)=>V("div",{style:`position:absolute;left:0;top:0;width:26px;height:14px;background:var(--${Z1[u%4]});border:3px solid var(--ink)`})),this.el=V("div",{class:"ship-set",style:`position:absolute;left:0;top:0;width:1920px;height:${We(1080,1700)}px;overflow:hidden`},r,o,a,this.keyClip,this.box,...this.confetti)}pose(t){const e=Mr.top+t.boxY;zt(this.box,{top:e,transform:`scale(${1+t.squash*.12}, ${1-t.squash*.14})`,display:e>1100?"none":"block"}),this.flapL.style.transform=`rotate(${-t.flap}deg)`,this.flapR.style.transform=`rotate(${t.flap}deg)`,zt(this.keyClip,{clipPath:`inset(0 0 ${Math.max(0,1080-e)}px 0)`,opacity:t.keyVisible?"1":"0"}),zt(this.keychain,{top:t.lift,transform:`rotate(${t.rot}deg)`});const n=!t.reduced&&t.ct>0&&t.ct<ra.life;this.confetti.forEach((s,r)=>{if(!n)return void(s.style.display="none");const o=-Math.PI/2+(Oi(r)-.5)*2.2,a=700+Oi(r+5)*500,l=960+Math.cos(o)*a*t.ct,c=650+Math.sin(o)*a*t.ct+1400*t.ct*t.ct;zt(s,{display:"block",transform:`translate(${l}px, ${c}px) rotate(${t.ct*600+r*30}deg)`})})}}function J1(){let i,t=!1,e=0,n,s;return{id:"S6",mount(r,o){i=r,n=new Vf(r),s=new Ms(r.captions,r.copy.captions,[{key:"ship",at:.3}]),vs(o,...Hf),o.append(n.el)},enter(){t=i.flow.reduced,this.update(0,0)},update(r,o){e=o;const a=t?0:e<wr?-1300*(1-se.fall(Bi((e-.2)/(wr-.2)))):0,l=!t&&e>wr&&e<wr+mu?Math.sin(Math.PI*(e-wr)/mu):0,c=le(e,vl.at,vl.dur,se.draw)*vl.px,h=t?e>=Sr.at?Sr.deg:0:le(e,Sr.at,Sr.dur,se.pop)*Sr.deg,u=t?e>=Er.at?0:Er.from:Er.from*(1-le(e,Er.at,Er.dur,se.pop));n.pose({boxY:a+c,squash:l,flap:h,lift:u,rot:t?0:Cl(e,K1,14),keyVisible:e>ra.at,ct:e-ra.at,reduced:t}),s.update(e)},landed:()=>e>=gu,onInput(r){(r.type==="tap"||r.key===" "||r.key==="Enter")&&e>=gu&&i.flow.next()},exit(){},unmount(){},seek(r){this.update(0,r)}}}const Li={enter:.6,from:2300,to:1330,nudgeAt:.8,nudge:150},Ii=1.1,_l={peak:.7,dur:.23},ts={count:3,life:1,stagger:.16,from:40,grow:700,cx:We(1040,960),cy:We(520,600)},Q1=1.3,xu=1.5,tb=1,vu=1.25,eb=.8,yl={x:960,y:448};function nb(){let i,t=!1,e=0,n=-1,s=!1,r,o,a,l,c,h,u,d,p=[],x;const S=()=>{n>=0||(n=e)};return{id:"S7",mount(m,f){i=m;const _=m.copy.S7;if(r=new Vf(m),x=new Ms(m.captions,m.copy.captions,[{key:"tap",at:0}]),o=V("button",{class:"keychain-hit","aria-label":_.waitPill,style:`position:absolute;left:${yl.x-180}px;top:188px;width:360px;height:520px;border-radius:40px;pointer-events:auto`}),o.addEventListener("click",E=>{E.stopPropagation(),S()}),a=V("div",{class:"wait-ring",style:"position:absolute;left:0;top:0;width:400px;height:400px;margin:-200px 0 0 -200px;border-radius:50%;border:8px solid var(--pink);pointer-events:none"}),l=V("div",{class:"wait-pill",style:"position:absolute;left:0;right:0;top:832px;display:flex;justify-content:center;gap:16px"},gn([_.waitPill],{size:32})),"NDEFReader"in window){const E=gn([_.realNfc],{size:32,tag:"button"});E.style.pointerEvents="auto",E.addEventListener("click",async w=>{w.stopPropagation();try{const k=window.NDEFReader,v=new k;await v.scan(),v.onreading=()=>S()}catch{}}),l.append(E)}h=V("div",{class:"pixel notification",style:"width:230px;padding:14px 16px;background:var(--yellow);border:6px solid var(--ink);border-radius:24px;font-size:32px;line-height:1.05;color:var(--ink);transform-origin:50% 0"},V("div",{class:"notif-title"},_.notifTitle),V("div",{class:"notif-body"},_.notifBody)),c=V("div",{class:"tap-phone",style:"position:absolute;left:0;top:300px;width:300px;height:540px;border-radius:48px;background:var(--ink);padding:16px;box-shadow:0 22px 40px var(--lit-phone-shadow)"},V("div",{style:"width:100%;height:100%;border-radius:34px;background:var(--lit-phone-glass);display:flex;justify-content:center;padding-top:60px"},h)),u=V("div",{class:"handshake",style:"position:absolute;left:0;right:0;top:820px;display:flex;justify-content:center"},V("div",{class:"display handshake-pill",style:"display:inline-flex;align-items:center;gap:14px;border-radius:999px;background:var(--yellow);border:6px solid var(--ink);padding:12px 26px 14px;font-size:58px;color:var(--ink);white-space:nowrap"},_.handshake,Js("check",52,"var(--ink)"))),p=Array.from({length:ts.count},(E,w)=>V("div",{style:`position:absolute;border-radius:50%;border-style:solid;border-color:var(--${w%2?"cyan":"yellow"});pointer-events:none`})),d=V("div",{style:"position:absolute;inset:0;background:var(--white);pointer-events:none;opacity:0"}),vs(f,...Hf),Re(l,{top:1500}),Re(u,{top:1500}),Re(d,{}),f.append(r.el,a,l,o,...p,c,u,d)},enter(){t=i.flow.reduced,this.update(0,0)},update(m,f){e=f,n<0&&i.store.data.settings.auto&&e>=eb&&S();const _=n>=0?e-n:-1,E=t?0:Cl(e,-2,14)+(_>=Ii?Cl(_,Ii,-10):0);r.pose({boxY:2e3,squash:0,flap:128,lift:0,rot:E,keyVisible:!0,ct:-1,reduced:t});const w=n<0,k=e%vu/vu;zt(a,{display:w?"block":"none",transform:`translate(${yl.x}px, ${yl.y}px) scale(${t?1:.6+.9*k})`,opacity:String(t?.8:1-k)}),zt(l,{display:w?"flex":"none"}),o.style.display=w?"block":"none";const v=_<0?Li.from:Li.from+(Li.to-Li.from)*le(_,0,Li.enter,se.enter)-Li.nudge*le(_,Li.nudgeAt,Ii-Li.nudgeAt,se.draw),A=Mn?`translate(810px, ${v-920}px) rotate(-6deg)`:`translateX(${v-150}px) rotate(12deg)`;zt(c,{transform:A,display:_<0?"none":"block"});const g=_>=Ii&&!t?Math.max(0,_l.peak-(_-Ii)/_l.dur*_l.peak):0;d.style.opacity=String(g),p.forEach((P,B)=>{const L=t||_<0?-1:(_-Ii-B*ts.stagger)/ts.life;if(L<=0||L>=1)return void(P.style.display="none");const H=ts.from+L*ts.grow;zt(P,{display:"block",left:ts.cx-H,top:ts.cy-H,width:H*2,height:H*2,borderWidth:`${12-L*8}px`,opacity:String(1-L)})});const[b,C]=_<0?[0,0]:ke(_,Q1,.4,t);zt(u,{transform:`scale(${b})`,opacity:String(C)});const[T,F]=_<0?[0,0]:ke(_,xu,.4,t);zt(h,{transform:`scale(${T})`,opacity:String(F)}),_>=Ii&&!i.store.data.progress.handshake&&(i.store.data.progress.handshake=!0,i.store.save()),_<Ii?x.update(e):i.captions.hide(),!s&&_>=xu+tb&&(s=!0,i.flow.next())},landed:()=>e>=.3,onInput(m){(m.type==="tap"||m.key===" "||m.key==="Enter")&&S()},exit(){},unmount(){},seek(m){this.update(0,m)}}}const pn={sky:13627391,ground:16046520,hemi:1.5,key:16773590,keyI:2.1,elevation:55,azimuth:35};function rh(){const i=new ln,t=new Cm(pn.sky,pn.ground,pn.hemi),e=new km(pn.key,pn.keyI),n=pn.elevation*Math.PI/180,s=pn.azimuth*Math.PI/180;return e.position.set(Math.cos(n)*Math.sin(s)*30,Math.sin(n)*30,Math.cos(n)*Math.cos(s)*30),i.add(t,e,e.target),{group:i,key:e,hemi:t}}const Ar={sky:9403332,ground:16757642,hemi:1,key:16752250,keyI:1.2},_u={day:[702702,8377333,14087423],dusk:[5979791,11954864,16752335]},yu={day:16777215,dusk:new ee().setRGB(42/53,38/49,64/75,qe)},bu={day:16770976,dusk:16765530},Cn=i=>i instanceof ee?i.clone():new ee(i),Kn=i=>i*3600,Fo=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function ib(i){const t=(i%86400+86400)%86400,e=t>=Kn(12)?Fo(Kn(19.5),Kn(20.25),t):1-Fo(Kn(6),Kn(6.75),t),n=t>=Kn(12)?Fo(Kn(21),Kn(21.75),t):1-Fo(Kn(5.25),Kn(6),t);return{dusk:e,night:n}}function sb(i,t,e){e.hemi.color.copy(Cn(pn.sky).lerp(Cn(Ar.sky),i)),e.hemi.groundColor.copy(Cn(pn.ground).lerp(Cn(Ar.ground),i)),e.hemi.intensity=pn.hemi+(Ar.hemi-pn.hemi)*i,e.key.color.copy(Cn(pn.key).lerp(Cn(Ar.key),i)),e.key.intensity=(pn.keyI+(Ar.keyI-pn.keyI)*i)*(1-.92*t),["uTop","uMid","uBottom"].forEach((n,s)=>e.sky[n].value.copy(Cn(_u.day[s]).lerp(Cn(_u.dusk[s]),i))),e.fog.color.copy(Cn(yu.day).lerp(Cn(yu.dusk),i)),e.glow.value.copy(Cn(bu.day).lerp(Cn(bu.dusk),i))}function rb(i,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,s=[new D,new D,new D],r=new D,o=new D,a=new D,l=new D;function c(S){const m=~~(S.x*n),f=~~(S.y*n),_=~~(S.z*n);return`${m},${f},${_}`}const h=i.index?i.toNonIndexed():i,u=h.attributes.position,d={};for(let S=0,m=u.count/3;S<m;S++){const f=3*S,_=s[0].fromBufferAttribute(u,f+0),E=s[1].fromBufferAttribute(u,f+1),w=s[2].fromBufferAttribute(u,f+2);r.subVectors(w,E),o.subVectors(_,E);const k=new D().crossVectors(r,o).normalize();for(let v=0;v<3;v++){const A=s[v],g=c(A);g in d||(d[g]=[]),d[g].push(k)}}const p=new Float32Array(u.count*3),x=new _e(p,3,!1);for(let S=0,m=u.count/3;S<m;S++){const f=3*S,_=s[0].fromBufferAttribute(u,f+0),E=s[1].fromBufferAttribute(u,f+1),w=s[2].fromBufferAttribute(u,f+2);r.subVectors(w,E),o.subVectors(_,E),a.crossVectors(r,o).normalize();for(let k=0;k<3;k++){const v=s[k],A=c(v),g=d[A];l.set(0,0,0);for(let b=0,C=g.length;b<C;b++){const T=g[b];a.dot(T)>e&&l.add(T)}l.normalize(),x.setXYZ(f+k,l.x,l.y,l.z)}}return h.setAttribute("normal",x),h}const js=["root","pelvis","torso","neck","head","eyes","mouthA","mouthB","head_top","head_front","head_L","head_R","mouth_R","torso_front","hip_back","tail","shoulder_L","upperArm_L","foreArm_L","hand_L","shoulder_R","upperArm_R","foreArm_R","hand_R","hip_L","thigh_L","shin_L","foot_L","hip_R","thigh_R","shin_R","foot_R"];function ob(i){const t=i.chinY+i.headU/2,e=i.headU,n={root:[0,0,0],pelvis:[0,i.hipY,0],torso:[0,i.hipY+.05,0],neck:[0,i.shoulderY,0],head:[0,i.chinY,0],eyes:[.04*e,t+.05*e,.2*e],mouthA:[.04*e,t-.2*e,.22*e],mouthB:[.04*e,t-.24*e,.22*e],head_top:[0,i.crownY,0],head_front:[.04*e,t,0],head_L:[-.33*e,t-.065*e,-.035*e],head_R:[.33*e,t-.065*e,-.035*e],mouth_R:[.14*e,t-.22*e,.24*e],torso_front:[0,i.hipY+.05+i.torsoLen*.5,0],hip_back:[0,i.hipY-.1,-.2*i.belly],tail:[0,i.hipY-.1,-.2*i.belly],shoulder_L:[-i.shoulderX,i.shoulderY-.08,0],upperArm_L:[-i.shoulderX,i.shoulderY-.08,0],foreArm_L:[-i.shoulderX,i.shoulderY-.08-i.armUpper,0],hand_L:[-i.shoulderX,i.shoulderY-.08-i.armUpper-i.armFore,0],shoulder_R:[i.shoulderX,i.shoulderY-.08,0],upperArm_R:[i.shoulderX,i.shoulderY-.08,0],foreArm_R:[i.shoulderX,i.shoulderY-.08-i.armUpper,0],hand_R:[i.shoulderX,i.shoulderY-.08-i.armUpper-i.armFore,0],hip_L:[-i.hipX,i.hipY,0],thigh_L:[-i.hipX,i.hipY,0],shin_L:[-i.hipX,i.hipY-i.thigh,0],foot_L:[-i.hipX,i.ankleY,0],hip_R:[i.hipX,i.hipY,0],thigh_R:[i.hipX,i.hipY,0],shin_R:[i.hipX,i.hipY-i.thigh,0],foot_R:[i.hipX,i.ankleY,0]},s={pelvis:"root",torso:"pelvis",neck:"torso",head:"neck",eyes:"head",mouthA:"head",mouthB:"head",head_top:"head",head_front:"head",head_L:"head",head_R:"head",mouth_R:"head",torso_front:"torso",hip_back:"pelvis",tail:"hip_back",shoulder_L:"torso",upperArm_L:"shoulder_L",foreArm_L:"upperArm_L",hand_L:"foreArm_L",shoulder_R:"torso",upperArm_R:"shoulder_R",foreArm_R:"upperArm_R",hand_R:"foreArm_R",hip_L:"pelvis",thigh_L:"hip_L",shin_L:"thigh_L",foot_L:"shin_L",hip_R:"pelvis",thigh_R:"hip_R",shin_R:"thigh_R",foot_R:"shin_R"},r={},o={},a={};js.forEach((l,c)=>{const h=new df;h.name=l,r[l]=h,o[l]=new D(...n[l]),a[l]=c});for(const l of js){const c=s[l],h=o[l].clone();c&&(r[c].add(r[l]),h.sub(o[c])),r[l].position.copy(h)}return{bones:r,list:js.map(l=>r[l]),index:a,bind:o}}const Tc=["head","h","T","A","hem","belly","legs"];function ab(i,t,e={}){var r;const n=i[t.body],s={headScale:e.headScale??t.headScale};for(const o of Tc)s[o]=n[o]*(((r=t.shape)==null?void 0:r[o])??1)*(e[o]??1);return s}function lb(i){const t=i.head*i.headScale,e=i.h*3.45-i.head,n=1.25*i.legs,s=.15,r=Math.max(.3,e-n-s),o=n+r,a=o+s,l=.5+.5*(r/1.05),c=n/1.25;return{s:i,headU:t,hipY:n,shoulderY:o,chinY:a,crownY:a+t,torsoLen:r,T:i.T,A:i.A,hem:i.hem,belly:i.belly,shoulderX:.48*i.T,armUpper:.42*l,armFore:.4*l,hipX:.15*Math.sqrt(i.T),thigh:.56*c,shin:.55*c,ankleY:.14*c}}const Mu=i=>i.crownY/i.headU,Ni={color:"#111111",flat:!0,outline:0},ds="#FFFFFF";function Pn(i){const t=i.d.headU;return{q:{a:.34*t,b:.5*t,c:.26*t,e1:.55,e2:.75},c:[.04*t,i.d.chinY+t/2,0]}}function Gf(i){const t=i.d;return{q:{a:.38*t.T,b:t.torsoLen/2+.02,c:.26*t.belly,e1:.45,e2:.5},y:t.hipY+.05+t.torsoLen/2}}const On=(i,t=.35)=>{const e=new In(i,12,8);return e.scale(1,1,t),e};function cb(i,t){const e=i.d,n=e.headU,s={color:t.skin,outline:1},r={color:t.hands??t.skin,outline:.8},o=t.top,a=o.type==="body",l={color:a?t.skin:o.color,outline:1,...o.pattern?{pattern:o.pattern,color2:o.color2??ds,rep:4}:{}},c=o.type==="varsity"&&o.color2?{color:o.color2,outline:.8}:{...l,outline:.8},h=o.type==="polo"||o.type==="hawaiian",{q:u,c:d}=Pn(i);i.blob(u,"head",s,d);for(const f of[-1,1]){const _=f<0?"head_L":"head_R",E=i.rig.bind[_];if(i.blob({a:.06*n,b:.12*n,c:.113*n,e1:1,e2:1},_,{...s,outline:.8},[E.x,E.y,E.z]),f<0)for(const w of[1,-1])i.box(.02*n,.113*n,.013*n*2,_,Ni,[E.x-.062*n,E.y,E.z],[w*Math.PI/4,0,0])}i.cyl(.11,.11,e.chinY-e.shoulderY+.13,"neck",{...s,outline:.8},[0,(e.shoulderY+e.chinY)/2,0]);const{q:p,y:x}=Gf(i);if((a||o.type==="offshoulder")&&i.blob(p,"torso",s,[0,x,0]),!a){const f=o.type==="offshoulder",_=qs(p,.04,f?{b:p.b*.82}:{});if(i.blob(_,"torso",l,[0,f?x-p.b*.2:x,0]),i.torus(_.a*.92,.035,"torso",{...l,pattern:void 0,outline:.8},[0,e.hipY+.08,0],[Math.PI/2,0,0]),o.type==="hoodie"){i.box(.42*e.T,.16,.06,"torso",{color:o.color,outline:.7},[0,e.hipY+.3,p.c*.95]);for(const E of[-1,1])i.cyl(.012,.012,.3,"torso",{color:ds,outline:0},[E*.07,e.shoulderY-.25,p.c*.9])}o.type==="polo"&&i.box(.3,.06,.12,"torso",{color:o.color,outline:.7},[0,e.shoulderY-.02,.14],[-.4,0,0]),o.collar==="tee"&&i.torus(.13,.025,"torso",{color:o.color,outline:.7},[0,e.shoulderY-.02,0],[Math.PI/2,0,0]),o.collar==="vneck"&&i.onFace(qs(p,.04),[0,x,0],hb(.2,.26),"torso",{color:t.skin},0,p.b-.18,.01)}const S={a:.34*e.T,b:.14,c:.23*e.belly,e1:.6,e2:.6},m={color:t.pants.color,outline:.8};i.blob(qs(S,.04),"pelvis",m,[0,e.hipY-.01,0]);for(const f of["L","R"]){const _=f==="L"?-1:1,E=i.rig.bind[`upperArm_${f}`],w=i.rig.bind[`foreArm_${f}`],k=i.rig.bind[`hand_${f}`],v=[0,0,_*.05];i.blob({a:.12*e.A+.04,b:e.armUpper/2+.06,c:.13*e.A+.04,e1:.5,e2:.8},`upperArm_${f}`,c,[E.x,E.y-e.armUpper/2,0],v);const A=h?r:c;i.blob({a:.11*e.A+(h?0:.04),b:e.armFore/2+.04,c:.12*e.A+(h?0:.04),e1:.5,e2:.8},`foreArm_${f}`,A,[w.x,w.y-e.armFore/2,0],v),!a&&!h&&i.torus(.125*e.A,.03,`foreArm_${f}`,{...c,pattern:void 0},[k.x,k.y+.04,0],[Math.PI/2,0,0]);const g=Math.sqrt(e.A);i.blob({a:.1*g,b:.15*g,c:.085*g,e1:.6,e2:.8},`hand_${f}`,r,[k.x,k.y-.12*g,0]);const b=t.pants.type==="wide"?1.15:1,C=i.rig.bind[`thigh_${f}`],T=i.rig.bind[`shin_${f}`],F=i.rig.bind[`foot_${f}`],P=.19*e.hem*b,B=(t.pants.type==="straight"||t.pants.type==="jeans"?.21:.25)*e.hem*b,L=P+(B-P)*.5,H=Math.sqrt(e.hem)*.9,U=i.cyl(P,L,e.thigh+.02,`thigh_${f}`,m,[C.x+_*.02,C.y-e.thigh/2,0]);wu(U,H);const J=T.y-(F.y-.01),tt=i.cyl(L,B,J,`shin_${f}`,m,[T.x+_*.05,T.y-J/2,0]);wu(tt,H),t.pants.type==="jeans"&&i.torus(B*.98,.03,`shin_${f}`,{color:"#9FC1EE",outline:.7},[T.x+_*.05,F.y+.02,0],[Math.PI/2,0,0]);const ut={color:t.shoes.color,outline:.8},Mt={a:.15,b:.075,c:.3,e1:.7,e2:.8};i.blob(Mt,`foot_${f}`,ut,[F.x+_*.07,.075,.12],[0,_*.14,0]),t.shoes.type==="sneaker"&&i.blob({...Mt,a:.155,b:.03,c:.305},`foot_${f}`,{color:ds===t.shoes.color.toUpperCase()?"#DDDDDD":ds,outline:0},[F.x+_*.07,.03,.12],[0,_*.14,0])}db(i,t)}function wu(i,t){i.computeBoundingBox();const e=(i.boundingBox.min.z+i.boundingBox.max.z)/2,n=i.attributes.position;for(let s=0;s<n.count;s++)n.setZ(s,e+(n.getZ(s)-e)*t)}function hb(i,t){const e=new In(1,3,2);return e.scale(i/2,t/2,.01),e}function db(i,t){const e=i.d.headU,{q:n,c:s}=Pn(i),r=(h,u)=>[h*e,u*e],o=h=>{for(const[u,d]of[r(-.09,.03),r(.21,.03)])h(u,d)},a={...Ni};switch(t.face.eyes){case"dots3":for(const[h,u]of[r(-.05,.15),r(.23,0)])i.onFace(n,s,On(.05*e),"eyes",a,h,u,-.005);break;case"dots2":o((h,u)=>i.onFace(n,s,On(.04*e),"eyes",a,h,u,-.005));break;case"x":o((h,u)=>{for(const d of[1,-1])i.onFace(n,s,fn(.11*e,.025*e,.02),"eyes",a,h,u,0,d*Math.PI/4)});break;case"closed":case"happy":o((h,u)=>i.onFace(n,s,Su(.05*e,.012*e),"eyes",a,h,u,0,t.face.eyes==="closed"?Math.PI:0));break;case"wide":o((h,u)=>{i.onFace(n,s,On(.07*e,.3),"eyes",{color:ds,outline:0},h,u,-.005),i.onFace(n,s,On(.035*e,.4),"eyes",a,h+.01*e,u,.012)});break}const[l,c]=r(.06,-.2);switch(t.face.mouth){case"dot":i.onFace(n,s,On(.05*e),"mouthA",a,...r(-.01,-.22),-.005);break;case"teeth":if(t.face.eyes==="mask")break;i.onFace(n,s,fn(.25*e,.09*e,.02),"mouthA",{color:ds,outline:0},l,c,0);for(const h of[-.06,0,.06])i.onFace(n,s,fn(.012*e,.09*e,.02),"mouthA",a,l+h*e,c,.008);break;case"smile":case"tongue":case"fangs-tongue":if(i.onFace(n,s,Su(.07*e,.014*e),"mouthA",a,l,c,0,Math.PI),t.face.mouth!=="smile"&&i.onFace(n,s,On(.035*e,.3),"mouthA",{color:"#FF5AD9",outline:0},l+.01*e,c-.05*e,.004),t.face.mouth==="fangs-tongue")for(const h of[-1,1])i.onFace(n,s,ub(.015*e,.04*e),"mouthA",{color:ds,outline:0},l+h*.045*e,c-.03*e,.006,Math.PI);break;case"zigzag":for(let h=0;h<4;h++)i.onFace(n,s,fn(.05*e,.014*e,.02),"mouthA",a,l+(h-1.5)*.04*e,c,0,(h%2?1:-1)*.6);break;case"o":i.onFace(n,s,Wf(.035*e,.012*e),"mouthA",a,l,c,0);break;case"flat":i.onFace(n,s,fn(.12*e,.016*e,.02),"mouthA",a,l,c,0);break}}const fn=(i,t,e)=>new cn(i,t,e),Su=(i,t)=>new Zr(i,t,5,14,Math.PI),Wf=(i,t)=>new Zr(i,t,5,16),ub=(i,t)=>new fa(i,t,6),Pe=(i,t,e=.8)=>({color:i??t,outline:e}),Tr=i=>new pf(i);function Me(i,t,e,n){const{c:s}=Pn(i),r=i.d.headU;return[s[0]+t*r,s[1]+e*r,s[2]+n*r]}function Lo(i,t,e=.035,n=1.2){const{q:s,c:r}=Pn(i),o=i.d.headU;i.blob(qs(s,e*o),"head_top",Pe(t,"#1C1C1C",1),[r[0],r[1]+.013*o,r[2]-.02*o],[-.32,0,0],n)}function Eu(i,t){const e=new Zc;return[[0,i],[.18,.55],[.42,.75],[.5,.2],[.3,-.5],[0,-.6],[-.3,-.5],[-.5,.2],[-.4,.62],[-.2,.45]].forEach(([s,r],o)=>o?e.lineTo(s*t,r*i*.5):e.moveTo(s*t,r*i*.5)),e.closePath(),new pa(e,{depth:.03,bevelEnabled:!1})}const bl={"mask.vinnie":(i,t)=>{var o;const e=i.d.headU,n={a:.29*e,b:.51*e,c:.05*e,e1:.55,e2:.3},s=Me(i,.07,.013,.262);i.blob(n,"head_front",Pe(t.color,"#FF5AD9",1),s);const r={color:t.color2??"#E04DC0",outline:0};for(const[a,l]of[[-.103,.086],[.215,.086]])i.onFace(n,s,On(.04*e,.3),"eyes",{color:"#FFFFFF",outline:0},a*e,l*e,0),i.onFace(n,s,On(.02*e,.4),"eyes",Ni,a*e,l*e,.006*e);i.onFace(n,s,fn(.06*e,.23*e,.02*e),"head_front",r,.088*e,-.013*e,.004*e),((o=t.params)==null?void 0:o.nose)==="cross"&&i.onFace(n,s,fn(.11*e,.05*e,.02*e),"head_front",r,.088*e,-.09*e,.006*e),i.onFace(n,s,fn(.366*e,.134*e,.02*e),"mouthA",{color:"#FFFFFF",outline:0},.052*e,-.241*e,.004*e);for(const a of[-.09,0,.09])i.onFace(n,s,fn(.012*e,.125*e,.02*e),"mouthA",Ni,(.052+a)*e,-.241*e,.012*e)},"mask.strap":(i,t)=>{const{q:e}=Pn(i),n=i.d.headU;i.blob({a:e.a+.02*n,b:.032*n,c:e.c+.02*n,e1:.2,e2:.75},"head",Pe(t.color,"#6B6B6B",.7),Me(i,0,.108,0))},"collar.vneck-tie":i=>{const{q:t,y:e}=Gf(i),n=qs(t,.04),s=n.b-.06,r=new Zc;r.moveTo(-.1,0),r.lineTo(.1,0),r.lineTo(0,-.22),r.closePath(),i.onFace(n,[0,e,0],new pa(r,{depth:.01,bevelEnabled:!1}),"torso",{color:"#FFFFFF",outline:0},0,s,.002),i.onFace(n,[0,e,0],fn(.056,.2,.012),"torso",Ni,0,s-.17,.012);for(const o of[.3,.45,.6])i.onFace(n,[0,e,0],On(.02),"torso",Ni,.012,s-o,.004)},"collar.turtleneck":(i,t)=>{i.cyl(.15,.17,.12,"neck",Pe(t.color,"#00B4EE"),[0,i.d.shoulderY+.02,0],void 0,!0)},choker:(i,t)=>{const e=(i.d.shoulderY+i.d.chinY)/2+.02;i.torus(.12,.02,"neck",{color:t.color??"#111111",flat:!0,outline:0},[0,e,0],[Math.PI/2,0,0]),i.torus(.025,.008,"neck",{color:"#C0C0C0",outline:0},[0,e-.03,.12])},"hair.cap":(i,t)=>Lo(i,t.color??"#1C1C1C"),"hair.bun":(i,t)=>{const e=i.d.headU;i.sphere(.16*e,"head_top",Pe(t.color,"#7B2CBF",1),Me(i,-.14,.5,-.14))},"hair.chopsticks":(i,t)=>{const e=i.d.headU,n={color:t.color??"#FFE100",outline:.7};i.cyl(.014*e,.014*e,.41*e,"head_top",n,Me(i,-.103,.576,-.129),[.15,0,-.45]),i.cyl(.014*e,.014*e,.35*e,"head_top",n,Me(i,-.18,.559,-.129),[-.2,0,.95])},"hair.buns2":(i,t)=>{const e=i.d.headU;for(const n of[-1,1])i.sphere(.14*e,"head_top",Pe(t.color,"#FF7ADB",1),Me(i,n*.2,.45,-.05))},"hair.pigtails":(i,t)=>{const e=i.d.headU;for(const n of["L","R"]){const s=n==="L"?-1:1,r=n==="L"?"head_L":"head_R",o=[Me(i,s*.3,.25,-.05),Me(i,s*.42,.1,-.05),Me(i,s*.46,-.1,-.02),Me(i,s*.44,-.3,0)];i.tube(o,.02*e,r,Pe(t.color,"#1C1C1C",.7),Tr),i.sphere(.09*e,r,Pe(t.color,"#1C1C1C",.8),o[3])}},"hair.long":(i,t)=>{const e=i.d.headU,n=t.color??"#FF7ADB";Lo(i,n,.04,1.35),i.cyl(.36*e,.4*e,1*e,"head",Pe(n,n,1),Me(i,0,-.45,-.12),[0,0,0],!0);for(const s of[-1,1])i.blob({a:.06*e,b:.32*e,c:.08*e,e1:.6,e2:.8},"head",Pe(n,n,.8),Me(i,s*.33,-.2,.08))},"hair.swoop":(i,t)=>{const e=i.d.headU,n=t.color??"#1C1C1C";Lo(i,n);for(let s=0;s<3;s++)i.cone(.09*e,.32*e,"head_top",Pe(n,n,.8),Me(i,-.12+s*.12,.5+s*.02,.1-s*.04),[0,0,-1.2],[1,1,.5])},"hair.mohawk":(i,t)=>{const e=i.d.headU;for(let n=0;n<6;n++)i.cone(.07*e,.22*e,"head_top",Pe(t.color,"#FF5AD9",.8),Me(i,.02,.52-Math.abs(n-2.5)*.02,.2-n*.08),[-(n-2.5)*.15,0,0],[.5,1,1])},"hair.flattop":(i,t)=>{const e=i.d.headU;i.blob({a:.31*e,b:.21*e,c:.25*e,e1:.3,e2:.3},"head_top",Pe(t.color,"#3FB4EA",1),Me(i,0,.42,-.02))},"hair.bob":(i,t)=>{const e=i.d.headU,n=t.color??"#7B35C4";Lo(i,n,.06,1.75),i.blob({a:.3*e,b:.07*e,c:.08*e,e1:.4,e2:.6},"head_top",Pe(n,n,.8),Me(i,.02,.3,.22))},horns:(i,t)=>{const e=i.d.headU;for(const n of[-1,1]){const s=[Me(i,n*.2,.42,.02),Me(i,n*.3,.58,.02),Me(i,n*.28,.74,0)];i.tube(s,.05*e,"head_top",Pe(t.color,"#E04DC0",.7),Tr),i.cone(.05*e,.12*e,"head_top",Pe(t.color,"#E04DC0",.7),Me(i,n*.26,.8,0),[0,0,n*.3])}},"ears.cat":(i,t)=>{const e=i.d.headU;for(const n of[-1,1])i.cone(.117*e,.2*e,"head_top",Pe(t.color,"#00B4EE",.8),Me(i,n*.215,.49,.043),[0,0,-n*.3],[1,1,.45]),i.cone(.065*e,.12*e,"head_top",{color:t.color2??"#FF5AD9",outline:0},Me(i,n*.22,.47,.086),[0,0,-n*.3],[1,1,.3])},whiskers:i=>{const{q:t,c:e}=Pn(i),n=i.d.headU;for(const[s,r]of[[-.09,1],[.224,-1]])for(const o of[-.024,0,.024])i.onFace(t,e,fn(.09*n,.007*n*2,.013),"head_front",Ni,s*n,(-.116+o)*n,0,r*o*-8)},"tail.spring":(i,t)=>{const e=i.d,n=-.22*e.belly,s=e.shoulderY-.25,r=[[0,e.hipY-.05,n],[-.45,e.hipY-.12,n-.08],[-.6,e.hipY+.2,n-.08],[-.62,s-.2,n-.06]];for(let a=0;a<=10;a++){const l=Math.PI+a/10*Math.PI*2.5;r.push([-.5+Math.cos(l)*.12*(1-a/22),s+Math.sin(l)*.12*(1-a/22),n-.05])}i.tube(r,.033,"tail",Pe(t.color,"#00B4EE",.7),Tr);const o=r[r.length-1];i.sphere(.037,"tail",{color:t.color2??"#FFE100",outline:.7},[o[0],o[1]-.04,o[2]])},hood:(i,t)=>{const{q:e,c:n}=Pn(i),s=i.d.headU,r=t.color??"#5E5E5E";i.blob(qs(e,.09*s),"head",Pe(r,r,1),[n[0],n[1]+.03*s,n[2]-.06*s],[-.25,0,0],1.95),i.cyl(.3*s,.36*s,.5*s,"neck",Pe(r,r,.8),[0,i.d.shoulderY+.05,-.12],void 0,!0)},"face.flame":(i,t)=>{const{q:e,c:n}=Pn(i),s=i.d.headU;i.onFace(e,n,Eu(.75*s,.42*s),"head_front",{color:t.color2??"#FFE100",flat:!0,outline:0},.02*s,-.02*s,0),i.onFace(e,n,Eu(.62*s,.34*s),"head_front",{color:t.color??"#FF5AD9",flat:!0,outline:0},.02*s,-.03*s,.012*s)},"hat.bucket":(i,t)=>{const e=i.d.headU,n=t.color??"#FFFFFF";i.cyl(.3*e,.36*e,.22*e,"head_top",Pe(n,n,1),Me(i,0,.47,-.02)),i.cyl(.5*e,.5*e,.03*e,"head_top",Pe(n,n,1),Me(i,0,.37,-.02),[.12,0,0])},"glasses.shades":(i,t)=>{const{q:e,c:n}=Pn(i),s=i.d.headU,r={color:t.color??"#111111",outline:0};for(const o of[-.09,.21])i.onFace(e,n,fn(.16*s,.1*s,.03*s),"head_front",r,o*s,.04*s,.01*s);i.onFace(e,n,fn(.16*s,.02*s,.02*s),"head_front",r,.06*s,.06*s,.012*s)},"glasses.aviator":(i,t)=>{const{q:e,c:n}=Pn(i),s=i.d.headU;for(const r of[-.09,.21])i.onFace(e,n,On(.085*s,.2),"head_front",{color:t.color??"#FF9E3A",outline:0},r*s,.03*s,.012*s),i.onFace(e,n,Wf(.085*s,.01*s),"head_front",{color:"#E6B94A",outline:0},r*s,.03*s,.014*s)},"visor.cyber":(i,t)=>{const{q:e,c:n}=Pn(i),s=i.d.headU;i.blob({a:.33*s,b:.06*s,c:e.c+.03*s,e1:.3,e2:.8},"head_front",Pe(t.color,"#FF4A2A",.8),[n[0],n[1]+.04*s,n[2]]),i.onFace(e,n,fn(.4*s,.02*s,.02*s),"head_front",{color:t.color2??"#FFE100",flat:!0,outline:0},.04*s,.04*s,.035*s)},eyepatch:(i,t)=>{const{q:e,c:n}=Pn(i),s=i.d.headU;i.onFace(e,n,On(.07*s,.3),"head_front",{color:t.color??"#111111",flat:!0,outline:0},-.09*s,.03*s,.004*s),i.torus(e.a+.01*s,.012*s,"head",{color:"#111111",flat:!0,outline:0},[n[0],n[1]+.06*s,n[2]],[Math.PI/2+.25,0,.1])},"earring.pin":(i,t)=>{const e=t.side==="R"?"head_R":"head_L",n=i.rig.bind[e],s=i.d.headU;i.cyl(.012*s,.012*s,.12*s,e,{color:t.color??"#C0C0C0",outline:0},[n.x+(t.side==="R"?.06:-.06)*s,n.y-.12*s,n.z],[0,0,.4])},"earring.hoop":(i,t)=>{const e=t.side==="R"?"head_R":"head_L",n=i.rig.bind[e],s=i.d.headU;i.torus(.05*s,.01*s,e,{color:t.color??"#FFE100",outline:0},[n.x+(t.side==="R"?.05:-.05)*s,n.y-.15*s,n.z],[0,Math.PI/2,0])},mustache:(i,t)=>{const e=i.d.headU;for(const n of[-1,1]){const s=[Me(i,.06,-.12,.27),Me(i,.06+n*.08,-.14,.26),Me(i,.06+n*.14,-.1,.23)];i.tube(s,.022*e,"head_front",{color:t.color??"#1C1C1C",outline:0},Tr)}},headphones:(i,t)=>{var o,a;const e=i.d.headU,n=((o=t.params)==null?void 0:o.mode)==="neck",s=Pe(t.color,"#2C2C2C",.7),r={color:String(((a=t.params)==null?void 0:a.cup)??t.color??"#2C2C2C"),outline:.7};if(n){const l=i.d.shoulderY+.02;for(const c of[-1,1])i.cyl(.15,.15,.08,"neck",r,[c*.24,l,.08],[0,0,Math.PI/2+c*.3]);i.torus(.26,.025,"neck",s,[0,l-.02,-.02],[Math.PI/2-.15,0,0],Math.PI*1.15);return}for(const l of[-1,1]){const c=Me(i,l*.38,-.06,0);if(i.cyl(.19*e,.19*e,.09*e,l<0?"head_L":"head_R",r,c,[0,0,Math.PI/2]),l<0)for(const h of[1,-1])i.box(.02,.15*e,.02*e,"head_L",Ni,[c[0]-.05*e,c[1],c[2]],[h*Math.PI/4,0,0])}i.torus(.4*e,.028*e,"head_top",s,Me(i,0,.02,-.03),[.14,0,-.03],3.5)},"prop.cup":i=>{const t=i.rig.bind.hand_R;i.cyl(.08,.06,.2,"hand_R",{color:"#FFFFFF",outline:.7},[t.x+.05,t.y-.08,.1]),i.cyl(.085,.085,.05,"hand_R",{color:"#111111",outline:0},[t.x+.05,t.y+.03,.1])},"prop.umbrella":i=>{const t=i.rig.bind.hand_R;i.cyl(.02,.02,1.6,"hand_R",{color:"#111111",outline:.6},[t.x+.05,t.y+.6,.05]),i.cone(.75,.4,"hand_R",{color:"#0AB8EE",outline:.7},[t.x+.05,t.y+1.45,.05])},"prop.briefcase":i=>{const t=i.rig.bind.hand_R;i.box(.42,.3,.12,"hand_R",{color:"#8B5A2B",outline:.7},[t.x+.05,t.y-.35,0]),i.torus(.07,.015,"hand_R",{color:"#111111",outline:0},[t.x+.05,t.y-.18,0])},"prop.bag":i=>{const t=i.rig.bind.hand_R;i.box(.4,.42,.22,"hand_R",{color:"#E2B77F",outline:.7},[t.x+.05,t.y-.38,0]),i.cyl(.05,.05,.42,"hand_R",{color:"#F2C46B",outline:.6},[t.x-.05,t.y-.05,0],[0,0,.3])},"prop.balloon":i=>{const t=i.rig.bind.hand_R;i.cyl(.006,.006,1.3,"hand_R",{color:"#111111",outline:0},[t.x+.1,t.y+.6,0]),i.sphere(.3,"hand_R",{color:"#FF7ADB",outline:.7},[t.x+.12,t.y+1.45,0],[1,1.2,1])},"prop.flowers":i=>{const t=i.rig.bind.hand_R;i.cone(.12,.35,"hand_R",{color:"#F4EEDF",outline:.6},[t.x+.05,t.y+.05,.1],[Math.PI,0,0]),["#FF7ADB","#FFE100","#0AB8EE"].forEach((e,n)=>i.sphere(.08,"hand_R",{color:e,outline:.6},[t.x+.05+(n-1)*.09,t.y+.3+n%2*.06,.1]))},"prop.dog":i=>{const t=i.rig.bind.hand_R,e=1,n={color:"#FFFFFF",outline:.7};i.blob({a:.32,b:.17,c:.18,e1:.8,e2:.8},"root",n,[e,.4,.2]),i.sphere(.16,"root",n,[e+.32,.62,.2]);for(const[s,r]of[[-.18,.1],[-.18,.3],[.18,.1],[.18,.3]])i.cyl(.04,.04,.3,"root",{color:"#111111",outline:0},[e+s,.15,r]);i.tube([[t.x,t.y-.1,.05],[e*.6,.9,.15],[e+.3,.6,.2]],.012,"hand_R",{color:"#FF4A2A",outline:0},Tr)}};function fb(i,t){var e;for(const n of t.attach)(e=bl[n.part])==null||e.call(bl,i,n,t)}const or=.58;function Au(i,t,e){const n=e?i.filter(_=>_.bone===e):i;if(!n.length)return null;const s=n.map(_=>{const E=_.geo.index?_.geo.toNonIndexed():_.geo;E.attributes.uv||E.setAttribute("uv",new ye(new Float32Array(E.attributes.position.count*2),2)),E.attributes.normal||E.computeVertexNormals();const w=rb(E.clone(),Math.PI);return{g:E,hull:w.attributes.normal,part:_}}),r=s.reduce((_,E)=>_+E.g.attributes.position.count,0),o=new Float32Array(r*3),a=new Float32Array(r*3),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*3),u=new Float32Array(r*3),d=new Float32Array(r*4),p=new Float32Array(r),x=new Uint16Array(r*4),S=new Float32Array(r*4);let m=0;for(const{g:_,hull:E,part:w}of s){const k=_.attributes.position,v=_.attributes.normal,A=_.attributes.uv,g=Jd(w.paint.color),b=Jd(w.paint.color2??w.paint.color),C=Math.max(0,th.indexOf(w.paint.pattern??"none")),T=t.index[w.bone],F=t.bind[w.bone];for(let P=0;P<k.count;P++,m++){const B=k.getX(P)-(e?F.x:0),L=k.getY(P)-(e?F.y:0),H=k.getZ(P)-(e?F.z:0);o.set([B,L,H],m*3),a.set([v.getX(P),v.getY(P),v.getZ(P)],m*3),l.set([E.getX(P),E.getY(P),E.getZ(P)],m*3),c.set([A.getX(P),A.getY(P)],m*2),h.set([g.r,g.g,g.b],m*3),u.set([b.r,b.g,b.b],m*3),d.set([C,w.paint.rep??3,w.paint.flat?1:0,0],m*4),p[m]=w.paint.outline??.8,x[m*4]=T,S[m*4]=1}}const f=new Oe;return f.setAttribute("position",new _e(o,3)),f.setAttribute("normal",new _e(a,3)),f.setAttribute("aHullNormal",new _e(l,3)),f.setAttribute("uv",new _e(c,2)),f.setAttribute("color",new _e(h,3)),f.setAttribute("color2",new _e(u,3)),f.setAttribute("aPat",new _e(d,4)),f.setAttribute("aOutline",new _e(p,1)),e||(f.setAttribute("skinIndex",new Wc(x,4)),f.setAttribute("skinWeight",new _e(S,4))),f.computeBoundingSphere(),f}function oh(i,t,e={}){var m;const n=lb(ab(t,i,e.lab)),s=ob(n),r=new ln;r.name=`peepl-${i.id}`,r.add(s.bones.root),r.updateMatrixWorld(!0);const o=e.groups?null:new $c(s.list),a=Oy(),l=Hy(),c=[],h=[],u=[],d=[];for(const f of e.lods??[0,1,2]){const _=new Ny(n,s,Iy[f]);cb(_,i),fb(_,i);const E=new ln;E.name=`lod${f}`;let w=0;if(o){const k=Au(_.items,s);d.push(k);const v=new ld(k,a),A=new ld(k,l);for(const g of[v,A])g.frustumCulled=!1,g.bind(o);v.castShadow=!0,E.add(v,A),h.push(A),w=k.attributes.position.count/3*2}else for(const k of js){const v=Au(_.items,s,k);if(!v)continue;d.push(v);const A=new be(v,a),g=new be(v,l);A.castShadow=!0,s.bones[k].add(A,g),A.userData.lod=g.userData.lod=f,h.push(g),w+=v.attributes.position.count/3*2}for(const k of _.items)k.geo.dispose();c[f]=E,u[f]=w,r.add(E)}r.scale.setScalar(or);let p=!0,x=((m=e.lods)==null?void 0:m[0])??0;const S={id:i.id,root:r,rig:s,dims:n,lods:c,hulls:h,tris:u,setLod(f){x=f,c.forEach((_,E)=>_&&(_.visible=E===f));for(const _ of h)o&&(_.visible=p);o||s.bones.root.traverse(_=>{_.userData.lod!==void 0&&(_.visible=_.userData.lod===f&&(p||!h.includes(_)))})},setOutline(f){p=f,S.setLod(x)},dispose(){for(const f of d)f.dispose();r.removeFromParent()}};return S.setLod(x),S}const pb=["idle","walk","talk","sit","react","turn","wave","joy","tv","read","browse","sleep"],en=Math.PI/180,Io=i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,es=i=>Math.min(1,Math.max(0,i));class Tu{constructor(t=9){I(this,"x",0);I(this,"v",0);this.w=t}step(t,e){const n=this.w*this.w*(t-this.x)-2*this.w*this.v;return this.v+=n*e,this.x+=this.v*e,this.x}}class ah{constructor(t,e,n="peepl"){I(this,"base","idle");I(this,"talking",!1);I(this,"speed",1.6);I(this,"yaw",0);I(this,"t",0);I(this,"bindLocal");I(this,"shots",[]);I(this,"baseFrom","idle");I(this,"baseAt",-10);I(this,"rng");I(this,"nextBlink",2);I(this,"nextLook",3);I(this,"lookFrom",0);I(this,"lookTo",0);I(this,"lookAt",0);I(this,"tail",new Tu(9));I(this,"bun",new Tu(10));I(this,"prevPelvisX",0);I(this,"d");this.rig=t,this.bindLocal={};for(const s of js)this.bindLocal[s]=t.bones[s].position.clone();this.rng=Nf(sa(n)),this.d=e}play(t,e){t==="talk"?this.talking=!0:t==="react"||t==="wave"||t==="joy"?this.shots.push({clip:t,at:this.t}):t==="turn"?this.shots.push({clip:t,at:this.t,from:this.yaw,to:e??this.yaw+Math.PI/2}):t!==this.base&&(this.baseFrom=this.base,this.base=t,this.baseAt=this.t)}ok(){return this.rig.list.every(t=>[t.position.x,t.position.y,t.position.z,t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w,t.scale.y].every(Number.isFinite))}update(t){this.t+=t;const e=this.t,n=this.rig.bones;for(const h of js){const u=n[h];u.position.copy(this.bindLocal[h]),u.rotation.set(0,0,0),u.scale.set(1,1,1)}const s=es((e-this.baseAt)/.7),r=s*s*(3-2*s);this.applyBase(this.baseFrom,1-r,e),this.applyBase(this.base,r,e),this.base!=="sleep"&&this.ground(),n.torso.scale.y=1+.012*Math.sin(2.6*e),this.base!=="walk"&&this.base!=="sleep"&&(n.pelvis.position.x+=.02*Math.sin(e*.9)*Math.sin(e*.37)),e>=this.nextLook&&(this.lookFrom=this.look(e),this.lookTo=(this.rng()*2-1)*10*en,this.lookAt=e,this.nextLook=e+3+this.rng()*3),n.head.rotation.y+=this.look(e),e>=this.nextBlink+.12&&(this.nextBlink=e+2.5+this.rng()*3.5),(e>=this.nextBlink&&e<this.nextBlink+.12||this.base==="sleep")&&(n.eyes.scale.y=.1),this.talking&&(n.mouthA.scale.y=Math.floor(e*14)%2?1.7:1,n.head.rotation.x+=2*en*Math.sin(e*9));let o=0,a=1;this.shots=this.shots.filter(h=>{const u=e-h.at;if(h.clip==="react")return u>.5?!1:(a=u<.08?1-.08*(u/.08):u<.2?.92+.18*((u-.08)/.12):1+.1*(1-Io(es((u-.2)/.3))),o+=u<.38?.18*Math.sin(Math.PI*u/.38):0,!0);if(h.clip==="joy")return u>.8?!1:(o+=.2*Math.abs(Math.sin(Math.PI*u/.4)),!0);if(h.clip==="wave"){if(u>1.4)return!1;const p=Math.min(es(u/.2),es((1.4-u)/.2));return n.upperArm_R.rotation.z+=150*en*p,n.foreArm_R.rotation.z+=.4*Math.sin(u*3*Math.PI*2)*p,!0}const d=es(u/.35);return this.yaw=h.from+(h.to-h.from)*Io(d),n.head.rotation.y+=(h.to-h.from)*(Io(es((u+.08)/.35))-Io(d)),u<.45}),n.root.position.y+=o,n.root.scale.y*=a,n.root.scale.x*=1+(1-a)*.5,n.root.rotation.y+=this.yaw;const l=n.pelvis.position.x+n.pelvis.rotation.y,c=(l-this.prevPelvisX)/Math.max(t,.001);this.prevPelvisX=l,n.tail.rotation.z=this.tail.step(-c*.05+.05*Math.sin(e*1.3),t),n.head_top.rotation.z=this.bun.step(-n.head.rotation.y*.15+o*.3,t)}ground(){const t=this.rig.bones,e=this.d;let n=0;for(const s of["L","R"]){const r=t[`thigh_${s}`].rotation.x,o=r+t[`shin_${s}`].rotation.x,a=t[`foot_${s}`].position.y-this.bindLocal[`foot_${s}`].y;n=Math.max(n,e.thigh*Math.cos(r)+(e.hipY-e.thigh-e.ankleY)*Math.cos(o)+e.ankleY-a)}t.pelvis.position.y-=e.hipY-n}look(t){const e=es((t-this.lookAt)/.5);return this.lookFrom+(this.lookTo-this.lookFrom)*e*e*(3-2*e)}applyBase(t,e,n){if(e<=0)return;const s=this.rig.bones;switch(t){case"walk":{const r=this.speed,o=1.5+.4*r,a=n*o*Math.PI,l=Math.asin(Math.min(.9,r/o/2.5)),c=Math.sin(a);s.thigh_L.rotation.x+=-l*c*e,s.thigh_R.rotation.x+=l*c*e,s.shin_L.rotation.x+=Math.max(0,c)*l*1.3*e,s.shin_R.rotation.x+=Math.max(0,-c)*l*1.3*e,s.upperArm_L.rotation.x+=l*.8*c*e,s.upperArm_R.rotation.x+=-l*.8*c*e,s.pelvis.rotation.z+=2*en*c*e,s.pelvis.rotation.y+=6*en*c*e,s.torso.rotation.y+=-8*en*c*e,s.head.rotation.y+=7*en*c*e,s.foot_L.position.y+=Math.max(0,-c)*.08*e,s.foot_R.position.y+=Math.max(0,c)*.08*e;break}case"sit":case"tv":{for(const r of["L","R"])s[`thigh_${r}`].rotation.x+=-85*en*e,s[`shin_${r}`].rotation.x+=85*en*e,s[`upperArm_${r}`].rotation.x+=-25*en*e,s[`foreArm_${r}`].rotation.x+=-35*en*e;s.torso.rotation.x+=4*en*e,t==="tv"&&(s.head.rotation.x+=4*en*Math.sin(n*Math.PI*2/4)*e);break}case"sleep":s.root.rotation.x+=-Math.PI/2*e,s.root.position.y+=.5*e;break;case"read":s.upperArm_L.rotation.x+=-40*en*e,s.foreArm_L.rotation.x+=-70*en*e,s.head.rotation.x+=12*en*e;break;case"browse":s.head.rotation.y+=.5*Math.sin(n*.5)*e;break}}}const Xf="peepls.shapeLab",mb=20*Math.PI/180,gb=1.2,xb=[["2d art",1],["clay sheet",.85],["low poly",.7],["chibi",1.63]],Cu=[{key:"headScale",label:"headScale",min:.5,max:1.6,sane:[.7,1]},{key:"head",label:"head",min:.4,max:2.5,sane:[.9,1.3]},{key:"h",label:"height",min:.4,max:2.5,sane:[.9,1.2]},{key:"T",label:"torso width",min:.4,max:2.5,sane:[.85,2]},{key:"A",label:"arm thickness",min:.4,max:2.5,sane:[.8,1.5]},{key:"hem",label:"trouser hem",min:.4,max:2.5,sane:[.75,1.85]},{key:"belly",label:"belly depth",min:.4,max:2.5,sane:[.85,1.5]},{key:"legs",label:"leg length",min:.4,max:2.5,sane:[.85,1.1]}];function vb(){try{const i=localStorage.getItem(Xf);if(i)return{all:{},per:{},scope:"this",...JSON.parse(i)}}catch{}return{all:{},per:{},scope:"this"}}function Do(i){try{localStorage.setItem(Xf,JSON.stringify(i))}catch{}}function _b(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Kr(i)}function yb(){let i,t=0;const e=new da,n=new mn(22,16/9,.1,400);let s=[],r=[],o,a="vinnie",l=!1,c=null,h=0,u=!0,d="idle",p=null,x=.6,S=null,m=vb();const f=[];let _,E,w,k,v;const A={},g={},b=new Qt,C=(xt,vt)=>{const X=s.find(Z=>Z.id===xt)??s[0],rt=vt??p;return rt?{...X,body:rt}:X},T=xt=>({...m.all,...m.per[xt]??{}});function F(){for(const xt of f)xt.peepl.dispose();f.length=0}function P(xt=!1){F();const vt=l?c??r.map(rt=>({id:rt})):[{id:a}],X=l?c?0:1:h;vt.forEach(({id:rt,body:Z,lab:ft},Ct)=>{const Dt=vt,pt=oh(C(rt,Z),o,{lab:{...T(rt),...ft??{}},groups:i.params.rig==="groups",lods:xt||l?[X]:[0,1,2]});pt.setLod(X),pt.setOutline(u),pt.root.position.x=l?(Ct-(Dt.length-1)/2)*gb*(c?1.6:1):0,e.add(pt.root);const Ut=new ah(pt.rig,pt.dims,rt);Ut.play(d),f.push({peepl:pt,anim:Ut})}),_.count=f.length,E.visible=!l,kn.chars=f.length,kn.lod=[l?0:h===0?1:0,l?f.length:h===1?1:0,h===2&&!l?1:0],B()}function B(){var X;for(const[rt,Z]of Object.entries(g))Z.setAttribute("aria-pressed",String(!l&&rt===a));const xt=m.scope==="all"?m.all:m.per[a]??{};for(const rt of Cu){const Z=xt[rt.key]??(rt.key==="headScale"?C(a).headScale:1);A[rt.key]&&(A[rt.key].value=String(Z))}const vt=(X=f[0])==null?void 0:X.peepl;vt&&v&&(v.textContent=`${Mu(vt.dims).toFixed(2)} heads`)}function L(xt,vt,X){var Z;const rt=m.scope==="all"?m.all:(Z=m.per)[a]??(Z[a]={});rt[xt]=vt,Do(m),P(X)}function H(){var rt;const xt=T(a),vt=m.scope==="all"?{bodyTypes:Object.fromEntries(Object.entries(o).map(([Z,ft])=>[Z,Object.fromEntries(Tc.map(Ct=>[Ct,+(ft[Ct]*(m.all[Ct]??1)).toFixed(3)]))]))}:{headScale:xt.headScale??C(a).headScale,shape:Object.fromEntries(Tc.filter(Z=>xt[Z]!==void 0).map(Z=>[Z,xt[Z]]))},X=JSON.stringify(vt,null,2);(rt=navigator.clipboard)==null||rt.writeText(X).catch(()=>{}),i.toast.show(X.length>60?`${X.slice(0,57)}…`:X,2)}const U=(xt,vt,X="")=>{const rt=V("button",{class:"pixel",style:`pointer-events:auto;font-size:24px;padding:2px 12px 4px;border-radius:999px;border:2px solid var(--white);color:var(--white);background:var(--ink);${X}`});return rt.textContent=xt,rt.addEventListener("click",Z=>{Z.stopPropagation(),vt()}),rt};function J(xt){const vt="position:absolute;top:120px;width:380px;max-height:900px;overflow:auto;background:var(--ink);color:var(--white);border-radius:24px;padding:18px;display:flex;flex-direction:column;gap:10px;pointer-events:auto",X=pt=>V("div",{class:"display",style:"font-size:28px;color:var(--yellow)"},pt),rt=(...pt)=>V("div",{style:"display:flex;flex-wrap:wrap;gap:6px"},...pt),Z=rt(...r.map(pt=>g[pt]=U(pt,()=>{l=!1,a=pt,P()}))),ft=V("select",{class:"pixel",style:"font-size:24px;pointer-events:auto"});for(const pt of["","thin","average","stocky","xl"])ft.append(V("option",{value:pt},pt||"body: cast.json"));ft.addEventListener("change",()=>{p=ft.value||null,P()}),w=V("div",{class:"s99-left",style:`${vt};left:40px`},X("cast"),Z,ft,X("clips"),rt(...pb.map(pt=>U(pt,()=>{var Ut;return(Ut=Tt.clip)==null?void 0:Ut.call(Tt,pt)}))),X("view"),rt(U("lod 0",()=>{var pt;return(pt=Tt.lod)==null?void 0:pt.call(Tt,0)}),U("lod 1",()=>{var pt;return(pt=Tt.lod)==null?void 0:pt.call(Tt,1)}),U("lod 2",()=>{var pt;return(pt=Tt.lod)==null?void 0:pt.call(Tt,2)}),U("line-up",()=>{var pt;return(pt=Tt.lineup)==null?void 0:pt.call(Tt,!l)}),U("outline",()=>{var pt;return(pt=Tt.outline)==null?void 0:pt.call(Tt,!u)}))),v=V("div",{class:"pixel heads-out",style:"font-size:30px;color:var(--yellow)"});const Ct=Cu.map(pt=>{const Ut=V("input",{type:"range",min:pt.min,max:pt.max,step:.01,"aria-label":pt.label,style:"width:100%;accent-color:var(--pink);pointer-events:auto"});Ut.addEventListener("input",()=>L(pt.key,Number(Ut.value),!0)),Ut.addEventListener("change",()=>L(pt.key,Number(Ut.value),!1)),A[pt.key]=Ut;const st=at=>(at-pt.min)/(pt.max-pt.min)*100,lt=V("div",{style:`position:absolute;left:${st(pt.sane[0])}%;width:${st(pt.sane[1])-st(pt.sane[0])}%;top:0;bottom:0;background:var(--lit-white-60);opacity:0.25;border-radius:6px`});return V("label",{class:"pixel",style:"font-size:22px;display:flex;flex-direction:column;gap:2px"},pt.label,V("div",{style:"position:relative"},lt,Ut))}),Dt=U("scope: this peepl",()=>{m.scope=m.scope==="all"?"this":"all",Dt.textContent=m.scope==="all"?"scope: everyone":"scope: this peepl",Do(m),B()});Dt.textContent=m.scope==="all"?"scope: everyone":"scope: this peepl",k=V("div",{class:"s99-right",style:`${vt};right:40px`},X("shape lab"),v,rt(...xb.map(([pt,Ut])=>U(pt,()=>L("headScale",Ut,!1)))),...Ct,rt(Dt,U("reset",()=>{m.scope==="all"?m.all={}:delete m.per[a],Do(m),P()}),U("copy json",H))),xt.append(w,k)}const tt=document.getElementById("gl"),ut=xt=>{S={x:xt.clientX,o:x}},Mt=xt=>{S&&(x=S.o-(xt.clientX-S.x)*.008)},Lt=()=>{S=null};function $t(xt){const vt=xt.clone().project(n);return[(vt.x+1)/2*innerWidth,(1-vt.y)/2*innerHeight]}return{id:"S99",mount(xt,vt){i=xt,s=xt.data.cast.cast,o=xt.data.cast.bodyTypes,r=xt.copy.S12.lineup,xt.params.cast&&s.some(Z=>Z.id===xt.params.cast)&&(a=xt.params.cast),u=xt.params.outline!=="none";const X=sr({lowgpu:xt.params.lowgpu});X.shadowMap.enabled=!1,rr(!0);const rt=rh();e.add(rt.group),_=new gs(new Wi(1,1),new ei({map:_b(),transparent:!0,depthWrite:!1}),16),_.renderOrder=-1,e.add(_),E=new be(new cn(.6,.6,.6),new yi({color:16769280,gradientMap:bi()})),E.position.set(1.5,.3,-.4),e.add(E),J(vt),tt.addEventListener("pointerdown",ut),addEventListener("pointermove",Mt),addEventListener("pointerup",Lt),Object.assign(Tt,{cast:Z=>{l=!1,a=Z,P()},shape:(Z,ft)=>{Z==="all"?m.all=ft??{}:ft?m.per[Z]=ft:delete m.per[Z],Do(m),P()},clip:Z=>{d=Z;for(const ft of f)ft.anim.play(d)},lod:Z=>{h=Z,l=!1,P()},lineup:Z=>{l=Z,c=null,P()},row:Z=>{l=!0,c=Z,P()},outline:Z=>{u=Z;for(const ft of f)ft.peepl.setOutline(Z)},measure:()=>{let Z=1/0,ft=0;const Ct=new D;for(const Dt of f){Dt.peepl.root.updateMatrixWorld(!0);for(const pt of["foot_L","foot_R"])Dt.peepl.rig.bones[pt].getWorldPosition(Ct),Z=Math.min(Z,Ct.y/or-Dt.peepl.dims.ankleY);Dt.peepl.rig.bones.head_top.getWorldPosition(Ct),ft=Ct.y/or/Dt.peepl.dims.headU}return{heads:f.length===1?ft:Mu(f[0].peepl.dims),soleMin:Z,rigOk:f.every(Dt=>Dt.anim.ok())}},swatchPx:()=>E.visible?$t(new D(E.position.x,E.position.y+.3,E.position.z)):null,centrePx:()=>$t(new D(0,1.1,0))}),P()},enter(){this.update(0,0)},update(xt,vt){t=vt;const X=l?c?6+c.length*3:30:8.5,rt=l?.3:.42,Z=l?0:x,ft=new D(l?0:.35,l?1:.95,0);n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),n.position.set(ft.x+Math.sin(Z)*Math.cos(rt)*X,ft.y+Math.sin(rt)*X,ft.z+Math.cos(Z)*Math.cos(rt)*X),n.lookAt(ft),f.forEach((Ct,Dt)=>{Ct.anim.update(xt),l||(Ct.peepl.root.rotation.y=t*mb),b.makeRotationX(-Math.PI/2).setPosition(Ct.peepl.root.position.x,.005,Ct.peepl.root.position.z),b.scale(new D(.64,.64,1)),_.setMatrixAt(Dt,b)}),_.instanceMatrix.needsUpdate=!0,kn.rigOk=f.every(Ct=>Ct.anim.ok()),i.loop.drawFrame&&(sr().render(e,n),nh())},landed:()=>t>=.2,onInput(xt){var vt;xt.type==="key"&&xt.key==="l"&&((vt=Tt.lineup)==null||vt.call(Tt,!l))},exit(){},unmount(){tt.removeEventListener("pointerdown",ut),removeEventListener("pointermove",Mt),removeEventListener("pointerup",Lt),F();for(const xt of Object.keys(Tt))delete Tt[xt];rr(!1),e.clear()},seek(xt){t=xt}}}class bb{constructor(t,e){I(this,"el");I(this,"fill");I(this,"at",-1);this.fill=V("div",{style:"height:100%;width:0;background:var(--pink);border-radius:999px"}),this.el=V("div",{class:"friend-meter",style:"position:absolute;left:750px;top:44px;width:420px;height:96px;border-radius:24px;background:var(--ink);display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform-origin:50% 0"},V("div",{class:"display",style:"font-size:36px;color:var(--yellow)"},t),V("div",{style:"width:300px;height:12px;border-radius:999px;background:var(--lit-tier-off)"},this.fill),V("div",{class:"pixel",style:"font-size:26px;color:var(--white)"},e))}show(t){this.at=t}hide(){this.at=-1}update(t,e){if(this.at<0)return void(this.el.style.display="none");const[n,s]=ke(t,this.at,.4,e);zt(this.el,{display:"flex",transform:`scale(${n})`,opacity:String(s)}),this.fill.style.width=`${le(t,this.at,.8,se.draw)*100}%`}}function $f(i,t="white"){const e=`var(--${t})`;return V("div",{class:"bubble",style:"position:absolute;left:0;top:0;transform-origin:50% 100%;pointer-events:none"},V("div",{class:"pixel bubble-box",style:`position:relative;background:${e};border:5px solid var(--ink);border-radius:18px;padding:8px 18px 10px;font-size:40px;color:var(--ink);white-space:nowrap;margin-bottom:18px`},V("span",{class:"bubble-text"},i),V("div",{style:`position:absolute;left:50%;bottom:-15px;width:22px;height:22px;margin-left:-11px;background:${e};border-right:5px solid var(--ink);border-bottom:5px solid var(--ink);transform:rotate(45deg)`})))}function Mb(i,t,e,n,s,r=1){zt(i,{transform:`translate(${t}px, ${e}px) translate(-50%, -100%) scale(${n*s})`,opacity:String(r),visibility:s>.001&&r>0?"visible":"hidden"})}const Jn=Math.PI/180,Ru=.58,Cc=(i,t)=>Math.atan2(t.x-i.x,t.z-i.z),Pu=(i,t)=>{const e=i.crowd.members.get(t);if(e)return{x:e.peepl.root.position.x,z:e.peepl.root.position.z,yaw:e.anim.yaw,anim:"idle"};const n=i.sim.agents.get(t);return n?{x:n.pos[0],z:n.pos[1],yaw:n.yaw,anim:"idle"}:null};class wb{constructor(t,e){I(this,"active",!1);I(this,"t0",0);I(this,"steps",[]);I(this,"done",new Set);I(this,"choiceAt",-1);I(this,"chips",null);I(this,"branchAt",-1);this.stage=t,this.data=e}start(){const t=this.stage,e=Pu(t,"vinnie"),n=Pu(t,"mochi");if(!e||!n)return;this.active=!0,this.t0=t.t,this.steps=this.data.steps,this.done.clear(),this.branchAt=-1,t.holdSim(!0),t.poses.set("vinnie",{...e,anim:"idle"}),t.poses.set("mochi",{...n,anim:"idle"});const s=new D((e.x+n.x)/2,0,(e.z+n.z)/2);t.rig.go({target:s.setY(1),yaw:45*Jn,pitch:24*Jn,dist:this.data.camera.dist},.9,"venue")}choose(t){var s;if(!this.chips||!this.active)return;const n=(((s=this.data.steps.find(r=>r.choices))==null?void 0:s.choices)??[])[t];n&&(this.stage.hud.remove("contact-ask"),this.chips=null,this.steps=n.value==="sayhi"?this.data.onSayHi:this.data.onNotNow,this.done.clear(),this.branchAt=this.stage.t,this.choiceAt=-1,n.value==="notnow"&&this.stage.choice("contact","notnow"))}update(){if(!this.active)return;const t=this.stage,e=this.branchAt>=0?this.branchAt:this.t0,n=t.t-e;this.steps.forEach((s,r)=>{this.done.has(r)||n<s.t||(this.done.add(r),this.run(s))}),this.chips&&this.choiceAt>=0&&t.auto()&&t.t-this.choiceAt>=2&&this.choose(0)}run(t){var s;const e=this.stage,n=t.who??"vinnie";switch(t.do){case"turn":{const r=e.poses.get(n),o=e.poses.get(t.to??"mochi");r&&o&&(r.yaw=Cc(r,o));break}case"bubble":{if(t.choices){const r=$f(t.text??"","white"),o=V("div",{style:"display:flex;gap:12px;margin-top:10px"});t.choices.forEach((a,l)=>{const c=V("button",{class:"pixel contact-chip",style:"pointer-events:auto;font-size:32px;padding:4px 18px 6px;border-radius:999px;border:5px solid var(--ink);background:var(--white);color:var(--ink)"},a.label==="say hi"?e.copy.S8.contactYes:a.label==="not now"?e.copy.S8.contactNo:a.label);c.addEventListener("click",h=>{h.stopPropagation(),this.choose(l)}),o.append(c)}),r.querySelector(".bubble-box").append(o),e.hud.remove(`${n}-say`),e.hud.attach("contact-ask",r,e.anchor(n),e.t,60,11),this.chips=o,this.choiceAt=e.t}else e.hud.remove("contact-ask"),e.hud.bubble(`${n}-say`,t.text??"",e.anchor(n),e.t,2.4,{colour:t.style==="yellow"?"yellow":"white"});break}case"clip":(s=e.crowd.members.get(n))==null||s.anim.play(t.clip??"react");break;case"hop":e.hop(n);break;case"end":this.active=!1,t.next==="cafe"?e.choice("contact","sayhi"):(e.poses.delete("vinnie"),e.poses.delete("mochi"),e.holdSim(!1),e.townShot());break}}}class Sb{constructor(t,e){I(this,"active",!1);I(this,"t0",0);I(this,"e",0);I(this,"entered",new Set);I(this,"box");I(this,"boxAt",-1);I(this,"boxDropAt",-1);I(this,"line",null);I(this,"meter");I(this,"pills",[]);I(this,"pillAt",-1);I(this,"walks",[]);I(this,"cups",!1);I(this,"ended",!1);I(this,"orbit",null);I(this,"toastAt",-1);this.stage=t,this.data=e,this.box=new Bf({VINNIE:"var(--red)",MOCHI:"var(--pink)",YOU:"var(--cyan)"},"down"),zt(this.box.el,{left:460,top:830,display:"none"}),this.meter=new bb(t.copy.S8.friendTitle,t.copy.S8.friendLine);const n=gn([Js("dot",18,"var(--yellow)"),t.copy.S8.herePill],{size:28}),s=gn([t.copy.S8.cafePill],{size:28});zt(s,{position:"absolute",left:50,top:50}),zt(n,{position:"absolute",right:50,top:50}),s.classList.add("cafe-pill"),n.classList.add("here-pill"),this.pills=[s,n];for(const r of this.pills)r.style.display="none";Re(this.box.el,{left:60,top:1480,width:960,height:300}),Re(this.meter.el,{left:330,top:260}),Re(s,{left:40,top:50}),Re(n,{right:40,top:50}),t.root.append(this.box.el,this.meter.el,...this.pills)}get t(){return this.e}get lineText(){var t;return((t=this.box.el.querySelector(".dialogue-text"))==null?void 0:t.textContent)??""}start(){const t=this.stage,e=this.data.marks;this.active=!0,this.ended=!1,this.t0=t.t,this.e=0,this.entered.clear(),this.walks=[],this.line=null,this.boxAt=this.boxDropAt=-1,this.meter.hide(),this.cups=!1,t.holdSim(!0),t.hideHud(!0),t.hud.clear(),t.poses.set("vinnie",{x:e.vinnieFrom[0],z:e.vinnieFrom[1],yaw:Math.PI/2,anim:"walk"}),t.poses.set("mochi",{x:e.mochiFrom[0],z:e.mochiFrom[1],yaw:-Math.PI/2,anim:"walk"})}update(t){if(!this.active)return;const e=this.stage;this.e=e.t-this.t0;for(const a of this.data.shots)this.e>=a.t[0]&&!this.entered.has(a.id)&&this.enter(a);this.walks=this.walks.filter(a=>{const l=e.poses.get(a.id),c=a.to[0]-l.x,h=a.to[1]-l.z,u=Math.hypot(c,h),d=a.speed*t;return u<=d?(l.x=a.to[0],l.z=a.to[1],l.anim=a.then,a.yaw!==void 0&&(l.yaw=a.yaw),!1):(l.x+=c/u*d,l.z+=h/u*d,l.yaw=Math.atan2(c,h),l.anim="walk",!0)});for(const a of["vinnie","mochi"]){const l=e.crowd.members.get(a);l&&(l.anim.talking=!!this.line&&this.line.who.toLowerCase()===a&&this.e-this.line.at<Dr(this.line.text))}const n=this.boxAt<0?0:ke(this.e,this.boxAt,.4,e.reduced)[0],s=this.boxDropAt<0?0:le(this.e,this.boxDropAt,.3,se.enter);zt(this.box.el,{display:this.boxAt<0||s>=1?"none":"block",transform:`translateY(${s*260}px) scale(${n})`}),this.box.update(this.e,-1,e.reduced,this.line,this.line?this.e-this.line.at:0),this.meter.update(this.e,e.reduced);const[r,o]=this.pillAt<0?[0,0]:ke(this.e,this.pillAt,.4,e.reduced);for(const a of this.pills)zt(a,{display:this.pillAt<0?"none":"inline-flex",transform:`scale(${r})`,opacity:String(o)});this.orbit&&e.rig.go({yaw:this.orbit.from+15*Jn*Math.min(1,(this.e-this.orbit.at)/7)},.01),this.e>=this.data.end.t&&!this.ended&&this.finish()}enter(t){const e=this.stage;this.entered.add(t.id);const n=e.poses.get("vinnie"),s=e.poses.get("mochi"),r=t.camera;if(r.shot==="venue"){const o=r.target?new D(r.target[0],r.target[1],r.target[2]):new D((n.x+s.x)/2,1,(n.z+s.z)/2),a=Array.isArray(r.dist)?r.dist:[r.dist??16,r.dist??16];e.rig.go({target:o,yaw:45*Jn,pitch:(r.pitch??24)*Jn,dist:a[0]},t.id==="C1"?0:r.seconds??.9,"venue"),a[0]!==a[1]&&e.rig.dolly(a[0],a[1],t.t[1]-t.t[0]),this.orbit=r.orbitDeg?{from:45*Jn,at:this.e}:null}else if(r.shot==="close"){const o=new D(n.x,0,n.z),a=new D(s.x,0,s.z),l=o.clone().add(a).multiplyScalar(.5).setY(1.25),c=r.favour==="mochi"?a:o,h=r.favour==="mochi"?o:a;l.add(c.clone().setY(1.25).sub(l).multiplyScalar(.18));let u=Math.atan2(a.x-o.x,a.z-o.z)+Math.PI/2;Math.cos(u-45*Jn)<0&&(u+=Math.PI);const d=Math.atan2(h.x-c.x,h.z-c.z);u+=25*Jn*Math.sign(Math.sin(d-u)),e.rig.go({target:l,yaw:u,pitch:10*Jn,dist:7.5},.5,"close");const p=u;for(const[x,S]of[[n,s],[s,n]]){const m=Cc(x,S);x.yaw=m+14*Jn*Math.sign(Math.sin(p-m))}}t.line&&(this.line=t.line);for(const o of t.actions??[])this.act(o)}act([t,...e]){var o;const n=this.stage,s=a=>a==="both"?["vinnie","mochi"]:[String(a)],r=a=>typeof a=="number"?a:this.e;switch(t){case"walk":{const[a,l,c]=e,h=l==="mark"?this.data.marks[a]:c,u=l==="mark"?c*Ru:1.6*Ru,d=a==="vinnie"?"mochi":"vinnie",p=l==="mark"?this.data.marks[d]:null,x=p?Math.atan2(p[0]-h[0],p[1]-h[1]):a==="vinnie"?Math.PI/2:-Math.PI/2;this.walks.push({id:a,to:[...h],speed:u,then:l==="seat"?"sit":"idle",yaw:x});break}case"pill":this.pillAt<0&&(this.pillAt=r(e[1]));break;case"hide":break;case"clip":{const[a,l]=e;for(const c of s(a))l!=="sit"&&((o=n.crowd.members.get(c))==null||o.anim.play(l));break}case"turn":{const[a,l]=e,c=n.poses.get(a),h=n.poses.get(l);c&&h&&(c.yaw=Cc(c,h));break}case"bang":for(const a of s(e[0])){const l=V("div",{class:"display bang",style:"width:44px;height:52px;background:var(--yellow);border:5px solid var(--ink);border-radius:8px;font-size:40px;line-height:1;color:var(--ink);display:flex;align-items:center;justify-content:center"},"!");n.hud.attach(`bang-${a}`,l,n.anchor(a,.35),n.t,.5,8)}break;case"dialogueBox":e[0]==="rise"?this.boxAt=r(e[1]):this.boxDropAt=r(e[1]);break;case"friendMeter":this.meter.show(r(e[0]));break;case"cups":this.cups=!0;break;case"toast":this.toastAt=r(e[1]);break}}late(){this.toastAt>=0&&this.e>=this.toastAt&&(this.toastAt=-1,this.stage.toast(this.stage.copy.S8.mochiAdded))}get cupsOn(){return this.cups}finish(){this.ended=!0;const t=this.stage;t.wipe(()=>{this.active=!1,this.box.el.style.display="none",this.meter.hide(),this.meter.update(0,!0);for(const s of this.pills)s.style.display="none";this.pillAt=-1;const e=t.poses.get("vinnie"),n=t.poses.get("mochi");t.sim.placeAt("vinnie",[e.x,e.z],"sit",e.yaw),t.sim.placeAt("mochi",[n.x,n.z],"sit",n.yaw),t.poses.clear(),t.hideHud(!1),t.holdSim(!1),t.townShot()})}facing(){var n,s,r,o;const t=((n=this.stage.crowd.members.get("vinnie"))==null?void 0:n.anim.yaw)??0,e=((s=this.stage.crowd.members.get("mochi"))==null?void 0:s.anim.yaw)??0;return{vinnie:t,mochi:e,poses:{vinnie:((r=this.stage.poses.get("vinnie"))==null?void 0:r.anim)??"",mochi:((o=this.stage.poses.get("mochi"))==null?void 0:o.anim)??""}}}}class Eb{constructor(t=4){I(this,"el");I(this,"badge");I(this,"name");I(this,"tag");I(this,"segs");I(this,"popAt",-10);I(this,"tier",0);this.badge=V("span",{class:"pixel tier-badge",style:"background:var(--yellow);border:5px solid var(--ink);border-radius:12px;padding:6px 14px 8px;font-size:36px;color:var(--ink)"}),this.name=V("span",{class:"display tier-name",style:"font-size:46px;color:var(--white)"}),this.tag=V("span",{class:"pixel tier-tag",style:"border:4px solid currentColor;border-radius:8px;padding:4px 10px 6px;font-size:28px"}),this.segs=Array.from({length:t},()=>V("span",{style:"width:54px;height:12px;border-radius:4px;background:var(--lit-tier-off)"})),this.el=V("div",{class:"tier-chip",style:"position:absolute;left:50px;top:50px;transform-origin:0 0"},V("div",{style:"display:inline-flex;align-items:center;gap:14px;background:var(--ink);border-radius:999px;padding:10px 16px"},this.badge,this.name,this.tag),V("div",{style:"display:flex;gap:10px;margin:14px 0 0 16px"},...this.segs))}set(t,e,n,s,r,o){t!==this.tier&&(this.tier=t,this.popAt=o),this.badge.textContent=e,this.name.textContent=n,this.tag.textContent=s,this.tag.style.color=r?"var(--yellow)":"var(--white)",this.segs.forEach((a,l)=>a.style.background=l<t?"var(--pink)":"var(--lit-tier-off)")}update(t,e){const n=e?1:.7+.3*le(t,this.popAt,.35,se.pop);zt(this.el,{transform:`scale(${n})`})}}class Ab{constructor(t,e,n){I(this,"el");I(this,"km");I(this,"trail");I(this,"dot");I(this,"map");I(this,"points",[]);I(this,"shownAt",-1);I(this,"shrinkAt",-1);I(this,"expanded",!1);this.km=V("span",{class:"gps-km"}),this.trail=ae("polyline",{style:"fill:none;stroke:var(--cyan);stroke-width:8;stroke-linecap:round;stroke-linejoin:round"}),this.dot=ae("circle",{r:11,style:"fill:var(--cyan);stroke:var(--ink);stroke-width:4"});const s=o=>ae("polyline",{points:o,style:"fill:none;stroke:var(--white);stroke-width:16;stroke-linecap:round;stroke-linejoin:round"});this.map=ae("svg",{class:"gps-map",width:348,height:212,viewBox:"0 0 348 212",style:"display:block;background:var(--lit-map);touch-action:none;pointer-events:auto;cursor:grab"},ae("rect",{x:196,y:120,width:90,height:70,rx:10,style:"fill:var(--lit-map-park)"}),ae("rect",{x:320,y:0,width:28,height:212,style:"fill:var(--lit-map-river)"}),s(e.map(o=>o.join(",")).join(" ")),s("20,118 330,118"),s("150,10 150,200"),this.trail,this.dot),this.el=V("div",{class:"gps-card",style:"position:absolute;right:50px;top:50px;width:360px;background:var(--white);border:6px solid var(--ink);border-radius:24px;overflow:hidden;transform-origin:100% 0;pointer-events:auto"},V("div",{class:"pixel",style:"height:46px;background:var(--ink);color:var(--yellow);font-size:30px;display:flex;align-items:center;justify-content:space-between;padding:0 16px"},V("span",{},t),this.km),this.map);let r=null;this.map.addEventListener("pointerdown",o=>{o.stopPropagation(),this.map.setPointerCapture(o.pointerId),r={x:o.clientX,y:o.clientY,moved:!1}}),this.map.addEventListener("pointermove",o=>{if(!r)return;const l=348/this.map.getBoundingClientRect().width,c=(o.clientX-r.x)*l,h=(o.clientY-r.y)*l;Math.hypot(c,h)>2&&(r.moved=!0),n(c,h),r.x=o.clientX,r.y=o.clientY}),this.map.addEventListener("pointerup",()=>{r&&!r.moved&&(this.expanded=!this.expanded),r=null})}show(t){this.shownAt<0&&(this.shownAt=t)}shrink(t){this.shrinkAt<0&&(this.shrinkAt=t)}get visible(){return this.shownAt>=0}update(t,e,n,s,r){const o=this.points[this.points.length-1];(!o||Math.hypot(o[0]-n[0],o[1]-n[1])>2)&&this.points.push([...n]),this.trail.setAttribute("points",this.points.map(u=>u.join(",")).join(" ")),this.dot.setAttribute("cx",String(n[0])),this.dot.setAttribute("cy",String(n[1])),this.km.textContent=s.replace("{km}",e.toFixed(1));const[a,l]=this.shownAt<0?[0,0]:ke(t,this.shownAt,.3,r),c=this.shrinkAt<0?0:le(t,this.shrinkAt,.35,se.draw),h=this.expanded?600/360:1;zt(this.el,{transform:`scale(${a*h*(1-c)})`,opacity:String(l),display:this.shownAt<0?"none":"block"})}}class Tb{constructor(t){I(this,"el");I(this,"text");I(this,"lines",[]);I(this,"shownAt",-1);I(this,"x",0);this.text=V("span",{class:"ticker-text",style:"display:inline-block;white-space:nowrap;color:var(--white)"}),this.el=V("div",{class:"pixel ticker",style:"position:absolute;left:50%;top:50px;max-width:640px;display:none;align-items:center;gap:14px;background:var(--ink);border-radius:999px;padding:8px 22px 10px;font-size:30px;transform-origin:50% 0"},V("span",{style:"color:var(--yellow);flex:none"},t),V("span",{style:"overflow:hidden;flex:1;min-width:0;max-width:520px"},this.text))}start(t,e){this.shownAt<0&&(this.shownAt=t),this.setLines(e)}setLines(t){t.join("|")!==this.lines.join("|")&&(this.lines=t,this.text.textContent=t.join("  ·  "),this.x=0)}get content(){return this.text.textContent??""}update(t,e,n){if(this.shownAt<0)return;const[s,r]=ke(t,this.shownAt,.3,n);zt(this.el,{display:"flex",transform:`translateX(-50%) scale(${s})`,opacity:String(r)}),this.x-=e*60;const o=this.text.scrollWidth||1;-this.x>o&&(this.x=520),this.text.style.transform=`translateX(${this.x}px)`}}const Yf=(i,t)=>{const n=Math.min(1,Math.max(0,(i-t)/1.4))-1;return 1+2.70158*n**3+1.70158*n**2},us=(i,t,e=0)=>new D(i,e,t);function qf(i,t=64){const e=document.createElement("canvas"),n=e.getContext("2d");n.font=`${t}px VT323`;const s=Math.ceil(n.measureText(i).width)+t*.75;e.width=s,e.height=Math.ceil(t*1.25);const r=t*.18;n.fillStyle="#111111",n.strokeStyle="#FFE100",n.lineWidth=t*.08,n.beginPath(),n.roundRect(n.lineWidth,n.lineWidth,e.width-2*n.lineWidth,e.height-2*n.lineWidth,r),n.fill(),n.stroke(),n.font=`${t}px VT323`,n.fillStyle="#FFE100",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e.width/2,e.height/2+t*.04);const o=new Kr(e);return o.colorSpace=qe,{tex:o,aspect:e.width/e.height}}function Cb(i){const t=[];for(const e of i.buildings)e.sign&&t.push({text:e.sign.text,pos:us(e.sign.at[0],e.sign.at[1],e.sign.z),face:e.sign.face,d0:e.d0,height:.55});for(const e of i.props)e.sign&&t.push({text:e.sign.text,pos:us(e.at[0]+.95,e.at[1]+.01,2.1),face:"y",d0:e.d0,height:.4});for(const e of i.landmarks)e.sign&&e.monument&&t.push({text:e.sign,pos:us(e.monument[0],e.monument[1]+.6,2.4),face:"y",d0:19.84,height:.6});return t}class Rb{constructor(t){I(this,"group",new ln);I(this,"items",[]);for(const e of t){const{tex:n,aspect:s}=qf(e.text),r=new be(new Wi(e.height*s,e.height),new ei({map:n,transparent:!0,alphaTest:.5,side:Bn}));r.position.copy(e.pos).add(e.face==="y"?new D(0,0,.03):new D(.03,0,0)),e.face==="x"&&(r.rotation.y=Math.PI/2),this.group.add(r);const o=V("div",{class:"pixel sign-tag",style:"background:var(--ink);color:var(--yellow);border:3px solid var(--yellow);border-radius:8px;padding:4px 12px 6px;font-size:34px;white-space:nowrap"},e.text);this.items.push({def:e,mesh:r,tag:o})}}update(t){for(const e of this.items){const n=Yf(t,e.def.d0);e.mesh.scale.setScalar(Math.max(1e-4,n)),e.mesh.visible=n>.01}}planePx(t,e,n){const s=this.items[t],r=s.def.pos.clone().project(e).y,o=s.def.pos.clone().add(new D(0,s.def.height,0)).project(e).y;return Math.abs(r-o)*.5*n}}class Pb{constructor(t=32){I(this,"mesh");I(this,"time",{value:0});I(this,"m",new Qt);const e=new hn({uniforms:{uTime:this.time,uColor:{value:new ee(16743131).convertLinearToSRGB()}},transparent:!0,depthWrite:!1,vertexShader:`
        uniform float uTime; attribute float aPhase; varying float vP;
        void main(){
          vP = fract((uTime + aPhase) / 1.25);
          float s = 0.6 + 0.9 * vP;
          vec4 p = instanceMatrix * vec4(position.xy * s, 0.0, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * p;
        }`,fragmentShader:"uniform vec3 uColor; varying float vP; void main(){ gl_FragColor = vec4(uColor, (1.0 - vP) * 0.9); }"});this.mesh=new gs(new Jc(.42,.56,32),e,t);const n=new Float32Array(t);for(let s=0;s<t;s++)n[s]=s*.37%1.25;this.mesh.geometry.setAttribute("aPhase",new ea(n,1)),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=3}update(t,e){this.time.value=t,e.forEach((n,s)=>{this.m.makeRotationX(-Math.PI/2).setPosition(n.x,.03,n.z),this.mesh.setMatrixAt(s,this.m)}),this.mesh.count=e.length,this.mesh.instanceMatrix.needsUpdate=!0}}class kb{constructor(t){I(this,"group",new ln);this.def=t;const[e,n]=t.size,s=a=>new yi({color:a,gradientMap:bi()}),r=new be(new cn(n,.55,e),s(t.color));r.position.y=.275;const o=new be(new cn(n*.8,.45,e*.55),s(t.roof??"#DDEFFF"));o.position.y=.775,r.castShadow=o.castShadow=!0,this.group.add(r,o)}update(t,e){const[n,s]=this.def.loop.path,r=Math.hypot(s[0]-n[0],s[1]-n[1]),o=t*this.def.loop.speed%r/r,a=n[0]+(s[0]-n[0])*o,l=n[1]+(s[1]-n[1])*o;this.group.position.copy(us(a,l)),this.group.visible=e>=this.def.d0&&Math.hypot(a-19,l-19)<e}}class Fb{constructor(){I(this,"group",new ln);I(this,"banner",null);I(this,"tape",null);I(this,"pigeons");I(this,"rain");I(this,"key","");I(this,"m",new Qt);this.pigeons=new gs(new In(.12,8,6),new yi({color:10132134,gradientMap:bi()}),6),this.pigeons.visible=!1,this.rain=new gs(new cn(.02,.5,.02),new ei({color:10469870,transparent:!0,opacity:.6}),260),this.rain.visible=!1,this.rain.frustumCulled=this.pigeons.frustumCulled=!1,this.group.add(this.pigeons,this.rain)}set(t,e,n){const s=t?`${t.id}|${t.visual}`:"";if(s!==this.key){this.key=s;for(const r of[this.banner,this.tape])r==null||r.removeFromParent();if(this.banner=this.tape=null,this.pigeons.visible=!1,!(!t||!e)){if(t.visual==="banner"&&t.banner){const{tex:r,aspect:o}=qf(t.banner,96);this.banner=new be(new Wi(.9*o,.9),new ei({map:r,transparent:!0,alphaTest:.5,side:Bn})),this.banner.position.copy(e).add(new D(0,2.9,.2)),this.banner.name=`banner-${t.banner}`,this.group.add(this.banner)}if(t.visual==="closedTape"&&n){const r=document.createElement("canvas");r.width=128,r.height=16;const o=r.getContext("2d");for(let l=0;l<8;l++)o.fillStyle=l%2?"#111111":"#FFE100",o.fillRect(l*16,0,16,16);const a=new Kr(r);a.colorSpace=qe,this.tape=new be(new cn(.06,.16,1.6),new ei({map:a})),this.tape.position.copy(n).add(new D(.1,1,0)),this.tape.rotation.x=.25,this.tape.name="closed-tape",this.group.add(this.tape)}t.visual==="pigeons"&&(this.pigeons.visible=!0,this.pigeons.position.copy(e))}}}update(t,e,n){if(this.pigeons.visible)for(let s=0;s<6;s++){const r=Math.max(0,Math.sin(t*6+s*1.7))*.12;this.m.makeTranslation(Math.cos(s*1.1)*(.6+s%3*.3),.12+r,Math.sin(s*1.1)*(.6+s%2*.4)),this.pigeons.setMatrixAt(s,this.m)}if(this.pigeons.instanceMatrix.needsUpdate=!0,this.rain.visible=e,e){for(let s=0;s<260;s++){const r=s*7.31%26-13,o=s*3.77%26-13,a=8-(t*9+s*.37)%8;this.m.makeTranslation(n.x+r,a,n.z+o),this.rain.setMatrixAt(s,this.m)}this.rain.instanceMatrix.needsUpdate=!0}}}const Lb=[16769280,16743129,1623536,16777215],Cr=10;class Ib{constructor(t,e=19.84){I(this,"group",new ln);I(this,"monument",new ln);I(this,"lanterns");I(this,"ink",new ei({color:1118481,side:Ke}));this.d0=e;const n=h=>new yi({color:h,gradientMap:bi()}),s=new be(new cn(1.4,.7,1.4),n(16051935));s.position.y=.35;const r=new be(new lr(.22,.28,2.4,10),n(16051935));r.position.y=1.9;const o=new be(new In(.42,14,10),n(16769280));o.position.y=3.4;for(const h of[s,r,o]){h.castShadow=!0;const u=new be(h.geometry,this.ink);u.scale.setScalar(1.06),u.position.copy(h.position),this.monument.add(h,u)}this.monument.position.copy(us(t[0],t[1])),this.lanterns=new gs(new In(.09,8,6),new ei({color:16777215}),Cr*4);const a=new Qt,l=us(t[0],t[1],3.2);[[.8,28.8],[7.4,28.8],[.8,35.4],[7.4,35.4]].forEach(([h,u],d)=>{const p=us(h,u,2.4);for(let x=0;x<Cr;x++){const S=(x+1)/(Cr+1),m=l.clone().lerp(p,S);m.y-=Math.sin(S*Math.PI)*.6,this.lanterns.setMatrixAt(d*Cr+x,a.makeTranslation(m.x,m.y,m.z)),this.lanterns.setColorAt(d*Cr+x,new ee(Lb[(x+d)%4]))}}),this.lanterns.name="lanterns",this.lanterns.visible=!1,this.group.add(this.monument,this.lanterns)}update(t,e){const n=Yf(t,this.d0);this.monument.visible=t>this.d0,this.monument.scale.setScalar(Math.max(.001,n)),this.lanterns.visible=e&&t>this.d0+1.4}}function Db(i,t){const e=String(t).trim().replace(/\s+/g," ").slice(0,160);let n=e.split(" ").filter(Boolean);n.filter(c=>new RegExp("^\\p{Lu}","u").test(c)).length>n.length*.6&&(n=n.map(c=>c.toLowerCase()));const r=c=>{const h=c.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);return{pre:h[1],core:h[2],post:h[3]}},o=c=>new RegExp("^\\p{Lu}","u").test(c.core)&&!i.keep.includes(c.core.toLowerCase()),a=[];for(let c=0;c<n.length;c++){const h=r(n[c]),u=c+1<n.length?r(n[c+1]):null,d=h.core.toLowerCase(),p=u&&!h.post?i.lexicon[`${d} ${u.core.toLowerCase()}`]:void 0;if(p){a.push(h.pre+p+u.post),c++;continue}if(/^\d+$/.test(h.core)){a.push(h.pre+(Number(h.core)+1)+h.post);continue}if(i.lexicon[d]){a.push(h.pre+i.lexicon[d]+h.post);continue}if(o(h)&&(c>0||u&&o(u)&&!h.post)){let x=c,S=h;for(;!S.post&&x+1<n.length&&x-c<2&&o(r(n[x+1]));)x++,S=r(n[x]);a.push(h.pre+i.pool[sa(n.slice(c,x+1).join(" ").toLowerCase())%i.pool.length]+S.post),c=x;continue}a.push(n[c])}let l=a.join(" ").replace(/[.!?]+$/,"");return l=l.charAt(0).toUpperCase()+l.slice(1),`${l}. ${i.twists[sa(e.toLowerCase())%i.twists.length]}`}const No=0,Rr=1,Nb=2,Di=new ee,ve=(i,t,e=0)=>[i,e,t];class Ub{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"col",[]);I(this,"piv",[]);I(this,"rev",[]);I(this,"emit",[])}tri(t,e,n,s,r,o,a,l=No){Di.set(r);for(const c of[t,e,n])this.pos.push(...c),this.nor.push(...s),this.col.push(Di.r,Di.g,Di.b),this.piv.push(...o),this.rev.push(a),this.emit.push(l)}quad(t,e,n,s,r,o,a,l,c=No){this.tri(t,e,n,r,o,a,l,c),this.tri(t,n,s,r,o,a,l,c)}box(t,e,n,s,r,o,a,l,c,h=No,u){const d=(p,x,S)=>ve(t+p*s,e+x*r,n+S*o);this.quad(d(0,0,1),d(0,1,1),d(1,1,1),d(1,0,1),[0,1,0],u??a,l,c,h),this.quad(d(0,1,0),d(1,1,0),d(1,1,1),d(0,1,1),[0,0,1],a,l,c,h),this.quad(d(1,1,0),d(1,0,0),d(1,0,1),d(1,1,1),[1,0,0],a,l,c,h),this.quad(d(1,0,0),d(0,0,0),d(0,0,1),d(1,0,1),[0,0,-1],a,l,c,h),this.quad(d(0,0,0),d(0,1,0),d(0,1,1),d(0,0,1),[-1,0,0],a,l,c,h)}geometry(t,e,n,s,r,o=No){const a=t.index?t.toNonIndexed():t;a.attributes.normal||a.computeVertexNormals();const l=a.attributes.position,c=a.attributes.normal,h=new Qt().extractRotation(e),u=new D,d=new D;Di.set(n);for(let p=0;p<l.count;p++)u.fromBufferAttribute(l,p).applyMatrix4(e),d.fromBufferAttribute(c,p).applyMatrix4(h).normalize(),this.pos.push(u.x,u.y,u.z),this.nor.push(d.x,d.y,d.z),this.col.push(Di.r,Di.g,Di.b),this.piv.push(...s),this.rev.push(r),this.emit.push(o);t.dispose()}get count(){return this.pos.length/3}build(){const t=new Oe;return t.setAttribute("position",new _e(new Float32Array(this.pos),3)),t.setAttribute("normal",new _e(new Float32Array(this.nor),3)),t.setAttribute("color",new _e(new Float32Array(this.col),3)),t.setAttribute("aPivot",new _e(new Float32Array(this.piv),3)),t.setAttribute("aReveal",new _e(new Float32Array(this.rev),1)),t.setAttribute("aEmit",new _e(new Float32Array(this.emit),1)),t.computeBoundingSphere(),t}}class Ob{constructor(){I(this,"a",[]);I(this,"b",[]);I(this,"side",[]);I(this,"piv",[]);I(this,"rev",[]);I(this,"idx",[]);I(this,"n",0)}seg(t,e,n,s){for(const[o,a]of[[0,-1],[0,1],[1,1],[1,-1]])this.a.push(...t),this.b.push(...e),this.side.push(o,a),this.piv.push(...n),this.rev.push(s);const r=this.n;this.idx.push(r,r+1,r+2,r,r+2,r+3),this.n+=4}box(t,e,n,s,r,o,a,l){const c=(u,d,p)=>ve(t+u*s,e+d*r,n+p*o),h=[[c(0,0,0),c(1,0,0)],[c(1,0,0),c(1,1,0)],[c(1,1,0),c(0,1,0)],[c(0,1,0),c(0,0,0)],[c(0,0,1),c(1,0,1)],[c(1,0,1),c(1,1,1)],[c(1,1,1),c(0,1,1)],[c(0,1,1),c(0,0,1)],[c(0,0,0),c(0,0,1)],[c(1,0,0),c(1,0,1)],[c(1,1,0),c(1,1,1)],[c(0,1,0),c(0,1,1)]];for(const[u,d]of h)this.seg(u,d,a,l)}rect(t,e,n){for(let s=0;s<4;s++)this.seg(t[s],t[(s+1)%4],e,n)}build(){const t=new Oe;return t.setAttribute("position",new _e(new Float32Array(this.a),3)),t.setAttribute("aEnd",new _e(new Float32Array(this.b),3)),t.setAttribute("aSide",new _e(new Float32Array(this.side),2)),t.setAttribute("aPivot",new _e(new Float32Array(this.piv),3)),t.setAttribute("aReveal",new _e(new Float32Array(this.rev),1)),t.setIndex(this.idx),t.computeBoundingSphere(),t}}const Ye={uRadius:{value:0},uGlow:{value:0},uGlowColor:{value:new ee(16770976)},uEdgeWidth:{value:2},uViewport:{value:new wt(1920,1080)},uEdgeColor:{value:new ee(1118481).convertLinearToSRGB()}},lh=`
uniform float uRadius;
attribute vec3 aPivot;
attribute float aReveal;
float revealScale() {
  float x = clamp((uRadius - aReveal) / 1.4, 0.0, 1.0);
  float y = x - 1.0;
  return 1.0 + 2.70158 * y * y * y + 1.70158 * y * y;
}`;let Ml=null;function Bb(){if(Ml)return Ml;const i=new yi({color:16777215,vertexColors:!0,gradientMap:bi()});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,{uRadius:Ye.uRadius,uGlow:Ye.uGlow,uGlowColor:Ye.uGlowColor}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${lh}
attribute float aEmit;
varying float vEmit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aPivot + (transformed - aPivot) * revealScale();
vEmit = aEmit;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;
uniform vec3 uGlowColor;
varying float vEmit;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
        if (vEmit > 0.5 && vEmit < 1.5) gl_FragColor.rgb = diffuseColor.rgb;
        if (vEmit > 1.5) gl_FragColor.rgb = mix(gl_FragColor.rgb, uGlowColor, uGlow);`)},i.customProgramCacheKey=()=>"peepl-town-v1",Ml=i,i}let wl=null;function zb(){if(wl)return wl;const i=new Ef({depthPacking:a0});return i.onBeforeCompile=t=>{t.uniforms.uRadius=Ye.uRadius,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${lh}`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aPivot + (transformed - aPivot) * revealScale();`)},i.customProgramCacheKey=()=>"peepl-town-depth-v1",wl=i,i}let Uo=null;function Hb(){return Uo||(Uo=new hn({uniforms:{uRadius:Ye.uRadius,uEdgeWidth:Ye.uEdgeWidth,uViewport:Ye.uViewport,uEdgeColor:Ye.uEdgeColor},vertexShader:`
      ${lh}
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
      void main() { gl_FragColor = vec4(uEdgeColor, 1.0); }`,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),Uo)}const oa=[19,19],Vb=(i,t)=>Math.max(5.4,Math.hypot(i-oa[0],t-oa[1])),Gb=new Qt,Sl=(i,t,e,n=1,s=1,r=1,o=0)=>Gb.compose(new D(...ve(i,t,e)),new Vi().setFromAxisAngle(new D(0,1,0),o),new D(n,s,r));function Wb(i){var k;const t=new Ub,e=new Ob,n=(v,A,g,b,C,T,F,P,B=!0,L=0,H)=>{const U=ve(v+b/2,A+C/2,g);t.box(v,A,g,b,C,T,F,U,P,L,H),B&&e.box(v,A,g,b,C,T,U,P)};t.box(0,0,-.8,40,40,.8,i.ground.color,ve(20,20,-.8),24),t.quad(ve(0,0,.001),ve(0,40,.001),ve(40,40,.001),ve(40,0,.001),[0,1,0],i.ground.color,ve(20,20,0),0),e.box(0,0,-.8,40,40,.8,ve(20,20,-.8),24);const s={park:.004,river:.004,pond:.008,road:.01,sidewalk:.014,plaza:.012,crosswalk:.02},r=(v,A,g,b,C=0)=>{const T=ve((v[0]+v[2])/2,(v[1]+v[3])/2,A);t.quad(ve(v[0],v[1],A),ve(v[0],v[3],A),ve(v[2],v[3],A),ve(v[2],v[1],A),[0,1,0],g,T,b,C)};for(const v of i.surfaces){if(v.kind==="ground")continue;const A=s[v.kind]??.01;if(v.box){const[g,b,C,T,F,P]=v.box;n(g,b,C,T,F,P,v.color,v.d0)}else if(v.ellipse){const[g,b,C,T]=v.ellipse;t.geometry(new qc(1,24),new Qt().multiplyMatrices(Sl(g,b,A,C,1,T),new Qt().makeRotationX(-Math.PI/2)),v.color,ve(g,b,A),v.d0)}else if(v.rect&&v.kind==="crosswalk"){const[g,b,C,T]=v.rect,F=T-b>C-g;for(let P=F?b:g;P<(F?T:C)-.1;P+=v.pitch??.55){const B=P+(v.stripe??.28);r(F?[g,P,C,B]:[P,b,B,T],A,v.color,v.d0)}}else if(v.rect&&(r(v.rect,A,v.color,v.d0),v.dashes)){const g=v.dashes;for(let b=.4;b<40;b+=g.pitch)(b+g.len<g.skip[0]||b>g.skip[1])&&r(g.axis==="x"?[b,g.at-.08,b+g.len,g.at+.08]:[g.at-.08,b,g.at+.08,b+g.len],A+.003,g.color,v.d0)}}const o=(v,A,g,b,C)=>{const[T,F,P,B,L,H]=v,U=.012,J=ve(T+B/2,F+L/2,P);let tt,ut;A.face==="y"?(tt=[ve(T+A.u[0],F+L+U,P+A.v[0]),ve(T+A.u[1],F+L+U,P+A.v[0]),ve(T+A.u[1],F+L+U,P+A.v[1]),ve(T+A.u[0],F+L+U,P+A.v[1])],ut=[0,0,1]):A.face==="x"?(tt=[ve(T+B+U,F+A.u[1],P+A.v[0]),ve(T+B+U,F+A.u[0],P+A.v[0]),ve(T+B+U,F+A.u[0],P+A.v[1]),ve(T+B+U,F+A.u[1],P+A.v[1])],ut=[1,0,0]):(tt=[ve(T+A.u[0],F+A.v[0],P+H+U),ve(T+A.u[0],F+A.v[1],P+H+U),ve(T+A.u[1],F+A.v[1],P+H+U),ve(T+A.u[1],F+A.v[0],P+H+U)],ut=[0,1,0]),t.quad(tt[0],tt[1],tt[2],tt[3],ut,g,J,b,C),e.rect(tt,J,b)},a=v=>{const A=v.windows,[,,,g,b,C]=v.box;for(const T of["x","y"]){const F=T==="x"?b:g;for(let P=A.margin[1];P+A.size<C-.3;P+=A.pitch)for(let B=A.margin[0];B+A.size<F-.35;B+=A.pitch){const L=v.shopFront;L&&T==="y"&&P<L.v[1]+.3&&B+A.size>L.u[0]-.2&&B<L.u[1]+.2||o(v.box,{face:T,u:[B,B+A.size],v:[P,P+A.size],color:A.color},A.color,v.d0,Nb)}}};for(const v of i.buildings){const[A,g,b,C,T,F]=v.box;if(v.shopFront){const P=v.shopFront,B=.8;n(A,g,b,C,T-B,F,v.color,v.d0),n(A,g+T-B,b,P.u[0],B,F,v.color,v.d0),n(A+P.u[1],g+T-B,b,C-P.u[1],B,F,v.color,v.d0),n(A+P.u[0],g+T-B,b+P.v[1],P.u[1]-P.u[0],B,F-P.v[1],v.color,v.d0),n(A+P.u[0],g+T-B,b,P.u[1]-P.u[0],B,.02,"#C98B55",v.d0,!1),P.counter&&n(A+P.u[0]+.15,g+T-.3,b,P.u[1]-P.u[0]-.3,.3,.85,"#FFFFFF",v.d0)}else n(A,g,b,C,T,F,v.color,v.d0,!0,v.glow?Rr:0);for(const P of v.seats??[])n(P[0]-.18,P[1]-.18,0,.36,.36,P[2],"#FF7ADB",v.d0);for(const P of v.decals??[])o(v.box,P,P.color,v.d0,P.emissive?Rr:0);if(v.windows&&a(v),v.stripes)for(let P=0;P<v.stripes.count;P++)o(v.box,{face:"t",u:[.2+P*v.stripes.pitch,.2+P*v.stripes.pitch+v.stripes.width],v:[0,T],color:v.stripes.color},v.stripes.color,v.d0,0)}const l=(v,A,g,b,C,T)=>t.geometry(new In(b,12,8),Sl(v,A,g),C,ve(v,A,g-b),T),c=(v,A,g,b)=>{n(v-.1,A-.1,0,.2,.2,.9*g,"#8B5A2B",b),l(v,A,1.3*g,.75*g,"#4CAF50",b)};for(const v of i.props){const[A,g]=v.at,b=v.color??"#FFFFFF";switch(v.kind){case"blob":l(A,g,v.z,v.r,b,v.d0);break;case"rug":{const[C,T]=v.size;r([A-C/2,g-T/2,A+C/2,g+T/2],.02,b,v.d0);break}case"armchair":n(A-.45,g-.35,0,.9,.7,.42,b,v.d0),n(A-.45,g-.45,.42,.9,.18,.55,b,v.d0),n(A-.36,g-.26,.42,.72,.56,.1,v.cushion??"#0AB8EE",v.d0);break;case"floorlamp":n(A-.04,g-.04,0,.08,.08,1.5,"#111111",v.d0),n(A-.22,g-.22,1.5,.44,.44,.32,b,v.d0,!0,Rr);break;case"poster":{const[C,T]=v.size,F=v.z;o([A-C/2,g-.25,F-T/2,C,.25,T],{face:"y",u:[0,C],v:[0,T]},b,v.d0,0);for(const P of[1,-1])t.geometry(new cn(.08,T*.7,.01),new Qt().multiplyMatrices(Sl(A,g+.025,F),new Qt().makeRotationZ(P*.6)),"#111111",ve(A,g,F-T/2),v.d0,Rr);break}case"lamp":n(A-.07,g-.07,0,.14,.14,v.height-.22,"#111111",v.d0),n(A-.25,g-.25,v.height-.22,.5,.5,.22,"#FFE100",v.d0,!0,Rr);break;case"tree":c(A,g,v.scale??1,v.d0);break;case"bench":{const[C,T]=v.size??[1.3,.45];n(A-C/2,g-T/2,0,C,T,.38,b,v.d0),(k=v.sign)!=null&&k.pole&&(n(A+C/2+.2,g-.05,0,.1,.1,2.2,"#111111",v.d0),n(A+C/2-.05,g-.06,1.9,.6,.12,.4,"#FFE100",v.d0));break}case"bin":n(A-.18,g-.18,0,.35,.35,.8,b,v.d0);break;case"car":{if(v.loop)break;const[C,T]=v.size;n(A-C/2,g-T/2,0,C,T,.55,b,v.d0),n(A-C/2+C*.2,g-T/2+T*.1,.55,C*.55,T*.8,.45,v.roof??"#DDEFFF",v.d0);break}}}const h=i.city;let u=0;for(let v=0;v<h.grid[0];v++)for(let A=0;A<h.grid[1];A++){const g=v*h.lotPitch+h.lotOffset,b=A*h.lotPitch+h.lotOffset,C=h.lotSize,T=g<h.core[2]&&g+C>h.core[0]&&b<h.core[3]&&b+C>h.core[1],F=h.roadBands.some(([U,J])=>b<J&&b+C>U||g<J&&g+C>U);if(T||F||g+C>h.maxX||(u++,h.skipRects.some(U=>g<U[2]&&g+C>U[0]&&b<U[3]&&b+C>U[1])))continue;const P=Vb(g+C/2,b+C/2);if(Oi(u*5.3)<h.treeChance){c(g+C/2,b+C/2,h.treeScale,P);continue}const B=Oi(u*3.1+1),L=1.8+B*B*10,H={d0:P,box:[g,b,0,C,C,L],color:h.palette[Math.floor(Oi(u*7.7+2)*7)],windows:{color:"#2B3566",pitch:1.25,size:.7,margin:[.55,.8]}};n(g,b,0,C,C,L,H.color,P),a(H)}const d=new be(t.build(),Bb());d.customDepthMaterial=zb(),d.receiveShadow=!0,d.castShadow=!0,d.frustumCulled=!1;const p=new be(e.build(),Hb());p.frustumCulled=!1,p.renderOrder=1;const x=i.fog,S=new yi({color:16777215,gradientMap:bi()});S.onBeforeCompile=v=>{v.uniforms.uRadius=Ye.uRadius,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
uniform float uRadius;
attribute float aD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float k = clamp((uRadius - 1.0 - aD) / 0.6, 0.0, 1.0);
transformed *= 1.0 - k;`)},S.customProgramCacheKey=()=>"peepl-fog-v1";const m=x.cells*x.cells,f=new gs(new cn(x.cellSize,x.height,x.cellSize),S,m),_=new Float32Array(m),E=new ee;for(let v=0;v<x.cells;v++)for(let A=0;A<x.cells;A++){const g=v*x.cells+A,b=v*x.cellSize+x.cellSize/2,C=A*x.cellSize+x.cellSize/2;f.setMatrixAt(g,new Qt().makeTranslation(...ve(b,C,x.height/2+.03))),E.set(x.color).multiplyScalar(x.variation[0]+Oi(v*20+A)*(x.variation[1]-x.variation[0])),f.setColorAt(g,E),_[g]=Math.hypot(b-oa[0],C-oa[1])}f.geometry.setAttribute("aD",new ea(_,1)),f.frustumCulled=!1;const w=new ln;return w.add(d,p,f),{group:w,faces:d,edges:p,fog:f,triangles:d.geometry.attributes.position.count/3}}function Xb(){const i={uTop:{value:new ee(702702)},uMid:{value:new ee(8377333)},uBottom:{value:new ee(14087423)},uOpacity:{value:0}},t=new hn({uniforms:i,side:Ke,depthWrite:!1,transparent:!0,vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uBottom; uniform float uOpacity; varying float vY;
      void main(){ vec3 c = vY > 0.15 ? mix(uMid, uTop, smoothstep(0.15, 0.7, vY)) : mix(uBottom, uMid, smoothstep(-0.2, 0.15, vY));
      gl_FragColor = vec4(c, uOpacity);
      #include <colorspace_fragment>
      }`}),e=new be(new In(400,32,16),t);return e.renderOrder=-10,e.frustumCulled=!1,{mesh:e,uniforms:i}}class $b{constructor(){I(this,"uniforms",{tDiffuse:{value:null},uQuant:{value:1},uVignette:{value:.15},uSat:{value:1.06},uGrain:{value:.025},uTime:{value:0},uRes:{value:new wt(1,1)}});I(this,"rt");I(this,"scene",new da);I(this,"cam",new ma(-1,1,1,-1,0,1));I(this,"enabled",!0);this.rt=new Vn(1,1,{samples:4,colorSpace:qe});const t=new Oe;t.setAttribute("position",new ye([-1,-1,0,3,-1,0,-1,3,0],3)),t.setAttribute("uv",new ye([0,0,2,0,0,2],2));const e=new hn({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
        }`});this.scene.add(new be(t,e)),this.uniforms.tDiffuse.value=this.rt.texture}render(t,e,n,s){if(!this.enabled){t.setRenderTarget(null),t.render(e,n);return}const r=t.getDrawingBufferSize(new wt);(this.rt.width!==r.x||this.rt.height!==r.y)&&this.rt.setSize(r.x,r.y),this.uniforms.uRes.value.copy(r),this.uniforms.uTime.value=Math.floor(s*12)/12,t.setRenderTarget(this.rt),t.clear(),t.render(e,n),t.setRenderTarget(null),t.render(this.scene,this.cam)}dispose(){this.rt.dispose()}}const rs=Math.PI/180,Nr=1.05,ku=[1.05,.8,.85,.9],Fu=i=>i<.5?4*i**3:1-(-2*i+2)**3/2,Oo=(i,t,e)=>i+(t-i)*e;class Yb{constructor(t){I(this,"camera",new mn(22,16/9,.5,600));I(this,"shot","town");I(this,"from");I(this,"to");I(this,"moveAt",-10);I(this,"moveDur",.9);I(this,"t",0);I(this,"distMove",null);I(this,"bias",1);this.from={...t,target:t.target.clone()},this.to={...t,target:t.target.clone()}}go(t,e=.9,n){this.from=this.current(),this.to={target:(t.target??this.to.target).clone(),yaw:t.yaw??this.to.yaw,pitch:t.pitch??this.to.pitch,dist:t.dist??this.to.dist},this.moveAt=this.t,this.moveDur=Math.max(.001,e),this.distMove=null,n&&(this.shot=n)}dolly(t,e,n){this.distMove={from:t,to:e,at:this.t,dur:n}}current(){const t=Fu(Math.min(1,(this.t-this.moveAt)/this.moveDur)),e=this.from,n=this.to;let s=Oo(e.dist,n.dist,t);return this.distMove&&(s=Oo(this.distMove.from,this.distMove.to,Fu(Math.min(1,(this.t-this.distMove.at)/this.distMove.dur)))),{target:e.target.clone().lerp(n.target,t),yaw:Oo(e.yaw,n.yaw,t),pitch:Oo(e.pitch,n.pitch,t),dist:s}}update(t,e,n){this.t+=t;const s=this.current(),r=n?0:(this.shot==="town"?6:this.shot==="venue"?4:0)*rs*Math.sin(this.t/20*Math.PI*2),o=s.yaw+r,a=e<1,l=s.dist*this.bias*(a?this.shot==="town"?1.45:this.shot==="venue"?1.35:1.3:1);this.camera.fov=a?this.shot==="town"?22:this.shot==="venue"?36:46:22,this.camera.aspect=e,this.camera.updateProjectionMatrix(),this.camera.position.set(s.target.x+Math.sin(o)*Math.cos(s.pitch)*l,s.target.y+Math.sin(s.pitch)*l,s.target.z+Math.cos(o)*Math.cos(s.pitch)*l),this.camera.lookAt(s.target)}}const Pr={town:(i,t)=>({target:i,yaw:45*rs,pitch:35.264*rs,dist:t*Nr}),venue:i=>({target:i.clone().add(new D(0,1,0)),yaw:45*rs,pitch:24*rs,dist:18}),close:(i,t)=>{const e=i.clone().add(t).multiplyScalar(.5).setY(1.5);let s=Math.atan2(t.x-i.x,t.z-i.z)+Math.PI/2;return Math.cos(s-45*rs)<0&&(s+=Math.PI),{target:e,yaw:s,pitch:10*rs,dist:7.5}}},qb={walk:"walk",tv:"tv",sit:"sit",read:"read",browse:"browse",sleep:"sleep",idle:"idle"};function jb(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Kr(i)}class Kb{constructor(t,e,n=!1){I(this,"maxVisible",1/0);I(this,"group",new ln);I(this,"members",new Map);I(this,"shadows");I(this,"m4",new Qt);I(this,"v",new D);I(this,"outline",!0);this.specs=t,this.bodyTypes=e,this.groups=n,this.shadows=new gs(new Wi(1,1),new ei({map:jb(),transparent:!0,depthWrite:!1}),64),this.shadows.count=0,this.shadows.frustumCulled=!1,this.shadows.renderOrder=2,this.group.add(this.shadows)}ensure(t,e=t,n){let s=this.members.get(t);if(s)return s;const r=this.specs.find(l=>l.id===e)??this.specs[0],o=n?{...r,id:t,body:n.body,attach:n.attach}:r,a=oh(o,this.bodyTypes,{groups:this.groups});return a.setOutline(this.outline),this.group.add(a.root),s={id:t,peepl:a,anim:new ah(a.rig,a.dims,t),px:0,visible:!0},this.members.set(t,s),s}setOutline(t){this.outline=t;for(const e of this.members.values())e.peepl.setOutline(t)}update(t,e,n,s,r=1/0){let o=0;const a=new Set,l=u=>u.x>=16&&u.x<=22&&u.z>=16&&u.z<=22||Math.hypot(u.x-19,u.z-19)<=r+.3,c=new Set,h=t.filter(l);if(h.length>this.maxVisible){const u=n.position;h.filter(d=>d.id!=="vinnie"&&d.id!=="mochi").sort((d,p)=>Math.hypot(p.x-u.x,p.z-u.z)-Math.hypot(d.x-u.x,d.z-u.z)).slice(0,h.length-this.maxVisible).forEach(d=>c.add(d.id))}for(const u of t){a.add(u.id);const d=this.ensure(u.id,u.cast,u.look),p=d.peepl.root;if(d.visible=l(u)&&!c.has(u.id),p.visible=d.visible,!d.visible)continue;p.position.set(u.x,u.anim==="sleep"?.5:0,u.z);let x=u.yaw-d.anim.yaw;x=Math.atan2(Math.sin(x),Math.cos(x)),d.anim.yaw+=x*Math.min(1,e*8),d.anim.play(qb[u.anim]??"idle"),d.anim.update(e),d.px=this.projectedHeight(d,n,s),d.peepl.setLod(d.px>180?0:d.px>60?1:2),this.m4.makeRotationX(-Math.PI/2).setPosition(u.x,.012,u.z),this.m4.scale(new D(.64,.64,1)),this.shadows.setMatrixAt(o++,this.m4)}this.shadows.count=o,this.shadows.instanceMatrix.needsUpdate=!0;for(const[u,d]of this.members)a.has(u)||(d.visible=!1,d.peepl.root.visible=!1)}projectedHeight(t,e,n){const s=t.peepl.root,r=this.v.set(s.position.x,s.position.y,s.position.z).project(e).y,o=new D(s.position.x,s.position.y+t.peepl.dims.crownY*or,s.position.z).project(e).y;return Math.abs(o-r)*.5*n}headPx(t,e,n,s,r=.25){const o=this.members.get(t);if(!o)return null;const a=o.peepl.root,l=new D(a.position.x,a.position.y+o.peepl.dims.crownY*or+r,a.position.z).project(e);return[(l.x+1)/2*n,(1-l.y)/2*s,l.z<1&&Math.abs(l.x)<1&&Math.abs(l.y)<1]}dispose(){for(const t of this.members.values())t.peepl.dispose();this.members.clear(),this.group.removeFromParent()}}class Zb{constructor(){I(this,"root",document.getElementById("hud3d"));I(this,"labels",new Map);I(this,"t",0)}bubble(t,e,n,s,r,o={}){this.remove(t);const a=$f(e,o.colour);return a.dataset.id=t,this.root.append(a),this.labels.set(t,{id:t,el:a,anchor:n,at:s,until:s+r,priority:o.priority??10,hop:0}),a}attach(t,e,n,s,r,o=9){this.remove(t),e.style.position="absolute",e.style.left=e.style.top="0",e.style.transformOrigin="50% 100%",this.root.append(e),this.labels.set(t,{id:t,el:e,anchor:n,at:s,until:s+r,priority:o,hop:0})}has(t){return this.labels.has(t)}remove(t){var e;(e=this.labels.get(t))==null||e.el.remove(),this.labels.delete(t)}clear(){for(const t of[...this.labels.keys()])this.remove(t)}update(t,e){this.t+=t;const n=Math.max(.5,la()),s=[],r=[...this.labels.values()].sort((o,a)=>a.priority-o.priority);for(const o of r){if(this.t>o.until+.25){this.remove(o.id);continue}const a=o.anchor(),[l,c]=ke(this.t,o.at,.3,e),h=1-le(this.t,o.until,.25,se.enter);if(!a||!a[2]){o.el.style.visibility="hidden";continue}if(s.some(([d,p])=>Math.hypot(d-a[0],p-a[1])<48)){o.el.style.visibility="hidden";continue}s.push([a[0],a[1]]),Mb(o.el,a[0],a[1],n,l,c*h)}}texts(){return[...this.labels.values()].filter(t=>t.el.style.visibility!=="hidden").map(t=>t.el.textContent??"")}}const Jb={caption:1,bubble:2,autoWalk:0,gfx:1},Qb=i=>{const[t,e]=i.split(":").map(Number);return((t??0)*60+(e??0))*60};class tM{constructor(t,e){I(this,"fired",new Map);I(this,"skipped",[]);I(this,"queue",[]);this.beats=t,this.handlers=e}markFired(...t){for(const e of t)this.fired.has(e)||this.fired.set(e,-100)}fire(t,e){const n=this.beats.find(s=>s.id===t);if(!(!n||this.fired.has(t))){this.fired.set(t,e);for(const[s,...r]of n.actions){const o=s,a=Jb[o];let l=0;a!==void 0&&typeof r[a]=="number"&&(l=r[a]),o==="vinnie"&&r[0]==="standTurn"&&typeof r[1]=="number"&&(l=r[1]),this.queue.push({at:e+l,verb:o,args:r})}this.queue.sort((s,r)=>s.at-r.at)}}triggered(t,e){switch(t.on){case"s8Start":return!0;case"km":return e.km>=t.gte&&(!t.after||this.fired.has(t.after));case"near":return e.tier>=t.tierMin&&e.distance(t.a,t.b)<=t.dist;case"choice":return e.choices[t.beat]===t.value;case"any":return t.of.some(n=>"simTimeGte"in n?e.simSec>=Qb(n.simTimeGte)&&this.fired.has("tier4"):this.fired.has(n.after)&&e.t-this.fired.get(n.after)>=n.realSeconds)}}update(t){if(!t.busy)for(const e of this.beats)!this.fired.has(e.id)&&this.triggered(e.trigger,t)&&this.fire(e.id,t.t);for(;this.queue.length&&this.queue[0].at<=t.t;){const{verb:e,args:n}=this.queue.shift(),s=this.handlers[e];s?s(...n):this.skipped.push(e)}}}const eM=[[1,0],[0,1],[-1,0],[0,-1]],kr=(i,t)=>i*1e3+t;class nM{constructor(t,e,n=[],s=.3,r=40){I(this,"walk",new Set);I(this,"interior");this.rightHand=s,this.interior=n;const o=(a,l,c)=>a>=c[0]&&a<=c[2]&&l>=c[1]&&l<=c[3];for(let a=0;a<r;a++)for(let l=0;l<r;l++){const c=a+.5,h=l+.5;t.some(u=>o(c,h,u))&&!e.some(u=>o(c,h,u))&&this.walk.add(kr(a,l))}}walkable(t,e){return this.walk.has(kr(t,e))}cellOf(t){return[Math.floor(t[0]),Math.floor(t[1])]}nearestWalkable(t){if(this.walkable(t[0],t[1]))return t;for(let e=1;e<6;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++)if(Math.max(Math.abs(s),Math.abs(n))===e&&this.walkable(t[0]+s,t[1]+n))return[t[0]+s,t[1]+n];return t}findPath(t,e){if(t[0]===e[0]&&t[1]===e[1])return[t];const n=new Map([[kr(t[0],t[1]),null]]),s=[t];for(let r=0;r<s.length;r++){const o=s[r];for(const[a,l]of eM){const c=o[0]+a,h=o[1]+l,u=kr(c,h);if(!(n.has(u)||!this.walkable(c,h))){if(n.set(u,o),c===e[0]&&h===e[1]){const d=[[c,h]];for(let p=o;p;p=n.get(kr(p[0],p[1])))d.push(p);return d.reverse()}s.push([c,h])}}}return null}isInterior(t,e){return this.interior.some(n=>t>=n[0]&&t<=n[2]&&e>=n[1]&&e<=n[3])}route(t,e){const n=this.nearestWalkable(this.cellOf(t)),s=this.nearestWalkable(this.cellOf(e)),r=this.findPath(n,s)??[n],o=r.map(([c,h],u)=>{const d=c+.5,p=h+.5;if(this.isInterior(d,p))return[d,p];const x=r[u-1],S=r[u+1],m=S?[S[0]-c,S[1]-h]:x?[c-x[0],h-x[1]]:[0,0];return[d-m[1]*this.rightHand,p+m[0]*this.rightHand]}),a=[t,...o,e],l=[a[0]];for(let c=1;c<a.length-1;c++){const h=l[l.length-1],u=a[c],d=a[c+1],p=(u[0]-h[0])*(d[1]-h[1])-(u[1]-h[1])*(d[0]-h[0]);Math.abs(p)>1e-6&&l.push(u)}return l.push(a[a.length-1]),l}}const zr=86400,Rc=86400/240,Hs=20,ls=i=>{const[t,e]=i.split(":").map(Number);return((t??0)*60+(e??0))*60},iM=i=>{const t=Math.floor((i%zr+zr)%zr/60);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`};function sM(i,t,e){return t<=e?i>=t&&i<e:i>=t||i<e}class rM{constructor(t=1,e="13:00"){I(this,"day");I(this,"sec");this.day=t,this.sec=ls(e)}advance(t){for(this.sec+=t;this.sec>=zr;)this.sec-=zr,this.day++}set(t,e=this.day){this.day=e,this.sec=ls(t)}get hhmm(){return iM(this.sec)}}class oM{constructor(t,e){I(this,"dropped",null);this.d=t,this.seed=e}forDay(t){const e=t===1?this.d.events.find(s=>s.id===this.d.forcedDay1):this.d.events[Math.floor(Xs(this.seed,"event",t)()*this.d.events.length)],n=e.startHour*3600;return{ev:e,day:t,start:n,end:Math.min(86400,n+e.durationHours*3600),dropped:!1}}drop(t,e,n){const s=this.d.events.find(r=>r.id===t);return s?(this.dropped={ev:s,day:e,start:n,end:Math.min(86400,n+s.durationHours*3600),dropped:!0},this.dropped):null}today(t){return this.dropped&&this.dropped.day===t?this.dropped:this.forDay(t)}active(t,e){const n=this.today(t);return e>=n.start&&e<n.end?n:null}raining(t,e){const n=this.active(t,e);return n!=null&&n.ev.weather?n.ev.weather==="rain":t%this.d.rainEvery===0}tickerLines(t,e){return[this.today(t).ev.ticker,...this.d.tickerFiller,this.raining(t,e)?this.d.weatherLine.rain:this.d.weatherLine.sun]}}const Ur=[16,16,22,22],aM=.58,Lu=.29,Iu={tv:Math.PI,shelf:-Math.PI/2,window:Math.PI,chair:Math.PI/4,bed:0,bench:0,counter:0,front:Math.PI,corner:Math.PI/4};class lM{constructor(t,e=t.routine.clock.seed){I(this,"clock");I(this,"nav");I(this,"events");I(this,"tier",1);I(this,"agents",new Map);I(this,"needs",{});I(this,"override",null);I(this,"reaction",null);I(this,"reacted",new Set);I(this,"scripted",new Set);I(this,"landmarks",new Map);I(this,"realT",0);I(this,"seed");this.d=t,this.seed=e,this.clock=new rM(t.routine.start.day,t.routine.start.time);for(const o of t.map.landmarks)this.landmarks.set(o.key,o);const n=t.map.buildings.filter(o=>o.id.startsWith("flat.")&&!/slab|wall|lamp|pillow|cover|tv/.test(o.id)).map(o=>[o.box[0],o.box[1],o.box[0]+o.box[3],o.box[1]+o.box[4]]);this.nav=new nM(t.map.nav.walkRects,[...t.map.nav.blocked,...n],[Ur,[27.8,22,33.2,22.4]],t.map.nav.rightHandOffset),this.events=t.events?new oM(t.events,e):null;const s=Xs(e,"needs");for(const[o,[a,l]]of Object.entries(t.routine.needs.start))this.needs[o]=a+(l-a)*s();const r=this.spotPos("H","tv");this.add({id:"vinnie",kind:"vinnie",cast:"vinnie",pos:r,speed:t.routine.vinnie.walkSpeedU*aM,anim:"tv",place:"H",tierMin:1}),this.agents.get("vinnie").yaw=Iu.tv,(t.map.placements??[]).forEach((o,a)=>{const l=o.who==="joe"?`pacer-${a}`:o.who;this.add({id:l,kind:o.b?"pacer":"stand",cast:o.who,pos:[...o.a],speed:(o.speed??.8)*1,anim:"idle",place:"",tierMin:o.tierMin,pace:o.b?o:void 0})});for(const o of t.routine.extras??[])this.add({id:o.id,kind:"extra",cast:"joe",pos:[...o.home],speed:.85,anim:"idle",place:"home",tierMin:1,look:{body:o.body,attach:o.attach}}),this.updateExtra(this.agents.get(o.id),o,!0);this.updateRoutine()}add(t){this.agents.set(t.id,{yaw:0,path:null,seg:0,moving:!1,activity:"",hidden:!1,prev:[t.pos[0],t.pos[1]],...t})}landmarkTier(t){var e;return((e=this.landmarks.get(t))==null?void 0:e.tier)??1}landmark(t){return this.landmarks.get(t)}spotPos(t,e){var r;const n=this.landmarks.get(t),s=(e&&((r=n==null?void 0:n.spots)==null?void 0:r[e]))??(n!=null&&n.spots?Object.values(n.spots)[0]:void 0)??(n==null?void 0:n.door)??(n==null?void 0:n.monument);return s?[s[0],s[1]]:[19,19]}schedule(){return this.clock.day===1?this.d.routine.vinnie.dayOff.schedule:this.d.routine.vinnie.work.schedule}activityNow(){const t=this.schedule().find(r=>sM(this.clock.sec,ls(r.from),ls(r.to)));if(!t)return{key:"home",place:"H",spot:"chair",anim:"idle"};let e=t.place.startsWith("$")?this.resolveChoice(t):t.place,n=t.spot==="auto"?void 0:t.spot,s=t.anim;if(this.landmarkTier(e)>this.tier){const r=t.fallback??{place:"H",spot:"window",anim:"idle"};e=r.place,n=r.spot,s=r.anim,this.landmarkTier(e)>this.tier&&([e,n,s]=["H","window","idle"])}return{key:`${t.from}|${e}|${n??""}|${s}`,place:e,spot:n,anim:s,beat:t.beat}}resolveChoice(t){var r,o;const e=(r=this.events)==null?void 0:r.today(this.clock.day).ev;if(t.place==="$lunch"&&(e!=null&&e.lunch))return e.lunch;if(t.place==="$evening"&&(e!=null&&e.evening))return e.evening;const n=Xs(this.seed,t.place,this.clock.day);if(t.place==="$lunch")return(o=this.events)!=null&&o.raining(this.clock.day,this.clock.sec)?"K":n()<.5+(this.needs.social??.5)*.3?"C":"P";const s=this.needs;return(s.energy??1)<.35?"H":(s.social??0)>=(s.curiosity??0)?n()<.5?"Z":"C":["N","T","M"][Math.floor(n()*3)]}updateRoutine(){if(this.scripted.has("vinnie"))return;const t=this.agents.get("vinnie"),e=this.activityNow();e.key!==t.activity&&(t.activity=e.key,t.place=e.place,t.anim=e.anim,this.override=null,this.walkTo(t,this.spotPos(e.place,e.spot)),t.arriveYaw=Iu[e.spot??""],t.moving||(t.yaw=t.arriveYaw??t.yaw))}updateExtra(t,e,n=!1){const s=this.clock.sec,r=[...e.plan].sort((u,d)=>ls(u[0])-ls(d[0])),o=[...r].reverse().find(u=>ls(u[0])<=s)??r[r.length-1],a=`${o[0]}|${o[1]}|${o[2]??""}`;if(a===t.activity)return;t.activity=a;const[,l,c]=o;let h;if(l==="home")h=[...e.home],t.hideOnArrive=!0;else if(c==="out"){const u=this.landmarks.get(l),d=u!=null&&u.spots?Object.values(u.spots):[],p=d.length?d[Math.floor(Xs(this.seed,t.id,a)()*d.length)]:(u==null?void 0:u.door)??(u==null?void 0:u.monument)??[19,23],x=Xs(this.seed,t.id,a,"j");h=[p[0]+(x()-.5)*.8,p[1]+(x()-.5)*.8],t.hideOnArrive=!1}else h=this.spotPos(l),t.hideOnArrive=c==="in";if(t.place=l,n){t.pos=[...h],t.prev=[...h],t.hidden=!!t.hideOnArrive;return}t.hidden=!1,this.walkTo(t,h),t.moving||(t.hidden=!!t.hideOnArrive)}walkTo(t,e){if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[1])<.05){t.path=null,t.moving=!1;return}t.path=this.nav.route(t.pos,e),t.seg=1,t.moving=!0}tick(t){this.clock.advance(t),this.realT+=t/Rc,this.updateRoutine();for(const e of this.d.routine.extras??[])this.updateExtra(this.agents.get(e.id),e);this.updateCrowd();for(const e of this.agents.values())e.prev=[e.pos[0],e.pos[1]],e.pace&&!this.scripted.has(e.id)?this.pace(e):this.move(e,t);this.separate(),this.tickNeeds(t),this.checkReaction()}move(t,e){if(!t.path)return;let n=t.speed*e/Rc;for(;n>0&&t.path&&t.seg<t.path.length;){const s=t.path[t.seg],r=s[0]-t.pos[0],o=s[1]-t.pos[1],a=Math.hypot(r,o);a>1e-6&&(t.yaw=Math.atan2(r,o)),a<=n?(t.pos=[s[0],s[1]],n-=a,t.seg++):(t.pos=[t.pos[0]+r/a*n,t.pos[1]+o/a*n],n=0)}t.path&&t.seg>=t.path.length&&(t.path=null,t.moving=!1,t.arriveYaw!==void 0&&(t.yaw=t.arriveYaw),t.hideOnArrive&&(t.hidden=!0))}pace(t){const e=t.pace,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),s=(this.realT*(e.speed??.8)+(e.phase??0)*n*2)%(2*n),r=s<n?s/n:2-s/n,o=e.a[0]+(e.b[0]-e.a[0])*r,a=e.a[1]+(e.b[1]-e.a[1])*r,l=s<n?1:-1;t.yaw=Math.atan2((e.b[0]-e.a[0])*l,(e.b[1]-e.a[1])*l),t.pos=[o,a],t.moving=!0}updateCrowd(){var s;const t=((s=this.events)==null?void 0:s.active(this.clock.day,this.clock.sec))??null,e=t!=null&&t.ev.crowd&&t.ev.where?Math.min(8,t.ev.crowd.size):0,n=t?`${t.ev.id}|${t.day}|${t.start}`:"";for(let r=0;r<8;r++){const o=`crowd-${r}`,a=this.agents.get(o);if(r>=e){a&&this.agents.delete(o);continue}if(a&&a.activity===n)continue;const l=this.spotPos(t.ev.where),c=r/e*Math.PI*2+.4,h=t.ev.crowd.radius,u=[l[0]+Math.cos(c)*h,l[1]+Math.sin(c)*h];this.add({id:o,kind:"crowd",cast:"joe",pos:u,speed:0,anim:"idle",place:t.ev.where,tierMin:1,activity:n}),this.agents.get(o).yaw=Math.atan2(l[0]-u[0],l[1]-u[1])}}separate(){const t=[...this.agents.values()].filter(e=>!e.hidden&&(e.moving||e.kind==="crowd")&&this.shown(e)).sort((e,n)=>e.id<n.id?-1:1);for(let e=0;e<3;e++)for(let n=0;n<t.length;n++)for(let s=n+1;s<t.length;s++){const r=t[n],o=t[s],a=o.pos[0]-r.pos[0],l=o.pos[1]-r.pos[1],c=Math.hypot(a,l);if(c>=Lu)continue;const h=c>1e-6?a/c:1,u=c>1e-6?l/c:0,d=(Lu-c)/2;r.pos=[r.pos[0]-h*d,r.pos[1]-u*d],o.pos=[o.pos[0]+h*d,o.pos[1]+u*d]}}shown(t){return!t.hidden&&this.tier>=t.tierMin}tickNeeds(t){const e=this.agents.get("vinnie"),n=e.moving?"walk":e.anim==="sleep"?"sleep":{H:"home",K:"work",C:"cafe",P:"park",Z:"plaza",N:"cinema",M:"market",T:"rummer"}[e.place]??"home",s=this.d.routine.needs.rates[n]??{};for(const r of Object.keys(this.needs))this.needs[r]=Math.min(1,Math.max(0,this.needs[r]+(s[r]??0)*t/3600))}checkReaction(){var s;const t=(s=this.events)==null?void 0:s.active(this.clock.day,this.clock.sec);if(!t)return;const e=`${t.ev.id}|${t.day}`,n=this.agents.get("vinnie");if(!(this.reacted.has(e)||n.moving||!(t.ev.everywhere||n.place===t.ev.where))){this.reacted.add(e),this.reaction=t.ev.reaction;for(const[r,o]of Object.entries(t.ev.effects))this.needs[r]=Math.min(1,Math.max(0,(this.needs[r]??.5)+o))}}scriptGo(t,e,n="idle",s){const r=this.agents.get(t);r&&(this.scripted.add(t),t==="vinnie"&&(this.override=null),r.speed||(r.speed=.93),r.anim=n,r.arriveYaw=s,r.hidden=!1,this.walkTo(r,e),!r.moving&&s!==void 0&&(r.yaw=s))}placeAt(t,e,n,s){const r=this.agents.get(t);r&&(this.scripted.add(t),r.pos=[...e],r.prev=[...e],r.path=null,r.moving=!1,r.anim=n,r.yaw=s)}release(t){this.scripted.delete(t);const e=this.agents.get(t);e&&(e.activity=""),t==="vinnie"&&this.updateRoutine()}dropEvent(t){var n;const e=((n=this.events)==null?void 0:n.drop(t,this.clock.day,this.clock.sec))??null;return this.updateCrowd(),e}mood(){var e;const t=(this.needs.energy+this.needs.social+this.needs.curiosity)/3;return((e=this.d.routine.needs.moods.find(([n])=>t<n))==null?void 0:e[1])??"okay"}setTier(t){this.tier=t,this.updateRoutine()}setTime(t,e=this.clock.day){this.clock.set(t,e),this.updateRoutine();for(const n of this.d.routine.extras??[])this.updateExtra(this.agents.get(n.id),n,!0);this.updateCrowd()}snapshot(t=1){var n,s;const e=[];for(const r of this.agents.values()){if(!this.shown(r))continue;const o=r.id==="vinnie"?this.override:null;e.push({id:r.id,kind:r.kind,cast:r.cast,look:r.look,x:r.prev[0]+(r.pos[0]-r.prev[0])*t,z:r.prev[1]+(r.pos[1]-r.prev[1])*t,yaw:(o==null?void 0:o.yaw)??r.yaw,anim:r.moving?"walk":(o==null?void 0:o.anim)??r.anim,moving:r.moving,place:r.place})}return{day:this.clock.day,sec:this.clock.sec,time:this.clock.hhmm,tier:this.tier,agents:e,event:((n=this.events)==null?void 0:n.active(this.clock.day,this.clock.sec))??null,raining:((s=this.events)==null?void 0:s.raining(this.clock.day,this.clock.sec))??!1}}}const Du=(i,t)=>i>=Ur[0]&&i<=Ur[2]&&t>=Ur[1]&&t<=Ur[3],cM=i=>1-(1-Math.min(1,Math.max(0,i)))**3;function hM(i,t,e){const n=i.find(s=>s.n===t)??i[0];return n.radius[0]+(n.radius[1]-n.radius[0])*cM(e/n.radiusSeconds)}class dM{constructor(t,e,n){I(this,"km",0);I(this,"dot");I(this,"routeLen",[0]);this.route=t,this.metresPerPx=e,this.mapSize=n,this.dot=[...t[0]];for(let s=1;s<t.length;s++)this.routeLen.push(this.routeLen[s-1]+Math.hypot(t[s][0]-t[s-1][0],t[s][1]-t[s-1][1]))}autoAdd(t){this.km+=t;const e=this.routeLen[this.routeLen.length-1];let n=this.km*1e3/this.metresPerPx%e,s=1;for(;s<this.routeLen.length-1&&this.routeLen[s]<n;)s++;const r=this.route[s-1],o=this.route[s];n-=this.routeLen[s-1];const a=this.routeLen[s]-this.routeLen[s-1]||1;this.dot=[r[0]+(o[0]-r[0])*n/a,r[1]+(o[1]-r[1])*n/a]}move(t,e){const n=Math.min(this.mapSize[0],Math.max(0,this.dot[0]+t)),s=Math.min(this.mapSize[1],Math.max(0,this.dot[1]+e));this.km+=Math.hypot(n-this.dot[0],s-this.dot[1])*this.metresPerPx/1e3,this.dot=[n,s]}addMetres(t){this.autoAdd(t/1e3)}}const Vs=Math.PI/180,uM=.55,fM=1.6,Nu=15,Rn=new Set;function pM(){let i,t=0,e=!1;const n=new da;let s,r,o,a,l,c,h,u,d,p,x=0,S,m,f,_=1,E=0,w=0,k=!1,v=-1,A=-1,g=0,b="vinnie",C,T,F,P=[],B,L,H=null,U,J,tt,ut=!1,Mt=0;const Lt=[];let $t=!1,xt=!1,vt,X,rt,Z=null,ft,Ct=null;const Dt=new Map,pt=new Im,Ut={},st=M=>f.find(y=>y.n===M)??f[0],lt=(M,y,O=0)=>new D(M,O,y),at=()=>{const M=i.store.data.settings.gfx;return M==="hd"||i.params.gfx==="hd"||M==="auto"&&i.params.gfx!=="16bit"&&v>=0&&t>=v},St=M=>()=>a.headPx(M,l.camera,innerWidth,innerHeight),yt=M=>{_=M,E=t,s.setTier(M);const y=st(M);M>1&&l.go(Pr.town(lt(y.shot.target[0],y.shot.target[1]),y.shot.dist*ku[M-1]/Nr),2,"town")},Jt={simTime:M=>s.setTime(String(M)),tier:M=>{var y;yt(Number(M)),Number(M)===3&&!((y=i.store.data.progress.met)!=null&&y.mochi)&&s.scriptGo("vinnie",s.spotPos("M","corner"),"idle",45*Vs)},camera:(M,y)=>{const O=y,W=st(_);M==="town"&&(l.go(Pr.town(lt(W.shot.target[0],W.shot.target[1]),O.dist[0]),0,"town"),l.dolly(O.dist[0]*Nr,O.dist[1]*Nr,O.seconds))},vinnie:M=>{M==="standTurn"&&(s.override={anim:"idle",yaw:45*Vs,until:"routine"})},caption:M=>{const y=String(M),O=f.find(W=>`tier${W.n}`===y);i.captions.show(i.copy.captions[y]??"",(O==null?void 0:O.captionFor)??4)},bubble:(M,y)=>{var W;const O=String(M);c.bubble(`${O}-say`,String(y),St(O),t,((W=st(1).bubble)==null?void 0:W.hold)??1.1),P.push({id:O,at:t})},autoWalk:()=>{k=!0},gps:M=>{M==="show"&&J.show(t),M==="shrink"&&J.shrink(t)},ticker:()=>{var M;return tt.start(t,((M=s.events)==null?void 0:M.tickerLines(s.clock.day,s.clock.sec))??[])},routine:()=>{},lore:M=>Lt.push(String(M)),rings:M=>{ut=M==="on"},holdSim:M=>{$t=!!M},play:M=>{M==="contact"?(Ct="contact",vt.start()):M==="cafe"&&(Ct="cafe",rt.wipe(()=>X.start()))},wipe:()=>{},met:M=>{const y=i.store.data.progress.met??{};y[String(M)]=!0,i.store.data.progress.met=y,i.store.save()},walkTo:(M,y)=>{var W;const O=Object.values(((W=s.landmark(String(y)))==null?void 0:W.spots)??{});M.forEach((Q,ot)=>{const ht=O[ot%Math.max(1,O.length)]??s.spotPos(String(y));s.scriptGo(Q,[ht[0],ht[1]],"idle",45*Vs)})},continue:()=>{xt=!0},next:()=>{},gfx:M=>{M==="hd"&&(v=t)}},N=()=>{const M={};for(const y of a.members.values()){const O=a.headPx(y.id,l.camera,innerWidth,innerHeight,0),W=y.peepl.root.position,Q=!!(O!=null&&O[2]);M[y.id]={visible:Q&&y.peepl.root.visible&&!te(y.peepl.root.position),px:y.px,onScreen:Q,inside:Du(W.x,W.z)}}return M},te=M=>{const y=M.clone().setY(M.y+1.3),O=l.camera.position,W=y.clone().sub(O),Q=W.length();pt.set(O,W.normalize()),pt.far=Q-.3;const ot=o.faces.geometry.attributes.aReveal,ht=Ye.uRadius.value;return pt.intersectObject(o.faces,!1).some(K=>K.face&&ot.getX(K.face.a)<=ht-1.4)},Bt=M=>{M.type==="keydown"?Rn.add(M.key):Rn.delete(M.key)};return{id:"S8",mount(M,y){i=M,f=M.data.tiers.tiers;const O=sr({lowgpu:M.params.lowgpu});O.shadowMap.enabled=!0,rr(!0);const W=rh();S=W.key,d=W.hemi,S.shadow.mapSize.setScalar(qo()?1024:2048),S.shadow.bias=-5e-4,S.shadow.normalBias=.02,n.add(W.group),u=Xb(),n.add(u.mesh),o=Wb(M.data.map),n.add(o.group),a=new Kb(M.data.cast.cast,M.data.cast.bodyTypes,M.params.rig==="groups"),n.add(a.group),a.setOutline(M.store.data.settings.outline!=="none"&&M.params.outline!=="none"),s=new lM({map:M.data.map,routine:M.data.routine,events:M.data.events},M.params.seed);const Q=M.data.tiers.walk;r=new dM(Q.autoRoute,Q.metersPerMapPx,Q.card.mapSize);const ot=st(1);l=new Yb(Pr.town(lt(ot.shot.target[0],ot.shot.target[1]),ot.shot.dist)),c=new Zb,h=new $b,h.enabled=!qo(),qo()&&(a.maxVisible=24),m=new tM(M.data.setpieces.worldScript,Jt);const ht=M.data.map;B=new Rb(Cb(ht)),n.add(B.group),B.items.forEach((j,et)=>c.attach(`sign-${j.def.text}`,j.tag,()=>{if(!(l.shot==="town"&&j.mesh.visible&&B.planePx(et,l.camera,innerHeight)<40))return null;const Ht=j.def.pos.clone().add(new D(0,j.def.height*.5+.2,0)).project(l.camera);return[(Ht.x+1)/2*innerWidth,(1-Ht.y)/2*innerHeight,Ht.z<1]},-1,1/0,1)),L=new Pb,n.add(L.mesh);const K=ht.props.find(j=>j.loop);K&&(H=new kb(K),n.add(H.group)),U=new Fb,n.add(U.group),p=new Ib([4.1,32.1]),n.add(p.group),ft=new ln;const it=new yi({color:16777215,gradientMap:bi()}),Et=new yi({color:13619151,gradientMap:bi(),transparent:!0,opacity:.6});for(const j of[28.78,29.02]){const et=new be(new lr(.06,.05,.12,12),it);et.position.set(j,.61,22.7),ft.add(et);for(let dt=0;dt<3;dt++){const Ht=new be(new In(.035,8,6),Et);Ht.position.set(j,.72+dt*.1,22.7),Ht.name="steam",ft.add(Ht)}}ft.visible=!1,n.add(ft),rt={get t(){return t},get reduced(){return e},auto:()=>i.store.data.settings.auto,hud:c,crowd:a,rig:l,sim:s,root:y,poses:Dt,copy:M.copy,anchor:(j,et=.25)=>()=>a.headPx(j,l.camera,innerWidth,innerHeight,et),holdSim:j=>{$t=j},hideHud:j=>{for(const et of[C.el,J.el,tt.el,T])et.style.visibility=j?"hidden":"";j&&i.captions.clear()},toast:j=>i.toast.show(j,3),wipe:j=>{Z=new Vu(e,j,()=>{Z=null})},choice:(j,et)=>{Ut[j]=et},townShot:()=>ge("town"),hop:j=>P.push({id:j,at:t})},vt=new wb(rt,M.data.setpieces.contact),X=new Sb(rt,M.data.setpieces.cafe),C=new Eb(M.data.tiers.hud.progressSegments),J=new Ab(String(M.data.tiers.hud.gpsTitle),Q.autoRoute,(j,et)=>r.move(j,et)),tt=new Tb(M.copy.S8.news),F=V("span",{}),T=gn([F],{size:32,color:"yellow"}),zt(T,{position:"absolute",right:50,top:50}),T.classList.add("walk-pill"),Re(T,{right:40,top:190}),Re(tt.el,{top:300}),Re(J.el,{right:"auto",left:40,top:"auto",bottom:170,transformOrigin:"0 100%"}),y.append(C.el,T,J.el,tt.el),addEventListener("keydown",Bt),addEventListener("keyup",Bt),Object.assign(Tt,{sim:()=>({day:s.clock.day,time:s.clock.hhmm,speed:i.store.data.settings.speed,tier:_,km:r.km,radius:Ye.uRadius.value}),setTime:(j,et)=>s.setTime(j,et),tick:j=>{for(let et=0;et<j/Hs;et++)s.tick(Hs)},setTier:j=>yt(j),walk:j=>r.autoAdd(j),moveYou:(j,et)=>r.move(j,et),shot:j=>{A=t+Nu,ge(j)},follow:j=>{b=j},legibility:N,projectPx:(j,et,dt=0)=>{const Ht=lt(j,et,dt).project(l.camera);return[(Ht.x+1)/2*innerWidth,(1-Ht.y)/2*innerHeight]},beat:j=>m.fire(j,t),dropEvent:j=>{var et;s.dropEvent(j),tt.start(t,((et=s.events)==null?void 0:et.tickerLines(s.clock.day,s.clock.sec))??[])},mirror:j=>Db(M.data.events.mirror,j),ticker:()=>tt.content,rings:()=>L.mesh.count,setpiece:()=>({contact:vt.active,cafe:X.active,cafeT:X.t,line:X.lineText,facing:X.facing(),ended:xt}),replaySetpiece:()=>(Ct==="cafe"?X.start():Ct==="contact"&&vt.start(),Ct!==null),banner:()=>{var j;return((j=U.banner)==null?void 0:j.name)??null},signTags:()=>B.items.filter(j=>j.tag.isConnected&&j.tag.style.visibility!=="hidden").map(j=>{const et=j.tag.getBoundingClientRect();return{text:j.def.text,rect:[et.left,et.top,et.right,et.bottom]}}),gpsKm:()=>{var j;return J.visible?((j=J.el.querySelector(".gps-km"))==null?void 0:j.textContent)??"":""},bubbles:()=>c.texts(),skyTop:()=>`#${u.uniforms.uTop.value.getHexString()}`,dusk:()=>x,lanterns:()=>p.lanterns.visible,pos:j=>{const et=s.agents.get(j);return et?[et.pos[0],et.pos[1]]:null},bodyPx:j=>{const et=a.headPx(j,l.camera,innerWidth,innerHeight,0);return et?[et[0],et[1]+a.members.get(j).px/3]:null}})},enter(){var y;e=i.flow.reduced;const M=kn.sub;kn.sub=null,i.params.free||i.store.data.progress.freeMode?(yt(4),E=-10,v=0,ut=!0,J.show(-1),tt.start(-1,((y=s.events)==null?void 0:y.tickerLines(s.clock.day,s.clock.sec))??[])):M?(m.markFired("enter"),M==="contact"?(yt(3),E=-10,m.markFired("tier2","tier3"),s.setTime("17:00"),s.placeAt("vinnie",[23,28.9],"idle",0)):M==="cafe"?(yt(3),E=-10,m.markFired("contact","cafe","tier2","tier3"),Ct="cafe",X.start()):M==="end"&&(yt(4),E=-10,v=0,m.markFired("tier2","tier3","contact","cafe","tier4"),m.fire("end",0))):m.update(Zt()),this.update(0,0)},update(M,y){var Ft,bt,ct,Vt,ie;t=y;const O=i.store.data.settings,W=O.speed===.25?1:O.speed;if(["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].filter(Wt=>Rn.has(Wt)).length){const Wt=i.data.tiers.walk.manualKmPerSecond*1e3/i.data.tiers.walk.metersPerMapPx*M*Math.max(1,W),qt=(Rn.has("d")||Rn.has("ArrowRight")?1:0)-(Rn.has("a")||Rn.has("ArrowLeft")?1:0),dn=(Rn.has("s")||Rn.has("ArrowDown")?1:0)-(Rn.has("w")||Rn.has("ArrowUp")?1:0);r.move(qt*Wt,dn*Wt)}else k&&O.auto&&r.autoAdd(i.data.tiers.walk.autoKmPerSecond*M);for($t||(w+=M*Rc*W);w>=Hs;)s.tick(Hs),w-=Hs;i.params.free||m.update(Zt()),Mt+=M*W,Ye.uRadius.value=hM(f,_,t-E);const ot=at(),ht=ot?le(t,Math.max(v,0),fM,se.enter):0;document.querySelector("#fx16").style.opacity=String(uM*(1-(ot?O.gfx==="hd"||i.params.gfx==="hd"?1:ht:0)));const K=i.params.tod??O.tod,it=ib(s.clock.sec),Et=K==="dusk"?1:K==="day"?0:it.dusk;x+=Math.sign(Et-x)*Math.min(Math.abs(Et-x),M/10),sb(x,K==="auto"?it.night:0,{key:S,hemi:d,sky:u.uniforms,fog:o.fog.material,glow:Ye.uGlowColor}),Ye.uGlow.value=Math.max(ot?.3:0,x),h.uniforms.uQuant.value=ot?0:1,S.castShadow=ot,i.field.glow(ot||x>0?.45:.25,x),Ye.uViewport.value.set(innerWidth*Math.min(devicePixelRatio,2),innerHeight*Math.min(devicePixelRatio,2)),Ye.uEdgeWidth.value=Math.min(3.5,Math.max(1.5,2.2*Math.max(.6,la())*Math.min(devicePixelRatio,2)));const j=s.snapshot(w/Hs);l.update(M,innerWidth/innerHeight,e),u.uniforms.uOpacity.value=l.shot==="town"?0:1;const et=(Ft=a.members.get(b))==null?void 0:Ft.peepl.root.position;l.shot!=="town"&&et&&A<t&&!vt.active&&!X.active&&l.go({target:et.clone().setY(1)},.6),vt.update(),X.update(M),X.late(),Z==null||Z.update(M);for(const Wt of j.agents){const qt=Dt.get(Wt.id);qt&&Object.assign(Wt,{x:qt.x,z:qt.z,yaw:qt.yaw,anim:qt.anim,moving:qt.anim==="walk"})}ft.visible=X.cupsOn;for(const Wt of ft.children)Wt.name==="steam"&&(Wt.position.y=.72+(t*.35+Wt.id*.13)%.3);const dt=Ye.uRadius.value;if(a.update(j.agents,M*Math.min(Math.max(W,1),4),l.camera,innerHeight,dt),X.active)for(const Wt of a.members.values()){if(Wt.id==="vinnie"||Wt.id==="mochi")continue;const qt=Wt.peepl.root.position;Math.hypot(qt.x-30.3,qt.z-22.8)<7&&(Wt.visible=Wt.peepl.root.visible=!1)}B.update(dt),H==null||H.update(Mt,dt);const Ht=(bt=j.event)!=null&&bt.ev.where?s.landmark(j.event.ev.where):void 0,ne=Ht?s.spotPos(Ht.key):null,ue=(Ht==null?void 0:Ht.door)??null;U.set(((ct=j.event)==null?void 0:ct.ev)??null,ne?lt(ne[0],ne[1]):null,ue?lt(ue[0],ue[1]):null),U.update(t,j.raining&&_>=2,l.current().target),p.update(dt,((Vt=j.event)==null?void 0:Vt.ev.visual)==="lanterns");const z=ut&&_>=3?j.agents.filter(Wt=>{var qt;return Wt.cast!=="joe"&&Wt.id!=="vinnie"&&((qt=a.members.get(Wt.id))==null?void 0:qt.visible)}).map(Wt=>lt(Wt.x,Wt.z)):[];for(L.update(t,z),s.reaction&&(c.bubble("vinnie-say",s.reaction,St("vinnie"),t,3),s.reaction=null);Lt.length;){const Wt=Lt[0],qt=s.landmark(Wt),dn=i.data.map.buildings.find(wn=>wn.id===(qt==null?void 0:qt.building));if(dn&&dt<dn.d0+1.4)break;Lt.shift(),qt!=null&&qt.lore&&c.bubble("vinnie-lore",qt.lore,St("vinnie"),t,4)}J.visible&&J.update(t,r.km,r.dot,String(i.data.tiers.hud.kmFormat),e),tt.setLines(((ie=s.events)==null?void 0:ie.tickerLines(s.clock.day,s.clock.sec))??[]),tt.update(t,M,e),P=P.filter(Wt=>t-Wt.at<.5);for(const Wt of P){const qt=a.members.get(Wt.id);qt&&(qt.peepl.root.position.y+=Ks(t,Wt.at,.2,.4)*(e?0:1))}c.update(M,e),S.shadow.camera.left=S.shadow.camera.bottom=-14,S.shadow.camera.right=S.shadow.camera.top=14,S.target.position.set(19,0,19),S.position.set(35,24,41);const _t=st(_);C.set(_,_t.badge,_t.name,ot?i.copy.S8.hd:i.copy.S8.bit,ot,t),C.update(t,e),F.textContent=String(i.data.tiers.hud.walkPillTier1).replace("{km}",r.km.toFixed(1)),T.style.display=_===1&&!J.visible?"inline-flex":"none",kn.rigOk=[...a.members.values()].every(Wt=>Wt.anim.ok()),kn.chars=a.members.size;const nt=[0,0,0];for(const Wt of a.members.values())nt[Wt.px>180?0:Wt.px>60?1:2]++;kn.lod=nt,i.loop.drawFrame&&(h.render(sr(),n,l.camera,t),nh())},landed:()=>xt,choose:M=>vt.choose(M),onInput(M){var y;if(M.type==="key"&&vt.active&&(M.key==="1"||M.key==="2"))return void vt.choose(Number(M.key)-1);if(M.type==="tap"&&M.x!==void 0&&M.y!==void 0&&_>=3){const O=mt(M.x,M.y);let W=null;for(const Q of a.members.values()){if(!Q.visible||Q.id==="vinnie"||Q.peepl.id==="joe"||Q.id.startsWith("joe")||Q.id.startsWith("pacer")||Q.id.startsWith("crowd"))continue;const ot=a.headPx(Q.id,l.camera,innerWidth,innerHeight,-.6);if(!ot)continue;const ht=Math.hypot(ot[0]-O[0],ot[1]-O[1]);ht<Math.max(60,Q.px*.6)&&(!W||ht<W.d)&&(W={id:Q.id,d:ht})}if((W==null?void 0:W.id)==="mochi"&&!vt.active&&!X.active&&!((y=i.store.data.progress.met)!=null&&y.mochi)&&Ut.contact==="notnow"){delete Ut.contact,vt.start();return}if(W){b=W.id;const Q=i.data.cast.cast.find(ht=>ht.id===W.id);Q!=null&&Q.tagline&&c.bubble(`${W.id}-tag`,Q.tagline,St(W.id),t,3);const ot=W.id;c.attach("name-pill",gn([(Q==null?void 0:Q.name)??ot],{size:28}),()=>a.headPx(ot,l.camera,innerWidth,innerHeight,-.15),t,6,6)}return}M.type==="key"&&(M.key==="t"||M.key==="T")&&(A=t+Nu,g=(g+1)%3,ge(["town","venue","close"][g]))},exit(){},unmount(){removeEventListener("keydown",Bt),removeEventListener("keyup",Bt),Rn.clear();for(const M of Object.keys(Tt))delete Tt[M];a.dispose(),o.faces.geometry.dispose(),o.edges.geometry.dispose(),o.fog.dispose(),h.dispose(),c.clear(),n.clear(),rr(!1),document.querySelector("#fx16").style.opacity="0"},seek(M){t=M}};function Zt(){return{t,km:r.km,tier:_,simSec:s.clock.sec,distance:(M,y)=>{const O=s.agents.get(M),W=s.agents.get(y);return O&&W?Math.hypot(O.pos[0]-W.pos[0],O.pos[1]-W.pos[1]):1/0},choices:Ut,busy:X.active}}function mt(M,y){return Mp(M,y)}function ge(M){const y=a.members.get(b),O=(y==null?void 0:y.peepl.root.position)??lt(19,19);if(M==="town"){const W=st(_);l.go(Pr.town(lt(W.shot.target[0],W.shot.target[1]),(W.shot.distEnd??W.shot.dist)*ku[_-1]/Nr),.9,"town")}else if(M==="venue"){const W=Pr.venue(Du(O.x,O.z)?lt(19,19):O.clone().setY(0));O.x<8.5&&O.z>27.5&&(W.yaw=-75*Vs),l.go(W,.9,"venue")}else l.go({target:O.clone().setY(1.5*or*1.7),yaw:45*Vs,pitch:10*Vs,dist:7.5},.9,"close")}}function mM(i,t,e,n){return V("button",{class:"cast-card","data-id":i,style:"position:absolute;width:262px;height:360px;border-radius:26px;border:6px solid var(--ink);background:var(--white);overflow:hidden;padding:0;pointer-events:auto;display:flex;flex-direction:column;align-items:center;text-align:center"},V("img",{src:Jr(n),alt:"",draggable:"false",style:"display:block;width:250px;height:250px;border-bottom:6px solid var(--ink);object-fit:cover"}),V("div",{class:"display card-name",style:"font-size:34px;color:var(--ink);margin-top:6px"},t),V("div",{class:"pixel card-tag",style:"font-size:26px;color:var(--lit-card-tagline);text-wrap:balance;padding:0 10px;margin-top:4px"},e))}const hi=We({left:109,top:200,dx:288,dy:390,cols:6,k:1},{left:84,top:150,dx:312,dy:410,cols:3,k:1.1}),ns={at:.35,stagger:.09,dur:.55},gM=.15,Uu={dur:7,to:1.05},Bo={w:1100,h:760};function xM(){let i,t=0,e=!1,n,s,r=[],o,a,l,c,h,u,d,p=null,x=!1;const S=new da,m=new mn(22,1,.1,100);let f=null,_=null,E=[];const w=()=>{p=null,o.style.display="none",s.style.visibility="",f==null||f.dispose(),f=null,rr(!1)},k=(v,A=!1)=>{var T;const g=E.find(F=>F.id===v);if(!g)return;p=v,x=A,l.textContent=g.name,c.textContent=g.tagline??"";const b=(T=i.store.data.progress.met)==null?void 0:T[v];h.style.display=b?"block":"none",u.style.display=x?"inline-flex":"none",u.textContent=v==="vinnie"?"mochi":"vinnie",o.style.display="block",s.style.visibility="hidden",f==null||f.dispose();const C=i.data.cast.cast.find(F=>F.id===v);f=oh(C,i.data.cast.bodyTypes,{lods:[0]}),S.add(f.root),_=new ah(f.rig,f.dims,v),sr(),rr(!0)};return{id:"S11",mount(v,A){i=v;const g=v.copy.S11;E=v.data.cast.cast,d=new Ms(v.captions,v.copy.captions,[{key:"cast1",at:.8,until:3.6},{key:"cast2",at:3.8,until:6.8}]),n=V("div",{class:"display s11-heading",style:"position:absolute;left:0;right:0;top:20px;text-align:center;font-size:92px;color:var(--ink)"},g.heading),r=g.order.map((C,T)=>{const F=E.find(B=>B.id===C),P=mM(C,F.name,F.tagline??"",F.sprite.card);return zt(P,{left:hi.left+T%hi.cols*hi.dx+131*(hi.k-1),top:hi.top+Math.floor(T/hi.cols)*hi.dy+180*(hi.k-1)}),P.addEventListener("click",B=>{B.stopPropagation(),k(C)}),P}),s=V("div",{class:"s11-grid",style:"position:absolute;inset:0;transform-origin:50% 55%;perspective:1200px"},...r);const b=gn([g.yourPeepls],{size:32,tag:"button"});zt(b,{position:"absolute",right:50,bottom:140,pointerEvents:"auto"}),b.classList.add("your-peepls"),b.addEventListener("click",C=>{C.stopPropagation(),k("vinnie",!0)}),l=V("span",{class:"display",style:"font-size:46px;color:var(--ink)"}),c=V("span",{class:"pixel",style:"font-size:30px;color:var(--ink)"}),h=V("div",{class:"pixel met-sticker",style:"position:absolute;right:30px;top:24px;background:var(--yellow);border:4px solid var(--ink);border-radius:10px;padding:4px 14px 6px;font-size:26px;transform:rotate(-8deg);display:none"},g.met),u=gn([""],{size:28,tag:"button"}),u.style.pointerEvents="auto",u.addEventListener("click",C=>{C.stopPropagation(),p&&k(p==="vinnie"?"mochi":"vinnie",!0)}),a=V("div",{class:"sheet-turntable",style:"position:absolute;left:30px;right:30px;top:120px;bottom:30px"}),o=V("div",{class:"cast-sheet",style:`position:absolute;left:${(1920-Bo.w)/2}px;top:${(1080-Bo.h)/2+20}px;width:${Bo.w}px;height:${Bo.h}px;border:6px solid var(--ink);border-radius:26px;display:none;pointer-events:auto`},V("div",{style:"position:absolute;left:0;right:0;top:0;height:110px;background:var(--cream);border-radius:20px 20px 0 0;border-bottom:6px solid var(--ink);display:flex;align-items:center;gap:20px;padding:0 30px"},l,c,gn([g.hasHuman],{size:28}),u),h,a),o.addEventListener("click",C=>C.stopPropagation()),Re(n,{left:40,right:"auto",top:34,fontSize:60,textAlign:"left"}),Re(s,{left:0,top:0,width:1080,height:1920}),Re(b,{right:30,bottom:"auto",top:40}),Re(o,{left:40,top:300,width:1e3,height:1300}),A.append(n,s,b,o),S.add(rh().group),Object.assign(Tt,{sheetOpen:()=>p,sheetCentrePx:()=>{const C=a.getBoundingClientRect();return[C.left+C.width/2,C.top+C.height*.55]}})},enter(){e=i.flow.reduced,this.update(0,0)},update(v,A){t=A;const[g,b]=ke(t,gM,.45,e);if(zt(n,{transform:`scale(${g})`,opacity:String(b)}),r.forEach((C,T)=>{const F=ns.at+T*ns.stagger,[P,B]=ke(t,F,ns.dur,e),L=e?0:90*(1-Math.min(1,le(t,F,ns.dur,se.pop))),H=e?0:Math.sin(t*2.4+T*.6)*5;zt(C,{transform:`translateY(${H}px) rotateY(${L}deg) scale(${(.6+.4*P)*hi.k})`,opacity:String(B)})}),s.style.transform=`scale(${e?1:1+(Uu.to-1)*le(t,0,Uu.dur,se.draw)})`,d.update(t),p&&f&&_&&i.loop.drawFrame){_.update(v),f.root.rotation.y=t*.35;const C=a.getBoundingClientRect(),T=sr(),F=innerHeight-C.bottom;m.aspect=C.width/C.height,m.updateProjectionMatrix(),m.position.set(0,1.6,9),m.lookAt(new D(0,1,0)),T.setScissorTest(!0),T.setScissor(new Se(C.left,F,C.width,C.height)),T.setViewport(new Se(C.left,F,C.width,C.height)),T.setClearColor(16051935,1),T.clear(),T.render(S,m),T.setScissorTest(!1),T.setViewport(0,0,innerWidth,innerHeight),T.setClearColor(0,0),nh()}},landed:()=>t>=ns.at+11*ns.stagger+ns.dur,onInput(v){if(p){if(v.type==="key"&&v.key==="Escape")w();else if(v.type==="tap"&&v.x!==void 0&&v.y!==void 0){const A=o.getBoundingClientRect(),[g,b]=Hr(A.left,A.top),[C,T]=Hr(A.right,A.bottom);v.x>=g&&v.x<=C&&v.y>=b&&v.y<=T||w()}}},exit(){p&&w()},unmount(){p&&w(),delete Tt.sheetOpen,delete Tt.sheetCentrePx,S.clear()},seek(v){this.update(0,v)}}}const is={pitch:124,feet:1070,h:320,hero:330,at:.1,stagger:.05,rise:440},vM=.5,_M=[1.5,.4],zo=[2.1,.5],El=[2.7,.4],Al=[3.4,4.3];function yM(){let i,t=0,e=!1,n=[],s,r,o,a=[];const l=()=>{const h=i.store.data.settings;i.store.reset(),i.store.data.settings=h,i.store.save(),i.flow.go("S0")},c=()=>{i.store.data.progress.freeMode=!0,i.store.save(),i.flow.go("S8")};return{id:"S12",mount(h,u){i=h;const d=h.copy.S12;n=[...d.wordmark].map(f=>V("span",{class:"display",style:`display:inline-block;font-size:${We(220,160)}px;line-height:0.9;color:var(--yellow);-webkit-text-stroke:7px var(--ink);paint-order:stroke fill;text-shadow:0 11px 0 var(--ink)`},f));const p=V("div",{id:"s12-wordmark",style:"position:absolute;left:0;right:0;top:90px;display:flex;justify-content:center;gap:2px"},...n);s=V("div",{class:"pixel s12-tagline",style:"position:absolute;left:0;right:0;top:360px;text-align:center;font-size:66px;color:var(--ink)"},d.tagline),r=V("button",{class:"display s12-cta",style:"position:absolute;left:50%;top:460px;display:inline-flex;align-items:center;gap:18px;background:var(--yellow);border:8px solid var(--ink);border-radius:999px;padding:22px 56px 26px;font-size:62px;color:var(--ink);white-space:nowrap;pointer-events:auto"},V("span",{},d.cta),Js("arrow",56,"var(--ink)")),r.addEventListener("click",f=>{f.stopPropagation(),c()}),o=V("div",{class:"pixel s12-sub",style:"position:absolute;left:0;right:0;top:628px;text-align:center;font-size:44px;color:var(--ink)"},d.sub);const x=gn([Js("play",20,"var(--white)"),d.replay],{size:28,tag:"button"});zt(x,{position:"absolute",right:50,bottom:36,pointerEvents:"auto"}),x.classList.add("s12-replay"),x.addEventListener("click",f=>{f.stopPropagation(),l()});const S=h.data.cast.cast,m=Mn?8:d.lineup.length;a=d.lineup.map((f,_)=>{const E=S.find(C=>C.id===f).sprite,w=f==="vinnie"||f==="mochi"?is.hero:is.h,k=Math.floor(_/m),v=_%m,A=Math.min(m,d.lineup.length-k*m),g=(Mn?540:960)+(v-(A-1)/2)*is.pitch,b=new va(E,{class:"sprite lineup","data-id":f}).place(g,Mn?1500+k*380:is.feet,w);return Re(b.el,{}),b}),Re(p,{top:200}),Re(s,{top:470,fontSize:54}),Re(r,{top:590}),Re(o,{top:790}),Re(x,{right:40,bottom:36}),u.append(...a.map(f=>f.el),p,s,r,o,x)},enter(){e=i.flow.reduced,this.update(0,0)},update(h,u){t=u,a.forEach((S,m)=>{const f=is.at+m*is.stagger,_=e?0:is.rise*(1-le(t,f,.5,se.pop)),E=e?0:Ks(t,Al[0]+m/a.length*(Al[1]-Al[0]-.4),22,.4);S.pose({t,phase:m*.7,hop:E-_,opacity:e?le(t,f,.2,se.enter):1})}),n.forEach((S,m)=>{const f=vM+m*.08,[_,E]=ke(t,f,.5,e),w=e?0:-18+18*le(t,f,.5,se.pop),k=e?0:Math.sin(t*3+m*.7)*6;zt(S,{transform:`translateY(${k}px) rotate(${w}deg) scale(${_})`,opacity:String(E)})});for(const[S,[m,f]]of[[s,_M],[o,El]]){const[_,E]=ke(t,m,f,e);zt(S,{transform:`scale(${_})`,opacity:String(E)})}const[d,p]=ke(t,zo[0],zo[1],e),x=e||t<zo[0]+zo[1]?1:1+.03*Math.sin(t*5);zt(r,{transform:`translateX(-50%) scale(${d*x})`,opacity:String(p)})},landed:()=>t>=El[0]+El[1],onInput(h){h.type==="key"&&(h.key==="r"||h.key==="R")&&l()},exit(){},unmount(){},seek(h){this.update(0,h)}}}const Tl={S0:c1,S1:v1,S2:y1,S3:E1,S4:q1,S5:j1,S6:J1,S7:nb,S8:pM,S11:xM,S12:yM,S99:yb},bM=i=>{var t;return((t=Tl[i])==null?void 0:t.call(Tl))??Qy(i)},MM=1,wM={U:"head height",worldPerU:.58},SM={thin:{head:.96,h:1.04,T:.88,A:.8,hem:.75,belly:.85,legs:1.1},average:{head:1,h:1,T:1,A:1,hem:1,belly:1,legs:1},stocky:{head:1.14,h:.99,T:1.7,A:1.35,hem:1.6,belly:1.3,legs:.85},xl:{head:1.25,h:1.2,T:2,A:1.5,hem:1.85,belly:1.5,legs:1}},EM=[{id:"flare",num:"00",name:"Flare",tagline:"thinks out loud",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#7A7A7A",hands:"#7A7A7A",face:{eyes:"none",mouth:"none"},top:{type:"hoodie",color:"#5E5E5E",collar:"none"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hood",color:"#5E5E5E"},{part:"face.flame",color:"#FF5AD9",color2:"#FFE100"}],sprite:{body:"assets/cast/body-00.png",card:"assets/cast/card-00.jpg",footX:.37,aspect:.4625}},{id:"vinnie",num:"01",name:"Vinnie",tagline:"wears a mask. means well.",hasHuman:!0,role:"lead",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"mask",mouth:"teeth"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"mask.vinnie",color:"#FF5AD9",color2:"#E04DC0",params:{nose:"bar",doodle:!1}},{part:"mask.strap",color:"#6B6B6B"},{part:"collar.vneck-tie"}],sprite:{body:"assets/hero/vinnie.png",card:"assets/cast/card-01.jpg",footX:.5,aspect:.4519},flags:{occultMarks:!0}},{id:"hexi",num:"02",name:"Hexi",tagline:"sweet, mostly",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#FF9FE8",face:{eyes:"dots2",mouth:"fangs-tongue"},top:{type:"offshoulder",color:"#1C1C1C"},pants:{type:"straight",color:"#6A3FA8"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.long",color:"#FF7ADB"},{part:"horns",color:"#E04DC0"},{part:"choker",color:"#111111"}],sprite:{body:"assets/cast/body-02.png",card:"assets/cast/card-02.jpg",footX:.5,aspect:.3203}},{id:"joe",num:"03",name:"Joe",tagline:null,hasHuman:!1,role:"blank",body:"average",headScale:1,skin:"#FFFFFF",face:{eyes:"dots3",mouth:"dot"},top:{type:"body",color:"#FFFFFF"},pants:{type:"straight",color:"#FFFFFF"},shoes:{type:"sneaker",color:"#FFFFFF"},attach:[],sprite:{body:"assets/hero/joe.png",card:"assets/cast/card-03.jpg",footX:.5,aspect:.3903}},{id:"rudy",num:"04",name:"Rudy",tagline:"no map, no plan",hasHuman:!0,role:"neighbour",body:"stocky",headScale:1,skin:"#FF9FE8",face:{eyes:"dots2",mouth:"teeth"},top:{type:"hawaiian",color:"#5E5E5E",color2:"#FFE100",pattern:"hibiscus",collar:"vneck"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hat.bucket",color:"#FFFFFF"},{part:"glasses.aviator",color:"#FF9E3A"}],sprite:{body:"assets/cast/body-04.png",card:"assets/cast/card-04.jpg",footX:.44,aspect:.3688}},{id:"mochi",num:"05",name:"Mochi",tagline:null,hasHuman:!0,role:"friend",body:"average",headScale:1,skin:"#FF9FE8",face:{eyes:"closed",mouth:"smile"},top:{type:"turtleneck",color:"#00B4EE"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.cap",color:"#7B2CBF"},{part:"hair.bun",color:"#7B2CBF"},{part:"hair.chopsticks",color:"#FFE100"},{part:"ears.cat",color:"#00B4EE",color2:"#FF5AD9"},{part:"whiskers"},{part:"collar.turtleneck",color:"#00B4EE"},{part:"tail.spring",color:"#00B4EE",color2:"#FFE100"}],sprite:{body:"assets/hero/mochi.png",card:"assets/cast/card-05.jpg",footX:.5,aspect:.4915}},{id:"nimbus",num:"06",name:"Nimbus",tagline:"head in the clouds",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"x",mouth:"teeth"},top:{type:"cardigan",color:"#3FB4EA",pattern:"clouds",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.swoop",color:"#1C1C1C"}],sprite:{body:"assets/cast/body-06.png",card:"assets/cast/card-06.jpg",footX:.5,aspect:.3328}},{id:"spike",num:"07",name:"Spike",tagline:"punk. knits.",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#86D4EE",face:{eyes:"x",mouth:"zigzag"},top:{type:"varsity",color:"#FF7ADB",color2:"#FFE66B"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FFE100"},attach:[{part:"hair.mohawk",color:"#FF5AD9"}],sprite:{body:"assets/cast/body-07.png",card:"assets/cast/card-07.jpg",footX:.5,aspect:.3078}},{id:"taro",num:"08",name:"Taro",tagline:"ramen critic",hasHuman:!0,role:"neighbour",body:"stocky",headScale:1,skin:"#FF9FE8",face:{eyes:"closed",mouth:"flat"},top:{type:"flannel",color:"#FF4F2E",color2:"#8C2A1E",pattern:"plaid",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#F6F0DC"},attach:[{part:"hair.cap",color:"#1C1C1C"},{part:"hair.bun",color:"#1C1C1C"},{part:"hair.chopsticks",color:"#FFE100"},{part:"mustache",color:"#1C1C1C"},{part:"earring.pin",side:"L"}],sprite:{body:"assets/cast/body-08.png",card:"assets/cast/card-08.jpg",footX:.5,aspect:.2953}},{id:"pip",num:"09",name:"Pip",tagline:"amazed by everything",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#FF9FE8",face:{eyes:"wide",mouth:"o"},top:{type:"cardigan",color:"#FF7ADB",pattern:"hearts",collar:"tee"},pants:{type:"jeans",color:"#3E6FC4"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.cap",color:"#1C1C1C"},{part:"hair.pigtails",color:"#1C1C1C"}],sprite:{body:"assets/cast/body-09.png",card:"assets/cast/card-09.jpg",footX:.5,aspect:.3359}},{id:"dex",num:"10",name:"Dex",tagline:"desk job, dj nights",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#FFE66B",face:{eyes:"none",mouth:"flat"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.swoop",color:"#7B35C4"},{part:"glasses.shades",color:"#111111"},{part:"collar.vneck-tie"},{part:"headphones",color:"#2C2C2C",params:{cup:"#0AB8EE",mode:"neck"}}],sprite:{body:"assets/cast/body-10.png",card:"assets/cast/card-10.jpg",footX:.5,aspect:.3328}},{id:"kit",num:"11",name:"Kit",tagline:"pirate radio host",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"dots2",mouth:"teeth"},top:{type:"flannel",color:"#FF4F2E",color2:"#8C2A1E",pattern:"plaid",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FF7ADB"},attach:[{part:"hair.cap",color:"#FF7ADB"},{part:"hair.buns2",color:"#FF7ADB"},{part:"eyepatch",color:"#111111"}],sprite:{body:"assets/cast/body-11.png",card:"assets/cast/card-11.jpg",footX:.5,aspect:.3094}},{id:"cosmo",num:"12",name:"Cosmo",tagline:"waves at the moon",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#3B2A86",skinPattern:"stars",hands:"#3B2A86",face:{eyes:"none",mouth:"tongue"},top:{type:"cardigan",color:"#FF7ADB",pattern:"hearts",collar:"tee"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.flattop",color:"#3FB4EA"},{part:"glasses.shades",color:"#111111"},{part:"earring.pin",side:"L"}],sprite:{body:"assets/cast/body-12.png",card:"assets/cast/card-12.jpg",footX:.5,aspect:.3156}},{id:"juno",num:"13",name:"Juno",tagline:"zero filter",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#FFE66B",face:{eyes:"happy",mouth:"tongue"},top:{type:"polo",color:"#FFE66B"},pants:{type:"straight",color:"#6A3FA8"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.bob",color:"#7B35C4"}],sprite:{body:"assets/cast/body-13.png",card:"assets/cast/card-13.jpg",footX:.5,aspect:.3234}},{id:"vega",num:"14",name:"Vega",tagline:"sort of psychic",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"none",mouth:"flat"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.flattop",color:"#1C1C1C"},{part:"visor.cyber",color:"#FF4A2A",color2:"#FFE100"},{part:"collar.vneck-tie"},{part:"earring.hoop",side:"L",color:"#FFE100"}],sprite:{body:"assets/cast/body-14.png",card:"assets/cast/card-14.jpg",footX:.5,aspect:.3328}}],AM={id:"joe-extra",inherits:"joe",props:["prop.cup","prop.umbrella","prop.briefcase","prop.bag","headphones","prop.balloon","prop.flowers","prop.dog"]},TM={aspect:"sprite aspect = width / height of the PNG (joe 425/1089, vinnie 366/810, mochi 406/826; 12 bodies from peepls-campaign.jsx CAST.ar)",contentFlags:"no cigarettes (D-20). vinnie: mask nose rendered as a bar and doodle off in 3D; the 2D PNGs still show the cigarette/holder until re-exported."},CM={version:MM,units:wM,bodyTypes:SM,cast:EM,extrasBase:AM,notes:TM},RM=1,PM={crowd1:"right now, a whole world is going about its day.",crowd2:"day jobs. first dates. bad coffee. big plans.",profile:"tell us a little about you.",finding:"we look for a peepl who clicks with you.",reveal:"then someone steps out of the crowd.",room1:"no food bowls. no guilt trips.",room2:"just two friends getting to know each other.",ship:"once he trusts you, he ships himself over.",tap:"tap him, and he lets you in.",tier1:"at first, he only lets you see his place.",tier2:"get closer, and he shows you more.",tier3:"spot someone in colour? they've got a human too.",tier4:"walk your world, and his world opens up.",cast1:"punks, pirates, cat people, dreamers.",cast2:"somewhere out there is your kind of weird."},kM={tags:[["late. again.",.6],["on repeat",1.5],["walking biscuit",2.3],["might rain later",3.2],["first date!!",4],["forgot the milk",4.6],["big meeting at 10",5.2],["it's my birthday",5.8]],wordmark:"PEEPLS",line1:"they've got lives.",line2:"they just haven't met you yet.",subline:"the peepls show",continue:"tap to start"},FM={clock:"9:41",heading:"who are you?",sub:"pick a few. we'll do the rest.",chips:[["night owl","pink"],["long walks","yellow"],["bad puns","cyan"],["loud music","pink"],["dogs","yellow"],["early bird","cyan"]],sliderLeft:"quiet",sliderRight:"loud",button:"find my peepl"},LM={finding:"finding your peepl"},IM={name:"meet vinnie.",pill:"wears a mask. means well.",continue:"say hi"},DM={trust:"TRUST",speakerVinnie:"VINNIE",speakerYou:"YOU",nextDay:"the next day."},NM={door:"7",mat:"hi",boxLabel:"PEEPLS",boxSub:"handle with love",nfc:"NFC"},UM={waitPill:"tap the keychain",realNfc:"use real nfc",handshake:"PEEPL HANDSHAKE",notifTitle:"PEEPLS",notifBody:"vinnie is home."},OM={walkTitle:"your walk today",news:"news",hd:"HD",bit:"16-BIT",cafePill:"corner café",herePill:"2 peepls here",contactYes:"say hi",contactNo:"not now",contactNotNow:"fair. she'll be around.",friendTitle:"NEW FRIEND!",friendLine:"vinnie + mochi · friendship lv.1",mochiAdded:"mochi added to your neighbours",continueEnd:"meet the neighbours"},BM={heading:"meet the neighbours.",order:["flare","hexi","rudy","nimbus","spike","taro","pip","dex","kit","cosmo","juno","vega"],yourPeepls:"+ your peepls",hasHuman:"has a human",met:"met"},zM={wordmark:"PEEPLS",tagline:"friends with lives of their own.",cta:"keep watching",sub:"app · nfc keychain · desk pal",replay:"replay",lineup:["joe","hexi","nimbus","spike","taro","pip","dex","vinnie","mochi","kit","cosmo","juno","vega","rudy","flare"]},HM={resetAsk:"sure? everything goes."},VM={continue:"tap to continue"},GM={version:RM,captions:PM,S0:kM,S1:FM,S2:LM,S3:IM,S4:DM,S6:NM,S7:UM,S8:OM,S11:BM,S12:zM,debug:HM,ui:VM},WM=1,XM={start:8,max:100,closeMin:70,display:"percent"},$M={VINNIE:{chip:"#FF4A2A"},YOU:{chip:"#0AB8EE"}},YM={maxDays:3,nextDayCard:"the next day.",forcedOnDay:3},qM=["rain","memory","notyet"],jM=[{id:"cantsleep",days:[1],line:[{who:"VINNIE",text:"so. what do you do when you can't sleep?",hop:34}],choices:[{label:"walk. sometimes till sunrise.",trust:28,set:{sleep:"walk"},reply:[{who:"VINNIE",text:"huh. same. i count streetlights.",hop:34}]},{label:"read till my eyes give up.",trust:18,set:{sleep:"read"},reply:[{who:"VINNIE",text:"huh. i count streetlights. same idea, more walking."}]},{label:"why do you care?",trust:-6,reply:[{who:"VINNIE",text:"i was making conversation. it's allowed."}]}],autoPick:0},{id:"kiosk",days:[1],line:[{who:"VINNIE",text:"i have a shift tomorrow. at the kiosk, in spiegelfurt. it's a town. you'd recognise parts of it.",hop:34}],choices:[{label:"what's the kiosk like?",trust:8,reply:[{who:"VINNIE",text:"a window with snacks behind it. i'm the part that says good morning."}]},{label:"do you like the job?",trust:8,reply:[{who:"VINNIE",text:"i like the first hour. after that it's mostly change for a fifty."}]},{label:"what can you do for me?",trust:-8,reply:[{who:"VINNIE",text:"very little. i sell newspapers to other people."}]}],autoPick:1},{id:"rain",days:[1,2],line:[{who:"VINNIE",text:"my turn. what do you do when it rains?",hop:34}],lineAgain:[{who:"VINNIE",text:"you again. good. same question as yesterday. what do you do when it rains?",hop:34}],choices:[{label:"make tea.",trust:8,set:{rain:"tea"},reply:[{who:"VINNIE",text:"tea. sensible. i'll think of that when it rains here."}]},{label:"walk anyway.",trust:8,set:{rain:"walk"},reply:[{who:"VINNIE",text:"walk anyway. stubborn. i can work with stubborn."}]},{label:"put music on.",trust:8,set:{rain:"music"},reply:[{who:"VINNIE",text:"music. so the rain has competition. fair."}]},{label:"why do you care?",trust:-8,reply:[{who:"VINNIE",text:"i was making conversation. it's allowed."}]}],autoPick:1},{id:"boundary",days:[1,2],line:[{who:"VINNIE",text:"one thing before this goes further. i won't be told what to do. i'll listen. i might agree. but i decide.",hop:34}],lineAgain:[{who:"VINNIE",text:"same condition as yesterday. i listen. i might agree. i decide.",hop:34}],choices:[{label:"that's fair.",trust:10,reply:[{who:"VINNIE",text:"good. that was the difficult part."}]},{label:"not even 'pass the salt'?",trust:4,reply:[{who:"VINNIE",text:"salt i'll consider. case by case."}]},{label:"we'll see about that.",trust:-10,reply:[{who:"VINNIE",text:"we will. i have more time than you do."}]}],autoPick:0},{id:"notyet",days:[1],line:[{who:"VINNIE",text:"your turn to have a rule. what's the worst thing you did this week?",hop:34}],choices:[{label:"i'd rather not talk about that yet.",trust:12,set:{notyet:"boundary"},reply:[{who:"VINNIE",text:"that's fine. another time."},{who:"VINNIE",text:"thanks. i like that."}]},{label:"ate cereal for dinner. twice.",trust:8,set:{notyet:"cereal"},reply:[{who:"VINNIE",text:"twice is a system. respect."}]},{label:"you first.",trust:0,reply:[{who:"VINNIE",text:"i gave a man change for a fifty. he gave me a twenty. we both pretended."}]}],autoPick:0},{id:"memory",days:[1,2],line:[{who:"VINNIE",text:"give me one thing to remember about you. one. shelf space is limited.",hop:34}],lineAgain:[{who:"VINNIE",text:"i still have what you told me yesterday. say it again, or swap it. shelf space is limited.",hop:34}],choices:[{label:"i walk a lot.",trust:6,set:{memory:"walks"},reply:[{who:"VINNIE",text:"good. this town needs walking. you'll see why."}],preferIfProfile:"long walks"},{label:"i work late.",trust:6,set:{memory:"late"},reply:[{who:"VINNIE",text:"late. then i'll leave a light on. on my side. it's my electricity."}],preferIfProfile:"night owl"},{label:"i don't like mondays.",trust:6,set:{memory:"mondays"},reply:[{who:"VINNIE",text:"nobody does. we tried skipping one here. it came back."}]}],autoPick:0}],KM={pass:[{who:"VINNIE",text:"ok. i think i like you.",hop:60}],fail:[{who:"VINNIE",text:"not yet. come back tomorrow."}],forced:[{who:"VINNIE",text:"fine. i'll take the risk. don't make me regret it.",hop:34}],toast:"✓ vinnie trusts you"},ZM={ask:[{who:"VINNIE",text:"so. i could come over. properly.",hop:34},{who:"VINNIE",text:"it means a body. small. on a keyring. you'd have to carry me."}],askAgain:[{who:"VINNIE",text:"it's still a yes from me. you?",hop:34}],choices:[{label:"yes. come over.",trust:0,set:{consent:"yes"},reply:[{who:"VINNIE",text:"then i'll pack. it won't take long. i don't own much.",hop:60}]},{label:"not yet.",trust:0,set:{consent:"notyet"},reply:[{who:"VINNIE",text:"fair. ask me again tomorrow."}]}],forced:[{who:"VINNIE",text:"fine. i'll take the risk. don't make me regret it.",hop:34}],autoPick:0,confirmToast:"✓ vinnie is releasing his body"},JM={campaign:["cantsleep line","walk. sometimes till sunrise.","huh. same. i count streetlights.","ok. i think i like you.","✓ vinnie trusts you"],v01:["kiosk","rain","boundary","memory","not yet. come back tomorrow.","fine. i'll take the risk. don't make me regret it."],technicalBriefing:["i'd rather not talk about that yet.","that's fine. another time.","thanks. i like that."],new:["read till my eyes give up.","huh. i count streetlights. same idea, more walking.","notyet beat line","ate cereal for dinner. twice.","twice is a system. respect.","you first.","i gave a man change for a fifty...","consent lines"]},QM={autoplayPath:"8 +28 (36) +8 (44) +8 (52) +10 (62) +12 (74) +6 (80) >= closeMin 70 -> close fills to 100",campaignBarBeats:"after cantsleep reply the bar reads 36% exactly as the video (8 -> 36)"},tw={version:WM,trust:XM,speakers:$M,days:YM,memoryKeys:qM,beats:jM,close:KM,consent:ZM,sources:JM,trustPathCheck:QM},ew=1,nw="festival",iw="event",sw="see map.json landmarks[].key",rw=["the main continues to flow the other way","kiosk-konzern shares close unchanged at one pretzel","lost: one umbrella, hauptwaage. found: a different umbrella","all three trams on time, which is news","kleinstmarkthalle reports stable cheese"],ow={sun:"weather: sun, with a chance of opinions",rain:"weather: rain, as scheduled"},aw=3,lw=[{id:"pigeon",headline:"pigeon elected honorary citizen",ticker:"pigeon elected honorary citizen. acceptance speech brief, mostly about bread",where:"P",startHour:9,durationHours:9,visual:"pigeons",lunch:"P",effects:{social:.05,curiosity:.15,energy:0},reaction:"the honorary citizen is the grey one. they are all the grey one.",diaryLine:"a pigeon was made honorary citizen. it attended the ceremony, then a sandwich."},{id:"festival",headline:"festival of the not-quite-full moon",ticker:"tonight: festival of the not-quite-full moon. moon confirmed at ninety-four percent",where:"Z",startHour:18,durationHours:6,visual:"lanterns",covers:"evening",evening:"Z",crowd:{size:8,radius:2.6},effects:{social:.3,curiosity:.1,energy:-.05},reaction:"ninety-four percent of a moon. we celebrate what we have.",diaryLine:"festival of the not-quite-full moon {at}. lanterns. somebody sang. the moon did its ninety-four percent."},{id:"tram-strike",headline:"tram strike: all three trams stand still",ticker:"tram strike. all three trams stand still. passengers asked to stand still in solidarity",where:"S",startHour:5,durationHours:19,visual:"banner",banner:"STREIK",commute:"detour",trams:"stop",commuteVia:"S",crowd:{size:4,radius:1.5},effects:{social:.05,curiosity:0,energy:-.15},reaction:"all three trams are on strike. solidarity is easier when there are three of you.",diaryLine:"tram strike. all three. i walked the long way and was late. nobody noticed, which was worse."},{id:"mustard",headline:"kiosk-konzern chief steps down after mustard scandal",ticker:'kiosk-konzern chief steps down after mustard scandal. "it was never medium," says insider',where:"T",startHour:10,durationHours:5,visual:"crowd",covers:"lunch",lunch:"K",crowd:{size:6,radius:2},effects:{social:.15,curiosity:.1,energy:-.05},reaction:"the chief resigned. everyone wants a paper. nobody wants mustard.",diaryLine:"the kiosk-konzern chief stepped down over mustard. we sold out of papers by noon. i ate standing up."},{id:"premiere",headline:'premiere at kino harmonie: "pretzel logic"',ticker:'premiere at kino harmonie: "pretzel logic". critics call it "twisted, salted, long"',where:"N",startHour:17,durationHours:5,visual:"crowd",covers:"evening",evening:"N",crowd:{size:6,radius:2},effects:{social:.1,curiosity:.3,energy:-.05},reaction:'"pretzel logic". two hours. it does not untangle.',diaryLine:'saw "pretzel logic" {at}. the plot is a knot. they sell salt in the interval.'},{id:"cheese",headline:"cheese shortage closes the kleinstmarkthalle",ticker:"cheese shortage closes the kleinstmarkthalle. all three stalls affected. all three stalls are cheese",where:"M",startHour:9,durationHours:12,visual:"closedTape",covers:"evening",evening:"M",closes:"M",crowd:{size:3,radius:1.5},effects:{social:-.05,curiosity:-.05,energy:0},reaction:"no cheese. three stalls, nothing on them. it is very tidy.",heard:"no cheese at the kleinstmarkthalle. customers are taking it calmly. too calmly.",diaryLine:"the kleinstmarkthalle was closed. cheese shortage. the tape was the freshest thing there."},{id:"heatwave",headline:"heatwave: 31 degrees in the mirror, 30 in the original",ticker:"heatwave. 31 degrees in the mirror, 30 in the original. officials decline to explain the degree",where:"P",startHour:11,durationHours:7,visual:"crowd",weather:"sun",covers:"lunch",lunch:"P",crowd:{size:6,radius:3},effects:{social:.1,curiosity:0,energy:-.1},reaction:"thirty-one degrees. one more than you have. we checked.",diaryLine:"heatwave. thirty-one here, thirty over there. lunch {at} with everyone else who had the same idea."},{id:"roundabout",headline:"rummer announces a roundabout where no road is",ticker:"rummer announces a roundabout where no road is. construction to begin once a road is found",where:"Z",startHour:14,durationHours:6,visual:"crowd",covers:"evening",evening:"Z",crowd:{size:7,radius:2.4},effects:{social:.1,curiosity:.2,energy:0},reaction:"a roundabout. there is no road. people are queueing to go around.",heard:"they announced a roundabout. there is no road. i will go and look after work.",diaryLine:"the rummer announced a roundabout where there is no road. a crowd came to look at where it would be. i looked too."},{id:"rate",headline:"the türmchen raises the rate on sleep by 0.25",ticker:"the türmchen raises the rate on sleep by 0.25. markets yawn. so does everyone else",where:"E",startHour:13,durationHours:9,visual:"none",everywhere:!0,effects:{social:0,curiosity:.05,energy:-.2},reaction:"sleep went up a quarter point. i do not know what that means. i am tired anyway.",diaryLine:"the türmchen raised the rate on sleep by 0.25. nobody understands it. everyone yawned on principle."},{id:"referendum",headline:"referendum: should the main flow the right way",ticker:"referendum today: should the main flow the right way. the river has not been asked",where:"T",startHour:8,durationHours:13,visual:"banner",banner:"JA NEIN",covers:"evening",evening:"T",crowd:{size:5,radius:2},effects:{social:.1,curiosity:.15,energy:0},reaction:"voted. i will not say which way. the river knows.",heard:"referendum today. about the river. i have a pencil ready.",diaryLine:"referendum on which way the main should flow. i voted {at} in the evening. the river was not consulted."},{id:"rain",headline:"rain predicted; rain arrives",ticker:'rain predicted. rain arrives. forecast office "cautiously surprised"',where:null,startHour:11,durationHours:13,visual:"none",weather:"rain",everywhere:!0,effects:{social:0,curiosity:0,energy:-.05},reaction:"rain was predicted. then it rained. the forecast office is celebrating.",diaryLine:"rain was predicted and then it rained. people were surprised by the accuracy."},{id:"facts",headline:"satirical paper runs out of satire, prints facts by mistake",ticker:'satirical paper "die halbwahrheit" runs out of satire, prints facts by mistake. readers demand refunds',where:null,startHour:7,durationHours:11,visual:"none",atWork:!0,crowd:{size:3,radius:1.2},effects:{social:.05,curiosity:.1,energy:0},reaction:"the satire paper printed facts today. three customers brought it back.",diaryLine:'"die halbwahrheit" ran out of satire and printed facts by mistake. i sold eleven copies. three came back.'}],cw={lexicon:{"central bank":"the türmchen","interest rates":"the rate on sleep","stock market":"the kleinstmarkthalle","city council":"the rummer","prime minister":"the kiosk-konzern chief",election:"referendum",elections:"referendums",strike:"tram strike",train:"tram",trains:"trams",oil:"mustard",inflation:"cheese inflation",economy:"cheese economy",summit:"festival",frankfurt:"spiegelfurt",main:"the main",germany:"parallel germany",hesse:"parallel hesse",europe:"mirror europe",government:"the rummer",parliament:"the rummer",council:"the rummer",bank:"the türmchen",president:"the kiosk-konzern chief",chancellor:"the kiosk-konzern chief",ceo:"the kiosk-konzern chief",minister:"the deputy for mild concern",mayor:"the rummer speaker",police:"the tram authority"},pool:["the kiosk-konzern","the rummer","the türmchen","parallel hesse","the kleinstmarkthalle","the honorary pigeon","the office for approximate numbers","the tram authority","café halbe stunde","the ministry of mild concern"],keep:["the","a","an","in","on","at","after","before","why","how","what","when","new","no","and","of","for","to","as","is","are","with","from","by","it","this","that"],twists:["nobody is surprised.","a committee will look into forming a committee.","the main continues to flow the other way.","cheese prices are unaffected.","the pigeon declined to comment.","experts recommend waiting.","in the original it was the other way round."],reaction:"they are reading it out at the hauptwaage. it sounds better here.",diaryLine:'headline of the day: "{headline}" i did not check it.'},hw="ported from v0.1 DATA.events (12) and DATA.mirror; lowercased; Mika -> vinnie; where = landmark key (P park, Z hauptwaage, S tram stop, T rummer, N kino, M kleinstmarkthalle/MART, E tuermchen, K kiosk, C cafe); banner text stays uppercase because it renders as a sign",dw={version:ew,forcedDay1:nw,seedKey:iw,landmarkIds:sw,tickerFiller:rw,weatherLine:ow,rainEvery:aw,events:lw,mirror:cw,notes:hw},uw=1,fw={world:"campaign iso unit",size:[40,40],axes:"three X = x, three Z = y, three Y = up (campaign z)",peeplHeight:2},pw=[19,19],mw="d0 = distance of footprint centre from centre; inside the flat (15.9..22.1) true distance, elsewhere max(5.4, distance); flat surfaces use d0 5.2 unless set; tier = first tier whose end radius >= d0 (4.6 / 9.5 / 15.5 / 32)",gw={color:"#BFE3A5"},xw=[{id:"ground",kind:"ground",poly:[[0,0],[40,0],[40,40],[0,40]],color:"#BFE3A5",tier:1,d0:0},{id:"sidewalk.n",kind:"sidewalk",rect:[0,22.4,40,23.6],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.s",kind:"sidewalk",rect:[0,26.4,40,27.6],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.w",kind:"sidewalk",rect:[22.4,0,23.6,40],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.e",kind:"sidewalk",rect:[26.4,0,27.6,40],color:"#E9E4D6",d0:5.2,tier:2},{id:"road.x",kind:"road",rect:[0,23.6,40,26.4],color:"#4A4A57",dashes:{axis:"x",at:25,len:.9,pitch:1.8,color:"#FFE100",skip:[22.4,27.6]},d0:5.2,tier:2},{id:"road.y",kind:"road",rect:[23.6,0,26.4,40],color:"#4A4A57",dashes:{axis:"y",at:25,len:.9,pitch:1.8,color:"#FFE100",skip:[22.4,27.6]},d0:5.2,tier:2},{id:"crosswalk.w",kind:"crosswalk",rect:[22.5,23.8,23.5,26.3],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,tier:2},{id:"crosswalk.e",kind:"crosswalk",rect:[26.5,23.8,27.5,26.3],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"crosswalk.n",kind:"crosswalk",rect:[23.8,22.5,26.3,23.5],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"crosswalk.s",kind:"crosswalk",rect:[23.8,26.5,26.3,27.5],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"park",kind:"park",rect:[27.8,27.8,35.2,35.2],color:"#8FD17A",d0:5.2,landmark:"P",tier:2},{id:"pond",kind:"pond",ellipse:[32,31.2,1.6,1.2],color:"#0AB8EE",d0:5.2,tier:2},{id:"river",kind:"river",rect:[36.5,0,39.6,40],color:"#3FC6F2",d0:5.2,landmark:"W",tier:2},{id:"bridge",kind:"bridge",box:[36.3,23.7,0,3.5,2.6,.3],color:"#9A9AA6",tier:4,d0:19.92},{id:"plaza",kind:"plaza",rect:[.3,28.3,7.9,35.9],color:"#E8DCC6",tier:4,d0:19.84,landmark:"Z",new:!0}],vw=[{id:"flat.slab",tier:1,d0:0,box:[16,16,-.5,6,6,.5],color:"#C98B55",cutaway:!0,landmark:"H"},{id:"flat.wall.back",tier:1,d0:.3,box:[16,16,0,6,.25,3.2],color:"#F4EEDF",decals:[{face:"y",u:[2,4.2],v:[1.1,2.5],color:"#23305E",kind:"window"},{face:"y",u:[.6,1.5],v:[1.4,2.3],color:"#FFE100",kind:"picture"}]},{id:"flat.wall.left",tier:1,d0:.3,box:[16,16,0,.25,6,3.2],color:"#FFC4EE",decals:[{face:"x",u:[2.2,3.6],v:[1.2,2.5],color:"#0AB8EE",kind:"window"},{face:"x",u:[4.4,5.5],v:[0,2.2],color:"#FF4A2A",kind:"door"}]},{id:"flat.bed",tier:1,d0:1.86,box:[16.4,16.4,0,2.2,3,.55],color:"#FFFFFF"},{id:"flat.pillow",tier:1,d0:2.62,box:[16.6,16.5,.55,1.8,.7,.22],color:"#FFFFFF"},{id:"flat.cover",tier:1,d0:1.62,box:[16.4,17.4,.55,2.2,2,.12],color:"#FF7ADB"},{id:"flat.dresser",tier:1,d0:2.94,box:[20.2,16.4,0,1.6,.9,1],color:"#8B5A2B"},{id:"flat.tv",tier:1,d0:3.14,box:[20.5,16.5,1,1,.15,.7],color:"#111111",decals:[{face:"y",u:[.1,.9],v:[.1,.6],color:"#FFE66B",kind:"screen",emissive:.6}]},{id:"flat.lamp.pole",tier:1,d0:3.54,box:[21.55,16.55,1,.1,.1,.55],color:"#111111"},{id:"flat.lamp.shade",tier:1,d0:3.52,box:[21.35,16.45,1.55,.5,.35,.25],color:"#FFE100",glow:!0},{id:"flat.stool",tier:1,d0:2.26,box:[20.6,17.5,0,.7,.7,.5],color:"#FF4A2A",seatPoint:[20.95,17.85,.5]},{id:"flat.bookshelf",tier:1,d0:2.96,box:[16.3,19.8,0,.55,1.8,2.2],color:"#8B5A2B",decals:[{face:"x",u:[.15,.45],v:[.25,.9],color:"#FF4A2A",kind:"book"},{face:"x",u:[.5,.75],v:[.25,.85],color:"#FFE100",kind:"book"},{face:"x",u:[.85,1.2],v:[.25,.95],color:"#0AB8EE",kind:"book"},{face:"x",u:[1.3,1.6],v:[.25,.8],color:"#FF7ADB",kind:"book"},{face:"x",u:[.2,.6],v:[1.2,1.9],color:"#7B35C4",kind:"book"},{face:"x",u:[.7,1],v:[1.2,1.8],color:"#FFFFFF",kind:"book"},{face:"x",u:[1.1,1.55],v:[1.2,1.95],color:"#FF4A2A",kind:"book"}]},{id:"flat.pot",tier:1,d0:3.32,box:[21.1,21,0,.6,.6,.5],color:"#E07A4F"},{id:"tower.pink",tier:2,d0:6.5,box:[9.6,16.2,0,5.8,5.8,5.4],color:"#FF9FE6",shadow:!0,landmark:"K",sign:{text:"KIOSK",face:"y",at:[12.5,22.05],z:1.9},shopFront:{face:"y",u:[1.8,4.2],v:[0,1.8],counter:!0},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"tower.cyan",tier:2,d0:6.5,box:[16.2,9.6,0,5.8,5.8,7.2],color:"#7FD3F5",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"tower.yellow",tier:2,d0:9.19,box:[9.6,9.6,0,5.8,5.8,9.4],color:"#FFE66B",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"cafe",tier:3,d0:11.5,box:[27.8,16.2,0,5.4,5.8,3.4],color:"#F4EEDF",shadow:!0,landmark:"C",sign:{text:"CAFÉ",face:"y",at:[30.5,22.05],z:2.9},decals:[{face:"y",u:[.5,3.6],v:[.4,2.2],color:"#BFE8FA",kind:"window"},{face:"y",u:[4.1,4.9],v:[0,2.2],color:"#FF4A2A",kind:"door"}]},{id:"cafe.awning",tier:3,d0:11.5,box:[27.8,22,2.3,5.4,.9,.16],color:"#FFE100",stripes:{color:"#FF7ADB",count:5,width:.54,pitch:1.08}},{id:"cafe.table.1",tier:3,d0:11.5,box:[28.6,22.45,0,.6,.5,.55],color:"#FFFFFF",seats:[[28.25,22.7,.44],[29.55,22.7,.44]]},{id:"cafe.table.2",tier:3,d0:11.5,box:[31.4,22.45,0,.6,.5,.55],color:"#FFFFFF",seats:[[31.05,22.7,.44],[32.35,22.7,.44]]},{id:"block.white.narrow",tier:4,d0:15.9,box:[33.6,16.2,0,2.6,5.8,4],color:"#FFFFFF",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"mart",tier:3,d0:11.5,box:[15.2,27.8,0,7,5.4,3.8],color:"#FFFFFF",shadow:!0,landmark:"M",sign:{text:"MART",face:"x",at:[22.25,30],z:4.2},decals:[{face:"x",u:[.4,3.9],v:[.3,2.4],color:"#BFE8FA",kind:"window"},{face:"x",u:[4.3,5],v:[0,2.3],color:"#0AB8EE",kind:"door"}]},{id:"mart.signslab",tier:3,d0:11.5,box:[22.2,28.4,3.8,.3,3.2,.8],color:"#FF7ADB"},{id:"block.lavender",tier:3,d0:13.41,box:[9.6,27.8,0,5,5.4,4.4],color:"#B9A2F0",shadow:!0,landmark:"N",sign:{text:"KINO",face:"y",at:[12.1,33.25],z:3.2},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"block.salmon",tier:3,d0:13.21,box:[27.8,9.6,0,5.4,5.8,5.6],color:"#FF8A73",shadow:!0,landmark:"T",sign:{text:"RUMMER",face:"x",at:[33.25,12.5],z:4},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"block.yellow.low",tier:4,d0:16,box:[15.2,33.8,0,7,2.4,3],color:"#FFE66B",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"city.tuermchen",tier:4,d0:15.81,box:[4.3,8.3,0,3.4,3.4,11],color:"#FFFFFF",shadow:!0,landmark:"E",sign:{text:"TÜRMCHEN",face:"y",at:[6,11.75],z:2.2},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}}],_w=[{id:"flat.plant",kind:"blob",at:[21.4,21.3],tier:1,d0:3.32,z:.95,r:.55,color:"#4CAF50"},{id:"flat.rug",kind:"rug",at:[20.05,19.8],tier:1,d0:1,size:[2.5,2.4],color:"#0AB8EE"},{id:"flat.armchair",kind:"armchair",at:[18.6,17.2],tier:1,d0:2,color:"#C98B55",cushion:"#0AB8EE",seatPoint:[18.6,17.4,.44],new:!0},{id:"flat.floorlamp",kind:"floorlamp",at:[17,21.2],tier:1,d0:2.8,color:"#FFE100",new:!0},{id:"flat.poster",kind:"poster",at:[18.5,16.26],tier:1,d0:2.8,z:1.6,size:[.9,1.1],text:"X",color:"#F4EEDF",face:"y",new:!0},{id:"lamp.0",kind:"lamp",at:[22.7,20.2],tier:2,d0:5.4,height:3.5},{id:"lamp.1",kind:"lamp",at:[20.2,22.7],tier:2,d0:5.4,height:3.5},{id:"lamp.2",kind:"lamp",at:[27.3,20.5],tier:2,d0:8.43,height:3.5},{id:"lamp.3",kind:"lamp",at:[22.7,33.5],tier:3,d0:14.96,height:3.5},{id:"tree.0",kind:"tree",at:[22.7,17.4],tier:2,d0:5.4,scale:1},{id:"tree.1",kind:"tree",at:[13.2,22.7],tier:2,d0:6.88,scale:1},{id:"tree.2",kind:"tree",at:[29,29.2],tier:3,d0:14.28,scale:1},{id:"tree.3",kind:"tree",at:[34.4,30.2],tier:4,d0:19.04,scale:1},{id:"tree.4",kind:"tree",at:[29.2,34.2],tier:4,d0:18.31,scale:1},{id:"tree.5",kind:"tree",at:[33.4,34.3],tier:4,d0:21.01,scale:1},{id:"bench.tram",kind:"bench",at:[18.55,22.78],tier:2,d0:5.4,size:[1.3,.45],color:"#8B5A2B",landmark:"S",sign:{text:"TRAM",pole:!0},seatPoint:[18.55,22.7,.44]},{id:"bin.0",kind:"bin",at:[21.58,22.78],tier:2,d0:5.4,color:"#0AB8EE"},{id:"car.red",kind:"car",at:[18,24.35],tier:2,d0:5.44,size:[2.4,1.1],color:"#FF4A2A",roof:"#DDEFFF"},{id:"car.yellow",kind:"car",at:[24.35,29.85],tier:3,d0:12.1,size:[1.1,2.4],color:"#FFE100",roof:"#DDEFFF"},{id:"bench.park",kind:"bench",at:[31.05,34.65],tier:4,d0:19.75,size:[1.3,.5],color:"#8B5A2B",seatPoint:[31.05,34.55,.44]},{id:"car.blue.loop",kind:"car",at:[25,9],tier:3,d0:12,size:[2.4,1.1],color:"#3E6FC4",roof:"#DDEFFF",loop:{path:[[25,.5],[25,39.5]],speed:3.2,pingpong:!1,lane:"x-road"}}],yw=[{key:"H",id:"flat",name:"vinnie's flat",at:"at home",sign:null,tier:1,kind:"home",building:"flat.slab",door:[21,22.2],spots:{tv:[20.95,17.85],bed:[17.5,18.4],shelf:[17.1,20.7],chair:[18.6,17.4],window:[18.5,17]},lore:"wohnblock. i live on the third floor. the lift lives on the second."},{key:"K",id:"kiosk",name:"the kiosk",at:"at the kiosk",sign:"KIOSK",tier:2,kind:"work",building:"tower.pink",door:[12.5,22.2],spots:{counter:[12.5,21.6],front:[12.5,22.9]},lore:"the kiosk. a wasserhäuschen, technically. nobody has ever bought water here."},{key:"S",id:"tramstop",name:"the tram stop",at:"at the tram stop",sign:"TRAM",tier:2,kind:"transit",spots:{bench:[18.55,22.7],wait:[19.6,22.9]},lore:"tram stop. there are three trams. they come in threes or not at all."},{key:"C",id:"cafe",name:"café halbe stunde",at:"at café halbe stunde",sign:"CAFÉ",tier:3,kind:"cafe",building:"cafe",door:[32.3,22.2],spots:{vinnieMark:[29,23],mochiMark:[31.6,23],table1:[28.9,22.7],table2:[31.7,22.7]},lore:"café halbe stunde. you get half an hour. after that the coffee gives up."},{key:"M",id:"mart",name:"the kleinstmarkthalle",at:"at the kleinstmarkthalle",sign:"MART",tier:3,kind:"market",building:"mart",door:[22.4,32.45],spots:{corner:[23,29.4],front:[23,31]},lore:"kleinstmarkthalle. smallest market hall in parallel hesse. three stalls, all cheese."},{key:"P",id:"park",name:"the park",at:"in the park",sign:null,tier:3,kind:"park",spots:{pond:[30.2,30.4],tree:[29.6,29.8],bench:[31.05,34.55],lawn:[28.8,32]},lore:"the park. some trees, one bench, and a pigeon with tenure."},{key:"N",id:"kino",name:"kino harmonie",at:"at kino harmonie",sign:"KINO",tier:3,kind:"cinema",building:"block.lavender",door:[12.1,33.3],lore:"kino harmonie. one screen. everyone agrees about the film afterwards. it is in the name."},{key:"T",id:"rummer",name:"the rummer",at:"at the rummer",sign:"RUMMER",tier:3,kind:"civic",building:"block.salmon",door:[33.3,12.5],lore:"rummer. the town hall. three gables, one decision a year."},{key:"Z",id:"hauptwaage",name:"the hauptwaage",at:"at the hauptwaage",sign:"HAUPTWAAGE",tier:4,kind:"plaza",monument:[4.1,32.1],spots:{a:[3,31],b:[5.2,31],c:[3,33.2],d:[5.2,33.2],e:[4.1,34.4]},lore:"hauptwaage. opinions get weighed here. most are light."},{key:"E",id:"tuermchen",name:"the türmchen",at:"at the türmchen",sign:"TÜRMCHEN",tier:4,kind:"bank",building:"city.tuermchen",door:[6,11.8],lore:"türmchen. it sets the rates. on what, nobody asks twice."},{key:"W",id:"main",name:"the main",at:"by the main",sign:null,tier:4,kind:"river",spots:{bank:[36,25]},lore:"the main. flows the other way here. nobody has complained."}],bw={cell:1,walkRects:[[0,22.4,40,23.6],[0,26.4,40,27.6],[22.4,0,23.6,40],[26.4,0,27.6,40],[22.5,23.6,23.5,26.4],[26.5,23.6,27.5,26.4],[23.6,22.5,26.4,23.5],[23.6,26.5,26.4,27.5],[16.3,16.3,21.9,21.9],[20.4,21.9,21.6,22.4],[27.8,22,33.2,22.4],[27.8,27.8,35.2,35.2],[.3,28.3,7.9,35.9],[12,21.4,13,22.4],[22.2,32,22.4,32.9],[32,21.9,32.6,22.4]],blocked:[[30.4,30,33.6,32.4]],rightHandOffset:.3,doors:{H:[21,22.2],K:[12.5,22.2],C:[32.3,22.2],M:[22.4,32.45],N:[12.1,33.3],T:[33.3,12.5],E:[6,11.8]}},Mw={generator:"campaign WORLD tier-4 loop, ported 1:1",hash:"hsh(i) = fract(sin(i*127.1 + 311.7) * 43758.5453)",grid:[10,10],lotPitch:4,lotOffset:.3,lotSize:3.4,core:[9.2,9.2,36.2,36.2],roadBands:[[22.2,27.8]],maxX:36.3,treeChance:.16,treeScale:1.25,height:"1.8 + r*r*10 with r = hsh(n*3.1 + 1)",colourIndex:"floor(hsh(n*7.7 + 2) * 7)",treeTest:"hsh(n*5.3) < 0.16",palette:["#F4EEDF","#FF9FE6","#7FD3F5","#FFE66B","#FFFFFF","#B9A2F0","#FF8A73"],skipRects:[[.3,28.3,7.9,35.9],[4.3,8.3,7.7,11.7]],skipRule:"increment n before testing skipRects so every other lot keeps its campaign height and colour",windows:!0,shadow:!0},ww={cells:20,cellSize:2,color:"#35314B",dusk:"#2A2640",variation:[.9,1.1],band:1.8,popBand:1.4,height:.12},Sw=[{who:"pip",a:[31.9,23.2],tierMin:3},{who:"dex",a:[28.2,23.45],b:[34.8,23.45],speed:.8,phase:.3,tierMin:3},{who:"mochi",a:[23,30.1],tierMin:3},{who:"kit",a:[30.6,30.2],tierMin:4},{who:"nimbus",a:[28.8,31.4],tierMin:4},{who:"taro",a:[35.2,23.2],tierMin:4},{who:"cosmo",a:[3.5,23.1],tierMin:4},{who:"juno",a:[1.5,23.25],b:[8.4,23.25],speed:.8,phase:.4,tierMin:3},{who:"vega",a:[23.1,3.2],tierMin:4},{who:"spike",a:[23.25,1.2],b:[23.25,8.2],speed:.9,phase:.7,tierMin:3},{who:"hexi",a:[23.1,37.4],tierMin:4},{who:"rudy",a:[2.4,23.1],tierMin:4},{who:"flare",a:[23.1,5.2],tierMin:3},{who:"joe",a:[9.8,23.2],b:[21.2,23.2],speed:1,phase:.1,decor:!0,tierMin:2},{who:"joe",a:[23.25,9.8],b:[23.25,21.4],speed:.9,phase:.6,decor:!0,tierMin:2},{who:"joe",a:[27,28.4],b:[27,35],speed:.9,phase:.2,decor:!0,tierMin:3},{who:"joe",a:[29.5,32.8],b:[32.4,32.8],speed:.7,phase:.5,decor:!0,tierMin:4}],Ew={homes:[[3,22.9],[12.5,22.9],[23,14],[23,36],[33,22.9],[27,5],[27,31],[8,27]]},Aw={version:uw,units:fw,centre:pw,revealRule:mw,ground:gw,surfaces:xw,buildings:vw,props:_w,landmarks:yw,nav:bw,city:Mw,fog:ww,placements:Sw,extrasSpawn:Ew},Tw=1,Cw={day:1,time:"13:00",note:"S8 story mode opens on vinnie's day off"},Rw={dayRealSeconds:240,speeds:[0,1,4,16],simStep:20,seed:57},Pw={dayOff:{days:[1],schedule:[{from:"13:00",to:"14:00",place:"H",spot:"tv",anim:"tv",line:"dayoff"},{from:"14:00",to:"14:30",place:"H",spot:"shelf",anim:"read"},{from:"14:30",to:"15:00",place:"H",spot:"window",anim:"idle"},{from:"15:00",to:"15:40",place:"S",spot:"bench",anim:"sit",line:"tramstop",fallback:{place:"H",spot:"chair",anim:"sit"}},{from:"15:40",to:"16:20",place:"K",spot:"front",anim:"browse",line:"customer",fallback:{place:"H",spot:"tv",anim:"tv"}},{from:"16:20",to:"17:00",place:"S",spot:"wait",anim:"idle",fallback:{place:"H",spot:"shelf",anim:"read"}},{from:"17:00",to:"17:30",place:"M",spot:"corner",anim:"idle",beat:"contact",fallback:{place:"H",spot:"window",anim:"idle"}},{from:"17:30",to:"18:00",place:"C",spot:"table1",anim:"sit",line:"eveningC",fallback:{place:"H",spot:"chair",anim:"sit"}},{from:"18:00",to:"20:30",place:"Z",spot:"a",anim:"idle",line:"eveningZ",fallback:{place:"C",spot:"table1",anim:"sit"}},{from:"20:30",to:"21:30",place:"H",spot:"chair",anim:"sit",line:"goHome"},{from:"21:30",to:"22:30",place:"H",spot:"shelf",anim:"read",line:"diary"},{from:"22:30",to:"13:00",place:"H",spot:"bed",anim:"sleep",line:"sleep"}]},work:{days:"2+",schedule:[{from:"06:30",to:"07:30",place:"H",spot:"tv",anim:"idle",line:"wake"},{from:"07:30",to:"12:30",place:"K",spot:"counter",anim:"browse",line:"arriveWork",walkLine:"leave"},{from:"12:30",to:"13:15",place:"$lunch",spot:"auto",anim:"sit",line:"$lunch",options:{C:"lunchCafe",P:"lunchPark",K:"lunchRush",Krain:"lunchStay"}},{from:"13:15",to:"17:00",place:"K",spot:"counter",anim:"browse",line:"backToWork"},{from:"17:00",to:"20:30",place:"$evening",spot:"auto",anim:"idle",line:"$evening",options:{P:"eveningP",C:"eveningC",Z:"eveningZ",N:"eveningN",M:"eveningM",Mclosed:"eveningMclosed",T:"eveningT",H:"eveningH",Hrain:"eveningHrain"},walkLine:"close"},{from:"20:30",to:"22:00",place:"H",spot:"chair",anim:"sit",line:"goHome"},{from:"22:00",to:"22:30",place:"H",spot:"shelf",anim:"read",line:"diary"},{from:"22:30",to:"06:30",place:"H",spot:"bed",anim:"sleep",line:"sleep"}],rules:{rainEvery:3,lunch:"event.lunch ?? (rain ? 'Krain' : rng pick of C,P weighted by needs.social)",evening:"event.evening ?? highest need: social->Z or C, curiosity->N or T or M, energy low->H; closed places map to the 'closed' line"}},tierGating:"if the activity's place tier > current tier, run its fallback (or H idle). story beats ('beat') fire only when the place is allowed",walkSpeedU:1.6,visibleRule:{outdoorShareMin:.6,cutawayCountsAsVisible:!0},lines:{wake:["morning. allegedly.","awake. under protest.","up. the day insisted."],leave:["kiosk. same as yesterday, with newer newspapers.","off to work. the papers will not sell themselves. i have checked."],detour:["a tram is resting on my usual way. walking the long way."],arriveWork:["kiosk open. technically.","shutters up. expectations low.","open. first customer wants change for a fifty."],arriveLate:["late. the kiosk did not mind. it cannot."],lunchCafe:["half an hour. starting now.","the usual. they know what that is. i do not."],lunchPark:["bench. sandwich. pigeons at a respectful distance.","lunch outside. the bench was free. it usually is."],lunchRush:["no lunch. everyone wants a paper at once."],lunchStay:["raining. eating behind the counter. the view is snacks."],backToWork:["back. nothing happened. i checked.","second half. same kiosk."],close:["shutters down. that was the shift.","closed. the newspapers are already old."],eveningP:["evening in the park. the light does most of the work."],eveningC:["coffee after work. a second half hour. bold."],eveningZ:["hauptwaage. standing where the others are standing."],eveningN:["one ticket. middle row. nobody behind me, i hope."],eveningM:["kleinstmarkthalle. buying cheese from stall two of three."],eveningMclosed:["closed. i will stand here a moment. out of respect."],eveningT:["voting. i brought my own pencil."],eveningH:["home early. the sofa and i have plans."],eveningHrain:["raining. home. not complicated."],goHome:["home. enough town for one day."],diary:["writing it down. briefly."],sleep:["light off. mostly."],rain:["rain. as scheduled."],customer:["{name} bought a paper and an opinion. the opinion was free.","{name} wanted change for a fifty. everyone does."],meet:["{name}. we nodded. that was the conversation.","passed {name}. weather was discussed. briefly.","{name} said hello. i said it back. even trade."],ohhi:["oh. hi."],dayoff:["day off. the kiosk can stare at someone else.","no shift today. i checked twice."],tramstop:["tram stop. i'm not taking one. i just like the waiting."],contact:["psst. her. over there."]}},kw=[{id:"joe-1",ported:"bembel",home:[3,22.9],body:"average",attach:[{part:"prop.briefcase"}],plan:[["07:10","T","in"],["12:10","Z","out"],["12:55","T","in"],["16:45","C","out"],["18:50","home"]]},{id:"joe-2",ported:"gri",home:[12.5,22.9],body:"thin",attach:[{part:"prop.bag"}],plan:[["06:20","M","in"],["14:00","P","out"],["16:20","home"],["18:40","Z","out"],["21:10","home"]]},{id:"joe-3",ported:"handkaes",home:[23,14],body:"stocky",attach:[{part:"prop.cup"}],plan:[["08:40","P","out"],["10:10","K","visit"],["10:45","C","out"],["12:00","home"],["15:10","Z","out"],["17:20","M","in"],["19:20","home"]]},{id:"joe-4",ported:"ebbel",home:[23,36],body:"average",attach:[{part:"prop.umbrella"}],plan:[["08:50","E","in"],["17:10","N","in"],["20:40","C","out"],["22:10","home"]]},{id:"joe-5",ported:null,home:[33,22.9],body:"thin",attach:[{part:"headphones"}],plan:[["09:30","S","out"],["11:00","P","out"],["13:00","K","visit"],["16:00","S","out"],["18:30","Z","out"],["21:00","home"]]},{id:"joe-6",ported:null,home:[27,5],body:"average",attach:[{part:"prop.balloon"}],plan:[["10:00","C","out"],["12:30","P","out"],["15:00","M","in"],["16:30","S","out"],["18:00","Z","out"],["20:00","home"]]},{id:"joe-7",ported:null,home:[27,31],body:"xl",attach:[{part:"prop.flowers"}],plan:[["07:45","K","visit"],["09:00","T","in"],["13:00","C","out"],["14:00","T","in"],["17:30","P","out"],["19:30","home"]]},{id:"joe-8",ported:null,home:[8,27],body:"average",attach:[{part:"prop.dog"}],plan:[["08:00","P","out"],["11:30","S","out"],["14:30","P","out"],["17:45","Z","out"],["20:15","home"]]}],Fw={start:{energy:[.72,.96],social:[.3,.6],curiosity:[.3,.6]},rates:{sleep:{energy:.11,social:-.01,curiosity:0},home:{energy:.02,social:-.04,curiosity:-.02},walk:{energy:-.06,social:.01,curiosity:.04},work:{energy:-.05,social:.02,curiosity:-.045},rush:{energy:-.09,social:.07,curiosity:.01},cafe:{energy:.06,social:.14,curiosity:.02},park:{energy:.03,social:.03,curiosity:.08},plaza:{energy:-.03,social:.16,curiosity:.08},cinema:{energy:-.01,social:.04,curiosity:.2},market:{energy:-.02,social:.08,curiosity:.07},rummer:{energy:-.02,social:.06,curiosity:.1}},moods:[[.3,"glum"],[.42,"flat"],[.58,"okay"],[.72,"content"],[9,"bright"]]},Lw="lines ported from v0.1 DATA.lines (lowercased, Mika -> vinnie); extras 1-4 port v0.1 plans (bembel, gri, handkaes, ebbel) as white Joes carrying crowd-scene props; 5-8 are new",Iw={version:Tw,start:Cw,clock:Rw,vinnie:Pw,extras:kw,needs:Fw,notes:Lw},Dw=1,Nw=[{id:"enter",trigger:{on:"s8Start"},actions:[["simTime","13:00"],["tier",1],["camera","town",{dist:[26,24],seconds:5}],["vinnie","activity","tv"],["caption","tier1",.8],["vinnie","standTurn",4.5],["bubble","vinnie","oh. hi.",4.9],["autoWalk",8]]},{id:"tier2",trigger:{on:"km",gte:.5},actions:[["tier",2],["gps","show"],["ticker","start"],["caption","tier2",.3],["routine","unlock",2],["lore","K","onFirstReveal"]]},{id:"tier3",trigger:{on:"km",gte:1.2},actions:[["tier",3],["rings","on"],["caption","tier3",.2],["routine","unlock",3]]},{id:"contact",trigger:{on:"near",a:"vinnie",b:"mochi",dist:6,tierMin:3},actions:[["holdSim",!0],["play","contact"]]},{id:"cafe",trigger:{on:"choice",beat:"contact",value:"sayhi"},actions:[["wipe"],["play","cafe"],["met","mochi"]]},{id:"tier4",trigger:{on:"km",gte:2.2,after:"cafe"},actions:[["tier",4],["caption","tier4",.2],["gfx","hd",1],["routine","unlock",4],["walkTo",["vinnie","mochi"],"Z"]]},{id:"end",trigger:{on:"any",of:[{after:"tier4",realSeconds:12},{simTimeGte:"20:30"}]},actions:[["gps","shrink"],["continue","meet the neighbours"],["next","S11"]]}],Uw={camera:{shot:"venue",dist:16},steps:[{t:0,do:"turn",who:"vinnie",to:"mochi"},{t:0,do:"bubble",who:"vinnie",text:"psst. her. over there.",hop:.12},{t:1.4,do:"bubble",who:"vinnie",text:"say hi?",choices:[{label:"say hi",value:"sayhi"},{label:"not now",value:"notnow"}],autoPick:0,autoAfter:2}],onSayHi:[{t:0,do:"clip",who:"vinnie",clip:"wave"},{t:.2,do:"turn",who:"mochi",to:"vinnie"},{t:.25,do:"clip",who:"mochi",clip:"react"},{t:.3,do:"hop",who:"vinnie"},{t:.5,do:"bubble",who:"mochi",text:"hi vinnie!",style:"yellow"},{t:.55,do:"hop",who:"mochi"},{t:1.6,do:"end",next:"cafe"}],onNotNow:[{t:0,do:"bubble",who:"vinnie",text:"fair. she'll be around."},{t:1.5,do:"end",retrigger:"tapMochi"}]},Ow={holdSim:!0,marks:{vinnie:[29,23],mochi:[31.6,23],vinnieFrom:[25.5,23],mochiFrom:[35,23]},shots:[{id:"C1",ref:"show/s_019.jpg",t:[0,1.9],camera:{shot:"venue",target:[30.3,1,22.8],pitch:24,dist:[18,17]},actions:[["walk","vinnie","mark",3],["walk","mochi","mark",3],["pill","cafePill",.3],["pill","herePill",.3],["hide","tierChip"],["hide","gps"]]},{id:"C2",ref:"show/s_020.jpg",t:[1.9,2.4],camera:{shot:"venue",dist:[17,16]},actions:[["clip","both","react"],["turn","vinnie","mochi"],["turn","mochi","vinnie"],["bang","both",1.9],["dialogueBox","rise",2]]},{id:"C3",ref:"show/s_021.jpg",t:[2.4,4.7],camera:{shot:"close",favour:"vinnie",panPx:70},line:{who:"VINNIE",text:"yo. you're in colour too.",at:2.4}},{id:"C4",ref:"show/s_023.jpg",t:[4.7,7],camera:{shot:"close",favour:"mochi",panPx:70},line:{who:"MOCHI",text:"so you're the famous vinnie. nice mask.",at:4.7}},{id:"C5",ref:"show/s_026.jpg",t:[7,9.1],camera:{shot:"close",favour:"vinnie",panPx:70},line:{who:"VINNIE",text:"it's my face. wanna get coffee?",at:7}},{id:"C6",ref:"show/s_028.jpg",t:[9.1,10.8],camera:{shot:"close",favour:"mochi",panPx:70},line:{who:"MOCHI",text:"only if it's oat.",at:9.1},caret:"▼"},{id:"C7",ref:"show/s_029.jpg",t:[10.8,12.6],camera:{shot:"venue",dist:16,seconds:.9},actions:[["friendMeter",10.8],["dialogueBox","drop",11],["clip","both","joy",11.9]]},{id:"C8",ref:null,t:[12.6,20],camera:{shot:"venue",orbitDeg:15},actions:[["walk","vinnie","seat",[28.25,22.7]],["walk","mochi","seat",[29.55,22.7]],["clip","both","sit"],["cups","table1"],["toast","mochiAdded",16]]}],end:{t:20,do:"wipe",to:"town",resumeSim:!0},speakerChips:{VINNIE:"#FF4A2A",MOCHI:"#FF7ADB"},typeMsPerChar:35},Bw={version:Dw,worldScript:Nw,contact:Uw,cafe:Ow},zw=1,Hw=[19,19],Vw={hdFromTier:4,hdDelay:1,overlayFade:[.55,0],overlayFadeSeconds:1.6,fieldGlow:{"16bit":.25,hd:.45}},Gw={metersPerMapPx:5,manualKmPerSecond:.06,autoKmPerSecond:.03,autoStartDelay:8,card:{mapSize:[348,212],start:[92,118]},autoRoute:[[92,118],[150,118],[150,70],[240,70],[240,150],[300,150],[300,40],[200,30],[120,40],[60,90],[60,180],[180,190],[320,190]]},Ww=[{n:1,badge:"tier 1",name:"his place",kmAt:0,radius:[0,4.6],radiusSeconds:1.2,shot:{target:[19,19],dist:26,distEnd:24,distSeconds:5,pitch:35.264},caption:"at first, he only lets you see his place.",captionAt:.8,captionFor:4.5,bubble:{who:"vinnie",text:"oh. hi.",delay:4.9,hold:1.1},gfx:"16bit",routineAllow:["H"]},{n:2,badge:"tier 2",name:"his street",kmAt:.5,radius:[4.6,9.5],radiusSeconds:1.8,shot:{target:[21,21],dist:48,distSeconds:2,pitch:35.264},caption:"get closer, and he shows you more.",captionAt:.3,captionFor:3.2,gfx:"16bit",routineAllow:["H","K","S"]},{n:3,badge:"tier 3",name:"the neighbourhood",kmAt:1.2,radius:[9.5,15.5],radiusSeconds:2,shot:{target:[24,24],dist:64,distSeconds:2,pitch:35.264},caption:"spot someone in colour? they've got a human too.",captionAt:.2,captionFor:4.4,gfx:"16bit",rings:!0,routineAllow:["H","K","S","C","M","P","N","T"]},{n:4,badge:"tier 4",name:"the city",kmAt:2.2,requires:["cafe"],radius:[15.5,32],radiusSeconds:2.6,shot:{target:[20,20],dist:136,distSeconds:3,pitch:35.264},caption:"walk your world, and his world opens up.",captionAt:.2,captionFor:5,gfx:"hd",rings:!0,routineAllow:["H","K","S","C","M","P","N","T","Z","E","W"]}],Xw={progressSegments:4,gpsTitle:"your walk today",kmFormat:"{km} km",walkPillTier1:"your walk today · {km} km"},$w={version:zw,centre:Hw,gfx:Vw,walk:Gw,tiers:Ww,hud:Xw},_a=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),rn=(i,t,e,n)=>{var s;i.push(`${t}: ${e} (got ${(s=JSON.stringify(n))==null?void 0:s.slice(0,60)})`)},jf=()=>{},gt=(i,t,e)=>typeof i!="string"&&rn(e,t,"expected string",i),It=(i,t,e)=>(typeof i!="number"||!Number.isFinite(i))&&rn(e,t,"expected number",i),Pc=(i,t,e)=>typeof i!="boolean"&&rn(e,t,"expected boolean",i),an=(i,t,e)=>(typeof i!="string"||!/^#[0-9A-Fa-f]{3,8}$/.test(i))&&rn(e,t,"expected #hex",i),ya=i=>(t,e,n)=>t!==null&&i(t,e,n),ni=(...i)=>(t,e,n)=>!i.includes(t)&&rn(n,e,`expected one of ${i.join("|")}`,t),kc=(i,t,e)=>(typeof i!="string"||!/^\d{2}:\d{2}$/.test(i))&&rn(e,t,"expected hh:mm",i),Kt=(i,t=0)=>(e,n,s)=>{if(!Array.isArray(e))return rn(s,n,"expected array",e);e.length<t&&rn(s,n,`expected at least ${t} items`,e.length),e.forEach((r,o)=>i(r,`${n}[${o}]`,s))},Ie=(i,t=It)=>(e,n,s)=>{if(!Array.isArray(e)||e.length!==i)return rn(s,n,`expected ${i}-tuple`,e);e.forEach((r,o)=>t(r,`${n}[${o}]`,s))},Yw=(i,t)=>(e,n,s)=>{if(!Array.isArray(e)||e.length!==2)return rn(s,n,"expected pair",e);i(e[0],`${n}[0]`,s),t(e[1],`${n}[1]`,s)},At=i=>(t,e,n)=>{if(!_a(t))return rn(n,e,"expected object",t);for(const[s,r]of Object.entries(i)){const o=s.endsWith("?"),a=o?s.slice(0,-1):s;if(!(a in t)){o||rn(n,`${e}.${a}`,"missing",void 0);continue}r(t[a],`${e}.${a}`,n)}},nn=i=>(t,e,n)=>{if(!_a(t))return rn(n,e,"expected object",t);for(const[s,r]of Object.entries(t))i(r,`${e}.${s}`,n)},Xi=ni(1),Ho=At({head:It,h:It,T:It,A:It,hem:It,belly:It,legs:It}),Kf=ni("thin","average","stocky","xl"),Zf=At({part:gt,"color?":an,"color2?":an,"side?":ni("L","R"),"params?":nn(jf)}),qw=["head","h","T","A","hem","belly","legs"],jw=At({id:gt,num:gt,name:gt,tagline:ya(gt),hasHuman:Pc,role:ni("lead","friend","neighbour","blank"),body:Kf,headScale:It,"shape?":(i,t,e)=>{if(nn(It)(i,t,e),_a(i))for(const n of Object.keys(i))qw.includes(n)||rn(e,`${t}.${n}`,"unknown shape key",n)},skin:an,"hands?":an,face:At({eyes:gt,mouth:gt}),top:At({type:gt,color:an,"color2?":an}),pants:At({type:ni("wide","straight","jeans"),color:an}),shoes:At({type:ni("sneaker","leather"),color:an}),attach:Kt(Zf),sprite:At({body:gt,card:gt,footX:It,aspect:It}),"flags?":At({"occultMarks?":Pc})}),Kw=At({version:Xi,units:At({U:gt,worldPerU:It}),bodyTypes:At({thin:Ho,average:Ho,stocky:Ho,xl:Ho}),cast:(i,t,e)=>{if(Kt(jw,15)(i,t,e),Array.isArray(i)){const n=i.map(s=>_a(s)?s.id:null);new Set(n).size!==n.length&&rn(e,t,"duplicate cast ids",n)}}}),Zw=At({version:Xi,captions:nn(gt),S0:At({tags:Kt(Yw(gt,It)),wordmark:gt}),S1:At({heading:gt,chips:Kt(Ie(2,gt)),button:gt}),S2:At({finding:gt}),S3:At({name:gt,pill:gt}),S4:At({trust:gt}),S6:nn(gt),S7:nn(gt),S8:nn(gt),S11:At({heading:gt,order:Kt(gt,12)}),S12:At({wordmark:gt,tagline:gt,cta:gt,sub:gt,replay:gt,lineup:Kt(gt,15)}),debug:At({resetAsk:gt}),ui:At({continue:gt})}),Jf=ni("VINNIE","YOU","MOCHI"),di=At({who:Jf,text:gt,"hop?":It}),Ou=At({label:gt,trust:It,"set?":nn(gt),reply:Kt(di),"preferIfProfile?":gt}),Jw=At({version:Xi,trust:At({start:It,max:It,closeMin:It,display:gt}),speakers:At({VINNIE:At({chip:an}),YOU:At({chip:an})}),days:At({maxDays:It,nextDayCard:gt,forcedOnDay:It}),memoryKeys:Kt(gt),beats:Kt(At({id:gt,days:Kt(It,1),line:Kt(di,1),"lineAgain?":Kt(di),choices:Kt(Ou,1),autoPick:It}),1),close:At({pass:Kt(di,1),fail:Kt(di,1),forced:Kt(di,1),toast:gt}),consent:At({ask:Kt(di,1),askAgain:Kt(di),choices:Kt(Ou,2),forced:Kt(di),autoPick:It,confirmToast:gt})}),Qw=At({version:Xi,forcedDay1:gt,tickerFiller:Kt(gt,1),weatherLine:At({sun:gt,rain:gt}),events:Kt(At({id:gt,headline:gt,ticker:gt,where:ya(gt),startHour:It,durationHours:It,visual:ni("pigeons","lanterns","banner","crowd","closedTape","none"),effects:At({social:It,curiosity:It,energy:It}),reaction:gt,diaryLine:gt}),12),mirror:At({lexicon:nn(gt),pool:Kt(gt),keep:Kt(gt),twists:Kt(gt)})}),Gs=ni(1,2,3,4),tS=At({version:Xi,units:At({size:Ie(2)}),centre:Ie(2),ground:At({color:an}),surfaces:Kt(At({id:gt,kind:gt,color:an,tier:Gs,d0:It})),buildings:Kt(At({id:gt,tier:Gs,d0:It,box:Ie(6),color:an}),1),props:Kt(At({id:gt,kind:gt,at:Ie(2),tier:Gs,d0:It})),landmarks:Kt(At({id:gt,key:gt,name:gt,at:gt,sign:ya(gt),tier:Gs,lore:gt,kind:gt})),nav:At({cell:It,walkRects:Kt(Ie(4)),blocked:Kt(Ie(4)),rightHandOffset:It,doors:nn(Ie(2))}),city:At({hash:gt,grid:Ie(2),lotPitch:It,lotOffset:It,lotSize:It,treeChance:It}),fog:At({cells:It,cellSize:It,color:an,band:It,popBand:It}),placements:Kt(At({who:gt,a:Ie(2),tierMin:Gs})),extrasSpawn:At({homes:Kt(Ie(2))})}),Bu=At({from:kc,to:kc,place:gt,anim:gt}),eS=At({version:Xi,start:At({day:It,time:kc}),clock:At({dayRealSeconds:It,speeds:Kt(It,1),simStep:It,seed:It}),vinnie:At({dayOff:At({days:Kt(It),schedule:Kt(Bu,1)}),work:At({schedule:Kt(Bu,1)}),walkSpeedU:It,lines:nn(Kt(gt))}),extras:Kt(At({id:gt,home:Ie(2),body:Kf,attach:Kt(Zf),plan:Kt(Kt(gt,2))})),needs:At({start:nn(Ie(2)),rates:nn(nn(It))})}),nS=(i,t,e)=>{(!Array.isArray(i)||typeof i[0]!="string")&&rn(e,t,"expected [verb, ...args]",i)},iS=At({version:Xi,worldScript:Kt(At({id:gt,trigger:At({on:gt}),actions:Kt(nS)}),1),contact:At({steps:Kt(At({t:It,do:gt})),onSayHi:Kt(At({t:It,do:gt})),onNotNow:Kt(At({t:It,do:gt}))}),cafe:At({holdSim:Pc,marks:nn(Ie(2)),shots:Kt(At({id:gt,ref:ya(gt),t:Ie(2),camera:At({shot:gt}),"line?":At({who:Jf,text:gt,at:It})}),8),speakerChips:nn(an)})}),sS=At({version:Xi,centre:Ie(2),gfx:At({hdFromTier:It,hdDelay:It,overlayFade:Ie(2),overlayFadeSeconds:It,fieldGlow:At({"16bit":It,hd:It})}),walk:At({metersPerMapPx:It,manualKmPerSecond:It,autoKmPerSecond:It,autoStartDelay:It,card:At({mapSize:Ie(2),start:Ie(2)}),autoRoute:Kt(Ie(2))}),tiers:Kt(At({n:Gs,name:gt,badge:gt,kmAt:It,radius:Ie(2),radiusSeconds:It,shot:At({target:Ie(2),dist:It,distSeconds:It,pitch:It}),caption:gt,captionAt:It,captionFor:It,gfx:ni("16bit","hd"),routineAllow:Kt(gt)}),4),hud:nn(jf)}),Qf={cast:Kw,copy:Zw,dialogue:Jw,events:Qw,map:tS,routine:eS,setpieces:iS,tiers:sS},rS=Object.keys(Qf);function oS(i,t){const e=[];return Qf[i](t,i,e),e}function aS(i){const t=rS.flatMap(r=>oS(r,i[r]));if(t.length)return t;const e=i.cast,n=new Set(e.cast.map(r=>r.id)),s=i.copy;for(const r of[...s.S11.order,...s.S12.lineup])n.has(r)||t.push(`copy: unknown cast id "${r}"`);return t}const Zn={cast:CM,copy:GM,dialogue:tw,events:dw,map:Aw,routine:Iw,setpieces:Bw,tiers:$w},lS=()=>aS(Zn),cS=1500;let tp;const hS=new Promise(i=>tp=i);async function dS(){const i=dp(location.search),t=new up(fp());i.reset&&t.reset();const e=t.data.settings;e.auto=i.auto??(i.test?!1:e.auto),i.speed!==null&&(e.speed=i.speed),bp();const n=new Yy,s=new jy,r=new Ky,o=new pp,a=new gp(new mp(i.test)),l=lS();l.length&&(console.error("data invalid",l),r.show(`data invalid: ${l[0]}`,30));const c=["joe","vinnie","mochi"].map(f=>Zn.cast.cast.find(_=>_.id===f).sprite.body);await Promise.race([Promise.all([document.fonts.load('52px "Bagel Fat One"'),document.fonts.load("36px VT323"),document.fonts.load("36px VT323","É"),...c.map(f=>{const _=new Image;return _.src=Jr(f),_.decode().catch(()=>{})})]),new Promise(f=>setTimeout(f,cS))]);const h=new Fp(bM,document.getElementById("stage"),f=>{const _=Zs(f);n.set(_.field,_.dots),t.setScreen(f),o.emit("screen",f)}),u={flow:h,store:t,data:Zn,copy:Zn.copy,params:i,bus:o,loop:a,captions:s,toast:r,field:n};h.bind(u);const d=f=>{var E;return(f==="S8"?Zn.copy.S8.continueEnd:(E=Zn.copy[f])==null?void 0:E.continue)??Zn.copy.ui.continue},p=new Dp(h,t,s,d),x=[i.screen,t.data.screen].find(Gu)??"S0";h.start(x),i.t!==null&&h.seek(i.t);const S=Vy({flow:h,loop:a,store:t,autoplay:p,ready:hS});window.__peepls=S;const m=i.clean?null:$y(S,t,Zn.copy.debug.resetAsk,Zn.cast.cast.map(f=>f.id),Zn.events.events.map(f=>f.id));a.add(f=>{const _=t.data.settings.speed===.25?f*.25:f;h.update(_),s.update(_),p.update(_),r.update(_),n.update(a.uiT,t.data.settings.reduceMotion||matchMedia("(prefers-reduced-motion: reduce)").matches),m==null||m.update()}),addEventListener("keydown",f=>{var _,E;(E=(_=f.target)==null?void 0:_.closest)!=null&&E.call(_,"#debug, button, select")||(f.key===" "||f.key==="Enter")&&(f.preventDefault(),p.tap())||h.input({type:"key",key:f.key})}),addEventListener("pointerdown",f=>{var w,k;if((k=(w=f.target)==null?void 0:w.closest)!=null&&k.call(w,"#debug, button, .slider, #continue"))return;const[_,E]=Hr(f.clientX,f.clientY);h.input({type:"tap",x:_,y:E})}),a.step(0),a.start(),tp()}dS();
