"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[4173],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9129:(e,t,r)=>{r.d(t,{b:()=>d,Z:()=>u});var n=r(7294);const a="container_yFwD",o="teamMember_Kw7v",i="avatar_j88W",s="name_MjYQ",l="role_RkEc",c="company_QP6n",p="social_fOOP";function d(e){let{children:t}=e;return n.createElement("div",{className:a},t)}function u(e){let{children:t,role:r,company:a,github:d,twitter:u,linkedin:m}=e;return n.createElement("div",{className:o},n.createElement("div",{className:i},n.createElement("img",{src:"https://github.com/"+d+".png",alt:"avatar"})),n.createElement("div",null,n.createElement("span",{className:s},t),n.createElement("span",{className:l},r),n.createElement("span",{className:c},"@",a),n.createElement("div",{className:p},d&&n.createElement("a",{href:"https://github.com/"+d,target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:24},n.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))),u&&n.createElement("a",{href:"https://twitter.com/"+u,target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:24},n.createElement("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))),m&&n.createElement("a",{href:"https://www.linkedin.com/in/"+m,target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:24},n.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))))))}},1211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(4137)),o=r(9129);const i={sidebar_position:1,description:"An online open-source database of green software patterns reviewed and curated by the Green Software Foundation"},s="Green Software Patterns",l={unversionedId:"index",id:"index",title:"Green Software Patterns",description:"An online open-source database of green software patterns reviewed and curated by the Green Software Foundation",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"An online open-source database of green software patterns reviewed and curated by the Green Software Foundation"},sidebar:"tutorialSidebar",next:{title:"Guide",permalink:"/guide/"}},c={},p=[{value:"Summary",id:"summary",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Quick Links",id:"quick-links",level:2},{value:"Principles, Patterns, and Practices",id:"principles-patterns-and-practices",level:2},{value:"Core Team",id:"core-team",level:3},{value:"Advisors",id:"advisors",level:3}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"green-software-patterns"},"Green Software Patterns"),(0,a.kt)("div",{class:"intro-logo"},(0,a.kt)("img",{src:"/img/logo.svg",alt:"logo"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"An online open-source database of software patterns reviewed and curated by the Green Software Foundation across a wide range of categories. You can be confident that applying any of our published and live patterns will reduce your software emissions."),(0,a.kt)("p",null,"Any software practitioner can find the patterns related to their field, technology, or domain. Anyone can submit a pattern that triggers a detailed review process by the Foundation."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn what constitutes a pattern and how to ",(0,a.kt)("a",{parentName:"li",href:"/guide"},"contribute")," a new one or edit an existing one."),(0,a.kt)("li",{parentName:"ul"},"View the ",(0,a.kt)("a",{parentName:"li",href:"/catalog/"},"catalog")," of patterns.")),(0,a.kt)("h2",{id:"quick-links"},"Quick Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/pr-faqs/blob/main/live/green-software-patterns.pr-faq.md"},"Press Release FAQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://patterns.greensoftware.foundation"},"Main Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/green-software-patterns"},"Main GitHub Repository"))),(0,a.kt)("h2",{id:"principles-patterns-and-practices"},"Principles, Patterns, and Practices"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://learn.greensoftware.foundation/practitioner/introduction"},(0,a.kt)("strong",{parentName:"a"},"principles"))," of green software outline a core set of competencies needed to define, run and build green software."),(0,a.kt)("p",null,"A green software ",(0,a.kt)("strong",{parentName:"p"},"pattern")," is a specific example of how to apply one or more principles in a real-world example. Whereas principles describe the theory that underpins green software, patterns are the practical advice software practitioners can use in their software applications today. Patterns are vendor-neutral."),(0,a.kt)("p",null,"A green software ",(0,a.kt)("strong",{parentName:"p"},"practice")," is a pattern applied to a specific vendor's product and informs practitioners about how to use that product in a more sustainable way."),(0,a.kt)("p",null,"Practices should refer to patterns that should refer to principles."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Green Software Principles, Patterns, and Practices",src:r(8546).Z,title:"Green Software Principles, Patterns, and Practices",width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"core-team"},"Core Team"),(0,a.kt)(o.b,{mdxType:"TeamMembers"},(0,a.kt)(o.Z,{role:"Project Manager",company:"GSF",github:"holanita",mdxType:"TeamMember"},"Anita Holczmann"),(0,a.kt)(o.Z,{role:"Project Lead",company:"Microsoft",github:"dubrie",twitter:"dubrie",linkedin:"dubrie",mdxType:"TeamMember"},"Bill Johnson"),(0,a.kt)(o.Z,{role:"Project Principle ",company:"Goldman Sachs",github:"greenhsu123",twitter:"greenhsu123",linkedin:"greenhsu123",mdxType:"TeamMember"},"Sarah Hsu")),(0,a.kt)("h3",{id:"advisors"},"Advisors"),(0,a.kt)("p",null,"Advisors are associated with the project and may perform tasks related to the project."),(0,a.kt)(o.b,{mdxType:"TeamMembers"},(0,a.kt)(o.Z,{role:"Project Advisor",company:"GSF",github:"jawache",twitter:"jawache",linkedin:"jawache",mdxType:"TeamMember"},"Asim Hussain")))}u.isMDXComponent=!0},8546:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/GSF_Principles_Patterns_Practices_v2-c5e2753b6270473d1da02b97a1321d51.png"}}]);