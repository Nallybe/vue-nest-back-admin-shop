import{d as p,j as b,U as _,e as m,A as w,f as x,c as h,a as o,$ as l,ab as d,ac as g,ad as v,g as y,l as k,F as I,m as M,o as C,p as R}from"./index-wdyugq97.js";const S=o("h1",{class:"text-2xl font-semibold mb-4"},"Iniciar sesión",-1),V={class:"mb-4"},U=o("label",{for:"email",class:"block text-gray-600"},"Correo",-1),L={class:"mb-4"},N=o("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1),T={class:"mb-4 flex items-center"},B=o("label",{for:"remember",class:"text-gray-600 ml-2"},"Recordarme",-1),F=o("div",{class:"mb-6 text-blue-500"},[o("a",{href:"#",class:"hover:underline"},"¿Olvidaste tu contraseña?")],-1),A=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Iniciar sesión ",-1),E={class:"mt-6 text-blue-500 text-center"},q=p({__name:"LoginView",setup(O){const c=b(),u=_(),n=m(null),i=m(null),e=w({email:"",password:"",rememberMe:!1}),f=async()=>{var t,r;if(e.email==="")return(t=n.value)==null?void 0:t.focus();if(e.password===""||e.password.length<6)return(r=i.value)==null?void 0:r.focus();e.rememberMe?localStorage.setItem("email",e.email):localStorage.removeItem("email"),!await c.login(e.email,e.password)&&u.error("Usuario o contraseña incorrectos")};return x(()=>{const a=localStorage.getItem("email");a&&(e.email=a,e.rememberMe=!0)}),(a,t)=>{const r=M("RouterLink");return C(),h(I,null,[S,o("form",{method:"POST",onSubmit:v(f,["prevent"])},[o("div",V,[U,l(o("input",{ref_key:"emailInputRef",ref:n,"onUpdate:modelValue":t[0]||(t[0]=s=>e.email=s),type:"text",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[d,e.email]])]),o("div",L,[N,l(o("input",{ref_key:"passwordInputRef",ref:i,"onUpdate:modelValue":t[1]||(t[1]=s=>e.password=s),type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[d,e.password]])]),o("div",T,[l(o("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>e.rememberMe=s),type:"checkbox",id:"remember",name:"remember",class:"text-blue-500"},null,512),[[g,e.rememberMe]]),B]),F,A],32),o("div",E,[y(r,{to:{name:"register"},class:"hover:underline"},{default:k(()=>[R("¿No tienes cuenta? Crea una aquí")]),_:1})])],64)}}});export{q as default};
