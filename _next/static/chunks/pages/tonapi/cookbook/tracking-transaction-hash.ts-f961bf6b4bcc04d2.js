(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6168],{9686:function(s,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tonapi/cookbook/tracking-transaction-hash.ts",function(){return n(1394)}])},1394:function(s,o,n){"use strict";n.r(o),n.d(o,{__toc:function(){return i}});var e=n(5893),r=n(6997),l=n(2643);let i=[];function _createMdxContent(s){let o=Object.assign({pre:"pre",code:"code",span:"span"},(0,l.a)(),s.components);return(0,e.jsx)(o.pre,{"data-language":"typescript","data-theme":"default",children:(0,e.jsxs)(o.code,{"data-language":"typescript","data-theme":"default",children:[(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" { TonApiClient } "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@ton-api/client'"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" { Message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" beginCell } "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@ton/core'"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,e.jsx)(o.span,{className:"line",children:" "}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"ta"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"TonApiClient"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    baseUrl"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://tonapi.io'"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    apiKey"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'YOUR_API_KEY'"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"// Optional, improves limits and access"})]}),"\n",(0,e.jsx)(o.span,{className:"line",children:(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,e.jsx)(o.span,{className:"line",children:" "}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"normalizeHash"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Buffer"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"info"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:".type "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'external-in'"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"body"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".hash"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,e.jsx)(o.span,{className:"line",children:(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,e.jsx)(o.span,{className:"line",children:" "}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"cell"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"beginCell"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".storeUint"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:")    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"// external-in"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".storeUint"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:")    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"// addr_none"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".storeAddress"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"info"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:".dest)"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".storeUint"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:")    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"// import_fee = 0"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".storeBit"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:")    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"// no StateInit"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".storeBit"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:")     "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"// store body as reference"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".storeRef"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:".body)"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".endCell"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,e.jsx)(o.span,{className:"line",children:" "}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"cell"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".hash"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,e.jsx)(o.span,{className:"line",children:(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,e.jsx)(o.span,{className:"line",children:" "}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"trackTransaction"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"msgHashHex"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"normalizeHash"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(message"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".toString"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'hex'"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"transaction"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"ta"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"blockchain"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".getBlockchainTransactionByMessageHash"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(msgHashHex);"})]}),"\n",(0,e.jsx)(o.span,{className:"line",children:" "}),"\n",(0,e.jsxs)(o.span,{className:"line",children:[(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Transaction:'"}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" transaction);"})]}),"\n",(0,e.jsx)(o.span,{className:"line",children:(0,e.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})}o.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,l.a)(),s.components);return o?(0,e.jsx)(o,{...s,children:(0,e.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/tonapi/cookbook/tracking-transaction-hash.ts.mdx",route:"/tonapi/cookbook/tracking-transaction-hash",timestamp:1743458409e3,title:"Tracking Transaction Hash",headings:i},pageNextRoute:"/tonapi/cookbook/tracking-transaction-hash.ts"})}},function(s){s.O(0,[6997,9774,2888,179],function(){return s(s.s=9686)}),_N_E=s.O()}]);