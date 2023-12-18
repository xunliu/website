"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[200],{21368:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=i(97458),d=i(37627);const s={title:"Apache Hive catalog",slug:"/apache-hive-catalog",date:new Date("2023-12-10T00:00:00.000Z"),keyword:"hive catalog",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},n=void 0,l={id:"apache-hive-catalog",title:"Apache Hive catalog",description:"Introduction",source:"@site/versioned_docs/version-0.3.0/apache-hive-catalog.md",sourceDirName:".",slug:"/apache-hive-catalog",permalink:"/docs/0.3.0/apache-hive-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/datastrato/datastrato.com/edit/master/docs/apache-hive-catalog.md",tags:[],version:"0.3.0",frontMatter:{title:"Apache Hive catalog",slug:"/apache-hive-catalog",date:"2023-12-10T00:00:00.000Z",keyword:"hive catalog",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},sidebar:"tutorialSidebar",previous:{title:"Gravitino Iceberg REST catalog service",permalink:"/docs/0.3.0/iceberg-rest-service"},next:{title:"JDBC MySQL catalog",permalink:"/docs/0.3.0/jdbc-mysql-catalog"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table partitions",id:"table-partitions",level:4},{value:"Table sort orders and distributions",id:"table-sort-orders-and-distributions",level:4},{value:"Table column types",id:"table-column-types",level:4},{value:"Table properties",id:"table-properties",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter operations",id:"alter-operations",level:4},{value:"Alter table",id:"alter-table",level:5},{value:"Alter column",id:"alter-column",level:5},{value:"Alter partition",id:"alter-partition",level:5}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["Gravitino offers the capability to utilize ",(0,r.jsx)(t.a,{href:"https://hive.apache.org",children:"Apache Hive"})," as a catalog for metadata management."]}),"\n",(0,r.jsx)(t.h3,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The Hive catalog requires a Hive Metastore Service (HMS), or a compatible implementation of the HMS, such as AWS Glue."}),"\n",(0,r.jsx)(t.li,{children:"The Gravitino must have network access to the Hive metastore service with the Thrift protocol."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The Hive catalog is available for Apache Hive ",(0,r.jsx)(t.strong,{children:"2.x"})," only. Support for Apache Hive 3.x is under development."]})}),"\n",(0,r.jsx)(t.h2,{id:"catalog",children:"Catalog"}),"\n",(0,r.jsx)(t.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,r.jsx)(t.p,{children:"The Hive catalog supports to create, update, and delete databases and tables in the HMS."}),"\n",(0,r.jsx)(t.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"metastore.uris"})}),(0,r.jsxs)(t.td,{children:["The Hive metastore service URIs, separate multiple addresses with commas. Such as ",(0,r.jsx)(t.code,{children:"thrift://127.0.0.1:9083"})]}),(0,r.jsx)(t.td,{children:"(none)"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"client.pool-size"})}),(0,r.jsx)(t.td,{children:"The maximum number of Hive metastore clients in the pool for Gravitino."}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gravitino.bypass."})}),(0,r.jsxs)(t.td,{children:["Property name with this prefix passed down to the underlying HMS client for use. Such as ",(0,r.jsx)(t.code,{children:"gravitino.bypass.hive.metastore.failure.retries = 3"})," indicate 3 times of retries upon failure of Thrift metastore calls"]}),(0,r.jsx)(t.td,{children:"(none)"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,r.jsxs)(t.p,{children:["Please refer to ",(0,r.jsx)(t.a,{href:"/docs/0.3.0/manage-metadata-using-gravitino#catalogs-operations",children:"Manage Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsx)(t.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,r.jsx)(t.p,{children:"The Hive catalog supports to create, update, and delete databases in the HMS."}),"\n",(0,r.jsx)(t.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,r.jsx)(t.p,{children:"Schema properties supply or set metadata for the underlying Hive database.\nThe following table lists predefined schema properties for the Hive database. Additionally, you can define your own key-value pair properties and transmit them to the underlying Hive database."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default value"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"location"})}),(0,r.jsxs)(t.td,{children:["The directory for Hive database storage. Such as ",(0,r.jsx)(t.code,{children:"/user/hive/warehouse"}),"."]}),(0,r.jsxs)(t.td,{children:["HMS uses the value of ",(0,r.jsx)(t.code,{children:"hive.metastore.warehouse.dir"})," in the ",(0,r.jsx)(t.code,{children:"hive-site.xml"})," by default."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.1.0"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,r.jsxs)(t.p,{children:["see ",(0,r.jsx)(t.a,{href:"/docs/0.3.0/manage-metadata-using-gravitino#schemas-operations",children:"Manage Metadata Using Gravitino"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"table",children:"Table"}),"\n",(0,r.jsx)(t.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,r.jsx)(t.p,{children:"The Hive catalog supports to create, update, and delete tables in the HMS."}),"\n",(0,r.jsx)(t.h4,{id:"table-partitions",children:"Table partitions"}),"\n",(0,r.jsxs)(t.p,{children:["The Hive catalog supports ",(0,r.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-PartitionedTables",children:"partitioned tables"}),". Users can create partitioned tables in the Hive catalog with specific partitioning attribute.\nAlthough Gravitino supports several partitioning strategies, the Apache Hive inherently only supports a single partitioning strategy (partitioned by column), therefore the Hive catalog only support ",(0,r.jsx)(t.code,{children:"Identity"})," partitioning."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"fieldName"})," specified in the partitioning attribute must be a column defined in the table."]})}),"\n",(0,r.jsx)(t.h4,{id:"table-sort-orders-and-distributions",children:"Table sort orders and distributions"}),"\n",(0,r.jsxs)(t.p,{children:["The Hive catalog supports ",(0,r.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-BucketedSortedTables",children:"bucketed sorted tables"}),". Users can create bucketed sorted tables in the Hive catalog with specific ",(0,r.jsx)(t.code,{children:"distribution"})," and ",(0,r.jsx)(t.code,{children:"sortOrders"})," attributes.\nAlthough Gravitino supports several distribution strategies, the Apache Hive inherently only supports a single distribution strategy (clustered by column), therefore the Hive catalog only support ",(0,r.jsx)(t.code,{children:"Hash"})," distribution."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"fieldName"})," specified in the ",(0,r.jsx)(t.code,{children:"distribution"})," and ",(0,r.jsx)(t.code,{children:"sortOrders"})," attribute must be a column defined in the table."]})}),"\n",(0,r.jsx)(t.h4,{id:"table-column-types",children:"Table column types"}),"\n",(0,r.jsxs)(t.p,{children:["The Hive catalog supports all data types defined in the ",(0,r.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Types",children:"Hive Language Manual"}),".\nThe following table lists the data types mapped from the Hive catalog to the Gravitino."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Hive Data Type"}),(0,r.jsx)(t.th,{children:"Gravitino Data Type"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"tinyint"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"byte"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"smallint"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"short"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"int"}),"/",(0,r.jsx)(t.code,{children:"integer"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"integer"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"bigint"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"long"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"float"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"float"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"double"}),"/",(0,r.jsx)(t.code,{children:"double precision"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"double"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"decimal"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"decimal"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"char"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"char"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"varchar"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"varchar"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timestamp"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timestamp"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"date"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"date"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"interval_year_month"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"interval_year"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"interval_day_time"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"interval_day"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"binary"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"binary"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"array"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"array"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"map"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"map"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"struct"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"struct"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"uniontype"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"uniontype"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,r.jsx)(t.p,{children:"Table properties supply or set metadata for the underlying Hive tables.\nThe following table lists predefined table properties for the Hive table. Additionally, you can define your own key-value pair properties and transmit them to the underlying Hive database."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Since version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"location"})}),(0,r.jsxs)(t.td,{children:["The location for table storage. Such as ",(0,r.jsx)(t.code,{children:"/user/hive/warehouse/test_table"}),"."]}),(0,r.jsx)(t.td,{children:"HMS uses the database location as the parent directory by default."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"table-type"})}),(0,r.jsxs)(t.td,{children:["Type of the table. Valid values include ",(0,r.jsx)(t.code,{children:"MANAGED_TABLE"})," and ",(0,r.jsx)(t.code,{children:"EXTERNAL_TABLE"}),"."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"MANAGED_TABLE"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"format"})}),(0,r.jsxs)(t.td,{children:["The table file format. Valid values include ",(0,r.jsx)(t.code,{children:"TEXTFILE"}),", ",(0,r.jsx)(t.code,{children:"SEQUENCEFILE"}),", ",(0,r.jsx)(t.code,{children:"RCFILE"}),", ",(0,r.jsx)(t.code,{children:"ORC"}),", ",(0,r.jsx)(t.code,{children:"PARQUET"}),", ",(0,r.jsx)(t.code,{children:"AVRO"}),", ",(0,r.jsx)(t.code,{children:"JSON"}),", ",(0,r.jsx)(t.code,{children:"CSV"}),", and ",(0,r.jsx)(t.code,{children:"REGEX"}),"."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TEXTFILE"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"input-format"})}),(0,r.jsxs)(t.td,{children:["The input format class for the table. Such as ",(0,r.jsx)(t.code,{children:"org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"}),"."]}),(0,r.jsxs)(t.td,{children:["The property ",(0,r.jsx)(t.code,{children:"format"})," sets the default value ",(0,r.jsx)(t.code,{children:"org.apache.hadoop.mapred.TextInputFormat"})," and can change it to a different default."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"output-format"})}),(0,r.jsxs)(t.td,{children:["The output format class for the table. Such as ",(0,r.jsx)(t.code,{children:"org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"}),"."]}),(0,r.jsxs)(t.td,{children:["The property ",(0,r.jsx)(t.code,{children:"format"})," sets the default value ",(0,r.jsx)(t.code,{children:"org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat"})," and can change it to a different default."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"serde-lib"})}),(0,r.jsxs)(t.td,{children:["The serde library class for the table. Such as ",(0,r.jsx)(t.code,{children:"org.apache.hadoop.hive.ql.io.orc.OrcSerde"}),"."]}),(0,r.jsxs)(t.td,{children:["The property ",(0,r.jsx)(t.code,{children:"format"})," sets the default value ",(0,r.jsx)(t.code,{children:"org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe"})," and can change it to a different default."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"serde.parameter."})}),(0,r.jsxs)(t.td,{children:["The prefix of the serde parameter. Such as ",(0,r.jsx)(t.code,{children:'"serde.parameter.orc.create.index" = "true"'})," indicate ",(0,r.jsx)(t.code,{children:"ORC"})," serde lib to create row indexes"]}),(0,r.jsx)(t.td,{children:"(none)"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Hive automatically adds and manages some reserved properties. Users aren't allowed to set these properties."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"comment"})}),(0,r.jsx)(t.td,{children:"Used to store the table comment."}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"numFiles"})}),(0,r.jsx)(t.td,{children:"Used to store the number of files in the table."}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"totalSize"})}),(0,r.jsx)(t.td,{children:"Used to store the total size of the table."}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"EXTERNAL"})}),(0,r.jsx)(t.td,{children:"Indicates whether the table is an external table."}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"transient_lastDdlTime"})}),(0,r.jsx)(t.td,{children:"Used to store the last DDL time of the table."}),(0,r.jsx)(t.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,r.jsxs)(t.p,{children:["Please refer to ",(0,r.jsx)(t.a,{href:"./manage-metadata-using-gravitino#tables-operations",children:"Manage Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(t.h4,{id:"alter-operations",children:"Alter operations"}),"\n",(0,r.jsxs)(t.p,{children:["Gravitino has already defined a unified set of ",(0,r.jsx)(t.a,{href:"/docs/0.3.0/manage-metadata-using-gravitino#alter-a-table",children:"metadata operation interfaces"}),", and almost all ",(0,r.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-AlterTable/Partition/Column",children:"Hive Alter operations"})," have corresponding table update request which enable you to change the struct of an existing table.\nThe following table lists the mapping relationship between Hive Alter operations and Gravitino table update request."]}),"\n",(0,r.jsx)(t.h5,{id:"alter-table",children:"Alter table"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Hive Alter Operation"}),(0,r.jsx)(t.th,{children:"Gravitino Table Update Request"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Rename Table"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Rename table"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Alter Table Properties"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Set a table property"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Alter Table Comment"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Update comment"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Alter SerDe Properties"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Set a table property"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Remove SerDe Properties"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Remove a table property"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Alter Table Storage Properties"})}),(0,r.jsx)(t.td,{children:"Unsupported"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Alter Table Skewed or Stored as Directories"})}),(0,r.jsx)(t.td,{children:"Unsupported"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Alter Table Constraints"})}),(0,r.jsx)(t.td,{children:"Unsupported"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["As Gravitino has a separate interface for updating the comment of a table, the Hive catalog sets ",(0,r.jsx)(t.code,{children:"comment"})," as a reserved property for the table, preventing users from setting the comment property, Although Apache Hive change the comment of a table by modifying the comment property of the table."]})}),"\n",(0,r.jsx)(t.h5,{id:"alter-column",children:"Alter column"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Hive Alter Operation"}),(0,r.jsx)(t.th,{children:"Gravitino Table Update Request"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Change Column Name"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Rename a column"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Change Column Type"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Update the type of a column"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Change Column Position"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Update the position of a column"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Change Column Comment"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Update the column comment"})}),(0,r.jsx)(t.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(t.h5,{id:"alter-partition",children:"Alter partition"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Support for altering partitions is under development."})})]})}function o(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},37627:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>n});var r=i(52983);const d={},s=r.createContext(d);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);