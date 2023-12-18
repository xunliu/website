"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[7420],{17154:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(97458),i=t(37627);const r={title:"Gravitino connector installation",slug:"/trino-connector/installation",keyword:"gravitino connector trino",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},c=void 0,a={id:"trino-connector/installation",title:"Gravitino connector installation",description:"To install the Gravitino connector, you should first deploy the Trino environment, and then install the Gravitino connector plugin into Trino.",source:"@site/versioned_docs/version-0.3.0/trino-connector/installation.md",sourceDirName:"trino-connector",slug:"/trino-connector/installation",permalink:"/docs/0.3.0/trino-connector/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/datastrato/datastrato.com/edit/master/docs/trino-connector/installation.md",tags:[],version:"0.3.0",frontMatter:{title:"Gravitino connector installation",slug:"/trino-connector/installation",keyword:"gravitino connector trino",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},sidebar:"tutorialSidebar",previous:{title:"Gravitino connector requirements",permalink:"/docs/0.3.0/trino-connector/requirements"},next:{title:"Gravitino connector Configuration",permalink:"/docs/0.3.0/trino-connector/configuration"}},s={},l=[{value:"Example",id:"example",level:2},{value:"Running the container",id:"running-the-container",level:3},{value:"Installing the Gravitino connector",id:"installing-the-gravitino-connector",level:3},{value:"Configuring the Gravitino connector",id:"configuring-the-gravitino-connector",level:3},{value:"Verifying the Gravitino connector",id:"verifying-the-gravitino-connector",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["To install the Gravitino connector, you should first deploy the Trino environment, and then install the Gravitino connector plugin into Trino.\nPlease refer to the ",(0,o.jsx)(e.a,{href:"https://trino.io/docs/current/installation/deployment.html",children:"Deploying Trino documentation"})," and do the following steps:"]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://github.com/datastrato/gravitino/releases",children:"Download"})," the Gravitino connector tarball and unpack it.\nThe tarball contains a single top-level directory ",(0,o.jsx)(e.code,{children:"gravitino-trino-connector-<version>"}),",\nwhich called the connector directory."]}),"\n",(0,o.jsxs)(e.li,{children:["Copy the connector directory to the Trino's plugin directory.\nNormally, the directory location is ",(0,o.jsx)(e.code,{children:"Trino-server-<version>/plugin"}),", and the directory contains other catalogs used by Trino."]}),"\n",(0,o.jsxs)(e.li,{children:["Add Trino JVM arguments ",(0,o.jsx)(e.code,{children:"-Dlog4j.configurationFile=file:////etc/trino/log4j2.properties"})," to enable logging for the Gravitino connector."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Alternatively,\nyou can build the Gravitino connector package from the sources\nand obtain the ",(0,o.jsx)(e.code,{children:"gravitino-trino-connector-<version>.tar.gz"})," file in the ",(0,o.jsx)(e.code,{children:"$PROJECT/distribution"})," directory.\nPlease refer to the ",(0,o.jsx)(e.a,{href:"/docs/0.3.0/how-to-build",children:"Gravitino Development documentation"})]}),"\n",(0,o.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.p,{children:"You can install the Gravitino connector in Trino office docker images step by step."}),"\n",(0,o.jsx)(e.h3,{id:"running-the-container",children:"Running the container"}),"\n",(0,o.jsxs)(e.p,{children:["Use the docker command to create a container from the ",(0,o.jsx)(e.code,{children:"trinodb/trino"})," image. Assign it the trino-gravitino name.\nRun it in the background, and map the default Trino port, which is 8080, from inside the container to port 8080 on your machine."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"docker run --name trino-gravitino -d -p 8080:8080 trinodb/trino:426\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Run ",(0,o.jsx)(e.code,{children:"docker ps"})," to check whether the container is running."]}),"\n",(0,o.jsx)(e.h3,{id:"installing-the-gravitino-connector",children:"Installing the Gravitino connector"}),"\n",(0,o.jsx)(e.p,{children:"Download the Gravitino connector tarball and unpack it."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"cd /tmp\nwget https://github.com/datastrato/gravitino/releases/gravitino-trino-connector-<version>.tar.gz\ntar -zxvf gravitino-trino-connector-<version>.tar.gz\n"})}),"\n",(0,o.jsxs)(e.p,{children:["You can see the connector directory ",(0,o.jsx)(e.code,{children:"gravitino-trino-connector-<version>"})," after unpacking."]}),"\n",(0,o.jsx)(e.p,{children:"Copy the connector directory to the Trino container's plugin directory."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"docker copy  /tmp/gravitino-trino-connector-<version> trino-gravitino:/lib/trino/plugin\n"})}),"\n",(0,o.jsx)(e.p,{children:"Check the plugin directory in the container."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"docker exec -it trino-gravitino /bin/bash\ncd /lib/trino/plugin\n"})}),"\n",(0,o.jsx)(e.p,{children:"Now you can see the Gravitino connector directory in the plugin directory."}),"\n",(0,o.jsx)(e.h3,{id:"configuring-the-gravitino-connector",children:"Configuring the Gravitino connector"}),"\n",(0,o.jsxs)(e.p,{children:["Assuming you have now started the Gravitino server on the host ",(0,o.jsx)(e.code,{children:"gravitino-server-host"})," and already created a metalake named ",(0,o.jsx)(e.code,{children:"test"}),", if those have not been prepared, please refer to the ",(0,o.jsx)(e.a,{href:"/docs/0.3.0/getting-started",children:"Gravitino Getting-started"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["To configure Gravitino connector correctly, you need to put the following configurations to the Trino configuration file ",(0,o.jsx)(e.code,{children:"/etc/trino/catalog/gravitino.properties"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"connector.name=gravitino\ngravitino.url=http://gravitino-server-host:8090\ngravitino.metalake=test\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["The ",(0,o.jsx)(e.code,{children:"gravitino.name"})," defines which Gravitino connector is used. It must be ",(0,o.jsx)(e.code,{children:"gravitino"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["The ",(0,o.jsx)(e.code,{children:"gravitino.metalake"})," defines which metalake are used. It should exist in the Gravitino server."]}),"\n",(0,o.jsxs)(e.li,{children:["The ",(0,o.jsx)(e.code,{children:"gravitino.uri"})," defines the connection information about Gravitino server. Make sure your container can access the Gravitino server."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Full configurations for Gravitino connector can be seen ",(0,o.jsx)(e.a,{href:"/docs/0.3.0/trino-connector/configuration",children:"here"})]}),"\n",(0,o.jsxs)(e.p,{children:["If you haven't created the metalake named ",(0,o.jsx)(e.code,{children:"test"}),", you can use the following command to create it."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{"name":"test","comment":"comment","properties":{}}\' http://gravitino-server-host:8090/api/metalakes\n'})}),"\n",(0,o.jsx)(e.p,{children:"And then restart the Trino container to load the Gravitino connector."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"docker restart trino-gravitino\n"})}),"\n",(0,o.jsx)(e.h3,{id:"verifying-the-gravitino-connector",children:"Verifying the Gravitino connector"}),"\n",(0,o.jsx)(e.p,{children:"Use the Trino CLI to connect to the Trino container and run a query."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"docker exec -it trino trino\ntrino> SHOW CATALOGS;\nCatalog\n------------------------\ngravitino\njmx\nmemory\ntpcds\ntpch\nsystem\n"})}),"\n",(0,o.jsxs)(e.p,{children:["You can see the ",(0,o.jsx)(e.code,{children:"gravitino"})," catalog in the result set. This signifies the successful installation of the Gravitino connector."]}),"\n",(0,o.jsxs)(e.p,{children:["Assuming you have created a catalog named ",(0,o.jsx)(e.code,{children:"test.jdbc-mysql"})," in the Gravitino server, or please refer to ",(0,o.jsx)(e.a,{href:"../manage-metadata-using-gravitino#create-a-catalog",children:"Create a Catalog"}),". Then you can use the Trino CLI to connect to the Trino container and run a query like this."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"docker exec -it trino trino\ntrino> SHOW CATALOGS;\nCatalog\n------------------------\ngravitino\njmx\nmemory\ntpcds\ntpch\nsystem\ntest.jdbc-mysql\n"})}),"\n",(0,o.jsx)(e.p,{children:"The catalog named 'test.jdbc-mysql' is the catalog that you created by gravitino server, and you can use it to access the mysql database like other Trino catalogs."})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},37627:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>c});var o=t(52983);const i={},r=o.createContext(i);function c(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);