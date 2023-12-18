"use strict";(self.webpackChunkdatastrato_next=self.webpackChunkdatastrato_next||[]).push([[8826],{13876:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=i(97458),r=i(37627);const o={title:"How to build Gravitino",slug:"/how-to-build",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},s=void 0,c={id:"how-to-build",title:"How to build Gravitino",description:"Prerequisites",source:"@site/versioned_docs/version-0.3.0/how-to-build.md",sourceDirName:".",slug:"/how-to-build",permalink:"/docs/0.3.0/how-to-build",draft:!1,unlisted:!1,editUrl:"https://github.com/datastrato/datastrato.com/edit/master/docs/how-to-build.md",tags:[],version:"0.3.0",frontMatter:{title:"How to build Gravitino",slug:"/how-to-build",license:"Copyright 2023 Datastrato Pvt Ltd. This software is licensed under the Apache License version 2."},sidebar:"tutorialSidebar",previous:{title:"Gravitino metrics",permalink:"/docs/0.3.0/metrics"},next:{title:"How to test Gravitino",permalink:"/docs/0.3.0/how-to-test"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick start",id:"quick-start",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Linux or macOS operating system"}),"\n",(0,t.jsx)(n.li,{children:"Git"}),"\n",(0,t.jsx)(n.li,{children:"A Java Development Kit version 8 to 17 installed in your environment to launch Gradle"}),"\n",(0,t.jsx)(n.li,{children:"Optionally Docker to run integration tests"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Please read the following notes first",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gravitino requires at least JDK8 and at most JDK17 to run Gradle, so you need to\ninstall JDK8 to 17 version to launch the build environment."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gravitino itself uses JDK8 to build, Gravitino Trino connector uses JDK17 to build. You don't\nhave to preinstall JDK8 or JDK17, Gradle detects the JDK version needed and downloads it automatically."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Gravitino uses Gradle Java Toolchain to detect and manage JDK versions, it checks the\ninstalled JDK by running ",(0,t.jsx)(n.code,{children:"./gradlew javaToolchains"})," command. For the details of Gradle Java\nToolchain, please see ",(0,t.jsx)(n.a,{href:"https://docs.gradle.org/current/userguide/toolchains.html#sec:java_toolchain",children:"Gradle Java Toolchain"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make sure you have installed Docker in your environment as Gravitino uses it to run integration tests; without it, some Docker-related tests may not run."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['macOS uses "docker-connector" to make the Gravitino Trino connector work with Docker\nfor macOS. For the details of "docker-connector", please see ',(0,t.jsx)(n.a,{href:"https://github.com/wenjunxiao/mac-docker-connector",children:"docker-connector"}),"\n, ",(0,t.jsx)(n.code,{children:"$GRAVITINO_HOME/dev/docker/tools/mac-docker-connector.sh"}),", and\n",(0,t.jsx)(n.code,{children:"$GRAVITINO_HOME/dev/docker/tools/README.md"})," for more details."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can use OrbStack to replace Docker for macOS, please see\n",(0,t.jsx)(n.a,{href:"https://orbstack.dev/",children:"OrbStack"}),', with OrbStack you can run Gravitino integration tests\nwithout needing to install "docker-connector".']}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the Gravitino project."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone git@github.com:datastrato/gravitino.git\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Build the Gravitino project."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd gravitino\n./gradlew build\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The first time you build the project, downloading the dependencies may take a while. You can add\n",(0,t.jsx)(n.code,{children:"-x test"})," to skip the tests, by using ",(0,t.jsx)(n.code,{children:"./gradlew build -x test"}),"."]})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get the Gravitino binary package."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./gradlew compileDistribution\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"compileDistribution"})," command creates a ",(0,t.jsx)(n.code,{children:"distribution"})," directory in the Gravitino root directory."]}),"\n",(0,t.jsxs)(n.p,{children:["The directory structure of the ",(0,t.jsx)(n.code,{children:"distribution"})," directory is as follows:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"./gradlew clean"})," command deletes the ",(0,t.jsx)(n.code,{children:"distribution"})," directory."]})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assemble the Gravitino distribution package."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./gradlew assembleDistribution\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"assembleDistribution"})," command creates ",(0,t.jsx)(n.code,{children:"gravitino-{version}-bin.tar.gz"})," and ",(0,t.jsx)(n.code,{children:"gravitino-{version}-bin.tar.gz.sha256"})," under the ",(0,t.jsx)(n.code,{children:"distribution"})," directory."]}),"\n",(0,t.jsx)(n.p,{children:"You can deploy them to your production environment."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"gravitino-{version}-bin.tar.gz"})," file is the Gravitino server distribution package, and the\n",(0,t.jsx)(n.code,{children:"gravitino-{version}-bin.tar.gz.sha256"})," file is the sha256 checksum file for the Gravitino\nserver distribution package."]})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assemble Gravitino Trino connector package"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:" ./gradlew assembleTrinoConnector\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./gradlew assembleDistribution\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This creates ",(0,t.jsx)(n.code,{children:"gravitino-trino-connector-{version}.tar.gz"})," and ",(0,t.jsx)(n.code,{children:"gravitino-trino-connector-{version}.tar.gz.sha256"})," under the ",(0,t.jsx)(n.code,{children:"distribution"})," directory."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},37627:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var t=i(52983);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);