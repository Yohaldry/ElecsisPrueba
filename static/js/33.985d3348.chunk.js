(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[33],{735:function(e,a,t){"use strict";t.r(a);var n=t(6),c=t(1),s=t.n(c),r=t(524),o=t(525),j=t(309),i=t(76),l=t(526),u=t(307),d=t(156),b=t(37),m=t(124),h=t(0),p=Object(b.a)(r.a)((function(e){e.theme;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),x=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}],O=function(){return Object(h.jsx)(m.a,{width:"100%",overflow:"auto",children:Object(h.jsxs)(p,{children:[Object(h.jsx)(o.a,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(i.a,{children:"Name"}),Object(h.jsx)(i.a,{children:"Company"}),Object(h.jsx)(i.a,{children:"Start Date"}),Object(h.jsx)(i.a,{children:"Status"}),Object(h.jsx)(i.a,{children:"Amount"}),Object(h.jsx)(i.a,{children:"Action"})]})}),Object(h.jsx)(l.a,{children:x.map((function(e,a){return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(i.a,{align:"left",children:e.name}),Object(h.jsx)(i.a,{align:"left",children:e.company}),Object(h.jsx)(i.a,{align:"left",children:e.date}),Object(h.jsx)(i.a,{children:e.status}),Object(h.jsxs)(i.a,{children:["$",e.amount]}),Object(h.jsx)(i.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(d.a,{color:"error",children:"close"})})})]},a)}))})]})})},y=t(10),g=t(718),f=Object(b.a)(r.a)((function(e){e.theme;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),T=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}],w=function(){var e=s.a.useState(5),a=Object(y.a)(e,2),t=a[0],n=a[1],c=s.a.useState(0),r=Object(y.a)(c,2),b=r[0],p=r[1];return Object(h.jsxs)(m.a,{width:"100%",overflow:"auto",children:[Object(h.jsxs)(f,{children:[Object(h.jsx)(o.a,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(i.a,{children:"Name"}),Object(h.jsx)(i.a,{children:"Company"}),Object(h.jsx)(i.a,{children:"Start Date"}),Object(h.jsx)(i.a,{children:"Status"}),Object(h.jsx)(i.a,{children:"Amount"}),Object(h.jsx)(i.a,{children:"Action"})]})}),Object(h.jsx)(l.a,{children:T.slice(b*t,b*t+t).map((function(e,a){return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(i.a,{align:"left",children:e.name}),Object(h.jsx)(i.a,{align:"left",children:e.company}),Object(h.jsx)(i.a,{align:"left",children:e.date}),Object(h.jsx)(i.a,{children:e.status}),Object(h.jsxs)(i.a,{children:["$",e.amount]}),Object(h.jsx)(i.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(d.a,{color:"error",children:"close"})})})]},a)}))})]}),Object(h.jsx)(g.a,{sx:{px:2},rowsPerPageOptions:[5,10,25],component:"div",count:T.length,rowsPerPage:t,page:b,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,a){p(a)},onRowsPerPageChange:function(e){n(+e.target.value),p(0)}})]})},L=t(31),D=Object(b.a)("div")((function(e){var a,t=e.theme;return a={margin:"30px"},Object(n.a)(a,t.breakpoints.down("sm"),{margin:"16px"}),Object(n.a)(a,"& .breadcrumb",Object(n.a)({marginBottom:"30px"},t.breakpoints.down("sm"),{marginBottom:"16px"})),a}));a.default=function(){return Object(h.jsxs)(D,{children:[Object(h.jsx)("div",{className:"breadcrumb",children:Object(h.jsx)(L.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Table"}]})}),Object(h.jsx)(L.n,{title:"Simple Table",children:Object(h.jsx)(O,{})}),Object(h.jsx)(m.a,{py:"12px"}),Object(h.jsx)(L.n,{title:"Pagination Table",children:Object(h.jsx)(w,{})})]})}}}]);
//# sourceMappingURL=33.985d3348.chunk.js.map