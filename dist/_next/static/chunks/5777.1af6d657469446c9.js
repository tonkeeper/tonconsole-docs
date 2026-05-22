"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5777],{5777:function(e,t,o){o.d(t,{diagram:function(){return p}});var r=o(7474),l=o(4218),a=o(5200),i=o(1835),n=o(7295);o(7484),o(7967),o(7856);let findCommonAncestor=(e,t,o)=>{let{parentById:r}=o,l=new Set,a=e;for(;a;){if(l.add(a),a===t)return a;a=r[a]}for(a=t;a;){if(l.has(a))return a;a=r[a]}return"root"},s=new n,d={},c={},h={},addVertices=async function(e,t,o,r,l,n,s){let d=o.select(`[id="${t}"]`),c=d.insert("g").attr("class","nodes"),p=Object.keys(e);return await Promise.all(p.map(async function(t){let o,s;let d=e[t],p="default";d.classes.length>0&&(p=d.classes.join(" ")),p+=" flowchart-label";let u=(0,i.k)(d.styles),g=void 0!==d.text?d.text:d.id,b={width:0,height:0},y=[{id:d.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:d.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:d.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:d.id+"-north",layoutOptions:{"port.side":"NORTH"}}],f=0,w="",k={};switch(d.type){case"round":f=5,w="rect";break;case"square":case"group":default:w="rect";break;case"diamond":w="question",k={portConstraints:"FIXED_SIDE"};break;case"hexagon":w="hexagon";break;case"odd":case"odd_right":w="rect_left_inv_arrow";break;case"lean_right":w="lean_right";break;case"lean_left":w="lean_left";break;case"trapezoid":w="trapezoid";break;case"inv_trapezoid":w="inv_trapezoid";break;case"circle":w="circle";break;case"ellipse":w="ellipse";break;case"stadium":w="stadium";break;case"subroutine":w="subroutine";break;case"cylinder":w="cylinder";break;case"doublecircle":w="doublecircle"}let x={labelStyle:u.labelStyle,shape:w,labelText:g,labelType:d.labelType,rx:f,ry:f,class:p,style:u.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:l.db.getTooltip(d.id)||"",domId:l.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,i.F)().flowchart.padding};if("group"!==x.type)o=(s=await (0,a.e)(c,x,d.dir)).node().getBBox();else{r.createElementNS("http://www.w3.org/2000/svg","text");let{shapeSvg:e,bbox:t}=await (0,a.l)(c,x,void 0,!0);b.width=t.width,b.wrappingWidth=(0,i.F)().flowchart.wrappingWidth,b.height=t.height,b.labelNode=e.node(),x.labelData=b}let m={id:d.id,ports:"diamond"===d.type?y:[],layoutOptions:k,labelText:g,labelData:b,domId:l.db.lookUpDomId(d.id),width:null==o?void 0:o.width,height:null==o?void 0:o.height,type:d.type,el:s,parent:n.parentById[d.id]};h[x.id]=m})),s},getNextPosition=(e,t,o)=>{let r={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return r.TD=r.TB,r[o][t][e]},getNextPort=(e,t,o)=>{if(i.l.info("getNextPort",{node:e,edgeDirection:t,graphDirection:o}),!d[e])switch(o){case"TB":case"TD":d[e]={inPosition:"north",outPosition:"south"};break;case"BT":d[e]={inPosition:"south",outPosition:"north"};break;case"RL":d[e]={inPosition:"east",outPosition:"west"};break;case"LR":d[e]={inPosition:"west",outPosition:"east"}}let r="in"===t?d[e].inPosition:d[e].outPosition;return"in"===t?d[e].inPosition=getNextPosition(d[e].inPosition,t,o):d[e].outPosition=getNextPosition(d[e].outPosition,t,o),r},getEdgeStartEndPoint=(e,t)=>{let o=e.start,r=e.end,l=o,a=r,i=h[o],n=h[r];return i&&n?("diamond"===i.type&&(o=`${o}-${getNextPort(o,"out",t)}`),"diamond"===n.type&&(r=`${r}-${getNextPort(r,"in",t)}`),{source:o,target:r,sourceId:l,targetId:a}):{source:o,target:r}},addEdges=function(e,t,o,r){let n,s;i.l.info("abc78 edges = ",e);let d=r.insert("g").attr("class","edgeLabels"),h={},p=t.db.getDirection();if(void 0!==e.defaultStyle){let t=(0,i.k)(e.defaultStyle);n=t.style,s=t.labelStyle}return e.forEach(function(t){let r="L-"+t.start+"-"+t.end;void 0===h[r]?h[r]=0:h[r]++,i.l.info("abc78 new entry",r,h[r]);let u=r+"-"+h[r];i.l.info("abc78 new link id to be used is",r,u,h[r]);let g="LS-"+t.start,b="LE-"+t.end,y={style:"",labelStyle:""};switch(y.minlen=t.length||1,"arrow_open"===t.type?y.arrowhead="none":y.arrowhead="normal",y.arrowTypeStart="arrow_open",y.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":y.arrowTypeStart="arrow_cross";case"arrow_cross":y.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":y.arrowTypeStart="arrow_point";case"arrow_point":y.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":y.arrowTypeStart="arrow_circle";case"arrow_circle":y.arrowTypeEnd="arrow_circle"}let f="",w="";switch(t.stroke){case"normal":f="fill:none;",void 0!==n&&(f=n),void 0!==s&&(w=s),y.thickness="normal",y.pattern="solid";break;case"dotted":y.thickness="normal",y.pattern="dotted",y.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":y.thickness="thick",y.pattern="solid",y.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){let e=(0,i.k)(t.style);f=e.style,w=e.labelStyle}y.style=y.style+=f,y.labelStyle=y.labelStyle+=w,void 0!==t.interpolate?y.curve=(0,i.n)(t.interpolate,l.c_6):void 0!==e.defaultInterpolate?y.curve=(0,i.n)(e.defaultInterpolate,l.c_6):y.curve=(0,i.n)(c.curve,l.c_6),void 0===t.text?void 0!==t.style&&(y.arrowheadStyle="fill: #333"):(y.arrowheadStyle="fill: #333",y.labelpos="c"),y.labelType=t.labelType,y.label=t.text.replace(i.e.lineBreakRegex,"\n"),void 0===t.style&&(y.style=y.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),y.labelStyle=y.labelStyle.replace("color:","fill:"),y.id=u,y.classes="flowchart-link "+g+" "+b;let k=(0,a.f)(d,y),{source:x,target:m,sourceId:T,targetId:v}=getEdgeStartEndPoint(t,p);i.l.debug("abc78 source and target",x,m),o.edges.push({id:"e"+t.start+t.end,sources:[x],targets:[m],sourceId:T,targetId:v,labelEl:k,labels:[{width:y.width,height:y.height,orgWidth:y.width,orgHeight:y.height,text:y.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:y})}),o},addMarkersToEdge=function(e,t,o,r,l){let i="";r&&(i=(i=(i=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),(0,a.m)(e,t,i,l,o)},addSubGraphs=function(e){let t={parentById:{},childrenById:{}},o=e.getSubGraphs();return i.l.info("Subgraphs - ",o),o.forEach(function(e){e.nodes.forEach(function(o){t.parentById[o]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(o)})}),o.forEach(function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]}),t},calcOffset=function(e,t,o){let r=findCommonAncestor(e,t,o);if(void 0===r||"root"===r)return{x:0,y:0};let l=h[r].offset;return{x:l.posX,y:l.posY}},insertEdge=function(e,t,o,r,i,n){let s=calcOffset(t.sourceId,t.targetId,i),d=t.sections[0].startPoint,c=t.sections[0].endPoint,h=t.sections[0].bendPoints?t.sections[0].bendPoints:[],p=h.map(e=>[e.x+s.x,e.y+s.y]),u=[[d.x+s.x,d.y+s.y],...p,[c.x+s.x,c.y+s.y]],{x:g,y:b}=(0,a.k)(t.edgeData),y=(0,l.jvg)().x(g).y(b).curve(l.c_6),f=e.insert("path").attr("d",y(u)).attr("class","path "+o.classes).attr("fill","none"),w=e.insert("g").attr("class","edgeLabel"),k=(0,l.Ys)(w.node().appendChild(t.labelEl)),x=k.node().firstChild.getBoundingClientRect();k.attr("width",x.width),k.attr("height",x.height),w.attr("transform",`translate(${t.labels[0].x+s.x}, ${t.labels[0].y+s.y})`),addMarkersToEdge(f,o,r.type,r.arrowMarkerAbsolute,n)},insertChildren=(e,t)=>{e.forEach(e=>{e.children||(e.children=[]);let o=t.childrenById[e.id];o&&o.forEach(t=>{e.children.push(h[t])}),insertChildren(e.children,t)})},draw=async function(e,t,o,r){var n;let c,p;r.db.clear(),h={},d={},r.db.setGen("gen-2"),r.parser.parse(e);let u=(0,l.Ys)("body").append("div").attr("style","height:400px").attr("id","cy"),g={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(i.l.info("Drawing flowchart using v3 renderer",s),r.db.getDirection()){case"BT":g.layoutOptions["elk.direction"]="UP";break;case"TB":g.layoutOptions["elk.direction"]="DOWN";break;case"LR":g.layoutOptions["elk.direction"]="RIGHT";break;case"RL":g.layoutOptions["elk.direction"]="LEFT"}let{securityLevel:b,flowchart:y}=(0,i.F)();"sandbox"===b&&(c=(0,l.Ys)("#i"+t));let f="sandbox"===b?(0,l.Ys)(c.nodes()[0].contentDocument.body):(0,l.Ys)("body"),w="sandbox"===b?c.nodes()[0].contentDocument:document,k=f.select(`[id="${t}"]`);(0,a.a)(k,["point","circle","cross"],r.type,t);let x=r.db.getVertices(),m=r.db.getSubGraphs();i.l.info("Subgraphs - ",m);for(let e=m.length-1;e>=0;e--)p=m[e],r.db.addVertex(p.id,{text:p.title,type:p.labelType},"group",void 0,p.classes,p.dir);let T=k.insert("g").attr("class","subgraphs"),v=addSubGraphs(r.db);g=await addVertices(x,t,f,w,r,v,g);let E=k.insert("g").attr("class","edges edgePath"),$=r.db.getEdges();g=addEdges($,r,g,k);let _=Object.keys(h);_.forEach(e=>{let t=h[e];t.parent||g.children.push(t),void 0!==v.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)}),insertChildren(g.children,v),i.l.info("after layout",JSON.stringify(g,null,2));let C=await s.layout(g);drawNodes(0,0,C.children,k,T,r,0),i.l.info("after layout",C),null==(n=C.edges)||n.map(e=>{insertEdge(E,e,e.edgeData,r,v,t)}),(0,i.o)({},k,y.diagramPadding,y.useMaxWidth),u.remove()},drawNodes=(e,t,o,r,l,a,n)=>{o.forEach(function(o){if(o){if(h[o.id].offset={posX:o.x+e,posY:o.y+t,x:e,y:t,depth:n,width:o.width,height:o.height},"group"===o.type){let r=l.insert("g").attr("class","subgraph");r.insert("rect").attr("class","subgraph subgraph-lvl-"+n%5+" node").attr("x",o.x+e).attr("y",o.y+t).attr("width",o.width).attr("height",o.height);let a=r.insert("g").attr("class","label"),s=(0,i.F)().flowchart.htmlLabels?o.labelData.width/2:0;a.attr("transform",`translate(${o.labels[0].x+e+o.x+s}, ${o.labels[0].y+t+o.y+3})`),a.node().appendChild(o.labelData.labelNode),i.l.info("Id (UGH)= ",o.type,o.labels)}else i.l.info("Id (UGH)= ",o.id),o.el.attr("transform",`translate(${o.x+e+o.width/2}, ${o.y+t+o.height/2})`)}}),o.forEach(function(o){o&&"group"===o.type&&drawNodes(e+o.x,t+o.y,o.children,r,l,a,n+1)})},genSections=e=>{let t="";for(let o=0;o<5;o++)t+=`
      .subgraph-lvl-${o} {
        fill: ${e[`surface${o}`]};
        stroke: ${e[`surfacePeer${o}`]};
      }
    `;return t},p={db:r.d,renderer:{getClasses:function(e,t){return i.l.info("Extracting classes"),t.db.getClasses()},draw},parser:r.p,styles:e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.85;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }

  .flowchart-label text {
    text-anchor: middle;
  }

  ${genSections(e)}
`}}}]);