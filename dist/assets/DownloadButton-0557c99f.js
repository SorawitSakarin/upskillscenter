import{r as D,j as t}from"./index-55cceeff.js";import{u as L}from"./http-hook-dc2aacf9.js";import{d as R}from"./index.esm-376e65ce.js";import{L as U}from"./LoadingSpinnerPuff-b9c0cf14.js";const $=({title:p,backgroundColor:u,color:r,file:a,topic:b,studentList:c,studentId:n,courseId:l})=>{const[m,h]=D.useState(!1),{isLoading:y,error:A,sendRequest:w,clearError:E}=L(),f=async(g,i)=>{if(console.log("Download PDF success",a),console.log(c,n,l),h(!0),!c.split(",").includes(n))try{const o=await w("https://upskill-develop.herokuapp.com/api/course/update/"+l,"PUT",JSON.stringify({studentList:n}),{"Content-Type":"application/json"});console.log(o)}catch(o){console.log(o),alert(o)}const j=g.split(";base64,").pop(),s=atob(j),d=new Array(s.length);for(let o=0;o<s.length;o++)d[o]=s.charCodeAt(o);const x=new Uint8Array(d),k=new Blob([x],{type:i}),C=URL.createObjectURL(k),e=document.createElement("a");e.href=C,e.download=`Upskillscenter_${b}_download.${i}`,document.body.appendChild(e),e.click(),document.body.removeChild(e)};return t.jsx("div",{children:t.jsxs("button",{onClick:()=>f(a,"pdf"),className:`download-btn bounce ${m?"stop-bounce":""}`,style:{backgroundColor:u,color:r},children:[y&&t.jsx(U,{color:r}),t.jsx(R,{size:24}),t.jsx("h2",{children:p})]})})};export{$ as D};
