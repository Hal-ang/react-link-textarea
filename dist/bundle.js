"use strict";var e=require("react/jsx-runtime"),t=require("react"),r=require("linkify-string");"function"==typeof SuppressedError&&SuppressedError;!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".link-textarea-container__mirror a:link {\n  color: #0000ee !important;\n}\n\n.link-textarea-container__mirror a:visited {\n  color: #551a8b !important;\n}\n\n.link-textarea-container__mirror a {\n  pointer-events: auto !important;\n  text-decoration: underline;\n}\n");const n=e=>e.endsWith("px")?parseInt(e.slice(0,-2),10):0,o=t.forwardRef(((o,i)=>{var{containerStyle:a={},textareaStyle:l={},containerClassName:c="",textareaClassName:s="",linkTarget:u="_blank",fontColor:d="black",caretColor:p="black"}=o,f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(o,["containerStyle","textareaStyle","containerClassName","textareaClassName","linkTarget","fontColor","caretColor"]);const g=t.useRef(null),m=t.useRef(null),{resizeObserver:v,applyStyleToMirroredRef:y,setLinkifyText:h,copyTextToMirroredRef:x}=((e,o)=>{const i=t=>{if(!(null==e?void 0:e.current))throw new Error("Textarea ref is not defined");const r=n(t.paddingLeft)+n(t.paddingRight),o=n(t.paddingTop)+n(t.paddingBottom),{clientWidth:i,clientHeight:a}=e.current;return{width:i-r+"px",height:a-o+"px"}};return{resizeObserver:t.useMemo((()=>new ResizeObserver((()=>{if(!o.current||!e.current)return;const{width:t,height:r}=i(getComputedStyle(e.current));o.current.style.width=t,o.current.style.height=r}))),[e,o,i]),applyStyleToMirroredRef:t.useCallback((t=>{if(!(null==o?void 0:o.current)||!(null==e?void 0:e.current))return;const r=getComputedStyle(e.current);["border","borderLeft","borderRight","borderTop","borderBottom","boxSizing","fontFamily","fontSize","fontWeight","letterSpacing","lineHeight","padding","paddingLeft","paddingRight","paddingTop","margin","marginLeft","marginRight","marginTop","marginBottom","paddingBottom","textDecoration","textIndent","textTransform","whiteSpace","wordSpacing","wordWrap","textAlign","borderRadius"].forEach((e=>{const t=e.split("-").map(((e,t)=>0===t?e:e.charAt(0).toUpperCase()+e.slice(1))).join("");o.current.style[t]=r[t]})),o.current.style.borderColor="transparent",(null==t?void 0:t.color)&&(o.current.style.color=t.color),(null==t?void 0:t.backgroundColor)&&(o.current.style.backgroundColor=t.backgroundColor)}),[o,e]),setLinkifyText:t=>{(null==o?void 0:o.current)&&e.current&&(o.current.innerHTML=r(e.current.value,{target:t}))},copyTextToMirroredRef:()=>{(null==e?void 0:e.current)&&(null==o?void 0:o.current)&&(o.current.textContent=e.current.value)}}})(g,m);return t.useEffect((()=>{x(),y(l),h(u)}),[l,x]),t.useEffect((()=>{if(null==g?void 0:g.current)return v.observe(g.current),()=>{v.disconnect()}}),[g,v]),t.useEffect((()=>{if(!(null==g?void 0:g.current)||!(null==m?void 0:m.current))return;const e=()=>{g.current&&m.current&&(m.current.scrollTop=g.current.scrollTop)},t=()=>{h(u)};return g.current.addEventListener("scroll",e),g.current.addEventListener("input",t),()=>{var r,n;null===(r=g.current)||void 0===r||r.removeEventListener("scroll",e),null===(n=g.current)||void 0===n||n.removeEventListener("input",t)}}),[g,m,u,h]),e.jsxs("div",{className:`link-textarea-container ${c}`,style:Object.assign(Object.assign({},a),{position:"relative"}),children:[e.jsx("textarea",Object.assign({ref:e=>{g.current=e,"function"==typeof i?i(e):i&&(i.current=e)},className:`link-textarea-container__textarea ${s}`,style:Object.assign(Object.assign({width:"100%",height:"100%",caretColor:p},l),{color:"transparent",position:"relative"})},f)),e.jsx("div",{ref:m,className:"link-textarea-container__mirror",style:{color:d,width:"100%",height:"100%",position:"absolute",top:0,left:0,right:0,userSelect:"none",overflow:"hidden",pointerEvents:"none"}})]})}));module.exports=o;
//# sourceMappingURL=bundle.js.map
