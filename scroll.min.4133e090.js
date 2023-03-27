// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/scroll.min.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Skroll v2.0.1, akzhy.com/shelf/skroll | github.com/akzhy/skroll */
Skroll = function Skroll(t) {
  this.settings = t || {}, this.settings.mobile = void 0 !== this.settings.mobile && this.settings.mobile, this.referenceElement = void 0 === this.settings.reference ? window : this.get(this.settings.reference)[0], this.elements = [], this.data = {}, this.animations = {
    zoomIn: {
      start: function start(t) {
        t.style.transform = "scale(.1,.1)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "scale(1,1)", t.style.opacity = 1;
      }
    },
    fadeInLeft: {
      start: function start(t) {
        t.style.transform = "translate(-50%,0)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0)", t.style.opacity = 1;
      }
    },
    fadeInRight: {
      start: function start(t) {
        t.style.transform = "translate(50%,0)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0)", t.style.opacity = 1;
      }
    },
    fadeInLeftBig: {
      start: function start(t) {
        t.style.transform = "translate(-100%,0)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0)", t.style.opacity = 1;
      }
    },
    fadeInRightBig: {
      start: function start(t) {
        t.style.transform = "translate(100%,0)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0)", t.style.opacity = 1;
      }
    },
    fadeInUp: {
      start: function start(t) {
        t.style.transform = "translate(0,50%)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0,0%)", t.style.opacity = 1;
      }
    },
    fadeInDown: {
      start: function start(t) {
        t.style.transform = "translate(0,-50%)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0,0%)", t.style.opacity = 1;
      }
    },
    slideInLeft: {
      start: function start(t) {
        t.style.transform = "translate(-50%,0) scale(.8,.8)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    slideInLeftBig: {
      start: function start(t) {
        t.style.transform = "translate(-100%,0) scale(.8,.8)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    slideInRight: {
      start: function start(t) {
        t.style.transform = "translate(50%,0) scale(.8,.8)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    slideInRightBig: {
      start: function start(t) {
        t.style.transform = "translate(-100%,0) scale(.8,.8)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    flipInX: {
      start: function start(t) {
        t.style.transform = "rotateX(90deg)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "rotateX(0deg)", t.style.opacity = 1;
      }
    },
    flipInY: {
      start: function start(t) {
        t.style.transform = "rotateY(90deg)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "rotateY(0deg)", t.style.opacity = 1;
      }
    },
    rotateRightIn: {
      start: function start(t) {
        t.style.transform = "rotate(45deg)", t.style["transform-origin"] = "0 100%", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "rotate(0deg)", t.style.opacity = 1;
      }
    },
    rotateLeftIn: {
      start: function start(t) {
        t.style.transform = "rotate(-45deg)", t.style["transform-origin"] = "0 100%", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "rotate(0deg)", t.style.opacity = 1;
      }
    },
    growInLeft: {
      start: function start(t) {
        t.style.transform = "translate(-100%,0) scale(.1,.1)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    },
    growInRight: {
      start: function start(t) {
        t.style.transform = "translate(100%,0) scale(.1,.1)", t.style.opacity = 0;
      },
      end: function end(t) {
        t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1;
      }
    }
  };
}, Skroll.prototype.get = function (t) {
  return document.querySelectorAll(t);
}, Skroll.prototype.inViewport = function (t, e) {
  var n, a, s, i, o;
  if (this.referenceElement == window) n = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0), s = (a = this.data[t.getAttribute("data-skroll-id")].top) + t.offsetHeight, i = n + screen.availHeight * e.triggerTop, o = n + screen.availHeight * e.triggerBottom;else {
    var r = this.referenceElement;
    n = r.scrollTop, s = (a = this.data[t.getAttribute("data-skroll-id")].top) + t.offsetHeight, i = n + r.offsetHeight * e.triggerTop, o = n + r.offsetHeight * e.triggerBottom;
  }
  return s > i && a < o;
}, Skroll.prototype.getScrollStatus = function (t, e) {
  return this.inViewport(t, e) ? (this.data[t.getAttribute("data-skroll-id")].inView = !0, {
    action: "enter",
    data: {
      shown: this.data[t.getAttribute("data-skroll-id")].shown
    }
  }) : this.data[t.getAttribute("data-skroll-id")].inView ? (this.data[t.getAttribute("data-skroll-id")].inView = !1, {
    action: "leave",
    data: {
      shown: this.data[t.getAttribute("data-skroll-id")].shown
    }
  }) : {
    action: "idle",
    data: {
      shown: this.data[t.getAttribute("data-skroll-id")].shown
    }
  };
}, Skroll.prototype.add = function (t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = {
    triggerTop: e.triggerTop || .2,
    triggerBottom: e.triggerBottom || .8,
    delay: e.delay || 0,
    duration: e.duration || 500,
    animation: e.animation || "zoomIn",
    easing: e.easing || "ease",
    wait: e.delay || 0,
    repeat: e.repeat || !1,
    onEnter: e.onEnter || !1,
    onLeave: e.onLeave || !1
  };
  return this.elements.push({
    element: t,
    settings: n
  }), this;
}, Skroll.prototype.recalcPosition = function () {
  var t = this;
  this.elements.forEach(function (e, n) {
    t.get(e.element).forEach(function (e, n) {
      var a = e.style.transform;
      e.style.transform = "none", setTimeout(function () {
        var n = e.getBoundingClientRect(),
            s = t.referenceElement == window ? n.top + t.referenceElement.scrollY : n.top + t.referenceElement.scrollTop;
        t.data[e.getAttribute("data-skroll-id")].top = s, e.style.transform = a;
      }, 50);
    });
  });
}, Skroll.prototype.throttle = function (t, e, n) {
  var a, s;
  return e || (e = 250), function () {
    var i = n || this,
        o = +new Date(),
        r = arguments;
    a && o < a + e ? (clearTimeout(s), s = setTimeout(function () {
      a = o, t.apply(i, r);
    }, e)) : (a = o, t.apply(i, r));
  };
}, Skroll.prototype.addAnimation = function (t, e) {
  return this.animations[t] = e, this;
}, Skroll.prototype.init = function () {
  var t = this;
  if (!this.settings.mobile && screen.width < 600) return this;
  var e = 0;
  return this.elements.forEach(function (n, a) {
    t.get(n.element).forEach(function (a, s) {
      a.setAttribute("data-skroll-id", e);
      var i = a.getBoundingClientRect(),
          o = t.referenceElement == window ? i.top + t.referenceElement.scrollY : i.top + t.referenceElement.scrollTop;
      t.data[a.getAttribute("data-skroll-id")] = {}, t.data[a.getAttribute("data-skroll-id")].inView = !1, t.data[a.getAttribute("data-skroll-id")].shown = !1, t.data[a.getAttribute("data-skroll-id")].top = o, t.data[a.getAttribute("data-skroll-id")].oef = !1, t.data[a.getAttribute("data-skroll-id")].olf = !1, "string" == typeof n.settings.animation && "none" != n.settings.animation ? (t.animations[n.settings.animation] || (console.warn("The requested animation '%s' was not found switching to default zoomIn", n.settings.animation), console.trace(), n.settings.animation = "zoomIn"), t.animations[n.settings.animation].start(a)) : "object" == _typeof(n.settings.animation) && null != n.settings.animation.start && n.settings.animation.start(a), e++;
    });
  }), ["scroll", "resize"].forEach(function (e) {
    t.referenceElement.addEventListener(e, t.throttle(function () {
      t.elements.forEach(function (e, n) {
        var a = e.settings.wait;
        t.get(e.element).forEach(function (n, s) {
          var i = t.getScrollStatus(n, e.settings);
          "idle" != i.action && ("enter" != i.action || i.data.shown ? "leave" == i.action && i.data.shown && e.settings.repeat && ("string" == typeof e.settings.animation && "none" != e.settings.animation ? t.animations[e.settings.animation] && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () {
            t.animations[e.settings.animation].end(n), t.data[n.getAttribute("data-skroll-id")].shown = !1, a += e.settings.delay * s;
          }, a)) : "object" == _typeof(e.settings.animation) && null != e.settings.animation.end && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () {
            e.settings.animation.end(n), t.data[n.getAttribute("data-skroll-id")].shown = !1, a += e.settings.delay * s;
          }, a)), a += e.settings.delay) : ("string" == typeof e.settings.animation && "none" != e.settings.animation ? (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () {
            t.animations[e.settings.animation].end(n), t.data[n.getAttribute("data-skroll-id")].shown = !0, a += e.settings.delay * s;
          }, a)) : "object" == _typeof(e.settings.animation) && null != e.settings.animation.end && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () {
            e.settings.animation.end(n), t.data[n.getAttribute("data-skroll-id")].shown = !0, a += e.settings.delay * s;
          }, a)), a += e.settings.delay), "enter" == i.action ? t.data[n.getAttribute("data-skroll-id")].oef || e.settings.onEnter && (e.settings.onEnter(s, n), t.data[n.getAttribute("data-skroll-id")].oef = !0) : "leave" == i.action && (t.data[n.getAttribute("data-skroll-id")].olf || e.settings.onLeave && (e.settings.onLeave(s, n), t.data[n.getAttribute("data-skroll-id")].olf = !0)));
        });
      }), "resize" == e && t.recalcPosition();
    }, 150));
  }), window.dispatchEvent ? t.referenceElement.dispatchEvent(new Event("scroll")) : t.referenceElement.fireEvent("scroll"), t;
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53507" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scroll.min.js"], null)
//# sourceMappingURL=/scroll.min.4133e090.js.map