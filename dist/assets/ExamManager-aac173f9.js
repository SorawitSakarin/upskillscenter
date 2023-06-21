import{u as W,j as e,M as D,L as M,r as u,A as z,a as J}from"./index-55cceeff.js";import{C as B,L as X}from"./AdminComponent-404b8557.js";import{F as Y,T as _}from"./index.esm-209d4ef6.js";import{Y as $}from"./YouTube.esm-ce1361be.js";import{u as O}from"./http-hook-dc2aacf9.js";import{B as p}from"./MainNavbar-eed8c9e6.js";import{F as s,C as d}from"./Form-e975255d.js";import{R as i}from"./Row-bd8b4b80.js";import{D as P}from"./Dropdown-6a958d9d.js";import"./iconBase-4260ecf4.js";import"./hook-e9eee1cb.js";import"./react-lifecycles-compat.es-22c986ff.js";import"./Anchor-149a2421.js";import"./ElementChildren-9bc860c0.js";const Q=({formState:l,showModal:C,setShowModal:j})=>{var F;const f={height:"156",width:"376",playerVars:{autoplay:1}},y=l.videoUrl.split("v=")[1];W();const{isLoading:n,error:c,sendRequest:o,clearError:T}=O(),b=async()=>{console.log(l);try{const m=await o("https://upskill-develop.herokuapp.com/api/pretest/create","POST",JSON.stringify(l),{"Content-Type":"application/json"});console.log(m),window.location.reload()}catch(m){console.log(m),alert(m)}};return e.jsxs(D,{show:C,onHide:()=>j(!1),children:[e.jsxs(D.Body,{className:"check-modal",children:[e.jsx("h1",{children:"Subject"}),e.jsx("p",{className:"p-h2",children:l.subject}),e.jsx("hr",{}),e.jsx("h1",{children:"Title"}),e.jsx("p",{className:"p-h2",children:l.title}),e.jsx("hr",{}),e.jsx("h1",{children:"Description"}),e.jsx("p",{className:"p-h2",dangerouslySetInnerHTML:{__html:l.description.replace(/\n/g,"<br />")}}),e.jsx("hr",{}),e.jsx("h1",{children:"Time"}),e.jsxs("p",{className:"p-h2",children:[l.time," วินาที"]}),e.jsx("hr",{}),e.jsx("h1",{children:"SubDomain ที่เข้าได้"}),e.jsx("p",{className:"p-h2",children:l.subDomain}),e.jsx("hr",{}),e.jsx("h1",{children:"VideoUrl"}),e.jsx("p",{className:"p-h2",children:l.videoUrl}),e.jsx($,{videoId:y,opts:f}),e.jsx("hr",{}),e.jsx("h1",{children:"Banner"}),e.jsx("img",{src:l.banner,alt:"banner"}),e.jsx("hr",{}),e.jsx("h1",{children:"QuestionFile"}),l.questionFile&&l.questionFile.map((m,a)=>e.jsx("img",{src:m,alt:"banner"},a)),e.jsx("hr",{}),e.jsx("h1",{children:"SolutionFile"}),l.solutionFile&&l.solutionFile.map((m,a)=>e.jsx("img",{src:m,alt:"banner"},a)),e.jsx("hr",{}),e.jsx("h1",{children:"SolutionWithTagFile"}),e.jsx("p",{className:"p-h2",children:(F=l.solutionWithTagFile)==null?void 0:F.slice(0,40)})]}),e.jsxs(D.Footer,{children:[n&&e.jsx(M,{}),e.jsx(p,{onClick:()=>j(!1),variant:"danger",children:"cancel"}),e.jsx(p,{variant:"primary",onClick:b,children:"Submit"})]})]})},K=()=>{const[l,C]=u.useState({questionFile:null,solutionFile:null,solutionWithTagFile:null,banner:null,description:"",studentList:"",title:"",time:"",videoUrl:"",subject:"",tag:"",subDomain:""}),j=N=>{const{name:w,value:E,files:k}=N.target;if(w==="banner"){if(k){const q=k[0],x=new FileReader;x.onload=r=>{var h;const t=(h=r.target)==null?void 0:h.result;C({...l,[w]:t})},x.readAsDataURL(q)}}else if(w==="questionFile"||w==="solutionFile"){if(k){let q=Array.from(k).map(x=>new Promise((r,t)=>{const h=new FileReader;h.onload=g=>{var v;return r((v=g.target)==null?void 0:v.result)},h.onerror=t,h.readAsDataURL(x)}));Promise.all(q).then(x=>{C({...l,[w]:x})}).catch(x=>console.error(x))}}else C(w==="title"?{...l,[w]:E.toUpperCase()}:{...l,[w]:E})},[f,y]=u.useState(!1),n=N=>{N.preventDefault(),console.log(l),y(!0)},[c,o]=u.useState(),T=new FileReader,[b,F]=u.useState({head:"",body:""}),[m,a]=u.useState(!1),I=N=>{o(N.target.files[0])},G=N=>{N.preventDefault(),c&&(T.onload=function(w){var k;const E=(k=w.target)==null?void 0:k.result;F({...b,head:E.split(`
`)[0],body:E}),console.log(E.split(`
`)[1]),console.log(E.split(`
`)[2])},T.readAsText(c),console.log(c)),a(!m)},S=()=>{if(c){const N=c,w=new FileReader;w.onload=E=>{var q;const k=(q=E.target)==null?void 0:q.result;C({...l,solutionWithTagFile:k.split("base64,")[1]})},w.readAsDataURL(N)}};return e.jsxs(B,{children:[e.jsx(B.Body,{children:e.jsxs(s,{onSubmit:n,children:[e.jsx(i,{className:"mb-3",children:e.jsx("h2",{children:"Pre test manager"})}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s.Group,{controlId:"schoolSubject",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"}),"  วิชา (English, Math, Biology, Chemistry, Science)"]}),e.jsx(s.Control,{type:"text",name:"subject",value:l.subject,onChange:j,placeholder:"English, Math, Biology, Chemistry, Science",required:!0})]})}),e.jsx(d,{children:e.jsxs(s.Group,{controlId:"schooltitle",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"}),"  ชื่อข้อสอบ"]}),e.jsx(s.Control,{type:"text",name:"title",value:l.title,onChange:j,placeholder:"TOEIC",required:!0})]})})]}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"description",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"}),"  คำบรรยาย ไทย หรือ อังกฤษก็ได้"]}),e.jsx(s.Control,{as:"textarea",rows:4,name:"description",value:l.description,onChange:j,placeholder:`การสอบ TOEIC (Test of English for International Communication) เป็นการทดสอบที่ใช้ประเมินความสามารถในการใช้ภาษาอังกฤษในการสื่อสารในสถานการณ์ทางธุรกิจ สอบ TOEIC ประกอบด้วยสองส่วนหลัก คือ ส่วนการฟัง (Listening Section) และส่วนการอ่าน (Reading Section) โดยมีจำนวนคำถามที่ต่างกันและใช้เวลาในการทำสอบตามแต่ละส่วน ส่วนการฟัง (Listening Section) จะประกอบด้วยบทสนทนาที่ถูกบันทึกไว้ในรูปแบบเสียง ซึ่งผู้เข้าสอบจะต้องฟังและตอบคำถามตามเนื้อหาที่ได้ยิน โดยมีจำนวนคำถามประมาณ 100 ข้อ และใช้เวลาในการทำสอบประมาณ 45-75 นาที
                  ส่วนการอ่าน (Reading Section) จะประกอบด้วยข้อความที่เขียนเป็นภาษาอังกฤษ ซึ่งผู้เข้าสอบจะต้องอ่านและตอบคำถามตามเนื้อหาที่ได้อ่าน โดยมีจำนวนคำถามประมาณ 100 ข้อ และใช้เวลาในการทำสอบประมาณ 75-90 นาที`,required:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"Time",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"}),"  ใช้เวลาเท่าไหร่(วินาที)"]}),e.jsx(s.Control,{type:"text",name:"time",value:l.time,onChange:j,placeholder:"7200",required:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"subDomain",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," ใส่ subDomain ที่อนุญาติให้เข้าถึง ถ้าทุกโรงเรียนใช้ได้ให้ใส่ all"]}),e.jsx(s.Control,{type:"text",name:"subDomain",value:l.subDomain,onChange:j,placeholder:"all",required:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"videoUrl",children:[e.jsx(s.Label,{children:"ลิ้งค์ Video Url ถ้าไม่มี ไม่ต้องใส่"}),e.jsx(s.Control,{type:"text",name:"videoUrl",value:l.videoUrl,onChange:j,placeholder:"www.youtube.com"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"schoolBanner",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"}),"  Banner"]}),e.jsx(s.Control,{name:"banner",accept:"image/*",onChange:j,required:!0,type:"file"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"questionFile",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"}),"  ไฟล์ข้อสอบ .PDF"]}),e.jsx(s.Control,{name:"questionFile",accept:"image/*",onChange:j,type:"file",multiple:!0,required:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"solutionFile",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"}),"  ไฟล์เฉลย .PDF"]}),e.jsx(s.Control,{name:"solutionFile",accept:"image/*",onChange:j,type:"file",multiple:!0,required:!0})]})})}),e.jsxs(i,{className:"mt-4",children:[e.jsxs("h4",{children:[e.jsx("span",{style:{color:"red"},children:"*"}),"  ไฟล์เฉลยละเอียดรวม TAG .CSV"]}),e.jsx("input",{type:"file",id:"csvFileInput",accept:".csv,.xlsx",onChange:I}),e.jsx(p,{style:{width:"200px"},variant:"warning",onClick:N=>{G(N)},children:"SHOW FILE CSV เพื่อตรวจสอบ"}),m&&e.jsxs(p,{variant:"outline-danger",style:{width:"200px"},onClick:S,children:[" ","ใช้ไฟล์นี้แหละ"]}),l.solutionWithTagFile&&e.jsx("div",{children:e.jsx(Y,{size:24})}),m&&e.jsx("div",{style:{overflowX:"auto",overflowY:"auto",height:"30vh"},children:e.jsx(_,{head:b.head,body:b.body})})]}),e.jsx(p,{variant:"primary",type:"submit",className:"mt-3",children:"Submit"})]})}),e.jsx(Q,{formState:l,showModal:f,setShowModal:y})]})},Z=({formState:l,showModal:C,setShowModal:j,selectedPretest:f})=>{var m;const y={height:"156",width:"376",playerVars:{autoplay:1}},n=l.videoUrl.split("v=")[1];W();const{isLoading:c,error:o,sendRequest:T,clearError:b}=O(),F=async()=>{try{console.log(l);const a=await T("https://upskill-develop.herokuapp.com/api/posttest/create","POST",JSON.stringify(l),{"Content-Type":"application/json"});console.log(a),window.location.reload()}catch(a){console.log(a),alert(a)}};return e.jsxs(D,{show:C,onHide:()=>j(!1),children:[e.jsxs(D.Body,{className:"check-modal",children:[e.jsx("h1",{children:"Pretest"}),f&&e.jsxs("p",{className:"p-h2",children:["Title: ",f.title]}),f&&e.jsxs("p",{className:"p-h2",children:["ID: ",l.preTestId]}),!f&&e.jsx("p",{className:"p-h2",children:"ยังไม่เลือกข้อสอบ pretest กลับไปเลือก"}),e.jsx("hr",{}),e.jsx("h1",{children:"Subject"}),e.jsx("p",{className:"p-h2",children:l.subject}),e.jsx("hr",{}),e.jsx("h1",{children:"Title"}),e.jsx("p",{className:"p-h2",children:l.title}),e.jsx("hr",{}),e.jsx("h1",{children:"Description"}),e.jsx("p",{className:"p-h2",dangerouslySetInnerHTML:{__html:l.description.replace(/\n/g,"<br />")}}),e.jsx("hr",{}),e.jsx("h1",{children:"Time"}),e.jsx("p",{className:"p-h2",children:l.time}),e.jsx("hr",{}),e.jsx("h1",{children:"SubDomain ที่เข้าถึงได้"}),e.jsx("p",{className:"p-h2",children:l.subDomain}),e.jsx("hr",{}),e.jsx("h1",{children:"VideoUrl"}),e.jsx("p",{className:"p-h2",children:l.videoUrl}),e.jsx($,{videoId:n,opts:y}),e.jsx("hr",{}),e.jsx("h1",{children:"Banner"}),e.jsx("img",{src:l.banner,alt:"banner"}),e.jsx("hr",{}),e.jsx("h1",{children:"QuestionFile"}),l.questionFile&&l.questionFile.map((a,I)=>e.jsx("img",{src:a,alt:"banner"},I)),e.jsx("hr",{}),e.jsx("h1",{children:"SolutionFile"}),l.solutionFile&&l.solutionFile.map((a,I)=>e.jsx("img",{src:a,alt:"banner"},I)),e.jsx("hr",{}),e.jsx("h1",{children:"SolutionWithTagFile"}),e.jsx("p",{className:"p-h2",children:(m=l.solutionWithTagFile)==null?void 0:m.slice(0,40)}),e.jsx("hr",{})]}),e.jsxs(D.Footer,{children:[c&&e.jsx(M,{}),e.jsx(p,{onClick:()=>j(!1),variant:"danger",children:"cancel"}),f&&e.jsx(p,{variant:"primary",onClick:F,children:"Submit"}),!f&&e.jsx(p,{onClick:()=>j(!1),variant:"danger",children:"เลือก pretest ด้วย"})]})]})},ee=({existingPretests:l})=>{const C=l==null?void 0:l.data,[j,f]=u.useState(),[y,n]=u.useState({questionFile:null,solutionFile:null,solutionWithTagFile:null,banner:null,description:"",title:"",time:"",videoUrl:"",subject:"",preTestId:"",tag:"",subDomain:""}),c=x=>{const{name:r,value:t,files:h}=x.target;if(r==="banner"){if(h){const g=h[0],v=new FileReader;v.onload=L=>{var U;const V=(U=L.target)==null?void 0:U.result;n({...y,[r]:V})},v.readAsDataURL(g)}}else if(r==="questionFile"||r==="solutionFile"){if(h){let g=Array.from(h).map(v=>new Promise((L,V)=>{const U=new FileReader;U.onload=R=>{var H;return L((H=R.target)==null?void 0:H.result)},U.onerror=V,U.readAsDataURL(v)}));Promise.all(g).then(v=>{n({...y,[r]:v})}).catch(v=>console.error(v))}}else n({...y,[r]:t})},[o,T]=u.useState(!1),b=x=>{x.preventDefault(),console.log(y),T(!0)},[F,m]=u.useState(),a=new FileReader,[I,G]=u.useState({head:"",body:""}),[S,N]=u.useState(!1),w=x=>{m(x.target.files[0])},E=x=>{x.preventDefault(),F&&(a.onload=function(r){var h;const t=(h=r.target)==null?void 0:h.result;G({...I,head:t.split(`
