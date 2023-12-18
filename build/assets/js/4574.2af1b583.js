"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[4574],{4574:(t,e,n)=>{n.d(e,{JO:()=>Rt});var o=n(52983),i=n(59712);const r=/^[a-z0-9]+(-[a-z0-9]+)*$/,c=(t,e,n,o="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),r={provider:i.length>0?i[0]:o,prefix:n,name:t};return e&&!s(r)?null:r}const r=i[0],c=r.split("-");if(c.length>1){const t={provider:o,prefix:c.shift(),name:c.join("-")};return e&&!s(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:r};return e&&!s(t,n)?null:t}return null},s=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(r)||!(e&&""===t.prefix||t.prefix.match(r))||!t.name.match(r)),a=Object.freeze({left:0,top:0,width:16,height:16}),l=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),f=Object.freeze({...a,...l}),u=Object.freeze({...f,body:"",hidden:!1});function d(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in u)o in l?o in t&&!(o in n)&&(n[o]=l[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function p(t,e,n){const o=t.icons,i=t.aliases||Object.create(null);let r={};function c(t){r=d(o[t]||i[t],r)}return c(e),n.forEach(c),d(t,r)}function h(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||Object.create(null),i=Object.create(null);return(e||Object.keys(n).concat(Object.keys(o))).forEach((function t(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;const n=o[e]&&o[e].parent,r=n&&t(n);r&&(i[e]=[n].concat(r))}return i[e]})),i}(t);for(const i in o){const r=o[i];r&&(e(i,p(t,i,r)),n.push(i))}return n}const g={provider:"",aliases:{},not_found:{},...a};function m(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function b(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!m(t,g))return null;const n=e.icons;for(const i in n){const t=n[i];if(!i.match(r)||"string"!=typeof t.body||!m(t,u))return null}const o=e.aliases||Object.create(null);for(const i in o){const t=o[i],e=t.parent;if(!i.match(r)||"string"!=typeof e||!n[e]&&!o[e]||!m(t,u))return null}return e}const y=Object.create(null);function v(t,e){const n=y[t]||(y[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function x(t,e){return b(e)?h(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let w=!1;function k(t){return"boolean"==typeof t&&(w=t),w}function j(t){const e="string"==typeof t?c(t,!0,w):t;if(e){const t=v(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function _(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),w&&!e&&!t.prefix){let e=!1;return b(t)&&(t.prefix="",h(t,((t,n)=>{n&&function(t,e){const n=c(t,!0,w);return!!n&&function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(o){}return!1}(v(n.provider,n.prefix),n.name,e)}(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!s({provider:e,prefix:n,name:"a"}))return!1;return!!x(v(e,n),t)}const S=Object.freeze({width:null,height:null}),E=Object.freeze({...S,...l}),O=/(-?[0-9.]*[0-9]+[0-9.]*)/g,M=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function I(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(O);if(null===o||!o.length)return t;const i=[];let r=o.shift(),c=M.test(r);for(;;){if(c){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");c=!c}}const L=/\sid="(\S+)"/g,T="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let C=0;function F(t,e=T){const n=[];let o;for(;o=L.exec(t);)n.push(o[1]);if(!n.length)return t;const i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(C++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")})),t=t.replace(new RegExp(i,"g"),"")}const D=Object.create(null);function z(t,e){D[t]=e}function N(t){return D[t]||D[""]}function R(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const A=Object.create(null),P=["https://api.simplesvg.com","https://api.unisvg.com"],U=[];for(;P.length>0;)1===P.length||Math.random()>.5?U.push(P.shift()):U.push(P.pop());function $(t,e){const n=R(e);return null!==n&&(A[t]=n,!0)}function q(t){return A[t]}A[""]=R({resources:["https://api.iconify.design"].concat(U)});let H=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const J={prepare:(t,e,n)=>{const o=[],i=function(t,e){const n=q(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=e+".json?icons=";o=n.maxURL-t-n.path.length-i.length}else o=0;return o}(t,e),r="icons";let c={type:r,provider:t,prefix:e,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=i&&a>0&&(o.push(c),c={type:r,provider:t,prefix:e,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(t,e,n)=>{if(!H)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=q(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;H(t+o).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",i)}))})).catch((()=>{n("next",i)}))}};function Q(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let W=0;var B={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function X(t,e,n,o){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(r).concat(t.resources.slice(0,r));const s=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function b(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const o=c.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),t.timeout)):void b();const i={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const i="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(i)return a=o,void(d.length||(c.length?v():b()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(i,e,n)}};d.push(i),f++,u=setTimeout(v,t.rotate),n(o,e,i.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:s,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function G(t){const e={...B,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,r){const c=X(e,t,i,((t,e)=>{o(),r&&r(t,e)}));return n.push(c),c},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function K(){}const V=Object.create(null);function Y(t,e,n){let o,i;if("string"==typeof t){const e=N(t);if(!e)return n(void 0,424),K;i=e.send;const r=function(t){if(!V[t]){const e=q(t);if(!e)return;const n={config:e,redundancy:G(e)};V[t]=n}return V[t]}(t);r&&(o=r.redundancy)}else{const e=R(t);if(e){o=G(e);const n=N(t.resources?t.resources[0]:"");n&&(i=n.send)}}return o&&i?o.query(e,i,n)().abort:(n(void 0,424),K)}const Z="iconify2",tt="iconify",et=tt+"-count",nt=tt+"-version",ot=36e5,it=168;function rt(t,e){try{return t.getItem(e)}catch(n){}}function ct(t,e,n){try{return t.setItem(e,n),!0}catch(o){}}function st(t,e){try{t.removeItem(e)}catch(n){}}function at(t,e){return ct(t,et,e.toString())}function lt(t){return parseInt(rt(t,et))||0}const ft={local:!0,session:!0},ut={local:new Set,session:new Set};let dt=!1;let pt="undefined"==typeof window?{}:window;function ht(t){const e=t+"Storage";try{if(pt&&pt[e]&&"number"==typeof pt[e].length)return pt[e]}catch(n){}ft[t]=!1}function gt(t,e){const n=ht(t);if(!n)return;const o=rt(n,nt);if(o!==Z){if(o){const t=lt(n);for(let e=0;e<t;e++)st(n,tt+e.toString())}return ct(n,nt,Z),void at(n,0)}const i=Math.floor(Date.now()/ot)-it,r=t=>{const o=tt+t.toString(),r=rt(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(c){}st(n,o)}};let c=lt(n);for(let s=c-1;s>=0;s--)r(s)||(s===c-1?(c--,at(n,c)):ut[t].add(s))}function mt(){if(!dt){dt=!0;for(const t in ft)gt(t,(t=>{const e=t.data,n=v(t.provider,e.prefix);if(!x(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function bt(t,e){function n(n){let o;if(!ft[n]||!(o=ht(n)))return;const i=ut[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=lt(o),!at(o,r+1))return;const c={cached:Math.floor(Date.now()/ot),provider:t.provider,data:e};return ct(o,tt+r.toString(),JSON.stringify(c))}dt||mt(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in ft)gt(o,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function yt(){}function vt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,i=t.prefix;e.forEach((e=>{const r=e.icons,c=r.pending.length;r.pending=r.pending.filter((e=>{if(e.prefix!==i)return!0;const c=e.name;if(t.icons[c])r.loaded.push({provider:o,prefix:i,name:c});else{if(!t.missing.has(c))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:c})}return!1})),r.pending.length!==c&&(n||Q([t],e.id),e.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),e.abort))}))})))}(t)})))}const xt=(t,e)=>{const n=function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const i="string"==typeof t?c(t,e,n):t;i&&o.push(i)})),o}(t,!0,k()),o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const i=t.provider,r=t.prefix,c=t.name,s=n[i]||(n[i]=Object.create(null)),a=s[r]||(s[r]=v(i,r));let l;l=c in a.icons?e.loaded:""===r||a.missing.has(c)?e.missing:e.pending;const f={provider:i,prefix:r,name:c};l.push(f)})),e}(n);if(!o.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(o.loaded,o.missing,o.pending,yt)})),()=>{t=!1}}const r=Object.create(null),s=[];let a,l;return o.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===l&&e===a)return;a=e,l=n,s.push(v(e,n));const o=r[e]||(r[e]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,i=v(e,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(o)||(c.add(o),r[e][n].push(o))})),s.forEach((t=>{const{provider:e,prefix:n}=t;r[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let r;delete t.iconsToLoad,o&&(r=N(e))&&r.prepare(e,n,o).forEach((n=>{Y(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=x(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),bt(t,e)}catch(o){i.error(o)}vt(t)}))}))})))}(t,r[e][n])})),e?function(t,e,n){const o=W++,i=Q.bind(null,n,o);if(!e.pending.length)return i;const r={id:o,icons:e,callback:t,abort:i};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(r)})),i}(e,o,s):yt};const wt=/[\s,]+/;function kt(t,e){e.split(wt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function jt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?o(i):0)}}return e}let _t;function St(t){return void 0===_t&&function(){try{_t=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch(t){_t=null}}(),_t?_t.createHTML(t):t}const Et={...E,inline:!1},Ot={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Mt={display:"inline-block"},It={backgroundColor:"currentColor"},Lt={backgroundColor:"transparent"},Tt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ct={WebkitMask:It,mask:It,background:Lt};for(const Pt in Ct){const t=Ct[Pt];for(const e in Tt)t[Pt+e]=Tt[e]}const Ft={...Et,inline:!0};function Dt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const zt=(t,e,n,i)=>{const r=n?Ft:Et,c=function(t,e){const n={...t};for(const o in e){const t=e[o],i=typeof t;o in S?(null===t||t&&("string"===i||"number"===i))&&(n[o]=t):i===typeof n[o]&&(n[o]="rotate"===o?t%4:t)}return n}(r,e),s=e.mode||"svg",a={},l=e.style||{},u={..."svg"===s?Ot:{},ref:i};for(let o in e){const t=e[o];if(void 0!==t)switch(o){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":c[o]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&kt(c,t);break;case"color":a.color=t;break;case"rotate":"string"==typeof t?c[o]=jt(t):"number"==typeof t&&(c[o]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete u["aria-hidden"];break;default:void 0===r[o]&&(u[o]=t)}}const d=function(t,e){const n={...f,...t},o={...E,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let c,s=t.rotate;switch(n?o?s+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):o&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=i.height/2+i.top,e.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:c=i.width/2+i.left,e.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(i.left!==i.top&&(c=i.left,i.left=i.top,i.top=c),i.width!==i.height&&(c=i.width,i.width=i.height,i.height=c)),e.length&&(r='<g transform="'+e.join(" ")+'">'+r+"</g>")}));const c=o.width,s=o.height,a=i.width,l=i.height;let u,d;null===c?(d=null===s?"1em":"auto"===s?l:s,u=I(d,a/l)):(u="auto"===c?a:c,d=null===s?I(u,l/a):"auto"===s?l:s);const p={},h=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(p[t]=e.toString())};return h("width",u),h("height",d),p.viewBox=i.left.toString()+" "+i.top.toString()+" "+a.toString()+" "+l.toString(),{attributes:p,body:r}}(t,c),p=d.attributes;if(c.inline&&(a.verticalAlign="-0.125em"),"svg"===s){u.style={...a,...l},Object.assign(u,p);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),u.dangerouslySetInnerHTML={__html:St(F(d.body,n?()=>n+"ID"+t++:"iconifyReact"))},o.createElement("svg",u)}const{body:h,width:g,height:m}=t,b="mask"===s||"bg"!==s&&-1!==h.indexOf("currentColor"),y=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(h,{...p,width:g+"",height:m+""});var v;return u.style={...a,"--svg":(v=y,'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(t)}(v)+'")'),width:Dt(p.width),height:Dt(p.height),...Mt,...b?It:Lt,...l},o.createElement("span",u)};if(k(!0),z("",J),"undefined"!=typeof document&&"undefined"!=typeof window){mt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!_(t))&&i.error(n)}catch(e){i.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;$(t,o)||i.error(n)}catch(At){i.error(n)}}}}class Nt extends o.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const e=this.state,n=this.props.icon;if("object"==typeof n&&null!==n&&"string"==typeof n.body)return this._icon="",this._abortLoading(),void((t||null===e.icon)&&this._setData({data:n}));let o;if("string"!=typeof n||null===(o=c(n,!1,!0)))return this._abortLoading(),void this._setData(null);const i=j(o);if(i){if(this._icon!==n||null===e.icon){this._abortLoading(),this._icon=n;const t=["iconify"];""!==o.prefix&&t.push("iconify--"+o.prefix),""!==o.provider&&t.push("iconify--"+o.provider),this._setData({data:i,classes:t}),this.props.onLoad&&this.props.onLoad(n)}}else this._loading&&this._loading.name===n||(this._abortLoading(),this._icon="",this._setData(null),null!==i&&(this._loading={name:n,abort:xt([o],this._checkIcon.bind(this,!1))}))}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,e=this.state.icon;if(null===e)return t.children?t.children:o.createElement("span",{});let n=t;return e.classes&&(n={...t,className:("string"==typeof t.className?t.className+" ":"")+e.classes.join(" ")}),zt({...f,...e.data},n,t._inline,t._ref)}}const Rt=o.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!1};return o.createElement(Nt,n)}));o.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!0};return o.createElement(Nt,n)}))}}]);