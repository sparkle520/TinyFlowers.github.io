import{_ as T,i as y,u as M,o as h,a as B,j as P,r as m,k as j,b as n,c as l,d as o,F as v,g as x,l as C,t as c}from"./index-51ed2d2e.js";import{d as r}from"./data-6a4804a5.js";const E={id:"main"},q={class:"topic_box"},A=["onClick"],F={class:"item_inner_box margin_2_percent flex flex_direction_column"},H={class:"relative title"},N=["innerHTML"],R={class:"data flex flex_direction_row justify_content_center"},S={class:"absolute tag_box flex flex_direction_row"},V={class:"tag"},i=20,Y={__name:"TopicList",setup(D){const{params:a}=y(),k=M();h(()=>{}),B(()=>{window.scrollTo(0,0),d=Array.from(document.querySelectorAll(".item")),document.addEventListener("scroll",p),p()});let d=[];const p=()=>{for(let e=0;e<d.length;e++){let t=d[e];console.log(t.offsetTop,window.scrollY),t.offsetTop<=window.scrollY+900&&(t.style.opacity="1",t.classList.add("item_animation"))}};P(()=>{document.removeEventListener("scroll",p)}),h(()=>{b()});const u=m([]),f=m({total:0,current_index:a.page+1}),b=()=>{switch(a.classification){case"学习笔记":_(r.study,a.page);break;case"技术分享":_(r.technique,a.page);break;case"生活随想":_(r.life,a.page);break;case"二次元":_(r.acg,a.page);break}},_=(e,t)=>{t*i>=e.length-20?u.value=e.slice(0):u.value=e.slice(t*i,t*i+i),f.value.total=Math.ceil(e.length/i)},w=e=>{k.push(e)};return(e,t)=>{const L=j("Pagination");return n(),l("div",E,[o("div",q,[(n(!0),l(v,null,x(u.value,(s,I)=>(n(),l("div",{onClick:g=>w(s.link),class:"item flex flex_direction_column relative"},[o("div",F,[o("div",null,[o("span",H,c(s.title),1)]),o("span",{class:"short_msg",innerHTML:s.short_message},null,8,N),o("div",R," sparkle / "+c(s.data.split("?")[0])+" / "+c(s.data.split("?")[1])+" / "+c(s.data.split("?")[2]),1)]),o("div",S,[(n(!0),l(v,null,x(s.tags.split("?"),(g,U)=>(n(),l("span",V,c(g),1))),256))])],8,A))),256)),C(L,{onPage_change:e.page_handle,class:"pagination",data:f.value},null,8,["onPage_change","data"])])])}}},G=T(Y,[["__scopeId","data-v-4fd5450c"]]);export{G as default};
