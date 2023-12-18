"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[6355],{99195:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(97458),o=n(37627);const i={title:"Gravitino supported Catalogs",slug:"/trino-connector/supported-catalog",keyword:"gravitino connector trino",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},a=void 0,s={id:"trino-connector/supported-catalog",title:"Gravitino supported Catalogs",description:"The catalogs currently supported by the Gravitino connector are as follows:",source:"@site/docs/trino-connector/supported-catalog.md",sourceDirName:"trino-connector",slug:"/trino-connector/supported-catalog",permalink:"/docs/next/trino-connector/supported-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/datastrato/datastrato.com/edit/master/docs/trino-connector/supported-catalog.md",tags:[],version:"current",frontMatter:{title:"Gravitino supported Catalogs",slug:"/trino-connector/supported-catalog",keyword:"gravitino connector trino",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},sidebar:"tutorialSidebar",previous:{title:"Gravitino connector Configuration",permalink:"/docs/next/trino-connector/configuration"},next:{title:"Gravitino connector - Hive catalog",permalink:"/docs/next/trino-connector/catalog-hive"}},c={},d=[{value:"Create catalog",id:"create-catalog",level:2},{value:"Data type mapping between Trino and Gravitino",id:"data-type-mapping-between-trino-and-gravitino",level:2}];function l(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"The catalogs currently supported by the Gravitino connector are as follows:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/next/trino-connector/catalog-hive",children:"Hive"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/next/trino-connector/catalog-iceberg",children:"Iceberg"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/next/trino-connector/catalog-mysql",children:"MySQL"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/next/trino-connector/catalog-postgresql",children:"PostgreSQL"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"create-catalog",children:"Create catalog"}),"\n",(0,r.jsxs)(e.p,{children:["Trino currently does not support creating Gravitino managed catalogs, if you need to create a catalog, please refer to: ",(0,r.jsx)(e.a,{href:"/docs/next/manage-metadata-using-gravitino#create-a-catalog",children:"Create a Catalog"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"data-type-mapping-between-trino-and-gravitino",children:"Data type mapping between Trino and Gravitino"}),"\n",(0,r.jsxs)(e.p,{children:["Gravitino connector supports the following data type conversions between Trino and Gravitino currently. Depending on the detailed catalog, Gravitino may not support some data types conversion for this specific catalog, for example,\nHive does not support ",(0,r.jsx)(e.code,{children:"TIME"})," data type."]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Gravitino Type"}),(0,r.jsx)(e.th,{children:"Trino Type"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BooleanType"}),(0,r.jsx)(e.td,{children:"BOOLEAN"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ByteType"}),(0,r.jsx)(e.td,{children:"TINYINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ShortType"}),(0,r.jsx)(e.td,{children:"SMALLINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"IntegerType"}),(0,r.jsx)(e.td,{children:"INTEGER"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"LongType"}),(0,r.jsx)(e.td,{children:"BIGINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"FloatType"}),(0,r.jsx)(e.td,{children:"REAL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DoubleType"}),(0,r.jsx)(e.td,{children:"DOUBLE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DecimalType"}),(0,r.jsx)(e.td,{children:"DECIMAL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"StringType"}),(0,r.jsx)(e.td,{children:"VARCHAR"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"VarcharType"}),(0,r.jsx)(e.td,{children:"VARCHAR"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BinaryType"}),(0,r.jsx)(e.td,{children:"VARBINARY"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DateType"}),(0,r.jsx)(e.td,{children:"DATE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TimeType"}),(0,r.jsx)(e.td,{children:"TIME"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TimestampType"}),(0,r.jsx)(e.td,{children:"TIMESTAMP"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ArrayType"}),(0,r.jsx)(e.td,{children:"ARRAY"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"MapType"}),(0,r.jsx)(e.td,{children:"MAP"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"StructType"}),(0,r.jsx)(e.td,{children:"ROW"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["For more about Trino data types, please refer to ",(0,r.jsx)(e.a,{href:"https://trino.io/docs/current/language/types.html",children:"Trino data types"})," and Gravitino data types, please refer to ",(0,r.jsx)(e.a,{href:"/docs/next/manage-metadata-using-gravitino#gravitino-table-column-type",children:"Gravitino data types"}),"."]})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},37627:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>a});var r=n(52983);const o={},i=r.createContext(o);function a(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);