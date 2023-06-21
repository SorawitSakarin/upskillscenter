import{u as B,r as d,j as e,M as h,L as S,A as F}from"./index-55cceeff.js";import{L as T,C}from"./AdminComponent-404b8557.js";import{u as N}from"./http-hook-dc2aacf9.js";import{B as c}from"./MainNavbar-eed8c9e6.js";import{L as M}from"./LoadingSpinnerPencil-94ce2a7f.js";import{F as a,C as v}from"./Form-e975255d.js";import{R as g}from"./Row-bd8b4b80.js";import"./hook-e9eee1cb.js";import"./react-lifecycles-compat.es-22c986ff.js";import"./Anchor-149a2421.js";import"./index.esm-9a14dc49.js";import"./iconBase-4260ecf4.js";import"./ElementChildren-9bc860c0.js";const R=({existingBanner:s})=>{B();const{isLoading:i,error:l,sendRequest:m,clearError:p}=N(),[x,r]=d.useState(!1),o=()=>{r(!0)},n=async()=>{try{const j=await m("https://upskill-develop.herokuapp.com/api/banner/delete/"+s.id,"DELETE",{"Content-Type":"application/json"});console.log(j),window.location.reload()}catch(j){console.log(j)}};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{style:{height:"100px",width:"100px",border:"1px solid black"},children:e.jsx("img",{src:s.imageFile,alt:"Banner ImageFile"})}),e.jsx("div",{style:{width:"20%"},children:e.jsxs("h2",{children:[s.title," "]})}),e.jsx("div",{style:{width:"20%"},children:e.jsxs("h2",{children:[s.subDomain," "]})}),e.jsx("div",{style:{width:"30%"},children:e.jsxs("h2",{children:[s.bannerType," "]})}),e.jsxs("div",{style:{gap:"8px"},children:[e.jsx(c,{variant:"danger",onClick:o,children:"DELETE"}),e.jsx(c,{onClick:()=>alert("Developing"),children:"Edit"})]})]}),e.jsx("div",{}),e.jsxs(h,{show:x,onHide:()=>r(!1),centered:!0,children:[e.jsxs(h.Body,{children:[e.jsx("h1",{children:"Notice"}),e.jsxs("p",{className:"p-h2",children:["ต้องการลบข้อมูล ",s.title," ใช่หรือไม่?"]})]}),e.jsxs(h.Footer,{children:[e.jsx(c,{variant:"danger",onClick:()=>r(!1),children:"cancel"}),e.jsx(c,{variant:"dark",onClick:n,children:"Yes, Delete!!"})]})]})]})},G=({existingBanners:s})=>(console.log(s),e.jsxs("div",{className:"admin-card-col",children:[e.jsx("h1",{children:"Banner edit"}),e.jsx("hr",{}),s.map((i,l)=>e.jsx(R,{existingBanner:i},l))]})),H=({formState:s,showModal:i,setShowModal:l})=>{const{isLoading:m,error:p,sendRequest:x,clearError:r}=N(),o=async()=>{try{const n=await x("https://upskill-develop.herokuapp.com/api/banner/create","POST",JSON.stringify(s),{"Content-Type":"application/json"});console.log(n),window.location.reload()}catch(n){console.log(n)}};return e.jsxs(h,{show:i,onHide:()=>l(!1),children:[e.jsxs(h.Body,{children:[e.jsx("h2",{children:"Title"}),e.jsx("p",{className:"p-h2",children:s.title}),e.jsx("hr",{}),e.jsx("h2",{children:"SubDomain"}),e.jsx("p",{className:"p-h2",children:s.subDomain}),e.jsx("hr",{}),e.jsx("h2",{children:"Banner Type"}),e.jsx("p",{className:"p-h2",children:s.bannerType}),e.jsx("hr",{}),e.jsx("h2",{children:"Image file"}),e.jsx("img",{src:s.imageFile,alt:"imageFile"})]}),e.jsxs(h.Footer,{children:[m&&e.jsx(S,{}),e.jsx(c,{onClick:()=>l(!1),variant:"danger",children:"cancel"}),e.jsx(c,{variant:"primary",onClick:o,children:"Submit"})]})]})};const I=({top:s,left:i})=>e.jsxs("div",{className:"container",style:{position:"absolute",top:`${s}%`,left:`${i}%`},children:[e.jsx("div",{className:"top",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square"})})})})})})}),e.jsx("div",{className:"bottom",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square"})})})})})})}),e.jsx("div",{className:"left",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square"})})})})})})}),e.jsx("div",{className:"right",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square",children:e.jsx("div",{className:"square"})})})})})})})]}),Z=()=>{d.useContext(F);const{isLoading:s,error:i,sendRequest:l,clearError:m}=N(),[p,x]=d.useState([]);d.useEffect(()=>{(async()=>{try{const t=await l("https://upskill-develop.herokuapp.com/api/banner");x(t.data),console.log(t)}catch{}})()},[l]);const[r,o]=d.useState({title:"",bannerType:"",subDomain:"",imageFile:""}),n=u=>{const{name:t,value:w,files:y}=u.target;if(t==="imageFile"){if(y){const k=y[0],f=new FileReader;f.onload=L=>{var q;const E=(q=L.target)==null?void 0:q.result;o({...r,[t]:E})},f.readAsDataURL(k)}}else o({...r,[t]:w})},j=async u=>{u.preventDefault(),console.log(r),b(!0)},[D,b]=d.useState(!1);return e.jsxs("div",{children:[e.jsxs(T,{children:[e.jsx(M,{url:"https://www.facebook.com/Upskillscenter"}),s&&e.jsx(I,{top:50,left:17}),!s&&e.jsxs("div",{className:"flex flex-col p-20 gap-10",style:{background:"#f4f4f4",minHeight:"100vh"},children:[e.jsx("div",{children:e.jsx("h1",{children:"Banner Manager"})}),e.jsx(C,{children:e.jsx(C.Body,{children:e.jsxs(a,{onSubmit:j,children:[e.jsx(g,{children:e.jsx(v,{children:e.jsxs(a.Group,{controlId:"banner title",children:[e.jsx(a.Label,{children:"ชื่อ Banner"}),e.jsx(a.Control,{type:"text",name:"title",value:r.title,onChange:n,placeholder:"First Banner",required:!0})]})})}),e.jsx(g,{className:"mt-3",children:e.jsx(v,{children:e.jsxs(a.Group,{controlId:"SubDomain",children:[e.jsx(a.Label,{children:"subDomain ที่จะแสดง ถ้าทุกโรงเรียนใช้ได้ให้ใส่ all  ถ้าอยากให้แสดงแค่ 2 โรงเรียน ให้ใส่ rstd,others"}),e.jsx(a.Control,{type:"text",name:"subDomain",value:r.subDomain,onChange:n,placeholder:"subDomain",required:!0})]})})}),e.jsx(g,{className:"mt-3",children:e.jsx(v,{children:e.jsxs(a.Group,{controlId:"bannerType",children:[e.jsx(a.Label,{children:" ประเภทของ Banner ex. homepage, popup"}),e.jsx(a.Control,{type:"text",name:"bannerType",value:r.bannerType,onChange:n,placeholder:"homepage",required:!0})]})})}),e.jsx(g,{className:"mt-3",children:e.jsx(v,{children:e.jsxs(a.Group,{controlId:"imageFile",children:[e.jsx(a.Label,{children:"file banner .PNG .JPG .SVG"}),e.jsx(a.Control,{name:"imageFile",accept:"image/*",onChange:n,type:"file",required:!0})]})})}),e.jsx(c,{variant:"primary",type:"submit",className:"mt-3",children:"Submit"})]})})}),p.length>0&&e.jsx(G,{existingBanners:p})]})]}),e.jsx(H,{formState:r,showModal:D,setShowModal:b})]})};export{Z as default};