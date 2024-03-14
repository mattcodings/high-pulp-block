(()=>{"use strict";var e={352:(e,t,r)=>{var a=r(34);t.C=a.createRoot,a.hydrateRoot},34:e=>{e.exports=window.ReactDOM}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=window.React;var t=r.n(e),a=r(352),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=e.createContext&&e.createContext(n),s=["attr","size","title"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){var a,n,i;a=e,n=t,i=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(n))in a?Object.defineProperty(a,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[n]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(t){return t&&t.map(((t,r)=>e.createElement(t.tag,c({key:r},t.attr),m(t.child))))}function u(t){return r=>e.createElement(d,l({attr:c({},t.attr)},r),m(t.child))}function d(t){var r=r=>{var a,{attr:n,size:i,title:o}=t,m=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(t,s),u=i||r.size||"1em";return r.className&&(a=r.className),t.className&&(a=(a?a+" ":"")+t.className),e.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,m,{className:a,style:c(c({color:t.color||r.color},r.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==i?e.createElement(i.Consumer,null,(e=>r(e))):r(n)}function p(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 200v240a40.12 40.12 0 0 1-40 40H136a40.12 40.12 0 0 1-40-40V224"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M352 224h40a56.16 56.16 0 0 1 56 56v80a56.16 56.16 0 0 1-56 56h-40"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M224 256v160m64-160v160M160 256v160m160-304a48 48 0 0 1 0 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 0 1 0-96 47.91 47.91 0 0 1 26 9"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M91.86 132.43a40 40 0 1 1 60.46-52S160 91 160 96m-14.17-31.29C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 0 1-1.67 17.79"},child:[]}]})(e)}class b extends t().Component{state={visible:!1,favorite:!1};toggleVisible=()=>{this.setState({visible:!this.state.visible})};toggleFavorite=()=>{this.setState({favorite:!this.state.favorite})};render(){let{title:t,flavor:r,description:a,type:n,image:i,percentage:s}=this.props;return(0,e.createElement)("div",{className:this.state.visible?"beer-card-hover":"beer-card",onMouseEnter:()=>this.toggleVisible(),onMouseLeave:()=>this.toggleVisible()},(0,e.createElement)("h2",{className:"beer-title"},t),(0,e.createElement)("div",{className:"beer-image-container"},(0,e.createElement)(p,{className:"beer-icon"})),(0,e.createElement)("div",{className:"flex-container"},(0,e.createElement)("h4",{className:"beer-type"},"Type: ",n),(0,e.createElement)("h4",{className:"beer-flavor"},"Flavor: ",r)),(0,e.createElement)("div",{className:this.state.visible?"beer-description":"beer-description-hidden"},a,(0,e.createElement)("div",{className:"abv"},"ABV: ",s,"%")))}}class v extends t().Component{render(){return(0,e.createElement)("div",{className:"beer-list"},this.props.beers.map((t=>(0,e.createElement)(b,{title:t.attributes.title.rendered,type:t.attributes.acf.beer_type,description:t.attributes.acf.beer_description,flavor:t.attributes.acf.beer_flavor,image:t.attributes.acf.beer_image,percentage:t.attributes.acf.beer_percentage}))))}}class f extends t().Component{state={title:"",image:"",type:"",description:"",flavor:"",percentage:0};addBeer(e){e.preventDefault();const t={title:this.state.title,acf:{beer_type:this.state.type,beer_image:this.state.image,beer_description:this.state.description,beer_flavor:this.state.flavor,beer_percentage:this.state.percentage},status:"publish"};this.props.addBeer?.(t)}render(){return(0,e.createElement)("form",{className:"beer-review-form",onSubmit:e=>this.addBeer(e)},(0,e.createElement)("div",{className:"beer-form-entry"},(0,e.createElement)("label",null,"Title:",(0,e.createElement)("input",{type:"text",value:this.state.title,onInput:e=>this.setState({title:e.target.value}),required:!0}))),(0,e.createElement)("div",{className:"beer-form-entry"},(0,e.createElement)("label",null,"Percentage:",(0,e.createElement)("input",{type:"number",value:this.state.percentage,onInput:e=>this.setState({percentage:e.target.value}),required:!0}))),(0,e.createElement)("div",{className:"beer-form-entry"},(0,e.createElement)("label",null,"Type:",(0,e.createElement)("input",{type:"text",value:this.state.type,onInput:e=>this.setState({type:e.target.value}),required:!0}))),(0,e.createElement)("div",{className:"beer-form-entry"},(0,e.createElement)("label",null,"Description:",(0,e.createElement)("input",{type:"text",value:this.state.description,onInput:e=>this.setState({description:e.target.value}),required:!0}))),(0,e.createElement)("div",{className:"beer-form-entry"},(0,e.createElement)("label",null,"Flavor:",(0,e.createElement)("input",{type:"text",value:this.state.flavor,onInput:e=>this.setState({flavor:e.target.value}),required:!0}))),(0,e.createElement)("button",{className:"submit-beer-button",type:"submit"},"Add Beer"))}}class h extends t().Component{state={beers:[],loggedIn:null};addBeer(e){new wp.api.models.Beer(e).save().done((e=>{console.log("saved!",e),this.getBeers()})).fail((e=>{console.error("failed!",e)}))}getBeers(){const e=new wp.api.collections.Beer;e.fetch().done((t=>{console.log("saved!",t,e),this.setState({beers:e.models})})).fail((e=>{console.error("failed!",e)}))}getLoggedInUser(){(new wp.api.models.UsersMe).fetch().done((e=>{this.setState({loggedIn:!0})})).fail((e=>{this.setState({loggedIn:!1})}))}componentDidMount(){this.getBeers(),this.getLoggedInUser()}render(){return(0,e.createElement)("div",{className:"block-body"},(0,e.createElement)("h3",{className:"submit-beer-title"},"Beer List"),(0,e.createElement)(v,{beers:this.state.beers}),(0,e.createElement)("div",{className:"submit-beer-form"},(0,e.createElement)("h3",{className:"submit-beer-title"},"Submit a Beer"),!0===this.state.loggedIn&&(0,e.createElement)(f,{addBeer:e=>this.addBeer(e)}),!1===this.state.loggedIn&&(0,e.createElement)("div",{className:"error-msg"},"You must be logged in to submit a beer")))}}document.querySelectorAll(".wp-block-mz-beer-recipe").forEach((t=>{(0,a.C)(t).render((0,e.createElement)(h,null))}))})()})();