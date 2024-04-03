import{_ as R,o as _,c as w,a as i,I as D,J as p,K as h,j as F,s as V,v as E}from"./index-DvnFPQcG.js";class m{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const H=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:H()},g=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},I=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=g(e);o.publicKey=s.publicKey,o.blockHeadless=s.blockHeadless,o.storageProvider=s.storageProvider,o.blockList=s.blockList,o.limitRate=s.limitRate,o.origin=s.origin||t},v=async(e,t,s={})=>{const a=await fetch(o.origin+e,{method:"POST",headers:s,body:t}),r=await a.text(),n=new m(a.status,r);if(a.ok)return n;throw n},k=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},K=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},S=e=>e.webdriver||!e.languages||e.languages.length===0,x=()=>new m(451,"Unavailable For Headless Browser"),B=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},M=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},q=(e,t)=>e instanceof FormData?e.get(t):e[t],L=(e,t)=>{if(M(e))return!1;B(e.list,e.watchVariable);const s=q(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},P=()=>new m(403,"Forbidden"),N=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},O=async(e,t,s)=>{const a=Number(await s.get(e)||0);return t-Date.now()+a},j=async(e,t,s)=>{if(!t.throttle||!s)return!1;N(t.throttle,t.id);const a=t.id||e;return await O(a,t.throttle,s)>0?!0:(await s.set(a,Date.now().toString()),!1)},T=()=>new m(429,"Too Many Requests"),C=async(e,t,s,a)=>{const r=g(a),n=r.publicKey||o.publicKey,l=r.blockHeadless||o.blockHeadless,d=o.storageProvider||r.storageProvider,u={...o.blockList,...r.blockList},f={...o.limitRate,...r.limitRate};return l&&S(navigator)?Promise.reject(x()):(k(n,e,t),K(s),s&&L(u,s)?Promise.reject(P()):await j(location.pathname,f,d)?Promise.reject(T()):v("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},U=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},A=e=>typeof e=="string"?document.querySelector(e):e,J=async(e,t,s,a)=>{const r=g(a),n=r.publicKey||o.publicKey,l=r.blockHeadless||o.blockHeadless,d=o.storageProvider||r.storageProvider,u={...o.blockList,...r.blockList},f={...o.limitRate,...r.limitRate};if(l&&S(navigator))return Promise.reject(x());const b=A(s);k(n,e,t),U(b);const c=new FormData(b);return L(u,c)?Promise.reject(P()):await j(location.pathname,f,d)?Promise.reject(T()):(c.append("lib_version","4.3.3"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n),v("/api/v1.0/email/send-form",c))},G={init:I,send:C,sendForm:J,EmailJSResponseStatus:m},W="service_dinsemail",Y="template_t1jktak",z="pxfphKvGYP72giTcT",Q={data(){return{formData:{user_name:"",user_email:"",message:""},isSubmitting:!1}},methods:{async submitForm(e){e.preventDefault();const t=this.$refs.formRef;if(t.checkValidity()){this.isSubmitting=!0;try{await this.sendEmail(t),console.log("Email sent successfully!"),this.formData.user_name="",this.formData.user_email="",this.formData.message=""}catch(s){console.error("Failed to send email:",s)}finally{this.isSubmitting=!1}}else console.warn("Form is not valid")},sendEmail(e){return G.sendForm(W,Y,e,z).then(t=>{console.log("SUCCESS!",t.text)}).catch(t=>{throw console.log("FAILED...",t.text),t})}}},y=e=>(V("data-v-4b5537f8"),e=e(),E(),e),X={class:"formcontainer"},Z={class:"emailform max-w-lg mx-auto shadow-lg rounded-lg overflow-hidden"},$={class:"mb-5"},ee=y(()=>i("label",{for:"user_name",class:"nameLabel text-sm"},"Name:",-1)),te={class:"mb-5"},se=y(()=>i("label",{for:"user_email",class:"emailLabel text-sm"},"Email:",-1)),re={class:"mb-5"},oe=y(()=>i("label",{for:"message",class:"messageLabel text-sm"},"Message:",-1)),ae=["disabled"],ie={key:0,class:"block mt-2 text-gray-600 dark:text-gray-400"};function ne(e,t,s,a,r,n){return _(),w("div",X,[i("div",Z,[i("form",{onSubmit:t[3]||(t[3]=D((...l)=>n.submitForm&&n.submitForm(...l),["prevent"])),ref:"formRef",class:"p-6"},[i("div",$,[ee,p(i("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>r.formData.user_name=l),type:"text",id:"user_name",name:"user_name",class:"personsName block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600",required:""},null,512),[[h,r.formData.user_name]])]),i("div",te,[se,p(i("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>r.formData.user_email=l),type:"email",id:"user_email",name:"user_email",class:"personsEmail block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600",required:""},null,512),[[h,r.formData.user_email]])]),i("div",re,[oe,p(i("textarea",{"onUpdate:modelValue":t[2]||(t[2]=l=>r.formData.message=l),id:"message",name:"message",rows:"4",class:"personsMessage block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600",required:""},null,512),[[h,r.formData.message]])]),i("button",{type:"submit",disabled:r.isSubmitting,class:"w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 ease-in-out"}," Send ",8,ae),r.isSubmitting?(_(),w("span",ie,"Sending...")):F("",!0)],544)])])}const ce=R(Q,[["render",ne],["__scopeId","data-v-4b5537f8"]]);export{ce as default};
