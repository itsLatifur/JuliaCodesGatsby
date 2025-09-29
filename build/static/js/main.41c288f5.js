/*! For license information please see main.41c288f5.js.LICENSE.txt */
(()=>{var e={219:(e,t,n)=>{"use strict";var r=n(3763),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?o:l[e.$$typeof]||i}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=o;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var i=p(n);i&&i!==h&&e(t,i,r)}var o=d(n);u&&(o=o.concat(u(n)));for(var l=s(t),m=s(n),g=0;g<o.length;++g){var y=o[g];if(!a[y]&&(!r||!r[y])&&(!m||!m[y])&&(!l||!l[y])){var x=f(n,y);try{c(t,y,x)}catch(v){}}}}return t}},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),m=Symbol.for("react.client.reference");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case o:case a:case d:case u:case h:return e;default:switch(e=e&&e.$$typeof){case s:case c:case p:case f:case l:return e;default:return t}}case r:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===o||e===a||e===d||e===u||"object"===typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===c||e.$$typeof===m||void 0!==e.getModuleId)},t.QP=g},579:(e,t,n)=>{"use strict";e.exports=n(1153)},853:(e,t,n)=>{"use strict";n.d(t,{A:()=>i,a:()=>r});const r={main:"#151517",flip:"#FFFFFF",inverse:"#FFFFFF",alt:"#201E26",altWhite:"#201E26",textMain:"#FFFFFF",grayText:"#ACACAC",formGray:"#3E3D43",textLight:"rgba(255, 255, 255, 0.85)",togglerFill:"#151517",outline:"rgba(255, 255, 255, 0.10)",cover:"rgba(13, 13, 13, 0.69)",formShadow:"0px 13.658536911010742px 40.975608825683594px 0px rgba(0, 0, 0, 0.62)"},i={main:"#FFFFFF",flip:"#000000",inverse:"#1A181F",alt:"#F4F4F4",altWhite:"#FFFFFF",textMain:"#000000",cover:"rgba(169, 169, 169, 0.69)",formGray:"#F8F8F8",textLight:"rgba(0, 0, 0, 0.72)",togglerFill:"#FFFFFF",grayText:"#6B6B6B",outline:"rgba(0, 0, 0, 0.10)",formShadow:"0px 13.658536911010742px 40.975608825683594px 0px rgba(116, 116, 116, 0.25)"}},1153:(e,t,n)=>{"use strict";var r=n(5043),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},1387:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var i;n.d(t,{AO:()=>u,Gh:()=>L,HS:()=>B,Oi:()=>l,Rr:()=>f,pX:()=>D,pb:()=>A,rc:()=>i,tH:()=>R,ue:()=>m,yD:()=>I,zR:()=>o}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(i||(i={}));const a="popstate";function o(e){return void 0===e&&(e={}),p((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return d("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:u(t)}),null,e)}function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,i){return void 0===n&&(n=null),r({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?f(t):t,{state:n,key:t&&t.key||i||Math.random().toString(36).substr(2,8)})}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p(e,t,n,o){void 0===o&&(o={});let{window:s=document.defaultView,v5Compat:f=!1}=o,p=s.history,h=i.Pop,m=null,g=y();function y(){return(p.state||{idx:null}).idx}function x(){h=i.Pop;let e=y(),t=null==e?null:e-g;g=e,m&&m({action:h,location:b.location,delta:t})}function v(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,p.replaceState(r({},p.state,{idx:g}),""));let b={get action(){return h},get location(){return e(s,p)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(a,x),m=e,()=>{s.removeEventListener(a,x),m=null}},createHref:e=>t(s,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h=i.Push;let r=d(b.location,e,t);n&&n(r,e),g=y()+1;let a=c(r,g),o=b.createHref(r);try{p.pushState(a,"",o)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(o)}f&&m&&m({action:h,location:b.location,delta:1})},replace:function(e,t){h=i.Replace;let r=d(b.location,e,t);n&&n(r,e),g=y();let a=c(r,g),o=b.createHref(r);p.replaceState(a,"",o),f&&m&&m({action:h,location:b.location,delta:0})},go:e=>p.go(e)};return b}var h;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let i=A(("string"===typeof t?f(t):t).pathname||"/",n);if(null==i)return null;let a=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let l=0;null==o&&l<a.length;++l){let e=T(i);o=_(a[l],e,r)}return o}function y(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(l(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=B([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),y(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))i(e,t,r);else i(e,t)})),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=x(r.join("/")),l=[];return l.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&l.push(...o),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const v=/^:[\w-]+$/,b=3,w=2,k=1,j=10,S=-2,C=e=>"*"===e;function E(e,t){let n=e.split("/"),r=n.length;return n.some(C)&&(r+=S),t&&(r+=w),n.filter((e=>!C(e))).reduce(((e,t)=>e+(v.test(t)?b:""===t?k:j)),r)}function _(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===a?t:t.slice(a.length)||"/",d=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),u=e.route;if(!d&&s&&n&&!r[r.length-1].route.index&&(d=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:B([a,d.pathname]),pathnameBase:N(B([a,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(a=B([a,d.pathnameBase]))}return o}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=l[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=i&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function T(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function P(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function $(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function I(e,t){let n=$(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function L(e,t,n,i){let a;void 0===i&&(i=!1),"string"===typeof e?a=f(e):(a=r({},e),l(!a.pathname||!a.pathname.includes("?"),P("?","pathname","search",a)),l(!a.pathname||!a.pathname.includes("#"),P("#","pathname","hash",a)),l(!a.search||!a.search.includes("#"),P("#","search","hash",a)));let o,s=""===e||""===a.pathname,c=s?"/":a.pathname;if(null==c)o=n;else{let e=t.length-1;if(!i&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let d=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?f(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:O(r),hash:M(i)}}(a,o),u=c&&"/"!==c&&c.endsWith("/"),p=(s||"."===c)&&n.endsWith("/");return d.pathname.endsWith("/")||!u&&!p||(d.pathname+="/"),d}const B=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class R extends Error{}function D(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const F=["post","put","patch","delete"],W=(new Set(F),["get",...F]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},1457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AppWrapper:()=>K,DevopsPage:()=>Z,EA1:()=>te,Landing:()=>M,MarketingSite:()=>Re,Movie:()=>W,NotFound:()=>xt,Scheduler:()=>be,VulnPage:()=>X});var r=n(5043),i=n(3216),a=n(9547),o=n(5475),l=n(4574),s=n(3283),c=n(3819),d=n(6078);const u=[{id:"schedule",name:"Content Variety & Scheduling",description:"Led research & design to solve content staleness problems",url:"schedule",order:1,poster:n(5745)},{id:"marketing-site",name:"Redesigning B2B Signup",description:"Reimagining the signup flow for Atmosphere TV",url:"marketing-site",order:2,video:n(8545),poster:n(6596),autoplay:!0}];var f=n(579);const p=(0,l.Ay)(a.IN)`
  /* On mobile, cards have no special styling */
  padding: 0;
  padding-bottom: ${e=>e.noBottomPadding?"0":"24px"};
  &:not(:first-of-type) {
    margin: 24px auto 0;
  }
  &.hero-card {
    margin: 24px auto 0;
  }

  /* On tablet and larger, re-introduce card styles but reduce top/bottom padding */
  @media (min-width: 768px) {
    padding: 8px 24px 8px 24px;
    border-radius: 8px;
    border: 1px solid
      ${e=>"dark"===e.mode?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.1)"};
    padding-bottom: ${e=>e.noBottomPadding?"0":"8px"};
    &:not(:first-of-type) {
      margin: 32px auto 0;
    }
    &.hero-card {
      margin: 32px auto 0;
    }
  }

  @media (${a.Ay.large}) {
    padding: 8px 40px 8px 40px;
    padding-bottom: ${e=>e.noBottomPadding?"0":"8px"};
    &:not(:first-of-type) {
      margin: 48px auto 0;
    }
    &.hero-card {
      margin: 48px auto 0;
    }
  }
`,h=l.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  background: ${e=>{let{theme:t}=e;return t.main}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.outline}};
  transition:
    opacity 180ms ease,
    transform 220ms ease;
  opacity: ${e=>e.$shown?1:0};
  transform: translateY(${e=>e.$shown?"0":"-8px"});
  pointer-events: ${e=>e.$shown?"auto":"none"};
`,m=(0,l.Ay)(a.Z6)`
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
`,g=l.Ay.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
`,y=l.Ay.div`
  display: grid;
  align-items: center;
  gap: 24px;
  grid-template-columns: 1fr;

  &.with-image {
    @media (${a.Ay.large}) {
      gap: 40px;
      grid-template-columns: 1fr 1fr;
    }
  }
`,x=(0,l.Ay)(y)`
  margin-top: 24px;
  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 48px;
    margin-top: 48px;
  }
  @media (${a.Ay.large}) {
    margin-top: 0;
  }
`,v=(0,l.Ay)(a.DZ)`
  font-weight: 500;
  margin: 0 0 16px 0;
  padding: 0;
  line-height: 1.05;
  font-size: clamp(32px, 5vw, 40px);
`,b=(0,l.Ay)(a.fV)`
  font-size: 18px;
  font-weight: 400;
  margin: -4px 0 0 0;
  opacity: 0.9;
  line-height: 1.3;
`,w=l.Ay.img`
  width: 100%;
  max-width: 200px; /* smaller on mobile */
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid white;
  margin: 0 auto;
  display: block;

  /* Tablet */
  @media (min-width: 768px) {
    max-width: 260px;
  }

  /* Desktop and up: unchanged */
  @media (${a.Ay.large}) {
    max-width: 300px;
  }
`,k=l.Ay.div`
  color: white;
  mix-blend-mode: difference;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  /* Match other sections: no internal width constraint or auto-centering */
  @media (${a.Ay.large}) {
    grid-row: 1;
    grid-column: 1 / 2;
  }
`,j=(0,l.Ay)(k)`
  /* Mobile/Tablet: show text below image */
  grid-row: 2;

  @media (${a.Ay.large}) {
    /* Desktop: text left as before */
    grid-row: 1;
    grid-column: 1 / 2;
  }
`,S=(0,l.Ay)(w)`
  /* Mobile/Tablet: show image first */
  grid-row: 1;

  @media (${a.Ay.large}) {
    /* Desktop: image right as before */
    grid-row: 1;
    grid-column: 2 / 3;
    justify-self: end;
  }
`,C=(0,l.Ay)(o.N_)`
  color: inherit;
  text-decoration: none;
`,E=l.Ay.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    justify-content: center;
  }
`,_=l.Ay.hr`
  width: 100%;
  border: 0;
  height: 1px;
  margin: 18px 0 0 0;
  position: relative;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${e=>{let{theme:t}=e;return t.outline}}AA 25%,
    ${e=>{let{theme:t}=e;return t.outline}}CC 50%,
    ${e=>{let{theme:t}=e;return t.outline}}AA 75%,
    transparent 100%
  );
  @media (max-width: 767px) {
    margin-top: 16px;
  }
`,z=l.Ay.a`
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  font-size: 14px;
  text-align: center;
  flex-grow: 1;
  border: 1px solid;
  background-color: ${e=>{let{className:t,theme:n}=e;return t&&t.includes("primary")?n.textMain:"transparent"}};
  color: ${e=>{let{className:t,theme:n}=e;return t&&t.includes("primary")?n.main:n.textMain}};
  border-color: ${e=>{let{theme:t}=e;return t.textMain}};
  ${e=>{let{mode:t}=e;return"light"===t&&"\n      mix-blend-mode: difference;\n    "}}

  &:hover {
    background-color: ${e=>{let{className:t,theme:n}=e;return t&&t.includes("primary")?n.textMain+"CC":n.textMain+"22"}};
    color: ${e=>{let{className:t,theme:n}=e;return t&&t.includes("primary")?n.main:n.textMain}};
  }

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: initial;
    flex-grow: 0;
  }
`,T=l.Ay.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  list-style: none;
  @media (max-width: 767px) {
    justify-content: center;
  }
  &.in-hero-skills {
    @media (max-width: 1199px) {
      display: none;
    }
  }
  &.below-hero-skills {
    display: flex;
    @media (min-width: 1200px) {
      display: none;
    }
  }
`,A=l.Ay.li`
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.outline}}99;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  background: ${e=>{let{theme:t}=e;return t.textMain}}12;
  backdrop-filter: saturate(140%) blur(2px);
`,P=l.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;

  @media (${a.Ay.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,$=l.Ay.div`
  position: relative;
  border: 1px solid ${e=>{let{theme:t}=e;return t.outline}};
  border-radius: 10px;
  padding: 14px 16px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: ${e=>{let{theme:t}=e;return t.main}}08;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  text-decoration: none;
  transition:
    border-color 0.25s ease,
    background-color 0.25s ease,
    transform 0.25s ease;
  will-change: transform;

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.textMain}}66;
    background: ${e=>{let{theme:t}=e;return t.main}}0E;
  }
  &:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.textMain}};
    outline-offset: 2px;
  }
`,I=l.Ay.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 1.25;
`,L=l.Ay.span`
  font-size: 11px;
  font-weight: 400;
  opacity: 0.75;
  letter-spacing: 0.3px;
`,B=l.Ay.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  border-radius: 4px;
`,N=l.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 48px;
    margin-top: 48px;
  }
`,O=l.Ay.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 25px;
  margin-bottom: 18px;
`,M=e=>{var t,n,l;let{toggleMode:w,mode:M,spread:R,setDisableScroll:D}=e;const F="first"===R?"growBlack":"second"===R?"growWhite":"",W=(0,i.zy)(),H=(0,r.useRef)(null),[V,U]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e="/projects"===W.pathname,t="/"===W.pathname&&"#projects"===W.hash;if(e||t){const e=document.getElementById("projects");if(e){const t=-100,n=e.getBoundingClientRect().top+window.pageYOffset+t;window.scrollTo({top:n,behavior:"smooth"})}const t=document.title,n=document.querySelector('meta[name="description"]'),r=n?n.getAttribute("content"):void 0;document.title="Projects \u2014 Latifur Rahman";const i="Selected projects by Latifur Rahman: Content Variety & Scheduling, Redesigning B2B Signup, and more.";return n&&n.setAttribute("content",i),()=>{document.title=t,n&&"string"===typeof r&&n.setAttribute("content",r)}}}),[W.pathname,W.hash]),(0,r.useEffect)((()=>{const e=H.current;if(!e||"undefined"===typeof IntersectionObserver)return;const t=new IntersectionObserver((e=>{const t=e[0];U(!t.isIntersecting)}),{threshold:0});return t.observe(e),()=>t.disconnect()}),[]),(0,f.jsxs)(a.gZ,{style:{position:"relative",height:D?"100vh":"unset"},children:[(0,f.jsx)(h,{$shown:V,children:(0,f.jsx)(m,{children:(0,f.jsx)(g,{children:s.vB.name})})}),(0,f.jsx)(d.K,{className:F}),(0,f.jsx)(c.so,{mode:M,toggleMode:w}),(0,f.jsx)(p,{mode:M,className:"hero-card",ref:H,children:(0,f.jsx)(a.Z6,{style:{paddingTop:0,paddingBottom:0,marginBottom:36},children:(0,f.jsx)(y,{children:(0,f.jsxs)(k,{children:[(0,f.jsx)(v,{children:s.vB.name}),(null===(t=s.vB.role)||void 0===t?void 0:t.length)>0&&(0,f.jsx)(b,{children:s.vB.role.join(" \xb7 ")}),(0,f.jsx)(a.fz,{style:{marginTop:"24px"},children:s.vB.description}),!1!==s.vB.showSkills&&Array.isArray(s.vB.skills)&&s.vB.skills.length>0&&(0,f.jsx)(T,{className:"in-hero-skills",children:s.vB.skills.slice().map(((e,t)=>({s:e,idx:t}))).sort(((e,t)=>{const n="object"===typeof e.s&&Number.isFinite(e.s.order)?e.s.order:1/0,r="object"===typeof t.s&&Number.isFinite(t.s.order)?t.s.order:1/0;return n===r?e.idx-t.idx:n-r})).map(((e,t)=>{let{s:n}=e;const r="string"===typeof n?{label:n}:n;return(0,f.jsx)(A,{children:r.label},t)}))}),(0,f.jsx)(_,{}),(0,f.jsxs)(E,{children:[(0,f.jsx)(z,{href:"#projects",className:"primary",mode:M,children:"View Projects"}),(0,f.jsx)(z,{href:s.vB.resumeLink,target:"_blank",rel:"noopener noreferrer",className:"secondary",mode:M,children:"View Resume"})]})]})})})}),!1!==s.vB.showSkills&&Array.isArray(s.vB.skills)&&s.vB.skills.length>0&&(0,f.jsx)(a.Z6,{style:{paddingTop:0,paddingBottom:0,marginTop:-12,marginBottom:12},children:(0,f.jsx)(T,{className:"below-hero-skills",children:s.vB.skills.slice().map(((e,t)=>({s:e,idx:t}))).sort(((e,t)=>{const n="object"===typeof e.s&&Number.isFinite(e.s.order)?e.s.order:1/0,r="object"===typeof t.s&&Number.isFinite(t.s.order)?t.s.order:1/0;return n===r?e.idx-t.idx:n-r})).map(((e,t)=>{let{s:n}=e;const r="string"===typeof n?{label:n}:n;return(0,f.jsx)(A,{children:r.label},t)}))})}),s.vB.showExperiences&&(0,f.jsx)(p,{mode:M,children:(0,f.jsxs)(a.Z6,{style:{paddingTop:0,paddingBottom:0,marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"experience",children:"Experience"}),(0,f.jsx)(c.Je,{experiences:s.CT})]})}),(0,f.jsxs)(p,{mode:M,noBottomPadding:!0,children:[(0,f.jsx)("div",{children:(0,f.jsx)(a.Z6,{style:{margin:"0 auto",paddingBottom:0,paddingTop:36},children:(0,f.jsx)(a.fV,{id:"projects",children:"Projects"})})}),(0,f.jsx)(N,{children:u.slice().sort(((e,t)=>{const n=Number.isFinite(e.order)?e.order:1/0,r=Number.isFinite(t.order)?t.order:1/0;return n!==r?n-r:e.name.localeCompare(t.name)})).map((e=>(0,f.jsx)(a.Z6,{style:{margin:"0 auto"},children:e.video?(0,f.jsx)(c.zT,{name:e.name,image:e.video,poster:e.poster,url:e.url,description:e.description,autoplay:!!e.autoplay}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.N_,{to:e.url,children:(0,f.jsx)(O,{src:e.poster,alt:`${e.name} project thumbnail`,loading:"eager",fetchpriority:"high",decoding:"async"})}),(0,f.jsxs)("div",{style:{paddingTop:"0px",paddingLeft:"0px"},children:[(0,f.jsx)(a._B,{style:{textAlign:"left",margin:0,padding:0},onMouseDown:e=>e.preventDefault(),children:(0,f.jsx)(C,{to:e.url,children:e.name})}),(0,f.jsx)(a.fz,{style:{marginTop:"-4px"},children:e.description})]})]})},e.id)))})]}),(0,f.jsx)(p,{mode:M,children:(0,f.jsxs)(a.Z6,{style:{paddingTop:0,paddingBottom:0},children:[(0,f.jsx)(a.fV,{id:"about",children:"About"}),(0,f.jsxs)(x,{className:s.vB.showProfileImage?"with-image":"",children:[(0,f.jsx)(j,{children:(0,f.jsx)(a.fz,{style:{marginTop:0},children:null!==(n=s.vB.about)&&void 0!==n?n:s.vB.description})}),s.vB.showProfileImage&&(0,f.jsx)(S,{src:s.vB.profileImage,alt:s.vB.name,loading:"lazy",decoding:"async"})]}),!1!==s.vB.showCertifications&&Array.isArray(s.vB.certifications)&&s.vB.certifications.length>0&&(0,f.jsxs)("div",{style:{marginTop:16},children:[(0,f.jsx)(a._B,{style:{marginBottom:8},children:"Certifications"}),(0,f.jsx)(P,{children:s.vB.certifications.slice().sort(((e,t)=>{const n=Number.isFinite(e.order)?e.order:1/0,r=Number.isFinite(t.order)?t.order:1/0;if(n!==r)return n-r;const i=Number(e.year)||0;return(Number(t.year)||0)-i})).map(((e,t)=>(0,f.jsxs)($,{as:e.url?"a":"div",href:e.url||void 0,target:e.url?"_blank":void 0,rel:e.url?"noopener noreferrer":void 0,children:[e.icon?(0,f.jsx)(B,{alt:"",src:e.icon}):null,(0,f.jsx)(I,{children:e.name}),(0,f.jsxs)(L,{children:[e.issuer,e.year?` \u2022 ${e.year}`:""]})]},t)))})]})]})}),!1!==s.vB.showCollage&&(null===(l=s.OP.filter)||void 0===l?void 0:l.call(s.OP,(e=>!1!==(null===e||void 0===e?void 0:e.visible))).length)>0&&(0,f.jsx)(a.Z6,{style:{paddingTop:20},children:(0,f.jsx)(c.Kj,{})}),(0,f.jsx)(a.Z6,{style:{marginBottom:"10px"},children:(0,f.jsx)(c.NM,{})})]})};var R=n(9646);const D=l.Ay.div`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;

  @media (${a.Ay.large}) {
    flex-wrap: nowrap;
    gap: 100px;
  }
`,F=l.Ay.img`
  :hover {
    cursor: zoom-in;
  }
`,W=e=>{let{toggleMode:t,mode:n,spread:r}=e;const i="first"===r?"growBlack":"second"===r?"growWhite":"";return(0,f.jsxs)(a.gZ,{style:{position:"relative"},children:[(0,f.jsx)(d.K,{className:i}),(0,f.jsx)(c.so,{mode:n,toggleMode:t}),(0,f.jsxs)(a.IN,{style:{marginBottom:100,mixBlendMode:"difference"},children:[(0,f.jsx)(a.fV,{style:{marginBottom:35,mixBlendMode:"difference",color:"white"},children:"Movie Theater Case Study"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200},children:["Throughout my life I've been to the movie theater countless times. Originally, the only option to buy tickets was in person at the ticket stand, but with the popularity of the internet and mobile phones, purchasing tickets online has enabled all of us to have even more control over our movie theater experience, including selecting our seats. ",(0,f.jsx)("br",{}),(0,f.jsx)("br",{})," I've found a lot of these seat selection applications extremely unintuitive and frustrating to use, so I wanted to do a full case study to identify common pain points, and address potential solutions."]}),(0,f.jsxs)(D,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300,mixBlendMode:"difference",color:"white"},children:"Design Process"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{mixBlendMode:"difference",color:"white"},children:"My Role"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"As the sole designer, I was able to work on all stages of the design including: User Research, Sketching, Journey Maps, Low and High Fidelity Designs"})]})]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/lofi.6dae2f3a4e881159278e.png","_blank","noopener,noreferrer")},src:R.d6,style:{width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Personas"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200},children:["To ensure inclusivity and edge case users, I created a handful of user personas to represent many of the different user groups that this app will be targeting"," "]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/person1.93f376a9c081a38ef49d.png","_blank","noopener,noreferrer")},src:R.TQ,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/persona2.c62139dce34223c5e9c9.png","_blank","noopener,noreferrer")},src:R.Mc,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Journey Map"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Each of the user personas were then taken through the existing user experience journey within many of the popular movie theater applications found today. This helped to begin establishing pain points and better empathize with users at each step of the application."}),(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/journeyMap.e16467f492d79fb2f474.png","_blank","noopener,noreferrer")},src:R.Xe,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Pain Points"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Following the creation of user journey maps and storyboarding a handful of pain points were established a select few were chosen to be the primary focus due to their high feasibility and importance"}),(0,f.jsxs)(D,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Just Browsing"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Many users are in the mood to see a movie on a particular day, but aren't sure which movie they want to see. This makes many of the flows frustrating, as users can't see the availability of a theater until after they select a movie."})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Good Seats"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Many theaters will advertise having seats available for a showing, but they include the front row seats, which a large majority of viewers avoid. This leaves users feeling mislead."})]})]}),(0,f.jsxs)(D,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Large Groups"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"I found that every application handled groups differently. Some apps made assumptions about the needs of the user by forcing all of the seats to be in a row together. Other apps ignored the grouping of users, and as a result, users were given showings that wouldn't work for their large group"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Accessibility"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"A large amount of information necessary for those with disabilities is often not included on these apps and requires a phone call. Information such as, elevator locations, accessible seating, availability of assistive listening devices, sign language interpreters, etc."})]})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Sketching and Ideation"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"To begin addressing these pain points, I created 6 digital sketches for each of the main screens that would be necessary: Landing page, movie details, and seat selection. These sketches helped me come up with ideas for flows as well as create a logical informational hierarchy."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:20},children:[" ",(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/sketch1.8e26f14c4a1736ffd22b.png","_blank","noopener,noreferrer")},src:R.e2,style:{width:"calc(25% - 5px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/sketch2.d0d224aa0c906c578930.png","_blank","noopener,noreferrer")},src:R.X7,style:{width:"calc(25% - 5px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/sketch3.4b872d0284a8bdb38dd3.png","_blank","noopener,noreferrer")},src:R.SL,style:{width:"calc(25% - 5px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/sketch4.6963b63499e64afbdb15.png","_blank","noopener,noreferrer")},src:R.Zt,style:{width:"calc(25% - 5px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Establishing User Flow"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Once my low fidelity wireframes were complete, I created additional screens to handle scroll events, filters, and searching so that I had a fully clickable prototype."}),(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/userFlow.dc4456a997389461b7df.png","_blank","noopener,noreferrer")},src:R.uz,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Testing"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200},children:["We\u2019re looking to determine whether the main user flows that enable selecting a movie, date, time slot and seat are easy for users to complete. We\u2019re also looking to identify pain-points and challenges that could be impacting user retention and drop-off."," "]}),(0,f.jsx)(D,{children:(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Research Questions"}),(0,f.jsx)(a.fz,{children:"- Are there areas in the flow where users get stuck?"}),(0,f.jsx)(a.fz,{children:"- Do users find the application easy or difficult to use?"}),(0,f.jsx)(a.fz,{children:"- Are there features that the user seems to think are missing?"}),(0,f.jsx)(a.fz,{children:"- What are the stopping points in the application?"})]})}),(0,f.jsx)(D,{children:(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Participants Must"}),(0,f.jsx)(a.fz,{children:"- Have an awareness of movie theater ticket applications"}),(0,f.jsx)(a.fz,{children:"- Be somewhat tech literate (has used a smartphone before)"}),(0,f.jsx)(a.fz,{children:"- Two males, two females, and one nonbinary between the ages of 18 and 70"}),(0,f.jsx)(a.fz,{children:"- One user who requires as assitive device (screen reader, etc)"})]})}),(0,f.jsx)(D,{children:(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Methodology"}),(0,f.jsx)(a.fz,{children:"Unmoderated usability study"}),(0,f.jsxs)(a.fz,{children:[(0,f.jsx)("span",{style:{fontWeight:400},children:"Location: "}),"United States, Remote"]}),(0,f.jsxs)(a.fz,{children:[(0,f.jsx)("span",{style:{fontWeight:400},children:"Date: "})," Interviews will take place in the next few weeks"]}),(0,f.jsxs)(a.fz,{children:[(0,f.jsx)("span",{style:{fontWeight:400},children:"Length: "})," Sessions are not expected to last more than ~10 minutes"]})]})})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/research1.7bc8895981b09166eb32.png","_blank","noopener,noreferrer")},src:R.bo,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/research2.8c8db431c3a322bcea73.png","_blank","noopener,noreferrer")},src:R.WL,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Synthesizing Research Into Insights"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Comments, Questions and Answers were added as sticky notes and then categorized to establish common themes and recognize patterns."}),(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/synth.fb000b904aa4a876421e.png","_blank","noopener,noreferrer")},src:R.RG,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Changes Implemented from Research"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200},children:["From our research, we gathered that there were 3 primary pain points that were complicating the flow for users. The first related to filters, In general, the implementation of filters isn\u2019t super clear as to what it does and when it needs to be used. Second, was the issue of traffic/busy-ness, Users care about how busy theaters are, and its taking too many clicks for them to get this information. And lastly, users were left in the dark with theater selection, and in many cases were unable to identify that they even had the option to change theaters. ",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"We made a series of changes to address these pain points:"]}),(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/change1.6f66a9526e525314114b.png","_blank","noopener,noreferrer")},src:R.s$,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/change2.0c44b1255e571ee93270.png","_blank","noopener,noreferrer")},src:R.Zg,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/change3.bc0b6f96c48039c16efd.png","_blank","noopener,noreferrer")},src:R.eV,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Final High Fidelity Wireframes"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Finally, after spending some time finding and establishing a visual style for the application, I created the final high fidelity designs."}),(0,f.jsx)(F,{onClick:()=>{window.open("/static/media/hifi.e5e4ffdce10851ba21d9.png","_blank","noopener,noreferrer")},src:R.rM,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsxs)(D,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Lessons Learned"}),(0,f.jsx)(a.fz,{style:{maxWidth:700,marginTop:15},children:"This case study really helped me solidify the importance of user testing at the low fidelity stage. I got so caught up solving the original pain points that were found that I ended up creating new ones! User testing helped me take a step back and readdress the overall goal of the application and helped to identify many new paints points as well."})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Next Steps"}),(0,f.jsx)(a.fz,{style:{maxWidth:700,marginTop:15},children:"If I were to continue building out and improving this project, I would do another round of usability testing to ensure that the original paint points were accurately addressed. Once solidified, I would create a site map and design guide to help developers transition my designs into code."})]})]})]}),(0,f.jsx)(c.NM,{})]})},H=l.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  background: ${e=>{let{theme:t}=e;return t.main}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.outline}};
  transition:
    opacity 180ms ease,
    transform 220ms ease;
  opacity: ${e=>e.$shown?1:0};
  transform: translateY(${e=>e.$shown?"0":"-8px"});
  pointer-events: ${e=>e.$shown?"auto":"none"};
`,V=(0,l.Ay)(a.Z6)`
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
`,U=l.Ay.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
`,q=e=>{let{showAfterPX:t=100}=e;const[n,i]=(0,r.useState)(!1),a=(0,r.useRef)(0);return(0,r.useEffect)((()=>{const e=()=>{const e=window.scrollY||window.pageYOffset;i(e>t),a.current=e};return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[t]),(0,f.jsx)(H,{$shown:n,children:(0,f.jsx)(V,{children:(0,f.jsx)(U,{children:s.vB.name})})})},K=e=>{let{children:t}=e;function n(){const{pathname:e}=(0,i.zy)();return(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}const a="/"===(0,i.zy)().pathname;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{}),!a&&(0,f.jsx)(q,{showAfterPX:100}),t]})},Y=l.Ay.div`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;

  @media (${a.Ay.large}) {
    flex-wrap: nowrap;
    gap: 100px;
  }
