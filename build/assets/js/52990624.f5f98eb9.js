"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[9290],{60201:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(97458),r=n(37627);const i={title:"Gravitino connector Configuration",slug:"/trino-connector/configuration",keyword:"gravitino connector trino",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},c=void 0,s={id:"trino-connector/configuration",title:"Gravitino connector Configuration",description:"| Property           | Type   | Default Value         | Description                                                                                                                                                                                                                                                                                                         | Required | Since Version |",source:"@site/docs/trino-connector/configuration.md",sourceDirName:"trino-connector",slug:"/trino-connector/configuration",permalink:"/docs/next/trino-connector/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/datastrato/datastrato.com/edit/master/docs/trino-connector/configuration.md",tags:[],version:"current",frontMatter:{title:"Gravitino connector Configuration",slug:"/trino-connector/configuration",keyword:"gravitino connector trino",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},sidebar:"tutorialSidebar",previous:{title:"Gravitino connector installation",permalink:"/docs/next/trino-connector/installation"},next:{title:"Gravitino supported Catalogs",permalink:"/docs/next/trino-connector/supported-catalog"}},a={},d=[];function l(t){const e={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...t.components};return(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Property"}),(0,o.jsx)(e.th,{children:"Type"}),(0,o.jsx)(e.th,{children:"Default Value"}),(0,o.jsx)(e.th,{children:"Description"}),(0,o.jsx)(e.th,{children:"Required"}),(0,o.jsx)(e.th,{children:"Since Version"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"connector.name"}),(0,o.jsx)(e.td,{children:"string"}),(0,o.jsx)(e.td,{children:"(none)"}),(0,o.jsxs)(e.td,{children:["The ",(0,o.jsx)(e.code,{children:"connector.name"})," defines the name of Trino connector, this value is always 'gravitino'."]}),(0,o.jsx)(e.td,{children:"Yes"}),(0,o.jsx)(e.td,{children:"0.2.0"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"gravitino.metalake"}),(0,o.jsx)(e.td,{children:"string"}),(0,o.jsx)(e.td,{children:"(none)"}),(0,o.jsxs)(e.td,{children:["The ",(0,o.jsx)(e.code,{children:"gravitino.metalake"})," defines which metalake in Gravitino server the Trino connector uses. Trino connector should set it at start, the value of ",(0,o.jsx)(e.code,{children:"gravitino.metalake"})," needs to be a valid name, Trino connector can detect and load the metalake with catalogs, schemas and tables once created and keep in sync."]}),(0,o.jsx)(e.td,{children:"Yes"}),(0,o.jsx)(e.td,{children:"0.2.0"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"gravitino.url"}),(0,o.jsx)(e.td,{children:"string"}),(0,o.jsx)(e.td,{children:(0,o.jsx)(e.a,{href:"http://localhost:8090",children:"http://localhost:8090"})}),(0,o.jsxs)(e.td,{children:["The ",(0,o.jsx)(e.code,{children:"gravitino.url"})," defines the connection URL of the Gravitino server, the default value is ",(0,o.jsx)(e.code,{children:"http://localhost:8090"}),". Trino connector can detect and connect to Gravitino server once it is ready, no need to start Gravitino server beforehand."]}),(0,o.jsx)(e.td,{children:"Yes"}),(0,o.jsx)(e.td,{children:"0.2.0"})]})]})]})}function h(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},37627:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>c});var o=n(52983);const r={},i=o.createContext(r);function c(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);