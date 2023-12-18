"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[501],{87537:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var r=n(97458),s=n(37627);const d={title:"Lakehouse Iceberg catalog",slug:"/lakehouse-iceberg-catalog",keywords:["lakehouse","iceberg","metadata"],license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},c=void 0,t={id:"lakehouse-iceberg-catalog",title:"Lakehouse Iceberg catalog",description:"Introduction",source:"@site/versioned_docs/version-0.3.0/lakehouse-iceberg-catalog.md",sourceDirName:".",slug:"/lakehouse-iceberg-catalog",permalink:"/docs/0.3.0/lakehouse-iceberg-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/datastrato/datastrato.com/edit/master/docs/lakehouse-iceberg-catalog.md",tags:[],version:"0.3.0",frontMatter:{title:"Lakehouse Iceberg catalog",slug:"/lakehouse-iceberg-catalog",keywords:["lakehouse","iceberg","metadata"],license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},sidebar:"tutorialSidebar",previous:{title:"Delete table",permalink:"/docs/0.3.0/api/rest/drop-table"},next:{title:"Gravitino Iceberg REST catalog service",permalink:"/docs/0.3.0/iceberg-rest-service"}},l={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"JDBC catalog",id:"jdbc-catalog",level:4},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table partitions",id:"table-partitions",level:4},{value:"Table sort orders",id:"table-sort-orders",level:3},{value:"Table distributions",id:"table-distributions",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4},{value:"HDFS configuration",id:"hdfs-configuration",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(i.p,{children:"Gravitino provides the ability to manage Apache Iceberg metadata."}),"\n",(0,r.jsx)(i.h3,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["Builds with Apache Iceberg ",(0,r.jsx)(i.code,{children:"1.3.1"}),". The Apache Iceberg table format version is ",(0,r.jsx)(i.code,{children:"1"})," by default.\nBuilds with Hadoop 2.10.x, there may compatibility issue when accessing Hadoop 3.x clusters."]})}),"\n",(0,r.jsx)(i.h2,{id:"catalog",children:"Catalog"}),"\n",(0,r.jsx)(i.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Works as a catalog proxy, supporting ",(0,r.jsx)(i.code,{children:"HiveCatalog"})," and ",(0,r.jsx)(i.code,{children:"JdbcCatalog"}),"."]}),"\n",(0,r.jsx)(i.li,{children:"Supports DDL operations for Iceberg schemas and tables."}),"\n",(0,r.jsx)(i.li,{children:"Doesn't support snapshot or table management operations."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Property name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"catalog-backend"})}),(0,r.jsxs)(i.td,{children:["Catalog backend of Gravitino Iceberg catalog. Supports ",(0,r.jsx)(i.code,{children:"hive"})," or ",(0,r.jsx)(i.code,{children:"jdbc"}),"."]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"uri"})}),(0,r.jsxs)(i.td,{children:["The URI configuration of the Iceberg catalog. ",(0,r.jsx)(i.code,{children:"thrift://127.0.0.1:9083"})," or ",(0,r.jsx)(i.code,{children:"jdbc:postgresql://127.0.0.1:5432/db_name"})," or ",(0,r.jsx)(i.code,{children:"jdbc:mysql://127.0.0.1:3306/metastore_db"}),"."]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"warehouse"})}),(0,r.jsxs)(i.td,{children:["Warehouse directory of catalog. ",(0,r.jsx)(i.code,{children:"file:///user/hive/warehouse-hive/"})," for local fs or ",(0,r.jsx)(i.code,{children:"hdfs://namespace/hdfs/path"})," for HDFS."]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsxs)(i.p,{children:["Any properties not defined by Gravitino with ",(0,r.jsx)(i.code,{children:"gravitino.bypass"})," prefix will pass to Iceberg catalog properties and HDFS configuration. For example, if specify ",(0,r.jsx)(i.code,{children:"gravitino.bypass.list-all-tables"}),", ",(0,r.jsx)(i.code,{children:"list-all-tables"})," will pass to Iceberg catalog properties."]}),"\n",(0,r.jsx)(i.h4,{id:"jdbc-catalog",children:"JDBC catalog"}),"\n",(0,r.jsxs)(i.p,{children:["If you are using JDBC catalog, you must provide ",(0,r.jsx)(i.code,{children:"jdbc-user"}),", ",(0,r.jsx)(i.code,{children:"jdbc-password"})," and ",(0,r.jsx)(i.code,{children:"jdbc-driver"})," to catalog properties."]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Property name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"jdbc-user"})}),(0,r.jsx)(i.td,{children:"JDBC user name"}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"jdbc-password"})}),(0,r.jsx)(i.td,{children:"JDBC password"}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"jdbc-driver"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"com.mysql.jdbc.Driver"})," or ",(0,r.jsx)(i.code,{children:"com.mysql.cj.jdbc.Driver"})," for MySQL, ",(0,r.jsx)(i.code,{children:"org.postgresql.Driver"})," for PostgreSQL"]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.3.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"jdbc-initialize"})}),(0,r.jsx)(i.td,{children:"Whether to initialize meta tables when create JDBC catalog"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"true"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsxs)(i.p,{children:["You must download the corresponding JDBC driver to the ",(0,r.jsx)(i.code,{children:"catalogs/lakehouse-iceberg/libs"})," directory."]})}),"\n",(0,r.jsx)(i.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,r.jsxs)(i.p,{children:["Please refer to ",(0,r.jsx)(i.a,{href:"/docs/0.3.0/manage-metadata-using-gravitino#catalogs-operations",children:"Manage Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsx)(i.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"doesn't support cascade drop schema."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,r.jsxs)(i.p,{children:["You could put properties except ",(0,r.jsx)(i.code,{children:"comment"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,r.jsxs)(i.p,{children:["Please refer to ",(0,r.jsx)(i.a,{href:"/docs/0.3.0/manage-metadata-using-gravitino#schemas-operations",children:"Manage Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(i.h2,{id:"table",children:"Table"}),"\n",(0,r.jsx)(i.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,r.jsx)(i.h4,{id:"table-partitions",children:"Table partitions"}),"\n",(0,r.jsx)(i.p,{children:"Supports transforms:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"IdentityTransform"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"BucketTransform"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"TruncateTransform"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"YearTransform"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"MonthTransform"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"DayTransform"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"HourTransform"})}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["Iceberg doesn't support multi fields in ",(0,r.jsx)(i.code,{children:"BucketTransform"}),".\nIceberg doesn't support ",(0,r.jsx)(i.code,{children:"ApplyTransform"}),", ",(0,r.jsx)(i.code,{children:"RangeTransform"})," and ",(0,r.jsx)(i.code,{children:"ListTransform"}),"."]})}),"\n",(0,r.jsx)(i.h3,{id:"table-sort-orders",children:"Table sort orders"}),"\n",(0,r.jsx)(i.p,{children:"supports expressions:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"FieldReference"})}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"FunctionExpression"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"bucket"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"truncate"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"year"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"month"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"day"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"hour"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["For ",(0,r.jsx)(i.code,{children:"bucket"})," and ",(0,r.jsx)(i.code,{children:"truncate"}),", the first argument must be integer literal, the second argument must be field reference."]})}),"\n",(0,r.jsx)(i.h3,{id:"table-distributions",children:"Table distributions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Doesn't support ",(0,r.jsx)(i.code,{children:"Distribution"}),", you should use ",(0,r.jsx)(i.code,{children:"BucketPartition"})," instead."]}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["If you load Iceberg tables, the table distribution strategy is ",(0,r.jsx)(i.code,{children:"hash"})," with num 0, which means no distribution."]})}),"\n",(0,r.jsx)(i.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Gravitino Type"}),(0,r.jsx)(i.th,{children:"Apache Iceberg Type"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Struct"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Struct"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Map"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Map"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Array"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Array"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Boolean"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Boolean"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Integer"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Integer"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Long"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Long"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Float"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Float"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Double"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Double"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Date"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Date"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Time"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Time"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"TimestampType withZone"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"TimestampType withZone"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"TimestampType withoutZone"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"TimestampType withoutZone"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Decimal"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Decimal"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Fixed"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Fixed"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"BinaryType"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Binary"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"UUID"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"UUID"})})]})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["Apache Iceberg doesn't support Gravitino ",(0,r.jsx)(i.code,{children:"Varchar"})," ",(0,r.jsx)(i.code,{children:"Fixedchar"})," ",(0,r.jsx)(i.code,{children:"Byte"})," ",(0,r.jsx)(i.code,{children:"Short"})," ",(0,r.jsx)(i.code,{children:"Union"})," type."]})}),"\n",(0,r.jsx)(i.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,r.jsxs)(i.p,{children:["You can pass ",(0,r.jsx)(i.a,{href:"https://iceberg.apache.org/docs/1.3.1/configuration/",children:"Iceberg table properties"})," to Gravitino when creating Iceberg table."]}),"\n",(0,r.jsx)(i.p,{children:"The Gravitino server doesn't allow passing the following reserved fields."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Configuration item"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"comment"})}),(0,r.jsx)(i.td,{children:"The table comment."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"creator"})}),(0,r.jsx)(i.td,{children:"The table creator."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"location"})}),(0,r.jsx)(i.td,{children:"Iceberg location for table storage."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"current-snapshot-id"})}),(0,r.jsx)(i.td,{children:"The snapshot represents the current state of the table."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"cherry-pick-snapshot-id"})}),(0,r.jsx)(i.td,{children:"Selecting a specific snapshot in a merge operation."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"sort-order"})}),(0,r.jsx)(i.td,{children:"Selecting a specific snapshot in a merge operation."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"identifier-fields"})}),(0,r.jsx)(i.td,{children:"The identifier fields for defining the table."})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,r.jsxs)(i.p,{children:["Please refer to ",(0,r.jsx)(i.a,{href:"/docs/0.3.0/manage-metadata-using-gravitino#tables-operations",children:"Manage Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(i.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,r.jsx)(i.p,{children:"Supports operations:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"RenameTable"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"SetProperty"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"RemoveProperty"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"UpdateComment"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"AddColumn"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"DeleteColumn"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"RenameColumn"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"UpdateColumnType"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"UpdateColumnPosition"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"UpdateColumnNullability"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"UpdateColumnComment"})}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["The default column position is ",(0,r.jsx)(i.code,{children:"LAST"})," when you add a column. If you add a non nullability column, there may be compatibility issues.\nIceberg just supports updating primitive types."]})}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsx)(i.p,{children:"If you update a nullability column to non nullability, there may be compatibility issues."})}),"\n",(0,r.jsx)(i.h2,{id:"hdfs-configuration",children:"HDFS configuration"}),"\n",(0,r.jsxs)(i.p,{children:["You can place ",(0,r.jsx)(i.code,{children:"core-site.xml"})," and ",(0,r.jsx)(i.code,{children:"hdfs-site.xml"})," in the ",(0,r.jsx)(i.code,{children:"catalogs/lakehouse-iceberg/conf"})," directory to automatically load as the default HDFS configuration."]}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsxs)(i.p,{children:["When writing to HDFS, the Gravitino Iceberg REST server can only operate as the specified HDFS user and doesn't support proxying to other HDFS users. See ",(0,r.jsx)(i.a,{href:"/docs/0.3.0/gravitino-server-config",children:"How to access Apache Hadoop"})," for more details."]})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},37627:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>c});var r=n(52983);const s={},d=r.createContext(s);function c(e){const i=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:i},e.children)}}}]);