import{a as o,j as n,L as m}from"./LinkingTextarea-3995889d.js";import{r as u}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const t=({...a})=>{const[e,d]=u.useState(!1),c=()=>{d(p=>!p)};return o("div",{children:[o("h3",{children:["mode : ",e?"edit":"viewer"]}),n(m,{...a,readOnly:!e}),n("button",{onClick:c,style:{backgroundColor:e?"gray":"#4CAF50",color:"white",width:100,height:40,border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"16px"},children:e?"Done":"Edit"})]})};try{t.displayName="MemoEditor",t.__docgenInfo={description:"",displayName:"MemoEditor",props:{containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},textareaStyle:{defaultValue:null,description:"",name:"textareaStyle",required:!1,type:{name:"CSSProperties"}},textareaClassName:{defaultValue:null,description:"",name:"textareaClassName",required:!1,type:{name:"string"}},caretColor:{defaultValue:null,description:"",name:"caretColor",required:!1,type:{name:"CaretColor"}},linkTarget:{defaultValue:null,description:"",name:"linkTarget",required:!1,type:{name:"string"}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"Color"}}}}}catch{}const y={title:"Example/MemoEditor",component:t,parameters:{layout:"centered"}},r={args:{textareaStyle:{width:"100%",minHeight:300,fontSize:"16px",border:"1px solid #ccc",borderRadius:"5px",padding:"10px",marginBottom:"10px"},fontColor:"#333"}};var i,l,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    textareaStyle: {
      width: "100%",
      minHeight: 300,
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px"
    },
    fontColor: "#333"
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const C=["classic"];export{C as __namedExportsOrder,r as classic,y as default};
