(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[18],{595:function(e,t,a){"use strict";var n=a(10),c=a(5),o=a(2),r=a(1),i=a(8),l=a(104),s=a(9),d=a(7),b=a(125),u=a(45),m=a(576),j=a(63),p=a(75);function h(e){return Object(j.a)("PrivateSwitchBase",e)}Object(p.a)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var O=a(0),f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],v=Object(d.a)(m.a,{skipSx:!0})((function(e){var t=e.ownerState;return Object(o.a)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),x=Object(d.a)("input",{skipSx:!0})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),g=r.forwardRef((function(e,t){var a=e.autoFocus,r=e.checked,d=e.checkedIcon,m=e.className,j=e.defaultChecked,p=e.disabled,g=e.disableFocusRipple,k=void 0!==g&&g,y=e.edge,w=void 0!==y&&y,C=e.icon,P=e.id,S=e.inputProps,R=e.inputRef,z=e.name,F=e.onBlur,I=e.onChange,B=e.onFocus,M=e.readOnly,L=e.required,q=e.tabIndex,N=e.type,T=e.value,E=Object(c.a)(e,f),V=Object(b.a)({controlled:r,default:Boolean(j),name:"SwitchBase",state:"checked"}),H=Object(n.a)(V,2),D=H[0],A=H[1],J=Object(u.a)(),W=p;J&&"undefined"===typeof W&&(W=J.disabled);var U="checkbox"===N||"radio"===N,_=Object(o.a)({},e,{checked:D,disabled:W,disableFocusRipple:k,edge:w}),G=function(e){var t=e.classes,a=e.checked,n=e.disabled,c=e.edge,o={root:["root",a&&"checked",n&&"disabled",c&&"edge".concat(Object(s.a)(c))],input:["input"]};return Object(l.a)(o,h,t)}(_);return Object(O.jsxs)(v,Object(o.a)({component:"span",className:Object(i.a)(G.root,m),centerRipple:!0,focusRipple:!k,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){B&&B(e),J&&J.onFocus&&J.onFocus(e)},onBlur:function(e){F&&F(e),J&&J.onBlur&&J.onBlur(e)},ownerState:_,ref:t},E,{children:[Object(O.jsx)(x,Object(o.a)({autoFocus:a,checked:r,defaultChecked:j,className:G.input,disabled:W,id:U&&P,name:z,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;A(t),I&&I(e,t)}},readOnly:M,ref:R,required:L,ownerState:_,tabIndex:q,type:N},"checkbox"===N&&void 0===T?{}:{value:T},S)),D?d:C]}))}));t.a=g},614:function(e,t,a){"use strict";var n=a(6),c=a(5),o=a(2),r=a(1),i=a(8),l=a(104),s=a(45),d=a(581),b=a(9),u=a(7),m=a(12),j=a(63),p=a(75);function h(e){return Object(j.a)("MuiFormControlLabel",e)}var O=Object(p.a)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]),f=a(0),v=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],x=Object(u.a)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(n.a)({},"& .".concat(O.label),t.label),t.root,t["labelPlacement".concat(Object(b.a)(a.labelPlacement))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)(Object(n.a)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(O.disabled),{cursor:"default"}),"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},Object(n.a)({},"& .".concat(O.label),Object(n.a)({},"&.".concat(O.disabled),{color:t.palette.text.disabled})))})),g=r.forwardRef((function(e,t){var a=Object(m.a)({props:e,name:"MuiFormControlLabel"}),n=a.className,u=a.componentsProps,j=void 0===u?{}:u,p=a.control,O=a.disabled,g=a.disableTypography,k=a.label,y=a.labelPlacement,w=void 0===y?"end":y,C=Object(c.a)(a,v),P=Object(s.a)(),S=O;"undefined"===typeof S&&"undefined"!==typeof p.props.disabled&&(S=p.props.disabled),"undefined"===typeof S&&P&&(S=P.disabled);var R={disabled:S};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof p.props[e]&&"undefined"!==typeof a[e]&&(R[e]=a[e])}));var z=Object(o.a)({},a,{disabled:S,label:k,labelPlacement:w}),F=function(e){var t=e.classes,a=e.disabled,n=e.labelPlacement,c={root:["root",a&&"disabled","labelPlacement".concat(Object(b.a)(n))],label:["label",a&&"disabled"]};return Object(l.a)(c,h,t)}(z);return Object(f.jsxs)(x,Object(o.a)({className:Object(i.a)(F.root,n),ownerState:z,ref:t},C,{children:[r.cloneElement(p,R),k.type===d.a||g?k:Object(f.jsx)(d.a,Object(o.a)({component:"span",className:F.label},j.typography,{children:k}))]}))}));t.a=g},627:function(e,t,a){"use strict";var n=a(6),c=a(5),o=a(2),r=a(1),i=a(104),l=a(498),s=a(595),d=a(86),b=a(0),u=Object(d.a)(Object(b.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(9),h=a(12),O=a(7),f=a(63),v=a(75);function x(e){return Object(f.a)("MuiCheckbox",e)}var g=Object(v.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=Object(O.a)(s.a,{shouldForwardProp:function(e){return Object(O.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat(Object(p.a)(a.color))]]}})((function(e){var t,a=e.theme,c=e.ownerState;return Object(o.a)({color:a.palette.text.secondary},!c.disableRipple&&{"&:hover":{backgroundColor:Object(l.a)("default"===c.color?a.palette.action.active:a.palette[c.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==c.color&&(t={},Object(n.a)(t,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:a.palette[c.color].main}),Object(n.a)(t,"&.".concat(g.disabled),{color:a.palette.action.disabled}),t))})),w=Object(b.jsx)(m,{}),C=Object(b.jsx)(u,{}),P=Object(b.jsx)(j,{}),S=r.forwardRef((function(e,t){var a,n,l=Object(h.a)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,d=void 0===s?w:s,u=l.color,m=void 0===u?"primary":u,j=l.icon,O=void 0===j?C:j,f=l.indeterminate,v=void 0!==f&&f,g=l.indeterminateIcon,S=void 0===g?P:g,R=l.inputProps,z=l.size,F=void 0===z?"medium":z,I=Object(c.a)(l,k),B=v?S:O,M=v?S:d,L=Object(o.a)({},l,{color:m,indeterminate:v,size:F}),q=function(e){var t=e.classes,a=e.indeterminate,n=e.color,c={root:["root",a&&"indeterminate","color".concat(Object(p.a)(n))]},r=Object(i.a)(c,x,t);return Object(o.a)({},t,r)}(L);return Object(b.jsx)(y,Object(o.a)({type:"checkbox",inputProps:Object(o.a)({"data-indeterminate":v},R),icon:r.cloneElement(B,{fontSize:null!=(a=B.props.fontSize)?a:F}),checkedIcon:r.cloneElement(M,{fontSize:null!=(n=M.props.fontSize)?n:F}),ownerState:L,ref:t},I,{classes:q}))}));t.a=S},713:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(4),o=a(10),r=a(204),i=a(1),l=a(37),s=a(124),d=a(22),b=a(26),u=a(308),m=a(579),j=a(614),p=a(627),h=a(518),O=a(611),f=a(0),v=Object(l.a)(s.a)((function(){return{display:"flex",alignItems:"center"}})),x=Object(l.a)(v)((function(){return{justifyContent:"center"}})),g=Object(l.a)(x)((function(){return{height:"100%",padding:"32px",background:"rgba(0, 0, 0, 0.01)"}})),k=Object(l.a)("img")((function(){return{width:"100%"}})),y=Object(l.a)(x)((function(){return{background:"#1A2038",minHeight:"100vh !important","& .card":{maxWidth:800,borderRadius:12,margin:"1rem"}}}));t.default=function(){var e=Object(d.f)(),t=Object(i.useState)({}),a=Object(o.a)(t,2),l=a[0],x=a[1],w=Object(r.a)().register,C=function(e){var t=e.target,a=t.name,o=t.value;x(Object(c.a)(Object(c.a)({},l),{},Object(n.a)({},a,o)))},P=l.username,S=l.email,R=l.password,z=l.agreement;return Object(f.jsx)(y,{children:Object(f.jsx)(u.a,{className:"card",children:Object(f.jsxs)(m.a,{container:!0,children:[Object(f.jsx)(m.a,{item:!0,lg:5,md:5,sm:5,xs:12,children:Object(f.jsx)(g,{children:Object(f.jsx)(k,{src:"/assets/images/illustrations/posting_photo.svg",alt:""})})}),Object(f.jsx)(m.a,{item:!0,lg:7,md:7,sm:7,xs:12,children:Object(f.jsx)(s.a,{p:4,height:"100%",children:Object(f.jsxs)(O.ValidatorForm,{onSubmit:function(t){try{w(l.email,l.username,l.password),e("/")}catch(a){console.log(a)}},children:[Object(f.jsx)(O.TextValidator,{sx:{mb:3,width:"100%"},variant:"outlined",size:"small",label:"Username",onChange:C,type:"text",name:"username",value:P||"",validators:["required"],errorMessages:["this field is required"]}),Object(f.jsx)(O.TextValidator,{sx:{mb:3,width:"100%"},variant:"outlined",size:"small",label:"Email",onChange:C,type:"email",name:"email",value:S||"",validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(f.jsx)(O.TextValidator,{sx:{mb:"16px",width:"100%"},label:"Password",variant:"outlined",size:"small",onChange:C,name:"password",type:"password",value:R||"",validators:["required"],errorMessages:["this field is required"]}),Object(f.jsx)(j.a,{sx:{mb:"16px"},name:"agreement",onChange:function(e){return C({target:{name:"agreement",value:e.target.checked}})},control:Object(f.jsx)(p.a,{size:"small",checked:z||!1}),label:"I have read and agree to the terms of service."}),Object(f.jsxs)(v,{children:[Object(f.jsx)(h.a,{type:"submit",color:"primary",variant:"contained",sx:{textTransform:"capitalize"},children:"Sign up"}),Object(f.jsx)(b.e,{sx:{mr:1,ml:"20px"},children:"or"}),Object(f.jsx)(h.a,{sx:{textTransform:"capitalize"},onClick:function(){return e("/session/signin")},children:"Sign in"})]})]})})})]})})})}}}]);
//# sourceMappingURL=18.7cd630d7.chunk.js.map