import{j as o,L as f}from"./LinkingTextarea-3995889d.js";import{r as m}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const r=({textareaStyle:n,...d})=>{const[p,c]=m.useState(""),u=t=>{c(t.target.value)};return o("div",{style:{position:"relative",width:"300px",height:"300px",perspective:"1000px"},children:o(f,{...d,textareaStyle:{...n,backgroundColor:(t=>{const a=t.length;return a<10?"#f0f0f0":a<20?"#d3f8d3":a<30?"#f9f6c8":"#ffcccc"})(p)},onChange:u})})};try{r.displayName="RotatingTextarea",r.__docgenInfo={description:"",displayName:"RotatingTextarea",props:{containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},textareaStyle:{defaultValue:null,description:"",name:"textareaStyle",required:!1,type:{name:"CSSProperties"}},textareaClassName:{defaultValue:null,description:"",name:"textareaClassName",required:!1,type:{name:"string"}},caretColor:{defaultValue:null,description:"",name:"caretColor",required:!1,type:{name:"CaretColor"}},linkTarget:{defaultValue:null,description:"",name:"linkTarget",required:!1,type:{name:"string"}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"Color"}}}}}catch{}const h={title:"Example/RotatingTextarea",component:r,parameters:{layout:"centered"}},e={args:{containerStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%) rotate(10deg) scale(1.2)",transition:"transform 0.3s ease-in-out",borderRadius:"8px"},textareaStyle:{width:"100%",height:"100%",padding:"10px",borderRadius:"8px",border:"none",outline:"none",resize:"none",fontSize:"16px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"}}};var s,i,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    containerStyle: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(10deg) scale(1.2)",
      transition: "transform 0.3s ease-in-out",
      borderRadius: "8px"
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
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    }
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const C=["classic"];export{C as __namedExportsOrder,e as classic,h as default};
