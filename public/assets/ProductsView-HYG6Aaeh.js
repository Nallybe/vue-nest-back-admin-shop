import{_ as m,g as p}from"./ButtonPagination.vue_vue_type_script_setup_true_lang-73e6-Al0.js";import{e as x,w as f,i as g,d as y,f as w,c,a as e,g as i,l as h,F as b,r as v,u as a,m as k,o as d,n as q,p as C,t as n}from"./index-DuL9nc4z.js";import{u as N,a as P}from"./get-product-image.action-DItHZjbq.js";const j=()=>{const l=g(),o=x(Number(l.query.page||1));return f(()=>l.query.page,t=>{o.value=Number(t||1),window.scrollTo({top:0,behavior:"smooth"})}),{page:o}},B={class:"bg-white px-5 py-2 rounded"},F={class:"row flex justify-between mt-2"},L=e("h1",{class:"text-3xl"},"Productos",-1),T=e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),V=e("span",{class:"ml-2 leading-none"},"Nuevo Producto",-1),Q={class:"py-6 w-full"},R={class:"shadow overflow-hidden rounded border-b border-gray-200"},z={class:"min-w-full bg-white"},E=e("thead",{class:"bg-gray-800 text-white"},[e("tr",null,[e("th",{class:"w-10 text-left py-3 px-4 uppercase font-semibold text-sm"},"Imágen"),e("th",{class:"flex-1 text-left py-3 px-4 uppercase font-semibold text-sm"},"Título"),e("th",{class:"w-28 text-left py-3 px-4 uppercase font-semibold text-sm"},"Precio"),e("th",{class:"w-28 text-left py-3 px-4 uppercase font-semibold text-sm"},"Stock"),e("th",{class:"w-60 text-left py-3 px-4 uppercase font-semibold text-sm"},"Tallas")])],-1),K={class:"text-gray-700"},S={class:"text-left py-3 px-4"},$=["src"],A={class:"text-left py-3 px-4"},D={class:"text-left py-3 px-4"},H={class:"bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs"},I={class:"text-left py-3 px-4"},M={class:"text-left py-3 px-4"},Y=y({__name:"ProductsView",setup(l){const o=N(),{page:t}=j(),{data:r,isLoading:G}=P({queryKey:["products",{page:t}],queryFn:()=>p(t.value)});return w(()=>{o.prefetchQuery({queryKey:["products",{page:t.value+1}],queryFn:()=>p(t.value+1)})}),(J,O)=>{const u=k("RouterLink");return d(),c("div",B,[e("div",F,[L,i(u,{to:"/admin/products/create",class:"flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-green-700 text-white rounded hover:bg-green-800"},{default:h(()=>[T,V]),_:1})]),e("div",Q,[e("div",R,[e("table",z,[E,e("tbody",K,[(d(!0),c(b,null,v(a(r),(s,_)=>(d(),c("tr",{key:s.id,class:q({"bg-gray-200":_%2===0})},[e("td",S,[e("img",{class:"w-10 h-10 object-cover",src:s.images[0],alt:""},null,8,$)]),e("td",A,[i(u,{to:`/admin/products/${s.id}`,class:"hover:text-blue-500 hover:underline"},{default:h(()=>[C(n(s.title),1)]),_:2},1032,["to"])]),e("td",D,[e("span",H,n(s.price),1)]),e("td",I,n(s.stock),1),e("td",M,n(s.sizes.join(",")),1)],2))),128))])])])]),i(m,{page:a(t),"has-more-data":!!a(r)&&a(r).length<10},null,8,["page","has-more-data"])])}}});export{Y as default};
