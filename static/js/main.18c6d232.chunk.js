(window.webpackJsonpVK_GLAVCLUB=window.webpackJsonpVK_GLAVCLUB||[]).push([[0],{175:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);n(97),n(123),n(125),n(126),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165);var a=n(0),c=n.n(a),o=n(60),r=n.n(o),i=n(25),l=n.n(i),s=n(61),u=n.n(s),f=n(89),d=n(41),p=n(95),b=n.n(p),m=n(94),h=n.n(m),w=(n(174),n(90)),g=n.n(w),v=n(91),E=n.n(v),j=n(92),A=n.n(j),O=n(93),V=n.n(O),k=(n(175),function(e){var t=e.id,n=(e.go,e.fetchedUser,e.notificationSwitch),a=e.notificationEnabled;return c.a.createElement(g.a,{id:t},c.a.createElement(E.a,null,c.a.createElement(A.a,{asideContent:c.a.createElement(V.a,{onClick:function(e){return n(a)},defaultChecked:a})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0445 \u043a\u043e\u043d\u0446\u0435\u0440\u0442\u043e\u0432 / \u0430\u043a\u0446\u0438\u044f\u0445")),c.a.createElement("iframe",{webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:"true",allow:"geolocation; microphone; camera; autoplay;",frameBorder:"0",src:"https://vk2feed.cultserv.ru/?refcode=glavclub",scrolling:"no"}))}),K=function(){var e=Object(a.useState)("home"),t=Object(d.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(null),i=Object(d.a)(r,2),s=i[0],p=i[1],m=Object(a.useState)(!1),w=Object(d.a)(m,2),g=w[0],v=w[1],E=Object(a.useState)(c.a.createElement(h.a,{size:"large"})),j=Object(d.a)(E,2),A=(j[0],j[1]),O=window.location.href,V=new URL(O).searchParams.get("vk_are_notifications_enabled");Object(a.useEffect)((function(){function e(){return(e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,console.log(t),p(t),A(null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),+V||l.a.send("VKWebAppAllowNotifications",{}),function(){e.apply(this,arguments)}()}),[]);return s&&s.id&&fetch("https://glavclub.com/vk/KwgG259rqFt9gdDNpj8f/"+s.id).then((function(e){return e.json()})).then((function(e){console.log(e)})),c.a.createElement(b.a,{activePanel:n},c.a.createElement(k,{id:"home",fetchedUser:s,go:function(e){o(e.currentTarget.dataset.to)},notificationEnabled:!!V&&+V,notificationSwitch:function(){v(!g),g?l.a.send("VKWebAppAllowNotifications",{}):l.a.send("VKWebAppDenyNotifications",{})}}))};l.a.send("VKWebAppInit"),r.a.render(c.a.createElement(K,null),document.getElementById("root"))},96:function(e,t,n){e.exports=n(202)}},[[96,1,2]]]);
//# sourceMappingURL=main.18c6d232.chunk.js.map