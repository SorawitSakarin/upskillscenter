import{r as n,j as r,c as p,b as u,v as Q,w as U,Z as N,s as X}from"./index-55cceeff.js";import{h as Y}from"./ElementChildren-9bc860c0.js";function P({as:e,bsPrefix:o,className:s,...t}){o=u(o,"col");const a=Q(),l=U(),c=[],d=[];return a.forEach(i=>{const m=t[i];delete t[i];let f,$,y;typeof m=="object"&&m!=null?{span:f,offset:$,order:y}=m:f=m;const h=i!==l?`-${i}`:"";f&&c.push(f===!0?`${o}${h}`:`${o}${h}-${f}`),y!=null&&d.push(`order${h}-${y}`),$!=null&&d.push(`offset${h}-${$}`)}),[{...t,className:p(s,...c,...d)},{as:e,bsPrefix:o,spans:c}]}const T=n.forwardRef((e,o)=>{const[{className:s,...t},{as:a="div",bsPrefix:l,spans:c}]=P(e);return r.jsx(a,{...t,ref:o,className:p(s,!c.length&&l)})});T.displayName="Col";const ee=T,oe={type:N.string,tooltip:N.bool,as:N.elementType},w=n.forwardRef(({as:e="div",className:o,type:s="valid",tooltip:t=!1,...a},l)=>r.jsx(e,{...a,ref:l,className:p(o,`${s}-${t?"tooltip":"feedback"}`)}));w.displayName="Feedback";w.propTypes=oe;const B=w,se=n.createContext({}),F=se,O=n.forwardRef(({id:e,bsPrefix:o,className:s,type:t="checkbox",isValid:a=!1,isInvalid:l=!1,as:c="input",...d},i)=>{const{controlId:m}=n.useContext(F);return o=u(o,"form-check-input"),r.jsx(c,{...d,ref:i,type:t,id:e||m,className:p(s,o,a&&"is-valid",l&&"is-invalid")})});O.displayName="FormCheckInput";const S=O,b=n.forwardRef(({bsPrefix:e,className:o,htmlFor:s,...t},a)=>{const{controlId:l}=n.useContext(F);return e=u(e,"form-check-label"),r.jsx("label",{...t,ref:a,htmlFor:s||l,className:p(o,e)})});b.displayName="FormCheckLabel";const v=b,E=n.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:s,inline:t=!1,reverse:a=!1,disabled:l=!1,isValid:c=!1,isInvalid:d=!1,feedbackTooltip:i=!1,feedback:m,feedbackType:f,className:$,style:y,title:h="",type:C="checkbox",label:x,children:g,as:z="input",...A},D)=>{o=u(o,"form-check"),s=u(s,"form-switch");const{controlId:L}=n.useContext(F),J=n.useMemo(()=>({controlId:e||L}),[L,e]),I=!g&&x!=null&&x!==!1||Y(g,v),K=r.jsx(S,{...A,type:C==="switch"?"checkbox":C,ref:D,isValid:c,isInvalid:d,disabled:l,as:z});return r.jsx(F.Provider,{value:J,children:r.jsx("div",{style:y,className:p($,I&&o,t&&`${o}-inline`,a&&`${o}-reverse`,C==="switch"&&s),children:g||r.jsxs(r.Fragment,{children:[K,I&&r.jsx(v,{title:h,children:x}),m&&r.jsx(B,{type:f,tooltip:i,children:m})]})})})});E.displayName="FormCheck";const j=Object.assign(E,{Input:S,Label:v}),G=n.forwardRef(({bsPrefix:e,type:o,size:s,htmlSize:t,id:a,className:l,isValid:c=!1,isInvalid:d=!1,plaintext:i,readOnly:m,as:f="input",...$},y)=>{const{controlId:h}=n.useContext(F);e=u(e,"form-control");let C;return i?C={[`${e}-plaintext`]:!0}:C={[e]:!0,[`${e}-${s}`]:s},r.jsx(f,{...$,type:o,size:t,ref:y,readOnly:m,id:a||h,className:p(l,C,c&&"is-valid",d&&"is-invalid",o==="color"&&`${e}-color`)})});G.displayName="FormControl";const te=Object.assign(G,{Feedback:B}),ae=X("form-floating"),M=n.forwardRef(({controlId:e,as:o="div",...s},t)=>{const a=n.useMemo(()=>({controlId:e}),[e]);return r.jsx(F.Provider,{value:a,children:r.jsx(o,{...s,ref:t})})});M.displayName="FormGroup";const V=M,le={column:!1,visuallyHidden:!1},k=n.forwardRef(({as:e="label",bsPrefix:o,column:s,visuallyHidden:t,className:a,htmlFor:l,...c},d)=>{const{controlId:i}=n.useContext(F);o=u(o,"form-label");let m="col-form-label";typeof s=="string"&&(m=`${m} ${m}-${s}`);const f=p(a,o,t&&"visually-hidden",s&&m);return l=l||i,s?r.jsx(ee,{ref:d,as:"label",className:f,htmlFor:l,...c}):r.jsx(e,{ref:d,className:f,htmlFor:l,...c})});k.displayName="FormLabel";k.defaultProps=le;const ne=k,H=n.forwardRef(({bsPrefix:e,className:o,id:s,...t},a)=>{const{controlId:l}=n.useContext(F);return e=u(e,"form-range"),r.jsx("input",{...t,type:"range",ref:a,className:p(o,e),id:s||l})});H.displayName="FormRange";const re=H,W=n.forwardRef(({bsPrefix:e,size:o,htmlSize:s,className:t,isValid:a=!1,isInvalid:l=!1,id:c,...d},i)=>{const{controlId:m}=n.useContext(F);return e=u(e,"form-select"),r.jsx("select",{...d,size:s,ref:i,className:p(t,e,o&&`${e}-${o}`,a&&"is-valid",l&&"is-invalid"),id:c||m})});W.displayName="FormSelect";const ce=W,Z=n.forwardRef(({bsPrefix:e,className:o,as:s="small",muted:t,...a},l)=>(e=u(e,"form-text"),r.jsx(s,{...a,ref:l,className:p(o,e,t&&"text-muted")})));Z.displayName="FormText";const me=Z,_=n.forwardRef((e,o)=>r.jsx(j,{...e,ref:o,type:"switch"}));_.displayName="Switch";const de=Object.assign(_,{Input:j.Input,Label:j.Label}),q=n.forwardRef(({bsPrefix:e,className:o,children:s,controlId:t,label:a,...l},c)=>(e=u(e,"form-floating"),r.jsxs(V,{ref:c,className:p(o,e),controlId:t,...l,children:[s,r.jsx("label",{htmlFor:t,children:a})]})));q.displayName="FloatingLabel";const ie=q,pe={_ref:N.any,validated:N.bool,as:N.elementType},R=n.forwardRef(({className:e,validated:o,as:s="form",...t},a)=>r.jsx(s,{...t,ref:a,className:p(e,o&&"was-validated")}));R.displayName="Form";R.propTypes=pe;const Fe=Object.assign(R,{Group:V,Control:te,Floating:ae,Check:j,Switch:de,Label:ne,Text:me,Range:re,Select:ce,FloatingLabel:ie});export{ee as C,Fe as F};
