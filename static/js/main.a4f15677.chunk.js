(this["webpackJsonptraining-app"]=this["webpackJsonptraining-app"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},34:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),n=s.n(i),a=s(13),r=s.n(a),l=(s(23),s(6)),d=s(14),j=s(17),o=s(16),g=(s(24),s(3)),b=(s(25),s(7)),m=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header-home",children:Object(c.jsx)(g.b,{to:"Home",activeStyle:{color:"aqua",boxShadow:"rgba(10, 255, 255, 1) 5px 10px 30px",background:"linear-gradient(173deg, rgba(0,255,248,0.196516106442577) 34%, rgba(14,250,243,0.4066001400560224) 100%)"},onClick:function(){return e.changeHeadtitle("Home")},className:"header-home_link",children:"Home"})}),Object(c.jsx)("div",{className:"header-projects",children:Object(c.jsx)(g.b,{to:"Projects",activeStyle:{color:"aqua",boxShadow:"rgba(10, 255, 255, 1) 5px 10px 30px",background:"linear-gradient(173deg, rgba(0,255,248,0.196516106442577) 34%, rgba(14,250,243,0.4066001400560224) 100%)"},onClick:function(){return e.changeHeadtitle("Projects")},className:"header-projects_link",children:"Projects"})}),Object(c.jsx)("div",{className:"header-contacts",children:Object(c.jsx)(g.b,{to:"Contacts",activeStyle:{color:"aqua",boxShadow:"rgba(10, 255, 255, 1) 5px 10px 30px",background:"linear-gradient(173deg, rgba(0,255,248,0.196516106442577) 34%, rgba(14,250,243,0.4066001400560224) 100%)"},onClick:function(){return e.changeHeadtitle("Contacts")},className:"header-contacts_link",children:"Contacts"})})]})})},u=(s(34),s.p+"static/media/logo_me.b85c0676.jpg"),h=s.p+"static/media/telegram.e84f44f6.png",p=s(5),A=s.n(p),x=s(12),f=function e(){var t=this;Object(l.a)(this,e),this.mainUrl="https://api.github.com/users/NikichFT/repos",this.getData=function(){var e=Object(x.a)(A.a.mark((function e(t){var s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return s=e.sent,e.next=5,s.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getProj=Object(x.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData(t.mainUrl);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},v=(s(36),function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"main__head",children:Object(c.jsxs)("div",{className:"contacts",children:[Object(c.jsx)("div",{className:"contacts__title",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(c.jsxs)("div",{className:"contacts__description",children:["\u041c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435: \u0433. \u041c\u043e\u0441\u043a\u0432\u0430 ",Object(c.jsx)("br",{}),"Email: nikich201198@gmail.com ",Object(c.jsx)("br",{}),"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: +79032539925"]})]})})})}),k=(s(37),function(e){return console.log(e.ref),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"about",ref:e.oneRef,children:[Object(c.jsx)("div",{className:"about__title",children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),Object(c.jsx)("div",{className:"about__description",children:"\u042f \u0438\u0449\u0443 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0431\u0443\u0434\u0443 \u0432\u0441\u0435\u0446\u0435\u043b\u043e \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u0442\u044c\u0441\u044f \u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438. \u041e\u0431\u043b\u0430\u0434\u0430\u044e \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 HTML, CSS, JavaScript(ES5, ES6 \u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0435), ReactJS(Hooks), Git/GitHub, jQuery, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0442\u0437\u044b\u0432\u0447\u0438\u0432\u043e\u0439 \u043a\u0440\u043e\u0441\u0441\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0442\u043a\u0438, Figma, Adobe Photoshop, \u0432\u0435\u0440\u0441\u0442\u043a\u0430 \u043f\u043e psd \u043c\u0430\u043a\u0435\u0442\u0430\u043c, \u0437\u043d\u0430\u043a\u043e\u043c \u0441 Bootstrap, Sass, Webpack, NodeJS, Gulp, ReactNative.\u041e\u0431\u043b\u0430\u0434\u0430\u044e \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 \u041e\u041e\u041f. \u0423\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c MS Office.\u0425\u043e\u0442\u0435\u043b \u0431\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, \u0443\u043b\u0443\u0447\u0448\u0430\u044f \u0441\u0432\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438, \u043f\u043e\u043b\u0443\u0447\u0430\u044f \u043e\u043f\u044b\u0442 \u0432 \u0440\u0435\u0448\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447 \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044f\u0441\u044c \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438."})]})})}),O=(s(38),s(39),function(e){var t=e.projects;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("a",{href:t.html_url,className:"project-block",children:[Object(c.jsx)("a",{className:"project-block__title",children:t.name.split("-").join(" ")}),Object(c.jsx)("img",{src:"/img/project-imgs/".concat(t.name,".png"),className:"project-img",style:t.has_pages&&"Andrew-game"!==t.name?{visibility:"visible"}:{visibility:"hidden"}}),Object(c.jsx)("img",{className:"project-img-alternate",src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"})]},t.id)})}),w=function(e){var t=e.projects.sort((function(e,t){return t.id-e.id}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"main__head",children:[Object(c.jsx)("div",{className:"projects-title",children:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"}),Object(c.jsx)("div",{className:"projects",children:t.map((function(e){return Object(c.jsx)(O,{projects:e})}))})]})})},B=function(e){var t=Object(i.useState)("visible"),s=Object(b.a)(t,2),n=s[0],a=s[1];Object(i.useEffect)((function(){var e=document.querySelector(".main__head");setTimeout((function(){return e.classList.add("transition")}),1),a("visible"),console.log("rend")}),[e.headtitle]);var r=Object(i.useRef)(null),l=Object(i.useRef)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"main",children:["Home"===e.headtitle&&Object(c.jsxs)("div",{className:"main__view",children:[Object(c.jsxs)("div",{className:"main__head",children:[Object(c.jsx)("div",{className:"main__title",children:"Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"}),Object(c.jsxs)("div",{className:"main__high-area",children:[Object(c.jsxs)("div",{className:"logo",children:[Object(c.jsxs)("div",{className:"main__logo",ref:l,children:[Object(c.jsx)("img",{className:"telegram",src:h}),Object(c.jsx)("img",{className:"whatsapp",src:"data:image/png;base64,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"})]}),Object(c.jsx)("img",{className:"main__img",onMouseOver:function(){return l.current.classList.add("hover")},onMouseLeave:function(){return l.current.classList.remove("hover")},src:u})]}),Object(c.jsxs)("div",{className:"main__description",children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435!",Object(c.jsx)("br",{}),"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041d\u0438\u043a\u0438\u0442\u0430, \u044f frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a. \u0418\u0449\u0443 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043c\u043e\u0433\u0443 \u0432\u0441\u0435\u0446\u0435\u043b\u043e \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u0442\u044c\u0441\u044f \u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442."]})]}),Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("div",{className:"skills-title",children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438"}),Object(c.jsxs)("div",{className:"skills-items",children:[Object(c.jsx)("div",{className:"skills__item",title:"HTML",children:Object(c.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/919/919827.png"})}),Object(c.jsx)("div",{className:"skills__item",title:"CSS",children:Object(c.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png"})}),Object(c.jsx)("div",{className:"skills__item",title:"Sass/SCSS",children:Object(c.jsx)("img",{src:"https://cdn.worldvectorlogo.com/logos/sass-1.svg",style:{background:"radial-gradient(circle, rgba(255,255,255,0.7) 20%, rgba(0,0,0,0) 70%)"}})}),Object(c.jsx)("div",{className:"skills__item",title:"JavaScript",children:Object(c.jsx)("img",{src:"https://png.pngtree.com/svg/20170719/javascript_633988.png"})}),Object(c.jsx)("div",{className:"skills__item",title:"React",children:Object(c.jsx)("img",{src:"https://oneteamsolutions.in/blogoneteam/wp-content/uploads/2020/05/REACT-JS-KOCHI.png",style:{height:"80px",width:"80px"}})}),Object(c.jsx)("div",{className:"skills__item",title:"Redux",children:Object(c.jsx)("img",{src:"https://react-etc.net/files/2018-03/redux-harmful.png",style:{height:"80px",width:"80px"}})}),Object(c.jsx)("div",{className:"skills__item",title:"jQuery",children:Object(c.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png"})}),Object(c.jsx)("div",{className:"skills__item",title:"Git/GitHub",children:Object(c.jsx)("img",{src:"https://i.pinimg.com/originals/43/4d/cf/434dcfe1acd79af48ddfc35292c31de5.png",style:{height:"60px",width:"60px"}})}),Object(c.jsx)("div",{className:"skills__item",title:"Webpack",children:Object(c.jsx)("img",{src:"https://media.proglib.io/wp-uploads/2017/05/webpck.png",style:{width:"120px"}})}),Object(c.jsx)("div",{className:"skills__item",title:"Gulp",children:Object(c.jsx)("img",{src:"https://img.icons8.com/windows/452/gulp.png"})}),Object(c.jsx)("div",{className:"skills__item",title:"Figma",children:Object(c.jsx)("img",{src:"https://miro.medium.com/max/670/0*UTBrDcrJ6SbePBzR",alt:"Figma",style:{width:"60px",height:"60px"}})}),Object(c.jsx)("div",{className:"skills__item",children:Object(c.jsx)("img",{src:"https://pngimg.com/uploads/photoshop/photoshop_PNG64.png",style:{width:"130px",height:"60px"}})})]})]})]}),Object(c.jsx)("div",{className:"main__arrow",children:Object(c.jsx)("div",{className:"arrow",style:{visibility:n},onClick:function(){a("hidden"),r.current.scrollIntoView({behavior:"smooth"})}})}),Object(c.jsx)(k,{oneRef:r})]}),"Projects"===e.headtitle&&Object(c.jsx)(w,{projects:e.projects}),"Contacts"===e.headtitle&&Object(c.jsx)(v,{})]})})},I=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).fetchData=new f,e.state={headtitle:"Home",projects:[]},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.updateProjects()}},{key:"changeHeadtitle",value:function(e){this.setState({headtitle:e})}},{key:"updateProjects",value:function(){var e=this;this.fetchData.getProj().then((function(t){e.setState({projects:t.map((function(e){return e}))})}))}},{key:"render",value:function(){return console.log(this.state.projects),Object(c.jsx)(g.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{changeHeadtitle:this.changeHeadtitle.bind(this)}),Object(c.jsx)(B,{headtitle:this.state.headtitle,projects:this.state.projects,changeHeadtitle:this.changeHeadtitle.bind(this)})]})})}}]),s}(n.a.Component),N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),N()}},[[40,1,2]]]);
//# sourceMappingURL=main.a4f15677.chunk.js.map