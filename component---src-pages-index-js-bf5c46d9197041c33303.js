(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,A,t){"use strict";t.r(A);var a=t(7),n=t.n(a),i=t(0),c=t.n(i),o=t(162),r=t(145),s=(t(74),t(75),t(76),t(159)),l=t(4),g=t.n(l),d=(t(33),t(151),c.a.createContext({})),p=function(e){return c.a.createElement(d.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:g.a.object,query:g.a.string.isRequired,render:g.a.func,children:g.a.func};var f=t(161),E=t.n(f),u=function(e){var A=e.filename,t=e.alt;return c.a.createElement(p,{query:"3195325893",render:function(e){var a=e.images.edges.find(function(e){return e.node.relativePath.includes(A)});if(!a)return null;var n=a.node.childImageSharp.sizes;return c.a.createElement(E.a,{alt:t,sizes:n})},data:s})};u.propTypes={filename:g.a.string,alt:g.a.string},u.defaultProps={filename:"",alt:""};var m=u,h=t(146),w=function(e){function A(){return e.apply(this,arguments)||this}return n()(A,e),A.prototype.render=function(){return c.a.createElement(r.a,null,c.a.createElement(h.a,{title:"Me",keywords:["gotokatsuya"]}),c.a.createElement("section",{className:"hero is-fullheight"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container has-text-centered"},c.a.createElement(o.Spring,{from:{opacity:0},to:{opacity:1},config:{tension:280,friction:120,delay:600}},function(e){return c.a.createElement("div",{style:e},c.a.createElement("div",{className:"image profile is-circle"},c.a.createElement(m,{filename:"profile.jpg",alt:"profile"})),c.a.createElement("div",{style:{marginTop:"30px"}},c.a.createElement("h1",{className:"title is-1"},"KATSUYA GOTO")))}),c.a.createElement("div",{style:{marginTop:"40px"},className:"d-flex has-gap is-centered"},c.a.createElement(o.Spring,{from:{opacity:0},to:{opacity:1},config:{tension:280,friction:120,delay:600}},function(e){return c.a.createElement("div",{style:e},c.a.createElement("a",{className:"image sns-logo",href:"https://github.com/gotokatsuya"},c.a.createElement(m,{filename:"github-logo.png",alt:"github-logo"})),c.a.createElement("a",{className:"image sns-logo",href:"https://twitter.com/goka_kun"},c.a.createElement(m,{filename:"tw-logo-2.png",alt:"tw-logo"})),c.a.createElement("a",{className:"image sns-logo",href:"https://www.facebook.com/katsuya.goto.5"},c.a.createElement(m,{filename:"fb-logo.png",alt:"fb-logo"})))}))))))},A}(c.a.Component);A.default=w},145:function(e,A,t){"use strict";var a=t(0),n=t.n(a),i=t(4),c=t.n(i),o=(t(148),function(e){var A=e.children;return n.a.createElement("div",null,n.a.createElement("main",null,A))});o.propTypes={children:c.a.node.isRequired},A.a=o},146:function(e,A,t){"use strict";var a=t(147),n=t(0),i=t.n(n),c=t(4),o=t.n(c),r=t(149),s=t.n(r);function l(e){var A=e.description,t=e.lang,n=e.meta,c=e.keywords,o=e.title,r=a.data.site,l=A||r.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},A.a=l},147:function(e){e.exports={data:{site:{siteMetadata:{title:"gotokatsuya.io",description:"My portfolio website.",author:"@gotokatsuya"}}}}},151:function(e,A,t){var a;e.exports=(a=t(160))&&a.default||a},159:function(e){e.exports={data:{images:{edges:[{node:{relativePath:"fb-logo.png",name:"fb-logo",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABcRAAAXEQHKJvM/AAADUklEQVQ4y12U3UsUURTAda0Us2/LWTf7oIIIol7yqSAwhIqigv6HPjQ1dVd31zX7IHtMzSChlyB87CEpCDKxLMOQ6iGynpJEpcJ7V9cdZ+aczrkzd2Z14HLvnXvP757vPCMq8vgro9mIyYI876P1CRrddP6B5kk6pyFHad1D6+rgnigoy2FoYd7ke+ujRlSOGHETwylEI7GERmtGjTCty9uRZhPp3ijJHPeg+SQTwGijYQ1KMOmwgE3DIiE73CIdGrClSTibG4VV2iRsI2GjEc8inUc92Xxm+WYyTGkUk0gPWDQDXQYGbWoUuL5BwP4bEg7eSsO+lOT/ljpvVzIxjxFybY/JY0broguLSYdnDdt4XWBlZxoGvi7BtHBgVjowQ+PS0wwU1wknQnfYPaRElfYrAcV7NpPAlgsjDUjD0maBe9ok/Ji1AZd/cPdlFtbUCNzeKq1w0mZFPqmgEKSaX2BfsZl6lNPLxdcE1vRnGAZZSzHhzYQF/WNLcLFvAcgNyPeUvxMWQ8+w3T2e77TfeA2RVgkl9QLuv8762r36ZsHaOgHr6gVSgNC9L1EDSblnDPyofEC+Y79pKF8srBVIQEeb+WDIhNCVOSS/oX5Yy3j+X2Dgb6NlgTYBjM04cDMNFXEJfW9NDcQno6YKFEd6B51t86BuZih5ZOCUC3QDQXmGh++kYWLGhqk5B+Qi+CanswCT/xwV7bO9y3yoFUJO6jEVlJibvJQmcKQzvTyk3pf7r/JeWuVnOAgku2GRNXyog6I1PHQ7DeO/bPg+bTt/5h0f9HceWHNn+KcFOxMStjYLnbu2KtGoHGDgSbVxS8138u6kKjXoHQp8+HjEhA1UMbuSQXp5Q+fiebeWY3IsTLVJMEtXCc9FlIddOVF+NGziqqvKb5hjpqVyMCo+U2YU6AZR5aUOa6hKT+dh92AApIhDUa0Aqg4Nc1SpusBTuo5DHjSuCt3VzuLoURLjSiDnZsQFkjXC8ZpDh98cVvTChPInvUhAm4B2DhAZSPVrE9A109Wsw2+DMd0Tqah9KHVjOhiPtNlY0mhi16AqPfA0xMIGEytSNqfZF7p3OqfbBw025wVtfj5F8tzqmrnnFOWMH+V3Zjbv8tyLvSl5oSzoo6Fcxn9D3cUu0iefBQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/f407c31b217aac6e0cd4171092d53a8c/992a3/fb-logo.png",srcSet:"/static/f407c31b217aac6e0cd4171092d53a8c/fdbb0/fb-logo.png 300w,\n/static/f407c31b217aac6e0cd4171092d53a8c/59139/fb-logo.png 600w,\n/static/f407c31b217aac6e0cd4171092d53a8c/992a3/fb-logo.png 1076w",sizes:"(max-width: 1076px) 100vw, 1076px"}}}},{node:{relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png",srcSet:"/static/4a9773549091c227cd2eb82ccd9c5e3a/fdbb0/gatsby-icon.png 300w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{relativePath:"github-logo.png",name:"github-logo",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACc0lEQVQ4y3VUsWpUQRR9+1ZJ6vDuzNuNIPgDKVMEm4AWEo2kClrah7DESm22sEljk07LpLAKgiRsYZDYh5g2IJYLipAI0d1k13Nnzry9m8QHh5m5c++ZM3fPbObFZfr5wmVOpJ7xc+LmsPca2AUOsT7kXGNzVV7h6hUHRw1iITUSzWJjDxiWzg9L8UOdhzXmGuNac2ZZU0N9VrFqgPOVVAz0gR7Hc6LvCulBQN/krbC2FhSCLGegZU5PygamMGEwpjrWtMiR88oyb0g6wBMc9Elj6KuqPMF44uN8CIW69xR97xjy+XTlHBsH5rQ1HpJrEohnMJ/COIX1DGPpVmvmVgc4KNfgUhkDZ9xcj8lyI/vP54u4p7msOSPHklplU4Ngj9cRtxB/OakDqjKHwpoCh+RUXifhAtX1IodsavB41HDZr1QkT13zuWSRmLdvfrBj7VWwBqW/TX2N3rxKqrEAKOX6HWuDzdTUA0O4NTJqMPs1/Qu+Db4j4ZYhHGigayR/1eTYr5H7oyJnFda89jXOj1I9WtFVhZ0QKOSCfXxIlaH5frxfWYxVtllMr6qMHB0lXKXkX9z8Ddwf/xFGCo11HiDvJ2v+kmNVT3HAKeR+A5Yx/87Nz1D3AtefNAongVfAl0tvXq/7A6NPia2GL3VzG7gLNd2mb+j6o3n46UfYYa6640JdQgHPL9thu4lEJDzDfBq4B4ghTK/jJQn+mKt+sEQ8WSbQq10mvAfeAI9GvkzPTdrMOQ9jITuYT1gudX5uDmhrT241ppHsNhi7aRSuN0tth5yCrG3q8rEnVrFH896mwsXqH0nSy5DHULuB2J2rt3TZP3DP+m6bnZlRAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/ef7a02b69836dc8b6a732a54c4200dcb/aeb64/github-logo.png",srcSet:"/static/ef7a02b69836dc8b6a732a54c4200dcb/aeb64/github-logo.png 120w",sizes:"(max-width: 120px) 100vw, 120px"}}}},{node:{relativePath:"tw-logo-2.png",name:"tw-logo-2",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC90lEQVQ4y4VVTWsUQRDdvXgK+InGZHZWFBUMIp68iHfBXyB70PgvvHjwInhN8GASdxPzJTEsGkSCCp6EiHgQRDCQiaxIPKV7s8nuzGyX9aq7Z2eNYEPTPdNVr6uqX78uBDVVQCvVVDGo6qKd64Ggpkd5rHNvcE9dx7zu1gZgy/Miz4t2brEK/of7WeHvKHxGFC4aKs20iL9t5zn+YY0DiPhfJfOrquJ+sKoaF+PZNvHOScl281dPZI1tYMs+Y95fsEq9NMfLz7GzgKScPuWB2NGEPJanNUZyJUjg40F9yQBWcbtJRGXrICBIlUcCyMknig49Vub4lAIwDfM6fJxvxYMNoGZIwUd2dEIMqZwDOzap6NJCk26/bdG15SYdZpvTMxprqfONAhwUT0ZtkXWCCC7MaXNvbY+GeA4QOA3y/MbKDv3e7RLadsfQi42YHnxqS6SIsmwxRgFYl5NjQHY0F+e1gdPqj4SuLDXpyISiA4+26fVmLGBxV5alTX7tmGFblkQYwVgF4ZalhhSfDehVZJ01R7K0HtPdD3u0vm2jS40F3IkNXV5sEuqJw3IYDRAzdTwzQ7zbuaea1rYS+lczDNZ1gL9aXTrLtkM2Qnt4jAUiZ4DY6cSUoulvHRsNp5dwx2gcUOJSRgk4Ogp71JJDxZWTlD3PADgyp2lT2xQRkcl1D3jn3S4oROCl0EtSVo3sUDwHsYgTHv/SpmZsMkCMndSCrWzsi67vUDLagHNnZrTU8fyspsXvcVY7397/TKR2oFgoAUiqSehpEzhih0xOLnA6Mq/p4ee22Wp1MxBEF3EJ7n/cE5EY7AcTYnMwkVcgiELFR8npmlNM1qvLTXNztWVuvWnR9Zc7QvCDXDNf69xdt1fPK09OA8e8ODAXU9QI1wudb4wQGAfg6twnDvDtqU1OvrAgOghpgvG0dBP2q46VNSdfHqxPCjNxdMoD8fyfwHJmUaYweYzeE6CLQS33BFSVewKUewJUyraNwD0BDJg9Afw/ewL+ABKl93vNz1JPAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/4607476796cc93ca75cfeccf2661fd1a/647de/tw-logo-2.png",srcSet:"/static/4607476796cc93ca75cfeccf2661fd1a/fdbb0/tw-logo-2.png 300w,\n/static/4607476796cc93ca75cfeccf2661fd1a/647de/tw-logo-2.png 400w",sizes:"(max-width: 400px) 100vw, 400px"}}}},{node:{relativePath:"profile.jpg",name:"profile",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAY9ZpSeojUawmbpCf//EABsQAAMAAgMAAAAAAAAAAAAAAAABAhESAwQi/9oACAEBAAEFAoRjWlEnJTmsszJ2l7FK1//EABkRAAEFAAAAAAAAAAAAAAAAAAABEBESMf/aAAgBAwEBPwGSwut//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AaxGv//EABwQAAICAgMAAAAAAAAAAAAAAAABECECERJCcf/aAAgBAQAGPwLI4u1rbKRVR2PYVH//xAAcEAEBAAICAwAAAAAAAAAAAAABEQAhEEExUXH/2gAIAQEAAT8h7hQ3m/FLDyZNuTJ/u6xRq1cHNg+YEvs3it2pc//aAAwDAQACAAMAAAAQM9g//8QAGREBAQEAAwAAAAAAAAAAAAAAAQAxEYHw/9oACAEDAQE/EDSwgw91EJwX/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAERITFRkfD/2gAIAQIBAT8QbCRe590ZtEtn/8QAHhABAAICAQUAAAAAAAAAAAAAAQARIVExQWGBocH/2gAIAQEAAT8Q5HEA4F7xGHGEE1WunmEdjbtb+kZPhddjIR0tFqubhJQ0hJyNbvSMCiw0qz//2Q==",aspectRatio:1,src:"/static/2e87231da7c94ba8028d22871d11f5d8/76773/profile.jpg",srcSet:"/static/2e87231da7c94ba8028d22871d11f5d8/c83a6/profile.jpg 300w,\n/static/2e87231da7c94ba8028d22871d11f5d8/775d9/profile.jpg 600w,\n/static/2e87231da7c94ba8028d22871d11f5d8/76773/profile.jpg 631w",sizes:"(max-width: 631px) 100vw, 631px"}}}}]}}}},160:function(e,A,t){"use strict";t.r(A);t(34);var a=t(0),n=t.n(a),i=t(4),c=t.n(i),o=t(69),r=t(2),s=function(e){var A=e.location,t=r.default.getResourcesForPathnameSync(A.pathname);return t?n.a.createElement(o.a,Object.assign({location:A,pageResources:t},t.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},A.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-bf5c46d9197041c33303.js.map