/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=e.get(this.cssText);return t&&void 0===i&&(e.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",i),n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new s(o,i)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return o(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window.trustedTypes,a=h?h.emptyScript:"",d=window.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},u=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Eh(e,i);void 0!==s&&(this._$Eu.set(s,e),t.push(s))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const o=this[t];this[i]=s,this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Eh(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const e=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{t?i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{const e=document.createElement("style"),s=window.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=t.cssText,i.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$ES(t,i,e=v){var s,o;const n=this.constructor._$Eh(t,e);if(void 0!==n&&!0===e.reflect){const r=(null!==(o=null===(s=e.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:c.toAttribute)(i,e.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,i){var e,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,h=null!==(o=null!==(s=null===(e=l)||void 0===e?void 0:e.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:c.fromAttribute;this._$Ei=r,this[r]=h(i,t.type),this._$Ei=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:p}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const b=globalThis.trustedTypes,g=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,m="?"+y,w=`<${m}>`,$=document,k=(t="")=>$.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,A=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,M=/"/g,U=/^(?:script|style|textarea|title)$/i,N=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),O=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),q=new WeakMap,z=$.createTreeWalker($,129,null,!1),L=(t,i)=>{const e=t.length-1,s=[];let o,n=2===i?"<svg>":"",r=C;for(let i=0;i<e;i++){const e=t[i];let l,h,a=-1,d=0;for(;d<e.length&&(r.lastIndex=d,h=r.exec(e),null!==h);)d=r.lastIndex,r===C?"!--"===h[1]?r=T:void 0!==h[1]?r=A:void 0!==h[2]?(U.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=_):void 0!==h[3]&&(r=_):r===_?">"===h[0]?(r=null!=o?o:C,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?_:'"'===h[3]?M:E):r===M||r===E?r=_:r===T||r===A?r=C:(r=_,o=void 0);const c=r===_&&t[i+1].startsWith("/>")?" ":"";n+=r===C?e+w:a>=0?(s.push(l),e.slice(0,a)+"$lit$"+e.slice(a)+y+c):e+y+(-2===a?(s.push(void 0),i):c)}const l=n+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(l):l,s]};class H{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=L(t,i);if(this.el=H.createElement(h,e),z.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=z.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const e=a[n++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?D:"?"===i[1]?B:"@"===i[1]?Z:I})}else l.push({type:6,index:o})}for(const i of t)s.removeAttribute(i)}if(U.test(s.tagName)){const t=s.textContent.split(y),i=t.length-1;if(i>0){s.textContent=b?b.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],k()),z.nextNode(),l.push({type:2,index:++o});s.append(t[i],k())}}}else if(8===s.nodeType)if(s.data===m)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)l.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,i){const e=$.createElement("template");return e.innerHTML=t,e}}function R(t,i,e=t,s){var o,n,r,l;if(i===O)return i;let h=void 0!==s?null===(o=e._$Cl)||void 0===o?void 0:o[s]:e._$Cu;const a=x(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,e,s)),void 0!==s?(null!==(r=(l=e)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=h:e._$Cu=h),void 0!==h&&(i=R(t,h._$AS(t,i.values),h,s)),i}class K{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:e},parts:s}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:$).importNode(e,!0);z.currentNode=o;let n=z.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new P(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new G(n,this,t)),this.v.push(i),h=s[++l]}r!==(null==h?void 0:h.index)&&(n=z.nextNode(),r++)}return o}m(t){let i=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class P{constructor(t,i,e,s){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=R(this,t,i),x(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var i;return S(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==j&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k($.createTextNode(t)),this._$AH=t}T(t){var i;const{values:e,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=H.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(e);else{const t=new K(o,this),i=t.p(this.options);t.m(e),this.k(i),this._$AH=t}}_$AC(t){let i=q.get(t.strings);return void 0===i&&q.set(t.strings,i=new H(t)),i}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const o of t)s===i.length?i.push(e=new P(this.M(k()),this.M(k()),this,this.options)):e=i[s],e._$AI(o),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class I{constructor(t,i,e,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const o=this.strings;let n=!1;if(void 0===o)t=R(this,t,i,0),n=!x(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=R(this,s[e+r],i,r),l===O&&(l=this._$AH[r]),n||(n=!x(l)||l!==this._$AH[r]),l===j?t=j:t!==j&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.C(t)}C(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends I{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===j?void 0:t}}const J=b?b.emptyScript:"";class B extends I{constructor(){super(...arguments),this.type=4}C(t){t&&t!==j?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends I{constructor(t,i,e,s,o){super(t,i,e,s,o),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=R(this,t,i,0))&&void 0!==e?e:j)===O)return;const s=this._$AH,o=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==j&&(s===j||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const V=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W,F;null==V||V(H,P),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.4");class Q extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,e)=>{var s,o;const n=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==e?void 0:e.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new P(i.insertBefore(k(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}Q.finalized=!0,Q._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:Q});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Q}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tt(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):Y(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function it(t){return tt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var et;null===(et=window.HTMLSlotElement)||void 0===et||et.prototype.assignedElements;class st{constructor(t){this.host=t,this._data=[],(this.host=t).addController(this)}get data(){return this._data}hostConnected(){}restoreTodoList(t){var i;this._data=[...JSON.parse(null!==(i=window.localStorage.getItem(t))&&void 0!==i?i:"[]")],this.host.requestUpdate()}saveTodoList(t){window.localStorage.setItem(t,JSON.stringify(this.data)),window.alert("completed to save.")}createTodo(t){this._data=[...this._data,{id:""+(new Date).getTime()*Math.random(),text:t,completed:!1,createdAt:(new Date).getTime()}],this.host.requestUpdate()}toggleTodoCompleted(t){this._data=this.data.map((i=>i.id!==t?i:{...i,completed:!i.completed})),this.host.requestUpdate()}clearTodoList(){this._data=[],this.host.requestUpdate()}}const ot=o(['"Hiragino Kaku Gothic ProN"','"Hiragino Sans"','"Helvetica Neue"',"Arial","Meiryo","sans-serif"].join(",")),nt="#fafafa",rt={default:{font:"#212121",background:"#e8eaed"},primary:{font:nt,background:"#212121"},secondary:{font:nt,background:"#2e7c31"},disabled:{font:nt,background:"#62727b"}},lt=[n`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`,n`
    li {
      list-style: none;
    }

    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-style: solid;
      border-width: 0;
    }

    * {
      font-family: ${ot};
    }

    body {
      line-height: 1;
      color: ${o(rt.default.font)};
      background-color: ${o(rt.default.background)};
    }

    p {
      word-break: break-all;
      white-space: pre-line;
    }

    button,
    input {
      padding: 0;
      margin: 0;
      appearance: none;
      cursor: pointer;
      &:disabled {
        cursor: default;
      }
    }

    select {
      appearance: none;
      &:-ms-expand {
        display: none;
      }
    }

    button,
    input,
    textarea,
    a,
    select {
      ${ht="rgba(198, 167, 0, 0.8)",n`
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 3px solid ${o(ht)};
    outline-offset: -2px;
  }
`};
    }
  `];var ht,at=function(t,i,e,s){for(var o,n=arguments.length,r=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,e,r):o(i,e))||r);return n>3&&r&&Object.defineProperty(i,e,r),r};let dt=class extends Q{constructor(){super(...arguments),this.storageKey="",this.heading="",this.hideCompleted=!1,this.text="",this.todoList=new st(this)}connectedCallback(){if(super.connectedCallback(),!this.storageKey)throw Error("storageKey property is required.");this.todoList.restoreTodoList(this.storageKey)}disconnectedCallback(){super.disconnectedCallback()}render(){const t=this.hideCompleted?this.todoList.data.filter((({completed:t})=>!t)):this.todoList.data;return N`<section>
      <h3 class="title">${this.heading}</h3>
      <div class="input-wrapper">
        <input
          class="todo-input"
          type="text"
          .value=${this.text}
          @input=${this.changeText}
          placeholder="please input task."
        />
        <button @click=${this.createTodo} ?disabled=${!this.text.length}>Add</button>
      </div>
      <ul class="todo-list">
        ${t.map((({id:t,text:i,completed:e})=>N`
              <li
                class=${e?"todo-list-item completed":"todo-list-item"}
                @click=${()=>this.toggleTodo(t)}
              >
                ${i}
              </li>
            `))}
      </ul>
      <label for="hide-completed-checkbox">
        <input
          type="checkbox"
          id="hide-completed-checkbox"
          @change=${this.toggleHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
      <div class="bottom-wrapper">
        <button @click=${this.saveTodoList} ?disabled=${!this.todoList.data.length}>Save</button>
        <button
          class="clear-button"
          @click=${this.clearTodoList}
          ?disabled=${!this.todoList.data.length}
        >
          Clear
        </button>
      </div>
    </section>`}toggleHideCompleted(t){this.hideCompleted=t.target.checked}changeText(t){this.text=t.target.value}createTodo(){this.todoList.createTodo(this.text),this.text=""}toggleTodo(t){this.todoList.toggleTodoCompleted(t)}saveTodoList(){if(!this.storageKey)throw Error("storageKey property is required.");this.todoList.saveTodoList(this.storageKey)}clearTodoList(){this.todoList.clearTodoList()}};dt.styles=[...lt,n`
      :host {
        display: block;
        border: 1px solid #888888;
        background-color: #e8eaed;
        padding: 16px;
        max-width: 800px;
      }

      button {
        min-width: 120px;
        height: 36px;
        font-size: 12px;
        font-weight: bold;
        padding: 0 8px;
        color: #ffffff;
        background-color: #000000;
      }
      button:disabled {
        background-color: #686868;
        cursor: default;
      }

      .title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .input-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .todo-input {
        flex: 1 1 auto;
        height: 36px;
        padding: 0 4px;
      }

      .todo-list {
        margin: 8px;
      }
      .todo-list-item {
        list-style: inside;
        cursor: pointer;
      }
      .completed {
        text-decoration-line: line-through;
        color: #777777;
      }
      input[type='checkbox'] {
        appearance: auto;
      }

      .bottom-wrapper {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .clear-button {
        background-color: #c62828;
        color: #fafafa;
      }
    `],at([tt({type:String})],dt.prototype,"storageKey",void 0),at([tt({type:String,attribute:"title"})],dt.prototype,"heading",void 0),at([it()],dt.prototype,"hideCompleted",void 0),at([it()],dt.prototype,"text",void 0),dt=at([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){window.customElements.define(t,i)}}})(t,i))("todo-list")],dt);export{dt as TodoList};
