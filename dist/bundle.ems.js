import Vue from 'vue';
import VueRouter from 'vue-router';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

!function(e,t,n){if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var r,i=0,o=(r=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,{matchesSelector:function(e,t){return e instanceof HTMLElement&&r.call(e,t)},addMethod:function(e,t,n){var r=e[t];e[t]=function(){return n.length==arguments.length?n.apply(this,arguments):"function"==typeof r?r.apply(this,arguments):void 0};},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback);},checkChildNodesRecursively:function(e,t,n,r){for(var i,l=0;i=e[l];l++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&o.checkChildNodesRecursively(i.childNodes,t,n,r);},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return void 0===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}),l=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null;};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null);}},e.prototype.beforeAdding=function(e){this._beforeAdding=e;},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e;},e}(),c=function(t,r){var i=new l,c=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,o=n.target;o!==e.document&&o!==e||(o=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n);});var l=t(n.options);i.observe(o,l),n.observer=i,n.me=c;}),i.beforeRemoving(function(e){e.observer.disconnect();}),this.bindEvent=function(e,t,n){t=o.mergeArrays(a,t);for(var r=o.toElementsArray(this),l=0;l<r.length;l++)i.addEvent(r[l],e,t,n);},this.unbindEvent=function(){var e=o.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return !0;return !1});},this.unbindEventWithSelectorOrCallback=function(e){var t,r=o.toElementsArray(this),l=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===l)return !0;return !1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return !0;return !1},i.removeEvent(t);},this.unbindEventWithSelectorAndCallback=function(e,t){var r=o.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return !0;return !1});},this},a=new function(){var e={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};function t(e,t,r){return !(!o.matchesSelector(e,t.selector)||(e._id===n&&(e._id=i++),-1!=t.firedElems.indexOf(e._id))||(t.firedElems.push(e._id),0))}var r=(a=new c(function(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t},function(e,n){e.forEach(function(e){var r=e.addedNodes,i=e.target,l=[];null!==r&&r.length>0?o.checkChildNodesRecursively(r,n,t,l):"attributes"===e.type&&t(i,n)&&l.push({callback:n.callback,elem:i}),o.callCallbacks(l,n);});})).bindEvent;return a.bindEvent=function(t,n,i){void 0===i?(i=n,n=e):n=o.mergeArrays(e,n);var l=o.toElementsArray(this);if(n.existing){for(var c=[],a=0;a<l.length;a++)for(var s=l[a].querySelectorAll(t),u=0;u<s.length;u++)c.push({callback:i,elem:s[u]});if(n.onceOnly&&c.length)return i.call(c[0].elem,c[0].elem);setTimeout(o.callCallbacks,1,c);}r.call(this,t,n,i);},a},s=new function(){var e={};function t(e,t){return o.matchesSelector(e,t.selector)}var n=(s=new c(function(){return {childList:!0,subtree:!0}},function(e,n){e.forEach(function(e){var r=e.removedNodes,i=[];null!==r&&r.length>0&&o.checkChildNodesRecursively(r,n,t,i),o.callCallbacks(i,n);});})).bindEvent;return s.bindEvent=function(t,r,i){void 0===i?(i=r,r=e):r=o.mergeArrays(e,r),n.call(this,t,r,i);},s};t&&h(t.fn),h(HTMLElement.prototype),h(NodeList.prototype),h(HTMLCollection.prototype),h(HTMLDocument.prototype),h(Window.prototype);var u={};return d(a,u,"unbindAllArrive"),d(s,u,"unbindAllLeave"),u}function d(e,t,n){o.addMethod(t,n,e.unbindEvent),o.addMethod(t,n,e.unbindEventWithSelectorOrCallback),o.addMethod(t,n,e.unbindEventWithSelectorAndCallback);}function h(e){e.arrive=a.bindEvent,d(a,e,"unbindArrive"),e.leave=s.bindEvent,d(s,e,"unbindLeave");}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);var e={hasCointainer:!1,containerId:"container",runOnce:!0};class t{constructor(t){const n={...t,...e};if(void 0===this.handle)throw new TypeError("Must override method");this.hasCointainer=n.hasCointainer,this.runOnce=n.runOnce,this.containerId=n.containerId;}run(e){const{containerId:t,runOnce:n,hasCointainer:r}=this;return new Promise((i,o)=>{r&&document.arrive(`#${t}`,function(){n&&document.unbindArrive(`#${t}`),i(t);}),this.handle(e),r||i("");})}}

