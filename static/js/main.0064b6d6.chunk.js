(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),c=n.n(r),u=n(4),o=n(5),s=n(7),b=n(6),l=n(8),d=(n(14),n(1)),m=n.n(d),v=m.a.shape({title:m.a.string.isRequired,content:m.a.string.isRequired}),f=(m.a.arrayOf(v).isRequired,m.a.func.isRequired,m.a.number.isRequired,v.isRequired,m.a.func.isRequired,m.a.number.isRequired,m.a.number.isRequired,function(e){var t,n=e.tab,a=e.onTabSelected,r=e.index,c=e.activeTab;return i.a.createElement("button",{type:"button",className:(t=r,c===t?"active item":"item"),onClick:function(){return a(r)}},n.title)}),T=(n(17),function(e){var t=e.tabs,n=e.onTabSelected,a=e.activeTab;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ui top attached tabular menu"},t.map(function(e,t){return i.a.createElement(f,{key:e.title,tab:e,onTabSelected:n,index:t,activeTab:a})})),i.a.createElement("div",{className:"tab-content"},t[a].content))}),p=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={tabs:[{title:"Tab 1",content:"Some very interesting text 1"},{title:"Tab 2",content:"Some very interesting text 2"},{title:"Tab 3",content:"Some very interesting text 3"}],activeTabIndex:0},n.onTabSelected=function(e){n.setState({activeTabIndex:e})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tabs,n=e.activeTabIndex;return i.a.createElement("div",{className:"App"},i.a.createElement(T,{tabs:t,onTabSelected:this.onTabSelected,activeTab:n}))}}]),t}(i.a.Component);c.a.render(i.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.0064b6d6.chunk.js.map