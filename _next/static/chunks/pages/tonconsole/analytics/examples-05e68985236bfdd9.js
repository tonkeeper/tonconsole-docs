(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6210],{874:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tonconsole/analytics/examples",function(){return l(393)}])},393:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return i}});var o=l(5893),r=l(6997),n=l(2643);let i=[{depth:4,value:"Select all wallets which own AMBRA jettons and Whales Club NFTs.",id:"select-all-wallets-which-own-ambra-jettons-and-whales-club-nfts"},{depth:4,value:"TPS per hour",id:"tps-per-hour"},{depth:4,value:"Operations by type for last day",id:"operations-by-type-for-last-day"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",h4:"h4",pre:"pre",code:"code",span:"span"},(0,n.a)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{children:"Examples"}),"\n",(0,o.jsx)(e.h4,{id:"select-all-wallets-which-own-ambra-jettons-and-whales-club-nfts",children:"Select all wallets which own AMBRA jettons and Whales Club NFTs."}),"\n",(0,o.jsx)(e.pre,{"data-language":"sql","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"sql","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" human_readable"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" blockchain.accounts a"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"JOIN"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT DISTINCT"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" nft.owner_account_id"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" getmethods.get_nft_data nft"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"JOIN"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" getmethods.get_wallet_data jetton"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"ON"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" jetton.owner_account_id "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" nft.owner_account_id"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" nft.collection_account_id "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'0:ef4453182ddc66bd8dd393e71f58c2ea0e75c5fc47253b6169e30c23df75a194'"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"AND"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" jetton.jetton_account_id "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'0:9c2c05b9dfb2a7460fda48fae7409a32623399933a98a7a15599152f37572b49'"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") t "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"ON"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" a.id "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" t.owner_account_id"})]})]})}),"\n",(0,o.jsx)(e.h4,{id:"tps-per-hour",children:"TPS per hour"}),"\n",(0,o.jsx)(e.pre,{"data-language":"sql","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"sql","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" utime "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3600"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3600"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3600"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Count"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3600"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" blockchain.transactions"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" utime "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" extract(epoch "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"Now"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" interval "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'7 days'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")::"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"bigint"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"GROUP BY"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" utime "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3600"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"ORDER BY"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" utime "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3600"})]})]})}),"\n",(0,o.jsx)(e.h4,{id:"operations-by-type-for-last-day",children:"Operations by type for last day"}),"\n",(0,o.jsx)(e.pre,{"data-language":"sql","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"sql","data-theme":"default",children:[(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"CASE"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHEN"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" m.decoded_operation "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"THEN"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" m.decoded_operation"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHEN"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" m.op_code "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"IS NOT NULL"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"THEN"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'unknown'"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"ELSE"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SimpleTransfer'"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"END"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" op, "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"count"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" blockchain.messages m"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"JOIN"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" blockchain.transactions txs "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"ON"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" txs.in_msg "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" m.id"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" utime "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" extract(EPOCH "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"now"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" interval "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'1 day'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")::"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"bigint"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"GROUP BY"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" op"})]})]})})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,n.a)(),s.components);return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/tonconsole/analytics/examples.mdx",route:"/tonconsole/analytics/examples",timestamp:1736788863e3,title:"Examples",headings:i},pageNextRoute:"/tonconsole/analytics/examples"})}},function(s){s.O(0,[6997,9774,2888,179],function(){return s(s.s=874)}),_N_E=s.O()}]);