const e=(o,l)=>{document.getElementsByTagName("body")[0].style.setProperty(o,l)},_=o=>{o?(e("--topic_content_bg","#242837"),e("--topic_bg","#1e2433"),e("--normal_color","#f7f3f5"),e("--directory_list_cover_bg","#1e2433"),e("--code_bg","#123"),e("--code_color","#ffff"),e("--h_color","#c4c3d4"),e("--blockquote_color","#fdfbfb"),e("--blockquote_border","#ffff"),e("--blockquote_bg","#fdfbfb")):(e("--topic_content_bg","#ffff"),e("--topic_bg","#fdfbfb"),e("--normal_color","#4d4949"),e("--directory_list_cover_bg","#fdfbfb"),e("--code_bg","#f6f8fa"),e("--code_color","#e8ecfc"),e("--h_color","#b399ff"),e("--blockquote_color","#686870"),e("--blockquote_border","rgb(239, 112, 96)"),e("--blockquote_bg","#b399ff")),f(o)},f=o=>{o?(e("--hljs_color","#c9d1d9"),e("--hljs_bg","#0d1117"),e("--hljs_variable_color","#ff7b72"),e("--hljs_class_color","#d2a8ff"),e("--hljs_operator_color","#79c0ff"),e("--hljs_string_color","#a5d6ff"),e("--hljs_symbol","#ffa657"),e("--hljs_formula","#8b949e"),e("--hljs_quote","#7ee787"),e("--hljs_subst","#c9d1d9"),e("--hljs_section","#1f6feb"),e("--hljs_bullet","#f2cc60"),e("--hljs_emphasis","#c9d1d9"),e("--hljs_addition_color","#aff5b4"),e("--hljs_addition_bg","#033a16"),e("--hljs_deletion_color","#ffdcd7"),e("--hljs_deletion_bg","#67060c")):(e("--hljs_color","#123"),e("--hljs_bg","#ffffff"),e("--hljs_variable_color","#d73a49"),e("--hljs_class_color","#6f42c1"),e("--hljs_operator_color","#005cc5"),e("--hljs_string_color","#032f62"),e("--hljs_symbol","#e36209"),e("--hljs_formula","#6a737d"),e("--hljs_quote","#22863a"),e("--hljs_subst","#123"),e("--hljs_section","#005cc5"),e("--hljs_bullet","#735c0f"),e("--hljs_emphasis","#24292e"),e("--hljs_addition_color","#22863a"),e("--hljs_addition_bg","#f0fff4"),e("--hljs_deletion_color","#b31d28"),e("--hljs_deletion_bg","#ffeef0"),e("--color-fg-default","#ffeef0"))},r={background:{color:{value:"transparent"}},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!1,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#b399ff"},links:{color:"#30d5c8",distance:150,enable:!0,opacity:.5,width:1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0},a=o=>{const l=document.querySelector(".topic_content");o?l.style.width="60vw":l.style.width="80vw"},i=(o,l)=>{if(o.length==0)return-1;let c=0,s=o.length;for(;c<s;){let t=c+Math.floor((s-c)/2);if(o[t].id==l)return o[t];o[t].id>l?c=t+1:s=t}return-1};export{a,_ as c,r as o,i as s};
