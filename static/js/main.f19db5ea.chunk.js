(window["webpackJsonpcodefordenver.org"]=window["webpackJsonpcodefordenver.org"]||[]).push([[0],{196:function(e,t,a){e.exports=a(353)},352:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(45),o=a.n(l),c=a(28),i=a(22),m=a(39),s=a(363),u=a(371),d=a(364),E=a(374),p=a(369),h=a(368),g=a(40);function v(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a.Item,{as:i.NavLink,exact:!0,to:ie.HOME,position:"right",activeClassName:"active",className:"navItem",onClick:e.hideSidebar},"Home"),r.a.createElement(p.a.Item,{as:i.NavLink,exact:!0,to:ie.ABOUT,activeClassName:"active",className:"navItem",onClick:e.hideSidebar},"About"),r.a.createElement(p.a.Item,{as:i.NavLink,exact:!0,to:ie.VOLUNTEER,activeClassName:"active",className:"navItem",onClick:e.hideSidebar},"Volunteer"),r.a.createElement(p.a.Item,{className:"navItem"},r.a.createElement(h.a,{as:"a",href:me.OPEN_COLLECTIVE,circular:!0,basic:!0,color:"red",size:"mini",onClick:e.hideSidebar},r.a.createElement("strong",null,"Donate"))))}var b=a(370);function f(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Pushable,null,r.a.createElement(b.a,{as:p.a,animation:"overlay",icon:"labeled",vertical:!0,visible:e.visible,onHide:e.hideSidebar,direction:"right"},r.a.createElement(v,{hideSidebar:e.hideSidebar})),r.a.createElement(b.a.Pusher,null,e.children)))}function y(e){var t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],l=a[1],o=function(e){l(!1),null!==e&&e.stopPropagation()},m=n?"arrow right":"bars";return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{minWidth:768},r.a.createElement(p.a,{pointing:!0,stackable:!0,secondary:!0,className:"bg-white navHeader"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("img",{className:"navLogo",alt:"Code for Denver Logo",src:"/images/logos/Horizontal Logo_red.png"})),r.a.createElement(v,{hideSidebar:o})),e.children),r.a.createElement(E.a,{maxWidth:767},r.a.createElement(p.a,{pointing:!0,secondary:!0,className:"bg-white navHeader"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("img",{className:"navLogo",alt:"Code for Denver Logo",src:"/images/logos/Horizontal Logo_red.png"})),r.a.createElement(p.a.Item,{as:h.a,position:"right",onClick:function(){return l(!n)}},r.a.createElement(g.a,{name:m}))),r.a.createElement(f,{visible:n,hideSidebar:o},e.children)))}var w=a(372),O=a(366),k=a(373),C=a(87);function T(e){return r.a.createElement(O.a.Item,{as:C.HashLink,to:e.to,scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})}},e.text)}function j(e){var t={color:"white",opacity:.9};return r.a.createElement(u.a,{inverted:!0,vertical:!0,style:{padding:"2em"}},r.a.createElement(w.a,{divided:!0,inverted:!0,stackable:!0,style:{margin:"0 1em"}},r.a.createElement(w.a.Row,{columns:"equal"},r.a.createElement(w.a.Column,{width:6},r.a.createElement("p",null,"We meet on most Monday nights. Join us, everyone is welcome!"),r.a.createElement("p",null,"RSVP on our"," ",r.a.createElement("a",{style:{color:"#E14E54",opacity:.9,textDecoration:"underline"},href:me.MEETUP},"Meetup")," ","page to see the full schedule of events and to let us know you\u2019re coming."),r.a.createElement("a",{style:t,href:me.MEETUP},r.a.createElement(g.a,{size:"large",name:"meetup"})),r.a.createElement("a",{style:t,href:me.GITHUB},r.a.createElement(g.a,{size:"large",name:"github"})),r.a.createElement("a",{style:t,href:me.FACEBOOK},r.a.createElement(g.a,{size:"large",name:"facebook"}))),r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{inverted:!0,as:"h4",content:"Home"}),r.a.createElement(O.a,{link:!0,inverted:!0},r.a.createElement(T,{to:ie.HOME_US,text:"What We Do"}),r.a.createElement(T,{to:ie.HOME_FEATURED,text:"Featured Projects"}))),r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{inverted:!0,as:"h4",content:"About"}),r.a.createElement(O.a,{link:!0,inverted:!0},r.a.createElement(T,{to:ie.ABOUT_ORGANIZATION,text:"Organization"}),r.a.createElement(T,{to:ie.ABOUT_SPONSORS,text:"Sponsors"}),r.a.createElement(T,{to:ie.ABOUT_CONTACT,text:"Contact"}))),r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{inverted:!0,as:"h4",content:"Volunteer"}),r.a.createElement(O.a,{link:!0,inverted:!0},r.a.createElement(T,{to:ie.VOLUNTEER_CULTURE,text:"Culture"}),r.a.createElement(T,{to:ie.VOLUNTEER_HOW,text:"How We Work"}),r.a.createElement(T,{to:ie.VOLUNTEER_JOIN,text:"Join"}),r.a.createElement(T,{to:ie.VOLUNTEER_FAQ,text:"FAQ"}))),r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{inverted:!0,as:"h4",content:"Resources"}),r.a.createElement(O.a,{link:!0,inverted:!0},r.a.createElement(O.a.Item,{as:"a",href:me.GITHUB},"GitHub"),r.a.createElement(O.a.Item,{as:"a",href:me.MEETUP},"Members"))))))}var A=a(187);function x(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{columns:"equal",stackable:!0,doubling:!0},r.a.createElement(w.a.Row,{style:{padding:"0em"}},r.a.createElement(w.a.Column,{width:e.columnWidth,style:{padding:"0em"}},r.a.createElement(A.a,{fluid:!0,src:"/images/denver-banner.jpg"})),r.a.createElement(w.a.Column,{verticalAlign:"middle",className:"columnTextRight"},r.a.createElement("p",null,"Code for Denver is building the next great generation of civic hackers, innovators, and disruptors here in Colorado."),r.a.createElement("p",null,"We are a Code for America Brigade community with regular meetups and other events to help bring together creative problem solvers with local community groups and government trying to address some of our most pressing 21st century problems")))))}function N(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{style:{padding:"0em"}}),r.a.createElement(u.a,{inverted:!0,vertical:!0,style:{padding:"0em"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{minWidth:1024},r.a.createElement(x,{columnWidth:8})),r.a.createElement(E.a,{maxWidth:1023},r.a.createElement(x,{columnWidth:16})))),r.a.createElement(u.a,{textAlign:"center",style:{padding:"0em"}},r.a.createElement(k.a,{style:{margin:"1em"},as:"h4",content:"Want to stay up to date on civic tech in Colorado?  Join our newsletter!"}),r.a.createElement("iframe",{style:{minWidth:"320px",minHeight:"250px",border:0},title:"Newsletter Title",src:"https://cdn.forms-content.sg-form.com/30a57480-d5c4-11e9-b817-16af1fe961e5"})))}var S=Object(n.createContext)({data:{}}),R=a(60),W=a.n(R),I=a(16),U=a.n(I);function L(e,t){var a=U()(e,"fields.link"),n=U()(e,"fields.title"),r=U()(e,"fields.shortDescription"),l=U()(e,"fields.thumbnail.sys.id"),o=t.find(function(e){return U()(e,"sys.id")===l});return{link:a,title:n,thumbnail:U()(o,"fields.file.url"),shortDescription:r}}var P=function(e){return r.a.createElement(w.a.Column,null,r.a.createElement(A.a,{src:e.thumbnail,size:"small",width:200}),r.a.createElement(k.a,{inverted:!0,as:"h4",content:e.title}),r.a.createElement(O.a,{link:!0,inverted:!0},r.a.createElement(O.a.Item,{as:"p"},e.shortDescription)))};function F(){var e=Object(n.useContext)(S);if(e){var t=W()(e,"items",[]).slice(0,3),a=W()(e,"includes.Asset",[]);return r.a.createElement(u.a,{id:"Featured",inverted:!0,vertical:!0,style:{padding:"2em"}},r.a.createElement(k.a,{as:"h2",content:"Featured Projects",style:{marginBottom:"2em"}}),r.a.createElement(w.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(w.a.Row,{columns:"equal"},t.map(function(e,t){return r.a.createElement(P,Object.assign({key:t},L(e,a)))}))))}return null}function D(e){var t={margin:"0 auto",maxWidth:"250px",padding:0},a=function(){if(null===e.show)return r.a.createElement(k.a,{as:"h3",content:"Our sponsors"})}();return r.a.createElement(u.a,{style:{margin:"0"}},r.a.createElement(w.a,{style:{padding:"5em 0"},columns:"equal",stackable:!0},a,r.a.createElement(w.a.Row,{textAlign:"center",verticalAlign:"middle",columns:3},r.a.createElement(w.a.Column,{style:{padding:0}},r.a.createElement(A.a,{as:"a",href:me.GARYCOMMUNITY,style:t,src:"/images/sponsors/sponsor-gary_community_investments-300x236.png"})),r.a.createElement(w.a.Column,{style:{padding:0}},r.a.createElement(A.a,{as:"a",href:me.GALVANIZE,style:t,src:"/images/sponsors/galvanize.png"})),r.a.createElement(w.a.Column,{style:{padding:0}},r.a.createElement(A.a,{as:"a",href:me.JETBRAINS,style:t,src:"/images/sponsors/jetbrains-variant-4-700x391.png"})))))}function _(e){return r.a.createElement(w.a,{columns:"equal",stackable:!0},r.a.createElement(w.a.Row,{id:"Us",style:{padding:"0em"}},r.a.createElement(w.a.Column,{verticalAlign:"middle",className:"columnTextLeft"},r.a.createElement(k.a,{inverted:!0,as:"h2",content:"What we do"}),r.a.createElement("p",null,"We build apps, software, and websites for non-profits, local government, and the community that serve their needs. Who we work with and what we work on are determined on project pitch nights. To stay on top of projects throughout the year, we host weekly project nights for all members, and a special onboarding new members night once a month.")),r.a.createElement(w.a.Column,{width:e.columnWidth,style:{padding:"0em"}},r.a.createElement(A.a,{src:"/images/CFD-CoffeeOnThePoint.jpg"}))))}function H(){return r.a.createElement(u.a,{inverted:!0,color:"red",vertical:!0,style:{padding:"0em",margin:"5em 0em"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{minWidth:1024},r.a.createElement(_,{columnWidth:8})),r.a.createElement(E.a,{maxWidth:1023},r.a.createElement(_,{columnWidth:16}))))}function M(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(H,null),r.a.createElement(F,null),r.a.createElement(D,null))}function z(){return r.a.createElement(w.a,{verticalAlign:"middle",columns:1,style:{margin:"0",border:"none"},className:"bg-white"},r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Column,{style:{padding:"0"}},r.a.createElement(k.a,{style:{margin:"0 2rem"},as:"h2"},"About"))),r.a.createElement(w.a.Row,{centered:!0,only:"tablet computer",style:{height:"55vh",backgroundImage:'url("'.concat("",'/images/about-banner.jpeg")'),backgroundPosition:"center",backgroundSize:"cover"}},r.a.createElement(w.a.Column,{style:{opacity:"0.9",backgroundColor:"rgba(255, 255, 255, 0.7)",width:"75vw"}},r.a.createElement(k.a,{as:"h3",style:{fontSize:"2.7rem"},textAlign:"center",color:"red"},"An intentionally inclusive community of problem solvers"))),r.a.createElement(w.a.Row,{only:"mobile",style:{backgroundColor:"black"}},r.a.createElement(w.a.Column,{style:{backgroundColor:"rgba(255, 255, 255, 0.9)"}},r.a.createElement(k.a,{as:"h1",size:"large",color:"red",textAlign:"center"},"An intentionally inclusive community of problem solvers"))))}function B(){return r.a.createElement(u.a,{style:{margin:"0",padding:"1rem 2rem"}},r.a.createElement(w.a,{stackable:!0,columns:2,className:"bg-white"},r.a.createElement(w.a.Row,{id:"Organization"},r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{as:"h3"},"Our Organization"),r.a.createElement("p",null,"We are a Code for America Brigade community with regular meetups and other events to help bring together creative problem solvers with local community groups and government trying to address some of our most pressing 21st century problems."),r.a.createElement(h.a,{circular:!0,color:"black",as:i.Link,to:ie.VOLUNTEER},"Join Us")),r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{as:"h3"},"Our Vision"),r.a.createElement("p",null,"The Denver Community will be better served by empowering local governments and nonprofits through technology."))),r.a.createElement(w.a.Row,{id:"Sponsors"},r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{as:"h3"},"Our Sponsors"),r.a.createElement("p",null,"We couldn\u2019t do any of this work without our sponsors. If you\u2019d like to learn more about how to support Code for Denver,",r.a.createElement(C.HashLink,{to:"/About#Contact",style:{color:" #E14E54"},scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"end"})}}," ","contact us"),"."),r.a.createElement(h.a,{circular:!0,color:"black",as:"a",href:me.OPEN_COLLECTIVE},"Donate")))))}var V=a(174),J=a(26),G=a.n(J),q=a(47),Q=a(367),K=a(365),Y=a(362),Z=a(88),$=a.n(Z);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach(function(t){Object(V.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function te(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(q.a)(G.a.mark(function e(t){var a,n,r,l,o;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.to,n=t.email,r=t.subject,l=t.body,"https://mmmanyfold-api.herokuapp.com/api/mail",o={to:a,from:n,subject:"Contact Form | ".concat(r," "),body:l},e.next=5,$.a.post("".concat("https://mmmanyfold-api.herokuapp.com/api/mail"),o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ne(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),i=Object(c.a)(o,2),m=i[0],s=i[1],d=Object(n.useState)(""),E=Object(c.a)(d,2),p=E[0],g=E[1],v=Object(n.useState)(!1),b=Object(c.a)(v,2),f=b[0],y=b[1],O=Object(n.useState)(!1),C=Object(c.a)(O,2),T=C[0],j=C[1],A=Object(n.useState)(!1),x=Object(c.a)(A,2),N=x[0],S=x[1],R=Object(n.useState)(!1),I=Object(c.a)(R,2),U=I[0],L=I[1],P={borderRadius:18},F={textAlign:"left"},D=function(){var e=Object(q.a)(G.a.mark(function e(t){var n,r;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={to:"hello@codefordenver.org",email:m,subject:a,body:p},t.preventDefault(),y(!0),L(!1),S(!1),e.prev=4,e.next=7,te(n);case 7:r=e.sent,200===W()(r,"status")&&(L(!0),l(""),s(""),g("")),e.next=17;break;case 11:if(e.prev=11,e.t0=e.catch(4),"Error: invalid from email"!==W()(e.t0,"response.data")){e.next=16;break}return S(!0),e.abrupt("return");case 16:j(!0);case 17:return e.prev=17,y(!1),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[4,11,17,20]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(u.a,{inverted:!0,vertical:!0,style:{padding:"2em",backgroundColor:"#E14E54"}},r.a.createElement(k.a,{as:"h1",content:"CONTACT US",style:{fontWeight:"bold",textAlign:"center"}}),r.a.createElement(w.a,{divided:!0,inverted:!0,stackable:!0,className:"segment centered",style:{backgroundColor:"#E14E54"}},r.a.createElement(w.a.Row,{id:"Contact"},r.a.createElement(Q.a,{success:!0,hidden:!U,compact:!0,header:"Thanks for reaching out! We'll be in touch soon :)"}),r.a.createElement(Q.a,{error:!0,hidden:!T,compact:!0,header:"Oh no! Looks like something went wrong.",content:"Sorry for the inconvenience. Please get in touch with hello@codefordenver.org directly."}),r.a.createElement(Q.a,{error:!0,hidden:!N,compact:!0,header:"Oh no! Looks like an invalid email was provided.",content:"Please check email and try again."})),r.a.createElement(w.a.Row,null,r.a.createElement(K.a,{loading:f,onSubmit:D},r.a.createElement(K.a.Field,null,r.a.createElement("label",{className:"white",style:F},"Name*"),r.a.createElement("input",{style:P,placeholder:"Name",required:!0,value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement(K.a.Field,null,r.a.createElement("label",{className:"white",style:F},"Email*"),r.a.createElement("input",{style:P,placeholder:"Email",value:m,type:"email",required:!0,onChange:function(e){return s(e.target.value)}})),r.a.createElement(K.a.Field,null,r.a.createElement("label",{className:"white",style:F},"Message*"),r.a.createElement(Y.a,{style:ee({},P,{resize:"none"}),maxLength:280,rows:5,value:p,cols:33,required:!0,placeholder:"Less than 280 characters please.",onChange:function(e,t){var a=t.value;return g(a)}})),r.a.createElement(h.a,{fluid:!0,style:ee({},P,{marginTop:"3em"}),inverted:!0,size:"large",disabled:![a,m,p].every(function(e){return e}),type:"submit"},"Send us a message")))))}function re(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(B,null),r.a.createElement(D,{show:!1}),r.a.createElement(ne,null))}function le(){var e={paddingRight:"2rem",paddingLeft:"2rem",margin:"1rem .5rem 0rem"},t={color:"#E14E54"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{style:{padding:"1rem 2rem"}},r.a.createElement(k.a,{as:"h2"},"Volunteer"),r.a.createElement("div",{style:{maxWidth:"640px",marginTop:"14px",marginBottom:"14px"}},r.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},r.a.createElement("iframe",{title:"Code for Denver - The 2016 Story Video",src:"https://player.vimeo.com/video/167822653?title=0&byline=0&portrait=0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},allow:"fullscreen",allowFullScreen:!0}))),r.a.createElement("script",{src:"https://player.vimeo.com/api/player.js"}),r.a.createElement(w.a,{columns:2,stackable:!0},r.a.createElement(w.a.Row,{id:"How",columns:2},r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{as:"h3"},"How we work"),r.a.createElement("p",null,"We build apps, software, and websites with non-profits, local government, and the community that serve their needs. Who we work with and what we work on are determined at project pitch nights. To stay on top of projects throughout the year, we host weekly project nights for all members, and a special onboarding new members night once a month.")),r.a.createElement(w.a.Column,{id:"Culture"},r.a.createElement(k.a,{as:"h3"},"Culture"),r.a.createElement("p",null,"Code for Denver is an intentionally inclusive community of problem solvers. We are primarily a working group, participating on projects or organizational needs each meetup. We are beginners and experts, designers and developers, and everything in between, connected by wanting to give back to our community, influence civic technology, and gather in a safe space to code, design, learn, and build."))),r.a.createElement(w.a.Row,{id:"Join",columns:2},r.a.createElement(w.a.Column,null,r.a.createElement(k.a,{as:"h3"},"Join us"),r.a.createElement("p",null,"We meet on most Monday nights. Join us, everyone is welcome!"),r.a.createElement("p",null,"RSVP on ",r.a.createElement("a",{href:me.MEETUP},"Meetup")," to see the full schedule of events and to let us know you're coming."),r.a.createElement("p",null,"Galvanize Denver \u2013 Platte",r.a.createElement("br",null),"1644 Platte St",r.a.createElement("br",null),"Denver, CO 80202",r.a.createElement("br",null),"6pm-9pm",r.a.createElement("br",null)),r.a.createElement("a",{style:{color:"black"},href:me.MEETUP},r.a.createElement(g.a,{size:"large",name:"meetup"})),r.a.createElement("a",{style:{color:"black"},href:me.GITHUB},r.a.createElement(g.a,{size:"large",name:"github"})),r.a.createElement("a",{style:{color:"black"},href:me.FACEBOOK},r.a.createElement(g.a,{size:"large",name:"facebook"})),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("a",{href:me.MEETUP},r.a.createElement(h.a,{circular:!0,color:"black",style:e},"Meetup")),r.a.createElement("a",{href:"contact"},r.a.createElement(h.a,{circular:!0,color:"black",style:e},"Contact")))),r.a.createElement(w.a.Column,null,r.a.createElement("div",{style:{maxWidth:"640px",marginTop:"14px",marginBottom:"14px"}},r.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},r.a.createElement("iframe",{title:"Code for Denver meeting location",src:"https://www.google.com/maps/embed/v1/place?key=".concat("AIzaSyAFblCiCHdwwNdm4hn-qnOdmwit7J2FAIE","&q=Galvanize+-+Denver+(Platte)"),style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},allow:"fullscreen",allowFullScreen:!0})))))),r.a.createElement(k.a,{id:"FAQ",as:"h2"},"Frequently Asked Questions"),r.a.createElement("p",{style:t},"How do you find projects?"),r.a.createElement("p",null,"We source projects in a few ways. Most of our projects come our members having a connection to a partner that needs our help, but we also take project inquiries through email, find good projects in the Code for America network, and partners showing up to our project night."),r.a.createElement("p",{style:t},"What kind of projects do you work on?"),r.a.createElement("p",null,"We focus on projects that help the community in some tangible way. We work \u201cwith\u201d not \u201cfor\u201d our partners and hope to find things that are universal and can be shared through the Code for America brigade network."),r.a.createElement("p",{style:t},"Can I get involved even if I\u2019m not a programmer or interested in programming?"),r.a.createElement("p",null,"Definitely. We do a lot of coding, but need problem solvers from all professions and viewpoints to make truly inclusive, community focused solutions. We have volunteers with backgrounds in design, marketing, sales, organizing, nonprofits, and project management. All of it is valued and useful for our mission."),r.a.createElement("p",{style:t},"Can I get involved if I\u2019m a beginner programmer or still in school?"),r.a.createElement("p",null,"Yes! We pride ourselves on being an inclusive community that will help people apply the skills they are learning. Our members have a wide range of experience levels and we love to welcome in new coders."),r.a.createElement("p",{style:t},"Where can I learn to program?"),r.a.createElement("p",null,"There are a bunch of resources to chose from, including online free and paid courses and schools or programs in the Denver area. We like to recommend some of the learn-to-code meetups in Denver too, especially the ones hosted by the Denver Public Library."),r.a.createElement("p",{style:t},"How are you connected to Code for America?"),r.a.createElement("p",null,"We are a local chapter of Code for America, so we work closely with them. But we are independent in the projects we work on, with a focus on our local community.")))}function oe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a.Item,{as:i.Link,to:"".concat(ie.PROJECTS,"/project_one")},"Example Project 1"),r.a.createElement(p.a.Item,{as:i.Link,to:"".concat(ie.PROJECTS,"/project_two")},"Example Project 2"))}function ce(e){var t=e.match;return r.a.createElement("h2",null,"This is a page for product with ID: ",t.params.name," ")}var ie,me,se=a(185);function ue(){var e=Object(se.a)("".concat("https://preview.contentful.com/spaces/27o4msepdle6/entries?access_token=DpOAFJ5_WtZofKkEmrTWKdyDGW5DP0aIESAl17Adysg")),t=Object(c.a)(e,1)[0],a=t.data,n=t.loading,l=t.error;return l?r.a.createElement(s.a,{style:{textAlign:"center"}},r.a.createElement("pre",null,l.message)):r.a.createElement(i.HashRouter,null,r.a.createElement(S.Provider,{value:a},r.a.createElement(y,null,r.a.createElement(u.a,{style:{padding:"10em 0",margin:"0",display:n?"block":"none"}},r.a.createElement(d.a,{active:n})),r.a.createElement(u.a,{style:{padding:"0",margin:"0",display:n?"none":"block"}},r.a.createElement(m.g,null,r.a.createElement(m.d,{path:"/",exact:!0,component:M}),r.a.createElement(m.d,{path:"/about",exact:!0,component:re}),r.a.createElement(m.d,{path:"/volunteer",exact:!0,component:le}),r.a.createElement(m.d,{path:"/projects",exact:!0,component:oe}),r.a.createElement(m.d,{path:"/projects/:name",component:ce}))),r.a.createElement(m.d,{component:j}))))}!function(e){e.HOME="/",e.HOME_US="/#Us",e.HOME_FEATURED="/#Featured",e.ABOUT="/about",e.ABOUT_ORGANIZATION="/about#Organization",e.ABOUT_SPONSORS="/about#Sponsors",e.ABOUT_CONTACT="/about#Contact",e.VOLUNTEER="/volunteer",e.VOLUNTEER_CULTURE="/volunteer#Culture",e.VOLUNTEER_HOW="/volunteer#How",e.VOLUNTEER_JOIN="/volunteer#Join",e.VOLUNTEER_FAQ="/volunteer#FAQ",e.PROJECTS="/projects",e.RESOURCES="",e.RESOURCES_CURRENT_PROJECTS="",e.RESOURCES_MEMBERS=""}(ie||(ie={})),function(e){e.GITHUB="https://github.com/codefordenver",e.MEETUP="https://www.meetup.com/CodeForDenver/",e.OPEN_COLLECTIVE="https://opencollective.com/codefordenver",e.FACEBOOK="https://www.facebook.com/codefordenver/",e.GALVANIZE="https://www.galvanize.com",e.GARYCOMMUNITY="https://www.garycommunity.org",e.JETBRAINS="https://www.jetbrains.com"}(me||(me={}));var de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(351),a(352);o.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[196,1,2]]]);
//# sourceMappingURL=main.f19db5ea.chunk.js.map