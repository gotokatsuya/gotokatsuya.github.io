(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(t,e,a){"use strict";a.r(e);a(219);var i=a(0),n=a.n(i),l=a(193),s=a(194);var r=function(t){var e,a;function i(){for(var e,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).state={scrollTop:0,card:{translateY:0,scale:3},title:{scale:1,opacity:1},subtitle:{translateY:0,opacity:0}},e}a=t,(e=i).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var r=i.prototype;return r.componentDidMount=function(){var t=this;this.drawCanvas(),console.log(window.devicePixelRatio),window.addEventListener("scroll",function(e){return t.watchScroll(e)})},r.componentWillUnmount=function(){window.removeEventListener("scroll")},r.viewportHeight=function(){return.01*window.innerHeight},r.saveScrollState=function(){var t=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),e=t-this.state.scrollTop;return this.setState({scrollTop:t}),{vy:e}},r.animateCardState=function(t){var e=0,a=240,i=this.state.card.translateY+t,n=3,l=.6,s=this.state.card.scale-.01*t;this.setState({card:{translateY:Math.min(Math.max(i,e),a),scale:Math.max(Math.min(s,n),l)}})},r.animateTitleState=function(t){var e=1,a=0,i=this.state.title.opacity-.02*t,n=1,l=.9,s=this.state.title.scale-.002*t;this.setState({title:{opacity:Math.max(Math.min(i,e),a),scale:Math.max(Math.min(s,n),l)}})},r.invisibleTitleState=function(){this.setState({title:{scale:0,opacity:0}})},r.animateSubtitleState=function(t){var e=0,a=-100,i=this.state.subtitle.translateY-t,n=0,l=1,s=this.state.subtitle.opacity+.01*t;this.setState({subtitle:{translateY:Math.max(Math.min(i,e),a),opacity:Math.min(Math.max(s,n),l)}})},r.invisibleSubtitleState=function(){this.setState({subtitle:{translateY:0,opacity:0}})},r.watchScroll=function(t){var e=.2*this.saveScrollState().vy;this.animateCardState(e);var a=400*this.viewportHeight();this.state.scrollTop>a/3?(this.animateSubtitleState(e),this.invisibleTitleState()):(this.animateTitleState(e),this.invisibleSubtitleState())},r.drawCanvas=function(){var t=this.canvas,e=t.getContext("2d"),a=t.width,i=t.height;e.beginPath();var n=e.createLinearGradient(0,0,a,i);n.addColorStop(0,"#f3e7e9"),n.addColorStop(1,"#e3eeff"),e.fillStyle=n,e.rect(0,0,a,i),e.fill()},r.render=function(){var t=this;return n.a.createElement(l.a,null,n.a.createElement(s.a,{title:"AppleCard",keywords:["applecard"]}),n.a.createElement("section",null,n.a.createElement("div",{style:{width:"100%",height:"400vh",backgroundColor:"white"}},n.a.createElement("div",{style:{position:"sticky",overflow:"hidden",width:"100%",height:"100vh",top:"0"}},n.a.createElement("div",{style:{position:"absolute",left:"calc(50% - (100vw/2))",top:"calc(50% - (60vw/2))",width:"100vw",height:"60vw",transform:"translate(0px, "+this.state.card.translateY+"px) scale("+this.state.card.scale+", "+this.state.card.scale+")",transitionTimingFunction:"cubic-bezier(0.55, 0.085, 0.68, 0.53)"}},n.a.createElement("canvas",{ref:function(e){t.canvas=e},width:"320",height:"200",style:{width:"100%",height:"100%"}})),n.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{style:{position:"absolute",transform:"scale("+this.state.title.scale+", "+this.state.title.scale+")",opacity:""+this.state.title.opacity},className:"title is-1"},n.a.createElement("div",null,"This is ",n.a.createElement("br",null)," My Card.")),n.a.createElement("div",{style:{position:"absolute",transform:"translate(0px, "+this.state.subtitle.translateY+"px)",opacity:""+this.state.subtitle.opacity},className:"title has-text-centered"},n.a.createElement("div",null,"A new kind of",n.a.createElement("br",null)," my card.",n.a.createElement("br",null)," Created by Me,",n.a.createElement("br",null)," not a private.")))))),n.a.createElement("section",null,n.a.createElement("div",null,n.a.createElement("div",{style:{padding:"30px"},className:"title"},"About"),n.a.createElement("div",{style:{padding:"30px"},className:"title"},"Features"),n.a.createElement("div",{style:{padding:"30px"},className:"title"},"Contact"))))},i}(n.a.Component);e.default=r},193:function(t,e,a){"use strict";var i=a(0),n=a.n(i);a(198);e.a=function(t){var e=t.children;return n.a.createElement("div",null,n.a.createElement("main",{className:"layout"},e))}},194:function(t,e,a){"use strict";var i=a(195),n=a(0),l=a.n(n),s=a(199),r=a.n(s);function o(t){var e=t.description,a=t.lang,n=t.meta,s=t.keywords,o=t.title,c=i.data.site,d=e||c.siteMetadata.description;return l.a.createElement(r.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},e.a=o},195:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"gotokatsuya.io","description":"Katsuya Goto | Engineer | My portfolio","author":"@gotokatsuya"}}}}')},200:function(t,e,a){"use strict";var i=a(16),n=a(135),l=a(14);t.exports=function(t){for(var e=i(this),a=l(e.length),s=arguments.length,r=n(s>1?arguments[1]:void 0,a),o=s>2?arguments[2]:void 0,c=void 0===o?a:n(o,a);c>r;)e[r++]=t;return e}},219:function(t,e,a){var i=a(1);i(i.P,"Array",{fill:a(200)}),a(99)("fill")}}]);
//# sourceMappingURL=component---src-pages-arts-apple-card-js-4cfe85cd39e2dae2572e.js.map