"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[1723],{88999:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(97458),s=t(37627),i=t(81901);const r={index_title:"Relational Database",title:"What Is a Relational Database?",wrapperClassName:"career"},o="What Is a Relational Database?",l={type:"mdx",permalink:"/glossary/relational-database",source:"@site/src/pages/glossary/relational-database.md",title:"What Is a Relational Database?",description:"A relational database is a type of database that stores and manages data in a",frontMatter:{index_title:"Relational Database",title:"What Is a Relational Database?",wrapperClassName:"career"},unlisted:!1},d={},c=[{value:"Relational model",id:"relational-model",level:2},{value:"Relational model operations",id:"relational-model-operations",level:2},{value:"Characteristics of relational databases",id:"characteristics-of-relational-databases",level:2},{value:"Relational databases vs. non-relational databases",id:"relational-databases-vs-non-relational-databases",level:2},{value:"Popular relational databases",id:"popular-relational-databases",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function h(a){const e={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"what-is-a-relational-database",children:"What Is a Relational Database?"}),"\n",(0,n.jsx)(e.p,{children:"A relational database is a type of database that stores and manages data in a\ntabular format, using a relational model. Data is organized into a collection of\ntables consisting of rows and columns. Each data point in a relational database\nis written to a row with a unique ID (key) with other attributes corresponding\nto each column. Data is then retrieved via Structured Query Language (SQL),\nwhich is why relational databases are often called SQL databases."}),"\n",(0,n.jsx)(i.Z,{alt:"Diagram showing an example of a relational database with data in the Transaction table mapped to the Product table and the Customer table.",height:342,src:"/img/glossary/relational-database/relational-database.webp",width:770,title:"Example of a relational database: the data in the Transaction table is mapped to the Product table and the Customer table."}),"\n",(0,n.jsx)(e.p,{children:"Relational databases are commonly used for scenarios where data can be logically\nmapped to the relational model. Because data is stored in a structured manner,\nrelational databases can perform complex queries across tables efficiently.\nFinally, due to their transactional guarantees, relational databases are a great\nchoice where data consistency and transactionality are of utmost importance such\nas in e-commerce or banking."}),"\n",(0,n.jsx)(e.h2,{id:"relational-model",children:"Relational model"}),"\n",(0,n.jsxs)(e.p,{children:["The relational database model was first developed by Edgar F. Codd from IBM in\nthe 1970s. In this model, data is represented by related logical tables linked\nthrough attribute relationships. For example, to represent a user\u2019s bank account\ninformation, we may have a ",(0,n.jsx)(e.strong,{children:"Transactions"})," table and an ",(0,n.jsx)(e.strong,{children:"Accounts"})," table."]}),"\n",(0,n.jsx)(e.p,{children:"The transactions table may hold information about each deposit and withdrawal\nsuch as the source, destination, and amount. Then in the accounts table, we may\nhave information about each account such as type (e.g., checking vs. savings)\nand the owner. These two tables may be linked by account ID so that each bank\nuser can easily find their transaction information per their account."}),"\n",(0,n.jsx)(e.p,{children:"A relational model is an intuitive way to represent data. Due to its simplicity\nand widespread adoption, it has been the foundation for relational database\nsystems that are used today."}),"\n",(0,n.jsx)(e.h2,{id:"relational-model-operations",children:"Relational model operations"}),"\n",(0,n.jsx)(e.p,{children:"Relational databases surface data via relational model operations. Some\nimportation operations include:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Select"}),": Select is used to choose specific rows from a table based on a\ncondition. It can return all the data when unspecified or filter out a subset\nof the rows."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Project"}),": Projection is used to choose specific columns from a table based\non a condition."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Join"}),": Join operation is used to combine rows from two or more tables based\non related columns."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Union"}),": Union combines the result of two or more select operations into a\nsingle result set."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"characteristics-of-relational-databases",children:"Characteristics of relational databases"}),"\n",(0,n.jsx)(e.p,{children:"In relational databases, data is typically stored and accessed in a row format.\nIn order to avoid full scans when selecting data, relational databases utilize\nindexes to quickly find the relevant rows to return."}),"\n",(0,n.jsx)(e.p,{children:"Also, relational databases are often marked by their ACID properties. These\nproperties are:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Atomicity"}),": Atomicity guarantees that all operations in a transaction\neither succeed or fail. If any part of an atomic transaction fails, then the\nentire transaction is rolled back. Think of a classic banking situation where\nyou want to guarantee that when you pay someone, the amount being withdrawn is\nonly debited when the recipient successfully can access that amount."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Consistency"}),": Consistency ensures that the database remains in a\nconsistent, valid state after each transaction. This means that transactions\nshould not violate any constraints, triggers, or other rules of the database.\nGoing back to the banking example, if you have spending limits or overdraft\nprotections set, any attempts to cross those limits should fail."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Isolation"}),": Isolation guarantees that transactions executed concurrently\nshould produce an end state as if the transactions were executed sequentially.\nIf a user had $100 in the bank and tried to withdraw $10 at the same time, the\nremaining balance should read\n$80. If isolation guarantees are broken, the database may return $90 as the\nbalance."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Durability"}),": Durability means that once a transaction is committed, those\nchanges become permanent. For our banking example, an ATM should return the\nsame balance even after a power outage."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"relational-databases-vs-non-relational-databases",children:"Relational databases vs. non-relational databases"}),"\n",(0,n.jsxs)(e.p,{children:["The table below compares the traits of relational and\n",(0,n.jsx)(e.a,{href:"/glossary/non-relational-database/",children:"non-relational databases"}),":"]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{children:"Relational Databases"}),(0,n.jsx)(e.th,{children:"Non-relational Databases"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Data Model"}),(0,n.jsx)(e.td,{children:"Relational"}),(0,n.jsx)(e.td,{children:"Key-value, document, graph, search, time-series"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Query Language"}),(0,n.jsx)(e.td,{children:"SQL"}),(0,n.jsx)(e.td,{children:"Varies, including SQL"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Use Cases"}),(0,n.jsx)(e.td,{children:"Structured data, complex querying"}),(0,n.jsx)(e.td,{children:"Unstructured or semi-structured data, high write-throughput"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Data Consistency"}),(0,n.jsx)(e.td,{children:"Strong consistency (ACID)"}),(0,n.jsx)(e.td,{children:"Eventual consistency"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Examples"}),(0,n.jsx)(e.td,{children:"MySQL, PostgreSQL, SQL Server"}),(0,n.jsx)(e.td,{children:"MongoDB, Cassandra, Redis, DynamoDB"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"popular-relational-databases",children:"Popular relational databases"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://www.mysql.com",children:"MySQL"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://www.postgresql.org",children:"PostgreSQL"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://www.microsoft.com/en-GB/sql-server/sql-server-downloads",children:"Microsoft SQL Server"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://www.oracle.com/",children:"Oracle"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://mariadb.org/",children:"MariaDB"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://aws.amazon.com/rds/aurora/",children:"Amazon Aurora"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://itnext.io/migrating-from-relational-databases-to-time-series-databases-9f059a3e34cb",children:"Migrating from Relational Databases to Time-series Databases"})})]})}function u(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(h,{...a})}):h(a)}},81901:(a,e,t)=>{t.d(e,{Z:()=>u});var n=t(28934);t(52983);const s="image_yt7U",i="shadow_K2GZ",r="margin_cHYA",o="title_SOBy",l="small_nBvZ",d="caption_iPQj";var c=t(97458);const h=a=>{let{alt:e,height:t,margin:h,shadow:u,small:m,src:b,title:p,width:x}=a;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("img",{alt:e,className:(0,n.Z)(s,{[r]:h,[i]:u,[l]:m,[o]:null!=p}),height:t,src:b,width:x,loading:"lazy"}),null!=p&&(0,c.jsx)("figcaption",{className:d,children:p})]})};h.defaultProps={margin:!0,shadow:!0,small:!1};const u=h},37627:(a,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var n=t(52983);const s={},i=n.createContext(s);function r(a){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function o(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:r(a.components),n.createElement(i.Provider,{value:e},a.children)}}}]);