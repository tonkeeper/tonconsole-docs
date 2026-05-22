"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{3349:function(e,t,r){r.d(t,{a:function(){return addHtmlLabel}});var l=r(6225);function addHtmlLabel(e,t){var r=e.append("foreignObject").attr("width","100000"),a=r.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":a.insert(o);break;case"object":a.insert(function(){return o});break;default:a.html(o)}l.bg(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var n=a.node().getBoundingClientRect();return r.attr("width",n.width).attr("height",n.height),r}},6225:function(e,t,r){r.d(t,{$p:function(){return applyClass},O1:function(){return edgeToId},WR:function(){return applyTransition},bF:function(){return isSubgraph},bg:function(){return applyStyle}});var l=r(7514),a=r(3234);function isSubgraph(e,t){return!!e.children(t).length}function edgeToId(e){return escapeId(e.v)+":"+escapeId(e.w)+":"+escapeId(e.name)}var o=/:/g;function escapeId(e){return e?String(e).replace(o,"\\:"):""}function applyStyle(e,t){t&&e.attr("style",t)}function applyClass(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function applyTransition(e,t){var r=t.graph();if(l.Z(r)){var o=r.transition;if(a.Z(o))return o(e)}return e}},9792:function(e,t,r){var l=r(1691),a=r(1610);t.Z=(e,t)=>l.Z.lang.round(a.Z.parse(e)[t])},407:function(e,t,r){r.d(t,{diagram:function(){return n}});var l=r(7474),a=r(8583),o=r(1835);r(4218),r(5625),r(1644),r(6060),r(7484),r(7967),r(7856);let n={parser:l.p,db:l.f,renderer:a.f,styles:a.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.p)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),a.f.setConf(e.flowchart),l.f.clear(),l.f.setGen("gen-2")}}},8583:function(e,t,r){r.d(t,{a:function(){return flowStyles},f:function(){return p}});var l=r(5625),a=r(4218),o=r(1835),n=r(4015),i=r(3349),s=r(9792),d=r(1117);let c={},addVertices=async function(e,t,r,l,a,n){let s=l.select(`[id="${r}"]`),d=Object.keys(e);for(let r of d){let l;let d=e[r],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let p=(0,o.k)(d.styles),b=void 0!==d.text?d.text:d.id;if(o.l.info("vertex",d,d.labelType),"markdown"===d.labelType)o.l.info("vertex",d,d.labelType);else if((0,o.m)((0,o.c)().flowchart.htmlLabels)){let e={label:b};(l=(0,i.a)(s,e).node()).parentNode.removeChild(l)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));let t=b.split(o.e.lineBreakRegex);for(let r of t){let t=a.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}l=e}let u=0,f="";switch(d.type){case"round":u=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}let w=await (0,o.r)(b,(0,o.c)());t.setNode(d.id,{labelStyle:p.labelStyle,shape:f,labelText:w,labelType:d.labelType,rx:u,ry:u,class:c,style:p.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:n.db.getTooltip(d.id)||"",domId:n.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:p.labelStyle,labelType:d.labelType,shape:f,labelText:w,rx:u,ry:u,class:c,style:p.style,id:d.id,domId:n.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,o.c)().flowchart.padding})}},addEdges=async function(e,t,r){let l,n;o.l.info("abc78 edges = ",e);let i=0,s={};if(void 0!==e.defaultStyle){let t=(0,o.k)(e.defaultStyle);l=t.style,n=t.labelStyle}for(let r of e){i++;let d="L-"+r.start+"-"+r.end;void 0===s[d]?s[d]=0:s[d]++,o.l.info("abc78 new entry",d,s[d]);let p=d+"-"+s[d];o.l.info("abc78 new link id to be used is",d,p,s[d]);let b="LS-"+r.start,u="LE-"+r.end,f={style:"",labelStyle:""};switch(f.minlen=r.length||1,"arrow_open"===r.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let w="",g="";switch(r.stroke){case"normal":w="fill:none;",void 0!==l&&(w=l),void 0!==n&&(g=n),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let e=(0,o.k)(r.style);w=e.style,g=e.labelStyle}f.style=f.style+=w,f.labelStyle=f.labelStyle+=g,void 0!==r.interpolate?f.curve=(0,o.n)(r.interpolate,a.c_6):void 0!==e.defaultInterpolate?f.curve=(0,o.n)(e.defaultInterpolate,a.c_6):f.curve=(0,o.n)(c.curve,a.c_6),void 0===r.text?void 0!==r.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=r.labelType,f.label=await (0,o.r)(r.text.replace(o.e.lineBreakRegex,"\n"),(0,o.c)()),void 0===r.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=p,f.classes="flowchart-link "+b+" "+u,t.setEdge(r.start,r.end,f,i)}},draw=async function(e,t,r,i){let s,d;o.l.info("Drawing flowchart");let c=i.db.getDirection();void 0===c&&(c="TD");let{securityLevel:p,flowchart:b}=(0,o.c)(),u=b.nodeSpacing||50,f=b.rankSpacing||50;"sandbox"===p&&(s=(0,a.Ys)("#i"+t));let w="sandbox"===p?(0,a.Ys)(s.nodes()[0].contentDocument.body):(0,a.Ys)("body"),g="sandbox"===p?s.nodes()[0].contentDocument:document,h=new l.k({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:u,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),y=i.db.getSubGraphs();o.l.info("Subgraphs - ",y);for(let e=y.length-1;e>=0;e--)d=y[e],o.l.info("Subgraph - ",d),i.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let k=i.db.getVertices(),x=i.db.getEdges();o.l.info("Edges",x);let v=0;for(v=y.length-1;v>=0;v--){d=y[v],(0,a.td_)("cluster").append("text");for(let e=0;e<d.nodes.length;e++)o.l.info("Setting up subgraphs",d.nodes[e],d.id),h.setParent(d.nodes[e],d.id)}await addVertices(k,h,t,w,g,i),await addEdges(x,h);let m=w.select(`[id="${t}"]`),S=w.select("#"+t+" g");if(await (0,n.r)(S,h,["point","circle","cross"],"flowchart",t),o.u.insertTitle(m,"flowchartTitleText",b.titleTopMargin,i.db.getDiagramTitle()),(0,o.o)(h,m,b.diagramPadding,b.useMaxWidth),i.db.indexNodes("subGraph"+v),!b.htmlLabels){let e=g.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),r=g.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}let T=Object.keys(k);T.forEach(function(e){let r=k[e];if(r.link){let l=(0,a.Ys)("#"+t+' [id="'+e+'"]');if(l){let e=g.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===p?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=l.insert(function(){return e},":first-child"),a=l.select(".label-container");a&&t.append(function(){return a.node()});let o=l.select(".label");o&&t.append(function(){return o.node()})}}})},p={setConf:function(e){let t=Object.keys(e);for(let r of t)c[r]=e[r]},addVertices,addEdges,getClasses:function(e,t){return t.db.getClasses()},draw},fade=(e,t)=>{let r=s.Z,l=r(e,"r"),a=r(e,"g"),o=r(e,"b");return d.Z(l,a,o,t)},flowStyles=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
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
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
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
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
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
`}}]);