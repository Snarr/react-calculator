(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),o=c(4),s=c.n(o),a=(c(9),c(2)),j=(c(10),c(0));var b=function(){var t=Object(n.useState)(""),e=Object(a.a)(t,2),c=e[0],r=e[1],o=Object(n.useState)(""),s=Object(a.a)(o,2),b=s[0],u=s[1],i=Object(n.useState)(""),l=Object(a.a)(i,2),O=l[0],x=l[1],p=Object(n.useState)(!1),d=Object(a.a)(p,2),h=d[0],m=d[1];function N(t){var e=t.buttonNum;return Object(j.jsx)("button",{onClick:function(){return h?u(b+e):r(c+e)},children:e})}function f(t){var e=t.operator;return Object(j.jsx)("button",{className:"operators",onClick:function(){m(!0),x(e)},children:e})}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("p",{children:h?b:c}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"operators",onClick:function(){return h?u(""):r("")},children:"CLS"}),Object(j.jsx)("button",{className:"operators",onClick:function(){return h?b.startsWith("-")?u(b.replace("-","")):u("-".concat(b)):c.startsWith("-")?r(c.replace("-","")):r("-".concat(c))},children:"\xb1"}),Object(j.jsx)("button",{className:"operators",onClick:function(){return h?b.includes(".")?null:u(b+"."):c.includes(".")?null:r(c+".")},children:"."}),Object(j.jsx)("button",{className:"operators",children:"\xa0"}),Object(j.jsx)("br",{}),Object(j.jsx)(N,{buttonNum:"9"}),Object(j.jsx)(N,{buttonNum:"8"}),Object(j.jsx)(N,{buttonNum:"7"}),Object(j.jsx)(f,{operator:"+"}),Object(j.jsx)("br",{}),Object(j.jsx)(N,{buttonNum:"6"}),Object(j.jsx)(N,{buttonNum:"5"}),Object(j.jsx)(N,{buttonNum:"4"}),Object(j.jsx)(f,{operator:"-"}),Object(j.jsx)("br",{}),Object(j.jsx)(N,{buttonNum:"3"}),Object(j.jsx)(N,{buttonNum:"2"}),Object(j.jsx)(N,{buttonNum:"1"}),Object(j.jsx)(f,{operator:"*"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{children:"\xa0"}),Object(j.jsx)("button",{id:"equals",onClick:function(){m(!1);var t=0;switch(O){case"+":t=(parseFloat(c)+parseFloat(b)).toString();break;case"-":t=(parseFloat(c)-parseFloat(b)).toString();break;case"*":t=(parseFloat(c)*parseFloat(b)).toString();break;case"/":t=(parseFloat(c)/parseFloat(b)).toString()}isNaN(t)&&(t="0"),r(t),u("")},children:"="}),Object(j.jsx)(N,{buttonNum:"0"}),Object(j.jsx)(f,{operator:"/"})]})},u=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,s=e.getTTFB;c(t),n(t),r(t),o(t),s(t)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),u()},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.1837965a.chunk.js.map