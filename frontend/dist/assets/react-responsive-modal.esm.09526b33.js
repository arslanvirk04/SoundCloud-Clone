import{R as x,r as u,Q as Oe,j as Z,c as m}from"./index.ed1e7a57.js";import{a as A}from"./index.aeda6e92.js";function Ee(e){if(Array.isArray(e)){for(var n=0,o=Array(e.length);n<e.length;n++)o[n]=e[n];return o}else return Array.from(e)}var P=!1;if(typeof window<"u"){var _={get passive(){P=!0}};window.addEventListener("testPassive",null,_),window.removeEventListener("testPassive",null,_)}var ee=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),v=[],R=!1,ne=-1,S=void 0,I=void 0,oe=function(n){return v.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(n))})},k=function(n){var o=n||window.event;return oe(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},Te=function(n){if(I===void 0){var o=!!n&&n.reserveScrollBarGap===!0,t=window.innerWidth-document.documentElement.clientWidth;o&&t>0&&(I=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}S===void 0&&(S=document.body.style.overflow,document.body.style.overflow="hidden")},xe=function(){I!==void 0&&(document.body.style.paddingRight=I,I=void 0),S!==void 0&&(document.body.style.overflow=S,S=void 0)},Re=function(n){return n?n.scrollHeight-n.scrollTop<=n.clientHeight:!1},ke=function(n,o){var t=n.targetTouches[0].clientY-ne;return oe(n.target)?!1:o&&o.scrollTop===0&&t>0||Re(o)&&t<0?k(n):(n.stopPropagation(),!0)},Ne=function(n,o){if(!n){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!v.some(function(r){return r.targetElement===n})){var t={targetElement:n,options:o||{}};v=[].concat(Ee(v),[t]),ee?(n.ontouchstart=function(r){r.targetTouches.length===1&&(ne=r.targetTouches[0].clientY)},n.ontouchmove=function(r){r.targetTouches.length===1&&ke(r,n)},R||(document.addEventListener("touchmove",k,P?{passive:!1}:void 0),R=!0)):Te(o)}},Be=function(n){if(!n){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}v=v.filter(function(o){return o.targetElement!==n}),ee?(n.ontouchstart=null,n.ontouchmove=null,R&&v.length===0&&(document.removeEventListener("touchmove",k,P?{passive:!1}:void 0),R=!1)):v.length||xe()};function De(e=null){let[n,o]=x.useState(e);const{current:t}=x.useRef({current:n});return Object.defineProperty(t,"current",{get:()=>n,set:r=>{Object.is(n,r)||(n=r,o(r))}}),t}function Me(e,n={isStateful:!0}){const o=De(null),t=u.exports.useRef(null),r=n.isStateful?o:t;return x.useEffect(()=>{!e||(typeof e=="function"?e(r.current):e.current=r.current)}),r}function N(){return N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},N.apply(this,arguments)}var Le=function(n){var o=n.classes,t=n.classNames,r=n.styles,l=n.id,a=n.closeIcon,y=n.onClick;return m("button",{id:l,className:A(o.closeButton,t?.closeButton),style:r?.closeButton,onClick:y,"data-testid":"close-button",children:a||m("svg",{className:t?.closeIcon,style:r?.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon",children:m("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})})})},T=typeof window<"u",te=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function Pe(e){return e.offsetParent===null||getComputedStyle(e).visibility==="hidden"}function $e(e,n){for(var o=0;o<e.length;o++)if(e[o].checked&&e[o].form===n)return e[o]}function Fe(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!0;var n=e.form||e.ownerDocument,o=n.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),t=$e(o,e.form);return t===e||t===void 0&&o[0]===e}function re(e){for(var n=document.activeElement,o=e.querySelectorAll(te.join(",")),t=[],r=0;r<o.length;r++){var l=o[r];(n===l||!l.disabled&&Ke(l)>-1&&!Pe(l)&&Fe(l))&&t.push(l)}return t}function je(e,n){if(!(!e||e.key!=="Tab")){if(!n||!n.contains)return process,!1;if(!n.contains(e.target))return!1;var o=re(n),t=o[0],r=o[o.length-1];return e.shiftKey&&e.target===t?(r.focus(),e.preventDefault(),!0):!e.shiftKey&&e.target===r?(t.focus(),e.preventDefault(),!0):!1}}function Ke(e){var n=parseInt(e.getAttribute("tabindex"),10);return isNaN(n)?He(e)?0:e.tabIndex:n}function He(e){return e.getAttribute("contentEditable")}var Ye=function(n){var o=n.container,t=n.initialFocusRef,r=u.exports.useRef();return u.exports.useEffect(function(){var l=function(b){o?.current&&je(b,o.current)};if(T&&document.addEventListener("keydown",l),T&&o?.current){var a=function(){te.findIndex(function(b){var w;return(w=document.activeElement)==null?void 0:w.matches(b)})!==-1&&(r.current=document.activeElement)};if(t)a(),requestAnimationFrame(function(){var c;(c=t.current)==null||c.focus()});else{var y=re(o.current);y[0]&&(a(),y[0].focus())}}return function(){if(T){var c;document.removeEventListener("keydown",l),(c=r.current)==null||c.focus()}}},[o,t]),null},p=[],L={add:function(n){p.push(n)},remove:function(n){p=p.filter(function(o){return o!==n})},isTopModal:function(n){return!!p.length&&p[p.length-1]===n}};function qe(e,n){u.exports.useEffect(function(){return n&&L.add(e),function(){L.remove(e)}},[n,e])}var Ge=function(n,o,t,r,l){var a=u.exports.useRef(null);u.exports.useEffect(function(){return o&&n.current&&r&&(a.current=n.current,Ne(n.current,{reserveScrollBarGap:l})),function(){a.current&&(Be(a.current),a.current=null)}},[o,t,n,r,l])},s={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},ze=x.forwardRef(function(e,n){var o,t,r,l,a=e.open,y=e.center,c=e.blockScroll,b=c===void 0?!0:c,w=e.closeOnEsc,ae=w===void 0?!0:w,$=e.closeOnOverlayClick,le=$===void 0?!0:$,B=e.container,F=e.showCloseIcon,ie=F===void 0?!0:F,ue=e.closeIconId,ce=e.closeIcon,j=e.focusTrapped,se=j===void 0?!0:j,K=e.initialFocusRef,de=K===void 0?void 0:K,H=e.animationDuration,Y=H===void 0?300:H,i=e.classNames,d=e.styles,q=e.role,fe=q===void 0?"dialog":q,ve=e.ariaDescribedby,me=e.ariaLabelledby,ye=e.containerId,he=e.modalId,D=e.onClose,G=e.onEscKeyDown,U=e.onOverlayClick,W=e.onAnimationEnd,pe=e.children,be=e.reserveScrollBarGap,z=Me(n),O=u.exports.useRef(null),h=u.exports.useRef(null),f=u.exports.useRef(null);f.current===null&&T&&(f.current=document.createElement("div"));var Q=u.exports.useState(!1),g=Q[0],J=Q[1];qe(O,a),Ge(O,a,g,b,be);var we=function(){f.current&&!B&&!document.body.contains(f.current)&&document.body.appendChild(f.current),document.addEventListener("keydown",V)},ge=function(){f.current&&!B&&document.body.contains(f.current)&&document.body.removeChild(f.current),document.removeEventListener("keydown",V)},V=function(E){E.keyCode!==27||!L.isTopModal(O)||(G?.(E),ae&&D())};u.exports.useEffect(function(){return function(){g&&ge()}},[g]),u.exports.useEffect(function(){a&&!g&&(J(!0),we())},[a]);var Ce=function(E){if(h.current===null&&(h.current=!0),!h.current){h.current=null;return}U?.(E),le&&D(),h.current=null},M=function(){h.current=!1},Ae=function(){a||J(!1),W?.()},X=B||f.current,Se=a?(o=i?.overlayAnimationIn)!=null?o:s.overlayAnimationIn:(t=i?.overlayAnimationOut)!=null?t:s.overlayAnimationOut,Ie=a?(r=i?.modalAnimationIn)!=null?r:s.modalAnimationIn:(l=i?.modalAnimationOut)!=null?l:s.modalAnimationOut;return g&&X?Oe.createPortal(Z("div",{className:A(s.root,i?.root),style:d?.root,"data-testid":"root",children:[m("div",{className:A(s.overlay,i?.overlay),"data-testid":"overlay","aria-hidden":!0,style:N({animation:Se+" "+Y+"ms"},d?.overlay)}),m("div",{ref:O,id:ye,className:A(s.modalContainer,y&&s.modalContainerCenter,i?.modalContainer),style:d?.modalContainer,"data-testid":"modal-container",onClick:Ce,children:Z("div",{ref:z,className:A(s.modal,i?.modal),style:N({animation:Ie+" "+Y+"ms"},d?.modal),onMouseDown:M,onMouseUp:M,onClick:M,onAnimationEnd:Ae,id:he,role:fe,"aria-modal":"true","aria-labelledby":me,"aria-describedby":ve,"data-testid":"modal",tabIndex:-1,children:[se&&m(Ye,{container:z,initialFocusRef:de}),pe,ie&&m(Le,{classes:s,classNames:i,styles:d,closeIcon:ce,onClick:D,id:ue})]})})]}),X):null});export{ze as M};
