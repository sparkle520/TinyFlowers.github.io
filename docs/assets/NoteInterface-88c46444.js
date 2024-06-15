import{_ as q,c as S,o as A,d as M,b as N,e as d,f as p,p as H,j as z,g as e,n as B,O as nt,h,u as F,s as j,N as P,m as L,B as J,w as G,v as Q,x as $,F as Z,r as _t,q as at,P as it,t as k,a as tt,M as et,L as ot,z as c,A as st,J as ct,D as lt,C as rt,I as s,H as dt}from"./index-05a9abef.js";import{o as ut,c as W,a as X}from"./topic-df9aaddf.js";import{m as U}from"./marked.esm-98d564e7.js";const mt=n=>(H("data-v-f281bfca"),n=n(),z(),n),ft={id:"note_top_main",class:"relative flex align_items_center justify_content_center"},pt=mt(()=>e("img",{class:"note_top_main_bg",src:"https://pic.imgdb.cn/item/666c45e4d9c307b7e930def6.png",alt:""},null,-1)),ht=[pt],vt={__name:"NoteTopInterface",setup(n){return S(),A(()=>{}),M(()=>{}),N(()=>{}),(a,b)=>(d(),p("div",ft,ht))}},gt=q(vt,[["__scopeId","data-v-f281bfca"]]),xt={__name:"NoteBgInterface",setup(n){return S(),A(()=>{}),N(()=>{}),(a,b)=>{const E=B("Particles");return d(),nt(E,{id:"tsparticles",options:h(ut)},null,8,["options"])}}};const bt=n=>(H("data-v-a35ecb6f"),n=n(),z(),n),yt={id:"directory_list_main"},Et={class:"catalog-card"},It={class:"catalog-card-header"},Tt=bt(()=>e("div",{class:"flex flex_direction_row align_items_center"},[e("strong",null,"目录🌼")],-1)),$t={class:"catalog-content"},wt=["onClick","title"],kt={__name:"Directory",setup(n){const a=F(),{theme:b}=j(a),{layout:E}=j(a);a.$subscribe((_,r)=>{f(r.theme)}),A(()=>{}),M(()=>{P.off("note_data"),document.removeEventListener("scroll",y)});const y=()=>{if(i.value==null||i.value==null)return;let _=[];for(let r=i.value.length-1;r>=0;r--){const g=i.value[r];if(g.scrollTop<=window.scrollY){if(m.value.id===g.id)return;Object.assign(m.value,g),l(g,!0),_.push(g);let o=g.parent;for(;o;)l(o,!0),_.push(o),o=o.parent;for(const I of i.value)_.includes(I)||l(I,!1);return}}};N(()=>{f(b.value),P.on("note_data",()=>u()),document.addEventListener("scroll",y)});const u=()=>{i.value=v()},i=L([]);J(i,_=>{_.length>0?document.querySelector("#directory_list_main").style.display="block":document.querySelector("#directory_list_main").style.display="none"});let m=L({});function v(){let _=[],r=["h1","h2","h3","h4","h5","h6"];if(!document.querySelector(".markdown-body"))return _;let o=Array.from(document.querySelectorAll(".markdown-body *")),I=new Set(o.map(t=>t.tagName.toLowerCase()));for(let t=r.length-1;t>=0;t--)I.has(r[t])||r.splice(t,1);let R=r.map(()=>0),V=document.querySelector("#note_top_main").clientHeight+60;for(let t=0;t<o.length;t++){const w=o[t];let K=w.tagName.toLowerCase(),C=r.indexOf(K);if(C==-1)continue;let x={id:K+"-"+w.innerText+"-"+t,level:C,parent:null,children:[],rawName:w.innerText,scrollTop:w.offsetTop+V};if(_.length>0){let T=_.at(-1);if(T.level<x.level)x.parent=T,T.children.push(x);else if(T.level>x.level){R.fill(0,C+1);let O=T.parent;for(;O;){if(O.level<x.level){O.children.push(x),x.parent=O;break}O=O.parent}}else T.parent&&(x.parent=T.parent,T.parent.children.push(x))}R[C]+=1,x.isVisible=x.parent==null,x.name=w.innerText,_.push(x)}return _}const f=_=>{};function l(_,r){for(const g of _.children)g.isVisible=r}function D(_){window.scrollTo({top:_+10,behavior:"smooth"})}return(_,r)=>{const g=B("font-awesome-icon");return d(),p("div",yt,[G(e("div",Et,[e("div",It,[e("div",null,[e("span",null,[$(g,{icon:["fas","bars-staggered"],class:"catalog-icon"})]),Tt])]),e("div",$t,[(d(!0),p(Z,null,_t(i.value,o=>G((d(),p("div",{key:o.id,onClick:I=>D(o.scrollTop),class:at(["catalog-item",h(m).id==o.id?"active":"not-active"]),style:it({paddingLeft:o.level*10+"px"}),title:o.rawName},k(o.name),15,wt)),[[Q,o.isVisible]])),128))])],512),[[Q,h(E)]])])}}},Lt=q(kt,[["__scopeId","data-v-a35ecb6f"]]);const Y=n=>(H("data-v-7a2fd429"),n=n(),z(),n),Dt={id:"topic_right_main"},Rt={class:"personal_item intro flex flex_direction_column align_items_center"},Vt=["src"],Ot=["textContent"],Pt=["textContent"],At={class:"topic_class_box flex flex_direction_row"},Nt={class:"topic_classification_total_box flex flex_direction_column align_items_center"},St=Y(()=>e("h3",null,"文章",-1)),Ct=["textContent"],Bt=Y(()=>e("div",{class:"topic_classification_total_box flex flex_direction_column align_items_center"},[e("h3",null,"分类"),e("span",null,"3")],-1)),jt={class:"topic_classification_total_box flex flex_direction_column align_items_center"},qt=Y(()=>e("h3",null,"笔记",-1)),Mt={__name:"NoteRightInterface",setup(n){const a=F(),b=tt(),E=et(),y=ot();S(),A(()=>{}),N(()=>{i(a.theme),u(a.layout)}),a.$subscribe((m,v)=>{i(v.theme),u(v.layout)});const u=m=>{const v=document.querySelector("#topic_right_main");m?v.style.display="block":v.style.display="none"},i=m=>{m?(c("--bg_color","#0b0e14"),c("--color","#f7f7f7"),c("--item_bg","#242b3d"),c("--item_shadow","#242b34"),c("--topic_classification_color","#5e6d78"),c("--topic_classification_num_color","#b5b9d6")):(c("--bg_color","#f7f3f5"),c("--color","#4d4949"),c("--item_bg","#fff"),c("--item_shadow","#cacaca4f"),c("--topic_classification_color","#216eba"),c("--topic_classification_num_color","#4d4949"))};return(m,v)=>(d(),p("div",Dt,[e("div",Rt,[e("img",{src:h(b).avatar,alt:""},null,8,Vt),e("span",{class:"personal_name",textContent:k(h(b).name)},null,8,Ot),e("span",{class:"personal_signature",textContent:k(h(b).signature)},null,8,Pt),e("div",At,[e("div",Nt,[St,e("span",{textContent:k(h(E).length())},null,8,Ct)]),Bt,e("div",jt,[qt,e("span",null,k(h(y).data.length),1)])])]),$(Lt)]))}},Ht=q(Mt,[["__scopeId","data-v-7a2fd429"]]);const zt=n=>(H("data-v-9464e11d"),n=n(),z(),n),Ft={id:"topic_bottom_main"},Ut={class:"note_context_switch_box flex flex_direction_row"},Jt={class:"note_switch_item flex flex_direction_column justify_content_center"},Gt={key:0},Yt={key:1},Kt={key:2},Qt={class:"note_switch_item flex flex_direction_column justify_content_center"},Wt={key:0},Xt={key:1},Zt={key:2},te=zt(()=>e("div",{id:"gitalk-container"},null,-1)),ee={__name:"NoteBottomInterface",setup(n){const{params:a}=st(),b=S(),E=F();tt(),et(),A(()=>{}),M(()=>{P.off("note_data")}),E.$subscribe((f,l)=>{v(l.theme)});const y=L(),u=L(),i=L(),m=()=>{const f=a.index-1;f==0?u.value="--":u.value=y.value.directory_list[f-1].name,f==y.value.directory_list.length-1?i.value="--":i.value=y.value.directory_list[f+1].name};N(()=>{v(E.theme),P.on("note_data",f=>{y.value=f,m(),new ct({clientID:"429076372c73a03552c6",clientSecret:"e10cf1b42cb0daf8cda1857f8f9a4ab411c4c91e",repo:"TinyFlowersComment",owner:"sparkle520",admin:["sparkle520"],id:y.value.link,language:"zh-CN",distractionFreeMode:!1,proxy:"https://strong-caramel-969805.netlify.app/github_access_token"}).render("gitalk-container")})});const v=f=>{f?(c("--topic_author_info_box_color","#788086"),c("--topic_author_info_box_bg","#1e2433"),c("--topic_author_info_inner_box_color","#f5f5f5")):(c("--topic_author_info_box_color","#b0c4de"),c("--topic_author_info_box_bg","#f8f8ff"),c("--topic_author_info_inner_box_color","#78c1f8"))};return(f,l)=>(d(),p("div",Ft,[e("div",Ut,[e("div",Jt,[u.value=="--"?(d(),p("div",Gt)):(d(),p("div",Yt,"上一章")),u.value=="--"?(d(),p("div",Kt)):(d(),p("div",{key:3,onClick:l[0]||(l[0]=D=>h(b).push(`/note/book/${h(a).id}/${parseInt(h(a).index)-1}`))},k(u.value),1))]),e("div",Qt,[i.value=="--"?(d(),p("div",Wt)):(d(),p("div",Xt,"下一章")),i.value=="--"?(d(),p("div",Zt)):(d(),p("div",{key:3,onClick:l[1]||(l[1]=D=>h(b).push(`/note/book/${h(a).id}/${parseInt(h(a).index)+1}`))},k(i.value),1))])]),te]))}},oe=q(ee,[["__scopeId","data-v-9464e11d"]]),se={id:"topic_main"},ne={class:"topic_container"},_e={class:"topic_content"},ae={class:"topic_text"},ie=["innerHTML"],ue={__name:"NoteInterface",setup(n){const{params:a}=st(),b=new U.Renderer,E=ot();U.setOptions({renderer:b,gfm:!1,pedantic:!1,sanitize:!0}),M(()=>{clearInterval(l)});const y=()=>{g(a.id,a.index)},u=L("");function i(){const o=document.getElementById("mathjax");dt(o)}J(u,o=>{u.value=U(o),rt(()=>{i(),r(),P.emit("note_data",E.get_note_by_id(a.id))})});const m=F(),{theme:v}=j(m),{layout:f}=j(m);m.$subscribe((o,I)=>{W(I.theme),X(I.layout)}),S(),A(()=>{});let l,D;const _=L(!1),r=()=>{l||(l=setInterval(()=>{const o=document.getElementById("mathjax");o.clientHeight!=D&&(P.emit("note_data",E.get_note_by_id(a.id)),D=o.clientHeight,_.value=!0)},1e3))};J(_,o=>{o&&clearInterval(l)}),N(()=>{W(v.value),X(f.value),y()});const g=(o,I)=>{const R=`/src/assets/note_data/${o}/${I}.md`,V=Object.assign({"/src/assets/note_data/1/1.md":()=>s(()=>import("./1-d32c4d54.js"),[]).then(t=>t.default),"/src/assets/note_data/1/2.md":()=>s(()=>import("./2-b28f20ae.js"),[]).then(t=>t.default),"/src/assets/note_data/1/3.md":()=>s(()=>import("./3-1b340cce.js"),[]).then(t=>t.default),"/src/assets/note_data/1/4.md":()=>s(()=>import("./4-b50e1e00.js"),[]).then(t=>t.default),"/src/assets/note_data/1/5.md":()=>s(()=>import("./5-ca2841c1.js"),[]).then(t=>t.default),"/src/assets/note_data/1/6.md":()=>s(()=>import("./6-d61a61b2.js"),[]).then(t=>t.default),"/src/assets/note_data/1/7.md":()=>s(()=>import("./7-ab8fbab2.js"),[]).then(t=>t.default),"/src/assets/note_data/2/1.md":()=>s(()=>import("./1-c092e53a.js"),[]).then(t=>t.default),"/src/assets/note_data/2/10.md":()=>s(()=>import("./10-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/2/11.md":()=>s(()=>import("./11-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/2/12.md":()=>s(()=>import("./12-fa8373a2.js"),[]).then(t=>t.default),"/src/assets/note_data/2/2.md":()=>s(()=>import("./2-d85cd600.js"),[]).then(t=>t.default),"/src/assets/note_data/2/3.md":()=>s(()=>import("./3-d85cd600.js"),[]).then(t=>t.default),"/src/assets/note_data/2/4.md":()=>s(()=>import("./4-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/2/5.md":()=>s(()=>import("./5-d85cd600.js"),[]).then(t=>t.default),"/src/assets/note_data/2/6.md":()=>s(()=>import("./6-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/2/7.md":()=>s(()=>import("./7-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/2/8.md":()=>s(()=>import("./8-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/2/9.md":()=>s(()=>import("./9-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/3/1.md":()=>s(()=>import("./1-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/3/2.md":()=>s(()=>import("./2-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/3/3.md":()=>s(()=>import("./3-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/3/4.md":()=>s(()=>import("./4-d85cd600.js"),[]).then(t=>t.default),"/src/assets/note_data/3/5.md":()=>s(()=>import("./5-e9220a04.js"),[]).then(t=>t.default),"/src/assets/note_data/3/6.md":()=>s(()=>import("./6-d85cd600.js"),[]).then(t=>t.default)});for(const t in V)t==R&&V[t]().then(w=>{u.value=w})};return(o,I)=>{const R=B("TopicLeftInterface"),V=B("Utils"),t=lt("highlight");return d(),p(Z,null,[e("div",se,[$(xt,{class:"topic_bg"}),$(gt,{class:"topic_top_interface"}),e("div",ne,[$(R),e("div",_e,[e("div",ae,[G(e("div",{innerHTML:u.value,id:"mathjax",class:"markdown-body"},null,8,ie),[[t]])]),$(oe)]),$(Ht)])]),$(V)],64)}}};export{ue as default};
