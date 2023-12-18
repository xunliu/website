"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[9276],{32014:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(97458),r=a(37627),s=a(81901);const n={index_title:"Materialized View",title:"What Is a Materialized View?",wrapperClassName:"career"},l="What Is a Materialized View?",o={type:"mdx",permalink:"/glossary/materialized-view",source:"@site/src/pages/glossary/materialized-view.md",title:"What Is a Materialized View?",description:"A materialized view is a database object that stores results from a pre-computed",frontMatter:{index_title:"Materialized View",title:"What Is a Materialized View?",wrapperClassName:"career"},unlisted:!1},d={},c=[{value:"Materialized views vs. traditional views",id:"materialized-views-vs-traditional-views",level:2},{value:"Refresh strategies",id:"refresh-strategies",level:2},{value:"Benefits and limitations",id:"benefits-and-limitations",level:2},{value:"Databases that support materialized views",id:"databases-that-support-materialized-views",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"what-is-a-materialized-view",children:"What Is a Materialized View?"}),"\n",(0,i.jsx)(t.p,{children:"A materialized view is a database object that stores results from a pre-computed\nquery. It is often used when the results of complex queries are accessed\nfrequently. By pre-computing and storing this data, users can more quickly\naccess this data rather than re-computing potentially expensive queries on the\nfly. Materialized views are refreshed periodically or triggered by updates to\nthe underlying data to keep the resulting view up to date."}),"\n",(0,i.jsx)(s.Z,{alt:"Diagram representing how a materialized view is created",height:342,src:"/img/glossary/materialized-view/materialized-view.webp",width:770,title:"A materialized view is a database object that stores results from a pre-computed\nquery."}),"\n",(0,i.jsx)(t.h2,{id:"materialized-views-vs-traditional-views",children:"Materialized views vs. traditional views"}),"\n",(0,i.jsx)(t.p,{children:"Materialized views differ from traditional views in that they are physically\nstored in the database. Traditional views are virtual in nature and executed on\nthe fly when they are accessed. Materialized views are pre-computed and\nphysically stored. Therefore, when querying against the materialized view, the\ndatabase does not need to re-run the associated query every time. Essentially,\nmaterialized view trades storage for query performance."}),"\n",(0,i.jsx)(t.h2,{id:"refresh-strategies",children:"Refresh strategies"}),"\n",(0,i.jsx)(t.p,{children:"There are several strategies for refreshing materialized views depending on the\ndatabase implementation:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Incremental/delta refresh"}),": Incremental (or delta) refresh updates the\nmaterialized view with only the changes made to the underlying data since the\nlast query. The system must keep track of some metadata (e.g., timestamp,\ntransaction log) to determine the delta and only update the changes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Complete refresh"}),": Materialized views are completely recalculated by\nre-issuing the underlying query. Complete refresh ensures that the view is\nalways up to date, but is slower and more resource intensive compared to\nincremental refresh."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Manual/on-demand refresh"}),": Manual or on-demand refresh only triggers\nupdates to the materialized view when a user or a system explicitly invokes\nthe refresh command. This is useful when the view does not need to update\nfrequently."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Automatic refresh"}),": Materialized views can also be refreshed automatically\nbased on some triggers or a predefined schedule via some trigger or predefined\nschedule."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"benefits-and-limitations",children:"Benefits and limitations"}),"\n",(0,i.jsx)(t.p,{children:"Materialized views provide a cost-efficient way to pre-compute and store\nresource-intensive operations that are frequently accessed. For example, you may\nbe collecting sensor data from your IoT system. If you need to calculate the\naverage data point (e.g., average temperature, cost) over a time period,\ncreating a materialized view will return the results much faster than computing\nthem on demand. Also, since materialized views update periodically or on some\ntriggers, it can be more resource efficient than computing these every time."}),"\n",(0,i.jsx)(t.p,{children:"On the other hand, since material views are physically stored, it will incur a\nbit more storage than simply utilizing views or running queries on demand. If\nthe query is not accessed frequently, the storage-to-performance tradeoff may\nnot be favorable. Lastly, materialized views are read-only, so it is not\nrecommended when the results may need some modifications."}),"\n",(0,i.jsx)(t.h2,{id:"databases-that-support-materialized-views",children:"Databases that support materialized views"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/CREATE-MATERIALIZED-VIEW.html",children:"Oracle"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/rules-materializedviews.html",children:"PostgreSQL"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/sql/t-sql/statements/create-materialized-view-as-select-transact-sql?view=azure-sqldw-latest",children:"Microsoft SQL Server"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/Hive/Materialized+views",children:"Apache Hive"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/materialized-views-intro",children:"Google BigQuery"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},81901:(e,t,a)=>{a.d(t,{Z:()=>m});var i=a(28934);a(52983);const r="image_yt7U",s="shadow_K2GZ",n="margin_cHYA",l="title_SOBy",o="small_nBvZ",d="caption_iPQj";var c=a(97458);const h=e=>{let{alt:t,height:a,margin:h,shadow:m,small:u,src:p,title:w,width:v}=e;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("img",{alt:t,className:(0,i.Z)(r,{[n]:h,[s]:m,[o]:u,[l]:null!=w}),height:a,src:p,width:v,loading:"lazy"}),null!=w&&(0,c.jsx)("figcaption",{className:d,children:w})]})};h.defaultProps={margin:!0,shadow:!0,small:!1};const m=h},37627:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>n});var i=a(52983);const r={},s=i.createContext(r);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);