(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{534:function(e,t,n){},610:function(e,t,n){},611:function(e,t,n){},612:function(e,t,n){},616:function(e,t,n){"use strict";n.r(t);n(335),n(347);var a=n(75),c=n.n(a),r=n(124),o=(n(534),n(44)),s=n(76),i=n(13),l=n(26),d=n(4),j=n(6),u=n(8),b=n(9),h=n(0),O=n(102),x=n(176),m=n(192),f=n(10),p=function(e){var t=e.border,n=e.className,a=void 0===n?"freebox":n,c=e.color,r=e.bgColor,o=e.len,s=e.x,l=e.y,d=e.height,j=e.align,u={width:o-.1+"%",left:s+"%",top:100-l-d+"%",height:d+"%",background:r};return void 0!==t&&(u=Object(i.a)({border:t+" solid "+c},u)),Object(f.jsx)("div",{className:a,align:j,style:u,children:e.children})},y=n(179),g=n.n(y),w=n(618),v=n(621),F=n(620),k=n(619),C=n(87),T=k.a.TextArea,N=function(e){var t=e.record;return e.actions.map((function(e){return Object(f.jsx)(C.a,{type:"link",onClick:function(n){n.stopPropagation(),console.log("To: Buddy, Subject: Link Clicked, calling window.external.callFromCoal() if exists, Parameters:",e,t),window.external.callFromCoal&&window.external.callFromCoal(e,t)},children:e.name},e.name)}))},S=function(e,t,n,a,c){return Object(f.jsxs)("div",{align:"left",className:"instruction",children:[Object(f.jsxs)("div",{className:"container1",children:[Object(f.jsxs)("div",{className:"right1",children:["data: ",Object(f.jsx)(T,{rows:10,onChange:c("data"),defaultValue:JSON.stringify(e)}),"columns: ",Object(f.jsx)(T,{rows:1,onChange:c("columns"),defaultValue:JSON.stringify(t)}),"actions: ",Object(f.jsx)(T,{rows:1,onChange:c("actions"),defaultValue:JSON.stringify(n)}),"meta: ",Object(f.jsx)(T,{rows:1,onChange:c("meta"),defaultValue:JSON.stringify(a)})]}),Object(f.jsxs)("div",{className:"left1",children:[Object(f.jsx)("h2",{children:"Readme"}),Object(f.jsx)("h4",{children:"1. Data are presented in three different ways: Table, 2D plot, 3D plot"}),Object(f.jsx)("h4",{children:"2. Change the dataset, all views are updated"}),Object(f.jsx)("h4",{children:"3. Click a record in table, the correspondent part will be highlighted"}),Object(f.jsx)("h2",{children:"How to update the data and view:"}),Object(f.jsx)("h4",{children:"1. Directly edit in TextAreas on the right side.For developers ONLY, playground for data format validation."}),Object(f.jsxs)("h4",{children:["2. Programmatically set the data using those pre-defined functions that binded on Object ",Object(f.jsx)("b",{children:"window.coal"}),", i.e.",Object(f.jsx)("b",{children:"window.coal.setData , window.coal.setColumns, window.coal.setActions, window.coal.setMeta"})]}),Object(f.jsx)("h4",{children:"To see how it works: open F12 console and type(you may change some values to see if the views changes.):"}),Object(f.jsxs)("i",{children:[" window.coal.setData(",JSON.stringify(e),")"]})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]})},D=function(e){var t=g.a.query(e,"$..coal");return t=t.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{key:R(e.id,t.id)})})),t},A=function(e){var t=e;return Array.isArray(e)||(t=[e]),t.map(D).flat()},R=function(e,t){return e+"-C"+t},L=function(e,t){var n=e.map((function(e,t){return Object(i.a)({dataIndex:e.title,key:e.title},e)})),a=n.find((function(e){return"\u6807\u7b7e"===e.title}));a&&(a.render=function(e){return Object(f.jsx)(f.Fragment,{children:e&&e.map((function(e){var t=e.length>5?"geekblue":"green";return Object(f.jsx)(v.a,{color:t,children:e.toUpperCase()},e)}))})});var c=n.find((function(e){return"\u64cd\u4f5c"===e.title}));return c&&(c.render=function(e,n){return Object(f.jsx)(F.b,{size:"small",children:Object(f.jsx)(N,{record:n,actions:t.filter((function(e){return"row"===e.type}))})})}),n},I=function(e,t,n,a,c){var r={selectedRowKeys:a,type:"radio"};return Object(f.jsx)(w.a,{columns:L(e,t),dataSource:A(n),scroll:{x:1500,y:300},size:"small",bordered:!0,rowSelection:r,pagination:!1,onRow:c})},K=function(e){var t=e.group,n=e.yardLen,a=e.yardLayers,c=e.selected,r=void 0!==c&&c,o=t.coal,s=t.ranges,l=o.id,d=r?"#333333":o.color,j=1/a*.95*100,u=s&&s.map(P(l,n,a));return Object(f.jsx)(f.Fragment,{children:u&&u.map((function(e){return Object(f.jsx)(p,Object(i.a)(Object(i.a)({},e),{},{height:j,bgColor:d,border:r?"4px":"2px"}))}))})};function P(e,t,n){return function(a,c){return{key:"C"+e+"-R"+c,len:(a.end-a.start)/t*100,x:(a.start+t/2)/t*100,y:a.level/n*100,level:a.level,x1:a.start,len1:a.end-a.start}}}var J=function(e){var t=e.data,n=e.selectedRowKeys,a=t.layers,c=t.groups,r=t.length,o=t.id,s=t.totalCurrent,i=1/a*.95*100;return Object(f.jsx)("div",{id:o,className:"relative",children:Object(f.jsxs)("div",{className:"yardPlot",children:[Object(f.jsxs)("div",{className:"totalCoal",children:[Object(f.jsx)("b",{className:"containerLabel",children:o}),Object(f.jsx)("br",{}),"\u5b58\u7164\u91cf:",s]}),Object(f.jsxs)("div",{className:"subPlot",children:[Object(f.jsx)("div",{className:"layerAxis",children:function(){for(var e=[],t=0;t<a;t++)e.push(Object(f.jsxs)(p,{len:100,x:0,y:t/a*100,height:i,color:"#fefefe",children:[t+1,"\u5c42"]},"layerAxis-"+t));return e}()}),Object(f.jsxs)("div",{className:"coalGroups",children:[function(){for(var e=[],t=0;t<=r;t+=20)e.push(Object(f.jsx)(p,{className:"scale",len:3,x:t/r*100,y:-15,height:15,color:"#cccccc",align:"left",children:t},"lengthAxis-"+t));return e}(),c.map((function(e){return Object(f.jsx)(K,{group:e,yardLen:r,yardLayers:a,selected:n&&n[0]===R(o,e.coal.id)},R(o,e.coal.id))}))]})]})]})})};Object(O.b)({OrbitControls:x.a});var _=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{style:{height:"300px",width:"1300px"},children:Object(f.jsx)(O.a,{resize:{polyfill:m.a},camera:{position:[0,80,180],fov:10},children:Object(h.createElement)(M,Object(i.a)(Object(i.a)({},e),{},{key:e.data.id}))})})})},M=function(e){var t=Object(O.c)(),n=t.camera,a=t.gl.domElement,c=e.data,r=e.selectedRowKeys,o=c.length,s=c.layers,i=c.groups,l=c.id,d=i.map((function(e){if(e.ranges){var t=r&&r[0]===R(l,e.coal.id);return e.ranges.map(P(e.coal.id,o,s)).map((function(n){var a=-50+n.x+n.len/2,c=3*n.level-5,r=n.len-.5;return Object(f.jsx)(V,{position:[a,c,0],mygeometry:[r,2.9,10],color:t?"#333333":e.coal.color},n.key)}))}return Object(f.jsx)(f.Fragment,{})}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("ambientLight",{}),Object(f.jsx)("pointLight",{position:[10,20,10]}),d,Object(f.jsx)("orbitControls",{args:[n,a]})]})};function V(e){return Object(f.jsxs)("mesh",Object(i.a)(Object(i.a)({},e),{},{children:[Object(f.jsx)("boxGeometry",{args:e.mygeometry||[2,1,1]}),Object(f.jsx)("meshStandardMaterial",{color:e.color})]}))}var z=function(e){var t=e.data,n=e.selectedRowKeys,a=t.id;return Object(f.jsx)("div",{className:"drawTank",children:t.groups.map((function(e){var c=100*e.thickness/t.tankheight,r=e.coal.color,o="black";return n&&n[0]===R(a,e.coal.id)&&(r="#333333",o="white"),Object(f.jsx)("div",{className:"tankLayer",style:{color:o,backgroundColor:r,height:c+"%"},children:e.thickness},R(a,e.coal.id))}))})},B=[{title:"\u7164\u79cd"},{title:"\u5b58\u7164\u91cf"},{title:"\u70ed\u503c"}],E=function(e){var t=e.data,n=(e.actions,e.selectedRowKeys);return Object(f.jsx)("div",{className:"tankTable",children:Object(f.jsx)(w.a,{columns:q(B),dataSource:W(t),scroll:{x:200,y:250},size:"small",bordered:!0,pagination:!1,rowSelection:{selectedRowKeys:n,type:"radio",columnWidth:0,renderCell:function(){return""}},summary:function(e){var t=0,n=0;return e.forEach((function(e){var a=e.\u5b58\u7164\u91cf,c=e.\u70ed\u503c;t+=parseFloat(a),n+=parseFloat(c)})),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(w.a.Summary,{fixed:!0,children:Object(f.jsxs)(w.a.Summary.Row,{children:[Object(f.jsx)(w.a.Summary.Cell,{}),Object(f.jsx)(w.a.Summary.Cell,{children:Object(f.jsx)("b",{children:"\u5408\u8ba1"})}),Object(f.jsx)(w.a.Summary.Cell,{children:Object(f.jsx)("b",{children:t})}),Object(f.jsx)(w.a.Summary.Cell,{children:Object(f.jsx)("b",{children:n})})]})})})}})})},G=function(e){var t=g.a.query(e,"$..coal");return t=t.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{key:R(e.id,t.id)})})),t},W=function(e){var t=e;return Array.isArray(e)||(t=[e]),t.map(G).flat()},q=function(e){return e.map((function(e,t){return Object(i.a)({dataIndex:e.title,key:e.title},e)}))},Y=(n(610),{showInstructions:!1,show2D:!0,show3D:!0,showTank:!0,showTable:!0}),$=[{name:"\u64cd\u4f5cA",type:"row"},{name:"\u64cd\u4f5cB",type:"row"},{name:"\u64cd\u4f5cC",type:"row"},{name:"\u64cd\u4f5c\u4e8c",type:"yard"},{name:"\u64cd\u4f5c\u4e09",type:"tank"},{name:"\u64cd\u4f5c\u56db",type:"global"}],H=[{title:"\u7164\u79cd"},{title:"\u8ba2\u5355\u53f7"},{title:"\u5806\u671f"},{title:"\u8239\u540d"},{title:"\u5b58\u7164\u91cf"},{title:"\u70ed\u503c"},{title:"\u6c34\u4efd"},{title:"\u6325\u53d1\u4efd"},{title:"\u7070\u4efd"},{title:"\u786b\u4efd"},{title:"T2"},{title:"\u72b6\u6001",width:120},{title:"\u64cd\u4f5c",width:250}],U={id:"\u7164\u58065",type:"yard",totalCurrent:9e4,length:361,layers:6,groups:[{coal:{id:1,color:"#00a0e9","\u7164\u79cd":"\u6709\u6570\u636e1\u53ef\u4ee5\u70b9\u51fb","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"},ranges:[{extended:!0,level:4,start:-160,end:-140},{extended:!0,level:5,start:-160,end:-140},{level:0,start:-160,end:140},{level:1,start:-160,end:-140},{level:2,start:-160,end:-140},{level:3,start:-160,end:-140}]},{coal:{id:2,color:"#FF00FF","\u7164\u79cd":"\u6709\u6570\u636e2\u53ef\u4ee5\u70b9\u51fb","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"},ranges:[{extended:!0,level:4,start:-140,end:-120},{extended:!0,level:5,start:-140,end:-120},{level:0,start:140,end:180},{level:1,start:-140,end:-120},{level:2,start:-140,end:-100},{level:3,start:-140,end:-100}]},{coal:{id:3,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:4,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:5,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:6,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:7,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:8,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:9,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:10,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:11,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:12,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:13,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}}]},Q=[U,Object(i.a)(Object(i.a)({},U),{},{id:"\u7164\u58066"})],X={id:"\u7164\u7f501",type:"tank",totalCurrent:"90000",totalOrigin:"100000",totalDelta:"10000",tankheight:"30",tankradius:"16",groups:[{thickness:"5",coal:{id:"56868",color:"#00a0e9","\u7164\u79cd":"\u7164\u7f50\u7164#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"40678","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"5225","\u589e\u51cf\u91cf":"-100"}},{thickness:"5",coal:{id:"57912",color:"#FF0000","\u7164\u79cd":"\u7164\u7f50\u71642","\u8ba2\u5355\u53f7":"57912","\u5806\u671f":"40717","\u8239\u540d":"\u65d7\u79655","\u5b58\u7164\u91cf":"6805","\u70ed\u503c":"4853","\u6c34\u4efd":"8.63","\u6325\u53d1\u4efd":"22.77","\u7070\u4efd":"27.68","\u786b\u4efd":"1.07",T2:"1330","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"6805","\u589e\u51cf\u91cf":"0","\u5907\u6ce8":"\u8fd9\u91cc\u662f\u5907\u6ce8",name:"\u9655\u7164123"}},{thickness:"5",coal:{id:"57913",color:"#00FF00","\u7164\u79cd":"\u7164\u7f50\u71643","\u8ba2\u5355\u53f7":"57912","\u5806\u671f":"40717","\u8239\u540d":"\u65d7\u79655","\u5b58\u7164\u91cf":"6805","\u70ed\u503c":"4853","\u6c34\u4efd":"8.63","\u6325\u53d1\u4efd":"22.77","\u7070\u4efd":"27.68","\u786b\u4efd":"1.07",T2:"1330","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"6805","\u589e\u51cf\u91cf":"0",name:"\u9655\u7164123"}},{thickness:"5",coal:{id:"57923",color:"#eeFF00","\u7164\u79cd":"\u7164\u7f50\u71643","\u8ba2\u5355\u53f7":"57912","\u5806\u671f":"40717","\u8239\u540d":"\u65d7\u79655","\u5b58\u7164\u91cf":"6805","\u70ed\u503c":"4853","\u6c34\u4efd":"8.63","\u6325\u53d1\u4efd":"22.77","\u7070\u4efd":"27.68","\u786b\u4efd":"1.07",T2:"1330","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"6805","\u589e\u51cf\u91cf":"0",name:"\u9655\u7164123"}},{thickness:"10",coal:{id:"57924",color:"#00FFee","\u7164\u79cd":"\u7164\u7f50\u71643","\u8ba2\u5355\u53f7":"57912","\u5806\u671f":"40717","\u8239\u540d":"\u65d7\u79655","\u5b58\u7164\u91cf":"6805","\u70ed\u503c":"4853","\u6c34\u4efd":"8.63","\u6325\u53d1\u4efd":"22.77","\u7070\u4efd":"27.68","\u786b\u4efd":"1.07",T2:"1330","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"6805","\u589e\u51cf\u91cf":"0",name:"\u9655\u7164123"}}]},Z=[X,Object(i.a)(Object(i.a)({},X),{},{id:"\u7164\u7f502"})],ee=[].concat(Q,Z),te=["inputData"],ne="yard",ae=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:ee,columns:H,actions:$,meta:Y,selectedRowKeys:[]},e._setData=function(t){return function(n){console.log("Set",t,n),e.setState(Object(l.a)({},t,n))}},e._setStateField=function(t){return function(n){try{var a=JSON.parse(n.target.value);e.setState(Object(l.a)({},t,a))}catch(n){console.log("Inpput is not correct",n)}}},e.handleOnRow=function(t,n){return{onClick:function(n){e.setState({selectedRowKeys:[t.key]})}}},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.coal={},window.coal.setData=this._setData("data"),window.coal.setColumns=this._setData("columns"),window.coal.setActions=this._setData("actions"),window.coal.setMeta=this._setData("meta"),window.coal.showInstructions=function(){return window.coal.setMeta(Object(i.a)(Object(i.a)({},e.state.meta),{},{showInstructions:!e.state.meta.showInstructions}))},console.log("To: Buddy, Subject: Windows.coal functions registered successfully",window.coal)}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.columns,a=e.actions,c=e.selectedRowKeys,r=e.meta;return Object(f.jsxs)(f.Fragment,{children:[r.showTable&&I(n,a,t,c,this.handleOnRow),Object(f.jsx)("br",{}),r.show2D&&Object(f.jsx)(re,{inputData:t,selectedRowKeys:c}),r.show3D&&Object(f.jsx)(oe,{inputData:t,selectedRowKeys:c}),r.showTank&&Object(f.jsx)(se,{inputData:t,actions:a,selectedRowKeys:c}),r.showInstructions&&S(t,n,a,r,this._setStateField)]})}}]),n}(h.Component),ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ne;return function(n){var a=n.inputData,c=Object(s.a)(n,te);return Array.isArray(a)||(a=[a]),a.filter((function(e){return e.type===t})).map((function(t){return Object(f.jsx)(e,Object(i.a)({data:t},c),t.id)}))}},re=ce(J,ne),oe=ce(_,ne),se=ce((function(e){var t=e.data;return Object(f.jsxs)("div",{className:"tankPlot",children:[Object(f.jsx)("b",{className:"containerLabel",children:t.id}),Object(f.jsxs)("div",{children:[Object(f.jsx)(z,Object(i.a)({},e),"DrawTank-"+t.id),Object(f.jsx)(E,Object(i.a)({},e),"TankTable-"+t.id)]})]})}),"tank"),ie=n(45);n(611);Object(O.b)({OrbitControls:x.a});var le=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"right",children:"Right"}),Object(f.jsx)("div",{className:"left",children:"Left"})]}),Object(f.jsx)("div",{children:"abc"}),Object(f.jsx)("div",{style:{height:"400px"},children:Object(f.jsxs)(O.a,{resize:{polyfill:m.a},camera:{position:[0,5,17],fov:20},children:[Object(f.jsx)("ambientLight",{}),Object(f.jsx)("pointLight",{position:[10,20,10]}),Object(f.jsx)(de,{})]})}),Object(f.jsx)("div",{children:"def"})]})},de=function(){var e=Object(O.c)(),t=e.camera,n=e.gl.domElement;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(je,{position:[-4,.5,0],geometry:[2,1,1]}),Object(f.jsx)(je,{position:[0,.5,0]}),Object(f.jsx)("orbitControls",{args:[t,n]})]})};function je(e){var t=Object(h.useRef)(),n=Object(h.useState)(!1),a=Object(ie.a)(n,2),c=a[0],r=a[1],o=Object(h.useState)(!1),s=Object(ie.a)(o,2),l=s[0],d=s[1];return Object(f.jsxs)("mesh",Object(i.a)(Object(i.a)({},e),{},{ref:t,scale:l?1.5:1,onClick:function(e){return d(!l)},onPointerOver:function(e){return r(!0)},onPointerOut:function(e){return r(!1)},children:[Object(f.jsx)("boxGeometry",{args:e.geometry||[2,1,1]}),Object(f.jsx)("meshStandardMaterial",{color:c?"hotpink":"orange"})]}))}n(612);var ue=function(){return"localhost"===window.location.hostname||"file:"===window.location.protocol||"show=1"===document.cookie?Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(r.b,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsxs)(o.a,{exact:!0,path:["/yard","/"],children:[Object(f.jsxs)("header",{className:"App-header",children:["Coal V2 0.9",Object(f.jsx)(C.a,{type:"link",onClick:function(){return window.coal.showInstructions()},children:"\u70b9\u51fb\u8fd9\u91cc\uff0c\u7528window.coal.showInstructions()\u6253\u5f00\u4f7f\u7528\u8bf4\u660e"})]}),Object(f.jsx)(ae,{})]}),Object(f.jsx)(o.a,{path:"/tank",children:Object(f.jsxs)("header",{className:"App-header",children:["Coal V2 Tank",Object(f.jsx)(r.c,{to:"/yard",className:"App-link",children:"Yard"}),Object(f.jsx)(r.c,{to:"/tank",className:"App-link",children:"Tank"})]})}),Object(f.jsx)(o.a,{path:"/test",children:Object(f.jsx)(le,{})})]})})}):Object(f.jsxs)("div",{className:"App",children:["Test page",Object(f.jsx)("br",{}),"Welcome!"]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,622)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};c.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(ue,{})}),document.getElementById("root")),be()}},[[616,1,2]]]);