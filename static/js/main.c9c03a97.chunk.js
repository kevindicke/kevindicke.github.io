(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},22:function(e,t,a){e.exports=a(32)},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),i=a(18),l=a.n(i),c=(a(27),a(10)),s=a(5),m=a(9),p=a(7),d=a(19),u=a.n(d);a(12);var b={display:"none"},g={display:"block",color:"#FFF"},f={maxWidth:"1200px",margin:"14% auto",padding:"0 15px"},v={fontSize:0,marginBottom:"3vw",marginTop:"5vw"},h={fontSize:"2vw",width:"50%",display:"inline-block",verticalAlign:"middle",textAlign:"left",paddingBottom:0,color:"#FFF"},w={fontSize:"1vw",border:"0 solid #3f424c",width:"50%",marginBottom:0,height:"4vw",maxHeight:"55px",float:"none",clear:"both",boxSizing:"border-box",display:"inline-block",verticalAlign:"middle",letterSpacing:".6vw",lineHeight:"normal",borderRadius:0,background:"#FFF",color:"#ff69b4",fontFamily:"news-gothic-std ,sans-serif",textIndent:0,textTransform:"lowercase",padding:"0 2.6vw",outline:"none"},x=(n={background:"none #42476a",width:"100%",display:"block",margin:"20px 0",textAlign:"center",fontSize:"3vw"},Object(m.a)(n,"fontSize","3vw"),Object(m.a)(n,"padding","20px 0"),Object(m.a)(n,"cursor","pointer"),Object(m.a)(n,"color","#FFF"),n),y={width:"500px",height:"50px",borderRadius:"1px",borderColor:"#42476a",fontSize:"20px",fontWeight:500,color:"#FFF",backgroundColor:"#42476a",animation:"bounce infinite 4s",marginTop:"10px",cursor:"pointer"},E={display:"flex",flexDirection:"column",alignItems:"center"},F={position:"absolute",left:"75%",top:"-10px",borderWidth:"17px 15px 0",borderStyle:"solid",borderColor:"#42476a transparent",display:"block",width:0,transform:"rotateZ(180deg)"},k=function(){var e=Object(o.useState)(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),l=Object(p.a)(i,2),c=l[0],s=l[1],m=Object(o.useState)(""),d=Object(p.a)(m,2),k=(d[0],d[1]),S=Object(o.useState)(!1),j=Object(p.a)(S,2),O=j[0],C=j[1],z=Object(o.useState)("1920"),T=Object(p.a)(z,2),A=T[0],N=T[1],W=r.a.createRef(),B=r.a.createRef(),R=r.a.createRef(),D=r.a.createRef();function H(){var e=W.current.value,t=B.current.value;if(Number.isInteger(100*parseFloat(e/t)))var a=String(100*parseFloat(e/t));else(a=String(100*parseFloat(e/t)).split("."))[1]=a[1].substring(0,2),a=a.join(".");R.current.innerText=a+"vw",s(a+"vw"),n(!0)}function I(){k(c),u()(c),C(!0),setTimeout(function(){C(!1)},1e3)}return r.a.createElement("div",null,r.a.createElement("div",{style:f},r.a.createElement("div",{style:v},r.a.createElement("label",{style:h},"Enter Your Pixel Unit"),r.a.createElement("input",{style:w,ref:W,name:"pixel",autoFocus:!0,onChange:H,type:"number",min:"0",className:"m-pixel",placeholder:"enter your pixel unit"})),r.a.createElement("div",{style:v},r.a.createElement("label",{style:h},"Enter Your viewport width"),r.a.createElement("input",{style:w,ref:B,onChange:function(){var e=B.current.value;N(e),e>0&&H()},name:"vpwidth",type:"number",min:"0",className:"m-vpwidth",value:A})),r.a.createElement("div",{className:"output",ref:D,style:a?E:b,onClick:I},r.a.createElement("label",{id:"labelText",style:x,ref:R}),r.a.createElement("button",{style:y,onClick:I},"Click to copy to clipboard",r.a.createElement("span",{style:F})),r.a.createElement("h3",{id:"copied",style:O?g:b},"Copied"))))};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"http://giphygifs.s3.amazonaws.com/media/13HBDT4QSTpveU/giphy.gif",className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Kevin Dicke",r.a.createElement("br",null),"Master Web Developer")))};var j=function(){return S()},O=function(){return k()},C=function(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/convert"},"PX-VW")),r.a.createElement(s.a,{exact:!0,path:"/",component:j}),r.a.createElement(s.a,{path:"/convert",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("Contact me at k.dicke7@gmail.com"),l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.c9c03a97.chunk.js.map