`,Q=l.Ay.img`
  :hover {
    cursor: zoom-in;
  }
`,X=e=>{let{toggleMode:t,mode:n,spread:i}=e;const[o,l]=(0,r.useState)(!0),s="first"===i?"growBlack":"second"===i?"growWhite":"";return(0,f.jsxs)(a.gZ,{style:{position:"relative",overflow:o?"hidden":"null",height:o?"100vh":"unset"},children:[(0,f.jsx)(c.c_,{isLocked:o,setIsLocked:l}),(0,f.jsx)(d.K,{className:s}),(0,f.jsx)(c.so,{mode:n,toggleMode:t}),(0,f.jsxs)(a.IN,{style:{marginBottom:100,mixBlendMode:"difference"},children:[(0,f.jsx)(a.fV,{style:{marginBottom:35,mixBlendMode:"difference",color:"white"},children:"Vulnerability Management"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Near the end of 2021 there was a massive vulnerability discovered and announced to be one of the most serious vulnerabilities seen in modern web. This infrastructure vulnerability had already been exploited millions of times and had the potential to expose billions of users. Engineers had to move quickly to patch the issue and this brought the attention of executives to better track vulnerabilities and risks within their organizations."}),(0,f.jsx)(a.fz,{children:"IBM was no stranger to this and began regularly tracking vulnerabilities and risks of each department monthly from a number of their various vulnerability tracking applications."}),(0,f.jsx)(Y,{children:(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300,mixBlendMode:"difference",color:"white"},children:"Pain Points with Current Process"}),(0,f.jsx)(a.fz,{children:"- Multiple sources of data all separately organized"}),(0,f.jsx)(a.fz,{children:"- Team leads are creating analytics and charts by hand every few weeks"})," ",(0,f.jsx)(a.fz,{children:"- Tools aren\u2019t available to management, leaving them to get secondary accounts of vulnerability status"})," ",(0,f.jsx)(a.fz,{children:"- Developers are tracking and updating vulnerabilities in multiple different places, obscuring the true level of risk within applications"})]})})]}),(0,f.jsxs)(a.IN,{style:{marginTop:-40},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"My Role"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200,marginBottom:20},children:"Led the design of the vulnerability management application between January and May 2022. Collaborated with two other front end developers on features and direction"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200,marginBottom:20},children:"In addition, worked alongside a Senior Architect, Product Manage, and multiple backend engineers."}),(0,f.jsx)(a.fz,{style:{maxWidth:1200,marginBottom:0},children:"Led the hand off of design to developer in May 2022."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsx)(Q,{onClick:()=>{window.open("/static/media/vuln.750cd808f20742f67f6f.png","_blank","noopener,noreferrer")},src:R.w4,style:{width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:-20,fontSize:35},children:"High Level Goals"}),(0,f.jsxs)(Y,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300,marginBottom:10},children:"For Developers"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Congregate all vulnerability data from multiple sources and create a dashboard that allows users to view their vulnerability trends"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300,marginBottom:10},children:"For Teams"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Enable team leads to get their team onboarded the tool easily and seamlessly"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300,marginBottom:10},children:"For Managers"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Target admins directly to enable them to view the current vulnerability reports for each organization"})]})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Establishing Personas"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Our persona hypothesis consistent of 4 different user groups which we used to best identify user needs and empathize with different pain points. These characteristics could be best summarized through motivations such as the level of impact vulnerabilities have on their work, as well as the frequency at which they\u2019ll use the application"})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[" ",(0,f.jsx)("img",{src:R.UF,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)("img",{src:R.$n,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Journey Map"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Each persona was then walked through the existing user journey map to establish themes and create a cleaner and more enjoyable user flow"}),(0,f.jsx)("img",{src:R.eh,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Sketching and Ideation"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"I created a series of low fidelity sketches and wireframes to best plan out the features and layouts that we would be creating. We spent a few design iterations here to ensure all user needs were being addressed"})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:20},children:[" ",(0,f.jsx)("img",{src:R.ex,style:{width:"700px",height:"auto",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)("img",{src:R.l$,style:{width:"700px",height:"auto",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," "]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Handling Onboarding"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"One particularly challenging portion of the design thinking and planning for this application was working through the onboarding flow. We were tasked with finding a flow that enabled users to quickly initialize their organization into our app in situations where they\u2019ll have multiple sources of data form completely different APIs."}),(0,f.jsx)("img",{src:R.M7,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Final High Fidelity Wireframes"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Following user testing of our low fidelity flow, we finally moved on to create high fidelity designs of our vulnerability application"}),(0,f.jsx)("img",{src:R.AP,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsx)(c.NM,{})]})},G=l.Ay.div`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;

  @media (${a.Ay.large}) {
    flex-wrap: nowrap;
    gap: 100px;
  }
`,Z=(l.Ay.img`
  :hover {
    cursor: zoom-in;
  }
`,e=>{let{toggleMode:t,mode:n,spread:i}=e;const[o,l]=(0,r.useState)(!0),s="first"===i?"growBlack":"second"===i?"growWhite":"";return(0,f.jsxs)(a.gZ,{style:{position:"relative",overflow:o?"hidden":"null",height:o?"100vh":"unset"},children:[(0,f.jsx)(c.c_,{isLocked:o,setIsLocked:l}),(0,f.jsx)(d.K,{className:s}),(0,f.jsx)(c.so,{mode:n,toggleMode:t}),(0,f.jsxs)(a.IN,{style:{marginBottom:100,mixBlendMode:"difference"},children:[(0,f.jsx)(a.fV,{style:{marginBottom:35,mixBlendMode:"difference",color:"white"},children:"DevOps Dashboard"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200},children:["Decore is a project I built alongside Ian Trent, for a class project. We decided to create a react web application that would help other developers get started with their web projects. Decore allows users to customize a layout setup that will generate custom html and css code that can be used as a starter template for any website."," "]}),(0,f.jsxs)(G,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300,mixBlendMode:"difference",color:"white"},children:"Design Process"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:'I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford (the "d. school").'})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300,mixBlendMode:"difference",color:"white"},children:"My Role"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:'I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford (the "d. school").'})]})]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsx)("img",{src:R.wd,style:{width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Research"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[" ",(0,f.jsx)("img",{src:R.TQ,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)("img",{src:R.Mc,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Journey Map"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."}),(0,f.jsx)("img",{src:R.Xe,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Pain Points"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."}),(0,f.jsxs)(G,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Design Process"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:'I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford (the "d. school").'})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"My Role"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:'I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford (the "d. school").'})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"My Role"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:'I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford (the "d. school").'})]})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Sketching and Ideation"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:20},children:[" ",(0,f.jsx)("img",{src:R.e2,style:{width:"calc(25% - 5px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)("img",{src:R.X7,style:{width:"calc(25% - 5px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsx)("img",{src:R.SL,style:{width:"calc(25% - 5px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsx)("img",{src:R.Zt,style:{width:"calc(25% - 5px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Establishing User Flow"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."}),(0,f.jsx)("img",{src:R.uz,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Testing"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[(0,f.jsx)("img",{src:R.bo,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)("img",{src:R.WL,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Synthesizing Research Into Insights"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."}),(0,f.jsx)("img",{src:R.RG,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Changes Implemented from Research"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."}),(0,f.jsx)("img",{src:R.s$,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)("img",{src:R.Zg,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)("img",{src:R.eV,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Final High Fidelity Wireframes"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus, arcu volutpat ut amet. Ac quam sed lacus non in donec. Porttitor iaculis suspendisse malesuada commodo, massa non luctus. Id pharetra augue sed egestas ut nunc."}),(0,f.jsx)("img",{src:R.rM,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsxs)(G,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Lessons Learned"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:'I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford (the "d. school").'})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{fontSize:25,lineHeight:"30px",fontWeight:300},children:"Next Steps"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:'I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Stanford (the "d. school").'})]})]})]}),(0,f.jsx)(c.NM,{})]})}),J=l.Ay.div`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;

  @media (${a.Ay.large}) {
    flex-wrap: nowrap;
    gap: 50px;
  }
`,ee=l.Ay.img`
  :hover {
    cursor: zoom-in;
  }
`,te=e=>{let{toggleMode:t,mode:n,spread:r}=e;const i="first"===r?"growBlack":"second"===r?"growWhite":"";return(0,f.jsxs)(a.gZ,{style:{position:"relative"},children:[(0,f.jsx)(d.K,{className:i}),(0,f.jsx)(c.so,{mode:n,toggleMode:t}),(0,f.jsxs)(a.IN,{style:{marginBottom:100,mixBlendMode:"difference"},children:[(0,f.jsx)(a.fV,{style:{marginBottom:35,mixBlendMode:"difference",color:"white"},children:"EA1 Vehicle Service"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200,mixBlendMode:"difference",color:"white"},children:["The client for this application approached me because they were looking to create a product that allows drivers to quickly connect with mechanics when dealing with car problems. They also were loooking to enable hobbyist and mechanics unassociated with any particular shop the opportunity to gig-work and manage their own time.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{})," I was able to effectively create user personas, competitive audits, sketches, wireframes and a final prototype and send over final assets to an engineer in around three months."]}),(0,f.jsxs)(J,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.JU,{style:{mixBlendMode:"difference",color:"white"},children:"My Role"}),(0,f.jsx)(a.fz,{style:{maxWidth:700,mixBlendMode:"difference",color:"white"},children:"Design Man"})]}),(0,f.jsxs)("div",{style:{width:"50%"},children:[(0,f.jsx)(a.JU,{style:{mixBlendMode:"difference",color:"white"},children:"Team"}),(0,f.jsx)(a.fz,{style:{maxWidth:700,mixBlendMode:"difference",color:"white"},children:"Design Man"})]})]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",alignItems:"center",display:"flex",flexDirection:"column",gap:20},children:[(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/main.846969c01b93406683f2.png","_blank","noopener,noreferrer")},src:R.XO,style:{width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsx)(a.HL,{children:"Final Prototype of EA1, a service that allows users to request help when experiencing vehicle problems"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Personas"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200},children:["I chose to create user personas first, as I wanted a high level understanding of some of the reasons different users would use the app as well as some of the hestitations that could prevent a user from using ours. ",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{})," To ensure inclusivity and edge case users, I created many user personas to represent all of the different user groups that this app will be targeting. A few of the key areas included were: diversity in age groups, potential disabilities, exposure to technology, experience with car engines, as well as distance from major cities."]})]}),(0,f.jsxs)(a.CC,{children:[(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/Anika%20Lubin.1403dc0498c495f5b890.png","_blank","noopener,noreferrer")},src:R.te,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/Ashlynn%20Bothman.373e3ff66063b51cdbd2.png","_blank","noopener,noreferrer")},src:R.O8,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," "]})," ",(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/Cooper%20Saris.91c4e4952e3f57d82307.png","_blank","noopener,noreferrer")},src:R.Hu,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/Maren%20Donin.f7bc22112785093343f9.png","_blank","noopener,noreferrer")},src:R.AY,style:{width:"calc(50% - 50px)",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Competitive Audit"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200},children:["Following Personas, I decided to do a competitive audit on the similar B2C products in the market. To get the most useful insights, I decided to only focus on applications that were directly available to a broad market, which removes applications like State farm roadside assistance or any other insurance-associated service provider. ",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{})," I specifically chose Angi, because they have a unique gig-work structure that would help me to understand common design standards that allow service providers to showcase their services and get connected with customers. Uber felt like an obvious choice as they handle complicated location tracking and connect drivers and riders in a similar way that we will connect service providers and requesters.Lastly, I chose to audit verizon media assistance, because I wanted to have a roadside assistance specific company to research."]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/competitive.800e7d6899e94b40dd25.png","_blank","noopener,noreferrer")},src:R.Mf,style:{marginTop:50,width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Pain Points Found"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"Following the creation of user journey maps a handful of pain points were discovered, many of which were already being address by competitors. A handful of these problems were being addressed which were what I really wanted to spend time ideating and designing solutions for."}),(0,f.jsxs)(J,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{marginBottom:10,fontSize:35},children:"Handling Volume"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Many applications (Uber, etc) only enable users to have one connection at a time, but in the auto industry users are going to want to compare rates and eta's accross different providers."})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{marginBottom:10,fontSize:35},children:"Price"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Most applications like State Farm and Verizon roadside assitance will often bundle these services into their month to month rate, but since this app will be separate from those providers we'll need to handle cost in a transparent way"})]})]}),(0,f.jsxs)(J,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{marginBottom:10,fontSize:35},children:"Safety"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Many users may be alone or in an unsafe location when they are having car trouble, its important that the person going to assist them is trustworthy and knowlegable"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{marginBottom:10,fontSize:35},children:"Accessibility"}),(0,f.jsx)(a.fz,{style:{maxWidth:700},children:"Accounting for users who are have speciific special-needs will be important in the applications design, as a user who is hard of hearing for example would need very different accomodations than someone who is in a wheelchair."})]})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"User Flow"}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200},children:["After a few iterations of design thinking and exploration, I was able to create a user-flow site map that scopes out the necessary screens and expected interactions across the app. ",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{})," This layout really helps me look at the structure logically so we can catch any mismatches or miscommunications early. It also helps me to bring up business or technical challenges early on, so we can address for them now, instead of when the designs are in their final stages."]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:20},children:[" ",(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/userflow.4320fd880a8a15c93e78.png","_blank","noopener,noreferrer")},src:R.uc,style:{filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))",width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Low Fidelity - Design Decisions"})," ",(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"First approach at the structure of the application, lots of iteration and design thinking used here."})]}),(0,f.jsxs)(a.CC,{children:[(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[(0,f.jsxs)("div",{style:{width:"calc(50% - 50px)",alignItems:"center",display:"flex",flexDirection:"column",gap:20},children:[(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/landing-ui.1ae4f585c9c9d9b356e9.png","_blank","noopener,noreferrer")},src:R.si,style:{width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(a.HL,{style:{fontSize:20},children:"Landing page that displays once a user has logged in"})]}),(0,f.jsxs)("div",{style:{width:"calc(50% - 50px)",alignItems:"center",display:"flex",flexDirection:"column",gap:20},children:[(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/selection-ui.efe0e2f263f002a86396.png","_blank","noopener,noreferrer")},src:R.zC,style:{width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(a.HL,{style:{fontSize:20},children:"Service Provider Choice View"})]})]})," ",(0,f.jsxs)("div",{style:{margin:"60px 0",display:"flex",justifyContent:"space-between",gap:100},children:[(0,f.jsxs)("div",{style:{width:"calc(50% - 50px)",alignItems:"center",display:"flex",flexDirection:"column",gap:20},children:[(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/InProgress.56809265a1662d303912.png","_blank","noopener,noreferrer")},src:R.T5,style:{width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(a.HL,{style:{fontSize:20},children:"Service Request In Progress Page"})]}),(0,f.jsxs)("div",{style:{width:"calc(50% - 50px)",alignItems:"center",display:"flex",flexDirection:"column",gap:20},children:[(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/SelectingVehicle.d4dc619d249f0340ea2b.png","_blank","noopener,noreferrer")},src:R.$1,style:{width:"100%",filter:"drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(a.HL,{style:{fontSize:20},children:"View when adding your vehicle to your service request"})]})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Visual Design"}),(0,f.jsx)(a.fz,{style:{maxWidth:1200},children:"After some feedback and reviews, I went back through each of the views to update the UI to reflect the visual design and look at feel that the client wanted to go with."})]}),(0,f.jsxs)(a.CC,{children:[(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/final.8e3913acd47c3d60c34e.png","_blank","noopener,noreferrer")},src:R.Bg,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})," ",(0,f.jsx)(ee,{onClick:()=>{window.open("/static/media/final2.7b9d49dcdb8ae031f623.png","_blank","noopener,noreferrer")},src:R.Js,style:{marginTop:50,width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"})]}),(0,f.jsx)(a.IN,{style:{marginBottom:0},children:(0,f.jsx)(J,{children:(0,f.jsxs)("div",{children:[(0,f.jsx)(a.fV,{style:{marginBottom:30,fontSize:35},children:"Challenges"}),(0,f.jsx)(a.fz,{style:{marginTop:20},children:"The biggest challenge with this appication was the ambiguity of the requirements. I'm used to working with clients who are highly opinionated, but this client was truly open to anything. This made it tricky to get an established sense of which direction the application should go in. This ended up being a great personal challenge, as I was able to add more input in the direction of the product and company as a whole which challenged the way I approach design thinking."})]})})}),(0,f.jsx)(c.NM,{})]})},ne="260px",re=["scheduler-improving-content-variety-for-atmosphere-tv","the-challenge","discovery-phase","understanding-the-feedback","designing-a-solution","beta-testing-with-real-users","unexpected-insights","design-iterations","impact-and-results","reflections"],ie=l.Ay.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 1000;

  @media (max-width: 900px) {
    display: none;
  }

  &:hover nav {
    opacity: 1;
    pointer-events: auto;
    transform: translate(0, -50%);
    background: ${e=>{let{theme:t}=e;return t.main}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.outline}};
  }
`,ae=l.Ay.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: ${"30px"};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;
  z-index: 1;
`,oe=l.Ay.div`
  width: 16px;
  height: 2.5px;
  border-radius: 2px;
  margin: 7px 0;
  opacity: 0.85;
  background: ${e=>{let{active:t,theme:n}=e;return t?n.textMain:n.textLight}};
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: ${e=>{let{active:t}=e;return t?"0 0 2px #111":"none"}};
`,le=l.Ay.nav`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(20px, -50%);
  border-radius: 16px;
  min-width: ${ne};
  max-width: ${ne};
  width: ${ne};
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  pointer-events: none;
  opacity: 0;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  background: ${e=>{let{theme:t}=e;return t.main}};
  border: 1px solid transparent;
  border-radius: 10px;
  z-index: 2;
`,se=l.Ay.ul`
  list-style: none;
  margin: 0;
  padding: 20px;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  min-width: 180px;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`,ce=l.Ay.li`
  width: 100%;
`,de=(0,l.Ay)(ce)`
  margin-bottom: 0;
`,ue=l.Ay.ul`
  list-style: none;
  margin: 0 0 0 18px;
  padding: 0;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
`,fe=l.Ay.li`
  margin-bottom: 6px;
  font-size: 1.01rem;
  color: ${e=>{let{theme:t}=e;return t.textLight}};
  font-weight: 400;
`,pe=l.Ay.div`
  all: unset;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: none; 
  border: none;
  outline: none;
  padding: 0;
