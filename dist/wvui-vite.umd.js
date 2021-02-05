var __assign=Object.assign;!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).WVUI={},t.Vue)}(this,(function(t,e){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var s,n,o=i(e);(n=s||(s={})).Default="default",n.Progressive="progressive",n.Destructive="destructive";var u=o.default.extend({name:"WvuiButton",props:{action:{type:String,default:s.Default,validator:function(t){return Object.keys(s).some((e=>s[e]===t))}},quiet:Boolean},computed:{rootClasses(){return{"wvui-button--default":this.action===s.Default,"wvui-button--progressive":this.action===s.Progressive,"wvui-button--destructive":this.action===s.Destructive,"wvui-button--framed":!this.quiet,"wvui-button--quiet":this.quiet}}},methods:{onClick(t){this.$emit("click",t)}}});function a(t,e,i,s,n,o,u,a){var r,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),s&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),u?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},l._ssrRegister=r):n&&(r=a?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(l.functional){l._injectStyles=r;var c=l.render;l.render=function(t,e){return r.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,r):[r]}return{exports:t,options:l}}const r={};var l=a(u,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wvui-button",class:t.rootClasses,on:{click:t.onClick}},[t._t("default")],2)}),[],!1,(function(t){for(let e in r)this[e]=r[e]}),null,null,null).exports;function c(t,e){var i;if("string"==typeof t)return!1;if("shouldFlipExceptions"in t){const s=null==(i=t.shouldFlipExceptions)?void 0:i.indexOf(e);return void 0===s||-1===s}return"shouldFlip"in t&&!!t.shouldFlip}var d=o.default.extend({name:"WvuiIcon",props:{icon:{type:[String,Object],required:!0},iconColor:{type:String,default:"#000"},iconTitle:{type:[String,Object],default:""},langCode:{type:String,default:()=>document.documentElement.lang}},data:()=>({dir:document.documentElement.dir}),computed:{rootClasses(){return{"wvui-icon--flip-for-rtl":c(this.icon,this.langCode)}},lacksTitle(){return!this.iconTitle},iconPath(){return function(t,e,i){if("string"==typeof t)return t;if("path"in t)return t.path;if("langCodeMap"in t){const i=e in t.langCodeMap?t.langCodeMap[e]:t.default;return"string"==typeof i?i:i.path}return"rtl"===i?t.rtl:t.default}(this.icon,this.langCode,this.dir)}},mounted(){const t=window.getComputedStyle(this.$el);this.dir=(null==t?void 0:t.direction)||this.dir},methods:{onClick(t){this.$emit("click",t)}}});const h={};var g,p,v=a(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"wvui-icon",class:t.rootClasses,on:{click:t.onClick}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20","aria-hidden":t.lacksTitle}},[t.iconTitle?i("title",[t._v(t._s(t.iconTitle))]):t._e(),t._v(" "),i("g",{attrs:{fill:t.iconColor}},[i("path",{attrs:{d:t.iconPath}})])])])}),[],!1,(function(t){for(let e in h)this[e]=h[e]}),null,null,null).exports;(p=g||(g={})).Text="text",p.Search="search";var f=o.default.extend({name:"WvuiInput",components:{WvuiIcon:v},inheritAttrs:!1,props:{value:{type:[String,Number],default:""},type:{type:String,default:g.Text,validator:function(t){return Object.keys(g).some((e=>g[e]===t))}},disabled:{type:Boolean,default:!1},startIcon:{type:[String,Object],default:void 0},endIcon:{type:[String,Object],default:void 0},clearable:{type:Boolean,default:!1}},data(){return{newValue:this.value,clearIcon:"M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"}},computed:{isClearable(){return this.clearable&&!!this.computedValue&&!this.disabled},rootClasses(){return{"wvui-input--has-start-icon":!!this.startIcon,"wvui-input--has-end-icon":!!this.endIcon||this.clearable,"wvui-input--clearable":this.clearable}},computedValue:{get(){return this.newValue},set(t){this.newValue=t,this.$emit("input",t)}}},watch:{value(t){this.newValue=t}},methods:{onInput(t){const e=t.target,{value:i}=e;this.setCurrentValue(i)},onChange(t){this.$emit("change",t)},onFocus(t){this.$emit("focus",t)},onBlur(t){this.$emit("blur",t)},onEndIconClick(){this.clearable&&(this.setCurrentValue(""),this.$emit("input",""))},setCurrentValue(t){this.computedValue=t}}});const y={};var _=a(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wvui-input",class:t.rootClasses},[i("input",t._b({ref:"input",staticClass:"wvui-input__input",attrs:{dir:"auto",disabled:t.disabled,type:t.type},domProps:{value:t.computedValue},on:{input:t.onInput,change:t.onChange,focus:t.onFocus,blur:t.onBlur}},"input",t.$attrs,!1)),t._v(" "),t.startIcon?i("wvui-icon",{staticClass:"wvui-input__start-icon",attrs:{icon:t.startIcon}}):t._e(),t._v(" "),t.isClearable||t.endIcon?i("wvui-icon",{staticClass:"wvui-input__end-icon",attrs:{icon:t.endIcon||t.clearIcon},on:{click:t.onEndIconClick}}):t._e()],1)}),[],!1,(function(t){for(let e in y)this[e]=y[e]}),null,null,null).exports;function m(t){return Object.keys(t).map((e=>`${e}=${encodeURIComponent(t[e])}`)).join("&")}var w=o.default.extend({name:"WvuiTypeaheadSuggestionTitle",props:{query:{type:String,default:""},title:{type:String,required:!0}},computed:{titleChunks(){return function(t,e){if(!t)return[e,"",""];const i=t.replace(/([\\{}()|.?*+\-^$[\]])/g,"\\$1"),s=e.search(new RegExp(i,"i"));if(s<0)return[e,"",""];const n=s+i.length,o=e.substring(s,n);return[e.substring(0,s),o,e.substring(n,e.length)]}(this.query,this.title)}}});const b={};var C=a(w,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"wvui-typeahead-suggestion__title"},[t._v("\n\t"+t._s(t.titleChunks[0])),i("span",{staticClass:"wvui-typeahead-suggestion__match"},[t._v(t._s(t.titleChunks[1]))]),t._v(t._s(t.titleChunks[2])+"\n")])}),[],!1,(function(t){for(let e in b)this[e]=b[e]}),null,null,null).exports;function I(){return{generateUrl:(t,e={title:"Special:Search"},i="/w/index.php")=>("string"!=typeof t?t=t.title:e.fulltext="1",`${i}?${m(__assign(__assign({},e),{search:t}))}`)}}var S=o.default.extend({name:"WvuiTypeaheadSuggestion",components:{WvuiTypeaheadSuggestionTitle:C,WvuiIcon:v},props:{active:{type:Boolean,default:!1},articlePath:{type:String,default:"/w/index.php"},query:{type:String,default:""},suggestion:{type:Object,required:!0},urlGenerator:{type:Object,default:I},showThumbnail:{type:Boolean,default:!0},showDescription:{type:Boolean,default:!0}},data:()=>({defaultThumbnailIcon:"M19 3H1v14h18zM3 14l3.5-4.5 2.5 3L12.5 8l4.5 6z"}),computed:{rootClasses(){return{"wvui-typeahead-suggestion--active":this.active}},suggestionWikiLink(){return this.urlGenerator.generateUrl(this.suggestion,void 0,this.articlePath)},thumbnailBackgroundImage(){var t;return`url(${null==(t=this.suggestion.thumbnail)?void 0:t.url})`}},methods:{onMouseOver(t){this.$emit("mouseover",t)},onClick(t){this.$emit("click",t)}}});const x={};var k=a(S,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.suggestion?i("a",{staticClass:"wvui-typeahead-suggestion",class:t.rootClasses,attrs:{href:t.suggestionWikiLink},on:{mouseover:t.onMouseOver,click:t.onClick}},[t.showThumbnail&&t.suggestion.thumbnail?i("span",{staticClass:"wvui-typeahead-suggestion__thumbnail",style:{backgroundImage:t.thumbnailBackgroundImage}}):t.showThumbnail?i("span",{staticClass:"wvui-typeahead-suggestion__thumbnail-placeholder"},[i("wvui-icon",{staticClass:"wvui-typeahead-suggestion__thumbnail-icon",attrs:{icon:t.defaultThumbnailIcon}})],1):t._e(),t._v(" "),i("span",{staticClass:"wvui-typeahead-suggestion__text"},[i("wvui-typeahead-suggestion-title",{attrs:{query:t.query,title:t.suggestion.title}}),t._v(" "),t.showDescription&&t.suggestion.description?i("span",{staticClass:"wvui-typeahead-suggestion__description"},[t._v(t._s(t.suggestion.description))]):t._e()],1)]):t._e()}),[],!1,(function(t){for(let e in x)this[e]=x[e]}),null,null,null).exports;const T={abort:()=>{},signal:void 0};function $(t,e){const i=window.AbortController?new AbortController:T;return{fetch:fetch(t,__assign(__assign({},e),{signal:i.signal})).then((t=>t.ok?t.json():Promise.reject(`Network request failed with HTTP code ${t.status}.`))),abort:()=>i.abort()}}function O(t=$){return{fetchByTitle(e,i,s=10){const n=`//${i}/w/rest.php/v1/search/title?${m({q:e,limit:s})}`,{fetch:o,abort:u}=t(n,{headers:{accept:"application/json"}});return{abort:u,fetch:o.then((t=>function(t,e){return{query:t,results:e.pages.map((({id:t,key:e,title:i,description:s,thumbnail:n})=>{var o,u;return{id:t,key:e,title:i,description:s,thumbnail:n?{url:n.url,width:null!=(o=n.width)?o:void 0,height:null!=(u=n.height)?u:void 0}:void 0}}))}}(e,t)))}}}}var A=o.default.extend({name:"WvuiTypeaheadSearch",components:{WvuiTypeaheadSuggestion:k,WvuiButton:l,WvuiInput:_,WvuiIcon:v},inheritAttrs:!1,props:{initialInputValue:{type:String,default:""},buttonLabel:{type:String,required:!0},formAction:{type:String,required:!0},client:{type:Object,default:()=>O()},urlGenerator:{type:Object,default:()=>I()},domain:{type:String,default:"en.wikipedia.org"},footerSearchText:{type:String,required:!0},suggestionsLabel:{type:String,required:!0},focused:{type:Boolean,default:!1},id:{type:String,required:!0},showThumbnail:{type:Boolean,default:!0},showDescription:{type:Boolean,default:!0}},data(){return{startIcon:"M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 017.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z",articleIcon:"M12.43 14.34A5 5 0 0110 15a5 5 0 113.95-2L17 16.09V3a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 001.45-.63z M13 10 A3 3 0 0 1 10 13 A3 3 0 0 1 7 10 A3 3 0 0 1 13 10 z",isHovered:!1,suggestionActiveIndex:-1,suggestionsList:[],isFocused:this.focused,searchQuery:"",inputValue:this.initialInputValue,InputType:g,isExpanded:!1,request:null,debounceId:null}},computed:{rootClasses(){return{"wvui-typeahead-search--active":this.isHovered,"wvui-typeahead-search--has-value":!!this.searchQuery,"wvui-typeahead-search--expanded":this.isExpanded,"wvui-typeahead-search--show-thumbnail":this.showThumbnail}},footerClasses(){return{"wvui-typeahead-search__suggestions__footer--active":this.isFooterSelected}},footerUrl(){return this.urlGenerator.generateUrl(this.searchQuery)},isFooterSelected(){return this.suggestionActiveIndex===this.suggestionsList.length},suggestionsId(){return`${this.id}-suggestions`},activeSuggestionId(){return this.isExpanded?this.suggestionActiveIndex<0||this.suggestionActiveIndex>this.suggestionsList.length?"":this.isFooterSelected?this.footerId:this.getSuggestionId(this.suggestionsList[this.suggestionActiveIndex]):""},footerId(){return`${this.suggestionsId}-footer`},isExpandedString(){return this.isExpanded?"true":"false"}},mounted:function(){this.initialInputValue&&this.onInput(this.initialInputValue)},methods:{updateSuggestions(t,e){this.searchQuery=t,this.suggestionsList=e,this.suggestionActiveIndex=-1,this.isExpanded=!!this.searchQuery&&this.isFocused},clearSuggestions(){this.updateSuggestions("",[])},onInput(t){this.debounceId&&clearTimeout(this.debounceId),this.debounceId=setTimeout((()=>{const e=t.trim();this.request&&this.request.abort(),e?(this.$emit("fetch-start"),this.request=this.client.fetchByTitle(t,this.domain),this.request.fetch.then((({results:t})=>{this.updateSuggestions(e,t);const i={numberOfResults:t.length,query:e};this.$emit("fetch-end",i)})).catch((()=>{}))):this.clearSuggestions()}),200)},onSuggestionMouseOver(t){this.suggestionActiveIndex=t},onInputFocus(){this.isHovered=!0,this.isFocused=!0,this.isExpanded=!!this.searchQuery},onInputBlur(){this.isFocused=!1,this.isHovered=!1,this.isExpanded=!1},onFooterHover(){this.suggestionActiveIndex=this.suggestionsList.length},onRootMouseOver(){this.isHovered=!0},onRootMouseOut(){this.isHovered=this.isFocused,this.suggestionActiveIndex=-1},onSuggestionMouseDown(t){t.preventDefault()},onSuggestionClick(t){const e={index:this.suggestionActiveIndex,numberOfResults:this.suggestionsList.length};this.inputValue=t?t.title:this.searchQuery,this.updateSuggestions(this.inputValue,[]),this.isFocused=!0,this.isExpanded=!1,this.$emit("suggestion-click",e)},onKeyDownUp(t){this.handleKeyUpDown(t,-1)},onKeyDownDown(t){this.handleKeyUpDown(t,1)},handleKeyUpDown(t,e){this.isFocused&&this.isExpanded&&(t.preventDefault(),this.nudgeActiveSuggestion(e))},nudgeActiveSuggestion(t){let e=this.suggestionActiveIndex;e+=t,e<-1?e=this.suggestionsList.length:e>this.suggestionsList.length+1&&(e=0),this.suggestionActiveIndex=e;const i=this.suggestionsList[e];this.inputValue=i?i.title:this.searchQuery},onKeyDownEscape(t){t.preventDefault(),this.isExpanded=!1},getSuggestionId:t=>`wvui-typeahead-search-suggestion-${t.id}`,onSubmit(){const t={index:this.suggestionActiveIndex,numberOfResults:this.suggestionsList.length};this.$emit("submit",t)}}});const E={};var q=a(A,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wvui-typeahead-search",class:t.rootClasses,attrs:{role:"combobox","aria-expanded":t.isExpandedString,"aria-haspopup":"listbox","aria-owns":t.suggestionsId},on:{mouseover:t.onRootMouseOver,mouseout:t.onRootMouseOut,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onKeyDownUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onKeyDownDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)?null:t.onKeyDownEscape(e)}]}},[i("form",{staticClass:"wvui-typeahead-search__form",attrs:{id:t.id,action:t.formAction},on:{submit:t.onSubmit}},[i("div",{staticClass:"wvui-typeahead-search__wrapper"},[i("wvui-input",t._b({staticClass:"wvui-typeahead-search__input",attrs:{"start-icon":t.startIcon,value:t.inputValue,type:t.InputType.Search,name:"search",dir:"auto",autocapitalize:"off",autocomplete:"off","aria-autocomplete":"list","aria-controls":t.suggestionsId,"aria-activedescendant":t.activeSuggestionId},on:{input:t.onInput,blur:t.onInputBlur,focus:t.onInputFocus}},"wvui-input",t.$attrs,!1)),t._v(" "),t._t("default"),t._v(" "),i("ol",{staticClass:"wvui-typeahead-search__suggestions",attrs:{id:t.suggestionsId,role:"listbox","aria-label":t.suggestionsLabel}},[t._l(t.suggestionsList,(function(e,s){return i("li",{key:s,attrs:{role:"option"}},[i("wvui-typeahead-suggestion",{key:e.id,staticClass:"wvui-typeahead-search__suggestion",attrs:{id:t.getSuggestionId(e),"article-path":t.formAction,query:t.searchQuery,active:t.suggestionActiveIndex===s,suggestion:e,"show-thumbnail":t.showThumbnail,"show-description":t.showDescription},on:{mouseover:function(e){return t.onSuggestionMouseOver(s)},click:function(i){return t.onSuggestionClick(e)}},nativeOn:{mousedown:function(e){return t.onSuggestionMouseDown(e)}}})],1)})),t._v(" "),i("li",{attrs:{role:"option"}},[i("a",{ref:"footer",staticClass:"wvui-typeahead-search__suggestions__footer",class:t.footerClasses,attrs:{id:t.footerId,tabindex:"-1",href:t.footerUrl},on:{mouseover:t.onFooterHover,mousedown:t.onSuggestionMouseDown,click:function(e){return t.onSuggestionClick()}}},[i("wvui-icon",{staticClass:"wvui-typeahead-search__suggestions-footer-article-icon",attrs:{icon:t.articleIcon}}),t._v(" "),i("span",{staticClass:"wvui-typeahead-search__suggestions__footer__text"},[t._v(t._s(t.footerSearchText)+" "),i("strong",[t._v('"'+t._s(t.searchQuery)+'"')])])],1)])],2)],2),t._v(" "),i("wvui-button",{staticClass:"wvui-typeahead-search__submit"},[t._v("\n\t\t\t"+t._s(t.buttonLabel)+"\n\t\t")])],1)])}),[],!1,(function(t){for(let e in E)this[e]=E[e]}),null,null,null).exports;Object.defineProperty(t,"Vue",{enumerable:!0,get:function(){return o.default}}),t.WvuiButton=l,t.WvuiIcon=v,t.WvuiInput=_,t.WvuiTypeaheadSearch=q,t.WvuiTypeaheadSuggestion=k,t.restSearchClient=O,Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"}));