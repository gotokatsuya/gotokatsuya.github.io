(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),i=t(203),o=t(193),c=t(194),r=t(204),s=i.b.a({exit:{x:100,opacity:0},enter:{x:0,opacity:1,delay:function(A){return 750+50*A.delta}}}),E=function(A){var e=A.style,t=A.isPopped;return n.a.createElement("div",{style:e,className:"social"},n.a.createElement(i.a,null,t&&[n.a.createElement(s,{delta:1,key:"github",className:"image logo",href:"https://github.com/gotokatsuya"},n.a.createElement(r.a,{filename:"logo-github.png",alt:"logo-github"})),n.a.createElement(s,{delta:2,key:"note",className:"image logo is-circle",href:"https://note.mu/gotokatsuya"},n.a.createElement(r.a,{filename:"logo-note.jpg",alt:"logo-note"})),n.a.createElement(s,{delta:3,key:"twitter",className:"image logo",href:"https://twitter.com/goka_kun"},n.a.createElement(r.a,{filename:"logo-tw.png",alt:"logo-tw"})),n.a.createElement(s,{delta:4,key:"facebook",className:"image logo",href:"https://www.facebook.com/katsuya.goto.5"},n.a.createElement(r.a,{filename:"logo-fb.png",alt:"logo-fb"}))]))};var g=i.b.h1({init:{y:"25vh",opacity:0},popped:{y:0,opacity:1,delay:100,transition:{duration:300}}}),d=i.b.div({init:{y:"50vh",opacity:0},popped:{y:0,opacity:1,delay:200,transition:{duration:300}}}),l=i.b.h2({init:{y:"50vh",opacity:0},popped:{y:0,opacity:1,delay:300,transition:{duration:300}}}),p=i.b.div({init:{y:"30vh",opacity:0},popped:{y:0,opacity:1,delay:600,transition:{duration:300}}}),f=function(A){var e,t;function a(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(e=A.call.apply(A,[this].concat(a))||this).state={isPopped:!1,appHeight:0},e.componentWillUnmount=function(){return window.removeEventListener("resize")},e}t=A,(e=a).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var i=a.prototype;return i.componentDidMount=function(){var A=this;this.setState({isPopped:!0,appHeight:window.innerHeight}),window.addEventListener("resize",function(){A.setState({appHeight:window.innerHeight})})},i.render=function(){return n.a.createElement(o.a,null,n.a.createElement(c.a,{title:"KATSUYA GOTO",keywords:["gotokatsuya"]}),n.a.createElement("div",{className:"index",style:{minHeight:this.state.appHeight}},n.a.createElement("div",{className:"bottom"}),n.a.createElement(d,{pose:this.state.isPopped?"popped":"",className:"right-bottom"},n.a.createElement(l,{pose:this.state.isPopped?"popped":"",style:{marginTop:"-20px",marginLeft:"-40px"},className:"text has-white"},"ENGINEER"),n.a.createElement(p,{className:"white"},n.a.createElement(E,{style:{margin:"12px"},isPopped:this.state.isPopped}))),n.a.createElement(g,{pose:this.state.isPopped?"popped":"",style:{marginLeft:"12px"},className:"title text is-large has-white"},"KATSUYA GOTO")))},a}(n.a.Component);e.default=f},193:function(A,e,t){"use strict";var a=t(0),n=t.n(a);t(198);e.a=function(A){var e=A.children;return n.a.createElement("div",null,n.a.createElement("main",{className:"layout"},e))}},194:function(A,e,t){"use strict";var a=t(195),n=t(0),i=t.n(n),o=t(199),c=t.n(o);function r(A){var e=A.description,t=A.lang,n=A.meta,o=A.keywords,r=A.title,s=a.data.site,E=e||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:r,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:E},{property:"og:title",content:r},{property:"og:description",content:E},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:E}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}r.defaultProps={lang:"en",meta:[],keywords:[],description:""},e.a=r},195:function(A){A.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"gotokatsuya.io","description":"Katsuya Goto | Engineer | My portfolio","author":"@gotokatsuya"}}}}')},197:function(A,e,t){var a;A.exports=(a=t(202))&&a.default||a},201:function(A){A.exports=JSON.parse('{"data":{"images":{"edges":[{"node":{"relativePath":"logo-note.jpg","name":"logo-note","childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIE/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBBP/aAAwDAQACEAMQAAAB02uuLONgAD//xAAaEAEAAQUAAAAAAAAAAAAAAAABEQIQEiAx/9oACAEBAAEFAglxtR2HX//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/AQj/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAaEAEAAQUAAAAAAAAAAAAAAAABABAgMVFx/9oACAEBAAY/Apko8iurf//EABoQAQEAAgMAAAAAAAAAAAAAAAERADEQIJH/2gAIAQEAAT8hSRmrGhZx7FgNpsbOv//aAAwDAQACAAMAAAAQC999/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/ECSzH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB4QAQEAAgAHAAAAAAAAAAAAAAERACEQIDFBYZGh/9oACAEBAAE/ECB1fnnHdW0VqeuGxCCIrNzEH62WV7dOX//Z","aspectRatio":1,"src":"/static/75a912bf4d5e7447b9856413050d9a26/8539d/logo-note.jpg","srcSet":"/static/75a912bf4d5e7447b9856413050d9a26/c83a6/logo-note.jpg 300w,\\n/static/75a912bf4d5e7447b9856413050d9a26/8539d/logo-note.jpg 400w","sizes":"(max-width: 400px) 100vw, 400px"}}}},{"node":{"relativePath":"logo-github.png","name":"logo-github","childImageSharp":{"sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACc0lEQVQ4y3VUsWpUQRR9+1ZJ6vDuzNuNIPgDKVMEm4AWEo2kClrah7DESm22sEljk07LpLAKgiRsYZDYh5g2IJYLipAI0d1k13Nnzry9m8QHh5m5c++ZM3fPbObFZfr5wmVOpJ7xc+LmsPca2AUOsT7kXGNzVV7h6hUHRw1iITUSzWJjDxiWzg9L8UOdhzXmGuNac2ZZU0N9VrFqgPOVVAz0gR7Hc6LvCulBQN/krbC2FhSCLGegZU5PygamMGEwpjrWtMiR88oyb0g6wBMc9Elj6KuqPMF44uN8CIW69xR97xjy+XTlHBsH5rQ1HpJrEohnMJ/COIX1DGPpVmvmVgc4KNfgUhkDZ9xcj8lyI/vP54u4p7msOSPHklplU4Ngj9cRtxB/OakDqjKHwpoCh+RUXifhAtX1IodsavB41HDZr1QkT13zuWSRmLdvfrBj7VWwBqW/TX2N3rxKqrEAKOX6HWuDzdTUA0O4NTJqMPs1/Qu+Db4j4ZYhHGigayR/1eTYr5H7oyJnFda89jXOj1I9WtFVhZ0QKOSCfXxIlaH5frxfWYxVtllMr6qMHB0lXKXkX9z8Ddwf/xFGCo11HiDvJ2v+kmNVT3HAKeR+A5Yx/87Nz1D3AtefNAongVfAl0tvXq/7A6NPia2GL3VzG7gLNd2mb+j6o3n46UfYYa6640JdQgHPL9thu4lEJDzDfBq4B4ghTK/jJQn+mKt+sEQ8WSbQq10mvAfeAI9GvkzPTdrMOQ9jITuYT1gudX5uDmhrT241ppHsNhi7aRSuN0tth5yCrG3q8rEnVrFH896mwsXqH0nSy5DHULuB2J2rt3TZP3DP+m6bnZlRAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/ef7a02b69836dc8b6a732a54c4200dcb/aeb64/logo-github.png","srcSet":"/static/ef7a02b69836dc8b6a732a54c4200dcb/aeb64/logo-github.png 120w","sizes":"(max-width: 120px) 100vw, 120px"}}}},{"node":{"relativePath":"logo-fb.png","name":"logo-fb","childImageSharp":{"sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABcRAAAXEQHKJvM/AAADUklEQVQ4y12U3UsUURTAda0Us2/LWTf7oIIIol7yqSAwhIqigv6HPjQ1dVd31zX7IHtMzSChlyB87CEpCDKxLMOQ6iGynpJEpcJ7V9cdZ+aczrkzd2Z14HLvnXvP757vPCMq8vgro9mIyYI876P1CRrddP6B5kk6pyFHad1D6+rgnigoy2FoYd7ke+ujRlSOGHETwylEI7GERmtGjTCty9uRZhPp3ijJHPeg+SQTwGijYQ1KMOmwgE3DIiE73CIdGrClSTibG4VV2iRsI2GjEc8inUc92Xxm+WYyTGkUk0gPWDQDXQYGbWoUuL5BwP4bEg7eSsO+lOT/ljpvVzIxjxFybY/JY0broguLSYdnDdt4XWBlZxoGvi7BtHBgVjowQ+PS0wwU1wknQnfYPaRElfYrAcV7NpPAlgsjDUjD0maBe9ok/Ji1AZd/cPdlFtbUCNzeKq1w0mZFPqmgEKSaX2BfsZl6lNPLxdcE1vRnGAZZSzHhzYQF/WNLcLFvAcgNyPeUvxMWQ8+w3T2e77TfeA2RVgkl9QLuv8762r36ZsHaOgHr6gVSgNC9L1EDSblnDPyofEC+Y79pKF8srBVIQEeb+WDIhNCVOSS/oX5Yy3j+X2Dgb6NlgTYBjM04cDMNFXEJfW9NDcQno6YKFEd6B51t86BuZih5ZOCUC3QDQXmGh++kYWLGhqk5B+Qi+CanswCT/xwV7bO9y3yoFUJO6jEVlJibvJQmcKQzvTyk3pf7r/JeWuVnOAgku2GRNXyog6I1PHQ7DeO/bPg+bTt/5h0f9HceWHNn+KcFOxMStjYLnbu2KtGoHGDgSbVxS8138u6kKjXoHQp8+HjEhA1UMbuSQXp5Q+fiebeWY3IsTLVJMEtXCc9FlIddOVF+NGziqqvKb5hjpqVyMCo+U2YU6AZR5aUOa6hKT+dh92AApIhDUa0Aqg4Nc1SpusBTuo5DHjSuCt3VzuLoURLjSiDnZsQFkjXC8ZpDh98cVvTChPInvUhAm4B2DhAZSPVrE9A109Wsw2+DMd0Tqah9KHVjOhiPtNlY0mhi16AqPfA0xMIGEytSNqfZF7p3OqfbBw025wVtfj5F8tzqmrnnFOWMH+V3Zjbv8tyLvSl5oSzoo6Fcxn9D3cUu0iefBQAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/f407c31b217aac6e0cd4171092d53a8c/992a3/logo-fb.png","srcSet":"/static/f407c31b217aac6e0cd4171092d53a8c/fdbb0/logo-fb.png 300w,\\n/static/f407c31b217aac6e0cd4171092d53a8c/59139/logo-fb.png 600w,\\n/static/f407c31b217aac6e0cd4171092d53a8c/992a3/logo-fb.png 1076w","sizes":"(max-width: 1076px) 100vw, 1076px"}}}},{"node":{"relativePath":"logo-tw.png","name":"logo-tw","childImageSharp":{"sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC90lEQVQ4y4VVTWsUQRDdvXgK+InGZHZWFBUMIp68iHfBXyB70PgvvHjwInhN8GASdxPzJTEsGkSCCp6EiHgQRDCQiaxIPKV7s8nuzGyX9aq7Z2eNYEPTPdNVr6uqX78uBDVVQCvVVDGo6qKd64Ggpkd5rHNvcE9dx7zu1gZgy/Miz4t2brEK/of7WeHvKHxGFC4aKs20iL9t5zn+YY0DiPhfJfOrquJ+sKoaF+PZNvHOScl281dPZI1tYMs+Y95fsEq9NMfLz7GzgKScPuWB2NGEPJanNUZyJUjg40F9yQBWcbtJRGXrICBIlUcCyMknig49Vub4lAIwDfM6fJxvxYMNoGZIwUd2dEIMqZwDOzap6NJCk26/bdG15SYdZpvTMxprqfONAhwUT0ZtkXWCCC7MaXNvbY+GeA4QOA3y/MbKDv3e7RLadsfQi42YHnxqS6SIsmwxRgFYl5NjQHY0F+e1gdPqj4SuLDXpyISiA4+26fVmLGBxV5alTX7tmGFblkQYwVgF4ZalhhSfDehVZJ01R7K0HtPdD3u0vm2jS40F3IkNXV5sEuqJw3IYDRAzdTwzQ7zbuaea1rYS+lczDNZ1gL9aXTrLtkM2Qnt4jAUiZ4DY6cSUoulvHRsNp5dwx2gcUOJSRgk4Ogp71JJDxZWTlD3PADgyp2lT2xQRkcl1D3jn3S4oROCl0EtSVo3sUDwHsYgTHv/SpmZsMkCMndSCrWzsi67vUDLagHNnZrTU8fyspsXvcVY7397/TKR2oFgoAUiqSehpEzhih0xOLnA6Mq/p4ee22Wp1MxBEF3EJ7n/cE5EY7AcTYnMwkVcgiELFR8npmlNM1qvLTXNztWVuvWnR9Zc7QvCDXDNf69xdt1fPK09OA8e8ODAXU9QI1wudb4wQGAfg6twnDvDtqU1OvrAgOghpgvG0dBP2q46VNSdfHqxPCjNxdMoD8fyfwHJmUaYweYzeE6CLQS33BFSVewKUewJUyraNwD0BDJg9Afw/ewL+ABKl93vNz1JPAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/4607476796cc93ca75cfeccf2661fd1a/647de/logo-tw.png","srcSet":"/static/4607476796cc93ca75cfeccf2661fd1a/fdbb0/logo-tw.png 300w,\\n/static/4607476796cc93ca75cfeccf2661fd1a/647de/logo-tw.png 400w","sizes":"(max-width: 400px) 100vw, 400px"}}}},{"node":{"relativePath":"icon.jpg","name":"icon","childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAY9ZpSeojUawmbqCf//EABsQAAMAAgMAAAAAAAAAAAAAAAABAhESAwQi/9oACAEBAAEFAoRjWlEnJTmsszJ2l7FK1//EABkRAAEFAAAAAAAAAAAAAAAAAAABEBESMf/aAAgBAwEBPwGSwut//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPwFkyn//xAAcEAACAgIDAAAAAAAAAAAAAAAAARAhAhESQnH/2gAIAQEABj8CyOLta2ykVUdj2FR//8QAHBABAQACAgMAAAAAAAAAAAAAAREAIRBBMVFx/9oACAEBAAE/IewUN5vxSw8mTbkyf7usUatXBzYPmBL7N4rdqXP/2gAMAwEAAgADAAAAEDPYA//EABkRAQEAAwEAAAAAAAAAAAAAAAEAETGR8P/aAAgBAwEBPxA2WMDXuRmC/8QAHBEAAgEFAQAAAAAAAAAAAAAAAAEhETFBUZHw/9oACAECAQE/EGskTz7onBVs/8QAHhABAAICAQUAAAAAAAAAAAAAAQARIVExQWGBocH/2gAIAQEAAT8Q5nEA4F7xGHGEE1WunmEdjbtb+kZPhddjIR0tFqubhJQ0hJyNbvSMCiw0qz//2Q==","aspectRatio":1,"src":"/static/2e87231da7c94ba8028d22871d11f5d8/76773/icon.jpg","srcSet":"/static/2e87231da7c94ba8028d22871d11f5d8/c83a6/icon.jpg 300w,\\n/static/2e87231da7c94ba8028d22871d11f5d8/775d9/icon.jpg 600w,\\n/static/2e87231da7c94ba8028d22871d11f5d8/76773/icon.jpg 631w","sizes":"(max-width: 631px) 100vw, 631px"}}}},{"node":{"relativePath":"profile.jpg","name":"profile","childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB8695ktpaEWF//8QAGxAAAwACAwAAAAAAAAAAAAAAAQIRACETIjH/2gAIAQEAAQUCXWVawWuBxzsVwG567Df/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAaEAABBQEAAAAAAAAAAAAAAAAAARARITEy/9oACAEBAAY/ArI01Sm6EkSm/8QAGxABAAMBAAMAAAAAAAAAAAAAAQARMSFBUWH/2gAIAQEAAT8hFBoE7MJswaW/NuDAXX2LeIxHR6ll0ecgx//aAAwDAQACAAMAAAAQ5/f+/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESH/2gAIAQMBAT8Qdpmz/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8QTwtT/8QAHBABAQADAAMBAAAAAAAAAAAAAREAITFhcZHB/9oACAEBAAE/ELmCJyGKjthEJubddLneGhvvedH36TGiKYXr3cr23lH9x8ZNo1gQGUJRleU8C5//2Q==","aspectRatio":1,"src":"/static/42efafb0100811cbfa1e301913162a0c/81ef8/profile.jpg","srcSet":"/static/42efafb0100811cbfa1e301913162a0c/c83a6/profile.jpg 300w,\\n/static/42efafb0100811cbfa1e301913162a0c/775d9/profile.jpg 600w,\\n/static/42efafb0100811cbfa1e301913162a0c/81ef8/profile.jpg 1200w,\\n/static/42efafb0100811cbfa1e301913162a0c/19f0c/profile.jpg 1224w","sizes":"(max-width: 1200px) 100vw, 1200px"}}}},{"node":{"relativePath":"sunflower.jpg","name":"sunflower","childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABjoNSbhY5rrlyHOdHP//EABsQAAMBAQADAAAAAAAAAAAAAAECAxIABBEh/9oACAEBAAEFAvj9BHVzFiYrkSszPUKreP7AGRz6dpIMMRPjTXf/xAAYEQADAQEAAAAAAAAAAAAAAAAAARECEP/aAAgBAwEBPwFZIVrn/8QAGREAAgMBAAAAAAAAAAAAAAAAABEBAhAS/9oACAECAQE/AZsM5ef/xAAfEAADAAEEAwEAAAAAAAAAAAAAARECEiExUSIyYaH/2gAIAQEABj8CxU8uy6edr0VxDybrRH+Hvmh1bDyxxNRwWfCw/8QAHhABAAICAQUAAAAAAAAAAAAAAQARMUEhUYGRwfH/2gAIAQEAAT8hHAxp0OAijk+hFVle23vUpUDi8TTZiilktC33EIxXFZhPmDM3AvVRYaWBCE4xhvKf/9oADAMBAAIAAwAAABD4FXz/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAx/9oACAEDAQE/ELluYY4LN3f/xAAZEQEBAAMBAAAAAAAAAAAAAAABABEhMUH/2gAIAQIBAT8QQdeQEzIWbmr/xAAfEAEBAAIBBAMAAAAAAAAAAAABEQAhMUFRYfChwfH/2gAIAQEAAT8QgR1ENwgnmq4cIDXzW0HX9wHVLVzzwXGlvCTJU2OOjTQOiZWkgAL3sZxJpGiffnD4F4VVhdc6wpXU0FPfO8F+8mc675vhKoyr9YSB8R5tz//Z","aspectRatio":0.6666666666666666,"src":"/static/408d0d6164b38679f6279c2c801d9998/81ef8/sunflower.jpg","srcSet":"/static/408d0d6164b38679f6279c2c801d9998/c83a6/sunflower.jpg 300w,\\n/static/408d0d6164b38679f6279c2c801d9998/775d9/sunflower.jpg 600w,\\n/static/408d0d6164b38679f6279c2c801d9998/81ef8/sunflower.jpg 1200w,\\n/static/408d0d6164b38679f6279c2c801d9998/fb184/sunflower.jpg 1800w,\\n/static/408d0d6164b38679f6279c2c801d9998/c82f6/sunflower.jpg 2400w,\\n/static/408d0d6164b38679f6279c2c801d9998/03671/sunflower.jpg 3168w","sizes":"(max-width: 1200px) 100vw, 1200px"}}}}]}}}')},202:function(A,e,t){"use strict";t.r(e);t(22);var a=t(0),n=t.n(a),i=t(107);e.default=function(A){var e=A.location,t=A.pageResources;return t?n.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},204:function(A,e,t){"use strict";t(132),t(133),t(196);var a=t(201),n=t(0),i=t.n(n),o=(t(66),t(197),t(7).default.enqueue,i.a.createContext({}));function c(A){var e=A.staticQueryData,t=A.data,a=A.query,n=A.render,o=t?t.data:e[a]&&e[a].data;return i.a.createElement(i.a.Fragment,null,o&&n(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var r=function(A){var e=A.data,t=A.query,a=A.render,n=A.children;return i.a.createElement(o.Consumer,null,function(A){return i.a.createElement(c,{data:e,query:t,render:a||n,staticQueryData:A})})};var s=t(207),E=t.n(s),g=function(A){var e=A.filename,t=A.alt;return i.a.createElement(r,{query:"3195325893",render:function(A){var a=A.images.edges.find(function(A){return A.node.relativePath.includes(e)});if(!a)return null;var n=a.node.childImageSharp.sizes;return i.a.createElement(E.a,{alt:t,sizes:n})},data:a})};g.defaultProps={filename:"",alt:""};e.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-0d17b84b9953c15da0c2.js.map