webpackJsonp([3],{16:function(e,t,n){"use strict";function r(e){n(21)}function o(){return new v.a.Store({state:function(){return{firstName:"Simon",lastName:"Nomis"}},modules:{users:w}})}function a(){return new y.a({mode:"history",fallback:!1,scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/home",component:I},{path:"/about",component:T},{path:"/",redirect:"/home"}]})}function u(e){var t=e.$options.title;if(t)return"function"==typeof t?t.call(e):t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=(n(19),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)}),c=[],f={render:s,staticRenderFns:c},l=f,m=n(12),p=r,d=m(null,l,!1,p,null,null),h=d.exports,v=n(14),S={usersCountStr:function(e){var t=e.users?e.users[e.users.length-1]:null;return t?"Current user is "+t.name:"Loading..."}},R=n(23),_=n.n(R),E={fetchData:function(e){var t=e.commit;return _.a.get("https://jsonplaceholder.typicode.com/users").then(function(e){var n=e.data.map(function(e){return{email:e.email,id:e.id,name:e.name,phone:e.phone,username:e.username,website:e.website}});t("USERS_LOADED",n)},function(e){console.log(e),t("USERS_ERROR")})},changeUserNameInGetter:function(e){(0,e.commit)("REVERSE_USERS_LIST")}},g={USERS_LOADED:function(e,t){e.error=!1,e.users=t},USERS_ERROR:function(e){e.error=!0,e.users=void 0},REVERSE_USERS_LIST:function(e){e.users.reverse()}},b={users:[],error:!1},w={namespaced:!0,state:b,getters:S,actions:E,mutations:g};i.a.use(v.a);var y=n(40);i.a.use(y.a);var I=function(){return n.e(0).then(n.bind(null,51))},T=function(){return n.e(1).then(n.bind(null,53))},U=n(41),D={mounted:function(){var e=u(this);e&&(document.title="Vue SSR+TS App | "+e)}},A=D;n(15).a.registerHooks(["asyncData","beforeRouteUpdate"]),i.a.mixin(A),i.a.mixin({beforeRouteUpdate:function(e,t,n){var r=this.$options.asyncData;r?r({store:this.$store,route:e}).then(n).catch(n):n()}});var L=function(){var e=o(),t=a();return Object(U.sync)(e,t),{app:new i.a({router:t,store:e,render:function(e){return e(h)}}),router:t,store:e}}(),k=L.app,N=L.router,O=L.store;window.__INITIAL_STATE__&&O.replaceState(window.__INITIAL_STATE__),N.onReady(function(){N.beforeResolve(function(e,t,n){var r=N.getMatchedComponents(e),o=N.getMatchedComponents(t),a=!1,u=r.filter(function(e,t){return a||(a=o[t]!==e)}),i=u.map(function(e){return e.asyncData}).filter(function(e){return e});if(!i.length)return n();Promise.all(i.map(function(t){return t({store:O,route:e})})).then(function(){n()}).catch(n)}),k.$mount("#app")}),"https:"===location.protocol&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},21:function(e,t){}},[16]);