`)[0],body:t}),console.log(t.split(`
`)[1]),console.log(t.split(`
`)[2])},a.readAsText(F),console.log(F)),N(!S)},k=()=>{if(F){const x=F,r=new FileReader;r.onload=t=>{var g;const h=(g=t.target)==null?void 0:g.result;n({...y,solutionWithTagFile:h.split("base64,")[1]})},r.readAsDataURL(x)}},q=x=>{f(x),n({...y,preTestId:x.id})};return e.jsxs(B,{children:[e.jsxs(B.Header,{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsx("h2",{children:"โปรดเลือกข้อสอบ pretest ที่ต้องการจะผูกด้วย"}),e.jsxs(P,{children:[e.jsx(P.Toggle,{children:j?j.title:"เลือกข้อสอบ pretest"}),e.jsx(P.Menu,{children:C.map((x,r)=>e.jsx(P.Item,{onClick:()=>q(x),children:x.title},r))})]})]}),e.jsx(B.Body,{children:e.jsxs(s,{onSubmit:b,children:[e.jsx(i,{className:"mb-3",children:e.jsx("h2",{children:"Post test manager"})}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s.Group,{controlId:"schoolSubject",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," วิชา (English, Math, Biology, Chemistry, Science)"]}),e.jsx(s.Control,{type:"text",name:"subject",value:y.subject,onChange:c,placeholder:"English, Math, Biology, Chemistry, Science",required:!0})]})}),e.jsx(d,{children:e.jsxs(s.Group,{controlId:"schooltitle",children:[e.jsxs(s.Label,{children:[" ",e.jsx("span",{style:{color:"red"},children:"*"})," ชื่อข้อสอบ"]}),e.jsx(s.Control,{type:"text",name:"title",value:y.title,onChange:c,placeholder:"TOEIC",required:!0})]})})]}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"description",children:[e.jsxs(s.Label,{children:[" ",e.jsx("span",{style:{color:"red"},children:"*"})," คำบรรยาย ไทย หรือ อังกฤษก็ได้"]}),e.jsx(s.Control,{as:"textarea",rows:4,name:"description",value:y.description,onChange:c,placeholder:`การสอบ TOEIC (Test of English for International Communication) เป็นการทดสอบที่ใช้ประเมินความสามารถในการใช้ภาษาอังกฤษในการสื่อสารในสถานการณ์ทางธุรกิจ สอบ TOEIC ประกอบด้วยสองส่วนหลัก คือ ส่วนการฟัง (Listening Section) และส่วนการอ่าน (Reading Section) โดยมีจำนวนคำถามที่ต่างกันและใช้เวลาในการทำสอบตามแต่ละส่วน ส่วนการฟัง (Listening Section) จะประกอบด้วยบทสนทนาที่ถูกบันทึกไว้ในรูปแบบเสียง ซึ่งผู้เข้าสอบจะต้องฟังและตอบคำถามตามเนื้อหาที่ได้ยิน โดยมีจำนวนคำถามประมาณ 100 ข้อ และใช้เวลาในการทำสอบประมาณ 45-75 นาที
                  ส่วนการอ่าน (Reading Section) จะประกอบด้วยข้อความที่เขียนเป็นภาษาอังกฤษ ซึ่งผู้เข้าสอบจะต้องอ่านและตอบคำถามตามเนื้อหาที่ได้อ่าน โดยมีจำนวนคำถามประมาณ 100 ข้อ และใช้เวลาในการทำสอบประมาณ 75-90 นาที`,required:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"Time",children:[e.jsxs(s.Label,{children:[" ",e.jsx("span",{style:{color:"red"},children:"*"})," ใช้เวลาเท่าไหร่(วินาที)"]}),e.jsx(s.Control,{type:"text",name:"time",value:y.time,onChange:c,placeholder:"7200",required:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"subDomain",children:[e.jsxs(s.Label,{children:[e.jsx("span",{style:{color:"red"},children:"*"})," ใส่ subDomain ที่อนุญาติให้เข้าถึง ถ้าทุกโรงเรียนใช้ได้ให้ใส่ all"]}),e.jsx(s.Control,{type:"text",name:"subDomain",value:y.subDomain,onChange:c,placeholder:"all",required:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"videoUrl",children:[e.jsx(s.Label,{children:"ลิ้งค์ Video Url ถ้าไม่มี ไม่ต้องใส่"}),e.jsx(s.Control,{type:"text",name:"videoUrl",value:y.videoUrl,onChange:c,placeholder:"www.youtube.com"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"schoolBanner",children:[e.jsxs(s.Label,{children:[" ",e.jsx("span",{style:{color:"red"},children:"*"})," Banner"]}),e.jsx(s.Control,{name:"banner",accept:"image/*",onChange:c,required:!0,type:"file"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"questionFile",children:[e.jsxs(s.Label,{children:[" ",e.jsx("span",{style:{color:"red"},children:"*"})," ไฟล์ข้อสอบ .PDF"]}),e.jsx(s.Control,{name:"questionFile",accept:"image/*",onChange:c,type:"file",multiple:!0,required:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"solutionFile",children:[e.jsxs(s.Label,{children:[" ",e.jsx("span",{style:{color:"red"},children:"*"})," ไฟล์เฉลย .PDF"]}),e.jsx(s.Control,{name:"solutionFile",accept:"image/*",onChange:c,type:"file",multiple:!0,required:!0})]})})}),e.jsxs(i,{className:"mt-4",children:[e.jsxs("h4",{children:[" ",e.jsx("span",{style:{color:"red"},children:"*"})," ไฟล์เฉลยละเอียดรวม TAG .CSV"]}),e.jsx("input",{type:"file",id:"csvFileInput",accept:".csv",onChange:w}),e.jsx(p,{style:{width:"200px"},variant:"warning",onClick:x=>{E(x)},children:"SHOW FILE CSV เพื่อตรวจสอบ"}),S&&e.jsxs(p,{variant:"outline-danger",style:{width:"200px"},onClick:k,children:[" ","ใช้ไฟล์นี้แหละ"]}),y.solutionWithTagFile&&e.jsx("div",{children:e.jsx(Y,{size:24})}),S&&e.jsx("div",{style:{overflowX:"auto",overflowY:"auto",height:"30vh"},children:e.jsx(_,{head:I.head,body:I.body})})]}),e.jsx(p,{variant:"primary",type:"submit",className:"mt-3",children:"Submit"})]})}),e.jsx(Z,{formState:y,showModal:o,setShowModal:T,selectedPretest:j})]})};const se=({pretestId:l})=>{const{isLoading:C,error:j,sendRequest:f,clearError:y}=O(),[n,c]=u.useState({subject:"",title:"",description:"",time:"",tag:"",studentList:"",videoUrl:"",banner:null,questionFile:null,solutionFile:null,solutionWithTagFile:null,subDomain:""}),o=r=>{const{name:t,value:h,files:g}=r.target;if(t==="banner"){if(g){const v=g[0],L=new FileReader;L.onload=V=>{var R;const U=(R=V.target)==null?void 0:R.result;c({...n,[t]:U})},L.readAsDataURL(v)}}else if(t==="questionFile"||t==="solutionFile"){if(g){let v=Array.from(g).map(L=>new Promise((V,U)=>{const R=new FileReader;R.onload=H=>{var A;return V((A=H.target)==null?void 0:A.result)},R.onerror=U,R.readAsDataURL(L)}));Promise.all(v).then(L=>{c({...n,[t]:L})}).catch(L=>console.error(L))}}else c({...n,[t]:h})},[T,b]=u.useState(!1),F=r=>{r.preventDefault(),console.log(n),b(!0)},m=async()=>{var r;for(let t in n)(((r=n[t])==null?void 0:r.length)<1||n[t]==null)&&delete n[t];try{const t=await f("https://upskill-develop.herokuapp.com/api/pretest/update/"+l,"PUT",JSON.stringify(n),{"Content-Type":"application/json"});console.log(t),window.location.reload()}catch(t){console.log(t),alert(t)}},[a,I]=u.useState(),G=new FileReader,[S,N]=u.useState({head:"",body:""}),[w,E]=u.useState(!1),k=r=>{I(r.target.files[0])},q=r=>{r.preventDefault(),a&&(G.onload=function(t){var g;const h=(g=t.target)==null?void 0:g.result;N({...S,head:h.split(`
