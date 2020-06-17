(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(7),o=n.n(c),r=(n(13),n(5)),l=n(4),s=n(1);n(14);function u(e){return a.a.createElement("li",{className:"todo__item"},a.a.createElement("input",{type:"checkbox",name:"check",id:"",checked:!0,disabled:!0}),e.item.title)}function m(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),c=n[0],o=n[1],r=Object(i.useState)(e.item.isDone),l=Object(s.a)(r,2),u=l[0],m=l[1],d=Object(i.useState)(""),h=Object(s.a)(d,2),f=h[0],g=h[1],p=Object(i.useRef)();return a.a.createElement("li",{className:"todo__item"},a.a.createElement("input",{type:"checkbox",name:"check",id:"",checked:u,onChange:function(){m(!u),e.handleCheck(e.item,e.index)},disabled:!!e.isWorking}),c&&a.a.createElement("input",{type:"text",value:f,onChange:function(e){return g(e.target.value)},ref:p}),!c&&a.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.item.title.replace(/(0[0-9\s.-]{9})/g,'<a href="tel:$1">$1</a>')}}),a.a.createElement("div",{className:"action"},a.a.createElement("button",{onClick:function(){c?(o(!c),e.handleEdit(e.item,f,e.index)):(o(!c),g(e.item.title),e.setWorking(!0))},disabled:!(!e.isWorking||c)},c?"Xong":"S\u1eeda"),a.a.createElement("button",{onClick:function(){return e.handleDetele(e.item._id)},disabled:!!e.isWorking},"X\xf3a")," "))}var d=function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(),d=Object(s.a)(o,2),h=d[0],f=d[1],g=Object(i.useState)(!1),p=Object(s.a)(g,2),b=p[0],O=p[1],j=Object(i.useState)(""),E=Object(s.a)(j,2),y=E[0],k=E[1],_=Object(i.useState)(),v=Object(s.a)(_,2),S=v[0],x=v[1],D=Object(i.useState)(),C=Object(s.a)(D,2),N=C[0],T=C[1],w=Object(i.useState)(!1),W=Object(s.a)(w,2),A=W[0],J=W[1],P=Object(i.useRef)();Object(i.useEffect)((function(){fetch("/api/todo").then((function(e){return 200===e.status?e.json():e.text()})).then((function(e){return"string"===typeof e?T(e):c(e)})).catch((function(e){return console.log(e)})),fetch("/api/todo?done=true").then((function(e){return 200===e.status?e.json():e.text()})).then((function(e){return"string"===typeof e?T(e):f(e)})).catch((function(e){return console.log(e)}))}),[]);var B=function(e){J(!0),fetch("/api/todo",{method:"DELETE",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(t){200===t.status?c(n.filter((function(t){return t._id!==e}))):T(!0),J(!1)})).catch((function(e){console.log(e),J(!1)}))},X=function(e){J(!0),fetch("/api/todo",{method:"PUT",body:JSON.stringify({id:e._id,title:e.title,isDone:!e.isDone}),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(t){200===t.status?(c(n.filter((function(t){return t._id!==e._id}))),f([Object(r.a)(Object(r.a)({},e),{},{timeDone:Date.now()})].concat(Object(l.a)(h))),T(),J(!1)):(T("\xdai l\u1ed7i r\u1ed3i!"),J(!1))}))},$=function(e,t,i){fetch("/api/todo",{method:"PUT",body:JSON.stringify({id:e._id,title:t,isDone:e.isDone}),headers:{"Content-Type":"application/json"}}).then((function(e){if(200===e.status){var a=Object(l.a)(n);a[i].title=t,c(a),T(),J(!1)}else T("\xdai l\u1ed7i r\u1ed3i!"),J(!1)}))};return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"TODO App"),N&&a.a.createElement("p",{className:"error"},"\xdai, l\u1ed7i r\u1ed3i!"),a.a.createElement("form",{action:"",method:"POST",className:"todo__form",onSubmit:function(e){return function(e){e.preventDefault(),y.trim().length?(J(!0),fetch("/api/todo",{method:"POST",body:JSON.stringify({title:y}),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){return 200===e.status?e.json():e.text})).then((function(e){"string"!==typeof e?(c([{_id:e._id,time:e.time,title:e.title,isDone:e.isDone}].concat(Object(l.a)(n))),k(""),x(),T(),J(!1)):T(e)})).catch((function(e){console.log(e),J(!1)}))):x("Nh\u1eadp c\xf4ng vi\u1ec7c tr\u01b0\u1edbc b\u1ea1n ei!")}(e)}},a.a.createElement("input",{type:"text",name:"title",id:"",value:y,onChange:function(e){return k(e.target.value)},ref:P,placeholder:"C\xf4ng vi\u1ec7c h\xf4m nay c\u1ee7a b\u1ea1n l\xe0 g\xec?",disabled:!!A})),a.a.createElement("ul",{className:"todo__list"},n&&n.length>0&&n.sort((function(e,t){return t.time-e.time})).map((function(e,t){return a.a.createElement(m,{key:e._id,item:e,index:t,handleCheck:X,handleDetele:B,handleEdit:$,isWorking:A,setWorking:J})})),n&&0===n.length&&a.a.createElement("li",{style:{textAlign:"center"},onClick:function(){return P.current.focus()}},S||"Th\xeam m\u1ed9t c\xf4ng vi\u1ec7c \u0111\u1ec3 b\u1eaft \u0111\u1ea7u n\xe0o!"),!n&&a.a.createElement("li",{style:{textAlign:"center"}},"\u0110ang t\u1ea3i...")),a.a.createElement("ul",{className:"todo__list--done"},a.a.createElement("li",{onClick:function(){return O(!b)},style:{textAlign:"center",marginBottom:"20px"}},"Xem c\xe1c m\u1ee5c \u0111\xe3 ho\xe0n th\xe0nh"),b&&h.length>0&&h.sort((function(e,t){return t.timeDone-e.timeDone})).map((function(e){return[a.a.createElement(u,{key:e._id,item:e})]})),b&&0===h.length&&a.a.createElement("li",{style:{textAlign:"center",color:"#999999"}},"Ch\u01b0a ho\xe0n th\xe0nh c\xf4ng vi\u1ec7c n\xe0o!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4c7f07e3.chunk.js.map