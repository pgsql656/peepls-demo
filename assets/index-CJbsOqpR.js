var dp=Object.defineProperty;var up=(i,t,e)=>t in i?dp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var D=(i,t,e)=>up(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function fp(i){const t=new URLSearchParams(i),e=r=>t.has(r)&&t.get(r)!=="0",n=r=>{const o=t.get(r);return o===null||o===""||Number.isNaN(Number(o))?null:Number(o)},s=e("test");return{clean:e("clean"),debug:e("debug"),auto:t.has("auto")?t.get("auto")!=="0":null,test:s,seed:n("seed")??57,screen:t.get("screen"),t:n("t"),reset:e("reset"),speed:n("speed"),tod:t.get("tod"),gfx:t.get("gfx"),outline:t.get("outline"),cast:t.get("cast"),rig:t.get("rig"),lowgpu:e("lowgpu"),free:e("free"),campaign:e("campaign"),portrait:e("portrait")}}const Aa="peepls.demo.v1",Gu=()=>({auto:!0,reduceMotion:!1,speed:1,outline:"ink",gfx:"auto",tod:"auto",debugCollapsed:!1}),Ta=()=>({screen:"S0",settings:Gu(),progress:{}});class pp{constructor(t){D(this,"data");this.kv=t,this.data=this.load()}load(){var t;try{const e=(t=this.kv)==null?void 0:t.getItem(Aa);if(!e)return Ta();const n=JSON.parse(e);return{screen:typeof n.screen=="string"?n.screen:"S0",settings:{...Gu(),...n.settings??{}},progress:n.progress??{}}}catch{return Ta()}}save(){var t;try{(t=this.kv)==null||t.setItem(Aa,JSON.stringify(this.data))}catch{}}setScreen(t){this.data.screen=t,this.save()}setSetting(t,e){this.data.settings[t]=e,this.save()}reset(){var t;try{(t=this.kv)==null||t.removeItem(Aa)}catch{}this.data=Ta()}}function mp(){try{return window.localStorage}catch{return null}}class gp{constructor(){D(this,"handlers",new Map)}on(t,e){let n=this.handlers.get(t);return n||this.handlers.set(t,n=new Set),n.add(e),()=>n.delete(e)}emit(t,e){for(const n of this.handlers.get(t)??[])n(e)}}const Eh=1/60;class xp{constructor(t){D(this,"mode");D(this,"last",-1);this.mode=t?"manual":"real"}realDt(t){const e=this.last<0?0:(t-this.last)/1e3;return this.last=t,Math.min(Math.max(e,0),.1)}}class vp{constructor(t){D(this,"uiT",0);D(this,"paused",!1);D(this,"fps",0);D(this,"drawFrame",!0);D(this,"steps",[]);D(this,"lastFrameMs",0);this.clock=t}add(t){this.steps.push(t)}start(){if(this.clock.mode==="manual")return;const t=e=>{this.measureFps(e),this.step(this.clock.realDt(e)),requestAnimationFrame(t)};requestAnimationFrame(t)}advance(t,e=!0){const n=Math.round(t/1e3/Eh);for(let s=0;s<n;s++)this.drawFrame=e&&s===n-1,this.step(Eh);this.drawFrame=!0}step(t){this.uiT+=t;for(const e of this.steps)e(t)}measureFps(t){if(this.lastFrameMs){const e=1e3/Math.max(1,t-this.lastFrameMs);this.fps=this.fps?this.fps*.95+e*.05:e}this.lastFrameMs=t}}function V(i,t={},...e){const n=document.createElement(i);Wu(n,t);for(const s of e)s&&n.append(s);return n}const _p="http://www.w3.org/2000/svg";function re(i,t={},...e){const n=document.createElementNS(_p,i);Wu(n,t);for(const s of e)s&&n.append(s);return n}function Wu(i,t){for(const[e,n]of Object.entries(t))n===void 0||n===!1||i.setAttribute(e,n===!0?"":String(n))}function Vt(i,t){for(const[e,n]of Object.entries(t))n!==void 0&&(e.startsWith("--")?i.style.setProperty(e,String(n)):i.style[e]=typeof n=="number"?`${n}px`:n)}const Ms=i=>document.querySelector(`#${i} .sbox`)??document.getElementById(i);function Nc(i){const t=document.getElementById("sr-live");t&&i&&t.textContent!==i&&(t.textContent=i)}const yp=(i,t,e)=>Math.min(e,Math.max(t,i)),Vi=i=>yp(i,0,1),ie={pop:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,draw:i=>i<.5?4*i**3:1-(-2*i+2)**3/2,enter:i=>1-(1-i)**3,fall:i=>i*i},ae=(i,t,e,n)=>n(Vi((i-t)/e)),nr=(i,t,e,n=.4)=>i>=t&&i<=t+n?Math.sin(Math.PI*(i-t)/n)*e:0,Fl=(i,t,e)=>i<t?0:e*Math.exp(-2.4*(i-t))*Math.sin(7*(i-t)),bp=(i,t=0)=>1+.012*Math.sin(2.6*i+t),Le=(i,t,e,n)=>n?[1,ae(i,t,.2,ie.enter)]:[ae(i,t,e,ie.pop),i>=t?1:0],Mp=i=>[12*i%48,6*i%48],Sn=typeof window<"u"&&innerHeight/innerWidth>1.25,_i=Sn?1080:1920,yi=Sn?1920:1080;let gs=1;function Ah(){gs=Math.min(innerWidth/_i,innerHeight/yi);const i=`translate(-50%, -50%) scale(${gs})`;for(const t of document.querySelectorAll(".sbox"))t.style.transform=i}function wp(){document.documentElement.classList.toggle("portrait",Sn),Ah(),addEventListener("resize",Ah)}const fa=()=>gs;function Xr(i,t){return[(i-innerWidth/2)/gs+_i/2,(t-innerHeight/2)/gs+yi/2]}function Sp(i,t){return[(i-_i/2)*gs+innerWidth/2,(t-yi/2)*gs+innerHeight/2]}const ze=(i,t)=>Sn?t:i;function ws(i,t,e,n,s=540,r=960){Sn&&(i.style.transformOrigin="0 0",i.style.transform=`translate(${s-t*n}px, ${r-e*n}px) scale(${n})`)}function Pe(i,t){if(!Sn)return i;i.dataset.pin="";for(const[e,n]of Object.entries(t))i.style[e]=typeof n=="number"?`${n}px`:n;return i}const Uc=[960,540,1.8,540,893],Th=.8,Ch=.08,Ep=.48,Rh=ze(-2100,-2300),Ap=ze(1960,1360),Ca=.25;class Xu{constructor(t,e,n){D(this,"t",0);D(this,"swapped",!1);D(this,"pink");D(this,"ink");D(this,"layer",document.getElementById("wipe"));this.reduced=t,this.onCovered=e,this.onDone=n;const s=Ms("wipe"),r=(o,a)=>V("div",{class:`wipe-band ${o}`,style:`position:absolute;top:0;width:2100px;height:${yi}px;background:var(--${a})`});this.pink=r("wipe-pink","pink"),this.ink=r("wipe-ink","ink"),t&&(this.pink.style.display="none"),s.append(this.pink,this.ink),this.layer.classList.add("covering"),this.update(0)}update(t){this.t+=t;const e=this.t,n=this.reduced?Ca/2:Ep,s=this.reduced?Ca:Th+Ch;if(this.reduced)Vt(this.ink,{left:0,width:_i,opacity:String(1-Math.abs(e/(Ca/2)-1))});else{const r=o=>Rh+(Ap-Rh)*ie.draw(Vi((e-o)/Th));Vt(this.pink,{transform:`translateX(${r(0)}px) skewX(-8deg)`}),Vt(this.ink,{transform:`translateX(${r(Ch)}px) skewX(-8deg)`})}!this.swapped&&e>=n&&(this.swapped=!0,this.onCovered()),e>=s&&(this.pink.remove(),this.ink.remove(),this.layer.classList.remove("covering"),this.onDone())}}const Tp=.3,Cp=.25;class Rp{constructor(t,e,n){D(this,"t",0);D(this,"finished",!1);this.old=t,this.reduced=e,this.onDone=n,this.update(0)}update(t){if(this.finished)return;this.t+=t;const e=this.reduced?Cp:Tp;this.old&&(this.old.style.opacity=String(1-ae(this.t,0,e,ie.enter))),this.t>=e&&(this.finished=!0,this.onDone())}}const Ph=.9,kh=.25,Fh=ze([1380,930],[540,1080]),Pp=ze(620,760);function Lh(i){if(!i)return null;const t=i.getBoundingClientRect(),[e,n]=Xr(t.left,t.top),[s,r]=Xr(t.right,t.bottom);return{x:e,y:n,w:s-e,h:r-n}}class kp{constructor(t,e,n,s){D(this,"t",0);D(this,"finished",!1);D(this,"from");D(this,"radius");D(this,"bezel");D(this,"sprite",null);this.next=e,this.reduced=n,this.onDone=s;const r=t==null?void 0:t.querySelector('[data-morph="screen"]');this.from=Lh(r)??{x:716,y:66,w:488,h:948},this.radius=56*(this.from.w/488),this.bezel=(t==null?void 0:t.querySelector('[data-morph="bezel"]'))??null;const o=t==null?void 0:t.querySelector('[data-morph="vinnie"]'),a=e.querySelector('[data-morph="vinnie"]'),l=Lh(o);if(!n&&o&&l){const c=V("img",{src:o.src,alt:"",style:"position:absolute;display:block"});Ms("wipe").append(c);const h=[o,a].filter(u=>!!u);for(const u of h)u.style.visibility="hidden";this.sprite={el:c,from:l,hidden:h}}this.update(0)}update(t){if(this.finished)return;if(this.t+=t,this.reduced){this.next.style.opacity=String(ae(this.t,0,kh,ie.enter)),this.t>=kh&&this.finish();return}const e=ae(this.t,0,Ph,ie.draw),n=this.from,s=n.x*(1-e),r=n.y*(1-e),o=n.w+(_i-n.w)*e,a=n.h+(yi-n.h)*e,l=this.radius*(1-e);if(Vt(this.next,{clipPath:`inset(${r}px ${_i-s-o}px ${yi-r-a}px ${s}px round ${l}px)`,opacity:String(Vi(e*2.5))}),this.bezel&&(this.bezel.style.opacity=String(1-Vi(e*3))),this.sprite){const c=this.sprite.from,h=c.h+(Pp-c.h)*e,u=h*(c.w/c.h),d=c.x+c.w/2+(Fh[0]-(c.x+c.w/2))*e,p=c.y+c.h+(Fh[1]-(c.y+c.h))*e;Vt(this.sprite.el,{left:d-u/2,top:p-h,width:u,height:h})}this.t>=Ph&&this.finish()}finish(){if(this.finished=!0,Vt(this.next,{clipPath:"none",opacity:"1"}),this.sprite){this.sprite.el.remove();for(const t of this.sprite.hidden)t.style.visibility=""}this.onDone()}}const pr=1,Ih=.7,Fp=2300,Dh=ze([1e3,520],[540,866]),Nh=.25;class Lp{constructor(t,e,n){D(this,"t",0);D(this,"swapped",!1);D(this,"disc");D(this,"layer",document.getElementById("wipe"));this.reduced=t,this.onCovered=e,this.onDone=n,this.disc=V("div",{class:"iris-white",style:"position:absolute;background:var(--white)"}),Ms("wipe").append(this.disc),this.layer.classList.add("covering"),this.update(0)}update(t){this.t+=t;const e=this.t,n=this.reduced?Nh/2:pr,s=this.reduced?Nh:pr+Ih;if(this.reduced)Vt(this.disc,{left:0,top:0,width:_i,height:yi,opacity:String(1-Math.abs(e/n-1))});else if(e<pr){const r=Fp*ae(e,0,pr,ie.draw);Vt(this.disc,{left:Dh[0]-r,top:Dh[1]-r,width:r*2,height:r*2,borderRadius:"50%",opacity:"1"})}else Vt(this.disc,{left:0,top:0,width:_i,height:yi,borderRadius:"0",opacity:String(1-ae(e,pr,Ih,ie.enter))});!this.swapped&&e>=n&&(this.swapped=!0,this.onCovered()),e>=s&&(this.disc.remove(),this.layer.classList.remove("covering"),this.onDone())}}const ta=[{id:"S0",name:"crowd to title",field:"ink",dots:!1,via:"none",next:"S1",hold:3,caption:"crowd1"},{id:"S1",name:"profile",field:"cyan",dots:!0,via:"wipe",next:"S2",hold:"self",caption:"profile"},{id:"S2",name:"finding",field:"cyan",dots:!0,via:"crossfade",next:"S3",hold:"self",caption:"finding"},{id:"S3",name:"reveal",field:"cyan",dots:!0,via:"crossfade",next:"S4",hold:2.5,caption:"reveal"},{id:"S4",name:"quiet room",field:"cream",dots:!1,via:"morph",next:"S5",hold:"self",caption:"room1"},{id:"S5",name:"consent",field:"cream",dots:!1,via:"none",next:"S6",hold:"self",caption:null},{id:"S6",name:"body ships",field:"pink",dots:!0,via:"wipe",next:"S7",hold:1.5,caption:"ship"},{id:"S7",name:"keychain handshake",field:"pink",dots:!0,via:"none",next:"S8",hold:"self",caption:"tap"},{id:"S8",name:"slow-tv world",field:"night",dots:!1,via:"iris",next:"S11",hold:3,caption:"tier1"},{id:"S11",name:"neighbours roster",field:"yellow",dots:!0,via:"wipe",next:"S12",hold:4,caption:"cast1"},{id:"S12",name:"end card",field:"pink",dots:!0,via:"wipe",next:null,hold:null,caption:null},{id:"S99",name:"cast viewer",field:"cream",dots:!1,via:"crossfade",next:null,hold:null,caption:null}],ps=i=>ta.find(t=>t.id===i),$u=i=>ta.some(t=>t.id===i);class Ip{constructor(t,e,n){D(this,"current",null);D(this,"t",0);D(this,"transition",null);D(this,"el",null);D(this,"leaving",null);D(this,"ctx");this.factory=t,this.root=e,this.onSwap=n}bind(t){this.ctx=t}get id(){var t;return((t=this.current)==null?void 0:t.id)??null}get busy(){return this.transition!==null}get reduced(){return this.ctx.store.data.settings.reduceMotion||matchMedia("(prefers-reduced-motion: reduce)").matches}start(t){this.swap(t)}go(t,e="wipe"){return this.busy?Promise.resolve():e==="none"?(this.swap(t),Promise.resolve()):new Promise(n=>{var o;(o=this.current)==null||o.exit();const s=()=>{this.transition=null,n()};if(e==="crossfade"||e==="morph"){const a=this.detach();this.mountNew(t,e==="crossfade"?"below":"above",(a==null?void 0:a.screen.id)??null);const l=()=>{a==null||a.screen.unmount(),a==null||a.el.remove(),this.leaving=null,this.onSwap(t),s()};this.transition=e==="crossfade"?new Rp((a==null?void 0:a.el)??null,this.reduced,l):new kp((a==null?void 0:a.el)??null,this.el,this.reduced,l);return}const r=e==="iris"?Lp:Xu;this.transition=new r(this.reduced,()=>this.swap(t),s)})}next(){const t=this.id?ps(this.id).next:null;t&&this.go(t,ps(t).via)}replay(){this.id&&!this.busy&&this.swap(this.id)}seek(t){var e,n;this.t=t,(n=(e=this.current)==null?void 0:e.seek)==null||n.call(e,t)}update(t){var e;this.leaving&&(this.leaving.t+=t,this.leaving.screen.update(t,this.leaving.t)),(e=this.transition)==null||e.update(t),this.current&&(this.t+=t,this.current.update(t,this.t))}input(t){var e;this.busy||(e=this.current)==null||e.onInput(t)}swap(t){const e=this.detach();e==null||e.screen.unmount(),e==null||e.el.remove(),this.leaving=null,this.mountNew(t,"above",(e==null?void 0:e.screen.id)??null),this.onSwap(t)}detach(){return!this.current||!this.el?null:(this.leaving={screen:this.current,el:this.el,t:this.t},this.current=null,this.el=null,this.leaving)}mountNew(t,e,n){this.ctx.captions.clear();const s=V("div",{class:`screen screen-${t}`,style:`position:absolute;left:0;top:0;width:${_i}px;height:${yi}px`}),r=Sn?s.appendChild(V("div",{class:"scene",style:"position:absolute;left:0;top:0;width:1920px;height:1080px"})):s;e==="below"?this.root.prepend(s):this.root.append(s);const o=this.factory(t);if(this.current=o,this.el=s,this.t=0,o.mount(this.ctx,r),Sn)for(const a of r.querySelectorAll("[data-pin]"))s.append(a);o.enter(n)}}const Dp={44:"12px 26px 14px",40:"10px 24px 12px",32:"8px 20px 10px",30:"6px 14px 8px",28:"6px 14px 8px"};function dn(i,t={}){const e=t.size??44,n=V(t.tag??"div",{class:"pill pixel",style:["display:inline-flex;align-items:center;gap:14px;border-radius:999px;background:var(--ink);white-space:nowrap",`font-size:${e}px;padding:${Dp[e]};color:var(--${t.color??"white"})`].join(";")});return n.append(...i),n}function xs(i,t,e="currentColor"){const n=re("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",style:"display:block;flex:none"}),s={fill:"none",stroke:e,"stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"};switch(i){case"check":n.append(re("path",{d:"M4 12.5l5 5L20 6",...s}));break;case"arrow":n.append(re("path",{d:"M3 12h17M14 5l7 7-7 7",...s}));break;case"caret":n.append(re("rect",{x:7,y:3,width:10,height:18,fill:e}));break;case"down":n.append(re("path",{d:"M4 7h16L12 19z",fill:e}));break;case"play":n.append(re("path",{d:"M7 4l13 8-13 8z",fill:e}));break;case"pause":n.append(re("rect",{x:5,y:4,width:5,height:16,fill:e}),re("rect",{x:14,y:4,width:5,height:16,fill:e}));break;case"dot":n.append(re("circle",{cx:12,cy:12,r:8,fill:e}));break}return n}class Np{constructor(t,e){D(this,"el");D(this,"ring");D(this,"text");this.text=V("span",{},t);const n=dn([this.text,xs("play",22,"var(--white)")],{size:32,tag:"button"});this.ring=re("rect",{x:1,y:1,style:"width:calc(100% - 2px);height:calc(100% - 2px)",rx:999,pathLength:1,fill:"none",stroke:"var(--yellow)","stroke-width":2,"stroke-dasharray":"1 1","stroke-dashoffset":1});const s=re("svg",{style:"position:absolute;inset:-5px;width:calc(100% + 10px);height:calc(100% + 10px);overflow:visible;pointer-events:none"},this.ring);this.el=V("div",{class:"continue",style:"position:absolute;right:50px;bottom:36px;display:none"},n,s),n.addEventListener("click",r=>{r.stopPropagation(),e()}),Ms("continue").append(this.el)}setLabel(t){this.text.textContent=t}update(t,e,n,s=!1){s?Vt(this.el,{display:t?"block":"none",top:ze(40,78),bottom:"auto"}):Vt(this.el,{display:t?"block":"none",top:"auto",bottom:n?140:36}),this.ring.style.display=e===null?"none":"inline",e!==null&&this.ring.setAttribute("stroke-dashoffset",String(1-e))}}class Up{constructor(t,e){D(this,"el");D(this,"label");D(this,"glyph");D(this,"shownOn",null);this.text=t,this.label=V("span",{}),this.glyph=V("span",{style:"display:inline-flex"}),this.el=V("button",{class:"pill pixel auto-pill",style:"position:absolute;left:50px;bottom:36px;display:none;align-items:center;gap:12px;border-radius:999px;background:var(--yellow);border:4px solid var(--ink);color:var(--ink);font-size:30px;padding:6px 18px 8px;white-space:nowrap;pointer-events:auto"}),this.el.append(this.glyph,this.label),this.el.addEventListener("click",n=>{n.stopPropagation(),e()}),Ms("continue").append(this.el)}update(t,e,n){Vt(this.el,{display:t?"inline-flex":"none",bottom:n?140:36}),e!==this.shownOn&&(this.shownOn=e,this.glyph.replaceChildren(xs(e?"pause":"play",22,"var(--ink)")),this.label.textContent=e?this.text.pause:`${this.text.off} · ${this.text.resume}`,this.el.setAttribute("aria-pressed",String(!e)))}}class Op{constructor(t,e,n,s,r=null){D(this,"elapsed",0);D(this,"pill");D(this,"labelFor",null);D(this,"control",null);this.flow=t,this.store=e,this.captions=n,this.label=s,this.pill=new Np("",()=>this.tap()),r&&(this.control=new Up(r,()=>this.store.data.settings.auto=!this.on))}get on(){return this.store.data.settings.auto}tap(){return this.canContinue()?(this.flow.next(),!0):!1}update(t){var r;(r=this.control)==null||r.update(!!this.flow.current&&ps(this.flow.current.id).next!==null,this.on,this.captions.visible);const e=this.flow.current;if(!e||this.flow.busy||!e.landed()){this.elapsed=0,this.pill.update(!1,null,this.captions.visible,!!(e!=null&&e.pillTop));return}this.labelFor!==e.id&&(this.labelFor=e.id,this.pill.setLabel(this.label(e.id)));const{hold:n}=ps(e.id),s=this.canContinue()&&typeof n=="number";if(s&&this.on&&(this.elapsed+=t,this.elapsed>=n)){this.elapsed=0,this.flow.next();return}this.pill.update(s,s&&this.on?this.elapsed/n:null,this.captions.visible,!!e.pillTop)}canContinue(){const t=this.flow.current;if(!t||this.flow.busy||!t.landed())return!1;const e=ps(t.id);return e.next!==null&&e.hold!=="self"}}const Tt={},In={rigOk:!0,chars:0,lod:[0,0,0],sub:null};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="184",Bp=0,Uh=1,zp=2,Yo=1,Yu=2,Nr=3,Gi=0,Je=1,Gn=2,xi=0,Js=1,Oh=2,Bh=3,zh=4,Hp=5,ls=100,Vp=101,Gp=102,Wp=103,Xp=104,$p=200,Yp=201,qp=202,jp=203,Ll=204,Il=205,Zp=206,Kp=207,Jp=208,Qp=209,t0=210,e0=211,n0=212,i0=213,s0=214,Dl=0,Nl=1,Ul=2,ir=3,Ol=4,Bl=5,zl=6,Hl=7,qu=0,r0=1,o0=2,Xn=0,ju=1,Zu=2,Ku=3,Ju=4,Qu=5,tf=6,ef=7,Hh="attached",a0="detached",nf=300,vs=301,sr=302,Ra=303,Pa=304,pa=306,Vl=1e3,gi=1001,Gl=1002,$e=1003,l0=1004,oo=1005,Ke=1006,ka=1007,ds=1008,wn=1009,sf=1010,rf=1011,$r=1012,Bc=1013,oi=1014,Dn=1015,bi=1016,zc=1017,Hc=1018,Yr=1020,of=35902,af=35899,lf=1021,cf=1022,Nn=1023,Mi=1026,us=1027,ma=1028,Vc=1029,_s=1030,Gc=1031,Wc=1033,qo=33776,jo=33777,Zo=33778,Ko=33779,Wl=35840,Xl=35841,$l=35842,Yl=35843,ql=36196,jl=37492,Zl=37496,Kl=37488,Jl=37489,ea=37490,Ql=37491,tc=37808,ec=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,lc=37816,cc=37817,hc=37818,dc=37819,uc=37820,fc=37821,pc=36492,mc=36494,gc=36495,xc=36283,vc=36284,na=36285,_c=36286,c0=3200,h0=3201,yc=0,d0=1,mi="",Ze="srgb",ia="srgb-linear",sa="linear",we="srgb",ks=7680,Vh=519,u0=512,f0=513,p0=514,Xc=515,m0=516,g0=517,$c=518,x0=519,Gh=35044,Wh="300 es",ii=2e3,qr=2001;function v0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _0(){const i=ra("canvas");return i.style.display="block",i}const Xh={};function $h(...i){const t="THREE."+i.shift();console.log(t,...i)}function hf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=hf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function pe(...i){i=hf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bc(...i){const t=i.join(" ");t in Xh||(Xh[t]=!0,jt(...i))}function y0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const b0={[Dl]:Nl,[Ul]:zl,[Ol]:Hl,[ir]:Bl,[Nl]:Dl,[zl]:Ul,[Hl]:Ol,[Bl]:ir};class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,Mc=180/Math.PI;function Es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function M0(i,t){return(i%t+t)%t}function La(i,t,e){return(1-e)*i+e*t}function mr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ph=class ph{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;let St=ph;class Xi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3];if(u!==S||l!==d||c!==p||h!==x){let m=l*d+c*p+h*x+u*S;m<0&&(d=-d,p=-p,x=-x,S=-S,m=-m);let f=1-a;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);f=Math.sin(f*y)/M,a=Math.sin(a*y)/M,l=l*f+d*a,c=c*f+p*a,h=h*f+x*a,u=u*f+S*a}else{l=l*f+d*a,c=c*f+p*a,h=h*f+x*a,u=u*f+S*a;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*p-c*d,t[e+1]=l*x+h*d+c*u-a*p,t[e+2]=c*x+h*p+a*d-l*u,t[e+3]=h*x-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mh=class mh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;let N=mh;const Ia=new N,Yh=new Xi,gh=class gh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],S=s[0],m=s[3],f=s[6],y=s[1],M=s[4],b=s[7],P=s[2],v=s[5],E=s[8];return r[0]=o*S+a*y+l*P,r[3]=o*m+a*M+l*v,r[6]=o*f+a*b+l*E,r[1]=c*S+h*y+u*P,r[4]=c*m+h*M+u*v,r[7]=c*f+h*b+u*E,r[2]=d*S+p*y+x*P,r[5]=d*m+p*M+x*v,r[8]=d*f+p*b+x*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,x=e*u+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=u*S,t[1]=(s*c-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=d*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;let se=gh;const Da=new se,qh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w0(){const i={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ia]:{primaries:t,whitePoint:n,transfer:sa,toXYZ:qh,fromXYZ:jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:we,toXYZ:qh,fromXYZ:jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}const me=w0();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fs;class S0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=ra("canvas")),Fs.width=t.width,Fs.height=t.height;const s=Fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ra("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let E0=0;class Yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Na(s[o].image)):r.push(Na(s[o]))}else r=Na(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?S0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let A0=0;const Ua=new N;class on extends Ss{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=gi,s=gi,r=Ke,o=ds,a=Nn,l=wn,c=on.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Es(),this.name="",this.source=new Yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vl:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vl:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=nf;on.DEFAULT_ANISOTROPY=1;const xh=class xh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,b=(p+1)/2,P=(f+1)/2,v=(h+d)/4,E=(u+S)/4,g=(x+m)/4;return M>b&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=v/n,r=E/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=v/s,r=g/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=E/r,s=g/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-x)*(m-x)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(u-S)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xh.prototype.isVector4=!0;let Se=xh;class T0 extends Ss{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new on(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends T0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class df extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class C0 extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ua=class ua{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,x,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ua().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,x=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=d-S*c,e[9]=-a*l,e[2]=S-d*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,x=c*h,S=c*u;e[0]=d+S*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=S+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,x=c*h,S=c*u;e[0]=d-S*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=S-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,x=a*h,S=a*u;e[0]=l*h,e[4]=x*c-p,e[8]=d*c+S,e[1]=l*u,e[5]=S*c+d,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*h,e[4]=S-d*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+x,e[10]=d-S*u}else if(t.order==="XZY"){const d=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+S,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=S*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,P0)}lookAt(t,e,n){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ci.crossVectors(n,yn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ci.crossVectors(n,yn)),Ci.normalize(),ao.crossVectors(yn,Ci),s[0]=Ci.x,s[4]=ao.x,s[8]=yn.x,s[1]=Ci.y,s[5]=ao.y,s[9]=yn.y,s[2]=Ci.z,s[6]=ao.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],S=n[6],m=n[10],f=n[14],y=n[3],M=n[7],b=n[11],P=n[15],v=s[0],E=s[4],g=s[8],_=s[12],C=s[1],A=s[5],k=s[9],F=s[13],O=s[2],L=s[6],H=s[10],B=s[14],et=s[3],nt=s[7],ht=s[11],pt=s[15];return r[0]=o*v+a*C+l*O+c*et,r[4]=o*E+a*A+l*L+c*nt,r[8]=o*g+a*k+l*H+c*ht,r[12]=o*_+a*F+l*B+c*pt,r[1]=h*v+u*C+d*O+p*et,r[5]=h*E+u*A+d*L+p*nt,r[9]=h*g+u*k+d*H+p*ht,r[13]=h*_+u*F+d*B+p*pt,r[2]=x*v+S*C+m*O+f*et,r[6]=x*E+S*A+m*L+f*nt,r[10]=x*g+S*k+m*H+f*ht,r[14]=x*_+S*F+m*B+f*pt,r[3]=y*v+M*C+b*O+P*et,r[7]=y*E+M*A+b*L+P*nt,r[11]=y*g+M*k+b*H+P*ht,r[15]=y*_+M*F+b*B+P*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],S=t[7],m=t[11],f=t[15],y=l*p-c*d,M=a*p-c*u,b=a*d-l*u,P=o*p-c*h,v=o*d-l*h,E=o*u-a*h;return e*(S*y-m*M+f*b)-n*(x*y-m*P+f*v)+s*(x*M-S*P+f*E)-r*(x*b-S*v+m*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],S=t[13],m=t[14],f=t[15],y=e*a-n*o,M=e*l-s*o,b=e*c-r*o,P=n*l-s*a,v=n*c-r*a,E=s*c-r*l,g=h*S-u*x,_=h*m-d*x,C=h*f-p*x,A=u*m-d*S,k=u*f-p*S,F=d*f-p*m,O=y*F-M*k+b*A+P*C-v*_+E*g;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return t[0]=(a*F-l*k+c*A)*L,t[1]=(s*k-n*F-r*A)*L,t[2]=(S*E-m*v+f*P)*L,t[3]=(d*v-u*E-p*P)*L,t[4]=(l*C-o*F-c*_)*L,t[5]=(e*F-s*C+r*_)*L,t[6]=(m*b-x*E-f*M)*L,t[7]=(h*E-d*b+p*M)*L,t[8]=(o*k-a*C+c*g)*L,t[9]=(n*C-e*k-r*g)*L,t[10]=(x*v-S*b+f*y)*L,t[11]=(u*b-h*v-p*y)*L,t[12]=(a*_-o*A-l*g)*L,t[13]=(e*A-n*_+s*g)*L,t[14]=(S*M-x*P-m*y)*L,t[15]=(h*P-u*M+d*y)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,x=r*u,S=o*h,m=o*u,f=a*u,y=l*c,M=l*h,b=l*u,P=n.x,v=n.y,E=n.z;return s[0]=(1-(S+f))*P,s[1]=(p+b)*P,s[2]=(x-M)*P,s[3]=0,s[4]=(p-b)*v,s[5]=(1-(d+f))*v,s[6]=(m+y)*v,s[7]=0,s[8]=(x+M)*E,s[9]=(m-y)*E,s[10]=(1-(d+S))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ls.set(s[0],s[1],s[2]).length();const a=Ls.set(s[4],s[5],s[6]).length(),l=Ls.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);const c=1/o,h=1/a,u=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ii,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let x,S;if(l)x=r/(o-r),S=o*r/(o-r);else if(a===ii)x=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===qr)x=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,S;if(l)x=1/(o-r),S=o/(o-r);else if(a===ii)x=-2/(o-r),S=-(o+r)/(o-r);else if(a===qr)x=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ua.prototype.isMatrix4=!0;let te=ua;const Ls=new N,On=new te,R0=new N(0,0,0),P0=new N(1,1,1),Ci=new N,ao=new N,yn=new N,Zh=new te,Kh=new Xi;class Wi{constructor(t=0,e=0,n=0,s=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let k0=0;const Jh=new N,Is=new Xi,li=new te,lo=new N,gr=new N,F0=new N,L0=new Xi,Qh=new N(1,0,0),td=new N(0,1,0),ed=new N(0,0,1),nd={type:"added"},I0={type:"removed"},Ds={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Ye extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new N,e=new Wi,n=new Xi,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new se}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(td,t)}rotateZ(t){return this.rotateOnAxis(ed,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(td,t)}translateZ(t){return this.translateOnAxis(ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(gr,lo,this.up):li.lookAt(lo,gr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(li),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nd),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(I0),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nd),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,F0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,L0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ye.DEFAULT_UP=new N(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D0={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},co={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=M0(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=za(o,r,t+1/3),this.g=za(o,r,t),this.b=za(o,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=uf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return me.workingToColorSpace(en.copy(this),t),Math.round(de(en.r*255,0,255))*65536+Math.round(de(en.g*255,0,255))*256+Math.round(de(en.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(en.copy(this),e);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ze){me.workingToColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(co);const n=La(Ri.h,co.h,e),s=La(Ri.s,co.s,e),r=La(Ri.l,co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ee;ee.NAMES=uf;class ga extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Bn=new N,ci=new N,Ha=new N,hi=new N,Ns=new N,Us=new N,id=new N,Va=new N,Ga=new N,Wa=new N,Xa=new Se,$a=new Se,Ya=new Se;class Wn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),ci.subVectors(n,e),Ha.subVectors(t,e);const o=Bn.dot(Bn),a=Bn.dot(ci),l=Bn.dot(Ha),c=ci.dot(ci),h=ci.dot(Ha),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xa.setScalar(0),$a.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xa,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),ci.subVectors(t,e),Bn.cross(ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Bn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ns.subVectors(s,n),Us.subVectors(r,n),Va.subVectors(t,n);const l=Ns.dot(Va),c=Us.dot(Va);if(l<=0&&c<=0)return e.copy(n);Ga.subVectors(t,s);const h=Ns.dot(Ga),u=Us.dot(Ga);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ns,o);Wa.subVectors(t,r);const p=Ns.dot(Wa),x=Us.dot(Wa);if(x>=0&&p<=x)return e.copy(r);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Us,a);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return id.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(id,a);const f=1/(m+S+d);return o=S*f,a=d*f,e.copy(n).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $i{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),uo.subVectors(this.max,xr),Os.subVectors(t.a,xr),Bs.subVectors(t.b,xr),zs.subVectors(t.c,xr),Pi.subVectors(Bs,Os),ki.subVectors(zs,Bs),ji.subVectors(Os,zs);let e=[0,-Pi.z,Pi.y,0,-ki.z,ki.y,0,-ji.z,ji.y,Pi.z,0,-Pi.x,ki.z,0,-ki.x,ji.z,0,-ji.x,-Pi.y,Pi.x,0,-ki.y,ki.x,0,-ji.y,ji.x,0];return!qa(e,Os,Bs,zs,uo)||(e=[1,0,0,0,1,0,0,0,1],!qa(e,Os,Bs,zs,uo))?!1:(fo.crossVectors(Pi,ki),e=[fo.x,fo.y,fo.z],qa(e,Os,Bs,zs,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new N,new N,new N,new N,new N,new N,new N,new N],zn=new N,ho=new $i,Os=new N,Bs=new N,zs=new N,Pi=new N,ki=new N,ji=new N,xr=new N,uo=new N,fo=new N,Zi=new N;function qa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zi.fromArray(i,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Be=new N,po=new St;let N0=0;class ve extends Ss{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class jc extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ff extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}const U0=new $i,vr=new N,ja=new N;class As{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):U0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);const e=vr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(ja)),this.expandByPoint(vr.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let O0=0;const Cn=new te,Za=new Ye,Hs=new N,bn=new $i,_r=new $i,Xe=new N;class He extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(v0(t)?ff:jc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(bn.min,_r.min),bn.expandByPoint(Xe),Xe.addVectors(bn.max,_r.max),bn.expandByPoint(Xe)):(bn.expandByPoint(_r.min),bn.expandByPoint(_r.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xe.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(t,c),Xe.add(Hs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new N,l[g]=new N;const c=new N,h=new N,u=new N,d=new St,p=new St,x=new St,S=new N,m=new N;function f(g,_,C){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,g),p.fromBufferAttribute(r,_),x.fromBufferAttribute(r,C),h.sub(c),u.sub(c),p.sub(d),x.sub(d);const A=1/(p.x*x.y-x.x*p.y);isFinite(A)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(A),a[g].add(S),a[_].add(S),a[C].add(S),l[g].add(m),l[_].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let g=0,_=y.length;g<_;++g){const C=y[g],A=C.start,k=C.count;for(let F=A,O=A+k;F<O;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new N,b=new N,P=new N,v=new N;function E(g){P.fromBufferAttribute(s,g),v.copy(P);const _=a[g];M.copy(_),M.sub(P.multiplyScalar(P.dot(_))).normalize(),b.crossVectors(v,_);const A=b.dot(l[g])<0?-1:1;o.setXYZW(g,M.x,M.y,M.z,A)}for(let g=0,_=y.length;g<_;++g){const C=y[g],A=C.start,k=C.count;for(let F=A,O=A+k;F<O;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new ve(d,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let B0=0;class Qr extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Js,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ui=new N,Ka=new N,mo=new N,Fi=new N,Ja=new N,go=new N,Qa=new N;class Zc{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ka.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(Ka);const r=t.distanceTo(e)*.5,o=-this.direction.dot(mo),a=Fi.dot(this.direction),l=-Fi.dot(mo),c=Fi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){const S=1/h;u*=S,d*=S,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ka).addScaledVector(mo,d),p}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){Ja.subVectors(e,t),go.subVectors(n,t),Qa.crossVectors(Ja,go);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,t);const l=a*this.direction.dot(go.crossVectors(Fi,go));if(l<0)return null;const c=a*this.direction.dot(Ja.cross(Fi));if(c<0||l+c>o)return null;const h=-a*Fi.dot(Qa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class si extends Qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sd=new te,Ki=new Zc,xo=new As,rd=new N,vo=new N,_o=new N,yo=new N,tl=new N,bo=new N,od=new N,Mo=new N;class be extends Ye{constructor(t=new He,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(tl.fromBufferAttribute(u,t),o?bo.addScaledVector(tl,h):bo.addScaledVector(tl.sub(e),h))}e.add(bo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(xo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(xo,rd)===null||Ki.origin.distanceToSquared(rd)>(t.far-t.near)**2))&&(sd.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(sd),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=o[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,P=M;b<P;b+=3){const v=a.getX(b),E=a.getX(b+1),g=a.getX(b+2);s=wo(this,f,t,n,c,h,u,v,E,g),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const y=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);s=wo(this,o,t,n,c,h,u,y,M,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],f=o[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,P=M;b<P;b+=3){const v=b,E=b+1,g=b+2;s=wo(this,f,t,n,c,h,u,v,E,g),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const y=m,M=m+1,b=m+2;s=wo(this,o,t,n,c,h,u,y,M,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function z0(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:i}}function wo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,vo),i.getVertexPosition(l,_o),i.getVertexPosition(c,yo);const h=z0(i,t,e,n,vo,_o,yo,od);if(h){const u=new N;Wn.getBarycoord(od,vo,_o,yo,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,a,l,c,u,new St)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,l,c,u,new St)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Wn.getNormal(vo,_o,yo,d.normal),h.face=d,h.barycoord=u}return h}const yr=new Se,ad=new Se,ld=new Se,H0=new Se,cd=new te,So=new N,el=new As,hd=new te,nl=new Zc;class dd extends be{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new $i),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,So),this.boundingBox.expandByPoint(So)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new As),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,So),this.boundingSphere.expandByPoint(So)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(s),t.ray.intersectsSphere(el)!==!1&&(hd.copy(s).invert(),nl.copy(t.ray).applyMatrix4(hd),!(this.boundingBox!==null&&nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,nl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===a0?this.bindMatrixInverse.copy(this.bindMatrix).invert():jt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ad.fromBufferAttribute(s.attributes.skinIndex,t),ld.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(yr.copy(e),e.set(0,0,0,0)):(yr.set(...e,1),e.set(0,0,0)),yr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=ld.getComponent(r);if(o!==0){const a=ad.getComponent(r);cd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(H0.copy(yr).applyMatrix4(cd),o)}}return e.isVector4&&(e.w=yr.w),e.applyMatrix4(this.bindMatrixInverse)}}class pf extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xa extends on{constructor(t=null,e=1,n=1,s,r,o,a,l,c=$e,h=$e,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ud=new te,V0=new te;class Kc{constructor(t=[],e=[]){this.uuid=Es(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){jt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:V0;ud.multiplyMatrices(a,e[r]),ud.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Kc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new xa(e,t,t,Nn,Dn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(jt("Skeleton: No bone found with UUID:",r),o=new pf),this.bones.push(o),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class oa extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vs=new te,fd=new te,Eo=[],pd=new $i,G0=new te,br=new be,Mr=new As;class ys extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oa(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),pd.copy(t.boundingBox).applyMatrix4(Vs),this.boundingBox.union(pd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Mr.copy(t.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),t.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),fd.multiplyMatrices(n,Vs),br.matrixWorld=fd,br.raycast(t,Eo);for(let o=0,a=Eo.length;o<a;o++){const l=Eo[o];l.instanceId=r,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new oa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(s*this.count),s,this.count,ma,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const il=new N,W0=new N,X0=new se;class os{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=il.subVectors(n,e).cross(W0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||X0.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new As,$0=new St(.5,.5),Ao=new N;class Jc{constructor(t=new os,e=new os,n=new os,s=new os,r=new os,o=new os){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],x=r[8],S=r[9],m=r[10],f=r[11],y=r[12],M=r[13],b=r[14],P=r[15];if(s[0].setComponents(c-o,p-h,f-x,P-y).normalize(),s[1].setComponents(c+o,p+h,f+x,P+y).normalize(),s[2].setComponents(c+a,p+u,f+S,P+M).normalize(),s[3].setComponents(c-a,p-u,f-S,P-M).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,p-d,f-m,P-b).normalize();else if(s[4].setComponents(c-l,p-d,f-m,P-b).normalize(),e===ii)s[5].setComponents(c+l,p+d,f+m,P+b).normalize();else if(e===qr)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);const e=$0.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ao.x=s.normal.x>0?t.max.x:t.min.x,Ao.y=s.normal.y>0?t.max.y:t.min.y,Ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mf extends on{constructor(t=[],e=vs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class to extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rr extends on{constructor(t,e,n=oi,s,r,o,a=$e,l=$e,c,h=Mi,u=1){if(h!==Mi&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Y0 extends rr{constructor(t,e=oi,n=vs,s,r,o=$e,a=$e,l,c=Mi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gf extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class un extends He{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function x(S,m,f,y,M,b,P,v,E,g,_){const C=b/E,A=P/g,k=b/2,F=P/2,O=v/2,L=E+1,H=g+1;let B=0,et=0;const nt=new N;for(let ht=0;ht<H;ht++){const pt=ht*A-F;for(let At=0;At<L;At++){const Kt=At*C-k;nt[S]=Kt*y,nt[m]=pt*M,nt[f]=O,c.push(nt.x,nt.y,nt.z),nt[S]=0,nt[m]=0,nt[f]=v>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(At/E),u.push(1-ht/g),B+=1}}for(let ht=0;ht<g;ht++)for(let pt=0;pt<E;pt++){const At=d+pt+L*ht,Kt=d+pt+L*(ht+1),yt=d+(pt+1)+L*(ht+1),wt=d+(pt+1)+L*ht;l.push(At,Kt,wt),l.push(Kt,yt,wt),et+=6}a.addGroup(p,et,_),p+=et,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qc extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,h=new St;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class dr extends He{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let x=0;const S=[],m=n/2;let f=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2));function y(){const b=new N,P=new N;let v=0;const E=(e-t)/n;for(let g=0;g<=r;g++){const _=[],C=g/r,A=C*(e-t)+t;for(let k=0;k<=s;k++){const F=k/s,O=F*l+a,L=Math.sin(O),H=Math.cos(O);P.x=A*L,P.y=-C*n+m,P.z=A*H,u.push(P.x,P.y,P.z),b.set(L,E,H).normalize(),d.push(b.x,b.y,b.z),p.push(F,1-C),_.push(x++)}S.push(_)}for(let g=0;g<s;g++)for(let _=0;_<r;_++){const C=S[_][g],A=S[_+1][g],k=S[_+1][g+1],F=S[_][g+1];(t>0||_!==0)&&(h.push(C,A,F),v+=3),(e>0||_!==r-1)&&(h.push(A,k,F),v+=3)}c.addGroup(f,v,0),f+=v}function M(b){const P=x,v=new St,E=new N;let g=0;const _=b===!0?t:e,C=b===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*C,0),d.push(0,C,0),p.push(.5,.5),x++;const A=x;for(let k=0;k<=s;k++){const O=k/s*l+a,L=Math.cos(O),H=Math.sin(O);E.x=_*H,E.y=m*C,E.z=_*L,u.push(E.x,E.y,E.z),d.push(0,C,0),v.x=L*.5+.5,v.y=H*.5*C+.5,p.push(v.x,v.y),x++}for(let k=0;k<s;k++){const F=P+k,O=A+k;b===!0?h.push(O,O+1,F):h.push(O+1,O,F),g+=3}c.addGroup(f,g,b===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class va extends dr{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new va(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new St:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,s=[],r=[],o=[],a=new N,l=new te;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(de(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(de(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class th extends ai{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class q0 extends th{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function eh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const md=new N,gd=new N,sl=new eh,rl=new eh,ol=new eh;class xf extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(gd.subVectors(s[0],s[1]).add(s[0]),c=gd);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(md.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=md),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),p),S=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);S<1e-4&&(S=1),x<1e-4&&(x=S),m<1e-4&&(m=S),sl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,S,m),rl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,S,m),ol.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,S,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),rl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ol.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(sl.calc(l),rl.calc(l),ol.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function j0(i,t){const e=1-i;return e*e*t}function Z0(i,t){return 2*(1-i)*i*t}function K0(i,t){return i*i*t}function Vr(i,t,e,n){return j0(i,t)+Z0(i,e)+K0(i,n)}function J0(i,t){const e=1-i;return e*e*e*t}function Q0(i,t){const e=1-i;return 3*e*e*i*t}function tm(i,t){return 3*(1-i)*i*i*t}function em(i,t){return i*i*i*t}function Gr(i,t,e,n,s){return J0(i,t)+Q0(i,e)+tm(i,n)+em(i,s)}class vf extends ai{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nm extends ai{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y),Gr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _f extends ai{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class im extends ai{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends ai{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bf extends ai{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y),Vr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mf extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xd(a,l.x,c.x,h.x,u.x),xd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var aa=Object.freeze({__proto__:null,ArcCurve:q0,CatmullRomCurve3:xf,CubicBezierCurve:vf,CubicBezierCurve3:nm,EllipseCurve:th,LineCurve:_f,LineCurve3:im,QuadraticBezierCurve:yf,QuadraticBezierCurve3:bf,SplineCurve:Mf});class sm extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new aa[s.type]().fromJSON(s))}return this}}class vd extends sm{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _f(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new yf(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new vf(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new th(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nh extends vd{constructor(t){super(t),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new vd().fromJSON(s))}return this}}function rm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=wf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=hm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){const p=i[d],x=i[d+1];p<a&&(a=p),x<l&&(l=x),p>h&&(h=p),x>u&&(u=x)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return jr(r,o,e,a,l,c,0),o}function wf(i,t,e,n,s){let r;if(s===bm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=_d(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=_d(o/n|0,i[o],i[o+1],r);return r&&or(r,r.next)&&(Kr(r),r=r.next),r}function bs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(or(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&mm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?am(i,n,s,r):om(i)){t.push(l.i,i.i,c.i),Kr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=lm(bs(i),t),jr(i,t,e,n,s,r,2)):o===2&&cm(i,t,e,n,s,r):jr(bs(i),t,e,n,s,r,1);break}}}function om(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=p&&Ur(s,a,r,l,o,c,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function am(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,l,c),x=Math.min(h,u,d),S=Math.max(a,l,c),m=Math.max(h,u,d),f=wc(p,x,t,e,n),y=wc(S,m,t,e,n);let M=i.prevZ,b=i.nextZ;for(;M&&M.z>=f&&b&&b.z<=y;){if(M.x>=p&&M.x<=S&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&Ur(a,h,l,u,c,d,M.x,M.y)&&Ie(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=p&&b.x<=S&&b.y>=x&&b.y<=m&&b!==s&&b!==o&&Ur(a,h,l,u,c,d,b.x,b.y)&&Ie(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=S&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&Ur(a,h,l,u,c,d,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=y;){if(b.x>=p&&b.x<=S&&b.y>=x&&b.y<=m&&b!==s&&b!==o&&Ur(a,h,l,u,c,d,b.x,b.y)&&Ie(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function lm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!or(n,s)&&Ef(n,e,e.next,s)&&Zr(n,s)&&Zr(s,n)&&(t.push(n.i,e.i,s.i),Kr(e),Kr(e.next),e=i=s),e=e.next}while(e!==i);return bs(e)}function cm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vm(o,a)){let l=Af(o,a);o=bs(o,o.next),l=bs(l,l.next),jr(o,t,e,n,s,r,0),jr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hm(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=wf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(xm(c))}s.sort(dm);for(let r=0;r<s.length;r++)e=um(s[r],e);return e}function dm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function um(i,t){const e=fm(i,t);if(!e)return t;const n=Af(e,i);return bs(n,n.next),bs(e,e.next)}function fm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(or(i,e))return e;do{if(or(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Zr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&pm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function pm(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function mm(i,t,e,n){let s=i;do s.z===0&&(s.z=wc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gm(s)}function gm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function wc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Sf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ur(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Sf(i,t,e,n,s,r,o,a)}function vm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_m(i,t)&&(Zr(i,t)&&Zr(t,i)&&ym(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||or(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function or(i,t){return i.x===t.x&&i.y===t.y}function Ef(i,t,e,n){const s=Co(Ie(i,t,e)),r=Co(Ie(i,t,n)),o=Co(Ie(e,n,i)),a=Co(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&To(i,e,t)||r===0&&To(i,n,t)||o===0&&To(e,i,n)||a===0&&To(e,t,n))}function To(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Co(i){return i>0?1:i<0?-1:0}function _m(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ef(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function ym(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Af(i,t){const e=Sc(i.i,i.x,i.y),n=Sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _d(i,t,e,n){const s=Sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Mm{static triangulate(t,e,n=2){return rm(t,e,n)}}class Zs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Zs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];yd(t),bd(n,t);let o=t.length;e.forEach(yd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,bd(n,e[l]);const a=Mm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function yd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class _a extends He{constructor(t=new nh([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:wm;let M,b=!1,P,v,E,g;if(f){M=f.getSpacedPoints(h),b=!0,d=!1;const ot=f.isCatmullRomCurve3?f.closed:!1;P=f.computeFrenetFrames(h,ot),v=new N,E=new N,g=new N}d||(m=0,p=0,x=0,S=0);const _=a.extractPoints(c);let C=_.shape;const A=_.holes;if(!Zs.isClockWise(C)){C=C.reverse();for(let ot=0,ut=A.length;ot<ut;ot++){const at=A[ot];Zs.isClockWise(at)&&(A[ot]=at.reverse())}}function F(ot){const at=10000000000000001e-36;let Et=ot[0];for(let xt=1;xt<=ot.length;xt++){const Jt=xt%ot.length,U=ot[Jt],qt=U.x-Et.x,Gt=U.y-Et.y,Qt=qt*qt+Gt*Gt,mt=Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(Et.x),Math.abs(Et.y)),fe=at*mt*mt;if(Qt<=fe){ot.splice(Jt,1),xt--;continue}Et=U}}F(C),A.forEach(F);const O=A.length,L=C;for(let ot=0;ot<O;ot++){const ut=A[ot];C=C.concat(ut)}function H(ot,ut,at){return ut||pe("ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(ut,at)}const B=C.length;function et(ot,ut,at){let Et,xt,Jt;const U=ot.x-ut.x,qt=ot.y-ut.y,Gt=at.x-ot.x,Qt=at.y-ot.y,mt=U*U+qt*qt,fe=U*Qt-qt*Gt;if(Math.abs(fe)>Number.EPSILON){const R=Math.sqrt(mt),w=Math.sqrt(Gt*Gt+Qt*Qt),W=ut.x-qt/R,I=ut.y+U/R,q=at.x-Qt/w,tt=at.y+Gt/w,Q=((q-W)*Qt-(tt-I)*Gt)/(U*Qt-qt*Gt);Et=W+U*Q-ot.x,xt=I+qt*Q-ot.y;const X=Et*Et+xt*xt;if(X<=2)return new St(Et,xt);Jt=Math.sqrt(X/2)}else{let R=!1;U>Number.EPSILON?Gt>Number.EPSILON&&(R=!0):U<-Number.EPSILON?Gt<-Number.EPSILON&&(R=!0):Math.sign(qt)===Math.sign(Qt)&&(R=!0),R?(Et=-qt,xt=U,Jt=Math.sqrt(mt)):(Et=U,xt=qt,Jt=Math.sqrt(mt/2))}return new St(Et/Jt,xt/Jt)}const nt=[];for(let ot=0,ut=L.length,at=ut-1,Et=ot+1;ot<ut;ot++,at++,Et++)at===ut&&(at=0),Et===ut&&(Et=0),nt[ot]=et(L[ot],L[at],L[Et]);const ht=[];let pt,At=nt.concat();for(let ot=0,ut=O;ot<ut;ot++){const at=A[ot];pt=[];for(let Et=0,xt=at.length,Jt=xt-1,U=Et+1;Et<xt;Et++,Jt++,U++)Jt===xt&&(Jt=0),U===xt&&(U=0),pt[Et]=et(at[Et],at[Jt],at[U]);ht.push(pt),At=At.concat(pt)}let Kt;if(m===0)Kt=Zs.triangulateShape(L,A);else{const ot=[],ut=[];for(let at=0;at<m;at++){const Et=at/m,xt=p*Math.cos(Et*Math.PI/2),Jt=x*Math.sin(Et*Math.PI/2)+S;for(let U=0,qt=L.length;U<qt;U++){const Gt=H(L[U],nt[U],Jt);ct(Gt.x,Gt.y,-xt),Et===0&&ot.push(Gt)}for(let U=0,qt=O;U<qt;U++){const Gt=A[U];pt=ht[U];const Qt=[];for(let mt=0,fe=Gt.length;mt<fe;mt++){const R=H(Gt[mt],pt[mt],Jt);ct(R.x,R.y,-xt),Et===0&&Qt.push(R)}Et===0&&ut.push(Qt)}}Kt=Zs.triangulateShape(ot,ut)}const yt=Kt.length,wt=x+S;for(let ot=0;ot<B;ot++){const ut=d?H(C[ot],At[ot],wt):C[ot];b?(E.copy(P.normals[0]).multiplyScalar(ut.x),v.copy(P.binormals[0]).multiplyScalar(ut.y),g.copy(M[0]).add(E).add(v),ct(g.x,g.y,g.z)):ct(ut.x,ut.y,0)}for(let ot=1;ot<=h;ot++)for(let ut=0;ut<B;ut++){const at=d?H(C[ut],At[ut],wt):C[ut];b?(E.copy(P.normals[ot]).multiplyScalar(at.x),v.copy(P.binormals[ot]).multiplyScalar(at.y),g.copy(M[ot]).add(E).add(v),ct(g.x,g.y,g.z)):ct(at.x,at.y,u/h*ot)}for(let ot=m-1;ot>=0;ot--){const ut=ot/m,at=p*Math.cos(ut*Math.PI/2),Et=x*Math.sin(ut*Math.PI/2)+S;for(let xt=0,Jt=L.length;xt<Jt;xt++){const U=H(L[xt],nt[xt],Et);ct(U.x,U.y,u+at)}for(let xt=0,Jt=A.length;xt<Jt;xt++){const U=A[xt];pt=ht[xt];for(let qt=0,Gt=U.length;qt<Gt;qt++){const Qt=H(U[qt],pt[qt],Et);b?ct(Qt.x,Qt.y+M[h-1].y,M[h-1].x+at):ct(Qt.x,Qt.y,u+at)}}}j(),st();function j(){const ot=s.length/3;if(d){let ut=0,at=B*ut;for(let Et=0;Et<yt;Et++){const xt=Kt[Et];Lt(xt[2]+at,xt[1]+at,xt[0]+at)}ut=h+m*2,at=B*ut;for(let Et=0;Et<yt;Et++){const xt=Kt[Et];Lt(xt[0]+at,xt[1]+at,xt[2]+at)}}else{for(let ut=0;ut<yt;ut++){const at=Kt[ut];Lt(at[2],at[1],at[0])}for(let ut=0;ut<yt;ut++){const at=Kt[ut];Lt(at[0]+B*h,at[1]+B*h,at[2]+B*h)}}n.addGroup(ot,s.length/3-ot,0)}function st(){const ot=s.length/3;let ut=0;Z(L,ut),ut+=L.length;for(let at=0,Et=A.length;at<Et;at++){const xt=A[at];Z(xt,ut),ut+=xt.length}n.addGroup(ot,s.length/3-ot,1)}function Z(ot,ut){let at=ot.length;for(;--at>=0;){const Et=at;let xt=at-1;xt<0&&(xt=ot.length-1);for(let Jt=0,U=h+m*2;Jt<U;Jt++){const qt=B*Jt,Gt=B*(Jt+1),Qt=ut+Et+qt,mt=ut+xt+qt,fe=ut+xt+Gt,R=ut+Et+Gt;Dt(Qt,mt,fe,R)}}}function ct(ot,ut,at){l.push(ot),l.push(ut),l.push(at)}function Lt(ot,ut,at){ft(ot),ft(ut),ft(at);const Et=s.length/3,xt=y.generateTopUV(n,s,Et-3,Et-2,Et-1);Ot(xt[0]),Ot(xt[1]),Ot(xt[2])}function Dt(ot,ut,at,Et){ft(ot),ft(ut),ft(Et),ft(ut),ft(at),ft(Et);const xt=s.length/3,Jt=y.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);Ot(Jt[0]),Ot(Jt[1]),Ot(Jt[3]),Ot(Jt[1]),Ot(Jt[2]),Ot(Jt[3])}function ft(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function Ot(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new aa[s.type]().fromJSON(s)),new _a(n,t.options)}}const wm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new St(r,o),new St(a,l),new St(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],x=t[s*3+2],S=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new St(o,1-l),new St(c,1-u),new St(d,1-x),new St(S,1-f)]:[new St(a,1-l),new St(h,1-u),new St(p,1-x),new St(m,1-f)]}};function Sm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yi extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],x=[],S=[],m=[];for(let f=0;f<h;f++){const y=f*d-o;for(let M=0;M<c;M++){const b=M*u-r;x.push(b,-y,0),S.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const M=y+c*f,b=y+c*(f+1),P=y+1+c*(f+1),v=y+1+c*f;p.push(M,b,v),p.push(b,P,v)}this.setIndex(p),this.setAttribute("position",new _e(x,3)),this.setAttribute("normal",new _e(S,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ih extends He{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new N,x=new St;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let S=0;S<s;S++){const m=S*(n+1);for(let f=0;f<n;f++){const y=f+m,M=y,b=y+n+1,P=y+n+2,v=y+1;a.push(M,b,v),a.push(b,P,v)}}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Un extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,d=new N,p=[],x=[],S=[],m=[];for(let f=0;f<=n;f++){const y=[],M=f/n;let b=0;f===0&&o===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const v=P/e;u.x=-t*Math.cos(s+v*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+v*r)*Math.sin(o+M*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),m.push(v+b,1-M),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const M=h[f][y+1],b=h[f][y],P=h[f+1][y],v=h[f+1][y+1];(f!==0||o>0)&&p.push(M,b,v),(f!==n-1||l<Math.PI)&&p.push(b,P,v)}this.setIndex(p),this.setAttribute("position",new _e(x,3)),this.setAttribute("normal",new _e(S,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class eo extends He{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new N,p=new N,x=new N;for(let S=0;S<=n;S++){const m=o+S/n*a;for(let f=0;f<=s;f++){const y=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(y),p.y=(t+e*Math.cos(m))*Math.sin(y),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),x.subVectors(p,d).normalize(),h.push(x.x,x.y,x.z),u.push(f/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const f=(s+1)*S+m-1,y=(s+1)*(S-1)+m-1,M=(s+1)*(S-1)+m,b=(s+1)*S+m;l.push(f,y,b),l.push(y,M,b)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class sh extends He{constructor(t=new bf(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new St;let h=new N;const u=[],d=[],p=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2));function S(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),f()}function m(M){h=t.getPointAt(M/e,h);const b=o.normals[M],P=o.binormals[M];for(let v=0;v<=s;v++){const E=v/s*Math.PI*2,g=Math.sin(E),_=-Math.cos(E);l.x=_*b.x+g*P.x,l.y=_*b.y+g*P.y,l.z=_*b.z+g*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=e;M++)for(let b=1;b<=s;b++){const P=(s+1)*(M-1)+(b-1),v=(s+1)*M+(b-1),E=(s+1)*M+b,g=(s+1)*(M-1)+b;x.push(P,v,g),x.push(v,E,g)}}function y(){for(let M=0;M<=e;M++)for(let b=0;b<=s;b++)c.x=M/e,c.y=b/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sh(new aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ar(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Md(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Md(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=ar(i[e]);for(const s in n)t[s]=n[s]}return t}function Md(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Em(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const Am={clone:ar,merge:ln};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=Em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rm extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wi extends Qr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Cf extends Qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pm extends Qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Rf extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class km extends Rf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const al=new te,wd=new N,Sd=new N;class Fm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(wd),Sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sd),e.updateMatrixWorld(),al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===qr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ro=new N,Po=new Xi,qn=new N;class Pf extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ro,Po,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Ro,Po,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new N,Ed=new St,Ad=new St;class xn extends Pf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mc*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Ed,Ad),e.subVectors(Ad,Ed)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ya extends Pf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Lm extends Fm{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends Rf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Lm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Gs=-90,Ws=1;class Dm extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Gs,Ws,t,e);s.layers=this.layers,this.add(s);const r=new xn(Gs,Ws,t,e);r.layers=this.layers,this.add(r);const o=new xn(Gs,Ws,t,e);o.layers=this.layers,this.add(o);const a=new xn(Gs,Ws,t,e);a.layers=this.layers,this.add(a);const l=new xn(Gs,Ws,t,e);l.layers=this.layers,this.add(l);const c=new xn(Gs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Nm extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Td=new te;class Um{constructor(t,e,n=0,s=1/0){this.ray=new Zc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):pe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Td.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Td),this}intersectObject(t,e=!0,n=[]){return Ec(t,this,n,e),n.sort(Cd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ec(t[s],this,n,e);return n.sort(Cd),n}}function Cd(i,t){return i.distance-t.distance}function Ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ec(r[o],t,e,!0)}}const vh=class vh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};vh.prototype.isMatrix2=!0;let Rd=vh;function Pd(i,t,e,n){const s=Om(n);switch(e){case lf:return i*t;case ma:return i*t/s.components*s.byteLength;case Vc:return i*t/s.components*s.byteLength;case _s:return i*t*2/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case cf:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case Wc:return i*t*4/s.components*s.byteLength;case qo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:case Yl:return Math.max(i,16)*Math.max(t,8)/4;case Wl:case $l:return Math.max(i,8)*Math.max(t,8)/2;case ql:case jl:case Kl:case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zl:case ea:case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pc:case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xc:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case na:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Om(i){switch(i){case wn:case sf:return{byteLength:1,components:1};case $r:case rf:case bi:return{byteLength:2,components:1};case zc:case Hc:return{byteLength:2,components:4};case oi:case Bc:case Dn:return{byteLength:4,components:1};case of:case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){const x=u[d],S=u[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,u[d]=S)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){const S=u[p];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
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
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
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
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
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
#endif`,tg=`#ifdef USE_BUMPMAP
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cg=`#define PI 3.141592653589793
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
} // validated`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dg=`vec3 transformedNormal = objectNormal;
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
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
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
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
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
#endif`,Og=`uniform sampler2D dfgLUT;
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
}`,Bg=`
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
#endif`,zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zg=`#if defined( USE_POINTS_UV )
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
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
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
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ex=`float getShadowMask() {
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
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,qx=`#define DISTANCE
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
}`,jx=`#define DISTANCE
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,ev=`uniform vec3 diffuse;
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define LAMBERT
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
}`,sv=`#define MATCAP
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
}`,rv=`#define MATCAP
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
}`,ov=`#define NORMAL
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
}`,av=`#define NORMAL
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
}`,lv=`#define PHONG
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
}`,cv=`#define PHONG
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
}`,hv=`#define STANDARD
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
}`,dv=`#define STANDARD
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
}`,uv=`#define TOON
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
}`,fv=`#define TOON
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
}`,pv=`uniform float size;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,xv=`uniform vec3 color;
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
}`,vv=`uniform float rotation;
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
}`,_v=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:zm,alphahash_pars_fragment:Hm,alphamap_fragment:Vm,alphamap_pars_fragment:Gm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:$m,aomap_pars_fragment:Ym,batching_pars_vertex:qm,batching_vertex:jm,begin_vertex:Zm,beginnormal_vertex:Km,bsdfs:Jm,iridescence_fragment:Qm,bumpmap_pars_fragment:tg,clipping_planes_fragment:eg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:og,color_pars_vertex:ag,color_vertex:lg,common:cg,cube_uv_reflection_fragment:hg,defaultnormal_vertex:dg,displacementmap_pars_vertex:ug,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:xg,envmap_fragment:vg,envmap_common_pars_fragment:_g,envmap_pars_fragment:yg,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Fg,envmap_vertex:Mg,fog_vertex:wg,fog_pars_vertex:Sg,fog_fragment:Eg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Tg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Pg,lights_pars_begin:kg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Dg,lights_phong_pars_fragment:Ng,lights_physical_fragment:Ug,lights_physical_pars_fragment:Og,lights_fragment_begin:Bg,lights_fragment_maps:zg,lights_fragment_end:Hg,lightprobes_pars_fragment:Vg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:$g,map_fragment:Yg,map_pars_fragment:qg,map_particle_fragment:jg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:Qg,morphcolor_vertex:tx,morphnormal_vertex:ex,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:sx,normal_fragment_maps:rx,normal_pars_fragment:ox,normal_pars_vertex:ax,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:fx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:xx,dithering_fragment:vx,dithering_pars_fragment:_x,roughnessmap_fragment:yx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:wx,shadowmap_vertex:Sx,shadowmask_pars_fragment:Ex,skinbase_vertex:Ax,skinning_pars_vertex:Tx,skinning_vertex:Cx,skinnormal_vertex:Rx,specularmap_fragment:Px,specularmap_pars_fragment:kx,tonemapping_fragment:Fx,tonemapping_pars_fragment:Lx,transmission_fragment:Ix,transmission_pars_fragment:Dx,uv_pars_fragment:Nx,uv_pars_vertex:Ux,uv_vertex:Ox,worldpos_vertex:Bx,background_vert:zx,background_frag:Hx,backgroundCube_vert:Vx,backgroundCube_frag:Gx,cube_vert:Wx,cube_frag:Xx,depth_vert:$x,depth_frag:Yx,distance_vert:qx,distance_frag:jx,equirect_vert:Zx,equirect_frag:Kx,linedashed_vert:Jx,linedashed_frag:Qx,meshbasic_vert:tv,meshbasic_frag:ev,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:sv,meshmatcap_frag:rv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:hv,meshphysical_frag:dv,meshtoon_vert:uv,meshtoon_frag:fv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:xv,sprite_vert:vv,sprite_frag:_v},kt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ni={basic:{uniforms:ln([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:ln([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:ln([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:ln([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:ln([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ee(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:ln([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:ln([kt.points,kt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:ln([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:ln([kt.common,kt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:ln([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:ln([kt.sprite,kt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:ln([kt.common,kt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:ln([kt.lights,kt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ni.physical={uniforms:ln([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const ko={r:0,b:0,g:0},yv=new te,Ff=new se;Ff.set(-1,0,0,0,1,0,0,0,1);function bv(i,t,e,n,s,r){const o=new ee(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const b=y.backgroundBlurriness>0;M=t.get(M,b)}return M}function x(y){let M=!1;const b=p(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,M){const b=p(M);b&&(b.isCubeTexture||b.mapping===pa)?(c===void 0&&(c=new be(new un(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:ar(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ff),c.material.toneMapped=me.getTransfer(b.colorSpace)!==we,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new be(new Yi(2,2),new fn({name:"BackgroundMaterial",uniforms:ar(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=me.getTransfer(b.colorSpace)!==we,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(ko,Tf(i)),e.buffers.color.setClear(ko.r,ko.g,ko.b,M,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:x,addToRenderList:S,dispose:f}}function Mv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(A,k,F,O,L){let H=!1;const B=u(A,O,F,k);r!==B&&(r=B,c(r.object)),H=p(A,O,F,L),H&&x(A,O,F,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,b(A,k,F,O),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function u(A,k,F,O){const L=O.wireframe===!0;let H=n[k.id];H===void 0&&(H={},n[k.id]=H);const B=A.isInstancedMesh===!0?A.id:0;let et=H[B];et===void 0&&(et={},H[B]=et);let nt=et[F.id];nt===void 0&&(nt={},et[F.id]=nt);let ht=nt[L];return ht===void 0&&(ht=d(l()),nt[L]=ht),ht}function d(A){const k=[],F=[],O=[];for(let L=0;L<e;L++)k[L]=0,F[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:O,object:A,attributes:{},index:null}}function p(A,k,F,O){const L=r.attributes,H=k.attributes;let B=0;const et=F.getAttributes();for(const nt in et)if(et[nt].location>=0){const pt=L[nt];let At=H[nt];if(At===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(At=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(At=A.instanceColor)),pt===void 0||pt.attribute!==At||At&&pt.data!==At.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function x(A,k,F,O){const L={},H=k.attributes;let B=0;const et=F.getAttributes();for(const nt in et)if(et[nt].location>=0){let pt=H[nt];pt===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(pt=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(pt=A.instanceColor));const At={};At.attribute=pt,pt&&pt.data&&(At.data=pt.data),L[nt]=At,B++}r.attributes=L,r.attributesNum=B,r.index=O}function S(){const A=r.newAttributes;for(let k=0,F=A.length;k<F;k++)A[k]=0}function m(A){f(A,0)}function f(A,k){const F=r.newAttributes,O=r.enabledAttributes,L=r.attributeDivisors;F[A]=1,O[A]===0&&(i.enableVertexAttribArray(A),O[A]=1),L[A]!==k&&(i.vertexAttribDivisor(A,k),L[A]=k)}function y(){const A=r.newAttributes,k=r.enabledAttributes;for(let F=0,O=k.length;F<O;F++)k[F]!==A[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function M(A,k,F,O,L,H,B){B===!0?i.vertexAttribIPointer(A,k,F,L,H):i.vertexAttribPointer(A,k,F,O,L,H)}function b(A,k,F,O){S();const L=O.attributes,H=F.getAttributes(),B=k.defaultAttributeValues;for(const et in H){const nt=H[et];if(nt.location>=0){let ht=L[et];if(ht===void 0&&(et==="instanceMatrix"&&A.instanceMatrix&&(ht=A.instanceMatrix),et==="instanceColor"&&A.instanceColor&&(ht=A.instanceColor)),ht!==void 0){const pt=ht.normalized,At=ht.itemSize,Kt=t.get(ht);if(Kt===void 0)continue;const yt=Kt.buffer,wt=Kt.type,j=Kt.bytesPerElement,st=wt===i.INT||wt===i.UNSIGNED_INT||ht.gpuType===Bc;if(ht.isInterleavedBufferAttribute){const Z=ht.data,ct=Z.stride,Lt=ht.offset;if(Z.isInstancedInterleavedBuffer){for(let Dt=0;Dt<nt.locationSize;Dt++)f(nt.location+Dt,Z.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Dt=0;Dt<nt.locationSize;Dt++)m(nt.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Dt=0;Dt<nt.locationSize;Dt++)M(nt.location+Dt,At/nt.locationSize,wt,pt,ct*j,(Lt+At/nt.locationSize*Dt)*j,st)}else{if(ht.isInstancedBufferAttribute){for(let Z=0;Z<nt.locationSize;Z++)f(nt.location+Z,ht.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Z=0;Z<nt.locationSize;Z++)m(nt.location+Z);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Z=0;Z<nt.locationSize;Z++)M(nt.location+Z,At/nt.locationSize,wt,pt,At*j,At/nt.locationSize*Z*j,st)}}else if(B!==void 0){const pt=B[et];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(nt.location,pt);break;case 3:i.vertexAttrib3fv(nt.location,pt);break;case 4:i.vertexAttrib4fv(nt.location,pt);break;default:i.vertexAttrib1fv(nt.location,pt)}}}}y()}function P(){_();for(const A in n){const k=n[A];for(const F in k){const O=k[F];for(const L in O){const H=O[L];for(const B in H)h(H[B].object),delete H[B];delete O[L]}}delete n[A]}}function v(A){if(n[A.id]===void 0)return;const k=n[A.id];for(const F in k){const O=k[F];for(const L in O){const H=O[L];for(const B in H)h(H[B].object),delete H[B];delete O[L]}}delete n[A.id]}function E(A){for(const k in n){const F=n[k];for(const O in F){const L=F[O];if(L[A.id]===void 0)continue;const H=L[A.id];for(const B in H)h(H[B].object),delete H[B];delete L[A.id]}}}function g(A){for(const k in n){const F=n[k],O=A.isInstancedMesh===!0?A.id:0,L=F[O];if(L!==void 0){for(const H in L){const B=L[H];for(const et in B)h(B[et].object),delete B[et];delete L[H]}delete F[O],Object.keys(F).length===0&&delete n[k]}}}function _(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:_,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:v,releaseStatesOfObject:g,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function wv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const g=E===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Dn&&!g)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,maxSamples:P,samples:v}}function Ev(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new os,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const x=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,M=y*4;let b=f.clippingState||null;l.value=b,b=h(x,d,M,p);for(let P=0;P!==M;++P)b[P]=e[P];f.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,x){const S=u!==null?u.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const f=p+S*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,b=p;M!==S;++M,b+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const zi=4,kd=[.125,.215,.35,.446,.526,.582],cs=20,Av=256,wr=new ya,Fd=new ee;let ll=null,cl=0,hl=0,dl=!1;const Tv=new N;class Ld{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Tv}=r;ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,hl),this._renderer.xr.enabled=dl,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:bi,format:Nn,colorSpace:ia,depthBuffer:!1},s=Id(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cv(r)),this._blurMaterial=Pv(r,t,e),this._ggxMaterial=Rv(r,t,e)}return s}_compileMaterial(t){const e=new be(new He,t);this._renderer.compile(e,wr)}_sceneToCubeUV(t,e,n,s,r){const l=new xn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Fd),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new un,new si({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,f=!0):(m.color.copy(Fd),f=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const P=this._cubeSize;Xs(s,b*P,M>2?P:0,P,P),u.setRenderTarget(s),f&&u.render(S,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vs||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-zi?n-x+zi:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,Xs(r,m,f,3*S,2*S),s.setRenderTarget(r),s.render(a,wr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Xs(t,m,f,3*S,2*S),s.setRenderTarget(t),s.render(a,wr)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&pe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*cs-1),S=r/x,m=isFinite(r)?1+Math.floor(h*S):cs;m>cs&&jt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);const f=[];let y=0;for(let E=0;E<cs;++E){const g=E/S,_=Math.exp(-g*g/2);f.push(_),E===0?y+=_:E<m&&(y+=2*_)}for(let E=0;E<f.length;E++)f[E]=f[E]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-n;const b=this._sizeLods[s],P=3*b*(s>M-zi?s-M+zi:0),v=4*(this._cubeSize-b);Xs(e,P,v,3*b,2*b),l.setRenderTarget(e),l.render(u,wr)}}function Cv(i){const t=[],e=[],n=[];let s=i;const r=i-zi+1+kd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-zi?l=kd[o-i+zi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,S=3,m=2,f=1,y=new Float32Array(S*x*p),M=new Float32Array(m*x*p),b=new Float32Array(f*x*p);for(let v=0;v<p;v++){const E=v%3*2/3-1,g=v>2?0:-1,_=[E,g,0,E+2/3,g,0,E+2/3,g+1,0,E,g,0,E+2/3,g+1,0,E,g+1,0];y.set(_,S*x*v),M.set(d,m*x*v);const C=[v,v,v,v,v,v];b.set(C,f*x*v)}const P=new He;P.setAttribute("position",new ve(y,S)),P.setAttribute("uv",new ve(M,m)),P.setAttribute("faceIndex",new ve(b,f)),n.push(new be(P,null)),s>zi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Id(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rv(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Pv(i,t,e){const n=new Float32Array(cs),s=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ba(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Dd(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nd(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}class Lf extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:xi});r.uniforms.tEquirect.value=e;const o=new be(s,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=Ke),new Dm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function kv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Ra||p===Pa)if(t.has(d)){const x=t.get(d).texture;return a(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const S=new Lf(x.height);return S.fromEquirectangularTexture(i,d),t.set(d,S),d.addEventListener("dispose",c),a(S.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,x=p===Ra||p===Pa,S=p===vs||p===sr;if(x||S){let m=e.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Ld(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return x&&y&&y.height>0||S&&y&&l(y)?(n===null&&(n=new Ld(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===Ra?d.mapping=vs:p===Pa&&(d.mapping=sr),d}function l(d){let p=0;const x=6;for(let S=0;S<x;S++)d[S]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Fv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bc("WebGLRenderer: "+n+" extension not supported."),s}}}function Lv(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,x=u.attributes.position;let S=0;if(x===void 0)return;if(p!==null){const y=p.array;S=p.version;for(let M=0,b=y.length;M<b;M+=3){const P=y[M+0],v=y[M+1],E=y[M+2];d.push(P,v,v,E,E,P)}}else{const y=x.array;S=x.version;for(let M=0,b=y.length/3-1;M<b;M+=3){const P=M+0,v=M+1,E=M+2;d.push(P,v,v,E,E,P)}}const m=new(x.count>=65535?ff:jc)(d,1);m.version=S;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Iv(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*o,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let S=0;for(let m=0;m<p;m++)S+=d[m];e.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Dv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:pe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nv(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var p=C;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let b=0;x===!0&&(b=1),S===!0&&(b=2),m===!0&&(b=3);let P=a.attributes.position.count*b,v=1;P>t.maxTextureSize&&(v=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const E=new Float32Array(P*v*4*u),g=new df(E,P,v,u);g.type=Dn,g.needsUpdate=!0;const _=b*4;for(let A=0;A<u;A++){const k=f[A],F=y[A],O=M[A],L=P*v*4*A;for(let H=0;H<k.count;H++){const B=H*_;x===!0&&(s.fromBufferAttribute(k,H),E[L+B+0]=s.x,E[L+B+1]=s.y,E[L+B+2]=s.z,E[L+B+3]=0),S===!0&&(s.fromBufferAttribute(F,H),E[L+B+4]=s.x,E[L+B+5]=s.y,E[L+B+6]=s.z,E[L+B+7]=0),m===!0&&(s.fromBufferAttribute(O,H),E[L+B+8]=s.x,E[L+B+9]=s.y,E[L+B+10]=s.z,E[L+B+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:g,size:new St(P,v)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Uv(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Ov={[ju]:"LINEAR_TONE_MAPPING",[Zu]:"REINHARD_TONE_MAPPING",[Ku]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[tf]:"AGX_TONE_MAPPING",[ef]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function Bv(i,t,e,n,s){const r=new $n(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new rr(t,e):void 0}),o=new $n(t,e,{type:bi,depthBuffer:!1,stencilBuffer:!1}),a=new He;a.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new _e([0,2,0,0,2,0],2));const l=new Rm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new be(a,l),h=new ya(-1,1,1,-1,0,1);let u=null,d=null,p=!1,x,S=null,m=[],f=!1;this.setSize=function(y,M){r.setSize(y,M),o.setSize(y,M);for(let b=0;b<m.length;b++){const P=m[b];P.setSize&&P.setSize(y,M)}},this.setEffects=function(y){m=y,f=m.length>0&&m[0].isRenderPass===!0;const M=r.width,b=r.height;for(let P=0;P<m.length;P++){const v=m[P];v.setSize&&v.setSize(M,b)}},this.begin=function(y,M){if(p||y.toneMapping===Xn&&m.length===0)return!1;if(S=M,M!==null){const b=M.width,P=M.height;(r.width!==b||r.height!==P)&&this.setSize(b,P)}return f===!1&&y.setRenderTarget(r),x=y.toneMapping,y.toneMapping=Xn,!0},this.hasRenderPass=function(){return f},this.end=function(y,M){y.toneMapping=x,p=!0;let b=r,P=o;for(let v=0;v<m.length;v++){const E=m[v];if(E.enabled!==!1&&(E.render(y,P,b,M),E.needsSwap!==!1)){const g=b;b=P,P=g}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},me.getTransfer(u)===we&&(l.defines.SRGB_TRANSFER="");const v=Ov[d];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(S),y.render(c,h),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const If=new on,Ac=new rr(1,1),Df=new df,Nf=new C0,Uf=new mf,Ud=[],Od=[],Bd=new Float32Array(16),zd=new Float32Array(9),Hd=new Float32Array(4);function ur(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ud[s];if(r===void 0&&(r=new Float32Array(s),Ud[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ma(i,t){let e=Od[t];e===void 0&&(e=new Int32Array(t),Od[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function Gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Wv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Hd.set(n),i.uniformMatrix2fv(this.addr,!1,Hd),We(e,n)}}function Xv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;zd.set(n),i.uniformMatrix3fv(this.addr,!1,zd),We(e,n)}}function $v(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),We(e,n)}}function Yv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function Zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function Kv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function Qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function e_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ac.compareFunction=e.isReversedDepthBuffer()?$c:Xc,r=Ac):r=If,e.setTexture2D(t||r,s)}function n_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nf,s)}function i_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uf,s)}function s_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Df,s)}function r_(i){switch(i){case 5126:return zv;case 35664:return Hv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return Xv;case 35676:return $v;case 5124:case 35670:return Yv;case 35667:case 35671:return qv;case 35668:case 35672:return jv;case 35669:case 35673:return Zv;case 5125:return Kv;case 36294:return Jv;case 36295:return Qv;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function o_(i,t){i.uniform1fv(this.addr,t)}function a_(i,t){const e=ur(t,this.size,2);i.uniform2fv(this.addr,e)}function l_(i,t){const e=ur(t,this.size,3);i.uniform3fv(this.addr,e)}function c_(i,t){const e=ur(t,this.size,4);i.uniform4fv(this.addr,e)}function h_(i,t){const e=ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function d_(i,t){const e=ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u_(i,t){const e=ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f_(i,t){i.uniform1iv(this.addr,t)}function p_(i,t){i.uniform2iv(this.addr,t)}function m_(i,t){i.uniform3iv(this.addr,t)}function g_(i,t){i.uniform4iv(this.addr,t)}function x_(i,t){i.uniform1uiv(this.addr,t)}function v_(i,t){i.uniform2uiv(this.addr,t)}function __(i,t){i.uniform3uiv(this.addr,t)}function y_(i,t){i.uniform4uiv(this.addr,t)}function b_(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ac:o=If;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function M_(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nf,r[o])}function w_(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uf,r[o])}function S_(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Df,r[o])}function E_(i){switch(i){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return d_;case 35676:return u_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return v_;case 36295:return __;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return S_}}class A_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r_(e.type)}}class T_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E_(e.type)}}class C_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function Vd(i,t){i.seq.push(t),i.map[t.id]=t}function R_(i,t,e){const n=i.name,s=n.length;for(ul.lastIndex=0;;){const r=ul.exec(n),o=ul.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vd(e,c===void 0?new A_(a,i,t):new T_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new C_(a),Vd(e,u)),e=u}}}class Jo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);R_(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Gd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const P_=37297;let k_=0;function F_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Wd=new se;function L_(i){me._getMatrix(Wd,me.workingColorSpace,i);const t=`mat3( ${Wd.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+F_(i.getShaderSource(t),a)}else return r}function I_(i,t){const e=L_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const D_={[ju]:"Linear",[Zu]:"Reinhard",[Ku]:"Cineon",[Ju]:"ACESFilmic",[tf]:"AgX",[ef]:"Neutral",[Qu]:"Custom"};function N_(i,t){const e=D_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fo=new N;function U_(){me.getLuminanceCoefficients(Fo);const i=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function B_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Or(i){return i!==""}function $d(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(H_,G_)}const V_=new Map;function G_(i,t){let e=le[t];if(e===void 0){const n=V_.get(t);if(n!==void 0)e=le[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tc(e)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(i){return i.replace(W_,X_)}function X_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const $_={[Yo]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function Y_(i){return $_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q_={[vs]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE_UV"};function j_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":q_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z_={[sr]:"ENVMAP_MODE_REFRACTION"};function K_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Z_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J_={[qu]:"ENVMAP_BLENDING_MULTIPLY",[r0]:"ENVMAP_BLENDING_MIX",[o0]:"ENVMAP_BLENDING_ADD"};function Q_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":J_[i.combine]||"ENVMAP_BLENDING_NONE"}function ty(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ey(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Y_(e),c=j_(e),h=K_(e),u=Q_(e),d=ty(e),p=O_(e),x=B_(r),S=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Or).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Or).join(`
`),f.length>0&&(f+=`
`)):(m=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),f=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?le.tonemapping_pars_fragment:"",e.toneMapping!==Xn?N_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,I_("linearToOutputTexel",e.outputColorSpace),U_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=Tc(o),o=$d(o,e),o=Yd(o,e),a=Tc(a),a=$d(a,e),a=Yd(a,e),o=qd(o),a=qd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=y+m+o,b=y+f+a,P=Gd(s,s.VERTEX_SHADER,M),v=Gd(s,s.FRAGMENT_SHADER,b);s.attachShader(S,P),s.attachShader(S,v),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function E(A){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(S)||"",F=s.getShaderInfoLog(P)||"",O=s.getShaderInfoLog(v)||"",L=k.trim(),H=F.trim(),B=O.trim();let et=!0,nt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,P,v);else{const ht=Xd(s,P,"vertex"),pt=Xd(s,v,"fragment");pe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+ht+`
`+pt)}else L!==""?jt("WebGLProgram: Program Info Log:",L):(H===""||B==="")&&(nt=!1);nt&&(A.diagnostics={runnable:et,programLog:L,vertexShader:{log:H,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(P),s.deleteShader(v),g=new Jo(s,S),_=z_(s,S)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(S,P_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=v,this}let ny=0;class iy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sy(t),e.set(t,n)),n}}class sy{constructor(t){this.id=ny++,this.code=t,this.usedTimes=0}}function ry(i){return i===_s||i===ea||i===na}function oy(i,t,e,n,s,r){const o=new qc,a=new iy,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,_,C,A,k,F){const O=A.fog,L=k.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,et=t.get(g.envMap||H,B),nt=et&&et.mapping===pa?et.image.height:null,ht=p[g.type];g.precision!==null&&(d=n.getMaxPrecision(g.precision),d!==g.precision&&jt("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const pt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,At=pt!==void 0?pt.length:0;let Kt=0;L.morphAttributes.position!==void 0&&(Kt=1),L.morphAttributes.normal!==void 0&&(Kt=2),L.morphAttributes.color!==void 0&&(Kt=3);let yt,wt,j,st;if(ht){const ne=ni[ht];yt=ne.vertexShader,wt=ne.fragmentShader}else yt=g.vertexShader,wt=g.fragmentShader,a.update(g),j=a.getVertexShaderID(g),st=a.getFragmentShaderID(g);const Z=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),Lt=k.isInstancedMesh===!0,Dt=k.isBatchedMesh===!0,ft=!!g.map,Ot=!!g.matcap,ot=!!et,ut=!!g.aoMap,at=!!g.lightMap,Et=!!g.bumpMap,xt=!!g.normalMap,Jt=!!g.displacementMap,U=!!g.emissiveMap,qt=!!g.metalnessMap,Gt=!!g.roughnessMap,Qt=g.anisotropy>0,mt=g.clearcoat>0,fe=g.dispersion>0,R=g.iridescence>0,w=g.sheen>0,W=g.transmission>0,I=Qt&&!!g.anisotropyMap,q=mt&&!!g.clearcoatMap,tt=mt&&!!g.clearcoatNormalMap,Q=mt&&!!g.clearcoatRoughnessMap,X=R&&!!g.iridescenceMap,J=R&&!!g.iridescenceThicknessMap,bt=w&&!!g.sheenColorMap,Rt=w&&!!g.sheenRoughnessMap,Mt=!!g.specularMap,vt=!!g.specularColorMap,$t=!!g.specularIntensityMap,rt=W&&!!g.transmissionMap,Pt=W&&!!g.thicknessMap,z=!!g.gradientMap,dt=!!g.alphaMap,it=g.alphaTest>0,Nt=!!g.alphaHash,gt=!!g.extensions;let lt=Xn;g.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(lt=i.toneMapping);const Ht={shaderID:ht,shaderType:g.type,shaderName:g.name,vertexShader:yt,fragmentShader:wt,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:st,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:Dt,batchingColor:Dt&&k._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&k.instanceColor!==null,instancingMorph:Lt&&k.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ft,matcap:Ot,envMap:ot,envMapMode:ot&&et.mapping,envMapCubeUVHeight:nt,aoMap:ut,lightMap:at,bumpMap:Et,normalMap:xt,displacementMap:Jt,emissiveMap:U,normalMapObjectSpace:xt&&g.normalMapType===d0,normalMapTangentSpace:xt&&g.normalMapType===yc,packedNormalMap:xt&&g.normalMapType===yc&&ry(g.normalMap.format),metalnessMap:qt,roughnessMap:Gt,anisotropy:Qt,anisotropyMap:I,clearcoat:mt,clearcoatMap:q,clearcoatNormalMap:tt,clearcoatRoughnessMap:Q,dispersion:fe,iridescence:R,iridescenceMap:X,iridescenceThicknessMap:J,sheen:w,sheenColorMap:bt,sheenRoughnessMap:Rt,specularMap:Mt,specularColorMap:vt,specularIntensityMap:$t,transmission:W,transmissionMap:rt,thicknessMap:Pt,gradientMap:z,opaque:g.transparent===!1&&g.blending===Js&&g.alphaToCoverage===!1,alphaMap:dt,alphaTest:it,alphaHash:Nt,combine:g.combine,mapUv:ft&&x(g.map.channel),aoMapUv:ut&&x(g.aoMap.channel),lightMapUv:at&&x(g.lightMap.channel),bumpMapUv:Et&&x(g.bumpMap.channel),normalMapUv:xt&&x(g.normalMap.channel),displacementMapUv:Jt&&x(g.displacementMap.channel),emissiveMapUv:U&&x(g.emissiveMap.channel),metalnessMapUv:qt&&x(g.metalnessMap.channel),roughnessMapUv:Gt&&x(g.roughnessMap.channel),anisotropyMapUv:I&&x(g.anisotropyMap.channel),clearcoatMapUv:q&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:tt&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(g.sheenRoughnessMap.channel),specularMapUv:Mt&&x(g.specularMap.channel),specularColorMapUv:vt&&x(g.specularColorMap.channel),specularIntensityMapUv:$t&&x(g.specularIntensityMap.channel),transmissionMapUv:rt&&x(g.transmissionMap.channel),thicknessMapUv:Pt&&x(g.thicknessMap.channel),alphaMapUv:dt&&x(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xt||Qt),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(ft||dt),fog:!!O,useFog:g.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&xt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ct,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Kt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:ft&&g.map.isVideoTexture===!0&&me.getTransfer(g.map.colorSpace)===we,decodeVideoTextureEmissive:U&&g.emissiveMap.isVideoTexture===!0&&me.getTransfer(g.emissiveMap.colorSpace)===we,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Gn,flipSided:g.side===Je,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:gt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&g.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(g){const _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(const C in g.defines)_.push(C),_.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(f(_,g),y(_,g),_.push(i.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function f(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function y(g,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),g.push(o.mask)}function M(g){const _=p[g.type];let C;if(_){const A=ni[_];C=Am.clone(A.uniforms)}else C=g.uniforms;return C}function b(g,_){let C=h.get(_);return C!==void 0?++C.usedTimes:(C=new ey(i,_,g,s),c.push(C),h.set(_,C)),C}function P(g){if(--g.usedTimes===0){const _=c.indexOf(g);c[_]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function v(g){a.remove(g)}function E(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:P,releaseShaderCache:v,programs:c,dispose:E}}function ay(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ly(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,x,S,m,f){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:p,material:x,materialVariant:o(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:f},i[t]=y):(y.id=d.id,y.object=d,y.geometry=p,y.material=x,y.materialVariant=o(d),y.groupOrder=S,y.renderOrder=d.renderOrder,y.z=m,y.group=f),t++,y}function l(d,p,x,S,m,f){const y=a(d,p,x,S,m,f);x.transmission>0?n.push(y):x.transparent===!0?s.push(y):e.push(y)}function c(d,p,x,S,m,f){const y=a(d,p,x,S,m,f);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,p){e.length>1&&e.sort(d||ly),n.length>1&&n.sort(p||Zd),s.length>1&&s.sort(p||Zd)}function u(){for(let d=t,p=i.length;d<p;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function cy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Kd,i.set(n,[o])):s>=r.length?(o=new Kd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function hy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ee};break;case"SpotLight":e={position:new N,direction:new N,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function dy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let uy=0;function fy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function py(i){const t=new hy,e=dy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new te,o=new te;function a(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,x=0,S=0,m=0,f=0,y=0,M=0,b=0,P=0,v=0,E=0;c.sort(fy);for(let _=0,C=c.length;_<C;_++){const A=c[_],k=A.color,F=A.intensity,O=A.distance;let L=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===_s?L=A.shadow.map.texture:L=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],F);E++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const B=A.shadow,et=e.get(A);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=L,n.directionalShadowMatrix[p]=A.shadow.matrix,y++}n.directional[p]=H,p++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(k).multiplyScalar(F),H.distance=O,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[S]=H;const B=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,B.updateMatrices(A),A.castShadow&&v++),n.spotLightMatrix[S]=B.matrix,A.castShadow){const et=e.get(A);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,n.spotShadow[S]=et,n.spotShadowMap[S]=L,b++}S++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(k).multiplyScalar(F),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=H,m++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const B=A.shadow,et=e.get(A);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,et.shadowCameraNear=B.camera.near,et.shadowCameraFar=B.camera.far,n.pointShadow[x]=et,n.pointShadowMap[x]=L,n.pointShadowMatrix[x]=A.shadow.matrix,M++}n.point[x]=H,x++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(F),H.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const g=n.hash;(g.directionalLength!==p||g.pointLength!==x||g.spotLength!==S||g.rectAreaLength!==m||g.hemiLength!==f||g.numDirectionalShadows!==y||g.numPointShadows!==M||g.numSpotShadows!==b||g.numSpotMaps!==P||g.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+P-v,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=E,g.directionalLength=p,g.pointLength=x,g.spotLength=S,g.rectAreaLength=m,g.hemiLength=f,g.numDirectionalShadows=y,g.numPointShadows=M,g.numSpotShadows=b,g.numSpotMaps=P,g.numLightProbes=E,n.version=uy++)}function l(c,h){let u=0,d=0,p=0,x=0,S=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const M=c[f];if(M.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(M.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const b=n.hemi[S];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:n}}function Jd(i){const t=new py(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function my(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Jd(i),t.set(s,[a])):r>=o.length?(a=new Jd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
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
}`,vy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],_y=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Qd=new te,Sr=new N,fl=new N;function yy(i,t,e){let n=new Jc;const s=new St,r=new St,o=new Se,a=new Cf,l=new Pm,c={},h=e.maxTextureSize,u={[Gi]:Je,[Je]:Gi,[Gn]:Gn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:gy,fragmentShader:xy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new He;x.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new be(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let f=this.type;this.render=function(v,E,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Yu&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yo);const _=i.getRenderTarget(),C=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),k=i.state;k.setBlending(xi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=f!==this.type;F&&E.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=v.length;O<L;O++){const H=v[O],B=H.shadow;if(B===void 0){jt("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const et=B.getFrameExtents();s.multiply(et),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,B.mapSize.y=r.y));const nt=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=nt,B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Nr){if(H.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new $n(s.x,s.y,{format:_s,type:bi,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new rr(s.x,s.y,Dn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=Mi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=$e,B.map.depthTexture.magFilter=$e}else H.isPointLight?(B.map=new Lf(s.x),B.map.depthTexture=new Y0(s.x,oi)):(B.map=new $n(s.x,s.y),B.map.depthTexture=new rr(s.x,s.y,oi)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=Mi,this.type===Yo?(B.map.depthTexture.compareFunction=nt?$c:Xc,B.map.depthTexture.minFilter=Ke,B.map.depthTexture.magFilter=Ke):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=$e,B.map.depthTexture.magFilter=$e);B.camera.updateProjectionMatrix()}const ht=B.map.isWebGLCubeRenderTarget?6:1;for(let pt=0;pt<ht;pt++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,pt),i.clear();else{pt===0&&(i.setRenderTarget(B.map),i.clear());const At=B.getViewport(pt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),k.viewport(o)}if(H.isPointLight){const At=B.camera,Kt=B.matrix,yt=H.distance||At.far;yt!==At.far&&(At.far=yt,At.updateProjectionMatrix()),Sr.setFromMatrixPosition(H.matrixWorld),At.position.copy(Sr),fl.copy(At.position),fl.add(vy[pt]),At.up.copy(_y[pt]),At.lookAt(fl),At.updateMatrixWorld(),Kt.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Qd.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Qd,At.coordinateSystem,At.reversedDepth)}else B.updateMatrices(H);n=B.getFrustum(),b(E,g,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===Nr&&y(B,g),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,C,A)};function y(v,E){const g=t.update(S);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new $n(s.x,s.y,{format:_s,type:bi})),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,g,d,S,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,g,p,S,null)}function M(v,E,g,_){let C=null;const A=g.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(A!==void 0)C=A;else if(C=g.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const k=C.uuid,F=E.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let L=O[F];L===void 0&&(L=C.clone(),O[F]=L,E.addEventListener("dispose",P)),C=L}if(C.visible=E.visible,C.wireframe=E.wireframe,_===Nr?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:u[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const k=i.properties.get(C);k.light=g}return C}function b(v,E,g,_,C){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===Nr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,v.matrixWorld);const F=t.update(v),O=v.material;if(Array.isArray(O)){const L=F.groups;for(let H=0,B=L.length;H<B;H++){const et=L[H],nt=O[et.materialIndex];if(nt&&nt.visible){const ht=M(v,nt,_,C);v.onBeforeShadow(i,v,E,g,F,ht,et),i.renderBufferDirect(g,null,F,ht,v,et),v.onAfterShadow(i,v,E,g,F,ht,et)}}}else if(O.visible){const L=M(v,O,_,C);v.onBeforeShadow(i,v,E,g,F,L,null),i.renderBufferDirect(g,null,F,L,v,null),v.onAfterShadow(i,v,E,g,F,L,null)}}const k=v.children;for(let F=0,O=k.length;F<O;F++)b(k[F],E,g,_,C)}function P(v){v.target.removeEventListener("dispose",P);for(const g in c){const _=c[g],C=v.target.uuid;C in _&&(_[C].dispose(),delete _[C])}}}function by(i,t){function e(){let z=!1;const dt=new Se;let it=null;const Nt=new Se(0,0,0,0);return{setMask:function(gt){it!==gt&&!z&&(i.colorMask(gt,gt,gt,gt),it=gt)},setLocked:function(gt){z=gt},setClear:function(gt,lt,Ht,ne,ke){ke===!0&&(gt*=ne,lt*=ne,Ht*=ne),dt.set(gt,lt,Ht,ne),Nt.equals(dt)===!1&&(i.clearColor(gt,lt,Ht,ne),Nt.copy(dt))},reset:function(){z=!1,it=null,Nt.set(-1,0,0,0)}}}function n(){let z=!1,dt=!1,it=null,Nt=null,gt=null;return{setReversed:function(lt){if(dt!==lt){const Ht=t.get("EXT_clip_control");lt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),dt=lt;const ne=gt;gt=null,this.setClear(ne)}},getReversed:function(){return dt},setTest:function(lt){lt?Z(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(lt){it!==lt&&!z&&(i.depthMask(lt),it=lt)},setFunc:function(lt){if(dt&&(lt=b0[lt]),Nt!==lt){switch(lt){case Dl:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Ul:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case Ol:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case zl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=lt}},setLocked:function(lt){z=lt},setClear:function(lt){gt!==lt&&(gt=lt,dt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){z=!1,it=null,Nt=null,gt=null,dt=!1}}}function s(){let z=!1,dt=null,it=null,Nt=null,gt=null,lt=null,Ht=null,ne=null,ke=null;return{setTest:function(ye){z||(ye?Z(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(ye){dt!==ye&&!z&&(i.stencilMask(ye),dt=ye)},setFunc:function(ye,En,vn){(it!==ye||Nt!==En||gt!==vn)&&(i.stencilFunc(ye,En,vn),it=ye,Nt=En,gt=vn)},setOp:function(ye,En,vn){(lt!==ye||Ht!==En||ne!==vn)&&(i.stencilOp(ye,En,vn),lt=ye,Ht=En,ne=vn)},setLocked:function(ye){z=ye},setClear:function(ye){ke!==ye&&(i.clearStencil(ye),ke=ye)},reset:function(){z=!1,dt=null,it=null,Nt=null,gt=null,lt=null,Ht=null,ne=null,ke=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d={},p=new WeakMap,x=[],S=null,m=!1,f=null,y=null,M=null,b=null,P=null,v=null,E=null,g=new ee(0,0,0),_=0,C=!1,A=null,k=null,F=null,O=null,L=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,et=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(nt)[1]),B=et>=1):nt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),B=et>=2);let ht=null,pt={};const At=i.getParameter(i.SCISSOR_BOX),Kt=i.getParameter(i.VIEWPORT),yt=new Se().fromArray(At),wt=new Se().fromArray(Kt);function j(z,dt,it,Nt){const gt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(z,lt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<it;Ht++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(dt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return lt}const st={};st[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(ir),Et(!1),xt(Uh),Z(i.CULL_FACE),ut(xi);function Z(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ct(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Lt(z,dt){return d[z]!==dt?(i.bindFramebuffer(z,dt),d[z]=dt,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Dt(z,dt){let it=x,Nt=!1;if(z){it=p.get(dt),it===void 0&&(it=[],p.set(dt,it));const gt=z.textures;if(it.length!==gt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ht=gt.length;lt<Ht;lt++)it[lt]=i.COLOR_ATTACHMENT0+lt;it.length=gt.length,Nt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(it)}function ft(z){return S!==z?(i.useProgram(z),S=z,!0):!1}const Ot={[ls]:i.FUNC_ADD,[Vp]:i.FUNC_SUBTRACT,[Gp]:i.FUNC_REVERSE_SUBTRACT};Ot[Wp]=i.MIN,Ot[Xp]=i.MAX;const ot={[$p]:i.ZERO,[Yp]:i.ONE,[qp]:i.SRC_COLOR,[Ll]:i.SRC_ALPHA,[t0]:i.SRC_ALPHA_SATURATE,[Jp]:i.DST_COLOR,[Zp]:i.DST_ALPHA,[jp]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Kp]:i.ONE_MINUS_DST_ALPHA,[e0]:i.CONSTANT_COLOR,[n0]:i.ONE_MINUS_CONSTANT_COLOR,[i0]:i.CONSTANT_ALPHA,[s0]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(z,dt,it,Nt,gt,lt,Ht,ne,ke,ye){if(z===xi){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),z!==Hp){if(z!==f||ye!==C){if((y!==ls||P!==ls)&&(i.blendEquation(i.FUNC_ADD),y=ls,P=ls),ye)switch(z){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pe("WebGLState: Invalid blending: ",z);break}else switch(z){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bh:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zh:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",z);break}M=null,b=null,v=null,E=null,g.set(0,0,0),_=0,f=z,C=ye}return}gt=gt||dt,lt=lt||it,Ht=Ht||Nt,(dt!==y||gt!==P)&&(i.blendEquationSeparate(Ot[dt],Ot[gt]),y=dt,P=gt),(it!==M||Nt!==b||lt!==v||Ht!==E)&&(i.blendFuncSeparate(ot[it],ot[Nt],ot[lt],ot[Ht]),M=it,b=Nt,v=lt,E=Ht),(ne.equals(g)===!1||ke!==_)&&(i.blendColor(ne.r,ne.g,ne.b,ke),g.copy(ne),_=ke),f=z,C=!1}function at(z,dt){z.side===Gn?ct(i.CULL_FACE):Z(i.CULL_FACE);let it=z.side===Je;dt&&(it=!it),Et(it),z.blending===Js&&z.transparent===!1?ut(xi):ut(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Nt=z.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),U(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(z){A!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),A=z)}function xt(z){z!==Bp?(Z(i.CULL_FACE),z!==k&&(z===Uh?i.cullFace(i.BACK):z===zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),k=z}function Jt(z){z!==F&&(B&&i.lineWidth(z),F=z)}function U(z,dt,it){z?(Z(i.POLYGON_OFFSET_FILL),(O!==dt||L!==it)&&(O=dt,L=it,o.getReversed()&&(dt=-dt),i.polygonOffset(dt,it))):ct(i.POLYGON_OFFSET_FILL)}function qt(z){z?Z(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Gt(z){z===void 0&&(z=i.TEXTURE0+H-1),ht!==z&&(i.activeTexture(z),ht=z)}function Qt(z,dt,it){it===void 0&&(ht===null?it=i.TEXTURE0+H-1:it=ht);let Nt=pt[it];Nt===void 0&&(Nt={type:void 0,texture:void 0},pt[it]=Nt),(Nt.type!==z||Nt.texture!==dt)&&(ht!==it&&(i.activeTexture(it),ht=it),i.bindTexture(z,dt||st[z]),Nt.type=z,Nt.texture=dt)}function mt(){const z=pt[ht];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function w(){try{i.texSubImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function I(){try{i.compressedTexSubImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function tt(){try{i.texStorage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function Q(){try{i.texStorage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function X(){try{i.texImage2D(...arguments)}catch(z){pe("WebGLState:",z)}}function J(){try{i.texImage3D(...arguments)}catch(z){pe("WebGLState:",z)}}function bt(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function Rt(z,dt){u[z]!==dt&&(i.pixelStorei(z,dt),u[z]=dt)}function Mt(z){yt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),yt.copy(z))}function vt(z){wt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),wt.copy(z))}function $t(z,dt){let it=c.get(dt);it===void 0&&(it=new WeakMap,c.set(dt,it));let Nt=it.get(z);Nt===void 0&&(Nt=i.getUniformBlockIndex(dt,z.name),it.set(z,Nt))}function rt(z,dt){const Nt=c.get(dt).get(z);l.get(dt)!==Nt&&(i.uniformBlockBinding(dt,Nt,z.__bindingPointIndex),l.set(dt,Nt))}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ht=null,pt={},d={},p=new WeakMap,x=[],S=null,m=!1,f=null,y=null,M=null,b=null,P=null,v=null,E=null,g=new ee(0,0,0),_=0,C=!1,A=null,k=null,F=null,O=null,L=null,yt.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ct,bindFramebuffer:Lt,drawBuffers:Dt,useProgram:ft,setBlending:ut,setMaterial:at,setFlipSided:Et,setCullFace:xt,setLineWidth:Jt,setPolygonOffset:U,setScissorTest:qt,activeTexture:Gt,bindTexture:Qt,unbindTexture:mt,compressedTexImage2D:fe,compressedTexImage3D:R,texImage2D:X,texImage3D:J,pixelStorei:Rt,getParameter:bt,updateUBOMapping:$t,uniformBlockBinding:rt,texStorage2D:tt,texStorage3D:Q,texSubImage2D:w,texSubImage3D:W,compressedTexSubImage2D:I,compressedTexSubImage3D:q,scissor:Mt,viewport:vt,reset:Pt}}function My(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap,u=new Set;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,w){return x?new OffscreenCanvas(R,w):ra("canvas")}function m(R,w,W){let I=1;const q=fe(R);if((q.width>W||q.height>W)&&(I=W/Math.max(q.width,q.height)),I<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const tt=Math.floor(I*q.width),Q=Math.floor(I*q.height);d===void 0&&(d=S(tt,Q));const X=w?S(tt,Q):d;return X.width=tt,X.height=Q,X.getContext("2d").drawImage(R,0,0,tt,Q),jt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+tt+"x"+Q+")."),X}else return"data"in R&&jt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function f(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,w,W,I,q,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q;I&&(Q=t.get("EXT_texture_norm16"),Q||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=w;if(w===i.RED&&(W===i.FLOAT&&(X=i.R32F),W===i.HALF_FLOAT&&(X=i.R16F),W===i.UNSIGNED_BYTE&&(X=i.R8),W===i.UNSIGNED_SHORT&&Q&&(X=Q.R16_EXT),W===i.SHORT&&Q&&(X=Q.R16_SNORM_EXT)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(X=i.R8UI),W===i.UNSIGNED_SHORT&&(X=i.R16UI),W===i.UNSIGNED_INT&&(X=i.R32UI),W===i.BYTE&&(X=i.R8I),W===i.SHORT&&(X=i.R16I),W===i.INT&&(X=i.R32I)),w===i.RG&&(W===i.FLOAT&&(X=i.RG32F),W===i.HALF_FLOAT&&(X=i.RG16F),W===i.UNSIGNED_BYTE&&(X=i.RG8),W===i.UNSIGNED_SHORT&&Q&&(X=Q.RG16_EXT),W===i.SHORT&&Q&&(X=Q.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(X=i.RG8UI),W===i.UNSIGNED_SHORT&&(X=i.RG16UI),W===i.UNSIGNED_INT&&(X=i.RG32UI),W===i.BYTE&&(X=i.RG8I),W===i.SHORT&&(X=i.RG16I),W===i.INT&&(X=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(X=i.RGB8UI),W===i.UNSIGNED_SHORT&&(X=i.RGB16UI),W===i.UNSIGNED_INT&&(X=i.RGB32UI),W===i.BYTE&&(X=i.RGB8I),W===i.SHORT&&(X=i.RGB16I),W===i.INT&&(X=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),W===i.UNSIGNED_INT&&(X=i.RGBA32UI),W===i.BYTE&&(X=i.RGBA8I),W===i.SHORT&&(X=i.RGBA16I),W===i.INT&&(X=i.RGBA32I)),w===i.RGB&&(W===i.UNSIGNED_SHORT&&Q&&(X=Q.RGB16_EXT),W===i.SHORT&&Q&&(X=Q.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),w===i.RGBA){const J=tt?sa:me.getTransfer(q);W===i.FLOAT&&(X=i.RGBA32F),W===i.HALF_FLOAT&&(X=i.RGBA16F),W===i.UNSIGNED_BYTE&&(X=J===we?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Q&&(X=Q.RGBA16_EXT),W===i.SHORT&&Q&&(X=Q.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function P(R,w){let W;return R?w===null||w===oi||w===Yr?W=i.DEPTH24_STENCIL8:w===Dn?W=i.DEPTH32F_STENCIL8:w===$r&&(W=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===oi||w===Yr?W=i.DEPTH_COMPONENT24:w===Dn?W=i.DEPTH_COMPONENT32F:w===$r&&(W=i.DEPTH_COMPONENT16),W}function v(R,w){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==$e&&R.minFilter!==Ke?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){const w=R.target;w.removeEventListener("dispose",E),_(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function g(R){const w=R.target;w.removeEventListener("dispose",g),A(w)}function _(R){const w=n.get(R);if(w.__webglInit===void 0)return;const W=R.source,I=p.get(W);if(I){const q=I[w.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(R),Object.keys(I).length===0&&p.delete(W)}n.remove(R)}function C(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const W=R.source,I=p.get(W);delete I[w.__cacheKey],o.memory.textures--}function A(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(w.__webglFramebuffer[I]))for(let q=0;q<w.__webglFramebuffer[I].length;q++)i.deleteFramebuffer(w.__webglFramebuffer[I][q]);else i.deleteFramebuffer(w.__webglFramebuffer[I]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[I])}else{if(Array.isArray(w.__webglFramebuffer))for(let I=0;I<w.__webglFramebuffer.length;I++)i.deleteFramebuffer(w.__webglFramebuffer[I]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let I=0;I<w.__webglColorRenderbuffer.length;I++)w.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[I]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=R.textures;for(let I=0,q=W.length;I<q;I++){const tt=n.get(W[I]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(W[I])}n.remove(R)}let k=0;function F(){k=0}function O(){return k}function L(R){k=R}function H(){const R=k;return R>=s.maxTextures&&jt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function B(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function et(R,w){const W=n.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const I=R.image;if(I===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(W,R,w);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function nt(R,w){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ct(W,R,w);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function ht(R,w){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ct(W,R,w);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function pt(R,w){const W=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&W.__version!==R.version){Lt(W,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}const At={[Vl]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Gl]:i.MIRRORED_REPEAT},Kt={[$e]:i.NEAREST,[l0]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},yt={[u0]:i.NEVER,[x0]:i.ALWAYS,[f0]:i.LESS,[Xc]:i.LEQUAL,[p0]:i.EQUAL,[$c]:i.GEQUAL,[m0]:i.GREATER,[g0]:i.NOTEQUAL};function wt(R,w){if(w.type===Dn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ke||w.magFilter===ka||w.magFilter===oo||w.magFilter===ds||w.minFilter===Ke||w.minFilter===ka||w.minFilter===oo||w.minFilter===ds)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,At[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,At[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,At[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Kt[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Kt[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,yt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$e||w.minFilter!==oo&&w.minFilter!==ds||w.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function j(R,w){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));const I=w.source;let q=p.get(I);q===void 0&&(q={},p.set(I,q));const tt=B(w);if(tt!==R.__cacheKey){q[tt]===void 0&&(q[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),q[tt].usedTimes++;const Q=q[R.__cacheKey];Q!==void 0&&(q[R.__cacheKey].usedTimes--,Q.usedTimes===0&&C(w)),R.__cacheKey=tt,R.__webglTexture=q[tt].texture}return W}function st(R,w,W){return Math.floor(Math.floor(R/W)/w)}function Z(R,w,W,I){const tt=R.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,W,I,w.data);else{tt.sort((Rt,Mt)=>Rt.start-Mt.start);let Q=0;for(let Rt=1;Rt<tt.length;Rt++){const Mt=tt[Q],vt=tt[Rt],$t=Mt.start+Mt.count,rt=st(vt.start,w.width,4),Pt=st(Mt.start,w.width,4);vt.start<=$t+1&&rt===Pt&&st(vt.start+vt.count-1,w.width,4)===rt?Mt.count=Math.max(Mt.count,vt.start+vt.count-Mt.start):(++Q,tt[Q]=vt)}tt.length=Q+1;const X=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Rt=0,Mt=tt.length;Rt<Mt;Rt++){const vt=tt[Rt],$t=Math.floor(vt.start/4),rt=Math.ceil(vt.count/4),Pt=$t%w.width,z=Math.floor($t/w.width),dt=rt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Pt,z,dt,it,W,I,w.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function ct(R,w,W){let I=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(I=i.TEXTURE_3D);const q=j(R,w),tt=w.source;e.bindTexture(I,R.__webglTexture,i.TEXTURE0+W);const Q=n.get(tt);if(tt.version!==Q.__version||q===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const it=me.getPrimaries(me.workingColorSpace),Nt=w.colorSpace===mi?null:me.getPrimaries(w.colorSpace),gt=w.colorSpace===mi||it===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let J=m(w.image,!1,s.maxTextureSize);J=mt(w,J);const bt=r.convert(w.format,w.colorSpace),Rt=r.convert(w.type);let Mt=b(w.internalFormat,bt,Rt,w.normalized,w.colorSpace,w.isVideoTexture);wt(I,w);let vt;const $t=w.mipmaps,rt=w.isVideoTexture!==!0,Pt=Q.__version===void 0||q===!0,z=tt.dataReady,dt=v(w,J);if(w.isDepthTexture)Mt=P(w.format===us,w.type),Pt&&(rt?e.texStorage2D(i.TEXTURE_2D,1,Mt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Mt,J.width,J.height,0,bt,Rt,null));else if(w.isDataTexture)if($t.length>0){rt&&Pt&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,$t[0].width,$t[0].height);for(let it=0,Nt=$t.length;it<Nt;it++)vt=$t[it],rt?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,vt.width,vt.height,bt,Rt,vt.data):e.texImage2D(i.TEXTURE_2D,it,Mt,vt.width,vt.height,0,bt,Rt,vt.data);w.generateMipmaps=!1}else rt?(Pt&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,J.width,J.height),z&&Z(w,J,bt,Rt)):e.texImage2D(i.TEXTURE_2D,0,Mt,J.width,J.height,0,bt,Rt,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,$t[0].width,$t[0].height,J.depth);for(let it=0,Nt=$t.length;it<Nt;it++)if(vt=$t[it],w.format!==Nn)if(bt!==null)if(rt){if(z)if(w.layerUpdates.size>0){const gt=Pd(vt.width,vt.height,w.format,w.type);for(const lt of w.layerUpdates){const Ht=vt.data.subarray(lt*gt/vt.data.BYTES_PER_ELEMENT,(lt+1)*gt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,lt,vt.width,vt.height,1,bt,Ht)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,vt.width,vt.height,J.depth,bt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Mt,vt.width,vt.height,J.depth,0,vt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,vt.width,vt.height,J.depth,bt,Rt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Mt,vt.width,vt.height,J.depth,0,bt,Rt,vt.data)}else{rt&&Pt&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,$t[0].width,$t[0].height);for(let it=0,Nt=$t.length;it<Nt;it++)vt=$t[it],w.format!==Nn?bt!==null?rt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Mt,vt.width,vt.height,0,vt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,vt.width,vt.height,bt,Rt,vt.data):e.texImage2D(i.TEXTURE_2D,it,Mt,vt.width,vt.height,0,bt,Rt,vt.data)}else if(w.isDataArrayTexture)if(rt){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,J.width,J.height,J.depth),z)if(w.layerUpdates.size>0){const it=Pd(J.width,J.height,w.format,w.type);for(const Nt of w.layerUpdates){const gt=J.data.subarray(Nt*it/J.data.BYTES_PER_ELEMENT,(Nt+1)*it/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,J.width,J.height,1,bt,Rt,gt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,bt,Rt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,J.width,J.height,J.depth,0,bt,Rt,J.data);else if(w.isData3DTexture)rt?(Pt&&e.texStorage3D(i.TEXTURE_3D,dt,Mt,J.width,J.height,J.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,bt,Rt,J.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,J.width,J.height,J.depth,0,bt,Rt,J.data);else if(w.isFramebufferTexture){if(Pt)if(rt)e.texStorage2D(i.TEXTURE_2D,dt,Mt,J.width,J.height);else{let it=J.width,Nt=J.height;for(let gt=0;gt<dt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Mt,it,Nt,0,bt,Rt,null),it>>=1,Nt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),u.add(w),it.onpaint=ne=>{const ke=ne.changedElements;for(const ye of u)ke.includes(ye.image)&&(ye.needsUpdate=!0)},it.requestPaint();return}const Nt=0,gt=i.RGBA,lt=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Nt,gt,lt,Ht,J),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($t.length>0){if(rt&&Pt){const it=fe($t[0]);e.texStorage2D(i.TEXTURE_2D,dt,Mt,it.width,it.height)}for(let it=0,Nt=$t.length;it<Nt;it++)vt=$t[it],rt?z&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,bt,Rt,vt):e.texImage2D(i.TEXTURE_2D,it,Mt,bt,Rt,vt);w.generateMipmaps=!1}else if(rt){if(Pt){const it=fe(J);e.texStorage2D(i.TEXTURE_2D,dt,Mt,it.width,it.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Rt,J)}else e.texImage2D(i.TEXTURE_2D,0,Mt,bt,Rt,J);f(w)&&y(I),Q.__version=tt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Lt(R,w,W){if(w.image.length!==6)return;const I=j(R,w),q=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const tt=n.get(q);if(q.version!==tt.__version||I===!0){e.activeTexture(i.TEXTURE0+W);const Q=me.getPrimaries(me.workingColorSpace),X=w.colorSpace===mi?null:me.getPrimaries(w.colorSpace),J=w.colorSpace===mi||Q===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const bt=w.isCompressedTexture||w.image[0].isCompressedTexture,Rt=w.image[0]&&w.image[0].isDataTexture,Mt=[];for(let lt=0;lt<6;lt++)!bt&&!Rt?Mt[lt]=m(w.image[lt],!0,s.maxCubemapSize):Mt[lt]=Rt?w.image[lt].image:w.image[lt],Mt[lt]=mt(w,Mt[lt]);const vt=Mt[0],$t=r.convert(w.format,w.colorSpace),rt=r.convert(w.type),Pt=b(w.internalFormat,$t,rt,w.normalized,w.colorSpace),z=w.isVideoTexture!==!0,dt=tt.__version===void 0||I===!0,it=q.dataReady;let Nt=v(w,vt);wt(i.TEXTURE_CUBE_MAP,w);let gt;if(bt){z&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Pt,vt.width,vt.height);for(let lt=0;lt<6;lt++){gt=Mt[lt].mipmaps;for(let Ht=0;Ht<gt.length;Ht++){const ne=gt[Ht];w.format!==Nn?$t!==null?z?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,0,0,ne.width,ne.height,$t,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,Pt,ne.width,ne.height,0,ne.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,0,0,ne.width,ne.height,$t,rt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,Pt,ne.width,ne.height,0,$t,rt,ne.data)}}}else{if(gt=w.mipmaps,z&&dt){gt.length>0&&Nt++;const lt=fe(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Pt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Rt){z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Mt[lt].width,Mt[lt].height,$t,rt,Mt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Pt,Mt[lt].width,Mt[lt].height,0,$t,rt,Mt[lt].data);for(let Ht=0;Ht<gt.length;Ht++){const ke=gt[Ht].image[lt].image;z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,0,0,ke.width,ke.height,$t,rt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,Pt,ke.width,ke.height,0,$t,rt,ke.data)}}else{z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,$t,rt,Mt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Pt,$t,rt,Mt[lt]);for(let Ht=0;Ht<gt.length;Ht++){const ne=gt[Ht];z?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,0,0,$t,rt,ne.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,Pt,$t,rt,ne.image[lt])}}}f(w)&&y(i.TEXTURE_CUBE_MAP),tt.__version=q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Dt(R,w,W,I,q,tt){const Q=r.convert(W.format,W.colorSpace),X=r.convert(W.type),J=b(W.internalFormat,Q,X,W.normalized,W.colorSpace),bt=n.get(w),Rt=n.get(W);if(Rt.__renderTarget=w,!bt.__hasExternalTextures){const Mt=Math.max(1,w.width>>tt),vt=Math.max(1,w.height>>tt);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,tt,J,Mt,vt,w.depth,0,Q,X,null):e.texImage2D(q,tt,J,Mt,vt,0,Q,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,q,Rt.__webglTexture,0,qt(w)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,q,Rt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(R,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const I=w.depthTexture,q=I&&I.isDepthTexture?I.type:null,tt=P(w.stencilBuffer,q),Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(w),tt,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(w),tt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,R)}else{const I=w.textures;for(let q=0;q<I.length;q++){const tt=I[q],Q=r.convert(tt.format,tt.colorSpace),X=r.convert(tt.type),J=b(tt.internalFormat,Q,X,tt.normalized,tt.colorSpace);Gt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(w),J,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(w),J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(R,w,W){const I=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(w.depthTexture);if(q.__renderTarget=w,(!q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I){if(q.__webglInit===void 0&&(q.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),wt(i.TEXTURE_CUBE_MAP,w.depthTexture);const bt=r.convert(w.depthTexture.format),Rt=r.convert(w.depthTexture.type);let Mt;w.depthTexture.format===Mi?Mt=i.DEPTH_COMPONENT24:w.depthTexture.format===us&&(Mt=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Mt,w.width,w.height,0,bt,Rt,null)}}else et(w.depthTexture,0);const tt=q.__webglTexture,Q=qt(w),X=I?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,J=w.depthTexture.format===us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Mi)Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,X,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,J,X,tt,0);else if(w.depthTexture.format===us)Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,X,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,J,X,tt,0);else throw new Error("Unknown depthTexture format")}function ot(R){const w=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const I=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),I){const q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,I.removeEventListener("dispose",q)};I.addEventListener("dispose",q),w.__depthDisposeCallback=q}w.__boundDepthTexture=I}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let I=0;I<6;I++)Ot(w.__webglFramebuffer[I],R,I);else{const I=R.texture.mipmaps;I&&I.length>0?Ot(w.__webglFramebuffer[0],R,0):Ot(w.__webglFramebuffer,R,0)}else if(W){w.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[I]),w.__webglDepthbuffer[I]===void 0)w.__webglDepthbuffer[I]=i.createRenderbuffer(),ft(w.__webglDepthbuffer[I],R,!1);else{const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,tt)}}else{const I=R.texture.mipmaps;if(I&&I.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ft(w.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(R,w,W){const I=n.get(R);w!==void 0&&Dt(I.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ot(R)}function at(R){const w=R.texture,W=n.get(R),I=n.get(w);R.addEventListener("dispose",g);const q=R.textures,tt=R.isWebGLCubeRenderTarget===!0,Q=q.length>1;if(Q||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=w.version,o.memory.textures++),tt){W.__webglFramebuffer=[];for(let X=0;X<6;X++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[X]=[];for(let J=0;J<w.mipmaps.length;J++)W.__webglFramebuffer[X][J]=i.createFramebuffer()}else W.__webglFramebuffer[X]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let X=0;X<w.mipmaps.length;X++)W.__webglFramebuffer[X]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Q)for(let X=0,J=q.length;X<J;X++){const bt=n.get(q[X]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Gt(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let X=0;X<q.length;X++){const J=q[X];W.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[X]);const bt=r.convert(J.format,J.colorSpace),Rt=r.convert(J.type),Mt=b(J.internalFormat,bt,Rt,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),vt=qt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,W.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),wt(i.TEXTURE_CUBE_MAP,w);for(let X=0;X<6;X++)if(w.mipmaps&&w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)Dt(W.__webglFramebuffer[X][J],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,J);else Dt(W.__webglFramebuffer[X],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(w)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){for(let X=0,J=q.length;X<J;X++){const bt=q[X],Rt=n.get(bt);let Mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Rt.__webglTexture),wt(Mt,bt),Dt(W.__webglFramebuffer,R,bt,i.COLOR_ATTACHMENT0+X,Mt,0),f(bt)&&y(Mt)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(X=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,I.__webglTexture),wt(X,w),w.mipmaps&&w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)Dt(W.__webglFramebuffer[J],R,w,i.COLOR_ATTACHMENT0,X,J);else Dt(W.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,X,0);f(w)&&y(X),e.unbindTexture()}R.depthBuffer&&ot(R)}function Et(R){const w=R.textures;for(let W=0,I=w.length;W<I;W++){const q=w[W];if(f(q)){const tt=M(R),Q=n.get(q).__webglTexture;e.bindTexture(tt,Q),y(tt),e.unbindTexture()}}}const xt=[],Jt=[];function U(R){if(R.samples>0){if(Gt(R)===!1){const w=R.textures,W=R.width,I=R.height;let q=i.COLOR_BUFFER_BIT;const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(R),X=w.length>1;if(X)for(let bt=0;bt<w.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let bt=0;bt<w.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[bt]);const Rt=n.get(w[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,W,I,0,0,W,I,q,i.NEAREST),l===!0&&(xt.length=0,Jt.length=0,xt.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(xt.push(tt),Jt.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let bt=0;bt<w.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[bt]);const Rt=n.get(w[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function qt(R){return Math.min(s.maxSamples,R.samples)}function Gt(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qt(R){const w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function mt(R,w){const W=R.colorSpace,I=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==ia&&W!==mi&&(me.getTransfer(W)===we?(I!==Nn||q!==wn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",W)),w}function fe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.getTextureUnits=O,this.setTextureUnits=L,this.setTexture2D=et,this.setTexture2DArray=nt,this.setTexture3D=ht,this.setTextureCube=pt,this.rebindTextures=ut,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wy(i,t){function e(n,s=mi){let r;const o=me.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sf)return i.BYTE;if(n===rf)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===lf)return i.ALPHA;if(n===cf)return i.RGB;if(n===Nn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===ma)return i.RED;if(n===Vc)return i.RED_INTEGER;if(n===_s)return i.RG;if(n===Gc)return i.RG_INTEGER;if(n===Wc)return i.RGBA_INTEGER;if(n===qo||n===jo||n===Zo||n===Ko)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===$l||n===Yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===jl||n===Zl||n===Kl||n===Jl||n===ea||n===Ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===jl)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kl)return r.COMPRESSED_R11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return r.COMPRESSED_RG11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===dc||n===uc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===mc||n===gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pc)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===vc||n===na||n===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ey=`
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

}`;class Ay{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:Sy,fragmentShader:Ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ty extends Ss{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",m=new Ay,f={},y=e.getContextAttributes();let M=null,b=null;const P=[],v=[],E=new St;let g=null;const _=new xn;_.viewport=new Se;const C=new xn;C.viewport=new Se;const A=[_,C],k=new Nm;let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=P[j];return st===void 0&&(st=new Ba,P[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=P[j];return st===void 0&&(st=new Ba,P[j]=st),st.getGripSpace()},this.getHand=function(j){let st=P[j];return st===void 0&&(st=new Ba,P[j]=st),st.getHandSpace()};function L(j){const st=v.indexOf(j.inputSource);if(st===-1)return;const Z=P[st];Z!==void 0&&(Z.update(j.inputSource,j.frame,c||o),Z.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",B);for(let j=0;j<P.length;j++){const st=v[j];st!==null&&(v[j]=null,P[j].disconnect(st))}F=null,O=null,m.reset();for(const j in f)delete f[j];t.setRenderTarget(M),p=null,d=null,u=null,s=null,b=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",H),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ct=null,Lt=null;y.depth&&(Lt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=y.stencil?us:Mi,ct=y.stencil?Yr:oi);const Dt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new $n(d.textureWidth,d.textureHeight,{format:Nn,type:wn,depthTexture:new rr(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new $n(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(j){for(let st=0;st<j.removed.length;st++){const Z=j.removed[st],ct=v.indexOf(Z);ct>=0&&(v[ct]=null,P[ct].disconnect(Z))}for(let st=0;st<j.added.length;st++){const Z=j.added[st];let ct=v.indexOf(Z);if(ct===-1){for(let Dt=0;Dt<P.length;Dt++)if(Dt>=v.length){v.push(Z),ct=Dt;break}else if(v[Dt]===null){v[Dt]=Z,ct=Dt;break}if(ct===-1)break}const Lt=P[ct];Lt&&Lt.connect(Z)}}const et=new N,nt=new N;function ht(j,st,Z){et.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(Z.matrixWorld);const ct=et.distanceTo(nt),Lt=st.projectionMatrix.elements,Dt=Z.projectionMatrix.elements,ft=Lt[14]/(Lt[10]-1),Ot=Lt[14]/(Lt[10]+1),ot=(Lt[9]+1)/Lt[5],ut=(Lt[9]-1)/Lt[5],at=(Lt[8]-1)/Lt[0],Et=(Dt[8]+1)/Dt[0],xt=ft*at,Jt=ft*Et,U=ct/(-at+Et),qt=U*-at;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qt),j.translateZ(U),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Lt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Gt=ft+U,Qt=Ot+U,mt=xt-qt,fe=Jt+(ct-qt),R=ot*Ot/Qt*Gt,w=ut*Ot/Qt*Gt;j.projectionMatrix.makePerspective(mt,fe,R,w,Gt,Qt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function pt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,Z=j.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),k.near=C.near=_.near=st,k.far=C.far=_.far=Z,(F!==k.near||O!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,O=k.far),k.layers.mask=j.layers.mask|6,_.layers.mask=k.layers.mask&-5,C.layers.mask=k.layers.mask&-3;const ct=j.parent,Lt=k.cameras;pt(k,ct);for(let Dt=0;Dt<Lt.length;Dt++)pt(Lt[Dt],ct);Lt.length===2?ht(k,_,C):k.projectionMatrix.copy(_.projectionMatrix),At(j,k,ct)};function At(j,st,Z){Z===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Z.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Mc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(j){return f[j]};let Kt=null;function yt(j,st){if(h=st.getViewerPose(c||o),x=st,h!==null){const Z=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ct=!1;Z.length!==k.cameras.length&&(k.cameras.length=0,ct=!0);for(let Ot=0;Ot<Z.length;Ot++){const ot=Z[Ot];let ut=null;if(p!==null)ut=p.getViewport(ot);else{const Et=u.getViewSubImage(d,ot);ut=Et.viewport,Ot===0&&(t.setRenderTargetTextures(b,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(b))}let at=A[Ot];at===void 0&&(at=new xn,at.layers.enable(Ot),at.viewport=new Se,A[Ot]=at),at.matrix.fromArray(ot.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ot.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ut.x,ut.y,ut.width,ut.height),Ot===0&&(k.matrix.copy(at.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ct===!0&&k.cameras.push(at)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();const Ot=u.getDepthInformation(Z[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(Lt&&Lt.includes("camera-access")&&S){t.state.unbindTexture(),u=n.getBinding();for(let Ot=0;Ot<Z.length;Ot++){const ot=Z[Ot].camera;if(ot){let ut=f[ot];ut||(ut=new gf,f[ot]=ut);const at=u.getCameraImage(ot);ut.sourceTexture=at}}}}for(let Z=0;Z<P.length;Z++){const ct=v[Z],Lt=P[Z];ct!==null&&Lt!==void 0&&Lt.update(ct,st,c||o)}Kt&&Kt(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),x=null}const wt=new kf;wt.setAnimationLoop(yt),this.setAnimationLoop=function(j){Kt=j},this.dispose=function(){}}}const Cy=new te,Of=new se;Of.set(-1,0,0,0,1,0,0,0,1);function Ry(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Tf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,M,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),M=y.envMap,b=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Of),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Py(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const b=M.program;n.uniformBlockBinding(y,b)}function c(y,M){let b=s[y.id];b===void 0&&(x(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(y,P);const v=t.render.frame;r[y.id]!==v&&(d(y),r[y.id]=v)}function h(y){const M=u();y.__bindingPointIndex=M;const b=i.createBuffer(),P=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=s[y.id],b=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,E=b.length;v<E;v++){const g=Array.isArray(b[v])?b[v]:[b[v]];for(let _=0,C=g.length;_<C;_++){const A=g[_];if(p(A,v,_,P)===!0){const k=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let O=0;for(let L=0;L<F.length;L++){const H=F[L],B=S(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+O,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):ArrayBuffer.isView(H)?A.__data.set(new H.constructor(H.buffer,H.byteOffset,A.__data.length)):(H.toArray(A.__data,O),O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,M,b,P){const v=y.value,E=M+"_"+b;if(P[E]===void 0)return typeof v=="number"||typeof v=="boolean"?P[E]=v:ArrayBuffer.isView(v)?P[E]=v.slice():P[E]=v.clone(),!0;{const g=P[E];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return P[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(g.equals(v)===!1)return g.copy(v),!0}}return!1}function x(y){const M=y.uniforms;let b=0;const P=16;for(let E=0,g=M.length;E<g;E++){const _=Array.isArray(M[E])?M[E]:[M[E]];for(let C=0,A=_.length;C<A;C++){const k=_[C],F=Array.isArray(k.value)?k.value:[k.value];for(let O=0,L=F.length;O<L;O++){const H=F[O],B=S(H),et=b%P,nt=et%B.boundary,ht=et+nt;b+=nt,ht!==0&&P-ht<B.storage&&(b+=P-ht),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=B.storage}}}const v=b%P;return v>0&&(b+=P-v),y.__size=b,y.__cache={},this}function S(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}const ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function Fy(){return jn===null&&(jn=new xa(ky,16,16,_s,bi),jn.name="DFG_LUT",jn.minFilter=Ke,jn.magFilter=Ke,jn.wrapS=gi,jn.wrapT=gi,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class Ly{constructor(t={}){const{canvas:e=_0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=wn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const S=p,m=new Set([Wc,Gc,Vc]),f=new Set([wn,oi,$r,Yr,zc,Hc]),y=new Uint32Array(4),M=new Int32Array(4),b=new N;let P=null,v=null;const E=[],g=[];let _=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let A=!1,k=null;this._outputColorSpace=Ze;let F=0,O=0,L=null,H=-1,B=null;const et=new Se,nt=new Se;let ht=null;const pt=new ee(0);let At=0,Kt=e.width,yt=e.height,wt=1,j=null,st=null;const Z=new Se(0,0,Kt,yt),ct=new Se(0,0,Kt,yt);let Lt=!1;const Dt=new Jc;let ft=!1,Ot=!1;const ot=new te,ut=new N,at=new Se,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Jt(){return L===null?wt:1}let U=n;function qt(T,G){return e.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oc}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",ne,!1),U===null){const G="webgl2";if(U=qt(G,T),U===null)throw qt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw pe("WebGLRenderer: "+T.message),T}let Gt,Qt,mt,fe,R,w,W,I,q,tt,Q,X,J,bt,Rt,Mt,vt,$t,rt,Pt,z,dt,it;function Nt(){Gt=new Fv(U),Gt.init(),z=new wy(U,Gt),Qt=new Sv(U,Gt,t,z),mt=new by(U,Gt),Qt.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),fe=new Dv(U),R=new ay,w=new My(U,Gt,mt,R,Qt,z,fe),W=new kv(C),I=new Bm(U),dt=new Mv(U,I),q=new Lv(U,I,fe,dt),tt=new Uv(U,q,I,dt,fe),$t=new Nv(U,Qt,w),Rt=new Ev(R),Q=new oy(C,W,Gt,Qt,dt,Rt),X=new Ry(C,R),J=new cy,bt=new my(Gt),vt=new bv(C,W,mt,tt,x,l),Mt=new yy(C,tt,Qt),it=new Py(U,fe,Qt,mt),rt=new wv(U,Gt,fe),Pt=new Iv(U,Gt,fe),fe.programs=Q.programs,C.capabilities=Qt,C.extensions=Gt,C.properties=R,C.renderLists=J,C.shadowMap=Mt,C.state=mt,C.info=fe}Nt(),S!==wn&&(_=new Bv(S,e.width,e.height,s,r));const gt=new Ty(C,U);this.xr=gt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(T){T!==void 0&&(wt=T,this.setSize(Kt,yt,!1))},this.getSize=function(T){return T.set(Kt,yt)},this.setSize=function(T,G,K=!0){if(gt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=T,yt=G,e.width=Math.floor(T*wt),e.height=Math.floor(G*wt),K===!0&&(e.style.width=T+"px",e.style.height=G+"px"),_!==null&&_.setSize(e.width,e.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(Kt*wt,yt*wt).floor()},this.setDrawingBufferSize=function(T,G,K){Kt=T,yt=G,wt=K,e.width=Math.floor(T*K),e.height=Math.floor(G*K),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(S===wn){pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(et)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,G,K,$){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,G,K,$),mt.viewport(et.copy(Z).multiplyScalar(wt).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,G,K,$){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,G,K,$),mt.scissor(nt.copy(ct).multiplyScalar(wt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){mt.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){st=T},this.getClearColor=function(T){return T.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,K=!0){let $=0;if(T){let Y=!1;if(L!==null){const It=L.texture.format;Y=m.has(It)}if(Y){const It=L.texture.type,zt=f.has(It),Ft=vt.getClearColor(),Wt=vt.getClearAlpha(),Xt=Ft.r,oe=Ft.g,he=Ft.b;zt?(y[0]=Xt,y[1]=oe,y[2]=he,y[3]=Wt,U.clearBufferuiv(U.COLOR,0,y)):(M[0]=Xt,M[1]=oe,M[2]=he,M[3]=Wt,U.clearBufferiv(U.COLOR,0,M))}else $|=U.COLOR_BUFFER_BIT}G&&($|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),k=T},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),vt.dispose(),J.dispose(),bt.dispose(),R.dispose(),W.dispose(),tt.dispose(),dt.dispose(),it.dispose(),Q.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",ce),gt.removeEventListener("sessionend",Ee),An.stop()};function lt(T){T.preventDefault(),$h("WebGLRenderer: Context Lost."),A=!0}function Ht(){$h("WebGLRenderer: Context Restored."),A=!1;const T=fe.autoReset,G=Mt.enabled,K=Mt.autoUpdate,$=Mt.needsUpdate,Y=Mt.type;Nt(),fe.autoReset=T,Mt.enabled=G,Mt.autoUpdate=K,Mt.needsUpdate=$,Mt.type=Y}function ne(T){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ke(T){const G=T.target;G.removeEventListener("dispose",ke),ye(G)}function ye(T){En(T),R.remove(T)}function En(T){const G=R.get(T).programs;G!==void 0&&(G.forEach(function(K){Q.releaseProgram(K)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,K,$,Y,It){G===null&&(G=Et);const zt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ft=rp(T,G,K,$,Y);mt.setMaterial($,zt);let Wt=K.index,Xt=1;if($.wireframe===!0){if(Wt=q.getWireframeAttribute(K),Wt===void 0)return;Xt=2}const oe=K.drawRange,he=K.attributes.position;let Yt=oe.start*Xt,Ae=(oe.start+oe.count)*Xt;It!==null&&(Yt=Math.max(Yt,It.start*Xt),Ae=Math.min(Ae,(It.start+It.count)*Xt)),Wt!==null?(Yt=Math.max(Yt,0),Ae=Math.min(Ae,Wt.count)):he!=null&&(Yt=Math.max(Yt,0),Ae=Math.min(Ae,he.count));const Ue=Ae-Yt;if(Ue<0||Ue===1/0)return;dt.setup(Y,$,Ft,K,Wt);let De,Te=rt;if(Wt!==null&&(De=I.get(Wt),Te=Pt,Te.setIndex(De)),Y.isMesh)$.wireframe===!0?(mt.setLineWidth($.wireframeLinewidth*Jt()),Te.setMode(U.LINES)):Te.setMode(U.TRIANGLES);else if(Y.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),mt.setLineWidth(Qe*Jt()),Y.isLineSegments?Te.setMode(U.LINES):Y.isLineLoop?Te.setMode(U.LINE_LOOP):Te.setMode(U.LINE_STRIP)}else Y.isPoints?Te.setMode(U.POINTS):Y.isSprite&&Te.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))Te.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,Bt=Y._multiDrawCounts,_n=Y._multiDrawCount,ge=Wt?I.get(Wt).bytesPerElement:1,Tn=R.get($).currentProgram.getUniforms();for(let Yn=0;Yn<_n;Yn++)Tn.setValue(U,"_gl_DrawID",Yn),Te.render(Qe[Yn]/ge,Bt[Yn])}else if(Y.isInstancedMesh)Te.renderInstances(Yt,Ue,Y.count);else if(K.isInstancedBufferGeometry){const Qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Bt=Math.min(K.instanceCount,Qe);Te.renderInstances(Yt,Ue,Bt)}else Te.render(Yt,Ue)};function vn(T,G,K){T.transparent===!0&&T.side===Gn&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,ro(T,G,K),T.side=Gi,T.needsUpdate=!0,ro(T,G,K),T.side=Gn):ro(T,G,K)}this.compile=function(T,G,K=null){K===null&&(K=T),v=bt.get(K),v.init(G),g.push(v),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),T!==K&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const $=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const It=Y.material;if(It)if(Array.isArray(It))for(let zt=0;zt<It.length;zt++){const Ft=It[zt];vn(Ft,K,Y),$.add(Ft)}else vn(It,K,Y),$.add(It)}),v=g.pop(),$},this.compileAsync=function(T,G,K=null){const $=this.compile(T,G,K);return new Promise(Y=>{function It(){if($.forEach(function(zt){R.get(zt).currentProgram.isReady()&&$.delete(zt)}),$.size===0){Y(T);return}setTimeout(It,10)}Gt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Cs=null;function io(T){Cs&&Cs(T)}function ce(){An.stop()}function Ee(){An.start()}const An=new kf;An.setAnimationLoop(io),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(T){Cs=T,gt.setAnimationLoop(T),T===null?An.stop():An.start()},gt.addEventListener("sessionstart",ce),gt.addEventListener("sessionend",Ee),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;k!==null&&k.renderStart(T,G);const K=gt.enabled===!0&&gt.isPresenting===!0,$=_!==null&&(L===null||K)&&_.begin(C,L);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(G),G=gt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,G,L),v=bt.get(T,g.length),v.init(G),v.state.textureUnits=w.getTextureUnits(),g.push(v),ot.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Dt.setFromProjectionMatrix(ot,ii,G.reversedDepth),Ot=this.localClippingEnabled,ft=Rt.init(this.clippingPlanes,Ot),P=J.get(T,E.length),P.init(),E.push(P),gt.enabled===!0&&gt.isPresenting===!0){const zt=C.xr.getDepthSensingMesh();zt!==null&&fr(zt,G,-1/0,C.sortObjects)}fr(T,G,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(j,st),xt=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,xt&&vt.addToRenderList(P,T),this.info.render.frame++,ft===!0&&Rt.beginShadows();const Y=v.state.shadowsArray;if(Mt.render(Y,T,G),ft===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&_.hasRenderPass())===!1){const zt=P.opaque,Ft=P.transmissive;if(v.setupLights(),G.isArrayCamera){const Wt=G.cameras;if(Ft.length>0)for(let Xt=0,oe=Wt.length;Xt<oe;Xt++){const he=Wt[Xt];yh(zt,Ft,T,he)}xt&&vt.render(T);for(let Xt=0,oe=Wt.length;Xt<oe;Xt++){const he=Wt[Xt];_h(P,T,he,he.viewport)}}else Ft.length>0&&yh(zt,Ft,T,G),xt&&vt.render(T),_h(P,T,G)}L!==null&&O===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),$&&_.end(C),T.isScene===!0&&T.onAfterRender(C,T,G),dt.resetDefaultState(),H=-1,B=null,g.pop(),g.length>0?(v=g[g.length-1],w.setTextureUnits(v.state.textureUnits),ft===!0&&Rt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?P=E[E.length-1]:P=null,k!==null&&k.renderEnd()};function fr(T,G,K,$){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLightProbeGrid)v.pushLightProbeGrid(T);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Dt.intersectsSprite(T)){$&&at.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ot);const zt=tt.update(T),Ft=T.material;Ft.visible&&P.push(T,zt,Ft,K,at.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Dt.intersectsObject(T))){const zt=tt.update(T),Ft=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),at.copy(T.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),at.copy(zt.boundingSphere.center)),at.applyMatrix4(T.matrixWorld).applyMatrix4(ot)),Array.isArray(Ft)){const Wt=zt.groups;for(let Xt=0,oe=Wt.length;Xt<oe;Xt++){const he=Wt[Xt],Yt=Ft[he.materialIndex];Yt&&Yt.visible&&P.push(T,zt,Yt,K,at.z,he)}}else Ft.visible&&P.push(T,zt,Ft,K,at.z,null)}}const It=T.children;for(let zt=0,Ft=It.length;zt<Ft;zt++)fr(It[zt],G,K,$)}function _h(T,G,K,$){const{opaque:Y,transmissive:It,transparent:zt}=T;v.setupLightsView(K),ft===!0&&Rt.setGlobalState(C.clippingPlanes,K),$&&mt.viewport(et.copy($)),Y.length>0&&so(Y,G,K),It.length>0&&so(It,G,K),zt.length>0&&so(zt,G,K),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function yh(T,G,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[$.id]===void 0){const Yt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[$.id]=new $n(1,1,{generateMipmaps:!0,type:Yt?bi:wn,minFilter:ds,samples:Math.max(4,Qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace})}const It=v.state.transmissionRenderTarget[$.id],zt=$.viewport||et;It.setSize(zt.z*C.transmissionResolutionScale,zt.w*C.transmissionResolutionScale);const Ft=C.getRenderTarget(),Wt=C.getActiveCubeFace(),Xt=C.getActiveMipmapLevel();C.setRenderTarget(It),C.getClearColor(pt),At=C.getClearAlpha(),At<1&&C.setClearColor(16777215,.5),C.clear(),xt&&vt.render(K);const oe=C.toneMapping;C.toneMapping=Xn;const he=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),v.setupLightsView($),ft===!0&&Rt.setGlobalState(C.clippingPlanes,$),so(T,K,$),w.updateMultisampleRenderTarget(It),w.updateRenderTargetMipmap(It),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ae=0,Ue=G.length;Ae<Ue;Ae++){const De=G[Ae],{object:Te,geometry:Qe,material:Bt,group:_n}=De;if(Bt.side===Gn&&Te.layers.test($.layers)){const ge=Bt.side;Bt.side=Je,Bt.needsUpdate=!0,bh(Te,K,$,Qe,Bt,_n),Bt.side=ge,Bt.needsUpdate=!0,Yt=!0}}Yt===!0&&(w.updateMultisampleRenderTarget(It),w.updateRenderTargetMipmap(It))}C.setRenderTarget(Ft,Wt,Xt),C.setClearColor(pt,At),he!==void 0&&($.viewport=he),C.toneMapping=oe}function so(T,G,K){const $=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,It=T.length;Y<It;Y++){const zt=T[Y],{object:Ft,geometry:Wt,group:Xt}=zt;let oe=zt.material;oe.allowOverride===!0&&$!==null&&(oe=$),Ft.layers.test(K.layers)&&bh(Ft,G,K,Wt,oe,Xt)}}function bh(T,G,K,$,Y,It){T.onBeforeRender(C,G,K,$,Y,It),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(C,G,K,$,T,It),Y.transparent===!0&&Y.side===Gn&&Y.forceSinglePass===!1?(Y.side=Je,Y.needsUpdate=!0,C.renderBufferDirect(K,G,$,Y,T,It),Y.side=Gi,Y.needsUpdate=!0,C.renderBufferDirect(K,G,$,Y,T,It),Y.side=Gn):C.renderBufferDirect(K,G,$,Y,T,It),T.onAfterRender(C,G,K,$,Y,It)}function ro(T,G,K){G.isScene!==!0&&(G=Et);const $=R.get(T),Y=v.state.lights,It=v.state.shadowsArray,zt=Y.state.version,Ft=Q.getParameters(T,Y.state,It,G,K,v.state.lightProbeGridArray),Wt=Q.getProgramCacheKey(Ft);let Xt=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;const oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=W.get(T.envMap||$.environment,oe),$.envMapRotation=$.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",ke),Xt=new Map,$.programs=Xt);let he=Xt.get(Wt);if(he!==void 0){if($.currentProgram===he&&$.lightsStateVersion===zt)return wh(T,Ft),he}else Ft.uniforms=Q.getUniforms(T),k!==null&&T.isNodeMaterial&&k.build(T,K,Ft),T.onBeforeCompile(Ft,C),he=Q.acquireProgram(Ft,Wt),Xt.set(Wt,he),$.uniforms=Ft.uniforms;const Yt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=Rt.uniform),wh(T,Ft),$.needsLights=ap(T),$.lightsStateVersion=zt,$.needsLights&&(Yt.ambientLightColor.value=Y.state.ambient,Yt.lightProbe.value=Y.state.probe,Yt.directionalLights.value=Y.state.directional,Yt.directionalLightShadows.value=Y.state.directionalShadow,Yt.spotLights.value=Y.state.spot,Yt.spotLightShadows.value=Y.state.spotShadow,Yt.rectAreaLights.value=Y.state.rectArea,Yt.ltc_1.value=Y.state.rectAreaLTC1,Yt.ltc_2.value=Y.state.rectAreaLTC2,Yt.pointLights.value=Y.state.point,Yt.pointLightShadows.value=Y.state.pointShadow,Yt.hemisphereLights.value=Y.state.hemi,Yt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Yt.spotLightMatrix.value=Y.state.spotLightMatrix,Yt.spotLightMap.value=Y.state.spotLightMap,Yt.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=v.state.lightProbeGridArray.length>0,$.currentProgram=he,$.uniformsList=null,he}function Mh(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Jo.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function wh(T,G){const K=R.get(T);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function sp(T,G){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let K=0,$=T.length;K<$;K++){const Y=T[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(b))return Y}return null}function rp(T,G,K,$,Y){G.isScene!==!0&&(G=Et),w.resetTextureUnits();const It=G.fog,zt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,Ft=L===null?C.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:me.workingColorSpace,Wt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Xt=W.get($.envMap||zt,Wt),oe=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,he=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Yt=!!K.morphAttributes.position,Ae=!!K.morphAttributes.normal,Ue=!!K.morphAttributes.color;let De=Xn;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(De=C.toneMapping);const Te=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qe=Te!==void 0?Te.length:0,Bt=R.get($),_n=v.state.lights;if(ft===!0&&(Ot===!0||T!==B)){const Re=T===B&&$.id===H;Rt.setState($,T,Re)}let ge=!1;$.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==_n.state.version||Bt.outputColorSpace!==Ft||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==Xt||$.fog===!0&&Bt.fog!==It||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Rt.numPlanes||Bt.numIntersection!==Rt.numIntersection)||Bt.vertexAlphas!==oe||Bt.vertexTangents!==he||Bt.morphTargets!==Yt||Bt.morphNormals!==Ae||Bt.morphColors!==Ue||Bt.toneMapping!==De||Bt.morphTargetsCount!==Qe||!!Bt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Bt.__version=$.version);let Tn=Bt.currentProgram;ge===!0&&(Tn=ro($,G,Y),k&&$.isNodeMaterial&&k.onUpdateProgram($,Tn,Bt));let Yn=!1,Ei=!1,Rs=!1;const Ce=Tn.getUniforms(),Oe=Bt.uniforms;if(mt.useProgram(Tn.program)&&(Yn=!0,Ei=!0,Rs=!0),$.id!==H&&(H=$.id,Ei=!0),Bt.needsLights){const Re=sp(v.state.lightProbeGridArray,Y);Bt.lightProbeGrid!==Re&&(Bt.lightProbeGrid=Re,Ei=!0)}if(Yn||B!==T){mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ce.setValue(U,"projectionMatrix",T.projectionMatrix),Ce.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ti=Ce.map.cameraPosition;Ti!==void 0&&Ti.setValue(U,ut.setFromMatrixPosition(T.matrixWorld)),Qt.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,Ei=!0,Rs=!0)}if(Bt.needsLights&&(_n.state.directionalShadowMap.length>0&&Ce.setValue(U,"directionalShadowMap",_n.state.directionalShadowMap,w),_n.state.spotShadowMap.length>0&&Ce.setValue(U,"spotShadowMap",_n.state.spotShadowMap,w),_n.state.pointShadowMap.length>0&&Ce.setValue(U,"pointShadowMap",_n.state.pointShadowMap,w)),Y.isSkinnedMesh){Ce.setOptional(U,Y,"bindMatrix"),Ce.setOptional(U,Y,"bindMatrixInverse");const Re=Y.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Ce.setValue(U,"boneTexture",Re.boneTexture,w))}Y.isBatchedMesh&&(Ce.setOptional(U,Y,"batchingTexture"),Ce.setValue(U,"batchingTexture",Y._matricesTexture,w),Ce.setOptional(U,Y,"batchingIdTexture"),Ce.setValue(U,"batchingIdTexture",Y._indirectTexture,w),Ce.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ce.setValue(U,"batchingColorTexture",Y._colorsTexture,w));const Ai=K.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&$t.update(Y,K,Tn),(Ei||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,Ce.setValue(U,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Oe.envMapIntensity.value=G.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Fy()),Ei){if(Ce.setValue(U,"toneMappingExposure",C.toneMappingExposure),Bt.needsLights&&op(Oe,Rs),It&&$.fog===!0&&X.refreshFogUniforms(Oe,It),X.refreshMaterialUniforms(Oe,$,wt,yt,v.state.transmissionRenderTarget[T.id]),Bt.needsLights&&Bt.lightProbeGrid){const Re=Bt.lightProbeGrid;Oe.probesSH.value=Re.texture,Oe.probesMin.value.copy(Re.boundingBox.min),Oe.probesMax.value.copy(Re.boundingBox.max),Oe.probesResolution.value.copy(Re.resolution)}Jo.upload(U,Mh(Bt),Oe,w)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Jo.upload(U,Mh(Bt),Oe,w),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ce.setValue(U,"center",Y.center),Ce.setValue(U,"modelViewMatrix",Y.modelViewMatrix),Ce.setValue(U,"normalMatrix",Y.normalMatrix),Ce.setValue(U,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){const Re=$.uniformsGroups;for(let Ti=0,Ps=Re.length;Ti<Ps;Ti++){const Sh=Re[Ti];it.update(Sh,Tn),it.bind(Sh,Tn)}}return Tn}function op(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function ap(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,G,K){const $=R.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),R.get(T.texture).__webglTexture=G,R.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const K=R.get(T);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const lp=U.createFramebuffer();this.setRenderTarget=function(T,G=0,K=0){L=T,F=G,O=K;let $=null,Y=!1,It=!1;if(T){const Ft=R.get(T);if(Ft.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(U.FRAMEBUFFER,Ft.__webglFramebuffer),et.copy(T.viewport),nt.copy(T.scissor),ht=T.scissorTest,mt.viewport(et),mt.scissor(nt),mt.setScissorTest(ht),H=-1;return}else if(Ft.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(Ft.__hasExternalTextures)w.rebindTextures(T,R.get(T.texture).__webglTexture,R.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const oe=T.depthTexture;if(Ft.__boundDepthTexture!==oe){if(oe!==null&&R.has(oe)&&(T.width!==oe.image.width||T.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const Wt=T.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(It=!0);const Xt=R.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[G])?$=Xt[G][K]:$=Xt[G],Y=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?$=R.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?$=Xt[K]:$=Xt,et.copy(T.viewport),nt.copy(T.scissor),ht=T.scissorTest}else et.copy(Z).multiplyScalar(wt).floor(),nt.copy(ct).multiplyScalar(wt).floor(),ht=Lt;if(K!==0&&($=lp),mt.bindFramebuffer(U.FRAMEBUFFER,$)&&mt.drawBuffers(T,$),mt.viewport(et),mt.scissor(nt),mt.setScissorTest(ht),Y){const Ft=R.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ft.__webglTexture,K)}else if(It){const Ft=G;for(let Wt=0;Wt<T.textures.length;Wt++){const Xt=R.get(T.textures[Wt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Wt,Xt.__webglTexture,K,Ft)}}else if(T!==null&&K!==0){const Ft=R.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ft.__webglTexture,K)}H=-1},this.readRenderTargetPixels=function(T,G,K,$,Y,It,zt,Ft=0){if(!(T&&T.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){mt.bindFramebuffer(U.FRAMEBUFFER,Wt);try{const Xt=T.textures[Ft],oe=Xt.format,he=Xt.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ft),!Qt.textureFormatReadable(oe)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(he)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-$&&K>=0&&K<=T.height-Y&&U.readPixels(G,K,$,Y,z.convert(oe),z.convert(he),It)}finally{const Xt=L!==null?R.get(L).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(T,G,K,$,Y,It,zt,Ft=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt)if(G>=0&&G<=T.width-$&&K>=0&&K<=T.height-Y){mt.bindFramebuffer(U.FRAMEBUFFER,Wt);const Xt=T.textures[Ft],oe=Xt.format,he=Xt.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ft),!Qt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Yt),U.bufferData(U.PIXEL_PACK_BUFFER,It.byteLength,U.STREAM_READ),U.readPixels(G,K,$,Y,z.convert(oe),z.convert(he),0);const Ae=L!==null?R.get(L).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Ae);const Ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await y0(U,Ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,It),U.deleteBuffer(Yt),U.deleteSync(Ue),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,K=0){const $=Math.pow(2,-K),Y=Math.floor(T.image.width*$),It=Math.floor(T.image.height*$),zt=G!==null?G.x:0,Ft=G!==null?G.y:0;w.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,zt,Ft,Y,It),mt.unbindTexture()};const cp=U.createFramebuffer(),hp=U.createFramebuffer();this.copyTextureToTexture=function(T,G,K=null,$=null,Y=0,It=0){let zt,Ft,Wt,Xt,oe,he,Yt,Ae,Ue;const De=T.isCompressedTexture?T.mipmaps[It]:T.image;if(K!==null)zt=K.max.x-K.min.x,Ft=K.max.y-K.min.y,Wt=K.isBox3?K.max.z-K.min.z:1,Xt=K.min.x,oe=K.min.y,he=K.isBox3?K.min.z:0;else{const Oe=Math.pow(2,-Y);zt=Math.floor(De.width*Oe),Ft=Math.floor(De.height*Oe),T.isDataArrayTexture?Wt=De.depth:T.isData3DTexture?Wt=Math.floor(De.depth*Oe):Wt=1,Xt=0,oe=0,he=0}$!==null?(Yt=$.x,Ae=$.y,Ue=$.z):(Yt=0,Ae=0,Ue=0);const Te=z.convert(G.format),Qe=z.convert(G.type);let Bt;G.isData3DTexture?(w.setTexture3D(G,0),Bt=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(w.setTexture2DArray(G,0),Bt=U.TEXTURE_2D_ARRAY):(w.setTexture2D(G,0),Bt=U.TEXTURE_2D),mt.activeTexture(U.TEXTURE0),mt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),mt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),mt.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const _n=mt.getParameter(U.UNPACK_ROW_LENGTH),ge=mt.getParameter(U.UNPACK_IMAGE_HEIGHT),Tn=mt.getParameter(U.UNPACK_SKIP_PIXELS),Yn=mt.getParameter(U.UNPACK_SKIP_ROWS),Ei=mt.getParameter(U.UNPACK_SKIP_IMAGES);mt.pixelStorei(U.UNPACK_ROW_LENGTH,De.width),mt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De.height),mt.pixelStorei(U.UNPACK_SKIP_PIXELS,Xt),mt.pixelStorei(U.UNPACK_SKIP_ROWS,oe),mt.pixelStorei(U.UNPACK_SKIP_IMAGES,he);const Rs=T.isDataArrayTexture||T.isData3DTexture,Ce=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Oe=R.get(T),Ai=R.get(G),Re=R.get(Oe.__renderTarget),Ti=R.get(Ai.__renderTarget);mt.bindFramebuffer(U.READ_FRAMEBUFFER,Re.__webglFramebuffer),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ps=0;Ps<Wt;Ps++)Rs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(T).__webglTexture,Y,he+Ps),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(G).__webglTexture,It,Ue+Ps)),U.blitFramebuffer(Xt,oe,zt,Ft,Yt,Ae,zt,Ft,U.DEPTH_BUFFER_BIT,U.NEAREST);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||R.has(T)){const Oe=R.get(T),Ai=R.get(G);mt.bindFramebuffer(U.READ_FRAMEBUFFER,cp),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,hp);for(let Re=0;Re<Wt;Re++)Rs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.__webglTexture,Y,he+Re):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Oe.__webglTexture,Y),Ce?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ai.__webglTexture,It,Ue+Re):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ai.__webglTexture,It),Y!==0?U.blitFramebuffer(Xt,oe,zt,Ft,Yt,Ae,zt,Ft,U.COLOR_BUFFER_BIT,U.NEAREST):Ce?U.copyTexSubImage3D(Bt,It,Yt,Ae,Ue+Re,Xt,oe,zt,Ft):U.copyTexSubImage2D(Bt,It,Yt,Ae,Xt,oe,zt,Ft);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ce?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Bt,It,Yt,Ae,Ue,zt,Ft,Wt,Te,Qe,De.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Bt,It,Yt,Ae,Ue,zt,Ft,Wt,Te,De.data):U.texSubImage3D(Bt,It,Yt,Ae,Ue,zt,Ft,Wt,Te,Qe,De):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,It,Yt,Ae,zt,Ft,Te,Qe,De.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,It,Yt,Ae,De.width,De.height,Te,De.data):U.texSubImage2D(U.TEXTURE_2D,It,Yt,Ae,zt,Ft,Te,Qe,De);mt.pixelStorei(U.UNPACK_ROW_LENGTH,_n),mt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge),mt.pixelStorei(U.UNPACK_SKIP_PIXELS,Tn),mt.pixelStorei(U.UNPACK_SKIP_ROWS,Yn),mt.pixelStorei(U.UNPACK_SKIP_IMAGES,Ei),It===0&&G.generateMipmaps&&U.generateMipmap(Bt),mt.unbindTexture()},this.initRenderTarget=function(T){R.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),mt.unbindTexture()},this.resetState=function(){F=0,O=0,L=null,mt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const Zn=(i,t)=>Math.sign(i)*Math.abs(i)**t,tr=(i,t,e={})=>({...i,a:i.a+t,b:i.b+t,c:i.c+t,...e});function Iy(i,t,e,n=Math.PI){const s=new Un(1,t,e,0,Math.PI*2,0,n),r=s.attributes.position,o=s.attributes.normal;for(let a=0;a<r.count;a++){const l=r.getX(a),c=r.getY(a),h=r.getZ(a),u=Math.asin(Math.max(-1,Math.min(1,c))),d=Math.atan2(h,l),p=Math.cos(u),x=Math.sin(u),S=Math.cos(d),m=Math.sin(d);r.setXYZ(a,i.a*Zn(p,i.e1)*Zn(S,i.e2),i.b*Zn(x,i.e1),i.c*Zn(p,i.e1)*Zn(m,i.e2));const f=Zn(p,2-i.e1)*Zn(S,2-i.e2)/i.a,y=Zn(x,2-i.e1)/i.b,M=Zn(p,2-i.e1)*Zn(m,2-i.e2)/i.c,b=Math.hypot(f,y,M)||1;o.setXYZ(a,f/b,y/b,M/b)}return s}function Jr(i,t,e){const n=1-Math.min(1,Math.abs(e/i.b))**(2/i.e1);if(n<=0)return 0;const s=n**(i.e1/i.e2)-Math.min(1,Math.abs(t/i.a))**(2/i.e2);return s<=0?0:i.c*s**(i.e2/2)}const Dy=(i,t,e)=>-Math.atan((Jr(i,t+.02,e)-Jr(i,t-.02,e))/.04),Ny=(i,t,e)=>Math.atan((Jr(i,t,e+.02)-Jr(i,t,e-.02))/.04),rh=["none","clouds","hearts","hibiscus","plaid","stars"],Uy=[{seg:20,rings:14,round:16},{seg:12,rings:8,round:7},{seg:8,rings:6,round:6}],Oy=new te,tu=new Xi;class By{constructor(t,e,n){D(this,"items",[]);this.d=t,this.rig=e,this.lod=n}add(t,e,n,s=[0,0,0],r=[0,0,0],o=[1,1,1]){return tu.setFromEuler(new Wi(...r)),t.applyMatrix4(Oy.compose(new N(...s),tu,new N(...o))),this.items.push({geo:t,bone:e,paint:n}),t}blob(t,e,n,s,r,o){return this.add(Iy(t,this.lod.seg,this.lod.rings,o),e,n,s,r)}sphere(t,e,n,s,r){return this.add(new Un(t,Math.max(6,this.lod.seg-4),Math.max(4,this.lod.rings-2)),e,n,s,void 0,r)}cyl(t,e,n,s,r,o,a,l=!1){return this.add(new dr(t,e,n,this.lod.round,1,l),s,r,o,a)}cone(t,e,n,s,r,o,a){return this.add(new va(t,e,this.lod.round),n,s,r,o,a)}torus(t,e,n,s,r,o,a=Math.PI*2){return this.add(new eo(t,e,Math.max(4,this.lod.round/2),this.lod.round*2,a),n,s,r,o)}box(t,e,n,s,r,o,a){return this.add(new un(t,e,n),s,r,o,a)}tube(t,e,n,s,r){const o=r(t.map(a=>new N(...a)));return this.add(new sh(o,this.lod.round*2,e,Math.max(5,this.lod.round/2)),n,s)}onFace(t,e,n,s,r,o,a,l=0,c=0){const h=Jr(t,o,a)+l;return this.add(n,s,{outline:0,...r},[e[0]+o,e[1]+a,e[2]+h],[-Ny(t,o,a),Dy(t,o,a),c])}}const eu=i=>new ee(i),Kn=128;function zy(){const i=document.createElement("canvas");i.width=Kn*rh.length,i.height=Kn;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,i.width,i.height),t.fillStyle="#fff",t.strokeStyle="#fff";const e=(r,o)=>{t.save(),t.beginPath(),t.rect(r*Kn,0,Kn,Kn),t.clip(),t.translate(r*Kn,0),o(),t.restore()},n=(r,o,a)=>{t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill()};e(1,()=>{for(const[r,o]of[[30,40],[95,95]])n(r,o,14),n(r+16,o-6,16),n(r+32,o,13),t.fillRect(r,o,32,12)}),e(2,()=>{const r=(o,a,l)=>{t.beginPath(),t.moveTo(o,a+l*.9),t.bezierCurveTo(o-l*1.2,a+l*.1,o-l*.6,a-l*.8,o,a-l*.2),t.bezierCurveTo(o+l*.6,a-l*.8,o+l*1.2,a+l*.1,o,a+l*.9),t.fill()};r(32,36,16),r(96,96,16)}),e(3,()=>{for(const[r,o]of[[36,38],[98,94]])for(let a=0;a<5;a++)n(r+Math.cos(a/5*Math.PI*2)*13,o+Math.sin(a/5*Math.PI*2)*13,10)}),e(4,()=>{t.globalAlpha=.6;for(const r of[16,80])t.fillRect(r,0,22,Kn),t.fillRect(0,r,Kn,22);t.globalAlpha=1;for(const r of[24,88])t.fillRect(r,0,5,Kn),t.fillRect(0,r,Kn,5)}),e(5,()=>{const r=(o,a,l)=>{t.beginPath();for(let c=0;c<10;c++){const h=c/10*Math.PI*2-Math.PI/2,u=c%2?l*.45:l;t.lineTo(o+Math.cos(h)*u,a+Math.sin(h)*u)}t.fill()};r(32,36,14),r(96,96,12),r(90,24,6)});const s=new to(i);return s.colorSpace=mi,s.minFilter=s.magFilter=Ke,s.generateMipmaps=!1,s}let Qi=null;function Si(){return Qi||(Qi=new xa(new Uint8Array([140,191,230,255]),4,1,ma),Qi.minFilter=Qi.magFilter=$e,Qi.needsUpdate=!0,Qi)}let pl=null,nu=null;function Hy(){if(pl)return pl;nu=zy();const i=new wi({color:16777215,vertexColors:!0,gradientMap:Si()});return i.onBeforeCompile=t=>{t.uniforms.uPatAtlas={value:nu},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
          vec2 tuv = vec2((vPat.x + fract(vPatUv.x * vPat.y)) / ${rh.length.toFixed(1)}, fract(vPatUv.y * vPat.y * 0.5));
          float mask = texture2D(uPatAtlas, tuv).r;
          diffuseColor.rgb = mix(diffuseColor.rgb, vColor2, mask);
        }`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, diffuseColor.rgb, vPat.z);`)},i.customProgramCacheKey=()=>"peepl-char-v1",pl=i,i}const Vy=`
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
}`,Gy=`
uniform vec3 uColor;
void main() { gl_FragColor = vec4(uColor, 1.0); }`,Cc={uWidthPx:{value:2},uViewport:{value:new St(1920,1080)},uColor:{value:new ee(1118481).convertLinearToSRGB()}};let Lo=null;function Wy(){return Lo||(Lo=new fn({uniforms:Cc,vertexShader:Vy,fragmentShader:Gy,side:Je}),Lo)}let qe=null,oh=!1;const iu=new St;function Qo(){const i=navigator.deviceMemory;return Sn||oh||i!==void 0&&i<=4}function su(){const i=navigator.deviceMemory;return Math.min(devicePixelRatio||1,oh||i!==void 0&&i<=4?1.5:2)}function Rc(){qe&&(qe.setPixelRatio(su()),qe.setSize(innerWidth,innerHeight,!1),qe.getDrawingBufferSize(iu),Cc.uViewport.value.copy(iu),Cc.uWidthPx.value=Math.min(3,Math.max(1.5,2*su()*Math.max(.75,fa()))))}function lr(i={}){if(qe)return qe;oh=!!i.lowgpu;const t=document.getElementById("gl");return qe=new Ly({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:!1}),qe.outputColorSpace=Ze,qe.toneMapping=Xn,qe.setClearColor(0,0),qe.shadowMap.type=Yu,qe.info.autoReset=!1,addEventListener("resize",Rc),Rc(),qe}function cr(i){const t=document.getElementById("gl");t.style.display=i?"block":"none",t.style.pointerEvents=i?"auto":"none";const e=document.getElementById("hud3d");e.style.background=i&&Qo()?"radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(17,17,17,0.22))":"",i&&Rc()}const la={calls:0,tris:0};function ah(){qe&&(la.calls=qe.info.render.calls,la.tris=qe.info.render.triangles,qe.info.reset())}function Xy(i){const{flow:t,loop:e,store:n,autoplay:s}=i;return{ready:i.ready,state:()=>{var r;return{screen:t.id??"S0",t:t.t,sim:((r=Tt.sim)==null?void 0:r.call(Tt))??{day:1,time:"13:00",speed:n.data.settings.speed,tier:0,km:0,radius:0},trust:Number(n.data.progress.trust??0),released:!!n.data.progress.released,handshake:!!n.data.progress.handshake,met:{},settings:{...n.data.settings},rigOk:In.rigOk}},go(r,o){return $u(r)?(In.sub=(o==null?void 0:o.sub)??null,t.go(r)):Promise.reject(new Error(`unknown screen ${r}`))},replay:()=>{var r;(r=Tt.replaySetpiece)!=null&&r.call(Tt)||t.replay()},advance(r,o=!0){return e.advance(r,o),Promise.resolve()},pause:()=>e.paused=!0,resume:()=>e.paused=!1,tap:()=>{s.tap()||t.input({type:"tap"})},choose:r=>{var o,a;return(a=(o=t.current)==null?void 0:o.choose)==null?void 0:a.call(o,r)},release(){Object.assign(n.data.progress,{trust:100,released:!0}),n.save(),t.go("S6")},set(r,o){var a;n.setSetting(r,o),r==="outline"&&((a=Tt.outline)==null||a.call(Tt,o!=="none"))},reset(){n.reset();const r=new URLSearchParams(location.search);r.delete("screen"),r.delete("t");const o=r.toString();location.replace(`${location.pathname}${o?`?${o}`:""}`)},stats:()=>({fps:e.fps,calls:la.calls,tris:la.tris,textures:0,chars:In.chars,lod:In.lod}),cast:r=>{var o;return(o=Tt.cast)==null?void 0:o.call(Tt,r)},shape:(r,o)=>{var a;return(a=Tt.shape)==null?void 0:a.call(Tt,r,o)},viewer:Tt,setTime:(r,o)=>{var a;return(a=Tt.setTime)==null?void 0:a.call(Tt,r,o)},tick:r=>{var o;return(o=Tt.tick)==null?void 0:o.call(Tt,r)},setSpeed:r=>n.setSetting("speed",r),setTier:r=>{var o;return(o=Tt.setTier)==null?void 0:o.call(Tt,r)},walk:r=>{var o;return(o=Tt.walk)==null?void 0:o.call(Tt,r)},moveYou:(r,o)=>{var a;return(a=Tt.moveYou)==null?void 0:a.call(Tt,r,o)},shot:r=>{var o;return(o=Tt.shot)==null?void 0:o.call(Tt,r)},follow:r=>{var o;return(o=Tt.follow)==null?void 0:o.call(Tt,r)},legibility:()=>{var r;return((r=Tt.legibility)==null?void 0:r.call(Tt))??{}},dropEvent:r=>{var o;return(o=Tt.dropEvent)==null?void 0:o.call(Tt,r)},mirror:r=>{var o;return((o=Tt.mirror)==null?void 0:o.call(Tt,r))??""}}}const $y=[0,1,4,16,.25],Yy=[],qy=`
#debug{height:40px;font-family:var(--face-pixel);font-size:22px;color:var(--white);pointer-events:none}
#debug .strip{display:flex;align-items:center;gap:8px;height:40px;padding:0 10px;background:var(--ink);pointer-events:auto;overflow-x:auto;white-space:nowrap}
#debug .strip > *{flex:none}
#debug button,#debug select{font:inherit;color:var(--white);background:var(--ink);border:2px solid var(--white);border-radius:999px;padding:1px 12px 3px;height:30px;line-height:22px}
#debug button[aria-pressed=true]{background:var(--white);color:var(--ink)}
#debug button:disabled{opacity:.4;cursor:default}
#debug .fps{min-width:70px}
#debug .collapsed{width:40px;height:40px;display:grid;place-items:center;background:var(--ink);pointer-events:auto;border:0;border-radius:0;padding:0}
`;function jy(i,t,e,n,s){const r=V("div",{id:"debug"});r.append(V("style",{},qy));const o=V("div",{class:"strip",role:"toolbar","aria-label":"director bar"}),a=V("button",{class:"collapsed","aria-label":"open director bar",title:"director bar (`)"});a.append(V("span",{style:"display:block;width:10px;height:18px;background:var(--white)"})),r.append(o,a),document.body.append(r);const l=ta.map(_=>_.id),c=_=>{const C=l.indexOf(i.state().screen);i.go(l[(C+_+l.length)%l.length])},h=V("select",{"aria-label":"screen"});for(const _ of ta)if(h.append(V("option",{value:_.id},`${_.id} ${_.name}`)),_.id==="S8")for(const C of["contact","cafe","end"])h.append(V("option",{value:`S8:${C}`},`S8 · ${C}`));h.addEventListener("change",()=>{const[_,C]=h.value.split(":");i.go(_,C?{sub:C}:void 0)});const u=(_,C,A)=>{const k=V("button",{title:A});return k.textContent=_,k.addEventListener("click",C),k},d=(_,C,A)=>{const k=u(_,()=>{A(!C()),g()});return p.push([k,C]),k},p=[],x=V("select",{"aria-label":"speed"});for(const _ of $y)x.append(V("option",{value:_},_===.25?"ui 0.25x":_===0?"pause":`${_}x`));x.addEventListener("change",()=>i.set("speed",Number(x.value)));const S=V("select",{"aria-label":"cast"});for(const _ of n)S.append(V("option",{value:_},_));S.addEventListener("change",()=>i.cast(S.value));const m=u("--:--",()=>i.tick(3600),"sim time: +1 h (S8)"),f=(_,C,A,k)=>{const F=V("select",{"aria-label":_});for(const O of C)F.append(V("option",{value:O},`${_} ${O}`));return F.value=k(),F.addEventListener("change",()=>A(F.value)),F},y=f("tod",["auto","day","dusk"],_=>i.set("tod",_),()=>t.data.settings.tod),M=f("gfx",["auto","16bit","hd"],_=>i.set("gfx",_),()=>t.data.settings.gfx),b=u("walk +0.5 km",()=>i.walk(.5),"S8 only"),P=V("select",{"aria-label":"drop event"});P.append(V("option",{value:""},"event"));for(const _ of s)P.append(V("option",{value:_},_));P.addEventListener("change",()=>{P.value&&i.dropEvent(P.value),P.value=""});const v=V("span",{class:"fps"});o.append(u("prev",()=>c(-1),"previous screen"),h,u("next",()=>c(1),"next screen"),u("replay",()=>i.replay()),d("auto",()=>t.data.settings.auto,_=>i.set("auto",_)),x,d("outline",()=>t.data.settings.outline!=="none",_=>i.set("outline",_?"ink":"none")),S,m,y,M,b,P,...Yy.map(([_,C])=>{const A=u(`${_} ${C}`,()=>{},`arrives in ${C}`);return A.disabled=!0,A}),d("reduce motion",()=>t.data.settings.reduceMotion,_=>i.set("reduceMotion",_)),v,u("reset",()=>{confirm(e)&&i.reset()}),u("×",()=>E(!0),"collapse (`)"));const E=_=>{t.setSetting("debugCollapsed",_),o.style.display=_?"none":"flex",a.style.display=_?"grid":"none"};a.addEventListener("click",()=>E(!1)),addEventListener("keydown",_=>{_.key==="`"&&E(!t.data.settings.debugCollapsed)}),E(t.data.settings.debugCollapsed);function g(){for(const[_,C]of p)_.setAttribute("aria-pressed",String(C()))}return g(),{update(){const _=i.state();h.value!==_.screen&&(h.value=_.screen),Number(x.value)!==t.data.settings.speed&&(x.value=String(t.data.settings.speed)),v.textContent=`${Math.round(i.stats().fps)} fps`,m.textContent=_.screen==="S8"?_.sim.time:"--:--"}}}class Zy{constructor(){D(this,"el",document.getElementById("field"));D(this,"dots",!1)}set(t,e){this.el.style.backgroundColor=`var(--${t})`,this.dots=e,this.el.style.backgroundImage=e?"radial-gradient(circle, var(--lit-dots) 3px, transparent 3.6px)":"none",this.el.style.backgroundSize=this.el.style.backgroundPosition=""}glow(t,e=0){this.dots=!1;const n=`color-mix(in srgb, var(--purple), var(--pink) ${Math.round(e*45)}%)`;this.el.style.backgroundImage=`radial-gradient(ellipse at 50% 55%, color-mix(in srgb, ${n} ${Math.round(t*100)}%, transparent), transparent 70%)`}update(t,e){if(!this.dots)return;const n=fa(),[s,r]=e?[0,0]:Mp(t);this.el.style.backgroundSize=`${48*n}px ${48*n}px`,this.el.style.backgroundPosition=`${s*n}px ${r*n}px`}}const Ky=.18;class Jy{constructor(){D(this,"el");D(this,"alpha",0);D(this,"target",0);D(this,"hideAt",1/0);D(this,"t",0);this.el=V("div",{class:"caption pixel",style:["position:absolute;left:50%;bottom:36px;transform:translateX(-50%);width:max-content;max-width:84%;text-align:center","background:var(--ink);color:var(--white);font-size:50px;padding:10px 26px 12px;border-radius:999px;opacity:0"].join(";")}),Ms("captions").append(this.el)}show(t,e){this.el.textContent=t,Nc(t),this.target=1,this.hideAt=e===void 0?1/0:this.t+e}hide(){this.target=0}clear(){this.target=0,this.alpha=0,this.render()}get visible(){return this.alpha>0}update(t){this.t+=t,this.t>=this.hideAt&&(this.target=0);const e=t/Ky;this.alpha=this.target>this.alpha?Vi(this.alpha+e):Math.max(this.target,this.alpha-e),this.render()}render(){Vt(this.el,{opacity:String(this.alpha),visibility:this.alpha>0?"visible":"hidden"})}}class Ts{constructor(t,e,n){D(this,"shown",null);this.captions=t,this.texts=e,this.cues=n}update(t){const e=this.cues.find(s=>t>=s.at&&t<(s.until??1/0))??null,n=(e==null?void 0:e.key)??null;n!==this.shown&&(this.shown=n,n?this.captions.show(this.texts[n]??""):this.captions.hide())}}const ru="✓ ";class Qy{constructor(){D(this,"el",null);D(this,"t",0);D(this,"until",0)}show(t,e=3){var r;(r=this.el)==null||r.remove();const n=t.startsWith(ru),s=n?t.slice(ru.length):t;this.el=dn(n?[xs("check",34,"var(--yellow)"),s]:[s],{size:40,color:"yellow"}),this.el.classList.add("toast"),this.el.setAttribute("role","status"),this.el.setAttribute("aria-label",s),Vt(this.el,{position:"absolute",left:ze(1380,60),top:150,transformOrigin:"50% 0"}),Ms("toast").append(this.el),this.t=0,this.until=e,this.update(0)}hide(){var t;(t=this.el)==null||t.remove(),this.el=null}update(t){if(this.el){if(this.t+=t,this.t>=this.until){this.hide();return}this.el.style.transform=`scale(${ae(this.t,0,.4,ie.pop)})`}}}const t1=.5,e1=.5;function n1(i){const t=ps(i);let e,n,s=0,r=!1;const o=t.field==="ink"||t.field==="night";return{id:i,mount(a,l){e=a,n=V("div",{class:"placeholder",style:`position:absolute;left:0;top:0;width:1920px;height:1080px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;color:var(--${o?"white":"ink"})`},V("div",{class:"display",style:"font-size:220px"},i),V("div",{class:"pixel",style:"font-size:54px"},t.name)),l.append(n)},enter(){s=0,r=!1,this.update(0,0)},update(a,l){s=l,n.style.transform=`scale(${ae(s,0,.45,ie.pop)})`,!r&&t.caption&&s>=e1&&(r=!0,e.captions.show(e.copy.captions[t.caption]??""))},landed:()=>s>=t1,onInput(a){},exit(){},unmount(){n.remove()},seek(a){this.update(0,a)}}}const no=i=>`/peepls-demo/${i}`;class wa{constructor(t,e={}){D(this,"el");D(this,"img");D(this,"hgt",0);this.spec=t,this.img=V("img",{src:no(t.body),alt:"",draggable:"false",style:"display:block;width:100%;height:100%"}),this.el=V("div",{class:"sprite",style:`position:absolute;transform-origin:${t.footX*100}% 100%`,...e},this.img)}get height(){return this.hgt}place(t,e,n){this.hgt=n;const s=n*this.spec.aspect;return Vt(this.el,{left:t-s*this.spec.footX,top:e-n,width:s,height:n}),this}pose(t){const e=t.phase??0,n=t.walk??0,s=-Math.abs(Math.sin(t.t*10+e))*this.hgt*.03*n,r=Math.sin(t.t*10+e)*3*n;Vt(this.el,{transform:`translateY(${s-(t.hop??0)}px) rotate(${r+(t.rot??0)}deg) scale(${t.scale??1}) scaleY(${bp(t.t,e)*(t.squash??1)})`,opacity:String(t.opacity??1)})}}const i1=2,s1=.25;class r1{constructor(t,e,n,s=0){D(this,"el");this.at=n;const r=V("div",{style:"position:absolute;left:50%;bottom:-14px;width:20px;height:20px;margin-left:-10px;background:var(--white);border-right:5px solid var(--ink);border-bottom:5px solid var(--ink);transform:rotate(45deg)"}),o=V("div",{class:"pixel",style:`position:relative;background:var(--white);border:5px solid var(--ink);border-radius:16px;padding:6px 16px 8px;font-size:${Math.round(e*.075)}px;color:var(--ink);white-space:nowrap;margin-bottom:22px`},V("span",{},t),r);this.el=V("div",{class:"life-tag",style:`position:absolute;left:50%;bottom:${100+s*100}%;transform-origin:50% 100%`},o)}update(t,e){const[n,s]=Le(t,this.at,.3,e),r=1-ae(t,this.at+i1,s1,ie.enter);Vt(this.el,{transform:`translateX(-50%) scale(${n})`,opacity:String(s*r),visibility:s*r>0?"visible":"hidden"})}}const Pc="stroke:var(--ink);stroke-width:9;stroke-linejoin:round;stroke-linecap:round",Ve=(i,t="")=>`fill:var(--${i});${Pc}${t}`,ue=(i,t,e,...n)=>re(i,{...t,style:e},...n),Mn=(i,t,e)=>ue("path",{d:i},`fill:none;stroke:var(--${t});stroke-width:${e};stroke-linecap:round`);function o1(i,t){const e=re("g",{});let n=()=>{};switch(i){case"coffee":{const r=[0,1].map(()=>Mn("","ink",6));e.append(...r,ue("path",{d:"M 338 652 L 408 652 L 399 746 L 347 746 Z"},Ve("white")),ue("rect",{x:342,y:680,width:62,height:30},Ve("pink",";stroke-width:6")),ue("rect",{x:330,y:630,width:86,height:24,rx:9},Ve("ink"))),n=o=>r.forEach((a,l)=>{const c=(o*.7+l*.5+t)%1;a.setAttribute("d",`M ${356+l*26} ${612-c*70} q 12 -16 0 -32 q -12 -16 0 -32`),a.style.opacity=String(Math.sin(c*Math.PI)*.8)});break}case"briefcase":{const r=re("g",{},ue("path",{d:"M 40 756 q 0 -38 28 -38 q 28 0 28 38"},`fill:none;${Pc}`),ue("rect",{x:-4,y:752,width:144,height:100,rx:12},Ve("brown")),Mn("M -4 790 L 140 790","ink",6),ue("rect",{x:54,y:744,width:28,height:18,rx:4},Ve("yellow",";stroke-width:6")));e.append(r),n=(o,a)=>r.setAttribute("transform",`rotate(${Math.sin(o*10+t)*5*a} 68 722)`);break}case"balloon":{const r=re("g",{},ue("path",{d:"M 362 736 C 430 600, 380 420, 480 232"},"fill:none;stroke:var(--ink);stroke-width:5"),ue("ellipse",{cx:480,cy:140,rx:66,ry:80},Ve("pink")),ue("path",{d:"M 468 226 L 492 226 L 480 208 Z"},Ve("pink",";stroke-width:6")),ue("ellipse",{cx:456,cy:104,rx:13,ry:22},"fill:var(--lit-white-85)"));e.append(r),n=o=>r.setAttribute("transform",`rotate(${Math.sin(o*1.8+t)*6} 362 736)`);break}case"flowers":e.append(Mn("M 344 640 L 350 560 M 380 640 L 388 534 M 408 640 L 426 570","lit-stem",9),ue("circle",{cx:346,cy:556,r:30},Ve("pink")),ue("circle",{cx:346,cy:556,r:9},"fill:var(--ink)"),ue("circle",{cx:388,cy:530,r:32},Ve("yellow")),ue("circle",{cx:388,cy:530,r:9},"fill:var(--ink)"),ue("circle",{cx:428,cy:566,r:28},Ve("cyan")),ue("circle",{cx:428,cy:566,r:8},"fill:var(--ink)"),ue("path",{d:"M 316 630 L 430 630 L 376 790 Z"},Ve("cream")));break;case"bag":e.append(ue("rect",{x:18,y:628,width:36,height:140,rx:18,transform:"rotate(-16 36 700)"},Ve("lit-baguette")),Mn("M 76 616 q -18 30 6 64 M 96 620 q 14 30 -8 62","lit-stem",9),ue("path",{d:"M 40 742 q 26 -40 52 0"},`fill:none;${Pc}`),ue("rect",{x:-20,y:730,width:170,height:150,rx:8},Ve("lit-cardboard")),Mn("M -20 762 L 150 762","ink",5));break;case"umbrella":{const r=re("g",{},Mn("M 362 740 L 300 -40","ink",10),Mn("M 362 740 q 4 34 -24 34","ink",10),ue("path",{d:"M 50 -40 A 250 250 0 0 1 550 -40 Q 487 -76 425 -40 Q 362 -76 300 -40 Q 237 -76 175 -40 Q 112 -76 50 -40 Z"},Ve("cyan")),ue("path",{d:"M 300 -290 Q 240 -160 175 -40 M 300 -290 Q 360 -160 425 -40"},"fill:none;stroke:var(--ink);stroke-width:6"),ue("circle",{cx:300,cy:-296,r:11},"fill:var(--ink)"));e.append(r),n=o=>r.setAttribute("transform",`rotate(${Math.sin(o*2+t)*2} 362 736)`);break}case"headphones":{const r=re("g",{},ue("path",{d:"M 0 40 L 0 -10 L 30 -18 L 30 30"},"fill:none;stroke:var(--ink);stroke-width:7"),ue("circle",{cx:-8,cy:40,r:11},"fill:var(--ink)"),ue("circle",{cx:22,cy:30,r:11},"fill:var(--ink)"));e.append(Mn("M 110 150 C 96 -50, 336 -50, 322 150","ink",24),Mn("M 110 150 C 96 -50, 336 -50, 322 150","pink",10),ue("rect",{x:84,y:108,width:52,height:92,rx:20},Ve("pink")),ue("rect",{x:296,y:108,width:52,height:92,rx:20},Ve("pink")),r),n=o=>{const a=(o*.9+t)%1;r.setAttribute("transform",`translate(${390+a*40} ${60-a*120})`),r.style.opacity=String(Math.sin(a*Math.PI))};break}case"dog":{const r=Mn("","ink",12),o=re("g",{},Mn("M 476 975 q -34 -20 -26 -64","ink",12));e.append(Mn("M 362 742 Q 500 860 618 930","red",6),ue("ellipse",{cx:560,cy:1080,rx:110,ry:12},"fill:var(--ink)"),r,o,ue("ellipse",{cx:560,cy:995,rx:88,ry:48},Ve("white")),ue("circle",{cx:650,cy:930,r:46},Ve("white")),ue("ellipse",{cx:690,cy:950,rx:26,ry:18},Ve("white")),ue("circle",{cx:712,cy:942,r:9},"fill:var(--ink)"),ue("circle",{cx:660,cy:918,r:6},"fill:var(--ink)"),ue("path",{d:"M 626 900 q -34 8 -28 56 q 24 -4 34 -36 Z"},"fill:var(--ink)"),Mn("M 612 956 q 20 16 44 8","red",10)),n=(a,l)=>{const c=Math.sin(a*12+t)*10*l;r.setAttribute("d",`M 505 1030 L ${500+c} 1076 M 532 1034 L ${536-c} 1078 M 590 1034 L ${586+c} 1078 M 618 1030 L ${622-c} 1076`),o.setAttribute("transform",`rotate(${Math.sin(a*14)*14} 476 975)`)};break}}return{el:re("svg",{viewBox:"0 0 425 1089",style:"position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none"},e),update:n}}function ca(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Bf(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ks=(...i)=>Bf(ca(i.join("|"))),Hi=i=>{const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},ml={dur:6.4,px:900,parallax:.55},Jn={from:6.5,to:7.55,cx:560,cy:560},a1=7.7,l1=8.5,c1=8.95,h1=9.6,ou=9.4,au=[{y:880,h:400},{y:1010,h:520}],lu=[150,1150,2150,3150],Io=[{prop:"coffee",lane:0,x0:900,v:-100,ph:.8},{prop:"headphones",lane:0,x0:1500,v:-110,ph:.3},{prop:"dog",lane:1,x0:1150,v:120,ph:2.6},{prop:"umbrella",lane:0,x0:2300,v:-90,ph:1.1,lift:.3},{prop:"flowers",lane:1,x0:1750,v:150,ph:.2},{prop:"bag",lane:0,x0:1900,v:-120,ph:2.2},{prop:"briefcase",lane:0,x0:2700,v:-100,ph:1.7}],Rn={x0:620,v:150,stopAt:5.6,ph:.4,h:520,y:1010};function d1(i){const t=Ks(i,"crowd","buildings"),e=["cream","pink","white","cyan"];let n=-220;return Array.from({length:9},(s,r)=>{const o=260+Math.round(t()*180),a=460+Math.round(t()*260),l=Math.max(1,Math.floor((o-40)/100)),c=Math.max(1,Math.floor((a-120)/116)),h=Array.from({length:l*c},(d,p)=>V("div",{style:`border:5px solid var(--ink);background:var(--${(r+p)%3?"white":"yellow"})`})),u=V("div",{style:[`position:absolute;left:${n}px;top:${820-a}px;width:${o}px;height:${a+20}px;background:var(--${e[r%4]})`,`border:6px solid var(--ink);display:grid;grid-template-columns:repeat(${l},56px);grid-auto-rows:72px`,"justify-content:space-evenly;align-content:start;row-gap:44px;padding-top:44px"].join(";")},...h);return n+=o+30,u})}function u1(){let i,t=!1,e=0,n,s,r,o,a=[],l=[],c,h,u,d=[],p,x,S,m;const f=(y,M,b,P,v,E,g,_=0)=>{const C=new wa(n,{class:"sprite joe"}).place(0,y.y,y.h),A=o1(M,g),k=new r1(b,y.h,P,_);return C.el.append(A.el,k.el),{sprite:C,prop:A,tag:k,x0:v,v:E,ph:g}};return{id:"S0",mount(y,M){i=y;const b=y.copy.S0;n=y.data.cast.cast.find(_=>_.id==="joe").sprite,m=new Ts(y.captions,y.copy.captions,[{key:"crowd1",at:.5,until:3.4},{key:"crowd2",at:3.6,until:6.5}]),r=V("div",{class:"city",style:"position:absolute;inset:0"},...d1(y.params.seed)),o=V("div",{style:`position:absolute;left:0;top:820px;width:1920px;height:${ze(260,700)}px;background-color:var(--cream);border-top:6px solid var(--ink);background-image:repeating-linear-gradient(90deg,var(--lit-joint) 0 5px,transparent 5px 180px)`}),l=Io.map((_,C)=>{const[A,k]=b.tags[C];return f(au[_.lane],_.prop,A,k,_.x0,_.v,_.ph,_.lift)});const[P,v]=b.tags[7];c=f({y:Rn.y,h:Rn.h},"balloon",P,v,Rn.x0,Rn.v,Rn.ph),c.sprite.el.classList.add("hero"),a=lu.map(()=>V("div",{style:"position:absolute;top:0;left:0"},V("div",{style:"position:absolute;left:-8px;top:360px;width:16px;height:545px;background:var(--ink)"}),V("div",{style:"position:absolute;left:-46px;top:326px;width:92px;height:46px;border-radius:24px;background:var(--yellow);border:6px solid var(--ink)"}))),s=V("div",{class:"s0-crowd",style:`position:absolute;left:0;top:0;width:1920px;height:${ze(1080,1500)}px;background:var(--yellow);overflow:hidden`},r,o,...l.filter((_,C)=>Io[C].lane===0).map(_=>_.sprite.el),...a,...l.filter((_,C)=>Io[C].lane===1).map(_=>_.sprite.el),c.sprite.el),h=re("path",{"fill-rule":"evenodd",style:"fill:var(--ink)"}),u=re("svg",{width:1920,height:1080,style:"position:absolute;inset:0;overflow:visible"},h),d=[...b.wordmark].map(_=>V("span",{class:"display",style:`display:inline-block;font-size:${ze(220,180)}px;line-height:0.9;color:var(--yellow);-webkit-text-stroke:7px var(--ink);paint-order:stroke fill;text-shadow:0 11px 0 var(--pink)`},_));const E=V("div",{id:"s0-wordmark",style:"display:flex;gap:2px"},...d);p=V("div",{class:"pixel s0-line1",style:"font-size:64px;color:var(--white);margin-top:30px"},b.line1),x=V("div",{class:"pixel s0-line2",style:"font-size:64px;color:var(--yellow)"},b.line2),S=V("div",{class:"pixel s0-sub",style:"font-size:36px;color:var(--lit-white-60)"},b.subline);const g=V("div",{class:"s0-title",style:"position:absolute;left:880px;width:900px;top:300px;display:flex;flex-direction:column;align-items:center;gap:22px"},E,p,x,S);Pe(g,{left:90,top:1220}),ws(M,Jn.cx,Jn.cy,1.5,540,540),M.append(s,u,g)},enter(){t=i.flow.reduced,this.update(0,0)},update(y,M){e=M;const b=t?-900:-ae(e,0,ml.dur,ie.draw)*ml.px;r.style.transform=`translateX(${b*ml.parallax}px)`,o.style.backgroundPosition=`${b}px 0`,a.forEach((_,C)=>{const A=lu[C]+b;_.style.display=A<-100||A>2020?"none":"block",_.style.transform=`translateX(${A}px)`}),l.forEach((_,C)=>{const A=au[Io[C].lane],k=_.x0+_.v*e+b,F=k>-500&&k<2400;_.sprite.el.style.display=F?"block":"none",_.sprite.place(k,A.y,A.h).pose({t:e,phase:_.ph*3,walk:1}),_.prop.update(e,1),_.tag.update(e,t)});const P=e<5.3?1:Math.min(1,Math.max(0,(Rn.stopAt-e)/.3)),v=Rn.x0+Rn.v*Math.min(Math.max(e,0),Rn.stopAt)+b,E=t?0:nr(e,6.1,30,.38)+nr(e,8.3,46,.45);c.sprite.place(v,Rn.y,Rn.h).pose({t:e,phase:Rn.ph,walk:P,hop:E}),c.prop.update(e,P),c.tag.update(e,t);const g=t?1:14-13*ae(e,Jn.from,Jn.to-Jn.from,ie.draw);u.style.display=!t&&g>13.5?"none":"block",u.style.opacity=t?String(ae(e,Jn.from,.25,ie.enter)):"1",h.setAttribute("d",f1(Jn.cx,Jn.cy,g)),d.forEach((_,C)=>{const A=a1+C*.08,[k,F]=Le(e,A,.5,t),O=t?0:-18+18*ae(e,A,.5,ie.pop),L=t?0:Math.sin(e*3+C*.7)*6;Vt(_,{transform:`translateY(${L}px) rotate(${O}deg) scale(${k})`,opacity:String(F)})});for(const[_,C]of[[p,l1],[x,c1],[S,h1]]){const[A,k]=Le(e,C,.4,t);Vt(_,{transform:`scale(${A})`,opacity:String(k)})}m.update(e)},landed:()=>e>=ou,onInput(y){(y.type==="tap"||y.type==="key"&&(y.key===" "||y.key==="Enter"))&&(e<Jn.from?i.flow.seek(Jn.from):e>=ou&&i.flow.next())},exit(){},unmount(){},seek(y){this.update(0,y)}}}function f1(i,t,e){const n=150*e,s=70*e,r=130*e,o=t+Math.sqrt(n*n-s*s),a=t+420*e;return`M -2000 -2000 H 4000 V 3000 H -2000 Z M ${i-s} ${o} A ${n} ${n} 0 1 1 ${i+s} ${o} L ${i+r} ${a} L ${i-r} ${a} Z`}class lh{constructor(t){D(this,"el");D(this,"screen");D(this,"bezel");this.bezel=V("div",{"data-morph":"bezel",style:"position:absolute;inset:0;border-radius:72px;background:var(--ink);box-shadow:0 30px 60px var(--lit-phone-shadow)"}),this.screen=V("div",{"data-morph":"screen",style:"position:absolute;left:16px;top:16px;width:488px;height:948px;border-radius:56px;background:var(--cream);overflow:hidden"},V("div",{class:"pixel",style:"position:absolute;left:24px;top:18px;font-size:26px;color:var(--ink)"},t),V("div",{style:"position:absolute;left:174px;top:14px;width:140px;height:30px;border-radius:999px;background:var(--ink)"}),V("div",{style:"position:absolute;right:24px;top:20px;width:36px;height:18px;border-radius:5px;border:3px solid var(--ink);padding:2px"},V("div",{style:"width:70%;height:100%;background:var(--ink)"}))),this.el=V("div",{class:"phone",style:"position:absolute;left:700px;top:50px;width:520px;height:980px;transform-origin:260px 490px"},this.bezel,this.screen)}set(t,e){Vt(this.el,{transform:`translateY(${t}px) scale(${e})`})}}class p1{constructor(t,e,n){D(this,"el");D(this,"on",!1);D(this,"onAt",-1/0);this.label=t,this.colour=e,this.popAt=n,this.el=V("button",{class:"chip pixel","aria-pressed":"false",style:"position:absolute;width:208px;height:62px;border-radius:999px;border:5px solid var(--ink);background:var(--white);font-size:36px;color:var(--ink);display:flex;align-items:center;justify-content:center;pointer-events:auto"}),this.el.textContent=t}set(t,e){this.on=t,t&&(this.onAt=e),this.el.setAttribute("aria-pressed",String(t)),this.el.style.background=t?`var(--${this.colour})`:"var(--white)"}update(t,e){const[n,s]=Le(t,this.popAt,.4,e),r=this.on&&!e?1+.08*Math.exp(-(t-this.onAt)*8):1;Vt(this.el,{transform:`scale(${n*r})`,opacity:String(s)})}}class m1{constructor(t,e,n,s){D(this,"el");D(this,"track");D(this,"knob");D(this,"value");this.value=n,this.track=V("div",{style:"position:absolute;left:0;top:50px;width:408px;height:14px;border-radius:999px;background:var(--white);border:4px solid var(--ink)"}),this.knob=V("div",{class:"knob",style:"position:absolute;top:35px;width:44px;height:44px;border-radius:50%;background:var(--pink);border:5px solid var(--ink)"}),this.el=V("div",{class:"slider",role:"slider",tabindex:"0","aria-label":`${t} to ${e}`,"aria-valuemin":"0","aria-valuemax":"1",style:"position:absolute;width:408px;height:79px;pointer-events:auto;touch-action:none;cursor:pointer"},V("div",{class:"pixel",style:"position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;font-size:30px;color:var(--ink)"},V("span",{},t),V("span",{},e)),this.track,this.knob);const r=o=>{const a=this.track.getBoundingClientRect();this.set(Math.min(1,Math.max(0,(o.clientX-a.left)/a.width))),s(this.value)};this.el.addEventListener("pointerdown",o=>{this.el.setPointerCapture(o.pointerId),r(o)}),this.el.addEventListener("pointermove",o=>{this.el.hasPointerCapture(o.pointerId)&&r(o)}),this.set(n)}set(t){this.value=t,this.el.setAttribute("aria-valuenow",t.toFixed(2)),Vt(this.knob,{left:408*t-22})}}function g1(i){const t=V("button",{class:"btn display",style:"position:absolute;width:368px;height:84px;border-radius:999px;background:var(--ink);color:var(--yellow);font-size:34px;display:flex;align-items:center;justify-content:center;pointer-events:auto"});return t.textContent=i,t}const Er={at:.05,dur:.65,from:1150},x1=.35,v1=.8,cu=800,hu=590,gl=.5,_1=.45,du=.2,Qn=[.6,1.05,1.55,2.05,2.35,2.85,3.05,3.4],Do=[520,132,356,132,244,154,244,540],xl=[960,231,231,311,516,516,632,1e3],y1=[1.05,1.55,2.05],Ii={from:2.4,to:2.85,value:.28},vl=3,b1=6;function ts(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*ie.draw((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}function M1(){let i,t=!1,e=!0,n=!1,s=0,r,o=[],a,l,c=-1/0,h=!1,u,d=[],p,x=cu;const S=new Set,m=(b,P)=>{const v=V("div",{class:"ripple",style:"position:absolute;border-radius:50%;border:5px solid var(--ink);pointer-events:none"});r.screen.append(v),d.push({el:v,at:s,x:b,y:P})},f=()=>{i.store.data.progress.profile={chips:o.filter(b=>b.on).map(b=>b.label),loud:Number(a.value.toFixed(2))},i.store.save()},y=(b,P=!1)=>{const v=o[b];if(!(!v||h)){if(v.set(!v.on,s),!P){const E=v.el.getBoundingClientRect(),g=r.screen.getBoundingClientRect(),_=488/g.width;m((E.left+E.width/2-g.left)*_,(E.top+E.height/2-g.top)*_)}f()}},M=()=>{h||!o.some(b=>b.on)||(c=s,f())};return{id:"S1",mount(b,P){i=b;const v=b.copy.S1;x=b.params.campaign?hu:cu,p=new Ts(b.captions,b.copy.captions,[{key:"profile",at:.5}]),r=new lh(v.clock);const E=r.screen;E.append(V("div",{class:"display",style:"position:absolute;left:0;right:0;top:74px;text-align:center;font-size:52px;color:var(--ink)"},v.heading),V("div",{class:"pixel",style:"position:absolute;left:0;right:0;top:140px;text-align:center;font-size:30px;color:var(--lit-subline)"},v.sub)),o=v.chips.map(([g,_],C)=>{const A=new p1(g,_,x1+C*.07);return Vt(A.el,{left:C%2?252:28,top:200+Math.floor(C/2)*80}),A.el.addEventListener("click",k=>{k.stopPropagation(),y(C)}),E.append(A.el),A}),a=new m1(v.sliderLeft,v.sliderRight,gl,()=>f()),Vt(a.el,{left:40,top:454}),l=g1(v.button),Vt(l,{left:60,top:x}),l.addEventListener("click",g=>{g.stopPropagation(),M()}),u=V("div",{class:"finger",style:"position:absolute;width:68px;height:68px;border-radius:50%;background:var(--lit-touch);border:4px solid var(--white);pointer-events:none;display:none"}),E.append(a.el,l,u),E.addEventListener("pointerdown",()=>n=!1),ws(P,...Uc),P.append(r.el)},enter(b){t=i.flow.reduced,e=b!=="S2"&&b!=="S3",n=i.store.data.settings.auto,this.update(0,0)},update(b,P){s=P;const[v,E]=t?[1,ae(s,0,.2,ie.enter)]:[1,1],g=e&&!t?Er.from*(1-ae(s,Er.at,Er.dur,ie.pop)):0;r.set(g,v),r.el.style.opacity=String(E);const _=s-b1;if(n&&!h){y1.forEach((et,nt)=>{_>=et&&!S.has(nt)&&(S.add(nt),o[nt].on||y(nt,!0),m(ts(Qn,Do,et),ts(Qn,xl,et)))}),_>=Ii.from&&_<=Ii.to+.05&&(a.set(gl+(Ii.value-gl)*ae(_,Ii.from,Ii.to-Ii.from,ie.draw)),S.has(10)||(S.add(10),m(ts(Qn,Do,Ii.from),ts(Qn,xl,Ii.from))));const O=et=>ts(Qn,xl,et)+(x-hu)*ae(et,2.85,.2,ie.draw);_>=vl&&c<0&&(m(ts(Qn,Do,vl),O(vl)),M());const L=ts(Qn,Do,_),H=O(_),B=_>Qn[0]&&_<Qn[Qn.length-1];Vt(u,{display:B?"block":"none",left:L-34,top:H-34})}else u.style.display="none";o.forEach(O=>O.update(s,t));const[C,A]=Le(s,v1,.4,t),k=1-.06*Math.sin(Math.PI*Vi((s-c)/du)),F=o.some(O=>O.on);l.disabled=!F,Vt(l,{transform:`scale(${C*(c>=0?k:1)})`,opacity:String(A*(F?1:.4))}),d=d.filter(O=>{const L=(s-O.at)/_1;if(L>=1||t)return O.el.remove(),!1;const H=30+L*50;return Vt(O.el,{left:O.x-H,top:O.y-H,width:H*2,height:H*2,opacity:String(1-L)}),!0}),!h&&c>=0&&s>=c+du&&(h=!0,i.flow.next()),p.update(s)},landed:()=>s>=Er.at+Er.dur,onInput(b){if(b.type!=="key"||!b.key)return;n=!1;const P=Number(b.key);P>=1&&P<=6?y(P-1):b.key==="ArrowLeft"||b.key==="ArrowRight"?(a.set(Vi(a.value+(b.key==="ArrowLeft"?-.05:.05))),f()):b.key==="Enter"&&M()},exit(){},unmount(){},seek(b){this.update(0,b)}}}const nn={at:.15,dur:2.05,pitch:230,steps:12,count:15,h:400,cx:214,feet:490},No={at:2.2,dur:.2},w1=2.4;function S1(){let i,t=!1,e=0,n,s=[],r=!1,o=0,a;return{id:"S2",mount(l,c){i=l;const h=l.data.cast.cast.find(d=>d.id==="joe").sprite;a=new Ts(l.captions,l.copy.captions,[{key:"finding",at:.15}]);const u=new lh(l.copy.S1.clock);n=V("span",{}),o=nn.h*h.aspect,s=Array.from({length:nn.count},()=>V("img",{src:no(h.body),alt:"",style:`position:absolute;top:${nn.feet-nn.h}px;width:${o}px;height:${nn.h}px;transform-origin:50% 100%`})),u.screen.append(V("div",{class:"pixel s2-finding",style:"position:absolute;left:0;right:0;top:84px;text-align:center;font-size:44px;color:var(--ink)"},V("span",{},l.copy.S2.finding),n),V("div",{class:"s2-card",style:"position:absolute;left:24px;top:170px;width:440px;height:530px;border-radius:28px;background:var(--white);border:6px solid var(--ink);overflow:hidden"},...s),V("div",{style:"position:absolute;left:226px;top:160px;width:0;height:0;border-left:18px solid transparent;border-right:18px solid transparent;border-top:26px solid var(--pink)"})),ws(c,...Uc),c.append(u.el),l.store.data.progress.peepl="vinnie",l.store.save()},enter(){t=i.flow.reduced,this.update(0,0)},update(l,c){e=c,n.textContent="...".slice(0,Math.floor(e*3)%4);const h=(t?e>=nn.at?1:0:ae(e,nn.at,nn.dur,ie.enter))*nn.steps*nn.pitch;s.forEach((u,d)=>{const p=nn.cx+d*nn.pitch-h,x=Math.abs(p-nn.cx)<=420,S=d===nn.steps?1-ae(e,No.at,No.dur,ie.draw):1;Vt(u,{display:x?"block":"none",left:p-o/2,transform:`scale(${S})`})}),!r&&e>=w1&&(r=!0,i.flow.next()),a.update(e)},landed:()=>e>=nn.at+nn.dur,onInput(l){(l.type==="tap"||l.key===" "||l.key==="Enter")&&e<No.at&&i.flow.seek(No.at)},exit(){},unmount(){},seek(l){this.update(0,l)}}}const uu=(i,t,e)=>Array.from({length:e*2},(n,s)=>{const r=s/(e*2)*Math.PI*2,o=s%2?t:i;return`${(Math.cos(r)*o).toFixed(1)},${(Math.sin(r)*o).toFixed(1)}`}).join(" ");class E1{constructor(){D(this,"el");const t=(e,n)=>re("polygon",{points:e,style:`fill:var(--${n});stroke:var(--ink);stroke-width:6;stroke-linejoin:round`});this.el=re("g",{},t(uu(250,170,16),"yellow"),t(uu(170,118,12),"pink"))}update(t,e,n,s){this.el.setAttribute("transform",`translate(${t} ${e}) rotate(${n*25}) scale(${s})`)}}const fu=["pink","yellow","cyan","red","purple"];class A1{constructor(t){D(this,"el");D(this,"pieces");this.o=t,this.pieces=Array.from({length:t.count},(e,n)=>re("rect",{width:18,height:10,style:`fill:var(--${fu[n%fu.length]});stroke:var(--ink);stroke-width:2`})),this.el=re("g",{class:"confetti"},...this.pieces)}update(t,e,n,s){const r=!s&&n>0&&n<this.o.life;this.el.style.display=r?"inline":"none",r&&this.pieces.forEach((o,a)=>{const l=a/this.o.count*Math.PI*2+Hi(a)*.4,c=this.o.speed[0]+Hi(a+9)*this.o.speed[1],h=t+Math.cos(l)*c*n,u=e+Math.sin(l)*c*n+this.o.gravity*n*n;o.setAttribute("x",String(h-9)),o.setAttribute("y",String(u-5)),o.setAttribute("transform",`rotate(${n*this.o.spin+a*40} ${h} ${u})`)})}}const $s={cx:244,cy:470,at:0,dur:.5},T1=.15,es={x:244,feet:690,h:440,at:.15,dur:.6,hopAt:.8,hop:40},pu={at:.75,dur:.45,top:730},mu={at:1.2,dur:.4,top:812},gu={dur:3.4,to:1.06},C1=1.6;function R1(){let i,t=!1,e=0,n,s,r,o,a,l,c;return{id:"S3",mount(h,u){i=h;const d=h.copy.S3;c=new Ts(h.captions,h.copy.captions,[{key:"reveal",at:.3}]),n=new lh(h.copy.S1.clock),s=new E1,r=new A1({count:18,gravity:700,life:1.6,speed:[380,260],spin:500});const p=h.data.cast.cast.find(x=>x.id==="vinnie").sprite;o=new wa(p,{class:"sprite s3-vinnie"}).place(es.x,es.feet,es.h),o.img.dataset.morph="vinnie",a=V("div",{class:"display s3-name",style:`position:absolute;left:0;right:0;top:${pu.top}px;text-align:center;font-size:58px;color:var(--ink)`},d.name),l=V("div",{style:`position:absolute;left:0;right:0;top:${mu.top}px;display:flex;justify-content:center`},dn([d.pill],{size:32})),n.screen.append(re("svg",{width:488,height:948,style:"position:absolute;inset:0;overflow:visible"},s.el,r.el),o.el,a,l),ws(u,...Uc),u.append(n.el)},enter(){t=i.flow.reduced,this.update(0,0)},update(h,u){e=u,n.set(0,t?1:1+(gu.to-1)*ae(e,0,gu.dur,ie.draw));const[d,p]=Le(e,$s.at,$s.dur,t);s.update($s.cx,$s.cy,t?0:e,d),s.el.style.opacity=String(p),r.update($s.cx,$s.cy,e-T1,t);const[x,S]=Le(e,es.at,es.dur,t);o.pose({t:e,phase:1.2,hop:t?0:nr(e,es.hopAt,es.hop,.4),scale:x,opacity:S});for(const[m,f]of[[a,pu],[l,mu]]){const[y,M]=Le(e,f.at,f.dur,t);Vt(m,{transform:`scale(${y})`,opacity:String(M)})}c.update(e)},landed:()=>e>=C1,onInput(h){},exit(){},unmount(){},seek(h){this.update(0,h)}}}const zf=.15,Hf=.035,P1=3,k1=(i,t)=>Math.max(0,Math.min(i.length,Math.floor((t-zf)/Hf))),Br=i=>zf+i.length*Hf;class Vf{constructor(t,e="block"){D(this,"el");D(this,"text");D(this,"caret");D(this,"chip");this.chipColours=t,this.text=V("span",{class:"dialogue-text"}),this.caret=e==="block"?re("svg",{width:22,height:40,viewBox:"0 0 22 40",style:"display:inline-block;vertical-align:-6px;margin-left:12px"},re("rect",{x:2,y:2,width:18,height:36,style:"fill:var(--yellow)"})):re("svg",{width:26,height:22,viewBox:"0 0 26 22",style:"position:absolute;right:36px;bottom:28px"},re("path",{d:"M2 2h22L13 20z",style:"fill:var(--yellow)"})),this.chip=V("div",{class:"speaker-chip display",style:"position:absolute;left:30px;top:-40px;z-index:2;display:inline-flex;align-items:center;border-radius:999px;border:5px solid var(--ink);padding:8px 22px 10px;font-size:34px;color:var(--ink);white-space:nowrap"}),this.el=V("div",{class:"dialogue-box",style:"position:absolute;left:150px;top:660px;width:1000px;height:200px;transform-origin:0 100%"},this.chip,V("div",{class:"pixel",style:"position:absolute;inset:0;background:var(--ink);border-radius:28px;padding:38px 44px;font-size:54px;line-height:1.1;color:var(--white)"},this.text,this.caret))}update(t,e,n,s,r){s&&Nc(`${s.who.toLowerCase()}: ${s.text}`);const[o,a]=Le(t,e,.4,n);if(Vt(this.el,{transform:`scale(${o})`,opacity:String(a)}),this.chip.style.display=s?"inline-flex":"none",!s){this.text.textContent="",this.caret.style.visibility="hidden";return}this.chip.textContent=s.who,this.chip.style.background=this.chipColours[s.who]??"var(--white)";const l=k1(s.text,r);this.text.textContent=s.text.slice(0,l);const c=l>=s.text.length;this.caret.style.visibility=c&&Math.floor(t*P1*2)%2===0?"visible":"hidden"}}const F1=".reply-chip:hover,.reply-chip:focus-visible,.reply-chip.hl{background:var(--yellow)!important}";class L1{constructor(t){D(this,"el");D(this,"chips",[]);D(this,"shownAt",0);D(this,"highlighted",-1);this.onPick=t,this.el=V("div",{class:"reply-chips",style:"position:absolute;left:150px;bottom:484px;width:1100px;display:flex;flex-wrap:wrap-reverse;gap:16px;align-items:flex-end"}),this.el.append(V("style",{},F1))}get count(){return this.chips.length}show(t,e){this.clear(),this.shownAt=e,this.chips=t.map((n,s)=>{const r=V("button",{class:"reply-chip pixel",style:"min-width:208px;height:62px;padding:0 28px;border-radius:999px;border:5px solid var(--ink);background:var(--white);font-size:36px;color:var(--ink);white-space:nowrap;pointer-events:auto;transform-origin:50% 100%"});return r.textContent=n,r.addEventListener("click",o=>{o.stopPropagation(),this.onPick(s)}),r}),this.el.append(...this.chips)}clear(){for(const t of this.chips)t.remove();this.chips=[],this.highlighted=-1}update(t,e){this.chips.forEach((n,s)=>{const[r,o]=Le(t,this.shownAt+s*.07,.4,e);Vt(n,{transform:`scale(${r})`,opacity:String(o)}),n.classList.toggle("hl",s===this.highlighted)})}}const I1=.5;class D1{constructor(t,e){D(this,"el");D(this,"fill");D(this,"heart");D(this,"heartPath");D(this,"from",0);D(this,"to",0);D(this,"at",-1/0);this.from=this.to=e,this.fill=V("div",{class:"trust-fill",style:"height:100%;background:var(--pink)"}),this.heartPath=re("path",{d:"M 28 48 C 6 32 2 22 4 14 C 7 3 22 2 28 13 C 34 2 49 3 52 14 C 54 22 50 32 28 48 Z",style:"stroke:var(--ink);stroke-width:5;stroke-linejoin:round"}),this.heart=re("svg",{width:56,height:52,viewBox:"0 0 56 52",style:"overflow:visible"},this.heartPath),this.el=V("div",{class:"trust-meter",style:"position:absolute;left:1180px;top:76px;display:flex;align-items:center;gap:18px;transform-origin:0 50%"},V("div",{class:"pixel",style:"font-size:46px;color:var(--ink)"},t),V("div",{class:"trust-track",style:"width:460px;height:46px;border-radius:999px;background:var(--white);border:6px solid var(--ink);overflow:hidden"},this.fill),this.heart)}set(t,e){t!==this.to&&(this.from=this.value(e),this.to=t,this.at=e)}value(t){return this.from+(this.to-this.from)*ae(t,this.at,I1,ie.draw)}update(t,e,n){const[s,r]=Le(t,e,.4,n);Vt(this.el,{transform:`scale(${s})`,opacity:String(r)});const o=n?this.to:this.value(t);this.fill.style.width=`${o}%`;const a=o>=99.5;this.heartPath.style.fill=a?"var(--pink)":"var(--white)",this.heart.style.transform=`scale(${a&&!n?1+.12*Math.abs(Math.sin(t*6)):1})`}}const N1=(i,t)=>Math.max(0,Math.min(i.trust.max,t)),ch=(i,t)=>i.beats.filter(e=>e.days.includes(t));function U1(i,t=[]){return{mode:"bond",phase:"lines",day:1,beatIndex:0,trust:i.trust.start,set:{},queue:[],then:"choose",choices:[],autoPick:0,refusals:0,profile:t,history:[]}}function O1(i,t,e){const n=i.findIndex(o=>o.preferIfProfile&&e.includes(o.preferIfProfile));if(n<=0)return{choices:i,autoPick:t};const s=i[t],r=[i[n],...i.filter((o,a)=>a!==n)];return{choices:r,autoPick:r.indexOf(s)}}function _l(i,t,e){const n=ch(i,t.day)[e];if(!n)return B1(i,{...t,beatIndex:e});const s=t.day>1&&n.lineAgain?n.lineAgain:n.line;return{...t,beatIndex:e,phase:"lines",queue:[...s],then:"choose"}}function B1(i,t){return t.trust>=i.trust.closeMin?{...t,phase:"lines",queue:[...i.close.pass],then:"passed",trust:i.trust.max}:t.day>=i.days.forcedOnDay?{...t,phase:"lines",queue:[...i.close.forced],then:"passed",trust:i.trust.max}:{...t,phase:"lines",queue:[...i.close.fail],then:"nextDay"}}function z1(i,t){if(t.mode==="consent")return{choices:i.consent.choices,autoPick:i.consent.autoPick};const e=ch(i,t.day)[t.beatIndex];return O1(e.choices,e.autoPick,t.profile)}function xu(i,t,e){var n;switch(e.type){case"start":return _l(i,{...t,mode:"bond",day:e.day??t.day},0);case"consent":return{...t,mode:"consent",phase:"lines",queue:[...i.consent.ask],then:"choose"};case"lineDone":{if(t.phase!=="lines")return t;const s=t.queue.slice(1);if(s.length)return{...t,queue:s};switch(t.then){case"choose":return{...t,queue:s,phase:"choosing",...z1(i,t)};case"nextBeat":return _l(i,{...t,queue:s},t.beatIndex+1);default:return{...t,queue:s,phase:t.then}}}case"choose":{const s=t.phase==="choosing"?t.choices[e.index]:void 0;if(!s)return t;const r={who:"YOU",text:s.label},o={...t,phase:"lines",choices:[],set:{...t.set,...s.set},history:[...t.history,{beat:t.mode==="consent"?"consent":ch(i,t.day)[t.beatIndex].id,label:s.label}]};return t.mode==="bond"?{...o,trust:N1(i,t.trust+s.trust),queue:[r,...s.reply],then:"nextBeat"}:((n=s.set)==null?void 0:n.consent)==="yes"?{...o,queue:[r,...s.reply],then:"released"}:t.refusals>=1?{...o,refusals:t.refusals+1,queue:[r,...i.consent.forced],then:"released"}:{...o,refusals:t.refusals+1,queue:[r,...s.reply],then:"nextDay"}}case"nextDay":{if(t.phase!=="nextDay")return t;const s=t.day+1;return t.mode==="consent"?{...t,day:s,phase:"lines",queue:[...i.consent.askAgain],then:"choose"}:_l(i,{...t,day:s},0)}}}const Pn={x:1380,consentX:1340,feet:930,h:620},H1=[[40,60],[120,140],[70,250],[300,230],[200,90],[330,300]],V1=.6,G1=.5,W1=1,X1=.4,$1={VINNIE:.8,YOU:.4,MOCHI:.8},yl={first:4,every:12},Di={dur:1.6,swapAt:.8,fade:.25},Y1={S4:1.5,S5:1.2},q1={VINNIE:"var(--red)",YOU:"var(--cyan)",MOCHI:"var(--pink)"};function j1(){const i=H1.map(([a,l])=>V("div",{style:`position:absolute;left:${a}px;top:${l}px;width:10px;height:10px;background:var(--white)`})),t=V("div",{style:"position:absolute;left:150px;top:140px;width:420px;height:400px;border-radius:16px;border:10px solid var(--ink);background:var(--lit-window-navy);overflow:hidden"},V("div",{style:"position:absolute;left:250px;top:50px;width:90px;height:90px;border-radius:50%;background:var(--yellow);border:6px solid var(--ink)"}),...i,V("div",{style:"position:absolute;left:195px;top:0;width:10px;height:100%;background:var(--ink)"}),V("div",{style:"position:absolute;left:0;top:185px;width:100%;height:10px;background:var(--ink)"})),e=V("div",{style:"position:absolute;left:900px;top:0;width:0;height:0;transform-origin:0 0"},V("div",{style:"position:absolute;left:-4px;top:0;width:8px;height:200px;background:var(--ink)"}),V("div",{style:"position:absolute;left:-170px;top:250px;width:340px;height:260px;background:radial-gradient(ellipse at 50% 0%, var(--lit-lamp-glow), transparent 70%)"}),re("svg",{width:220,height:120,style:"position:absolute;left:-110px;top:190px"},re("path",{d:"M 70 6 L 150 6 L 212 110 L 8 110 Z",style:"fill:var(--yellow);stroke:var(--ink);stroke-width:8;stroke-linejoin:round"}))),n=(a,l,c,h,u)=>re("ellipse",{cx:a,cy:l,rx:c,ry:h,style:`fill:var(--${u});stroke:var(--ink);stroke-width:7`}),s=[n(80,120,44,90,"lit-plant-1"),n(150,100,44,100,"lit-plant-2")],r=re("svg",{width:340,height:440,viewBox:"-40 -40 340 440",style:"position:absolute;left:1580px;top:500px;overflow:visible"},...s,n(118,140,40,84,"lit-plant-3"),re("path",{d:"M 50 230 L 210 230 L 190 330 L 70 330 Z",style:"fill:var(--lit-pot);stroke:var(--ink);stroke-width:8;stroke-linejoin:round"}));return{el:V("div",{class:"room",style:`position:absolute;left:0;top:0;width:1920px;height:${ze(1080,1700)}px;background:var(--cream);overflow:hidden`},V("div",{style:"position:absolute;inset:0;background-image:repeating-linear-gradient(90deg,var(--lit-wallpaper) 0 40px,transparent 40px 80px)"}),t,V("div",{style:"position:absolute;left:0;top:640px;width:1920px;height:230px;background:var(--pink);border-top:8px solid var(--ink)"}),V("div",{style:`position:absolute;left:0;top:860px;width:1920px;height:${ze(220,840)}px;background-color:var(--wood);border-top:8px solid var(--ink);background-image:repeating-linear-gradient(90deg,transparent 0 236px,var(--lit-plank-gap) 236px 242px)`}),e,r),update(a,l){const c=l?0:1;e.style.transform=`rotate(${Math.sin(a*1.3)*3*c}deg)`,i.forEach((h,u)=>h.style.opacity=String(l?1:.5+.5*Math.sin(a*3+u))),s[0].setAttribute("transform",`rotate(${-24+Math.sin(a*1.6)*3*c} 110 300)`),s[1].setAttribute("transform",`rotate(${14+Math.sin(a*1.6+1)*3*c} 130 300)`)}}}function Gf(i){const t=i==="S5";let e,n,s=!1,r=0,o,a,l,c,h,u,d,p=0,x=-1,S=yl.first,m=-1,f=-1,y=!1,M=-1/0,b=!1,P=!1,v=!1,E=[],g=null;const _=()=>d.phase==="lines"?d.queue[0]??null:null,C=()=>{const O=e.store.data.progress;O.dialogue={mode:d.mode,day:d.day,beatIndex:d.beatIndex,trust:d.trust,set:d.set,history:d.history},O.trust=d.trust,d.phase==="released"&&(O.released=!0),e.store.save()},A=O=>{const L=d;if(d=xu(n,d,O),d===L)return;p=r;const H=_();(H==null?void 0:H.who)==="VINNIE"&&H.hop&&H!==L.queue[0]&&E.push({at:r,h:H.hop}),d.phase==="choosing"&&L.phase!=="choosing"&&(x=r,S=yl.first,c.show(d.choices.map(B=>B.label),r)),d.phase==="nextDay"&&(m=r),(d.phase==="passed"||d.phase==="released")&&f<0&&(f=r,h.set(100,r),e.toast.show(d.phase==="passed"?e.data.dialogue.close.toast:e.data.dialogue.consent.confirmToast)),!v&&!t&&d.mode==="bond"&&d.beatIndex>=2&&d.day===1&&(v=!0,e.captions.show(e.copy.captions.room2??"",3.7)),C()},k=O=>{if(d.phase!=="choosing"||!d.choices[O])return;const L=d.choices[O];c.clear(),x=-1,L.trust<0&&(M=r),A({type:"choose",index:O}),t||h.set(d.trust,r)},F=()=>{const O=_();if(!O)return;r-p<Br(O.text)?p=r-Br(O.text):A({type:"lineDone"})};return{id:i,mount(O,L){var nt;e=O,n=O.data.dialogue,o=j1();const H=O.data.cast.cast.find(ht=>ht.id==="vinnie").sprite;a=new wa(H,{class:`sprite ${i==="S4"?"s4":"s5"}-vinnie`}).place(Pn.x,Pn.feet,Pn.h),a.img.dataset.morph="vinnie",l=new Vf(q1),c=new L1(ht=>k(ht));const B=O.store.data.progress.dialogue,et=((nt=O.store.data.progress.profile)==null?void 0:nt.chips)??[];d={...U1(n,et),...t&&B?{trust:B.trust??100,set:B.set??{},history:B.history??[]}:{}},h=new D1(O.copy.S4.trust,t?100:d.trust),u=V("div",{class:"next-day",style:"position:absolute;inset:0;background:var(--ink);display:none;align-items:center;justify-content:center"},V("div",{class:"pixel",style:"font-size:64px;color:var(--white)"},O.copy.S4.nextDay)),ws(L,Pn.x,Pn.feet,760/Pn.h,540,1080),Pe(h.el,{left:60,top:80}),Pe(l.el,{left:60,top:1300,width:960,height:300}),Pe(c.el,{left:60,bottom:684,width:740,flexDirection:"column-reverse",alignItems:"flex-start",transform:"scale(1.3)",transformOrigin:"0 100%"}),Pe(u,{}),L.append(o.el,a.el,h.el,c.el,l.el,u),Tt.roomPick=()=>d.phase==="choosing"&&x>=0?d.autoPick:-1},enter(){s=e.flow.reduced,this.update(0,0)},update(O,L){r=L,!b&&r>=(t?X1:W1)&&(b=!0,A(t?{type:"consent"}:{type:"start",day:1})),!t&&!P&&r>=.8&&(P=!0,e.captions.show(e.copy.captions.room1??"",3.1)),o.update(r,s);const H=_();if(H&&r-p>=Br(H.text)+$1[H.who]&&A({type:"lineDone"}),d.phase==="choosing"&&x>=0&&r-x>=S&&(S+=yl.every,e.captions.show(e.copy.captions.yourTurn??"",3)),m>=0){const yt=r-m,wt=Math.min(ae(yt,0,Di.fade,ie.enter),1-ae(yt,Di.dur-Di.fade,Di.fade,ie.enter));if(Vt(u,{display:yt<Di.dur?"flex":"none",opacity:String(wt)}),d.phase==="nextDay"&&yt>=Di.swapAt){d=xu(n,d,{type:"nextDay"}),p=m+Di.dur;const j=_();j!=null&&j.hop&&E.push({at:p,h:j.hop}),C()}yt>=Di.dur&&(m=-1)}const B=_();B&&r>=p&&(g=B),d.phase==="nextDay"&&(g=null);const et=B?r-p<Br(B.text):!1,nt=B?Math.max(0,r-p):1/0;l.update(r,t?-1:V1,s,B??g,nt),c.update(r,s),h.update(r,t?-1:G1,s);const ht=s?0:E.reduce((yt,wt)=>yt+nr(r,wt.at,wt.h,wt.h>=60?.45:.4),0),pt=(B==null?void 0:B.who)==="YOU"&&et&&!s?-4:0,At=!s&&r-M<.12?.96:1,Kt=t?Pn.x+(Pn.consentX-Pn.x)*ae(r,0,.5,ie.draw):Pn.x;a.place(Kt,Pn.feet,Pn.h).pose({t:r,phase:1.2,hop:ht,rot:pt,squash:At}),f>=0&&!y&&r-f>=Y1[i]&&!_()&&(y=!0,e.flow.next())},landed:()=>r>=.5,onInput(O){O.type==="key"&&O.key&&/^[1-4]$/.test(O.key)?k(Number(O.key)-1):(O.type==="tap"||O.key===" "||O.key==="Enter")&&F()},choose:k,exit(){},unmount(){delete Tt.roomPick},seek(O){this.update(0,O)}}}const Z1=()=>Gf("S4"),K1=()=>Gf("S5"),Wf=[960,560,1.15,540,820],bl=440,Ar={x:740,top:652,w:440,h:320},Tr=.75,vu=.32,Cr={at:1.35,dur:.35,deg:128},Rr={at:1.45,dur:.7,from:520},J1=2.15,ha={at:1.4,life:1.5,count:16},Ml={at:2.6,dur:.6,px:760},_u=3.2,Q1=["yellow","cyan","white","red"];class Xf{constructor(t){D(this,"el");D(this,"keychain");D(this,"sticker");D(this,"box");D(this,"keyClip");D(this,"flapL");D(this,"flapR");D(this,"confetti");const e=t.copy.S6,n=t.data.cast.cast.find(h=>h.id==="vinnie").sprite,s=bl*n.aspect,r=V("div",{style:`position:absolute;left:${ze(250,470)}px;top:110px;width:440px;height:800px;background:var(--cyan);border:10px solid var(--ink);border-bottom:none;border-radius:18px 18px 0 0`},V("div",{style:"position:absolute;left:50px;top:60px;width:320px;height:260px;border:8px solid var(--ink);border-radius:12px"}),V("div",{style:"position:absolute;left:50px;top:370px;width:320px;height:330px;border:8px solid var(--ink);border-radius:12px"}),V("div",{class:"display door-plate",style:"position:absolute;left:150px;top:110px;width:120px;height:90px;background:var(--white);border:7px solid var(--ink);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:64px;color:var(--ink)"},e.door),V("div",{style:"position:absolute;left:350px;top:400px;width:40px;height:40px;border-radius:50%;background:var(--yellow);border:7px solid var(--ink)"})),o=V("div",{style:`position:absolute;left:0;top:900px;width:1920px;height:${ze(180,800)}px;background:var(--cream);border-top:8px solid var(--ink)`}),a=V("div",{class:"pixel mat",style:"position:absolute;left:740px;top:912px;width:440px;height:58px;background:var(--wood);border:6px solid var(--ink);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:44px;color:var(--ink)"},e.mat);this.sticker=V("img",{src:no(n.body),alt:"",class:"keychain-img",style:`position:absolute;left:${-s/2}px;top:228px;width:${s}px;height:${bl}px;filter:drop-shadow(5px 0 0 var(--white)) drop-shadow(-5px 0 0 var(--white)) drop-shadow(0 5px 0 var(--white)) drop-shadow(0 -5px 0 var(--white)) drop-shadow(0 26px 22px var(--lit-sticker-shadow))`});const l=dn([e.nfc],{size:30});Vt(l,{position:"absolute",left:-46,top:228+bl-10}),this.keychain=V("div",{class:"keychain",style:"position:absolute;left:960px;top:0;width:0;height:0;transform-origin:0 0"},V("div",{style:"position:absolute;left:-9px;top:-20px;width:18px;height:190px;border-radius:9px;background:repeating-linear-gradient(180deg,var(--lit-chain) 0 16px,var(--lit-chain-hi) 16px 22px)"}),V("div",{style:"position:absolute;left:-44px;top:150px;width:88px;height:88px;border-radius:50%;border:13px solid var(--lit-ring)"}),this.sticker,l),this.keyClip=V("div",{style:"position:absolute;inset:0"},this.keychain);const c=h=>V("div",{style:`position:absolute;${h}:0;top:-44px;width:220px;height:48px;background:var(--lit-flaps);border:7px solid var(--ink);transform-origin:${h==="left"?"0%":"100%"} 100%`});this.flapL=c("left"),this.flapR=c("right"),this.box=V("div",{class:"ship-box",style:`position:absolute;left:${Ar.x}px;top:${Ar.top}px;width:${Ar.w}px;height:${Ar.h}px;transform-origin:50% 100%`},this.flapL,this.flapR,V("div",{style:"position:absolute;inset:0;background:var(--lit-cardboard);border:8px solid var(--ink);border-radius:8px"},V("div",{style:"position:absolute;left:190px;top:0;width:44px;height:100%;background:var(--lit-tape)"}),V("div",{style:"position:absolute;left:40px;top:110px;width:250px;padding:14px 18px;background:var(--white);border:5px solid var(--ink);border-radius:10px;transform:rotate(-4deg)"},V("div",{class:"display box-label",style:"font-size:44px;color:var(--ink)"},e.boxLabel),V("div",{class:"pixel box-sub",style:"font-size:28px;color:var(--ink);margin-top:6px"},e.boxSub)))),this.confetti=Array.from({length:ha.count},(h,u)=>V("div",{style:`position:absolute;left:0;top:0;width:26px;height:14px;background:var(--${Q1[u%4]});border:3px solid var(--ink)`})),this.el=V("div",{class:"ship-set",style:`position:absolute;left:0;top:0;width:1920px;height:${ze(1080,1700)}px;overflow:hidden`},r,o,a,this.keyClip,this.box,...this.confetti)}pose(t){const e=Ar.top+t.boxY;Vt(this.box,{top:e,transform:`scale(${1+t.squash*.12}, ${1-t.squash*.14})`,display:e>1100?"none":"block"}),this.flapL.style.transform=`rotate(${-t.flap}deg)`,this.flapR.style.transform=`rotate(${t.flap}deg)`,Vt(this.keyClip,{clipPath:`inset(0 0 ${Math.max(0,1080-e)}px 0)`,opacity:t.keyVisible?"1":"0"}),Vt(this.keychain,{top:t.lift,transform:`rotate(${t.rot}deg)`});const n=!t.reduced&&t.ct>0&&t.ct<ha.life;this.confetti.forEach((s,r)=>{if(!n)return void(s.style.display="none");const o=-Math.PI/2+(Hi(r)-.5)*2.2,a=700+Hi(r+5)*500,l=960+Math.cos(o)*a*t.ct,c=650+Math.sin(o)*a*t.ct+1400*t.ct*t.ct;Vt(s,{display:"block",transform:`translate(${l}px, ${c}px) rotate(${t.ct*600+r*30}deg)`})})}}function tb(){let i,t=!1,e=0,n,s;return{id:"S6",mount(r,o){i=r,n=new Xf(r),s=new Ts(r.captions,r.copy.captions,[{key:"ship",at:.3}]),ws(o,...Wf),o.append(n.el)},enter(){t=i.flow.reduced,this.update(0,0)},update(r,o){e=o;const a=t?0:e<Tr?-1300*(1-ie.fall(Vi((e-.2)/(Tr-.2)))):0,l=!t&&e>Tr&&e<Tr+vu?Math.sin(Math.PI*(e-Tr)/vu):0,c=ae(e,Ml.at,Ml.dur,ie.draw)*Ml.px,h=t?e>=Cr.at?Cr.deg:0:ae(e,Cr.at,Cr.dur,ie.pop)*Cr.deg,u=t?e>=Rr.at?0:Rr.from:Rr.from*(1-ae(e,Rr.at,Rr.dur,ie.pop));n.pose({boxY:a+c,squash:l,flap:h,lift:u,rot:t?0:Fl(e,J1,14),keyVisible:e>ha.at,ct:e-ha.at,reduced:t}),s.update(e)},landed:()=>e>=_u,onInput(r){(r.type==="tap"||r.key===" "||r.key==="Enter")&&e>=_u&&i.flow.next()},exit(){},unmount(){},seek(r){this.update(0,r)}}}const Ni={enter:.6,from:2300,to:1330,nudgeAt:.8,nudge:150},Ui=1.1,wl={peak:.7,dur:.23},ns={count:3,life:1,stagger:.16,from:40,grow:700,cx:ze(1040,960),cy:ze(520,600)},eb=1.3,yu=1.5,nb=1,bu=1.25,Sl={x:960,y:448};function ib(){let i,t=!1,e=0,n=-1,s=!1,r,o,a,l,c,h,u,d,p=[],x;const S=()=>{n>=0||(n=e)};return{id:"S7",mount(m,f){i=m;const y=m.copy.S7;if(r=new Xf(m),x=new Ts(m.captions,m.copy.captions,[{key:"tap",at:0}]),o=V("button",{class:"keychain-hit","aria-label":y.waitPill,style:`position:absolute;left:${Sl.x-180}px;top:188px;width:360px;height:520px;border-radius:40px;pointer-events:auto`}),o.addEventListener("click",M=>{M.stopPropagation(),S()}),a=V("div",{class:"wait-ring",style:"position:absolute;left:0;top:0;width:400px;height:400px;margin:-200px 0 0 -200px;border-radius:50%;border:8px solid var(--pink);pointer-events:none"}),l=V("div",{class:"wait-pill",style:"position:absolute;left:0;right:0;top:832px;display:flex;justify-content:center;gap:16px"},dn([y.waitPill],{size:32})),"NDEFReader"in window){const M=dn([y.realNfc],{size:32,tag:"button"});M.style.pointerEvents="auto",M.addEventListener("click",async b=>{b.stopPropagation();try{const P=window.NDEFReader,v=new P;await v.scan(),v.onreading=()=>S()}catch{}}),l.append(M)}h=V("div",{class:"pixel notification",style:"width:230px;padding:14px 16px;background:var(--yellow);border:6px solid var(--ink);border-radius:24px;font-size:32px;line-height:1.05;color:var(--ink);transform-origin:50% 0"},V("div",{class:"notif-title"},y.notifTitle),V("div",{class:"notif-body"},y.notifBody)),c=V("div",{class:"tap-phone",style:"position:absolute;left:0;top:300px;width:300px;height:540px;border-radius:48px;background:var(--ink);padding:16px;box-shadow:0 22px 40px var(--lit-phone-shadow)"},V("div",{style:"width:100%;height:100%;border-radius:34px;background:var(--lit-phone-glass);display:flex;justify-content:center;padding-top:60px"},h)),u=V("div",{class:"handshake",style:"position:absolute;left:0;right:0;top:820px;display:flex;justify-content:center"},V("div",{class:"display handshake-pill",style:"display:inline-flex;align-items:center;gap:14px;border-radius:999px;background:var(--yellow);border:6px solid var(--ink);padding:12px 26px 14px;font-size:58px;color:var(--ink);white-space:nowrap"},y.handshake,xs("check",52,"var(--ink)"))),p=Array.from({length:ns.count},(M,b)=>V("div",{style:`position:absolute;border-radius:50%;border-style:solid;border-color:var(--${b%2?"cyan":"yellow"});pointer-events:none`})),d=V("div",{style:"position:absolute;inset:0;background:var(--white);pointer-events:none;opacity:0"}),ws(f,...Wf),Pe(l,{top:1500}),Pe(u,{top:1500}),Pe(d,{}),f.append(r.el,a,l,o,...p,c,u,d)},enter(){t=i.flow.reduced,this.update(0,0)},update(m,f){e=f;const y=n>=0?e-n:-1,M=t?0:Fl(e,-2,14)+(y>=Ui?Fl(y,Ui,-10):0);r.pose({boxY:2e3,squash:0,flap:128,lift:0,rot:M,keyVisible:!0,ct:-1,reduced:t});const b=n<0,P=e%bu/bu;Vt(a,{display:b?"block":"none",transform:`translate(${Sl.x}px, ${Sl.y}px) scale(${t?1:.6+.9*P})`,opacity:String(t?.8:1-P)}),Vt(l,{display:b?"flex":"none"}),o.style.display=b?"block":"none";const v=y<0?Ni.from:Ni.from+(Ni.to-Ni.from)*ae(y,0,Ni.enter,ie.enter)-Ni.nudge*ae(y,Ni.nudgeAt,Ui-Ni.nudgeAt,ie.draw),E=Sn?`translate(810px, ${v-920}px) rotate(-6deg)`:`translateX(${v-150}px) rotate(12deg)`;Vt(c,{transform:E,display:y<0?"none":"block"});const g=y>=Ui&&!t?Math.max(0,wl.peak-(y-Ui)/wl.dur*wl.peak):0;d.style.opacity=String(g),p.forEach((F,O)=>{const L=t||y<0?-1:(y-Ui-O*ns.stagger)/ns.life;if(L<=0||L>=1)return void(F.style.display="none");const H=ns.from+L*ns.grow;Vt(F,{display:"block",left:ns.cx-H,top:ns.cy-H,width:H*2,height:H*2,borderWidth:`${12-L*8}px`,opacity:String(1-L)})});const[_,C]=y<0?[0,0]:Le(y,eb,.4,t);Vt(u,{transform:`scale(${_})`,opacity:String(C)});const[A,k]=y<0?[0,0]:Le(y,yu,.4,t);Vt(h,{transform:`scale(${A})`,opacity:String(k)}),y>=Ui&&!i.store.data.progress.handshake&&(i.store.data.progress.handshake=!0,i.store.save()),y<Ui?x.update(e):i.captions.hide(),!s&&y>=yu+nb&&(s=!0,i.flow.next())},landed:()=>e>=.3,onInput(m){(m.type==="tap"||m.key===" "||m.key==="Enter")&&S()},exit(){},unmount(){},seek(m){this.update(0,m)}}}const gn={sky:13627391,ground:16046520,hemi:1.5,key:16773590,keyI:2.1,elevation:55,azimuth:35};function hh(){const i=new hn,t=new km(gn.sky,gn.ground,gn.hemi),e=new Im(gn.key,gn.keyI),n=gn.elevation*Math.PI/180,s=gn.azimuth*Math.PI/180;return e.position.set(Math.cos(n)*Math.sin(s)*30,Math.sin(n)*30,Math.cos(n)*Math.cos(s)*30),i.add(t,e,e.target),{group:i,key:e,hemi:t}}const Pr={sky:9403332,ground:16757642,hemi:1,key:16752250,keyI:1.2},Mu={day:[702702,8377333,14087423],dusk:[5979791,11954864,16752335]},wu={day:16777215,dusk:new ee().setRGB(42/53,38/49,64/75,Ze)},Su={day:16770976,dusk:16765530},kn=i=>i instanceof ee?i.clone():new ee(i),ti=i=>i*3600,Uo=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function sb(i){const t=(i%86400+86400)%86400,e=t>=ti(12)?Uo(ti(19.5),ti(20.25),t):1-Uo(ti(6),ti(6.75),t),n=t>=ti(12)?Uo(ti(21),ti(21.75),t):1-Uo(ti(5.25),ti(6),t);return{dusk:e,night:n}}function rb(i,t,e){e.hemi.color.copy(kn(gn.sky).lerp(kn(Pr.sky),i)),e.hemi.groundColor.copy(kn(gn.ground).lerp(kn(Pr.ground),i)),e.hemi.intensity=gn.hemi+(Pr.hemi-gn.hemi)*i,e.key.color.copy(kn(gn.key).lerp(kn(Pr.key),i)),e.key.intensity=(gn.keyI+(Pr.keyI-gn.keyI)*i)*(1-.92*t),["uTop","uMid","uBottom"].forEach((n,s)=>e.sky[n].value.copy(kn(Mu.day[s]).lerp(kn(Mu.dusk[s]),i))),e.fog.color.copy(kn(wu.day).lerp(kn(wu.dusk),i)),e.glow.value.copy(kn(Su.day).lerp(kn(Su.dusk),i))}function ob(i,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,s=[new N,new N,new N],r=new N,o=new N,a=new N,l=new N;function c(S){const m=~~(S.x*n),f=~~(S.y*n),y=~~(S.z*n);return`${m},${f},${y}`}const h=i.index?i.toNonIndexed():i,u=h.attributes.position,d={};for(let S=0,m=u.count/3;S<m;S++){const f=3*S,y=s[0].fromBufferAttribute(u,f+0),M=s[1].fromBufferAttribute(u,f+1),b=s[2].fromBufferAttribute(u,f+2);r.subVectors(b,M),o.subVectors(y,M);const P=new N().crossVectors(r,o).normalize();for(let v=0;v<3;v++){const E=s[v],g=c(E);g in d||(d[g]=[]),d[g].push(P)}}const p=new Float32Array(u.count*3),x=new ve(p,3,!1);for(let S=0,m=u.count/3;S<m;S++){const f=3*S,y=s[0].fromBufferAttribute(u,f+0),M=s[1].fromBufferAttribute(u,f+1),b=s[2].fromBufferAttribute(u,f+2);r.subVectors(b,M),o.subVectors(y,M),a.crossVectors(r,o).normalize();for(let P=0;P<3;P++){const v=s[P],E=c(v),g=d[E];l.set(0,0,0);for(let _=0,C=g.length;_<C;_++){const A=g[_];a.dot(A)>e&&l.add(A)}l.normalize(),x.setXYZ(f+P,l.x,l.y,l.z)}}return h.setAttribute("normal",x),h}const er=["root","pelvis","torso","neck","head","eyes","mouthA","mouthB","head_top","head_front","head_L","head_R","mouth_R","torso_front","hip_back","tail","shoulder_L","upperArm_L","foreArm_L","hand_L","shoulder_R","upperArm_R","foreArm_R","hand_R","hip_L","thigh_L","shin_L","foot_L","hip_R","thigh_R","shin_R","foot_R"];function ab(i){const t=i.chinY+i.headU/2,e=i.headU,n={root:[0,0,0],pelvis:[0,i.hipY,0],torso:[0,i.hipY+.05,0],neck:[0,i.shoulderY,0],head:[0,i.chinY,0],eyes:[.04*e,t+.05*e,.2*e],mouthA:[.04*e,t-.2*e,.22*e],mouthB:[.04*e,t-.24*e,.22*e],head_top:[0,i.crownY,0],head_front:[.04*e,t,0],head_L:[-.33*e,t-.065*e,-.035*e],head_R:[.33*e,t-.065*e,-.035*e],mouth_R:[.14*e,t-.22*e,.24*e],torso_front:[0,i.hipY+.05+i.torsoLen*.5,0],hip_back:[0,i.hipY-.1,-.2*i.belly],tail:[0,i.hipY-.1,-.2*i.belly],shoulder_L:[-i.shoulderX,i.shoulderY-.08,0],upperArm_L:[-i.shoulderX,i.shoulderY-.08,0],foreArm_L:[-i.shoulderX,i.shoulderY-.08-i.armUpper,0],hand_L:[-i.shoulderX,i.shoulderY-.08-i.armUpper-i.armFore,0],shoulder_R:[i.shoulderX,i.shoulderY-.08,0],upperArm_R:[i.shoulderX,i.shoulderY-.08,0],foreArm_R:[i.shoulderX,i.shoulderY-.08-i.armUpper,0],hand_R:[i.shoulderX,i.shoulderY-.08-i.armUpper-i.armFore,0],hip_L:[-i.hipX,i.hipY,0],thigh_L:[-i.hipX,i.hipY,0],shin_L:[-i.hipX,i.hipY-i.thigh,0],foot_L:[-i.hipX,i.ankleY,0],hip_R:[i.hipX,i.hipY,0],thigh_R:[i.hipX,i.hipY,0],shin_R:[i.hipX,i.hipY-i.thigh,0],foot_R:[i.hipX,i.ankleY,0]},s={pelvis:"root",torso:"pelvis",neck:"torso",head:"neck",eyes:"head",mouthA:"head",mouthB:"head",head_top:"head",head_front:"head",head_L:"head",head_R:"head",mouth_R:"head",torso_front:"torso",hip_back:"pelvis",tail:"hip_back",shoulder_L:"torso",upperArm_L:"shoulder_L",foreArm_L:"upperArm_L",hand_L:"foreArm_L",shoulder_R:"torso",upperArm_R:"shoulder_R",foreArm_R:"upperArm_R",hand_R:"foreArm_R",hip_L:"pelvis",thigh_L:"hip_L",shin_L:"thigh_L",foot_L:"shin_L",hip_R:"pelvis",thigh_R:"hip_R",shin_R:"thigh_R",foot_R:"shin_R"},r={},o={},a={};er.forEach((l,c)=>{const h=new pf;h.name=l,r[l]=h,o[l]=new N(...n[l]),a[l]=c});for(const l of er){const c=s[l],h=o[l].clone();c&&(r[c].add(r[l]),h.sub(o[c])),r[l].position.copy(h)}return{bones:r,list:er.map(l=>r[l]),index:a,bind:o}}const kc=["head","h","T","A","hem","belly","legs"];function lb(i,t,e={}){var r;const n=i[t.body],s={headScale:e.headScale??t.headScale};for(const o of kc)s[o]=n[o]*(((r=t.shape)==null?void 0:r[o])??1)*(e[o]??1);return s}function cb(i){const t=i.head*i.headScale,e=i.h*3.45-i.head,n=1.25*i.legs,s=.15,r=Math.max(.3,e-n-s),o=n+r,a=o+s,l=.5+.5*(r/1.05),c=n/1.25;return{s:i,headU:t,hipY:n,shoulderY:o,chinY:a,crownY:a+t,torsoLen:r,T:i.T,A:i.A,hem:i.hem,belly:i.belly,shoulderX:.48*i.T,armUpper:.42*l,armFore:.4*l,hipX:.15*Math.sqrt(i.T),thigh:.56*c,shin:.55*c,ankleY:.14*c}}const Eu=i=>i.crownY/i.headU,Bi={color:"#111111",flat:!0,outline:0},fs="#FFFFFF";function Ln(i){const t=i.d.headU;return{q:{a:.34*t,b:.5*t,c:.26*t,e1:.55,e2:.75},c:[.04*t,i.d.chinY+t/2,0]}}function $f(i){const t=i.d;return{q:{a:.38*t.T,b:t.torsoLen/2+.02,c:.26*t.belly,e1:.45,e2:.5},y:t.hipY+.05+t.torsoLen/2}}const Vn=(i,t=.35)=>{const e=new Un(i,12,8);return e.scale(1,1,t),e};function hb(i,t){const e=i.d,n=e.headU,s={color:t.skin,outline:1},r={color:t.hands??t.skin,outline:.8},o=t.top,a=o.type==="body",l={color:a?t.skin:o.color,outline:1,...o.pattern?{pattern:o.pattern,color2:o.color2??fs,rep:4}:{}},c=o.type==="varsity"&&o.color2?{color:o.color2,outline:.8}:{...l,outline:.8},h=o.type==="polo"||o.type==="hawaiian",{q:u,c:d}=Ln(i);i.blob(u,"head",s,d);for(const f of[-1,1]){const y=f<0?"head_L":"head_R",M=i.rig.bind[y];if(i.blob({a:.06*n,b:.12*n,c:.113*n,e1:1,e2:1},y,{...s,outline:.8},[M.x,M.y,M.z]),f<0)for(const b of[1,-1])i.box(.02*n,.113*n,.013*n*2,y,Bi,[M.x-.062*n,M.y,M.z],[b*Math.PI/4,0,0])}i.cyl(.11,.11,e.chinY-e.shoulderY+.13,"neck",{...s,outline:.8},[0,(e.shoulderY+e.chinY)/2,0]);const{q:p,y:x}=$f(i);if((a||o.type==="offshoulder")&&i.blob(p,"torso",s,[0,x,0]),!a){const f=o.type==="offshoulder",y=tr(p,.04,f?{b:p.b*.82}:{});if(i.blob(y,"torso",l,[0,f?x-p.b*.2:x,0]),i.torus(y.a*.92,.035,"torso",{...l,pattern:void 0,outline:.8},[0,e.hipY+.08,0],[Math.PI/2,0,0]),o.type==="hoodie"){i.box(.42*e.T,.16,.06,"torso",{color:o.color,outline:.7},[0,e.hipY+.3,p.c*.95]);for(const M of[-1,1])i.cyl(.012,.012,.3,"torso",{color:fs,outline:0},[M*.07,e.shoulderY-.25,p.c*.9])}o.type==="polo"&&i.box(.3,.06,.12,"torso",{color:o.color,outline:.7},[0,e.shoulderY-.02,.14],[-.4,0,0]),o.collar==="tee"&&i.torus(.13,.025,"torso",{color:o.color,outline:.7},[0,e.shoulderY-.02,0],[Math.PI/2,0,0]),o.collar==="vneck"&&i.onFace(tr(p,.04),[0,x,0],db(.2,.26),"torso",{color:t.skin},0,p.b-.18,.01)}const S={a:.34*e.T,b:.14,c:.23*e.belly,e1:.6,e2:.6},m={color:t.pants.color,outline:.8};i.blob(tr(S,.04),"pelvis",m,[0,e.hipY-.01,0]);for(const f of["L","R"]){const y=f==="L"?-1:1,M=i.rig.bind[`upperArm_${f}`],b=i.rig.bind[`foreArm_${f}`],P=i.rig.bind[`hand_${f}`],v=[0,0,y*.05];i.blob({a:.12*e.A+.04,b:e.armUpper/2+.06,c:.13*e.A+.04,e1:.5,e2:.8},`upperArm_${f}`,c,[M.x,M.y-e.armUpper/2,0],v);const E=h?r:c;i.blob({a:.11*e.A+(h?0:.04),b:e.armFore/2+.04,c:.12*e.A+(h?0:.04),e1:.5,e2:.8},`foreArm_${f}`,E,[b.x,b.y-e.armFore/2,0],v),!a&&!h&&i.torus(.125*e.A,.03,`foreArm_${f}`,{...c,pattern:void 0},[P.x,P.y+.04,0],[Math.PI/2,0,0]);const g=Math.sqrt(e.A);i.blob({a:.1*g,b:.15*g,c:.085*g,e1:.6,e2:.8},`hand_${f}`,r,[P.x,P.y-.12*g,0]);const _=t.pants.type==="wide"?1.15:1,C=i.rig.bind[`thigh_${f}`],A=i.rig.bind[`shin_${f}`],k=i.rig.bind[`foot_${f}`],F=.19*e.hem*_,O=(t.pants.type==="straight"||t.pants.type==="jeans"?.21:.25)*e.hem*_,L=F+(O-F)*.5,H=Math.sqrt(e.hem)*.9,B=i.cyl(F,L,e.thigh+.02,`thigh_${f}`,m,[C.x+y*.02,C.y-e.thigh/2,0]);Au(B,H);const et=A.y-(k.y-.01),nt=i.cyl(L,O,et,`shin_${f}`,m,[A.x+y*.05,A.y-et/2,0]);Au(nt,H),t.pants.type==="jeans"&&i.torus(O*.98,.03,`shin_${f}`,{color:"#9FC1EE",outline:.7},[A.x+y*.05,k.y+.02,0],[Math.PI/2,0,0]);const ht={color:t.shoes.color,outline:.8},pt={a:.15,b:.075,c:.3,e1:.7,e2:.8};i.blob(pt,`foot_${f}`,ht,[k.x+y*.07,.075,.12],[0,y*.14,0]),t.shoes.type==="sneaker"&&i.blob({...pt,a:.155,b:.03,c:.305},`foot_${f}`,{color:fs===t.shoes.color.toUpperCase()?"#DDDDDD":fs,outline:0},[k.x+y*.07,.03,.12],[0,y*.14,0])}ub(i,t)}function Au(i,t){i.computeBoundingBox();const e=(i.boundingBox.min.z+i.boundingBox.max.z)/2,n=i.attributes.position;for(let s=0;s<n.count;s++)n.setZ(s,e+(n.getZ(s)-e)*t)}function db(i,t){const e=new Un(1,3,2);return e.scale(i/2,t/2,.01),e}function ub(i,t){const e=i.d.headU,{q:n,c:s}=Ln(i),r=(h,u)=>[h*e,u*e],o=h=>{for(const[u,d]of[r(-.09,.03),r(.21,.03)])h(u,d)},a={...Bi};switch(t.face.eyes){case"dots3":for(const[h,u]of[r(-.05,.15),r(.23,0)])i.onFace(n,s,Vn(.05*e),"eyes",a,h,u,-.005);break;case"dots2":o((h,u)=>i.onFace(n,s,Vn(.04*e),"eyes",a,h,u,-.005));break;case"x":o((h,u)=>{for(const d of[1,-1])i.onFace(n,s,mn(.11*e,.025*e,.02),"eyes",a,h,u,0,d*Math.PI/4)});break;case"closed":case"happy":o((h,u)=>i.onFace(n,s,Tu(.05*e,.012*e),"eyes",a,h,u,0,t.face.eyes==="closed"?Math.PI:0));break;case"wide":o((h,u)=>{i.onFace(n,s,Vn(.07*e,.3),"eyes",{color:fs,outline:0},h,u,-.005),i.onFace(n,s,Vn(.035*e,.4),"eyes",a,h+.01*e,u,.012)});break}const[l,c]=r(.06,-.2);switch(t.face.mouth){case"dot":i.onFace(n,s,Vn(.05*e),"mouthA",a,...r(-.01,-.22),-.005);break;case"teeth":if(t.face.eyes==="mask")break;i.onFace(n,s,mn(.25*e,.09*e,.02),"mouthA",{color:fs,outline:0},l,c,0);for(const h of[-.06,0,.06])i.onFace(n,s,mn(.012*e,.09*e,.02),"mouthA",a,l+h*e,c,.008);break;case"smile":case"tongue":case"fangs-tongue":if(i.onFace(n,s,Tu(.07*e,.014*e),"mouthA",a,l,c,0,Math.PI),t.face.mouth!=="smile"&&i.onFace(n,s,Vn(.035*e,.3),"mouthA",{color:"#FF5AD9",outline:0},l+.01*e,c-.05*e,.004),t.face.mouth==="fangs-tongue")for(const h of[-1,1])i.onFace(n,s,fb(.015*e,.04*e),"mouthA",{color:fs,outline:0},l+h*.045*e,c-.03*e,.006,Math.PI);break;case"zigzag":for(let h=0;h<4;h++)i.onFace(n,s,mn(.05*e,.014*e,.02),"mouthA",a,l+(h-1.5)*.04*e,c,0,(h%2?1:-1)*.6);break;case"o":i.onFace(n,s,Yf(.035*e,.012*e),"mouthA",a,l,c,0);break;case"flat":i.onFace(n,s,mn(.12*e,.016*e,.02),"mouthA",a,l,c,0);break}}const mn=(i,t,e)=>new un(i,t,e),Tu=(i,t)=>new eo(i,t,5,14,Math.PI),Yf=(i,t)=>new eo(i,t,5,16),fb=(i,t)=>new va(i,t,6),Fe=(i,t,e=.8)=>({color:i??t,outline:e}),kr=i=>new xf(i);function Me(i,t,e,n){const{c:s}=Ln(i),r=i.d.headU;return[s[0]+t*r,s[1]+e*r,s[2]+n*r]}function Oo(i,t,e=.035,n=1.2){const{q:s,c:r}=Ln(i),o=i.d.headU;i.blob(tr(s,e*o),"head_top",Fe(t,"#1C1C1C",1),[r[0],r[1]+.013*o,r[2]-.02*o],[-.32,0,0],n)}function Cu(i,t){const e=new nh;return[[0,i],[.18,.55],[.42,.75],[.5,.2],[.3,-.5],[0,-.6],[-.3,-.5],[-.5,.2],[-.4,.62],[-.2,.45]].forEach(([s,r],o)=>o?e.lineTo(s*t,r*i*.5):e.moveTo(s*t,r*i*.5)),e.closePath(),new _a(e,{depth:.03,bevelEnabled:!1})}const El={"mask.vinnie":(i,t)=>{var o;const e=i.d.headU,n={a:.29*e,b:.51*e,c:.05*e,e1:.55,e2:.3},s=Me(i,.07,.013,.262);i.blob(n,"head_front",Fe(t.color,"#FF5AD9",1),s);const r={color:t.color2??"#E04DC0",outline:0};for(const[a,l]of[[-.103,.086],[.215,.086]])i.onFace(n,s,Vn(.04*e,.3),"eyes",{color:"#FFFFFF",outline:0},a*e,l*e,0),i.onFace(n,s,Vn(.02*e,.4),"eyes",Bi,a*e,l*e,.006*e);i.onFace(n,s,mn(.06*e,.23*e,.02*e),"head_front",r,.088*e,-.013*e,.004*e),((o=t.params)==null?void 0:o.nose)==="cross"&&i.onFace(n,s,mn(.11*e,.05*e,.02*e),"head_front",r,.088*e,-.09*e,.006*e),i.onFace(n,s,mn(.366*e,.134*e,.02*e),"mouthA",{color:"#FFFFFF",outline:0},.052*e,-.241*e,.004*e);for(const a of[-.09,0,.09])i.onFace(n,s,mn(.012*e,.125*e,.02*e),"mouthA",Bi,(.052+a)*e,-.241*e,.012*e)},"mask.strap":(i,t)=>{const{q:e}=Ln(i),n=i.d.headU;i.blob({a:e.a+.02*n,b:.032*n,c:e.c+.02*n,e1:.2,e2:.75},"head",Fe(t.color,"#6B6B6B",.7),Me(i,0,.108,0))},"collar.vneck-tie":i=>{const{q:t,y:e}=$f(i),n=tr(t,.04),s=n.b-.06,r=new nh;r.moveTo(-.1,0),r.lineTo(.1,0),r.lineTo(0,-.22),r.closePath(),i.onFace(n,[0,e,0],new _a(r,{depth:.01,bevelEnabled:!1}),"torso",{color:"#FFFFFF",outline:0},0,s,.002),i.onFace(n,[0,e,0],mn(.056,.2,.012),"torso",Bi,0,s-.17,.012);for(const o of[.3,.45,.6])i.onFace(n,[0,e,0],Vn(.02),"torso",Bi,.012,s-o,.004)},"collar.turtleneck":(i,t)=>{i.cyl(.15,.17,.12,"neck",Fe(t.color,"#00B4EE"),[0,i.d.shoulderY+.02,0],void 0,!0)},choker:(i,t)=>{const e=(i.d.shoulderY+i.d.chinY)/2+.02;i.torus(.12,.02,"neck",{color:t.color??"#111111",flat:!0,outline:0},[0,e,0],[Math.PI/2,0,0]),i.torus(.025,.008,"neck",{color:"#C0C0C0",outline:0},[0,e-.03,.12])},"hair.cap":(i,t)=>Oo(i,t.color??"#1C1C1C"),"hair.bun":(i,t)=>{const e=i.d.headU;i.sphere(.16*e,"head_top",Fe(t.color,"#7B2CBF",1),Me(i,-.14,.5,-.14))},"hair.chopsticks":(i,t)=>{const e=i.d.headU,n={color:t.color??"#FFE100",outline:.7};i.cyl(.014*e,.014*e,.41*e,"head_top",n,Me(i,-.103,.576,-.129),[.15,0,-.45]),i.cyl(.014*e,.014*e,.35*e,"head_top",n,Me(i,-.18,.559,-.129),[-.2,0,.95])},"hair.buns2":(i,t)=>{const e=i.d.headU;for(const n of[-1,1])i.sphere(.14*e,"head_top",Fe(t.color,"#FF7ADB",1),Me(i,n*.2,.45,-.05))},"hair.pigtails":(i,t)=>{const e=i.d.headU;for(const n of["L","R"]){const s=n==="L"?-1:1,r=n==="L"?"head_L":"head_R",o=[Me(i,s*.3,.25,-.05),Me(i,s*.42,.1,-.05),Me(i,s*.46,-.1,-.02),Me(i,s*.44,-.3,0)];i.tube(o,.02*e,r,Fe(t.color,"#1C1C1C",.7),kr),i.sphere(.09*e,r,Fe(t.color,"#1C1C1C",.8),o[3])}},"hair.long":(i,t)=>{const e=i.d.headU,n=t.color??"#FF7ADB";Oo(i,n,.04,1.35),i.cyl(.36*e,.4*e,1*e,"head",Fe(n,n,1),Me(i,0,-.45,-.12),[0,0,0],!0);for(const s of[-1,1])i.blob({a:.06*e,b:.32*e,c:.08*e,e1:.6,e2:.8},"head",Fe(n,n,.8),Me(i,s*.33,-.2,.08))},"hair.swoop":(i,t)=>{const e=i.d.headU,n=t.color??"#1C1C1C";Oo(i,n);for(let s=0;s<3;s++)i.cone(.09*e,.32*e,"head_top",Fe(n,n,.8),Me(i,-.12+s*.12,.5+s*.02,.1-s*.04),[0,0,-1.2],[1,1,.5])},"hair.mohawk":(i,t)=>{const e=i.d.headU;for(let n=0;n<6;n++)i.cone(.07*e,.22*e,"head_top",Fe(t.color,"#FF5AD9",.8),Me(i,.02,.52-Math.abs(n-2.5)*.02,.2-n*.08),[-(n-2.5)*.15,0,0],[.5,1,1])},"hair.flattop":(i,t)=>{const e=i.d.headU;i.blob({a:.31*e,b:.21*e,c:.25*e,e1:.3,e2:.3},"head_top",Fe(t.color,"#3FB4EA",1),Me(i,0,.42,-.02))},"hair.bob":(i,t)=>{const e=i.d.headU,n=t.color??"#7B35C4";Oo(i,n,.06,1.75),i.blob({a:.3*e,b:.07*e,c:.08*e,e1:.4,e2:.6},"head_top",Fe(n,n,.8),Me(i,.02,.3,.22))},horns:(i,t)=>{const e=i.d.headU;for(const n of[-1,1]){const s=[Me(i,n*.2,.42,.02),Me(i,n*.3,.58,.02),Me(i,n*.28,.74,0)];i.tube(s,.05*e,"head_top",Fe(t.color,"#E04DC0",.7),kr),i.cone(.05*e,.12*e,"head_top",Fe(t.color,"#E04DC0",.7),Me(i,n*.26,.8,0),[0,0,n*.3])}},"ears.cat":(i,t)=>{const e=i.d.headU;for(const n of[-1,1])i.cone(.117*e,.2*e,"head_top",Fe(t.color,"#00B4EE",.8),Me(i,n*.215,.49,.043),[0,0,-n*.3],[1,1,.45]),i.cone(.065*e,.12*e,"head_top",{color:t.color2??"#FF5AD9",outline:0},Me(i,n*.22,.47,.086),[0,0,-n*.3],[1,1,.3])},whiskers:i=>{const{q:t,c:e}=Ln(i),n=i.d.headU;for(const[s,r]of[[-.09,1],[.224,-1]])for(const o of[-.024,0,.024])i.onFace(t,e,mn(.09*n,.007*n*2,.013),"head_front",Bi,s*n,(-.116+o)*n,0,r*o*-8)},"tail.spring":(i,t)=>{const e=i.d,n=-.22*e.belly,s=e.shoulderY-.25,r=[[0,e.hipY-.05,n],[-.45,e.hipY-.12,n-.08],[-.6,e.hipY+.2,n-.08],[-.62,s-.2,n-.06]];for(let a=0;a<=10;a++){const l=Math.PI+a/10*Math.PI*2.5;r.push([-.5+Math.cos(l)*.12*(1-a/22),s+Math.sin(l)*.12*(1-a/22),n-.05])}i.tube(r,.033,"tail",Fe(t.color,"#00B4EE",.7),kr);const o=r[r.length-1];i.sphere(.037,"tail",{color:t.color2??"#FFE100",outline:.7},[o[0],o[1]-.04,o[2]])},hood:(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU,r=t.color??"#5E5E5E";i.blob(tr(e,.09*s),"head",Fe(r,r,1),[n[0],n[1]+.03*s,n[2]-.06*s],[-.25,0,0],1.95),i.cyl(.3*s,.36*s,.5*s,"neck",Fe(r,r,.8),[0,i.d.shoulderY+.05,-.12],void 0,!0)},"face.flame":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.onFace(e,n,Cu(.75*s,.42*s),"head_front",{color:t.color2??"#FFE100",flat:!0,outline:0},.02*s,-.02*s,0),i.onFace(e,n,Cu(.62*s,.34*s),"head_front",{color:t.color??"#FF5AD9",flat:!0,outline:0},.02*s,-.03*s,.012*s)},"hat.bucket":(i,t)=>{const e=i.d.headU,n=t.color??"#FFFFFF";i.cyl(.3*e,.36*e,.22*e,"head_top",Fe(n,n,1),Me(i,0,.47,-.02)),i.cyl(.5*e,.5*e,.03*e,"head_top",Fe(n,n,1),Me(i,0,.37,-.02),[.12,0,0])},"glasses.shades":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU,r={color:t.color??"#111111",outline:0};for(const o of[-.09,.21])i.onFace(e,n,mn(.16*s,.1*s,.03*s),"head_front",r,o*s,.04*s,.01*s);i.onFace(e,n,mn(.16*s,.02*s,.02*s),"head_front",r,.06*s,.06*s,.012*s)},"glasses.aviator":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;for(const r of[-.09,.21])i.onFace(e,n,Vn(.085*s,.2),"head_front",{color:t.color??"#FF9E3A",outline:0},r*s,.03*s,.012*s),i.onFace(e,n,Yf(.085*s,.01*s),"head_front",{color:"#E6B94A",outline:0},r*s,.03*s,.014*s)},"visor.cyber":(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.blob({a:.33*s,b:.06*s,c:e.c+.03*s,e1:.3,e2:.8},"head_front",Fe(t.color,"#FF4A2A",.8),[n[0],n[1]+.04*s,n[2]]),i.onFace(e,n,mn(.4*s,.02*s,.02*s),"head_front",{color:t.color2??"#FFE100",flat:!0,outline:0},.04*s,.04*s,.035*s)},eyepatch:(i,t)=>{const{q:e,c:n}=Ln(i),s=i.d.headU;i.onFace(e,n,Vn(.07*s,.3),"head_front",{color:t.color??"#111111",flat:!0,outline:0},-.09*s,.03*s,.004*s),i.torus(e.a+.01*s,.012*s,"head",{color:"#111111",flat:!0,outline:0},[n[0],n[1]+.06*s,n[2]],[Math.PI/2+.25,0,.1])},"earring.pin":(i,t)=>{const e=t.side==="R"?"head_R":"head_L",n=i.rig.bind[e],s=i.d.headU;i.cyl(.012*s,.012*s,.12*s,e,{color:t.color??"#C0C0C0",outline:0},[n.x+(t.side==="R"?.06:-.06)*s,n.y-.12*s,n.z],[0,0,.4])},"earring.hoop":(i,t)=>{const e=t.side==="R"?"head_R":"head_L",n=i.rig.bind[e],s=i.d.headU;i.torus(.05*s,.01*s,e,{color:t.color??"#FFE100",outline:0},[n.x+(t.side==="R"?.05:-.05)*s,n.y-.15*s,n.z],[0,Math.PI/2,0])},mustache:(i,t)=>{const e=i.d.headU;for(const n of[-1,1]){const s=[Me(i,.06,-.12,.27),Me(i,.06+n*.08,-.14,.26),Me(i,.06+n*.14,-.1,.23)];i.tube(s,.022*e,"head_front",{color:t.color??"#1C1C1C",outline:0},kr)}},headphones:(i,t)=>{var o,a;const e=i.d.headU,n=((o=t.params)==null?void 0:o.mode)==="neck",s=Fe(t.color,"#2C2C2C",.7),r={color:String(((a=t.params)==null?void 0:a.cup)??t.color??"#2C2C2C"),outline:.7};if(n){const l=i.d.shoulderY+.02;for(const c of[-1,1])i.cyl(.15,.15,.08,"neck",r,[c*.24,l,.08],[0,0,Math.PI/2+c*.3]);i.torus(.26,.025,"neck",s,[0,l-.02,-.02],[Math.PI/2-.15,0,0],Math.PI*1.15);return}for(const l of[-1,1]){const c=Me(i,l*.38,-.06,0);if(i.cyl(.19*e,.19*e,.09*e,l<0?"head_L":"head_R",r,c,[0,0,Math.PI/2]),l<0)for(const h of[1,-1])i.box(.02,.15*e,.02*e,"head_L",Bi,[c[0]-.05*e,c[1],c[2]],[h*Math.PI/4,0,0])}i.torus(.4*e,.028*e,"head_top",s,Me(i,0,.02,-.03),[.14,0,-.03],3.5)},"prop.cup":i=>{const t=i.rig.bind.hand_R;i.cyl(.08,.06,.2,"hand_R",{color:"#FFFFFF",outline:.7},[t.x+.05,t.y-.08,.1]),i.cyl(.085,.085,.05,"hand_R",{color:"#111111",outline:0},[t.x+.05,t.y+.03,.1])},"prop.umbrella":i=>{const t=i.rig.bind.hand_R;i.cyl(.02,.02,1.6,"hand_R",{color:"#111111",outline:.6},[t.x+.05,t.y+.6,.05]),i.cone(.75,.4,"hand_R",{color:"#0AB8EE",outline:.7},[t.x+.05,t.y+1.45,.05])},"prop.briefcase":i=>{const t=i.rig.bind.hand_R;i.box(.42,.3,.12,"hand_R",{color:"#8B5A2B",outline:.7},[t.x+.05,t.y-.35,0]),i.torus(.07,.015,"hand_R",{color:"#111111",outline:0},[t.x+.05,t.y-.18,0])},"prop.bag":i=>{const t=i.rig.bind.hand_R;i.box(.4,.42,.22,"hand_R",{color:"#E2B77F",outline:.7},[t.x+.05,t.y-.38,0]),i.cyl(.05,.05,.42,"hand_R",{color:"#F2C46B",outline:.6},[t.x-.05,t.y-.05,0],[0,0,.3])},"prop.balloon":i=>{const t=i.rig.bind.hand_R;i.cyl(.006,.006,1.3,"hand_R",{color:"#111111",outline:0},[t.x+.1,t.y+.6,0]),i.sphere(.3,"hand_R",{color:"#FF7ADB",outline:.7},[t.x+.12,t.y+1.45,0],[1,1.2,1])},"prop.flowers":i=>{const t=i.rig.bind.hand_R;i.cone(.12,.35,"hand_R",{color:"#F4EEDF",outline:.6},[t.x+.05,t.y+.05,.1],[Math.PI,0,0]),["#FF7ADB","#FFE100","#0AB8EE"].forEach((e,n)=>i.sphere(.08,"hand_R",{color:e,outline:.6},[t.x+.05+(n-1)*.09,t.y+.3+n%2*.06,.1]))},"prop.dog":i=>{const t=i.rig.bind.hand_R,e=1,n={color:"#FFFFFF",outline:.7};i.blob({a:.32,b:.17,c:.18,e1:.8,e2:.8},"root",n,[e,.4,.2]),i.sphere(.16,"root",n,[e+.32,.62,.2]);for(const[s,r]of[[-.18,.1],[-.18,.3],[.18,.1],[.18,.3]])i.cyl(.04,.04,.3,"root",{color:"#111111",outline:0},[e+s,.15,r]);i.tube([[t.x,t.y-.1,.05],[e*.6,.9,.15],[e+.3,.6,.2]],.012,"hand_R",{color:"#FF4A2A",outline:0},kr)}};function pb(i,t){var e;for(const n of t.attach)(e=El[n.part])==null||e.call(El,i,n,t)}const hr=.58;function Ru(i,t,e){const n=e?i.filter(y=>y.bone===e):i;if(!n.length)return null;const s=n.map(y=>{const M=y.geo.index?y.geo.toNonIndexed():y.geo;M.attributes.uv||M.setAttribute("uv",new _e(new Float32Array(M.attributes.position.count*2),2)),M.attributes.normal||M.computeVertexNormals();const b=ob(M.clone(),Math.PI);return{g:M,hull:b.attributes.normal,part:y}}),r=s.reduce((y,M)=>y+M.g.attributes.position.count,0),o=new Float32Array(r*3),a=new Float32Array(r*3),l=new Float32Array(r*3),c=new Float32Array(r*2),h=new Float32Array(r*3),u=new Float32Array(r*3),d=new Float32Array(r*4),p=new Float32Array(r),x=new Uint16Array(r*4),S=new Float32Array(r*4);let m=0;for(const{g:y,hull:M,part:b}of s){const P=y.attributes.position,v=y.attributes.normal,E=y.attributes.uv,g=eu(b.paint.color),_=eu(b.paint.color2??b.paint.color),C=Math.max(0,rh.indexOf(b.paint.pattern??"none")),A=t.index[b.bone],k=t.bind[b.bone];for(let F=0;F<P.count;F++,m++){const O=P.getX(F)-(e?k.x:0),L=P.getY(F)-(e?k.y:0),H=P.getZ(F)-(e?k.z:0);o.set([O,L,H],m*3),a.set([v.getX(F),v.getY(F),v.getZ(F)],m*3),l.set([M.getX(F),M.getY(F),M.getZ(F)],m*3),c.set([E.getX(F),E.getY(F)],m*2),h.set([g.r,g.g,g.b],m*3),u.set([_.r,_.g,_.b],m*3),d.set([C,b.paint.rep??3,b.paint.flat?1:0,0],m*4),p[m]=b.paint.outline??.8,x[m*4]=A,S[m*4]=1}}const f=new He;return f.setAttribute("position",new ve(o,3)),f.setAttribute("normal",new ve(a,3)),f.setAttribute("aHullNormal",new ve(l,3)),f.setAttribute("uv",new ve(c,2)),f.setAttribute("color",new ve(h,3)),f.setAttribute("color2",new ve(u,3)),f.setAttribute("aPat",new ve(d,4)),f.setAttribute("aOutline",new ve(p,1)),e||(f.setAttribute("skinIndex",new jc(x,4)),f.setAttribute("skinWeight",new ve(S,4))),f.computeBoundingSphere(),f}function dh(i,t,e={}){var m;const n=cb(lb(t,i,e.lab)),s=ab(n),r=new hn;r.name=`peepl-${i.id}`,r.add(s.bones.root),r.updateMatrixWorld(!0);const o=e.groups?null:new Kc(s.list),a=Hy(),l=Wy(),c=[],h=[],u=[],d=[];for(const f of e.lods??[0,1,2]){const y=new By(n,s,Uy[f]);hb(y,i),pb(y,i);const M=new hn;M.name=`lod${f}`;let b=0;if(o){const P=Ru(y.items,s);d.push(P);const v=new dd(P,a),E=new dd(P,l);for(const g of[v,E])g.frustumCulled=!1,g.bind(o);v.castShadow=!0,M.add(v,E),h.push(E),b=P.attributes.position.count/3*2}else for(const P of er){const v=Ru(y.items,s,P);if(!v)continue;d.push(v);const E=new be(v,a),g=new be(v,l);E.castShadow=!0,s.bones[P].add(E,g),E.userData.lod=g.userData.lod=f,h.push(g),b+=v.attributes.position.count/3*2}for(const P of y.items)P.geo.dispose();c[f]=M,u[f]=b,r.add(M)}r.scale.setScalar(hr);let p=!0,x=((m=e.lods)==null?void 0:m[0])??0;const S={id:i.id,root:r,rig:s,dims:n,lods:c,hulls:h,tris:u,setLod(f){x=f,c.forEach((y,M)=>y&&(y.visible=M===f));for(const y of h)o&&(y.visible=p);o||s.bones.root.traverse(y=>{y.userData.lod!==void 0&&(y.visible=y.userData.lod===f&&(p||!h.includes(y)))})},setOutline(f){p=f,S.setLod(x)},dispose(){for(const f of d)f.dispose();r.removeFromParent()}};return S.setLod(x),S}const mb=["idle","walk","talk","sit","react","turn","wave","joy","tv","read","browse","sleep"],sn=Math.PI/180,Bo=i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,is=i=>Math.min(1,Math.max(0,i));class Pu{constructor(t=9){D(this,"x",0);D(this,"v",0);this.w=t}step(t,e){const n=this.w*this.w*(t-this.x)-2*this.w*this.v;return this.v+=n*e,this.x+=this.v*e,this.x}}class uh{constructor(t,e,n="peepl"){D(this,"base","idle");D(this,"talking",!1);D(this,"speed",1.6);D(this,"yaw",0);D(this,"t",0);D(this,"bindLocal");D(this,"shots",[]);D(this,"baseFrom","idle");D(this,"baseAt",-10);D(this,"rng");D(this,"nextBlink",2);D(this,"nextLook",3);D(this,"lookFrom",0);D(this,"lookTo",0);D(this,"lookAt",0);D(this,"tail",new Pu(9));D(this,"bun",new Pu(10));D(this,"prevPelvisX",0);D(this,"d");this.rig=t,this.bindLocal={};for(const s of er)this.bindLocal[s]=t.bones[s].position.clone();this.rng=Bf(ca(n)),this.d=e}play(t,e){t==="talk"?this.talking=!0:t==="react"||t==="wave"||t==="joy"?this.shots.push({clip:t,at:this.t}):t==="turn"?this.shots.push({clip:t,at:this.t,from:this.yaw,to:e??this.yaw+Math.PI/2}):t!==this.base&&(this.baseFrom=this.base,this.base=t,this.baseAt=this.t)}ok(){return this.rig.list.every(t=>[t.position.x,t.position.y,t.position.z,t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w,t.scale.y].every(Number.isFinite))}update(t){this.t+=t;const e=this.t,n=this.rig.bones;for(const h of er){const u=n[h];u.position.copy(this.bindLocal[h]),u.rotation.set(0,0,0),u.scale.set(1,1,1)}const s=is((e-this.baseAt)/.7),r=s*s*(3-2*s);this.applyBase(this.baseFrom,1-r,e),this.applyBase(this.base,r,e),this.base!=="sleep"&&this.ground(),n.torso.scale.y=1+.012*Math.sin(2.6*e),this.base!=="walk"&&this.base!=="sleep"&&(n.pelvis.position.x+=.02*Math.sin(e*.9)*Math.sin(e*.37)),e>=this.nextLook&&(this.lookFrom=this.look(e),this.lookTo=(this.rng()*2-1)*10*sn,this.lookAt=e,this.nextLook=e+3+this.rng()*3),n.head.rotation.y+=this.look(e),e>=this.nextBlink+.12&&(this.nextBlink=e+2.5+this.rng()*3.5),(e>=this.nextBlink&&e<this.nextBlink+.12||this.base==="sleep")&&(n.eyes.scale.y=.1),this.talking&&(n.mouthA.scale.y=Math.floor(e*14)%2?1.7:1,n.head.rotation.x+=2*sn*Math.sin(e*9));let o=0,a=1;this.shots=this.shots.filter(h=>{const u=e-h.at;if(h.clip==="react")return u>.5?!1:(a=u<.08?1-.08*(u/.08):u<.2?.92+.18*((u-.08)/.12):1+.1*(1-Bo(is((u-.2)/.3))),o+=u<.38?.18*Math.sin(Math.PI*u/.38):0,!0);if(h.clip==="joy")return u>.8?!1:(o+=.2*Math.abs(Math.sin(Math.PI*u/.4)),!0);if(h.clip==="wave"){if(u>1.4)return!1;const p=Math.min(is(u/.2),is((1.4-u)/.2));return n.upperArm_R.rotation.z+=150*sn*p,n.foreArm_R.rotation.z+=.4*Math.sin(u*3*Math.PI*2)*p,!0}const d=is(u/.35);return this.yaw=h.from+(h.to-h.from)*Bo(d),n.head.rotation.y+=(h.to-h.from)*(Bo(is((u+.08)/.35))-Bo(d)),u<.45}),n.root.position.y+=o,n.root.scale.y*=a,n.root.scale.x*=1+(1-a)*.5,n.root.rotation.y+=this.yaw;const l=n.pelvis.position.x+n.pelvis.rotation.y,c=(l-this.prevPelvisX)/Math.max(t,.001);this.prevPelvisX=l,n.tail.rotation.z=this.tail.step(-c*.05+.05*Math.sin(e*1.3),t),n.head_top.rotation.z=this.bun.step(-n.head.rotation.y*.15+o*.3,t)}ground(){const t=this.rig.bones,e=this.d;let n=0;for(const s of["L","R"]){const r=t[`thigh_${s}`].rotation.x,o=r+t[`shin_${s}`].rotation.x,a=t[`foot_${s}`].position.y-this.bindLocal[`foot_${s}`].y;n=Math.max(n,e.thigh*Math.cos(r)+(e.hipY-e.thigh-e.ankleY)*Math.cos(o)+e.ankleY-a)}t.pelvis.position.y-=e.hipY-n}look(t){const e=is((t-this.lookAt)/.5);return this.lookFrom+(this.lookTo-this.lookFrom)*e*e*(3-2*e)}applyBase(t,e,n){if(e<=0)return;const s=this.rig.bones;switch(t){case"walk":{const r=this.speed,o=1.5+.4*r,a=n*o*Math.PI,l=Math.asin(Math.min(.9,r/o/2.5)),c=Math.sin(a);s.thigh_L.rotation.x+=-l*c*e,s.thigh_R.rotation.x+=l*c*e,s.shin_L.rotation.x+=Math.max(0,c)*l*1.3*e,s.shin_R.rotation.x+=Math.max(0,-c)*l*1.3*e,s.upperArm_L.rotation.x+=l*.8*c*e,s.upperArm_R.rotation.x+=-l*.8*c*e,s.pelvis.rotation.z+=2*sn*c*e,s.pelvis.rotation.y+=6*sn*c*e,s.torso.rotation.y+=-8*sn*c*e,s.head.rotation.y+=7*sn*c*e,s.foot_L.position.y+=Math.max(0,-c)*.08*e,s.foot_R.position.y+=Math.max(0,c)*.08*e;break}case"sit":case"tv":{for(const r of["L","R"])s[`thigh_${r}`].rotation.x+=-85*sn*e,s[`shin_${r}`].rotation.x+=85*sn*e,s[`upperArm_${r}`].rotation.x+=-25*sn*e,s[`foreArm_${r}`].rotation.x+=-35*sn*e;s.torso.rotation.x+=4*sn*e,t==="tv"&&(s.head.rotation.x+=4*sn*Math.sin(n*Math.PI*2/4)*e);break}case"sleep":s.root.rotation.x+=-Math.PI/2*e,s.root.position.y+=.5*e;break;case"read":s.upperArm_L.rotation.x+=-40*sn*e,s.foreArm_L.rotation.x+=-70*sn*e,s.head.rotation.x+=12*sn*e;break;case"browse":s.head.rotation.y+=.5*Math.sin(n*.5)*e;break}}}const qf="peepls.shapeLab",gb=20*Math.PI/180,xb=1.2,vb=[["2d art",1],["clay sheet",.85],["low poly",.7],["chibi",1.63]],ku=[{key:"headScale",label:"headScale",min:.5,max:1.6,sane:[.7,1]},{key:"head",label:"head",min:.4,max:2.5,sane:[.9,1.3]},{key:"h",label:"height",min:.4,max:2.5,sane:[.9,1.2]},{key:"T",label:"torso width",min:.4,max:2.5,sane:[.85,2]},{key:"A",label:"arm thickness",min:.4,max:2.5,sane:[.8,1.5]},{key:"hem",label:"trouser hem",min:.4,max:2.5,sane:[.75,1.85]},{key:"belly",label:"belly depth",min:.4,max:2.5,sane:[.85,1.5]},{key:"legs",label:"leg length",min:.4,max:2.5,sane:[.85,1.1]}];function _b(){try{const i=localStorage.getItem(qf);if(i)return{all:{},per:{},scope:"this",...JSON.parse(i)}}catch{}return{all:{},per:{},scope:"this"}}function zo(i){try{localStorage.setItem(qf,JSON.stringify(i))}catch{}}function yb(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new to(i)}function bb(){let i,t=0;const e=new ga,n=new xn(22,16/9,.1,400);let s=[],r=[],o,a="vinnie",l=!1,c=null,h=0,u=!0,d="idle",p=null,x=.6,S=null,m=_b();const f=[];let y,M,b,P,v;const E={},g={},_=new te,C=(yt,wt)=>{const j=s.find(Z=>Z.id===yt)??s[0],st=wt??p;return st?{...j,body:st}:j},A=yt=>({...m.all,...m.per[yt]??{}});function k(){for(const yt of f)yt.peepl.dispose();f.length=0}function F(yt=!1){k();const wt=l?c??r.map(st=>({id:st})):[{id:a}],j=l?c?0:1:h;wt.forEach(({id:st,body:Z,lab:ct},Lt)=>{const Dt=wt,ft=dh(C(st,Z),o,{lab:{...A(st),...ct??{}},groups:i.params.rig==="groups",lods:yt||l?[j]:[0,1,2]});ft.setLod(j),ft.setOutline(u),ft.root.position.x=l?(Lt-(Dt.length-1)/2)*xb*(c?1.6:1):0,e.add(ft.root);const Ot=new uh(ft.rig,ft.dims,st);Ot.play(d),f.push({peepl:ft,anim:Ot})}),y.count=f.length,M.visible=!l,In.chars=f.length,In.lod=[l?0:h===0?1:0,l?f.length:h===1?1:0,h===2&&!l?1:0],O()}function O(){var j;for(const[st,Z]of Object.entries(g))Z.setAttribute("aria-pressed",String(!l&&st===a));const yt=m.scope==="all"?m.all:m.per[a]??{};for(const st of ku){const Z=yt[st.key]??(st.key==="headScale"?C(a).headScale:1);E[st.key]&&(E[st.key].value=String(Z))}const wt=(j=f[0])==null?void 0:j.peepl;wt&&v&&(v.textContent=`${Eu(wt.dims).toFixed(2)} heads`)}function L(yt,wt,j){var Z;const st=m.scope==="all"?m.all:(Z=m.per)[a]??(Z[a]={});st[yt]=wt,zo(m),F(j)}function H(){var st;const yt=A(a),wt=m.scope==="all"?{bodyTypes:Object.fromEntries(Object.entries(o).map(([Z,ct])=>[Z,Object.fromEntries(kc.map(Lt=>[Lt,+(ct[Lt]*(m.all[Lt]??1)).toFixed(3)]))]))}:{headScale:yt.headScale??C(a).headScale,shape:Object.fromEntries(kc.filter(Z=>yt[Z]!==void 0).map(Z=>[Z,yt[Z]]))},j=JSON.stringify(wt,null,2);(st=navigator.clipboard)==null||st.writeText(j).catch(()=>{}),i.toast.show(j.length>60?`${j.slice(0,57)}…`:j,2)}const B=(yt,wt,j="")=>{const st=V("button",{class:"pixel",style:`pointer-events:auto;font-size:24px;padding:2px 12px 4px;border-radius:999px;border:2px solid var(--white);color:var(--white);background:var(--ink);${j}`});return st.textContent=yt,st.addEventListener("click",Z=>{Z.stopPropagation(),wt()}),st};function et(yt){const wt="position:absolute;top:120px;width:380px;max-height:900px;overflow:auto;background:var(--ink);color:var(--white);border-radius:24px;padding:18px;display:flex;flex-direction:column;gap:10px;pointer-events:auto",j=ft=>V("div",{class:"display",style:"font-size:28px;color:var(--yellow)"},ft),st=(...ft)=>V("div",{style:"display:flex;flex-wrap:wrap;gap:6px"},...ft),Z=st(...r.map(ft=>g[ft]=B(ft,()=>{l=!1,a=ft,F()}))),ct=V("select",{class:"pixel",style:"font-size:24px;pointer-events:auto"});for(const ft of["","thin","average","stocky","xl"])ct.append(V("option",{value:ft},ft||"body: cast.json"));ct.addEventListener("change",()=>{p=ct.value||null,F()}),b=V("div",{class:"s99-left",style:`${wt};left:40px`},j("cast"),Z,ct,j("clips"),st(...mb.map(ft=>B(ft,()=>{var Ot;return(Ot=Tt.clip)==null?void 0:Ot.call(Tt,ft)}))),j("view"),st(B("lod 0",()=>{var ft;return(ft=Tt.lod)==null?void 0:ft.call(Tt,0)}),B("lod 1",()=>{var ft;return(ft=Tt.lod)==null?void 0:ft.call(Tt,1)}),B("lod 2",()=>{var ft;return(ft=Tt.lod)==null?void 0:ft.call(Tt,2)}),B("line-up",()=>{var ft;return(ft=Tt.lineup)==null?void 0:ft.call(Tt,!l)}),B("outline",()=>{var ft;return(ft=Tt.outline)==null?void 0:ft.call(Tt,!u)}))),v=V("div",{class:"pixel heads-out",style:"font-size:30px;color:var(--yellow)"});const Lt=ku.map(ft=>{const Ot=V("input",{type:"range",min:ft.min,max:ft.max,step:.01,"aria-label":ft.label,style:"width:100%;accent-color:var(--pink);pointer-events:auto"});Ot.addEventListener("input",()=>L(ft.key,Number(Ot.value),!0)),Ot.addEventListener("change",()=>L(ft.key,Number(Ot.value),!1)),E[ft.key]=Ot;const ot=at=>(at-ft.min)/(ft.max-ft.min)*100,ut=V("div",{style:`position:absolute;left:${ot(ft.sane[0])}%;width:${ot(ft.sane[1])-ot(ft.sane[0])}%;top:0;bottom:0;background:var(--lit-white-60);opacity:0.25;border-radius:6px`});return V("label",{class:"pixel",style:"font-size:22px;display:flex;flex-direction:column;gap:2px"},ft.label,V("div",{style:"position:relative"},ut,Ot))}),Dt=B("scope: this peepl",()=>{m.scope=m.scope==="all"?"this":"all",Dt.textContent=m.scope==="all"?"scope: everyone":"scope: this peepl",zo(m),O()});Dt.textContent=m.scope==="all"?"scope: everyone":"scope: this peepl",P=V("div",{class:"s99-right",style:`${wt};right:40px`},j("shape lab"),v,st(...vb.map(([ft,Ot])=>B(ft,()=>L("headScale",Ot,!1)))),...Lt,st(Dt,B("reset",()=>{m.scope==="all"?m.all={}:delete m.per[a],zo(m),F()}),B("copy json",H))),yt.append(b,P)}const nt=document.getElementById("gl"),ht=yt=>{S={x:yt.clientX,o:x}},pt=yt=>{S&&(x=S.o-(yt.clientX-S.x)*.008)},At=()=>{S=null};function Kt(yt){const wt=yt.clone().project(n);return[(wt.x+1)/2*innerWidth,(1-wt.y)/2*innerHeight]}return{id:"S99",mount(yt,wt){i=yt,s=yt.data.cast.cast,o=yt.data.cast.bodyTypes,r=yt.copy.S12.lineup,yt.params.cast&&s.some(Z=>Z.id===yt.params.cast)&&(a=yt.params.cast),u=yt.params.outline!=="none";const j=lr({lowgpu:yt.params.lowgpu});j.shadowMap.enabled=!1,cr(!0);const st=hh();e.add(st.group),y=new ys(new Yi(1,1),new si({map:yb(),transparent:!0,depthWrite:!1}),16),y.renderOrder=-1,e.add(y),M=new be(new un(.6,.6,.6),new wi({color:16769280,gradientMap:Si()})),M.position.set(1.5,.3,-.4),e.add(M),et(wt),nt.addEventListener("pointerdown",ht),addEventListener("pointermove",pt),addEventListener("pointerup",At),Object.assign(Tt,{cast:Z=>{l=!1,a=Z,F()},shape:(Z,ct)=>{Z==="all"?m.all=ct??{}:ct?m.per[Z]=ct:delete m.per[Z],zo(m),F()},clip:Z=>{d=Z;for(const ct of f)ct.anim.play(d)},lod:Z=>{h=Z,l=!1,F()},lineup:Z=>{l=Z,c=null,F()},row:Z=>{l=!0,c=Z,F()},outline:Z=>{u=Z;for(const ct of f)ct.peepl.setOutline(Z)},measure:()=>{let Z=1/0,ct=0;const Lt=new N;for(const Dt of f){Dt.peepl.root.updateMatrixWorld(!0);for(const ft of["foot_L","foot_R"])Dt.peepl.rig.bones[ft].getWorldPosition(Lt),Z=Math.min(Z,Lt.y/hr-Dt.peepl.dims.ankleY);Dt.peepl.rig.bones.head_top.getWorldPosition(Lt),ct=Lt.y/hr/Dt.peepl.dims.headU}return{heads:f.length===1?ct:Eu(f[0].peepl.dims),soleMin:Z,rigOk:f.every(Dt=>Dt.anim.ok())}},swatchPx:()=>M.visible?Kt(new N(M.position.x,M.position.y+.3,M.position.z)):null,centrePx:()=>Kt(new N(0,1.1,0))}),F()},enter(){this.update(0,0)},update(yt,wt){t=wt;const j=l?c?6+c.length*3:30:8.5,st=l?.3:.42,Z=l?0:x,ct=new N(l?0:.35,l?1:.95,0);n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),n.position.set(ct.x+Math.sin(Z)*Math.cos(st)*j,ct.y+Math.sin(st)*j,ct.z+Math.cos(Z)*Math.cos(st)*j),n.lookAt(ct),f.forEach((Lt,Dt)=>{Lt.anim.update(yt),l||(Lt.peepl.root.rotation.y=t*gb),_.makeRotationX(-Math.PI/2).setPosition(Lt.peepl.root.position.x,.005,Lt.peepl.root.position.z),_.scale(new N(.64,.64,1)),y.setMatrixAt(Dt,_)}),y.instanceMatrix.needsUpdate=!0,In.rigOk=f.every(Lt=>Lt.anim.ok()),i.loop.drawFrame&&(lr().render(e,n),ah())},landed:()=>t>=.2,onInput(yt){var wt;yt.type==="key"&&yt.key==="l"&&((wt=Tt.lineup)==null||wt.call(Tt,!l))},exit(){},unmount(){nt.removeEventListener("pointerdown",ht),removeEventListener("pointermove",pt),removeEventListener("pointerup",At),k();for(const yt of Object.keys(Tt))delete Tt[yt];cr(!1),e.clear()},seek(yt){t=yt}}}class Mb{constructor(t,e){D(this,"el");D(this,"fill");D(this,"at",-1);this.fill=V("div",{style:"height:100%;width:0;background:var(--pink);border-radius:999px"}),this.el=V("div",{class:"friend-meter",style:"position:absolute;left:750px;top:44px;width:420px;height:96px;border-radius:24px;background:var(--ink);display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform-origin:50% 0"},V("div",{class:"display",style:"font-size:36px;color:var(--yellow)"},t),V("div",{style:"width:300px;height:12px;border-radius:999px;background:var(--lit-tier-off)"},this.fill),V("div",{class:"pixel",style:"font-size:26px;color:var(--white)"},e))}show(t){this.at=t}hide(){this.at=-1}update(t,e){if(this.at<0)return void(this.el.style.display="none");const[n,s]=Le(t,this.at,.4,e);Vt(this.el,{display:"flex",transform:`scale(${n})`,opacity:String(s)}),this.fill.style.width=`${ae(t,this.at,.8,ie.draw)*100}%`}}function jf(i,t="white"){const e=`var(--${t})`;return V("div",{class:"bubble",style:"position:absolute;left:0;top:0;transform-origin:50% 100%;pointer-events:none"},V("div",{class:"pixel bubble-box",style:`position:relative;background:${e};border:5px solid var(--ink);border-radius:18px;padding:8px 18px 10px;font-size:40px;color:var(--ink);width:max-content;max-width:900px;text-wrap:balance;line-height:1.05;margin-bottom:18px`},V("span",{class:"bubble-text"},i),V("div",{class:"bubble-tail",style:`position:absolute;left:50%;bottom:-15px;width:22px;height:22px;margin-left:-11px;background:${e};border-right:5px solid var(--ink);border-bottom:5px solid var(--ink);transform:rotate(45deg)`})))}function wb(i,t,e,n,s,r=1,o=[]){const a=i.firstElementChild,l=`${Math.min(900,(innerWidth-24)/n)}px`;a&&a.style.maxWidth!==l&&(a.style.maxWidth=l);const c=i.offsetWidth*n/2,h=e-i.offsetHeight*n;let u=Math.min(Math.max(t,c+8),innerWidth-c-8);for(const p of o)h>p.bottom||e<p.top||u+c<p.left||u-c>p.right||(u=t<(p.left+p.right)/2?Math.min(u,p.left-c-8):Math.max(u,p.right+c+8));u=Math.min(Math.max(u,c+8),innerWidth-c-8);const d=i.querySelector(".bubble-tail");d&&(d.style.left=`calc(50% + ${Math.max(-c/n+30,Math.min(c/n-30,(t-u)/n))}px)`),Vt(i,{transform:`translate(${u}px, ${e}px) translate(-50%, -100%) scale(${n*s})`,opacity:String(r),visibility:s>.001&&r>0?"visible":"hidden"})}const Sb=7,ei=Math.PI/180,Fu=.58,Fc=(i,t)=>Math.atan2(t.x-i.x,t.z-i.z),Lu=(i,t)=>{const e=i.crowd.members.get(t);if(e)return{x:e.peepl.root.position.x,z:e.peepl.root.position.z,yaw:e.anim.yaw,anim:"idle"};const n=i.sim.agents.get(t);return n?{x:n.pos[0],z:n.pos[1],yaw:n.yaw,anim:"idle"}:null};class Eb{constructor(t,e){D(this,"active",!1);D(this,"t0",0);D(this,"steps",[]);D(this,"done",new Set);D(this,"choiceAt",-1);D(this,"chips",null);D(this,"branchAt",-1);this.stage=t,this.data=e}start(){const t=this.stage,e=Lu(t,"vinnie"),n=Lu(t,"mochi");if(!e||!n)return;this.active=!0,this.t0=t.t,this.steps=this.data.steps,this.done.clear(),this.branchAt=-1,t.holdSim(!0),t.poses.set("vinnie",{...e,anim:"idle"}),t.poses.set("mochi",{...n,anim:"idle"});const s=new N((e.x+n.x)/2,0,(e.z+n.z)/2);t.rig.go({target:s.setY(1),yaw:45*ei,pitch:24*ei,dist:this.data.camera.dist},.9,"venue")}choose(t){var s;if(!this.chips||!this.active)return;const n=(((s=this.data.steps.find(r=>r.choices))==null?void 0:s.choices)??[])[t];n&&(this.stage.hud.remove("contact-ask"),this.chips=null,this.steps=n.value==="sayhi"?this.data.onSayHi:this.data.onNotNow,this.done.clear(),this.branchAt=this.stage.t,this.choiceAt=-1,n.value==="notnow"&&this.stage.choice("contact","notnow"))}update(){if(!this.active)return;const t=this.stage,e=this.branchAt>=0?this.branchAt:this.t0,n=t.t-e;if(this.steps.forEach((s,r)=>{this.done.has(r)||n<s.t||(this.done.add(r),this.run(s))}),this.chips&&this.choiceAt>=0&&t.auto()){const s=Math.min(1,(t.t-this.choiceAt)/Sb);this.chips.firstElementChild.style.background=`linear-gradient(90deg, var(--yellow) ${s*100}%, var(--white) ${s*100}%)`,s>=1&&this.choose(0)}}run(t){var s;const e=this.stage,n=t.who??"vinnie";switch(t.do){case"turn":{const r=e.poses.get(n),o=e.poses.get(t.to??"mochi");r&&o&&(r.yaw=Fc(r,o));break}case"bubble":{if(t.choices){const r=jf(t.text??"","white"),o=V("div",{style:"display:flex;gap:12px;margin-top:10px"});t.choices.forEach((a,l)=>{const c=V("button",{class:"pixel contact-chip",style:"pointer-events:auto;font-size:38px;padding:6px 22px 8px;border-radius:999px;border:5px solid var(--ink);background:var(--white);color:var(--ink)"},a.label==="say hi"?e.copy.S8.contactYes:a.label==="not now"?e.copy.S8.contactNo:a.label);c.addEventListener("click",h=>{h.stopPropagation(),this.choose(l)}),o.append(c)}),r.querySelector(".bubble-box").append(o),e.hud.remove(`${n}-say`),e.hud.attach("contact-ask",r,e.anchor(n),e.t,60,11),this.chips=o,this.choiceAt=e.t}else e.hud.remove("contact-ask"),e.hud.bubble(`${n}-say`,t.text??"",e.anchor(n),e.t,2.4,{colour:t.style==="yellow"?"yellow":"white"});break}case"clip":(s=e.crowd.members.get(n))==null||s.anim.play(t.clip??"react");break;case"hop":e.hop(n);break;case"end":this.active=!1,t.next==="cafe"?e.choice("contact","sayhi"):(e.poses.delete("vinnie"),e.poses.delete("mochi"),e.holdSim(!1),e.townShot());break}}}class Ab{constructor(t,e){D(this,"active",!1);D(this,"t0",0);D(this,"e",0);D(this,"entered",new Set);D(this,"box");D(this,"boxAt",-1);D(this,"boxDropAt",-1);D(this,"line",null);D(this,"meter");D(this,"pills",[]);D(this,"pillAt",-1);D(this,"walks",[]);D(this,"cups",!1);D(this,"ended",!1);D(this,"orbit",null);D(this,"toastAt",-1);this.stage=t,this.data=e,this.box=new Vf({VINNIE:"var(--red)",MOCHI:"var(--pink)",YOU:"var(--cyan)"},"down"),Vt(this.box.el,{left:460,top:830,display:"none"}),this.meter=new Mb(t.copy.S8.friendTitle,t.copy.S8.friendLine);const n=dn([xs("dot",18,"var(--yellow)"),t.copy.S8.herePill],{size:28}),s=dn([t.copy.S8.cafePill],{size:28});Vt(s,{position:"absolute",left:50,top:50}),Vt(n,{position:"absolute",right:50,top:50}),s.classList.add("cafe-pill"),n.classList.add("here-pill"),this.pills=[s,n];for(const r of this.pills)r.style.display="none";Pe(this.box.el,{left:60,top:1480,width:960,height:300}),Pe(this.meter.el,{left:330,top:260}),Pe(s,{left:40,top:50}),Pe(n,{right:40,top:50}),t.root.append(this.box.el,this.meter.el,...this.pills)}get t(){return this.e}get lineText(){var t;return((t=this.box.el.querySelector(".dialogue-text"))==null?void 0:t.textContent)??""}start(){const t=this.stage,e=this.data.marks;this.active=!0,this.ended=!1,this.t0=t.t,this.e=0,this.entered.clear(),this.walks=[],this.line=null,this.boxAt=this.boxDropAt=-1,this.meter.hide(),this.cups=!1,t.holdSim(!0),t.hideHud(!0),t.hud.clear(),t.poses.set("vinnie",{x:e.vinnieFrom[0],z:e.vinnieFrom[1],yaw:Math.PI/2,anim:"walk"}),t.poses.set("mochi",{x:e.mochiFrom[0],z:e.mochiFrom[1],yaw:-Math.PI/2,anim:"walk"})}update(t){if(!this.active)return;const e=this.stage;this.e=e.t-this.t0;for(const a of this.data.shots)this.e>=a.t[0]&&!this.entered.has(a.id)&&this.enter(a);this.walks=this.walks.filter(a=>{const l=e.poses.get(a.id),c=a.to[0]-l.x,h=a.to[1]-l.z,u=Math.hypot(c,h),d=a.speed*t;return u<=d?(l.x=a.to[0],l.z=a.to[1],l.anim=a.then,a.yaw!==void 0&&(l.yaw=a.yaw),!1):(l.x+=c/u*d,l.z+=h/u*d,l.yaw=Math.atan2(c,h),l.anim="walk",!0)});for(const a of["vinnie","mochi"]){const l=e.crowd.members.get(a);l&&(l.anim.talking=!!this.line&&this.line.who.toLowerCase()===a&&this.e-this.line.at<Br(this.line.text))}const n=this.boxAt<0?0:Le(this.e,this.boxAt,.4,e.reduced)[0],s=this.boxDropAt<0?0:ae(this.e,this.boxDropAt,.3,ie.enter);Vt(this.box.el,{display:this.boxAt<0||s>=1?"none":"block",transform:`translateY(${s*260}px) scale(${n})`}),this.box.update(this.e,-1,e.reduced,this.line,this.line?this.e-this.line.at:0),this.meter.update(this.e,e.reduced);const[r,o]=this.pillAt<0?[0,0]:Le(this.e,this.pillAt,.4,e.reduced);for(const a of this.pills)Vt(a,{display:this.pillAt<0?"none":"inline-flex",transform:`scale(${r})`,opacity:String(o)});this.orbit&&e.rig.go({yaw:this.orbit.from+15*ei*Math.min(1,(this.e-this.orbit.at)/7)},.01),this.e>=this.data.end.t&&!this.ended&&this.finish()}enter(t){const e=this.stage;this.entered.add(t.id);const n=e.poses.get("vinnie"),s=e.poses.get("mochi"),r=t.camera;if(r.shot==="venue"){const o=r.target?new N(r.target[0],r.target[1],r.target[2]):new N((n.x+s.x)/2,1,(n.z+s.z)/2),a=Array.isArray(r.dist)?r.dist:[r.dist??16,r.dist??16];e.rig.go({target:o,yaw:45*ei,pitch:(r.pitch??24)*ei,dist:a[0]},t.id==="C1"?0:r.seconds??.9,"venue"),a[0]!==a[1]&&e.rig.dolly(a[0],a[1],t.t[1]-t.t[0]),this.orbit=r.orbitDeg?{from:45*ei,at:this.e}:null}else if(r.shot==="close"){const o=new N(n.x,0,n.z),a=new N(s.x,0,s.z),l=o.clone().add(a).multiplyScalar(.5).setY(1.25),c=r.favour==="mochi"?a:o,h=r.favour==="mochi"?o:a;l.add(c.clone().setY(1.25).sub(l).multiplyScalar(.18));let u=Math.atan2(a.x-o.x,a.z-o.z)+Math.PI/2;Math.cos(u-45*ei)<0&&(u+=Math.PI);const d=Math.atan2(h.x-c.x,h.z-c.z);u+=25*ei*Math.sign(Math.sin(d-u)),e.rig.go({target:l,yaw:u,pitch:10*ei,dist:7.5},.5,"close");const p=u;for(const[x,S]of[[n,s],[s,n]]){const m=Fc(x,S);x.yaw=m+14*ei*Math.sign(Math.sin(p-m))}}t.line&&(this.line=t.line);for(const o of t.actions??[])this.act(o)}act([t,...e]){var o;const n=this.stage,s=a=>a==="both"?["vinnie","mochi"]:[String(a)],r=a=>typeof a=="number"?a:this.e;switch(t){case"walk":{const[a,l,c]=e,h=l==="mark"?this.data.marks[a]:c,u=l==="mark"?c*Fu:1.6*Fu,d=a==="vinnie"?"mochi":"vinnie",p=l==="mark"?this.data.marks[d]:null,x=p?Math.atan2(p[0]-h[0],p[1]-h[1]):a==="vinnie"?Math.PI/2:-Math.PI/2;this.walks.push({id:a,to:[...h],speed:u,then:l==="seat"?"sit":"idle",yaw:x});break}case"pill":this.pillAt<0&&(this.pillAt=r(e[1]));break;case"hide":break;case"clip":{const[a,l]=e;for(const c of s(a))l!=="sit"&&((o=n.crowd.members.get(c))==null||o.anim.play(l));break}case"turn":{const[a,l]=e,c=n.poses.get(a),h=n.poses.get(l);c&&h&&(c.yaw=Fc(c,h));break}case"bang":for(const a of s(e[0])){const l=V("div",{class:"display bang",style:"width:44px;height:52px;background:var(--yellow);border:5px solid var(--ink);border-radius:8px;font-size:40px;line-height:1;color:var(--ink);display:flex;align-items:center;justify-content:center"},"!");n.hud.attach(`bang-${a}`,l,n.anchor(a,.35),n.t,.5,8)}break;case"dialogueBox":e[0]==="rise"?this.boxAt=r(e[1]):this.boxDropAt=r(e[1]);break;case"friendMeter":this.meter.show(r(e[0]));break;case"cups":this.cups=!0;break;case"toast":this.toastAt=r(e[1]);break}}late(){this.toastAt>=0&&this.e>=this.toastAt&&(this.toastAt=-1,this.stage.toast(this.stage.copy.S8.mochiAdded))}get cupsOn(){return this.cups}finish(){this.ended=!0;const t=this.stage;t.wipe(()=>{this.active=!1,this.box.el.style.display="none",this.meter.hide(),this.meter.update(0,!0);for(const s of this.pills)s.style.display="none";this.pillAt=-1;const e=t.poses.get("vinnie"),n=t.poses.get("mochi");t.sim.placeAt("vinnie",[e.x,e.z],"sit",e.yaw),t.sim.placeAt("mochi",[n.x,n.z],"sit",n.yaw),t.poses.clear(),t.hideHud(!1),t.holdSim(!1),t.townShot()})}facing(){var n,s,r,o;const t=((n=this.stage.crowd.members.get("vinnie"))==null?void 0:n.anim.yaw)??0,e=((s=this.stage.crowd.members.get("mochi"))==null?void 0:s.anim.yaw)??0;return{vinnie:t,mochi:e,poses:{vinnie:((r=this.stage.poses.get("vinnie"))==null?void 0:r.anim)??"",mochi:((o=this.stage.poses.get("mochi"))==null?void 0:o.anim)??""}}}}class Tb{constructor(t=4){D(this,"el");D(this,"badge");D(this,"name");D(this,"tag");D(this,"segs");D(this,"popAt",-10);D(this,"tier",0);this.badge=V("span",{class:"pixel tier-badge",style:"background:var(--yellow);border:5px solid var(--ink);border-radius:12px;padding:6px 14px 8px;font-size:36px;color:var(--ink)"}),this.name=V("span",{class:"display tier-name",style:"font-size:46px;color:var(--white)"}),this.tag=V("span",{class:"pixel tier-tag",style:"border:4px solid currentColor;border-radius:8px;padding:4px 10px 6px;font-size:28px"}),this.segs=Array.from({length:t},()=>V("span",{style:"width:54px;height:12px;border-radius:4px;background:var(--lit-tier-off)"})),this.el=V("div",{class:"tier-chip",style:"position:absolute;left:50px;top:50px;transform-origin:0 0"},V("div",{style:"display:inline-flex;align-items:center;gap:14px;background:var(--ink);border-radius:999px;padding:10px 16px"},this.badge,this.name,this.tag),V("div",{style:"display:flex;gap:10px;margin:14px 0 0 16px"},...this.segs))}set(t,e,n,s,r,o){t!==this.tier&&(this.tier=t,this.popAt=o),this.badge.textContent=e,this.name.textContent=n,this.tag.textContent=s,this.tag.style.color=r?"var(--yellow)":"var(--white)",this.segs.forEach((a,l)=>a.style.background=l<t?"var(--pink)":"var(--lit-tier-off)")}update(t,e){const n=e?1:.7+.3*ae(t,this.popAt,.35,ie.pop);Vt(this.el,{transform:`scale(${n})`})}}class Cb{constructor(t,e,n){D(this,"el");D(this,"km");D(this,"trail");D(this,"dot");D(this,"map");D(this,"points",[]);D(this,"shownAt",-1);D(this,"shrinkAt",-1);D(this,"expanded",!1);this.km=V("span",{class:"gps-km"}),this.trail=re("polyline",{style:"fill:none;stroke:var(--cyan);stroke-width:8;stroke-linecap:round;stroke-linejoin:round"}),this.dot=re("circle",{r:11,style:"fill:var(--cyan);stroke:var(--ink);stroke-width:4"});const s=o=>re("polyline",{points:o,style:"fill:none;stroke:var(--white);stroke-width:16;stroke-linecap:round;stroke-linejoin:round"});this.map=re("svg",{class:"gps-map",width:348,height:212,viewBox:"0 0 348 212",style:"display:block;background:var(--lit-map);touch-action:none;pointer-events:auto;cursor:grab"},re("rect",{x:196,y:120,width:90,height:70,rx:10,style:"fill:var(--lit-map-park)"}),re("rect",{x:320,y:0,width:28,height:212,style:"fill:var(--lit-map-river)"}),s(e.map(o=>o.join(",")).join(" ")),s("20,118 330,118"),s("150,10 150,200"),this.trail,this.dot),this.el=V("div",{class:"gps-card",style:"position:absolute;right:50px;top:50px;width:360px;background:var(--white);border:6px solid var(--ink);border-radius:24px;overflow:hidden;transform-origin:100% 0;pointer-events:auto"},V("div",{class:"pixel",style:"height:46px;background:var(--ink);color:var(--yellow);font-size:30px;display:flex;align-items:center;justify-content:space-between;padding:0 16px"},V("span",{},t),this.km),this.map);let r=null;this.map.addEventListener("pointerdown",o=>{o.stopPropagation(),this.map.setPointerCapture(o.pointerId),r={x:o.clientX,y:o.clientY,moved:!1}}),this.map.addEventListener("pointermove",o=>{if(!r)return;const l=348/this.map.getBoundingClientRect().width,c=(o.clientX-r.x)*l,h=(o.clientY-r.y)*l;Math.hypot(c,h)>2&&(r.moved=!0),n(c,h),r.x=o.clientX,r.y=o.clientY}),this.map.addEventListener("pointerup",()=>{r&&!r.moved&&(this.expanded=!this.expanded),r=null})}show(t){this.shownAt<0&&(this.shownAt=t)}shrink(t){this.shrinkAt<0&&(this.shrinkAt=t)}get visible(){return this.shownAt>=0}update(t,e,n,s,r){const o=this.points[this.points.length-1];(!o||Math.hypot(o[0]-n[0],o[1]-n[1])>2)&&this.points.push([...n]),this.trail.setAttribute("points",this.points.map(u=>u.join(",")).join(" ")),this.dot.setAttribute("cx",String(n[0])),this.dot.setAttribute("cy",String(n[1])),this.km.textContent=s.replace("{km}",e.toFixed(1));const[a,l]=this.shownAt<0?[0,0]:Le(t,this.shownAt,.3,r),c=this.shrinkAt<0?0:ae(t,this.shrinkAt,.35,ie.draw),h=this.expanded?600/360:1;Vt(this.el,{transform:`scale(${a*h*(1-c)})`,opacity:String(l),display:this.shownAt<0?"none":"block"})}}class Rb{constructor(t){D(this,"el");D(this,"text");D(this,"lines",[]);D(this,"shownAt",-1);D(this,"x",0);this.text=V("span",{class:"ticker-text",style:"display:inline-block;white-space:nowrap;color:var(--white)"}),this.el=V("div",{class:"pixel ticker",style:"position:absolute;left:50%;top:50px;max-width:640px;display:none;align-items:center;gap:14px;background:var(--ink);border-radius:999px;padding:8px 22px 10px;font-size:30px;transform-origin:50% 0"},V("span",{style:"color:var(--yellow);flex:none"},t),V("span",{style:"overflow:hidden;flex:1;min-width:0;max-width:520px;mask-image:linear-gradient(90deg,transparent,black 28px,black calc(100% - 28px),transparent)"},this.text))}start(t,e){this.shownAt<0&&(this.shownAt=t),this.setLines(e)}setLines(t){t.join("|")!==this.lines.join("|")&&(this.lines=t,this.text.textContent=t.join("  ·  "),this.x=0)}get content(){return this.text.textContent??""}update(t,e,n){if(this.shownAt<0)return;const[s,r]=Le(t,this.shownAt,.3,n);Vt(this.el,{display:"flex",transform:`translateX(-50%) scale(${s})`,opacity:String(r)}),this.x-=e*60;const o=this.text.scrollWidth||1;-this.x>o&&(this.x=520),this.text.style.transform=`translateX(${this.x}px)`}}const Zf=(i,t)=>{const n=Math.min(1,Math.max(0,(i-t)/1.4))-1;return 1+2.70158*n**3+1.70158*n**2},ms=(i,t,e=0)=>new N(i,e,t);function Kf(i,t=64){const e=document.createElement("canvas"),n=e.getContext("2d");n.font=`${t}px VT323`;const s=Math.ceil(n.measureText(i).width)+t*.75;e.width=s,e.height=Math.ceil(t*1.25);const r=t*.18;n.fillStyle="#111111",n.strokeStyle="#FFE100",n.lineWidth=t*.08,n.beginPath(),n.roundRect(n.lineWidth,n.lineWidth,e.width-2*n.lineWidth,e.height-2*n.lineWidth,r),n.fill(),n.stroke(),n.font=`${t}px VT323`,n.fillStyle="#FFE100",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e.width/2,e.height/2+t*.04);const o=new to(e);return o.colorSpace=Ze,{tex:o,aspect:e.width/e.height}}function Pb(i){const t=[];for(const e of i.buildings)e.sign&&t.push({text:e.sign.text,pos:ms(e.sign.at[0],e.sign.at[1],e.sign.z),face:e.sign.face,d0:e.d0,height:.55});for(const e of i.props)e.sign&&t.push({text:e.sign.text,pos:ms(e.at[0]+.95,e.at[1]+.01,2.1),face:"y",d0:e.d0,height:.4});for(const e of i.landmarks)e.sign&&e.monument&&t.push({text:e.sign,pos:ms(e.monument[0],e.monument[1]+.6,2.4),face:"y",d0:19.84,height:.6});return t}class kb{constructor(t){D(this,"group",new hn);D(this,"items",[]);for(const e of t){const{tex:n,aspect:s}=Kf(e.text),r=new be(new Yi(e.height*s,e.height),new si({map:n,transparent:!0,alphaTest:.5,side:Gn}));r.position.copy(e.pos).add(e.face==="y"?new N(0,0,.03):new N(.03,0,0)),e.face==="x"&&(r.rotation.y=Math.PI/2),this.group.add(r);const o=V("div",{class:"pixel sign-tag",style:"background:var(--ink);color:var(--yellow);border:3px solid var(--yellow);border-radius:8px;padding:4px 12px 6px;font-size:34px;white-space:nowrap"},e.text);this.items.push({def:e,mesh:r,tag:o})}}update(t){for(const e of this.items){const n=Zf(t,e.def.d0);e.mesh.scale.setScalar(Math.max(1e-4,n)),e.mesh.visible=n>.01}}planePx(t,e,n){const s=this.items[t],r=s.def.pos.clone().project(e).y,o=s.def.pos.clone().add(new N(0,s.def.height,0)).project(e).y;return Math.abs(r-o)*.5*n}}class Fb{constructor(t=32){D(this,"mesh");D(this,"time",{value:0});D(this,"m",new te);const e=new fn({uniforms:{uTime:this.time,uColor:{value:new ee(16743131).convertLinearToSRGB()}},transparent:!0,depthWrite:!1,vertexShader:`
        uniform float uTime; attribute float aPhase; varying float vP;
        void main(){
          vP = fract((uTime + aPhase) / 1.25);
          float s = 0.6 + 0.9 * vP;
          vec4 p = instanceMatrix * vec4(position.xy * s, 0.0, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * p;
        }`,fragmentShader:"uniform vec3 uColor; varying float vP; void main(){ gl_FragColor = vec4(uColor, (1.0 - vP) * 0.9); }"});this.mesh=new ys(new ih(.42,.56,32),e,t);const n=new Float32Array(t);for(let s=0;s<t;s++)n[s]=s*.37%1.25;this.mesh.geometry.setAttribute("aPhase",new oa(n,1)),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=3}update(t,e){this.time.value=t,e.forEach((n,s)=>{this.m.makeRotationX(-Math.PI/2).setPosition(n.x,.03,n.z),this.mesh.setMatrixAt(s,this.m)}),this.mesh.count=e.length,this.mesh.instanceMatrix.needsUpdate=!0}}class Lb{constructor(t){D(this,"group",new hn);this.def=t;const[e,n]=t.size,s=a=>new wi({color:a,gradientMap:Si()}),r=new be(new un(n,.55,e),s(t.color));r.position.y=.275;const o=new be(new un(n*.8,.45,e*.55),s(t.roof??"#DDEFFF"));o.position.y=.775,r.castShadow=o.castShadow=!0,this.group.add(r,o)}update(t,e){const[n,s]=this.def.loop.path,r=Math.hypot(s[0]-n[0],s[1]-n[1]),o=t*this.def.loop.speed%r/r,a=n[0]+(s[0]-n[0])*o,l=n[1]+(s[1]-n[1])*o;this.group.position.copy(ms(a,l)),this.group.visible=e>=this.def.d0&&Math.hypot(a-19,l-19)<e}}class Ib{constructor(){D(this,"group",new hn);D(this,"banner",null);D(this,"tape",null);D(this,"pigeons");D(this,"rain");D(this,"key","");D(this,"m",new te);this.pigeons=new ys(new Un(.12,8,6),new wi({color:10132134,gradientMap:Si()}),6),this.pigeons.visible=!1,this.rain=new ys(new un(.02,.5,.02),new si({color:10469870,transparent:!0,opacity:.6}),260),this.rain.visible=!1,this.rain.frustumCulled=this.pigeons.frustumCulled=!1,this.group.add(this.pigeons,this.rain)}set(t,e,n){const s=t?`${t.id}|${t.visual}`:"";if(s!==this.key){this.key=s;for(const r of[this.banner,this.tape])r==null||r.removeFromParent();if(this.banner=this.tape=null,this.pigeons.visible=!1,!(!t||!e)){if(t.visual==="banner"&&t.banner){const{tex:r,aspect:o}=Kf(t.banner,96);this.banner=new be(new Yi(.9*o,.9),new si({map:r,transparent:!0,alphaTest:.5,side:Gn})),this.banner.position.copy(e).add(new N(0,2.9,.2)),this.banner.name=`banner-${t.banner}`,this.group.add(this.banner)}if(t.visual==="closedTape"&&n){const r=document.createElement("canvas");r.width=128,r.height=16;const o=r.getContext("2d");for(let l=0;l<8;l++)o.fillStyle=l%2?"#111111":"#FFE100",o.fillRect(l*16,0,16,16);const a=new to(r);a.colorSpace=Ze,this.tape=new be(new un(.06,.16,1.6),new si({map:a})),this.tape.position.copy(n).add(new N(.1,1,0)),this.tape.rotation.x=.25,this.tape.name="closed-tape",this.group.add(this.tape)}t.visual==="pigeons"&&(this.pigeons.visible=!0,this.pigeons.position.copy(e))}}}update(t,e,n){if(this.pigeons.visible)for(let s=0;s<6;s++){const r=Math.max(0,Math.sin(t*6+s*1.7))*.12;this.m.makeTranslation(Math.cos(s*1.1)*(.6+s%3*.3),.12+r,Math.sin(s*1.1)*(.6+s%2*.4)),this.pigeons.setMatrixAt(s,this.m)}if(this.pigeons.instanceMatrix.needsUpdate=!0,this.rain.visible=e,e){for(let s=0;s<260;s++){const r=s*7.31%26-13,o=s*3.77%26-13,a=8-(t*9+s*.37)%8;this.m.makeTranslation(n.x+r,a,n.z+o),this.rain.setMatrixAt(s,this.m)}this.rain.instanceMatrix.needsUpdate=!0}}}const Db=[16769280,16743129,1623536,16777215],Fr=10;class Nb{constructor(t,e=19.84){D(this,"group",new hn);D(this,"monument",new hn);D(this,"lanterns");D(this,"ink",new si({color:1118481,side:Je}));this.d0=e;const n=h=>new wi({color:h,gradientMap:Si()}),s=new be(new un(1.4,.7,1.4),n(16051935));s.position.y=.35;const r=new be(new dr(.22,.28,2.4,10),n(16051935));r.position.y=1.9;const o=new be(new Un(.42,14,10),n(16769280));o.position.y=3.4;for(const h of[s,r,o]){h.castShadow=!0;const u=new be(h.geometry,this.ink);u.scale.setScalar(1.06),u.position.copy(h.position),this.monument.add(h,u)}this.monument.position.copy(ms(t[0],t[1])),this.lanterns=new ys(new Un(.09,8,6),new si({color:16777215}),Fr*4);const a=new te,l=ms(t[0],t[1],3.2);[[.8,28.8],[7.4,28.8],[.8,35.4],[7.4,35.4]].forEach(([h,u],d)=>{const p=ms(h,u,2.4);for(let x=0;x<Fr;x++){const S=(x+1)/(Fr+1),m=l.clone().lerp(p,S);m.y-=Math.sin(S*Math.PI)*.6,this.lanterns.setMatrixAt(d*Fr+x,a.makeTranslation(m.x,m.y,m.z)),this.lanterns.setColorAt(d*Fr+x,new ee(Db[(x+d)%4]))}}),this.lanterns.name="lanterns",this.lanterns.visible=!1,this.group.add(this.monument,this.lanterns)}update(t,e){const n=Zf(t,this.d0);this.monument.visible=t>this.d0,this.monument.scale.setScalar(Math.max(.001,n)),this.lanterns.visible=e&&t>this.d0+1.4}}function Ub(i,t){const e=String(t).trim().replace(/\s+/g," ").slice(0,160);let n=e.split(" ").filter(Boolean);n.filter(c=>new RegExp("^\\p{Lu}","u").test(c)).length>n.length*.6&&(n=n.map(c=>c.toLowerCase()));const r=c=>{const h=c.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);return{pre:h[1],core:h[2],post:h[3]}},o=c=>new RegExp("^\\p{Lu}","u").test(c.core)&&!i.keep.includes(c.core.toLowerCase()),a=[];for(let c=0;c<n.length;c++){const h=r(n[c]),u=c+1<n.length?r(n[c+1]):null,d=h.core.toLowerCase(),p=u&&!h.post?i.lexicon[`${d} ${u.core.toLowerCase()}`]:void 0;if(p){a.push(h.pre+p+u.post),c++;continue}if(/^\d+$/.test(h.core)){a.push(h.pre+(Number(h.core)+1)+h.post);continue}if(i.lexicon[d]){a.push(h.pre+i.lexicon[d]+h.post);continue}if(o(h)&&(c>0||u&&o(u)&&!h.post)){let x=c,S=h;for(;!S.post&&x+1<n.length&&x-c<2&&o(r(n[x+1]));)x++,S=r(n[x]);a.push(h.pre+i.pool[ca(n.slice(c,x+1).join(" ").toLowerCase())%i.pool.length]+S.post),c=x;continue}a.push(n[c])}let l=a.join(" ").replace(/[.!?]+$/,"");return l=l.charAt(0).toUpperCase()+l.slice(1),`${l}. ${i.twists[ca(e.toLowerCase())%i.twists.length]}`}const Ho=0,Lr=1,Ob=2,Oi=new ee,xe=(i,t,e=0)=>[i,e,t];class Bb{constructor(){D(this,"pos",[]);D(this,"nor",[]);D(this,"col",[]);D(this,"piv",[]);D(this,"rev",[]);D(this,"emit",[])}tri(t,e,n,s,r,o,a,l=Ho){Oi.set(r);for(const c of[t,e,n])this.pos.push(...c),this.nor.push(...s),this.col.push(Oi.r,Oi.g,Oi.b),this.piv.push(...o),this.rev.push(a),this.emit.push(l)}quad(t,e,n,s,r,o,a,l,c=Ho){this.tri(t,e,n,r,o,a,l,c),this.tri(t,n,s,r,o,a,l,c)}box(t,e,n,s,r,o,a,l,c,h=Ho,u){const d=(p,x,S)=>xe(t+p*s,e+x*r,n+S*o);this.quad(d(0,0,1),d(0,1,1),d(1,1,1),d(1,0,1),[0,1,0],u??a,l,c,h),this.quad(d(0,1,0),d(1,1,0),d(1,1,1),d(0,1,1),[0,0,1],a,l,c,h),this.quad(d(1,1,0),d(1,0,0),d(1,0,1),d(1,1,1),[1,0,0],a,l,c,h),this.quad(d(1,0,0),d(0,0,0),d(0,0,1),d(1,0,1),[0,0,-1],a,l,c,h),this.quad(d(0,0,0),d(0,1,0),d(0,1,1),d(0,0,1),[-1,0,0],a,l,c,h)}geometry(t,e,n,s,r,o=Ho){const a=t.index?t.toNonIndexed():t;a.attributes.normal||a.computeVertexNormals();const l=a.attributes.position,c=a.attributes.normal,h=new te().extractRotation(e),u=new N,d=new N;Oi.set(n);for(let p=0;p<l.count;p++)u.fromBufferAttribute(l,p).applyMatrix4(e),d.fromBufferAttribute(c,p).applyMatrix4(h).normalize(),this.pos.push(u.x,u.y,u.z),this.nor.push(d.x,d.y,d.z),this.col.push(Oi.r,Oi.g,Oi.b),this.piv.push(...s),this.rev.push(r),this.emit.push(o);t.dispose()}get count(){return this.pos.length/3}build(){const t=new He;return t.setAttribute("position",new ve(new Float32Array(this.pos),3)),t.setAttribute("normal",new ve(new Float32Array(this.nor),3)),t.setAttribute("color",new ve(new Float32Array(this.col),3)),t.setAttribute("aPivot",new ve(new Float32Array(this.piv),3)),t.setAttribute("aReveal",new ve(new Float32Array(this.rev),1)),t.setAttribute("aEmit",new ve(new Float32Array(this.emit),1)),t.computeBoundingSphere(),t}}class zb{constructor(){D(this,"a",[]);D(this,"b",[]);D(this,"side",[]);D(this,"piv",[]);D(this,"rev",[]);D(this,"idx",[]);D(this,"n",0)}seg(t,e,n,s){for(const[o,a]of[[0,-1],[0,1],[1,1],[1,-1]])this.a.push(...t),this.b.push(...e),this.side.push(o,a),this.piv.push(...n),this.rev.push(s);const r=this.n;this.idx.push(r,r+1,r+2,r,r+2,r+3),this.n+=4}box(t,e,n,s,r,o,a,l){const c=(u,d,p)=>xe(t+u*s,e+d*r,n+p*o),h=[[c(0,0,0),c(1,0,0)],[c(1,0,0),c(1,1,0)],[c(1,1,0),c(0,1,0)],[c(0,1,0),c(0,0,0)],[c(0,0,1),c(1,0,1)],[c(1,0,1),c(1,1,1)],[c(1,1,1),c(0,1,1)],[c(0,1,1),c(0,0,1)],[c(0,0,0),c(0,0,1)],[c(1,0,0),c(1,0,1)],[c(1,1,0),c(1,1,1)],[c(0,1,0),c(0,1,1)]];for(const[u,d]of h)this.seg(u,d,a,l)}rect(t,e,n){for(let s=0;s<4;s++)this.seg(t[s],t[(s+1)%4],e,n)}build(){const t=new He;return t.setAttribute("position",new ve(new Float32Array(this.a),3)),t.setAttribute("aEnd",new ve(new Float32Array(this.b),3)),t.setAttribute("aSide",new ve(new Float32Array(this.side),2)),t.setAttribute("aPivot",new ve(new Float32Array(this.piv),3)),t.setAttribute("aReveal",new ve(new Float32Array(this.rev),1)),t.setIndex(this.idx),t.computeBoundingSphere(),t}}const je={uRadius:{value:0},uGlow:{value:0},uGlowColor:{value:new ee(16770976)},uEdgeWidth:{value:2},uViewport:{value:new St(1920,1080)},uEdgeColor:{value:new ee(1118481).convertLinearToSRGB()}},fh=`
uniform float uRadius;
attribute vec3 aPivot;
attribute float aReveal;
float revealScale() {
  float x = clamp((uRadius - aReveal) / 1.4, 0.0, 1.0);
  float y = x - 1.0;
  return 1.0 + 2.70158 * y * y * y + 1.70158 * y * y;
}`;let Al=null;function Hb(){if(Al)return Al;const i=new wi({color:16777215,vertexColors:!0,gradientMap:Si()});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,{uRadius:je.uRadius,uGlow:je.uGlow,uGlowColor:je.uGlowColor}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${fh}
attribute float aEmit;
varying float vEmit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aPivot + (transformed - aPivot) * revealScale();
vEmit = aEmit;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;
uniform vec3 uGlowColor;
varying float vEmit;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
        if (vEmit > 0.5 && vEmit < 1.5) gl_FragColor.rgb = diffuseColor.rgb;
        if (vEmit > 1.5) gl_FragColor.rgb = mix(gl_FragColor.rgb, uGlowColor, uGlow);`)},i.customProgramCacheKey=()=>"peepl-town-v1",Al=i,i}let Tl=null;function Vb(){if(Tl)return Tl;const i=new Cf({depthPacking:h0});return i.onBeforeCompile=t=>{t.uniforms.uRadius=je.uRadius,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${fh}`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = aPivot + (transformed - aPivot) * revealScale();`)},i.customProgramCacheKey=()=>"peepl-town-depth-v1",Tl=i,i}let Vo=null;function Gb(){return Vo||(Vo=new fn({uniforms:{uRadius:je.uRadius,uEdgeWidth:je.uEdgeWidth,uViewport:je.uViewport,uEdgeColor:je.uEdgeColor},vertexShader:`
      ${fh}
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
      void main() { gl_FragColor = vec4(uEdgeColor, 1.0); }`,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),Vo)}const da=[19,19],Wb=(i,t)=>Math.max(5.4,Math.hypot(i-da[0],t-da[1])),Xb=new te,Cl=(i,t,e,n=1,s=1,r=1,o=0)=>Xb.compose(new N(...xe(i,t,e)),new Xi().setFromAxisAngle(new N(0,1,0),o),new N(n,s,r));function $b(i){var P;const t=new Bb,e=new zb,n=(v,E,g,_,C,A,k,F,O=!0,L=0,H)=>{const B=xe(v+_/2,E+C/2,g);t.box(v,E,g,_,C,A,k,B,F,L,H),O&&e.box(v,E,g,_,C,A,B,F)};t.box(0,0,-.8,40,40,.8,i.ground.color,xe(20,20,-.8),24),t.quad(xe(0,0,.001),xe(0,40,.001),xe(40,40,.001),xe(40,0,.001),[0,1,0],i.ground.color,xe(20,20,0),0),e.box(0,0,-.8,40,40,.8,xe(20,20,-.8),24);const s={park:.004,river:.004,pond:.008,road:.01,sidewalk:.014,plaza:.012,crosswalk:.02},r=(v,E,g,_,C=0)=>{const A=xe((v[0]+v[2])/2,(v[1]+v[3])/2,E);t.quad(xe(v[0],v[1],E),xe(v[0],v[3],E),xe(v[2],v[3],E),xe(v[2],v[1],E),[0,1,0],g,A,_,C)};for(const v of i.surfaces){if(v.kind==="ground")continue;const E=s[v.kind]??.01;if(v.box){const[g,_,C,A,k,F]=v.box;n(g,_,C,A,k,F,v.color,v.d0)}else if(v.ellipse){const[g,_,C,A]=v.ellipse;t.geometry(new Qc(1,24),new te().multiplyMatrices(Cl(g,_,E,C,1,A),new te().makeRotationX(-Math.PI/2)),v.color,xe(g,_,E),v.d0)}else if(v.rect&&v.kind==="crosswalk"){const[g,_,C,A]=v.rect,k=A-_>C-g;for(let F=k?_:g;F<(k?A:C)-.1;F+=v.pitch??.55){const O=F+(v.stripe??.28);r(k?[g,F,C,O]:[F,_,O,A],E,v.color,v.d0)}}else if(v.rect&&(r(v.rect,E,v.color,v.d0),v.dashes)){const g=v.dashes;for(let _=.4;_<40;_+=g.pitch)(_+g.len<g.skip[0]||_>g.skip[1])&&r(g.axis==="x"?[_,g.at-.08,_+g.len,g.at+.08]:[g.at-.08,_,g.at+.08,_+g.len],E+.003,g.color,v.d0)}}const o=(v,E,g,_,C)=>{const[A,k,F,O,L,H]=v,B=.012,et=xe(A+O/2,k+L/2,F);let nt,ht;E.face==="y"?(nt=[xe(A+E.u[0],k+L+B,F+E.v[0]),xe(A+E.u[1],k+L+B,F+E.v[0]),xe(A+E.u[1],k+L+B,F+E.v[1]),xe(A+E.u[0],k+L+B,F+E.v[1])],ht=[0,0,1]):E.face==="x"?(nt=[xe(A+O+B,k+E.u[1],F+E.v[0]),xe(A+O+B,k+E.u[0],F+E.v[0]),xe(A+O+B,k+E.u[0],F+E.v[1]),xe(A+O+B,k+E.u[1],F+E.v[1])],ht=[1,0,0]):(nt=[xe(A+E.u[0],k+E.v[0],F+H+B),xe(A+E.u[0],k+E.v[1],F+H+B),xe(A+E.u[1],k+E.v[1],F+H+B),xe(A+E.u[1],k+E.v[0],F+H+B)],ht=[0,1,0]),t.quad(nt[0],nt[1],nt[2],nt[3],ht,g,et,_,C),e.rect(nt,et,_)},a=v=>{const E=v.windows,[,,,g,_,C]=v.box;for(const A of["x","y"]){const k=A==="x"?_:g;for(let F=E.margin[1];F+E.size<C-.3;F+=E.pitch)for(let O=E.margin[0];O+E.size<k-.35;O+=E.pitch){const L=v.shopFront;L&&A==="y"&&F<L.v[1]+.3&&O+E.size>L.u[0]-.2&&O<L.u[1]+.2||o(v.box,{face:A,u:[O,O+E.size],v:[F,F+E.size],color:E.color},E.color,v.d0,Ob)}}};for(const v of i.buildings){const[E,g,_,C,A,k]=v.box;if(v.shopFront){const F=v.shopFront,O=.8;n(E,g,_,C,A-O,k,v.color,v.d0),n(E,g+A-O,_,F.u[0],O,k,v.color,v.d0),n(E+F.u[1],g+A-O,_,C-F.u[1],O,k,v.color,v.d0),n(E+F.u[0],g+A-O,_+F.v[1],F.u[1]-F.u[0],O,k-F.v[1],v.color,v.d0),n(E+F.u[0],g+A-O,_,F.u[1]-F.u[0],O,.02,"#C98B55",v.d0,!1),F.counter&&n(E+F.u[0]+.15,g+A-.3,_,F.u[1]-F.u[0]-.3,.3,.85,"#FFFFFF",v.d0)}else n(E,g,_,C,A,k,v.color,v.d0,!0,v.glow?Lr:0);for(const F of v.seats??[])n(F[0]-.18,F[1]-.18,0,.36,.36,F[2],"#FF7ADB",v.d0);for(const F of v.decals??[])o(v.box,F,F.color,v.d0,F.emissive?Lr:0);if(v.windows&&a(v),v.stripes)for(let F=0;F<v.stripes.count;F++)o(v.box,{face:"t",u:[.2+F*v.stripes.pitch,.2+F*v.stripes.pitch+v.stripes.width],v:[0,A],color:v.stripes.color},v.stripes.color,v.d0,0)}const l=(v,E,g,_,C,A)=>t.geometry(new Un(_,12,8),Cl(v,E,g),C,xe(v,E,g-_),A),c=(v,E,g,_)=>{n(v-.1,E-.1,0,.2,.2,.9*g,"#8B5A2B",_),l(v,E,1.3*g,.75*g,"#4CAF50",_)};for(const v of i.props){const[E,g]=v.at,_=v.color??"#FFFFFF";switch(v.kind){case"blob":l(E,g,v.z,v.r,_,v.d0);break;case"rug":{const[C,A]=v.size;r([E-C/2,g-A/2,E+C/2,g+A/2],.02,_,v.d0);break}case"armchair":n(E-.45,g-.35,0,.9,.7,.42,_,v.d0),n(E-.45,g-.45,.42,.9,.18,.55,_,v.d0),n(E-.36,g-.26,.42,.72,.56,.1,v.cushion??"#0AB8EE",v.d0);break;case"floorlamp":n(E-.04,g-.04,0,.08,.08,1.5,"#111111",v.d0),n(E-.22,g-.22,1.5,.44,.44,.32,_,v.d0,!0,Lr);break;case"poster":{const[C,A]=v.size,k=v.z;o([E-C/2,g-.25,k-A/2,C,.25,A],{face:"y",u:[0,C],v:[0,A]},_,v.d0,0);for(const F of[1,-1])t.geometry(new un(.08,A*.7,.01),new te().multiplyMatrices(Cl(E,g+.025,k),new te().makeRotationZ(F*.6)),"#111111",xe(E,g,k-A/2),v.d0,Lr);break}case"lamp":n(E-.07,g-.07,0,.14,.14,v.height-.22,"#111111",v.d0),n(E-.25,g-.25,v.height-.22,.5,.5,.22,"#FFE100",v.d0,!0,Lr);break;case"tree":c(E,g,v.scale??1,v.d0);break;case"bench":{const[C,A]=v.size??[1.3,.45];n(E-C/2,g-A/2,0,C,A,.38,_,v.d0),(P=v.sign)!=null&&P.pole&&(n(E+C/2+.2,g-.05,0,.1,.1,2.2,"#111111",v.d0),n(E+C/2-.05,g-.06,1.9,.6,.12,.4,"#FFE100",v.d0));break}case"bin":n(E-.18,g-.18,0,.35,.35,.8,_,v.d0);break;case"car":{if(v.loop)break;const[C,A]=v.size;n(E-C/2,g-A/2,0,C,A,.55,_,v.d0),n(E-C/2+C*.2,g-A/2+A*.1,.55,C*.55,A*.8,.45,v.roof??"#DDEFFF",v.d0);break}}}const h=i.city;let u=0;for(let v=0;v<h.grid[0];v++)for(let E=0;E<h.grid[1];E++){const g=v*h.lotPitch+h.lotOffset,_=E*h.lotPitch+h.lotOffset,C=h.lotSize,A=g<h.core[2]&&g+C>h.core[0]&&_<h.core[3]&&_+C>h.core[1],k=h.roadBands.some(([B,et])=>_<et&&_+C>B||g<et&&g+C>B);if(A||k||g+C>h.maxX||(u++,h.skipRects.some(B=>g<B[2]&&g+C>B[0]&&_<B[3]&&_+C>B[1])))continue;const F=Wb(g+C/2,_+C/2);if(Hi(u*5.3)<h.treeChance){c(g+C/2,_+C/2,h.treeScale,F);continue}const O=Hi(u*3.1+1),L=1.8+O*O*10,H={d0:F,box:[g,_,0,C,C,L],color:h.palette[Math.floor(Hi(u*7.7+2)*7)],windows:{color:"#2B3566",pitch:1.25,size:.7,margin:[.55,.8]}};n(g,_,0,C,C,L,H.color,F),a(H)}const d=new be(t.build(),Hb());d.customDepthMaterial=Vb(),d.receiveShadow=!0,d.castShadow=!0,d.frustumCulled=!1;const p=new be(e.build(),Gb());p.frustumCulled=!1,p.renderOrder=1;const x=i.fog,S=new wi({color:16777215,gradientMap:Si()});S.onBeforeCompile=v=>{v.uniforms.uRadius=je.uRadius,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
uniform float uRadius;
attribute float aD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float k = clamp((uRadius - 1.0 - aD) / 0.6, 0.0, 1.0);
transformed *= 1.0 - k;`)},S.customProgramCacheKey=()=>"peepl-fog-v1";const m=x.cells*x.cells,f=new ys(new un(x.cellSize,x.height,x.cellSize),S,m),y=new Float32Array(m),M=new ee;for(let v=0;v<x.cells;v++)for(let E=0;E<x.cells;E++){const g=v*x.cells+E,_=v*x.cellSize+x.cellSize/2,C=E*x.cellSize+x.cellSize/2;f.setMatrixAt(g,new te().makeTranslation(...xe(_,C,x.height/2+.03))),M.set(x.color).multiplyScalar(x.variation[0]+Hi(v*20+E)*(x.variation[1]-x.variation[0])),f.setColorAt(g,M),y[g]=Math.hypot(_-da[0],C-da[1])}f.geometry.setAttribute("aD",new oa(y,1)),f.frustumCulled=!1;const b=new hn;return b.add(d,p,f),{group:b,faces:d,edges:p,fog:f,triangles:d.geometry.attributes.position.count/3}}function Yb(){const i={uTop:{value:new ee(702702)},uMid:{value:new ee(8377333)},uBottom:{value:new ee(14087423)},uOpacity:{value:0}},t=new fn({uniforms:i,side:Je,depthWrite:!1,transparent:!0,vertexShader:"varying float vY; void main(){ vY = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uBottom; uniform float uOpacity; varying float vY;
      void main(){ vec3 c = vY > 0.15 ? mix(uMid, uTop, smoothstep(0.15, 0.7, vY)) : mix(uBottom, uMid, smoothstep(-0.2, 0.15, vY));
      gl_FragColor = vec4(c, uOpacity);
      #include <colorspace_fragment>
      }`}),e=new be(new Un(400,32,16),t);return e.renderOrder=-10,e.frustumCulled=!1,{mesh:e,uniforms:i}}class qb{constructor(){D(this,"uniforms",{tDiffuse:{value:null},uQuant:{value:1},uVignette:{value:.15},uSat:{value:1.06},uGrain:{value:.025},uTime:{value:0},uRes:{value:new St(1,1)}});D(this,"rt");D(this,"scene",new ga);D(this,"cam",new ya(-1,1,1,-1,0,1));D(this,"enabled",!0);this.rt=new $n(1,1,{samples:4,colorSpace:Ze});const t=new He;t.setAttribute("position",new _e([-1,-1,0,3,-1,0,-1,3,0],3)),t.setAttribute("uv",new _e([0,0,2,0,0,2],2));const e=new fn({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
        }`});this.scene.add(new be(t,e)),this.uniforms.tDiffuse.value=this.rt.texture}render(t,e,n,s){if(!this.enabled){t.setRenderTarget(null),t.render(e,n);return}const r=t.getDrawingBufferSize(new St);(this.rt.width!==r.x||this.rt.height!==r.y)&&this.rt.setSize(r.x,r.y),this.uniforms.uRes.value.copy(r),this.uniforms.uTime.value=Math.floor(s*12)/12,t.setRenderTarget(this.rt),t.clear(),t.render(e,n),t.setRenderTarget(null),t.render(this.scene,this.cam)}dispose(){this.rt.dispose()}}const as=Math.PI/180,zr=1.05,Iu=[1.05,.8,.85,.9],Du=i=>i<.5?4*i**3:1-(-2*i+2)**3/2,Go=(i,t,e)=>i+(t-i)*e;class jb{constructor(t){D(this,"camera",new xn(22,16/9,.5,600));D(this,"shot","town");D(this,"from");D(this,"to");D(this,"moveAt",-10);D(this,"moveDur",.9);D(this,"t",0);D(this,"distMove",null);D(this,"bias",1);this.from={...t,target:t.target.clone()},this.to={...t,target:t.target.clone()}}go(t,e=.9,n){this.from=this.current(),this.to={target:(t.target??this.to.target).clone(),yaw:t.yaw??this.to.yaw,pitch:t.pitch??this.to.pitch,dist:t.dist??this.to.dist},this.moveAt=this.t,this.moveDur=Math.max(.001,e),this.distMove=null,n&&(this.shot=n)}dolly(t,e,n){this.distMove={from:t,to:e,at:this.t,dur:n}}current(){const t=Du(Math.min(1,(this.t-this.moveAt)/this.moveDur)),e=this.from,n=this.to;let s=Go(e.dist,n.dist,t);return this.distMove&&(s=Go(this.distMove.from,this.distMove.to,Du(Math.min(1,(this.t-this.distMove.at)/this.distMove.dur)))),{target:e.target.clone().lerp(n.target,t),yaw:Go(e.yaw,n.yaw,t),pitch:Go(e.pitch,n.pitch,t),dist:s}}update(t,e,n){this.t+=t;const s=this.current(),r=n?0:(this.shot==="town"?6:this.shot==="venue"?4:0)*as*Math.sin(this.t/20*Math.PI*2),o=s.yaw+r,a=e<1,l=s.dist*this.bias*(a?this.shot==="town"?1.45:this.shot==="venue"?1.35:1.3:1);this.camera.fov=a?this.shot==="town"?22:this.shot==="venue"?36:46:22,this.camera.aspect=e,a?this.camera.setViewOffset(e*1e3,1e3,0,90,e*1e3,1e3):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix(),this.camera.position.set(s.target.x+Math.sin(o)*Math.cos(s.pitch)*l,s.target.y+Math.sin(s.pitch)*l,s.target.z+Math.cos(o)*Math.cos(s.pitch)*l),this.camera.lookAt(s.target)}}const Ir={town:(i,t)=>({target:i,yaw:45*as,pitch:35.264*as,dist:t*zr}),venue:i=>({target:i.clone().add(new N(0,1,0)),yaw:45*as,pitch:24*as,dist:18}),close:(i,t)=>{const e=i.clone().add(t).multiplyScalar(.5).setY(1.5);let s=Math.atan2(t.x-i.x,t.z-i.z)+Math.PI/2;return Math.cos(s-45*as)<0&&(s+=Math.PI),{target:e,yaw:s,pitch:10*as,dist:7.5}}},Zb={walk:"walk",tv:"tv",sit:"sit",read:"read",browse:"browse",sleep:"sleep",idle:"idle"};function Kb(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new to(i)}class Jb{constructor(t,e,n=!1){D(this,"maxVisible",1/0);D(this,"group",new hn);D(this,"members",new Map);D(this,"shadows");D(this,"m4",new te);D(this,"v",new N);D(this,"outline",!0);this.specs=t,this.bodyTypes=e,this.groups=n,this.shadows=new ys(new Yi(1,1),new si({map:Kb(),transparent:!0,depthWrite:!1}),64),this.shadows.count=0,this.shadows.frustumCulled=!1,this.shadows.renderOrder=2,this.group.add(this.shadows)}ensure(t,e=t,n){let s=this.members.get(t);if(s)return s;const r=this.specs.find(l=>l.id===e)??this.specs[0],o=n?{...r,id:t,body:n.body,attach:n.attach}:r,a=dh(o,this.bodyTypes,{groups:this.groups});return a.setOutline(this.outline),this.group.add(a.root),s={id:t,peepl:a,anim:new uh(a.rig,a.dims,t),px:0,visible:!0},this.members.set(t,s),s}setOutline(t){this.outline=t;for(const e of this.members.values())e.peepl.setOutline(t)}update(t,e,n,s,r=1/0){let o=0;const a=new Set,l=u=>u.x>=16&&u.x<=22&&u.z>=16&&u.z<=22||Math.hypot(u.x-19,u.z-19)<=r-1,c=new Set,h=t.filter(l);if(h.length>this.maxVisible){const u=n.position;h.filter(d=>d.id!=="vinnie"&&d.id!=="mochi").sort((d,p)=>Math.hypot(p.x-u.x,p.z-u.z)-Math.hypot(d.x-u.x,d.z-u.z)).slice(0,h.length-this.maxVisible).forEach(d=>c.add(d.id))}for(const u of t){a.add(u.id);const d=this.ensure(u.id,u.cast,u.look),p=d.peepl.root;if(d.visible=l(u)&&!c.has(u.id),p.visible=d.visible,!d.visible)continue;p.position.set(u.x,u.anim==="sleep"?.5:0,u.z);let x=u.yaw-d.anim.yaw;x=Math.atan2(Math.sin(x),Math.cos(x)),d.anim.yaw+=x*Math.min(1,e*8),d.anim.play(Zb[u.anim]??"idle"),d.anim.update(e),d.px=this.projectedHeight(d,n,s),d.peepl.setLod(d.px>180?0:d.px>60?1:2),this.m4.makeRotationX(-Math.PI/2).setPosition(u.x,.012,u.z),this.m4.scale(new N(.64,.64,1)),this.shadows.setMatrixAt(o++,this.m4)}this.shadows.count=o,this.shadows.instanceMatrix.needsUpdate=!0;for(const[u,d]of this.members)a.has(u)||(d.visible=!1,d.peepl.root.visible=!1)}projectedHeight(t,e,n){const s=t.peepl.root,r=this.v.set(s.position.x,s.position.y,s.position.z).project(e).y,o=new N(s.position.x,s.position.y+t.peepl.dims.crownY*hr,s.position.z).project(e).y;return Math.abs(o-r)*.5*n}headPx(t,e,n,s,r=.25){const o=this.members.get(t);if(!o)return null;const a=o.peepl.root,l=new N(a.position.x,a.position.y+o.peepl.dims.crownY*hr+r,a.position.z).project(e);return[(l.x+1)/2*n,(1-l.y)/2*s,l.z<1&&Math.abs(l.x)<1&&Math.abs(l.y)<1]}dispose(){for(const t of this.members.values())t.peepl.dispose();this.members.clear(),this.group.removeFromParent()}}class Qb{constructor(){D(this,"root",document.getElementById("hud3d"));D(this,"labels",new Map);D(this,"t",0)}bubble(t,e,n,s,r,o={}){this.remove(t);const a=jf(e,o.colour);return a.dataset.id=t,Nc(e),this.root.append(a),this.labels.set(t,{id:t,el:a,anchor:n,at:s,until:s+r,priority:o.priority??10,hop:0}),a}attach(t,e,n,s,r,o=9){this.remove(t),e.style.position="absolute",e.style.left=e.style.top="0",e.style.transformOrigin="50% 100%",this.root.append(e),this.labels.set(t,{id:t,el:e,anchor:n,at:s,until:s+r,priority:o,hop:0})}has(t){return this.labels.has(t)}remove(t){var e;(e=this.labels.get(t))==null||e.el.remove(),this.labels.delete(t)}clear(){for(const t of[...this.labels.keys()])this.remove(t)}update(t,e){this.t+=t;const n=Math.max(.5,fa()),s=[],r=[...this.labels.values()].sort((a,l)=>l.priority-a.priority),o=[...document.querySelectorAll(".hud-avoid")].filter(a=>a.offsetParent&&a.style.visibility!=="hidden").map(a=>a.getBoundingClientRect());for(const a of r){if(this.t>a.until+.25){this.remove(a.id);continue}const l=a.anchor(),[c,h]=Le(this.t,a.at,.3,e),u=1-ae(this.t,a.until,.25,ie.enter);if(!l||!l[2]){a.el.style.visibility="hidden";continue}if(s.some(([p,x])=>Math.hypot(p-l[0],x-l[1])<48)){a.el.style.visibility="hidden";continue}s.push([l[0],l[1]]),wb(a.el,l[0],l[1],n,c,h*u,o)}}texts(){return[...this.labels.values()].filter(t=>t.el.style.visibility!=="hidden").map(t=>t.el.textContent??"")}}const tM={caption:1,bubble:2,autoWalk:0,gfx:1},eM=i=>{const[t,e]=i.split(":").map(Number);return((t??0)*60+(e??0))*60};class nM{constructor(t,e){D(this,"fired",new Map);D(this,"skipped",[]);D(this,"queue",[]);this.beats=t,this.handlers=e}markFired(...t){for(const e of t)this.fired.has(e)||this.fired.set(e,-100)}fire(t,e){const n=this.beats.find(s=>s.id===t);if(!(!n||this.fired.has(t))){this.fired.set(t,e);for(const[s,...r]of n.actions){const o=s,a=tM[o];let l=0;a!==void 0&&typeof r[a]=="number"&&(l=r[a]),o==="vinnie"&&r[0]==="standTurn"&&typeof r[1]=="number"&&(l=r[1]),this.queue.push({at:e+l,verb:o,args:r})}this.queue.sort((s,r)=>s.at-r.at)}}triggered(t,e){switch(t.on){case"s8Start":return!0;case"km":return e.km>=t.gte&&(!t.after||this.fired.has(t.after));case"near":return e.tier>=t.tierMin&&e.distance(t.a,t.b)<=t.dist;case"choice":return e.choices[t.beat]===t.value;case"any":return t.of.some(n=>"simTimeGte"in n?e.simSec>=eM(n.simTimeGte)&&this.fired.has("tier4"):this.fired.has(n.after)&&e.t-this.fired.get(n.after)>=n.realSeconds)}}update(t){if(!t.busy)for(const e of this.beats)!this.fired.has(e.id)&&this.triggered(e.trigger,t)&&this.fire(e.id,t.t);for(;this.queue.length&&this.queue[0].at<=t.t;){const{verb:e,args:n}=this.queue.shift(),s=this.handlers[e];s?s(...n):this.skipped.push(e)}}}const iM=[[1,0],[0,1],[-1,0],[0,-1]],Dr=(i,t)=>i*1e3+t;class sM{constructor(t,e,n=[],s=.3,r=40){D(this,"walk",new Set);D(this,"interior");this.rightHand=s,this.interior=n;const o=(a,l,c)=>a>=c[0]&&a<=c[2]&&l>=c[1]&&l<=c[3];for(let a=0;a<r;a++)for(let l=0;l<r;l++){const c=a+.5,h=l+.5;t.some(u=>o(c,h,u))&&!e.some(u=>o(c,h,u))&&this.walk.add(Dr(a,l))}}walkable(t,e){return this.walk.has(Dr(t,e))}cellOf(t){return[Math.floor(t[0]),Math.floor(t[1])]}nearestWalkable(t){if(this.walkable(t[0],t[1]))return t;for(let e=1;e<6;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++)if(Math.max(Math.abs(s),Math.abs(n))===e&&this.walkable(t[0]+s,t[1]+n))return[t[0]+s,t[1]+n];return t}findPath(t,e){if(t[0]===e[0]&&t[1]===e[1])return[t];const n=new Map([[Dr(t[0],t[1]),null]]),s=[t];for(let r=0;r<s.length;r++){const o=s[r];for(const[a,l]of iM){const c=o[0]+a,h=o[1]+l,u=Dr(c,h);if(!(n.has(u)||!this.walkable(c,h))){if(n.set(u,o),c===e[0]&&h===e[1]){const d=[[c,h]];for(let p=o;p;p=n.get(Dr(p[0],p[1])))d.push(p);return d.reverse()}s.push([c,h])}}}return null}isInterior(t,e){return this.interior.some(n=>t>=n[0]&&t<=n[2]&&e>=n[1]&&e<=n[3])}route(t,e){const n=this.nearestWalkable(this.cellOf(t)),s=this.nearestWalkable(this.cellOf(e)),r=this.findPath(n,s)??[n],o=r.map(([c,h],u)=>{const d=c+.5,p=h+.5;if(this.isInterior(d,p))return[d,p];const x=r[u-1],S=r[u+1],m=S?[S[0]-c,S[1]-h]:x?[c-x[0],h-x[1]]:[0,0];return[d-m[1]*this.rightHand,p+m[0]*this.rightHand]}),a=[t,...o,e],l=[a[0]];for(let c=1;c<a.length-1;c++){const h=l[l.length-1],u=a[c],d=a[c+1],p=(u[0]-h[0])*(d[1]-h[1])-(u[1]-h[1])*(d[0]-h[0]);Math.abs(p)>1e-6&&l.push(u)}return l.push(a[a.length-1]),l}}const Wr=86400,Lc=86400/240,Ys=20,hs=i=>{const[t,e]=i.split(":").map(Number);return((t??0)*60+(e??0))*60},rM=i=>{const t=Math.floor((i%Wr+Wr)%Wr/60);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`};function oM(i,t,e){return t<=e?i>=t&&i<e:i>=t||i<e}class aM{constructor(t=1,e="13:00"){D(this,"day");D(this,"sec");this.day=t,this.sec=hs(e)}advance(t){for(this.sec+=t;this.sec>=Wr;)this.sec-=Wr,this.day++}set(t,e=this.day){this.day=e,this.sec=hs(t)}get hhmm(){return rM(this.sec)}}class lM{constructor(t,e){D(this,"dropped",null);this.d=t,this.seed=e}forDay(t){const e=t===1?this.d.events.find(s=>s.id===this.d.forcedDay1):this.d.events[Math.floor(Ks(this.seed,"event",t)()*this.d.events.length)],n=e.startHour*3600;return{ev:e,day:t,start:n,end:Math.min(86400,n+e.durationHours*3600),dropped:!1}}drop(t,e,n){const s=this.d.events.find(r=>r.id===t);return s?(this.dropped={ev:s,day:e,start:n,end:Math.min(86400,n+s.durationHours*3600),dropped:!0},this.dropped):null}today(t){return this.dropped&&this.dropped.day===t?this.dropped:this.forDay(t)}active(t,e){const n=this.today(t);return e>=n.start&&e<n.end?n:null}raining(t,e){const n=this.active(t,e);return n!=null&&n.ev.weather?n.ev.weather==="rain":t%this.d.rainEvery===0}tickerLines(t,e){return[this.today(t).ev.ticker,...this.d.tickerFiller,this.raining(t,e)?this.d.weatherLine.rain:this.d.weatherLine.sun]}}const Hr=[16,16,22,22],cM=.58,Nu=.29,Uu={tv:Math.PI,shelf:-Math.PI/2,window:Math.PI,chair:Math.PI/4,bed:0,bench:0,counter:0,front:Math.PI,corner:Math.PI/4};class hM{constructor(t,e=t.routine.clock.seed){D(this,"clock");D(this,"nav");D(this,"events");D(this,"tier",1);D(this,"agents",new Map);D(this,"needs",{});D(this,"override",null);D(this,"reaction",null);D(this,"reacted",new Set);D(this,"scripted",new Set);D(this,"landmarks",new Map);D(this,"realT",0);D(this,"seed");this.d=t,this.seed=e,this.clock=new aM(t.routine.start.day,t.routine.start.time);for(const o of t.map.landmarks)this.landmarks.set(o.key,o);const n=t.map.buildings.filter(o=>o.id.startsWith("flat.")&&!/slab|wall|lamp|pillow|cover|tv/.test(o.id)).map(o=>[o.box[0],o.box[1],o.box[0]+o.box[3],o.box[1]+o.box[4]]);this.nav=new sM(t.map.nav.walkRects,[...t.map.nav.blocked,...n],[Hr,[27.8,22,33.2,22.4]],t.map.nav.rightHandOffset),this.events=t.events?new lM(t.events,e):null;const s=Ks(e,"needs");for(const[o,[a,l]]of Object.entries(t.routine.needs.start))this.needs[o]=a+(l-a)*s();const r=this.spotPos("H","tv");this.add({id:"vinnie",kind:"vinnie",cast:"vinnie",pos:r,speed:t.routine.vinnie.walkSpeedU*cM,anim:"tv",place:"H",tierMin:1}),this.agents.get("vinnie").yaw=Uu.tv,(t.map.placements??[]).forEach((o,a)=>{const l=o.who==="joe"?`pacer-${a}`:o.who;this.add({id:l,kind:o.b?"pacer":"stand",cast:o.who,pos:[...o.a],speed:(o.speed??.8)*1,anim:"idle",place:"",tierMin:o.tierMin,pace:o.b?o:void 0})});for(const o of t.routine.extras??[])this.add({id:o.id,kind:"extra",cast:"joe",pos:[...o.home],speed:.85,anim:"idle",place:"home",tierMin:1,look:{body:o.body,attach:o.attach}}),this.updateExtra(this.agents.get(o.id),o,!0);this.updateRoutine()}add(t){this.agents.set(t.id,{yaw:0,path:null,seg:0,moving:!1,activity:"",hidden:!1,prev:[t.pos[0],t.pos[1]],...t})}landmarkTier(t){var e;return((e=this.landmarks.get(t))==null?void 0:e.tier)??1}landmark(t){return this.landmarks.get(t)}spotPos(t,e){var r;const n=this.landmarks.get(t),s=(e&&((r=n==null?void 0:n.spots)==null?void 0:r[e]))??(n!=null&&n.spots?Object.values(n.spots)[0]:void 0)??(n==null?void 0:n.door)??(n==null?void 0:n.monument);return s?[s[0],s[1]]:[19,19]}schedule(){return this.clock.day===1?this.d.routine.vinnie.dayOff.schedule:this.d.routine.vinnie.work.schedule}activityNow(){const t=this.schedule().find(r=>oM(this.clock.sec,hs(r.from),hs(r.to)));if(!t)return{key:"home",place:"H",spot:"chair",anim:"idle"};let e=t.place.startsWith("$")?this.resolveChoice(t):t.place,n=t.spot==="auto"?void 0:t.spot,s=t.anim;if(this.landmarkTier(e)>this.tier){const r=t.fallback??{place:"H",spot:"window",anim:"idle"};e=r.place,n=r.spot,s=r.anim,this.landmarkTier(e)>this.tier&&([e,n,s]=["H","window","idle"])}return{key:`${t.from}|${e}|${n??""}|${s}`,place:e,spot:n,anim:s,beat:t.beat}}resolveChoice(t){var r,o;const e=(r=this.events)==null?void 0:r.today(this.clock.day).ev;if(t.place==="$lunch"&&(e!=null&&e.lunch))return e.lunch;if(t.place==="$evening"&&(e!=null&&e.evening))return e.evening;const n=Ks(this.seed,t.place,this.clock.day);if(t.place==="$lunch")return(o=this.events)!=null&&o.raining(this.clock.day,this.clock.sec)?"K":n()<.5+(this.needs.social??.5)*.3?"C":"P";const s=this.needs;return(s.energy??1)<.35?"H":(s.social??0)>=(s.curiosity??0)?n()<.5?"Z":"C":["N","T","M"][Math.floor(n()*3)]}updateRoutine(){if(this.scripted.has("vinnie"))return;const t=this.agents.get("vinnie"),e=this.activityNow();e.key!==t.activity&&(t.activity=e.key,t.place=e.place,t.anim=e.anim,this.override=null,this.walkTo(t,this.spotPos(e.place,e.spot)),t.arriveYaw=Uu[e.spot??""],t.moving||(t.yaw=t.arriveYaw??t.yaw))}updateExtra(t,e,n=!1){const s=this.clock.sec,r=[...e.plan].sort((u,d)=>hs(u[0])-hs(d[0])),o=[...r].reverse().find(u=>hs(u[0])<=s)??r[r.length-1],a=`${o[0]}|${o[1]}|${o[2]??""}`;if(a===t.activity)return;t.activity=a;const[,l,c]=o;let h;if(l==="home")h=[...e.home],t.hideOnArrive=!0;else if(c==="out"){const u=this.landmarks.get(l),d=u!=null&&u.spots?Object.values(u.spots):[],p=d.length?d[Math.floor(Ks(this.seed,t.id,a)()*d.length)]:(u==null?void 0:u.door)??(u==null?void 0:u.monument)??[19,23],x=Ks(this.seed,t.id,a,"j");h=[p[0]+(x()-.5)*.8,p[1]+(x()-.5)*.8],t.hideOnArrive=!1}else h=this.spotPos(l),t.hideOnArrive=c==="in";if(t.place=l,n){t.pos=[...h],t.prev=[...h],t.hidden=!!t.hideOnArrive;return}t.hidden=!1,this.walkTo(t,h),t.moving||(t.hidden=!!t.hideOnArrive)}walkTo(t,e){if(Math.hypot(e[0]-t.pos[0],e[1]-t.pos[1])<.05){t.path=null,t.moving=!1;return}t.path=this.nav.route(t.pos,e),t.seg=1,t.moving=!0}tick(t){this.clock.advance(t),this.realT+=t/Lc,this.updateRoutine();for(const e of this.d.routine.extras??[])this.updateExtra(this.agents.get(e.id),e);this.updateCrowd();for(const e of this.agents.values())e.prev=[e.pos[0],e.pos[1]],e.pace&&!this.scripted.has(e.id)?this.pace(e):this.move(e,t);this.separate(),this.tickNeeds(t),this.checkReaction()}move(t,e){if(!t.path)return;let n=t.speed*e/Lc;for(;n>0&&t.path&&t.seg<t.path.length;){const s=t.path[t.seg],r=s[0]-t.pos[0],o=s[1]-t.pos[1],a=Math.hypot(r,o);a>1e-6&&(t.yaw=Math.atan2(r,o)),a<=n?(t.pos=[s[0],s[1]],n-=a,t.seg++):(t.pos=[t.pos[0]+r/a*n,t.pos[1]+o/a*n],n=0)}t.path&&t.seg>=t.path.length&&(t.path=null,t.moving=!1,t.arriveYaw!==void 0&&(t.yaw=t.arriveYaw),t.hideOnArrive&&(t.hidden=!0))}pace(t){const e=t.pace,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),s=(this.realT*(e.speed??.8)+(e.phase??0)*n*2)%(2*n),r=s<n?s/n:2-s/n,o=e.a[0]+(e.b[0]-e.a[0])*r,a=e.a[1]+(e.b[1]-e.a[1])*r,l=s<n?1:-1;t.yaw=Math.atan2((e.b[0]-e.a[0])*l,(e.b[1]-e.a[1])*l),t.pos=[o,a],t.moving=!0}updateCrowd(){var s;const t=((s=this.events)==null?void 0:s.active(this.clock.day,this.clock.sec))??null,e=t!=null&&t.ev.crowd&&t.ev.where?Math.min(8,t.ev.crowd.size):0,n=t?`${t.ev.id}|${t.day}|${t.start}`:"";for(let r=0;r<8;r++){const o=`crowd-${r}`,a=this.agents.get(o);if(r>=e){a&&this.agents.delete(o);continue}if(a&&a.activity===n)continue;const l=this.spotPos(t.ev.where),c=r/e*Math.PI*2+.4,h=t.ev.crowd.radius,u=[l[0]+Math.cos(c)*h,l[1]+Math.sin(c)*h];this.add({id:o,kind:"crowd",cast:"joe",pos:u,speed:0,anim:"idle",place:t.ev.where,tierMin:1,activity:n}),this.agents.get(o).yaw=Math.atan2(l[0]-u[0],l[1]-u[1])}}separate(){const t=[...this.agents.values()].filter(e=>!e.hidden&&(e.moving||e.kind==="crowd")&&this.shown(e)).sort((e,n)=>e.id<n.id?-1:1);for(let e=0;e<3;e++)for(let n=0;n<t.length;n++)for(let s=n+1;s<t.length;s++){const r=t[n],o=t[s],a=o.pos[0]-r.pos[0],l=o.pos[1]-r.pos[1],c=Math.hypot(a,l);if(c>=Nu)continue;const h=c>1e-6?a/c:1,u=c>1e-6?l/c:0,d=(Nu-c)/2;r.pos=[r.pos[0]-h*d,r.pos[1]-u*d],o.pos=[o.pos[0]+h*d,o.pos[1]+u*d]}}shown(t){return!t.hidden&&this.tier>=t.tierMin}tickNeeds(t){const e=this.agents.get("vinnie"),n=e.moving?"walk":e.anim==="sleep"?"sleep":{H:"home",K:"work",C:"cafe",P:"park",Z:"plaza",N:"cinema",M:"market",T:"rummer"}[e.place]??"home",s=this.d.routine.needs.rates[n]??{};for(const r of Object.keys(this.needs))this.needs[r]=Math.min(1,Math.max(0,this.needs[r]+(s[r]??0)*t/3600))}checkReaction(){var s;const t=(s=this.events)==null?void 0:s.active(this.clock.day,this.clock.sec);if(!t)return;const e=`${t.ev.id}|${t.day}`,n=this.agents.get("vinnie");if(!(this.reacted.has(e)||n.moving||!(t.ev.everywhere||n.place===t.ev.where))){this.reacted.add(e),this.reaction=t.ev.reaction;for(const[r,o]of Object.entries(t.ev.effects))this.needs[r]=Math.min(1,Math.max(0,(this.needs[r]??.5)+o))}}scriptGo(t,e,n="idle",s){const r=this.agents.get(t);r&&(this.scripted.add(t),t==="vinnie"&&(this.override=null),r.speed||(r.speed=.93),r.anim=n,r.arriveYaw=s,r.hidden=!1,this.walkTo(r,e),!r.moving&&s!==void 0&&(r.yaw=s))}placeAt(t,e,n,s){const r=this.agents.get(t);r&&(this.scripted.add(t),r.pos=[...e],r.prev=[...e],r.path=null,r.moving=!1,r.anim=n,r.yaw=s)}release(t){this.scripted.delete(t);const e=this.agents.get(t);e&&(e.activity=""),t==="vinnie"&&this.updateRoutine()}dropEvent(t){var n;const e=((n=this.events)==null?void 0:n.drop(t,this.clock.day,this.clock.sec))??null;return this.updateCrowd(),e}mood(){var e;const t=(this.needs.energy+this.needs.social+this.needs.curiosity)/3;return((e=this.d.routine.needs.moods.find(([n])=>t<n))==null?void 0:e[1])??"okay"}setTier(t){this.tier=t,this.updateRoutine()}setTime(t,e=this.clock.day){this.clock.set(t,e),this.updateRoutine();for(const n of this.d.routine.extras??[])this.updateExtra(this.agents.get(n.id),n,!0);this.updateCrowd()}snapshot(t=1){var n,s;const e=[];for(const r of this.agents.values()){if(!this.shown(r))continue;const o=r.id==="vinnie"?this.override:null;e.push({id:r.id,kind:r.kind,cast:r.cast,look:r.look,x:r.prev[0]+(r.pos[0]-r.prev[0])*t,z:r.prev[1]+(r.pos[1]-r.prev[1])*t,yaw:(o==null?void 0:o.yaw)??r.yaw,anim:r.moving?"walk":(o==null?void 0:o.anim)??r.anim,moving:r.moving,place:r.place})}return{day:this.clock.day,sec:this.clock.sec,time:this.clock.hhmm,tier:this.tier,agents:e,event:((n=this.events)==null?void 0:n.active(this.clock.day,this.clock.sec))??null,raining:((s=this.events)==null?void 0:s.raining(this.clock.day,this.clock.sec))??!1}}}const Ou=(i,t)=>i>=Hr[0]&&i<=Hr[2]&&t>=Hr[1]&&t<=Hr[3],dM=i=>1-(1-Math.min(1,Math.max(0,i)))**3;function uM(i,t,e){const n=i.find(s=>s.n===t)??i[0];return n.radius[0]+(n.radius[1]-n.radius[0])*dM(e/n.radiusSeconds)}class fM{constructor(t,e,n){D(this,"km",0);D(this,"dot");D(this,"routeLen",[0]);this.route=t,this.metresPerPx=e,this.mapSize=n,this.dot=[...t[0]];for(let s=1;s<t.length;s++)this.routeLen.push(this.routeLen[s-1]+Math.hypot(t[s][0]-t[s-1][0],t[s][1]-t[s-1][1]))}autoAdd(t){this.km+=t;const e=this.routeLen[this.routeLen.length-1];let n=this.km*1e3/this.metresPerPx%e,s=1;for(;s<this.routeLen.length-1&&this.routeLen[s]<n;)s++;const r=this.route[s-1],o=this.route[s];n-=this.routeLen[s-1];const a=this.routeLen[s]-this.routeLen[s-1]||1;this.dot=[r[0]+(o[0]-r[0])*n/a,r[1]+(o[1]-r[1])*n/a]}move(t,e){const n=Math.min(this.mapSize[0],Math.max(0,this.dot[0]+t)),s=Math.min(this.mapSize[1],Math.max(0,this.dot[1]+e));this.km+=Math.hypot(n-this.dot[0],s-this.dot[1])*this.metresPerPx/1e3,this.dot=[n,s]}addMetres(t){this.autoAdd(t/1e3)}}const qs=Math.PI/180,pM=.55,mM=1.6,Bu=15,Fn=new Set;function gM(){let i,t=0,e=!1;const n=new ga;let s,r,o,a,l,c,h,u,d,p,x=!1,S="Vinnie",m=0,f,y,M,b=1,P=0,v=0,E=!1,g=-10,_=-1,C=-1,A=0,k="vinnie",F,O,L,H=[],B,et,nt=null,ht,pt,At,Kt=!1,yt=0;const wt=[];let j=!1,st=!1,Z,ct,Lt,Dt=null,ft,Ot=null;const ot=new Map,ut=new Um,at={},Et=I=>M.find(q=>q.n===I)??M[0],xt=(I,q,tt=0)=>new N(I,tt,q),Jt=()=>{const I=i.store.data.settings.gfx;return I==="hd"||i.params.gfx==="hd"||I==="auto"&&i.params.gfx!=="16bit"&&_>=0&&t>=_},U=I=>()=>a.headPx(I,l.camera,innerWidth,innerHeight),qt=I=>{b=I,P=t,s.setTier(I);const q=Et(I);I>1&&l.go(Ir.town(xt(q.shot.target[0],q.shot.target[1]),q.shot.dist*Iu[I-1]/zr),2,"town")},Gt={simTime:I=>s.setTime(String(I)),tier:I=>{var q;qt(Number(I)),Number(I)===3&&!((q=i.store.data.progress.met)!=null&&q.mochi)&&s.scriptGo("vinnie",s.spotPos("M","corner"),"idle",45*qs)},camera:(I,q)=>{const tt=q,Q=Et(b);I==="town"&&(l.go(Ir.town(xt(Q.shot.target[0],Q.shot.target[1]),tt.dist[0]),0,"town"),l.dolly(tt.dist[0]*zr,tt.dist[1]*zr,tt.seconds))},vinnie:I=>{I==="standTurn"&&(s.override={anim:"idle",yaw:45*qs,until:"routine"})},caption:I=>{const q=String(I),tt=M.find(Q=>`tier${Q.n}`===q);i.captions.show(i.copy.captions[q]??"",(tt==null?void 0:tt.captionFor)??4)},bubble:(I,q)=>{var Q;const tt=String(I);c.bubble(`${tt}-say`,String(q),U(tt),t,((Q=Et(1).bubble)==null?void 0:Q.hold)??1.1),H.push({id:tt,at:t})},autoWalk:()=>{E=!0},gps:I=>{I==="show"&&!pt.visible&&pt.show(t),I==="shrink"&&pt.shrink(t)},ticker:()=>{var I;return At.start(t,((I=s.events)==null?void 0:I.tickerLines(s.clock.day,s.clock.sec))??[])},routine:()=>{},lore:I=>wt.push(String(I)),rings:I=>{Kt=I==="on"},holdSim:I=>{j=!!I},play:I=>{I==="contact"?(Ot="contact",Z.start()):I==="cafe"&&(Ot="cafe",Lt.wipe(()=>ct.start()))},wipe:()=>{},met:I=>{const q=i.store.data.progress.met??{};q[String(I)]=!0,i.store.data.progress.met=q,i.store.save()},walkTo:(I,q)=>{var Q;const tt=Object.values(((Q=s.landmark(String(q)))==null?void 0:Q.spots)??{});I.forEach((X,J)=>{const bt=tt[J%Math.max(1,tt.length)]??s.spotPos(String(q));s.scriptGo(X,[bt[0],bt[1]],"idle",45*qs)})},continue:()=>{st=!0},next:()=>{},gfx:I=>{I==="hd"&&(_=t)}},Qt=()=>{const I={};for(const q of a.members.values()){const tt=a.headPx(q.id,l.camera,innerWidth,innerHeight,0),Q=q.peepl.root.position,X=!!(tt!=null&&tt[2]);I[q.id]={visible:X&&q.peepl.root.visible&&!mt(q.peepl.root.position),px:q.px,onScreen:X,inside:Ou(Q.x,Q.z)}}return I},mt=I=>{const q=I.clone().setY(I.y+1.3),tt=l.camera.position,Q=q.clone().sub(tt),X=Q.length();ut.set(tt,Q.normalize()),ut.far=X-.3;const J=o.faces.geometry.attributes.aReveal,bt=je.uRadius.value;return ut.intersectObject(o.faces,!1).some(Rt=>Rt.face&&J.getX(Rt.face.a)<=bt-1.4)},fe=I=>{I.type==="keydown"?Fn.add(I.key):Fn.delete(I.key)};return{id:"S8",mount(I,q){var $t;i=I,M=I.data.tiers.tiers;const tt=lr({lowgpu:I.params.lowgpu});tt.shadowMap.enabled=!0,cr(!0);const Q=hh();f=Q.key,d=Q.hemi,S=(($t=I.data.cast.cast.find(rt=>rt.id==="vinnie"))==null?void 0:$t.name)??S,f.shadow.mapSize.setScalar(Qo()?1024:2048),f.shadow.bias=-5e-4,f.shadow.normalBias=.02,n.add(Q.group),u=Yb(),n.add(u.mesh),o=$b(I.data.map),n.add(o.group),a=new Jb(I.data.cast.cast,I.data.cast.bodyTypes,I.params.rig==="groups"),n.add(a.group),a.setOutline(I.store.data.settings.outline!=="none"&&I.params.outline!=="none"),s=new hM({map:I.data.map,routine:I.data.routine,events:I.data.events},I.params.seed);const X=I.data.tiers.walk;r=new fM(X.autoRoute,X.metersPerMapPx,X.card.mapSize);const J=Et(1);l=new jb(Ir.town(xt(J.shot.target[0],J.shot.target[1]),J.shot.dist)),c=new Qb,h=new qb,h.enabled=!Qo(),Qo()&&(a.maxVisible=24),y=new nM(I.data.setpieces.worldScript,Gt);const bt=I.data.map;B=new kb(Pb(bt)),n.add(B.group),B.items.forEach((rt,Pt)=>c.attach(`sign-${rt.def.text}`,rt.tag,()=>{if(!(l.shot==="town"&&rt.mesh.visible&&B.planePx(Pt,l.camera,innerHeight)<40))return null;const dt=rt.def.pos.clone().add(new N(0,rt.def.height*.5+.2,0)).project(l.camera);return[(dt.x+1)/2*innerWidth,(1-dt.y)/2*innerHeight,dt.z<1]},-1,1/0,1)),et=new Fb,n.add(et.mesh);const Rt=bt.props.find(rt=>rt.loop);Rt&&(nt=new Lb(Rt),n.add(nt.group)),ht=new Ib,n.add(ht.group),p=new Nb([4.1,32.1]),n.add(p.group),ft=new hn;const Mt=new wi({color:16777215,gradientMap:Si()}),vt=new wi({color:13619151,gradientMap:Si(),transparent:!0,opacity:.6});for(const rt of[28.78,29.02]){const Pt=new be(new dr(.06,.05,.12,12),Mt);Pt.position.set(rt,.61,22.7),ft.add(Pt);for(let z=0;z<3;z++){const dt=new be(new Un(.035,8,6),vt);dt.position.set(rt,.72+z*.1,22.7),dt.name="steam",ft.add(dt)}}ft.visible=!1,n.add(ft),Lt={get t(){return t},get reduced(){return e},auto:()=>i.store.data.settings.auto&&!i.flow.reduced&&document.documentElement.dataset.keyboard!=="1",hud:c,crowd:a,rig:l,sim:s,root:q,poses:ot,copy:I.copy,anchor:(rt,Pt=.25)=>()=>a.headPx(rt,l.camera,innerWidth,innerHeight,Pt),holdSim:rt=>{j=rt},hideHud:rt=>{for(const Pt of[F.el,pt.el,At.el,O])Pt.style.visibility=rt?"hidden":"";rt&&i.captions.clear()},toast:rt=>i.toast.show(rt,3),wipe:rt=>{Dt=new Xu(e,rt,()=>{Dt=null})},choice:(rt,Pt)=>{at[rt]=Pt},townShot:()=>W("town"),hop:rt=>H.push({id:rt,at:t})},Z=new Eb(Lt,I.data.setpieces.contact),ct=new Ab(Lt,I.data.setpieces.cafe),F=new Tb(I.data.tiers.hud.progressSegments),pt=new Cb(String(I.data.tiers.hud.gpsTitle),X.autoRoute,(rt,Pt)=>{r.move(rt,Pt),g=t}),At=new Rb(I.copy.S8.news),L=V("span",{}),O=dn([L],{size:32,color:"yellow"}),Vt(O,{position:"absolute",right:50,top:50}),O.classList.add("walk-pill"),Pe(O,{right:40,top:190}),Pe(At.el,{top:1010}),Pe(pt.el,{right:"auto",left:28,top:"auto",bottom:58,transformOrigin:"0 100%"});for(const rt of[F.el,pt.el,At.el])rt.classList.add("hud-avoid");q.append(F.el,O,pt.el,At.el),addEventListener("keydown",fe),addEventListener("keyup",fe),Object.assign(Tt,{sim:()=>({day:s.clock.day,time:s.clock.hhmm,speed:i.store.data.settings.speed,tier:b,km:r.km,radius:je.uRadius.value}),setTime:(rt,Pt)=>s.setTime(rt,Pt),tick:rt=>{for(let Pt=0;Pt<rt/Ys;Pt++)s.tick(Ys)},setTier:rt=>qt(rt),walk:rt=>r.autoAdd(rt),moveYou:(rt,Pt)=>r.move(rt,Pt),shot:rt=>{C=t+Bu,W(rt)},follow:rt=>{k=rt},legibility:Qt,projectPx:(rt,Pt,z=0)=>{const dt=xt(rt,Pt,z).project(l.camera);return[(dt.x+1)/2*innerWidth,(1-dt.y)/2*innerHeight]},beat:rt=>y.fire(rt,t),dropEvent:rt=>{var Pt;s.dropEvent(rt),At.start(t,((Pt=s.events)==null?void 0:Pt.tickerLines(s.clock.day,s.clock.sec))??[])},mirror:rt=>Ub(I.data.events.mirror,rt),ticker:()=>At.content,rings:()=>et.mesh.count,setpiece:()=>({contact:Z.active,cafe:ct.active,cafeT:ct.t,line:ct.lineText,facing:ct.facing(),ended:st}),replaySetpiece:()=>(Ot==="cafe"?ct.start():Ot==="contact"&&Z.start(),Ot!==null),banner:()=>{var rt;return((rt=ht.banner)==null?void 0:rt.name)??null},signTags:()=>B.items.filter(rt=>rt.tag.isConnected&&rt.tag.style.visibility!=="hidden").map(rt=>{const Pt=rt.tag.getBoundingClientRect();return{text:rt.def.text,rect:[Pt.left,Pt.top,Pt.right,Pt.bottom]}}),gpsKm:()=>{var rt;return pt.visible?((rt=pt.el.querySelector(".gps-km"))==null?void 0:rt.textContent)??"":""},bubbles:()=>c.texts(),skyTop:()=>`#${u.uniforms.uTop.value.getHexString()}`,dusk:()=>m,lanterns:()=>p.lanterns.visible,pos:rt=>{const Pt=s.agents.get(rt);return Pt?[Pt.pos[0],Pt.pos[1]]:null},bodyPx:rt=>{const Pt=a.headPx(rt,l.camera,innerWidth,innerHeight,0);return Pt?[Pt[0],Pt[1]+a.members.get(rt).px/3]:null}})},enter(){var q;e=i.flow.reduced;const I=In.sub;In.sub=null,i.params.free||i.store.data.progress.freeMode?(qt(4),P=-10,_=0,Kt=!0,pt.show(-1),At.start(-1,((q=s.events)==null?void 0:q.tickerLines(s.clock.day,s.clock.sec))??[])):I?(y.markFired("enter"),I==="contact"?(qt(3),P=-10,y.markFired("tier2","tier3"),s.setTime("17:00"),s.placeAt("vinnie",[23,28.9],"idle",0)):I==="cafe"?(qt(3),P=-10,y.markFired("contact","cafe","tier2","tier3"),Ot="cafe",ct.start()):I==="end"&&(qt(4),P=-10,_=0,y.markFired("tier2","tier3","contact","cafe","tier4"),y.fire("end",0))):y.update(R()),this.update(0,0)},update(I,q){var ye,En,vn,Cs,io;t=q;const tt=i.store.data.settings,Q=tt.speed===.25?1:tt.speed;if(["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].filter(ce=>Fn.has(ce)).length){const ce=i.data.tiers.walk.manualKmPerSecond*1e3/i.data.tiers.walk.metersPerMapPx*I*Math.max(1,Q),Ee=(Fn.has("d")||Fn.has("ArrowRight")?1:0)-(Fn.has("a")||Fn.has("ArrowLeft")?1:0),An=(Fn.has("s")||Fn.has("ArrowDown")?1:0)-(Fn.has("w")||Fn.has("ArrowUp")?1:0);r.move(Ee*ce,An*ce)}else E&&t-g>1.5&&r.autoAdd(i.data.tiers.walk.autoKmPerSecond*I);for(j||(v+=I*Lc*Q);v>=Ys;)s.tick(Ys),v-=Ys;i.params.free||y.update(R()),yt+=I*Q,je.uRadius.value=uM(M,b,t-P);const J=Jt(),bt=J?ae(t,Math.max(_,0),mM,ie.enter):0;document.querySelector("#fx16").style.opacity=String(pM*(1-(J?tt.gfx==="hd"||i.params.gfx==="hd"?1:bt:0)));const Rt=i.params.tod??tt.tod,Mt=sb(s.clock.sec),vt=Rt==="dusk"?1:Rt==="day"?0:Mt.dusk;m+=Math.sign(vt-m)*Math.min(Math.abs(vt-m),I/10),rb(m,Rt==="auto"?Mt.night:0,{key:f,hemi:d,sky:u.uniforms,fog:o.fog.material,glow:je.uGlowColor}),je.uGlow.value=Math.max(J?.3:0,m),h.uniforms.uQuant.value=J?0:1,f.castShadow=J,i.field.glow(J||m>0?.45:.25,m),je.uViewport.value.set(innerWidth*Math.min(devicePixelRatio,2),innerHeight*Math.min(devicePixelRatio,2)),je.uEdgeWidth.value=Math.min(3.5,Math.max(1.5,2.2*Math.max(.6,fa())*Math.min(devicePixelRatio,2)));const $t=s.snapshot(v/Ys);l.update(I,innerWidth/innerHeight,e),u.uniforms.uOpacity.value=l.shot==="town"?0:1;const rt=(ye=a.members.get(k))==null?void 0:ye.peepl.root.position;l.shot!=="town"&&rt&&C<t&&!Z.active&&!ct.active&&l.go({target:rt.clone().setY(1)},.6),Z.update(),ct.update(I),ct.late(),Dt==null||Dt.update(I);for(const ce of $t.agents){const Ee=ot.get(ce.id);Ee&&Object.assign(ce,{x:Ee.x,z:Ee.z,yaw:Ee.yaw,anim:Ee.anim,moving:Ee.anim==="walk"})}ft.visible=ct.cupsOn;for(const ce of ft.children)ce.name==="steam"&&(ce.position.y=.72+(t*.35+ce.id*.13)%.3);const Pt=je.uRadius.value;if(a.update($t.agents,I*Math.min(Math.max(Q,1),4),l.camera,innerHeight,Pt),ct.active)for(const ce of a.members.values()){if(ce.id==="vinnie"||ce.id==="mochi")continue;const Ee=ce.peepl.root.position;Math.hypot(Ee.x-30.3,Ee.z-22.8)<7&&(ce.visible=ce.peepl.root.visible=!1)}B.update(Pt),nt==null||nt.update(yt,Pt);const z=(En=$t.event)!=null&&En.ev.where?s.landmark($t.event.ev.where):void 0,dt=z?s.spotPos(z.key):null,it=(z==null?void 0:z.door)??null;ht.set(((vn=$t.event)==null?void 0:vn.ev)??null,dt?xt(dt[0],dt[1]):null,it?xt(it[0],it[1]):null),ht.update(t,$t.raining&&b>=2,l.current().target),p.update(Pt,((Cs=$t.event)==null?void 0:Cs.ev.visual)==="lanterns");const Nt=Kt&&b>=3?$t.agents.filter(ce=>{var Ee;return ce.cast!=="joe"&&ce.id!=="vinnie"&&((Ee=a.members.get(ce.id))==null?void 0:Ee.visible)}).map(ce=>xt(ce.x,ce.z)):[],gt=a.members.get("vinnie");gt!=null&&gt.visible&&Nt.push(gt.peepl.root.position.clone().setY(0));const lt=!!(gt!=null&&gt.visible)&&gt.px<90&&!Z.active&&!ct.active;for(lt&&!x?c.attach("vinnie-pill",dn([S],{size:28}),()=>a.headPx("vinnie",l.camera,innerWidth,innerHeight,.15),t,1e9,5):!lt&&x&&c.remove("vinnie-pill"),x=lt,et.update(t,Nt),s.reaction&&(c.bubble("vinnie-say",s.reaction,U("vinnie"),t,3),s.reaction=null);wt.length;){const ce=wt[0],Ee=s.landmark(ce),An=i.data.map.buildings.find(fr=>fr.id===(Ee==null?void 0:Ee.building));if(An&&Pt<An.d0+1.4)break;wt.shift(),Ee!=null&&Ee.lore&&c.bubble("vinnie-lore",Ee.lore,U("vinnie"),t,4)}pt.visible&&pt.update(t,r.km,r.dot,String(i.data.tiers.hud.kmFormat),e),At.setLines(((io=s.events)==null?void 0:io.tickerLines(s.clock.day,s.clock.sec))??[]),At.update(t,I,e),H=H.filter(ce=>t-ce.at<.5);for(const ce of H){const Ee=a.members.get(ce.id);Ee&&(Ee.peepl.root.position.y+=nr(t,ce.at,.2,.4)*(e?0:1))}c.update(I,e),f.shadow.camera.left=f.shadow.camera.bottom=-14,f.shadow.camera.right=f.shadow.camera.top=14,f.target.position.set(19,0,19),f.position.set(35,24,41);const Ht=Et(b);F.set(b,Ht.badge,Ht.name,J?i.copy.S8.hd:i.copy.S8.bit,J,t);const ne=document.getElementById("gl");ne.getAttribute("aria-label")!==`${Ht.badge}, ${Ht.name}`&&ne.setAttribute("aria-label",`${Ht.badge}, ${Ht.name}`),F.update(t,e),L.textContent=String(i.data.tiers.hud.walkPillTier1).replace("{km}",r.km.toFixed(1)),O.style.display=b===1&&!pt.visible?"inline-flex":"none",In.rigOk=[...a.members.values()].every(ce=>ce.anim.ok()),In.chars=a.members.size;const ke=[0,0,0];for(const ce of a.members.values())ke[ce.px>180?0:ce.px>60?1:2]++;In.lod=ke,i.loop.drawFrame&&(h.render(lr(),n,l.camera,t),ah())},landed:()=>st,choose:I=>Z.choose(I),onInput(I){var q;if(I.type==="key"&&Z.active&&(I.key==="1"||I.key==="2"))return void Z.choose(Number(I.key)-1);if(I.type==="tap"&&I.x!==void 0&&I.y!==void 0&&b>=3){const tt=w(I.x,I.y);let Q=null;for(const X of a.members.values()){if(!X.visible||X.id==="vinnie"||X.peepl.id==="joe"||X.id.startsWith("joe")||X.id.startsWith("pacer")||X.id.startsWith("crowd"))continue;const J=a.headPx(X.id,l.camera,innerWidth,innerHeight,-.6);if(!J)continue;const bt=Math.hypot(J[0]-tt[0],J[1]-tt[1]);bt<Math.max(60,X.px*.6)&&(!Q||bt<Q.d)&&(Q={id:X.id,d:bt})}if((Q==null?void 0:Q.id)==="mochi"&&!Z.active&&!ct.active&&!((q=i.store.data.progress.met)!=null&&q.mochi)&&at.contact==="notnow"){delete at.contact,Z.start();return}if(Q){k=Q.id;const X=i.data.cast.cast.find(bt=>bt.id===Q.id);X!=null&&X.tagline&&c.bubble(`${Q.id}-tag`,X.tagline,U(Q.id),t,3);const J=Q.id;c.attach("name-pill",dn([(X==null?void 0:X.name)??J],{size:28}),()=>a.headPx(J,l.camera,innerWidth,innerHeight,-.15),t,6,6)}return}I.type==="key"&&(I.key==="t"||I.key==="T")&&(C=t+Bu,A=(A+1)%3,W(["town","venue","close"][A]))},exit(){},unmount(){removeEventListener("keydown",fe),removeEventListener("keyup",fe),Fn.clear();for(const I of Object.keys(Tt))delete Tt[I];a.dispose(),o.faces.geometry.dispose(),o.edges.geometry.dispose(),o.fog.dispose(),h.dispose(),c.clear(),n.clear(),cr(!1),document.querySelector("#fx16").style.opacity="0"},seek(I){t=I}};function R(){return{t,km:r.km,tier:b,simSec:s.clock.sec,distance:(I,q)=>{const tt=s.agents.get(I),Q=s.agents.get(q);return tt&&Q?Math.hypot(tt.pos[0]-Q.pos[0],tt.pos[1]-Q.pos[1]):1/0},choices:at,busy:ct.active}}function w(I,q){return Sp(I,q)}function W(I){const q=a.members.get(k),tt=(q==null?void 0:q.peepl.root.position)??xt(19,19);if(I==="town"){const Q=Et(b);l.go(Ir.town(xt(Q.shot.target[0],Q.shot.target[1]),(Q.shot.distEnd??Q.shot.dist)*Iu[b-1]/zr),.9,"town")}else if(I==="venue"){const Q=Ir.venue(Ou(tt.x,tt.z)?xt(19,19):tt.clone().setY(0));tt.x<8.5&&tt.z>27.5&&(Q.yaw=-75*qs),l.go(Q,.9,"venue")}else l.go({target:tt.clone().setY(1.5*hr*1.7),yaw:45*qs,pitch:10*qs,dist:7.5},.9,"close")}}function xM(i,t,e,n){return V("button",{class:"cast-card","data-id":i,style:"position:absolute;width:262px;height:360px;border-radius:26px;border:6px solid var(--ink);background:var(--white);overflow:hidden;padding:0;pointer-events:auto;display:flex;flex-direction:column;align-items:center;text-align:center"},V("img",{src:no(n),alt:"",draggable:"false",style:"display:block;width:250px;height:250px;border-bottom:6px solid var(--ink);object-fit:cover"}),V("div",{class:"display card-name",style:"font-size:34px;color:var(--ink);margin-top:6px"},t),V("div",{class:"pixel card-tag",style:"font-size:26px;color:var(--lit-card-tagline);text-wrap:balance;padding:0 10px;margin-top:4px"},e))}const fi=ze({left:109,top:200,dx:288,dy:390,cols:6,k:1},{left:102,top:260,dx:300,dy:385,cols:3,k:1.06}),ss={at:.35,stagger:.09,dur:.55},vM=.15,zu={dur:7,to:ze(1.05,1.02)},Wo={w:1100,h:760};function _M(){let i,t=0,e=!1,n,s,r=[],o,a,l,c,h,u,d,p=null,x=!1;const S=new ga,m=new xn(22,1,.1,100);let f=null,y=null,M=[];const b=()=>{p=null,o.style.display="none",s.style.visibility="",f==null||f.dispose(),f=null,cr(!1)},P=(v,E=!1)=>{var A;const g=M.find(k=>k.id===v);if(!g)return;p=v,x=E,l.textContent=g.name,c.textContent=g.tagline??"";const _=(A=i.store.data.progress.met)==null?void 0:A[v];h.style.display=_?"block":"none",u.style.display=x?"inline-flex":"none",u.textContent=v==="vinnie"?"mochi":"vinnie",o.style.display="block",s.style.visibility="hidden",f==null||f.dispose();const C=i.data.cast.cast.find(k=>k.id===v);f=dh(C,i.data.cast.bodyTypes,{lods:[0]}),S.add(f.root),y=new uh(f.rig,f.dims,v),lr(),cr(!0)};return{id:"S11",mount(v,E){i=v;const g=v.copy.S11;M=v.data.cast.cast,d=new Ts(v.captions,v.copy.captions,[{key:"cast1",at:.8,until:3.6},{key:"cast2",at:3.8,until:6.8}]),n=V("div",{class:"display s11-heading",style:"position:absolute;left:0;right:0;top:20px;text-align:center;font-size:92px;color:var(--ink)"},g.heading),r=g.order.map((C,A)=>{const k=M.find(O=>O.id===C),F=xM(C,k.name,k.tagline??"",k.sprite.card);return Vt(F,{left:fi.left+A%fi.cols*fi.dx+131*(fi.k-1),top:fi.top+Math.floor(A/fi.cols)*fi.dy+180*(fi.k-1)}),F.addEventListener("click",O=>{O.stopPropagation(),P(C)}),F}),s=V("div",{class:"s11-grid",style:"position:absolute;inset:0;transform-origin:50% 55%;perspective:1200px"},...r);const _=dn([g.yourPeepls],{size:32,tag:"button"});Vt(_,{position:"absolute",left:50,top:40,pointerEvents:"auto"}),_.classList.add("your-peepls"),_.addEventListener("click",C=>{C.stopPropagation(),P("vinnie",!0)}),l=V("span",{class:"display",style:"font-size:46px;color:var(--ink)"}),c=V("span",{class:"pixel",style:"font-size:30px;color:var(--ink)"}),h=V("div",{class:"pixel met-sticker",style:"position:absolute;right:30px;top:24px;background:var(--yellow);border:4px solid var(--ink);border-radius:10px;padding:4px 14px 6px;font-size:26px;transform:rotate(-8deg);display:none"},g.met),u=dn([""],{size:28,tag:"button"}),u.style.pointerEvents="auto",u.addEventListener("click",C=>{C.stopPropagation(),p&&P(p==="vinnie"?"mochi":"vinnie",!0)}),a=V("div",{class:"sheet-turntable",style:"position:absolute;left:30px;right:30px;top:120px;bottom:30px"}),o=V("div",{class:"cast-sheet",style:`position:absolute;left:${(1920-Wo.w)/2}px;top:${(1080-Wo.h)/2+20}px;width:${Wo.w}px;height:${Wo.h}px;border:6px solid var(--ink);border-radius:26px;display:none;pointer-events:auto`},V("div",{style:"position:absolute;left:0;right:0;top:0;height:110px;background:var(--cream);border-radius:20px 20px 0 0;border-bottom:6px solid var(--ink);display:flex;align-items:center;gap:20px;padding:0 30px"},l,c,dn([g.hasHuman],{size:28}),u),h,a),o.addEventListener("click",C=>C.stopPropagation()),Pe(n,{left:40,right:"auto",top:30,fontSize:60,textAlign:"left"}),Pe(s,{left:0,top:0,width:1080,height:1920}),Pe(_,{left:40,top:78}),Pe(o,{left:40,top:300,width:1e3,height:1300}),E.append(n,s,_,o),S.add(hh().group),Object.assign(Tt,{sheetOpen:()=>p,sheetCentrePx:()=>{const C=a.getBoundingClientRect();return[C.left+C.width/2,C.top+C.height*.55]}})},enter(){e=i.flow.reduced,this.update(0,0)},update(v,E){t=E;const[g,_]=Le(t,vM,.45,e);if(Vt(n,{transform:`scale(${g})`,opacity:String(_)}),r.forEach((C,A)=>{const k=ss.at+A*ss.stagger,[F,O]=Le(t,k,ss.dur,e),L=e?0:90*(1-Math.min(1,ae(t,k,ss.dur,ie.pop))),H=e?0:Math.sin(t*2.4+A*.6)*5;Vt(C,{transform:`translateY(${H}px) rotateY(${L}deg) scale(${(.6+.4*F)*fi.k})`,opacity:String(O)})}),s.style.transform=`scale(${e?1:1+(zu.to-1)*ae(t,0,zu.dur,ie.draw)})`,d.update(t),p&&f&&y&&i.loop.drawFrame){y.update(v),f.root.rotation.y=t*.35;const C=a.getBoundingClientRect(),A=lr(),k=innerHeight-C.bottom;m.aspect=C.width/C.height,m.updateProjectionMatrix(),m.position.set(0,1.6,9),m.lookAt(new N(0,1,0)),A.setScissorTest(!0),A.setScissor(new Se(C.left,k,C.width,C.height)),A.setViewport(new Se(C.left,k,C.width,C.height)),A.setClearColor(16051935,1),A.clear(),A.render(S,m),A.setScissorTest(!1),A.setViewport(0,0,innerWidth,innerHeight),A.setClearColor(0,0),ah()}},landed:()=>t>=ss.at+11*ss.stagger+ss.dur,pillTop:!0,onInput(v){if(p){if(v.type==="key"&&v.key==="Escape")b();else if(v.type==="tap"&&v.x!==void 0&&v.y!==void 0){const E=o.getBoundingClientRect(),[g,_]=Xr(E.left,E.top),[C,A]=Xr(E.right,E.bottom);v.x>=g&&v.x<=C&&v.y>=_&&v.y<=A||b()}}},exit(){p&&b()},unmount(){p&&b(),delete Tt.sheetOpen,delete Tt.sheetCentrePx,S.clear()},seek(v){this.update(0,v)}}}const rs={pitch:124,feet:1070,h:320,hero:330,at:.1,stagger:.05,rise:440},yM=.5,bM=[1.5,.4],Xo=[2.1,.5],Rl=[2.7,.4],Pl=[3.4,4.3];function MM(){let i,t=0,e=!1,n=[],s,r,o,a=[];const l=()=>{const h=i.store.data.settings;i.store.reset(),i.store.data.settings=h,i.store.save(),i.flow.go("S0")},c=()=>{i.store.data.progress.freeMode=!0,i.store.save(),i.flow.go("S8")};return{id:"S12",mount(h,u){i=h;const d=h.copy.S12;n=[...d.wordmark].map(f=>V("span",{class:"display",style:`display:inline-block;font-size:${ze(220,160)}px;line-height:0.9;color:var(--yellow);-webkit-text-stroke:7px var(--ink);paint-order:stroke fill;text-shadow:0 11px 0 var(--ink)`},f));const p=V("div",{id:"s12-wordmark",style:"position:absolute;left:0;right:0;top:90px;display:flex;justify-content:center;gap:2px"},...n);s=V("div",{class:"pixel s12-tagline",style:"position:absolute;left:0;right:0;top:360px;text-align:center;font-size:66px;color:var(--ink)"},d.tagline),r=V("button",{class:"display s12-cta",style:"position:absolute;left:50%;top:460px;display:inline-flex;align-items:center;gap:18px;background:var(--yellow);border:8px solid var(--ink);border-radius:999px;padding:22px 56px 26px;font-size:62px;color:var(--ink);white-space:nowrap;pointer-events:auto"},V("span",{},d.cta),xs("arrow",56,"var(--ink)")),r.addEventListener("click",f=>{f.stopPropagation(),c()}),o=V("div",{class:"pixel s12-sub",style:"position:absolute;left:0;right:0;top:628px;text-align:center;font-size:44px;color:var(--ink)"},d.sub);const x=dn([xs("play",20,"var(--white)"),d.replay],{size:28,tag:"button"});Vt(x,{position:"absolute",right:50,top:40,pointerEvents:"auto"}),x.classList.add("s12-replay"),x.addEventListener("click",f=>{f.stopPropagation(),l()});const S=h.data.cast.cast,m=Sn?8:d.lineup.length;a=d.lineup.map((f,y)=>{const M=S.find(C=>C.id===f).sprite,b=f==="vinnie"||f==="mochi"?rs.hero:rs.h,P=Math.floor(y/m),v=y%m,E=Math.min(m,d.lineup.length-P*m),g=(Sn?540:960)+(v-(E-1)/2)*rs.pitch,_=new wa(M,{class:"sprite lineup","data-id":f}).place(g,Sn?1500+P*380:rs.feet,b);return Pe(_.el,{}),_}),Pe(p,{top:200}),Pe(s,{top:470,fontSize:54}),Pe(r,{top:590}),Pe(o,{top:790}),Pe(x,{right:22,top:22}),u.append(...a.map(f=>f.el),p,s,r,o,x)},enter(){e=i.flow.reduced,this.update(0,0)},update(h,u){t=u,a.forEach((S,m)=>{const f=rs.at+m*rs.stagger,y=e?0:rs.rise*(1-ae(t,f,.5,ie.pop)),M=e?0:nr(t,Pl[0]+m/a.length*(Pl[1]-Pl[0]-.4),22,.4);S.pose({t,phase:m*.7,hop:M-y,opacity:e?ae(t,f,.2,ie.enter):1})}),n.forEach((S,m)=>{const f=yM+m*.08,[y,M]=Le(t,f,.5,e),b=e?0:-18+18*ae(t,f,.5,ie.pop),P=e?0:Math.sin(t*3+m*.7)*6;Vt(S,{transform:`translateY(${P}px) rotate(${b}deg) scale(${y})`,opacity:String(M)})});for(const[S,[m,f]]of[[s,bM],[o,Rl]]){const[y,M]=Le(t,m,f,e);Vt(S,{transform:`scale(${y})`,opacity:String(M)})}const[d,p]=Le(t,Xo[0],Xo[1],e),x=e||t<Xo[0]+Xo[1]?1:1+.03*Math.sin(t*5);Vt(r,{transform:`translateX(-50%) scale(${d*x})`,opacity:String(p)})},landed:()=>t>=Rl[0]+Rl[1],onInput(h){h.type==="key"&&(h.key==="r"||h.key==="R")&&l()},exit(){},unmount(){},seek(h){this.update(0,h)}}}const kl={S0:u1,S1:M1,S2:S1,S3:R1,S4:Z1,S5:K1,S6:tb,S7:ib,S8:gM,S11:_M,S12:MM,S99:bb},wM=i=>{var t;return((t=kl[i])==null?void 0:t.call(kl))??n1(i)},SM=1,EM={U:"head height",worldPerU:.58},AM={thin:{head:.96,h:1.04,T:.88,A:.8,hem:.75,belly:.85,legs:1.1},average:{head:1,h:1,T:1,A:1,hem:1,belly:1,legs:1},stocky:{head:1.14,h:.99,T:1.7,A:1.35,hem:1.6,belly:1.3,legs:.85},xl:{head:1.25,h:1.2,T:2,A:1.5,hem:1.85,belly:1.5,legs:1}},TM=[{id:"flare",num:"00",name:"Flare",tagline:"thinks out loud",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#7A7A7A",hands:"#7A7A7A",face:{eyes:"none",mouth:"none"},top:{type:"hoodie",color:"#5E5E5E",collar:"none"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hood",color:"#5E5E5E"},{part:"face.flame",color:"#FF5AD9",color2:"#FFE100"}],sprite:{body:"assets/cast/body-00.png",card:"assets/cast/card-00.jpg",footX:.37,aspect:.4625}},{id:"vinnie",num:"01",name:"Vinnie",tagline:"wears a mask. means well.",hasHuman:!0,role:"lead",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"mask",mouth:"teeth"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"mask.vinnie",color:"#FF5AD9",color2:"#E04DC0",params:{nose:"bar",doodle:!1}},{part:"mask.strap",color:"#6B6B6B"},{part:"collar.vneck-tie"}],sprite:{body:"assets/hero/vinnie.png",card:"assets/cast/card-01.jpg",footX:.5,aspect:.4519},flags:{occultMarks:!0}},{id:"hexi",num:"02",name:"Hexi",tagline:"sweet, mostly",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#FF9FE8",face:{eyes:"dots2",mouth:"fangs-tongue"},top:{type:"offshoulder",color:"#1C1C1C"},pants:{type:"straight",color:"#6A3FA8"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.long",color:"#FF7ADB"},{part:"horns",color:"#E04DC0"},{part:"choker",color:"#111111"}],sprite:{body:"assets/cast/body-02.png",card:"assets/cast/card-02.jpg",footX:.5,aspect:.3203}},{id:"joe",num:"03",name:"Joe",tagline:null,hasHuman:!1,role:"blank",body:"average",headScale:1,skin:"#FFFFFF",face:{eyes:"dots3",mouth:"dot"},top:{type:"body",color:"#FFFFFF"},pants:{type:"straight",color:"#FFFFFF"},shoes:{type:"sneaker",color:"#FFFFFF"},attach:[],sprite:{body:"assets/hero/joe.png",card:"assets/cast/card-03.jpg",footX:.5,aspect:.3903}},{id:"rudy",num:"04",name:"Rudy",tagline:"no map, no plan",hasHuman:!0,role:"neighbour",body:"stocky",headScale:1,skin:"#FF9FE8",face:{eyes:"dots2",mouth:"teeth"},top:{type:"hawaiian",color:"#5E5E5E",color2:"#FFE100",pattern:"hibiscus",collar:"vneck"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hat.bucket",color:"#FFFFFF"},{part:"glasses.aviator",color:"#FF9E3A"}],sprite:{body:"assets/cast/body-04.png",card:"assets/cast/card-04.jpg",footX:.44,aspect:.3688}},{id:"mochi",num:"05",name:"Mochi",tagline:null,hasHuman:!0,role:"friend",body:"average",headScale:1,skin:"#FF9FE8",face:{eyes:"closed",mouth:"smile"},top:{type:"turtleneck",color:"#00B4EE"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.cap",color:"#7B2CBF"},{part:"hair.bun",color:"#7B2CBF"},{part:"hair.chopsticks",color:"#FFE100"},{part:"ears.cat",color:"#00B4EE",color2:"#FF5AD9"},{part:"whiskers"},{part:"collar.turtleneck",color:"#00B4EE"},{part:"tail.spring",color:"#00B4EE",color2:"#FFE100"}],sprite:{body:"assets/hero/mochi.png",card:"assets/cast/card-05.jpg",footX:.5,aspect:.4915}},{id:"nimbus",num:"06",name:"Nimbus",tagline:"head in the clouds",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"x",mouth:"teeth"},top:{type:"cardigan",color:"#3FB4EA",pattern:"clouds",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.swoop",color:"#1C1C1C"}],sprite:{body:"assets/cast/body-06.png",card:"assets/cast/card-06.jpg",footX:.5,aspect:.3328}},{id:"spike",num:"07",name:"Spike",tagline:"punk. knits.",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#86D4EE",face:{eyes:"x",mouth:"zigzag"},top:{type:"varsity",color:"#FF7ADB",color2:"#FFE66B"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FFE100"},attach:[{part:"hair.mohawk",color:"#FF5AD9"}],sprite:{body:"assets/cast/body-07.png",card:"assets/cast/card-07.jpg",footX:.5,aspect:.3078}},{id:"taro",num:"08",name:"Taro",tagline:"ramen critic",hasHuman:!0,role:"neighbour",body:"stocky",headScale:1,skin:"#FF9FE8",face:{eyes:"closed",mouth:"flat"},top:{type:"flannel",color:"#FF4F2E",color2:"#8C2A1E",pattern:"plaid",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#F6F0DC"},attach:[{part:"hair.cap",color:"#1C1C1C"},{part:"hair.bun",color:"#1C1C1C"},{part:"hair.chopsticks",color:"#FFE100"},{part:"mustache",color:"#1C1C1C"},{part:"earring.pin",side:"L"}],sprite:{body:"assets/cast/body-08.png",card:"assets/cast/card-08.jpg",footX:.5,aspect:.2953}},{id:"pip",num:"09",name:"Pip",tagline:"amazed by everything",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#FF9FE8",face:{eyes:"wide",mouth:"o"},top:{type:"cardigan",color:"#FF7ADB",pattern:"hearts",collar:"tee"},pants:{type:"jeans",color:"#3E6FC4"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.cap",color:"#1C1C1C"},{part:"hair.pigtails",color:"#1C1C1C"}],sprite:{body:"assets/cast/body-09.png",card:"assets/cast/card-09.jpg",footX:.5,aspect:.3359}},{id:"dex",num:"10",name:"Dex",tagline:"desk job, dj nights",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#FFE66B",face:{eyes:"none",mouth:"flat"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.swoop",color:"#7B35C4"},{part:"glasses.shades",color:"#111111"},{part:"collar.vneck-tie"},{part:"headphones",color:"#2C2C2C",params:{cup:"#0AB8EE",mode:"neck"}}],sprite:{body:"assets/cast/body-10.png",card:"assets/cast/card-10.jpg",footX:.5,aspect:.3328}},{id:"kit",num:"11",name:"Kit",tagline:"pirate radio host",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"dots2",mouth:"teeth"},top:{type:"flannel",color:"#FF4F2E",color2:"#8C2A1E",pattern:"plaid",collar:"tee"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"sneaker",color:"#FF7ADB"},attach:[{part:"hair.cap",color:"#FF7ADB"},{part:"hair.buns2",color:"#FF7ADB"},{part:"eyepatch",color:"#111111"}],sprite:{body:"assets/cast/body-11.png",card:"assets/cast/card-11.jpg",footX:.5,aspect:.3094}},{id:"cosmo",num:"12",name:"Cosmo",tagline:"waves at the moon",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#3B2A86",skinPattern:"stars",hands:"#3B2A86",face:{eyes:"none",mouth:"tongue"},top:{type:"cardigan",color:"#FF7ADB",pattern:"hearts",collar:"tee"},pants:{type:"wide",color:"#F6F0DC"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.flattop",color:"#3FB4EA"},{part:"glasses.shades",color:"#111111"},{part:"earring.pin",side:"L"}],sprite:{body:"assets/cast/body-12.png",card:"assets/cast/card-12.jpg",footX:.5,aspect:.3156}},{id:"juno",num:"13",name:"Juno",tagline:"zero filter",hasHuman:!0,role:"neighbour",body:"thin",headScale:1,skin:"#FFE66B",face:{eyes:"happy",mouth:"tongue"},top:{type:"polo",color:"#FFE66B"},pants:{type:"straight",color:"#6A3FA8"},shoes:{type:"sneaker",color:"#FDFCF8"},attach:[{part:"hair.bob",color:"#7B35C4"}],sprite:{body:"assets/cast/body-13.png",card:"assets/cast/card-13.jpg",footX:.5,aspect:.3234}},{id:"vega",num:"14",name:"Vega",tagline:"sort of psychic",hasHuman:!0,role:"neighbour",body:"average",headScale:1,skin:"#86D4EE",face:{eyes:"none",mouth:"flat"},top:{type:"cardigan",color:"#FF4F2E",collar:"vneck-tie"},pants:{type:"straight",color:"#2C2C2C"},shoes:{type:"leather",color:"#1C1C1C"},attach:[{part:"hair.flattop",color:"#1C1C1C"},{part:"visor.cyber",color:"#FF4A2A",color2:"#FFE100"},{part:"collar.vneck-tie"},{part:"earring.hoop",side:"L",color:"#FFE100"}],sprite:{body:"assets/cast/body-14.png",card:"assets/cast/card-14.jpg",footX:.5,aspect:.3328}}],CM={id:"joe-extra",inherits:"joe",props:["prop.cup","prop.umbrella","prop.briefcase","prop.bag","headphones","prop.balloon","prop.flowers","prop.dog"]},RM={aspect:"sprite aspect = width / height of the PNG (joe 425/1089, vinnie 366/810, mochi 406/826; 12 bodies from peepls-campaign.jsx CAST.ar)",contentFlags:"no cigarettes (D-20). vinnie: mask nose rendered as a bar and doodle off in 3D; the 2D PNGs still show the cigarette/holder until re-exported."},PM={version:SM,units:EM,bodyTypes:AM,cast:TM,extrasBase:CM,notes:RM},kM=1,FM={crowd1:"right now, a whole world is going about its day.",crowd2:"day jobs. first dates. bad coffee. big plans.",profile:"tell us a little about you.",finding:"we look for a peepl who clicks with you.",reveal:"then someone steps out of the crowd.",room1:"no food bowls. no guilt trips.",room2:"just two friends getting to know each other.",ship:"once he trusts you, he ships himself over.",tap:"tap him, and he lets you in.",tier1:"at first, he only lets you see his place.",tier2:"get closer, and he shows you more.",tier3:"spot someone in colour? they've got a human too.",tier4:"walk your world, and his world opens up.",cast1:"punks, pirates, cat people, dreamers.",cast2:"somewhere out there is your kind of weird.",yourTurn:"your turn. pick a reply.",walkHint:"drag the map to walk. or just watch."},LM={tags:[["late. again.",.6],["on repeat",1.5],["walking biscuit",2.3],["might rain later",3.2],["first date!!",4],["forgot the milk",4.6],["big meeting at 10",5.2],["it's my birthday",5.8]],wordmark:"PEEPLS",line1:"they've got lives.",line2:"they just haven't met you yet.",subline:"the peepls show",continue:"tap to start"},IM={clock:"9:41",heading:"who are you?",sub:"pick a few. we'll do the rest.",chips:[["night owl","pink"],["long walks","yellow"],["bad puns","cyan"],["loud music","pink"],["dogs","yellow"],["early bird","cyan"]],sliderLeft:"quiet",sliderRight:"loud",button:"find my peepl"},DM={finding:"finding your peepl"},NM={name:"meet vinnie.",pill:"wears a mask. means well.",continue:"say hi"},UM={trust:"TRUST",speakerVinnie:"VINNIE",speakerYou:"YOU",nextDay:"the next day."},OM={door:"7",mat:"hi",boxLabel:"PEEPLS",boxSub:"handle with love",nfc:"NFC"},BM={waitPill:"tap the keychain",realNfc:"use real nfc",handshake:"PEEPL HANDSHAKE",notifTitle:"PEEPLS",notifBody:"vinnie is home."},zM={walkTitle:"your walk today",news:"news",hd:"HD",bit:"16-BIT",cafePill:"corner café",herePill:"2 peepls here",contactYes:"say hi",contactNo:"not now",contactNotNow:"fair. she'll be around.",friendTitle:"NEW FRIEND!",friendLine:"vinnie + mochi · friendship lv.1",mochiAdded:"mochi added to your neighbours",continueEnd:"meet the neighbours"},HM={heading:"meet the neighbours.",order:["flare","hexi","rudy","nimbus","spike","taro","pip","dex","kit","cosmo","juno","vega"],yourPeepls:"+ your peepls",hasHuman:"has a human",met:"met"},VM={wordmark:"PEEPLS",tagline:"friends with lives of their own.",cta:"keep watching",sub:"app · nfc keychain · desk pal",replay:"replay",lineup:["joe","hexi","nimbus","spike","taro","pip","dex","vinnie","mochi","kit","cosmo","juno","vega","rudy","flare"]},GM={resetAsk:"sure? everything goes."},WM={continue:"tap to continue",pause:"pause",autoOff:"auto off",resume:"resume"},XM={version:kM,captions:FM,S0:LM,S1:IM,S2:DM,S3:NM,S4:UM,S6:OM,S7:BM,S8:zM,S11:HM,S12:VM,debug:GM,ui:WM},$M=1,YM={start:8,max:100,closeMin:70,display:"percent"},qM={VINNIE:{chip:"#FF4A2A"},YOU:{chip:"#0AB8EE"}},jM={maxDays:3,nextDayCard:"the next day.",forcedOnDay:3},ZM=["rain","memory","notyet"],KM=[{id:"cantsleep",days:[1],line:[{who:"VINNIE",text:"so. what do you do when you can't sleep?",hop:34}],choices:[{label:"walk. sometimes till sunrise.",trust:28,set:{sleep:"walk"},reply:[{who:"VINNIE",text:"huh. same. i count streetlights.",hop:34}]},{label:"read till my eyes give up.",trust:18,set:{sleep:"read"},reply:[{who:"VINNIE",text:"huh. i count streetlights. same idea, more walking."}]},{label:"why do you care?",trust:-6,reply:[{who:"VINNIE",text:"i was making conversation. it's allowed."}]}],autoPick:0},{id:"kiosk",days:[1],line:[{who:"VINNIE",text:"i have a shift tomorrow. at the kiosk, in spiegelfurt. it's a town. you'd recognise parts of it.",hop:34}],choices:[{label:"what's the kiosk like?",trust:8,reply:[{who:"VINNIE",text:"a window with snacks behind it. i'm the part that says good morning."}]},{label:"do you like the job?",trust:8,reply:[{who:"VINNIE",text:"i like the first hour. after that it's mostly change for a fifty."}]},{label:"what can you do for me?",trust:-8,reply:[{who:"VINNIE",text:"very little. i sell newspapers to other people."}]}],autoPick:1},{id:"rain",days:[1,2],line:[{who:"VINNIE",text:"my turn. what do you do when it rains?",hop:34}],lineAgain:[{who:"VINNIE",text:"you again. good. same question as yesterday. what do you do when it rains?",hop:34}],choices:[{label:"make tea.",trust:8,set:{rain:"tea"},reply:[{who:"VINNIE",text:"tea. sensible. i'll think of that when it rains here."}]},{label:"walk anyway.",trust:8,set:{rain:"walk"},reply:[{who:"VINNIE",text:"walk anyway. stubborn. i can work with stubborn."}]},{label:"put music on.",trust:8,set:{rain:"music"},reply:[{who:"VINNIE",text:"music. so the rain has competition. fair."}]},{label:"why do you care?",trust:-8,reply:[{who:"VINNIE",text:"i was making conversation. it's allowed."}]}],autoPick:1},{id:"boundary",days:[1,2],line:[{who:"VINNIE",text:"one thing before this goes further. i won't be told what to do. i'll listen. i might agree. but i decide.",hop:34}],lineAgain:[{who:"VINNIE",text:"same condition as yesterday. i listen. i might agree. i decide.",hop:34}],choices:[{label:"that's fair.",trust:10,reply:[{who:"VINNIE",text:"good. that was the difficult part."}]},{label:"not even 'pass the salt'?",trust:4,reply:[{who:"VINNIE",text:"salt i'll consider. case by case."}]},{label:"we'll see about that.",trust:-10,reply:[{who:"VINNIE",text:"we will. i have more time than you do."}]}],autoPick:0},{id:"notyet",days:[1],line:[{who:"VINNIE",text:"your turn to have a rule. what's the worst thing you did this week?",hop:34}],choices:[{label:"i'd rather not talk about that yet.",trust:12,set:{notyet:"boundary"},reply:[{who:"VINNIE",text:"that's fine. another time."},{who:"VINNIE",text:"thanks. i like that."}]},{label:"ate cereal for dinner. twice.",trust:8,set:{notyet:"cereal"},reply:[{who:"VINNIE",text:"twice is a system. respect."}]},{label:"you first.",trust:0,reply:[{who:"VINNIE",text:"i gave a man change for a fifty. he gave me a twenty. we both pretended."}]}],autoPick:0},{id:"memory",days:[1,2],line:[{who:"VINNIE",text:"give me one thing to remember about you. one. shelf space is limited.",hop:34}],lineAgain:[{who:"VINNIE",text:"i still have what you told me yesterday. say it again, or swap it. shelf space is limited.",hop:34}],choices:[{label:"i walk a lot.",trust:6,set:{memory:"walks"},reply:[{who:"VINNIE",text:"good. this town needs walking. you'll see why."}],preferIfProfile:"long walks"},{label:"i work late.",trust:6,set:{memory:"late"},reply:[{who:"VINNIE",text:"late. then i'll leave a light on. on my side. it's my electricity."}],preferIfProfile:"night owl"},{label:"i don't like mondays.",trust:6,set:{memory:"mondays"},reply:[{who:"VINNIE",text:"nobody does. we tried skipping one here. it came back."}]}],autoPick:0}],JM={pass:[{who:"VINNIE",text:"ok. i think i like you.",hop:60}],fail:[{who:"VINNIE",text:"not yet. come back tomorrow."}],forced:[{who:"VINNIE",text:"fine. i'll take the risk. don't make me regret it.",hop:34}],toast:"✓ vinnie trusts you"},QM={ask:[{who:"VINNIE",text:"so. i could come over. properly.",hop:34},{who:"VINNIE",text:"it means a body. small. on a keyring. you'd have to carry me."}],askAgain:[{who:"VINNIE",text:"it's still a yes from me. you?",hop:34}],choices:[{label:"yes. come over.",trust:0,set:{consent:"yes"},reply:[{who:"VINNIE",text:"then i'll pack. it won't take long. i don't own much.",hop:60}]},{label:"not yet.",trust:0,set:{consent:"notyet"},reply:[{who:"VINNIE",text:"fair. ask me again tomorrow."}]}],forced:[{who:"VINNIE",text:"fine. i'll take the risk. don't make me regret it.",hop:34}],autoPick:0,confirmToast:"✓ vinnie is releasing his body"},tw={campaign:["cantsleep line","walk. sometimes till sunrise.","huh. same. i count streetlights.","ok. i think i like you.","✓ vinnie trusts you"],v01:["kiosk","rain","boundary","memory","not yet. come back tomorrow.","fine. i'll take the risk. don't make me regret it."],technicalBriefing:["i'd rather not talk about that yet.","that's fine. another time.","thanks. i like that."],new:["read till my eyes give up.","huh. i count streetlights. same idea, more walking.","notyet beat line","ate cereal for dinner. twice.","twice is a system. respect.","you first.","i gave a man change for a fifty...","consent lines"]},ew={autoplayPath:"8 +28 (36) +8 (44) +8 (52) +10 (62) +12 (74) +6 (80) >= closeMin 70 -> close fills to 100",campaignBarBeats:"after cantsleep reply the bar reads 36% exactly as the video (8 -> 36)"},nw={version:$M,trust:YM,speakers:qM,days:jM,memoryKeys:ZM,beats:KM,close:JM,consent:QM,sources:tw,trustPathCheck:ew},iw=1,sw="festival",rw="event",ow="see map.json landmarks[].key",aw=["the main continues to flow the other way","kiosk-konzern shares close unchanged at one pretzel","lost: one umbrella, hauptwaage. found: a different umbrella","all three trams on time, which is news","kleinstmarkthalle reports stable cheese"],lw={sun:"weather: sun, with a chance of opinions",rain:"weather: rain, as scheduled"},cw=3,hw=[{id:"pigeon",headline:"pigeon elected honorary citizen",ticker:"pigeon elected honorary citizen. acceptance speech brief, mostly about bread",where:"P",startHour:9,durationHours:9,visual:"pigeons",lunch:"P",effects:{social:.05,curiosity:.15,energy:0},reaction:"the honorary citizen is the grey one. they are all the grey one.",diaryLine:"a pigeon was made honorary citizen. it attended the ceremony, then a sandwich."},{id:"festival",headline:"festival of the not-quite-full moon",ticker:"tonight: festival of the not-quite-full moon. moon confirmed at ninety-four percent",where:"Z",startHour:18,durationHours:6,visual:"lanterns",covers:"evening",evening:"Z",crowd:{size:8,radius:2.6},effects:{social:.3,curiosity:.1,energy:-.05},reaction:"ninety-four percent of a moon. we celebrate what we have.",diaryLine:"festival of the not-quite-full moon {at}. lanterns. somebody sang. the moon did its ninety-four percent."},{id:"tram-strike",headline:"tram strike: all three trams stand still",ticker:"tram strike. all three trams stand still. passengers asked to stand still in solidarity",where:"S",startHour:5,durationHours:19,visual:"banner",banner:"STREIK",commute:"detour",trams:"stop",commuteVia:"S",crowd:{size:4,radius:1.5},effects:{social:.05,curiosity:0,energy:-.15},reaction:"all three trams are on strike. solidarity is easier when there are three of you.",diaryLine:"tram strike. all three. i walked the long way and was late. nobody noticed, which was worse."},{id:"mustard",headline:"kiosk-konzern chief steps down after mustard scandal",ticker:'kiosk-konzern chief steps down after mustard scandal. "it was never medium," says insider',where:"T",startHour:10,durationHours:5,visual:"crowd",covers:"lunch",lunch:"K",crowd:{size:6,radius:2},effects:{social:.15,curiosity:.1,energy:-.05},reaction:"the chief resigned. everyone wants a paper. nobody wants mustard.",diaryLine:"the kiosk-konzern chief stepped down over mustard. we sold out of papers by noon. i ate standing up."},{id:"premiere",headline:'premiere at kino harmonie: "pretzel logic"',ticker:'premiere at kino harmonie: "pretzel logic". critics call it "twisted, salted, long"',where:"N",startHour:17,durationHours:5,visual:"crowd",covers:"evening",evening:"N",crowd:{size:6,radius:2},effects:{social:.1,curiosity:.3,energy:-.05},reaction:'"pretzel logic". two hours. it does not untangle.',diaryLine:'saw "pretzel logic" {at}. the plot is a knot. they sell salt in the interval.'},{id:"cheese",headline:"cheese shortage closes the kleinstmarkthalle",ticker:"cheese shortage closes the kleinstmarkthalle. all three stalls affected. all three stalls are cheese",where:"M",startHour:9,durationHours:12,visual:"closedTape",covers:"evening",evening:"M",closes:"M",crowd:{size:3,radius:1.5},effects:{social:-.05,curiosity:-.05,energy:0},reaction:"no cheese. three stalls, nothing on them. it is very tidy.",heard:"no cheese at the kleinstmarkthalle. customers are taking it calmly. too calmly.",diaryLine:"the kleinstmarkthalle was closed. cheese shortage. the tape was the freshest thing there."},{id:"heatwave",headline:"heatwave: 31 degrees in the mirror, 30 in the original",ticker:"heatwave. 31 degrees in the mirror, 30 in the original. officials decline to explain the degree",where:"P",startHour:11,durationHours:7,visual:"crowd",weather:"sun",covers:"lunch",lunch:"P",crowd:{size:6,radius:3},effects:{social:.1,curiosity:0,energy:-.1},reaction:"thirty-one degrees. one more than you have. we checked.",diaryLine:"heatwave. thirty-one here, thirty over there. lunch {at} with everyone else who had the same idea."},{id:"roundabout",headline:"rummer announces a roundabout where no road is",ticker:"rummer announces a roundabout where no road is. construction to begin once a road is found",where:"Z",startHour:14,durationHours:6,visual:"crowd",covers:"evening",evening:"Z",crowd:{size:7,radius:2.4},effects:{social:.1,curiosity:.2,energy:0},reaction:"a roundabout. there is no road. people are queueing to go around.",heard:"they announced a roundabout. there is no road. i will go and look after work.",diaryLine:"the rummer announced a roundabout where there is no road. a crowd came to look at where it would be. i looked too."},{id:"rate",headline:"the türmchen raises the rate on sleep by 0.25",ticker:"the türmchen raises the rate on sleep by 0.25. markets yawn. so does everyone else",where:"E",startHour:13,durationHours:9,visual:"none",everywhere:!0,effects:{social:0,curiosity:.05,energy:-.2},reaction:"sleep went up a quarter point. i do not know what that means. i am tired anyway.",diaryLine:"the türmchen raised the rate on sleep by 0.25. nobody understands it. everyone yawned on principle."},{id:"referendum",headline:"referendum: should the main flow the right way",ticker:"referendum today: should the main flow the right way. the river has not been asked",where:"T",startHour:8,durationHours:13,visual:"banner",banner:"JA NEIN",covers:"evening",evening:"T",crowd:{size:5,radius:2},effects:{social:.1,curiosity:.15,energy:0},reaction:"voted. i will not say which way. the river knows.",heard:"referendum today. about the river. i have a pencil ready.",diaryLine:"referendum on which way the main should flow. i voted {at} in the evening. the river was not consulted."},{id:"rain",headline:"rain predicted; rain arrives",ticker:'rain predicted. rain arrives. forecast office "cautiously surprised"',where:null,startHour:11,durationHours:13,visual:"none",weather:"rain",everywhere:!0,effects:{social:0,curiosity:0,energy:-.05},reaction:"rain was predicted. then it rained. the forecast office is celebrating.",diaryLine:"rain was predicted and then it rained. people were surprised by the accuracy."},{id:"facts",headline:"satirical paper runs out of satire, prints facts by mistake",ticker:'satirical paper "die halbwahrheit" runs out of satire, prints facts by mistake. readers demand refunds',where:null,startHour:7,durationHours:11,visual:"none",atWork:!0,crowd:{size:3,radius:1.2},effects:{social:.05,curiosity:.1,energy:0},reaction:"the satire paper printed facts today. three customers brought it back.",diaryLine:'"die halbwahrheit" ran out of satire and printed facts by mistake. i sold eleven copies. three came back.'}],dw={lexicon:{"central bank":"the türmchen","interest rates":"the rate on sleep","stock market":"the kleinstmarkthalle","city council":"the rummer","prime minister":"the kiosk-konzern chief",election:"referendum",elections:"referendums",strike:"tram strike",train:"tram",trains:"trams",oil:"mustard",inflation:"cheese inflation",economy:"cheese economy",summit:"festival",frankfurt:"spiegelfurt",main:"the main",germany:"parallel germany",hesse:"parallel hesse",europe:"mirror europe",government:"the rummer",parliament:"the rummer",council:"the rummer",bank:"the türmchen",president:"the kiosk-konzern chief",chancellor:"the kiosk-konzern chief",ceo:"the kiosk-konzern chief",minister:"the deputy for mild concern",mayor:"the rummer speaker",police:"the tram authority"},pool:["the kiosk-konzern","the rummer","the türmchen","parallel hesse","the kleinstmarkthalle","the honorary pigeon","the office for approximate numbers","the tram authority","café halbe stunde","the ministry of mild concern"],keep:["the","a","an","in","on","at","after","before","why","how","what","when","new","no","and","of","for","to","as","is","are","with","from","by","it","this","that"],twists:["nobody is surprised.","a committee will look into forming a committee.","the main continues to flow the other way.","cheese prices are unaffected.","the pigeon declined to comment.","experts recommend waiting.","in the original it was the other way round."],reaction:"they are reading it out at the hauptwaage. it sounds better here.",diaryLine:'headline of the day: "{headline}" i did not check it.'},uw="ported from v0.1 DATA.events (12) and DATA.mirror; lowercased; Mika -> vinnie; where = landmark key (P park, Z hauptwaage, S tram stop, T rummer, N kino, M kleinstmarkthalle/MART, E tuermchen, K kiosk, C cafe); banner text stays uppercase because it renders as a sign",fw={version:iw,forcedDay1:sw,seedKey:rw,landmarkIds:ow,tickerFiller:aw,weatherLine:lw,rainEvery:cw,events:hw,mirror:dw,notes:uw},pw=1,mw={world:"campaign iso unit",size:[40,40],axes:"three X = x, three Z = y, three Y = up (campaign z)",peeplHeight:2},gw=[19,19],xw="d0 = distance of footprint centre from centre; inside the flat (15.9..22.1) true distance, elsewhere max(5.4, distance); flat surfaces use d0 5.2 unless set; tier = first tier whose end radius >= d0 (4.6 / 9.5 / 15.5 / 32)",vw={color:"#BFE3A5"},_w=[{id:"ground",kind:"ground",poly:[[0,0],[40,0],[40,40],[0,40]],color:"#BFE3A5",tier:1,d0:0},{id:"sidewalk.n",kind:"sidewalk",rect:[0,22.4,40,23.6],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.s",kind:"sidewalk",rect:[0,26.4,40,27.6],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.w",kind:"sidewalk",rect:[22.4,0,23.6,40],color:"#E9E4D6",d0:5.2,tier:2},{id:"sidewalk.e",kind:"sidewalk",rect:[26.4,0,27.6,40],color:"#E9E4D6",d0:5.2,tier:2},{id:"road.x",kind:"road",rect:[0,23.6,40,26.4],color:"#4A4A57",dashes:{axis:"x",at:25,len:.9,pitch:1.8,color:"#FFE100",skip:[22.4,27.6]},d0:5.2,tier:2},{id:"road.y",kind:"road",rect:[23.6,0,26.4,40],color:"#4A4A57",dashes:{axis:"y",at:25,len:.9,pitch:1.8,color:"#FFE100",skip:[22.4,27.6]},d0:5.2,tier:2},{id:"crosswalk.w",kind:"crosswalk",rect:[22.5,23.8,23.5,26.3],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,tier:2},{id:"crosswalk.e",kind:"crosswalk",rect:[26.5,23.8,27.5,26.3],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"crosswalk.n",kind:"crosswalk",rect:[23.8,22.5,26.3,23.5],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"crosswalk.s",kind:"crosswalk",rect:[23.8,26.5,26.3,27.5],stripe:.28,pitch:.55,color:"#FFFFFF",d0:5.2,new:!0,tier:2},{id:"park",kind:"park",rect:[27.8,27.8,35.2,35.2],color:"#8FD17A",d0:5.2,landmark:"P",tier:2},{id:"pond",kind:"pond",ellipse:[32,31.2,1.6,1.2],color:"#0AB8EE",d0:5.2,tier:2},{id:"river",kind:"river",rect:[36.5,0,39.6,40],color:"#3FC6F2",d0:5.2,landmark:"W",tier:2},{id:"bridge",kind:"bridge",box:[36.3,23.7,0,3.5,2.6,.3],color:"#9A9AA6",tier:4,d0:19.92},{id:"plaza",kind:"plaza",rect:[.3,28.3,7.9,35.9],color:"#E8DCC6",tier:4,d0:19.84,landmark:"Z",new:!0}],yw=[{id:"flat.slab",tier:1,d0:0,box:[16,16,-.5,6,6,.5],color:"#C98B55",cutaway:!0,landmark:"H"},{id:"flat.wall.back",tier:1,d0:.3,box:[16,16,0,6,.25,3.2],color:"#F4EEDF",decals:[{face:"y",u:[2,4.2],v:[1.1,2.5],color:"#23305E",kind:"window"},{face:"y",u:[.6,1.5],v:[1.4,2.3],color:"#FFE100",kind:"picture"}]},{id:"flat.wall.left",tier:1,d0:.3,box:[16,16,0,.25,6,3.2],color:"#FFC4EE",decals:[{face:"x",u:[2.2,3.6],v:[1.2,2.5],color:"#0AB8EE",kind:"window"},{face:"x",u:[4.4,5.5],v:[0,2.2],color:"#FF4A2A",kind:"door"}]},{id:"flat.bed",tier:1,d0:1.86,box:[16.4,16.4,0,2.2,3,.55],color:"#FFFFFF"},{id:"flat.pillow",tier:1,d0:2.62,box:[16.6,16.5,.55,1.8,.7,.22],color:"#FFFFFF"},{id:"flat.cover",tier:1,d0:1.62,box:[16.4,17.4,.55,2.2,2,.12],color:"#FF7ADB"},{id:"flat.dresser",tier:1,d0:2.94,box:[20.2,16.4,0,1.6,.9,1],color:"#8B5A2B"},{id:"flat.tv",tier:1,d0:3.14,box:[20.5,16.5,1,1,.15,.7],color:"#111111",decals:[{face:"y",u:[.1,.9],v:[.1,.6],color:"#FFE66B",kind:"screen",emissive:.6}]},{id:"flat.lamp.pole",tier:1,d0:3.54,box:[21.55,16.55,1,.1,.1,.55],color:"#111111"},{id:"flat.lamp.shade",tier:1,d0:3.52,box:[21.35,16.45,1.55,.5,.35,.25],color:"#FFE100",glow:!0},{id:"flat.stool",tier:1,d0:2.26,box:[20.6,17.5,0,.7,.7,.5],color:"#FF4A2A",seatPoint:[20.95,17.85,.5]},{id:"flat.bookshelf",tier:1,d0:2.96,box:[16.3,19.8,0,.55,1.8,2.2],color:"#8B5A2B",decals:[{face:"x",u:[.15,.45],v:[.25,.9],color:"#FF4A2A",kind:"book"},{face:"x",u:[.5,.75],v:[.25,.85],color:"#FFE100",kind:"book"},{face:"x",u:[.85,1.2],v:[.25,.95],color:"#0AB8EE",kind:"book"},{face:"x",u:[1.3,1.6],v:[.25,.8],color:"#FF7ADB",kind:"book"},{face:"x",u:[.2,.6],v:[1.2,1.9],color:"#7B35C4",kind:"book"},{face:"x",u:[.7,1],v:[1.2,1.8],color:"#FFFFFF",kind:"book"},{face:"x",u:[1.1,1.55],v:[1.2,1.95],color:"#FF4A2A",kind:"book"}]},{id:"flat.pot",tier:1,d0:3.32,box:[21.1,21,0,.6,.6,.5],color:"#E07A4F"},{id:"tower.pink",tier:2,d0:6.5,box:[9.6,16.2,0,5.8,5.8,5.4],color:"#FF9FE6",shadow:!0,landmark:"K",sign:{text:"KIOSK",face:"y",at:[12.5,22.05],z:1.9},shopFront:{face:"y",u:[1.8,4.2],v:[0,1.8],counter:!0},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"tower.cyan",tier:2,d0:6.5,box:[16.2,9.6,0,5.8,5.8,7.2],color:"#7FD3F5",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"tower.yellow",tier:2,d0:9.19,box:[9.6,9.6,0,5.8,5.8,9.4],color:"#FFE66B",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"cafe",tier:3,d0:11.5,box:[27.8,16.2,0,5.4,5.8,3.4],color:"#F4EEDF",shadow:!0,landmark:"C",sign:{text:"CAFÉ",face:"y",at:[30.5,22.05],z:2.9},decals:[{face:"y",u:[.5,3.6],v:[.4,2.2],color:"#BFE8FA",kind:"window"},{face:"y",u:[4.1,4.9],v:[0,2.2],color:"#FF4A2A",kind:"door"}]},{id:"cafe.awning",tier:3,d0:11.5,box:[27.8,22,2.3,5.4,.9,.16],color:"#FFE100",stripes:{color:"#FF7ADB",count:5,width:.54,pitch:1.08}},{id:"cafe.table.1",tier:3,d0:11.5,box:[28.6,22.45,0,.6,.5,.55],color:"#FFFFFF",seats:[[28.25,22.7,.44],[29.55,22.7,.44]]},{id:"cafe.table.2",tier:3,d0:11.5,box:[31.4,22.45,0,.6,.5,.55],color:"#FFFFFF",seats:[[31.05,22.7,.44],[32.35,22.7,.44]]},{id:"block.white.narrow",tier:4,d0:15.9,box:[33.6,16.2,0,2.6,5.8,4],color:"#FFFFFF",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"mart",tier:3,d0:11.5,box:[15.2,27.8,0,7,5.4,3.8],color:"#FFFFFF",shadow:!0,landmark:"M",sign:{text:"MART",face:"x",at:[22.25,30],z:4.2},decals:[{face:"x",u:[.4,3.9],v:[.3,2.4],color:"#BFE8FA",kind:"window"},{face:"x",u:[4.3,5],v:[0,2.3],color:"#0AB8EE",kind:"door"}]},{id:"mart.signslab",tier:3,d0:11.5,box:[22.2,28.4,3.8,.3,3.2,.8],color:"#FF7ADB"},{id:"block.lavender",tier:3,d0:13.41,box:[9.6,27.8,0,5,5.4,4.4],color:"#B9A2F0",shadow:!0,landmark:"N",sign:{text:"KINO",face:"y",at:[12.1,33.25],z:3.2},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"block.salmon",tier:3,d0:13.21,box:[27.8,9.6,0,5.4,5.8,5.6],color:"#FF8A73",shadow:!0,landmark:"T",sign:{text:"RUMMER",face:"x",at:[33.25,12.5],z:4},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"block.yellow.low",tier:4,d0:16,box:[15.2,33.8,0,7,2.4,3],color:"#FFE66B",shadow:!0,windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}},{id:"city.tuermchen",tier:4,d0:15.81,box:[4.3,8.3,0,3.4,3.4,11],color:"#FFFFFF",shadow:!0,landmark:"E",sign:{text:"TÜRMCHEN",face:"y",at:[6,11.75],z:2.2},windows:{color:"#2B3566",glow:"#FFE7A0",pitch:1.25,size:.7,margin:[.55,.8]}}],bw=[{id:"flat.plant",kind:"blob",at:[21.4,21.3],tier:1,d0:3.32,z:.95,r:.55,color:"#4CAF50"},{id:"flat.rug",kind:"rug",at:[20.05,19.8],tier:1,d0:1,size:[2.5,2.4],color:"#0AB8EE"},{id:"flat.armchair",kind:"armchair",at:[18.6,17.2],tier:1,d0:2,color:"#C98B55",cushion:"#0AB8EE",seatPoint:[18.6,17.4,.44],new:!0},{id:"flat.floorlamp",kind:"floorlamp",at:[17,21.2],tier:1,d0:2.8,color:"#FFE100",new:!0},{id:"flat.poster",kind:"poster",at:[18.5,16.26],tier:1,d0:2.8,z:1.6,size:[.9,1.1],text:"X",color:"#F4EEDF",face:"y",new:!0},{id:"lamp.0",kind:"lamp",at:[22.7,20.2],tier:2,d0:5.4,height:3.5},{id:"lamp.1",kind:"lamp",at:[20.2,22.7],tier:2,d0:5.4,height:3.5},{id:"lamp.2",kind:"lamp",at:[27.3,20.5],tier:2,d0:8.43,height:3.5},{id:"lamp.3",kind:"lamp",at:[22.7,33.5],tier:3,d0:14.96,height:3.5},{id:"tree.0",kind:"tree",at:[22.7,17.4],tier:2,d0:5.4,scale:1},{id:"tree.1",kind:"tree",at:[13.2,22.7],tier:2,d0:6.88,scale:1},{id:"tree.2",kind:"tree",at:[29,29.2],tier:3,d0:14.28,scale:1},{id:"tree.3",kind:"tree",at:[34.4,30.2],tier:4,d0:19.04,scale:1},{id:"tree.4",kind:"tree",at:[29.2,34.2],tier:4,d0:18.31,scale:1},{id:"tree.5",kind:"tree",at:[33.4,34.3],tier:4,d0:21.01,scale:1},{id:"bench.tram",kind:"bench",at:[18.55,22.78],tier:2,d0:5.4,size:[1.3,.45],color:"#8B5A2B",landmark:"S",sign:{text:"TRAM",pole:!0},seatPoint:[18.55,22.7,.44]},{id:"bin.0",kind:"bin",at:[21.58,22.78],tier:2,d0:5.4,color:"#0AB8EE"},{id:"car.red",kind:"car",at:[18,24.35],tier:2,d0:5.44,size:[2.4,1.1],color:"#FF4A2A",roof:"#DDEFFF"},{id:"car.yellow",kind:"car",at:[24.35,29.85],tier:3,d0:12.1,size:[1.1,2.4],color:"#FFE100",roof:"#DDEFFF"},{id:"bench.park",kind:"bench",at:[31.05,34.65],tier:4,d0:19.75,size:[1.3,.5],color:"#8B5A2B",seatPoint:[31.05,34.55,.44]},{id:"car.blue.loop",kind:"car",at:[25,9],tier:3,d0:12,size:[2.4,1.1],color:"#3E6FC4",roof:"#DDEFFF",loop:{path:[[25,.5],[25,39.5]],speed:3.2,pingpong:!1,lane:"x-road"}}],Mw=[{key:"H",id:"flat",name:"vinnie's flat",at:"at home",sign:null,tier:1,kind:"home",building:"flat.slab",door:[21,22.2],spots:{tv:[20.95,17.85],bed:[17.5,18.4],shelf:[17.1,20.7],chair:[18.6,17.4],window:[18.5,17]},lore:"wohnblock. i live on the third floor. the lift lives on the second."},{key:"K",id:"kiosk",name:"the kiosk",at:"at the kiosk",sign:"KIOSK",tier:2,kind:"work",building:"tower.pink",door:[12.5,22.2],spots:{counter:[12.5,21.6],front:[12.5,22.9]},lore:"the kiosk. a wasserhäuschen, technically. nobody has ever bought water here."},{key:"S",id:"tramstop",name:"the tram stop",at:"at the tram stop",sign:"TRAM",tier:2,kind:"transit",spots:{bench:[18.55,22.7],wait:[19.6,22.9]},lore:"tram stop. there are three trams. they come in threes or not at all."},{key:"C",id:"cafe",name:"café halbe stunde",at:"at café halbe stunde",sign:"CAFÉ",tier:3,kind:"cafe",building:"cafe",door:[32.3,22.2],spots:{vinnieMark:[29,23],mochiMark:[31.6,23],table1:[28.9,22.7],table2:[31.7,22.7]},lore:"café halbe stunde. you get half an hour. after that the coffee gives up."},{key:"M",id:"mart",name:"the kleinstmarkthalle",at:"at the kleinstmarkthalle",sign:"MART",tier:3,kind:"market",building:"mart",door:[22.4,32.45],spots:{corner:[23,29.4],front:[23,31]},lore:"kleinstmarkthalle. smallest market hall in parallel hesse. three stalls, all cheese."},{key:"P",id:"park",name:"the park",at:"in the park",sign:null,tier:3,kind:"park",spots:{pond:[30.2,30.4],tree:[29.6,29.8],bench:[31.05,34.55],lawn:[28.8,32]},lore:"the park. some trees, one bench, and a pigeon with tenure."},{key:"N",id:"kino",name:"kino harmonie",at:"at kino harmonie",sign:"KINO",tier:3,kind:"cinema",building:"block.lavender",door:[12.1,33.3],lore:"kino harmonie. one screen. everyone agrees about the film afterwards. it is in the name."},{key:"T",id:"rummer",name:"the rummer",at:"at the rummer",sign:"RUMMER",tier:3,kind:"civic",building:"block.salmon",door:[33.3,12.5],lore:"rummer. the town hall. three gables, one decision a year."},{key:"Z",id:"hauptwaage",name:"the hauptwaage",at:"at the hauptwaage",sign:"HAUPTWAAGE",tier:4,kind:"plaza",monument:[4.1,32.1],spots:{a:[3,31],b:[5.2,31],c:[3,33.2],d:[5.2,33.2],e:[4.1,34.4]},lore:"hauptwaage. opinions get weighed here. most are light."},{key:"E",id:"tuermchen",name:"the türmchen",at:"at the türmchen",sign:"TÜRMCHEN",tier:4,kind:"bank",building:"city.tuermchen",door:[6,11.8],lore:"türmchen. it sets the rates. on what, nobody asks twice."},{key:"W",id:"main",name:"the main",at:"by the main",sign:null,tier:4,kind:"river",spots:{bank:[36,25]},lore:"the main. flows the other way here. nobody has complained."}],ww={cell:1,walkRects:[[0,22.4,40,23.6],[0,26.4,40,27.6],[22.4,0,23.6,40],[26.4,0,27.6,40],[22.5,23.6,23.5,26.4],[26.5,23.6,27.5,26.4],[23.6,22.5,26.4,23.5],[23.6,26.5,26.4,27.5],[16.3,16.3,21.9,21.9],[20.4,21.9,21.6,22.4],[27.8,22,33.2,22.4],[27.8,27.8,35.2,35.2],[.3,28.3,7.9,35.9],[12,21.4,13,22.4],[22.2,32,22.4,32.9],[32,21.9,32.6,22.4]],blocked:[[30.4,30,33.6,32.4]],rightHandOffset:.3,doors:{H:[21,22.2],K:[12.5,22.2],C:[32.3,22.2],M:[22.4,32.45],N:[12.1,33.3],T:[33.3,12.5],E:[6,11.8]}},Sw={generator:"campaign WORLD tier-4 loop, ported 1:1",hash:"hsh(i) = fract(sin(i*127.1 + 311.7) * 43758.5453)",grid:[10,10],lotPitch:4,lotOffset:.3,lotSize:3.4,core:[9.2,9.2,36.2,36.2],roadBands:[[22.2,27.8]],maxX:36.3,treeChance:.16,treeScale:1.25,height:"1.8 + r*r*10 with r = hsh(n*3.1 + 1)",colourIndex:"floor(hsh(n*7.7 + 2) * 7)",treeTest:"hsh(n*5.3) < 0.16",palette:["#F4EEDF","#FF9FE6","#7FD3F5","#FFE66B","#FFFFFF","#B9A2F0","#FF8A73"],skipRects:[[.3,28.3,7.9,35.9],[4.3,8.3,7.7,11.7]],skipRule:"increment n before testing skipRects so every other lot keeps its campaign height and colour",windows:!0,shadow:!0},Ew={cells:20,cellSize:2,color:"#35314B",dusk:"#2A2640",variation:[.9,1.1],band:1.8,popBand:1.4,height:.12},Aw=[{who:"pip",a:[31.9,23.2],tierMin:3},{who:"dex",a:[28.2,23.45],b:[34.8,23.45],speed:.8,phase:.3,tierMin:3},{who:"mochi",a:[23,30.1],tierMin:3},{who:"kit",a:[30.6,30.2],tierMin:4},{who:"nimbus",a:[28.8,31.4],tierMin:4},{who:"taro",a:[35.2,23.2],tierMin:4},{who:"cosmo",a:[3.5,23.1],tierMin:4},{who:"juno",a:[1.5,23.25],b:[8.4,23.25],speed:.8,phase:.4,tierMin:3},{who:"vega",a:[23.1,3.2],tierMin:4},{who:"spike",a:[23.25,1.2],b:[23.25,8.2],speed:.9,phase:.7,tierMin:3},{who:"hexi",a:[23.1,37.4],tierMin:4},{who:"rudy",a:[2.4,23.1],tierMin:4},{who:"flare",a:[23.1,5.2],tierMin:3},{who:"joe",a:[9.8,23.2],b:[21.2,23.2],speed:1,phase:.1,decor:!0,tierMin:2},{who:"joe",a:[23.25,9.8],b:[23.25,21.4],speed:.9,phase:.6,decor:!0,tierMin:2},{who:"joe",a:[27,28.4],b:[27,35],speed:.9,phase:.2,decor:!0,tierMin:3},{who:"joe",a:[29.5,32.8],b:[32.4,32.8],speed:.7,phase:.5,decor:!0,tierMin:4}],Tw={homes:[[3,22.9],[12.5,22.9],[23,14],[23,36],[33,22.9],[27,5],[27,31],[8,27]]},Cw={version:pw,units:mw,centre:gw,revealRule:xw,ground:vw,surfaces:_w,buildings:yw,props:bw,landmarks:Mw,nav:ww,city:Sw,fog:Ew,placements:Aw,extrasSpawn:Tw},Rw=1,Pw={day:1,time:"13:00",note:"S8 story mode opens on vinnie's day off"},kw={dayRealSeconds:240,speeds:[0,1,4,16],simStep:20,seed:57},Fw={dayOff:{days:[1],schedule:[{from:"13:00",to:"14:00",place:"H",spot:"tv",anim:"tv",line:"dayoff"},{from:"14:00",to:"14:30",place:"H",spot:"shelf",anim:"read"},{from:"14:30",to:"15:00",place:"H",spot:"window",anim:"idle"},{from:"15:00",to:"15:40",place:"S",spot:"bench",anim:"sit",line:"tramstop",fallback:{place:"H",spot:"chair",anim:"sit"}},{from:"15:40",to:"16:20",place:"K",spot:"front",anim:"browse",line:"customer",fallback:{place:"H",spot:"tv",anim:"tv"}},{from:"16:20",to:"17:00",place:"S",spot:"wait",anim:"idle",fallback:{place:"H",spot:"shelf",anim:"read"}},{from:"17:00",to:"17:30",place:"M",spot:"corner",anim:"idle",beat:"contact",fallback:{place:"H",spot:"window",anim:"idle"}},{from:"17:30",to:"18:00",place:"C",spot:"table1",anim:"sit",line:"eveningC",fallback:{place:"H",spot:"chair",anim:"sit"}},{from:"18:00",to:"20:30",place:"Z",spot:"a",anim:"idle",line:"eveningZ",fallback:{place:"C",spot:"table1",anim:"sit"}},{from:"20:30",to:"21:30",place:"H",spot:"chair",anim:"sit",line:"goHome"},{from:"21:30",to:"22:30",place:"H",spot:"shelf",anim:"read",line:"diary"},{from:"22:30",to:"13:00",place:"H",spot:"bed",anim:"sleep",line:"sleep"}]},work:{days:"2+",schedule:[{from:"06:30",to:"07:30",place:"H",spot:"tv",anim:"idle",line:"wake"},{from:"07:30",to:"12:30",place:"K",spot:"counter",anim:"browse",line:"arriveWork",walkLine:"leave"},{from:"12:30",to:"13:15",place:"$lunch",spot:"auto",anim:"sit",line:"$lunch",options:{C:"lunchCafe",P:"lunchPark",K:"lunchRush",Krain:"lunchStay"}},{from:"13:15",to:"17:00",place:"K",spot:"counter",anim:"browse",line:"backToWork"},{from:"17:00",to:"20:30",place:"$evening",spot:"auto",anim:"idle",line:"$evening",options:{P:"eveningP",C:"eveningC",Z:"eveningZ",N:"eveningN",M:"eveningM",Mclosed:"eveningMclosed",T:"eveningT",H:"eveningH",Hrain:"eveningHrain"},walkLine:"close"},{from:"20:30",to:"22:00",place:"H",spot:"chair",anim:"sit",line:"goHome"},{from:"22:00",to:"22:30",place:"H",spot:"shelf",anim:"read",line:"diary"},{from:"22:30",to:"06:30",place:"H",spot:"bed",anim:"sleep",line:"sleep"}],rules:{rainEvery:3,lunch:"event.lunch ?? (rain ? 'Krain' : rng pick of C,P weighted by needs.social)",evening:"event.evening ?? highest need: social->Z or C, curiosity->N or T or M, energy low->H; closed places map to the 'closed' line"}},tierGating:"if the activity's place tier > current tier, run its fallback (or H idle). story beats ('beat') fire only when the place is allowed",walkSpeedU:1.6,visibleRule:{outdoorShareMin:.6,cutawayCountsAsVisible:!0},lines:{wake:["morning. allegedly.","awake. under protest.","up. the day insisted."],leave:["kiosk. same as yesterday, with newer newspapers.","off to work. the papers will not sell themselves. i have checked."],detour:["a tram is resting on my usual way. walking the long way."],arriveWork:["kiosk open. technically.","shutters up. expectations low.","open. first customer wants change for a fifty."],arriveLate:["late. the kiosk did not mind. it cannot."],lunchCafe:["half an hour. starting now.","the usual. they know what that is. i do not."],lunchPark:["bench. sandwich. pigeons at a respectful distance.","lunch outside. the bench was free. it usually is."],lunchRush:["no lunch. everyone wants a paper at once."],lunchStay:["raining. eating behind the counter. the view is snacks."],backToWork:["back. nothing happened. i checked.","second half. same kiosk."],close:["shutters down. that was the shift.","closed. the newspapers are already old."],eveningP:["evening in the park. the light does most of the work."],eveningC:["coffee after work. a second half hour. bold."],eveningZ:["hauptwaage. standing where the others are standing."],eveningN:["one ticket. middle row. nobody behind me, i hope."],eveningM:["kleinstmarkthalle. buying cheese from stall two of three."],eveningMclosed:["closed. i will stand here a moment. out of respect."],eveningT:["voting. i brought my own pencil."],eveningH:["home early. the sofa and i have plans."],eveningHrain:["raining. home. not complicated."],goHome:["home. enough town for one day."],diary:["writing it down. briefly."],sleep:["light off. mostly."],rain:["rain. as scheduled."],customer:["{name} bought a paper and an opinion. the opinion was free.","{name} wanted change for a fifty. everyone does."],meet:["{name}. we nodded. that was the conversation.","passed {name}. weather was discussed. briefly.","{name} said hello. i said it back. even trade."],ohhi:["oh. hi."],dayoff:["day off. the kiosk can stare at someone else.","no shift today. i checked twice."],tramstop:["tram stop. i'm not taking one. i just like the waiting."],contact:["psst. her. over there."]}},Lw=[{id:"joe-1",ported:"bembel",home:[3,22.9],body:"average",attach:[{part:"prop.briefcase"}],plan:[["07:10","T","in"],["12:10","Z","out"],["12:55","T","in"],["16:45","C","out"],["18:50","home"]]},{id:"joe-2",ported:"gri",home:[12.5,22.9],body:"thin",attach:[{part:"prop.bag"}],plan:[["06:20","M","in"],["14:00","P","out"],["16:20","home"],["18:40","Z","out"],["21:10","home"]]},{id:"joe-3",ported:"handkaes",home:[23,14],body:"stocky",attach:[{part:"prop.cup"}],plan:[["08:40","P","out"],["10:10","K","visit"],["10:45","C","out"],["12:00","home"],["15:10","Z","out"],["17:20","M","in"],["19:20","home"]]},{id:"joe-4",ported:"ebbel",home:[23,36],body:"average",attach:[{part:"prop.umbrella"}],plan:[["08:50","E","in"],["17:10","N","in"],["20:40","C","out"],["22:10","home"]]},{id:"joe-5",ported:null,home:[33,22.9],body:"thin",attach:[{part:"headphones"}],plan:[["09:30","S","out"],["11:00","P","out"],["13:00","K","visit"],["16:00","S","out"],["18:30","Z","out"],["21:00","home"]]},{id:"joe-6",ported:null,home:[27,5],body:"average",attach:[{part:"prop.balloon"}],plan:[["10:00","C","out"],["12:30","P","out"],["15:00","M","in"],["16:30","S","out"],["18:00","Z","out"],["20:00","home"]]},{id:"joe-7",ported:null,home:[27,31],body:"xl",attach:[{part:"prop.flowers"}],plan:[["07:45","K","visit"],["09:00","T","in"],["13:00","C","out"],["14:00","T","in"],["17:30","P","out"],["19:30","home"]]},{id:"joe-8",ported:null,home:[8,27],body:"average",attach:[{part:"prop.dog"}],plan:[["08:00","P","out"],["11:30","S","out"],["14:30","P","out"],["17:45","Z","out"],["20:15","home"]]}],Iw={start:{energy:[.72,.96],social:[.3,.6],curiosity:[.3,.6]},rates:{sleep:{energy:.11,social:-.01,curiosity:0},home:{energy:.02,social:-.04,curiosity:-.02},walk:{energy:-.06,social:.01,curiosity:.04},work:{energy:-.05,social:.02,curiosity:-.045},rush:{energy:-.09,social:.07,curiosity:.01},cafe:{energy:.06,social:.14,curiosity:.02},park:{energy:.03,social:.03,curiosity:.08},plaza:{energy:-.03,social:.16,curiosity:.08},cinema:{energy:-.01,social:.04,curiosity:.2},market:{energy:-.02,social:.08,curiosity:.07},rummer:{energy:-.02,social:.06,curiosity:.1}},moods:[[.3,"glum"],[.42,"flat"],[.58,"okay"],[.72,"content"],[9,"bright"]]},Dw="lines ported from v0.1 DATA.lines (lowercased, Mika -> vinnie); extras 1-4 port v0.1 plans (bembel, gri, handkaes, ebbel) as white Joes carrying crowd-scene props; 5-8 are new",Nw={version:Rw,start:Pw,clock:kw,vinnie:Fw,extras:Lw,needs:Iw,notes:Dw},Uw=1,Ow=[{id:"enter",trigger:{on:"s8Start"},actions:[["simTime","13:00"],["tier",1],["camera","town",{dist:[26,24],seconds:5}],["vinnie","activity","tv"],["caption","tier1",.8],["gps","show"],["caption","walkHint",5.2],["vinnie","standTurn",4.5],["bubble","vinnie","oh. hi.",4.9],["autoWalk",8]]},{id:"tier2",trigger:{on:"km",gte:.5},actions:[["tier",2],["gps","show"],["ticker","start"],["caption","tier2",.3],["routine","unlock",2],["lore","K","onFirstReveal"]]},{id:"tier3",trigger:{on:"km",gte:1.2},actions:[["tier",3],["rings","on"],["caption","tier3",.2],["routine","unlock",3]]},{id:"contact",trigger:{on:"near",a:"vinnie",b:"mochi",dist:6,tierMin:3},actions:[["holdSim",!0],["play","contact"]]},{id:"cafe",trigger:{on:"choice",beat:"contact",value:"sayhi"},actions:[["wipe"],["play","cafe"],["met","mochi"]]},{id:"tier4",trigger:{on:"km",gte:2.2,after:"cafe"},actions:[["tier",4],["caption","tier4",.2],["gfx","hd",1],["routine","unlock",4],["walkTo",["vinnie","mochi"],"Z"]]},{id:"end",trigger:{on:"any",of:[{after:"tier4",realSeconds:12},{simTimeGte:"20:30"}]},actions:[["gps","shrink"],["continue","meet the neighbours"],["next","S11"]]}],Bw={camera:{shot:"venue",dist:16},steps:[{t:0,do:"turn",who:"vinnie",to:"mochi"},{t:0,do:"bubble",who:"vinnie",text:"psst. her. over there.",hop:.12},{t:1.4,do:"bubble",who:"vinnie",text:"say hi?",choices:[{label:"say hi",value:"sayhi"},{label:"not now",value:"notnow"}],autoPick:0,autoAfter:2}],onSayHi:[{t:0,do:"clip",who:"vinnie",clip:"wave"},{t:.2,do:"turn",who:"mochi",to:"vinnie"},{t:.25,do:"clip",who:"mochi",clip:"react"},{t:.3,do:"hop",who:"vinnie"},{t:.5,do:"bubble",who:"mochi",text:"hi vinnie!",style:"yellow"},{t:.55,do:"hop",who:"mochi"},{t:1.6,do:"end",next:"cafe"}],onNotNow:[{t:0,do:"bubble",who:"vinnie",text:"fair. she'll be around."},{t:1.5,do:"end",retrigger:"tapMochi"}]},zw={holdSim:!0,marks:{vinnie:[29,23],mochi:[31.6,23],vinnieFrom:[25.5,23],mochiFrom:[35,23]},shots:[{id:"C1",ref:"show/s_019.jpg",t:[0,1.9],camera:{shot:"venue",target:[30.3,1,22.8],pitch:24,dist:[18,17]},actions:[["walk","vinnie","mark",3],["walk","mochi","mark",3],["pill","cafePill",.3],["pill","herePill",.3],["hide","tierChip"],["hide","gps"]]},{id:"C2",ref:"show/s_020.jpg",t:[1.9,2.4],camera:{shot:"venue",dist:[17,16]},actions:[["clip","both","react"],["turn","vinnie","mochi"],["turn","mochi","vinnie"],["bang","both",1.9],["dialogueBox","rise",2]]},{id:"C3",ref:"show/s_021.jpg",t:[2.4,4.7],camera:{shot:"close",favour:"vinnie",panPx:70},line:{who:"VINNIE",text:"yo. you're in colour too.",at:2.4}},{id:"C4",ref:"show/s_023.jpg",t:[4.7,7],camera:{shot:"close",favour:"mochi",panPx:70},line:{who:"MOCHI",text:"so you're the famous vinnie. nice mask.",at:4.7}},{id:"C5",ref:"show/s_026.jpg",t:[7,9.1],camera:{shot:"close",favour:"vinnie",panPx:70},line:{who:"VINNIE",text:"it's my face. wanna get coffee?",at:7}},{id:"C6",ref:"show/s_028.jpg",t:[9.1,10.8],camera:{shot:"close",favour:"mochi",panPx:70},line:{who:"MOCHI",text:"only if it's oat.",at:9.1},caret:"▼"},{id:"C7",ref:"show/s_029.jpg",t:[10.8,12.6],camera:{shot:"venue",dist:16,seconds:.9},actions:[["friendMeter",10.8],["dialogueBox","drop",11],["clip","both","joy",11.9]]},{id:"C8",ref:null,t:[12.6,20],camera:{shot:"venue",orbitDeg:15},actions:[["walk","vinnie","seat",[28.25,22.7]],["walk","mochi","seat",[29.55,22.7]],["clip","both","sit"],["cups","table1"],["toast","mochiAdded",16]]}],end:{t:20,do:"wipe",to:"town",resumeSim:!0},speakerChips:{VINNIE:"#FF4A2A",MOCHI:"#FF7ADB"},typeMsPerChar:35},Hw={version:Uw,worldScript:Ow,contact:Bw,cafe:zw},Vw=1,Gw=[19,19],Ww={hdFromTier:4,hdDelay:1,overlayFade:[.55,0],overlayFadeSeconds:1.6,fieldGlow:{"16bit":.25,hd:.45}},Xw={metersPerMapPx:5,manualKmPerSecond:.06,autoKmPerSecond:.03,autoStartDelay:8,card:{mapSize:[348,212],start:[92,118]},autoRoute:[[92,118],[150,118],[150,70],[240,70],[240,150],[300,150],[300,40],[200,30],[120,40],[60,90],[60,180],[180,190],[320,190]]},$w=[{n:1,badge:"tier 1",name:"his place",kmAt:0,radius:[0,4.6],radiusSeconds:1.2,shot:{target:[19,19],dist:26,distEnd:24,distSeconds:5,pitch:35.264},caption:"at first, he only lets you see his place.",captionAt:.8,captionFor:4.5,bubble:{who:"vinnie",text:"oh. hi.",delay:4.9,hold:1.1},gfx:"16bit",routineAllow:["H"]},{n:2,badge:"tier 2",name:"his street",kmAt:.5,radius:[4.6,9.5],radiusSeconds:1.8,shot:{target:[21,21],dist:48,distSeconds:2,pitch:35.264},caption:"get closer, and he shows you more.",captionAt:.3,captionFor:3.2,gfx:"16bit",routineAllow:["H","K","S"]},{n:3,badge:"tier 3",name:"the neighbourhood",kmAt:1.2,radius:[9.5,15.5],radiusSeconds:2,shot:{target:[24,24],dist:64,distSeconds:2,pitch:35.264},caption:"spot someone in colour? they've got a human too.",captionAt:.2,captionFor:4.4,gfx:"16bit",rings:!0,routineAllow:["H","K","S","C","M","P","N","T"]},{n:4,badge:"tier 4",name:"the city",kmAt:2.2,requires:["cafe"],radius:[15.5,32],radiusSeconds:2.6,shot:{target:[20,20],dist:136,distSeconds:3,pitch:35.264},caption:"walk your world, and his world opens up.",captionAt:.2,captionFor:5,gfx:"hd",rings:!0,routineAllow:["H","K","S","C","M","P","N","T","Z","E","W"]}],Yw={progressSegments:4,gpsTitle:"your walk today",kmFormat:"{km} km",walkPillTier1:"your walk today · {km} km"},qw={version:Vw,centre:Gw,gfx:Ww,walk:Xw,tiers:$w,hud:Yw},Sa=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),an=(i,t,e,n)=>{var s;i.push(`${t}: ${e} (got ${(s=JSON.stringify(n))==null?void 0:s.slice(0,60)})`)},Jf=()=>{},_t=(i,t,e)=>typeof i!="string"&&an(e,t,"expected string",i),Ut=(i,t,e)=>(typeof i!="number"||!Number.isFinite(i))&&an(e,t,"expected number",i),Ic=(i,t,e)=>typeof i!="boolean"&&an(e,t,"expected boolean",i),cn=(i,t,e)=>(typeof i!="string"||!/^#[0-9A-Fa-f]{3,8}$/.test(i))&&an(e,t,"expected #hex",i),Ea=i=>(t,e,n)=>t!==null&&i(t,e,n),ri=(...i)=>(t,e,n)=>!i.includes(t)&&an(n,e,`expected one of ${i.join("|")}`,t),Dc=(i,t,e)=>(typeof i!="string"||!/^\d{2}:\d{2}$/.test(i))&&an(e,t,"expected hh:mm",i),Zt=(i,t=0)=>(e,n,s)=>{if(!Array.isArray(e))return an(s,n,"expected array",e);e.length<t&&an(s,n,`expected at least ${t} items`,e.length),e.forEach((r,o)=>i(r,`${n}[${o}]`,s))},Ne=(i,t=Ut)=>(e,n,s)=>{if(!Array.isArray(e)||e.length!==i)return an(s,n,`expected ${i}-tuple`,e);e.forEach((r,o)=>t(r,`${n}[${o}]`,s))},jw=(i,t)=>(e,n,s)=>{if(!Array.isArray(e)||e.length!==2)return an(s,n,"expected pair",e);i(e[0],`${n}[0]`,s),t(e[1],`${n}[1]`,s)},Ct=i=>(t,e,n)=>{if(!Sa(t))return an(n,e,"expected object",t);for(const[s,r]of Object.entries(i)){const o=s.endsWith("?"),a=o?s.slice(0,-1):s;if(!(a in t)){o||an(n,`${e}.${a}`,"missing",void 0);continue}r(t[a],`${e}.${a}`,n)}},rn=i=>(t,e,n)=>{if(!Sa(t))return an(n,e,"expected object",t);for(const[s,r]of Object.entries(t))i(r,`${e}.${s}`,n)},qi=ri(1),$o=Ct({head:Ut,h:Ut,T:Ut,A:Ut,hem:Ut,belly:Ut,legs:Ut}),Qf=ri("thin","average","stocky","xl"),tp=Ct({part:_t,"color?":cn,"color2?":cn,"side?":ri("L","R"),"params?":rn(Jf)}),Zw=["head","h","T","A","hem","belly","legs"],Kw=Ct({id:_t,num:_t,name:_t,tagline:Ea(_t),hasHuman:Ic,role:ri("lead","friend","neighbour","blank"),body:Qf,headScale:Ut,"shape?":(i,t,e)=>{if(rn(Ut)(i,t,e),Sa(i))for(const n of Object.keys(i))Zw.includes(n)||an(e,`${t}.${n}`,"unknown shape key",n)},skin:cn,"hands?":cn,face:Ct({eyes:_t,mouth:_t}),top:Ct({type:_t,color:cn,"color2?":cn}),pants:Ct({type:ri("wide","straight","jeans"),color:cn}),shoes:Ct({type:ri("sneaker","leather"),color:cn}),attach:Zt(tp),sprite:Ct({body:_t,card:_t,footX:Ut,aspect:Ut}),"flags?":Ct({"occultMarks?":Ic})}),Jw=Ct({version:qi,units:Ct({U:_t,worldPerU:Ut}),bodyTypes:Ct({thin:$o,average:$o,stocky:$o,xl:$o}),cast:(i,t,e)=>{if(Zt(Kw,15)(i,t,e),Array.isArray(i)){const n=i.map(s=>Sa(s)?s.id:null);new Set(n).size!==n.length&&an(e,t,"duplicate cast ids",n)}}}),Qw=Ct({version:qi,captions:rn(_t),S0:Ct({tags:Zt(jw(_t,Ut)),wordmark:_t}),S1:Ct({heading:_t,chips:Zt(Ne(2,_t)),button:_t}),S2:Ct({finding:_t}),S3:Ct({name:_t,pill:_t}),S4:Ct({trust:_t}),S6:rn(_t),S7:rn(_t),S8:rn(_t),S11:Ct({heading:_t,order:Zt(_t,12)}),S12:Ct({wordmark:_t,tagline:_t,cta:_t,sub:_t,replay:_t,lineup:Zt(_t,15)}),debug:Ct({resetAsk:_t}),ui:Ct({continue:_t})}),ep=ri("VINNIE","YOU","MOCHI"),pi=Ct({who:ep,text:_t,"hop?":Ut}),Hu=Ct({label:_t,trust:Ut,"set?":rn(_t),reply:Zt(pi),"preferIfProfile?":_t}),tS=Ct({version:qi,trust:Ct({start:Ut,max:Ut,closeMin:Ut,display:_t}),speakers:Ct({VINNIE:Ct({chip:cn}),YOU:Ct({chip:cn})}),days:Ct({maxDays:Ut,nextDayCard:_t,forcedOnDay:Ut}),memoryKeys:Zt(_t),beats:Zt(Ct({id:_t,days:Zt(Ut,1),line:Zt(pi,1),"lineAgain?":Zt(pi),choices:Zt(Hu,1),autoPick:Ut}),1),close:Ct({pass:Zt(pi,1),fail:Zt(pi,1),forced:Zt(pi,1),toast:_t}),consent:Ct({ask:Zt(pi,1),askAgain:Zt(pi),choices:Zt(Hu,2),forced:Zt(pi),autoPick:Ut,confirmToast:_t})}),eS=Ct({version:qi,forcedDay1:_t,tickerFiller:Zt(_t,1),weatherLine:Ct({sun:_t,rain:_t}),events:Zt(Ct({id:_t,headline:_t,ticker:_t,where:Ea(_t),startHour:Ut,durationHours:Ut,visual:ri("pigeons","lanterns","banner","crowd","closedTape","none"),effects:Ct({social:Ut,curiosity:Ut,energy:Ut}),reaction:_t,diaryLine:_t}),12),mirror:Ct({lexicon:rn(_t),pool:Zt(_t),keep:Zt(_t),twists:Zt(_t)})}),js=ri(1,2,3,4),nS=Ct({version:qi,units:Ct({size:Ne(2)}),centre:Ne(2),ground:Ct({color:cn}),surfaces:Zt(Ct({id:_t,kind:_t,color:cn,tier:js,d0:Ut})),buildings:Zt(Ct({id:_t,tier:js,d0:Ut,box:Ne(6),color:cn}),1),props:Zt(Ct({id:_t,kind:_t,at:Ne(2),tier:js,d0:Ut})),landmarks:Zt(Ct({id:_t,key:_t,name:_t,at:_t,sign:Ea(_t),tier:js,lore:_t,kind:_t})),nav:Ct({cell:Ut,walkRects:Zt(Ne(4)),blocked:Zt(Ne(4)),rightHandOffset:Ut,doors:rn(Ne(2))}),city:Ct({hash:_t,grid:Ne(2),lotPitch:Ut,lotOffset:Ut,lotSize:Ut,treeChance:Ut}),fog:Ct({cells:Ut,cellSize:Ut,color:cn,band:Ut,popBand:Ut}),placements:Zt(Ct({who:_t,a:Ne(2),tierMin:js})),extrasSpawn:Ct({homes:Zt(Ne(2))})}),Vu=Ct({from:Dc,to:Dc,place:_t,anim:_t}),iS=Ct({version:qi,start:Ct({day:Ut,time:Dc}),clock:Ct({dayRealSeconds:Ut,speeds:Zt(Ut,1),simStep:Ut,seed:Ut}),vinnie:Ct({dayOff:Ct({days:Zt(Ut),schedule:Zt(Vu,1)}),work:Ct({schedule:Zt(Vu,1)}),walkSpeedU:Ut,lines:rn(Zt(_t))}),extras:Zt(Ct({id:_t,home:Ne(2),body:Qf,attach:Zt(tp),plan:Zt(Zt(_t,2))})),needs:Ct({start:rn(Ne(2)),rates:rn(rn(Ut))})}),sS=(i,t,e)=>{(!Array.isArray(i)||typeof i[0]!="string")&&an(e,t,"expected [verb, ...args]",i)},rS=Ct({version:qi,worldScript:Zt(Ct({id:_t,trigger:Ct({on:_t}),actions:Zt(sS)}),1),contact:Ct({steps:Zt(Ct({t:Ut,do:_t})),onSayHi:Zt(Ct({t:Ut,do:_t})),onNotNow:Zt(Ct({t:Ut,do:_t}))}),cafe:Ct({holdSim:Ic,marks:rn(Ne(2)),shots:Zt(Ct({id:_t,ref:Ea(_t),t:Ne(2),camera:Ct({shot:_t}),"line?":Ct({who:ep,text:_t,at:Ut})}),8),speakerChips:rn(cn)})}),oS=Ct({version:qi,centre:Ne(2),gfx:Ct({hdFromTier:Ut,hdDelay:Ut,overlayFade:Ne(2),overlayFadeSeconds:Ut,fieldGlow:Ct({"16bit":Ut,hd:Ut})}),walk:Ct({metersPerMapPx:Ut,manualKmPerSecond:Ut,autoKmPerSecond:Ut,autoStartDelay:Ut,card:Ct({mapSize:Ne(2),start:Ne(2)}),autoRoute:Zt(Ne(2))}),tiers:Zt(Ct({n:js,name:_t,badge:_t,kmAt:Ut,radius:Ne(2),radiusSeconds:Ut,shot:Ct({target:Ne(2),dist:Ut,distSeconds:Ut,pitch:Ut}),caption:_t,captionAt:Ut,captionFor:Ut,gfx:ri("16bit","hd"),routineAllow:Zt(_t)}),4),hud:rn(Jf)}),np={cast:Jw,copy:Qw,dialogue:tS,events:eS,map:nS,routine:iS,setpieces:rS,tiers:oS},aS=Object.keys(np);function lS(i,t){const e=[];return np[i](t,i,e),e}function cS(i){const t=aS.flatMap(r=>lS(r,i[r]));if(t.length)return t;const e=i.cast,n=new Set(e.cast.map(r=>r.id)),s=i.copy;for(const r of[...s.S11.order,...s.S12.lineup])n.has(r)||t.push(`copy: unknown cast id "${r}"`);return t}const Hn={cast:PM,copy:XM,dialogue:nw,events:fw,map:Cw,routine:Nw,setpieces:Hw,tiers:qw},hS=()=>cS(Hn),dS=1500;let ip;const uS=new Promise(i=>ip=i);async function fS(){const i=fp(location.search),t=new pp(mp());i.reset&&t.reset();const e=t.data.settings;e.auto=i.auto??!i.test,i.speed!==null&&(e.speed=i.speed),wp();const n=new Zy,s=new Jy,r=new Qy,o=new gp,a=new vp(new xp(i.test)),l=hS();l.length&&(console.error("data invalid",l),r.show(`data invalid: ${l[0]}`,30));const c=["joe","vinnie","mochi"].map(M=>Hn.cast.cast.find(b=>b.id===M).sprite.body);await Promise.race([Promise.all([document.fonts.load('52px "Bagel Fat One"'),document.fonts.load("36px VT323"),document.fonts.load("36px VT323","É"),...c.map(M=>{const b=new Image;return b.src=no(M),b.decode().catch(()=>{})})]),new Promise(M=>setTimeout(M,dS))]);const h=new Ip(wM,document.getElementById("stage"),M=>{const b=ps(M);n.set(b.field,b.dots),t.setScreen(M),o.emit("screen",M)}),u={flow:h,store:t,data:Hn,copy:Hn.copy,params:i,bus:o,loop:a,captions:s,toast:r,field:n};h.bind(u);const d=M=>{var P;return(M==="S8"?Hn.copy.S8.continueEnd:(P=Hn.copy[M])==null?void 0:P.continue)??Hn.copy.ui.continue},p=Hn.copy.ui,x=new Op(h,t,s,d,i.auto===null&&!i.test?{pause:p.pause,off:p.autoOff,resume:p.resume}:null),S=[i.screen,t.data.screen].find($u)??"S0";h.start(S),i.t!==null&&h.seek(i.t);const m=Xy({flow:h,loop:a,store:t,autoplay:x,ready:uS});window.__peepls=m;const f=()=>jy(m,t,Hn.copy.debug.resetAsk,Hn.cast.cast.map(M=>M.id),Hn.events.events.map(M=>M.id));let y=!i.clean&&(i.debug||i.test)?f():null;!y&&!i.clean&&addEventListener("keydown",M=>{M.key==="`"&&!y&&(y=f())}),a.add(M=>{const b=t.data.settings.speed===.25?M*.25:M;h.update(b),s.update(b),x.update(b),r.update(b),n.update(a.uiT,t.data.settings.reduceMotion||matchMedia("(prefers-reduced-motion: reduce)").matches),y==null||y.update()}),addEventListener("keydown",M=>{var b,P;M.key!=="`"&&(document.documentElement.dataset.keyboard="1"),!((P=(b=M.target)==null?void 0:b.closest)!=null&&P.call(b,"#debug, button, select"))&&((M.key===" "||M.key==="Enter")&&(M.preventDefault(),x.tap())||h.input({type:"key",key:M.key}))}),addEventListener("pointerdown",M=>{var v,E;if((E=(v=M.target)==null?void 0:v.closest)!=null&&E.call(v,"#debug, button, .slider, #continue"))return;const[b,P]=Xr(M.clientX,M.clientY);h.input({type:"tap",x:b,y:P})}),a.step(0),a.start(),ip()}fS();