`)[0],body:h}),console.log(h.split(`
`)[1]),console.log(h.split(`
`)[2])},G.readAsText(a),console.log(a)),E(!w)},x=()=>{if(a){const r=a,t=new FileReader;t.onload=h=>{var v;const g=(v=h.target)==null?void 0:v.result;c({...n,solutionWithTagFile:g.split("base64,")[1]})},t.readAsDataURL(r)}};return e.jsxs("div",{style:{display:"flex",padding:"24px",border:"1px solid black"},children:[e.jsxs(s,{onSubmit:F,children:[e.jsx(i,{className:"mb-3",children:e.jsx("h2",{children:"Pre test edit"})}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s.Group,{controlId:"pretestSubject",children:[e.jsx(s.Label,{children:"วิชา (English, Math, Biology, Chemistry, Science)"}),e.jsx(s.Control,{type:"text",name:"subject",value:n.subject,onChange:o,placeholder:"English, Math, Biology, Chemistry, Science"})]})}),e.jsx(d,{children:e.jsxs(s.Group,{controlId:"pretesttitle",children:[e.jsx(s.Label,{children:"ชื่อข้อสอบ"}),e.jsx(s.Control,{type:"text",name:"title",value:n.title,onChange:o,placeholder:"TOEIC"})]})})]}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"description",children:[e.jsx(s.Label,{children:"คำบรรยาย ไทย หรือ อังกฤษก็ได้"}),e.jsx(s.Control,{as:"textarea",rows:4,name:"description",value:n.description,onChange:o,placeholder:"คำบรรยาย"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"Time",children:[e.jsx(s.Label,{children:" ใช้เวลาเท่าไหร่(วินาที)"}),e.jsx(s.Control,{type:"text",name:"time",value:n.time,onChange:o,placeholder:"7200"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"subDomain",children:[e.jsx(s.Label,{children:" SubDomain ที่อนุญาต"}),e.jsx(s.Control,{type:"text",name:"subDomain",value:n.subDomain,onChange:o,placeholder:"all"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"studentList",children:[e.jsx(s.Label,{children:" Student List"}),e.jsx(s.Control,{type:"text",name:"studentList",value:n.studentList,onChange:o,placeholder:"1,2,3,4"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"videoUrl",children:[e.jsx(s.Label,{children:"ลิ้งค์ Video Url ถ้าไม่มี ไม่ต้องใส่"}),e.jsx(s.Control,{type:"text",name:"videoUrl",value:n.videoUrl,onChange:o,placeholder:"www.youtube.com"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"pretestBanner",children:[e.jsx(s.Label,{children:" Banner"}),e.jsx(s.Control,{name:"banner",accept:"image/*",onChange:o,type:"file"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"questionFile",children:[e.jsx(s.Label,{children:"ไฟล์ข้อสอบ .PDF"}),e.jsx(s.Control,{name:"questionFile",accept:"image/*",onChange:o,type:"file",multiple:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"solutionFile",children:[e.jsx(s.Label,{children:" ไฟล์เฉลย .PDF"}),e.jsx(s.Control,{name:"solutionFile",accept:"image/*",onChange:o,type:"file",multiple:!0})]})})}),e.jsxs(i,{className:"mt-4",children:[e.jsx("h4",{children:" ไฟล์เฉลยละเอียดรวม TAG .CSV"}),e.jsx("input",{type:"file",id:"csvFileInput",accept:".csv,.xlsx",onChange:k}),e.jsx(p,{style:{width:"200px"},variant:"warning",onClick:r=>{q(r)},children:"SHOW FILE CSV เพื่อตรวจสอบ"}),w&&e.jsxs(p,{variant:"outline-danger",style:{width:"200px"},onClick:x,children:[" ","ใช้ไฟล์นี้แหละ"]}),n.solutionWithTagFile&&e.jsx("div",{children:e.jsx(Y,{size:24})}),w&&e.jsx("div",{style:{overflowX:"auto",overflowY:"auto",height:"30vh"},children:e.jsx(_,{head:S.head,body:S.body})})]}),e.jsx(p,{variant:"primary",type:"submit",className:"mt-3",children:"Submit"})]}),e.jsxs(D,{show:T,onHide:()=>b(!1),centered:!0,children:[e.jsxs(D.Body,{children:[e.jsx("h1",{children:"Notice"}),e.jsx("p",{className:"p-h2",children:"ยืนยันการอัพเดทข้อมูล ใช่หรือไม่?"})]}),e.jsxs(D.Footer,{children:[C&&e.jsx(M,{}),e.jsx(p,{variant:"danger",onClick:()=>b(!1),children:"cancel"}),e.jsx(p,{variant:"dark",onClick:m,children:"Yes, Update!"})]})]})]})},le=({existingPretest:l})=>{W();const{isLoading:C,error:j,sendRequest:f,clearError:y}=O(),[n,c]=u.useState(!1),[o,T]=u.useState(!1),b=()=>{c(!0)},F=async()=>{try{const a=await f("https://upskill-develop.herokuapp.com/api/pretest/delete/"+l.id,"DELETE",{"Content-Type":"application/json"});console.log(a),window.location.reload()}catch(a){console.log(a)}},m=async()=>{T(!o)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{style:{width:"5%"},children:e.jsxs("h2",{children:[l.id," "]})}),e.jsx("div",{style:{width:"20%"},children:e.jsxs("h2",{children:[l.title," "]})}),e.jsx("div",{style:{width:"15%"},children:e.jsxs("h2",{children:[l.subject," "]})}),e.jsx("div",{style:{width:"55%"},children:e.jsx("h2",{children:l.tag})}),e.jsxs("div",{style:{gap:"8px"},children:[e.jsx(p,{variant:"danger",onClick:b,children:"DELETE"}),e.jsx(p,{onClick:m,children:"Edit"})]})]}),o&&e.jsx(se,{pretestId:l.id}),e.jsxs(D,{show:n,onHide:()=>c(!1),centered:!0,children:[e.jsxs(D.Body,{children:[e.jsx("h1",{children:"Notice"}),e.jsxs("p",{className:"p-h2",children:["ต้องการลบข้อมูล ",l.title," ใช่หรือไม่?"]})]}),e.jsxs(D.Footer,{children:[C&&e.jsx(M,{}),e.jsx(p,{variant:"danger",onClick:()=>c(!1),children:"cancel"}),e.jsx(p,{variant:"dark",onClick:F,children:"Yes, Delete!!"})]})]})]})},ne=({existingPretests:l})=>(console.log(l),e.jsxs("div",{className:"admin-card-col",children:[e.jsx("h1",{children:"Pre Test edit"}),e.jsx("hr",{}),l.map((C,j)=>e.jsx(le,{existingPretest:C},j))]})),te=({posttestId:l})=>{const{isLoading:C,error:j,sendRequest:f,clearError:y}=O(),[n,c]=u.useState({subject:"",title:"",description:"",time:"",tag:"",studentList:"",videoUrl:"",banner:null,questionFile:null,solutionFile:null,solutionWithTagFile:null,subDomain:""}),o=r=>{const{name:t,value:h,files:g}=r.target;if(t==="banner"){if(g){const v=g[0],L=new FileReader;L.onload=V=>{var R;const U=(R=V.target)==null?void 0:R.result;c({...n,[t]:U})},L.readAsDataURL(v)}}else if(t==="questionFile"||t==="solutionFile"){if(g){let v=Array.from(g).map(L=>new Promise((V,U)=>{const R=new FileReader;R.onload=H=>{var A;return V((A=H.target)==null?void 0:A.result)},R.onerror=U,R.readAsDataURL(L)}));Promise.all(v).then(L=>{c({...n,[t]:L})}).catch(L=>console.error(L))}}else c({...n,[t]:h})},[T,b]=u.useState(!1),F=r=>{r.preventDefault(),console.log(n),b(!0)},m=async()=>{var r;for(let t in n)(((r=n[t])==null?void 0:r.length)<1||n[t]==null)&&delete n[t];try{const t=await f("https://upskill-develop.herokuapp.com/api/posttest/update/"+l,"PUT",JSON.stringify(n),{"Content-Type":"application/json"});console.log(t),window.location.reload()}catch(t){console.log(t),alert(t)}},[a,I]=u.useState(),G=new FileReader,[S,N]=u.useState({head:"",body:""}),[w,E]=u.useState(!1),k=r=>{I(r.target.files[0])},q=r=>{r.preventDefault(),a&&(G.onload=function(t){var g;const h=(g=t.target)==null?void 0:g.result;N({...S,head:h.split(`
`)[0],body:h}),console.log(h.split(`
`)[1]),console.log(h.split(`
`)[2])},G.readAsText(a),console.log(a)),E(!w)},x=()=>{if(a){const r=a,t=new FileReader;t.onload=h=>{var v;const g=(v=h.target)==null?void 0:v.result;c({...n,solutionWithTagFile:g.split("base64,")[1]})},t.readAsDataURL(r)}};return e.jsxs("div",{style:{display:"flex",padding:"24px",border:"1px solid black"},children:[e.jsxs(s,{onSubmit:F,children:[e.jsx(i,{className:"mb-3",children:e.jsx("h2",{children:"Post test edit"})}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(s.Group,{controlId:"posttestSubject",children:[e.jsx(s.Label,{children:"วิชา (English, Math, Biology, Chemistry, Science)"}),e.jsx(s.Control,{type:"text",name:"subject",value:n.subject,onChange:o,placeholder:"English, Math, Biology, Chemistry, Science"})]})}),e.jsx(d,{children:e.jsxs(s.Group,{controlId:"posttesttitle",children:[e.jsx(s.Label,{children:"ชื่อข้อสอบ"}),e.jsx(s.Control,{type:"text",name:"title",value:n.title,onChange:o,placeholder:"TOEIC"})]})})]}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"description",children:[e.jsx(s.Label,{children:"คำบรรยาย ไทย หรือ อังกฤษก็ได้"}),e.jsx(s.Control,{as:"textarea",rows:4,name:"description",value:n.description,onChange:o,placeholder:"คำบรรยาย"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"Time",children:[e.jsx(s.Label,{children:" ใช้เวลาเท่าไหร่(วินาที)"}),e.jsx(s.Control,{type:"text",name:"time",value:n.time,onChange:o,placeholder:"7200"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"subDomain",children:[e.jsx(s.Label,{children:" SubDomain ที่อนุญาต"}),e.jsx(s.Control,{type:"text",name:"subDomain",value:n.subDomain,onChange:o,placeholder:"all"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"videoUrl",children:[e.jsx(s.Label,{children:"ลิ้งค์ Video Url ถ้าไม่มี ไม่ต้องใส่"}),e.jsx(s.Control,{type:"text",name:"videoUrl",value:n.videoUrl,onChange:o,placeholder:"www.youtube.com"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"posttestBanner",children:[e.jsx(s.Label,{children:" Banner"}),e.jsx(s.Control,{name:"banner",accept:"image/*",onChange:o,type:"file"})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"questionFile",children:[e.jsx(s.Label,{children:"ไฟล์ข้อสอบ .PDF"}),e.jsx(s.Control,{name:"questionFile",accept:"image/*",onChange:o,type:"file",multiple:!0})]})})}),e.jsx(i,{className:"mt-3",children:e.jsx(d,{children:e.jsxs(s.Group,{controlId:"solutionFile",children:[e.jsx(s.Label,{children:" ไฟล์เฉลย .PDF"}),e.jsx(s.Control,{name:"solutionFile",accept:"image/*",onChange:o,type:"file",multiple:!0})]})})}),e.jsxs(i,{className:"mt-4",children:[e.jsx("h4",{children:" ไฟล์เฉลยละเอียดรวม TAG .CSV"}),e.jsx("input",{type:"file",id:"csvFileInput",accept:".csv,.xlsx",onChange:k}),e.jsx(p,{style:{width:"200px"},variant:"warning",onClick:r=>{q(r)},children:"SHOW FILE CSV เพื่อตรวจสอบ"}),w&&e.jsxs(p,{variant:"outline-danger",style:{width:"200px"},onClick:x,children:[" ","ใช้ไฟล์นี้แหละ"]}),n.solutionWithTagFile&&e.jsx("div",{children:e.jsx(Y,{size:24})}),w&&e.jsx("div",{style:{overflowX:"auto",overflowY:"auto",height:"30vh"},children:e.jsx(_,{head:S.head,body:S.body})})]}),e.jsx(p,{variant:"primary",type:"submit",className:"mt-3",children:"Submit"})]}),e.jsxs(D,{show:T,onHide:()=>b(!1),centered:!0,children:[e.jsxs(D.Body,{children:[e.jsx("h1",{children:"Notice"}),e.jsx("p",{className:"p-h2",children:"ยืนยันการอัพเดทข้อมูล ใช่หรือไม่?"})]}),e.jsxs(D.Footer,{children:[C&&e.jsx(M,{}),e.jsx(p,{variant:"danger",onClick:()=>b(!1),children:"cancel"}),e.jsx(p,{variant:"dark",onClick:m,children:"Yes, Update!"})]})]})]})},re=({existingPosttest:l})=>{W();const{isLoading:C,error:j,sendRequest:f,clearError:y}=O(),[n,c]=u.useState(!1),[o,T]=u.useState(!1),b=()=>{c(!0)},F=async()=>{try{const a=await f("https://upskill-develop.herokuapp.com/api/posttest/delete/"+l.id,"DELETE",{"Content-Type":"application/json"});console.log(a),window.location.reload()}catch(a){console.log(a)}},m=async()=>{T(!o)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{style:{width:"5%"},children:e.jsxs("h2",{children:[l.preTestId," "]})}),e.jsx("div",{style:{width:"20%"},children:e.jsxs("h2",{children:[l.title," "]})}),e.jsx("div",{style:{width:"15%"},children:e.jsxs("h2",{children:[l.subject," "]})}),e.jsx("div",{style:{width:"55%"},children:e.jsx("h2",{children:l.tag})}),e.jsxs("div",{style:{gap:"8px"},children:[e.jsx(p,{variant:"danger",onClick:b,children:"DELETE"}),e.jsx(p,{onClick:m,children:"Edit"})]})]}),o&&e.jsx(te,{posttestId:l.id}),e.jsxs(D,{show:n,onHide:()=>c(!1),centered:!0,children:[e.jsxs(D.Body,{children:[e.jsx("h1",{children:"Notice"}),e.jsxs("p",{className:"p-h2",children:["ต้องการลบข้อมูล ",l.title," ใช่หรือไม่?"]})]}),e.jsxs(D.Footer,{children:[C&&e.jsx(M,{}),e.jsx(p,{variant:"danger",onClick:()=>c(!1),children:"cancel"}),e.jsx(p,{variant:"dark",onClick:F,children:"Yes, Delete!!"})]})]})]})},ie=({existingPosttests:l})=>(console.log(l),e.jsxs("div",{className:"admin-card-col",children:[e.jsx("h1",{children:"Post Test edit"}),e.jsx("hr",{}),l.map((C,j)=>e.jsx(re,{existingPosttest:C},j))]})),ve=()=>{var m,a;u.useContext(z).userId;const{isLoading:C,error:j,sendRequest:f,clearError:y}=O(),[n,c]=u.useState([]),[o,T]=u.useState([]);u.useEffect(()=>{const I=async()=>{try{const S=await f("https://upskill-develop.herokuapp.com/api/pretest");c(S),console.log(S)}catch{}},G=async()=>{try{const S=await f("https://upskill-develop.herokuapp.com/api/posttest");T(S),console.log(S)}catch{}};I(),G()},[f]);const[b,F]=u.useState(!0);return e.jsx("div",{children:e.jsxs(X,{children:[C&&e.jsx(J,{}),!C&&e.jsxs("div",{className:"flex flex-col p-20 gap-10",style:{background:"#f4f4f4",minHeight:"100vh"},children:[e.jsx("div",{children:e.jsx("h1",{children:"Exam Manager"})}),e.jsxs("div",{className:"row-btn",children:[e.jsx("div",{className:`input-btn ${b?"active-btn":""}`,onClick:()=>F(!0),children:e.jsx("h2",{children:"Input Pre test"})}),e.jsx("div",{className:`input-btn ${b?"":"active-btn"}`,onClick:()=>F(!1),children:e.jsx("h2",{children:"Input Post test"})})]}),b&&e.jsx(K,{}),!b&&e.jsx(ee,{existingPretests:n}),((m=n==null?void 0:n.data)==null?void 0:m.length)>0&&e.jsx(ne,{existingPretests:n==null?void 0:n.data}),((a=o==null?void 0:o.data)==null?void 0:a.length)>0&&e.jsx(ie,{existingPosttests:o==null?void 0:o.data})]})]})})};export{ve as default};