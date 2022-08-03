var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,l;function a(t,e,n,o){if(t){const i=u(t,e,n,o);return t[0](i)}}function u(t,n,o,i){return t[1]&&i?e(o.ctx.slice(),t[1](i(n))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}function d(t,e,n,o,i,r){if(i){const c=u(e,n,o,r);t.p(c,i)}}function p(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function m(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function $(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function v(){return w(" ")}function x(){return w("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:k(t,o,e[o])}function T(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t){l=t}function z(t){(function(){if(!l)throw new Error("Function called outside component initialization");return l})().$$.on_mount.push(t)}function L(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const O=[],C=[],N=[],M=[],S=Promise.resolve();let A=!1;function H(t){N.push(t)}const K=new Set;let F=0;function P(){const t=l;do{for(;F<O.length;){const t=O[F];F++,j(t),U(t.$$)}for(j(null),O.length=0,F=0;C.length;)C.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];K.has(e)||(K.add(e),e())}N.length=0}while(O.length);for(;M.length;)M.pop()();A=!1,K.clear(),j(t)}function U(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const B=new Set;let D;function G(){D={r:0,c:[],p:D}}function V(){D.r||i(D.c),D=D.p}function q(t,e){t&&t.i&&(B.delete(t),t.i(e))}function J(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),D.c.push((()=>{B.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function I(t,e){const n={},o={},i={$$scope:1};let r=t.length;for(;r--;){const c=t[r],s=e[r];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)i[t]||(n[t]=s[t],i[t]=1);t[r]=s}else for(const t in c)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function Y(t){t&&t.c()}function Z(t,e,o,c){const{fragment:s,on_mount:l,on_destroy:a,after_update:u}=t.$$;s&&s.m(e,o),c||H((()=>{const e=l.map(n).filter(r);a?a.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(H)}function Q(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(O.push(t),A||(A=!0,S.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,r,c,s,a,u,f=[-1]){const d=l;j(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};u&&u(p.root);let h=!1;if(p.ctx=r?r(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),h&&R(e,t)),n})):[],p.update(),h=!0,i(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(y)}else p.fragment&&p.fragment.c();n.intro&&q(e.$$.fragment),Z(e,n.target,n.anchor,n.customElement),P()}j(d)}class X{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function tt(t){let e="";if("string"==typeof t||"number"==typeof t)e+=t;else if("object"==typeof t)if(Array.isArray(t))e=t.map(tt).filter(Boolean).join(" ");else for(let n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function et(...t){return t.map(tt).filter(Boolean).join(" ")}function nt(t){let n,o,i,r,c;const s=t[19].default,l=a(s,t,t[18],null),u=l||function(t){let e,n,o,i;const r=[rt,it],c=[];function s(t,e){return t[1]?0:1}return e=s(t),n=c[e]=r[e](t),{c(){n.c(),o=x()},m(t,n){c[e].m(t,n),g(t,o,n),i=!0},p(t,i){let l=e;e=s(t),e===l?c[e].p(t,i):(G(),J(c[l],1,1,(()=>{c[l]=null})),V(),n=c[e],n?n.p(t,i):(n=c[e]=r[e](t),n.c()),q(n,1),n.m(o.parentNode,o))},i(t){i||(q(n),i=!0)},o(t){J(n),i=!1},d(t){c[e].d(t),t&&y(o)}}}(t);let h=[t[9],{class:t[7]},{disabled:t[2]},{value:t[5]},{"aria-label":o=t[8]||t[6]},{style:t[4]}],m={};for(let t=0;t<h.length;t+=1)m=e(m,h[t]);return{c(){n=b("button"),u&&u.c(),E(n,m)},m(e,o){g(e,n,o),u&&u.m(n,null),n.autofocus&&n.focus(),t[23](n),i=!0,r||(c=_(n,"click",t[21]),r=!0)},p(t,e){l?l.p&&(!i||262144&e)&&d(l,s,t,t[18],i?f(s,t[18],e,null):p(t[18]),null):u&&u.p&&(!i||262146&e)&&u.p(t,i?e:-1),E(n,m=I(h,[512&e&&t[9],(!i||128&e)&&{class:t[7]},(!i||4&e)&&{disabled:t[2]},(!i||32&e)&&{value:t[5]},(!i||320&e&&o!==(o=t[8]||t[6]))&&{"aria-label":o},(!i||16&e)&&{style:t[4]}]))},i(t){i||(q(u,t),i=!0)},o(t){J(u,t),i=!1},d(e){e&&y(n),u&&u.d(e),t[23](null),r=!1,c()}}}function ot(t){let n,o,i,r,c,s,l;const a=[st,ct],u=[];function f(t,e){return t[1]?0:1}o=f(t),i=u[o]=a[o](t);let d=[t[9],{class:t[7]},{disabled:t[2]},{href:t[3]},{"aria-label":r=t[8]||t[6]},{style:t[4]}],p={};for(let t=0;t<d.length;t+=1)p=e(p,d[t]);return{c(){n=b("a"),i.c(),E(n,p)},m(e,i){g(e,n,i),u[o].m(n,null),t[22](n),c=!0,s||(l=_(n,"click",t[20]),s=!0)},p(t,e){let s=o;o=f(t),o===s?u[o].p(t,e):(G(),J(u[s],1,1,(()=>{u[s]=null})),V(),i=u[o],i?i.p(t,e):(i=u[o]=a[o](t),i.c()),q(i,1),i.m(n,null)),E(n,p=I(d,[512&e&&t[9],(!c||128&e)&&{class:t[7]},(!c||4&e)&&{disabled:t[2]},(!c||8&e)&&{href:t[3]},(!c||320&e&&r!==(r=t[8]||t[6]))&&{"aria-label":r},(!c||16&e)&&{style:t[4]}]))},i(t){c||(q(i),c=!0)},o(t){J(i),c=!1},d(e){e&&y(n),u[o].d(),t[22](null),s=!1,l()}}}function it(t){let e;const n=t[19].default,o=a(n,t,t[18],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,i){o&&o.p&&(!e||262144&i)&&d(o,n,t,t[18],e?f(n,t[18],i,null):p(t[18]),null)},i(t){e||(q(o,t),e=!0)},o(t){J(o,t),e=!1},d(t){o&&o.d(t)}}}function rt(e){let n;return{c(){n=w(e[1])},m(t,e){g(t,n,e)},p(t,e){2&e&&T(n,t[1])},i:t,o:t,d(t){t&&y(n)}}}function ct(t){let e;const n=t[19].default,o=a(n,t,t[18],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,i){o&&o.p&&(!e||262144&i)&&d(o,n,t,t[18],e?f(n,t[18],i,null):p(t[18]),null)},i(t){e||(q(o,t),e=!0)},o(t){J(o,t),e=!1},d(t){o&&o.d(t)}}}function st(e){let n;return{c(){n=w(e[1])},m(t,e){g(t,n,e)},p(t,e){2&e&&T(n,t[1])},i:t,o:t,d(t){t&&y(n)}}}function lt(t){let e,n,o,i;const r=[ot,nt],c=[];function s(t,e){return t[3]?0:1}return e=s(t),n=c[e]=r[e](t),{c(){n.c(),o=x()},m(t,n){c[e].m(t,n),g(t,o,n),i=!0},p(t,[i]){let l=e;e=s(t),e===l?c[e].p(t,i):(G(),J(c[l],1,1,(()=>{c[l]=null})),V(),n=c[e],n?n.p(t,i):(n=c[e]=r[e](t),n.c()),q(n,1),n.m(o.parentNode,o))},i(t){i||(q(n),i=!0)},o(t){J(n),i=!1},d(t){c[e].d(t),t&&y(o)}}}function at(t,n,o){let i,r,c;const s=["class","active","block","children","close","color","disabled","href","inner","outline","size","style","value","white"];let l=m(n,s),{$$slots:a={},$$scope:u}=n,{class:f=""}=n,{active:d=!1}=n,{block:p=!1}=n,{children:$}=n,{close:g=!1}=n,{color:y="secondary"}=n,{disabled:b=!1}=n,{href:w=""}=n,{inner:v}=n,{outline:x=!1}=n,{size:_=null}=n,{style:k=""}=n,{value:E=""}=n,{white:T=!1}=n;return t.$$set=t=>{o(24,n=e(e({},n),h(t))),o(9,l=m(n,s)),"class"in t&&o(10,f=t.class),"active"in t&&o(11,d=t.active),"block"in t&&o(12,p=t.block),"children"in t&&o(1,$=t.children),"close"in t&&o(13,g=t.close),"color"in t&&o(14,y=t.color),"disabled"in t&&o(2,b=t.disabled),"href"in t&&o(3,w=t.href),"inner"in t&&o(0,v=t.inner),"outline"in t&&o(15,x=t.outline),"size"in t&&o(16,_=t.size),"style"in t&&o(4,k=t.style),"value"in t&&o(5,E=t.value),"white"in t&&o(17,T=t.white),"$$scope"in t&&o(18,u=t.$$scope)},t.$$.update=()=>{o(8,i=n["aria-label"]),261120&t.$$.dirty&&o(7,r=et(f,g?"btn-close":"btn",g||`btn${x?"-outline":""}-${y}`,!!_&&`btn-${_}`,!!p&&"d-block w-100",{active:d,"btn-close-white":g&&T})),8192&t.$$.dirty&&o(6,c=g?"Close":null)},n=h(n),[v,$,b,w,k,E,c,r,i,l,f,d,p,g,y,x,_,T,u,a,function(e){L.call(this,t,e)},function(e){L.call(this,t,e)},function(t){C[t?"unshift":"push"]((()=>{v=t,o(0,v)}))},function(t){C[t?"unshift":"push"]((()=>{v=t,o(0,v)}))}]}class ut extends X{constructor(t){super(),W(this,t,at,lt,c,{class:10,active:11,block:12,children:1,close:13,color:14,disabled:2,href:3,inner:0,outline:15,size:16,style:4,value:5,white:17})}}function ft(t){let n,o,i;const r=t[7].default,c=a(r,t,t[6],null),s=c||function(t){let e;return{c(){e=w("Loading...")},m(t,n){g(t,e,n)},d(t){t&&y(e)}}}();let l=[t[1],{role:"status"},{class:t[0]}],u={};for(let t=0;t<l.length;t+=1)u=e(u,l[t]);return{c(){n=b("div"),o=b("span"),s&&s.c(),k(o,"class","visually-hidden"),E(n,u)},m(t,e){g(t,n,e),$(n,o),s&&s.m(o,null),i=!0},p(t,[e]){c&&c.p&&(!i||64&e)&&d(c,r,t,t[6],i?f(r,t[6],e,null):p(t[6]),null),E(n,u=I(l,[2&e&&t[1],{role:"status"},(!i||1&e)&&{class:t[0]}]))},i(t){i||(q(s,t),i=!0)},o(t){J(s,t),i=!1},d(t){t&&y(n),s&&s.d(t)}}}function dt(t,n,o){let i;const r=["class","type","size","color"];let c=m(n,r),{$$slots:s={},$$scope:l}=n,{class:a=""}=n,{type:u="border"}=n,{size:f=""}=n,{color:d=""}=n;return t.$$set=t=>{n=e(e({},n),h(t)),o(1,c=m(n,r)),"class"in t&&o(2,a=t.class),"type"in t&&o(3,u=t.type),"size"in t&&o(4,f=t.size),"color"in t&&o(5,d=t.color),"$$scope"in t&&o(6,l=t.$$scope)},t.$$.update=()=>{60&t.$$.dirty&&o(0,i=et(a,!!f&&`spinner-${u}-${f}`,`spinner-${u}`,!!d&&`text-${d}`))},[i,c,a,u,f,d,l,s]}class pt extends X{constructor(t){super(),W(this,t,dt,ft,c,{class:2,type:3,size:4,color:5})}}function ht(e){let n;return{c(){n=b("span")},m(t,e){g(t,n,e)},i:t,o:t,d(t){t&&y(n)}}}function mt(t){let e,n,o;return n=new pt({props:{size:"sm"}}),{c(){e=b("span"),Y(n.$$.fragment)},m(t,i){g(t,e,i),Z(n,e,null),o=!0},i(t){o||(q(n.$$.fragment,t),o=!0)},o(t){J(n.$$.fragment,t),o=!1},d(t){t&&y(e),Q(n)}}}function $t(t){let e,n,o,i,r,c;const s=[mt,ht],l=[];function a(t,e){return 1==t[3]?0:1}return o=a(t),i=l[o]=s[o](t),{c(){e=w(t[2]),n=v(),i.c(),r=x()},m(t,i){g(t,e,i),g(t,n,i),l[o].m(t,i),g(t,r,i),c=!0},p(t,n){(!c||4&n)&&T(e,t[2]);let u=o;o=a(t),o!==u&&(G(),J(l[u],1,1,(()=>{l[u]=null})),V(),i=l[o],i||(i=l[o]=s[o](t),i.c()),q(i,1),i.m(r.parentNode,r))},i(t){c||(q(i),c=!0)},o(t){J(i),c=!1},d(t){t&&y(e),t&&y(n),l[o].d(t),t&&y(r)}}}function gt(e){let n;return{c(){n=w("Update")},m(t,e){g(t,n,e)},i:t,o:t,d(t){t&&y(n)}}}function yt(t){let e,n,o;return n=new pt({props:{size:"sm"}}),{c(){e=w("Updating\n                "),Y(n.$$.fragment)},m(t,i){g(t,e,i),Z(n,t,i),o=!0},i(t){o||(q(n.$$.fragment,t),o=!0)},o(t){J(n.$$.fragment,t),o=!1},d(t){t&&y(e),Q(n,t)}}}function bt(t){let e,n,o,i;const r=[yt,gt],c=[];function s(t,e){return 1==t[5]?0:1}return e=s(t),n=c[e]=r[e](t),{c(){n.c(),o=x()},m(t,n){c[e].m(t,n),g(t,o,n),i=!0},p(t,i){let l=e;e=s(t),e!==l&&(G(),J(c[l],1,1,(()=>{c[l]=null})),V(),n=c[e],n||(n=c[e]=r[e](t),n.c()),q(n,1),n.m(o.parentNode,o))},i(t){i||(q(n),i=!0)},o(t){J(n),i=!1},d(t){c[e].d(t),t&&y(o)}}}function wt(t){let e,n,o,i,r,c,l,a,u,f,d,p,h,m,w,x,_,E,T,j;return h=new ut({props:{disabled:t[4],outline:t[1],color:t[0],$$slots:{default:[$t]},$$scope:{ctx:t}}}),h.$on("click",t[6]),w=new ut({props:{outline:!0,color:"primary",$$slots:{default:[bt]},$$scope:{ctx:t}}}),w.$on("click",t[7]),{c(){var t,$;e=b("script"),o=b("script"),o.textContent="window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'G-E2SEHVKFMC');\n    ",i=v(),r=b("link"),c=v(),l=b("main"),a=b("div"),u=b("div"),u.innerHTML='<p class="fs-1">Amar&#39;s light-weight demo</p> \n            <p>This is a demo of a couple services being run out of a Kubernetes homelab. \n                The stream itself is hosted on Twitch, while everything else you see, \n                including a python api server that responds to the button presses and communicates\n                over Z-wave to a smart outlet, the front end code for this website, and even  \n                the video connection to Twitch are all hosted on Kubernetes.</p> \n            <p><b>Try me:</b> Click on the Light On/Off button to toggle the state of the light.</p>',f=v(),d=b("p"),d.innerHTML="<i>Note: There&#39;s a stream delay of ~10 seconds, so it might be a bit before you see the light toggle on stream.\n            <br/>\n            You can also press the Update button to query the status of the light.</i>",p=v(),Y(h.$$.fragment),m=v(),Y(w.$$.fragment),x=v(),_=b("div"),_.innerHTML='<div class="iframe-container svelte-vxhz3i"><iframe class="responsive-iframe svelte-vxhz3i" src="https://player.twitch.tv/?channel=weeeee12345&amp;parent=light.acgandhi.com" frameborder="0" allowfullscreen="true" scrolling="no"></iframe></div>',E=v(),T=b("h5"),T.innerHTML='Check out <a href="https://homelab.acgandhi.com">my blog</a> for how I set this up!',e.async=!0,t=e.src,$=n="https://www.googletagmanager.com/gtag/js?id=G-E2SEHVKFMC",s||(s=document.createElement("a")),s.href=$,t!==s.href&&k(e,"src","https://www.googletagmanager.com/gtag/js?id=G-E2SEHVKFMC"),document.title="Light Demo",k(r,"rel","stylesheet"),k(r,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"),k(u,"class","text-start"),k(_,"class","text-center p-2"),k(a,"class","container text-start svelte-vxhz3i")},m(t,n){$(document.head,e),$(document.head,o),g(t,i,n),g(t,r,n),g(t,c,n),g(t,l,n),$(l,a),$(a,u),$(a,f),$(a,d),$(a,p),Z(h,a,null),$(a,m),Z(w,a,null),$(a,x),$(a,_),$(a,E),$(a,T),j=!0},p(t,[e]){const n={};16&e&&(n.disabled=t[4]),2&e&&(n.outline=t[1]),1&e&&(n.color=t[0]),8204&e&&(n.$$scope={dirty:e,ctx:t}),h.$set(n);const o={};8224&e&&(o.$$scope={dirty:e,ctx:t}),w.$set(o)},i(t){j||(q(h.$$.fragment,t),q(w.$$.fragment,t),j=!0)},o(t){J(h.$$.fragment,t),J(w.$$.fragment,t),j=!1},d(t){y(e),y(o),t&&y(i),t&&y(r),t&&y(c),t&&y(l),Q(h),Q(w)}}}const vt="https://liapi.acgandhi.com/light";function xt(t,e,n){let o=t=>t?"warning":"dark",i=t=>t?"Light On 💡":"Light Off",r=!1,c=o(r),s="",l=i(r),a=!1,u=!1;z((async function(){const t=await fetch(vt),e=await t.json();r=e.state,n(0,c=o(r)),n(1,s=""),n(2,l=i(r))}));let f=!1;return[c,s,l,a,u,f,async function(){n(3,a=!0),n(2,l="Toggling"),n(4,u=!0),r=!r,console.log(JSON.stringify({state:r})),await fetch(vt,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:String(r)})}),await new Promise((t=>setTimeout(t,1e3)));const t=await fetch(vt),e=await t.json();r=e.state,n(0,c=o(r)),n(1,s=""),n(2,l=i(r)),n(3,a=!1),n(4,u=!1)},async function(){n(5,f=!0);const t=await fetch(vt),e=await t.json();r=e.state,n(0,c=o(r)),n(1,s=""),n(2,l=i(r)),n(5,f=!1)}]}return new class extends X{constructor(t){super(),W(this,t,xt,wt,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
