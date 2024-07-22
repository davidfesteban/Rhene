var __defProp2 = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _instance;
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var win$1 = typeof window !== "undefined" ? window : void 0;
var doc$1 = typeof document !== "undefined" ? document : void 0;
var animationPrefix;
var getAnimationPrefix = function(r) {
  if (animationPrefix === void 0) {
    var n = r.style.animationName !== void 0;
    var e = r.style.webkitAnimationName !== void 0;
    animationPrefix = !n && e ? "-webkit-" : "";
  }
  return animationPrefix;
};
var setStyleProperty = function(r, n, e) {
  var i = n.startsWith("animation") ? getAnimationPrefix(r) : "";
  r.style.setProperty(i + n, e);
};
var addClassToArray = function(r, n) {
  if (r === void 0) {
    r = [];
  }
  if (n !== void 0) {
    var e = Array.isArray(n) ? n : [n];
    return __spreadArray(__spreadArray([], r, true), e, true);
  }
  return r;
};
var createAnimation = function(r) {
  var n;
  var e;
  var i;
  var t;
  var a;
  var f;
  var u = [];
  var o = [];
  var v = [];
  var d = false;
  var c;
  var s = {};
  var l = [];
  var y = [];
  var m = {};
  var p2 = 0;
  var A = false;
  var g = false;
  var C;
  var b;
  var _;
  var P = true;
  var S = false;
  var T = true;
  var x;
  var E = false;
  var w = r;
  var h = [];
  var k = [];
  var R = [];
  var D = [];
  var F = [];
  var W = [];
  var I = [];
  var K = [];
  var M = [];
  var j = [];
  var q = [];
  var z = typeof AnimationEffect === "function" || win$1 !== void 0 && typeof win$1.AnimationEffect === "function";
  var B = typeof Element === "function" && typeof Element.prototype.animate === "function" && z;
  var G = function() {
    return q;
  };
  var H = function(r2) {
    F.forEach(function(n2) {
      n2.destroy(r2);
    });
    J(r2);
    D.length = 0;
    F.length = 0;
    u.length = 0;
    V();
    d = false;
    T = true;
    return x;
  };
  var J = function(r2) {
    X();
    if (r2) {
      Y();
    }
  };
  var L = function() {
    A = false;
    g = false;
    T = true;
    C = void 0;
    b = void 0;
    _ = void 0;
    p2 = 0;
    S = false;
    P = true;
    E = false;
  };
  var N = function() {
    return p2 !== 0 && !E;
  };
  var O = function(r2, n2) {
    var e2 = n2.findIndex(function(n3) {
      return n3.c === r2;
    });
    if (e2 > -1) {
      n2.splice(e2, 1);
    }
  };
  var Q = function(r2, n2) {
    R.push({ c: r2, o: n2 });
    return x;
  };
  var U = function(r2, n2) {
    var e2 = (n2 === null || n2 === void 0 ? void 0 : n2.oneTimeCallback) ? k : h;
    e2.push({ c: r2, o: n2 });
    return x;
  };
  var V = function() {
    h.length = 0;
    k.length = 0;
    return x;
  };
  var X = function() {
    if (B) {
      q.forEach(function(r2) {
        r2.cancel();
      });
      q.length = 0;
    }
  };
  var Y = function() {
    W.forEach(function(r2) {
      if (r2 === null || r2 === void 0 ? void 0 : r2.parentNode) {
        r2.parentNode.removeChild(r2);
      }
    });
    W.length = 0;
  };
  var Z = function(r2) {
    I.push(r2);
    return x;
  };
  var $ = function(r2) {
    K.push(r2);
    return x;
  };
  var rr = function(r2) {
    M.push(r2);
    return x;
  };
  var nr = function(r2) {
    j.push(r2);
    return x;
  };
  var er = function(r2) {
    o = addClassToArray(o, r2);
    return x;
  };
  var ir = function(r2) {
    v = addClassToArray(v, r2);
    return x;
  };
  var tr = function(r2) {
    if (r2 === void 0) {
      r2 = {};
    }
    s = r2;
    return x;
  };
  var ar = function(r2) {
    if (r2 === void 0) {
      r2 = [];
    }
    for (var n2 = 0, e2 = r2; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      s[i2] = "";
    }
    return x;
  };
  var fr = function(r2) {
    l = addClassToArray(l, r2);
    return x;
  };
  var ur = function(r2) {
    y = addClassToArray(y, r2);
    return x;
  };
  var or = function(r2) {
    if (r2 === void 0) {
      r2 = {};
    }
    m = r2;
    return x;
  };
  var vr = function(r2) {
    if (r2 === void 0) {
      r2 = [];
    }
    for (var n2 = 0, e2 = r2; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      m[i2] = "";
    }
    return x;
  };
  var dr = function() {
    if (a !== void 0) {
      return a;
    }
    if (c) {
      return c.getFill();
    }
    return "both";
  };
  var cr = function() {
    if (C !== void 0) {
      return C;
    }
    if (f !== void 0) {
      return f;
    }
    if (c) {
      return c.getDirection();
    }
    return "normal";
  };
  var sr = function() {
    if (A) {
      return "linear";
    }
    if (i !== void 0) {
      return i;
    }
    if (c) {
      return c.getEasing();
    }
    return "linear";
  };
  var lr = function() {
    if (g) {
      return 0;
    }
    if (b !== void 0) {
      return b;
    }
    if (e !== void 0) {
      return e;
    }
    if (c) {
      return c.getDuration();
    }
    return 0;
  };
  var yr = function() {
    if (t !== void 0) {
      return t;
    }
    if (c) {
      return c.getIterations();
    }
    return 1;
  };
  var mr = function() {
    if (_ !== void 0) {
      return _;
    }
    if (n !== void 0) {
      return n;
    }
    if (c) {
      return c.getDelay();
    }
    return 0;
  };
  var pr = function() {
    return u;
  };
  var Ar = function(r2) {
    f = r2;
    Kr(true);
    return x;
  };
  var gr = function(r2) {
    a = r2;
    Kr(true);
    return x;
  };
  var Cr = function(r2) {
    n = r2;
    Kr(true);
    return x;
  };
  var br = function(r2) {
    i = r2;
    Kr(true);
    return x;
  };
  var _r = function(r2) {
    if (!B && r2 === 0) {
      r2 = 1;
    }
    e = r2;
    Kr(true);
    return x;
  };
  var Pr = function(r2) {
    t = r2;
    Kr(true);
    return x;
  };
  var Sr = function(r2) {
    c = r2;
    return x;
  };
  var Tr = function(r2) {
    if (r2 != null) {
      if (r2.nodeType === 1) {
        D.push(r2);
      } else if (r2.length >= 0) {
        for (var n2 = 0; n2 < r2.length; n2++) {
          D.push(r2[n2]);
        }
      } else {
        console.error("Invalid addElement value");
      }
    }
    return x;
  };
  var xr = function(r2) {
    if (r2 != null) {
      if (Array.isArray(r2)) {
        for (var n2 = 0, e2 = r2; n2 < e2.length; n2++) {
          var i2 = e2[n2];
          i2.parent(x);
          F.push(i2);
        }
      } else {
        r2.parent(x);
        F.push(r2);
      }
    }
    return x;
  };
  var Er = function(r2) {
    var n2 = u !== r2;
    u = r2;
    if (n2) {
      wr(u);
    }
    return x;
  };
  var wr = function(r2) {
    if (B) {
      G().forEach(function(n2) {
        var e2 = n2.effect;
        if (e2.setKeyframes) {
          e2.setKeyframes(r2);
        } else {
          var i2 = new KeyframeEffect(e2.target, r2, e2.getTiming());
          n2.effect = i2;
        }
      });
    }
  };
  var hr = function() {
    I.forEach(function(r3) {
      return r3();
    });
    K.forEach(function(r3) {
      return r3();
    });
    var r2 = o;
    var n2 = v;
    var e2 = s;
    D.forEach(function(i2) {
      var t2 = i2.classList;
      r2.forEach(function(r3) {
        return t2.add(r3);
      });
      n2.forEach(function(r3) {
        return t2.remove(r3);
      });
      for (var a2 in e2) {
        if (e2.hasOwnProperty(a2)) {
          setStyleProperty(i2, a2, e2[a2]);
        }
      }
    });
  };
  var kr = function() {
    M.forEach(function(r3) {
      return r3();
    });
    j.forEach(function(r3) {
      return r3();
    });
    var r2 = P ? 1 : 0;
    var n2 = l;
    var e2 = y;
    var i2 = m;
    D.forEach(function(r3) {
      var t2 = r3.classList;
      n2.forEach(function(r4) {
        return t2.add(r4);
      });
      e2.forEach(function(r4) {
        return t2.remove(r4);
      });
      for (var a2 in i2) {
        if (i2.hasOwnProperty(a2)) {
          setStyleProperty(r3, a2, i2[a2]);
        }
      }
    });
    b = void 0;
    C = void 0;
    _ = void 0;
    h.forEach(function(n3) {
      return n3.c(r2, x);
    });
    k.forEach(function(n3) {
      return n3.c(r2, x);
    });
    k.length = 0;
    T = true;
    if (P) {
      S = true;
    }
    P = true;
  };
  var Rr = function() {
    if (p2 === 0) {
      return;
    }
    p2--;
    if (p2 === 0) {
      kr();
      if (c) {
        c.animationFinish();
      }
    }
  };
  var Dr = function() {
    D.forEach(function(r2) {
      var n2 = r2.animate(u, { id: w, delay: mr(), duration: lr(), easing: sr(), iterations: yr(), fill: dr(), direction: cr() });
      n2.pause();
      q.push(n2);
    });
    if (q.length > 0) {
      q[0].onfinish = function() {
        Rr();
      };
    }
  };
  var Fr = function() {
    hr();
    if (u.length > 0) {
      if (B) {
        Dr();
      }
    }
    d = true;
  };
  var Wr = function(r2) {
    r2 = Math.min(Math.max(r2, 0), 0.9999);
    if (B) {
      q.forEach(function(n2) {
        n2.currentTime = n2.effect.getComputedTiming().delay + lr() * r2;
        n2.pause();
      });
    }
  };
  var Ir = function(r2) {
    q.forEach(function(r3) {
      r3.effect.updateTiming({ delay: mr(), duration: lr(), easing: sr(), iterations: yr(), fill: dr(), direction: cr() });
    });
    if (r2 !== void 0) {
      Wr(r2);
    }
  };
  var Kr = function(r2, n2, e2) {
    if (r2 === void 0) {
      r2 = false;
    }
    if (n2 === void 0) {
      n2 = true;
    }
    if (r2) {
      F.forEach(function(i2) {
        i2.update(r2, n2, e2);
      });
    }
    if (B) {
      Ir(e2);
    }
    return x;
  };
  var Mr = function(r2, n2) {
    if (r2 === void 0) {
      r2 = false;
    }
    F.forEach(function(e2) {
      e2.progressStart(r2, n2);
    });
    zr();
    A = r2;
    if (!d) {
      Fr();
    }
    Kr(false, true, n2);
    return x;
  };
  var jr = function(r2) {
    F.forEach(function(n2) {
      n2.progressStep(r2);
    });
    Wr(r2);
    return x;
  };
  var qr = function(r2, n2, e2) {
    A = false;
    F.forEach(function(i2) {
      i2.progressEnd(r2, n2, e2);
    });
    if (e2 !== void 0) {
      b = e2;
    }
    S = false;
    P = true;
    if (r2 === 0) {
      C = cr() === "reverse" ? "normal" : "reverse";
      if (C === "reverse") {
        P = false;
      }
      if (B) {
        Kr();
        Wr(1 - n2);
      } else {
        _ = (1 - n2) * lr() * -1;
        Kr(false, false);
      }
    } else if (r2 === 1) {
      if (B) {
        Kr();
        Wr(n2);
      } else {
        _ = n2 * lr() * -1;
        Kr(false, false);
      }
    }
    if (r2 !== void 0 && !c) {
      Lr();
    }
    return x;
  };
  var zr = function() {
    if (d) {
      if (B) {
        q.forEach(function(r2) {
          r2.pause();
        });
      } else {
        D.forEach(function(r2) {
          setStyleProperty(r2, "animation-play-state", "paused");
        });
      }
      E = true;
    }
  };
  var Br = function() {
    F.forEach(function(r2) {
      r2.pause();
    });
    zr();
    return x;
  };
  var Gr = function() {
    Rr();
  };
  var Hr = function() {
    q.forEach(function(r2) {
      r2.play();
    });
    if (u.length === 0 || D.length === 0) {
      Rr();
    }
  };
  var Jr = function() {
    if (B) {
      Wr(0);
      Ir();
    }
  };
  var Lr = function(r2) {
    return new Promise(function(n2) {
      if (r2 === null || r2 === void 0 ? void 0 : r2.sync) {
        g = true;
        U(function() {
          return g = false;
        }, { oneTimeCallback: true });
      }
      if (!d) {
        Fr();
      }
      if (S) {
        Jr();
        S = false;
      }
      if (T) {
        p2 = F.length + 1;
        T = false;
      }
      var e2 = function() {
        O(i2, k);
        n2();
      };
      var i2 = function() {
        O(e2, R);
        n2();
      };
      U(i2, { oneTimeCallback: true });
      Q(e2, { oneTimeCallback: true });
      F.forEach(function(r3) {
        r3.play();
      });
      if (B) {
        Hr();
      } else {
        Gr();
      }
      E = false;
    });
  };
  var Nr = function() {
    F.forEach(function(r2) {
      r2.stop();
    });
    if (d) {
      X();
      d = false;
    }
    L();
    R.forEach(function(r2) {
      return r2.c(0, x);
    });
    R.length = 0;
  };
  var Or = function(r2, n2) {
    var e2;
    var i2 = u[0];
    if (i2 !== void 0 && (i2.offset === void 0 || i2.offset === 0)) {
      i2[r2] = n2;
    } else {
      u = __spreadArray([(e2 = { offset: 0 }, e2[r2] = n2, e2)], u, true);
    }
    return x;
  };
  var Qr = function(r2, n2) {
    var e2;
    var i2 = u[u.length - 1];
    if (i2 !== void 0 && (i2.offset === void 0 || i2.offset === 1)) {
      i2[r2] = n2;
    } else {
      u = __spreadArray(__spreadArray([], u, true), [(e2 = { offset: 1 }, e2[r2] = n2, e2)], false);
    }
    return x;
  };
  var Ur = function(r2, n2, e2) {
    return Or(r2, n2).to(r2, e2);
  };
  return x = { parentAnimation: c, elements: D, childAnimations: F, id: w, animationFinish: Rr, from: Or, to: Qr, fromTo: Ur, parent: Sr, play: Lr, pause: Br, stop: Nr, destroy: H, keyframes: Er, addAnimation: xr, addElement: Tr, update: Kr, fill: gr, direction: Ar, iterations: Pr, duration: _r, easing: br, delay: Cr, getWebAnimations: G, getKeyframes: pr, getFill: dr, getDirection: cr, getDelay: mr, getIterations: yr, getEasing: sr, getDuration: lr, afterAddRead: rr, afterAddWrite: nr, afterClearStyles: vr, afterStyles: or, afterRemoveClass: ur, afterAddClass: fr, beforeAddRead: Z, beforeAddWrite: $, beforeClearStyles: ar, beforeStyles: tr, beforeRemoveClass: ir, beforeAddClass: er, onFinish: U, isRunning: N, progressStart: Mr, progressStep: jr, progressEnd: qr };
};
var __defProp = Object.defineProperty;
var __export = function(e, t) {
  for (var r in t)
    __defProp(e, r, { get: t[r], enumerable: true });
};
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = function(e) {
  return hostRefs.get(e);
};
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
win.HTMLElement || function() {
  function e() {
  }
  return e;
}();
(function() {
  var e = false;
  try {
    doc.addEventListener("e", null, Object.defineProperty({}, "passive", { get: function() {
      e = true;
    } }));
  } catch (e2) {
  }
  return e;
})();
(function() {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
var result_exports = {};
__export(result_exports, { err: function() {
  return err;
}, map: function() {
  return map;
}, ok: function() {
  return ok;
}, unwrap: function() {
  return unwrap;
}, unwrapErr: function() {
  return unwrapErr;
} });
var ok = function(e) {
  return { isOk: true, isErr: false, value: e };
};
var err = function(e) {
  return { isOk: false, isErr: true, value: e };
};
function map(e, t) {
  if (e.isOk) {
    var r = t(e.value);
    if (r instanceof Promise) {
      return r.then(function(e2) {
        return ok(e2);
      });
    } else {
      return ok(r);
    }
  }
  if (e.isErr) {
    var n = e.value;
    return err(n);
  }
  throw "should never get here";
}
var unwrap = function(e) {
  if (e.isOk) {
    return e.value;
  } else {
    throw e.value;
  }
};
var unwrapErr = function(e) {
  if (e.isErr) {
    return e.value;
  } else {
    throw e.value;
  }
};
var getMode = function(e) {
  return getHostRef(e).V;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var defaultMode;
var getIonMode = function(i) {
  return i && getMode(i) || defaultMode;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var printIonWarning = function(r) {
  var n = [];
  for (var o = 1; o < arguments.length; o++) {
    n[o - 1] = arguments[o];
  }
  return console.warn.apply(console, __spreadArray(["[Ionic Warning]: ".concat(r)], n, false));
};
var componentOnReady = function(r, a) {
  if (r.componentOnReady) {
    r.componentOnReady().then(function(r2) {
      return a(r2);
    });
  } else {
    raf(function() {
      return a(r);
    });
  }
};
var raf = function(r) {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(r);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(r);
  }
  return setTimeout(r);
};
var MENU_BACK_BUTTON_PRIORITY = 99;
var baseAnimation = function(n) {
  return createAnimation().duration(n ? 400 : 300);
};
var menuOverlayAnimation = function(n) {
  var r;
  var e;
  var t = n.width + 8;
  var i = createAnimation();
  var a = createAnimation();
  if (n.isEndSide) {
    r = t + "px";
    e = "0px";
  } else {
    r = -t + "px";
    e = "0px";
  }
  i.addElement(n.menuInnerEl).fromTo("transform", "translateX(".concat(r, ")"), "translateX(".concat(e, ")"));
  var o = getIonMode(n);
  var u = o === "ios";
  var s = u ? 0.2 : 0.25;
  a.addElement(n.backdropEl).fromTo("opacity", 0.01, s);
  return baseAnimation(u).addAnimation([i, a]);
};
var menuPushAnimation = function(n) {
  var r;
  var e;
  var t = getIonMode(n);
  var i = n.width;
  if (n.isEndSide) {
    r = -i + "px";
    e = i + "px";
  } else {
    r = i + "px";
    e = -i + "px";
  }
  var a = createAnimation().addElement(n.menuInnerEl).fromTo("transform", "translateX(".concat(e, ")"), "translateX(0px)");
  var o = createAnimation().addElement(n.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(r, ")"));
  var u = createAnimation().addElement(n.backdropEl).fromTo("opacity", 0.01, 0.32);
  return baseAnimation(t === "ios").addAnimation([a, o, u]);
};
var menuRevealAnimation = function(n) {
  var r = getIonMode(n);
  var e = n.width * (n.isEndSide ? -1 : 1) + "px";
  var t = createAnimation().addElement(n.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(e, ")"));
  return baseAnimation(r === "ios").addAnimation(t);
};
var createMenuController = function() {
  var n = /* @__PURE__ */ new Map();
  var r = [];
  var e = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2, true)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, r2.open()];
            }
            return [2, false];
        }
      });
    });
  };
  var t = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, n2 !== void 0 ? c(n2, true) : f()];
          case 1:
            r2 = e2.sent();
            if (r2 !== void 0) {
              return [2, r2.close()];
            }
            return [2, false];
        }
      });
    });
  };
  var i = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2, true)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, r2.toggle()];
            }
            return [2, false];
        }
      });
    });
  };
  var a = function(n2, r2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var e2;
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return [4, c(r2)];
          case 1:
            e2 = t2.sent();
            if (e2) {
              e2.disabled = !n2;
            }
            return [2, e2];
        }
      });
    });
  };
  var o = function(n2, r2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var e2;
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return [4, c(r2)];
          case 1:
            e2 = t2.sent();
            if (e2) {
              e2.swipeGesture = n2;
            }
            return [2, e2];
        }
      });
    });
  };
  var u = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2, r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (!(n2 != null))
              return [3, 2];
            return [4, c(n2)];
          case 1:
            r2 = e2.sent();
            return [2, r2 !== void 0 && r2.isOpen()];
          case 2:
            return [4, f()];
          case 3:
            r2 = e2.sent();
            return [2, r2 !== void 0];
        }
      });
    });
  };
  var s = function(n2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var r2;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, !r2.disabled];
            }
            return [2, false];
        }
      });
    });
  };
  var c = function(n2) {
    var e2 = [];
    for (var t2 = 1; t2 < arguments.length; t2++) {
      e2[t2 - 1] = arguments[t2];
    }
    return __awaiter(void 0, __spreadArray([n2], e2, true), void 0, function(n3, e3) {
      var t3, i2, a2;
      if (e3 === void 0) {
        e3 = false;
      }
      return __generator(this, function(o2) {
        switch (o2.label) {
          case 0:
            return [4, x()];
          case 1:
            o2.sent();
            if (n3 === "start" || n3 === "end") {
              t3 = r.filter(function(r2) {
                return r2.side === n3 && !r2.disabled;
              });
              if (t3.length >= 1) {
                if (t3.length > 1 && e3) {
                  printIonWarning('menuController queried for a menu on the "'.concat(n3, '" side, but ').concat(t3.length, " menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."), t3.map(function(n4) {
                    return n4.el;
                  }));
                }
                return [2, t3[0].el];
              }
              i2 = r.filter(function(r2) {
                return r2.side === n3;
              });
              if (i2.length >= 1) {
                if (i2.length > 1 && e3) {
                  printIonWarning('menuController queried for a menu on the "'.concat(n3, '" side, but ').concat(i2.length, " menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."), i2.map(function(n4) {
                    return n4.el;
                  }));
                }
                return [2, i2[0].el];
              }
            } else if (n3 != null) {
              return [2, b(function(r2) {
                return r2.menuId === n3;
              })];
            }
            a2 = b(function(n4) {
              return !n4.disabled;
            });
            if (a2) {
              return [2, a2];
            }
            return [2, r.length > 0 ? r[0].el : void 0];
        }
      });
    });
  };
  var f = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, w()];
        }
      });
    });
  };
  var v = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, g()];
        }
      });
    });
  };
  var d = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, A()];
        }
      });
    });
  };
  var _ = function(r2, e2) {
    n.set(r2, e2);
  };
  var m = function(n2) {
    if (r.indexOf(n2) < 0) {
      r.push(n2);
    }
  };
  var l = function(n2) {
    var e2 = r.indexOf(n2);
    if (e2 > -1) {
      r.splice(e2, 1);
    }
  };
  var h = function(n2, r2, e2) {
    return __awaiter(void 0, void 0, void 0, function() {
      var t2;
      return __generator(this, function(i2) {
        switch (i2.label) {
          case 0:
            if (A()) {
              return [2, false];
            }
            if (!r2)
              return [3, 3];
            return [4, f()];
          case 1:
            t2 = i2.sent();
            if (!(t2 && n2.el !== t2))
              return [3, 3];
            return [4, t2.setOpen(false, false)];
          case 2:
            i2.sent();
            i2.label = 3;
          case 3:
            return [2, n2._setOpen(r2, e2)];
        }
      });
    });
  };
  var p2 = function(r2, e2) {
    var t2 = n.get(r2);
    if (!t2) {
      throw new Error("animation not registered");
    }
    var i2 = t2(e2);
    return i2;
  };
  var w = function() {
    return b(function(n2) {
      return n2._isOpen;
    });
  };
  var g = function() {
    return r.map(function(n2) {
      return n2.el;
    });
  };
  var A = function() {
    return r.some(function(n2) {
      return n2.isAnimating;
    });
  };
  var b = function(n2) {
    var e2 = r.find(n2);
    if (e2 !== void 0) {
      return e2.el;
    }
    return void 0;
  };
  var x = function() {
    return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function(n2) {
      return new Promise(function(r2) {
        return componentOnReady(n2, r2);
      });
    }));
  };
  _("reveal", menuRevealAnimation);
  _("push", menuPushAnimation);
  _("overlay", menuOverlayAnimation);
  doc$1 === null || doc$1 === void 0 ? void 0 : doc$1.addEventListener("ionBackButton", function(n2) {
    var r2 = w();
    if (r2) {
      n2.detail.register(MENU_BACK_BUTTON_PRIORITY, function() {
        return r2.close();
      });
    }
  });
  return { registerAnimation: _, get: c, getMenus: v, getOpen: f, isEnabled: s, swipeGesture: o, isAnimating: d, isOpen: u, enable: a, toggle: i, close: t, open: e, _getOpenSync: w, _createAnimation: p2, _register: m, _unregister: l, _setOpen: h };
};
createMenuController();
var createController = function(e) {
  return { create: function(n) {
    return createOverlay(e, n);
  }, dismiss: function(n, r, t) {
    return dismissOverlay(document, n, r, e, t);
  }, getTop: function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(n) {
        return [2, getPresentedOverlay(document, e)];
      });
    });
  } };
};
var toastController = createController("ion-toast");
var createOverlay = function(e, n) {
  if (typeof window !== "undefined" && typeof window.customElements !== "undefined") {
    return window.customElements.whenDefined(e).then(function() {
      var r = document.createElement(e);
      r.classList.add("overlay-hidden");
      Object.assign(r, Object.assign(Object.assign({}, n), { hasController: true }));
      getAppRoot(document).appendChild(r);
      return new Promise(function(e2) {
        return componentOnReady(r, e2);
      });
    });
  }
  return Promise.resolve();
};
var isOverlayHidden = function(e) {
  return e.classList.contains("overlay-hidden");
};
var dismissOverlay = function(e, n, r, t, o) {
  var a = getPresentedOverlay(e, t, o);
  if (!a) {
    return Promise.reject("overlay does not exist");
  }
  return a.dismiss(n, r);
};
var getOverlays = function(e, n) {
  if (n === void 0) {
    n = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast";
  }
  return Array.from(e.querySelectorAll(n)).filter(function(e2) {
    return e2.overlayIndex > 0;
  });
};
var getPresentedOverlays = function(e, n) {
  return getOverlays(e, n).filter(function(e2) {
    return !isOverlayHidden(e2);
  });
};
var getPresentedOverlay = function(e, n, r) {
  var t = getPresentedOverlays(e, n);
  return r === void 0 ? t[t.length - 1] : t.find(function(e2) {
    return e2.id === r;
  });
};
var getAppRoot = function(e) {
  return e.querySelector("ion-app") || e.body;
};
class ToastError extends Error {
  constructor(message) {
    super(message);
    this.name = "ToastError";
    console.error(this.name + ":", message);
    toastController.create({
      message,
      duration: 4e3,
      position: "bottom",
      animated: true
    }).then((toast) => {
      toast.present().catch((error) => {
        console.error("Error presenting toast:", error);
      });
    });
  }
}
const _Router = class {
  constructor() {
    if (!__privateGet(_Router, _instance)) {
      this.router = document.querySelector("ion-router");
      if (!this.router) {
        throw new Error("ion-router not found in the document.");
      }
      this.router.addEventListener("ionRouteWillChange", this.beforeRouteChange.bind(this));
      __privateSet(_Router, _instance, this);
    }
    Object.freeze(this);
    return __privateGet(_Router, _instance);
  }
  beforeRouteChange(event) {
    const { from, to } = event.detail;
    console.log(`Navigating from ${from} to ${to}`);
    if (to === "/restricted") {
      console.log("Navigation to the restricted route is blocked.");
      event.preventDefault();
    }
  }
  async push(path, petition = void 0, direction = "forward", animation = void 0) {
    if (!this.router)
      throw new Error("ion-router not found in the document.");
    if (petition) {
      try {
        await this.router.push("/loading", "forward", animation);
        let result = await petition();
        await this.router.push(path, direction, animation);
        return result;
      } catch (e) {
        await this.router.back();
        throw new ToastError(e.message);
      }
    } else {
      await this.router.push(path, direction, animation);
    }
  }
};
let Router = _Router;
_instance = new WeakMap();
__privateAdd(Router, _instance, null);
const _PageLogin = class extends HTMLElement {
  async connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    ${_PageLogin.htmlText}
  `;
    const loginButton = shadow.getElementById("loginButton");
    loginButton.addEventListener("click", () => {
      new Router().push("/two", delay);
    });
  }
};
let PageLogin = _PageLogin;
__publicField(PageLogin, "htmlText", `
<ion-content>
    <div class="login-container">
        <ion-card class="login-form">
            <ion-card-header>
                <ion-card-title>Login</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-item>
                    <ion-label position="floating">Username</ion-label>
                    <ion-input type="text" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input type="password" required></ion-input>
                </ion-item>
                <ion-button expand="block" id="loginButton">Login</ion-button>
            </ion-card-content>
        </ion-card>
    </div>
</ion-content>
`);
async function delay() {
  await new Promise((resolve) => setTimeout(resolve, 1e4));
  throw new Error("Me he exo caca");
}
const _PageTwo = class extends HTMLElement {
  async connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    ${_PageTwo.htmlText}
  `;
  }
};
let PageTwo = _PageTwo;
__publicField(PageTwo, "htmlText", `
<ion-header>
    <ion-toolbar>
        <ion-title>Page Two</ion-title>
    </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
    This is the content for page 1.
    <ion-router-link href="#/">
        <ion-button>Go to Page 1</ion-button>
    </ion-router-link>
</ion-content>
`);
var imgUrl = "/assets/logo.a16efd98.png";
var cssGeneric = "@import url('https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css');\n\nhtml,\nbody {\n    padding: 0;\n    margin: 0;\n}\n";
var cssPage = ".full-flex {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}";
class PageLoading extends HTMLElement {
  constructor() {
    super(...arguments);
    __publicField(this, "_htmlTemplate", `
<style>
    ${cssGeneric}
    ${cssPage}   
</style>
<ion-content class="ion-padding">
    <div class="ion-justify-content-center ion-align-items-center ion-text-center full-flex">
        <ion-img src="${imgUrl}" alt="Logo"></ion-img>
    </div>
</ion-content>
        `);
    __publicField(this, "_animation", () => {
      return createAnimation().addElement(this.shadowRoot.querySelector("ion-img")).duration(3500).iterations(Infinity).keyframes([{
        offset: 0,
        transform: "rotate(0turn)",
        opacity: "1",
        easing: "ease-out"
      }, { offset: 0.5, transform: "rotate(2turn)", opacity: "0.4", easing: "ease-in" }, {
        offset: 0.9,
        transform: "rotate(2turn)",
        opacity: "1",
        easing: "ease-out"
      }, { offset: 1, transform: "rotate(2turn)", opacity: "1", easing: "ease-in" }]);
    });
  }
  set integer(value) {
    this.render();
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
    requestAnimationFrame(() => {
      this._animation().play();
    });
  }
  render() {
    this.shadowRoot.innerHTML = this._htmlTemplate;
  }
}
customElements.define("page-loading", PageLoading);
customElements.define("page-login", PageLogin);
customElements.define("page-two", PageTwo);
new Router();
var global = "";
