import{_ as B,c as S,o as P,d as q,b as N,e as f,f as h,p as M,j as H,g as t,u as z,s as j,N as A,m as k,B as U,n as J,w as G,v as Q,h as x,x as $,F as Z,r as ne,q as _e,O as ae,t as L,a as ee,M as te,L as oe,z as c,A as se,J as ie,D as ce,C as le,I as s,H as re}from"./index-5b04ea51.js";import{c as W,a as X}from"./topic-6c7f23ce.js";import{m as F}from"./marked.esm-98d564e7.js";const de=n=>(M("data-v-4f1e9573"),n=n(),H(),n),ue={id:"note_top_main",class:"relative flex align_items_center justify_content_center"},me=de(()=>t("img",{class:"note_top_main_bg",src:"https://pic.imgdb.cn/item/65d5a2f19f345e8d0320a3c9.jpg",alt:""},null,-1)),fe=[me],he={__name:"NoteTopInterface",setup(n){return S(),P(()=>{}),q(()=>{}),N(()=>{}),(a,y)=>(f(),h("div",ue,fe))}},pe=B(he,[["__scopeId","data-v-4f1e9573"]]),ve={__name:"NoteBgInterface",setup(n){return S(),P(()=>{}),N(()=>{}),(a,y)=>null}};const ge=n=>(M("data-v-eec66c09"),n=n(),H(),n),xe={id:"directory_list_main"},ye={class:"catalog-card"},be={class:"catalog-card-header"},Ee=ge(()=>t("div",{class:"flex flex_direction_row align_items_center"},[t("strong",null,"目录")],-1)),Ie={class:"catalog-content"},Te=["onClick","title"],$e={__name:"Directory",setup(n){const a=z(),{theme:y}=j(a),{layout:I}=j(a);a.$subscribe((_,r)=>{m(r.theme)}),P(()=>{}),q(()=>{A.off("note_data"),document.removeEventListener("scroll",b)});const b=()=>{if(i.value==null||i.value==null)return;let _=[];for(let r=i.value.length-1;r>=0;r--){const v=i.value[r];if(v.scrollTop<=window.scrollY){if(u.value.id===v.id)return;Object.assign(u.value,v),l(v,!0),_.push(v);let o=v.parent;for(;o;)l(o,!0),_.push(o),o=o.parent;for(const E of i.value)_.includes(E)||l(E,!1);return}}};N(()=>{m(y.value),A.on("note_data",()=>d()),document.addEventListener("scroll",b)});const d=()=>{i.value=p()},i=k([]);U(i,_=>{_.length>0?document.querySelector("#directory_list_main").style.display="block":document.querySelector("#directory_list_main").style.display="none"});let u=k({});function p(){let _=[],r=["h1","h2","h3","h4","h5","h6"];if(!document.querySelector(".markdown-body"))return _;let o=Array.from(document.querySelectorAll(".markdown-body *")),E=new Set(o.map(e=>e.tagName.toLowerCase()));for(let e=r.length-1;e>=0;e--)E.has(r[e])||r.splice(e,1);let R=r.map(()=>0),V=document.querySelector("#note_top_main").clientHeight+60;for(let e=0;e<o.length;e++){const w=o[e];let K=w.tagName.toLowerCase(),C=r.indexOf(K);if(C==-1)continue;let g={id:K+"-"+w.innerText+"-"+e,level:C,parent:null,children:[],rawName:w.innerText,scrollTop:w.offsetTop+V};if(_.length>0){let T=_.at(-1);if(T.level<g.level)g.parent=T,T.children.push(g);else if(T.level>g.level){R.fill(0,C+1);let O=T.parent;for(;O;){if(O.level<g.level){O.children.push(g),g.parent=O;break}O=O.parent}}else T.parent&&(g.parent=T.parent,T.parent.children.push(g))}R[C]+=1,g.isVisible=g.parent==null,g.name=w.innerText,_.push(g)}return _}const m=_=>{};function l(_,r){for(const v of _.children)v.isVisible=r}function D(_){window.scrollTo({top:_+10,behavior:"smooth"})}return(_,r)=>{const v=J("font-awesome-icon");return f(),h("div",xe,[G(t("div",ye,[t("div",be,[t("div",null,[t("span",null,[$(v,{icon:["fas","bars-staggered"],class:"catalog-icon"})]),Ee])]),t("div",Ie,[(f(!0),h(Z,null,ne(i.value,o=>G((f(),h("div",{key:o.id,onClick:E=>D(o.scrollTop),class:_e(["catalog-item",x(u).id==o.id?"active":"not-active"]),style:ae({marginLeft:o.level*10+"px"}),title:o.rawName},L(o.name),15,Te)),[[Q,o.isVisible]])),128))])],512),[[Q,x(I)]])])}}},we=B($e,[["__scopeId","data-v-eec66c09"]]);const Y=n=>(M("data-v-7a2fd429"),n=n(),H(),n),Le={id:"topic_right_main"},ke={class:"personal_item intro flex flex_direction_column align_items_center"},De=["src"],Re=["textContent"],Ve=["textContent"],Oe={class:"topic_class_box flex flex_direction_row"},Ae={class:"topic_classification_total_box flex flex_direction_column align_items_center"},Pe=Y(()=>t("h3",null,"文章",-1)),Ne=["textContent"],Se=Y(()=>t("div",{class:"topic_classification_total_box flex flex_direction_column align_items_center"},[t("h3",null,"分类"),t("span",null,"3")],-1)),Ce={class:"topic_classification_total_box flex flex_direction_column align_items_center"},je=Y(()=>t("h3",null,"笔记",-1)),Be={__name:"NoteRightInterface",setup(n){const a=z(),y=ee(),I=te(),b=oe();S(),P(()=>{}),N(()=>{i(a.theme),d(a.layout)}),a.$subscribe((u,p)=>{i(p.theme),d(p.layout)});const d=u=>{const p=document.querySelector("#topic_right_main");u?p.style.display="block":p.style.display="none"},i=u=>{u?(c("--bg_color","#0b0e14"),c("--color","#f7f7f7"),c("--item_bg","#242b3d"),c("--item_shadow","#242b34"),c("--topic_classification_color","#5e6d78"),c("--topic_classification_num_color","#b5b9d6")):(c("--bg_color","#f7f3f5"),c("--color","#4d4949"),c("--item_bg","#fff"),c("--item_shadow","#cacaca4f"),c("--topic_classification_color","#216eba"),c("--topic_classification_num_color","#4d4949"))};return(u,p)=>(f(),h("div",Le,[t("div",ke,[t("img",{src:x(y).avatar,alt:""},null,8,De),t("span",{class:"personal_name",textContent:L(x(y).name)},null,8,Re),t("span",{class:"personal_signature",textContent:L(x(y).signature)},null,8,Ve),t("div",Oe,[t("div",Ae,[Pe,t("span",{textContent:L(x(I).length())},null,8,Ne)]),Se,t("div",Ce,[je,t("span",null,L(x(b).data.length),1)])])]),$(we)]))}},qe=B(Be,[["__scopeId","data-v-7a2fd429"]]);const Me=n=>(M("data-v-2d5e76a7"),n=n(),H(),n),He={id:"topic_bottom_main"},ze={class:"note_context_switch_box flex flex_direction_row"},Fe={class:"note_switch_item flex flex_direction_column justify_content_center"},Ue={key:0},Je={key:1},Ge={key:2},Ye={class:"note_switch_item flex flex_direction_column justify_content_center"},Ke={key:0},Qe={key:1},We={key:2},Xe=Me(()=>t("div",{id:"gitalk-container"},null,-1)),Ze={__name:"NoteBottomInterface",setup(n){const{params:a}=se(),y=S(),I=z();ee(),te(),P(()=>{}),q(()=>{A.off("note_data")}),I.$subscribe((m,l)=>{p(l.theme)});const b=k(),d=k(),i=k(),u=()=>{const m=a.index-1;m==0?d.value="--":d.value=b.value.directory_list[m-1].name,m==b.value.directory_list.length-1?i.value="--":i.value=b.value.directory_list[m+1].name};N(()=>{p(I.theme),A.on("note_data",m=>{b.value=m,u(),new ie({clientID:"429076372c73a03552c6",clientSecret:"e10cf1b42cb0daf8cda1857f8f9a4ab411c4c91e",repo:"TinyFlowersComment",owner:"sparkle520",admin:["sparkle520"],id:b.value.link,language:"zh-CN",distractionFreeMode:!1,proxy:"https://strong-caramel-969805.netlify.app/github_access_token"}).render("gitalk-container")})});const p=m=>{m?(c("--topic_author_info_box_color","#788086"),c("--topic_author_info_box_bg","#1e2433"),c("--topic_author_info_inner_box_color","#f5f5f5")):(c("--topic_author_info_box_color","#b0c4de"),c("--topic_author_info_box_bg","#f8f8ff"),c("--topic_author_info_inner_box_color","#78c1f8"))};return(m,l)=>(f(),h("div",He,[t("div",ze,[t("div",Fe,[d.value=="--"?(f(),h("div",Ue)):(f(),h("div",Je,"上一章")),d.value=="--"?(f(),h("div",Ge)):(f(),h("div",{key:3,onClick:l[0]||(l[0]=D=>x(y).push(`/note/book/${x(a).id}/${parseInt(x(a).index)-1}`))},L(d.value),1))]),t("div",Ye,[i.value=="--"?(f(),h("div",Ke)):(f(),h("div",Qe,"下一章")),i.value=="--"?(f(),h("div",We)):(f(),h("div",{key:3,onClick:l[1]||(l[1]=D=>x(y).push(`/note/book/${x(a).id}/${parseInt(x(a).index)+1}`))},L(i.value),1))])]),Xe]))}},et=B(Ze,[["__scopeId","data-v-2d5e76a7"]]),tt={id:"topic_main"},ot={class:"topic_container"},st={class:"topic_content"},nt={class:"topic_text"},_t=["innerHTML"],rt={__name:"NoteInterface",setup(n){const{params:a}=se(),y=new F.Renderer,I=oe();F.setOptions({renderer:y,gfm:!1,pedantic:!1,sanitize:!0}),q(()=>{clearInterval(l)});const b=()=>{v(a.id,a.index)},d=k("");function i(){const o=document.getElementById("mathjax");re(o)}U(d,o=>{d.value=F(o),le(()=>{i(),r(),A.emit("note_data",I.get_note_by_id(a.id))})});const u=z(),{theme:p}=j(u),{layout:m}=j(u);u.$subscribe((o,E)=>{W(E.theme),X(E.layout)}),S(),P(()=>{});let l,D;const _=k(!1),r=()=>{l||(l=setInterval(()=>{const o=document.getElementById("mathjax");o.clientHeight!=D&&(A.emit("note_data",I.get_note_by_id(a.id)),D=o.clientHeight,_.value=!0)},1e3))};U(_,o=>{o&&clearInterval(l)}),N(()=>{W(p.value),X(m.value),b()});const v=(o,E)=>{const R=`/src/assets/note_data/${o}/${E}.md`,V=Object.assign({"/src/assets/note_data/1/1.md":()=>s(()=>import("./1-d32c4d54.js"),[]).then(e=>e.default),"/src/assets/note_data/1/2.md":()=>s(()=>import("./2-b28f20ae.js"),[]).then(e=>e.default),"/src/assets/note_data/1/3.md":()=>s(()=>import("./3-1b340cce.js"),[]).then(e=>e.default),"/src/assets/note_data/1/4.md":()=>s(()=>import("./4-b50e1e00.js"),[]).then(e=>e.default),"/src/assets/note_data/1/5.md":()=>s(()=>import("./5-ca2841c1.js"),[]).then(e=>e.default),"/src/assets/note_data/1/6.md":()=>s(()=>import("./6-d61a61b2.js"),[]).then(e=>e.default),"/src/assets/note_data/1/7.md":()=>s(()=>import("./7-ab8fbab2.js"),[]).then(e=>e.default),"/src/assets/note_data/2/1.md":()=>s(()=>import("./1-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/2/10.md":()=>s(()=>import("./10-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/2/11.md":()=>s(()=>import("./11-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/2/12.md":()=>s(()=>import("./12-54226420.js"),[]).then(e=>e.default),"/src/assets/note_data/2/2.md":()=>s(()=>import("./2-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/2/3.md":()=>s(()=>import("./3-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/2/4.md":()=>s(()=>import("./4-d85cd600.js"),[]).then(e=>e.default),"/src/assets/note_data/2/5.md":()=>s(()=>import("./5-d85cd600.js"),[]).then(e=>e.default),"/src/assets/note_data/2/6.md":()=>s(()=>import("./6-d85cd600.js"),[]).then(e=>e.default),"/src/assets/note_data/2/7.md":()=>s(()=>import("./7-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/2/8.md":()=>s(()=>import("./8-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/2/9.md":()=>s(()=>import("./9-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/3/1.md":()=>s(()=>import("./1-d85cd600.js"),[]).then(e=>e.default),"/src/assets/note_data/3/2.md":()=>s(()=>import("./2-d85cd600.js"),[]).then(e=>e.default),"/src/assets/note_data/3/3.md":()=>s(()=>import("./3-d85cd600.js"),[]).then(e=>e.default),"/src/assets/note_data/3/4.md":()=>s(()=>import("./4-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/3/5.md":()=>s(()=>import("./5-e9220a04.js"),[]).then(e=>e.default),"/src/assets/note_data/3/6.md":()=>s(()=>import("./6-e9220a04.js"),[]).then(e=>e.default)});for(const e in V)e==R&&V[e]().then(w=>{d.value=w})};return(o,E)=>{const R=J("TopicLeftInterface"),V=J("Utils"),e=ce("highlight");return f(),h(Z,null,[t("div",tt,[$(ve,{class:"topic_bg"}),$(pe,{class:"topic_top_interface"}),t("div",ot,[$(R),t("div",st,[t("div",nt,[G(t("div",{innerHTML:d.value,id:"mathjax",class:"markdown-body"},null,8,_t),[[e]])]),$(et)]),$(qe)])]),$(V)],64)}}};export{rt as default};
