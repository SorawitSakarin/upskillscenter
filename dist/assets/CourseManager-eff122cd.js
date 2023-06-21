import{u as I,j as e,M as y,L as S,r as u,a as R}from"./index-55cceeff.js";import{L as P,C as w}from"./AdminComponent-404b8557.js";import{u as f}from"./http-hook-dc2aacf9.js";import{Y as U}from"./YouTube.esm-ce1361be.js";import{B as m}from"./MainNavbar-eed8c9e6.js";import{C as Y}from"./CardHoverDB-68904f7c.js";import{D}from"./Dropdown-6a958d9d.js";import{F as s,C as c}from"./Form-e975255d.js";import{R as a}from"./Row-bd8b4b80.js";import"./hook-e9eee1cb.js";import"./react-lifecycles-compat.es-22c986ff.js";import"./Anchor-149a2421.js";import"./ElementChildren-9bc860c0.js";const O=({formState:r,showModal:g,setShowModal:o})=>{var l;const N={height:"156",width:"376",playerVars:{autoplay:1}},v=r.videoUrl.split("v=")[1];I();const{isLoading:C,error:j,sendRequest:b,clearError:d}=f(),x=async()=>{try{console.log(r);const h=await b("https://upskill-develop.herokuapp.com/api/course/create","POST",JSON.stringify(r),{"Content-Type":"application/json"});console.log(h),window.location.reload()}catch(h){console.log(h),alert(h)}};return e.jsxs(y,{show:g,onHide:()=>o(!1),children:[e.jsxs(y.Body,{className:"check-modal",children:[e.jsx("h1",{children:"Pretest"}),e.jsxs("p",{className:"p-h2",children:["Pretest Id:",r.preTestId]}),e.jsx("hr",{}),e.jsx("h1",{children:"Subject"}),e.jsx("p",{className:"p-h2",children:r.subject}),e.jsx("hr",{}),e.jsx("h1",{children:"Title"}),e.jsx("p",{className:"p-h2",children:r.topic}),e.jsx("hr",{}),e.jsx("h1",{children:"Tag"}),e.jsx("p",{className:"p-h2",children:r.tag}),e.jsx("hr",{}),e.jsx("h1",{children:"Course type"}),e.jsx("p",{className:"p-h2",children:r.courseType}),e.jsx("hr",{}),e.jsx("h1",{children:"SubDomain"}),e.jsx("p",{className:"p-h2",children:r.subDomain}),e.jsx("hr",{}),e.jsx("h1",{children:"Description"}),e.jsx("p",{className:"p-h2",dangerouslySetInnerHTML:{__html:r.description.replace(/\n/g,"<br />")}}),e.jsx("hr",{}),e.jsx("h1",{children:"time"}),e.jsx("p",{className:"p-h2",children:r.time}),e.jsx("hr",{}),e.jsx("h1",{children:"videoUrl"}),e.jsx("p",{className:"p-h2",children:r.videoUrl}),e.jsx(U,{videoId:v,opts:N}),e.jsx("hr",{}),e.jsx("h1",{children:"banner"}),e.jsx("img",{src:r.banner,alt:"banner"}),e.jsx("hr",{}),e.jsx("h1",{children:"sheetFile"}),e.jsx("div",{children:e.jsx("p",{className:"p-h2",children:(l=r.sheetFile)==null?void 0:l.slice(0,40)})})]}),e.jsxs(y.Footer,{children:[C&&e.jsx(S,{}),e.jsx(m,{onClick:()=>o(!1),variant:"danger",children:"cancel"}),e.jsx(m,{variant:"primary",onClick:x,children:"Submit"})]})]})},_=({existingCourse:r})=>{I();const{isLoading:g,error:o,sendRequest:N,clearError:v}=f(),[C,j]=u.useState(!1),b=()=>{j(!0)},d=async()=>{try{const x=await N("https://upskill-develop.herokuapp.com/api/course/delete/"+r.id,"DELETE",{"Content-Type":"application/json"});console.log(x),window.location.reload()}catch(x){console.log(x)}};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{style:{width:"5%"},children:e.jsx("h2",{children:r.preTestId})}),e.jsx("div",{style:{width:"13%"},children:e.jsx("h2",{children:r.topic})}),e.jsx("div",{style:{width:"15%"},children:e.jsx("h2",{children:r.subject})}),e.jsx("div",{style:{width:"15%"},children:e.jsx("h2",{children:r.subDomain})}),e.jsx("div",{style:{width:"40%"},children:e.jsx("h2",{children:r.courseType})}),e.jsxs("div",{style:{gap:"8px",width:"11%"},children:[e.jsx(m,{variant:"danger",onClick:b,children:"DELETE"}),e.jsx(m,{onClick:()=>alert("Developing"),children:"Edit"})]})]}),e.jsx("div",{}),e.jsxs(y,{show:C,onHide:()=>j(!1),centered:!0,children:[e.jsxs(y.Body,{children:[e.jsx("h1",{children:"Notice"}),e.jsxs("p",{className:"p-h2",children:["ต้องการลบข้อมูล ",r.topic," ใช่หรือไม่?"]})]}),e.jsxs(y.Footer,{children:[g&&e.jsx(S,{}),e.jsx(m,{variant:"danger",onClick:()=>j(!1),children:"cancel"}),e.jsx(m,{variant:"dark",onClick:d,children:"Yes, Delete!!"})]})]})]})},A=({existingCourses:r})=>(console.log(r),e.jsxs("div",{className:"admin-card-col",children:[e.jsx("h1",{children:"Courses edit"}),e.jsx("hr",{}),r.map((g,o)=>e.jsx(_,{existingCourse:g},o))]}));const $=()=>e.jsx("div",{className:"loader",children:e.jsx("div",{className:"scanner",children:e.jsx("span",{children:"Calculating...Result..."})})}),te=()=>{const{isLoading:r,error:g,sendRequest:o,clearError:N}=f(),[v,C]=u.useState([]),[j,b]=u.useState([]),[d,x]=u.useState(),[l,h]=u.useState({subject:"",topic:"",courseType:"",description:"",studentList:"",banner:null,sheetFile:null,videoUrl:"",subDomain:"",tag:"",time:"",preTestId:""}),t=n=>{const{name:p,value:i,files:k}=n.target;if(p==="sheetFile"||p==="banner"){if(k){const B=k[0],T=new FileReader;T.onload=H=>{var E;const G=(E=H.target)==null?void 0:E.result;h({...l,[p]:G})},T.readAsDataURL(B)}}else h({...l,[p]:i})};u.useEffect(()=>{const n=async()=>{try{const i=await o("https://upskill-develop.herokuapp.com/api/pretest");C(i.data),console.log(i)}catch{}},p=async()=>{try{const i=await o("https://upskill-develop.herokuapp.com/api/course");b(i.data),console.log(i)}catch{}};n(),p()},[o]);const q=n=>{x(n),h({...l,preTestId:n.id})},[F,L]=u.useState(!1),M=n=>{n.preventDefault(),console.log(l),L(!0)};return r?e.jsx("div",{children:e.jsx(R,{})}):e.jsx("div",{children:e.jsx(P,{children:!r&&v&&e.jsxs("div",{className:"flex flex-col p-20 gap-10",style:{background:"#f4f4f4",minHeight:"100vh"},children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Course Manager"}),e.jsx($,{}),e.jsx(Y,{})]}),e.jsxs(w,{children:[e.jsx(w.Header,{children:e.jsxs(D,{children:[e.jsx(D.Toggle,{children:d?d.title:"เลือกข้อสอบ pretest"}),e.jsx(D.Menu,{children:v.map((n,p)=>e.jsx(D.Item,{style:{color:"black"},onClick:()=>q(n),children:n.title},p))})]})}),e.jsx(w.Body,{children:e.jsxs(s,{onSubmit:M,children:[e.jsxs(a,{children:[e.jsx(c,{children:e.jsxs(s.Group,{controlId:"schoolSubject",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," วิชา (English, Math, Biology, Chemistry, Science)"]}),e.jsx(s.Control,{type:"text",name:"subject",value:l.subject,onChange:t,placeholder:"English, Math, Biology, Chemistry, Science",required:!0})]})}),e.jsx(c,{children:e.jsxs(s.Group,{controlId:"schooltopic",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," ชื่อบทเรียน"]}),e.jsx(s.Control,{type:"text",name:"topic",value:l.topic,onChange:t,placeholder:"TOEIC",required:!0})]})})]}),e.jsx(a,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(s.Group,{controlId:"courseType",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," ประเภทบทเรียน fundamental หรือ technique"]}),e.jsx(s.Control,{type:"text",name:"courseType",value:l.courseType,onChange:t,placeholder:"fundamental",required:!0})]})})}),e.jsx(a,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(s.Group,{controlId:"tag",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," tag จะต้องเป็นหนึ่งใน tag เดียวกันกับของ Pre test ที่เลือกไว้","     ",d&&e.jsxs("span",{children:[d.title," : ",d.tag]})]}),e.jsx(s.Control,{type:"text",name:"tag",value:l.tag,onChange:t,placeholder:"listening",required:!0})]})})}),e.jsx(a,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(s.Group,{controlId:"description",children:[e.jsx(s.Label,{children:"คำบรรยาย"}),e.jsx(s.Control,{type:"text",name:"description",value:l.description,onChange:t,placeholder:"Description"})]})})}),e.jsx(a,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(s.Group,{controlId:"videoUrl",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," ลิ้งค์ของ Youtube"]}),e.jsx(s.Control,{type:"text",name:"videoUrl",value:l.videoUrl,onChange:t,placeholder:"www.youtube.com",required:!0})]})})}),e.jsx(a,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(s.Group,{controlId:"Time",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," ใช้เวลาเท่าไหร่(วินาที)"]}),e.jsx(s.Control,{type:"text",name:"time",value:l.time,onChange:t,placeholder:"120",required:!0})]})})}),e.jsx(a,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(s.Group,{controlId:"subDomain",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," โปรดใส่ subdomain ที่อนุญาติให้เข้าถึงคอร์สนี้ได้ หากอนุญาติให้ทุกโรงเรียนใช้ได้ ให้พิมพ์ all"]}),e.jsx(s.Control,{type:"text",name:"subDomain",value:l.subDomain,onChange:t,placeholder:"rstd",required:!0})]})})}),e.jsx(a,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(s.Group,{controlId:"schoolBanner",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," Banner "]}),e.jsx(s.Control,{name:"banner",accept:"image/*",onChange:t,required:!0,type:"file"})]})})}),e.jsx(a,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(s.Group,{controlId:"sheetFile",children:[e.jsx(s.Label,{children:"ไฟล์สำหรับการเรียนการสอน .PDF"}),e.jsx(s.Control,{name:"sheetFile",accept:"*",onChange:t,type:"file"})]})})}),e.jsx(m,{variant:"primary",type:"submit",className:"mt-3",children:"Submit"})]})})]}),j&&e.jsx(A,{existingCourses:j}),e.jsx(O,{formState:l,showModal:F,setShowModal:L})]})})})};export{te as default};