//
//
//
//
//
//
var script = {
  name: 'App',
  data: function data() {
    return {
      name: 'Number',
      number: 0
    };
  },
  computed: {},
  methods: {}
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    { attrs: { name: "router-transitions" } },
    [_c("RouterView")],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-6aeea3e5_0", { source: "\n.page{\n  position: fixed;\n  width: inherit;\n}\n.content{\n  position: absolute;\n  margin: 0 25vw;\n  width: 50vw;\n  text-align: center;\n}\n.router-transitions-leave-active .icon-home{\n  animation: gelatine 1s;\n}\n.router-transitions-enter-active .icon-home{\n  animation: headimagehome 1s;\n}\n.router-transitions-enter-active {\n  animation: page 1s;\n}\n.router-transitions-leave-active {\n  animation: page 1s;\n}\n.router-transitions-enter-active .icon{\n  animation: headimage 1s;\n}\n.router-transitions-enter-active .content {\n  animation: fade 1s;\n}\n.router-transitions-leave-active .icon{\n  animation: headimage 1s reverse;\n}\n.router-transitions-leave-active .content {\n  animation: fade 1s reverse;\n}\n.icon{\n  position: fixed;\n  right: 100px;\n  width: 50px;\n}\n.icon img{\n  width: 100%;\n}\n.icon-home{\n  position: fixed;\n  width: 250px;\n  right: calc(50% - 125px);\n}\n.icon-home img{\n  width: 100%;\n}\n@keyframes headimagehome {\n0% {\n      opacity: 0;\n      right: calc(50% - 125px);\n      width: 250px;\n}\n50% {\n      opacity: 0;\n      right: calc(50% - 125px);\n      width: 250px;\n}\n51% {\n      opacity: 1;\n      right: calc(50% - 125px);\n      width: 250px;\n}\n100% {\n      opacity: 1;\n      right: calc(50% - 125px);\n      width: 250px;\n}\n}\n@keyframes headimage {\n0% {\n      opacity: 0;\n      right: calc(50% - 125px);\n      width: 250px;\n}\n49% {\n      opacity: 0;\n      right: calc(50% - 125px);\n      width: 250px;\n}\n50% {\n      opacity: 1;\n      right: calc(50% - 125px);\n      width: 250px;\n}\n63% {\n      opacity: 1;\n      right: calc(50% - 125px);\n      width: 250px;\n}\n100% {\n      opacity: 1;\n      right: 100px;\n      width: 50px;\n}\n}\n@keyframes fade {\n0%,50%  {\n      opacity: 0;\n      transform: translateY(250px);\n}\n75% {\n      transform: translateY(250px);\n      opacity: 1;\n}\n100% {\n      transform: translateY(0px);\n      opacity: 1;\n}\n}\n@keyframes page {\n0%, 100% {\n      opacity: 1;\n}\n}\n@keyframes gelatine{\n0%{\n    transform:scale(1, 1);\n    opacity: 1;\n}\n13%{\n    transform:scale(.9, 1.1);\n    opacity: 1;\n}\n25%{\n    transform:scale(1.1, .9);\n    opacity: 1;\n}\n37%{\n    transform:scale(.95, 1.05);\n    opacity: 1;\n}\n50%{\n    transform:scale(1, 1);\n    opacity: 1;\n}\n51%, 100%{\n    transform:scale(1, 1);\n    opacity:0;\n}\n}\n", map: {"version":3,"sources":["/home/jose/projects/mediasan/modules/vue-content-ssa/src/application/App.vue"],"names":[],"mappings":";AAuBA;EACA,eAAA;EACA,cAAA;AACA;AACA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;AACA;AACA;EACA,sBAAA;AACA;AACA;EACA,2BAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,+BAAA;AACA;AACA;EACA,0BAAA;AACA;AACA;EACA,eAAA;EACA,YAAA;EACA,WAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,eAAA;EACA,YAAA;EACA,wBAAA;AACA;AACA;EACA,WAAA;AACA;AAEA;AACA;MACA,UAAA;MACA,wBAAA;MACA,YAAA;AACA;AACA;MACA,UAAA;MACA,wBAAA;MACA,YAAA;AACA;AACA;MACA,UAAA;MACA,wBAAA;MACA,YAAA;AACA;AACA;MACA,UAAA;MACA,wBAAA;MACA,YAAA;AACA;AACA;AACA;AACA;MACA,UAAA;MACA,wBAAA;MACA,YAAA;AACA;AACA;MACA,UAAA;MACA,wBAAA;MACA,YAAA;AACA;AACA;MACA,UAAA;MACA,wBAAA;MACA,YAAA;AACA;AACA;MACA,UAAA;MACA,wBAAA;MACA,YAAA;AACA;AACA;MACA,UAAA;MACA,YAAA;MACA,WAAA;AACA;AACA;AACA;AACA;MACA,UAAA;MACA,4BAAA;AACA;AACA;MACA,4BAAA;MACA,UAAA;AACA;AACA;MACA,0BAAA;MACA,UAAA;AACA;AACA;AACA;AACA;MACA,UAAA;AACA;AACA;AACA;AACA;IACA,qBAAA;IACA,UAAA;AACA;AACA;IACA,wBAAA;IACA,UAAA;AACA;AACA;IACA,wBAAA;IACA,UAAA;AACA;AACA;IACA,0BAAA;IACA,UAAA;AACA;AACA;IACA,qBAAA;IACA,UAAA;AAEA;AACA;IACA,qBAAA;IACA,SAAA;AACA;AACA","file":"App.vue","sourcesContent":["<template>\n  <transition name=\"router-transitions\">\n    <RouterView />\n  </transition>\n</template>\n\n<script>\n\nexport default {\n  name: 'App',\n  data () {\n    return {\n      name: 'Number',\n      number: 0\n    }\n  },\n  computed: {\n  },\n  methods: {\n  }\n}\n</script>\n<style>\n.page{\n  position: fixed;\n  width: inherit;\n}\n.content{\n  position: absolute;\n  margin: 0 25vw;\n  width: 50vw;\n  text-align: center;\n}\n.router-transitions-leave-active .icon-home{\n  animation: gelatine 1s;\n}\n.router-transitions-enter-active .icon-home{\n  animation: headimagehome 1s;\n}\n.router-transitions-enter-active {\n  animation: page 1s;\n}\n.router-transitions-leave-active {\n  animation: page 1s;\n}\n.router-transitions-enter-active .icon{\n  animation: headimage 1s;\n}\n.router-transitions-enter-active .content {\n  animation: fade 1s;\n}\n.router-transitions-leave-active .icon{\n  animation: headimage 1s reverse;\n}\n.router-transitions-leave-active .content {\n  animation: fade 1s reverse;\n}\n.icon{\n  position: fixed;\n  right: 100px;\n  width: 50px;\n}\n.icon img{\n  width: 100%;\n}\n.icon-home{\n  position: fixed;\n  width: 250px;\n  right: calc(50% - 125px);\n}\n.icon-home img{\n  width: 100%;\n}\n\n@keyframes headimagehome {\n    0% {\n      opacity: 0;\n      right: calc(50% - 125px);\n      width: 250px;\n    }\n    50% {\n      opacity: 0;\n      right: calc(50% - 125px);\n      width: 250px;\n    }\n    51% {\n      opacity: 1;\n      right: calc(50% - 125px);\n      width: 250px;\n    }\n    100% {\n      opacity: 1;\n      right: calc(50% - 125px);\n      width: 250px;\n    }\n}\n@keyframes headimage {\n    0% {\n      opacity: 0;\n      right: calc(50% - 125px);\n      width: 250px;\n    }\n    49% {\n      opacity: 0;\n      right: calc(50% - 125px);\n      width: 250px;\n    }\n    50% {\n      opacity: 1;\n      right: calc(50% - 125px);\n      width: 250px;\n    }\n    63% {\n      opacity: 1;\n      right: calc(50% - 125px);\n      width: 250px;\n    }\n    100% {\n      opacity: 1;\n      right: 100px;\n      width: 50px;\n    }\n}\n@keyframes fade {\n    0%,50%  {\n      opacity: 0;\n      transform: translateY(250px);\n    }\n    75% {\n      transform: translateY(250px);\n      opacity: 1;\n    }\n    100% {\n      transform: translateY(0px);\n      opacity: 1;\n    }\n}\n@keyframes page {\n    0%, 100% {\n      opacity: 1;\n    }\n}\n@keyframes gelatine{\n  0%{\n    transform:scale(1, 1);\n    opacity: 1;\n  }\n  13%{\n    transform:scale(.9, 1.1);\n    opacity: 1;\n  }\n  25%{\n    transform:scale(1.1, .9);\n    opacity: 1;\n  }\n  37%{\n    transform:scale(.95, 1.05);\n    opacity: 1;\n  }\n  50%{\n    transform:scale(1, 1);\n    opacity: 1;\n\n  }\n  51%, 100%{\n    transform:scale(1, 1);\n    opacity:0;\n  }\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var App = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._m(0)
};
var __vue_staticRenderFns__$1 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "page home" }, [
      _c("div", { staticClass: "icon-home" }, [
        _c("img", {
          attrs: {
            src:
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOCAwIDBoOTcuOTJMMTI4IDUxLjIgMTU3LjQ0IDBoNDcuMzZ6IiBmaWxsPSIjNDFCODgzIi8+CjxwYXRoIGQ9Ik0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDggNTAuNTYgMEgweiIgZmlsbD0iIzQxQjg4MyIvPgo8cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+Cjwvc3ZnPgo=",
            alt: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "home-content" }, [
        _c("h1", [_vm._v("Vue SSA example application")])
      ])
    ])
  }
];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-67bcb9f8_0", { source: "\n.home-content[data-v-67bcb9f8]{\n  position: absolute;\n  top: 250px;\n  margin: 0 25vw;\n  width: 50vw;\n  text-align: center;\n}\n", map: {"version":3,"sources":["/home/jose/projects/mediasan/modules/vue-content-ssa/src/application/components/Pages/Home.vue"],"names":[],"mappings":";AAkBA;EACA,kBAAA;EACA,UAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;AACA","file":"Home.vue","sourcesContent":["<template>\n  <div class=\"page home\">\n    <div class=\"icon-home\">\n      <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOCAwIDBoOTcuOTJMMTI4IDUxLjIgMTU3LjQ0IDBoNDcuMzZ6IiBmaWxsPSIjNDFCODgzIi8+CjxwYXRoIGQ9Ik0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDggNTAuNTYgMEgweiIgZmlsbD0iIzQxQjg4MyIvPgo8cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+Cjwvc3ZnPgo=\" alt=\"\">\n    </div>\n    <div class=\"home-content\">\n      <h1>Vue SSA example application</h1>\n\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n}\n</script>\n\n<style lang=\"css\" scoped>\n  .home-content{\n    position: absolute;\n    top: 250px;\n    margin: 0 25vw;\n    width: 50vw;\n    text-align: center;\n  }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-67bcb9f8";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var Home = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._m(0)
};
var __vue_staticRenderFns__$2 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "page about" }, [
      _c("div", { staticClass: "icon" }, [
        _c("img", {
          attrs: {
            src:
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOCAwIDBoOTcuOTJMMTI4IDUxLjIgMTU3LjQ0IDBoNDcuMzZ6IiBmaWxsPSIjNDFCODgzIi8+CjxwYXRoIGQ9Ik0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDggNTAuNTYgMEgweiIgZmlsbD0iIzQxQjg4MyIvPgo8cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+Cjwvc3ZnPgo=",
            alt: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("h1", [_vm._v("About suckless serverless applications")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "For questions about managing your applications, services and more, check out our FAQs. If you still have questions, see below for more ways to connect with us."
          )
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v("mor about us in github")]),
        _vm._v(" "),
        _c("p", [
          _vm._v("you can take a look at "),
          _c("a", { attrs: { href: "" } }, [_vm._v("here")])
        ])
      ])
    ])
  }
];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-5baf0f30_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"About.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-5baf0f30";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var About = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._m(0)
};
var __vue_staticRenderFns__$3 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "page news" }, [
      _c("div", { staticClass: "icon" }, [
        _c("img", {
          attrs: {
            src:
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOCAwIDBoOTcuOTJMMTI4IDUxLjIgMTU3LjQ0IDBoNDcuMzZ6IiBmaWxsPSIjNDFCODgzIi8+CjxwYXRoIGQ9Ik0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDggNTAuNTYgMEgweiIgZmlsbD0iIzQxQjg4MyIvPgo8cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+Cjwvc3ZnPgo=",
            alt: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("h1", [_vm._v("News")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "This is just an example and none of the information below will be updated"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "grid" }, [
          _c("div", { staticClass: "cell" }, [_vm._v("1")]),
          _vm._v(" "),
          _c("div", { staticClass: "cell" }, [_vm._v("2")]),
          _vm._v(" "),
          _c("div", { staticClass: "cell" }, [_vm._v("3")]),
          _vm._v(" "),
          _c("div", { staticClass: "cell" }, [_vm._v("4")]),
          _vm._v(" "),
          _c("div", { staticClass: "cell" }, [_vm._v("5")]),
          _vm._v(" "),
          _c("div", { staticClass: "cell" }, [_vm._v("6")]),
          _vm._v(" "),
          _c("div", { staticClass: "cell" }, [_vm._v("7")]),
          _vm._v(" "),
          _c("div", { staticClass: "cell" }, [_vm._v("8")]),
          _vm._v(" "),
          _c("div", { staticClass: "cell" }, [_vm._v("9")])
        ])
      ])
    ])
  }
];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-09f56637_0", { source: "\n.grid[data-v-09f56637]{\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n.cell[data-v-09f56637]{\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(100, 100, 100, 0.8);\n  border-radius: 10px;\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n}\n", map: {"version":3,"sources":["/home/jose/projects/mediasan/modules/vue-content-ssa/src/application/components/Pages/News.vue"],"names":[],"mappings":";AA6BA;EACA,aAAA;EACA,qCAAA;EACA,cAAA;EACA,mCAAA;AACA;AACA;EACA,0CAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;AACA","file":"News.vue","sourcesContent":["<template>\n  <div class=\"page news\">\n    <div class=\"icon\">\n      <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOCAwIDBoOTcuOTJMMTI4IDUxLjIgMTU3LjQ0IDBoNDcuMzZ6IiBmaWxsPSIjNDFCODgzIi8+CjxwYXRoIGQ9Ik0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDggNTAuNTYgMEgweiIgZmlsbD0iIzQxQjg4MyIvPgo8cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+Cjwvc3ZnPgo=\" alt=\"\">\n    </div>\n    <div class=\"content\">\n      <h1>News</h1>\n      <p>This is just an example and none of the information below will be updated</p>\n      <div class=\"grid\">\n          <div class=\"cell\">1</div>\n          <div class=\"cell\">2</div>\n          <div class=\"cell\">3</div>\n          <div class=\"cell\">4</div>\n          <div class=\"cell\">5</div>\n          <div class=\"cell\">6</div>\n          <div class=\"cell\">7</div>\n          <div class=\"cell\">8</div>\n          <div class=\"cell\">9</div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n}\n</script>\n\n<style lang=\"css\" scoped>\n  .grid{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 10px;\n    grid-auto-rows: minmax(100px, auto);\n  }\n  .cell{\n    background-color: rgba(255, 255, 255, 0.8);\n    border: 1px solid rgba(100, 100, 100, 0.8);\n    border-radius: 10px;\n    padding: 20px;\n    font-size: 30px;\n    text-align: center;\n  }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-09f56637";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var News = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._m(0)
};
var __vue_staticRenderFns__$4 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "page contacts" }, [
      _c("div", { staticClass: "icon" }, [
        _c("img", {
          attrs: {
            src:
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOCAwIDBoOTcuOTJMMTI4IDUxLjIgMTU3LjQ0IDBoNDcuMzZ6IiBmaWxsPSIjNDFCODgzIi8+CjxwYXRoIGQ9Ik0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDggNTAuNTYgMEgweiIgZmlsbD0iIzQxQjg4MyIvPgo8cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+Cjwvc3ZnPgo=",
            alt: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("h1", [_vm._v("Contacts us")]),
        _vm._v(" "),
        _c("h2", { staticClass: "green" }, [_vm._v("We are here to help.")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "For questions about managing your applications, services and more, check out our FAQs. If you still have questions, see below for more ways to connect with us."
          )
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v("contact us via github")]),
        _vm._v(" "),
        _c("p", [
          _vm._v("you can submit tickets "),
          _c("a", { attrs: { href: "" } }, [_vm._v("here")])
        ])
      ])
    ])
  }
];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-2aca9d00_0", { source: "\nh1 {\n  color:#808080;\n}\n", map: {"version":3,"sources":["/home/jose/projects/mediasan/modules/vue-content-ssa/src/application/components/Pages/Contacts.vue"],"names":[],"mappings":";AAsBA;EACA,aAAA;AACA","file":"Contacts.vue","sourcesContent":["<template>\n  <div class=\"page contacts\">\n    <div class=\"icon\">\n      <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOCAwIDBoOTcuOTJMMTI4IDUxLjIgMTU3LjQ0IDBoNDcuMzZ6IiBmaWxsPSIjNDFCODgzIi8+CjxwYXRoIGQ9Ik0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDggNTAuNTYgMEgweiIgZmlsbD0iIzQxQjg4MyIvPgo8cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+Cjwvc3ZnPgo=\" alt=\"\">\n    </div>\n    <div class=\"content\">\n      <h1>Contacts us</h1>\n      <h2 class=\"green\">We are here to help.</h2>\n      <p>For questions about managing your applications, services and more, check out our FAQs. If you still have questions, see below for more ways to connect with us.</p>\n\n      <h2>contact us via github</h2>\n      <p>you can submit tickets <a href=\"\">here</a> </p>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n}\n</script>\n\n<style>\nh1 {\n  color:#808080;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var Contacts = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

Vue.use(VueRouter);

var VueApplication =
/*#__PURE__*/
function (_Application) {
  _inherits(VueApplication, _Application);

  function VueApplication() {
    _classCallCheck(this, VueApplication);

    return _possibleConstructorReturn(this, _getPrototypeOf(VueApplication).apply(this, arguments));
  }

  _createClass(VueApplication, [{
    key: "handle",
    value: function handle(root) {
      var routes = [{
        path: '/',
        component: Home
      }, {
        path: '/home',
        component: Home
      }, {
        path: '/news',
        component: News
      }, {
        path: '/contacts',
        component: Contacts
      }, {
        path: '/about',
        component: About
      }];
      var router = new VueRouter({
        routes: routes // short for `routes: routes`

      });
      return new Promise(function (resolve, reject) {
        new Vue({
          router: router,
          render: function render(h) {
            return h(App);
          }
        }).$mount('#' + root);
      });
    }
  }]);

  return VueApplication;
}(t);

export { VueApplication };
