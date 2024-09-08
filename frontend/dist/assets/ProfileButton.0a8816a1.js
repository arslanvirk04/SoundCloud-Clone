import{b as x,a as g,u,r as o,_ as f,c as e,j as s}from"./index.ed1e7a57.js";import{C as p}from"./index.fd20f91f.js";function y(){const a=x(r=>r.session.user),i=g(),l=u(),n="/assets/dummyProfile.png",[t,d]=o.exports.useState({username:"",email:"",type:"",status:"",imgUrl:"",createdAt:""});o.exports.useEffect(()=>{l&&a&&m(a?.id)},[l,a]);const m=async r=>{try{const c=await l(f(r));d(c)}catch(c){console.error("Error fetching user data:",c)}},h=()=>{i.push("/edit-profile")};return e(p,{children:s("div",{className:"bg-gray-800 text-white rounded-lg shadow-lg w-full mx-auto overflow-hidden relative",children:[s("div",{className:"bg-gray-600 p-4 md:p-8 flex flex-col items-center",children:[t?.imgUrl?e("img",{src:t?.imgUrl,alt:"Profile",className:"h-32 w-32 rounded-full object-cover mx-auto"}):e("img",{src:n,alt:"Profile",className:"h-32 w-32 rounded-full object-cover mx-auto"})," ",e("h1",{className:"text-2xl md:text-4xl font-extrabold mt-4",children:t?.username}),e("button",{onClick:h,className:"mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg",children:"Edit Profile"})]}),s("div",{className:"p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8",children:[s("div",{className:"text-lg",children:[e("strong",{className:"block text-gray-400",children:"Email:"}),e("span",{className:"block mt-1 text-xl font-semibold text-white",children:t?.email})]}),s("div",{className:"text-lg",children:[e("strong",{className:"block text-gray-400",children:"Type:"}),e("span",{className:"block mt-1 text-xl font-semibold text-white",children:t?.type})]}),s("div",{className:"text-lg",children:[e("strong",{className:"block text-gray-400",children:"Status:"}),e("span",{className:"block mt-1 text-xl font-semibold text-white",children:t?.status})]}),s("div",{className:"text-lg",children:[e("strong",{className:"block text-gray-400",children:"Created At:"}),e("span",{className:"block mt-1 text-xl font-semibold text-white",children:new Date(t?.createdAt).toLocaleDateString()})]})]}),e("div",{className:"h-20 md:h-10"})]})})}export{y as default};