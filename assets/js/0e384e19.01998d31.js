(self.webpackChunkghf_docs=self.webpackChunkghf_docs||[]).push([[671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={sidebar_position:1},l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started",description:"Here are instructions to get started quickly with grommet-hook-form.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/styled-hook-form-docs/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/styled-hook-form-docs/docs/built-in-editors/create-a-page"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here are instructions to get started quickly with ",(0,i.kt)("inlineCode",{parentName:"p"},"grommet-hook-form"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install ",(0,i.kt)("inlineCode",{parentName:"p"},"grommet-hook-form")," issuing following command in you'r terminal should be enough."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," yarn add gromet-hook-form styled-components\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," npm install gromet-hook-form styled-components\n")),(0,i.kt)("p",null,"notice that you have to install ",(0,i.kt)("inlineCode",{parentName:"p"},"styled-components")," as a peer dependency."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To start using ",(0,i.kt)("inlineCode",{parentName:"p"},"grommet-hook-form")," in you'r project all you have to do is importing ",(0,i.kt)("inlineCode",{parentName:"p"},"FormBuilder")," components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Button } from "grommet";\nimport { FormBuilder, FormField, FormFieldType } from "gromet-hook-form";\n\nconst SimpleForm = () => {\n  const formFields: FormField[] = [\n    {\n      name: "fullName",\n      label: "Full Name",\n      type: FormFieldType.Text,\n      required: true,\n    },\n    {\n      name: "jobTitle",\n      label: "Job Title",\n      type: FormFieldType.Text,\n      required: true,\n    },\n    {\n      name: "appDate",\n      label: "Appointment Date",\n      type: FormFieldType.Date\n    },\n  ];\n\n  const handleSubmit = (values: any) => {\n    alert(JSON.stringify(values));\n  };\n\n  return (\n    <FormBuilder fields={formFields} onSubmit={handleSubmit}>\n      <Button label="Submit" type="submit" primary />\n    </FormBuilder>\n  );\n};\n')),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Now that you are familiar with ",(0,i.kt)("inlineCode",{parentName:"p"},"FormBuilder")," component its time to discovert defferent type of built-in edtors and practice with properties, events and APIs they offer."))}p.isMDXComponent=!0}}]);