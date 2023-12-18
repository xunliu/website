"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[4162],{64476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(97458),s=n(37627);const i={title:"Gravitino connector - Hive catalog",slug:"/trino-connector/catalog-hive",keyword:"gravitino connector trino",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},r=void 0,l={id:"trino-connector/catalog-hive",title:"Gravitino connector - Hive catalog",description:"The Hive catalog allows Trino querying data stored in an Apache Hive data warehouse.",source:"@site/versioned_docs/version-0.3.0/trino-connector/catalog-hive.md",sourceDirName:"trino-connector",slug:"/trino-connector/catalog-hive",permalink:"/docs/0.3.0/trino-connector/catalog-hive",draft:!1,unlisted:!1,editUrl:"https://github.com/datastrato/datastrato.com/edit/master/docs/trino-connector/catalog-hive.md",tags:[],version:"0.3.0",frontMatter:{title:"Gravitino connector - Hive catalog",slug:"/trino-connector/catalog-hive",keyword:"gravitino connector trino",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},sidebar:"tutorialSidebar",previous:{title:"Gravitino supported Catalogs",permalink:"/docs/0.3.0/trino-connector/supported-catalog"},next:{title:"Gravitino connector - Iceberg catalog",permalink:"/docs/0.3.0/trino-connector/catalog-iceberg"}},o={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Create table",id:"create-table",level:2},{value:"Alter table",id:"alter-table",level:2},{value:"Select",id:"select",level:2},{value:"Table properties",id:"table-properties",level:2},{value:"Schema properties",id:"schema-properties",level:2},{value:"Basic usage examples",id:"basic-usage-examples",level:2},{value:"Creating tables and schemas",id:"creating-tables-and-schemas",level:3},{value:"Writing data",id:"writing-data",level:3},{value:"Querying data",id:"querying-data",level:3},{value:"Modify a table",id:"modify-a-table",level:3},{value:"DROP",id:"drop",level:3},{value:"HDFS config and permissions",id:"hdfs-config-and-permissions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The Hive catalog allows Trino querying data stored in an Apache Hive data warehouse."}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(t.p,{children:"The Hive connector requires a Hive metastore service (HMS), or a compatible implementation of the Hive metastore, such\nas AWS Glue."}),"\n",(0,a.jsx)(t.p,{children:"Apache Hadoop HDFS 2.x supported."}),"\n",(0,a.jsx)(t.p,{children:"Many distributed storage systems including HDFS, Amazon S3 or S3-compatible systems,\nGoogle Cloud Storage, Azure Storage, and IBM Cloud Object Storage can be queried with the Hive connector."}),"\n",(0,a.jsx)(t.p,{children:"The coordinator and all workers must have network access to the Hive metastore and the storage system."}),"\n",(0,a.jsx)(t.p,{children:"Hive metastore access with the Thrift protocol defaults to using port 9083."}),"\n",(0,a.jsx)(t.p,{children:"Data files must be in a supported file format. Some file formats can be configured using file format configuration\nproperties\nper catalog:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"ORC"}),"\n",(0,a.jsx)(t.li,{children:"Parquet"}),"\n",(0,a.jsx)(t.li,{children:"Avro"}),"\n",(0,a.jsx)(t.li,{children:"RCText (RCFile using ColumnarSerDe)"}),"\n",(0,a.jsx)(t.li,{children:"RCBinary (RCFile using LazyBinaryColumnarSerDe)"}),"\n",(0,a.jsx)(t.li,{children:"SequenceFile"}),"\n",(0,a.jsx)(t.li,{children:"JSON (using org.apache.hive.hcatalog.data.JsonSerDe)"}),"\n",(0,a.jsx)(t.li,{children:"CSV (using org.apache.hadoop.hive.serde2.OpenCSVSerde)"}),"\n",(0,a.jsx)(t.li,{children:"TextFile"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-table",children:"Create table"}),"\n",(0,a.jsx)(t.p,{children:"The Gravitino connector currently supports basic Hive table creation statements, such as defining fields,\nallowing null values, and adding comments.\nHowever, it does not support advanced features like partitioning, sorting, and distribution."}),"\n",(0,a.jsxs)(t.p,{children:["The Gravitino connector does not support ",(0,a.jsx)(t.code,{children:"CREATE TABLE AS SELECT"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"alter-table",children:"Alter table"}),"\n",(0,a.jsx)(t.p,{children:"Support for the following alter table operations:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Rename table"}),"\n",(0,a.jsx)(t.li,{children:"Add a column"}),"\n",(0,a.jsx)(t.li,{children:"Drop a column"}),"\n",(0,a.jsx)(t.li,{children:"Rename a column"}),"\n",(0,a.jsx)(t.li,{children:"Change a column type"}),"\n",(0,a.jsx)(t.li,{children:"Set a table property"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"select",children:"Select"}),"\n",(0,a.jsx)(t.p,{children:"The Gravitino connector supports most SELECT statements, allowing the execution of queries successfully.\nCurrently, it doesn't support certain query optimizations, such as pushdown and pruning functionalities."}),"\n",(0,a.jsx)(t.h2,{id:"table-properties",children:"Table properties"}),"\n",(0,a.jsx)(t.p,{children:'You can set additional properties for tables and schemas in the Hive catalog using "WITH" keyword in the "CREATE TABLE"\nstatement.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE \"metalake.catalog\".dbname.tabname\n(\n  name varchar,\n  salary int\n) WITH (\n  format = 'TEXTFILE'\n);\n"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default Value"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Since Version"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"format"}),(0,a.jsx)(t.td,{children:"Hive storage format for the table"}),(0,a.jsx)(t.td,{children:"TEXTFILE"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"total_size"}),(0,a.jsx)(t.td,{children:"Total size of the table"}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"num_files"}),(0,a.jsx)(t.td,{children:"Number of files"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"external"}),(0,a.jsx)(t.td,{children:"Indicate whether it's an external table"}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"location"}),(0,a.jsx)(t.td,{children:"HDFS location for table storage"}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"table_type"}),(0,a.jsx)(t.td,{children:"The type of Hive table"}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"input_format"}),(0,a.jsx)(t.td,{children:"The input format class for the table"}),(0,a.jsx)(t.td,{children:"org.apache.hadoop.mapred.TextInputFormat"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"output_format"}),(0,a.jsx)(t.td,{children:"The output format class for the table"}),(0,a.jsx)(t.td,{children:"org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"serde_lib"}),(0,a.jsx)(t.td,{children:"The serde library class for the table"}),(0,a.jsx)(t.td,{children:"org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"serde_name"}),(0,a.jsx)(t.td,{children:"Name of the serde"}),(0,a.jsx)(t.td,{children:"table name by default"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"schema-properties",children:"Schema properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default Value"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Since Version"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"location"}),(0,a.jsx)(t.td,{children:"HDFS location for table storage"}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.2.0"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"basic-usage-examples",children:"Basic usage examples"}),"\n",(0,a.jsx)(t.p,{children:"You need to do the following steps before you can use the Hive catalog in Trino through Gravitino."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Create a metalake and catalog in Gravitino. Assuming that the metalake name is ",(0,a.jsx)(t.code,{children:"test"})," and the catalog name is ",(0,a.jsx)(t.code,{children:"hive_test"}),",\nthen you can use the following code to create them in Gravitino:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" \\\n-d \'{\n  "name": "test",\n  "comment": "comment",\n  "properties": {}\n}\' http://gravitino-host:8090/api/metalakes\n\ncurl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "hive_test",\n  "type": "RELATIONAL",\n  "comment": "comment",\n  "provider": "hive",\n  "properties": {\n    "metastore.uris": "thrift://hive-host:9083"\n  }\n}\' http://gravitino-host:8090/api/metalakes/test/catalogs\n'})}),"\n",(0,a.jsxs)(t.p,{children:["For More information about the Hive catalog, please refer to ",(0,a.jsx)(t.a,{href:"/docs/0.3.0/apache-hive-catalog",children:"Hive catalog"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Set the value of configuration ",(0,a.jsx)(t.code,{children:"gravitino.metalake"})," to the metalake you have created, named 'test', and start the Trino container."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Use the Trino CLI to connect to the Trino container and run a query."}),"\n",(0,a.jsx)(t.p,{children:"Listing all Gravitino managed catalogs:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW CATALOGS;\n"})}),"\n",(0,a.jsx)(t.p,{children:"The results are similar to:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"    Catalog\n----------------\n gravitino\n jmx\n system\n test.hive_test\n(4 rows)\n\nQuery 20231017_082503_00018_6nt3n, FINISHED, 1 node\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"gravitino"})," catalog is a catalog defined By Trino catalog configuration.\nThe ",(0,a.jsx)(t.code,{children:"test.hive_test"})," catalog is the catalog created by you in Gravitino.\nOther catalogs are regular user-configured Trino catalogs."]}),"\n",(0,a.jsx)(t.h3,{id:"creating-tables-and-schemas",children:"Creating tables and schemas"}),"\n",(0,a.jsxs)(t.p,{children:["Create a new schema named ",(0,a.jsx)(t.code,{children:"database_01"})," in ",(0,a.jsx)(t.code,{children:"test.hive_test"})," catalog."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE SCHEMA "test.hive_test".database_01;\n'})}),"\n",(0,a.jsx)(t.p,{children:"Create a new schema using HDFS location:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE SCHEMA \"test.hive_test\".database_01 WITH (\n  location = 'hdfs://hdfs-host:9000/user/hive/warehouse/database_01'\n);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Create a new table named ",(0,a.jsx)(t.code,{children:"table_01"})," in schema ",(0,a.jsx)(t.code,{children:'"test.hive_test".database_01'})," and stored in a TEXTFILE format."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE  \"test.hive_test\".database_01.table_01\n(\nname varchar,\nsalary int\n)\nWITH (\n  format = 'TEXTFILE'\n);\n"})}),"\n",(0,a.jsx)(t.h3,{id:"writing-data",children:"Writing data"}),"\n",(0,a.jsxs)(t.p,{children:["Insert data into the table ",(0,a.jsx)(t.code,{children:"table_01"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"INSERT INTO \"test.hive_test\".database_01.table_01 (name, salary) VALUES ('ice', 12);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Insert data into the table ",(0,a.jsx)(t.code,{children:"table_01"})," from select:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'INSERT INTO "test.hive_test".database_01.table_01 (name, salary) SELECT * FROM "test.hive_test".database_01.table_01;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"querying-data",children:"Querying data"}),"\n",(0,a.jsxs)(t.p,{children:["Query the ",(0,a.jsx)(t.code,{children:"table_01"})," table:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'SELECT * FROM "test.hive_test".database_01.table_01;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"modify-a-table",children:"Modify a table"}),"\n",(0,a.jsxs)(t.p,{children:["Add a new column ",(0,a.jsx)(t.code,{children:"age"})," to the ",(0,a.jsx)(t.code,{children:"table_01"})," table:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE "test.hive_test".database_01.table_01 ADD COLUMN age int;\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Drop a column ",(0,a.jsx)(t.code,{children:"age"})," from the ",(0,a.jsx)(t.code,{children:"table_01"})," table:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE "test.hive_test".database_01.table_01 DROP COLUMN age;\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Rename the ",(0,a.jsx)(t.code,{children:"table_01"})," table to ",(0,a.jsx)(t.code,{children:"table_02"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE "test.hive_test".database_01.table_01 RENAME TO "test.hive_test".database_01.table_02;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"drop",children:"DROP"}),"\n",(0,a.jsx)(t.p,{children:"Drop a schema:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'DROP SCHEMA "test.hive_test".database_01;\n'})}),"\n",(0,a.jsx)(t.p,{children:"Drop a table:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'DROP TABLE "test.hive_test".database_01.table_01;\n'})}),"\n",(0,a.jsx)(t.h2,{id:"hdfs-config-and-permissions",children:"HDFS config and permissions"}),"\n",(0,a.jsxs)(t.p,{children:["For basic setups, Gravitino connector configures the HDFS client automatically and does not require any configuration\nfiles.\nGravitino connector is not support user to config the ",(0,a.jsx)(t.code,{children:"hdfs-site.xml"})," and ",(0,a.jsx)(t.code,{children:"core-site.xml"})," files to the HDFS client."]}),"\n",(0,a.jsxs)(t.p,{children:["Before running any ",(0,a.jsx)(t.code,{children:"Insert"})," statements for Hive tables in Trino,\nyou must check that the user Trino is using to access HDFS has access to the Hive warehouse directory.\nYou can override this username by setting the HADOOP_USER_NAME system property in the Trino JVM config,\nreplacing hdfs_user with the appropriate username:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"-DHADOOP_USER_NAME=hdfs_user\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},37627:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(52983);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);