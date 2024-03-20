/*! For license information please see components-progress-ProgressStep-stories.04d8ea31.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[829],{"./src/components/progress/ProgressStep.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressStep_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ProgressStep_ProgressStep(props){const{color="initial",direction="horizontal",position="start",lineDirection="horizontalline",labeldirection="down",label="labeldown",text="textdown",value,description}=props;return(0,jsx_runtime.jsxs)("div",{className:"".concat(direction," ").concat(position),children:[(0,jsx_runtime.jsxs)("div",{className:"".concat(labeldirection),children:[(0,jsx_runtime.jsx)("div",{className:"circle ".concat(color),children:value}),(0,jsx_runtime.jsx)("div",{className:"".concat(text),children:(0,jsx_runtime.jsxs)("div",{className:"".concat(label),children:["Step ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("span",{children:description})]})})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("hr",{className:"".concat(lineDirection)})}),(0,jsx_runtime.jsxs)("div",{className:"".concat(labeldirection),children:[(0,jsx_runtime.jsx)("div",{className:"circle ".concat(color),children:value}),(0,jsx_runtime.jsx)("div",{className:"".concat(text),children:(0,jsx_runtime.jsxs)("div",{className:"".concat(label),children:["Step ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("span",{children:description})]})})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("hr",{className:"".concat(lineDirection)})}),(0,jsx_runtime.jsxs)("div",{className:"".concat(labeldirection),children:[(0,jsx_runtime.jsx)("div",{className:"circle ".concat(color),children:value}),(0,jsx_runtime.jsx)("div",{className:"".concat(text),children:(0,jsx_runtime.jsxs)("div",{className:"".concat(label),children:["Step ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("span",{children:description})]})})]})]})}const progress_ProgressStep=ProgressStep_ProgressStep;ProgressStep_ProgressStep.__docgenInfo={description:"",methods:[],displayName:"ProgressStep"};const ProgressStep_stories={title:"components/Progress Step",component:progress_ProgressStep,argTypes:{onClick:{action:"clicked"},color:{control:{type:"select"},options:["initial","done","progress"]},position:{control:{type:"select"},options:["start","center","end"]}},parameters:{docs:{description:{component:"Step Progress to showcase progress"}}}},Horizontal={args:{directional:"horizontal",lineDirection:"horizontalline",labeldirection:"down",label:"labeldown",text:"textdown",description:"Horizontal",value:"1"}},Vertical={args:{direction:"vertical",lineDirection:"verticalline",labeldirection:"up",label:"labelup",text:"textup",description:"Vertical",value:"1"}};Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'{\n  args: {\n    directional: "horizontal",\n    lineDirection: "horizontalline",\n    labeldirection: "down",\n    label: "labeldown",\n    text: "textdown",\n    description: "Horizontal",\n    value: "1"\n  }\n}',...Horizontal.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:'{\n  args: {\n    direction: "vertical",\n    lineDirection: "verticalline",\n    labeldirection: "up",\n    label: "labelup",\n    text: "textup",\n    description: "Vertical",\n    value: "1"\n  }\n}',...Vertical.parameters?.docs?.source}}};const __namedExportsOrder=["Horizontal","Vertical"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);