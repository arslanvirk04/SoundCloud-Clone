import{u as p,r as n,b as h,j as a,c as e,F as y,J as x}from"./index.ed1e7a57.js";import{C as f}from"./index.fd20f91f.js";import{I as g,_ as N}from"./index.793864eb.js";function S(){const d=p(),[s,i]=n.exports.useState(""),[o,l]=n.exports.useState(""),{session:m}=h(t=>t),u=m?.user?.id,[c,r]=n.exports.useState(!1);return a(f,{children:[a("div",{className:"bg-gray-700 p-8 rounded-lg w-2/4 mx-auto mt-24",children:[e("h2",{className:"text-white font-semibold text-center",children:"Create New Playlist"}),a("div",{className:"mt-4",children:[e("div",{className:"flex items-center",children:e("input",{type:"text",placeholder:"Playlist Name",value:s,onChange:t=>i(t.target.value),className:"border border-gray-700 px-3 py-1 rounded-lg w-full mt-2 focus:outline-none focus:border-blue-500"})}),o&&e("p",{className:"text-red-500 mt-2",children:o}),e("div",{className:"flex justify-end mt-4",children:c?a("div",{className:"flex items-center",children:[e(y,{className:"animate-spin text-white h-6 w-6"}),e("span",{className:"ml-2 text-white",children:"Creating..."})]}):e("button",{onClick:async()=>{try{if(!s){l("Please enter a playlist name.");return}r(!0),await d(x({userId:u,name:s}))&&(N.success("Playlist has been created!",{duration:3e3,position:"top-right"}),i(""),r(!1),l(""))}catch(t){r(!1),console.error("Failed to add song to playlist:",t),l("Failed to add song to playlist. Please try again.")}},disabled:c,className:"bg-green-500 text-white px-4 py-1 rounded-lg",children:"Create"})})]})]}),e(g,{})]})}export{S as default};