`,he=l.Ay.a`
  color: inherit;
  text-decoration: none;
  background-color: ${e=>{let{active:t}=e;return t?"rgba(0, 0, 0, 0.05)":"transparent"}};
  border-radius: 4px;
  width: 100%;
  padding: 6px 8px;
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.outline}};
  }
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  transition: background-color 0.2s ease;
`;const me=()=>{const[e,t]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=()=>{t(function(){if("undefined"===typeof window)return 0;const e=re.map((e=>{const t=document.getElementById(e);if(!t)return 1/0;const n=t.getBoundingClientRect();return Math.abs(n.top-120)}));return e.indexOf(Math.min(...e))}())};return window.addEventListener("scroll",e,{passive:!0}),e(),()=>window.removeEventListener("scroll",e)}),[]),(0,f.jsxs)(ie,{children:[(0,f.jsx)(ae,{children:re.map(((t,n)=>(0,f.jsx)(oe,{active:n===e},n)))}),(0,f.jsx)(le,{tabIndex:0,"aria-label":"Page outline",children:(0,f.jsx)(pe,{tabIndex:-1,"aria-hidden":"true",children:(0,f.jsxs)(se,{children:[(0,f.jsx)(ce,{children:(0,f.jsx)(he,{href:"#scheduler-improving-content-variety-for-atmosphere-tv",active:0===e,children:"Summary"})}),(0,f.jsx)(ce,{children:(0,f.jsx)(he,{href:"#the-challenge",active:1===e,children:"The Challenge"})}),(0,f.jsxs)(de,{children:[(0,f.jsx)(he,{href:"#discovery-phase",active:2===e,children:"Discovery Phase"}),(0,f.jsxs)(ue,{children:[(0,f.jsx)(fe,{children:(0,f.jsx)(he,{href:"#uncovering-the-real-problems",children:"Uncovering Root Problems"})}),(0,f.jsx)(fe,{children:(0,f.jsx)(he,{href:"#prototyping-process",children:"Prototype"})}),(0,f.jsx)(fe,{children:(0,f.jsx)(he,{href:"#key-insights",children:"Key Insights"})})]})]}),(0,f.jsx)(de,{children:(0,f.jsx)(he,{href:"#understanding-the-feedback",active:3===e,children:"Understanding the feedback"})}),(0,f.jsx)(ce,{children:(0,f.jsx)(he,{href:"#designing-a-solution",active:4===e,children:"Designing a Solution"})}),(0,f.jsx)(de,{children:(0,f.jsx)(he,{href:"#beta-testing-with-real-users",active:5===e,children:"Beta Testing with Real Users"})}),(0,f.jsx)(ce,{children:(0,f.jsx)(he,{href:"#unexpected-insights",active:6===e,children:"Unexpected Insights"})}),(0,f.jsx)(de,{children:(0,f.jsx)(he,{href:"#design-iterations",active:7===e,children:"Design Iterations"})}),(0,f.jsx)(ce,{children:(0,f.jsx)(he,{href:"#impact-and-results",active:8===e,children:"Impact and Results"})}),(0,f.jsx)(ce,{children:(0,f.jsx)(he,{href:"#reflections",active:9===e,children:"Reflections"})})]})})})]})},ge=l.Ay.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.02);
  padding: 30px 30px;
  border-radius: 10px;

  div {
    width: 100%;

    @media (${a.Ay.medium}) {
      width: 45%;
    }
  }

  @media (${a.Ay.large}) {
    flex-wrap: nowrap;
    gap: 50px;
    padding: 30px 50px;
    margin: 60px 0;
  }
`,ye=l.Ay.img`
  :hover {
    cursor: zoom-in;
  }
  border-radius: 20px;
`,xe=(0,l.Ay)(a.fz)`
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  opacity: 0.8;
  ul {
    margin-top: 10px;
    margin-bottom: 10px;
    list-style-type: disc;
    margin-left: 15px;
    li {
      margin-bottom: 6px;
    }
  }
  mark {
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.textMain}} !important;
    opacity: 1 !important;
    background-color: rgba(173, 173, 173, 0.1);
    padding: 2px 4px;
    border-radius: 4px;
  }

  strong {
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.textMain}} !important;
    opacity: 1 !important;
  }
`,ve=l.DU`
  html {
    scroll-behavior: smooth;
  }
`,be=e=>{let{toggleMode:t,mode:n,spread:r,setDisableScroll:i}=e;const o="first"===r?"growBlack":"second"===r?"growWhite":"";return(0,f.jsxs)(a.gZ,{style:{position:"relative",overflow:i?"hidden":"null",height:i?"100vh":"unset"},children:[(0,f.jsx)(ve,{}),(0,f.jsx)(me,{}),(0,f.jsx)(d.K,{className:o}),(0,f.jsx)(c.so,{mode:n,toggleMode:t}),(0,f.jsxs)(a.IN,{style:{mixBlendMode:"difference"},children:[(0,f.jsx)(a.JU,{style:{mixBlendMode:"difference",color:"white"},children:"Case Study"}),(0,f.jsx)(a.DZ,{id:"scheduler-improving-content-variety-for-atmosphere-tv",style:{marginBottom:35,mixBlendMode:"difference",color:"white",letterSpacing:"-0.5px",fontSize:"40px",fontWeight:500},children:"Scheduler: Improving Content Variety for Atmosphere TV"}),(0,f.jsxs)(ge,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.JU,{style:{mixBlendMode:"difference",color:"white"},children:"Timeline"}),(0,f.jsxs)(a.fz,{style:{maxWidth:700,mixBlendMode:"difference",color:"white",lineHeight:"32px"},children:["January 2024, ",(0,f.jsx)("span",{style:{opacity:.5},children:"Research"}),(0,f.jsx)("br",{}),"February 2024, ",(0,f.jsx)("span",{style:{opacity:.5},children:"Design"}),(0,f.jsx)("br",{}),"March 2024, ",(0,f.jsx)("span",{style:{opacity:.5},children:"Beta Testing"}),(0,f.jsx)("br",{}),"April 2024, ",(0,f.jsx)("span",{style:{opacity:.5},children:"Shipped"})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.JU,{style:{mixBlendMode:"difference",color:"white"},children:"My Role"}),(0,f.jsxs)(a.fz,{style:{maxWidth:700,mixBlendMode:"difference",color:"white",lineHeight:"32px"},children:["Lead designer",(0,f.jsx)("br",{}),"Lead Researcher"]})]})]}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200,mixBlendMode:"difference",color:"white",opacity:.8},children:["Atmosphere TV delivers streaming content to thousands of venues across the country\u2014but despite a robust content library, many business owners were seeing the same few clips on repeat. This case study details how I led a UX initiative to uncover the root of this content fatigue, and designed a scalable scheduling solution that increased content discovery, improved engagement, and balanced the needs of both small businesses and enterprise users.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{})," Through user interviews, prototyping, and real-world testing, we reimagined how content is selected, scheduled, and controlled\u2014transforming the way businesses use Atmosphere to entertain their customers.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{})," Note: Some details have been modified or generalized to respect company confidentiality."]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/key.cfd6e3ae5d11dd787617.png","_blank","noopener,noreferrer")},src:R.dC,style:{width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsx)(a.HL,{children:"Final Shipped Design of Scheduler"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"the-challenge",style:{marginBottom:24},children:"The Challenge"}),(0,f.jsx)(a.Pk,{children:"\"We're getting the content on repeat, and it's not keeping customers engaged.\""}),(0,f.jsx)(xe,{style:{marginBottom:24},children:"This comment from a restaurant owner during a customer interview captured the core challenge facing Atmosphere TV. Business owners were growing frustrated with the limited content variety on their screens, and engagement was suffering. Driving owners to turn off Atmosphere TV in favor of other content providers."}),(0,f.jsxs)(xe,{children:["As the UX lead on this project, I needed to understand:"," ",(0,f.jsx)("mark",{children:"Why were users experiencing content fatigue despite having access to a robust content library?"})," ","What was preventing them from discovering new channels? And most importantly, how could we design a solution that worked for our diverse user base?"]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"discovery-phase",style:{marginBottom:24},children:"Discovery Phase"}),(0,f.jsx)(a._B,{id:"uncovering-the-real-problems",style:{marginBottom:16},children:"Uncovering the Real Problems"}),(0,f.jsxs)(xe,{style:{maxWidth:1200,marginBottom:24},children:["I designed a research study to dig deeper into these content diversity issues, focusing on ",(0,f.jsx)("mark",{children:"four key questions:"})]}),(0,f.jsx)(xe,{style:{maxWidth:1200,marginBottom:24},children:(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:"What pain points existed in content discovery?"}),(0,f.jsx)("li",{children:"What does the current mental model around our content look like?"}),(0,f.jsx)("li",{children:"How (and would) a scheduling feature add value?"}),(0,f.jsx)("li",{children:"Where in the existing user experience would this fit?"})]})}),(0,f.jsx)(a._B,{id:"prototyping-process",style:{marginTop:30,marginBottom:16},children:"Prototyping Process"}),(0,f.jsxs)(xe,{style:{maxWidth:1200,marginBottom:24},children:["With these questions in mind, I created a low fidelity prototype to test with users and begin uncovering what would be most helpful.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"The prototype introduced a popup onboarding flow with two paths: one allowed users to build their own schedule by entering content goals and selecting preferred content types\u2014Atmosphere would then generate a tailored schedule. The other offered pre-curated schedules based on the user's venue type.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"Each of the steps in this flow were designed to help us uncover the answers to our key questions, and seeing which path users took helped us to understand how custom the scheduling solution would need to be."]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginTop:24},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/prototype.88c74f995e128cf0323b.gif","_blank","noopener,noreferrer")},src:R.bp,style:{width:"100%",borderRadius:24},alt:"The resulting low fidelity prototype that users could interact with"}),(0,f.jsx)(a.HL,{children:"The resulting low fidelity prototype that users could interact with"})]})}),(0,f.jsx)(a.IN,{style:{marginBottom:0},children:(0,f.jsxs)(xe,{style:{maxWidth:1200,marginBottom:24},children:["Over the course of two weeks, I conducted eight"," ",(0,f.jsx)("mark",{children:"60-minute interviews"})," with a diverse set of Atmosphere TV users, split evenly between enterprise accounts and small-to-medium businesses (SMBs). The venues ranged from casual dining restaurants to university lounges, car service shops, and upscale bars."]})}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/interview.75230e9e3206ad5b00b2.png","_blank","noopener,noreferrer")},src:R.uu,style:{width:"100%"},alt:" Dovetail overview of interview notes and images of me in action (clearly I talk with my hands)"}),(0,f.jsx)(a.HL,{children:"Dovetail overview of interview notes and images of me in action (clearly I talk with my hands)"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a._B,{id:"key-insights",style:{marginBottom:16},children:"Key Insights"}),(0,f.jsxs)(xe,{style:{marginBottom:24},children:["The interviews revealed a key insight: most users rated their content awareness as just ",(0,f.jsx)("mark",{children:"2 out of 5"}),". Despite having access to a wide range of channels, many users simply didn't know what was available or how to find content that matched their needs. Furthermore,"," ",(0,f.jsx)("mark",{children:"users were discovering one form of content and stopping there, leading to longer term content fatigue."})]}),(0,f.jsx)(a.Pk,{style:{marginBottom:24},children:"\"There's probably great content out there, but finding it feels like a burden. I don't have time to dig through everything, so I stick with what I know.\""}),(0,f.jsx)(xe,{style:{marginBottom:24},children:"Other users were frustrated with the lack of control over content selection, some feeling like they had no control over what local managers were choosing."}),(0,f.jsx)(a.Pk,{style:{marginBottom:24},children:'"It\'s a constant battle between corporate and local managers over content control. We need standardization, but local flexibility too."'}),(0,f.jsx)(xe,{style:{marginBottom:24},children:"When discussing the scheduling feature, users were excited about the potential to customize content for different times of day, but had concerns about the complexity of setting up and managing schedules."}),(0,f.jsx)(a.Pk,{style:{marginBottom:24},children:"\"I'd love to have more control over the content, but I don't have time to constantly monitor the content and make changes.\""}),(0,f.jsxs)(xe,{style:{marginBottom:24},children:["I organized the ",(0,f.jsx)("mark",{children:"264 insights"})," from these interviews into"," ",(0,f.jsx)("mark",{children:"14 themes"})]})]}),(0,f.jsx)(a.CC,{style:{marginTop:64,marginBottom:64},children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/affinity.8b4077dafe1f04eca232.png","_blank","noopener,noreferrer")},src:R.lq,style:{width:"100%"},alt:"Dovetail diagram of key quotes and themes"}),(0,f.jsx)(a.HL,{children:"Dovetail diagram of key quotes and themes"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"understanding-the-feedback",style:{marginBottom:24},children:"Understanding the feedback"}),(0,f.jsxs)(xe,{style:{maxWidth:1200,marginBottom:24},children:["The research presented an interesting challenge: while"," ",(0,f.jsx)("mark",{children:"75% of users valued the ability to schedule content by time of day,"})," ","they had varying responses:"]}),(0,f.jsx)(xe,{style:{marginBottom:24},children:(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:"Enterprise users wanted robust controls and standardization across locations"}),(0,f.jsx)("li",{children:"SMBs wanted simplicity and quick setup"}),(0,f.jsx)("li",{children:"Venues with dynamic audiences (like restaurants with different breakfast/lunch/dinner crowds) needed more scheduling options"}),(0,f.jsx)("li",{children:"Venues with consistent audiences felt they didn't value schedules at all"})]})}),(0,f.jsxs)(xe,{style:{marginBottom:24},children:["Above all, it was clear that an automated solution was not clicking with users. So many of them just wanted to build their own. \xa0",(0,f.jsx)("mark",{children:"So, I decided to pursue a dual-track solution:"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:'Atmosphere owned "curated schedules" for key venue classifications.'}),(0,f.jsx)("ul",{children:(0,f.jsx)("li",{children:"This would allow us to provide a dynamic content experience for venues who didn't need or want to invest time in customization"})}),(0,f.jsx)("li",{children:"Full custom scheduling capabilities for users who needed precise control"}),(0,f.jsx)("ul",{children:(0,f.jsx)("li",{children:"Highly customizable, allowing users with particular content needs to create schedules that perfectly match their business needs"})})]})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"designing-a-solution",style:{marginBottom:24},children:"Designing a Solution"}),(0,f.jsx)(xe,{style:{maxWidth:1200,marginBottom:24},children:"After several rounds of iterations and sketches, I decided to move schedule creation into a full-page experience rather than a popup or multi-step flow. I wanted users to have the flexibility to choose their starting point. The designs below allow users to create schedules with custom names, venue selection, and channel choices. I also included a thumbnail to visually represent the content within each schedule as users add them."})]}),(0,f.jsxs)(a.CC,{children:[(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:44},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/useflow.03641c0af76474001887.png","_blank","noopener,noreferrer")},src:R.tY,style:{width:"100%"},alt:"Early phase sketches of scheduler layout"}),(0,f.jsx)(a.HL,{children:"Early phase sketches of scheduler layout"})]}),(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:44},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/useflow.03641c0af76474001887.png","_blank","noopener,noreferrer")},src:R.uz,style:{width:"100%"},alt:" User flow of the entire scheduling experience and its impact across existing pages and flows"}),(0,f.jsx)(a.HL,{children:"User flow of the entire scheduling experience and its impact across existing pages and flows"})]}),(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:44},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout1.53455d4f2c8a69ac63a4.png","_blank","noopener,noreferrer")},src:R.Gf,style:{width:"100%"},alt:"Empty starting view and finished filled out view"}),(0,f.jsx)(a.HL,{children:"Empty starting view and finished filled out view"})]}),(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:44},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout2.6fb633474464b65175a0.png","_blank","noopener,noreferrer")},src:R.NT,style:{width:"100%"},alt:" Different states of the schedule naming component"}),(0,f.jsx)(a.HL,{children:"Different states of the schedule naming component"})]}),(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:44},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout3.4a4b6d646d3a3c22f847.png","_blank","noopener,noreferrer")},src:R.Uv,style:{width:"100%"},alt:"Adding venues to the schedule"}),(0,f.jsx)(a.HL,{children:"Adding venues to the schedule"})]}),(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:44},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout4.99f86d98a2e60b226500.png","_blank","noopener,noreferrer")},src:R.Nc,style:{width:"100%"},alt:"Different states of the adding venues flow"}),(0,f.jsx)(a.HL,{children:"Different states of the adding venues flow"})]}),(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:64},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/dragging.2176544bcd67a7d0dffa.gif","_blank","noopener,noreferrer")},src:R.Ww,style:{width:"100%"},alt:"Adding channels to the schedule"}),(0,f.jsx)(a.HL,{children:"Adding channels to the schedule"})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"beta-testing-with-real-users",style:{marginBottom:16},children:"Beta Testing with Real Users"}),(0,f.jsxs)(xe,{style:{marginBottom:24},children:["With designs reviewed and finalized, I established a structured beta program to refine the solution in real-world conditions. We recruited 20 active Atmosphere TV users representing different business types and sizes."," ",(0,f.jsx)("mark",{children:"I designed the beta program in three distinct phases:"})]}),(0,f.jsx)(a._B,{id:"phase-1-consultation",style:{marginTop:10,marginBottom:16},children:"Phase 1: Consultation (30-minute sessions)"}),(0,f.jsx)(xe,{style:{marginBottom:24},children:"I met with each participant to understand their specific content and scheduling needs and business goals. These conversations helped identify use cases I hadn't anticipated."}),(0,f.jsx)(a._B,{id:"phase-2-async-testing",style:{marginTop:10,marginBottom:16},children:"Phase 2: Async Testing"}),(0,f.jsx)(xe,{style:{marginBottom:24},children:"Participants were sent a set of curated schedules and provided feedback through UserZoom, helping identify content misalignments."}),(0,f.jsx)(a._B,{id:"phase-3-follow-up-session",style:{marginTop:10,marginBottom:16},children:"Phase 3: Follow-up Session (30-45 minutes)"}),(0,f.jsx)(xe,{style:{marginBottom:24},children:"After participants used a feature-flagged beta version, I conducted follow-up sessions focusing on real-world implementation, fleet management needs, and future feature priorities."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout5.ed11262b145f7010d5b2.png","_blank","noopener,noreferrer")},src:R.G$,style:{width:"100%"},alt:"  Affinity diagram of quotes from interviews"}),(0,f.jsx)(a.HL,{children:"Affinity diagram of quotes from interviews"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"unexpected-insights",style:{marginTop:30,marginBottom:16},children:"Unexpected Insights"}),(0,f.jsxs)(xe,{style:{maxWidth:1200},children:[" ","The beta program revealed several critical needs that hadn't emerged in initial research:"]}),(0,f.jsx)(xe,{style:{marginBottom:24},children:(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Tedious scheduling:"})," Some users found filling out the entire 24 hour schedule to be a repetitive and time-consuming task"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Schedule Recovery:"})," Nearly every user had concerns about returning to scheduled content after manual changes."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Permission Controls:"})," Many enterprise users wanted to completely lock out local managers from changing channels when a schedule was in place."]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Multi-Day Programming:"})," Several users requested having different schedules for different days of the week"]})]})})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"design-iterations",style:{marginBottom:16},children:"Design Iterations from Feedback"}),(0,f.jsx)(xe,{children:"With these insights, I made many key improvements to the designs."}),(0,f.jsx)(a._B,{id:"enterprise-management",style:{marginTop:30,marginBottom:16},children:"Enterprise Management"}),(0,f.jsx)(xe,{style:{maxWidth:1200,marginBottom:24},children:"To better support large organizations, I made changes that supported multi device changes, and permissioning."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row",gap:20},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout6.be7b203caf8e87bbfab2.png","_blank","noopener,noreferrer")},src:R.NN,style:{width:"50%"}}),(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout7.501c6f099b3b901ee897.png","_blank","noopener,noreferrer")},src:R.Gu,style:{width:"50%"}})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a._B,{id:"scheduling-enhancements",style:{marginTop:30,marginBottom:16},children:"Default Channels"}),(0,f.jsxs)(xe,{style:{maxWidth:1200,marginBottom:24},children:["To solve the problem of tedious schedule creation, I thought up the idea of a 'default channel', essentially a channel that filled the gaps and worked as a fallback between the other scheduled events.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{}),"This helped users fill the entire schedule without needing to drag in the same channel multiple times, and made it much clearer what would be playing at any given time in the schedule."]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout8.ddd206cc436f77162f5f.png","_blank","noopener,noreferrer")},src:R.N8,style:{width:"100%"},alt:"Default channel drastically reduced the amount of time required to create a schedule."}),(0,f.jsx)(a.HL,{children:"Default channel drastically reduced the amount of time required to create a schedule."})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a._B,{id:"automation-and-control",style:{marginTop:30,marginBottom:16},children:"Content Cues & Explanations"}),(0,f.jsx)(xe,{style:{maxWidth:1200,marginBottom:24},children:"To add clarity to the content channels, we added channel taglines that highlighted a key element of what the channel offered. This was a big hit with our beta users."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/layout9.dff5273850672854a847.png","_blank","noopener,noreferrer")},src:R.UK,style:{width:"100%"},alt:" Channel taglines in our Wine & Dine curated schedule"}),(0,f.jsx)(a.HL,{children:"Channel taglines in our Wine & Dine curated schedule"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"impact-and-results",style:{marginBottom:16},children:"Impact and Results"}),(0,f.jsx)(xe,{style:{marginBottom:24},children:"The final solution transformed how Atmosphere TV users interacted with content:"}),(0,f.jsx)(xe,{style:{maxWidth:1200,marginBottom:24},children:(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:["Content awareness increased from"," ",(0,f.jsx)("mark",{children:"2.0 to 4.3 (out of 5)"})]}),(0,f.jsx)("li",{children:"Schedules quickly gained traction, with a significant portion of our audience switching to scheduled content."}),(0,f.jsx)("li",{children:"The feature has shown low usability risk, with minimal customer support requests since launch."})]})}),(0,f.jsxs)(xe,{style:{marginBottom:24},children:["Most importantly, the scheduling feature became a powerful tool for reducing content fatigue. Users who adopted scheduling reported significantly higher satisfaction with content variety. One customer shared:",(0,f.jsx)(a.Pk,{style:{marginTop:20,marginBottom:24},children:'"This finally gives us the control we need while making sure our customers see fresh content throughout the day. It\'s the best of both worlds."'})]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(ye,{onClick:()=>{window.open("/static/media/key.cfd6e3ae5d11dd787617.png","_blank","noopener,noreferrer")},src:R.dC,style:{width:"100%"},alt:"  Modified final design with a new color scheme & modern navigation"}),(0,f.jsx)(a.HL,{children:"Modified final design with a new color scheme & modern navigation"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"reflections",style:{marginBottom:16},children:"Reflections"}),(0,f.jsx)(xe,{style:{marginBottom:24},children:"This project taught me several valuable lessons about designing for diverse business users:"}),(0,f.jsx)(xe,{style:{maxWidth:1200},children:(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"One size doesn't fit all:"})," Different business types require varying levels of scheduling complexity"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Trust + control balance:"})," Users appreciate automated recommendations but need modification capabilities"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Enterprise needs differ significantly:"})," Large organizations require robust fleet management and permission controls"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Beta testing provides invaluable refinement:"})," ","Real-world testing revealed needs that weren't apparent in initial research"]})]})})]}),(0,f.jsxs)(a.IN,{style:{backgroundColor:"black",borderRadius:10,padding:30,marginTop:64,marginBottom:64},children:[(0,f.jsx)(a.fV,{id:"thanks-for-reading-till-the-end",style:{color:"white"},children:"Thanks for reading till the end!"}),(0,f.jsxs)(xe,{style:{color:"white"},children:["If you have any questions, please reach out to me on"," ",(0,f.jsxs)("a",{href:"https://www.linkedin.com/in/latifur/",style:{display:"inline-flex",alignItems:"center"},children:["LinkedIn"," ",(0,f.jsx)("svg",{viewBox:"0 0 20 21",xmlns:"http://www.w3.org/2000/svg",style:{width:"16px",height:"16px",verticalAlign:"middle",marginLeft:"4px",opacity:.5},children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.21967 15.2642C5.51256 15.5571 5.98744 15.5571 6.28033 15.2642L13.5 8.04455V13.7339C13.5 14.1481 13.8358 14.4839 14.25 14.4839C14.6642 14.4839 15 14.1481 15 13.7339V6.23389C15 5.81967 14.6642 5.48389 14.25 5.48389H6.75C6.33579 5.48389 6 5.81967 6 6.23389C6 6.6481 6.33579 6.98389 6.75 6.98389H12.4393L5.21967 14.2036C4.92678 14.4964 4.92678 14.9713 5.21967 15.2642Z",fill:"white"})})]})]})]}),(0,f.jsx)(a.IN,{style:{marginBottom:20},children:(0,f.jsx)(c.NM,{})})]})},we="260px",ke=["scheduler-improving-content-variety-for-atmosphere-tv","the-challenge","discovery-phase","understanding-the-feedback","a-critical-turning-point","beta-testing-with-real-users","unexpected-insights","design-iterations"],je=l.Ay.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 1000;

  @media (max-width: 900px) {
    display: none;
  }

  &:hover nav {
    opacity: 1;
    pointer-events: auto;
    transform: translate(0, -50%);
    background: ${e=>{let{theme:t}=e;return t.main}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.outline}};
  }
`,Se=l.Ay.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: ${"30px"};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;
  z-index: 1;
`,Ce=l.Ay.div`
  width: 16px;
  height: 2.5px;
  border-radius: 2px;
  margin: 7px 0;
  opacity: 0.85;
  background: ${e=>{let{active:t,theme:n}=e;return t?n.textMain:n.textLight}};
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: ${e=>{let{active:t}=e;return t?"0 0 2px #111":"none"}};
`,Ee=l.Ay.nav`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(20px, -50%);
  border-radius: 16px;
  min-width: ${we};
  max-width: ${we};
  width: ${we};
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  pointer-events: none;
  opacity: 0;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  background: ${e=>{let{theme:t}=e;return t.main}};
  border: 1px solid transparent;
  border-radius: 10px;
  z-index: 2;
`,_e=l.Ay.ul`
  list-style: none;
  margin: 0;
  padding: 20px;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  min-width: 180px;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`,ze=l.Ay.li`
  width: 100%;
`,Te=(0,l.Ay)(ze)`
  margin-bottom: 0;
`,Ae=l.Ay.ul`
  list-style: none;
  margin: 0 0 0 18px;
  padding: 0;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
`,Pe=l.Ay.li`
  margin-bottom: 6px;
  font-size: 1.01rem;
  color: ${e=>{let{theme:t}=e;return t.textLight}};
  font-weight: 400;
`,$e=l.Ay.div`
  all: unset;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: none; 
  border: none;
  outline: none;
  padding: 0;
`,Ie=l.Ay.a`
  color: inherit;
  text-decoration: none;
  background-color: ${e=>{let{active:t}=e;return t?"rgba(0, 0, 0, 0.05)":"transparent"}};
  border-radius: 4px;
  width: 100%;
  padding: 6px 8px;
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.outline}};
  }
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  transition: background-color 0.2s ease;
`;const Le=()=>{const[e,t]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=()=>{t(function(){if("undefined"===typeof window)return 0;const e=ke.map((e=>{const t=document.getElementById(e);if(!t)return 1/0;const n=t.getBoundingClientRect();return Math.abs(n.top-120)}));return e.indexOf(Math.min(...e))}())};return window.addEventListener("scroll",e,{passive:!0}),e(),()=>window.removeEventListener("scroll",e)}),[]),(0,f.jsxs)(je,{children:[(0,f.jsx)(Se,{children:ke.map(((t,n)=>(0,f.jsx)(Ce,{active:n===e},n)))}),(0,f.jsx)(Ee,{tabIndex:0,"aria-label":"Page outline",children:(0,f.jsx)($e,{tabIndex:-1,"aria-hidden":"true",children:(0,f.jsxs)(_e,{children:[(0,f.jsx)(ze,{children:(0,f.jsx)(Ie,{href:"#scheduler-improving-content-variety-for-atmosphere-tv",active:0===e,children:"Summary"})}),(0,f.jsx)(ze,{children:(0,f.jsx)(Ie,{href:"#the-challenge",active:1===e,children:"The Challenge"})}),(0,f.jsxs)(Te,{children:[(0,f.jsx)(Ie,{href:"#discovery-phase",active:2===e,children:"Discovery Phase"}),(0,f.jsxs)(Ae,{children:[(0,f.jsx)(Pe,{children:(0,f.jsx)(Ie,{href:"#uncovering-the-real-problems",children:"Competitive Analysis"})}),(0,f.jsx)(Pe,{children:(0,f.jsx)(Ie,{href:"#key-insights",children:"The Hypothesis"})})]})]}),(0,f.jsxs)(Te,{children:[(0,f.jsx)(Ie,{href:"#understanding-the-feedback",active:3===e,children:"Designing the Solution"}),(0,f.jsx)(Ae,{children:(0,f.jsx)(Pe,{children:(0,f.jsx)(Ie,{href:"#the-hypothesis",children:"Bridging Physical & Digital"})})})]}),(0,f.jsx)(ze,{children:(0,f.jsx)(Ie,{href:"#a-critical-turning-point",active:4===e,children:"A/B Testing"})}),(0,f.jsx)(Te,{children:(0,f.jsx)(Ie,{href:"#beta-testing-with-real-users",active:5===e,children:"The Results"})}),(0,f.jsx)(ze,{children:(0,f.jsx)(Ie,{href:"#unexpected-insights",active:6===e,children:"The Broader Impact"})}),(0,f.jsx)(ze,{children:(0,f.jsx)(Ie,{href:"#design-iterations",active:7===e,children:"Key Learnings"})})]})})})]})},Be=l.Ay.div`
  margin: 40px 0;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.02);
  padding: 30px 30px;
  border-radius: 10px;

  div {
    width: 100%;

    @media (${a.Ay.medium}) {
      width: 45%;
    }
  }

  @media (${a.Ay.large}) {
    flex-wrap: nowrap;
    gap: 50px;
    padding: 30px 50px;
    margin: 60px 0;
  }
`,Ne=l.Ay.img`
  :hover {
    cursor: zoom-in;
  }
  border-radius: 10px;
`,Oe=(0,l.Ay)(a.fz)`
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  opacity: 0.8;
  ul {
    margin-top: 10px;
    margin-bottom: 10px;
    list-style-type: disc;
    margin-left: 15px;
    li {
      margin-bottom: 6px;
    }
  }
  mark {
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.textMain}} !important;
    opacity: 1 !important;
    background-color: rgba(173, 173, 173, 0.1);
    padding: 2px 4px;
    border-radius: 4px;
  }

  strong {
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.textMain}} !important;
    opacity: 1 !important;
  }
`,Me=l.DU`
  html {
    scroll-behavior: smooth;
  }
`,Re=e=>{let{toggleMode:t,mode:n,spread:r}=e;const i="first"===r?"growBlack":"second"===r?"growWhite":"";return(0,f.jsxs)(a.gZ,{style:{position:"relative"},children:[(0,f.jsx)(Me,{}),(0,f.jsx)(Le,{}),(0,f.jsx)(d.K,{className:i}),(0,f.jsx)(c.so,{mode:n,toggleMode:t}),(0,f.jsxs)(a.IN,{style:{marginBottom:60,mixBlendMode:"difference"},children:[(0,f.jsx)(a.JU,{style:{mixBlendMode:"difference",color:"white"},children:"Case Study"}),(0,f.jsx)(a.DZ,{id:"scheduler-improving-content-variety-for-atmosphere-tv",style:{marginBottom:35,mixBlendMode:"difference",color:"white",letterSpacing:"-0.5px",fontSize:"40px",fontWeight:"500"},children:"Reimagining B2B Signup: The Atmosphere TV Product Journey"}),(0,f.jsxs)(Be,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(a.JU,{style:{mixBlendMode:"difference",color:"white"},children:"Timeline"}),(0,f.jsxs)(a.fz,{style:{maxWidth:700,mixBlendMode:"difference",color:"white",lineHeight:"32px"},children:["December 2024, ",(0,f.jsx)("span",{style:{opacity:.5},children:"Research"}),(0,f.jsx)("br",{}),"January 2025, ",(0,f.jsx)("span",{style:{opacity:.5},children:"Design"}),(0,f.jsx)("br",{}),"February 2025,"," ",(0,f.jsx)("span",{style:{opacity:.5},children:"Implementation"}),(0,f.jsx)("br",{})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(a.JU,{style:{mixBlendMode:"difference",color:"white"},children:"My Role"}),(0,f.jsxs)(a.fz,{style:{maxWidth:700,mixBlendMode:"difference",color:"white",lineHeight:"32px"},children:["Lead designer",(0,f.jsx)("br",{}),"Developer"]})]})]}),(0,f.jsxs)(a.fz,{style:{maxWidth:1200,mixBlendMode:"difference",color:"white",opacity:.8},children:["Atmosphere TV\u2019s signup flow was underperforming\u2014not because of friction, but because users didn\u2019t understand what they were signing up for. As a hybrid product (a physical device + streaming service), it didn\u2019t fit cleanly into existing mental models. Instead of simplifying the funnel, I added a step: a product-focused page that clarified the offering before asking for commitment.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{}),"The result? A dramatic lift in conversions, fewer drop-offs, and a clearer, more confident path to signup. This case study explores how rethinking our funnel around user understanding, not just efficiency, transformed our acquisition strategy.",(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{}),"Note: Some details have been modified or generalized to respect company confidentiality."]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",borderRadius:20},children:[(0,f.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{borderRadius:10},children:(0,f.jsx)("source",{src:R.kz})}),(0,f.jsx)(a.HL,{children:"Final shipped designs for the marketing site"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"the-challenge",style:{marginBottom:24},children:"The Challenge"}),(0,f.jsxs)(Oe,{style:{marginBottom:24},children:["Atmosphere TV\u2019s signup flow was underperforming"," ",(0,f.jsx)("mark",{children:"and not enough visitors were converting."})," The issue wasn\u2019t hidden in the data; it was clear in user behavior. People were abandoning the funnel or circling back through multiple pages, trying to piece together what exactly they were signing up for."]}),(0,f.jsx)(Oe,{style:{marginBottom:24},children:"The problem? Our product didn\u2019t fit into a familiar mold. Atmosphere is a hybrid offering: a physical device paired with a streaming subscription. But the existing funnel treated it like a typical SaaS signup, pushing an imediate sign up and failing to explain the value or clarify what users would receive."}),(0,f.jsx)(Oe,{style:{marginBottom:24},children:"As the UX lead, I needed to rethink how we presented this unique product\u2014one that didn\u2019t align with common mental models\u2014and build a flow that matched how users actually evaluate purchases."})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(Ne,{onClick:()=>{window.open("/static/media/oldFlow.eaab892a4701a1e95566.png","_blank","noopener,noreferrer")},src:R.g4,style:{width:"100%"},alt:"Atmosphere's previous sign up flow"}),(0,f.jsx)(a.HL,{children:"Atmosphere's previous sign up flow"})]})}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"discovery-phase",style:{marginBottom:24},children:"Discovery Phase"}),(0,f.jsx)(a._B,{id:"uncovering-the-real-problems",style:{marginBottom:16},children:"Studying the best to find our path"}),(0,f.jsxs)(Oe,{style:{maxWidth:1200,marginBottom:24},children:["I began by studying conversion flows across different industries, focusing on three categories:",(0,f.jsxs)("ul",{style:{marginBottom:24},children:[(0,f.jsx)("li",{children:"Subscription services (Netflix, Spotify)"}),(0,f.jsx)("li",{children:"B2B products (Slack, HubSpot)"}),(0,f.jsx)("li",{children:"Hardware + software products (Apple, Square, Toast)"})]})]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:24},children:[(0,f.jsx)(Ne,{onClick:()=>{window.open("/static/media/marketing-inspo.f2254c994da3255d4450.png","_blank","noopener,noreferrer")},src:R.Gi,style:{width:"100%"},alt:" competitor product pages"}),(0,f.jsx)(a.HL,{children:"Comparable competitor product pages"})]})}),(0,f.jsx)(a.IN,{children:(0,f.jsxs)(Oe,{style:{marginBottom:24},children:["What became clear was that successful hybrid products didn't rush users to signup. Instead, they created dedicated product pages that helped users understand exactly what they were getting before asking for commitment.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),'Looking at our own analytics, I discovered a pattern: users who eventually converted often took a circuitous path through our website, visiting multiple pages to piece together information about the product before signing up. They were creating their own "product discovery" journey because our funnel wasn\'t providing one.']})}),(0,f.jsxs)(a.IN,{children:[(0,f.jsx)(a._B,{id:"key-insights",style:{marginBottom:16},children:"The Hypothesis"}),(0,f.jsxs)(Oe,{style:{marginBottom:24},children:["Based on this research, I formed a counterintuitive hypothesis:"," ",(0,f.jsx)("mark",{children:"Adding a step to our funnel could actually increase conversion rates."})]}),(0,f.jsx)(Oe,{style:{marginBottom:24},children:"Specifically, I proposed inserting a product details page between the landing page and signup form\u2014giving users the information they needed before asking for commitment. This was risky because conventional wisdom suggests minimizing steps in a conversion funnel. But I believed our problem wasn't funnel length; it was insufficient information at critical decision points."}),(0,f.jsx)(Oe,{style:{marginBottom:24},children:'"We\'re not just signing users up for a service," I explained to stakeholders. "We\'re selling a physical product with an ongoing subscription. Users need to understand both components before they\'re ready to commit."'})]}),(0,f.jsxs)(a.CC,{children:[(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:64},children:[(0,f.jsx)(Ne,{onClick:()=>{window.open("/static/media/marketing-sketch.5bde68f9555de1bae99e.jpg","_blank","noopener,noreferrer")},src:R.h9,style:{width:"100%"},alt:"Sketches of the product details page"}),(0,f.jsx)(a.HL,{children:"sketches of the product details page"})]}),(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(Ne,{onClick:()=>{window.open("/static/media/newflow.9e4afdadac03884cbc5b.png","_blank","noopener,noreferrer")},src:R.rt,style:{width:"100%"},alt:" New suggested user flow"}),(0,f.jsx)(a.HL,{children:"New suggested user flow"})]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"understanding-the-feedback",style:{marginBottom:24},children:"Designing the solution"}),(0,f.jsx)(a._B,{id:"the-hypothesis",style:{marginBottom:16},children:"Bridging Digital and Physical"}),(0,f.jsxs)(Oe,{style:{maxWidth:1200,marginBottom:24},children:["Drawing inspiration from companies that successfully blend hardware and software (like Apple and Square), I designed a product-focused page that would:",(0,f.jsxs)("ul",{style:{marginBottom:24},children:[(0,f.jsx)("li",{children:"Make the process feel more like purchasing a physical product than just signing up for a subscription"}),(0,f.jsx)("li",{children:"Highlight what comes in the box, creating a tangible sense of what users would receive"}),(0,f.jsx)("li",{children:"Present the subscription model as a choice, similar to selecting storage capacity or color for a device"}),(0,f.jsx)("li",{children:"Emphasize fast, free delivery to reduce friction for the physical component"}),(0,f.jsx)("li",{children:"Showcase the benefits of Atmosphere through compelling imagery"})]})]})]}),(0,f.jsxs)(a.CC,{children:[(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",borderRadius:20,marginBottom:64},children:[(0,f.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{borderRadius:10},children:(0,f.jsx)("source",{src:R.eb})}),(0,f.jsx)(a.HL,{children:"Final product page design, including product images, reviews, and necessary details"})]}),(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:24},children:[(0,f.jsx)(Ne,{onClick:()=>{window.open("/static/media/signUp.3958494f07ba95ecced9.png","_blank","noopener,noreferrer")},src:R.Hh,style:{width:"100%"},alt:"Low fidelity wireframes that display movie theater seat selection flow"}),(0,f.jsx)(a.HL,{children:"Revised sign up page with collapsed sections"})]})]}),(0,f.jsxs)(a.IN,{children:[(0,f.jsx)(a._B,{id:"the-hypothesis",style:{marginBottom:16},children:"Secondary Improvements"}),(0,f.jsxs)(Oe,{style:{maxWidth:1200,marginBottom:24},children:["While redesigning the funnel, I also identified several opportunities for improvement:",(0,f.jsxs)("ul",{style:{marginBottom:24},children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Segmenting the Journey:"})," I created a separate path for enterprise customers and those who wanted a demo, recognizing their needs differed from direct purchasers"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Streamlining the Form:"})," I reduced the visual complexity of the checkout flow by consolidating sections and using progressive disclosure"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Building Trust:"})," I incorporated customer reviews and testimonials to create social proof"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Softening Language:"}),' I replaced "Sign Up" with "Get Started" to reduce perceived commitment and friction']})]})]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",marginBottom:24},children:[(0,f.jsx)(Ne,{onClick:()=>{window.open("/static/media/scheduleDemo.ce5963e245b0704c0bf3.png","_blank","noopener,noreferrer")},src:R.hd,style:{width:"100%"},alt:"  New schedule a demo page for enterprise users "}),(0,f.jsx)(a.HL,{children:"New schedule a demo page for enterprise users"})]})}),(0,f.jsxs)(a.IN,{children:[(0,f.jsx)(a.fV,{id:"a-critical-turning-point",style:{marginTop:40,marginBottom:16},children:"A/B Testing"}),(0,f.jsxs)(Oe,{style:{maxWidth:1200,marginBottom:24},children:["With the new design complete, we set up an A/B test to validate our hypothesis. The control group received our existing direct-to-form experience, while the test group encountered our new product-focused journey.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"Despite adding an additional step to the funnel, I was confident that giving users the right information at the right time would increase overall conversion\u2014even if it meant more clicks.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"I told the team that if our hypothesis is right, we'll see fewer drop-offs, less back-and-forth navigation, and ultimately more signups because users will feel confident in their decision."]})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"beta-testing-with-real-users",style:{marginBottom:16},children:"The Results"}),(0,f.jsxs)(Oe,{style:{marginBottom:24},children:["When the results came in, they validated our hypothesis:"," ",(0,f.jsx)("mark",{children:"the new product-focused journey showed a very significant improvement in signup rates compared to the control."})]}),(0,f.jsxs)(Oe,{style:{marginBottom:24},children:["What was particularly interesting was how user behavior changed:",(0,f.jsxs)("ul",{style:{marginBottom:24},children:[(0,f.jsx)("li",{children:"Users spent more time on the product page than we anticipated"}),(0,f.jsx)("li",{children:"Back-and-forth navigation decreased significantly"}),(0,f.jsx)("li",{children:"The percentage of users who completed the signup form after reaching it increased"}),(0,f.jsx)("li",{children:"The demo page proved highly effective, converting a large portion of visitors who engaged with it."})]}),"The improvements weren't just limited to conversion rates. Qualitative feedback from new customers indicated they had a clearer understanding of Atmosphere's offering from the beginning, setting more accurate expectations for the service and minimizing down-the-road frustrations around subscription fees."]})]}),(0,f.jsxs)(a.IN,{children:[(0,f.jsx)(a.fV,{id:"unexpected-insights",style:{marginTop:30,marginBottom:16},children:"The Broader Impact"}),(0,f.jsxs)(Oe,{style:{maxWidth:1200},children:[" ","Beyond the immediate conversion improvements, this project sparked a broader shift in how we thought about Atmosphere's customer acquisition:"]}),(0,f.jsx)(Oe,{style:{marginBottom:24},children:(0,f.jsxs)("ul",{style:{marginBottom:24},children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:" Product Identity Clarity:"})," We gained clarity about our hybrid nature and how to communicate it effectively"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Segmented Journeys:"})," We implemented dedicated paths for different customer types (direct purchase, enterprise, demo)"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Information Architecture:"})," We reorganized other parts of our site to better support how users actually make decisions, such as our Channels page, or the Industry pages"]})]})})]}),(0,f.jsxs)(a.IN,{style:{marginBottom:0},children:[(0,f.jsx)(a.fV,{id:"design-iterations",style:{marginBottom:16},children:"Key Learnings"}),(0,f.jsxs)(Oe,{children:["This project led to a bunch of takeaways for me, and really challenges some of my conventional design approaches:",(0,f.jsxs)("ul",{style:{marginBottom:24},children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Fewer steps doesn't always mean better conversion:"})," ","Sometimes users need more information, not less friction"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Hybrid products require hybrid thinking:"})," There are situations where a cookie-cutter approach simply doesn't work and you need to break the mold a bit"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Follow the users' information needs:"})," Analytics were a huge tool to help us uncover the specific information users were seeking, which in turn shaped the page that we added"]})]})]})]}),(0,f.jsx)(a.CC,{children:(0,f.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[(0,f.jsx)(Ne,{onClick:()=>{window.open("/static/media/final-figma.f4aef92b311e5b2010bd.png","_blank","noopener,noreferrer")},src:R.PJ,style:{width:"100%"},alt:"Final figma file for marketing site work"}),(0,f.jsx)(a.HL,{children:"Final figma file for marketing site work"})]})}),(0,f.jsxs)(a.IN,{style:{backgroundColor:"black",borderRadius:10,padding:30,marginBottom:20},children:[(0,f.jsx)(a.fV,{id:"thanks-for-reading-till-the-end",style:{color:"white"},children:"Thanks for reading till the end!"}),(0,f.jsxs)(Oe,{style:{color:"white"},children:["If you have any questions, please reach out to me on"," ",(0,f.jsxs)("a",{href:"https://www.linkedin.com/in/latifur/",style:{display:"inline-flex",alignItems:"center"},children:["LinkedIn"," ",(0,f.jsx)("svg",{viewBox:"0 0 20 21",xmlns:"http://www.w3.org/2000/svg",style:{width:"16px",height:"16px",verticalAlign:"middle",marginLeft:"4px",opacity:.5},children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.21967 15.2642C5.51256 15.5571 5.98744 15.5571 6.28033 15.2642L13.5 8.04455V13.7339C13.5 14.1481 13.8358 14.4839 14.25 14.4839C14.6642 14.4839 15 14.1481 15 13.7339V6.23389C15 5.81967 14.6642 5.48389 14.25 5.48389H6.75C6.33579 5.48389 6 5.81967 6 6.23389C6 6.6481 6.33579 6.98389 6.75 6.98389H12.4393L5.21967 14.2036C4.92678 14.4964 4.92678 14.9713 5.21967 15.2642Z",fill:"white"})})]})]})]}),(0,f.jsx)(a.IN,{style:{marginBottom:20},children:(0,f.jsx)(c.NM,{})})]})};var De=n(853);const Fe=l.Ay.main`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  /* Force dark night palette regardless of user theme */
  background: ${De.a.main};
`,We="#e6ebff",He="#4a4d57",Ve=l.Ay.div`
  margin: 0 auto;
  padding: 24px;
  transition: transform 160ms ease;
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
  border-radius: 8px;
  /* Theme-independent subtle card */
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: ${We};
  @media (max-width: 600px) {
    padding: 18px;
  }
`,Ue=l.Ay.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 600px) {
    gap: 8px;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-between;
  }
`,qe=l.i7`
  0%, 100% { transform: translateY(-1px); }
  50% { transform: translateY(-3px); }
`,Ke=(0,l.Ay)(o.N_)`
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid ${e=>{let{theme:t}=e;return t.textMain}};
  color: ${e=>{let{theme:t}=e;return t.main}};
  background: ${e=>{let{theme:t}=e;return t.textMain}};
  transition: transform 160ms ease, box-shadow 160ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-1px);
    animation: ${qe} 1.6s ease-in-out infinite;
  }
  &:focus-visible {
    outline: none;
    transform: translateY(-1px);
    animation: ${qe} 1.6s ease-in-out infinite;
  }
  &:active {
    transform: translateY(0);
    animation: none;
  }
  @media (max-width: 600px) {
    padding: 8px 12px;
    font-size: 14px;
    flex: 1 1 48%;
    min-width: 0;
  }
`,Ye=l.Ay.button`
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid ${e=>{let{theme:t}=e;return t.textMain}};
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  background: transparent;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-1px);
    animation: ${qe} 1.6s ease-in-out infinite;
    background: ${e=>{let{theme:t}=e;return t.textMain}}0A;
  }
  &:focus-visible {
    outline: none;
    transform: translateY(-1px);
    animation: ${qe} 1.6s ease-in-out infinite;
    background: ${e=>{let{theme:t}=e;return t.textMain}}0A;
  }
  &:active {
    transform: translateY(0);
    animation: none;
  }
  @media (max-width: 600px) {
    padding: 8px 12px;
    font-size: 14px;
    flex: 1 1 48%;
    min-width: 0;
  }
`,Qe=l.i7`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`,Xe=l.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  color: ${We};
  position: relative;
  z-index: 3; /* above road */
`,Ge=l.Ay.div`
  width: 160px;
  height: 160px;
  position: relative;
  animation: ${Qe} 3.6s ease-in-out infinite;
  @media (max-width: 600px) {
    width: 132px;
    height: 132px;
  }
`,Ze=l.Ay.div`
  width: 100%;
  height: 100%;
  transition: transform 200ms ease;
`,Je=l.i7`
  0% { transform: rotate(-1deg); }
  50% { transform: rotate(1deg); }
  100% { transform: rotate(-1deg); }
`,et=l.Ay.div`
  width: 100%;
  height: 100%;
  animation: ${Je} 6s ease-in-out infinite;
`,tt=(l.Ay.div`
  width: 120px;
  height: 16px;
  background: ${We}22;
  border-radius: 50%;
  margin: -8px auto 8px;
  filter: blur(2px);
  @media (max-width: 600px) {
    width: 96px;
    height: 14px;
  }
`,(0,l.Ay)(a.fz)`
  text-align: center;
  margin-top: 12px;
  opacity: 0.8;
  font-size: 14px;
  @media (max-width: 900px) {
    display: none;
  }
`),nt=(0,l.Ay)(a.fV)`
  @media (max-width: 600px) {
    font-size: 20px;
  }
`,rt=(0,l.Ay)(a.fz)`
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 24px;
  }
`,it=l.Ay.span`
  @media (max-width: 600px) {
    display: none;
  }
`,at=l.Ay.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  color: ${We};
  transform: translateY(-100px);
  transform-origin: top right;
  @media (max-width: 600px) {
    transform: translateY(-100px) scale(0.8);
  }
`,ot=l.Ay.div`
  position: absolute;
  top: 6%;
  right: 8%;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  /* Explicit moon disc color to avoid theme bleed */
  background: ${We};
  /* Fully opaque to avoid dark edge blending */
  opacity: 1;
  /* Always behind clouds */
  z-index: 0;
  /* Remove harsh inner border/shadow */
  /* White outline to fully cover any dark seam */
  /* Seam liner + warm outline */
  box-shadow:
    0 0 0 1px ${We},
    0 0 0 2px rgba(255, 245, 200, 0.55);
  /* Fill edge with warm drop-shadow to avoid dark ring */
  filter: drop-shadow(0 0 6px rgba(255, 245, 200, 0.35))
    drop-shadow(0 0 18px rgba(255, 245, 200, 0.20));
  /* Allow hover to toggle glow */
  pointer-events: auto;
  /* Additional -30px beyond NightLayer to achieve -50px more from current */
  transform: translateY(-30px);
  /* Soft white outer glow (shadow) */
  &::before {
    content: "";
    position: absolute;
  inset: -10px;
    border-radius: 50%;
    pointer-events: none;
    /* Warmer, slightly yellow glow */
    box-shadow:
      0 0 22px 8px rgba(255, 245, 200, 0.30),
      0 0 64px 22px rgba(255, 245, 200, 0.16);
    opacity: 0.9;
    transition: opacity 200ms ease;
  }
  &::after {
    content: "";
    position: absolute;
  inset: -12px;
    border-radius: 50%;
    /* Warmer ambient halo with soft falloff reaching closer to the edge */
    background: radial-gradient(closest-side,
      rgba(255, 245, 200, 0.24) 58%,
      rgba(255, 245, 200, 0.14) 78%,
      transparent 96%);
    animation: ${l.i7`
      0% { opacity: 0.25; transform: scale(0.98); }
      50% { opacity: 0.4; transform: scale(1.03); }
      100% { opacity: 0.25; transform: scale(0.98); }
    `} 8s ease-in-out infinite;
    transition: opacity 200ms ease;
  }
  &:hover::before {
    opacity: 0;
  }
  &:hover::after {
    opacity: 0;
    animation: none;
  }
  &:hover {
    filter: none;
  }
  @media (max-width: 600px) {
    width: 52px;
    height: 52px;
  }
`,lt=l.Ay.div`
  position: absolute;
  background: ${He};
  opacity: 1; /* solid fill */
  border-radius: 20px;
  /* flat single-color cloud, no internal shading */
  box-shadow: none;
  /* Do not block moon hover even when layered above */
  pointer-events: none;
  /* Always above the moon */
  z-index: 2;
  /* Position props */
  ${e=>void 0!==e.$top&&l.AH`
    top: ${"number"===typeof e.$top?`${e.$top}%`:e.$top};
  `}
  ${e=>void 0!==e.$left&&l.AH`
    left: ${"number"===typeof e.$left?`${e.$left}%`:e.$left};
  `}
  ${e=>void 0!==e.$right&&l.AH`
    right: ${"number"===typeof e.$right?`${e.$right}%`:e.$right};
  `}
  /* Size props */
  ${e=>void 0!==e.$w&&l.AH`
    width: ${e.$w}px;
  `}
  ${e=>void 0!==e.$h&&l.AH`
    height: ${e.$h}px;
  `}
  /* Optional glow to show moonlight on the cloud's edge */
  ${e=>e.$glow&&l.AH`
    filter: drop-shadow(6px 0 14px rgba(255, 245, 200, 0.18))
            drop-shadow(0 0 28px rgba(255, 245, 200, 0.12));
  `}
  ${e=>e.$duration&&l.AH`
    animation: ${st} ${e.$duration}s ease-in-out infinite;
  `}
  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${He};
    border-radius: 50%;
  }
  &::before {
    width: 30px;
    height: 30px;
    left: 18px;
    top: -10px;
    box-shadow:
      22px 6px 0 0 ${He},
      44px -4px 0 2px ${He},
      64px 2px 0 -2px ${He};
  }
  &::after {
    width: 22px;
    height: 22px;
    right: 26px;
    top: -6px;
    box-shadow:
      -18px 4px 0 0 ${He},
      -36px -2px 0 2px ${He};
  }
  @media (max-width: 600px) {
    border-radius: 16px;
    ${e=>void 0!==e.$mobileLeft&&l.AH`
      left: ${"number"===typeof e.$mobileLeft?`${e.$mobileLeft}%`:e.$mobileLeft};
      right: auto;
    `}
    ${e=>void 0!==e.$mobileRight&&l.AH`
      right: ${"number"===typeof e.$mobileRight?`${e.$mobileRight}%`:e.$mobileRight};
      left: auto;
    `}
    ${e=>void 0!==e.$mw&&l.AH`
      width: ${e.$mw}px;
    `}
    ${e=>void 0!==e.$mh&&l.AH`
      height: ${e.$mh}px;
    `}
    &::before { width: 24px; height: 24px; }
    &::after { width: 18px; height: 18px; }
  }
`,st=l.i7`
  0% { transform: translateX(0); }
  50% { transform: translateX(18px); }
  100% { transform: translateX(0); }
`,ct=l.i7`
  0% { transform: translateY(0) skewX(0deg); }
  50% { transform: translateY(-0.8px) skewX(-1deg); }
  100% { transform: translateY(0) skewX(0deg); }
`,dt=l.Ay.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(100% + 12px);
  height: 12px;
  z-index: 3;
  pointer-events: none;
  background:
    repeating-linear-gradient(-70deg, ${We}2A 0 2px, transparent 2px 6px),
    repeating-linear-gradient(70deg, ${We}22 0 2px, transparent 2px 6px);
  animation: ${ct} 5.6s ease-in-out infinite;
  @media (max-width: 600px) {
    height: 10px;
    bottom: calc(100% + 10px);
  }
`,ut=l.Ay.div`
  position: relative;
  margin: 0 auto;
  width: fit-content;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(100% + 0px);
  height: 10px;
    background: ${We}26;
    border-radius: 8px;
    z-index: 2;
    pointer-events: none;
  }
`,ft=l.Ay.div`
  position: absolute;
  bottom: 0;
  background: ${We}66;
  border-radius: 55% 45% 25% 25% / 70% 70% 20% 20%;
  transform: skewX(-6deg) rotate(-2deg);
  &::before {
    content: "";
    position: absolute;
    left: 14%;
    top: 10%;
    width: 46%;
    height: 28%;
    background: ${We}22;
    border-radius: 50%;
    filter: blur(0.5px);
  }
  @media (max-width: 600px) {
    transform: skewX(-6deg) rotate(-2deg) scale(0.9);
  }
`,pt=l.Ay.div`
  position: absolute;
  bottom: 1px;
  width: 6px;
  height: 4px;
  border-radius: 60% 40% 40% 40% / 70% 60% 40% 40%;
  background: ${We}88;
  transform: rotate(-12deg);
`,ht=l.i7`
  0% { transform: translateX(0) skewX(-6deg) rotate(-2deg); }
  50% { transform: translateX(2px) skewX(-6deg) rotate(-2deg); }
  100% { transform: translateX(0) skewX(-6deg) rotate(-2deg); }
`,mt=(0,l.Ay)(ft)`
  animation: ${ht} ${e=>e.$duration||9}s ease-in-out infinite;
  ${e=>void 0!==e.$left&&l.AH`
    left: ${"number"===typeof e.$left?`${e.$left}%`:e.$left};
  `}
  ${e=>void 0!==e.$width&&l.AH`
    width: ${e.$width}px;
  `}
  ${e=>void 0!==e.$height&&l.AH`
    height: ${e.$height}px;
  `}
  @media (max-width: 600px) {
    ${e=>void 0!==e.$mLeft&&l.AH`
      left: ${"number"===typeof e.$mLeft?`${e.$mLeft}%`:e.$mLeft};
    `}
    ${e=>void 0!==e.$mWidth&&l.AH`
      width: ${e.$mWidth}px;
    `}
    ${e=>void 0!==e.$mHeight&&l.AH`
      height: ${e.$mHeight}px;
    `}
  }
`,gt=l.Ay.div`
  position: relative;
  width: 100%;
  transform: translateY(90px);
`,yt=l.Ay.div`
  position: relative;
  width: 100%;
  transform: translateY(100px);
  transform-origin: bottom center;
  /* No scaling on mobile to keep text crisp */
`,xt=(l.Ay.div`
  margin-top: 10px;
  text-align: center;
  color: ${We};
  font-size: 12px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  user-select: none;
`,()=>{const e=(0,i.Zp)(),t="undefined"!==typeof window&&window.history&&window.history.length>1,[n,o]=(0,r.useState)(0),[l,s]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const n=n=>{if(!t)return;("Backspace"===n.key||n.altKey&&"ArrowLeft"===n.key)&&(n.preventDefault(),e(-1))};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)}),[t,e]),(0,f.jsx)(Fe,{children:(0,f.jsxs)(gt,{children:[(0,f.jsxs)(at,{"aria-hidden":"true",children:[(0,f.jsx)(ot,{}),(0,f.jsx)(lt,{$duration:36,$top:"16%",$left:"14%",$w:160,$h:34,$mobileLeft:"0",$mw:136,$mh:30}),(0,f.jsx)(lt,{$duration:48,$glow:!0,$top:"6%",$right:"6%",$w:240,$h:46,$mobileRight:"4%",$mw:200,$mh:40})]}),(0,f.jsx)(yt,{children:(0,f.jsx)(a.Z6,{children:(0,f.jsxs)(ut,{children:[(0,f.jsx)(dt,{}),(0,f.jsx)(Xe,{"aria-hidden":"true",style:{position:"absolute",left:0,right:0,bottom:"calc(100% + 12px)"},children:(0,f.jsx)("div",{children:(0,f.jsx)(Ge,{children:(0,f.jsx)("div",{children:(0,f.jsx)(et,{children:(0,f.jsx)(Ze,{onMouseEnter:()=>s(!0),onMouseLeave:()=>{s(!1),o(0)},onMouseMove:e=>{const t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,r=Math.max(0,Math.min(1,n/t.width));o(6*(r-.5))},style:{transform:l?"rotate(1deg)":"rotate(-3deg)"},children:(0,f.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsx)("path",{d:"M50 14c-14 0-24 10.5-24 26v22c0 2.2 2.5 3.1 4 1.7l3-2.8 3 2.8c1.4 1.3 3.6 1.3 5 0l3-2.8 3 2.8c1.4 1.3 3.6 1.3 5 0l3-2.8 3 2.8c1.5 1.4 4 .5 4-1.7V40c0-15.5-10-26-24-26z",fill:"currentColor",fillOpacity:"0.1",stroke:"currentColor",strokeOpacity:"0.6",strokeWidth:"1.5"}),(0,f.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",fill:"none",opacity:"0.65",children:[(0,f.jsx)("path",{d:l?"M36 36 Q 41 32 46 36":"M35 38 Q 41 39 47 38"}),(0,f.jsx)("path",{d:l?"M54 36 Q 59 32 64 36":"M54 36.5 Q 59 35 64 36.5"})]}),(0,f.jsxs)("g",{transform:`translate(${n}, 2)`,children:[(0,f.jsx)("ellipse",{cx:"41",cy:"42",rx:"5.2",ry:"5.4",fill:"#ffffff",style:{transformOrigin:"41px 42px"},children:(0,f.jsx)("animate",{attributeName:"ry",values:"5.4;1;5.4",dur:"4s",repeatCount:"indefinite",begin:"0.2s"})}),(0,f.jsx)("ellipse",{cx:"59",cy:"42",rx:"5.2",ry:"5.4",fill:"#ffffff",style:{transformOrigin:"59px 42px"},children:(0,f.jsx)("animate",{attributeName:"ry",values:"5.4;1;5.4",dur:"4s",repeatCount:"indefinite",begin:"0.3s"})}),(0,f.jsx)("circle",{cx:"41",cy:"42",r:"2.1",fill:"#0a0a0d"}),(0,f.jsx)("circle",{cx:"59",cy:"42",r:"2.1",fill:"#0a0a0d"}),(0,f.jsx)("circle",{cx:"39.8",cy:"40.4",r:"0.7",fill:"#ffffff",fillOpacity:"0.95"}),(0,f.jsx)("circle",{cx:"57.8",cy:"40.4",r:"0.7",fill:"#ffffff",fillOpacity:"0.95"})]}),(0,f.jsx)("circle",{cx:"18",cy:"30",r:"1.5",fill:"currentColor",fillOpacity:"0.6",children:(0,f.jsx)("animate",{attributeName:"opacity",values:"0.2;1;0.2",dur:"3s",repeatCount:"indefinite"})}),(0,f.jsx)("circle",{cx:"82",cy:"28",r:"1.2",fill:"currentColor",fillOpacity:"0.6",children:(0,f.jsx)("animate",{attributeName:"opacity",values:"0.2;1;0.2",dur:"3.2s",repeatCount:"indefinite"})}),(0,f.jsx)("circle",{cx:"14",cy:"58",r:"1.2",fill:"currentColor",fillOpacity:"0.5",children:(0,f.jsx)("animate",{attributeName:"opacity",values:"0.2;1;0.2",dur:"2.8s",repeatCount:"indefinite"})})]})})})})})})}),(0,f.jsxs)(Ve,{children:[(0,f.jsx)(nt,{style:{marginTop:0},children:"Page not found"}),(0,f.jsxs)(rt,{children:["The page you\u2019re looking for doesn\u2019t exist or has been moved.",(0,f.jsx)(it,{children:" You can return to the previous page or head back home."})]}),(0,f.jsx)(Ue,{children:t?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(Ye,{type:"button",onClick:()=>e(-1),children:[(0,f.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",style:{marginRight:6},children:(0,f.jsx)("path",{d:"M15 18l-6-6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"Go back"]}),(0,f.jsx)(Ke,{to:"/",children:"Go to Home"})]}):(0,f.jsx)(Ke,{to:"/",children:"Go to Home"})})]}),(0,f.jsx)("div",{style:{position:"absolute",left:0,right:0,bottom:"calc(100% + 12px)",zIndex:3,pointerEvents:"none"},children:(0,f.jsxs)("div",{style:{position:"relative",width:"100%",height:12},children:[(0,f.jsx)(mt,{$duration:11,$left:46,$width:32,$height:16,$mLeft:40,$mWidth:28,$mHeight:14}),(0,f.jsx)(mt,{$duration:13,$left:56,$width:30,$height:18,$mLeft:58,$mWidth:26,$mHeight:16}),(0,f.jsx)(pt,{style:{left:"66%"}})]})}),t&&(0,f.jsx)(tt,{children:"Tip: Press Backspace or Alt + Left Arrow to go back"})]})})})]})})})},2730:(e,t,n)=>{"use strict";var r=n(5043),i=n(8853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}function v(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!u.call(h,e)||!u.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,x);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,x);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,x);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),_=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),$=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function B(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var N,O=Object.assign;function M(e){if(void 0===N)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var R=!1;function D(e,t){if(!e||R)return"";R=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(1!==o||1!==l)do{if(o--,0>--l||i[o]!==a[l]){var s="\n"+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{R=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function F(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=D(e.type,!1);case 11:return e=D(e.type.render,!1);case 1:return e=D(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case C:return"Profiler";case S:return"StrictMode";case T:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function U(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=U(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=U(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function Z(e,t){G(e,t);var n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function ae(e,t){var n=V(t.value),r=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,ue=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return de(e,t)}))}:de);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ye=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ce(e){if(e=vi(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ee(e){je?Se?Se.push(e):Se=[e]:je=e}function _e(){if(je){var e=je,t=Se;if(Se=je=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function ze(e,t){return e(t)}function Te(){}var Ae=!1;function Pe(e,t,n){if(Ae)return e(t,n);Ae=!0;try{return ze(e,t,n)}finally{Ae=!1,(null!==je||null!==Se)&&(Te(),_e())}}function $e(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Ie=!1;if(d)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){Ie=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(de){Ie=!1}function Be(e,t,n,r,i,a,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ne=!1,Oe=null,Me=!1,Re=null,De={onError:function(e){Ne=!0,Oe=e}};function Fe(e,t,n,r,i,a,o,l,s){Ne=!1,Oe=null,Be.apply(De,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if(We(e)!==e)throw Error(a(188))}function Ue(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ve(i),e;if(o===r)return Ve(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Ye=i.unstable_cancelCallback,Qe=i.unstable_shouldYield,Xe=i.unstable_requestPaint,Ge=i.unstable_now,Ze=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,dt=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~i;0!==l?r=ut(l):0!==(a&=o)&&(r=ut(a))}else 0!==(o=n&~i)?r=ut(o):0!==a&&(r=ut(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,jt,St,Ct,Et=!1,_t=[],zt=null,Tt=null,At=null,Pt=new Map,$t=new Map,It=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Pt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(t.pointerId)}}function Nt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=vi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ot(e){var t=xi(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Ct(e.priority,(function(){jt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=vi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Rt(e,t,n){Mt(e)&&n.delete(t)}function Dt(){Et=!1,null!==zt&&Mt(zt)&&(zt=null),null!==Tt&&Mt(Tt)&&(Tt=null),null!==At&&Mt(At)&&(At=null),Pt.forEach(Rt),$t.forEach(Rt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Dt)))}function Wt(e){function t(t){return Ft(t,e)}if(0<_t.length){Ft(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Ft(zt,e),null!==Tt&&Ft(Tt,e),null!==At&&Ft(At,e),Pt.forEach(t),$t.forEach(t),n=0;n<It.length;n++)(r=It[n]).blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&null===(n=It[0]).blockedOn;)Ot(n),null===n.blockedOn&&It.shift()}var Ht=b.ReactCurrentBatchConfig,Vt=!0;function Ut(e,t,n,r){var i=vt,a=Ht.transition;Ht.transition=null;try{vt=1,Kt(e,t,n,r)}finally{vt=i,Ht.transition=a}}function qt(e,t,n,r){var i=vt,a=Ht.transition;Ht.transition=null;try{vt=4,Kt(e,t,n,r)}finally{vt=i,Ht.transition=a}}function Kt(e,t,n,r){if(Vt){var i=Qt(e,t,n,r);if(null===i)Vr(e,t,r,Yt,n),Bt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return zt=Nt(zt,e,t,n,r,i),!0;case"dragenter":return Tt=Nt(Tt,e,t,n,r,i),!0;case"mouseover":return At=Nt(At,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Pt.set(a,Nt(Pt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,$t.set(a,Nt($t.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Bt(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==i;){var a=vi(i);if(null!==a&&wt(a),null===(a=Qt(e,t,n,r))&&Vr(e,t,r,Yt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Vr(e,t,r,null,n)}}var Yt=null;function Qt(e,t,n,r){if(Yt=null,null!==(e=xi(e=we(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,i="value"in Gt?Gt.value:Gt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=an(cn),un=O({},cn,{view:0,detail:0}),fn=an(un),pn=O({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(O({},pn,{dataTransfer:0})),gn=an(O({},un,{relatedTarget:0})),yn=an(O({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),xn=O({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=an(xn),bn=an(O({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function Cn(){return Sn}var En=O({},un,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(En),zn=an(O({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=an(O({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),An=an(O({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Pn=O({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$n=an(Pn),In=[9,13,27,32],Ln=d&&"CompositionEvent"in window,Bn=null;d&&"documentMode"in document&&(Bn=document.documentMode);var Nn=d&&"TextEvent"in window&&!Bn,On=d&&(!Ln||Bn&&8<Bn&&11>=Bn),Mn=String.fromCharCode(32),Rn=!1;function Dn(e,t){switch(e){case"keyup":return-1!==In.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Un(e,t,n,r){Ee(r),0<(t=qr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Kn=null;function Yn(e){Mr(e,0)}function Qn(e){if(K(bi(e)))return e}function Xn(e,t){if("change"===e)return t}var Gn=!1;if(d){var Zn;if(d){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Gn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Kn=qn=null)}function nr(e){if("value"===e.propertyName&&Qn(Kn)){var t=[];Un(t,Kn,e,we(e)),Pe(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Kn)}function ar(e,t){if("click"===e)return Qn(t)}function or(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!u.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function ur(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ur(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ur(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=dr(n,a);var o=dr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=d&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,xr=null,vr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},xr&&sr(xr,r)||(xr=r,0<(r=qr(yr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},jr={},Sr={};function Cr(e){if(jr[e])return jr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return jr[e]=n[t];return e}d&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),_r=Cr("animationiteration"),zr=Cr("animationstart"),Tr=Cr("transitionend"),Ar=new Map,Pr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(e,t){Ar.set(e,t),s(t,[e])}for(var Ir=0;Ir<Pr.length;Ir++){var Lr=Pr[Ir];$r(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}$r(Er,"onAnimationEnd"),$r(_r,"onAnimationIteration"),$r(zr,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(Tr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Or(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,l,s,c){if(Fe.apply(this,arguments),Ne){if(!Ne)throw Error(a(198));var d=Oe;Ne=!1,Oe=null,Me||(Me=!0,Re=d)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Or(i,l,c),a=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,c=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Or(i,l,c),a=s}}}if(Me)throw e=Re,Me=!1,Re=null,e}function Rr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Dr(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Fr]){e[Fr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Nr.has(t)||Dr(t,!1,e),Dr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fr]||(t[Fr]=!0,Dr("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Xt(t)){case 1:var i=Ut;break;case 4:i=qt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!Ie||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vr(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===i||8===l.nodeType&&l.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===i||8===s.nodeType&&s.parentNode===i))return;o=o.return}for(;null!==l;){if(null===(o=xi(l)))return;if(5===(s=o.tag)||6===s){r=a=o;continue e}l=l.parentNode}}r=r.return}Pe((function(){var r=a,i=we(n),o=[];e:{var l=Ar.get(e);if(void 0!==l){var s=dn,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Tn;break;case Er:case _r:case zr:s=yn;break;case Tr:s=An;break;case"scroll":s=fn;break;case"wheel":s=$n;break;case"copy":case"cut":case"paste":s=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zn}var d=0!==(4&t),u=!d&&"scroll"===e,f=d?null!==l?l+"Capture":null:l;d=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=$e(h,f))&&d.push(Ur(h,m,p)))),u)break;h=h.return}0<d.length&&(l=new s(l,c,null,n,i),o.push({event:l,listeners:d}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!xi(c)&&!c[hi])&&(s||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?xi(c):null)&&(c!==(u=We(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(d=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=zn,m="onPointerLeave",f="onPointerEnter",h="pointer"),u=null==s?l:bi(s),p=null==c?l:bi(c),(l=new d(m,h+"leave",s,n,i)).target=u,l.relatedTarget=p,m=null,xi(i)===r&&((d=new d(f,h+"enter",c,n,i)).target=p,d.relatedTarget=u,m=d),u=m,s&&c)e:{for(f=c,h=0,p=d=s;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)d=Kr(d),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(d===f||null!==f&&d===f.alternate)break e;d=Kr(d),f=Kr(f)}d=null}else d=null;null!==s&&Yr(o,l,s,d,!1),null!==c&&null!==u&&Yr(o,u,c,d,!0)}if("select"===(s=(l=r?bi(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Xn;else if(Vn(l))if(Gn)g=or;else{g=ir;var y=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ar);switch(g&&(g=g(e,r))?Un(o,g,n,i):(y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&ee(l,"number",l.value)),y=r?bi(r):window,e){case"focusin":(Vn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,xr=null);break;case"focusout":xr=yr=gr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,br(o,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(o,n,i)}var x;if(Ln)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Wn?Dn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(On&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Wn&&(x=en()):(Zt="value"in(Gt=i)?Gt.value:Gt.textContent,Wn=!0)),0<(y=qr(r,v)).length&&(v=new bn(v,e,null,n,i),o.push({event:v,listeners:y}),x?v.data=x:null!==(x=Fn(n))&&(v.data=x))),(x=Nn?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(Rn=!0,Mn);case"textInput":return(e=t.data)===Mn&&Rn?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!Ln&&Dn(e,t)?(e=en(),Jt=Zt=Gt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return On&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=x))}Mr(o,t)}))}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=$e(e,n))&&r.unshift(Ur(e,a,i)),null!=(a=$e(e,t))&&r.push(Ur(e,a,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,i?null!=(s=$e(n,a))&&o.unshift(Ur(n,s,l)):i||null!=(s=$e(n,a))&&o.push(Ur(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Xr,"")}function Zr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(a(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(li)}:ri;function li(e){setTimeout((function(){throw e}))}function si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Wt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),fi="__reactFiber$"+ui,pi="__reactProps$"+ui,hi="__reactContainer$"+ui,mi="__reactEvents$"+ui,gi="__reactListeners$"+ui,yi="__reactHandles$"+ui;function xi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=di(e);null!==e;){if(n=e[fi])return n;e=di(e)}return t}n=(e=n).parentNode}return null}function vi(e){return!(e=e[fi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[pi]||null}var ki=[],ji=-1;function Si(e){return{current:e}}function Ci(e){0>ji||(e.current=ki[ji],ki[ji]=null,ji--)}function Ei(e,t){ji++,ki[ji]=e.current,e.current=t}var _i={},zi=Si(_i),Ti=Si(!1),Ai=_i;function Pi(e,t){var n=e.type.contextTypes;if(!n)return _i;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function $i(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ii(){Ci(Ti),Ci(zi)}function Li(e,t,n){if(zi.current!==_i)throw Error(a(168));Ei(zi,t),Ei(Ti,n)}function Bi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,H(e)||"Unknown",i));return O({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_i,Ai=zi.current,Ei(zi,e),Ei(Ti,Ti.current),!0}function Oi(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Bi(e,t,Ai),r.__reactInternalMemoizedMergedChildContext=e,Ci(Ti),Ci(zi),Ei(zi,e)):Ci(Ti),Ei(Ti,n)}var Mi=null,Ri=!1,Di=!1;function Fi(e){null===Mi?Mi=[e]:Mi.push(e)}function Wi(){if(!Di&&null!==Mi){Di=!0;var e=0,t=vt;try{var n=Mi;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Mi=null,Ri=!1}catch(i){throw null!==Mi&&(Mi=Mi.slice(e+1)),Ke(Je,Wi),i}finally{vt=t,Di=!1}}return null}var Hi=[],Vi=0,Ui=null,qi=0,Ki=[],Yi=0,Qi=null,Xi=1,Gi="";function Zi(e,t){Hi[Vi++]=qi,Hi[Vi++]=Ui,Ui=e,qi=t}function Ji(e,t,n){Ki[Yi++]=Xi,Ki[Yi++]=Gi,Ki[Yi++]=Qi,Qi=e;var r=Xi;e=Gi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xi=1<<32-ot(t)+i|n<<i|r,Gi=a+e}else Xi=1<<a|n<<i|r,Gi=e}function ea(e){null!==e.return&&(Zi(e,1),Ji(e,1,0))}function ta(e){for(;e===Ui;)Ui=Hi[--Vi],Hi[Vi]=null,qi=Hi[--Vi],Hi[Vi]=null;for(;e===Qi;)Qi=Ki[--Yi],Ki[Yi]=null,Gi=Ki[--Yi],Ki[Yi]=null,Xi=Ki[--Yi],Ki[Yi]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Pc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function la(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qi?{id:Xi,overflow:Gi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Pc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function sa(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=ra;if(t){var n=t;if(!la(e,t)){if(sa(e))throw Error(a(418));t=ci(n.nextSibling);var r=na;t&&la(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(sa(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function ua(e){if(e!==na)return!1;if(!ia)return da(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(sa(e))throw fa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ci(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=ra;e;)e=ci(e.nextSibling)}function pa(){ra=na=null,ia=!1}function ha(e){null===aa?aa=[e]:aa.push(e)}var ma=b.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xa(e){return(0,e._init)(e._payload)}function va(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Ic(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Oc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===j?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===$&&xa(a)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=Lc(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,a){return null===t||7!==t.tag?((t=Bc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Oc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lc(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case k:return(t=Mc(t,e.mode,n)).return=e,t;case $:return f(e,(0,t._init)(t._payload),n)}if(te(t)||B(t))return(t=Bc(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?d(e,t,n,r):null;case $:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||B(n))return null!==i?null:u(e,t,n,r,null);ya(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return d(t,e=e.get(null===r.key?n:r.key)||null,r,i);case $:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||B(r))return u(t,e=e.get(n)||null,r,i,null);ya(t,r)}return null}function m(i,a,l,s){for(var c=null,d=null,u=a,m=a=0,g=null;null!==u&&m<l.length;m++){u.index>m?(g=u,u=null):g=u.sibling;var y=p(i,u,l[m],s);if(null===y){null===u&&(u=g);break}e&&u&&null===y.alternate&&t(i,u),a=o(y,a,m),null===d?c=y:d.sibling=y,d=y,u=g}if(m===l.length)return n(i,u),ia&&Zi(i,m),c;if(null===u){for(;m<l.length;m++)null!==(u=f(i,l[m],s))&&(a=o(u,a,m),null===d?c=u:d.sibling=u,d=u);return ia&&Zi(i,m),c}for(u=r(i,u);m<l.length;m++)null!==(g=h(u,i,m,l[m],s))&&(e&&null!==g.alternate&&u.delete(null===g.key?m:g.key),a=o(g,a,m),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach((function(e){return t(i,e)})),ia&&Zi(i,m),c}function g(i,l,s,c){var d=B(s);if("function"!==typeof d)throw Error(a(150));if(null==(s=d.call(s)))throw Error(a(151));for(var u=d=null,m=l,g=l=0,y=null,x=s.next();null!==m&&!x.done;g++,x=s.next()){m.index>g?(y=m,m=null):y=m.sibling;var v=p(i,m,x.value,c);if(null===v){null===m&&(m=y);break}e&&m&&null===v.alternate&&t(i,m),l=o(v,l,g),null===u?d=v:u.sibling=v,u=v,m=y}if(x.done)return n(i,m),ia&&Zi(i,g),d;if(null===m){for(;!x.done;g++,x=s.next())null!==(x=f(i,x.value,c))&&(l=o(x,l,g),null===u?d=x:u.sibling=x,u=x);return ia&&Zi(i,g),d}for(m=r(i,m);!x.done;g++,x=s.next())null!==(x=h(m,i,g,x.value,c))&&(e&&null!==x.alternate&&m.delete(null===x.key?g:x.key),l=o(x,l,g),null===u?d=x:u.sibling=x,u=x);return e&&m.forEach((function(e){return t(i,e)})),ia&&Zi(i,g),d}return function e(r,a,o,s){if("object"===typeof o&&null!==o&&o.type===j&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,d=a;null!==d;){if(d.key===c){if((c=o.type)===j){if(7===d.tag){n(r,d.sibling),(a=i(d,o.props.children)).return=r,r=a;break e}}else if(d.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===$&&xa(c)===d.type){n(r,d.sibling),(a=i(d,o.props)).ref=ga(r,d,o),a.return=r,r=a;break e}n(r,d);break}t(r,d),d=d.sibling}o.type===j?((a=Bc(o.props.children,r.mode,s,o.key)).return=r,r=a):((s=Lc(o.type,o.key,o.props,null,r.mode,s)).ref=ga(r,a,o),s.return=r,r=s)}return l(r);case k:e:{for(d=o.key;null!==a;){if(a.key===d){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Mc(o,r.mode,s)).return=r,r=a}return l(r);case $:return e(r,a,(d=o._init)(o._payload),s)}if(te(o))return m(r,a,o,s);if(B(o))return g(r,a,o,s);ya(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Oc(o,r.mode,s)).return=r,r=a),l(r)):n(r,a)}}var ba=va(!0),wa=va(!1),ka=Si(null),ja=null,Sa=null,Ca=null;function Ea(){Ca=Sa=ja=null}function _a(e){var t=ka.current;Ci(ka),e._currentValue=t}function za(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t){ja=e,Ca=Sa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vl=!0),e.firstContext=null)}function Aa(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===Sa){if(null===ja)throw Error(a(308));Sa=e,ja.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return t}var Pa=null;function $a(e){null===Pa?Pa=[e]:Pa.push(e)}function Ia(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,$a(t)):(n.next=i.next,i.next=n),t.interleaved=n,La(e,r)}function La(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ba=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ma(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ra(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zs)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,La(e,n)}return null===(i=r.interleaved)?(t.next=t,$a(r)):(t.next=i.next,i.next=t),r.interleaved=t,La(e,n)}function Da(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}function Fa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wa(e,t,n,r){var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?a=c:o.next=c,o=s;var d=e.alternate;null!==d&&((l=(d=d.updateQueue).lastBaseUpdate)!==o&&(null===l?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(null!==a){var u=i.baseState;for(o=0,d=c=s=null,l=a;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==d&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){u=h.call(p,u,f);break e}u=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,u,f):h)||void 0===f)break e;u=O({},u,f);break e;case 2:Ba=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===d?(c=d=p,s=u):d=d.next=p,o|=f;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(f=l).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===d&&(s=u),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ns|=o,e.lanes=o,e.memoizedState=u}}function Ha(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Va={},Ua=Si(Va),qa=Si(Va),Ka=Si(Va);function Ya(e){if(e===Va)throw Error(a(174));return e}function Qa(e,t){switch(Ei(Ka,t),Ei(qa,e),Ei(Ua,Va),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Ua),Ei(Ua,t)}function Xa(){Ci(Ua),Ci(qa),Ci(Ka)}function Ga(e){Ya(Ka.current);var t=Ya(Ua.current),n=se(t,e.type);t!==n&&(Ei(qa,e),Ei(Ua,n))}function Za(e){qa.current===e&&(Ci(Ua),Ci(qa))}var Ja=Si(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=b.ReactCurrentDispatcher,io=b.ReactCurrentBatchConfig,ao=0,oo=null,lo=null,so=null,co=!1,uo=!1,fo=0,po=0;function ho(){throw Error(a(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Jo:el,e=n(r,i),uo){o=0;do{if(uo=!1,fo=0,25<=o)throw Error(a(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,i)}while(uo)}if(ro.current=Zo,t=null!==lo&&null!==lo.next,ao=0,so=lo=oo=null,co=!1,t)throw Error(a(300));return e}function yo(){var e=0!==fo;return fo=0,e}function xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function vo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function bo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=vo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=lo,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var s=l=null,c=null,d=o;do{var u=d.lane;if((ao&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(s=c=f,l=r):c=c.next=f,oo.lanes|=u,Ns|=u}d=d.next}while(null!==d&&d!==o);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(vl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Ns|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=vo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{o=e(o,l.action),l=l.next}while(l!==i);lr(o,t.memoizedState)||(vl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jo(){}function So(e,t){var n=oo,r=vo(),i=t(),o=!lr(r.memoizedState,i);if(o&&(r.memoizedState=i,vl=!0),r=r.queue,No(_o.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,Po(9,Eo.bind(null,n,r,i,t),void 0,null),null===Ts)throw Error(a(349));0!==(30&ao)||Co(n,t,i)}return i}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Eo(e,t,n,r){t.value=n,t.getSnapshot=r,zo(t)&&To(e)}function _o(e,t,n){return n((function(){zo(t)&&To(e)}))}function zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function To(e){var t=La(e,1);null!==t&&nc(t,e,1,-1)}function Ao(e){var t=xo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function $o(){return vo().memoizedState}function Io(e,t,n,r){var i=xo();oo.flags|=e,i.memoizedState=Po(1|t,n,void 0,void 0===r?null:r)}function Lo(e,t,n,r){var i=vo();r=void 0===r?null:r;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==r&&mo(r,o.deps))return void(i.memoizedState=Po(t,n,a,r))}oo.flags|=e,i.memoizedState=Po(1|t,n,a,r)}function Bo(e,t){return Io(8390656,8,e,t)}function No(e,t){return Lo(2048,8,e,t)}function Oo(e,t){return Lo(4,2,e,t)}function Mo(e,t){return Lo(4,4,e,t)}function Ro(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Do(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Lo(4,4,Ro.bind(null,t,e),n)}function Fo(){}function Wo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ho(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vo(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,vl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Ns|=n,e.baseState=!0),t)}function Uo(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{vt=n,io.transition=r}}function qo(){return vo().memoizedState}function Ko(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qo(e))Xo(t,n);else if(null!==(n=Ia(e,t,n,r))){nc(n,e,r,ec()),Go(n,t,r)}}function Yo(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))Xo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(i.next=i,$a(t)):(i.next=s.next,s.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Ia(e,t,i,r))&&(nc(n,e,r,i=ec()),Go(n,t,r))}}function Qo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Xo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Go(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}var Zo={readContext:Aa,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Jo={readContext:Aa,useCallback:function(e,t){return xo().memoizedState=[e,void 0===t?null:t],e},useContext:Aa,useEffect:Bo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Io(4194308,4,Ro.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=xo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},xo().memoizedState=e},useState:Ao,useDebugValue:Fo,useDeferredValue:function(e){return xo().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=Uo.bind(null,e[1]),xo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=xo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Ts)throw Error(a(349));0!==(30&ao)||Co(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bo(_o.bind(null,r,o,e),[e]),r.flags|=2048,Po(9,Eo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xo(),t=Ts.identifierPrefix;if(ia){var n=Gi;t=":"+t+"R"+(n=(Xi&~(1<<32-ot(Xi)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Aa,useCallback:Wo,useContext:Aa,useEffect:No,useImperativeHandle:Do,useInsertionEffect:Oo,useLayoutEffect:Mo,useMemo:Ho,useReducer:wo,useRef:$o,useState:function(){return wo(bo)},useDebugValue:Fo,useDeferredValue:function(e){return Vo(vo(),lo.memoizedState,e)},useTransition:function(){return[wo(bo)[0],vo().memoizedState]},useMutableSource:jo,useSyncExternalStore:So,useId:qo,unstable_isNewReconciler:!1},tl={readContext:Aa,useCallback:Wo,useContext:Aa,useEffect:No,useImperativeHandle:Do,useInsertionEffect:Oo,useLayoutEffect:Mo,useMemo:Ho,useReducer:ko,useRef:$o,useState:function(){return ko(bo)},useDebugValue:Fo,useDeferredValue:function(e){var t=vo();return null===lo?t.memoizedState=e:Vo(t,lo.memoizedState,e)},useTransition:function(){return[ko(bo)[0],vo().memoizedState]},useMutableSource:jo,useSyncExternalStore:So,useId:qo,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=O({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:O({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Ma(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ra(e,a,i))&&(nc(t,e,i,r),Da(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Ma(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ra(e,a,i))&&(nc(t,e,i,r),Da(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Ma(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Ra(e,i,r))&&(nc(t,e,r,n),Da(t,e,r))}};function al(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(i,a))}function ol(e,t,n){var r=!1,i=_i,a=t.contextType;return"object"===typeof a&&null!==a?a=Aa(a):(i=$i(t)?Ai:zi.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Pi(e,i):_i),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Na(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=Aa(a):(a=$i(t)?Ai:zi.current,i.context=Pi(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rl(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Wa(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=F(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ul(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Ma(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vs||(Vs=!0,Us=r),ul(0,t)},n}function hl(e,t,n){(n=Ma(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ul(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){ul(0,t),"function"!==typeof r&&(null===qs?qs=new Set([this]):qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ma(-1,1)).tag=2,Ra(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var xl=b.ReactCurrentOwner,vl=!1;function bl(e,t,n,r){t.child=null===e?wa(t,null,n,r):ba(t,e.child,n,r)}function wl(e,t,n,r,i){n=n.render;var a=t.ref;return Ta(t,i),r=go(e,t,n,r,a,i),n=yo(),null===e||vl?(ia&&n&&ea(t),t.flags|=1,bl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vl(e,t,i))}function kl(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||$c(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,jl(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Vl(e,t,i)}return t.flags|=1,(e=Ic(a,r)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(vl=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Vl(e,t,i);0!==(131072&e.flags)&&(vl=!0)}}return El(e,t,n,r,i)}function Sl(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ei(Is,$s),$s|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ei(Is,$s),$s|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ei(Is,$s),$s|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ei(Is,$s),$s|=r;return bl(e,t,i,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,i){var a=$i(n)?Ai:zi.current;return a=Pi(t,a),Ta(t,i),n=go(e,t,n,r,a,i),r=yo(),null===e||vl?(ia&&r&&ea(t),t.flags|=1,bl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vl(e,t,i))}function _l(e,t,n,r,i){if($i(n)){var a=!0;Ni(t)}else a=!1;if(Ta(t,i),null===t.stateNode)Hl(e,t),ol(t,n,r),sl(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Aa(c):c=Pi(t,c=$i(n)?Ai:zi.current);var d=n.getDerivedStateFromProps,u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate;u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,o,r,c),Ba=!1;var f=t.memoizedState;o.state=f,Wa(t,r,o,i),s=t.memoizedState,l!==r||f!==s||Ti.current||Ba?("function"===typeof d&&(rl(t,n,d,r),s=t.memoizedState),(l=Ba||al(t,n,l,r,f,s,c))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Oa(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),o.props=c,u=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Aa(s):s=Pi(t,s=$i(n)?Ai:zi.current);var p=n.getDerivedStateFromProps;(d="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==u||f!==s)&&ll(t,o,r,s),Ba=!1,f=t.memoizedState,o.state=f,Wa(t,r,o,i);var h=t.memoizedState;l!==u||f!==h||Ti.current||Ba?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(c=Ba||al(t,n,c,r,f,h,s)||!1)?(d||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,a,i)}function zl(e,t,n,r,i,a){Cl(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Oi(t,n,!1),Vl(e,t,a);r=t.stateNode,xl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=ba(t,e.child,null,a),t.child=ba(t,null,l,a)):bl(e,t,l,a),t.memoizedState=r.state,i&&Oi(t,n,!0),t.child}function Tl(e){var t=e.stateNode;t.pendingContext?Li(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Li(0,t.context,!1),Qa(e,t.containerInfo)}function Al(e,t,n,r,i){return pa(),ha(i),t.flags|=256,bl(e,t,n,r),t.child}var Pl,$l,Il,Ll,Bl={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ol(e,t,n){var r,i=t.pendingProps,o=Ja.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ei(Ja,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,l?(i=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&i)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Nc(s,i,0,null),e=Bc(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Nl(n),t.memoizedState=Bl,e):Ml(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,l){if(n)return 256&t.flags?(t.flags&=-257,Rl(e,t,l,r=dl(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Nc({mode:"visible",children:r.children},i,0,null),(o=Bc(o,i,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&ba(t,e.child,null,l),t.child.memoizedState=Nl(l),t.memoizedState=Bl,o);if(0===(1&t.mode))return Rl(e,t,l,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Rl(e,t,l,r=dl(o=Error(a(419)),r,void 0))}if(s=0!==(l&e.childLanes),vl||s){if(null!==(r=Ts)){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|l))?0:i)&&i!==o.retryLane&&(o.retryLane=i,La(e,i),nc(r,e,i,-1))}return mc(),Rl(e,t,l,r=dl(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=_c.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ci(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(Ki[Yi++]=Xi,Ki[Yi++]=Gi,Ki[Yi++]=Qi,Xi=e.id,Gi=e.overflow,Qi=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,o,n);if(l){l=i.fallback,s=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&s)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Ic(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Ic(r,l):(l=Bc(l,s,n,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,s=null===(s=e.child.memoizedState)?Nl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Bl,i}return e=(l=e.child).sibling,i=Ic(l,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ml(e,t){return(t=Nc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Rl(e,t,n,r){return null!==r&&ha(r),ba(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Dl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),za(e.return,t,n)}function Fl(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Wl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=Ja.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Dl(e,n,t);else if(19===e.tag)Dl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ei(Ja,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fl(t,!0,n,null,a);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ns|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ic(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ic(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ul(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(t),null;case 1:case 17:return $i(t.type)&&Ii(),ql(t),null;case 3:return r=t.stateNode,Xa(),Ci(Ti),Ci(zi),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),$l(e,t),ql(t),null;case 5:Za(t);var i=Ya(Ka.current);if(n=t.type,null!==e&&null!=t.stateNode)Il(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ql(t),null}if(e=Ya(Ua.current),ua(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fi]=t,r[pi]=o,e=0!==(1&t.mode),n){case"dialog":Rr("cancel",r),Rr("close",r);break;case"iframe":case"object":case"embed":Rr("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)Rr(Br[i],r);break;case"source":Rr("error",r);break;case"img":case"image":case"link":Rr("error",r),Rr("load",r);break;case"details":Rr("toggle",r);break;case"input":X(r,o),Rr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Rr("invalid",r);break;case"textarea":ie(r,o),Rr("invalid",r)}for(var s in xe(n,o),i=null,o)if(o.hasOwnProperty(s)){var c=o[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Rr("scroll",r)}switch(n){case"input":q(r),J(r,o,!0);break;case"textarea":q(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fi]=t,e[pi]=r,Pl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ve(n,r),n){case"dialog":Rr("cancel",e),Rr("close",e),i=r;break;case"iframe":case"object":case"embed":Rr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)Rr(Br[i],e);i=r;break;case"source":Rr("error",e),i=r;break;case"img":case"image":case"link":Rr("error",e),Rr("load",e),i=r;break;case"details":Rr("toggle",e),i=r;break;case"input":X(e,r),i=Q(e,r),Rr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=O({},r,{value:void 0}),Rr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Rr("invalid",e)}for(o in xe(n,i),c=i)if(c.hasOwnProperty(o)){var d=c[o];"style"===o?ge(e,d):"dangerouslySetInnerHTML"===o?null!=(d=d?d.__html:void 0)&&ue(e,d):"children"===o?"string"===typeof d?("textarea"!==n||""!==d)&&fe(e,d):"number"===typeof d&&fe(e,""+d):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=d&&"onScroll"===o&&Rr("scroll",e):null!=d&&v(e,o,d,s))}switch(n){case"input":q(e),J(e,r,!1);break;case"textarea":q(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+V(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ql(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Ya(Ka.current),Ya(Ua.current),ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return ql(t),null;case 13:if(Ci(Ja),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))fa(),pa(),t.flags|=98560,o=!1;else if(o=ua(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[fi]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ja.current)?0===Ls&&(Ls=3):mc())),null!==t.updateQueue&&(t.flags|=4),ql(t),null);case 4:return Xa(),$l(e,t),null===e&&Wr(t.stateNode.containerInfo),ql(t),null;case 10:return _a(t.type._context),ql(t),null;case 19:if(Ci(Ja),null===(o=t.memoizedState))return ql(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Ul(o,!1);else{if(0!==Ls||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Ul(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ei(Ja,1&Ja.current|2),t.child}e=e.sibling}null!==o.tail&&Ge()>Ws&&(t.flags|=128,r=!0,Ul(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ul(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ia)return ql(t),null}else 2*Ge()-o.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,r=!0,Ul(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,n=Ja.current,Ei(Ja,r?1&n|2:1&n),t):(ql(t),null);case 22:case 23:return uc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&$s)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Yl(e,t){switch(ta(t),t.tag){case 1:return $i(t.type)&&Ii(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),Ci(Ti),Ci(zi),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Ci(Ja),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(Ja),null;case 4:return Xa(),null;case 10:return _a(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Pl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},$l=function(){},Il=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ya(Ua.current);var a,o=null;switch(n){case"input":i=Q(e,i),r=Q(e,r),o=[];break;case"select":i=O({},i,{value:void 0}),r=O({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(d in xe(n,r),n=null,i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&null!=i[d])if("style"===d){var s=i[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(l.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(s=null!=i?i[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(null!=c||null!=s))if("style"===d)if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(o=o||[]).push(d,c)):"children"===d?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(l.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Rr("scroll",e),o||s===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,Xl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Sc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Sc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&es(t,n,a)}i=i.next}while(i!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[pi],delete t[mi],delete t[gi],delete t[yi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var ds=null,us=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(l){}switch(n.tag){case 5:Xl||Jl(n,t);case 6:var r=ds,i=us;ds=null,fs(e,t,n),us=i,null!==(ds=r)&&(us?(e=ds,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ds.removeChild(n.stateNode));break;case 18:null!==ds&&(us?(e=ds,n=n.stateNode,8===e.nodeType?si(e.parentNode,n):1===e.nodeType&&si(e,n),Wt(e)):si(ds,n.stateNode));break;case 4:r=ds,i=us,ds=n.stateNode.containerInfo,us=!0,fs(e,t,n),ds=r,us=i;break;case 0:case 11:case 14:case 15:if(!Xl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&es(n,t,o),i=i.next}while(i!==r)}fs(e,t,n);break;case 1:if(!Xl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Sc(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Xl=(r=Xl)||null!==n.memoizedState,fs(e,t,n),Xl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=zc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:ds=s.stateNode,us=!1;break e;case 3:case 4:ds=s.stateNode.containerInfo,us=!0;break e}s=s.return}if(null===ds)throw Error(a(160));ps(o,l,i),ds=null,us=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(d){Sc(i,t,d)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),ys(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Sc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Sc(e,e.return,g)}}break;case 1:ms(t,e),ys(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),ys(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(g){Sc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===o.type&&null!=o.name&&G(i,o),ve(s,l);var d=ve(s,o);for(l=0;l<c.length;l+=2){var u=c[l],f=c[l+1];"style"===u?ge(i,f):"dangerouslySetInnerHTML"===u?ue(i,f):"children"===u?fe(i,f):v(i,u,f,d)}switch(s){case"input":Z(i,o);break;case"textarea":ae(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(i,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[pi]=o}catch(g){Sc(e,e.return,g)}}break;case 6:if(ms(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Sc(e,e.return,g)}}break;case 3:if(ms(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){Sc(e,e.return,g)}break;case 4:default:ms(t,e),ys(e);break;case 13:ms(t,e),ys(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Fs=Ge())),4&r&&hs(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Xl=(d=Xl)||u,ms(t,e),Xl=d):ms(t,e),ys(e),8192&r){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&0!==(1&e.mode))for(Zl=e,u=e.child;null!==u;){for(f=Zl=u;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Sc(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Zl=h):ws(f)}u=u.sibling}e:for(u=null,f=e;;){if(5===f.tag){if(null===u){u=f;try{i=f.stateNode,d?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){Sc(e,e.return,g)}}}else if(6===f.tag){if(null===u)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(g){Sc(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),ys(e),4&r&&hs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),cs(e,ls(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(a(161))}}catch(l){Sc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xs(e,t,n){Zl=e,vs(e,t,n)}function vs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var i=Zl,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Ql;if(!o){var l=i.alternate,s=null!==l&&null!==l.memoizedState||Xl;l=Ql;var c=Xl;if(Ql=o,(Xl=s)&&!c)for(Zl=i;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?ks(i):null!==s?(s.return=o,Zl=s):ks(i);for(;null!==a;)Zl=a,vs(a,t,n),a=a.sibling;Zl=i,Ql=l,Xl=c}bs(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Zl=a):bs(e)}}function bs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ha(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ha(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var f=u.dehydrated;null!==f&&Wt(f)}}}break;default:throw Error(a(163))}Xl||512&t.flags&&is(t)}catch(p){Sc(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Sc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(s){Sc(t,i,s)}}var a=t.return;try{is(t)}catch(s){Sc(t,a,s)}break;case 5:var o=t.return;try{is(t)}catch(s){Sc(t,o,s)}}}catch(s){Sc(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var js,Ss=Math.ceil,Cs=b.ReactCurrentDispatcher,Es=b.ReactCurrentOwner,_s=b.ReactCurrentBatchConfig,zs=0,Ts=null,As=null,Ps=0,$s=0,Is=Si(0),Ls=0,Bs=null,Ns=0,Os=0,Ms=0,Rs=null,Ds=null,Fs=0,Ws=1/0,Hs=null,Vs=!1,Us=null,qs=null,Ks=!1,Ys=null,Qs=0,Xs=0,Gs=null,Zs=-1,Js=0;function ec(){return 0!==(6&zs)?Ge():-1!==Zs?Zs:Zs=Ge()}function tc(e){return 0===(1&e.mode)?1:0!==(2&zs)&&0!==Ps?Ps&-Ps:null!==ma.transition?(0===Js&&(Js=mt()),Js):0!==(e=vt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nc(e,t,n,r){if(50<Xs)throw Xs=0,Gs=null,Error(a(185));yt(e,n,r),0!==(2&zs)&&e===Ts||(e===Ts&&(0===(2&zs)&&(Os|=n),4===Ls&&lc(e,Ps)),rc(e,r),1===n&&0===zs&&0===(1&t.mode)&&(Ws=Ge()+500,Ri&&Wi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),l=1<<o,s=i[o];-1===s?0!==(l&n)&&0===(l&r)||(i[o]=pt(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var r=ft(e,e===Ts?Ps:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Ri=!0,Fi(e)}(sc.bind(null,e)):Fi(sc.bind(null,e)),oi((function(){0===(6&zs)&&Wi()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Tc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Zs=-1,Js=0,0!==(6&zs))throw Error(a(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=ft(e,e===Ts?Ps:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=zs;zs|=2;var o=hc();for(Ts===e&&Ps===t||(Hs=null,Ws=Ge()+500,fc(e,t));;)try{xc();break}catch(s){pc(e,s)}Ea(),Cs.current=o,zs=i,null!==As?t=0:(Ts=null,Ps=0,t=Ls)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ac(e,i))),1===t)throw n=Bs,fc(e,0),lc(e,r),rc(e,Ge()),n;if(6===t)lc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!lr(a(),i))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(o=ht(e))&&(r=o,t=ac(e,o))),1===t))throw n=Bs,fc(e,0),lc(e,r),rc(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Ds,Hs);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Fs+500-Ge())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Ds,Hs),t);break}wc(e,Ds,Hs);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>i&&(i=l),r&=~o}if(r=i,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ss(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Ds,Hs),r);break}wc(e,Ds,Hs);break;default:throw Error(a(329))}}}return rc(e,Ge()),e.callbackNode===n?ic.bind(null,e):null}function ac(e,t){var n=Rs;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Ds,Ds=n,null!==t&&oc(t)),e}function oc(e){null===Ds?Ds=e:Ds.push.apply(Ds,e)}function lc(e,t){for(t&=~Ms,t&=~Os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&zs))throw Error(a(327));kc();var t=ft(e,0);if(0===(1&t))return rc(e,Ge()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Bs,fc(e,0),lc(e,t),rc(e,Ge()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ds,Hs),rc(e,Ge()),null}function cc(e,t){var n=zs;zs|=1;try{return e(t)}finally{0===(zs=n)&&(Ws=Ge()+500,Ri&&Wi())}}function dc(e){null!==Ys&&0===Ys.tag&&0===(6&zs)&&kc();var t=zs;zs|=1;var n=_s.transition,r=vt;try{if(_s.transition=null,vt=1,e)return e()}finally{vt=r,_s.transition=n,0===(6&(zs=t))&&Wi()}}function uc(){$s=Is.current,Ci(Is)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==As)for(n=As.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ii();break;case 3:Xa(),Ci(Ti),Ci(zi),no();break;case 5:Za(r);break;case 4:Xa();break;case 13:case 19:Ci(Ja);break;case 10:_a(r.type._context);break;case 22:case 23:uc()}n=n.return}if(Ts=e,As=e=Ic(e.current,null),Ps=$s=t,Ls=0,Bs=null,Ms=Os=Ns=0,Ds=Rs=null,null!==Pa){for(t=0;t<Pa.length;t++)if(null!==(r=(n=Pa[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Pa=null}return e}function pc(e,t){for(;;){var n=As;try{if(Ea(),ro.current=Zo,co){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}co=!1}if(ao=0,so=lo=oo=null,uo=!1,fo=0,Es.current=null,null===n||null===n.return){Ls=1,Bs=t,As=null;break}e:{var o=e,l=n.return,s=n,c=t;if(t=Ps,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var d=c,u=s,f=u.tag;if(0===(1&u.mode)&&(0===f||11===f||15===f)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,yl(h,l,s,0,t),1&h.mode&&ml(o,d,t),c=d;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(o,d,t),mc();break e}c=Error(a(426))}else if(ia&&1&s.mode){var y=gl(l);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),yl(y,l,s,0,t),ha(cl(c,s));break e}}o=c=cl(c,s),4!==Ls&&(Ls=2),null===Rs?Rs=[o]:Rs.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Fa(o,pl(0,c,t));break e;case 1:s=c;var x=o.type,v=o.stateNode;if(0===(128&o.flags)&&("function"===typeof x.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===qs||!qs.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t,Fa(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}bc(n)}catch(b){t=b,As===n&&null!==n&&(As=n=n.return);continue}break}}function hc(){var e=Cs.current;return Cs.current=Zo,null===e?Zo:e}function mc(){0!==Ls&&3!==Ls&&2!==Ls||(Ls=4),null===Ts||0===(268435455&Ns)&&0===(268435455&Os)||lc(Ts,Ps)}function gc(e,t){var n=zs;zs|=2;var r=hc();for(Ts===e&&Ps===t||(Hs=null,fc(e,t));;)try{yc();break}catch(i){pc(e,i)}if(Ea(),zs=n,Cs.current=r,null!==As)throw Error(a(261));return Ts=null,Ps=0,Ls}function yc(){for(;null!==As;)vc(As)}function xc(){for(;null!==As&&!Qe();)vc(As)}function vc(e){var t=js(e.alternate,e,$s);e.memoizedProps=e.pendingProps,null===t?bc(e):As=t,Es.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,$s)))return void(As=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(As=n);if(null===e)return Ls=6,void(As=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(As=t);As=t=e}while(null!==t);0===Ls&&(Ls=5)}function wc(e,t,n){var r=vt,i=_s.transition;try{_s.transition=null,vt=1,function(e,t,n,r){do{kc()}while(null!==Ys);if(0!==(6&zs))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Ts&&(As=Ts=null,Ps=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Tc(tt,(function(){return kc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=_s.transition,_s.transition=null;var l=vt;vt=1;var s=zs;zs|=4,Es.current=null,function(e,t){if(ei=Vt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,d=0,u=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==i&&3!==f.nodeType||(s=l+i),f!==o||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++d===i&&(s=l),p===o&&++u===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Vt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,x=t.stateNode,v=x.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),y);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(a(163))}}catch(w){Sc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ti),Vt=!!ei,ti=ei=null,e.current=n,xs(n,e,i),Xe(),zs=s,vt=l,_s.transition=o}else e.current=n;if(Ks&&(Ks=!1,Ys=e,Qs=i),o=e.pendingLanes,0===o&&(qs=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vs)throw Vs=!1,e=Us,Us=null,e;0!==(1&Qs)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===Gs?Xs++:(Xs=0,Gs=e):Xs=0,Wi()}(e,t,n,r)}finally{_s.transition=i,vt=r}return null}function kc(){if(null!==Ys){var e=bt(Qs),t=_s.transition,n=vt;try{if(_s.transition=null,vt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Qs=0,0!==(6&zs))throw Error(a(331));var i=zs;for(zs|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var c=0;c<s.length;c++){var d=s[c];for(Zl=d;null!==Zl;){var u=Zl;switch(u.tag){case 0:case 11:case 15:ns(8,u,o)}var f=u.child;if(null!==f)f.return=u,Zl=f;else for(;null!==Zl;){var p=(u=Zl).sibling,h=u.return;if(as(u),u===d){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var x=o.sibling;if(null!==x){x.return=o.return,Zl=x;break e}Zl=o.return}}var v=e.current;for(Zl=v;null!==Zl;){var b=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Zl=b;else e:for(l=v;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){Sc(s,s.return,k)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(zs=i,Wi(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{vt=n,_s.transition=t}}return!1}function jc(e,t,n){e=Ra(e,t=pl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(yt(e,1,t),rc(e,t))}function Sc(e,t,n){if(3===e.tag)jc(e,e,n);else for(;null!==t;){if(3===t.tag){jc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===qs||!qs.has(r))){t=Ra(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(yt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ts===e&&(Ps&n)===n&&(4===Ls||3===Ls&&(130023424&Ps)===Ps&&500>Ge()-Fs?fc(e,0):Ms|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var n=ec();null!==(e=La(e,t))&&(yt(e,t,n),rc(e,n))}function _c(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function zc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Ec(e,n)}function Tc(e,t){return Ke(e,t)}function Ac(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pc(e,t,n,r){return new Ac(e,t,n,r)}function $c(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ic(e,t){var n=e.alternate;return null===n?((n=Pc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lc(e,t,n,r,i,o){var l=2;if(r=e,"function"===typeof e)$c(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case j:return Bc(n.children,i,o,t);case S:l=8,i|=8;break;case C:return(e=Pc(12,n,t,2|i)).elementType=C,e.lanes=o,e;case T:return(e=Pc(13,n,t,i)).elementType=T,e.lanes=o,e;case A:return(e=Pc(19,n,t,i)).elementType=A,e.lanes=o,e;case I:return Nc(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case _:l=9;break e;case z:l=11;break e;case P:l=14;break e;case $:l=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Pc(l,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Bc(e,t,n,r){return(e=Pc(7,e,r,t)).lanes=n,e}function Nc(e,t,n,r){return(e=Pc(22,e,r,t)).elementType=I,e.lanes=n,e.stateNode={isHidden:!1},e}function Oc(e,t,n){return(e=Pc(6,e,null,t)).lanes=n,e}function Mc(e,t,n){return(t=Pc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dc(e,t,n,r,i,a,o,l,s){return e=new Rc(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Pc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(a),e}function Fc(e){if(!e)return _i;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($i(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if($i(n))return Bi(e,n,t)}return t}function Wc(e,t,n,r,i,a,o,l,s){return(e=Dc(n,r,!0,e,0,a,0,l,s)).context=Fc(null),n=e.current,(a=Ma(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Ra(n,a,i),e.current.lanes=i,yt(e,i,r),rc(e,r),e}function Hc(e,t,n,r){var i=t.current,a=ec(),o=tc(i);return n=Fc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ma(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ra(i,t,o))&&(nc(e,i,o,a),Da(e,i,o)),o}function Vc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Uc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qc(e,t){Uc(e,t),(e=e.alternate)&&Uc(e,t)}js=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ti.current)vl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vl=!1,function(e,t,n){switch(t.tag){case 3:Tl(t),pa();break;case 5:Ga(t);break;case 1:$i(t.type)&&Ni(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ei(ka,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ei(Ja,1&Ja.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ol(e,t,n):(Ei(Ja,1&Ja.current),null!==(e=Vl(e,t,n))?e.sibling:null);Ei(Ja,1&Ja.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Wl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ei(Ja,Ja.current),r)break;return null;case 22:case 23:return t.lanes=0,Sl(e,t,n)}return Vl(e,t,n)}(e,t,n);vl=0!==(131072&e.flags)}else vl=!1,ia&&0!==(1048576&t.flags)&&Ji(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hl(e,t),e=t.pendingProps;var i=Pi(t,zi.current);Ta(t,n),i=go(null,t,r,e,i,n);var o=yo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$i(r)?(o=!0,Ni(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Na(t),i.updater=il,t.stateNode=i,i._reactInternals=t,sl(t,r,e,n),t=zl(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),bl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return $c(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===P)return 14}return 2}(r),e=nl(r,e),i){case 0:t=El(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,El(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,_l(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(Tl(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,Oa(e,t),Wa(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Al(e,t,r,n,i=cl(Error(a(423)),t));break e}if(r!==i){t=Al(e,t,r,n,i=cl(Error(a(424)),t));break e}for(ra=ci(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),r===i){t=Vl(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Ga(t),null===e&&ca(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,l=i.children,ni(r,i)?l=null:null!==o&&ni(r,o)&&(t.flags|=32),Cl(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Ol(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ba(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Ei(ka,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===i.children&&!Ti.current){t=Vl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Ma(-1,n&-n)).tag=2;var d=o.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),za(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),za(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}bl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ta(t,n),r=r(i=Aa(i)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),kl(e,t,r,i=nl(r.type,i),n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),Hl(e,t),t.tag=1,$i(r)?(e=!0,Ni(t)):e=!1,Ta(t,n),ol(t,r,i),sl(t,r,i,n),zl(null,t,r,!0,e,n);case 19:return Wl(e,t,n);case 22:return Sl(e,t,n)}throw Error(a(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Jc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var l=i;i=function(){var e=Vc(o);l.call(e)}}Hc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Vc(o);a.call(e)}}var o=Wc(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=o,e[hi]=o.current,Wr(8===e.nodeType?e.parentNode:e),dc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var l=r;r=function(){var e=Vc(s);l.call(e)}}var s=Dc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=s,e[hi]=s.current,Wr(8===e.nodeType?e.parentNode:e),dc((function(){Hc(t,s,n,r)})),s}(n,t,e,i,r);return Vc(o)}Qc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hc(e,t,null,null)},Qc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc((function(){Hc(null,e,null,null)})),t[hi]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&0!==t&&t<It[n].priority;n++);It.splice(n,0,e),0===n&&Ot(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(xt(t,1|n),rc(t,Ge()),0===(6&zs)&&(Ws=Ge()+500,Wi()))}break;case 13:dc((function(){var t=La(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),qc(e,1)}},kt=function(e){if(13===e.tag){var t=La(e,134217728);if(null!==t)nc(t,e,134217728,ec());qc(e,134217728)}},jt=function(e){if(13===e.tag){var t=tc(e),n=La(e,t);if(null!==n)nc(n,e,t,ec());qc(e,t)}},St=function(){return vt},Ct=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(a(90));K(r),Z(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=cc,Te=dc;var ed={usingClientEntryPoint:!1,Events:[vi,bi,wi,Ee,_e,cc]},td={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nd={bundleType:td.bundleType,version:td.version,rendererPackageName:td.rendererPackageName,rendererConfig:td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ue(e))?null:e.stateNode},findFiberByHostInstance:td.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rd.isDisabled&&rd.supportsFiber)try{it=rd.inject(nd),at=rd}catch(de){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xc(e))throw Error(a(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Dc(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ue(t))?null:e.stateNode},t.flushSync=function(e){return dc(e)},t.hydrate=function(e,t,n){if(!Gc(t))throw Error(a(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Wc(t,null,e,1,null!=n?n:null,i,0,o,l),e[hi]=t.current,Wr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qc(t)},t.render=function(e,t,n){if(!Gc(t))throw Error(a(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gc(e))throw Error(a(40));return!!e._reactRootContainer&&(dc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},3216:(e,t,n)=>{"use strict";var r;n.d(t,{$P:()=>p,BV:()=>B,Ix:()=>L,V8:()=>$,Zp:()=>y,jb:()=>c,qh:()=>I,x$:()=>x,zy:()=>m});var i=n(5043),a=n(1387);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const l=i.createContext(null);const s=i.createContext(null);const c=i.createContext(null);const d=i.createContext(null);const u=i.createContext({outlet:null,matches:[],isDataRoute:!1});const f=i.createContext(null);function p(e,t){let{relative:n}=void 0===t?{}:t;h()||(0,a.Oi)(!1);let{basename:r,navigator:o}=i.useContext(c),{hash:l,pathname:s,search:d}=x(e,{relative:n}),u=s;return"/"!==r&&(u="/"===s?r:(0,a.HS)([r,s])),o.createHref({pathname:u,search:d,hash:l})}function h(){return null!=i.useContext(d)}function m(){return h()||(0,a.Oi)(!1),i.useContext(d).location}function g(e){i.useContext(c).static||i.useLayoutEffect(e)}function y(){let{isDataRoute:e}=i.useContext(u);return e?function(){let{router:e}=_(C.UseNavigateStable),t=T(E.UseNavigateStable),n=i.useRef(!1);return g((()=>{n.current=!0})),i.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,o({fromRouteId:t},i)))}),[e,t])}():function(){h()||(0,a.Oi)(!1);let e=i.useContext(l),{basename:t,future:n,navigator:r}=i.useContext(c),{matches:o}=i.useContext(u),{pathname:s}=m(),d=JSON.stringify((0,a.yD)(o,n.v7_relativeSplatPath)),f=i.useRef(!1);return g((()=>{f.current=!0})),i.useCallback((function(n,i){if(void 0===i&&(i={}),!f.current)return;if("number"===typeof n)return void r.go(n);let o=(0,a.Gh)(n,JSON.parse(d),s,"path"===i.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:(0,a.HS)([t,o.pathname])),(i.replace?r.replace:r.push)(o,i.state,i)}),[t,r,d,s,e])}()}function x(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=i.useContext(c),{matches:o}=i.useContext(u),{pathname:l}=m(),s=JSON.stringify((0,a.yD)(o,r.v7_relativeSplatPath));return i.useMemo((()=>(0,a.Gh)(e,JSON.parse(s),l,"path"===n)),[e,s,l,n])}function v(e,t,n,r){h()||(0,a.Oi)(!1);let{navigator:l,static:s}=i.useContext(c),{matches:f}=i.useContext(u),p=f[f.length-1],g=p?p.params:{},y=(p&&p.pathname,p?p.pathnameBase:"/");p&&p.route;let x,v=m();if(t){var b;let e="string"===typeof t?(0,a.Rr)(t):t;"/"===y||(null==(b=e.pathname)?void 0:b.startsWith(y))||(0,a.Oi)(!1),x=e}else x=v;let w=x.pathname||"/",k=w;if("/"!==y){let e=y.replace(/^\//,"").split("/");k="/"+w.replace(/^\//,"").split("/").slice(e.length).join("/")}let j=!s&&n&&n.matches&&n.matches.length>0?n.matches:(0,a.ue)(e,{pathname:k});let C=S(j&&j.map((e=>Object.assign({},e,{params:Object.assign({},g,e.params),pathname:(0,a.HS)([y,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?y:(0,a.HS)([y,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),f,n,r);return t&&C?i.createElement(d.Provider,{value:{location:o({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:a.rc.Pop}},C):C}function b(){let e=function(){var e;let t=i.useContext(f),n=z(E.UseRouteError),r=T(E.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=(0,a.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r};return i.createElement(i.Fragment,null,i.createElement("h2",null,"Unexpected Application Error!"),i.createElement("h3",{style:{fontStyle:"italic"}},t),n?i.createElement("pre",{style:o},n):null,null)}const w=i.createElement(b,null);class k extends i.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?i.createElement(u.Provider,{value:this.props.routeContext},i.createElement(f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j(e){let{routeContext:t,match:n,children:r}=e,a=i.useContext(l);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),i.createElement(u.Provider,{value:t},r)}function S(e,t,n,r){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var l;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(l=r)&&l.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,c=null==(o=n)?void 0:o.errors;if(null!=c){let e=s.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||(0,a.Oi)(!1),s=s.slice(0,Math.min(s.length,e+1))}let d=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let i=0;i<s.length;i++){let e=s[i];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=i),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){d=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight(((e,r,a)=>{let o,l=!1,f=null,p=null;var h;n&&(o=c&&r.route.id?c[r.route.id]:void 0,f=r.route.errorElement||w,d&&(u<0&&0===a?(h="route-fallback",!1||A[h]||(A[h]=!0),l=!0,p=null):u===a&&(l=!0,p=r.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,a+1)),g=()=>{let t;return t=o?f:l?p:r.route.Component?i.createElement(r.route.Component,null):r.route.element?r.route.element:e,i.createElement(j,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?i.createElement(k,{location:n.location,revalidation:n.revalidation,component:f,error:o,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var C=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(C||{}),E=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(E||{});function _(e){let t=i.useContext(l);return t||(0,a.Oi)(!1),t}function z(e){let t=i.useContext(s);return t||(0,a.Oi)(!1),t}function T(e){let t=function(){let e=i.useContext(u);return e||(0,a.Oi)(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||(0,a.Oi)(!1),n.route.id}const A={};const P=(e,t,n)=>{};function $(e,t){void 0===(null==e?void 0:e.v7_startTransition)&&P("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),void 0!==(null==e?void 0:e.v7_relativeSplatPath)||t&&t.v7_relativeSplatPath||P("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(void 0===t.v7_fetcherPersist&&P("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),void 0===t.v7_normalizeFormMethod&&P("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),void 0===t.v7_partialHydration&&P("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),void 0===t.v7_skipActionErrorRevalidation&&P("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}(r||(r=n.t(i,2))).startTransition;function I(e){(0,a.Oi)(!1)}function L(e){let{basename:t="/",children:n=null,location:r,navigationType:l=a.rc.Pop,navigator:s,static:u=!1,future:f}=e;h()&&(0,a.Oi)(!1);let p=t.replace(/^\/*/,"/"),m=i.useMemo((()=>({basename:p,navigator:s,static:u,future:o({v7_relativeSplatPath:!1},f)})),[p,f,s,u]);"string"===typeof r&&(r=(0,a.Rr)(r));let{pathname:g="/",search:y="",hash:x="",state:v=null,key:b="default"}=r,w=i.useMemo((()=>{let e=(0,a.pb)(g,p);return null==e?null:{location:{pathname:e,search:y,hash:x,state:v,key:b},navigationType:l}}),[p,g,y,x,v,b,l]);return null==w?null:i.createElement(c.Provider,{value:m},i.createElement(d.Provider,{children:n,value:w}))}function B(e){let{children:t,location:n}=e;return v(N(t),n)}new Promise((()=>{}));i.Component;function N(e,t){void 0===t&&(t=[]);let n=[];return i.Children.forEach(e,((e,r)=>{if(!i.isValidElement(e))return;let o=[...t,r];if(e.type===i.Fragment)return void n.push.apply(n,N(e.props.children,o));e.type!==I&&(0,a.Oi)(!1),e.props.index&&e.props.children&&(0,a.Oi)(!1);let l={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=N(e.props.children,o)),n.push(l)})),n}},3283:(e,t,n)=>{"use strict";n.d(t,{OP:()=>d,CT:()=>c,vB:()=>s});const r=n.p+"static/media/blogs.0eef6d77d0b6ada5bc52.gif",i=n.p+"static/media/poetry.26dfd1cec32f5e80a8e8.gif",a=n.p+"static/media/gallery.c61083db52df504eed79.gif",o=n.p+"static/media/music.a0244f3cc441081183f7.gif",l=n.p+"static/media/philosophy.e342451f3f650c758df6.gif",s={name:"Latifur Rahman",role:["Web Developer"],description:"I craft solid and responsive products using JavaScript, React.js, and MySQL. Currently learning Express.js",about:"I\u2019m a software engineer focused on building fast, accessible web experiences. Outside of work, I enjoy writing, design systems, and tinkering with performance.",showProfileImage:!0,profileImage:"/profile.jpg",navLogo:"/favicon.png",linkedIn:"https://www.linkedin.com/in/latifur/",github:"https://github.com/itsLatifur",email:"itslatifur@gmail.com",resumeLink:"/Latifur_Rahman_Resume.pdf",showExperiences:!1,showCollage:!1,showSkills:!0,showCertifications:!0,skills:[{label:"React",order:1},{label:"JavaScript",order:2},{label:"Styled-Components",order:3},{label:"Tailwind CSS",order:4},{label:"MySQL",order:5}],certifications:[{name:"Responsive Web Design",issuer:"freeCodeCamp",year:"2023",url:"https://www.freecodecamp.org/certification/your-username/responsive-web-design",order:2},{name:"JavaScript Algorithms & Data Structures",issuer:"freeCodeCamp",year:"2023",url:"https://www.freecodecamp.org/certification/your-username/javascript-algorithms-and-data-structures",order:1}]},c=[{years:"2024 - now",title:"Senior Product Designer at Atmosphere TV",description:"Lead designer for tv for bars & restaurants"},{years:"2023 - 2024",title:"Product Designer at Atmosphere TV",description:"Led design & research for customer tooling"}],d=[{label:"Blogs",img:r,href:"https://blogs.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=blogs",visible:!0},{label:"Poetry",img:i,href:"https://poetry.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=poetry",visible:!0},{label:"Gallery",img:a,href:"https://gallery.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=gallery",visible:!0},{label:"Music",img:o,href:"https://music.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=music",visible:!0},{label:"Philosophy",img:l,href:"https://philosophy.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=philosophy",visible:!0}]},3763:(e,t,n)=>{"use strict";e.exports=n(4983)},3819:(e,t,n)=>{"use strict";n.d(t,{Kj:()=>le,Je:()=>fe,NM:()=>C,c_:()=>Z,so:()=>N,zT:()=>q,ld:()=>me});var r=n(5043),i=n(4574),a=n(9547);const o=i.Ay.footer`
    width: 100%;
    margin-bottom: 0px;
    ${a.CC} {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 100px;

        @media (${a.Ay.small}) {
            padding-top: 100px;
        }
    }

    ${a.DZ} {
        font-size: 25px;
        @media (${a.Ay.small}) {
            font-size: 50px;
        }
    }

`,l=i.Ay.div`
    display: flex;
    width: 100%;
    padding: 0
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (${a.Ay.small}) {
        flex-wrap: nowrap;
        padding: 0;
    }

`,s=i.Ay.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0;
    align-items: center;
`,c=(0,i.Ay)(s)`
    justify-content: flex-start;
    gap: 20px;
    margin-top: 20px;

    ${a.fz} {
        margin-left: 0;
        border-bottom: 1px solid transparent;
        :hover {
           opacity: .5
        }
    }

    @media (${a.Ay.small}) {
        justify-content: flex-end;
        margin-top: 0px;
    }
`;i.Ay.svg`
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-left: ${e=>e.marginLeft||"0"};
    opacity: 0.5;
    
    path {
        fill: ${e=>{let{theme:t}=e;return t.textMain}};
    }
`;var d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=r.createContext&&r.createContext(d),f=["attr","size","title"];function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return e&&e.map(((e,t)=>r.createElement(e.tag,g({key:t},e.attr),x(e.child))))}function v(e){return t=>r.createElement(b,h({attr:g({},e.attr)},t),x(e.child))}function b(e){var t=t=>{var n,{attr:i,size:a,title:o}=e,l=p(e,f),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:g(g({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==u?r.createElement(u.Consumer,null,(e=>t(e))):t(d)}function w(e){return v({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function k(e){return v({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function j(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}var S=n(579);const C=()=>{(new Date).getFullYear();return(0,S.jsx)(o,{children:(0,S.jsxs)(l,{children:[(0,S.jsx)(s,{children:(0,S.jsx)(a.fz,{children:"\xa9 Latifur Rahman \xb7 All rights reserved."})}),(0,S.jsxs)(c,{children:[(0,S.jsx)("a",{href:"mailto: itslatifur@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,S.jsxs)(a.fz,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Email ",(0,S.jsx)(j,{style:{marginLeft:"4px"}})]})}),(0,S.jsx)("a",{href:"https://www.linkedin.com/in/latifur/",target:"_blank",rel:"noopener noreferrer",children:(0,S.jsxs)(a.fz,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["LinkedIn ",(0,S.jsx)(k,{style:{marginLeft:"4px"}})]})}),(0,S.jsx)("a",{href:"https://github.com/itsLatifur",target:"_blank",rel:"noopener noreferrer",children:(0,S.jsxs)(a.fz,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["GitHub ",(0,S.jsx)(w,{style:{marginLeft:"4px"}})]})})]})]})})},E=i.Ay.svg`

    * {
        fill: white;
        stroke: white;
    }

`;var _=n(3283);const z=e=>{const{navLogo:t}=_.vB||{},n=30,r=28;return t?(0,S.jsx)("img",{src:t,alt:"Logo",width:n,height:r,style:{display:"block",objectFit:"contain"},...e}):(0,S.jsxs)(E,{width:"30",height:"28",viewBox:"0 0 30 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,S.jsxs)("g",{clipPath:"url(#clip0_35_91)",children:[(0,S.jsx)("path",{d:"M14.7363 17.4567V0.5H23.2426V8.53127C23.2426 14.0238 18.6623 16.7702 14.7363 17.4567Z",fill:"black"}),(0,S.jsx)("path",{d:"M6 17.606H14.5063V26.5314C9.25401 25.1442 7.27986 23.3135 6 17.606Z",fill:"black"})]}),(0,S.jsx)("defs",{children:(0,S.jsx)("clipPath",{id:"clip0_35_91",children:(0,S.jsx)("rect",{width:"18",height:"27",fill:"white",transform:"translate(6 0.5)"})})})]})};var T=n(9362);const A=i.Ay.nav`
  width: auto;
  margin: 0;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  animation: ${T.qG} 1s forwards;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 45px;
`,P=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  button {
    all: unset; /* resets button styles across browsers */
    font-weight: 300;
    font-size: 14px;
    color: rgb(255, 255, 255);
    border-radius: 20px;
    padding: 4px 10px;
    display: inline-block;

    &.active {
      background-color: rgba(255, 255, 255, 0.04);
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.02);
    }
  }

  a {
    text-decoration: none;
    
    p {
      font-weight: 300;
      font-size: 14px;
      color: rgb(255, 255, 255);
      border-radius: 20px;
      padding: 4px 10px;

      &.active {
        background-color: rgba(255, 255, 255, 0.04);
      }

      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.02);
      }
    }
  }
`;var $=n(6078);const I=e=>{let{toggleMode:t,mode:n,spread:r}=e;return(0,S.jsx)($.p,{"aria-label":"light"===n?"Switch to dark mode":"Switch to light mode",onClick:t,children:"light"===n?(0,S.jsx)("svg",{width:"10   ",height:"10  ",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M-7.82013e-05 9.058C1.26554 9.54903 2.64663 9.66146 3.975 9.38159C5.30338 9.10172 6.52171 8.44163 7.48163 7.48171C8.44155 6.52179 9.10164 5.30345 9.38151 3.97508C9.66138 2.64671 9.54895 1.26562 9.05792 0C10.5781 0.592448 11.8438 1.69712 12.6363 3.12328C13.4289 4.54945 13.6986 6.20759 13.3989 7.81141C13.0992 9.41523 12.2489 10.8641 10.9948 11.9078C9.74067 12.9515 8.16151 13.5245 6.52992 13.528C5.11765 13.5284 3.73828 13.1017 2.5729 12.3039C1.40753 11.5062 0.510612 10.3747 -7.82013e-05 9.058Z",fill:"black"})}):(0,S.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,S.jsx)("path",{d:"M5.82949 9.99984C5.82949 12.3007 7.70116 14.1723 10.002 14.1723C12.3028 14.1723 14.1745 12.3007 14.1745 9.99984C14.1745 7.699 12.3028 5.82734 10.002 5.82734C7.70116 5.82734 5.82949 7.699 5.82949 9.99984ZM9.16699 15.8332H10.8337V18.3332H9.16699V15.8332ZM9.16699 1.6665H10.8337V4.1665H9.16699V1.6665ZM1.66699 9.1665H4.16699V10.8332H1.66699V9.1665ZM15.8337 9.1665H18.3337V10.8332H15.8337V9.1665Z",fill:"black"}),(0,S.jsx)("path",{d:"M4.69738 16.4817L3.51904 15.3034L5.28654 13.5359L6.46488 14.7142L4.69738 16.4817Z",fill:"black"}),(0,S.jsx)("path",{d:"M13.5352 5.28664L15.3035 3.51831L16.4818 4.69664L14.7135 6.46498L13.5352 5.28664Z",fill:"black"}),(0,S.jsx)("path",{d:"M5.28654 6.46595L3.51904 4.69762L4.69821 3.51929L6.46488 5.28762L5.28654 6.46595Z",fill:"black"}),(0,S.jsx)("path",{d:"M16.4818 15.3032L15.3035 16.4816L13.5352 14.7132L14.7135 13.5349L16.4818 15.3032Z",fill:"black"})]})})};var L=n(3216),B=n(5475);const N=e=>{let{toggleMode:t,mode:n,spread:i}=e;const o=(0,L.zy)(),l=(0,L.Zp)(),s="/"===o.pathname,c=e=>{const t=document.getElementById(e);if(t){const e=-100,n=t.getBoundingClientRect().top+window.pageYOffset+e;window.scrollTo({top:n,behavior:"smooth"})}};return(0,r.useEffect)((()=>{var e;const t=null===(e=o.hash)||void 0===e?void 0:e.replace("#","");t&&setTimeout((()=>c(t)),0)}),[o]),(0,S.jsx)(a.IN,{style:{mixBlendMode:"difference"},children:(0,S.jsxs)(A,{children:[(0,S.jsx)(B.N_,{to:"/",style:{margin:0,padding:0,border:"none",height:"28px"},children:(0,S.jsx)(z,{style:{position:"relative",display:"block"}})}),(0,S.jsxs)(P,{children:[(0,S.jsx)(B.N_,{to:"/",children:(0,S.jsx)("p",{className:s?"active":"",children:"Home"})}),(0,S.jsx)("button",{onClick:()=>{s?c("projects"):l("/projects")},className:s?"":"active",children:"Work"}),(0,S.jsx)("button",{onClick:()=>{s?c("about"):l("/#about")},children:"About"})]}),(0,S.jsx)(I,{spread:i,mode:n,toggleMode:t})]})})};var O=n(9646);const M=i.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,R=i.Ay.div`
  width: ${e=>e.size||32}px;
  height: ${e=>e.size||32}px;
  border: 3px solid ${e=>{let{theme:t}=e;return t.outline}};
  border-top-color: ${e=>{let{theme:t}=e;return t.textMain}};
  border-radius: 50%;
  animation: ${M} 0.9s linear infinite;
`,D=i.Ay.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>{let{theme:t}=e;return t.main}}10;
  pointer-events: none;
`,F=e=>{let{size:t=32,className:n}=e;return(0,S.jsx)(R,{className:n,size:t,"aria-hidden":"true"})},W=e=>{let{visible:t,size:n=32}=e;return t?(0,S.jsx)(D,{children:(0,S.jsx)(F,{size:n})}):null},H=i.Ay.div`
  position: relative;
`,V=i.Ay.video`
  margin-bottom: 18px;
  width: 100%;
  height: auto;
  border-radius: 25px;
  overflow: hidden;
`,U=i.Ay.div`
  padding: 20px 0 40px 0;
  margin: 0;
  width: 100%;
  @media (${a.Ay.large}) {
    padding: 15px 0 32px;
  }
`,q=e=>{let{name:t="Project Name",description:n="Passionate about facilitating excellent user experiences through site speed optimization, accessibility, and user testing. ",url:i="project",image:o="",poster:l,autoplay:s=!1}=e;const c=(0,r.useRef)(null),[d,u]=(0,r.useState)(!1),[f,p]=(0,r.useState)(!1),[h,m]=(0,r.useState)(!1),[g,y]=(0,r.useState)(!1),[x,v]=(0,r.useState)(!1),b=l||("string"===typeof o?o.replace(".mp4",".png"):void 0),[w,k]=(0,r.useState)(b);(0,r.useEffect)((()=>{try{if("undefined"!==typeof window&&window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>y(!!e.matches);return t(),e.addEventListener?e.addEventListener("change",t):e.addListener&&e.addListener(t),()=>{e.removeEventListener?e.removeEventListener("change",t):e.removeListener&&e.removeListener(t)}}}catch(e){}}),[]);const j=s&&!g;return(0,r.useEffect)((()=>{v(!1),k(l||("string"===typeof o?o.replace(".mp4",".png"):void 0))}),[o,l]),(0,r.useEffect)((()=>{const e=c.current;if(!e||"undefined"===typeof IntersectionObserver)return void u(!0);const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(u(!0),t.disconnect())}))}),{threshold:.3});return t.observe(e),()=>t.disconnect()}),[]),(0,r.useEffect)((()=>{if(!j)return;const e=c.current;if(!e||"undefined"===typeof IntersectionObserver)return;const t=new IntersectionObserver((t=>{t.forEach((t=>{const n=t.isIntersecting;if(p(n),d)try{n?h||e.play().catch((()=>{})):e.pause()}catch(r){}}))}),{threshold:.3});return t.observe(e),()=>t.disconnect()}),[j,d,h]),(0,r.useEffect)((()=>()=>{try{c.current&&c.current.pause()}catch(e){}}),[]),(0,S.jsx)(U,{children:(0,S.jsxs)(B.N_,{to:`/${i}`,tabIndex:"-1",children:[(0,S.jsxs)(H,{children:[(0,S.jsx)(W,{visible:!x||!d,size:28}),(0,S.jsx)(V,{ref:c,playsInline:!0,muted:!0,loop:!0,preload:"metadata",autoPlay:j&&d,poster:w,title:`${t} preview`,onTimeUpdate:e=>{!x&&e.currentTarget.currentTime>0&&(v(!0),k(void 0))},onMouseEnter:e=>{m(!0);try{j?x&&e.currentTarget.pause():e.currentTarget.play()}catch(t){}},onMouseLeave:e=>{m(!1);try{j?f&&e.currentTarget.play().catch((()=>{})):e.currentTarget.pause()}catch(t){}},onPointerEnter:e=>{m(!0);try{j?x&&e.currentTarget.pause():e.currentTarget.play()}catch(t){}},onPointerLeave:e=>{m(!1);try{j&&f?e.currentTarget.play().catch((()=>{})):j||e.currentTarget.pause()}catch(t){}},children:d?(0,S.jsx)("source",{src:`${o}`,type:"video/mp4"}):null})]}),(0,S.jsx)(a._B,{style:{textAlign:"left",margin:0,padding:0},onMouseDown:e=>e.preventDefault(),children:(0,S.jsx)(B.N_,{to:`/${i}`,children:t})}),(0,S.jsx)(a.fz,{style:{marginTop:"-4px"},children:n})]})})},K=i.i7`
from {
  transform-origin: 50% 50%;
  transform:  rotate(45deg) translateX(0px);
}
to {
  transform-origin: initial;
  transform: scale(2) translateX(100vw);
}
`,Y=i.i7`
0% {
  transform: translateX(0px);
}
16.6% {
  transform: translateX(3px);
}

33.3% {
  transform: translateX(0px);
}
50% {
  transform: translateX(-3px);
}
66.6%{
  transform: translateX(0px);
}
83.3%{
  transform: translateX(3px);
}
100%{
  transform: translateX(0px);
}
`,Q=i.Ay.div`
    max-width: 400px;
    margin: calc(50vh - 60px) auto;
    background-color: ${e=>{let{theme:t}=e;return t.main}};
    border-radius: 20px;

    @media (${a.Ay.small}) {
        width: 400px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${e=>{let{theme:t}=e;return t.formGray}} inset !important;
    }

    *:focus {
        outline: none;
        border: 1px solid ${e=>{let{theme:t}=e;return t.grayText}};
    }

    ::before {
        content: '';
        width: calc(100vw - 140px);
        max-width: 300px;
        height: 50px;
        position: absolute;
        top: 27px;
        left: 10vw;
        box-shadow: ${e=>{let{theme:t}=e;return t.formShadow}};
        @media (${a.Ay.small}) {
            width: 350px;
            left: 35px;
        }
    }
    .form-error {
        border: 1px solid #e4453a;
    }
    .error-anim {
        animation: ${Y} linear 0.2s;
    }
    .error-icon::after {
        content: '';
        position: absolute;
        display: inline-block;
        top: 27px;
        right: 135px;
        width: 25px;
        height: 25px;
        background-size: cover;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url(${O.$D});
        z-index: 99;
        @media (${a.Ay.small}) {
            right: 70px;
        }
    }
    #form {
        width: calc(100vw - 70px);
        max-width: 400px;
        padding: 15px 0;
        background-color: ${e=>{let{theme:t}=e;return t.main}};
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        border-radius: 20px;
        @media (${a.Ay.small}) {
            width: 400px;
        }
        .sent {
            animation: ${K} ease-in-out 3s;
            position: relative;
            display: inline-block;
        }
    }
    #email {
        background-color: ${e=>{let{theme:t}=e;return t.formGray}};
        padding: 10px 15px;
        font-weight: normal;
        font-size: 18px;
        line-height: 165.69%;
        border-radius: 13px;
        width: 230px;
        color: ${e=>{let{theme:t}=e;return t.textMain}};
        ::placeholder {
            color: ${e=>{let{theme:t}=e;return t.textGray}};
        }
        @media (${a.Ay.small}) {
            width: 330px;
        }
    }
    #submit {
        width: 30px;
        height: 30px;
        background-size: fit;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url(${O.c_});
        transition-duration: 0.4s;
    }
`,X=i.Ay.button`
    content: '';
    width: 30px;
    height: 30px;
    background-size: fit;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${O.c_});
    transition-duration: 0.4s;
`,G=(i.i7`
from {
  transform: translateX(0px);
}
to {
  transform: translateX(-100%);
}
`,i.i7`
from {
  transform: translateX(-80%);
}
to {
  transform: translateX(0);
}
`,i.Ay.div`
  z-index: 999;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${e=>{let{theme:t}=e;return t.cover}};
  backdrop-filter: blur(5px);
  overflow: hidden;
`),Z=e=>{let{isLocked:t,setIsLocked:n}=e;return(0,S.jsx)(S.Fragment,{children:t?(0,S.jsx)(G,{children:(0,S.jsx)(J,{setIsLocked:n})}):(0,S.jsx)(S.Fragment,{children:" "})})},J=e=>{let{setIsLocked:t}=e;const[n,i]=(0,r.useState)(!1),[a,o]=(0,r.useState)(""),[l,s]=(0,r.useState)(!1);return(0,S.jsx)(Q,{children:(0,S.jsxs)("form",{onSubmit:e=>{e.preventDefault(),setTimeout((()=>{i(!1)}),1e3),"01732341644l"!==a?(i(!0),s(!0)):(t(!1),i(!1),s(!1))},className:l?"error-icon":null,id:"form",children:[(0,S.jsx)("input",{autoComplete:"new-password",className:l?[n?"error-anim":"form-error"]:null,type:"password",id:"email",placeholder:"Password",onChange:e=>{o(e.target.value)}}),(0,S.jsx)(X,{className:null,type:"submit",id:"submit"})]})})},ee=i.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  padding-bottom: 50px;
`,te=i.Ay.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.main}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.textMain}}22;
  border-radius: 11px;
  width: 90px;
  height: 90px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
  position: relative;
  overflow: visible;
  will-change: transform;
  box-sizing: border-box;
  padding: 0 8px; /* small horizontal breathing room */

  @media (${a.Ay.xs}) {
    width: 120px;
    height: 120px;
  }

  @media (${a.Ay.small}) {
    width: 140px;
    height: 140px;
  }

  @media (${a.Ay.large}) {
    width: 150px;
    height: 150px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 9px;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &:hover {
    cursor: pointer;
    transform: rotate(0deg) scale(1.02) !important;
    border-color: ${e=>{let{theme:t}=e;return t.textMain}}44;
    background-color: ${e=>{let{theme:t}=e;return t.textMain}}08; /* subtle emphasis */
  }

  &::after {
    content: attr(data-label);
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    color: ${e=>e.theme.textLight};
    font-size: 14px;
    letter-spacing: -0.4px;
    text-align: left;
    opacity: 0;
    transition: opacity 0.3s ease;
    white-space: nowrap;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }

  /* Subtle rotation pattern that cycles every 4 items to support any count */
  &:nth-child(4n + 1) {
    transform: rotate(-4deg) translateZ(0);
  }
  &:nth-child(4n + 2) {
    transform: rotate(3.5deg) translateZ(0);
  }
  &:nth-child(4n + 3) {
    transform: rotate(-3deg) translateZ(0);
  }
  &:nth-child(4n + 0) {
    transform: rotate(2.5deg) translateZ(0);
  }
`,ne=n.p+"static/media/collage1.68b92fc102ebce2c8882.png",re=n.p+"static/media/collage2.95b4bb517501247469a6.gif",ie=n.p+"static/media/collage3.3fb185bcf921d4e2e5fa.png",ae=n.p+"static/media/collage4.a8c7afb47b5c725b6730.gif",oe=n.p+"static/media/collage5.6ca319721522d9f241de.gif",le=()=>{const e=[{label:"Content Scheduling",img:ne,alt:"Scheduler"},{label:"Trivia Game Design",img:re,alt:"Trivia Game"},{label:"Email Onboarding",img:ie,alt:"Email Onboarding"},{label:"Paywall Popup",img:ae,alt:"Paywall Popup"},{label:"Navigation Collapse",img:oe,alt:"Navigation Collapse"}],t=Array.isArray(_.OP)&&_.OP.length>0?_.OP.filter((e=>!1!==(null===e||void 0===e?void 0:e.visible))):e;return(0,S.jsx)(ee,{children:t.map(((e,t)=>{const n=e.label||`Item ${t+1}`,r=e.src||e.img,i=e.alt||n,a=e.href;return(0,S.jsx)(te,{"data-label":n,children:a?(0,S.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":n,style:{display:"block",width:"100%",height:"100%"},children:(0,S.jsx)("img",{src:r,alt:i,loading:"lazy"})}):(0,S.jsx)("img",{src:r,alt:i,loading:"lazy"})},t)}))})},se=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 24px 0 0;
`,ce=i.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`,de=i.Ay.div`
  min-width: 180px;
  text-align: left;

  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`,ue=i.Ay.div`
  flex: 1;
`,fe=e=>{let{experiences:t}=e;return(0,S.jsx)(se,{children:t.map(((e,t)=>(0,S.jsxs)(ce,{children:[(0,S.jsx)(de,{children:(0,S.jsx)(a._B,{style:{color:"#B0B0B0",fontWeight:300},children:e.years})}),(0,S.jsxs)(ue,{children:[(0,S.jsx)(a._B,{children:e.title}),(0,S.jsx)(a.fz,{children:e.description})]})]},t)))})},pe=e=>{let{size:t=20}=e;return(0,S.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,S.jsx)("path",{d:"M12 5l-6.5 6.5a1 1 0 001.4 1.4L11 8.3V19a1 1 0 102 0V8.3l4.1 4.6a1 1 0 001.5-1.3L12 5z",fill:"currentColor"})})},he=i.Ay.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.outline}};
  color: ${e=>{let{theme:t}=e;return t.main}};
  background: ${e=>{let{theme:t}=e;return t.textMain}};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    opacity 0.22s ease;
  cursor: pointer;
  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};
  /* transform driven by CSS vars to avoid overriding X translate on hover */
  --tx: 0; /* base X translate */
  --ty: ${e=>{let{$visible:t}=e;return t?"0":"12px"}};
  transform: translateX(var(--tx)) translateY(var(--ty));
  pointer-events: ${e=>{let{$visible:t}=e;return t?"auto":"none"}};

  &:hover {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
    --ty: -2px;
  }
  &:focus {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.outline}};
    outline-offset: 2px;
  }

  @media (max-width: 767px) {
    right: 12%;
    bottom: calc(14px + env(safe-area-inset-bottom, 0px));
    width: 40px;
    height: 40px;
    /* keep centered via var-based X translate so hover doesn't cancel it */
    --tx: 50%;
    --ty: ${e=>{let{$visible:t}=e;return t?"0":"12px"}};
    opacity: ${e=>{let{$visible:t}=e;return t?.88:0}};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: translateX(var(--tx)) translateY(var(--ty));
  }
`,me=()=>{const[e,t]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=()=>t(window.scrollY>600);return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]);return(0,S.jsx)(he,{"aria-label":"Scroll to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),$visible:e,children:(0,S.jsx)(pe,{})})}},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function x(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var b=v.prototype=new x;b.constructor=v,m(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,a={},o=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=t[i]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===a[i]&&(a[i]=s[i]);return{$$typeof:n,type:e,key:o,ref:l,props:a,_owner:j.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,i,a,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===a?"."+z(s,0):a,w(o)?(i="",null!=e&&(i=e.replace(_,"$&/")+"/"),T(o,t,i,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var d=a+z(l=e[c],c);s+=T(l,t,i,d,o)}else if(d=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof d)for(e=d.call(e),c=0;!(l=e.next()).done;)s+=T(l=l.value,t,i,d=a+z(l,c++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function A(e,t,n){if(null==e)return e;var r=[],i=0;return T(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},L={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};function B(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=o,t.PureComponent=v,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=B,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),a=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=B,t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.3.1"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},4574:(e,t,n)=>{"use strict";n.d(t,{NP:()=>Pe,DU:()=>Ne,AH:()=>ve,Ay:()=>Me,i7:()=>Oe});var r=n(528),i=n(5043),a=n(7324),o=n.n(a);const l=function(e){function t(e,r,s,c,f){for(var p,h,m,g,b,k=0,j=0,S=0,C=0,E=0,$=0,L=m=p=0,N=0,O=0,M=0,R=0,D=s.length,F=D-1,W="",H="",V="",U="";N<D;){if(h=s.charCodeAt(N),N===F&&0!==j+C+S+k&&(0!==j&&(h=47===j?10:47),C=S=k=0,D++,F++),0===j+C+S+k){if(N===F&&(0<O&&(W=W.replace(u,"")),0<W.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:W+=s.charAt(N)}h=59}switch(h){case 123:for(p=(W=W.trim()).charCodeAt(0),m=1,R=++N;N<D;){switch(h=s.charCodeAt(N)){case 123:m++;break;case 125:m--;break;case 47:switch(h=s.charCodeAt(N+1)){case 42:case 47:e:{for(L=N+1;L<F;++L)switch(s.charCodeAt(L)){case 47:if(42===h&&42===s.charCodeAt(L-1)&&N+2!==L){N=L+1;break e}break;case 10:if(47===h){N=L+1;break e}}N=L}}break;case 91:h++;case 40:h++;case 34:case 39:for(;N++<F&&s.charCodeAt(N)!==h;);}if(0===m)break;N++}if(m=s.substring(R,N),0===p&&(p=(W=W.replace(d,"").trim()).charCodeAt(0)),64===p){switch(0<O&&(W=W.replace(u,"")),h=W.charCodeAt(1)){case 100:case 109:case 115:case 45:O=r;break;default:O=P}if(R=(m=t(r,O,m,h,f+1)).length,0<I&&(b=l(3,m,O=n(P,W,M),r,z,_,R,h,f,c),W=O.join(""),void 0!==b&&0===(R=(m=b.trim()).length)&&(h=0,m="")),0<R)switch(h){case 115:W=W.replace(w,o);case 100:case 109:case 45:m=W+"{"+m+"}";break;case 107:m=(W=W.replace(y,"$1 $2"))+"{"+m+"}",m=1===A||2===A&&a("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=W+m,112===c&&(H+=m,m="")}else m=""}else m=t(r,n(r,W,M),m,c,f+1);V+=m,m=M=O=L=p=0,W="",h=s.charCodeAt(++N);break;case 125:case 59:if(1<(R=(W=(0<O?W.replace(u,""):W).trim()).length))switch(0===L&&(p=W.charCodeAt(0),45===p||96<p&&123>p)&&(R=(W=W.replace(" ",":")).length),0<I&&void 0!==(b=l(1,W,r,e,z,_,H.length,c,f,c))&&0===(R=(W=b.trim()).length)&&(W="\0\0"),p=W.charCodeAt(0),h=W.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){U+=W+s.charAt(N);break}default:58!==W.charCodeAt(R-1)&&(H+=i(W,p,h,W.charCodeAt(2)))}M=O=L=p=0,W="",h=s.charCodeAt(++N)}}switch(h){case 13:case 10:47===j?j=0:0===1+p&&107!==c&&0<W.length&&(O=1,W+="\0"),0<I*B&&l(0,W,r,e,z,_,H.length,c,f,c),_=1,z++;break;case 59:case 125:if(0===j+C+S+k){_++;break}default:switch(_++,g=s.charAt(N),h){case 9:case 32:if(0===C+k+j)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+j+k&&(O=M=1,g="\f"+g);break;case 108:if(0===C+j+k+T&&0<L)switch(N-L){case 2:112===E&&58===s.charCodeAt(N-3)&&(T=E);case 8:111===$&&(T=$)}break;case 58:0===C+j+k&&(L=N);break;case 44:0===j+S+C+k&&(O=1,g+="\r");break;case 34:case 39:0===j&&(C=C===h?0:0===C?h:C);break;case 91:0===C+j+S&&k++;break;case 93:0===C+j+S&&k--;break;case 41:0===C+j+k&&S--;break;case 40:if(0===C+j+k){if(0===p)if(2*E+3*$===533);else p=1;S++}break;case 64:0===j+S+C+k+L+m&&(m=1);break;case 42:case 47:if(!(0<C+k+S))switch(j){case 0:switch(2*h+3*s.charCodeAt(N+1)){case 235:j=47;break;case 220:R=N,j=42}break;case 42:47===h&&42===E&&R+2!==N&&(33===s.charCodeAt(R+2)&&(H+=s.substring(R,N+1)),g="",j=0)}}0===j&&(W+=g)}$=E,E=h,N++}if(0<(R=H.length)){if(O=r,0<I&&(void 0!==(b=l(2,H,O,e,z,_,R,c,f,c))&&0===(H=b).length))return U+H+V;if(H=O.join(",")+"{"+H+"}",0!==A*T){switch(2!==A||a(H,2)||(T=0),T){case 111:H=H.replace(v,":-moz-$1")+H;break;case 112:H=H.replace(x,"::-webkit-input-$1")+H.replace(x,"::-moz-$1")+H.replace(x,":-ms-input-$1")+H}T=0}}return U+H+V}function n(e,t,n){var i=t.trim().split(m);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var l=0;for(e=0===o?"":e[0]+" ";l<a;++l)t[l]=r(e,t[l],n).trim();break;default:var s=l=0;for(t=[];l<a;++l)for(var c=0;c<o;++c)t[s++]=r(e[c]+" ",i[l],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,r){var o=e+";",l=2*t+3*n+4*r;if(944===l){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===A||2===A&&a(s,1)?"-webkit-"+s+s:s}if(0===A||2===A&&!a(o,1))return o;switch(l){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(E,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return p.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(b,"tb");break;case 232:s=o.replace(b,"tb-rl");break;case 220:s=o.replace(b,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,l=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(j,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(j,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function a(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),L(2!==t?r:r.replace(S,"$1"),n,t)}function o(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function l(e,t,n,r,i,a,o,l,s,d){for(var u,f=0,p=t;f<I;++f)switch(u=$[f].call(c,e,p,n,r,i,a,o,l,s,d)){case void 0:case!1:case!0:case null:break;default:p=u}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(L=null,e?"function"!==typeof e?A=1:(A=2,L=e):A=0),s}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<I){var i=l(-1,n,r,r,z,_,0,0,0,0);void 0!==i&&"string"===typeof i&&(n=i)}var a=t(P,r,n,0,0);return 0<I&&(void 0!==(i=l(-2,a,r,r,z,_,a.length,0,0,0))&&(a=i)),T=0,_=z=1,a}var d=/^\0+/g,u=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,v=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,j=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,_=1,z=1,T=0,A=1,P=[],$=[],I=0,L=null,B=0;return c.use=function e(t){switch(t){case void 0:case null:I=$.length=0;break;default:if("function"===typeof t)$[I++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else B=0|!!t}return e},c.set=s,void 0!==e&&s(e),c};const s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function c(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=c((function(e){return d.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=n(219),p=n.n(f);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},g=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,r.QP)(e)},y=Object.freeze([]),x=Object.freeze({});function v(e){return"function"==typeof e}function b(e){return e.displayName||e.name||"Component"}function w(e){return e&&"string"==typeof e.styledComponentId}var k="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",j="undefined"!=typeof window&&"HTMLElement"in window,S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY))),C={};function E(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var _=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&E(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(o,t[l])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),z=new Map,T=new Map,A=1,P=function(e){if(z.has(e))return z.get(e);for(;T.has(A);)A++;var t=A++;return z.set(e,t),T.set(t,e),t},$=function(e){return T.get(e)},I=function(e,t){t>=A&&(A=t+1),z.set(e,t),T.set(t,e)},L="style["+k+'][data-styled-version="5.3.11"]',B=new RegExp("^"+k+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),N=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},O=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var l=o.match(B);if(l){var s=0|parseInt(l[1],10),c=l[2];0!==s&&(I(c,s),N(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},M=function(){return n.nc},R=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(k))return r}}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(k,"active"),r.setAttribute("data-styled-version","5.3.11");var o=M();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},D=function(){function e(e){var t=this.element=R(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}E(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),F=function(){function e(e){var t=this.element=R(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),H=j,V={isServer:!j,useCSSOMInjection:!S},U=function(){function e(e,t,n){void 0===e&&(e=x),void 0===t&&(t={}),this.options=h({},V,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&j&&H&&(H=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(k)&&(O(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return P(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(h({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new W(i):r?new D(i):new F(i),new _(e)));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(P(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(P(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(P(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var a=$(i);if(void 0!==a){var o=e.names.get(a),l=t.getGroup(i);if(o&&l&&o.size){var s=k+".g"+i+'[id="'+a+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+l+s+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),q=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Y(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return(K(t%52)+n).replace(q,"$1-$2")}var Q=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},X=function(e){return Q(5381,e)};function G(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(v(n)&&!w(n))return!1}return!0}var Z=X("5.3.11"),J=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&G(e),this.componentId=t,this.baseHash=Q(Z,t),this.baseStyle=n,U.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var a=ye(this.rules,e,t,n).join(""),o=Y(Q(this.baseHash,a)>>>0);if(!t.hasNameForId(r,o)){var l=n(a,"."+o,void 0,r);t.insertRules(r,o,l)}i.push(o),this.staticRulesId=o}else{for(var s=this.rules.length,c=Q(this.baseHash,n.hash),d="",u=0;u<s;u++){var f=this.rules[u];if("string"==typeof f)d+=f;else if(f){var p=ye(f,e,t,n),h=Array.isArray(p)?p.join(""):p;c=Q(c,h+u),d+=h}}if(d){var m=Y(c>>>0);if(!t.hasNameForId(r,m)){var g=n(d,"."+m,void 0,r);t.insertRules(r,m,g)}i.push(m)}}return i.join(" ")},e}(),ee=/^\s*\/\/.*$/gm,te=[":","[",".","#"];function ne(e){var t,n,r,i,a=void 0===e?x:e,o=a.options,s=void 0===o?x:o,c=a.plugins,d=void 0===c?y:c,u=new l(s),f=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,a,o,l,s,c,d,u){switch(n){case 1:if(0===d&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),h=function(e,r,a){return 0===r&&-1!==te.indexOf(a[n.length])||a.match(i)?e:"."+t};function m(e,a,o,l){void 0===l&&(l="&");var s=e.replace(ee,""),c=a&&o?o+" "+a+" { "+s+" }":s;return t=l,n=a,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(o||!a?"":a,c)}return u.use([].concat(d,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,h))},p,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=d.length?d.reduce((function(e,t){return t.name||E(15),Q(e,t.name)}),5381).toString():"",m}var re=i.createContext(),ie=(re.Consumer,i.createContext()),ae=(ie.Consumer,new U),oe=ne();function le(){return(0,i.useContext)(re)||ae}function se(){return(0,i.useContext)(ie)||oe}function ce(e){var t=(0,i.useState)(e.stylisPlugins),n=t[0],r=t[1],a=le(),l=(0,i.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,i.useMemo)((function(){return ne({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return(0,i.useEffect)((function(){o()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]),i.createElement(re.Provider,{value:l},i.createElement(ie.Provider,{value:s},e.children))}var de=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=oe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return E(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=oe),this.name+e.hash},e}(),ue=/([A-Z])/,fe=/([A-Z])/g,pe=/^ms-/,he=function(e){return"-"+e.toLowerCase()};function me(e){return ue.test(e)?e.replace(fe,he).replace(pe,"-ms-"):e}var ge=function(e){return null==e||!1===e||""===e};function ye(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,l=e.length;o<l;o+=1)""!==(i=ye(e[o],t,n,r))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return ge(e)?"":w(e)?"."+e.styledComponentId:v(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:ye(e(t),t,n,r):e instanceof de?n?(e.inject(n,r),e.getName(r)):e:g(e)?function e(t,n){var r,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!ge(t[o])&&(Array.isArray(t[o])&&t[o].isCss||v(t[o])?a.push(me(o)+":",t[o],";"):g(t[o])?a.push.apply(a,e(t[o],o)):a.push(me(o)+": "+(r=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in s||r.startsWith("--")?String(i).trim():i+"px")+";")));return n?[n+" {"].concat(a,["}"]):a}(e):e.toString();var c}var xe=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ve(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return v(e)||g(e)?xe(ye(m(y,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:xe(ye(m(e,n)))}new Set;var be=function(e,t,n){return void 0===n&&(n=x),e.theme!==n.theme&&e.theme||t||n.theme},we=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function je(e){return e.replace(we,"-").replace(ke,"")}var Se=function(e){return Y(X(e)>>>0)};function Ce(e){return"string"==typeof e&&!0}var Ee=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},_e=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ee(t)&&Ee(r)?Te(r,t):e[n]=t}function Te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Ee(o))for(var l in o)_e(l)&&ze(e,o[l],l)}return e}var Ae=i.createContext();Ae.Consumer;function Pe(e){var t=(0,i.useContext)(Ae),n=(0,i.useMemo)((function(){return function(e,t){return e?v(e)?e(t):Array.isArray(e)||"object"!=typeof e?E(8):t?h({},t,{},e):e:E(14)}(e.theme,t)}),[e.theme,t]);return e.children?i.createElement(Ae.Provider,{value:n},e.children):null}var $e={};function Ie(e,t,n){var r=w(e),a=!Ce(e),o=t.attrs,l=void 0===o?y:o,s=t.componentId,c=void 0===s?function(e,t){var n="string"!=typeof e?"sc":je(e);$e[n]=($e[n]||0)+1;var r=n+"-"+Se("5.3.11"+n+$e[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):s,d=t.displayName,f=void 0===d?function(e){return Ce(e)?"styled."+e:"Styled("+b(e)+")"}(e):d,m=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||c,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(n,r,i){return e.shouldForwardProp(n,r,i)&&t.shouldForwardProp(n,r,i)}:e.shouldForwardProp);var j,S=new J(n,m,r?e.componentStyle:void 0),C=S.isStatic&&0===l.length,E=function(e,t){return function(e,t,n,r){var a=e.attrs,o=e.componentStyle,l=e.defaultProps,s=e.foldedComponentIds,c=e.shouldForwardProp,d=e.styledComponentId,f=e.target,p=function(e,t,n){void 0===e&&(e=x);var r=h({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,a,o=e;for(t in v(o)&&(o=o(r)),o)r[t]=i[t]="className"===t?(n=i[t],a=o[t],n&&a?n+" "+a:n||a):o[t]})),[r,i]}(be(t,(0,i.useContext)(Ae),l)||x,t,a),m=p[0],g=p[1],y=function(e,t,n){var r=le(),i=se();return t?e.generateAndInjectStyles(x,r,i):e.generateAndInjectStyles(n,r,i)}(o,r,m),b=n,w=g.$as||t.$as||g.as||t.as||f,k=Ce(w),j=g!==t?h({},t,{},g):t,S={};for(var C in j)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?S.as=j[C]:(c?c(C,u,w):!k||u(C))&&(S[C]=j[C]));return t.style&&g.style!==t.style&&(S.style=h({},t.style,{},g.style)),S.className=Array.prototype.concat(s,d,y!==d?y:null,t.className,g.className).filter(Boolean).join(" "),S.ref=b,(0,i.createElement)(w,S)}(j,e,t,C)};return E.displayName=f,(j=i.forwardRef(E)).attrs=g,j.componentStyle=S,j.displayName=f,j.shouldForwardProp=k,j.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):y,j.styledComponentId=m,j.target=r?e.target:e,j.withComponent=function(e){var r=t.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(t,["componentId"]),a=r&&r+"-"+(Ce(e)?e:je(b(e)));return Ie(e,h({},i,{attrs:g,componentId:a}),n)},Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?Te({},e.defaultProps,t):t}}),Object.defineProperty(j,"toString",{value:function(){return"."+j.styledComponentId}}),a&&p()(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),j}var Le=function(e){return function e(t,n,i){if(void 0===i&&(i=x),!(0,r.Hy)(n))return E(1,String(n));var a=function(){return t(n,i,ve.apply(void 0,arguments))};return a.withConfig=function(r){return e(t,n,h({},i,{},r))},a.attrs=function(r){return e(t,n,h({},i,{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},a}(Ie,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Le[e]=Le(e)}));var Be=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=G(e),U.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(ye(this.rules,t,n,r).join(""),""),a=this.componentId+e;n.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&U.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ne(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ve.apply(void 0,[e].concat(n)),o="sc-global-"+Se(JSON.stringify(a)),l=new Be(a,o);function s(e){var t=le(),n=se(),r=(0,i.useContext)(Ae),a=(0,i.useRef)(t.allocateGSInstance(o)).current;return t.server&&c(a,e,t,r,n),(0,i.useLayoutEffect)((function(){if(!t.server)return c(a,e,t,r,n),function(){return l.removeStyles(a,t)}}),[a,e,t,r,n]),null}function c(e,t,n,r,i){if(l.isStatic)l.renderStyles(e,C,n,i);else{var a=h({},t,{theme:be(t,r,s.defaultProps)});l.renderStyles(e,a,n,i)}}return i.memo(s)}function Oe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ve.apply(void 0,[e].concat(n)).join(""),a=Se(i);return new de(a,i)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=M();return"<style "+[n&&'nonce="'+n+'"',k+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?E(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return E(2);var n=((t={})[k]="",t["data-styled-version"]="5.3.11",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=M();return r&&(n.nonce=r),[i.createElement("style",h({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new U({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?E(2):i.createElement(ce,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return E(3)}}();const Me=Le},4983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,x=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case u:case a:case l:case o:case p:return e;default:switch(e=e&&e.$$typeof){case c:case f:case g:case m:case s:return e;default:return t}}case i:return t}}}function k(e){return w(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=a,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=l,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||w(e)===d},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===u||e===l||e===o||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===x||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y)},t.typeOf=w},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},5475:(e,t,n)=>{"use strict";var r,i;n.d(t,{Kd:()=>p,N_:()=>g});var a=n(5043),o=n(7950),l=n(3216),s=n(1387);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const u=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(v){}new Map;const f=(r||(r=n.t(a,2))).startTransition;(i||(i=n.t(o,2))).flushSync,(r||(r=n.t(a,2))).useId;function p(e){let{basename:t,children:n,future:r,window:i}=e,o=a.useRef();null==o.current&&(o.current=(0,s.zR)({window:i,v5Compat:!0}));let c=o.current,[d,u]=a.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},h=a.useCallback((e=>{p&&f?f((()=>u(e))):u(e)}),[u,p]);return a.useLayoutEffect((()=>c.listen(h)),[c,h]),a.useEffect((()=>(0,l.V8)(r)),[r]),a.createElement(l.Ix,{basename:t,children:n,location:d.location,navigationType:d.action,navigator:c,future:r})}const h="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,g=a.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:o,replace:f,state:p,target:g,to:y,preventScrollReset:x,viewTransition:b}=e,w=d(e,u),{basename:k}=a.useContext(l.jb),j=!1;if("string"===typeof y&&m.test(y)&&(n=y,h))try{let e=new URL(window.location.href),t=y.startsWith("//")?new URL(e.protocol+y):new URL(y),n=(0,s.pb)(t.pathname,k);t.origin===e.origin&&null!=n?y=n+t.search+t.hash:j=!0}catch(v){}let S=(0,l.$P)(y,{relative:i}),C=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:c,viewTransition:d}=void 0===t?{}:t,u=(0,l.Zp)(),f=(0,l.zy)(),p=(0,l.x$)(e,{relative:c});return a.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==r?r:(0,s.AO)(f)===(0,s.AO)(p);u(e,{replace:n,state:i,preventScrollReset:o,relative:c,viewTransition:d})}}),[f,u,p,r,i,n,e,o,c,d])}(y,{replace:f,state:p,target:g,preventScrollReset:x,relative:i,viewTransition:b});return a.createElement("a",c({},w,{href:n||S,onClick:j||o?r:function(e){r&&r(e),e.defaultPrevented||C(e)},ref:t,target:g}))}));var y,x;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(y||(y={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(x||(x={}))},5745:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/thumb.ef7100373a5d879446db.png"},6078:(e,t,n)=>{"use strict";n.d(t,{K:()=>a,p:()=>o});var r=n(4574),i=n(9547);const a=r.Ay.div`
  position: absolute;
  display: block;
  top: 20px;
  z-index: -5;
  background-color: ${e=>{let{theme:t}=e;return t.main}};
  width: 400vmax;
  height: 400vmax;
  top: calc(-250vmax + 3rem);
  right: calc(-250vmax + 3rem);
  border-radius: 100%;
`,o=r.Ay.button`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  display: block;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
  transition: transform 0.2s ease-in-out;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    outline: 2px solid rgba(255, 255, 255, 0.26);
    transition: all 0.2s ease-in-out;
  }

  :active {
    svg {
      opacity: 0.5;
    }
  }

  @media (${i.Ay.large}) {
    transform: scale(1);
  }
`},6596:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/signUp.3958494f07ba95ecced9.png"},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var l=2*(r+1)-1,s=e[l],c=l+1,d=e[c];if(0>a(s,n))c<i&&0>a(d,s)?(e[r]=d,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<i&&0>a(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],d=[],u=1,f=null,p=3,h=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,n(c,t)}t=r(d)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,I(k);else{var t=r(d);null!==t&&L(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,x(E),E=-1),h=!0;var a=p;try{for(b(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!T());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(c)&&i(c),b(n)}else i(c);f=r(c)}if(null!==f)var s=!0;else{var u=r(d);null!==u&&L(w,u.startTime-n),s=!1}return s}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,C=null,E=-1,_=5,z=-1;function T(){return!(t.unstable_now()-z<_)}function A(){if(null!==C){var e=t.unstable_now();z=e;var n=!0;try{n=C(!0,e)}finally{n?j():(S=!1,C=null)}}else S=!1}if("function"===typeof v)j=function(){v(A)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,$=P.port2;P.port1.onmessage=A,j=function(){$.postMessage(null)}}else j=function(){y(A,0)};function I(e){C=e,S||(S=!0,j())}function L(e,n){E=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,I(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>o?(e.sortIndex=a,n(d,e),null===r(c)&&e===r(d)&&(g?(x(E),E=-1):g=!0,L(w,a-o))):(e.sortIndex=l,n(c,e),m||h||(m=!0,I(k))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},7324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var d=e[c],u=t[c];if(!1===(i=n?n.call(r,d,u,c):void 0)||void 0===i&&d!==u)return!1}return!0}},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},8545:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/newvid.3bc75a0f17d1e079c15f.mp4"},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},9362:(e,t,n)=>{"use strict";n.d(t,{aj:()=>o,qG:()=>i,sF:()=>a});var r=n(4574);const i=r.i7`
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
`,a=(r.i7`
    0%   {  
        transform: translateY(-80px) scale(1.01); 
    }
    100% {     
        transform: translateY(0) scale(1); 
    }
`,r.i7`
    0%    {  
        transform: translateY(0); 
    }
    100% {      
        transform: translateY(-80px);
    }
`,r.i7`
    0%{ 
        transform: scale(1);
    }

    30%{

        transform: scale(1.017);
    }

    100%{
        transform: scale(1.01);
    }
`,r.i7`
    0%{ 
        transform: scale(1) translateY(190px);
    }

    30%{

        transform: scale(1.017) translateY(190px);
    }

    100%{
        transform: scale(1.01) translateY(190px);
    }
`,r.i7`
    0%{ 
        transform: scale(1.01);
    }

    100%{
        transform: scale(1);
    }
`,r.i7`
0%{
    width: 0;
    height: 0;
    top: 0px;
    right: 0px;
    background-color: #151517;
}
100%{
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
    background-color: #151517;
}`),o=r.i7`
  0%{
    background-color: white;
    width: 0;
    height: 0;
    top: 0px;
    right: 0px;
  }
  100%{
    background-color: white;
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
  }
`},9547:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>x,CC:()=>h,DZ:()=>o,HL:()=>f,IN:()=>m,JU:()=>c,Pk:()=>d,Z6:()=>g,_B:()=>s,fV:()=>l,fz:()=>u,gZ:()=>p});var r=n(4574),i=n(9362);const a={large:"min-width: 1200px",medium:"min-width: 870px",small:"min-width: 660px",xs:"min-width: 460px",maxWidth:"1500px"},o=r.Ay.h1`
  font-family: "Inter", sans-serif;
  font-size: 40px;
  line-height: 113%;
  margin: 0 auto;
  width: 100%;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  transition: all 0.3s ease-in-out;
  border-bottom: 3px solid transparent;
  user-select: none;
  opacity: 0;
  letter-spacing: -0.7px;
  text-align: left;
  animation: ${i.qG} 1s forwards;
  font-weight: 300;
`,l=r.Ay.h2`
  font-family: "Inter", sans-serif;
  line-height: auto;
  font-weight: 500;
  font-size: 24px;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  transition: all 0.3s ease-in-out;
  border-bottom: 3px solid transparent;
  opacity: 0;
  letter-spacing: -0.01em;

  animation: ${i.qG} 1s forwards;

  @media (${a.large}) {
    font-size: 24px;
  }
`,s=r.Ay.h3`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  transition: all 0.3s ease-in-out;
  border-bottom: 3px solid transparent;
  opacity: 0;
  letter-spacing: -0.35px;
  animation: ${i.qG} 1s forwards;

  @media (${a.large}) {
  }
`,c=r.Ay.h1`
  font-family: "Inter", sans-serif;
  line-height: auto;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  opacity: 0.5;
  font-size: 12px;
  margin-bottom: 10px;
  letter-spacing: -0.003;
`,d=r.Ay.p`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 170%;
  padding: 0;
  letter-spacing: -0.003px;
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.textMain}};
  padding: 8px 20px;
  margin-bottom: 24px;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
`,u=r.Ay.p`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  /* Ensure readable contrast by default */
  mix-blend-mode: normal;
  color: ${e=>{let{theme:t}=e;return t.textMain}};
  padding: 0;
  letter-spacing: -0.003px;
  /* High-contrast paragraphs across themes */

  @media (${a.large}) {
    font-size: 16px;
  }
`,f=r.Ay.p`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  line-height: auto;
  color: ${e=>{let{theme:t}=e;return t.textLight}};
  margin: 16px 0 0 0;
  font-size: 14px;
  text-align: center;

  @media (${a.large}) {
  }
`,p=r.Ay.main`
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.main}};
  overflow: hidden;
  @media (${a.large}) {
    padding-right: ${e=>e.paddingRight};
  }

  > .growBlack {
    animation: ${i.sF} 1s forwards;
  }

  > .growWhite {
    animation: ${i.aj} 1s forwards;
  }
`,h=r.Ay.main`
  width: 100%;
  height: auto;
  margin: 0px auto 0px auto;
  padding: 20px;
  max-width: 1100px;

  @media (${a.large}) {
    margin: 64px auto 64px auto;
    padding: 0px;
  }
`,m=r.Ay.div`
  width: 100%;
  height: auto;
  margin: 20px auto 20px auto;
  padding: 20px;
  max-width: 750px;

  @media (${a.large}) {
    margin: 44px auto 60px auto;
    padding: 0px;
  }
`,g=r.Ay.div`
  width: 100%;
  height: auto;
  margin: 20px auto 20px auto;
  padding: 20px;
  max-width: 750px;

  @media (${a.large}) {
    margin: 44px auto 100px auto;
    padding: 0px;
  }
`,y=(r.Ay.div`
  max-width: 1437px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 30px;

  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }
`,r.Ay.div`
  width: 100%;
  height: 500px;
  background-position: center center;
  background-size: cover;
  opacity: 0;
  animation: ${i.qG} 1s forwards;
`,r.Ay.div`
  margin-bottom: 18px;
  width: 100%;
  height: 290px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  @media (${a.small}) {
    height: 400px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${e=>e.$image||"#BF4F74"});
    ${e=>e.$inputColor||"#BF4F74"};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    transition: filter 0.3s ease;
    @media (${a.large}) {
      background-position: center;
    }
  }
`),x=(r.Ay.div`
  padding: 20px 0 40px 0;
  margin: 0;
  width: 100%;
  @media (${a.large}) {
    padding: 15px 0 32px;
  }

  &:hover ${y}::before {
  }

  &:hover ${y}::after {
    opacity: 0.6;
  }
`,a)},9646:(e,t,n)=>{"use strict";n.d(t,{lq:()=>k,s$:()=>Z,Zg:()=>J,eV:()=>ee,wd:()=>i,Ww:()=>B,XO:()=>l,$D:()=>a,Bg:()=>x,Js:()=>v,rM:()=>ne,T5:()=>g,uu:()=>w,Xe:()=>re,Gf:()=>S,NT:()=>C,Uv:()=>E,Nc:()=>_,G$:()=>z,NN:()=>T,Gu:()=>A,N8:()=>P,UK:()=>$,c_:()=>o,d6:()=>te,kz:()=>I,M7:()=>W,TQ:()=>ie,Mc:()=>ae,bp:()=>j,bo:()=>oe,WL:()=>le,dC:()=>b,$1:()=>y,e2:()=>se,X7:()=>ce,SL:()=>de,Zt:()=>ue,tY:()=>L,RG:()=>fe,uz:()=>N,uc:()=>p,w4:()=>r,AP:()=>H,eh:()=>R,ex:()=>D,l$:()=>F,$n:()=>O,UF:()=>M,Mf:()=>f,PJ:()=>Y,si:()=>m,Gi:()=>V,h9:()=>U,rt:()=>q,g4:()=>K,eb:()=>G,hd:()=>Q,zC:()=>h,Hh:()=>X,te:()=>s,O8:()=>c,Hu:()=>d,AY:()=>u});n.p,n.p;const r=n.p+"static/media/vuln.750cd808f20742f67f6f.png",i=n.p+"static/media/devops.c79d813b541f7c5bfbdc.png";n(5043);const a=n.p+"static/media/error.7f89cd43c8f1ab3d19e71ee66c896a3e.svg";n.p;const o=n.p+"static/media/lock.f9d87cf9f9a3e7a2e1c62357440e857a.svg",l=n.p+"static/media/main.846969c01b93406683f2.png",s=n.p+"static/media/Anika Lubin.1403dc0498c495f5b890.png",c=n.p+"static/media/Ashlynn Bothman.373e3ff66063b51cdbd2.png",d=n.p+"static/media/Cooper Saris.91c4e4952e3f57d82307.png",u=n.p+"static/media/Maren Donin.f7bc22112785093343f9.png",f=n.p+"static/media/competitive.800e7d6899e94b40dd25.png",p=n.p+"static/media/userflow.4320fd880a8a15c93e78.png",h=n.p+"static/media/selection-ui.efe0e2f263f002a86396.png",m=n.p+"static/media/landing-ui.1ae4f585c9c9d9b356e9.png",g=n.p+"static/media/InProgress.56809265a1662d303912.png",y=n.p+"static/media/SelectingVehicle.d4dc619d249f0340ea2b.png",x=n.p+"static/media/final.8e3913acd47c3d60c34e.png",v=n.p+"static/media/final2.7b9d49dcdb8ae031f623.png",b=n.p+"static/media/key.cfd6e3ae5d11dd787617.png",w=n.p+"static/media/interview.75230e9e3206ad5b00b2.png",k=(n.p,n.p+"static/media/affinity.8b4077dafe1f04eca232.png"),j=(n.p,n.p+"static/media/prototype.88c74f995e128cf0323b.gif"),S=n.p+"static/media/layout1.53455d4f2c8a69ac63a4.png",C=n.p+"static/media/layout2.6fb633474464b65175a0.png",E=n.p+"static/media/layout3.4a4b6d646d3a3c22f847.png",_=n.p+"static/media/layout4.99f86d98a2e60b226500.png",z=n.p+"static/media/layout5.ed11262b145f7010d5b2.png",T=n.p+"static/media/layout6.be7b203caf8e87bbfab2.png",A=n.p+"static/media/layout7.501c6f099b3b901ee897.png",P=n.p+"static/media/layout8.ddd206cc436f77162f5f.png",$=n.p+"static/media/layout9.dff5273850672854a847.png";n(5745);var I=n(8545);const L=n.p+"static/media/sketches.ca11590cb9921726bd2f.jpg",B=n.p+"static/media/dragging.2176544bcd67a7d0dffa.gif",N=n.p+"static/media/useflow.03641c0af76474001887.png",O=(n.p,n.p,n.p+"static/media/persona-1.651773a087f59d3ef0ef.png"),M=n.p+"static/media/persona-2.29ed00164c9285af6a7b.png",R=n.p+"static/media/journey-vuln.b02d94b6742557101ca4.png",D=n.p+"static/media/vuln-wire.f1f6802fbc11ded9cb92.png",F=n.p+"static/media/vuln-wire2.563da705536830579b15.png",W=n.p+"static/media/onboarding.89baa661d88195faa82f.png",H=n.p+"static/media/vuln-hifi.18839287cfc405e883aa.png",V=n.p+"static/media/marketing-inspo.f2254c994da3255d4450.png",U=n.p+"static/media/marketing-sketch.5bde68f9555de1bae99e.jpg",q=(n.p,n.p+"static/media/newflow.9e4afdadac03884cbc5b.png"),K=n.p+"static/media/oldFlow.eaab892a4701a1e95566.png",Y=n.p+"static/media/final-figma.f4aef92b311e5b2010bd.png",Q=n.p+"static/media/scheduleDemo.ce5963e245b0704c0bf3.png";var X=n(6596);const G=n.p+"static/media/product-page.bb09b84022e70ca691be.mp4",Z=n.p+"static/media/change1.6f66a9526e525314114b.png",J=n.p+"static/media/change2.0c44b1255e571ee93270.png",ee=n.p+"static/media/change3.bc0b6f96c48039c16efd.png",te=n.p+"static/media/lofi.6dae2f3a4e881159278e.png",ne=n.p+"static/media/hifi.e5e4ffdce10851ba21d9.png",re=n.p+"static/media/journeyMap.e16467f492d79fb2f474.png",ie=n.p+"static/media/person1.93f376a9c081a38ef49d.png",ae=n.p+"static/media/persona2.c62139dce34223c5e9c9.png",oe=n.p+"static/media/research1.7bc8895981b09166eb32.png",le=n.p+"static/media/research2.8c8db431c3a322bcea73.png",se=(n.p,n.p+"static/media/sketch1.8e26f14c4a1736ffd22b.png"),ce=n.p+"static/media/sketch2.d0d224aa0c906c578930.png",de=n.p+"static/media/sketch3.4b872d0284a8bdb38dd3.png",ue=n.p+"static/media/sketch4.6963b63499e64afbdb15.png",fe=(n.p,n.p+"static/media/synth.fb000b904aa4a876421e.png")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".cd7cecd1.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="latifur-portfolio:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[i];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=a);var o=n.p+n.u(t),l=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,i[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],l=r[1],s=r[2],c=0;if(o.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)s(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunklatifur_portfolio=self.webpackChunklatifur_portfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(5043),t=n(4391);var r=n(4574),i=n(853),a=n(9547);const o=r.DU`
    * {
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
    z-index: 99;
    position:relative;
  }


  *:focus {outline: ${e=>{let{theme:t}=e;return t.outline}}; outline-offset: 3px;}

  html {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-weight: 600;
  }

  body {
    background: ${e=>{let{theme:t}=e;return t.main}};
    color: ${e=>{let{theme:t}=e;return t.heading}};
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    letter-spacing: -1.1%;
    width: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;  scrollbar-width: none;
    ::-webkit-scrollbar { width: 0 !important }
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
  
  a:hover {
    cursor: pointer;
    
    ${a.DZ}{
      border-bottom: 2px solid;
      border-bottom-color: ${e=>{let{theme:t}=e;return t.textMain}};
    }
  }
`;var l=n(1457),s=n(3819),c=n(5475),d=n(3216),u=n(579);const f=(0,e.lazy)((()=>Promise.resolve().then(n.bind(n,1457)).then((e=>({default:e.Movie}))))),p=(0,e.lazy)((()=>Promise.resolve().then(n.bind(n,1457)).then((e=>({default:e.VulnPage}))))),h=(0,e.lazy)((()=>Promise.resolve().then(n.bind(n,1457)).then((e=>({default:e.DevopsPage}))))),m=(0,e.lazy)((()=>Promise.resolve().then(n.bind(n,1457)).then((e=>({default:e.EA1}))))),g=(0,e.lazy)((()=>Promise.resolve().then(n.bind(n,1457)).then((e=>({default:e.Scheduler}))))),y=(0,e.lazy)((()=>Promise.resolve().then(n.bind(n,1457)).then((e=>({default:e.MarketingSite}))))),x=()=>{const[t,n,a,x,v]=(()=>{const[t,n]=(0,e.useState)("light"),[r,i]=(0,e.useState)(""),[a,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),c=e=>{o(!0),i("dark"===e?"first":"second"),setTimeout((()=>{n(e),o(!1)}),1e3)};return(0,e.useEffect)((()=>{const e=window.localStorage.getItem("MODE"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;n(e||(t?"dark":"light"));const r=window.matchMedia("(prefers-color-scheme: dark)"),i=e=>{if(!window.localStorage.getItem("MODE")){const t=e.matches?"dark":"light";c(t)}};return r.addEventListener?r.addEventListener("change",i):r.addListener(i),s(!0),()=>{r.removeEventListener?r.removeEventListener("change",i):r.removeListener(i)}}),[]),[t,()=>{const e="light"===t?"dark":"light";window.localStorage.setItem("MODE",e),c(e)},r,l,a]})();return x?(0,u.jsxs)(r.NP,{theme:"light"===t?i.A:i.a,children:[(0,u.jsx)(o,{}),(0,u.jsx)(c.Kd,{children:(0,u.jsxs)(e.Suspense,{fallback:(0,u.jsx)("div",{}),children:[(0,u.jsxs)(d.BV,{children:[(0,u.jsx)(d.qh,{exact:!0,path:"/",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(l.Landing,{setDisableScroll:v,spread:a,mode:t,toggleMode:n})})}),(0,u.jsx)(d.qh,{path:"/projects",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(l.Landing,{setDisableScroll:v,spread:a,mode:t,toggleMode:n})})}),(0,u.jsx)(d.qh,{path:"/movie",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(f,{spread:a,mode:t,toggleMode:n})})}),(0,u.jsx)(d.qh,{path:"/vuln",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(p,{spread:a,mode:t,toggleMode:n})})}),(0,u.jsx)(d.qh,{path:"/devops",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(h,{spread:a,mode:t,toggleMode:n})})}),(0,u.jsx)(d.qh,{path:"/ea1",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(m,{spread:a,mode:t,toggleMode:n})})}),(0,u.jsx)(d.qh,{path:"/schedule",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(g,{setDisableScroll:v,spread:a,mode:t,toggleMode:n})})}),(0,u.jsx)(d.qh,{path:"/marketing-site",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(y,{setDisableScroll:v,spread:a,mode:t,toggleMode:n})})}),(0,u.jsx)(d.qh,{path:"*",element:(0,u.jsx)(l.AppWrapper,{children:(0,u.jsx)(l.NotFound,{})})})]}),(0,u.jsx)(s.ld,{})]})})]}):(0,u.jsx)("div",{})},v=e=>{e&&e instanceof Function&&n.e(488).then(n.bind(n,2488)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};t.createRoot(document.getElementById("root")).render((0,u.jsx)(e.StrictMode,{children:(0,u.jsx)(x,{})})),v()})()})();
//# sourceMappingURL=main.41c288f5.js.map