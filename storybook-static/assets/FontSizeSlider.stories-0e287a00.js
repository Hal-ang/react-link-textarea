import{a as n,j as o,L as S}from"./LinkingTextarea-3995889d.js";import{r as x}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const i=t=>{const[r,m]=x.useState(14),h=g=>{m(Number(g.target.value))};return n("div",{children:[o(S,{...t,textareaStyle:{...t.textareaStyle,fontSize:r},children:"https://github.com/Hal-ang/react-link-textarea"}),n("div",{style:{marginTop:"10px"},children:[o("label",{htmlFor:"font-size-slider",children:"Font Size: "}),o("input",{type:"range",id:"font-size-slider",min:"10",max:"30",value:r,onChange:h}),n("span",{children:[r,"px"]})]})]})};try{i.displayName="FontSizeSlider",i.__docgenInfo={description:"",displayName:"FontSizeSlider",props:{containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},textareaStyle:{defaultValue:null,description:"",name:"textareaStyle",required:!1,type:{name:"CSSProperties"}},textareaClassName:{defaultValue:null,description:"",name:"textareaClassName",required:!1,type:{name:"string"}},caretColor:{defaultValue:null,description:"",name:"caretColor",required:!1,type:{name:"CaretColor"}},linkTarget:{defaultValue:null,description:"",name:"linkTarget",required:!1,type:{name:"string"}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"Color"}}}}}catch{}const C={title:"Example/FontSizeSlider",component:i,parameters:{layout:"centered"}},e={args:{containerStyle:{width:"100%",height:"100%"},textareaStyle:{width:300,height:200,padding:10,borderRadius:8,border:"none",outline:"none",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},caretColor:"black"}},a={args:{containerStyle:{width:"100%",height:"100%"},textareaStyle:{width:300,height:200,padding:10,borderRadius:8,outline:"none",border:"1px solid #000"},caretColor:"black"}};var l,s,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    containerStyle: {
      width: "100%",
      height: "100%"
    },
    textareaStyle: {
      width: 300,
      height: 200,
      padding: 10,
      borderRadius: 8,
      border: "none",
      outline: "none",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    },
    caretColor: "black"
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    containerStyle: {
      width: "100%",
      height: "100%"
    },
    textareaStyle: {
      width: 300,
      height: 200,
      padding: 10,
      borderRadius: 8,
      outline: "none",
      border: "1px solid #000"
    },
    caretColor: "black"
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const w=["shadow","classic"];export{w as __namedExportsOrder,a as classic,C as default,e as shadow};
