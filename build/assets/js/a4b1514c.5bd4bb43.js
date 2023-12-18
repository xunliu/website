"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[6894],{5106:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(97458),n=i(37627),s=i(81901);const r={index_title:"High Cardinality",title:"What Is High Cardinality?",wrapperClassName:"career"},l="What Is High Cardinality?",o={type:"mdx",permalink:"/glossary/high-cardinality",source:"@site/src/pages/glossary/high-cardinality.md",title:"What Is High Cardinality?",description:"Cardinality is a data attribute that captures how many distinct values make up a",frontMatter:{index_title:"High Cardinality",title:"What Is High Cardinality?",wrapperClassName:"career"},unlisted:!1},d={},c=[{value:"High cardinality in time-series data",id:"high-cardinality-in-time-series-data",level:2},{value:"Challenges for databases with high cardinality datasets",id:"challenges-for-databases-with-high-cardinality-datasets",level:2},{value:"Dealing with high cardinality in Datastrato",id:"dealing-with-high-cardinality-in-datastrato",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function h(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"what-is-high-cardinality",children:"What Is High Cardinality?"}),"\n",(0,t.jsx)(a.p,{children:"Cardinality is a data attribute that captures how many distinct values make up a\nset. In turn, having high cardinality data means that there is a large number of\nunique values in the dataset."}),"\n",(0,t.jsxs)(a.p,{children:["In the context of databases, cardinality often refers to the number of distinct\nelements in a single column. For example, in a database storing e-commerce data,\na column might store ",(0,t.jsx)(a.code,{children:"customerId"})," whereas others may store ",(0,t.jsx)(a.code,{children:"productId"})," or\n",(0,t.jsx)(a.code,{children:"productCategory"}),". ",(0,t.jsx)(a.code,{children:"customerId"})," and ",(0,t.jsx)(a.code,{children:"productId"})," are high-cardinality attributes\nwith potentially unbounded distinct values. On the other hand, ",(0,t.jsx)(a.code,{children:"productCategory"}),"\nmay be a low-cardinality attribute in comparison with a smaller set of values."]}),"\n",(0,t.jsx)(a.p,{children:"When discussing the cardinality of the entire dataset, to calculate the total\nnumber of unique combinations, the cardinality of each of the columns of\ninterest is multiplied. Taking our e-commerce example, let\u2019s say we had 10\ncustomers, 20 products, and 2 product categories. In this case, the cardinality\nof the dataset would be 10 * 20 * 2 = 400."}),"\n",(0,t.jsx)(a.h2,{id:"high-cardinality-in-time-series-data",children:"High cardinality in time-series data"}),"\n",(0,t.jsxs)(a.p,{children:["Time-series data tends to have high cardinality since each row will usually have\nmany columns that act as tags. For example, in industrial IoT systems, a\n",(0,t.jsx)(a.a,{href:"/glossary/time-series-database/",children:"time-series database"})," may track device types,\nfirmware versions, locations, as well as various sensor readings. Since\ncardinality is multiplicative, simply adding a new field such as a new firmware\nversion will lead to exponential growth in cardinality. Time-series data in\nother verticals display similar characteristics: financial data and network\nmonitoring all have many columns with high cardinality such as stock ticker, IP,\nport, protocol, and other metadata fields."]}),"\n",(0,t.jsx)(s.Z,{alt:"This network analytics table has high cardinality because the combination of unique values for Source IP, Source Port, and Protocol is very large.\n",height:342,src:"/img/glossary/high-cardinality/high-cardinality.webp",width:770,title:"This network analytics table has high cardinality because the combination of unique values for Source IP, Source Port, and Protocol is very large.\n"}),"\n",(0,t.jsx)(a.h2,{id:"challenges-for-databases-with-high-cardinality-datasets",children:"Challenges for databases with high cardinality datasets"}),"\n",(0,t.jsx)(a.p,{children:"High-cardinality data can present challenges for databases in terms of\nperformance. Depending on the underlying data model used, storing and indexing\ndatasets with high cardinality can significantly impact performance negatively.\nAs cardinality grows, the amount of data to be processed explodes, thus leading\nto degraded write and query performance."}),"\n",(0,t.jsx)(a.p,{children:"Underneath the hood, the challenge stems from the way databases store and\nprocess data. For example, in InfluxDB and some other time-series databases,\neach time series is stored separately in its own group of files. When storing\nthousands or millions of time series in the same table, write and full-scan\nquery performance drops significantly. The reason is that disk writes and reads\nhave much fewer sequential patterns in these high-cardinality scenarios. As a\nresult, memory requirements grow exponentially with the number of unique time\nseries."}),"\n",(0,t.jsx)(a.p,{children:"Other symptoms of databases struggling with high-cardinality data include:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"High memory usage"}),"\n",(0,t.jsx)(a.li,{children:"Slow query performance"}),"\n",(0,t.jsx)(a.li,{children:"Back pressure"}),"\n",(0,t.jsx)(a.li,{children:"High CPU usage"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"dealing-with-high-cardinality-in-datastrato",children:"Dealing with high cardinality in Datastrato"}),"\n",(0,t.jsxs)(a.p,{children:["Datastrato uses a dense, ",(0,t.jsx)(a.a,{href:"/docs/concept/storage-model/",children:"column-based storage model"}),"\nwhere each column is stored separately in its own native format. All the rows\nare sorted by time and split into\n",(0,t.jsx)(a.a,{href:"/docs/concept/partitions/",children:"time-based partitions"})," to preserve sequential\npatterns. This allows Datastrato to maintain a good level of performance in all\nscenarios, including high cardinality."]}),"\n",(0,t.jsx)(a.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/blog/2021/06/16/high-cardinality-time-series-data-performance",children:"How databases handle 10 million devices in high-cardinality benchmarks"})}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},81901:(e,a,i)=>{i.d(a,{Z:()=>u});var t=i(28934);i(52983);const n="image_yt7U",s="shadow_K2GZ",r="margin_cHYA",l="title_SOBy",o="small_nBvZ",d="caption_iPQj";var c=i(97458);const h=e=>{let{alt:a,height:i,margin:h,shadow:u,small:m,src:g,title:y,width:p}=e;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("img",{alt:a,className:(0,t.Z)(n,{[r]:h,[s]:u,[o]:m,[l]:null!=y}),height:i,src:g,width:p,loading:"lazy"}),null!=y&&(0,c.jsx)("figcaption",{className:d,children:y})]})};h.defaultProps={margin:!0,shadow:!0,small:!1};const u=h},37627:(e,a,i)=>{i.d(a,{Z:()=>l,a:()=>r});var t=i(52983);const n={},s=t.createContext(n);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);