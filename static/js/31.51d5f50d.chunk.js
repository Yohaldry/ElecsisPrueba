(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[31],{717:function(e,n,t){"use strict";t.r(n);var a=t(6),c=t(1),i=t.n(c),s=t(31),o=t(10),r=t(61),l=t(518),j=t(583),b=t(307),d=t(609),h=t.n(d),O=t(0);function u(){var e=Object(r.a)(),n=i.a.useState(!1),t=Object(o.a)(n,2),a=t[0],c=t[1];function s(e,n){"clickaway"!==n&&c(!1)}return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{onClick:function(){c(!0)},children:"Open simple snackbar"}),Object(O.jsx)(j.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,autoHideDuration:6e3,onClose:s,ContentProps:{"aria-describedby":"message-id"},message:Object(O.jsx)("span",{id:"message-id",children:"Note archived"}),action:[Object(O.jsx)(l.a,{color:"secondary",size:"small",onClick:s,children:"UNDO"},"undo"),Object(O.jsx)(b.a,{"aria-label":"Close",color:"inherit",onClick:s,sx:{padding:e.spacing(.5)},children:Object(O.jsx)(h.a,{})},"close")]})]})}var x=t(37),p=t(84),m=t(709),g=t(721),v=Object(x.a)("div")((function(e){var n=e.theme;return{"& .success":{backgroundColor:p.a[600]},"& .error":{backgroundColor:n.palette.error.main},"& .info":{backgroundColor:n.palette.primary.main},"& .warning":{backgroundColor:m.a[700]},"& .icon":{fontSize:20},"& .iconVariant":{opacity:.9,marginRight:n.spacing(1)},"& .message":{display:"flex",alignItems:"center"},"& .margin":{margin:n.spacing(1)}}}));function k(){var e=i.a.useState(!1),n=Object(o.a)(e,2),t=n[0],a=n[1];function c(e,n){"clickaway"!==n&&a(!1)}return Object(O.jsxs)(v,{children:[Object(O.jsx)(l.a,{variant:"outlined",className:"margin",onClick:function(){a(!0)},children:"Open success snackbar"}),Object(O.jsx)(j.a,{open:t,autoHideDuration:6e3,onClose:c,children:Object(O.jsx)(g.a,{onClose:c,severity:"success",sx:{width:"100%"},variant:"filled",children:"This is a success message!"})}),Object(O.jsx)(g.a,{onClose:c,sx:{m:1},severity:"error",variant:"filled",children:"This is an error message!"}),Object(O.jsx)(g.a,{onClose:c,sx:{m:1},severity:"warning",variant:"filled",children:"This is a warning message!"}),Object(O.jsx)(g.a,{onClose:c,sx:{m:1},severity:"info",variant:"filled",children:"This is an information message!"}),Object(O.jsx)(g.a,{onClose:c,sx:{m:1},severity:"success",variant:"filled",children:"This is a success message!"})]})}var f=t(4);function C(){var e=i.a.useState({open:!1,vertical:"top",horizontal:"center"}),n=Object(o.a)(e,2),t=n[0],a=n[1],c=t.vertical,s=t.horizontal,r=t.open,b=function(e){return function(){a(Object(f.a)({open:!0},e))}};return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{onClick:b({vertical:"top",horizontal:"center"}),children:"Top-Center"}),Object(O.jsx)(l.a,{onClick:b({vertical:"top",horizontal:"right"}),children:"Top-Right"}),Object(O.jsx)(l.a,{onClick:b({vertical:"bottom",horizontal:"right"}),children:"Bottom-Right"}),Object(O.jsx)(l.a,{onClick:b({vertical:"bottom",horizontal:"center"}),children:"Bottom-Center"}),Object(O.jsx)(l.a,{onClick:b({vertical:"bottom",horizontal:"left"}),children:"Bottom-Left"}),Object(O.jsx)(l.a,{onClick:b({vertical:"top",horizontal:"left"}),children:"Top-Left"}),Object(O.jsx)(j.a,{anchorOrigin:{vertical:c,horizontal:s},open:r,onClose:function(){a(Object(f.a)(Object(f.a)({},t),{},{open:!1}))},ContentProps:{"aria-describedby":"message-id"},message:Object(O.jsx)("span",{id:"message-id",children:"I love snacks"})},"".concat(c,",").concat(s))]})}var y=t(584),w=Object(O.jsx)(l.a,{color:"secondary",size:"small",children:"lorem ipsum dolorem"}),I=Object(x.a)("div")((function(e){return{maxWidth:600,"& .snackbar":{margin:e.theme.spacing(1)}}}));function S(){return Object(O.jsxs)(I,{children:[Object(O.jsx)(y.a,{className:"snackbar",message:"I love snacks.",action:w}),Object(O.jsx)(y.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),Object(O.jsx)(y.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.",action:w}),Object(O.jsx)(y.a,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:w})]})}var T=t(205),z=t(206),N=t(605),B=t(606),D=Object(x.a)(b.a)((function(e){return{padding:e.theme.spacing(.5)}})),q=function(e){Object(N.a)(t,e);var n=Object(B.a)(t);function t(){var e;Object(T.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).queue=[],e.state={open:!1},e.handleClick=function(n){return function(){e.queue.push({message:n,key:(new Date).getTime()}),e.state.open?e.setState({open:!1}):e.processQueue()}},e.processQueue=function(){e.queue.length>0&&e.setState({messageInfo:e.queue.shift(),open:!0})},e.handleClose=function(n,t){"clickaway"!==t&&e.setState({open:!1})},e.handleExited=function(){e.processQueue()},e}return Object(z.a)(t,[{key:"render",value:function(){var e=this.state.messageInfo,n=void 0===e?{}:e;return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{onClick:this.handleClick("Message A"),children:"Show message A"}),Object(O.jsx)(l.a,{onClick:this.handleClick("Message B"),children:"Show message B"}),Object(O.jsx)(j.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,onExited:this.handleExited,ContentProps:{"aria-describedby":"message-id"},message:Object(O.jsx)("span",{id:"message-id",children:n.message}),action:[Object(O.jsx)(l.a,{color:"secondary",size:"small",onClick:this.handleClose,children:"UNDO"},"undo"),Object(O.jsx)(D,{"aria-label":"Close",color:"inherit",onClick:this.handleClose,children:Object(O.jsx)(h.a,{})},"close")]},n.key)]})}}]),t}(i.a.Component),P=q,A=t(573);function R(e){return Object(O.jsx)(A.a,Object(f.a)(Object(f.a)({},e),{},{direction:"left"}))}function E(e){return Object(O.jsx)(A.a,Object(f.a)(Object(f.a)({},e),{},{direction:"up"}))}function H(e){return Object(O.jsx)(A.a,Object(f.a)(Object(f.a)({},e),{},{direction:"right"}))}function L(e){return Object(O.jsx)(A.a,Object(f.a)(Object(f.a)({},e),{},{direction:"down"}))}var M=function(e){Object(N.a)(t,e);var n=Object(B.a)(t);function t(){var e;Object(T.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={open:!1},e.handleClick=function(n){return function(){e.setState({open:!0,Transition:n})}},e.handleClose=function(){e.setState({open:!1})},e}return Object(z.a)(t,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{onClick:this.handleClick(R),children:"Right"}),Object(O.jsx)(l.a,{onClick:this.handleClick(E),children:"Up"}),Object(O.jsx)(l.a,{onClick:this.handleClick(H),children:"Left"}),Object(O.jsx)(l.a,{onClick:this.handleClick(L),children:"Down"}),Object(O.jsx)(j.a,{open:this.state.open,onClose:this.handleClose,TransitionComponent:this.state.Transition,ContentProps:{"aria-describedby":"message-id"},message:Object(O.jsx)("span",{id:"message-id",children:"I love snacks"})})]})}}]),t}(i.a.Component),Q=M,U=t(670);function F(){var e,n=Object(U.b)().enqueueSnackbar;return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(l.a,{onClick:function(){n("I love snacks.")},children:"Show snackbar"}),Object(O.jsx)(l.a,{onClick:(e="warning",function(){n("This is a warning message!",{variant:e})}),children:"Show warning snackbar"})]})}function J(){return Object(O.jsx)(U.a,{maxSnack:3,children:Object(O.jsx)(F,{})})}var G=t(567),V=t(503);function W(e){return Object(O.jsx)(A.a,Object(f.a)(Object(f.a)({},e),{},{direction:"up"}))}function K(e){return Object(O.jsx)(G.a,Object(f.a)({},e))}function X(){var e=i.a.useState({open:!1,Transition:V.a}),n=Object(o.a)(e,2),t=n[0],a=n[1],c=function(e){return function(){a({open:!0,Transition:e})}};return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{onClick:c(K),children:"Grow Transition"}),Object(O.jsx)(l.a,{onClick:c(V.a),children:"Fade Transition"}),Object(O.jsx)(l.a,{onClick:c(W),children:"Slide Transition"}),Object(O.jsx)(j.a,{open:t.open,onClose:function(){a(Object(f.a)(Object(f.a)({},t),{},{open:!1}))},TransitionComponent:t.Transition,ContentProps:{"aria-describedby":"message-id"},message:Object(O.jsx)("span",{id:"message-id",children:"I love snacks"})})]})}var Y=t(124),Z=Object(x.a)("div")((function(e){var n,t=e.theme;return n={margin:"30px"},Object(a.a)(n,t.breakpoints.down("sm"),{margin:"16px"}),Object(a.a)(n,"& .breadcrumb",Object(a.a)({marginBottom:"30px"},t.breakpoints.down("sm"),{marginBottom:"16px"})),n}));n.default=function(){return Object(O.jsxs)(Z,{children:[Object(O.jsx)("div",{className:"breadcrumb",children:Object(O.jsx)(s.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Snackbar"}]})}),Object(O.jsx)(s.n,{title:"simple snackbar",children:Object(O.jsx)(u,{})}),Object(O.jsx)(Y.a,{py:"12px"}),Object(O.jsx)(s.n,{title:"customized snackbar",children:Object(O.jsx)(k,{})}),Object(O.jsx)(Y.a,{py:"12px"}),Object(O.jsx)(s.n,{title:"positioned snackbar",children:Object(O.jsx)(C,{})}),Object(O.jsx)(Y.a,{py:"12px"}),Object(O.jsx)(s.n,{title:"message length",children:Object(O.jsx)(S,{})}),Object(O.jsx)(Y.a,{py:"12px"}),Object(O.jsx)(s.n,{title:"transition",children:Object(O.jsx)(X,{})}),Object(O.jsx)(Y.a,{py:"12px"}),Object(O.jsx)(s.n,{title:"consecutive snackbar",children:Object(O.jsx)(P,{})}),Object(O.jsx)(Y.a,{py:"12px"}),Object(O.jsx)(s.n,{title:"Control Slide direction",children:Object(O.jsx)(Q,{})}),Object(O.jsx)(Y.a,{py:"12px"}),Object(O.jsx)(s.n,{title:"complementary project",children:Object(O.jsx)(J,{})})]})}}}]);
//# sourceMappingURL=31.51d5f50d.chunk.js.map