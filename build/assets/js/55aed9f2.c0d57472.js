"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[8471],{12470:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=t(97458),i=t(37627);const r={title:"Gravitino - the unified metadata lake",authors:["jerryshao"],description:"introduction of gravitino",tags:["gravitino","metadata lake","engineering"],slug:"gravitino-unified-metadata-lake"},o=void 0,s={permalink:"/blog/gravitino-unified-metadata-lake",source:"@site/blog/2023-12-12-gravitino-the-unified-metadata-lake/index.mdx",title:"Gravitino - the unified metadata lake",description:"introduction of gravitino",date:"2023-12-12T00:00:00.000Z",formattedDate:"December 12, 2023",tags:[{label:"gravitino",permalink:"/blog/tags/gravitino"},{label:"metadata lake",permalink:"/blog/tags/metadata-lake"},{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:5.495,hasTruncateMarker:!1,authors:[{name:"Jerry Shao",title:"CTO",url:"https://github.com/jerryshao",email:"jerryshao@datastrato.com",imageURL:"https://github.com/jerryshao.png",key:"jerryshao"}],frontMatter:{title:"Gravitino - the unified metadata lake",authors:["jerryshao"],description:"introduction of gravitino",tags:["gravitino","metadata lake","engineering"],slug:"gravitino-unified-metadata-lake"},unlisted:!1,prevItem:{title:"Embracing Open Source - Gravitino is an Open Source Data and AI Multi-Cloud Solution",permalink:"/blog/gravitino-open-source"},nextItem:{title:"Tackling Data Silos - Challenges and Potential Solutions",permalink:"/blog/tackling-data-silos"}},d={authorsImageUrls:[void 0]},l=[{value:"Data silos - the eternal problem around data",id:"data-silos---the-eternal-problem-around-data",level:2},{value:"Cloud exacerbates the data silos",id:"cloud-exacerbates-the-data-silos",level:2},{value:"From data analytics platform to data intelligence platform",id:"from-data-analytics-platform-to-data-intelligence-platform",level:2},{value:"Why unified metadata lake",id:"why-unified-metadata-lake",level:2},{value:"Gravitino - the unified metadata lake",id:"gravitino---the-unified-metadata-lake",level:2},{value:"The architecture of Gravitino",id:"the-architecture-of-gravitino",level:2},{value:"The key features of Gravitino",id:"the-key-features-of-gravitino",level:2},{value:"Unified metadata management and governance",id:"unified-metadata-management-and-governance",level:3},{value:"Direct metadata management",id:"direct-metadata-management",level:3},{value:"Geo-distribution support",id:"geo-distribution-support",level:3},{value:"Multi-engine support",id:"multi-engine-support",level:3},{value:"Data + AI asset management",id:"data--ai-asset-management",level:3},{value:"The roadmap of Gravitino",id:"the-roadmap-of-gravitino",level:2}];function c(e){const a={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Gravitino - the unified metadata lake",src:t(1870).Z+"",width:"1280",height:"720"})}),"\n",(0,n.jsx)(a.h2,{id:"data-silos---the-eternal-problem-around-data",children:"Data silos - the eternal problem around data"}),"\n",(0,n.jsx)(a.p,{children:"Data silos have long been a persistent issue in the world of data management. They create barriers and inefficiencies by separating data into isolated systems, making it difficult to access and analyze information holistically."}),"\n",(0,n.jsx)(a.p,{children:"A typical data platform architecture combines several data stacks to meet different needs."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"data silos",src:t(93765).Z+"",width:"1162",height:"618"})}),"\n",(0,n.jsx)(a.p,{children:"This architecture inevitably introduces the data silos between the stacks."}),"\n",(0,n.jsxs)(a.p,{children:["In response, ",(0,n.jsx)(a.strong,{children:"Data Lakehouses"})," tried to solve this problem by introducing new open table formats to provide the abilities of data warehouse with the flexibility of data lake storage, such as AWS S3, Azure ADLS, etc. This centralized solution enabled organizations to break down data silos and achieve a comprehensive view of their data assets while retaining scalability."]}),"\n",(0,n.jsx)(a.p,{children:"But still, it cannot meet the requirements of modern data analytics:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"The performance of the open table format cannot compete with some specialized data storage or formats."}),"\n",(0,n.jsx)(a.li,{children:"The challenge of a universal format to meet different data and AI scenarios is not trivial."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"cloud-exacerbates-the-data-silos",children:"Cloud exacerbates the data silos"}),"\n",(0,n.jsx)(a.p,{children:"Currently, lots of companies and organizations introduce multi-regional or multi-cloud deployment for different reasons."}),"\n",(0,n.jsx)(a.p,{children:"With the introduction of multi-regional or multi-cloud deployment, the problem of data silos becomes even more pronounced. It becomes challenging to maintain a unified view of the data across different regions or cloud providers."}),"\n",(0,n.jsx)(a.h2,{id:"from-data-analytics-platform-to-data-intelligence-platform",children:"From data analytics platform to data intelligence platform"}),"\n",(0,n.jsx)(a.p,{children:"In recent years, there has been a shift from traditional data analytics platforms to more advanced data intelligence platforms. These new platforms not only analyze data but also provide insights and recommendations for decision-making."}),"\n",(0,n.jsx)(a.p,{children:"The shifting from a data analytics platform to a data intelligence platform reflects the increasing demands of metadata to train, prompt, and understand the organization."}),"\n",(0,n.jsx)(a.h2,{id:"why-unified-metadata-lake",children:"Why unified metadata lake"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"With the increasing complexities of modern data architecture, plus the trends of moving towards multi-regional or multi-cloud deployments, the centralized data lake or data lakehouse house solution becomes quite a challenge."}),"\n",(0,n.jsx)(a.li,{children:"With the increasing need to shift to a data intelligence platform, the importance of complete, high-quality metadata becomes quite important."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["So, instead of centralizing all the data into ",(0,n.jsx)(a.strong,{children:"ONE"})," data lake to achieve SSOT (Single Source Of Truth), we propose a new architecture called ",(0,n.jsx)(a.strong,{children:"metadata lake"})," to unify all the metadata across data stacks, regions, and clouds."]}),"\n",(0,n.jsx)(a.h2,{id:"gravitino---the-unified-metadata-lake",children:"Gravitino - the unified metadata lake"}),"\n",(0,n.jsx)(a.p,{children:"Gravitino is a high-performance, geo-distributed, and federated metadata lake. It manages the metadata directly in different sources, types, and regions. It also provides users with unified metadata access for data and AI assets."}),"\n",(0,n.jsx)(a.p,{children:"The goal of Gravitino is to provide the user with a unified data management and governance platform no matter where the data stored."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Gravitino architecture",src:t(76674).Z+"",width:"1376",height:"674"})}),"\n",(0,n.jsx)(a.p,{children:"Gravitino aims to provide several key features:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"SSOT (Single Source of Truth) for multi-regional data with geo-distributed architecture support."}),"\n",(0,n.jsx)(a.li,{children:"Unified Data + AI asset management for both users and engines."}),"\n",(0,n.jsx)(a.li,{children:"Security in one place, centralizes the security for different sources."}),"\n",(0,n.jsx)(a.li,{children:"Built-in data management + data access management."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"the-architecture-of-gravitino",children:"The architecture of Gravitino"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Gravitino model architecture",src:t(28777).Z+"",width:"2226",height:"1399"})}),"\n",(0,n.jsx)(a.p,{children:"Gravitino model architecture"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Functionality Layer"}),": Gravitino provides a set of APIs for users to manage and govern the metadata, including standard metadata creation, update, and delete operations. In the meantime, it also provides the ability to govern the metadata in a unified way, including access control, discovery, and others."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Interface Layer"}),": Gravitino provides standard REST APIs as the interface layer for users. Future support includes Thrift and JDBC interfaces."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Core Object Model"}),": Gravitino defines a generic metadata model to represent the metadata in different sources and types and manages them in a unified way."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Connection Layer"}),": In the connection layer, Gravitino provides a set of connectors to connect to different metadata sources, including Apache Hive, MySQL, PostgreSQL, and others. It also allows connecting and managing heterogeneous metadata other than Tabular data."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"the-key-features-of-gravitino",children:"The key features of Gravitino"}),"\n",(0,n.jsx)(a.h3,{id:"unified-metadata-management-and-governance",children:"Unified metadata management and governance"}),"\n",(0,n.jsx)(a.p,{children:"Gravitino abstracts the unified metadata models and APIs for different kinds of metadata sources. For example, relational metadata models for tabular data, like Hive, MySQL, PostgreSQL, etc. File metadata model for all the unstructured data, like HDFS, S3, and others."}),"\n",(0,n.jsx)(a.p,{children:"Besides the unified metadata models, Gravitino also provides a unified metadata governance layer to manage the metadata in a unified way, including access control, auditing, discovery, and others."}),"\n",(0,n.jsx)(a.h3,{id:"direct-metadata-management",children:"Direct metadata management"}),"\n",(0,n.jsx)(a.p,{children:"Unlike traditional metadata management systems, which need to collect the metadata actively or passively from underlying systems, Gravitino manages these systems directly. It provides a set of connectors to connect to different metadata sources, the changes in Gravitino will directly reflect in the underlying systems, and vice versa."}),"\n",(0,n.jsx)(a.h3,{id:"geo-distribution-support",children:"Geo-distribution support"}),"\n",(0,n.jsx)(a.p,{children:"Gravitino supports geo-distribution deployment, which means different instances of Gravitino can deploy in different regions or clouds, and they can connect to get the metadata from each other. With this, users can get a global view of metadata across the regions or clouds."}),"\n",(0,n.jsx)(a.h3,{id:"multi-engine-support",children:"Multi-engine support"}),"\n",(0,n.jsxs)(a.p,{children:["Gravitino supports different query engines to access the metadata. Currently, it supports ",(0,n.jsx)(a.a,{href:"https://trino.io/",children:"Trino"}),", users can use Trino to query the metadata and data without needing to change the existing SQL dialects."]}),"\n",(0,n.jsxs)(a.p,{children:["In the meantime, other query engine support is on the roadmap, including ",(0,n.jsx)(a.a,{href:"https://spark.apache.org/",children:"Apache Spark"}),", ",(0,n.jsx)(a.a,{href:"https://flink.apache.org/",children:"Apache Flink"}),", and others."]}),"\n",(0,n.jsx)(a.h3,{id:"data--ai-asset-management",children:"Data + AI asset management"}),"\n",(0,n.jsx)(a.p,{children:"Gravitino supports managing traditional tabular data as well as new AI types of data, like features, vectors, models, etc. The combination of data and AI asset management gives the organization an integrated management of data everywhere."}),"\n",(0,n.jsx)(a.p,{children:"There are still several features we don\u2019t cover here, we will introduce them one by one in the follow-up blogs, please stay tuned."}),"\n",(0,n.jsx)(a.h2,{id:"the-roadmap-of-gravitino",children:"The roadmap of Gravitino"}),"\n",(0,n.jsx)(a.p,{children:"The roadmap of Gravitino includes several key features and enhancements that are planned for future development. These include expanding support for additional query engines such as Apache Spark and Apache Flink, further improving the geo-distribution capabilities, and enhancing the unified metadata governance layer. Additionally, Gravitino aims to incorporate advanced features for data and AI asset management, ensuring that organizations can effectively leverage their data assets for AI model development and deployment. As Gravitino continues to evolve, it will remain focused on providing comprehensive solutions for unified metadata management and governance, catering to the diverse needs of modern data-driven enterprises."}),"\n",(0,n.jsx)(a.p,{children:"Today, we open-sourced Gravitino, by open-sourcing the project, we welcome collaboration and innovation from all of you. This move will not only foster a vibrant developer community but also accelerate the evolution of Gravitino, ensuring that it remains at the forefront of the data and AI area."})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},93765:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/data-silos-fe484bee1cc353f5c4a5c2bf29ac5b21.png"},76674:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/gravitino-architecture-4d81bbc7f5ae20b65a3831aae287b8bd.png"},28777:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/gravitino-model-arch-d6af3d8cb60b4c347d8fb840351c3b83.png"},1870:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/gravitino-unified-metadata-lake-c9c8dbd6b0ca5d1f8242833d16464a73.png"},37627:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>o});var n=t(52983);const i={},r=n.createContext(i);function o(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);