import{j as f,L as x}from"./LinkingTextarea-3995889d.js";import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const n=({textareaStyle:r,...u})=>{const[p,m]=l.useState("#f0f0f0");return l.useEffect(()=>{const t=a=>{const o=a.clientX/window.innerWidth,i=a.clientY/window.innerHeight,g=`rgb(${Math.floor(o*255)}, ${Math.floor(i*255)}, ${Math.floor((o+i)*100)})`;m(g)};return window.addEventListener("mousemove",t),()=>{window.removeEventListener("mousemove",t)}},[]),f(x,{...u,textareaStyle:{...r,backgroundColor:p}})};try{n.displayName="ColorChangingTextarea",n.__docgenInfo={description:"",displayName:"ColorChangingTextarea",props:{containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},textareaStyle:{defaultValue:null,description:"",name:"textareaStyle",required:!1,type:{name:"CSSProperties"}},textareaClassName:{defaultValue:null,description:"",name:"textareaClassName",required:!1,type:{name:"string"}},caretColor:{defaultValue:null,description:"",name:"caretColor",required:!1,type:{name:"CaretColor"}},linkTarget:{defaultValue:null,description:"",name:"linkTarget",required:!1,type:{name:"string"}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"Color"}}}}}catch{}const S={title:"Example/ColorChangingTextarea",component:n,parameters:{layout:"centered"}},e={args:{containerStyle:{width:"300px",height:"200px"},textareaStyle:{width:"100%",height:"100%",padding:"10px",borderRadius:"8px",border:"none",outline:"none",resize:"none",fontSize:"16px",transition:"background-color 0.3s ease"}}};var s,d,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    containerStyle: {
      width: "300px",
      height: "200px"
    },
    textareaStyle: {
      width: "100%",
      height: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      resize: "none",
      fontSize: "16px",
      transition: "background-color 0.3s ease"
    }
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const w=["classic"];export{w as __namedExportsOrder,e as classic,S as default};
