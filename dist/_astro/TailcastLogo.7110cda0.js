import{r as e}from"./index.f1bc5ebf.js";import{u as M,s as j,a as $,P as T,L as U}from"./motion.e3ea24f3.js";import{j as L}from"./jsx-runtime.109e40f8.js";function P(){const n=e.useRef(!1);return M(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function b(){const n=P(),[o,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(o+1)},[o]);return[e.useCallback(()=>j.postRender(r),[r]),o]}class A extends e.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:n,isPresent:o}){const t=e.useId(),r=e.useRef(null),m=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:f,height:a,top:u,left:h}=m.current;if(o||!r.current||!f||!a)return;r.current.dataset.motionPopId=t;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[o]),e.createElement(A,{isPresent:o,childRef:r,sizeRef:m},e.cloneElement(n,{ref:r}))}const y=({children:n,initial:o,isPresent:t,onExitComplete:r,custom:m,presenceAffectsLayout:f,mode:a})=>{const u=$(K),h=e.useId(),l=e.useMemo(()=>({id:h,initial:o,isPresent:t,custom:m,onExitComplete:i=>{u.set(i,!0);for(const c of u.values())if(!c)return;r&&r()},register:i=>(u.set(i,!1),()=>u.delete(i))}),f?void 0:[t]);return e.useMemo(()=>{u.forEach((i,c)=>u.set(c,!1))},[t]),e.useEffect(()=>{!t&&!u.size&&r&&r()},[t]),a==="popLayout"&&(n=e.createElement(B,{isPresent:t},n)),e.createElement(T.Provider,{value:l},n)};function K(){return new Map}function O(n){return e.useEffect(()=>()=>n(),[])}const x=n=>n.key||"";function S(n,o){n.forEach(t=>{const r=x(t);o.set(r,t)})}function G(n){const o=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&o.push(t)}),o}const N=({children:n,custom:o,initial:t=!0,onExitComplete:r,exitBeforeEnter:m,presenceAffectsLayout:f=!0,mode:a="sync"})=>{let[u]=b();const h=e.useContext(U).forceRender;h&&(u=h);const l=P(),i=G(n);let c=i;const d=new Set,E=e.useRef(c),R=e.useRef(new Map).current,C=e.useRef(!0);if(M(()=>{C.current=!1,S(i,R),E.current=c}),O(()=>{C.current=!0,R.clear(),d.clear()}),C.current)return e.createElement(e.Fragment,null,c.map(s=>e.createElement(y,{key:x(s),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:f,mode:a},s)));c=[...c];const g=E.current.map(x),w=i.map(x),I=g.length;for(let s=0;s<I;s++){const p=g[s];w.indexOf(p)===-1&&d.add(p)}return a==="wait"&&d.size&&(c=[]),d.forEach(s=>{if(w.indexOf(s)!==-1)return;const p=R.get(s);if(!p)return;const v=g.indexOf(s),z=()=>{R.delete(s),d.delete(s);const k=E.current.findIndex(F=>F.key===s);if(E.current.splice(k,1),!d.size){if(E.current=i,l.current===!1)return;u(),r&&r()}};c.splice(v,0,e.createElement(y,{key:x(p),isPresent:!1,onExitComplete:z,custom:o,presenceAffectsLayout:f,mode:a},p))}),c=c.map(s=>{const p=s.key;return d.has(p)?s:e.createElement(y,{key:x(s),isPresent:!0,presenceAffectsLayout:f,mode:a},s)}),e.createElement(e.Fragment,null,d.size?c:c.map(s=>e.cloneElement(s)))},V=()=>L.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-customPrimary",children:[L.jsx("path",{d:"M11.3709 9.59273L8.77816 7L1 14.7782L3.59272 17.3709L11.3709 9.59273Z"}),L.jsx("path",{d:"M15.2218 7L23 14.7782L20.424 17.3542L15.2218 12.152L10.0197 17.3542L7.44367 14.7782L15.2218 7Z"})]});export{N as A,V as T};
