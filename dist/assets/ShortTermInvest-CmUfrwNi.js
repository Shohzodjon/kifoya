import{L as C,_ as z,C as g}from"./LongInvestCard-B6YmXm2w.js";import{M as L}from"./MainCard-C79Khqel.js";import{I as T}from"./ConstructionCard.vue_vue_type_style_index_0_scoped_5547ffe1_lang-D39rVBcc.js";import{_ as S,d as D,f as M,p as O,h as $,o as h,c as p,a as e,i as t,t as l,F as _,j as m,w as o,u as c,D as d,n as u}from"./index-BPHDoV3V.js";const W={class:"long__term"},K={class:"container"},B=["innerHTML"],E={class:"invest__flex"},H={class:"invest__desc"},N={class:"invest__info"},U={class:"invest__title"},V={class:"invest__title"},j={class:"container"},P={class:"main__item"},A={class:"main__item"},G={class:"main__item"},J={__name:"ShortTermInvest",setup(Q){const i=D(""),f=D(3),F=[{title:"buyCar"},{title:"physicalOne"},{title:"physicalTwo"},{title:"physicalThree"},{title:"physicalFour"}],k=[{title:"legalOne"},{title:"legalTwo"}],I=[{title:"investTwo",desc:"shortWorkOneDesc"},{title:"shortWorkThree",desc:"shortWorkThreeDesc"},{title:"divident",desc:"shortWorkFourDesc"}],b=[{title:"serviceType",desc:"serviceTypeDesc"},{title:"allInvest",desc:"allInvestDesc"},{title:"riskManagment",desc:"riskManagmentDesc"},{title:"stableIncome",desc:"stableIncomeDesc"}],y=()=>{const s=window.innerWidth;f.value=s>1024?3:s>768?2:1};return M(()=>{y(),window.addEventListener("resize",y)}),O(()=>{window.removeEventListener("resize",y)}),(s,v)=>{const w=$("a-carousel"),r=$("a-collapse-panel"),q=$("a-collapse");return h(),p("section",W,[e("header",null,[e("div",K,[e("h2",{class:"title",innerHTML:s.$t("shortTerm")},null,8,B),t(C,{title:"investTitle",desc:"shortInvestDesc",desc_two:"shortInvestDescTwo"}),e("div",E,[e("div",H,[e("h3",null,l(s.$t("investPurpose")),1),e("p",N,l(s.$t("investDescFour")),1),e("div",null,[e("h5",U,l(s.$t("physical"))+" :",1),(h(),p(_,null,m(F,(n,a)=>t(T,{title:s.$t(n.title),order:a+1,key:a},null,8,["title","order"])),64)),e("h5",V,l(s.$t("legal"))+" :",1),(h(),p(_,null,m(k,(n,a)=>t(T,{title:s.$t(n.title),order:a+1,key:a},null,8,["title","order"])),64))])]),t(L,null,{img:o(()=>v[1]||(v[1]=[e("div",{class:"short__term"},[e("img",{src:z,alt:""})],-1)])),_:1})])])]),e("main",null,[e("div",j,[e("div",P,[e("h2",null,l(s.$t("howWorked")),1),t(w,{"slides-to-show":f.value,"after-change":s.onChange,dots:!1,draggable:"",loop:""},{default:o(()=>[(h(),p(_,null,m(I,(n,a)=>t(g,{key:a,title:s.$t(n.title),desc:s.$t(n.desc)},null,8,["title","desc"])),64))]),_:1},8,["slides-to-show","after-change"])]),e("div",A,[e("h2",null,l(s.$t("kifoyaInvest")),1),t(w,{"slides-to-show":f.value,"after-change":s.onChange,dots:!1,draggable:"",loop:""},{default:o(()=>[(h(),p(_,null,m(b,(n,a)=>t(g,{key:a,title:s.$t(n.title),desc:s.$t(n.desc)},null,8,["title","desc"])),64))]),_:1},8,["slides-to-show","after-change"])]),e("div",G,[e("h2",null,l(s.$t("shortInvestTool")),1),t(q,{activeKey:i.value,"onUpdate:activeKey":v[0]||(v[0]=n=>i.value=n),ghost:"false",class:"custom-collapse"},{default:o(()=>[t(r,{key:"1"},{header:o(()=>[e("span",null,l(s.$t("longFaqOne")),1),t(c(d),{style:{"font-size":"16px",color:"#23b123"},class:u({"rotate-icon":i.value.includes("1")})},null,8,["class"])]),default:o(()=>[e("p",null,l(s.$t("shortFaqOneDesc")),1)]),_:1}),t(r,{key:"2"},{header:o(()=>[e("span",null,l(s.$t("shortFaqTwo")),1),t(c(d),{style:{"font-size":"16px",color:"#23b123"},class:u({"rotate-icon":i.value.includes("2")})},null,8,["class"])]),default:o(()=>[e("p",null,l(s.$t("shortFaqTwoDesc")),1)]),_:1}),t(r,{key:"3"},{header:o(()=>[e("span",null,l(s.$t("shortFaqThree")),1),t(c(d),{style:{"font-size":"16px",color:"#23b123"},class:u({"rotate-icon":i.value.includes("3")})},null,8,["class"])]),default:o(()=>[e("p",null,l(s.$t("shortFaqThreeDesc")),1)]),_:1}),t(r,{key:"4"},{header:o(()=>[e("span",null,l(s.$t("shortFaqFour")),1),t(c(d),{style:{"font-size":"16px",color:"#23b123"},class:u({"rotate-icon":i.value.includes("4")})},null,8,["class"])]),default:o(()=>[e("p",null,l(s.$t("shortFaqFourDesc")),1)]),_:1}),t(r,{key:"5"},{header:o(()=>[e("span",null,l(s.$t("shortFaqFive")),1),t(c(d),{style:{"font-size":"16px",color:"#23b123"},class:u({"rotate-icon":i.value.includes("4")})},null,8,["class"])]),default:o(()=>[e("p",null,l(s.$t("shortFaqFiveDesc")),1)]),_:1}),t(r,{key:"6"},{header:o(()=>[e("span",null,l(s.$t("shortFaqSix")),1),t(c(d),{style:{"font-size":"16px",color:"#23b123"},class:u({"rotate-icon":i.value.includes("4")})},null,8,["class"])]),default:o(()=>[e("p",null,l(s.$t("shortFaqSixDesc")),1)]),_:1})]),_:1},8,["activeKey"])])])])])}}},x=S(J,[["__scopeId","data-v-82400e44"]]);export{x as default};
