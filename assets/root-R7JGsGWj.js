import{s as te,w as Ye,a as w,N as K,p as wn,u as Sn,e as ne,f as An,g as ia,k as Ie,D as oa,l as sa,n as kn,o as He,A as la,V as En,i as Pe,q as kt,t as In,v as Pn,x as Cn,y as Fn,j as y,z as fa,B as Nn,C as On,O as jn,E as Tn}from"./components-Dkosz3Q0.js";import{e as Ln,m as _n,P as Rn,F as Mn,f as Et,M as Dn,L as $n,S as zn}from"./errorBoundaries-j6ON5A9R.js";const be="application/x-www-form-urlencoded";function Ce(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Wn(e){return Ce(e)&&e.tagName.toLowerCase()==="button"}function Un(e){return Ce(e)&&e.tagName.toLowerCase()==="form"}function Yn(e){return Ce(e)&&e.tagName.toLowerCase()==="input"}function Hn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Bn(e,t){return e.button===0&&(!t||t==="_self")&&!Hn(e)}let he=null;function Gn(){if(he===null)try{new FormData(document.createElement("form"),0),he=!1}catch{he=!0}return he}const Vn=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _e(e){return e!=null&&!Vn.has(e)?(Ye(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${be}"`),null):e}function Xn(e,t){let a,n,r,o,i;if(Un(e)){let s=e.getAttribute("action");n=s?te(s,t):null,a=e.getAttribute("method")||"get",r=_e(e.getAttribute("enctype"))||be,o=new FormData(e)}else if(Wn(e)||Yn(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||s.getAttribute("action");if(n=l?te(l,t):null,a=e.getAttribute("formmethod")||s.getAttribute("method")||"get",r=_e(e.getAttribute("formenctype"))||_e(s.getAttribute("enctype"))||be,o=new FormData(s,e),!Gn()){let{name:f,type:u,value:c}=e;if(u==="image"){let p=f?`${f}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else f&&o.append(f,c)}}else{if(Ce(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a="get",n=null,r=be,i=e}return o&&r==="text/plain"&&(i=o,o=void 0),{action:n,method:a.toLowerCase(),encType:r,formData:o,body:i}}const Jn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jn&&(window.__reactRouterVersion="8.3.0")}catch{}const lt=w.forwardRef(function({onClick:t,discover:a="render",prefetch:n="none",relative:r,reloadDocument:o,replace:i,mask:s,state:l,target:f,to:u,preventScrollReset:c,viewTransition:p,defaultShouldRevalidate:m,...S},b){let{basename:k,navigator:x,useTransitions:E}=w.useContext(K),A=typeof u=="string"&&la.test(u),P=wn(u,k);u=P.to;let v=Sn(u,{relative:r}),F=ne(),T=null;if(s){let W=An(s,[],F.mask?F.mask.pathname:"/",!0);k!=="/"&&(W.pathname=W.pathname==="/"?k:ia([k,W.pathname])),T=x.createHref(W)}let[L,B,Le]=Ln(n,S),yn=Qn(u,{replace:i,mask:s,state:l,target:f,preventScrollReset:c,relative:r,viewTransition:p,defaultShouldRevalidate:m,useTransitions:E});function xn(W){t&&t(W),W.defaultPrevented||yn(W)}let St=!(P.isExternal||o),At=w.createElement("a",{...S,...Le,href:(St?T:void 0)||P.absoluteURL||v,onClick:St?xn:t,ref:_n(b,B),target:f,"data-discover":!A&&a==="render"?"true":void 0});return L&&!A?w.createElement(w.Fragment,null,At,w.createElement(Rn,{page:v})):At});lt.displayName="Link";const G=w.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:n="",end:r=!1,style:o,to:i,viewTransition:s,children:l,...f},u){let c=Ie(i,{relative:f.relative}),p=ne(),m=w.useContext(oa),{navigator:S,basename:b}=w.useContext(K),k=m!=null&&ir(c)&&s===!0,x=S.encodeLocation?S.encodeLocation(c).pathname:c.pathname,E=p.pathname,A=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(E=E.toLowerCase(),A=A?A.toLowerCase():null,x=x.toLowerCase()),A&&b&&(A=te(A,b)||A);const P=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let v=E===x||!r&&E.startsWith(x)&&E.charAt(P)==="/",F=A!=null&&(A===x||!r&&A.startsWith(x)&&A.charAt(P)==="/"),T={isActive:v,isPending:F,isTransitioning:k},L=v?t:void 0,B;typeof n=="function"?B=n(T):B=[n,v?"active":null,F?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Le=typeof o=="function"?o(T):o;return w.createElement(lt,{...f,"aria-current":L,className:B,ref:u,style:Le,to:i,viewTransition:s},typeof l=="function"?l(T):l)});G.displayName="NavLink";const Kn=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:n,replace:r,state:o,method:i="get",action:s,onSubmit:l,relative:f,preventScrollReset:u,viewTransition:c,defaultShouldRevalidate:p,...m},S)=>{let{useTransitions:b}=w.useContext(K),k=tr(),x=ar(s,{relative:f}),E=i.toLowerCase()==="get"?"get":"post",A=typeof s=="string"&&la.test(s),P=v=>{if(l&&l(v),v.defaultPrevented)return;v.preventDefault();let F=v.nativeEvent.submitter,T=F?.getAttribute("formmethod")||i,L=()=>k(F||v.currentTarget,{fetcherKey:t,method:T,navigate:a,replace:r,state:o,relative:f,preventScrollReset:u,viewTransition:c,defaultShouldRevalidate:p});b&&a!==!1?w.startTransition(()=>L()):L()};return w.createElement("form",{ref:S,method:E,action:x,onSubmit:n?l:P,...m,"data-discover":!A&&e==="render"?"true":void 0})});Kn.displayName="Form";function ua({getKey:e,storageKey:t,...a}){let n=w.useContext(Mn),{basename:r}=w.useContext(K),o=ne(),i=sa();nr({getKey:e,storageKey:t});let s=w.useMemo(()=>{if(!n||!e)return null;let f=Ge(o,i,r,e);return f!==o.key?f:null},[]);if(!n||n.isSpaMode)return null;let l=((f,u)=>{if(!window.history.state||!window.history.state.key){let c=Math.random().toString(32).slice(2);window.history.replaceState({key:c},"")}try{let c=JSON.parse(sessionStorage.getItem(f)||"{}")[u||window.history.state.key];typeof c=="number"&&window.scrollTo(0,c)}catch(c){console.error(c),sessionStorage.removeItem(f)}}).toString();return a.nonce==null&&n?.nonce&&(a.nonce=n.nonce),w.createElement("script",{...a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${l})(${Et(JSON.stringify(t||Be))}, ${Et(JSON.stringify(s))})`}})}ua.displayName="ScrollRestoration";function ca(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ft(e){let t=w.useContext(Pn);return Pe(t,ca(e)),t}function qn(e){let t=w.useContext(oa);return Pe(t,ca(e)),t}function Qn(e,{target:t,replace:a,mask:n,state:r,preventScrollReset:o,relative:i,viewTransition:s,defaultShouldRevalidate:l,useTransitions:f}={}){let u=kn(),c=ne(),p=Ie(e,{relative:i});return w.useCallback(m=>{if(Bn(m,t)){m.preventDefault();let S=a!==void 0?a:He(c)===He(p),b=()=>u(e,{replace:S,mask:n,state:r,preventScrollReset:o,relative:i,viewTransition:s,defaultShouldRevalidate:l});f?w.startTransition(()=>b()):b()}},[c,u,p,a,n,r,t,e,o,i,s,l,f])}let Zn=0,er=()=>`__${String(++Zn)}__`;function tr(){let{router:e}=ft("useSubmit"),{basename:t}=w.useContext(K),a=Cn(),n=e.fetch,r=e.navigate;return w.useCallback(async(o,i={})=>{let{action:s,method:l,encType:f,formData:u,body:c}=Xn(o,t);i.navigate===!1?await n(i.fetcherKey||er(),a,i.action||s,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||l,formEncType:i.encType||f,flushSync:i.flushSync}):await r(i.action||s,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||l,formEncType:i.encType||f,replace:i.replace,state:i.state,fromRouteId:a,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,r,t,a])}function ar(e,{relative:t}={}){let{basename:a}=w.useContext(K),n=w.useContext(Fn);Pe(n,"useFormAction must be used inside a RouteContext");let[r]=n.matches.slice(-1),o={...Ie(e||".",{relative:t})},i=ne();if(e==null){o.search=i.search;let s=new URLSearchParams(o.search),l=s.getAll("index");if(l.some(f=>f==="")){s.delete("index"),l.filter(u=>u).forEach(u=>s.append("index",u));let f=s.toString();o.search=f?`?${f}`:""}}return(!e||e===".")&&r.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(o.pathname=o.pathname==="/"?a:ia([a,o.pathname])),He(o)}const Be="react-router-scroll-positions";let pe={};function Ge(e,t,a,n){let r=null;return n&&(a!=="/"?r=n({...e,pathname:te(e.pathname,a)||e.pathname},t):r=n(e,t)),r==null&&(r=e.key),r}function nr({getKey:e,storageKey:t}={}){let{router:a}=ft("useScrollRestoration"),{restoreScrollPosition:n,preventScrollReset:r}=qn("useScrollRestoration"),{basename:o}=w.useContext(K),i=ne(),s=sa(),l=In();w.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),rr(w.useCallback(()=>{if(l.state==="idle"){let f=Ge(i,s,o,e);pe[f]=window.scrollY}try{sessionStorage.setItem(t||Be,JSON.stringify(pe))}catch(f){Ye(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${f}).`)}window.history.scrollRestoration="auto"},[l.state,e,o,i,s,t])),typeof document<"u"&&(w.useLayoutEffect(()=>{try{let f=sessionStorage.getItem(t||Be);f&&(pe=JSON.parse(f))}catch{}},[t]),w.useLayoutEffect(()=>{let f=a?.enableScrollRestoration(pe,()=>window.scrollY,e?(u,c)=>Ge(u,c,o,e):void 0);return()=>f&&f()},[a,o,e]),w.useLayoutEffect(()=>{if(n!==!1){if(typeof n=="number"){window.scrollTo(0,n);return}try{if(i.hash){let f=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(f){f.scrollIntoView();return}}}catch{Ye(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}r!==!0&&window.scrollTo(0,0)}},[i,n,r]))}function rr(e,t){let{capture:a}={};w.useEffect(()=>{let n=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,n),()=>{window.removeEventListener("pagehide",e,n)}},[e,a])}function ir(e,{relative:t}={}){let a=w.useContext(En);Pe(a!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=ft("useViewTransitionState"),r=Ie(e,{relative:t});if(!a.isTransitioning)return!1;let o=te(a.currentLocation.pathname,n)||a.currentLocation.pathname,i=te(a.nextLocation.pathname,n)||a.nextLocation.pathname;return kt(r.pathname,i)!=null||kt(r.pathname,o)!=null}function or(){const[e,t]=w.useState(!1);return y.jsxs("nav",{className:"bg-[#27282c] border-b border-[#3c3d41] px-6 py-3 flex justify-between items-center relative",children:[y.jsx(lt,{to:"/",onClick:()=>t(!1),className:"text-sm font-bold tracking-widest uppercase text-[#e8e5de] hover:no-underline",children:"Mustafa Ali Eren"}),y.jsxs("div",{className:"hidden sm:flex gap-6 text-xs tracking-widest uppercase",children:[y.jsx(G,{to:"/about",className:({isActive:a})=>`transition-colors ${a?"text-[#e8e5de] font-bold":"text-[#888] hover:text-[#e8e5de]"}`,children:"About"}),y.jsx(G,{to:"/experience",className:({isActive:a})=>`transition-colors ${a?"text-[#e8e5de] font-bold":"text-[#888] hover:text-[#e8e5de]"}`,children:"Experience"}),y.jsx(G,{to:"/projects",className:({isActive:a})=>`transition-colors ${a?"text-[#e8e5de] font-bold":"text-[#888] hover:text-[#e8e5de]"}`,children:"Projects"}),y.jsx("a",{href:"/Mustafa-Ali-Eren-May26.pdf",target:"_blank",rel:"noopener noreferrer",className:"transition-colors text-[#888] hover:text-[#e8e5de]",children:"CV"})]}),y.jsx("button",{className:"sm:hidden text-xs tracking-widest uppercase text-[#888]",onClick:()=>t(a=>!a),"aria-label":"Toggle menu",children:e?"close":"menu"}),e&&y.jsxs("div",{className:"absolute top-full left-0 w-full bg-[#27282c] border-b border-[#3c3d41] flex flex-col px-6 pb-4 pt-2 z-50 sm:hidden",children:[y.jsx(G,{to:"/about",className:"py-1 text-xs tracking-widest uppercase text-[#888] hover:text-[#e8e5de]",onClick:()=>t(!1),children:"About"}),y.jsx(G,{to:"/experience",className:"py-1 text-xs tracking-widest uppercase text-[#888] hover:text-[#e8e5de]",onClick:()=>t(!1),children:"Experience"}),y.jsx(G,{to:"/projects",className:"py-1 text-xs tracking-widest uppercase text-[#888] hover:text-[#e8e5de]",onClick:()=>t(!1),children:"Projects"}),y.jsx("a",{href:"/Mustafa-Ali-Eren-May26.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-1 text-xs tracking-widest uppercase text-[#888] hover:text-[#e8e5de]",onClick:()=>t(!1),children:"CV"})]})]})}function Ve(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function sr(e){if(Array.isArray(e))return e}function lr(e){if(Array.isArray(e))return Ve(e)}function fr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ur(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,da(n.key),n)}}function cr(e,t,a){return t&&ur(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ye(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=ut(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||a.return==null||a.return()}finally{if(s)throw o}}}}function g(e,t,a){return(t=da(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function dr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,o,i,s=[],l=!0,f=!1;try{if(o=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=o.call(a)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(u){f=!0,r=u}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(f)throw r}}return s}}function hr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function It(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?It(Object(a),!0).forEach(function(n){g(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):It(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Fe(e,t){return sr(e)||mr(e,t)||ut(e,t)||hr()}function j(e){return lr(e)||dr(e)||ut(e)||pr()}function vr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function da(e){var t=vr(e,"string");return typeof t=="symbol"?t:t+""}function Ae(e){"@babel/helpers - typeof";return Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ae(e)}function ut(e,t){if(e){if(typeof e=="string")return Ve(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ve(e,t):void 0}}var Pt=function(){},ct={},ma={},ha=null,pa={mark:Pt,measure:Pt};try{typeof window<"u"&&(ct=window),typeof document<"u"&&(ma=document),typeof MutationObserver<"u"&&(ha=MutationObserver),typeof performance<"u"&&(pa=performance)}catch{}var gr=ct.navigator||{},Ct=gr.userAgent,Ft=Ct===void 0?"":Ct,U=ct,I=ma,Nt=ha,ve=pa;U.document;var z=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",va=~Ft.indexOf("MSIE")||~Ft.indexOf("Trident/"),Re,br=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,yr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,ga={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},xr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ba=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",ce="duotone",ya="sharp",xa="sharp-duotone",wa="chisel",Sa="etch",Aa="graphite",ka="jelly",Ea="jelly-duo",Ia="jelly-fill",Pa="notdog",Ca="notdog-duo",Fa="slab",Na="slab-press",Oa="thumbprint",ja="utility",Ta="utility-duo",La="utility-fill",_a="whiteboard",wr="Classic",Sr="Duotone",Ar="Sharp",kr="Sharp Duotone",Er="Chisel",Ir="Etch",Pr="Graphite",Cr="Jelly",Fr="Jelly Duo",Nr="Jelly Fill",Or="Notdog",jr="Notdog Duo",Tr="Slab",Lr="Slab Press",_r="Thumbprint",Rr="Utility",Mr="Utility Duo",Dr="Utility Fill",$r="Whiteboard",Ra=[C,ce,ya,xa,wa,Sa,Aa,ka,Ea,Ia,Pa,Ca,Fa,Na,Oa,ja,Ta,La,_a];Re={},g(g(g(g(g(g(g(g(g(g(Re,C,wr),ce,Sr),ya,Ar),xa,kr),wa,Er),Sa,Ir),Aa,Pr),ka,Cr),Ea,Fr),Ia,Nr),g(g(g(g(g(g(g(g(g(Re,Pa,Or),Ca,jr),Fa,Tr),Na,Lr),Oa,_r),ja,Rr),Ta,Mr),La,Dr),_a,$r);var zr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Wr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Ur=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Yr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Ma=["fak","fa-kit","fakd","fa-kit-duotone"],Ot={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Hr=["kit"],Br="kit",Gr="kit-duotone",Vr="Kit",Xr="Kit Duotone";g(g({},Br,Vr),Gr,Xr);var Jr={kit:{"fa-kit":"fak"}},Kr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},qr={kit:{fak:"fa-kit"}},jt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Me,ge={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Zr="classic",ei="duotone",ti="sharp",ai="sharp-duotone",ni="chisel",ri="etch",ii="graphite",oi="jelly",si="jelly-duo",li="jelly-fill",fi="notdog",ui="notdog-duo",ci="slab",di="slab-press",mi="thumbprint",hi="utility",pi="utility-duo",vi="utility-fill",gi="whiteboard",bi="Classic",yi="Duotone",xi="Sharp",wi="Sharp Duotone",Si="Chisel",Ai="Etch",ki="Graphite",Ei="Jelly",Ii="Jelly Duo",Pi="Jelly Fill",Ci="Notdog",Fi="Notdog Duo",Ni="Slab",Oi="Slab Press",ji="Thumbprint",Ti="Utility",Li="Utility Duo",_i="Utility Fill",Ri="Whiteboard";Me={},g(g(g(g(g(g(g(g(g(g(Me,Zr,bi),ei,yi),ti,xi),ai,wi),ni,Si),ri,Ai),ii,ki),oi,Ei),si,Ii),li,Pi),g(g(g(g(g(g(g(g(g(Me,fi,Ci),ui,Fi),ci,Ni),di,Oi),mi,ji),hi,Ti),pi,Li),vi,_i),gi,Ri);var Mi="kit",Di="kit-duotone",$i="Kit",zi="Kit Duotone";g(g({},Mi,$i),Di,zi);var Wi={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Ui={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Xe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Yi=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Da=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Qr,Yi),Hi=["solid","regular","light","thin","duotone","brands","semibold"],$a=[1,2,3,4,5,6,7,8,9,10],Bi=$a.concat([11,12,13,14,15,16,17,18,19,20]),Gi=["aw","fw","pull-left","pull-right"],Vi=[].concat(j(Object.keys(Ui)),Hi,Gi,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ge.GROUP,ge.SWAP_OPACITY,ge.PRIMARY,ge.SECONDARY]).concat($a.map(function(e){return"".concat(e,"x")})).concat(Bi.map(function(e){return"w-".concat(e)})),Xi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},D="___FONT_AWESOME___",Je=16,za="fa",Wa="svg-inline--fa",X="data-fa-i2svg",Ke="data-fa-pseudo-element",Ji="data-fa-pseudo-element-pending",dt="data-prefix",mt="data-icon",Tt="fontawesome-i2svg",Ki="async",qi=["HTML","HEAD","STYLE","SCRIPT"],Ua=["::before","::after",":before",":after"],Ya=(function(){try{return!0}catch{return!1}})();function de(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[C]}})}var Ha=d({},ga);Ha[C]=d(d(d(d({},{"fa-duotone":"duotone"}),ga[C]),Ot.kit),Ot["kit-duotone"]);var Qi=de(Ha),qe=d({},Yr);qe[C]=d(d(d(d({},{duotone:"fad"}),qe[C]),jt.kit),jt["kit-duotone"]);var Lt=de(qe),Qe=d({},Xe);Qe[C]=d(d({},Qe[C]),qr.kit);var ht=de(Qe),Ze=d({},Wi);Ze[C]=d(d({},Ze[C]),Jr.kit);de(Ze);var Zi=br,Ba="fa-layers-text",eo=yr,to=d({},zr);de(to);var ao=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],De=xr,no=[].concat(j(Hr),j(Vi)),oe=U.FontAwesomeConfig||{};function ro(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function io(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(I&&typeof I.querySelector=="function"){var oo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];oo.forEach(function(e){var t=Fe(e,2),a=t[0],n=t[1],r=io(ro(a));r!=null&&(oe[n]=r)})}var Ga={styleDefault:"solid",familyDefault:C,cssPrefix:za,replacementClass:Wa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oe.familyPrefix&&(oe.cssPrefix=oe.familyPrefix);var ae=d(d({},Ga),oe);ae.autoReplaceSvg||(ae.observeMutations=!1);var h={};Object.keys(Ga).forEach(function(e){Object.defineProperty(h,e,{enumerable:!0,set:function(a){ae[e]=a,se.forEach(function(n){return n(h)})},get:function(){return ae[e]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(t){ae.cssPrefix=t,se.forEach(function(a){return a(h)})},get:function(){return ae.cssPrefix}});U.FontAwesomeConfig=h;var se=[];function so(e){return se.push(e),function(){se.splice(se.indexOf(e),1)}}var q=Je,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lo(e){if(!(!e||!z)){var t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=I.head.childNodes,n=null,r=a.length-1;r>-1;r--){var o=a[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=o)}return I.head.insertBefore(t,n),e}}var fo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _t(){for(var e=12,t="";e-- >0;)t+=fo[Math.random()*62|0];return t}function re(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function pt(e){return e.classList?re(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Va(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uo(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Va(e[a]),'" ')},"").trim()}function Ne(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function vt(e){return e.size!==_.size||e.x!==_.x||e.y!==_.y||e.rotate!==_.rotate||e.flipX||e.flipY}function co(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:f}}function mo(e){var t=e.transform,a=e.width,n=a===void 0?Je:a,r=e.height,o=r===void 0?Je:r,i="";return va?i+="translate(".concat(t.x/q-n/2,"em, ").concat(t.y/q-o/2,"em) "):i+="translate(calc(-50% + ".concat(t.x/q,"em), calc(-50% + ").concat(t.y/q,"em)) "),i+="scale(".concat(t.size/q*(t.flipX?-1:1),", ").concat(t.size/q*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var ho=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Xa(){var e=za,t=Wa,a=h.cssPrefix,n=h.replacementClass,r=ho;if(a!==e||n!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Rt=!1;function $e(){h.autoAddCss&&!Rt&&(lo(Xa()),Rt=!0)}var po={mixout:function(){return{dom:{css:Xa,insertCss:$e}}},hooks:function(){return{beforeDOMElementCreation:function(){$e()},beforeI2svg:function(){$e()}}}},$=U||{};$[D]||($[D]={});$[D].styles||($[D].styles={});$[D].hooks||($[D].hooks={});$[D].shims||($[D].shims=[]);var O=$[D],Ja=[],Ka=function(){I.removeEventListener("DOMContentLoaded",Ka),ke=1,Ja.map(function(t){return t()})},ke=!1;z&&(ke=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),ke||I.addEventListener("DOMContentLoaded",Ka));function vo(e){z&&(ke?setTimeout(e,0):Ja.push(e))}function me(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?Va(e):"<".concat(t," ").concat(uo(n),">").concat(o.map(me).join(""),"</").concat(t,">")}function Mt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var ze=function(t,a,n,r){var o=Object.keys(t),i=o.length,s=a,l,f,u;for(n===void 0?(l=1,u=t[o[0]]):(l=0,u=n);l<i;l++)f=o[l],u=s(u,t[f],f,t);return u};function qa(e){return j(e).length!==1?null:e.codePointAt(0).toString(16)}function Dt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function et(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,o=Dt(t);typeof O.hooks.addPack=="function"&&!r?O.hooks.addPack(e,Dt(t)):O.styles[e]=d(d({},O.styles[e]||{}),o),e==="fas"&&et("fa",t)}var fe=O.styles,go=O.shims,Qa=Object.keys(ht),bo=Qa.reduce(function(e,t){return e[t]=Object.keys(ht[t]),e},{}),gt=null,Za={},en={},tn={},an={},nn={};function yo(e){return~no.indexOf(e)}function xo(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!yo(r)?r:null}var rn=function(){var t=function(o){return ze(fe,function(i,s,l){return i[l]=ze(s,o,{}),i},{})};Za=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),en=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),nn=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var a="far"in fe||h.autoFetchSvg,n=ze(go,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});tn=n.names,an=n.unicodes,gt=Oe(h.styleDefault,{family:h.familyDefault})};so(function(e){gt=Oe(e.styleDefault,{family:h.familyDefault})});rn();function bt(e,t){return(Za[e]||{})[t]}function wo(e,t){return(en[e]||{})[t]}function V(e,t){return(nn[e]||{})[t]}function on(e){return tn[e]||{prefix:null,iconName:null}}function So(e){var t=an[e],a=bt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Y(){return gt}var sn=function(){return{prefix:null,iconName:null,rest:[]}};function Ao(e){var t=C,a=Qa.reduce(function(n,r){return n[r]="".concat(h.cssPrefix,"-").concat(r),n},{});return Ra.forEach(function(n){(e.includes(a[n])||e.some(function(r){return bo[n].includes(r)}))&&(t=n)}),t}function Oe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?C:a,r=Qi[n][e];if(n===ce&&!e)return"fad";var o=Lt[n][e]||Lt[n][r],i=e in O.styles?e:null,s=o||i||null;return s}function ko(e){var t=[],a=null;return e.forEach(function(n){var r=xo(h.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function $t(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var zt=Da.concat(Ma);function je(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,o=$t(e.filter(function(m){return zt.includes(m)})),i=$t(e.filter(function(m){return!zt.includes(m)})),s=o.filter(function(m){return r=m,!ba.includes(m)}),l=Fe(s,1),f=l[0],u=f===void 0?null:f,c=Ao(o),p=d(d({},ko(i)),{},{prefix:Oe(u,{family:c})});return d(d(d({},p),Co({values:e,family:c,styles:fe,config:h,canonical:p,givenPrefix:r})),Eo(n,r,p))}function Eo(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var o=t==="fa"?on(r):{},i=V(n,r);return r=o.iconName||i||r,n=o.prefix||n,n==="far"&&!fe.far&&fe.fas&&!h.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var Io=Ra.filter(function(e){return e!==C||e!==ce}),Po=Object.keys(Xe).filter(function(e){return e!==C}).map(function(e){return Object.keys(Xe[e])}).flat();function Co(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,o=r===void 0?"":r,i=e.styles,s=i===void 0?{}:i,l=e.config,f=l===void 0?{}:l,u=a===ce,c=t.includes("fa-duotone")||t.includes("fad"),p=f.familyDefault==="duotone",m=n.prefix==="fad"||n.prefix==="fa-duotone";if(!u&&(c||p||m)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Io.includes(a)){var S=Object.keys(s).find(function(k){return Po.includes(k)});if(S||f.autoFetchSvg){var b=Ur.get(a).defaultShortPrefixId;n.prefix=b,n.iconName=V(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||o==="fa")&&(n.prefix=Y()||"fas"),n}var Fo=(function(){function e(){fr(this,e),this.definitions={}}return cr(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=d(d({},a.definitions[s]||{}),i[s]),et(s,i[s]);var l=ht[C][s];l&&et(l,i[s]),rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,f=i.icon,u=f[2];a[s]||(a[s]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(a[s][c]=f)}),a[s][l]=f}),a}}])})(),Wt=[],Z={},ee={},No=Object.keys(ee);function Oo(e,t){var a=t.mixoutsTo;return Wt=e,Z={},Object.keys(ee).forEach(function(n){No.indexOf(n)===-1&&delete ee[n]}),Wt.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),Ae(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=r[i][s]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(i){Z[i]||(Z[i]=[]),Z[i].push(o[i])})}n.provides&&n.provides(ee)}),a}function tt(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var o=Z[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(n))}),t}function J(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=Z[e]||[];r.forEach(function(o){o.apply(null,a)})}function H(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ee[e]?ee[e].apply(null,t):void 0}function at(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||Y();if(t)return t=V(a,t)||t,Mt(ln.definitions,a,t)||Mt(O.styles,a,t)}var ln=new Fo,jo=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,J("noAuto")},To={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(J("beforeI2svg",t),H("pseudoElements2svg",t),H("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,vo(function(){_o({autoReplaceSvgRoot:a}),J("watch",t)})}},Lo={icon:function(t){if(t===null)return null;if(Ae(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:V(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Oe(t[0]);return{prefix:n,iconName:V(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(h.cssPrefix,"-"))>-1||t.match(Zi))){var r=je(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=Y();return{prefix:o,iconName:V(o,t)||t}}}},N={noAuto:jo,config:h,dom:To,parse:Lo,library:ln,findIconDefinition:at,toHtml:me},_o=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?I:a;(Object.keys(O.styles).length>0||h.autoFetchSvg)&&z&&h.autoReplaceSvg&&N.dom.i2svg({node:n})};function Te(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return me(n)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var n=I.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Ro(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(vt(i)&&a.found&&!n.found){var s=a.width,l=a.height,f={x:s/l/2,y:.5};r.style=Ne(d(d({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Mo(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(h.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:i}),children:n}]}]}function Do(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function yt(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,f=e.extra,u=e.watchable,c=u===void 0?!1:u,p=n.found?n:a,m=p.width,S=p.height,b=[h.replacementClass,o?"".concat(h.cssPrefix,"-").concat(o):""].filter(function(v){return f.classes.indexOf(v)===-1}).filter(function(v){return v!==""||!!v}).concat(f.classes).join(" "),k={children:[],attributes:d(d({},f.attributes),{},{"data-prefix":r,"data-icon":o,class:b,role:f.attributes.role||"img",viewBox:"0 0 ".concat(m," ").concat(S)})};!Do(f.attributes)&&!f.attributes["aria-hidden"]&&(k.attributes["aria-hidden"]="true"),c&&(k.attributes[X]="");var x=d(d({},k),{},{prefix:r,iconName:o,main:a,mask:n,maskId:l,transform:i,symbol:s,styles:d({},f.styles)}),E=n.found&&a.found?H("generateAbstractMask",x)||{children:[],attributes:{}}:H("generateAbstractIcon",x)||{children:[],attributes:{}},A=E.children,P=E.attributes;return x.children=A,x.attributes=P,s?Mo(x):Ro(x)}function Ut(e){var t=e.content,a=e.width,n=e.height,r=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=d(d({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[X]="");var f=d({},o.styles);vt(r)&&(f.transform=mo({transform:r,width:a,height:n}),f["-webkit-transform"]=f.transform);var u=Ne(f);u.length>0&&(l.style=u);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function $o(e){var t=e.content,a=e.extra,n=d(d({},a.attributes),{},{class:a.classes.join(" ")}),r=Ne(a.styles);r.length>0&&(n.style=r);var o=[];return o.push({tag:"span",attributes:n,children:[t]}),o}var We=O.styles;function nt(e){var t=e[0],a=e[1],n=e.slice(4),r=Fe(n,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(De.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(De.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(De.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var zo={found:!1,width:512,height:512};function Wo(e,t){!Ya&&!h.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function rt(e,t){var a=t;return t==="fa"&&h.styleDefault!==null&&(t=Y()),new Promise(function(n,r){if(a==="fa"){var o=on(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&We[t]&&We[t][e]){var i=We[t][e];return n(nt(i))}Wo(e,t),n(d(d({},zo),{},{icon:h.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}var Yt=function(){},it=h.measurePerformance&&ve&&ve.mark&&ve.measure?ve:{mark:Yt,measure:Yt},ie='FA "7.2.0"',Uo=function(t){return it.mark("".concat(ie," ").concat(t," begins")),function(){return fn(t)}},fn=function(t){it.mark("".concat(ie," ").concat(t," ends")),it.measure("".concat(ie," ").concat(t),"".concat(ie," ").concat(t," begins"),"".concat(ie," ").concat(t," ends"))},xt={begin:Uo,end:fn},xe=function(){};function Ht(e){var t=e.getAttribute?e.getAttribute(X):null;return typeof t=="string"}function Yo(e){var t=e.getAttribute?e.getAttribute(dt):null,a=e.getAttribute?e.getAttribute(mt):null;return t&&a}function Ho(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(h.replacementClass)}function Bo(){if(h.autoReplaceSvg===!0)return we.replace;var e=we[h.autoReplaceSvg];return e||we.replace}function Go(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function Vo(e){return I.createElement(e)}function un(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Go:Vo:a;if(typeof e=="string")return I.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(un(i,{ceFn:n}))}),r}function Xo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var we={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(un(r),a)}),a.getAttribute(X)===null&&h.keepOriginalSource){var n=I.createComment(Xo(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~pt(a).indexOf(h.replacementClass))return we.replace(t);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(s,l){return l===h.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=n.map(function(s){return me(s)}).join(`
`);a.setAttribute(X,""),a.innerHTML=i}};function Bt(e){e()}function cn(e,t){var a=typeof t=="function"?t:xe;if(e.length===0)a();else{var n=Bt;h.mutateApproach===Ki&&(n=U.requestAnimationFrame||Bt),n(function(){var r=Bo(),o=xt.begin("mutate");e.map(r),o(),a()})}}var wt=!1;function dn(){wt=!0}function ot(){wt=!1}var Ee=null;function Gt(e){if(Nt&&h.observeMutations){var t=e.treeCallback,a=t===void 0?xe:t,n=e.nodeCallback,r=n===void 0?xe:n,o=e.pseudoElementsCallback,i=o===void 0?xe:o,s=e.observeMutationsRoot,l=s===void 0?I:s;Ee=new Nt(function(f){if(!wt){var u=Y();re(f).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Ht(c.addedNodes[0])&&(h.searchPseudoElements&&i(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&h.searchPseudoElements&&i([c.target],!0),c.type==="attributes"&&Ht(c.target)&&~ao.indexOf(c.attributeName))if(c.attributeName==="class"&&Yo(c.target)){var p=je(pt(c.target)),m=p.prefix,S=p.iconName;c.target.setAttribute(dt,m||u),S&&c.target.setAttribute(mt,S)}else Ho(c.target)&&r(c.target)})}}),z&&Ee.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jo(){Ee&&Ee.disconnect()}function Ko(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(n[i]=s.join(":").trim()),n},{})),a}function qo(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=je(pt(e));return r.prefix||(r.prefix=Y()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=wo(r.prefix,e.innerText)||bt(r.prefix,qa(e.innerText))),!r.iconName&&h.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Qo(e){var t=re(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function Zo(){return{iconName:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=qo(e),n=a.iconName,r=a.prefix,o=a.rest,i=Qo(e),s=tt("parseNodeAttributes",{},e),l=t.styleParser?Ko(e):[];return d({iconName:n,prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var es=O.styles;function mn(e){var t=h.autoReplaceSvg==="nest"?Vt(e,{styleParser:!1}):Vt(e);return~t.extra.classes.indexOf(Ba)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}function ts(){return[].concat(j(Ma),j(Da))}function Xt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var a=I.documentElement.classList,n=function(c){return a.add("".concat(Tt,"-").concat(c))},r=function(c){return a.remove("".concat(Tt,"-").concat(c))},o=h.autoFetchSvg?ts():ba.concat(Object.keys(es));o.includes("fa")||o.push("fa");var i=[".".concat(Ba,":not([").concat(X,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(X,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=re(e.querySelectorAll(i))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=xt.begin("onTree"),f=s.reduce(function(u,c){try{var p=mn(c);p&&u.push(p)}catch(m){Ya||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,c){Promise.all(f).then(function(p){cn(p,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),c(p)})})}function as(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mn(e).then(function(a){a&&cn([a],t)})}function ns(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:at(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:at(r||{})),e(n,d(d({},a),{},{mask:r}))}}var rs=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?_:n,o=a.symbol,i=o===void 0?!1:o,s=a.mask,l=s===void 0?null:s,f=a.maskId,u=f===void 0?null:f,c=a.classes,p=c===void 0?[]:c,m=a.attributes,S=m===void 0?{}:m,b=a.styles,k=b===void 0?{}:b;if(t){var x=t.prefix,E=t.iconName,A=t.icon;return Te(d({type:"icon"},t),function(){return J("beforeDOMElementCreation",{iconDefinition:t,params:a}),yt({icons:{main:nt(A),mask:l?nt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:E,transform:d(d({},_),r),symbol:i,maskId:u,extra:{attributes:S,styles:k,classes:p}})})}},is={mixout:function(){return{icon:ns(rs)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Xt,a.nodeCallback=as,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?I:n,o=a.callback,i=o===void 0?function(){}:o;return Xt(r,i)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,o=n.prefix,i=n.transform,s=n.symbol,l=n.mask,f=n.maskId,u=n.extra;return new Promise(function(c,p){Promise.all([rt(r,o),l.iconName?rt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var S=Fe(m,2),b=S[0],k=S[1];c([a,yt({icons:{main:b,mask:k},prefix:o,iconName:r,transform:i,symbol:s,maskId:f,extra:u,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,o=a.main,i=a.transform,s=a.styles,l=Ne(s);l.length>0&&(r.style=l);var f;return vt(i)&&(f=H("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),n.push(f||o.icon),{children:n,attributes:r}}}},os={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,o=r===void 0?[]:r;return Te({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:a,params:n});var i=[];return a(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(j(o)).join(" ")},children:i}]})}}}},ss={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,o=r===void 0?[]:r,i=n.attributes,s=i===void 0?{}:i,l=n.styles,f=l===void 0?{}:l;return Te({type:"counter",content:a},function(){return J("beforeDOMElementCreation",{content:a,params:n}),$o({content:a.toString(),extra:{attributes:s,styles:f,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(j(o))}})})}}}},ls={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?_:r,i=n.classes,s=i===void 0?[]:i,l=n.attributes,f=l===void 0?{}:l,u=n.styles,c=u===void 0?{}:u;return Te({type:"text",content:a},function(){return J("beforeDOMElementCreation",{content:a,params:n}),Ut({content:a,transform:d(d({},_),o),extra:{attributes:f,styles:c,classes:["".concat(h.cssPrefix,"-layers-text")].concat(j(s))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,o=n.extra,i=null,s=null;if(va){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();i=f.width/l,s=f.height/l}return Promise.resolve([a,Ut({content:a.innerHTML,width:i,height:s,transform:r,extra:o,watchable:!0})])}}},hn=new RegExp('"',"ug"),Jt=[1105920,1112319],Kt=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),Wr),Xi),Kr),st=Object.keys(Kt).reduce(function(e,t){return e[t.toLowerCase()]=Kt[t],e},{}),fs=Object.keys(st).reduce(function(e,t){var a=st[t];return e[t]=a[900]||j(Object.entries(a))[0][1],e},{});function us(e){var t=e.replace(hn,"");return qa(j(t)[0]||"")}function cs(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(hn,""),r=n.codePointAt(0),o=r>=Jt[0]&&r<=Jt[1],i=n.length===2?n[0]===n[1]:!1;return o||i||t}function ds(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(st[a]||{})[r]||fs[a]}function qt(e,t){var a="".concat(Ji).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var o=re(e.children),i=o.filter(function(F){return F.getAttribute(Ke)===t})[0],s=U.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),f=l.match(eo),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return e.removeChild(i),n();if(f&&c!=="none"&&c!==""){var p=s.getPropertyValue("content"),m=ds(l,u),S=us(p),b=f[0].startsWith("FontAwesome"),k=cs(s),x=bt(m,S),E=x;if(b){var A=So(S);A.iconName&&A.prefix&&(x=A.iconName,m=A.prefix)}if(x&&!k&&(!i||i.getAttribute(dt)!==m||i.getAttribute(mt)!==E)){e.setAttribute(a,E),i&&e.removeChild(i);var P=Zo(),v=P.extra;v.attributes[Ke]=t,rt(x,m).then(function(F){var T=yt(d(d({},P),{},{icons:{main:F,mask:sn()},prefix:m,iconName:E,extra:v,watchable:!0})),L=I.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=T.map(function(B){return me(B)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function ms(e){return Promise.all([qt(e,"::before"),qt(e,"::after")])}function hs(e){return e.parentNode!==document.head&&!~qi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ke)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var ps=function(t){return!!t&&Ua.some(function(a){return t.includes(a)})},vs=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(f){return f.trim()})});var r=ye(n),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(ps(i)){var s=Ua.reduce(function(l,f){return l.replace(f,"")},i);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function Qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(z){var a;if(t)a=e;else if(h.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=ye(document.styleSheets),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;try{var s=ye(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,u=vs(f.selectorText),c=ye(u),p;try{for(c.s();!(p=c.n()).done;){var m=p.value;n.add(m)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){h.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!n.size)return;var S=Array.from(n).join(", ");try{a=e.querySelectorAll(S)}catch{}}return new Promise(function(b,k){var x=re(a).filter(hs).map(ms),E=xt.begin("searchPseudoElements");dn(),Promise.all(x).then(function(){E(),ot(),b()}).catch(function(){E(),ot(),k()})})}}var gs={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Qt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?I:n;h.searchPseudoElements&&Qt(r)}}},Zt=!1,bs={mixout:function(){return{dom:{unwatch:function(){dn(),Zt=!0}}}},hooks:function(){return{bootstrap:function(){Gt(tt("mutationObserverCallbacks",{}))},noAuto:function(){Jo()},watch:function(a){var n=a.observeMutationsRoot;Zt?ot():Gt(tt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},ea=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},ys={mixout:function(){return{parse:{transform:function(a){return ea(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=ea(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(i/2*-1," -256)")},m={outer:s,inner:c,path:p};return{tag:"g",attributes:d({},m.outer),children:[{tag:"g",attributes:d({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),m.path)}]}]}}}},Ue={x:0,y:0,width:"100%",height:"100%"};function ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xs(e){return e.tag==="g"?e.children:[e]}var ws={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),o=r?je(r.split(" ").map(function(i){return i.trim()})):sn();return o.prefix||(o.prefix=Y()),a.mask=o,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,o=a.main,i=a.mask,s=a.maskId,l=a.transform,f=o.width,u=o.icon,c=i.width,p=i.icon,m=co({transform:l,containerWidth:c,iconWidth:f}),S={tag:"rect",attributes:d(d({},Ue),{},{fill:"white"})},b=u.children?{children:u.children.map(ta)}:{},k={tag:"g",attributes:d({},m.inner),children:[ta(d({tag:u.tag,attributes:d(d({},u.attributes),m.path)},b))]},x={tag:"g",attributes:d({},m.outer),children:[k]},E="mask-".concat(s||_t()),A="clip-".concat(s||_t()),P={tag:"mask",attributes:d(d({},Ue),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,x]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:xs(p)},P]};return n.push(v,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(E,")")},Ue)}),{children:n,attributes:r}}}},Ss={provides:function(t){var a=!1;U.matchMedia&&(a=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=d(d({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:d(d({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:d(d({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},As={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},ks=[po,is,os,ss,ls,gs,bs,ys,ws,Ss,As];Oo(ks,{mixoutsTo:N});N.noAuto;var ue=N.config;N.library;N.dom;var pn=N.parse;N.findIconDefinition;N.toHtml;var Es=N.icon;N.layer;N.text;N.counter;function Is(e){return e=e-0,e===e}function vn(e){return Is(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function Ps(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Q=new Map,Cs=1e3;function Fs(e){if(Q.has(e))return Q.get(e);const t={};let a=0;const n=e.length;for(;a<n;){const r=e.indexOf(";",a),o=r===-1?n:r,i=e.slice(a,o).trim();if(i){const s=i.indexOf(":");if(s>0){const l=i.slice(0,s).trim(),f=i.slice(s+1).trim();if(l&&f){const u=vn(l);t[u.startsWith("webkit")?Ps(u):u]=f}}}a=o+1}if(Q.size===Cs){const r=Q.keys().next().value;r&&Q.delete(r)}return Q.set(e,t),t}function gn(e,t,a={}){if(typeof t=="string")return t;const n=(t.children||[]).map(u=>gn(e,u)),r=t.attributes||{},o={};for(const[u,c]of Object.entries(r))switch(!0){case u==="class":{o.className=c;break}case u==="style":{o.style=Fs(String(c));break}case u.startsWith("aria-"):case u.startsWith("data-"):{o[u.toLowerCase()]=c;break}default:o[vn(u)]=c}const{style:i,role:s,"aria-label":l,...f}=a;return i&&(o.style=o.style?{...o.style,...i}:i),s&&(o.role=s),l&&(o["aria-label"]=l,o["aria-hidden"]="false"),e(t.tag,{...o,...f},...n)}var Ns=gn.bind(null,fa.createElement),aa=(e,t)=>{const a=w.useId();return e||(t?a:void 0)},Os=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},js="searchPseudoElementsFullScan"in ue?"7.0.0":"6.0.0",Ts=Number.parseInt(js)>=7,le="fa",R={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Ls={left:"fa-pull-left",right:"fa-pull-right"},_s={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Rs={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},M={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Ms(e){const t=ue.cssPrefix||ue.familyPrefix||le;return t===le?e:e.replace(new RegExp(String.raw`(?<=^|\s)${le}-`,"g"),`${t}-`)}function Ds(e){const{beat:t,fade:a,beatFade:n,bounce:r,shake:o,spin:i,spinPulse:s,spinReverse:l,pulse:f,fixedWidth:u,inverse:c,border:p,flip:m,size:S,rotation:b,pull:k,swapOpacity:x,rotateBy:E,widthAuto:A,className:P}=e,v=[];return P&&v.push(...P.split(" ")),t&&v.push(R.beat),a&&v.push(R.fade),n&&v.push(R.beatFade),r&&v.push(R.bounce),o&&v.push(R.shake),i&&v.push(R.spin),l&&v.push(R.spinReverse),s&&v.push(R.spinPulse),f&&v.push(R.pulse),u&&v.push(M.fixedWidth),c&&v.push(M.inverse),p&&v.push(M.border),m===!0&&v.push(M.flip),(m==="horizontal"||m==="both")&&v.push(M.flipHorizontal),(m==="vertical"||m==="both")&&v.push(M.flipVertical),S!=null&&v.push(Rs[S]),b!=null&&b!==0&&v.push(_s[b]),k!=null&&v.push(Ls[k]),x&&v.push(M.swapOpacity),Ts?(E&&v.push(M.rotateBy),A&&v.push(M.widthAuto),(ue.cssPrefix||ue.familyPrefix||le)===le?v:v.map(Ms)):v}var $s=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function na(e){if(e)return $s(e)?e:pn.icon(e)}function zs(e){return Object.keys(e)}var ra=new Os("FontAwesomeIcon"),bn={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Ws=new Set(Object.keys(bn)),Se=fa.forwardRef((e,t)=>{const a={...bn,...e},{icon:n,mask:r,symbol:o,title:i,titleId:s,maskId:l,transform:f}=a,u=aa(l,!!r),c=aa(s,!!i),p=na(n);if(!p)return ra.error("Icon lookup is undefined",n),null;const m=Ds(a),S=typeof f=="string"?pn.transform(f):f,b=na(r),k=Es(p,{...m.length>0&&{classes:m},...S&&{transform:S},...b&&{mask:b},symbol:o,title:i,titleId:c,maskId:u});if(!k)return ra.error("Could not find icon",p),null;const{abstract:x}=k,E={ref:t};for(const A of zs(a))Ws.has(A)||(E[A]=a[A]);return Ns(x[0],E)});Se.displayName="FontAwesomeIcon";var Us={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ys={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},Hs={prefix:"fab",iconName:"x-twitter",icon:[448,512,[],"e61b","M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"]};function Bs(){return y.jsxs("footer",{className:"bg-[#27282c] border-t border-[#3c3d41] px-6 py-4 flex flex-wrap justify-between items-center gap-3",children:[y.jsxs("span",{className:"text-xs text-[#888] tracking-wide",children:["© ",new Date().getFullYear()," Mustafa Ali Eren  · "," ",y.jsx("a",{href:"mailto:mustafalieren@proton.me",className:"hover:text-[#e8e5de] transition-colors",children:"mustafalieren@proton.me"})]}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("a",{href:"https://www.linkedin.com/in/mustafa-ali-eren-1b3674167/",target:"_blank",rel:"noopener noreferrer",className:"text-[#888] hover:text-[#e8e5de] transition-colors","aria-label":"LinkedIn",children:y.jsx(Se,{icon:Ys,size:"lg"})}),y.jsx("a",{href:"https://twitter.com/zehirlibrowni",target:"_blank",rel:"noopener noreferrer",className:"text-[#888] hover:text-[#e8e5de] transition-colors","aria-label":"X / Twitter",children:y.jsx(Se,{icon:Hs,size:"lg"})}),y.jsx("a",{href:"https://github.com/Xinacris",target:"_blank",rel:"noopener noreferrer",className:"text-[#888] hover:text-[#e8e5de] transition-colors","aria-label":"GitHub",children:y.jsx(Se,{icon:Us,size:"lg"})})]})]})}const Xs=()=>[{title:"Mustafa Ali Eren — Frontend Developer"},{name:"description",content:"Personal site of Mustafa Ali Eren, a Frontend Developer with 3+ years of production experience in React and TypeScript."},{name:"author",content:"Mustafa Ali Eren"},{name:"keywords",content:"frontend developer, react, typescript, tailwind, storybook, next.js"},{property:"og:title",content:"Mustafa Ali Eren — Frontend Developer"},{property:"og:description",content:"Frontend Developer with 3+ years shipping React + TypeScript across fintech products at Papara. Available for remote or Istanbul-based roles."},{property:"og:type",content:"website"},{property:"og:url",content:"https://xinacris.github.io"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@zehirlibrowni"},{name:"twitter:title",content:"Mustafa Ali Eren — Frontend Developer"},{name:"twitter:description",content:"Frontend Developer with 3+ years of production experience in React + TypeScript."}],Js=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"}];function Ks({children:e}){return y.jsxs("html",{lang:"en",children:[y.jsxs("head",{children:[y.jsx("meta",{charSet:"utf-8"}),y.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),y.jsx(Dn,{}),y.jsx($n,{})]}),y.jsxs("body",{children:[y.jsxs("div",{className:"min-h-screen flex flex-col",children:[y.jsx(or,{}),y.jsx("div",{className:"flex-grow",children:e}),y.jsx(Bs,{})]}),y.jsx(ua,{}),y.jsx(zn,{})]})]})}const qs=Nn(function(){return y.jsx(jn,{})}),Qs=On(function({error:t}){let a="Oops!",n="An unexpected error occurred.",r;return Tn(t)&&(a=t.status===404?"404":"Error",n=t.status===404?"The requested page could not be found.":t.statusText||n),y.jsxs("main",{className:"p-8 max-w-3xl mx-auto",children:[y.jsx("h1",{className:"text-2xl font-bold mb-2",children:a}),y.jsx("p",{className:"text-gray-600 mb-4",children:n}),r]})});export{Qs as ErrorBoundary,Ks as Layout,qs as default,Js as links,Xs as meta};
