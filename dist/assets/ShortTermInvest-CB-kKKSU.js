import{L as b}from"./LongInvestCard-B7Db6ypX.js";import{M as L}from"./MainCard-DihVYhTc.js";import{I as z,C as $}from"./ConstructionCard-D-YD_Wrc.js";import{_ as S,d as C,f as F,m as M,h as m,o as r,c,a as e,i as t,t as n,F as p,j as h,w as o,k as f,D as w,n as g}from"./index-CUi5wsY8.js";const E="/assets/img3-DfFQp0Pe.png",K={class:"long__term"},q={class:"container"},B=["innerHTML"],H={class:"invest__flex"},N={class:"invest__desc"},P={class:"invest__info"},U={class:"container"},V={class:"main__item"},W={class:"main__item"},j={class:"main__item"},y="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore minima veritatis maxime, sed incidunt aut hic vitae unde ipsum amet nobis sunt, quo commodi illum quia magni neque nihil! Eveniet.",O={__name:"ShortTermInvest",setup(Q){const a=C(""),u=C(3),k=[{title:"buyHouse"},{title:"buyCar"},{title:"pension"}],T=[{title:"investTwo",desc:"investDescTwo"},{title:"grow",desc:"growDesc"},{title:"divident",desc:"dividentDesc"},{title:"investTwo",desc:"investDescTwo"},{title:"grow",desc:"growDesc"},{title:"divident",desc:"dividentDesc"}],v=()=>{const s=window.innerWidth;u.value=s>1024?3:s>768?2:1};return F(()=>{v(),window.addEventListener("resize",v)}),M(()=>{window.removeEventListener("resize",v)}),(s,d)=>{const D=m("a-carousel"),_=m("a-collapse-panel"),I=m("a-collapse");return r(),c("section",K,[e("header",null,[e("div",q,[e("h2",{class:"title",innerHTML:s.$t("shortTerm")},null,8,B),t(b,{title:"investTitle",desc:"investDescThree",desc_two:"investDescFive"}),e("div",H,[e("div",N,[e("h3",null,n(s.$t("investPurpose")),1),e("p",P,n(s.$t("investDescFour")),1),e("div",null,[(r(),c(p,null,h(k,(l,i)=>t(z,{title:s.$t(l.title),order:i+1,key:i},null,8,["title","order"])),64))])]),t(L,null,{img:o(()=>d[1]||(d[1]=[e("div",{class:"short__term"},[e("img",{src:E,alt:""})],-1)])),_:1})])])]),e("main",null,[e("div",U,[e("div",V,[e("h2",null,n(s.$t("howWorked")),1),t(D,{"slides-to-show":u.value,"after-change":s.onChange,dots:!1,draggable:"",loop:"",autoplay:""},{default:o(()=>[(r(),c(p,null,h(T,(l,i)=>t($,{key:i,title:s.$t(l.title),desc:s.$t(l.desc)},null,8,["title","desc"])),64))]),_:1},8,["slides-to-show","after-change"])]),e("div",W,[e("h2",null,n(s.$t("kifoyaInvest")),1),t(D,{"slides-to-show":u.value,"after-change":s.onChange,dots:!1,draggable:"",loop:"",autoplay:""},{default:o(()=>[(r(),c(p,null,h(T,(l,i)=>t($,{key:i,title:s.$t(l.title),desc:s.$t(l.desc)},null,8,["title","desc"])),64))]),_:1},8,["slides-to-show","after-change"])]),e("div",j,[e("h2",null,n(s.$t("shortInvestTool")),1),t(I,{activeKey:a.value,"onUpdate:activeKey":d[0]||(d[0]=l=>a.value=l),ghost:"false",class:"custom-collapse"},{default:o(()=>[t(_,{key:"1"},{header:o(()=>[e("span",null,n(s.$t("serviceType")),1),t(f(w),{style:{"font-size":"16px",color:"#23b123"},class:g({"rotate-icon":a.value.includes("1")})},null,8,["class"])]),default:o(()=>[e("p",null,n(y))]),_:1}),t(_,{key:"2"},{header:o(()=>[e("span",null,n(s.$t("allInvest")),1),t(f(w),{style:{"font-size":"16px",color:"#23b123"},class:g({"rotate-icon":a.value.includes("2")})},null,8,["class"])]),default:o(()=>[e("p",null,n(y))]),_:1}),t(_,{key:"3"},{header:o(()=>[e("span",null,n(s.$t("safeInvest")),1),t(f(w),{style:{"font-size":"16px",color:"#23b123"},class:g({"rotate-icon":a.value.includes("3")})},null,8,["class"])]),default:o(()=>[e("p",null,n(y))]),_:1})]),_:1},8,["activeKey"])])])])])}}},X=S(O,[["__scopeId","data-v-6ea8306b"]]);export{X as default};
