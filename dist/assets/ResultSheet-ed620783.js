import{r as p,j as s,R as m}from"./index-55cceeff.js";import{P as b}from"./AnswerSheet-c8cd74e3.js";const g=({totalQuestions:n,totalPages:o,activePage:c,answers:e,results:a})=>{const r=(c-1)*10+1,l=c*10>n?n:c*10,i=p.useCallback((t,d)=>{const j=[];for(let h=t;h<d+1;h++)j.push({id:h});return j},[])(r,l);return s.jsx("div",{style:{minHeight:"305px"},children:i.map((t,d)=>s.jsxs("div",{className:"ans-row",children:[s.jsx("div",{className:"ans-row-left",children:s.jsxs("p",{className:"p-h2",children:[t.id,"."]})}),s.jsxs("div",{className:"ans-row-right",children:[s.jsx("button",{className:`ans-btn ${a[t.id]==="A"?"result-btn":""}
                ${e[t.id]==="A"?"ans-btn-select":""}`,children:s.jsx("p",{className:"p-h3",children:"A"})}),s.jsx("button",{className:`ans-btn ${a[t.id]==="B"?"result-btn":""}
                ${e[t.id]==="B"?"ans-btn-select":""}`,children:s.jsx("p",{className:"p-h3",children:"B"})}),s.jsx("button",{className:`ans-btn ${a[t.id]==="C"?"result-btn":""}
                ${e[t.id]==="C"?"ans-btn-select":""}`,children:s.jsx("p",{className:"p-h3",children:"C"})}),s.jsx("button",{className:`ans-btn ${a[t.id]==="D"?"result-btn":""}
                ${e[t.id]==="D"?"ans-btn-select":""}`,children:s.jsx("p",{className:"p-h3",children:"D"})})]})]},d))})},u=({answers:n,results:o,score:c,timer:e})=>{const[a,r]=m.useState(1),l=Object.keys(n).length,i=Math.ceil(l/10);return e=Math.floor(e/60),s.jsxs("div",{className:"ans-card",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Result"}),s.jsx("hr",{className:"separator"})]}),s.jsxs("div",{className:"result-score",children:[s.jsxs("h2",{children:["Score: ",c," %"]}),s.jsxs("h2",{children:["Timer: ",e," minutes"]})]}),s.jsx("div",{children:s.jsx(g,{totalQuestions:l,totalPages:i,activePage:a,answers:n,results:o})}),s.jsx("div",{className:"ans-pagination",children:s.jsx(b,{totalPages:i,activePage:a,setActivePage:r})})]})};export{u as R};
