"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[450],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(4137));const o={version:1,submitted_by:"markus-ntt-seidl, navveenb",published_date:"TBD",category:"web",tags:["web","size:small","role:web-developer"]},i="Serve images in Moden Formats",s={unversionedId:"catalog/web/serve-images-in-modern-formats",id:"catalog/web/serve-images-in-modern-formats",title:"Serve images in Moden Formats",description:"Description",source:"@site/docs/catalog/web/serve-images-in-modern-formats.md",sourceDirName:"catalog/web",slug:"/catalog/web/serve-images-in-modern-formats",permalink:"/catalog/web/serve-images-in-modern-formats",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/web/serve-images-in-modern-formats.md",tags:[{label:"web",permalink:"/tags/web"},{label:"size:small",permalink:"/tags/size-small"},{label:"role:web-developer",permalink:"/tags/role-web-developer"}],version:"current",frontMatter:{version:1,submitted_by:"markus-ntt-seidl, navveenb",published_date:"TBD",category:"web",tags:["web","size:small","role:web-developer"]},sidebar:"tutorialSidebar",previous:{title:"Properly sized images",permalink:"/catalog/web/properly-sized-images"},next:{title:"Tags",permalink:"/tags/"}},l={},m=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serve-images-in-moden-formats"},"Serve images in Moden Formats"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Images are one of the main parts of modern websites and used almost on every website. Modern image formats can help to reduce bandwidth, storage and computing requirements on the displaying device."),(0,a.kt)("p",null,"There are serveral new image formats to choose from, for example WebP and AVIF. All new formats provide better compression ratio, increased quality and more features as traditional formats. "),(0,a.kt)("p",null,"For example WebP offers around 30% smaller files sizes as JPEG without a quality gap."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Test which image format give the best compression ratio, visual quality and device coverage for the website use cases. Use the best image format to serve the images on the website."),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Sofware Carbon Intensity Spec")),(0,a.kt)("p",null,"Concerning the SCI equation, the new image formats will impact the equation as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),": Reducing the amount of emissions by reducing time spent on transfering and processing images")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ability to use modern webbrowsers which supports modern image formats")),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Consider minification to reduce emissions on other resources")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/WebP"},"More Information about WebP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AVIF"},"More Information about AVIF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://caniuse.com/?search=image%20format"},"Image Format WebBrowser Implementation Status"))))}c.isMDXComponent=!0}}]);