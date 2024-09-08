import{u as x,a as b,b as y,r,j as o,c as e,F as w,d as N,l as v}from"./index.ed1e7a57.js";import{I as S,_ as n}from"./index.793864eb.js";function F({closeModal:C}){const h=x(),l=b();y(t=>t.session.user);const[c,g]=r.exports.useState(""),[i,f]=r.exports.useState(""),[u,d]=r.exports.useState([]),[m,p]=r.exports.useState(!1);return o("div",{className:"flex  items-center justify-center h-full pt-36",children:[o("div",{className:"bg-white rounded-2xl shadow-md p-8 w-1/3",children:[e("h2",{className:"text-3xl font-bold  text-center",children:"Welcome back!"}),e("h2",{className:"text-3xl font-bold mb-6 text-center",children:"Login"}),o("form",{onSubmit:async t=>{t.preventDefault(),d([]),p(!0);try{await h(v({credential:c,password:i}))?(n.success("You have logged in successfully!",{duration:2e3,position:"top-right"}),l.push("/dashboard")):n.error("Failed to login. Please try again.",{duration:5e3,position:"top-right"})}catch(s){const a=await s?.json();a&&a.errors?d(a.errors):(console.error("Unexpected error:",s),n.error("An error occurred. Please try again.",{duration:5e3,position:"top-right"}))}finally{p(!1)}},className:"flex flex-col gap-1.5 items-center",children:[e("input",{type:"text",value:c,onChange:t=>g(t.target.value),placeholder:"Email or username",className:"bg-gray-100 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:border-blue-500",required:!0}),e("input",{type:"password",value:i,onChange:t=>f(t.target.value),placeholder:"Password",className:"bg-gray-100 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:border-blue-500",required:!0}),e("button",{type:"submit",className:"block w-full  text-white py-2 px-4 rounded-md  bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2  focus:ring-opacity-50",disabled:m,children:m?e(w,{className:"animate-spin mx-auto text-white h-5 w-5"}):"Log In"}),e("button",{type:"button",onClick:()=>{l.goBack()},className:"text-gray-500 mt-2 hover:text-gray-800",children:"Back"})]}),e("div",{className:"flex justify-center tems-center pt-2",children:e(N.Link,{to:"/register",className:"text-blue-500 mt-2 hover:text-blue-800",children:"Create an account"})}),u.length>0&&e("ul",{className:"text-red-500 mt-4",children:u.map((t,s)=>e("li",{children:t},s))})]}),e(S,{})]})}export{F as default};
