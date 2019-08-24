(window["webpackJsonpstar-db"]=window["webpackJsonpstar-db"]||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/11.a4248fb2.jpg"},25:function(e,t,n){e.exports=n(46)},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=n(2),l=n(5),s=n(7),u=n(6),m=n(8),p=n(9),d=(n(30),function(e){var t=e.onServiceChange;return r.a.createElement("div",{className:"header d-flex"},r.a.createElement("h3",null,r.a.createElement(p.b,{to:"/"},"StarDB")),r.a.createElement("ul",{className:"d-flex"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/people/"},"People")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/planets/"},"Planet")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/starships/"},"Starship")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/secret"},"Secret"))),r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:t},"Change Service"))}),h=n(1),f=n.n(h),g=n(4),E=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://swapi.co/api",this._imageBase="https://starwars-visualguide.com/assets/img/",this.getResource=function(){var e=Object(g.a)(f.a.mark(function e(n){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(g.a)(f.a.mark(function e(){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPerson));case 4:case"end":return e.stop()}},e)})),this.getPerson=function(){var e=Object(g.a)(f.a.mark(function e(n){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformPerson(a));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(g.a)(f.a.mark(function e(){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPlanet));case 4:case"end":return e.stop()}},e)})),this.getPlanet=function(){var e=Object(g.a)(f.a.mark(function e(n){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformPlanet(a));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(g.a)(f.a.mark(function e(){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformStarship));case 4:case"end":return e.stop()}},e)})),this.getStarship=function(){var e=Object(g.a)(f.a.mark(function e(n){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformStarship(a));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var n=e.id;return"".concat(t._imageBase,"/characters/").concat(n,".jpg")},this.getStarshipImage=function(e){var n=e.id;return"".concat(t._imageBase,"/starships/").concat(n,".jpg")},this.getPlanetImage=function(e){var n=e.id;return"".concat(t._imageBase,"/planets/").concat(n,".jpg")},this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manfacturer:e.manufacturer,costInCredits:e.costInCredits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargoCapacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}},v=(n(37),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-double-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),b=(n(38),n(24)),w=n.n(b),j=function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("img",{src:w.a,alt:"error-icon"}),r.a.createElement("span",{className:"boom"},"BOOM!"),r.a.createElement("span",null,"something has gone terribly wrong"),r.a.createElement("span",null,"(but we already sent droids to fix it)"))},y=j,O=(n(39),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new E,n.state={planet:{},loading:!0,error:!1},n.onPlanetLoaded=function(e){n.setState({planet:e,loading:!1,error:!1})},n.onError=function(e){n.setState({error:!0,loading:!1})},n.updatePlanet=function(){var e=Math.floor(25*Math.random())+2;n.swapiService.getPlanet(e).then(n.onPlanetLoaded).catch(n.onError)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.updateInterval;this.updatePlanet(),this.interval=setInterval(this.updatePlanet,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,n=e.loading,a=e.error,c=!(n||a),o=a?r.a.createElement(y,null):null,i=n?r.a.createElement(v,null):null,l=c?r.a.createElement(S,{planet:t}):null;return r.a.createElement("div",{className:"random-planet jumbotron rounded"},o,i,l)}}]),t}(a.Component));O.defaultProps={updateInterval:1e4};var S=function(e){var t=e.planet,n=t.id,a=t.name,c=t.population,o=t.rotationPeriod,i=t.diameter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"planet-image",src:"https://starwars-visualguide.com/assets/img/planets/".concat(n,".jpg"),alt:"planet"}),r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Population"),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Rotation Period"),r.a.createElement("span",null,o)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Diameter"),r.a.createElement("span",null,i)))))},I=O,k=function e(){var t=this;Object(i.a)(this,e),this._people=[{id:1,name:"Bilbo Baggins [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"},{id:2,name:"Frodo Baggins [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"}],this._planets=[{id:1,name:"Earth [TEST DATA]",population:"7.530.000.000",rotationPeriod:"23 hours 56 seconds",diameter:"12.742 km"},{id:2,name:"Venus [TEST DATA]",population:"not known",rotationPeriod:"243 days",diameter:"12.104 km"}],this._starships=[{id:1,name:"USS Enterprise [TEST DATA]",model:"NCC-1701-C",manufacturer:"Northrop Grumman Shipbuilding",costInCredits:"not known",length:"approx 300 meters",crew:1e3,passengers:50,cargoCapacity:100}],this.getAllPeople=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._people);case 1:case"end":return e.stop()}},e)})),this.getPerson=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._people[0]);case 1:case"end":return e.stop()}},e)})),this.getAllPlanets=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets);case 1:case"end":return e.stop()}},e)})),this.getPlanet=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets[0]);case 1:case"end":return e.stop()}},e)})),this.getAllStarships=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships);case 1:case"end":return e.stop()}},e)})),this.getStarship=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships[0]);case 1:case"end":return e.stop()}},e)})),this.getPersonImage=function(){return"https://placeimg.com/400/500/people"},this.getStarshipImage=function(){return"https://placeimg.com/600/400/tech"},this.getPlanetImage=function(){return"https://placeimg.com/400/400/nature"}},P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasEror:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(j,null):this.props.children}}]),t}(a.Component),C=r.a.createContext(),x=C.Provider,N=C.Consumer,_=(n(40),function(e){var t=e.left,n=e.right;return r.a.createElement("div",{className:"row mb2"},r.a.createElement("div",{className:"col-md-6"},t),r.a.createElement("div",{className:"col-md-6"},n))}),D=n(13),A=(n(41),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={renderError:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.renderError&&(this.foo.bar=0),r.a.createElement("button",{className:"error-button btn btn-danger btn-lg",onClick:function(){return e.setState({renderError:!0})}},"Throw Error")}}]),t}(a.Component)),L=(n(42),function(e){var t=e.item,n=e.field,a=e.label;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},a),r.a.createElement("span",null,t[n]))}),T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={item:null,image:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId===e.itemId&&this.props.getData===e.getData&&this.props.getImageUrl===e.getImageUrl||this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props,n=t.itemId,a=t.getData,r=t.getImageUrl;n&&a(n).then(function(t){e.setState({item:t,image:r(t)})})}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.image;if(!t)return r.a.createElement("span",null,"Select a item from a list");var a=t.name;return r.a.createElement("div",{className:"item-details card"},r.a.createElement("img",{className:"item-image",src:n,alt:"item"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(this.props.children,function(e){return r.a.cloneElement(e,{item:t})})),r.a.createElement(A,null)))}}]),t}(a.Component),B=function(e){return function(t){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={data:null,loading:!0,error:!1},t}return Object(m.a)(n,t),Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.getData!==e.getData&&this.update()}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1}),this.props.getData().then(function(t){e.setState({data:t,loading:!1})}).catch(function(){e.setState({error:!0,loading:!1})})}},{key:"render",value:function(){var t=this.state,n=t.data,a=t.loading,c=t.error;return a?r.a.createElement(v,null):c?r.a.createElement(y,null):r.a.createElement(e,Object.assign({},this.props,{data:n}))}}]),n}(a.Component)},R=function(e){return function(t){return function(n){return r.a.createElement(N,null,function(a){var c=e(a);return r.a.createElement(t,Object.assign({},n,c))})}}},U=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},M=function(e){return function(t){return function(n){return r.a.createElement(t,n,e)}}},Y=R(function(e){return{getData:e.getPerson,getImageUrl:e.getPersonImage}})(function(e){return r.a.createElement(T,e,r.a.createElement(L,{field:"gender",label:"Gender"}),r.a.createElement(L,{field:"eyeColor",label:"Eye Color"}))}),F=R(function(e){return{getData:e.getPlanet,getImageUrl:e.getPlanetImage}})(function(e){return r.a.createElement(T,e,r.a.createElement(L,{field:"population",label:"Population"}),r.a.createElement(L,{field:"rotationPeriod",label:"Rotation Period"}),r.a.createElement(L,{field:"diameter",label:"Diameter"}))}),G=R(function(e){return{getData:e.getStarship,getImageUrl:e.getStarshipImage}})(function(e){return r.a.createElement(T,e,r.a.createElement(L,{field:"model",label:"Model"}),r.a.createElement(L,{field:"length",label:"Length"}),r.a.createElement(L,{field:"costInCredits",label:"Cost"}))}),J=(n(43),function(e){var t=e.data,n=e.onItemSelected,a=e.children,c=t.map(function(e){var t=e.id,c=a(e);return r.a.createElement("li",{className:"list-group-item",key:t,onClick:function(){return n(t)}},c)});return r.a.createElement("ul",{className:"item-list list-group"},c)});J.defaultProps={onItemSelected:function(){}};var W=J,V=function(e){var t=e.name;return r.a.createElement("span",null,t)},$=U(R(function(e){return{getData:e.getAllPeople}}),B,M(V))(W),q=U(R(function(e){return{getData:e.getAllPlanets}}),B,M(V))(W),z=U(R(function(e){return{getData:e.getAllStarships}}),B,M(function(e){var t=e.model,n=e.name;return r.a.createElement("span",null,n," (",t,")")}))(W),H=Object(D.g)(function(e){var t=e.history,n=e.match.params.id;return r.a.createElement(_,{left:r.a.createElement($,{onItemSelected:function(e){return t.push(e)}}),right:r.a.createElement(Y,{itemId:n})})}),K=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedItem:null},n.onItemSelected=function(e){n.setState({selectedItem:e})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.selectedItem;return r.a.createElement(_,{left:r.a.createElement(q,{onItemSelected:this.onItemSelected}),right:r.a.createElement(F,{itemId:e})})}}]),t}(a.Component),Q=Object(D.g)(function(e){var t=e.history;return r.a.createElement(z,{onItemSelected:function(e){return t.push(e)}})}),X=function(e){return e.isLoggedIn?r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h3",null,"This page is full of secrets!!!")):r.a.createElement(D.a,{to:"/login"})},Z=function(e){var t=e.isLoggedIn,n=e.onLogin;return t?r.a.createElement(D.a,{to:"/"}):r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,"Login to see secret page!"),r.a.createElement("button",{className:"btn btn-primary",onClick:n},"Login"))},ee=(n(44),n(45),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,swapiService:new E,isLoggedIn:!1},n.onLogin=function(){n.setState({isLoggedIn:!0})},n.onServiceChange=function(){n.setState(function(e){return{swapiService:new(e.swapiService instanceof E?k:E)}})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this,t=this.state.isLoggedIn;return r.a.createElement(P,null,r.a.createElement(x,{value:this.state.swapiService},r.a.createElement(p.a,null,r.a.createElement("div",{className:"stardb-app container"},r.a.createElement(d,{onServiceChange:this.onServiceChange}),r.a.createElement(I,null),r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/",render:function(){return r.a.createElement("h2",null,"Welcome to StarDB")},exact:!0}),r.a.createElement(D.b,{path:"/people/:id?",component:H}),r.a.createElement(D.b,{path:"/planets",component:K}),r.a.createElement(D.b,{path:"/starships",exact:!0,component:Q}),r.a.createElement(D.b,{path:"/starships/:id",render:function(e){var t=e.match,n=(e.location,e.history,t.params.id);return r.a.createElement(G,{itemId:n})}}),r.a.createElement(D.b,{path:"/login/",render:function(){return r.a.createElement(Z,{isLoggedIn:t,onLogin:e.onLogin})}}),r.a.createElement(D.b,{path:"/secret/",render:function(){return r.a.createElement(X,{isLoggedIn:t})}}),r.a.createElement(D.b,{render:function(){return r.a.createElement("h2",null,"Page not found!")}}))))))}}]),t}(a.Component));o.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d6efd756.chunk.js.map