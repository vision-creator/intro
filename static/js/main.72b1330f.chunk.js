(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{538:function(e,t,n){},614:function(e,t,n){},615:function(e,t,n){},616:function(e,t,n){},620:function(e,t,n){"use strict";n.r(t);n(339),n(351);var a=n(74),c=n.n(a),r=n(127),o=(n(538),n(44)),i=n(76),s=n(13),l=n(26),d=n(4),j=n(6),u=n(7),b=n(8),h=n(0),O=n(111),x=n(102),m=n(180),f=n(196),p=n(199),y=n(10),v=function(e){var t=e.border,n=e.className,a=void 0===n?"freebox":n,c=e.color,r=e.bgColor,o=e.len,i=e.x,l=e.y,d=e.height,j=e.align,u=e.onClick,b=e.onContextMenu,h={width:o+"%",left:i+"%",top:100-l-d+"%",height:d+"%",background:r};return void 0!==t&&(h=Object(s.a)({border:t+" solid "+c},h)),Object(y.jsx)("div",{className:a,align:j,style:h,onClick:u,onContextMenu:b,children:e.children})},g=n(183),w=n.n(g),F=n(622),k=function(e){var t=w.a.query(e,"$..coal");return t=t.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{key:T(e.id,t.id)})})),t},C=function(e){var t=e;return Array.isArray(e)||(t=[e]),t.map(k).flat()},T=function(e,t){return e+"-C"+t},N=function(e,t,n){return e.map((function(e,t){return Object(s.a)(Object(s.a)({dataIndex:e.title,key:e.title},e),{},{render:function(e,t){return Object(y.jsx)(p.a,{overlay:n("tableColumnDefinition",t.id),trigger:["contextMenu"],children:Object(y.jsx)("div",{width:"100%",children:e})},"tableColumnDefinition")}})}))},D=function(e,t,n,a,c,r){return Object(y.jsx)("div",{className:"tableBorder",children:Object(y.jsx)(F.a,{columns:N(e,t,r),dataSource:C(n),scroll:{x:1500,y:300},bordered:!0,className:"coalTable",rowClassName:function(e){return e.key===a[0]?"data-row active-row":"data-row"},pagination:!1,onRow:c})})},S=function(e){var t=e.group,n=e.yardLen,a=e.yardLayers,c=e.selected,r=void 0!==c&&c,o=e.onClick,i=e.onContextMenu,l=t.coal,d=t.ranges,j=l.id,u=r?"#333333":l.color,b=1/a*100,h=d&&d.map(M(j,n,a));return Object(y.jsx)(y.Fragment,{children:h&&h.map((function(e){return Object(y.jsx)(v,Object(s.a)(Object(s.a)({},e),{},{height:b,bgColor:u,border:r?"4px":"2px",onClick:o,onContextMenu:i}))}))})};function M(e,t,n){return function(a,c){return{key:"C"+e+"-R"+c,len:(a.end-a.start)/t*100,x:(a.start+t/2)/t*100,y:a.level/n*100,level:a.level,x1:a.start,len1:a.end-a.start}}}var R=function(e){var t=e.data,n=e.selectedRowKeys,a=e.onClick,c=e.popMenu,r=t.layers,o=t.groups,i=t.length,s=t.id,l=t.totalCurrent,d=1/r*.95*100;return Object(y.jsx)("div",{className:"relative tableBorder",children:Object(y.jsxs)("div",{className:"yardPlot ",children:[Object(y.jsxs)("div",{className:"totalCoal",children:[Object(y.jsx)("b",{className:"containerLabel",children:s}),Object(y.jsx)("br",{}),"\u5b58\u7164\u91cf:",l]}),Object(y.jsxs)("div",{className:"subPlot",children:[Object(y.jsx)("div",{className:"layerAxis",children:function(){for(var e=[],t=0;t<r;t++)e.push(Object(y.jsx)(v,{len:100,x:0,y:t/r*100,height:d,color:"#fefefe",children:Object(y.jsxs)("div",{className:"verticalMiddle",children:[t+1,"\u5c42"]})},"layerAxis-"+t));return e}()},"layerAxis"),Object(y.jsxs)("div",{className:"coalGroups",children:[function(){for(var e=[],t=0;t<=i;t+=20)e.push(Object(y.jsx)(v,{className:"scale",len:3,x:t/i*100,y:-10,height:10,color:"#cccccc",align:"left",children:t},"lengthAxis-"+t));return e}(),o.map((function(e){var t=T(s,e.coal.id);return Object(y.jsx)(p.a,{overlay:c("drawTank",e.coal.id),trigger:["contextMenu"],children:Object(y.jsx)("a",{children:Object(y.jsx)(S,{group:e,yardLen:i,yardLayers:r,selected:n&&n[0]===t,onClick:function(){console.log("CoalGroup clicked:",t),a(t)},onContextMenu:function(){console.log("CoalGroup context menu:",t),a(t)}},t)})},t)}))]},"coalGroups")]})]})},s)};Object(x.b)({OrbitControls:m.a});var A=function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"yard3D2 tableBorder",children:Object(y.jsx)(x.a,{resize:{polyfill:f.a},camera:{position:[0,80,180],fov:10},frameloop:"demand",children:Object(h.createElement)(L,Object(s.a)(Object(s.a)({},e),{},{key:e.data.id}))})})})},L=function(e){var t=Object(x.c)(),n=t.invalidate,a=t.camera,c=t.gl.domElement,r=Object(h.useRef)(),o=e.data,i=e.selectedRowKeys,s=o.length,l=o.layers,d=o.groups,j=o.id;Object(h.useEffect)((function(){var e=null;return r.current&&((e=r.current).addEventListener("change",n),console.debug("3D UseEffect - Register Listener")),function(){e.removeEventListener("change",n),console.debug("3D UseEffect - Deregister Listener")}}),[]);var u=d.map((function(e){if(e.ranges){var t=i&&i[0]===T(j,e.coal.id);return e.ranges.map(M(e.coal.id,s,l)).map((function(n){var a=-50+n.x+n.len/2,c=3*n.level-5,r=n.len-.5,o=15-n.level;return Object(y.jsx)(I,{position:[a,c,0],mygeometry:[r,2.9,o],children:Object(y.jsx)("meshStandardMaterial",{color:t?"#333333":e.coal.color})},n.key)}))}return Object(y.jsx)(y.Fragment,{})}));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ambientLight",{}),Object(y.jsx)("pointLight",{position:[10,20,10]}),u,Object(y.jsx)("orbitControls",{ref:r,args:[a,c]})]})};function I(e){return Object(y.jsxs)("mesh",Object(s.a)(Object(s.a)({},e),{},{children:[Object(y.jsx)("boxGeometry",{args:e.mygeometry||[2,1,1]}),e.children]}))}var K=function(e){var t=e.data,n=e.selectedRowKeys,a=e.onClick,c=e.popMenu,r=t.id;return Object(y.jsx)("div",{className:"drawTank",children:t.groups.map((function(e){var o=100*e.thickness/t.tankheight,i=e.coal.color,s="black",l=T(r,e.coal.id);n&&n[0]===l&&(i="#333333",s="white");var d=c("drawTank",e.coal.id);return Object(y.jsx)(p.a,{overlay:d,trigger:["contextMenu"],children:Object(y.jsx)("div",{className:"tankLayer",style:{color:s,backgroundColor:i,height:o+"%",cursor:"pointer"},onClick:function(){a(l)},onContextMenu:function(){a(l)},children:e.thickness},l)},l)}))})},P=[{title:"\u7164\u79cd"},{title:"\u5b58\u7164\u91cf"},{title:"\u70ed\u503c"}],E=function(e){var t=e.data,n=e.selectedRowKeys;return Object(y.jsx)("div",{className:"tankTable",children:Object(y.jsx)(F.a,{columns:_(P),dataSource:J(t),scroll:{x:200,y:250},size:"small",bordered:!0,pagination:!1,rowSelection:{selectedRowKeys:n,type:"radio",columnWidth:0,renderCell:function(){return""}},summary:function(e){var t=0,n=0;return e.forEach((function(e){var a=e.\u5b58\u7164\u91cf,c=e.\u70ed\u503c;t+=parseFloat(a),n+=parseFloat(c)})),Object(y.jsx)(F.a.Summary,{fixed:!0,children:Object(y.jsxs)(F.a.Summary.Row,{children:[Object(y.jsx)(F.a.Summary.Cell,{}),Object(y.jsx)(F.a.Summary.Cell,{children:Object(y.jsx)("b",{children:"\u5408\u8ba1"})}),Object(y.jsx)(F.a.Summary.Cell,{children:Object(y.jsx)("b",{children:t})}),Object(y.jsx)(F.a.Summary.Cell,{children:Object(y.jsx)("b",{children:n})})]})})}})})},B=function(e){var t=w.a.query(e,"$..coal");return t=t.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{key:T(e.id,t.id)})})),t.reverse()},J=function(e){var t=e;return Array.isArray(e)||(t=[e]),t.map(B).flat()},_=function(e){return e.map((function(e,t){return Object(s.a)({dataIndex:e.title,key:e.title},e)}))},G=function(e){var t=e.data;return Object(y.jsxs)("div",{className:"tankPlot",children:[Object(y.jsx)("b",{className:"containerLabel",children:t.id}),Object(y.jsxs)("div",{children:[Object(y.jsx)(K,Object(s.a)({},e),"DrawTank-"+t.id),Object(y.jsx)(E,Object(s.a)({},e),"TankTable-"+t.id)]})]})},V=n(623),z=n(87),W=V.a.TextArea,q=function(e,t,n,a,c){return Object(y.jsxs)("div",{align:"left",className:"instruction",children:[Object(y.jsxs)("div",{className:"container1",children:[Object(y.jsxs)("div",{className:"right1",children:["data: ",Object(y.jsx)(W,{rows:10,onChange:c("data"),defaultValue:JSON.stringify(e)}),"columns: ",Object(y.jsx)(W,{rows:1,onChange:c("columns"),defaultValue:JSON.stringify(t)}),"actions: ",Object(y.jsx)(W,{rows:1,onChange:c("actions"),defaultValue:JSON.stringify(n)}),"meta: ",Object(y.jsx)(W,{rows:1,onChange:c("meta"),defaultValue:JSON.stringify(a)})]}),Object(y.jsxs)("div",{className:"left1",children:[Object(y.jsx)("h2",{children:"Readme"}),Object(y.jsx)("h4",{children:"1. Data are presented in three different ways: Table, 2D plot, 3D plot"}),Object(y.jsx)("h4",{children:"2. Change the dataset, all views are updated"}),Object(y.jsx)("h4",{children:"3. Click a record in table, the correspondent part will be highlighted"}),Object(y.jsx)("h2",{children:"How to update the data and view:"}),Object(y.jsx)("h4",{children:"1. Directly edit in TextAreas on the right side.For developers ONLY, playground for data format validation."}),Object(y.jsxs)("h4",{children:["2. Programmatically set the data using those pre-defined functions that binded on Object ",Object(y.jsx)("b",{children:"window.coal"}),", i.e.",Object(y.jsx)("b",{children:"window.coal.setData , window.coal.setColumns, window.coal.setActions, window.coal.setMeta"})]}),Object(y.jsx)("h4",{children:"To see how it works: open F12 console and type(you may change some values to see if the views changes.):"}),Object(y.jsxs)("i",{children:[" window.coal.setData(",JSON.stringify(e),")"]})]})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{})]})},U=(n(614),{showInstructions:!1,show2D:!0,show3D:!0,showTank:!0,showTable:!0}),Y=[{name:"\u64cd\u4f5cA",type:"row"},{name:"\u64cd\u4f5cB",type:"row"},{name:"\u64cd\u4f5cC",type:"row"},{name:"\u64cd\u4f5c\u4e8c",type:"yard"},{name:"\u64cd\u4f5c\u4e09",type:"tank"},{name:"\u64cd\u4f5c\u56db",type:"global"}],$=[{title:"\u7164\u79cd"},{title:"\u8ba2\u5355\u53f7"},{title:"\u5806\u671f"},{title:"\u8239\u540d"},{title:"\u5b58\u7164\u91cf"},{title:"\u70ed\u503c"},{title:"\u6c34\u4efd"},{title:"\u6325\u53d1\u4efd"},{title:"\u7070\u4efd"},{title:"\u786b\u4efd"},{title:"T2"},{title:"\u72b6\u6001",width:120}],H={id:"\u7164\u58065",type:"yard",totalCurrent:9e4,length:361,layers:6,groups:[{coal:{id:1,color:"#00a0e9","\u7164\u79cd":"\u6709\u6570\u636e1\u53ef\u4ee5\u70b9\u51fb","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"},ranges:[{extended:!0,level:4,start:-160,end:-140},{extended:!0,level:5,start:-160,end:-140},{level:0,start:-160,end:140},{level:1,start:-160,end:-140},{level:2,start:-160,end:-140},{level:3,start:-160,end:-140}]},{coal:{id:2,color:"#FF00FF","\u7164\u79cd":"\u6709\u6570\u636e2\u53ef\u4ee5\u70b9\u51fb","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"},ranges:[{extended:!0,level:4,start:-140,end:-120},{extended:!0,level:5,start:-140,end:-120},{level:0,start:140,end:180},{level:1,start:-140,end:-120},{level:2,start:-140,end:-100},{level:3,start:-140,end:-100}]},{coal:{id:3,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:4,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:5,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:6,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:7,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:8,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:9,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:10,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:11,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:12,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}},{coal:{id:13,color:"#FF00FF","\u7164\u79cd":"\u795e\u534e\u5916#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"6\u670827\u65e5","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1"}}]},Q=[H,Object(s.a)(Object(s.a)({},H),{},{id:"\u7164\u58066"})],X={id:"\u7164\u7f501",type:"tank",totalCurrent:"90000",totalOrigin:"100000",totalDelta:"10000",tankheight:"30",tankradius:"16",groups:[{thickness:"5",coal:{id:"56868",color:"#00a0e9","\u7164\u79cd":"\u7164\u7f50\u7164#200","\u8ba2\u5355\u53f7":"56868","\u5806\u671f":"40678","\u8239\u540d":"\u660e\u5dde25","\u5b58\u7164\u91cf":"5125","\u70ed\u503c":"5021","\u6c34\u4efd":"17.99","\u6325\u53d1\u4efd":"25.56","\u7070\u4efd":"13.23","\u786b\u4efd":"0.53",T2:"1210","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"5225","\u589e\u51cf\u91cf":"-100"}},{thickness:"5",coal:{id:"57912",color:"#FF0000","\u7164\u79cd":"\u7164\u7f50\u71642","\u8ba2\u5355\u53f7":"57912","\u5806\u671f":"40717","\u8239\u540d":"\u65d7\u79655","\u5b58\u7164\u91cf":"6805","\u70ed\u503c":"4853","\u6c34\u4efd":"8.63","\u6325\u53d1\u4efd":"22.77","\u7070\u4efd":"27.68","\u786b\u4efd":"1.07",T2:"1330","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"6805","\u589e\u51cf\u91cf":"0","\u5907\u6ce8":"\u8fd9\u91cc\u662f\u5907\u6ce8",name:"\u9655\u7164123"}},{thickness:"5",coal:{id:"57913",color:"#00FF00","\u7164\u79cd":"\u7164\u7f50\u71643","\u8ba2\u5355\u53f7":"57912","\u5806\u671f":"40717","\u8239\u540d":"\u65d7\u79655","\u5b58\u7164\u91cf":"6805","\u70ed\u503c":"4853","\u6c34\u4efd":"8.63","\u6325\u53d1\u4efd":"22.77","\u7070\u4efd":"27.68","\u786b\u4efd":"1.07",T2:"1330","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"6805","\u589e\u51cf\u91cf":"0",name:"\u9655\u7164123"}},{thickness:"5",coal:{id:"57923",color:"#eeFF00","\u7164\u79cd":"\u7164\u7f50\u71643","\u8ba2\u5355\u53f7":"57912","\u5806\u671f":"40717","\u8239\u540d":"\u65d7\u79655","\u5b58\u7164\u91cf":"6805","\u70ed\u503c":"4853","\u6c34\u4efd":"8.63","\u6325\u53d1\u4efd":"22.77","\u7070\u4efd":"27.68","\u786b\u4efd":"1.07",T2:"1330","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"6805","\u589e\u51cf\u91cf":"0",name:"\u9655\u7164123"}},{thickness:"10",coal:{id:"57924",color:"#00FFee","\u7164\u79cd":"\u7164\u7f50\u71643","\u8ba2\u5355\u53f7":"57912","\u5806\u671f":"40717","\u8239\u540d":"\u65d7\u79655","\u5b58\u7164\u91cf":"6805","\u70ed\u503c":"4853","\u6c34\u4efd":"8.63","\u6325\u53d1\u4efd":"22.77","\u7070\u4efd":"27.68","\u786b\u4efd":"1.07",T2:"1330","\u72b6\u6001":"\u590d\u5ba1","\u539f\u5b58\u91cf":"6805","\u589e\u51cf\u91cf":"0",name:"\u9655\u7164123"}}]},Z=[X,Object(s.a)(Object(s.a)({},X),{},{id:"\u7164\u7f502"}),Object(s.a)(Object(s.a)({},X),{},{id:"\u7164\u7f503"}),Object(s.a)(Object(s.a)({},X),{},{id:"\u7164\u7f504"}),Object(s.a)(Object(s.a)({},X),{},{id:"\u7164\u7f505"}),Object(s.a)(Object(s.a)({},X),{},{id:"\u7164\u7f506"}),Object(s.a)(Object(s.a)({},X),{},{id:"\u7164\u7f507"})],ee=[].concat(Q,Z),te=["inputData"],ne="yard",ae=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:ee,columns:$,actions:Y,meta:U,selectedRowKeys:[]},e._setData=function(t){return function(n){console.log("Set",t,n),e.setState(Object(l.a)({},t,n))}},e._setStateField=function(t){return function(n){try{var a=JSON.parse(n.target.value);e.setState(Object(l.a)({},t,a))}catch(n){console.log("Inpput is not correct",n)}}},e.handleOnRow=function(t,n){return{onClick:function(n){e.setState({selectedRowKeys:[t.key]})},onContextMenu:function(n){e.setState({selectedRowKeys:[t.key]})}}},e.handleOnPlotClick=function(t){e.setState({selectedRowKeys:[t]})},e.popMenu=function(t,n){return Object(y.jsx)(se,{actions:e.state.actions,coalId:n},t)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.coal={},window.coal.setData=this._setData("data"),window.coal.setColumns=this._setData("columns"),window.coal.setActions=this._setData("actions"),window.coal.setMeta=this._setData("meta"),window.coal.showInstructions=function(){return window.coal.setMeta(Object(s.a)(Object(s.a)({},e.state.meta),{},{showInstructions:!e.state.meta.showInstructions}))},console.log("To: Buddy, Subject: Windows.coal functions registered successfully",window.coal)}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.columns,a=e.actions,c=e.selectedRowKeys,r=e.meta;return Object(y.jsxs)(y.Fragment,{children:[r.showTable&&D(n,a,t,c,this.handleOnRow,this.popMenu),Object(y.jsx)("br",{}),r.show2D&&Object(y.jsx)(re,{inputData:t,selectedRowKeys:c,onClick:this.handleOnPlotClick,popMenu:this.popMenu}),r.show3D&&Object(y.jsx)(oe,{inputData:t,selectedRowKeys:c}),r.showTank&&Object(y.jsx)(ie,{inputData:t,actions:a,selectedRowKeys:c,onClick:this.handleOnPlotClick,popMenu:this.popMenu}),r.showInstructions&&q(t,n,a,r,this._setStateField)]})}}]),n}(h.Component),ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ne;return function(n){var a=n.inputData,c=Object(i.a)(n,te);return Array.isArray(a)||(a=[a]),a.filter((function(e){return e.type===t})).map((function(t){return Object(y.jsx)(e,Object(s.a)({data:t},c),t.id)}))}},re=ce(R,ne),oe=ce(A,ne),ie=ce(G,"tank"),se=function(e){var t=e.key,n=e.actions,a=e.coalId,c=n.filter((function(e){return"row"===e.type}));return Object(y.jsx)(O.a,{onClick:function(e){console.log("To: Buddy, Subject: Link Clicked, calling window.external.callFromCoal() if exists, Parameters: ".concat(e.key,", ").concat(a)),window.external.callFromCoal&&window.external.callFromCoal(e.key,a)},children:c.map((function(e,t){return Object(y.jsx)(O.a.Item,{children:e.name},e.name)}))},t)},le=n(45);n(615);Object(x.b)({OrbitControls:m.a});var de=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"right",children:"Right"}),Object(y.jsx)("div",{className:"left",children:"Left"})]}),Object(y.jsx)("div",{children:"abc"}),Object(y.jsx)("div",{style:{height:"400px"},children:Object(y.jsxs)(x.a,{resize:{polyfill:f.a},camera:{position:[0,5,17],fov:20},children:[Object(y.jsx)("ambientLight",{}),Object(y.jsx)("pointLight",{position:[10,20,10]}),Object(y.jsx)(je,{})]})}),Object(y.jsx)("div",{children:"def"})]})},je=function(){var e=Object(x.c)(),t=e.camera,n=e.gl.domElement;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(ue,{position:[-4,.5,0],geometry:[2,1,1]}),Object(y.jsx)(ue,{position:[0,.5,0]}),Object(y.jsx)("orbitControls",{args:[t,n]})]})};function ue(e){var t=Object(h.useRef)(),n=Object(h.useState)(!1),a=Object(le.a)(n,2),c=a[0],r=a[1],o=Object(h.useState)(!1),i=Object(le.a)(o,2),l=i[0],d=i[1];return Object(y.jsxs)("mesh",Object(s.a)(Object(s.a)({},e),{},{ref:t,scale:l?1.5:1,onClick:function(e){return d(!l)},onPointerOver:function(e){return r(!0)},onPointerOut:function(e){return r(!1)},children:[Object(y.jsx)("boxGeometry",{args:e.geometry||[2,1,1]}),Object(y.jsx)("meshStandardMaterial",{color:c?"hotpink":"orange"})]}))}n(616);var be=function(){return"localhost"===window.location.hostname||"file:"===window.location.protocol||"show=1"===document.cookie?Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(r.b,{children:Object(y.jsxs)(o.c,{children:[Object(y.jsxs)(o.a,{exact:!0,path:["/yard","/"],children:["show=1"===document.cookie?Object(y.jsxs)("header",{className:"App-header",children:["Coal V2 0.9",Object(y.jsx)(z.a,{type:"link",onClick:function(){return window.coal.showInstructions()},children:"\u70b9\u51fb\u8fd9\u91cc\uff0c\u7528window.coal.showInstructions()\u6253\u5f00\u4f7f\u7528\u8bf4\u660e"})]}):"",Object(y.jsx)(ae,{})]}),Object(y.jsx)(o.a,{path:"/tank",children:Object(y.jsxs)("header",{className:"App-header",children:["Coal V2 Tank",Object(y.jsx)(r.c,{to:"/yard",className:"App-link",children:"Yard"}),Object(y.jsx)(r.c,{to:"/tank",className:"App-link",children:"Tank"})]})}),Object(y.jsx)(o.a,{path:"/test",children:Object(y.jsx)(de,{})})]})})}):Object(y.jsxs)("div",{className:"App",children:["Test page",Object(y.jsx)("br",{}),"Welcome!"]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,624)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};c.a.render(Object(y.jsx)(r.a,{children:Object(y.jsx)(be,{})}),document.getElementById("root")),he()}},[[620,1,2]]]);