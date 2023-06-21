import{j as e,Q as x,r as m}from"./index-55cceeff.js";import{S as C}from"./SideBar-2fea0b7b.js";import{F as y,f as t}from"./FundamentalListItems-4de2c8c1.js";import{C as S,b as v}from"./index.esm-231efaf1.js";import{c as R}from"./Default-1-c8c4daa2.js";import{b as L}from"./Cover-6f4aa2d3.js";import{l as E,m as A,b as F}from"./Default-5-d87e80c7.js";import{c as I,s as N}from"./Default-8-813a8689.js";import"./LoginBackground-5d05c15f.js";import"./Default-10-8aff1d4f.js";const O=({courses:o,tagCard:i,setTagCard:c,setSelectedTag:h,selectedTag:d,selectedTopic:g})=>{if(o.length===0)return e.jsx("div",{className:"fund-no-list",children:e.jsx("h1",{children:"Coming soon...."})});const l=o.reduce((s,a)=>{const n=a.tag,r=s.findIndex(T=>{var u;return((u=T[0])==null?void 0:u.tag)===n});return r===-1?s.push([a]):s[r].push(a),s},[]),f=s=>{h(s),c(!i)};return e.jsxs("div",{className:"fund-list",children:[!i&&d&&e.jsx(y,{groupedCourses:l,selectedTag:d,tagCard:i,setTagCard:c,selectedTopic:g,courseType:"Fundamental"}),i&&l.map((s,a)=>{const n=s.filter(j=>j.status===!0).length,r=s.length,T=s.reduce((j,p)=>j+parseInt(p.time),0),u=Math.floor(T/60);return e.jsxs("div",{className:"fund-card ",onClick:()=>f(s[0].tag),children:[e.jsx("div",{children:e.jsx("img",{src:L,alt:"topic banner",style:{borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px"}})}),e.jsxs("div",{className:"fund-card-left",children:[e.jsxs("div",{children:[e.jsx("p",{className:"p-h5",children:"Fundamental"}),e.jsx("h2",{children:s[0].tag})]}),e.jsxs("p",{className:"p-h4",children:["Total ",u," minutes"]})]}),e.jsxs("div",{className:"fund-card-right",children:[e.jsxs("div",{style:{width:"24px"},children:[n!==r&&e.jsx(S,{value:n/r*100,strokeWidth:14,styles:v({pathColor:"#F37103",trailColor:"#dedede"})}),n===r&&e.jsx("img",{src:R,alt:"checkLogo",width:24})]}),e.jsxs("h2",{children:[n," / ",r]})]})]},a)})]})},z=()=>{const o=x(),[i,c]=m.useState("TOEIC"),[h,d]=m.useState(""),[g,l]=m.useState(!0);return m.useEffect(()=>{const f=new URLSearchParams(o.search),s=f.get("v"),a=f.get("tag"),n=f.get("topic");l(s!=="card"),d(a||""),c(n||"TOEIC"),console.log(s,a)},[o]),e.jsx("div",{children:e.jsxs("div",{className:"fundamental-body ",children:[e.jsx(C,{setSelectedTopic:c,headerTitle:"Fundamental",setTagCard:l,subjects:P}),e.jsxs("div",{className:"fundamental-body-right appear",children:[e.jsx("h1",{children:i}),e.jsx(O,{courses:b[i]?b[i]:[],tagCard:g,setTagCard:l,selectedTag:h,setSelectedTag:d,selectedTopic:i})]})]})})},b={TOEIC:[{id:"13fafjhui21e",title:"Toeic 2018",tag:"Listening",time:"1200",status:!0,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2019",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2020",tag:"Reading",time:"1200",status:!0,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2018",tag:"Listening",time:"1200",status:!0,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2019",tag:"Reading",time:"1200",status:!0,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2020",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2018",tag:"Tense",time:"1200",status:!0,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2019",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2020",tag:"Tense",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2018",tag:"Tense",time:"1200",status:!0,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2019",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toeic 2020",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}}],TOEFL:[{id:"13fafjhui21e",title:"Toefl 2018",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toefl 2019",tag:"Listening",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toefl 2020",tag:"Listening",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"Toefl 2018",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}}],TCAST:[{id:"13fafjhui21e",title:"TCAST 2018",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"TCAST 2019",tag:"Tense",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"TCAST 2020",tag:"If- clause",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"TCAST 2018",tag:"Reading",time:"1200",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"TCAST 2019",tag:"Tense",time:"120 minutes",status:!1,banner:{fundCardBanner:t}},{id:"13fafjhui21e",title:"TCAST 2020",tag:"Tense",time:"120 minutes",status:!1,banner:{fundCardBanner:t}}]},P=[{icon:E,name:"English",topics:["TOEIC","TOEFL","TCAST"]},{icon:A,name:"Math",topics:["Algebra","Geometry","Calculus"]},{icon:F,name:"Biology",topics:["Genetics","Ecology","Evolution"]},{icon:I,name:"Chemistry",topics:["Organic Chemistry","Inorganic Chemistry","Physical Chemistry"]},{icon:N,name:"Physics",topics:["Physics","Earth Science","Astronomy"]}];export{z as default};
