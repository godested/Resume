(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[1],[,,,,function(e,n,t){e.exports={Typography:"f872c","Typography--heading":"c6515","Typography--subheading":"_8f3eb","Typography--title":"b1574","Typography--subtitle":"_61e67","Typography--body":"fe71c","Typography--caption":"_90430","Typography--tip":"_2997a","Typography--color-black":"ac36c","Typography--color-white":"_6c707","Typography--color-primary":"_511ce","Typography--color-secondary":"d5b2d","Typography--color-inherit":"c57d3","Typography--align-left":"_167c0","Typography--align-center":"_879a3","Typography--align-right":"cef39","Typography--marginBottom-xs":"f233d","Typography--marginBottom-sm":"da122","Typography--marginBottom-md":"_6986d","Typography--marginBottom-lg":"e9d23","Typography--marginBottom-xl":"_882da","Typography--weight-regular":"c655d","Typography--weight-medium":"d98c6","Typography--weight-bold":"_82cd4","Typography--inline":"d1fed","Typography--font-primary":"_6d909","Typography--font-secondary":"_758f3","Typography--uppercase":"_12cf1","Typography--italic":"a3c95","Typography--underline":"_57298"}},,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),c=t(10),i=t(36),l=t.n(i);function u(e){var n=e.children;return o.a.createElement("main",{className:l.a.Layout},n)}var p=t(25),s=t(8),m=t(9);function h(e){var n=e.component,t=e.exact,a=Object(m.a)(e,["component","exact"]);return o.a.createElement(s.a,Object.assign({component:n,exact:t},a))}var d=t(27),f=t(31),g=t(28),y=t(29),v=t(21),b=t.n(v);function T(){return o.a.createElement(d.a,{title:"404"},o.a.createElement("section",{className:b.a.Section},o.a.createElement(y.a,null,o.a.createElement(g.a,{align:"center",className:b.a.Title,component:"h2"},o.a.createElement(f.a,null,"404")))))}var w=t(30),E=t(41),O=t(40),j=t.n(O);function x(){return o.a.createElement("div",{className:j.a.ProgressBar})}function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var k={HOME:{path:"/",exact:!0,component:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(E.a)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(t,!0).forEach((function(n){Object(w.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({fallback:o.a.createElement(x,null)},n))}((function(){return Promise.all([t.e(4),t.e(0)]).then(t.bind(null,69))}))}},S=Object.values(k);function N(){return o.a.createElement(s.c,null,S.map((function(e){return o.a.createElement(h,{key:e.path,exact:e.exact,path:e.path,component:e.component})})),o.a.createElement(h,{component:T}))}t(54),t(55);function P(){return o.a.createElement(c.b,null,o.a.createElement(c.a,{defaultTitle:"Zaitsev Ilya",titleTemplate:"%s | Zaitsev"}),o.a.createElement(r.a,null,o.a.createElement(p.a,null,o.a.createElement(u,null,o.a.createElement(N,null)))))}t.d(n,"App",(function(){return P}))},,,function(e){e.exports=JSON.parse('{"firstname":"Ilya","lastname":"Zaitsev","avatar":"","age":21,"location":"","profession":"Frontend Developer","contacts":[{"name":"Phone","type":"phone","value":"380684006684"},{"name":"LinkedIn","type":"link","value":"https://www.linkedin.com/in/godested/"},{"name":"GitHub","type":"link","value":"https://www.github.com/godested/"},{"name":"Email","type":"email","value":"godested@gmail.com"}],"skills":[{"name":"HTML","icon":""},{"name":"CSS","icon":""},{"name":"JavaScript","icon":""},{"name":"TypeScript","icon":""},{"name":"React","icon":""},{"name":"Redux","icon":""},{"name":"Sass","icon":""},{"name":"Node","icon":""},{"name":"REST","icon":""}],"tools":[{"name":"Webpack","icon":""},{"name":"Gulp","icon":""},{"name":"Babel","icon":""},{"name":"ESLint","icon":""},{"name":"Git","icon":""},{"name":"Jst","icon":""},{"name":"Bash","icon":""}],"experience":[{"name":"Genesis","fromDate":"2019-03","toDate":null},{"name":"Skywell Software","fromDate":"2018-10","toDate":"2019-03"}],"education":[{"name":"Hillel IT School. Frontend Basic","fromDate":"2017-06","toDate":"2017-08","labels":["Excellent"]},{"name":"Skywell Software","fromDate":"2018-10","toDate":"2019-03"}],"bestProjects":[{"name":"Bananame.club","description":"","tools":[{"name":"React","icon":""},{"name":"Redux","icon":""},{"name":"Redux-saga","icon":""}],"fromDate":"2019-03","toDate":"2019-07","position":"Lead Frontend Developer"}]}')},,,function(e,n,t){e.exports={Section:"cad99",Title:"a4c97"}},,,,function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return l}));var a=t(0),o=t.n(a),r=t(18),c=Object(a.createContext)(r);function i(e){var n=e.children;return o.a.createElement(c.Provider,{value:r},n)}function l(e){var n=Object(a.useContext)(c);return e?e(n):n}},,function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),o=t.n(a),r=t(10);function c(e){var n=e.title,t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null,o.a.createElement("title",null,n)),t)}},function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(9),o=t(0),r=t.n(o),c=t(13),i=t.n(c),l=t(4),u=t.n(l),p={heading:"h2",subheading:"h3",title:"h4",subtitle:"h5",caption:"h6",tip:"span",body:"p",base:"span"};function s(e){var n=e.font,t=void 0===n?"primary":n,o=e.variant,c=void 0===o?"body":o,l=e.component,s=void 0===l?p[c]||"span":l,m=e.color,h=void 0===m?"white":m,d=e.marginBottom,f=e.noWrap,g=e.align,y=e.weight,v=e.className,b=e.inline,T=e.uppercase,w=e.italic,E=e.underline,O=e.children,j=Object(a.a)(e,["font","variant","component","color","marginBottom","noWrap","align","weight","className","inline","uppercase","italic","underline","children"]),x=i()(u.a.Typography,u.a["Typography--".concat(c)],u.a["Typography--color-".concat(h)],u.a["Typography--align-".concat(g)],u.a["Typography--marginBottom-".concat(d)],u.a["Typography--weight-".concat(y)],u.a["Typography--font-".concat(t)],T&&u.a["Typography--uppercase"],w&&u.a["Typography--italic"],f&&u.a["Typography--noWrap"],b&&u.a["Typography--inline"],E&&u.a["Typography--underline"],v);return r.a.createElement(s,Object.assign({className:x},j),O)}},function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(9),o=t(0),r=t.n(o),c=t(13),i=t.n(c),l=t(39),u=t.n(l);function p(e){var n=e.component,t=void 0===n?"div":n,o=e.children,c=e.className,l=Object(a.a)(e,["component","children","className"]);return r.a.createElement(t,Object.assign({className:i()(u.a.Wrapper,c)},l),o)}},,function(e,n,t){"use strict";var a=t(22),o=t(23),r=t(0),c=t.n(r),i=function(e,n){return Math.floor(Math.random()*(n-e))+e},l=function(){return String.fromCharCode(Math.floor(26*Math.random())+97)};var u=t(38),p=t.n(u);function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.min,c=void 0===t?80:t,u=n.max,p=void 0===u?120:u,s=n.duration,m=void 0===s?20:s,h=Object(r.useState)(e.split("")),d=Object(o.a)(h,2),f=d[0],g=d[1],y=Object(r.useRef)(Object(a.a)(f));return Object(r.useEffect)((function(){var e=Object(a.a)(f);return function(e,n){var t=!1;return function a(){var o=i(n.min,n.max);setTimeout((function(){e(),t||a()}),o)}(),{clear:function(){t=!0}}}((function(){var n=i(0,f.length-1),t=l();y.current=y.current.map((function(e,a){return a===n?t:e})),g(y.current),setTimeout((function(){y.current=y.current.map((function(t,a){return a===n?e[a]:t})),g(y.current.map((function(t,a){return a===n?e[a]:t})))}),m)}),{min:c,max:p}).clear}),[]),f}function m(e){var n=s(e.children,{min:e.min,max:e.max,duration:e.duration});return c.a.createElement(c.a.Fragment,null,n.map((function(e,n){return c.a.createElement("span",{className:p.a.Glitch,key:n,"data-text":e},e)})))}t.d(n,"a",(function(){return m}))},function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function r(e){if("serviceWorker"in navigator){if(new URL("https://godested.github.io/resume",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("https://godested.github.io/resume","/service-worker.js");a?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(n,e)}))}}},function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a="production"!==Object({NODE_ENV:"production",PUBLIC_URL:"https://godested.github.io/resume"}).REACT_APP_NODE_ENV},,,function(e,n,t){e.exports={Layout:"_74671"}},,function(e,n,t){e.exports={Glitch:"_3fab5","glitch-2":"ec3b8","glitch-1":"_35903"}},function(e,n,t){e.exports={Wrapper:"f376c"}},function(e,n,t){e.exports={ProgressBar:"_6b1b3","fade-in":"_440cc",loading:"_6e94e"}},,function(e,n,t){e.exports=t(43)},function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),a=t.n(n),o=t(16),r=t(32),c=t(33),i=t(15),l=document.getElementById("root");Object(o.render)(a.a.createElement(i.App,null),l),r.a(),c.a&&e.hot&&e.hot.accept("./App",(function(){var e=t(15).App;Object(o.render)(a.a.createElement(e,null),l)}))}.call(this,t(44)(e))},,,,,,,,,,,,function(e,n,t){}],[[42,2,3]],[4,0]]);
//# sourceMappingURL=main.42913ef3.chunk.js.map