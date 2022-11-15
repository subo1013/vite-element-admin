import{k as B,e as H,E as I,h as J,A as Y,f as Z,p as $,l as L,B as N,G as A,y as T,n as tt,t as et,m as st}from"../@vue/@vue.5df607be.js";var nt=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let U;const R=t=>U=t,W=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function at(){const t=B(!0),n=t.run(()=>H({}));let s=[],e=[];const c=I({install(u){R(c),c._a=u,u.provide(W,c),u.config.globalProperties.$pinia=c,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!nt?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const q=()=>{};function V(t,n,s,e=q){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&J()&&T(c),c}function j(t,...n){t.slice().forEach(s=>{s(...n)})}function x(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];O(c)&&O(e)&&t.hasOwnProperty(s)&&!L(e)&&!N(e)?t[s]=x(c,e):t[s]=e}return t}const ot=Symbol();function ct(t){return!O(t)||!t.hasOwnProperty(ot)}const{assign:d}=Object;function rt(t){return!!(L(t)&&t.effect)}function ut(t,n,s,e){const{state:c,actions:u,getters:a}=n,f=s.state.value[t];let m;function h(){f||(s.state.value[t]=c?c():{});const b=et(s.state.value[t]);return d(b,u,Object.keys(a||{}).reduce((y,v)=>(y[v]=I(st(()=>{R(s);const _=s._s.get(t);return a[v].call(_,_)})),y),{}))}return m=z(t,h,n,s,e,!0),m.$reset=function(){const y=c?c():{};this.$patch(v=>{d(v,y)})},m}function z(t,n,s={},e,c,u){let a;const f=d({actions:{}},s),m={deep:!0};let h,b,y=I([]),v=I([]),_;const p=e.state.value[t];!u&&!p&&(e.state.value[t]={}),H({});let C;function F(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:k.patchFunction,storeId:t,events:_}):(x(e.state.value[t],r),o={type:k.patchObject,payload:r,storeId:t,events:_});const S=C=Symbol();tt().then(()=>{C===S&&(h=!0)}),b=!0,j(y,o,e.state.value[t])}const D=q;function G(){a.stop(),y=[],v=[],e._s.delete(t)}function K(r,o){return function(){R(e);const S=Array.from(arguments),g=[],w=[];function Q(i){g.push(i)}function X(i){w.push(i)}j(v,{args:S,name:r,store:l,after:Q,onError:X});let E;try{E=o.apply(this&&this.$id===t?this:l,S)}catch(i){throw j(w,i),i}return E instanceof Promise?E.then(i=>(j(g,i),i)).catch(i=>(j(w,i),Promise.reject(i))):(j(g,E),E)}}const M={_p:e,$id:t,$onAction:V.bind(null,v),$patch:F,$reset:D,$subscribe(r,o={}){const S=V(y,r,o.detached,()=>g()),g=a.run(()=>Z(()=>e.state.value[t],w=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:k.direct,events:_},w)},d({},m,o)));return S},$dispose:G},l=$(M);e._s.set(t,l);const P=e._e.run(()=>(a=B(),a.run(()=>n())));for(const r in P){const o=P[r];if(L(o)&&!rt(o)||N(o))u||(p&&ct(o)&&(L(o)?o.value=p[r]:x(o,p[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const S=K(r,o);P[r]=S,f.actions[r]=o}}return d(l,P),d(A(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{F(o=>{d(o,r)})}}),e._p.forEach(r=>{d(l,a.run(()=>r({store:l,app:e._a,pinia:e,options:f})))}),p&&u&&s.hydrate&&s.hydrate(l.$state,p),h=!0,b=!0,l}function it(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function a(f,m){const h=J();return f=f||h&&Y(W),f&&R(f),f=U,f._s.has(e)||(u?z(e,n,c,f):ut(e,c,f)),f._s.get(e)}return a.$id=e,a}export{at as c,it as d};