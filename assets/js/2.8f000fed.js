(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(172).concat([function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"i",function(){return r}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"k",function(){return f}),n.d(e,"l",function(){return d}),n.d(e,"c",function(){return g}),n.d(e,"j",function(){return v});const i=/#.*$/,s=/\.(md|html)$/,a=/\/$/,r=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function c(t){return r.test(t)}function u(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function h(t){if(c(t))return t;const e=t.match(i),n=e?e[0]:"",s=o(t);return a.test(s)?t:s+".html"+n}function p(t,e){const n=t.hash,s=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function f(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:s,themeConfig:a}=n,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=r.sidebar||a.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,i,s=1){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});{s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,i,s+1)),collapsable:!1!==e.collapsable}}})(e,s,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},function(t,e,n){"use strict";var i=n(12),s=n(93)(3);i(i.P+i.F*!n(59)([].some,!0),"Array",{some:function(t){return s(this,t,arguments[1])}})},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){t.exports=n(201)},function(t,e,n){"use strict";var i=n(12),s=n(93)(1);i(i.P+i.F*!n(59)([].map,!0),"Array",{map:function(t){return s(this,t,arguments[1])}})},function(t,e,n){"use strict";n.r(e);n(173);var i=n(172),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(191).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(190).default},methods:{isActive:i.e}},a=(n(218),n(3)),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null);r.options.__file="SidebarGroup.vue";var o=r.exports;n(189);function c(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function u(t,e,n,s,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var o=Object(i.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[c(t,n+"#"+e.slug,e.title,o),u(t,e.children,n,s,a,r+1)])}))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,s=n.$page,a=(n.$site,n.$route),r=n.$themeConfig,o=n.$themeLocaleConfig,l=e.props,h=l.item,p=l.sidebarDepth,f=Object(i.e)(a,h.path),d="auto"===h.type?f||h.children.some(function(t){return Object(i.e)(a,h.basePath+"#"+t.slug)}):f,g=c(t,h.path,h.title||h.path,d),v=s.frontmatter.sidebarDepth||p||o.sidebarDepth||r.sidebarDepth,m=null==v?1:v,b=o.displayAllHeaders||r.displayAllHeaders;return"auto"===h.type?[g,u(t,h.children,h.basePath,a,m)]:(d||b)&&h.headers&&!i.d.test(h.path)?[g,u(t,Object(i.c)(h.headers),h.path,a,m)]:g}},h=(n(219),Object(a.a)(l,void 0,void 0,!1,null,null,null));h.options.__file="SidebarLink.vue";var p={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:h.exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var s=e[n];if("group"===s.type&&s.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},f=Object(a.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);f.options.__file="SidebarLinks.vue";e.default=f.exports},function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(213),n(3)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);a.options.__file="DropdownTransition.vue";e.a=a.exports},function(t,e,n){"use strict";n(193)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){var i=n(12),s=n(15),a=n(19),r=/"/g,o=function(t,e,n,i){var s=String(a(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";var i=n(174);n.n(i).a},function(t,e,n){t.exports=n(196)},function(t,e,n){n(197),t.exports=n(0).parseInt},function(t,e,n){var i=n(13),s=n(198);i(i.G+i.F*(parseInt!=s),{parseInt:s})},function(t,e,n){var i=n(5).parseInt,s=n(199).trim,a=n(187),r=/^[-+]?0[xX]/;t.exports=8!==i(a+"08")||22!==i(a+"0x16")?function(t,e){var n=s(String(t),3);return i(n,e>>>0||(r.test(n)?16:10))}:i},function(t,e,n){var i=n(13),s=n(38),a=n(18),r=n(187),o="["+r+"]",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),l=function(t,e,n){var s={},o=a(function(){return!!r[t]()||"​"!="​"[t]()}),c=s[t]=o?e(h):r[t];n&&(s[n]=c),i(i.P+i.F*o,"String",s)},h=l.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},function(t,e,n){"use strict";var i=n(12),s=n(93)(2);i(i.P+i.F*!n(59)([].filter,!0),"Array",{filter:function(t){return s(this,t,arguments[1])}})},function(t,e,n){n(202),t.exports=n(0).Object.assign},function(t,e,n){var i=n(13);i(i.S+i.F,"Object",{assign:n(203)})},function(t,e,n){"use strict";var i=n(27),s=n(63),a=n(39),r=n(37),o=n(101),c=Object.assign;t.exports=!c||n(18)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=i})?function(t,e){for(var n=r(t),c=arguments.length,u=1,l=s.f,h=a.f;c>u;)for(var p,f=o(arguments[u++]),d=l?i(f).concat(l(f)):i(f),g=d.length,v=0;g>v;)h.call(f,p=d[v++])&&(n[p]=f[p]);return n}:c},function(t,e,n){"use strict";var i=n(175);n.n(i).a},function(t,e,n){"use strict";var i=n(176);n.n(i).a},function(t,e,n){var i=n(7),s=n(207),a=n(35).f,r=n(211).f,o=n(99),c=n(98),u=i.RegExp,l=u,h=u.prototype,p=/a/g,f=/a/g,d=new u(p)!==p;if(n(24)&&(!d||n(15)(function(){return f[n(2)("match")]=!1,u(p)!=p||u(f)==f||"/a/i"!=u(p,"i")}))){u=function(t,e){var n=this instanceof u,i=o(t),a=void 0===e;return!n&&i&&t.constructor===u&&a?t:s(d?new l(i&&!a?t.source:t,e):l((i=t instanceof u)?t.source:t,i&&a?c.call(t):e),n?this:h,u)};for(var g=function(t){t in u||a(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=r(l),m=0;v.length>m;)g(v[m++]);h.constructor=u,u.prototype=h,n(25)(i,"RegExp",u)}n(212)("RegExp")},function(t,e,n){var i=n(14),s=n(208).set;t.exports=function(t,e,n){var a,r=e.constructor;return r!==n&&"function"==typeof r&&(a=r.prototype)!==n.prototype&&i(a)&&s&&s(t,a),t}},function(t,e,n){var i=n(14),s=n(4),a=function(t,e){if(s(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=n(61)(Function.call,n(209).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:a}},function(t,e,n){var i=n(210),s=n(60),a=n(36),r=n(97),o=n(26),c=n(96),u=Object.getOwnPropertyDescriptor;e.f=n(24)?u:function(t,e){if(t=a(t),e=r(e,!0),c)try{return u(t,e)}catch(t){}if(o(t,e))return s(!i.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var i=n(102),s=n(62).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},function(t,e,n){"use strict";var i=n(7),s=n(35),a=n(24),r=n(2)("species");t.exports=function(t){var e=i[t];a&&e&&!e[r]&&s.f(e,r,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var i=n(177);n.n(i).a},function(t,e,n){"use strict";var i=n(178);n.n(i).a},function(t,e,n){"use strict";var i=n(179);n.n(i).a},function(t,e,n){"use strict";var i=n(180);n.n(i).a},function(t,e,n){"use strict";var i=n(181);n.n(i).a},function(t,e,n){"use strict";var i=n(182);n.n(i).a},function(t,e,n){"use strict";var i=n(183);n.n(i).a},function(t,e,n){"use strict";var i=n(184);n.n(i).a},function(t,e,n){"use strict";var i=n(185);n.n(i).a},,function(t,e,n){"use strict";n.r(e);var i=n(30),s=n.n(i),a=(n(173),n(192),n(172)),r={props:{item:{required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?s()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:a.f,isMailto:a.g,isTel:a.h}},o=n(3),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);c.options.__file="NavLink.vue";var u=c.exports,l={components:{NavLink:u},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},h=(n(194),Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));h.options.__file="Home.vue";var p=h.exports,f=n(195),d=n.n(f),g=(n(94),n(200),n(82)),v=n.n(g),m=n(188),b=n.n(m),_=(n(100),n(103),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=5);a++){var r=e[a];if(this.getPageLocalePath(r)===n&&this.isSearchable(r))if(i(r))s.push(r);else if(r.headers)for(var o=0;o<r.headers.length&&!(s.length>=5);o++){var c=r.headers[o];i(c)&&s.push(b()({},r,{path:r.path+"#"+c.slug,header:c}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=v()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),k=(n(204),Object(o.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null));k.options.__file="SearchBox.vue";var x=k.exports,$=(n(205),Object(o.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));$.options.__file="SidebarButton.vue";var C=$.exports,w=(n(206),n(86)),y=(n(95),n(189),{components:{NavLink:u,DropdownTransition:n(191).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),L=(n(214),Object(o.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null));L.options.__file="DropdownLink.vue";var S={components:{NavLink:u,DropdownLink:L.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&s()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:s()(e).map(function(s){var r,o=e[s],c=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===r})||(r=s)),{text:c,link:r}})};return Object(w.a)(this.userNav).concat([r])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return b()(Object(a.j)(t),{items:(t.items||[]).map(a.j)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},O=(n(215),Object(o.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));O.options.__file="NavLinks.vue";var j=O.exports;function I(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var E={components:{SidebarButton:C,NavLinks:j,SearchBox:x,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=d()(I(this.$el,"paddingLeft"))+d()(I(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},T=(n(216),Object(o.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));T.options.__file="Navbar.vue";var D=T.exports;function N(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[s+n]}}var P={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(a.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,N(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(a.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,N(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,a=t.docsBranch,r=void 0===a?"master":a,o=t.docsRepo,c=void 0===o?e:o;return c&&n&&this.$page.relativePath?this.createEditLink(e,c,s,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(a.i.test(e)?e:t).replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+s}}},A=(n(217),Object(o.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));A.options.__file="Page.vue";var U=A.exports,H={name:"Sidebar",components:{SidebarLinks:n(190).default,NavLinks:j},props:["items"]},G=(n(220),Object(o.a)(H,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null));G.options.__file="Sidebar.vue";var W={components:{Home:p,Page:U,Sidebar:G.exports,Navbar:D},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(a.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},B=(n(221),Object(o.a)(W,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));B.options.__file="Layout.vue";e.default=B.exports}])]);