(this["webpackJsonpcurrency-convertor"]=this["webpackJsonpcurrency-convertor"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),o=(n(21),n(2)),u=(n(9),n.p+"static/media/double-arrow.271a6417.png"),l=(n(22),n(0));function i(e){var t=e.Codenames,n=e.defaultoption,a=e.onchangecurrency,c=e.onChangeAmount,r=e.amount,s=e.Flag,o=e.t;return Object(l.jsx)(l.Fragment,{children:"N"===s?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"m-5 ",children:[Object(l.jsx)("select",{className:" dropdown m-2",value:n,onChange:a,children:Object.keys(t).map((function(e,n){return Object(l.jsx)("option",{value:e,children:t[e]},n)}))}),Object(l.jsx)("input",{type:"number",className:"inputfield m-2",value:r,onChange:c})]})}):Object(l.jsx)("input",{type:"number",className:"inputfield m-2",placeholder:o("Amount"),value:r,onChange:c})})}var j=function(e){var t,n,c=e.t,r=Object(a.useState)(!0),s=Object(o.a)(r,2),u=s[0],j=s[1],b=Object(a.useState)(1),m=Object(o.a)(b,2),d=m[0],h=m[1],O=Object(a.useState)(),g=Object(o.a)(O,2),x=g[0],v=g[1];return u?(t=d,n=d*x):(t=d/x,n=d),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("center",{children:[Object(l.jsx)("input",{type:"text",placeholder:c("Base"),className:"m-2 p-2"}),Object(l.jsx)("input",{type:"text",placeholder:c("Target"),className:"m-2 p-2"}),Object(l.jsx)("input",{type:"number",Required:!0,placeholder:c("Rate"),className:"m-2 p-2",value:x,onChange:function(e){return v(e.target.value)}})]}),Object(l.jsxs)("div",{id:"box1",children:[Object(l.jsx)(i,{amount:t,onChangeAmount:function(e){h(e.target.value),j(!0)},Flag:"Y",t:c}),Object(l.jsx)(i,{amount:n,onChangeAmount:function(e){h(e.target.value),j(!1)},Flag:"Y",t:c})]})]})};var b=function(e){var t,n,c=e.Bgcolor,r=e.t,s=Object(a.useState)([]),b=Object(o.a)(s,2),m=b[0],d=b[1],h=Object(a.useState)(),O=Object(o.a)(h,2),g=O[0],x=O[1],v=Object(a.useState)(),f=Object(o.a)(v,2),p=f[0],C=f[1],y=Object(a.useState)(),N=Object(o.a)(y,2),k=N[0],S=N[1],F=Object(a.useState)(1),T=Object(o.a)(F,2),B=T[0],G=T[1],R=Object(a.useState)(!0),w=Object(o.a)(R,2),A=w[0],E=w[1],z=Object(a.useState)("N"),I=Object(o.a)(z,2),M=I[0],P=I[1];return A?(n=B,t=B*k):(t=B,n=B/k),Object(a.useEffect)((function(){fetch("https://openexchangerates.org/api/currencies.json").then((function(e){return e.json()})).then((function(e){d(e),x("GBP"),C("INR")}))}),[]),Object(a.useEffect)((function(){null!=g&&null!=p&&(console.log(g),console.log(p),fetch("".concat("https://openexchangerates.org/api/latest.json?app_id=bf711ec61d894a28ba5e162cd73d5c10","&base=").concat(g,"&symbols=").concat(p)).then((function(e){return e.json()})).then((function(e){S(e.rates[p])})))}),[g,p]),Object(l.jsx)(l.Fragment,{children:"N"===M?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"box1",children:[Object(l.jsx)(i,{Codenames:m,defaultoption:g,onchangecurrency:function(e){return x(e.target.value)},amount:n,onChangeAmount:function(e){G(e.target.value),console.log(e.target.value),E(!0)},Flag:M}),Object(l.jsx)("img",{src:u,alt:"Arrow.mark",className:"image mt-5"}),Object(l.jsx)(i,{Codenames:m,defaultoption:p,onchangecurrency:function(e){return C(e.target.value)},amount:t,onChangeAmount:function(e){G(e.target.value),console.log("From"),console.log(e.target.value),E(!1)},Flag:M})]}),Object(l.jsxs)("div",{className:"row buttons",children:[Object(l.jsx)("input",{type:"button",className:"btn button m-4",style:{"background-color":c},value:r("RateCalculation"),onClick:function(){return P("Y")}}),Object(l.jsx)("input",{type:"button",className:"btn button m-4",style:{"background-color":c},value:r("ClearFields"),onClick:function(){return E(!0),G(1),x("GBP"),void C("INR")}})]})]}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"m-3",children:[Object(l.jsxs)("div",{id:"box2",children:[Object(l.jsxs)("h4",{className:"text-center m-4",children:[" ",r("CustomTitle")]}),Object(l.jsx)(j,{t:r})]}),Object(l.jsx)("div",{className:"row buttons",children:Object(l.jsx)("input",{type:"button",className:"btn button m-4",style:{"background-color":c},value:"Go Back",onClick:function(){return P("N")}})})]})})})},m=n(31);function d(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(o.a)(r,2),u=s[0],i=s[1],j=Object(m.a)(),d=j.t,h=j.i18n;return document.getElementById("body").style.fontFamily=u,Object(l.jsxs)("div",{className:"container app",style:{backgroundColor:n},children:[Object(l.jsx)("h1",{className:"text-center m-3 mt-5",children:d("Title")}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-8 m-3",id:"box",children:Object(l.jsx)(b,{Bgcolor:n,t:d})}),Object(l.jsx)("div",{className:"col-3 m-3",id:"smallbox",children:Object(l.jsxs)("center",{children:[Object(l.jsx)("h5",{className:"m-3",children:d("CustomStyle")}),Object(l.jsx)("div",{className:"outerdiv",children:[{hex:"#008080",name:"Teal"},{hex:"#898989",name:"Grey"},{hex:"#A71930",name:"Red"},{hex:"#6495ED",name:"Blue"}].map((function(e,t){return Object(l.jsx)("button",{value:e.hex,className:"innerdiv",onClick:function(){return c(e.hex)},style:{"background-color":e.hex}})}))}),Object(l.jsx)("div",{className:"fontbox row  m-3",children:[{name:"Verdana",value:"Verdana sans-serif"},{name:"Trebuchet",value:"'Trebuchet MS', sans-serif"},{name:"Garamond",value:"Garamond, serif"},{name:"cursive",value:"'Brush Script MT', cursive"}].map((function(e,t){return Object(l.jsx)("button",{className:" m-2",style:{fontFamily:e.value},onClick:function(){return i(e.value)},children:d(e.name)})}))}),Object(l.jsxs)("div",{className:" row outerdiv  m-3",children:[Object(l.jsx)("button",{onClick:function(){return h.changeLanguage("de")},className:"m-1",children:"German"}),Object(l.jsx)("button",{onClick:function(){return h.changeLanguage("en")},className:"m-1",children:"English"})]})]})})]})]})}var h=function(){return Object(l.jsx)(a.Suspense,{fallback:"loading",children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{})})})},O=n(30),g=n(7),x=n(5),v=n(16);g.a.use(v.a).use(x.e).init({resources:{en:{translation:{Title:"Currency Converter",CustomTitle:"Enter Custom Rate for conversions",CustomStyle:"Custom Styling",RateCalculation:"Custom Rate Calculations",ClearFields:"Clear Fields",Goback:"Go Back",Base:"Base Currency",Target:"Target Currency",Rate:"Conversion Rate",Amount:"Amount",verdana:"Verdana",Trebuchet:"Trebuchet",Garamond:"Garamond",cursive:"cursive"}},de:{translation:{Title:"W\xe4hrung Konverter",CustomTitle:"Benutzerdefinierten Preis f\xfcr Conversions eingeben",CustomStyle:"Benutzerdefiniertes Styling",RateCalculation:"Benutzerdefinierte Preisberechnungen",ClearFields:"Felder l\xf6schen",Goback:"Geh zur\xfcck",Base:"Hauptw\xe4hrung",Target:"Zielw\xe4hrung",Rate:"Wechselkurs",Amount:"Menge",verdana:"Verdana",Trebuchet:"Trebuchet",Garamond:"Garamond",cursive:"kursiv"}}}}),g.a.changeLanguage("en");var f=g.a;s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O.a,{i18n:f,children:Object(l.jsx)(h,{})})}),document.getElementById("root"))},9:function(e,t,n){}},[[29,1,2]]]);
//# sourceMappingURL=main.eee7d80f.chunk.js.map