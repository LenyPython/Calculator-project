(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(4),l=c.n(r),s=c(3),o=(c(9),c(10),c(0)),d=function(){return Object(o.jsxs)("div",{id:"changer",children:[Object(o.jsx)("p",{children:"theme"}),Object(o.jsx)("div",{className:"themes"})]})},a=function(){return Object(o.jsxs)("div",{id:"name-and-themes",children:[Object(o.jsx)("h1",{children:"calc"}),Object(o.jsx)(d,{})]})},u=(c(12),function(e){var t=e.calcMemo,c=t.value,n=t.prevValue;return Object(o.jsxs)("div",{id:"display",children:[Object(o.jsxs)("p",{className:"prevValue",children:[" ",n]}),Object(o.jsxs)("p",{className:"value",children:[" ",c]})]})}),j=(c(13),function(e){var t=e.calcMemo,c=t.value,n=t.setValue,i=t.prevValue,r=t.setPrevValue,l=function(e){var t=e.target.innerText.toString();if(!(c.length>9))if("0"===c||""===c)n("."===t?"0.":t);else{if("."===t&c.includes(t))return;n(c+t)}},s=function(e){var t=e.target.innerText.toString();if(""===i)return r(c+t),void n("");if(""===c||"-"===c)return"-"===t?void n("-"):(n(""),void r(i.slice(0,-1)+t));var l=d();r(l+t),n("")},d=function(){var e,t=parseFloat(i),n=parseFloat(c);if(!isNaN(t)&&!isNaN(n)){switch(i[i.length-1]){case"+":e=t+n;break;case"-":e=t-n;break;case"x":e=t*n;break;case"/":e=t/n;break;default:return}return e.toString().slice(0,10)}};return Object(o.jsxs)("div",{id:"keys",children:[Object(o.jsx)("button",{id:"one",onClick:l,children:"1"}),Object(o.jsx)("button",{id:"two",onClick:l,children:"2"}),Object(o.jsx)("button",{id:"three",onClick:l,children:"3"}),Object(o.jsx)("button",{id:"four",onClick:l,children:"4"}),Object(o.jsx)("button",{id:"five",onClick:l,children:"5"}),Object(o.jsx)("button",{id:"six",onClick:l,children:"6"}),Object(o.jsx)("button",{id:"seven",onClick:l,children:"7"}),Object(o.jsx)("button",{id:"eight",onClick:l,children:"8"}),Object(o.jsx)("button",{id:"nine",onClick:l,children:"9"}),Object(o.jsx)("button",{id:"zero",onClick:l,children:"0"}),Object(o.jsx)("button",{id:"decimal",onClick:l,children:"."}),Object(o.jsx)("button",{id:"add",onClick:s,children:"+"}),Object(o.jsx)("button",{id:"subtract",onClick:s,children:"-"}),Object(o.jsx)("button",{id:"multiply",onClick:s,children:"x"}),Object(o.jsx)("button",{id:"divide",onClick:s,children:"/"}),Object(o.jsx)("button",{id:"equals",onClick:function(){var e=d();void 0!==e&&(n(e),r(""))},children:"="}),Object(o.jsx)("button",{id:"clear",onClick:function(){n("0"),r("")},"data-reset":!0,children:"Reset"}),Object(o.jsx)("button",{id:"del",onClick:function(){n(c.slice(0,-1))},children:"Del"})]})});var b=function(){var e=h("0");return Object(n.useEffect)((function(){var e=document.createElement("script");return e.src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(a,{}),Object(o.jsx)(u,{calcMemo:e}),Object(o.jsx)(j,{calcMemo:e})]})},h=function(e){var t=Object(n.useState)(e),c=Object(s.a)(t,2),i=c[0],r=c[1],l=Object(n.useState)(""),o=Object(s.a)(l,2);return{value:i,setValue:r,prevValue:o[0],setPrevValue:o[1]}};l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.75c41bdb.chunk.js.map