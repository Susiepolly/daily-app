(this["webpackJsonpdaily-app"]=this["webpackJsonpdaily-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/fewClouds.1781d717.jpg"},function(e,t,a){e.exports=a.p+"static/media/sun.eba3efa1.jpg"},function(e,t,a){e.exports=a.p+"static/media/clearnight.d3ed2d86.jpg"},function(e,t,a){e.exports=a.p+"static/media/fewCloudsN.a1289333.jpg"},function(e,t,a){e.exports=a.p+"static/media/clouds.5c7206d9.png"},function(e,t,a){e.exports=a.p+"static/media/cloudsN.5b67367e.png"},function(e,t,a){e.exports=a.p+"static/media/rain.1f1938ed.jpg"},function(e,t,a){e.exports=a.p+"static/media/rainN.4f770876.jpg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm.1bff3bc3.jpg"},function(e,t,a){e.exports=a.p+"static/media/snow.eaff3498.jpg"},function(e,t,a){e.exports=a.p+"static/media/mist.b502406a.jpg"},,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=(a(23),a(1)),i=a(2),u=a(4),p=a(3),m=(a(24),function(e){var t=e.time,a=new Date(t),n=a.getUTCHours().toString().padStart(2,"0"),c=a.getUTCMinutes().toString().padStart(2,"0");return r.a.createElement("h2",{className:"tc f1-ns f2 pa0 pa5-ns"},n,":",c)});var d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={fact:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Date(this.props.time),a=t.getMonth()+1,n=t.getDate();fetch("https://numbersapi.p.rapidapi.com/".concat(a,"/").concat(n,"/date?fragment=true&json=true"),{method:"GET",headers:{"x-rapidapi-host":"numbersapi.p.rapidapi.com","x-rapidapi-key":"3aa242d4b6msh83b08bf9bd26c51p1c4f07jsn4da817181b75"}}).then((function(e){return e.json()})).then((function(t){return e.setState({fact:t})}))}},{key:"render",value:function(){var e=new Date(this.props.time),t=e.getMonth()+1,a=e.getDate(),n=this.state.fact.year,c=this.state.fact.text;return r.a.createElement("div",{className:"pa3 br3 f3-ns f4 tr w-50-ns"},r.a.createElement("p",{className:"o-100"},"On ",a,function(e){switch(e){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}}(a)," of ",function(e){switch(e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December"}}(t)," in ",n," ",c))}}]),a}(r.a.Component);function h(e){return e<-6?"#BAC0E3":e<1?"#AD8EBF":e<7?"#83A7D6":e<13?"#8AD6A3":e<20?"#E0D35A":e<26?"#D69553":e>25?"#CC625D":void 0}var l=function(e){var t=e.city,a=e.temp,n=e.weather,c=Math.round(a.temp),s=Math.round(a.feels_like),o=n.description,i=n.icon;return r.a.createElement("div",{className:"bg-lightest-blue dark-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc",style:{backgroundColor:h(c)}},r.a.createElement("p",{className:"pb0 mb0 f3"},t),r.a.createElement("img",{className:"pa0 ma0",alt:"weather logo",src:"http://openweathermap.org/img/wn/".concat(i,"@2x.png")}),r.a.createElement("p",{className:"f1-ns f3 ma0"},c,"\xb0 C"),r.a.createElement("p",null,"Feels like ",s,"\xb0 C"),r.a.createElement("p",null,"Forecast: ",o))},f=a(6),g=a.n(f),b=a(7),w=a.n(b),v=a(5),y=a.n(v),C=a(8),E=a.n(C),x=a(9),D=a.n(x),j=a(10),k=a.n(j),S=a(11),M=a.n(S),N=a(12),O=a.n(N),A=a(13),I=a.n(A),z=a(14),F=a.n(z),J=a(15),B=a.n(J);function H(e){switch(e){case"01d":return g.a;case"01n":return w.a;case"02d":return y.a;case"02n":return E.a;case"03d":case"04d":return D.a;case"03n":case"04n":return k.a;case"09d":case"10d":return M.a;case"09n":case"10n":return O.a;case"11d":case"11n":return I.a;case"13d":case"13n":return F.a;case"50d":case"50n":return B.a;default:return y.a}}var L=function(e){var t=e.weather.icon,a={width:"100%",minHeight:"100vh",backgroundImage:"url(".concat(H(t),")"),color:"#000000",textShadow:"1px 1px rgb(255, 255, 255, 0.5)",position:"absolute",top:"0"},n={width:"100%",minHeight:"100vh",backgroundImage:"url(".concat(H(t),")"),color:"#ffffff",textShadow:"1px 1px rgb(0, 0, 0, 0.5)",position:"absolute",top:"0"};return r.a.createElement("div",{style:function(e){switch(e){case g.a:case y.a:case D.a:case M.a:case F.a:case B.a:return a;case w.a:case E.a:case k.a:case O.a:case I.a:return n;default:return a}}(H(t))},e.children)},T=function(e){e.city;var t=e.searchChange,a=e.onCityChange;e.componentDidMount;return r.a.createElement("div",{className:"tc"},r.a.createElement("input",{type:"search",placeholder:"London",onChange:t}),r.a.createElement("button",{onClick:a},"Change City"))},U=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).componentDidMount=function(){e.timerID=setInterval((function(){return e.sec()}),6e4),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.searchfield,"&units=metric&appid=3244bedb98e800f1f9b64d8220471999")).then((function(e){return e.json()})).then((function(t){return e.setState({temp:t.main,weather:t.weather[0],timezone:1e3*t.timezone})}))},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onCityChange=function(){e.setState({city:e.state.searchfield}),e.componentDidMount()},e.state={date:new Date,temp:"",weather:{},searchfield:"London",city:"London",timezone:""},e}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"sec",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state,t=(e.date,e.temp),a=e.weather,n=e.city,c=e.timezone,s=+this.state.date+ +this.state.timezone;return r.a.createElement(L,{weather:a},r.a.createElement(m,{time:s,timezone:c}),r.a.createElement("div",{className:"weatherAndFact"},r.a.createElement(l,{city:n,temp:t,weather:a}),r.a.createElement(d,{time:s})),r.a.createElement(T,{onCityChange:this.onCityChange,searchChange:this.onSearchChange,componentDidMount:this.componentDidMount}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,{className:"pa0 ma0"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.9d4e9c3d.chunk.js.map