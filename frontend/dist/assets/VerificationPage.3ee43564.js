import{u as g,a as h,r as s,c as e,j as o,A as f}from"./index.ed1e7a57.js";function x({data:a}){const n=g(),c=h(),[i,l]=s.exports.useState(""),[t,d]=s.exports.useState(null);return e("div",{className:"flex justify-center items-center h-screen",children:o("div",{className:"bg-white rounded-2xl p-8 w-1/3",children:[e("h2",{className:"text-3xl font-bold mb-6 text-center text-black",children:"Email Verification"}),o("form",{onSubmit:async r=>{r.preventDefault();try{await n(f({...a,verificationCode:i})),c.push("/dashboard")}catch(u){console.error("Error signing up:",u.message),d(["Verification code is incorrect or expired."])}},className:"space-y-4",children:[e("div",{children:e("input",{type:"text",value:i,onChange:r=>l(r.target.value),placeholder:"Verification Code",className:"block w-full bg-gray-100 text-black rounded-md border-gray-300 shadow-sm focus:border-lightseagreen focus:ring focus:ring-lightseagreen focus:ring-opacity-50 px-4 py-2",required:!0})}),e("div",{children:e("button",{type:"submit",className:"block w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50",children:"Verify"})})]}),t&&e("div",{className:"text-red-500 mt-4",children:t})]})})}export{x as default};