"use strict";
function _toConsumableArray(t) {
  return (
    _arrayWithoutHoles(t) ||
    _iterableToArray(t) ||
    _unsupportedIterableToArray(t) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return (
      "Object" === i && t.constructor && (i = t.constructor.name),
      "Map" === i || "Set" === i
        ? Array.from(t)
        : "Arguments" === i ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
        ? _arrayLikeToArray(t, e)
        : void 0
    );
  }
}
function _iterableToArray(t) {
  if (
    ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
    null != t["@@iterator"]
  )
    return Array.from(t);
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) return _arrayLikeToArray(t);
}
function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
  return n;
}
if (!window.ActiveXObject && !("ActiveXObject" in window)) {
  var __getClientLogo = function () {
    var t,
      e = JSON.parse(
        decodeURI(
          atob(
            "JTVCJTVCJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwLy8lMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU1QyU1QyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMC8vJTIyLCUyMiUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlNUMlNUMlNUMlNUMlMjAlMjAlMjAlMjAlMjAlMjAlMjAvLyUyMiwlMjIlMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwIyNEREREREREREREREREREREREREREREIyMlMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwREREREREREREREREREREREREREQlMjAjIyUyMiwlMjIlMjAlMjAlMjBfX19fX19fXyUyMCUyMCUyMF9fXyUyMCUyMCUyMF9fXyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMF9fXyUyMCUyMCUyMF9fX19fX19fJTIwJTIwJTIwX19fJTIwJTIwJTIwX19fJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwX19fJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoaCUyMCMjJTIyLCUyMiUyMCUyMCUyMCU3QyU1QyU1QyUyMCUyMCUyMF9fJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTIwJTIwJTIwJTIwJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTIwX18lMjAlMjAlNUMlNUMlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjAlMjAlMjAlMjAlMjAlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwIyMlMjBoaCUyMCUyMCUyMCUyMC8vJTIwJTIwJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTIwJTIwJTIwaGglMjAjIyUyMiwlMjIlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlN0MlNUMlNUMlMjAvXyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMCUyMCUyMCUyMCUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU3QyU1QyU1QyUyMC9fJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAvLyUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU1QyU1QyUyMCUyMCUyMGhoJTIwIyMlMjIsJTIyJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTIwX18lMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlMjAlMjAlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlMjBfXyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMCUyMCUyMCUyMCUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyMGhoJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaGglMjAjIyUyMiwlMjIlMjAlMjAlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlN0MlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUNfX19fJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDX19fXyUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyMGhoJTIwJTIwJTIwJTIwJTIwJTIwd3d3dyUyMCUyMCUyMCUyMCUyMCUyMGhoJTIwIyMlMjIsJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoaCUyMCMjJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyME1NTU1NTU1NTU1NTU1NTU1NTU1NJTIwIyMlMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSMjJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFJlbGVhc2UlMjAyLjYuMS4lMjBQb3dlcmVkJTIwYnklMjBqaW5rZWxhLWNvcmUlMjAyLjguOS4lMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTVDJTVDLyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1Qy8lMjIsJTIyJTIyJTVEJTVE"
          )
        )
      ),
      i = ["%c"],
      n = [];
    e.forEach(function (t) {
      var e = t[0],
        n = t[1];
      i.push(e + n);
    }),
      (n = n.concat(["color:#00a1d6"])),
      (n = [i.join("\n")].concat(n)),
      (t = console).log.apply(t, _toConsumableArray(n));
  };
  __getClientLogo();
}
!(function (t) {
  function e(e) {
    for (
      var n, a, s = e[0], c = e[1], l = e[2], u = 0, f = [];
      u < s.length;
      u++
    )
      (a = s[u]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && f.push(r[a][0]),
        (r[a] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    for (d && d(e); f.length; ) f.shift()();
    return o.push.apply(o, l || []), i();
  }
  function i() {
    for (var t, e = 0; e < o.length; e++) {
      for (var i = o[e], n = !0, a = 1; a < i.length; a++) {
        var c = i[a];
        0 !== r[c] && (n = !1);
      }
      n && (o.splice(e--, 1), (t = s((s.s = i[0]))));
    }
    return t;
  }
  var n = {},
    a = { 4: 0 },
    r = { 4: 0 },
    o = [];
  function s(e) {
    if (n[e]) return n[e].exports;
    var i = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
  }
  (s.e = function (t) {
    var e = [];
    a[t]
      ? e.push(a[t])
      : 0 !== a[t] &&
        {
          0: 1,
          1: 1,
          2: 1,
          6: 1,
          7: 1,
          8: 1,
          9: 1,
          10: 1,
          11: 1,
          12: 1,
          13: 1,
          14: 1,
          15: 1,
          16: 1,
          17: 1,
          18: 1,
          19: 1,
          20: 1,
          21: 1,
          22: 1,
          23: 1,
          24: 1,
          25: 1,
          26: 1,
          27: 1,
        }[t] &&
        e.push(
          (a[t] = new Promise(function (e, i) {
            for (
              var n =
                  "css/space." +
                  t +
                  ".c93b4516819ba4466a477a6aeb39b418c54af16a.css",
                r = s.p + n,
                o = document.getElementsByTagName("link"),
                c = 0;
              c < o.length;
              c++
            ) {
              var l =
                (d = o[c]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (l === n || l === r)) return e();
            }
            var u = document.getElementsByTagName("style");
            for (c = 0; c < u.length; c++) {
              var d;
              if ((l = (d = u[c]).getAttribute("data-href")) === n || l === r)
                return e();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = e),
              (f.onerror = function (e) {
                var n = (e && e.target && e.target.src) || r,
                  o = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + n + ")"
                  );
                (o.code = "CSS_CHUNK_LOAD_FAILED"),
                  (o.request = n),
                  delete a[t],
                  f.parentNode.removeChild(f),
                  i(o);
              }),
              (f.href = r),
              document.getElementsByTagName("head")[0].appendChild(f);
          }).then(function () {
            a[t] = 0;
          }))
        );
    var i = r[t];
    if (0 !== i)
      if (i) e.push(i[2]);
      else {
        var n = new Promise(function (e, n) {
          i = r[t] = [e, n];
        });
        e.push((i[2] = n));
        var o,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          s.nc && c.setAttribute("nonce", s.nc),
          (c.src = (function (t) {
            return (
              s.p +
              "" +
              t +
              ".space.c93b4516819ba4466a477a6aeb39b418c54af16a.js"
            );
          })(t));
        var l = new Error();
        o = function (e) {
          (c.onerror = c.onload = null), clearTimeout(u);
          var i = r[t];
          if (0 !== i) {
            if (i) {
              var n = e && ("load" === e.type ? "missing" : e.type),
                a = e && e.target && e.target.src;
              (l.message =
                "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = n),
                (l.request = a),
                i[1](l);
            }
            r[t] = void 0;
          }
        };
        var u = setTimeout(function () {
          o({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = o), document.head.appendChild(c);
      }
    return Promise.all(e);
  }),
    (s.m = t),
    (s.c = n),
    (s.d = function (t, e, i) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (s.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function (t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          s.d(
            i,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return i;
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "//s1.hdslb.com/bfs/static/jinkela/space/"),
    (s.oe = function (t) {
      throw (console.error(t), t);
    });
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    l = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var u = 0; u < c.length; u++) e(c[u]);
  var d = l;
  o.push([253, 5]), i();
})({
  1: function (t, e, i) {
    i.d(e, "U", function () {
      return n;
    }),
      i.d(e, "sb", function () {
        return a;
      }),
      i.d(e, "db", function () {
        return r;
      }),
      i.d(e, "cb", function () {
        return o;
      }),
      i.d(e, "Wb", function () {
        return s;
      }),
      i.d(e, "Hb", function () {
        return c;
      }),
      i.d(e, "kc", function () {
        return l;
      }),
      i.d(e, "z", function () {
        return u;
      }),
      i.d(e, "y", function () {
        return d;
      }),
      i.d(e, "ec", function () {
        return f;
      }),
      i.d(e, "Ab", function () {
        return p;
      }),
      i.d(e, "ic", function () {
        return m;
      }),
      i.d(e, "gc", function () {
        return h;
      }),
      i.d(e, "C", function () {
        return v;
      }),
      i.d(e, "A", function () {
        return _;
      }),
      i.d(e, "jc", function () {
        return b;
      }),
      i.d(e, "K", function () {
        return g;
      }),
      i.d(e, "zb", function () {
        return y;
      }),
      i.d(e, "Y", function () {
        return w;
      }),
      i.d(e, "yb", function () {
        return C;
      }),
      i.d(e, "X", function () {
        return T;
      }),
      i.d(e, "f", function () {
        return S;
      }),
      i.d(e, "g", function () {
        return j;
      }),
      i.d(e, "b", function () {
        return P;
      }),
      i.d(e, "B", function () {
        return L;
      }),
      i.d(e, "ub", function () {
        return M;
      }),
      i.d(e, "tb", function () {
        return U;
      }),
      i.d(e, "N", function () {
        return x;
      }),
      i.d(e, "M", function () {
        return k;
      }),
      i.d(e, "L", function () {
        return E;
      }),
      i.d(e, "S", function () {
        return I;
      }),
      i.d(e, "T", function () {
        return O;
      }),
      i.d(e, "R", function () {
        return $;
      }),
      i.d(e, "u", function () {
        return A;
      }),
      i.d(e, "v", function () {
        return N;
      }),
      i.d(e, "t", function () {
        return D;
      }),
      i.d(e, "e", function () {
        return J;
      }),
      i.d(e, "h", function () {
        return V;
      }),
      i.d(e, "Tb", function () {
        return R;
      }),
      i.d(e, "Qb", function () {
        return F;
      }),
      i.d(e, "ab", function () {
        return B;
      }),
      i.d(e, "bb", function () {
        return Q;
      }),
      i.d(e, "Z", function () {
        return G;
      }),
      i.d(e, "wb", function () {
        return H;
      }),
      i.d(e, "xb", function () {
        return W;
      }),
      i.d(e, "vb", function () {
        return X;
      }),
      i.d(e, "I", function () {
        return q;
      }),
      i.d(e, "J", function () {
        return z;
      }),
      i.d(e, "H", function () {
        return Y;
      }),
      i.d(e, "k", function () {
        return K;
      }),
      i.d(e, "P", function () {
        return Z;
      }),
      i.d(e, "Q", function () {
        return tt;
      }),
      i.d(e, "O", function () {
        return et;
      }),
      i.d(e, "Rb", function () {
        return it;
      }),
      i.d(e, "Sb", function () {
        return nt;
      }),
      i.d(e, "w", function () {
        return at;
      }),
      i.d(e, "o", function () {
        return rt;
      }),
      i.d(e, "p", function () {
        return ot;
      }),
      i.d(e, "n", function () {
        return st;
      }),
      i.d(e, "x", function () {
        return ct;
      }),
      i.d(e, "m", function () {
        return lt;
      }),
      i.d(e, "r", function () {
        return ut;
      }),
      i.d(e, "s", function () {
        return dt;
      }),
      i.d(e, "q", function () {
        return ft;
      }),
      i.d(e, "i", function () {
        return pt;
      }),
      i.d(e, "cc", function () {
        return mt;
      }),
      i.d(e, "c", function () {
        return ht;
      }),
      i.d(e, "d", function () {
        return vt;
      }),
      i.d(e, "Lb", function () {
        return _t;
      }),
      i.d(e, "j", function () {
        return bt;
      }),
      i.d(e, "bc", function () {
        return gt;
      }),
      i.d(e, "Nb", function () {
        return yt;
      }),
      i.d(e, "l", function () {
        return wt;
      }),
      i.d(e, "ac", function () {
        return Ct;
      }),
      i.d(e, "Jb", function () {
        return Tt;
      }),
      i.d(e, "Kb", function () {
        return St;
      }),
      i.d(e, "E", function () {
        return jt;
      }),
      i.d(e, "G", function () {
        return Pt;
      }),
      i.d(e, "F", function () {
        return Lt;
      }),
      i.d(e, "jb", function () {
        return Mt;
      }),
      i.d(e, "kb", function () {
        return Ut;
      }),
      i.d(e, "ib", function () {
        return xt;
      }),
      i.d(e, "gb", function () {
        return kt;
      }),
      i.d(e, "hb", function () {
        return Et;
      }),
      i.d(e, "fb", function () {
        return It;
      }),
      i.d(e, "eb", function () {
        return Ot;
      }),
      i.d(e, "dc", function () {
        return $t;
      }),
      i.d(e, "rb", function () {
        return At;
      }),
      i.d(e, "qb", function () {
        return Nt;
      }),
      i.d(e, "pb", function () {
        return Dt;
      }),
      i.d(e, "Mb", function () {
        return Jt;
      }),
      i.d(e, "a", function () {
        return Vt;
      }),
      i.d(e, "Pb", function () {
        return Rt;
      }),
      i.d(e, "Ub", function () {
        return Ft;
      }),
      i.d(e, "Vb", function () {
        return Bt;
      }),
      i.d(e, "D", function () {
        return Qt;
      }),
      i.d(e, "hc", function () {
        return Gt;
      }),
      i.d(e, "Ob", function () {
        return Ht;
      }),
      i.d(e, "W", function () {
        return Wt;
      }),
      i.d(e, "V", function () {
        return Xt;
      }),
      i.d(e, "Fb", function () {
        return qt;
      }),
      i.d(e, "Gb", function () {
        return zt;
      }),
      i.d(e, "Eb", function () {
        return Yt;
      }),
      i.d(e, "Cb", function () {
        return Kt;
      }),
      i.d(e, "Db", function () {
        return Zt;
      }),
      i.d(e, "Bb", function () {
        return te;
      }),
      i.d(e, "Ib", function () {
        return ee;
      }),
      i.d(e, "nb", function () {
        return ie;
      }),
      i.d(e, "ob", function () {
        return ne;
      }),
      i.d(e, "mb", function () {
        return ae;
      }),
      i.d(e, "lb", function () {
        return re;
      }),
      i.d(e, "fc", function () {
        return oe;
      }),
      i.d(e, "Yb", function () {
        return se;
      }),
      i.d(e, "Xb", function () {
        return ce;
      }),
      i.d(e, "Zb", function () {
        return le;
      });
    var n = "GETINFO_SUCCESS",
      a = "GETSETTINGS_SUCCESS",
      r = "GETMYINFO_SUCCESS",
      o = "GETMYINFO_FAILURE",
      s = "SETSIGN_SUCCESS",
      c = "GETWATCHHISTORY_SUCCESS",
      l = "WATCH_VIDEO",
      u = "FETCHNAVNUM_SUCCESS",
      d = "FETCHNAVNUM_FAILURE",
      f = "UPADTE_USER_STATE",
      p = "GETUPSTAT_SUCCESS",
      m = "UPDATE_WATCHLATER",
      h = "UPDATE_MEDALSHOW",
      v = "FETCHTOPPHOTO_SUCCESS",
      _ = "FETCHSKIN_SUCCESS",
      b = "UPLOADTOUTU_SUCCESS",
      g = "GETBCOIN_SUCCESS",
      y = "GETTOPVIDEO_SUCCESS",
      w = "GETMASTERPIECE_SUCCESS",
      C = "GETTOPVIDEO_FAILURE",
      T = "GETMASTERPIECE_FAILURE",
      S = "DELETEMASTERPIECE_SUCCESS",
      j = "DELETETOPVIDEOS_SUCCESS",
      P = "CLEARSELECTVIDEOS",
      L = "FETCHSUBMITVIDEOS_START",
      M = "GETSUBMITVIDEOS_SUCCESS",
      U = "GETSUBMITVIDEOS_FAILURE",
      x = "GETCHANNEL_SUCCESS",
      k = "GETCHANNELWITHARCHIVES_SUCCESS",
      E = "GETCHANNELINFO_SUCCESS",
      I = "GETFAV_START",
      O = "GETFAV_SUCCESS",
      $ = "GETFAV_FAILURE",
      A = "FETCHFAVDETAIL_START",
      N = "FETCHFAVDETAIL_SUCCESS",
      D = "FETCHFAVDETAIL_FAILURE",
      J = "COPYVIDEO_SUCCESS",
      V = "DELFAVLIST_SUCCESS",
      R = "SETFAVLIST_SUCCESS",
      F = "RENAMEFAV_SUCCESS",
      B = "GETMYFAV_START",
      Q = "GETMYFAV_SUCCESS",
      G = "GETMYFAV_FAILURE",
      H = "GETTOPICS_START",
      W = "GETTOPICS_SUCCESS",
      X = "GETTOPICS_FAILURE",
      q = "GETALLARTICLE_START",
      z = "GETALLARTICLE_SUCCESS",
      Y = "GETALLARTICLE_FAILURE",
      K = "DELINVALIDVIDEO_SUCCESS",
      Z = "GETFAVNAV_START",
      tt = "GETFAVNAV_SUCCESS",
      et = "GETFAVNAV_FAILURE",
      it = "SETALBUMNAV_SUCCESS",
      nt = "SETFAVBANGUMINUM_SUCCESS",
      at = "FETCHFAVTLIST_SUCCESS",
      rt = "FETCH_CREATEDLIST_START",
      ot = "FETCH_CREATEDLIST_SUCCESS",
      st = "FETCH_CREATEDLIST_FAILURE",
      ct = "FETCH_MYCREATEDLIST_SUCCESS",
      lt = "FETCH_COLLECTEDLIST_SUCCESS",
      ut = "FETCHFAVDETAILS_START",
      dt = "FETCHFAVDETAILS_SUCCESS",
      ft = "FETCHFAVDETAILS_FAILURE",
      pt = "DELFAVPLAYLIST_SUCCESS",
      mt = "THUMBUPORDOWN_SUCCESS",
      ht = "COLLFAVADD_SUCCESS",
      vt = "COLLFAVDEL_SUCCESS",
      _t = "MOREVIDEO_SUCCESS",
      bt = "DELFAVVIDEO_SUCCESS",
      gt = "SHOWFAVSHARE_SUCCESS",
      yt = "MYCOLLFAVDEL_SUCCESS",
      wt = "DELVIDEO_SUCCESS",
      Ct = "SHAREPLAYLIST_SUCCESS",
      Tt = "MODALADDFAV_LOAD",
      St = "MODALADDFAV_SUCCESS",
      jt = "GETALBUMCOUNT_SUCCESS",
      Pt = "GETALBUMLIST_SUCCESS",
      Lt = "GETALBUMLIST_FAILURE",
      Mt = "GETPLAYLIST_START",
      Ut = "GETPLAYLIST_SUCCESS",
      xt = "GETPLAYLIST_FAILURE",
      kt = "GETPLAYLISTINFO_START",
      Et = "GETPLAYLISTINFO_SUCCESS",
      It = "GETPLAYLISTINFO_FAILURE",
      Ot = "GETPLAYLISTAUTH",
      $t = "TOGGLESPACESTATE",
      At = "GETRELATIONLIST_SUCCESS",
      Nt = "GETRELATIONLIST_START",
      Dt = "GETRELATIONLIST_FAILURE",
      Jt = "MOVEFROMBAN_SUCCESS",
      Vt = "ADDATTENTION",
      Rt = "REMOVEATTENTION",
      Ft = "SETINDEXORDER_SUCCESS",
      Bt = "SETPRIVACY_SUCCESS",
      Qt = "FETCH_NUMBERS_SUCCESS",
      Gt = "UPDATE_RELATION",
      Ht = "RELATION_WITH_UPER",
      Wt = "GETKNIGHT_SUCCESS",
      Xt = "GETKNIGHT_START",
      qt = "GETUSERTAG_START",
      zt = "GETUSERTAG_SUCCESS",
      Yt = "GETUSERTAG_FAILURE",
      Kt = "GETUSERTAGS_START",
      Zt = "GETUSERTAGS_SUCCESS",
      te = "GETUSERTAGS_FAILURE",
      ee = "GET_ACCRELATION_SUCCESS",
      ie = "GETPUGV_START",
      ne = "GETPUGV_SUCCESS",
      ae = "GETPUGV_FAILURE",
      re = "GETPUGVLIST_SUCCESS",
      oe = "UPDATEPUGVNUM_SUCCESS",
      se = "SET_SUBSCRIBE_LIST",
      ce = "SET_SUBSCRIBE_CANCEL",
      le = "SET_SUBSCRIBE_UPDATE";
  },
  134: function (t, e, i) {
    i.d(e, "e", function () {
      return n;
    }),
      i.d(e, "f", function () {
        return r;
      }),
      i.d(e, "b", function () {
        return o;
      }),
      i.d(e, "d", function () {
        return s;
      }),
      i.d(e, "g", function () {
        return c;
      }),
      i.d(e, "a", function () {
        return l;
      }),
      i.d(e, "c", function () {
        return u;
      });
    var n = function (t) {
        return (
          decodeURIComponent(
            document.cookie.replace(
              new RegExp(
                "(?:(?:^|.*;)\\s*" +
                  encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") +
                  "\\s*\\=\\s*([^;]*).*$)|^.*$"
              ),
              "$1"
            )
          ) || null
        );
      },
      a = function (t) {
        return t < 10 ? "0" + t : t;
      },
      r = function (t) {
        var e = {};
        void 0 !== t &&
          t.split(";").forEach(function (t) {
            var i = t.split("=")[0].trim(),
              n = t.split("=")[1];
            e[i] = n;
          });
        return e;
      },
      o = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        return t.length > e ? t.substr(0, 10) + "..." : t;
      },
      s = function (t, e) {
        var i = "",
          n = (i =
            null == t ? new Date() : new Date(parseInt(t))).getFullYear(),
          r =
            i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1,
          o = i.getDate() < 10 ? "0" + i.getDate() : i.getDate(),
          s = i.getHours() < 10 ? "0" + i.getHours() : i.getHours(),
          c = i.getMinutes() < 10 ? "0" + i.getMinutes() : i.getMinutes(),
          l = i.getSeconds() < 10 ? "0" + i.getSeconds() : i.getSeconds();
        if (0 === e || void 0 === e) return n + "-" + r + "-" + o;
        if (1 === e) return n + "/" + r + "/" + o;
        if (2 === e) return n + "-" + r + "-" + o + " " + s + ":" + c + ":" + l;
        if (3 === e) return s + ":" + c;
        if (4 === e) return r + "月" + o + "日";
        if (5 === e) return r + "-" + o + " " + s + ":" + c;
        if (6 == e) return n + "年" + r + "月";
        if (7 == e) return n + "." + r + "." + o;
        if (8 == e) return n + "-" + r + "-" + o + " " + s + ":" + c;
        if (9 == e) return n + "年" + r + "月" + o + "日";
        if (10 == e) return r + "-" + o;
        if (11 === e) return r + "月" + o + "日  " + s + ":" + c;
        if (12 === e) {
          var u = new Date(),
            d = u.getFullYear(),
            f = a(u.getMonth() + 1),
            p = a(u.getDate());
          return d !== n
            ? n + "-" + r + "-" + o + " " + s + ":" + c
            : f === r && p === o
            ? "今天 " + s + ":" + c
            : f === r && parseInt(p) + 1 === parseInt(o)
            ? "明天 " + s + ":" + c
            : r + "-" + o + " " + s + ":" + c;
        }
      },
      c = function () {
        var t;
        window.reportObserver &&
          window.reportObserver.reportCustomData &&
          (t = window.reportObserver).reportCustomData.apply(t, arguments),
          window.reportObserver &&
            window.reportObserver.forceCommit &&
            window.reportObserver.forceCommit();
      },
      l = function () {
        return new Promise(function (t) {
          window.UserStatus && window.UserStatus.userInfo.isLogin
            ? t()
            : window.UserStatus &&
              window.UserStatus.quickLogin(function () {
                window.location.reload();
              });
        });
      },
      u = function (t) {
        if (isNaN(t)) return "--";
        if (t < 1e4) return t;
        var e = Math.floor(t / 1e4),
          i = Math.floor((t % 1e4) / 1e3);
        return "".concat(e).concat(0 !== i ? ".".concat(i) : "", "w");
      };
  },
  142: function (t, e, i) {
    i.d(e, "a", function () {
      return n;
    });
    var n = [0, 1, -6];
  },
  145: function (t, e, i) {
    var n = {
        name: "be-tags",
        props: {
          isPay: { type: Boolean, default: !1 },
          isCoop: { type: Boolean, default: !1 },
          isNew: { type: Boolean, default: !1 },
          isInter: { type: Boolean, default: !1 },
          isLive: { type: Boolean, default: !1 },
        },
        computed: {
          tagList: function () {
            return [
              { key: this.isPay, class: "pay-tag", name: "付费" },
              { key: this.isLive, class: "live-review", name: "直播回放" },
              { key: this.isCoop, class: "coop-tag", name: "合作" },
              { key: this.isInter, class: "inter-tag", name: "互动" },
              { key: this.isNew, class: "new-tag", name: "NEW" },
            ]
              .filter(function (t) {
                return Object.values(t)[0];
              })
              .slice(0, 2)
              .reverse();
          },
        },
      },
      a = (i(546), i(4)),
      r = Object(a.a)(
        n,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.tagList.length
            ? i(
                "div",
                { staticClass: "be-tags-container" },
                t._l(t.tagList, function (e, n) {
                  return i("div", { key: n, class: ["tag", "" + e.class] }, [
                    t._v(t._s(e.name)),
                  ]);
                }),
                0
              )
            : t._e();
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.a = r.exports;
  },
  17: function (t, e, i) {
    function n(t) {
      if (t) {
        var e = [];
        for (var i in t)
          "_" !== i &&
            "ts" !== i &&
            "space_callback" !== i &&
            e.push("".concat(i, "=").concat(t[i]));
        return e.join("&");
      }
      return "";
    }
    function a(t, e, i) {
      return "".concat(t, "_").concat(e, "_").concat(i);
    }
    i.d(e, "a", function () {
      return r;
    }),
      i.d(e, "c", function () {
        return o;
      }),
      i.d(e, "d", function () {
        return s;
      }),
      i.d(e, "b", function () {
        return c;
      });
    var r = function (t, e) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = n(e),
          o = sessionStorage.getItem(a(i, t, r));
        return o ? Promise.resolve(JSON.parse(o)) : Promise.reject();
      },
      o = function (t, e, i) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          o = n(e),
          s = a(r, t, o);
        sessionStorage.setItem(s, JSON.stringify(i));
      },
      s = function (t, e, i) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          o = n(e),
          s = a(r, t, o),
          c = sessionStorage.getItem(s);
        if (c) {
          for (
            var l, u = JSON.parse(c), d = Object.keys(i), f = d.length;
            f--;

          )
            u[(l = d[f])] = i[l];
          sessionStorage.setItem(s, JSON.stringify(u));
        }
      },
      c = function (t, e) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = n(e),
          o = a(i, t, r);
        sessionStorage.removeItem(o);
      };
  },
  201: function (t, e, i) {},
  202: function (t, e, i) {},
  203: function (t, e, i) {},
  204: function (t, e, i) {},
  205: function (t, e, i) {},
  206: function (t, e, i) {},
  207: function (t, e, i) {},
  208: function (t, e, i) {},
  209: function (t, e, i) {},
  210: function (t, e, i) {},
  214: function (t, e, i) {
    i.r(e),
      i.d(e, "setTopVideos", function () {
        return r;
      }),
      i.d(e, "fetchTopVideos", function () {
        return o;
      }),
      i.d(e, "deleteTopVideos", function () {
        return s;
      }),
      i.d(e, "setMasterpiece", function () {
        return c;
      }),
      i.d(e, "fetchMasterpiece", function () {
        return l;
      }),
      i.d(e, "deleteMasterpiece", function () {
        return u;
      });
    var n = i(1),
      a = i(0),
      r = function (t, e) {
        t.commit;
        var i = e.aid,
          n = e.reason;
        return a.default.http
          .post("//api.bilibili.com/x/space/top/arc/set", { aid: i, reason: n })
          .then(
            function (t) {
              var e = t.data,
                i = e.message;
              return 0 == +e.code
                ? Promise.resolve()
                : (a.default.$warn("设置置顶视频失败，".concat(i)),
                  Promise.reject());
            },
            function () {
              return (
                a.default.$warn("设置置顶视频失败，网络错误"), Promise.reject()
              );
            }
          );
      },
      o = function (t, e) {
        var i = t.commit,
          r = e.mid,
          o = e.isOwner;
        return a.default
          .http({
            method: "get",
            url: "//api.bilibili.com/x/space/top/arc",
            params: { vmid: r },
            withCredentials: !!o,
          })
          .then(function (t) {
            var e = t.data,
              a = e.data;
            return 0 == +e.code ? i(n.zb, a) : i(n.yb);
          });
      },
      s = function (t) {
        var e = t.commit;
        a.default.http.post("//api.bilibili.com/x/space/top/arc/cancel").then(
          function (t) {
            var i = t.data,
              r = i.data;
            0 == +i.code
              ? e(n.g)
              : a.default.$warn("取消置顶视频失败，".concat(r));
          },
          function () {
            return a.default.$warn("取消置顶视频失败，网络错误");
          }
        );
      },
      c = function (t, e) {
        t.commit;
        var i = e.aid,
          n = e.reason;
        return a.default.http
          .post("//api.bilibili.com/x/space/masterpiece/add", {
            aid: i,
            reason: n,
          })
          .then(
            function (t) {
              var e = t.data,
                i = e.message;
              return 0 == +e.code
                ? Promise.resolve()
                : (a.default.$warn("设置代表作失败，".concat(i)),
                  Promise.reject());
            },
            function () {
              return (
                a.default.$warn("设置代表作失败，网络错误"), Promise.reject()
              );
            }
          );
      },
      l = function (t, e) {
        var i = t.commit,
          r = e.mid,
          o = e.isOwner;
        a.default
          .http({
            method: "get",
            url: "//api.bilibili.com/x/space/masterpiece",
            params: { vmid: r },
            withCredentials: !!o,
          })
          .then(function (t) {
            var e = t.data,
              a = e.data;
            0 == +e.code ? i(n.Y, a) : i(n.X);
          });
      },
      u = function (t, e) {
        var i = t.commit,
          r = e.id;
        return a.default.http
          .post("//api.bilibili.com/x/space/masterpiece/cancel", { aid: r })
          .then(
            function (t) {
              var e = t.data,
                o = e.code,
                s = e.message;
              return 0 == +o
                ? (i(n.f, r), Promise.resolve())
                : (a.default.$warn("取消代表作失败，".concat(s)),
                  Promise.reject());
            },
            function () {
              return (
                a.default.$warn("取消代表作失败，网络错误"), Promise.reject()
              );
            }
          );
      };
  },
  215: function (t, e, i) {
    i.r(e),
      i.d(e, "fetchRelationNumbers", function () {
        return s;
      }),
      i.d(e, "fetchRelationsList", function () {
        return c;
      }),
      i.d(e, "fetchManyInfos", function () {
        return l;
      }),
      i.d(e, "fetchRelation", function () {
        return u;
      }),
      i.d(e, "fetchBeRelation", function () {
        return d;
      }),
      i.d(e, "fetchManyRelations", function () {
        return f;
      }),
      i.d(e, "fetchFansVipInfo", function () {
        return p;
      }),
      i.d(e, "modifyRelations", function () {
        return m;
      }),
      i.d(e, "fetchQuietlyFollowing", function () {
        return h;
      }),
      i.d(e, "fetchUserTag", function () {
        return v;
      }),
      i.d(e, "getUserTagList", function () {
        return _;
      }),
      i.d(e, "addUserTag", function () {
        return b;
      }),
      i.d(e, "updateUserTag", function () {
        return g;
      }),
      i.d(e, "delUserTag", function () {
        return y;
      }),
      i.d(e, "moveUser", function () {
        return w;
      }),
      i.d(e, "copyUser", function () {
        return C;
      }),
      i.d(e, "updateRelationList", function () {
        return T;
      }),
      i.d(e, "modifyRelationList", function () {
        return S;
      }),
      i.d(e, "getKnight", function () {
        return j;
      }),
      i.d(e, "exitKnight", function () {
        return P;
      });
    var n = i(17),
      a = i(1),
      r = i(0),
      o = "//api.bilibili.com/x/relation",
      s = function (t, e) {
        var i = t.commit;
        return r.default.http
          .get("".concat(o, "/stat"), { params: { vmid: e } })
          .then(
            function (t) {
              var e = t.data,
                n = e.data,
                r = e.code,
                o = e.message;
              return 0 === r
                ? (i(a.D, n), Promise.resolve(n))
                : (console.log("用户关系数据获取失败，".concat(o)),
                  i(a.D, { following: 0, whisper: 0, black: 0, follower: 0 }),
                  Promise.resolve({
                    following: 0,
                    whisper: 0,
                    black: 0,
                    follower: 0,
                  }));
            },
            function () {
              return (
                r.default.$warn("获取用户关系数据失败，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      c = function (t, e) {
        var i = t.commit,
          n = e.params,
          s = e.type;
        return (
          i(a.qb),
          r.default.http.jsonp("".concat(o, "/").concat(s), { params: n }).then(
            function (t) {
              var e = t.code,
                n = t.data,
                r = t.message;
              if (0 === e) {
                var o = n.list;
                return i(a.rb, o && o.length > 0 ? o : []), Promise.resolve(n);
              }
              return (
                i(a.rb, []),
                console.log("获取粉丝列表失败，".concat(r)),
                Promise.reject()
              );
            },
            function () {
              return (
                console.log("获取粉丝列表失败，网络错误"),
                i(a.rb, []),
                Promise.reject()
              );
            }
          )
        );
      },
      l = function (t, e) {
        t.commit;
        return r.default.http.post("/ajax/member/GetInfos", { mid: e }).then(
          function (t) {
            var e = t.data,
              i = e.status,
              n = e.data;
            return i
              ? Promise.resolve(n.cards)
              : (console.log("批量获取用户信息失败，".concat(n)),
                Promise.reject());
          },
          function () {
            return Promise.reject();
          }
        );
      },
      u = function (t, e) {
        t.commit;
        return r.default.http.jsonp(o, { params: { fid: e } }).then(
          function (t) {
            var e = t.code,
              i = t.data,
              n = t.message;
            return 0 === e
              ? Promise.resolve(i)
              : (console.log("单条获取用户关系失败，".concat(n)),
                Promise.reject());
          },
          function () {
            return Promise.reject();
          }
        );
      },
      d = function (t, e) {
        t.commit;
        return r.default.http
          .jsonp("//api.bilibili.com/x/space/acc/relation", {
            params: { mid: e },
          })
          .then(function (t) {
            var e = t.code,
              i = t.data,
              n = t.message;
            return 0 === e
              ? Promise.resolve(i)
              : (console.log("单条获取用户被关注关系失败，".concat(n)),
                Promise.reject());
          });
      },
      f = function (t, e) {
        t.commit;
        return r.default.http
          .jsonp("".concat(o, "/relations"), { params: { fids: e } })
          .then(
            function (t) {
              var e = t.code,
                i = t.data,
                n = t.message;
              return 0 === e
                ? Promise.resolve(i)
                : (console.log("批量获取用户关系失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return Promise.reject();
            }
          );
      },
      p = function (t, e) {
        t.commit;
        return r.default.http
          .get("/ajax/member/getMultiVipInfo", { params: { idList: e } })
          .then(
            function (t) {
              var e = t.data,
                i = e.status,
                n = e.data;
              return i
                ? Promise.resolve(n)
                : (console.log("批量获取粉丝的会员信息失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return Promise.reject();
            }
          );
      },
      m = function (t, e) {
        var i = t.commit,
          c = e.mid,
          l = e.act,
          f = e.needFetchNumber,
          p = void 0 === f || f;
        return r.default.http
          .post("".concat(o, "/modify"), { fid: c, act: l, re_src: 11 })
          .then(
            function (t) {
              var e = t.data,
                o = e.code,
                f = e.message;
              if (
                (Object(n.b)(
                  "//api.bilibili.com/x/space/acc/info",
                  { mid: c },
                  _bili_space_mid
                ),
                [0, 22004, 22005].indexOf(o) > -1)
              ) {
                switch (
                  (p &&
                    setTimeout(function () {
                      s({ commit: i }, _bili_space_mid);
                    }, 800),
                  c === _bili_space_mid &&
                    setTimeout(function () {
                      u({ commit: i }, c).then(function (t) {
                        var e = t.attribute;
                        i(a.Ob, +e),
                          i(a.ec, [2, 6].indexOf(+e) > -1 ? "fans" : "visitor");
                      }),
                        d({ commit: i }, c).then(function (t) {
                          i(a.Ib, t);
                        });
                    }, 800),
                  l)
                ) {
                  case 1:
                    i(a.a, c);
                    break;
                  case 2:
                    i(a.Pb, c);
                    break;
                  case 6:
                    i(a.Mb, c);
                }
                return Promise.resolve();
              }
              return 22006 === o
                ? ($.getScript(
                    "//static.hdslb.com/plugins/attentionLimitPopup/attentionLimitPopup.js",
                    function () {
                      new window.attentionLimitPopup();
                    }
                  ),
                  Promise.reject())
                : (r.default.$warn(f), Promise.reject());
            },
            function () {
              return r.default.$warn("网络错误，请稍后重试"), Promise.reject();
            }
          );
      },
      h = function (t, e) {
        var i = t.commit,
          n = e.pn,
          s = e.ps,
          c = void 0 === s ? 20 : s;
        i(a.qb),
          r.default.http
            .jsonp("".concat(o, "/whispers"), { params: { pn: n, ps: c } })
            .then(
              function (t) {
                var e = t.data,
                  n = t.code,
                  o = t.message;
                0 == +n
                  ? i(a.rb, e.list)
                  : (r.default.$warn("获取悄悄关注列表失败，".concat(o)),
                    i(a.pb));
              },
              function () {
                r.default.$warn("获取悄悄关注列表失败，网络错误"), i(a.pb);
              }
            );
      },
      v = function (t, e) {
        var i = t.commit;
        i(a.qb),
          r.default.http.jsonp("".concat(o, "/tag"), { params: e }).then(
            function (t) {
              var e = t.code,
                n = t.data,
                o = t.message;
              0 === e
                ? (n.forEach(function (t) {
                    t.attribute = 2;
                  }),
                  i(a.rb, n && n.length > 0 ? n : []))
                : (r.default.$warn("获取用户信息失败，".concat(o)), i(a.pb));
            },
            function () {
              r.default.$warn("获取用户信息失败，网络错误"), i(a.pb);
            }
          );
      },
      _ = function (t) {
        var e = t.commit;
        return (
          e(a.Cb),
          r.default.http.jsonp("".concat(o, "/tags")).then(
            function (t) {
              var i = t.data,
                n = t.code,
                o = t.message;
              return 0 == +n
                ? (e(a.Db, i), Promise.resolve())
                : (r.default.$warn("获取用户分组列表失败，".concat(o)),
                  e(a.Bb),
                  Promise.reject());
            },
            function (t) {
              return (
                console.log(t),
                r.default.$warn("获取用户分组列表失败，网络错误"),
                e(a.Bb),
                Promise.reject()
              );
            }
          )
        );
      },
      b = function (t, e) {
        t.commit;
        return r.default.http
          .post("".concat(o, "/tag/create"), { tag: e })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message,
                a = e.data;
              return 0 === i
                ? Promise.resolve(a.tagid)
                : (r.default.$warn("创建标签失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return (
                r.default.$warn("创建标签失败，网络错误"), Promise.reject()
              );
            }
          );
      },
      g = function (t, e) {
        t.commit;
        var i = e.tagid,
          n = e.name;
        return r.default.http
          .post("".concat(o, "/tag/update"), { tagid: i, name: n })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 === i
                ? Promise.resolve("更改名称成功")
                : (r.default.$warn("更改名称失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return (
                r.default.$warn("更改名称失败，网络错误"), Promise.reject()
              );
            }
          );
      },
      y = function (t, e) {
        t.commit;
        return r.default.http.post("".concat(o, "/tag/del"), { tagid: e }).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 === i
              ? Promise.resolve("删除成功")
              : (r.default.$warn("删除频道失败，".concat(n)), Promise.reject());
          },
          function () {
            return r.default.$warn("删除频道失败，网络错误"), Promise.reject();
          }
        );
      },
      w = function (t, e) {
        t.commit;
        var i = e.beforeTagids,
          n = e.afterTagids,
          a = e.fids;
        return r.default.http
          .post("".concat(o, "/tags/moveUsers"), {
            beforeTagids: i,
            afterTagids: n,
            fids: a,
          })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 === i
                ? Promise.resolve("移动用户成功")
                : (r.default.$warn("加入分组失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return (
                r.default.$warn("加入分组失败，网络错误"), Promise.reject()
              );
            }
          );
      },
      C = function (t, e) {
        t.commit;
        var i = e.fids,
          n = e.tagids;
        return r.default.http
          .post("".concat(o, "/tags/copyUsers"), { fids: i, tagids: n })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 === i
                ? Promise.resolve("复制用户成功")
                : (r.default.$warn("复制用户失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return (
                r.default.$warn("复制用户失败，网络错误"), Promise.reject()
              );
            }
          );
      },
      T = function (t, e) {
        (0, t.commit)(a.hc, e);
      },
      S = function (t, e) {
        (0, t.commit)(a.rb, e);
      },
      j = function (t, e) {
        var i = t.commit,
          n = e.pn,
          o = e.ps,
          s = void 0 === o ? 20 : o;
        return (
          i(a.V),
          r.default.http
            .jsonp("//api.bilibili.com/x/space/rider/list", {
              params: { pn: n, ps: s },
            })
            .then(
              function (t) {
                var e = t.data,
                  n = t.code,
                  o = t.message;
                if (0 === n) {
                  var s = e.list,
                    c = e.page;
                  return null === s
                    ? (i(a.W, { list: [], count: 0 }), Promise.resolve([]))
                    : (i(a.W, { list: s, count: c.count }),
                      s.forEach(function (t) {
                        t.attribute = 2;
                      }),
                      Promise.resolve(s));
                }
                return (
                  r.default.$warn("请求骑士团数据失败，".concat(o)),
                  Promise.reject()
                );
              },
              function () {
                return (
                  r.default.$warn("请求骑士团数据失败，网络错误"),
                  Promise.reject()
                );
              }
            )
        );
      },
      P = function (t, e) {
        t.commit;
        var i = e.mid;
        return r.default.http
          .post("//api.bilibili.com/x/space/rider/exit", { up_mid: i })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 === i
                ? Promise.resolve()
                : (r.default.$warn("退出骑士团失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return (
                r.default.$warn("退出骑士团失败，网络错误"), Promise.reject()
              );
            }
          );
      };
  },
  216: function (t, e, i) {
    i.r(e),
      i.d(e, "fetchFavList", function () {
        return p;
      }),
      i.d(e, "fetchMyFavList", function () {
        return m;
      }),
      i.d(e, "delFavList", function () {
        return h;
      }),
      i.d(e, "editFavPublic", function () {
        return v;
      }),
      i.d(e, "editFavName", function () {
        return _;
      }),
      i.d(e, "createFavList", function () {
        return b;
      }),
      i.d(e, "sortFavList", function () {
        return g;
      }),
      i.d(e, "fetchFavNavList", function () {
        return y;
      }),
      i.d(e, "fetchFavDetail", function () {
        return w;
      }),
      i.d(e, "fetchFavTlist", function () {
        return C;
      }),
      i.d(e, "delVideo", function () {
        return T;
      }),
      i.d(e, "moveVideo", function () {
        return S;
      }),
      i.d(e, "copyVideo", function () {
        return j;
      }),
      i.d(e, "fetchTopics", function () {
        return P;
      }),
      i.d(e, "delTopics", function () {
        return L;
      }),
      i.d(e, "delArticles", function () {
        return M;
      }),
      i.d(e, "fetchArticleAllList", function () {
        return U;
      }),
      i.d(e, "delInvalidVideo", function () {
        return x;
      }),
      i.d(e, "delInvalidVideoState", function () {
        return k;
      }),
      i.d(e, "fetchFavedPlaylists", function () {
        return E;
      }),
      i.d(e, "delFavedPlaylist", function () {
        return I;
      }),
      i.d(e, "setFavAlbumNum", function () {
        return O;
      }),
      i.d(e, "setFavBangumiNum", function () {
        return A;
      }),
      i.d(e, "fetchCreatedFav", function () {
        return N;
      }),
      i.d(e, "fetchHomeCreatedFav", function () {
        return D;
      }),
      i.d(e, "fetchMyCreatedFav", function () {
        return J;
      }),
      i.d(e, "fetchCollectedFav", function () {
        return V;
      }),
      i.d(e, "fetchFavDetails", function () {
        return R;
      }),
      i.d(e, "fetchCollectionDetails", function () {
        return F;
      }),
      i.d(e, "delFavPlayList", function () {
        return B;
      }),
      i.d(e, "sortFavPlayLiat", function () {
        return Q;
      }),
      i.d(e, "thumbUpOrDown", function () {
        return G;
      }),
      i.d(e, "collFavAdd", function () {
        return H;
      }),
      i.d(e, "collFavDel", function () {
        return W;
      }),
      i.d(e, "collectionDel", function () {
        return X;
      }),
      i.d(e, "delFavVideo", function () {
        return q;
      }),
      i.d(e, "sharePlayList", function () {
        return z;
      }),
      i.d(e, "modalAddFav", function () {
        return Y;
      });
    var n = i(2),
      a = i.n(n),
      r = i(1),
      o = i(0);
    function s(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s(Object(i), !0).forEach(function (e) {
              a()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : s(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var l = "//api.bilibili.com/x/v2/fav/folder",
      u = "//api.bilibili.com/x/v2/fav/video",
      d = "//api.bilibili.com/x/v2/fav/topic",
      f = "//api.bilibili.com/x/article/favorites",
      p = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = e.mymid;
        return (
          i(r.S),
          o.default.http.jsonp(l, { params: { vmid: n } }).then(
            function (t) {
              var e = t.data,
                s = void 0 === e ? [] : e,
                c = t.code,
                l = t.message,
                u = {
                  count: s.length,
                  list: s.map(function (t) {
                    return (t.name = t.name.decodeHTML()), t;
                  }),
                };
              return 0 == +c
                ? (i(r.T, u), a === n && i(r.bb, u), Promise.resolve(u))
                : (i(r.R),
                  o.default.$warn("获取用户收藏夹列表失败，".concat(l)),
                  Promise.reject());
            },
            function () {
              return (
                i(r.R),
                o.default.$warn("获取用户收藏夹列表失败，网络错误"),
                Promise.reject()
              );
            }
          )
        );
      },
      m = function (t, e) {
        var i = t.commit;
        return (
          i(r.ab),
          o.default.http.jsonp(l, { params: { vmid: e } }).then(
            function (t) {
              var e = t.data,
                n = void 0 === e ? [] : e,
                a = t.code,
                s = t.message,
                c = {
                  count: n.length,
                  list: n.map(function (t) {
                    return (t.name = t.name.decodeHTML()), t;
                  }),
                };
              return 0 == +a
                ? (i(r.bb, c), Promise.resolve())
                : (i(r.Z),
                  o.default.$warn("获取用户收藏夹列表失败，".concat(s)),
                  Promise.reject());
            },
            function () {
              return (
                i(r.Z),
                o.default.$warn("获取用户收藏夹列表失败，网络错误"),
                Promise.reject()
              );
            }
          )
        );
      },
      h = function (t, e) {
        var i = t.commit;
        return o.default.http.post("".concat(l, "/del"), { fid: e }).then(
          function (t) {
            var n = t.data,
              a = n.code,
              s = n.message;
            return 0 == +a
              ? (i(r.h, e), Promise.resolve())
              : (o.default.$warn("删除收藏夹失败，".concat(s)),
                Promise.reject());
          },
          function () {
            return (
              o.default.$warn("删除收藏夹失败 ∑(っ °Д °;)っ，网络错误"),
              Promise.reject()
            );
          }
        );
      },
      v = function (t, e) {
        var i = t.commit,
          n = e.fid,
          a = e.isPublic;
        return o.default.http
          .post("".concat(l, "/public"), { fid: n, public: a })
          .then(
            function (t) {
              var e = t.data,
                s = e.code,
                c = e.message;
              return 0 == +s
                ? (i(r.Tb, n, a), Promise.resolve())
                : (o.default.$warn("设置收藏夹公开性失败，".concat(c)),
                  Promise.reject());
            },
            function () {
              return (
                o.default.$warn("设置收藏夹公开性失败 ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      _ = function (t, e) {
        var i = t.commit,
          n = e.fid,
          a = e.name;
        return o.default.http
          .post("".concat(l, "/rename"), { fid: n, name: a })
          .then(
            function (t) {
              var e = t.data,
                s = e.code,
                c = e.message;
              return [61001, 61002].indexOf(+s) > -1
                ? ($.getScript(
                    "//static.hdslb.com/common/js/identityDialog.js",
                    function () {
                      IdentityDialog(s, c);
                    }
                  ),
                  Promise.reject())
                : 0 == +s
                ? (i(r.Qb, n, a), Promise.resolve())
                : (o.default.$warn("重命名收藏夹失败，".concat(c)),
                  Promise.reject());
            },
            function () {
              return (
                o.default.$warn("重命名收藏夹失败 ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      b = function (t, e) {
        t.commit;
        var i = e.name,
          n = e.isPublic;
        return o.default.http
          .post("".concat(l, "/add"), { name: i, public: n })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return [61001, 61002].indexOf(+i) > -1
                ? ($.getScript(
                    "//static.hdslb.com/common/js/identityDialog.js",
                    function () {
                      IdentityDialog(i, n);
                    }
                  ),
                  Promise.reject())
                : 0 == +i
                ? Promise.resolve()
                : (o.default.$warn("新建收藏夹失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return (
                o.default.$warn("新建收藏夹失败，网络错误，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      g = function (t, e) {
        t.commit;
        return o.default.http.post("".concat(l, "/sort"), { fids: e }).then(
          function (t) {
            var e = t.data;
            return 0 == +e.code
              ? Promise.resolve()
              : (o.default.$warn("收藏夹排序失败，".concat(e.data)),
                Promise.reject());
          },
          function () {
            return (
              o.default.$warn("收藏夹排序失败，网络错误"), Promise.reject()
            );
          }
        );
      },
      y = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = e.mymid;
        return (
          i(r.P),
          o.default.http
            .jsonp("//api.bilibili.com/x/space/fav/nav", { params: { mid: n } })
            .then(
              function (t) {
                var e = t.data,
                  s = void 0 === e ? [] : e,
                  c = t.code,
                  l = t.message;
                if (0 == +c) {
                  var u = {
                    count: s.archive.length,
                    list: s.archive.map(function (t) {
                      return (t.name = t.name.decodeHTML()), t;
                    }),
                    data: s,
                  };
                  return i(r.Q, u), a === n && i(r.bb, u), Promise.resolve(u);
                }
                return (
                  i(r.O),
                  o.default.$warn("获取用户收藏夹列表失败，".concat(l)),
                  Promise.reject()
                );
              },
              function () {
                return (
                  i(r.O),
                  o.default.$warn("获取播单收藏夹列表失败，网络错误"),
                  Promise.reject()
                );
              }
            )
        );
      },
      w = function (t, e) {
        var i = t.commit;
        return (
          i(r.u),
          o.default.http
            .jsonp("//api.bilibili.com/x/space/fav/arc", { params: e })
            .then(
              function (t) {
                var e = t.data,
                  n = void 0 === e ? {} : e,
                  a = t.code,
                  s = t.message,
                  c = {
                    count: n.total,
                    pages: n.pagecount,
                    vlist: n.archives.map(function (t) {
                      return (
                        (t.desc = t.desc.decodeHTML()),
                        (t.title = t.title.decodeHTML()),
                        t
                      );
                    }),
                  };
                return 0 == +a
                  ? (i(r.v, c), Promise.resolve(c))
                  : 11018 == +a
                  ? (i(r.t), Promise.reject(11018))
                  : (o.default.$warn(
                      "收藏夹详情获取失败！ ∑(っ °Д °;)っ，".concat(s)
                    ),
                    Promise.reject());
              },
              function () {
                return i(r.t), Promise.reject();
              }
            )
        );
      },
      C = function (t, e) {
        var i = t.commit;
        return o.default.http
          .get("//api.bilibili.com/x/v3/fav/resource/partition", {
            params: e,
            withCredentials: !0,
          })
          .then(
            function (t) {
              var e = t.data,
                n = e.data,
                a = void 0 === n ? [] : n,
                o = e.code,
                s = e.message;
              return 0 == +o
                ? (i(r.w, a), Promise.resolve(a))
                : (console.log(
                    "收藏夹分区获取失败！ ∑(っ °Д °;)っ，".concat(s)
                  ),
                  Promise.reject());
            },
            function () {
              return (
                console.log("收藏夹分区获取失败！ ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      T = function (t, e) {
        t.commit;
        var i = e.fid,
          n = e.aid,
          a = u,
          r = { fid: i };
        return (
          "number" == typeof n || -1 === n.indexOf(",")
            ? ((a += "/del"), (r.aid = n))
            : ((a += "/mdel"), (r.aids = n)),
          o.default.http.post(a, r).then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 == +i
                ? Promise.resolve()
                : (o.default.$warn(
                    "取消收藏失败了！ ∑(っ °Д °;)っ，".concat(n)
                  ),
                  Promise.reject());
            },
            function () {
              return (
                o.default.$warn("取消收藏失败了！ ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          )
        );
      },
      S = function (t, e) {
        t.commit;
        var i = e.src_media_id,
          n = e.tar_media_id,
          a = e.resources;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/resource/move", {
            src_media_id: i,
            tar_media_id: n,
            resources: a,
            platform: "web",
          })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 == +i
                ? Promise.resolve()
                : (o.default.$warn(
                    "移动视频失败了！ ∑(っ °Д °;)っ，".concat(n)
                  ),
                  Promise.reject());
            },
            function () {
              return (
                o.default.$warn("移动视频失败了！ ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      j = function (t, e) {
        t.commit;
        var i = e.src_media_id,
          n = e.tar_media_id,
          a = e.mid,
          r = e.resources;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/resource/copy", {
            src_media_id: i,
            tar_media_id: n,
            mid: a,
            resources: r,
            platform: "web",
          })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 == +i
                ? Promise.resolve()
                : (o.default.$warn(
                    "复制视频失败了！ ∑(っ °Д °;)っ，".concat(n)
                  ),
                  Promise.reject());
            },
            function () {
              return (
                o.default.$warn("复制视频失败了！ ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      P = function (t, e) {
        var i = t.commit;
        return (
          i(r.wb),
          o.default.http.jsonp(d, { params: e }).then(
            function (t) {
              var e = t.code,
                n = t.data;
              return 0 == +e
                ? (n.list.forEach(function (t) {
                    t.name = t.name.decodeHTML();
                  }),
                  i(r.xb, n))
                : i(r.vb);
            },
            function () {
              return i(r.vb);
            }
          )
        );
      },
      L = function (t, e) {
        t.commit;
        return o.default.http.post("".concat(d, "/del"), { tpid: e }).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 == +i
              ? Promise.resolve()
              : (o.default.$warn(
                  "取消收藏夹话题失败了！ ∑(っ °Д °;)っ，".concat(n)
                ),
                Promise.reject());
          },
          function () {
            return (
              o.default.$warn("取消收藏夹话题失败了！ ∑(っ °Д °;)っ，网络错误"),
              Promise.reject()
            );
          }
        );
      },
      M = function (t, e) {
        t.commit;
        return o.default.http.post("".concat(f, "/del"), { id: e }).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 === i
              ? Promise.resolve()
              : (o.default.$warn(
                  "取消收藏夹失败了！ ∑(っ °Д °;)っ，".concat(n)
                ),
                Promise.reject());
          },
          function () {
            return (
              o.default.$warn("取消收藏夹话题失败了！ ∑(っ °Д °;)っ，网络错误"),
              Promise.reject()
            );
          }
        );
      },
      U = function (t, e) {
        var i = t.commit;
        return o.default.http
          .jsonp("".concat(f, "/list/all"), { params: e })
          .then(
            function (t) {
              var e = t.code,
                n = t.data,
                a = t.message;
              0 === e
                ? (n.favorites.forEach(function (t) {
                    (t.title = t.title.decodeHTML()),
                      (t.summary = t.summary.decodeHTML());
                  }),
                  i(r.J, n))
                : (i(r.H), o.default.$warn("获取用户专栏列表失败，".concat(a)));
            },
            function () {
              i(r.H), o.default.$warn("获取用户专栏列表失败，网络错误");
            }
          );
      },
      x = function (t, e) {
        t.commit;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/resource/clean", {
            media_id: e,
            platform: "web",
          })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 == +i
                ? Promise.resolve()
                : (o.default.$warn(
                    "清除失效视频失败了！ ∑(っ °Д °;)っ，".concat(n)
                  ),
                  Promise.reject());
            },
            function () {
              return (
                o.default.$warn("清除失效视频失败了！ ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      k = function (t, e) {
        var i = t.commit;
        o.default.http
          .jsonp("".concat(u, "/cleaned"), { params: { fid: e } })
          .then(
            function (t) {
              var e = t.code,
                n = t.data;
              i(r.k, 0 === e ? n.state : 2);
            },
            function () {
              i(r.k, 2);
            }
          );
      },
      E = function (t, e) {
        var i = t.commit;
        return (
          i(r.jb),
          o.default.http
            .jsonp("//api.bilibili.com/x/playlist/fav", { params: e })
            .then(
              function (t) {
                var e = t.code,
                  n = t.data,
                  a = t.message;
                (n.list = n.list.map(function (t) {
                  return (t.name = t.name.decodeHTML()), t;
                })),
                  0 == +e
                    ? i(r.kb, n)
                    : (i(r.ib),
                      o.default.$warn("获取播单收藏夹列表失败，".concat(a)));
              },
              function () {
                i(r.vb), o.default.$warn("获取播单收藏夹列表失败，网络错误");
              }
            )
        );
      },
      I = function (t, e) {
        t.commit;
        return o.default.http
          .post("".concat("//api.bilibili.com/x/playlist/fav", "/del"), {
            pid: e,
          })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 == +i
                ? Promise.resolve()
                : (o.default.$warn(
                    "取消播单失败了！ ∑(っ °Д °;)っ，\n          ".concat(n)
                  ),
                  Promise.reject());
            },
            function () {
              return (
                o.default.$warn("取消播单失败了！∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      O = function (t, e) {
        (0, t.commit)(r.Rb, e);
      },
      A = function (t, e) {
        (0, t.commit)(r.Sb, e);
      },
      N = function (t, e) {
        var i = t.commit,
          n = e.up_mid;
        return (
          i(r.o),
          o.default.http
            .get("//api.bilibili.com/x/v3/fav/folder/created/list-all", {
              params: { up_mid: n },
              withCredentials: !0,
            })
            .then(function (t) {
              var e = t.data,
                n = e.code,
                a = e.data;
              return 0 == +n
                ? (i(r.p, c({}, a)), Promise.resolve())
                : (i(r.n), Promise.reject());
            })
        );
      },
      D = function (t, e) {
        var i = t.commit,
          n = e.up_mid,
          a = e.ps;
        return (
          i(r.o),
          o.default.http
            .get("//api.bilibili.com/x/v3/fav/folder/created/list", {
              params: { pn: 1, ps: a, up_mid: n },
              withCredentials: !0,
            })
            .then(function (t) {
              var e = t.data,
                n = e.code,
                a = e.data;
              return 0 == +n
                ? (i(r.p, c({}, a)), Promise.resolve())
                : (i(r.n), Promise.reject());
            })
        );
      },
      J = function (t, e) {
        var i = t.commit,
          n = e.up_mid;
        return o.default.http
          .get("//api.bilibili.com/x/v3/fav/folder/created/list-all", {
            params: { up_mid: n },
            withCredentials: !0,
          })
          .then(function (t) {
            var e = t.data,
              n = e.code,
              a = e.data;
            return 0 == +n
              ? (i(r.x, c({}, a)), Promise.resolve())
              : Promise.reject();
          });
      },
      V = function (t, e) {
        var i = t.commit,
          n = e.pn,
          a = e.ps,
          s = e.up_mid,
          l = e.isReSet;
        return o.default.http
          .get("//api.bilibili.com/x/v3/fav/folder/collected/list", {
            params: { pn: n, ps: a, up_mid: s, platform: "web" },
            withCredentials: !0,
          })
          .then(function (t) {
            var e = t.data,
              o = e.code,
              s = e.data,
              u = void 0 === s ? {} : s;
            return 0 == +o
              ? (i(r.m, c(c({}, u), {}, { pn: n, ps: a, isReSet: l })),
                Promise.resolve())
              : Promise.reject();
          });
      },
      R = function (t, e) {
        var i = t.commit;
        return (
          i(r.r),
          o.default.prototype.isIE && (e.t = Math.random()),
          o.default.http
            .get("//api.bilibili.com/x/v3/fav/resource/list", {
              params: c(c({}, e), {}, { platform: "web" }),
              withCredentials: !0,
            })
            .then(function (t) {
              var e = t.data,
                n = e.code,
                a = e.data;
              return 0 == +n
                ? (i(r.s, a), Promise.resolve(a))
                : (i(r.q), Promise.reject());
            })
        );
      },
      F = function (t, e) {
        var i = t.commit;
        return (
          i(r.r),
          o.default.http
            .get("//api.bilibili.com/x/space/fav/season/list", {
              params: e,
              withCredentials: !0,
            })
            .then(function (t) {
              var n = t.data,
                a = n.code,
                o = n.data;
              if (0 == +a) {
                var s = o.medias.slice((e.pn - 1) * e.ps, e.ps * e.pn);
                return (o.medias = s), i(r.s, o), Promise.resolve(o);
              }
              return i(r.q), Promise.reject();
            })
        );
      },
      B = function (t, e) {
        var i = t.commit;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/folder/del", {
            media_ids: e,
            platform: "web",
          })
          .then(function (t) {
            var n = t.data,
              a = n.code,
              s = n.message;
            return 0 == +a
              ? (i(r.i, e), Promise.resolve())
              : (o.default.$warn("删除收藏夹失败，".concat(s)),
                Promise.reject());
          });
      },
      Q = function (t, e) {
        t.commit;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/folder/sort", { sort: e })
          .then(function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 == +i
              ? Promise.resolve()
              : (o.default.$warn("收藏夹排序失败，".concat(n)),
                Promise.reject());
          });
      },
      G = function (t, e) {
        var i = t.commit,
          n = e.rid,
          a = e.thumb_type,
          s = e.type,
          c = e.up_mid;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/thump/up", {
            rid: n,
            thumb_type: a,
            type: s,
            up_mid: c,
          })
          .then(function (t) {
            var e = t.data,
              n = e.data,
              a = e.code,
              s = e.message;
            return 0 == +a
              ? (i(r.cc, n), Promise.resolve())
              : (o.default.$warn("播单点赞/取消点赞失败，".concat(s)),
                Promise.reject());
          });
      },
      H = function (t, e) {
        var i = t.commit;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/folder/fav", { media_id: e })
          .then(function (t) {
            var e = t.data,
              n = e.code,
              a = e.message;
            return 0 == +n
              ? (i(r.c), Promise.resolve())
              : (o.default.$warn("播单收藏失败，".concat(a)), Promise.reject());
          });
      },
      W = function (t, e) {
        var i = t.commit,
          n = e.id,
          a = e.mid,
          s = e.mymid;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/folder/unfav", { media_id: n })
          .then(function (t) {
            var e = t.data,
              c = e.code,
              l = e.message;
            return 0 == +c
              ? (+a == +s && i(r.Nb, n), i(r.d), Promise.resolve())
              : (o.default.$warn("播单取消收藏失败，".concat(l)),
                Promise.reject());
          });
      },
      X = function (t, e) {
        var i = t.commit,
          n = e.id,
          a = e.mid,
          s = e.mymid;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/season/unfav", {
            season_id: n,
            platform: "web",
          })
          .then(function (t) {
            var e = t.data,
              c = e.code,
              l = e.message;
            return 0 == +c
              ? (+a == +s && i(r.Nb, n), Promise.resolve())
              : (o.default.$warn("播单取消收藏失败，".concat(l)),
                Promise.reject());
          });
      },
      q = function (t, e) {
        t.commit;
        var i = e.resources,
          n = e.media_id;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/resource/batch-del", {
            resources: i,
            media_id: n,
            platform: "web",
          })
          .then(function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 == +i
              ? Promise.resolve()
              : (o.default.$warn("取消播单视频失败，".concat(n)),
                Promise.reject());
          });
      },
      z = function (t, e) {
        t.commit;
        var i = e.rid,
          n = e.r_type,
          a = e.cnt_type;
        return o.default.http
          .post("//api.bilibili.com/x/v3/fav/statistics/count", {
            rid: i,
            r_type: n,
            cnt_type: a,
          })
          .then(function (t) {
            return 0 == +t.data.code
              ? Promise.resolve()
              : (console.log("播单分享上报失败"), Promise.reject());
          });
      },
      Y = function (t, e) {
        var i = t.commit,
          n = e.title,
          a = e.privacy,
          s = void 0 === a ? 0 : a,
          c = e.isOwner;
        return (
          i(r.Jb, !0),
          o.default.http
            .post("//api.bilibili.com/x/v3/fav/folder/add", {
              title: n,
              privacy: s,
            })
            .then(function (t) {
              var e = t.data,
                n = e.code,
                a = e.data;
              return (
                i(r.Jb, !1),
                0 == +n
                  ? (i(r.Kb, { data: a, isOwner: c }), Promise.resolve(a))
                  : (o.default.$warn("操作失败，请重试"), Promise.reject())
              );
            })
            .catch(function (t) {
              return (
                i(r.Jb, !1),
                o.default.$warn("新建收藏夹失败, ".concat(t)),
                Promise.reject()
              );
            })
        );
      };
  },
  217: function (t, e, i) {
    i.r(e),
      i.d(e, "favList", function () {
        return n;
      }),
      i.d(e, "isFavListLoad", function () {
        return a;
      }),
      i.d(e, "myFavList", function () {
        return r;
      }),
      i.d(e, "isMyFavListLoad", function () {
        return o;
      }),
      i.d(e, "favDetail", function () {
        return s;
      }),
      i.d(e, "isFavDetailLoad", function () {
        return c;
      }),
      i.d(e, "topics", function () {
        return l;
      }),
      i.d(e, "favArticles", function () {
        return u;
      }),
      i.d(e, "isArticleListLoad", function () {
        return d;
      }),
      i.d(e, "isTopicLoad", function () {
        return f;
      }),
      i.d(e, "idPlaylistListLoad", function () {
        return p;
      }),
      i.d(e, "delInvalidVideoStateNum", function () {
        return m;
      }),
      i.d(e, "playlists", function () {
        return h;
      }),
      i.d(e, "favNavList", function () {
        return v;
      }),
      i.d(e, "isFarNavListLoad", function () {
        return _;
      }),
      i.d(e, "tlist", function () {
        return b;
      }),
      i.d(e, "createdList", function () {
        return g;
      }),
      i.d(e, "collectedList", function () {
        return y;
      }),
      i.d(e, "favListDetails", function () {
        return w;
      }),
      i.d(e, "isShowFavShare", function () {
        return C;
      }),
      i.d(e, "isCreatedFavLoad", function () {
        return T;
      }),
      i.d(e, "myCreatedList", function () {
        return S;
      }),
      i.d(e, "isAddFavLoad", function () {
        return j;
      }),
      i.d(e, "modalAddFavList", function () {
        return P;
      });
    var n = function (t) {
        return t.favList;
      },
      a = function (t) {
        return t.isFavListLoad;
      },
      r = function (t) {
        return t.myFavList;
      },
      o = function (t) {
        return t.isMyFavListLoad;
      },
      s = function (t) {
        return t.favDetail;
      },
      c = function (t) {
        return t.isFavDetailLoad;
      },
      l = function (t) {
        return t.topics;
      },
      u = function (t) {
        return t.articles;
      },
      d = function (t) {
        return t.isArticleListLoad;
      },
      f = function (t) {
        return t.isTopicLoad;
      },
      p = function (t) {
        return t.idPlaylistListLoad;
      },
      m = function (t) {
        return t.delInvalidVideoStateNum;
      },
      h = function (t) {
        return t.playlists;
      },
      v = function (t) {
        return t.favNavList;
      },
      _ = function (t) {
        return t.isFarNavListLoad;
      },
      b = function (t) {
        return t.tlist;
      },
      g = function (t) {
        return t.createdList;
      },
      y = function (t) {
        return t.collectedList;
      },
      w = function (t) {
        return t.favListDetails;
      },
      C = function (t) {
        return t.isShowFavShare;
      },
      T = function (t) {
        return t.isCreatedFavLoad;
      },
      S = function (t) {
        return t.myCreatedList;
      },
      j = function (t) {
        return t.isAddFavLoad;
      },
      P = function (t) {
        return t.modalAddFavList;
      };
  },
  218: function (t, e, i) {},
  219: function (t, e, i) {
    i(220);
  },
  220: function (t, e, i) {},
  221: function (t, e, i) {},
  222: function (t, e, i) {},
  223: function (t, e, i) {},
  224: function (t, e, i) {},
  225: function (t, e, i) {},
  226: function (t, e, i) {},
  227: function (t, e, i) {},
  228: function (t, e, i) {},
  229: function (t, e, i) {},
  230: function (t, e, i) {},
  231: function (t, e, i) {},
  232: function (t, e, i) {},
  233: function (t, e, i) {},
  253: function (t, e, i) {
    t.exports = i(553);
  },
  41: function (t, e, i) {
    i.d(e, "a", function () {
      return o;
    }),
      i.d(e, "c", function () {
        return s;
      }),
      i.d(e, "b", function () {
        return c;
      });
    i(2);
    var n = i(72),
      a = i.n(n);
    var r = function (t) {
      var e = "" + document.cookie,
        i = e.indexOf(t + "=");
      if (-1 === i || "" === t) return "";
      var n = e.indexOf(";", i);
      return (
        -1 === n && (n = e.length), unescape(e.substring(i + t.length + 1, n))
      );
    };
    !window || !window.localStorage || a()(window.localStorage);
    !(function () {
      if ("undefined" == typeof window) return !1;
      try {
        document
          .createElement("canvas")
          .toDataURL("image/webp")
          .indexOf("data:image/webp");
      } catch (t) {
        return !1;
      }
    })();
    "undefined" != typeof window && window.console && window.console.log;
    var o = function () {
        var t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            e.spm_id ||
            (null === (t = document.getElementsByTagName("meta").spm_prefix) ||
            void 0 === t
              ? void 0
              : t.content) ||
            "0.0",
          a = e.c || e.CBlock || "0",
          r = e.d || e.DBlock || "0",
          o = e.e,
          s = o
            ? "".concat(n, ".").concat(a, ".").concat(r, ".").concat(o)
            : "".concat(n, ".").concat(a, ".").concat(r);
        if (!e.type) throw new Error("report need type");
        (i.spm_id = s),
          window.reportObserver &&
            window.reportObserver.reportCustomData &&
            window.reportObserver.reportCustomData(e.type, i);
      },
      s =
        ((function () {
          try {
            r("bili_jct");
          } catch (t) {
            return "";
          }
        })(),
        function (t, e) {
          return t
            ? t.replace(
                e || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g,
                function (t, e) {
                  return e
                    ? t
                    : {
                        "<": "&lt;",
                        "&": "&amp;",
                        '"': "&quot;",
                        ">": "&gt;",
                        "'": "&#39;",
                      }[t];
                }
              )
            : "";
        });
    var c = function (t) {
      if (!t) return "";
      var e = t.replace(/^(http:\/\/|:\/\/|\/\/|\/)/, "https://");
      return e.match(/^https:\/\//) ? e : "https://" + e;
    };
  },
  503: function (t, e, i) {
    t.exports = i(71);
  },
  504: function (t, e, i) {
    i(201);
  },
  505: function (t, e, i) {
    i(202);
  },
  506: function (t, e, i) {
    i(203);
  },
  509: function (t, e, i) {
    i(204);
  },
  510: function (t, e, i) {
    i(205);
  },
  511: function (t, e, i) {
    i(206);
  },
  512: function (t, e, i) {
    i(207);
  },
  513: function (t, e, i) {
    i(208);
  },
  514: function (t, e, i) {
    t.exports = i.p + "assets/theme-buy-failed.png";
  },
  515: function (t, e, i) {
    i(209);
  },
  516: function (t, e, i) {
    i(210);
  },
  517: function (t, e, i) {},
  527: function (t, e) {},
  529: function (t, e, i) {
    i(218);
  },
  530: function (t, e, i) {
    i(221);
  },
  534: function (t, e, i) {
    i(222);
  },
  535: function (t, e, i) {
    i(223);
  },
  536: function (t, e, i) {
    i(224);
  },
  538: function (t, e, i) {
    i(225);
  },
  539: function (t, e, i) {
    i(226);
  },
  54: function (t, e, i) {
    var n = i(194),
      a = i.n(n),
      r = i(237),
      o = i.n(r),
      s = i(138),
      c = i.n(s);
    function l(t) {
      return (
        (t.query.jsonp = "jsonp"),
        (t.param = t.params || t.param || t.data),
        new Promise(function (e, i) {
          (t.url = t.query ? t.url + "?" + c.a.stringify(t.query) : ""),
            t.url.indexOf("http") < 0 &&
              (t.url = window.location.protocol + t.url);
          var n = { timeout: t.timeout, prefix: t.jsonCallback };
          o()(t.url, n, function (t, n) {
            if (t) return i(t);
            var a = { code: n.code, data: n };
            e(a);
          });
        })
      );
    }
    function u(t) {
      return (
        t.contentType &&
          ((t.headers = t.headers || {}),
          (t.headers["Content-Type"] = t.contentType)),
        (t.url = t.query ? t.url + "?" + c.a.stringify(t.query) : t.url),
        a()(t)
      );
    }
    e.a = function (t) {
      return t.jsonp
        ? l(t).catch(function () {
            if (t.fallbackUrl) return (t.url = t.fallbackUrl), l(t);
          })
        : u(t).catch(function () {
            if (t.fallbackUrl) return (t.url = t.fallbackUrl), u(t);
          });
    };
  },
  540: function (t, e, i) {
    i(227);
  },
  541: function (t, e, i) {
    i(228);
  },
  542: function (t, e, i) {
    i(229);
  },
  543: function (t, e, i) {
    i(230);
  },
  544: function (t, e, i) {
    i(231);
  },
  545: function (t, e, i) {
    i(232);
  },
  546: function (t, e, i) {
    i(233);
  },
  552: function (t, e, i) {},
  553: function (t, e, i) {
    i.r(e);
    var n = {};
    i.r(n),
      i.d(n, "fetchMergeInfo", function () {
        return N;
      }),
      i.d(n, "fetchInfo", function () {
        return D;
      }),
      i.d(n, "fetchSettings", function () {
        return J;
      }),
      i.d(n, "fetchMyInfo", function () {
        return V;
      }),
      i.d(n, "fetchPlaylistAuth", function () {
        return R;
      }),
      i.d(n, "fetchWatchHistory", function () {
        return F;
      }),
      i.d(n, "fetchNavNum", function () {
        return B;
      }),
      i.d(n, "watchVideo", function () {
        return Q;
      }),
      i.d(n, "setSign", function () {
        return G;
      }),
      i.d(n, "reportUper", function () {
        return H;
      }),
      i.d(n, "getUpStat", function () {
        return W;
      }),
      i.d(n, "toggleSpaceState", function () {
        return X;
      }),
      i.d(n, "updateWatchlater", function () {
        return q;
      });
    var a = {};
    i.r(a),
      i.d(a, "fetchTopphoto", function () {
        return z;
      }),
      i.d(a, "fetchSkin", function () {
        return Y;
      }),
      i.d(a, "uploadToutu", function () {
        return K;
      }),
      i.d(a, "setTheme", function () {
        return Z;
      }),
      i.d(a, "setVipFreeToutu", function () {
        return tt;
      }),
      i.d(a, "setToutu", function () {
        return et;
      }),
      i.d(a, "fetchExpire", function () {
        return it;
      }),
      i.d(a, "fetchBcoin", function () {
        return nt;
      }),
      i.d(a, "buyWithCoin", function () {
        return at;
      }),
      i.d(a, "buyWithB", function () {
        return rt;
      }),
      i.d(a, "quickBuyWithB", function () {
        return ot;
      });
    var r = {};
    i.r(r),
      i.d(r, "top", function () {
        return je;
      }),
      i.d(r, "masterpiece", function () {
        return Pe;
      }),
      i.d(r, "isTopLoad", function () {
        return Le;
      }),
      i.d(r, "isMasterpieceLoad", function () {
        return Me;
      });
    var o = {};
    i.r(o),
      i.d(o, "_bili_space_mid", function () {
        return xe;
      }),
      i.d(o, "_bili_space_mymid", function () {
        return ke;
      }),
      i.d(o, "_bili_space_info", function () {
        return Ee;
      }),
      i.d(o, "_bili_space_notice", function () {
        return Ie;
      }),
      i.d(o, "_bili_space_settings", function () {
        return Oe;
      }),
      i.d(o, "_bili_login_info", function () {
        return $e;
      }),
      i.d(o, "_bili_space_state", function () {
        return Ae;
      }),
      i.d(o, "_bili_space_is_login", function () {
        return Ne;
      }),
      i.d(o, "_bili_space_watch_history", function () {
        return De;
      }),
      i.d(o, "_bili_space_nav", function () {
        return Je;
      }),
      i.d(o, "_bili_space_vip", function () {
        return Ve;
      }),
      i.d(o, "_bili_space_fanMedal", function () {
        return Re;
      }),
      i.d(o, "playNumber", function () {
        return Fe;
      }),
      i.d(o, "isNavLoad", function () {
        return Be;
      }),
      i.d(o, "watchlaterAids", function () {
        return Qe;
      }),
      i.d(o, "isSpaceLoad", function () {
        return Ge;
      }),
      i.d(o, "_bili_space_global_message", function () {
        return He;
      }),
      i.d(o, "isVip", function () {
        return We;
      }),
      i.d(o, "isVipFrozen", function () {
        return Xe;
      }),
      i.d(o, "isVipNormal", function () {
        return qe;
      }),
      i.d(o, "isVipAnnual", function () {
        return ze;
      }),
      i.d(o, "isFoolsDay", function () {
        return Ye;
      }),
      i.d(o, "isVipAboutToEnd", function () {
        return Ke;
      }),
      i.d(o, "isErrorPage", function () {
        return Ze;
      }),
      i.d(o, "errorInfo", function () {
        return ti;
      });
    var s = {};
    i.r(s),
      i.d(s, "relations", function () {
        return ai;
      }),
      i.d(s, "attribute", function () {
        return ri;
      }),
      i.d(s, "relationList", function () {
        return oi;
      }),
      i.d(s, "knightsList", function () {
        return si;
      }),
      i.d(s, "knightsCount", function () {
        return ci;
      }),
      i.d(s, "isRelationListLoad", function () {
        return li;
      }),
      i.d(s, "getFansTags", function () {
        return ui;
      }),
      i.d(s, "userTag", function () {
        return di;
      }),
      i.d(s, "userTagList", function () {
        return fi;
      }),
      i.d(s, "defaultGroupCount", function () {
        return pi;
      }),
      i.d(s, "accRelation", function () {
        return mi;
      }),
      i.d(s, "shieldingState", function () {
        return hi;
      });
    var c = {};
    i.r(c),
      i.d(c, "fetchPlaylists", function () {
        return yi;
      }),
      i.d(c, "getPlaylistInfo", function () {
        return wi;
      }),
      i.d(c, "getPlaylistVideo", function () {
        return Ci;
      }),
      i.d(c, "editPlaylistSort", function () {
        return Ti;
      }),
      i.d(c, "delPlaylist", function () {
        return Si;
      }),
      i.d(c, "delPlaylistVideo", function () {
        return ji;
      }),
      i.d(c, "updatePlaylist", function () {
        return Pi;
      }),
      i.d(c, "createPlaylist", function () {
        return Li;
      }),
      i.d(c, "updatePlaylistVideoDesc", function () {
        return Mi;
      }),
      i.d(c, "addVideos", function () {
        return Ui;
      }),
      i.d(c, "searchVideos", function () {
        return xi;
      }),
      i.d(c, "checkVideos", function () {
        return ki;
      }),
      i.d(c, "uploadCover", function () {
        return Ei;
      }),
      i.d(c, "getPlaylistAuth", function () {
        return Ii;
      }),
      i.d(c, "installPlaylistAuth", function () {
        return Oi;
      });
    var l = {};
    i.r(l),
      i.d(l, "playList", function () {
        return $i;
      }),
      i.d(l, "isPlaylistLoad", function () {
        return Ai;
      }),
      i.d(l, "playlistInfo", function () {
        return Ni;
      }),
      i.d(l, "isPlaylistInfoLoad", function () {
        return Di;
      }),
      i.d(l, "isPlaylistAuthed", function () {
        return Ji;
      });
    var u = {};
    i.r(u),
      i.d(u, "getChannelsWithArchives", function () {
        return Fi;
      }),
      i.d(u, "getChannels", function () {
        return Bi;
      }),
      i.d(u, "getChannel", function () {
        return Qi;
      }),
      i.d(u, "addChannel", function () {
        return Gi;
      }),
      i.d(u, "removeChannel", function () {
        return Hi;
      }),
      i.d(u, "editChannel", function () {
        return Wi;
      }),
      i.d(u, "addChannelVideos", function () {
        return Xi;
      }),
      i.d(u, "delChannelVideos", function () {
        return qi;
      }),
      i.d(u, "sortChannelVideos", function () {
        return zi;
      }),
      i.d(u, "checkDisabledVideo", function () {
        return Yi;
      });
    var d = {};
    i.r(d),
      i.d(d, "channels", function () {
        return Ki;
      }),
      i.d(d, "channelsWithArchives", function () {
        return Zi;
      }),
      i.d(d, "isChannelsLoad", function () {
        return tn;
      }),
      i.d(d, "isChannelLoad", function () {
        return en;
      }),
      i.d(d, "channel", function () {
        return nn;
      }),
      i.d(d, "isThereVideos", function () {
        return an;
      });
    var f = {};
    i.r(f),
      i.d(f, "topphoto", function () {
        return wn;
      }),
      i.d(f, "skin", function () {
        return Cn;
      }),
      i.d(f, "Bcoin", function () {
        return Tn;
      }),
      i.d(f, "isSkinLoad", function () {
        return Sn;
      }),
      i.d(f, "isTopphotoLoad", function () {
        return jn;
      }),
      i.d(f, "isUploadSuccess", function () {
        return Pn;
      });
    var p = {};
    i.r(p),
      i.d(p, "fetchZhanshiVideos", function () {
        return Mn;
      }),
      i.d(p, "fetchXuanzeVideos", function () {
        return Un;
      }),
      i.d(p, "clearSelectVideos", function () {
        return xn;
      });
    var m = {};
    i.r(m),
      i.d(m, "submitVideos", function () {
        return kn;
      }),
      i.d(m, "isSubmitVideosLoad", function () {
        return En;
      }),
      i.d(m, "selectVideos", function () {
        return In;
      });
    var h = {};
    i.r(h),
      i.d(h, "fetchPugv", function () {
        return Qn;
      }),
      i.d(h, "fetchPugvList", function () {
        return Gn;
      }),
      i.d(h, "delPugv", function () {
        return Hn;
      });
    var v = {};
    i.r(v),
      i.d(v, "list", function () {
        return Wn;
      }),
      i.d(v, "page", function () {
        return Xn;
      }),
      i.d(v, "isLoading", function () {
        return qn;
      }),
      i.d(v, "pugvList", function () {
        return zn;
      }),
      i.d(v, "pugvPage", function () {
        return Yn;
      });
    i(254);
    var _ = i(2),
      b = i.n(_),
      g = (i(455), i(235)),
      y = i.n(g),
      w = i(12);
    function C(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function T(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? C(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : C(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var S = new (i(236).a)(),
      j = function (t) {
        return t ? t.replace(/^https?:/g, "") : "";
      },
      P = function (t, e, i, n) {
        var a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          r = arguments.length > 5 ? arguments[5] : void 0;
        if (!t) return "";
        var o = 2,
          s = (e && e * o) || e,
          c = (i && i * o) || i;
        return t.includes("gif")
          ? j(t)
          : j(
              S.getImageLink(
                t,
                Math.round(s),
                Math.round(c),
                T({ o: a, q: n }, r)
              )
            );
      },
      L = i(15),
      M = i.n(L),
      U = i(1),
      x = i(0),
      k = i(54);
    function E(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function I(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? E(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : E(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var O = x.default.prototype.$isServer,
      A = i(503)("app:space.vuex.init"),
      N = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = {
            method: "get",
            url: "http://api.bilibili.co/x/space/web/index",
            query: { mid: n },
            encode: !0,
          };
        return Object(k.a)(a).then(function (t) {
          var e = t.data,
            a = e.code,
            r = e.data,
            o = e.message,
            s = void 0 === o ? "" : o;
          if (0 === a) {
            var c = r.account,
              l = r.setting,
              u = r.archive;
            A("account", c),
              (c.sign = c.sign.decodeHTML()),
              (c.regtime = c.jointime);
            var d = c.official.role,
              f = 0;
            0 === d && (f = -1),
              d > 2 && (f = 1),
              (c.official_verify = {
                type: f,
                desc: c.official.title,
                suffix: c.official.desc,
              }),
              (c.level_info = { current_level: c.level }),
              (c.vip = { vipType: c.vip.type, vipStatus: c.vip.status }),
              (l.theme = "default"),
              (l.toutu = { l_img: c.top_photo, s_img: c.top_photo });
            var p = u.archives.map(function (t) {
              return I(
                I({}, t),
                {},
                { created: t.pubdate, play: t.stat ? t.stat.view : 0 }
              );
            });
            return (
              i(U.U, { data: c, mid: n }),
              i(U.sb, l),
              i(U.ub, { count: u.page.count, vlist: p.slice(0, 10) }),
              ""
            );
          }
          var m = new Error(s || "404 Not Found");
          throw ((m.status = 404), m);
        });
      },
      D = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = e.cookie,
          r = {
            method: "get",
            url: "//api.bilibili.com/x/space/acc/info",
            params: { mid: n },
            withCredentials: !0,
          };
        return (
          O &&
            ((r.url = "http://space.bilibili.com" + r.url),
            (r.headers = { cookie: a })),
          x.default.http(r).then(
            function (t) {
              var e = (t && t.data) || {},
                a = 0,
                r = e.data,
                o = e.message;
                let d = "{\"mid\":11783021,\"name\":\"哔哩哔哩番剧出差\",\"sex\":\"男\",\"face\":\"https://i0.hdslb.com/bfs/face/9f10323503739e676857f06f5e4f5eb323e9f3f2.jpg\",\"sign\":\"哔哩哔哩番剧出差官方账号@脚本作者：Aobanana\",\"rank\":10000,\"level\":6,\"jointime\":0,\"moral\":0,\"silence\":0,\"birthday\":\"01-01\",\"coins\":0,\"fans_badge\":true,\"fans_medal\":{\"show\":true,\"wear\":true,\"medal\":{\"uid\":8047632,\"target_id\":591889353,\"medal_id\":296581,\"level\":11,\"medal_name\":\"粉丝团\",\"medal_color\":9272486,\"intimacy\":3049,\"next_intimacy\":10000,\"day_limit\":1500,\"medal_color_start\":9272486,\"medal_color_end\":9272486,\"medal_color_border\":9272486,\"is_lighted\":1,\"light_status\":1,\"wearing_status\":1,\"score\":17950}},\"official\":{\"role\":3,\"title\":\"哔哩哔哩番剧出差官方账号\",\"desc\":\"\",\"type\":1},\"vip\":{\"type\":2,\"status\":1,\"due_date\":1924617600000,\"vip_pay_type\":0,\"theme_type\":0,\"label\":{\"path\":\"\",\"text\":\"十年大会员\",\"label_theme\":\"ten_annual_vip\",\"text_color\":\"#FFFFFF\",\"bg_style\":1,\"bg_color\":\"#FB7299\",\"border_color\":\"\"},\"avatar_subscript\":1,\"nickname_color\":\"#FB7299\",\"role\":7,\"avatar_subscript_url\":\"http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png\"},\"pendant\":{\"pid\":0,\"name\":\"\",\"image\":\"\",\"expire\":0,\"image_enhance\":\"\",\"image_enhance_frame\":\"\"},\"nameplate\":{\"nid\":0,\"name\":\"\",\"image\":\"\",\"image_small\":\"\",\"level\":\"\",\"condition\":\"\"},\"user_honour_info\":{\"mid\":0,\"colour\":null,\"tags\":null},\"is_followed\":false,\"top_photo\":\"http://i2.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png\",\"theme\":{},\"sys_notice\":{},\"live_room\":{\"roomStatus\":1,\"liveStatus\":0,\"url\":\"https://live.bilibili.com/931774\",\"title\":\"哔哩哔哩番剧出差的直播间\",\"cover\":\"http://i0.hdslb.com/bfs/live/40540753a6a6b94d924faeefa4fe068d209a9f39.png\",\"online\":9562075,\"roomid\":11783021,\"roundStatus\":0,\"broadcast_type\":0}}";
                let obj_d = JSON.parse(d);
                r=obj_d;
              return 0 == +a
                ? ((r.sign = r.sign.decodeHTML()),
                  void i(U.U, { data: r, mid: n }))
                : i("setInfoError", {
                    code: a || -500,
                    message: "fetch info " + o,
                  });
            },
            function (t) {
              return i("setInfoError", {
                code: -500,
                message: t.message || "fetch info error",
              });
            }
          )
        );
      },
      J = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = e.cookie,
          r = {
            method: "get",
            url: "/ajax/settings/getSettings",
            params: { mid: n },
          };
        return (
          O &&
            ((r.url = "http://space.bilibili.com" + r.url),
            (r.headers = { cookie: a, host: "space.bilibili.com" })),
          x.default.http(r).then(
            function (t) {
              var e = t.data,
                n = e.status,
                a = e.data;
              return n
                ? (i(U.sb, a), Promise.resolve())
                : (console.warn("getSettings failed", a),
                  Promise.reject({ message: a }));
            },
            function (t) {
              return (
                !O && console.warn("getSettings failed", t.stack),
                Promise.reject(t)
              );
            }
          )
        );
      },
      V = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = e.cookie;
        return (
          O
            ? x.default
                .http({
                  method: "get",
                  url: "http://api.bilibili.com/x/space/myinfo",
                  headers: { referer: "http://space.bilibili.com", cookie: a },
                })
                .then(function (t) {
                  return t.data;
                })
            : x.default.http.jsonp("//api.bilibili.com/x/space/myinfo")
        ).then(
          function (t) {
            var e = t.code,
              a = t.data;
            return 0 === e
              ? (i(U.db, a),
                i(U.ec, a.mid === n ? "owner" : "visitor"),
                Promise.resolve())
              : (i(U.cb), Promise.resolve());
          },
          function (t) {
            return (
              !O && console.warn("myinfo failed, network error", t.stack),
              Promise.reject(t)
            );
          }
        );
      },
      R = function (t, e) {
        var i = t.commit,
          n = { vmid: e.vmid, jsonp: "jsonp" },
          a = {
            method: "get",
            url: "//api.bilibili.com/x/playlist/whitelist",
            params: n,
          };
        return (
          O && (a.url = "http:" + a.url),
          (O
            ? x.default.http(a).then(function (t) {
                return t.data;
              })
            : x.default.http.jsonp("//api.bilibili.com/x/playlist/whitelist", {
                params: n,
              })
          ).then(
            function (t) {
              var e = t.code,
                n = t.data;
              return 0 === e
                ? (i(U.eb, { auth: n.power }), Promise.resolve())
                : (i(U.eb, { auth: !1 }), Promise.resolve());
            },
            function (t) {
              return i(U.eb, { auth: !1 }), Promise.reject(t);
            }
          )
        );
      },
      F = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = sessionStorage.getItem("".concat(n, "_watch_history"));
        null === a
          ? x.default.http
              .get("/ajax/viewhistory/gethistory")
              .then(function (t) {
                var e = t.data,
                  n = e.status,
                  a = e.data;
                n &&
                  ("[object Array]" !== Object.prototype.toString.call(a)
                    ? i(U.Hb, [])
                    : i(
                        U.Hb,
                        a.map(function (t) {
                          return t.aid;
                        })
                      ));
              })
          : i(U.Hb, JSON.parse(a));
      },
      B = function (t, e) {
        var i = t.commit;
        return x.default.http
          .jsonp("//api.bilibili.com/x/space/navnum", { params: e })
          .then(
            function (t) {
              var e = t.code,
                n = t.message,
                a = t.data;
              return 0 === e
                ? (i(U.z, a), Promise.resolve(a))
                : (console.log("请求导航栏数据出错，".concat(n)),
                  i(U.y),
                  console.log(t),
                  i("setInfoError", { code: e, message: "fetch navNum " + n }),
                  Promise.reject());
            },
            function (t) {
              return (
                console.log("请求导航栏数据出错，网络错误"),
                i(U.y),
                i("setInfoError", {
                  code: -500,
                  message: t.message || "fetch navnum error",
                }),
                Promise.reject()
              );
            }
          );
      },
      Q = function (t, e) {
        (0, t.commit)(U.kc, e);
      },
      G = function (t, e) {
        var i = t.commit,
          n = e.user_sign;
        x.default.http
          .post("//api.bilibili.com/x/member/web/sign/update", { user_sign: n })
          .then(
            function (t) {
              var e = t.data,
                a = e.code,
                r = e.message;
              [61001, 61002].indexOf(+a) > -1
                ? $.getScript(
                    "//static.hdslb.com/common/js/identityDialog.js",
                    function () {
                      IdentityDialog(a, r);
                    }
                  )
                : 0 === a
                ? i(U.Wb, n)
                : x.default.$warn("设置签名失败，".concat(r));
            },
            function () {
              return x.default.$warn("设置签名失败");
            }
          );
      },
      H = function (t, e) {
        t.commit;
        return x.default.http.post("/ajax/report/add", e).then(
          function (t) {
            var e = t.data,
              i = e.status,
              n = e.data;
            return i
              ? Promise.resolve()
              : (x.default.$warn("举报失败，".concat(n)), Promise.reject());
          },
          function () {
            return x.default.$warn("举报失败，网络错误"), Promise.reject();
          }
        );
      },
      W = function (t, e) {
        var i = t.commit;
        x.default.http
          .get("//api.bilibili.com/x/space/upstat", { params: { mid: e } })
          .then(function (t) {
            var e = t.data,
              n = e.code,
              a = e.data;
            0 === n &&
              (a.article || a.archive || a.likes
                ? i(U.Ab, a)
                : i(U.Ab, {
                    article: { view: -1 },
                    archive: { view: -1 },
                    likes: -1,
                  }));
          });
      },
      X = function (t, e) {
        var i = t.commit;
        B({ commit: i }, { mid: _bili_space_mid }), i(U.dc, e);
      },
      q = function (t, e) {
        var i = t.commit,
          n = e.aids;
        i(U.ic, n);
      },
      z = function (t, e) {
        var i = t.commit;
        return x.default.http
          .get("/ajax/topphoto/getlist", { params: { mid: e } })
          .then(
            function (t) {
              return t.data.status
                ? i(U.C, t.data.data)
                : x.default.$warn("获取头图列表失败，".concat(t.data.data));
            },
            function () {
              return x.default.$warn("获取头图列表失败");
            }
          );
      },
      Y = function (t, e) {
        var i = t.commit;
        return x.default.http
          .get("/ajax/skin/getlist", { params: { mid: e } })
          .then(
            function (t) {
              return t.data.status
                ? i(U.A, t.data.data)
                : x.default.$warn("获取皮肤列表失败，".concat(t.data.data));
            },
            function () {
              return x.default.$warn("获取皮肤列表失败");
            }
          );
      },
      K = function (t, e) {
        var i = t.commit;
        return x.default.http
          .post("/ajax/topphoto/uploadTopPhotov2", { topphoto: e })
          .then(
            function (t) {
              var e = t.data,
                n = e.code,
                a = e.message;
              return [61001, 61002].indexOf(+n) > -1
                ? ($.getScript(
                    "//static.hdslb.com/common/js/identityDialog.js",
                    function () {
                      IdentityDialog(n, a);
                    }
                  ),
                  Promise.reject())
                : 0 == +n
                ? (J({ commit: i }, { mid: _bili_space_mid }),
                  i(U.jc, a),
                  Promise.resolve("上传成功！"))
                : (x.default.$warn("上传自定义头图失败，".concat(a)),
                  Promise.reject(a));
            },
            function () {
              return (
                x.default.$warn("上传自定义头图失败"),
                Promise.reject("网络连接错误，请稍后再试")
              );
            }
          );
      },
      Z = function (t, e) {
        t.commit;
        return x.default.http.post("/ajax/settings/setTheme", { id: e }).then(
          function (t) {
            var e = t.data,
              i = e.data;
            return e.status
              ? Promise.resolve()
              : (x.default.$warn("设置主题失败，".concat(i)), Promise.reject());
          },
          function () {
            return x.default.$warn("设置主题失败，网络错误"), Promise.reject();
          }
        );
      },
      tt = function (t, e) {
        t.commit;
        return x.default.http
          .post("/ajax/settings/setVipFreeToutu", { id: e })
          .then(
            function (t) {
              return t.data.status
                ? Promise.resolve()
                : x.default.$warn("设置免费头图失败 ".concat(t.data.data));
            },
            function () {
              return x.default.$warn("设置免费头图失败，网络错误");
            }
          );
      },
      et = function (t, e) {
        t.commit;
        return x.default.http.post("/ajax/settings/setToutu", { id: e }).then(
          function (t) {
            return t.data.status
              ? Promise.resolve()
              : x.default.$warn("设置头图失败 ".concat(t.data.data));
          },
          function () {
            return x.default.$warn("设置头图失败，网络错误");
          }
        );
      },
      it = function (t, e) {
        t.commit;
        var i = e.pid,
          n = e.type;
        return x.default.http
          .get("/ajax/".concat(n, "/getExpire"), { params: { pid: i } })
          .then(
            function (t) {
              return t.data.status, Promise.resolve(t.data.data.expire);
            },
            function () {
              return x.default.$warn("获取过期时间失败，网络错误");
            }
          );
      },
      nt = function (t) {
        var e = t.commit;
        return x.default.http.get("/ajax/member/getBcoin").then(
          function (t) {
            return t.data.status
              ? (e(U.K, t.data.data.coin), Promise.resolve(t.data.data.coin))
              : x.default.$warn("获取B币失败 ".concat(t.data.data));
          },
          function () {
            return x.default.$warn("获取B币失败，网络错误");
          }
        );
      },
      at = function (t, e) {
        t.commit;
        var i = e.id,
          n = e.month,
          a = e.type;
        return x.default.http
          .post("/ajax/".concat(a, "/buyWithCoins"), { id: i, month: n })
          .then(
            function (t) {
              return t.data.status
                ? Promise.resolve(t.data.data)
                : Promise.reject(t.data.data);
            },
            function () {
              return x.default.$warn("支付失败，网络错误");
            }
          );
      },
      rt = function (t, e) {
        t.commit;
        var i = e.id,
          n = e.month,
          a = e.type;
        return x.default.http
          .post("/ajax/".concat(a, "/buyWithB"), { id: i, month: n })
          .then(
            function (t) {
              return t.data.status
                ? Promise.resolve(t.data.data)
                : Promise.reject(t.data.data);
            },
            function () {
              return x.default.$warn("支付失败，网络错误");
            }
          );
      },
      ot = function (t, e) {
        t.commit;
        var i = e.id,
          n = e.month,
          a = e.type;
        return x.default.http
          .post("/ajax/".concat(a, "/quickBuyWithB"), { id: i, month: n })
          .then(
            function (t) {
              return t.data.status
                ? Promise.resolve(t.data.data)
                : Promise.reject(t.data.data);
            },
            function () {
              return x.default.$warn("支付失败，网络错误");
            }
          );
      };
    function st(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function ct(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? st(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : st(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var lt = Object.keys(a),
      ut = {
        name: "theme",
        data: function () {
          return {
            activeId: 0,
            isCroping: !1,
            mallState: "toutu",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            buying: { step: 0, type: "toutu", length: 3, isEditingLength: !1 },
            productInfo: {},
          };
        },
        props: { mallActive: { type: Boolean, default: !1 } },
        filters: {
          toutuPrice: function (t) {
            return 0 === t.price
              ? "免费"
              : t.is_vip && t.vip_free
              ? "大会员免费"
              : t.had
              ? t.expire && t.expire < 7300
                ? "剩余" + t.expire
                : "已购买"
              : t.price + (0 === t.coin_type ? "硬" : "B") + "币/月";
          },
        },
        computed: ct(
          ct(
            {},
            Object(w.c)([
              "_bili_space_info",
              "topphoto",
              "isTopphotoLoad",
              "skin",
              "Bcoin",
              "isSkinLoad",
              "isUploadSuccess",
              "_bili_login_info",
              "isVip",
              "isVipFrozen",
              "isVipNormal",
              "isVipAnnual",
              "isVipAboutToEnd",
            ])
          ),
          {},
          {
            cost: function () {
              var t = +this.buying.length;
              return isNaN(t) ? 0 : t * this.productInfo.price;
            },
            thumbnail: function () {
              return void 0 === this.productInfo.img
                ? ""
                : "//i0.hdslb.com/" + this.productInfo.img;
            },
          }
        ),
        methods: ct(
          ct(
            {},
            Object(w.b)([].concat(M()(lt), ["fetchInfo", "fetchSettings"]))
          ),
          {},
          {
            availableToutu: function (t) {
              var e = [];
              return (
                t.forEach(function (t) {
                  (!t.had && t.is_disable) || e.push(t);
                }),
                e
              );
            },
            preview: function (t, e, i, n) {
              (this.activeId = e),
                this.$emit("preview-toutu", t),
                "theme" === i
                  ? ($("#space-body").css({
                      "background-image":
                        "url(//i0.hdslb.com/" + n.toWebP() + ")",
                    }),
                    $("#app").css({
                      "background-image":
                        "url(//i0.hdslb.com/" + n.toWebP() + ")",
                    }),
                    $(".h-inner").css({
                      "background-position": "",
                      "background-size": "",
                      transition: "",
                    }))
                  : $("#space-body").removeAttr("style"),
                window.scrollTo(0, 0);
            },
            resetPreview: function () {
              $("#space-body").css({ "background-image": "" }),
                this.$emit("reset-toutu");
            },
            tab: function (t) {
              var e = this;
              switch (t) {
                case "toutu":
                  if (this.isCroping) return;
                  this.isTopphotoLoad || this.fetchTopphoto(_bili_space_mid),
                    (this.mallState = "toutu"),
                    this.resetPreview();
                  break;
                case "theme":
                  if (this.isCroping)
                    return void this.$confirm(
                      "您正在编辑自定义头图，确认要跳转皮肤套装？"
                    ).then(function () {
                      e.rechoose(),
                        e.isSkinLoad || e.fetchSkin(_bili_space_mid),
                        (e.mallState = "theme");
                    });
                  this.isSkinLoad || this.fetchSkin(_bili_space_mid),
                    (this.mallState = "theme"),
                    this.resetPreview();
              }
              this.activeId = 0;
            },
            rechoose: function () {
              (this.mallState = "toutu"),
                (this.isCroping = !1),
                $(".upload-input").val(""),
                $(".crop-container .preview-container").children().remove(),
                this.resetPreview();
            },
            close: function () {
              var t = this;
              if (
                this.activeId > 0 ||
                "crop" === this.mallState ||
                "upload" === this.mallState
              ) {
                var e;
                switch (this.mallState) {
                  case "toutu":
                    e = "已选择的头图";
                    break;
                  case "theme":
                    e = "已选择的皮肤";
                    break;
                  case "crop":
                  case "upload":
                    e = "当前自定义头图";
                }
                this.$confirm("".concat(e, "还未保存，确认离开？"))
                  .then(function () {
                    t.rechoose(), (t.activeId = 0), t.$emit("theme-close");
                  })
                  .catch(function (t) {
                    console.log(t);
                  });
              } else
                this.$emit("theme-close"),
                  (this.mallState = "toutu"),
                  (this.isCroping = !1),
                  (this.activeId = 0);
            },
            crop: function (t) {
              var e = t.target.files[0],
                n = this;
              if (e.size >= 5242880) this.$warn("上传图片过大，请勿超过5M");
              else {
                var a =
                  (window.createObjectURL && window) ||
                  (window.URL && URL.revokeObjectURL && URL) ||
                  window.webkitURL;
                a
                  ? i
                      .e(27)
                      .then(function () {
                        var t = [i(720), i(721)];
                        (function () {
                          var t,
                            i,
                            r = $(".h-inner"),
                            o = a.createObjectURL(e);
                          $("<img>")
                            .on("load", function () {
                              var e = $(this),
                                a = this.width,
                                s = this.height;
                              function c(e) {
                                if (parseInt(e.w) > 0) {
                                  var o = 1280 / e.w,
                                    c = 200 / e.h,
                                    l = a / t,
                                    u = s / i;
                                  r.css({
                                    "background-position":
                                      "-" +
                                      Math.round(o * e.x) +
                                      "px -" +
                                      Math.round(c * e.y) +
                                      "px",
                                    "background-size":
                                      Math.round(o * t) +
                                      "px " +
                                      Math.round(c * i) +
                                      "px",
                                  }),
                                    (n.x = Math.round(l * e.x)),
                                    (n.y = Math.round(u * e.y)),
                                    (n.w = Math.round(l * e.w)),
                                    (n.h = Math.round(u * e.h)),
                                    (n.isCroping = !0);
                                }
                              }
                              a < 1280 || s < 200
                                ? n.$warn(
                                    "上传图片未达最小尺寸1280像素x200像素"
                                  )
                                : ((n.mallState = "crop"),
                                  r.css({
                                    "background-image": "url(" + o + ")",
                                    transition: "none",
                                  }),
                                  e.addClass("crop-target"),
                                  $(".preview-container").append(e),
                                  (n.isCroping = !0),
                                  $("#space-body").removeAttr("style"),
                                  setTimeout(function () {
                                    $(".crop-target").Jcrop(
                                      {
                                        onChange: c,
                                        onSelect: c,
                                        aspectRatio: 6.4,
                                        bgOpacity: 0.4,
                                        createHandles: ["nw", "ne", "se", "sw"],
                                        dragEdges: !1,
                                        allowSelect: !1,
                                        keySupport: !1,
                                      },
                                      function () {
                                        var e = this.getBounds();
                                        (t = e[0]), (i = e[1]);
                                        var r = a / t,
                                          o = s / i,
                                          c = [];
                                        (c =
                                          t / i > 6.4
                                            ? [
                                                (t - 6.4 * i) / 2,
                                                0,
                                                (t + 6.4 * i) / 2,
                                                i,
                                              ]
                                            : [
                                                0,
                                                (i - t / 6.4) / 2,
                                                t,
                                                (i + t / 6.4) / 2,
                                              ]),
                                          this.setSelect(c),
                                          (n.x = r * c[0]),
                                          (n.y = o * c[1]),
                                          (n.w = (c[2] - c[0]) * r),
                                          (n.h = (c[3] - c[1]) * o);
                                      }
                                    );
                                  }, 0),
                                  $("#toutu-scroll-container")
                                    .hide()
                                    .siblings(".edit-container")
                                    .show());
                            })
                            .attr("src", o);
                        }.apply(null, t));
                      })
                      .catch(i.oe)
                  : this.$warn(
                      "对不起，你的浏览器不支持图片自定义上传，请选择Chrome等现代浏览器~"
                    );
              }
            },
            upload: function () {
              var t = this;
              if (this.w < 1280)
                this.$warn(
                  "你上传的图片尺寸过小！，要求宽度至少1280像素，高度至少200像素"
                );
              else {
                var e = $('<canvas width="2560" height="400"></canvas>')[0],
                  i = e.getContext("2d"),
                  n = document.querySelector(".crop-target");
                (this.mallState = "upload"),
                  (this.isCroping = !1),
                  i.drawImage(
                    n,
                    this.x,
                    this.y,
                    this.w,
                    this.h,
                    0,
                    0,
                    2560,
                    400
                  );
                var a = e.toDataURL().replace("data:image/png;base64,", "");
                this.uploadToutu(a).then(
                  function () {
                    t.rechoose(),
                      t.$emit("theme-close"),
                      $(".h-inner").css({
                        "background-size": "",
                        "background-position": "",
                        transition: "",
                      }),
                      (t.activeId = 0);
                  },
                  function () {
                    t.rechoose(),
                      t.$emit("theme-close"),
                      $(".h-inner").css({
                        "background-size": "",
                        "background-position": "",
                        transition: "",
                      }),
                      (t.activeId = 0);
                  }
                );
              }
            },
            handleSetToutu: function (t) {
              var e = this;
              switch (this.mallState) {
                case "toutu":
                default:
                  this.setToutu(t).then(function () {
                    e.fetchSettings({ mid: _bili_space_mid }),
                      e.stopBuying(),
                      e.$emit("theme-close");
                  });
                  break;
                case "theme":
                  this.setTheme(t).then(function () {
                    e.fetchInfo({ mid: _bili_space_mid }),
                      e.stopBuying(),
                      e.$emit("theme-close");
                  });
              }
            },
            handleBuy: function (t, e) {
              switch (e) {
                case "skin":
                  this.$set(this.productInfo, "id", t.id),
                    this.$set(this.productInfo, "type", t.s_type),
                    this.$set(this.productInfo, "name", t.s_name),
                    this.$set(this.productInfo, "had", t.had),
                    this.$set(this.productInfo, "expire", t.expire),
                    this.$set(this.productInfo, "price", t.price),
                    this.$set(this.productInfo, "vip_free", 0),
                    this.$set(this.productInfo, "disabled", t.is_disable),
                    this.$set(this.productInfo, "img", t.s_img);
                  break;
                case "topphoto":
                default:
                  this.$set(this.productInfo, "id", t.id),
                    this.$set(this.productInfo, "type", t.coin_type),
                    this.$set(this.productInfo, "name", t.product_name),
                    this.$set(this.productInfo, "had", t.had),
                    this.$set(this.productInfo, "expire", t.expire),
                    this.$set(this.productInfo, "price", t.price),
                    this.$set(this.productInfo, "vip_free", t.vip_free),
                    this.$set(this.productInfo, "disabled", t.is_disable),
                    this.$set(this.productInfo, "img", t.thumbnail_img);
              }
              1 === this.productInfo.type && this.fetchBcoin(),
                (this.buying.type = e),
                (this.buying.step = 1);
            },
            selectLength: function (t) {
              (this.buying.length = t), (this.buying.isEditingLength = !1);
            },
            editLength: function () {
              (this.buying.length = void 0),
                (this.buying.isEditingLength = !0),
                setTimeout(function () {
                  document.querySelector(".theme-buy-custom-length").focus();
                }, 10);
            },
            stopBuying: function () {
              (this.buying.type = ""),
                (this.buying.step = 0),
                (this.productInfo = {}),
                (this.buying.length = 3),
                (this.buying.isEditingLength = !1);
            },
            doBuy: function () {
              var t = this,
                e = this.productInfo,
                i = this.buying;
              0 === this.productInfo.type && Number(i.length) > 0
                ? this.buyWithCoin({
                    id: e.id,
                    month: Number(i.length),
                    type: i.type,
                  }).then(
                    function () {
                      t.fetchExpire({ pid: e.id, type: i.type }).then(function (
                        e
                      ) {
                        t.$set(t.productInfo, "new_expire", e), t.buySucceed();
                      });
                    },
                    function (e) {
                      t.$set(t.productInfo, "failure_reason", e), t.buyFail();
                    }
                  )
                : this.Bcoin > this.cost
                ? this.quickBuyWithB({
                    id: e.id,
                    month: Number(i.length),
                    type: i.type,
                  }).then(
                    function () {
                      t.fetchExpire({ pid: e.id, type: i.type }).then(function (
                        e
                      ) {
                        t.$set(t.productInfo, "new_expire", e), t.buySucceed();
                      });
                    },
                    function (e) {
                      t.$set(t.productInfo, "failure_reason", e), t.buyFail();
                    }
                  )
                : this.buyWithB({
                    id: e.id,
                    month: Number(i.length),
                    type: i.type,
                  }).then(
                    function (e) {
                      new payPopup(
                        {
                          sum: t.cost,
                          payOrderNo: e.order_no,
                          type: 1,
                          hasbpticket: 1,
                        },
                        function () {
                          this.buySucceed();
                        }
                      );
                    },
                    function (e) {
                      t.$set(t.productInfo, "failure_reason", e), t.buyFail();
                    }
                  );
            },
            buySucceed: function () {
              (this.buying.step = 2),
                "toutu" === this.mallState
                  ? this.fetchTopphoto(_bili_space_mid)
                  : "theme" === this.mallState &&
                    this.fetchSkin(_bili_space_mid),
                (this.activeId = 0);
            },
            buyFail: function () {
              this.buying.step = 3;
            },
            rebuy: function () {
              this.buying.step = 1;
            },
          }
        ),
        watch: {
          mallState: function (t) {
            this.mallActive &&
              ("toutu" === t
                ? rec("space_clothes_coverPage_show")
                : "theme" === t && rec("space_clothes_skinPage_show"));
          },
        },
      },
      dt = (i(504), i(4)),
      ft = Object(dt.a)(
        ut,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              staticClass: "t",
              class: { "theme-show": t.mallActive },
              attrs: { id: "space-theme" },
            },
            [
              i("div", { attrs: { id: "theme-header" } }, [
                i("div", { staticClass: "wrapper" }, [
                  i("div", { staticClass: "theme-topright" }, [
                    i(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.isVipAboutToEnd,
                            expression: "isVipAboutToEnd",
                          },
                        ],
                        staticClass: "theme-ann",
                      },
                      [
                        i("span", { staticClass: "theme-ann-icon icon" }),
                        i("span", { staticClass: "theme-ann-text" }, [
                          t._v("大会员剩余时间：\n            "),
                          i("var", [
                            t._v(
                              t._s(
                                t._bili_login_info.vip.expire >= 1
                                  ? t._bili_login_info.vip.expire
                                  : "不足一"
                              )
                            ),
                          ]),
                          t._v("天"),
                        ]),
                      ]
                    ),
                    i("span", {
                      staticClass: "icon theme-close",
                      on: { click: t.close },
                    }),
                  ]),
                  i("div", { staticClass: "theme-tabs clearfix" }, [
                    i(
                      "span",
                      {
                        staticClass: "tab theme-tab",
                        class: {
                          active:
                            "toutu" === t.mallState ||
                            "crop" === t.mallState ||
                            "upload" === t.mallState,
                        },
                        attrs: { for: "theme-panel" },
                        on: {
                          click: function (e) {
                            return t.tab("toutu");
                          },
                        },
                      },
                      [t._v("头图")]
                    ),
                  ]),
                ]),
              ]),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        "toutu" === t.mallState ||
                        "crop" === t.mallState ||
                        "upload" === t.mallState,
                      expression:
                        "mallState === 'toutu' || mallState === 'crop' || mallState === 'upload'",
                    },
                  ],
                  staticClass: "theme-panel",
                },
                [
                  i(
                    "div",
                    { staticClass: "wrapper theme-panel-inner clearfix" },
                    [
                      i(
                        "be-scrollbar",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "toutu" === t.mallState,
                              expression: "mallState === 'toutu'",
                            },
                          ],
                          staticClass: "theme-list",
                          attrs: {
                            source: t.availableToutu(t.topphoto),
                            name: "toutu",
                          },
                        },
                        [
                          i(
                            "ul",
                            {
                              staticClass: "theme-list-inner clearfix",
                              attrs: { id: "toutu-list" },
                            },
                            [
                              t.isVipNormal
                                ? i(
                                    "li",
                                    {
                                      directives: [
                                        {
                                          name: "rep",
                                          rawName: "v-rep",
                                          value: "space_clothes_diyCover_click",
                                          expression:
                                            "'space_clothes_diyCover_click'",
                                        },
                                      ],
                                      staticClass: "upload-toutu toutu-item",
                                    },
                                    [
                                      i(
                                        "div",
                                        { staticClass: "upload-content" },
                                        [
                                          i("div", {
                                            staticClass: "upload-icon",
                                          }),
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                "upload-tips u-tips1",
                                            },
                                            [t._v("自定义头图")]
                                          ),
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                "upload-tips u-tips2",
                                            },
                                            [
                                              t._v(
                                                "推荐尺寸为2560*400，支持jpg、png图片"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      i("input", {
                                        ref: "upload",
                                        staticClass: "upload-input",
                                        attrs: {
                                          type: "file",
                                          accept: "image/png, image/jpeg",
                                        },
                                        on: { change: t.crop },
                                      }),
                                    ]
                                  )
                                : t._e(),
                              t._l(t.availableToutu(t.topphoto), function (e) {
                                return i(
                                  "li",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.had || !e.is_disable,
                                        expression:
                                          "toutu.had || !toutu.is_disable",
                                      },
                                      {
                                        name: "rep",
                                        rawName: "v-rep",
                                        value: "space_clothes_cover_click",
                                        expression:
                                          "'space_clothes_cover_click'",
                                      },
                                    ],
                                    staticClass: "item toutu-item",
                                    class: { active: t.activeId === e.id },
                                    style: {
                                      backgroundImage:
                                        "url(//i0.hdslb.com/" + e.l_img + ")",
                                    },
                                    on: {
                                      click: function (i) {
                                        return t.preview(
                                          e.l_img,
                                          e.id,
                                          "toutu"
                                        );
                                      },
                                    },
                                  },
                                  [
                                    i("div", { staticClass: "toutu-detail" }, [
                                      i("div", { staticClass: "toutu-meta" }, [
                                        i(
                                          "div",
                                          { staticClass: "toutu-title" },
                                          [t._v(t._s(e.product_name))]
                                        ),
                                        i(
                                          "div",
                                          { staticClass: "toutu-price" },
                                          [t._v(t._s(t._f("toutuPrice")(e)))]
                                        ),
                                        i(
                                          "div",
                                          { staticClass: "toutu-action" },
                                          [
                                            0 === e.price ||
                                            (e.is_vip && e.vip_free)
                                              ? i(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "rep",
                                                        rawName: "v-rep",
                                                        value:
                                                          "space_clothes_cover_use_click",
                                                        expression:
                                                          "'space_clothes_cover_use_click'",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "toutu-btn use",
                                                    on: {
                                                      click: function (i) {
                                                        return t.handleSetToutu(
                                                          e.id,
                                                          e.vip_free
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [t._v("使用")]
                                                )
                                              : [
                                                  e.had
                                                    ? i(
                                                        "span",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "rep",
                                                              rawName: "v-rep",
                                                              value:
                                                                "space_clothes_cover_use_click",
                                                              expression:
                                                                "'space_clothes_cover_use_click'",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "toutu-btn use",
                                                          on: {
                                                            click: function (
                                                              i
                                                            ) {
                                                              return t.handleSetToutu(
                                                                e.id,
                                                                e.vip_free
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [t._v("使用")]
                                                      )
                                                    : t._e(),
                                                  e.had && !e.is_disable
                                                    ? i(
                                                        "span",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "rep",
                                                              rawName: "v-rep",
                                                              value:
                                                                "space_clothes_cover_buy_click space_clothes_skinDetails_click",
                                                              expression:
                                                                "'space_clothes_cover_buy_click space_clothes_skinDetails_click'",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "toutu-btn buy",
                                                          on: {
                                                            click: function (
                                                              i
                                                            ) {
                                                              return t.handleBuy(
                                                                e,
                                                                "topphoto"
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [t._v("续费")]
                                                      )
                                                    : t._e(),
                                                  e.had
                                                    ? t._e()
                                                    : i(
                                                        "span",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "rep",
                                                              rawName: "v-rep",
                                                              value:
                                                                "space_clothes_cover_buy_click space_clothes_skinDetails_click",
                                                              expression:
                                                                "'space_clothes_cover_buy_click space_clothes_skinDetails_click'",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "toutu-btn buy",
                                                          on: {
                                                            click: function (
                                                              i
                                                            ) {
                                                              return t.handleBuy(
                                                                e,
                                                                "topphoto"
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [t._v("购买")]
                                                      ),
                                                ],
                                          ],
                                          2
                                        ),
                                      ]),
                                    ]),
                                    t.isVip && 1 === e.vip_free
                                      ? i("span", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: t.activeId !== e.id,
                                              expression:
                                                "activeId !== toutu.id",
                                            },
                                          ],
                                          staticClass: "vip-icon",
                                        })
                                      : t._e(),
                                    i("span", { staticClass: "selected-icon" }),
                                  ]
                                );
                              }),
                            ],
                            2
                          ),
                        ]
                      ),
                      i(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "crop" === t.mallState ||
                                "upload" === t.mallState,
                              expression:
                                "mallState === 'crop' || mallState === 'upload'",
                            },
                          ],
                          staticClass: "edit-container",
                        },
                        [
                          i(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "crop" === t.mallState,
                                  expression: "mallState === 'crop'",
                                },
                              ],
                              staticClass: "crop-container",
                            },
                            [
                              i("div", { staticClass: "preview-container" }),
                              i("div", { staticClass: "option-pane" }, [
                                i(
                                  "span",
                                  {
                                    staticClass: "rechoose",
                                    on: { click: t.rechoose },
                                  },
                                  [t._v("重新选择")]
                                ),
                                i("span", { staticClass: "upload-size" }, [
                                  t._v("推荐头图大小为：2560x400"),
                                ]),
                              ]),
                              i(
                                "be-button-group",
                                [
                                  i(
                                    "be-button",
                                    {
                                      directives: [
                                        {
                                          name: "rep",
                                          rawName: "v-rep",
                                          value:
                                            "space_clothes_diyCover_confirm_click",
                                          expression:
                                            "'space_clothes_diyCover_confirm_click'",
                                        },
                                      ],
                                      attrs: { type: "primary" },
                                      nativeOn: {
                                        click: function (e) {
                                          return t.upload.apply(
                                            null,
                                            arguments
                                          );
                                        },
                                      },
                                    },
                                    [t._v("确定")]
                                  ),
                                  i(
                                    "be-button",
                                    {
                                      directives: [
                                        {
                                          name: "rep",
                                          rawName: "v-rep",
                                          value:
                                            "space_clothes_diyCover_back_Bclick",
                                          expression:
                                            "'space_clothes_diyCover_back_Bclick'",
                                        },
                                      ],
                                      nativeOn: {
                                        click: function (e) {
                                          return t.rechoose.apply(
                                            null,
                                            arguments
                                          );
                                        },
                                      },
                                    },
                                    [t._v("返回")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          i(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "upload" === t.mallState,
                                  expression: "mallState === 'upload'",
                                },
                              ],
                              staticClass: "uploading-container",
                            },
                            [t._m(0)]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "theme" === t.mallState,
                      expression: "mallState === 'theme'",
                    },
                  ],
                  staticClass: "theme-panel",
                },
                [
                  i(
                    "div",
                    { staticClass: "wrapper theme-panel-inner clearfix" },
                    [
                      t.isSkinLoad
                        ? i(
                            "be-scrollbar",
                            {
                              staticClass: "theme-list",
                              attrs: {
                                source: t.skin,
                                id: "theme-scroll-container",
                              },
                            },
                            [
                              i(
                                "ul",
                                { staticClass: "theme-list-inner clearfix" },
                                t._l(t.skin, function (e) {
                                  return i(
                                    "li",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.had || !e.is_disable,
                                          expression:
                                            "theme.had || !theme.is_disable",
                                        },
                                        {
                                          name: "rep",
                                          rawName: "v-rep",
                                          value: "space_clothes_skin_click",
                                          expression:
                                            "'space_clothes_skin_click'",
                                        },
                                      ],
                                      staticClass: "item theme-item-outer",
                                      on: {
                                        click: function (i) {
                                          return t.preview(
                                            e.toutu,
                                            e.id,
                                            "theme",
                                            e.bgimg
                                          );
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "div",
                                        {
                                          staticClass: "item theme-item",
                                          class: {
                                            active: t.activeId === e.id,
                                          },
                                          style: {
                                            backgroundImage:
                                              "url(//i0.hdslb.com/" +
                                              e.s_img +
                                              ")",
                                          },
                                        },
                                        [
                                          i("div", {
                                            staticClass:
                                              "theme-item-active-icon icon",
                                          }),
                                          i(
                                            "div",
                                            { staticClass: "theme-name" },
                                            [t._v(t._s(e.s_name))]
                                          ),
                                          i(
                                            "div",
                                            { staticClass: "theme-price" },
                                            [
                                              e.expire
                                                ? i("span", [
                                                    t._v(
                                                      "剩余" +
                                                        t._s(
                                                          t._f(
                                                            "format_expiretime"
                                                          )(e.expire)
                                                        )
                                                    ),
                                                  ])
                                                : i("span", [
                                                    t._v(
                                                      t._s(e.price) +
                                                        t._s(
                                                          0 === e.s_type
                                                            ? "硬"
                                                            : "B"
                                                        ) +
                                                        "币/月"
                                                    ),
                                                  ]),
                                            ]
                                          ),
                                          i(
                                            "div",
                                            { staticClass: "theme-action" },
                                            [
                                              e.had
                                                ? [
                                                    i(
                                                      "span",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "rep",
                                                            rawName: "v-rep",
                                                            value:
                                                              "space_clothes_skin_use_click space_clothes_skinDetails_click",
                                                            expression:
                                                              "'space_clothes_skin_use_click space_clothes_skinDetails_click'",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "theme-btn use",
                                                        on: {
                                                          click: function (i) {
                                                            return t.handleSetToutu(
                                                              e.id
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [t._v("使用")]
                                                    ),
                                                    e.is_disable
                                                      ? t._e()
                                                      : i(
                                                          "span",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "rep",
                                                                rawName:
                                                                  "v-rep",
                                                                value:
                                                                  "space_clothes_skinDetails_click",
                                                                expression:
                                                                  "'space_clothes_skinDetails_click'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "theme-btn renew",
                                                            on: {
                                                              click: function (
                                                                i
                                                              ) {
                                                                return t.handleBuy(
                                                                  e,
                                                                  "skin"
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [t._v("续费")]
                                                        ),
                                                  ]
                                                : i(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "theme-btn buy",
                                                      on: {
                                                        click: function (i) {
                                                          return t.handleBuy(
                                                            e,
                                                            "skin"
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [t._v("购买")]
                                                  ),
                                            ],
                                            2
                                          ),
                                        ]
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ]
                          )
                        : t._e(),
                    ],
                    1
                  ),
                ]
              ),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.buying.step > 0,
                      expression: "buying.step > 0",
                    },
                  ],
                  staticClass: "theme-buy-layer",
                  attrs: { id: "theme-buy-layer" },
                },
                [
                  i(
                    "div",
                    {
                      staticClass: "theme-buy-layer-wrapper",
                      attrs: { id: "theme-buy-layer-wrapper" },
                    },
                    [
                      i("div", {
                        staticClass: "theme-buy-close",
                        attrs: { action: "close" },
                        on: { click: t.stopBuying },
                      }),
                      i(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: 1 === t.buying.step,
                              expression: "buying.step === 1",
                            },
                          ],
                          staticClass: "theme-buy-step",
                          attrs: { id: "theme-buy-select-length" },
                        },
                        [
                          i("div", { staticClass: "theme-buy-header" }, [
                            i("img", {
                              staticClass: "theme-buy-preview",
                              attrs: { src: t.thumbnail },
                            }),
                            i("p", { staticClass: "theme-buy-name" }, [
                              t._v(t._s(t.productInfo.product_name)),
                            ]),
                            t.productInfo.expire > 0
                              ? i(
                                  "p",
                                  {
                                    staticClass:
                                      "theme-buy-current-expire-time",
                                  },
                                  [
                                    t._v(
                                      "剩余" +
                                        t._s(
                                          t._f("format_expiretime")(
                                            t.productInfo.expire
                                          )
                                        )
                                    ),
                                  ]
                                )
                              : t._e(),
                          ]),
                          i("div", { staticClass: "theme-buy-body" }, [
                            i("p", { staticClass: "theme-buy-a" }, [
                              t._v("购买月份"),
                            ]),
                            i(
                              "div",
                              { staticClass: "theme-buy-list clearfix" },
                              [
                                i(
                                  "div",
                                  {
                                    staticClass: "theme-buy-item",
                                    class: { active: 3 === t.buying.length },
                                    on: {
                                      click: function (e) {
                                        return t.selectLength(3);
                                      },
                                    },
                                  },
                                  [t._v("3个月")]
                                ),
                                i(
                                  "div",
                                  {
                                    staticClass: "theme-buy-item",
                                    class: { active: 2 === t.buying.length },
                                    on: {
                                      click: function (e) {
                                        return t.selectLength(2);
                                      },
                                    },
                                  },
                                  [t._v("2个月")]
                                ),
                                i(
                                  "div",
                                  {
                                    staticClass: "theme-buy-item",
                                    class: { active: 1 === t.buying.length },
                                    on: {
                                      click: function (e) {
                                        return t.selectLength(1);
                                      },
                                    },
                                  },
                                  [t._v("1个月")]
                                ),
                                i(
                                  "div",
                                  { staticClass: "theme-buy-item custom" },
                                  [
                                    t.buying.isEditingLength
                                      ? i("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.buying.length,
                                              expression: "buying.length",
                                            },
                                          ],
                                          staticClass:
                                            "theme-buy-custom-length space_input",
                                          attrs: { type: "text" },
                                          domProps: { value: t.buying.length },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.buying,
                                                  "length",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        })
                                      : i(
                                          "span",
                                          {
                                            staticClass: "hideit",
                                            on: { click: t.editLength },
                                          },
                                          [t._v("自定义")]
                                        ),
                                  ]
                                ),
                              ]
                            ),
                            i("div", { staticClass: "theme-buy-price" }, [
                              0 === t.productInfo.type
                                ? i("div", [
                                    t._v(
                                      "你的余额为 " +
                                        t._s(t._bili_space_info.coins) +
                                        " 硬币，需要支付\n              "
                                    ),
                                    i("var", [t._v(t._s(t.cost))]),
                                    t._v(" 硬币"),
                                  ])
                                : i("div", [
                                    i(
                                      "span",
                                      { staticClass: "theme-bb-span" },
                                      [
                                        t._v("你的余额为\n                "),
                                        i("span", { staticClass: "theme-bb" }, [
                                          t._v(t._s(t.Bcoin)),
                                        ]),
                                        t._v(" B币，"),
                                      ]
                                    ),
                                    t._v("需要支付\n              "),
                                    i("var", [t._v(t._s(t.cost))]),
                                    t._v(" B币\n            "),
                                  ]),
                            ]),
                          ]),
                          i("div", { staticClass: "theme-buy-footer" }, [
                            (0 === t.productInfo.type &&
                              t._bili_space_info.coins >= t.cost) ||
                            1 === t.productInfo.type
                              ? i(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "rep",
                                        rawName: "v-rep",
                                        value:
                                          "space_clothes_skin_confirm_click",
                                        expression:
                                          "'space_clothes_skin_confirm_click'",
                                      },
                                    ],
                                    staticClass:
                                      "theme-buy-layer-btn theme-buy-submit-btn",
                                    on: { click: t.doBuy },
                                  },
                                  [
                                    t._v(
                                      "确认" +
                                        t._s(
                                          t.productInfo.expire > 0
                                            ? "续费"
                                            : "购买"
                                        )
                                    ),
                                  ]
                                )
                              : i(
                                  "span",
                                  {
                                    staticClass:
                                      "theme-buy-layer-btn theme-buy-submit-btn disabled",
                                  },
                                  [t._v("硬币余额不足")]
                                ),
                          ]),
                        ]
                      ),
                      i(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: 2 === t.buying.step,
                              expression: "buying.step === 2",
                            },
                          ],
                          staticClass: "theme-buy-step",
                          attrs: { id: "theme-buy-success" },
                        },
                        [
                          i("div", { staticClass: "theme-buy-body" }, [
                            i("div", { staticClass: "theme-buy-success-icon" }),
                            i(
                              "div",
                              { staticClass: "theme-buy-result-title" },
                              [t._v("恭喜，支付成功！")]
                            ),
                            i("div", { staticClass: "theme-buy-result-info" }, [
                              t._v("\n            你已成功\n            "),
                              0 === t.productInfo.expire
                                ? i(
                                    "span",
                                    {
                                      staticClass: "theme-buy-action-type",
                                      attrs: { id: "theme-buy-gm" },
                                    },
                                    [t._v("购买")]
                                  )
                                : i(
                                    "span",
                                    {
                                      staticClass: "theme-buy-action-type",
                                      attrs: { id: "theme-buy-xf" },
                                    },
                                    [t._v("续费")]
                                  ),
                              i("span", { staticClass: "theme-buy-g-name" }, [
                                t._v(t._s(t.productInfo.name)),
                              ]),
                            ]),
                            i("div", { staticClass: "theme-buy-result-info" }, [
                              i(
                                "span",
                                { staticClass: "theme-buy-expire-time" },
                                [
                                  t._v(
                                    t._s(
                                      t._f("format_date")(
                                        t.productInfo.new_expire
                                      )
                                    )
                                  ),
                                ]
                              ),
                              t._v(" 到期"),
                            ]),
                          ]),
                          i(
                            "be-button-group",
                            { staticClass: "theme-buy-footer" },
                            [
                              i(
                                "be-button",
                                {
                                  staticClass: "theme-buy-layer-btn",
                                  attrs: { type: "primary" },
                                  nativeOn: {
                                    click: function (e) {
                                      return t.handleSetToutu(t.productInfo.id);
                                    },
                                  },
                                },
                                [t._v("立即使用")]
                              ),
                              i(
                                "be-button",
                                {
                                  staticClass: "theme-buy-layer-btn",
                                  nativeOn: {
                                    click: function (e) {
                                      return t.stopBuying.apply(
                                        null,
                                        arguments
                                      );
                                    },
                                  },
                                },
                                [t._v("确认")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: 3 === t.buying.step,
                              expression: "buying.step === 3",
                            },
                          ],
                          staticClass: "theme-buy-step",
                          attrs: { id: "theme-buy-fail" },
                        },
                        [
                          i("div", { staticClass: "theme-buy-body" }, [
                            i("div", { staticClass: "theme-buy-fail-icon" }),
                            i(
                              "div",
                              { staticClass: "theme-buy-result-title" },
                              [t._v("支付未完成")]
                            ),
                            i("div", { staticClass: "theme-buy-result-info" }, [
                              t._v("你还没有完成购买\n            "),
                              i("span", { staticClass: "theme-buy-g-name" }, [
                                t._v(t._s(t.productInfo.name)),
                              ]),
                              t._v(" 哦"),
                            ]),
                            i("div", { staticClass: "theme-buy-result-info" }, [
                              t._v("原因：\n            "),
                              i("span", { staticClass: "theme-buy-order-id" }, [
                                t._v(t._s(t.productInfo.failure_reason)),
                              ]),
                            ]),
                            i("div", { staticClass: "theme-buy-fail-bg" }),
                          ]),
                          i(
                            "be-button-group",
                            { staticClass: "theme-buy-footer" },
                            [
                              i(
                                "be-button",
                                {
                                  staticClass: "theme-buy-layer-btn",
                                  attrs: { type: "primary" },
                                  nativeOn: {
                                    click: function (e) {
                                      return t.rebuy.apply(null, arguments);
                                    },
                                  },
                                },
                                [t._v("重新支付")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
            ]
          );
        },
        [
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "uploading" }, [
              e("div", { staticClass: "upload-content" }, [
                e("div", { staticClass: "loading-icon loading" }, [
                  e("img", {
                    attrs: {
                      src: "//static.hdslb.com/spacev2/2/img/loading.png",
                    },
                  }),
                ]),
                e("div", { staticClass: "loading-text" }, [
                  this._v("上传中..."),
                ]),
              ]),
            ]);
          },
        ],
        !1,
        null,
        null,
        null
      ).exports,
      pt = {
        name: "notice",
        props: ["_bili_space_notice"],
        computed: {
          noticLink: function () {
            return this._bili_space_notice.url
              ? this._bili_space_notice.url
              : "javascript:;";
          },
        },
      },
      mt =
        (i(505),
        Object(dt.a)(
          pt,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              {
                staticClass: "h-notice",
                style: { background: t._bili_space_notice.bg_color },
              },
              [
                i("img", {
                  staticClass: "icon-notice",
                  attrs: { src: t._bili_space_notice.icon },
                }),
                i(
                  "a",
                  {
                    class: { linkType: t._bili_space_notice.url },
                    style: { color: t._bili_space_notice.text_color },
                    attrs: {
                      target: t._bili_space_notice.url ? "_blank" : "",
                      href: t.noticLink,
                    },
                  },
                  [t._v("\n    " + t._s(t._bili_space_notice.content) + "\n  ")]
                ),
                t._bili_space_notice.url
                  ? i(
                      "svg",
                      {
                        attrs: {
                          width: "16px",
                          height: "16px",
                          viewBox: "0 0 16 16",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        },
                      },
                      [
                        i("title", [t._v("右箭头")]),
                        i(
                          "g",
                          {
                            attrs: {
                              id: "空间升级",
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                            },
                          },
                          [
                            i(
                              "g",
                              {
                                attrs: {
                                  id: "图标/icon2-一般/icon_into_pink_16-2备份",
                                  fill: t._bili_space_notice.text_color,
                                  "fill-rule": "nonzero",
                                },
                              },
                              [
                                i(
                                  "g",
                                  { attrs: { id: "icon_into_orange_16" } },
                                  [
                                    i("path", {
                                      attrs: {
                                        d: "M8.97808758,10.0391237 L3.82898877,4.92986541 C3.63633403,4.73870131 3.33257673,4.75336217 3.13992199,4.94452627 C2.94726725,5.13569037 2.95657391,5.46099289 3.14922865,5.65215699 L8.66421152,11.1244684 C8.85686626,11.3151546 9.13783545,11.277404 9.33000856,11.0867178 L14.8507713,5.60867124 C15.0434261,5.41750713 15.0527328,5.09220461 14.860078,4.90104051 C14.6679049,4.70987641 14.3634252,4.6949766 14.171252,4.8861407 L8.97808758,10.0391237 Z",
                                        id: "icon_enter（#cccccc）",
                                        transform:
                                          "translate(9.000000, 8.000000) rotate(-90.000000) translate(-9.000000, -8.000000) ",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "370977eb",
          null
        ).exports),
      ht = {
        name: "MedalLabel",
        props: { mid: Number, upId: Number, medalInfo: Object },
        data: function () {
          return {
            medalNameWidth: 0,
            fansDetail: this.medalInfo,
            medalGuardLevel: [
              {
                name: "提督",
                src: "https://i0.hdslb.com/bfs/activity-plat/static/20200716/1d0c5a1b042efb59f46d4ba1286c6727/icon-guard1.png",
              },
              {
                name: "总督",
                src: "https://i0.hdslb.com/bfs/activity-plat/static/20200716/1d0c5a1b042efb59f46d4ba1286c6727/icon-guard2.png",
              },
              {
                name: "舰长",
                src: "https://i0.hdslb.com/bfs/activity-plat/static/20200716/1d0c5a1b042efb59f46d4ba1286c6727/icon-guard3.png",
              },
            ],
          };
        },
        methods: {
          trimProtocol: j,
          getCanvasTextWidth: function (t, e) {
            var i = document.createElement("canvas").getContext("2d");
            return (
              (i.font = ""
                .concat(e.fontWeight, " ")
                .concat(e.fontSize, "px ")
                .concat(e.fontFamily)),
              i.measureText(t).width
            );
          },
          hexToArgb: function (t) {
            var e = t.toString(16);
            return "#" + "000000".substr(0, "000000".length - e.length) + e;
          },
        },
        computed: {
          medalFlagSrc: function () {
            return this.medalGuardLevel[this.fansDetail.guard_level - 1].src;
          },
          medalFlagName: function () {
            return this.medalGuardLevel[this.fansDetail.guard_level - 1].name;
          },
          medalBoxStyle: function () {
            return {
              paddingLeft:
                this.fansDetail && this.fansDetail.guard_level > 0
                  ? "6px"
                  : "0px",
            };
          },
          medalNameStyle: function () {
            return {
              width: "".concat(this.medalNameWidth + 2, "px"),
              paddingLeft: this.fansDetail.guard_level > 0 ? "8px" : "2px",
              borderColor: this.hexToArgb(this.fansDetail.medal_color_border),
              color: "#fff",
              backgroundImage: "linear-gradient(\n          90deg,\n          "
                .concat(
                  this.hexToArgb(this.fansDetail.medal_color_start),
                  ",\n          "
                )
                .concat(this.hexToArgb(this.fansDetail.medal_color_end), ")"),
            };
          },
          medalLevelStyle: function () {
            return {
              borderColor: this.hexToArgb(this.fansDetail.medal_color_border),
              color: this.hexToArgb(this.fansDetail.medal_color),
            };
          },
        },
        mounted: function () {
          if (this.fansDetail && this.fansDetail.medal_name) {
            var t = this.getCanvasTextWidth(this.fansDetail.medal_name, {
              fontSize: 20,
              fontFamily: "PingFangSC-Regular",
              fontWeight: 100,
            });
            this.medalNameWidth = t / 2;
          }
        },
      },
      vt =
        (i(506),
        Object(dt.a)(
          ht,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              { staticClass: "medal-box", style: t.medalBoxStyle },
              [
                t.fansDetail && t.fansDetail.guard_level > 0
                  ? i("img", {
                      staticClass: "medal-flag",
                      attrs: {
                        src: t.trimProtocol(t.medalFlagSrc),
                        alt: t.medalFlagName,
                      },
                    })
                  : t._e(),
                i(
                  "div",
                  { staticClass: "medal-true-love", style: t.medalNameStyle },
                  [
                    i("div", { staticClass: "tiny" }, [
                      t._v(
                        "\n      " + t._s(this.fansDetail.medal_name) + "\n    "
                      ),
                    ]),
                  ]
                ),
                i(
                  "div",
                  { staticClass: "medal-level", style: t.medalLevelStyle },
                  [
                    i("div", { staticClass: "tiny" }, [
                      t._v("\n      " + t._s(this.fansDetail.level) + "\n    "),
                    ]),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      _t = i(238),
      bt = i(41);
    function gt(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function yt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? gt(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : gt(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var wt = {
        name: "common-header",
        data: function () {
          return {
            incr: null,
            decr: null,
            frame: 0,
            themeShow: !1,
            previewToutuImg: "",
            modeChanging: !1,
            hasEditedSign: !1,
            edittingSign: "",
            report: {
              show: !1,
              checked: [],
              items: [
                { id: 1, text: "头像违规" },
                { id: 2, text: "昵称违规" },
                { id: 3, text: "签名违规" },
              ],
            },
            dialogVisible: !1,
          };
        },
        components: { vTheme: ft, notice: mt, Dialog: y.a, MedalLabel: vt },
        mounted: function () {
          (this.edittingSign = this._bili_space_info.sign),
            this.avatar ||
              (this._bili_space_info.face && this.isNavLoad
                ? (this.avatar = this._bili_space_info.face.toWebP())
                : (this.avatar =
                    "//static.hdslb.com/images/member/noface.gif")),
            this.honorExposure(),
            this._bili_space_fanMedal.show &&
              Object(bt.a)(
                {
                  spm_id: "333.999",
                  c: "user_information",
                  d: "fans_medal",
                  e: "show",
                  type: "appear",
                },
                {
                  msg: JSON.stringify({
                    self_type: "owner" === this._bili_space_state ? 0 : 1,
                    wear_type: this._bili_space_fanMedal.wear ? 1 : 0,
                  }),
                }
              ),
            Object(bt.a)(
              {
                spm_id: "333.999",
                c: "user_information",
                d: "big_members",
                e: "show",
                type: "appear",
              },
              {
                msg: JSON.stringify({
                  self_type: "owner" === this._bili_space_state ? 0 : 1,
                  member_type: this.isVip ? (this.isVipAnnual ? 2 : 1) : 3,
                }),
              }
            );
        },
        methods: yt(
          yt(
            yt(
              { bfsImg: P },
              Object(w.d)(["GET_ACCRELATION_SUCCESS", "UPDATE_MEDALSHOW"])
            ),
            Object(w.b)([
              "toggleSpaceState",
              "setSign",
              "reportUper",
              "fetchTopphoto",
              "fetchRelationsList",
              "fetchMyInfo",
              "modifyRelations",
              "fetchBeRelation",
            ])
          ),
          {},
          {
            handleDropdownSelect: function (t) {
              switch (t) {
                case "setGroup":
                  this.handleSetGroup();
                  break;
                case "unfollow":
                  this.handleUnfollow();
                  break;
                case "ban":
                  this.handleBan();
                  break;
                case "silently":
                  this.handleSilentlyFollow();
                  break;
                case "report":
                  this.handleReportUper();
              }
            },
            handleSetGroup: function () {
              var t = this;
              $.getScript(
                "//static.hdslb.com/common/js/followGroupDialog.js",
                function () {
                  window.followGroupDialog(
                    _bili_space_mid,
                    t._bili_space_info.name,
                    {
                      title: "设置分组",
                      onSubmitError: function (e) {
                        $(".follow-dialog-wrap").remove(),
                          t.$warn("加入分组失败，".concat(e));
                      },
                      onLoadTagsError: function (e) {
                        t.$warn("获取所有标签列表失败，".concat(e));
                      },
                      onLoadRelationError: function (e) {
                        t.$warn("获取标签列表失败，".concat(e));
                      },
                      onAddTagError: function (e) {
                        t.$warn("添加分组失败，".concat(e));
                      },
                      onSubmitSuccess: function () {
                        setTimeout(function () {
                          t.fetchBeRelation(_bili_space_mid).then(function (e) {
                            t.GET_ACCRELATION_SUCCESS(e);
                          });
                        }, 800),
                          t.$toast("加入分组成功(ง •̀_•́)ง");
                      },
                    }
                  );
                }
              );
            },
            handleUnfollow: function () {
              var t = this;
              _bili_space_mid !== this._bili_login_info.mid
                ? (rec("space_alert_unsubscribe_confirm"),
                  this.modifyRelations({
                    mid: _bili_space_mid,
                    act: 1 === this.attribute ? 4 : 2,
                  }).then(function () {
                    "owner" !== t._bili_space_state &&
                      "fans" === t.$route.name &&
                      setTimeout(function () {
                        t.fetchRelationsList({
                          params: { vmid: _bili_space_mid, pn: 1, ps: 20 },
                          type: "followers",
                        });
                      }, 800),
                      t.$toast("取消关注成功！");
                  }))
                : this.$warn("不能取消关注你自己哦~");
            },
            handleBan: function () {
              var t = this;
              _bili_space_mid === _bili_space_mymid
                ? this.$toast("你无法拉黑自己哦")
                : this.attribute >= 128
                ? this.removeFromBan()
                : this.$confirm(
                    "加入黑名单后，将自动解除关注关系，禁止该用户与我互动或查看我的空间"
                  ).then(function () {
                    t.modifyRelations({ mid: _bili_space_mid, act: 5 }).then(
                      function () {
                        setTimeout(function () {
                          t.fetchMyInfo({
                            vmid: t._bili_space_mymid,
                            mid: t._bili_space_mid,
                          });
                        }, 800),
                          t.$toast("添加黑名单成功！");
                      }
                    );
                  });
            },
            handleSilentlyFollow: function () {
              var t = this,
                e = this.attribute;
              1 === e
                ? rec("unvisible_follow_cancel")
                : rec("unvisible_follow_click"),
                this.modifyRelations({
                  mid: _bili_space_mid,
                  act: 1 === e ? 4 : 3,
                }).then(
                  function () {
                    t.$toast(1 === e ? "取消悄悄关注成功！" : "悄悄关注成功！");
                  },
                  function (t) {
                    console.log(t);
                  }
                );
            },
            handleReportUper: function () {
              this.report.show = !0;
            },
            handleCheckReport: function (t) {
              var e = this.report.checked.indexOf(t);
              e > -1
                ? this.report.checked.splice(e, 1)
                : this.report.checked.push(t);
            },
            removeFromBan: function () {
              var t = this;
              this.modifyRelations({ mid: _bili_space_mid, act: 6 }).then(
                function () {
                  t.$toast("移除黑名单成功！");
                }
              );
            },
            handleFollow: function () {
              if (0 === this._bili_login_info.mid) {
                var t = this;
                window.UserStatus &&
                  window.UserStatus.quickLogin(function () {
                    t.fetchBeRelation(_bili_space_mid)
                      .then(function (e) {
                        var i = e.be_relation,
                          n = e.relation;
                        ((i && 2 == +i.attribute) || 0 == +n.attribute) &&
                          (t
                            .modifyRelations({ mid: _bili_space_mid, act: 1 })
                            .then(function () {
                              t.$toast("关注成功！");
                            }),
                          rec("space_followButton_click")),
                          setTimeout(function () {
                            window.location.reload();
                          }, 500);
                      })
                      .catch(function () {
                        window.location.reload();
                      });
                  });
              } else
                _bili_space_mid === this._bili_login_info.mid
                  ? this.$warn("你时时刻刻都在关注你自己~")
                  : (this.modifyRelationsEvent(),
                    rec("space_followButton_click"));
            },
            modifyRelationsEvent: function () {
              var t = this;
              this.modifyRelations({ mid: _bili_space_mid, act: 1 }).then(
                function () {
                  "owner" !== t._bili_space_state &&
                    "fans" === t.$route.name &&
                    setTimeout(function () {
                      t.fetchRelationsList({
                        params: { vmid: _bili_space_mid, pn: 1, ps: 20 },
                        type: "followers",
                      });
                    }, 800);
                }
              );
            },
            changeSpaceMode: function (t) {
              switch ((this.toggleSpaceState(t), t)) {
                case "visitor":
                  rec("space_switchNewVisitorViewButton_click");
                  break;
                case "fans":
                  rec("space_switchFansViewButton_click");
              }
              (this.modeChanging = !0),
                this.$router.push({ name: "index" }),
                "owner" === this._bili_space_state ||
                  (1 !== this._bili_space_settings.privacy.close_space_medal &&
                    this._bili_space_fanMedal.wear) ||
                  this.UPDATE_MEDALSHOW(!1);
            },
            closeGuestMode: function () {
              _bili_space_mid === _bili_space_mymid &&
                ((this.modeChanging = !this.modeChanging),
                this.toggleSpaceState("owner"),
                this.UPDATE_MEDALSHOW(!0),
                "index" === this.$route.name
                  ? window.location.reload()
                  : this.$router.push({ name: "index" }));
            },
            themeTriggerEnter: function (t) {
              var e = this;
              clearInterval(this.incr),
                (this.decr = setInterval(function () {
                  (t.target.style.backgroundPosition =
                    -58 * e.frame++ + "px 0px"),
                    e.frame >= 10 && clearInterval(e.decr);
                }, 1e3 / 60));
            },
            themeTriggerLeave: function (t) {
              var e = this;
              clearInterval(this.decr),
                (this.incr = setInterval(function () {
                  (t.target.style.backgroundPosition =
                    -58 * --e.frame + "px 0px"),
                    e.frame <= 0 && clearInterval(e.incr);
                }, 1e3 / 60));
            },
            themeToggle: function () {
              (this.themeShow = !this.themeShow),
                !1 === this.isTopphotoLoad &&
                  this.fetchTopphoto(_bili_space_mid);
            },
            editSign: function () {
              this.edittingSign !== this._bili_space_info.sign &&
                this.setSign({ user_sign: this.edittingSign });
            },
            previewToutu: function (t) {
              this.previewToutuImg = t;
            },
            resetToutu: function () {
              var t = this,
                e = this._bili_space_info,
                i = this._bili_space_settings,
                n = e.theme.id ? e.theme.top_photo : i.toutu.l_img;
              (this.previewToutuImg =
                "//static.hdslb.com/images/transparent.gif"),
                this.$nextTick(function () {
                  (t.previewToutuImg = ""),
                    void 0 !== n &&
                      $(".h-inner").css({
                        "background-size": "",
                        "background-position": "",
                        transition: "",
                      });
                });
            },
            confirm: function () {
              var t = this,
                e = this.report.checked;
              0 !== e.length
                ? ((this.report.show = !1),
                  this.reportUper({
                    mid: _bili_space_mid,
                    reason: e.join(","),
                  }).then(function () {
                    t.$toast("举报成功！");
                  }))
                : this.$warn("请至少选择一项作为举报内容");
            },
            cancel: function () {
              this.report.show = !1;
            },
            honorJump: function (t, e) {
              var i;
              null === (i = window.reportObserver) ||
                void 0 === i ||
                i.reportCustomData("click", {
                  spm_id: "333.999.bili_honor.0.click",
                  msg: JSON.stringify({
                    up_mid: this._bili_space_mid,
                    honor_name: t,
                    link: e,
                  }),
                }),
                e && window.open(e);
            },
            honorExposure: function () {
              for (var t = 0; t < this.honor.length; t++) {
                var e;
                null === (e = window.reportObserver) ||
                  void 0 === e ||
                  e.reportCustomData("appear", {
                    spm_id: "333.999.bili_honor.0.show",
                    msg: JSON.stringify({
                      up_mid: this._bili_space_mid,
                      honor_name: this.honor[t].name,
                      link: this.honor[t].web_link,
                    }),
                  });
              }
            },
            handleFanMedal: function () {
              0 !== this._bili_login_info.mid
                ? (Object(bt.a)(
                    {
                      spm_id: "333.999",
                      c: "user_information",
                      d: "fans_medal",
                      e: "click",
                      type: "click",
                    },
                    {
                      msg: JSON.stringify({
                        self_type: "owner" === this._bili_space_state ? 0 : 1,
                        wear_type: this._bili_space_fanMedal.wear ? 1 : 0,
                      }),
                    }
                  ),
                  "owner" === this._bili_space_state
                    ? window.open(
                        "https://live.bilibili.com/p/html/live-fansmedal-wall/#/view-medal"
                      )
                    : (this.dialogVisible = !0))
                : window.UserStatus &&
                  window.UserStatus.quickLogin(function () {
                    window.location.reload();
                  });
            },
            vipExposure: function () {
              Object(bt.a)(
                {
                  spm_id: "333.999",
                  c: "user_information",
                  d: "big_members",
                  e: "click",
                  type: "click",
                },
                {
                  msg: JSON.stringify({
                    self_type: "owner" === this._bili_space_state ? 0 : 1,
                    member_type: this.isVip ? (this.isVipAnnual ? 2 : 1) : 3,
                  }),
                }
              );
            },
            linkToVip: function () {
              this.vipExposure(),
                window.open("//account.bilibili.com/account/big");
            },
            handleVipPay: function () {
              this.vipExposure(),
                new _t.BiliBiliVipDialog(
                  {
                    source_from: "pckongjianfhy",
                    appId: 126,
                    appSubId: "web",
                    pay_from: "",
                  },
                  function () {
                    window.location.reload();
                  }
                );
            },
          }
        ),
        computed: yt(
          yt(
            {},
            Object(w.c)([
              "_bili_space_mid",
              "_bili_space_mymid",
              "_bili_space_is_login",
              "_bili_space_info",
              "_bili_space_settings",
              "_bili_space_state",
              "_bili_space_vip",
              "_bili_login_info",
              "isNavLoad",
              "isVip",
              "isVipFrozen",
              "isVipNormal",
              "isVipAnnual",
              "isFoolsDay",
              "isTopphotoLoad",
              "attribute",
              "accRelation",
              "_bili_space_notice",
              "shieldingState",
              "_bili_space_fanMedal",
            ])
          ),
          {},
          {
            curState: function () {
              switch (this._bili_space_state) {
                case "owner":
                  return "我自己";
                case "fans":
                  return "粉丝";
                case "visitor":
                  return "游客";
              }
            },
            silentlyFollowPrefix: function () {
              switch (this.attribute) {
                case 1:
                  return "取消";
                case 2:
                  return "转为";
                default:
                  return "";
              }
            },
            toutu: function () {
              var t = this._bili_space_settings,
                e =
                  this.previewToutuImg.length > 0
                    ? this.previewToutuImg
                    : "default" === t.theme
                    ? t.toutu.l_img
                    : t.theme.toutu;
              if (void 0 !== e && this.isNavLoad) {
                if ("//static.hdslb.com/images/transparent.gif" === e)
                  return "//static.hdslb.com/images/transparent.gif";
                if (-1 !== e.indexOf("http"))
                  return "url(".concat(P(e, 1280, 200, 100), ")");
                var i = "//i0.hdslb.com/".concat(e);
                return "url(".concat(P(i, 1280, 200, 100), ")");
              }
              return "";
            },
            avatar: function () {
              return this._bili_space_info.face && this.isNavLoad
                ? String(this._bili_space_info.face).replace(/https?:/, "")
                : "//static.hdslb.com/images/member/noface.gif";
            },
            gender: function () {
              var t = "";
              switch (this._bili_space_info.sex) {
                case "男":
                  t = "male";
                  break;
                case "女":
                  t = "female";
                  break;
                default:
                  t = "";
              }
              return t;
            },
            authType: function () {
              var t = this._bili_space_info.official.role,
                e = "";
              return (
                [1, 2, 7].includes(t)
                  ? (e += "personal-auth")
                  : [3, 4, 5, 6].includes(t) && (e += "organization-auth"),
                e
              );
            },
            avatarIcon: function () {
              if (this._bili_space_info.vip)
                return (
                  (this._bili_space_info.vip.avatar_subscript_url &&
                    this._bili_space_info.vip.avatar_subscript_url.replace(
                      /^http:/g,
                      ""
                    )) ||
                  ""
                );
            },
            authTitle: function () {
              var t = this._bili_space_info.official.role;
              return [1, 2, 7].includes(t)
                ? "个人认证"
                : [3, 4, 5, 6].includes(t)
                ? "机构认证"
                : this.isVipNormal
                ? this._bili_space_vip.label.text
                : void 0;
            },
            vipName: function () {
              return this.isVipNormal ? this._bili_space_vip.label.text : "";
            },
            btnState: function () {
              var t = this.accRelation,
                e = t.relation,
                i = t.beRelation;
              return (i && 2 == +i.attribute) ||
                0 === this._bili_login_info.mid ||
                (this._bili_login_info.mid === this._bili_space_mid &&
                  "owner" !== this._bili_space_state)
                ? "关注"
                : 1 === e.special && 6 !== e.attribute
                ? "特别关注"
                : { 0: "关注", 1: "已关注", 2: "已关注", 6: "已互粉" }[
                    e.attribute
                  ];
            },
            specialBtn: function () {
              var t = this.accRelation.relation;
              return 1 === t.special && 6 !== t.attribute;
            },
            isFollowBack: function () {
              var t = this.accRelation.beRelation;
              return t && 2 == +t.attribute;
            },
            honor: function () {
              var t, e, i, n;
              return null !== (t = this._bili_space_info) &&
                void 0 !== t &&
                null !== (e = t.user_honour_info) &&
                void 0 !== e &&
                e.tags
                ? null === (i = this._bili_space_info) ||
                  void 0 === i ||
                  null === (n = i.user_honour_info) ||
                  void 0 === n
                  ? void 0
                  : n.tags
                : [];
            },
          }
        ),
      },
      Ct =
        (i(509),
        Object(dt.a)(
          wt,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              { staticClass: "h" },
              [
                i(
                  "div",
                  { staticClass: "wrapper" },
                  [
                    i(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: 1 === t._bili_space_info.silence,
                            expression: "_bili_space_info.silence === 1",
                          },
                        ],
                        staticClass: "h-forbid",
                      },
                      [t._m(0)]
                    ),
                    t._bili_space_notice.content
                      ? i("notice", {
                          attrs: { _bili_space_notice: t._bili_space_notice },
                        })
                      : t._e(),
                    i(
                      "div",
                      {
                        staticClass: "h-inner",
                        style: { backgroundImage: t.toutu },
                      },
                      [
                        i("div", { staticClass: "h-gradient" }),
                        i("div", { staticClass: "h-user" }, [
                          i("div", { staticClass: "h-info clearfix" }, [
                            i("div", { staticClass: "h-avatar" }, [
                              i("img", {
                                attrs: {
                                  src: t.bfsImg(t.avatar, 64, 64),
                                  id: "h-avatar",
                                },
                              }),
                              "owner" === t._bili_space_state
                                ? i(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "rep",
                                          rawName: "v-rep",
                                          value: "avatar_update_click",
                                          expression: "'avatar_update_click'",
                                        },
                                      ],
                                      staticClass: "avatar-cover",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://account.bilibili.com/account/face/upload",
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n              更换头像\n            "
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t.authType
                                ? i("span", {
                                    staticClass: "user-auth-subscript avatar-m",
                                    class: t.authType,
                                    attrs: { title: t.authTitle },
                                  })
                                : t.avatarIcon
                                ? i("img", {
                                    staticClass: "avatar-icon",
                                    attrs: {
                                      src: t.avatarIcon,
                                      title: t.authTitle,
                                    },
                                  })
                                : t._e(),
                            ]),
                            i("div", { staticClass: "h-basic" }, [
                              i("div", {}, [
                                i("span", { attrs: { id: "h-name" } }, [
                                  t._v(t._s(t._bili_space_info.name)),
                                ]),
                                i("span", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        "" !== t._bili_space_info.description,
                                      expression:
                                        "_bili_space_info.description !== ''",
                                    },
                                  ],
                                  staticClass: "icon",
                                  attrs: { id: "h-ceritification" },
                                }),
                                i("span", {
                                  staticClass: "icon gender",
                                  class: t.gender,
                                  attrs: { id: "h-gender" },
                                }),
                                i("a", {
                                  staticClass: "h-level m-level",
                                  attrs: {
                                    href: "//www.bilibili.com/html/help.html#k",
                                    target: "_blank",
                                    lvl: t._bili_space_info.level,
                                  },
                                }),
                                t.isVipNormal
                                  ? i(
                                      "div",
                                      {
                                        staticClass: "h-vipType",
                                        style: {
                                          color: t._bili_space_vip.label
                                            ? t._bili_space_vip.label.text_color
                                            : "#ffffff",
                                          backgroundColor: t._bili_space_vip
                                            .label
                                            ? t._bili_space_vip.label.bg_color
                                            : "",
                                        },
                                        on: { click: t.linkToVip },
                                      },
                                      [t._v(t._s(t.vipName))]
                                    )
                                  : "owner" === t._bili_space_state
                                  ? i(
                                      "div",
                                      {
                                        staticClass: "h-vipType disable",
                                        on: { click: t.handleVipPay },
                                      },
                                      [t._v("大会员")]
                                    )
                                  : t._e(),
                                t._bili_space_fanMedal.show
                                  ? i(
                                      "div",
                                      {
                                        staticClass: "space-fans-medal",
                                        on: { click: t.handleFanMedal },
                                      },
                                      [
                                        t._bili_space_fanMedal.show &&
                                        t._bili_space_fanMedal.wear
                                          ? i("MedalLabel", {
                                              staticClass: "fans-medal",
                                              attrs: {
                                                medalInfo:
                                                  t._bili_space_fanMedal,
                                              },
                                            })
                                          : t._e(),
                                        t._bili_space_fanMedal.show &&
                                        !t._bili_space_fanMedal.wear
                                          ? i(
                                              "div",
                                              { staticClass: "normal-medal" },
                                              [t._m(1), t._m(2)]
                                            )
                                          : t._e(),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ]),
                              i(
                                "div",
                                {
                                  staticClass: "h-basic-spacing",
                                  class: { "is-honor": t.honor.length > 0 },
                                },
                                [
                                  i(
                                    "h4",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            !t.isNavLoad ||
                                            "owner" !== t._bili_space_state,
                                          expression:
                                            "!isNavLoad || _bili_space_state !== 'owner'",
                                        },
                                      ],
                                      staticClass: "h-sign",
                                      attrs: { title: t._bili_space_info.sign },
                                    },
                                    [
                                      t._v(
                                        "\n                " +
                                          t._s(t._bili_space_info.sign) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                  i("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.edittingSign,
                                        expression: "edittingSign",
                                      },
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          t.isNavLoad &&
                                          "owner" === t._bili_space_state,
                                        expression:
                                          "isNavLoad && _bili_space_state === 'owner'",
                                      },
                                    ],
                                    staticClass: "space_input",
                                    attrs: {
                                      id: "h-sign",
                                      type: "text",
                                      placeholder: "编辑个性签名",
                                      maxlength: "60",
                                    },
                                    domProps: { value: t.edittingSign },
                                    on: {
                                      blur: t.editSign,
                                      input: function (e) {
                                        e.target.composing ||
                                          (t.edittingSign = e.target.value);
                                      },
                                    },
                                  }),
                                ]
                              ),
                              t.honor.length > 0
                                ? i(
                                    "div",
                                    { staticClass: "honor" },
                                    t._l(t.honor, function (e, n) {
                                      return i(
                                        "span",
                                        {
                                          key: n,
                                          staticClass: "honor-item",
                                          class: { cursor: e.web_link },
                                          on: {
                                            click: function (i) {
                                              return t.honorJump(
                                                e.name,
                                                e.web_link
                                              );
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(e.name) +
                                              "\n              "
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  )
                                : t._e(),
                            ]),
                          ]),
                        ]),
                        i("div", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "owner" === t._bili_space_state,
                              expression: "_bili_space_state === 'owner'",
                            },
                            {
                              name: "rep",
                              rawName: "v-rep",
                              value: "space_clothes_click",
                              expression: "'space_clothes_click'",
                            },
                          ],
                          staticClass: "space-theme-trigger icon",
                          attrs: { title: "更换皮肤" },
                          on: {
                            mouseenter: t.themeTriggerEnter,
                            mouseleave: t.themeTriggerLeave,
                            click: t.themeToggle,
                          },
                        }),
                        "owner" === t._bili_space_state
                          ? i(
                              "be-dropdown",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.modeChanging,
                                    expression: "!modeChanging",
                                  },
                                ],
                                staticClass: "h-version",
                                on: { select: t.changeSpaceMode },
                              },
                              [
                                i(
                                  "div",
                                  {
                                    staticClass: "h-v-btn popup-select",
                                    attrs: { slot: "trigger" },
                                    slot: "trigger",
                                  },
                                  [
                                    t._v("\n          视角：\n          "),
                                    i(
                                      "span",
                                      { staticClass: "h-version-state" },
                                      [t._v(t._s(t.curState))]
                                    ),
                                    i("span", {
                                      staticClass:
                                        "h-role-icon d-arrow d-arrow-dark",
                                    }),
                                  ]
                                ),
                                i(
                                  "be-dropdown-menu",
                                  { attrs: { slot: "menu" }, slot: "menu" },
                                  [
                                    i(
                                      "be-dropdown-item",
                                      { attrs: { name: "visitor" } },
                                      [t._v("新访客")]
                                    ),
                                    i(
                                      "be-dropdown-item",
                                      { attrs: { name: "fans" } },
                                      [t._v("我的粉丝")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : t._e(),
                        "owner" !== t._bili_space_state
                          ? i(
                              "div",
                              { staticClass: "h-action" },
                              [
                                0 === t.attribute
                                  ? i(
                                      "span",
                                      {
                                        staticClass: "h-f-btn h-follow",
                                        on: { click: t.handleFollow },
                                      },
                                      [
                                        i("i", {
                                          class: {
                                            "icon-back-follow": t.isFollowBack,
                                          },
                                        }),
                                        t._v(t._s(t.btnState) + "\n        "),
                                      ]
                                    )
                                  : t._e(),
                                [2, 6].indexOf(t.attribute) > -1
                                  ? i(
                                      "be-dropdown",
                                      {
                                        staticClass: "h-f-btn h-unfollow",
                                        class: { special: t.specialBtn },
                                        attrs: { trigger: "hover" },
                                        on: { select: t.handleDropdownSelect },
                                      },
                                      [
                                        i(
                                          "div",
                                          {
                                            attrs: { slot: "trigger" },
                                            slot: "trigger",
                                          },
                                          [
                                            i("i", {
                                              staticClass:
                                                "iconfont video-commonmenu",
                                            }),
                                            i("i", { staticClass: "h-f-icon" }),
                                            t._v(
                                              t._s(t.btnState) + "\n          "
                                            ),
                                          ]
                                        ),
                                        i(
                                          "be-dropdown-menu",
                                          {
                                            attrs: { slot: "menu" },
                                            slot: "menu",
                                          },
                                          [
                                            i(
                                              "be-dropdown-item",
                                              { attrs: { name: "setGroup" } },
                                              [t._v("设置分组")]
                                            ),
                                            i(
                                              "be-dropdown-item",
                                              { attrs: { name: "unfollow" } },
                                              [t._v("取消关注")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                1 === t.attribute
                                  ? i(
                                      "span",
                                      {
                                        staticClass: "h-f-btn h-unfollow",
                                        on: { click: t.handleUnfollow },
                                      },
                                      [
                                        i("i", { staticClass: "h-f-icon" }),
                                        t._v("已悄悄关注\n        "),
                                      ]
                                    )
                                  : t._e(),
                                t.attribute >= 128
                                  ? i(
                                      "span",
                                      {
                                        staticClass: "h-f-btn h-unfollow",
                                        on: { click: t.removeFromBan },
                                      },
                                      [
                                        i("i", { staticClass: "h-f-icon" }),
                                        t._v("移除黑名单\n        "),
                                      ]
                                    )
                                  : t._e(),
                                t.shieldingState
                                  ? t._e()
                                  : i(
                                      "a",
                                      {
                                        directives: [
                                          {
                                            name: "rep",
                                            rawName: "v-rep",
                                            value: "space_chatButton_click",
                                            expression:
                                              "'space_chatButton_click'",
                                          },
                                        ],
                                        staticClass: "h-f-btn h-message",
                                        attrs: {
                                          href:
                                            "//message.bilibili.com/#whisper/mid" +
                                            t._bili_space_info.mid,
                                          target: "_blank",
                                        },
                                      },
                                      [t._v("发消息")]
                                    ),
                                i(
                                  "be-dropdown",
                                  {
                                    staticClass: "h-add-to-black",
                                    attrs: { trigger: "hover" },
                                    on: { select: t.handleDropdownSelect },
                                  },
                                  [
                                    i(
                                      "be-dropdown-menu",
                                      { attrs: { slot: "menu" }, slot: "menu" },
                                      [
                                        i(
                                          "be-dropdown-item",
                                          { attrs: { name: "ban" } },
                                          [
                                            t._v(
                                              t._s(
                                                t.attribute >= 128
                                                  ? "移除"
                                                  : "加入"
                                              ) + "黑名单"
                                            ),
                                          ]
                                        ),
                                        i(
                                          "be-dropdown-item",
                                          { attrs: { name: "silently" } },
                                          [
                                            t._v(
                                              t._s(t.silentlyFollowPrefix) +
                                                "悄悄关注"
                                            ),
                                          ]
                                        ),
                                        i(
                                          "be-dropdown-item",
                                          { attrs: { name: "report" } },
                                          [t._v("个人信息举报")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                i("transition", { attrs: { name: "zoom" } }, [
                  "owner" !== t._bili_space_state && t.modeChanging
                    ? i("div", { staticClass: "h-guest-hint" }, [
                        t._v(
                          "\n      这是我的空间在" +
                            t._s(
                              "fans" === t._bili_space_state
                                ? "我的粉丝"
                                : "新访客"
                            ) +
                            "眼中的样子\n      "
                        ),
                        i(
                          "span",
                          {
                            directives: [
                              {
                                name: "rep",
                                rawName: "v-rep",
                                value: "space_finsihButton_click",
                                expression: "'space_finsihButton_click'",
                              },
                            ],
                            staticClass: "h-v-host",
                            on: { click: t.closeGuestMode },
                          },
                          [t._v("关闭预览")]
                        ),
                      ])
                    : t._e(),
                ]),
                t.isNavLoad
                  ? i("v-theme", {
                      attrs: { "mall-active": t.themeShow },
                      on: {
                        "theme-close": function (e) {
                          t.themeShow = !1;
                        },
                        "preview-toutu": t.previewToutu,
                        "reset-toutu": t.resetToutu,
                      },
                    })
                  : t._e(),
                i(
                  "modal",
                  {
                    attrs: { show: t.report.show },
                    on: { confirm: t.confirm, cancel: t.cancel },
                  },
                  [
                    i("template", { slot: "title" }, [t._v("个人信息举报")]),
                    i(
                      "div",
                      {
                        staticClass: "report-popup",
                        attrs: { slot: "body" },
                        slot: "body",
                      },
                      [
                        i("p", { staticClass: "report-popup-tip" }, [
                          t._v("举报内容（可多选）"),
                        ]),
                        i(
                          "ul",
                          { staticClass: "report-popup-list clearfix" },
                          t._l(t.report.items, function (e) {
                            return i(
                              "li",
                              {
                                staticClass: "report-popup-item",
                                class: {
                                  checked: t.report.checked.indexOf(e.id) > -1,
                                },
                                on: {
                                  click: function (i) {
                                    return t.handleCheckReport(e.id);
                                  },
                                },
                              },
                              [
                                i("em", {
                                  staticClass: "report-popup-item-checkbox",
                                }),
                                i(
                                  "span",
                                  { staticClass: "report-popup-item-text" },
                                  [t._v(t._s(e.text))]
                                ),
                              ]
                            );
                          }),
                          0
                        ),
                      ]
                    ),
                  ],
                  2
                ),
                i(
                  "Dialog",
                  {
                    attrs: {
                      "custom-class": "fans-medal-dialog",
                      title: "粉丝勋章墙",
                      visible: t.dialogVisible,
                      "append-to-body": !0,
                      width: "375px",
                    },
                    on: {
                      "update:visible": function (e) {
                        t.dialogVisible = e;
                      },
                    },
                  },
                  [
                    i("i", {
                      staticClass: "iconfont icon-ic_close",
                      on: {
                        click: function () {
                          return (t.dialogVisible = !1);
                        },
                      },
                    }),
                    i("iframe", {
                      attrs: {
                        width: "100%",
                        height: "307px",
                        name: "fans-medal-wall",
                        src:
                          "https://live.bilibili.com/p/html/live-fansmedal-wall/?tid=" +
                          t._bili_space_mid +
                          "#/view-wall",
                        frameborder: "0",
                      },
                    }),
                  ]
                ),
              ],
              1
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "f-wrap" }, [
                e("i", { staticClass: "f-icon" }),
                e("span", { staticClass: "f-txt" }, [this._v("该账号封禁中")]),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "normal-left" }, [e("i"), e("i")]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "normal-right" }, [
                e("p", [this._v("粉丝勋章")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports);
    function Tt(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function St(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Tt(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : Tt(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var jt,
      Pt = {
        data: function () {
          return { keyword: "", activePage: "index", currentPage: "index" };
        },
        mounted: function () {
          this.activePage = this.currentPage = this.getPath(this.$route);
        },
        methods: {
          slideTo: function (t) {
            this.activePage = t;
          },
          slideOut: function () {
            this.activePage = this.currentPage;
          },
          getPath: function (t) {
            var e = t.path.split("/")[2];
            return e && "" !== e ? e : "index";
          },
          activeSearch: function () {
            this.doSearch();
          },
          deactiveSearch: function () {
            var t = this;
            setTimeout(function () {
              t.keyword = "";
            }, 200);
          },
          doSearch: function () {
            var t = this.keyword;
            0 !== t.length &&
              ((window._search_keyword = t),
              rec("space_index_searchButton_click"),
              this.$router.push({ name: "video", query: { keyword: t } }));
          },
          clickSetting: function () {
            var t = "";
            switch (this.$route.name) {
              case "index":
              case "follow":
              case "fans":
              case "ban":
              case "404":
                t = "index";
                break;
              case "video":
                t = "video";
                break;
              case "channelList":
              case "channelDetail":
                t = "channel";
                break;
              case "favlist":
                t = "favlist";
                break;
              case "bangumi":
              case "subscribe":
              case "cinema":
                t = "subs";
                break;
              case "qzIndex":
              case "qzThreads":
              case "qzReplys":
              case "qzFav":
                t = "qz";
                break;
              case "setting":
                t = "settings";
            }
            rec("space_navigation_settings_click", { refertab: t });
          },
          navRec: function (t) {
            var e = this.$route.name,
              i = this._bili_space_nav,
              n = {};
            switch (e) {
              case "index":
              case "follow":
              case "fans":
              case "ban":
              case "playlist":
              case "404":
                n.refertab = "index";
                break;
              case "video":
                n.refertab = "video";
                break;
              case "channelList":
              case "channelDetail":
                n.refertab = "channel";
                break;
              case "favlist":
                n.refertab = "favlist";
                break;
              case "bangumi":
              case "subscribe":
              case "cinema":
                n.refertab = "subs";
                break;
              case "qzIndex":
              case "qzThreads":
              case "qzReplys":
              case "qzFav":
                n.refertab = "qz";
                break;
              case "setting":
                n.refertab = "settings";
            }
            switch (t) {
              case "videoPage":
                n.tabnum = i.video;
                break;
              case "channelPage":
                n.tabnum =
                  "owner" === this._bili_space_state
                    ? i.channel.master
                    : i.channel.guest;
                break;
              case "favlist":
                n.tabnum =
                  "owner" === this._bili_space_state
                    ? i.favourite.master
                    : this._bili_space_settings.privacy.fav_video
                    ? i.favourite.guest
                    : -1;
            }
            "pugv" === t
              ? rec("space_pugv_click", { up_mid: this._bili_space_mid })
              : rec("space_navigation_".concat(t, "_click"), n);
          },
        },
        filters: {
          overK: function (t) {
            return void 0 === t ? 0 : t < 1e3 ? t : "999+";
          },
          likeTitle: function (t) {
            var e = String(t).replace(/\d{1,3}(?=(\d{3})+$)/g, function (t) {
              return t + ",";
            });
            return "视频、动态、专栏累计获赞".concat(e);
          },
          archiveTitle: function (t) {
            var e = String(t).replace(/\d{1,3}(?=(\d{3})+$)/g, function (t) {
              return t + ",";
            });
            return "截止昨天，播放数总计为".concat(e);
          },
          articleTitle: function (t) {
            var e = String(t).replace(/\d{1,3}(?=(\d{3})+$)/g, function (t) {
              return t + ",";
            });
            return "截止昨天，阅读数总计为".concat(e);
          },
        },
        computed: St(
          St(
            {},
            Object(w.c)([
              "_bili_space_mid",
              "_bili_space_info",
              "_bili_space_state",
              "_bili_space_settings",
              "_bili_space_nav",
              "isNavLoad",
              "relations",
              "isPlaylistAuthed",
              "playNumber",
              "shieldingState",
            ])
          ),
          {},
          {
            isTabShow: function () {
              var t = {},
                e = this._bili_space_settings.privacy,
                i = this._bili_space_state;
              return (
                (t.video =
                  "owner" === i || 1 === e.channel || 1 === e.submited_video),
                (t.subs = "owner" === i || 1 === e.bangumi || 1 === e.tags),
                (t.fav = "owner" === i || 1 === e.fav_video),
                (t.qz = "owner" === i || 1 === e.groups),
                (t.setting = "owner" === i),
                t
              );
            },
            subscribeLink: function () {
              var t = this._bili_space_nav,
                e = this._bili_space_settings.privacy,
                i = +t.bangumi,
                n = +t.cinema,
                a = this._bili_space_mid;
              return "owner" !== this._bili_space_state
                ? e.bangumi && i > 0
                  ? "/".concat(a, "/bangumi")
                  : e.bangumi && n > 0
                  ? "/".concat(a, "/cinema")
                  : "/".concat(a, "/subs")
                : "/".concat(
                    a,
                    0 !== i ? "/bangumi" : 0 !== n ? "/cinema" : "/subs"
                  );
            },
          }
        ),
        watch: {
          $route: function (t) {
            var e = this.getPath(t);
            this.activePage = this.currentPage = e;
          },
        },
      };
    function Lt(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function Mt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Lt(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : Lt(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var Ut =
        ((jt = {
          name: "common-nav",
          mixins: [Pt],
          data: function () {
            return { cursorStyle: { width: "0px", left: "0px" } };
          },
          computed: Mt({}, Object(w.c)(["shieldingState"])),
          mounted: function () {
            this.fetchRelationNumbers(_bili_space_mid),
              this.getUpStat(_bili_space_mid),
              this.getCursorStyle();
          },
          methods: Mt(
            Mt({}, Object(w.b)(["fetchRelationNumbers", "getUpStat"])),
            {},
            {
              getCursorStyle: function () {
                var t = this;
                this.$nextTick(function () {
                  if (void 0 !== t.activePage) {
                    var e = document.querySelector(
                      "#navigator .n-btn.n-" + t.activePage
                    );
                    (t.cursorStyle.width = e.clientWidth + "px"),
                      (t.cursorStyle.left = e.offsetLeft + "px");
                  }
                });
              },
              handleIntoFollows: function () {
                this.isFollowsHidden &&
                  this.$toast("由于该用户隐私设置，关注列表不可见");
              },
            }
          ),
        }),
        b()(jt, "computed", {
          isFollowsHidden: function () {
            var t;
            return (
              (null === (t = this._bili_space_settings.privacy) || void 0 === t
                ? void 0
                : t.disable_following) && "owner" !== this._bili_space_state
            );
          },
        }),
        b()(jt, "watch", {
          _bili_space_nav: function (t) {
            t && this.getCursorStyle();
          },
          isNavLoad: function (t) {
            t && this.getCursorStyle();
          },
          activePage: function () {
            this.getCursorStyle();
          },
        }),
        jt),
      xt =
        (i(510),
        Object(dt.a)(
          Ut,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "n", attrs: { id: "navigator" } }, [
              i(
                "div",
                { staticClass: "wrapper", on: { mouseleave: t.slideOut } },
                [
                  i("div", { staticClass: "n-inner clearfix" }, [
                    i(
                      "div",
                      { staticClass: "n-tab-links" },
                      [
                        i(
                          "router-link",
                          {
                            staticClass: "n-btn n-index n-fans n-404",
                            class: {
                              active:
                                ["index", "", "fans", "404"].indexOf(
                                  t.currentPage
                                ) > -1,
                            },
                            attrs: { to: { name: "index" } },
                            nativeOn: {
                              mouseover: function (e) {
                                return t.slideTo("index");
                              },
                              click: function (e) {
                                return t.navRec("index");
                              },
                            },
                          },
                          [
                            i("span", { staticClass: "iconfont icon-ic_home" }),
                            i("span", { staticClass: "n-text" }, [
                              t._v("主页"),
                            ]),
                          ]
                        ),
                        i(
                          "router-link",
                          {
                            staticClass: "n-btn n-dynamic",
                            class: {
                              active: ["dynamic"].indexOf(t.currentPage) > -1,
                            },
                            attrs: { to: { name: "dynamic" } },
                            nativeOn: {
                              mouseover: function (e) {
                                return t.slideTo("dynamic");
                              },
                              click: function (e) {
                                return t.navRec("dynamicPage");
                              },
                            },
                          },
                          [
                            i("span", {
                              staticClass: "iconfont icon-ic_following",
                            }),
                            i("span", { staticClass: "n-text" }, [
                              t._v("动态"),
                            ]),
                          ]
                        ),
                        i(
                          "router-link",
                          {
                            staticClass:
                              "n-btn n-video n-audio n-article n-album",
                            class: {
                              active:
                                ["video", "audio", "article", "album"].indexOf(
                                  t.currentPage
                                ) > -1,
                            },
                            attrs: { to: { name: "video" } },
                            nativeOn: {
                              mouseover: function (e) {
                                return t.slideTo("video");
                              },
                              click: function (e) {
                                return t.navRec("videoPage");
                              },
                            },
                          },
                          [
                            i("span", {
                              staticClass: "iconfont icon-ic_video",
                            }),
                            i("span", { staticClass: "n-text" }, [
                              t._v("投稿"),
                            ]),
                            i("span", { staticClass: "n-num" }, [
                              t._v(
                                "\n            " +
                                  t._s(
                                    t._f("overK")(
                                      t._bili_space_nav.video +
                                        t._bili_space_nav.article +
                                        t._bili_space_nav.album +
                                        t._bili_space_nav.audio
                                    )
                                  ) +
                                  "\n          "
                              ),
                            ]),
                          ]
                        ),
                        t.isPlaylistAuthed
                          ? i(
                              "router-link",
                              {
                                staticClass: "n-btn n-playlist",
                                class: {
                                  active:
                                    ["playlist"].indexOf(t.currentPage) > -1,
                                },
                                attrs: { to: { name: "playlistList" } },
                                nativeOn: {
                                  mouseover: function (e) {
                                    return t.slideTo("playlist");
                                  },
                                  click: function (e) {
                                    return t.navRec("playlistPage");
                                  },
                                },
                              },
                              [
                                i("span", {
                                  staticClass: "iconfont icon-ic_playlist",
                                }),
                                i("span", { staticClass: "n-text" }, [
                                  t._v("播单"),
                                ]),
                                i("span", { staticClass: "n-num" }, [
                                  t._v(
                                    t._s(
                                      t._f("overK")(t._bili_space_nav.playlist)
                                    )
                                  ),
                                ]),
                              ]
                            )
                          : t._e(),
                        i(
                          "router-link",
                          {
                            staticClass: "n-btn n-channel",
                            class: {
                              active: ["channel"].indexOf(t.currentPage) > -1,
                            },
                            attrs: { to: { name: "channelList" } },
                            nativeOn: {
                              mouseover: function (e) {
                                return t.slideTo("channel");
                              },
                              click: function (e) {
                                return t.navRec("channelPage");
                              },
                            },
                          },
                          [
                            i("span", {
                              staticClass: "iconfont icon-ic_channel",
                            }),
                            i("span", { staticClass: "n-text" }, [
                              t._v("频道"),
                            ]),
                            i("span", { staticClass: "n-num" }, [
                              t._v(
                                "\n            " +
                                  t._s(
                                    t._f("overK")(
                                      "owner" === t._bili_space_state
                                        ? t._bili_space_nav.channel.master
                                        : t._bili_space_nav.channel.guest
                                    )
                                  ) +
                                  "\n          "
                              ),
                            ]),
                          ]
                        ),
                        t._bili_space_nav.pugv
                          ? i(
                              "router-link",
                              {
                                staticClass: "n-btn n-pugv",
                                class: {
                                  active: ["pugv"].indexOf(t.currentPage) > -1,
                                },
                                attrs: { to: { name: "pugv" } },
                                nativeOn: {
                                  mouseover: function (e) {
                                    return t.slideTo("pugv");
                                  },
                                  click: function (e) {
                                    return t.navRec("pugv");
                                  },
                                },
                              },
                              [
                                i("span", {
                                  staticClass: "iconfont icon-ic_class1",
                                }),
                                i("span", { staticClass: "n-text" }, [
                                  t._v("课程"),
                                ]),
                                i("span", { staticClass: "n-num" }, [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t._f("overK")(t._bili_space_nav.pugv)
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                              ]
                            )
                          : t._e(),
                        t.isTabShow.fav
                          ? i(
                              "router-link",
                              {
                                staticClass: "n-btn n-favlist",
                                class: {
                                  active:
                                    ["favlist"].indexOf(t.currentPage) > -1,
                                },
                                attrs: { to: { name: "fav" } },
                                nativeOn: {
                                  mouseover: function (e) {
                                    return t.slideTo("favlist");
                                  },
                                  click: function (e) {
                                    return t.navRec("favlist");
                                  },
                                },
                              },
                              [
                                i("span", {
                                  staticClass: "iconfont icon-ic_collect",
                                }),
                                i("span", { staticClass: "n-text" }, [
                                  t._v("收藏"),
                                ]),
                                i("span", { staticClass: "n-num" }, [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t._f("overK")(
                                          "owner" === t._bili_space_state
                                            ? t._bili_space_nav.favourite.master
                                            : t._bili_space_nav.favourite.guest
                                        )
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                              ]
                            )
                          : t._e(),
                        t.isTabShow.subs
                          ? i(
                              "router-link",
                              {
                                staticClass: "n-btn n-bangumi n-subs n-cinema",
                                class: {
                                  active:
                                    ["bangumi", "subs", "cinema"].indexOf(
                                      t.currentPage
                                    ) > -1,
                                },
                                attrs: { to: { path: t.subscribeLink } },
                                nativeOn: {
                                  mouseover: function (e) {
                                    return t.slideTo("bangumi");
                                  },
                                  click: function (e) {
                                    return t.navRec("subs");
                                  },
                                },
                              },
                              [
                                i("span", {
                                  staticClass: "iconfont icon-ic_sub",
                                }),
                                i("span", { staticClass: "n-text" }, [
                                  t._v("订阅"),
                                ]),
                              ]
                            )
                          : t._e(),
                        t.isTabShow.setting
                          ? i(
                              "router-link",
                              {
                                staticClass: "n-btn n-setting",
                                class: {
                                  active:
                                    ["setting"].indexOf(t.currentPage) > -1,
                                },
                                attrs: { to: { name: "setting" } },
                                nativeOn: {
                                  mouseover: function (e) {
                                    return t.slideTo("setting");
                                  },
                                  click: function (e) {
                                    return t.clickSetting.apply(
                                      null,
                                      arguments
                                    );
                                  },
                                },
                              },
                              [
                                i("span", {
                                  staticClass: "iconfont icon-ic_setting",
                                }),
                                i("span", { staticClass: "n-text" }, [
                                  t._v("设置"),
                                ]),
                              ]
                            )
                          : t._e(),
                      ],
                      1
                    ),
                    t.shieldingState
                      ? t._e()
                      : i(
                          "div",
                          { staticClass: "clearfix g-search search-container" },
                          [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.keyword,
                                  expression: "keyword",
                                },
                              ],
                              staticClass: "space_input",
                              attrs: { type: "text", placeholder: "搜索视频" },
                              domProps: { value: t.keyword },
                              on: {
                                blur: t.deactiveSearch,
                                keyup: function (e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : t.doSearch.apply(null, arguments);
                                },
                                input: function (e) {
                                  e.target.composing ||
                                    (t.keyword = e.target.value);
                                },
                              },
                            }),
                            i("span", {
                              directives: [
                                {
                                  name: "rep",
                                  rawName: "v-rep",
                                  value:
                                    "space_TopViedoWindow_searchViedo_click",
                                  expression:
                                    "'space_TopViedoWindow_searchViedo_click'",
                                },
                              ],
                              staticClass: "icon search-btn",
                              on: { click: t.activeSearch },
                            }),
                          ]
                        ),
                    i(
                      "div",
                      { staticClass: "n-statistics" },
                      [
                        i(
                          t.isFollowsHidden ? "div" : "router-link",
                          {
                            directives: [
                              {
                                name: "rep",
                                rawName: "v-rep",
                                value: "space_top_fans_click",
                                expression: "'space_top_fans_click'",
                              },
                            ],
                            tag: "component",
                            staticClass: "n-data n-gz",
                            attrs: {
                              to: { name: "follow" },
                              title: t._f("separate")(t.relations.following),
                            },
                            on: { click: t.handleIntoFollows },
                          },
                          [
                            i("p", { staticClass: "n-data-k" }, [
                              t._v("关注数"),
                            ]),
                            i(
                              "p",
                              {
                                staticClass: "n-data-v space-attention",
                                attrs: { id: "n-gz" },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t._f("toWan")(t.relations.following)) +
                                    "\n          "
                                ),
                              ]
                            ),
                          ]
                        ),
                        i(
                          "router-link",
                          {
                            directives: [
                              {
                                name: "rep",
                                rawName: "v-rep",
                                value: "space_top_fans_click",
                                expression: "'space_top_fans_click'",
                              },
                            ],
                            staticClass: "n-data n-fs",
                            attrs: {
                              to: { name: "fans" },
                              title: t._f("separate")(t.relations.follower),
                            },
                          },
                          [
                            i("p", { staticClass: "n-data-k" }, [
                              t._v("粉丝数"),
                            ]),
                            i(
                              "p",
                              {
                                staticClass: "n-data-v space-fans",
                                attrs: { id: "n-fs" },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t._f("toWan")(t.relations.follower)) +
                                    "\n          "
                                ),
                              ]
                            ),
                          ]
                        ),
                        t.playNumber.likes >= 0
                          ? i(
                              "div",
                              {
                                staticClass: "n-data n-bf",
                                attrs: {
                                  title: t._f("likeTitle")(t.playNumber.likes),
                                },
                              },
                              [
                                i("p", { staticClass: "n-data-k" }, [
                                  t._v("获赞数"),
                                ]),
                                i(
                                  "p",
                                  {
                                    staticClass: "n-data-v",
                                    attrs: { id: "n-bf" },
                                  },
                                  [
                                    t._v(
                                      t._s(t._f("toWan")(t.playNumber.likes))
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : t._e(),
                        t.playNumber.archive.view >= 0
                          ? i(
                              "div",
                              {
                                staticClass: "n-data n-bf",
                                attrs: {
                                  title: t._f("archiveTitle")(
                                    t.playNumber.archive.view
                                  ),
                                },
                              },
                              [
                                i("p", { staticClass: "n-data-k" }, [
                                  t._v("播放数"),
                                ]),
                                i(
                                  "p",
                                  {
                                    staticClass: "n-data-v",
                                    attrs: { id: "n-bf" },
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t._f("toWan")(t.playNumber.archive.view)
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : t._e(),
                        t.playNumber.article.view >= 0
                          ? i(
                              "div",
                              {
                                staticClass: "n-data n-bf",
                                attrs: {
                                  title: t._f("articleTitle")(
                                    t.playNumber.article.view
                                  ),
                                },
                              },
                              [
                                i("p", { staticClass: "n-data-k" }, [
                                  t._v("阅读数"),
                                ]),
                                i(
                                  "p",
                                  {
                                    staticClass: "n-data-v",
                                    attrs: { id: "n-bf" },
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t._f("toWan")(t.playNumber.article.view)
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ]),
                  i("div", { staticClass: "n-cursor", style: t.cursorStyle }),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports);
    function kt(t, e) {
      t.setAttribute("class", e);
    }
    var Et = function (t, e) {
        return t.className.split(" ").indexOf(e.trim()) > -1;
      },
      It = function (t, e) {
        var i = t.className.split(" ");
        return (
          (e = e.trim()),
          Et(t, e) ||
            kt(t, 1 === i.length ? e : [].concat(M()(i), [e]).join(" ")),
          t
        );
      },
      Ot = function (t, e) {
        var i = t.className.split(" "),
          n = i.indexOf(e.trim());
        return Et(t, e) && (i.splice(n, 1), kt(t, i.join(" "))), t;
      },
      $t = {
        name: "common-fixed-nav",
        mixins: [Pt],
        data: function () {
          return {
            cursorStyle: { width: "0px", left: "0px" },
            avatar: "//static.hdslb.com/images/member/noface.gif",
          };
        },
        mounted: function () {
          var t = this,
            e = document.getElementById("navigator"),
            i = this.$el,
            n = e.getBoundingClientRect(),
            a = n.height,
            r = n.top;
          window.addEventListener("scroll", function () {
            window.pageYOffset > r + a ? It(i, "fixed") : Ot(i, "fixed");
          }),
            this.getCursorStyle(),
            this.$bus
              .$on("hideFixedNav", function () {
                Ot(i, "fixed"), (t.isForceHide = !0);
              })
              .$on("showFixedNav", function () {
                It(i, "fixed"), (t.isForceHide = !1);
              }),
            this.isNavLoad && this._bili_space_info.face
              ? (this.avatar = this._bili_space_info.face.toWebP())
              : (this.avatar = "//static.hdslb.com/images/member/noface.gif");
        },
        methods: {
          getCursorStyle: function () {
            var t = this;
            this.$nextTick(function () {
              if (void 0 !== t.activePage) {
                var e = document.querySelector(
                  "#navigator-fixed .n-btn.n-" + t.activePage
                );
                (t.cursorStyle.width = e.clientWidth + "px"),
                  (t.cursorStyle.left = e.offsetLeft + "px");
              }
            });
          },
        },
        computed: {},
        watch: {
          _bili_space_nav: function (t) {
            t && this.getCursorStyle();
          },
          isNavLoad: function (t) {
            t && this.getCursorStyle();
          },
          activePage: function () {
            this.getCursorStyle();
          },
        },
      },
      At =
        (i(511),
        Object(dt.a)(
          $t,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              { staticClass: "n n-fix", attrs: { id: "navigator-fixed" } },
              [
                i(
                  "div",
                  { staticClass: "wrapper", on: { mouseleave: t.slideOut } },
                  [
                    i("div", { staticClass: "n-inner clearfix" }, [
                      i(
                        "div",
                        { staticClass: "n-tab-links" },
                        [
                          i(
                            "router-link",
                            {
                              staticClass: "n-btn n-index n-fans n-404",
                              class: {
                                active:
                                  ["index", "", "fans", "404"].indexOf(
                                    t.currentPage
                                  ) > -1,
                              },
                              attrs: { to: { name: "index" } },
                              nativeOn: {
                                mouseover: function (e) {
                                  return t.slideTo("index");
                                },
                                click: function (e) {
                                  return t.navRec("index");
                                },
                              },
                            },
                            [
                              i("span", { staticClass: "n-avatar" }, [
                                i("img", {
                                  attrs: {
                                    src: t._f("coversize")(t.avatar, "48x48"),
                                    alt: t._bili_space_info.name,
                                  },
                                }),
                              ]),
                              i(
                                "span",
                                {
                                  staticClass: "n-text",
                                  staticStyle: { display: "inline-block" },
                                  attrs: { title: t._bili_space_info.name },
                                },
                                [t._v(t._s(t._bili_space_info.name))]
                              ),
                            ]
                          ),
                          i(
                            "router-link",
                            {
                              staticClass: "n-btn n-dynamic",
                              class: {
                                active: ["dynamic"].indexOf(t.currentPage) > -1,
                              },
                              attrs: { to: { name: "dynamic" } },
                              nativeOn: {
                                mouseover: function (e) {
                                  return t.slideTo("dynamic");
                                },
                                click: function (e) {
                                  return t.navRec("dynamicPage");
                                },
                              },
                            },
                            [
                              i("span", {
                                staticClass: "iconfont icon-ic_following",
                              }),
                              i("span", { staticClass: "n-text" }, [
                                t._v("动态"),
                              ]),
                            ]
                          ),
                          i(
                            "router-link",
                            {
                              staticClass:
                                "n-btn n-video n-audio n-article n-album",
                              class: {
                                active:
                                  [
                                    "video",
                                    "audio",
                                    "article",
                                    "album",
                                  ].indexOf(t.currentPage) > -1,
                              },
                              attrs: { to: { name: "video" } },
                              nativeOn: {
                                mouseover: function (e) {
                                  return t.slideTo("video");
                                },
                                click: function (e) {
                                  return t.navRec("videoPage");
                                },
                              },
                            },
                            [
                              i("span", {
                                staticClass: "iconfont icon-ic_video",
                              }),
                              i("span", { staticClass: "n-text" }, [
                                t._v("投稿"),
                              ]),
                              i("span", { staticClass: "n-num" }, [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t._f("overK")(
                                        t._bili_space_nav.video +
                                          t._bili_space_nav.article +
                                          t._bili_space_nav.album +
                                          t._bili_space_nav.audio
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]),
                            ]
                          ),
                          t.isPlaylistAuthed
                            ? i(
                                "router-link",
                                {
                                  staticClass: "n-btn n-playlist",
                                  class: {
                                    active:
                                      ["playlist"].indexOf(t.currentPage) > -1,
                                  },
                                  attrs: { to: { name: "playlistList" } },
                                  nativeOn: {
                                    mouseover: function (e) {
                                      return t.slideTo("playlist");
                                    },
                                    click: function (e) {
                                      return t.navRec("playlistPage");
                                    },
                                  },
                                },
                                [
                                  i("span", {
                                    staticClass: "iconfont icon-ic_playlist",
                                  }),
                                  i("span", { staticClass: "n-text" }, [
                                    t._v("播单"),
                                  ]),
                                  i("span", { staticClass: "n-num" }, [
                                    t._v(
                                      t._s(
                                        t._f("overK")(
                                          t._bili_space_nav.playlist
                                        )
                                      )
                                    ),
                                  ]),
                                ]
                              )
                            : t._e(),
                          i(
                            "router-link",
                            {
                              staticClass: "n-btn n-channel",
                              class: {
                                active: ["channel"].indexOf(t.currentPage) > -1,
                              },
                              attrs: { to: { name: "channelList" } },
                              nativeOn: {
                                mouseover: function (e) {
                                  return t.slideTo("channel");
                                },
                                click: function (e) {
                                  return t.navRec("channelPage");
                                },
                              },
                            },
                            [
                              i("span", {
                                staticClass: "iconfont icon-ic_channel",
                              }),
                              i("span", { staticClass: "n-text" }, [
                                t._v("频道"),
                              ]),
                              i("span", { staticClass: "n-num" }, [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t._f("overK")(
                                        "owner" === t._bili_space_state
                                          ? t._bili_space_nav.channel.master
                                          : t._bili_space_nav.channel.guest
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]),
                            ]
                          ),
                          t._bili_space_nav.pugv
                            ? i(
                                "router-link",
                                {
                                  staticClass: "n-btn n-pugv",
                                  class: {
                                    active:
                                      ["pugv"].indexOf(t.currentPage) > -1,
                                  },
                                  attrs: { to: { name: "pugv" } },
                                  nativeOn: {
                                    mouseover: function (e) {
                                      return t.slideTo("pugv");
                                    },
                                    click: function (e) {
                                      return t.navRec("pugv");
                                    },
                                  },
                                },
                                [
                                  i("span", {
                                    staticClass: "iconfont icon-ic_class1",
                                  }),
                                  i("span", { staticClass: "n-text" }, [
                                    t._v("课程"),
                                  ]),
                                  i("span", { staticClass: "n-num" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(
                                          t._f("overK")(t._bili_space_nav.pugv)
                                        ) +
                                        "\n          "
                                    ),
                                  ]),
                                ]
                              )
                            : t._e(),
                          t.isTabShow.fav
                            ? i(
                                "router-link",
                                {
                                  staticClass: "n-btn n-favlist",
                                  class: {
                                    active:
                                      ["favlist"].indexOf(t.currentPage) > -1,
                                  },
                                  attrs: { to: { name: "fav" } },
                                  nativeOn: {
                                    mouseover: function (e) {
                                      return t.slideTo("favlist");
                                    },
                                    click: function (e) {
                                      return t.navRec("favlist");
                                    },
                                  },
                                },
                                [
                                  i("span", {
                                    staticClass: "iconfont icon-ic_collect",
                                  }),
                                  i("span", { staticClass: "n-text" }, [
                                    t._v("收藏"),
                                  ]),
                                  i("span", { staticClass: "n-num" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(
                                          t._f("overK")(
                                            "owner" === t._bili_space_state
                                              ? t._bili_space_nav.favourite
                                                  .master
                                              : t._bili_space_nav.favourite
                                                  .guest
                                          )
                                        ) +
                                        "\n          "
                                    ),
                                  ]),
                                ]
                              )
                            : t._e(),
                          t.isTabShow.subs
                            ? i(
                                "router-link",
                                {
                                  staticClass:
                                    "n-btn n-bangumi n-subs n-cinema",
                                  class: {
                                    active:
                                      ["bangumi", "subs", "cinema"].indexOf(
                                        t.currentPage
                                      ) > -1,
                                  },
                                  attrs: { to: { path: t.subscribeLink } },
                                  nativeOn: {
                                    mouseover: function (e) {
                                      return t.slideTo("bangumi");
                                    },
                                    click: function (e) {
                                      return t.navRec("subs");
                                    },
                                  },
                                },
                                [
                                  i("span", {
                                    staticClass: "iconfont icon-ic_sub",
                                  }),
                                  i("span", { staticClass: "n-text" }, [
                                    t._v("订阅"),
                                  ]),
                                ]
                              )
                            : t._e(),
                          t.isTabShow.setting
                            ? i(
                                "router-link",
                                {
                                  staticClass: "n-btn n-setting",
                                  class: {
                                    active:
                                      ["setting"].indexOf(t.currentPage) > -1,
                                  },
                                  attrs: { to: { name: "setting" } },
                                  nativeOn: {
                                    mouseover: function (e) {
                                      return t.slideTo("setting");
                                    },
                                    click: function (e) {
                                      return t.clickSetting.apply(
                                        null,
                                        arguments
                                      );
                                    },
                                  },
                                },
                                [
                                  i("span", {
                                    staticClass: "iconfont icon-ic_setting",
                                  }),
                                  i("span", { staticClass: "n-text" }, [
                                    t._v("设置"),
                                  ]),
                                ]
                              )
                            : t._e(),
                        ],
                        1
                      ),
                      t.shieldingState
                        ? t._e()
                        : i(
                            "div",
                            {
                              staticClass: "clearfix g-search search-container",
                            },
                            [
                              i("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.keyword,
                                    expression: "keyword",
                                  },
                                ],
                                staticClass: "space_input",
                                attrs: {
                                  type: "text",
                                  placeholder: "搜索视频",
                                },
                                domProps: { value: t.keyword },
                                on: {
                                  blur: t.deactiveSearch,
                                  keyup: function (e) {
                                    return !e.type.indexOf("key") &&
                                      t._k(
                                        e.keyCode,
                                        "enter",
                                        13,
                                        e.key,
                                        "Enter"
                                      )
                                      ? null
                                      : t.doSearch.apply(null, arguments);
                                  },
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.keyword = e.target.value);
                                  },
                                },
                              }),
                              i("span", {
                                directives: [
                                  {
                                    name: "rep",
                                    rawName: "v-rep",
                                    value:
                                      "space_TopViedoWindow_searchViedo_click",
                                    expression:
                                      "'space_TopViedoWindow_searchViedo_click'",
                                  },
                                ],
                                staticClass: "icon search-btn",
                                on: { click: t.activeSearch },
                              }),
                            ]
                          ),
                      i(
                        "div",
                        { staticClass: "n-statistics" },
                        [
                          i(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "rep",
                                  rawName: "v-rep",
                                  value: "space_top_fans_click",
                                  expression: "'space_top_fans_click'",
                                },
                              ],
                              staticClass: "n-data n-gz",
                              attrs: {
                                to: { name: "follow" },
                                title: t._f("separate")(t.relations.following),
                              },
                            },
                            [
                              i("p", { staticClass: "n-data-k" }, [
                                t._v("关注数"),
                              ]),
                              i(
                                "p",
                                {
                                  staticClass: "n-data-v space-attention",
                                  attrs: { id: "n-gz" },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t._f("toWan")(t.relations.following)
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          i(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "rep",
                                  rawName: "v-rep",
                                  value: "space_top_fans_click",
                                  expression: "'space_top_fans_click'",
                                },
                              ],
                              staticClass: "n-data n-fs",
                              attrs: {
                                to: { name: "fans" },
                                title: t._f("separate")(t.relations.follower),
                              },
                            },
                            [
                              i("p", { staticClass: "n-data-k" }, [
                                t._v("粉丝数"),
                              ]),
                              i(
                                "p",
                                {
                                  staticClass: "n-data-v space-fans",
                                  attrs: { id: "n-fs" },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t._f("toWan")(t.relations.follower)
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t.playNumber.likes >= 0
                            ? i(
                                "div",
                                {
                                  staticClass: "n-data n-bf",
                                  attrs: {
                                    title: t._f("likeTitle")(
                                      t.playNumber.likes
                                    ),
                                  },
                                },
                                [
                                  i("p", { staticClass: "n-data-k" }, [
                                    t._v("获赞数"),
                                  ]),
                                  i(
                                    "p",
                                    {
                                      staticClass: "n-data-v",
                                      attrs: { id: "n-bf" },
                                    },
                                    [
                                      t._v(
                                        t._s(t._f("toWan")(t.playNumber.likes))
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                          t.playNumber.archive.view >= 0
                            ? i(
                                "div",
                                {
                                  staticClass: "n-data n-bf",
                                  attrs: {
                                    title: t._f("archiveTitle")(
                                      t.playNumber.archive.view
                                    ),
                                  },
                                },
                                [
                                  i("p", { staticClass: "n-data-k" }, [
                                    t._v("播放数"),
                                  ]),
                                  i(
                                    "p",
                                    {
                                      staticClass: "n-data-v",
                                      attrs: { id: "n-bf" },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("toWan")(
                                            t.playNumber.archive.view
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                          t.playNumber.article.view >= 0
                            ? i(
                                "div",
                                {
                                  staticClass: "n-data n-bf",
                                  attrs: {
                                    title: t._f("articleTitle")(
                                      t.playNumber.article.view
                                    ),
                                  },
                                },
                                [
                                  i("p", { staticClass: "n-data-k" }, [
                                    t._v("阅读数"),
                                  ]),
                                  i(
                                    "p",
                                    {
                                      staticClass: "n-data-v",
                                      attrs: { id: "n-bf" },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("toWan")(
                                            t.playNumber.article.view
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                        ],
                        1
                      ),
                    ]),
                    i("div", { staticClass: "n-cursor", style: t.cursorStyle }),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Nt = null,
      Dt = {
        name: "to-top",
        data: function () {
          return { keyframes: 0, isVisible: !1, isClick: !1, lastTrace: 0 };
        },
        mounted: function () {
          var t = $(window).height(),
            e = $(".to-top"),
            i = this;
          $(window)
            .off("scroll.toTop")
            .on("scroll.toTop", function () {
              var n = $(window).scrollTop();
              n - i.lastTrace > 0
                ? (i.isClick &&
                    (e.removeClass("transition"),
                    i.$nextTick(function () {
                      e.removeClass("fly");
                    }),
                    clearInterval(Nt)),
                  n >= t / 2 &&
                    (!i.isVisible && e.stop().fadeIn(100),
                    (i.isVisible = !0),
                    (i.keyframes = 0),
                    e.css("background-position-x", "-40px")),
                  (i.isClick = !1))
                : n < t / 2 &&
                  (i.isVisible && e.stop().fadeOut(100), (i.isVisible = !1)),
                (i.lastTrace = n);
            });
        },
        methods: {
          fly: function () {
            if (!this.isClick) {
              var t = this,
                e = $(".to-top");
              (this.isClick = !0),
                (Nt = setInterval(function () {
                  t.keyframes++,
                    e.css({
                      "background-position-x": -(143 * t.keyframes + 40) + "px",
                    }),
                    5 === t.keyframes &&
                      (e.addClass("transition"),
                      t.$nextTick(function () {
                        e.addClass("fly");
                      })),
                    6 === t.keyframes &&
                      ((t.keyframes = 0),
                      clearInterval(Nt),
                      $("html, body").stop().animate({ scrollTop: 0 }, "fast"));
                }, 50));
            }
          },
        },
      },
      Jt =
        (i(512),
        Object(dt.a)(
          Dt,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
              staticClass: "to-top",
              on: { click: this.fly },
            });
          },
          [],
          !1,
          null,
          null,
          null
        ).exports);
    function Vt(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function Rt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Vt(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : Vt(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var Ft = {
        props: { id: {} },
        mounted: function () {
          window.addEventListener("message", this.handleShare, !1);
        },
        destroyed: function () {
          window.removeEventListener("message", this.handleShare, !1);
        },
        computed: Rt({}, Object(w.c)(["favListDetails"])),
        methods: Rt(
          Rt({}, Object(w.b)(["sharePlayList"])),
          {},
          {
            handleShare: function (t) {
              var e = t.data;
              "dynamic-share-close" === e
                ? this.$store.commit("SHOWFAVSHARE_SUCCESS", !1)
                : "dynamic-share-succeed" === e &&
                  (this.sharePlayList({
                    rid: this.favListDetails.info.id,
                    r_type: 11,
                    cnt_type: 1,
                  }),
                  this.$store.commit("SHAREPLAYLIST_SUCCESS"));
            },
          }
        ),
      },
      Bt =
        (i(513),
        Object(dt.a)(
          Ft,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "fav-share" }, [
              e("div", { staticClass: "mask" }),
              e("iframe", {
                staticClass: "share-iframe",
                attrs: {
                  name: "fav-share",
                  width: "610",
                  height: "425",
                  src:
                    "//t.bilibili.com/share/card/index?type=4300&rid=" +
                    this.favListDetails.info.id +
                    "&repost_code=20000",
                  frameborder: "0",
                },
              }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Qt = {
        name: "ErrorPage",
        props: ["errorInfo"],
        methods: {
          backBtn: function () {
            document.referrer && (window.location.href = document.referrer),
              (window.location.href = "https://space.bilibili.com");
          },
        },
      },
      Gt =
        (i(515),
        Object(dt.a)(
          Qt,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n(
                "div",
                { staticClass: "wrapper clearfix", attrs: { id: "page-404" } },
                [
                  n("div", { staticClass: "p404" }, [
                    n("img", { attrs: { src: i(514) } }),
                    n("p", { staticClass: "error code" }, [
                      t._v("错误码：" + t._s(t.errorInfo.code)),
                    ]),
                    n("p", { staticClass: "error message" }, [
                      t._v(t._s(t.errorInfo.message)),
                    ]),
                  ]),
                  n(
                    "a",
                    { staticClass: "back-btn", on: { click: t.backBtn } },
                    [t._v("返回上一页")]
                  ),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          "1ba7478f",
          null
        ).exports);
    function Ht(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function Wt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ht(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : Ht(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var Xt = null,
      qt = null,
      zt = {
        name: "app",
        mounted: function () {
          var t = this,
            e = this._bili_space_state;
          this.fetchNavNum({ mid: this._bili_space_mid }).then(function () {
            var i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = i.video,
              a = t._bili_space_settings,
              r = "owner" === e ? i.channel.master : i.channel.guest,
              o =
                "owner" === e
                  ? i.favourite.master
                  : a.privacy.fav_video
                  ? i.favourite.guest
                  : -1,
              s = "owner" === e || a.privacy.tags ? 0 : -1,
              c = "owner" === e || a.privacy.groups ? 0 : -1;
            rec("space_navigation_show", {
              tabstates: "video/"
                .concat(n, "|channel/")
                .concat(r, "|favlist/")
                .concat(o, "|subs/")
                .concat(s, "|qz/")
                .concat(c),
            });
          }),
            "owner" !== e &&
              i
                .e(28)
                .then(function () {
                  var e = [i(718), i(719)];
                  (function (e, i) {
                    (Xt = e), (qt = i), t.startDanmu();
                  }.apply(null, e));
                })
                .catch(i.oe),
            this.$bus.$on("watchlater", function (e) {
              t.$store.commit(U.ic, e);
            }),
            $.ajax({
              url: "//static.hdslb.com/cashier/dist/js/payPlugin.js",
              cache: !0,
              dataType: "script",
            }),
            (window.rec = function (t, e) {
              var i = e || t;
              window.spaceReport[t] = i;
            }),
            this.reportDta();
        },
        methods: Wt(
          Wt({}, Object(w.b)(["fetchNavNum", "fetchRelation"])),
          {},
          {
            startDanmu: function () {
              "owner" !== this._bili_space_state
                ? (qt &&
                    new qt({
                      video: ".fakeDanmu-item",
                      cover: ".fakeDanmu-item .cover",
                    }),
                  Xt &&
                    new Xt({
                      video: ".fakeDanmu-item",
                      cover: ".fakeDanmu-item .cover",
                      ready: function () {
                        rec("space_thumbnail_preview");
                      },
                    }))
                : $("body").off(".preview");
            },
            reportDta: function () {
              var t, e;
              this.shieldingState &&
                (null === (t = window.reportObserver) ||
                  void 0 === t ||
                  null === (e = t.reportCustomData) ||
                  void 0 === e ||
                  e.call(t, "pv", {
                    spm_id: "333.999.0.0.pv",
                    msg: JSON.stringify({ blacklist: this.blacklist }),
                  }));
            },
          }
        ),
        watch: {
          _bili_space_state: function () {
            this.startDanmu();
          },
        },
        metaInfo: function () {
          var t = this._bili_space_info,
            e = t.name,
            i = t.sign,
            n = t.official;
          return {
            title: "".concat(e, "的个人空间_哔哩哔哩_Bilibili"),
            meta: [
              {
                name: "keywords",
                content: "".concat(
                  e,
                  ",B站,弹幕,字幕,AMV,MAD,MTV,ANIME,动漫,动漫音乐,游戏,游戏解说,ACG,galgame,动画,番组,新番,初音,洛天依,vocaloid"
                ),
              },
              {
                name: "description",
                content: ""
                  .concat(e, "，")
                  .concat(i, "，")
                  .concat(
                    n.desc,
                    "，bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。"
                  ),
              },
            ],
          };
        },
        computed: Wt(
          Wt(
            {},
            Object(w.c)([
              "_bili_space_mid",
              "_bili_space_mymid",
              "_bili_login_info",
              "_bili_space_info",
              "_bili_space_settings",
              "_bili_space_state",
              "isNavLoad",
              "isShowFavShare",
              "accRelation",
              "shieldingState",
              "isErrorPage",
              "errorInfo",
            ])
          ),
          {},
          {
            bgimg: function () {
              return this.isNavLoad
                ? void 0 !== this._bili_space_settings.theme.bgimg
                  ? {
                      backgroundImage:
                        "url(//i0.hdslb.com/" +
                        this._bili_space_settings.theme.bgimg.toWebP() +
                        ")",
                    }
                  : void 0
                : "";
            },
            blacklist: function () {
              var t,
                e,
                i,
                n,
                a =
                  null === (t = this.accRelation) ||
                  void 0 === t ||
                  null === (e = t.relation) ||
                  void 0 === e
                    ? void 0
                    : e.attribute,
                r =
                  null === (i = this.accRelation) ||
                  void 0 === i ||
                  null === (n = i.beRelation) ||
                  void 0 === n
                    ? void 0
                    : n.attribute;
              return a >= 128 && r < 128
                ? 1
                : a < 128 && r >= 128
                ? 2
                : a >= 128 && r >= 128
                ? 3
                : void 0;
            },
          }
        ),
        components: {
          CommonHeader: Ct,
          CommonNav: xt,
          CommonFixedNav: At,
          toTop: Jt,
          favShare: Bt,
          ErrorPage: Gt,
        },
      },
      Yt =
        (i(516),
        Object(dt.a)(
          zt,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              {
                class: [t._bili_space_state],
                style: t.bgimg,
                attrs: { id: "app" },
              },
              [
                t.isErrorPage
                  ? i("ErrorPage", { attrs: { errorInfo: t.errorInfo } })
                  : [
                      i("common-header"),
                      t.isNavLoad ? i("common-nav") : t._e(),
                      t.isNavLoad ? i("common-fixed-nav") : t._e(),
                      t.isNavLoad
                        ? i(
                            "div",
                            { staticClass: "s-space" },
                            [i("router-view")],
                            1
                          )
                        : t._e(),
                      i("to-top"),
                      t.isShowFavShare ? i("fav-share") : t._e(),
                    ],
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Kt = (i(517), i(139));
    x.default.use(Kt.a);
    var Zt = new Kt.a({
      fallback: !1,
      mode: "history",
      routes: [
        {
          path: "/:v(v)?/:mid(\\d+)",
          alias: "/index",
          name: "index",
          component: function (t) {
            return Promise.all([i.e(2), i.e(0), i.e(6)])
              .then(
                function () {
                  var e = [i(722)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/bangumi",
          name: "bangumi",
          component: function (t) {
            return Promise.all([i.e(3), i.e(21)])
              .then(
                function () {
                  var e = [i(728)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/cinema",
          name: "cinema",
          component: function (t) {
            return Promise.all([i.e(3), i.e(31)])
              .then(
                function () {
                  var e = [i(729)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/subs",
          name: "subscribe",
          component: function (t) {
            return i
              .e(26)
              .then(
                function () {
                  var e = [i(730)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/video",
          name: "video",
          component: function (t) {
            return i
              .e(13)
              .then(
                function () {
                  var e = [i(731)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/audio",
          name: "audio",
          component: function (t) {
            return i
              .e(15)
              .then(
                function () {
                  var e = [i(732)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/article",
          name: "article",
          component: function (t) {
            return i
              .e(14)
              .then(
                function () {
                  var e = [i(733)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/dynamic",
          name: "dynamic",
          component: function (t) {
            return Promise.all([i.e(2), i.e(29), i.e(0), i.e(18)])
              .then(
                function () {
                  var e = [i(734)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/favlist",
          name: "fav",
          component: function (t) {
            return Promise.all([i.e(7), i.e(12)])
              .then(
                function () {
                  var e = [i(724)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/setting",
          name: "setting",
          component: function (t) {
            return i
              .e(25)
              .then(
                function () {
                  var e = [i(735)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/playlist",
          component: function (t) {
            return i
              .e(19)
              .then(
                function () {
                  var e = [i(736)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
          children: [
            {
              path: "index",
              name: "playlistList",
              component: function (t) {
                return i
                  .e(24)
                  .then(
                    function () {
                      var e = [i(737)];
                      t.apply(null, e);
                    }.bind(this)
                  )
                  .catch(i.oe);
              },
            },
            {
              path: "edit",
              component: function (t) {
                return i
                  .e(23)
                  .then(
                    function () {
                      var e = [i(744)];
                      t.apply(null, e);
                    }.bind(this)
                  )
                  .catch(i.oe);
              },
              children: [
                {
                  path: "info",
                  name: "playlistEditInfo",
                  component: function (t) {
                    return i
                      .e(11)
                      .then(
                        function () {
                          var e = [i(738)];
                          t.apply(null, e);
                        }.bind(this)
                      )
                      .catch(i.oe);
                  },
                },
                {
                  path: "video",
                  name: "playlistEditVideo",
                  component: function (t) {
                    return i
                      .e(8)
                      .then(
                        function () {
                          var e = [i(725)];
                          t.apply(null, e);
                        }.bind(this)
                      )
                      .catch(i.oe);
                  },
                },
              ],
            },
            {
              path: "create",
              name: "playlistCreate",
              component: function (t) {
                return i
                  .e(10)
                  .then(
                    function () {
                      var e = [i(739)];
                      t.apply(null, e);
                    }.bind(this)
                  )
                  .catch(i.oe);
              },
            },
          ],
        },
        {
          path: "/:v(v)?/:mid(\\d+)/channel",
          component: function (t) {
            return i
              .e(17)
              .then(
                function () {
                  var e = [i(740)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
          children: [
            {
              path: "index",
              name: "channelList",
              component: function (t) {
                return i
                  .e(22)
                  .then(
                    function () {
                      var e = [i(741)];
                      t.apply(null, e);
                    }.bind(this)
                  )
                  .catch(i.oe);
              },
            },
            {
              path: "detail",
              name: "channelDetail",
              component: function (t) {
                return i
                  .e(16)
                  .then(
                    function () {
                      var e = [i(726)];
                      t.apply(null, e);
                    }.bind(this)
                  )
                  .catch(i.oe);
              },
            },
          ],
        },
        {
          path: "/:v(v)?/:mid(\\d+)/fans",
          component: function (t) {
            return i
              .e(30)
              .then(
                function () {
                  var e = [i(742)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
          children: [
            {
              path: "fans",
              name: "fans",
              component: function (t) {
                return i
                  .e(1)
                  .then(
                    function () {
                      var e = [i(727)];
                      t.apply(null, e);
                    }.bind(this)
                  )
                  .catch(i.oe);
              },
            },
            {
              path: "follow",
              name: "follow",
              component: function (t) {
                return i
                  .e(1)
                  .then(
                    function () {
                      var e = [i(727)];
                      t.apply(null, e);
                    }.bind(this)
                  )
                  .catch(i.oe);
              },
            },
          ],
        },
        {
          path: "/:v(v)?/:mid(\\d+)/album",
          name: "album",
          component: function (t) {
            return i
              .e(9)
              .then(
                function () {
                  var e = [i(723)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
        {
          path: "/:v(v)?/:mid(\\d+)/pugv",
          name: "pugv",
          component: function (t) {
            return i
              .e(20)
              .then(
                function () {
                  var e = [i(743)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(i.oe);
          },
        },
      ],
    });
    Zt.afterEach(function (t, e) {
      x.default.prototype.$isServer ||
        (null !== e.name && window.reportObserver.sendPV(),
        e.name !== t.name && window.scrollTo(0, 0));
    });
    var te = Zt,
      ee = i(211),
      ie = i.n(ee),
      ne = i(142);
    function ae(t) {
      if (t <= 0) return 0;
      if ("--" === t) return "--";
      var e = Number(t);
      return e > 99999999
        ? Math.round(e / 1e7) / 10 + "亿"
        : e > 9999
        ? Math.round(e / 1e3) / 10 + "万"
        : e;
    }
    function re(t) {
      return t && "undefined" !== t
        ? "number" == typeof t
          ? t
          : t
              .replace(/&amp;|&#38;/g, "&")
              .replace(/&lt;|&#60;/g, "<")
              .replace(/&gt;|&#62;/g, ">")
              .replace(/&quot;|&#34;/g, '"')
              .replace(/&nbsp;|&#160;/g, " ")
              .replace(/&hellip;/g, "…")
              .replace(/&mdash;/g, "—")
              .replace(/&#039;/g, "'")
              .replace(/&#39;/g, "'")
              .replace(/&ldquo;/g, "“")
              .replace(/&rdquo;/g, "”")
              .replace(/&lsquo;/g, "‘")
              .replace(/&rsquo;/g, "’")
        : "";
    }
    function oe(t) {
      return 1 === String(t).length ? "0" + t : t;
    }
    Array.prototype.toObject ||
      (Array.prototype.toObject = function (t, e) {
        var i = {};
        return (
          this.forEach(function (n) {
            var a = n[t];
            i[a] = void 0 === e ? n : n[e];
          }),
          i
        );
      }),
      Date.now ||
        (Date.now = function () {
          return new Date().getTime();
        }),
      String.prototype.startWith ||
        (String.prototype.startWith = function (t) {
          return 0 === this.indexOf(t);
        }),
      Array.prototype.remove ||
        (Array.prototype.remove = function (t) {
          for (var e = this.length, i = 0; i < e; i++)
            if (this[i] === t) return this.splice(i, 1);
        }),
      (Number.prototype.format_date = function () {
        var t = new Date(1e3 * this);
        return (
          t.getFullYear() +
          "年" +
          (t.getMonth() + 1) +
          "月" +
          t.getDate() +
          "日"
        );
      }),
      (Number.prototype.toWan = function () {
        return ae(this);
      }),
      (String.prototype.max = function (t) {
        if (!t) return this;
        var e = String(this);
        return e.length > t ? e.slice(0, t) + "..." : this;
      }),
      (String.prototype.contains = function (t) {
        return this.indexOf(t) > -1;
      }),
      (String.prototype.toWebP = function (t) {
        if (void 0 === this) return "";
        var e = String(this).replace(/https?:/, ""),
          i = e;
        return (
          e.startWith("/") || (i = "/" + e),
          window.supportWebP && i.contains("/bfs/") && !i.contains(".gif")
            ? e + "@" + (t || "100Q") + ".webp"
            : this
        );
      }),
      (String.prototype.separate = function () {
        return this.replace(/\d{1,3}(?=(\d{3})+$)/g, function (t) {
          return t + ",";
        });
      }),
      String.prototype.decodeHTML ||
        (String.prototype.decodeHTML = function () {
          return re(this);
        }),
      (String.prototype.coversize = function (t) {
        if (void 0 === this) return "";
        var e = this.replace(/https?:/, ""),
          i = e;
        i.startWith("/") || (i = "/" + i);
        if (
          i.indexOf("noface") > -1 ||
          i.indexOf("transparent") > -1 ||
          i.indexOf("//activity.hdslb.com/") > -1 ||
          i.indexOf(".webp") > -1 ||
          /\.gif$/.test(i)
        )
          return e;
        t = t || "380x240";
        var n = ".jpg";
        e.indexOf(".jpg") > -1
          ? (n = ".jpg")
          : e.indexOf(".png") > -1 && (n = ".png");
        var a = !1;
        if (i.indexOf("/group1/") > -1 || i.indexOf("/bfs/") > -1) {
          (a = /_\d+x\d+\.(jpg|jpeg|png)/.exec(e)) && (e = e.replace(a[0], ""));
          var r = t.split("x")[0],
            o = t.split("x")[1];
          return (
            window.supportWebP && i.indexOf("/bfs/") > -1 && ".gif" !== n
              ? (e += "@" + r + "w_" + o + "h_100Q_1c.webp")
              : (e += "@" + r + "w_" + o + "h" + n),
            e
          );
        }
        return (
          (t = t.replace("x", "_")),
          (a = /\.com\/(\d+_\d+)\//.exec(e))
            ? e.replace(a[1], t)
            : e.replace(".com", ".com/" + t)
        );
      }),
      x.default.filter("format_date", function (t) {
        var e = new Date(1e3 * t);
        return (
          e.getFullYear() +
          "年" +
          (e.getMonth() + 1) +
          "月" +
          e.getDate() +
          "日"
        );
      }),
      x.default.filter("toWebP", function (t, e) {
        if (void 0 === t) return "";
        t = t.replace(/https?:/, "");
        var i = String(t),
          n = i;
        return (
          i.startWith("/") || (n = "/" + i),
          window.supportWebP && n.contains("/bfs/") && !n.contains(".gif")
            ? i + "@" + (e || "100Q") + ".webp"
            : t
        );
      }),
      x.default.filter("separate", function (t) {
        return String(t).replace(/\d{1,3}(?=(\d{3})+$)/g, function (t) {
          return t + ",";
        });
      }),
      x.default.filter("toWan", ae),
      x.default.filter("tohttps", function (t) {
        return void 0 === t ? "" : t.replace(/https?:/, "");
      }),
      x.default.filter("coversize", function (t, e) {
        return void 0 === t ? "" : t.coversize(e);
      }),
      x.default.filter("viewCountShorten", function (t) {
        return "--" === t || -1 === t
          ? "--"
          : ((t = Number(t)), isNaN(t) ? 0 : ae(t));
      }),
      x.default.filter("format_pubdate", function (t, e) {
        if (!t) return "0000-00-00";
        var i,
          n = /(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2})(?::(\d{2}))?/.exec(t);
        if (n) i = new Date(n[1], parseInt(n[2]) - 1, n[3], n[4], n[5], n[6]);
        else if ("Invalid Date" === (i = new Date(1e3 * t)).toString())
          return String(t);
        return (e = "string" == typeof e ? e + "于" : "") + ie()(i);
      }),
      x.default.filter("format_expiretime", function (t) {
        var e = new Date(1e3 * t),
          i = Date.now(),
          n = Math.floor((e - i) / 864e5);
        return n > 1 ? n + "天" : "不足一天";
      }),
      x.default.filter("highlightSearchKeyword", function (t) {
        return (
          void 0 === window._search_keyword ||
            ((t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
            "" !== window._search_keyword &&
              (t = t.replace(
                new RegExp("(" + window._search_keyword + ")", "gi"),
                '<span class="search-keyword-highlight">$1</span>'
              ))),
          t
        );
      }),
      x.default.filter("videoStatus", function (t) {
        return t >= 0 || -6 === t ? "" : "disabled";
      }),
      x.default.filter("videoDuration", function (t) {
        var e = oe(parseInt(t / 3600)),
          i = oe(parseInt((t % 3600) / 60)),
          n = oe(parseInt((t % 3600) % 60));
        return isNaN(i) || isNaN(n)
          ? "00:00"
          : t < 3600
          ? i + ":" + n
          : e + ":" + i + ":" + n;
      }),
      x.default.filter("decodeHTML", function (t) {
        return re(t);
      }),
      x.default.filter("decodeTitle", function (t) {
        return (function (t) {
          return t && "undefined" !== t
            ? "number" == typeof t
              ? t
              : t.replace(/</g, "&lt;")
            : "";
        })(t);
      }),
      x.default.filter("trimSpaceReturn", function (t) {
        return (function (t) {
          return t && "undefined" !== t
            ? "number" == typeof t
              ? t
              : t.replace(/\s/g, "")
            : "";
        })(t);
      }),
      x.default.filter("videoValidLink", function (t, e, i) {
        return -1 === ne.a.indexOf(i)
          ? "javascript:;"
          : "//www.bilibili.com/video/".concat(e);
      }),
      x.default.filter("favVideoValidLink", function (t, e, i, n) {
        var a =
          n && 12 === n
            ? "//www.bilibili.com/audio/au" + t
            : "//www.bilibili.com/video/".concat(e);
        return 1 === i ? "javascript:;" : a;
      });
    var se = i(134),
      ce = i(239),
      le = i.n(ce),
      ue = i(212),
      de = i.n(ue),
      fe = new x.default(),
      pe = i(71)("jsonp"),
      me = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function (i, n) {
          var a = [],
            r = e.params || {};
          r.jsonp = "jsonp";
          for (var o = 0, s = Object.keys(r); o < s.length; o++) {
            var c = s[o];
            a.push("".concat(c, "=").concat(r[c]));
          }
          e.param = a.join("&") + "&callback";
          var l,
            u,
            d = e.prefix || "__jp",
            f = e.name || d + he++,
            p = e.param || "callback",
            m = null != e.timeout ? e.timeout : 6e4,
            h = encodeURIComponent,
            v = document.getElementsByTagName("script")[0] || document.head;
          function _() {
            l.parentNode && l.parentNode.removeChild(l),
              (window[f] = ve),
              u && clearTimeout(u);
          }
          m &&
            (u = setTimeout(function () {
              _(), n("400");
            }, m)),
            (window[f] = function (t) {
              pe("jsonp got", t), _(), i(t);
            }),
            (t = (t += (~t.indexOf("?") ? "&" : "?") + p + "=" + h(f)).replace(
              "?&",
              "?"
            )),
            pe('jsonp req "%s"', t),
            ((l = document.createElement("script")).src = t),
            (l.onerror = function () {
              n("400");
            }),
            v.parentNode.insertBefore(l, v);
        });
      },
      he = 0;
    function ve() {}
    var _e,
      be,
      ge,
      ye,
      we,
      Ce,
      Te,
      Se = i(214),
      je = function (t) {
        return t.top;
      },
      Pe = function (t) {
        return t.masterpiece;
      },
      Le = function (t) {
        return t.isLoad.top;
      },
      Me = function (t) {
        return t.isLoad.masterpiece;
      },
      Ue = {
        state: {
          top: {},
          masterpiece: [],
          isLoad: { top: !1, masterpiece: !1 },
          isSet: { top: !1, masterpiece: !1 },
        },
        getters: r,
        actions: Se,
        mutations:
          ((_e = {}),
          b()(_e, U.zb, function (t, e) {
            (t.top = e), (t.isLoad.top = !0);
          }),
          b()(_e, U.Y, function (t, e) {
            (t.masterpiece = e), (t.isLoad.masterpiece = !0);
          }),
          b()(_e, U.yb, function (t) {
            (t.top = {}), (t.isLoad.top = !0);
          }),
          b()(_e, U.X, function (t) {
            t.isLoad.masterpiece = !0;
          }),
          b()(_e, U.f, function (t, e) {
            var i = t.masterpiece,
              n = [];
            i.forEach(function (t) {
              t.aid !== e && n.push(t);
            }),
              (t.masterpiece = n);
          }),
          b()(_e, U.g, function (t) {
            t.top = {};
          }),
          _e),
      },
      xe = function (t) {
        return +t._bili_space_mid;
      },
      ke = function (t) {
        return +t._bili_login_info.mid;
      },
      Ee = function (t) {
        return t._bili_space_info;
      },
      Ie = function (t) {
        return t._bili_space_notice;
      },
      Oe = function (t) {
        return t._bili_space_settings;
      },
      $e = function (t) {
        return t._bili_login_info;
      },
      Ae = function (t) {
        return t._bili_space_state;
      },
      Ne = function (t) {
        return t._bili_space_is_login;
      },
      De = function (t) {
        return t._bili_space_watch_history;
      },
      Je = function (t) {
        return t._bili_space_nav;
      },
      Ve = function (t) {
        return t._bili_space_vip;
      },
      Re = function (t) {
        return t._bili_space_fanMedal;
      },
      Fe = function (t) {
        return t.playNumber;
      },
      Be = function (t) {
        return t.nav_load;
      },
      Qe = function (t) {
        return t.watchlaterAids;
      },
      Ge = function (t) {
        return (
          t._bili_init_state.space_info_success &&
          t._bili_init_state.space_settings_success
        );
      },
      He = function (t) {
        return t._bili_space_global_message;
      },
      We = function (t) {
        return 0 !== t._bili_space_vip.type;
      },
      Xe = function (t) {
        var e = t._bili_space_vip;
        return 0 !== e.type && 2 === e.status;
      },
      qe = function (t) {
        var e = t._bili_space_vip;
        return 0 !== e.type && 1 === e.status;
      },
      ze = function (t) {
        var e = t._bili_space_vip;
        return 2 === e.type && 1 === e.status;
      },
      Ye = function (t) {
        return t._bili_space_vip.label.label_theme.includes("fool");
      },
      Ke = function (t) {
        var e = t._bili_login_info.vip,
          i = e.type,
          n = e.status,
          a = e.expire;
        return 1 === n && 0 !== i && a < 8;
      },
      Ze = function (t) {
        return t.isErrorPage;
      },
      ti = function (t) {
        return t.errorInfo;
      },
      ei = {
        _bili_space_info: {
          level_info: {},
          official: {},
          theme: {},
          toutu: {},
          silence: 0,
          fans_badge: !1,
          uname: "哔哩哔哩",
          sign: "非常努力地加载页面 (。・`ω´・)",
        },
        _bili_space_settings: {
          privacy: {
            bangumi: 0,
            article: 0,
            tags: 0,
            fav_video: 0,
            coins_video: 0,
            groups: 0,
            played_game: 0,
            channel: 0,
            submited_video: 0,
            user_info: 0,
          },
          index_order_01: [{ id: 0, name: "" }],
          index_order_02: [{ id: 0, name: "" }],
          theme: "default",
          theme_preview_img_path: "",
          toutu: {
            sid: 0,
            s_img: "",
            l_img: "",
            thumbnail_img: "",
            android_img: "",
            iphone_img: "",
            ipad_img: "",
            platform: 1,
          },
        },
        _bili_login_info: {
          birthday: "1900-00-00",
          coins: 0,
          face: "",
          identification: 0,
          jointime: "1465189421",
          level: 0,
          maxstow: 0,
          mid: 0,
          mobile_verified: 0,
          official_verify: { type: 0, desc: "1" },
          rank: 0,
          s_face: "",
          scores: 0,
          security_level: 1,
          sex: 1,
          sign: "非常努力地加载页面 (。・`ω´・)",
          spacesta: 2,
          telephone: "",
          name: "哔哩哔哩",
          vip: {},
        },
      },
      ii = {
        actions: n,
        getters: o,
        state: {
          _bili_guest_mode: !1,
          _bili_space_state: "loading",
          _bili_space_is_login: !1,
          _bili_space_info: ei._bili_space_info,
          _bili_space_vip: {},
          _bili_space_notice: { id: 0, content: "", url: "" },
          _bili_space_mid: 0,
          _bili_space_settings: ei._bili_space_settings,
          _bili_login_info: ei._bili_login_info,
          _bili_init_state: {
            space_info_success: !1,
            space_settings_success: !1,
          },
          _bili_space_watch_history: [],
          _bili_space_nav: {
            bangumi: 0,
            channel: { master: 0, guest: 0 },
            favourite: { master: 0, guest: 0 },
            tag: 0,
            video: 0,
            article: 0,
            playlist: 0,
          },
          _bili_space_fanMedal: {
            show: !1,
            wear: !1,
            medal_color_border: 0,
            medal_color_end: 0,
            medal_color_start: 0,
            medal_color: 0,
            medal_name: 0,
            level: 0,
            is_lighted: 0,
            target_id: 0,
            guard_level: 0,
          },
          nav_load: !1,
          playNumber: { article: { view: 0 }, archive: { view: 0 }, likes: 0 },
          watchlaterAids: [],
          isErrorPage: !1,
          errorInfo: {},
        },
        mutations:
          ((be = {
            setInfoError: function (t, e) {
              t.isErrorPage || ((t.isErrorPage = !0), (t.errorInfo = e));
            },
          }),
          b()(be, U.U, function (t, e) {
            var i = e.data,
              n = e.mid;
            if (
              (1 === i.silence && (i.sign = ""),
              i.fans_medal &&
                ((t._bili_space_fanMedal.show = i.fans_medal.show),
                (t._bili_space_fanMedal.wear = i.fans_medal.wear),
                i.fans_medal.medal))
            ) {
              var a = i.fans_medal.medal,
                r = a.is_lighted,
                o = a.level,
                s = a.medal_color_border,
                c = a.medal_color_end,
                l = a.medal_color_start,
                u = a.medal_color,
                d = a.medal_name,
                f = a.target_id,
                p = a.guard_level;
              (t._bili_space_fanMedal.medal_color_border = s),
                (t._bili_space_fanMedal.medal_color_start = l),
                (t._bili_space_fanMedal.medal_name = d),
                (t._bili_space_fanMedal.level = o),
                (t._bili_space_fanMedal.is_lighted = r),
                (t._bili_space_fanMedal.medal_color_end = c),
                (t._bili_space_fanMedal.medal_color = u),
                (t._bili_space_fanMedal.target_id = f),
                (t._bili_space_fanMedal.guard_level = p);
            }
            (t._bili_space_mid = n),
              (t._bili_space_info = i),
              (t._bili_space_vip = i.vip),
              (t._bili_space_notice = i.sys_notice),
              (t._bili_init_state.space_info_success = !0),
              (t.nav_load = !0);
          }),
          b()(be, U.gc, function (t, e) {
            t._bili_space_fanMedal.show = e;
          }),
          b()(be, U.sb, function (t, e) {
            var i = [],
              n = [];
            e.index_order.forEach(function (t) {
              +t.id > 20 ? n.push(t) : 6 != +t.id && i.push(t);
            }),
              (t._bili_space_settings = e),
              (t._bili_space_settings.index_order_01 = i),
              (t._bili_space_settings.index_order_02 = n),
              (t._bili_init_state.space_settings_success = !0);
          }),
          b()(be, U.db, function (t, e) {
            (e.vip.expire = Math.floor(
              (e.vip.due_date - Date.now()) / 1e3 / 3600 / 24
            )),
              (t._bili_login_info = e),
              (t._bili_space_is_login = !0);
          }),
          b()(be, U.cb, function (t) {
            (t._bili_login_info = ei._bili_login_info),
              (t._bili_space_is_login = !1),
              (t._bili_space_state = "visitor");
          }),
          b()(be, U.ec, function (t, e) {
            t._bili_space_state = e;
          }),
          b()(be, U.z, function (t, e) {
            (t._bili_space_nav = e), (t.nav_load = !0);
          }),
          b()(be, U.y, function (t) {
            t.nav_load = !0;
          }),
          b()(be, U.Hb, function (t, e) {
            sessionStorage.setItem(
              "".concat(t._bili_login_info.mid, "_watch_history"),
              JSON.stringify(e)
            ),
              (t._bili_space_watch_history = e);
          }),
          b()(be, U.kc, function (t, e) {
            t._bili_space_watch_history.push(e),
              sessionStorage.setItem(
                "".concat(t._bili_login_info.mid, "_watch_history"),
                JSON.stringify(t._bili_space_watch_history)
              );
          }),
          b()(be, U.dc, function (t, e) {
            t._bili_space_state = e;
          }),
          b()(be, U.a, function (t, e) {
            e === +t._bili_space_info.mid && (t._bili_space_state = "fans");
          }),
          b()(be, U.Pb, function (t, e) {
            e === +t._bili_space_info.mid && (t._bili_space_state = "visitor");
          }),
          b()(be, U.Mb, function (t) {
            t._bili_space_state = "visitor";
          }),
          b()(be, U.Wb, function (t, e) {
            t._bili_space_info.sign = e;
          }),
          b()(be, U.Ub, function (t, e) {
            var i = t._bili_space_settings.index_order.toObject("id"),
              n = [],
              a = [],
              r = e.split(",").map(function (t) {
                return i[t];
              });
            r.forEach(function (t) {
              +t.id > 20 ? a.push(t) : 6 != +t.id && n.push(t);
            }),
              (t._bili_space_settings.order = r),
              (t._bili_space_settings.index_order_01 = n),
              (t._bili_space_settings.index_order_02 = a);
          }),
          b()(be, U.Vb, function (t, e) {
            var i = e.field;
            t._bili_space_settings.privacy[i] = e.value;
          }),
          b()(be, U.Ab, function (t, e) {
            t.playNumber = e;
          }),
          b()(be, U.ic, function (t, e) {
            t.watchlaterAids = e;
          }),
          be),
      },
      ni = i(215),
      ai = function (t) {
        return t.relations;
      },
      ri = function (t) {
        return t.attribute;
      },
      oi = function (t) {
        return t.relationList;
      },
      si = function (t) {
        return t.knightsList;
      },
      ci = function (t) {
        return t.knightsCount;
      },
      li = function (t) {
        return t.isRelationListLoad;
      },
      ui = function (t) {
        return t.tags;
      },
      di = function (t) {
        return t.userTag;
      },
      fi = function (t) {
        return t.userTagList;
      },
      pi = function (t) {
        return t.defaultGroupCount;
      },
      mi = function (t) {
        return t.accRelation;
      },
      hi = function (t) {
        var e, i, n, a;
        return (
          (null === (e = t.accRelation) ||
          void 0 === e ||
          null === (i = e.beRelation) ||
          void 0 === i
            ? void 0
            : i.attribute) >= 128 ||
          (null === (n = t.accRelation) ||
          void 0 === n ||
          null === (a = n.relation) ||
          void 0 === a
            ? void 0
            : a.attribute) >= 128
        );
      },
      vi = {
        actions: ni,
        getters: s,
        state: {
          relations: { following: 0, whisper: 0, black: 0, follower: 0 },
          knightsList: [],
          knightsCount: 0,
          relationList: [],
          defaultGroupCount: 0,
          attribute: 0,
          isFansListLoad: !1,
          userTag: [],
          userTagList: [],
          isLoad: !1,
          isUserTaglistLoad: !1,
          isKnightLoad: !1,
          isRelationListLoad: !1,
          accRelation: { relation: {}, beRelation: {} },
          shieldingState: !1,
        },
        mutations:
          ((ge = {}),
          b()(ge, U.D, function (t, e) {
            t.relations = e;
          }),
          b()(ge, U.rb, function (t, e) {
            (t.relationList = e), (t.isRelationListLoad = !0);
          }),
          b()(ge, U.qb, function (t) {
            t.isRelationListLoad = !1;
          }),
          b()(ge, U.pb, function (t) {
            (t.relationList = []), (t.isRelationListLoad = !0);
          }),
          b()(ge, U.hc, function (t, e) {
            var i = e.mid,
              n = e.attribute,
              a = t.relationList.findIndex(function (t) {
                return t.mid === i;
              });
            t.relationList[a].attribute = n;
          }),
          b()(ge, U.Ob, function (t, e) {
            t.attribute = e;
          }),
          b()(ge, U.Gb, function (t, e) {
            (t.relationList = e), (t.isLoad = !0);
          }),
          b()(ge, U.Fb, function (t) {
            t.isLoad = !1;
          }),
          b()(ge, U.Eb, function (t) {
            t.isLoad = !0;
          }),
          b()(ge, U.Cb, function (t) {
            t.isUserTaglistLoad = !1;
          }),
          b()(ge, U.Db, function (t, e) {
            (t.userTagList = e), (t.isUserTaglistLoad = !0);
            var i = t.userTagList.find(function (t) {
              return 0 === t.tagid;
            });
            i && (t.defaultGroupCount = i.count);
          }),
          b()(ge, U.Bb, function (t) {
            t.isUserTaglistLoad = !0;
          }),
          b()(ge, U.V, function (t) {
            t.isRelationListLoad = !1;
          }),
          b()(ge, U.W, function (t, e) {
            var i = e.count;
            (t.knightsCount = i), (t.isRelationListLoad = !0);
          }),
          b()(ge, U.Ib, function (t, e) {
            var i = e.relation,
              n = e.be_relation;
            (t.accRelation.relation = i), (t.accRelation.beRelation = n);
          }),
          ge),
      },
      _i = {
        actions: {
          fetchArticle: function (t, e) {
            t.commit;
            return x.default.http
              .jsonp("//api.bilibili.com/x/space/article", { params: e })
              .then(
                function (t) {
                  var e = t.code,
                    i = t.message,
                    n = t.data;
                  return 0 === e
                    ? Promise.resolve(n)
                    : (x.default.$warn("获取用户专栏列表失败，".concat(i)),
                      Promise.reject());
                },
                function () {
                  return (
                    x.default.$warn("获取用户专栏列表失败，网络错误"),
                    Promise.reject()
                  );
                }
              );
          },
          fetchArticleLists: function (t, e) {
            t.commit;
            return x.default.http
              .jsonp("//api.bilibili.com/x/article/up/lists", { params: e })
              .then(
                function (t) {
                  var e = t.code,
                    i = t.message,
                    n = t.data;
                  return 0 === e
                    ? Promise.resolve(n)
                    : (x.default.$warn("获取用户专栏文集失败, ".concat(i)),
                      Promise.reject());
                },
                function () {
                  return (
                    x.default.$warn("获取用户专栏文集失败，网络错误"),
                    Promise.reject()
                  );
                }
              );
          },
        },
      },
      bi = {
        actions: {
          fetchBangumi: function (t, e) {
            t.commit;
            return x.default.http
              .get("//api.bilibili.com/x/space/bangumi/follow/list", {
                params: { vmid: e.mid, type: 1 },
                withCredentials: !0,
              })
              .then(
                function (t) {
                  var e = t.data,
                    i = e.code,
                    n = e.data;
                  return 0 === i
                    ? Promise.resolve(n)
                    : (console.log("获取用户订阅番剧失败，".concat(n)),
                      Promise.reject());
                },
                function () {
                  x.default.$warn("获取用户订阅番剧失败，网络错误"),
                    Promise.reject();
                }
              );
          },
        },
      },
      gi = "//api.bilibili.com/x/playlist",
      yi = function (t, e) {
        var i = t.commit;
        i(U.jb),
          x.default.http.jsonp(gi, { params: e }).then(
            function (t) {
              var e = t.code,
                n = t.data,
                a = t.message;
              0 == +e
                ? (n.list.forEach(function (t) {
                    (t.name = t.name.decodeHTML()),
                      (t.description = t.description.decodeHTML());
                  }),
                  i(U.kb, n))
                : (i(U.ib), x.default.$warn("请求播单列表失败，".concat(a)));
            },
            function () {
              i(U.ib), x.default.$warn("请求播单列表失败，网络错误");
            }
          );
      },
      wi = function (t, e) {
        var i = t.commit;
        return (
          i(U.gb),
          x.default.http.jsonp("".concat(gi, "/info"), { params: e }).then(
            function (t) {
              var e = t.code,
                n = t.data,
                a = t.message;
              return 0 == +e
                ? ((n.name = n.name.decodeHTML()),
                  (n.description = n.description.decodeHTML()),
                  i(U.hb, n),
                  Promise.resolve(n))
                : (i(U.fb),
                  x.default.$warn("请求播单信息失败，".concat(a)),
                  Promise.reject());
            },
            function () {
              return (
                i(U.fb),
                x.default.$warn("请求播单信息失败，网络错误"),
                Promise.reject()
              );
            }
          )
        );
      },
      Ci = function (t, e) {
        t.commit;
        return x.default.http
          .jsonp("".concat(gi, "/video"), { params: e })
          .then(
            function (t) {
              var e = t.code,
                i = t.data,
                n = t.message;
              return 0 == +e
                ? ((i.list = i.list.map(function (t) {
                    return (
                      (t.desc = t.desc.decodeHTML()),
                      (t.title = t.title.decodeHTML()),
                      (t.play_desc = t.play_desc.decodeHTML()),
                      t
                    );
                  })),
                  Promise.resolve(i.list))
                : (x.default.$warn("请求播单视频列表失败，".concat(n)),
                  Promise.resolve([]));
            },
            function () {
              return (
                x.default.$warn("请求播单视频列表失败，网络错误"),
                Promise.resolve([])
              );
            }
          );
      },
      Ti = function (t, e) {
        t.commit;
        var i = e.pid,
          n = e.aid,
          a = e.sort;
        return x.default.http
          .post("".concat(gi, "/video/sort"), { pid: i, aid: n, sort: a })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 == +i
                ? Promise.resolve()
                : (x.default.$message(
                    "更改视频排序失败，请刷新后重试（".concat(n, "）"),
                    "更改视频排序失败",
                    {
                      cancelButton: { show: !1 },
                      confirmButton: { text: "知道啦" },
                    }
                  ),
                  Promise.reject());
            },
            function () {
              return (
                x.default.$message(
                  "设置播单视频排序失败 ∑(っ °Д °;)っ，网络错误",
                  "更改视频排序失败",
                  {
                    cancelButton: { show: !1 },
                    confirmButton: { text: "知道啦" },
                  }
                ),
                Promise.reject()
              );
            }
          );
      },
      Si = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(gi, "/del"), { pid: e }).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 == +i
              ? Promise.resolve()
              : (x.default.$warn("删除播单失败，".concat(n)), Promise.reject());
          },
          function () {
            return (
              x.default.$warn("删除播单失败 ∑(っ °Д °;)っ，网络错误"),
              Promise.reject()
            );
          }
        );
      },
      ji = function (t, e) {
        t.commit;
        var i = e.pid,
          n = e.aids;
        return x.default.http
          .post("".concat(gi, "/video/del"), { pid: i, aids: n })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 == +i
                ? Promise.resolve()
                : (x.default.$warn("删除播单视频失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return (
                x.default.$warn("删除播单视频失败 ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      Pi = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(gi, "/update"), e).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 == +i
              ? Promise.resolve()
              : (x.default.$warn("更新播单失败，".concat(n)), Promise.reject());
          },
          function () {
            return (
              x.default.$warn("更新播单失败 ∑(っ °Д °;)っ，网络错误"),
              Promise.reject()
            );
          }
        );
      },
      Li = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(gi, "/add"), e).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message,
              a = e.data;
            return 0 == +i
              ? Promise.resolve(a.pid)
              : (x.default.$warn("新建播单失败，".concat(n)), Promise.reject());
          },
          function () {
            return (
              x.default.$warn("新建播单失败 ∑(っ °Д °;)っ，网络错误"),
              Promise.reject()
            );
          }
        );
      },
      Mi = function (t, e) {
        t.commit;
        var i = e.pid,
          n = e.aid,
          a = e.desc;
        return x.default.http
          .post("".concat(gi, "/video/desc/edit"), { pid: i, aid: n, desc: a })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.message;
              return 0 == +i
                ? Promise.resolve()
                : (x.default.$warn("更新视频描述失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return (
                x.default.$warn("更新视频描述失败 ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      Ui = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(gi, "/video/add"), e).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.data,
              a = e.message;
            return 0 == +i
              ? Promise.resolve(n)
              : (x.default.$warn("添加视频失败，".concat(a)),
                Promise.reject(a));
          },
          function () {
            return (
              x.default.$warn("添加视频失败 ∑(っ °Д °;)っ，网络错误"),
              Promise.reject()
            );
          }
        );
      },
      xi = function (t, e) {
        t.commit;
        return x.default.http
          .jsonp("".concat(gi, "/video/search"), { params: e })
          .then(
            function (t) {
              var e = t.code,
                i = t.data,
                n = t.message;
              return 0 == +e
                ? Promise.resolve(i)
                : (x.default.$warn("搜索视频失败，".concat(n)),
                  Promise.reject(n));
            },
            function () {
              return (
                x.default.$warn("搜索视频失败 ∑(っ °Д °;)っ，网络错误"),
                Promise.reject()
              );
            }
          );
      },
      ki = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(gi, "/video/check"), e).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.data,
              a = e.message;
            return 0 == +i
              ? Promise.resolve(n)
              : (x.default.$warn("校验视频失败，".concat(a)),
                Promise.reject(a));
          },
          function () {
            return (
              x.default.$warn("校验视频失败 ∑(っ °Д °;)っ，网络错误"),
              Promise.reject()
            );
          }
        );
      },
      Ei = function (t, e) {
        t.commit;
        return x.default.http
          .post("//member.bilibili.com/x/vu/web/cover/up", {
            jsonp: "jsonp",
            cover: e,
          })
          .then(
            function (t) {
              var e = t.data,
                i = e.code,
                n = e.data,
                a = e.msg;
              return 0 == +i
                ? Promise.resolve(n)
                : Promise.reject(a || "上传失败");
            },
            function () {
              return Promise.reject("上传失败，网络错误");
            }
          );
      },
      Ii = function (t, e) {
        var i = t.commit,
          n = e.vmid;
        x.default.http
          .jsonp("".concat(gi, "/whitelist"), { params: { vmid: n } })
          .then(
            function (t) {
              var e = t.code,
                n = t.data,
                a = t.message;
              0 === e
                ? n.power
                  ? i(U.eb, { auth: !0 })
                  : i(U.eb, { auth: !1 })
                : (console.warn("播单白名单获取失败，" + a),
                  i(U.eb, { auth: !1 }));
            },
            function () {
              console.warn("播单白名单获取失败，网络错误"),
                i(U.eb, { auth: !1 });
            }
          );
      },
      Oi = function (t, e) {
        (0, t.commit)(U.eb, { auth: e });
      },
      $i = function (t) {
        return t.playList;
      },
      Ai = function (t) {
        return t.isPlaylistLoad;
      },
      Ni = function (t) {
        return t.playlistInfo;
      },
      Di = function (t) {
        return t.isPlaylistInfoLoad;
      },
      Ji = function (t) {
        return t.isPlaylistAuthed;
      },
      Vi = {
        state: {
          playList: { page: { num: 0, size: 0, total: 0 }, list: [] },
          playlistInfo: {
            name: "",
            cover: "",
            description: "",
            owner: { name: "" },
            stat: { view: 0 },
          },
          isPlaylistLoad: !1,
          isPlaylistInfoLoad: !1,
          isPlaylistAuthed: !1,
        },
        getters: l,
        actions: c,
        mutations:
          ((ye = {}),
          b()(ye, U.kb, function (t, e) {
            null === e.list
              ? (t.playList = { page: e.page, list: [] })
              : (t.playList = e),
              (t.isPlaylistLoad = !0);
          }),
          b()(ye, U.jb, function (t) {
            t.isPlaylistLoad = !1;
          }),
          b()(ye, U.ib, function (t) {
            t.isPlaylistLoad = !0;
          }),
          b()(ye, U.hb, function (t, e) {
            (t.playlistInfo = e), (t.isPlaylistInfoLoad = !0);
          }),
          b()(ye, U.gb, function (t) {
            t.isPlaylistInfoLoad = !1;
          }),
          b()(ye, U.fb, function (t) {
            t.isPlaylistInfoLoad = !0;
          }),
          b()(ye, U.eb, function (t) {
            t.isPlaylistAuthed = !1;
          }),
          ye),
      },
      Ri = "//api.bilibili.com/x/space/channel/",
      Fi = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = e.guest,
          r = void 0 !== a && a;
        if (n)
          return x.default.http
            .jsonp("".concat(Ri, "index"), { params: { mid: n, guest: r } })
            .then(
              function (t) {
                var e = t.code,
                  a = t.data,
                  o = t.message;
                return 0 === e
                  ? (console.log(n, r, a), i(U.M, a), Promise.resolve())
                  : (console.log("获取频道列表失败，".concat(o)),
                    Promise.reject());
              },
              function () {
                return (
                  x.default.$warn("获取频道列表失败，网络错误"),
                  Promise.reject()
                );
              }
            );
      },
      Bi = function (t, e) {
        var i = t.commit,
          n = e.mid,
          a = e.guest,
          r = void 0 !== a && a;
        return x.default.http
          .jsonp("".concat(Ri, "list"), { params: { mid: n, guest: r } })
          .then(function (t) {
            var e = t.code,
              n = t.data;
            if (0 === e) return i(U.N, n), Promise.resolve();
          });
      },
      Qi = function (t, e) {
        var i = t.commit;
        return x.default.http
          .jsonp("".concat(Ri, "video"), { params: e })
          .then(function (t) {
            var e = t.code,
              n = t.data;
            if (0 === e)
              return (
                console.log(Object.assign({}, n.list, n.episodic_button)),
                i(
                  U.L,
                  Object.assign({}, n.list, {
                    episodic_button: n.episodic_button,
                  })
                ),
                Promise.resolve()
              );
          });
      },
      Gi = function (t, e) {
        var i = t.commit,
          n = e.name,
          a = e.intro,
          r = void 0 === a ? "" : a;
        return x.default.http
          .post("".concat(Ri, "add"), { name: n, intro: r })
          .then(
            function (t) {
              var e = t.data,
                n = e.code,
                a = e.message,
                r = e.data;
              return 0 === n
                ? (B({ commit: i }, { mid: _bili_space_mid }),
                  Promise.resolve(r.cid))
                : (x.default.$warn("添加频道失败，".concat(a)),
                  Promise.reject());
            },
            function () {
              return (
                x.default.$warn("添加视频失败，网络错误"), Promise.reject()
              );
            }
          );
      },
      Hi = function (t, e) {
        var i = t.commit;
        return x.default.http.post("".concat(Ri, "del"), e).then(
          function (t) {
            var e = t.data,
              n = e.code,
              a = e.message;
            return 0 === n
              ? (B({ commit: i }, { mid: _bili_space_mid }), Promise.resolve())
              : (x.default.$warn("删除频道失败，".concat(a)), Promise.reject());
          },
          function () {
            return x.default.$warn("删除视频失败，网络错误"), Promise.reject();
          }
        );
      },
      Wi = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(Ri, "edit"), e).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 === i
              ? Promise.resolve()
              : (x.default.$warn("编辑频道失败，".concat(n)), Promise.reject());
          },
          function () {
            return x.default.$warn("编辑视频失败，网络错误"), Promise.reject();
          }
        );
      },
      Xi = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(Ri, "video/add"), e).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.data,
              a = e.message;
            if (0 === i) {
              var r = n.length;
              return (
                r > 0 &&
                  x.default.$info(
                    "添加视频完成，共有 ".concat(r, " 个视频添加失败")
                  ),
                Promise.resolve()
              );
            }
            return (
              x.default.$warn("添加频道视频失败，".concat(a)), Promise.reject()
            );
          },
          function () {
            return (
              x.default.$warn("添加频道视频失败，网络错误"), Promise.reject()
            );
          }
        );
      },
      qi = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(Ri, "video/del"), e).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 === i
              ? Promise.resolve()
              : (x.default.$warn("删除频道视频失败，".concat(n)),
                Promise.reject());
          },
          function () {
            return (
              x.default.$warn("删除频道视频失败，网络错误"), Promise.reject()
            );
          }
        );
      },
      zi = function (t, e) {
        t.commit;
        return x.default.http.post("".concat(Ri, "video/sort"), e).then(
          function (t) {
            var e = t.data,
              i = e.code,
              n = e.message;
            return 0 === i
              ? Promise.resolve()
              : (x.default.$warn("排序失败，".concat(n)), Promise.reject());
          },
          function () {
            return x.default.$warn("排序失败，网络错误"), Promise.reject();
          }
        );
      },
      Yi = function (t, e) {
        t.commit;
        var i = e.cid;
        return x.default.http
          .jsonp("".concat(Ri, "video/check"), { params: { cid: i } })
          .then(
            function (t) {
              var e = t.code;
              return 0 === e
                ? Promise.resolve()
                : 53005 === e
                ? (x.default.$warn("操作视频失败，请先清理频道里的失效视频"),
                  Promise.reject())
                : (x.default.$warn(
                    "操作视频失败，服务器或网络错误，请稍后重试"
                  ),
                  Promise.reject());
            },
            function () {
              return (
                x.default.$warn("操作视频失败，服务器或网络错误，请稍后重试"),
                Promise.reject()
              );
            }
          );
      },
      Ki = function (t) {
        return t.channels;
      },
      Zi = function (t) {
        return t.channelsWithArchives;
      },
      tn = function (t) {
        return t.isChannelsLoad;
      },
      en = function (t) {
        return t.isChannelLoad;
      },
      nn = function (t) {
        return t.channel;
      },
      an = function (t) {
        var e = t.channels,
          i = t.channelsWithArchives;
        return (
          (0 !== e.count || 0 !== i.length) &&
          (0 === i.length ? e.list : i).some(function (t) {
            return t.count > 0;
          })
        );
      },
      rn = {
        state: {
          channels: { count: 0, list: [] },
          channelsWithArchives: [],
          cid: "",
          channel: {
            archives: [],
            cid: 0,
            name: "频道",
            intro: "",
            mtime: 1481268141,
            count: 0,
          },
          isChannelsLoad: !1,
          isChannelLoad: !1,
          isMoreChannelVideoLoad: !0,
          isUploading: !1,
        },
        getters: d,
        actions: u,
        mutations:
          ((we = {}),
          b()(we, U.N, function (t, e) {
            (t.channels = e), (t.isChannelsLoad = !0);
          }),
          b()(we, U.M, function (t, e) {
            (t.channelsWithArchives = e), (t.isChannelsLoad = !0);
          }),
          b()(we, U.L, function (t, e) {
            (t.channel = e), (t.isChannelLoad = !0);
          }),
          we),
      },
      on = i(17),
      sn = {
        method: "get",
        url: "//api.bilibili.com/x/space/coin/video",
        withCredentials: !0,
      },
      cn = {
        actions: {
          fetchCoinVideos: function (t, e) {
            t.commit;
            return Object(on.a)(
              "//api.bilibili.com/x/space/coin/video",
              { mid: e },
              _bili_space_mid
            ).then(
              function (t) {
                return Promise.resolve(t);
              },
              function () {
                return (
                  (sn.params = { vmid: e }),
                  x.default.http(sn).then(
                    function (t) {
                      var i = t.data,
                        n = i.code,
                        a = i.data;
                      return 0 == +n
                        ? (Object(on.c)(
                            "//api.bilibili.com/x/space/coin/video",
                            { mid: e },
                            a,
                            _bili_space_mid
                          ),
                          Promise.resolve(a))
                        : Promise.reject();
                    },
                    function () {
                      return Promise.reject();
                    }
                  )
                );
              }
            );
          },
        },
      },
      ln = i(216),
      un = {
        state: {
          favList: { count: 0, list: [{ cover: [] }] },
          myFavList: { count: 0, list: [{ cover: [] }] },
          favDetail: { pages: 0, count: 0, vlist: [], tlist: [] },
          topics: { page: 0, total: 0, pagesize: 0, list: [] },
          articles: {
            favorites: [{ stats: {}, image_urls: [] }],
            page: { pn: 1, ps: 16, total: 0 },
          },
          playlists: { page: {}, list: [] },
          favNavList: {
            defaultFav: {},
            fav: [],
            archive: [],
            visitor: [],
            playlist: 0,
            topic: 0,
            article: 0,
            album: 0,
            movie: 0,
            pugv: 0,
            arc: 0,
            note: 0,
          },
          createdList: { list: [], pn: 1, ps: 16, count: 0 },
          collectedList: { list: [], pn: 1, ps: 16, count: 0 },
          myCreatedList: { list: [], pn: 1, ps: 20, count: 0 },
          modalAddFavList: [],
          favListDetails: { info: { cnt_info: {}, upper: {} }, medias: [] },
          tlist: [],
          idPlaylistListLoad: !1,
          isFavDetailLoad: !1,
          isFavListLoad: !1,
          isMyFavListLoad: !1,
          isArticleListLoad: !1,
          isFarNavListLoad: !1,
          isTopicLoad: !1,
          delInvalidVideoStateNum: 2,
          isShowFavShare: !1,
          isCreatedFavLoad: !1,
          isAddFavLoad: !1,
        },
        getters: i(217),
        actions: ln,
        mutations:
          ((Ce = {}),
          b()(Ce, U.I, function (t) {
            t.isArticleListLoad = !1;
          }),
          b()(Ce, U.J, function (t, e) {
            (t.articles = e), (t.isArticleListLoad = !0);
          }),
          b()(Ce, U.H, function (t) {
            t.isArticleListLoad = !0;
          }),
          b()(Ce, U.S, function (t) {
            t.isFavListLoad = !1;
          }),
          b()(Ce, U.T, function (t, e) {
            (t.favList = e), (t.isFavListLoad = !0);
          }),
          b()(Ce, U.R, function (t) {
            t.isFavListLoad = !0;
          }),
          b()(Ce, U.jb, function (t) {
            t.idPlaylistListLoad = !1;
          }),
          b()(Ce, U.kb, function (t, e) {
            (t.playlists.page = e.page),
              (t.playlists.list = e.list),
              (t.idPlaylistListLoad = !0);
          }),
          b()(Ce, U.ib, function (t) {
            t.idPlaylistListLoad = !0;
          }),
          b()(Ce, U.k, function (t, e) {
            t.delInvalidVideoStateNum = e;
          }),
          b()(Ce, U.ab, function (t) {
            t.isMyFavListLoad = !1;
          }),
          b()(Ce, U.bb, function (t, e) {
            (t.myFavList = e), (t.isMyFavListLoad = !0);
          }),
          b()(Ce, U.Z, function (t) {
            t.isMyFavListLoad = !0;
          }),
          b()(Ce, U.wb, function (t) {
            t.isTopicLoad = !1;
          }),
          b()(Ce, U.xb, function (t, e) {
            (t.topics = e), (t.isTopicLoad = !0);
          }),
          b()(Ce, U.vb, function (t) {
            t.isTopicLoad = !1;
          }),
          b()(Ce, U.u, function (t) {
            t.isFavDetailLoad = !1;
          }),
          b()(Ce, U.v, function (t, e) {
            (t.favDetail = e), (t.isFavDetailLoad = !0);
          }),
          b()(Ce, U.t, function (t) {
            (t.favDetail = { pages: 0, count: 0, vlist: [], tlist: [] }),
              (t.isFavDetailLoad = !0);
          }),
          b()(Ce, U.h, function (t, e) {
            var i = t.favList.list,
              n = t.favList.count,
              a = i.findIndex(function (t) {
                return t.fid === e;
              });
            void 0 !== a &&
              ((t.favList.list = [].concat(
                M()(i.slice(0, a)),
                M()(i.slice(a + 1))
              )),
              (t.favList.count = n - 1));
          }),
          b()(Ce, U.Tb, function (t, e, i) {
            t.favList.list.forEach(function (n, a) {
              n.fid === e && (t.favList.list[a].state = 0 === i ? 2 : 3);
            });
          }),
          b()(Ce, U.Qb, function (t, e, i) {
            t.favList.list.forEach(function (n, a) {
              n.fid === e && (t.favList.list[a].name = i);
            });
          }),
          b()(Ce, U.l, function (t, e) {
            var i = e.split(","),
              n = [];
            t.favDetail.vlist.forEach(function (t, e) {
              -1 === i.indexOf(String(t.aid)) && n.push(t);
            }),
              (t.favDetail.count -= i.length),
              (t.favDetail.vlist = n);
          }),
          b()(Ce, U.e, function (t, e) {
            var i = e.tar_media_id,
              n = e.resources,
              a = t.createdList.list,
              r = n.split(",").length;
            a.map(function (t) {
              t.id === i && (t.media_count = t.media_count + r);
            }),
              (t.createdList.list = a);
          }),
          b()(Ce, U.Lb, function (t, e) {
            var i = e.src_media_id,
              n = e.tar_media_id,
              a = e.resources,
              r = t.createdList.list,
              o = a.split(",").length;
            r.map(function (t) {
              t.id === i && (t.media_count = t.media_count - o),
                t.id === n && (t.media_count = t.media_count + o);
            }),
              (t.createdList.list = r);
          }),
          b()(Ce, U.j, function (t, e) {
            var i = e.resources,
              n = e.media_id,
              a = t.createdList.list,
              r = i.split(",").length;
            a.map(function (t) {
              t.id === n && (t.media_count = t.media_count - r);
            }),
              (t.createdList.list = a);
          }),
          b()(Ce, U.P, function (t) {
            t.isFarNavListLoad = !1;
          }),
          b()(Ce, U.Q, function (t, e) {
            var i = e.data,
              n = i.album,
              a = i.archive,
              r = i.article,
              o = i.playlist,
              s = i.topic,
              c = i.movie,
              l = i.pugv,
              u = i.arc,
              d = i.note;
            (t.favNavList.archive = a),
              (t.favNavList.playlist = o),
              (t.favNavList.topic = s),
              (t.favNavList.article = r),
              (t.favNavList.album = n),
              (t.favNavList.movie = c),
              (t.favNavList.pugv = l),
              (t.favNavList.arc = u),
              (t.favNavList.note = d),
              (t.isFarNavListLoad = !0);
          }),
          b()(Ce, U.O, function (t) {
            t.isFarNavListLoad = !0;
          }),
          b()(Ce, U.fc, function (t, e) {
            t.favNavList.pugv = e;
          }),
          b()(Ce, U.Rb, function (t, e) {
            t.favNavList.album = e;
          }),
          b()(Ce, U.Sb, function (t, e) {
            t.favNavList.movie = e;
          }),
          b()(Ce, U.w, function (t, e) {
            t.tlist = e;
          }),
          b()(Ce, U.o, function (t) {
            t.isCreatedFavLoad = !1;
          }),
          b()(Ce, U.p, function (t, e) {
            var i = e.list,
              n = void 0 === i ? [] : i,
              a = e.pn,
              r = e.ps,
              o = e.count;
            (t.createdList.list = n || []),
              (t.createdList.pn = a),
              (t.createdList.ps = r),
              (t.createdList.count = o),
              (t.isCreatedFavLoad = !0),
              (t.modalAddFavList = M()(n));
          }),
          b()(Ce, U.n, function (t) {
            t.isCreatedFavLoad = !0;
          }),
          b()(Ce, U.m, function (t, e) {
            var i = e.list,
              n = void 0 === i ? [] : i,
              a = e.pn,
              r = e.ps,
              o = e.count,
              s = e.isReSet,
              c = void 0 !== s && s;
            (t.collectedList.list =
              n && !c
                ? [].concat(M()(t.collectedList.list), M()(e.list))
                : M()(n)),
              (t.collectedList.pn = a),
              (t.collectedList.ps = r),
              (t.collectedList.count = o);
          }),
          b()(Ce, U.r, function (t) {
            t.isFavDetailLoad = !1;
          }),
          b()(Ce, U.s, function (t, e) {
            (t.favListDetails.info = e.info),
              (t.favListDetails.medias = e.medias ? e.medias : []),
              (t.isFavDetailLoad = !0);
          }),
          b()(Ce, U.q, function (t) {
            t.isFavDetailLoad = !0;
          }),
          b()(Ce, U.i, function (t, e) {
            var i = t.createdList.list,
              n = t.createdList.count,
              a = i.findIndex(function (t) {
                return t.id === e;
              });
            void 0 !== a &&
              ((t.createdList.list = [].concat(
                M()(i.slice(0, a)),
                M()(i.slice(a + 1))
              )),
              (t.createdList.count = n - 1),
              (t.modalAddFavList = [].concat(
                M()(i.slice(0, a)),
                M()(i.slice(a + 1))
              )));
          }),
          b()(Ce, U.cc, function (t, e) {
            (t.favListDetails.info.cnt_info.thumb_up = e.likes),
              (t.favListDetails.info.like_state = e.like_state);
          }),
          b()(Ce, U.c, function (t) {
            var e = t.favListDetails.info.cnt_info.collect;
            (t.favListDetails.info.cnt_info.collect = e + 1),
              (t.favListDetails.info.fav_state = 1);
          }),
          b()(Ce, U.d, function (t) {
            var e = t.favListDetails.info.cnt_info.collect;
            (t.favListDetails.info.cnt_info.collect = e - 1),
              (t.favListDetails.info.fav_state = 0);
          }),
          b()(Ce, U.Nb, function (t, e) {
            var i = t.collectedList.list,
              n = t.collectedList.count,
              a = i.findIndex(function (t) {
                return t.id === e;
              });
            void 0 !== a &&
              ((t.collectedList.list = [].concat(
                M()(i.slice(0, a)),
                M()(i.slice(a + 1))
              )),
              (t.collectedList.count = n - 1));
          }),
          b()(Ce, U.bc, function (t, e) {
            t.isShowFavShare = e;
          }),
          b()(Ce, U.x, function (t, e) {
            var i = e.list,
              n = void 0 === i ? [] : i,
              a = e.pn,
              r = e.ps,
              o = e.count;
            (t.myCreatedList.list = n),
              (t.myCreatedList.pn = a),
              (t.myCreatedList.ps = r),
              (t.myCreatedList.count = o);
          }),
          b()(Ce, U.ac, function (t) {
            var e = t.favListDetails.info.cnt_info.share;
            t.favListDetails.info.cnt_info.share = e + 1;
          }),
          b()(Ce, U.Jb, function (t, e) {
            t.isAddFavLoad = e;
          }),
          b()(Ce, U.Kb, function (t, e) {
            var i = t.createdList.list,
              n = t.modalAddFavList,
              a = t.myCreatedList.list;
            e.isOwner
              ? (i.splice(1, 0, e.data),
                n.push(e.data),
                (t.createdList.list = i),
                (t.modalAddFavList = n))
              : (a.push(e.data), (t.myCreatedList.list = a));
          }),
          Ce),
      },
      dn =
        ((Te = {}),
        b()(Te, U.Yb, function (t, e) {
          t._bili_subscribe_list = e;
        }),
        b()(Te, U.Zb, function (t, e) {
          t._bili_subscribe_list[e.key] &&
            ((t._bili_subscribe_list[e.key].is_follow = e.value),
            (t._bili_subscribe_list[e.key].total += e.value ? 1 : -1));
        }),
        b()(Te, U.Xb, function (t, e) {
          t._bili_subscribe_list[e] &&
            (t._bili_subscribe_list[e].isCancel = !0);
        }),
        Te);
    function fn(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function pn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fn(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : fn(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var mn,
      hn,
      vn,
      _n = "//api.bilibili.com/x/space/lastplaygame",
      bn = {
        actions: {
          getNotice: function (t, e) {
            t.commit;
            return x.default.http
              .get("//api.bilibili.com/x/space/notice", { params: { mid: e } })
              .then(
                function (t) {
                  var e = t.data,
                    i = e.code,
                    n = e.data;
                  return 0 == +i ? Promise.resolve(n) : Promise.reject();
                },
                function () {
                  return Promise.reject();
                }
              );
          },
          setNotice: function (t, e) {
            t.commit;
            return x.default.http
              .post("//api.bilibili.com/x/space/notice/set", { notice: e })
              .then(
                function (t) {
                  var e = t.data,
                    i = e.code,
                    n = e.message;
                  if (!([61001, 61002].indexOf(+i) > -1))
                    return 0 == +i
                      ? Promise.resolve(i)
                      : (x.default.$warn("修改公告失败，".concat(n)),
                        Promise.reject());
                  $.getScript(
                    "//static.hdslb.com/common/js/identityDialog.js",
                    function () {
                      IdentityDialog(i, n);
                    }
                  );
                },
                function () {
                  return (
                    x.default.$warn("修改公告失败，网络错误"), Promise.reject()
                  );
                }
              );
          },
          getLastPlay: function (t, e) {
            t.commit;
            var i = {
              method: "get",
              url: _n,
              params: { mid: e },
              withCredentials: !0,
            };
            return Object(on.a)(_n, { mid: e }, _bili_space_mid).then(
              function (t) {
                return Promise.resolve(t);
              },
              function () {
                return x.default.http(i).then(
                  function (t) {
                    var i = t.data,
                      n = i.code,
                      a = i.data;
                    return 0 == +n
                      ? (Object(on.c)(_n, { mid: e }, a, _bili_space_mid),
                        Promise.resolve(a))
                      : Promise.reject();
                  },
                  function () {
                    return Promise.reject();
                  }
                );
              }
            );
          },
          getElecInfo: function (t, e) {
            t.commit;
            return Object(k.a)({
              method: "get",
              url: "//api.bilibili.com/x/ugcpay-rank/elec/month/up",
              params: { up_mid: e },
            }).then(
              function (t) {
                var e = null == t ? void 0 : t.data,
                  i = e.code,
                  n = e.data;
                return 0 === i ? Promise.resolve(n) : Promise.reject();
              },
              function () {
                return Promise.reject();
              }
            );
          },
          getShop: function (t) {
            t.commit;
            return x.default.http.jsonp("//api.bilibili.com/x/space/shop").then(
              function (t) {
                var e = t.code,
                  i = t.data;
                return 0 === e ? Promise.resolve(i) : Promise.reject();
              },
              function () {
                return Promise.reject();
              }
            );
          },
          getSubscribe: function (t, e) {
            var i = t.commit;
            Object(k.a)({
              method: "get",
              url: "//api.bilibili.com/x/space/reservation",
              params: { vmid: e },
              withCredentials: !0,
            }).then(function (t) {
              var e = t.data;
              0 === e.code &&
                e.data &&
                i(
                  U.Yb,
                  e.data.map(function (t) {
                    return pn(pn({}, t), {}, { isCancel: !1 });
                  })
                );
            });
          },
        },
        state: { _bili_subscribe_list: [] },
        mutations: dn,
      },
      gn = {
        actions: {
          fetchPersonalTags: function (t, e) {
            t.commit;
            return x.default.http
              .get("//api.bilibili.com/x/space/acc/tags", {
                params: { mid: e },
              })
              .then(
                function (t) {
                  var e = t.data,
                    i = e.code,
                    n = e.data;
                  return 0 == +i ? Promise.resolve(n) : Promise.reject();
                },
                function () {
                  return Promise.reject();
                }
              );
          },
          setPersonalTags: function (t, e) {
            t.commit;
            var i = e.tags;
            return x.default.http
              .post("//api.bilibili.com/x/space/acc/tags/set", { tags: i })
              .then(
                function (t) {
                  var e = t.data,
                    i = e.code,
                    n = e.message;
                  return 0 == +i
                    ? Promise.resolve()
                    : (x.default.$warn("设置标签失败，".concat(n)),
                      Promise.reject());
                },
                function () {
                  return (
                    x.default.$warn("设置标签失败，网络错误"), Promise.reject()
                  );
                }
              );
          },
          setIndexOrder: function (t, e) {
            var i = t.commit;
            x.default.http
              .post("//api.bilibili.com/x/space/index/order/modify", {
                index_order: e,
              })
              .then(
                function (t) {
                  var n = t.data,
                    a = n.code,
                    r = n.message;
                  0 == +a
                    ? i(U.Ub, e)
                    : x.default.$warn("设置模块排序失败，".concat(r));
                },
                function () {
                  x.default.$warn("设置模块排序失败，网络错误");
                }
              );
          },
          setPrivacy: function (t, e) {
            var i = t.commit;
            x.default.http
              .post("//api.bilibili.com/x/space/privacy/modify", e)
              .then(
                function (t) {
                  var n = t.data,
                    a = n.code,
                    r = n.message;
                  0 == +a
                    ? i(U.Vb, e)
                    : x.default.$warn("设置模块公开性失败，".concat(r));
                },
                function () {
                  x.default.$warn("设置模块公开性失败，网络错误");
                }
              );
          },
        },
      },
      yn = {
        actions: {
          fetchTags: function (t, e) {
            t.commit;
            return x.default.http
              .get("//api.bilibili.com/x/space/tag/sub/list", {
                params: { vmid: e },
              })
              .then(
                function (t) {
                  var e = t.data,
                    i = e.code,
                    n = e.data;
                  return 0 == +i
                    ? Promise.resolve(n)
                    : (console.error("获取订阅标签失败，".concat(n)),
                      Promise.reject());
                },
                function () {
                  return (
                    console.error("获取订阅标签失败，网络错误"),
                    Promise.reject()
                  );
                }
              );
          },
          unSubTag: function (t, e) {
            t.commit;
            return x.default.http
              .post("//api.bilibili.com/x/space/tag/sub/cancel", { tag_id: e })
              .then(
                function (t) {
                  var e = t.data,
                    i = e.code,
                    n = e.message;
                  return 0 == +i
                    ? Promise.resolve()
                    : (x.default.$warn("取消订阅标签失败，".concat(n)),
                      Promise.reject());
                },
                function () {
                  return (
                    x.default.$warn("取消订阅标签失败，网络错误"),
                    Promise.reject()
                  );
                }
              );
          },
        },
      },
      wn = function (t) {
        return t.topphoto;
      },
      Cn = function (t) {
        return t.skin;
      },
      Tn = function (t) {
        return t.bcoin;
      },
      Sn = function (t) {
        return t.isSkinLoad;
      },
      jn = function (t) {
        return t.isTopphotoLoad;
      },
      Pn = function (t) {
        return t.isUploadSuccess;
      },
      Ln = {
        state: {
          skin: [],
          topphoto: [],
          bcoin: 0,
          isSkinLoad: !1,
          isTopphotoLoad: !1,
          isUploadSuccess: !1,
        },
        getters: f,
        actions: a,
        mutations:
          ((mn = {}),
          b()(mn, U.C, function (t, e) {
            (t.topphoto = e), (t.isTopphotoLoad = !0);
          }),
          b()(mn, U.A, function (t, e) {
            (t.skin = e), (t.isSkinLoad = !0);
          }),
          b()(mn, U.jc, function (t) {
            t.isUploadSuccess = !0;
          }),
          b()(mn, U.K, function (t, e) {
            t.bcoin = e;
          }),
          mn),
      },
      Mn = function (t, e) {
        var i = t.commit;
        return (
          i(U.B),
          x.default.http
            .get("//api.bilibili.com/x/space/arc/search", {
              params: e,
              withCredentials: !0,
            })
            .then(
              function (t) {
                var e = t.data,
                  n = e.data;
                return 0 == +e.code
                  ? (i(U.ub, n), Promise.resolve())
                  : (i(U.tb), Promise.reject());
              },
              function () {
                return i(U.tb), Promise.reject();
              }
            )
        );
      },
      Un = function t(e, i) {
        var n = e.commit;
        return x.default.http
          .get("//api.bilibili.com/x/space/arc/search", {
            params: i,
            withCredentials: !0,
          })
          .then(
            function (e) {
              var a = e.data,
                r = a.data,
                o = r.list,
                s = r.page;
              if (0 == +a.code) {
                var c = i.pn,
                  l = Math.ceil(s.count / s.ps);
                return i.check_id
                  ? o.vlist.length > 1
                    ? Promise.resolve({
                        vlist: o.vlist,
                        pages: l,
                        count: s.count,
                        pn: s.pn,
                      })
                    : c < l
                    ? (i.pn++, t({ commit: n }, i))
                    : Promise.resolve({
                        vlist: o.vlist,
                        pages: l,
                        count: s.count,
                        pn: s.pn,
                      })
                  : Promise.resolve({
                      vlist: o.vlist,
                      pages: l,
                      count: s.count,
                      pn: s.pn,
                    });
              }
              return x.default.$warn("获取用户投稿视频失败"), Promise.reject();
            },
            function () {
              return x.default.$warn("获取用户投稿视频失败"), Promise.reject();
            }
          );
      },
      xn = function (t) {
        (0, t.commit)(U.b);
      },
      kn = function (t) {
        return t.submitVideos;
      },
      En = function (t) {
        return t.isSubmitVideosLoad;
      },
      In = function (t) {
        return t.selectVideos;
      },
      On = {
        state: {
          submitVideos: {
            pages: 0,
            count: 0,
            tlist: [],
            vlist: [],
            episodic_button: null,
          },
          selectVideos: { pages: 0, count: 0, tlist: [], vlist: [] },
          isSubmitVideosLoad: !1,
        },
        getters: m,
        actions: p,
        mutations:
          ((hn = {}),
          b()(hn, U.ub, function (t, e) {
            var i = e.list,
              n = e.page,
              a = e.episodic_button;
            (t.submitVideos.pages = Math.ceil(n.count / n.ps)),
              (t.submitVideos.count = n.count),
              (t.submitVideos.episodic_button = a),
              (t.submitVideos.tlist = i.tlist),
              (t.submitVideos.vlist = i.vlist),
              (t.isSubmitVideosLoad = !0);
          }),
          b()(hn, U.tb, function (t) {
            t.isSubmitVideosLoad = !0;
          }),
          b()(hn, U.B, function (t) {
            t.isSubmitVideosLoad = !1;
          }),
          b()(hn, U.b, function (t) {
            t.selectVideos = { pages: 0, count: 0, tlist: [], vlist: [] };
          }),
          hn),
      },
      $n = {
        actions: {
          fetchAudio: function (t, e) {
            t.commit;
            return x.default.http
              .get("//api.bilibili.com/audio/music-service/web/song/upper", {
                params: e,
              })
              .then(
                function (t) {
                  var e = t.data,
                    i = e.code,
                    n = e.msg,
                    a = e.data;
                  return 0 === i
                    ? Promise.resolve(
                        null === a ? { data: [], curPage: 0, pageCount: 0 } : a
                      )
                    : (x.default.$warn("获取用户音频列表失败，".concat(n)),
                      Promise.reject());
                },
                function () {
                  return (
                    x.default.$warn("获取用户音频列表失败，网络错误"),
                    Promise.reject()
                  );
                }
              );
          },
        },
      };
    function An(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function Nn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? An(Object(i), !0).forEach(function (e) {
              b()(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : An(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var Dn,
      Jn = {
        all: { name: "全部", count: 0, pageTotal: 0 },
        draw: { name: "画友", count: 0, pageTotal: 0 },
        photo: { name: "摄影", count: 0, pageTotal: 0 },
        daily: { name: "日常", count: 0, pageTotal: 0 },
      },
      Vn = {
        albumTabList: JSON.parse(JSON.stringify(Jn)),
        albumDocList: [],
        isAlbumLoading: !0,
        isAlbumError: !1,
      },
      Rn = {
        _percent: 100,
        _distinguish: function (t) {
          return t % 100 < this._percent;
        },
        getDocList: function (t) {
          return this._distinguish(t)
            ? "//api.bilibili.com/x/dynamic/feed/draw/doc_list"
            : "//api.vc.bilibili.com/link_draw/v1/doc/doc_list";
        },
        getDocCount: function (t) {
          return this._distinguish(t)
            ? "//api.bilibili.com/x/dynamic/feed/draw/upload_count"
            : "//api.vc.bilibili.com/link_draw/v1/doc/upload_count";
        },
      },
      Fn = {
        fetchAlbum: function (t, e) {
          t.commit;
          return x.default.http
            .jsonp("//api.bilibili.com/x/space/album/index", { params: e })
            .then(
              function (t) {
                var e = t.code,
                  i = t.message,
                  n = t.data;
                return 0 === e
                  ? Promise.resolve(n)
                  : (x.default.$warn("获取用户相簿列表失败，".concat(i)),
                    Promise.reject());
              },
              function () {
                return (
                  x.default.$warn("获取用户相簿列表失败，网络错误"),
                  Promise.reject()
                );
              }
            );
        },
        getDocCount: function (t, e) {
          var i = t.state,
            n = t.commit,
            a = e.uid,
            r = e.pageSize;
          x.default.http
            .get(Rn.getDocCount(a), { params: { uid: a } })
            .then(function (t) {
              var e = t.data,
                a = e.code,
                o = e.message,
                s = e.data;
              if (0 === a) {
                var c = Jn;
                for (var l in i.albumTabList)
                  (c[l].count = s[l + "_count"]),
                    (c[l].pageTotal = Math.ceil(s[l + "_count"] / r));
                n(U.E, c);
              } else x.default.$warn("获取相簿tab失败，".concat(o));
            })
            .catch(function (t) {
              x.default.$warn("获取相簿tab失败");
            });
        },
        getDocList: function (t, e) {
          var i = t.commit;
          x.default.http
            .get(Rn.getDocList(e.uid), { params: e })
            .then(function (t) {
              var e = t.data,
                n = e.code,
                a = e.data;
              0 === n && a && a.items && a.items[0]
                ? i(
                    U.G,
                    a.items.map(function (t) {
                      return Nn(
                        Nn({}, t),
                        {},
                        {
                          pictures:
                            "string" == typeof t.pictures
                              ? JSON.parse(t.pictures)
                              : t.pictures,
                        }
                      );
                    })
                  )
                : i(U.F);
            })
            .catch(function (t) {
              console.log(t), i(U.F);
            });
        },
      },
      Bn =
        ((vn = {}),
        b()(vn, U.E, function (t, e) {
          t.albumTabList = e;
        }),
        b()(vn, U.G, function (t, e) {
          (t.isAlbumLoading = !1), (t.isAlbumError = !1), (t.albumDocList = e);
        }),
        b()(vn, U.F, function (t) {
          (t.isAlbumError = !0), (t.isAlbumLoading = !1);
        }),
        vn),
      Qn = function (t, e) {
        var i = t.commit;
        i(U.nb),
          x.default.http
            .get("//api.bilibili.com/pugv/app/web/season/page", { params: e })
            .then(function (t) {
              var e = t.data,
                n = e.code,
                a = e.data,
                r = a.items,
                o = a.page;
              0 == +n ? (i(U.nb), i(U.ob, { items: r, page: o })) : i(U.mb);
            })
            .catch(function () {
              i(U.mb);
            });
      },
      Gn = function (t, e) {
        var i = t.commit;
        x.default.http
          .get("//api.bilibili.com/pugv/app/web/favorite/page", { params: e })
          .then(function (t) {
            var e = t.data,
              n = e.code,
              a = e.data,
              r = a.items,
              o = a.page;
            0 == +n && i(U.lb, { items: r, page: o });
          });
      },
      Hn = function (t, e) {
        t.commit;
        var i = e.season_id;
        return x.default.http
          .post("//api.bilibili.com/pugv/app/web/favorite/del", {
            season_id: i,
          })
          .then(function (t) {
            return Promise.resolve(t.data);
          })
          .catch(function () {
            return (
              console.log("请求取消课程收藏失败，网络错误"), Promise.reject()
            );
          });
      },
      Wn = function (t) {
        return t.list;
      },
      Xn = function (t) {
        return t.page;
      },
      qn = function (t) {
        return t.isLoading;
      },
      zn = function (t) {
        return t.pugvList;
      },
      Yn = function (t) {
        return t.pugvPage;
      },
      Kn = {
        init: ii,
        top: Ue,
        relation: vi,
        article: _i,
        bangumi: bi,
        playlist: Vi,
        channel: rn,
        coin: cn,
        fav: un,
        rightcol: bn,
        settings: gn,
        tag: yn,
        theme: Ln,
        video: On,
        audio: $n,
        album: {
          state: Vn,
          actions: Fn,
          mutations: Bn,
          getters: {
            albumTabList: function (t) {
              return t.albumTabList;
            },
            albumDocList: function (t) {
              return t.albumDocList;
            },
            isAlbumLoading: function (t) {
              return t.isAlbumLoading;
            },
            isAlbumError: function (t) {
              return t.isAlbumError;
            },
          },
        },
        pugv: {
          state: {
            list: [],
            page: { num: 1, size: 15, total: 0 },
            pugvList: [],
            pugvPage: { num: 1, size: 10, total: 0 },
            isLoading: !1,
          },
          actions: h,
          getters: v,
          mutations:
            ((Dn = {}),
            b()(Dn, U.nb, function (t) {
              t.isLoading = !t.isLoading;
            }),
            b()(Dn, U.ob, function (t, e) {
              var i = e.items,
                n = e.page;
              (t.list = i), (t.page = n);
            }),
            b()(Dn, U.mb, function (t) {
              t.isLoading = !1;
            }),
            b()(Dn, U.lb, function (t, e) {
              var i = e.items,
                n = e.page;
              (t.pugvList = i), (t.pugvPage = n);
            }),
            Dn),
        },
      };
    x.default.use(w.a);
    var Zn,
      ta = new w.a.Store({ modules: Kn, strict: !1 }),
      ea = [],
      ia = [],
      na = "@@clickoutsideContext",
      aa = 0;
    function ra(t, e, i) {
      return function () {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        !(i && i.context && n.target && a.target) ||
          t.contains(n.target) ||
          t.contains(a.target) ||
          t === n.target ||
          (i.context.popperElm &&
            (i.context.popperElm.contains(n.target) ||
              i.context.popperElm.contains(a.target))) ||
          (e.expression && t[na].methodName && i.context[t[na].methodName]
            ? i.context[t[na].methodName]()
            : t[na].bindingFn && t[na].bindingFn());
      };
    }
    var oa = i(240),
      sa = {
        name: "be-input",
        data: function () {
          return { currentValue: this.value };
        },
        props: {
          value: { type: [String, Number], default: "" },
          type: { type: String, default: "input" },
          rows: { type: Number, default: 4 },
          disabled: { type: Boolean, default: !1 },
          readonly: { type: Boolean, default: !1 },
          placeholder: { type: String, default: "请输入内容" },
          maxlength: void 0,
          required: Boolean,
        },
        watch: {
          value: function (t) {
            this.currentValue = t;
          },
        },
        methods: {
          handleInput: function (t) {
            (this.currentValue = t.target.value),
              this.$emit("input", this.currentValue),
              this.$emit("change", this.currentValue);
          },
          handleFocus: function () {
            this.$emit("focus", this.currentValue);
          },
          handleBlur: function () {
            this.$emit("blur", this.currentValue);
          },
        },
      },
      ca =
        (i(529),
        Object(dt.a)(
          sa,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              {
                class: {
                  "be-input": "input" === t.type,
                  "be-textarea": "textarea" === t.type,
                  "is-diabled": t.disabled,
                  "be-input--append": t.$slots.append || t.maxlength,
                },
              },
              [
                "input" === t.type
                  ? i(
                      "input",
                      t._b(
                        {
                          staticClass: "be-input_inner",
                          domProps: { value: t.currentValue },
                          on: {
                            input: t.handleInput,
                            focus: t.handleFocus,
                            blur: t.handleBlur,
                          },
                        },
                        "input",
                        t.$props,
                        !1
                      )
                    )
                  : t._e(),
                "textarea" === t.type
                  ? i(
                      "textarea",
                      t._b(
                        {
                          staticClass: "be-textarea_inner",
                          attrs: { rows: t.rows },
                          domProps: { value: t.currentValue },
                          on: {
                            input: t.handleInput,
                            focus: t.handleFocus,
                            blur: t.handleBlur,
                          },
                        },
                        "textarea",
                        t.$props,
                        !1
                      )
                    )
                  : t._e(),
                t.maxlength
                  ? i("div", { staticClass: "be-input-word-counter" }, [
                      t._v(
                        t._s(t.currentValue.length) + "/" + t._s(t.maxlength)
                      ),
                    ])
                  : t._e(),
                t.$slots.append ? t._t("append") : t._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      la = {
        name: "modal",
        data: function () {
          return { visible: !1 };
        },
        props: {
          name: { type: String, default: "" },
          show: { type: Boolean, default: !1 },
          title: { type: String, default: "提示" },
          body: { type: String, default: "这是一段内容" },
          mask: { type: Boolean, default: !0 },
          cancelButton: {
            type: Object,
            default: function () {
              return { show: !0, type: "default", text: "取消" };
            },
          },
          confirmButton: {
            type: Object,
            default: function () {
              return { show: !0, type: "primary", text: "确定" };
            },
          },
        },
        mounted: function () {
          this.$slots.body ||
            this.body ||
            console.log("Modal至少需要输入一个内容！");
        },
        methods: {
          cancel: function () {
            this.$emit("cancel", { name: this.name });
          },
          confirm: function () {
            this.$emit("confirm", { name: this.name });
          },
        },
        computed: {
          styles: function () {
            var t = {};
            return (t.width = this.pWidth + "px"), t;
          },
        },
      },
      ua =
        (i(219),
        Object(dt.a)(
          la,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("transition", { attrs: { name: "fade" } }, [
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.show,
                      expression: "show",
                    },
                  ],
                  staticClass: "modal-container",
                },
                [
                  t.mask ? i("div", { staticClass: "modal-mask" }) : t._e(),
                  i("div", { staticClass: "modal-wrapper", style: t.styles }, [
                    i(
                      "div",
                      { staticClass: "modal" },
                      [
                        i("div", { staticClass: "modal-header" }, [
                          i("i", {
                            staticClass:
                              "modal-header-close iconfont icon-ic_close",
                            on: { click: t.cancel },
                          }),
                          i(
                            "div",
                            { staticClass: "modal-title" },
                            [
                              t.$slots.title
                                ? t._t("title")
                                : i("p", [t._v(t._s(t.title))]),
                            ],
                            2
                          ),
                        ]),
                        i(
                          "div",
                          { staticClass: "modal-body" },
                          [
                            t.$slots.body
                              ? t._t("body")
                              : i("p", [t._v(t._s(t.body))]),
                          ],
                          2
                        ),
                        i(
                          "be-button-group",
                          { staticClass: "modal-footer" },
                          [
                            t.confirmButton.show
                              ? i(
                                  "be-button",
                                  {
                                    attrs: { type: t.confirmButton.type },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.confirm.apply(null, arguments);
                                      },
                                    },
                                  },
                                  [t._v(t._s(t.confirmButton.text))]
                                )
                              : t._e(),
                            t.cancelButton.show
                              ? i(
                                  "be-button",
                                  {
                                    attrs: { type: t.cancelButton.type },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.cancel.apply(null, arguments);
                                      },
                                    },
                                  },
                                  [t._v(t._s(t.cancelButton.text))]
                                )
                              : t._e(),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      da = {
        name: "be-toast",
        data: function () {
          return { text: "", show: !1 };
        },
        methods: {
          destroyElement: function () {
            this.$destroy(), document.body.removeChild(this.$el);
          },
        },
        mounted: function () {
          var t = this;
          setTimeout(function () {
            (t.show = !1),
              t.$el.addEventListener("transitionend", t.destroyElement);
          }, 2e3);
        },
      },
      fa =
        (i(530),
        Object(dt.a)(
          da,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("transition", { attrs: { name: "fade" } }, [
              e(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: this.show,
                      expression: "show",
                    },
                  ],
                  staticClass: "be-toast",
                },
                [this._v(this._s(this.text))]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      pa = x.default.extend(fa),
      ma = function (t) {
        var e = new pa({ data: { text: t } });
        (e.vm = e.$mount()), document.body.appendChild(e.vm.$el), (e.show = !0);
      },
      ha = i(72),
      va = i.n(ha),
      _a = {
        name: "modal",
        data: function () {
          return {
            show: !1,
            title: "提示",
            body: "",
            cancelButton: { show: !0, type: "default", text: "取消" },
            confirmButton: { show: !0, type: "primary", text: "确定" },
          };
        },
        mounted: function () {
          this.body ||
            ((this.body = "操作失败"), console.warn("请至少提供一个body参数"));
        },
        methods: {
          cancel: function () {
            (this.show = !1),
              this.$el.addEventListener("transitionend", this.destroyMessage),
              this.$emit("cancel");
          },
          confirm: function () {
            (this.show = !1), this.$emit("confirm");
          },
          destroyMessage: function () {
            this.$destroy(), this.$el.parentNode.removeChild(this.$el);
          },
        },
      },
      ba = Object(dt.a)(
        _a,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("transition", { attrs: { name: "fade" } }, [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show",
                  },
                ],
                staticClass: "modal-container",
              },
              [
                i("div", { staticClass: "modal-mask" }),
                i(
                  "div",
                  {
                    staticClass: "modal-wrapper",
                    staticStyle: { width: "400px" },
                  },
                  [
                    i(
                      "div",
                      { staticClass: "modal" },
                      [
                        i("div", { staticClass: "modal-header" }, [
                          i("i", {
                            staticClass:
                              "modal-header-close iconfont icon-ic_close",
                            on: { click: t.cancel },
                          }),
                          i("div", { staticClass: "modal-title" }, [
                            i("p", [t._v(t._s(t.title))]),
                          ]),
                        ]),
                        i("div", {
                          staticClass: "modal-body",
                          domProps: { innerHTML: t._s(t.body) },
                        }),
                        i(
                          "be-button-group",
                          { staticClass: "modal-footer" },
                          [
                            t.confirmButton.show
                              ? i(
                                  "be-button",
                                  {
                                    attrs: { type: t.confirmButton.type },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.confirm.apply(null, arguments);
                                      },
                                    },
                                  },
                                  [t._v(t._s(t.confirmButton.text))]
                                )
                              : t._e(),
                            t.cancelButton.show
                              ? i(
                                  "be-button",
                                  {
                                    attrs: { type: t.cancelButton.type },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.cancel.apply(null, arguments);
                                      },
                                    },
                                  },
                                  [t._v(t._s(t.cancelButton.text))]
                                )
                              : t._e(),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      ga = x.default.extend(ba),
      ya = function (t, e, i) {
        var n = { body: t };
        "object" === va()(e) && ((i = e), (e = void 0)), e && (n.title = e);
        var a = new ga({ data: n });
        if (i) {
          var r = i,
            o = r.cancelButton,
            s = r.confirmButton;
          o && (a.cancelButton = Object.assign(a.cancelButton, o)),
            s && (a.confirmButton = Object.assign(a.confirmButton, s));
        }
        return (
          (a.vm = a.$mount()),
          document.body.appendChild(a.vm.$el),
          (a.show = !0),
          new Promise(function (t, e) {
            a.vm.$on("confirm", t), a.vm.$on("cancel", e);
          })
        );
      },
      wa = { warn: "错误提示", info: "信息提示", confirm: "确认提示" };
    ["warn", "info", "confirm"].forEach(function (t) {
      ya[t] = function (e) {
        return ya(e, wa[t]);
      };
    });
    var Ca = ya,
      Ta = i(241),
      Sa = i.n(Ta),
      ja = "//api.bilibili.com/x/space/acc/info",
      Pa = function (t) {
        return x.default.http
          .jsonp("//api.bilibili.com/x/relation", { params: { fid: t } })
          .then(
            function (t) {
              var e = t.code,
                i = t.data,
                n = t.message;
              return 0 === e
                ? Promise.resolve(i)
                : (console.log("单条获取用户关系失败，".concat(n)),
                  Promise.reject());
            },
            function () {
              return Promise.reject();
            }
          );
      },
      La = function (t) {
        return x.default.http
          .jsonp("//api.bilibili.com/x/relation/stat", { params: { vmid: t } })
          .then(
            function (t) {
              var e = t.data,
                i = t.code,
                n = t.message;
              return 0 === i
                ? Promise.resolve(e)
                : (console.log("用户关系数据获取失败，".concat(n)),
                  Promise.resolve({
                    following: 0,
                    whisper: 0,
                    black: 0,
                    follower: 0,
                  }));
            },
            function () {
              return (
                console.log("获取用户关系数据失败，网络错误"), Promise.reject()
              );
            }
          );
      },
      Ma = function (t, e) {
        return x.default.http
          .post("//api.bilibili.com/x/relation/modify", {
            fid: t,
            act: e,
            re_src: 11,
          })
          .then(
            function (e) {
              var i = e.data,
                n = i.code,
                a = i.message;
              return (
                Object(on.b)(ja, { mid: t }, _bili_space_mid),
                [0, 22004, 22005].indexOf(n) > -1
                  ? Promise.resolve()
                  : 22006 === n
                  ? ($.getScript(
                      "//static.hdslb.com/plugins/attentionLimitPopup/attentionLimitPopup.js",
                      function () {
                        new window.attentionLimitPopup();
                      }
                    ),
                    Promise.reject({ code: n, message: a }))
                  : (x.default.$warn(a),
                    Promise.reject({ code: n, message: a }))
              );
            },
            function () {
              return Promise.reject({ code: 404, message: "网络错误" });
            }
          );
      },
      Ua = i(242),
      xa = {
        name: "card",
        data: function () {
          return {
            popper: null,
            timer: null,
            isLoaded: "loading",
            isRendered: !1,
            data: { numbers: {}, level: 0, official: {}, vip: {} },
            target: null,
            popperOptions: {},
            myMid: 0,
            targetMid: 0,
            upMid: 0,
          };
        },
        mounted: function () {
          var t,
            e,
            i = this;
          document.body.appendChild(this.$el),
            (this.popper = new Ua.a(this.target, this.$el, this.popperOptions)),
            this.$nextTick(function () {
              this.popper.scheduleUpdate();
            }),
            (this.isRendered = !0),
            this.unbind(),
            ((t = this.targetMid),
            (e = !!this.myMid),
            Object(on.a)(ja, { mid: t }, _bili_space_mid, t).then(
              function (t) {
                return Promise.resolve(t);
              },
              function () {
                return x.default
                  .http({
                    method: "get",
                    url: ja,
                    params: { mid: t },
                    withCredentials: !0,
                  })
                  .then(
                    function (i) {
                      var n = i.data,
                        a = n.data;
                      if (0 == +n.code) {
                        var r = a;
                        return e
                          ? Promise.all([Pa(t), La(t)]).then(function (e) {
                              var i = Sa()(e, 2),
                                n = i[0],
                                a = i[1];
                              return (
                                (r.numbers = a),
                                (r.attribute = n.attribute),
                                Object(on.c)(
                                  ja,
                                  { mid: t },
                                  r,
                                  _bili_space_mid,
                                  t
                                ),
                                Promise.resolve(r)
                              );
                            })
                          : La(t).then(function (e) {
                              return (
                                (r.numbers = e),
                                (r.attribute = 0),
                                Object(on.c)(
                                  ja,
                                  { mid: t },
                                  r,
                                  _bili_space_mid,
                                  t
                                ),
                                Promise.resolve(r)
                              );
                            });
                      }
                      return Promise.reject();
                    },
                    function () {
                      return Promise.reject();
                    }
                  );
              }
            )).then(
              function (t) {
                (i.data = t),
                  (i.isLoaded = "loaded"),
                  i.popper.scheduleUpdate();
              },
              function () {
                i.isLoaded = "error";
              }
            );
        },
        methods: {
          addReport: function (t) {
            this.$emit("cardReport", t);
          },
          unbind: function () {
            var t = this.target,
              e = this.$el;
            t.addEventListener("mouseleave", this.destroyElement),
              e.addEventListener("mouseleave", this.destroyElement),
              t.addEventListener("mouseenter", this.clearTimer),
              e.addEventListener("mouseenter", this.clearTimer);
          },
          destroyElement: function () {
            var t = this,
              e = this.$el,
              i = this.target;
            this.timer = setTimeout(function () {
              (t.isRendered = !1),
                e.addEventListener("transitionend", function () {
                  i.removeEventListener("mouseenter", t.clearTimer),
                    e.removeEventListener("mouseenter", t.clearTimer),
                    t.$destroy(),
                    e.parentNode.removeChild(e);
                });
            }, 300);
          },
          clearTimer: function () {
            clearTimeout(this.timer), (this.timer = null);
          },
          handleFollow: function () {
            var t = this,
              e = this.targetMid,
              i = this.myMid,
              n = this;
            0 === i
              ? window.UserStatus &&
                window.UserStatus.quickLogin(function () {
                  var t;
                  ((t = e),
                  x.default.http
                    .jsonp("//api.bilibili.com/x/space/acc/relation", {
                      params: { mid: t },
                    })
                    .then(function (t) {
                      var e = t.code,
                        i = t.data,
                        n = t.message;
                      return 0 === e
                        ? Promise.resolve(i)
                        : (console.log(
                            "单条获取用户被关注关系失败，".concat(n)
                          ),
                          Promise.reject());
                    }))
                    .then(function (t) {
                      var i = t.be_relation,
                        a = t.relation;
                      ((i && 2 == +i.attribute) || 0 == +a.attribute) &&
                        Ma(e, 1).then(function () {
                          n.$toast("关注成功");
                        }),
                        setTimeout(function () {
                          window.location.reload();
                        }, 500);
                    })
                    .catch(function () {
                      window.location.reload();
                    });
                })
              : e === i
              ? this.$emit("error", {
                  code: 2,
                  message: "你时时刻刻都在关注你自己哦~",
                })
              : Ma(e, 1)
                  .then(function () {
                    (t.data.attribute = 2), t.$emit("follow-success");
                  })
                  .catch(function () {});
          },
          handleUnfollow: function () {
            var t = this,
              e = this.targetMid;
            e === this.myMid
              ? this.$emit("error", {
                  code: 3,
                  message: "你不能取消关注你自己哦~",
                })
              : Ma(e, 2).then(
                  function () {
                    (t.data.attribute = 0), t.$emit("unfollow-success");
                  },
                  function (e) {
                    t.$emit("error", e);
                  }
                );
          },
          unfollowEnter: function (t) {
            t.target.innerText = "取消关注";
          },
          unfollowLeave: function (t) {
            t.target.innerText = "已关注";
          },
        },
        computed: {
          cover: function () {
            var t = this.data,
              e = t.theme,
              i = t.top_photo;
            return e && e.id
              ? "//i0.hdslb.com/" + e.bg_img.toWebP()
              : void 0 === i
              ? ""
              : i.toWebP();
          },
          sexClass: function () {
            return "男" === this.data.sex
              ? "male"
              : "女" === this.data.sex
              ? "female"
              : "unknown";
          },
        },
        filters: {
          userDesc: function (t) {
            if (void 0 === t || 0 === t.length) return "no-desc";
          },
        },
      },
      ka =
        (i(534),
        Object(dt.a)(
          xa,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("transition", { attrs: { name: "fade" } }, [
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.isRendered,
                      expression: "isRendered",
                    },
                  ],
                  ref: "card",
                  attrs: { id: "id-card" },
                },
                [
                  "loaded" === t.isLoaded
                    ? [
                        i("div", {
                          staticClass: "idc-theme-img",
                          style: { backgroundImage: "url(" + t.cover + ")" },
                        }),
                        i("div", { staticClass: "idc-info clearfix" }, [
                          i(
                            "a",
                            {
                              staticClass: "idc-avatar-container",
                              attrs: {
                                href:
                                  "//space.bilibili.com/" + t.data.mid + "/",
                                target: "_blank",
                              },
                            },
                            [
                              i("img", {
                                staticClass: "idc-avatar",
                                attrs: {
                                  alt: t.data.name,
                                  src: t._f("coversize")(t.data.face, "54x54"),
                                },
                                on: {
                                  click: function (e) {
                                    return t.addReport(3);
                                  },
                                },
                              }),
                              [1, 2, 7].includes(t.data.official.role)
                                ? i("span", {
                                    staticClass:
                                      "user-auth-subscript avatar-m personal-auth",
                                    attrs: {
                                      "data-user-auth": "",
                                      title: "个人认证",
                                    },
                                  })
                                : t._e(),
                              [3, 4, 5, 6].includes(t.data.official.role)
                                ? i("span", {
                                    staticClass:
                                      "user-auth-subscript avatar-m organization-auth",
                                    attrs: {
                                      "data-user-auth": "",
                                      title: "企业/团体认证",
                                    },
                                  })
                                : t._e(),
                            ]
                          ),
                          i("div", { staticClass: "idc-content" }, [
                            i("div", [
                              i(
                                "a",
                                {
                                  staticClass: "idc-username",
                                  attrs: {
                                    href:
                                      "//space.bilibili.com/" +
                                      t.data.mid +
                                      "/",
                                    target: "_blank",
                                  },
                                },
                                [
                                  i(
                                    "b",
                                    {
                                      staticClass: "idc-uname",
                                      style: {
                                        color: t.data.vip
                                          ? t.data.vip.nickname_color
                                          : "",
                                      },
                                      attrs: { title: t.data.name },
                                      on: {
                                        click: function (e) {
                                          return t.addReport(4);
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(t.data.name) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              i("span", {
                                staticClass: "gender idc-gender icon",
                                class: t.sexClass,
                              }),
                              i("a", {
                                staticClass: "m-level idc-m-level",
                                attrs: {
                                  lvl: t.data.level,
                                  href: "//www.bilibili.com/html/help.html#k",
                                  target: "_blank",
                                },
                              }),
                            ]),
                            i("div", { staticClass: "idc-meta" }, [
                              i("span", { staticClass: "idc-meta-item" }, [
                                t._v(
                                  "关注 " +
                                    t._s(
                                      t._f("toWan")(t.data.numbers.following)
                                    )
                                ),
                              ]),
                              i("span", { staticClass: "idc-meta-item" }, [
                                t._v(
                                  "粉丝 " +
                                    t._s(t._f("toWan")(t.data.numbers.follower))
                                ),
                              ]),
                            ]),
                          ]),
                          i("div", { staticClass: "tag-list idc-tag-list" }),
                          0 !== t.data.official.role
                            ? i(
                                "div",
                                {
                                  staticClass: "idc-auth-description",
                                  class: t._f("userDesc")(
                                    t.data.official.title
                                  ),
                                },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t._f("decodeHTML")(
                                          t.data.official.title
                                        )
                                      ) +
                                      "\n        "
                                  ),
                                ]
                              )
                            : i("div", { staticClass: "idc-sign" }, [
                                t._v(t._s(t._f("decodeHTML")(t.data.sign))),
                              ]),
                        ]),
                        i(
                          "be-button-group",
                          { staticClass: "idc-action" },
                          [
                            -1 === [2, 6].indexOf(t.data.attribute)
                              ? i(
                                  "be-button",
                                  {
                                    staticClass: "idc-btn",
                                    attrs: { type: "primary" },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.handleFollow.apply(
                                          null,
                                          arguments
                                        );
                                      },
                                    },
                                  },
                                  [t._v("+关注")]
                                )
                              : i(
                                  "be-button",
                                  {
                                    staticClass: "idc-btn",
                                    attrs: { type: "ghost" },
                                    on: {
                                      mouseenter: t.unfollowEnter,
                                      mouseleave: t.unfollowLeave,
                                    },
                                    nativeOn: {
                                      click: function (e) {
                                        return t.handleUnfollow.apply(
                                          null,
                                          arguments
                                        );
                                      },
                                    },
                                  },
                                  [t._v("已关注")]
                                ),
                            i(
                              "be-button",
                              {
                                staticClass: "idc-btn",
                                attrs: {
                                  href:
                                    "//message.bilibili.com/#whisper/mid" +
                                    t.data.mid +
                                    "/",
                                },
                              },
                              [t._v("发消息")]
                            ),
                          ],
                          1
                        ),
                      ]
                    : "loading" === t.isLoaded
                    ? i("div", { staticClass: "idc-laoding-text" }, [
                        t._v("正在加载中，请稍后..."),
                      ])
                    : "error" === t.isLoaded
                    ? i("div", { staticClass: "idc-laoding-text" }, [
                        t._v("用户信息不可用"),
                      ])
                    : t._e(),
                ],
                2
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Ea = x.default.extend(ka),
      Ia = function () {},
      Oa = function (t) {
        var e = t.target,
          i = t.targetMid,
          n = t.popperOptions,
          a = t.myMid,
          r = t.upMid,
          o = t.cardReport,
          s = void 0 === o ? Ia : o,
          c = t.followSuccess,
          l = void 0 === c ? Ia : c,
          u = t.unfollowSuccess,
          d = void 0 === u ? Ia : u,
          f = t.error,
          p = void 0 === f ? Ia : f,
          m = new Ea({
            data: {
              target: e,
              targetMid: i,
              popperOptions: Object.assign({ placement: "right-start" }, n),
              myMid: a,
              upMid: r,
            },
          });
        (m.vm = m.$mount()),
          m.vm.$on("cardReport", s),
          m.vm.$on("follow-success", l),
          m.vm.$on("unfollow-success", d),
          m.vm.$on("error", p);
      },
      $a = 0,
      Aa = {
        name: "be-tab",
        data: function () {
          return { uid: $a++, currentValue: "", left: 0, width: 0 };
        },
        props: {
          tabs: {
            type: Array,
            default: function () {
              return [{ link: "", active: !1, text: "" }];
            },
          },
          value: { type: [String, Number], default: "" },
        },
        mounted: function () {
          var t = this.$refs[this.activeTab.name][0];
          (this.width = t.clientWidth), (this.left = t.offsetLeft);
        },
        methods: {
          handleChange: function (t) {
            (this.currentValue = t.target.value),
              this.$emit("input", this.currentValue);
          },
        },
        computed: {
          activeTab: function () {
            var t = this;
            return this.tabs.find(function (e) {
              return e.name === t.value;
            });
          },
        },
        watch: {
          currentValue: function (t) {
            var e = this.$refs[t][0];
            (this.width = e.clientWidth), (this.left = e.offsetLeft);
          },
        },
      },
      Na =
        (i(535),
        Object(dt.a)(
          Aa,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "be-tab" }, [
              i(
                "ul",
                { staticClass: "be-tab-inner clearfix" },
                t._l(t.tabs, function (e, n) {
                  return i(
                    "li",
                    {
                      key: n,
                      ref: e.name,
                      refInFor: !0,
                      staticClass: "be-tab-item",
                      class: { "is-active": e.name === t.value },
                    },
                    [
                      i("input", {
                        staticClass: "be-tab-input",
                        attrs: { type: "radio", name: "be-tab-" + t.uid },
                        domProps: { value: e.name },
                        on: { change: t.handleChange },
                      }),
                      i("span", [t._v(t._s(e.alias))]),
                    ]
                  );
                }),
                0
              ),
              i("div", {
                staticClass: "be-tab-cursor",
                style: {
                  transform: "translateX(" + t.left + "px)",
                  width: t.width + "px",
                },
              }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Da = {
        name: "be-tooltip",
        data: function () {
          return { left: 0, top: 0, show: !1, text: "呦吼~", target: null };
        },
        mounted: function () {
          var t = this.$el,
            e = this.target;
          t.ownerDocument.defaultView.addEventListener(
            "scroll",
            this.getPosition
          ),
            e.addEventListener("mouseenter", this.startTooltip),
            e.addEventListener("mouseleave", this.destroyElement);
        },
        methods: {
          getPosition: function () {
            if (this.show && null !== this.target) {
              var t = this.target,
                e = t.getBoundingClientRect();
              (this.left = e.left + (t.clientWidth - this.$el.clientWidth) / 2),
                (this.top = e.top - t.clientHeight - 10);
            }
          },
          destroyElement: function () {
            var t = this,
              e = this.$el,
              i = this.target;
            (this.show = !1),
              e.addEventListener("transitionend", function () {
                i.removeEventListener("mouseenter", t.startTooltip),
                  i.removeEventListener("mouseleave", t.destroyElement),
                  e.parentNode.removeChild(e),
                  t.$destroy();
              });
          },
          startTooltip: function () {
            (this.show = !0), this.$nextTick(this.getPosition);
          },
        },
        watch: {
          show: function (t) {
            t && this.startTooltip();
          },
        },
      },
      Ja =
        (i(536),
        Object(dt.a)(
          Da,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("transition", { attrs: { name: "fade" } }, [
              e(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: this.show,
                      expression: "show",
                    },
                  ],
                  staticClass: "be-tooltip",
                  style: { left: this.left + "px", top: this.top + "px" },
                },
                [this._v(this._s(this.text))]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Va = x.default.extend(Ja),
      Ra = function (t, e) {
        var i = new Va({ data: { target: e, text: t } });
        return (
          (i.vm = i.$mount()),
          document.body.appendChild(i.vm.$el),
          (i.show = !0),
          i
        );
      },
      Fa = i(243),
      Ba =
        (i(537),
        {
          name: "be-scrollbar",
          props: {
            source: {
              type: Array,
              required: !0,
              default: function () {
                return [];
              },
            },
            options: {
              type: Object,
              default: function () {
                return { suppressScrollX: !0 };
              },
            },
          },
          data: function () {
            return { ps: null };
          },
          mounted: function () {
            this.ps = new Fa.a(this.$refs.scrollbar, this.options);
          },
          beforeDestroy: function () {
            this.ps.destroy(), (this.ps = null);
          },
          methods: {
            psXReachStart: function () {
              this.$emit("ps-x-reach-start");
            },
            psYReachStart: function () {
              this.$emit("ps-y-reach-start");
            },
            psXReachEnd: function () {
              this.$emit("ps-x-reach-end");
            },
            psYReachEnd: function () {
              this.$emit("ps-y-reach-end");
            },
          },
          watch: {
            source: {
              deep: !0,
              handler: function () {
                this.$nextTick(this.ps.update);
              },
            },
          },
        }),
      Qa =
        (i(538),
        Object(dt.a)(
          Ba,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)(
              "div",
              {
                ref: "scrollbar",
                staticClass: "be-scrollbar",
                on: {
                  "ps-y-reach-end": this.psYReachEnd,
                  "ps-x-reach-end": this.psXReachEnd,
                  "ps-y-reach-start": this.psYReachStart,
                  "ps-x-reach-start": this.psXReachStart,
                },
              },
              [this._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Ga = {
        name: "be-switch",
        props: {
          value: { type: Boolean, default: !0 },
          disabled: { type: Boolean, default: !1 },
          onLabel: String,
          offLabel: String,
          name: String,
        },
        methods: {
          handleChange: function () {
            this.$emit("input", !this.value),
              this.$emit("change", { val: !this.value, name: this.name });
          },
        },
      },
      Ha =
        (i(539),
        Object(dt.a)(
          Ga,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              {
                staticClass: "be-switch-container",
                class: { "is-checked": t.value },
              },
              [
                i("input", {
                  ref: "checkbox",
                  staticClass: "be-switch-input",
                  attrs: { type: "checkbox", disabled: t.disabled },
                  domProps: { value: t.value },
                  on: { change: t.handleChange },
                }),
                t._m(0),
                t.onLabel && t.offLabel
                  ? i("div", { staticClass: "be-switch-label" }, [
                      i("span", [t._v(t._s(t.value ? t.onLabel : t.offLabel))]),
                    ])
                  : t._e(),
              ]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "be-switch" }, [
                e("i", { staticClass: "be-switch-cursor" }),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports),
      Wa = {
        name: "be-button",
        props: {
          type: { type: String, default: "default" },
          size: { type: String, default: "default" },
          fontColor: { type: String, default: "" },
          icon: { type: String, default: "" },
          color: { type: String, default: "" },
          disabled: { type: Boolean, default: !1 },
        },
        computed: {
          iconClass: function () {
            var t = [];
            return this.icon ? (t.push(this.icon), t) : t;
          },
          btnClass: function () {
            var t = [];
            switch (this.type) {
              case "primary":
                t.push("primary");
                break;
              case "default":
                t.push("default");
                break;
              case "ghost":
                t.push("ghost");
                break;
              case "success":
                t.push("success");
                break;
              case "info":
                t.push("info");
                break;
              case "warning":
                t.push("warning");
                break;
              case "danger":
                t.push("danger");
            }
            switch (this.size) {
              case "small":
                t.push("btn-small");
                break;
              case "large":
                t.push("btn-large");
            }
            return this.disabled && t.push("btn-disabled"), t;
          },
          styleList: function () {
            var t = {};
            return (
              this.color && (t.background = this.color),
              this.fontColor && (t.color = this.fontColor),
              t
            );
          },
        },
      },
      Xa =
        (i(540),
        Object(dt.a)(
          Wa,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "a",
              {
                staticClass: "btn",
                class: this.btnClass,
                style: this.styleList,
              },
              [
                this.icon
                  ? e("i", { staticClass: "btn-icon", class: this.iconClass })
                  : this._e(),
                e(
                  "span",
                  { staticClass: "btn-content" },
                  [this._t("default")],
                  2
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "7b0ffc38",
          null
        ).exports),
      qa = {
        name: "be-button-group",
        props: { align: { type: String, default: "center" } },
        computed: {
          styleClass: function () {
            return "btn-" + this.align;
          },
        },
      },
      za =
        (i(541),
        Object(dt.a)(
          qa,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)(
              "div",
              { staticClass: "btn-container", class: this.styleClass },
              [this._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          "1ea3cefa",
          null
        ).exports);
    var Ya,
      Ka = {
        name: "be-pagination",
        props: {
          current: { type: Number, default: 1, required: !0 },
          total: { type: Number, default: 0, required: !0 },
        },
        data: function () {
          return { prefixCls: "be-pager" };
        },
        computed: {
          allPages: function () {
            var t = Math.ceil(this.total);
            return 0 === t ? 1 : t;
          },
          simpleWrapClasses: function () {
            return ["".concat("be-pager"), "".concat("be-pager", "-simple")];
          },
          ElevatorClasses: function () {
            return ["".concat("be-pager", "-options-elevator")];
          },
          simplePagerClasses: function () {
            return "".concat("be-pager", "-simple-pager");
          },
          wrapClasses: function () {
            return ["".concat("be-pager"), { mini: !!this.size }];
          },
          prevClasses: function () {
            return [
              "".concat("be-pager", "-prev"),
              b()({}, "".concat("be-pager", "-disabled"), 1 === this.current),
            ];
          },
          nextClasses: function () {
            return [
              "".concat("be-pager", "-next"),
              b()(
                {},
                "".concat("be-pager", "-disabled"),
                this.current === this.allPages
              ),
            ];
          },
          firstPageClasses: function () {
            return [
              "".concat("be-pager", "-item"),
              b()(
                {},
                "".concat("be-pager", "-item-active"),
                1 === this.current
              ),
            ];
          },
          lastPageClasses: function () {
            return [
              "".concat("be-pager", "-item"),
              b()(
                {},
                "".concat("be-pager", "-item-active"),
                this.current === this.allPages
              ),
            ];
          },
        },
        methods: {
          changePageInput: function (t) {
            var e = t.target.value.trim(),
              i = 0;
            if (
              /^[1-9][0-9]*$/.test(e + "") &&
              (e = Number(e)) !== this.current
            ) {
              var n = this.allPages;
              i = e > n ? n : e;
            }
            i && (this.changePage(i), (t.target.value = ""));
          },
          changePage: function (t) {
            this.current !== t && this.$emit("turn-page", t);
          },
          prev: function () {
            var t = this.current;
            if (t <= 1) return !1;
            this.changePage(t - 1);
          },
          next: function () {
            var t = this.current;
            if (t >= this.allPages) return !1;
            this.changePage(t + 1);
          },
          fastPrev: function () {
            var t = this.current - 5;
            t > 0 ? this.changePage(t) : this.changePage(1);
          },
          fastNext: function () {
            var t = this.current + 5;
            t > this.allPages
              ? this.changePage(this.allPages)
              : this.changePage(t);
          },
        },
        watch: {
          current: function () {
            window.scrollTo(0, 0);
          },
        },
      },
      Za =
        (i(542),
        Object(dt.a)(
          Ka,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.total > 1,
                    expression: "total > 1",
                  },
                ],
                class: t.wrapClasses,
              },
              [
                i(
                  "li",
                  {
                    class: t.prevClasses,
                    attrs: { title: "上一页" },
                    on: { click: t.prev },
                  },
                  [i("a", [t._v("上一页")])]
                ),
                i(
                  "li",
                  {
                    class: t.firstPageClasses,
                    attrs: { title: "第一页" },
                    on: {
                      click: function (e) {
                        return t.changePage(1);
                      },
                    },
                  },
                  [i("a", [t._v("1")])]
                ),
                t.current - 3 > 1
                  ? i("li", { class: [t.prefixCls + "-item-jump-prev"] })
                  : t._e(),
                t.current - 2 > 1
                  ? i(
                      "li",
                      {
                        class: [t.prefixCls + "-item"],
                        attrs: { title: t.current - 2 },
                        on: {
                          click: function (e) {
                            return t.changePage(t.current - 2);
                          },
                        },
                      },
                      [i("a", [t._v(t._s(t.current - 2))])]
                    )
                  : t._e(),
                t.current - 1 > 1
                  ? i(
                      "li",
                      {
                        class: [t.prefixCls + "-item"],
                        attrs: { title: t.current - 1 },
                        on: {
                          click: function (e) {
                            return t.changePage(t.current - 1);
                          },
                        },
                      },
                      [i("a", [t._v(t._s(t.current - 1))])]
                    )
                  : t._e(),
                1 !== t.current && t.current !== t.allPages
                  ? i(
                      "li",
                      {
                        class: [
                          t.prefixCls + "-item",
                          t.prefixCls + "-item-active",
                        ],
                        attrs: { title: t.current },
                      },
                      [i("a", [t._v(t._s(t.current))])]
                    )
                  : t._e(),
                t.current + 1 < t.allPages
                  ? i(
                      "li",
                      {
                        class: [t.prefixCls + "-item"],
                        attrs: { title: t.current + 1 },
                        on: {
                          click: function (e) {
                            return t.changePage(t.current + 1);
                          },
                        },
                      },
                      [i("a", [t._v(t._s(t.current + 1))])]
                    )
                  : t._e(),
                t.current + 2 < t.allPages
                  ? i(
                      "li",
                      {
                        class: [t.prefixCls + "-item"],
                        attrs: { title: t.current + 2 },
                        on: {
                          click: function (e) {
                            return t.changePage(t.current + 2);
                          },
                        },
                      },
                      [i("a", [t._v(t._s(t.current + 2))])]
                    )
                  : t._e(),
                t.current + 3 < t.allPages
                  ? i("li", { class: [t.prefixCls + "-item-jump-next"] })
                  : t._e(),
                t.allPages > 1
                  ? i(
                      "li",
                      {
                        class: t.lastPageClasses,
                        attrs: { title: "最后一页:" + t.allPages },
                        on: {
                          click: function (e) {
                            return t.changePage(t.allPages);
                          },
                        },
                      },
                      [i("a", [t._v(t._s(t.allPages))])]
                    )
                  : t._e(),
                i(
                  "li",
                  {
                    class: t.nextClasses,
                    attrs: { title: "下一页" },
                    on: { click: t.next },
                  },
                  [i("a", [t._v("下一页")])]
                ),
                i(
                  "span",
                  { class: [t.prefixCls + "-total"] },
                  [
                    t._t("default", function () {
                      return [t._v("共 " + t._s(t.total) + " 页，")];
                    }),
                  ],
                  2
                ),
                i("span", { class: t.ElevatorClasses }, [
                  t._v("\n    跳至\n    "),
                  i("input", {
                    staticClass: "space_input",
                    attrs: { type: "text" },
                    on: {
                      keyup: function (e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "enter", 13, e.key, "Enter")
                          ? null
                          : t.changePageInput.apply(null, arguments);
                      },
                    },
                  }),
                  t._v(" 页\n  "),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      tr = i(148),
      er = {
        name: "be-dropdown",
        data: function () {
          return { isDropdown: !0, open: !1, timer: null };
        },
        props: {
          trigger: {
            type: String,
            default: "click",
            validator: function (t) {
              return ["", "click", "hover"].indexOf(t) > -1;
            },
          },
          align: {
            type: String,
            default: "",
            validator: function (t) {
              return ["", "right", "left", "middle"].indexOf(t) > -1;
            },
          },
          append: { type: Boolean, default: !0 },
        },
        provide: function () {
          return { dropdown: this };
        },
        methods: {
          handleMouseenter: Object(tr.a)(300, !0, function () {
            "hover" === this.trigger &&
              (clearTimeout(this.timer), (this.timer = null), (this.open = !0));
          }),
          handleMouseleave: function () {
            "hover" === this.trigger &&
              (this.timer = setTimeout(this.hide, 300));
          },
          handleClick: function () {
            "click" === this.trigger &&
              ((this.open = !this.open), this.$emit("dropClick", this.open));
          },
          hide: function () {
            this.open = !1;
          },
        },
      },
      ir =
        (i(543),
        Object(dt.a)(
          er,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              {
                directives: [
                  {
                    name: "clickoutside",
                    rawName: "v-clickoutside",
                    value: t.hide,
                    expression: "hide",
                  },
                ],
                staticClass: "be-dropdown",
                on: {
                  mouseenter: t.handleMouseenter,
                  mouseleave: t.handleMouseleave,
                  click: t.handleClick,
                },
              },
              [
                t.$slots.trigger
                  ? t._t("trigger")
                  : i("div", { staticClass: "be-dropdown-trigger" }, [
                      i("i", {
                        staticClass: "iconfont icon-ic_more",
                        attrs: { title: "更多操作" },
                      }),
                    ]),
                t._t("menu"),
                t.$slots.trigger || t.$slots.menu ? t._e() : t._t("default"),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      nr = {
        name: "be-dropdown-item",
        props: {
          name: { type: [String, Number] },
          delimiter: { type: Boolean, default: !1 },
        },
        methods: {
          handleSelect: function () {
            this.dropdown.$emit("select", this.name);
          },
        },
        computed: {
          dropdown: function () {
            for (var t = this.$parent; !t.isDropdown; ) t = t.$parent;
            return t;
          },
        },
      },
      ar =
        (i(544),
        Object(dt.a)(
          nr,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)(
              "li",
              {
                staticClass: "be-dropdown-item",
                class: { "be-dropdown-item-delimiter": this.delimiter },
                on: { click: this.handleSelect },
              },
              [this._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      rr = {
        name: "be-dropdown-menu",
        data: function () {
          return { left: 0, top: 0, transformOrigin: "top" };
        },
        mounted: function () {
          this.$el.ownerDocument.defaultView.addEventListener(
            "scroll",
            this.getPosition
          );
        },
        computed: {
          dropdown: function () {
            for (var t = this.$parent; !t.isDropdown; ) t = t.$parent;
            return t;
          },
          open: function () {
            return this.dropdown.open;
          },
          align: function () {
            return this.dropdown.align;
          },
        },
        methods: {
          getPosition: function () {
            if (this.open) {
              var t = this.dropdown.$el,
                e = t.getBoundingClientRect(),
                i = this.$el.clientWidth,
                n = this.$el.clientHeight,
                a = t.clientWidth,
                r = t.clientHeight,
                o = e.left,
                s = e.top + r + 10;
              switch (((this.transformOrigin = "top"), this.align)) {
                case "right":
                default:
                  o += a - i;
                  break;
                case "left":
                  break;
                case "middle":
                  o += (a - i) / 2;
              }
              s + n > document.body.clientHeight &&
                ((s = e.top - n - 10), (this.transformOrigin = "bottom")),
                (this.left = o),
                (this.top = s);
            }
          },
        },
        watch: {
          open: function (t) {
            t && this.$nextTick(this.getPosition);
          },
        },
      },
      or =
        (i(545),
        [
          ca,
          ua,
          Na,
          Qa,
          Ha,
          Xa,
          za,
          Za,
          ir,
          ar,
          Object(dt.a)(
            rr,
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("transition", { attrs: { name: "zoom" } }, [
                e(
                  "ul",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: this.open,
                        expression: "open",
                      },
                    ],
                    staticClass: "be-dropdown-menu",
                    class: ["menu-align-" + this.align],
                    style: {
                      left: this.left + "px",
                      top: this.top + "px",
                      transformOrigin: this.transformOrigin,
                    },
                  },
                  [this._t("default")],
                  2
                ),
              ]);
            },
            [],
            !1,
            null,
            null,
            null
          ).exports,
          i(145).a,
        ]);
    (x.default.config.silent = !0),
      (x.default.config.productionTip = !1),
      (x.default.prototype.$bus = fe),
      (function (t) {
        t.directive("rec", {
          bind: function (e, i) {
            t.prototype.$isServer ||
              e.addEventListener(
                "click",
                function () {
                  rec(i.value);
                },
                !1
              );
          },
        });
      })((Ya = x.default)),
      (function (t) {
        t.directive("rep", {
          bind: function (e, i) {
            t.prototype.$isServer ||
              e.addEventListener(
                "click",
                function () {
                  (window.spaceReport[i.value] = ""),
                    window.reportObserver.forceCommit();
                },
                !1
              );
          },
        });
      })(Ya),
      (function (t) {
        t.directive("watchlater", {
          bind: function (e, i) {
            var n = i.value,
              a = i.modifiers,
              r = a.tip,
              o = a.channel,
              s = a.video,
              c = n.cid,
              l = n.count;
            o &&
              e.addEventListener("click", function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  UserStatus.userInfo.isLogin
                    ? t.http
                        .jsonp(
                          "//api.bilibili.com/x/v2/history/toview/remaining"
                        )
                        .then(
                          function (e) {
                            var i = e.data.count;
                            if (0 !== i) {
                              var n =
                                i >= l
                                  ? "你即将添加本频道的 ".concat(
                                      l,
                                      " 个视频到稍后再看，点击确认进行批量添加哦"
                                    )
                                  : "稍后再看列表的库存不足啦，继续添加只能收录该频道前面的部分";
                              t.$confirm(n).then(function () {
                                t.http
                                  .post("/ajax/channel/addAllToView", {
                                    cid: c,
                                    mid: _bili_space_mid,
                                  })
                                  .then(
                                    function (e) {
                                      var i = e.data,
                                        n = i.status,
                                        a = i.data;
                                      n
                                        ? t.$toast("添加稍后再看成功^_^")
                                        : t.$warn(
                                            "添加稍后再看失败，".concat(a)
                                          );
                                    },
                                    function () {
                                      t.$warn("添加稍后再看失败，网络错误");
                                    }
                                  );
                              });
                            } else t.$warn("你的稍后再看列表库存满啦");
                          },
                          function () {
                            t.$warn("添加稍后再看失败，网络错误");
                          }
                        )
                    : window.UserStatus &&
                      window.UserStatus.quickLogin(function () {
                        window.location.reload();
                      });
              }),
              s &&
                e.addEventListener(
                  "click",
                  function (i) {
                    i.preventDefault(), i.stopPropagation();
                    var a = n.aid,
                      r = ea.indexOf(a),
                      o = r > -1;
                    window.UserStatus.userInfo.isLogin
                      ? o
                        ? (rec("add_watchlater", {
                            source: "space",
                            action: "del",
                          }),
                          t.http
                            .post(
                              "//api.bilibili.com/x/v2/history/toview/del",
                              { aid: a, viewed: !1 }
                            )
                            .then(
                              function (i) {
                                var n = i.data,
                                  a = n.code,
                                  o = n.message;
                                0 === a
                                  ? (ea.splice(r, 1),
                                    fe.$emit(
                                      "watchlater",
                                      JSON.parse(JSON.stringify(ea))
                                    ),
                                    t.$tooltip("已从稍后再看列表中移除", e))
                                  : (o || (o = "移除失败，请稍后重试"),
                                    t.$tooltip(o, e));
                              },
                              function () {
                                t.$tooltip("移除失败，请稍后重试", e);
                              }
                            ))
                        : (rec("add_watchlater", { source: "space" }),
                          t.http
                            .post(
                              "//api.bilibili.com/x/v2/history/toview/add",
                              { aid: a }
                            )
                            .then(
                              function (i) {
                                var n = i.data,
                                  r = n.code,
                                  o = n.message;
                                0 === r
                                  ? (ea.push(a),
                                    fe.$emit(
                                      "watchlater",
                                      JSON.parse(JSON.stringify(ea))
                                    ),
                                    t.$tooltip("已加稍后再看", e))
                                  : (o || (o = "添加失败，请稍后重试"),
                                    t.$tooltip(o, e));
                              },
                              function () {
                                t.$tooltip("添加失败，请稍后重试", e);
                              }
                            ))
                      : window.UserStatus &&
                        window.UserStatus.quickLogin(function () {
                          window.location.reload();
                        });
                  },
                  !1
                ),
              r &&
                e.addEventListener("mouseenter", function () {
                  t.$tooltip(
                    e.className.split(" ").indexOf("has-select") > -1
                      ? "移除稍后再看"
                      : "稍后再看",
                    e
                  );
                });
          },
        });
      })(Ya),
      (function (t) {
        t.prototype.$isServer ||
          (document.addEventListener(
            "mousedown",
            function (t) {
              return (Zn = t);
            },
            !1
          ),
          document.addEventListener(
            "mouseup",
            function (t) {
              ia.forEach(function (e) {
                return e[na].documentHandler(t, Zn);
              });
            },
            !1
          )),
          t.directive("clickoutside", {
            bind: function (t, e, i) {
              ia.push(t);
              var n = aa++,
                a = e.expression,
                r = e.value;
              /\W/gi.test(a),
                (t[na] = {
                  id: n,
                  documentHandler: ra(t, e, i),
                  methodName: a,
                  bindingFn: r,
                });
            },
            update: function (t, e, i) {
              var n = e.expression,
                a = e.value;
              (t[na].documentHandler = ra(t, e, i)),
                (t[na].methodName = n),
                (t[na].bindingFn = a);
            },
            unbind: function (t) {
              for (var e = ia.length, i = 0; i < e; i++)
                if (ia[i][na].id === t[na].id) {
                  ia.splice(i, 1);
                  break;
                }
              delete t[na];
            },
          });
      })(Ya),
      (function (t) {
        t.directive("sortable", {
          bind: function (t, e) {
            new oa.a(t, e.value);
          },
        });
      })(Ya),
      (function (t) {
        var e = t.prototype.$isServer;
        t.directive("hlkeyword", function (t, i) {
          var n = Object(bt.c)(i.value);
          if (e) t.innerHTML = n;
          else {
            if (void 0 === window._search_keyword)
              return void (t.innerHTML = n);
            "" !== window._search_keyword &&
              (n = n.replace(
                new RegExp(
                  "(" +
                    window._search_keyword.replace(
                      /[.*+?^${}()|[\]\\]/g,
                      "\\$&"
                    ) +
                    ")",
                  "gi"
                ),
                '<span class="search-keyword-highlight">$1</span>'
              )),
              (t.innerHTML = n);
          }
        });
      })(Ya),
      (function (t) {
        or.map(function (e) {
          t.component(e.name, e);
        }),
          (t.prototype.$toast = ma),
          (t.prototype.$card = Oa),
          (t.prototype.$message = Ca),
          (t.prototype.$tooltip = Ra),
          (t.prototype.$warn = Ca.warn),
          (t.prototype.$info = Ca.info),
          (t.prototype.$confirm = Ca.confirm),
          (t.$toast = ma),
          (t.$message = Ca),
          (t.$tooltip = Ra),
          (t.$warn = Ca.warn),
          (t.$info = Ca.info),
          (t.$confirm = Ca.confirm);
      })(x.default),
      x.default.use(le.a),
      (x.default.config.keyCodes.comma = 188);
    x.default.prototype.isIE = !(
      !window.ActiveXObject && !("ActiveXObject" in window)
    );
    var sr = /^\/\/api.bilibili.com/,
      cr = function (t) {
        var e = t.method,
          i = t.url,
          n = t.data,
          a = void 0 === n ? {} : n,
          r = t.params,
          o = void 0 === r ? {} : r,
          s = t.headers;
        return (
          (e = e.toLowerCase()),
          sr.test(i) &&
            ("post" === e ? (a.jsonp = "jsonp") : (o.jsonp = "jsonp")),
          "post" === e &&
            (x.default.prototype.$isServer
              ? (a.csrf = Object(se.f)(s.cookie).bili_jct)
              : (a.csrf = Object(se.e)("bili_jct")),
            (t.withCredentials = !0),
            (t.data = de.a.stringify(a))),
          (t.params = o),
          Object(k.a)(t).then(function (t) {
            return t || { data: {} };
          })
        );
      };
    (cr.get = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return (e.url = t), (e.method = "get"), (e.withCredentials = !0), cr(e);
    }),
      (cr.post = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return cr({ url: t, data: e, method: "post" });
      }),
      (cr.jsonp = me),
      (x.default.http = cr);
    var lr = i(140);
    i(552);
    Sentry.init({
      dsn: "http".concat(
        "s",
        "://16fc99b7243643c09cc4680b7fe3fcd8@api.bilibili.com/x/traceback/10"
      ),
      debug: !1,
      release: "c93b4516819ba4466a477a6aeb39b418c54af16a",
      environment: "production",
      sampleRate: 0.2,
      integrations: [
        new lr.TrackingReport({ env: "production" }),
        new lr.BiliIntegration({}),
        new Sentry.Integrations.Vue({
          Vue: x.default,
          attachProps: !0,
          logErrors: !1,
        }),
      ],
    });
    var ur,
      dr = {
        app: new x.default({
          router: te,
          store: ta,
          ssrContext: ur,
          render: function (t) {
            return t(Yt);
          },
        }),
        router: te,
        store: ta,
      },
      fr = dr.app,
      pr = dr.router,
      mr = dr.store;
    pr.onReady(function () {
      var t = pr.getMatchedComponents();
      (t && 0 !== t.length) ||
        (window.location.href = "//www.bilibili.com/404.html");
      var e = document.cookie,
        i = window._bili_space_mid,
        n = t
          .filter(function (t) {
            return t.asyncData;
          })
          .map(function (t) {
            return t.asyncData(mr, { cookie: e, mid: i });
          })
          .concat([
            mr.dispatch("fetchMyInfo", { mid: i }).catch(function () {
              return !1;
            }),
            mr.dispatch("fetchRelation", i).catch(function () {
              return !1;
            }),
            mr.dispatch("fetchBeRelation", i).catch(function () {
              return !1;
            }),
          ]);
      Promise.all(n)
        .then(function (t) {
          if ("owner" !== mr.state.init._bili_space_state && t[2]) {
            var e = t[2].attribute,
              i = "";
            (i =
              0 === mr.state.init._bili_space_mymid
                ? "visitor"
                : [2, 6].indexOf(+e) > -1
                ? "fans"
                : "visitor"),
              mr.commit("RELATION_WITH_UPER", +e),
              mr.commit("UPADTE_USER_STATE", i),
              mr.commit("GET_ACCRELATION_SUCCESS", t[3]);
          }
          fr.$mount("#space-app");
        })
        .catch(function (t) {
          console.log(t);
        }),
        window && window.document.getElementById("app") && fr.$mount("#app");
    });
  },
});
//# sourceMappingURL=space.c93b4516819ba4466a477a6aeb39b418c54af16a.js.map
